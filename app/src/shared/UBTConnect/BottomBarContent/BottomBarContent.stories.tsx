import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { OSLink } from '@/shared/lib/OSLink';
import { BottomBarItem } from '@/shared/osui/BottomBarItem';
import { BottomBarContent } from './BottomBarContent';

const meta = {
  title: 'Shared/UBTConnect/BottomBarContent',
  component: BottomBarContent,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof BottomBarContent>;
export default meta;
type Story = StoryObj<typeof meta>;

/* BottomBarMenu's list in the placeholder: five links, the active one has class `active`. */
const items = (active: number) => (
  <div className="list list-group OSFillParent" data-list="">
    {[0, 1, 2, 3, 4].map((i) => (
      <OSLink key={i} className={i === active ? 'active' : ''}>
        <BottomBarItem />
      </OSLink>
    ))}
  </div>
);

/** BookmarksByGroup/default (Bookmarks active) */
export const V1: Story = { args: { children: items(3) } };
/** BrowseCountries/default (Directory active) */
export const V2: Story = { args: { children: items(1) } };
/** HomeFeed/default (Home active) */
export const V3: Story = { args: { children: items(0) } };
/** HouseholdCarousel/default (no active item) */
export const V4: Story = { args: { children: items(-1) } };
