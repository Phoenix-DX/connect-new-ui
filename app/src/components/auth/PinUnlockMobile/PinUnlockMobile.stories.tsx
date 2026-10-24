import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { OSLink } from '@/components/ui/os/OSLink';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { Skeleton } from '@/components/ui/Skeleton';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_IconsSize,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { PinUnlockMobile } from './PinUnlockMobile';

/** The InactivityTimer block as the caller gives it: the block renders an empty wrapper (platform/session). */
const renderInactivityTimer = (id: string | undefined) => <OSBlock name="PIN.InactivityTimer" id={id} />;

/** The PreventBackNavigation block as the caller gives it (platform/navigation): its wrapper and its nested
    BackNavigationHandler. */
const renderPreventBackNavigation = (id: string | undefined) => (
  <OSBlock name="NavigationHandler.PreventBackNavigation" id={id}>
    <OSBlock name="NavigationHandler.BackNavigationHandler" />
  </OSBlock>
);

const meta = {
  title: 'Shared/UBT_AppManager_Mobile/PinUnlock_MobileWrapper',
  component: PinUnlockMobile,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: { renderInactivityTimer, renderPreventBackNavigation },
} satisfies Meta<typeof PinUnlockMobile>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: lock container of a screen, not locked */
export const V1: Story = {
  args: { id: 'b3-b2-b4-$b1', inPinLength: 4, inExtendedClasses: 'connect-pin-screen ubt-pin-overlay' },
};

/** PINUnlock/default: as Block_PINUnlock_ContentWrapper fills it on the PINUnlock screen (keypad and placeholders).
    CacheControl_Policies is nested in the capture: its empty wrapper stands for it (it has its own tests). */
export const V2: Story = {
  args: {
    id: 'b1-b4-$b1',
    inPinLength: 4,
    isKeypadVisible: true,
    inExtendedClasses: 'connect-pin-screen ubt-pin-overlay',
    placeholderTitlePlaceholder: (
      <img className="login-screen__connect-logo" data-image="" src={osImage('img/UBTConnect.ConnectLogoWhite.svg')} />
    ),
    placeholderUnlockText: (
      <CustomText
        id="b1-b4-$b2"
        inText="Enter your PIN code"
        inTextOptions={{ Color: UBT_Color.Inherit, FontSize: UBT_FontSize.Base, FontWeight: UBT_FontWeight.SemiBold }}
      />
    ),
    placeholderEraseButton: (
      <Icon
        id="b1-b4-$b4"
        inColorId={UBT_Color.Inherit}
        inIconId={UBT_Icons2.Backspace}
        inSizeId={UBT_IconsSize.Display_36}
      />
    ),
    placeholderBottomKeyboard: (
      <div className="border-bottom-s border-color-neutral-0 OSInline" data-container="">
        <OSLink>
          <CustomContainer id="b1-b4-$b5" extendedClasses="border-bottom-s border-color-neutral-0">
            Forgot PIN?
          </CustomContainer>
        </OSLink>
      </div>
    ),
    placeholderContent: (
      <>
        <Skeleton id="b1-b4-$b7" />
        <OSBlock name="CacheControl.CacheControl_Policies" id="b1-b4-$b11" />
      </>
    ),
  },
};
