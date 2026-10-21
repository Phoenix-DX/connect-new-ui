define("UBTConnect_EmbedFeed.controller$GetIframeObject", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.controller", "UBTConnect_EmbedFeed.controller$GetIframeObject.JavaScript1JS"], function (exports, OutSystems, UBTConnect_EmbedFeedModel, UBTConnect_EmbedFeedController, UBTConnect_EmbedFeed_controller_GetIframeObject_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTConnect_EmbedFeedController.default.getIframeObject$Action = function (containerIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_EmbedFeed.GetIframeObject$vars"))());
vars.value.containerIdInLocal = containerIdIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_EmbedFeed.GetIframeObject$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:yafibNAMWUmhDfK4csox3w:/ClientActionFlows.yafibNAMWUmhDfK4csox3w:o7tof49IvUyCAy3qxowgPg", "UBTConnect_EmbedFeed", "GetIframeObject", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:ABi+gN9HckuxNWnL0LHWXg", callContext.id);
OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:cPKM9SVPgECXfqNWLIiGxQ", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTConnect_EmbedFeed_controller_GetIframeObject_JavaScript1JS, "JavaScript1", "GetIframeObject", {
ContainerId: OS.DataConversion.JSNodeParamConverter.to(vars.value.containerIdInLocal, OS.DataTypes.DataTypes.Text),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect_EmbedFeed.GetIframeObject$javaScript1JSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:wRNr_neEbE2ij8ccgrrB3g", callContext.id);
// Object = JavaScript1.Object
outVars.value.objectOut = javaScript1JSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:5shOvRCgAkK+eU1RD5ZgLQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:yafibNAMWUmhDfK4csox3w", callContext.id);
}

};
var controller = UBTConnect_EmbedFeedController.default;
UBTConnect_EmbedFeedController.default.constructor.registerVariableGroupType("UBTConnect_EmbedFeed.GetIframeObject$vars", [{
name: "ContainerId",
attrName: "containerIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_EmbedFeedController.default.constructor.registerVariableGroupType("UBTConnect_EmbedFeed.GetIframeObject$javaScript1JSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnect_EmbedFeedController.default.constructor.registerVariableGroupType("UBTConnect_EmbedFeed.GetIframeObject$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnect_EmbedFeedController.default.clientActionProxies.getIframeObject$Action = function (containerIdIn) {
containerIdIn = (containerIdIn === undefined) ? "" : containerIdIn;
return controller.executeActionInsideJSNode(UBTConnect_EmbedFeedController.default.getIframeObject$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(containerIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTConnect_EmbedFeed.controller$GetIframeObject.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {

$parameters.Object = document.getElementById($parameters.ContainerId).getElementsByTagName("iframe")[0]
};
});

define("UBTConnect_EmbedFeed.controller$GetScrollContainer", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.controller", "UBTConnect_EmbedFeed.controller$GetScrollContainer.JavaScript1JS"], function (exports, OutSystems, UBTConnect_EmbedFeedModel, UBTConnect_EmbedFeedController, UBTConnect_EmbedFeed_controller_GetScrollContainer_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTConnect_EmbedFeedController.default.getScrollContainer$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_EmbedFeed.GetScrollContainer$outVars"))());
varBag.callContext = callContext;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:f53V3ZlGxUyU3+ZqPerr5w:/ClientActionFlows.f53V3ZlGxUyU3+ZqPerr5w:dwRZuRxnruR3_Zpx3fXcJQ", "UBTConnect_EmbedFeed", "GetScrollContainer", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:RmafPVcWeU2vY1RJmKN6uA", callContext.id);
OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:odq25mrgK02X5EVVTjiooQ", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTConnect_EmbedFeed_controller_GetScrollContainer_JavaScript1JS, "JavaScript1", "GetScrollContainer", {
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect_EmbedFeed.GetScrollContainer$javaScript1JSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:u_IQSTOHaUyvtdGCX4uxWA", callContext.id);
// Object = JavaScript1.Object
outVars.value.objectOut = javaScript1JSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:O9PntyV23kSRUavNrxkQJQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:f53V3ZlGxUyU3+ZqPerr5w", callContext.id);
}

};
var controller = UBTConnect_EmbedFeedController.default;
UBTConnect_EmbedFeedController.default.constructor.registerVariableGroupType("UBTConnect_EmbedFeed.GetScrollContainer$javaScript1JSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnect_EmbedFeedController.default.constructor.registerVariableGroupType("UBTConnect_EmbedFeed.GetScrollContainer$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnect_EmbedFeedController.default.clientActionProxies.getScrollContainer$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_EmbedFeedController.default.getScrollContainer$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTConnect_EmbedFeed.controller$GetScrollContainer.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Object  = document.querySelector(".active-screen.screen-container");
};
});

define("UBTConnect_EmbedFeed.controller", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.controller$debugger"], function (exports, OutSystems, UBTConnect_EmbedFeedModel, UBTConnect_EmbedFeed_Controller_debugger) {
var OS = OutSystems.Internal;
var UBTConnect_EmbedFeedController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return UBTConnect_EmbedFeedController.default.defaultTimeout;
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
UBTConnect_EmbedFeedController.default = new Controller(null, "UBTConnect_EmbedFeed");
});
define("UBTConnect_EmbedFeed.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"+ulb_6a+iUuqtYFtecgZCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.containerIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cAi3ENYQXUOx3EcpusxCNA": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"cPKM9SVPgECXfqNWLIiGxQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"u+dpq1j6u0mskjhoDggZdw": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"odq25mrgK02X5EVVTjiooQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
