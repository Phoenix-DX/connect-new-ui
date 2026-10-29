define("UBTConnect.App_PIN.PINUnlock.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBTConnect.App_PIN.Block_PINUnlock.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.controller$GetResumeLoginLink", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTJavaScriptUtilsController, UBTConnect_App_PIN_Block_PINUnlock_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [].concat(_super.attributesToDeclare.call(this));
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
                    Model._hasValidationWidgetsValue = (UBTConnect_App_PIN_Block_PINUnlock_mvcModel.hasValidationWidgets || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "App_PIN.PINUnlock");
});
define("UBTConnect.App_PIN.PINUnlock.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_PIN.PINUnlock.mvc$model", "UBTConnect.App_PIN.PINUnlock.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_PIN.Block_PINUnlock.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.controller$GetResumeLoginLink", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTJavaScriptUtilsController, React, OSView, UBTConnect_App_PIN_PINUnlock_mvc_model, UBTConnect_App_PIN_PINUnlock_mvc_controller, UBTConnectClientVariables, UBTConnect_App_PIN_Block_PINUnlock_mvc_view, OSWidgets, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "App_PIN.PINUnlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_PIN_Block_PINUnlock_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_PIN_PINUnlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_PIN_PINUnlock_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "PINUnlock";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_PIN_Block_PINUnlock_mvc_view, {
                inputs: {
                    In_ForceVisible: true
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    unlock$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_PIN/Block_PINUnlock Unlock");
                                return controller.block_PINUnlockUnlock$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
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
                    placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
                            inputs: {
                                In_IgnoreLockScreen: true,
                                In_IgnorePolicy: true
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
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.App_PIN.PINUnlock.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_PIN.PINUnlock.mvc$debugger", "UBTConnect.App_PIN.controller", "UBTConnect.controller$GetResumeLoginLink", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTJavaScriptUtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_PIN_PINUnlock_mvc_Debugger, _flow_UBTConnect_App_PINController) {
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
        Controller.prototype._block_PINUnlockUnlock$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Block_PINUnlockUnlock");
            callContext = controller.callContext(callContext);
            var getResumeLoginLinkVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getResumeLoginLinkVar = getResumeLoginLinkVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:cFbWdabiBkGTUVaoU_qQQw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.jjFOE_0Cp0GDoYdCLu1pHw/ClientActions.cFbWdabiBkGTUVaoU_qQQw:MrO+eM7gF7Km5xqpiP8yZw", "UBTConnect", "Block_PINUnlockUnlock", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dE_2xEWxx0qepyQAV7T+Aw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kLYGHYkNjU2TIRcJaz6gDA", callContext.id);
                // Execute Action: GetResumeLoginLink
                getResumeLoginLinkVar.value = UBTConnectController.default.getResumeLoginLink$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:st_SirecGESQ8iUHllbCtA", callContext.id);
                // Execute Action: ReplaceOnUpcomingNavigation
                NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eo9V_ekbv0WOJD8vigNFJg", callContext.id) && ((getResumeLoginLinkVar.value.uRLOut) !== ("")))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vbUIkRlic0mRigWbkRq8AA", callContext.id);
                        // Execute Action: ScreenController_NavigateToPage_ResumeLink
                        model.flush();
                        return UBTJavaScriptUtilsController.default.screenController_NavigateToPage$Action(getResumeLoginLinkVar.value.uRLOut, true, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aJU3ykOsbE6Rr0EN+s9POw", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_AwV_ruC4kCSrd40u9YjnQ", callContext.id);
                        // Execute Action: ScreenController_NavigateToPage_LastURL
                        model.flush();
                        return UBTJavaScriptUtilsController.default.screenController_NavigateToPage$Action(UBTConnectClientVariables.getLastURL(), true, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gFHaO1xWJEOigFOA3rQcmw", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cFbWdabiBkGTUVaoU_qQQw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cFbWdabiBkGTUVaoU_qQQw", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.block_PINUnlockUnlock$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._block_PINUnlockUnlock$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw:bpWaB45r1qkJPgqYmZEd1g", "UBTConnect", "App_PIN", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jjFOE_0Cp0GDoYdCLu1pHw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.jjFOE_0Cp0GDoYdCLu1pHw:2hcBaE7x8wJb5pq+Qbvvlw", "UBTConnect", "PINUnlock", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jjFOE_0Cp0GDoYdCLu1pHw", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_App_PINController.default.handleError(ex, this.callContext());
        };
        Controller.checkPermissions = function() {
            OS.RolesInfo.checkRegistered();
        };
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_PIN.PINUnlock.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "kLYGHYkNjU2TIRcJaz6gDA": {
            getter: function(varBag, idService) {
                return varBag.getResumeLoginLinkVar.value;
            }
        },
        "9zki27++_kaq9pZKrB4XMQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});