define("UBTConnect.App_Common_Blocks.External_Link.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.model$BusinessLinkItemRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect_Utils.controller$OpenInApp_OpenExternalLink", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$CheckIOsPlatform", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnect_UtilsController, UBTJavaScriptUtilsController, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("FontSize", "fontSizeVar", "FontSize", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnectModel.staticEntities.uBT_FontSize.small;
                }, false),
                this.attr("In_Link", "in_LinkIn", "In_Link", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.BusinessLinkItemRec());
                }, false, UBTConnectModel.BusinessLinkItemRec),
                this.attr("_in_LinkInDataFetchStatus", "_in_LinkInDataFetchStatus", "_in_LinkInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsEnabled", "isEnabledIn", "IsEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IconVisible", "iconVisibleIn", "IconVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_iconVisibleInDataFetchStatus", "_iconVisibleInDataFetchStatus", "_iconVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_Link" in inputs) {
                this.variables.in_LinkIn = inputs.In_Link;
                if ("_in_LinkInDataFetchStatus" in inputs) {
                    this.variables._in_LinkInDataFetchStatus = inputs._in_LinkInDataFetchStatus;
                }

            }

            if ("IsEnabled" in inputs) {
                this.variables.isEnabledIn = inputs.IsEnabled;
                if ("_isEnabledInDataFetchStatus" in inputs) {
                    this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
                }

            }

            if ("IconVisible" in inputs) {
                this.variables.iconVisibleIn = inputs.IconVisible;
                if ("_iconVisibleInDataFetchStatus" in inputs) {
                    this.variables._iconVisibleInDataFetchStatus = inputs._iconVisibleInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Common_Blocks.External_Link");
});
define("UBTConnect.App_Common_Blocks.External_Link.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common_Blocks.External_Link.mvc$model", "UBTConnect.App_Common_Blocks.External_Link.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.model$BusinessLinkItemRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect_Utils.controller$OpenInApp_OpenExternalLink", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$CheckIOsPlatform", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsController, UBTJavaScriptUtilsController, React, OSView, UBTConnect_App_Common_Blocks_External_Link_mvc_model, UBTConnect_App_Common_Blocks_External_Link_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "App_Common_Blocks.External_Link";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_External_Link_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_External_Link_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                inputs: {
                    Text: model.variables.in_LinkIn.textAttr,
                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_LinkInDataFetchStatus),
                    SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
                    TextOptions: model.getCachedValue(idService.getId("rDBbdYFn30y1MoPYa5PkMg.TextOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                            rec.colorAttr = ((model.variables.isEnabledIn) ? (UBTConnectModel.staticEntities.uBT_Color.primary) : (UBTConnectModel.staticEntities.uBT_Color.neutral7));
                            rec.fontSizeAttr = model.variables.fontSizeVar;
                            rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
                            rec.isUnderlinedAttr = true;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.isEnabledIn;
                    }, function() {
                        return model.variables.fontSizeVar;
                    }),
                    _textOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    clicked$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/IconText Clicked");
                            controller.linkClicked$Action(controller.callContext(eventHandlerContext));
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
                    icon: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                            inputs: {
                                In_ColorId: model.getCachedValue(idService.getId("nVhGHAnaQEeVgSIMcmC6WQ.In_ColorId"), function() {
                                    return ((model.variables.isEnabledIn) ? (UBTConnectModel.staticEntities.uBT_Color.primary) : (UBTConnectModel.staticEntities.uBT_Color.neutral7));
                                }, function() {
                                    return model.variables.isEnabledIn;
                                }),
                                _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16,
                                In_Visible: model.variables.iconVisibleIn,
                                _in_VisibleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconVisibleInDataFetchStatus),
                                In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.openNew
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.iconVisibleIn), asPrimitiveValue(model.variables._iconVisibleInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables.isEnabledIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_Common_Blocks.External_Link.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common_Blocks.External_Link.mvc$debugger", "UBTConnect.model$BusinessLinkItemRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect_Utils.controller$OpenInApp_OpenExternalLink", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$CheckIOsPlatform", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsController, UBTJavaScriptUtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_Blocks_External_Link_mvc_Debugger) {
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
        Controller.prototype._linkClicked$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("LinkClicked");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rrXpyFQGbUOooBdqNEM_Ow:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.SqcdHqLIi0ahG7TN6W3x0g/ClientActions.rrXpyFQGbUOooBdqNEM_Ow:Onp2F3DlO871p16ciYpqiQ", "UBTConnect", "LinkClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vFuZmou2jE6YP59TnKln8Q", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bpGJP0+qNEeN4GgU5g3uBg", callContext.id) && OutSystemsDebugger.handleFunctionCall(function() {
                        return UBTJavaScriptUtilsController.default.checkIOsPlatform$Action(callContext).isIOsOut;
                    }, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OjzF2IlfcEeBP+3BF1IhAg", callContext.id);
                    // Destination: /UBTConnect/
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(model.variables.in_LinkIn.linkAttr, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wnf9TiujGkuB6zefKNtMcQ", callContext.id);
                    // Execute Action: OpenInApp_OpenExternalLink
                    UBTConnect_UtilsController.default.openInApp_OpenExternalLink$Action(model.variables.in_LinkIn.linkAttr, false, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:23mm7ycrl06sqpfk30cb4A", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rrXpyFQGbUOooBdqNEM_Ow", callContext.id);
            }

        };

        Controller.prototype.linkClicked$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._linkClicked$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nOP5YI0vaUiihxkrWd2JmA:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA:tjT3qcDcMm8Cw03tF5yCfg", "UBTConnect", "App_Common_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:SqcdHqLIi0ahG7TN6W3x0g:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.SqcdHqLIi0ahG7TN6W3x0g:NADGMGBA9vTQF+sEHZqfoQ", "UBTConnect", "External_Link", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:SqcdHqLIi0ahG7TN6W3x0g", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nOP5YI0vaUiihxkrWd2JmA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
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

define("UBTConnect.App_Common_Blocks.External_Link.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "q02DuqZjzECWLxKBJ0bqWg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fontSizeVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "VeV19O24T0SIr5oOSIk7JQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_LinkIn;
            }
        },
        "haWuANjqpEKRLuEmp4ubKQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isEnabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "jj1pXq+NwEavG81QmWdnqw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.iconVisibleIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "F6Ilj9p1Y0SV0hn3oCC3jQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});