define("FileViewerPlugin.controller$CheckFileViewerPlugin", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$CheckFileViewerPlugin.CheckPWAJS", "FileViewerPlugin.controller$CheckFileViewerPlugin.LoadCSSJS", "FileViewerPlugin.controller$CheckFileViewerPlugin.CheckPluginJS", "CommonPlugin.controller$IsCordovaDefined", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginController, CommonPluginModel, FileViewerPlugin_controller_CheckFileViewerPlugin_CheckPWAJS, FileViewerPlugin_controller_CheckFileViewerPlugin_LoadCSSJS, FileViewerPlugin_controller_CheckFileViewerPlugin_CheckPluginJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.checkFileViewerPlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var checkPWAJSResult = new OS.DataTypes.VariableHolder();
var checkPluginJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.CheckFileViewerPlugin$outVars"))());
varBag.callContext = callContext;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.checkPWAJSResult = checkPWAJSResult;
varBag.checkPluginJSResult = checkPluginJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:4VoMEpcjhkGSkgX07jNx0A:/ClientActionFlows.4VoMEpcjhkGSkgX07jNx0A:15urrnhVVCqDqBRXLeLWWQ", "FileViewerPlugin", "CheckFileViewerPlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:WbgUEu5Gck2b+pAiUWsvbQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:wG2rN2EV8kqAUCp_VgTCjQ", callContext.id);
// Execute Action: RequireScript
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/FileViewerPlugin.wrapper.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:DuoEu0G7DECjXglAFXVNrA", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:eMOu7PMCUky1izvfJBelig", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MB2W1ECjj0G3tw__T8UesA", callContext.id);
checkPluginJSResult.value = controller.safeExecuteJSNode(FileViewerPlugin_controller_CheckFileViewerPlugin_CheckPluginJS, "CheckPlugin", "CheckFileViewerPlugin", {
PluginExists: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
WarningCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
WarningMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.CheckFileViewerPlugin$checkPluginJSResult"))();
jsNodeResult.pluginExistsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.PluginExists, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.warningCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WarningCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.warningMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WarningMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:bGPt0EZ+e0SCYLx+ABkhpQ", callContext.id) && checkPluginJSResult.value.pluginExistsOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:0LylDvhK1k6seqVlhGf6UQ", callContext.id);
// IsAvailable = CheckPlugin.PluginExists
outVars.value.isAvailableOut = checkPluginJSResult.value.pluginExistsOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:xqLLDZu69kapdWSjcOip4A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MM4SE9G1H060Ary8gQzR3w", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MM4SE9G1H060Ary8gQzR3w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Warning.ErrorCode = CheckPlugin.WarningCode
outVars.value.warningOut.errorCodeAttr = checkPluginJSResult.value.warningCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MM4SE9G1H060Ary8gQzR3w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Warning.ErrorMessage = CheckPlugin.WarningMessage
outVars.value.warningOut.errorMessageAttr = checkPluginJSResult.value.warningMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MM4SE9G1H060Ary8gQzR3w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorCode = CheckPlugin.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkPluginJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MM4SE9G1H060Ary8gQzR3w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Error.ErrorMessage = CheckPlugin.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkPluginJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:xqLLDZu69kapdWSjcOip4A", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:fVUYThF+ZkWjt63y4Vp0iQ", callContext.id);
controller.safeExecuteJSNode(FileViewerPlugin_controller_CheckFileViewerPlugin_LoadCSSJS, "LoadCSS", "CheckFileViewerPlugin", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:HJUXIIZEVUCA2P2nM6x3Sw", callContext.id);
// Execute Action: RequireFileViewerPWA
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/FileViewerPlugin.osfileviewerlib_bundle.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:z08kMcJO60GmjjtyBUFH0g", callContext.id);
checkPWAJSResult.value = controller.safeExecuteJSNode(FileViewerPlugin_controller_CheckFileViewerPlugin_CheckPWAJS, "CheckPWA", "CheckFileViewerPlugin", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.CheckFileViewerPlugin$checkPWAJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:UhCa70oLAU+4JRfnf_Qkqg", callContext.id) && checkPWAJSResult.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:NZjFGlFU80SC9N07rEL5Qw", callContext.id);
// IsPWA = CheckPWA.IsAvailable
outVars.value.isPWAOut = checkPWAJSResult.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:NZjFGlFU80SC9N07rEL5Qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsAvailable = IsPWA
outVars.value.isAvailableOut = outVars.value.isPWAOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:UtdZ9EWs+E2Mkrq9QF5_fg", callContext.id);
} else {
// Set Output
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:gGLduvWTn0GshyHKbCeYjw", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:gGLduvWTn0GshyHKbCeYjw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = "OS-PLUG-FLVW-0001"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-FLVW-0001";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:gGLduvWTn0GshyHKbCeYjw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "Cordova isn't defined."
outVars.value.errorOut.errorMessageAttr = "Cordova isn\'t defined.";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:gGLduvWTn0GshyHKbCeYjw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// IsPWA = False
outVars.value.isPWAOut = false;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:UtdZ9EWs+E2Mkrq9QF5_fg", callContext.id);
}

});
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:4VoMEpcjhkGSkgX07jNx0A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:4VoMEpcjhkGSkgX07jNx0A", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.CheckFileViewerPlugin$checkPWAJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.CheckFileViewerPlugin$checkPluginJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.CheckFileViewerPlugin$outVars", [{
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
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}]);
FileViewerPluginController.default.clientActionProxies.checkFileViewerPlugin$Action = function () {
return controller.executeActionInsideJSNode(FileViewerPluginController.default.checkFileViewerPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
IsPWA: OS.DataConversion.JSNodeParamConverter.to(actionResults.isPWAOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("FileViewerPlugin.controller$CheckFileViewerPlugin.CheckPWAJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsAvailable = OSFileViewerLib !== undefined;
};
});
define("FileViewerPlugin.controller$CheckFileViewerPlugin.LoadCSSJS", [], function () {
return function ($actions, $roles, $public) {
const allcss = [...document.styleSheets]
let hasCss = allcss.filter(item => item.title == "fileviewer-plugin-css").length > 0;
if(!hasCss) {
    let sheet = document.createElement('style');
    sheet.title = 'fileviewer-plugin-css';
    /**
     * This uses code adapted from Outsystems UI 
    **/
    sheet.innerHTML = ':root{--overlay-background:rgba(0,0,0,.25);--space-none:0;--space-xs:4px;--space-s:8px;--space-base:16px;--space-m:24px;--space-l:32px;--space-xl:40px;--space-xxl:48px;--border-radius-soft:4px}[data-popup-backdrop]{z-index:250}.popup-backdrop{background-color:var(--overlay-background)}.popup-dialog{border:0;border-radius:var(--border-radius-soft);-webkit-box-shadow:var(--shadow-xl);box-shadow:var(--shadow-xl);margin:var(--space-m);overflow:visible;padding:var(--space-m);width:100%}.popup-dialog.previewer{height:100%;max-width:none}.previewer-header{margin-bottom:var(--space-s);text-align:right}.previewer-container{align-items:center;display:flex;justify-content:center;overflow:auto;position:relative}[data-file-previewer]{padding-top:56.25%}.popup-content.previewer{display:inline;text-align:center}.previewer-iframe{border:none;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:100%}'
    document.getElementsByTagName('head')[0].appendChild(sheet);
}


};
});
define("FileViewerPlugin.controller$CheckFileViewerPlugin.CheckPluginJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (typeof(cordova) !== "undefined" && typeof(cordova.plugins) !== "undefined") {
    if(typeof(cordova.plugins.FileViewer) !== "undefined") {
        $parameters.PluginExists = true
        return
    }
    if(typeof(cordova.plugins.OSFileViewer) !== "undefined") {
        $parameters.PluginExists = false
        $parameters.WarningCode = "OS-PLUG-FLVW-0002"
        $parameters.WarningMessage = "The app is running with an old version of the plugin. Please create a new mobile package."
        return
    } 
} 

$parameters.ErrorCode = "OS-PLUG-FILE-0003"
$parameters.ErrorMessage = "The File Viewer plugin is not loaded. Make sure the mobile package is valid."

};
});

define("FileViewerPlugin.controller$DEPRECATED_CheckPlugin", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$DEPRECATED_CheckPlugin.LoadCSSJS", "FileViewerPlugin.controller$DEPRECATED_CheckPlugin.PluginIsLoadedJS", "FileViewerPlugin.controller$DEPRECATED_CheckPlugin.CheckPWAJS", "CommonPlugin.controller$IsCordovaDefined", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginController, CommonPluginModel, FileViewerPlugin_controller_DEPRECATED_CheckPlugin_LoadCSSJS, FileViewerPlugin_controller_DEPRECATED_CheckPlugin_PluginIsLoadedJS, FileViewerPlugin_controller_DEPRECATED_CheckPlugin_CheckPWAJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.dEPRECATED_CheckPlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var pluginIsLoadedJSResult = new OS.DataTypes.VariableHolder();
var checkPWAJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_CheckPlugin$outVars"))());
varBag.callContext = callContext;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.pluginIsLoadedJSResult = pluginIsLoadedJSResult;
varBag.checkPWAJSResult = checkPWAJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:0R8HPxIDcEaTSA2LMuROVQ:/ClientActionFlows.0R8HPxIDcEaTSA2LMuROVQ:SaOUtRxByab0XZo2VJ8C1A", "FileViewerPlugin", "DEPRECATED_CheckPlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:ZCrMRIRbIkey5psf098h+w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:8MVnlpDYK0yT7mdx_q_CKg", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:qdb7_B6nJkanh1_+LZhxNA", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:pf+ZXB13cUeiSDOOLF9yDA", callContext.id);
pluginIsLoadedJSResult.value = controller.safeExecuteJSNode(FileViewerPlugin_controller_DEPRECATED_CheckPlugin_PluginIsLoadedJS, "PluginIsLoaded", "DEPRECATED_CheckPlugin", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_CheckPlugin$pluginIsLoadedJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Ny8VNERV0kKYAenG03gtFA", callContext.id) && pluginIsLoadedJSResult.value.isAvailableOut)) {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:fc3vuueW3EqydWxvM01mfg", callContext.id);
// IsAvailable = True
outVars.value.isAvailableOut = true;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:J_oSkJQ340GyaTCDBzNTQQ", callContext.id);
} else {
// Set Output
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:DNiQdQ+_eEeZHlUpMz+Hwg", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:DNiQdQ+_eEeZHlUpMz+Hwg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = 2
outVars.value.errorOut.errorCodeAttr = "2";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:DNiQdQ+_eEeZHlUpMz+Hwg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "Plugin is not loaded."
outVars.value.errorOut.errorMessageAttr = "Plugin is not loaded.";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:J_oSkJQ340GyaTCDBzNTQQ", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:XhffCdc+I02yHGJOsta5Mw", callContext.id);
controller.safeExecuteJSNode(FileViewerPlugin_controller_DEPRECATED_CheckPlugin_LoadCSSJS, "LoadCSS", "DEPRECATED_CheckPlugin", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:sLvk14ZSL0KgQ2NgFf+3Ig", callContext.id);
// Execute Action: RequireFileViewer
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/FileViewerPlugin.osfileviewerlib_bundle.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:1S_TzX9uBkWcANWrraJakg", callContext.id);
checkPWAJSResult.value = controller.safeExecuteJSNode(FileViewerPlugin_controller_DEPRECATED_CheckPlugin_CheckPWAJS, "CheckPWA", "DEPRECATED_CheckPlugin", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_CheckPlugin$checkPWAJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:UZp1nzsCNUO4ySIoZlHt7A", callContext.id) && checkPWAJSResult.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:1SDXdUZZIk+tw4dLqxCW1A", callContext.id);
// IsPWA = CheckPWA.IsAvailable
outVars.value.isPWAOut = checkPWAJSResult.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:1SDXdUZZIk+tw4dLqxCW1A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsAvailable = IsPWA
outVars.value.isAvailableOut = outVars.value.isPWAOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:EIhx0mlc+Euv2_T0laSLGQ", callContext.id);
} else {
// Set Output
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:92IhMnAIgEeBoU0kUgu8Fw", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:92IhMnAIgEeBoU0kUgu8Fw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = 1
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:92IhMnAIgEeBoU0kUgu8Fw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "cordova is not defined"
outVars.value.errorOut.errorMessageAttr = "cordova is not defined";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:EIhx0mlc+Euv2_T0laSLGQ", callContext.id);
}

});
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:0R8HPxIDcEaTSA2LMuROVQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:0R8HPxIDcEaTSA2LMuROVQ", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_CheckPlugin$pluginIsLoadedJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_CheckPlugin$checkPWAJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_CheckPlugin$outVars", [{
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
FileViewerPluginController.default.clientActionProxies.dEPRECATED_CheckPlugin$Action = function () {
return controller.executeActionInsideJSNode(FileViewerPluginController.default.dEPRECATED_CheckPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
IsPWA: OS.DataConversion.JSNodeParamConverter.to(actionResults.isPWAOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$DEPRECATED_CheckPlugin.LoadCSSJS", [], function () {
return function ($actions, $roles, $public) {
const allcss = [...document.styleSheets]
let hasCss = allcss.filter(item => item.title == "fileviewer-plugin-css").length > 0;
if(!hasCss) {
    let sheet = document.createElement('style');
    sheet.title = 'fileviewer-plugin-css';
    /**
     * This uses code adapted from Outsystems UI 
    **/
    sheet.innerHTML = ':root{--overlay-background:rgba(0,0,0,.25);--space-none:0;--space-xs:4px;--space-s:8px;--space-base:16px;--space-m:24px;--space-l:32px;--space-xl:40px;--space-xxl:48px;--border-radius-soft:4px}[data-popup-backdrop]{z-index:250}.popup-backdrop{background-color:var(--overlay-background)}.popup-dialog{border:0;border-radius:var(--border-radius-soft);-webkit-box-shadow:var(--shadow-xl);box-shadow:var(--shadow-xl);margin:var(--space-m);overflow:visible;padding:var(--space-m);width:100%}.popup-dialog.previewer{height:100%;max-width:none}.previewer-header{margin-bottom:var(--space-s);text-align:right}.previewer-container{align-items:center;display:flex;justify-content:center;overflow:auto;position:relative}[data-file-previewer]{padding-top:56.25%}.popup-content.previewer{display:inline;text-align:center}.previewer-iframe{border:none;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:100%}'
    document.getElementsByTagName('head')[0].appendChild(sheet);
}


};
});
define("FileViewerPlugin.controller$DEPRECATED_CheckPlugin.PluginIsLoadedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const legacyPluginDefined = !!cordova.plugins && !!cordova.plugins.OSFileViewer
const newPluginDefined = (typeof(cordova) !== "undefined" && typeof(cordova.plugins) !== "undefined" && typeof(cordova.plugins.FileViewer) !== "undefined")
$parameters.IsAvailable = legacyPluginDefined || newPluginDefined;
};
});
define("FileViewerPlugin.controller$DEPRECATED_CheckPlugin.CheckPWAJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsAvailable = OSFileViewerLib !== undefined;
};
});

