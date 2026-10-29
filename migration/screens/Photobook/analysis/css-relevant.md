# CSS relevant to Photobook

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

## LayoutRuntime_NavigationHandler.LayoutRuntime_Top

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
## Layouts.Layout_LoginFlow

### .connect-legacy-compatibily-containter  (4 rules)
```css
:root, .connect-legacy-compatibily-containter { /* Primary color palette - Redifining the cyan palette as it wn't be used and matched the primary color */ --color-cyan-lightest: #EDF6F8; --color-cyan-lighter: #D2EBEE; --color-cyan-light: #AAD8E0; --color-cyan: #4EAEC2; --color-cyan-dark: #00819C; --color-cyan-darker: #005668; --color-cyan-darkest: #003945; --color-cyan-dark-linear-gradient: linear-gradient(90deg, var(--color-cyan-dark) 0%, var( }
:root, .connect-legacy-compatibily-containter { --font-size-h0: 3.625rem; --font-size-display: 2.25rem; --font-size-h1: 2rem; --font-size-h2: 1.75rem; --font-size-h3: 1.625rem; --font-size-h4: 1.375rem; --font-size-h5: 1.25rem; --font-size-h6: 1.125rem; --font-size-base: 1rem; --font-size-s: 0.875rem; --font-size-xs: 0.75rem; --font-size-label: 0.688rem; --font-size-xxs: 0.625rem; --font-medium: 500; }
:root, .connect-legacy-compatibily-containter { --border-radius-medium: 8px; --border-radius-large: 16px; --border-radius-rounded: 100px; }
:root, .connect-legacy-compatibily-containter { --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.1); --shadow-xs-top: 0 -1px 2px rgba(0, 0, 0, 0.1); --shadow-s: -2px 4px 4px rgba(0, 0, 0, 0.1); --shadow-m: -2px 6px 6px rgba(0, 0, 0, 0.1); --shadow-l: -2px 6px 8px rgba(0, 0, 0, 0.1); --shadow-xl: 0px 8px 10px 0px rgba(0, 0, 0, 0.1); --shadow-s2: -1px 2px 4.4px 0px rgba(0, 0, 0, 0.35), 2px -2px 7.8px 0px rgba(210, 235, 238, 1) inset; }
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
### .ubt-lock-screen  (3 rules)
```css
.ubt-lock-screen { position: fixed; top: 0; z-index: 9999; max-height: 100vh; overflow: scroll; }
.ubt-lock-screen.ubt-layout--login { position: fixed; top:0; left: 0; }
.ubt-lock-screen:not(:has(.pincode-unlock)):not(:has(.unsupported-card)) { display:none; }
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
## Directory_Photobook.Photobook_Carousel

