# UBTConnect.App_Common.BottomBarMenu

- Kind: shared; build screens using it: BookmarksByGroup, BrowseCountries, BrowseDirectory, CountryDetails, CountryList, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Menu, MessageDetail, MessageList, MyBookmarks, Notes, Notifications, OneSchoolGlobalDetails, Search, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect.App_Common.BottomBarMenu.mvc.js`
- Child blocks: OutSystemsUI_2_23.Navigation.BottomBarItem, UBTConnect.App_Common.BottomBarContent, UBTConnect.App_Common_Blocks.App_IconBadge, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.Icon (queue: OutSystemsUI_2_23.Navigation.BottomBarItem, UBTConnect.App_Common.BottomBarContent, UBTConnect.App_Common_Blocks.App_IconBadge)

## Inputs

| Input | Type |
|---|---|
| ActiveItem | Text |
| useMapsItems | Boolean |
| isHouseholder | Boolean |
| isRootPage | Boolean |

## Captured DOM variants (1 distinct, 57 instances)

### Variant 1: BookmarksByGroup/default (×57)

```html
<div class="OSBlockWidget" data-block="App_Common.BottomBarMenu" id="$b2">
  <div class="OSBlockWidget" data-block="App_Common.BottomBarContent" id="b2-$b1"><!-- nested block: 74 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_Common.BottomBarMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.BottomBarContent.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Navigation.BottomBarItem.mvc$view", "UBTConnect.App_Common_Blocks.App_IconBadge.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect_Utils.model$BottomBar_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$BottomBar_ItemList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.controller$BottomBar_GetList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$SetBottomBarActiveElement", "UBTConnect.controller$Directory_Updates_RefreshBottomBarCount", "UBTConnectLibrary.controller$BottomBarSlider_ForceRefresh", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect_Utils.controller$GetHasNewBookmarks", "UBTConnect.controller$ScrollTop", "UBTConnect_Utils.controller$GetHasC1DirectoryView"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTConnect_UtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibraryController, React, OSView, UBTConnect_App_Common_BottomBarMenu_mvc_model, UBTConnect_App_Common_BottomBarMenu_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_BottomBarContent_mvc_view, OSWidgets, OutSystemsUI_2_23_Navigation_BottomBarItem_mvc_view, UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "App_Common.BottomBarMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_BottomBarContent_mvc_view, OutSystemsUI_2_23_Navigation_BottomBarItem_mvc_view, UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Common_BottomBarMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Common_BottomBarMenu_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_Common_BottomBarContent_mvc_view, {
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
                placeholders: {
                    placeholder_BottomBarItems: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.List, {
                            animateItems: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: /*Custom*/ 1,
                            source: model.variables.localBottomBar_ItemsVar,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.Link, {
                                        enabled: true,
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);
                                                    return controller.event_BottomBar_Clicked$Action(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        },
                                        style: model.getCachedValue(idService.getId("VuBIpN20pUWN9a+zC6E5CA.Style"), function() {
                                            return (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? ("active") : (""));
                                        }, function() {
                                            return model.variables.activeItemIn;
                                        }, function() {
                                            return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                        }),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus),
                                        _dependencies: [asPrimitiveValue(model.variables._activeItemInDataFetchStatus), asPrimitiveValue(model.variables.activeItemIn), asPrimitiveValue(UBTConnectClientVariables.getDirectory_Updates_UnreadCount()), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).labelAttr), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconAttr), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconActiveAttr), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)]
                                    }, React.createElement(OutSystemsUI_2_23_Navigation_BottomBarItem_mvc_view, {
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
                                            uuid: "3",
                                            alias: "2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            icon: new PlaceholderContent(function() {
                                                return [$if((model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr === UBTConnectModel.staticEntities.connect_BottomBar_Items.updates), false, this, function() {
                                                    return [React.createElement(UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, {
                                                        inputs: {
                                                            isLoading: false,
                                                            BadgeNumber: OS.BuiltinFunctions.integerToLongInteger(UBTConnectClientVariables.getDirectory_Updates_UnreadCount()),
                                                            MaxNotifications: 9,
                                                            IconId: model.getCachedValue(idService.getId("leGl_MnNWEe8BWf1J8ampg.IconId"), function() {
                                                                return (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? (model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconActiveAttr) : (model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconAttr));
                                                            }, function() {
                                                                return model.variables.activeItemIn;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconActiveAttr;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconAttr;
                                                            }),
                                                            _iconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus),
                                                            IconColor: model.getCachedValue(idService.getId("leGl_MnNWEe8BWf1J8ampg.IconColor"), function() {
                                                                return (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? (UBTConnectModel.staticEntities.uBT_Color.primary) : (UBTConnectModel.staticEntities.uBT_Color.neutral6));
                                                            }, function() {
                                                                return model.variables.activeItemIn;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                                            }),
                                                            _iconColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus)
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            onClick$Action: function() {
                                                                return Promise.resolve().then(function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);
                                                                        return controller.event_BottomBar_Clicked$Action(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
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
                                                            alias: "3"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }, function() {
                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                        inputs: {
                                                            In_IconId: model.getCachedValue(idService.getId("omi4vxQA7kSfxkBlUzaebA.In_IconId"), function() {
                                                                return (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? (model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconActiveAttr) : (model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconAttr));
                                                            }, function() {
                                                                return model.variables.activeItemIn;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconActiveAttr;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconAttr;
                                                            }),
                                                            _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus),
                                                            In_ColorId: model.getCachedValue(idService.getId("omi4vxQA7kSfxkBlUzaebA.In_ColorId"), function() {
                                                                return (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? (UBTConnectModel.staticEntities.uBT_Color.primary) : (UBTConnectModel.staticEntities.uBT_Color.neutral6));
                                                            }, function() {
                                                                return model.variables.activeItemIn;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                                            }),
                                                            _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus),
                                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24
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
                                                            uuid: "5",
                                                            alias: "4"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                })];
                                            }),
                                            text: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                    inputs: {
                                                        In_TextOptions: model.getCachedValue(idService.getId("nJ8MhZxFNkm6bypJtY5DZA.In_TextOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                rec.colorAttr = (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? (UBTConnectModel.staticEntities.uBT_Color.primary) : (UBTConnectModel.staticEntities.uBT_Color.neutral6));
                                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
                                                                return rec;
                                                            }();
                                                        }, function() {
                                                            return model.variables.activeItemIn;
                                                        }, function() {
                                                            return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                                        }),
                                                        _in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus),
                                                        In_Text: model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).labelAttr
```
(… 34 more lines in `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect.App_Common.BottomBarMenu.mvc.js`)
