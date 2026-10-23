import type { ExternalAppPopUpInfo } from '@/api/service';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { openInApp_OpenApp } from '@/shared/UBTConnect_Utils/lib/actions';

/** GoToExternalApp, the confirm of the dialog Dialog_GoExternalApp:
    - With no store package, the message "Not available". The original gives MessageType
      TextToInteger("Entities.UBT_MessageType.Error"), which is 0, the Info type.
    - Otherwise OpenInApp_OpenApp(PackageName). In the browser, that is the "Not available" message of the shared
      action (CR-HomeFeed-1).
    @origin UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp */
export function goToExternalApp(info: ExternalAppPopUpInfo): void {
  if (info.packageName === '') {
    feedbackMessageAutoClose({
      title: 'Not available',
      message: 'Sorry, this is not available in the platform you are using',
      messageType: 'info',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
    return;
  }
  openInApp_OpenApp(info.packageName);
}
