/** @origin Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry */
// @os-block Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry
import { useEffect, useId, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList, OSListItem } from '@/components/ui/os/OSList';
import { getCacheableCountryInfo, getCacheableUserInfo } from '@/lib/legacyShared/actions';
import type { LocalityResultItemWithGPS } from '@/lib/legacyShared/structures';
import { Spinner } from '@/components/ui/Spinner';
import { scrollToElement } from '@/components/ui/lib/actions';
import { InputWithIcon } from '@/components/ui/InputWithIcon';
import { AssembleSubdivisionFilter } from '@/components/assemble/AssembleSubdivisionFilter';
import { hasAccessToRegion, listFilterByName } from '@/lib/assemble/actions';

export interface AssembleLocalityFilterProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** CountryCode (default ""). */
  countryCode?: string;
  /** CountryName (default ""): the title "View Localities in <CountryName>". */
  countryName?: string;
  /** Event SelectedSubdivision(SubdivisionId). */
  onSelectedSubdivision?: (subdivisionId: string) => void;
  /** Event Cancel (declared; never raised by the block). */
  onCancel?: () => void;
  /** Event FreeSubscriptionAlert (no access to the clicked locality). */
  onFreeSubscriptionAlert?: () => void;
}

/** ExitFullscreen JS of OnClickLocality (mvc.js :957-967). */
async function exitFullscreen(): Promise<void> {
  if (document.fullscreenElement) await document.exitFullscreen();
}

/** Localities of a country, each opening its supper meetings (p:migration/blocks/sources/Connect2_Assemble_MUI.Assemble
    .Assemble_FilterLocalityByCountry.mvc.js; model :1-103, view :170-535, controller :539-950). IsFetchingLocalities
    (default False) shows the Spinner; else DIV_Title "View Localities in " + CountryName, DIV_FilterByLocality with the
    search (Input_SearchTerm "Search Locality", max 50) and the list (not animated, virtualization off) of ListItems
    (name; chevron-down, or a blue chevron-up on the open locality) each followed by DIV_ListSubdivisions (visible on the
    open locality) with Assemble_FilterSubdivisionByLocality, or "No results found". OnReady (:570-610): ScrollToElement
    (DIV_Title, smooth), then (not restored from cache) GetCacheableUserInfo → UserInformation, FetchLocalities
    (GetCacheableCountryInfo). OnClickLocality (:735-790): HasAccessToRegion(CountryCode, LocalityId); no access →
    FreeSubscriptionAlert; else ExitFullscreen, then the open locality closes (both ids NullIdentifier) or the clicked
    one opens and SelectedSubdivision(SelectedSubdivisionId) is raised. A subdivision's SelectedSubdivision
    (Handler_LocalitySelectedSubdivision :677-700) sets both ids and raises SelectedSubdivision(it). */
