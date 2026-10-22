// @os-block Connect2_LegacyShared.Share_UI.ProfileList
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { NotCaptured } from '@/app/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { FreeSubscriptionActionDialog } from '../../../shared/Connect2_LegacyShared/FreeSubscriptionActionDialog';
import { ResultListType } from '../../../shared/Connect2_LegacyShared/lib/staticEntities';
import { Result_Item_Image } from '../../../shared/Connect2_LegacyShared/Result_Item_Image';
import { InputWithIcon } from '../../../shared/osui/InputWithIcon';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { shareObject, useGetAvailableUsers, type AvailableUsersFetch } from '../api';
import type { AvailableUsers, AvailableUsersRequest, ShareProfile } from '../types';
import { HighlightSearch } from './HighlightSearch';
import { ListBlankSlate } from './ListBlankSlate';

export interface ProfileListProps {
  /** OutSystems instance id of the block (`b1-$b8`). */
  id: string;
  shareObjectId: string;
  shareObjectTypeId: string;
  /** Event SubscriptionDenied (ShareObject answered IsAllowed False). */
  onSubscriptionDenied: () => Promise<void>;
}

/** ProfileList variables (model :32-61); GetAvailableUsers output flags kept as OutSystems has them. */
interface ProfileListVariables {
  ShareProfiles: ShareProfile[];
  SearchFilter: string;
  SharedProfileIds: string[];
  HasSearched: boolean;
  NoResultsFoundMessage: string;
  /** GetAvailableUsers.IsDataFetched: True after the first successful fetch, kept during later refreshes. */
  fetched: AvailableUsers | null;
}

/** MaxRecords default (model :41-43). */
const MAX_RECORDS = 50;

/** Share_UI.ProfileList (Connect2_LegacyShared.Share_UI.ProfileList.mvc.js: model :1-124, view :182-640, controller
    :645-1176): the "Share with..." search, the GetAvailableUsers label, the list of profiles with their share icon,
    blank slates for no result / error / searching, and the (closed) FreeSubscriptionActionDialog. */
