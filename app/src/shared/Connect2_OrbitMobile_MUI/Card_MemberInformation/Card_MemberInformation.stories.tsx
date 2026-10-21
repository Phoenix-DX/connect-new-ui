import type { Meta, StoryObj } from '@storybook/react-vite';
import { LOCALITY } from '../../../mocks/fictional/directory';
import { Card_MemberInformation } from './Card_MemberInformation';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/Card_MemberInformation',
  component: Card_MemberInformation,
} satisfies Meta<typeof Card_MemberInformation>;
export default meta;
type Story = StoryObj<typeof meta>;

const householder = {
  HouseholderId: '42438',
  MemberId: '710001',
  LocalityId: LOCALITY.id,
  Locality: LOCALITY.name,
  CountryCode: LOCALITY.countryCode,
  FirstName: 'Julián',
  LastName: 'Vitale',
  Title: 'Mr',
  IsHouseholder: true,
  Age: '43',
  Phone: '+54 555 0101',
};

/** MilestoneDetail/default: householder with the dot, age and phone. */
export const V1: Story = {
  args: { id: 'b1-b5-l5-142864_0-l5-142865_0-l5-142866_0-$b9', inMemberInformation: householder, inDisplayDot: true },
};

/** MilestoneDetail/default: member without a phone (empty phone container), no dot. */
export const V2: Story = {
  args: {
    id: 'b1-b5-l5-142864_1-l5-142867_0-l5-142868_0-$b9',
    inMemberInformation: {
      ...householder,
      IsHouseholder: false,
      MemberId: '710002',
      FirstName: 'Fiorella',
      Title: 'Mrs',
      Age: '41',
      Phone: '',
    },
  },
};

/** MilestoneDetail/default: younger member with a phone and no dot (In_DisplayDot False). */
export const V3: Story = {
  args: {
    id: 'b1-b5-l5-142864_2-l5-142869_0-l5-142870_0-$b9',
    inMemberInformation: {
      ...householder,
      IsHouseholder: false,
      MemberId: '710003',
      FirstName: 'Matías',
      Title: 'Mr',
      Age: '20',
    },
  },
};
