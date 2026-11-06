define("UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "UBTConnect.App_Common_Blocks.App_IconBadge.mvc$model", "UBTConnect.App_Common_Blocks.App_NotificationRefresh.mvc$model", "UBTConnect_Utils.controller$GetHasNewNotifications", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$GetUnreadNotificationNumber", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function(OutSystems, UBTConnectModel, UBTConnect_UtilsController, Connect2_LegacySharedController, UBTConnect_App_Common_Blocks_App_IconBadge_mvcModel, UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("LocalNotifications", "localNotificationsVar", "LocalNotifications", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.BuiltinFunctions.integerToLongInteger(-1);
                }, false)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.fromStructure = function(str) {
            return new VariablesRecord(new VariablesRecord.RecordClass({
                localNotificationsVar: OS.DataTypes.ImmutableBase.getData(str)
            }));
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
                    Model._hasValidationWidgetsValue = (UBTConnect_App_Common_Blocks_App_IconBadge_mvcModel.hasValidationWidgets || UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Common_Blocks.App_NotificationIcon");
});
define("UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$model", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common_Blocks.App_IconBadge.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common_Blocks.App_NotificationRefresh.mvc$view", "UBTConnect_Utils.controller$GetHasNewNotifications", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$GetUnreadNotificationNumber", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, React, OSView, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_model, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, OSWidgets, UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvc_view) {
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
        View.displayName = "App_Common_Blocks.App_NotificationIcon";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, {
                inputs: {
                    isLoading: !(UBTConnectClientVariables.getNotifications_IsSynched()),
                    BadgeNumber: model.variables.localNotificationsVar,
                    MaxNotifications: 9,
                    IconColor: UBTConnectModel.staticEntities.uBT_Color.neutral0,
                    IconId: UBTConnectModel.staticEntities.uBT_Icons2.notifications
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common_Blocks/App_IconBadge OnClick");
                            controller.iconClick$Action(controller.callContext(eventHandlerContext));
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
                _dependencies: []
            }), React.createElement(UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvc_view, {
                inputs: {
                    Datetime: UBTConnectClientVariables.getNotifications_LastChecked()
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    updated$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common_Blocks/App_NotificationRefresh Updated");
                            controller.app_NotificationRefreshUpdated$Action(controller.callContext(eventHandlerContext));
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
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$debugger", "UBTConnect_Utils.controller$GetHasNewNotifications", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$GetUnreadNotificationNumber", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_Debugger) {
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
            var getHasNewNotificationsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getHasNewNotificationsVar = getHasNewNotificationsVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7qXBeAlJqEmbO+LKVJ6YVg:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.GVmOGrH32EGFWiJztQsyRQ/ClientActions.7qXBeAlJqEmbO+LKVJ6YVg:hbQrG5AvWEpOILFzfSZ4pA", "UBTConnect", "IconClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e7GS8J6EZECc_VPYU+qCKg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6AN8N62Vt06nWKsBF3qhlw", callContext.id);
                // Execute Action: GetHasNewNotifications
                getHasNewNotificationsVar.value = UBTConnect_UtilsController.default.getHasNewNotifications$Action(callContext);

                // HasNewNotifications?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Lo0cgax2qUiH7LSAnlSbDA", callContext.id) && getHasNewNotificationsVar.value.out_HasNewNotificationsOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vstPAeCBz0iKOXky057Q5w", callContext.id);
                    // Destination: /UBTConnect/Notifications
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Notifications", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:H30NxM9HbUm5E53qBawXpA", callContext.id);
                    // Destination: /UBTConnect/MessageList
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/MessageList", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7qXBeAlJqEmbO+LKVJ6YVg", callContext.id);
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
            var getUnreadNotificationNumberVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getUnreadNotificationNumberVar = getUnreadNotificationNumberVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3sK7qQlJ9ke75H115k8QsA:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.GVmOGrH32EGFWiJztQsyRQ/ClientActions.3sK7qQlJ9ke75H115k8QsA:0zIjOt+SyJcDJ4mVNysOQA", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DVfu1Rv3l06IF1giALUa0g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bk+N3Andc0exwyFJGxjx1w", callContext.id);
                // Execute Action: GetUnreadNotificationNumber
                getUnreadNotificationNumberVar.value = Connect2_LegacySharedController.default.getUnreadNotificationNumber$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PZlL6aBFuEGDFu4XCrWaRg", callContext.id);
                // LocalNotifications = GetUnreadNotificationNumber.UnreadNotifications
                model.variables.localNotificationsVar = getUnreadNotificationNumberVar.value.unreadNotificationsOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dI+bD+dzjkyVGu6ml2visA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3sK7qQlJ9ke75H115k8QsA", callContext.id);
            }

        };
        Controller.prototype._app_NotificationRefreshUpdated$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("App_NotificationRefreshUpdated");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:24wF03jLgkW_v78L1Cjxig:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.GVmOGrH32EGFWiJztQsyRQ/ClientActions.24wF03jLgkW_v78L1Cjxig:ttvyZs68MvX87um6Y9jM9A", "UBTConnect", "App_NotificationRefreshUpdated", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hatsqsGjY0GxlAe9U6gecg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LO+5UYiPykmDu0fY523OmQ", callContext.id);
                // Execute Action: OnReady
                controller._onReady$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:USwIQcu_LEOg2RaUpp4m8w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:24wF03jLgkW_v78L1Cjxig", callContext.id);
            }

        };

        Controller.prototype.iconClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._iconClick$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.app_NotificationRefreshUpdated$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._app_NotificationRefreshUpdated$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nOP5YI0vaUiihxkrWd2JmA:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA:tjT3qcDcMm8Cw03tF5yCfg", "UBTConnect", "App_Common_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GVmOGrH32EGFWiJztQsyRQ:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.GVmOGrH32EGFWiJztQsyRQ:0X7KBGhA_q2DBXoi_oA2QQ", "UBTConnect", "App_NotificationIcon", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GVmOGrH32EGFWiJztQsyRQ", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nOP5YI0vaUiihxkrWd2JmA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Common_Blocks/App_NotificationIcon On Ready");
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
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "6AN8N62Vt06nWKsBF3qhlw": {
            getter: function(varBag, idService) {
                return varBag.getHasNewNotificationsVar.value;
            }
        },
        "bk+N3Andc0exwyFJGxjx1w": {
            getter: function(varBag, idService) {
                return varBag.getUnreadNotificationNumberVar.value;
            }
        },
        "gIKVXX8++kuwZHYKsfUCZA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localNotificationsVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});