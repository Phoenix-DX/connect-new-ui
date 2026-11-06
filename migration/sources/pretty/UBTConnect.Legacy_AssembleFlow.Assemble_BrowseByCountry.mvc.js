define("UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "NavigationHandler.controller", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$model", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler"], function(OutSystems, UBTConnectModel, NavigationHandlerController, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvcModel) {
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
                    Model._hasValidationWidgetsValue = (UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets || Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "Legacy_AssembleFlow.Assemble_BrowseByCountry");
});
define("UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry.mvc$model", "UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$view", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler"], function(OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, React, OSView, UBTConnect_Legacy_AssembleFlow_Assemble_BrowseByCountry_mvc_model, UBTConnect_Legacy_AssembleFlow_Assemble_BrowseByCountry_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, OSWidgets, Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_view) {
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
        View.displayName = "Legacy_AssembleFlow.Assemble_BrowseByCountry";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Legacy_AssembleFlow_Assemble_BrowseByCountry_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Legacy_AssembleFlow_Assemble_BrowseByCountry_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "Assemble_BrowseByCountry";
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
            }), React.createElement(Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    cancel$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_Assemble_Filter Cancel");
                            controller.assemble_FilterCancel$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    navigateToSubdivision$Action: function(subdivisionIdIn, isUserSubdivisionIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_Assemble_Filter NavigateToSubdivision");
                            controller.assemble_FilterNavigateToLocality$Action(subdivisionIdIn, isUserSubdivisionIn, controller.callContext(eventHandlerContext));
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
define("UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry.mvc$debugger", "UBTConnect.Legacy_AssembleFlow.controller", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler"], function(OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_AssembleFlow_Assemble_BrowseByCountry_mvc_Debugger, _flow_UBTConnect_Legacy_AssembleFlowController) {
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
        Controller.prototype._assemble_FilterNavigateToLocality$Action = function(inSubdivisionIdIn, isUserSubdivisionIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Assemble_FilterNavigateToLocality");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry.Assemble_FilterNavigateToLocality$vars"))());
            vars.value.inSubdivisionIdInLocal = inSubdivisionIdIn;
            vars.value.isUserSubdivisionInLocal = isUserSubdivisionIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_idkPEyTWkiVBvWiQsEypQ:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.4aXF0ZxXm0+ynCHbNozBzg/ClientActions._idkPEyTWkiVBvWiQsEypQ:VyrIL2R7_2D205EaDEN5kA", "UBTConnect", "Assemble_FilterNavigateToLocality", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K+3zYJ_hEkqGlCyEFdzmeQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2sNJ9d1usUuMjGzR0j3utQ", callContext.id);
                // Destination: /UBTConnect/AssembleEvents
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/AssembleEvents", {
                    ShowBackNavigation: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean),
                    SubdivisionId: OS.DataConversion.ServerDataConverter.asString(vars.value.inSubdivisionIdInLocal, OS.DataTypes.DataTypes.LongInteger),
                    IsUserSubdivision: OS.DataConversion.ServerDataConverter.asString(vars.value.isUserSubdivisionInLocal, OS.DataTypes.DataTypes.Boolean)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_idkPEyTWkiVBvWiQsEypQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry.Assemble_FilterNavigateToLocality$vars", [{
            name: "InSubdivisionId",
            attrName: "inSubdivisionIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "IsUserSubdivision",
            attrName: "isUserSubdivisionInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._assemble_FilterCancel$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Assemble_FilterCancel");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1YO41uaUuE+CYsDWffkxvw:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.4aXF0ZxXm0+ynCHbNozBzg/ClientActions.1YO41uaUuE+CYsDWffkxvw:hpFh+2kza4ZvHw2mvd9EgA", "UBTConnect", "Assemble_FilterCancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LK6RAd0qa0yX9dKHZn3u1A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vAootiraTUO8KzHg52xREg", callContext.id);
                // Execute Action: AllowUpcomingNavigation
                NavigationHandlerController.default.allowUpcomingNavigation$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Hrr2LKwU2U2jwBRYDwpIWA", callContext.id);
                // Destination: (PreviousScreen)
                return OS.Navigation.navigateBack(null, callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1YO41uaUuE+CYsDWffkxvw", callContext.id);
            }

        };

        Controller.prototype.assemble_FilterNavigateToLocality$Action = function(inSubdivisionIdIn, isUserSubdivisionIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._assemble_FilterNavigateToLocality$Action, callContext, inSubdivisionIdIn, isUserSubdivisionIn);

        };
        Controller.prototype.assemble_FilterCancel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._assemble_FilterCancel$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:oopA8UC9ZEGRmQoiLfCXdg:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg:dN024IGxNurNTd_3Az0hHQ", "UBTConnect", "Legacy_AssembleFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:4aXF0ZxXm0+ynCHbNozBzg:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.4aXF0ZxXm0+ynCHbNozBzg:eoptXtqEgizXaJaMLpSslA", "UBTConnect", "Assemble_BrowseByCountry", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:4aXF0ZxXm0+ynCHbNozBzg", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:oopA8UC9ZEGRmQoiLfCXdg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_Legacy_AssembleFlowController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "OAwLFllY2Eeam6T+xqaFNQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.inSubdivisionIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Cc41ck1NnkWhqD2yBMmciQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isUserSubdivisionInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "GTrTYh_NY06B7foP+HmnHA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "hwvG68Zj3EWdw0reGr62Jw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});