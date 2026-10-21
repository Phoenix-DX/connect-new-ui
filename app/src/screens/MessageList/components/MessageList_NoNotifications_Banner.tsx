// @os-block Connect2_LegacyShared.MyNotifications.MessageList_NoNotifications_Banner
import { OSBlock } from '../../../components/OSBlock';

/** MessageList_NoNotifications_Banner (survey source Connect2_LegacyShared.MyNotifications.MessageList_NoNotifications_
    Banner.mvc.js view): the inbox icon and "You have no notifications". No input, no event. Not captured (shown only
    for an empty list): built from the compiled view. */
export function MessageList_NoNotifications_Banner({ id }: { id?: string }) {
  return (
    <OSBlock name="MyNotifications.MessageList_NoNotifications_Banner" id={id}>
      <div
        className="display-flex flex-direction-column flex-center-vertical padding-y-m text-neutral-6"
        data-container=""
      >
        <i className="icon font-size-6em fa fa-inbox fa-1x" data-icon="" />
        <div className="text-align-center font-size-0-75em" data-container="">
          <span data-expression="">You have no notifications</span>
        </div>
      </div>
    </OSBlock>
  );
}
