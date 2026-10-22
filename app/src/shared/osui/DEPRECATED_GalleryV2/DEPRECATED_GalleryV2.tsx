// @os-block OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2
import type { CSSProperties, ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Space } from '@/shared/osui/lib/staticEntities';

export interface DEPRECATED_GalleryV2Props {
  /** OutSystems instance id of the block. */
  id?: string;
  /** ItemInPhone (Phone Number, i.e. text): columns on phone (default "1"). */
  itemInPhone?: string;
  /** ItemsInTablet: columns on tablet (default 3). */
  itemsInTablet?: number;
  /** ItemsInDesktop: columns on desktop (default 4). */
  itemsInDesktop?: number;
  /** GutterSize: Space identifier (default Space.Base). */
  gutterSize?: string;
  /** Placeholder Content. */
  children?: ReactNode;
}

/** JavaScript `++` on a JS node parameter: ToNumber, then + 1 (the Text parameters "2" become 3). */
const increment = (value: string | number) => Number(value) + 1;

/** The InitJS of OnReady / OnParametersChanged (p:OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc.js:313-339): on the
    Content element `--grid-<desktop|tablet|phone>` = the column counts as passed (ColumnsInDesktop is
    ItemsInDesktop.toString(), :232), `--grid-gap: var(--space-<GutterSize>)`, and the "Edge fix"
    `--grid-list-<device>` = each count + 1. */
export function galleryV2Style(itemsInDesktop: number, itemsInTablet: number, itemInPhone: string, gutterSize: string) {
  const desktop = String(itemsInDesktop);
  return {
    '--grid-desktop': desktop,
    '--grid-tablet': String(itemsInTablet),
    '--grid-phone': itemInPhone,
    '--grid-gap': `var(--space-${gutterSize})`,
    '--grid-list-desktop': String(increment(desktop)),
    '--grid-list-tablet': String(increment(itemsInTablet)),
    '--grid-list-phone': String(increment(itemInPhone)),
  } as CSSProperties;
}

/** Deprecated OutSystems UI gallery (p:OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc.js view :181-190): the Content
    placeholder with class `osui-deprecated grid-gallery` and the CSS variables its OnReady script writes (captured);
    the grid is the original CSS. Stack osui:Gallery: hand-written, no library. */
export function DEPRECATED_GalleryV2({
  id,
  itemInPhone = '1',
  itemsInTablet = 3,
  itemsInDesktop = 4,
  gutterSize = Space.Base,
  children,
}: DEPRECATED_GalleryV2Props) {
  return (
    <OSBlock name="Adaptive.DEPRECATED_GalleryV2" id={id}>
      <div
        className="osui-deprecated grid-gallery"
        style={galleryV2Style(itemsInDesktop, itemsInTablet, itemInPhone, gutterSize)}
      >
        {children}
      </div>
    </OSBlock>
  );
}
