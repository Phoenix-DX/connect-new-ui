# CSS relevant to EventDetail

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

## Orbit_ScreenBlocks.ScreenBlock_EventDetail

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
## Layout.BaseLayout_UpdatedOSUI

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
### .OSInline  (4 rules)
```css
.OSInline { display: inline-block; vertical-align: top; }
table.OSInline { display: inline-table; }
.floating-content.floating-content-full-width > .OSInline { display:inline; }
:where(.backwards-compatibility) .connect-screen-nd .badge.border-radius-rounded.background-primary.OSInline { background-color: var(--connect-color-nd); }
```
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
### .align-content-space-evenly  (1 rule)
```css
.align-content-space-evenly { -ms-flex-line-pack:space-evenly; align-content:space-evenly; }
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
### .bold  (3 rules)
```css
.bold { font-weight:var(--font-bold); }
:where(.backwards-compatibility) b, :where(.backwards-compatibility) strong, :where(.backwards-compatibility) .bold, :where(.backwards-compatibility) .text-bold { font-weight: bold; }
.orbit-theme .orbit-host-survey label.bold { font-weight: var(--font-bold); }
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
### .color-orbit-primary-7  (1 rule)
```css
.color-orbit-primary-7 { color: var(--orbit-primary-7); }
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
### .fa-angle-right  (1 rule)
```css
.fa-angle-right:before { content:"\f105" }
```
### .fa-flag  (1 rule)
```css
.fa-flag:before { content:"\f024" }
```
### .flex-center-vertical  (1 rule)
```css
:where(.backwards-compatibility) .flex-center-vertical { display: flex; align-items: center; }
```
### .flex-direction-row  (9 rules)
```css
.card-sectioned.flex-direction-row .card-image { padding:var(--space-m) var(--space-none) var(--space-m) var(--space-m); }
.card-sectioned.flex-direction-row .card-image.padding-none { padding:var(--space-none); }
.card-sectioned.flex-direction-row .card-sectioned-right .card-image { -webkit-box-ordinal-group:3; -ms-flex-order:2; order:2; padding:var(--space-m) var(--space-m) var(--space-m) var(--space-none); }
.card-sectioned.flex-direction-row .card-sectioned-right .card-image.padding-none { padding:var(--space-none); }
.layout-native .card-sectioned.flex-direction-row .card-image { padding:var(--space-base) var(--space-none) var(--space-base) var(--space-base); }
.layout-native .card-sectioned.flex-direction-row .card-image.padding-none { padding:var(--space-none); }
.counter .center-align.flex-direction-row { -webkit-box-align:center; -ms-flex-align:center; align-items:center; -webkit-box-pack:justify; -ms-flex-pack:justify; justify-content:space-between; }
.flex-direction-row { -webkit-box-orient:horizontal; -webkit-box-direction:normal; -ms-flex-direction:row; flex-direction:row; }
:where(.backwards-compatibility) .flex-direction-row { flex-direction: row; }
```
### .font-size-0-9em  (2 rules)
```css
:where(.backwards-compatibility) .font-size-0-9em, .phone :where(.backwards-compatibility) .font-size-0-9em, :where(.backwards-compatibility) .tablet .font-size-0-9em { font-size: 0.9em; }
:where(.backwards-compatibility) .font-size-0-9em { font-size: 0.9em; }
```
### .font-size-1-1em  (1 rule)
```css
:where(.backwards-compatibility) .font-size-1-1em { font-size: 1.1em; }
```
### .font-size-1-25em  (1 rule)
```css
:where(.backwards-compatibility) .font-size-1-25em { font-size: 1.25em; }
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
### .justify-content-space-between  (1 rule)
```css
.justify-content-space-between { -webkit-box-pack:justify; -ms-flex-pack:justify; justify-content:space-between; }
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
### .margin-left-base  (2 rules)
```css
.margin-left-base { margin-left:var(--space-base); }
.is-rtl .margin-left-base { margin-left:var(--space-none); margin-right:var(--space-base); }
```
### .margin-left-m  (2 rules)
```css
.margin-left-m { margin-left:var(--space-m); }
.is-rtl .margin-left-m { margin-left:var(--space-none); margin-right:var(--space-m); }
```
### .margin-top-m  (1 rule)
```css
.margin-top-m { margin-top:var(--space-m); }
```
### .menu  (1 rule)
```css
:where(.backwards-compatibility) .menu { z-index: var(--z-index-menu); }
```
### .orbit-card-list  (1 rule)
```css
.list.list-group.orbit-card-list { background-color: transparent; padding: var(--space-m); }
```
### .orbit-card-list-cont  (2 rules)
```css
.orbit-card-list-cont { margin-top: var(--space-m); }
.orbit-card-list-cont:first-of-type { margin-top: 0px; }
```
### .orbit-detail  (17 rules)
```css
.header.orbit-detail .header-top { align-items: baseline; height: auto; padding: var(--space-base) var(--space-m); }
.header.orbit-detail .header-top .header-left { flex: none; }
.header.orbit-detail .header-top .header-title { text-align: left; margin-left: var(--space-m); }
.header.orbit-detail .header-top .header-title span { white-space: normal; }
.header.orbit-detail.orbit-header-center .header-top { align-items: center; }
.header.orbit-detail.orbit-header-center .header-top .header-left, .header.orbit-detail.orbit-header-center .header-top .header-title { align-self: center; }
.header.orbit-detail.orbit-transport-detail { background-position: center; background-repeat: no-repeat; background-size: cover; }
.header.orbit-detail.orbit-transport-detail .header-top { background-color: rgba(29, 57, 196, 0.6); }
.header.orbit-detail.orbit-transport-detail.orbit-transport-detail-flight { background-image: url("asset:/UBTConnect/img/Connect2_LegacyShared.flight_detail_image2.png"); }
.header.orbit-detail.orbit-transport-detail.orbit-transport-detail-train { background-image: url("asset:/UBTConnect/img/Connect2_LegacyShared.train_detail_image2.png"); }
.header.orbit-detail.orbit-transport-detail.orbit-transport-detail-boat { background-image: url("asset:/UBTConnect/img/Connect2_LegacyShared.boat_detail_image2.png"); }
.header.orbit-detail.orbit-transport-detail.orbit-transport-detail-vehicle { background-image: url("asset:/UBTConnect/img/Connect2_LegacyShared.car_detail_image2.png"); }
.header.orbit-detail .orbit-milestone-header { display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; }
.header.orbit-detail .orbit-milestone-header .orbit-milestone-sub-header { display: flex; flex-direction: row; justify-content: flex-start; }
:where(.backwards-compatibility) .header.orbit-detail .header-top .header-content > div { align-items: baseline; height: auto; }
/*:where(.backwards-compatibility) .header.orbit-detail .header-top { padding-top: var(--space-xs); }
*/ :where(.backwards-compatibility) .header.orbit-detail.orbit-header-center .header-top .header-content > div { align-items: center; }
```
### .orbit-header-center  (3 rules)
```css
.header.orbit-detail.orbit-header-center .header-top { align-items: center; }
.header.orbit-detail.orbit-header-center .header-top .header-left, .header.orbit-detail.orbit-header-center .header-top .header-title { align-self: center; }
*/ :where(.backwards-compatibility) .header.orbit-detail.orbit-header-center .header-top .header-content > div { align-items: center; }
```
### .orbit-host-survey-link-new  (1 rule)
```css
.orbit-host-survey-link-new { font-size: 0.85em; display: flex; align-items: center; justify-content: space-between; background-color: var(--orbit-primary-6); color: var(--color-neutral-0); padding: var(--space-base) var(--space-m); border-radius: var(--space-base); }
```
### .orbit-icon-date-time  (1 rule)
```css
.orbit-icon-date-time:before { content: "\e917"; }
```
### .orbit-icon-host-guest  (1 rule)
```css
.orbit-icon-host-guest:before { content: "\e919"; }
```
### .orbit-icon-location  (1 rule)
```css
.orbit-icon-location:before { content: "\e918"; }
```
### .orbit-icon-window  (1 rule)
```css
.orbit-icon-window:before { content: "\e910"; }
```
### .padding-left-base  (2 rules)
```css
.padding-left-base { padding-left:var(--space-base); }
.is-rtl .padding-left-base { padding-left:var(--space-none); padding-right:var(--space-base); }
```
### .padding-m  (1 rule)
```css
.padding-m { padding:var(--space-m); }
```
### .padding-x-m  (1 rule)
```css
.padding-x-m { padding-left:var(--space-m); padding-right:var(--space-m); }
```
### .padding-y-m  (1 rule)
```css
.padding-y-m { padding-bottom:var(--space-m); padding-top:var(--space-m); }
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
### .white-space-nowrap  (1 rule)
```css
.white-space-nowrap { white-space:nowrap; }
```
## Layout.MenuIcon__UpdatedOSUI

