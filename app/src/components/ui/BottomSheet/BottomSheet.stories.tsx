import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { bindDragToOpen } from '@/components/ui/ConnectBottomSheet/jsNodes';
import { ColumnsThree } from '@/components/ui/ColumnsThree';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Skeleton } from '@/components/ui/Skeleton';
import { jSUtils_SetStyleProperty } from '@/shared/UBTJavaScriptUtils/lib/actions';
import { bottomSheetOpen } from '@/components/ui/lib/actions';
import { Shape } from '@/components/ui/lib/staticEntities';
import { BottomSheet, type BottomSheetProps } from './BottomSheet';

const meta = { title: 'Shared/osui/BottomSheet', component: BottomSheet } satisfies Meta<typeof BottomSheet>;
export default meta;
type Story = StoryObj<typeof meta>;

/* What the only caller (ConnectPatterns.BottomSheet) adds, as captured: the footer height on this block's root
   (OnReady, JSUtils_SetStyleProperty) and the drag-to-open binding of the header (Initialized: `touch-action: none`). */
function AsConnectBottomSheet({ footerHeight, ...args }: BottomSheetProps & { footerHeight: string }) {
  return (
    <BottomSheet
      {...args}
      onInitialized={(widgetId) => {
        jSUtils_SetStyleProperty(widgetId, '--bottom-sheet--footer-height', footerHeight);
        bindDragToOpen(widgetId, bottomSheetOpen);
      }}
    />
  );
}
/* Caller markup in the Content placeholder as captured (ConnectPatterns.BottomSheet's Content and Footer). */
const placeholder = (padding: string, children: ReactNode, footer?: ReactNode) => (
  <>
    <div className={`ubt-bottom-sheet--content ${padding}`}>{children}</div>
    <div className="ubt-bottom-sheet--footer">{footer}</div>
  </>
);
const filterSheet = 'ubt-bottom-sheet background-neutral-2 custom-padding bottom-sheet-higher-z-index';

/** CountryDetails/default: the country filter sheet (closed) */
export const V1: Story = {
  args: {
    shape: Shape.Rounded,
    extendedClass: filterSheet,
    topBar: <ColumnsThree />,
    content: placeholder(
      'padding-s',
      <PendingBlock name="App_CommonBlocks_Filter.FilterSheet_OptionList_Item" />,
      <CustomContainer />,
    ),
  },
  render: (args) => <AsConnectBottomSheet {...args} footerHeight="72px" />,
};
/** CountryDetails/default: the legend sheet (closed, no footer) */
export const V2: Story = {
  args: {
    shape: Shape.Rounded,
    extendedClass: 'ubt-bottom-sheet background-neutral-0 custom-padding directory-legend-explanation',
    topBar: <ColumnsThree />,
    content: placeholder(
      'padding-x-base padding-bottom-xxl',
      <>
        <CustomContainer />
        <CustomContainer />
        <CustomContainer />
        <CustomContainer />
        <CustomContainer />
      </>,
    ),
  },
  render: (args) => <AsConnectBottomSheet {...args} footerHeight="0px" />,
};
/** CountryDetails/loading: the filter sheet with its loading skeleton */
export const V3: Story = {
  args: {
    shape: Shape.Rounded,
    extendedClass: filterSheet,
    topBar: <ColumnsThree />,
    content: placeholder('padding-s', <Skeleton />, <CustomContainer />),
  },
  render: (args) => <AsConnectBottomSheet {...args} footerHeight="72px" />,
};
/** Notes/default: the notes sheet (NotesSheet) with its loading skeleton */
export const V4: Story = {
  args: {
    shape: Shape.Rounded,
    extendedClass: 'ubt-bottom-sheet background-neutral-2 custom-padding',
    topBar: <ColumnsThree />,
    content: placeholder('padding-s', <Skeleton />, <CustomContainer />),
  },
  render: (args) => <AsConnectBottomSheet {...args} footerHeight="72px" />,
};
