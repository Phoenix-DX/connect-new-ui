# CSS relevant to CommunityBusinessDetails_CoomingSoon

Load order of stylesheets (keep this order in the build):

1. `/UBTConnect/css/_Basic.css`
2. `/UBTConnect/css/OutSystemsReactWidgets.css`
3. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.css`
4. `/UBTConnect/css/UBTConnectLibrary.UBTConnectBase.css`
5. `/UBTConnect/css/UBTConnectLibrary.UBTConnectLibrary.css`
6. `/UBTConnect/css/Connect2_LegacyShared.UBTConnect.css`
7. `/UBTConnect/css/OutSystemsUI_2_23.OutSystemsUI.extra.css`

Rules below are those whose selector contains a class used on the captured page, grouped by the block that owns the element. Full source: `styles/bundle.css`.

## Layouts.Layout_MainPages

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
### .gutter-base  (5 rules)
```css
.columns.gutter-base { margin-left:calc(-1 * var(--space-base) / 2); margin-right:calc(-1 * var(--space-base) / 2); }
.columns.gutter-base > .columns-item { margin-bottom:var(--space-base); padding:var(--space-none) calc(var(--space-base) / 2); }
ld > .columns-item:not(:last-child), .tablet .columns.gutter-base.tablet-break-middle:only-child > .columns-item:not(:last-child), .tablet .columns.gutter-base.tablet-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-base); }
-child > .columns-item:not(:last-child), .phone .columns.gutter-base.phone-break-middle:only-child > .columns-item:not(:last-child), .phone .columns.gutter-base.phone-break-all:only-child > .columns-item:not(:last-child) { margin-bottom:var(--space-base); }
.columns.ubt-columns.gutter-base { gap: var(--space-base) }
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
### .ubt-columns-reduce-last  (2 rules)
```css
> .columns-item:nth-child(2), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(1), .ubt-columns.ubt-columns-expand-middle.ubt-columns--three-columns > .columns-item:nth-child(3) { flex: 0; min-width: max-content; }
.ubt-columns.ubt-columns--reverse.ubt-columns-reduce-first > .columns-item:nth-child(2), .ubt-columns.ubt-columns--reverse.ubt-columns-reduce-last.ubt-columns--two-columns > .columns-item:nth-child(1) { flex: 0; }
```
## ConnectPatterns.StaticInput

### .search-placeholder-ellipsis  (2 rules)
```css
.search-placeholder-ellipsis input:placeholder-shown, input.search-placeholder-ellipsis:placeholder-shown { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.search-placeholder-ellipsis input::placeholder, input.search-placeholder-ellipsis::placeholder { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
```
### .ubt-static-input  (1 rule)
```css
.ubt-static-input { background-color: var(--color-neutral-1); border: var(--border-size-s) solid var(--color-neutral-5); border-radius: var(--border-radius-rounded); color: var(--color-neutral-7); min-height: 37px; height: 37px; padding: 0 var(--space-base); display: flex; align-items: center; justify-content: flex-start; column-gap: var(--space-base); }
```
## ConnectPatterns.Icon

