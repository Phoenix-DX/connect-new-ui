define("FileTransferPlugin.controller$CheckFileTransferPlugin", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "FilePlugin.controller", "FileTransferPlugin.controller$CheckFileTransferPlugin.CheckPluginJS", "FileTransferPlugin.controller$CheckFileTransferPlugin.CheckPWAJS", "CommonPlugin.controller$IsCordovaDefined", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FileTransferPlugin.referencesHealth$FilePlugin"], function (exports, OutSystems, FileTransferPluginModel, FileTransferPluginController, CommonPluginController, CommonPluginModel, FilePluginController, FileTransferPlugin_controller_CheckFileTransferPlugin_CheckPluginJS, FileTransferPlugin_controller_CheckFileTransferPlugin_CheckPWAJS) {
var OS = OutSystems.Internal;
FileTransferPluginController.default.checkFileTransferPlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var checkPluginJSResult = new OS.DataTypes.VariableHolder();
var checkPWAJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.CheckFileTransferPlugin$outVars"))());
varBag.callContext = callContext;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.checkPluginJSResult = checkPluginJSResult;
varBag.checkPWAJSResult = checkPWAJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:G8rwNtie60O05ZMHe5AnSA:/ClientActionFlows.G8rwNtie60O05ZMHe5AnSA:alPVbImcgk34Lu0YBboX2w", "FileTransferPlugin", "CheckFileTransferPlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:HlGdm+bKUESELWHcQ9ZtIQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:jILxWATcBkqluTVC3+zMOg", callContext.id);
// Execute Action: RequireScript
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/FileTransferPlugin.wrapper.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:kK32A9yM1USZWsDcmuXfBw", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

}).then(function () {
// IsLoaded
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Gocg5_BWHkmf8fWK6tvLpA", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:vkLtG2d6GEaVBic4MzgklQ", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// CheckFilePlugin IsAvailable
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:AjwWOR1WxUukah0XN08xcA", callContext.id) && (checkFilePluginVar.value.isAvailableOut === true))) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:2E_A6iGw+UWRppqoRXhaWw", callContext.id);
checkPluginJSResult.value = controller.safeExecuteJSNode(FileTransferPlugin_controller_CheckFileTransferPlugin_CheckPluginJS, "CheckPlugin", "CheckFileTransferPlugin", {
PluginExists: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
WarningCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
WarningMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileTransferPlugin.CheckFileTransferPlugin$checkPluginJSResult"))();
jsNodeResult.pluginExistsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.PluginExists, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.warningCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WarningCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.warningMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WarningMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Uhr8uVHprEq17ZNGLSxFKQ", callContext.id) && checkPluginJSResult.value.pluginExistsOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:tRIIjmzV0UapyXKWi0_N+w", callContext.id);
// IsAvailable = CheckPlugin.PluginExists
outVars.value.isAvailableOut = checkPluginJSResult.value.pluginExistsOut;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:tRIIjmzV0UapyXKWi0_N+w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsPWA = False
outVars.value.isPWAOut = false;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:rfF6KA7iOUml3nK7b7iapw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DYycWlbHJE2XLnw9SqY8lg", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DYycWlbHJE2XLnw9SqY8lg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning.WarningCode = CheckPlugin.WarningCode
outVars.value.warningOut.warningCodeAttr = checkPluginJSResult.value.warningCodeOut;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DYycWlbHJE2XLnw9SqY8lg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Warning.WarningCode = CheckPlugin.WarningMessage
outVars.value.warningOut.warningCodeAttr = checkPluginJSResult.value.warningMessageOut;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DYycWlbHJE2XLnw9SqY8lg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorCode = CheckPlugin.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkPluginJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DYycWlbHJE2XLnw9SqY8lg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Error.ErrorMessage = CheckPlugin.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkPluginJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DYycWlbHJE2XLnw9SqY8lg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// IsPWA = False
outVars.value.isPWAOut = false;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:rfF6KA7iOUml3nK7b7iapw", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:yTfkRTY2KUe6WcvNgtLIYw", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:yTfkRTY2KUe6WcvNgtLIYw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = CheckFilePlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkFilePluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:yTfkRTY2KUe6WcvNgtLIYw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = CheckFilePlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkFilePluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:yTfkRTY2KUe6WcvNgtLIYw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Warning.WarningCode = CheckFilePlugin.Warning.WarningCode
outVars.value.warningOut.warningCodeAttr = checkFilePluginVar.value.warningOut.warningCodeAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:yTfkRTY2KUe6WcvNgtLIYw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Warning.WarningMessage = CheckFilePlugin.Warning.WarningMessage
outVars.value.warningOut.warningMessageAttr = checkFilePluginVar.value.warningOut.warningMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:3rkwAObof0OU_2DMtEkeFw", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:pdkt9ZQWkESd_j8RYIH_lw", callContext.id);
checkPWAJSResult.value = controller.safeExecuteJSNode(FileTransferPlugin_controller_CheckFileTransferPlugin_CheckPWAJS, "CheckPWA", "CheckFileTransferPlugin", {
isPWA: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileTransferPlugin.CheckFileTransferPlugin$checkPWAJSResult"))();
jsNodeResult.isPWAOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isPWA, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// PWA exists
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Nd4PjWkAq0iUqCu_Ze1pow", callContext.id) && checkPWAJSResult.value.isPWAOut)) {
// Set Output
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:8BTnpOA5pEKW39Loh7Cx8w", callContext.id);
// IsAvailable = True
outVars.value.isAvailableOut = true;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:8BTnpOA5pEKW39Loh7Cx8w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsPWA = True
outVars.value.isPWAOut = true;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:yR7DWXeUM06PgxBX2H9wig", callContext.id);
} else {
// Set Output
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Ka8IlJVUbE2N0xiuQxxDSg", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Ka8IlJVUbE2N0xiuQxxDSg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = "OS-PLUG-FLTR-0001"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-FLTR-0001";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Ka8IlJVUbE2N0xiuQxxDSg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "Cordova isn't defined."
outVars.value.errorOut.errorMessageAttr = "Cordova isn\'t defined.";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Ka8IlJVUbE2N0xiuQxxDSg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// IsPWA = False
outVars.value.isPWAOut = false;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:h0uUs_dv3E+xd8543GgJhQ", callContext.id);
}

}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:G8rwNtie60O05ZMHe5AnSA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:G8rwNtie60O05ZMHe5AnSA", callContext.id);
throw ex;

});
};
var controller = FileTransferPluginController.default;
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.CheckFileTransferPlugin$checkPluginJSResult", [{
name: "PluginExists",
attrName: "pluginExistsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "WarningCode",
attrName: "warningCodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "WarningMessage",
attrName: "warningMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.CheckFileTransferPlugin$checkPWAJSResult", [{
name: "isPWA",
attrName: "isPWAOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.CheckFileTransferPlugin$outVars", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsPWA",
attrName: "isPWAOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}, {
name: "Warning",
attrName: "warningOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.WarningRec();
},
complexType: CommonPluginModel.WarningRec
}]);
FileTransferPluginController.default.clientActionProxies.checkFileTransferPlugin$Action = function () {
return controller.executeActionInsideJSNode(FileTransferPluginController.default.checkFileTransferPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
IsPWA: OS.DataConversion.JSNodeParamConverter.to(actionResults.isPWAOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FileTransferPlugin.controller$CheckFileTransferPlugin.CheckPluginJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (typeof(cordova) !== "undefined" && typeof(cordova.plugins) !== "undefined") {
    if(typeof(cordova.plugins.FileTransfer) !== "undefined") {
        $parameters.PluginExists = true
        return
    }
    if(typeof(cordova.plugins.OSFileTransfer) !== "undefined") {
        $parameters.PluginExists = false
        $parameters.WarningCode = "OS-PLUG-FLTR-0002"
        $parameters.WarningMessage = "The app is running with an old version of the plugin. Please create a new mobile package."
        return
    } 
}

$parameters.ErrorCode = "OS-PLUG-FLTR-0003"
$parameters.ErrorMessage = "The File Transfer plugin is not loaded. Make sure the mobile package is valid."

};
});
define("FileTransferPlugin.controller$CheckFileTransferPlugin.CheckPWAJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.isPWA = (typeof(OSFileTransferPluginWrapper) !== "undefined" && typeof(OSFileTransferPluginWrapper.Instance) !== "undefined")
};
});

