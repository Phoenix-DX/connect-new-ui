define("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.controller$GetNameAndSurname_ByFullName", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_FromNotification", "in_FromNotificationIn", "In_FromNotification", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_FromNotificationInDataFetchStatus", "_in_FromNotificationInDataFetchStatus", "_in_FromNotificationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_MilestoneId", "in_MilestoneIdIn", "In_MilestoneId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HostId", "in_HostIdIn", "In_HostId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_HostIdInDataFetchStatus", "_in_HostIdInDataFetchStatus", "_in_HostIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_OrbitMilestoneTypeId", "in_OrbitMilestoneTypeIdIn", "In_OrbitMilestoneTypeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_MilestoneName", "in_MilestoneNameIn", "In_MilestoneName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvcModel.hasValidationWidgets || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_FromNotification" in inputs) {
                this.variables.in_FromNotificationIn = OS.DataConversion.ServerDataConverter.from(inputs.In_FromNotification, OS.DataTypes.DataTypes.Boolean);
            }

            if ("In_MilestoneId" in inputs) {
                this.variables.in_MilestoneIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MilestoneId, OS.DataTypes.DataTypes.Text);
            }

            if ("In_EventId" in inputs) {
                this.variables.in_EventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventId, OS.DataTypes.DataTypes.LongInteger);
            }

            if ("In_HostId" in inputs) {
                this.variables.in_HostIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HostId, OS.DataTypes.DataTypes.LongInteger);
            }

            if ("In_OrbitMilestoneTypeId" in inputs) {
                this.variables.in_OrbitMilestoneTypeIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_OrbitMilestoneTypeId, OS.DataTypes.DataTypes.Text);
            }

            if ("In_MilestoneName" in inputs) {
                this.variables.in_MilestoneNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MilestoneName, OS.DataTypes.DataTypes.Text);
            }

            if ("In_EventName" in inputs) {
                this.variables.in_EventNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventName, OS.DataTypes.DataTypes.Text);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Legacy_OrbitEventsFlow.MilestoneDetail");
});
define("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc$model", "UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.controller$GetNameAndSurname_ByFullName", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, React, OSView, UBTConnect_Legacy_OrbitEventsFlow_MilestoneDetail_mvc_model, UBTConnect_Legacy_OrbitEventsFlow_MilestoneDetail_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvc_view, OSWidgets, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_OrbitEventsFlow.MilestoneDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Legacy_OrbitEventsFlow_MilestoneDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Legacy_OrbitEventsFlow_MilestoneDetail_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "MilestoneDetail";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvc_view, {
                inputs: {
                    In_MilestoneName: model.variables.in_MilestoneNameIn,
                    In_HostId: model.variables.in_HostIdIn,
                    In_OrbitMilestoneTypeId: model.variables.in_OrbitMilestoneTypeIdIn,
                    In_MilestoneId: model.variables.in_MilestoneIdIn,
                    In_EventName: model.variables.in_EventNameIn,
                    In_FromNotification: model.variables.in_FromNotificationIn,
                    In_EventId: model.variables.in_EventIdIn
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    navigateTo_HouseholdDetail$Action: function(event_HouseholdIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MilestoneWrapper NavigateTo_HouseholdDetail");
                            controller.onHandle_NavigateToHouseholdDetail$Action(event_HouseholdIdIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_ContactHelpdesk$Action: function(event_SubjectIn, event_EventNameIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MilestoneWrapper NavigateTo_ContactHelpdesk");
                            controller.onHandle_ContactHelpdesk$Action(event_SubjectIn, event_EventNameIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_GuestArrangements$Action: function(event_MemberIdIn, event_MilestoneTypeIdIn, event_MilestoneTitleIn, event_HostIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MilestoneWrapper NavigateTo_GuestArrangements");
                            controller.onHandle_NavigateTo_GuestArrangements$Action(event_MemberIdIn, event_MilestoneTypeIdIn, event_MilestoneTitleIn, event_HostIdIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_ContactHostByEmail$Action: function(in_AvatarURLIn, in_ContactNameIn, in_ContactSurnameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MilestoneWrapper NavigateTo_ContactHostByEmail");
                            controller.onHandle_NavigateToContactByEmail$Action(in_AvatarURLIn, in_ContactNameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn, controller.callContext(eventHandlerContext));
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
                    menu_MealGuest: PlaceholderContent.Empty,
                    commonUI_Elements_MealGuest: new PlaceholderContent(function() {
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
                    }),
                    menu_MealHost: PlaceholderContent.Empty,
                    commonUI_Elements_MealHost: new PlaceholderContent(function() {
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
                                uuid: "2",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    menu_AccommodationGuest: PlaceholderContent.Empty,
                    commonUI_Elements_AccommodationGuest: new PlaceholderContent(function() {
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
                        })];
                    }),
                    menu_AccomodationHost: PlaceholderContent.Empty,
                    commonUI_Elements_AccomodationHost: new PlaceholderContent(function() {
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
                                uuid: "4",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    menu_Failed: PlaceholderContent.Empty,
                    commonUI_Elements_Failed: PlaceholderContent.Empty
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
                    uuid: "5",
                    alias: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc$debugger", "UBTConnect.Legacy_OrbitEventsFlow.controller", "UBTConnect.controller$GetNameAndSurname_ByFullName", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_OrbitEventsFlow_MilestoneDetail_mvc_Debugger, _flow_UBTConnect_Legacy_OrbitEventsFlowController) {
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
        Controller.prototype._onHandle_NavigateToContactByEmail$Action = function(in_AvatarURLIn, in_ContactNameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_NavigateToContactByEmail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.OnHandle_NavigateToContactByEmail$vars"))());
            vars.value.in_AvatarURLInLocal = in_AvatarURLIn;
            vars.value.in_ContactNameInLocal = in_ContactNameIn;
            vars.value.in_ContactLocalityInLocal = in_ContactLocalityIn;
            vars.value.in_ContactCountryInLocal = in_ContactCountryIn;
            vars.value.in_EmailToInLocal = in_EmailToIn;
            vars.value.in_SubjectInLocal = in_SubjectIn;
            vars.value.in_MilestoneTitleInLocal = in_MilestoneTitleIn;
            vars.value.in_FormattedDateTimeInLocal = in_FormattedDateTimeIn;
            var getNameAndSurname_ByFullNameVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getNameAndSurname_ByFullNameVar = getNameAndSurname_ByFullNameVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xcqSD+y51EyugYwXm0X9DA:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.hO4eUYOiV0azpnVX2N58zw/ClientActions.xcqSD+y51EyugYwXm0X9DA:3SK42+WHaV7GolFJh4DGvQ", "UBTConnect", "OnHandle_NavigateToContactByEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jhMRKihQ_EW4CkEJ4qJUrw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Gvb3zFYCxECN7qjU4WazAg", callContext.id);
                // Execute Action: GetNameAndSurname_ByFullName
                getNameAndSurname_ByFullNameVar.value = UBTConnectController.default.getNameAndSurname_ByFullName$Action(vars.value.in_ContactNameInLocal, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OfdvGw2eYk2LAlFuUQFqsg", callContext.id);
                // Destination: /UBTConnect/ContactByEmailOrbitHost
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailOrbitHost", {
                    In_HostName: OS.DataConversion.ServerDataConverter.asString(vars.value.in_ContactNameInLocal, OS.DataTypes.DataTypes.Text),
                    In_EntityType: OS.DataConversion.ServerDataConverter.asString(UBTConnectModel.staticEntities.connect_Entity.member, OS.DataTypes.DataTypes.Text),
                    In_Subject: OS.DataConversion.ServerDataConverter.asString(vars.value.in_SubjectInLocal, OS.DataTypes.DataTypes.Text),
                    In_ContactCountry: OS.DataConversion.ServerDataConverter.asString(vars.value.in_ContactCountryInLocal, OS.DataTypes.DataTypes.Text),
                    In_FormattedDateTime: OS.DataConversion.ServerDataConverter.asString(vars.value.in_FormattedDateTimeInLocal, OS.DataTypes.DataTypes.Text),
                    In_ContactLocality: OS.DataConversion.ServerDataConverter.asString(vars.value.in_ContactLocalityInLocal, OS.DataTypes.DataTypes.Text),
                    In_HostEmail: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EmailToInLocal, OS.DataTypes.DataTypes.Text),
                    In_Surname: OS.DataConversion.ServerDataConverter.asString(getNameAndSurname_ByFullNameVar.value.out_SurnameOut, OS.DataTypes.DataTypes.Text),
                    In_AvatarURL: OS.DataConversion.ServerDataConverter.asString(vars.value.in_AvatarURLInLocal, OS.DataTypes.DataTypes.Text),
                    In_EntityId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_HostIdIn, OS.DataTypes.DataTypes.LongInteger),
                    In_MilestoneTitle: OS.DataConversion.ServerDataConverter.asString(vars.value.in_MilestoneTitleInLocal, OS.DataTypes.DataTypes.Text),
                    In_EventName: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventNameIn, OS.DataTypes.DataTypes.Text)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xcqSD+y51EyugYwXm0X9DA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.OnHandle_NavigateToContactByEmail$vars", [{
            name: "In_AvatarURL",
            attrName: "in_AvatarURLInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "In_ContactName",
            attrName: "in_ContactNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "In_ContactLocality",
            attrName: "in_ContactLocalityInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "In_ContactCountry",
            attrName: "in_ContactCountryInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "In_EmailTo",
            attrName: "in_EmailToInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "In_Subject",
            attrName: "in_SubjectInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "In_MilestoneTitle",
            attrName: "in_MilestoneTitleInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "In_FormattedDateTime",
            attrName: "in_FormattedDateTimeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onHandle_NavigateTo_GuestArrangements$Action = function(memberIdIn, milestoneTypeIdIn, milestoneTitleIn, hostIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_NavigateTo_GuestArrangements");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.OnHandle_NavigateTo_GuestArrangements$vars"))());
            vars.value.memberIdInLocal = memberIdIn;
            vars.value.milestoneTypeIdInLocal = milestoneTypeIdIn;
            vars.value.milestoneTitleInLocal = milestoneTitleIn;
            vars.value.hostIdInLocal = hostIdIn;
            var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WgKmgaKMakCS2YpasRc9Gw:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.hO4eUYOiV0azpnVX2N58zw/ClientActions.WgKmgaKMakCS2YpasRc9Gw:sDUv2Vv8ELnRlrorRgH+yg", "UBTConnect", "OnHandle_NavigateTo_GuestArrangements", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7zY0HV0rCEi_N4gz1bPWcg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZLAUVxTPikiJ2lZIKcoE6g", callContext.id);
                // Execute Action: GetHasOrbitAccess
                getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

                // Has Orbit Access?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TJLprijosESpsk8nfdfm0Q", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9QR_xjve9E+qZZZErmsbvQ", callContext.id);
                    // Destination: /UBTConnect/GuestArrangements
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/GuestArrangements", {
                        In_EventId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventIdIn, OS.DataTypes.DataTypes.LongInteger),
                        In_EventName: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventNameIn, OS.DataTypes.DataTypes.Text),
                        In_MilestoneTitle: OS.DataConversion.ServerDataConverter.asString(vars.value.milestoneTitleInLocal, OS.DataTypes.DataTypes.Text),
                        In_HostId: OS.DataConversion.ServerDataConverter.asString(vars.value.hostIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                        In_MemberId: OS.DataConversion.ServerDataConverter.asString(vars.value.memberIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                        In_MilestoneId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_MilestoneIdIn, OS.DataTypes.DataTypes.Text),
                        In_OrbitMilestoneTypeId: OS.DataConversion.ServerDataConverter.asString(vars.value.milestoneTypeIdInLocal, OS.DataTypes.DataTypes.Text)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xvg2uJV2U0Wu0+eWC2b4hw", callContext.id);
                    // Execute Action: FeedbackMessageAfterTransition
                    Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:c0gLUMxP+0aby0F4599BJw", callContext.id);
                    // Destination: /UBTConnect/HomeFeed
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WgKmgaKMakCS2YpasRc9Gw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.OnHandle_NavigateTo_GuestArrangements$vars", [{
            name: "MemberId",
            attrName: "memberIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "MilestoneTypeId",
            attrName: "milestoneTypeIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "MilestoneTitle",
            attrName: "milestoneTitleInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "HostId",
            attrName: "hostIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onHandle_NavigateToHouseholdDetail$Action = function(householdIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_NavigateToHouseholdDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.OnHandle_NavigateToHouseholdDetail$vars"))());
            vars.value.householdIdInLocal = householdIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hOUOnqavT0+k9mwjbfX1Iw:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.hO4eUYOiV0azpnVX2N58zw/ClientActions.hOUOnqavT0+k9mwjbfX1Iw:GsFeMb2GNyKZN626DjwL0A", "UBTConnect", "OnHandle_NavigateToHouseholdDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wnkh+zXOBUC_zGlesOBM3w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o5O5b305ikCVL5Xyd839hQ", callContext.id);
                // Destination: /UBTConnect/HouseholdDetails
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
                    HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.householdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hOUOnqavT0+k9mwjbfX1Iw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.OnHandle_NavigateToHouseholdDetail$vars", [{
            name: "HouseholdId",
            attrName: "householdIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onHandle_ContactHelpdesk$Action = function(subjectIn, eventNameIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactHelpdesk");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.OnHandle_ContactHelpdesk$vars"))());
            vars.value.subjectInLocal = subjectIn;
            vars.value.eventNameInLocal = eventNameIn;
            var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1suw0eL_0UO15PsfMbCy6w:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.hO4eUYOiV0azpnVX2N58zw/ClientActions.1suw0eL_0UO15PsfMbCy6w:9ywh7jR_Vo+_UEiN+TAjYg", "UBTConnect", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5FHMKijTjka+UeM38ZFo7A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UrDM+u5Wq0Otwf+AnQsUIw", callContext.id);
                // Execute Action: GetHasOrbitAccess
                getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

                // Has Orbit Access?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R9WExGLaAEakpAZdjunwew", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pwZjYGAycUiEbCqUjzdfXw", callContext.id);
                    // Destination: /UBTConnect/ContactByEmailOrbitHelpdesk
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailOrbitHelpdesk", {
                        In_Subject: OS.DataConversion.ServerDataConverter.asString(vars.value.subjectInLocal, OS.DataTypes.DataTypes.Text),
                        In_MilestoneId: OS.DataConversion.ServerDataConverter.asString("", OS.DataTypes.DataTypes.Text),
                        In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
                        In_EventId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventIdIn, OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_lOviYh27UCsDF0pq0nkgQ", callContext.id);
                    // Execute Action: FeedbackMessageAfterTransition
                    Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZJoPNNXu9Eiy9fSjy2bDdQ", callContext.id);
                    // Destination: /UBTConnect/HomeFeed
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1suw0eL_0UO15PsfMbCy6w", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.OnHandle_ContactHelpdesk$vars", [{
            name: "Subject",
            attrName: "subjectInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
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

        Controller.prototype.onHandle_NavigateToContactByEmail$Action = function(in_AvatarURLIn, in_ContactNameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_NavigateToContactByEmail$Action, callContext, in_AvatarURLIn, in_ContactNameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn);

        };
        Controller.prototype.onHandle_NavigateTo_GuestArrangements$Action = function(memberIdIn, milestoneTypeIdIn, milestoneTitleIn, hostIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_NavigateTo_GuestArrangements$Action, callContext, memberIdIn, milestoneTypeIdIn, milestoneTitleIn, hostIdIn);

        };
        Controller.prototype.onHandle_NavigateToHouseholdDetail$Action = function(householdIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_NavigateToHouseholdDetail$Action, callContext, householdIdIn);

        };
        Controller.prototype.onHandle_ContactHelpdesk$Action = function(subjectIn, eventNameIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext, subjectIn, eventNameIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ETX542+jvkKT6PN6V5za9g:/NRWebFlows.ETX542+jvkKT6PN6V5za9g:8pcNe1EZJIP6giTtHUazkQ", "UBTConnect", "Legacy_OrbitEventsFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hO4eUYOiV0azpnVX2N58zw:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.hO4eUYOiV0azpnVX2N58zw:rjr6y6ohL7nAq5a9jvkFNw", "UBTConnect", "MilestoneDetail", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hO4eUYOiV0azpnVX2N58zw", callContext.id);
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

define("UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "8pNSy9zqUUWSdLdzqApoOA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_AvatarURLInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "XAc6vcPw7EaBT39QVbS+FA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ContactNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "GJAdwAgbgEKJdnQ6jeVeCg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ContactLocalityInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "dJuJxFSvwUOPIVJM7datvA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ContactCountryInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Fio4KmSU+kC+DJMPF3W4eA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EmailToInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "eaLnZZtH70yR6t2um3AIvA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_SubjectInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "KBO7iJDaxkeSvM5VLaGrzA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_MilestoneTitleInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "KZXlB6DG7k6fixEYsREwCw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_FormattedDateTimeInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Gvb3zFYCxECN7qjU4WazAg": {
            getter: function(varBag, idService) {
                return varBag.getNameAndSurname_ByFullNameVar.value;
            }
        },
        "vBIrbkSyCkWFz5dgLSRqCA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.memberIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "S+aufGMXnku53n24zpkiiA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.milestoneTypeIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "uVxMJik23Uy72Qf4bJPrSQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.milestoneTitleInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "wLGkYJrQTk6zPtkTgB4IUQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.hostIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "ZLAUVxTPikiJ2lZIKcoE6g": {
            getter: function(varBag, idService) {
                return varBag.getHasOrbitAccessVar.value;
            }
        },
        "P5bcubsw10unbAjGZ7KgcA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.householdIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "YQMMjNFfBESeaCE9OH7BuA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.subjectInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "UDjkRXeFVk6FRmAbcuoWzg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "UrDM+u5Wq0Otwf+AnQsUIw": {
            getter: function(varBag, idService) {
                return varBag.getHasOrbitAccessVar.value;
            }
        },
        "xUKnmpkd8E+SsOrEGONoCg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_FromNotificationIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "sR+fcTRbMUq3Y3lGydj37w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_MilestoneIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ve+y+lRyNUaqszFcM++3RA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "UboCGLIGgUyNZPJuY24ZEw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HostIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "ay1Uow3tYkWYfjwu+9jfaw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_OrbitMilestoneTypeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "PsbthEx5z0G3GXT2aO3gcw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_MilestoneNameIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "O_2I9PtMjEKz3Z30DspjCA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventNameIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "qUIYcLyf4Uqli5hvRdJRxQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_MealGuest"));
                })(varBag.model, idService);
            }
        },
        "ER4d1Z6zGEmF8oiS0mpn8A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements_MealGuest"));
                })(varBag.model, idService);
            }
        },
        "1GCgW8vVaEqLrnYGN0pLIw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_MealHost"));
                })(varBag.model, idService);
            }
        },
        "1cdoIBuOYECejXr4q2D5Ig": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements_MealHost"));
                })(varBag.model, idService);
            }
        },
        "pBwz_kBukUWkJ6ChcGt4OQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_AccommodationGuest"));
                })(varBag.model, idService);
            }
        },
        "UX8AeExibU6MRNB0sLaeTg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements_AccommodationGuest"));
                })(varBag.model, idService);
            }
        },
        "N+ttFJkfv0+l9zgQAoLdFg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_AccomodationHost"));
                })(varBag.model, idService);
            }
        },
        "8oQyd55Iv0Wv_elKaFjLFQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements_AccomodationHost"));
                })(varBag.model, idService);
            }
        },
        "+C_w5l3f6kuqunrPzrCq8w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_Failed"));
                })(varBag.model, idService);
            }
        },
        "a0aqW5WgmkqrS6KlWaMH+Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements_Failed"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});