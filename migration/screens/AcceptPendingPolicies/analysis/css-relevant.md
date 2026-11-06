# CSS relevant to AcceptPendingPolicies

Load order of stylesheets (keep this order in the build):

1. `/UBTConnect/css/_Basic.css`
2. `/UBTConnect/css/OutSystemsReactWidgets.css`
3. `/UBTConnect/css/UBT_AppManager.PIN.PinCode.css`
4. `/UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css`
5. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css`
6. `/UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css`
7. `/UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css`
8. `/UBTConnect/css/Connect2_LegacyShared.UBTConnect.css`
9. `/UBTConnect/css/UBTConnect.App_Policies.AcceptPendingPolicies.css`
10. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css`

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
### .ThemeGrid_MarginGutter  (3 rules)
```css
ion-message, .phone .form span.input-text .form-control[class*=ThemeGrid_Width].not-valid.ThemeGrid_MarginGutter + span.validation-message, .phone .form-control[class*=ThemeGrid_Width].not-valid + span.validation-message { left:0; }
.ThemeGrid_MarginGutter { margin-left: 1.96078431372549%; }
.is-rtl .ThemeGrid_MarginGutter { margin-left: 0; margin-right: 1.96078431372549%; }
```
### .connect-legacy-compatibily-containter  (4 rules)
```css
:root, .connect-legacy-compatibily-containter { /* Primary color palette - Redifining the cyan palette as it wn't be used and matched the primary color */ --color-cyan-lightest: #EDF6F8; --color-cyan-lighter: #D2EBEE; --color-cyan-light: #AAD8E0; --color-cyan: #4EAEC2; --color-cyan-dark: #00819C; --color-cyan-darker: #005668; --color-cyan-darkest: #003945; --color-cyan-dark-linear-gradient: linear-gradient(90deg, var(--color-cyan-dark) 0%, var( }
:root, .connect-legacy-compatibily-containter { --font-size-h0: 3.625rem; --font-size-display: 2.25rem; --font-size-h1: 2rem; --font-size-h2: 1.75rem; --font-size-h3: 1.625rem; --font-size-h4: 1.375rem; --font-size-h5: 1.25rem; --font-size-h6: 1.125rem; --font-size-base: 1rem; --font-size-s: 0.875rem; --font-size-xs: 0.75rem; --font-size-label: 0.688rem; --font-size-xxs: 0.625rem; --font-medium: 500; }
:root, .connect-legacy-compatibily-containter { --border-radius-medium: 8px; --border-radius-large: 16px; --border-radius-rounded: 100px; }
:root, .connect-legacy-compatibily-containter { --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.1); --shadow-xs-top: 0 -1px 2px rgba(0, 0, 0, 0.1); --shadow-s: -2px 4px 4px rgba(0, 0, 0, 0.1); --shadow-m: -2px 6px 6px rgba(0, 0, 0, 0.1); --shadow-l: -2px 6px 8px rgba(0, 0, 0, 0.1); --shadow-xl: 0px 8px 10px 0px rgba(0, 0, 0, 0.1); --shadow-s2: -1px 2px 4.4px 0px rgba(0, 0, 0, 0.35), 2px -2px 7.8px 0px rgba(210, 235, 238, 1) inset; }
```
### .login-screen__connect-logo  (1 rule)
```css
.layout-native .login-screen [data-block="ConnectPatterns.Tile"] .login-screen__connect-logo { margin-top: var(--space-base); width: 210px; margin-bottom: var(--space-xxl); }
```
### .ubt-fixed-footer--content  (2 rules)
```css
.ubt-fixed-footer--content { /*this var is set in the OnReady of the block*/ margin-bottom: var(--ubt-fixed-footer---footer-height); }
.ubt-policies.ubt-fixed-footer--content { margin-bottom: 0px; }
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
### .ubt-policies  (3 rules)
```css
.ubt-policies .ubt-policies--content { /*Calc to keep the Connect logo at the same position. Include size of 'Welcome to' with line height 1.5 and spacing*/ padding-top: calc(var(--ubt-pincode-padding-top) - var(--space-s) - (1.5 * var(--font-size-h3))); padding-left: var(--space-base); padding-right: var(--space-base); max-height: var(--current-svg-height); }
.ubt-policies .ubt-policies--content .columns .columns-item:first-child { max-height: 40vh; overflow-y: scroll; }
.ubt-policies.ubt-fixed-footer--content { margin-bottom: 0px; }
```
### .ubt-policies--content  (2 rules)
```css
.ubt-policies .ubt-policies--content { /*Calc to keep the Connect logo at the same position. Include size of 'Welcome to' with line height 1.5 and spacing*/ padding-top: calc(var(--ubt-pincode-padding-top) - var(--space-s) - (1.5 * var(--font-size-h3))); padding-left: var(--space-base); padding-right: var(--space-base); max-height: var(--current-svg-height); }
.ubt-policies .ubt-policies--content .columns .columns-item:first-child { max-height: 40vh; overflow-y: scroll; }
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
## BasePatterns.CustomContainer

