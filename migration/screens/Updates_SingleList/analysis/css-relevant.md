# CSS relevant to Updates_SingleList

Load order of stylesheets (keep this order in the build):

1. `/UBTConnect/css/_Basic.css`
2. `/UBTConnect/css/OutSystemsReactWidgets.css`
3. `/UBTConnect/css/UBT_AppManager.PIN.PinCode.css`
4. `/UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css`
5. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css`
6. `/UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css`
7. `/UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css`
8. `/UBTConnect/css/Connect2_LegacyShared.UBTConnect.css`
9. `/UBTConnect/css/UBTConnect.Directory_Updates.Updates_SingleList.css`
10. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css`

Rules below are those whose selector contains a class used on the captured page, grouped by the block that owns the element. Full source: `styles/bundle.css`.

## Layouts.Layout_MainPages_FixedTitle

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
### .background-neutral-0  (4 rules)
```css
.tag.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.avatar.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.badge.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.background-neutral-0 { background-color:var(--background-color-neutral-0, var(--color-neutral-0)); }
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
### .display-flex  (1 rule)
```css
.display-flex { display:-webkit-box; display:-ms-flexbox; display:flex; }
```
### .flex-direction-column  (2 rules)
```css
.counter .center-align.flex-direction-column { -webkit-box-align:center; -ms-flex-align:center; align-items:center; -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; }
.flex-direction-column { -webkit-box-orient:vertical; -webkit-box-direction:normal; -ms-flex-direction:column; flex-direction:column; }
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
### .header-content  (9 rules)
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
```
### .header-top-content  (12 rules)
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
```
### .header-top-search  (2 rules)
```css
.ubt-layout-main.layout-native .header-top-search { padding: var(--space-base); }
bt-layout-main.layout-native .header-top-title, .phone .ubt-layout-main.layout-native .header-top-title, .tablet .ubt-layout-main.layout-native .header-top-search, .phone .ubt-layout-main.layout-native .header-top-search { padding-bottom: 0; }
```
### .header-top-title  (3 rules)
```css
.ubt-layout-main.layout-native .header-top-title { padding: var(--space-base); position:sticky; top:0; z-index:100; }
bt-layout-main.layout-native .header-top-title, .phone .ubt-layout-main.layout-native .header-top-title, .tablet .ubt-layout-main.layout-native .header-top-search, .phone .ubt-layout-main.layout-native .header-top-search { padding-bottom: 0; }
.ubt-layout-main.layout-sticky-title.layout-native .header-top-title, .phone .ubt-layout-main.layout-sticky-title.layout-native .header-top-title { background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-cyan) 100%); }
```
### .hide-header-on-scroll  (11 rules)
```css
.layout-native.hide-header-on-scroll .header { top:calc(-1 * (var(--header-size) + var(--os-safe-area-top))); }
.android .layout-native.hide-header-on-scroll .header { top:calc(-1 * (var(--header-size) + max(var(--status-bar-height, 0px), var(--safe-area-inset-top, 0px)))); }
.desktop .layout.layout-native.layout-side.aside-expandable.hide-header-on-scroll:not(.header-is--visible) .app-menu-content { padding-top:var(--header-size-content); }
.tablet.landscape .layout-side.layout-native.aside-expandable.hide-header-on-scroll:not(.header-is--visible) .app-menu-content { padding-top:var(--header-size-content); }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .main { display:grid; grid-template:auto 1fr auto/1fr; grid-template-areas:"header" "content" "footer"; max-height:var(--viewport-height, 100vh); width:100%; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .main {  }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .header { grid-area:header; position:relative; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) [data-block="Private.PullToRefresh"] { display:contents; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .pull-to-refresh { top:calc(var(--header-size) + var(--header-size-content) + var(--os-safe-area-top)); }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .content { background-color:var(--background-color-body, var(--color-background-body)); grid-area:content; overflow-x:hidden; overflow-y:auto; }
.ios .layout-native.ios-bounce:not(.hide-header-on-scroll) .content-bottom { grid-area:footer; position:relative; }
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
### .justify-content-flex-start  (1 rule)
```css
.justify-content-flex-start { -webkit-box-pack:start; -ms-flex-pack:start; justify-content:flex-start; }
```
### .layout-gray-background  (1 rule)
```css
.layout-gray-background .content { background-color: var(--color-neutral-4) }
```
### .layout-sticky-title  (5 rules)
```css
.screen-container:has(.ubt-layout-home, .ubt-layout-main.layout-sticky-title, .ubt-layout-main, .ubt-layout-detail):has(.osui-bottom-sheet.osui-bottom-sheet--is-open) { overflow: hidden; touch-action: none; }
.ubt-layout-main.layout-sticky-title { --header-size: 63px; }
.ubt-layout-main.layout-sticky-title.layout-native .header-top-title, .phone .ubt-layout-main.layout-sticky-title.layout-native .header-top-title { background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-cyan) 100%); }
.ubt-layout-main.layout-sticky-title.layout-native .header-title .ubt-search-input, .phone .ubt-layout-main.layout-sticky-title.layout-native .header-title .ubt-search-input { font-size: var(--font-size-h5); }
.ubt-layout-main.layout-sticky-title .header-title span.input-search, .ubt-layout-main.layout-sticky-title .header-title .input-with-icon .input-with-icon-content-icon { font-size: var(--font-size-h5); font-weight: var(--font-regular); line-height: 1; }
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
.Household_GalleryCard-list.list.list-group { display: flex; justify-content: flex-start; overflow-x: scroll; -ms-overflow-style: none; /* Internet Explorer 10+ */ scrollbar-width: none; /* Firefox */ }
.Household_GalleryCard-list.list.list-group::-webkit-scrollbar { display: none; /* Safari and Chrome */ }
.calendar-list.list.list-group { display: flex; flex-direction: row; overflow-x: auto !important; scroll-snap-type: x mandatory; /* scroll-behavior: smooth;*/ scroll-snap-points-x: repeat(100vw); -webkit-overflow-scrolling: touch; /* border-bottom: 1px solid var(--color-neutral-11);*/ background-color: white; }
.calendar-list.list.list-group.calendar-list--day-view { /* border-bottom:0*/ }
.tag-list .list.list-group { display: flex; flex-direction:row; overflow: hidden; }
.tag-list.recent-search .list.list-group { flex-wrap: wrap; }
.list.list-group.updates-list { overflow: visible; }
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
### .sticky-observer  (1 rule)
```css
.sticky-observer { height:var(--header-size); left:0; position:absolute; right:0; top:0; visibility:hidden; }
```
### .ubt-layout-main  (20 rules)
```css
.ubt-layout-main { --header-color: var(--color-primary-gradient-linear); --header-size: 103px; }
.ubt-layout-main .header { background: var(--header-color); }
.ubt-layout-main.layout-native .header-top { padding: var(--space-base); }
.ubt-layout-main.layout-native .header-title, .phone .ubt-layout-main.layout-native .header-title { color: var(--color-neutral-0); font-size: var(--font-size-h2); font-weight: var(--font-semi-bold); }
.tablet .ubt-layout-main.layout-native .header-top, .phone .ubt-layout-main.layout-native .header-top { padding-bottom: 0; }
.ubt-layout-main.layout-native .header-right { color: var(--color-neutral-0); }
.ubt-layout-main.layout-native .header-top-title { padding: var(--space-base); position:sticky; top:0; z-index:100; }
.ubt-layout-main.layout-native .header-top-search { padding: var(--space-base); }
bt-layout-main.layout-native .header-top-title, .phone .ubt-layout-main.layout-native .header-top-title, .tablet .ubt-layout-main.layout-native .header-top-search, .phone .ubt-layout-main.layout-native .header-top-search { padding-bottom: 0; }
.ubt-layout-home:has(header .header-top-content:empty), .ubt-layout-main:has(header .header-top-content:empty) { --header-size: calc(var(--header-size) + var(--space-base)); }
.ubt-layout-home header:has(.header-top-content:empty) .header-top, .ubt-layout-main header:has(.header-top-content:empty) .header-top { padding-bottom: var(--space-base); }
.ubt-layout-home footer:before, .ubt-layout-home header:after, .ubt-layout-main footer:before, .ubt-layout-main header:after, .ubt-layout-detail footer:before, .ubt-layout-detail header:after { content: ''; width: 100%; height: 9px; z-index: 3; display: block; position: absolute; }
.ubt-layout-home header:after, .ubt-layout-main header:after, .ubt-layout-detail header:after { bottom: calc(-1 * 9px); background: linear-gradient(180deg, rgba(39, 43, 48, 0.5) 0%, rgba(217, 217, 217, 0.05) 84.62%); visibility: var(--header-shadow-scroll); }
.ubt-layout-home footer:before, .ubt-layout-main footer:before, .ubt-layout-detail footer:before { background: linear-gradient(180deg, rgba(217, 217, 217, 0.05) 0%, rgba(206, 212, 218, 0.85) 80%); top: calc(-1 * 9px); visibility: var(--footer-shadow-scroll); }
tive .header-right, .ubt-layout-main.layout-native .header-right, .phone .ubt-layout-main.layout-native .header-right, .ubt-layout-detail.layout-native .header-right, .phone .ubt-layout-detail.layout-native .header-right { margin: 0; column-gap: var(--space-base); position: relative; }
.screen-container:has(.ubt-layout-home, .ubt-layout-main.layout-sticky-title, .ubt-layout-main, .ubt-layout-detail):has(.osui-bottom-sheet.osui-bottom-sheet--is-open) { overflow: hidden; touch-action: none; }
.ubt-layout-main.layout-sticky-title { --header-size: 63px; }
.ubt-layout-main.layout-sticky-title.layout-native .header-top-title, .phone .ubt-layout-main.layout-sticky-title.layout-native .header-top-title { background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-cyan) 100%); }
.ubt-layout-main.layout-sticky-title.layout-native .header-title .ubt-search-input, .phone .ubt-layout-main.layout-sticky-title.layout-native .header-title .ubt-search-input { font-size: var(--font-size-h5); }
.ubt-layout-main.layout-sticky-title .header-title span.input-search, .ubt-layout-main.layout-sticky-title .header-title .input-with-icon .input-with-icon-content-icon { font-size: var(--font-size-h5); font-weight: var(--font-regular); line-height: 1; }
```
### .ubt-layout-main__search  (3 rules)
```css
.ubt-layout-main__title, .ubt-layout-main__search { width: 100%; }
.ubt-layout-main__search { margin-top: var(--space-s); }
.mainpage-upgrade-container .ubt-layout-main__search { width: 100%; margin-top: 0; }
```
### .ubt-layout-main__title  (1 rule)
```css
.ubt-layout-main__title, .ubt-layout-main__search { width: 100%; }
```
### .updates-list  (1 rule)
```css
.list.list-group.updates-list { overflow: visible; }
```
## Adaptive.Columns2

