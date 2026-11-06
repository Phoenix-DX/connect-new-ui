define("FilePlugin.controller$AppendFile", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$AppendFile.AppendJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_AppendFile_AppendJS) {
var OS = OutSystems.Internal;
FilePluginController.default.appendFile$Action = function (pathIn, binaryDataIn, directoryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.AppendFile$vars"))());
vars.value.pathInLocal = pathIn;
vars.value.binaryDataInLocal = binaryDataIn;
vars.value.directoryInLocal = directoryIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var appendJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.AppendFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.appendJSResult = appendJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:+nekZLbFR0CnZYCX9M0B7w:/ClientActionFlows.+nekZLbFR0CnZYCX9M0B7w:XydKbnwmXFpveYBvJSu3CQ", "FilePlugin", "AppendFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:qdH_Ot81A0OG3HpQT3RVlA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:mrjoWKWkZkO6aAn2OadjKw", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:VUD8FFjQv0OWQHin5uSbow", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:fxr2pIygjE+wOcTP1XexGg", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_AppendFile_AppendJS, "Append", "AppendFile", {
Data: OS.DataConversion.JSNodeParamConverter.to(vars.value.binaryDataInLocal, OS.DataTypes.DataTypes.BinaryData),
Directory: OS.DataConversion.JSNodeParamConverter.to(vars.value.directoryInLocal, OS.DataTypes.DataTypes.Text),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Sucess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.AppendFile$appendJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.sucessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Sucess, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
appendJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:SgISd6KK0UasVANS_Qatcw", callContext.id);
// Success = Append.Sucess
outVars.value.successOut = appendJSResult.value.sucessOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:SgISd6KK0UasVANS_Qatcw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Append.ErrorCode
outVars.value.errorOut.errorCodeAttr = appendJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:SgISd6KK0UasVANS_Qatcw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Append.ErrorMessage
outVars.value.errorOut.errorMessageAttr = appendJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ziyXNAdqMkGC1uWi+p4mwQ", callContext.id);
});
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:XfPxfKZKI0Scexrts6QoEw", callContext.id);
// Error = CheckFilePlugin.Error
outVars.value.errorOut = checkFilePluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:XfPxfKZKI0Scexrts6QoEw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning = CheckFilePlugin.Warning
outVars.value.warningOut = checkFilePluginVar.value.warningOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:CMGK13q0+E6+cnJzMD5VEA", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:+nekZLbFR0CnZYCX9M0B7w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:+nekZLbFR0CnZYCX9M0B7w", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.AppendFile$vars", [{
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "BinaryData",
attrName: "binaryDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}, {
name: "Directory",
attrName: "directoryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.AppendFile$appendJSResult", [{
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
name: "Sucess",
attrName: "sucessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.AppendFile$outVars", [{
name: "Success",
attrName: "successOut",
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
FilePluginController.default.clientActionProxies.appendFile$Action = function (pathIn, binaryDataIn, directoryIn) {
pathIn = (pathIn === undefined) ? "" : pathIn;
binaryDataIn = (binaryDataIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : binaryDataIn;
directoryIn = (directoryIn === undefined) ? "" : directoryIn;
return controller.executeActionInsideJSNode(FilePluginController.default.appendFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(binaryDataIn, OS.DataTypes.DataTypes.BinaryData), directoryIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FilePlugin.controller$AppendFile.AppendJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = () => {
    $parameters.Sucess = true;
    $resolve();
}

const onError = (error) => {
    $parameters.Sucess = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message

    $resolve();
}

let options = {
    path: $parameters.Path, 
    data: $parameters.Data
}
if($parameters.Directory != "") options.directory = $parameters.Directory

OSFilePluginWrapper.Instance.appendFile(onSuccess, onError, options)
});
};
});

define("FilePlugin.controller$CheckFilePlugin", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "FilePlugin.controller$CheckFilePlugin.CheckPluginJS", "CommonPlugin.controller$IsCordovaDefined", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec", "CommonPlugin.model$WarningRec"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginController, CommonPluginModel, FilePlugin_controller_CheckFilePlugin_CheckPluginJS) {
var OS = OutSystems.Internal;
FilePluginController.default.checkFilePlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var checkPluginJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.CheckFilePlugin$outVars"))());
varBag.callContext = callContext;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.checkPluginJSResult = checkPluginJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:Gw4AL_nxcUupAvlgr1Ugiw:/ClientActionFlows.Gw4AL_nxcUupAvlgr1Ugiw:73CFZHcYbvCneE2xmzIZcg", "FilePlugin", "CheckFilePlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:oKhJwC3v4kaAx55joMA3pA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:8YEz45s+a0O_KHgNVJY+5w", callContext.id);
// Execute Action: RequireScript
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/FilePlugin.wrapper.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ZqRTZs5xE0uaR0m_T3fr7w", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:embUIIW6vUWANmV+rax2WQ", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Dsgu+hAgl06ZSpCTm4V_5w", callContext.id);
checkPluginJSResult.value = controller.safeExecuteJSNode(FilePlugin_controller_CheckFilePlugin_CheckPluginJS, "CheckPlugin", "CheckFilePlugin", {
PluginExists: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessae: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
WarningCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
WarningMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.CheckFilePlugin$checkPluginJSResult"))();
jsNodeResult.pluginExistsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.PluginExists, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessaeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessae, OS.DataTypes.DataTypes.Text);
jsNodeResult.warningCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WarningCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.warningMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WarningMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Vm+ZKCVpdky89dSnglLLsA", callContext.id) && checkPluginJSResult.value.pluginExistsOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:OOiWYby4TkKZzepzFWZWkw", callContext.id);
// IsAvailable = CheckPlugin.PluginExists
outVars.value.isAvailableOut = checkPluginJSResult.value.pluginExistsOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:KIsiUK7x7EGfpAHXaCv49A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+ep+bpnGUkCopgOCycarhA", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+ep+bpnGUkCopgOCycarhA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning.WarningCode = CheckPlugin.WarningCode
outVars.value.warningOut.warningCodeAttr = checkPluginJSResult.value.warningCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+ep+bpnGUkCopgOCycarhA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Warning.WarningMessage = CheckPlugin.WarningMessage
outVars.value.warningOut.warningMessageAttr = checkPluginJSResult.value.warningMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+ep+bpnGUkCopgOCycarhA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorCode = CheckPlugin.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkPluginJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+ep+bpnGUkCopgOCycarhA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Error.ErrorMessage = CheckPlugin.ErrorMessae
outVars.value.errorOut.errorMessageAttr = checkPluginJSResult.value.errorMessaeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:KIsiUK7x7EGfpAHXaCv49A", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:1GQMBJUbTUyjMNA7c0tRXQ", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:1GQMBJUbTUyjMNA7c0tRXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = "OS-PLUG-FILE-0001"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-FILE-0001";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:1GQMBJUbTUyjMNA7c0tRXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "Cordova isn't defined."
outVars.value.errorOut.errorMessageAttr = "Cordova isn\'t defined.";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:SkTBD0wqGEmc_vwsPqH4tA", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:Gw4AL_nxcUupAvlgr1Ugiw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:Gw4AL_nxcUupAvlgr1Ugiw", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.CheckFilePlugin$checkPluginJSResult", [{
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
name: "ErrorMessae",
attrName: "errorMessaeOut",
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
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.CheckFilePlugin$outVars", [{
name: "IsAvailable",
attrName: "isAvailableOut",
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
FilePluginController.default.clientActionProxies.checkFilePlugin$Action = function () {
return controller.executeActionInsideJSNode(FilePluginController.default.checkFilePlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FilePlugin.controller$CheckFilePlugin.CheckPluginJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(typeof(cordova.plugins) !== "undefined" && (typeof(cordova.plugins.Filesystem) !== "undefined" && typeof(CapacitorUtils) !== "undefined")){
    $parameters.PluginExists = true
    return
}
if(typeof(cordova.plugins) !== "undefined" && typeof(cordova.file) !== "undefined"){
    $parameters.PluginExists = false
    $parameters.WarningCode = "OS-PLUG-FILE-0002"
    $parameters.WarningMessage = "The app is running with an old version of the plugin. Please create a new mobile package."
    return
} 

$parameters.ErrorCode = "OS-PLUG-FILE-0003"
$parameters.ErrorMessae = "The File plugin is not defined. Make sure the mobile package is valid."

};
});

define("FilePlugin.controller$Copy", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$Copy.CopyJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_Copy_CopyJS) {
var OS = OutSystems.Internal;
FilePluginController.default.copy$Action = function (fromPathIn, toPathIn, fromDirectoryIn, toDirectoryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.Copy$vars"))());
vars.value.fromPathInLocal = fromPathIn;
vars.value.toPathInLocal = toPathIn;
vars.value.fromDirectoryInLocal = fromDirectoryIn;
vars.value.toDirectoryInLocal = toDirectoryIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var copyJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.Copy$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.copyJSResult = copyJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:3jTYdI6SUE+PTBw3Jp6afA:/ClientActionFlows.3jTYdI6SUE+PTBw3Jp6afA:BzOtMPsPz1mekPJazlIyEg", "FilePlugin", "Copy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:zukSaSS5zU6xExeDtDpbrQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:UZg+WG0ClUC3dcB5j5utKg", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:8zVNWi_xKE65TGSgXNv4sQ", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:EY7+_QYe6U6gL2LnwbkaIw", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_Copy_CopyJS, "Copy", "Copy", {
FromPath: OS.DataConversion.JSNodeParamConverter.to(vars.value.fromPathInLocal, OS.DataTypes.DataTypes.Text),
ToPath: OS.DataConversion.JSNodeParamConverter.to(vars.value.toPathInLocal, OS.DataTypes.DataTypes.Text),
FromDirectory: OS.DataConversion.JSNodeParamConverter.to(vars.value.fromDirectoryInLocal, OS.DataTypes.DataTypes.Text),
ToDirectory: OS.DataConversion.JSNodeParamConverter.to(vars.value.toDirectoryInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Sucess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
URI: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.Copy$copyJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.sucessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Sucess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.uRIOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URI, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
copyJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ArFzbHvEbEK7RmaQlAXfxw", callContext.id);
// Success = Copy.Sucess
outVars.value.successOut = copyJSResult.value.sucessOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ArFzbHvEbEK7RmaQlAXfxw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Copy.ErrorCode
outVars.value.errorOut.errorCodeAttr = copyJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ArFzbHvEbEK7RmaQlAXfxw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Copy.ErrorMessage
outVars.value.errorOut.errorMessageAttr = copyJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ArFzbHvEbEK7RmaQlAXfxw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// URI = Copy.URI
outVars.value.uRIOut = copyJSResult.value.uRIOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:sgijOF05xkSMyIVeVC_Wzw", callContext.id);
});
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:EPcUoX2d0U+xSwGpVx3uTw", callContext.id);
// Error = CheckFilePlugin.Error
outVars.value.errorOut = checkFilePluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:EPcUoX2d0U+xSwGpVx3uTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning = CheckFilePlugin.Warning
outVars.value.warningOut = checkFilePluginVar.value.warningOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:eso6w1fYtE2tav4FN4e4FA", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:3jTYdI6SUE+PTBw3Jp6afA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:3jTYdI6SUE+PTBw3Jp6afA", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.Copy$vars", [{
name: "FromPath",
attrName: "fromPathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ToPath",
attrName: "toPathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FromDirectory",
attrName: "fromDirectoryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ToDirectory",
attrName: "toDirectoryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.Copy$copyJSResult", [{
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
name: "Sucess",
attrName: "sucessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "URI",
attrName: "uRIOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.Copy$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "URI",
attrName: "uRIOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
FilePluginController.default.clientActionProxies.copy$Action = function (fromPathIn, toPathIn, fromDirectoryIn, toDirectoryIn) {
fromPathIn = (fromPathIn === undefined) ? "" : fromPathIn;
toPathIn = (toPathIn === undefined) ? "" : toPathIn;
fromDirectoryIn = (fromDirectoryIn === undefined) ? "" : fromDirectoryIn;
toDirectoryIn = (toDirectoryIn === undefined) ? "" : toDirectoryIn;
return controller.executeActionInsideJSNode(FilePluginController.default.copy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fromPathIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(toPathIn, OS.DataTypes.DataTypes.Text), fromDirectoryIn, toDirectoryIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
URI: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRIOut, OS.DataTypes.DataTypes.Text),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FilePlugin.controller$Copy.CopyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (res) => {
    $parameters.Sucess = true;
    $parameters.URI = res.uri;
    $resolve();
}

const onError = (error) => {
    $parameters.Sucess = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}

let options = {
    from: $parameters.FromPath, 
    to: $parameters.ToPath
}

if($parameters.FromDirectory != "") options.directory = $parameters.FromDirectory;
if($parameters.ToDirectory != "") options.toDirectory = $parameters.ToDirectory;

OSFilePluginWrapper.Instance.copy(onSuccess, onError, options)
});
};
});

define("FilePlugin.controller$CreateDirectories", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$CreateDirectories.CreateDirectoryJS", "FilePlugin.controller$CreateDirectories.CreatePathDirectoryJS", "FilePlugin.controller$SplitString", "FilePlugin.controller$GetErrorMessage", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_CreateDirectories_CreateDirectoryJS, FilePlugin_controller_CreateDirectories_CreatePathDirectoryJS) {
var OS = OutSystems.Internal;
FilePluginController.default.createDirectories$Action = function (directoryIn, nameIn, pathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.CreateDirectories$vars"))());
vars.value.directoryInLocal = directoryIn;
vars.value.nameInLocal = nameIn;
vars.value.pathInLocal = pathIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var splitStringVar = new OS.DataTypes.VariableHolder();
var createDirectoryJSResult = new OS.DataTypes.VariableHolder();
var createPathDirectoryJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.CreateDirectories$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.splitStringVar = splitStringVar;
varBag.createDirectoryJSResult = createDirectoryJSResult;
varBag.createPathDirectoryJSResult = createPathDirectoryJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:q70HIEOx_kuAdnYDXoxj+Q:/ClientActionFlows.q70HIEOx_kuAdnYDXoxj+Q:HHtj+rYUNW406L9U73xL_Q", "FilePlugin", "CreateDirectories", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:tYeQS2D2EUuw9cPQAMmCzw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:yUBLTW28gEG0CNlLalbzUQ", callContext.id);
// RootDirectory = Directory
vars.value.rootDirectoryVar = vars.value.directoryInLocal;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ZvYhpZcLGkelT1FuB4mzdA", callContext.id);
// Execute Action: SplitString
splitStringVar.value = FilePluginController.default.splitString$Action(vars.value.pathInLocal, "/", callContext);

// Foreach SplitString.SubStrings
callContext.iterationContext.registerIterationStart(splitStringVar.value.subStringsOut);
return OS.Flow.tryFinally(function () {
var subStringsIterator = callContext.iterationContext.getIterator(splitStringVar.value.subStringsOut);
var subStringsIndex = 0;
return OS.Flow.whileAsync(function () {
return (OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:kXyFd5jNG0e627_wYlxWPQ", callContext.id) && (subStringsIndex < splitStringVar.value.subStringsOut.length));
}, function () {
subStringsIterator.currentRowNumber = subStringsIndex;
// Path Not Empty?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:pYZ9l285n0u0PYA1pc_h8g", callContext.id) && ((splitStringVar.value.subStringsOut.getItem(subStringsIndex.valueOf())) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:xkTjo9UjwECZslx7oN2ZUg", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_CreateDirectories_CreatePathDirectoryJS, "CreatePathDirectory", "CreateDirectories", {
Name: OS.DataConversion.JSNodeParamConverter.to(splitStringVar.value.subStringsOut.getItem(subStringsIndex.valueOf()), OS.DataTypes.DataTypes.Text),
RootDirectory: OS.DataConversion.JSNodeParamConverter.to(vars.value.rootDirectoryVar, OS.DataTypes.DataTypes.Object),
Uri: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Directory: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.CreateDirectories$createPathDirectoryJSResult"))();
jsNodeResult.uriOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Uri, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Integer);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.directoryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Directory, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
createPathDirectoryJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:UtphAVVztkG5_I7COUdCXA", callContext.id);
// RootDirectory = CreatePathDirectory.Directory
vars.value.rootDirectoryVar = createPathDirectoryJSResult.value.directoryOut;
});
}

}).then(function () {
subStringsIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(splitStringVar.value.subStringsOut);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:fDeQhl_Enk6F_xO+GxnWow", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_CreateDirectories_CreateDirectoryJS, "CreateDirectory", "CreateDirectories", {
RootDirectory: OS.DataConversion.JSNodeParamConverter.to(vars.value.rootDirectoryVar, OS.DataTypes.DataTypes.Object),
Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
Uri: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
CreatedDirectory: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.CreateDirectories$createDirectoryJSResult"))();
jsNodeResult.uriOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Uri, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.createdDirectoryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CreatedDirectory, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
createDirectoryJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:skXh3_a+ZUe3M9ZZ0dK4Ww", callContext.id);
// Error.ErrorCode = CreateDirectory.ErrorCode
outVars.value.errorOut.errorCodeAttr = createDirectoryJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:skXh3_a+ZUe3M9ZZ0dK4Ww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = CreateDirectory.ErrorMessage
outVars.value.errorOut.errorMessageAttr = createDirectoryJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:skXh3_a+ZUe3M9ZZ0dK4Ww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Uri = CreateDirectory.Uri
outVars.value.uriOut = createDirectoryJSResult.value.uriOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:skXh3_a+ZUe3M9ZZ0dK4Ww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// CreatedDirectory = CreateDirectory.CreatedDirectory
outVars.value.createdDirectoryOut = createDirectoryJSResult.value.createdDirectoryOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:w7tDrvBZpES8VBSBjUGIGw", callContext.id);
});
});
}).catch(function (ex) {
OS.Logger.trace("CreateDirectories.CreateDirectories", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:d_3jUmEyR0uEcacqttQjWw", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:05XttFuep0WNCb+44UwUWQ", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:05XttFuep0WNCb+44UwUWQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:2gvpeTR2bkuQ+Z3qz9D1lA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:q70HIEOx_kuAdnYDXoxj+Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:q70HIEOx_kuAdnYDXoxj+Q", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.CreateDirectories$vars", [{
name: "Directory",
attrName: "directoryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "RootDirectory",
attrName: "rootDirectoryVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.CreateDirectories$createDirectoryJSResult", [{
name: "Uri",
attrName: "uriOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
name: "CreatedDirectory",
attrName: "createdDirectoryOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.CreateDirectories$createPathDirectoryJSResult", [{
name: "Uri",
attrName: "uriOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
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
name: "Directory",
attrName: "directoryOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.CreateDirectories$outVars", [{
name: "Uri",
attrName: "uriOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
name: "CreatedDirectory",
attrName: "createdDirectoryOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
FilePluginController.default.clientActionProxies.createDirectories$Action = function (directoryIn, nameIn, pathIn) {
directoryIn = (directoryIn === undefined) ? null : directoryIn;
nameIn = (nameIn === undefined) ? "" : nameIn;
pathIn = (pathIn === undefined) ? "" : pathIn;
return controller.executeActionInsideJSNode(FilePluginController.default.createDirectories$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(directoryIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Uri: OS.DataConversion.JSNodeParamConverter.to(actionResults.uriOut, OS.DataTypes.DataTypes.Text),
Error: actionResults.errorOut,
CreatedDirectory: OS.DataConversion.JSNodeParamConverter.to(actionResults.createdDirectoryOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("FilePlugin.controller$CreateDirectories.CreateDirectoryJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.RootDirectory.getDirectory($parameters.Name, { create: true }, 
        function (dirEntry) {
            $parameters.ErrorCode = "0";
            $parameters.Uri = dirEntry.nativeURL;
            $parameters.CreatedDirectory = dirEntry;
            
            $resolve();
        }, 
        function (error) {
            $parameters.ErrorCode = error.code;
            $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
            
            $resolve();
        }
    );
});
};
});
define("FilePlugin.controller$CreateDirectories.CreatePathDirectoryJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.RootDirectory.getDirectory($parameters.Name, { create: true }, 
    function (dirEntry) {
        $parameters.ErrorCode = 0;
        $parameters.Uri = dirEntry.nativeURL;
        $parameters.Directory = dirEntry;
        
        $resolve();
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage = $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);
});
};
});

define("FilePlugin.controller$CreateDirectory", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$CreateDirectory.CreateDirectoryJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_CreateDirectory_CreateDirectoryJS) {
var OS = OutSystems.Internal;
FilePluginController.default.createDirectory$Action = function (pathIn, directoryIn, recursiveIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.CreateDirectory$vars"))());
vars.value.pathInLocal = pathIn;
vars.value.directoryInLocal = directoryIn;
vars.value.recursiveInLocal = recursiveIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var createDirectoryJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.CreateDirectory$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.createDirectoryJSResult = createDirectoryJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:K8BIuS8AgUyEh97wGmMwng:/ClientActionFlows.K8BIuS8AgUyEh97wGmMwng:+YytDXSsezKkly60gY9S9Q", "FilePlugin", "CreateDirectory", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:8USIMcGEtkWsFnknPDLbfQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:9KcmuMWsyEKKKSVKlkw71g", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7l3gcVjLSkW8oRfwXWsKbg", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:OIJU4pSifUaWilZxL0H5Lw", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_CreateDirectory_CreateDirectoryJS, "CreateDirectory", "CreateDirectory", {
Recursive: OS.DataConversion.JSNodeParamConverter.to(vars.value.recursiveInLocal, OS.DataTypes.DataTypes.Boolean),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
Directory: OS.DataConversion.JSNodeParamConverter.to(vars.value.directoryInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.CreateDirectory$createDirectoryJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
createDirectoryJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:s+vN2hdVUUCoWp1qzVU3ZQ", callContext.id);
// Success = CreateDirectory.Success
outVars.value.successOut = createDirectoryJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:s+vN2hdVUUCoWp1qzVU3ZQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = CreateDirectory.ErrorCode
outVars.value.errorOut.errorCodeAttr = createDirectoryJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:s+vN2hdVUUCoWp1qzVU3ZQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = CreateDirectory.ErrorMessage
outVars.value.errorOut.errorMessageAttr = createDirectoryJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:BnpLuaZJKUibl4AjDKHqww", callContext.id);
});
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Rp2ODvwAQUudwNIaQch7rg", callContext.id);
// Error = CheckFilePlugin.Error
outVars.value.errorOut = checkFilePluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Rp2ODvwAQUudwNIaQch7rg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning = CheckFilePlugin.Warning
outVars.value.warningOut = checkFilePluginVar.value.warningOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:BnpLuaZJKUibl4AjDKHqww", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:K8BIuS8AgUyEh97wGmMwng", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:K8BIuS8AgUyEh97wGmMwng", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.CreateDirectory$vars", [{
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Directory",
attrName: "directoryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Recursive",
attrName: "recursiveInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.CreateDirectory$createDirectoryJSResult", [{
name: "Success",
attrName: "successOut",
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
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.CreateDirectory$outVars", [{
name: "Success",
attrName: "successOut",
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
FilePluginController.default.clientActionProxies.createDirectory$Action = function (pathIn, directoryIn, recursiveIn) {
pathIn = (pathIn === undefined) ? "" : pathIn;
directoryIn = (directoryIn === undefined) ? "" : directoryIn;
recursiveIn = (recursiveIn === undefined) ? true : recursiveIn;
return controller.executeActionInsideJSNode(FilePluginController.default.createDirectory$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), directoryIn, OS.DataConversion.JSNodeParamConverter.from(recursiveIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FilePlugin.controller$CreateDirectory.CreateDirectoryJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = () => {
    $parameters.Success = true;
    $resolve();
}
const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}
const options = {
    path: $parameters.Path,
    directory: $parameters.Directory,
    recursive: $parameters.Recursive
}
OSFilePluginWrapper.Instance.mkdir(onSuccess, onError, options)
});
};
});

define("FilePlugin.controller$DeleteDirectory", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DeleteDirectory.DeleteDirectoryJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DeleteDirectory_DeleteDirectoryJS) {
var OS = OutSystems.Internal;
FilePluginController.default.deleteDirectory$Action = function (pathIn, directoryIn, recursiveIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DeleteDirectory$vars"))());
vars.value.pathInLocal = pathIn;
vars.value.directoryInLocal = directoryIn;
vars.value.recursiveInLocal = recursiveIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var deleteDirectoryJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DeleteDirectory$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.deleteDirectoryJSResult = deleteDirectoryJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:psulMcbJc0uXqj0y4mpl0w:/ClientActionFlows.psulMcbJc0uXqj0y4mpl0w:n0NHi7C5hurnLF0IrQI0AA", "FilePlugin", "DeleteDirectory", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:jCd2C1oy+02W_eXW+yFQ3A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ypl4Ebcdlk6ZvPK0MMovxg", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:a6DDmjVAXEOiCUZtSQrb9Q", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:zCqBQJ45qk2tqwB+ejVmyw", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DeleteDirectory_DeleteDirectoryJS, "DeleteDirectory", "DeleteDirectory", {
Directory: OS.DataConversion.JSNodeParamConverter.to(vars.value.directoryInLocal, OS.DataTypes.DataTypes.Text),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
Recursive: OS.DataConversion.JSNodeParamConverter.to(vars.value.recursiveInLocal, OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DeleteDirectory$deleteDirectoryJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
deleteDirectoryJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:vXW4BgOuAkKHNo3Ezgqhmg", callContext.id);
// Success = DeleteDirectory.Success
outVars.value.successOut = deleteDirectoryJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:vXW4BgOuAkKHNo3Ezgqhmg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = DeleteDirectory.ErrorCode
outVars.value.errorOut.errorCodeAttr = deleteDirectoryJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:vXW4BgOuAkKHNo3Ezgqhmg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = DeleteDirectory.ErrorMessage
outVars.value.errorOut.errorMessageAttr = deleteDirectoryJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:R4D7jT27PkK3veQPiykh3Q", callContext.id);
});
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:CvMXOlXAFkOrtDpNPGs5DQ", callContext.id);
// Error = CheckFilePlugin.Error
outVars.value.errorOut = checkFilePluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:CvMXOlXAFkOrtDpNPGs5DQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning = CheckFilePlugin.Warning
outVars.value.warningOut = checkFilePluginVar.value.warningOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:R4D7jT27PkK3veQPiykh3Q", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:psulMcbJc0uXqj0y4mpl0w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:psulMcbJc0uXqj0y4mpl0w", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DeleteDirectory$vars", [{
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Directory",
attrName: "directoryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Recursive",
attrName: "recursiveInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DeleteDirectory$deleteDirectoryJSResult", [{
name: "Success",
attrName: "successOut",
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
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DeleteDirectory$outVars", [{
name: "Success",
attrName: "successOut",
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
FilePluginController.default.clientActionProxies.deleteDirectory$Action = function (pathIn, directoryIn, recursiveIn) {
pathIn = (pathIn === undefined) ? "" : pathIn;
directoryIn = (directoryIn === undefined) ? "" : directoryIn;
recursiveIn = (recursiveIn === undefined) ? true : recursiveIn;
return controller.executeActionInsideJSNode(FilePluginController.default.deleteDirectory$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), directoryIn, OS.DataConversion.JSNodeParamConverter.from(recursiveIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FilePlugin.controller$DeleteDirectory.DeleteDirectoryJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = () => {
    $parameters.Success = true;
    $resolve();
}
const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}
const options = {
    path: $parameters.Path,
    directory: $parameters.Directory,
    recursive: $parameters.Recursive
}
OSFilePluginWrapper.Instance.rmdir(onSuccess, onError, options)
});
};
});

define("FilePlugin.controller$DeleteFile", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DeleteFile.DeleteFileJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DeleteFile_DeleteFileJS) {
var OS = OutSystems.Internal;
FilePluginController.default.deleteFile$Action = function (pathIn, directoryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DeleteFile$vars"))());
vars.value.pathInLocal = pathIn;
vars.value.directoryInLocal = directoryIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var deleteFileJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DeleteFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.deleteFileJSResult = deleteFileJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:AhNDnyLoTE2daAcd12SeyA:/ClientActionFlows.AhNDnyLoTE2daAcd12SeyA:4KYWb4ILjq4GMJBexC4H6Q", "FilePlugin", "DeleteFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:s8n+2lkoj02COktBV3ekTQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:0YJhj6scMUeST8MIPNy0VQ", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:I0M0124Lk0irUTOZDwxgUw", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:SnVocrWsgU2ZM+GyjFfYLg", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DeleteFile_DeleteFileJS, "DeleteFile", "DeleteFile", {
Directory: OS.DataConversion.JSNodeParamConverter.to(vars.value.directoryInLocal, OS.DataTypes.DataTypes.Text),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Sucess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DeleteFile$deleteFileJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.sucessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Sucess, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
deleteFileJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:lC0HrCIzqEqvSPW1HFGT7A", callContext.id);
// Error.ErrorCode = DeleteFile.ErrorCode
outVars.value.errorOut.errorCodeAttr = deleteFileJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:lC0HrCIzqEqvSPW1HFGT7A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DeleteFile.ErrorMessage
outVars.value.errorOut.errorMessageAttr = deleteFileJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:lC0HrCIzqEqvSPW1HFGT7A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = DeleteFile.Sucess
outVars.value.successOut = deleteFileJSResult.value.sucessOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:wkndjvGzb02zF8H7fHn5wg", callContext.id);
});
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Ta0pVIK4G0G9oRSFgEDWXA", callContext.id);
// Error = CheckFilePlugin.Error
outVars.value.errorOut = checkFilePluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Ta0pVIK4G0G9oRSFgEDWXA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning = CheckFilePlugin.Warning
outVars.value.warningOut = checkFilePluginVar.value.warningOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:otKKYlZpqkuETjD898hMdA", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:AhNDnyLoTE2daAcd12SeyA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:AhNDnyLoTE2daAcd12SeyA", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DeleteFile$vars", [{
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Directory",
attrName: "directoryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DeleteFile$deleteFileJSResult", [{
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
name: "Sucess",
attrName: "sucessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DeleteFile$outVars", [{
name: "Success",
attrName: "successOut",
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
FilePluginController.default.clientActionProxies.deleteFile$Action = function (pathIn, directoryIn) {
pathIn = (pathIn === undefined) ? "" : pathIn;
directoryIn = (directoryIn === undefined) ? "" : directoryIn;
return controller.executeActionInsideJSNode(FilePluginController.default.deleteFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), directoryIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FilePlugin.controller$DeleteFile.DeleteFileJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = () => {
    $parameters.Sucess = true;
    $resolve();
}

const onError = (error) => {
    $parameters.Sucess = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}

OSFilePluginWrapper.Instance.deleteFile(onSuccess, onError, {path: $parameters.Path, directory: $parameters.Directory})
});
};
});

define("FilePlugin.controller$DEPRECATED_CheckFilePlugin", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "FilePlugin.controller$DEPRECATED_CheckFilePlugin.CheckPluginJS"], function (exports, OutSystems, FilePluginModel, FilePluginController, FilePlugin_controller_DEPRECATED_CheckFilePlugin_CheckPluginJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_CheckFilePlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkPluginJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_CheckFilePlugin$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkPluginJSResult = checkPluginJSResult;
varBag.outVars = outVars;
try {try {OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:4ZOo8q3t4EKbW4x_vaBr7A:/ClientActionFlows.4ZOo8q3t4EKbW4x_vaBr7A:9tqXH6kSNbvXV05M64qNUQ", "FilePlugin", "DEPRECATED_CheckFilePlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Z4uiPeLzVk61slhvZq4+YQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:DzY0JGKpmU+4NXQtzmWwTg", callContext.id);
checkPluginJSResult.value = controller.safeExecuteJSNode(FilePlugin_controller_DEPRECATED_CheckFilePlugin_CheckPluginJS, "CheckPlugin", "DEPRECATED_CheckFilePlugin", {
PluginExists: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_CheckFilePlugin$checkPluginJSResult"))();
jsNodeResult.pluginExistsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.PluginExists, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Set Availability
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:eNRqKBvn+0qKurShjC7V6A", callContext.id);
// IsAvailable = CheckPlugin.PluginExists
outVars.value.isAvailableOut = checkPluginJSResult.value.pluginExistsOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:q7f9wZPW+kar3ZFwuSqzZw", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("DEPRECATED_CheckFilePlugin.DEPRECATED_CheckFilePlugin", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:YtumaWlvp0ipqMf48x4erw", callContext.id);
// Not Availble
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:aXUXXFFjy0+zJCOlfSpIGQ", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:dJIlB2h9V06qh+XpnvTxQA", callContext.id);
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
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:4ZOo8q3t4EKbW4x_vaBr7A", callContext.id);
}

};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_CheckFilePlugin$checkPluginJSResult", [{
name: "PluginExists",
attrName: "pluginExistsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_CheckFilePlugin$outVars", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.clientActionProxies.dEPRECATED_CheckFilePlugin$Action = function () {
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_CheckFilePlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("FilePlugin.controller$DEPRECATED_CheckFilePlugin.CheckPluginJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const legacyPluginDefined = (typeof(File) !== "undefined")
const newPluginDefined = (typeof(cordova) !== "undefined" && typeof(cordova.plugins) !== "undefined" && typeof(cordova.plugins.Filesystem) !== "undefined")
$parameters.PluginExists = legacyPluginDefined || newPluginDefined
};
});

define("FilePlugin.controller$DEPRECATED_CreateDirectory", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_CreateDirectory.CreateDirectoryJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "FilePlugin.controller$CreateDirectories", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "FilePlugin.controller$RequestDirectoryFromFileSystem"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_CreateDirectory_CreateDirectoryJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_CreateDirectory$Action = function (nameIn, pathIn, storageTypeIdIn, storagePersistencyIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_CreateDirectory$vars"))());
vars.value.nameInLocal = nameIn;
vars.value.pathInLocal = pathIn;
vars.value.storageTypeIdInLocal = storageTypeIdIn;
vars.value.storagePersistencyIdInLocal = storagePersistencyIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var createDirectoriesVar = new OS.DataTypes.VariableHolder();
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var requestDirectoryFromFileSystemVar = new OS.DataTypes.VariableHolder();
var createDirectoryJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_CreateDirectory$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.createDirectoriesVar = createDirectoriesVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.requestDirectoryFromFileSystemVar = requestDirectoryFromFileSystemVar;
varBag.createDirectoryJSResult = createDirectoryJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:HWMVyp92pEOw3I3zyC2rOw:/ClientActionFlows.HWMVyp92pEOw3I3zyC2rOw:L7CyjqCEhrDOa5JCuWFnvg", "FilePlugin", "DEPRECATED_CreateDirectory", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:jPfoz6BQl0q6XgVcIzaFJw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Mer6KHkfuU+r2VCxXp1R_A", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:h+UvaQYbG0esKqxm65P7Lg", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:qa3m4g7a7EGQGP30OvfFTQ", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_CreateDirectory_CreateDirectoryJS, "CreateDirectory", "DEPRECATED_CreateDirectory", {
Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
IsInternal: OS.DataConversion.JSNodeParamConverter.to((vars.value.storageTypeIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StorageType.internal), OS.DataTypes.DataTypes.Boolean),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
IsTemporary: OS.DataConversion.JSNodeParamConverter.to((vars.value.storagePersistencyIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.temporary), OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Uri: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_CreateDirectory$createDirectoryJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.uriOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Uri, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
createDirectoryJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:yXndP4sF8EaquZNdGvKI0w", callContext.id);
// Uri = CreateDirectory.Uri
outVars.value.uriOut = createDirectoryJSResult.value.uriOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:yXndP4sF8EaquZNdGvKI0w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = CreateDirectory.ErrorCode
outVars.value.errorOut.errorCodeAttr = createDirectoryJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:yXndP4sF8EaquZNdGvKI0w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = CreateDirectory.ErrorMessage
outVars.value.errorOut.errorMessageAttr = createDirectoryJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:dCjMR_kAf0yCSNHCaAIi4g", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:x0kMQDuKL0iL+XaSG4PY7A", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:46aoibDEZ0Ce2effMU90mg", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:TDPKauqFYU+vMKHmk9o5Pg", callContext.id);
// Execute Action: RequestDirectoryFromFileSystem
return FilePluginController.default.requestDirectoryFromFileSystem$Action(vars.value.storageTypeIdInLocal, vars.value.storagePersistencyIdInLocal, callContext).then(function (value) {
requestDirectoryFromFileSystemVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Pjzk8AFduEiGvZeapUD2fw", callContext.id) && (requestDirectoryFromFileSystemVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:qjAYDk94KEmbgrXuWuPYyQ", callContext.id);
// Execute Action: CreateDirectories
return FilePluginController.default.createDirectories$Action(requestDirectoryFromFileSystemVar.value.directoryOut, vars.value.nameInLocal, vars.value.pathInLocal, callContext).then(function (value) {
createDirectoriesVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:qSXJOQsJiES5Bh3E6kqNjQ", callContext.id);
// Error = CreateDirectories.Error
outVars.value.errorOut = createDirectoriesVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:qSXJOQsJiES5Bh3E6kqNjQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Uri = CreateDirectories.Uri
outVars.value.uriOut = createDirectoriesVar.value.uriOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:dCjMR_kAf0yCSNHCaAIi4g", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:NXs6iHLcyUCH2rAcOKd9cA", callContext.id);
// Error = RequestDirectoryFromFileSystem.Error
outVars.value.errorOut = requestDirectoryFromFileSystemVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:vyIpg0eK9UCZ7R3+AB1fOg", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:U0ijxXNBI0So1yvZ6d5S_w", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:U0ijxXNBI0So1yvZ6d5S_w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:eSM2SaXSuUaVbodDKs1I2A", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_CreateDirectory.DEPRECATED_CreateDirectory", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:a1F0ev8ZtUisIzFD_yOJFA", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:27hpqBMUe0ak+CPzIhPc1w", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:27hpqBMUe0ak+CPzIhPc1w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7uOct5Ah2U65yIbbPksPTQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:HWMVyp92pEOw3I3zyC2rOw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:HWMVyp92pEOw3I3zyC2rOw", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_CreateDirectory$vars", [{
name: "Name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Path",
attrName: "pathInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StorageTypeId",
attrName: "storageTypeIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StorageType.internal;
}
}, {
name: "StoragePersistencyId",
attrName: "storagePersistencyIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_CreateDirectory$createDirectoryJSResult", [{
name: "Success",
attrName: "successOut",
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
name: "Uri",
attrName: "uriOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_CreateDirectory$outVars", [{
name: "Uri",
attrName: "uriOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
FilePluginController.default.clientActionProxies.dEPRECATED_CreateDirectory$Action = function (nameIn, pathIn, storageTypeIdIn, storagePersistencyIdIn) {
nameIn = (nameIn === undefined) ? "" : nameIn;
pathIn = (pathIn === undefined) ? "" : pathIn;
storageTypeIdIn = (storageTypeIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StorageType.internal : storageTypeIdIn;
storagePersistencyIdIn = (storagePersistencyIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent : storagePersistencyIdIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_CreateDirectory$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), storageTypeIdIn, storagePersistencyIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Uri: OS.DataConversion.JSNodeParamConverter.to(actionResults.uriOut, OS.DataTypes.DataTypes.Text),
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$DEPRECATED_CreateDirectory.CreateDirectoryJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (uri) => {
    $parameters.Success = true;
    $parameters.Uri = uri;
    $parameters.ErrorCode = "0";
    $resolve();
}
const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}
OSFilePluginWrapper.LegacyMigration.createDirectory(
    onSuccess, onError, $parameters.Name, $parameters.Path, $parameters.IsInternal, $parameters.IsTemporary
)
});
};
});

define("FilePlugin.controller$DEPRECATED_DeleteDirectory", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_DeleteDirectory.DeleteDirectoryJS", "FilePlugin.controller$DEPRECATED_DeleteDirectory.DeletePathDirectoryJS", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "FilePlugin.controller$RequestDirectoryFromFileSystem", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$GetErrorMessage"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_DeleteDirectory_DeleteDirectoryJS, FilePlugin_controller_DEPRECATED_DeleteDirectory_DeletePathDirectoryJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_DeleteDirectory$Action = function (pathIn, storageTypeIdIn, storagePersistencyIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteDirectory$vars"))());
vars.value.pathInLocal = pathIn;
vars.value.storageTypeIdInLocal = storageTypeIdIn;
vars.value.storagePersistencyIdInLocal = storagePersistencyIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var requestDirectoryFromFileSystemVar = new OS.DataTypes.VariableHolder();
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var deleteDirectoryJSResult = new OS.DataTypes.VariableHolder();
var deletePathDirectoryJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteDirectory$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.requestDirectoryFromFileSystemVar = requestDirectoryFromFileSystemVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.deleteDirectoryJSResult = deleteDirectoryJSResult;
varBag.deletePathDirectoryJSResult = deletePathDirectoryJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:5GtDCr2NSUi2HDn3NVjmqg:/ClientActionFlows.5GtDCr2NSUi2HDn3NVjmqg:iqyda5GV7M1uz+8sz5Ig6A", "FilePlugin", "DEPRECATED_DeleteDirectory", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:PYV5tugA+U60JcJ1gIOiYg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Qbhu8k9a_06mPqhuoeai3A", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Un3VFi5_Y0CqdukSmIIniw", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Or2kvVyb+kCodU9kws5S+Q", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_DeleteDirectory_DeleteDirectoryJS, "DeleteDirectory", "DEPRECATED_DeleteDirectory", {
IsTemporary: OS.DataConversion.JSNodeParamConverter.to((vars.value.storagePersistencyIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.temporary), OS.DataTypes.DataTypes.Boolean),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
IsInternal: OS.DataConversion.JSNodeParamConverter.to((vars.value.storageTypeIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StorageType.internal), OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteDirectory$deleteDirectoryJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
deleteDirectoryJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:RVY+Gp8+_E20G8AvcFHUNw", callContext.id);
// Error.ErrorCode = DeleteDirectory.ErrorCode
outVars.value.errorOut.errorCodeAttr = deleteDirectoryJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:RVY+Gp8+_E20G8AvcFHUNw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DeleteDirectory.ErrorMessage
outVars.value.errorOut.errorMessageAttr = deleteDirectoryJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Y4QbO7GdX0u282Inj1C7Cg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:GKfUPCicU0i_7_aQTBRM2A", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:i2Y2sEMwqUuHLeElngvhTA", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:4Cey1yUTB0qW6eKKV+IGFg", callContext.id);
// Execute Action: RequestDirectoryFromFileSystem
return FilePluginController.default.requestDirectoryFromFileSystem$Action(vars.value.storageTypeIdInLocal, vars.value.storagePersistencyIdInLocal, callContext).then(function (value) {
requestDirectoryFromFileSystemVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:QTKa0zXkZk2+t8YDkn8sRA", callContext.id) && (requestDirectoryFromFileSystemVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:TlQp3h6QOUCxsMMqtNjfmw", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_DeleteDirectory_DeletePathDirectoryJS, "DeletePathDirectory", "DEPRECATED_DeleteDirectory", {
Directory: OS.DataConversion.JSNodeParamConverter.to(requestDirectoryFromFileSystemVar.value.directoryOut, OS.DataTypes.DataTypes.Object),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteDirectory$deletePathDirectoryJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
deletePathDirectoryJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:3ow7RdF_qUagO_HY4jV9+g", callContext.id);
// Error.ErrorCode = DeletePathDirectory.ErrorCode
outVars.value.errorOut.errorCodeAttr = deletePathDirectoryJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:3ow7RdF_qUagO_HY4jV9+g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DeletePathDirectory.ErrorMessage
outVars.value.errorOut.errorMessageAttr = deletePathDirectoryJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Y4QbO7GdX0u282Inj1C7Cg", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:oHqx0kWaJUGrvwd65fulCQ", callContext.id);
// Error = RequestDirectoryFromFileSystem.Error
outVars.value.errorOut = requestDirectoryFromFileSystemVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:sik8_5+PEUWAO0VLgSnAOQ", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:6MY7k4icuEOazlsLbEfSUg", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:6MY7k4icuEOazlsLbEfSUg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ZYVMB0YP60uJmSetcfUgRw", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_DeleteDirectory.DEPRECATED_DeleteDirectory", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:l5HmHFL6bUu2QG4yURRtUg", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:pIAfCovBDEOM7RiODwrAxg", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:pIAfCovBDEOM7RiODwrAxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:X1H2+KEtKkGDiFjsNybeVA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:5GtDCr2NSUi2HDn3NVjmqg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:5GtDCr2NSUi2HDn3NVjmqg", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteDirectory$vars", [{
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StorageTypeId",
attrName: "storageTypeIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StorageType.internal;
}
}, {
name: "StoragePersistencyId",
attrName: "storagePersistencyIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteDirectory$deleteDirectoryJSResult", [{
name: "Success",
attrName: "successOut",
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
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteDirectory$deletePathDirectoryJSResult", [{
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
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteDirectory$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FilePluginController.default.clientActionProxies.dEPRECATED_DeleteDirectory$Action = function (pathIn, storageTypeIdIn, storagePersistencyIdIn) {
pathIn = (pathIn === undefined) ? "" : pathIn;
storageTypeIdIn = (storageTypeIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StorageType.internal : storageTypeIdIn;
storagePersistencyIdIn = (storagePersistencyIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent : storagePersistencyIdIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_DeleteDirectory$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), storageTypeIdIn, storagePersistencyIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$DEPRECATED_DeleteDirectory.DeleteDirectoryJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = () => {
    $parameters.Success = true;
    $parameters.ErrorCode = "0";
    $resolve();
}
const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}
OSFilePluginWrapper.LegacyMigration.deleteDirectory(
    onSuccess, onError, $parameters.Path, $parameters.IsInternal, $parameters.IsTemporary
)
});
};
});
define("FilePlugin.controller$DEPRECATED_DeleteDirectory.DeletePathDirectoryJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.Directory.getDirectory($parameters.Path, {create : true, exclusive : false},
    function (dirEntry) {
       
       dirEntry.removeRecursively(
                function () {
                    $parameters.ErrorCode = 0;
                    $resolve();
                }, 
                function (error) {
                    $parameters.ErrorCode = error.code;
                    $parameters.ErrorMessage = $actions.GetErrorMessage(error.code).Message;
                    $resolve();
                }
         );
       
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);
});
};
});

define("FilePlugin.controller$DEPRECATED_DeleteFile", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_DeleteFile.LegacyCallJS", "FilePlugin.controller$DEPRECATED_DeleteFile.DeleteFileJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "FilePlugin.controller$GetDirectory", "FilePlugin.controller$RequestDirectoryFromFileSystem", "FilePlugin.controller$GetErrorMessage"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_DeleteFile_LegacyCallJS, FilePlugin_controller_DEPRECATED_DeleteFile_DeleteFileJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_DeleteFile$Action = function (nameIn, pathIn, storageTypeIdIn, storagePersistencyIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteFile$vars"))());
vars.value.nameInLocal = nameIn;
vars.value.pathInLocal = pathIn;
vars.value.storageTypeIdInLocal = storageTypeIdIn;
vars.value.storagePersistencyIdInLocal = storagePersistencyIdIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var getDirectoryVar = new OS.DataTypes.VariableHolder();
var requestDirectoryFromFileSystemVar = new OS.DataTypes.VariableHolder();
var legacyCallJSResult = new OS.DataTypes.VariableHolder();
var deleteFileJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.getDirectoryVar = getDirectoryVar;
varBag.requestDirectoryFromFileSystemVar = requestDirectoryFromFileSystemVar;
varBag.legacyCallJSResult = legacyCallJSResult;
varBag.deleteFileJSResult = deleteFileJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:4CA_r5Qh3ECy5PTFXt+A2A:/ClientActionFlows.4CA_r5Qh3ECy5PTFXt+A2A:Pj5Ye53IbFn2aJ05yx0hMQ", "FilePlugin", "DEPRECATED_DeleteFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:IKXdd6sYwkexVBYEGwEzBg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Ock7EZ+_00OojJQj4SULJg", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:EFSSoRSPnkekjV8u3sWafQ", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:L4zKiC0RO0mdD3l6NPmLkA", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_DeleteFile_LegacyCallJS, "LegacyCall", "DEPRECATED_DeleteFile", {
IsTemporary: OS.DataConversion.JSNodeParamConverter.to((vars.value.storagePersistencyIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.temporary), OS.DataTypes.DataTypes.Boolean),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
IsInternal: OS.DataConversion.JSNodeParamConverter.to((vars.value.storageTypeIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StorageType.internal), OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteFile$legacyCallJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
legacyCallJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:MCUeKbP8UEOGKnskyqUFPQ", callContext.id);
// Error.ErrorCode = LegacyCall.ErrorCode
outVars.value.errorOut.errorCodeAttr = legacyCallJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:MCUeKbP8UEOGKnskyqUFPQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = LegacyCall.ErrorMessage
outVars.value.errorOut.errorMessageAttr = legacyCallJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:hViwTyMoxkOLgen0qF_AZA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:y8y8ddtwnEuJFRGZinX6cQ", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:cHXcM0I4dEWOTkDnD5p_0w", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:fAMq_LoBNEmV4+7XrCYfPg", callContext.id);
// Execute Action: RequestDirectoryFromFileSystem
return FilePluginController.default.requestDirectoryFromFileSystem$Action(vars.value.storageTypeIdInLocal, vars.value.storagePersistencyIdInLocal, callContext).then(function (value) {
requestDirectoryFromFileSystemVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:OwPWYhvbGUGmhntiyUimXQ", callContext.id) && (requestDirectoryFromFileSystemVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:FZfd8rNJQ02z6XYer7wxbA", callContext.id);
// Execute Action: GetDirectory
return FilePluginController.default.getDirectory$Action(requestDirectoryFromFileSystemVar.value.directoryOut, vars.value.pathInLocal, callContext).then(function (value) {
getDirectoryVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:pyGlP11R5ku8Q3_KZF59cw", callContext.id) && (getDirectoryVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:UeKhix1iFkKuCZn5R_WXtg", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_DeleteFile_DeleteFileJS, "DeleteFile", "DEPRECATED_DeleteFile", {
Directory: OS.DataConversion.JSNodeParamConverter.to(requestDirectoryFromFileSystemVar.value.directoryOut, OS.DataTypes.DataTypes.Object),
File: OS.DataConversion.JSNodeParamConverter.to(((((OS.BuiltinFunctions.length(vars.value.pathInLocal) > 0)) ? ((vars.value.pathInLocal + "/")) : ("")) + vars.value.nameInLocal), OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteFile$deleteFileJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
deleteFileJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:5kuS0_dzs0W8QtXAnnBMwA", callContext.id);
// Error.ErrorCode = DeleteFile.ErrorCode
outVars.value.errorOut.errorCodeAttr = deleteFileJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:5kuS0_dzs0W8QtXAnnBMwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DeleteFile.ErrorMessage
outVars.value.errorOut.errorMessageAttr = deleteFileJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:9C+Heo7TzkuEE+f47ssZOA", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:k6QYVHOD70iDTXOR4OTLOA", callContext.id);
// Error = GetDirectory.Error
outVars.value.errorOut = getDirectoryVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:e4U2lLJKk0S18wPF6LIE9g", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:o95NK5D1UESwQYZmicBIkg", callContext.id);
// Error = RequestDirectoryFromFileSystem.Error
outVars.value.errorOut = requestDirectoryFromFileSystemVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:hFePyIBclUi375BT0NcdHg", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:jjkZ2hiSy0eToI3tAJTi6Q", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:jjkZ2hiSy0eToI3tAJTi6Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:n1SR4LNsz0arKO6G8uAwbQ", callContext.id);
}

});
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:4CA_r5Qh3ECy5PTFXt+A2A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:4CA_r5Qh3ECy5PTFXt+A2A", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteFile$vars", [{
name: "Name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StorageTypeId",
attrName: "storageTypeIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StorageType.internal;
}
}, {
name: "StoragePersistencyId",
attrName: "storagePersistencyIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteFile$legacyCallJSResult", [{
name: "Success",
attrName: "successOut",
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
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteFile$deleteFileJSResult", [{
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
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteFile$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FilePluginController.default.clientActionProxies.dEPRECATED_DeleteFile$Action = function (nameIn, pathIn, storageTypeIdIn, storagePersistencyIdIn) {
nameIn = (nameIn === undefined) ? "" : nameIn;
pathIn = (pathIn === undefined) ? "" : pathIn;
storageTypeIdIn = (storageTypeIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StorageType.internal : storageTypeIdIn;
storagePersistencyIdIn = (storagePersistencyIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent : storagePersistencyIdIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_DeleteFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), storageTypeIdIn, storagePersistencyIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$DEPRECATED_DeleteFile.LegacyCallJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = () => {
    $parameters.Success = true;
    $parameters.ErrorCode = "0";
    $resolve();
}

const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message

    $resolve();
}

OSFilePluginWrapper.LegacyMigration.deleteFile(onSuccess, onError, $parameters.Path, $parameters.FileName, $parameters.IsInternal, $parameters.IsTemporary)
});
};
});
define("FilePlugin.controller$DEPRECATED_DeleteFile.DeleteFileJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.Directory.getFile($parameters.File, {create : false},
    function (fileEntry) {
       
       fileEntry.remove(
                function () {
                    $parameters.ErrorCode = 0;
                    $resolve();
                }, 
                function (error) {
                    $parameters.ErrorCode = error.code;
                    $parameters.ErrorMessage = $actions.GetErrorMessage(error.code).Message;
                    $resolve();
                }
         );
       
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);
});
};
});

define("FilePlugin.controller$DEPRECATED_DeleteFileFromUri", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_DeleteFileFromUri.DeleteFileJS", "FilePlugin.controller$DEPRECATED_DeleteFileFromUri.LegacyCallJS", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$GetErrorMessage"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_DeleteFileFromUri_DeleteFileJS, FilePlugin_controller_DEPRECATED_DeleteFileFromUri_LegacyCallJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_DeleteFileFromUri$Action = function (filePathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteFileFromUri$vars"))());
vars.value.filePathInLocal = filePathIn;
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var deleteFileJSResult = new OS.DataTypes.VariableHolder();
var legacyCallJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteFileFromUri$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.deleteFileJSResult = deleteFileJSResult;
varBag.legacyCallJSResult = legacyCallJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:ZvKInnyTlUebiKQXU12hig:/ClientActionFlows.ZvKInnyTlUebiKQXU12hig:_F+m_H4nsGgOhBoZ7uizfg", "FilePlugin", "DEPRECATED_DeleteFileFromUri", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:vupZSH+eDU+o33ZsWm+6Qg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:M8l+9zDv20CFQ78SaqCk7w", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:kkfo0bIMG0uU9aiL9KeCKw", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:VuJNM0aQYkaaeiCrfEPh6A", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_DeleteFileFromUri_LegacyCallJS, "LegacyCall", "DEPRECATED_DeleteFileFromUri", {
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteFileFromUri$legacyCallJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
legacyCallJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:NWF0IuA5V0SlwosX8G2orA", callContext.id);
// Error.ErrorCode = LegacyCall.ErrorCode
outVars.value.errorOut.errorCodeAttr = legacyCallJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:NWF0IuA5V0SlwosX8G2orA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = LegacyCall.ErrorMessage
outVars.value.errorOut.errorMessageAttr = legacyCallJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:5NeuPFMB7E2h1e3CWV_k0A", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:H31PXC8680mn7_7odiYlWA", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:eQlGbFWlQEytR9ARgr+cbw", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Wd1PEB_+jkisJnOUgdPdVw", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_DeleteFileFromUri_DeleteFileJS, "DeleteFile", "DEPRECATED_DeleteFileFromUri", {
FilePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_DeleteFileFromUri$deleteFileJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
deleteFileJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:VtfDmFv4fE2FdTfgf9CKmQ", callContext.id);
// Error.ErrorCode = DeleteFile.ErrorCode
outVars.value.errorOut.errorCodeAttr = deleteFileJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:VtfDmFv4fE2FdTfgf9CKmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DeleteFile.ErrorMessage
outVars.value.errorOut.errorMessageAttr = deleteFileJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:L1HYpGM0Wkyg+vGNYx+KNw", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:pwgXMT9t5U20fpV7eq8Dwg", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:pwgXMT9t5U20fpV7eq8Dwg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:xpMlZlPbZkKzFD6jKXrQ2Q", callContext.id);
}

});
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:ZvKInnyTlUebiKQXU12hig", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:ZvKInnyTlUebiKQXU12hig", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteFileFromUri$vars", [{
name: "FilePath",
attrName: "filePathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteFileFromUri$deleteFileJSResult", [{
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
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteFileFromUri$legacyCallJSResult", [{
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
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_DeleteFileFromUri$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FilePluginController.default.clientActionProxies.dEPRECATED_DeleteFileFromUri$Action = function (filePathIn) {
filePathIn = (filePathIn === undefined) ? "" : filePathIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_DeleteFileFromUri$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(filePathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$DEPRECATED_DeleteFileFromUri.DeleteFileJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
window.resolveLocalFileSystemURI($parameters.FilePath, 
    function (fileEntry) {
       fileEntry.remove(
                function () {
                    $parameters.ErrorCode = 0;
                    $resolve();
                }, 
                function (error) {
                    $parameters.ErrorCode = error.code;
                    $parameters.ErrorMessage = $actions.GetErrorMessage(error.code).Message;
                    $resolve();
                }
         );
    }, 
    function (error) {
  
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);
});
};
});
define("FilePlugin.controller$DEPRECATED_DeleteFileFromUri.LegacyCallJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = () => {
    $parameters.Success = true;
    $parameters.ErrorCode = "0";
    $resolve();
}

const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message

    $resolve();
}

OSFilePluginWrapper.LegacyMigration.deleteFileFromUri(onSuccess, onError, $parameters.Path)
});
};
});

define("FilePlugin.controller$DEPRECATED_GetFileData", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_GetFileData.LegacyCallJS", "FilePlugin.controller$DEPRECATED_GetFileData.GetFileDataJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$GetDirectory", "FilePlugin.controller$RequestDirectoryFromFileSystem", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "FilePlugin.controller$GetErrorMessage"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_GetFileData_LegacyCallJS, FilePlugin_controller_DEPRECATED_GetFileData_GetFileDataJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_GetFileData$Action = function (nameIn, pathIn, storageTypeIdIn, storagePersistencyIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileData$vars"))());
vars.value.nameInLocal = nameIn;
vars.value.pathInLocal = pathIn;
vars.value.storageTypeIdInLocal = storageTypeIdIn;
vars.value.storagePersistencyIdInLocal = storagePersistencyIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var getDirectoryVar = new OS.DataTypes.VariableHolder();
var requestDirectoryFromFileSystemVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var legacyCallJSResult = new OS.DataTypes.VariableHolder();
var getFileDataJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileData$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.getDirectoryVar = getDirectoryVar;
varBag.requestDirectoryFromFileSystemVar = requestDirectoryFromFileSystemVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.legacyCallJSResult = legacyCallJSResult;
varBag.getFileDataJSResult = getFileDataJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:Q9n8FiNG00i9pw67F03XJA:/ClientActionFlows.Q9n8FiNG00i9pw67F03XJA:JsvYI0ttjcBzREiGO3Vzng", "FilePlugin", "DEPRECATED_GetFileData", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:5BrsEm+KzEGByrhuICf6GQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7vvOEhEMjEiRqU2jkJ27fg", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Lj80BuzqeUasaiRh3lbOcA", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:QTmXIxMZm0WJdJDsM3ws1w", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_GetFileData_LegacyCallJS, "LegacyCall", "DEPRECATED_GetFileData", {
IsInternal: OS.DataConversion.JSNodeParamConverter.to((vars.value.storageTypeIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StorageType.internal), OS.DataTypes.DataTypes.Boolean),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
IsTemporary: OS.DataConversion.JSNodeParamConverter.to((vars.value.storagePersistencyIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.temporary), OS.DataTypes.DataTypes.Boolean),
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Data: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.BinaryData.defaultValue, OS.DataTypes.DataTypes.BinaryData),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileData$legacyCallJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.dataOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Data, OS.DataTypes.DataTypes.BinaryData);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
legacyCallJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:g_5lW+6jqEy2hvF5Ggt5Fw", callContext.id);
// Error.ErrorCode = LegacyCall.ErrorCode
outVars.value.errorOut.errorCodeAttr = legacyCallJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:g_5lW+6jqEy2hvF5Ggt5Fw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = LegacyCall.ErrorMessage
outVars.value.errorOut.errorMessageAttr = legacyCallJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:g_5lW+6jqEy2hvF5Ggt5Fw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// BinaryData = LegacyCall.Data
outVars.value.binaryDataOut = legacyCallJSResult.value.dataOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:FHpoL_eqtE6lAb8rS6gEVg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:N87Rd2fowEO4ZrVZ_sBrOg", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:gaz5Lp9BhEmgPo9UHhDfkQ", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:1_MGPz6KyE+CRzydGJfrqw", callContext.id);
// Execute Action: RequestDirectoryFromFileSystem
return FilePluginController.default.requestDirectoryFromFileSystem$Action(vars.value.storageTypeIdInLocal, vars.value.storagePersistencyIdInLocal, callContext).then(function (value) {
requestDirectoryFromFileSystemVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:u5ApuYNmb0WCwwR_fhaZ3g", callContext.id) && (requestDirectoryFromFileSystemVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:sezmI548Ok2MIqx7VXe3fQ", callContext.id);
// Execute Action: GetDirectory
return FilePluginController.default.getDirectory$Action(requestDirectoryFromFileSystemVar.value.directoryOut, vars.value.pathInLocal, callContext).then(function (value) {
getDirectoryVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:RER+F14FCE2vGAVdH8KbGQ", callContext.id) && (getDirectoryVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:OX8FT2fYUkiS8VFfFt+iQQ", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_GetFileData_GetFileDataJS, "GetFileData", "DEPRECATED_GetFileData", {
Directory: OS.DataConversion.JSNodeParamConverter.to(getDirectoryVar.value.directoryOut, OS.DataTypes.DataTypes.Object),
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
BinaryData: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.BinaryData.defaultValue, OS.DataTypes.DataTypes.BinaryData)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileData$getFileDataJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.binaryDataOut = OS.DataConversion.JSNodeParamConverter.from($parameters.BinaryData, OS.DataTypes.DataTypes.BinaryData);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
getFileDataJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:MDpk+ao9Nk6H0llNagep3Q", callContext.id);
// BinaryData = GetFileData.BinaryData
outVars.value.binaryDataOut = getFileDataJSResult.value.binaryDataOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:MDpk+ao9Nk6H0llNagep3Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = GetFileData.ErrorCode
outVars.value.errorOut.errorCodeAttr = getFileDataJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:MDpk+ao9Nk6H0llNagep3Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = GetFileData.ErrorMessage
outVars.value.errorOut.errorMessageAttr = getFileDataJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:1WaE8lfuB06IirHj8wFHIg", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:T0a2BoXTYUy0FJjrbClGPw", callContext.id);
// Error = GetDirectory.Error
outVars.value.errorOut = getDirectoryVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:_PcD8B2AEUux4qGrPGNK1g", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:IZKLhqcrPkCSQR4UtaUVDQ", callContext.id);
// Error = RequestDirectoryFromFileSystem.Error
outVars.value.errorOut = requestDirectoryFromFileSystemVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:0LRZx9RK0U6_HINGgdKO3A", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:hnQTuot1sUqGB_RYagEiuw", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:hnQTuot1sUqGB_RYagEiuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:reqKVKKZfEatC0u64ZggWg", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_GetFileData.DEPRECATED_GetFileData", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:UaVq1gz3ok64LbWg63bdBQ", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:PUWCpeIE8EaOt7Vczw6gmg", callContext.id);
// Error.ErrorCode = "-1"
outVars.value.errorOut.errorCodeAttr = "-1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:PUWCpeIE8EaOt7Vczw6gmg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+sOCZx7sKUKuVNawSmVvLQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:Q9n8FiNG00i9pw67F03XJA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:Q9n8FiNG00i9pw67F03XJA", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileData$vars", [{
name: "Name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StorageTypeId",
attrName: "storageTypeIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StorageType.internal;
}
}, {
name: "StoragePersistencyId",
attrName: "storagePersistencyIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileData$legacyCallJSResult", [{
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
name: "Data",
attrName: "dataOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}, {
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileData$getFileDataJSResult", [{
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
name: "BinaryData",
attrName: "binaryDataOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileData$outVars", [{
name: "BinaryData",
attrName: "binaryDataOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
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
FilePluginController.default.clientActionProxies.dEPRECATED_GetFileData$Action = function (nameIn, pathIn, storageTypeIdIn, storagePersistencyIdIn) {
nameIn = (nameIn === undefined) ? "" : nameIn;
pathIn = (pathIn === undefined) ? "" : pathIn;
storageTypeIdIn = (storageTypeIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StorageType.internal : storageTypeIdIn;
storagePersistencyIdIn = (storagePersistencyIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent : storagePersistencyIdIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_GetFileData$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), storageTypeIdIn, storagePersistencyIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
BinaryData: OS.DataConversion.JSNodeParamConverter.to(actionResults.binaryDataOut, OS.DataTypes.DataTypes.BinaryData),
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$DEPRECATED_GetFileData.LegacyCallJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (res) => {
    $parameters.Success = true;
    $parameters.Data = res;
    $parameters.ErrorCode = "0";
    $resolve();
}

const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}
OSFilePluginWrapper.LegacyMigration.getFileData(onSuccess, onError, $parameters.FileName, $parameters.Path, $parameters.IsInternal, $parameters.IsTemporary)
});
};
});
define("FilePlugin.controller$DEPRECATED_GetFileData.GetFileDataJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.Directory.getFile($parameters.FileName, { create: false },
    function (fileEntry) {

        fileEntry.file(
            function (file) {

                var reader = new CordovaFileReader();
                // Read Binary as Octet-binary
                reader.onloadend = function() {

                    var bin = new Uint8Array(this.result);
                    var blob = new Blob([bin],{type:'application/octet-binary'});
                    var newreader = new CordovaFileReader();
                    // Convert Binary to Base64
                    newreader.onload = function(evt){
 
                        var dataurl = evt.target.result;
                        $parameters.BinaryData = dataurl.substr(dataurl.indexOf(',')+1);
                        $parameters.ErrorCode = '0';
                        $resolve();
                    };
                    newreader.readAsDataURL(blob);
                };
                reader.readAsArrayBuffer(file);
            }, 
            function (error) {

                $parameters.ErrorCode = error.code;
                $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
                
                $resolve();
            }
        );
    }, 
    function (error) {
  
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);





});
};
});

