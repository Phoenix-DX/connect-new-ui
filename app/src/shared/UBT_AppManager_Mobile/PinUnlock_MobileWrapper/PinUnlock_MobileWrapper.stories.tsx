import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { osImage } from '@/legacy/os/os-assets';
import { CACHE_TYPE, clearMemoryCache, putCacheableObject } from '@/platform/storage/memoryCache';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { getClientVar, setClientVar, setSignedInUser } from '@/platform/session/session';
import { OSLink } from '@/shared/lib/OSLink';
import { CacheControl_Policies } from '@/shared/UBTConnect_Utils/CacheControl_Policies';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_IconsSize,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { PinUnlock_MobileWrapper } from './PinUnlock_MobileWrapper';

/** Stories only: the signed-in, unlocked tab of the captures. */
const session: Decorator = (Story) => {
  setSignedInUser(MOCK_USER_ID);
  setClientVar('UBT_AppManager.PIN_SessionInactivity_Use', true);
  setClientVar('UBT_AppManager.PIN_IsLocked', false);
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  );
};

const meta = {
  title: 'Shared/UBT_AppManager_Mobile/PinUnlock_MobileWrapper',
  component: PinUnlock_MobileWrapper,
  decorators: [session],
} satisfies Meta<typeof PinUnlock_MobileWrapper>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: lock container of a screen, not locked */
export const V1: Story = {
  args: { id: 'b3-b2-b4-$b1', inPinLength: 4, inExtendedClasses: 'connect-pin-screen ubt-pin-overlay' },
};

/** PINUnlock/default: as Block_PINUnlock_ContentWrapper fills it on the PINUnlock screen (keypad and placeholders) */
export const V2: Story = {
  beforeEach: () => {
    putCacheableObject(CACHE_TYPE.policies, getClientVar('UBTConnect_Utils.UniqueCacheKey'), {}, 60);
    return clearMemoryCache;
  },
  args: {
    id: 'b1-b4-$b1',
    inPinLength: 4,
    inForceVisible: true,
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
        <SkeletonSection id="b1-b4-$b7" />
        <CacheControl_Policies id="b1-b4-$b11" />
      </>
    ),
  },
};
