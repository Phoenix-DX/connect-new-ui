import type { KeyboardEvent } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { UpgradeSubscriptionDialog } from '@/pages/LegacyShareObject/components/UpgradeSubscriptionDialog';
import type { ProfileListResults, ShareProfile } from '@/pages/LegacyShareObject/hooks/profileListState';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { ResultListType } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { ResultItemImage } from '@/components/ui/ResultItemImage';
import { InputWithIcon } from '@/components/ui/InputWithIcon';
import { HighlightSearch } from './HighlightSearch';
import { ListBlankSlate } from './ListBlankSlate';

export interface ProfileListProps {
  /** OutSystems instance id of the block (`b1-$b8`). */
  id: string;
  /** SearchFilter: the value of the search input. */
  searchFilter: string;
  /** The Label of GetAvailableUsers: shown when it is not "". */
  label: string;
  /** What the results area shows. */
  results: ProfileListResults;
  /** ShareProfiles: the rows of the list. */
  shareProfiles: ShareProfile[];
  /** NoResultsFoundMessage. */
  noResultsFoundMessage: string;
  /** Input_SearchFilter changed. */
  onSearchFilterChange: (value: string) => void;
  /** Input_SearchFilterOnKeyup. */
  onSearchFilterKeyUp: (event: KeyboardEvent<HTMLInputElement>) => void;
  /** The share icon of a row. */
  onShare: (profileId: string) => void;
}

const TAG_CLASS =
  'font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6';

/** The "Share with..." search, the Label of GetAvailableUsers, the list of the users with their share icon, a blank
    slate for no result, an error or a search that runs, and the (closed) FreeSubscriptionActionDialog. Props only;
    the flows are in useProfileList.
    @origin Connect2_LegacyShared.Share_UI.ProfileList */
export function ProfileList({
  id,
  searchFilter,
  label,
  results,
  shareProfiles,
  noResultsFoundMessage,
  onSearchFilterChange,
  onSearchFilterKeyUp,
  onShare,
}: ProfileListProps) {
  const scope = id.replace('$', '');

  const blankSlate = (alias: string, iconName: string, iconExtra: string, message: string) => (
    <ListBlankSlate
      id={`${scope}-$b${alias}`}
      icon={<i className={`icon  font-size-6em${iconExtra} fa fa-${iconName} fa-2x`} data-icon="" />}
      message={<span data-expression="">{message}</span>}
    />
  );

  let resultsArea;
  if (results === 'list') {
    resultsArea = (
      <OSList
        className="list list-group margin-top-base"
        animateItems={false}
        positionRelative
        source={shareProfiles}
        keyOf={(p) => p.profileId}
      >
        {(profile, index) => {
          const item = `${scope}-l1-39_${String(index)}`;
          return (
            <div className="border-radius-soft border-neutral-4 margin-bottom-s" data-container="">
              <ResultItemImage
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
                    <HighlightSearch id={`${item}-$b3`} text={profile.name} searchTerms={searchFilter} stopWords="" />
                  </div>
                }
                tagPlaceholder={
                  <span
                    className={TAG_CLASS}
                    data-expression=""
                    id={`${item}-Household_Tag`}
                    style={{ color: 'rgb(0, 0, 0)', fontSize: '0.8em' }}
                  >
                    {profile.description}
                  </span>
                }
                resultItemPlaceholder={
                  profile.isShared ? (
                    // IsShared: Icon check-circle, 2x, extended style "color: #009706;". Never captured (a share is a
                    // write), so the inline colour cannot pass NO-INLINE-COLOR: Q5.
                    <NotCaptured name="ProfileList IsShared icon (compiled colour #009706, Q5)">
                      <i className="icon fa fa-check-circle fa-2x" data-icon="" />
                    </NotCaptured>
                  ) : (
                    <i
                      className="icon fa fa-share-square-o fa-2x"
                      data-icon=""
                      style={{ color: 'rgb(0, 100, 192)' }}
                      onClick={() => {
                        onShare(profile.profileId);
                      }}
                    />
                  )
                }
              />
            </div>
          );
        }}
      </OSList>
    );
  } else if (results === 'noResults') {
    resultsArea = blankSlate('4', 'search', '', noResultsFoundMessage);
  } else if (results === 'error') {
    resultsArea = blankSlate('5', 'exclamation-triangle', '', 'Error Searching ');
  } else {
    resultsArea = blankSlate('6', 'spinner', ' fa-spin', 'Searching');
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
                  value={searchFilter}
                  onChange={(e) => {
                    onSearchFilterChange(e.currentTarget.value);
                  }}
                  onKeyUp={onSearchFilterKeyUp}
                />
              </span>
            </div>
          }
        />
        {label !== '' && (
          <div className="margin-top-base text-bold" data-container="">
            <span data-expression="">{label}</span>
          </div>
        )}
        {resultsArea}
        <UpgradeSubscriptionDialog id={`${scope}-FreeSubscriptionAlert`} />
      </div>
    </OSBlock>
  );
}
