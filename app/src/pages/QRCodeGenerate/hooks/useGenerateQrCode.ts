import { fetchEventQRCode } from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import type { QRCodeGenerateInputs } from '@/pages/QRCodeGenerate/inputs';
import { useFlowState, useOsNavigate } from '@/platform/navigation';
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
    - Flow scope (item 8): GetCacheableSignedImageURL is a module action (R2): it answers also after the unmount,
      and the refresh of Get_EventQRCode then still goes out with the variables that the flow assigned
      (ScreenBlock_GenerateQRCode.js:784, :792). Get_EventQRCode is a data action (R1, `flow.fetch`, :643): after the
      unmount its answer and its failure are dropped. A failure of the module action goes to the flow handler, with
      the scope.
    - OnHandle_ContactHelpdesk: NavigateTo_ContactHelpdesk(GetContactHelpdeskSubject_Event(In_EventName,
      In_EventStartDate, In_EventEndDate, In_EventLocation), In_EventName). The screen navigates to
      ContactByEmailOrbitHelpdesk without an Orbit access check, as compiled.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode */
export function useGenerateQrCode(inputs: QRCodeGenerateInputs): GenerateQrCodeFlows {
  const navigate = useOsNavigate();
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: 'Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode',
    reducer: generateQrCodeReducer,
    initial: INITIAL_GENERATE_QR_CODE_STATE,
    parameters: inputs,
    beforePaint: true,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (_isAlive, restored) => onReady(restored),
  });
  const qrCodeImageURL = useBinaryImageURL(state.qrCodeData.QRCodeAsBinary);

  /** RefreshData. */
  const refreshData = async () => {
    /* The flow's own copy of the variables, which the data action reads: the module action before it runs also after
       the unmount (R2), when `dispatch` no longer writes the state. While the screen is mounted, the state gets the
       same assignments. */
    let variables = latest.current;
    const assign = (patch: GenerateQrCodePatch) => {
      variables = { ...variables, ...patch };
      dispatch(patch);
    };
    assign({ isFetchingData: true });
    const user = appManager_GetCachedUserInfo();
    assign(userVariablesOf(user));
    assign({
      // module action: not wrapped (R2)
      userSignedURL: await fetchLegacySignedImageURL(
        memberPhotoIdOf(user.MemberId),
        DirectoryAPIFilter.Member,
        ImageSigningSize.Medium,
      ),
    });
    const data = await flow.fetch(fetchEventQRCode(eventQRCodeCallInputs(variables, parameters.current))); // R1
    assign(afterFetchOf(data));
    assign({ isFetchingData: false });
  };

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  const onReady = async (restored: boolean) => {
    if (restored) return;
    await refreshData();
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
