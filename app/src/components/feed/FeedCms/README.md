# Embedded_FeedCMS

OutSystems: `UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS` · pack
`migration/blocks/UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.md`

| Input      | Type | Prop         | Default |
| ---------- | ---- | ------------ | ------- |
| FeedItemId | Text | `feedItemId` | `''`    |
| B2CTenant  | Text | `b2CTenant`  | `''`    |

Events: `OnShare(ItemId, FeedItemTitle, FeedItemSubtitle, FeedItemImageURL)` → `onOnShare`, `OnDownloaded(URL, Filename)`
→ `onOnDownloaded`, `OnLoaded` → `onOnLoaded`. No placeholders.

Data: `DataActionGetFeedConfig` (contract `UBTConnect_EmbedFeed/Embedded_FeedCMS/DataActionGetFeedConfig`, fictional).

The component renders from props only. The caller fetches the answer with `useFeedConfigQuery` of `api/feed` and gives
it as `config`. The inputs are FeedItemId and B2CTenant. The query logs a failure, as the block did. `useEmbeddedFeed`
(`platform/session`) does this for Feed_Embeded.

Mock (`mocks.ts`): BaseURL is the app's own origin, with no token. Decision D8 (b, user 2026-10-14): the feed iframe is
a same-size mock page. **BaseURL is the single switch point** for the real CMS.

Flow (compiled controller):

- OnInitialize builds the skeleton list (5 items; 1 with FeedItemId).
- OnReady sets isLoading.
- When `config` arrives (GetFeedConfig OnAfterFetch), the InitializeFeed JS node configures the Connect2Feed SDK once. It
  loads the feed (or one item) into `<id>-connect2feeds`. Without `config` (loading or failed), the skeleton stays.
- The SDK's completion runs Action_OnFeedComplete (isLoading False, OnLoaded) and handleFeedScroll (iframe `scrolling`
  yes / no around a 60 px threshold of the `.active-screen.screen-container` scroll).
- OnDestroy removes the scroll listener.

The iframe size comes from the original CSS
(`UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.css`: width 100%, min-height `calc(100vh - var(--header-size))`).

## Captured variants (2 tested)

| Capture | Source           | What it shows                                                                 |
| ------- | ---------------- | ----------------------------------------------------------------------------- |
| v1      | HomeFeed/default | loaded: container without `display-none` (test removes the SDK iframe, below) |
| v2      | HomeFeed/loading | skeleton (SkeletonSection, nested) and the hidden container                   |

## SDK (ported)

`connect2Feed.ts` and its modules port the Connect2Feed SDK (`migration/runtime-sources/UBTConnect_EmbedFeed.EmbedFeed.js`).
`connect2Feed.ts` has configure, loadFeeds, destroy, embed and reset. `connect2FeedState.ts` has the shared state, the
defaults and mergeConfig. The exported record `sdk` there holds the module variables of the SDK as fields, because an ES
module cannot assign a variable of another module. `connect2FeedIframe.ts` has the iframe code, `connect2FeedMessages.ts`
the message handler and `connect2FeedItems.ts` the item iframes (openFeedItem).

Defaults and mergeConfig (only its own keys: `channelId` and `tokenType` from InitializeFeed are dropped, :5-49).

- configure listens to `message` once. It preloads a hidden iframe `<BaseURL>/embed/feeds?theme&limit[&hideActions][&b2c…]
[&feedId]&preload=true` in the container (:319-417).
- loadFeeds shows the iframe and posts `feeds:load` once configure settles (`auth:ready` or 15 s), or creates
  `connect2-feeds-iframe` (:500-560).
- openFeedItem uses `<BaseURL>/embed/feeds/item/<id>` with its own listener (:610-710).

Messages count only from `origin === BaseURL`:

- `embed:ready` (auth token / theme, onReady)
- `embed:complete` (total 0 hides the iframe and collapses the container; onComplete once)
- `feeds:loaded`
- `feed:share` → OnShare(feedId, feedTitle, subtitle, image)
- `feed:download` → OnDownloaded(url, fileName)

The references for the messages are :182-315; block wiring is Embedded_FeedCMS.mvc.js:1046-1110. The mock page
(`public/mock-embeds/feed-cms.html`) answers `embed:ready` / `embed:complete` and ignores the query.

## Not captured / not settled

- **CR-W2F-1**: the SDK needs BaseURL to be the CMS origin (the iframe path is `<BaseURL>/embed/feeds…`; messages are
  accepted only from `origin === BaseURL`). The mock BaseURL `/mock-embeds/feed-cms.html` is neither. The dev server
  answers `/mock-embeds/feed-cms.html/embed/feeds…` with the app's index.html, and no message is accepted. So in the
  running mock app the feed stays on its skeleton until the CR is applied. Tests simulate the CMS messages.
- The TST capture shows the container empty (no iframe in the raw DOM either), so the v1 test compares without it.
- The JSUtils_Console_Log calls (onError, onFeedClick, timings) are not ported.
- handleFeedScroll returns early when there is no scroll container. In that case the original throws.
