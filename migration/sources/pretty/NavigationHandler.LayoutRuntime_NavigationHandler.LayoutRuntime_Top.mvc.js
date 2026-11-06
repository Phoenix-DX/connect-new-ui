define("NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$model", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$AddDefaultBackNavigationHandlers"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController) {
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
    return new OS.Model.ModelFactory(Model, "LayoutRuntime_NavigationHandler.LayoutRuntime_Top");
});
define("NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$model", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller", "NavigationHandler.controller$AddDefaultBackNavigationHandlers"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_model, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_controller) {
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
        View.displayName = "LayoutRuntime_NavigationHandler.LayoutRuntime_Top";
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
                return NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_controller;
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
define("NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.languageResources", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$debugger", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnInitialize.InitializeQueueJS", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS", "NavigationHandler.controller$AddDefaultBackNavigationHandlers"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandlerLanguageResources, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_Debugger, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_controller_OnInitialize_InitializeQueueJS, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_controller_OnDestroy_ExecuteDestroyCallbackJS) {
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
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var initializeQueueJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.initializeQueueJSResult = initializeQueueJSResult;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:vFaSc8AfRkSb4HVNZcBKBw:/NRWebFlows.lUAjDGeq5kmnr3YjjIASow/NodesShownInESpaceTree.AU1l+iTFwk6ti1Dnl_nurQ/ClientActions.vFaSc8AfRkSb4HVNZcBKBw:7v7qcQvomI_cn+dsZpFnAg", "NavigationHandler", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:bRODuFg2eUqjbtMQBpSaWw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:WTGJH82sqEq6q7qJuF9bSA", callContext.id);
                initializeQueueJSResult.value = controller.safeExecuteJSNode(NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_controller_OnInitialize_InitializeQueueJS, "InitializeQueue", "OnInitialize", {
                    DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.OnInitialize$initializeQueueJSResult"))();
                    jsNodeResult.destroyCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DestroyCallback, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {}, {});
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:55ZSFS+qJkePD990WzvpXQ", callContext.id);
                // Execute Action: AddDefaultBackNavigationHandlers
                NavigationHandlerController.default.addDefaultBackNavigationHandlers$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:k5KLY_kq+kSURNL36kf0tg", callContext.id);
                // DestroyCallback = InitializeQueue.DestroyCallback
                model.variables.destroyCallbackVar = initializeQueueJSResult.value.destroyCallbackOut;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:XhD0Bic9QUCnfLT0zxclHw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:vFaSc8AfRkSb4HVNZcBKBw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.OnInitialize$initializeQueueJSResult", [{
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
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:1liF9ALk+U6WNDgGcChfCQ:/NRWebFlows.lUAjDGeq5kmnr3YjjIASow/NodesShownInESpaceTree.AU1l+iTFwk6ti1Dnl_nurQ/ClientActions.1liF9ALk+U6WNDgGcChfCQ:UCPU0t_SlNGqcoaHxlAzpg", "NavigationHandler", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:EaNollm1eU+VXSJO3hu06Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:EoHKRRgyB0OVQpVx_F10CA", callContext.id);
                controller.safeExecuteJSNode(NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_controller_OnDestroy_ExecuteDestroyCallbackJS, "ExecuteDestroyCallback", "OnDestroy", {
                    DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(model.variables.destroyCallbackVar, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:0Qv9vWVzjUaBStYxX2iU0g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:1liF9ALk+U6WNDgGcChfCQ", callContext.id);
            }

        };

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:lUAjDGeq5kmnr3YjjIASow:/NRWebFlows.lUAjDGeq5kmnr3YjjIASow:Byhig2LPk7U3djm+t7mldA", "NavigationHandler", "LayoutRuntime_NavigationHandler", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:AU1l+iTFwk6ti1Dnl_nurQ:/NRWebFlows.lUAjDGeq5kmnr3YjjIASow/NodesShownInESpaceTree.AU1l+iTFwk6ti1Dnl_nurQ:ypT0YKxiMUyiSqadydFqqA", "NavigationHandler", "LayoutRuntime_Top", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:AU1l+iTFwk6ti1Dnl_nurQ", callContext.id);
            OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:lUAjDGeq5kmnr3YjjIASow", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "LayoutRuntime_NavigationHandler/LayoutRuntime_Top On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "LayoutRuntime_NavigationHandler/LayoutRuntime_Top On Destroy");
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
define("NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnInitialize.InitializeQueueJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        // Make sure to destroy an old queue instance before creating a new one.
        // For example when transitioning from screen A to B, the B.OnInitialize() is
        // executed before A.OnDestroy().
        if (window.dx && window.dx.Navigation && window.dx.Navigation.BeforeBackNavigation && window.dx.Navigation.BeforeBackNavigation.destroy) {
            window.dx.Navigation.BeforeBackNavigation.destroy();
        }



        // Namespace window.dx.Navigation.BeforeBackNavigation
        window.dx = window.dx || {};
        window.dx.Navigation = window.dx.Navigation || {};
        window.dx.Navigation.BeforeBackNavigation = window.dx.Navigation.BeforeBackNavigation || {};


        // Private
        var queue = [];



        // Adds a callback to the queue, with a given priority
        window.dx.Navigation.BeforeBackNavigation.add = function(callback, priority) {
            var item = {
                callback: callback,
                priority: priority
            };

            // Insert item in the correct position on the queue
            for (var i = 0; i < queue.length; i++) {
                if (queue[i].priority < item.priority) {
                    queue.splice(i, 0, item);
                    return;
                }
            }

            queue.push(item);
        };


        // Removes a callback from the queue
        window.dx.Navigation.BeforeBackNavigation.remove = function(callback) {
            for (var i = 0; i < queue.length; i++) {
                if (queue[i].callback == callback) {
                    queue.splice(i, 1);
                    return;
                }
            }
        };





        // Execute all callbacks in priority order, until the event is prevented
        var onBeforeBackNavigation = function(evt) {
            for (var i = 0; i < queue.length && !evt.defaultPrevented; i++) {
                queue[i].callback(evt);
            }
        };


        window.addEventListener("dx-before-back-navigation", onBeforeBackNavigation);


        // Destroy callback
        var destroyed = false;
        window.dx.Navigation.BeforeBackNavigation.destroy = function() {
            if (!destroyed) {
                destroyed = true;
                window.removeEventListener("dx-before-back-navigation", onBeforeBackNavigation);
                delete window.dx.Navigation.BeforeBackNavigation;
            }
        };

        $parameters.DestroyCallback = window.dx.Navigation.BeforeBackNavigation.destroy;
    };
});
define("NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.DestroyCallback) {
            $parameters.DestroyCallback();
        }
    };
});

define("NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "WTGJH82sqEq6q7qJuF9bSA": {
            getter: function(varBag, idService) {
                return varBag.initializeQueueJSResult.value;
            }
        },
        "EoHKRRgyB0OVQpVx_F10CA": {
            getter: function(varBag, idService) {
                return varBag.executeDestroyCallbackJSResult.value;
            }
        },
        "USTrdtYtsEiQvadkckLlqQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.destroyCallbackVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});