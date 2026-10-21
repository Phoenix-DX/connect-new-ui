# CSS relevant to PINRegister

Load order of stylesheets (keep this order in the build):

1. `/UBTConnect/css/_Basic.css`
2. `/UBTConnect/css/OutSystemsReactWidgets.css`
3. `/UBTConnect/css/UBT_AppManager.PIN.PinCode.css`
4. `/UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css`
5. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css`
6. `/UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css`
7. `/UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css`
8. `/UBTConnect/css/Connect2_LegacyShared.UBTConnect.css`
9. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css`

Rules below are those whose selector contains a class used on the captured page, grouped by the block that owns the element. Full source: `styles/bundle.css`.

## Layouts.Layout_LoginFlow

### .OSBlockWidget  (23 rules)
```css
.OSBlockWidget { display: inline; }
html[data-uieditorversion^="1"] .wizard-wrapper .OSBlockWidget {  }
html[data-uieditorversion^="1"] .wizard-wrapper .OSBlockWidget:first-child .wizard-item-icon-wrapper:before {  }
html[data-uieditorversion^="1"] .wizard-wrapper .OSBlockWidget:first-child .wizard-item-icon-wrapper.label-top {  }
html[data-uieditorversion^="1"] .wizard-wrapper.wizard-vertical .OSBlockWidget .wizard-wrapper-item.label-top {  }
html[data-uieditorversion^="1"] .wizard-wrapper.wizard-vertical .OSBlockWidget:last-child {  }
list-group, .osui-tabs__content > .ph > .OSBlockWidget, .osui-tabs__content > .placeholder-empty > .OSBlockWidget, .osui-tabs__content > .ph > .list.list-group, .osui-tabs__content > .placeholder-empty > .list.list-group { display:contents; }
.OSBlockWidget:has(> .inline-block), .OSBlockWidget:has(> .OSBlockWidget > .ubt-custom-container.inline-block) { display: inline-block; width: fit-content; }
.OSBlockWidget:has(> .script-block) { display: block; height: 0px; width: 0px; }
*/ .OSBlockWidget:has(> .ubt-with-fit-content), .ubt-with-fit-content { width: fit-content; display: inline-flex; }
.lazy-image-middle .OSBlockWidget:has(> .inline-block.ubt-avatar-image) { vertical-align: middle; }
.ubt-tag-list .OSBlockWidget:has(> .inline-block) { width: max-content; }
.OSBlockWidget:has(> .ubt-text-ellipsis) { overflow: hidden; }
.OSBlockWidget:has(> [data-block] > .ubt-button.flex-grow) { flex-grow: 1 }
.OSBlockWidget:has(> [data-block] > .ubt-button.flex-shrink) { flex-shrink: 1 }
.OSBlockWidget:has(> .ubt-badge) { display: flex; }
.horizontal-tabs-filter-container > .OSBlockWidget:has(.horizontal-tabs-list) { flex: 1 1 auto; min-width: 0; }
.Household_GalleryCard-list .OSBlockWidget:has(> .inline-block) { width: max-content; }
.list--gap-s > .OSBlockWidget { display: block; }
.list-horizontal--gap-xs > .OSBlockWidget { display: block; }
.my-profile__header .OSBlockWidget:has( > .ubt-avatar-image), .my-profile__header .OSBlockWidget:has( > .OSBlockWidget > .ubt-avatar-image) { display: inline; }
.connect-event-form__option-list .list > .OSBlockWidget > div { border-bottom: var(--connect-event-form-item-border); }
.connect-event-form__item-container > div > .OSBlockWidget:has( > .connect-event-form__option-list):last-child .list > .OSBlockWidget > div:last-child { border-bottom: none; }
```
### .ubt-layout--login  (3 rules)
```css
.ubt-layout--login { --ubt-pincode-button-color: var(--color-neutral-0); --buttontext: var(--color-neutral-0); position: relative; background: var(--color-neutral-0); color: var(--ubt-pincode-button-color); }
.ubt-layout--login .ubt-pincode__keyboard button, .ubt-layout--login__header a { color: var(--ubt-pincode-button-color); }
.ubt-lock-screen.ubt-layout--login { position: fixed; top:0; left: 0; }
```
### .ubt-layout--login__content  (8 rules)
```css
.ubt-layout--login__content, .ubt-layout--login__svg .svg-wrapper svg, .ubt-layout--login__content .ubt-pin-overlay, .ubt-layout--login__content .connect-login-screen { min-height: var(--ubt-login-svg-min-height); height: 100vh; width: 100vw; }
.ubt-layout--login__content .connect-login-screen { padding: var(--ubt-layout-login-padding); padding-top: var(--ubt-login-screen-padding-top); }
.ubt-layout--login__content { z-index: var(--layer-local-tier-1); position: relative; }
.ubt-layout--login__content .ubt-pin-overlay { background-color: transparent; }
.ubt-layout--login__content .ubt-pincode__keyboard-buttons .btn { transition: none; position: relative; }
.ubt-layout--login__content .ubt-pincode__keyboard-buttons .btn.animate { visibility: visible; }
.ubt-layout--login__content .ubt-pincode__keyboard-buttons .btn * { pointer-events: none; }
.ubt-layout--login__content .ubt-pincode__keyboard-buttons .btn .btn-animation { position: absolute; /* Center it over the button */ top: -2px; left: -2px; right: -2px; bottom: -2px; border-radius: 50%; /* The Glow Color */ box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8); /* Ignore clicks so they pass through to the button */ pointer-events: none; /* Run the animation immediately upon creation */ animation: ghostRipple 0.4s ease-out forwards; }
```
### .ubt-layout--login__header  (2 rules)
```css
.ubt-layout--login__header { position: absolute; height: var(--header-size); display: flex; align-items: center; margin: var(--space-base); margin-bottom: var(--space-none); margin-top: var(--status-bar-height); z-index: 2; }
.ubt-layout--login .ubt-pincode__keyboard button, .ubt-layout--login__header a { color: var(--ubt-pincode-button-color); }
```
### .ubt-layout--login__svg  (2 rules)
```css
.ubt-layout--login__content, .ubt-layout--login__svg .svg-wrapper svg, .ubt-layout--login__content .ubt-pin-overlay, .ubt-layout--login__content .connect-login-screen { min-height: var(--ubt-login-svg-min-height); height: 100vh; width: 100vw; }
.ubt-layout--login__svg .svg-wrapper { height: min-content !important; position: absolute; line-height: 0; }
```
## Layouts.SVG_Background_Custom

