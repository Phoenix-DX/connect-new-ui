import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { SupperMeeting_DetailsBlock } from '@/shared/UBTConnect/SupperMeeting_DetailsBlock';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { readSupperMeetingDetailsInputs } from './api';

/** UBTConnect.Directory_SupperMeetings.SupperMeeting_Details (SupperMeeting_Details.mvc.js: model :1-70, view
    :71-243, controller :244-293): Layout_DetailPage (In_AlignTitleLeft False, primary header) titled by CustomText
    "Supper Meeting" with default TextOptions, SupperMeeting_DetailsBlock as content (Placeholder_CarouselTag empty),
    no bottom bar, CommonUI_InsideLayout. No variable besides the input, no lifecycle event and no call of its own
    (:259-261, :275-279). */
export default function SupperMeeting_Details() {
  const [params] = useSearchParams();
  const { In_SubdivsionId } = readSupperMeetingDetailsInputs(params);

  return (
    <Layout_DetailPage
      id="$b1"
      inAlignTitleLeft={false}
      placeholderHeaderTitle={<CustomText id="$b2" inText="Supper Meeting" inTextOptions={{}} />}
      content={<SupperMeeting_DetailsBlock id="$b3" inSubdivsionId={In_SubdivsionId} />}
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b4" />}
    />
  );
}
