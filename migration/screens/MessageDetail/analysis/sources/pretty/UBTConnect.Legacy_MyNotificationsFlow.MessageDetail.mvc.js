define("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.controller", "NavigationHandler.controller", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$model", "UBTConnect.Home.Feed_Embeded.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "UBTConnect_Utils.controller$GetHasNewLDM", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnect_Utils.controller$GetHasNewNotifications", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp"], function(OutSystems, UBTConnectModel, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIController, NavigationHandlerController, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvcModel, UBTConnect_Home_Feed_Embeded_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("FeedItemId", "feedItemIdVar", "FeedItemId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("MessageInstanceId", "messageInstanceIdIn", "MessageInstanceId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_messageInstanceIdInDataFetchStatus", "_messageInstanceIdInDataFetchStatus", "_messageInstanceIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("isOriginPushNotification", "isOriginPushNotificationIn", "isOriginPushNotification", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isOriginPushNotificationInDataFetchStatus", "_isOriginPushNotificationInDataFetchStatus", "_isOriginPushNotificationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MessageTemplateId", "messageTemplateIdIn", "MessageTemplateId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_messageTemplateIdInDataFetchStatus", "_messageTemplateIdInDataFetchStatus", "_messageTemplateIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("HardwareId", "hardwareIdIn", "HardwareId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_hardwareIdInDataFetchStatus", "_hardwareIdInDataFetchStatus", "_hardwareIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((((Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvcModel.hasValidationWidgets || UBTConnect_Home_Feed_Embeded_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("MessageInstanceId" in inputs) {
                this.variables.messageInstanceIdIn = OS.DataConversion.ServerDataConverter.from(inputs.MessageInstanceId, OS.DataTypes.DataTypes.LongInteger);
            }

            if ("isOriginPushNotification" in inputs) {
                this.variables.isOriginPushNotificationIn = OS.DataConversion.ServerDataConverter.from(inputs.isOriginPushNotification, OS.DataTypes.DataTypes.Boolean);
            }

            if ("MessageTemplateId" in inputs) {
                this.variables.messageTemplateIdIn = OS.DataConversion.ServerDataConverter.from(inputs.MessageTemplateId, OS.DataTypes.DataTypes.LongInteger);
            }

            if ("HardwareId" in inputs) {
                this.variables.hardwareIdIn = OS.DataConversion.ServerDataConverter.from(inputs.HardwareId, OS.DataTypes.DataTypes.Text);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Legacy_MyNotificationsFlow.MessageDetail");
});
define("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc$model", "UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc$controller", "UBTConnect.clientVariables", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.Home.Feed_Embeded.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnect_Utils.controller$GetHasNewLDM", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnect_Utils.controller$GetHasNewNotifications", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIController, NavigationHandlerController, React, OSView, UBTConnect_Legacy_MyNotificationsFlow_MessageDetail_mvc_model, UBTConnect_Legacy_MyNotificationsFlow_MessageDetail_mvc_controller, UBTConnectClientVariables, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_view, OSWidgets, UBTConnect_Home_Feed_Embeded_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "Legacy_MyNotificationsFlow.MessageDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_view, UBTConnect_Home_Feed_Embeded_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Legacy_MyNotificationsFlow_MessageDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Legacy_MyNotificationsFlow_MessageDetail_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "MessageDetail";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_view, {
                inputs: {
                    isOriginPushNotification: model.variables.isOriginPushNotificationIn,
                    MessageInstanceId: model.variables.messageInstanceIdIn,
                    MessageTemplateId: model.variables.messageTemplateIdIn,
                    HardwareId: model.variables.hardwareIdIn
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    setFeedItemId$Action: function(event_FeedItemIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail SetFeedItemId");
                            controller.handler_SetFeedItemId$Action(event_FeedItemIdIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    addAuditAndNavigateTo_EventDetail$Action: function(eventHostIdIn, eventIdIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail AddAuditAndNavigateTo_EventDetail");
                                return controller.handler_AddAuditAndNavigateTo_EventDetail$Action(eventHostIdIn, eventIdIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    navigateTo_ObjectDetail$Action: function(objectIdIn, shareObjectTypeIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail NavigateTo_ObjectDetail");
                            controller.handler_NavigateTo_ShareObjectDetail$Action(objectIdIn, shareObjectTypeIdIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_Login$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail NavigateTo_Login");
                            controller.handler_NavigateTo_Login$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_MessageList$Action: function(noPermissionIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail NavigateTo_MessageList");
                            controller.handler_NavigateTo_MessageList$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    subscriptionDenied$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail SubscriptionDenied");
                                return controller.handler_SubscriptionDenied$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    navigateTo_AssembleEvent$Action: function(eventParentIdIn, eventInstanceIdIn, eventTypeTitleIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail NavigateTo_AssembleEvent");
                            controller.handler_NavigateTo_AssembleDetail$Action(eventParentIdIn, eventInstanceIdIn, eventTypeTitleIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_OrbitEvent$Action: function(event_MemberIdIn, event_EventIdIn, event_EventNameIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail NavigateTo_OrbitEvent");
                            controller.handler_NavigateTo_OrbitEventDetails$Action(event_EventIdIn, event_MemberIdIn, event_EventNameIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_OrbitMilestone$Action: function(event_MilestoneIdIn, event_EventIdIn, event_EventNameIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail NavigateTo_OrbitMilestone");
                            controller.handler_NavigateTo_OrbitMilestone$Action(event_MilestoneIdIn, event_EventIdIn, event_EventNameIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_OrbitHostSurvey$Action: function(event_MemberIdIn, event_EventIdIn, event_EventNameIn, event_StartDateIn, event_EndDateIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail NavigateTo_OrbitHostSurvey");
                            controller.handler_NavigateTo_OrbitHostSurvey$Action(event_EventIdIn, event_MemberIdIn, event_EventNameIn, event_StartDateIn, event_EndDateIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    addAuditAndNavigateTo_EventEmail$Action: function(event_EventIdIn, eventHostIdIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail AddAuditAndNavigateTo_EventEmail");
                                return controller.handler_AddAuditAndNavigateTo_EventEmail$Action(event_EventIdIn, eventHostIdIn, controller.callContext(eventHandlerContext));
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
                    placeholder_FeedItem2: PlaceholderContent.Empty,
                    placeholder_FeedItem: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_Home_Feed_Embeded_mvc_view, {
                            inputs: {
                                FeedItemId: model.variables.feedItemIdVar
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
                    }),
                    bottomBar: new PlaceholderContent(function() {
                        return [$if(((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())), false, this, function() {
                            return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
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
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
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
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
                            inputs: {},
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                backNavigation$Action: function(backNavigationEventIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
                                        controller.handler_BackNavigationHandlerBackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
                                uuid: "4",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.feedItemIdVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc$debugger", "UBTConnect.Legacy_MyNotificationsFlow.controller", "UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc$controller.Handler_BackNavigationHandlerBackNavigation.CheckIfInvalidLocationJS", "UBTConnect_Utils.controller$GetHasNewLDM", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnect_Utils.controller$GetHasNewNotifications", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_MyNotificationsFlow_MessageDetail_mvc_Debugger, _flow_UBTConnect_Legacy_MyNotificationsFlowController, UBTConnect_Legacy_MyNotificationsFlow_MessageDetail_mvc_controller_Handler_BackNavigationHandlerBackNavigation_CheckIfInvalidLocationJS) {
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
        Controller.prototype._handler_AddAuditAndNavigateTo_EventEmail$Action = function(in_EventIdIn, in_EventHostIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_AddAuditAndNavigateTo_EventEmail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_AddAuditAndNavigateTo_EventEmail$vars"))());
            vars.value.in_EventIdInLocal = in_EventIdIn;
            vars.value.in_EventHostIdInLocal = in_EventHostIdIn;
            var getHasNewLDMVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getHasNewLDMVar = getHasNewLDMVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hDLZADDP0E6lWV6EROes+g:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions.hDLZADDP0E6lWV6EROes+g:OxUiPoksOYR4ZwpbhQ6jNQ", "UBTConnect", "Handler_AddAuditAndNavigateTo_EventEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nMgaRDY5YUmh_55icVEMlw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_j9k2n0J5k2brI5r3oCLlg", callContext.id);
                // Execute Action: AddAuditEventDetailEvent2_Contact
                model.flush();
                return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(UBTConnectModel.staticEntities.applicationEvents_LDM.notificationContactOrganiser, OS.DataTypes.LongInteger.defaultValue, "", OS.DataTypes.DateTime.defaultValue, "", callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GbyClRPs7kGZEgX40LnqfQ", callContext.id);
                    // Execute Action: GetHasNewLDM
                    getHasNewLDMVar.value = UBTConnect_UtilsController.default.getHasNewLDM$Action(callContext);

                }).then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OiOoS1xzPkOPHyfYnGttNg", callContext.id) && getHasNewLDMVar.value.out_HasNewLDMOut)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vYLhYS4VNkiIFY++LPL3AQ", callContext.id);
                        // Destination: /UBTConnect/LDM_Email_V2
                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LDM_Email_V2", {
                            In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                            EventHostId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventHostIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                            In_IsContactOrganiser: OS.DataConversion.ServerDataConverter.asString(false, OS.DataTypes.DataTypes.Boolean),
                            In_IsMessageGuest: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XKAv0dircEi2pwRK5H_vVw", callContext.id);
                        // Destination: /UBTConnect/LDM_Email
                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LDM_Email", {
                            In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                            In_IsMessageGuest: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean),
                            EventHostId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventHostIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                            In_IsContactOrganiser: OS.DataConversion.ServerDataConverter.asString(false, OS.DataTypes.DataTypes.Boolean)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hDLZADDP0E6lWV6EROes+g", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hDLZADDP0E6lWV6EROes+g", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_AddAuditAndNavigateTo_EventEmail$vars", [{
            name: "In_EventId",
            attrName: "in_EventIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "In_EventHostId",
            attrName: "in_EventHostIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._handler_NavigateTo_Login$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_Login");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7vByI5gkCkWBaRlxHbwPdA:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions.7vByI5gkCkWBaRlxHbwPdA:jW2sAOLpzEbLkJnmJqtcjg", "UBTConnect", "Handler_NavigateTo_Login", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yCAhbp5XPkqw02FTIhPpwQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G6VBVoh630i+kiH9YzehsA", callContext.id);
                // Destination: /UBTConnect/Login
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7vByI5gkCkWBaRlxHbwPdA", callContext.id);
            }

        };
        Controller.prototype._handler_NavigateTo_AssembleDetail$Action = function(eventParentIdIn, eventInstanceIdIn, assembleEventTypeTileIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_AssembleDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_NavigateTo_AssembleDetail$vars"))());
            vars.value.eventParentIdInLocal = eventParentIdIn;
            vars.value.eventInstanceIdInLocal = eventInstanceIdIn;
            vars.value.assembleEventTypeTileInLocal = assembleEventTypeTileIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Lo0qKMOrbU2jVPjgPaqtAg:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions.Lo0qKMOrbU2jVPjgPaqtAg:eLTkNTZ4xZUnv4oMMiYNnQ", "UBTConnect", "Handler_NavigateTo_AssembleDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NBOW02Kyw0+p8wl3nmvqSw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_NNtLNFdtUaY14KATBHm8Q", callContext.id);
                // Destination: /UBTConnect/AssembleDetail
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/AssembleDetail", {
                    EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventInstanceIdInLocal, OS.DataTypes.DataTypes.Text),
                    SeriesId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventParentIdInLocal, OS.DataTypes.DataTypes.Text),
                    AssembleEventTypeTile: OS.DataConversion.ServerDataConverter.asString(vars.value.assembleEventTypeTileInLocal, OS.DataTypes.DataTypes.Text)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Lo0qKMOrbU2jVPjgPaqtAg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_NavigateTo_AssembleDetail$vars", [{
            name: "EventParentId",
            attrName: "eventParentIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "EventInstanceId",
            attrName: "eventInstanceIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "AssembleEventTypeTile",
            attrName: "assembleEventTypeTileInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_NavigateTo_OrbitEventDetails$Action = function(eventIdIn, memberIdIn, eventNameIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_OrbitEventDetails");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_NavigateTo_OrbitEventDetails$vars"))());
            vars.value.eventIdInLocal = eventIdIn;
            vars.value.memberIdInLocal = memberIdIn;
            vars.value.eventNameInLocal = eventNameIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:F8m5Kw8xvkyoaih0amGKIw:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions.F8m5Kw8xvkyoaih0amGKIw:fa0IFA5GaCggbuIuEED2Jg", "UBTConnect", "Handler_NavigateTo_OrbitEventDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L2WTzvr8A0WjYm_vRMlFsQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JsKjJ_j1VkK2DSV6JxZA_g", callContext.id);
                // Destination: /UBTConnect/EventDetail
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/EventDetail", {
                    In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                    In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
                    In_FromNotification: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean),
                    In_MemberId: OS.DataConversion.ServerDataConverter.asString(vars.value.memberIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:F8m5Kw8xvkyoaih0amGKIw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_NavigateTo_OrbitEventDetails$vars", [{
            name: "EventId",
            attrName: "eventIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "MemberId",
            attrName: "memberIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "EventName",
            attrName: "eventNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_NavigateTo_MessageList$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_MessageList");
            callContext = controller.callContext(callContext);
            var getHasNewNotificationsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getHasNewNotificationsVar = getHasNewNotificationsVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ltMBN3Meskq1ipqSTg6ugA:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions.ltMBN3Meskq1ipqSTg6ugA:Vdv1q8HaF3PMOXF8muQk8w", "UBTConnect", "Handler_NavigateTo_MessageList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gJv9RjWdpkiz2O3Nx_ikeg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xH9sPyu5pk+WOc0D7hv+Cg", callContext.id);
                // Execute Action: GetHasNewNotifications
                getHasNewNotificationsVar.value = UBTConnect_UtilsController.default.getHasNewNotifications$Action(callContext);

                // HasNewNotifications?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OnmJfpFh80GGZd50F8Zw_A", callContext.id) && getHasNewNotificationsVar.value.out_HasNewNotificationsOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EWg9M_QxLkKMK7KygkyN9g", callContext.id);
                    // Destination: /UBTConnect/Notifications
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Notifications", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NzhkJrg_40iVTMz79k9UdQ", callContext.id);
                    // Destination: /UBTConnect/MessageList
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/MessageList", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ltMBN3Meskq1ipqSTg6ugA", callContext.id);
            }

        };
        Controller.prototype._handler_SetFeedItemId$Action = function(event_FeedItemIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SetFeedItemId");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_SetFeedItemId$vars"))());
            vars.value.event_FeedItemIdInLocal = event_FeedItemIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:397+SHuUxUK5aVuql6tARA:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions.397+SHuUxUK5aVuql6tARA:ak_BykQicuYP0ziLAvCBuA", "UBTConnect", "Handler_SetFeedItemId", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:goP7fiz1SUibO3lnmVjOwQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8MngeLpDa0mcvNofDWcbqA", callContext.id);
                // FeedItemId = Event_FeedItemId
                model.variables.feedItemIdVar = vars.value.event_FeedItemIdInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cgedkW_msU2uheyY9zvA6A", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:397+SHuUxUK5aVuql6tARA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_SetFeedItemId$vars", [{
            name: "Event_FeedItemId",
            attrName: "event_FeedItemIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_NavigateTo_OrbitMilestone$Action = function(milestoneIdIn, eventIdIn, eventNameIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_OrbitMilestone");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_NavigateTo_OrbitMilestone$vars"))());
            vars.value.milestoneIdInLocal = milestoneIdIn;
            vars.value.eventIdInLocal = eventIdIn;
            vars.value.eventNameInLocal = eventNameIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8Ll2gCNNd0iH+Boy1v7obQ:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions.8Ll2gCNNd0iH+Boy1v7obQ:lH8o+89EDzFJdmDb5XP9EA", "UBTConnect", "Handler_NavigateTo_OrbitMilestone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GUXWttNoMUKNRFxsefzwLQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fQg0asGTiECuO4xO3QOVYw", callContext.id);
                // Destination: /UBTConnect/MilestoneDetail
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/MilestoneDetail", {
                    In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
                    In_FromNotification: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean),
                    In_MilestoneId: OS.DataConversion.ServerDataConverter.asString(vars.value.milestoneIdInLocal, OS.DataTypes.DataTypes.Text),
                    In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8Ll2gCNNd0iH+Boy1v7obQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_NavigateTo_OrbitMilestone$vars", [{
            name: "MilestoneId",
            attrName: "milestoneIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "EventId",
            attrName: "eventIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "EventName",
            attrName: "eventNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_NavigateTo_OrbitHostSurvey$Action = function(eventIdIn, memberIdIn, eventNameIn, eventStartDateIn, eventEndDateIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_OrbitHostSurvey");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_NavigateTo_OrbitHostSurvey$vars"))());
            vars.value.eventIdInLocal = eventIdIn;
            vars.value.memberIdInLocal = memberIdIn;
            vars.value.eventNameInLocal = eventNameIn;
            vars.value.eventStartDateInLocal = eventStartDateIn;
            vars.value.eventEndDateInLocal = eventEndDateIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:4tsxjFsKOEuQwQgmdWTfNQ:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions.4tsxjFsKOEuQwQgmdWTfNQ:M5DyQGgS4M_YWhVP768JeQ", "UBTConnect", "Handler_NavigateTo_OrbitHostSurvey", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LwjIb4xLRUKE4XsrLC5ksA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bt8rr4S6S0eTH2IappXr4Q", callContext.id);
                // Destination: /UBTConnect/HostSurvey
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HostSurvey", {
                    In_MemberId: OS.DataConversion.ServerDataConverter.asString(vars.value.memberIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                    In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                    In_EventStartDate: OS.DataConversion.ServerDataConverter.asString(vars.value.eventStartDateInLocal, OS.DataTypes.DataTypes.DateTime),
                    In_EventEndDate: OS.DataConversion.ServerDataConverter.asString(vars.value.eventEndDateInLocal, OS.DataTypes.DataTypes.DateTime),
                    In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:4tsxjFsKOEuQwQgmdWTfNQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_NavigateTo_OrbitHostSurvey$vars", [{
            name: "EventId",
            attrName: "eventIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "MemberId",
            attrName: "memberIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "EventName",
            attrName: "eventNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "EventStartDate",
            attrName: "eventStartDateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.DateTime,
            defaultValue: function() {
                return OS.DataTypes.DateTime.defaultValue;
            }
        }, {
            name: "EventEndDate",
            attrName: "eventEndDateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.DateTime,
            defaultValue: function() {
                return OS.DataTypes.DateTime.defaultValue;
            }
        }]);
        Controller.prototype._handler_NavigateTo_ShareObjectDetail$Action = function(objectIdIn, shareObjectTypeIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_ShareObjectDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_NavigateTo_ShareObjectDetail$vars"))());
            vars.value.objectIdInLocal = objectIdIn;
            vars.value.shareObjectTypeIdInLocal = shareObjectTypeIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_QkOjgG7dEKpALy1DlNQGQ:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions._QkOjgG7dEKpALy1DlNQGQ:_1D0fW_5Yy_rlE4rWjztRw", "UBTConnect", "Handler_NavigateTo_ShareObjectDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ld4yWJqxb0eAwNc7+csSNg", callContext.id);
                // ObjectShareType
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xkkHF3mWAEKkXRx23nSccA", callContext.id) && (((vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.household) || (vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.update)) || (vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.myHousehold)))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3JfyuhHYGkyt9lyERBdQgA", callContext.id);
                    // Destination: /UBTConnect/HouseholdDetails
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
                        HouseholdId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    if ((vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.oneSchoolGlobal)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3Z70GIJnT0WOBN1uN4SsuA", callContext.id);
                        // Destination: /UBTConnect/OneSchoolGlobalDetails
                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OneSchoolGlobalDetails", {
                            In_OneSchoolGlobalId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                    } else {
                        if ((vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.supperMeeting)) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o7pcTTjbXkGMbulYw+XFwQ", callContext.id);
                            // Destination: /UBTConnect/SupperMeeting_Details
                            return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/SupperMeeting_Details", {
                                In_SubdivsionId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
                            }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                        } else {
                            if ((vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.feed)) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DO9otZU14EucvPwPgAUp+A", callContext.id);
                                // Destination: /UBTConnect/FeedItemDetail
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/FeedItemDetail", {
                                    FeedItemId: OS.DataConversion.ServerDataConverter.asString(vars.value.objectIdInLocal, OS.DataTypes.DataTypes.Text)
                                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } else {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GFu_3x7Qi02Vc4mZjAg3ZQ", callContext.id);
                            }

                        }

                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_QkOjgG7dEKpALy1DlNQGQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_NavigateTo_ShareObjectDetail$vars", [{
            name: "ObjectId",
            attrName: "objectIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ShareObjectTypeId",
            attrName: "shareObjectTypeIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_AddAuditAndNavigateTo_EventDetail$Action = function(in_EventHostIdIn, in_EventIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_AddAuditAndNavigateTo_EventDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_AddAuditAndNavigateTo_EventDetail$vars"))());
            vars.value.in_EventHostIdInLocal = in_EventHostIdIn;
            vars.value.in_EventIdInLocal = in_EventIdIn;
            var getHasNewLDMVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getHasNewLDMVar = getHasNewLDMVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+eJLl5EHPU+ws_WNpuBsHQ:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions.+eJLl5EHPU+ws_WNpuBsHQ:hNWGZ2Fi6VQwEQ7FgqAjrQ", "UBTConnect", "Handler_AddAuditAndNavigateTo_EventDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:78zSbxd3AUySc4lpoxOw5Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iO3e6ndXQkutKLpPo71_sQ", callContext.id);
                // Execute Action: AddAuditClickedEvent
                model.flush();
                return Connect2_OrbitMobile_MUIController.default.addAuditClickedEvent$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnectModel.staticEntities.applicationEvents_LDM.notificationViewEvent), (((OS.BuiltinFunctions.longIntegerToText(vars.value.in_EventHostIdInLocal) === OS.BuiltinFunctions.nullTextIdentifier())) ? (vars.value.in_EventIdInLocal) : (vars.value.in_EventHostIdInLocal)), "", OS.DataTypes.DateTime.defaultValue, "", callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Z7HhJRsE+kWpB0gd4d6XfQ", callContext.id);
                    // Execute Action: GetHasNewLDM
                    getHasNewLDMVar.value = UBTConnect_UtilsController.default.getHasNewLDM$Action(callContext);

                }).then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cdlO0tXxv0WzRpHFpgP6Bg", callContext.id) && getHasNewLDMVar.value.out_HasNewLDMOut)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9Fz+2YN4LEuIgsLZKlCpRw", callContext.id);
                        // Destination: /UBTConnect/LDM_EventDetail_V2
                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LDM_EventDetail_V2", {
                            EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                            EventHostId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventHostIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o5aG5fLUXUuLCtxNhKJypw", callContext.id);
                        // Destination: /UBTConnect/LDM_EventDetail
                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LDM_EventDetail", {
                            EventHostId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventHostIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                            EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+eJLl5EHPU+ws_WNpuBsHQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+eJLl5EHPU+ws_WNpuBsHQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_AddAuditAndNavigateTo_EventDetail$vars", [{
            name: "In_EventHostId",
            attrName: "in_EventHostIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "In_EventId",
            attrName: "in_EventIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._handler_BackNavigationHandlerBackNavigation$Action = function(backNavigationEventIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_BackNavigationHandlerBackNavigation");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_BackNavigationHandlerBackNavigation$vars"))());
            vars.value.backNavigationEventInLocal = backNavigationEventIn;
            var checkIfInvalidLocationJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.checkIfInvalidLocationJSResult = checkIfInvalidLocationJSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:qjLFr6xTPUSCyPo8JLcOKw:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions.qjLFr6xTPUSCyPo8JLcOKw:cTTmpNCbq5772mIj8wpgUg", "UBTConnect", "Handler_BackNavigationHandlerBackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4j1nZrYf5UGjfmuLq9M92w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E3ixNIYap0W+uFeDw_pr_w", callContext.id);
                checkIfInvalidLocationJSResult.value = controller.safeExecuteJSNode(UBTConnect_Legacy_MyNotificationsFlow_MessageDetail_mvc_controller_Handler_BackNavigationHandlerBackNavigation_CheckIfInvalidLocationJS, "CheckIfInvalidLocation", "Handler_BackNavigationHandlerBackNavigation", {
                    EspaceName: OS.DataConversion.JSNodeParamConverter.to((("/" + OS.BuiltinFunctions.getEntryEspaceName()) + "/"), OS.DataTypes.DataTypes.Text),
                    BackNavigationEvent: OS.DataConversion.JSNodeParamConverter.to(vars.value.backNavigationEventInLocal, OS.DataTypes.DataTypes.Object),
                    IsEmpty: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_BackNavigationHandlerBackNavigation$checkIfInvalidLocationJSResult"))();
                    jsNodeResult.isEmptyOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEmpty, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KXsMqC3X5UidxsKsATmFCg", callContext.id) && checkIfInvalidLocationJSResult.value.isEmptyOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Zpjn+GypsESd+FMwlzg0Nw", callContext.id);
                    // Execute Action: PreventNavigation
                    NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hOEvNWaNAkm_0caz8u_lYA", callContext.id);
                    // Destination: /UBTConnect/HomeFeed
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RriLiN17qEK_1STRciJakQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qjLFr6xTPUSCyPo8JLcOKw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_BackNavigationHandlerBackNavigation$vars", [{
            name: "BackNavigationEvent",
            attrName: "backNavigationEventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.registerVariableGroupType("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.Handler_BackNavigationHandlerBackNavigation$checkIfInvalidLocationJSResult", [{
            name: "IsEmpty",
            attrName: "isEmptyOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_SubscriptionDenied$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SubscriptionDenied");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1HFd5at+OEyYvsN4F8K4ow:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw/ClientActions.1HFd5at+OEyYvsN4F8K4ow:4QWfvATLNkM2vLMod+gLnA", "UBTConnect", "Handler_SubscriptionDenied", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zqZ5u6emJ0Wxf62A5qKiUQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Gj__HILeuEiEFEKe8Cxe9w", callContext.id);
                // Execute Action: App_Subscription_ShowUpgradePopUp
                model.flush();
                return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iCACjxf8UEe8MoCsWY0zHQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1HFd5at+OEyYvsN4F8K4ow", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1HFd5at+OEyYvsN4F8K4ow", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.handler_AddAuditAndNavigateTo_EventEmail$Action = function(in_EventIdIn, in_EventHostIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_AddAuditAndNavigateTo_EventEmail$Action, callContext, in_EventIdIn, in_EventHostIdIn);

        };
        Controller.prototype.handler_NavigateTo_Login$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_Login$Action, callContext);

        };
        Controller.prototype.handler_NavigateTo_AssembleDetail$Action = function(eventParentIdIn, eventInstanceIdIn, assembleEventTypeTileIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_AssembleDetail$Action, callContext, eventParentIdIn, eventInstanceIdIn, assembleEventTypeTileIn);

        };
        Controller.prototype.handler_NavigateTo_OrbitEventDetails$Action = function(eventIdIn, memberIdIn, eventNameIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_OrbitEventDetails$Action, callContext, eventIdIn, memberIdIn, eventNameIn);

        };
        Controller.prototype.handler_NavigateTo_MessageList$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_MessageList$Action, callContext);

        };
        Controller.prototype.handler_SetFeedItemId$Action = function(event_FeedItemIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SetFeedItemId$Action, callContext, event_FeedItemIdIn);

        };
        Controller.prototype.handler_NavigateTo_OrbitMilestone$Action = function(milestoneIdIn, eventIdIn, eventNameIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_OrbitMilestone$Action, callContext, milestoneIdIn, eventIdIn, eventNameIn);

        };
        Controller.prototype.handler_NavigateTo_OrbitHostSurvey$Action = function(eventIdIn, memberIdIn, eventNameIn, eventStartDateIn, eventEndDateIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_OrbitHostSurvey$Action, callContext, eventIdIn, memberIdIn, eventNameIn, eventStartDateIn, eventEndDateIn);

        };
        Controller.prototype.handler_NavigateTo_ShareObjectDetail$Action = function(objectIdIn, shareObjectTypeIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_ShareObjectDetail$Action, callContext, objectIdIn, shareObjectTypeIdIn);

        };
        Controller.prototype.handler_AddAuditAndNavigateTo_EventDetail$Action = function(in_EventHostIdIn, in_EventIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_AddAuditAndNavigateTo_EventDetail$Action, callContext, in_EventHostIdIn, in_EventIdIn);

        };
        Controller.prototype.handler_BackNavigationHandlerBackNavigation$Action = function(backNavigationEventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_BackNavigationHandlerBackNavigation$Action, callContext, backNavigationEventIn);

        };
        Controller.prototype.handler_SubscriptionDenied$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SubscriptionDenied$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:EX+5lW+DhkWARS3JFzv5Fg:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg:690FmsHMfqq40rgnVL78Cg", "UBTConnect", "Legacy_MyNotificationsFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:YSyv3ThxHk+xN9cJdyQzSw:/NRWebFlows.EX+5lW+DhkWARS3JFzv5Fg/NodesShownInESpaceTree.YSyv3ThxHk+xN9cJdyQzSw:ZZ6UreRgQlXd_croSdYChw", "UBTConnect", "MessageDetail", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YSyv3ThxHk+xN9cJdyQzSw", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:EX+5lW+DhkWARS3JFzv5Fg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
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
define("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc$controller.Handler_BackNavigationHandlerBackNavigation.CheckIfInvalidLocationJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.BackNavigationEvent.detail && $parameters.BackNavigationEvent.detail.location && $parameters.BackNavigationEvent.detail.location.pathname) {
            $parameters.IsEmpty = $parameters.BackNavigationEvent.detail.location.pathname == $parameters.EspaceName;
        }
    };
});

