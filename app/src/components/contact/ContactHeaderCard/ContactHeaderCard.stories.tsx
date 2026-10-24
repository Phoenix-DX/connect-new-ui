import type { Meta, StoryObj } from '@storybook/react-vite';
import { osImage } from '@/lib/os-assets';
import { ContactHeaderCard } from './ContactHeaderCard';

const meta = {
  title: 'Components/Contact/ContactHeaderCard',
  component: ContactHeaderCard,
} satisfies Meta<typeof ContactHeaderCard>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactByEmailOneSchoolGlobal: the OneSchool Global logo, the contact name and an empty second line (" "). */
export const OneSchoolGlobal: Story = {
  args: {
    imageSrc: osImage('img/UBTConnectLibrary.OneSchoolGlobal.svg'),
    title: 'Riverside Campus Office',
    subtitle: ' ',
  },
};

/** ContactByEmailLDMCoordinator: the coordinator avatar (no URL: no src), the name and "LDM Event Coordinator". */
export const LDMCoordinator: Story = {
  args: { title: 'Helena Marsh', subtitle: 'LDM Event Coordinator' },
};

/** ContactByEmailOrbitHelpdesk: the Orbit logo and "Orbit Helpdesk", no second line. */
export const OrbitHelpdesk: Story = {
  args: { imageSrc: osImage('img/Connect2_OrbitMobile_MUI.Orbit_Logo.svg'), title: 'Orbit Helpdesk' },
};
