# CSS relevant to MyEntertaining

Load order of stylesheets (keep this order in the build):

1. `/UBTConnect/css/_Basic.css`
2. `/UBTConnect/css/OutSystemsReactWidgets.css`
3. `/UBTConnect/css/UBT_AppManager.PIN.PinCode.css`
4. `/UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css`
5. `/UBTConnect/css/UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.css`
6. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css`
7. `/UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css`
8. `/UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css`
9. `/UBTConnect/css/Connect2_LegacyShared.UBTConnect.css`
10. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css`

Rules below are those whose selector contains a class used on the captured page, grouped by the block that owns the element. Full source: `styles/bundle.css`.

## App_Common.CommonUI_InsideLayout

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
## Layouts.Layout_DetailPage

### .ThemeGrid_Container  (15 rules)
```css
.ThemeGrid_Container { box-sizing: border-box; }
.aside-expandable .header .ThemeGrid_Container { max-width:100%; }
.ThemeGrid_Container { margin:var(--space-none) auto; width:100%; }
.header .ThemeGrid_Container { padding:var(--space-none) var(--space-xl); }
.layout .main-content.ThemeGrid_Container { padding:var(--space-xl); }
.layout .footer.ThemeGrid_Container { padding:var(--space-base) var(--space-xl); }
.tablet .header .ThemeGrid_Container { padding:var(--space-none) var(--space-m); }
.tablet .main-content.ThemeGrid_Container { padding:var(--space-m); }
.tablet .footer.ThemeGrid_Container { padding:var(--space-base) var(--space-m); }
.phone .header .ThemeGrid_Container { padding-left:calc(var(--os-safe-area-left) + var(--space-base)); padding-right:calc(var(--os-safe-area-right) + var(--space-base)); }
.phone .main-content.ThemeGrid_Container { padding-bottom:var(--space-base); padding-left:calc(var(--os-safe-area-left) + var(--space-base)); padding-right:calc(var(--os-safe-area-right) + var(--space-base)); padding-top:var(--space-base); }
.phone .footer.ThemeGrid_Container { padding-left:calc(var(--os-safe-area-left) + var(--space-base)); padding-right:calc(var(--os-safe-area-right) + var(--space-base)); }
.layout-native .main-content.ThemeGrid_Container { padding:var(--space-none); }
.full-width-section .ThemeGrid_Container { padding:var(--space-none) var(--space-xl); }
.ThemeGrid_Container { padding-left: 5%; padding-right: 5%; }
```
### .content  (23 rules)
```css
.content { display:-webkit-box; display:-ms-flexbox; display:flex; -webkit-box-flex:1; -ms-flex:1; flex:1; -webkit-box-orient:vertical; -webkit-box-direction:normal; -ms-flex-direction:column; flex-direction:column; position:relative; }
.layout-native .content { background-color:var(--background-color-body, var(--color-background-body)); }
.android .main:has(.footer:empty) .content { padding-bottom:var(--safe-area-inset-bottom, 0px); }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .content { background-color:var(--background-color-body, var(--color-background-body)); grid-area:content; overflow-x:hidden; overflow-y:auto; }
.ptr-loading .content, .ptr-loading .pull-to-refresh, .ptr-reset .content, .ptr-reset .pull-to-refresh { -webkit-transition:all 0.25s ease; transition:all 0.25s ease; }
.ptr-loading:not(.osui-bottom-sheet--is-active) .content { -webkit-transform:translate3D(0, 50px, 0); -ms-transform:translate3D(0, 50px, 0); transform:translate3D(0, 50px, 0); }
.content, .slide-from-bottom-enter.slide-from-bottom-enter-active .content, .slide-from-bottom-leave.slide-from-bottom-leave-active .content, .fade-enter.fade-enter-active .content, .fade-leave.fade-leave-active .content { -webkit-transition:opacity 400ms ease-in-out, -webkit-transform 400ms ease-in-out; transition:opacity 400ms ease-in-out, -webkit-transform 400ms ease-in-out; transition:transform 400ms ease-in-out, opacity 400ms ease-in-out; transition:transform 400ms ease-in-out, opacity 400ms ease-in-out, -webkit-transform 400ms ease-in-out; }
.slide-from-right-enter .content, .slide-from-left-leave.slide-from-left-leave-active .content { -webkit-transform:translateX(100vw) translateZ(0); transform:translateX(100vw) translateZ(0); }
.slide-from-right-leave .content, .slide-from-right-enter.slide-from-right-enter-active .content, .slide-from-left-leave .content, .slide-from-left-enter.slide-from-left-enter-active .content { -webkit-transform:translateX(0vw) translateZ(0); transform:translateX(0vw) translateZ(0); }
.slide-from-right-leave.slide-from-right-leave-active .content, .slide-from-left-enter .content { -webkit-transform:translateX(-100vw) translateZ(0); transform:translateX(-100vw) translateZ(0); }
.slide-from-right-leave.slide-from-right-leave-active .content { opacity:0; -webkit-transform:translateX(-30vw) translateZ(0); transform:translateX(-30vw) translateZ(0); }
.slide-from-left-leave.slide-from-left-leave-active .content { opacity:0; -webkit-transform:translateX(30vw) translateZ(0); transform:translateX(30vw) translateZ(0); }
.fade-enter.fade-enter-active .content { opacity:1; }
.fade-enter .content { opacity:0; will-change:opacity; }
.content, .slide-from-bottom-enter.slide-from-bottom-enter-active .content, .slide-from-bottom-leave.slide-from-bottom-leave-active .content, .fade-enter.fade-enter-active .content, .fade-leave.fade-leave-active .content { transition: transform var(--dx-screen-transition-duration) ease-in-out, opacity var(--dx-screen-transition-duration) ease-in-out; }
.dx-bottom-bar-slider-reverse-direction .slide-from-left-enter .content { transform: translateX(100vw); }
.dx-bottom-bar-slider-reverse-direction .slide-from-left-enter.slide-from-left-enter-active .content { transform: none; }
.dx-bottom-bar-slider-reverse-direction .slide-from-left-leave.slide-from-left-leave-active .content { transform: translateX(-30vw); }
.dx-bottom-bar-slider-reverse-direction .slide-from-right-enter .content { transform: translateX(-100vw); }
.dx-bottom-bar-slider-reverse-direction .slide-from-right-enter.slide-from-right-enter-active .content { transform: none; }
.dx-bottom-bar-slider-reverse-direction .slide-from-right-leave.slide-from-right-leave-active .content { transform: translateX(30vw); }
.layout-gray-background .content { background-color: var(--color-neutral-4) }
.layout-native .content.background-neutral-4 { background-color: var(--color-neutral-4); }
```
### .content-bottom  (3 rules)
```css
.layout-native .content-bottom { bottom:0; position:sticky; z-index:var(--layer-global-navigation); }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .content-bottom { grid-area:footer; position:relative; }
.dx-mobile-keyboard-visible .content-bottom, .dx-mobile-keyboard-visible .dx-bottom-bar-slider { display: none; }
```
### .content-middle  (4 rules)
```css
.content-middle { position:relative; }
.content-middle {  }
.layout-native .content-middle { height:100%; }
.ubt-layout-home .content-middle { z-index: 2; }
```
### .footer  (10 rules)
```css
.android .layout-native .footer { height:calc(var(--safe-area-inset-bottom, 0px) + var(--bottom-bar-size)); }
.ios .layout-native .footer { height:calc(var(--os-safe-area-bottom) + var(--bottom-bar-size)); }
.layout .footer.ThemeGrid_Container { padding:var(--space-base) var(--space-xl); }
.tablet .footer.ThemeGrid_Container { padding:var(--space-base) var(--space-m); }
.phone .footer.ThemeGrid_Container { padding-left:calc(var(--os-safe-area-left) + var(--space-base)); padding-right:calc(var(--os-safe-area-right) + var(--space-base)); }
.android .main:has(.footer:empty) .content { padding-bottom:var(--safe-area-inset-bottom, 0px); }
.layout-native .footer > .btn { border-radius:0; height:100%; padding-bottom:var(--os-safe-area-bottom); }
.layout-native .footer { height:var(--bottom-bar-size); }
.layout-native .footer { height: auto; }
.footer:has(.footer--auto-height), .ios .footer:has(.footer--auto-height) { height: auto; }
```
### .ios-bounce  (8 rules)
```css
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .main { display:grid; grid-template:auto 1fr auto/1fr; grid-template-areas:"header" "content" "footer"; max-height:var(--viewport-height, 100vh); width:100%; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .main {  }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .header { grid-area:header; position:relative; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) [data-block="Private.PullToRefresh"] { display:contents; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .pull-to-refresh { top:calc(var(--header-size) + var(--header-size-content) + var(--os-safe-area-top)); }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .content { background-color:var(--background-color-body, var(--color-background-body)); grid-area:content; overflow-x:hidden; overflow-y:auto; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .content-bottom { grid-area:footer; position:relative; }
.ios.ptr-refresh .layout-native.ios-bounce .main { overflow:hidden; }
```
### .main  (32 rules)
```css
.layout.layout-side .main { margin-left:var(--side-menu-size); }
.layout.layout-side.aside-overlay .main { margin-left:0; }
.layout.layout-native .main { width:100%; }
.layout.aside-expandable .main { margin-left:0; }
.layout .main { display:-webkit-box; display:-ms-flexbox; display:flex; -webkit-box-flex:1; -ms-flex:1; flex:1; -webkit-box-orient:vertical; -webkit-box-direction:normal; -ms-flex-direction:column; flex-direction:column; }
.main, .fixed-header .main { padding-top:0; }
.desktop .layout-native.aside-visible .main, .desktop .layout-native.aside-expandable .main { width:calc(100% - var(--side-menu-size)); }
.tablet.landscape .layout-native.menu-visible.aside-visible .main, .tablet.landscape .layout-native.menu-visible.aside-expandable .main { margin-left:var(--side-menu-size); width:calc(100% - var(--side-menu-size)); }
.tablet.landscape .layout-side.layout-native.aside-expandable.menu-visible .main { margin-left:var(--side-menu-size); }
.tablet.landscape .layout-side.layout-native.aside-expandable .main { margin-right:0; }
.tablet .layout-side .main, .phone .layout-side .main { margin-left:0; }
.is-rtl.tablet .layout-native.aside-visible .main, .is-rtl.tablet .layout-native.aside-expandable .main { margin-left:0; }
.is-rtl.tablet .layout-side .main { margin-right:0; }
.is-rtl.tablet.landscape .layout-side.layout-native.aside-expandable.menu-visible .main { margin-left:0; margin-right:var(--side-menu-size); }
.is-rtl.tablet.landscape .layout-side.layout-native.aside-expandable .main { margin-right:0; }
.is-rtl.phone .layout-side .main { margin-right:0; }
.is-rtl .layout-side .main { margin-left:0; margin-right:var(--side-menu-size); }
.is-rtl .layout-side.aside-overlay .main { margin-right:0; }
.is-rtl .aside-expandable .main { margin-right:0; }
.layout-side.layout-native.aside-expandable .main .header { z-index:var(--layer-global-navigation); }
.layout-side .aside-expandable:not(.fixed-header) .main .header { margin-left:calc(var(--side-menu-size) * -1); }
.layout-side .aside-expandable.menu-visible:not(.fixed-header) .main .header { margin-left:0; }
.tablet .layout-side.aside-expandable:not(.fixed-header) .main .header, .phone .layout-side.aside-expandable:not(.fixed-header) .main .header { margin-left:0; }
.tablet.portrait .layout-side.layout-native.aside-expandable .main .header { z-index:var(--layer-global-navigation); }
.phone .layout-side.layout-native.aside-expandable .main .header { z-index:var(--layer-global-navigation); }
```
### .main-content  (9 rules)
```css
.layout .main-content .layout {  }
.phone .layout .main-content .layout {  }
.phone .layout .main-content .layout.layout-native {  }
.landscape .layout.layout-native .header, .landscape .layout.layout-native:not(.blank) .main-content, .landscape .layout.layout-native .bottom-bar-wrapper { padding-left:var(--os-safe-area-left); padding-right:var(--os-safe-area-right); }
.main-content { -webkit-box-flex:1; -ms-flex:1; flex:1; position:relative; }
.layout .main-content.ThemeGrid_Container { padding:var(--space-xl); }
.tablet .main-content.ThemeGrid_Container { padding:var(--space-m); }
.phone .main-content.ThemeGrid_Container { padding-bottom:var(--space-base); padding-left:calc(var(--os-safe-area-left) + var(--space-base)); padding-right:calc(var(--os-safe-area-right) + var(--space-base)); padding-top:var(--space-base); }
.layout-native .main-content.ThemeGrid_Container { padding:var(--space-none); }
```
### .ph  (2 rules)
```css
.ph:empty, .placeholder-empty:empty { display:none; }
list-group, .osui-tabs__content > .ph > .OSBlockWidget, .osui-tabs__content > .placeholder-empty > .OSBlockWidget, .osui-tabs__content > .ph > .list.list-group, .osui-tabs__content > .placeholder-empty > .list.list-group { display:contents; }
```
### .skip-nav  (4 rules)
```css
.skip-nav { left:var(--space-xl); opacity:0; padding:var(--space-s) var(--space-base); pointer-events:none; position:absolute; text-transform:uppercase; top:10px; z-index:var(--layer-global-instant-interaction); }
.skip-nav[data-showskipcontent=false] { display:none; }
.skip-nav[data-showskipcontent=true] { display:block; }
.has-accessible-features .skip-nav:focus, .has-accessible-features .skip-nav:active { opacity:1; pointer-events:auto; }
```
### .ubt-layout-detail  (13 rules)
```css
.ubt-layout-detail, .connect-pin-screen { --header-color: var(--color-neutral-0); --header-size: 50px; }
.ubt-layout-detail.ubt-layout-detail--primary { --header-color: var(--color-primary-gradient-radial); }
.ubt-layout-detail .header { background-color: var(--header-color); box-shadow: var(--shadow-none); color: var(--color-neutral-9); }
.ubt-layout-detail.ubt-layout-detail--primary .header { color: var(--color-neutral-0); background: var(--header-color); }
.tablet .ubt-layout-detail.layout-native .header-top, .phone .ubt-layout-detail.layout-native .header-top { padding: 0 var(--space-base); }
.ubt-layout-detail .header-content { background: transparent; width: 100%; display: flex; align-items: center; justify-content: space-between; column-gap: var(--space-base); }
.layout-native.ubt-layout-detail .header-title, .phone .layout-native.ubt-layout-detail .header-title, .tablet .layout-native.ubt-layout-detail .header-title { font-size: var(--font-size-s); flex: 1; }
.ubt-layout-detail.layout-native .header-right, .phone .ubt-layout-detail.layout-native .header-right { flex: 1; }
.ubt-layout-home footer:before, .ubt-layout-home header:after, .ubt-layout-main footer:before, .ubt-layout-main header:after, .ubt-layout-detail footer:before, .ubt-layout-detail header:after { content: ''; width: 100%; height: 9px; z-index: 3; display: block; position: absolute; }
.ubt-layout-home header:after, .ubt-layout-main header:after, .ubt-layout-detail header:after { bottom: calc(-1 * 9px); background: linear-gradient(180deg, rgba(39, 43, 48, 0.5) 0%, rgba(217, 217, 217, 0.05) 84.62%); visibility: var(--header-shadow-scroll); }
.ubt-layout-home footer:before, .ubt-layout-main footer:before, .ubt-layout-detail footer:before { background: linear-gradient(180deg, rgba(217, 217, 217, 0.05) 0%, rgba(206, 212, 218, 0.85) 80%); top: calc(-1 * 9px); visibility: var(--footer-shadow-scroll); }
tive .header-right, .ubt-layout-main.layout-native .header-right, .phone .ubt-layout-main.layout-native .header-right, .ubt-layout-detail.layout-native .header-right, .phone .ubt-layout-detail.layout-native .header-right { margin: 0; column-gap: var(--space-base); position: relative; }
.screen-container:has(.ubt-layout-home, .ubt-layout-main.layout-sticky-title, .ubt-layout-main, .ubt-layout-detail):has(.osui-bottom-sheet.osui-bottom-sheet--is-open) { overflow: hidden; touch-action: none; }
```
### .ubt-layout-detail--primary  (2 rules)
```css
.ubt-layout-detail.ubt-layout-detail--primary { --header-color: var(--color-primary-gradient-radial); }
.ubt-layout-detail.ubt-layout-detail--primary .header { color: var(--color-neutral-0); background: var(--header-color); }
```
## Blocks.Embedded_MyEntertaining