define("FileViewerPlugin.controller$DEPRECATED_OpenDocument", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromUrl", "FileViewerPlugin.controller$OpenDocumentFromUrl", "FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromResources", "FileViewerPlugin.controller$CheckFileViewerPlugin", "FileViewerPlugin.controller$DEPRECATED_ParamsValidation", "FileViewerPlugin.controller$OpenDocumentFromResources", "FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromLocalPath", "FileViewerPlugin.controller$OpenDocumentFromLocalPath"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.dEPRECATED_OpenDocument$Action = function (uRLIn, filePathIn, widthIn, heightIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocument$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.filePathInLocal = filePathIn;
vars.value.widthInLocal = widthIn;
vars.value.heightInLocal = heightIn;
var dEPRECATED_OpenDocumentFromUrlVar = new OS.DataTypes.VariableHolder();
var openDocumentFromUrlVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_OpenDocumentFromResourcesVar = new OS.DataTypes.VariableHolder();
var checkFileViewerPlugin3Var = new OS.DataTypes.VariableHolder();
var dEPRECATED_ParamsValidationVar = new OS.DataTypes.VariableHolder();
var checkFileViewerPluginVar = new OS.DataTypes.VariableHolder();
var checkFileViewerPlugin2Var = new OS.DataTypes.VariableHolder();
var openDocumentFromResourcesVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_OpenDocumentFromLocalPathVar = new OS.DataTypes.VariableHolder();
var openDocumentFromLocalPathVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocument$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.dEPRECATED_OpenDocumentFromUrlVar = dEPRECATED_OpenDocumentFromUrlVar;
varBag.openDocumentFromUrlVar = openDocumentFromUrlVar;
varBag.dEPRECATED_OpenDocumentFromResourcesVar = dEPRECATED_OpenDocumentFromResourcesVar;
varBag.checkFileViewerPlugin3Var = checkFileViewerPlugin3Var;
varBag.dEPRECATED_ParamsValidationVar = dEPRECATED_ParamsValidationVar;
varBag.checkFileViewerPluginVar = checkFileViewerPluginVar;
varBag.checkFileViewerPlugin2Var = checkFileViewerPlugin2Var;
varBag.openDocumentFromResourcesVar = openDocumentFromResourcesVar;
varBag.dEPRECATED_OpenDocumentFromLocalPathVar = dEPRECATED_OpenDocumentFromLocalPathVar;
varBag.openDocumentFromLocalPathVar = openDocumentFromLocalPathVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:TZGhFACD8UKqjhI8hXGylA:/ClientActionFlows.TZGhFACD8UKqjhI8hXGylA:yxkpRHB5acBG0XmNGRcbQw", "FileViewerPlugin", "DEPRECATED_OpenDocument", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:otAacWTcTE+lrjNi6Xg1fw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:W8jLdI4o80uWjNU5pF0AUQ", callContext.id);
// Execute Action: DEPRECATED_ParamsValidation
return FileViewerPluginController.default.dEPRECATED_ParamsValidation$Action(vars.value.uRLInLocal, vars.value.filePathInLocal, callContext).then(function (value) {
dEPRECATED_ParamsValidationVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:JbBx9ZAoLUK1gbZwIKhRaA", callContext.id) && dEPRECATED_ParamsValidationVar.value.successOut)) {
// FilePath starts with resources?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:0+MiXmEe50mEBISsxJer0Q", callContext.id) && (OS.BuiltinFunctions.index(vars.value.filePathInLocal, "resources", 0, false, false) === 0))) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:KyU4jZmYfECrQPe_YpQLWg", callContext.id);
// Execute Action: CheckFileViewerPlugin
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkFileViewerPluginVar.value = value;
}).then(function () {
// UseDeprecated
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:h+JTfA4TAEKtyb+2Rz1b+A", callContext.id) && !(checkFileViewerPluginVar.value.isAvailableOut))) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:aBhTNpASEECZWVudcvjTXg", callContext.id);
// Execute Action: DEPRECATED_OpenDocumentFromResources
return FileViewerPluginController.default.dEPRECATED_OpenDocumentFromResources$Action(vars.value.filePathInLocal, callContext).then(function (value) {
dEPRECATED_OpenDocumentFromResourcesVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:OSrFwHn+8UuMSEP_xDxBcw", callContext.id);
// Error.ErrorCode = DEPRECATED_OpenDocumentFromResources.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = dEPRECATED_OpenDocumentFromResourcesVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:OSrFwHn+8UuMSEP_xDxBcw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DEPRECATED_OpenDocumentFromResources.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = dEPRECATED_OpenDocumentFromResourcesVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:OSrFwHn+8UuMSEP_xDxBcw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = DEPRECATED_OpenDocumentFromResources.Success
outVars.value.successOut = dEPRECATED_OpenDocumentFromResourcesVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Ej9PYwWJI02AbyMFV7QXRQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:RN6hm9lxXUyffJZ3uJHF2A", callContext.id);
// Execute Action: OpenDocumentFromResources
return FileViewerPluginController.default.openDocumentFromResources$Action(vars.value.filePathInLocal, callContext).then(function (value) {
openDocumentFromResourcesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:4b63bVWCrkWzrIQhArpGyA", callContext.id);
// Error.ErrorCode = OpenDocumentFromResources.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = openDocumentFromResourcesVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:4b63bVWCrkWzrIQhArpGyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = OpenDocumentFromResources.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openDocumentFromResourcesVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:4b63bVWCrkWzrIQhArpGyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = OpenDocumentFromResources.Success
outVars.value.successOut = openDocumentFromResourcesVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Ej9PYwWJI02AbyMFV7QXRQ", callContext.id);
});
}

});
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:x4OMyThQRUaBaH+QTm0q0w", callContext.id) && (vars.value.uRLInLocal === ""))) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:ETpVmEVRukSqevKkPVWy1w", callContext.id);
// Execute Action: CheckFileViewerPlugin2
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkFileViewerPlugin2Var.value = value;
}).then(function () {
// UseDeprecated
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:RSR00M+gfkqDP1muwYME4Q", callContext.id) && !(checkFileViewerPlugin2Var.value.isAvailableOut))) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:TtG451A7l020q7hTIMGHRQ", callContext.id);
// Execute Action: DEPRECATED_OpenDocumentFromLocalPath
return FileViewerPluginController.default.dEPRECATED_OpenDocumentFromLocalPath$Action(vars.value.filePathInLocal, vars.value.widthInLocal, vars.value.heightInLocal, callContext).then(function (value) {
dEPRECATED_OpenDocumentFromLocalPathVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:oDboonekQkiyRRMDD2lzGg", callContext.id);
// Error.ErrorCode = DEPRECATED_OpenDocumentFromLocalPath.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = dEPRECATED_OpenDocumentFromLocalPathVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:oDboonekQkiyRRMDD2lzGg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DEPRECATED_OpenDocumentFromLocalPath.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = dEPRECATED_OpenDocumentFromLocalPathVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:oDboonekQkiyRRMDD2lzGg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = DEPRECATED_OpenDocumentFromLocalPath.Success
outVars.value.successOut = dEPRECATED_OpenDocumentFromLocalPathVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:SkRy6N7lbUuUIOCZXFFHBQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:OK8F74hchkaqMsT3kBluIA", callContext.id);
// Execute Action: OpenDocumentFromLocalPath
return FileViewerPluginController.default.openDocumentFromLocalPath$Action(vars.value.filePathInLocal, vars.value.widthInLocal, vars.value.heightInLocal, callContext).then(function (value) {
openDocumentFromLocalPathVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:wi2oJ8QddUmk59yjvwwaaw", callContext.id);
// Error.ErrorCode = OpenDocumentFromLocalPath.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = openDocumentFromLocalPathVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:wi2oJ8QddUmk59yjvwwaaw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = OpenDocumentFromLocalPath.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openDocumentFromLocalPathVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:wi2oJ8QddUmk59yjvwwaaw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = OpenDocumentFromLocalPath.Success
outVars.value.successOut = openDocumentFromLocalPathVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:SkRy6N7lbUuUIOCZXFFHBQ", callContext.id);
});
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:4KbDbmectkiqLBEXvE_Erw", callContext.id);
// Execute Action: CheckFileViewerPlugin3
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkFileViewerPlugin3Var.value = value;
}).then(function () {
// UseDeprecated
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:fT8gfffLYkOP9bKM10+mEA", callContext.id) && !(checkFileViewerPlugin3Var.value.isAvailableOut))) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:c1WhMXO6_06qpYlJjck9yg", callContext.id);
// Execute Action: DEPRECATED_OpenDocumentFromUrl
return FileViewerPluginController.default.dEPRECATED_OpenDocumentFromUrl$Action(vars.value.uRLInLocal, callContext).then(function (value) {
dEPRECATED_OpenDocumentFromUrlVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:KSQNi8e8nUyzjN4YgA2F2g", callContext.id);
// Error.ErrorCode = DEPRECATED_OpenDocumentFromUrl.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = dEPRECATED_OpenDocumentFromUrlVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:KSQNi8e8nUyzjN4YgA2F2g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DEPRECATED_OpenDocumentFromUrl.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = dEPRECATED_OpenDocumentFromUrlVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:KSQNi8e8nUyzjN4YgA2F2g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = DEPRECATED_OpenDocumentFromUrl.Success
outVars.value.successOut = dEPRECATED_OpenDocumentFromUrlVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:exVgANqjTUCvtE+tCav+WQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Qa67M4Tz9E+Txs83BmfLAw", callContext.id);
// Execute Action: OpenDocumentFromUrl
return FileViewerPluginController.default.openDocumentFromUrl$Action(vars.value.uRLInLocal, callContext).then(function (value) {
openDocumentFromUrlVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:BzFcerYxd0e+HS5WaX7vZA", callContext.id);
// Error.ErrorCode = OpenDocumentFromUrl.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = openDocumentFromUrlVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:BzFcerYxd0e+HS5WaX7vZA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = OpenDocumentFromUrl.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openDocumentFromUrlVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:BzFcerYxd0e+HS5WaX7vZA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = OpenDocumentFromUrl.Success
outVars.value.successOut = openDocumentFromUrlVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:exVgANqjTUCvtE+tCav+WQ", callContext.id);
});
}

});
});
}

});
}

});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:PNghnGDsjk+KMVbSSN5tLQ", callContext.id);
// Error.ErrorCode = DEPRECATED_ParamsValidation.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = dEPRECATED_ParamsValidationVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:PNghnGDsjk+KMVbSSN5tLQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DEPRECATED_ParamsValidation.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = dEPRECATED_ParamsValidationVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:PNghnGDsjk+KMVbSSN5tLQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = DEPRECATED_ParamsValidation.Success
outVars.value.successOut = dEPRECATED_ParamsValidationVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:j0NFXLqDB0afmGXhkI0aDA", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:TZGhFACD8UKqjhI8hXGylA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:TZGhFACD8UKqjhI8hXGylA", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocument$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FilePath",
attrName: "filePathInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Width",
attrName: "widthInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Height",
attrName: "heightInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocument$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.dEPRECATED_OpenDocument$Action = function (uRLIn, filePathIn, widthIn, heightIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
filePathIn = (filePathIn === undefined) ? "" : filePathIn;
widthIn = (widthIn === undefined) ? "" : widthIn;
heightIn = (heightIn === undefined) ? "" : heightIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.dEPRECATED_OpenDocument$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(filePathIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(widthIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(heightIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});

define("FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromLocalPath", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromLocalPath.openDocumentFromLocalPathJS", "FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromLocalPath.openFromFilePickerJS", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$DEPRECATED_CheckPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel, FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromLocalPath_openDocumentFromLocalPathJS, FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromLocalPath_openFromFilePickerJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.dEPRECATED_OpenDocumentFromLocalPath$Action = function (filePathIn, widthIn, heightIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromLocalPath$vars"))());
vars.value.filePathInLocal = filePathIn;
vars.value.widthInLocal = widthIn;
vars.value.heightInLocal = heightIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dEPRECATED_CheckPluginVar = new OS.DataTypes.VariableHolder();
var openDocumentFromLocalPathJSResult = new OS.DataTypes.VariableHolder();
var openFromFilePickerJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromLocalPath$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.dEPRECATED_CheckPluginVar = dEPRECATED_CheckPluginVar;
varBag.openDocumentFromLocalPathJSResult = openDocumentFromLocalPathJSResult;
varBag.openFromFilePickerJSResult = openFromFilePickerJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:iyUE9yLkxUmGt0WVJ5H5Yw:/ClientActionFlows.iyUE9yLkxUmGt0WVJ5H5Yw:yMao0Yin9TnQlcRoyboCWA", "FileViewerPlugin", "DEPRECATED_OpenDocumentFromLocalPath", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:zzlStpuWJUuxx4LbK2tqGw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:PKyo0JOfdk+wvrCvLhNXLw", callContext.id);
// Execute Action: DEPRECATED_CheckPlugin
return FileViewerPluginController.default.dEPRECATED_CheckPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:WYPKGsFeWkS1oPzHkryqVw", callContext.id) && dEPRECATED_CheckPluginVar.value.isAvailableOut)) {
// IsPWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:7dgJ4CqjjUmFxlXbalKEGw", callContext.id) && dEPRECATED_CheckPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:CYG5d+_r3UeMSvFeDyP9IQ", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromLocalPath_openFromFilePickerJS, "openFromFilePicker", "DEPRECATED_OpenDocumentFromLocalPath", {
Width: OS.DataConversion.JSNodeParamConverter.to(vars.value.widthInLocal, OS.DataTypes.DataTypes.Text),
Height: OS.DataConversion.JSNodeParamConverter.to(vars.value.heightInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromLocalPath$openFromFilePickerJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
openFromFilePickerJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:VN48DUrnP0ezRievgLBkzg", callContext.id);
// Success = openFromFilePicker.Success
outVars.value.successOut = openFromFilePickerJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:VN48DUrnP0ezRievgLBkzg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = openFromFilePicker.ErrorCode
outVars.value.errorOut.errorCodeAttr = openFromFilePickerJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:VN48DUrnP0ezRievgLBkzg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = openFromFilePicker.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openFromFilePickerJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:HDJivjvq_kat25zC9sfj3Q", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:8Xpjbu3mnUWBxaHJlhri8w", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromLocalPath_openDocumentFromLocalPathJS, "openDocumentFromLocalPath", "DEPRECATED_OpenDocumentFromLocalPath", {
FilePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromLocalPath$openDocumentFromLocalPathJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
openDocumentFromLocalPathJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:qng_hb8IGEyJCZCIuA8_9Q", callContext.id);
// Success = openDocumentFromLocalPath.Success
outVars.value.successOut = openDocumentFromLocalPathJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:qng_hb8IGEyJCZCIuA8_9Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = openDocumentFromLocalPath.ErrorCode
outVars.value.errorOut.errorCodeAttr = openDocumentFromLocalPathJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:qng_hb8IGEyJCZCIuA8_9Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = openDocumentFromLocalPath.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openDocumentFromLocalPathJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:HDJivjvq_kat25zC9sfj3Q", callContext.id);
});
}

});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Gf81BzMHZE6QsUJ1k8XacQ", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Gf81BzMHZE6QsUJ1k8XacQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Vw10jUauWUqrWdW7g5smUA", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_OpenDocumentFromLocalPath.DEPRECATED_OpenDocumentFromLocalPath", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:yHk3cUZWs0uS8DwteOVW3A", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:dnAJo6iH1ky3ydCmrp75cQ", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:dnAJo6iH1ky3ydCmrp75cQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:T7DfoNFspki2E4Hp_RNHCA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:iyUE9yLkxUmGt0WVJ5H5Yw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:iyUE9yLkxUmGt0WVJ5H5Yw", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromLocalPath$vars", [{
name: "FilePath",
attrName: "filePathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Width",
attrName: "widthInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Height",
attrName: "heightInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromLocalPath$openDocumentFromLocalPathJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromLocalPath$openFromFilePickerJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromLocalPath$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.dEPRECATED_OpenDocumentFromLocalPath$Action = function (filePathIn, widthIn, heightIn) {
filePathIn = (filePathIn === undefined) ? "" : filePathIn;
widthIn = (widthIn === undefined) ? "" : widthIn;
heightIn = (heightIn === undefined) ? "" : heightIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.dEPRECATED_OpenDocumentFromLocalPath$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(filePathIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(widthIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(heightIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromLocalPath.openDocumentFromLocalPathJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFileViewer.openDocumentFromLocalPath(
    $parameters.FilePath, 
    function (result) {
        $parameters.Success = true;
        $resolve();
    },
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $parameters.Success = false;
        $resolve();
    }
);
});
};
});
define("FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromLocalPath.openFromFilePickerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function onSuccess(){
    $parameters.Success = true;
    $resolve();
}