### .OSInline  (3 rules)
```css
.OSInline { display: inline-block; vertical-align: top; }
table.OSInline { display: inline-table; }
.floating-content.floating-content-full-width > .OSInline { display:inline; }
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
### .flex-direction-row-reverse  (1 rule)
```css
.flex-direction-row-reverse { -webkit-box-orient:horizontal; -webkit-box-direction:reverse; -ms-flex-direction:row-reverse; flex-direction:row-reverse; }
```
### .font-size-xxs  (1 rule)
```css
.font-size-xxs { font-size: var(--font-size-xxs); }
```
### .gutter-base  (5 rules)
```css
.columns.gutter-base { margin-left:calc(-1 * var(--space-base) / 2); margin-right:calc(-1 * var(--space-base) / 2); }
.columns.gutter-base > .columns-item { margin-bottom:var(--space-base); padding:var(--space-none) calc(var(--space-base) / 2); }
ld > .columns-item:not(:last-child), .tablet .columns.gutter-base.tablet-break-middle:only-child > .columns-item:not(:last-child), .tablet .columns.gutter-base.tablet-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-base); }
-child > .columns-item:not(:last-child), .phone .columns.gutter-base.phone-break-middle:only-child > .columns-item:not(:last-child), .phone .columns.gutter-base.phone-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-base); }
.columns.ubt-columns.gutter-base { gap: var(--space-base) }
```
### .gutter-s  (5 rules)
```css
.columns.gutter-s { margin-left:calc(-1 * var(--space-s) / 2); margin-right:calc(-1 * var(--space-s) / 2); }
.columns.gutter-s > .columns-item { margin-bottom:var(--space-s); padding:var(--space-none) calc(var(--space-s) / 2); }
ly-child > .columns-item:not(:last-child), .tablet .columns.gutter-s.tablet-break-middle:only-child > .columns-item:not(:last-child), .tablet .columns.gutter-s.tablet-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-s); }
t:only-child > .columns-item:not(:last-child), .phone .columns.gutter-s.phone-break-middle:only-child > .columns-item:not(:last-child), .phone .columns.gutter-s.phone-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-s); }
.columns.ubt-columns.gutter-s { gap: var(--space-s) }
```
### .gutter-xs  (5 rules)
```css
.columns.gutter-xs { margin-left:calc(-1 * var(--space-xs) / 2); margin-right:calc(-1 * var(--space-xs) / 2); }
.columns.gutter-xs > .columns-item { margin-bottom:var(--space-xs); padding:var(--space-none) calc(var(--space-xs) / 2); }
-child > .columns-item:not(:last-child), .tablet .columns.gutter-xs.tablet-break-middle:only-child > .columns-item:not(:last-child), .tablet .columns.gutter-xs.tablet-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-xs); }
only-child > .columns-item:not(:last-child), .phone .columns.gutter-xs.phone-break-middle:only-child > .columns-item:not(:last-child), .phone .columns.gutter-xs.phone-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-xs); }
.columns.ubt-columns.gutter-xs { gap: var(--space-xs) }
```
### .header-right  (22 rules)
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
```
### .header-title  (10 rules)
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
```
### .text-align-left  (2 rules)
```css
.text-align-left { text-align:left; }
.is-rtl [align=left], .is-rtl .text-align-left { text-align:right; }
```
### .text-neutral-7  (1 rule)
```css
.text-neutral-7 { color:var(--text-color-neutral-7, var(--color-neutral-7)); }
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
## OutSystemsUIOverrides.IconBadge