### .overflow-hidden  (2 rules)
```css
.overflow-hidden { overflow:hidden; }
.overflow-hidden {  }
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
### .osx  (3 rules)
```css
.osx.tablet .layout-top:not(.menu-visible) .header-navigation, .osx.phone .layout-top:not(.menu-visible) .header-navigation { pointer-events:none; }
.osx .vscomp-search-container .vscomp-search-clear, .ios .vscomp-search-container .vscomp-search-clear { line-height:1.1; }
accordion .osui-tabs__header__indicator, .osx.chrome .section-expandable .osui-tabs__header__indicator, .osx.edge .osui-accordion .osui-tabs__header__indicator, .osx.edge .section-expandable .osui-tabs__header__indicator { -webkit-perspective:1000px; perspective:1000px; }
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

`.layout` (53), `.layout-native` (241), `.layout-side` (89), `.phone` (235)

## Design tokens referenced by the rules above

- `--border-radius-large`: `16px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-medium`: `8px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-size-m`: `2px` (in `@charset "UTF-8";    :root`)
- `--bottom-bar-size`: `56px` (in `@charset "UTF-8";    :root`)
- `--color-background-body`: `#f3f6f8` (in `@charset "UTF-8";    :root`); `var(--color-neutral-0)` (in `:root, .connect-legacy-compatibily-containter`)
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
- `--color-neutral-4`: `#dee2e6` (in `@charset "UTF-8";    :root`)
- `--color-neutral-9`: `#272b30` (in `@charset "UTF-8";    :root`)
- `--color-overlay-neutral-10`: `#101213D9` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-dark`: `#FF6F61` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-darker`: `#BB4338` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-lightest`: `#FFF0EF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-primary`: `#1068eb` (in `@charset "UTF-8";    :root`); `var(--color-cyan-dark)` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-primary-gradient-radial`: `radial-gradient(63.8% 63.8% at 62.5% 55.47%, var(--color-cyan) 17.79%, var(--color-cyan-dark) 100%)` (in `:root, .connect-legacy-compatibily-containter`)
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
- `--dx-screen-transition-duration`: `300ms` (in `:root`)
- `--font-semi-bold`: `600` (in `@charset "UTF-8";    :root`)
- `--font-size-base`: `16px` (in `@charset "UTF-8";    :root`); `1rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h4`: `22px` (in `@charset "UTF-8";    :root`); `1.375rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-s`: `14px` (in `@charset "UTF-8";    :root`); `0.875rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--footer-shadow-scroll`: `hidden` (in `:root`)
- `--header-color`: `#ffffff` (in `@charset "UTF-8";    :root`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-main`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-home`); `var(--color-neutral-0)` (in `.ubt-layout-detail, .connect-pin-screen`)
- `--header-shadow-scroll`: `hidden` (in `:root`)
- `--header-size`: `56px` (in `@charset "UTF-8";    :root`); `103px` (in `.ubt-layout-main`); `58px` (in `.ubt-layout-home`); `50px` (in `.screen-container .layout.ubt-layout-home.ubt-profile-screen`)
- `--header-size-content`: `48px` (in `@charset "UTF-8";    :root`)
- `--layer-global-instant-interaction`: `calc(var(--layer-above) + var(--layer-global-off-canvas))` (in `@charset "UTF-8";    :root`)
- `--layer-global-navigation`: `calc(var(--layer-above) + var(--layer-global-elevated))` (in `@charset "UTF-8";    :root`)
- `--layer-global-negative`: `-1` (in `@charset "UTF-8";    :root`)
- `--layer-local-tier-1`: `1` (in `@charset "UTF-8";    :root`)
- `--loading-dot-size`: `10px` (in `:root`)
- `--os-safe-area-bottom`: `max(env(safe-area-inset-bottom), var(--safe-area-inset-bottom, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-left`: `max(env(safe-area-inset-left), var(--safe-area-inset-left, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-right`: `max(env(safe-area-inset-right), var(--safe-area-inset-right, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-top`: `max(env(safe-area-inset-top), var(--safe-area-inset-top, 0px))` (in `@charset "UTF-8";    :root`)
- `--shadow-none`: `none` (in `@charset "UTF-8";    :root`)
- `--side-menu-size`: `300px` (in `@charset "UTF-8";    :root`); `264px` (in `e, .tablet .layout-native.aside-visible, .tablet .layout-native.aside-expandable`)
- `--space-base`: `16px` (in `@charset "UTF-8";    :root`); `16px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-m`: `24px` (in `@charset "UTF-8";    :root`); `24px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-none`: `0` (in `@charset "UTF-8";    :root`); `0` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-s`: `8px` (in `@charset "UTF-8";    :root`); `8px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xl`: `40px` (in `@charset "UTF-8";    :root`); `40px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--ubt-button-height-s`: `40px` (in `:root`)
- `--ubt-layout-login-padding`: `var(--ubt-pincode-padding, var(--ubt-layout-login-padding-top) var(--space-base) var(--space-l) var(--space-base))` (in `:root`)
- `--ubt-login-screen-padding-top`: `calc(var(--ubt-layout-login-padding-top) + 80px)` (in `:root`)
- `--ubt-login-svg-min-height`: `732px` (in `:root`)
- `--ubt-pincode-button-color`: `var(--color-neutral-8)` (in `:root`); `var(--color-neutral-0)` (in `.ubt-layout--login`)