function onError(errorCode, errorMessage){
    $parameters.Success = false;
    $parameters.ErrorCode = errorCode;
    $parameters.ErrorMessage = errorMessage;
    $resolve();
}


OSFileViewerLib.openDocumentFromFilePicker(onSuccess, onError, $parameters.Width, $parameters.Height);
});
};
});

define("FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromResources", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromResources.OpenFromURLJS", "FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromResources.openDocumentFromResourcesJS", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$DEPRECATED_CheckPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel, FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromResources_OpenFromURLJS, FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromResources_openDocumentFromResourcesJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.dEPRECATED_OpenDocumentFromResources$Action = function (filePathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromResources$vars"))());
vars.value.filePathInLocal = filePathIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dEPRECATED_CheckPluginVar = new OS.DataTypes.VariableHolder();
var openDocumentFromResourcesJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromResources$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.dEPRECATED_CheckPluginVar = dEPRECATED_CheckPluginVar;
varBag.openDocumentFromResourcesJSResult = openDocumentFromResourcesJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:GHfAp9MzUEeiVS0cKj8FSA:/ClientActionFlows.GHfAp9MzUEeiVS0cKj8FSA:hcP5qfy5_X6tQKJoycwaYQ", "FileViewerPlugin", "DEPRECATED_OpenDocumentFromResources", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:_LfV9szWXUuTjhxtRsTGeA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:TxzsYYmukE6nKihKt67_ug", callContext.id);
// Execute Action: DEPRECATED_CheckPlugin
return FileViewerPluginController.default.dEPRECATED_CheckPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:V2a1+wyhDESk96azIcAnvw", callContext.id) && dEPRECATED_CheckPluginVar.value.isAvailableOut)) {
// IsPWA
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:TMMoRuaj_0mfUNH5oUxGtw", callContext.id) && dEPRECATED_CheckPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:sdYzwcEiB02_JGJR1d0GyA", callContext.id);
controller.safeExecuteJSNode(FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromResources_OpenFromURLJS, "OpenFromURL", "DEPRECATED_OpenDocumentFromResources", {
App: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.getEntryEspaceName(), OS.DataTypes.DataTypes.Text),
FilePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Azsvdsbg2EKcASjdQx8R0w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:f0+xz78OfUmRKE0ceppu7Q", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromResources_openDocumentFromResourcesJS, "openDocumentFromResources", "DEPRECATED_OpenDocumentFromResources", {
FilePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromResources$openDocumentFromResourcesJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
openDocumentFromResourcesJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:My31a3zZj0S2xHFdHlxx2w", callContext.id);
// Success = openDocumentFromResources.Success
outVars.value.successOut = openDocumentFromResourcesJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:My31a3zZj0S2xHFdHlxx2w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = openDocumentFromResources.ErrorCode
outVars.value.errorOut.errorCodeAttr = openDocumentFromResourcesJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:My31a3zZj0S2xHFdHlxx2w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = openDocumentFromResources.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openDocumentFromResourcesJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:zbdR2Vo+80SfgvDUd2UznQ", callContext.id);
});
}

});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:uvAlB4m830GjqwXXVe8F0A", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:uvAlB4m830GjqwXXVe8F0A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:nSDgOVB_NkmuHX2JGmLT7g", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_OpenDocumentFromResources.DEPRECATED_OpenDocumentFromResources", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:SFKTF_2yB0KT+DDs9b8H9Q", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:8ro568k8g0O_0ur3YIccBw", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:8ro568k8g0O_0ur3YIccBw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:+dQz8DSu1kiEvYXMTA6oJg", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:GHfAp9MzUEeiVS0cKj8FSA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:GHfAp9MzUEeiVS0cKj8FSA", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromResources$vars", [{
name: "FilePath",
attrName: "filePathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromResources$openDocumentFromResourcesJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromResources$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.dEPRECATED_OpenDocumentFromResources$Action = function (filePathIn) {
filePathIn = (filePathIn === undefined) ? "" : filePathIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.dEPRECATED_OpenDocumentFromResources$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(filePathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromResources.OpenFromURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function getFilename(pathfilename){

  var filenameextension = pathfilename.replace('resources/', '');
  return filenameextension;
}

var file = getFilename($parameters.FilePath);
console.log(file)
var resourcesURL = window.location.origin + '/' + $parameters.App + '/' + file;
OSFileViewerLib.openDocumentFromURL(resourcesURL);
};
});
define("FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromResources.openDocumentFromResourcesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function getFilenameAndExtension(pathfilename){

  var filenameextension = pathfilename.replace(/^.*[\\\/]/, '');
  var filename = filenameextension.substring(0, filenameextension.lastIndexOf('.'));
  var ext = filenameextension.split('.').pop();

  return [filename, ext];
}

var file = getFilenameAndExtension($parameters.FilePath);

cordova.plugins.OSFileViewer.openDocumentFromResources(
    file[0], 
    file[1],
    function (result) {
        $parameters.Success = true;
        $resolve();
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $parameters.Success = false;
        $resolve();
    }
);
});
};
});