define("FileTransferPlugin.controller$DEPRECATED_CheckFileTransferPlugin", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller", "FilePlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "FileTransferPlugin.controller$DEPRECATED_CheckFileTransferPlugin.CheckPWAJS", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$FilePlugin", "CommonPlugin.controller$IsCordovaDefined", "FileTransferPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.controller$PluginIsLoaded"], function (exports, OutSystems, FileTransferPluginModel, FileTransferPluginController, FilePluginController, CommonPluginController, CommonPluginModel, FileTransferPlugin_controller_DEPRECATED_CheckFileTransferPlugin_CheckPWAJS) {
var OS = OutSystems.Internal;
FileTransferPluginController.default.dEPRECATED_CheckFileTransferPlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var pluginIsLoadedVar = new OS.DataTypes.VariableHolder();
var checkPWAJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.DEPRECATED_CheckFileTransferPlugin$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.pluginIsLoadedVar = pluginIsLoadedVar;
varBag.checkPWAJSResult = checkPWAJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:fMzu+oCvXkqGgLh0jkyNnA:/ClientActionFlows.fMzu+oCvXkqGgLh0jkyNnA:c6l0NzX+q5M9uH86L_zaGQ", "FileTransferPlugin", "DEPRECATED_CheckFileTransferPlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:8qPZY90lR0CdZjRAZDBhEQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:28akXmyU9kmQsMOcVxZd2w", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:P+3zr1+tvEu_5QlBYmBfaw", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Ie56IfYaiEqKc9pTXKTFvw", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:7Sbvx1y51kKRrt9+XK0fzg", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:iV6yj03cMkC3h1xRV4OlSw", callContext.id);
// Execute Action: PluginIsLoaded
pluginIsLoadedVar.value = FileTransferPluginController.default.pluginIsLoaded$Action(callContext);

// Set Result
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:z0xaIfUeikOOkYa41OhVgA", callContext.id);
// IsAvailable = PluginIsLoaded.PluginIsLoaded
outVars.value.isAvailableOut = pluginIsLoadedVar.value.pluginIsLoadedOut;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:LGwKfad1OU+moMHJMqOyCg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:sCIE+pYmKEO1ytZzl7UrSg", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:sCIE+pYmKEO1ytZzl7UrSg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = 1
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:sCIE+pYmKEO1ytZzl7UrSg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "FilePlugin is not defined"
outVars.value.errorOut.errorMessageAttr = "FilePlugin is not defined";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:eTOIr+AuyEClo2R7v3Nxkw", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:ZWLpHsChg06m4gESUlZ0FQ", callContext.id);
// Execute Action: RequireScript
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/FileTransferPlugin.osfiletransfer_bundle.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:EO+Llaj6Q0GPbD_KLNL3Uw", callContext.id);
// Execute Action: RequireScript2
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/FileTransferPlugin.wrapper.js"), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:OV8k3+vJjEmh+_F_AJDWSw", callContext.id);
checkPWAJSResult.value = controller.safeExecuteJSNode(FileTransferPlugin_controller_DEPRECATED_CheckFileTransferPlugin_CheckPWAJS, "CheckPWA", "DEPRECATED_CheckFileTransferPlugin", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileTransferPlugin.DEPRECATED_CheckFileTransferPlugin$checkPWAJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:mdEpWJ7m1kiSJ7S1vWL0wg", callContext.id);
// IsPWA = CheckPWA.IsAvailable
outVars.value.isPWAOut = checkPWAJSResult.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:mdEpWJ7m1kiSJ7S1vWL0wg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsAvailable = IsPWA
outVars.value.isAvailableOut = outVars.value.isPWAOut;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:mdEpWJ7m1kiSJ7S1vWL0wg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = 1
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:mdEpWJ7m1kiSJ7S1vWL0wg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = "cordova is not defined"
outVars.value.errorOut.errorMessageAttr = "cordova is not defined";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:S3suorRn4UKARqg_Ss5aSQ", callContext.id);
});
}

});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_CheckFileTransferPlugin.DEPRECATED_CheckFileTransferPlugin", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:LaLrCbCCrEGqlJVw_DcYug", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:YXzxgA_ulEGKbqKhCuWnvw", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:YXzxgA_ulEGKbqKhCuWnvw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:YXzxgA_ulEGKbqKhCuWnvw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:KfwRK5EKfUyFmhhtJHMEbg", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:fMzu+oCvXkqGgLh0jkyNnA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:fMzu+oCvXkqGgLh0jkyNnA", callContext.id);
throw ex;

});
};
var controller = FileTransferPluginController.default;
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DEPRECATED_CheckFileTransferPlugin$checkPWAJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DEPRECATED_CheckFileTransferPlugin$outVars", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsPWA",
attrName: "isPWAOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FileTransferPluginController.default.clientActionProxies.dEPRECATED_CheckFileTransferPlugin$Action = function () {
return controller.executeActionInsideJSNode(FileTransferPluginController.default.dEPRECATED_CheckFileTransferPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
IsPWA: OS.DataConversion.JSNodeParamConverter.to(actionResults.isPWAOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileTransferPlugin.controller$DEPRECATED_CheckFileTransferPlugin.CheckPWAJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsAvailable = OSFileTransferLib !== undefined || (typeof(OSFileTransferPluginWrapper) !== "undefined" && typeof(OSFileTransferPluginWrapper.Instance) !== "undefined")
};
});

define("FileTransferPlugin.controller$DEPRECATED_DownloadFile", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller", "CommonPlugin.model", "FileTransferPlugin.controller$DEPRECATED_DownloadFile.DownloadFileJS", "FileTransferPlugin.controller$DEPRECATED_DownloadFile.DownloadFilePWAJS", "FileTransferPlugin.model$HeaderList", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin", "FileTransferPlugin.controller$DownloadFile", "CommonPlugin.model$WarningRec", "FileTransferPlugin.controller$CheckFileTransferPlugin", "FileTransferPlugin.controller$DEPRECATED_CheckFileTransferPlugin"], function (exports, OutSystems, FileTransferPluginModel, FileTransferPluginController, CommonPluginModel, FileTransferPlugin_controller_DEPRECATED_DownloadFile_DownloadFileJS, FileTransferPlugin_controller_DEPRECATED_DownloadFile_DownloadFilePWAJS) {
var OS = OutSystems.Internal;
FileTransferPluginController.default.dEPRECATED_DownloadFile$Action = function (uRLIn, fileSystemURLIn, fileNameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.DEPRECATED_DownloadFile$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.fileSystemURLInLocal = fileSystemURLIn;
vars.value.fileNameInLocal = fileNameIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var downloadFileNotDeprecatedVar = new OS.DataTypes.VariableHolder();
var checkFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.DEPRECATED_DownloadFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.downloadFileNotDeprecatedVar = downloadFileNotDeprecatedVar;
varBag.checkFileTransferPluginVar = checkFileTransferPluginVar;
varBag.dEPRECATED_CheckFileTransferPluginVar = dEPRECATED_CheckFileTransferPluginVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:cCGR5EJn6U2Oo2WcbaZ+nQ:/ClientActionFlows.cCGR5EJn6U2Oo2WcbaZ+nQ:u9DqYccjIG5ST3+IJ4y3cA", "FileTransferPlugin", "DEPRECATED_DownloadFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:qiwgVw1aPEi7EBYUz8FvCg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:5Xp_gyHYYUC2EGE2q+Lt0Q", callContext.id);
// Execute Action: CheckFileTransferPlugin
return FileTransferPluginController.default.checkFileTransferPlugin$Action(callContext).then(function (value) {
checkFileTransferPluginVar.value = value;
}).then(function () {
// Is FileTransfer defined?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:nWgeLH+LfEyo9JtEFAw3Tw", callContext.id) && checkFileTransferPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:xve5GCPStUi0mcIQUx8AOQ", callContext.id);
// Execute Action: DownloadFileNotDeprecated
return FileTransferPluginController.default.downloadFile$Action(vars.value.uRLInLocal, vars.value.fileSystemURLInLocal, new FileTransferPluginModel.HeaderList(), callContext).then(function (value) {
downloadFileNotDeprecatedVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:iT3LaSSo8kiEQYmrOvv++Q", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:lyIZJIsjoUWnmPPrOA4hwg", callContext.id) && ((vars.value.uRLInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:c1h7hOFypkm1N+G8XN1Uvw", callContext.id);
// Execute Action: DEPRECATED_CheckFileTransferPlugin
return FileTransferPluginController.default.dEPRECATED_CheckFileTransferPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckFileTransferPluginVar.value = value;
}).then(function () {
// Is Deprecated FileTransfer defined?
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:96Vwl6_SH0yzuRBItkImQw", callContext.id) && dEPRECATED_CheckFileTransferPluginVar.value.isAvailableOut)) {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:PzIo2hLKF0i2TWeou8RwtQ", callContext.id) && dEPRECATED_CheckFileTransferPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:e7zS4lbg5UegVhW8WoEDAw", callContext.id);
controller.safeExecuteJSNode(FileTransferPlugin_controller_DEPRECATED_DownloadFile_DownloadFilePWAJS, "DownloadFilePWA", "DEPRECATED_DownloadFile", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileNameInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:4KOIGaE8ekysfzMtms9AsA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:RWw0jL_KDkOWzDWjyJumIw", callContext.id);
controller.safeExecuteJSNode(FileTransferPlugin_controller_DEPRECATED_DownloadFile_DownloadFileJS, "DownloadFile", "DEPRECATED_DownloadFile", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
FileSystemURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileSystemURLInLocal, OS.DataTypes.DataTypes.Text),
trustAllHosts: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:4KOIGaE8ekysfzMtms9AsA", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DWGdVMveokKeuu_eeflFhw", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DWGdVMveokKeuu_eeflFhw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not present or not loaded"
outVars.value.errorOut.errorMessageAttr = "Plugin not present or not loaded";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:0MEXcAI87E6c8mNnhBSkrA", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:C0x765r4QkCXi1S_BRwa5w", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:C0x765r4QkCXi1S_BRwa5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "no server url passed"
outVars.value.errorOut.errorMessageAttr = "no server url passed";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Nxs5CNr870CREI5U+u+rtQ", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_DownloadFile.DEPRECATED_DownloadFile", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:_E_XUhh71kOMYL9DkE4gMg", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:FPRFvJsTSkyVinbCGYvyUQ", callContext.id);
// Error.ErrorCode = "-1"
outVars.value.errorOut.errorCodeAttr = "-1";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:FPRFvJsTSkyVinbCGYvyUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:RxKv+iQAQ0uw4LrFZh3iMQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:cCGR5EJn6U2Oo2WcbaZ+nQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:cCGR5EJn6U2Oo2WcbaZ+nQ", callContext.id);
throw ex;

});
};
var controller = FileTransferPluginController.default;
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DEPRECATED_DownloadFile$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileSystemURL",
attrName: "fileSystemURLInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileName",
attrName: "fileNameInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DEPRECATED_DownloadFile$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FileTransferPluginController.default.clientActionProxies.dEPRECATED_DownloadFile$Action = function (uRLIn, fileSystemURLIn, fileNameIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
fileSystemURLIn = (fileSystemURLIn === undefined) ? "" : fileSystemURLIn;
fileNameIn = (fileNameIn === undefined) ? "" : fileNameIn;
return controller.executeActionInsideJSNode(FileTransferPluginController.default.dEPRECATED_DownloadFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileSystemURLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: actionResults.errorOut
};
});
};
});
define("FileTransferPlugin.controller$DEPRECATED_DownloadFile.DownloadFileJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
require(["PluginManager"], function(module) {
    var scope =  window.filetransferDownloadSync.getScope();
    if (!scope) return;

    var fileTransfer = new FileTransfer();
    var uri = encodeURI($parameters.URL);
    
    fileTransfer.onprogress = scope.downloadCallback.downloadProgress;
    fileTransfer.download(
        uri,
        $parameters.FileSystemURL,
        scope.downloadCallback.downloadComplete,
        scope.downloadCallback.downloadError,
        $parameters.trustAllHosts
    );
});
};
});
define("FileTransferPlugin.controller$DEPRECATED_DownloadFile.DownloadFilePWAJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OSFileTransferLib.download($parameters.URL, $parameters.FileName);
};
});

