define("UBTConnect.Legacy_OrbitEventsFlow.HostSurvey.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$model"], function(OutSystems, UBTConnectModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_MemberId", "in_MemberIdIn", "In_MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EventStartDate", "in_EventStartDateIn", "In_EventStartDate", true, false, OS.DataTypes.DataTypes.DateTime, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, false),
                this.attr("_in_EventStartDateInDataFetchStatus", "_in_EventStartDateInDataFetchStatus", "_in_EventStartDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EventEndDate", "in_EventEndDateIn", "In_EventEndDate", true, false, OS.DataTypes.DataTypes.DateTime, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, false),
                this.attr("_in_EventEndDateInDataFetchStatus", "_in_EventEndDateInDataFetchStatus", "_in_EventEndDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets || Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_EventId" in inputs) {
                this.variables.in_EventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventId, OS.DataTypes.DataTypes.LongInteger);
            }

            if ("In_MemberId" in inputs) {
                this.variables.in_MemberIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MemberId, OS.DataTypes.DataTypes.LongInteger);
            }

            if ("In_EventName" in inputs) {
                this.variables.in_EventNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventName, OS.DataTypes.DataTypes.Text);
            }

            if ("In_EventStartDate" in inputs) {
                this.variables.in_EventStartDateIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventStartDate, OS.DataTypes.DataTypes.DateTime);
            }

            if ("In_EventEndDate" in inputs) {
                this.variables.in_EventEndDateIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventEndDate, OS.DataTypes.DataTypes.DateTime);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Legacy_OrbitEventsFlow.HostSurvey");
});
define("UBTConnect.Legacy_OrbitEventsFlow.HostSurvey.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_OrbitEventsFlow.HostSurvey.mvc$model", "UBTConnect.Legacy_OrbitEventsFlow.HostSurvey.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$view"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Legacy_OrbitEventsFlow_HostSurvey_mvc_model, UBTConnect_Legacy_OrbitEventsFlow_HostSurvey_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvc_view) {
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
        View.displayName = "Legacy_OrbitEventsFlow.HostSurvey";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Legacy_OrbitEventsFlow_HostSurvey_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Legacy_OrbitEventsFlow_HostSurvey_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "HostSurvey";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvc_view, {
                inputs: {
                    In_EventEndDate: model.variables.in_EventEndDateIn,
                    In_MemberId: model.variables.in_MemberIdIn,
                    In_EventName: model.variables.in_EventNameIn,
                    In_EventId: model.variables.in_EventIdIn,
                    In_EventStartDate: model.variables.in_EventStartDateIn
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    navigateTo_Back$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey NavigateTo_Back");
                            controller.onHandle_NavigateTo_Back$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "1",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    menu: PlaceholderContent.Empty,
                    commonUI_Elements: PlaceholderContent.Empty
                },
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Legacy_OrbitEventsFlow.HostSurvey.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_OrbitEventsFlow.HostSurvey.mvc$debugger", "UBTConnect.Legacy_OrbitEventsFlow.controller"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_OrbitEventsFlow_HostSurvey_mvc_Debugger, _flow_UBTConnect_Legacy_OrbitEventsFlowController) {
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
        Controller.prototype._onHandle_NavigateTo_Back$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_NavigateTo_Back");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:g5vuocbk3E67vv0E7dMvTw:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.AxS5_3eRO0mOQCOY+6j_mA/ClientActions.g5vuocbk3E67vv0E7dMvTw:cX1G5z2n2GHCwS0FK+DYbA", "UBTConnect", "OnHandle_NavigateTo_Back", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G+Bj8rjZ_EWQR4vAPrc9tw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PS9U6p1j8kCUxxtN6GQ8RA", callContext.id);
                // Destination: (PreviousScreen)
                return OS.Navigation.navigateBack(null, callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:g5vuocbk3E67vv0E7dMvTw", callContext.id);
            }

        };

        Controller.prototype.onHandle_NavigateTo_Back$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_NavigateTo_Back$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ETX542+jvkKT6PN6V5za9g:/NRWebFlows.ETX542+jvkKT6PN6V5za9g:8pcNe1EZJIP6giTtHUazkQ", "UBTConnect", "Legacy_OrbitEventsFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AxS5_3eRO0mOQCOY+6j_mA:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.AxS5_3eRO0mOQCOY+6j_mA:FtYwsHpOUYG6tV2mGLEwEQ", "UBTConnect", "HostSurvey", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AxS5_3eRO0mOQCOY+6j_mA", callContext.id);
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

define("UBTConnect.Legacy_OrbitEventsFlow.HostSurvey.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "XC8Lh8QCK0meqi07bLoD9Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "YDvDezQAY0quHaq4l3EsTg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_MemberIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "sISXSQMmmUCTZjrc2b2v1g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventNameIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "fg8vrc1GnE6FqjIAlvSWCA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventStartDateIn;
            },
            dataType: OS.DataTypes.DataTypes.DateTime
        },
        "YnAWR9GtXkGipJo514_q8Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventEndDateIn;
            },
            dataType: OS.DataTypes.DataTypes.DateTime
        },
        "L62Ru1OBRkOtNkneDf806g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "IUNFfSg+UkaUmWRxUATF0Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});