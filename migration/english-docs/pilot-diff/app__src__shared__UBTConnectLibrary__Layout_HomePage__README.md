### app/src/shared/UBTConnectLibrary/Layout_HomePage/README.md

**Change 1**

Before:

> Events: `OnSVGScrolled`, `OnSearchInputScrolled`, `OnReadyEvent(ContentWrapperId)`, `OnSearchClick`, `OnPullToRefresh`
> → `onOn…`. Placeholders: `Placeholder_Header_Title`, `Placeholder_Header_Right`, `HeaderContent`, `Content`, `Bottom`,
> `Placeholder_CommonUI_Inside_Layout` → `placeholderHeaderTitle`, `placeholderHeaderRight`, `headerContent`, `content`,
> `bottom`, `placeholderCommonUIInsideLayout`.
> 
> Renders LayoutRuntime_Top, the header (Columns_Two: title, search icon shown once the search bar scrolled away, right
> placeholder), PullToRefresh (input), the content wrapper with SVG_Background_Custom (`<id>-SVG`), the search bar
> (`<id>-SearchInput`, AddSearchBar) and Content, the footer (Bottom) and the CommonUI placeholder. OnReady writes
> `--current-svg-height`, starts Initialize_SvgScroll (ported in `lib/actions.ts`: header gradient, SVG path morph,
> shadow variables on `.active-screen`) and raises OnReadyEvent.
> 
> **CommonUI / BottomBarMenu:** the compiled layout has the `Placeholder_CommonUI_Inside_Layout` and `Bottom`
> placeholders but no CommonUI_InsideLayout or BottomBarMenu of its own (a library layout cannot use UBTConnect blocks;
> the captured instances `$b12`, `$b13`, `$b55` are the screens'). The screen passes them, as the stories do with the
> real blocks; while CommonUI_InsideLayout is mounted the shell's stand-ins unmount (`useCommonUiPresence`).

After:

> The block raises five events: `OnSVGScrolled`, `OnSearchInputScrolled`, `OnReadyEvent(ContentWrapperId)`,
> `OnSearchClick` and `OnPullToRefresh`. Each React prop has the prefix `onOn…`.
> 
> The block has six placeholders. Each React prop uses the same name, in camelCase:
> 
> - `Placeholder_Header_Title` → `placeholderHeaderTitle`.
> - `Placeholder_Header_Right` → `placeholderHeaderRight`.
> - `HeaderContent` → `headerContent`.
> - `Content` → `content`.
> - `Bottom` → `bottom`.
> - `Placeholder_CommonUI_Inside_Layout` → `placeholderCommonUIInsideLayout`.
> 
> The block renders these parts:
> 
> - LayoutRuntime_Top.
> - The header. It uses Columns_Two for the title, the search icon and the right placeholder.
>   The search icon shows when the search bar has scrolled away.
> - PullToRefresh (an input).
> - The content wrapper. It contains SVG_Background_Custom (`<id>-SVG`), the search bar (`<id>-SearchInput`, AddSearchBar)
>   and Content.
> - The footer (Bottom).
> - The CommonUI placeholder.
> 
> When the block is ready (OnReady), it does three steps:
> 
> 1. It writes `--current-svg-height`.
> 2. It starts Initialize_SvgScroll. The React app ports it in `lib/actions.ts`. It controls the header gradient, the SVG
>    path morph and the shadow variables on `.active-screen`.
> 3. It raises OnReadyEvent.
> 
> **CommonUI / BottomBarMenu:** the compiled layout has the `Placeholder_CommonUI_Inside_Layout` and `Bottom` placeholders.
> It has no CommonUI_InsideLayout and no BottomBarMenu of its own. A library layout cannot use UBTConnect blocks. The
> captured instances `$b12`, `$b13` and `$b55` belong to the screens. The screen passes these blocks into the
> placeholders, as the stories do with the real blocks. When CommonUI_InsideLayout mounts, the stand-ins of the shell
> unmount (`useCommonUiPresence`).

**Change 2**

Before:

> - OutSystems UI LayoutReady / LayoutDestroy, SetLang and SkipToContent (OutSystemsUI.js, not in the sources) are not
>   ported: the skip link only prevents the navigation. AddFavicon("favicon.png") is the same on every layout, so its
>   result (the `shortcut icon` link) is static in `index.html`.
> - Scrolled states (header gradient, search icon): compiled code only, tested.

After:

> - The React app does not port these OutSystems UI parts: LayoutReady, LayoutDestroy, SetLang and SkipToContent. They are in
>   OutSystemsUI.js, which is not in the sources. The skip link only prevents the navigation.
> - AddFavicon("favicon.png") is the same on every layout. Its result (the `shortcut icon` link) is static in `index.html`.
> - Scrolled states (header gradient, search icon): the source is the compiled code only. The block has a test.

