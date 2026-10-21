import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { allowUpcomingNavigation, useNavigateBack, useOsNavigate } from '../../shell/navigation';
import { ScreenBlock_Assemble_Filter } from './components/ScreenBlock_Assemble_Filter';

/** UBTConnect Legacy_AssembleFlow.Assemble_BrowseByCountry (p:migration/screens/Assemble_BrowseByCountry/analysis/
    sources/pretty/UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry.mvc.js: view :127-197, controller :201-310).
    No inputs. CommonUI_InsideLayout, then ScreenBlock_Assemble_Filter with empty Menu and CommonUI_Elements
    placeholders. Its Cancel event: AllowUpcomingNavigation, then back (Assemble_FilterCancel :269-305); its
    NavigateToSubdivision event: AssembleEvents with ShowBackNavigation True, SubdivisionId and IsUserSubdivision
    (Assemble_FilterNavigateToLocality :228-250, Default transition). */
export default function Assemble_BrowseByCountry() {
  const navigate = useOsNavigate();
  const navigateBack = useNavigateBack();
  return (
    <>
      <CommonUI_InsideLayout id="$b1" />
      <ScreenBlock_Assemble_Filter
        id="$b2"
        onCancel={() => {
          allowUpcomingNavigation();
          navigateBack();
        }}
        onNavigateToSubdivision={(subdivisionId, isUserSubdivision) => {
          navigate('/UBTConnect/AssembleEvents', {
            ShowBackNavigation: true,
            SubdivisionId: subdivisionId,
            IsUserSubdivision: isUserSubdivision,
          });
        }}
      />
    </>
  );
}