### .ubt-svg-container  (10 rules)
```css
.ubt-svg-container { width: 100%; height: 0px; overflow: visible; position: relative; top: calc(-1 * (var(--header-size) + var(--status-bar-height))); z-index: 1; font-size: 0px; /* Reseting font to make sure inline elements inside have 0px height */ }
.ubt-svg-container .svg-wrapper { height: min-content !important; width: 100%; }
.ubt-svg-container svg { width: 100%; height: auto; }
.ubt-svg-container.ubt-svg-container-full-height { top: 0; }
.ubt-svg-container:has(.ubt-loading-svg) { position: absolutFe; top: 50%; left: 50%; width: var(--loading-dot-size); height: var(--loading-dot-size) !important; display: none; }
.ubt-svg-container:has(.ubt-loading-svg) svg { height: 100%; }
.ubt-svg-container.ubt-fall-expand:has(.ubt-loading-svg) { display: block; width: 100%; height: 100%; top: 0%; transform: translate(-50%, -50%); }
.ubt-svg-container.ubt-loading-svg-complete { top: 0%; left: 0%; width: 100%; height: 100%; border-radius: 0%; display: block; z-index: 0; }
.ubt-svg-container.ubt-svg-container-full-height svg { /*height: calc(100vh + var(--status-bar-height));*/ height: var(--current-svg-height); }
.fade-enter.fade-enter-active:has(.ubt-svg-container) { transition: opacity 2000ms ease-in-out; }
```
### .ubt-svg-container-full-height  (2 rules)
```css
.ubt-svg-container.ubt-svg-container-full-height { top: 0; }
.ubt-svg-container.ubt-svg-container-full-height svg { /*height: calc(100vh + var(--status-bar-height));*/ height: var(--current-svg-height); }
```
## Utilities.InlineSVG

### .OSInline  (3 rules)
```css
.OSInline { display: inline-block; vertical-align: top; }
table.OSInline { display: inline-table; }
.floating-content.floating-content-full-width > .OSInline { display:inline; }
```
### .osui-inline-svg  (2 rules)
```css
.osui-progress-circle .osui-inline-svg { display:-webkit-inline-box; display:-ms-inline-flexbox; display:inline-flex; height:var(--circle-size) !important; position:relative; width:var(--circle-size); }
.osui-progress-circle .osui-inline-svg svg { height:var(--circle-size); width:var(--circle-size); }
```
### .svg-wrapper  (4 rules)
```css
.is-rtl .osui-progress-circle .svg-wrapper { -webkit-transform:scaleX(-1); -ms-transform:scaleX(-1); transform:scaleX(-1); }
.ubt-svg-container .svg-wrapper { height: min-content !important; width: 100%; }
.ubt-layout--login__content, .ubt-layout--login__svg .svg-wrapper svg, .ubt-layout--login__content .ubt-pin-overlay, .ubt-layout--login__content .connect-login-screen { min-height: var(--ubt-login-svg-min-height); height: 100vh; width: 100vw; }
.ubt-layout--login__svg .svg-wrapper { height: min-content !important; position: absolute; line-height: 0; }
```
## Adaptive.Columns2

