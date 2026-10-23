/** @origin UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon */
import { useSearchParams } from 'react-router';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { BlankSlate } from '@/shared/osui/BlankSlate';
import { Layout_MainPages } from '@/shared/UBTConnectLibrary/Layout_MainPages';
import { StaticInput } from '@/shared/UBTConnectLibrary/StaticInput';
import { readCommunityBusinessDetailsInputs } from './api';

/** UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon
    (CommunityBusinessDetails_CoomingSoon.mvc.js: model :1-70, view :71-230, controller :231-280). A static placeholder:
    Layout_MainPages with default inputs, an empty title, StaticInput without a Click_Input handler and a BlankSlate
    "Comming soon" (typo as compiled, :213). No lifecycle event and no call of its own (:248, :262-266). */
export default function CommunityBusinessDetails_CoomingSoon() {
  // Placeholder_CommonUI_Inside_Layout is empty (:221): no CommonUI on this screen.
  useNoCommonUi();
  const [params] = useSearchParams();
  // In_CommunityBusinessId is set from the URL (:61-63) and never read afterwards.
  readCommunityBusinessDetailsInputs(params);

  return (
    <Layout_MainPages
      id="$b1"
      // StaticInput binds only _handleError (:159-178): clicking it does nothing on this screen.
      placeholderHeaderInput={<StaticInput id="$b2" />}
      content={
        <BlankSlate
          id="$b3"
          // OSWidgets.Icon ellipsis-h, size Twotimes (:199-211).
          icon={<i className="icon fa fa-ellipsis-h fa-2x" data-icon="" />}
          content="Comming soon"
        />
      }
    />
  );
}
