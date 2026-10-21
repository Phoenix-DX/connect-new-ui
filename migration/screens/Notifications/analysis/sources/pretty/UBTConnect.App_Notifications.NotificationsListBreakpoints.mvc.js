define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_Notification_CS.model", "UBTConnect.App_Notifications.Notifications_Header.mvc$model", "UBTConnect.App_Notifications.NotificationsList.mvc$model", "UBTConnect.model$UI_UpdateItem_BreakpointList", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_Updates_DateRangeRec"], function(OutSystems, UBTConnectModel, Connect2_Notification_CSModel, UBTConnect_App_Notifications_Notifications_Header_mvcModel, UBTConnect_App_Notifications_NotificationsList_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Breakpoints", "breakpointsIn", "Breakpoints", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItem_BreakpointList());
                }, false, UBTConnectModel.UI_UpdateItem_BreakpointList),
                this.attr("_breakpointsInDataFetchStatus", "_breakpointsInDataFetchStatus", "_breakpointsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("UI_NotificationItemList", "uI_NotificationItemListIn", "UI_NotificationItemList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.MessageListItemList());
                }, false, UBTConnectModel.MessageListItemList),
                this.attr("_uI_NotificationItemListInDataFetchStatus", "_uI_NotificationItemListInDataFetchStatus", "_uI_NotificationItemListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnect_App_Notifications_Notifications_Header_mvcModel.hasValidationWidgets || UBTConnect_App_Notifications_NotificationsList_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("Breakpoints" in inputs) {
                this.variables.breakpointsIn = inputs.Breakpoints;
                if ("_breakpointsInDataFetchStatus" in inputs) {
                    this.variables._breakpointsInDataFetchStatus = inputs._breakpointsInDataFetchStatus;
                }

            }

            if ("IsLoading" in inputs) {
                this.variables.isLoadingIn = inputs.IsLoading;
                if ("_isLoadingInDataFetchStatus" in inputs) {
                    this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
                }

            }

            if ("UI_NotificationItemList" in inputs) {
                this.variables.uI_NotificationItemListIn = inputs.UI_NotificationItemList;
                if ("_uI_NotificationItemListInDataFetchStatus" in inputs) {
                    this.variables._uI_NotificationItemListInDataFetchStatus = inputs._uI_NotificationItemListInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Notifications.NotificationsListBreakpoints");
});
define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_Notification_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$model", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Notifications.Notifications_Header.mvc$view", "UBTConnect.App_Notifications.NotificationsList.mvc$view", "UBTConnect.model$UI_UpdateItem_BreakpointList", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_Updates_DateRangeRec"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect2_Notification_CSModel, React, OSView, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_model, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnect_App_Notifications_Notifications_Header_mvc_view, UBTConnect_App_Notifications_NotificationsList_mvc_view) {
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
        View.displayName = "App_Notifications.NotificationsListBreakpoints";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Notifications_Notifications_Header_mvc_view, UBTConnect_App_Notifications_NotificationsList_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
                animateItems: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: /*Default*/ 0,
                source: model.variables.breakpointsIn,
                style: "list list-group",
                tag: "div",
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._breakpointsInDataFetchStatus),
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: [asPrimitiveValue(model.variables.uI_NotificationItemListIn), asPrimitiveValue(model.variables.breakpointsIn.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables._uI_NotificationItemListInDataFetchStatus), asPrimitiveValue(model.variables._breakpointsInDataFetchStatus), asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn)]
                        }, React.createElement(UBTConnect_App_Notifications_Notifications_Header_mvc_view, {
                            inputs: {
                                isLoading: model.variables.isLoadingIn,
                                _isLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus),
                                BadgeNumber: model.variables.breakpointsIn.getCurrent(callContext.iterationContext).badgeCountAttr,
                                _badgeNumberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._breakpointsInDataFetchStatus),
                                Title: model.variables.breakpointsIn.getCurrent(callContext.iterationContext).sectionNameAttr,
                                _titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._breakpointsInDataFetchStatus)
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
                                name: "Notifications_ListHeader",
                                alias: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(UBTConnect_App_Notifications_NotificationsList_mvc_view, {
                            inputs: {
                                IN_NotificationItemList: model.variables.uI_NotificationItemListIn,
                                _iN_NotificationItemListInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_NotificationItemListInDataFetchStatus),
                                IsLoading: model.variables.isLoadingIn,
                                _isLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus),
                                CurrentBreakpoint: model.variables.breakpointsIn.getCurrent(callContext.iterationContext),
                                _currentBreakpointInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._breakpointsInDataFetchStatus)
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
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))];
                    }, callContext, idService, "1")
                },
                _dependencies: [asPrimitiveValue(model.variables.uI_NotificationItemListIn), asPrimitiveValue(model.variables._uI_NotificationItemListInDataFetchStatus), asPrimitiveValue(model.variables._breakpointsInDataFetchStatus), asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_Notification_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$debugger", "UBTConnect.model$UI_UpdateItem_BreakpointList", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_Updates_DateRangeRec"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect2_Notification_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_Debugger) {
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


        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg:C0dHS3xzkGhxAA9p12FDtg", "UBTConnect", "App_Notifications", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Go9468oEgUGmNITkfMlBGA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.Go9468oEgUGmNITkfMlBGA:pEug0ICOY+W7GiL5pAPFCA", "UBTConnect", "NotificationsListBreakpoints", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Go9468oEgUGmNITkfMlBGA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg", callContext.id);
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

define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "nZDkq44msEuXTZOa0vTOGQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.breakpointsIn;
            }
        },
        "HrGFF5mT1kC4mqekQczM5g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "EAboLgtTP0KGACdH_mZX6A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.uI_NotificationItemListIn;
            }
        },
        "_xLfKoxwDE2PH4xLBPioEg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Notifications_ListHeader"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});