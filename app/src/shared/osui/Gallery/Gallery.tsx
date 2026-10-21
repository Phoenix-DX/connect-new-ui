// @os-block OutSystemsUI_2_23.Adaptive.Gallery
import { useEffect, useLayoutEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { Space } from '../lib/staticEntities';

export interface GalleryProps {
  /** OutSystems instance id of the block. */
  id?: string;
  rowItemsDesktop?: number;
  rowItemsTablet?: number;
  rowItemsPhone?: number;
  /** Space identifier (default Space.Base). */
  itemsGap?: string;
  extendedClass?: string;
  /** Placeholder Content. */
  children?: ReactNode;
  /** Event Initialized(GalleryId). */
  onInitialized?: (galleryId: string) => void;
}

/** The CSS variables the OutSystems UI Gallery script writes on the gallery element (captured on every Gallery:
    `--gallery-<device>-items` and `--gallery-list-<device>-items` = RowItems<Device>, `--gallery-gap: var(--space-<Id>)`). */
export function galleryStyle(desktop: number, tablet: number, phone: number, itemsGap: string): CSSProperties {
  return {
    '--gallery-desktop-items': String(desktop),
    '--gallery-list-desktop-items': String(desktop),
    '--gallery-tablet-items': String(tablet),
    '--gallery-list-tablet-items': String(tablet),
    '--gallery-phone-items': String(phone),
    '--gallery-list-phone-items': String(phone),
    '--gallery-gap': `var(--space-${itemsGap})`,
  } as CSSProperties;
}

/** OutSystems UI Gallery (p:OutSystemsUI_2_23.Adaptive.Gallery.mvc.js view): the Content placeholder with class
    `osui-gallery`; the pattern script adds ExtendedClass and the CSS variables to it (captured). Initialized is raised
    once the pattern is ready (controller InitializedHandler, :373-395). */
export function Gallery({
  id,
  rowItemsDesktop = 4,
  rowItemsTablet = 3,
  rowItemsPhone = 1,
  itemsGap = Space.Base,
  extendedClass = '',
  children,
  onInitialized,
}: GalleryProps) {
  const prefix = id?.replace('$', '');
  const initialized = useRef(onInitialized);
  useLayoutEffect(() => {
    initialized.current = onInitialized;
  });
  useEffect(() => {
    initialized.current?.(prefix ?? '');
  }, [prefix]);
  return (
    <OSBlock name="Adaptive.Gallery" id={id}>
      <div
        className={extendedClass === '' ? 'osui-gallery' : `osui-gallery ${extendedClass}`}
        style={galleryStyle(rowItemsDesktop, rowItemsTablet, rowItemsPhone, itemsGap)}
      >
        {children}
      </div>
    </OSBlock>
  );
}