define("FilePlugin.controller$DEPRECATED_GetFileDataFromUri", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_GetFileDataFromUri.LegacyCallJS", "FilePlugin.controller$DEPRECATED_GetFileDataFromUri.GetFileDataJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "FilePlugin.controller$GetErrorMessage"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_GetFileDataFromUri_LegacyCallJS, FilePlugin_controller_DEPRECATED_GetFileDataFromUri_GetFileDataJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_GetFileDataFromUri$Action = function (filePathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileDataFromUri$vars"))());
vars.value.filePathInLocal = filePathIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var legacyCallJSResult = new OS.DataTypes.VariableHolder();
var getFileDataJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileDataFromUri$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.legacyCallJSResult = legacyCallJSResult;
varBag.getFileDataJSResult = getFileDataJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:SY9sKm5XQkK4QMlB6I2CkA:/ClientActionFlows.SY9sKm5XQkK4QMlB6I2CkA:kBhujfT3pqVqg89D_rRjNw", "FilePlugin", "DEPRECATED_GetFileDataFromUri", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:U6g1EzRPS0CypcP0UW8XpA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:0toBXY5lRkKyIDDXiddgOg", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:71cqnuZgLk2eYi0tt+bunw", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:GiMcGU3b2E6xARgcE_TN2g", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_GetFileDataFromUri_LegacyCallJS, "LegacyCall", "DEPRECATED_GetFileDataFromUri", {
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Data: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.BinaryData.defaultValue, OS.DataTypes.DataTypes.BinaryData),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileDataFromUri$legacyCallJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.dataOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Data, OS.DataTypes.DataTypes.BinaryData);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
legacyCallJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:2S8j1VaJUEmJxF4bK9C51A", callContext.id);
// Error.ErrorCode = LegacyCall.ErrorCode
outVars.value.errorOut.errorCodeAttr = legacyCallJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:2S8j1VaJUEmJxF4bK9C51A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = LegacyCall.ErrorMessage
outVars.value.errorOut.errorMessageAttr = legacyCallJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:2S8j1VaJUEmJxF4bK9C51A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// BinaryData = LegacyCall.Data
outVars.value.binaryDataOut = legacyCallJSResult.value.dataOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:LmMNO44i2ku8+4tJj8BHcw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:E+Bo8i3UUUKCr+j7bdiXsw", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ueH+VPjxfEShti0WqgDryA", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:9SkkxuCpnE+PFj0EwL0pnQ", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_GetFileDataFromUri_GetFileDataJS, "GetFileData", "DEPRECATED_GetFileDataFromUri", {
FilePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
BinaryData: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.BinaryData.defaultValue, OS.DataTypes.DataTypes.BinaryData)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileDataFromUri$getFileDataJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.binaryDataOut = OS.DataConversion.JSNodeParamConverter.from($parameters.BinaryData, OS.DataTypes.DataTypes.BinaryData);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
getFileDataJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:WTUKiCDc50y7W9DnH9b3yQ", callContext.id);
// BinaryData = GetFileData.BinaryData
outVars.value.binaryDataOut = getFileDataJSResult.value.binaryDataOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:WTUKiCDc50y7W9DnH9b3yQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = GetFileData.ErrorCode
outVars.value.errorOut.errorCodeAttr = getFileDataJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:WTUKiCDc50y7W9DnH9b3yQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = GetFileData.ErrorMessage
outVars.value.errorOut.errorMessageAttr = getFileDataJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:RILhcWYFAES3jGqT0zZozg", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:3GqfklXKSUeDHReZOjEjMw", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:3GqfklXKSUeDHReZOjEjMw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Jjo4xuyIqUek_tnhgYbfAQ", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_GetFileDataFromUri.DEPRECATED_GetFileDataFromUri", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:peI_GumFQ0a6lL3KbYldVA", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:yHb_Pqg+LkCKmc_DI0BRhQ", callContext.id);
// Error.ErrorCode = "-1"
outVars.value.errorOut.errorCodeAttr = "-1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:yHb_Pqg+LkCKmc_DI0BRhQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:H3eDkqYu_EG4pTVUZ44ptw", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:SY9sKm5XQkK4QMlB6I2CkA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:SY9sKm5XQkK4QMlB6I2CkA", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileDataFromUri$vars", [{
name: "FilePath",
attrName: "filePathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileDataFromUri$legacyCallJSResult", [{
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
name: "Data",
attrName: "dataOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}, {
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileDataFromUri$getFileDataJSResult", [{
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
name: "BinaryData",
attrName: "binaryDataOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileDataFromUri$outVars", [{
name: "BinaryData",
attrName: "binaryDataOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
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
FilePluginController.default.clientActionProxies.dEPRECATED_GetFileDataFromUri$Action = function (filePathIn) {
filePathIn = (filePathIn === undefined) ? "" : filePathIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_GetFileDataFromUri$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(filePathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
BinaryData: OS.DataConversion.JSNodeParamConverter.to(actionResults.binaryDataOut, OS.DataTypes.DataTypes.BinaryData),
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$DEPRECATED_GetFileDataFromUri.LegacyCallJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (res) => {
    $parameters.Success = true;
    $parameters.Data = res;
    $parameters.ErrorCode = "0";
    $resolve();
}

const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}
OSFilePluginWrapper.LegacyMigration.getFileDataFromUri(onSuccess, onError, $parameters.Path)
});
};
});
define("FilePlugin.controller$DEPRECATED_GetFileDataFromUri.GetFileDataJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
window.resolveLocalFileSystemURL($parameters.FilePath, 
    function (fileEntry) {

        fileEntry.file(
            function (file) {

                var reader = new CordovaFileReader();
                // Read Binary as Octet-binary
                reader.onloadend = function() {

                    var bin = new Uint8Array(this.result);
                    var blob = new Blob([bin],{type:'application/octet-binary'});
                    var newreader = new CordovaFileReader();
                    // Convert Binary to Base64
                    newreader.onload = function(evt){
 
                        var dataurl = evt.target.result;
                        $parameters.BinaryData = dataurl.substr(dataurl.indexOf(',')+1);
                        $parameters.ErrorCode = '0';
                        $resolve();
                    };
                    newreader.readAsDataURL(blob);
                };
                reader.readAsArrayBuffer(file);
            }, 
            function (error) {

                $parameters.ErrorCode = error.code;
                $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
                
                $resolve();
            }
        );
    }, 
    function (error) {
  
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);





});
};
});

