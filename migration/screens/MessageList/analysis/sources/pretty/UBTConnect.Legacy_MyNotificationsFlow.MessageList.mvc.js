define("UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.controller$ClearAllNotifications", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnect_UtilsController, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Trigger_PullToRefresh", "trigger_PullToRefreshVar", "Trigger_PullToRefresh", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.fromStructure = function(str) {
            return new VariablesRecord(new VariablesRecord.RecordClass({
                trigger_PullToRefreshVar: OS.DataTypes.ImmutableBase.getData(str)
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
        Model._hasValidationWidgetsValue = undefined;
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                if ((Model._hasValidationWidgetsValue === undefined)) {
                    Model._hasValidationWidgetsValue = ((Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvcModel.hasValidationWidgets || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Legacy_MyNotificationsFlow.MessageList");
});
define("UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc$model", "UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc$controller", "UBTConnect.clientVariables", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.controller$ClearAllNotifications", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, React, OSView, UBTConnect_Legacy_MyNotificationsFlow_MessageList_mvc_model, UBTConnect_Legacy_MyNotificationsFlow_MessageList_mvc_controller, UBTConnectClientVariables, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_view, OSWidgets, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_MyNotificationsFlow.MessageList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Legacy_MyNotificationsFlow_MessageList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Legacy_MyNotificationsFlow_MessageList_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "MessageList";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_view, {
                inputs: {
                    Trigger_PullToRefresh: model.variables.trigger_PullToRefreshVar
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    navigateTo_MessageDetail$Action: function(messageInstanceIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageList NavigateTo_MessageDetail");
                            controller.handler_NavigateTo_MessageDetail$Action(messageInstanceIdIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_B2CCallback$Action: function(redirectToIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageList NavigateTo_B2CCallback");
                            controller.handler_NavigateTo_B2CCallback$Action(redirectToIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    pullToRefreshTriggered$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageList PullToRefreshTriggered");
                            controller.handler_PullToRefreshTriggered$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_B2CLanding$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageList NavigateTo_B2CLanding");
                            controller.handler_NavigateTo_B2CLanding$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
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
                    menu_IfLoggedIn: PlaceholderContent.Empty,
                    bottomBar: new PlaceholderContent(function() {
                        return [$if(((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
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
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }))];
                        }, function() {
                            return [];
                        })];
                    }),
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
                                uuid: "3",
                                alias: "3"
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
define("UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc$debugger", "UBTConnect.Legacy_MyNotificationsFlow.controller", "UBTConnect_Utils.controller$ClearAllNotifications", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_MyNotificationsFlow_MessageList_mvc_Debugger, _flow_UBTConnect_Legacy_MyNotificationsFlowController) {
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
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:G_WPHmc6uUW8P5sJjf6C6g:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.XHTu9JgVzEuBaLHeZps07g/ClientActions.G_WPHmc6uUW8P5sJjf6C6g:5Bh7r+hU4AVSysmwc+rTeA", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5_2FCZmuI0eKs2alVPGEKw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v2btLAFr5ESJ409MuKNDeg", callContext.id);
                // Execute Action: ClearAllNotifications
                model.flush();
                return UBTConnect_UtilsController.default.clearAllNotifications$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l6TKs0JWfUSWkOedIcVqIQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:G_WPHmc6uUW8P5sJjf6C6g", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:G_WPHmc6uUW8P5sJjf6C6g", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_NavigateTo_MessageDetail$Action = function(messageInstanceIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_MessageDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageList.Handler_NavigateTo_MessageDetail$vars"))());
            vars.value.messageInstanceIdInLocal = messageInstanceIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7YJ1Lbz_yEy7KgnZdv1ikQ:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.XHTu9JgVzEuBaLHeZps07g/ClientActions.7YJ1Lbz_yEy7KgnZdv1ikQ:jjgSqyugfp9QA6QHGcwRZw", "UBTConnect", "Handler_NavigateTo_MessageDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GVkXvEP+dEuEYD+6aUO1Tw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:My6Ev4Qor0Oys230AEYiyA", callContext.id);
                // Destination: /UBTConnect/MessageDetail
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/MessageDetail", {
                    MessageInstanceId: OS.DataConversion.ServerDataConverter.asString(vars.value.messageInstanceIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7YJ1Lbz_yEy7KgnZdv1ikQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageList.Handler_NavigateTo_MessageDetail$vars", [{
            name: "MessageInstanceId",
            attrName: "messageInstanceIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._layout_OnEventNotificationReceived$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Layout_OnEventNotificationReceived");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Ez4wqdZ+4kW218uA5n8dkg:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.XHTu9JgVzEuBaLHeZps07g/ClientActions.Ez4wqdZ+4kW218uA5n8dkg:LlR6Uuhvb5tDtVx2pLVADw", "UBTConnect", "Layout_OnEventNotificationReceived", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:g3deApJSv0mWxq4aBWPQxg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:P2SBnqZMIkqdxDzVnq3Xog", callContext.id);
                // Trigger_PullToRefresh = True
                model.variables.trigger_PullToRefreshVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JVKRcJ6xQkuhiEfZ4uzSAA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ez4wqdZ+4kW218uA5n8dkg", callContext.id);
            }

        };
        Controller.prototype._handler_NavigateTo_B2CLanding$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_B2CLanding");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:M7NXzQf440edqMhB1oORkQ:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.XHTu9JgVzEuBaLHeZps07g/ClientActions.M7NXzQf440edqMhB1oORkQ:6H0IjONyg_gy5V5mP6+JOw", "UBTConnect", "Handler_NavigateTo_B2CLanding", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wLGN3Zye50qpUsWCiPt9Xg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oFqF4Y3fPUKPKTlg7dNv3Q", callContext.id);
                // Destination: /UBTConnect/Login
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:M7NXzQf440edqMhB1oORkQ", callContext.id);
            }

        };
        Controller.prototype._handler_PullToRefreshTriggered$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_PullToRefreshTriggered");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MdHZ1h9ETkqbJtDN7z3ZQg:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.XHTu9JgVzEuBaLHeZps07g/ClientActions.MdHZ1h9ETkqbJtDN7z3ZQg:kul2m7Dgb2IZMQq4G9Qg5Q", "UBTConnect", "Handler_PullToRefreshTriggered", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NaAAYmhbJEa5pSwocD1paQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Uisa0zyBsEGNkizXe4IVtg", callContext.id);
                // Trigger_PullToRefresh = False
                model.variables.trigger_PullToRefreshVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pqkSR+RnDEOewWDJb_+ySw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MdHZ1h9ETkqbJtDN7z3ZQg", callContext.id);
            }

        };
        Controller.prototype._handler_NavigateTo_B2CCallback$Action = function(redirectToIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_B2CCallback");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageList.Handler_NavigateTo_B2CCallback$vars"))());
            vars.value.redirectToInLocal = redirectToIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:VfyS5afmm0CM42oP90zqhw:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.XHTu9JgVzEuBaLHeZps07g/ClientActions.VfyS5afmm0CM42oP90zqhw:4scV9Gl3P3MD_Vt3Q0zh5g", "UBTConnect", "Handler_NavigateTo_B2CCallback", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BkhhEXg2u0y35BvHWDbX3g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4QMfrvnx8kKx7RqitMVjrQ", callContext.id);
                // Destination: /UBTConnect/
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.redirectToInLocal, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VfyS5afmm0CM42oP90zqhw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageList.Handler_NavigateTo_B2CCallback$vars", [{
            name: "RedirectTo",
            attrName: "redirectToInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.handler_NavigateTo_MessageDetail$Action = function(messageInstanceIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_MessageDetail$Action, callContext, messageInstanceIdIn);

        };
        Controller.prototype.layout_OnEventNotificationReceived$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._layout_OnEventNotificationReceived$Action, callContext);

        };
        Controller.prototype.handler_NavigateTo_B2CLanding$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_B2CLanding$Action, callContext);

        };
        Controller.prototype.handler_PullToRefreshTriggered$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_PullToRefreshTriggered$Action, callContext);

        };
        Controller.prototype.handler_NavigateTo_B2CCallback$Action = function(redirectToIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_B2CCallback$Action, callContext, redirectToIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:EX+5lW+DhkWARS3JFzv5Fg:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg:690FmsHMfqq40rgnVL78Cg", "UBTConnect", "Legacy_MyNotificationsFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:XHTu9JgVzEuBaLHeZps07g:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.XHTu9JgVzEuBaLHeZps07g:k4C2gJOJiVQo6lW2MUARQg", "UBTConnect", "MessageList", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:XHTu9JgVzEuBaLHeZps07g", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:EX+5lW+DhkWARS3JFzv5Fg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Legacy_MyNotificationsFlow/MessageList On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_Legacy_MyNotificationsFlowController.default.handleError(ex, this.callContext());
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "SXsEc+ue4U2ZJ7seW7oHgA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.messageInstanceIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "B_tosWJFbk+qWHgR_MBtOA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.redirectToInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "JYO2+HyUokCQ+TE18vlRig": {
            getter: function(varBag, idService) {
                return varBag.model.variables.trigger_PullToRefreshVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "H_2bnvUq1kW++TPKsG9Rzw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_IfLoggedIn"));
                })(varBag.model, idService);
            }
        },
        "qIEQcflGgk63x+IQtRPlag": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "5gzisvUN1kODo4YhKiWSwg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});