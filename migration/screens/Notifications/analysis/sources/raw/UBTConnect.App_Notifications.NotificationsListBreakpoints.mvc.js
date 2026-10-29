define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_Notification_CS.model", "UBTConnect.App_Notifications.Notifications_Header.mvc$model", "UBTConnect.App_Notifications.NotificationsList.mvc$model", "UBTConnect.model$UI_UpdateItem_BreakpointList", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_Updates_DateRangeRec"], function (OutSystems, UBTConnectModel, Connect2_Notification_CSModel, UBTConnect_App_Notifications_Notifications_Header_mvcModel, UBTConnect_App_Notifications_NotificationsList_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Breakpoints", "breakpointsIn", "Breakpoints", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItem_BreakpointList());
}, false, UBTConnectModel.UI_UpdateItem_BreakpointList), 
this.attr("_breakpointsInDataFetchStatus", "_breakpointsInDataFetchStatus", "_breakpointsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("UI_NotificationItemList", "uI_NotificationItemListIn", "UI_NotificationItemList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.MessageListItemList());
}, false, UBTConnectModel.MessageListItemList), 
this.attr("_uI_NotificationItemListInDataFetchStatus", "_uI_NotificationItemListInDataFetchStatus", "_uI_NotificationItemListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = (UBTConnect_App_Notifications_Notifications_Header_mvcModel.hasValidationWidgets || UBTConnect_App_Notifications_NotificationsList_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Breakpoints" in inputs) {
this.variables.breakpointsIn = inputs.Breakpoints;
if("_breakpointsInDataFetchStatus" in inputs) {
this.variables._breakpointsInDataFetchStatus = inputs._breakpointsInDataFetchStatus;
}

}

if("IsLoading" in inputs) {
this.variables.isLoadingIn = inputs.IsLoading;
if("_isLoadingInDataFetchStatus" in inputs) {
this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
}

}

