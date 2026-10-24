/** @origin Connect2_LegacyShared.Reusable.Person_Contact_Options */
// @os-block Connect2_LegacyShared.Reusable.Person_Contact_Options
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSLink } from '@/shared/lib/OSLink';

export interface PersonContactOptionsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Phone (Phone Number, default ''): the phone link is shown only when it is not ''. */
  phone?: string;
  /** MobilePhone (Phone Number, default ''). */
  mobilePhone?: string;
  /** WorkPhone (Phone Number, default ''). */
  workPhone?: string;
  /** EmailAddress (Email, default ''). */
  emailAddress?: string;
  /** Event CallClicked(PhoneNumber): the parent decides what a call click does (the block has no action of its own). */
  onCallClicked?: (phoneNumber: string) => void;
  /** Event EmailClicked(Email). */
  onEmailClicked?: (email: string) => void;
}

/** Call / mobile / work / email icon links of a person (migration/screens/LDM_EventDetail_V2/analysis/sources/pretty/
    Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc.js view :80-355). Each link is Visible and Enabled only
    when its input is not '' (:171-175, :214-218, :258-262, :302-306) and raises CallClicked / EmailClicked with the
    value; the block's own `callClicked$Action` / `emailClicked$Action` are empty (:393-398), the work is in the event
    handler of the parent. */
export function PersonContactOptions({
  id,
  phone = '',
  mobilePhone = '',
  workPhone = '',
  emailAddress = '',
  onCallClicked,
  onEmailClicked,
}: PersonContactOptionsProps) {
  return (
    <OSBlock name="Reusable.Person_Contact_Options" id={id}>
      <div className="block-household-person-options" data-container="">
        {phone !== '' && (
          <OSLink
            onClick={() => {
              onCallClicked?.(phone);
            }}
          >
            <div data-container="">
              <i className="icon fa fa-phone fa-1x" data-icon="" />
            </div>
          </OSLink>
        )}
        {mobilePhone !== '' && (
          <OSLink
            onClick={() => {
              onCallClicked?.(mobilePhone);
            }}
          >
            <div className="block-household-person-options-mobile text-green-darker" data-container="">
              <i className="icon fa fa-mobile fa-1x" data-icon="" />
            </div>
          </OSLink>
        )}
        {workPhone !== '' && (
          <OSLink
            onClick={() => {
              onCallClicked?.(workPhone);
            }}
          >
            <div className="block-household-person-options-work text-dark-blue" data-container="">
              <i className="icon fa fa-briefcase fa-1x" data-icon="" />
            </div>
          </OSLink>
        )}
        {emailAddress !== '' && (
          <OSLink
            onClick={() => {
              onEmailClicked?.(emailAddress);
            }}
          >
            <div className="block-household-person-options-email text-dark-blue" data-container="">
              <i className="icon fa fa-envelope fa-1x" data-icon="" />
            </div>
          </OSLink>
        )}
      </div>
    </OSBlock>
  );
}
