define("UBTConnect.App_PIN.PINChange.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$model", "UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, NavigationHandlerController, UBTJavaScriptUtilsController, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvcModel, UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("isScreenUnlocked", "isScreenUnlockedVar", "isScreenUnlocked", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("UseOverlay", "useOverlayVar", "UseOverlay", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
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
                    Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_Layouts_Layout_LoginFlow_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvcModel.hasValidationWidgets) || UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_PIN.PINChange");
});
define("UBTConnect.App_PIN.PINChange.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_PIN.PINChange.mvc$model", "UBTConnect.App_PIN.PINChange.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$view", "UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, NavigationHandlerController, UBTJavaScriptUtilsController, React, OSView, UBTConnect_App_PIN_PINChange_mvc_model, UBTConnect_App_PIN_PINChange_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_view, UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_view) {
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
        View.displayName = "App_PIN.PINChange";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_view, UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_PIN_PINChange_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_PIN_PINChange_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "PINChange";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, {
                inputs: {
                    In_HasOverlay: model.variables.useOverlayVar,
                    In_ExtendedClass: model.getCachedValue(idService.getId("bfPKtf8U7Eme8+K1WUjmfQ.In_ExtendedClass"), function() {
                        return ((model.variables.isScreenUnlockedVar) ? ("") : ("ubt-lock-screen"));
                    }, function() {
                        return model.variables.isScreenUnlockedVar;
                    })
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_Header: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Link, {
                            enabled: true,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_PIN/PINChange/Link OnClick");
                                    controller.onClick_BackToLogin$Action(controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });

                                ;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                            inputs: {
                                Text: "Change PIN",
                                TextOptions: model.getCachedValue(idService.getId("t3603+FzuUaajvnF9K+W5Q.TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                        return rec;
                                    }();
                                }),
                                SpacingSize: UBTConnectModel.staticEntities.uBT_Size.small
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
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                icon: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                        inputs: {
                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.inherit,
                                            In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.arrowLeftAlt
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
                                            uuid: "3",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: []
                        }))];
                    }),
                    placeholder_Content: new PlaceholderContent(function() {
                        return [$if(model.variables.isScreenUnlockedVar, false, this, function() {
                            return [React.createElement(UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_view, {
                                inputs: {
                                    RegisterText: "Enter new PIN",
                                    ConfirmText: "Confirm new PIN",
                                    isFromMenu: true,
                                    UseOverlay: model.variables.useOverlayVar
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
                                    uuid: "4",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [React.createElement(UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_view, {
                                inputs: {
                                    ShowForgotPIN: false,
                                    In_ForceVisible: true,
                                    ShowPolicy: false,
                                    UseOverlay: model.variables.useOverlayVar,
                                    UnlockText: "Enter your current PIN",
                                    ShowNeedHelp: false,
                                    isFromMenu: true
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    unlock$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_PIN/Block_PINUnlock_ContentWrapper Unlock");
                                            controller.block_PINUnlockUnlock$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    navigateTo_PINRegister$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_PIN/Block_PINUnlock_ContentWrapper NavigateTo_PINRegister");
                                            controller.block_PINUnlockUnlock$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "5",
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    }),
                    placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty
                },
                _dependencies: [asPrimitiveValue(model.variables.useOverlayVar), asPrimitiveValue(model.variables.isScreenUnlockedVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.App_PIN.PINChange.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_PIN.PINChange.mvc$debugger", "UBTConnect.App_PIN.controller", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, NavigationHandlerController, UBTJavaScriptUtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_PIN_PINChange_mvc_Debugger, _flow_UBTConnect_App_PINController) {
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
        Controller.prototype._onClick_BackToLogin$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_BackToLogin");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ICB5zyX7iUO15GzJSz+xhg:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.HI+A3SKmtk+QFIeqJJBIOA/ClientActions.ICB5zyX7iUO15GzJSz+xhg:S2k1m6uyn1C3RCYoKUjg5A", "UBTConnect", "OnClick_BackToLogin", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tAPi0JxaLEWR0panX9goNQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nZv+pdm5rkuOmwqfSOW9OA", callContext.id);
                // Execute Action: AllowUpcomingNavigation
                NavigationHandlerController.default.allowUpcomingNavigation$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I6h97ybn+EGDMtvhj0LLTA", callContext.id);
                // Destination: /UBTConnect/Menu
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Menu", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ICB5zyX7iUO15GzJSz+xhg", callContext.id);
            }

        };
        Controller.prototype._block_PINUnlockUnlock$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Block_PINUnlockUnlock");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Qaks2DZsIEWMm7qDZI1PdQ:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.HI+A3SKmtk+QFIeqJJBIOA/ClientActions.Qaks2DZsIEWMm7qDZI1PdQ:pcQtnk+JaJgunwnUTRCqoQ", "UBTConnect", "Block_PINUnlockUnlock", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tr5nwbDdz0CeZXrn4EFYuw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:topAdysHNECn0Fb63DC9pg", callContext.id);
                // isScreenUnlocked = True
                model.variables.isScreenUnlockedVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l5EcEVtCi0aNhio2XYbnGA", callContext.id);
                // Execute Action: FeedbackMessage_AutoClose
                UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "Please provide a new PIN", UBTConnectModel.staticEntities.uBT_MessageType.success, true, "", 0, false, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SQChwphYz0yRLjnnqNzsCQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Qaks2DZsIEWMm7qDZI1PdQ", callContext.id);
            }

        };

        Controller.prototype.onClick_BackToLogin$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_BackToLogin$Action, callContext);

        };
        Controller.prototype.block_PINUnlockUnlock$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._block_PINUnlockUnlock$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw:bpWaB45r1qkJPgqYmZEd1g", "UBTConnect", "App_PIN", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HI+A3SKmtk+QFIeqJJBIOA:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.HI+A3SKmtk+QFIeqJJBIOA:Oy7Imh6VPL93aMO5dTWfLw", "UBTConnect", "PINChange", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HI+A3SKmtk+QFIeqJJBIOA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_App_PINController.default.handleError(ex, this.callContext());
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

define("UBTConnect.App_PIN.PINChange.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "Z4AoeHETB0iHTR1_nf77kg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isScreenUnlockedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "cinzF5nQq0GyXM1KNfb1CQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.useOverlayVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "0bkCiHl0uU2OUIs0da0+MA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header"));
                })(varBag.model, idService);
            }
        },
        "jGVDCXLSU0GZ8ETr2Cy5KQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "xhhmwGLrkk29GFl1GyOa8w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Content"));
                })(varBag.model, idService);
            }
        },
        "vSxjyKqsHkeWkQ5slyBeGA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("isScreenUnlocked2"));
                })(varBag.model, idService);
            }
        },
        "Z101GjCXP0OtyS4ibCt0JQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});