define("UBTConnect.App_Common.controller", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBT_AppManager.controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.controller$debugger", "UBTConnect.controller$ShowCommunicationExceptionMessage", "UBTConnect.controller$ShowExceptionMessage", "UBT_AppManager.controller$AppManager_SetAppCallback_CurrentLocation", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBTConnectModel, UBTConnectController, UBT_AppManagerController, UBTConnectClientVariables, UBTConnect_App_Common_Controller_debugger) {
var OS = OutSystems.Internal;
var _flow_UBTConnect_App_CommonController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
Controller.prototype.handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var bubbleCommunicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.allExceptionsVar = allExceptionsVar;
varBag.bubbleCommunicationExceptionVar = bubbleCommunicationExceptionVar;
varBag.communicationExceptionVar = communicationExceptionVar;
varBag.securityExceptionVar = securityExceptionVar;
OS.Logger.trace("App_Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
if(OS.ErrorHandling.ignoreError(ex, callContext)) {
return OS.ErrorHandling.IGNORED_ERROR_RESULT;
}

return OS.Flow.tryCatchFinally(function () {
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA.#FlowExceptionHandler:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/FlowExceptionHandler:8mQ+H9Oi0VUKkzVUaayrPQ", "UBTConnect", "OnException", "NRFlows.FlowExceptionHandlingFlow", callContext.id, varBag);
OS.Logger.trace("App_Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: BubbleCommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "UBTConnect.BubbleCommunicationException")) {
OS.Logger.error(null, ex);
bubbleCommunicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Wx46V9yj3EujF8U9WjafbA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sUhGbbrxCkq+_tgRaj89GQ", callContext.id);
// Execute Action: ShowCommunicationExceptionMessage2
UBTConnectController.default.showCommunicationExceptionMessage$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IjITXv3CSkGaRZ3LVF7bkg", callContext.id);
return OS.Flow.returnAsync();

});
}

// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DK3LlrvSEUWZyl7AA5e8Sw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NsLlg_pbikmcSNUiNCLQ9A", callContext.id);
// Execute Action: ShowCommunicationExceptionMessage
UBTConnectController.default.showCommunicationExceptionMessage$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bCgcB6o6x0iCwomfyv1kvQ", callContext.id);
return OS.Flow.returnAsync();

});
}

// Handle Error: SecurityException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jvzr2I3xGki_TxPEUyU3gw", callContext.id);
// Has User Id?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LYwo+iwL6EGQCSbhalO9GQ", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8h9yhXYQ4E6IG5or89S2lQ", callContext.id);
// Execute Action: ShowExceptionMessage2
return UBTConnectController.default.showExceptionMessage$Action(securityExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IN3GPbUgYUi31IVXjdBDLw", callContext.id);
return OS.Flow.returnAsync();

});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DMoM9dBfcEyu8EKH4HUDqw", callContext.id);
// Execute Action: AppManager_SetAppCallback_CurrentLocation
UBT_AppManagerController.default.appManager_SetAppCallback_CurrentLocation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7YVKHJBp+0+StJdBPzZy0A", callContext.id);
// Destination: /UBTConnect/Login
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Login", {
In_IsFromInvalidPermissions: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JQXMLU7l8EOUtInh5UKA2w", callContext.id);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:agZvotoLwEKnKM44eDeEPw", callContext.id) && ((OS.BuiltinFunctions.index(allExceptionsVar.value.exceptionMessageAttr, "NoteCommunicationError", 0, false, false)) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nan+oS3Cj0SL6Aw7SyzUWw", callContext.id);
// Execute Action: ShowCommunicationExceptionMessage3
UBTConnectController.default.showCommunicationExceptionMessage$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ye3GapYLrEa8aUKgi8WTXA", callContext.id);
return OS.Flow.returnAsync();

} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IHOV8mH0yk6KPCv5Md6EIw", callContext.id);
// Execute Action: ShowExceptionMessage
return UBTConnectController.default.showExceptionMessage$Action(allExceptionsVar.value.exceptionMessageAttr, false, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fXSWSf1Tr0GIlmZrafZseQ", callContext.id);
return OS.Flow.returnAsync();

});
}

});
});
}

throw ex;
}, function (unhandledEx) {
OS.Logger.trace("App_Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
if(!(OS.ErrorHandling.ignoreError(unhandledEx, callContext))) {
OS.ErrorHandling.handleError(unhandledEx, callContext);
OutSystemsDebugger.handleException(unhandledEx, callContext.id);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;

}

OutSystemsDebugger.handleException(unhandledEx, callContext.id);
return OS.ErrorHandling.IGNORED_ERROR_RESULT;

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA.#FlowExceptionHandler", callContext.id);
});


};
return Controller;
})(OS.Controller.BaseController);
_flow_UBTConnect_App_CommonController.default = new Controller();
});

define("UBTConnect.App_Common.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"JQXMLU7l8EOUtInh5UKA2w": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"Wx46V9yj3EujF8U9WjafbA": {
getter: function (varBag, idService) {
return varBag.bubbleCommunicationExceptionVar.value;
}
},
"DK3LlrvSEUWZyl7AA5e8Sw": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"Jvzr2I3xGki_TxPEUyU3gw": {
getter: function (varBag, idService) {
return varBag.securityExceptionVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
