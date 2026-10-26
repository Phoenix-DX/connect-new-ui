import type { Meta, StoryObj } from '@storybook/react-vite';
import { AnimationType, Speed } from '@/components/ui/lib/staticEntities';
import { Animate } from './Animate';

const meta = {
  title: 'Shared/OutSystemsUI/Animate',
  component: Animate,
} satisfies Meta<typeof Animate>;
export default meta;
type Story = StoryObj<typeof meta>;

/** MyBookmarks/loading: the offline card of the caller, as captured. */
export const V1: Story = {
  args: {
    animationType: AnimationType.TopToBottom,
    speed: Speed.Normal,
    children: (
      <div className="card background-orange-dark" data-container="">
        <div data-container="">
          <i className="icon fa fa-wifi fa-1x" data-icon="" />
          <div data-container="">
            <div data-container="">You are offline.</div>
            <div className="margin-top-base" data-container="">
              Please check your network connection and try again.
            </div>
          </div>
        </div>
        <div data-container="">
          <button className="btn" data-button="" type="button">
            Try again
          </button>
        </div>
      </div>
    ),
  },
};