define("FileTransferPlugin.controller$DEPRECATED_DownloadFileWithHeaders", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller", "CommonPlugin.model", "FileTransferPlugin.controller$DEPRECATED_DownloadFileWithHeaders.DownloadFileJS", "FileTransferPlugin.controller$DEPRECATED_DownloadFileWithHeaders.DownloadFilePWAJS", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FileTransferPlugin.controller$CheckFileTransferPlugin", "FileTransferPlugin.model$HeaderList", "FileTransferPlugin.controller$DownloadFile", "FileTransferPlugin.controller$DEPRECATED_CheckFileTransferPlugin"], function (exports, OutSystems, FileTransferPluginModel, FileTransferPluginController, CommonPluginModel, FileTransferPlugin_controller_DEPRECATED_DownloadFileWithHeaders_DownloadFileJS, FileTransferPlugin_controller_DEPRECATED_DownloadFileWithHeaders_DownloadFilePWAJS) {
var OS = OutSystems.Internal;
FileTransferPluginController.default.dEPRECATED_DownloadFileWithHeaders$Action = function (uRLIn, fileSystemURLIn, headersIn, fileNameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.DEPRECATED_DownloadFileWithHeaders$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.fileSystemURLInLocal = fileSystemURLIn;
vars.value.headersInLocal = headersIn.clone();
vars.value.fileNameInLocal = fileNameIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var downloadFileNotDeprecatedVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var serializeHeadersVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.DEPRECATED_DownloadFileWithHeaders$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkFileTransferPluginVar = checkFileTransferPluginVar;
varBag.downloadFileNotDeprecatedVar = downloadFileNotDeprecatedVar;
varBag.dEPRECATED_CheckFileTransferPluginVar = dEPRECATED_CheckFileTransferPluginVar;
varBag.serializeHeadersVar = serializeHeadersVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:IrK_Evxdi0anmD4vvllhQw:/ClientActionFlows.IrK_Evxdi0anmD4vvllhQw:6zFh1QYyMc5+jUfxQtkjIA", "FileTransferPlugin", "DEPRECATED_DownloadFileWithHeaders", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:gRnAnQ83mESw8OXvCOIjsw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:xgsOBVDZa0up4ZhPP0AB_g", callContext.id);
// Execute Action: CheckFileTransferPlugin
return FileTransferPluginController.default.checkFileTransferPlugin$Action(callContext).then(function (value) {
checkFileTransferPluginVar.value = value;
}).then(function () {
// Is FileTransfer defined?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:ogGXviUeOUiITjUUT7M65Q", callContext.id) && checkFileTransferPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:dh8MVx44tEKJIRxhWzmQEA", callContext.id);
// Execute Action: DownloadFileNotDeprecated
return FileTransferPluginController.default.downloadFile$Action(vars.value.uRLInLocal, vars.value.fileSystemURLInLocal, vars.value.headersInLocal, callContext).then(function (value) {
downloadFileNotDeprecatedVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:VF7JlaCFnUSAKnDlw8_J7Q", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:NMJQ6pdoekq9fOFoX6Qohw", callContext.id) && ((vars.value.uRLInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:OVLIX2V44kmZ_TnexyI+IQ", callContext.id);
// Execute Action: DEPRECATED_CheckFileTransferPlugin
return FileTransferPluginController.default.dEPRECATED_CheckFileTransferPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckFileTransferPluginVar.value = value;
}).then(function () {
// Is FileTransfer defined?
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:WSizVDZUqkaun7p4gxAdPA", callContext.id) && dEPRECATED_CheckFileTransferPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:1yeAa9tLhUWc1jL6+Z0bvw", callContext.id);
// JSON Serialize: SerializeHeaders
serializeHeadersVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.headersInLocal, false, false);
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:eIXAhcsDsUanB7OPxiuCKw", callContext.id) && dEPRECATED_CheckFileTransferPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Y0ZHrW1ud0unPMkdO6b6Ag", callContext.id);
controller.safeExecuteJSNode(FileTransferPlugin_controller_DEPRECATED_DownloadFileWithHeaders_DownloadFilePWAJS, "DownloadFilePWA", "DEPRECATED_DownloadFileWithHeaders", {
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileNameInLocal, OS.DataTypes.DataTypes.Text),
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
Headers: OS.DataConversion.JSNodeParamConverter.to(serializeHeadersVar.value.jSONOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:EUQnI5VRyECyzoUk5DY4IQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:fn+YQUSCXk6Fyq0h43ImNA", callContext.id);
// JS to manage the downlaod files by using native plugin
controller.safeExecuteJSNode(FileTransferPlugin_controller_DEPRECATED_DownloadFileWithHeaders_DownloadFileJS, "DownloadFile", "DEPRECATED_DownloadFileWithHeaders", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
Headers: OS.DataConversion.JSNodeParamConverter.to(serializeHeadersVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
FileSystemURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileSystemURLInLocal, OS.DataTypes.DataTypes.Text),
trustAllHosts: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:EUQnI5VRyECyzoUk5DY4IQ", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:HKyAC0DvIEuF6HPgduSTKw", callContext.id);
// Error.ErrorCode = DEPRECATED_CheckFileTransferPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = dEPRECATED_CheckFileTransferPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:HKyAC0DvIEuF6HPgduSTKw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DEPRECATED_CheckFileTransferPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = dEPRECATED_CheckFileTransferPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:XHzxCMi3aEipFXNLtUtL4A", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:24IRuRAkb0+kZN73PkArtA", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:24IRuRAkb0+kZN73PkArtA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "no server url passed"
outVars.value.errorOut.errorMessageAttr = "no server url passed";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:93LwAzwtL0G0zZD8fhLSiw", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_DownloadFileWithHeaders.DEPRECATED_DownloadFileWithHeaders", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:fabRu1fNakm+Y_4M3xCckg", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:F1ANx9tYZEWcwbcLLcQgTQ", callContext.id);
// Error.ErrorCode = "-1"
outVars.value.errorOut.errorCodeAttr = "-1";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:F1ANx9tYZEWcwbcLLcQgTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:QAUynD4eUESwuc7I670CDA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:IrK_Evxdi0anmD4vvllhQw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:IrK_Evxdi0anmD4vvllhQw", callContext.id);
throw ex;

});
};
var controller = FileTransferPluginController.default;
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DEPRECATED_DownloadFileWithHeaders$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileSystemURL",
attrName: "fileSystemURLInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Headers",
attrName: "headersInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new FileTransferPluginModel.HeaderList();
},
complexType: FileTransferPluginModel.HeaderList
}, {
name: "FileName",
attrName: "fileNameInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DEPRECATED_DownloadFileWithHeaders$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FileTransferPluginController.default.clientActionProxies.dEPRECATED_DownloadFileWithHeaders$Action = function (uRLIn, fileSystemURLIn, headersIn, fileNameIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
fileSystemURLIn = (fileSystemURLIn === undefined) ? "" : fileSystemURLIn;
headersIn = (headersIn === undefined) ? new FileTransferPluginModel.HeaderList() : headersIn;
fileNameIn = (fileNameIn === undefined) ? "" : fileNameIn;
return controller.executeActionInsideJSNode(FileTransferPluginController.default.dEPRECATED_DownloadFileWithHeaders$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileSystemURLIn, OS.DataTypes.DataTypes.Text), headersIn, OS.DataConversion.JSNodeParamConverter.from(fileNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: actionResults.errorOut
};
});
};
});
define("FileTransferPlugin.controller$DEPRECATED_DownloadFileWithHeaders.DownloadFileJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
require(["PluginManager"], function(module) {
    var scope =  window.filetransferDownloadSync.getScope();
    
    if (!scope) return;

    var fileTransfer = new FileTransfer();
    var uri = encodeURI($parameters.URL);
    var headersList = JSON.parse($parameters.Headers);
    var headers = {};
    headersList.forEach(function(obj){
        if(obj.hasOwnProperty("name") && obj.hasOwnProperty("value")) {
            Object.defineProperty(headers, obj.name, {
                value : obj.value,
                enumerable: true
            });
        }
    });
    fileTransfer.onprogress = scope.downloadCallback.downloadProgress;
    fileTransfer.download(
        uri,
        $parameters.FileSystemURL,
        scope.downloadCallback.downloadComplete,
        scope.downloadCallback.downloadError,
        $parameters.trustAllHosts,
        {
            headers: headers
        }
    );
});
};
});
define("FileTransferPlugin.controller$DEPRECATED_DownloadFileWithHeaders.DownloadFilePWAJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OSFileTransferLib.downloadWithHeaders($parameters.URL, JSON.parse($parameters.Headers), $parameters.FileName);
};
});