### .icon-badge  (7 rules)
```css
.icon-badge { display:inline-block; position:relative; }
.icon-badge .badge { left:45%; position:absolute; top:0; border-radius:var(--border-radius-rounded); font-size:var(--font-size-xs); height:18px; min-width:18px; padding:var(--space-none) var(--space-xs); -webkit-transform:translateY(-40%); -ms-transform:translateY(-40%); transform:translateY(-40%); white-space:nowrap; }
.icon-badge .badge [data-expression] { white-space:nowrap; }
.icon-badge .icon { font-size:var(--font-size-h4); }
.icon-badge div:first-child:empty {  }
.layout-native .bottom-bar-wrapper .icon-badge .icon { font-size:inherit; }
.icon-badge { display: inherit; }
```
## ConnectPatterns.Icon

### .connect-icon-chevron_right  (1 rule)
```css
.connect-icon-chevron_right:before { content: "\f07d"; }
```
### .connect-icon-close  (1 rule)
```css
.connect-icon-close:before { content: "\f07c"; }
```
### .connect-icon-contacts  (1 rule)
```css
.connect-icon-contacts:before { content: "\f04c"; }
```
### .connect-icon-home  (1 rule)
```css
.connect-icon-home:before { content: "\f052"; }
```
### .connect-icon-list_alt_fill  (1 rule)
```css
.connect-icon-list_alt_fill:before { content: "\f040"; }
```
### .connect-icon-location_on_fill  (1 rule)
```css
.connect-icon-location_on_fill:before { content: "\f03f"; }
```
### .connect-icon-more_vertical  (1 rule)
```css
.connect-icon-more_vertical:before { content: "\f035"; }
```
### .connect-icon-notifications  (1 rule)
```css
.connect-icon-notifications:before { content: "\f032"; }
```
### .connect-icon-radio_checked  (1 rule)
```css
.connect-icon-radio_checked:before { content: "\f023"; }
```
### .connect-icon-radio_unchecked  (1 rule)
```css
.connect-icon-radio_unchecked:before { content: "\f022"; }
```
### .connect-icon-search  (1 rule)
```css
.connect-icon-search:before { content: "\f01b"; }
```
### .connect-icon-tune  (1 rule)
```css
.connect-icon-tune:before { content: "\f00e"; }
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
### .icon-small  (1 rule)
```css
.icon-small { --ubt-icon-size: var(--ubt-icon-size-small); }
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
### .text-neutral-0  (1 rule)
```css
.text-neutral-0 { color:var(--text-color-neutral-0, var(--color-neutral-0)); }
```
### .text-neutral-5  (1 rule)
```css
.text-neutral-5 { color:var(--text-color-neutral-5, var(--color-neutral-5)); }
```
### .text-neutral-6  (1 rule)
```css
.text-neutral-6 { color:var(--text-color-neutral-6, var(--color-neutral-6)); }
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
### .text-transparent  (1 rule)
```css
.text-transparent { color: transparent; }
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
## OutSystemsUIOverrides.Badge

