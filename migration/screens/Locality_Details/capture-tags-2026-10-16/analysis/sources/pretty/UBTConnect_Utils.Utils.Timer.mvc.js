define("UBTConnect_Utils.Utils.Timer.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function(OutSystems, UBTConnect_UtilsModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Interval", "intervalVar", "Interval", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("In_Delay", "in_DelayIn", "In_Delay", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 1;
                }, false),
                this.attr("_in_DelayInDataFetchStatus", "_in_DelayInDataFetchStatus", "_in_DelayInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                return false;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_Delay" in inputs) {
                this.variables.in_DelayIn = inputs.In_Delay;
                if ("_in_DelayInDataFetchStatus" in inputs) {
                    this.variables._in_DelayInDataFetchStatus = inputs._in_DelayInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Utils.Timer");
});
define("UBTConnect_Utils.Utils.Timer.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.Utils.Timer.mvc$model", "UBTConnect_Utils.Utils.Timer.mvc$controller", "UBTConnect_Utils.clientVariables"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, React, OSView, UBTConnect_Utils_Utils_Timer_mvc_model, UBTConnect_Utils_Utils_Timer_mvc_controller, UBTConnect_UtilsClientVariables) {
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
        View.displayName = "Utils.Timer";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_Utils_Timer_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_Utils_Timer_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties());
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect_Utils.Utils.Timer.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.Utils.Timer.mvc$debugger", "UBTConnect_Utils.Utils.Timer.mvc$controller.OnDestroy.RemoveIntervalJS", "UBTConnect_Utils.Utils.Timer.mvc$controller.OnInitialize.StartIntervalJS"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_Utils_Timer_mvc_Debugger, UBTConnect_Utils_Utils_Timer_mvc_controller_OnDestroy_RemoveIntervalJS, UBTConnect_Utils_Utils_Timer_mvc_controller_OnInitialize_StartIntervalJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                action_IntervalElapsed$Action: function() {
                    return controller.executeActionInsideJSNode(controller._action_IntervalElapsed$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_IntervalElapsed");
                }
            };
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._onDestroy$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnDestroy");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:fLZzLX5uK0a5zCTNPj05jw:/NRWebFlows.9e+Q5I+m3EKvcMbAqRESVw/NodesShownInESpaceTree.Oid6eW5SCUWYzp4n6nmXQw/ClientActions.fLZzLX5uK0a5zCTNPj05jw:3xDOAjikhZ4477W2Cxplqg", "UBTConnect_Utils", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hBKOhQQPfkutCfUJ44dSJA", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gL+xyY7TW0qORS28GB24XQ", callContext.id) && (model.variables.intervalVar > 0))) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WmujxU3ym06yGnbfoOrzhw", callContext.id);
                    controller.safeExecuteJSNode(UBTConnect_Utils_Utils_Timer_mvc_controller_OnDestroy_RemoveIntervalJS, "RemoveInterval", "OnDestroy", {
                        Interval: OS.DataConversion.JSNodeParamConverter.to(model.variables.intervalVar, OS.DataTypes.DataTypes.Integer)
                    }, function($parameters) {}, {}, {});
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IwioGnCDSk6nWzqJhj6GyQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2LFq8dXMS0Wm+A5_qqL4cQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:fLZzLX5uK0a5zCTNPj05jw", callContext.id);
            }

        };
        Controller.prototype._action_IntervalElapsed$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_IntervalElapsed");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:XovnRguXnE2e222yc9nbVg:/NRWebFlows.9e+Q5I+m3EKvcMbAqRESVw/NodesShownInESpaceTree.Oid6eW5SCUWYzp4n6nmXQw/ClientActions.XovnRguXnE2e222yc9nbVg:R6eD14zCmGbxOdQUFb1ujA", "UBTConnect_Utils", "Action_IntervalElapsed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_qRHM9D0SEqEJ7ZjWyxLig", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RNWgV7QO10iVTA2zdCvFPA", callContext.id);
                // Trigger Event: Event_IntervalElapsed
                return controller.event_IntervalElapsed$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:cHQ2txKFBkKrktqkxtZVhA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:XovnRguXnE2e222yc9nbVg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:XovnRguXnE2e222yc9nbVg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var startIntervalJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.startIntervalJSResult = startIntervalJSResult;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:LypVVEdwbEuzxfgwSxioLQ:/NRWebFlows.9e+Q5I+m3EKvcMbAqRESVw/NodesShownInESpaceTree.Oid6eW5SCUWYzp4n6nmXQw/ClientActions.LypVVEdwbEuzxfgwSxioLQ:HWDwW3Km2Q9ddsfnBLEwug", "UBTConnect_Utils", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bkWl3CwsVESkOkdxMJAeFg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:59f+sneNzEeH2egoKQ5u7g", callContext.id);
                startIntervalJSResult.value = controller.safeExecuteJSNode(UBTConnect_Utils_Utils_Timer_mvc_controller_OnInitialize_StartIntervalJS, "StartInterval", "OnInitialize", {
                    Delay: OS.DataConversion.JSNodeParamConverter.to((model.variables.in_DelayIn * 1000), OS.DataTypes.DataTypes.Integer),
                    Interval: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect_Utils.Utils.Timer.OnInitialize$startIntervalJSResult"))();
                    jsNodeResult.intervalOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Interval, OS.DataTypes.DataTypes.Integer);
                    return jsNodeResult;
                }, {
                    Action_IntervalElapsed: controller.clientActionProxies.action_IntervalElapsed$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uDTI_dNTfUCPZol441UZ5Q", callContext.id);
                // Interval = StartInterval.Interval
                model.variables.intervalVar = startIntervalJSResult.value.intervalOut;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:SSEG0e4eikCzpPpdEQj+sg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:LypVVEdwbEuzxfgwSxioLQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect_Utils.Utils.Timer.OnInitialize$startIntervalJSResult", [{
            name: "Interval",
            attrName: "intervalOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);

        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.action_IntervalElapsed$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_IntervalElapsed$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.event_IntervalElapsed$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:9e+Q5I+m3EKvcMbAqRESVw:/NRWebFlows.9e+Q5I+m3EKvcMbAqRESVw:myNQBFTdPjrRgSNRA2fOJA", "UBTConnect_Utils", "Utils", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:Oid6eW5SCUWYzp4n6nmXQw:/NRWebFlows.9e+Q5I+m3EKvcMbAqRESVw/NodesShownInESpaceTree.Oid6eW5SCUWYzp4n6nmXQw:Tib5UhdZPDNkawZuWJ7YXQ", "UBTConnect_Utils", "Timer", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Oid6eW5SCUWYzp4n6nmXQw", callContext.id);
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:9e+Q5I+m3EKvcMbAqRESVw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Utils/Timer On Initialize");
                return controller.onInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Utils/Timer On Destroy");
                return controller.onDestroy$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnect_UtilsController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});
define("UBTConnect_Utils.Utils.Timer.mvc$controller.OnDestroy.RemoveIntervalJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        clearInterval($parameters.Interval)
    };
});
define("UBTConnect_Utils.Utils.Timer.mvc$controller.OnInitialize.StartIntervalJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Interval = window.setInterval($actions.Action_IntervalElapsed, $parameters.Delay)
    };
});

define("UBTConnect_Utils.Utils.Timer.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "WmujxU3ym06yGnbfoOrzhw": {
            getter: function(varBag, idService) {
                return varBag.removeIntervalJSResult.value;
            }
        },
        "59f+sneNzEeH2egoKQ5u7g": {
            getter: function(varBag, idService) {
                return varBag.startIntervalJSResult.value;
            }
        },
        "RITNrsrhDkSzon+8WXPsOw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.intervalVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "6F3OtMD3KUmR6px4gWxiRw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_DelayIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});