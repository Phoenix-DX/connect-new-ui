# UBTConnectLibrary.Layouts.Layout_HomePage

- Kind: shared; build screens using it: HomeFeed, Profile
- Compiled source: `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnectLibrary.Layouts.Layout_HomePage.mvc.js`
- Child blocks: NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top, OutSystemsUI_2_23.Private.PullToRefresh, UBTConnectLibrary.BasePatterns.Columns_Two, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.Layouts.SVG_Background_Custom, UBTConnectLibrary.Layouts.SubLayout_HomePageSearch (queue: UBTConnectLibrary.Layouts.SubLayout_HomePageSearch)

## Inputs

| Input | Type |
|---|---|
| UsePullToRefresh | Boolean |
| ExtendedClass | Text |
| EnableAccessibilityFeatures | Boolean |
| ContentBackgroundColor | Text |
| AddSearchBar | Boolean |
| SVGHeight | Text |

## Captured DOM variants (2 distinct, 6 instances)

### Variant 1: HomeFeed/default (×3)

```html
<div class="OSBlockWidget" data-block="Layouts.Layout_HomePage" id="$b1">
  <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"><!-- nested block: 0 nodes --></div>
  <div class="layout layout-side layout-native ios-bounce ubt-layout-home" data-container="" id="b1-LayoutWrapper_Home" style="--current-svg-height: 260px;">
    <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link="" data-original-href="/UBTConnect/HomeFeed" data-showskipcontent="false">
      Skip to Content (Press Enter)
    </a>
    <div class="main" data-container="">
      <header class="header" data-advancedhtml="" id="b1-Header" role="banner">
        <div class="header-top" data-container="">
          <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container="">
            <div class="ubt-layout-home__title" data-container="">
              <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b1-$b2"><!-- nested block: 28 nodes --></div>
            </div>
          </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent"></div>
      </header>
      <div class="content background-neutral-4" data-container="" id="b1-ContentWrapper">
        <div class="main-content ThemeGrid_Container" data-container="" id="b1-MainContentWrapper" role="main">
          <div class="content-middle" data-container="">
            <div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b1-SVG"><!-- nested block: 9 nodes --></div>
            <div class="OSBlockWidget" data-block="Layouts.SubLayout_HomePageSearch" id="b1-SearchInput"><!-- nested block: 9 nodes --></div>
            <div class="ubt-zindex-2" id="b1-Content">
              <div class="OSBlockWidget" data-block="Home.Section_FeedWrapper" id="Section_Services"><!-- nested block: 161 nodes --></div>
              <div class="OSBlockWidget" data-block="Home.Section_FeedWrapper" id="Section_CommunityPopulation"><!-- nested block: 21 nodes --></div>
              <div class="OSBlockWidget" data-block="Home.Section_FeedWrapper" id="Section_Updates"><!-- nested block: 227 nodes --></div>
              <div class="OSBlockWidget" data-block="Home.Feed_Embeded" id="$b10"><!-- nested block: 5 nodes --></div>
              <div class="OSBlockWidget" data-block="App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation" id="$b11"><!-- nested block: 4 nodes --></div>
            </div>
          </div>
        </div>
      </div>
      <footer class="content-bottom" data-advancedhtml="" role="contentinfo">
        <div class="footer ph" id="b1-Bottom">
          <div class="OSBlockWidget" data-block="App_Common.BottomBarMenu" id="$b12"><!-- nested block: 75 nodes --></div>
        </div>
      </footer>
    </div>
    <div id="b1-Placeholder_CommonUI_Inside_Layout">
      <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b13"><!-- nested block: 38 nodes --></div>
    </div>
  </div>
</div>
```

### Variant 2: Profile/default (×3)