if("UI_NotificationItemList" in inputs) {
this.variables.uI_NotificationItemListIn = inputs.UI_NotificationItemList;
if("_uI_NotificationItemListInDataFetchStatus" in inputs) {
this.variables._uI_NotificationItemListInDataFetchStatus = inputs._uI_NotificationItemListInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Notifications.NotificationsListBreakpoints");
});
define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_Notification_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$model", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Notifications.Notifications_Header.mvc$view", "UBTConnect.App_Notifications.NotificationsList.mvc$view", "UBTConnect.model$UI_UpdateItem_BreakpointList", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_Updates_DateRangeRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_Notification_CSModel, React, OSView, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_model, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnect_App_Notifications_Notifications_Header_mvc_view, UBTConnect_App_Notifications_NotificationsList_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
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
            get: function () {
                return UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
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
content: new IteratorPlaceholderContent(function (idService, callContext) {
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
_handleError: function (ex) {
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
_handleError: function (ex) {
controller.handleError(ex);
},
notificationDetail$Action: function (messageInstanceIdIn, isReadIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/NotificationsList NotificationDetail");
controller.notificationDetail$Action(messageInstanceIdIn, isReadIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
updateReadCount$Action: function (addToCountIn, breakpointIn, messageInstanceIdIn, isDeleteIn, isReadIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/NotificationsList UpdateReadCount");
return controller.handler_UpdateReadCount$Action(addToCountIn, breakpointIn, messageInstanceIdIn, isDeleteIn, isReadIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
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
define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_Notification_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$debugger", "UBTConnect.model$UI_UpdateItem_BreakpointList", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_Updates_DateRangeRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_Notification_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
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
Controller.prototype._handler_UpdateReadCount$Action = function (addToCountIn, breakpointIn, messageInstanceIdIn, isDeleteIn, isReadIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_UpdateReadCount");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationsListBreakpoints.Handler_UpdateReadCount$vars"))());
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
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6HYoI4rZFESXnX3aY4vGNQ", callContext.id);
// Execute Action: ListIndexOf2
listIndexOf2Var.value = OS.SystemActions.listIndexOf(model.variables.breakpointsIn, function (p) {
return (OS.BuiltinFunctions.identifierToText(p.sectionNameAttr) === vars.value.breakpointInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XK8Ka03S50KoJmq+8gNQKQ", callContext.id);
// Execute Action: ListFilter2
listFilter2Var.value = OS.SystemActions.listFilter(model.variables.breakpointsIn, function (p) {
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
listFilterVar.value = OS.SystemActions.listFilter(model.variables.uI_NotificationItemListIn, function (p) {
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
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.uI_NotificationItemListIn, function (p) {
return p.idAttr.equals(vars.value.messageInstanceIdInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4rmLGryFhkW29d_Uu7x55w", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.uI_NotificationItemListIn, listIndexOfVar.value.positionOut, callContext);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jrUAXShKLkOkiyk5MeKETA", callContext.id) && !(vars.value.isDeleteInLocal))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dFwNXJj25UifmKQ+ymjB7w", callContext.id);
// Execute Action: ListInsert
OS.SystemActions.listInsert(model.variables.uI_NotificationItemListIn, vars.value.local_MessageListItemVar, listIndexOfVar.value.positionOut, callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wAJfgyxosUq7VCbfSxqC2Q", callContext.id);
// Trigger Event: UpdateReadCount
return controller.updateReadCount$Action(vars.value.addToCountInLocal, vars.value.isDeleteInLocal, vars.value.isReadInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:41KpADuOYE6L1xr25f6gJA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xTdFi8UJq06tAxWl44IOGA", callContext.id);
return res;

}).catch(function (ex) {
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
defaultValue: function () {
return false;
}
}, {
name: "Breakpoint",
attrName: "breakpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MessageInstanceId",
attrName: "messageInstanceIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "IsDelete",
attrName: "isDeleteInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsRead",
attrName: "isReadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Local_MessageListItem",
attrName: "local_MessageListItemVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_Notification_CSModel.MessageListItemRec();
},
complexType: Connect2_Notification_CSModel.MessageListItemRec
}, {
name: "Local_Breakpoint",
attrName: "local_BreakpointVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.UI_UpdateItem_BreakpointRec();
},
complexType: UBTConnectModel.UI_UpdateItem_BreakpointRec
}]);

Controller.prototype.handler_UpdateReadCount$Action = function (addToCountIn, breakpointIn, messageInstanceIdIn, isDeleteIn, isReadIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_UpdateReadCount$Action, callContext, addToCountIn, breakpointIn, messageInstanceIdIn, isDeleteIn, isReadIn);

};
Controller.prototype.updateReadCount$Action = function () {
return Promise.resolve();
};
Controller.prototype.notificationDetail$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg:sMKFKooX6A1nm6D_Lsn4Wg", "UBTConnect", "App_Notifications", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Go9468oEgUGmNITkfMlBGA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.Go9468oEgUGmNITkfMlBGA:I0tHci0+JmE1rPbcPpgyew", "UBTConnect", "NotificationsListBreakpoints", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Go9468oEgUGmNITkfMlBGA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"FMeUp9zcSkGOOTef7aqVXg": {
getter: function (varBag, idService) {
return varBag.vars.value.local_MessageListItemVar;
}
},
"wywoBd_KWkSzxOLwuUzTQA": {
getter: function (varBag, idService) {
return varBag.vars.value.local_BreakpointVar;
}
},
"D4BmVNOXikWXfKnOWlNSNg": {
getter: function (varBag, idService) {
return varBag.vars.value.addToCountInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gFvzpBLa40ycAMfrJ94ceA": {
getter: function (varBag, idService) {
return varBag.vars.value.breakpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"B90Fuo1gvUW+Yo4Mt3v4Tw": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInstanceIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"GEyxmrzc6EyO7tGT8Xoepw": {
getter: function (varBag, idService) {
return varBag.vars.value.isDeleteInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rESsNLwee0axhmmanrIh3w": {
getter: function (varBag, idService) {
return varBag.vars.value.isReadInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6HYoI4rZFESXnX3aY4vGNQ": {
getter: function (varBag, idService) {
return varBag.listIndexOf2Var.value;
}
},
"XK8Ka03S50KoJmq+8gNQKQ": {
getter: function (varBag, idService) {
return varBag.listFilter2Var.value;
}
},
"n6F0o0xRVUKtBhbtVnM4Rw": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"aHy2qPkIIkaDQxj9tveKMQ": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"nZDkq44msEuXTZOa0vTOGQ": {
getter: function (varBag, idService) {
return varBag.model.variables.breakpointsIn;
}
},
"HrGFF5mT1kC4mqekQczM5g": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"EAboLgtTP0KGACdH_mZX6A": {
getter: function (varBag, idService) {
return varBag.model.variables.uI_NotificationItemListIn;
}
},
"_xLfKoxwDE2PH4xLBPioEg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Notifications_ListHeader"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
