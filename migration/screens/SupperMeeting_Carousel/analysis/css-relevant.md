# CSS relevant to SupperMeeting_Carousel

Load order of stylesheets (keep this order in the build):

1. `/UBTConnect/css/_Basic.css`
2. `/UBTConnect/css/OutSystemsReactWidgets.css`
3. `/UBTConnect/css/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.css`
4. `/UBTConnect/css/UBTConnectLibrary.ConnectPatterns.Note_Item.css`
5. `/UBTConnect/css/UBTConnect_Utils.CW_Notes.NotesSheet.css`
6. `/UBTConnect/css/UBTConnect.Directory_Caroussel.EntitiesCarousel.css`
7. `/UBTConnect/css/UBT_AppManager.PIN.PinCode.css`
8. `/UBTConnect/css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css`
9. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css`
10. `/UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css`
11. `/UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css`
12. `/UBTConnect/css/Connect2_LegacyShared.UBTConnect.css`
13. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css`

Rules below are those whose selector contains a class used on the captured page, grouped by the block that owns the element. Full source: `styles/bundle.css`.

## Layouts.Layout_DetailPage

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
### .OSInline  (3 rules)
```css
.OSInline { display: inline-block; vertical-align: top; }
table.OSInline { display: inline-table; }
.floating-content.floating-content-full-width > .OSInline { display:inline; }
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
### .footer  (11 rules)
```css
.layout:has(.footer:empty) .ubt-entities-carousel { --carousel-container-height: 0px; }
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
### .header-top  (8 rules)
```css
.header-top { height:var(--header-size); }
.layout-native .header-top { padding:0 var(--space-l); }
.tablet .layout-native .header-top, .phone .layout-native .header-top { padding:0 var(--space-m); }
.ubt-layout-main.layout-native .header-top { padding: var(--space-base); }
.tablet .ubt-layout-main.layout-native .header-top, .phone .ubt-layout-main.layout-native .header-top { padding-bottom: 0; }
.ubt-layout-home.layout-native .header-top { padding: var(--space-s) var(--space-base); }
.tablet .ubt-layout-detail.layout-native .header-top, .phone .ubt-layout-detail.layout-native .header-top { padding: 0 var(--space-base); }
.ubt-layout-home header:has(.header-top-content:empty) .header-top, .ubt-layout-main header:has(.header-top-content:empty) .header-top { padding-bottom: var(--space-base); }
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
### .text-align-center  (1 rule)
```css
.text-align-center { text-align:center; }
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
### .ubt-layout-detail__left  (4 rules)
```css
.ubt-layout-detail__left { width: 100%; display: flex; align-items: center; justify-content: flex-start; column-gap: var(--space-xs); }
.ubt-layout-detail__left .header-title-upgrade { color: var(--color-neutral-0); font-size: var(--font-size-h6); font-weight: var(--font-semi-bold); }
.mainpage-upgrade-container .ubt-layout-detail__left { position: relative; display: flex; align-items: center; width: 100%; min-width: 0; column-gap: var(--space-xs); }
.mainpage-upgrade-container .ubt-layout-detail__left > :first-child { flex: 0 0 auto; }
```
## ConnectPatterns.Icon

