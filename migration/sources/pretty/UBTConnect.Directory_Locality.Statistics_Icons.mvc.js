define("UBTConnect.Directory_Locality.Statistics_Icons.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "Connect_Geography_CS.model", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnect_UtilsController, Connect_Geography_CSModel, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("UI_StatisticsTexts", "uI_StatisticsTextsIn", "UI_StatisticsTexts", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_StatisticsTextsRec());
                }, false, Connect_Geography_CSModel.UI_StatisticsTextsRec),
                this.attr("_uI_StatisticsTextsInDataFetchStatus", "_uI_StatisticsTextsInDataFetchStatus", "_uI_StatisticsTextsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.init();
        return VariablesRecord;
    })(OS.DataTypes.GenericRecord);
    var WidgetsRecord = (function(_super) {
        __extends(WidgetsRecord, _super);

        function WidgetsRecord() {
            _super.apply(this, arguments);
        }
        WidgetsRecord.getWidgetsType = function() {
            return {};
        };

        return WidgetsRecord;
    })(OS.Model.BaseWidgetRecordMap);
    var Model = (function(_super) {
        __extends(Model, _super);

        function Model() {
            _super.apply(this, arguments);
        }
        Model.getVariablesRecordConstructor = function() {
            return VariablesRecord;
        };
        Model.getWidgetsRecordConstructor = function() {
            return WidgetsRecord;
        };
        Model._hasValidationWidgetsValue = undefined;
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                if ((Model._hasValidationWidgetsValue === undefined)) {
                    Model._hasValidationWidgetsValue = (((UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("UI_StatisticsTexts" in inputs) {
                this.variables.uI_StatisticsTextsIn = inputs.UI_StatisticsTexts;
                if ("_uI_StatisticsTextsInDataFetchStatus" in inputs) {
                    this.variables._uI_StatisticsTextsInDataFetchStatus = inputs._uI_StatisticsTextsInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Locality.Statistics_Icons");
});
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
                                                return OutSystemsDebugger.handleFunctionCall(function() {
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
                                                return OutSystemsDebugger.handleFunctionCall(function() {
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
                                                    return OutSystemsDebugger.handleFunctionCall(function() {
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
                                            _idProps: {
                                                service: idService,
                                                uuid: "6",
                                                alias: "7"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    })
                                },
                                _dependencies: []
                            })];
                        }, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                inputs: {
                                    In_TextOptions: model.getCachedValue(idService.getId("h14lARt9a0yD5HK0iFVxfQ.In_TextOptions"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                            rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                            return rec;
                                        }();
                                    }),
                                    In_Text: model.variables.uI_StatisticsTextsIn.supperMeetingsAttr,
                                    _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_StatisticsTextsInDataFetchStatus),
                                    InlineIcon: model.getCachedValue(idService.getId("h14lARt9a0yD5HK0iFVxfQ.InlineIcon"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.InlineIconRec();
                                            rec.iconIdAttr = OutSystemsDebugger.handleFunctionCall(function() {
                                                return UBTConnect_UtilsController.default.getEntityType_Icon$Action(UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions, callContext).iconIdOut;
                                            }, OS.DataTypes.DataTypes.Text, callContext.id);
                                            rec.iconSizeIdAttr = UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16;
                                            rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
                                            rec.iconColorIdAttr = UBTConnectModel.staticEntities.uBT_Color.orange;
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
                                    uuid: "7",
                                    alias: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._uI_StatisticsTextsInDataFetchStatus), asPrimitiveValue(model.variables.uI_StatisticsTextsIn.localitiesAttr), asPrimitiveValue(model.variables.uI_StatisticsTextsIn.supperMeetingsAttr), asPrimitiveValue(model.variables.uI_StatisticsTextsIn.householdsAttr), asPrimitiveValue(model.variables.uI_StatisticsTextsIn.membersAttr)]
            }), React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
                inputs: {
                    ColumnOptions: model.getCachedValue(idService.getId("znsEwl+mdEmSlmnHX3Kemg.ColumnOptions"), function() {
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
                    uuid: "8",
                    alias: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    left: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                            inputs: {
                                SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
                                Text: model.variables.uI_StatisticsTextsIn.brothersAttr,
                                _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_StatisticsTextsInDataFetchStatus),
                                TextOptions: model.getCachedValue(idService.getId("Brothers.TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
                                name: "Brothers",
                                alias: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                icon: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                        inputs: {
                                            In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.boy,
                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.blueNonStandarDarker,
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
                                            uuid: "10",
                                            alias: "11"
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
                                Text: model.variables.uI_StatisticsTextsIn.sistersAttr,
                                _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_StatisticsTextsInDataFetchStatus),
                                TextOptions: model.getCachedValue(idService.getId("Sisters.TextOptions"), function() {
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
                                name: "Sisters",
                                alias: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                icon: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                        inputs: {
                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16,
                                            In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.girl,
                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.pinkNonStandardDarker
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
                                            uuid: "12",
                                            alias: "13"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: []
                        })];
                    }),
                    right: PlaceholderContent.Empty
                },
                _dependencies: [asPrimitiveValue(model.variables._uI_StatisticsTextsInDataFetchStatus), asPrimitiveValue(model.variables.uI_StatisticsTextsIn.sistersAttr), asPrimitiveValue(model.variables.uI_StatisticsTextsIn.brothersAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Locality.Statistics_Icons.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect_Geography_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Locality.Statistics_Icons.mvc$debugger", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect_Geography_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Locality_Statistics_Icons_mvc_Debugger) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions


        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ", "UBTConnect", "Directory_Locality", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:P0qeNEv0S0WeJnieYrOaZA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.P0qeNEv0S0WeJnieYrOaZA:ubLh1h4r6YBrERsjC2E6PQ", "UBTConnect", "Statistics_Icons", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:P0qeNEv0S0WeJnieYrOaZA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Directory_Locality.Statistics_Icons.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "yaKbKyCYBk+f6GMs1ojp3Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.uI_StatisticsTextsIn;
            }
        },
        "9H5fUZvYK0yopoBYtsho8g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "otx1v4uDD0+BIWtYFcMLFA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Members"));
                })(varBag.model, idService);
            }
        },
        "0aXo6ECAz0OAAL13NI9W4A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "wT3nDnqLS0yJl50C64U+4g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Middle"));
                })(varBag.model, idService);
            }
        },
        "ZuFpMvZCokKXTLPbhb6adw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Houses"));
                })(varBag.model, idService);
            }
        },
        "Pcv2sqDtkkCtNTWej0fFXQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "O7Dlmg8URUKQqoRJWDn2iw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "aBX6GWqwxkGDs0sI4B8S4A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DoesntHaveSupperMeetings"));
                })(varBag.model, idService);
            }
        },
        "9CAX1ibTOk+__EeMEfeikQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Localities"));
                })(varBag.model, idService);
            }
        },
        "ybo6qicVQE6RbS_yOI6KVQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "8I8+rh3CiUSw8LDhRjGQUQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "spXLZR0ouUOJ8hMxEwizlQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Brothers"));
                })(varBag.model, idService);
            }
        },
        "MOx1_Eazn0WJ0OWYYS0Vuw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "KsnGvJ_EG0uoR5gUO+inuA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Middle"));
                })(varBag.model, idService);
            }
        },
        "pihCy5JOI0WWvqK3PujpRg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Sisters"));
                })(varBag.model, idService);
            }
        },
        "Q5lkQqzY9kuHiDCzhDQiCw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "FuK7Bh63d0SaLSXVZto_FA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});