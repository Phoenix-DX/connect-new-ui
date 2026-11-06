define("NavigationHandler.NavigationHandler.NavigationHandler.mvc$model", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model"], function(OutSystems, NavigationHandlerModel) {
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
                }, false)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.fromStructure = function(str) {
            return new VariablesRecord(new VariablesRecord.RecordClass({
                destroyCallbackVar: OS.DataTypes.ImmutableBase.getData(str)
            }));
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

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "NavigationHandler.NavigationHandler");
});
define("NavigationHandler.NavigationHandler.NavigationHandler.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.NavigationHandler.NavigationHandler.mvc$model", "NavigationHandler.NavigationHandler.NavigationHandler.mvc$controller"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_NavigationHandler_NavigationHandler_mvc_model, NavigationHandler_NavigationHandler_NavigationHandler_mvc_controller) {
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
        View.displayName = "NavigationHandler.NavigationHandler";
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
                return NavigationHandler_NavigationHandler_NavigationHandler_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return NavigationHandler_NavigationHandler_NavigationHandler_mvc_controller;
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
define("NavigationHandler.NavigationHandler.NavigationHandler.mvc$controller", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.languageResources", "NavigationHandler.NavigationHandler.NavigationHandler.mvc$debugger", "NavigationHandler.NavigationHandler.NavigationHandler.mvc$controller.OnInitialize.AddEventListenerJS", "NavigationHandler.NavigationHandler.NavigationHandler.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandlerLanguageResources, NavigationHandler_NavigationHandler_NavigationHandler_mvc_Debugger, NavigationHandler_NavigationHandler_NavigationHandler_mvc_controller_OnInitialize_AddEventListenerJS, NavigationHandler_NavigationHandler_NavigationHandler_mvc_controller_OnDestroy_ExecuteDestroyCallbackJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                triggerNavigation$Action: function(navigationEventIn) {
                    navigationEventIn = (navigationEventIn === undefined) ? null : navigationEventIn;
                    return controller.executeActionInsideJSNode(controller._triggerNavigation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(navigationEventIn, OS.DataTypes.DataTypes.Object)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "TriggerNavigation");
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
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var addEventListenerJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.addEventListenerJSResult = addEventListenerJSResult;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:51UAjLhhw0CLGQFRFjVCcg:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw/NodesShownInESpaceTree.G3kxFcEDd0yy6hCkr_1rug/ClientActions.51UAjLhhw0CLGQFRFjVCcg:SBqvFYJv9T0t_AnjwmAPyA", "NavigationHandler", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:_6phqwCdGkeNnxDJHdfTfQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:+TDDGoirZUySUiEYz9zUDw", callContext.id);
                addEventListenerJSResult.value = controller.safeExecuteJSNode(NavigationHandler_NavigationHandler_NavigationHandler_mvc_controller_OnInitialize_AddEventListenerJS, "AddEventListener", "OnInitialize", {
                    DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("NavigationHandler.NavigationHandler.NavigationHandler.OnInitialize$addEventListenerJSResult"))();
                    jsNodeResult.destroyCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DestroyCallback, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    TriggerNavigation: controller.clientActionProxies.triggerNavigation$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:0HAckoxTVUK50kZYTmYvgQ", callContext.id);
                // DestroyCallback = AddEventListener.DestroyCallback
                model.variables.destroyCallbackVar = addEventListenerJSResult.value.destroyCallbackOut;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:qh_21DACOkuhA2ufQu0KyA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:51UAjLhhw0CLGQFRFjVCcg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("NavigationHandler.NavigationHandler.NavigationHandler.OnInitialize$addEventListenerJSResult", [{
            name: "DestroyCallback",
            attrName: "destroyCallbackOut",
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
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:l8okvSYmdEuzNMZ1iQHgQw:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw/NodesShownInESpaceTree.G3kxFcEDd0yy6hCkr_1rug/ClientActions.l8okvSYmdEuzNMZ1iQHgQw:nHsDBv2BtVSFd_OSLLvm0Q", "NavigationHandler", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:NBSGpngH4kG8Y_iU__qv7Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:RC32nQR3pUWjuYA6oBi6bQ", callContext.id);
                controller.safeExecuteJSNode(NavigationHandler_NavigationHandler_NavigationHandler_mvc_controller_OnDestroy_ExecuteDestroyCallbackJS, "ExecuteDestroyCallback", "OnDestroy", {
                    DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(model.variables.destroyCallbackVar, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:b19hI8YF3Uqx_NUweqe75g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:l8okvSYmdEuzNMZ1iQHgQw", callContext.id);
            }

        };
        Controller.prototype._triggerNavigation$Action = function(navigationEventIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("TriggerNavigation");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("NavigationHandler.NavigationHandler.NavigationHandler.TriggerNavigation$vars"))());
            vars.value.navigationEventInLocal = navigationEventIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:4FbsvZZH3EyL8O7YWlhfog:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw/NodesShownInESpaceTree.G3kxFcEDd0yy6hCkr_1rug/ClientActions.4FbsvZZH3EyL8O7YWlhfog:wu0v4V9lAZ0ASULvWRzGOw", "NavigationHandler", "TriggerNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:K1ZhpAJh60KyOmpcDYi0yA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:+AMmz8EKLkWV0opWi2Ak_w", callContext.id);
                // Trigger Event: Navigation
                return controller.navigation$Action(vars.value.navigationEventInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:XeTJDbRW6kGik5GO6Jwg7w", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:4FbsvZZH3EyL8O7YWlhfog", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:4FbsvZZH3EyL8O7YWlhfog", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("NavigationHandler.NavigationHandler.NavigationHandler.TriggerNavigation$vars", [{
            name: "NavigationEvent",
            attrName: "navigationEventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.triggerNavigation$Action = function(navigationEventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._triggerNavigation$Action, callContext, navigationEventIn);

        };
        Controller.prototype.navigation$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:n9J+NH9oRk2hM6l4rZAcfw:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw:6z7_12WLeKELuwUmIrOJuQ", "NavigationHandler", "NavigationHandler", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:G3kxFcEDd0yy6hCkr_1rug:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw/NodesShownInESpaceTree.G3kxFcEDd0yy6hCkr_1rug:Uj7LunVmUa8_oUV9zZE0QA", "NavigationHandler", "NavigationHandler", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:G3kxFcEDd0yy6hCkr_1rug", callContext.id);
            OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:n9J+NH9oRk2hM6l4rZAcfw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "NavigationHandler/NavigationHandler On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "NavigationHandler/NavigationHandler On Destroy");
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
define("NavigationHandler.NavigationHandler.NavigationHandler.mvc$controller.OnInitialize.AddEventListenerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window.addEventListener("dx-before-navigation", $actions.TriggerNavigation);

        $parameters.DestroyCallback = function() {
            window.removeEventListener("dx-before-navigation", $actions.TriggerNavigation);
        };
    };
});
define("NavigationHandler.NavigationHandler.NavigationHandler.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.DestroyCallback) {
            $parameters.DestroyCallback();
        }
    };
});

define("NavigationHandler.NavigationHandler.NavigationHandler.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "+TDDGoirZUySUiEYz9zUDw": {
            getter: function(varBag, idService) {
                return varBag.addEventListenerJSResult.value;
            }
        },
        "RC32nQR3pUWjuYA6oBi6bQ": {
            getter: function(varBag, idService) {
                return varBag.executeDestroyCallbackJSResult.value;
            }
        },
        "GoLAQWvulEies8o3uhkMvQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.navigationEventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "JaITmHc75UmVnWev8L+9mw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.destroyCallbackVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});