### .background-neutral-0  (4 rules)
```css
.tag.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.avatar.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.badge.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.background-neutral-0 { background-color:var(--background-color-neutral-0, var(--color-neutral-0)); }
```
### .padding-base  (1 rule)
```css
.padding-base { padding:var(--space-base); }
```
### .padding-bottom-m  (1 rule)
```css
.padding-bottom-m { padding-bottom:var(--space-m); }
```
### .padding-bottom-s  (1 rule)
```css
.padding-bottom-s { padding-bottom:var(--space-s); }
```
### .padding-top-base  (1 rule)
```css
.padding-top-base { padding-top:var(--space-base); }
```
### .shadow-xs-top  (1 rule)
```css
.shadow-xs-top { -webkit-box-shadow: var(--shadow-xs-top); box-shadow: var(--shadow-xs-top); }
```
### .ubt-custom-container  (1 rule)
```css
.OSBlockWidget:has(> .inline-block), .OSBlockWidget:has(> .OSBlockWidget > .ubt-custom-container.inline-block) { display: inline-block; width: fit-content; }
```
## BasePatterns.CustomText

### .font-semi-bold  (1 rule)
```css
.font-semi-bold { font-weight:var(--font-semi-bold); }
```
### .font-size-base  (1 rule)
```css
.font-size-base { font-size:var(--font-size-base); }
```
### .font-size-h3  (1 rule)
```css
.font-size-h3 { font-size:var(--font-size-h3); }
```
### .text-neutral-0  (1 rule)
```css
.text-neutral-0 { color:var(--text-color-neutral-0, var(--color-neutral-0)); }
```
## Adaptive.Columns2

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
### .align-items-center  (1 rule)
```css
.align-items-center { -webkit-box-align:center; -ms-flex-align:center; align-items:center; }
```
### .columns2  (2 rules)
```css
tem, .phone .columns.columns-medium-left.phone-break-middle > .columns-item, .phone .columns.columns-small-right.phone-break-middle > .columns-item, .phone .columns.columns-medium-right.phone-break-middle > .columns-item { -webkit-box-flex:0; -ms-flex:none; flex:none; width:100%; }
tablet .columns.columns-medium-left.tablet-break-middle > .columns-item, .tablet .columns.columns-small-right.tablet-break-middle > .columns-item, .tablet .columns.columns-medium-right.tablet-break-middle > .columns-item { -webkit-box-flex:0; -ms-flex:none; flex:none; width:100%; }
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
### .font-regular  (1 rule)
```css
.font-regular { font-weight:var(--font-regular); }
```
### .font-size-s  (1 rule)
```css
.font-size-s { font-size:var(--font-size-s); }
```
### .gutter-xs  (5 rules)
```css
.columns.gutter-xs { margin-left:calc(-1 * var(--space-xs) / 2); margin-right:calc(-1 * var(--space-xs) / 2); }
.columns.gutter-xs > .columns-item { margin-bottom:var(--space-xs); padding:var(--space-none) calc(var(--space-xs) / 2); }
-child > .columns-item:not(:last-child), .tablet .columns.gutter-xs.tablet-break-middle:only-child > .columns-item:not(:last-child), .tablet .columns.gutter-xs.tablet-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-xs); }
only-child > .columns-item:not(:last-child), .phone .columns.gutter-xs.phone-break-middle:only-child > .columns-item:not(:last-child), .phone .columns.gutter-xs.phone-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-xs); }
.columns.ubt-columns.gutter-xs { gap: var(--space-xs) }
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
### .margin-left-xs  (2 rules)
```css
.margin-left-xs { margin-left:var(--space-xs); }
.is-rtl .margin-left-xs { margin-left:var(--space-none); margin-right:var(--space-xs); }
```
### .margin-right-l  (2 rules)
```css
.margin-right-l { margin-right:var(--space-l); }
.is-rtl .margin-right-l { margin-left:var(--space-l); margin-right:var(--space-none); }
```
### .margin-y-xl  (1 rule)
```css
.margin-y-xl { margin-bottom:var(--space-xl); margin-top:var(--space-xl); }
```
### .text-align-left  (2 rules)
```css
.text-align-left { text-align:left; }
.is-rtl [align=left], .is-rtl .text-align-left { text-align:right; }
```
### .text-underline  (1 rule)
```css
.text-underline { text-decoration: underline; }
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
### .ubt-columns-reduce-last  (2 rules)
```css
> .columns-item:nth-child(2), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(1), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(3) { flex: 0; min-width: max-content; }
.ubt-columns.ubt-columns--reverse.ubt-columns-reduce-first > .columns-item:nth-child(2), .ubt-columns.ubt-columns--reverse.ubt-columns-reduce-last.ubt-columns--two-columns > .columns-item:nth-child(1) { flex: 0; }
```
## ConnectPatterns.Icon

### .connect-icon-checkbox_outline_blank  (1 rule)
```css
.connect-icon-checkbox_outline_blank:before { content: "\f085"; }
```
### .text-neutral-9  (1 rule)
```css
.text-neutral-9 { color:var(--text-color-neutral-9, var(--color-neutral-9)); }
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
## ConnectPatterns.FixedFooter

