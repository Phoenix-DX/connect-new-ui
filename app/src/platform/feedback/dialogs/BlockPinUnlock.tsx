// @os-block UBTConnect.App_PIN.Block_PINUnlock
import { useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LayoutRuntimeTop } from '@/components/layout/LayoutRuntimeTop';
import { PinUnlockContentContainer } from '@/platform/feedback/dialogs/PinUnlockContentContainer';
import { get_IsUnsupportedSystem } from '@/lib/ubtConnect/unsupportedVersion';
import { UnsupportedVersionWrapper } from '@/components/version/UnsupportedVersionWrapper';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { SvgBackgroundLogin } from '@/components/ui/SvgBackgroundLogin';
import { UBT_Color, UBT_Shape, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { useOsNavigate } from '@/platform/navigation';
import { PATHS } from '@/platform/navigation/paths';

/* App_PIN.Block_PINUnlock (p:UBTConnect.App_PIN.Block_PINUnlock.mvc.js; inputs :8-30, view :160-335, OnInitialize
   :372-384). Layout_LoginFlow with In_HasOverlay = UseOverlay (local, always True), In_ExtendedClass
   `ubt-lock-screen connect-legacy-compatibily-containter` and In_IsCommonBlock: LayoutRuntime_Top only when False
   (:164-170). Content (:186-310): IsUnsupportedSystem (Get_IsUnsupportedSystem on initialize, U16 mock scenario
   `?mock=unsupported-browser`) → `ubt-layout--login__content__unsupported-card` > CustomContainer (Neutral0
   background, horizontal padding ExtraLarge, horizontal margin Base, radius Large) > UnsupportedVersion_Wrapper; else
   the shared Block_PINUnlock_ContentWrapper (ShowForgotPIN, ShowPolicy, In_ForceVisible, UseOverlay) whose Unlock is
   the block's Unlock (:297-304) and NavigateTo_PINRegister → PINRegister (:394-399). Placeholder
   Placeholder_CommonUI_Inside_Layout (:325-335).
   Two instances: CommonUI_InsideLayout (In_IsCommonBlock True, In_ForceVisible = In_ShowLockScreen;
   CommonUI_InsideLayout.mvc.js:201-206), captured unlocked (HF dom:1110-1153) and hidden by the CSS unless it contains
   `.pincode-unlock` or `.unsupported-card` (Connect2_LegacyShared.UBTConnect.css:153); and the PINUnlock screen
   (In_IsCommonBlock False, In_ForceVisible True, Unlock, placeholder; PINUnlock dom/default.html:5-305). */

export interface BlockPinUnlockProps {
  /** OutSystems instance id (CommonUI on HomeFeed: `b13-$b2`; PINUnlock: `$b1`). */
  id?: string;
  /** In_ForceVisible: the keypad shows without PIN_IsLocked (Pincode_Unlock). */
  inForceVisible?: boolean;
  /** In_IsCommonBlock: used inside CommonUI (no LayoutRuntime_Top). */
  inIsCommonBlock?: boolean;
  /** Event Unlock (the ContentWrapper's Unlock: the right PIN). */
  onUnlock?: () => void | Promise<void>;
  /** Placeholder Placeholder_CommonUI_Inside_Layout. */
  placeholderCommonUIInsideLayout?: ReactNode;
}

export function BlockPinUnlock({
  id = 'b13-$b2',
  inForceVisible = false,
  inIsCommonBlock = false,
  onUnlock,
  placeholderCommonUIInsideLayout,
}: BlockPinUnlockProps) {
  const navigate = useOsNavigate();
  const [isUnsupportedSystem] = useState(get_IsUnsupportedSystem);
  const useOverlay = true;
  const s = id.replace('$', '');
  return (
    <OSBlock name="App_PIN.Block_PINUnlock" id={id}>
      <OSBlock name="Layouts.Layout_LoginFlow" id={`${s}-$b1`}>
        {!inIsCommonBlock && <LayoutRuntimeTop id={`${s}-b1-$b1`} />}
        <div
          className="ubt-layout--login ubt-lock-screen connect-legacy-compatibily-containter"
          data-container=""
          id={`${s}-b1-Main`}
        >
          <div className="ubt-layout--login__svg" data-container="">
            {/* Both instances draw the compiled SVGCode (preserveAspectRatio="none", gradient x1..y2): TST renders them
                (observed 2026-10-14, migration/knowledge/shell-observed.md); the captures' DOM serializer drops them. */}
            <SvgBackgroundLogin id={`${s}-b1-$b2`} />
          </div>
          <div className="ubt-layout--login__header" id={`${s}-b1-Placeholder_Header`}></div>
          <div className="ubt-layout--login__content" id={`${s}-b1-Placeholder_Content`}>
            {isUnsupportedSystem ? (
              <div className="ubt-layout--login__content__unsupported-card" data-container="">
                <CustomContainer
                  id={`${s}-$b2`}
                  options={{
                    Background: { BackgroundColor: UBT_Color.Neutral0 },
                    PaddingSize: { HorizontalSizeId: UBT_Size.ExtraLarge },
                    MarginSize: { HorizontalSizeId: UBT_Size.Base },
                    BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Large } },
                  }}
                >
                  <UnsupportedVersionWrapper id={`${s}-$b3`} />
                </CustomContainer>
              </div>
            ) : (
              <PinUnlockContentContainer
                id={`${s}-$b4`}
                showForgotPIN
                showPolicy
                inForceVisible={inForceVisible}
                useOverlay={useOverlay}
                onUnlock={onUnlock}
                onNavigateToPINRegister={() => {
                  navigate(PATHS.pinRegister);
                }}
              />
            )}
          </div>
          <div id={`${s}-b1-Placeholder_CommonUI_Inside_Layout`}>
            <div id={`${s}-Placeholder_CommonUI_Inside_Layout`}>{placeholderCommonUIInsideLayout}</div>
          </div>
        </div>
      </OSBlock>
    </OSBlock>
  );
}
