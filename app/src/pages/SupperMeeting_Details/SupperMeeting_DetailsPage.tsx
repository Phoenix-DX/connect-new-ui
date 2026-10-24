import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { SupperMeetingDetailsContainer, useSupperMeetingDetailsFlags } from '@/containers';
import { CustomText } from '@/components/ui/CustomText';
import { DetailLayoutContainer } from '@/containers/DetailLayout';
import { readSupperMeetingDetailsInputs } from './inputs';

/** @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_Details
    The details of a supper meeting: Layout_DetailPage (In_AlignTitleLeft False, primary header) titled by CustomText
    "Supper Meeting" with the default TextOptions, the supper meeting details container (SupperMeeting_DetailsBlock,
    Placeholder_CarouselTag empty) as content, no bottom bar, CommonUI_InsideLayout. No variable besides the input, no
    lifecycle event and no call of its own. */
export default function SupperMeeting_Details() {
  const [params] = useSearchParams();
  const { In_SubdivsionId } = readSupperMeetingDetailsInputs(params);
  const supperMeetingDetailsFlags = useSupperMeetingDetailsFlags();

  return (
    <DetailLayoutContainer
      id="$b1"
      inAlignTitleLeft={false}
      placeholderHeaderTitle={<CustomText id="$b2" inText="Supper Meeting" inTextOptions={{}} />}
      content={
        <SupperMeetingDetailsContainer id="$b3" subdivisionId={In_SubdivsionId} flags={supperMeetingDetailsFlags} />
      }
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b4" />}
    />
  );
}
