define("UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.Adaptive.Columns2.mvc$model", "UBTConnectLibrary.controller$ConvertUbtSizeToGutterSize", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.controller$GetClasses_Column", "UBTConnectLibrary.controller$SetLocalVariable_ColumnSize"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23_Adaptive_Columns2_mvcModel) {
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
                this.attr("ColumnOptions", "columnOptionsIn", "ColumnOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ColumnOptionsRec());
                }, false, UBTConnectLibraryModel.ColumnOptionsRec),
                this.attr("_columnOptionsInDataFetchStatus", "_columnOptionsInDataFetchStatus", "_columnOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = OutSystemsUI_2_23_Adaptive_Columns2_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("ColumnOptions" in inputs) {
                this.variables.columnOptionsIn = inputs.ColumnOptions;
                if ("_columnOptionsInDataFetchStatus" in inputs) {
                    this.variables._columnOptionsInDataFetchStatus = inputs._columnOptionsInDataFetchStatus;
                }

            }

            if ("ExtendedClasses" in inputs) {
                this.variables.extendedClassesIn = inputs.ExtendedClasses;
                if ("_extendedClassesInDataFetchStatus" in inputs) {
                    this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "BasePatterns.Columns_Two");
});
define("UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystemsUI_2_23.Adaptive.Columns2.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$ConvertUbtSizeToGutterSize", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.controller$GetClasses_Column", "UBTConnectLibrary.controller$SetLocalVariable_ColumnSize"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_model, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_controller, UBTConnectLibraryClientVariables, OutSystemsUI_2_23_Adaptive_Columns2_mvc_view, OSWidgets) {
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
        View.displayName = "BasePatterns.Columns_Two";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Adaptive_Columns2_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_Columns_Two_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_Columns_Two_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_2_23_Adaptive_Columns2_mvc_view, {
                inputs: {
                    GutterSize: model.getCachedValue(idService.getId("8BN_sFi0Kk65UQuvLIGmHg.GutterSize"), function() {
                        return OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectLibraryController.default.convertUbtSizeToGutterSize$Action(model.variables.columnOptionsIn.spacingSizeAttr, callContext).gutterSizeIdOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                    }, function() {
                        return model.variables.columnOptionsIn.spacingSizeAttr;
                    }),
                    _gutterSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._columnOptionsInDataFetchStatus),
                    ExtendedClass: model.getCachedValue(idService.getId("8BN_sFi0Kk65UQuvLIGmHg.ExtendedClass"), function() {
                        return OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassesIn, callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), (model.variables.mainContainerClassVar + "--two-columns"), callContext).classesOutOut;
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
                    _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus, model.variables._columnOptionsInDataFetchStatus)
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
                                return (((((model.variables.mainContainerClassVar + "--left") + " ") + model.variables.mainContainerClassVar) + "--column ") + (((model.variables.columnOptionsIn.columnSizesAttr.leftAttr > 0)) ? ((model.variables.mainContainerClassVar + "--fixed-width")) : ("")));
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
                            content: _this.props.placeholders.right,
                            style: model.getCachedValue(idService.getId("Right.Style"), function() {
                                return (((((model.variables.mainContainerClassVar + "--right") + " ") + model.variables.mainContainerClassVar) + "--column ") + (((model.variables.columnOptionsIn.columnSizesAttr.rightAttr > 0)) ? ((model.variables.mainContainerClassVar + "--fixed-width")) : ("")));
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
define("UBTConnectLibrary.BasePatterns.Columns_Two.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$debugger", "UBTConnectLibrary.controller$ConvertUbtSizeToGutterSize", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.controller$GetClasses_Column", "UBTConnectLibrary.controller$SetLocalVariable_ColumnSize"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_Debugger) {
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
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:tLIep+nzVketSZDsGpPRHQ:/NRWebFlows.nUarfIVtc0ih3v4IkobvXA/NodesShownInESpaceTree.XWF2fq+kokS3M1zh6jAa1A/ClientActions.tLIep+nzVketSZDsGpPRHQ:VoLL5FbHa7Xq5cJOMczWmw", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+QEoxH0uok+1IwlBJB84Lg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ze8_XoG7kU2yiqVK09Ad7Q", callContext.id);
                // Execute Action: SetLocalVariable_ColumnSize_Left
                UBTConnectLibraryController.default.setLocalVariable_ColumnSize$Action(idService.getId("Left"), model.variables.columnOptionsIn.columnSizesAttr.leftAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6VLURQd8DUiqosZTjnb8DQ", callContext.id);
                // Execute Action: SetLocalVariable_ColumnSize_Right
                UBTConnectLibraryController.default.setLocalVariable_ColumnSize$Action(idService.getId("Right"), model.variables.columnOptionsIn.columnSizesAttr.rightAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rqT7tcz2PU2RGJu2ijUFkw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:tLIep+nzVketSZDsGpPRHQ", callContext.id);
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
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:XWF2fq+kokS3M1zh6jAa1A:/NRWebFlows.nUarfIVtc0ih3v4IkobvXA/NodesShownInESpaceTree.XWF2fq+kokS3M1zh6jAa1A:faCFqrfisQeWQLAU1oxKxA", "UBTConnectLibrary", "Columns_Two", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:XWF2fq+kokS3M1zh6jAa1A", callContext.id);
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "BasePatterns/Columns_Two On Ready");
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

define("UBTConnectLibrary.BasePatterns.Columns_Two.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "S8jom5l8UEaAzIQop9Sb1w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "fcbh18RBB0aAKPjV29EXSw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.columnOptionsIn;
            }
        },
        "7t7NanhpP06DyhnfxA8UuQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "OvQi6pEDiEaHeJoZtRMUVw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Column1"));
                })(varBag.model, idService);
            }
        },
        "dxmb_rkQCUiRkrkQv2KQMg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "pwF03uHv5kWIYGC_VI6c_A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Column2"));
                })(varBag.model, idService);
            }
        },
        "x20QI1j5L0ySniMyZUcrLQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});