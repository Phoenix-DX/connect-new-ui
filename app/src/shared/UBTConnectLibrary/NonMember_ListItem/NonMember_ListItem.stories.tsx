import type { Meta, StoryObj } from '@storybook/react-vite';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { CircleButton } from '@/shared/UBTConnectLibrary/CircleButton';
import { NonMember_ListItem } from './NonMember_ListItem';

const meta = {
  title: 'Shared/UBTConnectLibrary/NonMember_ListItem',
  component: NonMember_ListItem,
} satisfies Meta<typeof NonMember_ListItem>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Names and captions are person data (masked): the married daughter of the Pérez household in the directory cast
   (src/mocks/fictional/directory.ts), with the captured word structure ("Married to" + two highlighted words + five
   more words). */
const married = {
  title: 'Ana',
  marriedCaption: 'Married to Pablo Ortiz and recently moved to Rosario',
  marriageHighlightText: 'Pablo Ortiz',
  placeholderLeft: <UBT_LazyImage />,
  actions: <CircleButton />,
};
/** HouseholdCarousel/default (pack: wrapper only): married relative. */
export const V1: Story = { args: married };
/** HouseholdCarousel/default: full markup (avatar and actions nested). */
export const V2: Story = { args: married };
/** Household_Relations/default: name only. */
export const V3: Story = {
  args: { title: 'Ana', placeholderLeft: <UBT_LazyImage />, actions: <CircleButton /> },
};
