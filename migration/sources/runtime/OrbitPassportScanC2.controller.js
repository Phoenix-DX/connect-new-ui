define("OrbitPassportScanC2.controller$BinaryToBase64", ["exports", "OutSystems/ClientRuntime/Main", "OrbitPassportScanC2.model", "OrbitPassportScanC2.controller", "OrbitPassportScanC2.controller$BinaryToBase64.BinaryToBase64JS"], function (exports, OutSystems, OrbitPassportScanC2Model, OrbitPassportScanC2Controller, OrbitPassportScanC2_controller_BinaryToBase64_BinaryToBase64JS) {
var OS = OutSystems.Internal;
OrbitPassportScanC2Controller.default.binaryToBase64$Action = function (binaryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OrbitPassportScanC2.BinaryToBase64$vars"))());
vars.value.binaryInLocal = binaryIn;
var binaryToBase64JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OrbitPassportScanC2.BinaryToBase64$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.binaryToBase64JSResult = binaryToBase64JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:ycL81g9u7kimpLf3D98V3Q:/ClientActionFlows.ycL81g9u7kimpLf3D98V3Q:sOWpGEwUMK9i36Z7wTh3nQ", "OrbitPassportScanC2", "BinaryToBase64", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:FSNH1AYcI0WBZL9Dg0hC1g", callContext.id);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:nJ+59GDaA0qdURqKRFpbUw", callContext.id);
binaryToBase64JSResult.value = controller.safeExecuteJSNode(OrbitPassportScanC2_controller_BinaryToBase64_BinaryToBase64JS, "BinaryToBase64", "BinaryToBase64", {
Binary: OS.DataConversion.JSNodeParamConverter.to(vars.value.binaryInLocal, OS.DataTypes.DataTypes.BinaryData),
Base64: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OrbitPassportScanC2.BinaryToBase64$binaryToBase64JSResult"))();
jsNodeResult.base64Out = OS.DataConversion.JSNodeParamConverter.from($parameters.Base64, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:ajBb9VOO20yOhH+rc4d4_Q", callContext.id);
// Base64 = BinaryToBase64.Base64
outVars.value.base64Out = binaryToBase64JSResult.value.base64Out;
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:dkF3fcsvL0+yoDHYuPaRuw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:ycL81g9u7kimpLf3D98V3Q", callContext.id);
}

};
var controller = OrbitPassportScanC2Controller.default;
OrbitPassportScanC2Controller.default.constructor.registerVariableGroupType("OrbitPassportScanC2.BinaryToBase64$vars", [{
name: "Binary",
attrName: "binaryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}]);
OrbitPassportScanC2Controller.default.constructor.registerVariableGroupType("OrbitPassportScanC2.BinaryToBase64$binaryToBase64JSResult", [{
name: "Base64",
attrName: "base64Out",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OrbitPassportScanC2Controller.default.constructor.registerVariableGroupType("OrbitPassportScanC2.BinaryToBase64$outVars", [{
name: "Base64",
attrName: "base64Out",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OrbitPassportScanC2Controller.default.clientActionProxies.binaryToBase64$Action = function (binaryIn) {
binaryIn = (binaryIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : binaryIn;
return controller.executeActionInsideJSNode(OrbitPassportScanC2Controller.default.binaryToBase64$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(binaryIn, OS.DataTypes.DataTypes.BinaryData)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Base64: OS.DataConversion.JSNodeParamConverter.to(actionResults.base64Out, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("OrbitPassportScanC2.controller$BinaryToBase64.BinaryToBase64JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Base64 = $parameters.Binary;
};
});

define("OrbitPassportScanC2.controller$Handler_OnRequestCamera", ["exports", "OutSystems/ClientRuntime/Main", "OrbitPassportScanC2.model", "OrbitPassportScanC2.controller", "UBTJavaScriptUtils.controller", "CameraPlugin.model", "CommonPlugin.model", "CameraPlugin.controller", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "OrbitPassportScanC2.referencesHealth", "OrbitPassportScanC2.referencesHealth$UBTJavaScriptUtils", "CameraPlugin.model$MediaResultRec", "OrbitPassportScanC2.referencesHealth$CameraPlugin", "CommonPlugin.model$ErrorRec", "OrbitPassportScanC2.referencesHealth$CommonPlugin", "CameraPlugin.controller$TakePhoto", "OrbitPassportScanC2.controller$BinaryToBase64"], function (exports, OutSystems, OrbitPassportScanC2Model, OrbitPassportScanC2Controller, UBTJavaScriptUtilsController, CameraPluginModel, CommonPluginModel, CameraPluginController) {
var OS = OutSystems.Internal;
OrbitPassportScanC2Controller.default.handler_OnRequestCamera$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var takePhotoVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OrbitPassportScanC2.Handler_OnRequestCamera$outVars"))());
varBag.callContext = callContext;
varBag.takePhotoVar = takePhotoVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:QyVBv6390Ee7rsbfeOavZA:/ClientActionFlows.QyVBv6390Ee7rsbfeOavZA:NvIhg7IiphW+lXEGE8QRpQ", "OrbitPassportScanC2", "Handler_OnRequestCamera", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:TjNmNHW4HEWhvg5XlGNS4w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:moUO+Lgaqkq6q66uPH4PsQ", callContext.id);
// Execute Action: TakePhoto
return CameraPluginController.default.takePhoto$Action(60, 0, 0, true, OrbitPassportScanC2Model.staticEntities.encodingType.jPEG, false, OrbitPassportScanC2Model.staticEntities.cameraDirection.backCamera, false, false, true, callContext).then(function (value) {
takePhotoVar.value = value;
}).then(function () {
// Success?
if((OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:RUzk+5MhhEi6rQ2cO5a9Ug", callContext.id) && takePhotoVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:IlfRr+2Ec0CydEpuJ2Pt8A", callContext.id);
// Execute Action: JSUtils_Console_Log_Success
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("Camera plugin success", callContext);
// Convert to Base64
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:15+uCnKHaUOENn_oorhiEA", callContext.id);
// Image = BinaryToBase64(TakePhoto.MediaResult.Thumbnail)
outVars.value.imageOut = OutSystemsDebugger.handleFunctionCall(function () {
return OrbitPassportScanC2Controller.default.binaryToBase64$Action(takePhotoVar.value.mediaResultOut.thumbnailAttr, callContext).base64Out;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:aAPrVjs1tUGVjFl42nA1wg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:BqHsTljYWUmPMZ0y5F_3vQ", callContext.id);
// Execute Action: JSUtils_Console_Log_Error
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action((((("Camera plugin error code: " + takePhotoVar.value.errorOut.errorCodeAttr) + "\r\n") + " Message: ") + takePhotoVar.value.errorOut.errorMessageAttr), callContext);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:KrxWMp3ZxkuPVI5Qa+iThQ", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:QyVBv6390Ee7rsbfeOavZA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:QyVBv6390Ee7rsbfeOavZA", callContext.id);
throw ex;

});
};
var controller = OrbitPassportScanC2Controller.default;
OrbitPassportScanC2Controller.default.constructor.registerVariableGroupType("OrbitPassportScanC2.Handler_OnRequestCamera$outVars", [{
name: "Image",
attrName: "imageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OrbitPassportScanC2Controller.default.clientActionProxies.handler_OnRequestCamera$Action = function () {
return controller.executeActionInsideJSNode(OrbitPassportScanC2Controller.default.handler_OnRequestCamera$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Image: OS.DataConversion.JSNodeParamConverter.to(actionResults.imageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("OrbitPassportScanC2.controller", ["exports", "OutSystems/ClientRuntime/Main", "OrbitPassportScanC2.model", "OrbitPassportScanC2.controller$debugger"], function (exports, OutSystems, OrbitPassportScanC2Model, OrbitPassportScanC2_Controller_debugger) {
var OS = OutSystems.Internal;
var OrbitPassportScanC2Controller = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return OrbitPassportScanC2Controller.default.defaultTimeout;
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
OrbitPassportScanC2Controller.default = new Controller(null, "OrbitPassportScanC2");
});
define("OrbitPassportScanC2.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"H3LAx+uv7EqyDwhiE5nYqQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.imageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"moUO+Lgaqkq6q66uPH4PsQ": {
getter: function (varBag, idService) {
return varBag.takePhotoVar.value;
}
},
"RIiJgPnXrUyUQLW64ObrRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.binaryInLocal;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"n7yPLMkMVU2EHEB1Pqbtdg": {
getter: function (varBag, idService) {
return varBag.outVars.value.base64Out;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nJ+59GDaA0qdURqKRFpbUw": {
getter: function (varBag, idService) {
return varBag.binaryToBase64JSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