define("FilePlugin.controller$DEPRECATED_GetFileUri", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_GetFileUri.LegacyCallJS", "FilePlugin.controller$DEPRECATED_GetFileUri.GetFileUriJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$RequestDirectoryFromFileSystem", "FilePlugin.controller$GetDirectory", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "FilePlugin.controller$GetErrorMessage"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_GetFileUri_LegacyCallJS, FilePlugin_controller_DEPRECATED_GetFileUri_GetFileUriJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_GetFileUri$Action = function (nameIn, pathIn, storageTypeIdIn, storagePersistencyIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUri$vars"))());
vars.value.nameInLocal = nameIn;
vars.value.pathInLocal = pathIn;
vars.value.storageTypeIdInLocal = storageTypeIdIn;
vars.value.storagePersistencyIdInLocal = storagePersistencyIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var requestDirectoryFromFileSystemVar = new OS.DataTypes.VariableHolder();
var getDirectoryVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var legacyCallJSResult = new OS.DataTypes.VariableHolder();
var getFileUriJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUri$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.requestDirectoryFromFileSystemVar = requestDirectoryFromFileSystemVar;
varBag.getDirectoryVar = getDirectoryVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.legacyCallJSResult = legacyCallJSResult;
varBag.getFileUriJSResult = getFileUriJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:EUOhRi1Fq0GEzUArA7xDPg:/ClientActionFlows.EUOhRi1Fq0GEzUArA7xDPg:nDVE5sv8Vs+nn383882npw", "FilePlugin", "DEPRECATED_GetFileUri", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:I1FGyHjNJ0e4yghLJsWLBw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:UCbzBoVpwkmpl1ysdZwSTw", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:1YCU51ydE0a+TdDYgOcmAg", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ymbAdHbhF06shR_rWnbgug", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_GetFileUri_LegacyCallJS, "LegacyCall", "DEPRECATED_GetFileUri", {
Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
IsTemporary: OS.DataConversion.JSNodeParamConverter.to((vars.value.storagePersistencyIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.temporary), OS.DataTypes.DataTypes.Boolean),
IsInternal: OS.DataConversion.JSNodeParamConverter.to((vars.value.storageTypeIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StorageType.internal), OS.DataTypes.DataTypes.Boolean),
Uri: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUri$legacyCallJSResult"))();
jsNodeResult.uriOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Uri, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
legacyCallJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:2CUblxO91kuoxj_HnsNy9w", callContext.id);
// Error.ErrorCode = LegacyCall.ErrorCode
outVars.value.errorOut.errorCodeAttr = legacyCallJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:2CUblxO91kuoxj_HnsNy9w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = LegacyCall.ErrorMessage
outVars.value.errorOut.errorMessageAttr = legacyCallJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:2CUblxO91kuoxj_HnsNy9w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Uri = LegacyCall.Uri
outVars.value.uriOut = legacyCallJSResult.value.uriOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:cuYindV9MUKIOXD7NCtyYw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+ngL0Mt5NkytP2k1GraT+Q", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:r_xmtx6XqECUQWRMFsRVKA", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:YbAcE4gZ+Umyx2khdW9WgQ", callContext.id);
// Execute Action: RequestDirectoryFromFileSystem
return FilePluginController.default.requestDirectoryFromFileSystem$Action(vars.value.storageTypeIdInLocal, vars.value.storagePersistencyIdInLocal, callContext).then(function (value) {
requestDirectoryFromFileSystemVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:IKEWwnp0CEGJCF_SRpeuIw", callContext.id) && (requestDirectoryFromFileSystemVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:xc9mHz82lEuAHE23zzzDWg", callContext.id);
// Execute Action: GetDirectory
return FilePluginController.default.getDirectory$Action(requestDirectoryFromFileSystemVar.value.directoryOut, vars.value.pathInLocal, callContext).then(function (value) {
getDirectoryVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:JlzgSIm2T0ikwXIShRfy9Q", callContext.id) && (getDirectoryVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ZYNCsoNpgE+PVORXYzPLdA", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_GetFileUri_GetFileUriJS, "GetFileUri", "DEPRECATED_GetFileUri", {
File: OS.DataConversion.JSNodeParamConverter.to(((((OS.BuiltinFunctions.length(vars.value.pathInLocal) > 0)) ? ((vars.value.pathInLocal + "/")) : ("")) + vars.value.nameInLocal), OS.DataTypes.DataTypes.Text),
Directory: OS.DataConversion.JSNodeParamConverter.to(requestDirectoryFromFileSystemVar.value.directoryOut, OS.DataTypes.DataTypes.Object),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Uri: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUri$getFileUriJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.uriOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Uri, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
getFileUriJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:tQ27IEFPKkSdpWFEZCEjTQ", callContext.id);
// Error.ErrorCode = GetFileUri.ErrorCode
outVars.value.errorOut.errorCodeAttr = getFileUriJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:tQ27IEFPKkSdpWFEZCEjTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = GetFileUri.ErrorMessage
outVars.value.errorOut.errorMessageAttr = getFileUriJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:tQ27IEFPKkSdpWFEZCEjTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Uri = GetFileUri.Uri
outVars.value.uriOut = getFileUriJSResult.value.uriOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:UU28rSgCGkGN5HGuzANNmg", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:3J_6MXD5qUOjkM6yUi01xw", callContext.id);
// Error = GetDirectory.Error
outVars.value.errorOut = getDirectoryVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:IIaW0Jk370ua_ZffoicuWg", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:sx3Te_wd4EuhSzyzVtcU4g", callContext.id);
// Error = RequestDirectoryFromFileSystem.Error
outVars.value.errorOut = requestDirectoryFromFileSystemVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:zi14zfv+PUKzJIjYdd2YAw", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:rvd3hGXI1028iS0FOiXOSw", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:rvd3hGXI1028iS0FOiXOSw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:vpVxQqFM9kO7oARifmF6Dw", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_GetFileUri.DEPRECATED_GetFileUri", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:vAKwBfKwOU2sokZ3fFmG7g", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:xPlYZHDtfEyE56W3TJw0WA", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:xPlYZHDtfEyE56W3TJw0WA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:W2XjTWi2Dk6ixLNMrmTiEQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:EUOhRi1Fq0GEzUArA7xDPg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:EUOhRi1Fq0GEzUArA7xDPg", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUri$vars", [{
name: "Name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StorageTypeId",
attrName: "storageTypeIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StorageType.internal;
}
}, {
name: "StoragePersistencyId",
attrName: "storagePersistencyIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUri$legacyCallJSResult", [{
name: "Uri",
attrName: "uriOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUri$getFileUriJSResult", [{
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
name: "Uri",
attrName: "uriOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUri$outVars", [{
name: "Uri",
attrName: "uriOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
FilePluginController.default.clientActionProxies.dEPRECATED_GetFileUri$Action = function (nameIn, pathIn, storageTypeIdIn, storagePersistencyIdIn) {
nameIn = (nameIn === undefined) ? "" : nameIn;
pathIn = (pathIn === undefined) ? "" : pathIn;
storageTypeIdIn = (storageTypeIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StorageType.internal : storageTypeIdIn;
storagePersistencyIdIn = (storagePersistencyIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent : storagePersistencyIdIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_GetFileUri$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), storageTypeIdIn, storagePersistencyIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Uri: OS.DataConversion.JSNodeParamConverter.to(actionResults.uriOut, OS.DataTypes.DataTypes.Text),
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$DEPRECATED_GetFileUri.LegacyCallJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (res) => {
    $parameters.Success = true;
    $parameters.Uri = res;
    $parameters.ErrorCode = "0";
    $resolve();
}

const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}
OSFilePluginWrapper.LegacyMigration.getFileUri(onSuccess, onError, $parameters.Name, $parameters.Path, $parameters.IsInternal, $parameters.IsTemporary);
});
};
});
define("FilePlugin.controller$DEPRECATED_GetFileUri.GetFileUriJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.Directory.getFile($parameters.File, {create : false},
    function (fileEntry) {
       
        $parameters.ErrorCode = 0;
        $parameters.Uri = fileEntry.nativeURL;
        
        $resolve();
                    
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);
});
};
});

define("FilePlugin.controller$DEPRECATED_GetFileUrl", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_GetFileUrl.GetFileJS", "FilePlugin.controller$DEPRECATED_GetFileUrl.LegacyCallJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "FilePlugin.controller$RequestDirectoryFromFileSystem", "FilePlugin.controller$GetDirectory", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$GetFileType", "FilePlugin.controller$GetErrorMessage"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_GetFileUrl_GetFileJS, FilePlugin_controller_DEPRECATED_GetFileUrl_LegacyCallJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_GetFileUrl$Action = function (nameIn, pathIn, storageTypeIdIn, storagePersistencyIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUrl$vars"))());
vars.value.nameInLocal = nameIn;
vars.value.pathInLocal = pathIn;
vars.value.storageTypeIdInLocal = storageTypeIdIn;
vars.value.storagePersistencyIdInLocal = storagePersistencyIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var requestDirectoryFromFileSystemVar = new OS.DataTypes.VariableHolder();
var getDirectoryVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var getFileJSResult = new OS.DataTypes.VariableHolder();
var legacyCallJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUrl$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.requestDirectoryFromFileSystemVar = requestDirectoryFromFileSystemVar;
varBag.getDirectoryVar = getDirectoryVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.getFileJSResult = getFileJSResult;
varBag.legacyCallJSResult = legacyCallJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:iB+ARMfIvU6dfwfXTuM1rg:/ClientActionFlows.iB+ARMfIvU6dfwfXTuM1rg:foSWWGqiSjYtS+biadjLAw", "FilePlugin", "DEPRECATED_GetFileUrl", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:LLE3AJbSSEeIrAaUwRkYUw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:C03R4lUCr0mC9jXT6nN0Bw", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:005uz5WFbUqeCmsmUNHqeg", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:H_5A4YV+00eQ1avXDc8T8A", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_GetFileUrl_LegacyCallJS, "LegacyCall", "DEPRECATED_GetFileUrl", {
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
IsTemporary: OS.DataConversion.JSNodeParamConverter.to((vars.value.storagePersistencyIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.temporary), OS.DataTypes.DataTypes.Boolean),
IsInternal: OS.DataConversion.JSNodeParamConverter.to((vars.value.storageTypeIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StorageType.internal), OS.DataTypes.DataTypes.Boolean),
Url: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUrl$legacyCallJSResult"))();
jsNodeResult.urlOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Url, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
legacyCallJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:BpmXFSC6KUq1grXH4Kvkgg", callContext.id);
// Error.ErrorCode = LegacyCall.ErrorCode
outVars.value.errorOut.errorCodeAttr = legacyCallJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:BpmXFSC6KUq1grXH4Kvkgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = LegacyCall.ErrorMessage
outVars.value.errorOut.errorMessageAttr = legacyCallJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:BpmXFSC6KUq1grXH4Kvkgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Url = LegacyCall.Url
outVars.value.urlOut = legacyCallJSResult.value.urlOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:FY3AqmFCS0GRLRxp2WaXWQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:FTbzVbbg_Uqkh7CzONSGag", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:xdYg2EorKECgK452+m5Thw", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:zsQqMlnnd0mxJMPg7MYUFg", callContext.id);
// Execute Action: RequestDirectoryFromFileSystem
return FilePluginController.default.requestDirectoryFromFileSystem$Action(vars.value.storageTypeIdInLocal, vars.value.storagePersistencyIdInLocal, callContext).then(function (value) {
requestDirectoryFromFileSystemVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Krgv_XdUQkqyGqWS1ZaeTg", callContext.id) && (requestDirectoryFromFileSystemVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Ul9nN2HgtUi+O8p71m3Udw", callContext.id);
// Execute Action: GetDirectory
return FilePluginController.default.getDirectory$Action(requestDirectoryFromFileSystemVar.value.directoryOut, vars.value.pathInLocal, callContext).then(function (value) {
getDirectoryVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:LNEGg75s902FZeVMcM7rrQ", callContext.id) && (getDirectoryVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:eyAf2Ry3WUWTTPn1LA646Q", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_GetFileUrl_GetFileJS, "GetFile", "DEPRECATED_GetFileUrl", {
Directory: OS.DataConversion.JSNodeParamConverter.to(getDirectoryVar.value.directoryOut, OS.DataTypes.DataTypes.Object),
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Url: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUrl$getFileJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.urlOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Url, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetFileType: FilePluginController.default.getClientActionProxies(controller).getFileType$Action,
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
getFileJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:mQ_lZMyEa06os1UGA9wg7Q", callContext.id);
// Url = GetFile.Url
outVars.value.urlOut = getFileJSResult.value.urlOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:mQ_lZMyEa06os1UGA9wg7Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = GetFile.ErrorCode
outVars.value.errorOut.errorCodeAttr = getFileJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:mQ_lZMyEa06os1UGA9wg7Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = GetFile.ErrorMessage
outVars.value.errorOut.errorMessageAttr = getFileJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:9mVcSMXXVUCIYyYmrZfMBA", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:u3QBqIoeeEuUXr+8qM3a9g", callContext.id);
// Error = GetDirectory.Error
outVars.value.errorOut = getDirectoryVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:B_cXQvV4MUyNo110e1z64g", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:X2dMxox3M0K3v_pKU8oVeA", callContext.id);
// Error = RequestDirectoryFromFileSystem.Error
outVars.value.errorOut = requestDirectoryFromFileSystemVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:GyoR3ZC6NkOj9Obt8ICMNA", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:RdW06rNYQE+Xr1oqSHvevQ", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_GetFileUrl.DEPRECATED_GetFileUrl", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+rI+ywMuLkq1ZzVWPQMLjA", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:bXfQVR7uCUiYmmKsvGi5zw", callContext.id);
// Error.ErrorCode = "-1"
outVars.value.errorOut.errorCodeAttr = "-1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:bXfQVR7uCUiYmmKsvGi5zw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:1rubD0QiR0W4Bcv_ACdnmA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:iB+ARMfIvU6dfwfXTuM1rg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:iB+ARMfIvU6dfwfXTuM1rg", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUrl$vars", [{
name: "Name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StorageTypeId",
attrName: "storageTypeIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StorageType.internal;
}
}, {
name: "StoragePersistencyId",
attrName: "storagePersistencyIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUrl$getFileJSResult", [{
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
name: "Url",
attrName: "urlOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUrl$legacyCallJSResult", [{
name: "Url",
attrName: "urlOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUrl$outVars", [{
name: "Url",
attrName: "urlOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
FilePluginController.default.clientActionProxies.dEPRECATED_GetFileUrl$Action = function (nameIn, pathIn, storageTypeIdIn, storagePersistencyIdIn) {
nameIn = (nameIn === undefined) ? "" : nameIn;
pathIn = (pathIn === undefined) ? "" : pathIn;
storageTypeIdIn = (storageTypeIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StorageType.internal : storageTypeIdIn;
storagePersistencyIdIn = (storagePersistencyIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent : storagePersistencyIdIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_GetFileUrl$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), storageTypeIdIn, storagePersistencyIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Url: OS.DataConversion.JSNodeParamConverter.to(actionResults.urlOut, OS.DataTypes.DataTypes.Text),
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$DEPRECATED_GetFileUrl.GetFileJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.Directory.getFile($parameters.FileName, { create: false },
    function (fileEntry) {

        fileEntry.file(
            function (file) {

                var reader = new CordovaFileReader();
                reader.onloadend = function() {
                    var blob = new Blob([new Uint8Array(this.result)], { type: $actions.GetFileType($parameters.FileName).Type  });
                    $parameters.Url = window.URL.createObjectURL(blob);
                    $parameters.ErrorCode = "0";
                    $resolve();
                };
                reader.readAsArrayBuffer(file);
            }, 
            function (error) {
                $parameters.ErrorCode = error.code;
                $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
                
                $resolve();
            }
        );
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);





});
};
});
define("FilePlugin.controller$DEPRECATED_GetFileUrl.LegacyCallJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (res) => {
    $parameters.Success = true;
    $parameters.Url = res;
    $parameters.ErrorCode = "0";
    $resolve();
}

const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}
OSFilePluginWrapper.LegacyMigration.getFileUrl(onSuccess, onError, $parameters.Name, $parameters.Path, $parameters.IsInternal, $parameters.IsTemporary);
});
};
});