### .align-items-center  (1 rule)
```css
.align-items-center { -webkit-box-align:center; -ms-flex-align:center; align-items:center; }
```
### .columns2  (2 rules)
```css
tem, .phone .columns.columns-medium-left.phone-break-middle > .columns-item, .phone .columns.columns-small-right.phone-break-middle > .columns-item, .phone .columns.columns-medium-right.phone-break-middle > .columns-item { -webkit-box-flex:0; -ms-flex:none; flex:none; width:100%; }
tablet .columns.columns-medium-left.tablet-break-middle > .columns-item, .tablet .columns.columns-small-right.tablet-break-middle > .columns-item, .tablet .columns.columns-medium-right.tablet-break-middle > .columns-item { -webkit-box-flex:0; -ms-flex:none; flex:none; width:100%; }
```
### .gutter-s  (5 rules)
```css
.columns.gutter-s { margin-left:calc(-1 * var(--space-s) / 2); margin-right:calc(-1 * var(--space-s) / 2); }
.columns.gutter-s > .columns-item { margin-bottom:var(--space-s); padding:var(--space-none) calc(var(--space-s) / 2); }
ly-child > .columns-item:not(:last-child), .tablet .columns.gutter-s.tablet-break-middle:only-child > .columns-item:not(:last-child), .tablet .columns.gutter-s.tablet-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-s); }
t:only-child > .columns-item:not(:last-child), .phone .columns.gutter-s.phone-break-middle:only-child > .columns-item:not(:last-child), .phone .columns.gutter-s.phone-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-s); }
.columns.ubt-columns.gutter-s { gap: var(--space-s) }
```
### .ubt-columns  (19 rules)
```css
> .columns-item:nth-child(2), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(1), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(3) { flex: 0; min-width: max-content; }
.ubt-columns.ubt-columns-same-size.ubt-columns--two-columns > .columns-item { flex: 1; }
.ubt-columns.ubt-columns--reverse { flex-direction: row-reverse; }
.ubt-columns.ubt-columns--reverse.ubt-columns-reduce-first > .columns-item:nth-child(2), .ubt-columns.ubt-columns--reverse.ubt-columns-reduce-last.ubt-columns--two-columns > .columns-item:nth-child(1) { flex: 0; }
.columns .ubt-columns.ubt-columns-same-size.ubt-columns--three-columns > .columns-item, .columns .ubt-columns.ubt-columns-same-size.ubt-columns--tow-columns > .columns-item { flex: 1; }
.ubt-columns:not(.ubt-columns--reverse) > .columns-item:first-child { padding-left: 0px; }
.ubt-columns:not(.ubt-columns--reverse) > .columns-item:last-child { padding-right: 0px; }
.ubt-columns.columns { margin-left: 0px; margin-right: 0px; }
.ubt-columns.ubt-columns--reverse .columns-item:first-child { padding-right: 0px; }
.ubt-columns.ubt-columns--reverse .columns-item:last-child { padding-left: 0px; }
.columns.ubt-columns > .columns-item { margin-bottom: unset; padding: unset; }
.columns.ubt-columns.gutter-none { gap: var(--space-none); }
.columns.ubt-columns.gutter-xs { gap: var(--space-xs) }
.columns.ubt-columns.gutter-s { gap: var(--space-s) }
.columns.ubt-columns.gutter-base { gap: var(--space-base) }
.columns.ubt-columns.gutter-m { gap: var(--space-m) }
.columns.ubt-columns.gutter-l { gap: var(--space-l) }
.columns.ubt-columns.gutter-xl { gap: var(--space-xl) }
.columns.ubt-columns.gutter-xxl { gap: var(--space-xxl) }
```
### .ubt-columns--two-columns  (3 rules)
```css
> .columns-item:nth-child(2), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(1), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(3) { flex: 0; min-width: max-content; }
.ubt-columns.ubt-columns-same-size.ubt-columns--two-columns > .columns-item { flex: 1; }
.ubt-columns.ubt-columns--reverse.ubt-columns-reduce-first > .columns-item:nth-child(2), .ubt-columns.ubt-columns--reverse.ubt-columns-reduce-last.ubt-columns--two-columns > .columns-item:nth-child(1) { flex: 0; }
```
### .ubt-columns-reduce-first  (2 rules)
```css
> .columns-item:nth-child(2), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(1), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(3) { flex: 0; min-width: max-content; }
.ubt-columns.ubt-columns--reverse.ubt-columns-reduce-first > .columns-item:nth-child(2), .ubt-columns.ubt-columns--reverse.ubt-columns-reduce-last.ubt-columns--two-columns > .columns-item:nth-child(1) { flex: 0; }
```
## ConnectPatterns.Icon

### .connect-icon-arrow_left_alt  (1 rule)
```css
.connect-icon-arrow_left_alt:before { content: "\f09e"; }
```
### .connect-icon-backspace  (1 rule)
```css
.connect-icon-backspace:before { content: "\f097"; }
```
### .icon-base  (1 rule)
```css
.icon-base { --ubt-icon-size: var(--ubt-icon-size-base); }
```
### .icon-display  (1 rule)
```css
.icon-display { --ubt-icon-size: var(--ubt-icon-size-display); }
```
### .text-inherit  (1 rule)
```css
.text-inherit { color: inherit; }
```
### .ubt-icon  (15 rules)
```css
[data-button].btn.ubt-pincode__button-fingerprint .ubt-icon { font-size: calc(var(--ubt-pincode-buttons-size) - 10px); }
.ubt-icon, .ubt-image-card__bookmarked:before, .ubt-statistics-item__bookmarked:before, .ubt-locality-contact-item__bookmarked:before { /* Use !important to prevent extensions from overriding this font. */ font-family: "connect-icon" !important; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; /* Better Font Rendering =========== */ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
/* .ubt-lazy-image--no-image .ubt-icon { font-size: inherit; }
.ubt-expandable-section.expanded .ubt-expandable-section--title-icon .icon, .ubt-expandable-section.expanded .ubt-expandable-section--title-icon .ubt-icon { transform: rotate(180deg); }
.ubt-icon-button__badge:has(.ubt-icon) { position: absolute; top: 14.645%; right: 14.645%; transform: translate(50%, -50%); }
.ubt-icon-button__badge:not(:has(.ubt-icon)) { display: none; }
.ubt-icon { display: grid; align-content: center; justify-content: center; font-size: var(--ubt-icon-size); }
.ubt-icon img { width: var(--ubt-icon-size); height: var(--ubt-icon-size); }
*/ .ubt-button .ubt-icon { font-size: var(--ubt-button-icon-size); color: inherit; }
.ubt-skeleton-section .ubt-icon:not(.ignore-loading) { border-radius: var(--border-radius-medium); color: transparent; }
an, .ubt-skeleton-section .ubt-skeleton-section__element, .ubt-skeleton-section .ubt-icon:not(.ignore-loading), .ubt-skeleton-section .form > div, .ubt-skeleton-section .osui-dropdown-search, .ubt-skeleton-section .badge { background: var(--ubt-background-skeleton-light); animation: var(--ubt-skeleton-animation); border-color: var(--ubt-background-skeleton-light) }
keleton-section *::before, .active-screen.screen-container .ubt-skeleton-section *::after, .ubt-skeleton-section input, .ubt-skeleton-section .osui-dropdown-search .vscomp-ele-wrapper, .ubt-skeleton-section .ubt-icon img { visibility: hidden; transition-property: visibility; transition-duration: 0ms; }
.login-button .ubt-icon { color: inherit; }
div:has(div > div.ubt-icon.header-filter-enabled) { position: relative; }
.directory-locality.ubt-icon { --ubt-icon-size: 18px; }
```
## BasePatterns.CustomText

