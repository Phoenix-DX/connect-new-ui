define("Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "CommonPlugin.model", "InAppBrowserEvents.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "InAppBrowserEvents.model", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$model", "CommonPlugin.model$ErrorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin", "InAppBrowserEvents.controller$CheckInAppBrowserPlugin", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "InAppBrowserEvents.model$OptionsRec", "InAppBrowserEvents.model$AndroidOptionsRec", "InAppBrowserEvents.model$IOSOptionsRec", "InAppBrowserEvents.controller$Open"], function(OutSystems, Connect2_LegacySharedModel, CommonPluginModel, InAppBrowserEventsController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, InAppBrowserEventsModel, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel) {
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
                    Model._hasValidationWidgetsValue = NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "Utility.FreeSubscriptionActionDialog");
});
define("Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "CommonPlugin.model", "InAppBrowserEvents.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "InAppBrowserEvents.model", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc$model", "Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view", "CommonPlugin.model$ErrorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin", "InAppBrowserEvents.controller$CheckInAppBrowserPlugin", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "InAppBrowserEvents.model$OptionsRec", "InAppBrowserEvents.model$AndroidOptionsRec", "InAppBrowserEvents.model$IOSOptionsRec", "InAppBrowserEvents.controller$Open"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, CommonPluginModel, InAppBrowserEventsController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, InAppBrowserEventsModel, React, OSView, Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_model, Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view) {
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
        View.displayName = "Utility.FreeSubscriptionActionDialog";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_controller;
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
                style: "upgrade-subscription-action-dialog backwards-compatibility",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    confirmed$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/ActionConfirmationDialog Confirmed");
                                return controller.onConfirmed$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    dialogHeader: new PlaceholderContent(function() {
                        return ["Access Restricted"];
                    }),
                    dialogBody: new PlaceholderContent(function() {
                        return ["It seems like you don\'t have access to this information.", React.createElement("br"), React.createElement("br"), "Please upgrade your subscription to gain access to more features and information."];
                    }),
                    buttonLabel_Confirm: new PlaceholderContent(function() {
                        return ["Upgrade Subscription"];
                    }),
                    buttonLabel_Dismiss: new PlaceholderContent(function() {
                        return ["Cancel"];
                    })
                },
                _dependencies: []
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "CommonPlugin.model", "InAppBrowserEvents.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "InAppBrowserEvents.model", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc$debugger", "CommonPlugin.model$ErrorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin", "InAppBrowserEvents.controller$CheckInAppBrowserPlugin", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "InAppBrowserEvents.model$OptionsRec", "InAppBrowserEvents.model$AndroidOptionsRec", "InAppBrowserEvents.model$IOSOptionsRec", "InAppBrowserEvents.controller$Open"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, CommonPluginModel, InAppBrowserEventsController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, InAppBrowserEventsModel, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_Debugger) {
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
        Controller.prototype._onConfirmed$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnConfirmed");
            callContext = controller.callContext(callContext);
            var checkInAppBrowserPluginVar = new OS.DataTypes.VariableHolder();
            var getCacheableUserInfoVar = new OS.DataTypes.VariableHolder();
            var openVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.checkInAppBrowserPluginVar = checkInAppBrowserPluginVar;
            varBag.getCacheableUserInfoVar = getCacheableUserInfoVar;
            varBag.openVar = openVar;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:AG9OkRMHiEWruhaY60nhzw:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.UdrSJQkfYUWMtXw9MHAwyw/ClientActions.AG9OkRMHiEWruhaY60nhzw:bfMwi3XbOuw0Wxy5FhqkWA", "Connect2_LegacyShared", "OnConfirmed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+rQEsFUCmE26x+OLIdi5AQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_1oflgeySkqYgiuFAH1AKg", callContext.id);
                // Execute Action: GetCacheableUserInfo
                model.flush();
                return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function(value) {
                    getCacheableUserInfoVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:9HfLSyypEE+9O4smPghuIw", callContext.id);
                    // Execute Action: CheckInAppBrowserPlugin
                    checkInAppBrowserPluginVar.value = InAppBrowserEventsController.default.checkInAppBrowserPlugin$Action(callContext);

                }).then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xqmwxq2d0UqwY8EAle2gvg", callContext.id) && checkInAppBrowserPluginVar.value.isAvailableOut)) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+CTryhTprEqSgkD8oxLzZA", callContext.id);
                        // Execute Action: Open
                        openVar.value = InAppBrowserEventsController.default.open$Action(getCacheableUserInfoVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionManageLinkAttr, Connect2_LegacySharedModel.staticEntities.target.sYSTEM, new InAppBrowserEventsModel.OptionsRec(), new InAppBrowserEventsModel.AndroidOptionsRec(), new InAppBrowserEventsModel.IOSOptionsRec(), callContext);

                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0EKYh7yyXE+1KSxKia9gIQ", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:f7ZhtziUdke70RYlkxPZmg", callContext.id);
                        // Destination: /Connect2_LegacyShared/
                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(getCacheableUserInfoVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionManageLinkAttr, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:AG9OkRMHiEWruhaY60nhzw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:AG9OkRMHiEWruhaY60nhzw", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.onConfirmed$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onConfirmed$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw:y4OEvNt9FV7g_od25DYkmA", "Connect2_LegacyShared", "Utility", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:UdrSJQkfYUWMtXw9MHAwyw:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.UdrSJQkfYUWMtXw9MHAwyw:AgSqjUIDsfGz9+WtHYO2xw", "Connect2_LegacyShared", "FreeSubscriptionActionDialog", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:UdrSJQkfYUWMtXw9MHAwyw", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw", callContext.id);
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
            return Connect2_LegacySharedController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "9HfLSyypEE+9O4smPghuIw": {
            getter: function(varBag, idService) {
                return varBag.checkInAppBrowserPluginVar.value;
            }
        },
        "_1oflgeySkqYgiuFAH1AKg": {
            getter: function(varBag, idService) {
                return varBag.getCacheableUserInfoVar.value;
            }
        },
        "+CTryhTprEqSgkD8oxLzZA": {
            getter: function(varBag, idService) {
                return varBag.openVar.value;
            }
        },
        "cj6vX_K1Mk+iWmm8hybYDg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogHeader"));
                })(varBag.model, idService);
            }
        },
        "Ujbi0VHBEkWAClmSeHR_OQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogBody"));
                })(varBag.model, idService);
            }
        },
        "aXKWO1vneEmcZK13pJGgKw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
                })(varBag.model, idService);
            }
        },
        "c9w3VGgD70Ghi8acfreHMQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});