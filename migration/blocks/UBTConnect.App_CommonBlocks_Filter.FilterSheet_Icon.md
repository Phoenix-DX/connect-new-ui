# UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon

- Kind: shared; build screens using it: Search, Updates_SingleList
- Compiled source: `migration/screens/Search/analysis/sources/pretty/UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.SkeletonSection (queue: -)

## Inputs

| Input | Type |
|---|---|
| HaveFiltersApplied | Boolean |
| BottomSheetId | Text |
| isLoaded | Boolean |
| ShowSubscriptionOnClick | Boolean |

## Captured DOM variants (1 distinct, 6 instances)

### Variant 1: Search/default (×6)

```html
<div class="OSBlockWidget" data-block="App_CommonBlocks_Filter.FilterSheet_Icon" id="b1-$b3">
  <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b1-b3-$b1"><!-- nested block: 3 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnectController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController, React, OSView, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_model, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "App_CommonBlocks_Filter.FilterSheet_Icon";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                inputs: {
                    In_IsLoading: !(model.variables.isLoadedIn),
                    _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadedInDataFetchStatus)
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_LoadingSection: new PlaceholderContent(function() {
                        return [$if(model.variables.haveFiltersAppliedIn, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                inputs: {
                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.errorFill,
                                    In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_14,
                                    In_ExtendedClasses: "header-filter-enabled",
                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.red
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
                                    uuid: "1",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                            inputs: {
                                In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.tune,
                                In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                click$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            return controller.iconClick$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "2",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._haveFiltersAppliedInDataFetchStatus), asPrimitiveValue(model.variables.haveFiltersAppliedIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
