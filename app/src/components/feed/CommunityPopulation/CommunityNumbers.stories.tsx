import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { CommunityNumbers, type CommunityNumbersProps } from './CommunityNumbers';
import { fictionalCommunityStatistics } from './mocks';

/** The block as its owner screen uses it: it starts while the data action loads, then the answer arrives
    (OnParametersChanged copies it; a block that starts not loading keeps the empty record, as compiled). */
function AfterFetch(props: CommunityNumbersProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let alive = true;
    void Promise.resolve().then(() => {
      if (alive) setIsLoading(props.isLoading);
    });
    return () => {
      alive = false;
    };
  }, [props.isLoading]);
  return <CommunityNumbers {...props} isLoading={isLoading} />;
}

const meta = {
  title: 'Shared/UBTConnect/Directory_CommunityNumbers',
  component: CommunityNumbers,
  args: { id: '$b7', isLoading: false, communityStatistics: fictionalCommunityStatistics },
  render: (args) => <AfterFetch {...args} />,
} satisfies Meta<typeof CommunityNumbers>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HomeFeed/default: the counts of DataActionGetCommunityStatistics (fictional, captured lengths), change up. */
export const Loaded: Story = {};
/** HomeFeed/loading and HomeFeed/offline: the data action has not answered; the skeleton shows the 1000 placeholders. */
export const Loading: Story = { args: { isLoading: true } };
/** A negative change (compiled code only, not captured): down arrow, red. */
export const ChangeDown: Story = { args: { communityStatistics: { ...fictionalCommunityStatistics, In_Change: -4 } } };
/** No change (compiled code only, not captured): no arrow, "No change today". */
export const NoChange: Story = { args: { communityStatistics: { ...fictionalCommunityStatistics, In_Change: 0 } } };
