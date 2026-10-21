define("Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.model$EventDataRec"], function(OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("RESUME_EVENT_NAME", "rESUME_EVENT_NAMEVar", "RESUME_EVENT_NAME", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ResumeNavigationEventName";
                }, false)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.fromStructure = function(str) {
            return new VariablesRecord(new VariablesRecord.RecordClass({
                rESUME_EVENT_NAMEVar: OS.DataTypes.ImmutableBase.getData(str)
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
    return new OS.Model.ModelFactory(Model, "AndroidAppLinks.AndroidAppLinkOnResumeHandler");
});
define("Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "react", "OutSystems/ReactView/Main", "Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$model", "Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller", "Connect2_AndroidAppLinksPlugin.model$EventDataRec"], function(OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController, React, OSView, Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_model, Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_controller) {
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
        View.displayName = "AndroidAppLinks.AndroidAppLinkOnResumeHandler";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return ["scripts/CommonPlugin.PluginManager.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_controller;
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
define("Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "Connect2_AndroidAppLinksPlugin.languageResources", "Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$debugger", "Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.ResumeNavigationHandler.GetEventPayloadJS", "Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnDestroy.RemoveListenerForPlayerClosedJS", "Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnReady.ResumeNavigationJS", "Connect2_AndroidAppLinksPlugin.model$EventDataRec"], function(OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController, Connect2_AndroidAppLinksPluginLanguageResources, Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_Debugger, Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_controller_ResumeNavigationHandler_GetEventPayloadJS, Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_controller_OnDestroy_RemoveListenerForPlayerClosedJS, Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_controller_OnReady_ResumeNavigationJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                resumeNavigationHandler$Action: function(eventIn) {
                    eventIn = (eventIn === undefined) ? null : eventIn;
                    return controller.executeActionInsideJSNode(controller._resumeNavigationHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventIn, OS.DataTypes.DataTypes.Object)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "ResumeNavigationHandler");
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
        Controller.prototype._resumeNavigationHandler$Action = function(eventIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ResumeNavigationHandler");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.ResumeNavigationHandler$vars"))());
            vars.value.eventInLocal = eventIn;
            var getEventPayloadJSResult = new OS.DataTypes.VariableHolder();
            var jSONDeserializeEventDataVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(Connect2_AndroidAppLinksPluginModel.EventDataRec))());
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getEventPayloadJSResult = getEventPayloadJSResult;
            varBag.jSONDeserializeEventDataVar = jSONDeserializeEventDataVar;
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:X6N4BEk2JUCBDeCtPbCXYw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.Qyf0N0KJu0Gixta0dXamFg/ClientActions.X6N4BEk2JUCBDeCtPbCXYw:xH05X6nZb9RzNBnsIR_MBw", "Connect2_AndroidAppLinksPlugin", "ResumeNavigationHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:wqVmK8ZBX0WomL7_iDWBxQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:lJTqDMXQdUGjIvbKWi23KQ", callContext.id);
                getEventPayloadJSResult.value = controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_controller_ResumeNavigationHandler_GetEventPayloadJS, "GetEventPayload", "ResumeNavigationHandler", {
                    Event: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventInLocal, OS.DataTypes.DataTypes.Object),
                    EventDataJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.ResumeNavigationHandler$getEventPayloadJSResult"))();
                    jsNodeResult.eventDataJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.EventDataJSON, OS.DataTypes.DataTypes.Text);
                    return jsNodeResult;
                }, {}, {});
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:ReNfP+pAJU649lBG9jNHLg", callContext.id);
                // JSON Deserialize: JSONDeserializeEventData
                jSONDeserializeEventDataVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getEventPayloadJSResult.value.eventDataJSONOut, Connect2_AndroidAppLinksPluginModel.EventDataRec, false);
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:7WfdoHs9x0+w4VKtoHvp7w", callContext.id);
                // Trigger Event: ResumeNavigation
                return controller.resumeNavigation$Action(jSONDeserializeEventDataVar.value.dataOut, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:3Qx5fX+6iE+MpDeMGrcabw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:X6N4BEk2JUCBDeCtPbCXYw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:X6N4BEk2JUCBDeCtPbCXYw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.ResumeNavigationHandler$vars", [{
            name: "Event",
            attrName: "eventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.ResumeNavigationHandler$getEventPayloadJSResult", [{
            name: "EventDataJSON",
            attrName: "eventDataJSONOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
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
                OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:TTWZYoAggEC2_KI19e5RIA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.Qyf0N0KJu0Gixta0dXamFg/ClientActions.TTWZYoAggEC2_KI19e5RIA:acmjPM+LSdbhz3uoHFbsiA", "Connect2_AndroidAppLinksPlugin", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:NV1lWuiBwEWNf_Q8byP_EA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:Bol8dkRhf0qE5Wc5bD_gsg", callContext.id);
                controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_controller_OnDestroy_RemoveListenerForPlayerClosedJS, "RemoveListenerForPlayerClosed", "OnDestroy", {
                    PlayerEventName: OS.DataConversion.JSNodeParamConverter.to(model.variables.rESUME_EVENT_NAMEVar, OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {
                    ResumeNavigationHandler: controller.clientActionProxies.resumeNavigationHandler$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:FByJ896_ykKwOjSHUQ2ABA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:TTWZYoAggEC2_KI19e5RIA", callContext.id);
            }

        };
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
                OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:fDg2mn8D00C55KrQJ_MVWw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.Qyf0N0KJu0Gixta0dXamFg/ClientActions.fDg2mn8D00C55KrQJ_MVWw:ROzXbwUmpwU1AkM_GW_ZzQ", "Connect2_AndroidAppLinksPlugin", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:LapdgpHAB02kumCH2bCPIA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:edwqterfVk6iZpIT8NaAtA", callContext.id);
                controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_controller_OnReady_ResumeNavigationJS, "ResumeNavigation", "OnReady", {
                    EventName: OS.DataConversion.JSNodeParamConverter.to(model.variables.rESUME_EVENT_NAMEVar, OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {
                    ResumeNavigationHandler: controller.clientActionProxies.resumeNavigationHandler$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:KFf8JNjPlkmv5w4O4ivvSQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:fDg2mn8D00C55KrQJ_MVWw", callContext.id);
            }

        };

        Controller.prototype.resumeNavigationHandler$Action = function(eventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._resumeNavigationHandler$Action, callContext, eventIn);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.resumeNavigation$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:hRpV83l3bf9ggj8TGPWJaQ", "Connect2_AndroidAppLinksPlugin", "AndroidAppLinks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:Qyf0N0KJu0Gixta0dXamFg:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.Qyf0N0KJu0Gixta0dXamFg:I81G4Cj7cWADvebk1TJduw", "Connect2_AndroidAppLinksPlugin", "AndroidAppLinkOnResumeHandler", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:Qyf0N0KJu0Gixta0dXamFg", callContext.id);
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:fWtJs57lI0qCTlwkcDoxDA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "AndroidAppLinks/AndroidAppLinkOnResumeHandler On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "AndroidAppLinks/AndroidAppLinkOnResumeHandler On Destroy");
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
            return Connect2_AndroidAppLinksPluginController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_AndroidAppLinksPluginLanguageResources);
});
define("Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.ResumeNavigationHandler.GetEventPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.EventDataJSON = JSON.stringify($parameters.Event.detail);
    };
});
define("Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnDestroy.RemoveListenerForPlayerClosedJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window.removeEventListener($parameters.PlayerEventName, $actions.ResumeNavigationHandler);
    };
});
define("Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$controller.OnReady.ResumeNavigationJS", [], function() {
    return function($parameters, $actions, $roles, $public) {

        window.addEventListener($parameters.EventName, $actions.ResumeNavigationHandler);
    };
});

define("Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "zunnsrNocECWdQkumQYgEQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "ReNfP+pAJU649lBG9jNHLg": {
            getter: function(varBag, idService) {
                return varBag.jSONDeserializeEventDataVar.value;
            }
        },
        "lJTqDMXQdUGjIvbKWi23KQ": {
            getter: function(varBag, idService) {
                return varBag.getEventPayloadJSResult.value;
            }
        },
        "Bol8dkRhf0qE5Wc5bD_gsg": {
            getter: function(varBag, idService) {
                return varBag.removeListenerForPlayerClosedJSResult.value;
            }
        },
        "edwqterfVk6iZpIT8NaAtA": {
            getter: function(varBag, idService) {
                return varBag.resumeNavigationJSResult.value;
            }
        },
        "Q2n2LLzewUiMTweL5tgQOw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.rESUME_EVENT_NAMEVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});