define("FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromUrl", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromUrl.OpenFromURLJS", "FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromUrl.OpenDocumentFromUrlJS", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$DEPRECATED_CheckPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel, FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromUrl_OpenFromURLJS, FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromUrl_OpenDocumentFromUrlJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.dEPRECATED_OpenDocumentFromUrl$Action = function (uRLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromUrl$vars"))());
vars.value.uRLInLocal = uRLIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dEPRECATED_CheckPluginVar = new OS.DataTypes.VariableHolder();
var openFromURLJSResult = new OS.DataTypes.VariableHolder();
var openDocumentFromUrlJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromUrl$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.dEPRECATED_CheckPluginVar = dEPRECATED_CheckPluginVar;
varBag.openFromURLJSResult = openFromURLJSResult;
varBag.openDocumentFromUrlJSResult = openDocumentFromUrlJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:DRfbTZ72dkK5LvQFi17BpQ:/ClientActionFlows.DRfbTZ72dkK5LvQFi17BpQ:HGt82OWZzaOojyBsKochfg", "FileViewerPlugin", "DEPRECATED_OpenDocumentFromUrl", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:SWX_TuwKskW7BLWE3aV8GA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Zsrj7a53i0WoYkbPKkSevA", callContext.id);
// Execute Action: DEPRECATED_CheckPlugin
return FileViewerPluginController.default.dEPRECATED_CheckPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:aAPJR7vtekeEraIEnFKIAw", callContext.id) && dEPRECATED_CheckPluginVar.value.isAvailableOut)) {
// IsPWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:wZ0ZH+1PY02Bop_ef3UZKg", callContext.id) && dEPRECATED_CheckPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:azkheLl2Dk+R1ZuX6XKKGw", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromUrl_OpenFromURLJS, "OpenFromURL", "DEPRECATED_OpenDocumentFromUrl", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromUrl$openFromURLJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
openFromURLJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:_M2kEHDQ1k2p5gvB3YuZng", callContext.id);
// Success = OpenFromURL.Success
outVars.value.successOut = openFromURLJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:_M2kEHDQ1k2p5gvB3YuZng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = OpenFromURL.ErrorCode
outVars.value.errorOut.errorCodeAttr = openFromURLJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:_M2kEHDQ1k2p5gvB3YuZng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = OpenFromURL.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openFromURLJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:7IvODQOhTU6nx_l2Z3N4LA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:r3tTh4N0A065gZvksgcgRg", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_DEPRECATED_OpenDocumentFromUrl_OpenDocumentFromUrlJS, "OpenDocumentFromUrl", "DEPRECATED_OpenDocumentFromUrl", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromUrl$openDocumentFromUrlJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
openDocumentFromUrlJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:TCGYPee3wEiJz_UQbNhPgw", callContext.id);
// Success = OpenDocumentFromUrl.Success
outVars.value.successOut = openDocumentFromUrlJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:TCGYPee3wEiJz_UQbNhPgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = OpenDocumentFromUrl.ErrorCode
outVars.value.errorOut.errorCodeAttr = openDocumentFromUrlJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:TCGYPee3wEiJz_UQbNhPgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = OpenDocumentFromUrl.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openDocumentFromUrlJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:jJR9XV74HUydZBFG0ofm1Q", callContext.id);
});
}

});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:HFF9OszX6UagTMUKbTWKzw", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:HFF9OszX6UagTMUKbTWKzw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:aXSaVg7tNU+e6SFwEpZcRA", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_OpenDocumentFromUrl.DEPRECATED_OpenDocumentFromUrl", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:0slWN3ePA0CNVmN0FZjKqA", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:vu09qKSKnkiriB180umcAA", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:vu09qKSKnkiriB180umcAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:kg8lPEfuFEaEn8bRLwO7bw", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:DRfbTZ72dkK5LvQFi17BpQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:DRfbTZ72dkK5LvQFi17BpQ", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromUrl$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromUrl$openFromURLJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromUrl$openDocumentFromUrlJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_OpenDocumentFromUrl$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.dEPRECATED_OpenDocumentFromUrl$Action = function (uRLIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.dEPRECATED_OpenDocumentFromUrl$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromUrl.OpenFromURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function onSuccess(){
    $parameters.Success = true;
    $resolve();
}

function onError(errorCode, errorMessage){
    $parameters.Success = false;
    $parameters.ErrorCode = errorCode;
    $parameters.ErrorMessage = errorMessage;
    $resolve();
}

OSFileViewerLib.openDocumentFromURL($parameters.URL, onSuccess, onError);
});
};
});
define("FileViewerPlugin.controller$DEPRECATED_OpenDocumentFromUrl.OpenDocumentFromUrlJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFileViewer.openDocumentFromUrl(
    $parameters.URL, 
    function (result) {
        $parameters.Success = true;
        $resolve();
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $parameters.Success = false;
        $resolve();
    }
);
});
};
});

define("FileViewerPlugin.controller$DEPRECATED_ParamsValidation", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$DEPRECATED_CheckPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.dEPRECATED_ParamsValidation$Action = function (uRLIn, filePathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_ParamsValidation$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.filePathInLocal = filePathIn;
var dEPRECATED_CheckPluginVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_ParamsValidation$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.dEPRECATED_CheckPluginVar = dEPRECATED_CheckPluginVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:e6RevDNuTkmvjunXRRH5dQ:/ClientActionFlows.e6RevDNuTkmvjunXRRH5dQ:ZanHpzV8ApL5Mk4CirB_RA", "FileViewerPlugin", "DEPRECATED_ParamsValidation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:kOBaROqqQE+1Js0PbIttEw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:s9gJgygveEGuqSchbrhYew", callContext.id) && ((vars.value.uRLInLocal === "") && (vars.value.filePathInLocal === "")))) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:QVFvnCGk90OeE17MI7ledw", callContext.id);
// Execute Action: DEPRECATED_CheckPlugin
return FileViewerPluginController.default.dEPRECATED_CheckPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckPluginVar.value = value;
}).then(function () {
// IsPWA?
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:nrXzuyBW1EWMm6jfS5_CHw", callContext.id) && (dEPRECATED_CheckPluginVar.value.isAvailableOut && dEPRECATED_CheckPluginVar.value.isPWAOut))) {
// Set Success
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:1QqIWQrVdU+5N9IQskkoAQ", callContext.id);
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:1QqIWQrVdU+5N9IQskkoAQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:1QqIWQrVdU+5N9IQskkoAQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = True
outVars.value.successOut = true;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:dQ2SMVaVXkGE8kfjJ6PCgQ", callContext.id);
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Kq3hZAS_dkGx31NxcWSYuQ", callContext.id);
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Kq3hZAS_dkGx31NxcWSYuQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "URL or FilePath must be filled"
outVars.value.errorOut.errorMessageAttr = "URL or FilePath must be filled";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Kq3hZAS_dkGx31NxcWSYuQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:dQ2SMVaVXkGE8kfjJ6PCgQ", callContext.id);
}

});
} else {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:yqO0lVZH3kK8lTQ2fQNpDQ", callContext.id) && (((vars.value.uRLInLocal) !== ("")) && ((vars.value.filePathInLocal) !== (""))))) {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MYthg8P0gESAe2CL7SHyRQ", callContext.id);
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MYthg8P0gESAe2CL7SHyRQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "URL or FilePath must be filled, not allowed to pass both parameters"
outVars.value.errorOut.errorMessageAttr = "URL or FilePath must be filled, not allowed to pass both parameters";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MYthg8P0gESAe2CL7SHyRQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:IzDE3Pm2m0u7In0+JfzjsQ", callContext.id);
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:1woT34TPFUmCJ27yYra3UA", callContext.id);
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:1woT34TPFUmCJ27yYra3UA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:1woT34TPFUmCJ27yYra3UA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = True
outVars.value.successOut = true;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:4lKb7OkWpECUNNZQ0Avd4Q", callContext.id);
}

}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:e6RevDNuTkmvjunXRRH5dQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:e6RevDNuTkmvjunXRRH5dQ", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_ParamsValidation$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FilePath",
attrName: "filePathInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_ParamsValidation$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.dEPRECATED_ParamsValidation$Action = function (uRLIn, filePathIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
filePathIn = (filePathIn === undefined) ? "" : filePathIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.dEPRECATED_ParamsValidation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(filePathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});

define("FileViewerPlugin.controller$DEPRECATED_PreviewMediaContent", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$DEPRECATED_PreviewMediaContentFromLocalPath", "FileViewerPlugin.controller$DEPRECATED_PreviewMediaContentFromUrl", "FileViewerPlugin.controller$PreviewMediaContentFromUrl", "FileViewerPlugin.controller$CheckFileViewerPlugin", "FileViewerPlugin.controller$DEPRECATED_ParamsValidation", "FileViewerPlugin.controller$PreviewMediaContentFromLocalPath"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.dEPRECATED_PreviewMediaContent$Action = function (uRLIn, filePathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContent$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.filePathInLocal = filePathIn;
var dEPRECATED_PreviewMediaContentFromLocalPathVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_PreviewMediaContentFromUrlVar = new OS.DataTypes.VariableHolder();
var previewMediaContentFromUrlVar = new OS.DataTypes.VariableHolder();
var checkFileViewerPluginVar = new OS.DataTypes.VariableHolder();
var dEPRECATED_ParamsValidationVar = new OS.DataTypes.VariableHolder();
var checkFileViewerPlugin2Var = new OS.DataTypes.VariableHolder();
var previewMediaContentFromLocalPathVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContent$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.dEPRECATED_PreviewMediaContentFromLocalPathVar = dEPRECATED_PreviewMediaContentFromLocalPathVar;
varBag.dEPRECATED_PreviewMediaContentFromUrlVar = dEPRECATED_PreviewMediaContentFromUrlVar;
varBag.previewMediaContentFromUrlVar = previewMediaContentFromUrlVar;
varBag.checkFileViewerPluginVar = checkFileViewerPluginVar;
varBag.dEPRECATED_ParamsValidationVar = dEPRECATED_ParamsValidationVar;
varBag.checkFileViewerPlugin2Var = checkFileViewerPlugin2Var;
varBag.previewMediaContentFromLocalPathVar = previewMediaContentFromLocalPathVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:lx0JtDKiX0Wxw63POw4_QQ:/ClientActionFlows.lx0JtDKiX0Wxw63POw4_QQ:IPvQANLRwEcrdFi852HU1A", "FileViewerPlugin", "DEPRECATED_PreviewMediaContent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MVp3P3eXTkKcZvPXaLM2ng", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Z9fBmA+yt0KEMNhRUjLNyg", callContext.id);
// Execute Action: DEPRECATED_ParamsValidation
return FileViewerPluginController.default.dEPRECATED_ParamsValidation$Action(vars.value.uRLInLocal, vars.value.filePathInLocal, callContext).then(function (value) {
dEPRECATED_ParamsValidationVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:TIBmQ8GndE2DwOqMqKPciQ", callContext.id) && dEPRECATED_ParamsValidationVar.value.successOut)) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:oTLtlPyqqEaHaJpYcVku9g", callContext.id) && (vars.value.uRLInLocal === ""))) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:CJKOiMOIZUO68ca6I5Qcyg", callContext.id);
// Execute Action: CheckFileViewerPlugin
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkFileViewerPluginVar.value = value;
}).then(function () {
// UseDeprecated
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:sQA4x_Gzl0KLLsIZAAslqg", callContext.id) && !(checkFileViewerPluginVar.value.isAvailableOut))) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:AoGAFRMArUGObk1uPckKOA", callContext.id);
// Execute Action: DEPRECATED_PreviewMediaContentFromLocalPath
return FileViewerPluginController.default.dEPRECATED_PreviewMediaContentFromLocalPath$Action(vars.value.filePathInLocal, callContext).then(function (value) {
dEPRECATED_PreviewMediaContentFromLocalPathVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:LuXaGttc906UhmruyWnBKQ", callContext.id);
// Error.ErrorCode = DEPRECATED_PreviewMediaContentFromLocalPath.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = dEPRECATED_PreviewMediaContentFromLocalPathVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:LuXaGttc906UhmruyWnBKQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DEPRECATED_PreviewMediaContentFromLocalPath.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = dEPRECATED_PreviewMediaContentFromLocalPathVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:LuXaGttc906UhmruyWnBKQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = DEPRECATED_PreviewMediaContentFromLocalPath.Success
outVars.value.successOut = dEPRECATED_PreviewMediaContentFromLocalPathVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:WEtxvVgLwkGIx_GUP12F0w", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Nhdw0xgoZ0utZjZgzloufw", callContext.id);
// Execute Action: PreviewMediaContentFromLocalPath
return FileViewerPluginController.default.previewMediaContentFromLocalPath$Action(vars.value.filePathInLocal, callContext).then(function (value) {
previewMediaContentFromLocalPathVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:8AQmByfJ8kezb_DpSODfuA", callContext.id);
// Error.ErrorCode = PreviewMediaContentFromLocalPath.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = previewMediaContentFromLocalPathVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:8AQmByfJ8kezb_DpSODfuA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = PreviewMediaContentFromLocalPath.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = previewMediaContentFromLocalPathVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:8AQmByfJ8kezb_DpSODfuA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = PreviewMediaContentFromLocalPath.Success
outVars.value.successOut = previewMediaContentFromLocalPathVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:WEtxvVgLwkGIx_GUP12F0w", callContext.id);
});
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:LmvVnn+660aog757BFHZXA", callContext.id);
// Execute Action: CheckFileViewerPlugin2
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkFileViewerPlugin2Var.value = value;
}).then(function () {
// UseDeprecated
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:+bCN_QwGd02hNzzFR8oCtA", callContext.id) && !(checkFileViewerPlugin2Var.value.isAvailableOut))) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:gBGmTTDh1UaBIe9_tC+drA", callContext.id);
// Execute Action: DEPRECATED_PreviewMediaContentFromUrl
return FileViewerPluginController.default.dEPRECATED_PreviewMediaContentFromUrl$Action(vars.value.uRLInLocal, callContext).then(function (value) {
dEPRECATED_PreviewMediaContentFromUrlVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:VeTWdfhSIEOK2SXKDWLHGQ", callContext.id);
// Error.ErrorCode = DEPRECATED_PreviewMediaContentFromUrl.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = dEPRECATED_PreviewMediaContentFromUrlVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:VeTWdfhSIEOK2SXKDWLHGQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DEPRECATED_PreviewMediaContentFromUrl.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = dEPRECATED_PreviewMediaContentFromUrlVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:VeTWdfhSIEOK2SXKDWLHGQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = DEPRECATED_PreviewMediaContentFromUrl.Success
outVars.value.successOut = dEPRECATED_PreviewMediaContentFromUrlVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:s9KCKC0rm0mjDgM0TMJukw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MoNwToftXkW9rsWk2n+8Ow", callContext.id);
// Execute Action: PreviewMediaContentFromUrl
return FileViewerPluginController.default.previewMediaContentFromUrl$Action(vars.value.uRLInLocal, callContext).then(function (value) {
previewMediaContentFromUrlVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:bkpsfNvs2kqEaLZD_MgVpA", callContext.id);
// Error.ErrorCode = PreviewMediaContentFromUrl.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = previewMediaContentFromUrlVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:bkpsfNvs2kqEaLZD_MgVpA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = PreviewMediaContentFromUrl.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = previewMediaContentFromUrlVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:bkpsfNvs2kqEaLZD_MgVpA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = PreviewMediaContentFromUrl.Success
outVars.value.successOut = previewMediaContentFromUrlVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:s9KCKC0rm0mjDgM0TMJukw", callContext.id);
});
}

});
});
}

});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:cKxa1pKrWkqtB7PP03BOGw", callContext.id);
// Error.ErrorCode = DEPRECATED_ParamsValidation.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = dEPRECATED_ParamsValidationVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:cKxa1pKrWkqtB7PP03BOGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = DEPRECATED_ParamsValidation.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = dEPRECATED_ParamsValidationVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:cKxa1pKrWkqtB7PP03BOGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = DEPRECATED_ParamsValidation.Success
outVars.value.successOut = dEPRECATED_ParamsValidationVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Ge48bg1bU0C2di+bY4kIhQ", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:lx0JtDKiX0Wxw63POw4_QQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:lx0JtDKiX0Wxw63POw4_QQ", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContent$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FilePath",
attrName: "filePathInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContent$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.dEPRECATED_PreviewMediaContent$Action = function (uRLIn, filePathIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
filePathIn = (filePathIn === undefined) ? "" : filePathIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.dEPRECATED_PreviewMediaContent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(filePathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});