define("FilePlugin.controller$DEPRECATED_GetFileUrlFromUri", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_GetFileUrlFromUri.LegacyCallJS", "FilePlugin.controller$DEPRECATED_GetFileUrlFromUri.GetFileUrlJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "FilePlugin.controller$GetFileType", "FilePlugin.controller$GetErrorMessage"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_GetFileUrlFromUri_LegacyCallJS, FilePlugin_controller_DEPRECATED_GetFileUrlFromUri_GetFileUrlJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_GetFileUrlFromUri$Action = function (filePathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUrlFromUri$vars"))());
vars.value.filePathInLocal = filePathIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var legacyCallJSResult = new OS.DataTypes.VariableHolder();
var getFileUrlJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUrlFromUri$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.legacyCallJSResult = legacyCallJSResult;
varBag.getFileUrlJSResult = getFileUrlJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:RDMTkcA1iUChjVgm+yK6Rw:/ClientActionFlows.RDMTkcA1iUChjVgm+yK6Rw:91ehQeN_Tknf4OtP3iA3xQ", "FilePlugin", "DEPRECATED_GetFileUrlFromUri", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:y_1umnS__UatKjJMuK1GfA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:84O8OD7uL0aGo9X5cQckIg", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:d_C2_In6gkCRVh5lMiUUEg", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:M7dCIoNbmkyXb4ccjx18Jg", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_GetFileUrlFromUri_LegacyCallJS, "LegacyCall", "DEPRECATED_GetFileUrlFromUri", {
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
Url: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUrlFromUri$legacyCallJSResult"))();
jsNodeResult.urlOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Url, OS.DataTypes.DataTypes.Text);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
legacyCallJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:6r4czh5RNUaPNGNIBIU1Kw", callContext.id);
// Url = LegacyCall.Url
outVars.value.urlOut = legacyCallJSResult.value.urlOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:4FYpJUbF8UaJmGSW0HQ6rw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:fw1JOkbPWUSjxFTOJYK2lA", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:cFfyrX74QkehCyKhC7r2kw", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:tlrV3WY2XEKIyPc3xB_OHA", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_GetFileUrlFromUri_GetFileUrlJS, "GetFileUrl", "DEPRECATED_GetFileUrlFromUri", {
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
FilePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Url: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_GetFileUrlFromUri$getFileUrlJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.urlOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Url, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetFileType: FilePluginController.default.getClientActionProxies(controller).getFileType$Action,
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
getFileUrlJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:h_GUImirckKj1_PTe3x2oQ", callContext.id);
// Url = GetFileUrl.Url
outVars.value.urlOut = getFileUrlJSResult.value.urlOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:8EscADoPk0uhXtHB2HWd4Q", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:nXna9DrUm0iu9cUBcAjbtw", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_GetFileUrlFromUri.DEPRECATED_GetFileUrlFromUri", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:9GqaVwaoXEiMqQ47DgyTHA", callContext.id);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:oYgUgOidWUiJkV4EO6exog", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:RDMTkcA1iUChjVgm+yK6Rw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:RDMTkcA1iUChjVgm+yK6Rw", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUrlFromUri$vars", [{
name: "FilePath",
attrName: "filePathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUrlFromUri$legacyCallJSResult", [{
name: "Url",
attrName: "urlOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUrlFromUri$getFileUrlJSResult", [{
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
name: "Url",
attrName: "urlOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_GetFileUrlFromUri$outVars", [{
name: "Url",
attrName: "urlOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "blob://";
}
}]);
FilePluginController.default.clientActionProxies.dEPRECATED_GetFileUrlFromUri$Action = function (filePathIn) {
filePathIn = (filePathIn === undefined) ? "" : filePathIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_GetFileUrlFromUri$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(filePathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Url: OS.DataConversion.JSNodeParamConverter.to(actionResults.urlOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("FilePlugin.controller$DEPRECATED_GetFileUrlFromUri.LegacyCallJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (res) => {
    $parameters.Success = true;
    $parameters.Url = res;
    $resolve();
}

const onError = () => {
    $parameters.Success = false;
    $resolve();
}
OSFilePluginWrapper.LegacyMigration.getFileUrlFromUri(onSuccess, onError, $parameters.Path);
});
};
});
define("FilePlugin.controller$DEPRECATED_GetFileUrlFromUri.GetFileUrlJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
window.resolveLocalFileSystemURI($parameters.FilePath, 
    function (fileEntry) {

        fileEntry.file(
            function (file) {

                var reader = new CordovaFileReader();
                reader.onloadend = function() {
                    var blob = new Blob([new Uint8Array(this.result)], { type: $actions.GetFileType($parameters.FileName).Type  });
                    $parameters.Url = window.URL.createObjectURL(blob);
                    $parameters.ErrorCode = "0";
                    $resolve();
                };
                reader.readAsArrayBuffer(file);
            }, 
            function (error) {
                $parameters.ErrorCode = error.code;
                $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
                
                $resolve();
            }
        );
    }, 
    function (error) {
  
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);





});
};
});

define("FilePlugin.controller$DEPRECATED_ListDirectory", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_ListDirectory.LegacyCallJS", "FilePlugin.controller$DEPRECATED_ListDirectory.ListDirectoryJS", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$RequestDirectoryFromFileSystem", "FilePlugin.controller$GetDirectory", "FilePlugin.controller$GetErrorMessage"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_ListDirectory_LegacyCallJS, FilePlugin_controller_DEPRECATED_ListDirectory_ListDirectoryJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_ListDirectory$Action = function (pathIn, storageTypeIdIn, storagePersistencyIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_ListDirectory$vars"))());
vars.value.pathInLocal = pathIn;
vars.value.storageTypeIdInLocal = storageTypeIdIn;
vars.value.storagePersistencyIdInLocal = storagePersistencyIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var requestDirectoryFromFileSystemVar = new OS.DataTypes.VariableHolder();
var getDirectoryVar = new OS.DataTypes.VariableHolder();
var legacyCallJSResult = new OS.DataTypes.VariableHolder();
var listDirectoryJSResult = new OS.DataTypes.VariableHolder();
var getFileListLegacyVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
var getDirectoryListLegacyVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
var getFileListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
var getDirectoryListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_ListDirectory$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.requestDirectoryFromFileSystemVar = requestDirectoryFromFileSystemVar;
varBag.getDirectoryVar = getDirectoryVar;
varBag.legacyCallJSResult = legacyCallJSResult;
varBag.listDirectoryJSResult = listDirectoryJSResult;
varBag.getFileListLegacyVar = getFileListLegacyVar;
varBag.getDirectoryListLegacyVar = getDirectoryListLegacyVar;
varBag.getFileListVar = getFileListVar;
varBag.getDirectoryListVar = getDirectoryListVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:VcYccOfFxUCyV7bS7dSs5A:/ClientActionFlows.VcYccOfFxUCyV7bS7dSs5A:qpmjkw1PSCqdDFNoyKhNew", "FilePlugin", "DEPRECATED_ListDirectory", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:kI_+X1dFQkmQlfeDwbFS7Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ffGfXt2mf0WbeK9gsqJefg", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:JnaqRmvtCUSV4NwZ7wZZvA", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:bz4NYKUQDkK9EglPPZl8Ug", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_ListDirectory_LegacyCallJS, "LegacyCall", "DEPRECATED_ListDirectory", {
IsTemporary: OS.DataConversion.JSNodeParamConverter.to((vars.value.storagePersistencyIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.temporary), OS.DataTypes.DataTypes.Boolean),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
IsInternal: OS.DataConversion.JSNodeParamConverter.to((vars.value.storageTypeIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StorageType.internal), OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
DirectoryList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
FileList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_ListDirectory$legacyCallJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.directoryListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DirectoryList, OS.DataTypes.DataTypes.Text);
jsNodeResult.fileListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FileList, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
legacyCallJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:XwoSjWwxl0Sm7pPZxMuaNw", callContext.id);
// JSON Deserialize: GetDirectoryListLegacy
getDirectoryListLegacyVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(legacyCallJSResult.value.directoryListOut, OS.DataTypes.TextList, false);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:2aDXfjyad02LERBQhATcGQ", callContext.id);
// JSON Deserialize: GetFileListLegacy
getFileListLegacyVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(legacyCallJSResult.value.fileListOut, OS.DataTypes.TextList, false);
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7PunqTyMBECtQAadKGjLFQ", callContext.id);
// DirectoryList = GetDirectoryListLegacy.Data
outVars.value.directoryListOut = getDirectoryListLegacyVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7PunqTyMBECtQAadKGjLFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// FileList = GetFileListLegacy.Data
outVars.value.fileListOut = getFileListLegacyVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7PunqTyMBECtQAadKGjLFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = LegacyCall.ErrorCode
outVars.value.errorOut.errorCodeAttr = legacyCallJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7PunqTyMBECtQAadKGjLFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = LegacyCall.ErrorMessage
outVars.value.errorOut.errorMessageAttr = legacyCallJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:zOPXMmyMS0ylElt4PQRtbA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:13_xILnRR0OCYHAuo7Rc8Q", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:OkWCHAj2t0KNlQ4bWKcziA", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:zJmAYPXCK025TepWbmiUfg", callContext.id);
// Execute Action: RequestDirectoryFromFileSystem
return FilePluginController.default.requestDirectoryFromFileSystem$Action(vars.value.storageTypeIdInLocal, vars.value.storagePersistencyIdInLocal, callContext).then(function (value) {
requestDirectoryFromFileSystemVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:6IJtigdyYUeKA3x1eDLIjw", callContext.id) && (requestDirectoryFromFileSystemVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:nrP6pI2Y5kmnlAVAQvGueA", callContext.id);
// Execute Action: GetDirectory
return FilePluginController.default.getDirectory$Action(requestDirectoryFromFileSystemVar.value.directoryOut, vars.value.pathInLocal, callContext).then(function (value) {
getDirectoryVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:M1RFdjzdK0OY4qNGc5gm4A", callContext.id) && (getDirectoryVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:60pxeLBpW0GXyUXasXy_CA", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_ListDirectory_ListDirectoryJS, "ListDirectory", "DEPRECATED_ListDirectory", {
Directory: OS.DataConversion.JSNodeParamConverter.to(getDirectoryVar.value.directoryOut, OS.DataTypes.DataTypes.Object),
FileList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
DirectoryList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_ListDirectory$listDirectoryJSResult"))();
jsNodeResult.fileListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FileList, OS.DataTypes.DataTypes.Text);
jsNodeResult.directoryListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DirectoryList, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
listDirectoryJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:nj74wJiUfUOpFCWottdWNw", callContext.id);
// JSON Deserialize: GetDirectoryList
getDirectoryListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(listDirectoryJSResult.value.directoryListOut, OS.DataTypes.TextList, false);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7JzNnHvrAEKXkcBdXF309A", callContext.id);
// JSON Deserialize: GetFileList
getFileListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(listDirectoryJSResult.value.fileListOut, OS.DataTypes.TextList, false);
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:hqeSR07BXU6Sgz1BoDDObA", callContext.id);
// Error.ErrorCode = ListDirectory.ErrorCode
outVars.value.errorOut.errorCodeAttr = listDirectoryJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:hqeSR07BXU6Sgz1BoDDObA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = ListDirectory.ErrorMessage
outVars.value.errorOut.errorMessageAttr = listDirectoryJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:hqeSR07BXU6Sgz1BoDDObA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// DirectoryList = GetDirectoryList.Data
outVars.value.directoryListOut = getDirectoryListVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:hqeSR07BXU6Sgz1BoDDObA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// FileList = GetFileList.Data
outVars.value.fileListOut = getFileListVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:zOPXMmyMS0ylElt4PQRtbA", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:k0dMPa7guUawmvTNorxxUA", callContext.id);
// Error = GetDirectory.Error
outVars.value.errorOut = getDirectoryVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:wb0XBNXlm0mb8WKVLITtew", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Sx1WROkpcU+1rDncaHLE_g", callContext.id);
// Error = RequestDirectoryFromFileSystem.Error
outVars.value.errorOut = requestDirectoryFromFileSystemVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:9KtCBIHaZUS0eUR+ng2rcQ", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:HuqAZBWPD0Cv2o5MFQeh1Q", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:HuqAZBWPD0Cv2o5MFQeh1Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:G5EAWA5VD0qTB8vRAnPFKw", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_ListDirectory.DEPRECATED_ListDirectory", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:CRjSNUOGmk2vi0dWxMi1gg", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:4Sm31TcQkkaSRL8eqUypDQ", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:4Sm31TcQkkaSRL8eqUypDQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:WsF20bY6uE6ZkhNhDhtzlw", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:VcYccOfFxUCyV7bS7dSs5A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:VcYccOfFxUCyV7bS7dSs5A", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_ListDirectory$vars", [{
name: "Path",
attrName: "pathInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StorageTypeId",
attrName: "storageTypeIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StorageType.internal;
}
}, {
name: "StoragePersistencyId",
attrName: "storagePersistencyIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_ListDirectory$legacyCallJSResult", [{
name: "Success",
attrName: "successOut",
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
name: "DirectoryList",
attrName: "directoryListOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileList",
attrName: "fileListOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_ListDirectory$listDirectoryJSResult", [{
name: "FileList",
attrName: "fileListOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DirectoryList",
attrName: "directoryListOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_ListDirectory$outVars", [{
name: "DirectoryList",
attrName: "directoryListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}, {
name: "FileList",
attrName: "fileListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
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
FilePluginController.default.clientActionProxies.dEPRECATED_ListDirectory$Action = function (pathIn, storageTypeIdIn, storagePersistencyIdIn) {
pathIn = (pathIn === undefined) ? "" : pathIn;
storageTypeIdIn = (storageTypeIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StorageType.internal : storageTypeIdIn;
storagePersistencyIdIn = (storagePersistencyIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent : storagePersistencyIdIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_ListDirectory$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), storageTypeIdIn, storagePersistencyIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DirectoryList: actionResults.directoryListOut,
FileList: actionResults.fileListOut,
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$DEPRECATED_ListDirectory.LegacyCallJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (directoryList, fileList) => {
    $parameters.Success = true;
    $parameters.DirectoryList = JSON.stringify(directoryList);
    $parameters.FileList = JSON.stringify(fileList);
    $parameters.ErrorCode = "0";
    $resolve();
}
const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}
OSFilePluginWrapper.LegacyMigration.listDirectory(onSuccess, onError, $parameters.Path, $parameters.IsInternal, $parameters.IsTemporary)
});
};
});
define("FilePlugin.controller$DEPRECATED_ListDirectory.ListDirectoryJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var dirReader = $parameters.Directory.createReader();
 
dirReader.readEntries(
    function (entries){
        var fileList = [];
        var directoryList = [];
        
        for (var i in entries) {
            if (entries[i].isDirectory) {
                directoryList.push(entries[i].name);
            }
            else {
                fileList.push(entries[i].name);
            }
        }
        
        $parameters.ErrorCode = "0";
        
        $parameters.FileList = JSON.stringify(fileList);
        $parameters.DirectoryList = JSON.stringify(directoryList);
        
        $resolve();
    },
    function(error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage = $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);
});
};
});

define("FilePlugin.controller$DEPRECATED_SaveFile", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_SaveFile.BinaryToBase64JS", "FilePlugin.controller$DEPRECATED_SaveFile.CreateFileJS", "FilePlugin.controller$DEPRECATED_SaveFile.LegacyCallJS", "FilePlugin.controller$PrepareDataObj", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "FilePlugin.controller$RequestDirectoryFromFileSystem", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$CreateDirectories", "FilePlugin.controller$SplitString", "FilePlugin.controller$GetErrorMessage"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_SaveFile_BinaryToBase64JS, FilePlugin_controller_DEPRECATED_SaveFile_CreateFileJS, FilePlugin_controller_DEPRECATED_SaveFile_LegacyCallJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_SaveFile$Action = function (binaryDataIn, nameIn, pathIn, storageTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_SaveFile$vars"))());
vars.value.binaryDataInLocal = binaryDataIn;
vars.value.nameInLocal = nameIn;
vars.value.pathInLocal = pathIn;
vars.value.storageTypeIdInLocal = storageTypeIdIn;
var prepareDataObjVar = new OS.DataTypes.VariableHolder();
var requestDirectoryFromFileSystemVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var checkAndCreateDirectoryFromPathVar = new OS.DataTypes.VariableHolder();
var getPathVar = new OS.DataTypes.VariableHolder();
var binaryToBase64JSResult = new OS.DataTypes.VariableHolder();
var createFileJSResult = new OS.DataTypes.VariableHolder();
var legacyCallJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_SaveFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.prepareDataObjVar = prepareDataObjVar;
varBag.requestDirectoryFromFileSystemVar = requestDirectoryFromFileSystemVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.checkAndCreateDirectoryFromPathVar = checkAndCreateDirectoryFromPathVar;
varBag.getPathVar = getPathVar;
varBag.binaryToBase64JSResult = binaryToBase64JSResult;
varBag.createFileJSResult = createFileJSResult;
varBag.legacyCallJSResult = legacyCallJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:nOIZg21YK0eS6iYq++Boqg:/ClientActionFlows.nOIZg21YK0eS6iYq++Boqg:0G01vIVpNKUVg2eAfQFXVQ", "FilePlugin", "DEPRECATED_SaveFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:pyK+7BhjCEStzxrwluXFaA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:V18RdKJM30K640hFFIj14A", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:LcvpC9JhiUiujzhudjQSAA", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:CtxhVLDuvUq4APYopFmfcA", callContext.id);
binaryToBase64JSResult.value = controller.safeExecuteJSNode(FilePlugin_controller_DEPRECATED_SaveFile_BinaryToBase64JS, "BinaryToBase64", "DEPRECATED_SaveFile", {
Binary: OS.DataConversion.JSNodeParamConverter.to(vars.value.binaryDataInLocal, OS.DataTypes.DataTypes.BinaryData),
Base64: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_SaveFile$binaryToBase64JSResult"))();
jsNodeResult.base64Out = OS.DataConversion.JSNodeParamConverter.from($parameters.Base64, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:DhCKrlNj00qLkdSWAel1FA", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_SaveFile_LegacyCallJS, "LegacyCall", "DEPRECATED_SaveFile", {
IsInternal: OS.DataConversion.JSNodeParamConverter.to((vars.value.storageTypeIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StorageType.internal), OS.DataTypes.DataTypes.Boolean),
Data: OS.DataConversion.JSNodeParamConverter.to(binaryToBase64JSResult.value.base64Out, OS.DataTypes.DataTypes.Text),
IsTemporary: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Uri: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_SaveFile$legacyCallJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.uriOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Uri, OS.DataTypes.DataTypes.Text);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
legacyCallJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:0vzMU3gz7U2OC207HWGkIw", callContext.id);
// Error.ErrorCode = LegacyCall.ErrorCode
outVars.value.errorOut.errorCodeAttr = legacyCallJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:0vzMU3gz7U2OC207HWGkIw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = LegacyCall.ErrorMessage
outVars.value.errorOut.errorMessageAttr = legacyCallJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:0vzMU3gz7U2OC207HWGkIw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Uri = LegacyCall.Uri
outVars.value.uriOut = legacyCallJSResult.value.uriOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ykCqQTNB+E64OK1qXPAejQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:cYI_VLQ1D0WqCOFmBuXoGQ", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:brOQMtcxDEijE1N8+JjluQ", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:SCYCVMDCJk6Cc6JNaeFanQ", callContext.id);
// Execute Action: RequestDirectoryFromFileSystem
return FilePluginController.default.requestDirectoryFromFileSystem$Action(vars.value.storageTypeIdInLocal, vars.value.storagePersistencyIdVar, callContext).then(function (value) {
requestDirectoryFromFileSystemVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:rIx3uM17O0GI6E+xGriwPQ", callContext.id) && (requestDirectoryFromFileSystemVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:r8eIqGv3Vkiwh7DXPjVJxQ", callContext.id);
// Execute Action: GetPath
getPathVar.value = FilePluginController.default.splitString$Action(vars.value.pathInLocal, "/", callContext);

OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:dWVEirVbHkSZELrMFwhqJg", callContext.id);
// Execute Action: CheckAndCreateDirectoryFromPath
return FilePluginController.default.createDirectories$Action(requestDirectoryFromFileSystemVar.value.directoryOut, getPathVar.value.subStringsOut.getItem((getPathVar.value.subStringsOut.length - 1)), (((getPathVar.value.subStringsOut.length > 1)) ? (OS.BuiltinFunctions.replace(vars.value.pathInLocal, ("/" + getPathVar.value.subStringsOut.getItem((getPathVar.value.subStringsOut.length - 1))), "")) : ("")), callContext).then(function (value) {
checkAndCreateDirectoryFromPathVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:P_Kggb5cNkaRvkI4C4dPFg", callContext.id) && (checkAndCreateDirectoryFromPathVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:KXd3ByAwhU6QtJjqSmx6lQ", callContext.id);
// Execute Action: PrepareDataObj
prepareDataObjVar.value = FilePluginController.default.prepareDataObj$Action(vars.value.binaryDataInLocal, vars.value.nameInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+StsbTSQF0qNFl+azsiuiQ", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_SaveFile_CreateFileJS, "CreateFile", "DEPRECATED_SaveFile", {
DataObj: OS.DataConversion.JSNodeParamConverter.to(prepareDataObjVar.value.dataObjOut, OS.DataTypes.DataTypes.Object),
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
Directory: OS.DataConversion.JSNodeParamConverter.to(checkAndCreateDirectoryFromPathVar.value.createdDirectoryOut, OS.DataTypes.DataTypes.Object),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Uri: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_SaveFile$createFileJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.uriOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Uri, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
createFileJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:owfNJm310UCwT3vJ_e7jEg", callContext.id);
// Error.ErrorCode = CreateFile.ErrorCode
outVars.value.errorOut.errorCodeAttr = createFileJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:owfNJm310UCwT3vJ_e7jEg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = CreateFile.ErrorMessage
outVars.value.errorOut.errorMessageAttr = createFileJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:owfNJm310UCwT3vJ_e7jEg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Uri = CreateFile.Uri
outVars.value.uriOut = createFileJSResult.value.uriOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+MQhPJovrEW+sZ4xhW6_yw", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:iH1f5RHwTU6qHZmAJ046YA", callContext.id);
// Error = CheckAndCreateDirectoryFromPath.Error
outVars.value.errorOut = checkAndCreateDirectoryFromPathVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:AyY+Mrv1GUORANHm89HXZw", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:oDQK0SOPv0Kl4nG0uwCabw", callContext.id);
// Error = RequestDirectoryFromFileSystem.Error
outVars.value.errorOut = requestDirectoryFromFileSystemVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:KLwcsKZo0UGuuOfpcTLRKg", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:5WCJjPumtkCddLXFbsk_gw", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:5WCJjPumtkCddLXFbsk_gw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:dhuLJSTa00uyV6gGAZ+BpQ", callContext.id);
}

});
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:nOIZg21YK0eS6iYq++Boqg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:nOIZg21YK0eS6iYq++Boqg", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_SaveFile$vars", [{
name: "BinaryData",
attrName: "binaryDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}, {
name: "Name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StorageTypeId",
attrName: "storageTypeIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StorageType.internal;
}
}, {
name: "StoragePersistencyId",
attrName: "storagePersistencyIdVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.persistent;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_SaveFile$binaryToBase64JSResult", [{
name: "Base64",
attrName: "base64Out",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_SaveFile$createFileJSResult", [{
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
name: "Uri",
attrName: "uriOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_SaveFile$legacyCallJSResult", [{
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
name: "Uri",
attrName: "uriOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_SaveFile$outVars", [{
name: "Uri",
attrName: "uriOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
FilePluginController.default.clientActionProxies.dEPRECATED_SaveFile$Action = function (binaryDataIn, nameIn, pathIn, storageTypeIdIn) {
binaryDataIn = (binaryDataIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : binaryDataIn;
nameIn = (nameIn === undefined) ? "" : nameIn;
pathIn = (pathIn === undefined) ? "" : pathIn;
storageTypeIdIn = (storageTypeIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StorageType.internal : storageTypeIdIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_SaveFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(binaryDataIn, OS.DataTypes.DataTypes.BinaryData), OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), storageTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Uri: OS.DataConversion.JSNodeParamConverter.to(actionResults.uriOut, OS.DataTypes.DataTypes.Text),
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$DEPRECATED_SaveFile.BinaryToBase64JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Base64 = $parameters.Binary;
};
});
define("FilePlugin.controller$DEPRECATED_SaveFile.CreateFileJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.Directory.getFile($parameters.FileName, { create: true, exclusive: false },
    function (fileEntry) {
        writeFile(fileEntry, $parameters.DataObj)
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
        $resolve();
    }
);

function onError(error) {
    $parameters.ErrorCode = "-1";
    $parameters.ErrorMessage = error.toString();
    $resolve();
}

function writeFile(fileEntry, data) {
       fileEntry.createWriter(function (fileWriter) {
            fileWriter.onerror = onError
            function writeFinish() {
                function success(file) {
                    $parameters.ErrorCode = "0";
                    $parameters.Uri = fileEntry.nativeURL;
                    $resolve();                    
                }
                fileEntry.file(success, onError);
            }
            var written = 0;
            const KILO_BYTE_SIZE = 1024;
            var BLOCK_SIZE = 1*KILO_BYTE_SIZE*KILO_BYTE_SIZE;
            function writeNext(cbFinish) {
                fileWriter.onwrite = function(event) {
                    if (written < data.size)
                        writeNext(cbFinish);
                    else
                        cbFinish();
                };
                if (written) fileWriter.seek(fileWriter.length);
                fileWriter.write(data.slice(written, written + Math.min(BLOCK_SIZE, data.size - written)));
                written += Math.min(BLOCK_SIZE, data.size - written);
            }
            writeNext(writeFinish);
        });
    }

});
};
});
define("FilePlugin.controller$DEPRECATED_SaveFile.LegacyCallJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (res) => {
    $parameters.Success = true;
    $parameters.Uri = res.uri;
    $parameters.ErrorCode = "0";
    $resolve();
}

const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message

    $resolve();
}

OSFilePluginWrapper.LegacyMigration.writeFile(onSuccess, onError, $parameters.FileName,$parameters.Path, $parameters.Data, $parameters.IsInternal, $parameters.IsTemporary)
});
};
});