### .connect-icon-arrow_left_alt  (1 rule)
```css
.connect-icon-arrow_left_alt:before { content: "\f09e"; }
```
### .connect-icon-bookmark  (1 rule)
```css
.connect-icon-bookmark:before { content: "\f093"; }
```
### .connect-icon-family_group  (1 rule)
```css
.connect-icon-family_group:before { content: "\f0b4"; }
```
### .connect-icon-house_fill  (1 rule)
```css
.connect-icon-house_fill:before { content: "\f09a"; }
```
### .connect-icon-location_on_fill  (1 rule)
```css
.connect-icon-location_on_fill:before { content: "\f03f"; }
```
### .connect-icon-person-fill  (1 rule)
```css
.connect-icon-person-fill:before { content: "\f0b5"; }
```
### .connect-icon-share  (1 rule)
```css
.connect-icon-share:before { content: "\f016"; }
```
### .connect-icon-tooltip  (1 rule)
```css
.connect-icon-tooltip:before { content: "\f010"; }
```
### .icon-base  (1 rule)
```css
.icon-base { --ubt-icon-size: var(--ubt-icon-size-base); }
```
### .icon-non-standard-16  (1 rule)
```css
.icon-non-standard-16 { --ubt-icon-size: var(--ubt-icon-size-non-standard-16); }
```
### .inline-block  (4 rules)
```css
.OSBlockWidget:has(> .inline-block), .OSBlockWidget:has(> .OSBlockWidget > .ubt-custom-container.inline-block) { display: inline-block; width: fit-content; }
.lazy-image-middle .OSBlockWidget:has(> .inline-block.ubt-avatar-image) { vertical-align: middle; }
.ubt-tag-list .OSBlockWidget:has(> .inline-block) { width: max-content; }
.Household_GalleryCard-list .OSBlockWidget:has(> .inline-block) { width: max-content; }
```
### .padding-right-xs  (2 rules)
```css
.padding-right-xs { padding-right:var(--space-xs); }
.is-rtl .padding-right-xs { padding-left:var(--space-xs); padding-right:var(--space-none); }
```
### .text-cyan-darker  (1 rule)
```css
.text-cyan-darker { color:var(--text-color-cyan-darker, var(--color-cyan-darker)); }
```
### .text-inherit  (1 rule)
```css
.text-inherit { color: inherit; }
```
### .text-primary  (2 rules)
```css
.text-primary, .text-primary-darker { color:var(--text-color-primary, var(--color-primary)); }
.leaflet-bar a.text-primary { color: var(--color-primary); }
```
### .text-purple  (1 rule)
```css
.text-purple { color: var(--color-purple); }
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
### .font-size-s  (1 rule)
```css
.font-size-s { font-size:var(--font-size-s); }
```
### .font-size-xs  (1 rule)
```css
.font-size-xs { font-size:var(--font-size-xs); }
```
### .font-size-xxs  (1 rule)
```css
.font-size-xxs { font-size: var(--font-size-xxs); }
```
### .padding-top-base  (1 rule)
```css
.padding-top-base { padding-top:var(--space-base); }
```
### .text-neutral-10  (1 rule)
```css
.text-neutral-10 { color:var(--text-color-neutral-10, var(--color-neutral-10)); }
```
### .text-neutral-7  (1 rule)
```css
.text-neutral-7 { color:var(--text-color-neutral-7, var(--color-neutral-7)); }
```
### .text-underline  (1 rule)
```css
.text-underline { text-decoration: underline; }
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
### .splide__list  (13 rules)
```css
.splide__track, .splide__list { will-change: transform; }
.splide__list { align-items: flex-start; }
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
### .splide__slide  (17 rules)
```css
.ubt-entities-carousel .splide__slide { --carousel-slide-custom-height: calc(100vh - var(--carousel-container-height) - var(--header-size)); overflow-y: scroll; }
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
### .splide__track  (4 rules)
```css
.ubt-entities-carousel .splide__track { touch-action: pan-x; }
.splide__track, .splide__list { will-change: transform; }
.splide__track { overflow:hidden; position:relative; z-index:0; }
.splide.is-focus-in .splide__track > .splide__list > .splide__slide:focus { border-color:#0bf; }
```
### .splide__track--draggable  (1 rule)
```css
.splide__track--draggable { -webkit-touch-callout:none; -webkit-user-select:none; -ms-user-select:none; -moz-user-select:none; user-select:none; }
```
### .ubt-entities-carousel  (5 rules)
```css
.ubt-entities-carousel { --carousel-container-height: var(--bottom-bar-size); }
.layout:has(.footer:empty) .ubt-entities-carousel { --carousel-container-height: 0px; }
.ubt-entities-carousel .splide__slide { --carousel-slide-custom-height: calc(100vh - var(--carousel-container-height) - var(--header-size)); overflow-y: scroll; }
.layout:has(.ubt-entities-carousel) footer::before, .layout:has(.ubt-entities-carousel) header::after { display: none !important; }
.ubt-entities-carousel .splide__track { touch-action: pan-x; }
```
## SubLayout.SubLayout_DirectoryDetailScreen

### .directory-detail-screen  (2 rules)
```css
.directory-detail-screen { display: flex; flex-direction: column; gap: var(--space-xs); background-color: var(--color-neutral-4); }
.directory-detail-screen > div:empty { display: none; }
```
## ConnectPatterns.SkeletonSection

### .ubt-skeleton-section  (11 rules)
```css
.ubt-skeleton-section * { text-decoration: none; }
.ubt-skeleton-section *:has(>span:only-child) { /* padding: 0;*/ min-height: 1lh; display: flex; align-items: center; background: unset; }
.ubt-skeleton-section span { color: transparent; }
.ubt-skeleton-section .ubt-icon:not(.ignore-loading) { border-radius: var(--border-radius-medium); color: transparent; }
.ubt-skeleton-section span, .ubt-skeleton-section .osui-dropdown-search { height: 1.2em; align-items: center; border-radius: var(--border-radius-medium); }
.ubt-skeleton-section .ubt-skeleton-section__element span { height: unset; }
.ubt-skeleton-section span:empty { --skeleton-span-length: 12ch; width: var(--_skeleton-span-legth,var(--skeleton-span-length)) }
.ubt-skeleton-section .ubt-skeleton-section__multi-line { display: block; height: 1lh; }
.ubt-skeleton-section .ubt-skeleton-section__multi-line span { width: 100%; display: block; }
an, .ubt-skeleton-section .ubt-skeleton-section__element, .ubt-skeleton-section .ubt-icon:not(.ignore-loading), .ubt-skeleton-section .form > div, .ubt-skeleton-section .osui-dropdown-search, .ubt-skeleton-section .badge { background: var(--ubt-background-skeleton-light); animation: var(--ubt-skeleton-animation); border-color: var(--ubt-background-skeleton-light) }
keleton-section *::before, .active-screen.screen-container .ubt-skeleton-section *::after, .ubt-skeleton-section input, .ubt-skeleton-section .osui-dropdown-search .vscomp-ele-wrapper, .ubt-skeleton-section .ubt-icon img { visibility: hidden; transition-property: visibility; transition-duration: 0ms; }
```
## BasePatterns.CustomContainer

