import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { ValidationService } from '@/components/ui/os/OSValidation';
import { coordinatorDetails, LDM_PAST_EVENTS, ldmEventDay, ldmEventName } from '@/mocks/fictional/ldm';
import { LdmEventEmailView } from './LdmEventEmailView';

/* No capture exists (no-capture, user 2026-10-16): the stories show the block with fictional data of the LDM world
   (the first past meal, src/mocks/fictional/ldm.ts). */
const MEAL = LDM_PAST_EVENTS[0];
const COORDINATOR = MEAL ? coordinatorDetails(MEAL) : undefined;
const noop = () => undefined;

const meta = {
  title: 'Pages/LDM_Email_V2/LdmEventEmailView',
  component: LdmEventEmailView,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/UBTConnect/LDM_Email_V2']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    id: '$b1',
    validation: new ValidationService(),
    senderEmail: 'julian.vitale@example.test',
    coordinatorName: COORDINATOR?.CoordinatorName ?? '',
    subject: MEAL ? `${ldmEventName(MEAL)} - ${ldmEventDay(MEAL)}` : '',
    message: '',
    hasFetchError: false,
    isFetching: false,
    hasContent: true,
    callPopupData: {},
    onMessageChange: noop,
    onSubmitClick: noop,
    onCallClick: noop,
    onTryAgain: noop,
    onCallPopupClose: noop,
    onNavigation: noop,
  },
} satisfies Meta<typeof LdmEventEmailView>;
export default meta;
type Story = StoryObj<typeof meta>;

/** The form: From, To, the read-only Subject, Message, the counter, Submit and "or Call us Directly". */
export const Default: Story = {};

/** A typed message. */
export const Typed: Story = {
  args: { message: 'We will bring dessert and arrive at 20:00 with the children.' },
};

/** While GetCoordinatorDetails runs: the list-updating loader. */
export const Loading: Story = {
  args: { isFetching: true, senderEmail: '', coordinatorName: '', subject: '' },
};

/** GetCoordinatorDetails failed: the network warning with Try again. */
export const Offline: Story = {
  args: { hasFetchError: true, isFetching: true, senderEmail: '', coordinatorName: '', subject: '' },
};

/** Out_HasContent False: "No Event Organiser information.". */
export const NoContent: Story = {
  args: { hasContent: false, senderEmail: '', coordinatorName: '', subject: '' },
};

/** The call popup of the coordinator. */
export const CallPopup: Story = {
  args: {
    callPopupData: {
      Phone: COORDINATOR?.CoordinatorPhoneNumber ?? '',
      ContactPopupData: {
        ImageURL: '',
        IsAvatarImage: false,
        Name: COORDINATOR?.CoordinatorName ?? '',
        Locality: COORDINATOR?.LocalityName ?? '',
        TimezoneName: COORDINATOR?.Timezone.TimezoneLabel ?? '',
        TimezoneOffset: Number(COORDINATOR?.Timezone.OffsetSeconds ?? '0'),
        ShowPopup: true,
        DisplayContactNumber: COORDINATOR?.CoordinatorPhoneNumber ?? '',
        CountryName: COORDINATOR?.CountryName ?? '',
      },
    },
  },
};
