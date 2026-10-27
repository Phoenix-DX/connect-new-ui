import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { HomeLayout } from '@/components/layout/HomeLayout';
import { ValidationServiceProvider } from '@/components/ui/os/OSValidation';
import { HouseholdDetailsContainer, useHouseholdDetailsFlags } from '@/containers';
import { useNavigateBack } from '@/platform/navigation';
import { preventNavigation } from '@/lib/navigationEvent';
import { UserInfoCache } from '@/platform/session/UserInfoCache';
import { ChoiceDialog } from '@/components/ui/Dialog';
import { NavigationDialog } from '@/components/ui/Dialog';
import { SectionSeparator } from '@/components/ui/SectionSeparator';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { UBT_Color, UBT_FontSize, UBT_FontWeight } from '@/lib/ubtConnectLibrary/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { CacheControl_AllLocalities, CacheControl_AllSubdivisions } from './components/AddressCacheControls';
import { AddressInformationSection } from './components/AddressInformationSection';
import { ProfileDetailsForm } from './components/ProfileDetailsForm';
import { ProfileFooter } from './components/ProfileFooter';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileHouseholdPreview } from './components/ProfileHouseholdPreview';
import { textOptions } from './components/formOptions';
import { useProfile } from './hooks/useProfile';
import { ICON_ARROW_LEFT_ALT } from './staticEntities';

/** @origin UBTConnect.App_Profile.Profile
    The Profile route ("Edit Account"): the home layout with the back title, and as content the header, the details
    form in a skeleton section and the fixed footer with Close and Save. Outside the layout: CacheControl_UserInfo_Wrapper,
    whose result fills the form, CacheControl_AllLocalities and CacheControl_AllSubdivisions (householder only),
    Dialog_Navigation (it asks to discard the changes), the household preview sheet and the Dialog_CustomChoice of the
    age switch. The flows are in useProfile. */
export default function Profile() {
  const navigateBack = useNavigateBack();
  const householdDetailsFlags = useHouseholdDetailsFlags();
  const {
    validation,
    state,
    isFetched,
    showContactSwitches,
    preview,
    onUserInformation,
    onMainContainerReady,
    onPreviewSheetInitialized,
    onViewPreview,
    onCopyAccountNumber,
    onPersonalChange,
    onContactChange,
    onShowAgeChange,
    onAddressItemChange,
    onLocalityChange,
    onSubdivisionChange,
    onAllLocalities,
    onAllSubdivisions,
    onCacheControlError,
    onSave,
  } = useProfile();
  const { user, accountForm } = state;

  return (
    <ValidationServiceProvider service={validation}>
      <HomeLayout
        id="$b1"
        extendedClass="ubt-profile-screen"
        sVGHeight="calc(200px - var(--header-size))"
        contentBackgroundColor={UBT_Color.Neutral0}
        addSearchBar={false}
        onOnReadyEvent={onMainContainerReady}
        placeholderHeaderTitle={
          <IconText
            id="$b2"
            text="Edit Account"
            textOptions={textOptions(UBT_Color.Neutral0, UBT_FontSize.Small, UBT_FontWeight.Regular)}
            onClicked={navigateBack}
          >
            <Icon id="$b3" inIconId={ICON_ARROW_LEFT_ALT} inColorId={UBT_Color.Neutral0} />
          </IconText>
        }
        content={
          <>
            <Skeleton id="Content" isLoading={!isFetched}>
              <ProfileHeader
                memberId={user?.MemberID ?? '0'}
                photoUrl={user?.Directory_UserCurrent_Member.Photo.SignedURL ?? ''}
                fullName={user?.FullName ?? ''}
                onViewPreview={onViewPreview}
              />
              <SectionSeparator id="$b11" />
              <ProfileDetailsForm
                accountForm={accountForm}
                accountFormOriginal={state.accountFormOriginal}
                isHouseholder={state.isHouseholder}
                showContactSwitches={showContactSwitches}
                addressSection={
                  <AddressInformationSection
                    address={accountForm.AccountForm_AddressInformation}
                    isLoading={
                      !state.localCacheControlAllSubdivisions.isFetched ||
                      !state.localCacheControlAllLocalities.isFetched
                    }
                    localityList={state.localCacheControlAllLocalities.localityList}
                    subdivisionFilteredList={state.subdivisionFilteredList}
                    onAddressItemChange={onAddressItemChange}
                    onLocalityChange={onLocalityChange}
                    onSubdivisionChange={onSubdivisionChange}
                  />
                }
                onCopyAccountNumber={onCopyAccountNumber}
                onPersonalChange={onPersonalChange}
                onContactChange={onContactChange}
                onShowAgeChange={onShowAgeChange}
              />
            </Skeleton>
            {state.mainContainerId !== '' && (
              <ProfileFooter
                contentContainerId={state.mainContainerId}
                isLoadingSubmit={state.isLoadingSubmit}
                hasChanges={state.hasChanges}
                onClose={navigateBack}
                onSave={onSave}
              />
            )}
          </>
        }
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b55" />}
      />
      <UserInfoCache id="$b56" onResult={onUserInformation} />
      {state.isHouseholder && (
        <>
          <CacheControl_AllLocalities id="$b57" onResult={onAllLocalities} onError={onCacheControlError} />
          <CacheControl_AllSubdivisions id="$b58" onResult={onAllSubdivisions} onError={onCacheControlError} />
        </>
      )}
      {state.hasChanges && (
        <NavigationDialog
          variant="connect"
          id="$b59"
          // Event_OnBackNavigation_ConfirmDiscard: PreventNavigation, so the dialog asks.
          onNavigation={preventNavigation}
          header={<span data-expression="">Confirm</span>}
          body={<span data-expression="">Are you sure you want to discard the changes?</span>}
        />
      )}
      {user !== null && (
        <ProfileHouseholdPreview
          id="$b60"
          onOnInitialized={onPreviewSheetInitialized}
          renderHousehold={(id) => (
            <HouseholdDetailsContainer
              id={id}
              isEnabled={false}
              source={{ kind: 'preview', householdId: user.Directory_UserCurrent_Member.HouseholderId, preview }}
              flags={householdDetailsFlags}
              showKebabMenu
            />
          )}
        />
      )}
      <ChoiceDialog
        id="AgeConfirmation_PopUp"
        scope="b61"
        body={
          <span data-expression="">
            {accountForm.AccountForm_PersonalInformation.ShowLifeCycleDates
              ? 'By selecting this option, your Month and Date of Birth, and your Age will display in Directory. You will also be able to see the Birth Date and Age information for other Members who have selected this option.'
              : 'By deselecting this option, your Month and Date of Birth, and your Age will be hidden so will not display in Directory. You will also not be able to see the Birth Date and Age information for other Members.'}
          </span>
        }
        confirmLabel="Update Preference"
        dismissLabel="Cancel"
      />
    </ValidationServiceProvider>
  );
}