define("FileViewerPlugin.controller$DEPRECATED_PreviewMediaContentFromLocalPath", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$DEPRECATED_PreviewMediaContentFromLocalPath.PreviewMediaContentFromLocalPathJS", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$DEPRECATED_CheckPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel, FileViewerPlugin_controller_DEPRECATED_PreviewMediaContentFromLocalPath_PreviewMediaContentFromLocalPathJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.dEPRECATED_PreviewMediaContentFromLocalPath$Action = function (filePathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromLocalPath$vars"))());
vars.value.filePathInLocal = filePathIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dEPRECATED_CheckPluginVar = new OS.DataTypes.VariableHolder();
var previewMediaContentFromLocalPathJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromLocalPath$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.dEPRECATED_CheckPluginVar = dEPRECATED_CheckPluginVar;
varBag.previewMediaContentFromLocalPathJSResult = previewMediaContentFromLocalPathJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:BiXwZciFC0mxY2fUnDHIeg:/ClientActionFlows.BiXwZciFC0mxY2fUnDHIeg:t1pSLYjOF5MOPQ_YOgiang", "FileViewerPlugin", "DEPRECATED_PreviewMediaContentFromLocalPath", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:7Xxwww60iEeWK_gRwP2odA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:GFP2MCD+EUS0cR8_a3YxNw", callContext.id);
// Execute Action: DEPRECATED_CheckPlugin
return FileViewerPluginController.default.dEPRECATED_CheckPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:iC86Qalb10yeoQQ+rEvkqQ", callContext.id) && dEPRECATED_CheckPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:3QCuZ57Sg0eHCm509YzPYQ", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_DEPRECATED_PreviewMediaContentFromLocalPath_PreviewMediaContentFromLocalPathJS, "PreviewMediaContentFromLocalPath", "DEPRECATED_PreviewMediaContentFromLocalPath", {
FilePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromLocalPath$previewMediaContentFromLocalPathJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
previewMediaContentFromLocalPathJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:OP6dGWjFmUGOQK_O0x3O7w", callContext.id);
// Success = PreviewMediaContentFromLocalPath.Success
outVars.value.successOut = previewMediaContentFromLocalPathJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:OP6dGWjFmUGOQK_O0x3O7w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = PreviewMediaContentFromLocalPath.ErrorCode
outVars.value.errorOut.errorCodeAttr = previewMediaContentFromLocalPathJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:OP6dGWjFmUGOQK_O0x3O7w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = PreviewMediaContentFromLocalPath.ErrorMessage
outVars.value.errorOut.errorMessageAttr = previewMediaContentFromLocalPathJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:QGa_CN+4+ECv7CljAz+MCw", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:DS4tFzFkCk2FSczGU1N1gw", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:DS4tFzFkCk2FSczGU1N1gw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:M1DbU_SW4EGmfT09NcF51w", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_PreviewMediaContentFromLocalPath.DEPRECATED_PreviewMediaContentFromLocalPath", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:T4L+gP6wtE+DrcoKoFnCAQ", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:hbJZlhIrH0S6y3Mr0ezs_A", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:hbJZlhIrH0S6y3Mr0ezs_A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:LG5ByzNmQkadTx8a1N_T_A", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:BiXwZciFC0mxY2fUnDHIeg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:BiXwZciFC0mxY2fUnDHIeg", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromLocalPath$vars", [{
name: "FilePath",
attrName: "filePathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromLocalPath$previewMediaContentFromLocalPathJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromLocalPath$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.dEPRECATED_PreviewMediaContentFromLocalPath$Action = function (filePathIn) {
filePathIn = (filePathIn === undefined) ? "" : filePathIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.dEPRECATED_PreviewMediaContentFromLocalPath$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(filePathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$DEPRECATED_PreviewMediaContentFromLocalPath.PreviewMediaContentFromLocalPathJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFileViewer.previewMediaContentFromLocalPath(
    $parameters.FilePath, 
    function (result) {
        $parameters.Success = true;
        $resolve();
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $parameters.Success = false;
        $resolve();
    }
);
});
};
});

define("FileViewerPlugin.controller$DEPRECATED_PreviewMediaContentFromUrl", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$DEPRECATED_PreviewMediaContentFromUrl.PreviewMediaContentFromUrlJS", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$DEPRECATED_CheckPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel, FileViewerPlugin_controller_DEPRECATED_PreviewMediaContentFromUrl_PreviewMediaContentFromUrlJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.dEPRECATED_PreviewMediaContentFromUrl$Action = function (uRLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromUrl$vars"))());
vars.value.uRLInLocal = uRLIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dEPRECATED_CheckPluginVar = new OS.DataTypes.VariableHolder();
var previewMediaContentFromUrlJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromUrl$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.dEPRECATED_CheckPluginVar = dEPRECATED_CheckPluginVar;
varBag.previewMediaContentFromUrlJSResult = previewMediaContentFromUrlJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:v6T4K+n64UK8MNQULKUMMA:/ClientActionFlows.v6T4K+n64UK8MNQULKUMMA:dLRAgHsQ5tVa8jqcqx7ivg", "FileViewerPlugin", "DEPRECATED_PreviewMediaContentFromUrl", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:ZreoaiAYeE+BR46kIkMgIg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:8zoRXQjUpkaQITapSH9umQ", callContext.id);
// Execute Action: DEPRECATED_CheckPlugin
return FileViewerPluginController.default.dEPRECATED_CheckPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:SAiXkAvVh0e55YwL8Dhoaw", callContext.id) && dEPRECATED_CheckPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:3o_CdWzw_EuZjYJ7I0vy3g", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_DEPRECATED_PreviewMediaContentFromUrl_PreviewMediaContentFromUrlJS, "PreviewMediaContentFromUrl", "DEPRECATED_PreviewMediaContentFromUrl", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromUrl$previewMediaContentFromUrlJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
previewMediaContentFromUrlJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:W3KLtt1QyUa+R6Ch6O6JdA", callContext.id);
// Success = PreviewMediaContentFromUrl.Success
outVars.value.successOut = previewMediaContentFromUrlJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:W3KLtt1QyUa+R6Ch6O6JdA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = PreviewMediaContentFromUrl.ErrorCode
outVars.value.errorOut.errorCodeAttr = previewMediaContentFromUrlJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:W3KLtt1QyUa+R6Ch6O6JdA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = PreviewMediaContentFromUrl.ErrorMessage
outVars.value.errorOut.errorMessageAttr = previewMediaContentFromUrlJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:s5nA+Mk+z0iw60AbW9Ch_A", callContext.id);
});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:_SJkymjsr0OcdWQg2h3w1w", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:_SJkymjsr0OcdWQg2h3w1w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:KqBGrFAShEuedRLX+wFC_g", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("DEPRECATED_PreviewMediaContentFromUrl.DEPRECATED_PreviewMediaContentFromUrl", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:EwQ9ETGxvkmyhzIPlvCtkw", callContext.id);
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:IpCTPDZESEefzbBmRM6Pow", callContext.id);
// Error.ErrorCode = "1"
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:IpCTPDZESEefzbBmRM6Pow", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:bqd+XHI52kOYl7d3sUufbA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:v6T4K+n64UK8MNQULKUMMA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:v6T4K+n64UK8MNQULKUMMA", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromUrl$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromUrl$previewMediaContentFromUrlJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.DEPRECATED_PreviewMediaContentFromUrl$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.dEPRECATED_PreviewMediaContentFromUrl$Action = function (uRLIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.dEPRECATED_PreviewMediaContentFromUrl$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$DEPRECATED_PreviewMediaContentFromUrl.PreviewMediaContentFromUrlJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFileViewer.previewMediaContentFromUrl(
    $parameters.URL, 
    function (result) {
        $parameters.Success = true;
        $resolve();
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $parameters.Success = false;
        $resolve();
    }
);
});
};
});

