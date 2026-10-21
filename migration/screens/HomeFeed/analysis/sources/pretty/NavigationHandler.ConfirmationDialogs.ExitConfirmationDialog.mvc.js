define("NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$model", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "NavigationHandler.controller$PreventNavigation", "NavigationHandler.controller$CopyClassesAcrossPortal"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ShowDialog", "showDialogVar", "ShowDialog", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Force", "forceIn", "Force", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_forceInDataFetchStatus", "_forceInDataFetchStatus", "_forceInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel.hasValidationWidgets || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("Force" in inputs) {
                this.variables.forceIn = inputs.Force;
                if ("_forceInDataFetchStatus" in inputs) {
                    this.variables._forceInDataFetchStatus = inputs._forceInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConfirmationDialogs.ExitConfirmationDialog");
});
define("NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$model", "NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$controller", "OutSystems/ReactWidgets/Main", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "NavigationHandler.controller$PreventNavigation", "NavigationHandler.controller$CopyClassesAcrossPortal"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_ConfirmationDialogs_ExitConfirmationDialog_mvc_model, NavigationHandler_ConfirmationDialogs_ExitConfirmationDialog_mvc_controller, OSWidgets, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "ConfirmationDialogs.ExitConfirmationDialog";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return NavigationHandler_ConfirmationDialogs_ExitConfirmationDialog_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return NavigationHandler_ConfirmationDialogs_ExitConfirmationDialog_mvc_controller;
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
                extendedEvents: {
                    "componentDidUpdate": function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/ExitConfirmationDialog/Root componentDidUpdate");
                            controller.popupComponentDidUpdate$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    }
                },
                style: "dx-confirmation-dialog dx-exit-confirmation-dialog",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Root"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Popup, {
                showPopup: model.variables.showDialogVar,
                style: "popup-dialog",
                _idProps: {
                    service: idService,
                    name: "Popup"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.dialogHeader,
                style: "dx-dialog-header",
                _idProps: {
                    service: idService,
                    name: "DialogHeader"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.dialogBody,
                style: "dx-dialog-body",
                _idProps: {
                    service: idService,
                    name: "DialogBody"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "dx-dialog-footer",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/ExitConfirmationDialog/Button OnClick");
                        controller.yes$Action(controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });

                    ;
                },
                style: "btn btn-primary",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.buttonLabel_Confirm,
                _idProps: {
                    service: idService,
                    name: "ButtonLabel_Confirm"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Button, {
                enabled: true,
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/ExitConfirmationDialog/Button OnClick");
                        controller.no$Action(controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });

                    ;
                },
                style: "btn",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.buttonLabel_Dismiss,
                _idProps: {
                    service: idService,
                    name: "ButtonLabel_Dismiss"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))), $if(false, false, this, function() {
                return [];
            }, function() {
                return [$if(model.variables.showDialogVar, false, this, function() {
                    return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
                        inputs: {},
                        events: {
                            _handleError: function(ex) {
                                controller.handleError(ex);
                            },
                            backNavigationPrevented$Action: function(backNavigationEventIn) {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/PreventBackNavigation BackNavigationPrevented");
                                    controller.no$Action(controller.callContext(eventHandlerContext));
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
                            uuid: "10",
                            alias: "1"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: []
                    })];
                }, function() {
                    return [];
                }), React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
                    inputs: {
                        Priority: -1
                    },
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
                                controller.onBackNavigationExit$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
                        uuid: "11",
                        alias: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$controller", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.languageResources", "NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$debugger", "NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$controller.OnBackNavigationExit.ShouldShowDialogJS", "NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$controller.Yes.ExitAppJS", "NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$controller.OnReady.ClearScreenStateCacheJS", "NavigationHandler.controller$PreventNavigation", "NavigationHandler.controller$CopyClassesAcrossPortal"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandlerLanguageResources, NavigationHandler_ConfirmationDialogs_ExitConfirmationDialog_mvc_Debugger, NavigationHandler_ConfirmationDialogs_ExitConfirmationDialog_mvc_controller_OnBackNavigationExit_ShouldShowDialogJS, NavigationHandler_ConfirmationDialogs_ExitConfirmationDialog_mvc_controller_Yes_ExitAppJS, NavigationHandler_ConfirmationDialogs_ExitConfirmationDialog_mvc_controller_OnReady_ClearScreenStateCacheJS) {
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
        Controller.prototype._onBackNavigationExit$Action = function(backNavigationEventIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnBackNavigationExit");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.OnBackNavigationExit$vars"))());
            vars.value.backNavigationEventInLocal = backNavigationEventIn;
            var shouldShowDialogJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.shouldShowDialogJSResult = shouldShowDialogJSResult;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:GvqZADKp3km3rhHVkMOZ3g:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.U2j2dh+VQ0i1F7caqZPkZg/ClientActions.GvqZADKp3km3rhHVkMOZ3g:OvE+23CwHijT5eBRL3qgag", "NavigationHandler", "OnBackNavigationExit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:njFjPil4tESZ5ckMF+pl1A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:WSSgpti5y0C0ge6Y_SiY1g", callContext.id);
                shouldShowDialogJSResult.value = controller.safeExecuteJSNode(NavigationHandler_ConfirmationDialogs_ExitConfirmationDialog_mvc_controller_OnBackNavigationExit_ShouldShowDialogJS, "ShouldShowDialog", "OnBackNavigationExit", {
                    BackNavigationEvent: OS.DataConversion.JSNodeParamConverter.to(vars.value.backNavigationEventInLocal, OS.DataTypes.DataTypes.Object),
                    Force: OS.DataConversion.JSNodeParamConverter.to(model.variables.forceIn, OS.DataTypes.DataTypes.Boolean),
                    ShowDialog: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.OnBackNavigationExit$shouldShowDialogJSResult"))();
                    jsNodeResult.showDialogOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ShowDialog, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:rtEtCvT5bU+VTDDVObc5sg", callContext.id) && shouldShowDialogJSResult.value.showDialogOut)) {
                    OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:F3yCNGHhlk2qkkfbBusJuQ", callContext.id);
                    // Execute Action: PreventNavigation
                    NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
                    OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:VU1HmbwUeEOPfGJOggteng", callContext.id);
                    // ShowDialog = True
                    model.variables.showDialogVar = true;
                    OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:_onFfIz7SUKGcsORM4uqFA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:_onFfIz7SUKGcsORM4uqFA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:GvqZADKp3km3rhHVkMOZ3g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.OnBackNavigationExit$vars", [{
            name: "BackNavigationEvent",
            attrName: "backNavigationEventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.registerVariableGroupType("NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.OnBackNavigationExit$shouldShowDialogJSResult", [{
            name: "ShowDialog",
            attrName: "showDialogOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._popupComponentDidUpdate$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("PopupComponentDidUpdate");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:_0I3Zs5FUUalDxF+6xpv6A:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.U2j2dh+VQ0i1F7caqZPkZg/ClientActions._0I3Zs5FUUalDxF+6xpv6A:k8vDWDiW35bPd4mncejdPg", "NavigationHandler", "PopupComponentDidUpdate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:YtFT44fZ40enkT+NopKvTw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Om8Pf2ya8EmWOXA08bKVUA", callContext.id);
                // Execute Action: CopyClassesAcrossPortal
                NavigationHandlerController.default.copyClassesAcrossPortal$Action(idService.getId("Root"), idService.getId("Popup"), callContext);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:IHdl7eLO8kugdvejz6Rg5Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:_0I3Zs5FUUalDxF+6xpv6A", callContext.id);
            }

        };
        Controller.prototype._yes$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Yes");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:la73fw3FvkatHhBO0yNQ8g:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.U2j2dh+VQ0i1F7caqZPkZg/ClientActions.la73fw3FvkatHhBO0yNQ8g:tY59ObHn7863TmU9ZOEYlQ", "NavigationHandler", "Yes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:3ZL1iWUu6UiP2IpZFfiRQQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Kv9FvOgOeUCo0ZAsIYC3UA", callContext.id);
                // ShowDialog = False
                model.variables.showDialogVar = false;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:AeX021_1_UKjfd1t3Ny0iA", callContext.id);
                controller.safeExecuteJSNode(NavigationHandler_ConfirmationDialogs_ExitConfirmationDialog_mvc_controller_Yes_ExitAppJS, "ExitApp", "Yes", null, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Lm0c1Wk_tkWayDScmAjD_A", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:la73fw3FvkatHhBO0yNQ8g", callContext.id);
            }

        };
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:ZtX30bnTokugQCTG0u_eAQ:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.U2j2dh+VQ0i1F7caqZPkZg/ClientActions.ZtX30bnTokugQCTG0u_eAQ:nyyLEyrWtE0VaXkXlkiYzQ", "NavigationHandler", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:_CeLbfcoRUqgRjTeiKnDAg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:AUW9lbyHyEiFxnVyb8sTJw", callContext.id);
                // ShowDialog = False
                model.variables.showDialogVar = false;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:dG8fRcSWbkmJj2J3iHKKnQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:ZtX30bnTokugQCTG0u_eAQ", callContext.id);
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
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:D+4q2495wEmx+OObFEs3pw:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.U2j2dh+VQ0i1F7caqZPkZg/ClientActions.D+4q2495wEmx+OObFEs3pw:7iZ54lUrajXkZqeX4KY+zg", "NavigationHandler", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:XzHO9QJl602jqX2ukmD6bg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:E3Gm5+ec_EmWn_t05xsyQw", callContext.id) && model.variables.forceIn)) {
                    OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:T_RGw_VArEqpvvZo3WeiKQ", callContext.id);
                    controller.safeExecuteJSNode(NavigationHandler_ConfirmationDialogs_ExitConfirmationDialog_mvc_controller_OnReady_ClearScreenStateCacheJS, "ClearScreenStateCache", "OnReady", null, function($parameters) {}, {}, {});
                    OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:mJ++6hXnuk68n2LgsNwCBw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:mJ++6hXnuk68n2LgsNwCBw", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:D+4q2495wEmx+OObFEs3pw", callContext.id);
            }

        };
        Controller.prototype._no$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("No");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:KlY_6TBbokehUyWPSAxolA:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.U2j2dh+VQ0i1F7caqZPkZg/ClientActions.KlY_6TBbokehUyWPSAxolA:B9ARVnwRVBLKzlNnWH6c7Q", "NavigationHandler", "No", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:bhoSFq4eq0Sgmn_JBMn5Kw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:raHJAXjovUqm3DM6Wk7b3g", callContext.id);
                // ShowDialog = False
                model.variables.showDialogVar = false;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:g+xod+w4AU29_Ptb1b876g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:KlY_6TBbokehUyWPSAxolA", callContext.id);
            }

        };

        Controller.prototype.onBackNavigationExit$Action = function(backNavigationEventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onBackNavigationExit$Action, callContext, backNavigationEventIn);

        };
        Controller.prototype.popupComponentDidUpdate$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._popupComponentDidUpdate$Action, callContext);

        };
        Controller.prototype.yes$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._yes$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.no$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._no$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:pyNnvFMhr0mjQR26hR5vUg:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg:WKV33Qdm+EcHl2F3R1PHZg", "NavigationHandler", "ConfirmationDialogs", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:U2j2dh+VQ0i1F7caqZPkZg:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.U2j2dh+VQ0i1F7caqZPkZg:0tHjBsCt7GchVrWStBcjfw", "NavigationHandler", "ExitConfirmationDialog", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:U2j2dh+VQ0i1F7caqZPkZg", callContext.id);
            OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:pyNnvFMhr0mjQR26hR5vUg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConfirmationDialogs/ExitConfirmationDialog On Initialize");
                return controller.onInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConfirmationDialogs/ExitConfirmationDialog On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return NavigationHandlerController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, NavigationHandlerLanguageResources);
});
define("NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$controller.OnBackNavigationExit.ShouldShowDialogJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.ShowDialog = $parameters.Force || $parameters.BackNavigationEvent.detail.isInitialLocation();
    };
});
define("NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$controller.Yes.ExitAppJS", [], function() {
    return function($actions, $roles, $public) {
        if (window.navigator && window.navigator.app && window.navigator.app.exitApp) {
            window.navigator.app.exitApp();
        } else {
            window.close();
        }
    };
});
define("NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$controller.OnReady.ClearScreenStateCacheJS", [], function() {
    return function($actions, $roles, $public) {
        var ScreenStateCache = window.require("OutSystems/ClientRuntime/ScreenStateCache").ScreenStateCache;

        // Clear the ScreenStateCache, freeing up the memory related to
        // navigation history cache
        ScreenStateCache.cacheKeys = [];
        ScreenStateCache.cache = {};
    };
});