### .background-red  (1 rule)
```css
.background-red { background-color:var(--background-color-red, var(--color-red)); }
```
### .background-red-dark  (1 rule)
```css
.background-red-dark { background-color:var(--background-color-red-dark, var(--color-red-dark)); }
```
### .badge  (9 rules)
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
```
### .badge-xs  (1 rule)
```css
.ubt-badge.badge-xs { font-size: var(--font-size-xxs); height: 16px; min-width: 16px; width: 16px; }
```
### .border-radius-rounded  (2 rules)
```css
.border-radius-rounded { border-radius:var(--border-radius-rounded); }
.border-radius-rounded.form-control[data-input], .border-radius-rounded.form-control[data-textarea], .border-radius-rounded.dropdown-container > div.dropdown-display { border-radius: var(--border-radius-rounded); }
```
### .ubt-badge  (2 rules)
```css
.ubt-badge.badge-xs { font-size: var(--font-size-xxs); height: 16px; min-width: 16px; width: 16px; }
.OSBlockWidget:has(> .ubt-badge) { display: flex; }
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
### .input-search  (1 rule)
```css
.ubt-layout-main.layout-sticky-title .header-title span.input-search, .ubt-layout-main.layout-sticky-title .header-title .input-with-icon .input-with-icon-content-icon { font-size: var(--font-size-h5); font-weight: var(--font-regular); line-height: 1; }
```
### .input-with-icon  (25 rules)
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
### .input-with-icon-content-icon  (19 rules)
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
```
### .input-with-icon-input  (8 rules)
```css
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left:var(--space-base); padding-right:var(--space-xl); }
.input-with-icon .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left:var(--space-xl); }
.input-with-icon .input-with-icon-input, .input-with-icon .input-with-icon-input input { width:100%; }
.input-with-icon .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-right: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); padding-left: var(--space-s); }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon + .input-with-icon-input input { padding: var(--space-none) var(--space-base); }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon:has( > div:not(:empty)) + .input-with-icon-input input { padding-left: calc(var(--space-base) + var(--ubt-icon-size-base)); }
.input-with-icon.ubt-input-underlined .input-with-icon-content-icon:has( > div:empty) + .input-with-icon-input input { padding-left: var(--space-none); }
```
### .input-with-icon-right  (4 rules)
```css
.input-with-icon.input-with-icon-right .input-with-icon-content-icon { left:auto; right:0; }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-left:var(--space-base); padding-right:var(--space-xl); }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon.search-actions { left:0; right:auto; }
.input-with-icon.input-with-icon-right .input-with-icon-content-icon:not(:empty) + .input-with-icon-input input { padding-right: calc(var(--ubt-input-icon-box) + (var(--space-s) * 2)); padding-left: var(--space-s); }
```
### .placeholder-empty  (3 rules)
```css
html[data-uieditorversion^="1"] .placeholder-empty:empty {  }
.ph:empty, .placeholder-empty:empty { display:none; }
list-group, .osui-tabs__content > .ph > .OSBlockWidget, .osui-tabs__content > .placeholder-empty > .OSBlockWidget, .osui-tabs__content > .ph > .list.list-group, .osui-tabs__content > .placeholder-empty > .list.list-group { display:contents; }
```
## BasePatterns.CustomContainer

### .background-blue-non-standard  (1 rule)
```css
.background-blue-non-standard { background-color: var(--color-blue-non-standard); }
```
### .background-cyan-lightest  (1 rule)
```css
.background-cyan-lightest { background-color:var(--background-color-cyan-lightest, var(--color-cyan-lightest)); }
```
### .background-neutral-3  (4 rules)
```css
.tag.background-neutral-1, .tag.background-neutral-2, .tag.background-neutral-3, .tag.background-neutral-4 { color:var(--text-color-neutral-9, var(--color-neutral-9)); }
.avatar.background-neutral-1, .avatar.background-neutral-2, .avatar.background-neutral-3, .avatar.background-neutral-4 { color:var(--text-color-neutral-9, var(--color-neutral-9)); }
.badge.background-neutral-1, .badge.background-neutral-2, .badge.background-neutral-3, .badge.background-neutral-4 { color:var(--text-color-neutral-9, var(--color-neutral-9)); }
.background-neutral-3 { background-color:var(--background-color-neutral-3, var(--color-neutral-3)); }
```
### .background-pink-non-standard  (1 rule)
```css
.background-pink-non-standard { background-color: var(--color-pink-non-standard); }
```
### .background-primary  (1 rule)
```css
.background-primary { background-color:var(--background-color-primary, var(--color-primary)); }
```
### .background-yellow-lightest  (1 rule)
```css
.background-yellow-lightest { background-color:var(--background-color-yellow-lightest, var(--color-yellow-lightest)); }
```
### .border-bottom-s  (2 rules)
```css
.border-bottom-s:not(.columns), .border-bottom-s.columns > .columns-item:not(:last-child) { border-bottom:var(--border-size-s) solid currentColor; }
.border-bottom-s:not(.columns), .border-bottom-s.columns > .columns-item:not(:last-child) { border-bottom: var(--border-size-s) solid var(--border-color, currentColor); }
```
### .border-color-neutral-3  (1 rule)
```css
.border-color-neutral-3 { border-color: var(--color-neutral-3); --border-color: var(--color-neutral-3); }
```
### .border-color-neutral-4  (1 rule)
```css
.border-color-neutral-4 { border-color: var(--color-neutral-4); --border-color: var(--color-neutral-4); }
```
### .border-color-neutral-5  (1 rule)
```css
.border-color-neutral-5 { border-color: var(--color-neutral-5); --border-color: var(--color-neutral-5); }
```
### .border-color-primary  (1 rule)
```css
.border-color-primary { border-color: var(--color-primary); --border-color: var(--color-primary); }
```
### .border-radius-soft  (1 rule)
```css
.border-radius-soft { border-radius:var(--border-radius-soft); }
```
### .border-s  (1 rule)
```css
.border-size-s, .border-s { border: var(--border-size-s) solid var(--border-color, currentColor); }
```
### .border-top-l  (2 rules)
```css
.border-top-l:not(.columns), .border-top-l.columns > .columns-item:not(:last-child) { border-top:var(--border-size-l) solid currentColor; }
.border-top-l:not(.columns), .border-top-l.columns > .columns-item:not(:last-child) { border-top: var(--border-size-l) solid var(--border-color, currentColor); }
```
### .font-semi-bold  (1 rule)
```css
.font-semi-bold { font-weight:var(--font-semi-bold); }
```
### .font-size-s  (1 rule)
```css
.font-size-s { font-size:var(--font-size-s); }
```
### .inline-block  (4 rules)
```css
.OSBlockWidget:has(> .inline-block), .OSBlockWidget:has(> .OSBlockWidget > .ubt-custom-container.inline-block) { display: inline-block; width: fit-content; }
.lazy-image-middle .OSBlockWidget:has(> .inline-block.ubt-avatar-image) { vertical-align: middle; }
.ubt-tag-list .OSBlockWidget:has(> .inline-block) { width: max-content; }
.Household_GalleryCard-list .OSBlockWidget:has(> .inline-block) { width: max-content; }
```
### .margin-bottom-base  (1 rule)
```css
.margin-bottom-base { margin-bottom:var(--space-base); }
```
### .margin-bottom-none  (1 rule)
```css
.margin-bottom-none { margin-bottom:var(--space-none); }
```
### .margin-bottom-s  (1 rule)
```css
.margin-bottom-s { margin-bottom:var(--space-s); }
```
### .margin-bottom-xs  (1 rule)
```css
.margin-bottom-xs { margin-bottom:var(--space-xs); }
```
### .margin-top-base  (1 rule)
```css
.margin-top-base { margin-top:var(--space-base); }
```
### .padding-base  (1 rule)
```css
.padding-base { padding:var(--space-base); }
```
### .padding-s  (1 rule)
```css
.padding-s { padding:var(--space-s); }
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
### .padding-y-s  (1 rule)
```css
.padding-y-s { padding-bottom:var(--space-s); padding-top:var(--space-s); }
```
### .padding-y-xs  (1 rule)
```css
.padding-y-xs { padding-bottom:var(--space-xs); padding-top:var(--space-xs); }
```
### .shadow-xs  (1 rule)
```css
.shadow-xs { -webkit-box-shadow:var(--shadow-xs); box-shadow:var(--shadow-xs); }
```
### .text-yellow-dark  (1 rule)
```css
.text-yellow-dark { color:var(--text-color-yellow-dark, var(--color-yellow-dark)); }
```
### .ubt-custom-container  (1 rule)
```css
.OSBlockWidget:has(> .inline-block), .OSBlockWidget:has(> .OSBlockWidget > .ubt-custom-container.inline-block) { display: inline-block; width: fit-content; }
```
### .ubt-skeleton-section__element  (3 rules)
```css
.ubt-skeleton-section .ubt-skeleton-section__element span { height: unset; }
an, .ubt-skeleton-section .ubt-skeleton-section__element, .ubt-skeleton-section .ubt-icon:not(.ignore-loading), .ubt-skeleton-section .form > div, .ubt-skeleton-section .osui-dropdown-search, .ubt-skeleton-section .badge { background: var(--ubt-background-skeleton-light); animation: var(--ubt-skeleton-animation); border-color: var(--ubt-background-skeleton-light) }
keleton-section *::before, .active-screen.screen-container .ubt-skeleton-section *::after, .ubt-skeleton-section input, .ubt-skeleton-section .osui-dropdown-search .vscomp-ele-wrapper, .ubt-skeleton-section .ubt-icon img { visibility: hidden; transition-property: visibility; transition-duration: 0ms; }
```
### .ubt-tag-toggle  (2 rules)
```css
.ubt-tag span, .ubt-tag-toggle span { white-space: nowrap; }
.connect-weekdays-tag-list .ubt-tag-toggle { border-radius: var(--border-radius-circle); width: 40px; aspect-ratio: 1/1; padding: var(--space-none); display: flex; justify-content: center; align-items: center; line-height:1 }
```
## ConnectPatterns.HorizontalTagList

