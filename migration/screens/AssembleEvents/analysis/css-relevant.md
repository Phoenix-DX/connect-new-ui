# CSS relevant to AssembleEvents

Load order of stylesheets (keep this order in the build):

1. `/UBTConnect/css/_Basic.css`
2. `/UBTConnect/css/OutSystemsReactWidgets.css`
3. `/UBTConnect/css/UBT_AppManager.PIN.PinCode.css`
4. `/UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css`
5. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css`
6. `/UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css`
7. `/UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css`
8. `/UBTConnect/css/Connect2_LegacyShared.UBTConnect.css`
9. `/UBTConnect/css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css`
10. `/UBTConnect/css/Connect2_LegacyShared.ConnectMobileCommonTheme.css`
11. `/UBTConnect/css/Connect2_LegacyShared.OrbitTheme.css`
12. `/UBTConnect/css/Connect2_LegacyShared.AssembleTheme.css`
13. `/UBTConnect/css/Connect2_LegacyShared.ConnectMobile.css`
14. `/UBTConnect/css/Connect2_LegacyShared.UBTConnect_LegacyChain.css`
15. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css`

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

### .OSInline  (4 rules)
```css
.OSInline { display: inline-block; vertical-align: top; }
table.OSInline { display: inline-table; }
.floating-content.floating-content-full-width > .OSInline { display:inline; }
:where(.backwards-compatibility) .connect-screen-nd .badge.border-radius-rounded.background-primary.OSInline { background-color: var(--connect-color-nd); }
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
## Layout.Layout

### .connect-theme  (9 rules)
```css
.connect-theme { /*--color-primary: #1775ba;*/ --background-color-header: var(--color-primary); --background-color-content: white; --background-color-button: var(--color-primary); --background-color-bottom-bar: white; --color-bottom-bar: #455a64; --color-bottom-bar-active: var(--color-primary); }
theme, .connect-theme .orbit-theme, .media-hub-theme .media-hub-theme, .media-hub-theme .connect-theme, .media-hub-theme .orbit-theme, .orbit-theme .orbit-theme, .orbit-theme .connect-theme, .orbit-theme .media-hub-theme { height:100vh; min-height: 100vh; height: 100dvh; min-height: 100dvh; }
body.connect-theme , .connect-theme .content, .connect-theme.ios .layout-native.ios-bounce .content { background: var(--background-color-content); }
.connect-theme.advanced-search .header { z-index: 901; /* Used to fix the issues with the dropdown on the header. */ }
.connect-theme .input-search :is(.input[data-input], input[data-input]:empty, textarea[data-textarea], textarea[data-textarea]:empty) { background-color: white; }
.connect-theme .b2c-login .btn.btn-login-new { border: none; color: transparent; background-color: var(--color-neutral-0); min-width: 55vw; }
.connect-theme .b2c-login .osui-btn-loading.osui-btn-loading--is-loading.osui-btn-loading-show-spinner .btn.btn-login-new .osui-btn-loading__spinner-animation { border-color: var(--orbit-primary-6); border-top-color: transparent; }
.connect-theme .b2c-login .btn.btn-login-new .btn-login-new-text { background: linear-gradient(135deg, var(--connect-color-nd), #7078E9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.connect-theme .b2c-login .osui-btn-loading.osui-btn-loading--is-loading.osui-btn-loading-show-spinner .btn.btn-login-new .btn-login-new-text { display: none; }
```
## Layout.BaseLayout_UpdatedOSUI

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
### .align-items-center  (1 rule)
```css
.align-items-center { -webkit-box-align:center; -ms-flex-align:center; align-items:center; }
```
### .aside-navigation  (4 rules)
```css
.layout-native .aside-navigation, .layout-top .aside-navigation {  }
.layout-side .aside-navigation {  }
.layout-side .aside-navigation > div {  }
.tablet .layout-side .header .app-menu-content, .tablet .layout-side .aside-navigation, .phone .layout-side .header .app-menu-content, .phone .layout-side .aside-navigation {  }
```
### .aside-overlay  (10 rules)
```css
.layout.layout-side.aside-overlay .main { margin-left:0; }
.is-rtl .layout-side.aside-overlay .main { margin-right:0; }
.desktop .aside-expandable .menu-icon, .desktop .aside-overlay .menu-icon { display:-webkit-box; display:-ms-flexbox; display:flex; }
.layout-side.fixed-header.aside-overlay .header { left:0; }
.desktop .aside-overlay .app-menu-overlay { display:block; }
.aside-overlay .app-menu-content { background-color:var(--background-color-neutral-0, var(--color-neutral-0)); -webkit-box-orient:vertical; -webkit-box-direction:normal; -ms-flex-direction:column; flex-direction:column; height:100%; left:calc(-1 * var(--side-menu-size)); position:fixed; top:0; -webkit-transform:translateX(0) translateZ(0); transform:translateX(0) translateZ(0); -webkit-transition:-webkit-transform 130ms ease-in; tr }
.aside-overlay .app-menu-content.is--open { left:calc(-1 * var(--side-menu-size)); -webkit-transform:translateX(var(--side-menu-size)) translateZ(0); transform:translateX(var(--side-menu-size)) translateZ(0); -webkit-transition:-webkit-transform 330ms ease-out; transition:-webkit-transform 330ms ease-out; transition:transform 330ms ease-out; transition:transform 330ms ease-out, -webkit-transform 330ms ease-out; }
.desktop .layout-side:not(.layout-native):not(.aside-overlay) .app-menu-content { left:0; right:0; -webkit-transform:none; -ms-transform:none; transform:none; }
:where(.backwards-compatibility) .aside-overlay .app-menu-content { max-width: 350px; }
:where(.backwards-compatibility) .aside-overlay .app-menu-content { background-color: transparent; width: calc(var(--side-menu-size) + var(--side-menu-offset)); }
```
### .bottom  (9 rules)
```css
.osui-balloon.bottom {  }
notification-preview.right .is-right, .osui-notification-preview.left .is-left, .osui-notification-preview.top .is-top, .osui-notification-preview.top-right .is-top-right, .osui-notification-preview.top-left .is-top-left {  }
.tooltip-wrapper.bottom { left:50%; top:calc(100% + var(--space-s)); -webkit-transform:translateX(-50%); -ms-transform:translateX(-50%); transform:translateX(-50%); }
.tooltip-wrapper.bottom:after { border:8px solid transparent; border-bottom:8px solid var(--border-color-neutral-9, var(--color-neutral-9)); content:""; height:0; left:50%; position:absolute; top:-14px; -webkit-transform:translateX(-50%); -ms-transform:translateX(-50%); transform:translateX(-50%); width:0; }
mpatibility) .bottom .btn:hover, :where(.backwards-compatibility) .layout-native .bottom .btn:hover, :where(.backwards-compatibility) .bottom .btn:focus, :where(.backwards-compatibility) .layout-native .bottom .btn:focus { min-height: 60px; border-radius: 0; height: 100%; padding: var(--space-base) var(--space-xl); }
:where(.backwards-compatibility) .bottom .btn, :where(.backwards-compatibility) .bottom .btn:hover, :where(.backwards-compatibility) .bottom .btn:focus { align-items: center; }
:where(.backwards-compatibility) .bottom { z-index: var(--z-index-bottom-bar); }
:where(.backwards-compatibility) .policies .bottom .btn.border-radius-rounded { border-radius: 100px; }
.assemble-filter-actions .btn, .backwards-compatibility .bottom .assemble-filter-actions .btn { height: 38px; min-height: unset; width: 100px; border-radius: 3px; font-size: var(--font-size-s); font-weight: var(--font-semi-bold); }
```
### .connect-icon-place  (1 rule)
```css
.connect-icon-place:before { content: "\e90a"; }
```
### .content  (36 rules)
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
body.connect-theme , .connect-theme .content, .connect-theme.ios .layout-native.ios-bounce .content { background: var(--background-color-content); }
body.media-hub-theme , .media-hub-theme .content { background-color: var(--background-color-content); color: var(--color-neutral-0); }
```
### .content-bottom  (3 rules)
```css
.layout-native .content-bottom { bottom:0; position:sticky; z-index:var(--layer-global-navigation); }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .content-bottom { grid-area:footer; position:relative; }
.dx-mobile-keyboard-visible .content-bottom, .dx-mobile-keyboard-visible .dx-bottom-bar-slider { display: none; }
```
### .content-middle  (6 rules)
```css
.content-middle { position:relative; }
.content-middle {  }
.layout-native .content-middle { height:100%; }
.ubt-layout-home .content-middle { z-index: 2; }
:where(.backwards-compatibility) .layout-native .content-middle { height:auto; position: static; }
:where(.backwards-compatibility) .policies .content-middle > div { height: 100%; }
```
### .display-flex  (2 rules)
```css
.display-flex { display:-webkit-box; display:-ms-flexbox; display:flex; }
:where(.backwards-compatibility) .display-flex > div.my-update-feed-dropdown-localities, :where(.backwards-compatibility) .my-update-feed-dropdown-localities > div:last-child { min-width: 0; flex: unset; }
```
### .fa  (6 rules)
```css
.fa { display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale }
.fa.fa-pull-left { margin-right:.3em }
.fa.fa-pull-right { margin-left:.3em }
.fa.pull-left { margin-right:.3em }
.fa.pull-right { margin-left:.3em }
:where(.backwards-compatibility) .back-icon-cont .fa { position: relative; top: -0.8px; }
```
### .fa-2x  (1 rule)
```css
.fa-2x { font-size:2em }
```
### .fa-flag  (1 rule)
```css
.fa-flag:before { content:"\f024" }
```
### .font-size-0-75em  (2 rules)
```css
:where(.backwards-compatibility) .font-size-0-75em { font-size: 0.75em; }
:where(.backwards-compatibility) .subdivision .font-size-0-75em > span { white-space: nowrap; font-size: 14px; color: #263238; }
```
### .font-size-1-5em  (1 rule)
```css
:where(.backwards-compatibility) .font-size-1-5em { font-size: 1.5em; }
```
### .footer  (12 rules)
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
.ios :where(.backwards-compatibility) .layout-native .footer { /*applied ios class to fix compability issues on ios. However, this can create issues in the future due to the safe area used by iOS on the bottom bar. Old value was fixed as calc(var(--os-safe-area-bottom) + var(--bottom-bar-size));*/ height: auto; }
*/ .footer > div, .footer > div > div { height: 100%; }
```
### .full-width  (2 rules)
```css
.tablet .sidebar.full-width, .phone .sidebar.full-width { width:100%; }
.full-width { width:100%; }
```
### .header-content  (32 rules)
```css
.header .header-content { height:100%; }
.header .header-content > [data-block*=ApplicationTitle] .application-name { margin-right:var(--space-m); }
.desktop .header-content > [data-block*=ApplicationTitle] .application-name { display:none; }
.is-rtl .header .header-content > [data-block*=ApplicationTitle] .application-name { margin-right:0; margin-left:var(--space-m); }
.layout-top .header-content {  }
.layout-blank .header-content {  }
.layout-native .header-content .osui-search input[data-input], .layout-native .header-content .osui-search input[data-input]:empty { border-radius:var(--border-radius-none); }
.layout-native .header-content .search input[data-input], .layout-native .header-content .search input[data-input]:empty { border-radius:var(--border-radius-none); height:var(--header-size); }
.ubt-layout-detail .header-content { background: transparent; width: 100%; display: flex; align-items: center; justify-content: space-between; column-gap: var(--space-base); }
:where(.backwards-compatibility) .connect-concept-theme-blue-gradient-header .header-content { margin-top: 35px; }
:where(.backwards-compatibility) .header-content .mark-cont { display: flex; justify-content: flex-end; }
:where(.backwards-compatibility) .header-content .mark-cont .header-mark-all-button { background-color: white; color: var(--color-primary); border-radius: 20px; padding: var(--space-s) var(--space-m); display: flex; justify-content: center; font-size: 0.75em; margin: 0px 10px 10px; }
:where(.backwards-compatibility) .header-content .search input[data-input], :where(.backwards-compatibility) .header-content .search input[data-input]:empty { background: var(--color-neutral-0); color: var(--color-neutral-10); }
:where(.backwards-compatibility) .header-content .search-input:after { color: var(--color-neutral-10); }
:where(.backwards-compatibility) .header-content button.button-group-item.button-group-item { color: rgba(0, 0, 0, 0.7); }
:where(.backwards-compatibility) .header-content button.button-group-item.button-group-selected-item { color: var(--color-primary); }
:where(.backwards-compatibility) .header-content button.button-group-item.button-group-selected-item:after { background-color: var(--color-primary); bottom: 1px; }
:where(.backwards-compatibility) .header-content button.button-group-item.button-group-item .badge.background-primary-color { margin-top: -2px; font-size: 10px; margin-right: 0; }
:where(.backwards-compatibility) .header-content button.button-group-item.button-group-selected-item:after { background-color: white; bottom: 0px; height: 3px; }
:where(.backwards-compatibility) .header-content button.button-group-item.button-group-item { background-color: var(--color-primary); color: rgba(255, 255, 255, 0.7); font-weight: bold; }
:where(.backwards-compatibility) .header-content button.button-group-item.button-group-selected-item { color: white; }
:where(.backwards-compatibility) .header-content > div:only-child > div:only-child, :where(.backwards-compatibility) .header-content > div:only-child > span:only-child > div:only-child { padding: 0px !important; }
:where(.backwards-compatibility) .advanced-search .header-content > div:only-child > div:only-child, :where(.backwards-compatibility) .advanced-search .header-content > div:only-child > span:only-child > div:only-child { font-size: inherit; padding: var(--space-base) var(--space-m); }
:where(.backwards-compatibility) .header-content .choices__inner { background-color: transparent; color: inherit; line-height: inherit; height: auto; }
:where(.backwards-compatibility) .header-content .choices__list--single .choices__item { color: inherit; }
```
### .header-left  (8 rules)
```css
.layout-native .header-left { -webkit-box-flex:1; -ms-flex:1; flex:1; margin-right:var(--space-base); }
.is-rtl .layout-native .header-left { margin-left:var(--space-base); margin-right:0; }
:where(.backwards-compatibility) .header-left { color: var(--color-neutral-0); flex-grow: 0; flex: 1; }
:where(.backwards-compatibility) .header-right, :where(.backwards-compatibility) .header-left { white-space: nowrap; min-width: fit-content }
:where(.backwards-compatibility) .layout-native .header-left { margin-right: 0; }
:where(.backwards-compatibility) .header.transparent .header-left { text-shadow: 0 0 10px rgba(0, 0, 0, 0.3); }
.header.orbit-detail .header-top .header-left { flex: none; }
.header.orbit-detail.orbit-header-center .header-top .header-left, .header.orbit-detail.orbit-header-center .header-top .header-title { align-self: center; }
```
### .header-right  (30 rules)
```css
.layout-native .header-right { display:-webkit-box; display:-ms-flexbox; display:flex; -webkit-box-flex:1; -ms-flex:1; flex:1; -webkit-box-pack:end; -ms-flex-pack:end; justify-content:flex-end; margin-left:var(--space-base); margin-right:auto; }
.layout-native .header-right {  }
.is-rtl .layout-native .header-right { margin-left:auto; margin-right:var(--space-base); }
.layout-native .header-right .btn { background-color:transparent; border:0; color:var(--text-color-primary, var(--color-primary)); font-size:var(--font-size-base); padding:0; }
t .osui-search__input, .slide-from-bottom-leave .layout-native .header-right .osui-search__input, .fade-enter .header-right .layout-native .osui-search__input, .fade-leave .header-right .layout-native .osui-search__input { display:none; }
.layout-native .header-right .search { background-color:transparent; padding:var(--space-none); position:static; }
.layout-native .header-right .search.open .search-glass .search-round, .layout-native .header-right .search.open .search-glass .search-stick-bottom { height:24px; right:17px; }
.layout-native .header-right .search.open .search-glass .search-round { border-radius:var(--border-radius-none); -webkit-box-shadow:inset 0 0 0 3px var(--background-color-neutral-6, var(--color-neutral-6)); box-shadow:inset 0 0 0 3px var(--background-color-neutral-6, var(--color-neutral-6)); -webkit-transform:rotate(135deg); -ms-transform:rotate(135deg); transform:rotate(135deg); width:3px; }
.layout-native .header-right .search.open .search-glass .search-stick-bottom { background-color:var(--background-color-neutral-6, var(--color-neutral-6)); top:12px; -webkit-transform:rotate(45deg); -ms-transform:rotate(45deg); transform:rotate(45deg); }
.layout-native .header-right .search.open .search-input { -webkit-transform:translate(0, 0); -ms-transform:translate(0, 0); transform:translate(0, 0); }
.layout-native .header-right .search-glass { display:inline-block; height:44px; position:relative; width:40px; }
.layout-native .header-right .search-round { border-radius:var(--border-radius-circle); -webkit-box-shadow:inset 0 0 0 3px var(--background-color-neutral-6, var(--color-neutral-6)); box-shadow:inset 0 0 0 3px var(--background-color-neutral-6, var(--color-neutral-6)); height:16px; margin-top:-10px; position:absolute; right:13px; top:50%; -webkit-transition:all 300ms ease; transition:all 300ms ease; width:16px; }
.layout-native .header-right .search-stick-bottom { background-color:var(--background-color-neutral-6, var(--color-neutral-6)); content:""; height:10px; position:absolute; right:12px; top:23px; -webkit-transform:rotate(-45deg); -ms-transform:rotate(-45deg); transform:rotate(-45deg); -webkit-transition:all 300ms ease; transition:all 300ms ease; width:3px; }
.layout-native .header-right .search-input { left:var(--os-safe-area-left); position:absolute; right:0; top:var(--os-safe-area-top); -webkit-transform:translate(0, calc(-100% - var(--os-safe-area-top))); -ms-transform:translate(0, calc(-100% - var(--os-safe-area-top))); transform:translate(0, calc(-100% - var(--os-safe-area-top))); -webkit-transition:all 300ms ease; transition:all 300ms ease; }
.layout-native .header-right .search-input input[data-input], .layout-native .header-right .search-input input[data-input]:empty { height:34px; padding-left:var(--space-xl); -webkit-transition:none; transition:none; }
.layout-native .header-right .search-input input[data-input]:focus { border-bottom:var(--border-size-s) solid transparent; }
.layout-native .header-right .search-input ::-webkit-input-placeholder { color:var(--text-color-neutral-6, var(--color-neutral-6)); }
yout-native .header-right .search-input, .slide-from-bottom-leave .layout-native .header-right .search-input, .fade-enter .header-right .layout-native .search-input, .fade-leave .header-right .layout-native .search-input { display:none; }
.ubt-layout-main.layout-native .header-right { color: var(--color-neutral-0); }
.ubt-layout-detail.layout-native .header-right, .phone .ubt-layout-detail.layout-native .header-right { flex: 1; }
tive .header-right, .ubt-layout-main.layout-native .header-right, .phone .ubt-layout-main.layout-native .header-right, .ubt-layout-detail.layout-native .header-right, .phone .ubt-layout-detail.layout-native .header-right { margin: 0; column-gap: var(--space-base); position: relative; }
.mainpage-upgrade-container .header-right, .mainpage-upgrade-container .header-right-upgrade { margin-left: auto; flex: 0 0 auto; display: flex; align-items: center; }
:where(.backwards-compatibility) .header-right, :where(.backwards-compatibility) .header-left { white-space: nowrap; min-width: fit-content }
:where(.backwards-compatibility) .header-right .search-input { background-color: var(--color-neutral-0); }
:where(.backwards-compatibility) .layout-native .header-right { margin-left: 0; }
```
### .header-search  (3 rules)
```css
:where(.backwards-compatibility) .connect-concept-theme-blue-gradient-header .header .header-search { color: var(--color-neutral-0); text-align: left; flex-grow: 5; overflow-x: hidden; }
:where(.backwards-compatibility) .header-top .header-search:empty { display: none; }
:where(.backwards-compatibility) .header-search { color: var(--color-neutral-10); }
```
### .header-title  (23 rules)
```css
.layout-native .header-title { font-size:var(--font-size-h5); font-weight:var(--font-regular); }
.layout-native .header-title {  }
.layout-native h1.header-title {  }
.tablet .layout-native .header-title { font-size:calc(var(--font-size-h5) - 1px); }
.phone .layout-native .header-title { font-size:calc(var(--font-size-h5) - 2px); }
.ubt-layout-main.layout-native .header-title, .phone .ubt-layout-main.layout-native .header-title { color: var(--color-neutral-0); font-size: var(--font-size-h2); font-weight: var(--font-semi-bold); }
.ubt-layout-home.layout-native .header-title, .phone .ubt-layout-home.layout-native .header-title { color: var(--color-neutral-0); font-size: var(--font-size-h2); font-weight: var(--font-semi-bold); }
.layout-native.ubt-layout-detail .header-title, .phone .layout-native.ubt-layout-detail .header-title, .tablet .layout-native.ubt-layout-detail .header-title { font-size: var(--font-size-s); flex: 1; }
.ubt-layout-main.layout-sticky-title.layout-native .header-title .ubt-search-input, .phone .ubt-layout-main.layout-sticky-title.layout-native .header-title .ubt-search-input { font-size: var(--font-size-h5); }
.ubt-layout-main.layout-sticky-title .header-title span.input-search, .ubt-layout-main.layout-sticky-title .header-title .input-with-icon .input-with-icon-content-icon { font-size: var(--font-size-h5); font-weight: var(--font-regular); line-height: 1; }
:where(.backwards-compatibility) .connect-concept-theme-blue-gradient-header .header .header-title { position: absolute; top: 70px; left: 15px; font-size: 1.4em; }
:where(.backwards-compatibility) .header-title { color: var(--color-neutral-0); flex-basis: 14em; flex-grow: 1; overflow-x: hidden; }
:where(.backwards-compatibility) .header-title * { white-space: nowrap; }
:where(.backwards-compatibility) .header-title input[data-input], :where(.backwards-compatibility) .header-title input[data-input]:empty { border-radius: var(--space-s); height: 50px; background: var(--color-primary-dark); }
:where(.backwards-compatibility) .header-title input[data-input]:focus { border: none; border-radius: var(--space-s); height: 50px; }
:where(.backwards-compatibility) h1.header-title { line-height: 1.43; }
:where(.backwards-compatibility) .layout-native .header-title { font-size: var(--font-size-h6); }
:where(.backwards-compatibility) .header.transparent .header-title { text-shadow: 0 0 10px rgba(0, 0, 0, 0.7); }
:where(.backwards-compatibility) .advanced-search .header-title { overflow: visible; z-index: 2; }
.header.orbit-detail .header-top .header-title { text-align: left; margin-left: var(--space-m); }
.header.orbit-detail .header-top .header-title span { white-space: normal; }
.header.orbit-detail.orbit-header-center .header-top .header-left, .header.orbit-detail.orbit-header-center .header-top .header-title { align-self: center; }
:where(.backwards-compatibility).orbit-theme .header-title .orbit-host-survey-header-title { white-space: normal; }
```
### .header-top  (24 rules)
```css
.header-top { height:var(--header-size); }
.layout-native .header-top { padding:0 var(--space-l); }
.tablet .layout-native .header-top, .phone .layout-native .header-top { padding:0 var(--space-m); }
.ubt-layout-main.layout-native .header-top { padding: var(--space-base); }
.tablet .ubt-layout-main.layout-native .header-top, .phone .ubt-layout-main.layout-native .header-top { padding-bottom: 0; }
.ubt-layout-home.layout-native .header-top { padding: var(--space-s) var(--space-base); }
.tablet .ubt-layout-detail.layout-native .header-top, .phone .ubt-layout-detail.layout-native .header-top { padding: 0 var(--space-base); }
.ubt-layout-home header:has(.header-top-content:empty) .header-top, .ubt-layout-main header:has(.header-top-content:empty) .header-top { padding-bottom: var(--space-base); }
.media-hub-theme:where(.backwards-compatibility) .header-top a { display: inline-block; /* to make links easier to click on iOS devices */ padding: 0 10px 0 6px; }
:where(.backwards-compatibility) .header-top .header-search:empty { display: none; }
:where(.backwards-compatibility) .layout-native .header-top { padding: 5px 15px; min-height: 65px; }
kit-search-cancel-button, :where(.backwards-compatibility) .header-top input[type=search]::-webkit-search-results-button, :where(.backwards-compatibility) .header-top input[type=search]::-webkit-search-results-decoration { -webkit-appearance: none; }
:where(.backwards-compatibility) .my-update-feed .header-top { margin-bottom: 40px; }
.header.orbit-detail .header-top { align-items: baseline; height: auto; padding: var(--space-base) var(--space-m); }
.header.orbit-detail .header-top .header-left { flex: none; }
.header.orbit-detail .header-top .header-title { text-align: left; margin-left: var(--space-m); }
.header.orbit-detail .header-top .header-title span { white-space: normal; }
.header.orbit-detail.orbit-header-center .header-top { align-items: center; }
.header.orbit-detail.orbit-header-center .header-top .header-left, .header.orbit-detail.orbit-header-center .header-top .header-title { align-self: center; }
.header.orbit-detail.orbit-transport-detail .header-top { background-color: rgba(29, 57, 196, 0.6); }
:where(.backwards-compatibility) .header.orbit-detail .header-top .header-content > div { align-items: baseline; height: auto; }
/*:where(.backwards-compatibility) .header.orbit-detail .header-top { padding-top: var(--space-xs); }
*/ :where(.backwards-compatibility) .header.orbit-detail.orbit-header-center .header-top .header-content > div { align-items: center; }
:where(.backwards-compatibility) .header .header-top { transition: all 100ms ease; }
```
### .header-top-content  (13 rules)
```css
.layout-native .header-top-content .form-control[data-input] { background-color:var(--background-color-header, var(--header-color)); border:0; border-bottom:var(--border-size-s) solid transparent; border-radius:0; }
.layout-native .header-top-content .form-control[data-input]:focus { border-bottom:var(--border-size-s) solid var(--border-color-primary, var(--color-primary)); }
.layout-native .header-top-content .button-group-item { background-color:var(--background-color-header, var(--header-color)); border:0; border-bottom:var(--border-size-m) solid transparent; color:var(--text-color-neutral-8, var(--color-neutral-8)); }
.layout-native .header-top-content .button-group-item:last-child { border-radius:0; }
.layout-native .header-top-content .button-group-item.button-group-selected-item { border-bottom:var(--border-size-m) solid var(--border-color-primary, var(--color-primary)); color:var(--text-color-neutral-10, var(--color-neutral-10)); }
.layout-native .header-top-content .button-group-item[disabled] { color:var(--text-color-neutral-6, var(--color-neutral-6)); }
.layout-native .header-top-content .button-group-item[disabled].button-group-selected-item { border-bottom:var(--border-size-m) solid var(--border-color-neutral-6, var(--color-neutral-6)); }
.layout-native .header-top-content .form-control[data-input] { background-color: var(--color-neutral-0); border: var(--border-size-s) solid var(--color-neutral-5); border-radius: var(--border-radius-rounded); }
.layout-native .header-top-content .form-control[data-input]:focus { border: var(--border-size-s) solid var(--color-neutral-7) }
.ubt-layout-home:has(header .header-top-content:empty), .ubt-layout-main:has(header .header-top-content:empty) { --header-size: calc(var(--header-size) + var(--space-base)); }
.ubt-layout-home header:has(.header-top-content:empty) .header-top, .ubt-layout-main header:has(.header-top-content:empty) .header-top { padding-bottom: var(--space-base); }
.mainpage-upgrade-container .header-top-content { width: 100%; }
:where(.backwards-compatibility) .header .header-top-content { height:auto; }
```
### .icon  (40 rules)
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
:where(.backwards-compatibility) .btn .icon { padding: 0 5px; }
:where(.backwards-compatibility) .icon.fa-33 { font-size: 1.33em; }
:where(.backwards-compatibility) .card.warning-card > div:first-child > .icon { margin-right: var(--space-m); font-size: 2.3em; }
:where(.backwards-compatibility) .icon.selected-icon { content: "."; color: white; align-self: center; }
:where(.backwards-compatibility) .trove-menu .icon.menu-icon-browse { font-size: 1.2em; }
:where(.backwards-compatibility) .media-hub-menu .icon.menu-icon-browse { font-size: 1.2em; }
p-menu-links a .icon, :where(.backwards-compatibility) .media-hub-menu .version-container, :where(.backwards-compatibility) .media-hub-menu .common-menu-footer, :where(.backwards-compatibility) .media-hub-menu .menu-logo { color: var(--color-neutral-0); }
compatibility) .media-hub-menu .app-menu-links a.active div, :where(.backwards-compatibility) .media-hub-menu .app-menu-links a.active span, :where(.backwards-compatibility) .media-hub-menu .app-menu-links a.active .icon { color: var(--color-secondary); }
```
### .ios-bounce  (11 rules)
```css
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .main { display:grid; grid-template:auto 1fr auto/1fr; grid-template-areas:"header" "content" "footer"; max-height:var(--viewport-height, 100vh); width:100%; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .main {  }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .header { grid-area:header; position:relative; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) [data-block="Private.PullToRefresh"] { display:contents; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .pull-to-refresh { top:calc(var(--header-size) + var(--header-size-content) + var(--os-safe-area-top)); }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .content { background-color:var(--background-color-body, var(--color-background-body)); grid-area:content; overflow-x:hidden; overflow-y:auto; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .content-bottom { grid-area:footer; position:relative; }
.ios.ptr-refresh .layout-native.ios-bounce .main { overflow:hidden; }
body.connect-theme , .connect-theme .content, .connect-theme.ios .layout-native.ios-bounce .content { background: var(--background-color-content); }
:where(.backwards-compatibility) .no-title .header, :where(.backwards-compatibility) .layout-native.ios-bounce:not(.hide-header-on-scroll) .no-title .header { position: absolute; width: 100%; }
:where(.backwards-compatibility) .no-title .header, :where(.backwards-compatibility) .layout-native.ios-bounce:not(.hide-header-on-scroll) .no-title .header { position: absolute; }
```
### .line-height-1  (2 rules)
```css
.line-height-1 { line-height: 1; }
.line-height-1 { line-height: 1; }
```
### .main  (33 rules)
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
### .main-content  (13 rules)
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
.tablet .main-content { max-width: initial; }
:where(.backwards-compatibility) .content.browse-country-screen > .main-content::after { content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: black; pointer-events: none; transition: all 330ms ease-in-out; opacity: 0; }
e-from-left-leave-active .content.browse-country-screen > .main-content::after, :where(.backwards-compatibility) .slide-from-right-leave.slide-from-right-leave-active .content.browse-country-screen > .main-content::after { opacity: 1; }
:where(.backwards-compatibility) .month-calendar-wrapper.main-content { position: absolute; height: 100%; }
```
### .menu  (1 rule)
```css
:where(.backwards-compatibility) .menu { z-index: var(--z-index-menu); }
```
### .menu-icon-my-calendar  (1 rule)
```css
.menu-icon-my-calendar:before { content: "\e927"; }
```
### .ph  (2 rules)
```css
.ph:empty, .placeholder-empty:empty { display:none; }
list-group, .osui-tabs__content > .ph > .OSBlockWidget, .osui-tabs__content > .placeholder-empty > .OSBlockWidget, .osui-tabs__content > .ph > .list.list-group, .osui-tabs__content > .placeholder-empty > .list.list-group { display:contents; }
```
### .screen  (1 rule)
```css
:where(.backwards-compatibility) .screen.no-title { position: relative; }
```
### .text-align-center  (2 rules)
```css
.text-align-center { text-align:center; }
:where(.backwards-compatibility) .text-align-center { text-align: center; }
```
### .text-ellipsis  (2 rules)
```css
.text-ellipsis { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
:where(.backwards-compatibility) .text-ellipsis > [data-expression] { white-space: inherit; }
```
## Layout.MenuIcon__UpdatedOSUI

### .app-menu-icon  (4 rules)
```css
.layout-native .app-menu-icon.back .menu-icon, .desktop .menu-icon, .tablet.landscape .layout-native.aside-visible .menu-icon, .app-menu-icon.back .menu-icon, .app-menu-icon:not(.back) .menu-back { display:none; }
:where(.backwards-compatibility) .layout-native .app-menu-icon { padding: 0px var(--space-base); }
:where(.backwards-compatibility) .layout-native .app-menu-icon.back { padding-top: 4px; }
:where(.backwards-compatibility) .household-screen .header .app-menu-icon { padding-left: 0; }
```
### .fa-arrow-left  (1 rule)
```css
.fa-arrow-left:before { content:"\f060" }
```
### .menu-back  (3 rules)
```css
.menu-back { color:var(--text-color-neutral-8, var(--color-neutral-8)); }
.layout-native .app-menu-icon.back .menu-icon, .desktop .menu-icon, .tablet.landscape .layout-native.aside-visible .menu-icon, .app-menu-icon.back .menu-icon, .app-menu-icon:not(.back) .menu-back { display:none; }
:where(.backwards-compatibility) .header .menu-back { color: var(--color-neutral-0); font-size: 1.5em; }
```
## Reusable.NewConnectContent

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
### .ThemeGrid_MarginGutter  (3 rules)
```css
ion-message, .phone .form span.input-text .form-control[class*=ThemeGrid_Width].not-valid.ThemeGrid_MarginGutter + span.validation-message, .phone .form-control[class*=ThemeGrid_Width].not-valid + span.validation-message { left:0; }
.ThemeGrid_MarginGutter { margin-left: 1.96078431372549%; }
.is-rtl .ThemeGrid_MarginGutter { margin-left: 0; margin-right: 1.96078431372549%; }
```
### .action-menu-container--scrollable__header  (2 rules)
```css
.action-menu-container--scrollable .action-menu-top, .action-menu-container--scrollable__header { position: sticky; z-index: 1; background-color: var(--color-neutral-0); }
.action-menu-container--scrollable__header { top: calc(calc(2 * var(--space-base)) + 6px); }
```
### .assemble-filter-actions  (5 rules)
```css
.assemble-filter-actions { padding: 10px 0px; position: sticky; bottom: 0; background-color: var(--color-neutral-0) }
.assemble-filter-actions .btn:not(.btn-primary) { border: var(--color-neutral-0); }
.assemble-filter-actions .btn, .backwards-compatibility .bottom .assemble-filter-actions .btn { height: 38px; min-height: unset; width: 100px; border-radius: 3px; font-size: var(--font-size-s); font-weight: var(--font-semi-bold); }
.assemble-filter-actions .btn[disabled] { color: var(--color-neutral-5); }
.assemble-filter-actions .btn + .btn { margin-left: 20px; }
```
### .assemble-filter-search  (2 rules)
```css
.assemble-filter-search .form-control[data-input] { border:var(--border-size-s) solid var(--color-neutral-5) !important; }
.assemble-filter-search input[type="search"]::-webkit-search-cancel-button { display:none; }
```
### .btn-primary  (24 rules)
```css
.btn-primary { background-color:var(--background-color-primary, var(--color-primary)); border:var(--border-size-s) solid var(--border-color-primary, var(--color-primary)); color:var(--text-color-neutral-0, var(--color-neutral-0)); }
.connect-login-card__content .btn:not(.btn-primary) { border-color: transparent }
.login-button .btn:not(.btn-primary)[disabled] { background-color: var(--color-neutral-0) }
.connect-dialog-popup .dx-dialog-footer button.btn:not(.btn-primary) { border: none; }
.connect-dialog-popup--information .dx-dialog-footer button.btn:not(.btn-primary) { display: none; }
bility) .btn-primary[disabled], :where(.backwards-compatibility) .btn-primary[disabled]:hover, :where(.backwards-compatibility) .btn-primary[disabled]:focus, :where(.backwards-compatibility) .btn-primary[disabled]:active { background-color: #eceff1; color: #b0bec5; border: 1px solid transparent; }
:where(.backwards-compatibility) .b2c-splash .btn-b2c.btn-primary { color: #0097eb; background-color: white; margin-top: 0px; padding: var(--space-base) 40px; }
:where(.backwards-compatibility) .btn-primary, :where(.backwards-compatibility) .btn-primary:hover, :where(.backwards-compatibility) .btn-primary:focus { background-color: var(--background-color-button); color: var(--color-neutral-0); }
re(.backwards-compatibility) .popup-dialog.dx-confirmation-dialog.warning .dx-dialog-footer .btn-primary, :where(.backwards-compatibility) .warning .dx-confirmation-dialog .popup-dialog .dx-dialog-footer .btn.btn-primary { background-color: white; color: orange; }
:where(.backwards-compatibility) .warning .dx-confirmation-dialog .dx-dialog-footer .btn:not(.btn-primary) { display: none !important; }
:where(.backwards-compatibility).mandatory-confirmation .dx-confirmation-dialog .dx-dialog-footer .btn:not(.btn-primary) { display: none !important; }
dialog.popup-dialog.dx-confirmation-dialog .dx-dialog-footer .btn.btn-primary:hover, :where(.backwards-compatibility) .free-subscription-dialog.popup-dialog.dx-confirmation-dialog .dx-dialog-footer .btn.btn-primary:focus { background-color: var(--background-color-button); color: var(--color-neutral-0); flex-grow: 2; padding: var(--space-s); margin-left: var(--space-base); }
-dialog.dx-confirmation-dialog .dx-dialog-footer .btn:not(.btn-primary):hover, :where(.backwards-compatibility) .free-subscription-dialog.popup-dialog.dx-confirmation-dialog .dx-dialog-footer .btn:not(.btn-primary):focus { border: 1px solid var(--background-color-button); margin-left: unset; }
:where(.backwards-compatibility) .dx-confirmation-dialog .popup-dialog .dx-dialog-footer .btn.btn-primary { background-color: var(--color-primary); color: white; }
:where(.backwards-compatibility).upgrade-subscription-action-dialog .dx-confirmation-dialog .popup-dialog .dx-dialog-footer .btn.btn-primary { flex-grow: 2; }
:where(.backwards-compatibility).insufficient-funds-action-dialog .dx-confirmation-dialog .popup-dialog .dx-dialog-footer .btn.btn-primary { flex-grow: 1; }
.event-detail-banner-text .btn-primary, .event-detail-banner-text .btn-primary:hover, .event-detail-banner-text .btn-primary:focus { padding: var(--space-base); margin-left: 0; }
.orbit-confirm-popup .dx-confirmation-dialog .dx-dialog-footer .btn:not(.btn-primary) { color: var(--orbit-primary-7); border: 1px solid var(--orbit-primary-7); }
.orbit-confirm-popup .dx-confirmation-dialog .dx-dialog-footer .btn.btn-primary { background-color: var(--orbit-primary-7); }
.btn.btn-primary.orbit-qrcode-scan-button { border-radius: 50px; }
.assemble-meeting-info-popup .dx-dialog-footer button.btn.btn-primary { display: none; }
.assemble-filter-actions .btn:not(.btn-primary) { border: var(--color-neutral-0); }
.gift-btn .btn.btn-primary { height: 39px; }
:where(.backwards-compatibility) .btn.connect-btn.btn-primary { background: linear-gradient(135.41deg, #212454 41.42%, #7078E9 82.65%); border: 3px solid #212454; }
```
### .font-semi-bold  (1 rule)
```css
.font-semi-bold { font-weight:var(--font-semi-bold); }
```
### .font-size-s  (1 rule)
```css
.font-size-s { font-size:var(--font-size-s); }
```
### .ignore-backwards-compatibility-content  (9 rules)
```css
.ignore-backwards-compatibility-content { /*! Typography - Size */ --font-size-h1:32px; --font-size-h2:28px; --font-size-h3:26px; --font-size-h4:22px; --font-size-h5:20px; --font-size-h6:18px; --font-size-display:36px; --font-size-base:16px; --font-size-s:14px; --font-size-xs:12px; --font-size-label:11px; /*! Typography - Weight */ --font-light:300; --font-regular:400; --font-semi-bold:600; --font-bold:700; /*! Color - Brand */ /*--color- }
.ignore-backwards-compatibility-content { color:var(--color-neutral-8); }
.ignore-backwards-compatibility-content { /*! Color - Neutral - Custom */ --color-neutral-0:#ffffff; --color-neutral-1:#F8F9F9; --color-neutral-2:#E9EBED; --color-neutral-3:#D8DCDE; --color-neutral-4:#C2C8CC; --color-neutral-5:#87929D; --color-neutral-6:#68737D; --color-neutral-7:#49545C; --color-neutral-8:#2F3941; --color-neutral-9:#4F575E; --skeleton-start-color: #F8F9FA; --skeleton-end-color: #DEE2E6; --color-blue-2: #EDF7FF; --color-b }
.ignore-backwards-compatibility-content input[data-checkbox][type="checkbox"] { border: none; }
.ignore-backwards-compatibility-content input[data-checkbox][type="checkbox"]:before { border: 1px solid var(--color-primary); border-radius: var(--border-radius-soft); width: 18px; height: 18px; }
.ignore-backwards-compatibility-content input[data-checkbox][type="checkbox"]x:not(:checked):before { border-color: var(--color-neutral-4); }
.ignore-backwards-compatibility-content input[data-checkbox][type="checkbox"]:checked:before { background: var(--color-primary); border-color: var(--color-primary); }
.ignore-backwards-compatibility-content input[data-checkbox][type="checkbox"]:checked:after { border-width: 2px; top: 6px; left: 4px; width: 9px; height: 3px; border-radius: 0; border-color: var(--color-neutral-0); }
:where(.backwards-compatibility) .ignore-backwards-compatibility-content .block-household-person-options { display: flex; align-items: center; flex-direction: row; justify-content: flex-end; flex-wrap: wrap }
```
### .justify-content-space-between  (1 rule)
```css
.justify-content-space-between { -webkit-box-pack:justify; -ms-flex-pack:justify; justify-content:space-between; }
```
### .padding-base  (1 rule)
```css
.padding-base { padding:var(--space-base); }
```
### .padding-bottom-base  (1 rule)
```css
.padding-bottom-base { padding-bottom:var(--space-base); }
```
### .padding-x-base  (1 rule)
```css
.padding-x-base { padding-left:var(--space-base); padding-right:var(--space-base); }
```
### .padding-x-s  (1 rule)
```css
.padding-x-s { padding-left:var(--space-s); padding-right:var(--space-s); }
```
### .padding-y-base  (1 rule)
```css
.padding-y-base { padding-bottom:var(--space-base); padding-top:var(--space-base); }
```
## Share.StickyHeader

### .absolute-top  (4 rules)
```css
.floating-content.floating-content-full-height.absolute-top { top:var(--os-safe-area-top); }
pandable.menu-visible .floating-content-top:not(.absolute-top), .aside-expandable.menu-visible .floating-content-center:not(.absolute-center), .aside-expandable.menu-visible .floating-content-bottom:not(.absolute-bottom) { left:calc(50% + var(--side-menu-size) / 2); }
.tablet .layout-native .floating-content.floating-content-full-height.absolute-top, .phone .layout-native .floating-content.floating-content-full-height.absolute-top { top:var(--os-safe-area-top); }
.absolute-top { top:0; }
```
### .background-neutral-0  (4 rules)
```css
.tag.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.avatar.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.badge.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.background-neutral-0 { background-color:var(--background-color-neutral-0, var(--color-neutral-0)); }
```
### .connect-pill-menu  (5 rules)
```css
.connect-pill-menu .connect-tag { padding: var(--space-none) 14px; }
.connect-pill-menu .connect-tag { margin-right: var(--space-s); margin-left: var(--space-none); }
.connect-pill-menu .horizontal-scroll-tiles-content .list > div:first-child .connect-tag { margin-left: var(--space-s); }
.connect-pill-menu { --local-tag-color:#87929D; --local-tag-border-color: #D8DCDE }
.connect-pill-menu .horizontal-scroll-tiles-content { box-shadow: 0px 2px 4px 0px #0000001A; padding: 10px; /* Hardcoded to keep consistency between old and new Connect designs*/ }
```
### .sticky  (2 rules)
```css
.ios .layout-native .section-group .sticky { position:static; }
.sticky { position:sticky; }
```
### .z-index1  (1 rule)
```css
:where(.backwards-compatibility) .z-index1 { z-index: 1; }
```
## Reusable.HorizontalScrollTiles

### .horizontal-scroll-tiles  (2 rules)
```css
.horizontal-scroll-tiles ::-webkit-scrollbar { display: none; }
.horizontal-scroll-tiles { position: relative; }
```
### .horizontal-scroll-tiles-content  (4 rules)
```css
.horizontal-scroll-tiles-content { display: flex; overflow: auto; background-color: var(--color-neutral-11); padding: var(--space-base) var(--space-base); }
.search--pills .horizontal-scroll-tiles-content { touch-action: pan-x; background-color: white; }
.connect-pill-menu .horizontal-scroll-tiles-content .list > div:first-child .connect-tag { margin-left: var(--space-s); }
.connect-pill-menu .horizontal-scroll-tiles-content { box-shadow: 0px 2px 4px 0px #0000001A; padding: 10px; /* Hardcoded to keep consistency between old and new Connect designs*/ }
```
### .tile-list  (2 rules)
```css
.tile-list { position: relative; }
.tile-list .list.list-group { display: flex; flex-direction:row; overflow: hidden; }
```
## Content.Tag

### .background-primary  (2 rules)
```css
.background-primary { background-color:var(--background-color-primary, var(--color-primary)); }
:where(.backwards-compatibility) .connect-screen-nd .badge.border-radius-rounded.background-primary.OSInline { background-color: var(--connect-color-nd); }
```
### .border-radius-rounded  (7 rules)
```css
.border-radius-rounded { border-radius:var(--border-radius-rounded); }
.border-radius-rounded.form-control[data-input], .border-radius-rounded.form-control[data-textarea], .border-radius-rounded.dropdown-container > div.dropdown-display { border-radius: var(--border-radius-rounded); }
:where(.backwards-compatibility) .updates-badge .badge.border-radius-rounded.background-cyan, :where(.backwards-compatibility) .connect-badge .badge.border-radius-rounded { left: 90%; }
:where(.backwards-compatibility) .badge.border-radius-rounded.connect-badge, :where(.backwards-compatibility) .connect-badge .badge.border-radius-rounded { height: 16px; min-width: 28px; background-color: #50B8B3; }
:where(.backwards-compatibility) .badge.border-radius-rounded.connect-badge > span, :where(.backwards-compatibility) .connect-badge .badge.border-radius-rounded > span { line-height: 16px; margin: auto; color: white; }
:where(.backwards-compatibility) .connect-screen-nd .badge.border-radius-rounded.background-primary.OSInline { background-color: var(--connect-color-nd); }
:where(.backwards-compatibility) .policies .bottom .btn.border-radius-rounded { border-radius: 100px; }
```
### .connect-tag  (4 rules)
```css
.connect-tag { margin: var(--space-none) var(--space-s); font-size: var(--font-size-s); font-weight: var(--font-semi-bold); height: 40px; padding: var(--space-none) var(--space-base); background-color: var(--color-neutral-0); color: var(--local-tag-color, var(--color-neutral-7)); border: 1px solid var(--local-tag-border-color, var(--color-neutral-6)); }
.connect-pill-menu .connect-tag { padding: var(--space-none) 14px; }
.connect-pill-menu .connect-tag { margin-right: var(--space-s); margin-left: var(--space-none); }
.connect-pill-menu .horizontal-scroll-tiles-content .list > div:first-child .connect-tag { margin-left: var(--space-s); }
```
### .connect-tag-active  (1 rule)
```css
.connect-tag-active { background-color: var(--color-primary); color: var(--color-neutral-0); border: none; }
```
### .tag  (14 rules)
```css
.tag { -webkit-box-align:center; -ms-flex-align:center; align-items:center; color:var(--text-color-neutral-0, var(--color-neutral-0)); display:-webkit-inline-box; display:-ms-inline-flexbox; display:inline-flex; font-weight:var(--font-semi-bold); height:32px; -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; line-height:1; min-width:32px; padding:var(--space-none) var(--space-base);  }
.tag.tag-small { font-size:var(--font-size-xs); height:24px; padding:var(--space-none) var(--space-s); }
.tag.tag-medium { font-size:var(--font-size-base); height:40px; padding:var(--space-none) var(--space-m); }
.tag.background-transparent { color:var(--text-color-primary, var(--color-primary)); }
.tag.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.tag.background-neutral-1, .tag.background-neutral-2, .tag.background-neutral-3, .tag.background-neutral-4 { color:var(--text-color-neutral-9, var(--color-neutral-9)); }
*/  /* .tag-item .tag { background-color: var(--color-neutral-0); border: 1px solid #D8DCDE; color: #87929D; border-radius: 16px; font-size: var(--font-size-s); padding: 8px 12px; font-weight: 400; margin-right: var(--space-xs); }
.tag-item.recent-search .tag { background-color: #E9EBED; color: #68737D; margin-top: var(--space-xs); }
.tag-item.active .tag { background-color: #00819C; border: 1px solid #00819C; color: var(--color-neutral-0); }
.tag-item .tag .icon { font-size: 0.7em; }
:where(.backwards-compatibility) .tag.text-primary-color { background-color: var(--color-primary); border: 1px solid var(--color-primary); }
:where(.backwards-compatibility) .tag.text-white { color: var(--color-primary); }
.filter_pill_item.tag { background-color:var(--color-neutral-0); color: #87929D; padding: var(--space-l); border: 1px solid var(--color-neutral-13); font-size: 0.9em; }
.recurrency-pill.tag { padding: var(--space-none) var(--space-s); }
```
### .text-no-wrap  (3 rules)
```css
.text-no-wrap span { white-space: nowrap; }
:where(.backwards-compatibility) .text-no-wrap { white-space: nowrap; }
:where(.backwards-compatibility) .dropdown-popup-row .CountryName .text-no-wrap { color: var(--color-neutral-9) !important; font-weight: var(--font-regular) }
```
## Assemble.AssembleSummary_List__Header

### .assemble-list-header__filter  (2 rules)
```css
.assemble-list-header__filter { height: 40px; }
.assemble-list-header__filter, .assemble-list-header__date { box-shadow: 0px 3px 4px -1px var(--color-neutral-4); }
```
### .bold  (3 rules)
```css
.bold { font-weight:var(--font-bold); }
:where(.backwards-compatibility) b, :where(.backwards-compatibility) strong, :where(.backwards-compatibility) .bold, :where(.backwards-compatibility) .text-bold { font-weight: bold; }
.orbit-theme .orbit-host-survey label.bold { font-weight: var(--font-bold); }
```
### .fa-caret-down  (1 rule)
```css
.fa-caret-down:before { content:"\f0d7" }
```
### .full-height  (4 rules)
```css
.full-height { height:100%; }
.full-height { height: 100%; }
:where(.backwards-compatibility) .full-height[data-dropdown] .scrollable-list, :where(.backwards-compatibility) .full-height.dropdown-container > div.dropdown-list { max-height: 100vh; }
:where(.backwards-compatibility) .full-height.dropdown-container > div.dropdown-list { /*The !important modifier is needed to overwrite inline styles in the element*/ height: auto !important; }
```
### .text-neutral-8  (2 rules)
```css
.text-neutral-8 { color:var(--text-color-neutral-8, var(--color-neutral-8)); }
.leaflet-bar a.text-neutral-8 { color: var(--color-neutral-8); }
```
### .text-primary  (2 rules)
```css
.text-primary, .text-primary-darker { color:var(--text-color-primary, var(--color-primary)); }
.leaflet-bar a.text-primary { color: var(--color-primary); }
```
### .white-space-nowrap  (1 rule)
```css
.white-space-nowrap { white-space:nowrap; }
```
## NewConnect_Utilities.NC_ErrorScreen

### .connect-icon-calendar-cross  (1 rule)
```css
.connect-icon-calendar-cross:before { content: "\e90c"; }
```
### .fa-4x  (1 rule)
```css
.fa-4x { font-size:4em }
```
### .font-size-h5  (1 rule)
```css
.font-size-h5 { font-size:var(--font-size-h5); }
```
### .margin-bottom-m  (1 rule)
```css
.margin-bottom-m { margin-bottom:var(--space-m); }
```
### .nc-error-screen-info  (1 rule)
```css
.nc-error-screen-info { margin-top: 25vh; }
```
### .text-neutral-4  (1 rule)
```css
.text-neutral-4 { color:var(--text-color-neutral-4, var(--color-neutral-4)); }
```
## NewConnect.InBlock_ActionMenu

### .OSAutoMarginTop  (2 rules)
```css
.OSAutoMarginTop { margin-top: 10px; }
.stackedcards .stackedcards-container .OSAutoMarginTop { margin-top:var(--space-none); }
```
### .action-menu  (13 rules)
```css
*/  /* .calendar-view-menu .action-menu { padding: 0; border-top-right-radius: 20px; border-top-left-radius: 20px; }
:where(.backwards-compatibility) .action-menu { bottom: 0; left: 0; margin-top: 0; padding-top: var(--space-base); padding-right: calc(var(--os-safe-area-right) + var(--space-base)); padding-bottom: calc(var(--os-safe-area-bottom) + var(--space-base)); padding-left: calc(var(--os-safe-area-left) + var(--space-base)); pointer-events: auto; position: fixed; -webkit-transform: translateY(100%); transform: translateY(100%); width: 100%; will-change }
:where(.backwards-compatibility) .action-menu-container--visible .action-menu { -webkit-transform: none; transform: none; }
:where(.backwards-compatibility) .action-menu-container--animatable .action-menu { -webkit-transition: all 130ms ease-in; transition: all 130ms ease-in; }
:where(.backwards-compatibility) .action-menu-container--visible.action-menu-container--animatable .action-menu { -webkit-transition: all 330ms ease-out; transition: all 330ms ease-out; }
:where(.backwards-compatibility) .action-menu .close-bar { width: 10vw; height: 6px; background-color: var(--color-neutral-5); border-radius: 5px; }
:where(.backwards-compatibility) .action-menu { bottom: 0; left: 0; margin-top: 0; padding-top: var(--space-base); padding-right: calc(var(--os-safe-area-right) + var(--space-base)); padding-bottom: calc(var(--os-safe-area-bottom) + var(--space-base)); padding-left: calc(var(--os-safe-area-left) + var(--space-base)); pointer-events: auto; position: absolute; -webkit-transform: translateY(100%); transform: translateY(100%); width: 100%; will-cha }
:where(.backwards-compatibility) .action-menu-container--visible .action-menu { -webkit-transform: none; transform: none; }
:where(.backwards-compatibility) .action-menu-container--animatable .action-menu { -webkit-transition: all 130ms ease-in; transition: all 130ms ease-in; }
:where(.backwards-compatibility) .action-menu-container--visible.action-menu-container--animatable .action-menu { -webkit-transition: all 330ms ease-out; transition: all 330ms ease-out; }
:where(.backwards-compatibility) .action-menu .close-bar { width: 10vw; height: 6px; background-color: var(--color-neutral-5); border-radius: 5px; }
.action-menu-container--scrollable .action-menu { max-height: 100vh; overflow: scroll; padding-top: var(--space-none); }
.action-menu-container--padding-none .action-menu { padding-top: var(--space-none); padding-right: calc(var(--os-safe-area-right) + var(--space-none)); padding-bottom: calc(var(--os-safe-area-bottom) + var(--space-none)); padding-left: calc(var(--os-safe-area-left) + var(--space-none)); }
```
### .action-menu-container  (6 rules)
```css
:where(.backwards-compatibility) .action-menu-container { height: 100vh; left: 0; overflow: hidden; pointer-events: none; position: fixed; top: 0; width: 100%; z-index: var(--z-index-menu); }
:where(.backwards-compatibility) .action-menu-container--visible.action-menu-container:after { opacity: 1; }
:where(.backwards-compatibility) .action-menu-container:after { background-color: rgba(0, 0, 0, 0.25); content: ""; display: block; height: 100%; left: 0; opacity: 0; pointer-events: none; position: absolute; top: 0; -webkit-transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1); transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1); width: 100%; will-change: opacity; }
:where(.backwards-compatibility) .action-menu-container { height: 100%; left: 0; overflow: hidden; pointer-events: none; position: fixed; top: 0; width: 100%; z-index: var(--z-index-popups); }
:where(.backwards-compatibility) .action-menu-container--visible.action-menu-container:after { opacity: 1; }
:where(.backwards-compatibility) .action-menu-container:after { background-color: rgba(0, 0, 0, 0.25); content: ""; display: block; height: 100%; left: 0; opacity: 0; pointer-events: none; position: absolute; top: 0; -webkit-transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1); transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1); width: 100%; will-change: opacity; }
```
### .action-menu-container--padding-none  (1 rule)
```css
.action-menu-container--padding-none .action-menu { padding-top: var(--space-none); padding-right: calc(var(--os-safe-area-right) + var(--space-none)); padding-bottom: calc(var(--os-safe-area-bottom) + var(--space-none)); padding-left: calc(var(--os-safe-area-left) + var(--space-none)); }
```
### .action-menu-container--scrollable  (3 rules)
```css
.action-menu-container--scrollable .action-menu { max-height: 100vh; overflow: scroll; padding-top: var(--space-none); }
.action-menu-container--scrollable .action-menu-top, .action-menu-container--scrollable__header { position: sticky; z-index: 1; background-color: var(--color-neutral-0); }
.action-menu-container--scrollable .action-menu-top { margin-bottom: var(--space-none); padding-top: var(--space-base); padding-bottom: var(--space-base); top: 0; }
```
### .action-menu-top  (5 rules)
```css
.calendar-view-menu .action-menu-top { padding: var(--space-s); margin-bottom: 0; }
:where(.backwards-compatibility) .action-menu-top { margin-bottom: var(--space-base); display: flex; align-items: center; justify-content: center; }
:where(.backwards-compatibility) .action-menu-top { margin-bottom: var(--space-base); display: flex; align-items: center; justify-content: center; }
.action-menu-container--scrollable .action-menu-top, .action-menu-container--scrollable__header { position: sticky; z-index: 1; background-color: var(--color-neutral-0); }
.action-menu-container--scrollable .action-menu-top { margin-bottom: var(--space-none); padding-top: var(--space-base); padding-bottom: var(--space-base); top: 0; }
```
### .close-bar  (3 rules)
```css
.calendar-view-menu .close-bar { height: var(--space-xs); }
:where(.backwards-compatibility) .action-menu .close-bar { width: 10vw; height: 6px; background-color: var(--color-neutral-5); border-radius: 5px; }
:where(.backwards-compatibility) .action-menu .close-bar { width: 10vw; height: 6px; background-color: var(--color-neutral-5); border-radius: 5px; }
```
## ConnectPatterns.Input

### .ubt-search-input  (1 rule)
```css
.ubt-layout-main.layout-sticky-title.layout-native .header-title .ubt-search-input, .phone .ubt-layout-main.layout-sticky-title.layout-native .header-title .ubt-search-input { font-size: var(--font-size-h5); }
```
## Interaction.InputWithIcon

### .center  (4 rules)
```css
.card-background-content.top-center, .card-background-content.center, .card-background-content.bottom-center { text-align:center; }
.osui-balloon.center {  }
notification-preview.right .is-right, .osui-notification-preview.left .is-left, .osui-notification-preview.top .is-top, .osui-notification-preview.top-right .is-top-right, .osui-notification-preview.top-left .is-top-left {  }
.center { -webkit-box-align:center; -ms-flex-align:center; align-items:center; -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; }
```
### .fa-search  (1 rule)
```css
.fa-search:before { content:"\f002" }
```
### .input-search  (6 rules)
```css
.ubt-layout-main.layout-sticky-title .header-title span.input-search, .ubt-layout-main.layout-sticky-title .header-title .input-with-icon .input-with-icon-content-icon { font-size: var(--font-size-h5); font-weight: var(--font-regular); line-height: 1; }
.connect-theme .input-search :is(.input[data-input], input[data-input]:empty, textarea[data-textarea], textarea[data-textarea]:empty) { background-color: white; }
:where(.backwards-compatibility) .input-search input[data-input], :where(.backwards-compatibility) .input-search input[data-input]:empty { border: none; background-color: var(--color-neutral-0); width: 100%; }
:where(.backwards-compatibility) .share-with-input .input-with-icon .form-control .input-search :is(.input[data-input], input[data-input]:empty, textarea[data-textarea], textarea[data-textarea]:empty) { background-color: var(--color-neutral-2); }
.connect-share-sheet--legacy .input-search input[data-input]:empty, .connect-share-sheet--legacy .input-search input[data-input]:focus { /*Important is needed to overwrite another !important*/ border: var(--border-size-s) solid var(--color-neutral-5) !important; }
.connect-share-sheet--legacy .input-search input[data-input]::-webkit-search-cancel-button { -webkit-appearance: none; display: none; }
```
### .input-with-icon  (30 rules)
```css
.input-with-icon { display:-webkit-box; display:-ms-flexbox; display:flex; position:relative; }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon { left:auto; right:0; }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left:var(--space-base); padding-right:var(--space-xl); }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon.search-actions { left:0; right:auto; }
.input-with-icon .input-with-icon-content-icon { display:-webkit-inline-box; display:-ms-inline-flexbox; display:inline-flex; height:100%; left:0; position:absolute; width:40px; }
.input-with-icon .input-with-icon-content-icon, .input-with-icon .input-with-icon-content-icon a { color:var(--text-color-neutral-7, var(--color-neutral-7)); }
.input-with-icon .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left:var(--space-xl); }
.input-with-icon .input-with-icon-content-icon.search-actions { left:auto; right:0; }
.input-with-icon .input-with-icon-content-icon.search-actions:hover { color:var(--text-color-neutral-8, var(--color-neutral-8)); cursor:pointer; }
.input-with-icon .input-with-icon-input, .input-with-icon .input-with-icon-input input { width:100%; }
.input-with-icon .fa-fw { width:auto; }
.input-with-icon span.validation-message { display:block; position:absolute; }
.form .input-with-icon .input-with-icon-content-icon { padding-bottom:var(--space-m); z-index:var(--layer-local-tier-1); }
.form .input-with-icon .form-control[class*=ThemeGrid_Width].not-valid ~ span.validation-message { left:0; }
.input-with-icon .input-with-icon-content-icon { width: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); z-index: 1; }
.input-with-icon .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-right: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); padding-left: var(--space-s); }
.input-with-icon:has(.not-valid) .input-with-icon-content-icon { top: calc(-0.5 * calc((var(--space-xs)) + calc(var(--font-size-xxs) * 1.5))); }
.form .input-with-icon .input-with-icon-content-icon { padding-bottom: var(--space-none) }
.input-with-icon span.validation-message, span.validation-message { position: static; }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon + .input-with-icon-input input { padding: var(--space-none) var(--space-base); }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon:has( > div:not(:empty)) + .input-with-icon-input input { padding-left: calc(var(--space-base) + var(--ubt-icon-size-base)); }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon:has( > div:empty) + .input-with-icon-input input { padding-left: var(--space-none); }
.ubt-input-underlined.input-with-icon .input-with-icon-content-icon { width: auto; }
.ubt-layout-main.layout-sticky-title .header-title span.input-search, .ubt-layout-main.layout-sticky-title .header-title .input-with-icon .input-with-icon-content-icon { font-size: var(--font-size-h5); font-weight: var(--font-regular); line-height: 1; }
```
### .input-with-icon-content-icon  (24 rules)
```css
.input-with-icon.input-with-icon-right .input-with-icon-content-icon { left:auto; right:0; }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left:var(--space-base); padding-right:var(--space-xl); }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon.search-actions { left:0; right:auto; }
.input-with-icon .input-with-icon-content-icon { display:-webkit-inline-box; display:-ms-inline-flexbox; display:inline-flex; height:100%; left:0; position:absolute; width:40px; }
.input-with-icon .input-with-icon-content-icon, .input-with-icon .input-with-icon-content-icon a { color:var(--text-color-neutral-7, var(--color-neutral-7)); }
.input-with-icon .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left:var(--space-xl); }
.input-with-icon .input-with-icon-content-icon.search-actions { left:auto; right:0; }
.input-with-icon .input-with-icon-content-icon.search-actions:hover { color:var(--text-color-neutral-8, var(--color-neutral-8)); cursor:pointer; }
.form .input-with-icon .input-with-icon-content-icon { padding-bottom:var(--space-m); z-index:var(--layer-local-tier-1); }
.input-with-icon .input-with-icon-content-icon { width: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); z-index: 1; }
.input-with-icon .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-right: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); padding-left: var(--space-s); }
.input-with-icon:has(.not-valid) .input-with-icon-content-icon { top: calc(-0.5 * calc((var(--space-xs)) + calc(var(--font-size-xxs) * 1.5))); }
.form .input-with-icon .input-with-icon-content-icon { padding-bottom: var(--space-none) }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon + .input-with-icon-input input { padding: var(--space-none) var(--space-base); }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon:has( > div:not(:empty)) + .input-with-icon-input input { padding-left: calc(var(--space-base) + var(--ubt-icon-size-base)); }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon:has( > div:empty) + .input-with-icon-input input { padding-left: var(--space-none); }
.ubt-input-underlined.input-with-icon .input-with-icon-content-icon { width: auto; }
.ubt-layout-main.layout-sticky-title .header-title span.input-search, .ubt-layout-main.layout-sticky-title .header-title .input-with-icon .input-with-icon-content-icon { font-size: var(--font-size-h5); font-weight: var(--font-regular); line-height: 1; }
:where(.backwards-compatibility) .input-with-icon .input-with-icon-content-icon, :where(.backwards-compatibility) .input-with-icon .input-with-icon-content-icon a { color: #B0BEC5; z-index: 1; }
:where(.backwards-compatibility) .input-with-icon .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left: 40px; }
:where(.backwards-compatibility) .input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty)+.input-with-icon-input input { padding-right: 40px; padding-left: 10px; }
:where(.backwards-compatibility) .input-with-icon .input-with-icon-content-icon { height: 45px; }
:where(.backwards-compatibility) .adv-search-input.input-with-icon-right .input-with-icon-content-icon { font-size: 0.7em; font-weight: 400; color: var(--color-neutral-10); white-space: nowrap; width: auto; height: 50px; }
```
### .input-with-icon-input  (10 rules)
```css
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left:var(--space-base); padding-right:var(--space-xl); }
.input-with-icon .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left:var(--space-xl); }
.input-with-icon .input-with-icon-input, .input-with-icon .input-with-icon-input input { width:100%; }
.input-with-icon .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-right: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); padding-left: var(--space-s); }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon + .input-with-icon-input input { padding: var(--space-none) var(--space-base); }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon:has( > div:not(:empty)) + .input-with-icon-input input { padding-left: calc(var(--space-base) + var(--ubt-icon-size-base)); }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon:has( > div:empty) + .input-with-icon-input input { padding-left: var(--space-none); }
:where(.backwards-compatibility) .input-with-icon .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left: 40px; }
:where(.backwards-compatibility) .input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty)+.input-with-icon-input input { padding-right: 40px; padding-left: 10px; }
```
### .input-with-icon-right  (6 rules)
```css
.input-with-icon.input-with-icon-right .input-with-icon-content-icon { left:auto; right:0; }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left:var(--space-base); padding-right:var(--space-xl); }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon.search-actions { left:0; right:auto; }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-right: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); padding-left: var(--space-s); }
:where(.backwards-compatibility) .input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty)+.input-with-icon-input input { padding-right: 40px; padding-left: 10px; }
:where(.backwards-compatibility) .adv-search-input.input-with-icon-right .input-with-icon-content-icon { font-size: 0.7em; font-weight: 400; color: var(--color-neutral-10); white-space: nowrap; width: auto; height: 50px; }
```
### .placeholder-empty  (3 rules)
```css
html[data-uieditorversion^="1"] .placeholder-empty:empty {  }
.ph:empty, .placeholder-empty:empty { display:none; }
list-group, .osui-tabs__content > .ph > .OSBlockWidget, .osui-tabs__content > .placeholder-empty > .OSBlockWidget, .osui-tabs__content > .ph > .list.list-group, .osui-tabs__content > .placeholder-empty > .list.list-group { display:contents; }
```
### .search-placeholder-ellipsis  (2 rules)
```css
.search-placeholder-ellipsis input:placeholder-shown, input.search-placeholder-ellipsis:placeholder-shown { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.search-placeholder-ellipsis input::placeholder, input.search-placeholder-ellipsis::placeholder { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
```
## ConnectPatterns.Icon

### .connect-icon-close  (4 rules)
```css
.connect-icon-close:before { content: "\f07c"; }
.connect-icon-close:before { content: "\e900"; }
.ubt-icon.connect-icon-close:before { content: "\f07c"; }
.connect-share-sheet--legacy .connect-icon-close:before { content: "\f07c"; }
```
### .connect-icon-contacts  (1 rule)
```css
.connect-icon-contacts:before { content: "\f04c"; }
```
### .connect-icon-home  (1 rule)
```css
.connect-icon-home:before { content: "\f052"; }
```
### .connect-icon-list_alt  (1 rule)
```css
.connect-icon-list_alt:before { content: "\f041"; }
```
### .connect-icon-search  (1 rule)
```css
.connect-icon-search:before { content: "\f01b"; }
```
### .connect-icon-union  (1 rule)
```css
.connect-icon-union:before { content: "\f00c"; }
```
### .connect-icon-widgets  (1 rule)
```css
.connect-icon-widgets:before { content: "\f001"; }
```
### .icon-base  (1 rule)
```css
.icon-base { --ubt-icon-size: var(--ubt-icon-size-base); }
```
### .icon-medium  (1 rule)
```css
.icon-medium { --ubt-icon-size: var(--ubt-icon-size-medium); }
```
### .ignore-loading  (2 rules)
```css
.ubt-skeleton-section .ubt-icon:not(.ignore-loading) { border-radius: var(--border-radius-medium); color: transparent; }
an, .ubt-skeleton-section .ubt-skeleton-section__element, .ubt-skeleton-section .ubt-icon:not(.ignore-loading), .ubt-skeleton-section .form > div, .ubt-skeleton-section .osui-dropdown-search, .ubt-skeleton-section .badge { background: var(--ubt-background-skeleton-light); animation: var(--ubt-skeleton-animation); border-color: var(--ubt-background-skeleton-light) }
```
### .text-inherit  (1 rule)
```css
.text-inherit { color: inherit; }
```
### .text-neutral-6  (1 rule)
```css
.text-neutral-6 { color:var(--text-color-neutral-6, var(--color-neutral-6)); }
```
### .text-transparent  (1 rule)
```css
.text-transparent { color: transparent; }
```
### .ubt-icon  (34 rules)
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
[class^="icon-"]:not(.ubt-icon), [class*=" icon-"]:not(.ubt-icon) { /* use !important to prevent issues with browser extensions that change fonts */ font-family: 'material-design-icons' !important; speak: none; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; /* Better Font Rendering =========== */ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
[class^="icon-locality-tabs"]:not(.ubt-icon), [class*=" icon-locality-tabs"]:not(.ubt-icon) { /* use !important to prevent issues with browser extensions that change fonts */ font-family: 'locality-tabs' !important; speak: never; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; /* Better Font Rendering =========== */ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
[class^="icon-my-update-feed"]:not(.ubt-icon), [class*=" icon-my-update-feed"]:not(.ubt-icon) { /* use !important to prevent issues with browser extensions that change fonts */ font-family: 'my-update-feed' !important; speak: never; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; /* Better Font Rendering =========== */ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
[class^="icon-directory-"]:not(.ubt-icon), [class*=" icon-directory-"]:not(.ubt-icon) { /* use !important to prevent issues with browser extensions that change fonts */ font-family: 'icon-directory' !important; speak: never; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; /* Better Font Rendering =========== */ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
[class^="icon-ch-"]:not(.ubt-icon), [class*=" icon-ch-"]:not(.ubt-icon) { /* use !important to prevent issues with browser extensions that change fonts */ font-family: 'communityHub' !important; speak: never; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; /* Better Font Rendering =========== */ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
[class^="photobook-icon-"]:not(.ubt-icon), [class*=" photobook-icon-"]:not(.ubt-icon) { /* use !important to prevent issues with browser extensions that change fonts */ font-family: 'photobook-icon-set' !important; speak: never; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; /* Better Font Rendering =========== */ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
[class^="application-icon-"]:not(.ubt-icon), [class*=" application-icon-"]:not(.ubt-icon) { /* use !important to prevent issues with browser extensions that change fonts */ font-family: 'application-icon' !important; speak: never; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; /* Better Font Rendering =========== */ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
[class^="trove-icon-"]:not(.ubt-icon), [class*=" trove-icon-"]:not(.ubt-icon) { /* use !important to prevent issues with browser extensions that change fonts */ font-family: 'trove-icon' !important; speak: never; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; /* Better Font Rendering =========== */ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
[class^="trove-mobile-icon-"]:not(.ubt-icon), [class*=" trove-mobile-icon-"]:not(.ubt-icon) { /* use !important to prevent issues with browser extensions that change fonts */ font-family: 'trove-mobile-icon' !important; speak: never; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; /* Better Font Rendering =========== */ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
[class^="icon-setting-"]:not(.ubt-icon), [class*=" icon-setting-"]:not(.ubt-icon) { /* use !important to prevent issues with browser extensions that change fonts */ font-family: 'AccountSetting-Icons' !important; speak: never; font-style: normal; font-weight: normal; font-variant: normal; text-transform: none; line-height: 1; /* Better Font Rendering =========== */ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
```
## App_Common.BottomBarContent

### .bottom-bar  (19 rules)
```css
.layout-native .bottom-bar .btn { padding-bottom:var(--space-none); }
.bottom-bar { display:-webkit-box; display:-ms-flexbox; display:flex; }
.bottom-bar:empty:after { color:var(--text-color-neutral-7, var(--color-neutral-7)); content:"Add Bottom Bar Items to this Container"; display:block; font-size:12px; padding:20px; text-align:center; }
.bottom-bar > a, .bottom-bar > div { -webkit-box-flex:1; -ms-flex:1; flex:1; max-width:150px; overflow:hidden; }
.bottom-bar > a { color:var(--text-color-neutral-8, var(--color-neutral-8)); }
.bottom-bar > a.active { color:var(--text-color-primary, var(--color-primary)); }
.layout-native .bottom-bar { height:100%; -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; }
.has-accessible-features .bottom-bar > a:focus { background-color:transparent; -webkit-box-shadow:0 0 0 3px var(--background-color-focus-outer, var(--color-focus-outer)); box-shadow:0 0 0 3px var(--background-color-focus-outer, var(--color-focus-outer)); }
.bottom-bar > div:not(.list), .bottom-bar .list > a { -webkit-box-flex:1; -ms-flex:1; flex:1; max-width:150px; height: auto !important; }
.bottom-bar .list { display: flex; min-width: 100%; white-space: unset; justify-content: space-around; }
.bottom-bar .list script { width: 0px !important; }
.bottom-bar span { white-space: unset; }
on, .bottom-bar-items > a.active .bottom-bar-item-icon, .orbit-theme .bottom-bar.floating-actions-items a, .orbit-theme .bottom-bar.floating-actions-items a:link, .orbit-theme .bottom-bar.floating-actions-items a:visited { color: var(--color-primary-directory); }
.backwards-compatibility) .bottom-bar .floating-actions-items a, :where(.backwards-compatibility) .bottom-bar .floating-actions-items a:link, :where(.backwards-compatibility) .bottom-bar .floating-actions-items a:visited { color: var(--color-primary); display: block; }
/* Disabling for new Connect :where(.backwards-compatibility) .bottom-bar .bottom-bar-item-icon { font-size: 20px; display: block; }
:where(.backwards-compatibility) .bottom-bar .bottom-bar-item-icon .icon { font-size: 16px; }
:where(.backwards-compatibility) .bottom-bar > a, :where(.backwards-compatibility) .bottom-bar > a:link, :where(.backwards-compatibility) .bottom-bar > a:visited { color: #455a64; font-weight: 400; -webkit-user-select: none; user-select: none; }
:where(.backwards-compatibility) .bottom-bar > a.active, :where(.backwards-compatibility) .bottom-bar > a:active { background-color: transparent; color: var(--color-primary); /*primary-color*/ }
ds-compatibility) .bottom-bar > a:active .bottom-bar-item-text, :where(.backwards-compatibility) .bottom-bar > a.active .bottom-bar-item-icon, :where(.backwards-compatibility) .bottom-bar > a:active .bottom-bar-item-icon { color: var(--color-primary); /*primary-color*/ }
```
### .bottom-bar-wrapper  (8 rules)
```css
.landscape .layout.layout-native .header, .landscape .layout.layout-native:not(.blank) .main-content, .landscape .layout.layout-native .bottom-bar-wrapper { padding-left:var(--os-safe-area-left); padding-right:var(--os-safe-area-right); }
.bottom-bar-wrapper { background-color:var(--background-color-neutral-0, var(--color-neutral-0)); border-top:var(--border-size-s) solid var(--border-color-neutral-3, var(--color-neutral-3)); height:100%; }
.android .layout-native .bottom-bar-wrapper { padding-bottom:var(--safe-area-inset-bottom, 0px); }
.layout-native .bottom-bar-wrapper { padding-bottom:var(--os-safe-area-bottom); }
.layout-native .bottom-bar-wrapper .icon-badge .icon { font-size:inherit; }
.bottom-bar-wrapper { height: var(--bottom-bar-size); }
.bottom-bar-wrapper .badge { top: 20%; }
:where(.backwards-compatibility) .bottom-bar-wrapper { animation: popup-fade-in 0.3s ease-out; }
```
## Navigation.BottomBarItem

### .bottom-bar-item  (4 rules)
```css
.bottom-bar-item { display:-webkit-box; display:-ms-flexbox; display:flex; -webkit-box-orient:vertical; -webkit-box-direction:normal; -ms-flex-direction:column; flex-direction:column; height:100%; -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; overflow:hidden; padding:0 var(--space-s); position:relative; }
:where(.backwards-compatibility) .badge(.bottom-bar-item .badge) { font-size: 12px; margin: 0 5px; min-width: 10px; padding: 0 8px 0 9px; }
:where(.backwards-compatibility) .floating-actions .bottom-bar-item { border-color: var(--color-primary); color: var(--color-primary); }
:where(.backwards-compatibility) .bottom-bar-item { padding: 9px 5px 8px; overflow: hidden; position: relative; }
```
### .bottom-bar-item-icon  (6 rules)
```css
.bottom-bar-item-icon { display:-webkit-inline-box; display:-ms-inline-flexbox; display:inline-flex; font-size:var(--font-size-h6); height:auto; -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; }
on, .bottom-bar-items > a.active .bottom-bar-item-icon, .orbit-theme .bottom-bar.floating-actions-items a, .orbit-theme .bottom-bar.floating-actions-items a:link, .orbit-theme .bottom-bar.floating-actions-items a:visited { color: var(--color-primary-directory); }
.backwards-compatibility) .bottom-bar .floating-actions-items a, :where(.backwards-compatibility) .bottom-bar .floating-actions-items a:link, :where(.backwards-compatibility) .bottom-bar .floating-actions-items a:visited { color: var(--color-primary); display: block; }
/* Disabling for new Connect :where(.backwards-compatibility) .bottom-bar .bottom-bar-item-icon { font-size: 20px; display: block; }
:where(.backwards-compatibility) .bottom-bar .bottom-bar-item-icon .icon { font-size: 16px; }
ds-compatibility) .bottom-bar > a:active .bottom-bar-item-text, :where(.backwards-compatibility) .bottom-bar > a.active .bottom-bar-item-icon, :where(.backwards-compatibility) .bottom-bar > a:active .bottom-bar-item-icon { color: var(--color-primary); /*primary-color*/ }
```
### .bottom-bar-item-text  (4 rules)
```css
.bottom-bar-item-text { font-size:10px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; word-wrap:break-word; }
on, .bottom-bar-items > a.active .bottom-bar-item-icon, .orbit-theme .bottom-bar.floating-actions-items a, .orbit-theme .bottom-bar.floating-actions-items a:link, .orbit-theme .bottom-bar.floating-actions-items a:visited { color: var(--color-primary-directory); }
.backwards-compatibility) .bottom-bar .floating-actions-items a, :where(.backwards-compatibility) .bottom-bar .floating-actions-items a:link, :where(.backwards-compatibility) .bottom-bar .floating-actions-items a:visited { color: var(--color-primary); display: block; }
ds-compatibility) .bottom-bar > a:active .bottom-bar-item-text, :where(.backwards-compatibility) .bottom-bar > a.active .bottom-bar-item-icon, :where(.backwards-compatibility) .bottom-bar > a:active .bottom-bar-item-icon { color: var(--color-primary); /*primary-color*/ }
```
## BasePatterns.CustomText

### .font-size-xs  (1 rule)
```css
.font-size-xs { font-size:var(--font-size-xs); }
```
### .text-neutral-10  (1 rule)
```css
.text-neutral-10 { color:var(--text-color-neutral-10, var(--color-neutral-10)); }
```
## OutSystemsUIOverrides.IconBadge

### .icon-badge  (10 rules)
```css
.icon-badge { display:inline-block; position:relative; }
.icon-badge .badge { left:45%; position:absolute; top:0; border-radius:var(--border-radius-rounded); font-size:var(--font-size-xs); height:18px; min-width:18px; padding:var(--space-none) var(--space-xs); -webkit-transform:translateY(-40%); -ms-transform:translateY(-40%); transform:translateY(-40%); white-space:nowrap; }
.icon-badge .badge [data-expression] { white-space:nowrap; }
.icon-badge .icon { font-size:var(--font-size-h4); }
.icon-badge div:first-child:empty {  }
.layout-native .bottom-bar-wrapper .icon-badge .icon { font-size:inherit; }
.icon-badge { display: inherit; }
:where(.backwards-compatibility) .LittleBadge .icon-badge .badge { top: -4px; font-size: 12px; padding: 0px 6px 0px 6px; }
:where(.backwards-compatibility) .app-menu .icon-badge .badge { height: auto; padding: 2px 5px; top: 1px; left: 5px; }
:where(.backwards-compatibility) .member-count-badge-content .icon-badge .badge { height: unset; top: 5px; }
```
## OutSystemsUIOverrides.Badge

### .background-red  (1 rule)
```css
.background-red { background-color:var(--background-color-red, var(--color-red)); }
```
### .badge  (29 rules)
```css
.badge { -webkit-box-align:center; -ms-flex-align:center; align-items:center; color:var(--text-color-neutral-0, var(--color-neutral-0)); display:-webkit-inline-box; display:-ms-inline-flexbox; display:inline-flex; font-weight:var(--font-semi-bold); height:32px; -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; line-height:1; min-width:32px; }
.badge.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.badge.background-neutral-1, .badge.background-neutral-2, .badge.background-neutral-3, .badge.background-neutral-4 { color:var(--text-color-neutral-9, var(--color-neutral-9)); }
.badge.background-transparent { color:var(--text-color-primary, var(--color-primary)); }
.badge span { width:auto; }
.icon-badge .badge { left:45%; position:absolute; top:0; border-radius:var(--border-radius-rounded); font-size:var(--font-size-xs); height:18px; min-width:18px; padding:var(--space-none) var(--space-xs); -webkit-transform:translateY(-40%); -ms-transform:translateY(-40%); transform:translateY(-40%); white-space:nowrap; }
.icon-badge .badge [data-expression] { white-space:nowrap; }
an, .ubt-skeleton-section .ubt-skeleton-section__element, .ubt-skeleton-section .ubt-icon:not(.ignore-loading), .ubt-skeleton-section .form > div, .ubt-skeleton-section .osui-dropdown-search, .ubt-skeleton-section .badge { background: var(--ubt-background-skeleton-light); animation: var(--ubt-skeleton-animation); border-color: var(--ubt-background-skeleton-light) }
.bottom-bar-wrapper .badge { top: 20%; }
:where(.backwards-compatibility) .badge(.bottom-bar-item .badge) { font-size: 12px; margin: 0 5px; min-width: 10px; padding: 0 8px 0 9px; }
:where(.backwards-compatibility) .badge > span { line-height: 24px; }
:where(.backwards-compatibility) .b2c-login .badge { height: auto; }
:where(.backwards-compatibility) .header-content button.button-group-item.button-group-item .badge.background-primary-color { margin-top: -2px; font-size: 10px; margin-right: 0; }
:where(.backwards-compatibility) .badge.background-white { color: var(--color-primary); }
:where(.backwards-compatibility) .clean-badge .badge { color: transparent; overflow: hidden; padding: 0; }
:where(.backwards-compatibility) .small-badge .badge { width: 15px; height: 15px; left: 15px; font-size: 0.6em; }
:where(.backwards-compatibility) .no-badge .badge { display: none; }
:where(.backwards-compatibility) .LittleBadge .icon-badge .badge { top: -4px; font-size: 12px; padding: 0px 6px 0px 6px; }
:where(.backwards-compatibility) .updates-badge .badge.border-radius-rounded.background-cyan, :where(.backwards-compatibility) .connect-badge .badge.border-radius-rounded { left: 90%; }
:where(.backwards-compatibility) .badge.border-radius-rounded.connect-badge, :where(.backwards-compatibility) .connect-badge .badge.border-radius-rounded { height: 16px; min-width: 28px; background-color: #50B8B3; }
:where(.backwards-compatibility) .badge.border-radius-rounded.connect-badge > span, :where(.backwards-compatibility) .connect-badge .badge.border-radius-rounded > span { line-height: 16px; margin: auto; color: white; }
:where(.backwards-compatibility) .menu-badge .badge { background-color: var(--color-badge-menu); padding: 2px 5px; }
:where(.backwards-compatibility) .menu-badge .badge > span { line-height: 12px; }
:where(.backwards-compatibility) .connect-screen-nd .badge.border-radius-rounded.background-primary.OSInline { background-color: var(--connect-color-nd); }
:where(.backwards-compatibility) .app-menu .badge { font-size: 12px; margin: 0 5px; min-width: 10px; padding: 0 8px 0 8px; text-align: center; }
```
### .ubt-badge  (2 rules)
```css
.ubt-badge.badge-xs { font-size: var(--font-size-xxs); height: 16px; min-width: 16px; width: 16px; }
.OSBlockWidget:has(> .ubt-badge) { display: flex; }
```
## Interaction.BottomSheet

### .focus-trap-bottom  (2 rules)
```css
.focus-trap-bottom { bottom:0; }
.wcag-hide-text.focus-trap-top, .wcag-hide-text.focus-trap-bottom { position:fixed; }
```
### .focus-trap-top  (2 rules)
```css
.focus-trap-top { top:0; }
.wcag-hide-text.focus-trap-top, .wcag-hide-text.focus-trap-bottom { position:fixed; }
```
### .osui-bottom-sheet  (33 rules)
```css
.osui-bottom-sheet { --bottom-sheet-max-height:calc(100vh - 54px); --border-radius-sharp:none; --border-radius-rounded:16px; --osui-bottom-sheet-draggable-area:56px; --osui-bottom-sheet-transition-function:cubic-bezier(0.19, 0.35, 0.56, 0.96); background-color:var(--background-color-neutral-0, var(--color-neutral-0)); border-top-left-radius:var(--bottom-sheet-shape); border-top-right-radius:var(--bottom-sheet-shape);  }
.osui-bottom-sheet {  }
.osui-bottom-sheet .osui-bottom-sheet__content:empty, .osui-bottom-sheet .osui-bottom-sheet__header__top-bar:empty {  }
.osui-bottom-sheet:not(.osui-bottom-sheet--is-open) { -webkit-transition:-webkit-transform 200ms ease-out; transition:-webkit-transform 200ms ease-out; transition:transform 200ms ease-out; transition:transform 200ms ease-out, -webkit-transform 200ms ease-out; }
.osui-bottom-sheet:not(.osui-bottom-sheet--is-open) + .osui-bottom-sheet-overlay { -webkit-transition:opacity 200ms ease-out; transition:opacity 200ms ease-out; }
.layout:not(.layout-native) .osui-bottom-sheet { --bottom-sheet-max-height:85vh; }
.os-high-contrast .osui-bottom-sheet { border:var(--border-size-s) solid var(--border-color-neutral-0, var(--color-neutral-0)); }
.ptr-loading:not(.osui-bottom-sheet--is-active) .osui-bottom-sheet, .ptr-reset:not(.osui-bottom-sheet--is-active) .osui-bottom-sheet { display:none; }
[data-block="Interaction.BottomSheet"]:has(.bottom-sheet-higher-z-index), [data-block="Interaction.BottomSheet"]:has(.bottom-sheet-higher-z-index) .ubt-bottom-sheet.osui-bottom-sheet { --osui-bottom-sheet-layer: 1005; }
/* disabling due to issues with Sharings. .ubt-bottom-sheet.custom-padding .osui-bottom-sheet__header, .ubt-bottom-sheet.osui-bottom-sheet { --osui-bottom-sheet-layer: 103; }
*/ .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview { --ubt-bottomsheet-handler-preview--height: calc(var(--space-s) + var(--space-base) + var(--ubt-bottomsheet-handler-preview--offset)); --ubt-bottomsheet-handler-preview--offset-height: calc(100% - (var(--footer-height) + var(--ubt-bottomsheet-handler-preview--height))); }
.ubt-bottom-sheet.custom-padding.ubt-bottom-sheet--handler-preview .osui-bottom-sheet__header, .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview { /*ensure the bottom bar stays on top of this*/ --osui-bottom-sheet-layer: 1006; }
.screen-container:has(.ubt-layout-home, .ubt-layout-main.layout-sticky-title, .ubt-layout-main, .ubt-layout-detail):has(.osui-bottom-sheet.osui-bottom-sheet--is-open) { overflow: hidden; touch-action: none; }
.active-screen:has(.ubt-pincode.connect-pin-screen.ubt-pin-overlay) .osui-bottom-sheet { z-index: 0; }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet { max-width: 55vw; left: 22.5vw; }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed .osui-bottom-sheet__content { background-color: var(--color-neutral-2); padding-top: var(--space-s); }
.landscape .photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet .osui-bottom-sheet__content { padding-right: calc(var(--space-s) + var(--os-safe-area-right)); padding-left: calc(var(--space-s) + var(--os-safe-area-left)); padding-bottom: calc(var(--space-s) + var(--os-safe-area-bottom)); }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed .ubt-bottom-sheet--content { background-color: var(--color-neutral-0); padding: var(--space-s) var(--space-base); border-radius: 0 0 var(--border-radius-soft) var(--border-radius-soft); }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed [data-radio-button]:has(.photobook-carousel--radio-button) { flex-direction: row-reverse; justify-content: space-between; margin: 0; padding: var(--space-s) 0; border-bottom: var(--border-size-m) solid var(--color-neutral-2); }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed [data-radio-button]:last-of-type:has(.photobook-carousel--radio-button) { border: 0; }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed .photobook-carousel--radio-button:before { border: var(--border-size-m) solid var(--color-neutral-7); }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed .photobook-carousel--radio-button:checked { border: var(--border-size-l) solid var(--color-primary); border-radius: var(--border-radius-circle); }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed .photobook-carousel--radio-button:checked:before { background-color: var(--color-primary); border: var(--border-size-l) solid var(--color-neutral-0); }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed .photobook-carousel--radio-button:checked:hover:before { -webkit-filter: none; filter: none; }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed [data-radio-button]:has(.photobook-carousel--radio-button) label { margin: 0; font-size: var(--font-size-xs); color: var(--color-neutral-10); font-weight: var(--font-regular); }
```
### .osui-bottom-sheet--has-handler  (5 rules)
```css
.osui-bottom-sheet--has-handler .osui-bottom-sheet__header::before { background:var(--background-color-neutral-5, var(--color-neutral-5)); border-radius:100px; content:""; height:4px; left:50%; position:absolute; top:var(--space-base); -webkit-transform:translateX(-50%); -ms-transform:translateX(-50%); transform:translateX(-50%); width:40px; }
.osui-bottom-sheet--has-handler .osui-bottom-sheet__header__top-bar { padding-top:var(--space-l); }
.ubt-bottom-sheet.osui-bottom-sheet--has-handler .osui-bottom-sheet__header::before { top: var(--space-s); }
.ubt-bottom-sheet.osui-bottom-sheet--has-handler .osui-bottom-sheet__header__top-bar { padding-top: calc(var(--space-s) + var(--space-base)); }
.orbit-theme .orbit-host-survey .osui-bottom-sheet.orbit-host-survey-helper-sheet.osui-bottom-sheet--has-handler .osui-bottom-sheet__header__top-bar { padding-top: var(--space-l); }
```
### .osui-bottom-sheet-overlay  (7 rules)
```css
.osui-bottom-sheet--is-open + .osui-bottom-sheet-overlay { opacity:1; pointer-events:all; }
.osui-bottom-sheet:not(.osui-bottom-sheet--is-open) + .osui-bottom-sheet-overlay { -webkit-transition:opacity 200ms ease-out; transition:opacity 200ms ease-out; }
.osui-bottom-sheet-overlay { background-color:var(--background-color-overlay, var(--overlay-background)); height:100vh; left:0; opacity:0; pointer-events:none; position:fixed; top:0; -webkit-transition:opacity 350ms ease-in; transition:opacity 350ms ease-in; width:100vw; z-index:calc(var(--layer-below) + var(--osui-bottom-sheet-layer)); }
.osui-bottom-sheet-overlay {  }
.osui-bottom-sheet--is-open + .osui-bottom-sheet-overlay { pointer-events: auto; }
.ubt-bottom-sheet--transparent-overlay.osui-bottom-sheet--is-open + .osui-bottom-sheet-overlay { opacity: 0; }
.orbit-theme .orbit-host-survey .osui-bottom-sheet-overlay {  }
```
### .osui-bottom-sheet__content  (14 rules)
```css
.osui-bottom-sheet .osui-bottom-sheet__content:empty, .osui-bottom-sheet .osui-bottom-sheet__header__top-bar:empty {  }
.osui-bottom-sheet__content { max-height:var(--bottom-sheet-max-height); overflow-y:scroll; padding:var(--space-base); padding-bottom:calc(var(--bottom-bar-size) + var(--space-m) + var(--os-safe-area-bottom)); }
.landscape .osui-bottom-sheet__header__top-bar, .landscape .osui-bottom-sheet__content { padding-right:calc(var(--space-base) + var(--os-safe-area-right)); padding-left:calc(var(--space-base) + var(--os-safe-area-left)); }
ottom-sheet--is-active .osui-bottom-sheet__content .osui-datepicker, .osui-bottom-sheet--is-active .osui-bottom-sheet__content .osui-monthpicker, .osui-bottom-sheet--is-active .osui-bottom-sheet__content .osui-timepicker { position:relative; }
.ubt-bottom-sheet.custom-padding .osui-bottom-sheet__content { margin-bottom: 0px; padding-bottom: 0px; overflow-y: auto; }
.ubt-bottom-sheet.custom-padding .osui-bottom-sheet__content .ubt-bottom-sheet--content { margin: calc(-1 * var(--space-base)); margin-bottom: calc(var(--bottom-sheet--footer-height)); max-height: unset; }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed .osui-bottom-sheet__content { background-color: var(--color-neutral-2); padding-top: var(--space-s); }
.landscape .photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet .osui-bottom-sheet__content { padding-right: calc(var(--space-s) + var(--os-safe-area-right)); padding-left: calc(var(--space-s) + var(--os-safe-area-left)); padding-bottom: calc(var(--space-s) + var(--os-safe-area-bottom)); }
.connect-share-sheet .osui-bottom-sheet__content { padding: 0; display: flex; flex-direction: column; flex: 1; gap: var(--share-sheet-gap, var(--space-s)); }
.connect-share-sheet.osui-bottom-sheet .osui-bottom-sheet__content .ubt-bottom-sheet--content { margin: 0; flex: 1; }
.osui-bottom-sheet__content *:has(.connect-share-sheet__results) { display: flex; flex-direction: column; min-height: 0; }
.osui-bottom-sheet__content *:has(.connect-share-sheet__fill-parent-end) { flex: 1; }
.connect-share-sheet .osui-bottom-sheet__content .connect-share-sheet__results { flex: 1 1 auto; min-height: 0; overflow-y: auto; }
.orbit-theme .orbit-host-survey .osui-bottom-sheet.orbit-host-survey-helper-sheet .osui-bottom-sheet__content { padding: 0; }
```
### .osui-bottom-sheet__header  (12 rules)
```css
.osui-bottom-sheet--has-handler .osui-bottom-sheet__header::before { background:var(--background-color-neutral-5, var(--color-neutral-5)); border-radius:100px; content:""; height:4px; left:50%; position:absolute; top:var(--space-base); -webkit-transform:translateX(-50%); -ms-transform:translateX(-50%); transform:translateX(-50%); width:40px; }
.osui-bottom-sheet__header { position:relative; }
.osui-bottom-sheet__header::after { content:""; height:var(--osui-bottom-sheet-draggable-area); left:0; position:absolute; top:100%; width:100%; }
.desktop .osui-bottom-sheet__header::after { display:none; }
.ubt-bottom-sheet.osui-bottom-sheet--has-handler .osui-bottom-sheet__header::before { top: var(--space-s); }
.ubt-bottom-sheet .osui-bottom-sheet__header { background-color: var(--color-neutral-0); border-top-left-radius: var(--bottom-sheet-shape); border-top-right-radius: var(--bottom-sheet-shape); }
/* disabling due to issues with Sharings. .ubt-bottom-sheet.custom-padding .osui-bottom-sheet__header, .ubt-bottom-sheet.osui-bottom-sheet { --osui-bottom-sheet-layer: 103; }
.ubt-bottom-sheet.custom-padding.ubt-bottom-sheet--handler-preview .osui-bottom-sheet__header, .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview { /*ensure the bottom bar stays on top of this*/ --osui-bottom-sheet-layer: 1006; }
.connect-share-sheet .osui-bottom-sheet__header__top-bar::before, .connect-share-sheet .osui-bottom-sheet__header::after { display: none; }
.moreActionContainer .osui-bottom-sheet__header::after { height: 20px; }
.orbit-theme .orbit-host-survey .osui-bottom-sheet.orbit-host-survey-helper-sheet .osui-bottom-sheet__header { background-color: var(--color-primary-orbit); }
.orbit-theme .orbit-host-survey .osui-bottom-sheet.orbit-host-survey-helper-sheet .osui-bottom-sheet__header label { color: var(--color-neutral-0); font-size: var(--font-size-base); }
```
### .osui-bottom-sheet__header__top-bar  (11 rules)
```css
.osui-bottom-sheet .osui-bottom-sheet__content:empty, .osui-bottom-sheet .osui-bottom-sheet__header__top-bar:empty {  }
.osui-bottom-sheet--has-handler .osui-bottom-sheet__header__top-bar { padding-top:var(--space-l); }
.osui-bottom-sheet--has-scroll .osui-bottom-sheet__header__top-bar::before { opacity:1; -webkit-transform:translateY(0); -ms-transform:translateY(0); transform:translateY(0); }
.osui-bottom-sheet__header__top-bar { padding:var(--space-base); }
.osui-bottom-sheet__header__top-bar::before { -webkit-box-shadow:var(--shadow-l); box-shadow:var(--shadow-l); content:""; height:100%; left:0; opacity:0; position:absolute; -webkit-transform:translateY(-2px); -ms-transform:translateY(-2px); transform:translateY(-2px); -webkit-transition:opacity 200ms ease, -webkit-transform 200ms var(--osui-bottom-sheet-transition-function); transition:opacity 200ms ease, -webkit-transform 200ms var(--osui-bo }
.osui-bottom-sheet__header__top-bar:empty { padding-bottom:unset; }
.landscape .osui-bottom-sheet__header__top-bar, .landscape .osui-bottom-sheet__content { padding-right:calc(var(--space-base) + var(--os-safe-area-right)); padding-left:calc(var(--space-base) + var(--os-safe-area-left)); }
.ubt-bottom-sheet.osui-bottom-sheet--has-handler .osui-bottom-sheet__header__top-bar { padding-top: calc(var(--space-s) + var(--space-base)); }
.connect-share-sheet .osui-bottom-sheet__header__top-bar::before, .connect-share-sheet .osui-bottom-sheet__header::after { display: none; }
.orbit-theme .orbit-host-survey .osui-bottom-sheet.orbit-host-survey-helper-sheet .osui-bottom-sheet__header__top-bar { padding: var(--space-m); }
.orbit-theme .orbit-host-survey .osui-bottom-sheet.orbit-host-survey-helper-sheet.osui-bottom-sheet--has-handler .osui-bottom-sheet__header__top-bar { padding-top: var(--space-l); }
```
### .ubt-bottom-sheet  (13 rules)
```css
.ubt-bottom-sheet.osui-bottom-sheet--has-handler .osui-bottom-sheet__header::before { top: var(--space-s); }
.ubt-bottom-sheet.osui-bottom-sheet--has-handler .osui-bottom-sheet__header__top-bar { padding-top: calc(var(--space-s) + var(--space-base)); }
.ubt-bottom-sheet .osui-bottom-sheet__header { background-color: var(--color-neutral-0); border-top-left-radius: var(--bottom-sheet-shape); border-top-right-radius: var(--bottom-sheet-shape); }
.ubt-bottom-sheet.custom-padding .osui-bottom-sheet__content { margin-bottom: 0px; padding-bottom: 0px; overflow-y: auto; }
.ubt-bottom-sheet.custom-padding .osui-bottom-sheet__content .ubt-bottom-sheet--content { margin: calc(-1 * var(--space-base)); margin-bottom: calc(var(--bottom-sheet--footer-height)); max-height: unset; }
.ubt-bottom-sheet { --bottom-sheet--safe-padding: calc(var(--bottom-bar-size) + var(--space-m) + var(--os-safe-area-bottom)); display: flex; flex-direction: column; min-height: auto; }
[data-block="Interaction.BottomSheet"]:has(.bottom-sheet-higher-z-index), [data-block="Interaction.BottomSheet"]:has(.bottom-sheet-higher-z-index) .ubt-bottom-sheet.osui-bottom-sheet { --osui-bottom-sheet-layer: 1005; }
/* disabling due to issues with Sharings. .ubt-bottom-sheet.custom-padding .osui-bottom-sheet__header, .ubt-bottom-sheet.osui-bottom-sheet { --osui-bottom-sheet-layer: 103; }
*/ .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview { --ubt-bottomsheet-handler-preview--height: calc(var(--space-s) + var(--space-base) + var(--ubt-bottomsheet-handler-preview--offset)); --ubt-bottomsheet-handler-preview--offset-height: calc(100% - (var(--footer-height) + var(--ubt-bottomsheet-handler-preview--height))); }
.ubt-bottom-sheet.custom-padding.ubt-bottom-sheet--handler-preview .osui-bottom-sheet__header, .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview { /*ensure the bottom bar stays on top of this*/ --osui-bottom-sheet-layer: 1006; }
.ubt-bottom-sheet.ubt-bottom-sheet--handler-preview:not(.osui-bottom-sheet--is-open) { -webkit-transform:translateY(var(--ubt-bottomsheet-handler-preview--offset-height)); -ms-transform:translateY(var(--ubt-bottomsheet-handler-preview--offset-height)); transform:translateY(var(--ubt-bottomsheet-handler-preview--offset-height)); }
.ubt-bottom-sheet.ubt-bottom-sheet--handler-preview.bottom-sheet--dragging.osui-bottom-sheet--is-open { -webkit-transform: translateY(var(--bottom-sheet-translate)); -ms-transform: translateY(var(--bottom-sheet-translate)); transform: translateY(var(--bottom-sheet-translate)); }
.ubt-bottom-sheet.ubt-bottom-sheet--handler-preview.osui-bottom-sheet--is-open { -webkit-transform: translateY(var(--ubt-bottomsheet-handler-preview--anchor-point)); -ms-transform: translateY(var(--ubt-bottomsheet-handler-preview--anchor-point)); transform: translateY(var(--ubt-bottomsheet-handler-preview--anchor-point)); }
```
### .ubt-bottom-sheet--content  (4 rules)
```css
.ubt-bottom-sheet.custom-padding .osui-bottom-sheet__content .ubt-bottom-sheet--content { margin: calc(-1 * var(--space-base)); margin-bottom: calc(var(--bottom-sheet--footer-height)); max-height: unset; }
.ubt-bottom-sheet--content { margin-bottom: var(--bottom-sheet--footer-height); }
.photobook-carousel .osui-bottom-sheet.photobook-carousel-bottom-sheet--speed .ubt-bottom-sheet--content { background-color: var(--color-neutral-0); padding: var(--space-s) var(--space-base); border-radius: 0 0 var(--border-radius-soft) var(--border-radius-soft); }
.connect-share-sheet.osui-bottom-sheet .osui-bottom-sheet__content .ubt-bottom-sheet--content { margin: 0; flex: 1; }
```
### .ubt-bottom-sheet--footer  (2 rules)
```css
.ubt-bottom-sheet--footer { position: absolute; bottom: 0; left: 0; width: 100%; height: var(--bottom-sheet--footer-height); max-height: var(--bottom-sheet--footer-height); }
.connect-share-sheet .ubt-bottom-sheet--footer { position: sticky; }
```
### .wcag-hide-text  (6 rules)
```css
.form .rating span.wcag-hide-text { position:absolute; }
.chrome .osui-tabs .rating .wcag-hide-text, .edge .osui-tabs .rating .wcag-hide-text { margin:unset; }
.form .osui-dropdown-serverside__balloon .wcag-hide-text { position:absolute; margin:-1px; }
.wcag-hide-text { border:0; clip:rect(0 0 0 0); height:1px; margin:-1px; overflow:hidden; padding:0; position:absolute; white-space:nowrap; width:1px; }
.wcag-hide-text {  }
.wcag-hide-text.focus-trap-top, .wcag-hide-text.focus-trap-bottom { position:fixed; }
```
## Adaptive.Columns3

### .columns3  (4 rules)
```css
tem, .phone .columns.columns-medium-left.phone-break-middle > .columns-item, .phone .columns.columns-small-right.phone-break-middle > .columns-item, .phone .columns.columns-medium-right.phone-break-middle > .columns-item { -webkit-box-flex:0; -ms-flex:none; flex:none; width:100%; }
tablet .columns.columns-medium-left.tablet-break-middle > .columns-item, .tablet .columns.columns-small-right.tablet-break-middle > .columns-item, .tablet .columns.columns-medium-right.tablet-break-middle > .columns-item { -webkit-box-flex:0; -ms-flex:none; flex:none; width:100%; }
.connect-event-form-item .columns3 > .columns-item:last-child { margin-left: calc(-1 * (var(--space-base) - var(--space-xs))) }
.connect-event-form__item .columns3 > .columns-item:last-child { margin-left: calc(-1 * (var(--space-base) - var(--space-xs))) }
```
### .gutter-none  (6 rules)
```css
.columns:not(.gutter-none) > .columns-item { min-width:0; }
.columns.gutter-none { margin-left:calc(-1 * var(--space-none) / 2); margin-right:calc(-1 * var(--space-none) / 2); }
.columns.gutter-none > .columns-item { margin-bottom:var(--space-none); padding:var(--space-none) calc(var(--space-none) / 2); }
ld > .columns-item:not(:last-child), .tablet .columns.gutter-none.tablet-break-middle:only-child > .columns-item:not(:last-child), .tablet .columns.gutter-none.tablet-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-none); }
-child > .columns-item:not(:last-child), .phone .columns.gutter-none.phone-break-middle:only-child > .columns-item:not(:last-child), .phone .columns.gutter-none.phone-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-none); }
.columns.ubt-columns.gutter-none { gap: var(--space-none); }
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
### .ubt-columns--three-columns  (2 rules)
```css
> .columns-item:nth-child(2), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(1), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(3) { flex: 0; min-width: max-content; }
.columns .ubt-columns.ubt-columns-same-size.ubt-columns--three-columns > .columns-item, .columns .ubt-columns.ubt-columns-same-size.ubt-columns--tow-columns > .columns-item { flex: 1; }
```
### .ubt-columns-expand-middle  (1 rule)
```css
> .columns-item:nth-child(2), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(1), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(3) { flex: 0; min-width: max-content; }
```
## Assemble.Assemble_FilterSheet

### .assemble-list-filter  (1 rule)
```css
.assemble-list-filter { border-radius: var(--border-radius-soft); border: var(--border-size-s) solid var(--color-neutral-6); }
```
### .font-bold  (1 rule)
```css
.font-bold { font-weight:var(--font-bold); }
```
### .margin-bottom-s  (1 rule)
```css
.margin-bottom-s { margin-bottom:var(--space-s); }
```
### .margin-y-base  (1 rule)
```css
.margin-y-base { margin-bottom:var(--space-base); margin-top:var(--space-base); }
```
## Directory.LocalityListDetail

### .fa-chevron-right  (2 rules)
```css
.fa-chevron-right:before { content:"\f054" }
:where(.backwards-compatibility) .month-year-selector .fa-chevron-right { padding-right: 6px }
```
### .font-size-0-8em  (1 rule)
```css
:where(.backwards-compatibility) .font-size-0-8em { font-size: 0.8em; }
```
### .font-size-0-9em  (2 rules)
```css
:where(.backwards-compatibility) .font-size-0-9em, .phone :where(.backwards-compatibility) .font-size-0-9em, :where(.backwards-compatibility) .tablet .font-size-0-9em { font-size: 0.9em; }
:where(.backwards-compatibility) .font-size-0-9em { font-size: 0.9em; }
```
### .icon-directory-Hosuehold  (2 rules)
```css
.icon-directory-Hosuehold:before { color: #50b8b3; }
.icon-directory-Hosuehold:before { content: "\e906"; }
```
### .icon-directory-Locality  (2 rules)
```css
.icon-directory-Locality:before { color: #db4437; }
.icon-directory-Locality:before { content: "\e907"; }
```
### .icon-directory-members  (2 rules)
```css
.icon-directory-members:before { color: #1976d2; }
.icon-directory-members:before { content: "\e908"; }
```
### .landing-country-list-item  (1 rule)
```css
:where(.backwards-compatibility) .landing-country-list-item { align-items: center; display: inline-flex; justify-content: space-between; width: 100%; }
```
### .list-item  (18 rules)
```css
[data-list-item] .list-item { width: 50%; }
.list-item { display: block; }
.list-item { border-bottom:var(--border-size-s) solid var(--border-color-neutral-4, var(--color-neutral-4)); overflow:hidden; padding:var(--space-m); position:relative; }
.list-item:last-of-type { border-bottom:none; }
.list-item.list-item-no-click-effect .scale-animation { background:transparent !important; opacity:0 !important; }
.list-item .scale-animation { -webkit-animation:list-item-scale-animation 1500ms; animation:list-item-scale-animation 1500ms; background-color:rgba(0, 0, 0, 0.1); border-radius:100px; display:block; height:10px; left:50%; pointer-events:none; position:absolute; top:50%; width:10px; will-change:transform; z-index:var(--layer-global-screen); }
.list .list-item { background-color:var(--background-color-neutral-0, var(--color-neutral-0)); }
.layout-native .list-item { padding:var(--space-base); }
.desktop .list .list-item:hover:not(.list-item-no-hover):not(.list-item-selected) { background-color:var(--background-color-neutral-2, var(--color-neutral-2)); }
s-high-contrast.desktop .list .list-item:hover, .os-high-contrast.desktop .list .list-item-selected, .os-high-contrast.tablet.landscape .list .list-item:hover, .os-high-contrast.tablet.landscape .list .list-item-selected { position:relative; }
t .list-item:hover:before, .os-high-contrast.desktop .list .list-item-selected:before, .os-high-contrast.tablet.landscape .list .list-item:hover:before, .os-high-contrast.tablet.landscape .list .list-item-selected:before { border:var(--border-size-s) solid var(--border-color-focus-outer, var(--color-focus-outer)); border-right-width:0; border-left-width:var(--border-size-l); bottom:0; content:""; display:block; left:0; pointer-events:none; position:absolute; right:0; top:0; }
.split-screen-wrapper .split-left .list-item { cursor:pointer; }
.has-accessible-features .split-left .list-item:focus { -webkit-box-shadow:none; box-shadow:none; }
.has-accessible-features .split-left .list-item:focus:before { border:3px solid var(--border-color-focus-outer, var(--color-focus-outer)); bottom:0; content:""; left:0; position:absolute; right:0; top:0; }
:where(.backwards-compatibility) .layout-native .list-item { padding: var(--space-m); }
:where(.backwards-compatibility) .list-item:last-of-type { border-bottom: 1px solid #cfd8dc; }
:where(.backwards-compatibility) .layout-native .month-year-selector .list-item { border: none; padding-bottom: 5px; padding-left: 0px; padding-top: 10px; }
.list .list-item.background-blue-lightest { background-color: var(--color-blue-lightest) }
```
### .locality-details-container  (1 rule)
```css
:where(.backwards-compatibility) .locality-details-container { display: flex; justify-content: space-around; align-items: center; }
```
### .locality-info-container  (2 rules)
```css
:where(.backwards-compatibility) .locality-info-container { width: 100%; color: #000; display: flex; justify-content: flex-end; align-items: center; }
:where(.backwards-compatibility) .locality-info-container i { padding-left: 3px; font-size: 0.8em; }
```
### .padding-left-s  (2 rules)
```css
.padding-left-s { padding-left:var(--space-s); }
.is-rtl .padding-left-s { padding-left:var(--space-none); padding-right:var(--space-s); }
```
### .text-align-right  (3 rules)
```css
.text-align-right { text-align:right; }
.is-rtl [align=right], .is-rtl .text-align-right { text-align:left; }
:where(.backwards-compatibility) .text-align-right { text-align: right; }
```
### .width25  (1 rule)
```css
:where(.backwards-compatibility) .width25 { min-width: 25%; max-width: 25%; width: 25%; }
```
### .width30  (1 rule)
```css
:where(.backwards-compatibility) .width30 { min-width: 30%; max-width: 30%; width: 30%; }
```
### .width37-5  (1 rule)
```css
:where(.backwards-compatibility) .width37-5 { min-width: 37.5%; max-width: 37.5%; width: 37.5%; }
```
### .width5  (1 rule)
```css
:where(.backwards-compatibility) .width5 { min-width: 5%; max-width: 5%; width: 5%; }
```
### .width55  (1 rule)
```css
:where(.backwards-compatibility) .width55 { min-width: 55%; max-width: 55%; width: 55%; }
```
## (page)

### .active-screen  (11 rules)
```css
.active-screen .osui-sidebar--is-open { opacity:1; -webkit-transform:none; -ms-transform:none; transform:none; -webkit-transition:-webkit-transform 330ms ease-out; transition:-webkit-transform 330ms ease-out; transition:transform 330ms ease-out; transition:transform 330ms ease-out, -webkit-transform 330ms ease-out; will-change:transform; }
.active-screen .osui-sidebar--is-open.osui-sidebar--has-overlay::before { opacity:1; pointer-events:initial; }
.os-high-contrast .active-screen .osui-sidebar--is-open { border-left:var(--border-size-m) solid var(--border-color-focus-outer, var(--color-focus-outer)); border-right:var(--border-size-m) solid var(--border-color-focus-outer, var(--color-focus-outer)); }
.active-screen.screen-container .sidebar.sidebar-open { -webkit-transform:none; -ms-transform:none; transform:none; -webkit-transition:all 330ms ease-out; transition:all 330ms ease-out; will-change:transform; }
keleton-section *::before, .active-screen.screen-container .ubt-skeleton-section *::after, .ubt-skeleton-section input, .ubt-skeleton-section .osui-dropdown-search .vscomp-ele-wrapper, .ubt-skeleton-section .ubt-icon img { visibility: hidden; transition-property: visibility; transition-duration: 0ms; }
.active-screen:has(.ubt-pincode.connect-pin-screen.ubt-pin-overlay) .osui-bottom-sheet { z-index: 0; }
body:has(.slide-from-left-leave:not(.active-screen)) .popup-backdrop { z-index: 1000; }
:where(.backwards-compatibility) .screen-container.active-screen.-enter + .screen-container .card.in-app-notification-card { display: none; }
:where(.backwards-compatibility) .screen-container.active-screen:not(:last-child) .tabs-content-tab > * { position: relative; }
.active-screen[class*="done"] :where(.backwards-compatibility) .layout-native .tabs-content { overflow:hidden; }
ibility) .screen-container.active-screen:not([class*=-enter]) + .screen-container .home-icon-cont, :where(.backwards-compatibility) .screen-container.active-screen:not([class*=-enter]) + .screen-container .back-icon-cont { display: none; }
```
### .osx  (3 rules)
```css
.osx.tablet .layout-top:not(.menu-visible) .header-navigation, .osx.phone .layout-top:not(.menu-visible) .header-navigation { pointer-events:none; }
.osx .vscomp-search-container .vscomp-search-clear, .ios .vscomp-search-container .vscomp-search-clear { line-height:1.1; }
accordion .osui-tabs__header__indicator, .osx.chrome .section-expandable .osui-tabs__header__indicator, .osx.edge .osui-accordion .osui-tabs__header__indicator, .osx.edge .section-expandable .osui-tabs__header__indicator { -webkit-perspective:1000px; perspective:1000px; }
```
### .portrait  (6 rules)
```css
.tablet.portrait .layout-side.layout-native.aside-expandable .main .header { z-index:var(--layer-global-navigation); }
.android.portrait .app-menu-content { padding-top:max(var(--status-bar-height, 0px), var(--safe-area-inset-top, 0px)); }
.is-rtl:not(.portrait) .layout-side.layout-native.aside-visible .app-menu-content { right:0; }
.phone.ios.portrait .layout-native .floating-actions-wrapper { margin-bottom:var(--os-safe-area-bottom); }
.phone.portrait .osui-dropdown-serverside--at-content .osui-dropdown-serverside__balloon-container { --ballon-top-margin-value:calc(var(--header-size) + var(--header-size-content) + 5vw); }
:where(.backwards-compatibility) .iphonex.portrait .menu-sidebar { height: calc(100% - 35px); }
```
### .screen-container  (14 rules)
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
:where(.backwards-compatibility) .screen-container { overflow-x: hidden; overflow-y: auto; }
body.screen-orientation-change-animation .screen-container, body.screen-orientation-change-animation .screen-container .content, body.screen-orientation-change-animation .screen-container .header { animation: screen-orientation-fade 50ms forwards; transition-duration: 50ms; }
:where(.backwards-compatibility) .screen-container.active-screen.-enter + .screen-container .card.in-app-notification-card { display: none; }
:where(.backwards-compatibility) .screen-container.active-screen:not(:last-child) .tabs-content-tab > * { position: relative; }
ibility) .screen-container.active-screen:not([class*=-enter]) + .screen-container .home-icon-cont, :where(.backwards-compatibility) .screen-container.active-screen:not([class*=-enter]) + .screen-container .back-icon-cont { display: none; }
```
## Generic utility classes (too many rules to list; see bundle.css)

`.backwards-compatibility` (1747), `.btn` (126), `.columns` (82), `.columns-item` (71), `.dx-confirmation-dialog` (47), `.form-control` (88), `.header` (99), `.layout` (53), `.layout-native` (278), `.layout-side` (91), `.list` (129), `.list-group` (52), `.phone` (273)

## Design tokens referenced by the rules above

- `--background-color-button`: `var(--color-primary)` (in `.connect-theme`); `var(--color-secondary)` (in `.media-hub-theme`); `var(--orbit-primary-7)` (in `.orbit-theme`)
- `--background-color-content`: `white` (in `.connect-theme`); `var(--color-primary-light)` (in `.media-hub-theme`); `white` (in `.orbit-theme`)
- `--background-color-header`: `var(--color-primary)` (in `.connect-theme`); `var(--color-primary-light)` (in `.media-hub-theme`); `var(--color-primary-orbit)` (in `.orbit-theme`)
- `--border-radius-circle`: `100%` (in `@charset "UTF-8";    :root`); `100%` (in `.ignore-backwards-compatibility-content`)
- `--border-radius-large`: `16px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-medium`: `8px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-none`: `0` (in `@charset "UTF-8";    :root`); `0` (in `.ignore-backwards-compatibility-content`)
- `--border-radius-rounded`: `100px` (in `@charset "UTF-8";    :root`); `16px` (in `.osui-balloon`); `16px` (in `.osui-bottom-sheet`); `16px` (in `.osui-overflow-menu`)
- `--border-radius-soft`: `4px` (in `@charset "UTF-8";    :root`); `4px` (in `.ignore-backwards-compatibility-content`)
- `--border-size-l`: `3px` (in `@charset "UTF-8";    :root`); `3px` (in `.ignore-backwards-compatibility-content`)
- `--border-size-m`: `2px` (in `@charset "UTF-8";    :root`); `2px` (in `.ignore-backwards-compatibility-content`)
- `--border-size-s`: `1px` (in `@charset "UTF-8";    :root`); `1px` (in `.ignore-backwards-compatibility-content`)
- `--bottom-bar-size`: `56px` (in `@charset "UTF-8";    :root`); `61px` (in `:root :where(.backwards-compatibility)`); `56px` (in `.ignore-backwards-compatibility-content`)
- `--bottom-sheet-max-height`: `calc(100vh - 54px)` (in `.osui-bottom-sheet`); `85vh` (in `.layout:not(.layout-native) .osui-bottom-sheet`)
- `--color-background-body`: `#f3f6f8` (in `@charset "UTF-8";    :root`); `var(--color-neutral-0)` (in `:root, .connect-legacy-compatibily-containter`); `#f3f6f8` (in `.ignore-backwards-compatibility-content`)
- `--color-badge-menu`: `#87badd` (in `:root`)
- `--color-blue-dark`: `#1667ad` (in `@charset "UTF-8";    :root`); `#112CBA` (in `:root, .connect-legacy-compatibily-containter`); `#1667ad` (in `.ignore-backwards-compatibility-content`)
- `--color-blue-lightest`: `#e8f2fa` (in `@charset "UTF-8";    :root`); `#E1E5FF` (in `:root, .connect-legacy-compatibily-containter`); `#e8f2fa` (in `.ignore-backwards-compatibility-content`); `#e8f2fa` (in `:root :where(.backwards-compatibility)`)
- `--color-cyan`: `#0d8091` (in `@charset "UTF-8";    :root`); `#4EAEC2` (in `:root, .connect-legacy-compatibily-containter`); `#0d8091` (in `.ignore-backwards-compatibility-content`)
- `--color-cyan-dark`: `#0b6d7b` (in `@charset "UTF-8";    :root`); `#00819C` (in `:root, .connect-legacy-compatibily-containter`); `#0b6d7b` (in `.ignore-backwards-compatibility-content`)
- `--color-cyan-darker`: `#095a66` (in `@charset "UTF-8";    :root`); `#005668` (in `:root, .connect-legacy-compatibily-containter`); `#095a66` (in `.ignore-backwards-compatibility-content`)
- `--color-cyan-lightest`: `#e7f2f4` (in `@charset "UTF-8";    :root`); `#EDF6F8` (in `:root, .connect-legacy-compatibily-containter`); `#e7f2f4` (in `.ignore-backwards-compatibility-content`)
- `--color-focus-outer`: `#ffd337` (in `@charset "UTF-8";    :root`); `#ffd337` (in `.ignore-backwards-compatibility-content`)
- `--color-green-darker`: `#267d36` (in `@charset "UTF-8";    :root`); `#194E23` (in `:root, .connect-legacy-compatibily-containter`); `#267d36` (in `.ignore-backwards-compatibility-content`)
- `--color-green-lightest`: `#ebf7ed` (in `@charset "UTF-8";    :root`); `#EAF3EB` (in `:root, .connect-legacy-compatibily-containter`); `#ebf7ed` (in `.ignore-backwards-compatibility-content`)
- `--color-neutral-0`: `#ffffff` (in `@charset "UTF-8";    :root`); `#ffffff` (in `:root`); `#ffffff` (in `.ignore-backwards-compatibility-content`); `#ffffff` (in `.ignore-backwards-compatibility-content`)
- `--color-neutral-10`: `#101213` (in `@charset "UTF-8";    :root`); `#101213` (in `:root`); `#101213` (in `.ignore-backwards-compatibility-content`)
- `--color-neutral-11`: `#d8dcde` (in `:root`); `#F8F9F9` (in `:root`)
- `--color-neutral-13`: `#2F3941` (in `:root`); `#D8DCDE` (in `:root`)
- `--color-neutral-2`: `#f1f3f5` (in `@charset "UTF-8";    :root`); `#f1f3f5` (in `:root`); `#f1f3f5` (in `.ignore-backwards-compatibility-content`); `#E9EBED` (in `.ignore-backwards-compatibility-content`)
- `--color-neutral-3`: `#e9ecef` (in `@charset "UTF-8";    :root`); `#e9ecef` (in `:root`); `#e9ecef` (in `.ignore-backwards-compatibility-content`); `#D8DCDE` (in `.ignore-backwards-compatibility-content`)
- `--color-neutral-4`: `#dee2e6` (in `@charset "UTF-8";    :root`); `#dee2e6` (in `:root`); `#dee2e6` (in `.ignore-backwards-compatibility-content`); `#C2C8CC` (in `.ignore-backwards-compatibility-content`)
- `--color-neutral-5`: `#ced4da` (in `@charset "UTF-8";    :root`); `#ced4da` (in `:root`); `#ced4da` (in `.ignore-backwards-compatibility-content`); `#87929D` (in `.ignore-backwards-compatibility-content`)
- `--color-neutral-6`: `#adb5bd` (in `@charset "UTF-8";    :root`); `#adb5bd` (in `:root`); `#adb5bd` (in `.ignore-backwards-compatibility-content`); `#68737D` (in `.ignore-backwards-compatibility-content`)
- `--color-neutral-7`: `#6a7178` (in `@charset "UTF-8";    :root`); `#6a7178` (in `:root`); `#6a7178` (in `.ignore-backwards-compatibility-content`); `#49545C` (in `.ignore-backwards-compatibility-content`)
- `--color-neutral-8`: `#4f575e` (in `@charset "UTF-8";    :root`); `#4f575e` (in `:root`); `#4f575e` (in `.ignore-backwards-compatibility-content`); `#2F3941` (in `.ignore-backwards-compatibility-content`)
- `--color-neutral-9`: `#272b30` (in `@charset "UTF-8";    :root`); `#272b30` (in `:root`); `#272b30` (in `.ignore-backwards-compatibility-content`); `#4F575E` (in `.ignore-backwards-compatibility-content`)
- `--color-overlay-neutral-10`: `#101213D9` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-dark`: `#FF6F61` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-darker`: `#BB4338` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-lightest`: `#FFF0EF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-primary`: `#1068eb` (in `@charset "UTF-8";    :root`); `var(--color-cyan-dark)` (in `:root, .connect-legacy-compatibily-containter`); `#1775ba` (in `:root`); `#1775ba` (in `.connect-theme`)
- `--color-primary-dark`: `#0c5e95` (in `:root`)
- `--color-primary-directory`: `#1775ba` (in `:root`)
- `--color-primary-orbit`: `var(--orbit-primary-10)` (in `:root`)
- `--color-purple-dark`: `#6E71FF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-darker`: `#494BAA` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-lighter`: `#EFEFFF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-lightest`: `#F6F6FD` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-red`: `#c92a2a` (in `@charset "UTF-8";    :root`); `#E97575` (in `:root, .connect-legacy-compatibily-containter`); `#c92a2a` (in `.ignore-backwards-compatibility-content`)
- `--color-red-darker`: `#8d1d1d` (in `@charset "UTF-8";    :root`); `#841313` (in `:root, .connect-legacy-compatibily-containter`); `#8d1d1d` (in `.ignore-backwards-compatibility-content`)
- `--color-red-lightest`: `#faeaea` (in `@charset "UTF-8";    :root`); `#FCEAEA` (in `:root, .connect-legacy-compatibily-containter`); `#faeaea` (in `.ignore-backwards-compatibility-content`)
- `--color-rgb-blue-dark`: `17, 44, 186` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-cyan-dark`: `0, 129, 156` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-green-darker`: `25, 78, 35` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-peach-dark`: `255, 111, 97` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-purple-dark`: `110, 113, 255` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-red-darker`: `132, 19, 19` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-yellow-darker`: `140, 97, 0` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-secondary`: `#303d60` (in `@charset "UTF-8";    :root`); `var(--color-purple-dark)` (in `:root, .connect-legacy-compatibily-containter`); `#bfb18c` (in `.media-hub-theme`); `#bfb18c` (in `:where(.backwards-compatibility) .media-hub-menu`)
- `--color-yellow-darker`: `#ac6f00` (in `@charset "UTF-8";    :root`); `#8C6100` (in `:root, .connect-legacy-compatibily-containter`); `#ac6f00` (in `.ignore-backwards-compatibility-content`)
- `--color-yellow-lightest`: `#fef5e5` (in `@charset "UTF-8";    :root`); `#FDF6E5` (in `:root, .connect-legacy-compatibily-containter`); `#fef5e5` (in `.ignore-backwards-compatibility-content`)
- `--connect-color-nd`: `#212454` (in `:root`)
- `--connect-event-form-item-border`: `var(--border-size-s) solid var(--color-neutral-3)` (in `.connect-event-form`)
- `--current-svg-height`: `100vh` (in `:root`)
- `--dx-screen-transition-duration`: `300ms` (in `:root`)
- `--font-bold`: `700` (in `@charset "UTF-8";    :root`); `700` (in `.ignore-backwards-compatibility-content`)
- `--font-regular`: `400` (in `@charset "UTF-8";    :root`); `400` (in `.ignore-backwards-compatibility-content`)
- `--font-semi-bold`: `600` (in `@charset "UTF-8";    :root`); `600` (in `.ignore-backwards-compatibility-content`)
- `--font-size-base`: `16px` (in `@charset "UTF-8";    :root`); `1rem` (in `:root, .connect-legacy-compatibily-containter`); `16px` (in `.ignore-backwards-compatibility-content`)
- `--font-size-h2`: `28px` (in `@charset "UTF-8";    :root`); `1.75rem` (in `:root, .connect-legacy-compatibily-containter`); `28px` (in `.ignore-backwards-compatibility-content`)
- `--font-size-h4`: `22px` (in `@charset "UTF-8";    :root`); `1.375rem` (in `:root, .connect-legacy-compatibily-containter`); `22px` (in `.ignore-backwards-compatibility-content`)
- `--font-size-h5`: `20px` (in `@charset "UTF-8";    :root`); `1.25rem` (in `:root, .connect-legacy-compatibily-containter`); `20px` (in `.ignore-backwards-compatibility-content`)
- `--font-size-h6`: `18px` (in `@charset "UTF-8";    :root`); `1.125rem` (in `:root, .connect-legacy-compatibily-containter`); `18px` (in `.ignore-backwards-compatibility-content`)
- `--font-size-s`: `14px` (in `@charset "UTF-8";    :root`); `0.875rem` (in `:root, .connect-legacy-compatibily-containter`); `14px` (in `.ignore-backwards-compatibility-content`)
- `--font-size-xs`: `12px` (in `@charset "UTF-8";    :root`); `0.75rem` (in `:root, .connect-legacy-compatibily-containter`); `12px` (in `.ignore-backwards-compatibility-content`)
- `--font-size-xxs`: `0.625rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--footer-height`: `0px` (in `@charset "UTF-8";    :root`); `0px` (in `.ignore-backwards-compatibility-content`)
- `--header-color`: `#ffffff` (in `@charset "UTF-8";    :root`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-main`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-home`); `var(--color-neutral-0)` (in `.ubt-layout-detail, .connect-pin-screen`)
- `--header-size`: `56px` (in `@charset "UTF-8";    :root`); `103px` (in `.ubt-layout-main`); `58px` (in `.ubt-layout-home`); `50px` (in `.screen-container .layout.ubt-layout-home.ubt-profile-screen`)
- `--header-size-content`: `48px` (in `@charset "UTF-8";    :root`); `48px` (in `.ignore-backwards-compatibility-content`)
- `--layer-below`: `calc(-1 * var(--layer-system-scale))` (in `@charset "UTF-8";    :root`)
- `--layer-global-navigation`: `calc(var(--layer-above) + var(--layer-global-elevated))` (in `@charset "UTF-8";    :root`)
- `--layer-global-negative`: `-1` (in `@charset "UTF-8";    :root`)
- `--layer-global-screen`: `0` (in `@charset "UTF-8";    :root`)
- `--layer-local-tier-1`: `1` (in `@charset "UTF-8";    :root`)
- `--loading-dot-size`: `10px` (in `:root`)
- `--local-tag-border-color`: `#D8DCDE` (in `.connect-pill-menu`)
- `--local-tag-color`: `#87929D` (in `.connect-pill-menu`)
- `--orbit-primary-6`: `#2857D8` (in `:root`); `var(--color-primary)` (in `:root`)
- `--orbit-primary-7`: `#1D39C4` (in `:root`); `var(--color-primary)` (in `:root`)
- `--os-safe-area-bottom`: `max(env(safe-area-inset-bottom), var(--safe-area-inset-bottom, 0px))` (in `@charset "UTF-8";    :root`); `env(safe-area-inset-bottom)` (in `.ignore-backwards-compatibility-content`)
- `--os-safe-area-left`: `max(env(safe-area-inset-left), var(--safe-area-inset-left, 0px))` (in `@charset "UTF-8";    :root`); `env(safe-area-inset-left)` (in `.ignore-backwards-compatibility-content`)
- `--os-safe-area-right`: `max(env(safe-area-inset-right), var(--safe-area-inset-right, 0px))` (in `@charset "UTF-8";    :root`); `env(safe-area-inset-right)` (in `.ignore-backwards-compatibility-content`)
- `--os-safe-area-top`: `max(env(safe-area-inset-top), var(--safe-area-inset-top, 0px))` (in `@charset "UTF-8";    :root`); `env(safe-area-inset-top)` (in `.ignore-backwards-compatibility-content`)
- `--osui-bottom-sheet-draggable-area`: `56px` (in `.osui-bottom-sheet`); `0` (in `.osui-bottom-sheet--has-scroll`)
- `--osui-bottom-sheet-layer`: `var(--layer-global-off-canvas)` (in `@charset "UTF-8";    :root`); `1005` (in `tomSheet"]:has(.bottom-sheet-higher-z-index) .ubt-bottom-sheet.osui-bottom-sheet`); `103` (in `t.custom-padding .osui-bottom-sheet__header, .ubt-bottom-sheet.osui-bottom-sheet`); `1006` (in `t__header, .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview`)
- `--osui-bottom-sheet-transition-function`: `cubic-bezier(0.19, 0.35, 0.56, 0.96)` (in `.osui-bottom-sheet`)
- `--osui-menu-layer`: `calc(var(--layer-global-navigation) + var(--layer-local-tier-2))` (in `@charset "UTF-8";    :root`)
- `--overlay-background`: `rgba(0, 0, 0, 0.25)` (in `@charset "UTF-8";    :root`); `var(--color-overlay-neutral-10)` (in `:root, .connect-legacy-compatibily-containter`); `rgba(0, 0, 0, 0.25)` (in `.ignore-backwards-compatibility-content`)
- `--shadow-l`: `0 6px 8px rgba(0, 0, 0, 0.1)` (in `@charset "UTF-8";    :root`); `-2px 6px 8px rgba(0, 0, 0, 0.1)` (in `:root, .connect-legacy-compatibily-containter`); `0 6px 8px rgba(0, 0, 0, 0.1)` (in `.ignore-backwards-compatibility-content`)
- `--share-sheet-gap`: `var(--space-s)` (in `.connect-share-sheet`)
- `--side-menu-offset`: `3vw` (in `:root`)
- `--side-menu-size`: `300px` (in `@charset "UTF-8";    :root`); `264px` (in `e, .tablet .layout-native.aside-visible, .tablet .layout-native.aside-expandable`); `90vw` (in `:where(.backwards-compatibility)`); `300px` (in `.ignore-backwards-compatibility-content`)
- `--space-base`: `16px` (in `@charset "UTF-8";    :root`); `16px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `10px` (in `:root :where(.backwards-compatibility)`); `16px` (in `usel .carousel-container > .carousel-container-content > .list > .landscape-cont`)
- `--space-l`: `32px` (in `@charset "UTF-8";    :root`); `32px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `20px` (in `:root :where(.backwards-compatibility)`); `32px` (in `.ignore-backwards-compatibility-content`)
- `--space-m`: `24px` (in `@charset "UTF-8";    :root`); `24px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `15px` (in `:root :where(.backwards-compatibility)`); `24px` (in `:where(.backwards-compatibility) .landscape-photo-legend-landing-member-counter`)
- `--space-none`: `0` (in `@charset "UTF-8";    :root`); `0` (in `:root, .connect-legacy-compatibily-containter--spacing`); `0` (in `:root :where(.backwards-compatibility)`); `0` (in `.ignore-backwards-compatibility-content`)
- `--space-s`: `8px` (in `@charset "UTF-8";    :root`); `8px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `5px` (in `:root :where(.backwards-compatibility)`); `8px` (in `.ignore-backwards-compatibility-content`)
- `--space-xl`: `40px` (in `@charset "UTF-8";    :root`); `40px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `25px` (in `:root :where(.backwards-compatibility)`); `40px` (in `.ignore-backwards-compatibility-content`)
- `--space-xs`: `4px` (in `@charset "UTF-8";    :root`); `4px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `3px` (in `:root :where(.backwards-compatibility)`); `4px` (in `.ignore-backwards-compatibility-content`)
- `--space-xxl`: `48px` (in `@charset "UTF-8";    :root`); `48px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `30px` (in `:root :where(.backwards-compatibility)`); `48px` (in `.ignore-backwards-compatibility-content`)
- `--status-bar-height`: `0px` (in `.ignore-backwards-compatibility-content`)
- `--ubt-background-skeleton-light`: `var(--color-neutral-3)` (in `:root`)
- `--ubt-bottomsheet-handler-preview--height`: `calc(var(--space-s) + var(--space-base) + var(--ubt-bottomsheet-handler-preview--offset))` (in `*/ .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview`)
- `--ubt-bottomsheet-handler-preview--offset-height`: `calc(100% - (var(--footer-height) + var(--ubt-bottomsheet-handler-preview--height)))` (in `*/ .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview`)
- `--ubt-button-height-s`: `40px` (in `:root`)
- `--ubt-button-icon-size`: `var(--ubt-icon-size-small)` (in `.ubt-button--xs`); `var(--ubt-icon-size-medium)` (in `.ubt-button--s`); `var(--ubt-icon-size-base)` (in `.ubt-button--m`)
- `--ubt-icon-size`: `var(--ubt-icon-size-base)` (in `:root`); `var(--ubt-icon-size-base)` (in `.ubt-avatar-image-base, .ubt-lazy-image-base, .ubt-lazy-image--width-base`); `var(--ubt-icon-size-non-standard-32)` (in `.ubt-avatar-image.ubt-lazy-image.ubt-lazy-image-base`); `var(--ubt-icon-size-medium)` (in `.ubt-avatar-image-xxs, .ubt-lazy-image-xxs`)
- `--ubt-icon-size-base`: `24px` (in `:root`)
- `--ubt-icon-size-medium`: `20px` (in `:root`)
- `--ubt-input-icon-box`: `20px` (in `:root`)
- `--ubt-layout-login-padding`: `var(--ubt-pincode-padding, var(--ubt-layout-login-padding-top) var(--space-base) var(--space-l) var(--space-base))` (in `:root`)
- `--ubt-login-screen-padding-top`: `calc(var(--ubt-layout-login-padding-top) + 80px)` (in `:root`)
- `--ubt-login-svg-min-height`: `732px` (in `:root`)
- `--ubt-pincode-button-color`: `var(--color-neutral-8)` (in `:root`); `var(--color-neutral-0)` (in `.ubt-layout--login`)
- `--ubt-pincode-buttons-size`: `64px` (in `:root`)
- `--ubt-skeleton-animation`: `ubt-skeleton-pulse 1.5s ease-in-out infinite` (in `:root`)
- `--z-index-bottom-bar`: `900` (in `:root`)
- `--z-index-menu`: `9200` (in `:root`)
- `--z-index-popups`: `9400` (in `:root`)
