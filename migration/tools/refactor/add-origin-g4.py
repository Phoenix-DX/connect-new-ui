"""P6-G4-A: prepend the @origin JSDoc tag to the G4 page files."""
import pathlib
M = {
 'BrowseCountries': 'Directory_Locality', 'BrowseDirectory': 'Directory_Locality',
 'CountryList': 'Directory_Locality', 'CountryDetails': 'Directory_Locality',
 'HouseholdCarousel': 'Directory_Household', 'Household_Relations': 'Directory_Household',
 'Locality_Details': 'Directory_Locality', 'OneSchoolGlobalDetails': 'Directory_OneSchoolGlobal',
 'Photobook': 'Directory_Photobook', 'SupperMeeting_Carousel': 'Directory_SupperMeetings',
 'SupperMeeting_Details': 'Directory_SupperMeetings',
 'CommunityBusinessDetails_CoomingSoon': 'zDEV_Directory_CommunityBusinessBlocks',
 'Assemble_BrowseByCountry': 'Legacy_AssembleFlow',
}
for r, flow in M.items():
    p = pathlib.Path('app/src/pages') / r / f'{r}Page.tsx'
    t = p.read_text()
    if '@origin' not in t:
        p.write_text(f'/** @origin UBTConnect.{flow}.{r} */\n' + t)