define("FileTransferPlugin.controller$DEPRECATED_UploadFile", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller", "CommonPlugin.model", "FileTransferPlugin.controller$DEPRECATED_UploadFile.UploadFileToServerJS", "FileTransferPlugin.model$HeaderList", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin", "FileTransferPlugin.controller$UploadFile", "FileTransferPlugin.controller$DEPRECATED_CheckFileTransferPlugin", "CommonPlugin.model$WarningRec", "FileTransferPlugin.controller$CheckFileTransferPlugin"], function (exports, OutSystems, FileTransferPluginModel, FileTransferPluginController, CommonPluginModel, FileTransferPlugin_controller_DEPRECATED_UploadFile_UploadFileToServerJS) {
var OS = OutSystems.Internal;
FileTransferPluginController.default.dEPRECATED_UploadFile$Action = function (serverURLIn, fileURLIn, mimeTypeIn, fileKeyIn, chunkedModeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.DEPRECATED_UploadFile$vars"))());
vars.value.serverURLInLocal = serverURLIn;
vars.value.fileURLInLocal = fileURLIn;
vars.value.mimeTypeInLocal = mimeTypeIn;
vars.value.fileKeyInLocal = fileKeyIn;
vars.value.chunkedModeInLocal = chunkedModeIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var uploadFileNotDeprecatedVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var checkFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.DEPRECATED_UploadFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.uploadFileNotDeprecatedVar = uploadFileNotDeprecatedVar;
varBag.dEPRECATED_CheckFileTransferPluginVar = dEPRECATED_CheckFileTransferPluginVar;
varBag.checkFileTransferPluginVar = checkFileTransferPluginVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:h_ooK0QzFUaX7Eup5zomyQ:/ClientActionFlows.h_ooK0QzFUaX7Eup5zomyQ:6VSoZkaUSDdmEmbsT8BEJw", "FileTransferPlugin", "DEPRECATED_UploadFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:xly3AyotBESgFAE7uZLGfQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:npsQoXKLL02AXE67pll9tQ", callContext.id);
// Execute Action: CheckFileTransferPlugin
return FileTransferPluginController.default.checkFileTransferPlugin$Action(callContext).then(function (value) {
checkFileTransferPluginVar.value = value;
}).then(function () {
// Is FileTransfer defined?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:VohokJh6H0Wp_BYl1H5Sxw", callContext.id) && checkFileTransferPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:mX4dBEff+ki34h_hKrAt_A", callContext.id);
// Execute Action: UploadFileNotDeprecated
return FileTransferPluginController.default.uploadFile$Action(vars.value.serverURLInLocal, vars.value.fileURLInLocal, vars.value.mimeTypeInLocal, vars.value.fileKeyInLocal, vars.value.chunkedModeInLocal, new FileTransferPluginModel.HeaderList(), callContext).then(function (value) {
uploadFileNotDeprecatedVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:IUyUqFI8ykuGdmxgwMhdzg", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:nj0XxleKC0KIqYwwZtJkOQ", callContext.id) && ((vars.value.serverURLInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:bMcQFKiG8kq7vQiT6JPYAw", callContext.id);
// Execute Action: DEPRECATED_CheckFileTransferPlugin
return FileTransferPluginController.default.dEPRECATED_CheckFileTransferPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckFileTransferPluginVar.value = value;
}).then(function () {
// Is FileTransfer defined?
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:JzaKksB3lE6nAtjuwlilrA", callContext.id) && dEPRECATED_CheckFileTransferPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:PE5bLQrg1k++oYZ1_Bafag", callContext.id);
controller.safeExecuteJSNode(FileTransferPlugin_controller_DEPRECATED_UploadFile_UploadFileToServerJS, "UploadFileToServer", "DEPRECATED_UploadFile", {
ChunkedMode: OS.DataConversion.JSNodeParamConverter.to(vars.value.chunkedModeInLocal, OS.DataTypes.DataTypes.Boolean),
ServerURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.serverURLInLocal, OS.DataTypes.DataTypes.Text),
MimeType: OS.DataConversion.JSNodeParamConverter.to(vars.value.mimeTypeInLocal, OS.DataTypes.DataTypes.Text),
FileURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileURLInLocal, OS.DataTypes.DataTypes.Text),
FileKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileKeyInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:u1VwZNWl6UOK7IkdVutv8g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:nH7HHgbE8kCiMS3OCErWqg", callContext.id);
// Error.ErrorCode = DEPRECATED_CheckFileTransferPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = dEPRECATED_CheckFileTransferPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:nH7HHgbE8kCiMS3OCErWqg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DEPRECATED_CheckFileTransferPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = dEPRECATED_CheckFileTransferPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:iDh8dGW7N02ZaGiLnBhKZA", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Av2WT3_I_ka9ypy5Gf1aag", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Av2WT3_I_ka9ypy5Gf1aag", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "no server url passed"
outVars.value.errorOut.errorMessageAttr = "no server url passed";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:iDh8dGW7N02ZaGiLnBhKZA", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_UploadFile.DEPRECATED_UploadFile", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:UYnpRSVa8kuCV5O2dnx5WA", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:dC_LQg7X+kWDfHRXhLpjxA", callContext.id);
// Error.ErrorCode = "-1"
outVars.value.errorOut.errorCodeAttr = "-1";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:dC_LQg7X+kWDfHRXhLpjxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:fxybOymf5UW3VIKUaNikXw", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:h_ooK0QzFUaX7Eup5zomyQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:h_ooK0QzFUaX7Eup5zomyQ", callContext.id);
throw ex;

});
};
var controller = FileTransferPluginController.default;
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DEPRECATED_UploadFile$vars", [{
name: "ServerURL",
attrName: "serverURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileURL",
attrName: "fileURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "mimeType",
attrName: "mimeTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "fileKey",
attrName: "fileKeyInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "file";
}
}, {
name: "chunkedMode",
attrName: "chunkedModeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DEPRECATED_UploadFile$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FileTransferPluginController.default.clientActionProxies.dEPRECATED_UploadFile$Action = function (serverURLIn, fileURLIn, mimeTypeIn, fileKeyIn, chunkedModeIn) {
serverURLIn = (serverURLIn === undefined) ? "" : serverURLIn;
fileURLIn = (fileURLIn === undefined) ? "" : fileURLIn;
mimeTypeIn = (mimeTypeIn === undefined) ? "" : mimeTypeIn;
fileKeyIn = (fileKeyIn === undefined) ? "file" : fileKeyIn;
chunkedModeIn = (chunkedModeIn === undefined) ? false : chunkedModeIn;
return controller.executeActionInsideJSNode(FileTransferPluginController.default.dEPRECATED_UploadFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(serverURLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileURLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(mimeTypeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(chunkedModeIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: actionResults.errorOut
};
});
};
});
define("FileTransferPlugin.controller$DEPRECATED_UploadFile.UploadFileToServerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
require(["PluginManager"], function(module) {
    var scope =  window.filetransferUploadSync.getScope();
    if (!scope) return;
    // TODO: use the callbacks you need to use within the plugin specific javascript code,
    // like in the example below
    //      scope.myCallback("myparameter");



    var options = new FileUploadOptions();
    options.fileKey = $parameters.FileKey;
    options.fileName = $parameters.FileURL.substr($parameters.FileURL.lastIndexOf('/') + 1);
    options.mimeType = $parameters.MimeType;
    options.chunkedMode = $parameters.ChunkedMode;

    var ft = new FileTransfer();
    ft.onprogress = scope.uploadCallback.uploadProgress;


    ft.upload($parameters.FileURL, encodeURI($parameters.ServerURL), scope.uploadCallback.uploadComplete, scope.uploadCallback.uploadError, options);
});
};
});