define("FileViewerPlugin.controller$OpenDocumentFromLocalPath", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$OpenDocumentFromLocalPath.openDocumentFromLocalPathJS", "FileViewerPlugin.controller$OpenDocumentFromLocalPath.openFromFilePickerJS", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$CheckFileViewerPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel, FileViewerPlugin_controller_OpenDocumentFromLocalPath_openDocumentFromLocalPathJS, FileViewerPlugin_controller_OpenDocumentFromLocalPath_openFromFilePickerJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.openDocumentFromLocalPath$Action = function (filePathIn, widthIn, heightIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromLocalPath$vars"))());
vars.value.filePathInLocal = filePathIn;
vars.value.widthInLocal = widthIn;
vars.value.heightInLocal = heightIn;
var checkPluginVar = new OS.DataTypes.VariableHolder();
var openDocumentFromLocalPathJSResult = new OS.DataTypes.VariableHolder();
var openFromFilePickerJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromLocalPath$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkPluginVar = checkPluginVar;
varBag.openDocumentFromLocalPathJSResult = openDocumentFromLocalPathJSResult;
varBag.openFromFilePickerJSResult = openFromFilePickerJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:53IhLMowPkeVo7WC5PtXPg:/ClientActionFlows.53IhLMowPkeVo7WC5PtXPg:DpNzKRYIUslYIRU0cNaSKQ", "FileViewerPlugin", "OpenDocumentFromLocalPath", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:vIFzDlAHs0Wm9ZXkkSUMEw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:2LItkW+HaESLIFCb0LnJ0A", callContext.id);
// Execute Action: CheckPlugin
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:8oR9z6GhfEmsujp_R06vLA", callContext.id) && checkPluginVar.value.isAvailableOut)) {
// IsPWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:beXy_+hJ9U+6yqij91UKiw", callContext.id) && checkPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:u6btbqqz_U2ykv5ezyM7Kw", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_OpenDocumentFromLocalPath_openFromFilePickerJS, "openFromFilePicker", "OpenDocumentFromLocalPath", {
Width: OS.DataConversion.JSNodeParamConverter.to(vars.value.widthInLocal, OS.DataTypes.DataTypes.Text),
Height: OS.DataConversion.JSNodeParamConverter.to(vars.value.heightInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromLocalPath$openFromFilePickerJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
openFromFilePickerJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:slo+KvUJU0CY6Lil3mL_Ug", callContext.id);
// Success = openFromFilePicker.Success
outVars.value.successOut = openFromFilePickerJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:slo+KvUJU0CY6Lil3mL_Ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = openFromFilePicker.ErrorCode
outVars.value.errorOut.errorCodeAttr = openFromFilePickerJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:slo+KvUJU0CY6Lil3mL_Ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = openFromFilePicker.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openFromFilePickerJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MZlWUZsChEeqFbNzhqaXxw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:27CEHcMrP0KN6vAMFNXpAg", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_OpenDocumentFromLocalPath_openDocumentFromLocalPathJS, "openDocumentFromLocalPath", "OpenDocumentFromLocalPath", {
FilePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromLocalPath$openDocumentFromLocalPathJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
openDocumentFromLocalPathJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:TKwNb+sqeUC3PHoQSsS82Q", callContext.id);
// Success = openDocumentFromLocalPath.Success
outVars.value.successOut = openDocumentFromLocalPathJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:TKwNb+sqeUC3PHoQSsS82Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = openDocumentFromLocalPath.ErrorCode
outVars.value.errorOut.errorCodeAttr = openDocumentFromLocalPathJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:TKwNb+sqeUC3PHoQSsS82Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = openDocumentFromLocalPath.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openDocumentFromLocalPathJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:MZlWUZsChEeqFbNzhqaXxw", callContext.id);
});
}

});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:RTtoefbfvUiJrfj3P1vFfw", callContext.id);
// Error.ErrorCode = CheckPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:RTtoefbfvUiJrfj3P1vFfw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = CheckPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:57j7HytVf0eyPofDUwxrwA", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:53IhLMowPkeVo7WC5PtXPg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:53IhLMowPkeVo7WC5PtXPg", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromLocalPath$vars", [{
name: "FilePath",
attrName: "filePathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Width",
attrName: "widthInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Height",
attrName: "heightInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromLocalPath$openDocumentFromLocalPathJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromLocalPath$openFromFilePickerJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromLocalPath$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.openDocumentFromLocalPath$Action = function (filePathIn, widthIn, heightIn) {
filePathIn = (filePathIn === undefined) ? "" : filePathIn;
widthIn = (widthIn === undefined) ? "" : widthIn;
heightIn = (heightIn === undefined) ? "" : heightIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.openDocumentFromLocalPath$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(filePathIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(widthIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(heightIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$OpenDocumentFromLocalPath.openDocumentFromLocalPathJS", [], function () {
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
    "path": $parameters.FilePath
}

OSFileViewerPluginWrapper.Instance.openDocumentFromLocalPath(
    options,
    onSuccess,
    onError
)

});
};
});
define("FileViewerPlugin.controller$OpenDocumentFromLocalPath.openFromFilePickerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function onSuccess(){
    $parameters.Success = true;
    $resolve();
}

function onError(errorCode, errorMessage){
    $parameters.Success = false;
    $parameters.ErrorCode = errorCode;
    $parameters.ErrorMessage = errorMessage;
    $resolve();
}


OSFileViewerLib.openDocumentFromFilePicker(onSuccess, onError, $parameters.Width, $parameters.Height);
});
};
});

define("FileViewerPlugin.controller$OpenDocumentFromResources", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$OpenDocumentFromResources.openDocumentFromResourcesJS", "FileViewerPlugin.controller$OpenDocumentFromResources.OpenFromURLJS", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$CheckFileViewerPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel, FileViewerPlugin_controller_OpenDocumentFromResources_openDocumentFromResourcesJS, FileViewerPlugin_controller_OpenDocumentFromResources_OpenFromURLJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.openDocumentFromResources$Action = function (resourcePathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromResources$vars"))());
vars.value.resourcePathInLocal = resourcePathIn;
var checkPluginVar = new OS.DataTypes.VariableHolder();
var openDocumentFromResourcesJSResult = new OS.DataTypes.VariableHolder();
var openFromURLJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromResources$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkPluginVar = checkPluginVar;
varBag.openDocumentFromResourcesJSResult = openDocumentFromResourcesJSResult;
varBag.openFromURLJSResult = openFromURLJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:CrYLGSMPA0iiyf8aT5VwLQ:/ClientActionFlows.CrYLGSMPA0iiyf8aT5VwLQ:1balEUFjp1Cz8_MTB6SD8Q", "FileViewerPlugin", "OpenDocumentFromResources", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:saWkK2w1H0u8Yjfr9PqKew", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:ero68Vjaf0eDKYywbN482A", callContext.id);
// Execute Action: CheckPlugin
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:1Xk7NPr0T0KhPnE_Gb11Gg", callContext.id) && checkPluginVar.value.isAvailableOut)) {
// IsPWA
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:FjGCVxJpF0myKzMs3XmO0g", callContext.id) && checkPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:+c5ht+pzkE2g5MKNO5Rp1w", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_OpenDocumentFromResources_OpenFromURLJS, "OpenFromURL", "OpenDocumentFromResources", {
FilePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.resourcePathInLocal, OS.DataTypes.DataTypes.Text),
App: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.getEntryEspaceName(), OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromResources$openFromURLJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
openFromURLJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:gx4CoTO1JkqSlwCPLK7uTQ", callContext.id);
// Success = OpenFromURL.Success
outVars.value.successOut = openFromURLJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:gx4CoTO1JkqSlwCPLK7uTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = OpenFromURL.ErrorCode
outVars.value.errorOut.errorCodeAttr = openFromURLJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:gx4CoTO1JkqSlwCPLK7uTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = OpenFromURL.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openFromURLJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:mHXnLkXH+Ueu_4lueDcEeg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:seXEFKbWsEe5TJZ8un9IaQ", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_OpenDocumentFromResources_openDocumentFromResourcesJS, "openDocumentFromResources", "OpenDocumentFromResources", {
ResourcePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.resourcePathInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromResources$openDocumentFromResourcesJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
openDocumentFromResourcesJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:HNkh6y6rQEq+exj6BmXlcQ", callContext.id);
// Success = openDocumentFromResources.Success
outVars.value.successOut = openDocumentFromResourcesJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:HNkh6y6rQEq+exj6BmXlcQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = openDocumentFromResources.ErrorCode
outVars.value.errorOut.errorCodeAttr = openDocumentFromResourcesJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:HNkh6y6rQEq+exj6BmXlcQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = openDocumentFromResources.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openDocumentFromResourcesJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:1bY7aHBX1UaLf5Ejv6mkiA", callContext.id);
});
}

});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:sGRIdgkQjkKJS9K+CJgmRg", callContext.id);
// Error.ErrorCode = CheckPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:sGRIdgkQjkKJS9K+CJgmRg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = CheckPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:C0zXdvpRHUWAuj2ZNwxxcQ", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:CrYLGSMPA0iiyf8aT5VwLQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:CrYLGSMPA0iiyf8aT5VwLQ", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromResources$vars", [{
name: "ResourcePath",
attrName: "resourcePathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromResources$openDocumentFromResourcesJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromResources$openFromURLJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromResources$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.openDocumentFromResources$Action = function (resourcePathIn) {
resourcePathIn = (resourcePathIn === undefined) ? "" : resourcePathIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.openDocumentFromResources$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(resourcePathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$OpenDocumentFromResources.openDocumentFromResourcesJS", [], function () {
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
    "path": $parameters.ResourcePath
}

OSFileViewerPluginWrapper.Instance.openDocumentFromResources(
    options,
    onSuccess,
    onError
)

});
};
});
define("FileViewerPlugin.controller$OpenDocumentFromResources.OpenFromURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function onSuccess(){
    $parameters.Success = true;
    $resolve();
}

function onError(errorCode, errorMessage){
    $parameters.Success = false;
    $parameters.ErrorCode = errorCode;
    $parameters.ErrorMessage = errorMessage;
    $resolve();
}

if (!(($parameters.FilePath).startsWith("resources/"))) {
    onError('OS-PLUG-FLVW-0007', 'Invalid parameters.')
    return
}

var resourcesURL = window.location.origin + '/' + $parameters.App + '/' + $parameters.FilePath;
OSFileViewerLib.openDocumentFromURL(resourcesURL, onSuccess, onError);
});
};
});

define("FileViewerPlugin.controller$OpenDocumentFromUrl", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$OpenDocumentFromUrl.OpenDocumentFromUrlJS", "FileViewerPlugin.controller$OpenDocumentFromUrl.OpenFromURLJS", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$CheckFileViewerPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel, FileViewerPlugin_controller_OpenDocumentFromUrl_OpenDocumentFromUrlJS, FileViewerPlugin_controller_OpenDocumentFromUrl_OpenFromURLJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.openDocumentFromUrl$Action = function (uRLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromUrl$vars"))());
vars.value.uRLInLocal = uRLIn;
var checkPluginVar = new OS.DataTypes.VariableHolder();
var openDocumentFromUrlJSResult = new OS.DataTypes.VariableHolder();
var openFromURLJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromUrl$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkPluginVar = checkPluginVar;
varBag.openDocumentFromUrlJSResult = openDocumentFromUrlJSResult;
varBag.openFromURLJSResult = openFromURLJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:9lTfUfGfvEeDeaff1Wy7VA:/ClientActionFlows.9lTfUfGfvEeDeaff1Wy7VA:oLwSv23LBUoRRJYJo3p0_Q", "FileViewerPlugin", "OpenDocumentFromUrl", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:4wC0JdGbr02AOVUHbTkVqw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:FuraSsDsmEGhQUsBe0JoZg", callContext.id);
// Execute Action: CheckPlugin
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:+zFnHF7_g0moTt_C6L4kiQ", callContext.id) && checkPluginVar.value.isAvailableOut)) {
// IsPWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:7z2+PYGgEEG1b_u_dhssvg", callContext.id) && checkPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:l_YwkrOl_U69FwlFQiSNXg", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_OpenDocumentFromUrl_OpenFromURLJS, "OpenFromURL", "OpenDocumentFromUrl", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromUrl$openFromURLJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
openFromURLJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:x63di4_xMEeo+zsVBAbr5w", callContext.id);
// Success = OpenFromURL.Success
outVars.value.successOut = openFromURLJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:x63di4_xMEeo+zsVBAbr5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = OpenFromURL.ErrorCode
outVars.value.errorOut.errorCodeAttr = openFromURLJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:x63di4_xMEeo+zsVBAbr5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = OpenFromURL.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openFromURLJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:rjKmobdHx0aE87YCqTNJLg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:bMoYI8wDN0imp01F7+EbLw", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_OpenDocumentFromUrl_OpenDocumentFromUrlJS, "OpenDocumentFromUrl", "OpenDocumentFromUrl", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.OpenDocumentFromUrl$openDocumentFromUrlJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
openDocumentFromUrlJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:OYKsVuyroEyAJP3m+YNTwA", callContext.id);
// Success = OpenDocumentFromUrl.Success
outVars.value.successOut = openDocumentFromUrlJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:OYKsVuyroEyAJP3m+YNTwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = OpenDocumentFromUrl.ErrorCode
outVars.value.errorOut.errorCodeAttr = openDocumentFromUrlJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:OYKsVuyroEyAJP3m+YNTwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = OpenDocumentFromUrl.ErrorMessage
outVars.value.errorOut.errorMessageAttr = openDocumentFromUrlJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Bd4YqZmIakuJdufUn6e+gA", callContext.id);
});
}

});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:aXh0ZQHEL0+CiIUfxhh9Zw", callContext.id);
// Error.ErrorCode = CheckPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:aXh0ZQHEL0+CiIUfxhh9Zw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = CheckPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:RRRxhpZ3yEqthKLU1aRHcw", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:9lTfUfGfvEeDeaff1Wy7VA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:9lTfUfGfvEeDeaff1Wy7VA", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromUrl$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromUrl$openDocumentFromUrlJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromUrl$openFromURLJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.OpenDocumentFromUrl$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.openDocumentFromUrl$Action = function (uRLIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.openDocumentFromUrl$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$OpenDocumentFromUrl.OpenDocumentFromUrlJS", [], function () {
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
    "url": $parameters.URL
}

