# Feedback: HomeFeed

Found by the user while testing. open → fixed → in-review → closed (at finish).

## F1 [bug] closed
- Reported 2026-10-16T14:40:04: The search input on the HomeFeed page cannot be clicked (user, 2026-10-16).
- Done 2026-10-16T14:41:05: Layout_HomePage OnSearchClick now runs OnClick_Search → navigate to /UBTConnect/Search (HomeFeed.mvc.js:159-166, :708-723); the route had an empty handler by mistake. Checked in a headless browser: clicking the search input opens Search.
