import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { LOCALITY } from '@/mocks/fictional/directory';
import type { AssembleEventSummary } from './types';
import { AssembleSummaryCard } from './AssembleSummaryCard';

const meta = {
  title: 'Shared/Connect2_Assemble_MUI/AssembleSummaryCard',
  component: AssembleSummaryCard,
  // OSLink navigates with the router
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AssembleSummaryCard>;
export default meta;
type Story = StoryObj<typeof meta>;

/** A prayer meeting at the locality's main hall (fictional; 2026-11-10 is a Tuesday). */
const HALL_MEETING: AssembleEventSummary = {
  AssembleEventType: { Title: 'Prayer Meeting' },
  DateTime: '2026-11-10T19:30:00',
  HostingLocation: `${LOCALITY.name} Main Hall`,
  LocalityName: LOCALITY.name,
  CountryName: LOCALITY.country,
  HostingSubdivisionHallPhotoSignedURL: '/mock-images/placeholder-landscape.svg',
  HostingSubdivisionFormattedAddress: 'Calle Ficticia 100, Bahia Blanca',
  BrothersCount: 24,
  SistersCount: 27,
};

/** Not captured (AssembleDetail has no capture; AssembleEvents shows no card): the detail card of a hall meeting. */
export const HallMeeting: Story = { args: { assembleEventSummary: HALL_MEETING } };

/** Not captured: the list layout of a virtual Lord's Day meeting with its Zoom details (2026-11-08 is a Sunday). */
export const VirtualListItem: Story = {
  args: {
    isListItem: true,
    assembleEventSummary: {
      ...HALL_MEETING,
      AssembleEventType: { Title: 'Gospel Preaching' },
      DateTime: '2026-11-08T18:00:00',
      IsVirtual: true,
      BrothersCount: 1,
      SistersCount: 0,
      VirtualMeetingTypeLabel: 'Zoom',
      VirtualMeetingLink: 'https://meet.example.com/j/84522106631',
      VirtualMeetingId: '845 2210 6631',
      VirtualMeetingPassword: 'Hall2026',
    },
  },
};

/** Not captured: an event whose details are unavailable (no location row). */
export const Unavailable: Story = { args: { assembleEventSummary: { ...HALL_MEETING, IsUnavailable: true } } };
