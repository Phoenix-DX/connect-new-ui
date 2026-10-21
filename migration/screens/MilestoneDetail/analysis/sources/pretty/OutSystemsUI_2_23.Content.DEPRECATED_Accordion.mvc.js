define("OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.controller$DEPRECATED_UpdateAccordion"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MultipleItems", "multipleItemsIn", "MultipleItems", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_multipleItemsInDataFetchStatus", "_multipleItemsInDataFetchStatus", "_multipleItemsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("MultipleItems" in inputs) {
                this.variables.multipleItemsIn = inputs.MultipleItems;
                if ("_multipleItemsInDataFetchStatus" in inputs) {
                    this.variables._multipleItemsInDataFetchStatus = inputs._multipleItemsInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Content.DEPRECATED_Accordion");
});
define("OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$model", "OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.controller$DEPRECATED_UpdateAccordion"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_model, OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.DEPRECATED_Accordion";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                extendedProperties: {
                    "data-multiple-items": (model.variables.multipleItemsIn ? "True" : "False"),
                    role: "tablist"
                },
                style: model.getCachedValue(idService.getId("Content.Style"), function() {
                    return ("osui-deprecated accordion" + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$translationsResources", "OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$debugger", "OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$controller.OnReady.CloseAllItemsJS", "OutSystemsUI_2_23.controller$DEPRECATED_UpdateAccordion"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_TranslationsResources, OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_Debugger, OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_controller_OnReady_CloseAllItemsJS) {
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
        Controller.prototype.translationResources = OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_TranslationsResources;
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
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:30qHLqZTe02bjgYrF_z+ng:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.qkmbAVQnl02sb5NgiEwbQQ/ClientActions.30qHLqZTe02bjgYrF_z+ng:m9uGKZIgGEI9mBN_GaN6Jw", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Yvo8bDqyCES2zOG2vpR3yQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CcQpWeRxwE6W+Sr4a80YhA", callContext.id);
                controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_controller_OnReady_CloseAllItemsJS, "CloseAllItems", "OnReady", {
                    WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Content"), OS.DataTypes.DataTypes.Text),
                    MultipleItems: OS.DataConversion.JSNodeParamConverter.to(model.variables.multipleItemsIn, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zLpUyjWXLkGbMjH1DbAz2g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:30qHLqZTe02bjgYrF_z+ng", callContext.id);
            }

        };
        Controller.prototype._onParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnParametersChanged");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:+rCm8aS8wEOPo5zB_FnDxQ:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.qkmbAVQnl02sb5NgiEwbQQ/ClientActions.+rCm8aS8wEOPo5zB_FnDxQ:6N1JtwtGa6d62ej5gkEV7w", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:iSyz2H4JVkWo_0JD8hEeOw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:rmxY7ep6hUuNtKSJPIV5vw", callContext.id);
                // Execute Action: DEPRECATED_UpdateAccordion
                OutSystemsUI_2_23Controller.default.dEPRECATED_UpdateAccordion$Action(idService.getId("Content"), model.variables.multipleItemsIn, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:V5DbPdAbV0KpwmwfvcTM0A", callContext.id);
                // Execute Action: OnReady
                controller._onReady$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:SjYNawgBd0yGGg7W0jhl4Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:+rCm8aS8wEOPo5zB_FnDxQ", callContext.id);
            }

        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:I9m14fELdkiW+b3sqQ+k7Q:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q:AUjgzFQezVYFy+ax1Bu5WA", "OutSystemsUI_2_23", "Content", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:qkmbAVQnl02sb5NgiEwbQQ:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.qkmbAVQnl02sb5NgiEwbQQ:7rtQkLTrHyMAktDA0ogovw", "OutSystemsUI_2_23", "DEPRECATED_Accordion", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:qkmbAVQnl02sb5NgiEwbQQ", callContext.id);
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:I9m14fELdkiW+b3sqQ+k7Q", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Content/DEPRECATED_Accordion On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Content/DEPRECATED_Accordion On Parameters Changed");
                return controller.onParametersChanged$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
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
define("OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$controller.OnReady.CloseAllItemsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var accordion = document.getElementById($parameters.WidgetId);
        var checkAccordionElements = accordion.querySelectorAll(':scope > div > .section-expandable.is--open');

        // Close All but first, if user has multipleItems as false, but more than one section-expandable as Expanded 
        if ($parameters.MultipleItems === false) {
            for (var i = 0; i < checkAccordionElements.length; i++) {
                if (i !== 0) {
                    checkAccordionElements[i].CollapseItem();
                }
            }
        }
    };
});

define("OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "CcQpWeRxwE6W+Sr4a80YhA": {
            getter: function(varBag, idService) {
                return varBag.closeAllItemsJSResult.value;
            }
        },
        "kF2hT1M3lEm_o8HBSVq_wg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.multipleItemsIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "eFeEgLpoqUWVaU+uF6cekg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "g84QoXjqtEuK7GOs2MBXDw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});