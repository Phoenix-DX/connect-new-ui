# UBTConnectLibrary.ConnectPatterns.BottomSheet

- Kind: shared; build screens using it: BookmarksByGroup, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Notes, Notifications, OneSchoolGlobalDetails, Photobook, Profile, Search, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/screens/CountryDetails/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js`
- Child blocks: OutSystemsUI_2_23.Interaction.BottomSheet, UBTConnectLibrary.BasePatterns.Columns_Three, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.Icon (queue: OutSystemsUI_2_23.Interaction.BottomSheet)

## Inputs

| Input | Type |
|---|---|
| FooterHeight | Text |
| ExtendedClasses | Text |
| isTransparentOverlay | Boolean |
| CloseOnClickOutsite | Boolean |
| ShowBackButton | Boolean |
| IsNotInertWhenClosed | Boolean |
| IsHideContentWhenClosed | Boolean |

## Captured DOM variants (1 distinct, 25 instances)

### Variant 1: CountryDetails/default (×25)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.BottomSheet" id="b28-$b1">
  <div class="OSBlockWidget" data-block="Interaction.BottomSheet" id="b28-b1-BottomSheet_Internal" style="--bottom-sheet--footer-height: 72px;"><!-- nested block: 644 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystemsUI_2_23.Interaction.BottomSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.controller$GetSpacingOptions", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "OutSystemsUI_2_23.controller$BottomSheetOpen"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_model, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller, UBTConnectLibraryClientVariables, OutSystemsUI_2_23_Interaction_BottomSheet_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectPatterns.BottomSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Interaction_BottomSheet_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_2_23_Interaction_BottomSheet_mvc_view, {
                inputs: {
                    Shape: UBTConnectLibraryModel.staticEntities.shape.rounded,
                    ExtendedClass: model.getCachedValue(idService.getId("BottomSheet_Internal.ExtendedClass"), function() {
                                            return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, ((model.variables.showHandlerPreviewIn) ? ((model.variables.mainContainerClassVar + "--handler-preview")) : ("")), callContext).classesOutOut;
                                            return UBTConnectLibraryController.default.getClass_BackgroundColor$Action(model.variables.content_BackgroundColorIdIn, callContext).out_ColorClassOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                                        return UBTConnectLibraryController.default.getSpacingOptions$Action("padding", model.variables.content_PaddingIn, callContext).classesOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id)) !== (""))) ? ("custom-padding") : ("")), callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.extendedClassesIn, callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), ((model.variables.isTransparentOverlayIn) ? ((model.variables.mainContainerClassVar + "--transparent-overlay")) : ("")), callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                    }, function() {
                        return model.variables.mainContainerClassVar;
                    }, function() {
                        return model.variables.showHandlerPreviewIn;
                    }, function() {
                        return model.variables.content_BackgroundColorIdIn;
                    }, function() {
                        return model.variables.content_PaddingIn;
                    }, function() {
                        return model.variables.extendedClassesIn;
                    }, function() {
                        return model.variables.isTransparentOverlayIn;
                    }),
                    _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showHandlerPreviewInDataFetchStatus, model.variables._content_BackgroundColorIdInDataFetchStatus, model.variables._content_PaddingInDataFetchStatus, model.variables._extendedClassesInDataFetchStatus, model.variables._isTransparentOverlayInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onToggle$Action: function(bottomSheetIdIn, isOpenIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.bottomSheet_InternalOnToggle$Action(isOpenIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    initialized$Action: function(bottomSheetIdIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.bottomSheet_InternalInitialized$Action(bottomSheetIdIn, controller.callContext(eventHandlerContext));
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
                    name: "BottomSheet_Internal",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    topBar: new PlaceholderContent(function() {
                        return [$if(model.variables.showHeaderIn, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
                                inputs: {
                                    ColumnOptions: model.getCachedValue(idService.getId("Cvr8V6QrxkG+89VKNTnamQ.ColumnOptions"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                            rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
                                            rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.none;
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
                                    uuid: "1",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    left: new PlaceholderContent(function() {
                                        return [$if(model.variables.showBackButtonIn, false, this, function() {
                                            return [React.createElement(OSWidgets.Link, {
                                                enabled: true,
                                                onClick: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);
                                                        controller.onBack$Action(controller.callContext(eventHandlerContext));
                                                    }, function() {
                                                        controller.popDebuggerContext(eventHandlerContext);
                                                    });
                                                    ;
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "2"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                inputs: {
                                                    In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.arrowLeftAlt,
                                                    In_ColorId: model.getCachedValue(idService.getId("lbNeTCM1d0GZty_mcXKnqg.In_ColorId"), function() {
                                                        return ((model.variables.showBackButtonIn) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral9) : (UBTConnectLibraryModel.staticEntities.uBT_Color.transparent));
                                                    }, function() {
                                                        return model.variables.showBackButtonIn;
                                                    }),
                                                    _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showBackButtonInDataFetchStatus),
                                                    In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.medium_20
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
                                            }))];
                                        }, function() {
                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                inputs: {
                                                    In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.transparent,
                                                    In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.medium_20,
                                                    In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.close
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
                                                    uuid: "4",
                                                    alias: "4"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            })];
                                        })];
                                    }),
                                    middle: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                            inputs: {
                                                In_TextOptions: model.getCachedValue(idService.getId("0Wap0xqXiU2hy++M+DSnlQ.In_TextOptions"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                        rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral10;
                                                        rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.small;
                                                        rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
                                                        return rec;
                                                    }();
                                                }),
                                                In_Text: model.variables.titleIn,
                                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
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
                                                alias: "5"
                                            },
```
(… 120 more lines in `migration/screens/CountryDetails/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc.js`)
