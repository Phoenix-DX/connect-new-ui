import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { GenerateQrCodeView } from './components/GenerateQrCodeView';
import { hasPassOf } from './hooks/generateQrCodeState';
import { useGenerateQrCode } from './hooks/useGenerateQrCode';
import { readQRCodeGenerateInputs } from './inputs';

/** @origin UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate
    The event pass of the signed-in member with its QR code: ScreenBlock_GenerateQRCode (the view and its flows in
    useGenerateQrCode), then CommonUI_InsideLayout. The footer opens ContactByEmailOrbitHelpdesk without an Orbit
    access check, unlike the other Orbit screens. No capture (no-capture.json, user 2026-10-16): built from the
    compiled code. */
export default function QRCodeGenerate() {
  const [params] = useSearchParams();
  const inputs = readQRCodeGenerateInputs(params);
  const { state, qrCodeImageURL, onContactHelpdesk } = useGenerateQrCode(inputs);

  return (
    <>
      <GenerateQrCodeView
        id="$b1"
        eventName={inputs.In_EventName}
        isFetchingData={state.isFetchingData}
        hasPass={hasPassOf(state)}
        userName={state.userName}
        userLocation={state.userLocation}
        userSignedURL={state.userSignedURL}
        pass={state.qrCodeData.GetEventQRCodeResponse}
        qrCodeImageURL={qrCodeImageURL}
        onContactHelpdesk={onContactHelpdesk}
      />
      <CommonUiLayout id="$b2" />
    </>
  );
}
