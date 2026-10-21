# UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem

- Kind: shared; build screens using it: BrowseCountries, BrowseDirectory, Locality_Details
- Compiled source: `migration/screens/BrowseCountries/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.Columns_Two, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.AvatarImage, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.IconText (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_ExtendedClasses | Text |
| In_HighlightWords | Text |
| In_ShowSubtitle | Boolean |
| In_HasActionsMenu | Boolean |
| In_HideBorder | Boolean |

## Captured DOM variants (1 distinct, 60 instances)

### Variant 1: BrowseCountries/default (×60)

```html
<div class="OSBlockWidget" data-block="ConnectCorePatterns.Statistics_ListItem" id="b2-l1-87_0-$b7">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b2-l1-87_0-b7-$b1"><!-- nested block: 77 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_model, UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.Statistics_ListItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("+kXEKHNWPE2_4g7MLKp5jg.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.verticalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
                                rec.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3;
                                rec.sizeAttr = function() {
                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                    rec.generalSizeIdAttr = ((model.variables.in_HideBorderIn) ? (UBTConnectLibraryModel.staticEntities.uBT_Size.none) : (UBTConnectLibraryModel.staticEntities.uBT_Size.small));
                                    return rec;
                                }();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.large;
                                    return rec;
                                }();
                                return rec;
                            }();
                            return rec;
                        }();
                    }, function() {
                        return model.variables.in_HideBorderIn;
                    }),
                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HideBorderInDataFetchStatus),
                    ExtendedClasses: model.getCachedValue(idService.getId("+kXEKHNWPE2_4g7MLKp5jg.ExtendedClasses"), function() {
                            return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.in_ExtendedClassesIn, callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                    }, function() {
                        return model.variables.mainContainerClassVar;
                    }, function() {
                        return model.variables.in_ExtendedClassesIn;
                    }),
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus)
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);
                                        controller.event_Clicked$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });
                                    ;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                            inputs: {
                                ColumnOptions: model.getCachedValue(idService.getId("MGpMFgXfYE+uNFGV0RCQTQ.ColumnOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                        rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
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
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                left: new PlaceholderContent(function() {
                                    return [$if(model.variables.in_ShowSubtitleIn, false, this, function() {
                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                            inputs: {
                                                Options: model.getCachedValue(idService.getId("V+Zfy0ZWnUKBJeguZTsoSw.Options"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                        rec.marginSizeAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                            rec.bottomSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
                                                            return rec;
                                                        }();
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
                                                uuid: "3",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                        inputs: {
                                                            In_Text: model.variables.in_StatisticsOptionsIn.subtitleAttr,
                                                            _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus),
                                                            In_TextOptions: model.getCachedValue(idService.getId("0LfkJjacxkyU+FAGsqCZzA.In_TextOptions"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                    rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral8;
                                                                    rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
                                                                    return rec;
                                                                }();
                                                            }),
                                                            In_HighlightWords: model.variables.in_HighlightWordsIn,
                                                            _in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HighlightWordsInDataFetchStatus)
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
                                                    }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                        inputs: {
                                                            In_HighlightWords: model.variables.in_HighlightWordsIn,
                                                            _in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HighlightWordsInDataFetchStatus),
                                                            In_Text: model.variables.in_StatisticsOptionsIn.titleAttr,
                                                            _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus),
                                                            In_TextOptions: model.getCachedValue(idService.getId("bATIdlO17kyvaSFEGXgktg.In_TextOptions"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                    rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.base;
                                                                    rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
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
```
(… 365 more lines in `migration/screens/BrowseCountries/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc.js`)