define("UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "kkALTny68k+nVXMMVU3z6Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "cSy_gl6oEkyw5pLTYskKkg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventHostIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "GbyClRPs7kGZEgX40LnqfQ": {
            getter: function(varBag, idService) {
                return varBag.getHasNewLDMVar.value;
            }
        },
        "XFH6I5vLNEqNDTIpVuQLhA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventParentIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "HsXPyj6wjk6+MITvsp6kVw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventInstanceIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "rdtBMK0SVEeM_e8BhHMxTw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.assembleEventTypeTileInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "bXX2Vufe7kWGme_oyWLXNQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "_mauVkBo7U2jGynLU2yBMQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.memberIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Ng6z984cpky3nFWM9z71Yw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "xH9sPyu5pk+WOc0D7hv+Cg": {
            getter: function(varBag, idService) {
                return varBag.getHasNewNotificationsVar.value;
            }
        },
        "lXWOmJ_TSkOrMOfeQbIUzA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_FeedItemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "N_H_Ejl1Zk6hvvjsbD_x9A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.milestoneIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Ws53iCOaQ0eUtRiHAGU2Aw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "T55Rct0Pqkm75PweFkmRng": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "APKYth3x9Uq8S8TroF+70Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "x8ShrUvItUq1i5vNdd8lTg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.memberIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "b57HStSl40KWcK4wTCeHuw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "iYpYC5gDhU+J5vhoGBBq8A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventStartDateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.DateTime
        },
        "Y24fyXnecU+8lY2pXwfF9g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventEndDateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.DateTime
        },
        "AvRz_AR700WeYzQxOGC7kQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.objectIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "4K7oHGYiNk+kc+5zR9cJBw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.shareObjectTypeIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "c8s7Unc7QU20dHn7CbDhMQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventHostIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "vDFkvfn3qka_XfZrj8itBA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Z7HhJRsE+kWpB0gd4d6XfQ": {
            getter: function(varBag, idService) {
                return varBag.getHasNewLDMVar.value;
            }
        },
        "K1uMPV9GFkq4vxx3REnZOw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.backNavigationEventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "E3ixNIYap0W+uFeDw_pr_w": {
            getter: function(varBag, idService) {
                return varBag.checkIfInvalidLocationJSResult.value;
            }
        },
        "pGuSvxmM60WQct7r1UqG_g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.feedItemIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "G2qEZPvF20+0WGRyF+1v1w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.messageInstanceIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "y0sv3wD0v06s1Xu9qqcjZw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isOriginPushNotificationIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "slDrukm5jEyx+X5sg+M0Yg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.messageTemplateIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "5oSGySs5yk2k_5U0L+Z4Sw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hardwareIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "+SRqd1eSrkq856QHhCJc+w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_FeedItem2"));
                })(varBag.model, idService);
            }
        },
        "xl80zGE310CARndRyYb9LA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_FeedItem"));
                })(varBag.model, idService);
            }
        },
        "_5I1LnjbEEOEOHBu23Xh0A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "1CI03MJxhk2Zf_YW9PT6ig": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});