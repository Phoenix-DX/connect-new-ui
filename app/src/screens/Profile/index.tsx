import { useMemo, useRef, useState } from 'react';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import {
  OSForm,
  useInputWithVariableValidation,
  useScreenValidationService,
  ValidationServiceProvider,
  type InputDataType,
} from '@/components/ui/os/OSValidation';
import { ButtonLoading } from '@/shared/osui/ButtonLoading';
import { InputWithIcon } from '@/shared/osui/InputWithIcon';
import { bottomSheetOpen } from '@/shared/osui/lib/actions';
import { preventNavigation } from '@/shared/NavigationHandler/lib/actions';
import { CacheControl_UserInfo_Wrapper } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper';
import type { Directory_UserCurrent } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { Dialog_CustomChoice } from '@/shared/UBTConnect/Dialog_CustomChoice';
import { Dialog_Navigation } from '@/shared/UBTConnect/Dialog_Navigation';
import { SectionSeparator } from '@/shared/UBTConnect/SectionSeparator';
import { Button } from '@/shared/UBTConnect_Utils/Button';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { jSUtils_CopyToClipboard } from '@/shared/UBTJavaScriptUtils/lib/actions';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { FixedFooter } from '@/shared/UBTConnectLibrary/FixedFooter';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { Layout_HomePage } from '@/shared/UBTConnectLibrary/Layout_HomePage';
import {
  UBT_AlignItems,
  UBT_ButtonType,
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_Display,
  UBT_FlexDirection,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_ImageSize,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { SpacingOptions, TextOptions } from '@/shared/UBTConnectLibrary/lib/structures';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { confirmAction } from '@/platform/feedback/dialogs';
import {
  NotRegisteredException,
  UserException,
  exceptionMessage,
  isCommunicationException,
  isInstanceOf,
  isSystemException,
  raiseToFlowHandler,
} from '@/legacy/os/exceptions';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { putCacheableObject } from '@/api/client/cache';
import { memberCache } from '@/api/member';
import { useNavigateBack } from '@/platform/navigation';
import { getClientVar } from '@/platform/session/session';
import { getUserInformation } from '@/platform/session/userInfo';
import { member_EditDetails_Service, useGetCountryInfo } from './api';
import {
  EMPTY_ACCOUNT_FORM,
  action_FormatAddress,
  fromUserInformation,
  isRequireRequestCreation,
  sameRecord,
} from './components/actions';
import { Profile_HouseholdPreview } from './components/Profile_HouseholdPreview';
import type { AccountForm } from './types';

/* Static-entity values of TST (migration/knowledge/static-entities-tst.json, UBTConnect.uBT_*). */
const ICON_ARROW_LEFT_ALT = 'connect-icon-arrow_left_alt';
const ICON_ID_CARD = 'connect-icon-id_card';
const ICON_CONTENT_COPY = 'connect-icon-content_copy';
const ICONS_SIZE_MEDIUM_20 = 'icon-medium';
const IMAGE_SIZE_DOUBLE_EXTRA_LARGE_176 = 'xxl';
const FONT_SIZE_HEADING2 = 'h2';
const SHADOW_EXTRA_SMALL_TOP = 'xs-top';

const text = (Color: string, FontSize: string, FontWeight: string): TextOptions => ({ Color, FontSize, FontWeight });
const SECTION_TITLE = text(UBT_Color.Neutral10, UBT_FontSize.Heading6, UBT_FontWeight.SemiBold);
const FIELD_LABEL = text(UBT_Color.Neutral10, UBT_FontSize.Small, UBT_FontWeight.SemiBold);
const NOTE_S = text(UBT_Color.Neutral10, UBT_FontSize.Small, UBT_FontWeight.Regular);
const NOTE_XS = text(UBT_Color.Neutral10, UBT_FontSize.ExtraSmall, UBT_FontWeight.Regular);
const SECTION_PADDING = {
  PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Small, BottomSizeId: UBT_Size.Base },
};
const SWITCH_ROW_PADDING = { PaddingSize: { TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.ExtraSmall } };
const SWITCH_COLUMNS = { ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast, VerticalAlign: UBT_VerticalAlign.Center };
const PAD_BOTTOM_BASE: SpacingOptions = { BottomSizeId: UBT_Size.Base };
const PAD_BOTTOM_S: SpacingOptions = { BottomSizeId: UBT_Size.Small };
const PAD_TOP_BASE_BOTTOM_S: SpacingOptions = { TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.Small };