### .list-horizontal--gap-xs  (2 rules)
```css
.list-horizontal--gap-xs > *:not(script):not(:last-of-type) { margin-right: var(--space-xs); }
.list-horizontal--gap-xs > .OSBlockWidget { display: block; }
```
### .ubt-tag-list  (4 rules)
```css
.ubt-tag-list.list.list-group { display: flex; overflow-x: scroll; -ms-overflow-style: none; /* Internet Explorer 10+ */ scrollbar-width: none; /* Firefox */ }
.ubt-tag-list.list.list-group::-webkit-scrollbar { display: none; /* Safari and Chrome */ }
.ubt-tag-list .OSBlockWidget:has(> .inline-block) { width: max-content; }
.connect-weekdays-tag-list.list.ubt-tag-list > div { margin-right: var(--space-none) }
```
## BasePatterns.CustomText

### .font-size-base  (1 rule)
```css
.font-size-base { font-size:var(--font-size-base); }
```
### .font-size-xs  (1 rule)
```css
.font-size-xs { font-size:var(--font-size-xs); }
```
### .italic  (1 rule)
```css
.italic { font-style:italic; }
```
### .text-neutral-10  (1 rule)
```css
.text-neutral-10 { color:var(--text-color-neutral-10, var(--color-neutral-10)); }
```
## ConnectPatterns.PopupMenu

### .dx-popup-menu-container  (2 rules)
```css
.dx-popup-menu-container:not(.dx-popup-menu-open) { display: none; }
.dx-popup-menu-container { z-index: var(--layer-global-instant-interaction); }
```
## Directory_Updates.SectionHeader

### .updates-list__list-section-header  (1 rule)
```css
.updates-list__list-section-header { /* z-index: var(--layer-global-navigation);*/ /* position: sticky;*/ /* top: 120px;*/ }
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
### .dx-bottom-bar-slider  (8 rules)
```css
.dx-bottom-bar-slider { position: fixed; left: 0; right: 0; bottom: var(--bottom-bar-size); max-width: calc(var(--dx-bottom-bar-items) * var(--dx-bottom-bar-item-max-width, 150px)); margin: auto; z-index: var(--layer-global-navigation); pointer-events: none; }
.dx-bottom-bar-slider > div { position: absolute; left: 0; width: calc(100% / var(--dx-bottom-bar-items)); transform: translateX(calc(var(--dx-bottom-bar-active-item) * 100%)); transition: transform var(--dx-bottom-bar-transition-duration, 400ms); }
.dx-bottom-bar-slider > div::before { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 2px; background-color: var(--color-primary); width: min(60%, var(--dx-bottom-bar-item-max-width, 150px)); margin: auto; }
.dx-bottom-bar-slider.dx-bottom-bar-slider-appear > div { animation: dx-bottom-bar-slider-appear var(--dx-bottom-bar-transition-duration); }
.dx-bottom-bar-slider.dx-bottom-bar-slider-disappear > div { animation: dx-bottom-bar-slider-disappear var(--dx-bottom-bar-transition-duration); }
.screen-container.slide-from-right-enter-active ~ .dx-bottom-bar-slider, .screen-container.slide-from-left-enter-active ~ .dx-bottom-bar-slider { z-index: 1000; }
.ios .dx-bottom-bar-slider { bottom: calc(var(--bottom-bar-size) + var(--os-safe-area-bottom)); }
.dx-mobile-keyboard-visible .content-bottom, .dx-mobile-keyboard-visible .dx-bottom-bar-slider { display: none; }
```
### .dx-bottom-bar-slider-appear  (1 rule)
```css
.dx-bottom-bar-slider.dx-bottom-bar-slider-appear > div { animation: dx-bottom-bar-slider-appear var(--dx-bottom-bar-transition-duration); }
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
## App_Common.BottomBarContent

### .bottom-bar  (12 rules)
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
```
### .bottom-bar-wrapper  (7 rules)
```css
.landscape .layout.layout-native .header, .landscape .layout.layout-native:not(.blank) .main-content, .landscape .layout.layout-native .bottom-bar-wrapper { padding-left:var(--os-safe-area-left); padding-right:var(--os-safe-area-right); }
.bottom-bar-wrapper { background-color:var(--background-color-neutral-0, var(--color-neutral-0)); border-top:var(--border-size-s) solid var(--border-color-neutral-3, var(--color-neutral-3)); height:100%; }
.android .layout-native .bottom-bar-wrapper { padding-bottom:var(--safe-area-inset-bottom, 0px); }
.layout-native .bottom-bar-wrapper { padding-bottom:var(--os-safe-area-bottom); }
.layout-native .bottom-bar-wrapper .icon-badge .icon { font-size:inherit; }
.bottom-bar-wrapper { height: var(--bottom-bar-size); }
.bottom-bar-wrapper .badge { top: 20%; }
```
## Navigation.BottomBarItem

### .bottom-bar-item  (1 rule)
```css
.bottom-bar-item { display:-webkit-box; display:-ms-flexbox; display:flex; -webkit-box-orient:vertical; -webkit-box-direction:normal; -ms-flex-direction:column; flex-direction:column; height:100%; -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; overflow:hidden; padding:0 var(--space-s); position:relative; }
```
### .bottom-bar-item-icon  (1 rule)
```css
.bottom-bar-item-icon { display:-webkit-inline-box; display:-ms-inline-flexbox; display:inline-flex; font-size:var(--font-size-h6); height:auto; -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; }
```
### .bottom-bar-item-text  (1 rule)
```css
.bottom-bar-item-text { font-size:10px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; word-wrap:break-word; }
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
## Interaction.BottomSheet