### .font-regular  (1 rule)
```css
.font-regular { font-weight:var(--font-regular); }
```
### .font-semi-bold  (1 rule)
```css
.font-semi-bold { font-weight:var(--font-semi-bold); }
```
### .font-size-base  (1 rule)
```css
.font-size-base { font-size:var(--font-size-base); }
```
### .font-size-s  (1 rule)
```css
.font-size-s { font-size:var(--font-size-s); }
```
## PIN.PinCode

### .OSFillParent  (12 rules)
```css
.OSFillParent { display: block; width: 100%; }
table.OSFillParent { display: table; }
input.OSFillParent, button.OSFillParent, select.OSFillParent, textarea.OSFillParent { display: inline-block; box-sizing: border-box; }
.form.OSFillParent .form-control[class*=ThemeGrid_Width].not-valid ~ span.validation-message { left:22px; }
.phone .layout-native .form.OSFillParent .form-control[class*=ThemeGrid_Width].not-valid + span.validation-message { left:6px; }
ion-message, .phone .form span.input-text .form-control[class*=ThemeGrid_Width].not-valid.ThemeGrid_MarginGutter + span.validation-message, .phone .form-control[class*=ThemeGrid_Width].not-valid + span.validation-message { left:0; }
.is-rtl form.OSFillParent .form-control[class*=ThemeGrid_Width].not-valid ~ span.validation-message { left:initial; right:22px; }
[data-radio-button]:not(.OSFillParent):not([class*=ThemeGrid_Width]) {  }
button.OSFillParent { display:-webkit-inline-box; display:-ms-inline-flexbox; display:inline-flex; }
.carousel .carousel-container-content .OSFillParent { display:inline-block; }
.carousel .carousel-container-content .grid-gallery .OSFillParent { display:inherit; }
input.OSFillParent.calendar-input { display:none; }
```
### .connect-pin-screen  (2 rules)
```css
.ubt-layout-detail, .connect-pin-screen { --header-color: var(--color-neutral-0); --header-size: 50px; }
.active-screen:has(.ubt-pincode.connect-pin-screen.ubt-pin-overlay) .osui-bottom-sheet { z-index: 0; }
```
### .fa  (5 rules)
```css
.fa { display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale }
.fa.fa-pull-left { margin-right:.3em }
.fa.fa-pull-right { margin-left:.3em }
.fa.pull-left { margin-right:.3em }
.fa.pull-right { margin-left:.3em }
```
### .fa-circle-thin  (1 rule)
```css
.fa-circle-thin:before { content:"\f1db" }
```
### .icon  (17 rules)
```css
.osui-dropdown-search-ss-preview .icon {  }
.osui-dropdown-tags-ss-preview > .icon {  }
.osui-dropdown-tags-ss-preview > div > .icon {  }
.osui-dropdown-tags-ss-preview > div > .icon:before {  }
.desktop .list .list-item-selected .list-item-content-right .icon, .tablet.landscape .list .list-item-selected .list-item-content-right .icon { color:var(--text-color-primary, var(--color-primary)); }
.animated-label-text .icon { padding-right:var(--space-base); }
.breadcrumbs-item .icon { color:var(--text-color-neutral-7, var(--color-neutral-7)); display:-webkit-inline-box; display:-ms-inline-flexbox; display:inline-flex; font-size:var(--font-size-xs); -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; margin:var(--space-none) var(--space-s); width:auto; }
.is-rtl .pagination-button .icon { -webkit-transform:rotate(180deg); -ms-transform:rotate(180deg); transform:rotate(180deg); }
.wizard-item-icon .icon { font-size:var(--font-size-xs); width:auto; }
.icon-badge .icon { font-size:var(--font-size-h4); }
.layout-native .bottom-bar-wrapper .icon-badge .icon { font-size:inherit; }
.rating fieldset[disabled=true] .rating-item-filled .icon, .rating fieldset[disabled=true] .rating-item-half .icon { color:var(--text-color-neutral-6, var(--color-neutral-6)); }
.rating fieldset[disabled=true] .rating-item-empty .icon { color:var(--text-color-neutral-4, var(--color-neutral-4)); }
.has-accessible-features fieldset[disabled=true] .rating-item-filled .icon, .has-accessible-features fieldset[disabled=true] .rating-item-half .icon { color:var(--text-color-neutral-7, var(--color-neutral-7)); }
.has-accessible-features fieldset[disabled=true] .rating-item-empty .icon { color:var(--text-color-neutral-5, var(--color-neutral-5)); }
.ubt-expandable-section.expanded .ubt-expandable-section--title-icon .icon, .ubt-expandable-section.expanded .ubt-expandable-section--title-icon .ubt-icon { transform: rotate(180deg); }
.tag-item .tag .icon { font-size: 0.7em; }
```
### .list-group  (24 rules)
```css
.list.list-group { overflow:hidden; position:relative; }
.list.list-group > [data-block*=AnimatedLabel]:first-child .animated-label { margin-top:var(--space-s); }
rea-content.horizontal-scroll .osui-carousel .list.list-group, .scrollable-area-content.vertical-scroll .osui-deprecated.carousel .list.list-group, .scrollable-area-content.vertical-scroll .osui-carousel .list.list-group { overflow-x:initial; overflow-y:initial; }
.scrollable-area-content.horizontal-scroll, .scrollable-area-content.horizontal-scroll .list.list-group { overflow-x:auto; overflow-y:hidden; }
.scrollable-area-content.vertical-scroll, .scrollable-area-content.vertical-scroll .list.list-group { overflow-x:hidden; overflow-y:auto; }
.stackedcards .stackedcards-container .list.list-group { background-color:transparent; height:100%; z-index:var(--layer-global-screen); }
.stackedcards .stackedcards-container .list.list-group > :nth-child(1) { display:block; position:relative; }
.stackedcards .stackedcards-container, .stackedcards .stackedcards-container .list.list-group > * {  }
.stackedcards-container .list.list-group > * { height:100%; position:absolute; top:0; width:100%; will-change:transform, opacity; }
.stackedcards-container .list.list-group > * {  }
.pagination .list.list-group { overflow:initial; }
.carousel .carousel-container .list.list-group { background-color:transparent; white-space:nowrap; }
.carousel .carousel-container .list.list-group {  }
.carousel .list.list-group { overflow:initial; }
list-group, .osui-tabs__content > .ph > .OSBlockWidget, .osui-tabs__content > .placeholder-empty > .OSBlockWidget, .osui-tabs__content > .ph > .list.list-group, .osui-tabs__content > .placeholder-empty > .list.list-group { display:contents; }
.list.list-group.overflow-horizontal { overflow-x: auto; }
.ubt-tag-list.list.list-group { display: flex; overflow-x: scroll; -ms-overflow-style: none; /* Internet Explorer 10+ */ scrollbar-width: none; /* Firefox */ }
.ubt-tag-list.list.list-group::-webkit-scrollbar { display: none; /* Safari and Chrome */ }
.Household_GalleryCard-list.list.list-group { display: flex; justify-content: flex-start; overflow-x: scroll; -ms-overflow-style: none; /* Internet Explorer 10+ */ scrollbar-width: none; /* Firefox */ }
.Household_GalleryCard-list.list.list-group::-webkit-scrollbar { display: none; /* Safari and Chrome */ }
.calendar-list.list.list-group { display: flex; flex-direction: row; overflow-x: auto !important; scroll-snap-type: x mandatory; /* scroll-behavior: smooth;*/ scroll-snap-points-x: repeat(100vw); -webkit-overflow-scrolling: touch; /* border-bottom: 1px solid var(--color-neutral-11);*/ background-color: white; }
.calendar-list.list.list-group.calendar-list--day-view { /* border-bottom:0*/ }
.tag-list .list.list-group { display: flex; flex-direction:row; overflow: hidden; }
.tag-list.recent-search .list.list-group { flex-wrap: wrap; }
```
### .login-screen__connect-logo  (1 rule)
```css
.layout-native .login-screen [data-block="ConnectPatterns.Tile"] .login-screen__connect-logo { margin-top: var(--space-base); width: 210px; margin-bottom: var(--space-xxl); }
```
### .ubt-pin-overlay  (3 rules)
```css
.ubt-layout--login__content, .ubt-layout--login__svg .svg-wrapper svg, .ubt-layout--login__content .ubt-pin-overlay, .ubt-layout--login__content .connect-login-screen { min-height: var(--ubt-login-svg-min-height); height: 100vh; width: 100vw; }
.ubt-layout--login__content .ubt-pin-overlay { background-color: transparent; }
.active-screen:has(.ubt-pincode.connect-pin-screen.ubt-pin-overlay) .osui-bottom-sheet { z-index: 0; }
```
### .ubt-pincode  (2 rules)
```css
.ubt-pincode { height: 100vh; background: var(--color-background-login); display: flex; flex-direction: column; justify-content: center; padding: var(--ubt-pincode-padding); position: relative; }
.active-screen:has(.ubt-pincode.connect-pin-screen.ubt-pin-overlay) .osui-bottom-sheet { z-index: 0; }
```
### .ubt-pincode__button  (1 rule)
```css
.ubt-pincode__keyboard-buttons .btn.btn.ubt-pincode__button, .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-erase, .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-confirm { height: var(--ubt-pincode-buttons-size); width: var(--ubt-pincode-buttons-size); min-width: var(--ubt-pincode-buttons-size); padding: 10px; border: 2px solid var(--ubt-pincode-button-color); border-radius: 50%; color: var(--ubt-pincode-button-color); font-weight: bold; background-color: transparent; margin-bottom: var(--space-base); font-size: 21px; }
```
### .ubt-pincode__button-erase  (2 rules)
```css
.ubt-pincode__keyboard-buttons .btn.btn.ubt-pincode__button, .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-erase, .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-confirm { height: var(--ubt-pincode-buttons-size); width: var(--ubt-pincode-buttons-size); min-width: var(--ubt-pincode-buttons-size); padding: 10px; border: 2px solid var(--ubt-pincode-button-color); border-radius: 50%; color: var(--ubt-pincode-button-color); font-weight: bold; background-color: transparent; margin-bottom: var(--space-base); font-size: 21px; }
n-erase[disabled], .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-erase, .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-confirm, .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-confirm[disabled] { border: 0px; }
```
### .ubt-pincode__header  (1 rule)
```css
.ubt-pincode__header, .ubt-pincode__keyboard { z-index: 2; }
```
### .ubt-pincode__header-bar  (1 rule)
```css
.ubt-pincode__header-bar { position: absolute; top: 0; left: 0; width: 100%; }
```
### .ubt-pincode__header__pins  (1 rule)
```css
.ubt-pincode__header__pins { display: flex; justify-content: center; gap: var(--space-s); padding: var(--space-l) 0px; }
```
### .ubt-pincode__keyboard  (3 rules)
```css
.ubt-pincode__header, .ubt-pincode__keyboard { z-index: 2; }
.ubt-pincode__keyboard { margin-top: var(--space-m); flex: 2; display: flex; justify-content: space-between; flex-direction: column; }
.ubt-layout--login .ubt-pincode__keyboard button, .ubt-layout--login__header a { color: var(--ubt-pincode-button-color); }
```
### .ubt-pincode__keyboard-buttons  (7 rules)
```css
.ubt-pincode__keyboard-buttons { display: flex; justify-content: center; gap: var(--space-base); margin-bottom: var(--space-s) }
.ubt-pincode__keyboard-buttons .btn.btn.ubt-pincode__button, .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-erase, .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-confirm { height: var(--ubt-pincode-buttons-size); width: var(--ubt-pincode-buttons-size); min-width: var(--ubt-pincode-buttons-size); padding: 10px; border: 2px solid var(--ubt-pincode-button-color); border-radius: 50%; color: var(--ubt-pincode-button-color); font-weight: bold; background-color: transparent; margin-bottom: var(--space-base); font-size: 21px; }
n-erase[disabled], .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-erase, .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-confirm, .ubt-pincode__keyboard-buttons .btn.ubt-pincode__button-confirm[disabled] { border: 0px; }
.ubt-layout--login__content .ubt-pincode__keyboard-buttons .btn { transition: none; position: relative; }
.ubt-layout--login__content .ubt-pincode__keyboard-buttons .btn.animate { visibility: visible; }
.ubt-layout--login__content .ubt-pincode__keyboard-buttons .btn * { pointer-events: none; }
.ubt-layout--login__content .ubt-pincode__keyboard-buttons .btn .btn-animation { position: absolute; /* Center it over the button */ top: -2px; left: -2px; right: -2px; bottom: -2px; border-radius: 50%; /* The Glow Color */ box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8); /* Ignore clicks so they pass through to the button */ pointer-events: none; /* Run the animation immediately upon creation */ animation: ghostRipple 0.4s ease-out forwards; }
```
### .ubt-pincode__pin  (1 rule)
```css
.ubt-pincode__pin { width: var(--ubt-pincode-pin-size); height: var(--ubt-pincode-pin-size); line-height: var(--ubt-pincode-pin-size); font-size: var(--ubt-pincode-pin-size); }
```
## BasePatterns.CustomContainer