### .photobook-carousel  (29 rules)
```css
.photobook-carousel { height: 100vh; width: 100vw; }
.photobook-carousel .photobook-carousel-item { position: relative; height: 100vh; overflow: hidden; }
.photobook-carousel .photobook-carousel-item-cont { position: absolute; top: 0; }
.photobook-carousel .photobook-carousel-item-cont:has(.photobook-carousel-background-image) { z-index: 1; filter: blur(3px); transform: scale(1.05); }
.photobook-carousel .photobook-carousel-item-cont:has(.photobook-carousel-foreground-image) { z-index: 2; }
.photobook-carousel .osui-carousel .splide .photobook-carousel-foreground-image img { object-position: center center; object-fit: contain; }
.photobook-carousel .osui-carousel .splide .photobook-carousel-background-image img { object-position: center center; object-fit: cover; }
.photobook-carousel .photobook-carousel-title-cont { position: absolute; top: var(--space-base); left: 0; width: 100vw; z-index: 3; }
.photobook-carousel .photobook-carousel-title-background { backdrop-filter: blur(2px); }
.photobook-carousel .photobook-gallery { position: absolute; bottom: 0; left: 0; width: 100vw; height: auto; }
.photobook-carousel .list.photobook-gallery--list { overflow-x: scroll; display: flex; background-color: transparent; padding-left: 50vw; padding-right: 50vw; }
.photobook-carousel .list.photobook-gallery--list > *:not(script):not(:last-of-type) { margin-right: var(--space-s); }
.photobook-carousel .photobook-gallery--item { overflow: hidden; min-height: 40px; height: 40px; max-height: 40px; min-width: 32px; width: 32px; max-width: 32px; }
.photobook-carousel .photobook-gallery--item .ubt-lazy-image img { object-fit: cover; }
.photobook-carousel .photobook-gallery .photobook-gallery--counter { margin-bottom: var(--space-s); }
.photobook-carousel .photobook-carousel--top-left { position: absolute; top: 0; left: 0; margin: var(--space-m) 0 0 var(--space-m); z-index: 1; }
.photobook-carousel .photobook-carousel--top-right { position: absolute; top: 0; right: 0; margin: var(--space-m) var(--space-m) 0 0; z-index: 1; }
.photobook-carousel .photobook-carousel--player { position: absolute; top: calc(50vh - 32px); left: calc(50vw - 32px); z-index: 1; }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet { max-width: 55vw; left: 22.5vw; }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed .osui-bottom-sheet__content { background-color: var(--color-neutral-2); padding-top: var(--space-s); }
.landscape .photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet .osui-bottom-sheet__content { padding-right: calc(var(--space-s) + var(--os-safe-area-right)); padding-left: calc(var(--space-s) + var(--os-safe-area-left)); padding-bottom: calc(var(--space-s) + var(--os-safe-area-bottom)); }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed .ubt-bottom-sheet--content { background-color: var(--color-neutral-0); padding: var(--space-s) var(--space-base); border-radius: 0 0 var(--border-radius-soft) var(--border-radius-soft); }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed [data-radio-button]:has(.photobook-carousel--radio-button) { flex-direction: row-reverse; justify-content: space-between; margin: 0; padding: var(--space-s) 0; border-bottom: var(--border-size-m) solid var(--color-neutral-2); }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed [data-radio-button]:last-of-type:has(.photobook-carousel--radio-button) { border: 0; }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed .photobook-carousel--radio-button:before { border: var(--border-size-m) solid var(--color-neutral-7); }
```
## Interaction.Carousel

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
### .is-active  (12 rules)
```css
.splide.is-initialized:not(.is-active) .splide__list { display:block; }
.splide__toggle.is-active .splide__toggle__play, .splide__toggle__pause { display:none; }
.splide__toggle.is-active .splide__toggle__pause { display:inline; }
.splide__track--fade > .splide__list > .splide__slide.is-active { opacity:1; z-index:1; }
.splide__pagination__page.is-active { background:#fff; -webkit-transform:scale(1.4); -ms-transform:scale(1.4); transform:scale(1.4); z-index:1; }
.splide__track--nav > .splide__list > .splide__slide.is-active { border:3px solid #000; }
.osui-carousel .splide__pagination__page.is-active { background-color:var(--background-color-primary, var(--color-primary)); z-index:var(--layer-local-tier-1); }
.splide__track--fade > .splide__list > .splide__slide.is-active { z-index:var(--layer-local-tier-1); }
.choices__list.choices__list--dropdown.is-active { margin-top:var(--space-xs); }
.choices__list--dropdown.is-active { display:block; }
.section-expandable-content .choices__list--dropdown.is-active { position:relative; }
.ubt-services-carousel .splide__pagination__page.is-active { width: 15px; height: 10px; border: var(--border-size-m) solid var(--color-primary); border-radius: var(--border-radius-medium); background-color: var(--color-primary-lightest); -webkit-transform: unset; -ms-transform: unset; transform: unset; }
```
### .is-initialized  (2 rules)
```css
.splide.is-initialized:not(.is-active) .splide__list { display:block; }
.splide.is-initialized, .splide.is-rendered { visibility:visible; }
```
### .is-overflow  (1 rule)
```css
.splide:not(.is-overflow) .splide__pagination { display:none; }
```
### .list-group  (25 rules)
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
.list.list-group.recent-search-list { display: flex; gap: var(--space-s); overflow: hidden; overflow-x: auto; /* beats the theme's overflow: hidden */ }
.Household_GalleryCard-list.list.list-group { display: flex; justify-content: flex-start; overflow-x: scroll; -ms-overflow-style: none; /* Internet Explorer 10+ */ scrollbar-width: none; /* Firefox */ }
.Household_GalleryCard-list.list.list-group::-webkit-scrollbar { display: none; /* Safari and Chrome */ }
.calendar-list.list.list-group { display: flex; flex-direction: row; overflow-x: auto !important; scroll-snap-type: x mandatory; /* scroll-behavior: smooth;*/ scroll-snap-points-x: repeat(100vw); -webkit-overflow-scrolling: touch; /* border-bottom: 1px solid var(--color-neutral-11);*/ background-color: white; }
.calendar-list.list.list-group.calendar-list--day-view { /* border-bottom:0*/ }
.tag-list .list.list-group { display: flex; flex-direction:row; overflow: hidden; }
.tag-list.recent-search .list.list-group { flex-wrap: wrap; }
```
### .osui-carousel  (17 rules)
```css
.osui-carousel { --osui-carousel-track-width:100%; --osui-carousel-pagination-margin:30px; }
.osui-carousel .splide__arrow { background-color:var(--background-color-neutral-0, var(--color-neutral-0)); -webkit-box-shadow:var(--shadow-xs); box-shadow:var(--shadow-xs); height:40px; opacity:1; -webkit-transition:opacity 150ms linear; transition:opacity 150ms linear; width:40px; will-change:opacity; z-index:var(--layer-local-tier-1); }
.osui-carousel .splide__arrow[disabled] { cursor:default; opacity:0.3; }
.osui-carousel .splide__arrow svg { height:14px; width:14px; }
.osui-carousel .splide__arrow svg path { fill:var(--text-color-neutral-7, var(--color-neutral-7)); }
.osui-carousel .splide__arrow {  }
.osui-carousel .splide__pagination { margin:0; z-index:var(--layer-local-tier-1); }
.osui-carousel .splide__pagination__page.is-active { background-color:var(--background-color-primary, var(--color-primary)); z-index:var(--layer-local-tier-1); }
.osui-carousel .splide__list { -webkit-transform-style:flat; transform-style:flat; }
.osui-carousel .splide--draggable, .osui-carousel .splide.splide--draggable { cursor:-webkit-grab; cursor:grab; }
.osui-carousel .splide img { height:100%; -o-object-fit:cover; object-fit:cover; }
.osui-carousel .list:not([data-virtualization-disabled]), .osui-carousel .list:not([data-animation-disabled]) {  }
.osui-carousel .list:not([data-virtualization-disabled]):after, .osui-carousel .list:not([data-animation-disabled]):after { base64,iVBORw0KGgoAAAANSUhEUgAAASMAAADhCAIAAAAMFURxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3L }
.has-accessible-features .osui-carousel .splide__pagination__page { height:12px; margin:6px; width:12px; }
rea-content.horizontal-scroll .osui-carousel .list.list-group, .scrollable-area-content.vertical-scroll .osui-deprecated.carousel .list.list-group, .scrollable-area-content.vertical-scroll .osui-carousel .list.list-group { overflow-x:initial; overflow-y:initial; }
.photobook-carousel .osui-carousel .splide .photobook-carousel-foreground-image img { object-position: center center; object-fit: contain; }
.photobook-carousel .osui-carousel .splide .photobook-carousel-background-image img { object-position: center center; object-fit: cover; }
```
### .osui-carousel__content  (3 rules)
```css
.osui-carousel__content {  }
.osui-carousel__content > .list { overflow:unset; }
.osui-carousel__content > .list {  }
```
### .osui-carousel__track  (2 rules)
```css
.osui-carousel__track { max-width:100%; width:var(--osui-carousel-track-width); z-index:var(--layer-global-screen); }
.osui-carousel__track {  }
```
### .splide  (19 rules)
```css
.splide.is-initialized:not(.is-active) .splide__list { display:block; }
.splide:not(.is-overflow) .splide__pagination { display:none; }
.splide { position:relative; visibility:hidden; }
.splide.is-initialized, .splide.is-rendered { visibility:visible; }
.splide.is-focus-in .splide__arrow:focus { outline:3px solid #0bf; outline-offset:3px; }
.splide.is-focus-in .splide__pagination__page:focus { outline:3px solid #0bf; outline-offset:3px; }
.splide.is-focus-in .splide__slide:focus { outline:3px solid #0bf; outline-offset:-3px; }
.splide.is-focus-in .splide__slide:focus { border:3px solid #0bf; }
.splide.is-focus-in .splide__track > .splide__list > .splide__slide:focus { border-color:#0bf; }
.splide.is-focus-in .splide__toggle:focus { outline:3px solid #0bf; outline-offset:3px; }
.osui-carousel .splide--draggable, .osui-carousel .splide.splide--draggable { cursor:-webkit-grab; cursor:grab; }
.osui-carousel .splide img { height:100%; -o-object-fit:cover; object-fit:cover; }
.osui-carousel--has-pagination:not(.splide) .splide__pagination { bottom:calc(var(--osui-carousel-pagination-margin) * -1); }
.osui-carousel--has-pagination.splide .splide__arrow { top:calc(50% - (var(--osui-carousel-pagination-margin)) / 2); }
.osui-carousel--has-pagination.splide .splide__pagination { bottom:0; }
.is-rtl .splide.splide--ltr { direction:ltr; }
.is-rtl .splide.splide--rtl { direction:rtl; }
.photobook-carousel .osui-carousel .splide .photobook-carousel-foreground-image img { object-position: center center; object-fit: contain; }
.photobook-carousel .osui-carousel .splide .photobook-carousel-background-image img { object-position: center center; object-fit: cover; }
```
### .splide--draggable  (1 rule)
```css
.osui-carousel .splide--draggable, .osui-carousel .splide.splide--draggable { cursor:-webkit-grab; cursor:grab; }
```
### .splide--ltr  (1 rule)
```css
.is-rtl .splide.splide--ltr { direction:ltr; }
```
### .splide__list  (11 rules)
```css
.splide__list { -webkit-backface-visibility:hidden; backface-visibility:hidden; display:-ms-flexbox; display:-webkit-box; display:flex; height:100%; margin:0 !important; padding:0 !important; }
.splide.is-initialized:not(.is-active) .splide__list { display:block; }
.splide__track--fade > .splide__list > .splide__slide { margin:0 !important; opacity:0; z-index:0; }
.splide__track--fade > .splide__list > .splide__slide.is-active { opacity:1; z-index:1; }
.splide__track--ttb > .splide__list { display:block; }
.splide.is-focus-in .splide__track > .splide__list > .splide__slide:focus { border-color:#0bf; }
.splide__track--nav > .splide__list > .splide__slide { border:3px solid transparent; cursor:pointer; }
.splide__track--nav > .splide__list > .splide__slide.is-active { border:3px solid #000; }
.osui-carousel .splide__list { -webkit-transform-style:flat; transform-style:flat; }
.splide__track--fade > .splide__list > .splide__slide { z-index:var(--layer-global-screen); }
.splide__track--fade > .splide__list > .splide__slide.is-active { z-index:var(--layer-local-tier-1); }
```
### .splide__track  (2 rules)
```css
.splide__track { overflow:hidden; position:relative; z-index:0; }
.splide.is-focus-in .splide__track > .splide__list > .splide__slide:focus { border-color:#0bf; }
```
### .splide__track--draggable  (1 rule)
```css
.splide__track--draggable { -webkit-touch-callout:none; -webkit-user-select:none; -ms-user-select:none; -moz-user-select:none; user-select:none; }
```
## Directory_Photobook.Photobook_Item

### .splide__slide  (16 rules)
```css
.splide__slide { -webkit-backface-visibility:hidden; backface-visibility:hidden; -webkit-box-sizing:border-box; box-sizing:border-box; -ms-flex-negative:0; flex-shrink:0; list-style-type:none !important; margin:0; position:relative; }
.splide__slide img { vertical-align:bottom; }
.splide__track--fade > .splide__list > .splide__slide { margin:0 !important; opacity:0; z-index:0; }
.splide__track--fade > .splide__list > .splide__slide.is-active { opacity:1; z-index:1; }
.splide__slide { -webkit-tap-highlight-color:rgba(0, 0, 0, 0); }
.splide__slide:focus { outline:0; }
.splide__slide:focus-visible { outline:3px solid #0bf; outline-offset:-3px; }
.splide__slide:focus-visible { border:3px solid #0bf; }
.splide.is-focus-in .splide__slide:focus { outline:3px solid #0bf; outline-offset:-3px; }
.splide.is-focus-in .splide__slide:focus { border:3px solid #0bf; }
.splide.is-focus-in .splide__track > .splide__list > .splide__slide:focus { border-color:#0bf; }
.splide__track--nav > .splide__list > .splide__slide { border:3px solid transparent; cursor:pointer; }
.splide__track--nav > .splide__list > .splide__slide.is-active { border:3px solid #000; }
.has-accessible-features .splide__slide { -webkit-box-shadow:none; box-shadow:none; }
.splide__track--fade > .splide__list > .splide__slide { z-index:var(--layer-global-screen); }
.splide__track--fade > .splide__list > .splide__slide.is-active { z-index:var(--layer-local-tier-1); }
```
## BasePatterns.CustomContainer

### .align-items-center  (1 rule)
```css
.align-items-center { -webkit-box-align:center; -ms-flex-align:center; align-items:center; }
```
### .background-neutral-9  (1 rule)
```css
.background-neutral-9 { background-color:var(--background-color-neutral-9, var(--color-neutral-9)); }
```
### .border-color-neutral-0  (1 rule)
```css
.border-color-neutral-0 { border-color: var(--color-neutral-0); --border-color: var(--color-neutral-0); }
```
### .border-m  (1 rule)
```css
.border-size-m, .border-m { border: var(--border-size-m) solid var(--border-color, currentColor); }
```
### .border-radius-circle  (1 rule)
```css
.border-radius-circle { border-radius:var(--border-radius-circle); }
```
### .border-radius-none  (1 rule)
```css
.border-radius-none { border-radius:var(--border-radius-none); }
```
### .border-radius-rounded  (2 rules)
```css
.border-radius-rounded { border-radius:var(--border-radius-rounded); }
.border-radius-rounded.form-control[data-input], .border-radius-rounded.form-control[data-textarea], .border-radius-rounded.dropdown-container > div.dropdown-display { border-radius: var(--border-radius-rounded); }
```
### .border-radius-soft  (1 rule)
```css
.border-radius-soft { border-radius:var(--border-radius-soft); }
```
### .border-s  (1 rule)
```css
.border-size-s, .border-s { border: var(--border-size-s) solid var(--border-color, currentColor); }
```
### .display-flex  (1 rule)
```css
.display-flex { display:-webkit-box; display:-ms-flexbox; display:flex; }
```
### .flex-direction-column  (2 rules)
```css
.counter .center-align.flex-direction-column { -webkit-box-align:center; -ms-flex-align:center; align-items:center; -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; }
.flex-direction-column { -webkit-box-orient:vertical; -webkit-box-direction:normal; -ms-flex-direction:column; flex-direction:column; }
```
### .flex-direction-row  (8 rules)
```css
.card-sectioned.flex-direction-row .card-image { padding:var(--space-m) var(--space-none) var(--space-m) var(--space-m); }
.card-sectioned.flex-direction-row .card-image.padding-none { padding:var(--space-none); }
.card-sectioned.flex-direction-row .card-sectioned-right .card-image { -webkit-box-ordinal-group:3; -ms-flex-order:2; order:2; padding:var(--space-m) var(--space-m) var(--space-m) var(--space-none); }
.card-sectioned.flex-direction-row .card-sectioned-right .card-image.padding-none { padding:var(--space-none); }
.layout-native .card-sectioned.flex-direction-row .card-image { padding:var(--space-base) var(--space-none) var(--space-base) var(--space-base); }
.layout-native .card-sectioned.flex-direction-row .card-image.padding-none { padding:var(--space-none); }
.counter .center-align.flex-direction-row { -webkit-box-align:center; -ms-flex-align:center; align-items:center; -webkit-box-pack:justify; -ms-flex-pack:justify; justify-content:space-between; }
.flex-direction-row { -webkit-box-orient:horizontal; -webkit-box-direction:normal; -ms-flex-direction:row; flex-direction:row; }
```
### .justify-content-center  (1 rule)
```css
.justify-content-center { -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; }
```
### .justify-content-flex-end  (1 rule)
```css
.justify-content-flex-end { -webkit-box-pack:end; -ms-flex-pack:end; justify-content:flex-end; }
```
### .margin-bottom-base  (1 rule)
```css
.margin-bottom-base { margin-bottom:var(--space-base); }
```
### .margin-left-base  (2 rules)
```css
.margin-left-base { margin-left:var(--space-base); }
.is-rtl .margin-left-base { margin-left:var(--space-none); margin-right:var(--space-base); }
```
### .padding-s  (1 rule)
```css
.padding-s { padding:var(--space-s); }
```
### .padding-x-base  (1 rule)
```css
.padding-x-base { padding-left:var(--space-base); padding-right:var(--space-base); }
```
### .padding-x-xxl  (1 rule)
```css
.padding-x-xxl { padding-left:var(--space-xxl); padding-right:var(--space-xxl); }
```
### .padding-y-s  (1 rule)
```css
.padding-y-s { padding-bottom:var(--space-s); padding-top:var(--space-s); }
```
### .padding-y-xs  (1 rule)
```css
.padding-y-xs { padding-bottom:var(--space-xs); padding-top:var(--space-xs); }
```
### .photobook-carousel--player  (1 rule)
```css
.photobook-carousel .photobook-carousel--player { position: absolute; top: calc(50vh - 32px); left: calc(50vw - 32px); z-index: 1; }
```
### .photobook-carousel--top-left  (1 rule)
```css
.photobook-carousel .photobook-carousel--top-left { position: absolute; top: 0; left: 0; margin: var(--space-m) 0 0 var(--space-m); z-index: 1; }
```
### .photobook-carousel--top-right  (1 rule)
```css
.photobook-carousel .photobook-carousel--top-right { position: absolute; top: 0; right: 0; margin: var(--space-m) var(--space-m) 0 0; z-index: 1; }
```
### .photobook-carousel-background-image  (2 rules)
```css
.photobook-carousel .photobook-carousel-item-cont:has(.photobook-carousel-background-image) { z-index: 1; filter: blur(3px); transform: scale(1.05); }
.photobook-carousel .osui-carousel .splide .photobook-carousel-background-image img { object-position: center center; object-fit: cover; }
```
### .photobook-carousel-foreground-image  (2 rules)
```css
.photobook-carousel .photobook-carousel-item-cont:has(.photobook-carousel-foreground-image) { z-index: 2; }
.photobook-carousel .osui-carousel .splide .photobook-carousel-foreground-image img { object-position: center center; object-fit: contain; }
```
### .photobook-carousel-item  (1 rule)
```css
.photobook-carousel .photobook-carousel-item { position: relative; height: 100vh; overflow: hidden; }
```
### .photobook-carousel-item-cont  (3 rules)
```css
.photobook-carousel .photobook-carousel-item-cont { position: absolute; top: 0; }
.photobook-carousel .photobook-carousel-item-cont:has(.photobook-carousel-background-image) { z-index: 1; filter: blur(3px); transform: scale(1.05); }
.photobook-carousel .photobook-carousel-item-cont:has(.photobook-carousel-foreground-image) { z-index: 2; }
```
### .photobook-carousel-title-background  (1 rule)
```css
.photobook-carousel .photobook-carousel-title-background { backdrop-filter: blur(2px); }
```
### .photobook-carousel-title-cont  (1 rule)
```css
.photobook-carousel .photobook-carousel-title-cont { position: absolute; top: var(--space-base); left: 0; width: 100vw; z-index: 3; }
```
### .photobook-gallery  (2 rules)
```css
.photobook-carousel .photobook-gallery { position: absolute; bottom: 0; left: 0; width: 100vw; height: auto; }
.photobook-carousel .photobook-gallery .photobook-gallery--counter { margin-bottom: var(--space-s); }
```
### .photobook-gallery--counter  (1 rule)
```css
.photobook-carousel .photobook-gallery .photobook-gallery--counter { margin-bottom: var(--space-s); }
```
### .photobook-gallery--item  (2 rules)
```css
.photobook-carousel .photobook-gallery--item { overflow: hidden; min-height: 40px; height: 40px; max-height: 40px; min-width: 32px; width: 32px; max-width: 32px; }
.photobook-carousel .photobook-gallery--item .ubt-lazy-image img { object-fit: cover; }
```
### .photobook-gallery--list  (2 rules)
```css
.photobook-carousel .list.photobook-gallery--list { overflow-x: scroll; display: flex; background-color: transparent; padding-left: 50vw; padding-right: 50vw; }
.photobook-carousel .list.photobook-gallery--list > *:not(script):not(:last-of-type) { margin-right: var(--space-s); }
```
### .ubt-custom-container  (1 rule)
```css
.OSBlockWidget:has(> .inline-block), .OSBlockWidget:has(> .OSBlockWidget > .ubt-custom-container.inline-block) { display: inline-block; width: fit-content; }
```
### .ubt-lazy-image  (10 rules)
```css
.ubt-lazy-image { overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; text-align: center; max-width: unset; width: var(--lazy-image-width, fit-content); height: var(--avatar-image-size); max-height: var(--avatar-image-size); justify-self: center; }
.ubt-lazy-image.hidden { --avatar-image-size: 0px; --lazy-image-width: 0px; }
.ubt-lazy-image img { height: var(--avatar-image-size); max-height: var(--avatar-image-size); width: var(--lazy-image-width, auto); }
.ubt-lazy-image.ubt-lazy-image-background, .ubt-lazy-image.ubt-lazy-image-background img { height: var(--_ubt-background-image-size); max-height: var(--_ubt-background-image-size); }
.ubt-lazy-image.ubt-lazy-image--no-image.ubt-background-image--intrinsic-height { min-height: var(--_ubt-background-image-size); height: var(--_ubt-background-image-size); }
.ubt-lazy-image.ubt-lazy-image--no-image.ubt-background-image--intrinsic-width { min-width: var(--_ubt-background-image-size); width: var(--_ubt-background-image-size); }
.ubt-avatar-image.ubt-lazy-image.ubt-lazy-image-base { --ubt-icon-size: var(--ubt-icon-size-non-standard-32); }
.ubt-object-fit-avatar-img .ubt-avatar-image img, .ubt-object-fit-avatar-img .ubt-lazy-image img { height: 100%; width: 100%; object-fit: cover; }
.photobook-carousel .photobook-gallery--item .ubt-lazy-image img { object-fit: cover; }
.shareable-object-generic .ubt-lazy-image:not(.ubt-lazy-image--no-image) img { aspect-ratio: 100/58; object-fit: cover; }
```
### .ubt-lazy-image--width-auto  (2 rules)
```css
.ubt-lazy-image--width-auto { --lazy-image-width: auto; }
.ubt-background-image--intrinsic-height.ubt-lazy-image--width-auto { --_ubt-background-image-size: var(--lazy-image-width); }
```
### .ubt-lazy-image--width-max-width  (2 rules)
```css
.ubt-lazy-image--width-max-width { --lazy-image-width: 100vw; }
.ubt-avatar-image-max-height, .ubt-lazy-image-max-height, .ubt-lazy-image--width-max-width { --avatar-initials-font-size: var(--font-size-h0); }
```
### .ubt-lazy-image-auto  (1 rule)
```css
.ubt-avatar-image-auto, .ubt-lazy-image-auto { --avatar-image-size: auto; }
```
### .ubt-lazy-image-max-height  (2 rules)
```css
.ubt-avatar-image-max-height, .ubt-lazy-image-max-height { --avatar-image-size: 100vh; }
.ubt-avatar-image-max-height, .ubt-lazy-image-max-height, .ubt-lazy-image--width-max-width { --avatar-initials-font-size: var(--font-size-h0); }
```
### .ubt-lazy-image-s  (2 rules)
```css
.ubt-avatar-image-s, .ubt-lazy-image-s { --avatar-image-size: 40px; }
.ubt-avatar-image-s, .ubt-lazy-image-s, .ubt-lazy-image--width-s { --avatar-initials-font-size: var(--font-size-s); }
```
### .visibility-hidden  (1 rule)
```css
.visibility-hidden { visibility: hidden; }
```
### .visibility-visible  (1 rule)
```css
.visibility-visible { visibility: visible; }
```
## BasePatterns.CustomText

### .font-bold  (1 rule)
```css
.font-bold { font-weight:var(--font-bold); }
```
### .font-semi-bold  (1 rule)
```css
.font-semi-bold { font-weight:var(--font-semi-bold); }
```
### .font-size-h6  (1 rule)
```css
.font-size-h6 { font-size:var(--font-size-h6); }
```
### .font-size-s  (1 rule)
```css
.font-size-s { font-size:var(--font-size-s); }
```
### .text-neutral-0  (1 rule)
```css
.text-neutral-0 { color:var(--text-color-neutral-0, var(--color-neutral-0)); }
```
## ConnectPatterns.Icon

### .connect-icon-clock  (1 rule)
```css
.connect-icon-clock:before { content: "\f0b7"; }
```
### .connect-icon-close  (1 rule)
```css
.connect-icon-close:before { content: "\f07c"; }
```
### .connect-icon-family  (1 rule)
```css
.connect-icon-family:before { content: "\f0b6"; }
```
### .connect-icon-info  (1 rule)
```css
.connect-icon-info:before { content: "\f046"; }
```
### .connect-icon-play_arrow  (1 rule)
```css
.connect-icon-play_arrow:before { content: "\f07f"; }
```
### .icon-base  (1 rule)
```css
.icon-base { --ubt-icon-size: var(--ubt-icon-size-base); }
```
### .icon-non-standard-64  (1 rule)
```css
.icon-non-standard-64 { --ubt-icon-size: var(--ubt-icon-size-non-standard-64); }
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
## Adaptive.Columns2

### .columns2  (2 rules)
```css
tem, .phone .columns.columns-medium-left.phone-break-middle > .columns-item, .phone .columns.columns-small-right.phone-break-middle > .columns-item, .phone .columns.columns-medium-right.phone-break-middle > .columns-item { -webkit-box-flex:0; -ms-flex:none; flex:none; width:100%; }
tablet .columns.columns-medium-left.tablet-break-middle > .columns-item, .tablet .columns.columns-small-right.tablet-break-middle > .columns-item, .tablet .columns.columns-medium-right.tablet-break-middle > .columns-item { -webkit-box-flex:0; -ms-flex:none; flex:none; width:100%; }
```
### .gutter-xs  (5 rules)
```css
.columns.gutter-xs { margin-left:calc(-1 * var(--space-xs) / 2); margin-right:calc(-1 * var(--space-xs) / 2); }
.columns.gutter-xs > .columns-item { margin-bottom:var(--space-xs); padding:var(--space-none) calc(var(--space-xs) / 2); }
-child > .columns-item:not(:last-child), .tablet .columns.gutter-xs.tablet-break-middle:only-child > .columns-item:not(:last-child), .tablet .columns.gutter-xs.tablet-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-xs); }
only-child > .columns-item:not(:last-child), .phone .columns.gutter-xs.phone-break-middle:only-child > .columns-item:not(:last-child), .phone .columns.gutter-xs.phone-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-xs); }
.columns.ubt-columns.gutter-xs { gap: var(--space-xs) }
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

`.columns` (82), `.columns-item` (71), `.list` (93), `.phone` (235)

## Design tokens referenced by the rules above

- `--_ubt-background-image-size`: `calc(var(--lazy-image-width) * (2/3))` (in `.ubt-background-image--intrinsic-height`); `var(--lazy-image-width)` (in `.ubt-background-image--intrinsic-height.ubt-lazy-image--width-auto`); `calc(var(--avatar-image-size) / (2/3))` (in `.ubt-background-image--intrinsic-width`); `var(--avatar-image-size)` (in `.ubt-background-image--intrinsic-width.ubt-avatar-image-auto`)
- `--avatar-image-size`: `52px` (in `:root`); `0px` (in `.ubt-lazy-image.hidden`); `20px` (in `.ubt-avatar-image-xxs, .ubt-lazy-image-xxs`); `32px` (in `.ubt-avatar-image-xs, .ubt-lazy-image-xs`)
- `--border-color`: `var(--border-color-neutral-5, var(--color-neutral-5))` (in `.vscomp-dropbox`); `var(--color-primary)` (in `.border-color-primary`); `var(--color-secondary)` (in `.border-color-secondary`); `var(--color-tertiary)` (in `.border-color-tertiary`)
- `--border-radius-circle`: `100%` (in `@charset "UTF-8";    :root`)
- `--border-radius-large`: `16px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-medium`: `8px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-none`: `0` (in `@charset "UTF-8";    :root`)
- `--border-radius-rounded`: `100px` (in `@charset "UTF-8";    :root`); `16px` (in `.osui-balloon`); `16px` (in `.osui-bottom-sheet`); `16px` (in `.osui-overflow-menu`)
- `--border-radius-soft`: `4px` (in `@charset "UTF-8";    :root`)
- `--border-size-m`: `2px` (in `@charset "UTF-8";    :root`)
- `--border-size-s`: `1px` (in `@charset "UTF-8";    :root`)
- `--color-blue-dark`: `#1667ad` (in `@charset "UTF-8";    :root`); `#112CBA` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-blue-lightest`: `#e8f2fa` (in `@charset "UTF-8";    :root`); `#E1E5FF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-cyan`: `#0d8091` (in `@charset "UTF-8";    :root`); `#4EAEC2` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-cyan-dark`: `#0b6d7b` (in `@charset "UTF-8";    :root`); `#00819C` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-cyan-darker`: `#095a66` (in `@charset "UTF-8";    :root`); `#005668` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-cyan-lightest`: `#e7f2f4` (in `@charset "UTF-8";    :root`); `#EDF6F8` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-focus-outer`: `#ffd337` (in `@charset "UTF-8";    :root`)
- `--color-green-darker`: `#267d36` (in `@charset "UTF-8";    :root`); `#194E23` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-green-lightest`: `#ebf7ed` (in `@charset "UTF-8";    :root`); `#EAF3EB` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-neutral-0`: `#ffffff` (in `@charset "UTF-8";    :root`)
- `--color-neutral-11`: `#d8dcde` (in `:root`)
- `--color-neutral-2`: `#f1f3f5` (in `@charset "UTF-8";    :root`)
- `--color-neutral-7`: `#6a7178` (in `@charset "UTF-8";    :root`)
- `--color-neutral-9`: `#272b30` (in `@charset "UTF-8";    :root`)
- `--color-overlay-neutral-10`: `#101213D9` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-dark`: `#FF6F61` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-darker`: `#BB4338` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-lightest`: `#FFF0EF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-primary`: `#1068eb` (in `@charset "UTF-8";    :root`); `var(--color-cyan-dark)` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-primary-lightest`: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))` (in `@charset "UTF-8";    :root`); `var(--color-cyan-lightest)` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-dark`: `#6E71FF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-darker`: `#494BAA` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-lighter`: `#EFEFFF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-lightest`: `#F6F6FD` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-red-darker`: `#8d1d1d` (in `@charset "UTF-8";    :root`); `#841313` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-red-lightest`: `#faeaea` (in `@charset "UTF-8";    :root`); `#FCEAEA` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-blue-dark`: `17, 44, 186` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-cyan-dark`: `0, 129, 156` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-green-darker`: `25, 78, 35` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-peach-dark`: `255, 111, 97` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-purple-dark`: `110, 113, 255` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-red-darker`: `132, 19, 19` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-yellow-darker`: `140, 97, 0` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-yellow-darker`: `#ac6f00` (in `@charset "UTF-8";    :root`); `#8C6100` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-yellow-lightest`: `#fef5e5` (in `@charset "UTF-8";    :root`); `#FDF6E5` (in `:root, .connect-legacy-compatibily-containter`)
- `--connect-event-form-item-border`: `var(--border-size-s) solid var(--color-neutral-3)` (in `.connect-event-form`)
- `--current-svg-height`: `100vh` (in `:root`)
- `--font-bold`: `700` (in `@charset "UTF-8";    :root`)
- `--font-semi-bold`: `600` (in `@charset "UTF-8";    :root`)
- `--font-size-base`: `16px` (in `@charset "UTF-8";    :root`); `1rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h0`: `3.625rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h4`: `22px` (in `@charset "UTF-8";    :root`); `1.375rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h6`: `18px` (in `@charset "UTF-8";    :root`); `1.125rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-s`: `14px` (in `@charset "UTF-8";    :root`); `0.875rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--header-size`: `56px` (in `@charset "UTF-8";    :root`); `103px` (in `.ubt-layout-main`); `58px` (in `.ubt-layout-home`); `50px` (in `.screen-container .layout.ubt-layout-home.ubt-profile-screen`)
- `--header-size-content`: `48px` (in `@charset "UTF-8";    :root`)
- `--layer-global-navigation`: `calc(var(--layer-above) + var(--layer-global-elevated))` (in `@charset "UTF-8";    :root`)
- `--layer-global-negative`: `-1` (in `@charset "UTF-8";    :root`)
- `--layer-global-screen`: `0` (in `@charset "UTF-8";    :root`)
- `--layer-local-tier-1`: `1` (in `@charset "UTF-8";    :root`)
- `--lazy-image-width`: `0px` (in `.ubt-lazy-image.hidden`); `20px` (in `.ubt-lazy-image--width-xxs`); `32px` (in `.ubt-lazy-image--width-xs`); `40px` (in `.ubt-lazy-image--width-s`)
- `--loading-dot-size`: `10px` (in `:root`)
- `--os-safe-area-bottom`: `max(env(safe-area-inset-bottom), var(--safe-area-inset-bottom, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-left`: `max(env(safe-area-inset-left), var(--safe-area-inset-left, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-right`: `max(env(safe-area-inset-right), var(--safe-area-inset-right, 0px))` (in `@charset "UTF-8";    :root`)
- `--osui-carousel-pagination-margin`: `30px` (in `.osui-carousel`)
- `--osui-carousel-track-width`: `100%` (in `.osui-carousel`)
- `--shadow-xs`: `0 1px 2px rgba(0, 0, 0, 0.1)` (in `@charset "UTF-8";    :root`); `0 1px 2px rgba(0, 0, 0, 0.1)` (in `:root, .connect-legacy-compatibily-containter`)
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
- `--ubt-icon-size-non-standard-32`: `32px` (in `:root`)
- `--ubt-icon-size-non-standard-64`: `64px` (in `:root`)
- `--ubt-layout-login-padding`: `var(--ubt-pincode-padding, var(--ubt-layout-login-padding-top) var(--space-base) var(--space-l) var(--space-base))` (in `:root`)
- `--ubt-login-screen-padding-top`: `calc(var(--ubt-layout-login-padding-top) + 80px)` (in `:root`)
- `--ubt-login-svg-min-height`: `732px` (in `:root`)
- `--ubt-pincode-button-color`: `var(--color-neutral-8)` (in `:root`); `var(--color-neutral-0)` (in `.ubt-layout--login`)
- `--ubt-pincode-buttons-size`: `64px` (in `:root`)
- `--ubt-skeleton-animation`: `ubt-skeleton-pulse 1.5s ease-in-out infinite` (in `:root`)