### .connect-icon-search  (1 rule)
```css
.connect-icon-search:before { content: "\f01b"; }
```
### .icon-medium  (1 rule)
```css
.icon-medium { --ubt-icon-size: var(--ubt-icon-size-medium); }
```
### .text-inherit  (1 rule)
```css
.text-inherit { color: inherit; }
```
### .ubt-icon  (14 rules)
```css
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
## ConnectPatterns.TextEllipsis

### .text-ellipsis  (1 rule)
```css
.text-ellipsis { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
```
### .ubt-text-ellipsis  (2 rules)
```css
.OSBlockWidget:has(> .ubt-text-ellipsis) { overflow: hidden; }
.ubt-text-ellipsis { display: inherit; }
```
## Content.BlankSlate

### .blank-slate  (5 rules)
```css
.blank-slate { display:-webkit-box; display:-ms-flexbox; display:flex; -webkit-box-orient:vertical; -webkit-box-direction:normal; -ms-flex-direction:column; flex-direction:column; -ms-flex-pack:distribute; justify-content:space-around; text-align:center; }
.blank-slate.large { height:100%; }
.blank-slate.large .blank-slate-icon { font-size:120px; }
.blank-slate.large .blank-slate-actions { padding:var(--space-xxl) var(--space-base); }
html[data-uieditorversion^="1"] .blank-slate > div {  }
```
### .blank-slate-actions  (2 rules)
```css
.blank-slate.large .blank-slate-actions { padding:var(--space-xxl) var(--space-base); }
.blank-slate-actions { padding:var(--space-base); }
```
### .blank-slate-description  (1 rule)
```css
.blank-slate-description { color:var(--text-color-neutral-9, var(--color-neutral-9)); padding:var(--space-none) var(--space-base); }
```
### .blank-slate-icon  (2 rules)
```css
.blank-slate.large .blank-slate-icon { font-size:120px; }
.blank-slate-icon { color:var(--text-color-neutral-6, var(--color-neutral-6)); font-size:70px; }
```
### .fa  (5 rules)
```css
.fa { display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale }
.fa.fa-pull-left { margin-right:.3em }
.fa.fa-pull-right { margin-left:.3em }
.fa.pull-left { margin-right:.3em }
.fa.pull-right { margin-left:.3em }
```
### .fa-2x  (1 rule)
```css
.fa-2x { font-size:2em }
```
### .fa-ellipsis-h  (1 rule)
```css
.fa-ellipsis-h:before { content:"\f141" }
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
### .large  (3 rules)
```css
.blank-slate.large { height:100%; }
.blank-slate.large .blank-slate-icon { font-size:120px; }
.blank-slate.large .blank-slate-actions { padding:var(--space-xxl) var(--space-base); }
```
### .placeholder-empty  (3 rules)
```css
html[data-uieditorversion^="1"] .placeholder-empty:empty {  }
.ph:empty, .placeholder-empty:empty { display:none; }
list-group, .osui-tabs__content > .ph > .OSBlockWidget, .osui-tabs__content > .placeholder-empty > .OSBlockWidget, .osui-tabs__content > .ph > .list.list-group, .osui-tabs__content > .placeholder-empty > .list.list-group { display:contents; }
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

`.columns` (82), `.columns-item` (71), `.header` (51), `.layout` (53), `.layout-native` (241), `.layout-side` (89), `.phone` (235)

## Design tokens referenced by the rules above

- `--border-radius-circle`: `100%` (in `@charset "UTF-8";    :root`)
- `--border-radius-medium`: `8px` (in `:root, .connect-legacy-compatibily-containter`)
- `--border-radius-none`: `0` (in `@charset "UTF-8";    :root`)
- `--border-radius-rounded`: `100px` (in `@charset "UTF-8";    :root`); `16px` (in `.osui-balloon`); `16px` (in `.osui-bottom-sheet`); `16px` (in `.osui-overflow-menu`)
- `--border-size-m`: `2px` (in `@charset "UTF-8";    :root`)
- `--border-size-s`: `1px` (in `@charset "UTF-8";    :root`)
- `--bottom-bar-size`: `56px` (in `@charset "UTF-8";    :root`)
- `--color-background-body`: `#f3f6f8` (in `@charset "UTF-8";    :root`); `var(--color-neutral-0)` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-cyan`: `#0d8091` (in `@charset "UTF-8";    :root`); `#4EAEC2` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-focus-outer`: `#ffd337` (in `@charset "UTF-8";    :root`)
- `--color-neutral-0`: `#ffffff` (in `@charset "UTF-8";    :root`)
- `--color-neutral-1`: `#f8f9fa` (in `@charset "UTF-8";    :root`)
- `--color-neutral-10`: `#101213` (in `@charset "UTF-8";    :root`)
- `--color-neutral-4`: `#dee2e6` (in `@charset "UTF-8";    :root`)
- `--color-neutral-5`: `#ced4da` (in `@charset "UTF-8";    :root`)
- `--color-neutral-6`: `#adb5bd` (in `@charset "UTF-8";    :root`)
- `--color-neutral-7`: `#6a7178` (in `@charset "UTF-8";    :root`)
- `--color-neutral-8`: `#4f575e` (in `@charset "UTF-8";    :root`)
- `--color-neutral-9`: `#272b30` (in `@charset "UTF-8";    :root`)
- `--color-primary`: `#1068eb` (in `@charset "UTF-8";    :root`); `var(--color-cyan-dark)` (in `:root, .connect-legacy-compatibily-containter`)
- `--color-primary-gradient-linear`: `linear-gradient(90deg, var(--color-primary) 0%, var(--color-cyan) 100%)` (in `:root, .connect-legacy-compatibily-containter`)
- `--connect-event-form-item-border`: `var(--border-size-s) solid var(--color-neutral-3)` (in `.connect-event-form`)
- `--dx-screen-transition-duration`: `300ms` (in `:root`)
- `--font-regular`: `400` (in `@charset "UTF-8";    :root`)
- `--font-semi-bold`: `600` (in `@charset "UTF-8";    :root`)
- `--font-size-base`: `16px` (in `@charset "UTF-8";    :root`); `1rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h2`: `28px` (in `@charset "UTF-8";    :root`); `1.75rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h4`: `22px` (in `@charset "UTF-8";    :root`); `1.375rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-h5`: `20px` (in `@charset "UTF-8";    :root`); `1.25rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-s`: `14px` (in `@charset "UTF-8";    :root`); `0.875rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--font-size-xs`: `12px` (in `@charset "UTF-8";    :root`); `0.75rem` (in `:root, .connect-legacy-compatibily-containter`)
- `--footer-shadow-scroll`: `hidden` (in `:root`)
- `--header-color`: `#ffffff` (in `@charset "UTF-8";    :root`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-main`); `var(--color-primary-gradient-linear)` (in `.ubt-layout-home`); `var(--color-neutral-0)` (in `.ubt-layout-detail, .connect-pin-screen`)
- `--header-shadow-scroll`: `hidden` (in `:root`)
- `--header-size`: `56px` (in `@charset "UTF-8";    :root`); `103px` (in `.ubt-layout-main`); `58px` (in `.ubt-layout-home`); `50px` (in `.screen-container .layout.ubt-layout-home.ubt-profile-screen`)
- `--header-size-content`: `48px` (in `@charset "UTF-8";    :root`)
- `--layer-global-instant-interaction`: `calc(var(--layer-above) + var(--layer-global-off-canvas))` (in `@charset "UTF-8";    :root`)
- `--layer-global-navigation`: `calc(var(--layer-above) + var(--layer-global-elevated))` (in `@charset "UTF-8";    :root`)
- `--layer-global-negative`: `-1` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-bottom`: `max(env(safe-area-inset-bottom), var(--safe-area-inset-bottom, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-left`: `max(env(safe-area-inset-left), var(--safe-area-inset-left, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-right`: `max(env(safe-area-inset-right), var(--safe-area-inset-right, 0px))` (in `@charset "UTF-8";    :root`)
- `--os-safe-area-top`: `max(env(safe-area-inset-top), var(--safe-area-inset-top, 0px))` (in `@charset "UTF-8";    :root`)
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
- `--ubt-button-icon-size`: `var(--ubt-icon-size-small)` (in `.ubt-button--xs`); `var(--ubt-icon-size-medium)` (in `.ubt-button--s`); `var(--ubt-icon-size-base)` (in `.ubt-button--m`)
- `--ubt-icon-size`: `var(--ubt-icon-size-base)` (in `:root`); `var(--ubt-icon-size-base)` (in `.ubt-avatar-image-base, .ubt-lazy-image-base, .ubt-lazy-image--width-base`); `var(--ubt-icon-size-non-standard-32)` (in `.ubt-avatar-image.ubt-lazy-image.ubt-lazy-image-base`); `var(--ubt-icon-size-medium)` (in `.ubt-avatar-image-xxs, .ubt-lazy-image-xxs`)
- `--ubt-icon-size-medium`: `20px` (in `:root`)
- `--ubt-skeleton-animation`: `ubt-skeleton-pulse 1.5s ease-in-out infinite` (in `:root`)
