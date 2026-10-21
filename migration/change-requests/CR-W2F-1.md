# CR-W2F-1: Mock Feed CMS origin for the ported Connect2Feed SDK

- Status: applied
- Raised by: foundation follow-up after wave 2, 2026-10-14
- Block: `UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS` → `app/src/shared/UBTConnect_EmbedFeed/Embedded_FeedCMS/`
- Related: decision D8 (b), `migration/knowledge/runtime-sources.md`

## Evidence
- `migration/runtime-sources/UBTConnect_EmbedFeed.EmbedFeed.js:70`: iframe URL = `baseUrl + '/embed/feeds?' + params`;
  `:693`: item URL = `baseUrl + '/embed/feeds/item/' + id`.
- `:183`, `:617`: a message is handled only when `event.origin === config.baseUrl`; `:146`, `:540` and the other posts
  use `baseUrl` as target origin. So the SDK only works when BaseURL is exactly an origin (no path).
- Mock BaseURL today: `${BASE_URL}mock-embeds/feed-cms.html` (`Embedded_FeedCMS/mocks.ts`). The dev server answers
  `/mock-embeds/feed-cms.html/embed/feeds?…` with the app's `index.html` (SPA fallback, checked on localhost:5173),
  and no CMS message is accepted: the mock feed stays on its skeleton.

## Expected change (needs the user's decision on the BaseURL, then the shell owner)
1. Mock BaseURL = an origin (for example `window.location.origin`, or a dedicated mock origin).
2. That origin serves `public/mock-embeds/feed-cms.html` (it ignores the query and already speaks the protocol) for
   `/embed/feeds` and `/embed/feeds/item/*`: a small dev/preview middleware in `vite.config.ts`, or static copies under
   `public/embed/feeds/` plus a rule for the item ids.
3. Production: BaseURL comes from the real `DataActionGetFeedConfig` (a CMS origin); nothing to change there.

## Workaround until applied
None in the app (no invented URL scheme). Tests simulate the CMS messages with the mock BaseURL as origin.

## Resolution (foundation owner)
Set `- Status: applied` above when done.
- Change (user decision 2026-10-15: same origin + middleware): mock `BaseURL` = `window.location.origin`
  (`Embedded_FeedCMS/mocks.ts`); `app/vite.config.ts` plugin `mockFeedCms` answers `/embed/feeds` and
  `/embed/feeds/item/<id>` with `public/mock-embeds/feed-cms.html` on dev and preview. Checked on localhost:5173.
- Regression parity run on: none needed (no captured route renders the feed yet); ci 131 files / 540 tests.
