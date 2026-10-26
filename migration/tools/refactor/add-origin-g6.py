"""P6-G6-A: prepend the @origin JSDoc tag to the G6 page files (names from move-map.csv)."""
import pathlib
M = {
 'BookmarksByGroup': 'Legacy_MyBookmarks', 'MyBookmarks': 'Legacy_MyBookmarks',
 'ConnectShare': 'Legacy_Share', 'LegacyShareObject': 'Legacy_Share', 'Notes': 'Notes',
 'QRCodeGenerate': 'Legacy_OrbitQRCodeFlow', 'ViewDocuments': 'Legacy_OrbitEventsFlow',
}
for r, flow in M.items():
    p = pathlib.Path('app/src/pages') / r / f'{r}Page.tsx'
    t = p.read_text()
    if '@origin' not in t:
        p.write_text(f'/** @origin UBTConnect.{flow}.{r} */\n' + t)
