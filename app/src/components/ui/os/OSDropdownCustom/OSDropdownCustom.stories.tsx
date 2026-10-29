import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { OSDropdownCustom } from './OSDropdownCustom';

const meta = { title: 'Components/OSDropdownCustom' } satisfies Meta;
export default meta;
type Story = StoryObj;

/* Closed states only (decision O4): no capture shows an open list. */

interface HelperRole {
  JSON_Name: string;
  Label: string;
}
/** The helper roles of the Orbit static entities (Dropdown_HelperRoles). */
const ROLES: readonly HelperRole[] = [
  { JSON_Name: 'HELPER', Label: 'Helper' },
  { JSON_Name: 'USHER', Label: 'Usher' },
];

function RoleDropdown({ initial, enabled, message }: { initial: string; enabled?: boolean; message?: string }) {
  const [value, setValue] = useState(initial);
  return (
    <OSDropdownCustom<HelperRole>
      id="b2-b16-Dropdown_HelperRoles"
      style="dropdown"
      emptyValue="Select role"
      mandatory
      enabled={enabled}
      list={ROLES}
      getValue={(role) => role.JSON_Name}
      renderRow={(role) => <span data-expression="">{role.Label}</span>}
      value={value}
      record={message === undefined ? undefined : { validAttr: false, validationMessageAttr: message }}
      onValueChange={setValue}
    />
  );
}

/** HostSurvey_HelperItem in edit: Dropdown_HelperRoles closed on the saved role. */
export const Closed: Story = {
  render: () => <RoleDropdown initial="USHER" />,
};

/** A confirmed survey (Enabled = not In_IsSurveyConfirmed): `dropdown-disabled` on the display. */
export const Disabled: Story = {
  render: () => <RoleDropdown initial="HELPER" enabled={false} />,
};

/** HostSurvey_AddHelper after a Save without a role (OnHandle_Save, F4): the message and the D2 expanded classes. */
export const NotValid: Story = {
  render: () => <RoleDropdown initial="" message="Helper role is required." />,
};
