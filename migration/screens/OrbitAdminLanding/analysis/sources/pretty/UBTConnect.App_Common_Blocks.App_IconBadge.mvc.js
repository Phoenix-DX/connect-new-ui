define("UBTConnect.App_Common_Blocks.App_IconBadge.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model"], function(OutSystems, UBTConnectModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("BadgeNumber", "badgeNumberIn", "BadgeNumber", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_badgeNumberInDataFetchStatus", "_badgeNumberInDataFetchStatus", "_badgeNumberInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MaxNotifications", "maxNotificationsIn", "MaxNotifications", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 9;
                }, false),
                this.attr("_maxNotificationsInDataFetchStatus", "_maxNotificationsInDataFetchStatus", "_maxNotificationsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IconId", "iconIdIn", "IconId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_iconIdInDataFetchStatus", "_iconIdInDataFetchStatus", "_iconIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IconColor", "iconColorIn", "IconColor", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_iconColorInDataFetchStatus", "_iconColorInDataFetchStatus", "_iconColorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("isLoading", "isLoadingIn", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("BadgeNumber" in inputs) {
                this.variables.badgeNumberIn = inputs.BadgeNumber;
                if ("_badgeNumberInDataFetchStatus" in inputs) {
                    this.variables._badgeNumberInDataFetchStatus = inputs._badgeNumberInDataFetchStatus;
                }

            }

            if ("MaxNotifications" in inputs) {
                this.variables.maxNotificationsIn = inputs.MaxNotifications;
                if ("_maxNotificationsInDataFetchStatus" in inputs) {
                    this.variables._maxNotificationsInDataFetchStatus = inputs._maxNotificationsInDataFetchStatus;
                }

            }

            if ("IconId" in inputs) {
                this.variables.iconIdIn = inputs.IconId;
                if ("_iconIdInDataFetchStatus" in inputs) {
                    this.variables._iconIdInDataFetchStatus = inputs._iconIdInDataFetchStatus;
                }

            }

            if ("IconColor" in inputs) {
                this.variables.iconColorIn = inputs.IconColor;
                if ("_iconColorInDataFetchStatus" in inputs) {
                    this.variables._iconColorInDataFetchStatus = inputs._iconColorInDataFetchStatus;
                }

            }

            if ("isLoading" in inputs) {
                this.variables.isLoadingIn = inputs.isLoading;
                if ("_isLoadingInDataFetchStatus" in inputs) {
                    this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Common_Blocks.App_IconBadge");
});
define("UBTConnect.App_Common_Blocks.App_IconBadge.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common_Blocks.App_IconBadge.mvc$model", "UBTConnect.App_Common_Blocks.App_IconBadge.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_App_Common_Blocks_App_IconBadge_mvc_model, UBTConnect_App_Common_Blocks_App_IconBadge_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "App_Common_Blocks.App_IconBadge";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_App_IconBadge_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_App_IconBadge_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                inputs: {
                    In_IsLoading: (model.variables.isLoadingIn || model.variables.badgeNumberIn.equals(OS.BuiltinFunctions.integerToLongInteger(-1))),
                    _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus, model.variables._badgeNumberInDataFetchStatus)
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
                    name: "Skeleton",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_LoadingSection: new PlaceholderContent(function() {
                        return [$if(!(model.variables.badgeNumberIn.equals(OS.BuiltinFunctions.integerToLongInteger(0))), false, this, function() {
                            return [React.createElement(OSWidgets.Link, {
                                enabled: true,
                                onClick: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common_Blocks/App_IconBadge/Link OnClick");
                                            return controller.iconClick$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_view, {
                                inputs: {
                                    Number: model.variables.badgeNumberIn,
                                    _numberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._badgeNumberInDataFetchStatus),
                                    MaxNumber: model.variables.maxNotificationsIn,
                                    _maxNumberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._maxNotificationsInDataFetchStatus),
                                    Color: UBTConnectModel.staticEntities.uBT_Color.red
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
                                    name: "IconBadge",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                            inputs: {
                                                In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                                In_ColorId: model.variables.iconColorIn,
                                                _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconColorInDataFetchStatus),
                                                In_IconId: model.variables.iconIdIn,
                                                _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconIdInDataFetchStatus),
                                                In_ExtendedClasses: "ignore-loading"
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
                                _dependencies: [asPrimitiveValue(model.variables.iconIdIn), asPrimitiveValue(model.variables._iconIdInDataFetchStatus), asPrimitiveValue(model.variables._iconColorInDataFetchStatus), asPrimitiveValue(model.variables.iconColorIn)]
                            }))];
                        }, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                inputs: {
                                    In_IconId: model.variables.iconIdIn,
                                    _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconIdInDataFetchStatus),
                                    In_ColorId: model.variables.iconColorIn,
                                    _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconColorInDataFetchStatus),
                                    In_ExtendedClasses: "ignore-loading",
                                    In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    click$Action: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                                return controller.iconClick$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "4",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.iconIdIn), asPrimitiveValue(model.variables.iconColorIn), asPrimitiveValue(model.variables.maxNotificationsIn), asPrimitiveValue(model.variables._iconIdInDataFetchStatus), asPrimitiveValue(model.variables._iconColorInDataFetchStatus), asPrimitiveValue(model.variables._maxNotificationsInDataFetchStatus), asPrimitiveValue(model.variables._badgeNumberInDataFetchStatus), asPrimitiveValue(model.variables.badgeNumberIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_Common_Blocks.App_IconBadge.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common_Blocks.App_IconBadge.mvc$debugger"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_Blocks_App_IconBadge_mvc_Debugger) {
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
        Controller.prototype._iconClick$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("IconClick");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OiT8sUEcP0mAAFeoQOn_uQ:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.SwY+YKwTgk2vyjvOHOOkbg/ClientActions.OiT8sUEcP0mAAFeoQOn_uQ:E7oeA8DM+1qc5HmgLIUGaw", "UBTConnect", "IconClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R6PXsMW0VU+JSzDpRLB9QQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:njPkcEK4z0eiGz_MudutYw", callContext.id);
                // Trigger Event: OnClick
                return controller.onClick$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b4xnvsfkakKpRAEiegrLHg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OiT8sUEcP0mAAFeoQOn_uQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OiT8sUEcP0mAAFeoQOn_uQ", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.iconClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._iconClick$Action, callContext);

        };
        Controller.prototype.onClick$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nOP5YI0vaUiihxkrWd2JmA:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA:tjT3qcDcMm8Cw03tF5yCfg", "UBTConnect", "App_Common_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:SwY+YKwTgk2vyjvOHOOkbg:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.SwY+YKwTgk2vyjvOHOOkbg:kb5ijKXxBiz2MtVZmE+kAw", "UBTConnect", "App_IconBadge", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:SwY+YKwTgk2vyjvOHOOkbg", callContext.id);
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

define("UBTConnect.App_Common_Blocks.App_IconBadge.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "21a2Ezhb4UatD4Y0+miuFg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.badgeNumberIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "6qfa4Wzt7kK8ZUIBswg1ZA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxNotificationsIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "1eRX2oU2HUiKTZp2ESH78A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.iconIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "OurvyVtyM0mMdW5CkOk1hw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.iconColorIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "u1IatfvRgU2+pWlbsIOSiQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "iX9wCFYXXEqdsdbdTT9Pnw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Skeleton"));
                })(varBag.model, idService);
            }
        },
        "DQHAjdv5rkmNuYh6zZlQTw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "UhEwU3im4EyVMTB19xyRLA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasNumber"));
                })(varBag.model, idService);
            }
        },
        "Fv0UmtW0x02mJsQnACl3iA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IconBadge"));
                })(varBag.model, idService);
            }
        },
        "JJkyqhBxPkWSerQO+dXrYg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});