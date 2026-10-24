/** @origin Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails */
// @os-block Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails
import { OSBlock } from '@/components/ui/os/OSBlock';
import { NewConnectContent } from '@/shared/Connect2_LegacyShared/NewConnectContent';
import { VirtualMeetingDetailsEntry } from '@/components/assemble/VirtualMeetingDetailsEntry';

export interface VirtualMeetingDetailsProps {
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
export function VirtualMeetingDetails({
  id,
  virtualMeetingLink = '',
  virtualMeetingId = '',
  virtualMeetingPassword = '',
}: VirtualMeetingDetailsProps) {
  return (
    <OSBlock name="Assemble.AssembleCommon_VirtualMeetingDetails" id={id}>
      <NewConnectContent>
        {virtualMeetingLink !== '' && (
          <div className="break-word" data-container="">
            <VirtualMeetingDetailsEntry value={virtualMeetingLink} label="Meeting Link" isURL />
          </div>
        )}
        {virtualMeetingId !== '' && (
          <div data-container="">
            <VirtualMeetingDetailsEntry label="Meeting Id" value={virtualMeetingId} isURL={false} />
          </div>
        )}
        {virtualMeetingPassword !== '' && (
          <div data-container="">
            <VirtualMeetingDetailsEntry value={virtualMeetingPassword} isURL={false} label="Passcode" />
          </div>
        )}
      </NewConnectContent>
    </OSBlock>
  );
}