### .background-neutral-2  (4 rules)
```css
.tag.background-neutral-1, .tag.background-neutral-2, .tag.background-neutral-3, .tag.background-neutral-4 { color:var(--text-color-neutral-9, var(--color-neutral-9)); }
.avatar.background-neutral-1, .avatar.background-neutral-2, .avatar.background-neutral-3, .avatar.background-neutral-4 { color:var(--text-color-neutral-9, var(--color-neutral-9)); }
.badge.background-neutral-1, .badge.background-neutral-2, .badge.background-neutral-3, .badge.background-neutral-4 { color:var(--text-color-neutral-9, var(--color-neutral-9)); }
.background-neutral-2 { background-color:var(--background-color-neutral-2, var(--color-neutral-2)); }
```
### .custom-padding  (4 rules)
```css
.ubt-bottom-sheet.custom-padding .osui-bottom-sheet__content { margin-bottom: 0px; padding-bottom: 0px; overflow-y: auto; }
.ubt-bottom-sheet.custom-padding .osui-bottom-sheet__content .ubt-bottom-sheet--content { margin: calc(-1 * var(--space-base)); margin-bottom: calc(var(--bottom-sheet--footer-height)); max-height: unset; }
/* disabling due to issues with Sharings. .ubt-bottom-sheet.custom-padding .osui-bottom-sheet__header, .ubt-bottom-sheet.osui-bottom-sheet { --osui-bottom-sheet-layer: 103; }
.ubt-bottom-sheet.custom-padding.ubt-bottom-sheet--handler-preview .osui-bottom-sheet__header, .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview { /*ensure the bottom bar stays on top of this*/ --osui-bottom-sheet-layer: 1006; }
```
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
### .osui-bottom-sheet  (26 rules)
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
### .osui-bottom-sheet--has-handler  (4 rules)
```css
.osui-bottom-sheet--has-handler .osui-bottom-sheet__header::before { background:var(--background-color-neutral-5, var(--color-neutral-5)); border-radius:100px; content:""; height:4px; left:50%; position:absolute; top:var(--space-base); -webkit-transform:translateX(-50%); -ms-transform:translateX(-50%); transform:translateX(-50%); width:40px; }
.osui-bottom-sheet--has-handler .osui-bottom-sheet__header__top-bar { padding-top:var(--space-l); }
.ubt-bottom-sheet.osui-bottom-sheet--has-handler .osui-bottom-sheet__header::before { top: var(--space-s); }
.ubt-bottom-sheet.osui-bottom-sheet--has-handler .osui-bottom-sheet__header__top-bar { padding-top: calc(var(--space-s) + var(--space-base)); }
```
### .osui-bottom-sheet-overlay  (6 rules)
```css
.osui-bottom-sheet--is-open + .osui-bottom-sheet-overlay { opacity:1; pointer-events:all; }
.osui-bottom-sheet:not(.osui-bottom-sheet--is-open) + .osui-bottom-sheet-overlay { -webkit-transition:opacity 200ms ease-out; transition:opacity 200ms ease-out; }
.osui-bottom-sheet-overlay { background-color:var(--background-color-overlay, var(--overlay-background)); height:100vh; left:0; opacity:0; pointer-events:none; position:fixed; top:0; -webkit-transition:opacity 350ms ease-in; transition:opacity 350ms ease-in; width:100vw; z-index:calc(var(--layer-below) + var(--osui-bottom-sheet-layer)); }
.osui-bottom-sheet-overlay {  }
.osui-bottom-sheet--is-open + .osui-bottom-sheet-overlay { pointer-events: auto; }
.ubt-bottom-sheet--transparent-overlay.osui-bottom-sheet--is-open + .osui-bottom-sheet-overlay { opacity: 0; }
```
### .osui-bottom-sheet__content  (13 rules)
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
```
### .osui-bottom-sheet__header  (9 rules)
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
```
### .osui-bottom-sheet__header__top-bar  (9 rules)
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
### .ubt-columns--three-columns  (2 rules)
```css
> .columns-item:nth-child(2), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(1), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(3) { flex: 0; min-width: max-content; }
.columns .ubt-columns.ubt-columns-same-size.ubt-columns--three-columns > .columns-item, .columns .ubt-columns.ubt-columns-same-size.ubt-columns--tow-columns > .columns-item { flex: 1; }
```
### .ubt-columns-expand-middle  (1 rule)
```css
> .columns-item:nth-child(2), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(1), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(3) { flex: 0; min-width: max-content; }
```
## ConnectPatterns.SelectionOption_List

### .ubt-options-list  (1 rule)
```css
.ubt-options-list .option-disabled .country-flag img { filter: grayscale(0.5); opacity: 0.2; }
```
## ConnectPatterns.Button