### .text-neutral-10  (1 rule)
```css
.text-neutral-10 { color:var(--text-color-neutral-10, var(--color-neutral-10)); }
```
### .text-underline  (1 rule)
```css
.text-underline { text-decoration: underline; }
```
### .ubt-custom-container  (1 rule)
```css
.OSBlockWidget:has(> .inline-block), .OSBlockWidget:has(> .OSBlockWidget > .ubt-custom-container.inline-block) { display: inline-block; width: fit-content; }
```
## CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction

### .connect-dialog-popup  (9 rules)
```css
.connect-dialog-popup .dx-dialog-footer button.btn { height: var(--ubt-button-height-s); flex-grow: 1; border-radius: var(--border-radius-medium); }
.connect-dialog-popup .dx-confirmation-dialog .dx-dialog-header { font-size: var(--font-size-base); }
.connect-dialog-popup .dx-dialog-footer .btn + .btn { margin-left: 0px; }
.connect-dialog-popup .dx-dialog-footer { display: flex; gap: var(--space-s); flex-direction: row-reverse; }
.connect-dialog-popup.connect-dialog-popup--vertical-buttons .dx-dialog-footer { flex-direction: column; }
.connect-dialog-popup.connect-dialog-popup--access-restricted .dx-dialog-footer { flex-direction: column; }
.connect-dialog-popup.connect-dialog-popup--access-restricted .access-restricted-body-icon { width: 50px; height: 50px; }
.connect-dialog-popup .dx-dialog-footer button.btn:not(.btn-primary) { border: none; }
.connect-dialog-popup .popup-dialog { border-radius: var(--border-radius-large); padding: var(--space-base) }
```
### .connect-dialog-popup--access-restricted  (2 rules)
```css
.connect-dialog-popup.connect-dialog-popup--access-restricted .dx-dialog-footer { flex-direction: column; }
.connect-dialog-popup.connect-dialog-popup--access-restricted .access-restricted-body-icon { width: 50px; height: 50px; }
```
### .subscription-pop-up  (1 rule)
```css
.subscription-pop-up [data-popup-backdrop] { z-index: 1005; }
```
## ConfirmationDialogs.ActionConfirmationDialog

