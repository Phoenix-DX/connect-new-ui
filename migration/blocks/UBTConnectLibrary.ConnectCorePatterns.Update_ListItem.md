# UBTConnectLibrary.ConnectCorePatterns.Update_ListItem

- Kind: shared; build screens using it: HomeFeed, MessageDetail, Updates_SingleList
- Compiled source: `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.Columns_Three, UBTConnectLibrary.BasePatterns.Columns_Two, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectCorePatterns.ContextMenu, UBTConnectLibrary.ConnectPatterns.AvatarDouble, UBTConnectLibrary.ConnectPatterns.AvatarImage, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.IconText, UBTConnectLibrary.ConnectPatterns.TagContent (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_Name | Text |
| IgnoreReadBackground | Boolean |
| In_HasShare | Boolean |

## Captured DOM variants (1 distinct, 117 instances)

### Variant 1: HomeFeed/default (×117)

```html
<div class="OSBlockWidget" data-block="ConnectCorePatterns.Update_ListItem" id="b9-l1-89_0-$b3">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b9-l1-89_0-b3-$b1"><!-- nested block: 57 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$view", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.TagContent.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$view", "UBTConnectLibrary.controller$GetBackgroundColor_IsRead", "UBTConnectLibrary.controller$Get_BackgroundColor_Avatar_UpdateItem", "UBTConnectLibrary.controller$Get_FontColor_Avatar_UpdateItem", "UBTConnectLibrary.model$TextGenderIdentifierRecordList", "UBTConnectLibrary.controller$Get_FontColor_Tag_UpdateItem", "UBTConnectLibrary.controller$Get_BackgroundColor_Tag_UpdateItem", "UBTConnectLibrary.model$WeekdayLabelTypeRec", "UBTConnectLibrary.controller$FormatConnectDate_WithYear", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$TextBooleanRecord", "UBTConnectLibrary.model$TextBoolean1Record"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_model, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.Update_ListItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    ExtendedClasses: model.getCachedValue(idService.getId("k2aVxG0AjEiBTIPbRKrdPQ.ExtendedClasses"), function() {
                        return (model.variables.mainContainerClassVar + ((model.variables.in_IsReadIn) ? ("") : (((" " + model.variables.mainContainerClassVar) + "--unread"))));
                    }, function() {
                        return model.variables.mainContainerClassVar;
                    }, function() {
                        return model.variables.in_IsReadIn;
                    }),
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsReadInDataFetchStatus),
                    Options: model.getCachedValue(idService.getId("k2aVxG0AjEiBTIPbRKrdPQ.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                    return UBTConnectLibraryController.default.getBackgroundColor_IsRead$Action((model.variables.in_IsReadIn || model.variables.ignoreReadBackgroundIn), callContext).out_BackgroundColorOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id);
                                return rec;
                            }();
                            rec.paddingSizeAttr = model.variables.paddingSizeIdIn;
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3;
                                rec.sizeAttr = function() {
                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                    rec.bottomSizeIdAttr = ((model.variables.hasBorderBottomIn) ? (UBTConnectLibraryModel.staticEntities.uBT_Size.small) : (OS.BuiltinFunctions.nullTextIdentifier()));
                                    return rec;
                                }();
                                return rec;
                            }();
                            return rec;
                        }();
                    }, function() {
                        return model.variables.in_IsReadIn;
                    }, function() {
                        return model.variables.ignoreReadBackgroundIn;
                    }, function() {
                        return model.variables.paddingSizeIdIn;
                    }, function() {
                        return model.variables.hasBorderBottomIn;
                    }),
                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsReadInDataFetchStatus, model.variables._ignoreReadBackgroundInDataFetchStatus, model.variables._paddingSizeIdInDataFetchStatus, model.variables._hasBorderBottomInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    clicked$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.onClick$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [$if(model.variables.showImageIn, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
                                inputs: {
                                    ColumnOptions: model.getCachedValue(idService.getId("j5bnFuddiEODXI710GA5QQ.ColumnOptions"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                            rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
                                            rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
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
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "Update_Visual"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $if(((model.variables.in_Type_UpdateFeedItemIn === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.birth) && (model.variables.in_InitialsListIn.length > 1)), false, this, function() {
                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_view, {
                                                inputs: {
                                                    In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.large_65,
                                                    In_FirstAvatarImage: model.getCachedValue(idService.getId("xh2TpJb6p02vVW__iwYLIA.In_FirstAvatarImage"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.AvatarImageRec();
                                                            rec.fallbackOptionsAttr = function() {
                                                                var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
                                                                rec.initialsAttr = model.variables.in_InitialsListIn.getItem(0).initialsAttr;
                                                                    return UBTConnectLibraryController.default.get_BackgroundColor_Avatar_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn.getItem(0).genderAttr, callContext).out_BackgroundColorOut;
                                                                }, OS.DataTypes.DataTypes.Text, callContext.id);
                                                                    return UBTConnectLibraryController.default.get_FontColor_Avatar_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn.getItem(0).genderAttr, callContext).out_FontColorOut;
                                                                }, OS.DataTypes.DataTypes.Text, callContext.id);
                                                                return rec;
                                                            }();
                                                            return rec;
                                                        }();
                                                    }, function() {
                                                        return model.variables.in_InitialsListIn.getItem(0).initialsAttr;
                                                    }, function() {
                                                        return model.variables.in_Type_UpdateFeedItemIn;
                                                    }, function() {
                                                        return model.variables.in_InitialsListIn.getItem(0).genderAttr;
                                                    }),
                                                    _in_FirstAvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_InitialsListInDataFetchStatus, model.variables._in_Type_UpdateFeedItemInDataFetchStatus),
                                                    In_SecondAvatarImage: model.getCachedValue(idService.getId("xh2TpJb6p02vVW__iwYLIA.In_SecondAvatarImage"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.AvatarImageRec();
                                                            rec.fallbackOptionsAttr = function() {
                                                                var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
                                                                rec.initialsAttr = model.variables.in_InitialsListIn.getItem(1).initialsAttr;
                                                                    return UBTConnectLibraryController.default.get_BackgroundColor_Avatar_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn.getItem(1).genderAttr, callContext).out_BackgroundColorOut;
                                                                }, OS.DataTypes.DataTypes.Text, callContext.id);
                                                                    return UBTConnectLibraryController.default.get_FontColor_Avatar_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn.getItem(1).genderAttr, callContext).out_FontColorOut;
                                                                }, OS.DataTypes.DataTypes.Text, callContext.id);
                                                                return rec;
                                                            }();
                                                            return rec;
                                                        }();
                                                    }, function() {
                                                        return model.variables.in_InitialsListIn.getItem(1).initialsAttr;
                                                    }, function() {
                                                        return model.variables.in_Type_UpdateFeedItemIn;
                                                    }, function() {
                                                        return model.variables.in_InitialsListIn.getItem(1).genderAttr;
                                                    }),
                                                    _in_SecondAvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_InitialsListInDataFetchStatus, model.variables._in_Type_UpdateFeedItemInDataFetchStatus)
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
                                        }, function() {
                                            return [$if(((model.variables.in_AvatarImageURLIn) !== ("")), false, this, function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, {
                                                    inputs: {
                                                        In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.large_65,
                                                        In_AvatarImage: model.getCachedValue(idService.getId("+SAlhVSyc0ifShj7g9Ejow.In_AvatarImage"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.AvatarImageRec();
                                                                rec.uRLAttr = model.variables.in_AvatarImageURLIn;
                                                                return rec;
                                                            }();
                                                        }, function() {
                                                            return model.variables.in_AvatarImageURLIn;
                                                        }),
                                                        _in_AvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageURLInDataFetchStatus)
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        }
                                                    },
                                                    _validationProps: {
                                                        validationService: validationService
```
(… 743 more lines in `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc.js`)
