import { useMemo, useReducer } from 'react';
import { putCacheableObject } from '@/api/client/cache';
import { useCountryInfoQuery } from '@/api/country';
import { editMemberDetails, memberCache } from '@/api/member';
import { useScreenValidationService, type ValidationService } from '@/components/ui/os/OSValidation';
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
import { confirmAction } from '@/platform/feedback/dialogs';
import { clientVar } from '@/platform/session/session';
import { getUserInformation } from '@/platform/session/userInfo';
import { bottomSheetOpen } from '@/components/ui/lib/actions';
import type { Directory_UserCurrent } from '@/platform/session/UserInfoCache/types';
import type { HouseholdPreviewStructure } from '@/lib/ubtConnect/structures';
import { jSUtils_CopyToClipboard } from '@/lib/jsUtils';
import {
  action_FormatAddress,
  initialProfileState,
  isRequireRequestCreation,
  profileReducer,
  withContact,
  withPersonal,
  type AccountForm,
  type ProfileState,
} from './profileState';

/** The flows of the Profile screen: the result of CacheControl_UserInfo_Wrapper, OnChange_Fields, the age switch,
    OnClick_ViewPreview, the copy of the account number and OnClick_Save. The screen has no OnReady; GetCountryInfo
    runs once the user information has come.
    @origin UBTConnect.App_Profile.Profile */

type PersonalPatch = Partial<AccountForm['AccountForm_PersonalInformation']>;
type ContactPatch = Partial<AccountForm['AccountForm_ContactInformation']>;

interface ProfileFlows {
  /** The screen's validationServiceInstance (ScreenController_ValidateWidgets, DetailsForm.Valid). */
  validation: ValidationService;
  /** The screen variables. */
  state: ProfileState;
  /** LocalCacheControl_UserInformation.isFetched: the user information has come. */
  isFetched: boolean;
  /** Switch2 / Switch3 and their notes show for the householder and the spouse. */
  showContactSwitches: boolean;
  /** The Preview input of the household preview. */
  preview: HouseholdPreviewStructure;
  /** CacheControl_UserInfo_WrapperResult. */
  onUserInformation: (userInformation: Directory_UserCurrent) => void;
  /** OnReadyEvent of the layout. */
  onMainContainerReady: (id: string) => void;
  /** OnInitialized of Profile_HouseholdPreview. */
  onPreviewSheetInitialized: (id: string) => void;
  /** OnClick_ViewPreview. */
  onViewPreview: () => void;
  /** OnClick_UBTAccountNumber: copies the account number. */
  onCopyAccountNumber: () => void;
  /** An input of the personal information changed: OnChange_Fields. */
  onPersonalChange: (patch: PersonalPatch) => void;
  /** An input or a switch of the contact information changed: OnChange_Fields. */
  onContactChange: (patch: ContactPatch) => void;
  /** OnChange_ShowAgeSwitch. */
  onShowAgeChange: (checked: boolean) => void;
  /** OnClick_Save. */
  onSave: () => void;
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

export function useProfile(): ProfileFlows {
  const validation = useScreenValidationService();
  // OnInitialize.
  const [state, dispatch] = useReducer(profileReducer, undefined, initialProfileState);
  const { user, accountForm, accountFormOriginal, accountFormViewPreview, isHouseholder, isSpouse } = state;
  const isFetched = user !== null;
  // DataActionGetCountryInfo: refreshed once the user information has come.
  const countryInfo = useCountryInfoQuery(state.currentCountryCode, isFetched);
  // OnAfterFetch_GetCountryInfo and OnChange_Fields run Action_FormatAddress.
  const formattedAddress = action_FormatAddress(countryInfo.data?.addressFormat ?? '', accountForm);

  // OnChange_Fields: HasChanges = AccountForm <> AccountFormOriginal.
  const changeFields = (next: AccountForm, original: AccountForm = accountFormOriginal) => {
    dispatch({ type: 'fieldsChanged', accountForm: next, original });
  };

  /* CacheControl_UserInfo_WrapperResult. Action_RefreshSubdivionList only acts on the householder address section
     (Q1: not built); the change of isFetched then refreshes GetCountryInfo. */
  const onUserInformation = (userInformation: Directory_UserCurrent) => {
    dispatch({ type: 'userInformationFetched', user: userInformation, current: accountForm });
  };

  const onViewPreview = () => {
    dispatch({ type: 'viewPreviewAssigned', accountForm });
    bottomSheetOpen(state.previewBottomSheetId);
  };

  const onCopyAccountNumber = () => {
    void jSUtils_CopyToClipboard(accountForm.AccountForm_IdentificationInformation.AccountNumber).catch(
      raiseFromHandler,
    );
  };

  // The switch already changed the variable; Cancel turns it back.
  const showAgeChanged = async (checked: boolean) => {
    const personal = accountForm.AccountForm_PersonalInformation;
    const next = withPersonal(accountForm, { ShowLifeCycleDates: checked });
    dispatch({ type: 'accountFormAssigned', accountForm: next });
    const isConfirmed = await confirmAction('AgeConfirmation_PopUp');
    if (isConfirmed) changeFields(next);
    else
      dispatch({
        type: 'accountFormAssigned',
        accountForm: { ...next, AccountForm_PersonalInformation: { ...personal, ShowLifeCycleDates: !checked } },
      });
  };

  const save = async () => {
    dispatch({ type: 'submitStarted' });
    /* ScreenController_ValidateWidgets (UBTJavaScriptUtils: validationServiceInstance.validate(), every widget of the
       screen), then isValid = DetailsForm.Valid (CR-Profile-2). For the householder, DropdownClearValidation /
       DropdownNotValid and the required address items belong to the address section, which is not built (Q1). */
    validation.validate();
    const isValid = validation.isValid('DetailsForm');
    if (!isValid) {
      dispatch({ type: 'submitInvalid' });
      return;
    }
    try {
      const form = accountForm;
      await editMemberDetails(form, isRequireRequestCreation(form, accountFormOriginal));
      dispatch({ type: 'submitSaved', accountForm: form });
      // ChangedVisibilityPreferences: AccountFormOriginal = AccountForm was just assigned, so the condition holds.
      const info = await getUserInformation();
      const current = info.Directory_UserCurrent;
      putCacheableObject(memberCache.userInfo(clientVar.uniqueCacheKey.get()), {
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
      if (!isInstanceOf(error, NotRegisteredException)) dispatch({ type: 'submitFailed' });
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

  return {
    validation,
    state,
    isFetched,
    showContactSwitches: isHouseholder || isSpouse,
    preview,
    onUserInformation,
    onMainContainerReady: (id) => {
      dispatch({ type: 'mainContainerReady', id });
    },
    onPreviewSheetInitialized: (id) => {
      dispatch({ type: 'previewSheetInitialized', id });
    },
    onViewPreview,
    onCopyAccountNumber,
    onPersonalChange: (patch) => {
      changeFields(withPersonal(accountForm, patch));
    },
    onContactChange: (patch) => {
      changeFields(withContact(accountForm, patch));
    },
    onShowAgeChange: (checked) => {
      void showAgeChanged(checked);
    },
    onSave: () => {
      void save();
    },
  };
}
