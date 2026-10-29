import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { fetchSurveyHelpers, type HostSurveyHelper, type HostSurveyHelperMember } from '@/api/event';
import { FooterWithActions } from '@/components/orbit/FooterWithActions';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { BottomSheet } from '@/components/ui/BottomSheet';
import { InputWithIcon } from '@/components/ui/InputWithIcon';
import { bottomSheetClose, bottomSheetOpen } from '@/components/ui/lib/actions';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSDropdownCustom } from '@/components/ui/os/OSDropdownCustom';
import { OSList } from '@/components/ui/os/OSList';
import { DEFAULT_WIDGET_RECORD, type WidgetValidationRecord } from '@/components/ui/os/OSValidation';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';
import { showFeedbackMessage } from '@/platform/feedback';
import type { LocalHelperRole, LocalHelperStatus } from '@/platform/storage/localEntities';
import { blurInput, createValidationMessage } from './actions';
import { Card_MemberInformation_Survey } from './Card_MemberInformation_Survey';
import {
  addSelectedHelpers,
  helpersToSave,
  memberPillName,
  mergeFoundHelpers,
  scrollInputIntoView,
} from './hostSurveyHelpers';
import { HostSurvey_Item } from './HostSurvey_Item';
import { OrbitNoResults } from '@/components/orbit/OrbitNoResults';

export interface HostSurvey_AddHelperProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** In_HelperRoles: the roles of the dropdown (the parent's FilteredHelperRoles). */
  inHelperRoles: readonly LocalHelperRole[];
  /** In_EventId (Long Integer as text). */
  inEventId: string;
  /** In_TrySave: OnParametersChanged saves while it is True. */
  inTrySave: boolean;
  /** In_HelperStatus: the Pending status of the saved helpers. */
  inHelperStatus: readonly LocalHelperStatus[];
  /** In_AlreadyAddedHelpers: the MemberIds of the helpers of the survey (sent with the search). */
  inAlreadyAddedHelpers: readonly string[];
  /** Event Save_Failed. */
  onSaveFailed: () => void;
  /** Event Save_Successful(HelperItemInfo). */
  onSaveSuccessful: (helperItemInfo: HostSurveyHelper[]) => void;
  /** Event Click_Delete. */
  onClickDelete: () => void;
}

/** The block variables of HostSurvey_AddHelper (AH model) and the Valid record of Dropdown_HelperRoles. */
interface AddHelperState {
  /** Helpers (HostSurvey_AddHelperRec): the members picked and the role. */
  helpers: { Helpers: HostSurveyHelper[]; Role: string };
  searchTerm: string;
  surveyHelpersData: HostSurveyHelperMember[];
  isFetchingData: boolean;
  isNotValidInput: boolean;
  lastSearchedTerm: string;
  isTyping: boolean;
  maxHelpers: number;
  pageNumber: number;
  isNewSearch: boolean;
  /** GetSurveyHelpers.IsDataFetched (the data action is On Demand). */
  isDataFetched: boolean;
  dropdown: WidgetValidationRecord;
}

const INITIAL: AddHelperState = {
  helpers: { Helpers: [], Role: '' },
  searchTerm: '',
  surveyHelpersData: [],
  isFetchingData: false,
  isNotValidInput: false,
  lastSearchedTerm: '',
  isTyping: false,
  maxHelpers: 10,
  pageNumber: 1,
  isNewSearch: true,
  isDataFetched: false,
  dropdown: DEFAULT_WIDGET_RECORD,
};

