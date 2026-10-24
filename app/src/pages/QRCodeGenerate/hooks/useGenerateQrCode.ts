import { fetchEventQRCode } from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import type { QRCodeGenerateInputs } from '@/pages/QRCodeGenerate/inputs';
import { useFlowState, useOsNavigate, type IsAlive } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { DirectoryAPIFilter, ImageSigningSize } from '@/lib/orbit/staticEntities';
import {
  afterFetchOf,
  eventQRCodeCallInputs,
  generateQrCodeReducer,
  getContactHelpdeskSubject_Event,
  INITIAL_GENERATE_QR_CODE_STATE,
  memberPhotoIdOf,
  userVariablesOf,
  type GenerateQrCodePatch,
  type GenerateQrCodeState,
} from './generateQrCodeState';
import { useBinaryImageURL } from './useBinaryImageURL';

/** What the page renders and the handler of the footer. */
export interface GenerateQrCodeFlows {
  /** The block variables (rendered). */
  state: GenerateQrCodeState;
  /** The URL of the QR image (QRCodeData.QRCodeAsBinary, see useBinaryImageURL); "" without an image. */
  qrCodeImageURL: string;
  /** ContactHelpdesk_Footer click: OnHandle_ContactHelpdesk of the block, then OnHandle_ContactHelpdesk of the
      screen. */
  onContactHelpdesk: () => void;
}

/** The flows of ScreenBlock_GenerateQRCode and the screen's handler of its event NavigateTo_ContactHelpdesk.
    - OnReady runs before the first paint (the port before this step ran it in a layout effect; decision W28): on a
      view that the view cache restored, nothing; else RefreshData.
    - RefreshData: IsFetchingData True; UserName and UserLocation from AppManager_GetCachedUserInfo; UserSignedURL =
      GetCacheableSignedImageURL(MemberId, Member, Medium); the refresh of Get_EventQRCode with the block variables,
      then OnAfterFetch (QRCodeData = Response); IsFetchingData False. A failure goes to the flow handler.
    - Decision W23: after an unmount, a started flow skips its state writes only. Its calls still run, with the
      variables that the flow assigned, and its error still goes to the flow handler.
    - OnHandle_ContactHelpdesk: NavigateTo_ContactHelpdesk(GetContactHelpdeskSubject_Event(In_EventName,
      In_EventStartDate, In_EventEndDate, In_EventLocation), In_EventName). The screen navigates to
      ContactByEmailOrbitHelpdesk without an Orbit access check, as compiled.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode */
export function useGenerateQrCode(inputs: QRCodeGenerateInputs): GenerateQrCodeFlows {
  const navigate = useOsNavigate();
  const { state, dispatch, latest, parameters } = useFlowState({
    viewName: 'Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode',
    reducer: generateQrCodeReducer,
    initial: INITIAL_GENERATE_QR_CODE_STATE,
    parameters: inputs,
    beforePaint: true,
    onReady: (isAlive, restored) => onReady(isAlive, restored),
  });
  const qrCodeImageURL = useBinaryImageURL(state.qrCodeData.QRCodeAsBinary);

  /** RefreshData. */
  const refreshData = async (isAlive: IsAlive) => {
    /* The flow's own copy of the variables, which the data action reads, also after an unmount. The state gets the
       same assignments while the screen is mounted (W23). */
    let variables = latest.current;
    const assign = (patch: GenerateQrCodePatch) => {
      variables = { ...variables, ...patch };
      if (isAlive()) dispatch(patch);
    };
    assign({ isFetchingData: true });
    const user = appManager_GetCachedUserInfo();
    assign(userVariablesOf(user));
    assign({
      userSignedURL: await fetchLegacySignedImageURL(
        memberPhotoIdOf(user.MemberId),
        DirectoryAPIFilter.Member,
        ImageSigningSize.Medium,
      ),
    });
    const data = await fetchEventQRCode(eventQRCodeCallInputs(variables, parameters.current));
    assign(afterFetchOf(data));
    assign({ isFetchingData: false });
  };

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  const onReady = async (isAlive: IsAlive, restored: boolean) => {
    if (restored) return;
    await refreshData(isAlive);
  };

  return {
    state,
    qrCodeImageURL,
    onContactHelpdesk: () => {
      const { In_EventId, In_EventName, In_EventStartDate, In_EventEndDate, In_EventLocation } = inputs;
      const subject = getContactHelpdeskSubject_Event(
        In_EventName,
        In_EventStartDate,
        In_EventEndDate,
        In_EventLocation,
      );
      navigate(`/${APP_ID}/ContactByEmailOrbitHelpdesk`, {
        In_MilestoneId: '',
        In_EventName,
        In_EventId,
        In_Subject: subject,
      });
    },
  };
}
