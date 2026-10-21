import type { Meta, StoryObj } from '@storybook/react-vite';
import { SwipeEvents } from './SwipeEvents';

/* Never captured (the pack has no DOM variant). The block renders only the TouchEvents root; the story adds the
   swipe area it binds to. */
const meta = { title: 'Shared/osui/SwipeEvents', component: SwipeEvents } satisfies Meta<typeof SwipeEvents>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Month calendar swipe area (LDM_MyEvents_V2): swipe left / right to change month. */
export const MonthSwipe: Story = {
  args: { widgetId: 'swipe-story-area' },
  render: (args) => (
    <>
      <div id="swipe-story-area" style={{ height: '200px', background: 'var(--color-neutral-2)' }}>
        October 2026
      </div>
      <SwipeEvents {...args} />
    </>
  ),
};
