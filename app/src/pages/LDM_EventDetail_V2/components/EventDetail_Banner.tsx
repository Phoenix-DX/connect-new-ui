import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { useWasRestoredFromCache } from '@/platform/navigation';
import { formatDateForEventBanner } from './actions';

export interface EventDetail_BannerProps {
  id: string;
  /** In_ImageURL: the main hall photo (Host.SignedHallPhoto). */
  inImageURL: string;
  inIsHost: boolean;
  inEventLocation: string;
  /** In_EventDate: Host.EventDate (Text, read with TextToDate). */
  inEventDate: string;
  inAdults: string;
  inChildren: string;
  inMinHeight: number;
  inIsCoordinatorAvailable: boolean;
  /** Event ContactOrganiser. */
  onContactOrganiser: () => void;
  /** Event SetContainerHeight(Event_BannerHeight). */
  onSetContainerHeight: (bannerHeight: number) => void;
}

/** Banner of the LDM event detail (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc.js
    = B; view :180-560, controller :565-860). The hall photo, an overlay and the text box, each `height` /
    `min-height` ActiveHeight px: "Host" / "Guest", the locality (bold) and FormatDateForEventBanner(EventDate), then
    for a host the Adults / Children counts ("Adult" / "Child" for 1) and the "Contact Coordinator" button (enabled when
    the coordinator is available; `min-height: 51px` for a guest). OnInitialize / OnParametersChanged (B:700-790):
    SetActiveHeight (ActiveHeight = In_MinHeight). OnReady (B:600-660): CorrectHeightJS reads the text box's
    offsetHeight; a different height becomes ActiveHeight and raises SetContainerHeight. A view restored from the
    cache skips all three.
    @origin Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner */
export function EventDetail_Banner({
  id,
  inImageURL,
  inIsHost,
  inEventLocation,
  inEventDate,
  inAdults,
  inChildren,
  inMinHeight,
  inIsCoordinatorAvailable,
  onContactOrganiser,
  onSetContainerHeight,
}: EventDetail_BannerProps) {
  const restored = useWasRestoredFromCache();
  const [activeHeight, setActiveHeight] = useState(inMinHeight);
  const textRef = useRef<HTMLDivElement>(null);

  /* OnParametersChanged: SetActiveHeight (state adjusted while rendering, when the input changed). */
  const [prevMinHeight, setPrevMinHeight] = useState(inMinHeight);
  if (prevMinHeight !== inMinHeight) {
    setPrevMinHeight(inMinHeight);
    if (!restored) setActiveHeight(inMinHeight);
  }

  /* OnReady: CorrectHeight. */
  const ready = useRef(false);
  useEffect(() => {
    if (ready.current) return;
    ready.current = true;
    if (restored) return;
    const finalHeight = textRef.current?.offsetHeight ?? 0;
    if (finalHeight !== inMinHeight) {
      setActiveHeight(finalHeight);
      onSetContainerHeight(finalHeight);
    }
    // OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const height = `${String(activeHeight)}px`;
  return (
    <OSBlock name="LDM_Blocks.EventDetail_Banner" id={id}>
      <div className="event-detail-banner-image-cont" data-container="" style={{ height }}>
        <img className="event-detail-banner-image" data-image="" src={inImageURL} style={{ height }} />
        <div className="event-detail-banner-overlay" data-container="" style={{ height }} />
        <div className="event-detail-banner-text" data-container="" style={{ minHeight: height }} ref={textRef}>
          <span className="margin-top-m" data-expression="">
            {inIsHost ? 'Host' : 'Guest'}
          </span>
          <div
            className="display-flex flex-direction-column text-align-center margin-top-m margin-bottom-m"
            data-container=""
          >
            <span className="font-size-1-5em bold" data-expression="">
              {inEventLocation}
            </span>
            <span className="font-size-1-25em" data-expression="">
              {formatDateForEventBanner(inEventDate)}
            </span>
          </div>
          <div
            className={`full-width display-flex${inIsHost ? ' flex-space-between' : ' justify-content-flex-end'}`}
            data-container=""
          >
            {inIsHost ? (
              <div className="display-flex" data-container="">
                <div className="event-detail-banner-people event-detail-banner-adults" data-container="">
                  <span className="font-size-1-5em bold" data-expression="">
                    {inAdults}
                  </span>
                  <span className="font-size-0-75em" data-expression="">
                    {inAdults === '1' ? 'Adult' : 'Adults'}
                  </span>
                </div>
                <div className="event-detail-banner-people event-detail-banner-children" data-container="">
                  <span className="font-size-1-5em bold" data-expression="">
                    {inChildren}
                  </span>
                  <span className="font-size-0-75em" data-expression="">
                    {inChildren === '1' ? 'Child' : 'Children'}
                  </span>
                </div>
              </div>
            ) : null}
            <button
              className="btn btn-primary"
              data-button=""
              type="button"
              disabled={!inIsCoordinatorAvailable}
              style={inIsHost ? undefined : { minHeight: '51px' }}
              onClick={onContactOrganiser}
            >
              <i className="icon fa fa-envelope fa-1x" data-icon="" style={{ padding: '0px 5px 2px' }} />
              <span className="text-no-wrap">Contact Coordinator</span>
            </button>
          </div>
        </div>
      </div>
    </OSBlock>
  );
}
