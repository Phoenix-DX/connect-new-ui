import type { Meta, StoryObj } from '@storybook/react-vite';
import { householdName, LOCALITY, VITALE } from '@/mocks/fictional/directory';
import { OrbitCard } from './OrbitCard';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/Card_Template',
  component: OrbitCard,
} satisfies Meta<typeof OrbitCard>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Caller markup of the icon placeholder (Card_Milestone / Card_Event): icon circle in shade 2, icon in shade 7. */
const icon = (color: string, iconClass: string) => (
  <div className="orbit-card-icon-cont" data-container="" style={{ backgroundColor: `var(--orbit-${color}-2)` }}>
    <i className={`icon orbit-card-icon ${iconClass}`} data-icon="" style={{ color: `var(--orbit-${color}-7)` }} />
  </div>
);
const info = (className: string, iconClass: string, text: string) => (
  <div className={className} data-container="">
    <i className={iconClass} data-icon="" />
    <span data-expression="">{text}</span>
  </div>
);

/** EventDetail/default: an Accommodation milestone (Card_Milestone, purple) with host, address and View Guests. */
export const V1: Story = {
  args: {
    id: 'b1-l1-142797_2-b8-$b1',
    inMainColorVar: 'purple',
    inMilestoneTypeId: 'accommodation-guest',
    placeholderIcon: icon('purple', 'orbit-icon-accommodation'),
    placeholderTitle: <span data-expression="">Accommodation</span>,
    placeholderContent: (
      <>
        {info(
          'orbit-card-content-info margin-bottom-m',
          'icon orbit-card-content-info-icon orbit-icon-host-guest fa fa-flag fa-1x',
          householdName(VITALE),
        )}
        {info(
          'orbit-card-content-info margin-bottom-m',
          'icon orbit-card-content-info-icon orbit-icon-location fa fa-flag fa-1x',
          VITALE.address.replace(/\n/g, ', '),
        )}
        <div className="orbit-card-content-button-cont" data-container="">
          <button
            className="btn btn-orbit-card"
            data-button=""
            style={{ color: 'var(--orbit-purple-7)', border: '1px solid var(--orbit-purple-7)' }}
            type="button"
          >
            View Guests
          </button>
        </div>
      </>
    ),
  },
};

/** EventDetail/default: a Meeting milestone (Card_Milestone, green) with only its start time. */
export const V2: Story = {
  args: {
    id: 'b1-l1-142797_3-b8-$b1',
    inMainColorVar: 'green',
    inMilestoneTypeId: 'meeting-guest',
    placeholderIcon: icon('green', 'orbit-icon-video-meeting'),
    placeholderTitle: <span data-expression="">Meeting</span>,
    placeholderContent: info(
      'orbit-card-content-info',
      'icon orbit-card-content-info-icon orbit-icon-date-time fa fa-flag fa-1x',
      '11:59 PM',
    ),
  },
};

/** OrbitLanding/default: an event card (Card_Event, purple) with its dates and location. */
export const V3: Story = {
  args: {
    id: 'b1-l1-60_0-b5-$b1',
    inMainColorVar: 'purple',
    placeholderIcon: icon('purple', 'orbit-icon-meeting'),
    placeholderTitle: <span data-expression="">{`${LOCALITY.name} Three-Day Meetings`}</span>,
    placeholderContent: (
      <>
        {info(
          'orbit-card-content-info margin-bottom-m',
          'icon orbit-icon-date-time orbit-card-content-info-icon fa fa-flag fa-1x',
          'Fri 16 Oct 2026 - Sun 18 Oct 2026',
        )}
        {info(
          'orbit-card-content-info',
          'icon orbit-icon-location orbit-card-content-info-icon fa fa-flag fa-1x',
          `${LOCALITY.name} Main Hall`,
        )}
      </>
    ),
  },
};
