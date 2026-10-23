import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { osImage } from '@/legacy/os/os-assets';
import { appCache } from '@/api/app';
import { clearMemoryCache, putCacheableObject } from '@/api/client/cache';
import { getClientVar } from '@/platform/session/session';
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
import { OSLink } from '@/shared/lib/OSLink';
import { PinCode } from './PinCode';

const meta = {
  title: 'Shared/UBT_AppManager/PinCode',
  component: PinCode,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof PinCode>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Caller markup in the placeholders as captured: each wrapping block adds one placeholder div. */
const logo = (
  <img className="login-screen__connect-logo" data-image="" src={osImage('img/UBTConnect.ConnectLogoWhite.svg')} />
);
const text = (id: string, inText: string, weight: string = UBT_FontWeight.SemiBold) => (
  <CustomText
    id={id}
    inText={inText}
    inTextOptions={{ Color: UBT_Color.Inherit, FontSize: UBT_FontSize.Base, FontWeight: weight }}
  />
);
const erase = (id: string) => (
  <Icon id={id} inColorId={UBT_Color.Inherit} inIconId={UBT_Icons2.Backspace} inSizeId={UBT_IconsSize.Display_36} />
);

/** PINChange/default: Pincode_Unlock inside PinUnlock_MobileWrapper, back navigation allowed (from the menu) */
export const V1: Story = {
  args: {
    id: 'b5-b1-b1-$b1',
    length: 4,
    inExtendedClasses: 'connect-pin-screen ubt-pin-overlay',
    inAllowBackNavigation: true,
    headerBar: (
      <div>
        <div />
      </div>
    ),
    titlePlaceholder: (
      <div>
        <div>{logo}</div>
      </div>
    ),
    message: (
      <div>
        <div>{text('b5-$b2', 'Enter your current PIN')}</div>
      </div>
    ),
    option: <div />,
    erasePlaceholder: (
      <div>
        <div>{erase('b5-$b4')}</div>
      </div>
    ),
    placeholderBottomKeyboard: (
      <div>
        <div />
      </div>
    ),
    contentPlaceholder: (
      <div className="content-placeholder">
        <div />
      </div>
    ),
  },
};

/** PINRegister/default: Pincode_Register (first entry), back navigation prevented */
export const V2: Story = {
  args: {
    id: 'b4-b1-$b1',
    length: 4,
    inExtendedClasses: 'connect-pin-screen ubt-pin-overlay',
    headerBar: (
      <div data-container="" style={{ textAlign: 'left' }}>
        <div />
      </div>
    ),
    titlePlaceholder: <div>{logo}</div>,
    message: (
      <div>
        {text('b4-$b2', 'Welcome Alex Example')}
        {text('b4-$b3', 'Register a PIN code', UBT_FontWeight.Regular)}
      </div>
    ),
    option: <div className="pincode-button" />,
    erasePlaceholder: <div>{erase('b4-$b6')}</div>,
    contentPlaceholder: (
      <div className="content-placeholder">
        <CustomContainer id="b4-$b7" options={{ TextOptions: { Color: UBT_Color.Neutral10 } }}>
          Need help? Contact Us
        </CustomContainer>
      </div>
    ),
  },
};

/** PINUnlock/default: Pincode_Unlock inside PinUnlock_MobileWrapper, with Forgot PIN and the policy links */
export const V3: Story = {
  beforeEach: () => {
    putCacheableObject(appCache.policies(getClientVar('UBTConnect_Utils.UniqueCacheKey'), 60), {});
    return clearMemoryCache;
  },
  args: {
    id: 'b1-b4-b1-b1-$b1',
    length: 4,
    inExtendedClasses: 'connect-pin-screen ubt-pin-overlay',
    headerBar: (
      <div>
        <div />
      </div>
    ),
    titlePlaceholder: (
      <div>
        <div>{logo}</div>
      </div>
    ),
    message: (
      <div>
        <div>{text('b1-b4-$b2', 'Enter your PIN code')}</div>
      </div>
    ),
    option: <div />,
    erasePlaceholder: (
      <div>
        <div>{erase('b1-b4-$b4')}</div>
      </div>
    ),
    placeholderBottomKeyboard: (
      <div>
        <div>
          <div className="border-bottom-s border-color-neutral-0 OSInline" data-container="">
            <OSLink>
              <CustomContainer id="b1-b4-$b5" extendedClasses="border-bottom-s border-color-neutral-0">
                Forgot PIN?
              </CustomContainer>
            </OSLink>
          </div>
        </div>
      </div>
    ),
    contentPlaceholder: (
      <div className="content-placeholder">
        <div>
          <SkeletonSection id="b1-b4-$b7" />
          <CacheControl_Policies id="b1-b4-$b11" />
        </div>
      </div>
    ),
  },
};
