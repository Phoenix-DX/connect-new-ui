// @os-block Connect2_LegacyShared.Directory.LocalityListDetail
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList, OSListItem } from '@/components/ui/os/OSList';
import type { CountryWithMapPosition } from './types';

export interface LocalityListDetailProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** CountryDetailList: one row per country (default empty). */
  countryDetailList?: CountryWithMapPosition[];
  /** HideHeader: hides the "Browse by Country" header (default false). */
  hideHeader?: boolean;
  /** Event OnClick_GoToBrowseCountry(Code, InitialLatitude, InitialLongitude, InitialZoom). */
  onOnClickGoToBrowseCountry?: (
    code: string,
    initialLatitude: number,
    initialLongitude: number,
    initialZoom: number,
  ) => void;
}

/** FormatCurrency(LongIntegerToDecimal(n), "", 0, "", ","): rounded to an integer, thousands grouped with ",". */
export function formatCount(n: number): string {
  const rounded = Math.round(Math.abs(n));
  const grouped = String(rounded).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return n < 0 && rounded !== 0 ? `-${grouped}` : grouped;
}

/** Country list with members, households and localities counts (p:migration/screens/AssembleEvents/analysis/sources/
    pretty/Connect2_LegacyShared.Directory.LocalityListDetail.mvc.js view :120-300): an optional header
    (`!HideHeader`), then the List (`list list-group`, no animation, no virtualization) of ListItems `list-item`, each
    raising OnClick_GoToBrowseCountry with the row's Code and map position (:204-216). */
export function LocalityListDetail({
  id,
  countryDetailList = [],
  hideHeader = false,
  onOnClickGoToBrowseCountry,
}: LocalityListDetailProps) {
  return (
    <OSBlock name="Directory.LocalityListDetail" id={id}>
      <div data-container="">
        {!hideHeader && (
          <div className="text-neutral-6 padding-y-s border-bottom-neutral-5" data-container="">
            <span style={{ marginLeft: '10px' }}>Browse by Country</span>
          </div>
        )}
        <OSList
          source={countryDetailList}
          keyOf={(country, index) => country.Code ?? index}
          className="list list-group"
          animateItems={false}
          disableVirtualization
        >
          {(country) => (
            <OSListItem
              className="list-item"
              triggerActionOnFullSwipeLeft
              triggerActionOnFullSwipeRight
              onClick={() =>
                onOnClickGoToBrowseCountry?.(
                  country.Code ?? '',
                  country.InitialLatitude ?? 0,
                  country.InitialLongitude ?? 0,
                  country.InitialZoom ?? 5,
                )
              }
            >
              <div className="landing-country-list-item OSInline" data-container="">
                <div className="width30 padding-left-s" data-container="">
                  <span data-expression="">{country.Name ?? ''}</span>
                </div>
                <div className="locality-details-container width55" data-container="">
                  <div className="locality-info-container width37-5 OSInline" data-container="">
                    <span data-expression="">{formatCount(country.MembersCount ?? 0)}</span>
                    <i
                      className="icon icon-directory-members font-size-0-8em fa fa-flag fa-1x ThemeGrid_MarginGutter"
                      data-icon=""
                    />
                  </div>
                  <div className="locality-info-container width37-5 OSInline" data-container="">
                    <span data-expression="">{formatCount(country.HouseholdersCount ?? 0)}</span>
                    <i
                      className="icon icon-directory-Hosuehold font-size-0-8em fa fa-flag fa-1x ThemeGrid_MarginGutter"
                      data-icon=""
                    />
                  </div>
                  <div className="locality-info-container width25 OSInline" data-container="">
                    <span data-expression="">{formatCount(country.LocalitiesCount ?? 0)}</span>
                    <i
                      className="icon icon-directory-Locality font-size-0-8em fa fa-flag fa-1x ThemeGrid_MarginGutter"
                      data-icon=""
                    />
                  </div>
                </div>
                <div className="width5 text-align-right" data-container="">
                  <i className="icon text-neutral-6 font-size-0-9em fa fa-chevron-right fa-1x" data-icon="" />
                </div>
              </div>
            </OSListItem>
          )}
        </OSList>
      </div>
    </OSBlock>
  );
}