OSFileViewerPluginWrapper.Instance.openDocumentFromUrl(
    options,
    onSuccess,
    onError
)

});
};
});
define("FileViewerPlugin.controller$OpenDocumentFromUrl.OpenFromURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function onSuccess(){
    $parameters.Success = true;
    $resolve();
}

function onError(errorCode, errorMessage){
    $parameters.Success = false;
    $parameters.ErrorCode = errorCode;
    $parameters.ErrorMessage = errorMessage;
    $resolve();
}
OSFileViewerLib.openDocumentFromURL($parameters.URL, onSuccess, onError);
});
};
});

define("FileViewerPlugin.controller$PreviewMediaContentFromLocalPath", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$PreviewMediaContentFromLocalPath.previewMediaContentFromLocalPathJS", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$CheckFileViewerPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel, FileViewerPlugin_controller_PreviewMediaContentFromLocalPath_previewMediaContentFromLocalPathJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.previewMediaContentFromLocalPath$Action = function (filePathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.PreviewMediaContentFromLocalPath$vars"))());
vars.value.filePathInLocal = filePathIn;
var checkPluginVar = new OS.DataTypes.VariableHolder();
var previewMediaContentFromLocalPathJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.PreviewMediaContentFromLocalPath$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkPluginVar = checkPluginVar;
varBag.previewMediaContentFromLocalPathJSResult = previewMediaContentFromLocalPathJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:bk5yVuAkaE6x51BnuXHtSg:/ClientActionFlows.bk5yVuAkaE6x51BnuXHtSg:DIbDMMtcGkL1N+noLIVfdQ", "FileViewerPlugin", "PreviewMediaContentFromLocalPath", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:TU_QF7i7lUuqhwy1GPuHdA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:xGmU_B2xQEeBNipdOUs6Hg", callContext.id);
// Execute Action: CheckPlugin
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:OHy0vEbYmUmT0OsoH5G8lw", callContext.id) && checkPluginVar.value.isAvailableOut)) {
// IsPWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:f8YTh3I8OEaIBnJK_nS9rw", callContext.id) && checkPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:N7fSPadZoE+2SO20emxYYg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:7a2ik2TDsUW_2ksBZpoTsA", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_PreviewMediaContentFromLocalPath_previewMediaContentFromLocalPathJS, "previewMediaContentFromLocalPath", "PreviewMediaContentFromLocalPath", {
FilePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.filePathInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.PreviewMediaContentFromLocalPath$previewMediaContentFromLocalPathJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
previewMediaContentFromLocalPathJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:9Rd4w1oiI0iCQ15zythDqA", callContext.id);
// Success = previewMediaContentFromLocalPath.Success
outVars.value.successOut = previewMediaContentFromLocalPathJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:9Rd4w1oiI0iCQ15zythDqA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = previewMediaContentFromLocalPath.ErrorCode
outVars.value.errorOut.errorCodeAttr = previewMediaContentFromLocalPathJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:9Rd4w1oiI0iCQ15zythDqA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = previewMediaContentFromLocalPath.ErrorMessage
outVars.value.errorOut.errorMessageAttr = previewMediaContentFromLocalPathJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:N7fSPadZoE+2SO20emxYYg", callContext.id);
});
}

});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:ey_cUKqNDkiD05NfZvxdXA", callContext.id);
// Error.ErrorCode = CheckPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:ey_cUKqNDkiD05NfZvxdXA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = CheckPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:UzXlHMMN70Kd7DNhQY2f+g", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:bk5yVuAkaE6x51BnuXHtSg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:bk5yVuAkaE6x51BnuXHtSg", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.PreviewMediaContentFromLocalPath$vars", [{
name: "FilePath",
attrName: "filePathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.PreviewMediaContentFromLocalPath$previewMediaContentFromLocalPathJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.PreviewMediaContentFromLocalPath$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.previewMediaContentFromLocalPath$Action = function (filePathIn) {
filePathIn = (filePathIn === undefined) ? "" : filePathIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.previewMediaContentFromLocalPath$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(filePathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$PreviewMediaContentFromLocalPath.previewMediaContentFromLocalPathJS", [], function () {
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
    "path": $parameters.FilePath
}

OSFileViewerPluginWrapper.Instance.previewMediaContentFromLocalPath(
    options,
    onSuccess,
    onError
)

});
};
});

define("FileViewerPlugin.controller$PreviewMediaContentFromResources", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$PreviewMediaContentFromResources.previewMediaContentFromResourcesJS", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$CheckFileViewerPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel, FileViewerPlugin_controller_PreviewMediaContentFromResources_previewMediaContentFromResourcesJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.previewMediaContentFromResources$Action = function (resourcePathIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.PreviewMediaContentFromResources$vars"))());
vars.value.resourcePathInLocal = resourcePathIn;
var checkPluginVar = new OS.DataTypes.VariableHolder();
var previewMediaContentFromResourcesJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.PreviewMediaContentFromResources$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkPluginVar = checkPluginVar;
varBag.previewMediaContentFromResourcesJSResult = previewMediaContentFromResourcesJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:KO1I2XuQeEihW2Gh0st+SQ:/ClientActionFlows.KO1I2XuQeEihW2Gh0st+SQ:ypDl57zCqVC8jbSLoCS+zg", "FileViewerPlugin", "PreviewMediaContentFromResources", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:6Ugy8Ln+qk2BkX1ObtjKBQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:W8WDdVlpaUaVbPWISxiZHQ", callContext.id);
// Execute Action: CheckPlugin
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:AiThktMuHU2brrG74gWaGQ", callContext.id) && checkPluginVar.value.isAvailableOut)) {
// IsPWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:XO9oufP4qUe54WPYLzJPMQ", callContext.id) && checkPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:tO7n3vSaYkSho2l+UvXJVQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Pvk4dVGKz0SUejbWSbVtLw", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_PreviewMediaContentFromResources_previewMediaContentFromResourcesJS, "previewMediaContentFromResources", "PreviewMediaContentFromResources", {
ResourcePath: OS.DataConversion.JSNodeParamConverter.to(vars.value.resourcePathInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.PreviewMediaContentFromResources$previewMediaContentFromResourcesJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
previewMediaContentFromResourcesJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:IQ9xCROv20+8yYQC7k4okA", callContext.id);
// Success = previewMediaContentFromResources.Success
outVars.value.successOut = previewMediaContentFromResourcesJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:IQ9xCROv20+8yYQC7k4okA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = previewMediaContentFromResources.ErrorCode
outVars.value.errorOut.errorCodeAttr = previewMediaContentFromResourcesJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:IQ9xCROv20+8yYQC7k4okA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = previewMediaContentFromResources.ErrorMessage
outVars.value.errorOut.errorMessageAttr = previewMediaContentFromResourcesJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:tO7n3vSaYkSho2l+UvXJVQ", callContext.id);
});
}

});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:ljRWQuVJLEaD5E8Lh+wWcg", callContext.id);
// Error.ErrorCode = CheckPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:ljRWQuVJLEaD5E8Lh+wWcg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = CheckPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:DJW_HMA+sEK9+v3sZTos0Q", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:KO1I2XuQeEihW2Gh0st+SQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:KO1I2XuQeEihW2Gh0st+SQ", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.PreviewMediaContentFromResources$vars", [{
name: "ResourcePath",
attrName: "resourcePathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.PreviewMediaContentFromResources$previewMediaContentFromResourcesJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.PreviewMediaContentFromResources$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.previewMediaContentFromResources$Action = function (resourcePathIn) {
resourcePathIn = (resourcePathIn === undefined) ? "" : resourcePathIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.previewMediaContentFromResources$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(resourcePathIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$PreviewMediaContentFromResources.previewMediaContentFromResourcesJS", [], function () {
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
    "path": $parameters.ResourcePath
}

OSFileViewerPluginWrapper.Instance.previewMediaContentFromResources(
    options,
    onSuccess,
    onError
)

});
};
});

define("FileViewerPlugin.controller$PreviewMediaContentFromUrl", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller", "CommonPlugin.model", "FileViewerPlugin.controller$PreviewMediaContentFromUrl.previewMediaContentFromUrlJS", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$CheckFileViewerPlugin"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPluginController, CommonPluginModel, FileViewerPlugin_controller_PreviewMediaContentFromUrl_previewMediaContentFromUrlJS) {
var OS = OutSystems.Internal;
FileViewerPluginController.default.previewMediaContentFromUrl$Action = function (uRLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.PreviewMediaContentFromUrl$vars"))());
vars.value.uRLInLocal = uRLIn;
var checkPluginVar = new OS.DataTypes.VariableHolder();
var previewMediaContentFromUrlJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileViewerPlugin.PreviewMediaContentFromUrl$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkPluginVar = checkPluginVar;
varBag.previewMediaContentFromUrlJSResult = previewMediaContentFromUrlJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("aw5PKeHKYU6jmdL+QYHQ7Q:5h5f6YT63Uy8LkfeCmRV2g:/ClientActionFlows.5h5f6YT63Uy8LkfeCmRV2g:BhUhuMY6ocEAPTt1_0XA8w", "FileViewerPlugin", "PreviewMediaContentFromUrl", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:Zkggnc1ZO0KPmu8RvAs4lA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:ZINKsEHKMkiwtXxq24YTjg", callContext.id);
// Execute Action: CheckPlugin
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:G4DDK6YS10aoQH8hVlwJHg", callContext.id) && checkPluginVar.value.isAvailableOut)) {
// IsPWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:6hXcc6Sv+kC8POF3ntyhzw", callContext.id) && checkPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:0ZwB6+8uykeUVc+d1tdmUQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:9bzzrzt3ikG4m1G6KEWtmA", callContext.id);
return controller.safeExecuteAsyncJSNode(FileViewerPlugin_controller_PreviewMediaContentFromUrl_previewMediaContentFromUrlJS, "previewMediaContentFromUrl", "PreviewMediaContentFromUrl", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileViewerPlugin.PreviewMediaContentFromUrl$previewMediaContentFromUrlJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
previewMediaContentFromUrlJSResult.value = results;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:UGKbu2eWaUqFCOSmine8+Q", callContext.id);
// Success = previewMediaContentFromUrl.Success
outVars.value.successOut = previewMediaContentFromUrlJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:UGKbu2eWaUqFCOSmine8+Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = previewMediaContentFromUrl.ErrorCode
outVars.value.errorOut.errorCodeAttr = previewMediaContentFromUrlJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:UGKbu2eWaUqFCOSmine8+Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = previewMediaContentFromUrl.ErrorMessage
outVars.value.errorOut.errorMessageAttr = previewMediaContentFromUrlJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:0ZwB6+8uykeUVc+d1tdmUQ", callContext.id);
});
}

});
} else {
// Set Failure
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:KMB5GVpNn02h2HTMx38VNg", callContext.id);
// Error.ErrorCode = CheckPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:KMB5GVpNn02h2HTMx38VNg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = CheckPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("aw5PKeHKYU6jmdL+QYHQ7Q:XDTyuZGVT02s5BiTQAXe4A", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:5h5f6YT63Uy8LkfeCmRV2g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("aw5PKeHKYU6jmdL+QYHQ7Q:5h5f6YT63Uy8LkfeCmRV2g", callContext.id);
throw ex;

});
};
var controller = FileViewerPluginController.default;
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.PreviewMediaContentFromUrl$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.PreviewMediaContentFromUrl$previewMediaContentFromUrlJSResult", [{
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
FileViewerPluginController.default.constructor.registerVariableGroupType("FileViewerPlugin.PreviewMediaContentFromUrl$outVars", [{
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
}]);
FileViewerPluginController.default.clientActionProxies.previewMediaContentFromUrl$Action = function (uRLIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
return controller.executeActionInsideJSNode(FileViewerPluginController.default.previewMediaContentFromUrl$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FileViewerPlugin.controller$PreviewMediaContentFromUrl.previewMediaContentFromUrlJS", [], function () {
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
    "url": $parameters.URL
}

OSFileViewerPluginWrapper.Instance.previewMediaContentFromUrl(
    options,
    onSuccess,
    onError
)

});
};
});

