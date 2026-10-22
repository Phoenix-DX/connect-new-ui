// @os-block OutSystemsUI_2_23.Interaction.Carousel
import { useId, useLayoutEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { registerCarousel } from '../lib/actions';
import { CarouselNavigation } from '../lib/staticEntities';
import type { CarouselItems, CarouselOptionalConfigs } from '../lib/structures';
import { CarouselProvider, hasPagination, type CarouselConfig } from './provider';

export { splideOptions, type CarouselConfig } from './provider';

export interface CarouselProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** CarouselNavigation identifier (default Both). */
  navigation?: string;
  /** CSS height of the slides (default "auto"). */
  height?: string;
  itemsPerSlide?: CarouselItems;
  optionalConfigs?: CarouselOptionalConfigs;
  extendedClass?: string;
  /** Placeholder CarouselItems: a List widget whose items become the slides (or the slides themselves). */
  children?: ReactNode;
  /** Event Initialized(CarouselId). */
  onInitialized?: (carouselId: string) => void;
  /** Event OnSlideMoved(CarouselId, Index). */
  onOnSlideMoved?: (carouselId: string, index: number) => void;
}

/** OutSystems UI Carousel (p:OutSystemsUI_2_23.Interaction.Carousel.mvc.js view): `osui-carousel` > track >
    CarouselItems placeholder, driven by Splide 4.1.3 (ADR-3) as the original provider. The Arrows / Pagination
    containers of the view are design-time previews (Visible False) and are not rendered. */
export function Carousel({
  id,
  navigation = CarouselNavigation.Both,
  height = 'auto',
  itemsPerSlide = {},
  optionalConfigs = {},
  extendedClass = '',
  children,
  onInitialized,
  onOnSlideMoved,
}: CarouselProps) {
  const prefix = id?.replace('$', '');
  const fallbackId = useId();
  /** Widget id the Carousel actions (CarouselDisableOnRender, Set/UnsetSplideEvent…) use: the block root id. */
  const widgetId = id ?? fallbackId;
  const config: CarouselConfig = {
    navigation,
    height,
    desktop: itemsPerSlide.Desktop ?? 1,
    tablet: itemsPerSlide.Tablet ?? 1,
    phone: itemsPerSlide.Phone ?? 1,
    autoPlay: optionalConfigs.AutoPlay ?? true,
    loop: optionalConfigs.Loop ?? true,
    padding: optionalConfigs.Padding ?? '',
    itemsGap: optionalConfigs.ItemsGap ?? '',
    startingPosition: optionalConfigs.StartingPosition ?? 0,
  };
  const key = JSON.stringify(config);
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const providerRef = useRef<CarouselProvider | null>(null);
  const rendered = useRef(false);
  const latestKey = useRef(key);
  const events = useRef({ onInitialized, onOnSlideMoved });
  useLayoutEffect(() => {
    events.current = { onInitialized, onOnSlideMoved };
    latestKey.current = key;
  });

  /* OnReady → CarouselCreate + CarouselInitialize (provider build); OnDestroy → CarouselDestroy. */
  useLayoutEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const content = contentRef.current;
    if (!root || !track || !content) return;
    const carouselId = prefix ?? '';
    const provider = new CarouselProvider(root, track, content, JSON.parse(latestKey.current) as CarouselConfig, {
      onInitialized: () => events.current.onInitialized?.(carouselId),
      onSlideMoved: (index) => events.current.onOnSlideMoved?.(carouselId, index),
    });
    const unregister = registerCarousel(widgetId, provider);
    provider.build();
    providerRef.current = provider;
    return () => {
      unregister();
      provider.dispose();
      providerRef.current = null;
      rendered.current = false;
    };
    // Built once per instance; later input changes go through changeProperty below.
  }, [prefix, widgetId]);

  /* OnParametersChanged → Carousel*Change*Property (Carousel.mvc.js:531-) → provider changeProperty. */
  useLayoutEffect(() => {
    providerRef.current?.changeProperty(JSON.parse(key) as CarouselConfig);
  }, [key]);

  /* OnRender → CarouselUpdateOnRender (Carousel.mvc.js:832-847). OutSystems raises OnRender on every update of the
     block, not on its first render (componentDidUpdate, runtime-sources/OutSystemsReactView.js:6:29576). */
  useLayoutEffect(() => {
    if (!rendered.current) {
      rendered.current = true;
      return;
    }
    providerRef.current?.updateOnRender();
  });

  const classes = ['osui-carousel', extendedClass, hasPagination(navigation) ? 'osui-carousel--has-pagination' : '']
    .filter((x) => x !== '')
    .join(' ');
  return (
    <OSBlock name="Interaction.Carousel" id={id}>
      <div className={classes} data-container="" ref={rootRef}>
        <div className="osui-carousel__track" data-container="" ref={trackRef}>
          <div className="osui-carousel__content" ref={contentRef}>
            {children}
          </div>
        </div>
      </div>
    </OSBlock>
  );
}