export function AssembleLocalityFilter({
  id,
  countryCode = '',
  countryName = '',
  onSelectedSubdivision,
  onFreeSubscriptionAlert,
}: AssembleLocalityFilterProps) {
  const generatedId = useId();
  const scope = (id ?? generatedId).replace('$', '');
  const [fullLocalitiesList, setFullLocalitiesList] = useState<LocalityResultItemWithGPS[]>([]);
  const [filteredLocalitiesList, setFilteredLocalitiesList] = useState<LocalityResultItemWithGPS[]>([]);
  const [isFetchingLocalities, setIsFetchingLocalities] = useState(false);
  const [selectedSubdivisionId, setSelectedSubdivisionId] = useState('0');
  const [selectedLocalityId, setSelectedLocalityId] = useState('0');
  const [searchTerm, setSearchTerm] = useState('');

  // OnReady: ScrollToElement, GetCacheableUserInfo (UserInformation is never read again), FetchLocalities.
  useEffect(() => {
    let alive = true;
    scrollToElement(`${scope}-DIV_Title`, true, 0, '', 0);
    void getCacheableUserInfo()
      .then(() => {
        if (alive) setIsFetchingLocalities(true);
        return getCacheableCountryInfo(countryCode);
      })
      .then((list) => {
        if (!alive) return;
        setFullLocalitiesList(list);
        setFilteredLocalitiesList(list);
        setIsFetchingLocalities(false);
      });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- OnReady runs once
  }, []);

  const onChangeSearchTerm = async (value: string) => {
    setSearchTerm(value);
    if (value === '') {
      const list = await getCacheableCountryInfo(countryCode);
      setFullLocalitiesList(list);
      setFilteredLocalitiesList(list);
    } else setFilteredLocalitiesList(listFilterByName(fullLocalitiesList, value));
  };

  const onClickLocality = async (localityId: string) => {
    if (!(await hasAccessToRegion(countryCode, localityId))) {
      onFreeSubscriptionAlert?.();
      return;
    }
    await exitFullscreen();
    if (localityId === selectedLocalityId) {
      setSelectedSubdivisionId('0');
      setSelectedLocalityId('0');
    } else {
      setSelectedLocalityId(localityId);
      // Ported 1:1: raises the subdivision kept from the locality open before (not reset on a switch).
      onSelectedSubdivision?.(selectedSubdivisionId);
    }
  };

  const handlerLocalitySelectedSubdivision = (localityId: string, inSelectedSubidivisionId: string) => {
    setSelectedSubdivisionId(inSelectedSubidivisionId);
    setSelectedLocalityId(localityId);
    onSelectedSubdivision?.(inSelectedSubidivisionId);
  };

  return (
    <OSBlock name="Assemble.Assemble_FilterLocalityByCountry" id={id}>
      {isFetchingLocalities ? (
        <Spinner showLoader={isFetchingLocalities} />
      ) : (
        <>
          <div
            className="padding-y-s padding-x-base list-sticky-records__sticky-record"
            data-container=""
            id={`${scope}-DIV_Title`}
          >
            <span className="font-bold">{`View Localities in ${countryName}`}</span>
          </div>
          <div className="assemble-list-filter margin-x-base" data-container="" id={`${scope}-DIV_FilterByLocality`}>
            <InputWithIcon
              icon={<i className="icon fa fa-search fa-1x" data-icon="" />}
              input={
                <input
                  aria-required="false"
                  autoComplete="off"
                  className="form-control OSFillParent"
                  data-input=""
                  id={`${scope}-Input_SearchTerm`}
                  maxLength={50}
                  placeholder="Search Locality"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => void onChangeSearchTerm(event.target.value)}
                />
              }
            />
          </div>
          {filteredLocalitiesList.length > 0 ? (
            <OSList
              source={filteredLocalitiesList}
              keyOf={(l) => l.Id}
              className="list list-group OSFillParent"
              animateItems={false}
              disableVirtualization
            >
              {(l) => (
                <div className="padding-x-base" data-container="">
                  <OSListItem
                    className="list-item assemble-list-filter"
                    triggerActionOnFullSwipeLeft
                    triggerActionOnFullSwipeRight
                    onClick={() => void onClickLocality(l.Id)}
                  >
                    <div className="display-flex justify-content-space-between" data-container="">
                      <div className="text-align-left OSInline" data-container="" style={{ WebkitBoxFlex: 1, flex: 2 }}>
                        <span>{l.Name}</span>
                      </div>
                      <div className="OSInline" data-container="" style={{ height: '22px', textAlign: 'right' }}>
                        <div
                          className="text-neutral-6 font-size-0-9em text-align-right"
                          data-container=""
                          style={{ alignItems: 'center', display: 'flex', height: '22px' }}
                        >
                          <div className="OSInline" data-container="" style={{ height: '22px', width: '20%' }}>
                            {l.Id !== selectedLocalityId ? (
                              <i
                                className="icon fa fa-chevron-down fa-1x"
                                data-icon=""
                                style={{ height: '22px', marginTop: '4px', width: '100%' }}
                              />
                            ) : (
                              <i
                                className="icon fa fa-chevron-up fa-1x"
                                data-icon=""
                                style={{ color: '#1776ba', height: '22px', marginTop: '4px', width: '100%' }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </OSListItem>
                  {l.Id === selectedLocalityId && (
                    <div
                      className="assemble-list-filter margin-bottom-xs margin-top-xs ignore-backwards-compatibility-content"
                      data-container=""
                    >
                      <AssembleSubdivisionFilter
                        localityId={l.Id}
                        selectedSubdivisionId={selectedSubdivisionId}
                        onSelectedSubdivision={(subdivisionId) => {
                          handlerLocalitySelectedSubdivision(l.Id, subdivisionId);
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </OSList>
          ) : (
            <div className="margin-x-base margin-y-base" data-container="" id={`${scope}-DIV_NoResultsFound`}>
              No results found
            </div>
          )}
        </>
      )}
    </OSBlock>
  );
}