define("FileTransferPlugin.controller$DEPRECATED_UploadFileWithHeaders", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller", "CommonPlugin.model", "FileTransferPlugin.controller$DEPRECATED_UploadFileWithHeaders.UploadFileToServerJS", "FileTransferPlugin.model$HeaderList", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin", "FileTransferPlugin.controller$UploadFile", "CommonPlugin.model$WarningRec", "FileTransferPlugin.controller$CheckFileTransferPlugin", "FileTransferPlugin.controller$DEPRECATED_CheckFileTransferPlugin"], function (exports, OutSystems, FileTransferPluginModel, FileTransferPluginController, CommonPluginModel, FileTransferPlugin_controller_DEPRECATED_UploadFileWithHeaders_UploadFileToServerJS) {
var OS = OutSystems.Internal;
FileTransferPluginController.default.dEPRECATED_UploadFileWithHeaders$Action = function (serverURLIn, fileURLIn, mimeTypeIn, fileKeyIn, chunkedModeIn, headersIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.DEPRECATED_UploadFileWithHeaders$vars"))());
vars.value.serverURLInLocal = serverURLIn;
vars.value.fileURLInLocal = fileURLIn;
vars.value.mimeTypeInLocal = mimeTypeIn;
vars.value.fileKeyInLocal = fileKeyIn;
vars.value.chunkedModeInLocal = chunkedModeIn;
vars.value.headersInLocal = headersIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var uploadFileNotDeprecatedVar = new OS.DataTypes.VariableHolder();
var checkFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var serializeHeadersListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.DEPRECATED_UploadFileWithHeaders$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.uploadFileNotDeprecatedVar = uploadFileNotDeprecatedVar;
varBag.checkFileTransferPluginVar = checkFileTransferPluginVar;
varBag.dEPRECATED_CheckFileTransferPluginVar = dEPRECATED_CheckFileTransferPluginVar;
varBag.serializeHeadersListVar = serializeHeadersListVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:TV_3HIJY60KhZSesJjeyjA:/ClientActionFlows.TV_3HIJY60KhZSesJjeyjA:GMR+vyW+p7kDin8W2Ed1Tg", "FileTransferPlugin", "DEPRECATED_UploadFileWithHeaders", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:dYoZMZjyFkqvh5StUloz6w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:861kkQS9lkao9W2DcvTwGw", callContext.id);
// Execute Action: CheckFileTransferPlugin
return FileTransferPluginController.default.checkFileTransferPlugin$Action(callContext).then(function (value) {
checkFileTransferPluginVar.value = value;
}).then(function () {
// Is FileTransfer defined?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:9O9rQsS2pkO2OtQgcZQiQw", callContext.id) && checkFileTransferPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:7calixZNPEm0kBJn2pOeXQ", callContext.id);
// Execute Action: UploadFileNotDeprecated
return FileTransferPluginController.default.uploadFile$Action(vars.value.serverURLInLocal, vars.value.fileURLInLocal, vars.value.mimeTypeInLocal, vars.value.fileKeyInLocal, vars.value.chunkedModeInLocal, vars.value.headersInLocal, callContext).then(function (value) {
uploadFileNotDeprecatedVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DV1Pm4JPH0O3tcdCASoByg", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:iiio5IixAki30BaibWv_uQ", callContext.id) && ((vars.value.serverURLInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:A3DGw9wxp0q72xxnm4H+hg", callContext.id);
// Execute Action: DEPRECATED_CheckFileTransferPlugin
return FileTransferPluginController.default.dEPRECATED_CheckFileTransferPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckFileTransferPluginVar.value = value;
}).then(function () {
// Is FileTransfer defined?
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:EI7HTn4wGUyV5wdXxDqCmg", callContext.id) && dEPRECATED_CheckFileTransferPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:pi2VJuNVrUeWGo9D6rEZ3A", callContext.id);
// JSON Serialize: SerializeHeadersList
serializeHeadersListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.headersInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:5LyfuB+Lh06Ts+5daP6sMQ", callContext.id);
controller.safeExecuteJSNode(FileTransferPlugin_controller_DEPRECATED_UploadFileWithHeaders_UploadFileToServerJS, "UploadFileToServer", "DEPRECATED_UploadFileWithHeaders", {
MimeType: OS.DataConversion.JSNodeParamConverter.to(vars.value.mimeTypeInLocal, OS.DataTypes.DataTypes.Text),
Headers: OS.DataConversion.JSNodeParamConverter.to(serializeHeadersListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
FileKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileKeyInLocal, OS.DataTypes.DataTypes.Text),
ServerURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.serverURLInLocal, OS.DataTypes.DataTypes.Text),
ChunkedMode: OS.DataConversion.JSNodeParamConverter.to(vars.value.chunkedModeInLocal, OS.DataTypes.DataTypes.Boolean),
FileURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileURLInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:cLC36tCBmEuKuPTvkDM79Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:JMRzNEN44Ei_2YJkigzshA", callContext.id);
// Error.ErrorCode = DEPRECATED_CheckFileTransferPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = dEPRECATED_CheckFileTransferPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:JMRzNEN44Ei_2YJkigzshA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DEPRECATED_CheckFileTransferPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = dEPRECATED_CheckFileTransferPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:u6Pac6PeqEm2NNVVkXCmMQ", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:fdUEVaKFUECF955NdfMUXA", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:fdUEVaKFUECF955NdfMUXA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "no server url passed"
outVars.value.errorOut.errorMessageAttr = "no server url passed";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:RshdociXMUC+VxgBJdIixA", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_UploadFileWithHeaders.DEPRECATED_UploadFileWithHeaders", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:GBkU9PH+gEC7tho6n5yKGg", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Hwl86sZ8T0CZLpWmhaOacA", callContext.id);
// Error.ErrorCode = "-1"
outVars.value.errorOut.errorCodeAttr = "-1";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Hwl86sZ8T0CZLpWmhaOacA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:ifgzXOF6bk2isW+TI5DueA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:TV_3HIJY60KhZSesJjeyjA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:TV_3HIJY60KhZSesJjeyjA", callContext.id);
throw ex;

});
};
var controller = FileTransferPluginController.default;
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DEPRECATED_UploadFileWithHeaders$vars", [{
name: "ServerURL",
attrName: "serverURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileURL",
attrName: "fileURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "mimeType",
attrName: "mimeTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "text/plain";
}
}, {
name: "fileKey",
attrName: "fileKeyInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "file";
}
}, {
name: "chunkedMode",
attrName: "chunkedModeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Headers",
attrName: "headersInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new FileTransferPluginModel.HeaderList();
},
complexType: FileTransferPluginModel.HeaderList
}]);
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DEPRECATED_UploadFileWithHeaders$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FileTransferPluginController.default.clientActionProxies.dEPRECATED_UploadFileWithHeaders$Action = function (serverURLIn, fileURLIn, mimeTypeIn, fileKeyIn, chunkedModeIn, headersIn) {
serverURLIn = (serverURLIn === undefined) ? "" : serverURLIn;
fileURLIn = (fileURLIn === undefined) ? "" : fileURLIn;
mimeTypeIn = (mimeTypeIn === undefined) ? "text/plain" : mimeTypeIn;
fileKeyIn = (fileKeyIn === undefined) ? "file" : fileKeyIn;
chunkedModeIn = (chunkedModeIn === undefined) ? false : chunkedModeIn;
headersIn = (headersIn === undefined) ? new FileTransferPluginModel.HeaderList() : headersIn;
return controller.executeActionInsideJSNode(FileTransferPluginController.default.dEPRECATED_UploadFileWithHeaders$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(serverURLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileURLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(mimeTypeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(chunkedModeIn, OS.DataTypes.DataTypes.Boolean), headersIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: actionResults.errorOut
};
});
};
});
define("FileTransferPlugin.controller$DEPRECATED_UploadFileWithHeaders.UploadFileToServerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
require(["PluginManager"], function(module) {
    var scope =  window.filetransferUploadSync.getScope();
    if (!scope) return;

    var options = new FileUploadOptions();
    options.fileKey = $parameters.FileKey;
    options.fileName = $parameters.FileURL.substr($parameters.FileURL.lastIndexOf('/') + 1);
    options.mimeType = $parameters.MimeType;
    options.chunkedMode = $parameters.ChunkedMode;
    
    var headersList = JSON.parse($parameters.Headers);
    var headers = {};
    headersList.forEach(function(obj){
        if(obj.hasOwnProperty("name") && obj.hasOwnProperty("value")) {
            Object.defineProperty(headers, obj.name, {
                value : obj.value,
                enumerable: true
            });
        }
    });
    var ft = new FileTransfer();
    ft.onprogress = scope.uploadCallback.uploadProgress;
    var paramHeaders = JSON.parse($parameters.Headers);
    options.headers = headers;

    ft.upload($parameters.FileURL, encodeURI($parameters.ServerURL), scope.uploadCallback.uploadComplete, scope.uploadCallback.uploadError, options);
});
};
});

