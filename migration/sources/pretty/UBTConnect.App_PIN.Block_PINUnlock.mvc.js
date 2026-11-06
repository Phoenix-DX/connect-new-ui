define("UBTConnect.App_PIN.Block_PINUnlock.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.controller", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc$model", "UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$Get_IsUnsupportedSystem"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectController, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvcModel, UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("UseOverlay", "useOverlayVar", "UseOverlay", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("IsUnsupportedSystem", "isUnsupportedSystemVar", "IsUnsupportedSystem", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("In_ForceVisible", "in_ForceVisibleIn", "In_ForceVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_ForceVisibleInDataFetchStatus", "_in_ForceVisibleInDataFetchStatus", "_in_ForceVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsCommonBlock", "in_IsCommonBlockIn", "In_IsCommonBlock", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsCommonBlockInDataFetchStatus", "_in_IsCommonBlockInDataFetchStatus", "_in_IsCommonBlockInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((UBTConnectLibrary_Layouts_Layout_LoginFlow_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvcModel.hasValidationWidgets) || UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_ForceVisible" in inputs) {
                this.variables.in_ForceVisibleIn = inputs.In_ForceVisible;
                if ("_in_ForceVisibleInDataFetchStatus" in inputs) {
                    this.variables._in_ForceVisibleInDataFetchStatus = inputs._in_ForceVisibleInDataFetchStatus;
                }

            }

            if ("In_IsCommonBlock" in inputs) {
                this.variables.in_IsCommonBlockIn = inputs.In_IsCommonBlock;
                if ("_in_IsCommonBlockInDataFetchStatus" in inputs) {
                    this.variables._in_IsCommonBlockInDataFetchStatus = inputs._in_IsCommonBlockInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_PIN.Block_PINUnlock");
});
define("UBTConnect.App_PIN.Block_PINUnlock.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_PIN.Block_PINUnlock.mvc$model", "UBTConnect.App_PIN.Block_PINUnlock.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc$view", "UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$Get_IsUnsupportedSystem"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_App_PIN_Block_PINUnlock_mvc_model, UBTConnect_App_PIN_Block_PINUnlock_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvc_view, UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_view) {
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
        View.displayName = "App_PIN.Block_PINUnlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvc_view, UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_PIN_Block_PINUnlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_PIN_Block_PINUnlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, {
                inputs: {
                    In_HasOverlay: model.variables.useOverlayVar,
                    In_ExtendedClass: "ubt-lock-screen connect-legacy-compatibily-containter",
                    In_IsCommonBlock: model.variables.in_IsCommonBlockIn,
                    _in_IsCommonBlockInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsCommonBlockInDataFetchStatus)
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
                    placeholder_Header: PlaceholderContent.Empty,
                    placeholder_Content: new PlaceholderContent(function() {
                        return [$if(model.variables.isUnsupportedSystemVar, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "ubt-layout--login__content__unsupported-card",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("Tp5D4jZec0qHCroHqYmlJA.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.backgroundAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                                return rec;
                                            }();
                                            rec.paddingSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraLarge;
                                                return rec;
                                            }();
                                            rec.marginSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                                return rec;
                                            }();
                                            rec.borderOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                rec.radiusAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.large;
                                                    return rec;
                                                }();
                                                return rec;
                                            }();
                                            return rec;
                                        }();
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
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvc_view, {
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
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    })
                                },
                                _dependencies: []
                            }))];
                        }, function() {
                            return [React.createElement(UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_view, {
                                inputs: {
                                    ShowForgotPIN: true,
                                    ShowPolicy: true,
                                    In_ForceVisible: model.variables.in_ForceVisibleIn,
                                    _in_ForceVisibleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ForceVisibleInDataFetchStatus),
                                    UseOverlay: model.variables.useOverlayVar
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    navigateTo_PINRegister$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_PIN/Block_PINUnlock_ContentWrapper NavigateTo_PINRegister");
                                            controller.block_PINUnlock_ContentWrapperNavigateTo_PINRegist$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    unlock$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_PIN/Block_PINUnlock_ContentWrapper Unlock");
                                            controller.unlock$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "4",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    }),
                    placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_CommonUI_Inside_Layout,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_CommonUI_Inside_Layout"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_PIN.Block_PINUnlock.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_PIN.Block_PINUnlock.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$Get_IsUnsupportedSystem"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_PIN_Block_PINUnlock_mvc_Debugger) {
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
            var get_IsUnsupportedSystemVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.get_IsUnsupportedSystemVar = get_IsUnsupportedSystemVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:u6BvqtEIYEufdXIkQN92WA:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.KYIXMNuRVUalLbJWhgDv3A/ClientActions.u6BvqtEIYEufdXIkQN92WA:sCJ2GKjIN63fbdHAXxPI2Q", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FXAHXxHMQUeqDPempK7wqQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4u9gDk9ehUuzXeQdrY_ZHw", callContext.id);
                // Execute Action: Get_IsUnsupportedSystem
                get_IsUnsupportedSystemVar.value = UBTConnectController.default.get_IsUnsupportedSystem$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e4issqANw0O0BDLedSHcNQ", callContext.id);
                // IsUnsupportedSystem = Get_IsUnsupportedSystem.Out_IsUnsupportedSystem
                model.variables.isUnsupportedSystemVar = get_IsUnsupportedSystemVar.value.out_IsUnsupportedSystemOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N_Zv8QcyjUW4t+iTW2g7xg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:u6BvqtEIYEufdXIkQN92WA", callContext.id);
            }

        };
        Controller.prototype._block_PINUnlock_ContentWrapperNavigateTo_PINRegist$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Block_PINUnlock_ContentWrapperNavigateTo_PINRegist");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:D_Ce5by5akmmp4qj+58v8w:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.KYIXMNuRVUalLbJWhgDv3A/ClientActions.D_Ce5by5akmmp4qj+58v8w:SlL9wSWwh6Gos3KHqiEz4A", "UBTConnect", "Block_PINUnlock_ContentWrapperNavigateTo_PINRegist", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2xp6OM4RkiibwuCSsxwCQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y9f8k6oV+UG4Ghibq2hBHg", callContext.id);
                // Destination: /UBTConnect/PINRegister
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/PINRegister", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:D_Ce5by5akmmp4qj+58v8w", callContext.id);
            }

        };

        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.block_PINUnlock_ContentWrapperNavigateTo_PINRegist$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._block_PINUnlock_ContentWrapperNavigateTo_PINRegist$Action, callContext);

        };
        Controller.prototype.unlock$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw:bpWaB45r1qkJPgqYmZEd1g", "UBTConnect", "App_PIN", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KYIXMNuRVUalLbJWhgDv3A:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.KYIXMNuRVUalLbJWhgDv3A:K_d7U7zUobtpa_Lu5qgkug", "UBTConnect", "Block_PINUnlock", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KYIXMNuRVUalLbJWhgDv3A", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_PIN/Block_PINUnlock On Initialize");
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
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_PIN.Block_PINUnlock.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "4u9gDk9ehUuzXeQdrY_ZHw": {
            getter: function(varBag, idService) {
                return varBag.get_IsUnsupportedSystemVar.value;
            }
        },
        "8hoWYeVa10i4gW9OmbLJSQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.useOverlayVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "OcCjAhr5fU2DPzUjatW2Lg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isUnsupportedSystemVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "cc0VkwDnEEmheXes15rR5w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ForceVisibleIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "3tF3AIyu8EycYdqhg4JWyA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsCommonBlockIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "1bEoHO0rNEmyfpMxypCjgw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header"));
                })(varBag.model, idService);
            }
        },
        "ArghfdO2+Ua4GPPY76HUDA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Content"));
                })(varBag.model, idService);
            }
        },
        "RqH1HMu+HkC6I4viGRbajA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "nrVKdW3GV0yaGivBjUSXGA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        },
        "NRvdViAK2U2ONkUiVoNeNQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});