# UBTConnectLibrary.Layouts.SVG_Background_Custom

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js`
- Child blocks: OutSystemsUI_2_23.Utilities.InlineSVG (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_Path | Text |
| In_HeightPercentage | Decimal |
| In_CurvaturePercentage | Decimal |
| In_ExtendedClass | Text |

## Captured DOM variants (2 distinct, 108 instances)

### Variant 1: BookmarksByGroup/default (×107)

```html
<div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b3-b2-b1-b2-$b1">
  <div class="ubt-svg-container ubt-svg-container-full-height" data-container="">
    <div class="OSBlockWidget" data-block="Utilities.InlineSVG" id="b3-b2-b1-b2-b1-$b1"><!-- nested block: 7 nodes --></div>
  </div>
</div>
```

### Variant 2: Splash/default (×1)

```html
<div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b2-$b1">
  <div class="ubt-svg-container ubt-svg-container-full-height ubt-fall-expand" data-container="">
    <div class="OSBlockWidget" data-block="Utilities.InlineSVG" id="b2-b1-$b1"><!-- nested block: 7 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$model", "UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$SVGHeader_GetPath"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_model, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view) {
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
        View.displayName = "Layouts.SVG_Background_Custom";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "ubt-svg-container ubt-svg-container-full-height",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(((model.variables.pathVar) !== ("")), false, this, function() {
                return [React.createElement(OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, {
                    inputs: {
                        SVGCode: (("<svg viewBox=\"0 0 100 200\" preserveAspectRatio=\"none\">\r\n<defs>\r\n    <linearGradient id=\'primaryGradient\' x1=\'0%\' x2=\'100%\'  y1=\'0%\' y2=\'0%\'>\r\n        <stop offset=\'0%\' stop-color=\'var(--color-primary,#00819C)\'/>\r\n        <stop offset=\'100%\' stop-color=\'var(--color-cyan,#4EAEC2)\'/>\r\n    </linearGradient>\r\n</defs>\r\n<path d=\'" + model.variables.pathVar) + "\' fill=\'url(#primaryGradient)\'/>\r\n</svg>"),
                        ExtendedClass: model.getCachedValue(idService.getId("Bo6D_mNX70Of766v1u7BJw.ExtendedClass"), function() {
                                return UBTConnectLibraryController.default.formatClasses$Action("ubt-header-svg", model.variables.in_ExtendedClassIn, callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id);
                        }, function() {
                            return model.variables.in_ExtendedClassIn;
                        }),
                        _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus)
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        initialized$Action: function(inlineSVGIdIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                controller.onPathCalculated$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                            ;
                        }
                    },
                    _validationProps: {
                        validationService: validationService
                    },
                    _idProps: {
                        service: idService,
                        uuid: "1",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