define("FileTransferPlugin.controller$DownloadFile", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller", "CommonPlugin.model", "FileTransferPlugin.controller$DownloadFile.DownloadFileJS", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FileTransferPlugin.controller$CheckFileTransferPlugin", "FileTransferPlugin.model$HeaderList"], function (exports, OutSystems, FileTransferPluginModel, FileTransferPluginController, CommonPluginModel, FileTransferPlugin_controller_DownloadFile_DownloadFileJS) {
var OS = OutSystems.Internal;
FileTransferPluginController.default.downloadFile$Action = function (uRLIn, fileIn, headersIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.DownloadFile$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.fileInLocal = fileIn;
vars.value.headersInLocal = headersIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var serializeHeadersVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.DownloadFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkFileTransferPluginVar = checkFileTransferPluginVar;
varBag.serializeHeadersVar = serializeHeadersVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:TcpXJmt8JUuxQHErJ74DSw:/ClientActionFlows.TcpXJmt8JUuxQHErJ74DSw:8F4jeEKOVnSrTMxpa6+Q7g", "FileTransferPlugin", "DownloadFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:qlIphxGf1Eq2S2G0KXEH8w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:45Vvtdb59UW3ltuSW9aQjA", callContext.id) && ((vars.value.uRLInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:WEYkTzqc6UmDQg6jUi7btA", callContext.id);
// Execute Action: CheckFileTransferPlugin
return FileTransferPluginController.default.checkFileTransferPlugin$Action(callContext).then(function (value) {
checkFileTransferPluginVar.value = value;
}).then(function () {
// Is FileTransfer defined?
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:RL6B4ZV3vE6t_EYyGOGs0g", callContext.id) && checkFileTransferPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:lYjmG5sYvEOg8O8sszL+YQ", callContext.id);
// JSON Serialize: SerializeHeaders
serializeHeadersVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.headersInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:b9ZKyUzFz0Gizw8hZRQ2Vg", callContext.id);
controller.safeExecuteJSNode(FileTransferPlugin_controller_DownloadFile_DownloadFileJS, "DownloadFile", "DownloadFile", {
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileInLocal, OS.DataTypes.DataTypes.Text),
HeaderList: OS.DataConversion.JSNodeParamConverter.to(serializeHeadersVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:d1KPbEVoQkCs1wwHGFgP4Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:MMKgSoEaVESXNo09qLy3cQ", callContext.id);
// Error.ErrorCode = "OS-PLUG-FLTR-0003"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-FLTR-0003";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:MMKgSoEaVESXNo09qLy3cQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not present or not loaded"
outVars.value.errorOut.errorMessageAttr = "Plugin not present or not loaded";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:tl6BiQBVEkOPegIA6_LrPw", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DLQ6IpDLtkaa8h+r_1lFow", callContext.id);
// Error.ErrorCode = "OS-PLUG-FLTR-0005"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-FLTR-0005";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DLQ6IpDLtkaa8h+r_1lFow", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "no server url passed"
outVars.value.errorOut.errorMessageAttr = "no server url passed";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:+s4Zee3sEE+lDMfEV47Dgw", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("DownloadFile.DownloadFile", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:eE+kkf8askO0b27vnJ5kew", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:avpTdVLtjky0ZrIqo7Gocg", callContext.id);
// Error.ErrorCode = "OS-PLUG-FLTR-0012"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-FLTR-0012";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:avpTdVLtjky0ZrIqo7Gocg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:QleLeq979UulSTBIQtNLxQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:TcpXJmt8JUuxQHErJ74DSw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:TcpXJmt8JUuxQHErJ74DSw", callContext.id);
throw ex;

});
};
var controller = FileTransferPluginController.default;
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DownloadFile$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "File",
attrName: "fileInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Headers",
attrName: "headersInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new FileTransferPluginModel.HeaderList();
},
complexType: FileTransferPluginModel.HeaderList
}]);
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.DownloadFile$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FileTransferPluginController.default.clientActionProxies.downloadFile$Action = function (uRLIn, fileIn, headersIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
fileIn = (fileIn === undefined) ? "" : fileIn;
headersIn = (headersIn === undefined) ? new FileTransferPluginModel.HeaderList() : headersIn;
return controller.executeActionInsideJSNode(FileTransferPluginController.default.downloadFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileIn, OS.DataTypes.DataTypes.Text), headersIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: actionResults.errorOut
};
});
};
});
define("FileTransferPlugin.controller$DownloadFile.DownloadFileJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const headersList = JSON.parse($parameters.HeaderList);
let headers = {};
headersList.forEach(function(obj){
    if(obj.hasOwnProperty("name") && obj.hasOwnProperty("value")) {
        Object.defineProperty(headers, obj.name, {
            value : obj.value,
            enumerable: true
        });
    }
});

const options = {
    url: $parameters.URL, 
    headers, 
    path: $parameters.FileName,
    progress: true
}

if (OSFileTransferPluginWrapper.Instance.isPWA()) { 
    OSFileTransferPluginWrapper.Instance.downloadFile(options, undefined);
} else {
    require(["PluginManager"], function(module) {
        const scope = window.filetransferDownloadSync.getScope();
        OSFileTransferPluginWrapper.Instance.downloadFile(options, scope);
    });
}

};
});

