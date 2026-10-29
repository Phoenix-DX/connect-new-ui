define("UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClass_Color"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_ConnectPatterns_IconSVG_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ubt-icon";
                }, false),
                this.attr("In_IconId", "in_IconIdIn", "In_IconId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_IconIdInDataFetchStatus", "_in_IconIdInDataFetchStatus", "_in_IconIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ColorId", "in_ColorIdIn", "In_ColorId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnectLibraryModel.staticEntities.uBT_Color.neutral9;
                }, false),
                this.attr("_in_ColorIdInDataFetchStatus", "_in_ColorIdInDataFetchStatus", "_in_ColorIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_SizeId", "in_SizeIdIn", "In_SizeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_SizeIdInDataFetchStatus", "_in_SizeIdInDataFetchStatus", "_in_SizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_Visible", "in_VisibleIn", "In_Visible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_in_VisibleInDataFetchStatus", "_in_VisibleInDataFetchStatus", "_in_VisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ExtendedClasses", "in_ExtendedClassesIn", "In_ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = UBTConnectLibrary_ConnectPatterns_IconSVG_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_IconId" in inputs) {
                this.variables.in_IconIdIn = inputs.In_IconId;
                if ("_in_IconIdInDataFetchStatus" in inputs) {
                    this.variables._in_IconIdInDataFetchStatus = inputs._in_IconIdInDataFetchStatus;
                }

            }

            if ("In_ColorId" in inputs) {
                this.variables.in_ColorIdIn = inputs.In_ColorId;
                if ("_in_ColorIdInDataFetchStatus" in inputs) {
                    this.variables._in_ColorIdInDataFetchStatus = inputs._in_ColorIdInDataFetchStatus;
                }

            }

            if ("In_SizeId" in inputs) {
                this.variables.in_SizeIdIn = inputs.In_SizeId;
                if ("_in_SizeIdInDataFetchStatus" in inputs) {
                    this.variables._in_SizeIdInDataFetchStatus = inputs._in_SizeIdInDataFetchStatus;
                }

            }

            if ("In_Visible" in inputs) {
                this.variables.in_VisibleIn = inputs.In_Visible;
                if ("_in_VisibleInDataFetchStatus" in inputs) {
                    this.variables._in_VisibleInDataFetchStatus = inputs._in_VisibleInDataFetchStatus;
                }

            }

            if ("In_ExtendedClasses" in inputs) {
                this.variables.in_ExtendedClassesIn = inputs.In_ExtendedClasses;
                if ("_in_ExtendedClassesInDataFetchStatus" in inputs) {
                    this.variables._in_ExtendedClassesInDataFetchStatus = inputs._in_ExtendedClassesInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConnectPatterns.Icon");
});
define("UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClass_Color"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_Icon_mvc_model, UBTConnectLibrary_ConnectPatterns_Icon_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_view) {
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
        View.displayName = "ConnectPatterns.Icon";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_Icon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_Icon_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: true,
                    extendedEvents: {
                        onClick: function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon/Container onclick");
                                controller.click$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        }
                    },
                    style: model.getCachedValue(idService.getId("Xbv+wPKEZkGV7DGP4E_MSQ.Style"), function() {
                        return (OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.in_IconIdIn, callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBTConnectLibraryController.default.getClass_Color$Action(model.variables.in_ColorIdIn, callContext).out_ColorClassOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_SizeIdIn, callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id) + ((((model.variables.in_ExtendedClassesIn) !== (""))) ? ((" " + model.variables.in_ExtendedClassesIn)) : ("")));
                    }, function() {
                        return model.variables.mainContainerClassVar;
                    }, function() {
                        return model.variables.in_IconIdIn;
                    }, function() {
                        return model.variables.in_ColorIdIn;
                    }, function() {
                        return model.variables.in_SizeIdIn;
                    }, function() {
                        return model.variables.in_ExtendedClassesIn;
                    }),
                    visible: model.variables.in_VisibleIn,
                    _idProps: {
                        service: idService,
                        uuid: "0"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IconIdInDataFetchStatus, model.variables._in_ColorIdInDataFetchStatus, model.variables._in_SizeIdInDataFetchStatus, model.variables._in_ExtendedClassesInDataFetchStatus),
                    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_VisibleInDataFetchStatus)
                }, $if(((OS.BuiltinFunctions.index(model.variables.in_IconIdIn, "SVG_", 0, false, true)) !== (-1)), false, this, function() {
                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_view, {
                        inputs: {
                            In_IconId: model.variables.in_IconIdIn,
                            _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IconIdInDataFetchStatus)
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
                            alias: "1"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: []
                    })];
                }, function() {
                    return [];
                }))];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.ConnectPatterns.Icon.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$debugger", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClass_Color"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_Icon_mvc_Debugger) {
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

        Controller.prototype.click$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:uqjHp5JExEyuQKizPvCpdA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.uqjHp5JExEyuQKizPvCpdA:oyHjF3alkVnGfru7dphiBQ", "UBTConnectLibrary", "Icon", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:uqjHp5JExEyuQKizPvCpdA", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
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
            return UBTConnectLibraryController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.ConnectPatterns.Icon.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "rgxyFGK0mU2+FCn7+w3Rfg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "eJP5YViMXkSvUfO9ozztbQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IconIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "gQBUML+3wU+CeobrK20GOw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ColorIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "dGI_XsXgFUmdWTnAiBeK3A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_SizeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "9USLUMo8MUaBFmHgne4LiQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_VisibleIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "GM51j4vj5EiAoBdIVYuh1A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ExtendedClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});