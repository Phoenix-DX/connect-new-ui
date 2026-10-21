// @os-block Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails
import { OSBlock } from '../../../components/OSBlock';
import { NewConnectContent } from '../../Connect2_LegacyShared/NewConnectContent';
import { AssembleCommon_VirtualMeetingDetails_Entry } from '../AssembleCommon_VirtualMeetingDetails_Entry';

export interface AssembleCommon_VirtualMeetingDetailsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** VirtualMeetingLink (default ""). */
  virtualMeetingLink?: string;
  /** VirtualMeetingId (default ""). */
  virtualMeetingId?: string;
  /** VirtualMeetingPassword (default ""). */
  virtualMeetingPassword?: string;
}

/** Meeting link, id and passcode (p:migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc.js;
    view :155-289): NewConnectContent with three animated containers, each shown when its value is not "": the link
    (`break-word`; Entry "Meeting Link", IsURL), the id (Entry "Meeting Id") and the passcode (Entry "Passcode"). No
    actions. */
export function AssembleCommon_VirtualMeetingDetails({
  id,
  virtualMeetingLink = '',
  virtualMeetingId = '',
  virtualMeetingPassword = '',
}: AssembleCommon_VirtualMeetingDetailsProps) {
  return (
    <OSBlock name="Assemble.AssembleCommon_VirtualMeetingDetails" id={id}>
      <NewConnectContent>
        {virtualMeetingLink !== '' && (
          <div className="break-word" data-container="">
            <AssembleCommon_VirtualMeetingDetails_Entry value={virtualMeetingLink} label="Meeting Link" isURL />
          </div>
        )}
        {virtualMeetingId !== '' && (
          <div data-container="">
            <AssembleCommon_VirtualMeetingDetails_Entry label="Meeting Id" value={virtualMeetingId} isURL={false} />
          </div>
        )}
        {virtualMeetingPassword !== '' && (
          <div data-container="">
            <AssembleCommon_VirtualMeetingDetails_Entry value={virtualMeetingPassword} isURL={false} label="Passcode" />
          </div>
        )}
      </NewConnectContent>
    </OSBlock>
  );
}
