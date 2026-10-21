# UBTConnectLibrary.ConnectCorePatterns.ContextMenu

- Kind: shared; build screens using it: HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, MessageDetail, Notes, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary, UBTConnectLibrary.ConnectPatterns.ContextMenu_Item, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.PopupMenu (queue: UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary, UBTConnectLibrary.ConnectPatterns.ContextMenu_Item, UBTConnectLibrary.ConnectPatterns.PopupMenu)

## Inputs

| Input | Type |
|---|---|
| Position | Text |
| isEnabled | Boolean |
| usePrimaryButon | Boolean |

## Captured DOM variants (1 distinct, 118 instances)

### Variant 1: HomeFeed/default (×118)

```html
<div class="OSBlockWidget" data-block="ConnectCorePatterns.ContextMenu" id="b9-l1-89_0-b3-$b20">
  <div class="OSBlockWidget" data-block="ConnectPatterns.PopupMenu" id="b9-l1-89_0-b3-b20-$b1"><!-- nested block: 5 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.ContextMenu_Item.mvc$view", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_model, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_PopupMenu_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.ContextMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_PopupMenu_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_PopupMenu_mvc_view, {
                inputs: {
                    Position: model.variables.positionIn,
                    _positionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._positionInDataFetchStatus)
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
                    anchor: new PlaceholderContent(function() {
                        return [$if(model.variables.usePrimaryButonIn, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    isEnabled: model.variables.isEnabledIn,
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                    IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.moreVertical
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
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                inputs: {
                                    In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7,
                                    In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.moreVertical
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
                                    uuid: "2",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    }),
                    popupMenu: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("uJ064ICLQ0KyR30JkDN7Zg.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.backgroundAttr = function() {
                                            var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                            rec.backgroundColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0;
                                            return rec;
                                        }();
                                        rec.borderOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                            rec.radiusAttr = function() {
                                                var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.soft;
                                                return rec;
                                            }();
                                            return rec;
                                        }();
                                        rec.shadowIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shadow.extraSmall;
                                        return rec;
                                    }();
                                }),
                                ExtendedClasses: model.variables.mainContainerClassVar
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
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [$if(model.variables.in_ContextMenuOptionsIn.hasSendGiftAttr, false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedEvents: {
                                                onClick: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);
                                                        controller.event_SendGift$Action(controller.callContext(eventHandlerContext));
                                                    }, function() {
                                                        controller.popDebuggerContext(eventHandlerContext);
                                                    });
                                                    ;
                                                }
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view, {
                                            inputs: {
                                                In_Label: "Send a Gift",
                                                In_UBT_IconsId: UBTConnectLibraryModel.staticEntities.uBT_Icons.gift
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
                                                name: "MenuOption_SendGift",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }))];
                                    }, function() {
                                        return [];
                                    }), $if(model.variables.in_ContextMenuOptionsIn.hasMarkAsReadAttr, false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedEvents: {
                                                onClick: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);
                                                        controller.event_MarkAsRead$Action(controller.callContext(eventHandlerContext));
                                                    }, function() {
                                                        controller.popDebuggerContext(eventHandlerContext);
                                                    });
                                                    ;
                                                }
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view, {
                                            inputs: {
                                                In_Label: "Mark as Read",
                                                In_UBT_IconsId: UBTConnectLibraryModel.staticEntities.uBT_Icons.letter
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
                                                name: "MenuOption_MarkAsRead",
                                                alias: "6"
```
(… 208 more lines in `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc.js`)