### .dx-confirmation-dialog  (8 rules)
```css
.dx-confirmation-dialog .dx-dialog-header { font-size: var(--font-size-h4); font-weight: var(--font-semi-bold); }
.dx-confirmation-dialog .dx-dialog-header:not(:empty) { margin-bottom: var(--space-s); }
.dx-confirmation-dialog .dx-dialog-footer { margin-top: var(--space-m); }
.dx-confirmation-dialog .dx-dialog-footer .btn + .btn { margin-left: var(--space-base); }
.dx-confirmation-dialog > [data-popup-backdrop][data-expanded=false] + * { display: none !important; }
.dx-confirmation-dialog > [data-popup-backdrop][data-expanded=false] > [data-popup-dialog] { display: block; width: auto; height: auto; max-height: initial; max-width: initial; margin: var(--space-s) var(--space-m); padding: var(--space-m); background-color: #ffffff; border: 0; text-align: left; }
.dx-confirmation-dialog > [data-popup-backdrop][data-expanded=false] > [data-popup-dialog] > div > * { display: block !important; }
.connect-dialog-popup .dx-confirmation-dialog .dx-dialog-header { font-size: var(--font-size-base); }
```
## (page)

### .active-screen  (7 rules)
```css
.active-screen .osui-sidebar--is-open { opacity:1; -webkit-transform:none; -ms-transform:none; transform:none; -webkit-transition:-webkit-transform 330ms ease-out; transition:-webkit-transform 330ms ease-out; transition:transform 330ms ease-out; transition:transform 330ms ease-out, -webkit-transform 330ms ease-out; will-change:transform; }
.active-screen .osui-sidebar--is-open.osui-sidebar--has-overlay::before { opacity:1; pointer-events:initial; }
.os-high-contrast .active-screen .osui-sidebar--is-open { border-left:var(--border-size-m) solid var(--border-color-focus-outer, var(--color-focus-outer)); border-right:var(--border-size-m) solid var(--border-color-focus-outer, var(--color-focus-outer)); }
.active-screen.screen-container .sidebar.sidebar-open { -webkit-transform:none; -ms-transform:none; transform:none; -webkit-transition:all 330ms ease-out; transition:all 330ms ease-out; will-change:transform; }
keleton-section *::before, .active-screen.screen-container .ubt-skeleton-section *::after, .ubt-skeleton-section input, .ubt-skeleton-section .osui-dropdown-search .vscomp-ele-wrapper, .ubt-skeleton-section .ubt-icon img { visibility: hidden; transition-property: visibility; transition-duration: 0ms; }
.active-screen:has(.ubt-pincode.connect-pin-screen.ubt-pin-overlay) .osui-bottom-sheet { z-index: 0; }
body:has(.slide-from-left-leave:not(.active-screen)) .popup-backdrop { z-index: 1000; }
```
### .portrait  (5 rules)
```css
.tablet.portrait .layout-side.layout-native.aside-expandable .main .header { z-index:var(--layer-global-navigation); }
.android.portrait .app-menu-content { padding-top:max(var(--status-bar-height, 0px), var(--safe-area-inset-top, 0px)); }
.is-rtl:not(.portrait) .layout-side.layout-native.aside-visible .app-menu-content { right:0; }
.phone.ios.portrait .layout-native .floating-actions-wrapper { margin-bottom:var(--os-safe-area-bottom); }
.phone.portrait .osui-dropdown-serverside--at-content .osui-dropdown-serverside__balloon-container { --ballon-top-margin-value:calc(var(--header-size) + var(--header-size-content) + 5vw); }
```
### .screen-container  (9 rules)
```css
.screen-container { overflow-y: auto; height: 100vh; }
html, body, #reactContainer, #transitionContainer, .screen-container { height:100%; }
.screen-container { overflow-x:hidden; overflow-y:auto; }
.active-screen.screen-container .sidebar.sidebar-open { -webkit-transform:none; -ms-transform:none; transform:none; -webkit-transition:all 330ms ease-out; transition:all 330ms ease-out; will-change:transform; }
.fade-leave.screen-container { position:fixed; top:0; width:100%; z-index:var(--layer-global-negative); }
keleton-section *::before, .active-screen.screen-container .ubt-skeleton-section *::after, .ubt-skeleton-section input, .ubt-skeleton-section .osui-dropdown-search .vscomp-ele-wrapper, .ubt-skeleton-section .ubt-icon img { visibility: hidden; transition-property: visibility; transition-duration: 0ms; }
.screen-container.slide-from-right-enter-active ~ .dx-bottom-bar-slider, .screen-container.slide-from-left-enter-active ~ .dx-bottom-bar-slider { z-index: 1000; }
.screen-container .layout.ubt-layout-home.ubt-profile-screen { --header-size: 50px; }
.screen-container:has(.ubt-layout-home, .ubt-layout-main.layout-sticky-title, .ubt-layout-main, .ubt-layout-detail):has(.osui-bottom-sheet.osui-bottom-sheet--is-open) { overflow: hidden; touch-action: none; }
```
## Generic utility classes (too many rules to list; see bundle.css)