define("FileTransferPlugin.controller$PluginIsLoaded", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller", "CommonPlugin.model", "FileTransferPlugin.controller$PluginIsLoaded.CheckPluginJS", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FileTransferPluginModel, FileTransferPluginController, CommonPluginModel, FileTransferPlugin_controller_PluginIsLoaded_CheckPluginJS) {
var OS = OutSystems.Internal;
FileTransferPluginController.default.pluginIsLoaded$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkPluginJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.PluginIsLoaded$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkPluginJSResult = checkPluginJSResult;
varBag.outVars = outVars;
try {try {OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:srjdhgSIQE2CVinfE4lUWQ:/ClientActionFlows.srjdhgSIQE2CVinfE4lUWQ:euz1kYOU3kaxfzE4kFDNrA", "FileTransferPlugin", "PluginIsLoaded", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:uYx+cny0gEm10SEr7WX8pA", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:MAVXZH1ai0a0wvIJSqWXmA", callContext.id);
checkPluginJSResult.value = controller.safeExecuteJSNode(FileTransferPlugin_controller_PluginIsLoaded_CheckPluginJS, "CheckPlugin", "PluginIsLoaded", {
PluginExists: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileTransferPlugin.PluginIsLoaded$checkPluginJSResult"))();
jsNodeResult.pluginExistsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.PluginExists, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:+0l0Ql25dEmIjiDJCioSOA", callContext.id);
// PluginIsLoaded = CheckPlugin.PluginExists
outVars.value.pluginIsLoadedOut = checkPluginJSResult.value.pluginExistsOut;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:MxPMuSzQok+zDzG0ptcCUw", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("PluginIsLoaded.PluginIsLoaded", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:EzuvepiHIUOrJTmYAAm99Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:RIPIyxrg4UuwStxfrM60og", callContext.id);
// PluginIsLoaded = False
outVars.value.pluginIsLoadedOut = false;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:RIPIyxrg4UuwStxfrM60og", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:RIPIyxrg4UuwStxfrM60og", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:GBIQlEySNkmmyztd0c1dEQ", callContext.id);
return outVars.value;

}

throw ex;
})();
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:srjdhgSIQE2CVinfE4lUWQ", callContext.id);
}

};
var controller = FileTransferPluginController.default;
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.PluginIsLoaded$checkPluginJSResult", [{
name: "PluginExists",
attrName: "pluginExistsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.PluginIsLoaded$outVars", [{
name: "PluginIsLoaded",
attrName: "pluginIsLoadedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FileTransferPluginController.default.clientActionProxies.pluginIsLoaded$Action = function () {
return controller.executeActionInsideJSNode(FileTransferPluginController.default.pluginIsLoaded$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
PluginIsLoaded: OS.DataConversion.JSNodeParamConverter.to(actionResults.pluginIsLoadedOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileTransferPlugin.controller$PluginIsLoaded.CheckPluginJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (typeof(cordova) !== "undefined" && typeof(cordova.plugins) !== "undefined") {
    if(typeof(cordova.plugins.FileTransfer) !== "undefined") {
        $parameters.PluginExists = true
        return
    }
    if(typeof(cordova.plugins.OSFileTransfer) !== "undefined") {
        $parameters.PluginExists = true
    } 
} 
else if(typeof(FileTransfer) === "undefined") {
    $parameters.PluginExists = false;
}
else {
    $parameters.PluginExists = true;
}
};
});

define("FileTransferPlugin.controller$UploadFile", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller", "CommonPlugin.model", "FileTransferPlugin.controller$UploadFile.UploadFileToServerJS", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FileTransferPlugin.controller$CheckFileTransferPlugin", "FileTransferPlugin.model$HeaderList"], function (exports, OutSystems, FileTransferPluginModel, FileTransferPluginController, CommonPluginModel, FileTransferPlugin_controller_UploadFile_UploadFileToServerJS) {
var OS = OutSystems.Internal;
FileTransferPluginController.default.uploadFile$Action = function (uRLIn, fileIn, mimeTypeIn, fileKeyIn, chunkedModeIn, headersIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.UploadFile$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.fileInLocal = fileIn;
vars.value.mimeTypeInLocal = mimeTypeIn;
vars.value.fileKeyInLocal = fileKeyIn;
vars.value.chunkedModeInLocal = chunkedModeIn;
vars.value.headersInLocal = headersIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var serializeHeadersListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.UploadFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkFileTransferPluginVar = checkFileTransferPluginVar;
varBag.serializeHeadersListVar = serializeHeadersListVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:NWGPlfpY+kunt7Pm4xlPsQ:/ClientActionFlows.NWGPlfpY+kunt7Pm4xlPsQ:MHPY2CepQZujV3PzC13BKA", "FileTransferPlugin", "UploadFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:EmKnaq1jFUqZWOtXOLFN8A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:OIJ0EJ0sM0iPF_P5p0Yy1A", callContext.id) && ((vars.value.uRLInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:s5KnjQkT1E2d6a048aBe7w", callContext.id);
// Execute Action: CheckFileTransferPlugin
return FileTransferPluginController.default.checkFileTransferPlugin$Action(callContext).then(function (value) {
checkFileTransferPluginVar.value = value;
}).then(function () {
// Is FileTransfer defined?
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:YSCNohNTBESBuQX3mXQQBA", callContext.id) && checkFileTransferPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:AB_Hpm_NVUui5Wwhh9ISpw", callContext.id);
// JSON Serialize: SerializeHeadersList
serializeHeadersListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.headersInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:1PZV_nAvp0SNLs_MT_rzHQ", callContext.id);
controller.safeExecuteJSNode(FileTransferPlugin_controller_UploadFile_UploadFileToServerJS, "UploadFileToServer", "UploadFile", {
ChunkedMode: OS.DataConversion.JSNodeParamConverter.to(vars.value.chunkedModeInLocal, OS.DataTypes.DataTypes.Boolean),
Headers: OS.DataConversion.JSNodeParamConverter.to(serializeHeadersListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
MimeType: OS.DataConversion.JSNodeParamConverter.to(vars.value.mimeTypeInLocal, OS.DataTypes.DataTypes.Text),
FileURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileInLocal, OS.DataTypes.DataTypes.Text),
ServerURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
FileKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileKeyInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:fETHIcDxx0C+dnmxl1n13Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:htTQcMx3DEixksuIlwfKLw", callContext.id);
// Error.ErrorCode = "OS-PLUG-FLTR-0003"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-FLTR-0003";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:htTQcMx3DEixksuIlwfKLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not present or not loaded"
outVars.value.errorOut.errorMessageAttr = "Plugin not present or not loaded";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:KLG8XkWomEex2tnyGPlhxg", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:w1JwUT5hLkWA2Rc2LWn48Q", callContext.id);
// Error.ErrorCode = "OS-PLUG-FLTR-0005"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-FLTR-0005";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:w1JwUT5hLkWA2Rc2LWn48Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "no server url passed"
outVars.value.errorOut.errorMessageAttr = "no server url passed";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:4zm1PnJElEK+PXqF_Hmfaw", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("UploadFile.UploadFile", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:UuTKILHXYU65ZIrleqESWg", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:pCRP0MWVWkSflKPeP4N_wA", callContext.id);
// Error.ErrorCode = "OS-PLUG-FLTR-0012"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-FLTR-0012";
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:pCRP0MWVWkSflKPeP4N_wA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:LyEejSoP4kuqKo4LsHCHNA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:NWGPlfpY+kunt7Pm4xlPsQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:NWGPlfpY+kunt7Pm4xlPsQ", callContext.id);
throw ex;

});
};
var controller = FileTransferPluginController.default;
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.UploadFile$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "File",
attrName: "fileInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "mimeType",
attrName: "mimeTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "text/plain";
}
}, {
name: "fileKey",
attrName: "fileKeyInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "file";
}
}, {
name: "chunkedMode",
attrName: "chunkedModeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Headers",
attrName: "headersInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new FileTransferPluginModel.HeaderList();
},
complexType: FileTransferPluginModel.HeaderList
}]);
FileTransferPluginController.default.constructor.registerVariableGroupType("FileTransferPlugin.UploadFile$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FileTransferPluginController.default.clientActionProxies.uploadFile$Action = function (uRLIn, fileIn, mimeTypeIn, fileKeyIn, chunkedModeIn, headersIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
fileIn = (fileIn === undefined) ? "" : fileIn;
mimeTypeIn = (mimeTypeIn === undefined) ? "text/plain" : mimeTypeIn;
fileKeyIn = (fileKeyIn === undefined) ? "file" : fileKeyIn;
chunkedModeIn = (chunkedModeIn === undefined) ? false : chunkedModeIn;
headersIn = (headersIn === undefined) ? new FileTransferPluginModel.HeaderList() : headersIn;
return controller.executeActionInsideJSNode(FileTransferPluginController.default.uploadFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(mimeTypeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(chunkedModeIn, OS.DataTypes.DataTypes.Boolean), headersIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: actionResults.errorOut
};
});
};
});
define("FileTransferPlugin.controller$UploadFile.UploadFileToServerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const headersList = JSON.parse($parameters.Headers);
let headers = {};
headersList.forEach(function(obj){
    if(obj.hasOwnProperty("name") && obj.hasOwnProperty("value")) {
        Object.defineProperty(headers, obj.name, {
            value : obj.value,
            enumerable: true
        });
    }
});

const options = {
    url: $parameters.ServerURL,
    path: $parameters.FileURL,
    fileKey: $parameters.FileKey,
    mimeType: $parameters.MimeType,
    chunkedMode: $parameters.ChunkedMode,
    headers: headers,
    progress: true
}

if (OSFileTransferPluginWrapper.Instance.isPWA()) { 
    OSFileTransferPluginWrapper.Instance.uploadFile(options, undefined);
} else {
    require(["PluginManager"], function(module) {
        const scope = window.filetransferUploadSync.getScope();
        OSFileTransferPluginWrapper.Instance.uploadFile(options, scope);
    });
}

};
});

