# Skeleton

OutSystems: `UBTConnectLibrary.ConnectPatterns.SkeletonSection` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.SkeletonSection.md`

The base skeleton of `components/ui` (P7-3; `docs/refactor/duplicates.md`, group 3). It renders the DOM of
`SkeletonSection`: the block name in the DOM stays `ConnectPatterns.SkeletonSection`.

| Input                   | Type    | Prop                   | Default |
| ----------------------- | ------- | ---------------------- | ------- |
| In_IsLoading            | Boolean | `isLoading`            | `false` |
| In_ExtendedClass        | Text    | `extendedClass`        | `''`    |
| In_IsActiveWhileLoading | Boolean | `isActiveWhileLoading` | `false` |

Events: none. Placeholder: `Placeholder_LoadingSection` → `children`.
Class: `In_ExtendedClass + " " + (In_IsLoading ? "ubt-skeleton-section" : "")`, kept verbatim.

Users: 62 files in `components/`, `containers/` and `pages/` (46 routes by their own code). Not merged into this
component: CardTextSkeleton, OrbitSkeleton, AssembleSummarySkeleton and the result-item skeletons of AssembleDetail and
AssembleEvents. Each one has its own DOM.

## Captured variants (69 distinct; 4 tested)

| Capture | Source                                      |
| ------- | ------------------------------------------- |
| v1      | BookmarksByGroup/default (link + IconBadge) |
| v2      | BrowseCountries/default (list, not loading) |
| v3      | BrowseCountries/loading (loading)           |
| v4      | BrowseDirectory/default                     |

## Not settled

- `inert` while loading: OnReady / OnParametersChanged call `JSUtils_Element_Operations_ToggleAttribute(In_IsLoading,
"inert", …)` unless active while loading, and remove it after render otherwise. That action's JS
  (UBTJavaScriptUtils) is not in the captured sources, and the captures do not record `inert` (they drop many attributes,
  e.g. `preserveAspectRatio`). Built from the call as written: `inert` on while loading and not active while loading.
