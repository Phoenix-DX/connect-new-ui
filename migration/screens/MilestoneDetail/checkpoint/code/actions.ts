import { UserException } from '@/platform/feedback/flowErrors';
import { pageRedirect } from '@/platform/feedback/pageRedirect';
import { generateScreenURL } from '@/platform/navigation';
import { navigateToMaps } from '@/lib/legacyShared/actions';
import { MapNavigationRedirect } from '@/lib/legacyShared/staticEntities';

/** The JavaScript nodes and client actions that only the milestone blocks of MilestoneDetail use.
    @origin Connect2_OrbitMobile_MUI */

/** ExtractChildrenNamesFromCaptions(PhotobookCaption) → ChildrenNames (Connect2_OrbitMobile_MUI.controller.js:1303-1340,
    JS node ExtractChildrenNamesJS :1381-1401): the part of the photobook caption from "<nobr><strong>" to the next
    "<br />", inside the part from "<br /><nobr><strong>" to "</div>"; "" when the caption has no such part. */
export function extractChildrenNamesFromCaptions(captions: string): string {
  let finalString = '';
  if (captions) {
    const stIdx = captions.indexOf('<br /><nobr><strong>');
    const eIdx = captions.indexOf('</div>');
    if (stIdx !== -1 && eIdx !== -1 && eIdx > stIdx) {
      const fstCut = captions.slice(stIdx, eIdx);
      const newStIdx = fstCut.indexOf('<nobr><strong>');
      const newEIdx = fstCut.indexOf('<br />', newStIdx);
      if (newStIdx !== -1 && newEIdx !== -1 && newEIdx > newStIdx) finalString = fstCut.slice(newStIdx, newEIdx);
      else if (newStIdx !== -1 && newEIdx === -1) finalString = fstCut.slice(newStIdx, fstCut.length);
      else if (newStIdx === -1 && newEIdx !== -1) finalString = fstCut.slice(0, newEIdx);
    }
  }
  // Has Children? ChildrenNames = FinalString (else the default "").
  return finalString !== '' ? finalString : '';
}

/** OnClick_Address of Orbit_Blocks.HostInformation (HostInformation.mvc.js:571-662). MapsAddress =
    Replace(FormattedAddress, ",", " ") + ", " + Replace(CountryName, ",", " "), then NavigateToMaps
    (Connect2_LegacyShared) chooses the redirect:
    - AndroidBrowser → `geo:0,0?q=<address>`;
    - AndroidNative → LaunchWithData of Google Maps (Cordova app launcher): not ported, as in AssembleSummaryCard;
    - iPhoneBrowser → `comgooglemaps://?q=<address>`;
    - any other id → `https://www.google.com/maps/dir/?api=1` with api=1 and query=<address>.
    Errors: "application not found for uri." → GoogleMapsNotInstalled "Please install and enable Google Maps", else
    UnknownError with the message. */
export function hostInformationOnClickAddress(formattedAddress: string, countryName: string): void {
  try {
    const mapsAddress = `${formattedAddress.replaceAll(',', ' ')}, ${countryName.replaceAll(',', ' ')}`;
    const redirect = navigateToMaps();
    if (redirect === MapNavigationRedirect.AndroidBrowser) {
      pageRedirect(generateScreenURL('geo:0,0', { q: mapsAddress }));
      return;
    }
    if (redirect === MapNavigationRedirect.AndroidNative) return; // LaunchWithData: Cordova only
    if (redirect === MapNavigationRedirect.IPhoneBrowser) {
      pageRedirect(generateScreenURL('comgooglemaps://', { q: mapsAddress }));
      return;
    }
    pageRedirect(generateScreenURL('https://www.google.com/maps/dir/?api=1', { api: '1', query: mapsAddress }));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.toLowerCase() === 'application not found for uri.')
      throw new UserException(
        'Please install and enable Google Maps',
        'Connect2_OrbitMobile_MUI.GoogleMapsNotInstalled',
      );
    throw new UserException(message, 'Connect2_OrbitMobile_MUI.UnknownError');
  }
}
