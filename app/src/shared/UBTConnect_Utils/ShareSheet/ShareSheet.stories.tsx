import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { MemoryRouter } from 'react-router';
import { Connect_Entity } from '../lib/staticEntities';
import { ShareableObject_Generic } from '../ShareableObject_Generic';
import { ShareSheet, type ShareSheetProps } from './ShareSheet';

const meta = { title: 'Shared/UBTConnect_Utils/ShareSheet', component: ShareSheet } satisfies Meta<typeof ShareSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: closed (In_IsOpen False), the root only. */
export const V1: Story = { args: { inIsOpen: false } };

/* In_IsOpen acts on a change (OnParametersChanged): the demo turns it on after the first render. */
function OpenDemo(props: ShareSheetProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    });
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <ShareSheet
      {...props}
      inIsOpen={open}
      onEventClosedShareSheet={() => {
        setOpen(false);
      }}
    />
  );
}

/** No capture: the open sheet (first step) with a neutral shareable object; member lists are NotCaptured (CR-W2C-7). */
export const Open: Story = {
  args: {
    inShareObjectTypeId: 'Household',
    children: (
      <ShareableObject_Generic
        inShareableObject={{ Id: '0', ConnectEntityTypeId: Connect_Entity.Household, Title: 'Hargreaves Household' }}
      />
    ),
  },
  render: (args) => <OpenDemo {...args} />,
  // PreventBackNavigation (rendered while open) needs the router.
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
