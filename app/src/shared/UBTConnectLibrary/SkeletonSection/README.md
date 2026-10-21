# SkeletonSection

OutSystems: `UBTConnectLibrary.ConnectPatterns.SkeletonSection` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.SkeletonSection.md`

| Input                   | Type    | Prop                     | Default |
| ----------------------- | ------- | ------------------------ | ------- |
| In_IsLoading            | Boolean | `inIsLoading`            | `false` |
| In_ExtendedClass        | Text    | `inExtendedClass`        | `''`    |
| In_IsActiveWhileLoading | Boolean | `inIsActiveWhileLoading` | `false` |

Events: none. Placeholder: `Placeholder_LoadingSection` → `children`.
Class: `In_ExtendedClass + " " + (In_IsLoading ? "ubt-skeleton-section" : "")`, kept verbatim.

## Captured variants (69 distinct; 4 tested)

| Capture | Source                                      |
| ------- | ------------------------------------------- |
| v1      | BookmarksByGroup/default (link + IconBadge) |
| v2      | BrowseCountries/default (list, not loading) |
| v3      | BrowseCountries/loading (loading)           |
| v4      | BrowseDirectory/default                     |

## Not settled

- `inert` while loading: OnReady / OnParametersChanged call `JSUtils_Element_Operations_ToggleAttribute(In_IsLoading,
"inert", …)` unless active while loading, and remove it after render otherwise. That action's JS
  (UBTJavaScriptUtils) is not in the captured sources, and the captures do not record `inert` (they drop many attributes,
  e.g. `preserveAspectRatio`). Built from the call as written: `inert` on while loading and not active while loading.