`.btn` (61), `.columns` (82), `.columns-item` (71), `.list` (92), `.phone` (235)

## Design tokens referenced by the rules above

- `--border-radius-large`: `16px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-medium`: `8px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-size-m`: `2px` (in `@charset "UTF-8";    :root`)
- `--color-background-login`: `#ffffff` (in `@charset "UTF-8";    :root`)
- `--color-focus-outer`: `#ffd337` (in `@charset "UTF-8";    :root`)
- `--color-neutral-0`: `#ffffff` (in `@charset "UTF-8";    :root`)
- `--color-neutral-10`: `#101213` (in `@charset "UTF-8";    :root`)
- `--color-neutral-11`: `#d8dcde` (in `:root`)
- `--color-neutral-4`: `#dee2e6` (in `@charset "UTF-8";    :root`)
- `--color-neutral-5`: `#ced4da` (in `@charset "UTF-8";    :root`)
- `--color-neutral-6`: `#adb5bd` (in `@charset "UTF-8";    :root`)
- `--color-neutral-7`: `#6a7178` (in `@charset "UTF-8";    :root`)
- `--color-primary`: `#1068eb` (in `@charset "UTF-8";    :root`); `var(--color-cyan-dark)` (in `:root, .connect-legacy-compatibily-containter`)
- `--connect-event-form-item-border`: `var(--border-size-s) solid var(--color-neutral-3)` (in `.connect-event-form`)
- `--current-svg-height`: `100vh` (in `:root`)
- `--font-regular`: `400` (in `@charset "UTF-8";    :root`)
- `--font-semi-bold`: `600` (in `@charset "UTF-8";    :root`)
- `--font-size-base`: `16px` (in `@charset "UTF-8";    :root`); `1rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h4`: `22px` (in `@charset "UTF-8";    :root`); `1.375rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-s`: `14px` (in `@charset "UTF-8";    :root`); `0.875rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-xs`: `12px` (in `@charset "UTF-8";    :root`); `0.75rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--header-size`: `56px` (in `@charset "UTF-8";    :root`); `103px` (in `.ubt-layout-main`); `58px` (in `.ubt-layout-home`); `50px` (in `.screen-container .layout.ubt-layout-home.ubt-profile-screen`)
- `--header-size-content`: `48px` (in `@charset "UTF-8";    :root`)
- `--layer-global-navigation`: `calc(var(--layer-above) + var(--layer-global-elevated))` (in `@charset "UTF-8";    :root`)
- `--layer-global-negative`: `-1` (in `@charset "UTF-8";    :root`)
- `--layer-global-screen`: `0` (in `@charset "UTF-8";    :root`)
- `--layer-local-tier-1`: `1` (in `@charset "UTF-8";    :root`)
- `--loading-dot-size`: `10px` (in `:root`)
- `--os-safe-area-bottom`: `max(env(safe-area-inset-bottom), var(--safe-area-inset-bottom, 0px))` (in `@charset "UTF-8";    :root`)
- `--space-base`: `16px` (in `@charset "UTF-8";    :root`); `16px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-l`: `32px` (in `@charset "UTF-8";    :root`); `32px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-m`: `24px` (in `@charset "UTF-8";    :root`); `24px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-none`: `0` (in `@charset "UTF-8";    :root`); `0` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-s`: `8px` (in `@charset "UTF-8";    :root`); `8px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xl`: `40px` (in `@charset "UTF-8";    :root`); `40px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xs`: `4px` (in `@charset "UTF-8";    :root`); `4px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xxl`: `48px` (in `@charset "UTF-8";    :root`); `48px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--ubt-background-skeleton-light`: `var(--color-neutral-3)` (in `:root`)
- `--ubt-button-height-s`: `40px` (in `:root`)
- `--ubt-button-icon-size`: `var(--ubt-icon-size-small)` (in `.ubt-button--xs`); `var(--ubt-icon-size-medium)` (in `.ubt-button--s`); `var(--ubt-icon-size-base)` (in `.ubt-button--m`)
- `--ubt-icon-size`: `var(--ubt-icon-size-base)` (in `:root`); `var(--ubt-icon-size-base)` (in `.ubt-avatar-image-base, .ubt-lazy-image-base, .ubt-lazy-image--width-base`); `var(--ubt-icon-size-non-standard-32)` (in `.ubt-avatar-image.ubt-lazy-image.ubt-lazy-image-base`); `var(--ubt-icon-size-medium)` (in `.ubt-avatar-image-xxs, .ubt-lazy-image-xxs`)
- `--ubt-icon-size-base`: `24px` (in `:root`)
- `--ubt-icon-size-display`: `36px` (in `:root`)
- `--ubt-layout-login-padding`: `var(--ubt-pincode-padding, var(--ubt-layout-login-padding-top) var(--space-base) var(--space-l) var(--space-base))` (in `:root`)
- `--ubt-login-screen-padding-top`: `calc(var(--ubt-layout-login-padding-top) + 80px)` (in `:root`)
- `--ubt-login-svg-min-height`: `732px` (in `:root`)
- `--ubt-pincode-button-color`: `var(--color-neutral-8)` (in `:root`); `var(--color-neutral-0)` (in `.ubt-layout--login`)
- `--ubt-pincode-buttons-size`: `64px` (in `:root`)
- `--ubt-pincode-padding`: `var(--ubt-pincode-padding-top) var(--space-base) var(--space-l) var(--space-base)` (in `:root`)
- `--ubt-pincode-pin-size`: `16px` (in `:root`)
- `--ubt-skeleton-animation`: `ubt-skeleton-pulse 1.5s ease-in-out infinite` (in `:root`)
