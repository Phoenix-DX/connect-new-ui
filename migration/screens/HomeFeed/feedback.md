# Feedback: HomeFeed

Found by the user while testing. open → fixed → in-review → closed (at finish).

## F1 [bug] closed
- Reported 2026-10-16T14:40:04: The search input on the HomeFeed page cannot be clicked (user, 2026-10-16).
- Done 2026-10-16T14:41:05: Layout_HomePage OnSearchClick now runs OnClick_Search → navigate to /UBTConnect/Search (HomeFeed.mvc.js:159-166, :708-723); the route had an empty handler by mistake. Checked in a headless browser: clicking the search input opens Search.

## F2 [bug] closed
- Reported 2026-11-07T14:31:47: giao diện cục COMMUNITY BY THE NUMBERS bị sai và lệch CSS với TST (user, 2026-11-07). Cause: the stylesheet UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers.css of the fresh capture was not in app/public/UBTConnect/css and the route CSS sets (routes.css.generated.ts) were not regenerated after the re-capture; the parity reference renders with the app's stylesheets, so the gap was invisible to parity.
- Done 2026-11-07T14:44:20: Foundation fix by the master (2026-11-07): the five live stylesheets fetched read-only and saved to app/public/UBTConnect/css (new Directory_CommunityNumbers.css and NotificationDetails.css; refreshed LegacyShared UBTConnect.css, Notifications.css, UBTConnectBase.css), css_sets.py re-run (8 route sets gain a stylesheet), SanitizedHtml span id as captured. Full sweep 68 routes: HomeFeed and CountryList keep one pixel difference at the capture-masked numbers (•••••• for 48,215), exemption to decide by the user; OneSchoolGlobalCarousel keeps its known structure difference.
