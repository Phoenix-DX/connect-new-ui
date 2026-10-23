# Feed_Embeded

OutSystems: `UBTConnect.Home.Feed_Embeded` · pack `migration/blocks/UBTConnect.Home.Feed_Embeded.md` · compiled source
`migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect.Home.Feed_Embeded.mvc.js` (cited as `:line`). Used by
HomeFeed, FeedItemDetail and MessageDetail.

| Input      | Type | Prop         | Default |
| ---------- | ---- | ------------ | ------- |
| FeedItemId | Text | `feedItemId` | `''`    |

Events: `Event_Share(ShareId, FeedItemTitle, FeedItemSubtitle, FeedItemImageURL)` → `onEventShare` (HomeFeed handles
it with Handler_ShareFeed, `UBTConnect.Home.HomeFeed.mvc.js:412-419`). Placeholders: none.

Children:

- `Embedded_FeedCMS` (built). Its mock page and config are the single switch point for the real CMS (D8 b).
- `SharePopup` (built).
- `FileTransferPlugin.FileTransfer.HandleDownload`: a Cordova plugin block that renders nothing. It is an empty
  `OSBlock`, as `HandleOnResumeOpenLink` does for its plugin blocks.

## Props from the caller

The component renders from props only; it keeps the share popup state (SharePopUp_Show, SharePopUp_Id,
ShareFeedItem_Title). The flows that use the platform are in `useEmbeddedFeed(feedItemId)`
(`platform/session/useEmbeddedFeed.ts`). HomeFeed and FeedItemDetail call the hook and give the result to the component
with `id`, `feedItemId` and `onEventShare`:

| Prop               | From the hook                                                                       |
| ------------------ | ----------------------------------------------------------------------------------- |
| `isFeedEnabled`    | GetHasFeedEnabled (flag C2EnableFeed)                                               |
| `hasExtendedShare` | GetHasExtendedShare (flag C2ExtendedShare)                                          |
| `b2CTenant`        | the client variable `UBTConnect.Embedd_B2CTenant`                                   |
| `feedConfig`       | DataActionGetFeedConfig of Embedded_FeedCMS (`useFeedConfigQuery` of `api/feed`)    |
| `onDownloaded`     | Handle_Download: OpenInApp_TryOpenFileInApp                                         |
| `onShareToConnect` | Handle_Share_Connect after the popup closed: yield, then the LegacyShareObject page |

## Wiring

- Embedded_FeedCMS only when GetHasFeedEnabled (flag C2EnableFeed, TST on; :157), with B2CTenant = client variable
  `UBTConnect.Embedd_B2CTenant` and FeedItemId (:159-167).
- Feed OnShare → Embedded_FeedCMSOnShare (:183, :455-505): GetHasExtendedShare (flag C2ExtendedShare, TST on) → raise
  Event_Share with the 4 values; otherwise SharePopUp_Id = ShareId, SharePopUp_Show = True, ShareFeedItem_Title =
  FeedItemTitle, which opens SharePopup.
- SharePopup In_ContactPopupData (:212-239): EntityTypeId Connect_Entity.FeedItem, EntityId TextToInteger(SharePopUp_Id),
  ActionName "Share " + ShareFeedItem_Title, ShowPopup SharePopUp_Show, the other set fields empty/False/0.
- SharePopup Event_Cancel → Handle_Share(False) (:243, :381-405). Event_ShareToConnect → Handle_Share_Connect (:271,
  :418-453): close, yield (YieldJS), navigate to `/UBTConnect/LegacyShareObject?In_ShareObjectTypeId=Feed&In_CustomTitle=
  <title>&In_ObjectId=<id>`.

## Captured variants (1; 1 tested)

| Capture | Source           | What it shows                                                     |
| ------- | ---------------- | ----------------------------------------------------------------- |
| v1      | HomeFeed/default | feed enabled: Embedded_FeedCMS, closed SharePopup, HandleDownload |

The capture compares the three child wrappers only. Nested blocks have their own tests. Tests with `it` cover the other
branches. The test replaces Embedded_FeedCMS by its wrapper to raise OnShare, which the mock SDK never raises.

## Not captured / not settled

- No capture of FeedItemDetail or MessageDetail (FeedItemId set), of the feed disabled, or of the SharePopup opened from
  the feed. The mock SDK raises no OnShare. So in the app only the tests reach Event_Share and the SharePopup.
- `Type_ShareObject.Feed = 'Feed'` (`../lib/staticEntities.ts`): confirmed by the TST value
  (migration/knowledge/static-entities.md "TST values"); no capture of Share to Connect from the feed.
- Event_ShareToOthers → Handle_Share_Others (:257, :775-807: close, then ShareEntity_ByURL(Type_ShareObject.Feed, Id))
  is not wired: ShareEntity_ByURL (UBTConnect_Utils) is not ported (SocialSharing plugin + CS_CreateShareProfileLink),
  and SharePopup shows "Share to other apps" only on a native device, never in the browser.
- Feed OnDownloaded → Handle_Download (:169-182, :685-722): OpenInApp_TryOpenFileInApp(Filename, URL,
  "connect-feed-documents", "pdf") through the shared port in `UBTConnect_Utils/lib/actions.ts` (web branch: the
  fallback viewer; the port logs the Cordova download as not ported). Wired by audit A1 (2026-10-16). The mock feed page
  (`public/mock-embeds/feed-cms.html`) never posts `feed:download`, so in the app only the tests reach it.
- HandleDownload events (:296-338) come from the native plugin only. They are not ported:
  - HandleDownloadOnDownloadComplete (:544-624): media scan, OpenDocumentFromLocalPath.
  - OnDownloadError (:626-683) shows an info message:
    - When the error is "Document not found": "The file you are trying to open is no longer available and cannot be opened."
    - Otherwise: "Unfortunately this file could not be opened. Please try again at a later time."
  - OnDownloadProgress (empty).
- JSUtils_Console_Log(ShareId) is not ported (as in Embedded_FeedCMS).