define("FilePlugin.controller$DEPRECATED_SaveTemporaryFile", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$DEPRECATED_SaveTemporaryFile.LegacyCallJS", "FilePlugin.controller$DEPRECATED_SaveTemporaryFile.BinaryToBase64JS", "FilePlugin.controller$DEPRECATED_SaveTemporaryFile.CreateFileJS", "FilePlugin.controller$SplitString", "FilePlugin.controller$PrepareDataObj", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "FilePlugin.controller$CreateDirectories", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.controller$RequestDirectoryFromFileSystem", "FilePlugin.controller$DEPRECATED_CheckFilePlugin", "FilePlugin.controller$GetErrorMessage"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_DEPRECATED_SaveTemporaryFile_LegacyCallJS, FilePlugin_controller_DEPRECATED_SaveTemporaryFile_BinaryToBase64JS, FilePlugin_controller_DEPRECATED_SaveTemporaryFile_CreateFileJS) {
var OS = OutSystems.Internal;
FilePluginController.default.dEPRECATED_SaveTemporaryFile$Action = function (binaryDataIn, nameIn, pathIn, storageTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_SaveTemporaryFile$vars"))());
vars.value.binaryDataInLocal = binaryDataIn;
vars.value.nameInLocal = nameIn;
vars.value.pathInLocal = pathIn;
vars.value.storageTypeIdInLocal = storageTypeIdIn;
var getPathVar = new OS.DataTypes.VariableHolder();
var prepareDataObjVar = new OS.DataTypes.VariableHolder();
var checkAndCreateDirectoryFromPathVar = new OS.DataTypes.VariableHolder();
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var requestDirectoryFromFileSystemVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_CheckFilePluginVar = new OS.DataTypes.VariableHolder();
var legacyCallJSResult = new OS.DataTypes.VariableHolder();
var binaryToBase64JSResult = new OS.DataTypes.VariableHolder();
var createFileJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_SaveTemporaryFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getPathVar = getPathVar;
varBag.prepareDataObjVar = prepareDataObjVar;
varBag.checkAndCreateDirectoryFromPathVar = checkAndCreateDirectoryFromPathVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.requestDirectoryFromFileSystemVar = requestDirectoryFromFileSystemVar;
varBag.dEPRECATED_CheckFilePluginVar = dEPRECATED_CheckFilePluginVar;
varBag.legacyCallJSResult = legacyCallJSResult;
varBag.binaryToBase64JSResult = binaryToBase64JSResult;
varBag.createFileJSResult = createFileJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:9a6xunVuS0ukjC8m08ud7Q:/ClientActionFlows.9a6xunVuS0ukjC8m08ud7Q:_Qdc8ggH2cjnbCSejtts1Q", "FilePlugin", "DEPRECATED_SaveTemporaryFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:N1gAxmMaokSFC9ufk40AVQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:GZJgjv9Ghk6rgLiRMp7Xew", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:J2CURiSgVUyAPni5_BpRYQ", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:DDMMwLAq0kK+D6dSCic8dg", callContext.id);
binaryToBase64JSResult.value = controller.safeExecuteJSNode(FilePlugin_controller_DEPRECATED_SaveTemporaryFile_BinaryToBase64JS, "BinaryToBase64", "DEPRECATED_SaveTemporaryFile", {
Binary: OS.DataConversion.JSNodeParamConverter.to(vars.value.binaryDataInLocal, OS.DataTypes.DataTypes.BinaryData),
Base64: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_SaveTemporaryFile$binaryToBase64JSResult"))();
jsNodeResult.base64Out = OS.DataConversion.JSNodeParamConverter.from($parameters.Base64, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:RPVoU32AEEWEdSP9XRCYRA", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_SaveTemporaryFile_LegacyCallJS, "LegacyCall", "DEPRECATED_SaveTemporaryFile", {
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
IsInternal: OS.DataConversion.JSNodeParamConverter.to((vars.value.storageTypeIdInLocal === FilePluginModel.staticEntities.dEPRECATED_StorageType.internal), OS.DataTypes.DataTypes.Boolean),
Data: OS.DataConversion.JSNodeParamConverter.to(binaryToBase64JSResult.value.base64Out, OS.DataTypes.DataTypes.Text),
IsTemporary: OS.DataConversion.JSNodeParamConverter.to(true, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Uri: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_SaveTemporaryFile$legacyCallJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.uriOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Uri, OS.DataTypes.DataTypes.Text);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
legacyCallJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:lIs_XcqUrkeZV9xllSe1sQ", callContext.id);
// Error.ErrorCode = LegacyCall.ErrorCode
outVars.value.errorOut.errorCodeAttr = legacyCallJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:lIs_XcqUrkeZV9xllSe1sQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = LegacyCall.ErrorMessage
outVars.value.errorOut.errorMessageAttr = legacyCallJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:lIs_XcqUrkeZV9xllSe1sQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Uri = LegacyCall.Uri
outVars.value.uriOut = legacyCallJSResult.value.uriOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:KJFKlt50_0Oz64YDuvLkHw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:xrz24UcgUEGJdIbbGvYQQw", callContext.id);
// Execute Action: DEPRECATED_CheckFilePlugin
dEPRECATED_CheckFilePluginVar.value = FilePluginController.default.dEPRECATED_CheckFilePlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:sNbfpVwf0EGy_i40Lf14wA", callContext.id) && dEPRECATED_CheckFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:EpeXyAarMUSqovCpA_F5fQ", callContext.id);
// Execute Action: RequestDirectoryFromFileSystem
return FilePluginController.default.requestDirectoryFromFileSystem$Action(vars.value.storageTypeIdInLocal, vars.value.storagePersistencyIdVar, callContext).then(function (value) {
requestDirectoryFromFileSystemVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:gdpQAjK7ZE63kluFxVpVxg", callContext.id) && (requestDirectoryFromFileSystemVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:PLblMCvzjECoufppRpAvUA", callContext.id);
// Execute Action: GetPath
getPathVar.value = FilePluginController.default.splitString$Action(vars.value.pathInLocal, "/", callContext);

OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:DHGIVqTNpUeJIcjDYeue9w", callContext.id);
// Execute Action: CheckAndCreateDirectoryFromPath
return FilePluginController.default.createDirectories$Action(requestDirectoryFromFileSystemVar.value.directoryOut, getPathVar.value.subStringsOut.getItem((getPathVar.value.subStringsOut.length - 1)), (((getPathVar.value.subStringsOut.length > 1)) ? (OS.BuiltinFunctions.replace(vars.value.pathInLocal, ("/" + getPathVar.value.subStringsOut.getItem((getPathVar.value.subStringsOut.length - 1))), "")) : ("")), callContext).then(function (value) {
checkAndCreateDirectoryFromPathVar.value = value;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:x3rCuWS5xECeJcD24CwEhg", callContext.id) && (checkAndCreateDirectoryFromPathVar.value.errorOut.errorCodeAttr === "0"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:zKrmQL1Q0EWhXb3BkdErog", callContext.id);
// Execute Action: PrepareDataObj
prepareDataObjVar.value = FilePluginController.default.prepareDataObj$Action(vars.value.binaryDataInLocal, vars.value.nameInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:VQMd8MkpzE+XWsS9DSkhxw", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_DEPRECATED_SaveTemporaryFile_CreateFileJS, "CreateFile", "DEPRECATED_SaveTemporaryFile", {
DataObj: OS.DataConversion.JSNodeParamConverter.to(prepareDataObjVar.value.dataObjOut, OS.DataTypes.DataTypes.Object),
Directory: OS.DataConversion.JSNodeParamConverter.to(checkAndCreateDirectoryFromPathVar.value.createdDirectoryOut, OS.DataTypes.DataTypes.Object),
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Uri: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.DEPRECATED_SaveTemporaryFile$createFileJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.uriOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Uri, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
createFileJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:B7beLNH4VkqZ7dmPuyp54Q", callContext.id);
// Error.ErrorCode = CreateFile.ErrorCode
outVars.value.errorOut.errorCodeAttr = createFileJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:B7beLNH4VkqZ7dmPuyp54Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = CreateFile.ErrorMessage
outVars.value.errorOut.errorMessageAttr = createFileJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:B7beLNH4VkqZ7dmPuyp54Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Uri = CreateFile.Uri
outVars.value.uriOut = createFileJSResult.value.uriOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ibo5_huRSEKjb4smg0en5Q", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:lMqQ3iRva0iCN0l713XbOg", callContext.id);
// Error = CheckAndCreateDirectoryFromPath.Error
outVars.value.errorOut = checkAndCreateDirectoryFromPathVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:1HE1dPBa_kmnQb2lD18+ug", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ELp9GYq3HEmMawh+8lAOUA", callContext.id);
// Error = RequestDirectoryFromFileSystem.Error
outVars.value.errorOut = requestDirectoryFromFileSystemVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:oY8UtxlzKEWpP+YeIJ6MPA", callContext.id);
}

});
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:NfjVLW+vrESuwhACjSvccA", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:NfjVLW+vrESuwhACjSvccA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:70kxym0y6EqTWMABk2O3RA", callContext.id);
}

});
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:9a6xunVuS0ukjC8m08ud7Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:9a6xunVuS0ukjC8m08ud7Q", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_SaveTemporaryFile$vars", [{
name: "BinaryData",
attrName: "binaryDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}, {
name: "Name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StorageTypeId",
attrName: "storageTypeIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StorageType.internal;
}
}, {
name: "StoragePersistencyId",
attrName: "storagePersistencyIdVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.temporary;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_SaveTemporaryFile$legacyCallJSResult", [{
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
name: "Uri",
attrName: "uriOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_SaveTemporaryFile$binaryToBase64JSResult", [{
name: "Base64",
attrName: "base64Out",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_SaveTemporaryFile$createFileJSResult", [{
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
name: "Uri",
attrName: "uriOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.DEPRECATED_SaveTemporaryFile$outVars", [{
name: "Uri",
attrName: "uriOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
FilePluginController.default.clientActionProxies.dEPRECATED_SaveTemporaryFile$Action = function (binaryDataIn, nameIn, pathIn, storageTypeIdIn) {
binaryDataIn = (binaryDataIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : binaryDataIn;
nameIn = (nameIn === undefined) ? "" : nameIn;
pathIn = (pathIn === undefined) ? "" : pathIn;
storageTypeIdIn = (storageTypeIdIn === undefined) ? FilePluginModel.staticEntities.dEPRECATED_StorageType.internal : storageTypeIdIn;
return controller.executeActionInsideJSNode(FilePluginController.default.dEPRECATED_SaveTemporaryFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(binaryDataIn, OS.DataTypes.DataTypes.BinaryData), OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), storageTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Uri: OS.DataConversion.JSNodeParamConverter.to(actionResults.uriOut, OS.DataTypes.DataTypes.Text),
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$DEPRECATED_SaveTemporaryFile.LegacyCallJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (res) => {
    $parameters.Success = true;
    $parameters.Uri = res.uri;
    $parameters.ErrorCode = "0";
    $resolve();
}

const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message

    $resolve();
}
OSFilePluginWrapper.LegacyMigration.writeFile(onSuccess, onError, $parameters.FileName, $parameters.Path, $parameters.Data, $parameters.IsInternal, $parameters.IsTemporary)
});
};
});
define("FilePlugin.controller$DEPRECATED_SaveTemporaryFile.BinaryToBase64JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Base64 = $parameters.Binary;
};
});
define("FilePlugin.controller$DEPRECATED_SaveTemporaryFile.CreateFileJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.Directory.getFile($parameters.FileName, { create: true, exclusive: false },
    function (fileEntry) {
        writeFile(fileEntry, $parameters.DataObj)
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
        $resolve();
    }
);

function onError(error) {
    $parameters.ErrorCode = "-1";
    $parameters.ErrorMessage = error.toString();
    $resolve();
}

function writeFile(fileEntry, data) {
       fileEntry.createWriter(function (fileWriter) {
            fileWriter.onerror = onError
            function writeFinish() {
                function success(file) {
                    $parameters.ErrorCode = "0";
                    $parameters.Uri = fileEntry.nativeURL;
                    $resolve();                    
                }
                fileEntry.file(success, onError);
            }
            var written = 0;
            const KILO_BYTE_SIZE = 1024;
            var BLOCK_SIZE = 1*KILO_BYTE_SIZE*KILO_BYTE_SIZE;
            function writeNext(cbFinish) {
                fileWriter.onwrite = function(event) {
                    if (written < data.size)
                        writeNext(cbFinish);
                    else
                        cbFinish();
                };
                if (written) fileWriter.seek(fileWriter.length);
                fileWriter.write(data.slice(written, written + Math.min(BLOCK_SIZE, data.size - written)));
                written += Math.min(BLOCK_SIZE, data.size - written);
            }
            writeNext(writeFinish);
        });
    }

});
};
});

