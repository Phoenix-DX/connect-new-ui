# Example: diagrams for spec sections 2a and 10

A worked pattern for the architecture diagram and the sequence diagrams of one screen. Every name below is a neutral placeholder (`ListScreen`, `ScreenBlock_List`, `DataActionGetSummary`, ...): replace each with the real OutSystems name read from the capture and the compiled code. Copy the conventions, not the content.

Pattern illustrated: a list screen whose content block fetches a summary on enter, signs image URLs, opens an item on tap through a server action, and restores from the view cache on back.

## 2a. Architecture

```mermaid
flowchart TB
  subgraph Browser["Browser (PWA)"]
    direction TB
    Shell["ListScreen<br/>route shell · MainModule"]
    subgraph Content["Rendered blocks"]
      direction LR
      Layout["Layout<br/>SharedLayoutModule<br/>header, back, content"]
      Block["ScreenBlock_List<br/>FeatureModule_MUI<br/>state, fetch, clicks"]
      Bottom["BottomBar<br/>MainModule<br/>tabs, flags, badge"]
    end
    Cards["ListCard → ListAlbum → Gallery<br/>one card per non-empty group"]
    Cache["View cache + preload<br/>navigation helper"]
    Vars["Client variables<br/>flags, lock, user ids"]
    Shell --> Content
    Block --> Cards
    Block -.reads.-> Cache
    Block -.reads.-> Vars
  end
  subgraph Server["OutSystems server · screenservices"]
    direction LR
    DA["DataActionGetSummary<br/>on enter"]
    SA["ActionGetItemById<br/>(variant action behind a flag)<br/>on tap"]
    IMG["ActionSignImages<br/>sign photo URLs · trigger unverified"]
    IS["FeatureModule_IS"]
    DA --> IS
    SA --> IS
  end
  Backend["Backend API<br/>not visible from the browser"]
  Block -- "POST JSON" --> DA
  Block -- "POST JSON" --> SA
  Block -. "?" .-> IMG
  IS -.-> Backend

  classDef unknown stroke-dasharray: 5 4;
  class Backend,IMG unknown;
```

## 10. Sequences

### 10.1 Enter the screen (fresh vs back)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant S as ListScreen (ScreenBlock + shell)
  participant API as screenservices
  U->>S: open the route (bottom bar tab)
  S->>S: OnInitialize: was the view restored from cache?
  alt fresh entry
    S->>S: clear lists, show spinner (IsFetching = true)
  else back from history
    S->>S: keep cached cards, no spinner
  end
  S->>API: DataActionGetSummary (no inputs)
  alt success
    API-->>S: GroupA, GroupB, GroupC lists
    S->>S: OnAfterFetch: copy lists, HasItems, HasNetworkError = false
    S->>API: ActionSignImages
    Note over S,API: observed in capture, trigger and order unverified
    API-->>S: signed image URLs
    S-->>U: cards (non-empty groups) or empty state
  else CommunicationException / timeout
    API--xS: request failed
    S-->>U: network warning + error toast
  end
```

### 10.2 Tap an item

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ScreenBlock_List
  participant API as screenservices
  participant N as Next screen (via route shell)
  U->>B: tap item
  alt variant flag on
    B->>API: ActionGetItemById_V2(ItemId)
    Note over B,API: not observed (test account has the flag off)
  else
    B->>API: ActionGetItemById(ItemId)
  end
  API-->>B: IsFound, ItemResponse
  alt not found
    B-->>U: error toast
    B->>API: refetch DataActionGetSummary (silent)
  else record not available
    B-->>U: info toast
  else record disabled
    B-->>U: upgrade popup
  else type A
    B->>N: DetailScreenA?ItemId (preload list)
  else type B
    B->>N: DetailScreenB?ItemId
  end
```

### 10.3 Back from a destination

```mermaid
sequenceDiagram
  actor U as User
  participant N as Destination screen
  participant S as ListScreen
  participant API as screenservices
  U->>N: back
  N->>S: navigateBack (view restored from cache)
  S-->>U: cached cards immediately (no spinner)
  S->>API: DataActionGetSummary (background refresh)
  API-->>S: fresh lists
  S-->>U: re-render if changed
```
