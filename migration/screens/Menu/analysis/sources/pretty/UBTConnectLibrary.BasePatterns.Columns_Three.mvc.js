define("UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.Adaptive.Columns3.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.controller$GetClasses_Column", "UBTConnectLibrary.controller$ConvertUbtSizeToGutterSize", "UBTConnectLibrary.controller$SetLocalVariable_ColumnSize"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23_Adaptive_Columns3_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ubt-columns";
                }, false),
                this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ColumnOptions", "columnOptionsIn", "ColumnOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ColumnOptionsRec());
                }, false, UBTConnectLibraryModel.ColumnOptionsRec),
                this.attr("_columnOptionsInDataFetchStatus", "_columnOptionsInDataFetchStatus", "_columnOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = OutSystemsUI_2_23_Adaptive_Columns3_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("ExtendedClasses" in inputs) {
                this.variables.extendedClassesIn = inputs.ExtendedClasses;
                if ("_extendedClassesInDataFetchStatus" in inputs) {
                    this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
                }

            }

            if ("ColumnOptions" in inputs) {
                this.variables.columnOptionsIn = inputs.ColumnOptions;
                if ("_columnOptionsInDataFetchStatus" in inputs) {
                    this.variables._columnOptionsInDataFetchStatus = inputs._columnOptionsInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "BasePatterns.Columns_Three");
});
define("UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystemsUI_2_23.Adaptive.Columns3.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.controller$GetClasses_Column", "UBTConnectLibrary.controller$ConvertUbtSizeToGutterSize", "UBTConnectLibrary.controller$SetLocalVariable_ColumnSize"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_model, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_controller, UBTConnectLibraryClientVariables, OutSystemsUI_2_23_Adaptive_Columns3_mvc_view, OSWidgets) {
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
        View.displayName = "BasePatterns.Columns_Three";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Adaptive_Columns3_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_Columns_Three_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_Columns_Three_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_2_23_Adaptive_Columns3_mvc_view, {
                inputs: {
                    ExtendedClass: model.getCachedValue(idService.getId("h0TCwL30XEOpP25YlsI2TQ.ExtendedClass"), function() {
                        return OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassesIn, callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), (model.variables.mainContainerClassVar + "--three-columns"), callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnectLibraryController.default.getClasses_Column$Action(model.variables.columnOptionsIn, callContext).classesOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                    }, function() {
                        return model.variables.mainContainerClassVar;
                    }, function() {
                        return model.variables.extendedClassesIn;
                    }, function() {
                        return model.variables.columnOptionsIn;
                    }),
                    _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus, model.variables._columnOptionsInDataFetchStatus),
                    GutterSize: model.getCachedValue(idService.getId("h0TCwL30XEOpP25YlsI2TQ.GutterSize"), function() {
                        return OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectLibraryController.default.convertUbtSizeToGutterSize$Action(model.variables.columnOptionsIn.spacingSizeAttr, callContext).gutterSizeIdOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                    }, function() {
                        return model.variables.columnOptionsIn.spacingSizeAttr;
                    }),
                    _gutterSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._columnOptionsInDataFetchStatus)
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
                    column1: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.left,
                            style: model.getCachedValue(idService.getId("Left.Style"), function() {
                                return ((((model.variables.mainContainerClassVar + "--left ") + model.variables.mainContainerClassVar) + "--column ") + (((model.variables.columnOptionsIn.columnSizesAttr.leftAttr > 0)) ? ((model.variables.mainContainerClassVar + "--fixed-width")) : ("")));
                            }, function() {
                                return model.variables.mainContainerClassVar;
                            }, function() {
                                return model.variables.columnOptionsIn.columnSizesAttr.leftAttr;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Left"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._columnOptionsInDataFetchStatus)
                        })];
                    }),
                    column2: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.middle,
                            style: model.getCachedValue(idService.getId("Middle.Style"), function() {
                                return ((((model.variables.mainContainerClassVar + "--middle ") + model.variables.mainContainerClassVar) + "--column ") + (((model.variables.columnOptionsIn.columnSizesAttr.middleAttr > 0)) ? ((model.variables.mainContainerClassVar + "--fixed-width")) : ("")));
                            }, function() {
                                return model.variables.mainContainerClassVar;
                            }, function() {
                                return model.variables.columnOptionsIn.columnSizesAttr.middleAttr;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Middle"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._columnOptionsInDataFetchStatus)
                        })];
                    }),
                    column3: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.right,
                            style: model.getCachedValue(idService.getId("Right.Style"), function() {
                                return ((((model.variables.mainContainerClassVar + "--right ") + model.variables.mainContainerClassVar) + "--column ") + (((model.variables.columnOptionsIn.columnSizesAttr.rightAttr > 0)) ? ((model.variables.mainContainerClassVar + "--fixed-width")) : ("")));
                            }, function() {
                                return model.variables.mainContainerClassVar;
                            }, function() {
                                return model.variables.columnOptionsIn.columnSizesAttr.rightAttr;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Right"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._columnOptionsInDataFetchStatus)
                        })];
                    })
                }
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.BasePatterns.Columns_Three.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$debugger", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.controller$GetClasses_Column", "UBTConnectLibrary.controller$ConvertUbtSizeToGutterSize", "UBTConnectLibrary.controller$SetLocalVariable_ColumnSize"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_Debugger) {
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
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Wvav9Bup4UyiTKpUMnblbQ:/NRWebFlows.nUarfIVtc0ih3v4IkobvXA/NodesShownInESpaceTree.txf6pmWouU6hqIqlV_kTuA/ClientActions.Wvav9Bup4UyiTKpUMnblbQ:PcIcFjFHCMVhHHj3VOCGig", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Oa4weOIpUk68qQG8AFeEkA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:l+OpbVHB_U6KPgchSP38aQ", callContext.id);
                // Execute Action: SetLocalVariable_ColumnSize_Left
                UBTConnectLibraryController.default.setLocalVariable_ColumnSize$Action(idService.getId("Left"), model.variables.columnOptionsIn.columnSizesAttr.leftAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lx8tt+DcJ0G3uQrqia+ryQ", callContext.id);
                // Execute Action: SetLocalVariable_ColumnSize_Middle
                UBTConnectLibraryController.default.setLocalVariable_ColumnSize$Action(idService.getId("Middle"), model.variables.columnOptionsIn.columnSizesAttr.middleAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:s8QBtXbIuEqEON13LzM2eQ", callContext.id);
                // Execute Action: SetLocalVariable_ColumnSize_Right
                UBTConnectLibraryController.default.setLocalVariable_ColumnSize$Action(idService.getId("Right"), model.variables.columnOptionsIn.columnSizesAttr.rightAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:37H5IbGrE0a58wsvEUajvA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Wvav9Bup4UyiTKpUMnblbQ", callContext.id);
            }

        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:nUarfIVtc0ih3v4IkobvXA:/NRWebFlows.nUarfIVtc0ih3v4IkobvXA:vOjDm7VDpdsBscQEPpIuaQ", "UBTConnectLibrary", "BasePatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:txf6pmWouU6hqIqlV_kTuA:/NRWebFlows.nUarfIVtc0ih3v4IkobvXA/NodesShownInESpaceTree.txf6pmWouU6hqIqlV_kTuA:zP+SGKukrZAezi4WvZvvVA", "UBTConnectLibrary", "Columns_Three", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:txf6pmWouU6hqIqlV_kTuA", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:nUarfIVtc0ih3v4IkobvXA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "BasePatterns/Columns_Three On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectLibraryController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.BasePatterns.Columns_Three.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "zGO3aScBgUeCSXMc3jYyYg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "0u5cG3Qoska0uKy0jssnug": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "XEtIg4K5lkCAfbUl_Ezmww": {
            getter: function(varBag, idService) {
                return varBag.model.variables.columnOptionsIn;
            }
        },
        "jDiislmZUUa3ruUgFP_X8w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Column1"));
                })(varBag.model, idService);
            }
        },
        "WzGgNuJWXEuBwl_eNHoj6w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "Y7YV+aB4akOkz9ZjVbV8mQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Column2"));
                })(varBag.model, idService);
            }
        },
        "5TRcw_Ajfkul+05Cvq0BMg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Middle"));
                })(varBag.model, idService);
            }
        },
        "_CTA8t8lr0muOEnpgKnCSg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Column3"));
                })(varBag.model, idService);
            }
        },
        "w_ERD6HWFke6TYvq0TFkFw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});