define("FilePlugin.controller$GetDirectory", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$GetDirectory.GetDirectoryJS", "FilePlugin.controller$GetErrorMessage", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_GetDirectory_GetDirectoryJS) {
var OS = OutSystems.Internal;
FilePluginController.default.getDirectory$Action = function (rootDirectoryIn, pathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.GetDirectory$vars"))());
vars.value.rootDirectoryInLocal = rootDirectoryIn;
vars.value.pathInLocal = pathIn;
var getDirectoryJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.GetDirectory$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getDirectoryJSResult = getDirectoryJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:LtArkbczm0qtSqLLyidN5g:/ClientActionFlows.LtArkbczm0qtSqLLyidN5g:pyyjsMu9kg7YePSIdsl5lA", "FilePlugin", "GetDirectory", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:DfmOZqagLU+LWLkBIwpCaA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:RsFUKKx75EWk3BFcMg61xw", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_GetDirectory_GetDirectoryJS, "GetDirectory", "GetDirectory", {
RootDirectory: OS.DataConversion.JSNodeParamConverter.to(vars.value.rootDirectoryInLocal, OS.DataTypes.DataTypes.Object),
Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Directory: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.GetDirectory$getDirectoryJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.directoryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Directory, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
getDirectoryJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:eg3pETvf802euS+Y8+IL6g", callContext.id);
// Error.ErrorCode = GetDirectory.ErrorCode
outVars.value.errorOut.errorCodeAttr = getDirectoryJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:eg3pETvf802euS+Y8+IL6g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = GetDirectory.ErrorMessage
outVars.value.errorOut.errorMessageAttr = getDirectoryJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:eg3pETvf802euS+Y8+IL6g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Directory = GetDirectory.Directory
outVars.value.directoryOut = getDirectoryJSResult.value.directoryOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:jY1uvRu+fUCDVcOgFMhAhA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:LtArkbczm0qtSqLLyidN5g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:LtArkbczm0qtSqLLyidN5g", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetDirectory$vars", [{
name: "RootDirectory",
attrName: "rootDirectoryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetDirectory$getDirectoryJSResult", [{
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
name: "Directory",
attrName: "directoryOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetDirectory$outVars", [{
name: "Directory",
attrName: "directoryOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
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
FilePluginController.default.clientActionProxies.getDirectory$Action = function (rootDirectoryIn, pathIn) {
rootDirectoryIn = (rootDirectoryIn === undefined) ? null : rootDirectoryIn;
pathIn = (pathIn === undefined) ? "" : pathIn;
return controller.executeActionInsideJSNode(FilePluginController.default.getDirectory$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(rootDirectoryIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Directory: OS.DataConversion.JSNodeParamConverter.to(actionResults.directoryOut, OS.DataTypes.DataTypes.Object),
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$GetDirectory.GetDirectoryJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
console.log($parameters.RootDirectory);
console.log($parameters.Name);
$parameters.RootDirectory.getDirectory($parameters.Name, { create: false }, 
        function (dirEntry) {
            console.log(dirEntry);
            $parameters.ErrorCode = "0";
            $parameters.Directory = dirEntry;
            
            $resolve();
        }, 
        function (error) {
            $parameters.ErrorCode = error.code;
            $parameters.ErrorMessage =  $actions.GetErrorMessage(error.code).Message;
            
            $resolve();
        }
    );
});
};
});

define("FilePlugin.controller$GetErrorMessage", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller"], function (exports, OutSystems, FilePluginModel, FilePluginController) {
var OS = OutSystems.Internal;
FilePluginController.default.getErrorMessage$Action = function (errorCodeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.GetErrorMessage$vars"))());
vars.value.errorCodeInLocal = errorCodeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.GetErrorMessage$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:FghpHg8ym0GDbBKNErAqNw:/ClientActionFlows.FghpHg8ym0GDbBKNErAqNw:gstulBHoFaboUYWjCmUXbg", "FilePlugin", "GetErrorMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:zSmsjit4wEWuos0US19gjg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:FO6dlwf2z0ymTsDk2uMpIw", callContext.id) && (vars.value.errorCodeInLocal === "1"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:jqyc9A3DbkS84WtVVhwipA", callContext.id);
// Message = "Not Found"
outVars.value.messageOut = "Not Found";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:4nAi3Dw6hE6puIp7U6s36A", callContext.id);
} else {
if((vars.value.errorCodeInLocal === "2")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:xODvdLnrZkKOtDEyHg710Q", callContext.id);
// Message = "Security Error"
outVars.value.messageOut = "Security Error";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:r9Pzye8yw0KudXR56LTV8w", callContext.id);
} else {
if((vars.value.errorCodeInLocal === "3")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:qhxYZXIAKEGn4EZNveNULQ", callContext.id);
// Message = "Action Aborted"
outVars.value.messageOut = "Action Aborted";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:fbFbod+XgkyNDFVoYozpTw", callContext.id);
} else {
if((vars.value.errorCodeInLocal === "4")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:A0eKTyLCb0qlcW0cPrAVGQ", callContext.id);
// Message = "Not Readable"
outVars.value.messageOut = "Not Readable";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:RuyDCqGbXUaPBRPoYM6BqA", callContext.id);
} else {
if((vars.value.errorCodeInLocal === "5")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:IKlQ1McT_UyvmZfEoIh56w", callContext.id);
// Message = "Encoding Error"
outVars.value.messageOut = "Encoding Error";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:CjL7St_4B0WMKY2jcPVL2Q", callContext.id);
} else {
if((vars.value.errorCodeInLocal === "6")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:yFjkOYEEO0GSAy7Ko7gcuw", callContext.id);
// Message = "No Modification Allowed"
outVars.value.messageOut = "No Modification Allowed";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:aVMbKpmgrUuRPf4CBFlfXQ", callContext.id);
} else {
if((vars.value.errorCodeInLocal === "7")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:o4SsClx9FU6WzaaWUruWGw", callContext.id);
// Message = "Invalid State"
outVars.value.messageOut = "Invalid State";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:j4iLZZYOmEOXDQiXWWkkgw", callContext.id);
} else {
if((vars.value.errorCodeInLocal === "8")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:rdjmTMvOSEuQHB29+rQfLA", callContext.id);
// Message = "Sintax Error"
outVars.value.messageOut = "Sintax Error";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:k+I1hmVEGUmJz2ZDAKWuXQ", callContext.id);
} else {
if((vars.value.errorCodeInLocal === "9")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:BOROX3QDgEu3_nDSs2PGxw", callContext.id);
// Message = "Invalid Modification"
outVars.value.messageOut = "Invalid Modification";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:sSawfbLnIEaWyFkWf7g9UA", callContext.id);
} else {
if((vars.value.errorCodeInLocal === "10")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:76Bc3V8rS0Kbo5KvLPvZBg", callContext.id);
// Message = "Quota Exceeded"
outVars.value.messageOut = "Quota Exceeded";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:xeC5KlVBzUOg49D7R2WSSQ", callContext.id);
} else {
if((vars.value.errorCodeInLocal === "11")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:UihVQnAJnkiGCPoameNTZw", callContext.id);
// Message = "Type Mismatch"
outVars.value.messageOut = "Type Mismatch";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ETs2BzDMKUa3WQqFVkSxng", callContext.id);
} else {
if((vars.value.errorCodeInLocal === "12")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:W6Xfe9MG20mZ0M2GGf5qpg", callContext.id);
// Message = "No Path Exists"
outVars.value.messageOut = "No Path Exists";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:yvN_iVLESU6ij+V5JFCbfQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ACB+sXPcLUadAf+8t3MBlQ", callContext.id);
// Message = "Unmapped error"
outVars.value.messageOut = "Unmapped error";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:HlyWlU+RdkCH3PL57VCOPw", callContext.id);
}

}

}

}

}

}

}

}

}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:FghpHg8ym0GDbBKNErAqNw", callContext.id);
}

};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetErrorMessage$vars", [{
name: "ErrorCode",
attrName: "errorCodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetErrorMessage$outVars", [{
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.clientActionProxies.getErrorMessage$Action = function (errorCodeIn) {
errorCodeIn = (errorCodeIn === undefined) ? "" : errorCodeIn;
return controller.executeActionInsideJSNode(FilePluginController.default.getErrorMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(errorCodeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Message: OS.DataConversion.JSNodeParamConverter.to(actionResults.messageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("FilePlugin.controller$GetFileType", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "FilePlugin.controller$SplitString"], function (exports, OutSystems, FilePluginModel, FilePluginController) {
var OS = OutSystems.Internal;
FilePluginController.default.getFileType$Action = function (nameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.GetFileType$vars"))());
vars.value.nameInLocal = nameIn;
var splitStringVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.GetFileType$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.splitStringVar = splitStringVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:1NyA9DZX_UeeRFN2WqDG_w:/ClientActionFlows.1NyA9DZX_UeeRFN2WqDG_w:mSoRRAWYc9TOkcIa4gwLjw", "FilePlugin", "GetFileType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:1QSr2BFgkkerP3eZGDuMHA", callContext.id);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ScsBqGiNzEO0on7OPFfbYQ", callContext.id);
// Execute Action: SplitString
splitStringVar.value = FilePluginController.default.splitString$Action(vars.value.nameInLocal, ".", callContext);

OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:8tqGnUOwWkm97r6kRlt65A", callContext.id);
// Extension = SplitString.SubStrings[SplitString.SubStrings.Length - 1]
vars.value.extensionVar = splitStringVar.value.subStringsOut.getItem((splitStringVar.value.subStringsOut.length - 1));
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ZOKneU_VFEi7Lxp6rAcliA", callContext.id) && (vars.value.extensionVar === "jpg"))) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:UbAMqEy6YU+F2DY02kGGrw", callContext.id);
// Type = "image/jpg"
outVars.value.typeOut = "image/jpg";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:nmjleg74QkeySJNMnW_4kQ", callContext.id);
} else {
if((vars.value.extensionVar === "jpeg")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Ike8yrGgXUy4SM0u++MESw", callContext.id);
// Type = "image/jpeg"
outVars.value.typeOut = "image/jpeg";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:dT0RU0Sfj0qE9nSbZ7l5CA", callContext.id);
} else {
if((vars.value.extensionVar === "png")) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:cdBgL6C7WUKy25H86RVOAA", callContext.id);
// Type = "image/png"
outVars.value.typeOut = "image/png";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:1zQmNUkQREiPbp3KwBPyKg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:cIIEo0+n70ajUuXl+7dh5w", callContext.id);
// Type = "application/octet-binary"
outVars.value.typeOut = "application/octet-binary";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Ieyd2aNVfUOJmksCIo79Aw", callContext.id);
}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:1NyA9DZX_UeeRFN2WqDG_w", callContext.id);
}

};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetFileType$vars", [{
name: "Name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Extension",
attrName: "extensionVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetFileType$outVars", [{
name: "Type",
attrName: "typeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.clientActionProxies.getFileType$Action = function (nameIn) {
nameIn = (nameIn === undefined) ? "" : nameIn;
return controller.executeActionInsideJSNode(FilePluginController.default.getFileType$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Type: OS.DataConversion.JSNodeParamConverter.to(actionResults.typeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("FilePlugin.controller$GetFileUri", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$GetFileUri.GetURIJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_GetFileUri_GetURIJS) {
var OS = OutSystems.Internal;
FilePluginController.default.getFileUri$Action = function (pathIn, directoryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.GetFileUri$vars"))());
vars.value.pathInLocal = pathIn;
vars.value.directoryInLocal = directoryIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var getURIJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.GetFileUri$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.getURIJSResult = getURIJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:n1qAcPyFI0yDJ+fO3xvk9g:/ClientActionFlows.n1qAcPyFI0yDJ+fO3xvk9g:kTnIRbbYj5GhRVH_SAIdsA", "FilePlugin", "GetFileUri", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:TtVVDTeM70amAi+cKK1KZw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:USx6zvGS9k+0eWJ13lERpw", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:R6UF6lgKtUWrjTL6JulG1Q", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:NCe4GhGnM0if6UAm+SpScw", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_GetFileUri_GetURIJS, "GetURI", "GetFileUri", {
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
Directory: OS.DataConversion.JSNodeParamConverter.to(vars.value.directoryInLocal, OS.DataTypes.DataTypes.Text),
URI: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Sucess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.GetFileUri$getURIJSResult"))();
jsNodeResult.uRIOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URI, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.sucessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Sucess, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
getURIJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:N5Phxzk050aZ9SqN6reLCw", callContext.id);
// URI = GetURI.URI
outVars.value.uRIOut = getURIJSResult.value.uRIOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:N5Phxzk050aZ9SqN6reLCw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = GetURI.Sucess
outVars.value.successOut = getURIJSResult.value.sucessOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:N5Phxzk050aZ9SqN6reLCw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = GetURI.ErrorCode
outVars.value.errorOut.errorCodeAttr = getURIJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:N5Phxzk050aZ9SqN6reLCw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = GetURI.ErrorMessage
outVars.value.errorOut.errorMessageAttr = getURIJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:27PAHNvbZEK9wkHAL6lL2g", callContext.id);
});
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:mL8NuVJ5QkKyPLbMPNxICw", callContext.id);
// Error = CheckFilePlugin.Error
outVars.value.errorOut = checkFilePluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:mL8NuVJ5QkKyPLbMPNxICw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning = CheckFilePlugin.Warning
outVars.value.warningOut = checkFilePluginVar.value.warningOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ZV2aR5APK0SYnLAPptP2Lg", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:n1qAcPyFI0yDJ+fO3xvk9g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:n1qAcPyFI0yDJ+fO3xvk9g", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetFileUri$vars", [{
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Directory",
attrName: "directoryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetFileUri$getURIJSResult", [{
name: "URI",
attrName: "uRIOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
name: "Sucess",
attrName: "sucessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetFileUri$outVars", [{
name: "URI",
attrName: "uRIOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Success",
attrName: "successOut",
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
FilePluginController.default.clientActionProxies.getFileUri$Action = function (pathIn, directoryIn) {
pathIn = (pathIn === undefined) ? "" : pathIn;
directoryIn = (directoryIn === undefined) ? "" : directoryIn;
return controller.executeActionInsideJSNode(FilePluginController.default.getFileUri$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), directoryIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
URI: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRIOut, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FilePlugin.controller$GetFileUri.GetURIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (result) => {
    $parameters.URI = result.uri;
    $parameters.Sucess = true;
    $resolve();
}

const onError = (error) => {
    $parameters.Sucess = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message

    $resolve();
}

OSFilePluginWrapper.Instance.getUri(onSuccess, onError, {path: $parameters.Path, directory: $parameters.Directory})
});
};
});

define("FilePlugin.controller$GetMetadata", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$GetMetadata.GetMetadataJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.model$FileInfoPrivateRec", "FilePlugin.model$FileInfoRec"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_GetMetadata_GetMetadataJS) {
var OS = OutSystems.Internal;
FilePluginController.default.getMetadata$Action = function (pathIn, directoryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.GetMetadata$vars"))());
vars.value.pathInLocal = pathIn;
vars.value.directoryInLocal = directoryIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var getMetadataJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeFileInfoVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(FilePluginModel.FileInfoPrivateRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.GetMetadata$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.getMetadataJSResult = getMetadataJSResult;
varBag.jSONDeserializeFileInfoVar = jSONDeserializeFileInfoVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:zdozLdk6YUy5aiROk_IjIg:/ClientActionFlows.zdozLdk6YUy5aiROk_IjIg:UOTKrLZQFnpNk_qlzCz2Yg", "FilePlugin", "GetMetadata", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:E0zL8jYF+U+TRGoT63YgSA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:1lTCL9vdZUy097yI5VGYAA", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:yIQOz988HUiH+kmEF1AncA", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:RB60BT4jsUyFd12nYxNT2A", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_GetMetadata_GetMetadataJS, "GetMetadata", "GetMetadata", {
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
Directory: OS.DataConversion.JSNodeParamConverter.to(vars.value.directoryInLocal, OS.DataTypes.DataTypes.Text),
Metadata: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Sucess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.GetMetadata$getMetadataJSResult"))();
jsNodeResult.metadataOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Metadata, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.sucessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Sucess, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
getMetadataJSResult.value = results;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:AgsgoOoqr0+Dzo5outHBew", callContext.id) && getMetadataJSResult.value.sucessOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Fq4SfW1NLki_+BDiH+ZBKA", callContext.id);
// JSON Deserialize: JSONDeserializeFileInfo
jSONDeserializeFileInfoVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getMetadataJSResult.value.metadataOut, FilePluginModel.FileInfoPrivateRec, false);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:3_ZshffzQkWkGjHvt4_zFg", callContext.id);
// Result = JSONDeserializeFileInfo.Data
outVars.value.resultOut = OS.DataConversion.JSConversions.typeConvertRecord(jSONDeserializeFileInfoVar.value.dataOut, new FilePluginModel.FileInfoRec(), function (source, target) {
target.nameAttr = source.nameAttr;
target.typeAttr = source.typeAttr;
target.sizeAttr = source.sizeAttr;
target.uRIAttr = source.uRIAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:3_ZshffzQkWkGjHvt4_zFg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = GetMetadata.Sucess
outVars.value.successOut = getMetadataJSResult.value.sucessOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:3_ZshffzQkWkGjHvt4_zFg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Result.CreationTime = AddSeconds
outVars.value.resultOut.creationTimeAttr = OS.BuiltinFunctions.addSeconds(OS.BuiltinFunctions.newDateTime(1970, 1, 1, 0, 0, 0), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.longIntegerToDecimal(OS.BuiltinFunctions.textToLongInteger(jSONDeserializeFileInfoVar.value.dataOut.ctimeAttr)).div(OS.BuiltinFunctions.integerToDecimal(1000)))));
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:3_ZshffzQkWkGjHvt4_zFg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Result.ModificationTime = AddSeconds
outVars.value.resultOut.modificationTimeAttr = OS.BuiltinFunctions.addSeconds(OS.BuiltinFunctions.newDateTime(1970, 1, 1, 0, 0, 0), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.longIntegerToDecimal(OS.BuiltinFunctions.textToLongInteger(jSONDeserializeFileInfoVar.value.dataOut.mtimeAttr)).div(OS.BuiltinFunctions.integerToDecimal(1000)))));
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7s1fnI4ijUuyPO5XWHuObw", callContext.id);
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:uDJYJKY+e06GlQ7Q+jlbwQ", callContext.id);
// Error.ErrorCode = GetMetadata.ErrorCode
outVars.value.errorOut.errorCodeAttr = getMetadataJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:uDJYJKY+e06GlQ7Q+jlbwQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = GetMetadata.ErrorMessage
outVars.value.errorOut.errorMessageAttr = getMetadataJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Y28rCVqesEKb7k+HyIwxTQ", callContext.id);
}

});
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ZMd9MgHmWEq9rkb_LF3UrA", callContext.id);
// Error = CheckFilePlugin.Error
outVars.value.errorOut = checkFilePluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ZMd9MgHmWEq9rkb_LF3UrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning = CheckFilePlugin.Warning
outVars.value.warningOut = checkFilePluginVar.value.warningOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Y28rCVqesEKb7k+HyIwxTQ", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:zdozLdk6YUy5aiROk_IjIg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:zdozLdk6YUy5aiROk_IjIg", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetMetadata$vars", [{
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Directory",
attrName: "directoryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetMetadata$getMetadataJSResult", [{
name: "Metadata",
attrName: "metadataOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
name: "Sucess",
attrName: "sucessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.GetMetadata$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FilePluginModel.FileInfoRec();
},
complexType: FilePluginModel.FileInfoRec
}, {
name: "Success",
attrName: "successOut",
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
FilePluginController.default.clientActionProxies.getMetadata$Action = function (pathIn, directoryIn) {
pathIn = (pathIn === undefined) ? "" : pathIn;
directoryIn = (directoryIn === undefined) ? "" : directoryIn;
return controller.executeActionInsideJSNode(FilePluginController.default.getMetadata$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), directoryIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: actionResults.resultOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FilePlugin.controller$GetMetadata.GetMetadataJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (result) => {
    $parameters.Metadata = JSON.stringify(result);
    $parameters.Sucess = true;
    $resolve();
}

const onError = (error) => {
    $parameters.Sucess = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message

    $resolve();
}
let options = {
    path: $parameters.Path, 
}

if($parameters.Directory != "") options.directory = $parameters.Directory

OSFilePluginWrapper.Instance.stat(onSuccess, onError, options)
});
};
});

define("FilePlugin.controller$ListDirectory", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$ListDirectory.ListDirectoryJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin", "FilePlugin.model$FileInfoPrivateList", "FilePlugin.model$FileInfoList"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_ListDirectory_ListDirectoryJS) {
var OS = OutSystems.Internal;
FilePluginController.default.listDirectory$Action = function (pathIn, directoryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.ListDirectory$vars"))());
vars.value.pathInLocal = pathIn;
vars.value.directoryInLocal = directoryIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var listDirectoryJSResult = new OS.DataTypes.VariableHolder();
var getFileListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(FilePluginModel.FileInfoPrivateList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.ListDirectory$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.listDirectoryJSResult = listDirectoryJSResult;
varBag.getFileListVar = getFileListVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:T4j3L8ySq0KAwD5z53aUuA:/ClientActionFlows.T4j3L8ySq0KAwD5z53aUuA:scLouPT_5fcGhxYI5ezYOw", "FilePlugin", "ListDirectory", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:LI7s2EKIVEWQ6H67T4bgPA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:geSPb41dcE6svUpYy7s50g", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:LoH6fTE5zEKfejOiU33jjg", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:93kSBtAQNkWRbMTWXdLRDA", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_ListDirectory_ListDirectoryJS, "ListDirectory", "ListDirectory", {
Directory: OS.DataConversion.JSNodeParamConverter.to(vars.value.directoryInLocal, OS.DataTypes.DataTypes.Text),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
FileList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.ListDirectory$listDirectoryJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.fileListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FileList, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
listDirectoryJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:XUZ5eMglkk2kE3obny3wcw", callContext.id);
// JSON Deserialize: GetFileList
getFileListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(listDirectoryJSResult.value.fileListOut, FilePluginModel.FileInfoPrivateList, false);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:85+NF5PxSUGMy3Ochbirgw", callContext.id);
// Success = ListDirectory.Success
outVars.value.successOut = listDirectoryJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:85+NF5PxSUGMy3Ochbirgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = ListDirectory.ErrorCode
outVars.value.errorOut.errorCodeAttr = listDirectoryJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:85+NF5PxSUGMy3Ochbirgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = ListDirectory.ErrorMessage
outVars.value.errorOut.errorMessageAttr = listDirectoryJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:85+NF5PxSUGMy3Ochbirgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Result = GetFileList.Data
outVars.value.resultOut = OS.DataConversion.JSConversions.typeConvertRecordList(getFileListVar.value.dataOut, new FilePluginModel.FileInfoList(), function (source, target) {
target.nameAttr = source.nameAttr;
target.typeAttr = source.typeAttr;
target.sizeAttr = source.sizeAttr;
target.creationTimeAttr = OS.BuiltinFunctions.addSeconds(OS.BuiltinFunctions.newDateTime(1970, 1, 1, 0, 0, 0), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.longIntegerToDecimal(OS.BuiltinFunctions.textToLongInteger(source.ctimeAttr)).div(OS.BuiltinFunctions.integerToDecimal(1000)))));
target.modificationTimeAttr = OS.BuiltinFunctions.addSeconds(OS.BuiltinFunctions.newDateTime(1970, 1, 1, 0, 0, 0), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.longIntegerToDecimal(OS.BuiltinFunctions.textToLongInteger(source.mtimeAttr)).div(OS.BuiltinFunctions.integerToDecimal(1000)))));
target.uRIAttr = source.uRIAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:4QdTFPqLqkadGJa+K1nUdA", callContext.id);
});
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:yK1fogrLt0KW16FjAzN1tQ", callContext.id);
// Error = CheckFilePlugin.Error
outVars.value.errorOut = checkFilePluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:yK1fogrLt0KW16FjAzN1tQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning = CheckFilePlugin.Warning
outVars.value.warningOut = checkFilePluginVar.value.warningOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:4QdTFPqLqkadGJa+K1nUdA", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:T4j3L8ySq0KAwD5z53aUuA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:T4j3L8ySq0KAwD5z53aUuA", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.ListDirectory$vars", [{
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Directory",
attrName: "directoryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.ListDirectory$listDirectoryJSResult", [{
name: "Success",
attrName: "successOut",
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
name: "FileList",
attrName: "fileListOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.ListDirectory$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new FilePluginModel.FileInfoList();
},
complexType: FilePluginModel.FileInfoList
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
FilePluginController.default.clientActionProxies.listDirectory$Action = function (pathIn, directoryIn) {
pathIn = (pathIn === undefined) ? "" : pathIn;
directoryIn = (directoryIn === undefined) ? "" : directoryIn;
return controller.executeActionInsideJSNode(FilePluginController.default.listDirectory$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), directoryIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Result: actionResults.resultOut,
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FilePlugin.controller$ListDirectory.ListDirectoryJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (res) => {
    $parameters.Success = true;
    $parameters.FileList = JSON.stringify(res.files);
    $resolve();
}
const onError = (error) => {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message
    $resolve();
}
const options = {
    path: $parameters.Path,
    directory: $parameters.Directory
}
OSFilePluginWrapper.Instance.readdir(onSuccess, onError, options)
});
};
});

define("FilePlugin.controller$PrepareDataObj", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "FilePlugin.controller$PrepareDataObj.CreateBlobJS", "FilePlugin.controller$GetFileType"], function (exports, OutSystems, FilePluginModel, FilePluginController, FilePlugin_controller_PrepareDataObj_CreateBlobJS) {
var OS = OutSystems.Internal;
FilePluginController.default.prepareDataObj$Action = function (binaryDataIn, fileNameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.PrepareDataObj$vars"))());
vars.value.binaryDataInLocal = binaryDataIn;
vars.value.fileNameInLocal = fileNameIn;
var createBlobJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.PrepareDataObj$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createBlobJSResult = createBlobJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:iTet5WL67UqpBRymiKNTrA:/ClientActionFlows.iTet5WL67UqpBRymiKNTrA:VEZimTnS7YgEdlA8QLLDQg", "FilePlugin", "PrepareDataObj", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:8dPNZbiIFEKx829aGCbe0w", callContext.id);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:YNHi9WYARUGT+AbK1VfwCg", callContext.id);
createBlobJSResult.value = controller.safeExecuteJSNode(FilePlugin_controller_PrepareDataObj_CreateBlobJS, "CreateBlob", "PrepareDataObj", {
FileName: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileNameInLocal, OS.DataTypes.DataTypes.Text),
BinaryData: OS.DataConversion.JSNodeParamConverter.to(vars.value.binaryDataInLocal, OS.DataTypes.DataTypes.BinaryData),
DataObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.PrepareDataObj$createBlobJSResult"))();
jsNodeResult.dataObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DataObj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetFileType: FilePluginController.default.getClientActionProxies(controller).getFileType$Action
}, {});
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:zNGYdP90QU+B2UKizDp7BA", callContext.id);
// DataObj = CreateBlob.DataObj
outVars.value.dataObjOut = createBlobJSResult.value.dataObjOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:GGvD8ErN_EeR6n1CKDud4g", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:iTet5WL67UqpBRymiKNTrA", callContext.id);
}

};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.PrepareDataObj$vars", [{
name: "BinaryData",
attrName: "binaryDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}, {
name: "FileName",
attrName: "fileNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.PrepareDataObj$createBlobJSResult", [{
name: "DataObj",
attrName: "dataObjOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.PrepareDataObj$outVars", [{
name: "DataObj",
attrName: "dataObjOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
FilePluginController.default.clientActionProxies.prepareDataObj$Action = function (binaryDataIn, fileNameIn) {
binaryDataIn = (binaryDataIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : binaryDataIn;
fileNameIn = (fileNameIn === undefined) ? "" : fileNameIn;
return controller.executeActionInsideJSNode(FilePluginController.default.prepareDataObj$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(binaryDataIn, OS.DataTypes.DataTypes.BinaryData), OS.DataConversion.JSNodeParamConverter.from(fileNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DataObj: OS.DataConversion.JSNodeParamConverter.to(actionResults.dataObjOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("FilePlugin.controller$PrepareDataObj.CreateBlobJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function fixBinary (bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i);
    }
    return buf;
  }
  
$parameters.DataObj = new Blob([fixBinary(atob($parameters.BinaryData))], { type: $actions.GetFileType($parameters.FileName).Type });
};
});

define("FilePlugin.controller$ReadFile", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$ReadFile.ReadFileJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_ReadFile_ReadFileJS) {
var OS = OutSystems.Internal;
FilePluginController.default.readFile$Action = function (pathIn, directoryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.ReadFile$vars"))());
vars.value.pathInLocal = pathIn;
vars.value.directoryInLocal = directoryIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var readFileJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.ReadFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.readFileJSResult = readFileJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:fGqURp6DFU6Ne80nP53HNA:/ClientActionFlows.fGqURp6DFU6Ne80nP53HNA:xFO1_tZni68THN4QtZgazw", "FilePlugin", "ReadFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:pyi0AarP40u+AhBPcU3tPQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:UUM6qaOmL0yLJW3FNp2JUg", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:B+74EeYUEEGNIt5O3g9_wQ", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:fzTci1nie0yJQ9VjLyB6tA", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_ReadFile_ReadFileJS, "ReadFile", "ReadFile", {
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
Directory: OS.DataConversion.JSNodeParamConverter.to(vars.value.directoryInLocal, OS.DataTypes.DataTypes.Text),
Data: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.BinaryData.defaultValue, OS.DataTypes.DataTypes.BinaryData),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Sucess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.ReadFile$readFileJSResult"))();
jsNodeResult.dataOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Data, OS.DataTypes.DataTypes.BinaryData);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.sucessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Sucess, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
readFileJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:6WZGDQ4bXkqOr1v9ZMUKrA", callContext.id);
// BinaryData = ReadFile.Data
outVars.value.binaryDataOut = readFileJSResult.value.dataOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:6WZGDQ4bXkqOr1v9ZMUKrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = ReadFile.Sucess
outVars.value.successOut = readFileJSResult.value.sucessOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:6WZGDQ4bXkqOr1v9ZMUKrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = ReadFile.ErrorCode
outVars.value.errorOut.errorCodeAttr = readFileJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:6WZGDQ4bXkqOr1v9ZMUKrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = ReadFile.ErrorMessage
outVars.value.errorOut.errorMessageAttr = readFileJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:AHzNS1v7wE2PvS1w+W3XLA", callContext.id);
});
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Tn35xr+ZGk2nc_wfkVAiUQ", callContext.id);
// Error = CheckFilePlugin.Error
outVars.value.errorOut = checkFilePluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Tn35xr+ZGk2nc_wfkVAiUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning = CheckFilePlugin.Warning
outVars.value.warningOut = checkFilePluginVar.value.warningOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:jVBO3p_4SUmvc5h1GUa77A", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:fGqURp6DFU6Ne80nP53HNA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:fGqURp6DFU6Ne80nP53HNA", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.ReadFile$vars", [{
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Directory",
attrName: "directoryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.ReadFile$readFileJSResult", [{
name: "Data",
attrName: "dataOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
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
name: "Sucess",
attrName: "sucessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.ReadFile$outVars", [{
name: "BinaryData",
attrName: "binaryDataOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}, {
name: "Success",
attrName: "successOut",
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
FilePluginController.default.clientActionProxies.readFile$Action = function (pathIn, directoryIn) {
pathIn = (pathIn === undefined) ? "" : pathIn;
directoryIn = (directoryIn === undefined) ? "" : directoryIn;
return controller.executeActionInsideJSNode(FilePluginController.default.readFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), directoryIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
BinaryData: OS.DataConversion.JSNodeParamConverter.to(actionResults.binaryDataOut, OS.DataTypes.DataTypes.BinaryData),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FilePlugin.controller$ReadFile.ReadFileJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (result) => {
    $parameters.Data = result.data;
    $parameters.Sucess = true;
    $resolve();
}

const onError = (error) => {
    $parameters.Sucess = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message

    $resolve();
}

let options = {
    path: $parameters.Path, 
}
if($parameters.Directory != "") options.directory = $parameters.Directory

OSFilePluginWrapper.Instance.readFile(onSuccess, onError, options)
});
};
});

define("FilePlugin.controller$Rename", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$Rename.RenameJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_Rename_RenameJS) {
var OS = OutSystems.Internal;
FilePluginController.default.rename$Action = function (fromPathIn, toPathIn, fromDirectoryIn, toDirectoryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.Rename$vars"))());
vars.value.fromPathInLocal = fromPathIn;
vars.value.toPathInLocal = toPathIn;
vars.value.fromDirectoryInLocal = fromDirectoryIn;
vars.value.toDirectoryInLocal = toDirectoryIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var renameJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.Rename$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.renameJSResult = renameJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:Bl_I8Q6SS0uf3AEEfwB0qg:/ClientActionFlows.Bl_I8Q6SS0uf3AEEfwB0qg:fkXuSzHeoGNHKWFbCu8Qsg", "FilePlugin", "Rename", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:I+Bmpn1zn0C+IbwkoMd+2w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:JldduZlGzk+CKlLGOh2fsQ", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:UZ0oeEXcMkq7QkVy6Wdkuw", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ZQJ4UO9htEyV45wCZU9n+w", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_Rename_RenameJS, "Rename", "Rename", {
ToPath: OS.DataConversion.JSNodeParamConverter.to(vars.value.toPathInLocal, OS.DataTypes.DataTypes.Text),
FromDirectory: OS.DataConversion.JSNodeParamConverter.to(vars.value.fromDirectoryInLocal, OS.DataTypes.DataTypes.Text),
ToDirectory: OS.DataConversion.JSNodeParamConverter.to(vars.value.toDirectoryInLocal, OS.DataTypes.DataTypes.Text),
FromPath: OS.DataConversion.JSNodeParamConverter.to(vars.value.fromPathInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Sucess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.Rename$renameJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.sucessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Sucess, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
renameJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7E9blvGL9ECo9LUfJo+upw", callContext.id);
// Success = Rename.Sucess
outVars.value.successOut = renameJSResult.value.sucessOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7E9blvGL9ECo9LUfJo+upw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Rename.ErrorCode
outVars.value.errorOut.errorCodeAttr = renameJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:7E9blvGL9ECo9LUfJo+upw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Rename.ErrorMessage
outVars.value.errorOut.errorMessageAttr = renameJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Ddl7Eo3kC0Ws_WmvTdVjUw", callContext.id);
});
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:YnpMnJd4p06yNxo9FxGpVQ", callContext.id);
// Error = CheckFilePlugin.Error
outVars.value.errorOut = checkFilePluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:YnpMnJd4p06yNxo9FxGpVQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning = CheckFilePlugin.Warning
outVars.value.warningOut = checkFilePluginVar.value.warningOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:dOFRj1OQ10W8yfh1Np5Y0w", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:Bl_I8Q6SS0uf3AEEfwB0qg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:Bl_I8Q6SS0uf3AEEfwB0qg", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.Rename$vars", [{
name: "FromPath",
attrName: "fromPathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ToPath",
attrName: "toPathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FromDirectory",
attrName: "fromDirectoryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ToDirectory",
attrName: "toDirectoryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.Rename$renameJSResult", [{
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
name: "Sucess",
attrName: "sucessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.Rename$outVars", [{
name: "Success",
attrName: "successOut",
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
FilePluginController.default.clientActionProxies.rename$Action = function (fromPathIn, toPathIn, fromDirectoryIn, toDirectoryIn) {
fromPathIn = (fromPathIn === undefined) ? "" : fromPathIn;
toPathIn = (toPathIn === undefined) ? "" : toPathIn;
fromDirectoryIn = (fromDirectoryIn === undefined) ? "" : fromDirectoryIn;
toDirectoryIn = (toDirectoryIn === undefined) ? "" : toDirectoryIn;
return controller.executeActionInsideJSNode(FilePluginController.default.rename$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fromPathIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(toPathIn, OS.DataTypes.DataTypes.Text), fromDirectoryIn, toDirectoryIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FilePlugin.controller$Rename.RenameJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = () => {
    $parameters.Sucess = true;
    $resolve();
}

const onError = (error) => {
    $parameters.Sucess = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message

    $resolve();
}


let options = {
    from: $parameters.FromPath, 
    to: $parameters.ToPath, 
    directory: $parameters.FromDirectory
}

if($parameters.ToDirectory != "") options.toDirectory = $parameters.ToDirectory;

OSFilePluginWrapper.Instance.rename(onSuccess, onError, options)
});
};
});

define("FilePlugin.controller$RequestDirectoryFromFileSystem", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "FilePlugin.controller$RequestDirectoryFromFileSystem.GetIOSFileSystemJS", "FilePlugin.controller$RequestDirectoryFromFileSystem.GetAndroidFileSystemJS", "CommonPlugin.controller$GetOperatingSystem", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "FilePlugin.controller$GetErrorMessage", "CommonPlugin.model$ErrorRec"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginController, CommonPluginModel, FilePlugin_controller_RequestDirectoryFromFileSystem_GetIOSFileSystemJS, FilePlugin_controller_RequestDirectoryFromFileSystem_GetAndroidFileSystemJS) {
var OS = OutSystems.Internal;
FilePluginController.default.requestDirectoryFromFileSystem$Action = function (storageTypeIdIn, storagePersistencyIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.RequestDirectoryFromFileSystem$vars"))());
vars.value.storageTypeIdInLocal = storageTypeIdIn;
vars.value.storagePersistencyIdInLocal = storagePersistencyIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getOperatingSystemVar = new OS.DataTypes.VariableHolder();
var getIOSFileSystemJSResult = new OS.DataTypes.VariableHolder();
var getAndroidFileSystemJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.RequestDirectoryFromFileSystem$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getOperatingSystemVar = getOperatingSystemVar;
varBag.getIOSFileSystemJSResult = getIOSFileSystemJSResult;
varBag.getAndroidFileSystemJSResult = getAndroidFileSystemJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:2OeJFZ4t_E2O8U4PmvjUJg:/ClientActionFlows.2OeJFZ4t_E2O8U4PmvjUJg:kM6u_B4VrJWHpC6CVrmQRA", "FilePlugin", "RequestDirectoryFromFileSystem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:a9y42r+gtECVFFh843QWUw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:eGTuT3hhBEGcJZxt6az8nw", callContext.id);
// Execute Action: GetOperatingSystem
getOperatingSystemVar.value = CommonPluginController.default.getOperatingSystem$Action(callContext);

// Is Android?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:VEiVJyPLoEyJioYIWWi1rw", callContext.id) && (getOperatingSystemVar.value.operatingSystemsIdOut === FilePluginModel.staticEntities.mobile_OperatingSystem.android))) {
// Set Android Storage
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:OzOPaSWMLkePbSQMiLNRSA", callContext.id);
// CurrentStorageTypeId = StorageTypeId
vars.value.currentStorageTypeIdVar = vars.value.storageTypeIdInLocal;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:OzOPaSWMLkePbSQMiLNRSA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CurrentStoragePersistencyId = StoragePersistencyId
vars.value.currentStoragePersistencyIdVar = vars.value.storagePersistencyIdInLocal;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:ht9lwwOwvUGISUNpW79ZGQ", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_RequestDirectoryFromFileSystem_GetAndroidFileSystemJS, "GetAndroidFileSystem", "RequestDirectoryFromFileSystem", {
IsTemporary: OS.DataConversion.JSNodeParamConverter.to((vars.value.currentStoragePersistencyIdVar === FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.temporary), OS.DataTypes.DataTypes.Boolean),
IsInternal: OS.DataConversion.JSNodeParamConverter.to((vars.value.currentStorageTypeIdVar === FilePluginModel.staticEntities.dEPRECATED_StorageType.internal), OS.DataTypes.DataTypes.Boolean),
FileSystem: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMsg: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.RequestDirectoryFromFileSystem$getAndroidFileSystemJSResult"))();
jsNodeResult.fileSystemOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FileSystem, OS.DataTypes.DataTypes.Object);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMsgOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMsg, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
getAndroidFileSystemJSResult.value = results;
}).then(function () {
// Set Results
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:tO95CCBxYkKVBcsRFXoHwA", callContext.id);
// Directory = GetAndroidFileSystem.FileSystem
outVars.value.directoryOut = getAndroidFileSystemJSResult.value.fileSystemOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:tO95CCBxYkKVBcsRFXoHwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = GetAndroidFileSystem.ErrorCode
outVars.value.errorOut.errorCodeAttr = getAndroidFileSystemJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:tO95CCBxYkKVBcsRFXoHwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = GetAndroidFileSystem.ErrorMsg
outVars.value.errorOut.errorMessageAttr = getAndroidFileSystemJSResult.value.errorMsgOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:_kHRI7b6O0mSK8dAdTYz5g", callContext.id);
});
} else {
// Set iOS Storage
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:oFAIjlYinkul5U1+XbfCGw", callContext.id);
// CurrentStorageTypeId = Internal
vars.value.currentStorageTypeIdVar = FilePluginModel.staticEntities.dEPRECATED_StorageType.internal;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:oFAIjlYinkul5U1+XbfCGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CurrentStoragePersistencyId = StoragePersistencyId
vars.value.currentStoragePersistencyIdVar = vars.value.storagePersistencyIdInLocal;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Jg79bAenrk+DTb40vsp6Bw", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_RequestDirectoryFromFileSystem_GetIOSFileSystemJS, "GetIOSFileSystem", "RequestDirectoryFromFileSystem", {
IsTemporary: OS.DataConversion.JSNodeParamConverter.to((vars.value.currentStoragePersistencyIdVar === FilePluginModel.staticEntities.dEPRECATED_StoragePersistency.temporary), OS.DataTypes.DataTypes.Boolean),
FileSystem: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMsg: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.RequestDirectoryFromFileSystem$getIOSFileSystemJSResult"))();
jsNodeResult.fileSystemOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FileSystem, OS.DataTypes.DataTypes.Object);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMsgOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMsg, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetErrorMessage: FilePluginController.default.getClientActionProxies(controller).getErrorMessage$Action
}, {}).then(function (results) {
getIOSFileSystemJSResult.value = results;
}).then(function () {
// Set Results
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+gQu8GN1J0K5bI3Sx34fRA", callContext.id);
// Directory = GetIOSFileSystem.FileSystem
outVars.value.directoryOut = getIOSFileSystemJSResult.value.fileSystemOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+gQu8GN1J0K5bI3Sx34fRA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = GetIOSFileSystem.ErrorCode
outVars.value.errorOut.errorCodeAttr = getIOSFileSystemJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:+gQu8GN1J0K5bI3Sx34fRA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = GetIOSFileSystem.ErrorMsg
outVars.value.errorOut.errorMessageAttr = getIOSFileSystemJSResult.value.errorMsgOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:_kHRI7b6O0mSK8dAdTYz5g", callContext.id);
});
}

});
}).catch(function (ex) {
OS.Logger.trace("RequestDirectoryFromFileSystem.RequestDirectoryFromFileSystem", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:xptvGgHChU+YUNuiXtQ6QA", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:sYkTQeD5+024wJ5b0EdjRw", callContext.id);
// Error.ErrorCode = "-1"
outVars.value.errorOut.errorCodeAttr = "-1";
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:sYkTQeD5+024wJ5b0EdjRw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:g3exL_rFokaT4vQ5m9NLRg", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:2OeJFZ4t_E2O8U4PmvjUJg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:2OeJFZ4t_E2O8U4PmvjUJg", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.RequestDirectoryFromFileSystem$vars", [{
name: "StorageTypeId",
attrName: "storageTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "StoragePersistencyId",
attrName: "storagePersistencyIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CurrentStorageTypeId",
attrName: "currentStorageTypeIdVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CurrentStoragePersistencyId",
attrName: "currentStoragePersistencyIdVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.RequestDirectoryFromFileSystem$getIOSFileSystemJSResult", [{
name: "FileSystem",
attrName: "fileSystemOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
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
name: "ErrorMsg",
attrName: "errorMsgOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.RequestDirectoryFromFileSystem$getAndroidFileSystemJSResult", [{
name: "FileSystem",
attrName: "fileSystemOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
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
name: "ErrorMsg",
attrName: "errorMsgOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.RequestDirectoryFromFileSystem$outVars", [{
name: "Directory",
attrName: "directoryOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
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
FilePluginController.default.clientActionProxies.requestDirectoryFromFileSystem$Action = function (storageTypeIdIn, storagePersistencyIdIn) {
storageTypeIdIn = (storageTypeIdIn === undefined) ? 0 : storageTypeIdIn;
storagePersistencyIdIn = (storagePersistencyIdIn === undefined) ? 0 : storagePersistencyIdIn;
return controller.executeActionInsideJSNode(FilePluginController.default.requestDirectoryFromFileSystem$Action.bind(controller, storageTypeIdIn, storagePersistencyIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Directory: OS.DataConversion.JSNodeParamConverter.to(actionResults.directoryOut, OS.DataTypes.DataTypes.Object),
Error: actionResults.errorOut
};
});
};
});
define("FilePlugin.controller$RequestDirectoryFromFileSystem.GetIOSFileSystemJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var fileSystemPersistencyType = $parameters.IsTemporary ? cordova.file.tempDirectory : cordova.file.dataDirectory;

window.resolveLocalFileSystemURL(fileSystemPersistencyType, 
    function(fs) {
        $parameters.ErrorCode = "0";
        $parameters.ErrorMsg = "";
        $parameters.FileSystem = fs;

        $resolve();
    },
    function(error){
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMsg = $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);
});
};
});
define("FilePlugin.controller$RequestDirectoryFromFileSystem.GetAndroidFileSystemJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var fileSystemType;
var isTemporary = $parameters.IsTemporary;
var isInternal = $parameters.IsInternal;

if (isInternal === true) {
  if (isTemporary === true) {
    //Internal & Temporary
    fileSystemType = cordova.file.cacheDirectory;
  }  else {
    //Internal & Permanent
    fileSystemType = cordova.file.dataDirectory;
  }
} else {
    if (isTemporary === true) {
        //External & Temporary
        fileSystemType = cordova.file.externalCacheDirectory;
    } else {
        //External & Permanent
        fileSystemType = cordova.file.externalDataDirectory;
    }
}

window.resolveLocalFileSystemURL(fileSystemType, 
    function(fs) {
        $parameters.ErrorCode = "0";
        $parameters.ErrorMsg = "";
        $parameters.FileSystem = fs;

        $resolve();
    },
    function(error){
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMsg = $actions.GetErrorMessage(error.code).Message;
        
        $resolve();
    }
);
});
};
});

