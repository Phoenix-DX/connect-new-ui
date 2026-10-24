/** @origin Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading */
// @os-block Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading
import { useMemo } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { skeletonNumberOfBlocks } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';

export interface OrbitSkeletonProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_SkeletonLoadingId (OrbitSkeletonLoading identifier, default 0 = nothing rendered). */
  inSkeletonLoadingId?: number;
}

const S = OrbitSkeletonLoading;

/** One skeleton bar: `orbit-skeleton-loading-item` + its height / margin classes. */
const Item = ({ classes }: { classes: string }) => (
  <div className={`orbit-skeleton-loading-item ${classes}`} data-container="" />
);

/** The skeleton's List over LoadingBlocks (NumberOfBlocks rows of the same bar; animateItems, so the virtualized
    viewer writes `position: relative`, as captured). */
function SkeletonList({ rows, itemClasses }: { rows: readonly number[]; itemClasses: string }) {
  return (
    <OSList
      source={rows}
      keyOf={(_row, index) => index /* identical placeholder rows: no record id exists */}
      className="list list-group orbit-skeleton-loading-list"
      animateItems
      positionRelative
    >
      {() => <Item classes={itemClasses} />}
    </OSList>
  );
}

/** Bars of one EventBooklet skeleton row (Skeleton_Loading.mvc.js :661-731, repeated with opacity from :733, :805 and :877). */
function BookletRow({ className }: { className: string }) {
  const bar = 'orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin';
  return (
    <div className={className} data-container="">
      <div
        className="orbit-skeleton-loading-item orbit-skeleton-item-height-s-medium orbit-skeleton-loading-item-no-margin"
        data-container=""
        style={{ width: '36vw' }}
      />
      <div
        className="full-width margin-top-xs display-flex flex-direction-row align-items-center justify-content-space-between"
        data-container=""
      >
        <div className={`orbit-skeleton-loading-item ${bar}`} data-container="" style={{ width: '45%' }} />
        <div className={`orbit-skeleton-loading-item ${bar}`} data-container="" style={{ width: '12.5%' }} />
        <div className={`orbit-skeleton-loading-item ${bar}`} data-container="" style={{ width: '40%' }} />
      </div>
    </div>
  );
}

/** Loading skeletons of the Orbit screens (source migration/blocks/sources/…Skeleton_Loading.mvc.js, view :141-951):
    one layout per In_SkeletonLoadingId, in the compiled order. OnInitialize (:1001-1088) fills LoadingBlocks with
    NumberOfBlocks rows (`skeletonNumberOfBlocks`); OnParametersChanged (:974-999) clears and refills it, which the
    memo on the id reproduces. */
export function OrbitSkeleton({ id, inSkeletonLoadingId = 0 }: OrbitSkeletonProps) {
  const rows = useMemo(
    () => Array.from({ length: skeletonNumberOfBlocks(inSkeletonLoadingId) }, () => 1),
    [inSkeletonLoadingId],
  );
  const is = (value: number) => inSkeletonLoadingId === value;
  return (
    <OSBlock name="Orbit_Generic_Blocks.Skeleton_Loading" id={id}>
      {is(S.SingleItem) && <Item classes="orbit-skeleton-item-height-base" />}
      {is(S.AdminEventDetails) && (
        <div className="orbit-skeleton-loading-cont" data-container="">
          {[0, 1, 2, 3].map((i) => (
            <Item key={i} classes="orbit-skeleton-item-height-s" />
          ))}
        </div>
      )}
      {(is(S.OrbitLanding) || is(S.TransportDetail) || is(S.ViewDocument) || is(S.HostSurveyHelpers)) && (
        <div className="orbit-skeleton-loading-cont" data-container="">
          <SkeletonList
            rows={rows}
            itemClasses={
              is(S.OrbitLanding)
                ? 'orbit-skeleton-item-height-large'
                : is(S.TransportDetail)
                  ? 'orbit-skeleton-item-height-base'
                  : is(S.ViewDocument)
                    ? 'orbit-skeleton-item-height-s'
                    : 'orbit-skeleton-item-height-base'
            }
          />
        </div>
      )}
      {is(S.EventDetail) && (
        <div className="orbit-skeleton-loading-cont" data-container="">
          {[0, 1, 2, 3].map((i) => (
            <Item key={i} classes="orbit-skeleton-item-height-s" />
          ))}
          <Item classes="orbit-skeleton-item-height-m" />
          <SkeletonList rows={rows} itemClasses="orbit-skeleton-item-height-large" />
        </div>
      )}
      {is(S.MilestoneDetailGuest) && (
        <div className="orbit-skeleton-loading-cont" data-container="">
          <Item classes="orbit-skeleton-item-height-s" />
          <Item classes="orbit-skeleton-item-height-large" />
          <Item classes="orbit-skeleton-item-height-m" />
          <div className="orbit-skeleton-loading-item-row" data-container="">
            <Item classes="orbit-skeleton-item-height-base" />
            <Item classes="orbit-skeleton-item-height-base" />
          </div>
          <SkeletonList rows={rows} itemClasses="orbit-skeleton-item-height-base" />
        </div>
      )}
      {is(S.MilestoneDetailHost) && (
        <>
          <div className="orbit-skeleton-loading-cont" data-container="">
            <Item classes="orbit-skeleton-item-height-s" />
            <Item classes="orbit-skeleton-item-height-s" />
          </div>
          {[0, 1, 2].map((i) => (
            <Item
              key={i}
              classes="orbit-skeleton-loading-item-no-border orbit-skeleton-loading-item-margin-s orbit-skeleton-item-height-sm"
            />
          ))}
        </>
      )}
      {is(S.MemberQRCode) && (
        <div className="orbit-skeleton-loading-cont" data-container="">
          <Item classes="orbit-skeleton-item-height-m" />
          <Item classes="orbit-skeleton-item-height-s" />
          <Item classes="orbit-skeleton-item-height-s" />
          <Item classes="orbit-skeleton-item-height-large" />
        </div>
      )}
      {is(S.HostSurvey) && (
        <div className="orbit-skeleton-loading-cont" data-container="">
          <Item classes="orbit-skeleton-item-height-large" />
          <SkeletonList rows={rows} itemClasses="orbit-skeleton-item-height-m" />
        </div>
      )}
      {is(S.MilestoneWrapper) && <div className="orbit-skeleton-loading-header" data-container="" />}
      {is(S.EventBooklet) && (
        <div className="orbit-skeleton-loading-cont" data-container="">
          <BookletRow className="orbit-skeleton-loading-list-item" />
          <BookletRow className="orbit-skeleton-loading-list-item opacity-0-75 margin-top-m" />
          <BookletRow className="orbit-skeleton-loading-list-item opacity-0-5 margin-top-m" />
          <BookletRow className="orbit-skeleton-loading-list-item opacity-0-25 margin-top-m" />
        </div>
      )}
    </OSBlock>
  );
}
