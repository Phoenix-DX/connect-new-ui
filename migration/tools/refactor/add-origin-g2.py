"""P6-G2-A: prepend the @origin JSDoc tag to the G2 page files."""
import pathlib
M = {
 'ContactUsMenu': 'App_Menu_ContactUs', 'ContactUsDetails': 'App_Menu_ContactUs',
 'ContactByEmailMember': 'ContactFlow', 'ContactByEmailOneSchoolGlobal': 'ContactFlow',
 'ContactByEmailLDMCoordinator': 'ContactFlow', 'ContactByEmailOrbitHelpdesk': 'ContactFlow',
 'ContactByEmailOrbitHost': 'ContactFlow', 'EmailContact': 'Legacy_OrbitEventsFlow',
 'EmailTarget': 'Legacy_LDMEventsFlow',
}
for r, flow in M.items():
    p = pathlib.Path('app/src/pages') / r / f'{r}Page.tsx'
    t = p.read_text()
    if '@origin' not in t:
        p.write_text(f'/** @origin UBTConnect.{flow}.{r} */\n' + t)
