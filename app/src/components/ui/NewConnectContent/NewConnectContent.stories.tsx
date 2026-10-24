import type { Meta, StoryObj } from '@storybook/react-vite';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { Input } from '@/components/ui/Input';
import { NewConnectContent } from './NewConnectContent';

const meta = {
  title: 'Shared/Connect2_LegacyShared/NewConnectContent',
  component: NewConnectContent,
} satisfies Meta<typeof NewConnectContent>;
export default meta;
type Story = StoryObj<typeof meta>;

/** AssembleEvents/default: the screen's content wrapper around the Assemble summary list (not built yet). */
export const V1: Story = {
  args: {
    id: 'b2-$b3',
    children: <PendingBlock name="Assemble.AssembleSummary_List" />,
  },
};

/** AssembleEvents/default: the filter sheet content (caller markup as captured): header with search and the meeting
    type reset link, the empty filter list, Cancel / Apply, and the bottom spacer. */
export const V2: Story = {
  args: {
    id: 'b2-b4-b8-Block_FilterContent',
    children: (
      <>
        <div
          className="font-size-s font-semi-bold padding-base action-menu-container--scrollable__header"
          data-container=""
        >
          Filters
          <div className="padding-x-s padding-y-base assemble-filter-search" data-container="">
            <Input id="b2-b4-b8-$b3" />
          </div>
          <div className="display-flex justify-content-space-between font-semi-bold" data-container="">
            <div className="OSInline" data-container="">
              Meeting Types
            </div>
            <a className="ThemeGrid_MarginGutter" data-link="" href="#">
              Reset
            </a>
          </div>
        </div>
        <div className="padding-x-base padding-bottom-base font-size-s assemble-filter-filters" data-container="">
          <div data-container="">
            <div data-container="">
              <div className="list list-group OSFillParent" data-list="" style={{ position: 'relative' }} />
            </div>
          </div>
          <div className="text-align-center assemble-filter-actions" data-container="">
            <button className="btn" data-button="" type="button">
              Cancel
            </button>
            <button className="btn btn-primary ThemeGrid_MarginGutter" data-button="" type="button">
              <span className="font-size-s">Apply</span>
            </button>
          </div>
        </div>
        <div className="padding-x-base padding-bottom-base" data-container="" />
      </>
    ),
  },
};
