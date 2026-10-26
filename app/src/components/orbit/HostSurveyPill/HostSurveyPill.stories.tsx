import type { Meta, StoryObj } from '@storybook/react-vite';
import { HostSurveyPill } from './HostSurveyPill';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/HostSurvey_PillItem',
  component: HostSurveyPill,
} satisfies Meta<typeof HostSurveyPill>;
export default meta;
type Story = StoryObj<typeof meta>;

/** EventDetail/default: the "Confirmed" status pill (small icon, extended style). */
export const V1: Story = {
  args: {
    id: 'b1-$b3',
    inIconClass: 'orbit-icon-circle-check color-orbit-green-6',
    inPillText: 'Confirmed',
    inIsSmallIcon: true,
    inExtendedStyle: 'background-color: var(--orbit-green-2); color: var(--orbit-green-6);',
  },
};

/** HostSurvey/default: disabled pill, couple icon. */
export const V2: Story = {
  args: { id: 'b2-l5-142863_0-b24-$b1', inIsDisabled: true, inIconClass: 'orbit-icon-couple', inPillText: 'Couple' },
};

/** HostSurvey/default: disabled pill, accommodation icon. */
export const V3: Story = {
  args: { id: 'b2-l5-142863_0-b24-$b2', inIsDisabled: true, inIconClass: 'orbit-icon-accommodation', inPillText: '2' },
};

/** HostSurvey/default: disabled pill, home icon. */
export const V4: Story = {
  args: {
    id: 'b2-l5-142863_0-b24-$b3',
    inIsDisabled: true,
    inIconClass: 'orbit-icon-home',
    inPillText: 'Ground Floor',
  },
};