define("FileViewerPlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.controller$debugger"], function (exports, OutSystems, FileViewerPluginModel, FileViewerPlugin_Controller_debugger) {
var OS = OutSystems.Internal;
var FileViewerPluginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return FileViewerPluginController.default.defaultTimeout;
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
FileViewerPluginController.default = new Controller(null, "FileViewerPlugin");
});
define("FileViewerPlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"EuWSTC2ROUK6hn22RaJFAQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Fj429PsKL0yNryJHqUfCNw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isPWAOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SUiEiW7Pg0CZAVDK3wB4xQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"6KU5Y9xDx0q694zylSWX4g": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"DuoEu0G7DECjXglAFXVNrA": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"z08kMcJO60GmjjtyBUFH0g": {
getter: function (varBag, idService) {
return varBag.checkPWAJSResult.value;
}
},
"fVUYThF+ZkWjt63y4Vp0iQ": {
getter: function (varBag, idService) {
return varBag.loadCSSJSResult.value;
}
},
"MB2W1ECjj0G3tw__T8UesA": {
getter: function (varBag, idService) {
return varBag.checkPluginJSResult.value;
}
},
"ewXCW00YUUipJ7uG8T5V0g": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sygOVnO9QkSu8jfEh6PjeA": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0LgYzbawhUyXsbAD0pXC2Q": {
getter: function (varBag, idService) {
return varBag.vars.value.widthInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qMQofDFFXUW8qyK8jVojfQ": {
getter: function (varBag, idService) {
return varBag.vars.value.heightInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FN+jDSI_ik2cSIHzKx3gdw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"3qSNDbzguEO8wWudR7IyDg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"c1WhMXO6_06qpYlJjck9yg": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_OpenDocumentFromUrlVar.value;
}
},
"Qa67M4Tz9E+Txs83BmfLAw": {
getter: function (varBag, idService) {
return varBag.openDocumentFromUrlVar.value;
}
},
"aBhTNpASEECZWVudcvjTXg": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_OpenDocumentFromResourcesVar.value;
}
},
"4KbDbmectkiqLBEXvE_Erw": {
getter: function (varBag, idService) {
return varBag.checkFileViewerPlugin3Var.value;
}
},
"W8jLdI4o80uWjNU5pF0AUQ": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_ParamsValidationVar.value;
}
},
"KyU4jZmYfECrQPe_YpQLWg": {
getter: function (varBag, idService) {
return varBag.checkFileViewerPluginVar.value;
}
},
"ETpVmEVRukSqevKkPVWy1w": {
getter: function (varBag, idService) {
return varBag.checkFileViewerPlugin2Var.value;
}
},
"RN6hm9lxXUyffJZ3uJHF2A": {
getter: function (varBag, idService) {
return varBag.openDocumentFromResourcesVar.value;
}
},
"TtG451A7l020q7hTIMGHRQ": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_OpenDocumentFromLocalPathVar.value;
}
},
"OK8F74hchkaqMsT3kBluIA": {
getter: function (varBag, idService) {
return varBag.openDocumentFromLocalPathVar.value;
}
},
"k3SjRuZWnUOVHxSCyye1pw": {
getter: function (varBag, idService) {
return varBag.vars.value.resourcePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"coysdesUGkaJWxCnMmsfIA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HQkeHgxms0O4WixAfQOvQA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"ero68Vjaf0eDKYywbN482A": {
getter: function (varBag, idService) {
return varBag.checkPluginVar.value;
}
},
"seXEFKbWsEe5TJZ8un9IaQ": {
getter: function (varBag, idService) {
return varBag.openDocumentFromResourcesJSResult.value;
}
},
"+c5ht+pzkE2g5MKNO5Rp1w": {
getter: function (varBag, idService) {
return varBag.openFromURLJSResult.value;
}
},
"Izpq+WeSgUK42uFr6OHLdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Dx8lHt1zbEq_7c6KkiwIGQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wc48g8g0_kymY7X9ZI6gDQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"EwQ9ETGxvkmyhzIPlvCtkw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"8zoRXQjUpkaQITapSH9umQ": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckPluginVar.value;
}
},
"3o_CdWzw_EuZjYJ7I0vy3g": {
getter: function (varBag, idService) {
return varBag.previewMediaContentFromUrlJSResult.value;
}
},
"1yAXv40htkarkZ6az0brDg": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BLjMU0mRGUmAMbyyGB2Y_w": {
getter: function (varBag, idService) {
return varBag.vars.value.widthInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aimsTe+SN0WGeqIojkAvcg": {
getter: function (varBag, idService) {
return varBag.vars.value.heightInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VM0cOA3rAE6XQ0Ff4x_aNA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"VYHPQ0A7DUG1ciwaFG2e9g": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"2LItkW+HaESLIFCb0LnJ0A": {
getter: function (varBag, idService) {
return varBag.checkPluginVar.value;
}
},
"27CEHcMrP0KN6vAMFNXpAg": {
getter: function (varBag, idService) {
return varBag.openDocumentFromLocalPathJSResult.value;
}
},
"u6btbqqz_U2ykv5ezyM7Kw": {
getter: function (varBag, idService) {
return varBag.openFromFilePickerJSResult.value;
}
},
"HOLD71aQiEGqlVIqu0zyVA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"KecTArsPQ0uZftUAw1Kapw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isPWAOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rAcVRy_Fe0WCvUniwbLUuQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"8MVnlpDYK0yT7mdx_q_CKg": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"XhffCdc+I02yHGJOsta5Mw": {
getter: function (varBag, idService) {
return varBag.loadCSSJSResult.value;
}
},
"pf+ZXB13cUeiSDOOLF9yDA": {
getter: function (varBag, idService) {
return varBag.pluginIsLoadedJSResult.value;
}
},
"1S_TzX9uBkWcANWrraJakg": {
getter: function (varBag, idService) {
return varBag.checkPWAJSResult.value;
}
},
"UF4Tc9xUHkWvvCQaCvEqqw": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1UMAUdlzuUKy_7TwPDmk3Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FahjlpCgj0mve5SfNbm6NA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"0slWN3ePA0CNVmN0FZjKqA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"Zsrj7a53i0WoYkbPKkSevA": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckPluginVar.value;
}
},
"azkheLl2Dk+R1ZuX6XKKGw": {
getter: function (varBag, idService) {
return varBag.openFromURLJSResult.value;
}
},
"r3tTh4N0A065gZvksgcgRg": {
getter: function (varBag, idService) {
return varBag.openDocumentFromUrlJSResult.value;
}
},
"dkbQgG3_yE6swz_uBtJiHg": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"msWyBMYJuEqb9c9SWiA6yw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"qc1UqM0aNU+qYzmyugGlSw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"FuraSsDsmEGhQUsBe0JoZg": {
getter: function (varBag, idService) {
return varBag.checkPluginVar.value;
}
},
"bMoYI8wDN0imp01F7+EbLw": {
getter: function (varBag, idService) {
return varBag.openDocumentFromUrlJSResult.value;
}
},
"l_YwkrOl_U69FwlFQiSNXg": {
getter: function (varBag, idService) {
return varBag.openFromURLJSResult.value;
}
},
"4t8njquI70e_pDpyZrdwOQ": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"s+MwaMhBgUOJ09LVP4gojg": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1FPfXUJI9065c020yDzrUg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"xGmU_B2xQEeBNipdOUs6Hg": {
getter: function (varBag, idService) {
return varBag.checkPluginVar.value;
}
},
"7a2ik2TDsUW_2ksBZpoTsA": {
getter: function (varBag, idService) {
return varBag.previewMediaContentFromLocalPathJSResult.value;
}
},
"2dmoxWA8yESBHUV_xZhh5A": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"E6L6L99Kg0W8n4MBi5M6Vg": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4abod4jIqEWlc7IOyEqzNQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"T4L+gP6wtE+DrcoKoFnCAQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"GFP2MCD+EUS0cR8_a3YxNw": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckPluginVar.value;
}
},
"3QCuZ57Sg0eHCm509YzPYQ": {
getter: function (varBag, idService) {
return varBag.previewMediaContentFromLocalPathJSResult.value;
}
},
"bXxTsiFrCE2dm_SmYhBbew": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gV40h6ipKkWTeh3EPM3xcg": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"UOViQGCXVUWK7aUPxx3D9g": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"SFKTF_2yB0KT+DDs9b8H9Q": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"TxzsYYmukE6nKihKt67_ug": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckPluginVar.value;
}
},
"sdYzwcEiB02_JGJR1d0GyA": {
getter: function (varBag, idService) {
return varBag.openFromURLJSResult.value;
}
},
"f0+xz78OfUmRKE0ceppu7Q": {
getter: function (varBag, idService) {
return varBag.openDocumentFromResourcesJSResult.value;
}
},
"ZUCuhjWn80mTPZrc+Z89jQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pQzqGH_mk06L5FnemcAYew": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zAeLvqgEJ0WIlzoDDlANMA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"c5hBv2NG4EydiibksECJiw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"AoGAFRMArUGObk1uPckKOA": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_PreviewMediaContentFromLocalPathVar.value;
}
},
"gBGmTTDh1UaBIe9_tC+drA": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_PreviewMediaContentFromUrlVar.value;
}
},
"MoNwToftXkW9rsWk2n+8Ow": {
getter: function (varBag, idService) {
return varBag.previewMediaContentFromUrlVar.value;
}
},
"CJKOiMOIZUO68ca6I5Qcyg": {
getter: function (varBag, idService) {
return varBag.checkFileViewerPluginVar.value;
}
},
"Z9fBmA+yt0KEMNhRUjLNyg": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_ParamsValidationVar.value;
}
},
"LmvVnn+660aog757BFHZXA": {
getter: function (varBag, idService) {
return varBag.checkFileViewerPlugin2Var.value;
}
},
"Nhdw0xgoZ0utZjZgzloufw": {
getter: function (varBag, idService) {
return varBag.previewMediaContentFromLocalPathVar.value;
}
},
"IOJKGAlmZUCYFEhXI_IhWg": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_ZJSwyrv2kq5cLH5191NMw": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TvsQ6g8un0Grc3F_t6J2cw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BBAIfw2SC0a+JGfQsCZs9g": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"QVFvnCGk90OeE17MI7ledw": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckPluginVar.value;
}
},
"O75Fdjm0D029qN5ywwQFDw": {
getter: function (varBag, idService) {
return varBag.vars.value.resourcePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6vR41tLpMUSAgWZO5_gQ8Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"9EZ8l4sxZ0y+_3uWA5YMDQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"W8WDdVlpaUaVbPWISxiZHQ": {
getter: function (varBag, idService) {
return varBag.checkPluginVar.value;
}
},
"Pvk4dVGKz0SUejbWSbVtLw": {
getter: function (varBag, idService) {
return varBag.previewMediaContentFromResourcesJSResult.value;
}
},
"tJAcc6pVIUSIPXlusQQAvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"CoegbdEk_kKBTESkDNZHng": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xU1vP_A_zUWC_23PPLuj5g": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"ZINKsEHKMkiwtXxq24YTjg": {
getter: function (varBag, idService) {
return varBag.checkPluginVar.value;
}
},
"9bzzrzt3ikG4m1G6KEWtmA": {
getter: function (varBag, idService) {
return varBag.previewMediaContentFromUrlJSResult.value;
}
},
"oWtVYNhj20iUq4unceI3Pg": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"H07qVTieK0mZpyaLMuU13w": {
getter: function (varBag, idService) {
return varBag.vars.value.widthInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JLyjAYw5bEyrCtsN7DYe1A": {
getter: function (varBag, idService) {
return varBag.vars.value.heightInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"e9IWhPF3MkKb4CN4xoNB3Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6bAHYT_jOUil+TNAph5WRQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"yHk3cUZWs0uS8DwteOVW3A": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"PKyo0JOfdk+wvrCvLhNXLw": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckPluginVar.value;
}
},
"8Xpjbu3mnUWBxaHJlhri8w": {
getter: function (varBag, idService) {
return varBag.openDocumentFromLocalPathJSResult.value;
}
},
"CYG5d+_r3UeMSvFeDyP9IQ": {
getter: function (varBag, idService) {
return varBag.openFromFilePickerJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
