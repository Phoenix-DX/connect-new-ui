define("NetworkDetection.controller$CheckNetworkCommunication", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.controller$CheckNetworkCommunication.NetworkStateJS", "NetworkDetection.clientVariables"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetection_controller_CheckNetworkCommunication_NetworkStateJS, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.checkNetworkCommunication$Action = function (waitForResultsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.CheckNetworkCommunication$vars"))());
vars.value.waitForResultsInLocal = waitForResultsIn;
var networkStateJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.CheckNetworkCommunication$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.networkStateJSResult = networkStateJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:j0_hvgJFVkCzlqvxbYUoVw:/ClientActionFlows.j0_hvgJFVkCzlqvxbYUoVw:B4Fh2K39RzvZt5wEm1MN7Q", "NetworkDetection", "CheckNetworkCommunication", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:EfX0PPPz30a3ubyh+z+Xzg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:ozKaopOLBUWscDS96y9HXg", callContext.id);
return controller.safeExecuteAsyncJSNode(NetworkDetection_controller_CheckNetworkCommunication_NetworkStateJS, "NetworkState", "CheckNetworkCommunication", {
WaitForResults: OS.DataConversion.JSNodeParamConverter.to(vars.value.waitForResultsInLocal, OS.DataTypes.DataTypes.Boolean),
isOnline: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("NetworkDetection.CheckNetworkCommunication$networkStateJSResult"))();
jsNodeResult.isOnlineOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isOnline, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
networkStateJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:o8_lyukpr0yMDxH9LT6ocQ", callContext.id);
// isOnline = NetworkState.isOnline
outVars.value.isOnlineOut = networkStateJSResult.value.isOnlineOut;
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:JBcP6nim_kaNnOFFgXASPA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:j0_hvgJFVkCzlqvxbYUoVw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:j0_hvgJFVkCzlqvxbYUoVw", callContext.id);
throw ex;

});
};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.CheckNetworkCommunication$vars", [{
name: "WaitForResults",
attrName: "waitForResultsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.CheckNetworkCommunication$networkStateJSResult", [{
name: "isOnline",
attrName: "isOnlineOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.CheckNetworkCommunication$outVars", [{
name: "isOnline",
attrName: "isOnlineOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NetworkDetectionController.default.clientActionProxies.checkNetworkCommunication$Action = function (waitForResultsIn) {
waitForResultsIn = (waitForResultsIn === undefined) ? false : waitForResultsIn;
return controller.executeActionInsideJSNode(NetworkDetectionController.default.checkNetworkCommunication$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(waitForResultsIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
isOnline: OS.DataConversion.JSNodeParamConverter.to(actionResults.isOnlineOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("NetworkDetection.controller$CheckNetworkCommunication.NetworkStateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
networkState = function(){
    if ($parameters.WaitForResults && AbortSignal && AbortSignal.timeout) {
        return window.dx.Network.networkStateSync;
    } else {
        return window.dx.Network.networkState; 
    }
}

networkState()(' - Check Action').then((result) => {     
    $parameters.isOnline = result;
    $resolve()
}).catch(() => {    
    $parameters.isOnline = false;
    $resolve()
});

});
};
});

define("NetworkDetection.controller$DefineNetworkStateAsync", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.controller$DefineNetworkStateAsync.DefineStateAsyncJS", "NetworkDetection.clientVariables"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetection_controller_DefineNetworkStateAsync_DefineStateAsyncJS, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.defineNetworkStateAsync$Action = function (messageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.DefineNetworkStateAsync$vars"))());
vars.value.messageInLocal = messageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:3Eie1ASdUEGEOQaSgbMYyw:/ClientActionFlows.3Eie1ASdUEGEOQaSgbMYyw:ilfxiYoehDWjWFOm7OJ3wQ", "NetworkDetection", "DefineNetworkStateAsync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:RFlTNViY+k2xQL50LkTmlQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:q6sN58CAfU6J5frcnMdl_Q", callContext.id) && ((vars.value.messageInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:5Co4+192IUOf6aBKJqGcEA", callContext.id);
// Message = " - " + Message
vars.value.messageInLocal = (" - " + vars.value.messageInLocal);
}

OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:d3QQgVjegkypr8zzynEifA", callContext.id);
controller.safeExecuteJSNode(NetworkDetection_controller_DefineNetworkStateAsync_DefineStateAsyncJS, "DefineStateAsync", "DefineNetworkStateAsync", {
Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:YP8x2z4nWkKlGcAqR+IK9g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:3Eie1ASdUEGEOQaSgbMYyw", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.DefineNetworkStateAsync$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
NetworkDetectionController.default.clientActionProxies.defineNetworkStateAsync$Action = function (messageIn) {
messageIn = (messageIn === undefined) ? "" : messageIn;
return controller.executeActionInsideJSNode(NetworkDetectionController.default.defineNetworkStateAsync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NetworkDetection.controller$DefineNetworkStateAsync.DefineStateAsyncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
//Run async to avoid waiting in case we have a big logic on the events
window.dx.Network.networkState($parameters.Message);
};
});

define("NetworkDetection.controller$LogJSConsole", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.controller$LogJSConsole.JavaScript1JS", "NetworkDetection.clientVariables"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetection_controller_LogJSConsole_JavaScript1JS, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.logJSConsole$Action = function (messageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.LogJSConsole$vars"))());
vars.value.messageInLocal = messageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:fqQcsqiwGU+v1sRCwFPorg:/ClientActionFlows.fqQcsqiwGU+v1sRCwFPorg:NLQyex7kLgkJn0CFSIL9OQ", "NetworkDetection", "LogJSConsole", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:lMr6rGFtFESRzKPDrKFfqA", callContext.id);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:rJf12os4tEKHprgP7WzEJA", callContext.id);
controller.safeExecuteJSNode(NetworkDetection_controller_LogJSConsole_JavaScript1JS, "JavaScript1", "LogJSConsole", {
Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:493xbeOQAkymecRf3FNU5Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:fqQcsqiwGU+v1sRCwFPorg", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.LogJSConsole$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
NetworkDetectionController.default.clientActionProxies.logJSConsole$Action = function (messageIn) {
messageIn = (messageIn === undefined) ? "" : messageIn;
return controller.executeActionInsideJSNode(NetworkDetectionController.default.logJSConsole$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NetworkDetection.controller$LogJSConsole.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
console.log($parameters.Message);
};
});

define("NetworkDetection.controller$LogNetworkMessage", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.clientVariables", "NetworkDetection.controller$LogJSConsole"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.logNetworkMessage$Action = function (extraMessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.LogNetworkMessage$vars"))());
vars.value.extraMessageInLocal = extraMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:NjZt9siuFUy2W4QuuEFl+w:/ClientActionFlows.NjZt9siuFUy2W4QuuEFl+w:hCcYH4WIGGmqGtoOb2civw", "NetworkDetection", "LogNetworkMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:+qFhD_Q48U67uW6BgziJig", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:_yoWtKZBF06m8IlWpQsisg", callContext.id) && NetworkDetectionClientVariables.getNetworkDetection_VerboseMode())) {
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:HI2deGEOckSKNe0J21qLXQ", callContext.id);
// Execute Action: LogJSConsole2
NetworkDetectionController.default.logJSConsole$Action((("Client Variable: " + (NetworkDetectionClientVariables.getNetworkDetection_StatusIsOnline_IsPersistent() ? "True" : "False")) + ((((vars.value.extraMessageInLocal) !== (""))) ? ((" - Extra: " + vars.value.extraMessageInLocal)) : (""))), callContext);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:uhXgyd3Z7UCF4muRwdZKeA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:nDYA_VWDNUOgJKLBaVQ8SA", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:NjZt9siuFUy2W4QuuEFl+w", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.LogNetworkMessage$vars", [{
name: "ExtraMessage",
attrName: "extraMessageInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
NetworkDetectionController.default.clientActionProxies.logNetworkMessage$Action = function (extraMessageIn) {
extraMessageIn = (extraMessageIn === undefined) ? "" : extraMessageIn;
return controller.executeActionInsideJSNode(NetworkDetectionController.default.logNetworkMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(extraMessageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("NetworkDetection.controller$Network_PendingPing_Check", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.clientVariables"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.network_PendingPing_Check$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.Network_PendingPing_Check$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:UyMy5d2GWU+5OnWtRaJC3w:/ClientActionFlows.UyMy5d2GWU+5OnWtRaJC3w:pD5SZ+F7x3z06LcQrkdsRg", "NetworkDetection", "Network_PendingPing_Check", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:8KjfZuSXOkeHkcrimWzesA", callContext.id);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:hTbDCRPakE6l1G8Hvey7hQ", callContext.id);
// isPending = Offline_NetworkStatus_PendingPing_Check
outVars.value.isPendingOut = NetworkDetectionClientVariables.getOffline_NetworkStatus_PendingPing_Check();
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:Mb7aoVMGY0aKjKBoz3MuBg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:UyMy5d2GWU+5OnWtRaJC3w", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.Network_PendingPing_Check$outVars", [{
name: "isPending",
attrName: "isPendingOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NetworkDetectionController.default.clientActionProxies.network_PendingPing_Check$Action = function () {
return controller.executeActionInsideJSNode(NetworkDetectionController.default.network_PendingPing_Check$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
isPending: OS.DataConversion.JSNodeParamConverter.to(actionResults.isPendingOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("NetworkDetection.controller$Network_PendingPing_Resolve", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.controller$Network_PendingPing_Resolve.CallbackJS", "NetworkDetection.clientVariables"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetection_controller_Network_PendingPing_Resolve_CallbackJS, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.network_PendingPing_Resolve$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:Z1OhIo8cnkaD9DNdSlN4MA:/ClientActionFlows.Z1OhIo8cnkaD9DNdSlN4MA:tNXrWg+kWXSBYfCPthWh4A", "NetworkDetection", "Network_PendingPing_Resolve", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:_PgMKo+wzkmhcVd9ycNvfw", callContext.id);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:ROCShJ6PdkOHxWQUgj6ESA", callContext.id);
// Offline_NetworkStatus_PendingPing_Check = False
NetworkDetectionClientVariables.setOffline_NetworkStatus_PendingPing_Check(false);
if((OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:4sESvySpk0q8fSx0+SbKXQ", callContext.id) && ((NetworkDetectionClientVariables.getOffline_NetworkStatus_PendingPing_Message()) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:EPNxhcLzgkOKHnHd2b8_RA", callContext.id);
controller.safeExecuteJSNode(NetworkDetection_controller_Network_PendingPing_Resolve_CallbackJS, "Callback", "Network_PendingPing_Resolve", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:Ru_JnnEUyUO+UO64EZ_veg", callContext.id);
// Offline_NetworkStatus_PendingPing_Message = ""
NetworkDetectionClientVariables.setOffline_NetworkStatus_PendingPing_Message("");
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:6MchLk08sUi42EusG+4n1Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:6MchLk08sUi42EusG+4n1Q", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:Z1OhIo8cnkaD9DNdSlN4MA", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.clientActionProxies.network_PendingPing_Resolve$Action = function () {
return controller.executeActionInsideJSNode(NetworkDetectionController.default.network_PendingPing_Resolve$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NetworkDetection.controller$Network_PendingPing_Resolve.CallbackJS", [], function () {
return function ($actions, $roles, $public) {
if(window.dx && window.dx.Network && window.dx.Network.userpendingPingCallback) {
    window.dx.Network.userpendingPingCallback();
}
};
});

define("NetworkDetection.controller$Network_PendingPing_Set", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.clientVariables"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.network_PendingPing_Set$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:ee7JYwFXlEu2WnwPiwNAOQ:/ClientActionFlows.ee7JYwFXlEu2WnwPiwNAOQ:MZHFEG8NWJ_KiiHYKrGobA", "NetworkDetection", "Network_PendingPing_Set", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:kHCpY7iMck2iOcCr6SLTAA", callContext.id);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:pNrsqQDrHUm4vMAPG8TJuQ", callContext.id);
// Offline_NetworkStatus_PendingPing_Check = True
NetworkDetectionClientVariables.setOffline_NetworkStatus_PendingPing_Check(true);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:Z0zb8Ta6LUeIsopvpg7nZA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:ee7JYwFXlEu2WnwPiwNAOQ", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.clientActionProxies.network_PendingPing_Set$Action = function () {
return controller.executeActionInsideJSNode(NetworkDetectionController.default.network_PendingPing_Set$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("NetworkDetection.controller$Network_PendingPing_SetMessage", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.clientVariables"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.network_PendingPing_SetMessage$Action = function (pendingMessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.Network_PendingPing_SetMessage$vars"))());
vars.value.pendingMessageInLocal = pendingMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:newfZSru0UKtfn0uywBw9w:/ClientActionFlows.newfZSru0UKtfn0uywBw9w:5xkHvip8JH4dRA+Jv4DNrQ", "NetworkDetection", "Network_PendingPing_SetMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:hMrPtEXgUUWwBnxeCsaQeg", callContext.id);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:BmScSP0bfUaLbK25UzTxbQ", callContext.id);
// Offline_NetworkStatus_PendingPing_Message = PendingMessage
NetworkDetectionClientVariables.setOffline_NetworkStatus_PendingPing_Message(vars.value.pendingMessageInLocal);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:JUvM5c1M0U2Z4m0dMeThWg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:newfZSru0UKtfn0uywBw9w", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.Network_PendingPing_SetMessage$vars", [{
name: "PendingMessage",
attrName: "pendingMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
NetworkDetectionController.default.clientActionProxies.network_PendingPing_SetMessage$Action = function (pendingMessageIn) {
pendingMessageIn = (pendingMessageIn === undefined) ? "" : pendingMessageIn;
return controller.executeActionInsideJSNode(NetworkDetectionController.default.network_PendingPing_SetMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pendingMessageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("NetworkDetection.controller$NetworkDetection_Get_IsOnline", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.clientVariables"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.networkDetection_Get_IsOnline$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.NetworkDetection_Get_IsOnline$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:Nrgm50iXm0ClhTO5kX69RA:/ClientActionFlows.Nrgm50iXm0ClhTO5kX69RA:ljkLAMQzdhRyNvumXesARw", "NetworkDetection", "NetworkDetection_Get_IsOnline", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:dXzSe+oWn06QoJ2jX2N9Yg", callContext.id);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:lA99G_DwiUyh9+R_veU1qA", callContext.id);
// Value = NetworkDetection_StatusIsOnline_IsPersistent
outVars.value.valueOut = NetworkDetectionClientVariables.getNetworkDetection_StatusIsOnline_IsPersistent();
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:PUz6nGDP5UqQpQF3jo50eg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:Nrgm50iXm0ClhTO5kX69RA", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.NetworkDetection_Get_IsOnline$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NetworkDetectionController.default.clientActionProxies.networkDetection_Get_IsOnline$Action = function () {
return controller.executeActionInsideJSNode(NetworkDetectionController.default.networkDetection_Get_IsOnline$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataConversion.JSNodeParamConverter.to(actionResults.valueOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("NetworkDetection.controller$NetworkDetection_Get_UsingOfflineMode", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.clientVariables"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.networkDetection_Get_UsingOfflineMode$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.NetworkDetection_Get_UsingOfflineMode$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:dZF5MNGXKEa4zK3aVsccYQ:/ClientActionFlows.dZF5MNGXKEa4zK3aVsccYQ:YU9MfSN47eNA0jLyG8Z8PA", "NetworkDetection", "NetworkDetection_Get_UsingOfflineMode", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:Il1jXKcyzkSV+WTaBa5jPw", callContext.id);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:+C+TyT3DOU2JOKDZ_mdyIQ", callContext.id);
// Value = NetworkDetection_UsingOfflineMode
outVars.value.valueOut = NetworkDetectionClientVariables.getNetworkDetection_UsingOfflineMode();
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:FSVOUfYH+0Kng0N05bhqIA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:dZF5MNGXKEa4zK3aVsccYQ", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.NetworkDetection_Get_UsingOfflineMode$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NetworkDetectionController.default.clientActionProxies.networkDetection_Get_UsingOfflineMode$Action = function () {
return controller.executeActionInsideJSNode(NetworkDetectionController.default.networkDetection_Get_UsingOfflineMode$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataConversion.JSNodeParamConverter.to(actionResults.valueOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("NetworkDetection.controller$NetworkDetection_OnApplicationReady", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.controller$NetworkDetection_OnApplicationReady.NetworkDetection3JS", "NetworkDetection.clientVariables", "NetworkDetection.controller$Network_PendingPing_Set", "NetworkDetection.controller$LogNetworkMessage", "NetworkDetection.controller$OnNetworkOnline", "NetworkDetection.controller$OnNetworkOffline", "NetworkDetection.controller$Network_PendingPing_Resolve", "NetworkDetection.controller$DefineNetworkStateAsync"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetection_controller_NetworkDetection_OnApplicationReady_NetworkDetection3JS, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.networkDetection_OnApplicationReady$Action = function (frequencySecondsIn, pingTimeoutIn, onOnline_CallbackIn, onOffline_CallbackIn, onPendingPing_CallbackIn, enableVerboseModeIn, errorMessage_NoInternetIn, errorMessage_GenericErrorIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.NetworkDetection_OnApplicationReady$vars"))());
vars.value.frequencySecondsInLocal = frequencySecondsIn;
vars.value.pingTimeoutInLocal = pingTimeoutIn;
vars.value.onOnline_CallbackInLocal = onOnline_CallbackIn;
vars.value.onOffline_CallbackInLocal = onOffline_CallbackIn;
vars.value.onPendingPing_CallbackInLocal = onPendingPing_CallbackIn;
vars.value.enableVerboseModeInLocal = enableVerboseModeIn;
vars.value.errorMessage_NoInternetInLocal = errorMessage_NoInternetIn;
vars.value.errorMessage_GenericErrorInLocal = errorMessage_GenericErrorIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:HV+jQZg8f0+a5pkgumQB6g:/ClientActionFlows.HV+jQZg8f0+a5pkgumQB6g:8C62MshbAOUo7EqDJ_Q83w", "NetworkDetection", "NetworkDetection_OnApplicationReady", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:I0To2TfPUU6J7K94UUMCCQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:kcbKTz90rU+WVIaI6PYYlQ", callContext.id);
// NetworkDetection_VerboseMode = EnableVerboseMode
NetworkDetectionClientVariables.setNetworkDetection_VerboseMode(vars.value.enableVerboseModeInLocal);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:kcbKTz90rU+WVIaI6PYYlQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// NetworkDetection_ErrorMessage_NoInternet = ErrorMessage_NoInternet
NetworkDetectionClientVariables.setNetworkDetection_ErrorMessage_NoInternet(vars.value.errorMessage_NoInternetInLocal);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:kcbKTz90rU+WVIaI6PYYlQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// NetworkDetection_ErrorMessage_GenericError = ErrorMessage_GenericError
NetworkDetectionClientVariables.setNetworkDetection_ErrorMessage_GenericError(vars.value.errorMessage_GenericErrorInLocal);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:sMIr_Z1q1kKOGFRj0VYILQ", callContext.id);
controller.safeExecuteJSNode(NetworkDetection_controller_NetworkDetection_OnApplicationReady_NetworkDetection3JS, "NetworkDetection3", "NetworkDetection_OnApplicationReady", {
OnPendingPing_Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.onPendingPing_CallbackInLocal, OS.DataTypes.DataTypes.Object),
OnOnline_Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.onOnline_CallbackInLocal, OS.DataTypes.DataTypes.Object),
OnOffline_Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.onOffline_CallbackInLocal, OS.DataTypes.DataTypes.Object),
FrequencySeconds: OS.DataConversion.JSNodeParamConverter.to(vars.value.frequencySecondsInLocal, OS.DataTypes.DataTypes.Integer),
PingTimeout: OS.DataConversion.JSNodeParamConverter.to(vars.value.pingTimeoutInLocal, OS.DataTypes.DataTypes.Integer),
PingURL: OS.DataConversion.JSNodeParamConverter.to(OS.Navigation.VersionedURL.getVersionedUrl("status/network-ping.txt"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
Network_PendingPing_Set: NetworkDetectionController.default.getClientActionProxies(controller).network_PendingPing_Set$Action,
LogNetworkMessage: NetworkDetectionController.default.getClientActionProxies(controller).logNetworkMessage$Action,
OnNetworkOnline: NetworkDetectionController.default.getClientActionProxies(controller).onNetworkOnline$Action,
OnNetworkOffline: NetworkDetectionController.default.getClientActionProxies(controller).onNetworkOffline$Action,
Network_PendingPing_Resolve: NetworkDetectionController.default.getClientActionProxies(controller).network_PendingPing_Resolve$Action,
DefineNetworkStateAsync: NetworkDetectionController.default.getClientActionProxies(controller).defineNetworkStateAsync$Action
}, {});
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:+bUjU_VhiEG03izDhPH7Ag", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:HV+jQZg8f0+a5pkgumQB6g", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.NetworkDetection_OnApplicationReady$vars", [{
name: "FrequencySeconds",
attrName: "frequencySecondsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 30;
}
}, {
name: "PingTimeout",
attrName: "pingTimeoutInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 300000;
}
}, {
name: "OnOnline_Callback",
attrName: "onOnline_CallbackInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "OnOffline_Callback",
attrName: "onOffline_CallbackInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "OnPendingPing_Callback",
attrName: "onPendingPing_CallbackInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "EnableVerboseMode",
attrName: "enableVerboseModeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage_NoInternet",
attrName: "errorMessage_NoInternetInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "No internet connection. Please check your network settings and try again.";
}
}, {
name: "ErrorMessage_GenericError",
attrName: "errorMessage_GenericErrorInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "We’re sorry, but an unexpected error occurred while processing your request. Please try again later. If the problem persists, please contact your regional administrator.";
}
}]);
NetworkDetectionController.default.clientActionProxies.networkDetection_OnApplicationReady$Action = function (frequencySecondsIn, pingTimeoutIn, onOnline_CallbackIn, onOffline_CallbackIn, onPendingPing_CallbackIn, enableVerboseModeIn, errorMessage_NoInternetIn, errorMessage_GenericErrorIn) {
frequencySecondsIn = (frequencySecondsIn === undefined) ? 30 : frequencySecondsIn;
pingTimeoutIn = (pingTimeoutIn === undefined) ? 300000 : pingTimeoutIn;
onOnline_CallbackIn = (onOnline_CallbackIn === undefined) ? null : onOnline_CallbackIn;
onOffline_CallbackIn = (onOffline_CallbackIn === undefined) ? null : onOffline_CallbackIn;
onPendingPing_CallbackIn = (onPendingPing_CallbackIn === undefined) ? null : onPendingPing_CallbackIn;
enableVerboseModeIn = (enableVerboseModeIn === undefined) ? false : enableVerboseModeIn;
errorMessage_NoInternetIn = (errorMessage_NoInternetIn === undefined) ? "No internet connection. Please check your network settings and try again." : errorMessage_NoInternetIn;
errorMessage_GenericErrorIn = (errorMessage_GenericErrorIn === undefined) ? "We’re sorry, but an unexpected error occurred while processing your request. Please try again later. If the problem persists, please contact your regional administrator." : errorMessage_GenericErrorIn;
return controller.executeActionInsideJSNode(NetworkDetectionController.default.networkDetection_OnApplicationReady$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(frequencySecondsIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(pingTimeoutIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(onOnline_CallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(onOffline_CallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(onPendingPing_CallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(enableVerboseModeIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(errorMessage_NoInternetIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(errorMessage_GenericErrorIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NetworkDetection.controller$NetworkDetection_OnApplicationReady.NetworkDetection3JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
/*****************************************************
 *   UBT Network Detection – Final Merged Version
 *   - Image-based ping (non-blocking)
 *   - Shared ping promise (no races)
 *   - Safe XHR override
 *   - Stable online/offline transitions
 *****************************************************/

// Check if the component is already initialized
if (window.dx?.Network)
    return;

window.dx = window.dx || {};
window.dx.Network = window.dx.Network || {};

window.dx.Network.userOnlineCallback = $parameters.OnOnline_Callback;
window.dx.Network.userOfflineCallback = $parameters.OnOffline_Callback;
window.dx.Network.userpendingPingCallback = $parameters.OnPendingPing_Callback;

window.dx.Network.isOnline = null;

// Shared ping promise (null means no ping active)
let currentPingPromise = null;

/* -------------------------------------------------------------
   Native fetch ping (does NOT use OutSystems pipeline)
   Works with authenticated text files
-------------------------------------------------------------- */
function rawPing(url, timeoutMs) {
    return new Promise((resolve, reject) => {
        const controller = new AbortController();

        const timeout = setTimeout(() => controller.abort(), timeoutMs);

        fetch(url, {
            cache: "no-store",
            signal: controller.signal
        })
        .then(response => {
            clearTimeout(timeout);
            resolve({
                ok: response.ok,
                status: response.status,
                statusText: response.statusText
            });
        })
        .catch(err => {
            clearTimeout(timeout);
            reject({
                ok: false,
                reason: err.message || "network-error"
            });
        });
    });
}


/* -------------------------------------------------------------
   checkOnline() – shared promise logic + native fetch ping
-------------------------------------------------------------- */
window.dx.Network.checkOnline = function () {

    // If a ping is already running → return same promise
    if (currentPingPromise) return currentPingPromise;

    // Build cache-busted URL
    let localURL = $parameters.PingURL;
    localURL += (localURL.includes("?") ? "&" : "?") + "d=" + Date.now();

    const timeoutMs = $parameters.PingTimeout || 10000;

    $actions.Network_PendingPing_Set();
    
    currentPingPromise = rawPing(localURL, timeoutMs)
        .then(result => {
            return { ok: result.ok };
        })
        .catch(err => {
            return { ok: false, error: err };
        })
        .finally(() => {
            currentPingPromise = null;  // cleanup
        });

    return currentPingPromise;
};


/* -------------------------------------------------------------
   Helpers to update state
-------------------------------------------------------------- */
function definitelyOnline(message) {
    const wasOnline = window.dx.Network.isOnline;
    window.dx.Network.isOnline = true;

    if (message) $actions.LogNetworkMessage(message);

    if (wasOnline !== true) {
        $actions.OnNetworkOnline();
    }
}

function definitelyOffline(message) {
    const wasOnline = window.dx.Network.isOnline;
    window.dx.Network.isOnline = false;

    $actions.LogNetworkMessage(message);

    if (wasOnline !== false) {
        $actions.OnNetworkOffline();
    }
}

/* -------------------------------------------------------------
   networkState – ALWAYS returns true state (never stale)
-------------------------------------------------------------- */
window.dx.Network.networkState = function (message) {
    return window.dx.Network.checkOnline().then(result => {
        if (result.ok) {
            definitelyOnline("From networkState: " + message);
        } else {
            definitelyOffline("From networkState: " + message);
        }
        $actions.Network_PendingPing_Resolve();
        return window.dx.Network.isOnline;
    });
};

/* -------------------------------------------------------------
   networkStateSync – same as above (kept for backward compat)
-------------------------------------------------------------- */
window.dx.Network.networkStateSync = async function (message) {
    const result = await window.dx.Network.checkOnline();
    if (result.ok) {
        definitelyOnline("From networkStateSync: " + message);
    } else {
        definitelyOffline("From networkStateSync: " + message);
    }
    $actions.Network_PendingPing_Resolve();
    return window.dx.Network.isOnline;
};

/* -------------------------------------------------------------
   Browser native online/offline events
-------------------------------------------------------------- */
window.addEventListener("online", () =>
    definitelyOnline("Browser online event"));
window.addEventListener("offline", () =>
    definitelyOffline("Browser offline event"));

/* -------------------------------------------------------------
   Timer-based checks (safe, no overlap)
-------------------------------------------------------------- */
function detect() {
    const isVisible = document.visibilityState === "visible";

    if (isVisible) {
        window.dx.Network.checkOnline()
            .then(result => {
                if (result.ok) {
                    definitelyOnline("Timer check online");
                } else {
                    definitelyOffline("Timer check offline");
                }
            })
            .finally(() => detectNext());
    } else {
        // Some browsers throttle network activity when the application is on background,
        // Skip the ping, just reschedule
        detectNext();
    }
}

function detectNext() {
    const frequency = $parameters.FrequencySeconds;
    if (frequency > 0) {
        setTimeout(detect, frequency * 1000);
    }
}

if ($parameters.FrequencySeconds > 0) {
    detectNext();
}

/* -------------------------------------------------------------
   Trigger initial evaluation (async)
-------------------------------------------------------------- */
//Run async to avoid waiting in case we have a big logic on the events
$actions.DefineNetworkStateAsync("Initial");

// -------------------------------------------------------------
// OutSystems Request Runtime Override
// -------------------------------------------------------------
window.require(["OutSystems/ClientRuntime/Request"], function (Request) {

    const originalCreate = Request.createHttpRequest;

    Request.createHttpRequest = function (options) {
        const result = originalCreate.call(this, options);

        return result.then(request => {

            request.xhr.addEventListener("load", () => {
                definitelyOnline("XHR load");
            });

            request.xhr.addEventListener("error", () => {
                // Do NOT assume offline – validate with ping
                window.dx.Network.networkStateSync("XHR error");
            });

            request.xhr.addEventListener("timeout", () => {
                // Validate using true ping
                window.dx.Network.networkStateSync("XHR timeout");
            });

            request.xhr.addEventListener("abort", () => {
                // Validate using true ping
                window.dx.Network.networkStateSync("XHR abort");
            });

            return request;
        });
    };
});

};
});

define("NetworkDetection.controller$NetworkDetection_Set_UsingOfflineMode", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.clientVariables"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.networkDetection_Set_UsingOfflineMode$Action = function (valueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.NetworkDetection_Set_UsingOfflineMode$vars"))());
vars.value.valueInLocal = valueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:P6N+BnV6_k+0tBe3HwQ7CA:/ClientActionFlows.P6N+BnV6_k+0tBe3HwQ7CA:43g5Gj0RfXCuET7KcvsMMA", "NetworkDetection", "NetworkDetection_Set_UsingOfflineMode", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:Ot3xE1MDs0mz6+Vn__CIwA", callContext.id);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:tVMBR56tg0602AqxeQQq4w", callContext.id);
// NetworkDetection_UsingOfflineMode = Value
NetworkDetectionClientVariables.setNetworkDetection_UsingOfflineMode(vars.value.valueInLocal);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:7WRPn8OHaECSejwADNgReA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:P6N+BnV6_k+0tBe3HwQ7CA", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.NetworkDetection_Set_UsingOfflineMode$vars", [{
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NetworkDetectionController.default.clientActionProxies.networkDetection_Set_UsingOfflineMode$Action = function (valueIn) {
valueIn = (valueIn === undefined) ? false : valueIn;
return controller.executeActionInsideJSNode(NetworkDetectionController.default.networkDetection_Set_UsingOfflineMode$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("NetworkDetection.controller$NetworkDetection_ShowCommunicationExceptionMessage", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.clientVariables", "NetworkDetection.controller$LogNetworkMessage", "NetworkDetection.controller$NetworkDetection_Get_UsingOfflineMode"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.networkDetection_ShowCommunicationExceptionMessage$Action = function (ignoreMessageIn, overrideMessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NetworkDetection.NetworkDetection_ShowCommunicationExceptionMessage$vars"))());
vars.value.ignoreMessageInLocal = ignoreMessageIn;
vars.value.overrideMessageInLocal = overrideMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:IseFqzB90kiuadTSFU_YRA:/ClientActionFlows.IseFqzB90kiuadTSFU_YRA:fj_tKse9E8sJwRbd0XdTUw", "NetworkDetection", "NetworkDetection_ShowCommunicationExceptionMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:QtWtyfuabkmgYOnW9O2+Ew", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:8wL4nGqDYkut9NtdgVdoaQ", callContext.id) && (OutSystemsDebugger.handleFunctionCall(function () {
return NetworkDetectionController.default.networkDetection_Get_UsingOfflineMode$Action(callContext).valueOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id) || vars.value.ignoreMessageInLocal))) {
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:QNKCa3O1UkypaDDMyTKEGg", callContext.id);
// Execute Action: LogNetworkMessage
NetworkDetectionController.default.logNetworkMessage$Action(vars.value.exceptionMessageVar, callContext);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:LX+HPxzgYUex+_xSPPBRbg", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:du_u4cvQikW0KQ3VbvoXZA", callContext.id) && ((vars.value.overrideMessageInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:xt9Rx4Ef2EieF+79VCJP2Q", callContext.id);
// ExceptionMessage = OverrideMessage
vars.value.exceptionMessageVar = vars.value.overrideMessageInLocal;
} else {
if((OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:azIIiyyMs0GuhgAz3eqVMA", callContext.id) && NetworkDetectionClientVariables.getNetworkDetection_StatusIsOnline_IsPersistent())) {
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:BQD8lHj2jkKS_jlr7iFBPA", callContext.id);
// ExceptionMessage = NetworkDetection_ErrorMessage_GenericError
vars.value.exceptionMessageVar = NetworkDetectionClientVariables.getNetworkDetection_ErrorMessage_GenericError();
} else {
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:a2VfCFxXoEu4It56Z8cDuA", callContext.id);
// ExceptionMessage = NetworkDetection_ErrorMessage_NoInternet
vars.value.exceptionMessageVar = NetworkDetectionClientVariables.getNetworkDetection_ErrorMessage_NoInternet();
}

}

OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:TFP9MSF3E0uj83pDv8AShw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(vars.value.exceptionMessageVar, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:AhqWqyyQckyJOvB0jdPZ2A", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:IseFqzB90kiuadTSFU_YRA", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.constructor.registerVariableGroupType("NetworkDetection.NetworkDetection_ShowCommunicationExceptionMessage$vars", [{
name: "IgnoreMessage",
attrName: "ignoreMessageInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "OverrideMessage",
attrName: "overrideMessageInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExceptionMessage",
attrName: "exceptionMessageVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
NetworkDetectionController.default.clientActionProxies.networkDetection_ShowCommunicationExceptionMessage$Action = function (ignoreMessageIn, overrideMessageIn) {
ignoreMessageIn = (ignoreMessageIn === undefined) ? false : ignoreMessageIn;
overrideMessageIn = (overrideMessageIn === undefined) ? "" : overrideMessageIn;
return controller.executeActionInsideJSNode(NetworkDetectionController.default.networkDetection_ShowCommunicationExceptionMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(ignoreMessageIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(overrideMessageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("NetworkDetection.controller$OnNetworkOffline", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.controller$OnNetworkOffline.CallbackJS", "NetworkDetection.clientVariables", "NetworkDetection.controller$LogNetworkMessage"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetection_controller_OnNetworkOffline_CallbackJS, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.onNetworkOffline$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:M6McYritvE+dKyI3_ff6Ow:/ClientActionFlows.M6McYritvE+dKyI3_ff6Ow:S60Z3B+i0Wlae2XUTr3G2g", "NetworkDetection", "OnNetworkOffline", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:zGQfuyoqRECPUGtNC0xPdw", callContext.id);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:bC7I5DX0MUeVuvL1ZQlw8g", callContext.id);
// NetworkDetection_StatusIsOnline_IsPersistent = False
NetworkDetectionClientVariables.setNetworkDetection_StatusIsOnline_IsPersistent(false);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:cP9TT6cAN0qiBCa9U_CdZw", callContext.id);
// Execute Action: LogNetworkMessage
NetworkDetectionController.default.logNetworkMessage$Action("From OnNetworkOffline action", callContext);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:z0BZeXRE10OLLfebBsz4KA", callContext.id);
controller.safeExecuteJSNode(NetworkDetection_controller_OnNetworkOffline_CallbackJS, "Callback", "OnNetworkOffline", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:kmuV+aRZW0qm25F5ljrQTw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:M6McYritvE+dKyI3_ff6Ow", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.clientActionProxies.onNetworkOffline$Action = function () {
return controller.executeActionInsideJSNode(NetworkDetectionController.default.onNetworkOffline$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NetworkDetection.controller$OnNetworkOffline.CallbackJS", [], function () {
return function ($actions, $roles, $public) {
if(window.dx && window.dx.Network && window.dx.Network.userOfflineCallback) {
    window.dx.Network.userOfflineCallback();
}
};
});

define("NetworkDetection.controller$OnNetworkOnline", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller", "NetworkDetection.controller$OnNetworkOnline.CallbackJS", "NetworkDetection.clientVariables", "NetworkDetection.controller$LogNetworkMessage"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetectionController, NetworkDetection_controller_OnNetworkOnline_CallbackJS, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
NetworkDetectionController.default.onNetworkOnline$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("pZ9k0+LXG06YmN44ax8Stg:A6XtrOUPMkKOMxDopKdW5g:/ClientActionFlows.A6XtrOUPMkKOMxDopKdW5g:S5TPtAfjcE1vDnqL2ABPjw", "NetworkDetection", "OnNetworkOnline", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:O0Nyu69nBESPaVnGNU3v2g", callContext.id);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:j3aWStbXik2RmaRO17muCA", callContext.id);
// NetworkDetection_StatusIsOnline_IsPersistent = True
NetworkDetectionClientVariables.setNetworkDetection_StatusIsOnline_IsPersistent(true);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:vH5La3gn6U2+jE5SKfYr5g", callContext.id);
// Execute Action: LogNetworkMessage
NetworkDetectionController.default.logNetworkMessage$Action("From OnNetworkOnline action", callContext);
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:nxv01KVj2kKeJINx_ifqZQ", callContext.id);
controller.safeExecuteJSNode(NetworkDetection_controller_OnNetworkOnline_CallbackJS, "Callback", "OnNetworkOnline", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("pZ9k0+LXG06YmN44ax8Stg:6hI28nh140qUhaCNJ027pg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("pZ9k0+LXG06YmN44ax8Stg:A6XtrOUPMkKOMxDopKdW5g", callContext.id);
}

};
var controller = NetworkDetectionController.default;
NetworkDetectionController.default.clientActionProxies.onNetworkOnline$Action = function () {
return controller.executeActionInsideJSNode(NetworkDetectionController.default.onNetworkOnline$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NetworkDetection.controller$OnNetworkOnline.CallbackJS", [], function () {
return function ($actions, $roles, $public) {
if(window.dx && window.dx.Network && window.dx.Network.userOnlineCallback) {
    window.dx.Network.userOnlineCallback();
}
};
});

define("NetworkDetection.controller", ["exports", "OutSystems/ClientRuntime/Main", "NetworkDetection.model", "NetworkDetection.controller$debugger"], function (exports, OutSystems, NetworkDetectionModel, NetworkDetection_Controller_debugger) {
var OS = OutSystems.Internal;
var NetworkDetectionController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return NetworkDetectionController.default.defaultTimeout;
};
Controller.prototype.getClientActionProxies = function (controller) {
var _this = this;
var thisController = controller;
return Object.keys(this.clientActionProxies).reduce(function (acc, actionName) {
acc[actionName] = function () {
if(thisController.isActive()) {
return _this.clientActionProxies[actionName].apply(thisController, arguments);
}

return Promise.resolve();
};
return acc;
}, {});
};
return Controller;
})(OS.Controller.BaseModuleController);
NetworkDetectionController.default = new Controller(null, "NetworkDetection");
});
define("NetworkDetection.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main", "NetworkDetection.clientVariables"], function (exports, Debugger, OutSystems, NetworkDetectionClientVariables) {
var OS = OutSystems.Internal;
var metaInfo = {
"W3o7cumgNEGUMVLEzabpng": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"EPNxhcLzgkOKHnHd2b8_RA": {
getter: function (varBag, idService) {
return varBag.callbackJSResult.value;
}
},
"NfKf9+4nJkey5iLNBCRMtg": {
getter: function (varBag, idService) {
return varBag.outVars.value.valueOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nI4kMS8260u8iW_byCuihw": {
getter: function (varBag, idService) {
return varBag.vars.value.frequencySecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Mi_h+_0dwk+uMQSYDTAEeA": {
getter: function (varBag, idService) {
return varBag.vars.value.pingTimeoutInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"eR_Oh2zsWUO+QgyuRRnJCA": {
getter: function (varBag, idService) {
return varBag.vars.value.onOnline_CallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"jLOuMSXd1UKpfGlbkKXF5w": {
getter: function (varBag, idService) {
return varBag.vars.value.onOffline_CallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"nNJweLFRgECscjP41x0Bww": {
getter: function (varBag, idService) {
return varBag.vars.value.onPendingPing_CallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"mh15UipfVEiPlkGYyej4gg": {
getter: function (varBag, idService) {
return varBag.vars.value.enableVerboseModeInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"M9MS17ndt0u2fljFq1Hm8Q": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessage_NoInternetInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WWoCLpOdRE269sq5HKZsWg": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessage_GenericErrorInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sMIr_Z1q1kKOGFRj0VYILQ": {
getter: function (varBag, idService) {
return varBag.networkDetection3JSResult.value;
}
},
"z0BZeXRE10OLLfebBsz4KA": {
getter: function (varBag, idService) {
return varBag.callbackJSResult.value;
}
},
"jlMN3+xDxUeTO+8gG2F0SQ": {
getter: function (varBag, idService) {
return varBag.vars.value.pendingMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LRnNu3iSL0irhHZBLRWwTg": {
getter: function (varBag, idService) {
return varBag.vars.value.exceptionMessageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Uz4jsMoJaU2UDlM3WGN2DA": {
getter: function (varBag, idService) {
return varBag.vars.value.ignoreMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"9vSq4y0sgUOPDz5FWDMlfA": {
getter: function (varBag, idService) {
return varBag.vars.value.overrideMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nxv01KVj2kKeJINx_ifqZQ": {
getter: function (varBag, idService) {
return varBag.callbackJSResult.value;
}
},
"9lEuwL5c0k2Schu+BB3gRg": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rJf12os4tEKHprgP7WzEJA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"6VBxcY5qP0eXVFhe+VXPfw": {
getter: function (varBag, idService) {
return varBag.vars.value.waitForResultsInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rbzOpyEPFkOPynI8tTxYVw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isOnlineOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ozKaopOLBUWscDS96y9HXg": {
getter: function (varBag, idService) {
return varBag.networkStateJSResult.value;
}
},
"qGkgEZJLAkG8uNM9jcgRoQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"d3QQgVjegkypr8zzynEifA": {
getter: function (varBag, idService) {
return varBag.defineStateAsyncJSResult.value;
}
},
"5Vg86hx7GUKfMSJcNA9Mxg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isPendingOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"DVAcwZWi_kqD18ExZppP1A": {
getter: function (varBag, idService) {
return varBag.outVars.value.valueOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tAoff_lqnEeU28+fSOughw": {
getter: function (varBag, idService) {
return varBag.vars.value.extraMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"o22eD2saAk6CLQoux0KS0g": {
getter: function (varBag, idService) {
return NetworkDetectionClientVariables.getNetworkDetection_UsingOfflineMode();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4tpKVlcsYEm58g1pp7889Q": {
getter: function (varBag, idService) {
return NetworkDetectionClientVariables.getOffline_NetworkStatus_PendingPing_Check();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"iuXYWhf3rUW7TgvVAjtA+A": {
getter: function (varBag, idService) {
return NetworkDetectionClientVariables.getNetworkDetection_ErrorMessage_GenericError();
},
dataType: OS.DataTypes.DataTypes.Text
},
"+c3oZGSCukqR0Av5RgADIw": {
getter: function (varBag, idService) {
return NetworkDetectionClientVariables.getNetworkDetection_StatusIsOnline_IsPersistent();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"fDs9eueIUk6JRCUMfoxsRw": {
getter: function (varBag, idService) {
return NetworkDetectionClientVariables.getNetworkDetection_ErrorMessage_NoInternet();
},
dataType: OS.DataTypes.DataTypes.Text
},
"LGVq1IV7GEG1K5YXj5FS_Q": {
getter: function (varBag, idService) {
return NetworkDetectionClientVariables.getOffline_NetworkStatus_PendingPing_Message();
},
dataType: OS.DataTypes.DataTypes.Text
},
"vH0V9nNgW0WqJL_WRDw8Qg": {
getter: function (varBag, idService) {
return NetworkDetectionClientVariables.getNetworkDetection_VerboseMode();
},
dataType: OS.DataTypes.DataTypes.Boolean
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
