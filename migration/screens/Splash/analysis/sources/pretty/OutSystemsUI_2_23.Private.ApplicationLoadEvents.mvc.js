define("OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function(OutSystems, OutSystemsUI_2_23Model) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("TimeoutId", "timeoutIdVar", "TimeoutId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("IntervalId", "intervalIdVar", "IntervalId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("MinimumDisplayTimeMs", "minimumDisplayTimeMsIn", "MinimumDisplayTimeMs", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 1000;
                }, false),
                this.attr("_minimumDisplayTimeMsInDataFetchStatus", "_minimumDisplayTimeMsInDataFetchStatus", "_minimumDisplayTimeMsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("MinimumDisplayTimeMs" in inputs) {
                this.variables.minimumDisplayTimeMsIn = inputs.MinimumDisplayTimeMs;
                if ("_minimumDisplayTimeMsInDataFetchStatus" in inputs) {
                    this.variables._minimumDisplayTimeMsInDataFetchStatus = inputs._minimumDisplayTimeMsInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Private.ApplicationLoadEvents");
});
define("OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$model", "OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$controller"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_model, OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_controller) {
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
        View.displayName = "Private.ApplicationLoadEvents";
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
                return OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_controller;
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
define("OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$translationsResources", "OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$debugger", "OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$controller.OnDestroy.JSClearTimeoutJS", "OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$controller.SetTimeoutForLoadComplete.JSSetTimeoutForLoadCompleteJS", "OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$controller.OnInitialize.JSRegisterListenersJS"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_TranslationsResources, OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_Debugger, OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_controller_OnDestroy_JSClearTimeoutJS, OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_controller_SetTimeoutForLoadComplete_JSSetTimeoutForLoadCompleteJS, OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_controller_OnInitialize_JSRegisterListenersJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                triggerOnLoadComplete$Action: function(redirectURLIn) {
                    redirectURLIn = (redirectURLIn === undefined) ? "" : redirectURLIn;
                    return controller.executeActionInsideJSNode(controller._triggerOnLoadComplete$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(redirectURLIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "TriggerOnLoadComplete");
                },
                triggerOnUpgradeProgress$Action: function(completedIn, totalIn) {
                    completedIn = (completedIn === undefined) ? 0 : completedIn;
                    totalIn = (totalIn === undefined) ? 0 : totalIn;
                    return controller.executeActionInsideJSNode(controller._triggerOnUpgradeProgress$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(completedIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(totalIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "TriggerOnUpgradeProgress");
                },
                setTimeoutForLoadComplete$Action: function(timeoutValueMsIn) {
                    timeoutValueMsIn = (timeoutValueMsIn === undefined) ? 0 : timeoutValueMsIn;
                    return controller.executeActionInsideJSNode(controller._setTimeoutForLoadComplete$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(timeoutValueMsIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "SetTimeoutForLoadComplete");
                }
            };
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        Controller.prototype.translationResources = OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_TranslationsResources;
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._triggerOnUpgradeProgress$Action = function(completedIn, totalIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("TriggerOnUpgradeProgress");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.ApplicationLoadEvents.TriggerOnUpgradeProgress$vars"))());
            vars.value.completedInLocal = completedIn;
            vars.value.totalInLocal = totalIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:RqMqHwpiAke_+FcFSnn0fg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.RqMqHwpiAke_+FcFSnn0fg:BK_PAlXBJNHLli4ldMmYuA", "OutSystemsUI_2_23", "TriggerOnUpgradeProgress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:dqYgtPLrvUG_uinULDTEDQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:7lJa2zMxqk6tDUHAhjtcIg", callContext.id);
                // Trigger Event: OnUpgradeProgress
                return controller.onUpgradeProgress$Action(vars.value.completedInLocal, vars.value.totalInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ECF6JbpUu0KfWmvsu2YhIQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:RqMqHwpiAke_+FcFSnn0fg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:RqMqHwpiAke_+FcFSnn0fg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.ApplicationLoadEvents.TriggerOnUpgradeProgress$vars", [{
            name: "Completed",
            attrName: "completedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "Total",
            attrName: "totalInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
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
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:YaeqIflMjkiZePD0rmCN_g:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.YaeqIflMjkiZePD0rmCN_g:9TEUNnttb6bhYTPdb5Mudw", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:wWfwLJvx2UmcxtS9t805Lg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:61SX6KAvLkeezANUJ52vzg", callContext.id);
                // Clears the timeout set on the initialize event.
                controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_controller_OnDestroy_JSClearTimeoutJS, "JSClearTimeout", "OnDestroy", {
                    TimeoutId: OS.DataConversion.JSNodeParamConverter.to(model.variables.timeoutIdVar, OS.DataTypes.DataTypes.Integer),
                    IntervalId: OS.DataConversion.JSNodeParamConverter.to(model.variables.intervalIdVar, OS.DataTypes.DataTypes.Integer)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:sevZUrgst0Gk+gehc5N2pw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:YaeqIflMjkiZePD0rmCN_g", callContext.id);
            }

        };
        Controller.prototype._triggerOnLoadComplete$Action = function(redirectURLIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("TriggerOnLoadComplete");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.ApplicationLoadEvents.TriggerOnLoadComplete$vars"))());
            vars.value.redirectURLInLocal = redirectURLIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:+Skia0zMp0OdhlLXzyENOA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.+Skia0zMp0OdhlLXzyENOA:7hrFWyFLZKwtpN4vKDR2Tw", "OutSystemsUI_2_23", "TriggerOnLoadComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:lVdLXzveHEi6fq0v1_kRfQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zaCq6hHgA0+zTve2EVUlDA", callContext.id);
                // Trigger Event: OnLoadComplete
                return controller.onLoadComplete$Action(vars.value.redirectURLInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:YSNMvtmZkU2xMT_Kcj+jSg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:+Skia0zMp0OdhlLXzyENOA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:+Skia0zMp0OdhlLXzyENOA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.ApplicationLoadEvents.TriggerOnLoadComplete$vars", [{
            name: "RedirectURL",
            attrName: "redirectURLInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._setTimeoutForLoadComplete$Action = function(timeoutValueMsIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetTimeoutForLoadComplete");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.ApplicationLoadEvents.SetTimeoutForLoadComplete$vars"))());
            vars.value.timeoutValueMsInLocal = timeoutValueMsIn;
            var jSSetTimeoutForLoadCompleteJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.jSSetTimeoutForLoadCompleteJSResult = jSSetTimeoutForLoadCompleteJSResult;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:WvzlkyHJlUqm15RrIEpjRQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.WvzlkyHJlUqm15RrIEpjRQ:r6C__2dy14lnZbN3iXU13A", "OutSystemsUI_2_23", "SetTimeoutForLoadComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:jT27qHzUQkuuDFBU2B2MHA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qVYdeWG8_EGDsV7QRc3jGQ", callContext.id);
                // Set the timeout function for the OnLoadComplete event.
                jSSetTimeoutForLoadCompleteJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_controller_SetTimeoutForLoadComplete_JSSetTimeoutForLoadCompleteJS, "JSSetTimeoutForLoadComplete", "SetTimeoutForLoadComplete", {
                    TimeoutValueMs: OS.DataConversion.JSNodeParamConverter.to(vars.value.timeoutValueMsInLocal, OS.DataTypes.DataTypes.Integer),
                    TimeoutId: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.ApplicationLoadEvents.SetTimeoutForLoadComplete$jSSetTimeoutForLoadCompleteJSResult"))();
                    jsNodeResult.timeoutIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.TimeoutId, OS.DataTypes.DataTypes.Integer);
                    return jsNodeResult;
                }, {
                    TriggerOnLoadComplete: controller.clientActionProxies.triggerOnLoadComplete$Action
                }, {});
                // Store TimeoutId
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:gpSIidN420u6IKxgCmQAaA", callContext.id);
                // TimeoutId = JSSetTimeoutForLoadComplete.TimeoutId
                model.variables.timeoutIdVar = jSSetTimeoutForLoadCompleteJSResult.value.timeoutIdOut;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Dka3NbiutUq7Z6xSgSFB3w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:WvzlkyHJlUqm15RrIEpjRQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.ApplicationLoadEvents.SetTimeoutForLoadComplete$vars", [{
            name: "TimeoutValueMs",
            attrName: "timeoutValueMsInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.ApplicationLoadEvents.SetTimeoutForLoadComplete$jSSetTimeoutForLoadCompleteJSResult", [{
            name: "TimeoutId",
            attrName: "timeoutIdOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var jSRegisterListenersJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.jSRegisterListenersJSResult = jSRegisterListenersJSResult;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:F8tpsFSD_UKGnUVr9ud4bA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.F8tpsFSD_UKGnUVr9ud4bA:oQoEhT9r4Btajg4h1xI9Ew", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:dTId22GxXkqJF26JapieWw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:iW7rR+64JU29M2auV6jnZQ", callContext.id);
                // Register all the event listeners.
                jSRegisterListenersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_controller_OnInitialize_JSRegisterListenersJS, "JSRegisterListeners", "OnInitialize", {
                    MinDisplayTimeMs: OS.DataConversion.JSNodeParamConverter.to(model.variables.minimumDisplayTimeMsIn, OS.DataTypes.DataTypes.Integer),
                    IntervalId: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.ApplicationLoadEvents.OnInitialize$jSRegisterListenersJSResult"))();
                    jsNodeResult.intervalIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IntervalId, OS.DataTypes.DataTypes.Integer);
                    return jsNodeResult;
                }, {
                    TriggerOnUpgradeProgress: controller.clientActionProxies.triggerOnUpgradeProgress$Action,
                    SetTimeoutForLoadComplete: controller.clientActionProxies.setTimeoutForLoadComplete$Action
                }, {});
                // Store IntervalId
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:VypNxhIkUEO+6scdOVv+_w", callContext.id);
                // IntervalId = JSRegisterListeners.IntervalId
                model.variables.intervalIdVar = jSRegisterListenersJSResult.value.intervalIdOut;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:QPSDH0Y5rkaQvGw8vhmeAw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:F8tpsFSD_UKGnUVr9ud4bA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.ApplicationLoadEvents.OnInitialize$jSRegisterListenersJSResult", [{
            name: "IntervalId",
            attrName: "intervalIdOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);

        Controller.prototype.triggerOnUpgradeProgress$Action = function(completedIn, totalIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._triggerOnUpgradeProgress$Action, callContext, completedIn, totalIn);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.triggerOnLoadComplete$Action = function(redirectURLIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._triggerOnLoadComplete$Action, callContext, redirectURLIn);

        };
        Controller.prototype.setTimeoutForLoadComplete$Action = function(timeoutValueMsIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setTimeoutForLoadComplete$Action, callContext, timeoutValueMsIn);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onUpgradeProgress$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onLoadComplete$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:a5KAUBz0oD+nYy3jX8gKmw", "OutSystemsUI_2_23", "Private", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:jkMO6fNONk68dfPLs8KxXg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg:ibZ6CU4cy03+wVh9X_KwkQ", "OutSystemsUI_2_23", "ApplicationLoadEvents", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:jkMO6fNONk68dfPLs8KxXg", callContext.id);
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:IUOdI7QmkEyzLmZAA68__Q", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Private/ApplicationLoadEvents On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Private/ApplicationLoadEvents On Destroy");
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
            return OutSystemsUI_2_23Controller.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUI_2_23LanguageResources);
});
define("OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$controller.OnDestroy.JSClearTimeoutJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.TimeoutId) {
            clearTimeout($parameters.TimeoutId);
        }

        if ($parameters.IntervalId) {
            clearInterval($parameters.IntervalId);
        }

    };
});
define("OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$controller.SetTimeoutForLoadComplete.JSSetTimeoutForLoadCompleteJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const timeout = $parameters.TimeoutValueMs;

        let timerId = setTimeout(function() {
            $actions.TriggerOnLoadComplete && $actions.TriggerOnLoadComplete(window.location.href);
        }, timeout);

        // Assign the timer ID to the Output Parameter
        // OutSystems sees this assignment immediately and persists 'timerId' 
        // to the screen's Local Variable before the action completes
        $parameters.TimeoutId = timerId;

    };
});
define("OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$controller.OnInitialize.JSRegisterListenersJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const start = new Date();

        // Check if the app is currently being upgraded
        let isUpgrading = $public.ApplicationLifecycle.isUpgradingVersion();

        let progressCallback = function(loaded, total) {
            $actions.TriggerOnUpgradeProgress && $actions.TriggerOnUpgradeProgress(loaded, total);
        };

        let finishCallback = function() {
            const elapsedMs = new Date() - start;
            // Calculate the required delay time
            const timeout = Math.max($parameters.MinDisplayTimeMs - elapsedMs, 0);

            // Call the new action with the calculated timeout
            $actions.SetTimeoutForLoadComplete(timeout);
        };

        // When there is no upgrade, we need to mimic the progress using the MinDisplayTimeMs
        if (!isUpgrading) {
            let loaded = 0;
            const interval = Math.ceil($parameters.MinDisplayTimeMs / 10);

            let timerId = setInterval(function() {
                progressCallback(++loaded, 10);
                if (loaded === 10) {
                    clearInterval(timerId);
                }
            }, interval);

            // Return the interval ID to be stored
            $parameters.IntervalId = timerId;
        }

        $public.ApplicationLifecycle.listen({
            // When there is no upgrade, we'll provide the feedback
            onUpgradeProgress: isUpgrading ? progressCallback : null,
            onLoadComplete: finishCallback
        });

    };
});

define("OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "y_QGn_nTNkKk5ifahW1jPA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.completedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "vBDB5qcszk+1Sp+OHgtCiw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.totalInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "61SX6KAvLkeezANUJ52vzg": {
            getter: function(varBag, idService) {
                return varBag.jSClearTimeoutJSResult.value;
            }
        },
        "I+VKpnJej0iaD6F8iscSXA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.redirectURLInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "IUONoQUq_UeFbglTlrvwYQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.timeoutValueMsInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "qVYdeWG8_EGDsV7QRc3jGQ": {
            getter: function(varBag, idService) {
                return varBag.jSSetTimeoutForLoadCompleteJSResult.value;
            }
        },
        "iW7rR+64JU29M2auV6jnZQ": {
            getter: function(varBag, idService) {
                return varBag.jSRegisterListenersJSResult.value;
            }
        },
        "KxH5Ch6XRUK_VGpJ_LJ+VQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.timeoutIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "6L4oV8bUqE+1X2FKsqTNjQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.intervalIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "024sl3u8qUejQwcB4vBCtQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.minimumDisplayTimeMsIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});