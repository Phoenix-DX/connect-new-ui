/* OutSystems UI 2.23 static entity identifiers used by the shared patterns. Values are written into class names:
   evidence from the captured DOM and the original CSS. */

/** the original CSS has gutter-{none,xs,s,base,m,l,xl,xxl}; captured `gutter-base` (Columns2 default). */
export const GutterSize = {
  None: 'gutter-none',
  ExtraSmall: 'gutter-xs',
  Small: 'gutter-s',
  Base: 'gutter-base',
  Medium: 'gutter-m',
  Large: 'gutter-l',
  ExtraLarge: 'gutter-xl',
  XXLarge: 'gutter-xxl',
} as const;

/** "tablet-" / "phone-" + Id: captured `tablet-break-none`, `phone-break-none` (Columns2 default). */
export const BreakColumns = { None: 'break-none' } as const;

/** Separator: "padding-top-" / "padding-left-" + Id; the original CSS has `.padding-top-base` (record Base, the default). */
export const Space = {
  Base: 'base',
  /** W5-B (DEPRECATED_GalleryV2 GutterSize): TST value (static-entities-tst.json `OutSystemsUI_2_23.space`); captured
      `--grid-gap: var(--space-s)` (MyBookmarks dom). */
  Small: 's',
} as const;

/** Separator: "background-" + Id; the original CSS has `.background-neutral-4` (record Neutral4, the default). */
export const Color = {
  Neutral4: 'neutral-4',
  /** Wave 8 O-B2 (Tag): default of Tag.Color (OutSystemsUI_2_23.Content.Tag.mvc.js model :13-14); captured
      `background-primary` (AssembleEvents dom, Tag v1 / v2). */
  Primary: 'primary',
} as const;

/** BottomSheet Shape: `--bottom-sheet-shape: var(--border-radius-<Id>)`. Captured `var(--border-radius-rounded)`
    (ConnectPatterns.BottomSheet passes Rounded; CountryDetails dom); SoftRounded (the pattern's default) from the
    original CSS variable `--border-radius-soft` (OutSystemsUI_2_23.OutSystemsUI.css). */
export const Shape = { Rounded: 'rounded', SoftRounded: 'soft' } as const;

/* ---- Wave 2D (Carousel) ---- */
/** CarouselNavigation: only compared by the Carousel (arrows / pagination), never rendered, so the values are opaque.
    HomeFeed passes Dots (captured pagination, no arrows); HouseholdCarousel, Photobook and SupperMeeting_Carousel
    render neither (captured), i.e. None. Default of the Carousel input: Both. */
export const CarouselNavigation = { Arrows: 'arrows', Dots: 'dots', Both: 'both', None: 'none' } as const;

/* ---- Wave 3C (Animate) ---- */
/** AnimationType: written as a class as is. TST values (static-entities-tst.json `OutSystemsUI_2_23.animationType`);
    `top-to-bottom` also captured (MyBookmarks loading). */
export const AnimationType = {
  BottomToTop: 'bottom-to-top',
  Bounce: 'bounce',
  FadeIn: 'fade-in',
  LeftToRight: 'left-to-right',
  RightToLeft: 'right-to-left',
  Scale: 'scale',
  ScaleDown: 'scale-down',
  Spinner: 'spinner',
  TopToBottom: 'top-to-bottom',
} as const;
/** Speed (Animate): written as a class as is; captured `normal` (MyBookmarks loading). */
export const Speed = { Normal: 'normal' } as const;

/* ---- Wave 8 O-B2 (Accordion) ---- */
/** AccordionIconType (static-entities-tst.json `OutSystemsUI_2_23.accordionIconType`; OSUI Enum.IconType). */
export const AccordionIconType = { Caret: 'Caret', Custom: 'Custom', PlusMinus: 'PlusMinus' } as const;
/** AccordionIconPosition (static-entities-tst.json `OutSystemsUI_2_23.accordionIconPosition`). */
export const AccordionIconPosition = { Left: 'left', Right: 'right' } as const;
