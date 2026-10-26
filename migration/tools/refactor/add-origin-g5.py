"""P6-G5-A: prepend the @origin JSDoc tag to the G5 page files."""
import pathlib
M = {
 'OrbitLanding': 'Legacy_OrbitEventsFlow', 'OrbitAdminLanding': 'Legacy_OrbitAdminFlow',
 'OrbitAdminEventDetail': 'Legacy_OrbitAdminFlow', 'EventDetail': 'Legacy_OrbitEventsFlow',
 'EventBooklet': 'Legacy_OrbitEventsFlow', 'MilestoneDetail': 'Legacy_OrbitEventsFlow',
 'GuestArrangements': 'Legacy_OrbitEventsFlow', 'HelpersDetail': 'Legacy_OrbitEventsFlow',
 'HostSurvey': 'Legacy_OrbitEventsFlow', 'TransportDetail': 'Legacy_OrbitEventsFlow',
 'MyEntertaining': 'Calendar', 'LDM_MyEvents_V2': 'Legacy_LDMEventsFlow',
 'LDM_EventDetail_V2': 'Legacy_LDMEventsFlow', 'LDM_Email_V2': 'Legacy_LDMEventsFlow',
 'AssembleEvents': 'Legacy_AssembleFlow', 'AssembleDetail': 'Legacy_AssembleFlow',
}
for r, flow in M.items():
    p = pathlib.Path('app/src/pages') / r / f'{r}Page.tsx'
    t = p.read_text()
    if '@origin' not in t:
        p.write_text(f'/** @origin UBTConnect.{flow}.{r} */\n' + t)
