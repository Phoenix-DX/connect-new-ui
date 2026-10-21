define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.controller$GetNameAndSurname_ByFullName", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function(OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTConnect_UtilsController, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
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
                    Model._hasValidationWidgetsValue = ((Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvcModel.hasValidationWidgets || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2");
});
define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc$model", "UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.controller$GetNameAndSurname_ByFullName", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function(OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTConnect_UtilsController, React, OSView, UBTConnect_Legacy_LDMEventsFlow_V2_LDM_MyEvents_V2_mvc_model, UBTConnect_Legacy_LDMEventsFlow_V2_LDM_MyEvents_V2_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_view, OSWidgets, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Legacy_LDMEventsFlow_V2_LDM_MyEvents_V2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Legacy_LDMEventsFlow_V2_LDM_MyEvents_V2_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "LDM_MyEvents_V2";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    navigateTo_EventDetail$Action: function(eventHostIdIn, eventIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2 NavigateTo_EventDetail");
                            controller.handler_NavigateTo_EventDetail$Action(eventHostIdIn, eventIdIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_HouseholdCarousel$Action: function(in_HouseholdIdIn, in_CurrentRowNumberIn, in_LengthIn, in_EventHostIdIn, in_EventIdIn, in_IsHostingIn, in_HouseholdIdListIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2 NavigateTo_HouseholdCarousel");
                            controller.handler_NavigateTo_HouseholdCarousel$Action(in_HouseholdIdIn, in_HouseholdIdListIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateToMyCalendar$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2 NavigateToMyCalendar");
                            controller.screenBlock_MyEventsNavigateToMyCalendar$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateTo_ContactByEmail$Action: function(in_AvatarURLIn, in_ContactNameIn, in_ContactSurnameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2 NavigateTo_ContactByEmail");
                            controller.handler_NavigateTo_ContactByEmail$Action(in_AvatarURLIn, in_ContactNameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, controller.callContext(eventHandlerContext));
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
define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc$debugger", "UBTConnect.Legacy_LDMEventsFlow_V2.controller", "UBTConnect.controller$GetNameAndSurname_ByFullName", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function(OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_LDMEventsFlow_V2_LDM_MyEvents_V2_mvc_Debugger, _flow_UBTConnect_Legacy_LDMEventsFlow_V2Controller) {
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
        Controller.prototype._handler_NavigateTo_ContactByEmail$Action = function(in_AvatarURLIn, in_ContactNameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_ContactByEmail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.Handler_NavigateTo_ContactByEmail$vars"))());
            vars.value.in_AvatarURLInLocal = in_AvatarURLIn;
            vars.value.in_ContactNameInLocal = in_ContactNameIn;
            vars.value.in_ContactLocalityInLocal = in_ContactLocalityIn;
            vars.value.in_ContactCountryInLocal = in_ContactCountryIn;
            vars.value.in_EmailToInLocal = in_EmailToIn;
            var getNameAndSurname_ByFullNameVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getNameAndSurname_ByFullNameVar = getNameAndSurname_ByFullNameVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7J3GATWPCEWqGJDAMemZLA:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.K_omiv7p9kuVt6_9tAS_0w/ClientActions.7J3GATWPCEWqGJDAMemZLA:CuPH_mOh9nKv2xmvpzRXOg", "UBTConnect", "Handler_NavigateTo_ContactByEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3W5caNLdn0eP5WKuEB8qBA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XoYrshsmjUuf1WU2wwdbAQ", callContext.id);
                // Execute Action: GetNameAndSurname_ByFullName
                getNameAndSurname_ByFullNameVar.value = UBTConnectController.default.getNameAndSurname_ByFullName$Action(vars.value.in_ContactNameInLocal, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hy7aaUXU6kC1DB+UlF83Hw", callContext.id);
                // Destination: /UBTConnect/ContactByEmailMember
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailMember", {
                    In_AvatarURL: OS.DataConversion.ServerDataConverter.asString(vars.value.in_AvatarURLInLocal, OS.DataTypes.DataTypes.Text),
                    In_ContactCountry: OS.DataConversion.ServerDataConverter.asString(vars.value.in_ContactCountryInLocal, OS.DataTypes.DataTypes.Text),
                    In_IsHousehold: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean),
                    In_HouseholdHeaderName: OS.DataConversion.ServerDataConverter.asString(getNameAndSurname_ByFullNameVar.value.out_SurnameOut, OS.DataTypes.DataTypes.Text),
                    In_ContactName: OS.DataConversion.ServerDataConverter.asString(getNameAndSurname_ByFullNameVar.value.out_NameOut, OS.DataTypes.DataTypes.Text),
                    In_ContactLocality: OS.DataConversion.ServerDataConverter.asString(vars.value.in_ContactLocalityInLocal, OS.DataTypes.DataTypes.Text),
                    In_ContactSurname: OS.DataConversion.ServerDataConverter.asString(getNameAndSurname_ByFullNameVar.value.out_SurnameOut, OS.DataTypes.DataTypes.Text),
                    In_EmailTo: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EmailToInLocal, OS.DataTypes.DataTypes.Text)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7J3GATWPCEWqGJDAMemZLA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.Handler_NavigateTo_ContactByEmail$vars", [{
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
        }]);
        Controller.prototype._handler_NavigateTo_EventDetail$Action = function(in_EventHostIdIn, in_EventIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_EventDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.Handler_NavigateTo_EventDetail$vars"))());
            vars.value.in_EventHostIdInLocal = in_EventHostIdIn;
            vars.value.in_EventIdInLocal = in_EventIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:zn9BQngABkCKL7Z2O7yJow:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.K_omiv7p9kuVt6_9tAS_0w/ClientActions.zn9BQngABkCKL7Z2O7yJow:RCd3ozKC305Q8ZiJQoZOVw", "UBTConnect", "Handler_NavigateTo_EventDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3luAsa+yJkSvTQzU98oW_A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XEO4TbPq7kGBUz2n3+rLNw", callContext.id);
                // Destination: /UBTConnect/LDM_EventDetail_V2
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LDM_EventDetail_V2", {
                    EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                    EventHostId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventHostIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zn9BQngABkCKL7Z2O7yJow", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.Handler_NavigateTo_EventDetail$vars", [{
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
        Controller.prototype._screenBlock_MyEventsNavigateToMyCalendar$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenBlock_MyEventsNavigateToMyCalendar");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:cM_rkAONVkOLH7uXTCykEg:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.K_omiv7p9kuVt6_9tAS_0w/ClientActions.cM_rkAONVkOLH7uXTCykEg:Ep8MdB7o1dAs5WiSKERHDw", "UBTConnect", "ScreenBlock_MyEventsNavigateToMyCalendar", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mgu2KKWiOUCHvwFW8NUa6A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Awi9tpisrkqHg_A+gw1kAg", callContext.id);
                // Destination: /UBTConnect/MyEntertaining
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/MyEntertaining", {
                    MyCalendarEventSourceId: OS.DataConversion.ServerDataConverter.asString(UBTConnectModel.staticEntities.type_MyCalendarEventSource.lDM, OS.DataTypes.DataTypes.Text)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cM_rkAONVkOLH7uXTCykEg", callContext.id);
            }

        };
        Controller.prototype._handler_NavigateTo_HouseholdCarousel$Action = function(in_HouseholdIdIn, householdIdListIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_HouseholdCarousel");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.Handler_NavigateTo_HouseholdCarousel$vars"))());
            vars.value.in_HouseholdIdInLocal = in_HouseholdIdIn;
            vars.value.householdIdListInLocal = householdIdListIn.clone();
            var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WkVvyLZXH0SccTRwkhqg9Q:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.K_omiv7p9kuVt6_9tAS_0w/ClientActions.WkVvyLZXH0SccTRwkhqg9Q:YcU79VzjsI8jDOPQifSQnw", "UBTConnect", "Handler_NavigateTo_HouseholdCarousel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uUfIcywZ5UW49f065VLUMQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NVjngAfdl0mbiAVzkECZ7A", callContext.id);
                // Execute Action: GetHasCarouselEnabled
                getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iExVR1lbj0OpoG03Bb4ZSw", callContext.id) && getHasCarouselEnabledVar.value.hasCarouselEnabledOut)) {
                    // Foreach HouseholdIdList
                    callContext.iterationContext.registerIterationStart(vars.value.householdIdListInLocal);
                    try {
                        var householdIdListIterator = callContext.iterationContext.getIterator(vars.value.householdIdListInLocal);
                        var householdIdListIndex = 0;
                        while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WZX4G2sK_0GPYM5dQ78Zhg", callContext.id) && (householdIdListIndex < vars.value.householdIdListInLocal.length))) {
                            householdIdListIterator.currentRowNumber = householdIdListIndex;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FFWSt3jeGEGRJR1h0Xx3dQ", callContext.id);
                            // Execute Action: ListAppend
                            OS.SystemActions.listAppend(vars.value.preloadedHouseholdIdsVar.carouselHouseholdItemAttr, function() {
                                var rec = new UBTConnectModel.SwipeActionLongIntegerRecord();
                                rec.householdAttr = vars.value.householdIdListInLocal.getItem(householdIdListIndex.valueOf());
                                return rec;
                            }(), callContext);
                            householdIdListIndex++;
                        }

                    } finally {
                        callContext.iterationContext.registerIterationEnd(vars.value.householdIdListInLocal);
                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YFL+N7QTYEu+u7gEtqyRHA", callContext.id);
                    // Execute Action: SetPreloadObject
                    NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.preloadedHouseholdIdsVar), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JknS_K1Dz0WiVxqxcR+hjg", callContext.id);
                    // Destination: /UBTConnect/HouseholdCarousel
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
                        In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_HouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0akH4l5lm0afdDgaKH+R6w", callContext.id);
                    // Destination: /UBTConnect/HouseholdDetails
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
                        HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_HouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WkVvyLZXH0SccTRwkhqg9Q", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.Handler_NavigateTo_HouseholdCarousel$vars", [{
            name: "In_HouseholdId",
            attrName: "in_HouseholdIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "HouseholdIdList",
            attrName: "householdIdListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new OS.DataTypes.LongIntegerList();
            },
            complexType: OS.DataTypes.LongIntegerList
        }, {
            name: "PreloadedHouseholdIds",
            attrName: "preloadedHouseholdIdsVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.CarouselPreloadedHouseholdsRec();
            },
            complexType: UBTConnectModel.CarouselPreloadedHouseholdsRec
        }]);

        Controller.prototype.handler_NavigateTo_ContactByEmail$Action = function(in_AvatarURLIn, in_ContactNameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_ContactByEmail$Action, callContext, in_AvatarURLIn, in_ContactNameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn);

        };
        Controller.prototype.handler_NavigateTo_EventDetail$Action = function(in_EventHostIdIn, in_EventIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_EventDetail$Action, callContext, in_EventHostIdIn, in_EventIdIn);

        };
        Controller.prototype.screenBlock_MyEventsNavigateToMyCalendar$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenBlock_MyEventsNavigateToMyCalendar$Action, callContext);

        };
        Controller.prototype.handler_NavigateTo_HouseholdCarousel$Action = function(in_HouseholdIdIn, householdIdListIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_HouseholdCarousel$Action, callContext, in_HouseholdIdIn, householdIdListIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:vp3CfrrlWk2JWh0AlH96Mw:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw:fQlsuSeDqt3ldNC2vcS_Cw", "UBTConnect", "Legacy_LDMEventsFlow_V2", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:K_omiv7p9kuVt6_9tAS_0w:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.K_omiv7p9kuVt6_9tAS_0w:PQDdBXfsVz0xd30okCX5mw", "UBTConnect", "LDM_MyEvents_V2", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:K_omiv7p9kuVt6_9tAS_0w", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vp3CfrrlWk2JWh0AlH96Mw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_Legacy_LDMEventsFlow_V2Controller.default.handleError(ex, this.callContext());
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

define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_MyEvents_V2.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "bldiVSRquUunDD2B3WFqUQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_AvatarURLInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "NGzW7uC5Q0S_gQmvZvTOJA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ContactNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "BkjJNcAJxkiQmoKtopsHsw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ContactLocalityInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "4ZeR0PnM0ki9uYH9z9QmHA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ContactCountryInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "JqKOdK1Twk26da6AsFmxQA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EmailToInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "XoYrshsmjUuf1WU2wwdbAQ": {
            getter: function(varBag, idService) {
                return varBag.getNameAndSurname_ByFullNameVar.value;
            }
        },
        "R9JSXmuC6keKzdhslj97Ag": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventHostIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "bls+XnfWyEa32aP9l1oN6g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "E3WfM+FVqUSeWrRSkG3gsQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.preloadedHouseholdIdsVar;
            }
        },
        "09Ay7DN6yU68Fadwmv5OAw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_HouseholdIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "IbCqqmaeX0ivFcC8SJm4ow": {
            getter: function(varBag, idService) {
                return varBag.vars.value.householdIdListInLocal;
            }
        },
        "NVjngAfdl0mbiAVzkECZ7A": {
            getter: function(varBag, idService) {
                return varBag.getHasCarouselEnabledVar.value;
            }
        },
        "IyIdkkdgzkKo8QozNayGuQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "7ucEpxVCG0SZR3xPca8UEA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "moCKISlgQUall++P1eel8w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});