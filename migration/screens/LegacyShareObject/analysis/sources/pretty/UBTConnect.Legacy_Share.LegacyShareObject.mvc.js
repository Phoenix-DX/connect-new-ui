define("UBTConnect.Legacy_Share.LegacyShareObject.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "APIDomain_Directory_IS.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.controller$GetUserInformation_Wrapper", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, APIDomain_Directory_ISModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("User_AgeVisibility", "user_AgeVisibilityVar", "User_AgeVisibility", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("In_ShareObjectTypeId", "in_ShareObjectTypeIdIn", "In_ShareObjectTypeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ShareObjectTypeIdInDataFetchStatus", "_in_ShareObjectTypeIdInDataFetchStatus", "_in_ShareObjectTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ObjectId", "in_ObjectIdIn", "In_ObjectId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ObjectIdInDataFetchStatus", "_in_ObjectIdInDataFetchStatus", "_in_ObjectIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_CustomTitle", "in_CustomTitleIn", "In_CustomTitle", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_CustomTitleInDataFetchStatus", "_in_CustomTitleInDataFetchStatus", "_in_CustomTitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvcModel.hasValidationWidgets || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_ShareObjectTypeId" in inputs) {
                this.variables.in_ShareObjectTypeIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ShareObjectTypeId, OS.DataTypes.DataTypes.Text);
            }

            if ("In_ObjectId" in inputs) {
                this.variables.in_ObjectIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ObjectId, OS.DataTypes.DataTypes.Text);
            }

            if ("In_CustomTitle" in inputs) {
                this.variables.in_CustomTitleIn = OS.DataConversion.ServerDataConverter.from(inputs.In_CustomTitle, OS.DataTypes.DataTypes.Text);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Legacy_Share.LegacyShareObject");
});
define("UBTConnect.Legacy_Share.LegacyShareObject.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "APIDomain_Directory_IS.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_Share.LegacyShareObject.mvc$model", "UBTConnect.Legacy_Share.LegacyShareObject.mvc$controller", "UBTConnect.clientVariables", "Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$view", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.controller$GetUserInformation_Wrapper", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnectController, APIDomain_Directory_ISModel, UBTConnect_UtilsController, React, OSView, UBTConnect_Legacy_Share_LegacyShareObject_mvc_model, UBTConnect_Legacy_Share_LegacyShareObject_mvc_controller, UBTConnectClientVariables, Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvc_view, OSWidgets, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_view) {
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
        View.displayName = "Legacy_Share.LegacyShareObject";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Legacy_Share_LegacyShareObject_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Legacy_Share_LegacyShareObject_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "LegacyShareObject";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvc_view, {
                inputs: {
                    ObjectId: model.variables.in_ObjectIdIn,
                    User_AgeVisibility: model.variables.user_AgeVisibilityVar,
                    ShareObjectTypeId: model.variables.in_ShareObjectTypeIdIn,
                    In_CustomTitle: model.variables.in_CustomTitleIn
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    subscriptionDenied$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ScreenBlock_ShareObject SubscriptionDenied");
                                return controller.handler_ShareObject_SubscriptionDenied$Action(controller.callContext(eventHandlerContext));
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
                    bottomBar: PlaceholderContent.Empty,
                    commonUI_Elements: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
                            inputs: {},
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
            }), React.createElement(UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_view, {
                inputs: {
                    In_ExtendedClass: "connect-legacy-compatibily-containter"
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
                    name: "SubscriptionDenied",
                    alias: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Legacy_Share.LegacyShareObject.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "APIDomain_Directory_IS.model", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_Share.LegacyShareObject.mvc$debugger", "UBTConnect.Legacy_Share.controller", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.controller$GetUserInformation_Wrapper", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnectController, APIDomain_Directory_ISModel, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_Share_LegacyShareObject_mvc_Debugger, _flow_UBTConnect_Legacy_ShareController) {
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
            var getUserInformation_WrapperVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getUserInformation_WrapperVar = getUserInformation_WrapperVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:pqKkJTpS1EizhHZbE6BBeA:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.fuq__9PFfEa69lF120HSQQ/ClientActions.pqKkJTpS1EizhHZbE6BBeA:_DW2uxRmHXMC0VXG1y6NQg", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:O0sxeCIrfEqQUFaVqhF_Bg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L6sMrug8iUSbTEivSqar7g", callContext.id);
                // Execute Action: GetUserInformation_Wrapper
                model.flush();
                return UBTConnectController.default.getUserInformation_Wrapper$Action(callContext).then(function(value) {
                    getUserInformation_WrapperVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qP4nfWDjn0CH23zRUuuiBQ", callContext.id);
                    // User_AgeVisibility = GetUserInformation_Wrapper.UserInformation.Directory_UserCurrent_Visibility.DisplayAge
                    model.variables.user_AgeVisibilityVar = getUserInformation_WrapperVar.value.userInformationOut.directory_UserCurrent_VisibilityAttr.displayAgeAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:p5o_b3aZ+kWAUDSFScQuyA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:pqKkJTpS1EizhHZbE6BBeA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:pqKkJTpS1EizhHZbE6BBeA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_ShareObject_SubscriptionDenied$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ShareObject_SubscriptionDenied");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:bLLvhZyA5kK8o2r72444gQ:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.fuq__9PFfEa69lF120HSQQ/ClientActions.bLLvhZyA5kK8o2r72444gQ:N8NGt_pLTrB40JNBdqj6Gw", "UBTConnect", "Handler_ShareObject_SubscriptionDenied", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xD+kYBlCDUuYeJjiq55TiA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6XZkEYDbJEq6pV9+f32WTQ", callContext.id);
                // Execute Action: App_Subscription_ShowUpgradePopUp
                model.flush();
                return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iKNblA13lkSGcxgGBhrkdQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:bLLvhZyA5kK8o2r72444gQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:bLLvhZyA5kK8o2r72444gQ", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.handler_ShareObject_SubscriptionDenied$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ShareObject_SubscriptionDenied$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WLHP_h0dxkS_pTvB_M633w:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w:U8s54roxSenXYNTkqHtRYg", "UBTConnect", "Legacy_Share", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fuq__9PFfEa69lF120HSQQ:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.fuq__9PFfEa69lF120HSQQ:XMjpHe3VxtTJBXyNRtf8+w", "UBTConnect", "LegacyShareObject", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fuq__9PFfEa69lF120HSQQ", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WLHP_h0dxkS_pTvB_M633w", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Legacy_Share/LegacyShareObject On Initialize");
                return controller.onInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_Legacy_ShareController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Legacy_Share.LegacyShareObject.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "L6sMrug8iUSbTEivSqar7g": {
            getter: function(varBag, idService) {
                return varBag.getUserInformation_WrapperVar.value;
            }
        },
        "WXI0JwZz80+Et_iXB9x9kA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.user_AgeVisibilityVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "dqdBiCk4JkGIxQvb5F2fHA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ShareObjectTypeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "2jGWtRvthUm4UDqavre5NA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ObjectIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "8oWi_3r4sk2jsV0_e1c4qQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_CustomTitleIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "FgRYH1WTxUuXmDP3SCoI+g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "iTVyxYSW7Ue4wmwZxRIpaQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "hFSOpDScjEq_p+gZCVgxEw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubscriptionDenied"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});