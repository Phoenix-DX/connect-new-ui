/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer */
// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface ContactHelpdeskFooterProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event Click. */
  onClick?: () => void;
}

/** Footer link "Contact Orbit Helpdesk" (ContactHelpdesk_Footer.mvc.js view :110-158): container
    `contact-helpdesk-footer` whose click raises the Click event (no other logic in the controller, :163-). */
export function ContactHelpdeskFooter({ id, onClick }: ContactHelpdeskFooterProps) {
  return (
    <OSBlock name="Orbit_Blocks.ContactHelpdesk_Footer" id={id}>
      <div className="contact-helpdesk-footer" data-container="" style={{ cursor: 'pointer' }} onClick={onClick}>
        <span data-expression="">Contact Orbit Helpdesk</span>
      </div>
    </OSBlock>
  );
}