define("FilePlugin.controller$SplitString", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "FilePlugin.controller$SplitString.SplitStringJS"], function (exports, OutSystems, FilePluginModel, FilePluginController, FilePlugin_controller_SplitString_SplitStringJS) {
var OS = OutSystems.Internal;
FilePluginController.default.splitString$Action = function (strIn, splitterIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.SplitString$vars"))());
vars.value.strInLocal = strIn;
vars.value.splitterInLocal = splitterIn;
var splitStringJSResult = new OS.DataTypes.VariableHolder();
var deserializeVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.SplitString$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.splitStringJSResult = splitStringJSResult;
varBag.deserializeVar = deserializeVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:+CHKcwSW0kayC0Ce_EZudQ:/ClientActionFlows.+CHKcwSW0kayC0Ce_EZudQ:Pkudb39_L7RIscWq7WqGIA", "FilePlugin", "SplitString", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:I_u_bWRlLU202Zig1HDICQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:NWDOtccJZEmXOpMD_gPFJQ", callContext.id);
splitStringJSResult.value = controller.safeExecuteJSNode(FilePlugin_controller_SplitString_SplitStringJS, "SplitString", "SplitString", {
Str: OS.DataConversion.JSNodeParamConverter.to(vars.value.strInLocal, OS.DataTypes.DataTypes.Text),
Splitter: OS.DataConversion.JSNodeParamConverter.to(vars.value.splitterInLocal, OS.DataTypes.DataTypes.Text),
List: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.SplitString$splitStringJSResult"))();
jsNodeResult.listOut = OS.DataConversion.JSNodeParamConverter.from($parameters.List, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:CVShP7bLY02oNbNPm+mbzA", callContext.id);
// JSON Deserialize: Deserialize
deserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(splitStringJSResult.value.listOut, OS.DataTypes.TextList, false);
// Set Result
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:pjrGDx8SSUOeGyzH4PUCcQ", callContext.id);
// SubStrings = Deserialize.Data
outVars.value.subStringsOut = deserializeVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:s+sxkgHV5U2OGo560XObSg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:+CHKcwSW0kayC0Ce_EZudQ", callContext.id);
}

};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.SplitString$vars", [{
name: "Str",
attrName: "strInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Splitter",
attrName: "splitterInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.SplitString$splitStringJSResult", [{
name: "List",
attrName: "listOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.SplitString$outVars", [{
name: "SubStrings",
attrName: "subStringsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
FilePluginController.default.clientActionProxies.splitString$Action = function (strIn, splitterIn) {
strIn = (strIn === undefined) ? "" : strIn;
splitterIn = (splitterIn === undefined) ? "" : splitterIn;
return controller.executeActionInsideJSNode(FilePluginController.default.splitString$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(strIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(splitterIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
SubStrings: actionResults.subStringsOut
};
});
};
});
define("FilePlugin.controller$SplitString.SplitStringJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.List = JSON.stringify($parameters.Str.split($parameters.Splitter));
};
});

define("FilePlugin.controller$WriteFile", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller", "CommonPlugin.model", "FilePlugin.controller$WriteFile.WriteFileJS", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$CheckFilePlugin"], function (exports, OutSystems, FilePluginModel, FilePluginController, CommonPluginModel, FilePlugin_controller_WriteFile_WriteFileJS) {
var OS = OutSystems.Internal;
FilePluginController.default.writeFile$Action = function (pathIn, binaryDataIn, directoryIn, recursiveIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.WriteFile$vars"))());
vars.value.pathInLocal = pathIn;
vars.value.binaryDataInLocal = binaryDataIn;
vars.value.directoryInLocal = directoryIn;
vars.value.recursiveInLocal = recursiveIn;
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var writeFileJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FilePlugin.WriteFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.writeFileJSResult = writeFileJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("L5ui26JE7kCANDUIW4io_g:T3DAPLoPLkif7sYp4HTezQ:/ClientActionFlows.T3DAPLoPLkif7sYp4HTezQ:E83XIBISWk_NeBtjeHPbOA", "FilePlugin", "WriteFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:J0HwGRvHzEWScUqPknkewg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:zVsyG+UfZ0mcxJbEqTwWsg", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:bya1AfO7rkWyFSvXw2bckA", callContext.id) && checkFilePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:3NJEJgfAk0qKv5d1V_EFuQ", callContext.id);
return controller.safeExecuteAsyncJSNode(FilePlugin_controller_WriteFile_WriteFileJS, "WriteFile", "WriteFile", {
Data: OS.DataConversion.JSNodeParamConverter.to(vars.value.binaryDataInLocal, OS.DataTypes.DataTypes.BinaryData),
Recursive: OS.DataConversion.JSNodeParamConverter.to(vars.value.recursiveInLocal, OS.DataTypes.DataTypes.Boolean),
Directory: OS.DataConversion.JSNodeParamConverter.to(vars.value.directoryInLocal, OS.DataTypes.DataTypes.Text),
Path: OS.DataConversion.JSNodeParamConverter.to(vars.value.pathInLocal, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Sucess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
URI: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FilePlugin.WriteFile$writeFileJSResult"))();
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.sucessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Sucess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.uRIOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URI, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
writeFileJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:9rWL7Axj_Ei_Yhx6TPb8CA", callContext.id);
// Error.ErrorCode = WriteFile.ErrorCode
outVars.value.errorOut.errorCodeAttr = writeFileJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:9rWL7Axj_Ei_Yhx6TPb8CA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = WriteFile.ErrorMessage
outVars.value.errorOut.errorMessageAttr = writeFileJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:9rWL7Axj_Ei_Yhx6TPb8CA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = WriteFile.Sucess
outVars.value.successOut = writeFileJSResult.value.sucessOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:9rWL7Axj_Ei_Yhx6TPb8CA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Uri = WriteFile.URI
outVars.value.uriOut = writeFileJSResult.value.uRIOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:Oa2dG_0Tnkevm4TS05_iVQ", callContext.id);
});
} else {
// Error
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:IGZIcjbJsUK73qt2UjUILg", callContext.id);
// Error = CheckFilePlugin.Error
outVars.value.errorOut = checkFilePluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:IGZIcjbJsUK73qt2UjUILg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning = CheckFilePlugin.Warning
outVars.value.warningOut = checkFilePluginVar.value.warningOut;
OutSystemsDebugger.handleBreakpoint("L5ui26JE7kCANDUIW4io_g:WGbRA_zYa0a17DnbpPPPvQ", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:T3DAPLoPLkif7sYp4HTezQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L5ui26JE7kCANDUIW4io_g:T3DAPLoPLkif7sYp4HTezQ", callContext.id);
throw ex;

});
};
var controller = FilePluginController.default;
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.WriteFile$vars", [{
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "BinaryData",
attrName: "binaryDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}, {
name: "Directory",
attrName: "directoryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Recursive",
attrName: "recursiveInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.WriteFile$writeFileJSResult", [{
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
name: "Sucess",
attrName: "sucessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "URI",
attrName: "uRIOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.constructor.registerVariableGroupType("FilePlugin.WriteFile$outVars", [{
name: "Success",
attrName: "successOut",
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
}, {
name: "Uri",
attrName: "uriOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FilePluginController.default.clientActionProxies.writeFile$Action = function (pathIn, binaryDataIn, directoryIn, recursiveIn) {
pathIn = (pathIn === undefined) ? "" : pathIn;
binaryDataIn = (binaryDataIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : binaryDataIn;
directoryIn = (directoryIn === undefined) ? "" : directoryIn;
recursiveIn = (recursiveIn === undefined) ? true : recursiveIn;
return controller.executeActionInsideJSNode(FilePluginController.default.writeFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(binaryDataIn, OS.DataTypes.DataTypes.BinaryData), directoryIn, OS.DataConversion.JSNodeParamConverter.from(recursiveIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut,
Uri: OS.DataConversion.JSNodeParamConverter.to(actionResults.uriOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("FilePlugin.controller$WriteFile.WriteFileJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
const onSuccess = (res) => {
    $parameters.Sucess = true;
    $parameters.URI = res.uri;
    $resolve();
}

const onError = (error) => {
    $parameters.Sucess = false;
    $parameters.ErrorCode = error.code
    $parameters.ErrorMessage = error.message

    $resolve();
}

let options = {
    path: $parameters.Path, 
    data: $parameters.Data, 
    recursive: $parameters.Recursive
}
if($parameters.Directory != "") options.directory = $parameters.Directory

OSFilePluginWrapper.Instance.writeFile(onSuccess, onError, options)
});
};
});

define("FilePlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.controller$debugger"], function (exports, OutSystems, FilePluginModel, FilePlugin_Controller_debugger) {
var OS = OutSystems.Internal;
var FilePluginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return FilePluginController.default.defaultTimeout;
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
FilePluginController.default = new Controller(null, "FilePlugin");
});
define("FilePlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"DQ0XvR7frEW6bmR1UulxUg": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oQu6zYO19EKEPbOPaK8Tgw": {
getter: function (varBag, idService) {
return varBag.vars.value.storageTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"zS_2hxq4EUuBqQAv_kzwRw": {
getter: function (varBag, idService) {
return varBag.vars.value.storagePersistencyIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"iuacITOQC06zQh73znU6fg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"l5HmHFL6bUu2QG4yURRtUg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"GKfUPCicU0i_7_aQTBRM2A": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"4Cey1yUTB0qW6eKKV+IGFg": {
getter: function (varBag, idService) {
return varBag.requestDirectoryFromFileSystemVar.value;
}
},
"Qbhu8k9a_06mPqhuoeai3A": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"Or2kvVyb+kCodU9kws5S+Q": {
getter: function (varBag, idService) {
return varBag.deleteDirectoryJSResult.value;
}
},
"TlQp3h6QOUCxsMMqtNjfmw": {
getter: function (varBag, idService) {
return varBag.deletePathDirectoryJSResult.value;
}
},
"HVh0nvtPrky76E4ohXlgpw": {
getter: function (varBag, idService) {
return varBag.vars.value.currentStorageTypeIdVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"lsUI7KzJlUGadiAdzfZLCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.currentStoragePersistencyIdVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"bgzqjPusl0uh5DaWAQU5PA": {
getter: function (varBag, idService) {
return varBag.vars.value.storageTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"FVKGoSzc9UKWEpvx36v8zA": {
getter: function (varBag, idService) {
return varBag.vars.value.storagePersistencyIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"_IhX6Amx9UqzteYioN3Ihg": {
getter: function (varBag, idService) {
return varBag.outVars.value.directoryOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"OPEDwOkStUifmvIZDDfxLg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"xptvGgHChU+YUNuiXtQ6QA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"eGTuT3hhBEGcJZxt6az8nw": {
getter: function (varBag, idService) {
return varBag.getOperatingSystemVar.value;
}
},
"Jg79bAenrk+DTb40vsp6Bw": {
getter: function (varBag, idService) {
return varBag.getIOSFileSystemJSResult.value;
}
},
"ht9lwwOwvUGISUNpW79ZGQ": {
getter: function (varBag, idService) {
return varBag.getAndroidFileSystemJSResult.value;
}
},
"n37SthG_QEqH1nZTb7D3AA": {
getter: function (varBag, idService) {
return varBag.vars.value.nameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"x+n0oSLNxk2WQy7NcQft7Q": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"prRXcXeB2U+4eJsRYFBm+Q": {
getter: function (varBag, idService) {
return varBag.vars.value.storageTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"vjDvuUlZfUuFqJ_ewVJ7Vg": {
getter: function (varBag, idService) {
return varBag.vars.value.storagePersistencyIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"SlxFHHce702sRbqJZMzlGg": {
getter: function (varBag, idService) {
return varBag.outVars.value.binaryDataOut;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"JuiANmAW0Emz+Srw8PkamQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"UaVq1gz3ok64LbWg63bdBQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"7vvOEhEMjEiRqU2jkJ27fg": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"sezmI548Ok2MIqx7VXe3fQ": {
getter: function (varBag, idService) {
return varBag.getDirectoryVar.value;
}
},
"1_MGPz6KyE+CRzydGJfrqw": {
getter: function (varBag, idService) {
return varBag.requestDirectoryFromFileSystemVar.value;
}
},
"N87Rd2fowEO4ZrVZ_sBrOg": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"QTmXIxMZm0WJdJDsM3ws1w": {
getter: function (varBag, idService) {
return varBag.legacyCallJSResult.value;
}
},
"OX8FT2fYUkiS8VFfFt+iQQ": {
getter: function (varBag, idService) {
return varBag.getFileDataJSResult.value;
}
},
"q2oDuDButk6EfVmJcmzsgw": {
getter: function (varBag, idService) {
return varBag.vars.value.errorCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EVgnMGWb80KGYSe2SOyQfQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.messageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"O98G_TqvY0CYsvrZ0_VCYw": {
getter: function (varBag, idService) {
return varBag.vars.value.rootDirectoryVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"YKjDlKKuEEu8CsXUehooag": {
getter: function (varBag, idService) {
return varBag.vars.value.directoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"6xD6eIrJFUmyhsbyCrM2Hw": {
getter: function (varBag, idService) {
return varBag.vars.value.nameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"n4ngWaonPUCofxsCgDKpyA": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7Eu21o7epUuC6k9c_XWbUA": {
getter: function (varBag, idService) {
return varBag.outVars.value.uriOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"t4aIfV_YDUCHRRzUoB9PXA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"Q2DsfgPc4k610KXKuZwsmg": {
getter: function (varBag, idService) {
return varBag.outVars.value.createdDirectoryOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"d_3jUmEyR0uEcacqttQjWw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"ZvYhpZcLGkelT1FuB4mzdA": {
getter: function (varBag, idService) {
return varBag.splitStringVar.value;
}
},
"fDeQhl_Enk6F_xO+GxnWow": {
getter: function (varBag, idService) {
return varBag.createDirectoryJSResult.value;
}
},
"xkTjo9UjwECZslx7oN2ZUg": {
getter: function (varBag, idService) {
return varBag.createPathDirectoryJSResult.value;
}
},
"8DTf80nYtk+9p_3Ft2al7w": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"a6na_dVDNU2zWapKHDI1eQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.binaryDataOut;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"Twm5NovU_0ONdhbo10bw0w": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"peI_GumFQ0a6lL3KbYldVA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"0toBXY5lRkKyIDDXiddgOg": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"E+Bo8i3UUUKCr+j7bdiXsw": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"GiMcGU3b2E6xARgcE_TN2g": {
getter: function (varBag, idService) {
return varBag.legacyCallJSResult.value;
}
},
"9SkkxuCpnE+PFj0EwL0pnQ": {
getter: function (varBag, idService) {
return varBag.getFileDataJSResult.value;
}
},
"o6j3kfBV70u+oXAyAXVMlQ": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5TTrBNF3Jk2m8CrjKP5N7Q": {
getter: function (varBag, idService) {
return varBag.vars.value.directoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mgY1ilBwXEKvwjq21MXOcA": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
}
},
"V0xlNQR0DUqrpP0auCE8OA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6YW2M8jcSUOMX794_hxh6A": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"FCxdhZAgHEudzfPgQBsEUA": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"1lTCL9vdZUy097yI5VGYAA": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"Fq4SfW1NLki_+BDiH+ZBKA": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeFileInfoVar.value;
}
},
"RB60BT4jsUyFd12nYxNT2A": {
getter: function (varBag, idService) {
return varBag.getMetadataJSResult.value;
}
},
"pzUQikUkd0Cxe3iAOy43tw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"LET+iOVuvkCP13m3PciPww": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"AIktHMuAJEaydB3sjHklkw": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"ZqRTZs5xE0uaR0m_T3fr7w": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"Dsgu+hAgl06ZSpCTm4V_5w": {
getter: function (varBag, idService) {
return varBag.checkPluginJSResult.value;
}
},
"YNkiOWk0kEyaKjoWUj6KUg": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Q+ZMGy3gFU2dfNxou85agQ": {
getter: function (varBag, idService) {
return varBag.vars.value.directoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KPzkBFG6GkWaF+D0hFxzVQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2mxqGrbpR0ifO6zFjARqNQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
}
},
"8tOMs_pB10icZ+F38eqvpg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"2+ajtlQEsEyUV64QNYE1hw": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"geSPb41dcE6svUpYy7s50g": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"XUZ5eMglkk2kE3obny3wcw": {
getter: function (varBag, idService) {
return varBag.getFileListVar.value;
}
},
"93kSBtAQNkWRbMTWXdLRDA": {
getter: function (varBag, idService) {
return varBag.listDirectoryJSResult.value;
}
},
"fwYpbrzdGk63wLSiJc+Szw": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ez8oxMJxsk+iL9YPdaix1w": {
getter: function (varBag, idService) {
return varBag.vars.value.directoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cBtE7wAT1EGD8gkvZVMh1A": {
getter: function (varBag, idService) {
return varBag.vars.value.recursiveInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jKhR_uveck67f9LIabcRLw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nYAting2lkuiG22rtVarSw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"5jDotMqWZEq2pnAqq2MNFQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"ypl4Ebcdlk6ZvPK0MMovxg": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"zCqBQJ45qk2tqwB+ejVmyw": {
getter: function (varBag, idService) {
return varBag.deleteDirectoryJSResult.value;
}
},
"amydRrwAKUW9cJcxKzA1lg": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"T5nqgZT9ZUqZNSSDRi_rjA": {
getter: function (varBag, idService) {
return varBag.vars.value.binaryDataInLocal;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"oPl6P+0KtEq9fLIWEw_F2w": {
getter: function (varBag, idService) {
return varBag.vars.value.directoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uDQ6P1BywEuLb7sgCKhNwA": {
getter: function (varBag, idService) {
return varBag.vars.value.recursiveInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"PjxNJvOy9UG9DRmC1cXmnQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"eBJ4s9OaD0m42qP5Q0oH5g": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"eo1GWExMPU21L4UfB8nbBQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"7MaZtXikh0ycp4VDYtKCig": {
getter: function (varBag, idService) {
return varBag.outVars.value.uriOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zVsyG+UfZ0mcxJbEqTwWsg": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"3NJEJgfAk0qKv5d1V_EFuQ": {
getter: function (varBag, idService) {
return varBag.writeFileJSResult.value;
}
},
"8jCoO5mwx0aTUSO+Uq+F4A": {
getter: function (varBag, idService) {
return varBag.vars.value.nameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ax2TdRAFlEWScz+uRsMXyQ": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YpgnC2EVWUSTqKGmQZIPpQ": {
getter: function (varBag, idService) {
return varBag.vars.value.storageTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"zaOiQVv1I0+gW2PUGRR7Aw": {
getter: function (varBag, idService) {
return varBag.vars.value.storagePersistencyIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"a10X6biiBUOBEdobW+ZxIg": {
getter: function (varBag, idService) {
return varBag.outVars.value.urlOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ik7kQc1fuEKl3O6gFda61A": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"+rI+ywMuLkq1ZzVWPQMLjA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"zsQqMlnnd0mxJMPg7MYUFg": {
getter: function (varBag, idService) {
return varBag.requestDirectoryFromFileSystemVar.value;
}
},
"Ul9nN2HgtUi+O8p71m3Udw": {
getter: function (varBag, idService) {
return varBag.getDirectoryVar.value;
}
},
"FTbzVbbg_Uqkh7CzONSGag": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"C03R4lUCr0mC9jXT6nN0Bw": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"eyAf2Ry3WUWTTPn1LA646Q": {
getter: function (varBag, idService) {
return varBag.getFileJSResult.value;
}
},
"H_5A4YV+00eQ1avXDc8T8A": {
getter: function (varBag, idService) {
return varBag.legacyCallJSResult.value;
}
},
"i0uGQmFO3ES4Mfe_zaXTBw": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kDi6+OH4ZEyhjyiyeuHZGQ": {
getter: function (varBag, idService) {
return varBag.vars.value.directoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"i5b19Vncv02gJ5Y9sNzY_w": {
getter: function (varBag, idService) {
return varBag.outVars.value.binaryDataOut;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"CtRTfSrcSUaVDAe3p1VMJA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"u6EUcVkg0k+5AVTjjVrI9w": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"HmAT7qh1cUWREhxfGoe9LQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"UUM6qaOmL0yLJW3FNp2JUg": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"fzTci1nie0yJQ9VjLyB6tA": {
getter: function (varBag, idService) {
return varBag.readFileJSResult.value;
}
},
"0VW70bQnKkawlp0y6G+csA": {
getter: function (varBag, idService) {
return varBag.vars.value.nameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RzQb7oH4KUiOaiyO6J7GEA": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"s5ImB0m5akOuWi0YFWs6RA": {
getter: function (varBag, idService) {
return varBag.vars.value.storageTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"C_I9mS69kUSmcAoS0DgWGQ": {
getter: function (varBag, idService) {
return varBag.vars.value.storagePersistencyIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"dG2qEW0+SU6twEsTigbJTA": {
getter: function (varBag, idService) {
return varBag.outVars.value.uriOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7P7kEA4Q8EiGpIwZt+sfhA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"vAKwBfKwOU2sokZ3fFmG7g": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"UCbzBoVpwkmpl1ysdZwSTw": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"YbAcE4gZ+Umyx2khdW9WgQ": {
getter: function (varBag, idService) {
return varBag.requestDirectoryFromFileSystemVar.value;
}
},
"xc9mHz82lEuAHE23zzzDWg": {
getter: function (varBag, idService) {
return varBag.getDirectoryVar.value;
}
},
"+ngL0Mt5NkytP2k1GraT+Q": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"ymbAdHbhF06shR_rWnbgug": {
getter: function (varBag, idService) {
return varBag.legacyCallJSResult.value;
}
},
"ZYNCsoNpgE+PVORXYzPLdA": {
getter: function (varBag, idService) {
return varBag.getFileUriJSResult.value;
}
},
"phFYaLPRbUOx2MJjjHvPPg": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"g5E139KkoEa6Nd6cHjIThQ": {
getter: function (varBag, idService) {
return varBag.vars.value.binaryDataInLocal;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"A1T7YQcTOE6Jc_9eIpbvKg": {
getter: function (varBag, idService) {
return varBag.vars.value.directoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"o7fkCufoHEa7Dh_uEF32Uw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5Y7bZeaRq0CI2cPcvNr4WQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"unngn0fB8U+IVL5eoVMEIA": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"mrjoWKWkZkO6aAn2OadjKw": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"fxr2pIygjE+wOcTP1XexGg": {
getter: function (varBag, idService) {
return varBag.appendJSResult.value;
}
},
"9mN245YVW0SQlHMUsqUzyQ": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"O5Vgn6J6MUSNyXzxd5uOtg": {
getter: function (varBag, idService) {
return varBag.vars.value.storageTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"241OFquHZEK1qFLS_TjVAQ": {
getter: function (varBag, idService) {
return varBag.vars.value.storagePersistencyIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"TTVwcRxhTUGJnNbmLnxj+A": {
getter: function (varBag, idService) {
return varBag.outVars.value.directoryListOut;
}
},
"s9W5yfpJ0Eux1K8WWFTIiA": {
getter: function (varBag, idService) {
return varBag.outVars.value.fileListOut;
}
},
"0_N0SinoMU6ob5CVrq4Drw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"CRjSNUOGmk2vi0dWxMi1gg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"13_xILnRR0OCYHAuo7Rc8Q": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"ffGfXt2mf0WbeK9gsqJefg": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"zJmAYPXCK025TepWbmiUfg": {
getter: function (varBag, idService) {
return varBag.requestDirectoryFromFileSystemVar.value;
}
},
"nrP6pI2Y5kmnlAVAQvGueA": {
getter: function (varBag, idService) {
return varBag.getDirectoryVar.value;
}
},
"2aDXfjyad02LERBQhATcGQ": {
getter: function (varBag, idService) {
return varBag.getFileListLegacyVar.value;
}
},
"XwoSjWwxl0Sm7pPZxMuaNw": {
getter: function (varBag, idService) {
return varBag.getDirectoryListLegacyVar.value;
}
},
"7JzNnHvrAEKXkcBdXF309A": {
getter: function (varBag, idService) {
return varBag.getFileListVar.value;
}
},
"nj74wJiUfUOpFCWottdWNw": {
getter: function (varBag, idService) {
return varBag.getDirectoryListVar.value;
}
},
"bz4NYKUQDkK9EglPPZl8Ug": {
getter: function (varBag, idService) {
return varBag.legacyCallJSResult.value;
}
},
"60pxeLBpW0GXyUXasXy_CA": {
getter: function (varBag, idService) {
return varBag.listDirectoryJSResult.value;
}
},
"Q8G4g6x1vkeHO+w2SsQmDQ": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VX2ejOOj70anXUwZML_lAw": {
getter: function (varBag, idService) {
return varBag.vars.value.directoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YILQr48+ikeDeqoAEZS15w": {
getter: function (varBag, idService) {
return varBag.outVars.value.uRIOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4Q8XDamNCUeHLt6pKD9Zhw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"34TbYFr1BUKjFAEr251W+g": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"R0nKp+byZEe0DaertHz2wg": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"USx6zvGS9k+0eWJ13lERpw": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"NCe4GhGnM0if6UAm+SpScw": {
getter: function (varBag, idService) {
return varBag.getURIJSResult.value;
}
},
"eYTcLSspT0u9HEViqOCo5w": {
getter: function (varBag, idService) {
return varBag.vars.value.strInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"p0PrfrzMvEGwc6TxRLXxVw": {
getter: function (varBag, idService) {
return varBag.vars.value.splitterInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"O3S6SLber02sxbGMijNqJg": {
getter: function (varBag, idService) {
return varBag.outVars.value.subStringsOut;
}
},
"CVShP7bLY02oNbNPm+mbzA": {
getter: function (varBag, idService) {
return varBag.deserializeVar.value;
}
},
"NWDOtccJZEmXOpMD_gPFJQ": {
getter: function (varBag, idService) {
return varBag.splitStringJSResult.value;
}
},
"tN34YADA2k675+kxWqy8bw": {
getter: function (varBag, idService) {
return varBag.vars.value.fromPathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FfOFHgvdqkWv4a7CWhC2aQ": {
getter: function (varBag, idService) {
return varBag.vars.value.toPathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aOyKNpieX0aMMBOcMdRu3w": {
getter: function (varBag, idService) {
return varBag.vars.value.fromDirectoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BrVQIH7wVESkiRDOzQD_5A": {
getter: function (varBag, idService) {
return varBag.vars.value.toDirectoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"573glAzy70GNtplO5wOdKQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"C4ao112r9U2XmGTitEejbg": {
getter: function (varBag, idService) {
return varBag.outVars.value.uRIOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dyAXrw0gDke+GzR+vsrFhw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"TG7wBK8bS0mZrE1dLq8Q5A": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"UZg+WG0ClUC3dcB5j5utKg": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"EY7+_QYe6U6gL2LnwbkaIw": {
getter: function (varBag, idService) {
return varBag.copyJSResult.value;
}
},
"4YrYjsb1akGFo7voPV_R8A": {
getter: function (varBag, idService) {
return varBag.vars.value.storagePersistencyIdVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"o8tOs18fykqE9hB4+PesXQ": {
getter: function (varBag, idService) {
return varBag.vars.value.binaryDataInLocal;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"PwLFCcXxnUCXDfMQ1kAMpg": {
getter: function (varBag, idService) {
return varBag.vars.value.nameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DT5OSgCqFEeUBdicH8w3Mg": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b3esG7vPF0qW3UpRtMQSWg": {
getter: function (varBag, idService) {
return varBag.vars.value.storageTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"EKQjotlw2EGP8ly4uL5pDQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.uriOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Z6CRcTuvIkWy64fjKSaS7A": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"KXd3ByAwhU6QtJjqSmx6lQ": {
getter: function (varBag, idService) {
return varBag.prepareDataObjVar.value;
}
},
"SCYCVMDCJk6Cc6JNaeFanQ": {
getter: function (varBag, idService) {
return varBag.requestDirectoryFromFileSystemVar.value;
}
},
"cYI_VLQ1D0WqCOFmBuXoGQ": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"V18RdKJM30K640hFFIj14A": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"dWVEirVbHkSZELrMFwhqJg": {
getter: function (varBag, idService) {
return varBag.checkAndCreateDirectoryFromPathVar.value;
}
},
"r8eIqGv3Vkiwh7DXPjVJxQ": {
getter: function (varBag, idService) {
return varBag.getPathVar.value;
}
},
"CtxhVLDuvUq4APYopFmfcA": {
getter: function (varBag, idService) {
return varBag.binaryToBase64JSResult.value;
}
},
"+StsbTSQF0qNFl+azsiuiQ": {
getter: function (varBag, idService) {
return varBag.createFileJSResult.value;
}
},
"DhCKrlNj00qLkdSWAel1FA": {
getter: function (varBag, idService) {
return varBag.legacyCallJSResult.value;
}
},
"Q6vVSLOzdkWubwvUkXiQwQ": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oPbEIG3QHkiLqIEEcCN_nQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.urlOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9GqaVwaoXEiMqQ47DgyTHA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"84O8OD7uL0aGo9X5cQckIg": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"fw1JOkbPWUSjxFTOJYK2lA": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"M7dCIoNbmkyXb4ccjx18Jg": {
getter: function (varBag, idService) {
return varBag.legacyCallJSResult.value;
}
},
"tlrV3WY2XEKIyPc3xB_OHA": {
getter: function (varBag, idService) {
return varBag.getFileUrlJSResult.value;
}
},
"AKHElVf1H0ermA7Krs9MKg": {
getter: function (varBag, idService) {
return varBag.vars.value.rootDirectoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"vVkn+s6i6EKG+sMBFfL83A": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BZJ1rw8j3kab42mQ_WLMQQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.directoryOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"oyW92E+xPUSanpz1KPiYLA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"RsFUKKx75EWk3BFcMg61xw": {
getter: function (varBag, idService) {
return varBag.getDirectoryJSResult.value;
}
},
"sZ+bmKUu0UKoVckx24Wfvw": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7Ciu214+rU23ZRiDAEp_bg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"H31PXC8680mn7_7odiYlWA": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"M8l+9zDv20CFQ78SaqCk7w": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"Wd1PEB_+jkisJnOUgdPdVw": {
getter: function (varBag, idService) {
return varBag.deleteFileJSResult.value;
}
},
"VuJNM0aQYkaaeiCrfEPh6A": {
getter: function (varBag, idService) {
return varBag.legacyCallJSResult.value;
}
},
"ZwxrML263UmLGx__HE+ChA": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"baYXmPMkkku9Ii6RX5dkug": {
getter: function (varBag, idService) {
return varBag.vars.value.directoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OyoPtL0MJ0SFx+JISLVEsw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Dc_sU_QrM02qics2k3ARNg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"NwlfUvrZUUCAwzMyPBzVdg": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"0YJhj6scMUeST8MIPNy0VQ": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"SnVocrWsgU2ZM+GyjFfYLg": {
getter: function (varBag, idService) {
return varBag.deleteFileJSResult.value;
}
},
"5XVgIP2RAUGlQgqfLZEl+A": {
getter: function (varBag, idService) {
return varBag.vars.value.nameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wlMZd+56Y06QwMp9j4MBpw": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"G_dGDqTX_0GcGURXxAaLDg": {
getter: function (varBag, idService) {
return varBag.vars.value.storageTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"qL5ai7YuFUK+HDIpzV8IHw": {
getter: function (varBag, idService) {
return varBag.vars.value.storagePersistencyIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"CMdD87fEYk63rwl2hQd17g": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"Ock7EZ+_00OojJQj4SULJg": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"y8y8ddtwnEuJFRGZinX6cQ": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"FZfd8rNJQ02z6XYer7wxbA": {
getter: function (varBag, idService) {
return varBag.getDirectoryVar.value;
}
},
"fAMq_LoBNEmV4+7XrCYfPg": {
getter: function (varBag, idService) {
return varBag.requestDirectoryFromFileSystemVar.value;
}
},
"L4zKiC0RO0mdD3l6NPmLkA": {
getter: function (varBag, idService) {
return varBag.legacyCallJSResult.value;
}
},
"UeKhix1iFkKuCZn5R_WXtg": {
getter: function (varBag, idService) {
return varBag.deleteFileJSResult.value;
}
},
"cr+i_iABKU2l3ezU5pp4PQ": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"M78hwkunfkKRJqkCZpFgYg": {
getter: function (varBag, idService) {
return varBag.vars.value.directoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZL+u0EiqIUmQuyH2GwD24A": {
getter: function (varBag, idService) {
return varBag.vars.value.recursiveInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"z7BiD+q9gUOqcR7lFLJb0w": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"A63Ri1H0Z0WNY1aH_fiMMQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"eZphpfQ58EW+9vMS5+20Lg": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"9KcmuMWsyEKKKSVKlkw71g": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"OIJU4pSifUaWilZxL0H5Lw": {
getter: function (varBag, idService) {
return varBag.createDirectoryJSResult.value;
}
},
"svouGbVhMEOzzpJ2o0Mzjw": {
getter: function (varBag, idService) {
return varBag.vars.value.storagePersistencyIdVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"9DKgxnpH+k279nqppcRu4A": {
getter: function (varBag, idService) {
return varBag.vars.value.binaryDataInLocal;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"4iHoOgSWxUWNOWmxrMHKew": {
getter: function (varBag, idService) {
return varBag.vars.value.nameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"p2l1CGYNjkmWoJmZDeZOwQ": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AAtKuiHUPEKynMqC5DVSnA": {
getter: function (varBag, idService) {
return varBag.vars.value.storageTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"IT9YSzuzDUuMwtzCdMif8Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.uriOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OOXXFBzaa0a9KuqVqPmQCg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"PLblMCvzjECoufppRpAvUA": {
getter: function (varBag, idService) {
return varBag.getPathVar.value;
}
},
"zKrmQL1Q0EWhXb3BkdErog": {
getter: function (varBag, idService) {
return varBag.prepareDataObjVar.value;
}
},
"DHGIVqTNpUeJIcjDYeue9w": {
getter: function (varBag, idService) {
return varBag.checkAndCreateDirectoryFromPathVar.value;
}
},
"GZJgjv9Ghk6rgLiRMp7Xew": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"EpeXyAarMUSqovCpA_F5fQ": {
getter: function (varBag, idService) {
return varBag.requestDirectoryFromFileSystemVar.value;
}
},
"xrz24UcgUEGJdIbbGvYQQw": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"RPVoU32AEEWEdSP9XRCYRA": {
getter: function (varBag, idService) {
return varBag.legacyCallJSResult.value;
}
},
"DDMMwLAq0kK+D6dSCic8dg": {
getter: function (varBag, idService) {
return varBag.binaryToBase64JSResult.value;
}
},
"VQMd8MkpzE+XWsS9DSkhxw": {
getter: function (varBag, idService) {
return varBag.createFileJSResult.value;
}
},
"ZQVt4KoqfkSqsXW3Al1OKA": {
getter: function (varBag, idService) {
return varBag.vars.value.nameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"511dNY_1MESCgV5GGKghQg": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AeAU2czxwEGwXq3ejN+Ziw": {
getter: function (varBag, idService) {
return varBag.vars.value.storageTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"DsFBUeznsEmZ22WB0Zq2pw": {
getter: function (varBag, idService) {
return varBag.vars.value.storagePersistencyIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"aofFSylDhkqo79o5XGEJ2g": {
getter: function (varBag, idService) {
return varBag.outVars.value.uriOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"w4+FY486qk+vBqvHK9nNrA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"a1F0ev8ZtUisIzFD_yOJFA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"qjAYDk94KEmbgrXuWuPYyQ": {
getter: function (varBag, idService) {
return varBag.createDirectoriesVar.value;
}
},
"Mer6KHkfuU+r2VCxXp1R_A": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"x0kMQDuKL0iL+XaSG4PY7A": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFilePluginVar.value;
}
},
"TDPKauqFYU+vMKHmk9o5Pg": {
getter: function (varBag, idService) {
return varBag.requestDirectoryFromFileSystemVar.value;
}
},
"qa3m4g7a7EGQGP30OvfFTQ": {
getter: function (varBag, idService) {
return varBag.createDirectoryJSResult.value;
}
},
"ARC7zd1IDEWbnirc2CZPeg": {
getter: function (varBag, idService) {
return varBag.vars.value.binaryDataInLocal;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"ew0xvGk4oECOfZnxsUHYww": {
getter: function (varBag, idService) {
return varBag.vars.value.fileNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mu1CKPNfDEy6V5Pi6nJ0Qg": {
getter: function (varBag, idService) {
return varBag.outVars.value.dataObjOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"YNHi9WYARUGT+AbK1VfwCg": {
getter: function (varBag, idService) {
return varBag.createBlobJSResult.value;
}
},
"mc_TUADN_EKd3FA+JemqIw": {
getter: function (varBag, idService) {
return varBag.vars.value.fromPathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b8xQ9e0ktUeNeVEVLtchzQ": {
getter: function (varBag, idService) {
return varBag.vars.value.toPathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_GGep9++n0ecEYjUYiT_WQ": {
getter: function (varBag, idService) {
return varBag.vars.value.fromDirectoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zp2gDOt1skaDd+BeRVCEpg": {
getter: function (varBag, idService) {
return varBag.vars.value.toDirectoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8eFq+WIeZE6BiLp0PtORGw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"69IC4VroA0O0xs5t_2E8ig": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"0NBPf+VlTU6YRnLjpefvnw": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"JldduZlGzk+CKlLGOh2fsQ": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"ZQJ4UO9htEyV45wCZU9n+w": {
getter: function (varBag, idService) {
return varBag.renameJSResult.value;
}
},
"JjFEtT2YpEuntrZl3EvwUQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"YtumaWlvp0ipqMf48x4erw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"DzY0JGKpmU+4NXQtzmWwTg": {
getter: function (varBag, idService) {
return varBag.checkPluginJSResult.value;
}
},
"4UJ+vJdUhkKj_jxWVTwtFw": {
getter: function (varBag, idService) {
return varBag.vars.value.extensionVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aIxBfgPZKUSEYD4vnMRCsw": {
getter: function (varBag, idService) {
return varBag.vars.value.nameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uTnwhE+z2E6O7MVY6BeNyQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.typeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ScsBqGiNzEO0on7OPFfbYQ": {
getter: function (varBag, idService) {
return varBag.splitStringVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
