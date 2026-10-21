define("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, Connect2_LegacySharedController, UBTConnect_UtilsController, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
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
                    Model._hasValidationWidgetsValue = ((Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvcModel.hasValidationWidgets || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "Legacy_OrbitEventsFlow.OrbitLanding");
});
define("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.mvc$model", "UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect2_LegacySharedController, UBTConnect_UtilsController, React, OSView, UBTConnect_Legacy_OrbitEventsFlow_OrbitLanding_mvc_model, UBTConnect_Legacy_OrbitEventsFlow_OrbitLanding_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_view, OSWidgets, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_OrbitEventsFlow.OrbitLanding";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Legacy_OrbitEventsFlow_OrbitLanding_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Legacy_OrbitEventsFlow_OrbitLanding_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "OrbitLanding";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    navigateTo_EventDetail$Action: function(event_EventIdIn, event_EventNameIn, event_MemberIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding NavigateTo_EventDetail");
                            controller.onHandle_NavigateToEventDetail$Action(event_EventIdIn, event_EventNameIn, event_MemberIdIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_PassportScan$Action: function(targetIdIn, loginMemberIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding NavigateTo_PassportScan");
                            controller.onHandle_NavigateToPassportScan$Action(targetIdIn, loginMemberIdIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_TransportDetail$Action: function(event_MilestoneIdIn, event_OrbitMilestoneTypeIdIn, event_MilestoneNameIn, event_MemberIdIn, event_HeaderClassIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding NavigateTo_TransportDetail");
                            controller.onHandle_NavigateToTransportDetail$Action(event_MilestoneIdIn, event_OrbitMilestoneTypeIdIn, event_MilestoneNameIn, event_HeaderClassIn, event_MemberIdIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_MyCalendarOrbit$Action: function(memberIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding NavigateTo_MyCalendarOrbit");
                            controller.onHandle_NavigateToMyCalendarOrbit$Action(memberIdIn, controller.callContext(eventHandlerContext));
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
                    menu: PlaceholderContent.Empty,
                    bottomBar: new PlaceholderContent(function() {
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    commonUI_Elements: PlaceholderContent.Empty
                },
                _dependencies: []
            }), React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.mvc$debugger", "UBTConnect.Legacy_OrbitEventsFlow.controller", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect2_LegacySharedController, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_OrbitEventsFlow_OrbitLanding_mvc_Debugger, _flow_UBTConnect_Legacy_OrbitEventsFlowController) {
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
        Controller.prototype._onHandle_NavigateToMyCalendarOrbit$Action = function(memberIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_NavigateToMyCalendarOrbit");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.OnHandle_NavigateToMyCalendarOrbit$vars"))());
            vars.value.memberIdInLocal = memberIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:6vF3HkssS0SBx_NNZO9sLQ:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.vJd+oOnkj0SzYGn+ODfm0A/ClientActions.6vF3HkssS0SBx_NNZO9sLQ:UdNk8RX_jMxjYvNe5jDR1w", "UBTConnect", "OnHandle_NavigateToMyCalendarOrbit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o0H84AHmDUGzJyNx02rWHw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:O038RxL0QEKGqwHMS+OA2w", callContext.id);
                // Destination: /UBTConnect/MyEntertaining
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/MyEntertaining", {
                    MyCalendarEventSourceId: OS.DataConversion.ServerDataConverter.asString(UBTConnectModel.staticEntities.type_MyCalendarEventSource.orbit, OS.DataTypes.DataTypes.Text)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:6vF3HkssS0SBx_NNZO9sLQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.OnHandle_NavigateToMyCalendarOrbit$vars", [{
            name: "MemberId",
            attrName: "memberIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onHandle_NavigateToTransportDetail$Action = function(milestoneIdIn, orbitMilestoneTypeIdIn, milestoneNameIn, headerClassIn, targetMemberIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_NavigateToTransportDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.OnHandle_NavigateToTransportDetail$vars"))());
            vars.value.milestoneIdInLocal = milestoneIdIn;
            vars.value.orbitMilestoneTypeIdInLocal = orbitMilestoneTypeIdIn;
            vars.value.milestoneNameInLocal = milestoneNameIn;
            vars.value.headerClassInLocal = headerClassIn;
            vars.value.targetMemberIdInLocal = targetMemberIdIn;
            var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MdgqbEPb5UC2tn33EiB1aw:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.vJd+oOnkj0SzYGn+ODfm0A/ClientActions.MdgqbEPb5UC2tn33EiB1aw:O5lhrMYVPq9NgPock4A2yA", "UBTConnect", "OnHandle_NavigateToTransportDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3ZmmcQPnHUK3W4UzknG+kA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kLSBapvkbEu+xwXy_llpyA", callContext.id);
                // Execute Action: GetHasOrbitAccess
                getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

                // Has Orbit Access?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NPglVJ8DREiET5OE5J6I6Q", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jLtaR4M0GUWE3YEQLXfihA", callContext.id);
                    // Destination: /UBTConnect/TransportDetail
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/TransportDetail", {
                        In_TargetMemberId: OS.DataConversion.ServerDataConverter.asString(vars.value.targetMemberIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                        In_OrbitMilestoneTypeId: OS.DataConversion.ServerDataConverter.asString(vars.value.orbitMilestoneTypeIdInLocal, OS.DataTypes.DataTypes.Text),
                        In_MilestoneId: OS.DataConversion.ServerDataConverter.asString(vars.value.milestoneIdInLocal, OS.DataTypes.DataTypes.Text),
                        In_HeaderClass: OS.DataConversion.ServerDataConverter.asString(vars.value.headerClassInLocal, OS.DataTypes.DataTypes.Text),
                        In_MilestoneName: OS.DataConversion.ServerDataConverter.asString(vars.value.milestoneNameInLocal, OS.DataTypes.DataTypes.Text)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9lU3EXGKskq99zhmVWdh4w", callContext.id);
                    // Execute Action: FeedbackMessageAfterTransition
                    Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RTrdM15tYEukTCWujsdewA", callContext.id);
                    // Destination: /UBTConnect/HomeFeed
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MdgqbEPb5UC2tn33EiB1aw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.OnHandle_NavigateToTransportDetail$vars", [{
            name: "MilestoneId",
            attrName: "milestoneIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "OrbitMilestoneTypeId",
            attrName: "orbitMilestoneTypeIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "MilestoneName",
            attrName: "milestoneNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "HeaderClass",
            attrName: "headerClassInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "TargetMemberId",
            attrName: "targetMemberIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onHandle_NavigateToPassportScan$Action = function(targetMemberIdIn, loginMemberIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_NavigateToPassportScan");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.OnHandle_NavigateToPassportScan$vars"))());
            vars.value.targetMemberIdInLocal = targetMemberIdIn;
            vars.value.loginMemberIdInLocal = loginMemberIdIn;
            var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:a2qti+nucE+cDRVx5J7e1A:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.vJd+oOnkj0SzYGn+ODfm0A/ClientActions.a2qti+nucE+cDRVx5J7e1A:z+jL8ZlKe67QLs5nLPXPqQ", "UBTConnect", "OnHandle_NavigateToPassportScan", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EoZptCzIfEmanCleYe4HqQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0ZUaHGnZt0CLrGW_Hv3GOg", callContext.id);
                // Execute Action: GetHasOrbitAccess
                getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

                // Has Orbit Access?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3jszfx9RVkufKKUcCRvO5g", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1waSXiBeYEik7zCZMKZ1rw", callContext.id);
                    // Destination: /UBTConnect/PassportScan
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/PassportScan", {
                        LoginMemberId: OS.DataConversion.ServerDataConverter.asString(vars.value.loginMemberIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                        TargetId: OS.DataConversion.ServerDataConverter.asString(vars.value.targetMemberIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0BhtbFuVKEGLqlxU+Kopfg", callContext.id);
                    // Destination: /UBTConnect/HomeFeed
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:a2qti+nucE+cDRVx5J7e1A", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.OnHandle_NavigateToPassportScan$vars", [{
            name: "TargetMemberId",
            attrName: "targetMemberIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "LoginMemberId",
            attrName: "loginMemberIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onHandle_NavigateToEventDetail$Action = function(eventIdIn, eventNameIn, memberIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_NavigateToEventDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.OnHandle_NavigateToEventDetail$vars"))());
            vars.value.eventIdInLocal = eventIdIn;
            vars.value.eventNameInLocal = eventNameIn;
            vars.value.memberIdInLocal = memberIdIn;
            var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dgTg+o6GLEy6H668Ie_nbw:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.vJd+oOnkj0SzYGn+ODfm0A/ClientActions.dgTg+o6GLEy6H668Ie_nbw:UoEyegVFN+kgKs1uOkrT4w", "UBTConnect", "OnHandle_NavigateToEventDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IysEMJfpI0aIQokLssmjxw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mSnuXb0Btkuj91fgVFS5qQ", callContext.id);
                // Execute Action: GetHasOrbitAccess
                getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

                // Has Orbit Access?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JGBKaZZxoECDJhEVtOyVRw", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fUJeCpMnR0OPPZ6tIPsZkw", callContext.id);
                    // Destination: /UBTConnect/EventDetail
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/EventDetail", {
                        In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                        In_MemberId: OS.DataConversion.ServerDataConverter.asString(vars.value.memberIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                        In_FromNotification: OS.DataConversion.ServerDataConverter.asString(false, OS.DataTypes.DataTypes.Boolean),
                        In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:etyv2CCCV0C67EAFZhyspQ", callContext.id);
                    // Execute Action: FeedbackMessageAfterTransition
                    Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1B0K161860WG7KHSuqASeg", callContext.id);
                    // Destination: /UBTConnect/HomeFeed
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dgTg+o6GLEy6H668Ie_nbw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.OnHandle_NavigateToEventDetail$vars", [{
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
        }, {
            name: "MemberId",
            attrName: "memberIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);

        Controller.prototype.onHandle_NavigateToMyCalendarOrbit$Action = function(memberIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_NavigateToMyCalendarOrbit$Action, callContext, memberIdIn);

        };
        Controller.prototype.onHandle_NavigateToTransportDetail$Action = function(milestoneIdIn, orbitMilestoneTypeIdIn, milestoneNameIn, headerClassIn, targetMemberIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_NavigateToTransportDetail$Action, callContext, milestoneIdIn, orbitMilestoneTypeIdIn, milestoneNameIn, headerClassIn, targetMemberIdIn);

        };
        Controller.prototype.onHandle_NavigateToPassportScan$Action = function(targetMemberIdIn, loginMemberIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_NavigateToPassportScan$Action, callContext, targetMemberIdIn, loginMemberIdIn);

        };
        Controller.prototype.onHandle_NavigateToEventDetail$Action = function(eventIdIn, eventNameIn, memberIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_NavigateToEventDetail$Action, callContext, eventIdIn, eventNameIn, memberIdIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ETX542+jvkKT6PN6V5za9g:/NRWebFlows.ETX542+jvkKT6PN6V5za9g:8pcNe1EZJIP6giTtHUazkQ", "UBTConnect", "Legacy_OrbitEventsFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:vJd+oOnkj0SzYGn+ODfm0A:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.vJd+oOnkj0SzYGn+ODfm0A:jBU5owoQMH_i+vAchvpbhg", "UBTConnect", "OrbitLanding", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vJd+oOnkj0SzYGn+ODfm0A", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ETX542+jvkKT6PN6V5za9g", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_Legacy_OrbitEventsFlowController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Legacy_OrbitEventsFlow.OrbitLanding.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "MiUyHt2kU0SlFB29wEEcZA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.memberIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "tNWaZJOB+U6630pKNpZZtA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.milestoneIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "7vPefJtVj0+AW5RFLUmlcw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.orbitMilestoneTypeIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "qx4Ra1bwW0qyy_2DyTlgog": {
            getter: function(varBag, idService) {
                return varBag.vars.value.milestoneNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "JE3tChF_jUGO7MGt3fMSug": {
            getter: function(varBag, idService) {
                return varBag.vars.value.headerClassInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "76XazKrKvkqPpuVgpeHR9w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.targetMemberIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "kLSBapvkbEu+xwXy_llpyA": {
            getter: function(varBag, idService) {
                return varBag.getHasOrbitAccessVar.value;
            }
        },
        "w8L8Y_1eok2pEPfOK9mY2Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.targetMemberIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "BC2q3H9e60ml8ehy9+8DMg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.loginMemberIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "0ZUaHGnZt0CLrGW_Hv3GOg": {
            getter: function(varBag, idService) {
                return varBag.getHasOrbitAccessVar.value;
            }
        },
        "LDohPh2Gdkeie6mOc0UnWQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "AbWTeUuNMkq3b7Y1yMCFww": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "zGjVfUe0bEWzwOtH1XhKvg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.memberIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "mSnuXb0Btkuj91fgVFS5qQ": {
            getter: function(varBag, idService) {
                return varBag.getHasOrbitAccessVar.value;
            }
        },
        "7N8TuwYqXkuPQGKlvHiBDQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "U1cF2QrxKESUC0SG2iGQhg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "FC13KWQ5I0ihQDKhJmsIFw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});