export function ProfileList({ id, shareObjectId, shareObjectTypeId, onSubscriptionDenied }: ProfileListProps) {
  const scope = id.replace('$', '');
  const [vars, setVars] = useState<ProfileListVariables>({
    ShareProfiles: [],
    SearchFilter: '',
    SharedProfileIds: [],
    HasSearched: false,
    NoResultsFoundMessage: '',
    fetched: null,
  });
  /* The latest variables for async continuations; every change goes through assign. */
  const varsRef = useRef(vars);
  const assign = (patch: Partial<ProfileListVariables>) => {
    varsRef.current = { ...varsRef.current, ...patch };
    setVars(varsRef.current);
  };

  /* The data action is sent with the block's screen variables at the time of the fetch. */
  const request = (v: ProfileListVariables): AvailableUsersRequest => ({
    SearchFilter: v.SearchFilter,
    ShareObjectId: shareObjectId,
    ShareObjectTypeId: shareObjectTypeId,
    MaxRecords: MAX_RECORDS,
    HasSearched: v.HasSearched,
  });
  const seq = useRef(0);
  const waiters = useRef(new Map<number, () => void>());
  const [fetchReq, setFetchReq] = useState<AvailableUsersFetch>(() => ({ seq: 0, vars: request(vars) }));
  const query = useGetAvailableUsers(fetchReq);

  /** Refresh Query GetAvailableUsers: resolves once the fetch (and OnAfterFetch) ended. */
  const refreshGetAvailableUsers = () =>
    new Promise<void>((resolve) => {
      const next = ++seq.current;
      waiters.current.set(next, resolve);
      setFetchReq({ seq: next, vars: request(varsRef.current) });
    });

  /* GetAvailableUsersOnAfterFetch (controller :990-1077), after each successful fetch. */
  const settled = useRef(-1);
  useEffect(() => {
    if (query.isPlaceholderData || query.isFetching || settled.current === fetchReq.seq) return;
    if (query.isSuccess) {
      settled.current = fetchReq.seq;
      const v = varsRef.current;
      // SharedProfileIds += ShareProfiles with IsShared (ListFilter + ListAppendAll), then ShareProfiles rebuilt.
      const sharedIds = [...v.SharedProfileIds, ...v.ShareProfiles.filter((p) => p.isShared).map((p) => p.profileId)];
      assign({
        fetched: query.data,
        NoResultsFoundMessage: "No results found for '" + v.SearchFilter + "'",
        SharedProfileIds: sharedIds,
        ShareProfiles: query.data.items.map((item) => ({
          profileId: item.id,
          name: item.fullName,
          description: item.localityName + ', ' + item.countryName,
          cdn: item.photo,
          isShared: sharedIds.includes(item.id),
        })),
      });
    } else if (query.isError) {
      settled.current = fetchReq.seq;
    } else {
      return;
    }
    waiters.current.get(fetchReq.seq)?.();
    waiters.current.delete(fetchReq.seq);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.status, query.isFetching, query.isPlaceholderData, query.dataUpdatedAt, fetchReq.seq]);

  /* Input_SearchFilterOnChange (controller :885-922): Trim(SearchFilter) = "" and HasSearched → Refresh
     GetAvailableUsers; then HasSearched = False. */
  const onChangeSearchFilter = async (value: string) => {
    assign({ SearchFilter: value });
    if (value.trim() === '' && varsRef.current.HasSearched) await refreshGetAvailableUsers();
    assign({ HasSearched: false });
  };

  /* Input_SearchFilterOnKeyup JavaScript1 (:1177-1185): Enter → SearchProfile (:924-956: Refresh GetAvailableUsers,
     then HasSearched = True) and blur. `event.keyCode == 13` is the Enter key. */
  const onKeyUpSearchFilter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    void refreshGetAvailableUsers()
      .then(() => {
        assign({ HasSearched: true });
      })
      .catch(raiseToFlowHandler);
    event.currentTarget.blur();
  };

  /* OnClick (:958-988) → DeferHandleShare JS: DeferredHandleShareObjectList(TargetProfileId) without waiting
     (:766-883). */
  const deferredHandleShareObjectList = async (targetProfileId: string) => {
    const userInfo = appManager_GetCachedUserInfo();
    const result = await shareObject({
      shareObjectTypeId,
      sharedObjectId: shareObjectId,
      sharingProfileName: userInfo.FirstName + ' ' + userInfo.LastName,
      targetCBUserId: targetProfileId,
    });
    if (result.isAllowed) {
      if (result.isSuccess) {
        // ListIndexOf, then ShareProfiles[Position].IsShared = True
        const position = varsRef.current.ShareProfiles.findIndex((p) => p.profileId === targetProfileId);
        assign({
          ShareProfiles: varsRef.current.ShareProfiles.map((p, i) => (i === position ? { ...p, isShared: true } : p)),
        });
        return;
      }
      showFeedbackMessage(result.message, PLATFORM_MESSAGE_TYPE.error);
    }
    assign({
      SharedProfileIds: varsRef.current.SharedProfileIds.filter((p) => p !== targetProfileId),
      ShareProfiles: varsRef.current.ShareProfiles.map((p) =>
        p.profileId === targetProfileId ? { ...p, isShared: false } : p,
      ),
    });
    if (!result.isAllowed) await onSubscriptionDenied();
  };

  const blankSlate = (alias: string, iconName: string, iconExtra: string, message: string) => (
    <ListBlankSlate
      id={`${scope}-$b${alias}`}
      icon={<i className={`icon  font-size-6em${iconExtra} fa fa-${iconName} fa-2x`} data-icon="" />}
      message={<span data-expression="">{message}</span>}
    />
  );

  const fetched = vars.fetched;
  let results;
  if (fetched) {
    results =
      fetched.items.length > 0 ? (
        <OSList
          className="list list-group margin-top-base"
          animateItems={false}
          positionRelative
          source={vars.ShareProfiles}
          keyOf={(p) => p.profileId}
        >
          {(profile, index) => {
            const item = `${scope}-l1-39_${String(index)}`;
            return (
              <div className="border-radius-soft border-neutral-4 margin-bottom-s" data-container="">
                <Result_Item_Image
                  id={`${item}-Household_List_Item`}
                  inType={profile.cdn.type}
                  inPath={profile.cdn.path}
                  inResultType={ResultListType.Household}
                  inSignedURL={profile.cdn.signedPath}
                  inHasAction
                  inHasBorder={false}
                  inBucket={profile.cdn.bucket}
                  inShowDescription={false}
                  inIsRoundImage
                  inShowTag
                  titlePlaceholder={
                    <div className="font-size-0-9em bold" data-container="">
                      <HighlightSearch
                        id={`${item}-$b3`}
                        text={profile.name}
                        searchTerms={vars.SearchFilter}
                        stopWords=""
                      />
                    </div>
                  }
                  tagPlaceholder={
                    <span
                      className="font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6"
                      data-expression=""
                      id={`${item}-Household_Tag`}
                      style={{ color: 'rgb(0, 0, 0)', fontSize: '0.8em' }}
                    >
                      {profile.description}
                    </span>
                  }
                  resultItemPlaceholder={
                    profile.isShared ? (
                      // IsShared: Icon check-circle, 2x, extended style "color: #009706;" (view :428-443). Never
                      // captured (a share is a write), so the inline colour cannot pass NO-INLINE-COLOR: Q5.
                      <NotCaptured name="ProfileList IsShared icon (compiled colour #009706, Q5)">
                        <i className="icon fa fa-check-circle fa-2x" data-icon="" />
                      </NotCaptured>
                    ) : (
                      <i
                        className="icon fa fa-share-square-o fa-2x"
                        data-icon=""
                        style={{ color: 'rgb(0, 100, 192)' }}
                        onClick={() => {
                          void deferredHandleShareObjectList(profile.profileId).catch(raiseToFlowHandler);
                        }}
                      />
                    )
                  }
                />
              </div>
            );
          }}
        </OSList>
      ) : (
        blankSlate('4', 'search', '', vars.NoResultsFoundMessage)
      );
  } else if (query.isError) {
    results = blankSlate('5', 'exclamation-triangle', '', 'Error Searching ');
  } else {
    results = blankSlate('6', 'spinner', ' fa-spin', 'Searching');
  }

  return (
    <OSBlock name="Share_UI.ProfileList" id={id}>
      <div className="share-with-input" data-container="">
        <InputWithIcon
          id={`${scope}-$b1`}
          extendedClass="border-radius-soft border-neutral-4"
          icon={<i className="icon fa fa-search fa-1x" data-icon="" />}
          input={
            <div className="form-control" data-container="">
              <span className="input-search">
                <input
                  aria-required="false"
                  className="form-control OSFillParent"
                  data-input=""
                  id={`${scope}-Input_SearchFilter`}
                  maxLength={50}
                  placeholder="Share with..."
                  type="search"
                  value={vars.SearchFilter}
                  onChange={(e) => {
                    void onChangeSearchFilter(e.currentTarget.value).catch(raiseToFlowHandler);
                  }}
                  onKeyUp={onKeyUpSearchFilter}
                />
              </span>
            </div>
          }
        />
        {fetched !== null && fetched.label !== '' && (
          <div className="margin-top-base text-bold" data-container="">
            <span data-expression="">{fetched.label}</span>
          </div>
        )}
        {results}
        <FreeSubscriptionActionDialog id={`${scope}-FreeSubscriptionAlert`} />
      </div>
    </OSBlock>
  );
}
