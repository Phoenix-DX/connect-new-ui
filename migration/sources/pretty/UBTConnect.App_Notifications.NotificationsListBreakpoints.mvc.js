define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_Notification_CS.model", "UBTConnect.controller", "UBTConnect.App_Notifications.Notifications_Header.mvc$model", "UBTConnect.App_Notifications.NotificationsList.mvc$model", "UBTConnect.model$UI_UpdateItem_BreakpointList", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_Updates_DateRangeRec", "UBTConnect.controller$Directory_Updates_GetListBreakpoint"], function(OutSystems, UBTConnectModel, Connect2_Notification_CSModel, UBTConnectController, UBTConnect_App_Notifications_Notifications_Header_mvcModel, UBTConnect_App_Notifications_NotificationsList_mvcModel) {
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
                }, false),
                this.attr("CurrentBreakpoint", "currentBreakpointIn", "CurrentBreakpoint", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItem_BreakpointRec());
                }, false, UBTConnectModel.UI_UpdateItem_BreakpointRec),
                this.attr("_currentBreakpointInDataFetchStatus", "_currentBreakpointInDataFetchStatus", "_currentBreakpointInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("TopElementId", "topElementIdIn", "TopElementId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_topElementIdInDataFetchStatus", "_topElementIdInDataFetchStatus", "_topElementIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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

            if ("CurrentBreakpoint" in inputs) {
                this.variables.currentBreakpointIn = inputs.CurrentBreakpoint;
                if ("_currentBreakpointInDataFetchStatus" in inputs) {
                    this.variables._currentBreakpointInDataFetchStatus = inputs._currentBreakpointInDataFetchStatus;
                }

            }

            if ("TopElementId" in inputs) {
                this.variables.topElementIdIn = inputs.TopElementId;
                if ("_topElementIdInDataFetchStatus" in inputs) {
                    this.variables._topElementIdInDataFetchStatus = inputs._topElementIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Notifications.NotificationsListBreakpoints");
});
define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_Notification_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$model", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Notifications.Notifications_Header.mvc$view", "UBTConnect.App_Notifications.NotificationsList.mvc$view", "UBTConnect.model$UI_UpdateItem_BreakpointList", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_Updates_DateRangeRec", "UBTConnect.controller$Directory_Updates_GetListBreakpoint"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect2_Notification_CSModel, React, OSView, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_model, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnect_App_Notifications_Notifications_Header_mvc_view, UBTConnect_App_Notifications_NotificationsList_mvc_view) {
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
                onScrollEnding: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/NotificationsListBreakpoints/List OnScrollEnding");
                            return controller.notificationsListBreakpoints_OnScrollEnding$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                    });;
                },
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
                                },
                                notificationDetail$Action: function(messageInstanceIdIn, isReadIn, messageTemplateIdIn, hardwareIdIn, sentAsIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/NotificationsList NotificationDetail");
                                        controller.notificationDetail$Action(messageInstanceIdIn, isReadIn, messageTemplateIdIn, hardwareIdIn, sentAsIn, controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                updateReadCount$Action: function(addToCountIn, breakpointIn, messageInstanceIdIn, isDeleteIn, isReadIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/NotificationsList UpdateReadCount");
                                            return controller.handler_UpdateReadCount$Action(addToCountIn, breakpointIn, messageInstanceIdIn, isDeleteIn, isReadIn, controller.callContext(eventHandlerContext));
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
define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_Notification_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$debugger", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$controller.SetupScrollListener.SetupScrollEndListenerJS", "UBTConnect.model$UI_UpdateItem_BreakpointList", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_Updates_DateRangeRec", "UBTConnect.controller$Directory_Updates_GetListBreakpoint"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect2_Notification_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_Debugger, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_controller_SetupScrollListener_SetupScrollEndListenerJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                handler_ScrollEnding_UpdateBreakpoint$Action: function(in_DateIn) {
                    in_DateIn = (in_DateIn === undefined) ? "" : in_DateIn;
                    return controller.executeActionInsideJSNode(controller._handler_ScrollEnding_UpdateBreakpoint$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Handler_ScrollEnding_UpdateBreakpoint");
                }
            };
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._handler_ScrollEnding_UpdateBreakpoint$Action = function(in_DateIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ScrollEnding_UpdateBreakpoint");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationsListBreakpoints.Handler_ScrollEnding_UpdateBreakpoint$vars"))());
            vars.value.in_DateInLocal = in_DateIn;
            var directory_Updates_GetListBreakpointVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.directory_Updates_GetListBreakpointVar = directory_Updates_GetListBreakpointVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MGzEXGZn6kKe+YEh4kF3qQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.Go9468oEgUGmNITkfMlBGA/ClientActions.MGzEXGZn6kKe+YEh4kF3qQ:FSVBcheeFp_n5gPcM5pOtQ", "UBTConnect", "Handler_ScrollEnding_UpdateBreakpoint", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BMQp5qHYyUGmVJgxyZYU7A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ovSN6JtaH0KkoEujN_luXw", callContext.id);
                // Execute Action: Directory_Updates_GetListBreakpoint
                directory_Updates_GetListBreakpointVar.value = UBTConnectController.default.directory_Updates_GetListBreakpoint$Action(model.variables.breakpointsIn, OS.BuiltinFunctions.textToDate(vars.value.in_DateInLocal), OS.BuiltinFunctions.currDate(), false, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bagRVNmwd0CRyPmgqe6iKg", callContext.id);
                // CurrentBreakpoint = Directory_Updates_GetListBreakpoint.Out_ListBreakpoint
                model.variables.currentBreakpointIn = directory_Updates_GetListBreakpointVar.value.out_ListBreakpointOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6APbPdH0VEqgakhDs7AiBw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MGzEXGZn6kKe+YEh4kF3qQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationsListBreakpoints.Handler_ScrollEnding_UpdateBreakpoint$vars", [{
            name: "In_Date",
            attrName: "in_DateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_UpdateReadCount$Action = function(addToCountIn, breakpointIn, messageInstanceIdIn, isDeleteIn, isReadIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_UpdateReadCount");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationsListBreakpoints.Handler_UpdateReadCount$vars"))());
            vars.value.addToCountInLocal = addToCountIn;
            vars.value.breakpointInLocal = breakpointIn;
            vars.value.messageInstanceIdInLocal = messageInstanceIdIn;
            vars.value.isDeleteInLocal = isDeleteIn;
            vars.value.isReadInLocal = isReadIn;
            var listIndexOf2Var = new OS.DataTypes.VariableHolder();
            var listFilter2Var = new OS.DataTypes.VariableHolder();
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            var listFilterVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOf2Var = listIndexOf2Var;
            varBag.listFilter2Var = listFilter2Var;
            varBag.listIndexOfVar = listIndexOfVar;
            varBag.listFilterVar = listFilterVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xTdFi8UJq06tAxWl44IOGA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.Go9468oEgUGmNITkfMlBGA/ClientActions.xTdFi8UJq06tAxWl44IOGA:a6KLsEE8POD1anBDoniKgg", "UBTConnect", "Handler_UpdateReadCount", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1QnA1suVSUOwQySdgB3+sA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6HYoI4rZFESXnX3aY4vGNQ", callContext.id);
                // Execute Action: ListIndexOf2
                listIndexOf2Var.value = OS.SystemActions.listIndexOf(model.variables.breakpointsIn, function(p) {
                    return (OS.BuiltinFunctions.identifierToText(p.sectionNameAttr) === vars.value.breakpointInLocal);
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XK8Ka03S50KoJmq+8gNQKQ", callContext.id);
                // Execute Action: ListFilter2
                listFilter2Var.value = OS.SystemActions.listFilter(model.variables.breakpointsIn, function(p) {
                    return (OS.BuiltinFunctions.identifierToText(p.sectionNameAttr) === vars.value.breakpointInLocal);
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CkRGqKhwBEuTkSXLxPtDGw", callContext.id);
                // Execute Action: ListRemove2
                OS.SystemActions.listRemove(model.variables.breakpointsIn, listIndexOf2Var.value.positionOut, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oO3hbe8Y1UaqhMXC7cff1Q", callContext.id);
                // Local_Breakpoint = ListFilter2.FilteredList.Current
                vars.value.local_BreakpointVar = listFilter2Var.value.filteredListOut.getCurrent(callContext.iterationContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zurMR7oJd0yZUwHmc2Mm0A", callContext.id);
                // Local_Breakpoint.BadgeCount = If
                vars.value.local_BreakpointVar.badgeCountAttr = ((vars.value.addToCountInLocal) ? ((vars.value.local_BreakpointVar.badgeCountAttr + 1)) : ((vars.value.local_BreakpointVar.badgeCountAttr - 1)));
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZxxozExtpESuK+PMbGFHPQ", callContext.id);
                // Execute Action: ListInsert2
                OS.SystemActions.listInsert(model.variables.breakpointsIn, vars.value.local_BreakpointVar, listIndexOf2Var.value.positionOut, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aHy2qPkIIkaDQxj9tveKMQ", callContext.id);
                // Execute Action: ListFilter
                listFilterVar.value = OS.SystemActions.listFilter(model.variables.uI_NotificationItemListIn, function(p) {
                    return p.idAttr.equals(vars.value.messageInstanceIdInLocal);
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:P02bZVU55kC+4QjaQVKzHA", callContext.id);
                // Local_MessageListItem = ListFilter.FilteredList.Current
                vars.value.local_MessageListItemVar = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G5jd2Q+M3Ei_U6fqoNpa3g", callContext.id);
                // Local_MessageListItem.IsRead = notAddToCount
                vars.value.local_MessageListItemVar.isReadAttr = !(vars.value.addToCountInLocal);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n6F0o0xRVUKtBhbtVnM4Rw", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.uI_NotificationItemListIn, function(p) {
                    return p.idAttr.equals(vars.value.messageInstanceIdInLocal);
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4rmLGryFhkW29d_Uu7x55w", callContext.id);
                // Execute Action: ListRemove
                OS.SystemActions.listRemove(model.variables.uI_NotificationItemListIn, listIndexOfVar.value.positionOut, callContext);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jrUAXShKLkOkiyk5MeKETA", callContext.id) && !(vars.value.isDeleteInLocal))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dFwNXJj25UifmKQ+ymjB7w", callContext.id);
                    // Execute Action: ListInsert
                    OS.SystemActions.listInsert(model.variables.uI_NotificationItemListIn, vars.value.local_MessageListItemVar, listIndexOfVar.value.positionOut, callContext);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wAJfgyxosUq7VCbfSxqC2Q", callContext.id);
                // Trigger Event: UpdateReadCount
                return controller.updateReadCount$Action(vars.value.addToCountInLocal, vars.value.isDeleteInLocal, vars.value.isReadInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:41KpADuOYE6L1xr25f6gJA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xTdFi8UJq06tAxWl44IOGA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xTdFi8UJq06tAxWl44IOGA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationsListBreakpoints.Handler_UpdateReadCount$vars", [{
            name: "AddToCount",
            attrName: "addToCountInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "Breakpoint",
            attrName: "breakpointInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "MessageInstanceId",
            attrName: "messageInstanceIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "IsDelete",
            attrName: "isDeleteInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "IsRead",
            attrName: "isReadInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "Local_MessageListItem",
            attrName: "local_MessageListItemVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_Notification_CSModel.MessageListItemRec();
            },
            complexType: Connect2_Notification_CSModel.MessageListItemRec
        }, {
            name: "Local_Breakpoint",
            attrName: "local_BreakpointVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.UI_UpdateItem_BreakpointRec();
            },
            complexType: UBTConnectModel.UI_UpdateItem_BreakpointRec
        }]);
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xLXPloQWD067w+uCBbi1+A:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.Go9468oEgUGmNITkfMlBGA/ClientActions.xLXPloQWD067w+uCBbi1+A:SZubfCd5w3sTjODFqCeu+Q", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jzCJYScFDEGTD6PolJUK+A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6r6WmLP_OkSGVAjEoeyw_A", callContext.id);
                // Execute Action: SetupScrollListener
                controller._setupScrollListener$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Hl4H3T64QUu0WUUf9sKyPw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xLXPloQWD067w+uCBbi1+A", callContext.id);
            }

        };
        Controller.prototype._setupScrollListener$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetupScrollListener");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:P_v2oOjuXUGqtiLEBusxTA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.Go9468oEgUGmNITkfMlBGA/ClientActions.P_v2oOjuXUGqtiLEBusxTA:RMTvlKSRi+31Qnuupkfojw", "UBTConnect", "SetupScrollListener", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B7vaYLWvJEid5t_TeQI4MQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NomrPE_w_Eij12JcxlApqw", callContext.id);
                controller.safeExecuteJSNode(UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_controller_SetupScrollListener_SetupScrollEndListenerJS, "SetupScrollEndListener", "SetupScrollListener", {
                    In_TopElementId: OS.DataConversion.JSNodeParamConverter.to(model.variables.topElementIdIn, OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {
                    Handler_ScrollEnding_UpdateBreakpoint: controller.clientActionProxies.handler_ScrollEnding_UpdateBreakpoint$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GSV4pMV8a0qPZ8Wx9+7jvw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:P_v2oOjuXUGqtiLEBusxTA", callContext.id);
            }

        };
        Controller.prototype._notificationsListBreakpoints_OnScrollEnding$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("NotificationsListBreakpoints_OnScrollEnding");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:XCUA4uUPsk6cDD92zuHUvg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.Go9468oEgUGmNITkfMlBGA/ClientActions.XCUA4uUPsk6cDD92zuHUvg:jw2E1NRVCVhZ0CKzDR7X8w", "UBTConnect", "NotificationsListBreakpoints_OnScrollEnding", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nF0A94zCoUCC8uS52nbDLw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X91qCNHFZkml+Zv+tAfioA", callContext.id);
                // Trigger Event: OnLoadMore
                return controller.onLoadMore$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aV4cj7QsBUOWcmWAKJerbg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:XCUA4uUPsk6cDD92zuHUvg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:XCUA4uUPsk6cDD92zuHUvg", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.handler_ScrollEnding_UpdateBreakpoint$Action = function(in_DateIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ScrollEnding_UpdateBreakpoint$Action, callContext, in_DateIn);

        };
        Controller.prototype.handler_UpdateReadCount$Action = function(addToCountIn, breakpointIn, messageInstanceIdIn, isDeleteIn, isReadIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_UpdateReadCount$Action, callContext, addToCountIn, breakpointIn, messageInstanceIdIn, isDeleteIn, isReadIn);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.setupScrollListener$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setupScrollListener$Action, callContext);

        };
        Controller.prototype.notificationsListBreakpoints_OnScrollEnding$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._notificationsListBreakpoints_OnScrollEnding$Action, callContext);

        };
        Controller.prototype.updateReadCount$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onLoadMore$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.notificationDetail$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg:_vq0gFXuOpZKZ4Em4vyllw", "UBTConnect", "App_Notifications", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Go9468oEgUGmNITkfMlBGA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.Go9468oEgUGmNITkfMlBGA:GoLiLyTPKfGIITh+bSb9UQ", "UBTConnect", "NotificationsListBreakpoints", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Go9468oEgUGmNITkfMlBGA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/NotificationsListBreakpoints On Ready");
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
define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$controller.SetupScrollListener.SetupScrollEndListenerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        function setupScrollEndCorrection(scrollContainerSelector, stickyHeaderId, listItemSelector) {
            if (typeof window._stickyDebug === 'undefined') {
                window._stickyDebug = false;
            }

            const scrollContainer = document.querySelector(scrollContainerSelector);
            const stickyHeaderEl = document.getElementById(stickyHeaderId);

            if (!scrollContainer || !stickyHeaderEl) {
                console.warn('Missing element(s):', {
                    scrollContainer,
                    stickyHeaderEl
                });
                return;
            }

            function resolveCurrentDate(retriesLeft = 3) {
                const headerRect = stickyHeaderEl.getBoundingClientRect();
                const boundaryY = headerRect.bottom; // the line we're checking against

                // grab all currently rendered list items
                const allItems = [...document.querySelectorAll(listItemSelector)];

                // find the item whose bounds straddle the boundary line
                // i.e. top is above (or at) the line, and bottom is below (or at) the line
                let currentItem = null;
                for (const item of allItems) {
                    const rect = item.getBoundingClientRect();
                    if (rect.top <= boundaryY && rect.bottom >= boundaryY) {
                        currentItem = item;
                        break; // there should only be one true match at a time
                    }
                }

                if (!currentItem) {
                    // virtualized list may not have committed the correct render window yet —
                    // retry on the next frame(s) instead of giving up immediately
                    if (retriesLeft > 0) {
                        if (window._stickyDebug) {
                            console.warn(`No list item currently intersects the sticky header boundary — retrying (${retriesLeft} left)`);
                        }
                        requestAnimationFrame(() => resolveCurrentDate(retriesLeft - 1));
                    } else {
                        if (window._stickyDebug) {
                            console.warn('No list item currently intersects the sticky header boundary after retries — giving up.');
                        }
                    }
                    return;
                }

                const plusDate = currentItem.getAttribute('data-plus-date');

                if (window._stickyDebug) {
                    console.log('%c SCROLLEND CORRECTION', 'color: white; background: darkorange; padding: 2px 6px; border-radius: 3px;');
                    console.log('Resolved item:', currentItem, '| data-plus-date:', plusDate);
                }

                $actions.Handler_ScrollEnding_UpdateBreakpoint(plusDate);

                if (window._stickyDebug) {
                    console.log(plusDate);
                }
            }

            scrollContainer.addEventListener('scrollend', () => resolveCurrentDate(), {
                passive: true
            });
            resolveCurrentDate(); // run once on load to establish correct initial state

            return resolveCurrentDate;
        }

        window.setTimeout(() => setupScrollEndCorrection(
            '.active-screen.screen-container',
            $parameters.In_TopElementId,
            '.updates-list__list-item' // adjust to whatever the actual list item selector is
        ), 0);
    };
});

