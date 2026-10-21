# UBTConnect.Directory_Locality.Statistics_TypedItem

- Kind: shared; build screens using it: CountryDetails, CountryList
- Compiled source: `migration/screens/CountryDetails/analysis/sources/pretty/UBTConnect.Directory_Locality.Statistics_TypedItem.mvc.js`
- Child blocks: UBTConnect.Directory_Locality.Statistics_Icons, UBTConnectLibrary.BasePatterns.Columns_Three, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnect_Utils.CW_Image.UBT_LazyImage (queue: UBTConnect.Directory_Locality.Statistics_Icons)

## Inputs

| Input | Type |
|---|---|
| UI_CountryStatistics | Record UI_TypedStatisticsRec |
| In_HideNavigation | Boolean |
| In_HideBorder | Boolean |
| In_ImageEntityTypeId | Text |
| In_ImageEntityId | Text |
| In_HasImage | Boolean |

## Captured DOM variants (1 distinct, 20 instances)

### Variant 1: CountryDetails/default (×20)

```html
<div class="OSBlockWidget" data-block="Directory_Locality.Statistics_TypedItem" id="l1-122_0-$b25">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="l1-122_0-b25-$b1"><!-- nested block: 120 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$model", "UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Directory_Locality.Statistics_Icons.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.model$UI_TypedStatisticsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Geography_CSModel, React, OSView, UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_model, UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Locality_Statistics_Icons_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "Directory_Locality.Statistics_TypedItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Locality_Statistics_Icons_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("1lyXNtG9qkix0XiE6bqPwg.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                return rec;
                            }();
                            rec.marginSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral4;
                                rec.sizeAttr = function() {
                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                    rec.generalSizeIdAttr = ((model.variables.in_HideBorderIn) ? (UBTConnectModel.staticEntities.uBT_Size.none) : (UBTConnectModel.staticEntities.uBT_Size.small));
                                    return rec;
                                }();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.medium;
                                    return rec;
                                }();
                                return rec;
                            }();
                            rec.displayOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
                                return rec;
                            }();
                            return rec;
                        }();
                    }, function() {
                        return model.variables.in_HideBorderIn;
                    }),
                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HideBorderInDataFetchStatus)
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
                        return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
                            inputs: {
                                ColumnOptions: model.getCachedValue(idService.getId("OqO9T8K83UC1U7DQiWACyA.ColumnOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                        rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
                                        rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                        rec.verticalAlignAttr = UBTConnectModel.staticEntities.uBT_VerticalAlign.center;
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
                                    return [$if((((model.variables.uI_CountryStatisticsIn.imageURLAttr) !== ("")) || model.variables.in_HasImageIn), false, this, function() {
                                        return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                            inputs: {
                                                ExtendedClass: "country-flag",
                                                ImageSize: model.getCachedValue(idService.getId("XZjYVUF3QEyFQTzQV7v2Fg.ImageSize"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                        rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.small_40;
                                                        rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
                                                        return rec;
                                                    }();
                                                }),
                                                In_BorderRadius: UBTConnectModel.staticEntities.uBT_Shape.circle,
                                                EntityType: model.variables.in_ImageEntityTypeIdIn,
                                                _entityTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageEntityTypeIdInDataFetchStatus),
                                                EntityId: model.variables.in_ImageEntityIdIn,
                                                _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageEntityIdInDataFetchStatus),
                                                ImageURL: model.variables.uI_CountryStatisticsIn.imageURLAttr,
                                                _imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_CountryStatisticsInDataFetchStatus)
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
                                    }, function() {
                                        return [];
                                    })];
                                }),
                                middle: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                        inputs: {
                                            In_TextOptions: model.getCachedValue(idService.getId("4bFXwwDkgkijTSH0Vf7HDw.In_TextOptions"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                    rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                    return rec;
                                                }();
                                            }),
                                            In_Text: model.variables.uI_CountryStatisticsIn.nameAttr,
                                            _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_CountryStatisticsInDataFetchStatus)
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
                                        _dependencies: []
                                    }), React.createElement(UBTConnect_Directory_Locality_Statistics_Icons_mvc_view, {
                                        inputs: {
                                            UI_StatisticsTexts: model.variables.uI_CountryStatisticsIn.uI_StatisticsTextsAttr,
                                            _uI_StatisticsTextsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_CountryStatisticsInDataFetchStatus)
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
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }),
                                right: new PlaceholderContent(function() {
                                    return [$if(model.variables.in_HideNavigationIn, false, this, function() {
                                        return [];
                                    }, function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                            inputs: {
                                                In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.chevronRight,
                                                In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral6
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                }
                                            },
```
(… 25 more lines in `migration/screens/CountryDetails/analysis/sources/pretty/UBTConnect.Directory_Locality.Statistics_TypedItem.mvc.js`)
