import { useSearchParams } from 'react-router';
import { MainLayout } from '@/components/layout/MainLayout';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { BlankSlate } from '@/shared/osui/BlankSlate';
import { StaticInput } from '@/components/ui/StaticInput';
import { readCommunityBusinessDetailsInputs } from './inputs';

/** @origin UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon
    A static placeholder: the main layout with its default inputs and an empty title, a StaticInput without a
    Click_Input handler, and a BlankSlate "Comming soon" (the typo is in the original). The screen has no lifecycle
    event, no variable and no call of its own, so it has no hook. */
export default function CommunityBusinessDetails_CoomingSoon() {
  // The Placeholder_CommonUI_Inside_Layout of the layout is empty: no CommonUI on this screen.
  useNoCommonUi();
  const [params] = useSearchParams();
  // In_CommunityBusinessId is set from the URL and never read afterwards.
  readCommunityBusinessDetailsInputs(params);

  return (
    <MainLayout
      id="$b1"
      // StaticInput binds only its error handler: a click on it does nothing on this screen.
      placeholderHeaderInput={<StaticInput id="$b2" />}
      content={
        <BlankSlate
          id="$b3"
          // OSWidgets.Icon ellipsis-h, size Twotimes.
          icon={<i className="icon fa fa-ellipsis-h fa-2x" data-icon="" />}
          content="Comming soon"
        />
      }
    />
  );
}