define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "ytY77nUPHUauoeBgwmJA7Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_DateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ovSN6JtaH0KkoEujN_luXw": {
            getter: function(varBag, idService) {
                return varBag.directory_Updates_GetListBreakpointVar.value;
            }
        },
        "FMeUp9zcSkGOOTef7aqVXg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.local_MessageListItemVar;
            }
        },
        "wywoBd_KWkSzxOLwuUzTQA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.local_BreakpointVar;
            }
        },
        "D4BmVNOXikWXfKnOWlNSNg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.addToCountInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "gFvzpBLa40ycAMfrJ94ceA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.breakpointInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "B90Fuo1gvUW+Yo4Mt3v4Tw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.messageInstanceIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "GEyxmrzc6EyO7tGT8Xoepw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isDeleteInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "rESsNLwee0axhmmanrIh3w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isReadInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "6HYoI4rZFESXnX3aY4vGNQ": {
            getter: function(varBag, idService) {
                return varBag.listIndexOf2Var.value;
            }
        },
        "XK8Ka03S50KoJmq+8gNQKQ": {
            getter: function(varBag, idService) {
                return varBag.listFilter2Var.value;
            }
        },
        "n6F0o0xRVUKtBhbtVnM4Rw": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "aHy2qPkIIkaDQxj9tveKMQ": {
            getter: function(varBag, idService) {
                return varBag.listFilterVar.value;
            }
        },
        "NomrPE_w_Eij12JcxlApqw": {
            getter: function(varBag, idService) {
                return varBag.setupScrollEndListenerJSResult.value;
            }
        },
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
        "Iqi5XjiueEWY3i4agaOQiQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentBreakpointIn;
            }
        },
        "75lj0FV4wkmgWvielGaaNA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.topElementIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
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