### .absolute-bottom-right  (1 rule)
```css
.absolute-bottom-right { bottom:0; right:0; }
```
### .align-items-flex-start  (1 rule)
```css
.align-items-flex-start { -webkit-box-align:start; -ms-flex-align:start; align-items:flex-start; }
```
### .background-cyan-lightest  (1 rule)
```css
.background-cyan-lightest { background-color:var(--background-color-cyan-lightest, var(--color-cyan-lightest)); }
```
### .background-neutral-0  (4 rules)
```css
.tag.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.avatar.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.badge.background-neutral-0 { color:var(--text-color-primary, var(--color-primary)); }
.background-neutral-0 { background-color:var(--background-color-neutral-0, var(--color-neutral-0)); }
```
### .background-yellow-lighter  (1 rule)
```css
.background-yellow-lighter { background-color:var(--background-color-yellow-lighter, var(--color-yellow-lighter)); }
```
### .border-color-neutral-3  (1 rule)
```css
.border-color-neutral-3 { border-color: var(--color-neutral-3); --border-color: var(--color-neutral-3); }
```
### .border-none  (1 rule)
```css
.border-size-none, .border-none { border-width: var(--border-size-none); }
```
### .border-radius-circle  (1 rule)
```css
.border-radius-circle { border-radius:var(--border-radius-circle); }
```
### .border-radius-large  (2 rules)
```css
.border-radius-large.form-control[data-input], .border-radius-large.form-control[data-textarea], .border-radius-large.dropdown-container > div.dropdown-display { border-radius: var(--border-radius-large); }
.border-radius-large { border-radius: var(--border-radius-large); }
```
### .border-radius-medium  (2 rules)
```css
.border-radius-medium.form-control[data-input], .border-radius-medium.form-control[data-textarea], .border-radius-medium.dropdown-container > div.dropdown-display { border-radius: var(--border-radius-medium); }
.border-radius-medium { border-radius: var(--border-radius-medium); }
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
### .border-radius-top-left-large  (1 rule)
```css
.border-radius-top-left-large { border-top-left-radius: var(--border-radius-large); }
```
### .border-radius-top-right-large  (1 rule)
```css
.border-radius-top-right-large { border-top-right-radius: var(--border-radius-large); }
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
### .flex-wrap  (1 rule)
```css
.flex-wrap { -ms-flex-wrap:wrap; flex-wrap:wrap; }
```
### .font-size-base  (1 rule)
```css
.font-size-base { font-size:var(--font-size-base); }
```
### .font-size-display  (5 rules)
```css
h1, .heading1, h2, .heading2, h3, .heading3, h4, .heading4, h5, .heading5, h6, .heading6, .font-size-display { font-weight:var(--font-semi-bold); line-height:1.25; margin:0; }
.font-size-display { font-size:var(--font-size-display); }
.tablet .font-size-display { font-size:calc(var(--font-size-display) - 2px); }
.phone .font-size-display { font-size:calc(var(--font-size-display) - 4px); }
h1, .heading1, h2, .heading2, h3, .heading3, h4, .heading4, h5, .heading5, h6, .heading6, .font-size-display { line-height: 1.5; }
```
### .gap-s  (1 rule)
```css
.gap-s { gap:var(--space-s); }
```
### .hidden  (6 rules)
```css
.flatpickr-day.hidden { visibility:hidden; }
.chat-message-status.hidden { display:none; }
.carousel .carousel-navigation.hidden { display:none; }
.hidden { display:none; }
.ubt-avatar-image.hidden { display:none; }
.ubt-lazy-image.hidden { --avatar-image-size: 0px; --lazy-image-width: 0px; }
```
### .image-card-content__subtitle  (1 rule)
```css
.ubt-image-card--gallery .image-card-content__subtitle { font-size: var(--font-size-xxs) }
```
### .justify-content-center  (1 rule)
```css
.justify-content-center { -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; }
```
### .justify-content-space-between  (1 rule)
```css
.justify-content-space-between { -webkit-box-pack:justify; -ms-flex-pack:justify; justify-content:space-between; }
```
### .margin-bottom-s  (1 rule)
```css
.margin-bottom-s { margin-bottom:var(--space-s); }
```
### .margin-top-s  (1 rule)
```css
.margin-top-s { margin-top:var(--space-s); }
```
### .margin-top-xs  (1 rule)
```css
.margin-top-xs { margin-top:var(--space-xs); }
```
### .margin-y-s  (1 rule)
```css
.margin-y-s { margin-bottom:var(--space-s); margin-top:var(--space-s); }
```
### .padding-base  (1 rule)
```css
.padding-base { padding:var(--space-base); }
```
### .padding-bottom-base  (1 rule)
```css
.padding-bottom-base { padding-bottom:var(--space-base); }
```
### .padding-bottom-s  (1 rule)
```css
.padding-bottom-s { padding-bottom:var(--space-s); }
```
### .padding-s  (1 rule)
```css
.padding-s { padding:var(--space-s); }
```
### .padding-top-s  (1 rule)
```css
.padding-top-s { padding-top:var(--space-s); }
```
### .padding-x-base  (1 rule)
```css
.padding-x-base { padding-left:var(--space-base); padding-right:var(--space-base); }
```
### .padding-x-s  (1 rule)
```css
.padding-x-s { padding-left:var(--space-s); padding-right:var(--space-s); }
```
### .padding-y-xs  (1 rule)
```css
.padding-y-xs { padding-bottom:var(--space-xs); padding-top:var(--space-xs); }
```
### .position-absolute  (1 rule)
```css
.position-absolute { position:absolute; }
```
### .position-relative  (1 rule)
```css
.position-relative { position:relative; }
```
### .text-neutral-8  (2 rules)
```css
.text-neutral-8 { color:var(--text-color-neutral-8, var(--color-neutral-8)); }
.leaflet-bar a.text-neutral-8 { color: var(--color-neutral-8); }
```
### .text-neutral-9  (1 rule)
```css
.text-neutral-9 { color:var(--text-color-neutral-9, var(--color-neutral-9)); }
```
### .ubt-actions-menu  (2 rules)
```css
.ubt-actions-menu > div .ubt-icon-button { width: var(--ubt-actions-menu-width); }
.ubt-actions-menu { gap: var(--space-xs); }
```
### .ubt-background-image--intrinsic-height  (3 rules)
```css
.ubt-lazy-image.ubt-lazy-image--no-image.ubt-background-image--intrinsic-height { min-height: var(--_ubt-background-image-size); height: var(--_ubt-background-image-size); }
.ubt-background-image--intrinsic-height { --_ubt-background-image-size: calc(var(--lazy-image-width) * (2/3)); }
.ubt-background-image--intrinsic-height.ubt-lazy-image--width-auto { --_ubt-background-image-size: var(--lazy-image-width); }
```
### .ubt-custom-container  (1 rule)
```css
.OSBlockWidget:has(> .inline-block), .OSBlockWidget:has(> .OSBlockWidget > .ubt-custom-container.inline-block) { display: inline-block; width: fit-content; }
```
### .ubt-icon-button__badge  (3 rules)
```css
.ubt-icon-button__badge:has(.ubt-icon) { position: absolute; top: 14.645%; right: 14.645%; transform: translate(50%, -50%); }
.ubt-icon-button__badge:not(:has(.ubt-icon)) { display: none; }
.ubt-icon-button__badge { background: radial-gradient(circle closest-side, #fff 75%, transparent 76%); }
```
### .ubt-icon-button__icon-container  (3 rules)
```css
.ubt-icon-button__icon-container { display: flex; align-items: center; justify-content: center; max-width: inherit; width: var(--avatar-image-size); height: var(--avatar-image-size); position: relative; }
.ubt-icon-button--loading .ubt-icon-button__icon-container::before { content: ''; position: absolute; inset: -1px; border: inherit; border-radius: inherit; border-width: 1px; border-top-color: var(--color-neutral-0); }
.ubt-icon-button--loading .ubt-icon-button__icon-container::before { animation: spin 0.8s linear infinite; }
```
### .ubt-icon-button__text-container  (3 rules)
```css
.ubt-icon-button__text-container { font-size: 0.75rem; line-height: 1; display: block; }
.ubt-icon-button > [data-block]:has(.ubt-icon-button__text-container:empty) { display: none; }
.connect-share-sheet .ubt-icon-button__text-container { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
```
### .ubt-image-card  (2 rules)
```css
.ubt-image-card { /*min-height: 240px;*/ position: relative; }
.ubt-image-card:has(.ubt-image-card__avatar-list) { --_avatar-image-margin-top: calc(-1 * ((var(--avatar-image-size) + (var(--border-size-m) * 2)) /2)); }
```
### .ubt-image-card--gallery  (1 rule)
```css
.ubt-image-card--gallery .image-card-content__subtitle { font-size: var(--font-size-xxs) }
```
### .ubt-image-card__background-image  (3 rules)
```css
.ubt-image-card__background-image { height: var(--_ubt-background-image-size); overflow: hidden; }
.ubt-image-card__background-image img { height: 100%; width: 100%; object-fit: cover; object-position: center center; }
.ubt-image-card__background-image .ubt-unavailable-image img { height: 36px; width:36px; }
```
### .ubt-image-card__content  (1 rule)
```css
.ubt-image-card__content { margin-top: max(calc(var(--avatar-image-size) + var(--_avatar-image-margin-top)), 0px) }
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
### .ubt-lazy-image--no-image  (5 rules)
```css
/* .ubt-lazy-image--no-image .ubt-icon { font-size: inherit; }
.ubt-lazy-image.ubt-lazy-image--no-image.ubt-background-image--intrinsic-height { min-height: var(--_ubt-background-image-size); height: var(--_ubt-background-image-size); }
.ubt-lazy-image.ubt-lazy-image--no-image.ubt-background-image--intrinsic-width { min-width: var(--_ubt-background-image-size); width: var(--_ubt-background-image-size); }
.shareable-object-generic .ubt-lazy-image--no-image { aspect-ratio: 100/58; }
.shareable-object-generic .ubt-lazy-image:not(.ubt-lazy-image--no-image) img { aspect-ratio: 100/58; object-fit: cover; }
```
### .ubt-lazy-image--width-half-width  (2 rules)
```css
.ubt-lazy-image--width-half-width { --lazy-image-width: 50vw; }
.ubt-avatar-image-l, .ubt-lazy-image-l, .ubt-lazy-image--width-l, .ubt-lazy-image--width-list-thumbnail, .ubt-lazy-image--width-half-width { --avatar-initials-font-size: var(--font-size-h4); --avatar-double-image-size: 38px; --avatar-double-initials-font-size: var(--font-size-xs) }
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
### .ubt-skeleton-section__element  (3 rules)
```css
.ubt-skeleton-section .ubt-skeleton-section__element span { height: unset; }
an, .ubt-skeleton-section .ubt-skeleton-section__element, .ubt-skeleton-section .ubt-icon:not(.ignore-loading), .ubt-skeleton-section .form > div, .ubt-skeleton-section .osui-dropdown-search, .ubt-skeleton-section .badge { background: var(--ubt-background-skeleton-light); animation: var(--ubt-skeleton-animation); border-color: var(--ubt-background-skeleton-light) }
keleton-section *::before, .active-screen.screen-container .ubt-skeleton-section *::after, .ubt-skeleton-section input, .ubt-skeleton-section .osui-dropdown-search .vscomp-ele-wrapper, .ubt-skeleton-section .ubt-icon img { visibility: hidden; transition-property: visibility; transition-duration: 0ms; }
```
### .ubt-sub-layout-section  (2 rules)
```css
.ubt-sub-layout-section { width: 100%; background-color: var(--color-neutral-0); }
.ubt-sub-layout-section > div:empty { display: none; }
```
## ConnectPatterns.ImageCard__Content

### .image-card-content  (2 rules)
```css
.image-card-content { display: flex; flex-direction: column; gap:var(--space-xs); }
.image-card-content > div:empty { display: none; }
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
## ConnectPatterns.CircleButton_WithLabel

### .ubt-avatar-image-s  (2 rules)
```css
.ubt-avatar-image-s, .ubt-lazy-image-s { --avatar-image-size: 40px; }
.ubt-avatar-image-s, .ubt-lazy-image-s, .ubt-lazy-image--width-s { --avatar-initials-font-size: var(--font-size-s); }
```
### .ubt-icon-button  (4 rules)
```css
.ubt-icon-button { display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; text-align: center; width: fit-content; /* Ensures width only grows as needed by content */ }
.ubt-icon-button > [data-block]:has(.ubt-icon-button__text-container:empty) { display: none; }
.ubt-actions-menu > div .ubt-icon-button { width: var(--ubt-actions-menu-width); }
.connect-share-sheet__content .connect-share-sheet__horizontal-list .ubt-icon-button { width: min-content; }
```
## Adaptive.Gallery

### .osui-gallery  (12 rules)
```css
.osui-gallery, .osui-gallery > .list { display:grid; grid-gap:var(--gallery-gap); grid-template-columns:repeat(var(--gallery-desktop-items), minmax(0, 1fr)); }
.osui-gallery > * { margin-top:0; }
.osui-gallery > .list { grid-column-end:calc(var(--gallery-desktop-items) + 1); grid-column-start:1; overflow:initial; }
.osui-gallery > .list .card, .osui-gallery > .list .animate { height:100%; }
.osui-gallery > .list .card-background {  }
.osui-gallery > img { -o-object-fit:cover; object-fit:cover; }
.tablet .osui-gallery, .tablet .osui-gallery > .list { grid-template-columns:repeat(var(--gallery-tablet-items), minmax(0, 1fr)); }
.tablet .osui-gallery > .list { grid-column-end:calc(var(--gallery-tablet-items) + 1); }
.phone .osui-gallery, .phone .osui-gallery > .list { grid-template-columns:repeat(var(--gallery-phone-items), minmax(0, 1fr)); }
.phone .osui-gallery > .list { grid-column-end:calc(var(--gallery-phone-items) + 1); }
.phone .calendar-day-gallery.osui-gallery > .list { column-gap: var(--month-gallery-column-gap); }
.mycalendar-month-selector .osui-gallery .list { justify-items: center; column-gap: var(--space-m); row-gap: var(--space-base); }
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
### .connect-share-portal  (3 rules)
```css
.popup-backdrop:has(.connect-share-portal) { background-color: transparent !important; pointer-events: none !important; position: relative; /* Optional: display: none !important; if you don't need the backdrop at all */ }
.connect-share-portal { position: relative !important; background: transparent !important; box-shadow: none !important; border: none !important; min-width: 0 !important; min-height: 0 !important; width: 0 !important; height: 0 !important; padding: 0 !important; margin: 0 !important; pointer-events: none !important; /* Pass clicks through the invisible popup */ }
.connect-share-portal .popup-content { pointer-events: auto }
```
### .osx  (3 rules)
```css
.osx.tablet .layout-top:not(.menu-visible) .header-navigation, .osx.phone .layout-top:not(.menu-visible) .header-navigation { pointer-events:none; }
.osx .vscomp-search-container .vscomp-search-clear, .ios .vscomp-search-container .vscomp-search-clear { line-height:1.1; }
accordion .osui-tabs__header__indicator, .osx.chrome .section-expandable .osui-tabs__header__indicator, .osx.edge .osui-accordion .osui-tabs__header__indicator, .osx.edge .section-expandable .osui-tabs__header__indicator { -webkit-perspective:1000px; perspective:1000px; }
```
### .popup-backdrop  (6 rules)
```css
.popup-backdrop { background-color:var(--background-color-overlay, var(--overlay-background)); }
.layout-native .popup-backdrop, .layout-native .popup-dialog { padding:var(--space-base); }
html:has(.popup-backdrop) .osui-overflow-menu__balloon { z-index:var(--layer-global-off-canvas); }
.popup-backdrop { background-color: var( --overlay-background); z-index: 100; }
body:has(.slide-from-left-leave:not(.active-screen)) .popup-backdrop { z-index: 1000; }
.popup-backdrop:has(.connect-share-portal) { background-color: transparent !important; pointer-events: none !important; position: relative; /* Optional: display: none !important; if you don't need the backdrop at all */ }
```
### .popup-content  (1 rule)
```css
.connect-share-portal .popup-content { pointer-events: auto }
```
### .popup-dialog  (10 rules)
```css
.popup-dialog { border:0; border-radius:var(--border-radius-soft); -webkit-box-shadow:var(--shadow-xl); box-shadow:var(--shadow-xl); margin:var(--space-m); max-height:calc(100% - var(--space-xl)); max-width:500px; overflow:visible; padding:var(--space-m); width:100%; }
.popup-dialog {  }
.layout-native .popup-backdrop, .layout-native .popup-dialog { padding:var(--space-base); }
.os-high-contrast .popup-dialog { border:var(--border-size-s) solid var(--border-color-neutral-0, var(--color-neutral-0)); border-radius:var(--border-radius-soft); }
.popup-dialog .tabs .tabs-content-tab:not(.open) { display:none; }
.popup-dialog .tabs .tabs-content-tab:not(.open) {  }
.popup-dialog.ubt-pop-up, .ubt-pop-up .popup-dialog { border-radius: var(--border-radius-large); padding: var(--space-base); max-width: 300px; }
.popup-dialog { padding: var(--space-base); border-radius: var(--border-radius-large) }
*/  .mycalendar-month-selector-popup .popup-dialog { margin: 0px; max-width: 328px; }
.connect-dialog-popup .popup-dialog { border-radius: var(--border-radius-large); padding: var(--space-base) }
```
### .portal-class  (1 rule)
```css
.portal-class ~ .pika-single.is-bound { z-index:calc(var(--layer-above) + var(--popup-layer)); }
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

`.columns` (82), `.columns-item` (71), `.header` (51), `.layout` (55), `.layout-native` (241), `.layout-side` (89), `.list` (93), `.phone` (235)

## Design tokens referenced by the rules above

- `--_avatar-image-margin-top`: `calc(-1 * ((var(--avatar-image-size) + (var(--border-size-m) * 2)) /2))` (in `.ubt-image-card:has(.ubt-image-card__avatar-list)`)
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
- `--border-size-none`: `0` (in `@charset "UTF-8";    :root`)
- `--border-size-s`: `1px` (in `@charset "UTF-8";    :root`)
- `--bottom-bar-size`: `56px` (in `@charset "UTF-8";    :root`)
- `--carousel-container-height`: `var(--bottom-bar-size)` (in `.ubt-entities-carousel`); `0px` (in `.layout:has(.footer:empty) .ubt-entities-carousel`)
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
- `--color-neutral-10`: `#101213` (in `@charset "UTF-8";    :root`)
- `--color-neutral-11`: `#d8dcde` (in `:root`)
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
- `--color-primary`: `#1068eb` (in `@charset "UTF-8";    :root`); `var(--color-cyan-dark)` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-primary-gradient-radial`: `radial-gradient(63.8% 63.8% at 62.5% 55.47%, var(--color-cyan) 17.79%, var(--color-cyan-dark) 100%)` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-primary-lightest`: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))` (in `@charset "UTF-8";    :root`); `var(--color-cyan-lightest)` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-purple`: `#9D9EFF` (in `:root, .connect-legacy-compatibily-containter`)
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
- `--color-yellow-lighter`: `#fbd999` (in `@charset "UTF-8";    :root`); `#FAE8BF` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-yellow-lightest`: `#fef5e5` (in `@charset "UTF-8";    :root`); `#FDF6E5` (in `:root, .connect-legacy-compatibily-containter`)
- `--connect-event-form-item-border`: `var(--border-size-s) solid var(--color-neutral-3)` (in `.connect-event-form`)
- `--current-svg-height`: `100vh` (in `:root`)
- `--dx-screen-transition-duration`: `300ms` (in `:root`)
- `--font-regular`: `400` (in `@charset "UTF-8";    :root`)
- `--font-semi-bold`: `600` (in `@charset "UTF-8";    :root`)
- `--font-size-base`: `16px` (in `@charset "UTF-8";    :root`); `1rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-display`: `36px` (in `@charset "UTF-8";    :root`); `2.25rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h0`: `3.625rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h2`: `28px` (in `@charset "UTF-8";    :root`); `1.75rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h4`: `22px` (in `@charset "UTF-8";    :root`); `1.375rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h5`: `20px` (in `@charset "UTF-8";    :root`); `1.25rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h6`: `18px` (in `@charset "UTF-8";    :root`); `1.125rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-s`: `14px` (in `@charset "UTF-8";    :root`); `0.875rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-xs`: `12px` (in `@charset "UTF-8";    :root`); `0.75rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-xxs`: `0.625rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--footer-shadow-scroll`: `hidden` (in `:root`)
- `--gallery-desktop-items`: `3` (in `.ubt-services-carousel`)
- `--gallery-gap`: `var(--space-base)` (in `.ubt-services-carousel`)
- `--gallery-phone-items`: `3` (in `.ubt-services-carousel`)
- `--gallery-tablet-items`: `3` (in `.ubt-services-carousel`)
- `--header-color`: `#ffffff` (in `@charset "UTF-8";    :root`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-main`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-home`); `var(--color-neutral-0)` (in `.ubt-layout-detail, .connect-pin-screen`)
- `--header-shadow-scroll`: `hidden` (in `:root`)
- `--header-size`: `56px` (in `@charset "UTF-8";    :root`); `103px` (in `.ubt-layout-main`); `58px` (in `.ubt-layout-home`); `50px` (in `.screen-container .layout.ubt-layout-home.ubt-profile-screen`)
- `--header-size-content`: `48px` (in `@charset "UTF-8";    :root`)
- `--layer-above`: `var(--layer-system-scale)` (in `@charset "UTF-8";    :root`)
- `--layer-global-instant-interaction`: `calc(var(--layer-above) + var(--layer-global-off-canvas))` (in `@charset "UTF-8";    :root`)
- `--layer-global-navigation`: `calc(var(--layer-above) + var(--layer-global-elevated))` (in `@charset "UTF-8";    :root`)
- `--layer-global-negative`: `-1` (in `@charset "UTF-8";    :root`)
- `--layer-global-off-canvas`: `calc(var(--layer-above) + var(--layer-global-navigation))` (in `@charset "UTF-8";    :root`)
- `--layer-global-screen`: `0` (in `@charset "UTF-8";    :root`)
- `--layer-local-tier-1`: `1` (in `@charset "UTF-8";    :root`)
- `--lazy-image-width`: `0px` (in `.ubt-lazy-image.hidden`); `20px` (in `.ubt-lazy-image--width-xxs`); `32px` (in `.ubt-lazy-image--width-xs`); `40px` (in `.ubt-lazy-image--width-s`)
- `--loading-dot-size`: `10px` (in `:root`)
- `--month-gallery-column-gap`: `var(--space-s)` (in `:root`); `var(--space-xs)` (in `*/ .calendar-datepicker`)
- `--os-safe-area-bottom`: `max(env(safe-area-inset-bottom), var(--safe-area-inset-bottom, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-left`: `max(env(safe-area-inset-left), var(--safe-area-inset-left, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-right`: `max(env(safe-area-inset-right), var(--safe-area-inset-right, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-top`: `max(env(safe-area-inset-top), var(--safe-area-inset-top, 0px))` (in `@charset "UTF-8";    :root`)
- `--osui-carousel-pagination-margin`: `30px` (in `.osui-carousel`)
- `--osui-carousel-track-width`: `100%` (in `.osui-carousel`)
- `--overlay-background`: `rgba(0, 0, 0, 0.25)` (in `@charset "UTF-8";    :root`); `var(--color-overlay-neutral-10)` (in `:root, .connect-legacy-compatibily-containter`)
- `--shadow-none`: `none` (in `@charset "UTF-8";    :root`)
- `--shadow-xl`: `0 8px 10px rgba(0, 0, 0, 0.1)` (in `@charset "UTF-8";    :root`); `0px 8px 10px 0px rgba(0, 0, 0, 0.1)` (in `:root, .connect-legacy-compatibily-containter`)
- `--shadow-xs`: `0 1px 2px rgba(0, 0, 0, 0.1)` (in `@charset "UTF-8";    :root`); `0 1px 2px rgba(0, 0, 0, 0.1)` (in `:root, .connect-legacy-compatibily-containter`)
- `--side-menu-size`: `300px` (in `@charset "UTF-8";    :root`); `264px` (in `e, .tablet .layout-native.aside-visible, .tablet .layout-native.aside-expandable`)
- `--skeleton-span-length`: `12ch` (in `.ubt-skeleton-section span:empty`)
- `--space-base`: `16px` (in `@charset "UTF-8";    :root`); `16px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-l`: `32px` (in `@charset "UTF-8";    :root`); `32px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-m`: `24px` (in `@charset "UTF-8";    :root`); `24px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-none`: `0` (in `@charset "UTF-8";    :root`); `0` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-s`: `8px` (in `@charset "UTF-8";    :root`); `8px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xl`: `40px` (in `@charset "UTF-8";    :root`); `40px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xs`: `4px` (in `@charset "UTF-8";    :root`); `4px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--space-xxl`: `48px` (in `@charset "UTF-8";    :root`); `48px` (in `:root, .connect-legacy-compatibily-containter--spacing`)
- `--ubt-actions-menu-width`: `53px` (in `:root`)
- `--ubt-background-skeleton-light`: `var(--color-neutral-3)` (in `:root`)
- `--ubt-button-height-s`: `40px` (in `:root`)
- `--ubt-button-icon-size`: `var(--ubt-icon-size-small)` (in `.ubt-button--xs`); `var(--ubt-icon-size-medium)` (in `.ubt-button--s`); `var(--ubt-icon-size-base)` (in `.ubt-button--m`)
- `--ubt-icon-size`: `var(--ubt-icon-size-base)` (in `:root`); `var(--ubt-icon-size-base)` (in `.ubt-avatar-image-base, .ubt-lazy-image-base, .ubt-lazy-image--width-base`); `var(--ubt-icon-size-non-standard-32)` (in `.ubt-avatar-image.ubt-lazy-image.ubt-lazy-image-base`); `var(--ubt-icon-size-medium)` (in `.ubt-avatar-image-xxs, .ubt-lazy-image-xxs`)
- `--ubt-icon-size-base`: `24px` (in `:root`)
- `--ubt-icon-size-non-standard-16`: `16px` (in `:root`)
- `--ubt-icon-size-non-standard-32`: `32px` (in `:root`)
- `--ubt-layout-login-padding`: `var(--ubt-pincode-padding, var(--ubt-layout-login-padding-top) var(--space-base) var(--space-l) var(--space-base))` (in `:root`)
- `--ubt-login-screen-padding-top`: `calc(var(--ubt-layout-login-padding-top) + 80px)` (in `:root`)
- `--ubt-login-svg-min-height`: `732px` (in `:root`)
- `--ubt-pincode-button-color`: `var(--color-neutral-8)` (in `:root`); `var(--color-neutral-0)` (in `.ubt-layout--login`)
- `--ubt-pincode-buttons-size`: `64px` (in `:root`)
- `--ubt-skeleton-animation`: `ubt-skeleton-pulse 1.5s ease-in-out infinite` (in `:root`)
