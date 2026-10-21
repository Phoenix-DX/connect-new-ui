# UBTConnect.App_Common_Blocks.App_IconBadge

- Kind: shared; build screens using it: BookmarksByGroup, BrowseCountries, BrowseDirectory, CountryDetails, CountryList, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Menu, MessageDetail, MessageList, MyBookmarks, Notes, Notifications, OneSchoolGlobalDetails, Search, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect.App_Common_Blocks.App_IconBadge.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.SkeletonSection, UBTConnectLibrary.OutSystemsUIOverrides.IconBadge (queue: UBTConnectLibrary.OutSystemsUIOverrides.IconBadge)

## Inputs

| Input | Type |
|---|---|
| BadgeNumber | LongInteger |
| MaxNotifications | Integer |
| IconId | Text |
| IconColor | Text |
| isLoading | Boolean |

## Captured DOM variants (1 distinct, 69 instances)

### Variant 1: BookmarksByGroup/default (×69)

```html
<div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b2-l1-49_2-$b3">
  <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b2-l1-49_2-b3-Skeleton"><!-- nested block: 11 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_Common_Blocks.App_IconBadge.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common_Blocks.App_IconBadge.mvc$model", "UBTConnect.App_Common_Blocks.App_IconBadge.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_App_Common_Blocks_App_IconBadge_mvc_model, UBTConnect_App_Common_Blocks_App_IconBadge_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "App_Common_Blocks.App_IconBadge";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_App_IconBadge_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_App_IconBadge_mvc_controller;
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
                    In_IsLoading: (model.variables.isLoadingIn || model.variables.badgeNumberIn.equals(OS.BuiltinFunctions.integerToLongInteger(-1))),
                    _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus, model.variables._badgeNumberInDataFetchStatus)
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
                    name: "Skeleton",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_LoadingSection: new PlaceholderContent(function() {
                        return [$if(!(model.variables.badgeNumberIn.equals(OS.BuiltinFunctions.integerToLongInteger(0))), false, this, function() {
                            return [React.createElement(OSWidgets.Link, {
                                enabled: true,
                                onClick: function() {
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
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_view, {
                                inputs: {
                                    Number: model.variables.badgeNumberIn,
                                    _numberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._badgeNumberInDataFetchStatus),
                                    MaxNumber: model.variables.maxNotificationsIn,
                                    _maxNumberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._maxNotificationsInDataFetchStatus),
                                    Color: UBTConnectModel.staticEntities.uBT_Color.red
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
                                    name: "IconBadge",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                            inputs: {
                                                In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                                In_ColorId: model.variables.iconColorIn,
                                                _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconColorInDataFetchStatus),
                                                In_IconId: model.variables.iconIdIn,
                                                _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconIdInDataFetchStatus),
                                                In_ExtendedClasses: "ignore-loading"
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
                                                uuid: "3",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.iconIdIn), asPrimitiveValue(model.variables._iconIdInDataFetchStatus), asPrimitiveValue(model.variables._iconColorInDataFetchStatus), asPrimitiveValue(model.variables.iconColorIn)]
                            }))];
                        }, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                inputs: {
                                    In_IconId: model.variables.iconIdIn,
                                    _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconIdInDataFetchStatus),
                                    In_ColorId: model.variables.iconColorIn,
                                    _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconColorInDataFetchStatus),
                                    In_ExtendedClasses: "ignore-loading",
                                    In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24
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
                                    uuid: "4",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.iconIdIn), asPrimitiveValue(model.variables.iconColorIn), asPrimitiveValue(model.variables.maxNotificationsIn), asPrimitiveValue(model.variables._iconIdInDataFetchStatus), asPrimitiveValue(model.variables._iconColorInDataFetchStatus), asPrimitiveValue(model.variables._maxNotificationsInDataFetchStatus), asPrimitiveValue(model.variables._badgeNumberInDataFetchStatus), asPrimitiveValue(model.variables.badgeNumberIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
