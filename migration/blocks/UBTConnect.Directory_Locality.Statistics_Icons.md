# UBTConnect.Directory_Locality.Statistics_Icons

- Kind: shared; build screens using it: CountryDetails, CountryList
- Compiled source: `migration/screens/CountryDetails/analysis/sources/pretty/UBTConnect.Directory_Locality.Statistics_Icons.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.Columns_Three, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.IconText (queue: -)

## Inputs

| Input | Type |
|---|---|
| UI_StatisticsTexts | Record UI_StatisticsTextsRec |

## Captured DOM variants (1 distinct, 20 instances)

### Variant 1: CountryDetails/default (×20)

```html
<div class="OSBlockWidget" data-block="Directory_Locality.Statistics_Icons" id="l1-122_0-b25-$b5">
  <div class="OSBlockWidget" data-block="BasePatterns.Columns_Three" id="l1-122_0-b25-b5-$b1"><!-- nested block: 49 nodes --></div>
  <div class="OSBlockWidget" data-block="BasePatterns.Columns_Three" id="l1-122_0-b25-b5-$b9"><!-- nested block: 42 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Locality.Statistics_Icons.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect_Geography_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.Statistics_Icons.mvc$model", "UBTConnect.Directory_Locality.Statistics_Icons.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect_Geography_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Locality_Statistics_Icons_mvc_model, UBTConnect_Directory_Locality_Statistics_Icons_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "Directory_Locality.Statistics_Icons";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_Statistics_Icons_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_Statistics_Icons_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
                inputs: {
                    ColumnOptions: model.getCachedValue(idService.getId("014uV8y+aUGSbJQts79x9w.ColumnOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                            rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.sameSize;
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    left: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                            inputs: {
                                TextOptions: model.getCachedValue(idService.getId("Members.TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                        return rec;
                                    }();
                                }),
                                SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
                                Text: model.variables.uI_StatisticsTextsIn.membersAttr,
                                _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_StatisticsTextsInDataFetchStatus)
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
                                name: "Members",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                icon: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                        inputs: {
                                            In_IconId: model.getCachedValue(idService.getId("0h3nQMrJQ0qK8Smj1jlZbA.In_IconId"), function() {
                                                    return UBTConnect_UtilsController.default.getEntityType_Icon$Action(UBTConnectModel.staticEntities.connect_Entity.member, callContext).iconIdOut;
                                                }, OS.DataTypes.DataTypes.Text, callContext.id);
                                            }),
                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.purple,
                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16
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
                                })
                            },
                            _dependencies: []
                        })];
                    }),
                    middle: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                            inputs: {
                                Text: model.variables.uI_StatisticsTextsIn.householdsAttr,
                                _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_StatisticsTextsInDataFetchStatus),
                                TextOptions: model.getCachedValue(idService.getId("Houses.TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                        return rec;
                                    }();
                                }),
                                SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall
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
                                name: "Houses",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                icon: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                        inputs: {
                                            In_IconId: model.getCachedValue(idService.getId("FdEysk3Oa0+T9tFKfMyQmQ.In_IconId"), function() {
                                                    return UBTConnect_UtilsController.default.getEntityType_Icon$Action(UBTConnectModel.staticEntities.connect_Entity.household, callContext).iconIdOut;
                                                }, OS.DataTypes.DataTypes.Text, callContext.id);
                                            }),
                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16,
                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.primary
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
                                })
                            },
                            _dependencies: []
                        })];
                    }),
                    right: new PlaceholderContent(function() {
                        return [$if((model.variables.uI_StatisticsTextsIn.supperMeetingsAttr === ""), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                inputs: {
                                    TextOptions: model.getCachedValue(idService.getId("Localities.TextOptions"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                            rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                            return rec;
                                        }();
                                    }),
                                    Text: model.variables.uI_StatisticsTextsIn.localitiesAttr,
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_StatisticsTextsInDataFetchStatus),
                                    SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall
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
                                    name: "Localities",
                                    alias: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                            inputs: {
                                                In_ColorId: UBTConnectModel.staticEntities.uBT_Color.error,
                                                In_IconId: model.getCachedValue(idService.getId("AB+EpA2YhE+1H1NZ8YNfJg.In_IconId"), function() {
                                                        return UBTConnect_UtilsController.default.getEntityType_Icon$Action(UBTConnectModel.staticEntities.connect_Entity.locality, callContext).iconIdOut;
                                                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                                                }),
                                                In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
```
(… 207 more lines in `migration/screens/CountryDetails/analysis/sources/pretty/UBTConnect.Directory_Locality.Statistics_Icons.mvc.js`)