### .app-menu-icon  (4 rules)
```css
.layout-native .app-menu-icon.back .menu-icon, .desktop .menu-icon, .tablet.landscape .layout-native.aside-visible .menu-icon, .app-menu-icon.back .menu-icon, .app-menu-icon:not(.back) .menu-back { display:none; }
:where(.backwards-compatibility) .layout-native .app-menu-icon { padding: 0px var(--space-base); }
:where(.backwards-compatibility) .layout-native .app-menu-icon.back { padding-top: 4px; }
:where(.backwards-compatibility) .household-screen .header .app-menu-icon { padding-left: 0; }
```
### .back  (2 rules)
```css
.layout-native .app-menu-icon.back .menu-icon, .desktop .menu-icon, .tablet.landscape .layout-native.aside-visible .menu-icon, .app-menu-icon.back .menu-icon, .app-menu-icon:not(.back) .menu-back { display:none; }
:where(.backwards-compatibility) .layout-native .app-menu-icon.back { padding-top: 4px; }
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
## Orbit_Blocks.HostSurvey_PillItem

### .color-orbit-green-6  (1 rule)
```css
.color-orbit-green-6 { color: var(--orbit-green-6); }
```
### .font-size-xs  (1 rule)
```css
.font-size-xs { font-size:var(--font-size-xs); }
```
### .line-height-xs  (1 rule)
```css
.line-height-xs { line-height: var(--font-size-xs); }
```
### .margin-left-s  (2 rules)
```css
.margin-left-s { margin-left:var(--space-s); }
.is-rtl .margin-left-s { margin-left:var(--space-none); margin-right:var(--space-s); }
```
### .orbit-host-survey-pill  (2 rules)
```css
.orbit-host-survey-pill { width: min-content; padding: 4px 8px; border-radius: 12px; display: flex; flex-direction: row; align-items: center; justify-content: center; background-color: var(--orbit-primary-1); color: var(--color-neutral-10); }
.orbit-host-survey-pill.orbit-host-survey-pill-disabled { background-color: var(--color-neutral-3); color: var(--color-neutral-7); }
```
### .orbit-icon-circle-check  (1 rule)
```css
.orbit-icon-circle-check:before { content: "\e935"; }
```
## Content.DEPRECATED_Accordion

### .accordion  (8 rules)
```css
.accordion.orbit-accordion { margin-top: var(--space-s); }
.accordion.orbit-accordion.orbit-accordion-no-margin { margin-top: 0; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item { border-bottom: none; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title { background-color: var(--orbit-primary-1); }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item.no-background .section-expandable-title { background-color: transparent; }
.accordion.orbit-accordion.orbit-accordion-colored-content .section-expandable.orbit-accordion-item .section-expandable-content { background-color: var(--orbit-primary-1); }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title .dividers { color: var(--orbit-primary-7); font-size: 1.1em; font-weight: bold; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title .section-expandable-icon { margin: 0 var(--space-m) 0 0; }
```
### .orbit-accordion  (8 rules)
```css
.accordion.orbit-accordion { margin-top: var(--space-s); }
.accordion.orbit-accordion.orbit-accordion-no-margin { margin-top: 0; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item { border-bottom: none; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title { background-color: var(--orbit-primary-1); }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item.no-background .section-expandable-title { background-color: transparent; }
.accordion.orbit-accordion.orbit-accordion-colored-content .section-expandable.orbit-accordion-item .section-expandable-content { background-color: var(--orbit-primary-1); }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title .dividers { color: var(--orbit-primary-7); font-size: 1.1em; font-weight: bold; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title .section-expandable-icon { margin: 0 var(--space-m) 0 0; }
```
### .orbit-accordion-colored-content  (1 rule)
```css
.accordion.orbit-accordion.orbit-accordion-colored-content .section-expandable.orbit-accordion-item .section-expandable-content { background-color: var(--orbit-primary-1); }
```
### .osui-deprecated  (2 rules)
```css
rea-content.horizontal-scroll .osui-carousel .list.list-group, .scrollable-area-content.vertical-scroll .osui-deprecated.carousel .list.list-group, .scrollable-area-content.vertical-scroll .osui-carousel .list.list-group { overflow-x:initial; overflow-y:initial; }
.osui-deprecated:before { display:none; }
```
## Content.DEPRECATED_AccordionItem

### .dividers  (4 rules)
```css
:where(.backwards-compatibility) .section-expandable.open .section-expandable-title .dividers { color: var(--color-primary); }
:where(.backwards-compatibility) .section-expandable-title .dividers { color: #181818; font-size: 14px; text-transform: none; }
/* :where(.backwards-compatibility) .section-expandable.open .section-expandable-title .dividers { color: #0097eb; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title .dividers { color: var(--orbit-primary-7); font-size: 1.1em; font-weight: bold; }
```
### .is--collapsed  (4 rules)
```css
.section-expandable .section-expandable-content-collapsed, .section-expandable .section-expandable-content.is--collapsed { height:0; padding:var(--space-none) var(--space-m); visibility:hidden; }
.section-expandable .section-expandable-content-collapsed, .section-expandable .section-expandable-content.is--collapsed {  }
.layout-native .section-expandable .section-expandable-content.is--collapsed { padding:var(--space-none) var(--space-base); }
:where(.backwards-compatibility) .section-expandable-content.is--collapsed { height: 0; padding: 0 15px 0 15px; visibility: hidden; }
```
### .no-padding  (3 rules)
```css
.section-expandable .section-expandable-content.no-padding { padding:var(--space-none); }
.layout-native .section-expandable .section-expandable-content.no-padding { padding:var(--space-none); }
:where(.backwards-compatibility) .no-padding, :where(.backwards-compatibility) .padding-none { padding: 0 !important; }
```
### .orbit-accordion-item  (6 rules)
```css
.accordion.orbit-accordion .section-expandable.orbit-accordion-item { border-bottom: none; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title { background-color: var(--orbit-primary-1); }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item.no-background .section-expandable-title { background-color: transparent; }
.accordion.orbit-accordion.orbit-accordion-colored-content .section-expandable.orbit-accordion-item .section-expandable-content { background-color: var(--orbit-primary-1); }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title .dividers { color: var(--orbit-primary-7); font-size: 1.1em; font-weight: bold; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title .section-expandable-icon { margin: 0 var(--space-m) 0 0; }
```
### .section-expandable-content  (21 rules)
```css
.section-expandable .section-expandable-content { display:block; overflow:hidden; }
.section-expandable .section-expandable-content-collapsed, .section-expandable .section-expandable-content.is--collapsed { height:0; padding:var(--space-none) var(--space-m); visibility:hidden; }
.section-expandable .section-expandable-content-collapsed, .section-expandable .section-expandable-content.is--collapsed {  }
.section-expandable .section-expandable-content-expanded, .section-expandable .section-expandable-content.is--expanded { height:auto; padding:var(--space-none) var(--space-m) var(--space-m); visibility:visible; }
.section-expandable .section-expandable-content-animating, .section-expandable .section-expandable-content.is--animating { -webkit-transition:all 300ms ease-in-out; transition:all 300ms ease-in-out; }
.section-expandable .section-expandable-content.no-padding { padding:var(--space-none); }
.section-expandable .section-expandable-content {  }
.section-expandable .section-expandable-content [data-block*=AnimatedLabel]:first-child .animated-label { margin-top:var(--space-s); }
.layout-native .section-expandable .section-expandable-content { padding:var(--space-none) var(--space-base); }
.layout-native .section-expandable .section-expandable-content.is--collapsed { padding:var(--space-none) var(--space-base); }
.layout-native .section-expandable .section-expandable-content.is--expanded { padding:var(--space-none) var(--space-base) var(--space-base); }
.layout-native .section-expandable .section-expandable-content.no-padding { padding:var(--space-none); }
.has-accessible-features .section-expandable .section-expandable-title:focus, .has-accessible-features .section-expandable .section-expandable-content:focus { -webkit-box-shadow:none; box-shadow:none; outline:3px solid var(--border-color-focus-outer, var(--color-focus-outer)); }
.section-expandable-content .choices__list--dropdown.is-active { position:relative; }
:where(.backwards-compatibility) .layout-native .section-expandable-content.is--expanded { height: auto; padding: 0 15px 15px 15px; visibility: visible; }
:where(.backwards-compatibility) .section-expandable-content { padding: 0 15px 0 15px; }
:where(.backwards-compatibility) .section-expandable-content { display: block; overflow: hidden; }
:where(.backwards-compatibility) .section-expandable-content.is--collapsed { height: 0; padding: 0 15px 0 15px; visibility: hidden; }
:where(.backwards-compatibility) .section-expandable-content.is--expanded { height: auto; padding: 0 15px 15px 15px; visibility: visible; }
:where(.backwards-compatibility) .section-expandable-content.is--animating { -webkit-transition: all 300ms ease-in-out; transition: all 300ms ease-in-out; }
.accordion.orbit-accordion.orbit-accordion-colored-content .section-expandable.orbit-accordion-item .section-expandable-content { background-color: var(--orbit-primary-1); }
```
### .section-expandable-icon  (18 rules)
```css
.section-expandable.is--open > .section-expandable-title > .section-expandable-icon { -webkit-transform:rotate(180deg); -ms-transform:rotate(180deg); transform:rotate(180deg); }
.section-expandable.is--disabled .section-expandable-icon { color:var(--text-color-neutral-6, var(--color-neutral-6)); }
.section-expandable .section-expandable-icon { color:var(--text-color-primary, var(--color-primary)); font-family:FontAwesome; font-size:24px; font-weight:400; -webkit-transition:all 300ms ease-in-out; transition:all 300ms ease-in-out; }
.section-expandable .section-expandable-icon:after { content:"\f107"; }
:where(.backwards-compatibility) .section-expandable-icon { margin: 15px 0 0 10px; }
:where(.backwards-compatibility) .section-expandable-icon:before, :where(.backwards-compatibility) .section-expandable-icon:after { background-color: var(--color-primary); }
:where(.backwards-compatibility) .section-expandable.is--open > .section-expandable-title > .section-expandable-icon { -webkit-transform: none; -ms-transform: none; transform: none; }
*/ :where(.backwards-compatibility) .section-expandable-icon { margin-left: 10px; position: relative; width: 16px; }
:where(.backwards-compatibility) .section-expandable-icon:before, :where(.backwards-compatibility) .section-expandable-icon:after { /*primary-color*/ content: ""; height: 11px; position: absolute; right: 3px; top: 5px; transition: all 300ms ease; width: 3px; }
:where(.backwards-compatibility) .section-expandable-icon:before { -webkit-transform: translate(0, 0) rotate(45deg); transform: translate(0, 0) rotate(45deg); }
:where(.backwards-compatibility) .section-expandable-icon:after { -webkit-transform: translate(-6px, 0) rotate(-45deg); transform: translate(-6px, 0) rotate(-45deg); }
:where(.backwards-compatibility) .section-expandable.open .section-expandable-title .section-expandable-icon:before { -webkit-transform: translate(-6px, 0) rotate(45deg); transform: translate(-6px, 0) rotate(45deg); }
:where(.backwards-compatibility) .section-expandable.open .section-expandable-title .section-expandable-icon:after { -webkit-transform: translate(0, 0) rotate(-45deg); transform: translate(0, 0) rotate(-45deg); }
:where(.backwards-compatibility) .section-expandable .section-expandable-icon:after { content: ""; }
:where(.backwards-compatibility) .locality-business-accordion .section-expandable-icon { margin-top: 20px; }
:where(.backwards-compatibility) .selector-class .section-expandable-icon { display: none; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title .section-expandable-icon { margin: 0 var(--space-m) 0 0; }
:where(.backwards-compatibility) .household .selector-class .section-expandable-icon { display: none; }
```
### .section-expandable-title  (22 rules)
```css
.section-expandable.is--open > .section-expandable-title { font-weight:var(--font-semi-bold); }
.section-expandable.is--open > .section-expandable-title > .section-expandable-icon { -webkit-transform:rotate(180deg); -ms-transform:rotate(180deg); transform:rotate(180deg); }
.section-expandable .section-expandable-title { -webkit-box-align:start; -ms-flex-align:start; align-items:flex-start; cursor:pointer; display:-webkit-box; display:-ms-flexbox; display:flex; font-size:var(--font-size-h6); line-height:1; padding:var(--space-m); width:100%; }
.tablet .section-expandable .section-expandable-title { font-size:calc(var(--font-size-h6) - 1px); }
.phone .section-expandable .section-expandable-title { font-size:calc(var(--font-size-h6) - 2px); }
.layout-native .section-expandable .section-expandable-title { padding:var(--space-base); }
.has-accessible-features .section-expandable .section-expandable-title:focus, .has-accessible-features .section-expandable .section-expandable-content:focus { -webkit-box-shadow:none; box-shadow:none; outline:3px solid var(--border-color-focus-outer, var(--color-focus-outer)); }
:where(.backwards-compatibility) .section-expandable.is--open > .section-expandable-title { font-weight: normal; }
:where(.backwards-compatibility) .section-expandable .section-expandable-title { line-height: 1.43 }
:where(.backwards-compatibility) .section-expandable.open .section-expandable-title .dividers { color: var(--color-primary); }
:where(.backwards-compatibility) .section-expandable.is--open > .section-expandable-title > .section-expandable-icon { -webkit-transform: none; -ms-transform: none; transform: none; }
:where(.backwards-compatibility) .section-expandable-title, :where(.backwards-compatibility) .layout-native .section-expandable .section-expandable-title { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: 15px; }
:where(.backwards-compatibility) .section-expandable-title .dividers { color: #181818; font-size: 14px; text-transform: none; }
/* :where(.backwards-compatibility) .section-expandable.open .section-expandable-title .dividers { color: #0097eb; }
:where(.backwards-compatibility) .section-expandable.open .section-expandable-title .section-expandable-icon:before { -webkit-transform: translate(-6px, 0) rotate(45deg); transform: translate(-6px, 0) rotate(45deg); }
:where(.backwards-compatibility) .section-expandable.open .section-expandable-title .section-expandable-icon:after { -webkit-transform: translate(0, 0) rotate(-45deg); transform: translate(0, 0) rotate(-45deg); }
:where(.backwards-compatibility) .selector-class .section-expandable-title { pointer-events: none !important; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title { background-color: var(--orbit-primary-1); }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item.no-background .section-expandable-title { background-color: transparent; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title .dividers { color: var(--orbit-primary-7); font-size: 1.1em; font-weight: bold; }
.accordion.orbit-accordion .section-expandable.orbit-accordion-item .section-expandable-title .section-expandable-icon { margin: 0 var(--space-m) 0 0; }
:where(.backwards-compatibility) .household .selector-class .section-expandable-title { pointer-events: none !important; }
```
## Orbit_Blocks.HostAllocation_List

### .host-allocation-list  (1 rule)
```css
.list.list-group.host-allocation-list { background-color: var(--orbit-primary-1); }
```
## Orbit_Blocks.HostAllocation_ListItem

### .host-allocation-list-item  (3 rules)
```css
.host-allocation-list-item { width: 100%; display: flex; align-items: center; justify-content: space-between; background-color: var(--orbit-primary-1); padding: var(--space-base) var(--space-m); }
.host-allocation-list-item .host-allocation-list-item-left { text-align: left; }
.host-allocation-list-item .host-allocation-list-item-right { padding: 0 var(--space-base); text-align: right; color: var(--orbit-primary-7); font-weight: bold; }
```
### .host-allocation-list-item-left  (1 rule)
```css
.host-allocation-list-item .host-allocation-list-item-left { text-align: left; }
```
### .host-allocation-list-item-right  (1 rule)
```css
.host-allocation-list-item .host-allocation-list-item-right { padding: 0 var(--space-base); text-align: right; color: var(--orbit-primary-7); font-weight: bold; }
```
### .orbit-icon-accommodation  (1 rule)
```css
.orbit-icon-accommodation:before { content: "\e909"; }
```
## Orbit_Blocks.HostAllocation_HelperItem

### .orbit-icon-person-wave  (1 rule)
```css
.orbit-icon-person-wave:before { content: "\e906"; }
```
## Orbit_Blocks.EventDateSelection

### .event-date-selector-list-cont  (1 rule)
```css
.event-date-selector-list-cont { height: auto; width: auto; display: flex; flex-direction: row; justify-content: left; align-items: stretch; background-color: var(--color-neutral-0); padding: var(--space-m); position: sticky; top: 0; z-index: 10; overflow-x: scroll; overflow-y: unset; }
```
## Orbit_Generic_Blocks.ListOfDaySelectors

### .event-date-selector-cont  (1 rule)
```css
.event-date-selector-cont { display: flex; flex-direction: column; align-items: center; }
```
### .event-date-selector-list  (2 rules)
```css
.event-date-selector-list { display: flex; flex-direction: row; height: auto; width: auto; }
.list.list-group.event-date-selector-list { overflow-x: scroll; overflow-y: unset; background-color: var(--color-neutral-0); }
```
### .event-date-selector-weekday  (1 rule)
```css
.event-date-selector-weekday { color: var(--color-neutral-7); margin-top: var(--space-base); }
```
## Orbit_Generic_Blocks.DaySelector

### .event-date-selector  (1 rule)
```css
.event-date-selector { width: 36px; height: 36px; max-width: 36px; max-height: 36px; min-width: 36px; min-height: 36px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; }
```
### .event-date-selector-day  (1 rule)
```css
.event-date-selector-day { margin: 0 var(--space-s); color: var(--orbit-primary-7); border: 1px solid var(--orbit-primary-7); background-color: var(--color-neutral-0); }
```
### .event-date-selector-selected  (1 rule)
```css
.event-date-selector-selected { color: var(--color-neutral-0); border: 1px solid var(--orbit-primary-7); background-color: var(--orbit-primary-7); }
```
## Orbit_Blocks.Card_Template

### .btn-orbit-card  (1 rule)
```css
.btn.btn-orbit-card { background-color: var(--color-neutral-0); border-radius: var(--space-base); }
```
### .margin-bottom-m  (1 rule)
```css
.margin-bottom-m { margin-bottom:var(--space-m); }
```
### .orbit-card-cont  (1 rule)
```css
.orbit-card-cont { width: 100%; display: flex; flex-flow: row nowrap; justify-content: left; align-items: baseline; padding: var(--space-m); border-radius: var(--space-base); }
```
### .orbit-card-content  (1 rule)
```css
.orbit-card-content { width: 100%; display: flex; flex-flow: column nowrap; justify-content: left; }
```
### .orbit-card-content-button-cont  (1 rule)
```css
.orbit-card-content-button-cont { width: 100%; display: flex; justify-content: flex-start; }
```
### .orbit-card-content-info  (1 rule)
```css
.orbit-card-content-info { width: 100%; display: flex; flex-flow: row nowrap; align-items: baseline; }
```
### .orbit-card-content-info-icon  (1 rule)
```css
.orbit-card-content-info-icon { margin-right: var(--space-base); }
```
### .orbit-card-icon  (1 rule)
```css
.orbit-card-icon { font-size: 1.2em; }
```
### .orbit-card-icon-cont  (1 rule)
```css
.orbit-card-icon-cont { display: flex; justify-content: center; align-items: center; padding: var(--space-s) var(--space-base); border-radius: var(--space-m); }
```
### .orbit-card-left-cont  (1 rule)
```css
.orbit-card-left-cont { margin-right: var(--space-m); }
```
### .orbit-card-right-cont  (1 rule)
```css
.orbit-card-right-cont { width: 100%; display: flex; flex-flow: column nowrap; justify-content: flex-start; }
```
### .orbit-card-title-cont  (1 rule)
```css
.orbit-card-title-cont { font-size: 1.3em; font-weight: bold; margin-bottom: var(--space-m); }
```
### .orbit-icon-video-meeting  (1 rule)
```css
.orbit-icon-video-meeting:before { content: "\e90f"; }
```
## Orbit_Blocks.ContactHelpdesk_Footer

### .contact-helpdesk-footer  (1 rule)
```css
.contact-helpdesk-footer { padding: var(--space-l); text-align: center; text-transform: uppercase; font-weight: bold; color: var(--orbit-primary-7); box-shadow: 0px -2px 5px 0px var(--color-neutral-4); background-color: var(--color-neutral-0); }
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

`.backwards-compatibility` (1747), `.btn` (126), `.dx-confirmation-dialog` (47), `.header` (99), `.layout` (53), `.layout-native` (278), `.layout-side` (91), `.list` (128), `.list-group` (51), `.orbit-theme` (122), `.phone` (273), `.section-expandable` (51)

## Design tokens referenced by the rules above

- `--background-color-content`: `white` (in `.connect-theme`); `var(--color-primary-light)` (in `.media-hub-theme`); `white` (in `.orbit-theme`)
- `--background-color-header`: `var(--color-primary)` (in `.connect-theme`); `var(--color-primary-light)` (in `.media-hub-theme`); `var(--color-primary-orbit)` (in `.orbit-theme`)
- `--border-radius-circle`: `100%` (in `@charset "UTF-8";    :root`); `100%` (in `.ignore-backwards-compatibility-content`)
- `--border-radius-large`: `16px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-medium`: `8px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-none`: `0` (in `@charset "UTF-8";    :root`); `0` (in `.ignore-backwards-compatibility-content`)
- `--border-radius-rounded`: `100px` (in `@charset "UTF-8";    :root`); `16px` (in `.osui-balloon`); `16px` (in `.osui-bottom-sheet`); `16px` (in `.osui-overflow-menu`)
- `--border-size-m`: `2px` (in `@charset "UTF-8";    :root`); `2px` (in `.ignore-backwards-compatibility-content`)
- `--border-size-s`: `1px` (in `@charset "UTF-8";    :root`); `1px` (in `.ignore-backwards-compatibility-content`)
- `--bottom-bar-size`: `56px` (in `@charset "UTF-8";    :root`); `61px` (in `:root :where(.backwards-compatibility)`); `56px` (in `.ignore-backwards-compatibility-content`)
- `--color-background-body`: `#f3f6f8` (in `@charset "UTF-8";    :root`); `var(--color-neutral-0)` (in `:root, .connect-legacy-compatibily-containter`); `#f3f6f8` (in `.ignore-backwards-compatibility-content`)
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
- `--color-purple-dark`: `#6E71FF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-darker`: `#494BAA` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-lighter`: `#EFEFFF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-lightest`: `#F6F6FD` (in `:root, .connect-legacy-compatibily-containter`)
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
- `--header-color`: `#ffffff` (in `@charset "UTF-8";    :root`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-main`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-home`); `var(--color-neutral-0)` (in `.ubt-layout-detail, .connect-pin-screen`)
- `--header-size`: `56px` (in `@charset "UTF-8";    :root`); `103px` (in `.ubt-layout-main`); `58px` (in `.ubt-layout-home`); `50px` (in `.screen-container .layout.ubt-layout-home.ubt-profile-screen`)
- `--header-size-content`: `48px` (in `@charset "UTF-8";    :root`); `48px` (in `.ignore-backwards-compatibility-content`)
- `--layer-global-navigation`: `calc(var(--layer-above) + var(--layer-global-elevated))` (in `@charset "UTF-8";    :root`)
- `--layer-global-negative`: `-1` (in `@charset "UTF-8";    :root`)
- `--layer-local-tier-1`: `1` (in `@charset "UTF-8";    :root`)
- `--loading-dot-size`: `10px` (in `:root`)
- `--orbit-green-6`: `#19B3A1` (in `:root`)
- `--orbit-primary-1`: `#F0F5FF` (in `:root`)
- `--orbit-primary-6`: `#2857D8` (in `:root`); `var(--color-primary)` (in `:root`)
- `--orbit-primary-7`: `#1D39C4` (in `:root`); `var(--color-primary)` (in `:root`)
- `--os-safe-area-bottom`: `max(env(safe-area-inset-bottom), var(--safe-area-inset-bottom, 0px))` (in `@charset "UTF-8";    :root`); `env(safe-area-inset-bottom)` (in `.ignore-backwards-compatibility-content`)
- `--os-safe-area-left`: `max(env(safe-area-inset-left), var(--safe-area-inset-left, 0px))` (in `@charset "UTF-8";    :root`); `env(safe-area-inset-left)` (in `.ignore-backwards-compatibility-content`)
- `--os-safe-area-right`: `max(env(safe-area-inset-right), var(--safe-area-inset-right, 0px))` (in `@charset "UTF-8";    :root`); `env(safe-area-inset-right)` (in `.ignore-backwards-compatibility-content`)
- `--os-safe-area-top`: `max(env(safe-area-inset-top), var(--safe-area-inset-top, 0px))` (in `@charset "UTF-8";    :root`); `env(safe-area-inset-top)` (in `.ignore-backwards-compatibility-content`)
- `--osui-menu-layer`: `calc(var(--layer-global-navigation) + var(--layer-local-tier-2))` (in `@charset "UTF-8";    :root`)
- `--side-menu-offset`: `3vw` (in `:root`)
- `--side-menu-size`: `300px` (in `@charset "UTF-8";    :root`); `264px` (in `e, .tablet .layout-native.aside-visible, .tablet .layout-native.aside-expandable`); `90vw` (in `:where(.backwards-compatibility)`); `300px` (in `.ignore-backwards-compatibility-content`)
- `--space-base`: `16px` (in `@charset "UTF-8";    :root`); `16px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `10px` (in `:root :where(.backwards-compatibility)`); `16px` (in `usel .carousel-container > .carousel-container-content > .list > .landscape-cont`)
- `--space-l`: `32px` (in `@charset "UTF-8";    :root`); `32px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `20px` (in `:root :where(.backwards-compatibility)`); `32px` (in `.ignore-backwards-compatibility-content`)
- `--space-m`: `24px` (in `@charset "UTF-8";    :root`); `24px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `15px` (in `:root :where(.backwards-compatibility)`); `24px` (in `:where(.backwards-compatibility) .landscape-photo-legend-landing-member-counter`)
- `--space-none`: `0` (in `@charset "UTF-8";    :root`); `0` (in `:root, .connect-legacy-compatibily-containter--spacing`); `0` (in `:root :where(.backwards-compatibility)`); `0` (in `.ignore-backwards-compatibility-content`)
- `--space-s`: `8px` (in `@charset "UTF-8";    :root`); `8px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `5px` (in `:root :where(.backwards-compatibility)`); `8px` (in `.ignore-backwards-compatibility-content`)
- `--space-xl`: `40px` (in `@charset "UTF-8";    :root`); `40px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `25px` (in `:root :where(.backwards-compatibility)`); `40px` (in `.ignore-backwards-compatibility-content`)
- `--space-xs`: `4px` (in `@charset "UTF-8";    :root`); `4px` (in `:root, .connect-legacy-compatibily-containter--spacing`); `3px` (in `:root :where(.backwards-compatibility)`); `4px` (in `.ignore-backwards-compatibility-content`)
- `--status-bar-height`: `0px` (in `.ignore-backwards-compatibility-content`)
- `--ubt-button-height-s`: `40px` (in `:root`)
- `--ubt-layout-login-padding`: `var(--ubt-pincode-padding, var(--ubt-layout-login-padding-top) var(--space-base) var(--space-l) var(--space-base))` (in `:root`)
- `--ubt-login-screen-padding-top`: `calc(var(--ubt-layout-login-padding-top) + 80px)` (in `:root`)
- `--ubt-login-svg-min-height`: `732px` (in `:root`)
- `--ubt-pincode-button-color`: `var(--color-neutral-8)` (in `:root`); `var(--color-neutral-0)` (in `.ubt-layout--login`)
- `--z-index-bottom-bar`: `900` (in `:root`)
- `--z-index-menu`: `9200` (in `:root`)
