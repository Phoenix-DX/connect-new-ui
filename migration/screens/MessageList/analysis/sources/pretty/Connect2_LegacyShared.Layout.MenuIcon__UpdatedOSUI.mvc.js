define("Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$SetMenuIconListeners", "OutSystemsUI_2_23.controller$IsRTL", "OutSystemsUI_2_23.controller$SetMenuIcon", "OutSystemsUI_2_23.controller$ToggleSideMenu"], function(OutSystems, Connect2_LegacySharedModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("IsRTL", "isRTLVar", "IsRTL", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("MenuAction", "menuActionIn", "MenuAction", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_menuActionInDataFetchStatus", "_menuActionInDataFetchStatus", "_menuActionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                return false;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("MenuAction" in inputs) {
                this.variables.menuActionIn = inputs.MenuAction;
                if ("_menuActionInDataFetchStatus" in inputs) {
                    this.variables._menuActionInDataFetchStatus = inputs._menuActionInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Layout.MenuIcon__UpdatedOSUI");
});
define("Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$SetMenuIconListeners", "OutSystemsUI_2_23.controller$IsRTL", "OutSystemsUI_2_23.controller$SetMenuIcon", "OutSystemsUI_2_23.controller$ToggleSideMenu"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_model, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Layout.MenuIcon__UpdatedOSUI";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                style: model.getCachedValue(idService.getId("MenuIcon.Style"), function() {
                    return ("app-menu-icon" + ((((model.variables.menuActionIn) !== (Connect2_LegacySharedModel.staticEntities.menuAction.back))) ? ("") : (" back")));
                }, function() {
                    return model.variables.menuActionIn;
                }),
                visible: ((model.variables.menuActionIn) !== (Connect2_LegacySharedModel.staticEntities.menuAction.hidden)),
                _idProps: {
                    service: idService,
                    name: "MenuIcon"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus),
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus)
            }, $if(false, false, this, function() {
                return [];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layout/MenuIcon__UpdatedOSUI/Container onclick");
                            controller.onBack$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    }
                },
                extendedProperties: {
                    "aria-label": "Back to previous screen",
                    role: "button",
                    tabIndex: "0"
                },
                style: "menu-back",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "arrow-left",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ArrowReverse"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$debugger", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$SetMenuIconListeners", "OutSystemsUI_2_23.controller$IsRTL", "OutSystemsUI_2_23.controller$SetMenuIcon", "OutSystemsUI_2_23.controller$ToggleSideMenu"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_Debugger) {
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
        Controller.prototype._onBack$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnBack");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:HpLlFZOo6EGNd22s7rPXHw:/NRWebFlows.IMkSBn8ZRU+o_NajnulxWg/NodesShownInESpaceTree.6b1Zvbu2rEGUZdmgsoPnmg/ClientActions.HpLlFZOo6EGNd22s7rPXHw:BLjNhr9Dux4gUwe8wh5z+g", "Connect2_LegacyShared", "OnBack", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:a4uxyEXFV0Sgkn8KwfbZ9w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:806GFRK3ZUqdhQ97oWxr+A", callContext.id);
                // Destination: (PreviousScreen)
                return OS.Navigation.navigateBack(null, callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:HpLlFZOo6EGNd22s7rPXHw", callContext.id);
            }

        };
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var setMenuIconListenersVar = new OS.DataTypes.VariableHolder();
            var checkIsRTLVar = new OS.DataTypes.VariableHolder();
            var setMenuIconVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.setMenuIconListenersVar = setMenuIconListenersVar;
            varBag.checkIsRTLVar = checkIsRTLVar;
            varBag.setMenuIconVar = setMenuIconVar;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:LYl8lw2+okaaKh4J3Adupg:/NRWebFlows.IMkSBn8ZRU+o_NajnulxWg/NodesShownInESpaceTree.6b1Zvbu2rEGUZdmgsoPnmg/ClientActions.LYl8lw2+okaaKh4J3Adupg:3dZAgoz91EA0PzKFh_pCrg", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3VyCeyGTU0+oBNAHJok8Cw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JLMiy6EpBUyxbdaNw49jSA", callContext.id);
                // Execute Action: SetMenuIcon
                setMenuIconVar.value = OutSystemsUI_2_23Controller.default.setMenuIcon$Action(model.variables.menuActionIn, callContext);

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6EghVYskRUCfk5bUjsk61w", callContext.id);
                // Execute Action: SetMenuIconListeners
                setMenuIconListenersVar.value = OutSystemsUI_2_23Controller.default.setMenuIconListeners$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:l0eHaW427UiCMTpPMX8hww", callContext.id);
                // Execute Action: CheckIsRTL
                checkIsRTLVar.value = OutSystemsUI_2_23Controller.default.isRTL$Action(callContext);

                // Set IsRTL
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:f_bTlHf_3U2QaFyugp_AAg", callContext.id);
                // IsRTL = CheckIsRTL.IsRTL
                model.variables.isRTLVar = checkIsRTLVar.value.isRTLOut;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JmQXwv3ikkuxg8bF6TLVAg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:LYl8lw2+okaaKh4J3Adupg", callContext.id);
            }

        };
        Controller.prototype._onToggleMenu$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnToggleMenu");
            callContext = controller.callContext(callContext);
            var toggleSideMenuVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.toggleSideMenuVar = toggleSideMenuVar;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:4i9t6uwMEUisiUQ8nOycgw:/NRWebFlows.IMkSBn8ZRU+o_NajnulxWg/NodesShownInESpaceTree.6b1Zvbu2rEGUZdmgsoPnmg/ClientActions.4i9t6uwMEUisiUQ8nOycgw:ziKwgtmYu+jHyALoFLgCuA", "Connect2_LegacyShared", "OnToggleMenu", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:oYSPMUyw0km+9XIYTHr6Yg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4ORU95LOOk+YBeBMQuDP+g", callContext.id);
                // Execute Action: ToggleSideMenu
                toggleSideMenuVar.value = OutSystemsUI_2_23Controller.default.toggleSideMenu$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qe_hkDheB06jDyp8Bkdn5w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:4i9t6uwMEUisiUQ8nOycgw", callContext.id);
            }

        };

        Controller.prototype.onBack$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onBack$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onToggleMenu$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onToggleMenu$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:IMkSBn8ZRU+o_NajnulxWg:/NRWebFlows.IMkSBn8ZRU+o_NajnulxWg:g8dWHX6OMuTu8A_wnFyzaw", "Connect2_LegacyShared", "Layout", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:6b1Zvbu2rEGUZdmgsoPnmg:/NRWebFlows.IMkSBn8ZRU+o_NajnulxWg/NodesShownInESpaceTree.6b1Zvbu2rEGUZdmgsoPnmg:bz_pFhHF6I3IhA2UT1WMTg", "Connect2_LegacyShared", "MenuIcon__UpdatedOSUI", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:6b1Zvbu2rEGUZdmgsoPnmg", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:IMkSBn8ZRU+o_NajnulxWg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Layout/MenuIcon__UpdatedOSUI On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Layout/MenuIcon__UpdatedOSUI On Parameters Changed");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return Connect2_LegacySharedController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "6EghVYskRUCfk5bUjsk61w": {
            getter: function(varBag, idService) {
                return varBag.setMenuIconListenersVar.value;
            }
        },
        "l0eHaW427UiCMTpPMX8hww": {
            getter: function(varBag, idService) {
                return varBag.checkIsRTLVar.value;
            }
        },
        "JLMiy6EpBUyxbdaNw49jSA": {
            getter: function(varBag, idService) {
                return varBag.setMenuIconVar.value;
            }
        },
        "4ORU95LOOk+YBeBMQuDP+g": {
            getter: function(varBag, idService) {
                return varBag.toggleSideMenuVar.value;
            }
        },
        "_JajPwXGjEyL6pu_6MCbkg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isRTLVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "WMBaGGIh5U6JnNSVxTRGcQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.menuActionIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "J+aEoHiFVUy_hkE8TjM_QQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("MenuIcon"));
                })(varBag.model, idService);
            }
        },
        "cOuqFRieOU+d8kroabGhKQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HidingMenuIcon"));
                })(varBag.model, idService);
            }
        },
        "B1bmsrCyv0uFcy9Ye5UwGA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ArrowReverse"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});