define("NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "fleB9EH6CUaDGUOvpmNYWA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.backNavigationEventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "WSSgpti5y0C0ge6Y_SiY1g": {
            getter: function(varBag, idService) {
                return varBag.shouldShowDialogJSResult.value;
            }
        },
        "AeX021_1_UKjfd1t3Ny0iA": {
            getter: function(varBag, idService) {
                return varBag.exitAppJSResult.value;
            }
        },
        "T_RGw_VArEqpvvZo3WeiKQ": {
            getter: function(varBag, idService) {
                return varBag.clearScreenStateCacheJSResult.value;
            }
        },
        "RnlBIyo14kiY7miGLZ8hHA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showDialogVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "M_BEp8PpTUWz8cEw_8kQSA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.forceIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "VmEz0dfeSEGF_U+LlCm5dw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Root"));
                })(varBag.model, idService);
            }
        },
        "GklAPMr9sEKfiBWmRy2a9w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Popup"));
                })(varBag.model, idService);
            }
        },
        "U39TzPtd_0uHYFsS8tUe2Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogHeader"));
                })(varBag.model, idService);
            }
        },
        "57jUeclKcUaIWqfOIa+qZw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogBody"));
                })(varBag.model, idService);
            }
        },
        "ue4PvWr9lEO6nYEVvihV8Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
                })(varBag.model, idService);
            }
        },
        "5Ww8dJW0bkCYqdKnrFhKxg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});