/** Data type of the variable each input type binds to here (Profile.mvc.js view: Text :693/:810/:1012, Email :1084,
    PhoneNumber :1868/:2045/:2266). */
const INPUT_DATA_TYPE: Record<'text' | 'email' | 'tel', InputDataType> = {
  text: 'Text',
  email: 'Email',
  tel: 'PhoneNumber',
};

/** OutSystems Input widget (Text / Email / Phone): `span.input-<type>` > input, as captured (dom/default.html:197-199),
    with the platform validation (Mandatory False on every input of the form, Profile.mvc.js :690-2250): the
    " not-valid" class, aria-describedby and the validation message after the input once a validation fails. */
function OSInput({
  id,
  type,
  value,
  enabled,
  onChange,
}: {
  id: string;
  type: 'text' | 'email' | 'tel';
  value: string;
  enabled: boolean;
  onChange?: (value: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const validation = useInputWithVariableValidation({
    id,
    mandatory: false,
    dataType: INPUT_DATA_TYPE[type],
    elementRef: inputRef,
  });
  return (
    <span className={`input-${type}`}>
      <input
        ref={inputRef}
        aria-describedby={validation.ariaDescribedBy}
        aria-required="false"
        className={validation.className('form-control OSFillParent')}
        data-input=""
        disabled={!enabled}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {validation.validationElement}
    </span>
  );
}

/** OutSystems Switch widget, as captured (dom/default.html:283-285). */
function OSSwitch({ id, checked, onChange }: { id: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <span>
      <input
        checked={checked}
        className="switch"
        data-switch=""
        id={id}
        type="checkbox"
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
    </span>
  );
}

/** Flow handler of an error raised by a screen action (Bubble* user exceptions, NotRegistered re-raised). */
function raiseFromHandler(error: unknown): void {
  if (isInstanceOf(error, NotRegisteredException)) {
    raiseToFlowHandler(error);
    return;
  }
  if (isCommunicationException(error)) {
    raiseToFlowHandler(new UserException(exceptionMessage(error), 'UBTConnect.BubbleCommunicationException'));
    return;
  }
  if (!isSystemException(error)) {
    raiseToFlowHandler(new UserException(exceptionMessage(error), 'UBTConnect.BubbleGenericException'));
    return;
  }
  raiseToFlowHandler(error);
}

/** UBTConnect App_Profile.Profile (Profile.mvc.js: model :1-140, view :141-2817, controller :2818-5063).
    Captured dom/default.html (spouse account), loading.html, offline.html. */
export default function Profile() {
  const navigateBack = useNavigateBack();
  // The screen's validationServiceInstance (ScreenController_ValidateWidgets, DetailsForm.Valid).
  const validation = useScreenValidationService();
  const [user, setUser] = useState<Directory_UserCurrent | null>(null);
  const [accountForm, setAccountForm] = useState<AccountForm>(EMPTY_ACCOUNT_FORM);
  const [accountFormOriginal, setAccountFormOriginal] = useState<AccountForm>(EMPTY_ACCOUNT_FORM);
  const [accountFormViewPreview, setAccountFormViewPreview] = useState<AccountForm>(EMPTY_ACCOUNT_FORM);
  const [isHouseholder, setIsHouseholder] = useState(false);
  const [isSpouse, setIsSpouse] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [mainContainerId, setMainContainerId] = useState('');
  const [previewBottomSheetId, setPreviewBottomSheetId] = useState('');
  const [currentCountryCode, setCurrentCountryCode] = useState('');
  const isFetched = user !== null;
  const getCountryInfo = useGetCountryInfo(currentCountryCode, isFetched);
  // OnAfterFetch_GetCountryInfo / OnChange_Fields → Action_FormatAddress (:3766-3820, :3932-3955)
  const formattedAddress = action_FormatAddress(getCountryInfo.data?.addressFormat ?? '', accountForm);

  const personal = accountForm.AccountForm_PersonalInformation;
  const contact = accountForm.AccountForm_ContactInformation;
  const showContactSwitches = isHouseholder || isSpouse;

  // OnChange_Fields (:3822-3848): HasChanges = AccountForm <> AccountFormOriginal
  const changeFields = (next: AccountForm, original: AccountForm = accountFormOriginal) => {
    setAccountForm(next);
    setHasChanges(!sameRecord(next, original));
  };
  const setPersonal = (patch: Partial<AccountForm['AccountForm_PersonalInformation']>) => ({
    ...accountForm,
    AccountForm_PersonalInformation: { ...personal, ...patch },
  });
  const setContact = (patch: Partial<AccountForm['AccountForm_ContactInformation']>) => ({
    ...accountForm,
    AccountForm_ContactInformation: { ...contact, ...patch },
  });

  // CacheControl_UserInfo_WrapperResult (:3367-3508); Action_RefreshSubdivionList only acts on the householder
  // address section (Q1 → not built); then Refresh GetCountryInfo (enabled once isFetched).
  const onUserInfoResult = (userInformation: Directory_UserCurrent) => {
    const result = fromUserInformation(userInformation, accountForm);
    setUser(userInformation);
    setAccountForm(result.accountForm);
    setAccountFormOriginal(result.accountForm);
    setIsHouseholder(result.isHouseholder);
    setCurrentCountryCode(result.currentCountryCode);
    setIsSpouse(result.isSpouse);
    setAccountFormViewPreview(result.accountForm);
  };

  // OnClick_ViewPreview (:3073-3102)
  const onClick_ViewPreview = () => {
    setAccountFormViewPreview(accountForm);
    bottomSheetOpen(previewBottomSheetId);
  };

  // OnChange_ShowAgeSwitch (:3850-3893): the switch already changed the variable; Cancel turns it back
  const onChange_ShowAgeSwitch = async (checked: boolean) => {
    const next = setPersonal({ ShowLifeCycleDates: checked });
    setAccountForm(next);
    const isConfirmed = await confirmAction('AgeConfirmation_PopUp');
    if (isConfirmed) changeFields(next);
    else setAccountForm({ ...next, AccountForm_PersonalInformation: { ...personal, ShowLifeCycleDates: !checked } });
  };

  // OnClick_Save (:3509-3765)
  const onClick_Save = async () => {
    setIsLoadingSubmit(true);
    // ScreenController_ValidateWidgets (:3546-3547, UBTJavaScriptUtils: validationServiceInstance.validate(), every
    // widget of the screen), then isValid = DetailsForm.Valid (:3549-3550). CR-Profile-2.
    validation.validate();
    const isValid = validation.isValid('DetailsForm');
    // If isHouseholder: DropdownClearValidation / DropdownNotValid and the required address items (:3551-3600) belong
    // to the householder address section, not built (Q1 → A).
    if (!isValid) {
      setIsLoadingSubmit(false);
      setHasChanges(false);
      return;
    }
    try {
      const form = accountForm;
      await member_EditDetails_Service(form, isRequireRequestCreation(form, accountFormOriginal));
      setIsLoadingSubmit(false);
      setAccountFormOriginal(form);
      // ChangedVisibilityPreferences (:3631-3648): Original = AccountForm was just assigned, so the condition holds
      const info = await getUserInformation();
      const current = info.Directory_UserCurrent;
      putCacheableObject(memberCache.userInfo(getClientVar('UBTConnect_Utils.UniqueCacheKey')), {
        ...info,
        Directory_UserCurrent: {
          ...current,
          Directory_UserCurrent_Visibility: {
            ...current.Directory_UserCurrent_Visibility,
            DisplayAge: form.AccountForm_PersonalInformation.ShowLifeCycleDates,
            DisplayMobilePhone: form.AccountForm_ContactInformation.ShowMobileNumber,
            DisplayWorkPhone: form.AccountForm_ContactInformation.ShowWorkNumber,
          },
        },
      });
      changeFields(form, form);
      feedbackMessageAutoClose({
        title: '',
        message: 'Your update request has been submitted.',
        messageType: 'success',
        encodedHtml: true,
        extendedClass: '',
        delayMs: 0,
        useDebounce: false,
      });
    } catch (error) {
      if (!isInstanceOf(error, NotRegisteredException)) setIsLoadingSubmit(false);
      raiseFromHandler(error);
    }
  };

  const preview = useMemo(
    () => ({
      UI_AccountForm: accountFormViewPreview,
      HouseholdMemberId: user?.MemberID ?? '0',
      UsePreview: true,
      isHouseholder: user?.Directory_UserCurrent_Member.isHouseholder ?? false,
      FormattedAddress: formattedAddress,
    }),
    [accountFormViewPreview, user, formattedAddress],
  );

  return (
    <ValidationServiceProvider service={validation}>
      <Layout_HomePage
        id="$b1"
        extendedClass="ubt-profile-screen"
        sVGHeight="calc(200px - var(--header-size))"
        contentBackgroundColor={UBT_Color.Neutral0}
        addSearchBar={false}
        onOnReadyEvent={setMainContainerId}
        placeholderHeaderTitle={
          <IconText
            id="$b2"
            text="Edit Account"
            textOptions={text(UBT_Color.Neutral0, UBT_FontSize.Small, UBT_FontWeight.Regular)}
            onClicked={navigateBack}
          >
            <Icon id="$b3" inIconId={ICON_ARROW_LEFT_ALT} inColorId={UBT_Color.Neutral0} />
          </IconText>
        }
        content={
          <>
            <SkeletonSection id="Content" inIsLoading={!isFetched}>
              <CustomContainer
                id="Header"
                options={{
                  PaddingSize: {
                    HorizontalSizeId: UBT_Size.Base,
                    TopSizeId: UBT_Size.Medium,
                    BottomSizeId: UBT_Size.Base,
                  },
                  DisplayOptions: {
                    Display: UBT_Display.Flex,
                    AlignItems: UBT_AlignItems.Center,
                    FlexDirection: UBT_FlexDirection.Column,
                  },
                }}
              >
                <UBT_LazyImage
                  id="$b6"
                  entityId={user?.MemberID ?? '0'}
                  imageSize={{ Height: IMAGE_SIZE_DOUBLE_EXTRA_LARGE_176, Width: UBT_ImageSize.Square }}
                  entityType={Connect_Entity.Member}
                  imageURL={user?.Directory_UserCurrent_Member.Photo.SignedURL ?? ''}
                />
                <CustomText
                  id="NameText"
                  extendedClasses="padding-y-s"
                  inText={user?.FullName ?? ''}
                  inTextOptions={text(UBT_Color.Neutral8, FONT_SIZE_HEADING2, UBT_FontWeight.SemiBold)}
                />
                <CustomContainer
                  id="ViewPreview"
                  options={{ PaddingSize: { GeneralSizeId: UBT_Size.Small }, IsInlineBlock: true }}
                  onClicked={onClick_ViewPreview}
                >
                  <IconText
                    id="$b9"
                    text="Preview Household Profile"
                    textOptions={text(UBT_Color.Primary, UBT_FontSize.Base, UBT_FontWeight.SemiBold)}
                  >
                    <Icon
                      id="$b10"
                      inSizeId={ICONS_SIZE_MEDIUM_20}
                      inIconId={ICON_ID_CARD}
                      inColorId={UBT_Color.Primary}
                    />
                  </IconText>
                </CustomContainer>
              </CustomContainer>
              <SectionSeparator id="$b11" />
              <OSForm id="DetailsForm" style='"form card" OSFillParent'>
                <CustomContainer id="IdentificationInfo" options={SECTION_PADDING}>
                  <CustomText
                    id="Identification"
                    inText="Identification"
                    inTextOptions={SECTION_TITLE}
                    inPaddingOptions={PAD_BOTTOM_BASE}
                  />
                  <CustomText
                    id="ContactBaseID"
                    inText="ContactBase ID"
                    inTextOptions={FIELD_LABEL}
                    inPaddingOptions={PAD_BOTTOM_S}
                  />
                  <OSInput
                    id="Input_ContactBaseId"
                    type="text"
                    enabled={false}
                    value={accountFormOriginal.AccountForm_IdentificationInformation.MemberId}
                  />
                  <CustomText
                    id="UBTAccountNumber"
                    inText="UBT Account Number"
                    inTextOptions={FIELD_LABEL}
                    inPaddingOptions={PAD_TOP_BASE_BOTTOM_S}
                  />
                  <InputWithIcon
                    id="$b16"
                    alignIconRight
                    icon={
                      <Icon
                        id="$b17"
                        inIconId={ICON_CONTENT_COPY}
                        inColorId={UBT_Color.Neutral7}
                        onClick={() => {
                          // OnClick_UBTAccountNumber (:3209-3237)
                          void jSUtils_CopyToClipboard(
                            accountForm.AccountForm_IdentificationInformation.AccountNumber,
                          ).catch(raiseFromHandler);
                        }}
                      />
                    }
                    input={
                      <OSInput
                        id="Input_UBTAccountNumber"
                        type="text"
                        enabled={false}
                        value={accountFormOriginal.AccountForm_IdentificationInformation.AccountNumber}
                      />
                    }
                  />
                </CustomContainer>
                <SectionSeparator id="$b18" />
                <CustomContainer id="PersonalInfo" options={SECTION_PADDING}>
                  <CustomText
                    id="PersonalInformation"
                    inText="Personal Information"
                    inTextOptions={SECTION_TITLE}
                    inPaddingOptions={PAD_BOTTOM_BASE}
                  />
                  <CustomText
                    id="PleaseNote"
                    inText="Please note that all changes may take up to 48 hours to show on your profile."
                    inTextOptions={NOTE_S}
                    inPaddingOptions={PAD_BOTTOM_BASE}
                  />
                  <CustomText
                    id="Username"
                    inText="Username"
                    inTextOptions={FIELD_LABEL}
                    inPaddingOptions={PAD_BOTTOM_S}
                  />
                  <OSInput
                    id="Input_Username"
                    type="text"
                    enabled={false}
                    value={personal.Username}
                    onChange={(v) => {
                      changeFields(setPersonal({ Username: v }));
                    }}
                  />
                  <CustomText
                    id="Email"
                    inText="Email"
                    inTextOptions={FIELD_LABEL}
                    inPaddingOptions={PAD_TOP_BASE_BOTTOM_S}
                  />
                  <OSInput
                    id="Input_Email"
                    type="email"
                    enabled
                    value={personal.Email}
                    onChange={(v) => {
                      changeFields(setPersonal({ Email: v }));
                    }}
                  />
                  <CustomText
                    id="PleaseNote2"
                    inText="Please note that if you are a householder, changes to your email address will also apply to your Global Media Stream login."
                    inTextOptions={NOTE_S}
                    inPaddingOptions={{ TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.Base }}
                  />
                  <Columns_Two
                    id="BirthDateandAge"
                    columnOptions={SWITCH_COLUMNS}
                    left={
                      <CustomText
                        id="BirthDateandAgeText"
                        inText="Display Month and Year of Birth, and Age"
                        inTextOptions={FIELD_LABEL}
                        inPaddingOptions={PAD_BOTTOM_S}
                        fitContent
                      />
                    }
                    right={
                      <OSSwitch
                        id="Switch1"
                        checked={personal.ShowLifeCycleDates}
                        onChange={(checked) => {
                          void onChange_ShowAgeSwitch(checked);
                        }}
                      />
                    }
                  />
                  <CustomText
                    id="BirthDateandAgeNote"
                    inText="Please note that changes may take up to 12 hours to show in the app."
                    inTextOptions={NOTE_XS}
                    inPaddingOptions={PAD_BOTTOM_BASE}
                  />
                </CustomContainer>
                {isHouseholder && (
                  <>
                    <SectionSeparator id="$b28" />
                    <NotCaptured name="Profile address section (householder only, Profile.mvc.js:1269-1716; Q1)">
                      <CustomText inText="Address Information" inTextOptions={SECTION_TITLE} />
                    </NotCaptured>
                  </>
                )}
                <SectionSeparator id="$b37" />
                <CustomContainer id="ContactInfo" options={SECTION_PADDING}>
                  <CustomText
                    id="ContactInformation"
                    inText="Contact Information"
                    inTextOptions={SECTION_TITLE}
                    inPaddingOptions={PAD_BOTTOM_BASE}
                  />
                  <CustomText
                    id="HomeNumber"
                    inText="Home Number"
                    inTextOptions={FIELD_LABEL}
                    inPaddingOptions={PAD_TOP_BASE_BOTTOM_S}
                  />
                  <OSInput
                    id="HomeNumber2"
                    type="tel"
                    enabled={isHouseholder}
                    value={contact.HomeNumber}
                    onChange={(v) => {
                      changeFields(setContact({ HomeNumber: v }));
                    }}
                  />
                  <CustomContainer id="MobileNumber_Container" options={SWITCH_ROW_PADDING}>
                    <Columns_Two
                      id="MobileNumber"
                      columnOptions={SWITCH_COLUMNS}
                      left={<CustomText id="MobileNumberText" inText="Mobile Number" inTextOptions={FIELD_LABEL} />}
                      right={
                        showContactSwitches && (
                          <OSSwitch
                            id="Switch2"
                            checked={contact.ShowMobileNumber}
                            onChange={(checked) => {
                              changeFields(setContact({ ShowMobileNumber: checked }));
                            }}
                          />
                        )
                      }
                    />
                  </CustomContainer>
                  <OSInput
                    id="Input_MobileNumber"
                    type="tel"
                    enabled
                    value={contact.MobileNumber}
                    onChange={(v) => {
                      changeFields(setContact({ MobileNumber: v }));
                    }}
                  />
                  {showContactSwitches && (
                    <CustomText
                      id="MobileNumber_Note"
                      inText={`${contact.ShowMobileNumber ? 'Display' : 'Hide'} mobile number on your profile.`}
                      inTextOptions={NOTE_XS}
                      inPaddingOptions={{ TopSizeId: UBT_Size.ExtraSmall }}
                    />
                  )}
                  <CustomContainer id="WorkNumberContainer" options={SWITCH_ROW_PADDING}>
                    <Columns_Two
                      id="WorkNumber"
                      columnOptions={SWITCH_COLUMNS}
                      left={<CustomText id="WorkNumberText" inText="Work Number" inTextOptions={FIELD_LABEL} />}
                      right={
                        showContactSwitches && (
                          <OSSwitch
                            id="Switch3"
                            checked={contact.ShowWorkNumber}
                            onChange={(checked) => {
                              changeFields(setContact({ ShowWorkNumber: checked }));
                            }}
                          />
                        )
                      }
                    />
                  </CustomContainer>
                  <OSInput
                    id="Input_WorkNumber"
                    type="tel"
                    enabled
                    value={contact.WorkNumber}
                    onChange={(v) => {
                      changeFields(setContact({ WorkNumber: v }));
                    }}
                  />
                  {showContactSwitches && (
                    <CustomText
                      id="WorkNumber_Note"
                      inText={`${contact.ShowWorkNumber ? 'Display' : 'Hide'} work number on your profile.`}
                      inTextOptions={NOTE_XS}
                      inPaddingOptions={{ TopSizeId: UBT_Size.ExtraSmall, BottomSizeId: UBT_Size.Base }}
                    />
                  )}
                </CustomContainer>
              </OSForm>
            </SkeletonSection>
            {mainContainerId !== '' && (
              <FixedFooter
                id="$b49"
                contentContainerId={mainContainerId}
                useBottomBar={false}
                expectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))"
              >
                <CustomContainer
                  id="$b50"
                  options={{
                    Background: { BackgroundColor: UBT_Color.Neutral0 },
                    PaddingSize: { GeneralSizeId: UBT_Size.Base },
                    ShadowId: SHADOW_EXTRA_SMALL_TOP,
                  }}
                >
                  <Columns_Two
                    id="$b51"
                    columnOptions={{ SpacingSize: UBT_Size.Small }}
                    left={
                      <Button
                        id="$b52"
                        isDisabled={isLoadingSubmit}
                        buttonOptions={{ UBT_ButtonTypeId: UBT_ButtonType.Secondary }}
                        buttonText="Close"
                        onButtonOnClick={navigateBack}
                      />
                    }
                    right={
                      <ButtonLoading id="$b53" isLoading={isLoadingSubmit}>
                        <Button
                          id="$b54"
                          isDisabled={!hasChanges || isLoadingSubmit}
                          buttonOptions={{ UBT_ButtonTypeId: UBT_ButtonType.Primary }}
                          buttonText="Save"
                          onButtonOnClick={() => {
                            void onClick_Save();
                          }}
                        />
                      </ButtonLoading>
                    }
                  />
                </CustomContainer>
              </FixedFooter>
            )}
          </>
        }
        placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b55" />}
      />
      <CacheControl_UserInfo_Wrapper id="$b56" onResult={onUserInfoResult} />
      {hasChanges && (
        <Dialog_Navigation
          id="$b59"
          // Event_OnBackNavigation_ConfirmDiscard (:3895-3930): PreventNavigation, so the dialog asks
          onEventOnBackNavigation={preventNavigation}
          placeholderHeader={<span data-expression="">Confirm</span>}
          placeholderBody={<span data-expression="">Are you sure you want to discard the changes?</span>}
        />
      )}
      {isFetched && (
        <Profile_HouseholdPreview
          id="$b60"
          householdId={user.Directory_UserCurrent_Member.HouseholderId}
          preview={preview}
          onOnInitialized={setPreviewBottomSheetId}
        />
      )}
      <Dialog_CustomChoice
        id="AgeConfirmation_PopUp"
        scope="b61"
        placeholderBody={
          <span data-expression="">
            {personal.ShowLifeCycleDates
              ? 'By selecting this option, your Month and Date of Birth, and your Age will display in Directory. You will also be able to see the Birth Date and Age information for other Members who have selected this option.'
              : 'By deselecting this option, your Month and Date of Birth, and your Age will be hidden so will not display in Directory. You will also not be able to see the Birth Date and Age information for other Members.'}
          </span>
        }
        placeholderButtonLabel="Update Preference"
        placeholderDismissButtonLabe="Cancel"
      />
    </ValidationServiceProvider>
  );
}