### .ubt-fixed-footer  (2 rules)
```css
.ubt-fixed-footer { position: fixed; bottom: calc(var(--bottom-bar-size) + var(--os-safe-area-bottom)); left: 0; width: 100%; }
.ubt-fixed-footer.ubt-fixed-footer--no-bottom-bar { bottom: 0; }
```
### .ubt-fixed-footer--no-bottom-bar  (1 rule)
```css
.ubt-fixed-footer.ubt-fixed-footer--no-bottom-bar { bottom: 0; }
```
## ConnectPatterns.Button

### .flex-grow  (2 rules)
```css
.flex-grow { flex-grow: 1; }
.OSBlockWidget:has(> [data-block] > .ubt-button.flex-grow) { flex-grow: 1 }
```
### .osui-btn-loading__spinner-animation  (7 rules)
```css
.osui-btn-loading-show-spinner.osui-btn-loading--is-loading .btn .osui-btn-loading__spinner-animation { margin-right:var(--space-none); }
.osui-btn-loading.osui-btn-loading--is-loading .btn .osui-btn-loading__spinner-animation { display:inline-block; }
.osui-btn-loading .btn .osui-btn-loading__spinner-animation { display:none; -webkit-animation:loadingSpinner 850ms cubic-bezier(0.7, 1.05, 0.78, 0.78) infinite; animation:loadingSpinner 850ms cubic-bezier(0.7, 1.05, 0.78, 0.78) infinite; border:var(--border-size-m) solid currentColor; border-radius:var(--border-radius-circle); border-top-color:transparent; height:16px; margin-right:var(--space-s); width:16px; will-change:transform; }
.osui-btn-loading .btn .osui-btn-loading__spinner-animation {  }
.is-rtl .osui-btn-loading-show-spinner.osui-btn-loading--is-loading .btn .osui-btn-loading__spinner-animation { margin-left:var(--space-none); }
.is-rtl .osui-btn-loading--is-loading .btn .osui-btn-loading__spinner-animation { margin-left:var(--space-s); margin-right:var(--space-none); }
.os-high-contrast .osui-btn-loading .btn .osui-btn-loading__spinner-animation { border-width:var(--border-size-l); border-bottom:none; border-top:none; }
```
### .ubt-button  (7 rules)
```css
.OSBlockWidget:has(> [data-block] > .ubt-button.flex-grow) { flex-grow: 1 }
.OSBlockWidget:has(> [data-block] > .ubt-button.flex-shrink) { flex-shrink: 1 }
.ubt-button, .tablet .ubt-button, .phone .ubt-button { width: 100%; height: var(--ubt-button-height); padding: var(--space-none) var(--space-s); border-radius: var(--border-radius-medium); border-color: var(--ubt-button-border-color, var(--ubt-button-background-color, var(--color-primary))); border-width: var(--ubt-button-border-size, var(--border-size-s)); font-size: var(--ubt-button-font-size); font-weight: var(--ubt-button-font-weight); color: var( }
.ubt-button .btn-animation { display: none; }
/*.ubt-button .columns { width: 100%; flex-grow: 1; }
*/ .ubt-button .ubt-icon { font-size: var(--ubt-button-icon-size); color: inherit; }
.unsupported-card .ubt-button { min-width: 250px }
```
### .ubt-button--disabled  (2 rules)
```css
.ubt-button--disabled { pointer-events: none; }
.ubt-button--disabled { --ubt-button-background-color: var(--color-neutral-3); --ubt-button-font-color: var(--color-neutral-7); --ubt-button-border-color: var(--color-neutral-5); }
```
### .ubt-button--m  (1 rule)
```css
.ubt-button--m { --ubt-button-width: var( --ubt-button-width-m); --ubt-button-height: var( --ubt-button-height-m); --ubt-button-padding: var(--space-xs) var(--space-s); --ubt-button-font-size: var(--font-size-base); --ubt-button-font-weight: var(--font-semi-bold); --ubt-button-icon-size: var(--ubt-icon-size-base); --ubt-button-border-size: var(--border-size-m); }
```
### .ubt-button--primary  (2 rules)
```css
.ubt-button--primary { /*placeholder for defining primary button*/ }
.ubt-button--primary:active, .ubt-button--primary.display-pressed { --ubt-button-background-color: var(--color-cyan-darker); }
```
### .ubt-button__content  (1 rule)
```css
.ubt-button__content { display:contents; }
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

`.btn` (61), `.columns` (83), `.columns-item` (72), `.list` (93), `.phone` (235)

## Design tokens referenced by the rules above

- `--border-radius-circle`: `100%` (in `@charset "UTF-8";    :root`)
- `--border-radius-large`: `16px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-medium`: `8px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-size-l`: `3px` (in `@charset "UTF-8";    :root`)
- `--border-size-m`: `2px` (in `@charset "UTF-8";    :root`)
- `--border-size-s`: `1px` (in `@charset "UTF-8";    :root`)
- `--bottom-bar-size`: `56px` (in `@charset "UTF-8";    :root`)
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
- `--color-neutral-3`: `#e9ecef` (in `@charset "UTF-8";    :root`)
- `--color-neutral-5`: `#ced4da` (in `@charset "UTF-8";    :root`)
- `--color-neutral-7`: `#6a7178` (in `@charset "UTF-8";    :root`)
- `--color-neutral-9`: `#272b30` (in `@charset "UTF-8";    :root`)
- `--color-overlay-neutral-10`: `#101213D9` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-dark`: `#FF6F61` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-darker`: `#BB4338` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-lightest`: `#FFF0EF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-primary`: `#1068eb` (in `@charset "UTF-8";    :root`); `var(--color-cyan-dark)` (in `:root, .connect-legacy-compatibily-containter`)
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
- `--font-regular`: `400` (in `@charset "UTF-8";    :root`)
- `--font-semi-bold`: `600` (in `@charset "UTF-8";    :root`)
- `--font-size-base`: `16px` (in `@charset "UTF-8";    :root`); `1rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h3`: `26px` (in `@charset "UTF-8";    :root`); `1.625rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h4`: `22px` (in `@charset "UTF-8";    :root`); `1.375rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-s`: `14px` (in `@charset "UTF-8";    :root`); `0.875rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--header-size`: `56px` (in `@charset "UTF-8";    :root`); `103px` (in `.ubt-layout-main`); `58px` (in `.ubt-layout-home`); `50px` (in `.screen-container .layout.ubt-layout-home.ubt-profile-screen`)
- `--header-size-content`: `48px` (in `@charset "UTF-8";    :root`)
- `--layer-global-navigation`: `calc(var(--layer-above) + var(--layer-global-elevated))` (in `@charset "UTF-8";    :root`)
- `--layer-global-negative`: `-1` (in `@charset "UTF-8";    :root`)
- `--layer-global-screen`: `0` (in `@charset "UTF-8";    :root`)
- `--layer-local-tier-1`: `1` (in `@charset "UTF-8";    :root`)
- `--loading-dot-size`: `10px` (in `:root`)
- `--os-safe-area-bottom`: `max(env(safe-area-inset-bottom), var(--safe-area-inset-bottom, 0px))` (in `@charset "UTF-8";    :root`)
- `--shadow-xs-top`: `0 -1px 2px rgba(0, 0, 0, 0.1)` (in `:root, .connect-legacy-compatibily-containter`)
- `--space-base`: `16px` (in `@charset "UTF-8";    :root`); `16px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-l`: `32px` (in `@charset "UTF-8";    :root`); `32px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-m`: `24px` (in `@charset "UTF-8";    :root`); `24px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-none`: `0` (in `@charset "UTF-8";    :root`); `0` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-s`: `8px` (in `@charset "UTF-8";    :root`); `8px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xl`: `40px` (in `@charset "UTF-8";    :root`); `40px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xs`: `4px` (in `@charset "UTF-8";    :root`); `4px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xxl`: `48px` (in `@charset "UTF-8";    :root`); `48px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--ubt-background-skeleton-light`: `var(--color-neutral-3)` (in `:root`)
- `--ubt-button-background-color`: `var(--color-neutral-0)` (in `.ubt-button--secondary`); `var(--color-neutral-0)` (in `.ubt-button--tertiary`); `var(--color-neutral-3)` (in `.ubt-button--disabled`); `var(--color-cyan-darker)` (in `.ubt-button--primary:active, .ubt-button--primary.display-pressed`)
- `--ubt-button-border-color`: `var(--color-primary)` (in `.ubt-button--secondary`); `var(--color-neutral-5)` (in `.ubt-button--disabled`); `var(--color-cyan-darker)` (in `.ubt-button--secondary:active, .ubt-button--secondary.display-pressed`)
- `--ubt-button-border-size`: `var(--border-size-m)` (in `.ubt-button--m`)
- `--ubt-button-font-color`: `var(--color-primary)` (in `.ubt-button--secondary`); `var(--color-primary)` (in `.ubt-button--tertiary`); `var(--color-neutral-7)` (in `.ubt-button--disabled`); `var(--color-cyan-darker)` (in `.ubt-button--secondary:active, .ubt-button--secondary.display-pressed`)
- `--ubt-button-font-size`: `var(--font-size-xs)` (in `.ubt-button--xs`); `var(--font-size-base)` (in `.ubt-button--s`); `var(--font-size-base)` (in `.ubt-button--m`)
- `--ubt-button-font-weight`: `var(--font-regular)` (in `.ubt-button--xs`); `var(--font-regular)` (in `.ubt-button--s`); `var(--font-semi-bold)` (in `.ubt-button--m`)
- `--ubt-button-height`: `var( --ubt-button-height-xs)` (in `.ubt-button--xs`); `var( --ubt-button-height-s)` (in `.ubt-button--s`); `var( --ubt-button-height-m)` (in `.ubt-button--m`)
- `--ubt-button-height-s`: `40px` (in `:root`)
- `--ubt-button-icon-size`: `var(--ubt-icon-size-small)` (in `.ubt-button--xs`); `var(--ubt-icon-size-medium)` (in `.ubt-button--s`); `var(--ubt-icon-size-base)` (in `.ubt-button--m`)
- `--ubt-icon-size`: `var(--ubt-icon-size-base)` (in `:root`); `var(--ubt-icon-size-base)` (in `.ubt-avatar-image-base, .ubt-lazy-image-base, .ubt-lazy-image--width-base`); `var(--ubt-icon-size-non-standard-32)` (in `.ubt-avatar-image.ubt-lazy-image.ubt-lazy-image-base`); `var(--ubt-icon-size-medium)` (in `.ubt-avatar-image-xxs, .ubt-lazy-image-xxs`)
- `--ubt-icon-size-base`: `24px` (in `:root`)
- `--ubt-layout-login-padding`: `var(--ubt-pincode-padding, var(--ubt-layout-login-padding-top) var(--space-base) var(--space-l) var(--space-base))` (in `:root`)
- `--ubt-login-screen-padding-top`: `calc(var(--ubt-layout-login-padding-top) + 80px)` (in `:root`)
- `--ubt-login-svg-min-height`: `732px` (in `:root`)
- `--ubt-pincode-button-color`: `var(--color-neutral-8)` (in `:root`); `var(--color-neutral-0)` (in `.ubt-layout--login`)
- `--ubt-pincode-buttons-size`: `64px` (in `:root`)
- `--ubt-pincode-padding-top`: `95px` (in `:root`); `95px` (in `:root`)
- `--ubt-skeleton-animation`: `ubt-skeleton-pulse 1.5s ease-in-out infinite` (in `:root`)