### .flex-grow  (2 rules)
```css
.flex-grow { flex-grow: 1; }
.OSBlockWidget:has(> [data-block] > .ubt-button.flex-grow) { flex-grow: 1 }
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
### .ubt-button--primary  (2 rules)
```css
.ubt-button--primary { /*placeholder for defining primary button*/ }
.ubt-button--primary:active, .ubt-button--primary.display-pressed { --ubt-button-background-color: var(--color-cyan-darker); }
```
### .ubt-button--s  (1 rule)
```css
.ubt-button--s { --ubt-button-width: var( --ubt-button-width-s); --ubt-button-height: var( --ubt-button-height-s); --ubt-button-padding: var(--space-xs) var(--space-s); --ubt-button-font-size: var(--font-size-base); --ubt-button-font-weight: var(--font-regular); --ubt-button-icon-size: var(--ubt-icon-size-medium); }
```
### .ubt-button--secondary  (2 rules)
```css
.ubt-button--secondary { --ubt-button-background-color: var(--color-neutral-0); --ubt-button-font-color: var(--color-primary); --ubt-button-border-color: var(--color-primary); }
.ubt-button--secondary:active, .ubt-button--secondary.display-pressed { --ubt-button-background-color: var(--color-cyan-lightest); --ubt-button-font-color: var(--color-cyan-darker); --ubt-button-border-color: var(--color-cyan-darker); }
```
### .ubt-button__content  (1 rule)
```css
.ubt-button__content { display:contents; }
```
## Generic utility classes (too many rules to list; see bundle.css)

`.active` (44), `.btn` (61), `.columns` (82), `.columns-item` (71), `.form-control` (75), `.header` (51), `.layout` (53), `.layout-native` (241), `.layout-side` (89), `.list` (93), `.phone` (235)

## Design tokens referenced by the rules above

- `--border-color`: `var(--border-color-neutral-5, var(--color-neutral-5))` (in `.vscomp-dropbox`); `var(--color-primary)` (in `.border-color-primary`); `var(--color-secondary)` (in `.border-color-secondary`); `var(--color-tertiary)` (in `.border-color-tertiary`)
- `--border-radius-circle`: `100%` (in `@charset "UTF-8";    :root`)
- `--border-radius-large`: `16px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-medium`: `8px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-none`: `0` (in `@charset "UTF-8";    :root`)
- `--border-radius-rounded`: `100px` (in `@charset "UTF-8";    :root`); `16px` (in `.osui-balloon`); `16px` (in `.osui-bottom-sheet`); `16px` (in `.osui-overflow-menu`)
- `--border-radius-soft`: `4px` (in `@charset "UTF-8";    :root`)
- `--border-size-l`: `3px` (in `@charset "UTF-8";    :root`)
- `--border-size-m`: `2px` (in `@charset "UTF-8";    :root`)
- `--border-size-s`: `1px` (in `@charset "UTF-8";    :root`)
- `--bottom-bar-size`: `56px` (in `@charset "UTF-8";    :root`)
- `--bottom-sheet-max-height`: `calc(100vh - 54px)` (in `.osui-bottom-sheet`); `85vh` (in `.layout:not(.layout-native) .osui-bottom-sheet`)
- `--color-background-body`: `#f3f6f8` (in `@charset "UTF-8";    :root`); `var(--color-neutral-0)` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-blue-dark`: `#1667ad` (in `@charset "UTF-8";    :root`); `#112CBA` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-blue-lightest`: `#e8f2fa` (in `@charset "UTF-8";    :root`); `#E1E5FF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-blue-non-standard`: `#6ca0dc` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-cyan`: `#0d8091` (in `@charset "UTF-8";    :root`); `#4EAEC2` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-cyan-dark`: `#0b6d7b` (in `@charset "UTF-8";    :root`); `#00819C` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-cyan-darker`: `#095a66` (in `@charset "UTF-8";    :root`); `#005668` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-cyan-lightest`: `#e7f2f4` (in `@charset "UTF-8";    :root`); `#EDF6F8` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-focus-outer`: `#ffd337` (in `@charset "UTF-8";    :root`)
- `--color-green-darker`: `#267d36` (in `@charset "UTF-8";    :root`); `#194E23` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-green-lightest`: `#ebf7ed` (in `@charset "UTF-8";    :root`); `#EAF3EB` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-neutral-0`: `#ffffff` (in `@charset "UTF-8";    :root`)
- `--color-neutral-10`: `#101213` (in `@charset "UTF-8";    :root`)
- `--color-neutral-11`: `#d8dcde` (in `:root`)
- `--color-neutral-2`: `#f1f3f5` (in `@charset "UTF-8";    :root`)
- `--color-neutral-3`: `#e9ecef` (in `@charset "UTF-8";    :root`)
- `--color-neutral-4`: `#dee2e6` (in `@charset "UTF-8";    :root`)
- `--color-neutral-5`: `#ced4da` (in `@charset "UTF-8";    :root`)
- `--color-neutral-6`: `#adb5bd` (in `@charset "UTF-8";    :root`)
- `--color-neutral-7`: `#6a7178` (in `@charset "UTF-8";    :root`)
- `--color-neutral-8`: `#4f575e` (in `@charset "UTF-8";    :root`)
- `--color-neutral-9`: `#272b30` (in `@charset "UTF-8";    :root`)
- `--color-overlay-neutral-10`: `#101213D9` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-dark`: `#FF6F61` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-darker`: `#BB4338` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-peach-lightest`: `#FFF0EF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-pink-non-standard`: `#f8b9d4` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-primary`: `#1068eb` (in `@charset "UTF-8";    :root`); `var(--color-cyan-dark)` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-primary-gradient-linear`: `linear-gradient(90deg, var(--color-primary) 0%, var(--color-cyan) 100%)` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-dark`: `#6E71FF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-darker`: `#494BAA` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-lighter`: `#EFEFFF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple-lightest`: `#F6F6FD` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-red`: `#c92a2a` (in `@charset "UTF-8";    :root`); `#E97575` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-red-dark`: `#ab2424` (in `@charset "UTF-8";    :root`); `#DC2020` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-red-darker`: `#8d1d1d` (in `@charset "UTF-8";    :root`); `#841313` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-red-lightest`: `#faeaea` (in `@charset "UTF-8";    :root`); `#FCEAEA` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-blue-dark`: `17, 44, 186` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-cyan-dark`: `0, 129, 156` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-green-darker`: `25, 78, 35` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-peach-dark`: `255, 111, 97` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-purple-dark`: `110, 113, 255` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-red-darker`: `132, 19, 19` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-rgb-yellow-darker`: `140, 97, 0` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-yellow-dark`: `#d08700` (in `@charset "UTF-8";    :root`); `#E9A100` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-yellow-darker`: `#ac6f00` (in `@charset "UTF-8";    :root`); `#8C6100` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-yellow-lightest`: `#fef5e5` (in `@charset "UTF-8";    :root`); `#FDF6E5` (in `:root, .connect-legacy-compatibily-containter`)
- `--connect-event-form-item-border`: `var(--border-size-s) solid var(--color-neutral-3)` (in `.connect-event-form`)
- `--current-svg-height`: `100vh` (in `:root`)
- `--dx-screen-transition-duration`: `300ms` (in `:root`)
- `--font-regular`: `400` (in `@charset "UTF-8";    :root`)
- `--font-semi-bold`: `600` (in `@charset "UTF-8";    :root`)
- `--font-size-base`: `16px` (in `@charset "UTF-8";    :root`); `1rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h2`: `28px` (in `@charset "UTF-8";    :root`); `1.75rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h4`: `22px` (in `@charset "UTF-8";    :root`); `1.375rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h5`: `20px` (in `@charset "UTF-8";    :root`); `1.25rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h6`: `18px` (in `@charset "UTF-8";    :root`); `1.125rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-s`: `14px` (in `@charset "UTF-8";    :root`); `0.875rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-xs`: `12px` (in `@charset "UTF-8";    :root`); `0.75rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-xxs`: `0.625rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--footer-height`: `0px` (in `@charset "UTF-8";    :root`)
- `--footer-shadow-scroll`: `hidden` (in `:root`)
- `--header-color`: `#ffffff` (in `@charset "UTF-8";    :root`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-main`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-home`); `var(--color-neutral-0)` (in `.ubt-layout-detail, .connect-pin-screen`)
- `--header-shadow-scroll`: `hidden` (in `:root`)
- `--header-size`: `56px` (in `@charset "UTF-8";    :root`); `103px` (in `.ubt-layout-main`); `58px` (in `.ubt-layout-home`); `50px` (in `.screen-container .layout.ubt-layout-home.ubt-profile-screen`)
- `--header-size-content`: `48px` (in `@charset "UTF-8";    :root`)
- `--layer-below`: `calc(-1 * var(--layer-system-scale))` (in `@charset "UTF-8";    :root`)
- `--layer-global-instant-interaction`: `calc(var(--layer-above) + var(--layer-global-off-canvas))` (in `@charset "UTF-8";    :root`)
- `--layer-global-navigation`: `calc(var(--layer-above) + var(--layer-global-elevated))` (in `@charset "UTF-8";    :root`)
- `--layer-global-negative`: `-1` (in `@charset "UTF-8";    :root`)
- `--layer-global-screen`: `0` (in `@charset "UTF-8";    :root`)
- `--layer-local-tier-1`: `1` (in `@charset "UTF-8";    :root`)
- `--loading-dot-size`: `10px` (in `:root`)
- `--os-safe-area-bottom`: `max(env(safe-area-inset-bottom), var(--safe-area-inset-bottom, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-left`: `max(env(safe-area-inset-left), var(--safe-area-inset-left, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-right`: `max(env(safe-area-inset-right), var(--safe-area-inset-right, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-top`: `max(env(safe-area-inset-top), var(--safe-area-inset-top, 0px))` (in `@charset "UTF-8";    :root`)
- `--osui-bottom-sheet-draggable-area`: `56px` (in `.osui-bottom-sheet`); `0` (in `.osui-bottom-sheet--has-scroll`)
- `--osui-bottom-sheet-layer`: `var(--layer-global-off-canvas)` (in `@charset "UTF-8";    :root`); `1005` (in `tomSheet"]:has(.bottom-sheet-higher-z-index) .ubt-bottom-sheet.osui-bottom-sheet`); `103` (in `t.custom-padding .osui-bottom-sheet__header, .ubt-bottom-sheet.osui-bottom-sheet`); `1006` (in `t__header, .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview`)
- `--osui-bottom-sheet-transition-function`: `cubic-bezier(0.19, 0.35, 0.56, 0.96)` (in `.osui-bottom-sheet`)
- `--overlay-background`: `rgba(0, 0, 0, 0.25)` (in `@charset "UTF-8";    :root`); `var(--color-overlay-neutral-10)` (in `:root, .connect-legacy-compatibily-containter`)
- `--shadow-l`: `0 6px 8px rgba(0, 0, 0, 0.1)` (in `@charset "UTF-8";    :root`); `-2px 6px 8px rgba(0, 0, 0, 0.1)` (in `:root, .connect-legacy-compatibily-containter`)
- `--shadow-xs`: `0 1px 2px rgba(0, 0, 0, 0.1)` (in `@charset "UTF-8";    :root`); `0 1px 2px rgba(0, 0, 0, 0.1)` (in `:root, .connect-legacy-compatibily-containter`)
- `--share-sheet-gap`: `var(--space-s)` (in `.connect-share-sheet`)
- `--side-menu-size`: `300px` (in `@charset "UTF-8";    :root`); `264px` (in `e, .tablet .layout-native.aside-visible, .tablet .layout-native.aside-expandable`)
- `--space-base`: `16px` (in `@charset "UTF-8";    :root`); `16px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-l`: `32px` (in `@charset "UTF-8";    :root`); `32px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-m`: `24px` (in `@charset "UTF-8";    :root`); `24px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-none`: `0` (in `@charset "UTF-8";    :root`); `0` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-s`: `8px` (in `@charset "UTF-8";    :root`); `8px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xl`: `40px` (in `@charset "UTF-8";    :root`); `40px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xs`: `4px` (in `@charset "UTF-8";    :root`); `4px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xxl`: `48px` (in `@charset "UTF-8";    :root`); `48px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--ubt-background-skeleton-light`: `var(--color-neutral-3)` (in `:root`)
- `--ubt-bottomsheet-handler-preview--height`: `calc(var(--space-s) + var(--space-base) + var(--ubt-bottomsheet-handler-preview--offset))` (in `*/ .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview`)
- `--ubt-bottomsheet-handler-preview--offset-height`: `calc(100% - (var(--footer-height) + var(--ubt-bottomsheet-handler-preview--height)))` (in `*/ .ubt-bottom-sheet.osui-bottom-sheet.ubt-bottom-sheet--handler-preview`)
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
- `--ubt-icon-size-medium`: `20px` (in `:root`)
- `--ubt-icon-size-small`: `12px` (in `:root`)
- `--ubt-input-icon-box`: `20px` (in `:root`)
- `--ubt-layout-login-padding`: `var(--ubt-pincode-padding, var(--ubt-layout-login-padding-top) var(--space-base) var(--space-l) var(--space-base))` (in `:root`)
- `--ubt-login-screen-padding-top`: `calc(var(--ubt-layout-login-padding-top) + 80px)` (in `:root`)
- `--ubt-login-svg-min-height`: `732px` (in `:root`)
- `--ubt-pincode-button-color`: `var(--color-neutral-8)` (in `:root`); `var(--color-neutral-0)` (in `.ubt-layout--login`)
- `--ubt-pincode-buttons-size`: `64px` (in `:root`)
- `--ubt-skeleton-animation`: `ubt-skeleton-pulse 1.5s ease-in-out infinite` (in `:root`)
