"""P6-G3-A: prepend the @origin JSDoc tag to the G3 page files."""
import pathlib
M = {
 'HomeFeed': 'Home', 'FeedItemDetail': 'Home', 'Updates_SingleList': 'Directory_Updates',
 'Services': 'App_Services', 'Search': 'Directory_Search', 'Notifications': 'App_Notifications',
 'MessageList': 'Legacy_MyNotificationsFlow', 'MessageDetail': 'Legacy_MyNotificationsFlow',
}
for r, flow in M.items():
    p = pathlib.Path('app/src/pages') / r / f'{r}Page.tsx'
    t = p.read_text()
    if '@origin' not in t:
        p.write_text(f'/** @origin UBTConnect.{flow}.{r} */\n' + t)
