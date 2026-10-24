/** @origin Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry */
// @os-block Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSLink } from '@/shared/lib/OSLink';
import { LabelWithCopyIcon } from '@/shared/Connect2_LegacyShared/LabelWithCopyIcon';
import { checkSupportedBrowserVersion, openExternalURL } from '@/shared/Connect2_LegacyShared/lib/actions';

export interface VirtualMeetingDetailsEntryProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Label (default ""). */
  label?: string;
  /** Value (default ""): shown, copied by the icon, opened when IsURL. */
  value?: string;
  /** IsURL (default False): the value is a link. */
  isURL?: boolean;
}

/** One meeting detail (p:migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc.js;
    view :155-276): container `margin-bottom-base` > LabelWithCopyIcon (AttributeValue = Value) with the Label
    expression, the copy icon (`icon connect-icon-copy font-size-h5 text-neutral-6`, flag, size 2x) and, when IsURL, a
    link with the Value (`font-regular`, target _blank) else the Value (`text-neutral-7`). LinkVirtualAddressOnClick
    (controller :299-330): CheckSupportedBrowserVersion, then OpenExternalURL(Value, IsApple). */
export function VirtualMeetingDetailsEntry({
  id,
  label = '',
  value = '',
  isURL = false,
}: VirtualMeetingDetailsEntryProps) {
  const linkVirtualAddressOnClick = () => {
    openExternalURL(value, checkSupportedBrowserVersion().IsApple);
  };
  return (
    <OSBlock name="Assemble.AssembleCommon_VirtualMeetingDetails_Entry" id={id}>
      <div className="margin-bottom-base" data-container="">
        <LabelWithCopyIcon
          attributeValue={value}
          placeholderLabel={<span data-expression="">{label}</span>}
          placeholderIcon={
            <i className="icon connect-icon-copy font-size-h5 text-neutral-6 fa fa-flag fa-2x" data-icon="" />
          }
          placeholderValue={
            isURL ? (
              <OSLink onClick={linkVirtualAddressOnClick}>
                <span className="font-regular" data-expression="" {...{ target: '_blank' }}>
                  {value}
                </span>
              </OSLink>
            ) : (
              <span className="text-neutral-7" data-expression="">
                {value}
              </span>
            )
          }
        />
      </div>
    </OSBlock>
  );
}
