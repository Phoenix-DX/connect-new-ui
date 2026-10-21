# UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics

- Kind: shared; build screens using it: HouseholdCarousel, Locality_Details, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc.js`
- Child blocks: UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText, UBTConnectLibrary.BasePatterns.Columns_Two, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag (queue: UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText, UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag)

## Inputs

| Input | Type |
|---|---|
| In_BretherenCount | Integer |
| In_HouseholdCount | Integer |
| In_GenderSplit | Text |

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: SupperMeeting_Carousel/default (×12)

```html
<div class="OSBlockWidget" data-block="Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics" id="b3-l1-1164_0-b2-b1-b1-b5-$b2">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b3-l1-1164_0-b2-b1-b1-b5-b2-$b1"><!-- nested block: 54 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc$view", "UBTConnect.controller$GetDescriptor_BretherenCount", "UBTConnectLibrary.model$LookupConceptsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetLookupConcepts", "UBTConnect.controller$GetDescriptor_Subdivision_HouseholdCount", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_model, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvc_view) {
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
        View.displayName = "Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("zkZ7shNTU06v+2QjADBacQ.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.marginSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                return rec;
                            }();
                            rec.textOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex gap-s flex-wrap flex-direction-column",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DIV_Statistics"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DIV_Bretherens"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                            inputs: {
                                ColumnOptions: model.getCachedValue(idService.getId("KdRwa_FryUGdbcaSDHkpyg.ColumnOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                        rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
                                        rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                left: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_view, {
                                        inputs: {
                                            In_Text: model.getCachedValue(idService.getId("PJ+sScQP1UeO6lMKOl58Fw.In_Text"), function() {
                                                    return UBTConnectController.default.getDescriptor_BretherenCount$Action(model.variables.in_BretherenCountIn, callContext).out_DescriptorOut;
                                                }, OS.DataTypes.DataTypes.Text, callContext.id);
                                            }, function() {
                                                return model.variables.in_BretherenCountIn;
                                            }),
                                            _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BretherenCountInDataFetchStatus),
                                            In_UBT_IconId: model.getCachedValue(idService.getId("PJ+sScQP1UeO6lMKOl58Fw.In_UBT_IconId"), function() {
                                                    return UBTConnectLibraryController.default.getLookupConcepts$Action(false, callContext).out_LookupOut;
                                                }, OS.DataTypes.DataTypes.Record, callContext.id).brethrenAttr.iconAttr;
                                            }),
                                            In_UBT_ColorId: model.getCachedValue(idService.getId("PJ+sScQP1UeO6lMKOl58Fw.In_UBT_ColorId"), function() {
                                                    return UBTConnectLibraryController.default.getLookupConcepts$Action(false, callContext).out_LookupOut;
                                                }, OS.DataTypes.DataTypes.Record, callContext.id).brethrenAttr.icon_ColorAttr;
                                            }),
                                            In_FontSize: model.variables.fontSizeVar
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
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }),
                                right: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvc_view, {
                                        inputs: {
                                            Content: model.variables.in_GenderSplitIn,
                                            _contentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GenderSplitInDataFetchStatus)
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
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.in_GenderSplitIn), asPrimitiveValue(model.variables.fontSizeVar), asPrimitiveValue(model.variables._in_GenderSplitInDataFetchStatus), asPrimitiveValue(model.variables._in_BretherenCountInDataFetchStatus), asPrimitiveValue(model.variables.in_BretherenCountIn)]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DIV_Households"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_view, {
                            inputs: {
                                In_Text: model.getCachedValue(idService.getId("uo1Cma43oE6jz_PdB7kZCg.In_Text"), function() {
                                        return UBTConnectController.default.getDescriptor_Subdivision_HouseholdCount$Action(model.variables.in_HouseholdCountIn, callContext).out_DescriptorOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                                }, function() {
                                    return model.variables.in_HouseholdCountIn;
                                }),
                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdCountInDataFetchStatus),
                                In_FontSize: model.variables.fontSizeVar,
                                In_UBT_IconId: model.getCachedValue(idService.getId("uo1Cma43oE6jz_PdB7kZCg.In_UBT_IconId"), function() {
                                        return UBTConnectLibraryController.default.getLookupConcepts$Action(false, callContext).out_LookupOut;
                                    }, OS.DataTypes.DataTypes.Record, callContext.id).householdAttr.iconAttr;
                                }),
                                In_UBT_ColorId: model.getCachedValue(idService.getId("uo1Cma43oE6jz_PdB7kZCg.In_UBT_ColorId"), function() {
                                        return UBTConnectLibraryController.default.getLookupConcepts$Action(false, callContext).out_LookupOut;
                                    }, OS.DataTypes.DataTypes.Record, callContext.id).householdAttr.icon_ColorAttr;
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
                                uuid: "7",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.in_HouseholdCountIn), asPrimitiveValue(model.variables.in_GenderSplitIn), asPrimitiveValue(model.variables.fontSizeVar), asPrimitiveValue(model.variables._in_HouseholdCountInDataFetchStatus), asPrimitiveValue(model.variables._in_GenderSplitInDataFetchStatus), asPrimitiveValue(model.variables._in_BretherenCountInDataFetchStatus), asPrimitiveValue(model.variables.in_BretherenCountIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
