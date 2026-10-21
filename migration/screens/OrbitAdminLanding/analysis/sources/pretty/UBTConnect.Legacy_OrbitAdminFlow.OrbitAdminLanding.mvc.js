define("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model"], function(OutSystems, UBTConnectModel, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
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
                    Model._hasValidationWidgetsValue = ((Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvcModel.hasValidationWidgets || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "Legacy_OrbitAdminFlow.OrbitAdminLanding");
});
define("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc$model", "UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Legacy_OrbitAdminFlow_OrbitAdminLanding_mvc_model, UBTConnect_Legacy_OrbitAdminFlow_OrbitAdminLanding_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_view, OSWidgets, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_OrbitAdminFlow.OrbitAdminLanding";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Legacy_OrbitAdminFlow_OrbitAdminLanding_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Legacy_OrbitAdminFlow_OrbitAdminLanding_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "OrbitAdminLanding";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    navigateTo_EventDetail$Action: function(event_EventIdIn, event_EventNameIn, event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn, event_EventTypeFriendlyIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding NavigateTo_EventDetail");
                                return controller.onHandle_NavigateToEventDetail$Action(event_EventIdIn, event_EventNameIn, event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn, event_EventTypeFriendlyIn, controller.callContext(eventHandlerContext));
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
define("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc$debugger", "UBTConnect.Legacy_OrbitAdminFlow.controller"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_OrbitAdminFlow_OrbitAdminLanding_mvc_Debugger, _flow_UBTConnect_Legacy_OrbitAdminFlowController) {
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
        Controller.prototype.getMilestoneScanFF$ServerAction = function(callContext) {
            var controller = this.controller;
            return controller.callServerAction("GetMilestoneScanFF", "screenservices/UBTConnect/Legacy_OrbitAdminFlow/OrbitAdminLanding/ActionGetMilestoneScanFF", "RhHkPTAzICMbFC9uDxQotA", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding$rssespaceconnect2_orbitmobile_bl_ActionGetMilestoneScanFF"))();
                executeServerActionResult.isScanPerMilestoneOut = OS.DataConversion.ServerDataConverter.from(outputs.IsScanPerMilestone, OS.DataTypes.DataTypes.Boolean);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding$rssespaceconnect2_orbitmobile_bl_ActionGetMilestoneScanFF", [{
            name: "IsScanPerMilestone",
            attrName: "isScanPerMilestoneOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._onHandle_NavigateToEventDetail$Action = function(eventIdIn, eventNameIn, eventStartDateIn, eventEndDateIn, eventLocationIn, eventTypeFriendlyIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_NavigateToEventDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.OnHandle_NavigateToEventDetail$vars"))());
            vars.value.eventIdInLocal = eventIdIn;
            vars.value.eventNameInLocal = eventNameIn;
            vars.value.eventStartDateInLocal = eventStartDateIn;
            vars.value.eventEndDateInLocal = eventEndDateIn;
            vars.value.eventLocationInLocal = eventLocationIn;
            vars.value.eventTypeFriendlyInLocal = eventTypeFriendlyIn;
            var getMilestoneScanFFVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getMilestoneScanFFVar = getMilestoneScanFFVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:m9zBkaLc0kWjI3Zdd80qgw:/NRWebFlows.l2seXCPsqkCFoRS4srVaoA/NodesShownInESpaceTree.mQ5d8UTLhkK1k3vpl_oWew/ClientActions.m9zBkaLc0kWjI3Zdd80qgw:q6twvRIoIBkEFmRETaAnNg", "UBTConnect", "OnHandle_NavigateToEventDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G8_DgJXiBEqy_yTo9y+z8A", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gNtp_yUDuk6ekDaPNddM6Q", callContext.id);
                // Execute Action: GetMilestoneScanFF
                model.flush();
                return controller.getMilestoneScanFF$ServerAction(callContext).then(function(value) {
                    getMilestoneScanFFVar.value = value;
                }).then(function() {
                    // Has Scan Milestone?
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b076F_RhL0CXKSvLy3OGOA", callContext.id) && getMilestoneScanFFVar.value.isScanPerMilestoneOut)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8TQNwpKX80WNqkJvSfKs4w", callContext.id);
                        // Destination: /UBTConnect/OrbitAdminMilestones
                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OrbitAdminMilestones", {
                            EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:chzHoSKr4EOQQ9X70yxVEQ", callContext.id);
                        // Destination: /UBTConnect/OrbitAdminEventDetail
                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OrbitAdminEventDetail", {
                            In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                            In_EventStartDate: OS.DataConversion.ServerDataConverter.asString(vars.value.eventStartDateInLocal, OS.DataTypes.DataTypes.DateTime),
                            In_EventLocation: OS.DataConversion.ServerDataConverter.asString(vars.value.eventLocationInLocal, OS.DataTypes.DataTypes.Text),
                            In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
                            In_EventEndDate: OS.DataConversion.ServerDataConverter.asString(vars.value.eventEndDateInLocal, OS.DataTypes.DataTypes.DateTime),
                            In_EventTypeFriendly: OS.DataConversion.ServerDataConverter.asString(vars.value.eventTypeFriendlyInLocal, OS.DataTypes.DataTypes.Text)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:m9zBkaLc0kWjI3Zdd80qgw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:m9zBkaLc0kWjI3Zdd80qgw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.OnHandle_NavigateToEventDetail$vars", [{
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
        }, {
            name: "EventLocation",
            attrName: "eventLocationInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "EventTypeFriendly",
            attrName: "eventTypeFriendlyInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

        Controller.prototype.onHandle_NavigateToEventDetail$Action = function(eventIdIn, eventNameIn, eventStartDateIn, eventEndDateIn, eventLocationIn, eventTypeFriendlyIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_NavigateToEventDetail$Action, callContext, eventIdIn, eventNameIn, eventStartDateIn, eventEndDateIn, eventLocationIn, eventTypeFriendlyIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:l2seXCPsqkCFoRS4srVaoA:/NRWebFlows.l2seXCPsqkCFoRS4srVaoA:IJTHxTq2efeIY+cwJMaY5g", "UBTConnect", "Legacy_OrbitAdminFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:mQ5d8UTLhkK1k3vpl_oWew:/NRWebFlows.l2seXCPsqkCFoRS4srVaoA/NodesShownInESpaceTree.mQ5d8UTLhkK1k3vpl_oWew:fKt9F6WKLcfCVUiMFxt1ug", "UBTConnect", "OrbitAdminLanding", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:mQ5d8UTLhkK1k3vpl_oWew", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:l2seXCPsqkCFoRS4srVaoA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_Legacy_OrbitAdminFlowController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminLanding.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "t736padOwUubhZt5ZPir+Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "PEUBMeJHskW+lz+I9MQH7Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "00xhZzIPw0aOzoXd1NKBBQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventStartDateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.DateTime
        },
        "vWhN3I4gm0aofB2SaGCkhw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventEndDateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.DateTime
        },
        "v838xVd_pEOjnbDcMQcdWg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventLocationInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "F_RzpxX05U+JVGLoNFZMzA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventTypeFriendlyInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "gNtp_yUDuk6ekDaPNddM6Q": {
            getter: function(varBag, idService) {
                return varBag.getMilestoneScanFFVar.value;
            }
        },
        "Pz9+DOhVsUyyElYq89f_rA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "VMdhVsyVHkClKDJCURH2fg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "nYIOvOCrOEuce8Uey6T8_g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});