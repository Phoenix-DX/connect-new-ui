define("UBTConnect.App_Menu.PINBiometricsMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBT_AppManager.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnect.App_Menu.Menu_List.mvc$model", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.model$UI_MenuSectionRec", "UBT_AppManager.controller$AppManager_GetPIN_FingerprintReaderAvailable", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.model$UI_ListMenuOptionRec"], function(OutSystems, UBTConnectModel, UBT_AppManagerController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnect_App_Menu_Menu_List_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MenuOptionList", "menuOptionListVar", "MenuOptionList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_ListMenuOptionList());
                }, false, UBTConnectModel.UI_ListMenuOptionList),
                this.attr("ChangePinName", "changePinNameVar", "ChangePinName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "Change PIN";
                }, false),
                this.attr("BiometricLoginName", "biometricLoginNameVar", "BiometricLoginName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "Biometric Login";
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
                    Model._hasValidationWidgetsValue = (UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnect_App_Menu_Menu_List_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Menu.PINBiometricsMenu");
});
define("UBTConnect.App_Menu.PINBiometricsMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Menu.PINBiometricsMenu.mvc$model", "UBTConnect.App_Menu.PINBiometricsMenu.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Menu.Menu_List.mvc$view", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.model$UI_MenuSectionRec", "UBT_AppManager.controller$AppManager_GetPIN_FingerprintReaderAvailable", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.model$UI_ListMenuOptionRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBT_AppManagerController, React, OSView, UBTConnect_App_Menu_PINBiometricsMenu_mvc_model, UBTConnect_App_Menu_PINBiometricsMenu_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnect_App_Menu_Menu_List_mvc_view) {
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
        View.displayName = "App_Menu.PINBiometricsMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnect_App_Menu_Menu_List_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Menu_PINBiometricsMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Menu_PINBiometricsMenu_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "PINBiometricsMenu";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, {
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
                placeholders: {
                    placeholder_Header_Title: new PlaceholderContent(function() {
                        return ["PIN & Biometrics"];
                    }),
                    placeholder_Header_Right: PlaceholderContent.Empty,
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Menu_Menu_List_mvc_view, {
                            inputs: {
                                In_MenuSection: model.getCachedValue(idService.getId("mAwXTXE+BUuA7i1BzyPFPw.In_MenuSection"), function() {
                                    return function() {
                                        var rec = new UBTConnectModel.UI_MenuSectionRec();
                                        rec.hasSeparatorAttr = false;
                                        rec.menuOptionsAttr = model.variables.menuOptionListVar;
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.menuOptionListVar;
                                })
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick_MenuOption$Action: function(uI_ListMenuOptionIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu/Menu_List OnClick_MenuOption");
                                        controller.onClick_MenuOption$Action(uI_ListMenuOptionIn, controller.callContext(eventHandlerContext));
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
                            _dependencies: []
                        })];
                    }),
                    bottom: PlaceholderContent.Empty,
                    placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty
                },
                _dependencies: [asPrimitiveValue(model.variables.menuOptionListVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.App_Menu.PINBiometricsMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBT_AppManager.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Menu.PINBiometricsMenu.mvc$debugger", "UBTConnect.App_Menu.controller", "UBTConnect.App_Menu.PINBiometricsMenu.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.model$UI_MenuSectionRec", "UBT_AppManager.controller$AppManager_GetPIN_FingerprintReaderAvailable", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.model$UI_ListMenuOptionRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBT_AppManagerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Menu_PINBiometricsMenu_mvc_Debugger, _flow_UBTConnect_App_MenuController, UBTConnect_App_Menu_PINBiometricsMenu_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS) {
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
        Controller.prototype._screenEvent_OnInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnInitialize");
            callContext = controller.callContext(callContext);
            var appManager_GetPIN_FingerprintReaderAvailableVar = new OS.DataTypes.VariableHolder();
            var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.appManager_GetPIN_FingerprintReaderAvailableVar = appManager_GetPIN_FingerprintReaderAvailableVar;
            varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0njhGM1BAUW3v2zEVdugyg:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.lt4Inkjsdk2y0rvwGlv9pw/ClientActions.0njhGM1BAUW3v2zEVdugyg:0o4FtuReWK6H_gr9T38fIg", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l0j1DQJO00euN_YNcxSzyw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PoZIl5Hi3EemQL7XIQTmIw", callContext.id);
                isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_App_Menu_PINBiometricsMenu_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnInitialize", {
                    IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.App_Menu.PINBiometricsMenu.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult"))();
                    jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // Check if IsViewRestoredFromCache IsRestoredFromCache
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OsuqAb4x4Uiets8y9PzD6g", callContext.id) && isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ezr4OGRxnkeVMtvifsIUKw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TNYVizUH4UmWZow6gBY_aA", callContext.id);
                    // Execute Action: ListClear
                    OS.SystemActions.listClear(model.variables.menuOptionListVar, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3D85IBgK0UGoRYCNNcUFpQ", callContext.id);
                    // Execute Action: ListAppend
                    OS.SystemActions.listAppend(model.variables.menuOptionListVar, function() {
                        var rec = new UBTConnectModel.UI_ListMenuOptionRec();
                        rec.iconIdAttr = UBTConnectModel.staticEntities.uBT_Icons2.password;
                        rec.labelAttr = model.variables.changePinNameVar;
                        return rec;
                    }(), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KFav_3xRMkKGX_DalrUfqw", callContext.id);
                    // Execute Action: AppManager_GetPIN_FingerprintReaderAvailable
                    appManager_GetPIN_FingerprintReaderAvailableVar.value = UBT_AppManagerController.default.appManager_GetPIN_FingerprintReaderAvailable$Action(callContext);

                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cJcbIH9MgUCsZhsprrvRRA", callContext.id) && appManager_GetPIN_FingerprintReaderAvailableVar.value.availableOut)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZKDfk_o0oEOoh2tvZ1e6QQ", callContext.id);
                        // Execute Action: ListAppend2
                        OS.SystemActions.listAppend(model.variables.menuOptionListVar, function() {
                            var rec = new UBTConnectModel.UI_ListMenuOptionRec();
                            rec.iconIdAttr = UBTConnectModel.staticEntities.uBT_Icons2.fingerprint;
                            rec.labelAttr = model.variables.biometricLoginNameVar;
                            rec.labelDescriptionAttr = "Sign in with Fingerprint or Face Recognition authentication";
                            rec.useSwitchAttr = true;
                            rec.switchValueAttr = UBTConnectClientVariables.getApp_PIN_BiometricEnabled();
                            return rec;
                        }(), callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mJrNofWHJ0aErw15RsvgPA", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mJrNofWHJ0aErw15RsvgPA", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0njhGM1BAUW3v2zEVdugyg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Menu.PINBiometricsMenu.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult", [{
            name: "IsRestoredFromCache",
            attrName: "isRestoredFromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onClick_MenuOption$Action = function(uI_ListMenuOptionIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_MenuOption");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Menu.PINBiometricsMenu.OnClick_MenuOption$vars"))());
            vars.value.uI_ListMenuOptionInLocal = uI_ListMenuOptionIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Qbg0IPVIe0SDgsyfDrrNRg:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.lt4Inkjsdk2y0rvwGlv9pw/ClientActions.Qbg0IPVIe0SDgsyfDrrNRg:tUM4Evrj+QSawzPseQrvkA", "UBTConnect", "OnClick_MenuOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7N9Ge_ilT0aGTo+qcqJmqA", callContext.id);
                // ChangePin
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PdgMGP33+k6eWp5UzmGpcw", callContext.id) && (vars.value.uI_ListMenuOptionInLocal.labelAttr === model.variables.changePinNameVar))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aiJPIs0qVku+BXDWpAyWgg", callContext.id);
                    // Destination: /UBTConnect/PINChange
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/PINChange", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    if ((vars.value.uI_ListMenuOptionInLocal.labelAttr === model.variables.biometricLoginNameVar)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uN4t9OSo80C0Y4A9YBhjiA", callContext.id);
                        // App_PIN_BiometricEnabled = notApp_PIN_BiometricEnabled
                        UBTConnectClientVariables.setApp_PIN_BiometricEnabled(!(UBTConnectClientVariables.getApp_PIN_BiometricEnabled()));
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AF2AyAGS1kOXbFqqDjQhjw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kQXemq+lv0+Kc4Vvw8S4+g", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Qbg0IPVIe0SDgsyfDrrNRg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Menu.PINBiometricsMenu.OnClick_MenuOption$vars", [{
            name: "UI_ListMenuOption",
            attrName: "uI_ListMenuOptionInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.UI_ListMenuOptionRec();
            },
            complexType: UBTConnectModel.UI_ListMenuOptionRec
        }]);

        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.onClick_MenuOption$Action = function(uI_ListMenuOptionIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_MenuOption$Action, callContext, uI_ListMenuOptionIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MYece3hSIUew7QsUSQXJdw:/NRWebFlows.MYece3hSIUew7QsUSQXJdw:rb6xGIB+BVZXljBZL+G3Tw", "UBTConnect", "App_Menu", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lt4Inkjsdk2y0rvwGlv9pw:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.lt4Inkjsdk2y0rvwGlv9pw:SweSggLggjjj70r4zs7qFA", "UBTConnect", "PINBiometricsMenu", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lt4Inkjsdk2y0rvwGlv9pw", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MYece3hSIUew7QsUSQXJdw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Menu/PINBiometricsMenu On Initialize");
                return controller.screenEvent_OnInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_App_MenuController.default.handleError(ex, this.callContext());
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.App_Menu.PINBiometricsMenu.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    };
});

define("UBTConnect.App_Menu.PINBiometricsMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "KFav_3xRMkKGX_DalrUfqw": {
            getter: function(varBag, idService) {
                return varBag.appManager_GetPIN_FingerprintReaderAvailableVar.value;
            }
        },
        "PoZIl5Hi3EemQL7XIQTmIw": {
            getter: function(varBag, idService) {
                return varBag.isViewRestoredFromCacheJSResult.value;
            }
        },
        "Yvxj6+Z+30++aVQIKypqGg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.uI_ListMenuOptionInLocal;
            }
        },
        "RWpXSJbtqUSzJceJZ9Ke+A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.menuOptionListVar;
            }
        },
        "xqSWjHkV+k2s7cP+w_EStw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.changePinNameVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "1ozIvEzj2ECsqbU30Fxicw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.biometricLoginNameVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "xZaY6qrxKE+xKJ3ya8+knA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "rb99YMb7x0KJMmwM5qIlZQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "U0gUKYIcXEKrPfHB5z5aEA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "OcL9RJlV_U6mV9TqDnRFqQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "ywXULOji0UOskoFQQ9ejSg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "YPDcMNBWhECNtGALaF4TAA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});