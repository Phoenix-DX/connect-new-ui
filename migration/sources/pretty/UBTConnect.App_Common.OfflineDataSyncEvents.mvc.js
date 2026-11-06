define("UBTConnect.App_Common.OfflineDataSyncEvents.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$model", "UBTConnect.controller$OfflineDataSyncConfiguration", "OutSystemsUI_2_23.controller$ConfigureOfflineDataSync", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$EndOfflineDataSync", "UBTConnect.controller$OfflineDataSync"], function(OutSystems, UBTConnectModel, UBTConnectController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvcModel) {
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
                    Model._hasValidationWidgetsValue = OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "App_Common.OfflineDataSyncEvents");
});
define("UBTConnect.App_Common.OfflineDataSyncEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common.OfflineDataSyncEvents.mvc$model", "UBTConnect.App_Common.OfflineDataSyncEvents.mvc$controller", "UBTConnect.clientVariables", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.controller$OfflineDataSyncConfiguration", "OutSystemsUI_2_23.controller$ConfigureOfflineDataSync", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$EndOfflineDataSync", "UBTConnect.controller$OfflineDataSync"], function(OutSystems, UBTConnectModel, UBTConnectController, OutSystemsUI_2_23Controller, React, OSView, UBTConnect_App_Common_OfflineDataSyncEvents_mvc_model, UBTConnect_App_Common_OfflineDataSyncEvents_mvc_controller, UBTConnectClientVariables, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_view, OSWidgets) {
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
        View.displayName = "App_Common.OfflineDataSyncEvents";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OfflineDataSync.js"];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Common_OfflineDataSyncEvents_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Common_OfflineDataSyncEvents_mvc_controller;
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
                return [React.createElement(OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        onConfigure$Action: function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/OfflineDataSyncCore OnConfigure");
                                controller.onConfigure$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        },
                        onSyncComplete$Action: function(syncUnitIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/OfflineDataSyncCore OnSyncComplete");
                                    return controller.actionHandler_OnSyncCompleteTrigger$Action(syncUnitIn, controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        onSyncError$Action: function(syncUnitIn, errorMessageIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/OfflineDataSyncCore OnSyncError");
                                    return controller.actionHandler_OnSyncErrorTrigger$Action(errorMessageIn, syncUnitIn, controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        onSync$Action: function(syncUnitIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/OfflineDataSyncCore OnSync");
                                controller.onSync$Action(syncUnitIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        },
                        onSyncStart$Action: function(syncUnitIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/OfflineDataSyncCore OnSyncStart");
                                    return controller.actionHandler_OnSyncStartTrigger$Action(syncUnitIn, controller.callContext(eventHandlerContext));
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
                    _dependencies: []
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_Common.OfflineDataSyncEvents.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "OutSystemsUI_2_23.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common.OfflineDataSyncEvents.mvc$debugger", "UBTConnect.controller$OfflineDataSyncConfiguration", "OutSystemsUI_2_23.controller$ConfigureOfflineDataSync", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$EndOfflineDataSync", "UBTConnect.controller$OfflineDataSync"], function(OutSystems, UBTConnectModel, UBTConnectController, OutSystemsUI_2_23Controller, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_OfflineDataSyncEvents_mvc_Debugger) {
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
        Controller.prototype._onConfigure$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnConfigure");
            callContext = controller.callContext(callContext);
            var offlineDataSyncConfigurationVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.offlineDataSyncConfigurationVar = offlineDataSyncConfigurationVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JonlSVELgkCncEKjwK6wQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA/ClientActions.JonlSVELgkCncEKjwK6wQA:ezB_DYMYCsbMwdH_W1JADQ", "UBTConnect", "OnConfigure", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0FU2892Sr0W7xE3R5JpbEg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R1deubojZ0GAYWB4g_vd5Q", callContext.id);
                // Execute Action: OfflineDataSyncConfiguration
                offlineDataSyncConfigurationVar.value = UBTConnectController.default.offlineDataSyncConfiguration$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oRJTxJxG90+lPByuI8vBSg", callContext.id);
                // Execute Action: ConfigureOfflineDataSync
                OutSystemsUI_2_23Controller.default.configureOfflineDataSync$Action(offlineDataSyncConfigurationVar.value.syncOnOnlineOut, offlineDataSyncConfigurationVar.value.syncOnResumeOut, offlineDataSyncConfigurationVar.value.retryOnErrorOut, offlineDataSyncConfigurationVar.value.retryIntervalInSecondsOut, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nUTWzH78YEibqPE+f+Opnw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JonlSVELgkCncEKjwK6wQA", callContext.id);
            }

        };
        Controller.prototype._onSync$Action = function(syncUnitIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnSync");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Common.OfflineDataSyncEvents.OnSync$vars"))());
            vars.value.syncUnitInLocal = syncUnitIn;
            var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.securityExceptionVar = securityExceptionVar;
            varBag.allExceptionsVar = allExceptionsVar;
            try {
                try {
                    OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:erFCe_9bk0yXrmgdC9sRBw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA/ClientActions.erFCe_9bk0yXrmgdC9sRBw:ctqz50vmXAz5usfSRReFDA", "UBTConnect", "OnSync", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VgQg1gRiqkCNkw2YtBrw3A", callContext.id);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6N4lZOClwkyil1pFrSKfgw", callContext.id);
                    // Execute Action: DoOfflineDataSync
                    UBTConnectController.default.offlineDataSync$Action(vars.value.syncUnitInLocal, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4YUeVwNGoUqSBB6ZwRIifA", callContext.id);
                    // Execute Action: EndWithSuccess
                    OutSystemsUI_2_23Controller.default.endOfflineDataSync$Action(false, "", false, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UxqGI78eFEqek+AtnLhh4w", callContext.id);
                } catch (ex) {
                    (function() {
                        OS.Logger.trace("OfflineDataSyncEvents.OnSync", OS.Exceptions.getMessage(ex), ex.name);
                        // Handle Error: SecurityException
                        if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
                            OS.Logger.error(null, ex);
                            securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                            OutSystemsDebugger.handleException(securityExceptionVar.value.exceptionMessageAttr, callContext.id);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gK1P5NwQY0enoHNYiAPh+Q", callContext.id);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UGV6xgbyy0iuwtlBeMBprg", callContext.id);
                            // Execute Action: EndWithSecurityError
                            OutSystemsUI_2_23Controller.default.endOfflineDataSync$Action(true, securityExceptionVar.value.exceptionMessageAttr, false, callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kxDEuq8HLkql_NsEPwB97g", callContext.id);
                            return;

                        }

                        // Handle Error: AllExceptions
                        if (!(OS.Exceptions.isSystem(ex))) {
                            OS.Logger.error(null, ex);
                            allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                            OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D799_HQBikmb_FBdEat4WA", callContext.id);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0aQjMmjzPk2T7ptl8Tfg_w", callContext.id);
                            // Execute Action: EndWithError
                            OutSystemsUI_2_23Controller.default.endOfflineDataSync$Action(true, allExceptionsVar.value.exceptionMessageAttr, true, callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:efqlV+pYt0Kn_bWyxryKIg", callContext.id);
                            return;

                        }

                        throw ex;
                    })();
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:erFCe_9bk0yXrmgdC9sRBw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Common.OfflineDataSyncEvents.OnSync$vars", [{
            name: "SyncUnit",
            attrName: "syncUnitInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._actionHandler_OnSyncCompleteTrigger$Action = function(syncUnitIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ActionHandler_OnSyncCompleteTrigger");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Common.OfflineDataSyncEvents.ActionHandler_OnSyncCompleteTrigger$vars"))());
            vars.value.syncUnitInLocal = syncUnitIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:y_PukdgQyEmsx0Gurh2f_w:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA/ClientActions.y_PukdgQyEmsx0Gurh2f_w:e0T3Or12cjYs4ztNwjLIjA", "UBTConnect", "ActionHandler_OnSyncCompleteTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f9qqYDg_Dk2f0YjWcBEtZw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Py_yozqZ4Eul3A7NumDn6g", callContext.id);
                // Trigger Event: OnSyncComplete
                return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lrDjJYBEEkqFt8OGQIZSeA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:y_PukdgQyEmsx0Gurh2f_w", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:y_PukdgQyEmsx0Gurh2f_w", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Common.OfflineDataSyncEvents.ActionHandler_OnSyncCompleteTrigger$vars", [{
            name: "SyncUnit",
            attrName: "syncUnitInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._actionHandler_OnSyncStartTrigger$Action = function(syncUnitIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ActionHandler_OnSyncStartTrigger");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Common.OfflineDataSyncEvents.ActionHandler_OnSyncStartTrigger$vars"))());
            vars.value.syncUnitInLocal = syncUnitIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hBMxtJk0fkqC8zN+mMU9OA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA/ClientActions.hBMxtJk0fkqC8zN+mMU9OA:HUt3MJsYT_QcjHjWa7ZTWg", "UBTConnect", "ActionHandler_OnSyncStartTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FH9G1eeneEmzaeSYyHwHlg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NuCDWeCbWECgLva7aEtSHw", callContext.id);
                // Trigger Event: OnSyncStart
                return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JdkCxTUkNk2Afo_kHKO66g", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hBMxtJk0fkqC8zN+mMU9OA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hBMxtJk0fkqC8zN+mMU9OA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Common.OfflineDataSyncEvents.ActionHandler_OnSyncStartTrigger$vars", [{
            name: "SyncUnit",
            attrName: "syncUnitInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._actionHandler_OnSyncErrorTrigger$Action = function(errorMessageIn, syncUnitIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ActionHandler_OnSyncErrorTrigger");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Common.OfflineDataSyncEvents.ActionHandler_OnSyncErrorTrigger$vars"))());
            vars.value.errorMessageInLocal = errorMessageIn;
            vars.value.syncUnitInLocal = syncUnitIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:g9dK+IL2FUaKkYYIsTLIfg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA/ClientActions.g9dK+IL2FUaKkYYIsTLIfg:lsogeayj_HvU22siERvpsg", "UBTConnect", "ActionHandler_OnSyncErrorTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vJjXnxJYKE2derWXcBmY_g", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:c_djV9dR502J8LJl3iu9Hw", callContext.id);
                // Trigger Event: OnSyncError
                return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HQmm4Mf7qUqTRqtbdTFQCA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:g9dK+IL2FUaKkYYIsTLIfg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:g9dK+IL2FUaKkYYIsTLIfg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Common.OfflineDataSyncEvents.ActionHandler_OnSyncErrorTrigger$vars", [{
            name: "ErrorMessage",
            attrName: "errorMessageInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "SyncUnit",
            attrName: "syncUnitInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

        Controller.prototype.onConfigure$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onConfigure$Action, callContext);

        };
        Controller.prototype.onSync$Action = function(syncUnitIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onSync$Action, callContext, syncUnitIn);

        };
        Controller.prototype.actionHandler_OnSyncCompleteTrigger$Action = function(syncUnitIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._actionHandler_OnSyncCompleteTrigger$Action, callContext, syncUnitIn);

        };
        Controller.prototype.actionHandler_OnSyncStartTrigger$Action = function(syncUnitIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._actionHandler_OnSyncStartTrigger$Action, callContext, syncUnitIn);

        };
        Controller.prototype.actionHandler_OnSyncErrorTrigger$Action = function(errorMessageIn, syncUnitIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._actionHandler_OnSyncErrorTrigger$Action, callContext, errorMessageIn, syncUnitIn);

        };
        Controller.prototype.onSyncComplete$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onSyncStart$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onSyncError$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:mJCG955vpb2MtUitKU2aNA", "UBTConnect", "App_Common", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ocUenTGLOEaea1MX7p8VAA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA:XePnnBf5CSDVy2dm20sROg", "UBTConnect", "OfflineDataSyncEvents", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ocUenTGLOEaea1MX7p8VAA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
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
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Common.OfflineDataSyncEvents.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "R1deubojZ0GAYWB4g_vd5Q": {
            getter: function(varBag, idService) {
                return varBag.offlineDataSyncConfigurationVar.value;
            }
        },
        "TO8C6xJk+ESkOnSbTsQ_VA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.syncUnitInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "gK1P5NwQY0enoHNYiAPh+Q": {
            getter: function(varBag, idService) {
                return varBag.securityExceptionVar.value;
            }
        },
        "D799_HQBikmb_FBdEat4WA": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "jNmjNj7SQUG_Fnu+IEf21w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.syncUnitInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "KXkHOFMlCUiub9_nsCMgHw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.syncUnitInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "I4vQBxztKUe3vaGRm7xjHA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.errorMessageInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "3BPbwpgXEk+FYKddeQdTeg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.syncUnitInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});