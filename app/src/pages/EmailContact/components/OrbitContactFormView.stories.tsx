import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { ValidationService } from '@/components/ui/os/OSValidation';
import { orbitContactRecipients } from '@/mocks/fictional/orbit';
import { OrbitContactFormView } from './OrbitContactFormView';

/* No capture exists (the form is never sent to TST): the stories show the two forms with fictional data of the Orbit
   world (event 7301 and its first host, src/mocks/fictional/orbit.ts). */
const HOST = orbitContactRecipients()[0]?.hosts[0]?.HostName ?? '';
const noop = () => undefined;

const meta = {
  title: 'Pages/EmailContact/OrbitContactFormView',
  component: OrbitContactFormView,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/UBTConnect/EmailContact']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    id: '$b1',
    validation: new ValidationService(),
    isContactHelpdesk: true,
    hostName: '',
    subject: 'Weekend Bible Conferences - Bahia and Azul: arrival on Friday evening',
    lineCount: 2,
    userSubject: '',
    message: '',
    isSubmitting: false,
    onUserSubjectChange: noop,
    onUserSubjectBlur: noop,
    onMessageChange: noop,
    onMessageBlur: noop,
    onMessageKeyDown: noop,
    onMessageKeyUp: noop,
    onSubmitClick: noop,
    onNavigation: noop,
  },
} satisfies Meta<typeof OrbitContactFormView>;
export default meta;
type Story = StoryObj<typeof meta>;

/** The helpdesk form: "Contact Orbit Helpdesk", the read-only subject, "Your inquiry" and Submit. */
export const Default: Story = {};

/** The host form: "Contact Host", "To: <host>", the mandatory subject, "Message" and Send Email. */
export const Host: Story = {
  args: {
    isContactHelpdesk: false,
    hostName: HOST,
    subject: '',
    lineCount: 0,
    userSubject: 'Our arrival time',
    message: 'We arrive on Friday at 18:30 with two children.',
  },
};

/** While SendContactEmail runs: the button shows its loading state. */
export const Submitting: Story = {
  args: { message: 'Is there a bus from the airport to the conference hall?', isSubmitting: true },
};
