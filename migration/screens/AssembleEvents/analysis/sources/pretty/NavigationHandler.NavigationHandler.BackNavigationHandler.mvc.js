define("NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model"], function(OutSystems, NavigationHandlerModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("DestroyCallback", "destroyCallbackVar", "DestroyCallback", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("Priority", "priorityIn", "Priority", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("_priorityInDataFetchStatus", "_priorityInDataFetchStatus", "_priorityInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("Priority" in inputs) {
                this.variables.priorityIn = inputs.Priority;
                if ("_priorityInDataFetchStatus" in inputs) {
                    this.variables._priorityInDataFetchStatus = inputs._priorityInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "NavigationHandler.BackNavigationHandler");
});
define("NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_model, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_controller) {
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
        View.displayName = "NavigationHandler.BackNavigationHandler";
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
                return NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_controller;
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
                return [];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.languageResources", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$debugger", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller.OnDestroy.DestroyJS", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller.OnInitialize.AddBackNavigationHandlerJS"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandlerLanguageResources, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_Debugger, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_controller_OnDestroy_DestroyJS, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_controller_OnInitialize_AddBackNavigationHandlerJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                triggerBackNavigation$Action: function(backNavigationEventIn) {
                    backNavigationEventIn = (backNavigationEventIn === undefined) ? null : backNavigationEventIn;
                    return controller.executeActionInsideJSNode(controller._triggerBackNavigation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(backNavigationEventIn, OS.DataTypes.DataTypes.Object)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "TriggerBackNavigation");
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
        Controller.prototype._triggerBackNavigation$Action = function(backNavigationEventIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("TriggerBackNavigation");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("NavigationHandler.NavigationHandler.BackNavigationHandler.TriggerBackNavigation$vars"))());
            vars.value.backNavigationEventInLocal = backNavigationEventIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:lFlHHWsA5UiaxUHSUF4oRQ:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw/NodesShownInESpaceTree.jWR0AkMxr0ujlDUCo_YWSQ/ClientActions.lFlHHWsA5UiaxUHSUF4oRQ:6NCJTaaVyyh3FvFoDKmhGQ", "NavigationHandler", "TriggerBackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:UVKZDWjIhUOEDbFimglBKQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:M9A1y0sRfEGsGrwnzWifuQ", callContext.id);
                // Trigger Event: BackNavigation
                return controller.backNavigation$Action(vars.value.backNavigationEventInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:CAxPEF1eOkK8qQdGc6RRwg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:lFlHHWsA5UiaxUHSUF4oRQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:lFlHHWsA5UiaxUHSUF4oRQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("NavigationHandler.NavigationHandler.BackNavigationHandler.TriggerBackNavigation$vars", [{
            name: "BackNavigationEvent",
            attrName: "backNavigationEventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
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
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:7t5BWaMqrkalpUDMpOCLhA:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw/NodesShownInESpaceTree.jWR0AkMxr0ujlDUCo_YWSQ/ClientActions.7t5BWaMqrkalpUDMpOCLhA:Pd3fGErx5GGqK1aG00toDA", "NavigationHandler", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:BsHp+lImnUmF2U2ds+3lNg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:z1k1HNUpqEO7zdN2f0K0eg", callContext.id);
                controller.safeExecuteJSNode(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_controller_OnDestroy_DestroyJS, "Destroy", "OnDestroy", {
                    DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(model.variables.destroyCallbackVar, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:rvl_JPOvhEK+I8M4yPu93Q", callContext.id);
                // DestroyCallback = NullObject
                model.variables.destroyCallbackVar = OS.BuiltinFunctions.nullObject();
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:CdwYrlXotEeEXT0a7uAMTQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:7t5BWaMqrkalpUDMpOCLhA", callContext.id);
            }

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
            var addBackNavigationHandlerJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.addBackNavigationHandlerJSResult = addBackNavigationHandlerJSResult;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:65+vndEI00y4D6nyG8_XwQ:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw/NodesShownInESpaceTree.jWR0AkMxr0ujlDUCo_YWSQ/ClientActions.65+vndEI00y4D6nyG8_XwQ:EDLZTqKDA5RgIatxH94sPA", "NavigationHandler", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:ZUD9UF1wokSmPBBzftiMjQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Yzsd8E33qkGUO4UEzWIcIA", callContext.id);
                addBackNavigationHandlerJSResult.value = controller.safeExecuteJSNode(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_controller_OnInitialize_AddBackNavigationHandlerJS, "AddBackNavigationHandler", "OnInitialize", {
                    Priority: OS.DataConversion.JSNodeParamConverter.to(model.variables.priorityIn, OS.DataTypes.DataTypes.Integer),
                    DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("NavigationHandler.NavigationHandler.BackNavigationHandler.OnInitialize$addBackNavigationHandlerJSResult"))();
                    jsNodeResult.destroyCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DestroyCallback, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    TriggerBackNavigation: controller.clientActionProxies.triggerBackNavigation$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:_MfQ889AKkm2UQKCsX0+2Q", callContext.id);
                // DestroyCallback = AddBackNavigationHandler.DestroyCallback
                model.variables.destroyCallbackVar = addBackNavigationHandlerJSResult.value.destroyCallbackOut;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:_ftjxAgPVkChmKmbw+s+3w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:65+vndEI00y4D6nyG8_XwQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("NavigationHandler.NavigationHandler.BackNavigationHandler.OnInitialize$addBackNavigationHandlerJSResult", [{
            name: "DestroyCallback",
            attrName: "destroyCallbackOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

        Controller.prototype.triggerBackNavigation$Action = function(backNavigationEventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._triggerBackNavigation$Action, callContext, backNavigationEventIn);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.backNavigation$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:n9J+NH9oRk2hM6l4rZAcfw:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw:6z7_12WLeKELuwUmIrOJuQ", "NavigationHandler", "NavigationHandler", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:jWR0AkMxr0ujlDUCo_YWSQ:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw/NodesShownInESpaceTree.jWR0AkMxr0ujlDUCo_YWSQ:1E0avOfn5lxoH0BBG26jXA", "NavigationHandler", "BackNavigationHandler", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:jWR0AkMxr0ujlDUCo_YWSQ", callContext.id);
            OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:n9J+NH9oRk2hM6l4rZAcfw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "NavigationHandler/BackNavigationHandler On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "NavigationHandler/BackNavigationHandler On Destroy");
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
            return NavigationHandlerController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, NavigationHandlerLanguageResources);
});
define("NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller.OnDestroy.DestroyJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.DestroyCallback) {
            $parameters.DestroyCallback();
        }
    };
});
define("NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$controller.OnInitialize.AddBackNavigationHandlerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (window.dx && window.dx.Navigation && window.dx.Navigation.BeforeBackNavigation) {
            var beforeBackNavigation = window.dx.Navigation.BeforeBackNavigation;
            beforeBackNavigation.add($actions.TriggerBackNavigation, $parameters.Priority);

            $parameters.DestroyCallback = function() {
                beforeBackNavigation.remove($actions.TriggerBackNavigation);
            };
        }
    };
});

define("NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "P6T0kMQdAkqaIuZaw315lQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.backNavigationEventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "z1k1HNUpqEO7zdN2f0K0eg": {
            getter: function(varBag, idService) {
                return varBag.destroyJSResult.value;
            }
        },
        "Yzsd8E33qkGUO4UEzWIcIA": {
            getter: function(varBag, idService) {
                return varBag.addBackNavigationHandlerJSResult.value;
            }
        },
        "cUCkhB7A4UStXOJBmjet2Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.destroyCallbackVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "0al+BNDlK0iapYBM34HvnA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.priorityIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});