/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper
    The "add helpers" form of the helper step (AH = HostSurvey_AddHelper.mvc.js).
    View: HostSurvey_Item ($b1, title "Helper", Delete) with the label "Search Helpers" + asterisk, Div_SearchMember
    (`orbit-host-survey-helper-search`, + `-not-valid` while IsNotValidInput; a click opens BottomSheet_Helpers) with
    "Search member" or the pills of the picked members (a click on Icon_Delete removes one), the "Helper is required."
    message, the mandatory "Role" label and Dropdown_HelperRoles; then BottomSheet_Helpers ($b2, rounded, handler,
    `orbit-host-survey-helper-sheet`): top bar "Search Helpers" + Input_SearchTerm (Search, max 50) in InputWithIcon
    ($b3); content: "Top <n> results", the members (Card_MemberInformation_Survey $b4, `background-neutral-2` when
    selected; a click toggles IsSelected), the skeleton ($b5) while fetching, "Load more results" when the list holds
    PageNumber × MaxHelpers rows, else "No more results found. Try a different search term.", the footer "Add" ($b6)
    while not typing; no rows → NoResults ($b7) once a search ran; a new search that fetches → the skeleton ($b8).
    Controller: Enter in the search field blurs it and runs RefreshSurveyHelpersData(True), or shows the "already on
    screen" message for the same term; OnToggle of the sheet focuses or blurs the field and clears the search;
    OnClick_AddHelpers appends the selected members and closes the sheet; OnParametersChanged with In_TrySave runs
    OnHandle_Save (no role → "Role is required."; no helper → IsNotValidInput; then Save_Failed, or Save_Successful
    with the role, the Pending status and IsEdit False on each helper). */