```html
<div class="OSBlockWidget" data-block="Layouts.Layout_HomePage" id="$b1">
  <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-$b1"><!-- nested block: 0 nodes --></div>
  <div class="layout layout-side layout-native ios-bounce ubt-layout-home ubt-profile-screen" data-container="" id="b1-LayoutWrapper_Home" style="--current-svg-height: calc(200px - var(--header-size));">
    <a aria-label="Skip to Content (Press Enter)" class="skip-nav" data-link="" data-original-href="/UBTConnect/Profile" data-showskipcontent="false">
      Skip to Content (Press Enter)
    </a>
    <div class="main" data-container="">
      <header class="header" data-advancedhtml="" id="b1-Header" role="banner">
        <div class="header-top" data-container="">
          <div class="header-content display-flex flex-direction-column justify-content-flex-start" data-container="">
            <div class="ubt-layout-home__title" data-container="">
              <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b1-$b2"><!-- nested block: 27 nodes --></div>
            </div>
          </div>
        </div>
        <div class="header-top-content ph" id="b1-HeaderContent"></div>
      </header>
      <div class="content background-neutral-0 ubt-fixed-footer--content" data-container="" id="b1-ContentWrapper" style="--ubt-fixed-footer---footer-height: calc(2 * var(--space-base) + var(--ubt-button-height-m));">
        <div class="main-content ThemeGrid_Container" data-container="" id="b1-MainContentWrapper" role="main">
          <div class="content-middle" data-container="">
            <div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b1-SVG"><!-- nested block: 9 nodes --></div>
            <div class="ubt-zindex-2" id="b1-Content">
              <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="Content"><!-- nested block: 183 nodes --></div>
              <div class="OSBlockWidget" data-block="ConnectPatterns.FixedFooter" id="$b49"><!-- nested block: 57 nodes --></div>
            </div>
          </div>
        </div>
      </div>
      <footer class="content-bottom" data-advancedhtml="" role="contentinfo">
        <div class="footer ph" id="b1-Bottom"></div>
      </footer>
    </div>
    <div id="b1-Placeholder_CommonUI_Inside_Layout">
      <div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b55"><!-- nested block: 38 nodes --></div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.Layouts.Layout_HomePage.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.Layouts.Layout_HomePage.mvc$model", "UBTConnectLibrary.Layouts.Layout_HomePage.mvc$controller", "UBTConnectLibrary.clientVariables", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$view", "UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$view", "UBTConnectLibrary.Layouts.SubLayout_HomePageSearch.mvc$view", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.controller$Initialize_SvgScroll", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$SkipToContent", "OutSystemsUI_2_23.controller$LayoutDestroy"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnectLibrary_Layouts_Layout_HomePage_mvc_model, UBTConnectLibrary_Layouts_Layout_HomePage_mvc_controller, UBTConnectLibraryClientVariables, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_view, UBTConnectLibrary_Layouts_SubLayout_HomePageSearch_mvc_view) {
    var OS = OutSystems.Internal;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;
    var View = (function(_super) {
        __extends(View, _super);
        function View() {
            var thisIsInstanceOfSuper = this instanceof _super;
            if (thisIsInstanceOfSuper == false) {
                return;
            }
            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "Layouts.Layout_HomePage";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js", "scripts/UBTConnectLibrary.ScrollAnimations.js"];
        };
        View.getBlocks = function() {
            return [NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_view, UBTConnectLibrary_Layouts_SubLayout_HomePageSearch_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_Layout_HomePage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_Layout_HomePage_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: model.getCachedValue(idService.getId("LayoutWrapper_Home.Style"), function() {
                    return (("layout layout-side layout-native ios-bounce ubt-layout-home" + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn)))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features")));
                }, function() {
                    return model.variables.extendedClassIn;
                }, function() {
                    return model.variables.enableAccessibilityFeaturesIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "LayoutWrapper_Home"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus)
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                extendedProperties: {
                    "aria-label": "Skip to Content (Press Enter)",
                    "data-showskipcontent": model.getCachedValue(idService.getId("OZcMFaRXeUmL1dlXu_8QxA.data-showskipcontent"), function() {
                        return ((model.variables.enableAccessibilityFeaturesIn) ? ("true") : ("false"));
                    }, function() {
                        return model.variables.enableAccessibilityFeaturesIn;
                    })
                },
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);
                        controller.skipToContentOnClick$Action(controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });
                    ;
                },
                style: "skip-nav",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Skip to Content (Press Enter)"), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "main",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    role: "banner",
                    className: model.getCachedValue(idService.getId("Header.class"), function() {
                            return UBTConnectLibraryController.default.getClass_BackgroundColor$Action(UBTConnectLibraryModel.staticEntities.uBT_Color.primaryGradientRadial, callContext).out_ColorClassOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id))) : ("")));
                    }, function() {
                        return model.variables.isSVGScrolledVar;
                    })
                },
                tag: "header",
                _idProps: {
                    service: idService,
                    name: "Header"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "header-top",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "header-content display-flex flex-direction-column justify-content-flex-start",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "ubt-layout-home__title",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                inputs: {
                    ColumnOptions: model.getCachedValue(idService.getId("4Ocy4iTZVU+aADnSOqcaTA.ColumnOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                            rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
                            rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
                            rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
                            return rec;
                        }();
                    })
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "8",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    left: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.AdvancedHtml, {
                            extendedProperties: {
                                className: "header-title"
                            },
                            tag: "h2",
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_Header_Title,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            _idProps: {
                                service: idService,
                                name: "Placeholder_Header_Title"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    }),
                    right: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "ubt-layout-home__header--right",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if(model.variables.addSearchBarIn, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                inputs: {
                                    In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.inherit,
                                    In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.search,
                                    In_Visible: model.variables.isSearchInputScrolledVar,
                                    In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.base_24
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    click$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
```
(… 207 more lines in `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnectLibrary.Layouts.Layout_HomePage.mvc.js`)