define("FileTransferPlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller$debugger"], function (exports, OutSystems, FileTransferPluginModel, FileTransferPlugin_Controller_debugger) {
var OS = OutSystems.Internal;
var FileTransferPluginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return FileTransferPluginController.default.defaultTimeout;
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
FileTransferPluginController.default = new Controller(null, "FileTransferPlugin");
});
define("FileTransferPlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"zL8mcoG2uEOCa430Q5RYsw": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qz1Nhthl+karPXJjd4D10A": {
getter: function (varBag, idService) {
return varBag.vars.value.fileSystemURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"psIYc2X2F0KXPdxyLLN+WA": {
getter: function (varBag, idService) {
return varBag.vars.value.headersInLocal;
}
},
"8DzXqCUDnkub+vuHz4qOnQ": {
getter: function (varBag, idService) {
return varBag.vars.value.fileNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lob_mLhoSESSG9CtB+Zicg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"fabRu1fNakm+Y_4M3xCckg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"xgsOBVDZa0up4ZhPP0AB_g": {
getter: function (varBag, idService) {
return varBag.checkFileTransferPluginVar.value;
}
},
"dh8MVx44tEKJIRxhWzmQEA": {
getter: function (varBag, idService) {
return varBag.downloadFileNotDeprecatedVar.value;
}
},
"OVLIX2V44kmZ_TnexyI+IQ": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFileTransferPluginVar.value;
}
},
"1yeAa9tLhUWc1jL6+Z0bvw": {
getter: function (varBag, idService) {
return varBag.serializeHeadersVar.value;
}
},
"fn+YQUSCXk6Fyq0h43ImNA": {
getter: function (varBag, idService) {
return varBag.downloadFileJSResult.value;
}
},
"Y0ZHrW1ud0unPMkdO6b6Ag": {
getter: function (varBag, idService) {
return varBag.downloadFilePWAJSResult.value;
}
},
"xp0TBmqJrE2HeNo5axQGJA": {
getter: function (varBag, idService) {
return varBag.vars.value.serverURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VGaITJoG3UiRYgtjDSsPgw": {
getter: function (varBag, idService) {
return varBag.vars.value.fileURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fAJPRve74kCExB8EZAUipw": {
getter: function (varBag, idService) {
return varBag.vars.value.mimeTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NNfemNkGsUCqazt31egEhw": {
getter: function (varBag, idService) {
return varBag.vars.value.fileKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"S4mmGzvKNEC136oY9AKSJg": {
getter: function (varBag, idService) {
return varBag.vars.value.chunkedModeInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0GkqyYJnLEitXhRo3NmwEg": {
getter: function (varBag, idService) {
return varBag.vars.value.headersInLocal;
}
},
"9m0w3cdec06rU2NvnnIs7Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"GBkU9PH+gEC7tho6n5yKGg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"7calixZNPEm0kBJn2pOeXQ": {
getter: function (varBag, idService) {
return varBag.uploadFileNotDeprecatedVar.value;
}
},
"861kkQS9lkao9W2DcvTwGw": {
getter: function (varBag, idService) {
return varBag.checkFileTransferPluginVar.value;
}
},
"A3DGw9wxp0q72xxnm4H+hg": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFileTransferPluginVar.value;
}
},
"pi2VJuNVrUeWGo9D6rEZ3A": {
getter: function (varBag, idService) {
return varBag.serializeHeadersListVar.value;
}
},
"5LyfuB+Lh06Ts+5daP6sMQ": {
getter: function (varBag, idService) {
return varBag.uploadFileToServerJSResult.value;
}
},
"qEzZKsUOGE+FORA_g3FpcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sHW2eR4jk0SbhH_Dnuocew": {
getter: function (varBag, idService) {
return varBag.vars.value.fileInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hlKvFv8xakyNWWQ1hca_yw": {
getter: function (varBag, idService) {
return varBag.vars.value.headersInLocal;
}
},
"R+psIqpiKE+5FRO7654kkA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"eE+kkf8askO0b27vnJ5kew": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"WEYkTzqc6UmDQg6jUi7btA": {
getter: function (varBag, idService) {
return varBag.checkFileTransferPluginVar.value;
}
},
"lYjmG5sYvEOg8O8sszL+YQ": {
getter: function (varBag, idService) {
return varBag.serializeHeadersVar.value;
}
},
"b9ZKyUzFz0Gizw8hZRQ2Vg": {
getter: function (varBag, idService) {
return varBag.downloadFileJSResult.value;
}
},
"QldfLjzkQ06mjaFRDjZZbA": {
getter: function (varBag, idService) {
return varBag.vars.value.serverURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"g25SQseTLUOEUpOYD4QLLw": {
getter: function (varBag, idService) {
return varBag.vars.value.fileURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6c2BU2e+EUWhbZ7i70ewgA": {
getter: function (varBag, idService) {
return varBag.vars.value.mimeTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HUI5cypzUUGthXnTdV5tvw": {
getter: function (varBag, idService) {
return varBag.vars.value.fileKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"osar2PvXT0GUUW+FOboMqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.chunkedModeInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"geVAX9rE9kycwFWIRxoUog": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"UYnpRSVa8kuCV5O2dnx5WA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"mX4dBEff+ki34h_hKrAt_A": {
getter: function (varBag, idService) {
return varBag.uploadFileNotDeprecatedVar.value;
}
},
"bMcQFKiG8kq7vQiT6JPYAw": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFileTransferPluginVar.value;
}
},
"npsQoXKLL02AXE67pll9tQ": {
getter: function (varBag, idService) {
return varBag.checkFileTransferPluginVar.value;
}
},
"PE5bLQrg1k++oYZ1_Bafag": {
getter: function (varBag, idService) {
return varBag.uploadFileToServerJSResult.value;
}
},
"ET4x2gp0Vk6FGmBxEqdEYw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"zkyqF8uxB0qFzOv3mhY62Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.isPWAOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tfSHrBBRZEqHH7vBJzWlKQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"mL+ELyll80SY0TZmaBEF+g": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"kK32A9yM1USZWsDcmuXfBw": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"vkLtG2d6GEaVBic4MzgklQ": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"2E_A6iGw+UWRppqoRXhaWw": {
getter: function (varBag, idService) {
return varBag.checkPluginJSResult.value;
}
},
"pdkt9ZQWkESd_j8RYIH_lw": {
getter: function (varBag, idService) {
return varBag.checkPWAJSResult.value;
}
},
"68XqHxYhJ0mBOxV6kfMAVw": {
getter: function (varBag, idService) {
return varBag.outVars.value.pluginIsLoadedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"T6e54PtqI0qLjoTmOV9Hyw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"EzuvepiHIUOrJTmYAAm99Q": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"MAVXZH1ai0a0wvIJSqWXmA": {
getter: function (varBag, idService) {
return varBag.checkPluginJSResult.value;
}
},
"fl9gJIMKZkWYIzYZzp0ZeA": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HuxqNVO+XE6ME8JA9gfnNQ": {
getter: function (varBag, idService) {
return varBag.vars.value.fileInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hJYjcwcu4ku7cpugHsFMSA": {
getter: function (varBag, idService) {
return varBag.vars.value.mimeTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hlFPd4XiXEOIgYUaBjxWDg": {
getter: function (varBag, idService) {
return varBag.vars.value.fileKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"l10mK4Qwb0GSravhDUuO9g": {
getter: function (varBag, idService) {
return varBag.vars.value.chunkedModeInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"CYiZe4q5j0aP7GkCF6w5oA": {
getter: function (varBag, idService) {
return varBag.vars.value.headersInLocal;
}
},
"PA8+OInjp0allKNUHNNieA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"UuTKILHXYU65ZIrleqESWg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"s5KnjQkT1E2d6a048aBe7w": {
getter: function (varBag, idService) {
return varBag.checkFileTransferPluginVar.value;
}
},
"AB_Hpm_NVUui5Wwhh9ISpw": {
getter: function (varBag, idService) {
return varBag.serializeHeadersListVar.value;
}
},
"1PZV_nAvp0SNLs_MT_rzHQ": {
getter: function (varBag, idService) {
return varBag.uploadFileToServerJSResult.value;
}
},
"hk0vrsWns0GoGfMsmBU8Sg": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"r+T0N9kH6kq+hZSDeASewQ": {
getter: function (varBag, idService) {
return varBag.vars.value.fileSystemURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gqwyIphBFk2RSiY0I42Rfw": {
getter: function (varBag, idService) {
return varBag.vars.value.fileNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"eQ0nmQoUU0GxTDT_ZKpZ3Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"_E_XUhh71kOMYL9DkE4gMg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"xve5GCPStUi0mcIQUx8AOQ": {
getter: function (varBag, idService) {
return varBag.downloadFileNotDeprecatedVar.value;
}
},
"5Xp_gyHYYUC2EGE2q+Lt0Q": {
getter: function (varBag, idService) {
return varBag.checkFileTransferPluginVar.value;
}
},
"c1h7hOFypkm1N+G8XN1Uvw": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFileTransferPluginVar.value;
}
},
"RWw0jL_KDkOWzDWjyJumIw": {
getter: function (varBag, idService) {
return varBag.downloadFileJSResult.value;
}
},
"e7zS4lbg5UegVhW8WoEDAw": {
getter: function (varBag, idService) {
return varBag.downloadFilePWAJSResult.value;
}
},
"+Vka1jIaV0C2TqaA6v0ZKg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vygkMm6LMEeHnjsv9hlD_w": {
getter: function (varBag, idService) {
return varBag.outVars.value.isPWAOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"J21RJO2rq0ecPjPjZefb1Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"LaLrCbCCrEGqlJVw_DcYug": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"Ie56IfYaiEqKc9pTXKTFvw": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"28akXmyU9kmQsMOcVxZd2w": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"iV6yj03cMkC3h1xRV4OlSw": {
getter: function (varBag, idService) {
return varBag.pluginIsLoadedVar.value;
}
},
"OV8k3+vJjEmh+_F_AJDWSw": {
getter: function (varBag, idService) {
return varBag.checkPWAJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