export function HostSurvey_AddHelper({
  id,
  inHelperRoles,
  inEventId,
  inTrySave,
  inHelperStatus,
  inAlreadyAddedHelpers,
  onSaveFailed,
  onSaveSuccessful,
  onClickDelete,
}: HostSurvey_AddHelperProps) {
  const scope = id.replace(/\$(b\d+)$/, '$1');
  const dropdownId = `${scope}-Dropdown_HelperRoles`;
  const inputId = `${scope}-Input_SearchTerm`;
  const sheetId = `${scope}-BottomSheet_Helpers`;

  const [s, setS] = useState<AddHelperState>(INITIAL);
  // OutSystems assigns a variable at once: the flows read `latest`, the view renders `s`.
  const latest = useRef(s);
  const update = (patch: Partial<AddHelperState>) => {
    latest.current = { ...latest.current, ...patch };
    setS(latest.current);
  };
  const alive = useRef(true);
  useEffect(
    () => () => {
      alive.current = false;
    },
    [],
  );
  const inputs = useRef({
    inEventId,
    inTrySave,
    inHelperStatus,
    inAlreadyAddedHelpers,
    onSaveFailed,
    onSaveSuccessful,
  });
  useLayoutEffect(() => {
    inputs.current = { inEventId, inTrySave, inHelperStatus, inAlreadyAddedHelpers, onSaveFailed, onSaveSuccessful };
  });

  /** RefreshSurveyHelpersData(In_IsNewSearch), then OnAfterFetch_GetSurveyHelpers. */
  const refreshSurveyHelpersData = async (isNewSearch: boolean) => {
    update({
      isNewSearch,
      pageNumber: isNewSearch ? 1 : latest.current.pageNumber,
      isFetchingData: true,
      lastSearchedTerm: '',
    });
    const v = latest.current;
    let found: HostSurveyHelperMember[];
    try {
      found = await fetchSurveyHelpers({
        SearchTerm: v.searchTerm,
        IsFetchingData: v.isFetchingData,
        IsNotValidInput: v.isNotValidInput,
        LastSearchedTerm: v.lastSearchedTerm,
        IsTyping: v.isTyping,
        MaxHelpers: v.maxHelpers,
        PageNumber: v.pageNumber,
        IsNewSearch: v.isNewSearch,
        In_TrySave: inputs.current.inTrySave,
        In_EventId: inputs.current.inEventId,
        In_AlreadyAddedHelpers: inputs.current.inAlreadyAddedHelpers,
      });
    } catch {
      // The data action fails: no OnAfterFetch, and IsFetchingData stays True (AH RefreshSurveyHelpersData).
      return;
    }
    if (!alive.current) return;
    const after = latest.current;
    update({
      isDataFetched: true,
      lastSearchedTerm: after.searchTerm,
      surveyHelpersData: mergeFoundHelpers(after.surveyHelpersData, found, after.helpers.Helpers, after.isNewSearch),
    });
    update({ isFetchingData: false });
  };

  /** OnHandle_Save. */
  const onHandleSave = () => {
    const v = latest.current;
    if (v.helpers.Role === '') {
      update({ dropdown: { validAttr: false, validationMessageAttr: createValidationMessage('Role', false) } });
    }
    if (v.helpers.Helpers.length === 0) update({ isNotValidInput: true });
    const now = latest.current;
    if (!now.dropdown.validAttr || now.isNotValidInput) {
      inputs.current.onSaveFailed();
      return;
    }
    const saved = helpersToSave(now.helpers.Helpers, now.helpers.Role, inputs.current.inHelperStatus);
    update({ helpers: { ...now.helpers, Helpers: saved } });
    inputs.current.onSaveSuccessful(saved);
  };

  // OnParametersChanged: In_TrySave → OnHandle_Save (never after the first render).
  const parametersKey = JSON.stringify([inHelperRoles, inEventId, inTrySave, inHelperStatus, inAlreadyAddedHelpers]);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (inputs.current.inTrySave) onHandleSave();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- OnParametersChanged runs on a change of the inputs only
  }, [parametersKey]);

  /** OnKeyup_Input_SearchTerm(In_InputId). */
  const onKeyupInputSearchTerm = (key: string) => {
    if (key !== 'Enter') return;
    blurInput(inputId);
    const v = latest.current;
    if (v.searchTerm === v.lastSearchedTerm) {
      showFeedbackMessage(
        "Results for this search are already on screen, check 'Load more results' if available for extra results.",
        0,
      );
      // ScrollToBottomJS.
      window.setTimeout(() => {
        const scrollItem = document.querySelector('.osui-bottom-sheet__content');
        scrollItem?.scrollTo({ top: (scrollItem as HTMLElement).offsetHeight, behavior: 'smooth' });
      }, 250);
      return;
    }
    // RefreshDataJS: $actions.RefreshSurveyHelpersData(true).
    void refreshSurveyHelpersData(true);
  };

  /** OnToggle_BottomSheet_Helpers(IsOpen). */
  const onToggleBottomSheetHelpers = (isOpen: boolean) => {
    if (isOpen) {
      // SetCorrectHeightJS.
      const sheet = document.getElementById(sheetId);
      const header = sheet?.querySelector<HTMLElement>('.osui-bottom-sheet__header');
      const content = sheet?.querySelector<HTMLElement>('.osui-bottom-sheet__content');
      if (header && content) content.style.maxHeight = `calc(100vh - ${String(header.offsetHeight)}px)`;
      // FocusInputJS.
      document.getElementById(inputId)?.focus();
    } else if (document.getElementById(inputId)) {
      // BlurInputJS.
      blurInput(inputId);
    }
    update({ surveyHelpersData: [], searchTerm: '', lastSearchedTerm: '', pageNumber: 1 });
  };

  /** OnClick_AddHelpers. */
  const onClickAddHelpers = () => {
    const next = addSelectedHelpers(latest.current.helpers.Helpers, latest.current.surveyHelpersData);
    if (next === undefined) return;
    update({ helpers: { ...latest.current.helpers, Helpers: next }, isNotValidInput: false });
    bottomSheetClose(sheetId);
  };

  /** OnClick_DeleteHelper(In_CurrentRowNumber). */
  const onClickDeleteHelper = (row: number) => {
    const next = latest.current.helpers.Helpers.filter((_h, i) => i !== row);
    update({ helpers: { ...latest.current.helpers, Helpers: next }, isNotValidInput: next.length === 0 });
  };

  /** OnClick_HelperMember(Position). */
  const onClickHelperMember = (position: number) => {
    update({
      surveyHelpersData: latest.current.surveyHelpersData.map((m, i) =>
        i === position ? { ...m, IsSelected: !m.IsSelected } : m,
      ),
    });
  };

  const picked = s.helpers.Helpers;
  const data = s.surveyHelpersData;

  const sheetContent = !(s.isNewSearch ? !s.isFetchingData : true) ? (
    <OrbitSkeleton id={`${scope}-$b8`} inSkeletonLoadingId={OrbitSkeletonLoading.HostSurveyHelpers} />
  ) : data.length > 0 ? (
    <>
      <div className="text-align-left bold padding-x-m padding-top-m" data-container="">
        <span data-expression="">{`Top ${String(data.length)} results`}</span>
      </div>
      <div className="margin-top-base margin-bottom-l" data-container="">
        <OSList
          className="list list-group"
          animateItems
          source={data}
          keyOf={(m: HostSurveyHelperMember) => m.MemberId}
        >
          {(m, i) => (
            <Card_MemberInformation_Survey
              id={`${scope}-l3_${String(i)}-$b4`}
              inExtendedClass={m.IsSelected ? 'background-neutral-2' : ''}
              inMemberInformation={{
                MemberId: m.MemberId,
                Locality: m.LocalityName,
                CountryCode: m.CountryName,
                FirstName: m.FirstName,
                LastName: m.LastName,
              }}
              onClickedMember={() => {
                onClickHelperMember(i);
              }}
            />
          )}
        </OSList>
        {s.isFetchingData ? (
          <OrbitSkeleton id={`${scope}-$b5`} inSkeletonLoadingId={OrbitSkeletonLoading.HostSurveyHelpers} />
        ) : data.length === s.pageNumber * s.maxHelpers ? (
          <div
            className="orbit-host-survey-load-more-button"
            data-container=""
            style={{ color: 'var(--orbit-primary-7)' }}
            onClick={() => {
              // OnClick_LoadMoreHelpers.
              update({ pageNumber: latest.current.pageNumber + 1 });
              void refreshSurveyHelpersData(false);
            }}
          >
            Load more results
          </div>
        ) : (
          <div
            className="orbit-host-survey-load-more-button"
            data-container=""
            style={{ color: 'var(--color-neutral-7)' }}
          >
            No more results found. Try a different search term.
          </div>
        )}
      </div>
      {!s.isTyping && (
        <div data-container="" style={{ position: 'sticky', bottom: 0 }}>
          <FooterWithActions
            id={`${scope}-$b6`}
            inHasTopShadow
            inHasSecondaryButton={false}
            inIsSmallButtons={false}
            onClickPrimaryButton={onClickAddHelpers}
            placeholderPrimary={<span data-expression="">Add</span>}
          />
        </div>
      )}
    </>
  ) : s.isDataFetched && s.lastSearchedTerm !== '' ? (
    <OrbitNoResults
      id={`${scope}-$b7`}
      placeholderTitle={
        <span data-expression="">
          {s.lastSearchedTerm !== '' ? `No results for '${s.lastSearchedTerm}'.` : 'No results.'}
        </span>
      }
      placeholderMessage="Make sure that all words are spelled correctly, or refine your search terms."
    />
  ) : null;

  return (
    <OSBlock name="Orbit_Blocks.HostSurvey_AddHelper" id={id}>
      <HostSurvey_Item
        id={`${scope}-$b1`}
        inTitle="Helper"
        inHasEdit={false}
        inHasDelete
        inHasPlaceholder={false}
        onClickDelete={onClickDelete}
        placeholderContent={
          <>
            <div data-container="">
              <label data-label="">
                <span data-expression="">Search Helpers</span>
                <span className="orbit-host-survey-helper-asterisk" data-expression="">
                  *
                </span>
              </label>
            </div>
            <div data-container="">
              <div
                className={`orbit-host-survey-helper-search${s.isNotValidInput ? ' orbit-host-survey-helper-search-not-valid' : ''}`}
                data-container=""
                id={`${scope}-Div_SearchMember`}
                style={{ alignItems: picked.length === 0 ? 'center' : 'flex-start' }}
                onClick={() => {
                  // OnClick_SearchHelperInput.
                  bottomSheetOpen(sheetId);
                }}
              >
                <i className="icon font-size-1-5em text-neutral-7 fa fa-search fa-1x" data-icon="" />
                {picked.length === 0 ? (
                  <span className="text-neutral-6 margin-left-base">Search member</span>
                ) : (
                  <div data-container="">
                    <OSList
                      className="list list-group"
                      animateItems
                      disableVirtualization
                      source={picked}
                      keyOf={(h: HostSurveyHelper) => h.MemberId}
                    >
                      {(h, i) => (
                        <div
                          className="orbit-host-survey-helper-search-pill"
                          data-container=""
                          id={`${scope}-l1_${String(i)}-Div_MemberPill`}
                        >
                          <span className="font-size-xs line-height-s" data-expression="">
                            {memberPillName(h)}
                          </span>
                          <i
                            className="icon orbit-icon-circle-cross font-size-s line-height-s fa fa-flag fa-1x"
                            data-icon=""
                            id={`${scope}-l1_${String(i)}-Icon_Delete`}
                            onClick={(e) => {
                              // AddClickEventJS: the click stops here and runs OnClick_DeleteHelper(CurrentRowNumber).
                              e.stopPropagation();
                              onClickDeleteHelper(i);
                            }}
                          />
                        </div>
                      )}
                    </OSList>
                  </div>
                )}
              </div>
              {s.isNotValidInput && (
                <span className="validation-message" data-expression="">
                  {createValidationMessage('Helper', false)}
                </span>
              )}
            </div>
            <div data-container="">
              <label className="mandatory" data-label="" htmlFor={dropdownId}>
                Role
              </label>
            </div>
            <div data-container="">
              <OSDropdownCustom
                id={dropdownId}
                style="dropdown"
                emptyValue="Select role"
                mandatory
                list={inHelperRoles}
                getValue={(role) => role.JSON_Name}
                renderRow={(role) => <span data-expression="">{role.Label}</span>}
                value={s.helpers.Role}
                onValueChange={(role) => {
                  update({ helpers: { ...latest.current.helpers, Role: role } });
                }}
                onChange={() => {
                  // OnChange_HelperRoles.
                  update({
                    dropdown:
                      latest.current.helpers.Role !== ''
                        ? { validAttr: true, validationMessageAttr: '' }
                        : { validAttr: false, validationMessageAttr: createValidationMessage('Helper role', false) },
                  });
                }}
                onFocus={() => {
                  scrollInputIntoView(dropdownId);
                }}
                record={s.dropdown}
              />
            </div>
            <BottomSheet
              id={sheetId}
              shape="rounded"
              extendedClass="orbit-host-survey-helper-sheet"
              showHandler
              onOnToggle={(_bottomSheetId, isOpen) => {
                onToggleBottomSheetHelpers(isOpen);
              }}
              topBar={
                <>
                  <div className="text-align-left" data-container="">
                    <label className="mandatory" data-label="" htmlFor={inputId}>
                      Search Helpers
                    </label>
                  </div>
                  <div data-container="">
                    <InputWithIcon
                      id={`${scope}-$b3`}
                      icon={<i className="icon font-size-1-5em fa fa-search fa-1x" data-icon="" />}
                      input={
                        <span className="input-search">
                          <input
                            aria-required="true"
                            className="form-control"
                            data-input=""
                            id={inputId}
                            maxLength={50}
                            placeholder="Search member"
                            required
                            type="search"
                            value={s.searchTerm}
                            onBlur={() => {
                              update({ isTyping: false });
                            }}
                            onChange={(e) => {
                              update({ searchTerm: e.currentTarget.value });
                            }}
                            onFocus={() => {
                              update({ isTyping: true });
                            }}
                            onKeyUp={(e) => {
                              onKeyupInputSearchTerm(e.key);
                            }}
                          />
                        </span>
                      }
                    />
                  </div>
                </>
              }
              content={sheetContent}
            />
          </>
        }
      />
    </OSBlock>
  );
}
