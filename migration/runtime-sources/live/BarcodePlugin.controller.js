define("BarcodePlugin.controller$CheckBarcodePlugin", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "BarcodePlugin.controller$CheckBarcodePlugin.GetWebAPIJS", "BarcodePlugin.controller$CheckBarcodePlugin.IsPluginAvailableJSJS", "BarcodePlugin.controller$CheckBarcodePlugin.AddCSSJS", "CommonPlugin.controller$IsCordovaDefined", "BarcodePlugin.referencesHealth", "BarcodePlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec"], function (exports, OutSystems, BarcodePluginModel, BarcodePluginController, CommonPluginController, CommonPluginModel, BarcodePlugin_controller_CheckBarcodePlugin_GetWebAPIJS, BarcodePlugin_controller_CheckBarcodePlugin_IsPluginAvailableJSJS, BarcodePlugin_controller_CheckBarcodePlugin_AddCSSJS) {
var OS = OutSystems.Internal;
BarcodePluginController.default.checkBarcodePlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var getWebAPIJSResult = new OS.DataTypes.VariableHolder();
var isPluginAvailableJSJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BarcodePlugin.CheckBarcodePlugin$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.getWebAPIJSResult = getWebAPIJSResult;
varBag.isPluginAvailableJSJSResult = isPluginAvailableJSJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("2lG1uL2uLUqAyCj_HqG_mA:fH3jvysbR0SGdPEDtto7pQ:/ClientActionFlows.fH3jvysbR0SGdPEDtto7pQ:gHYkZmGhGL4dN3SZRQjhlg", "BarcodePlugin", "CheckBarcodePlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GnnpVWfFak+09gDXhiatGQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:nU_NA6jDN06P3LCfB+nkQw", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:3KNCpdQqsUKVso583nvR+Q", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ka07d5Z+wUO9P8q2r6Ad6A", callContext.id);
// Checks if the barcode scanner plugin is loaded and ready to be used.
isPluginAvailableJSJSResult.value = controller.safeExecuteJSNode(BarcodePlugin_controller_CheckBarcodePlugin_IsPluginAvailableJSJS, "IsPluginAvailableJS", "CheckBarcodePlugin", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("BarcodePlugin.CheckBarcodePlugin$isPluginAvailableJSJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:r2NNo+9PFk+vEX6xm+2Rdg", callContext.id) && isPluginAvailableJSJSResult.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:UlTp+_pXMU+Ins4ubsUbXQ", callContext.id);
// IsAvailable = IsPluginAvailableJS.IsAvailable
outVars.value.isAvailableOut = isPluginAvailableJSJSResult.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:UlTp+_pXMU+Ins4ubsUbXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:UlTp+_pXMU+Ins4ubsUbXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:2G4T9fpZM0+mcUag3Sgamg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ZRxEJxA9n0uPhQ7TS8aS6A", callContext.id);
// Error.ErrorCode = "OS-PLUG-BARC-0012"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-BARC-0012";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ZRxEJxA9n0uPhQ7TS8aS6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Barcode Plugin is not available."
outVars.value.errorOut.errorMessageAttr = "Barcode Plugin is not available.";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ZRxEJxA9n0uPhQ7TS8aS6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:d98VdAsHQ0CgSOIw15ULKg", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:hRkwHdGMR0OiTXacrReXlw", callContext.id);
getWebAPIJSResult.value = controller.safeExecuteJSNode(BarcodePlugin_controller_CheckBarcodePlugin_GetWebAPIJS, "GetWebAPI", "CheckBarcodePlugin", {
IsSupported: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("BarcodePlugin.CheckBarcodePlugin$getWebAPIJSResult"))();
jsNodeResult.isSupportedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSupported, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Is PWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ypnWqNKuSkyu2Dq7IRs3vA", callContext.id) && getWebAPIJSResult.value.isSupportedOut)) {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:3GSf3ravMkyakzckghc1EA", callContext.id);
controller.safeExecuteJSNode(BarcodePlugin_controller_CheckBarcodePlugin_AddCSSJS, "AddCSS", "CheckBarcodePlugin", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:IUAYgax4+Uu1qbfGoEOotw", callContext.id);
// Execute Action: AddOSBarcodePlugin
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/BarcodePlugin.OSBarcodePlugin.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:3FriAe5KLEWDMwZ6n5wSTw", callContext.id);
// IsAvailable = True
outVars.value.isAvailableOut = true;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:3FriAe5KLEWDMwZ6n5wSTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:3FriAe5KLEWDMwZ6n5wSTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:3FriAe5KLEWDMwZ6n5wSTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// IsPWA = True
outVars.value.isPWAOut = true;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:4U2FrrmEdUSnN6oThz0rcQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ltu+qjJ4_kq8eM4RQruRjQ", callContext.id);
// Error.ErrorCode = "OS-PLUG-BARC-0011"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-BARC-0011";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ltu+qjJ4_kq8eM4RQruRjQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Cordova is not available."
outVars.value.errorOut.errorMessageAttr = "Cordova is not available.";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ltu+qjJ4_kq8eM4RQruRjQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:4U2FrrmEdUSnN6oThz0rcQ", callContext.id);
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("CheckBarcodePlugin.CheckBarcodePlugin", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:HyVKgjJxLEqWSPc6Hx4dWQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:wFtoLDmoVEafaS5UGo9rag", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:wFtoLDmoVEafaS5UGo9rag", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:wFtoLDmoVEafaS5UGo9rag", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:IplFO_04IUq4kYHarh6u1Q", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("2lG1uL2uLUqAyCj_HqG_mA:fH3jvysbR0SGdPEDtto7pQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("2lG1uL2uLUqAyCj_HqG_mA:fH3jvysbR0SGdPEDtto7pQ", callContext.id);
throw ex;

});
};
var controller = BarcodePluginController.default;
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.CheckBarcodePlugin$getWebAPIJSResult", [{
name: "IsSupported",
attrName: "isSupportedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.CheckBarcodePlugin$isPluginAvailableJSJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.CheckBarcodePlugin$outVars", [{
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
BarcodePluginController.default.clientActionProxies.checkBarcodePlugin$Action = function () {
return controller.executeActionInsideJSNode(BarcodePluginController.default.checkBarcodePlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
IsPWA: OS.DataConversion.JSNodeParamConverter.to(actionResults.isPWAOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("BarcodePlugin.controller$CheckBarcodePlugin.GetWebAPIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsSupported = navigator.mediaDevices !== undefined
};
});
define("BarcodePlugin.controller$CheckBarcodePlugin.IsPluginAvailableJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsAvailable = !!cordova.plugins && (!!cordova.plugins.OSBarcodeScanner || !!cordova.plugins.OSBarcode);
};
});
define("BarcodePlugin.controller$CheckBarcodePlugin.AddCSSJS", [], function () {
return function ($actions, $roles, $public) {
const allcss = [...document.styleSheets]
let hasCss = allcss.filter(item => item.title == "barcode-plugin-css").length > 0;
if(!hasCss) {
    let sheet = document.createElement('style');
    sheet.title = 'barcode-plugin-css';
    sheet.innerHTML = '.interface-wrapper{height:100%;overflow:hidden;width:100%}.scanner-wrapper{display:flex;height:100%;width:100%}.barcode-btn{background:hsla(0,0%,100%,.1);border:1.452px solid #4f575e;color:#fff;font-weight:500;z-index:11}.barcode-btn,.barcode-btn-clicked{align-items:center;backdrop-filter:blur(8.71px);display:flex;justify-content:center}.barcode-btn-clicked{background:#fff;border:1.452px solid #fff;color:#4f575e}.barcode-btn path{fill:#fff}.barcode-btn-clicked path{fill:#4f575e}.barcode-container{height:100%;padding:32px;position:absolute;top:0;width:100%;z-index:11}@media (max-width:320px){.barcode-container{height:100%;padding:10px;position:absolute;top:0;width:100%;z-index:11}}.outsystems-flex{display:flex}.outsystems-col{flex-direction:column}.outsystems-col-reverse{flex-direction:column-reverse}.outsystems-row{flex-direction:row}.outsystems-row-reverse{flex-direction:row-reverse}.outsystems-flex-justify-center{justify-content:center;-webkit-justify-content:center}.outsystems-flex-justify-end{justify-content:end;-webkit-justify-content:flex-end}.outsystems-flex-justify-between{-webkit-justify-content:space-between;justify-content:space-between}.outsystems-flex-start{-webkit-align-items:flex-start;align-items:flex-start}.outsystems-flex-end{-webkit-align-items:flex-end;align-items:flex-end}.outsystems-flex-center{-webkit-align-items:center;align-items:center}.outsystems-fill-height{flex:1 1 0}@media (min-width:641px){.barcode-btn-clicked,.outsystems-row-gap>.barcode-btn{margin-bottom:39px}.barcode-btn-clicked,.outsystems-row-s-gap>.barcode-btn{margin-bottom:24px}}@media (max-width:640px){.outsystems-row-gap{row-gap:39px}.outsystems-row-s-gap{row-gap:24px}}@media (max-width:375px){.outsystems-row-gap{row-gap:10px}}.outsystems-mt-24{margin-top:24px}.outsystems-mb-24{margin-bottom:24px}.outsystems-mt-32{margin-top:32px}.outsystems-torch-btn{border-radius:200px;height:48px;width:48px}.outsystems-scanner-btn{border-radius:4px;height:48px;padding:0 15px;width:fit-content}.outsystems-scanner-instructions{word-wrap:break-word;color:#fff;font-size:16px;font-weight:400;-webkit-justify-content:center;justify-content:center;line-height:24px;text-align:center;word-break:break-all}.outsystems-camera-dropdown{border-radius:54px;padding:7.5px 12px;text-align:center;text-align-last:center}';
    document.getElementsByTagName('head')[0].appendChild(sheet);
}
};
});

define("BarcodePlugin.controller$ScanBarcode", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.controller", "CommonPlugin.model", "BarcodePlugin.controller$ScanBarcode.LimitScanButtonTextJS", "BarcodePlugin.controller$ScanBarcode.LimitScanInstructionsJS", "BarcodePlugin.controller$ScanBarcode.CorrectHintJS", "BarcodePlugin.controller$ScanBarcode.RunWebScannerJS", "BarcodePlugin.controller$ScanBarcode.RunCodeScannerJS", "CommonPlugin.model$ErrorRec", "BarcodePlugin.referencesHealth", "BarcodePlugin.referencesHealth$CommonPlugin", "BarcodePlugin.controller$CheckBarcodePlugin", "BarcodePlugin.model$ScanResultRec", "BarcodePlugin.model$ScannerResultInternalRec"], function (exports, OutSystems, BarcodePluginModel, BarcodePluginController, CommonPluginModel, BarcodePlugin_controller_ScanBarcode_LimitScanButtonTextJS, BarcodePlugin_controller_ScanBarcode_LimitScanInstructionsJS, BarcodePlugin_controller_ScanBarcode_CorrectHintJS, BarcodePlugin_controller_ScanBarcode_RunWebScannerJS, BarcodePlugin_controller_ScanBarcode_RunCodeScannerJS) {
var OS = OutSystems.Internal;
BarcodePluginController.default.scanBarcode$Action = function (scanInstructionsIn, cameraDirectionIn, scanOrientationIn, scanButtonIn, scanButtonTextIn, showCameraSelectionIn, hintIn, scannerFPSIn, androidScanningLibraryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BarcodePlugin.ScanBarcode$vars"))());
vars.value.scanInstructionsInLocal = scanInstructionsIn;
vars.value.cameraDirectionInLocal = cameraDirectionIn;
vars.value.scanOrientationInLocal = scanOrientationIn;
vars.value.scanButtonInLocal = scanButtonIn;
vars.value.scanButtonTextInLocal = scanButtonTextIn;
vars.value.showCameraSelectionInLocal = showCameraSelectionIn;
vars.value.hintInLocal = hintIn;
vars.value.scannerFPSInLocal = scannerFPSIn;
vars.value.androidScanningLibraryInLocal = androidScanningLibraryIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkBarcodePluginVar = new OS.DataTypes.VariableHolder();
var limitScanButtonTextJSResult = new OS.DataTypes.VariableHolder();
var limitScanInstructionsJSResult = new OS.DataTypes.VariableHolder();
var correctHintJSResult = new OS.DataTypes.VariableHolder();
var runWebScannerJSResult = new OS.DataTypes.VariableHolder();
var runCodeScannerJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeScanResultVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(BarcodePluginModel.ScanResultRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BarcodePlugin.ScanBarcode$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkBarcodePluginVar = checkBarcodePluginVar;
varBag.limitScanButtonTextJSResult = limitScanButtonTextJSResult;
varBag.limitScanInstructionsJSResult = limitScanInstructionsJSResult;
varBag.correctHintJSResult = correctHintJSResult;
varBag.runWebScannerJSResult = runWebScannerJSResult;
varBag.runCodeScannerJSResult = runCodeScannerJSResult;
varBag.jSONDeserializeScanResultVar = jSONDeserializeScanResultVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("2lG1uL2uLUqAyCj_HqG_mA:ToX+i4lIJ0WMAkuX0BnZyw:/ClientActionFlows.ToX+i4lIJ0WMAkuX0BnZyw:7Slukr4hIee+115p7z2MKA", "BarcodePlugin", "ScanBarcode", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:fNCKWfqJM0ed5O_D+ROgSQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:vZ8GL7fcd06TMZzYgN0P2w", callContext.id);
// Execute Action: CheckBarcodePlugin
return BarcodePluginController.default.checkBarcodePlugin$Action(callContext).then(function (value) {
checkBarcodePluginVar.value = value;
}).then(function () {
// Is Barcode available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:FoYmwZEWbEWPuKn4cgESMw", callContext.id) && checkBarcodePluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:k5fKby3iI0KJRTRexcxt2w", callContext.id);
limitScanInstructionsJSResult.value = controller.safeExecuteJSNode(BarcodePlugin_controller_ScanBarcode_LimitScanInstructionsJS, "LimitScanInstructions", "ScanBarcode", {
MaxLength: OS.DataConversion.JSNodeParamConverter.to(162, OS.DataTypes.DataTypes.Integer),
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.scanInstructionsInLocal, OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("BarcodePlugin.ScanBarcode$limitScanInstructionsJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:nitkGeFz3kOa7MOpd24T8A", callContext.id);
limitScanButtonTextJSResult.value = controller.safeExecuteJSNode(BarcodePlugin_controller_ScanBarcode_LimitScanButtonTextJS, "LimitScanButtonText", "ScanBarcode", {
MaxLength: OS.DataConversion.JSNodeParamConverter.to(16, OS.DataTypes.DataTypes.Integer),
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.scanButtonTextInLocal, OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("BarcodePlugin.ScanBarcode$limitScanButtonTextJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:HAlA+eZ9N0C+HKM7k7Osyw", callContext.id);
// ScanInstructions = LimitScanInstructions.Result
vars.value.scanInstructionsInLocal = limitScanInstructionsJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:EhyMFJYLQU+aZq6+Z4Rmuw", callContext.id);
// ScanButtonText = LimitScanButtonText.Result
vars.value.scanButtonTextInLocal = limitScanButtonTextJSResult.value.resultOut;
if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:zzHz8tq3vEC+nJWgO8KuLg", callContext.id) && (vars.value.cameraDirectionInLocal === OS.BuiltinFunctions.nullIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ohGnKO_v3k2DbL4VdpRG3w", callContext.id);
// CameraDirection = BackCamera
vars.value.cameraDirectionInLocal = BarcodePluginModel.staticEntities.cameraDirection.backCamera;
}

if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:iHboTx9cmky6x7UsfZ7AMg", callContext.id) && (vars.value.scanOrientationInLocal === OS.BuiltinFunctions.nullIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:g0uzQ_kh8EWnrHhYBDJV8g", callContext.id);
// ScanOrientation = Adaptive
vars.value.scanOrientationInLocal = BarcodePluginModel.staticEntities.scanOrientation.adaptive;
}

if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:UbGVDlsw0UqyfCSy6WiT6Q", callContext.id) && (vars.value.hintInLocal === OS.BuiltinFunctions.nullIdentifier()))) {
// Use ALL for Hint
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:W1cU7diE9Ua3POEYEMp_8g", callContext.id);
// Hint = ALL
vars.value.hintInLocal = BarcodePluginModel.staticEntities.format.aLL;
}

OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:dc+jjlFGwE6iJ7yM9prffw", callContext.id);
correctHintJSResult.value = controller.safeExecuteJSNode(BarcodePlugin_controller_ScanBarcode_CorrectHintJS, "CorrectHint", "ScanBarcode", {
Hint: OS.DataConversion.JSNodeParamConverter.to(vars.value.hintInLocal, OS.DataTypes.DataTypes.Integer),
CorrectedHint: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("BarcodePlugin.ScanBarcode$correctHintJSResult"))();
jsNodeResult.correctedHintOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CorrectedHint, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:pTuB_Hbskkaz9U5VhnHiSw", callContext.id);
// CorrectedHint = CorrectHint.CorrectedHint
vars.value.correctedHintVar = correctHintJSResult.value.correctedHintOut;
// Is PWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:2+tbzDedykCCsYrRgwhyGg", callContext.id) && checkBarcodePluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:rmlnsldNv0KMxsjxUn0z4Q", callContext.id);
return controller.safeExecuteAsyncJSNode(BarcodePlugin_controller_ScanBarcode_RunWebScannerJS, "RunWebScanner", "ScanBarcode", {
ScanInstructions: OS.DataConversion.JSNodeParamConverter.to(vars.value.scanInstructionsInLocal, OS.DataTypes.DataTypes.Text),
ScanText: OS.DataConversion.JSNodeParamConverter.to(vars.value.scanButtonTextInLocal, OS.DataTypes.DataTypes.Text),
ScannerFPS: OS.DataConversion.JSNodeParamConverter.to(vars.value.scannerFPSInLocal, OS.DataTypes.DataTypes.Integer),
ScanOrientation: OS.DataConversion.JSNodeParamConverter.to(vars.value.scanOrientationInLocal, OS.DataTypes.DataTypes.Integer),
ScanButton: OS.DataConversion.JSNodeParamConverter.to(vars.value.scanButtonInLocal, OS.DataTypes.DataTypes.Boolean),
CameraDirection: OS.DataConversion.JSNodeParamConverter.to((vars.value.cameraDirectionInLocal).toString(), OS.DataTypes.DataTypes.Text),
Hint: OS.DataConversion.JSNodeParamConverter.to(vars.value.correctedHintVar, OS.DataTypes.DataTypes.Integer),
ShowCameraSelection: OS.DataConversion.JSNodeParamConverter.to(vars.value.showCameraSelectionInLocal, OS.DataTypes.DataTypes.Boolean),
ScanResult: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("BarcodePlugin.ScanBarcode$runWebScannerJSResult"))();
jsNodeResult.scanResultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ScanResult, OS.DataTypes.DataTypes.Text);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
runWebScannerJSResult.value = results;
}).then(function () {
// Set Scanner Result
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:FGgL85_MXESXP4vXtqVRTA", callContext.id);
// ScannerResult.Success = RunWebScanner.Success
vars.value.scannerResultVar.successAttr = runWebScannerJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:FGgL85_MXESXP4vXtqVRTA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScannerResult.ScanResultObjectString = RunWebScanner.ScanResult
vars.value.scannerResultVar.scanResultObjectStringAttr = runWebScannerJSResult.value.scanResultOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:FGgL85_MXESXP4vXtqVRTA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ScannerResult.Error.ErrorMessage = RunWebScanner.ErrorMessage
vars.value.scannerResultVar.errorAttr.errorMessageAttr = runWebScannerJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:FGgL85_MXESXP4vXtqVRTA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ScannerResult.Error.ErrorCode = RunWebScanner.ErrorCode
vars.value.scannerResultVar.errorAttr.errorCodeAttr = runWebScannerJSResult.value.errorCodeOut;
});
} else {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GmUu6kHDok6Ns3QAP_F8yg", callContext.id);
// Use this action to trigger the barcode reader.
return controller.safeExecuteAsyncJSNode(BarcodePlugin_controller_ScanBarcode_RunCodeScannerJS, "RunCodeScanner", "ScanBarcode", {
Hint: OS.DataConversion.JSNodeParamConverter.to(vars.value.correctedHintVar, OS.DataTypes.DataTypes.Integer),
ScanButton: OS.DataConversion.JSNodeParamConverter.to(vars.value.scanButtonInLocal, OS.DataTypes.DataTypes.Boolean),
ScanInstructions: OS.DataConversion.JSNodeParamConverter.to(vars.value.scanInstructionsInLocal, OS.DataTypes.DataTypes.Text),
AndroidScanningLibrary: OS.DataConversion.JSNodeParamConverter.to(vars.value.androidScanningLibraryInLocal, OS.DataTypes.DataTypes.Text),
ScanOrientation: OS.DataConversion.JSNodeParamConverter.to(vars.value.scanOrientationInLocal, OS.DataTypes.DataTypes.Integer),
ScanText: OS.DataConversion.JSNodeParamConverter.to(vars.value.scanButtonTextInLocal, OS.DataTypes.DataTypes.Text),
CameraDirection: OS.DataConversion.JSNodeParamConverter.to(vars.value.cameraDirectionInLocal, OS.DataTypes.DataTypes.Integer),
ScanResult: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("BarcodePlugin.ScanBarcode$runCodeScannerJSResult"))();
jsNodeResult.scanResultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ScanResult, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
runCodeScannerJSResult.value = results;
}).then(function () {
// Set Scanner Result
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:oAZR1k4fr0KoG_zOPQAIBQ", callContext.id);
// ScannerResult.Success = RunCodeScanner.Success
vars.value.scannerResultVar.successAttr = runCodeScannerJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:oAZR1k4fr0KoG_zOPQAIBQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScannerResult.ScanResultObjectString = RunCodeScanner.ScanResult
vars.value.scannerResultVar.scanResultObjectStringAttr = runCodeScannerJSResult.value.scanResultOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:oAZR1k4fr0KoG_zOPQAIBQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ScannerResult.Error.ErrorMessage = RunCodeScanner.ErrorMessage
vars.value.scannerResultVar.errorAttr.errorMessageAttr = runCodeScannerJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:oAZR1k4fr0KoG_zOPQAIBQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ScannerResult.Error.ErrorCode = RunCodeScanner.ErrorCode
vars.value.scannerResultVar.errorAttr.errorCodeAttr = runCodeScannerJSResult.value.errorCodeOut;
});
}

}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:5NK1DmWDgEmVFDkkddMESg", callContext.id) && vars.value.scannerResultVar.successAttr)) {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:nouojh3b2UOaYmTdQKiz4w", callContext.id);
// JSON Deserialize: JSONDeserializeScanResult
jSONDeserializeScanResultVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.scannerResultVar.scanResultObjectStringAttr, BarcodePluginModel.ScanResultRec, false);
// Set Values
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GO+bJ+IFaUGvj0vacURYwA", callContext.id);
// ScanResult = JSONDeserializeScanResult.Data
outVars.value.scanResultOut = jSONDeserializeScanResultVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GO+bJ+IFaUGvj0vacURYwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GO+bJ+IFaUGvj0vacURYwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = ScannerResult.Success
outVars.value.successOut = vars.value.scannerResultVar.successAttr;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GO+bJ+IFaUGvj0vacURYwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:GI51I_Gb1UmY_ycTVnx4Fg", callContext.id);
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ihWtvtJyEkyDTTlfOHgaxA", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:ihWtvtJyEkyDTTlfOHgaxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error = ScannerResult.Error
outVars.value.errorOut = vars.value.scannerResultVar.errorAttr;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:CskaqBBeiUmiI83uQJIaOg", callContext.id);
}

});
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:Jy7aMvlNQEmRgye8grz2UA", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:Jy7aMvlNQEmRgye8grz2UA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = CheckBarcodePlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkBarcodePluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:Jy7aMvlNQEmRgye8grz2UA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = CheckBarcodePlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkBarcodePluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:0WO1OG4Z4kCqCwoa9K0qcQ", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("ScanBarcode.ScanBarcode", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:4RgGwli7+UellBRPLj3lDg", callContext.id);
// Set error
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:21Vg6FDl80SAmJuv3Y7VIg", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:21Vg6FDl80SAmJuv3Y7VIg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:21Vg6FDl80SAmJuv3Y7VIg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("2lG1uL2uLUqAyCj_HqG_mA:m7a7VSp_JkuPpSidym9v0g", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("2lG1uL2uLUqAyCj_HqG_mA:ToX+i4lIJ0WMAkuX0BnZyw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("2lG1uL2uLUqAyCj_HqG_mA:ToX+i4lIJ0WMAkuX0BnZyw", callContext.id);
throw ex;

});
};
var controller = BarcodePluginController.default;
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.ScanBarcode$vars", [{
name: "ScanInstructions",
attrName: "scanInstructionsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "Center your code on the frame";
}
}, {
name: "CameraDirection",
attrName: "cameraDirectionInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return BarcodePluginModel.staticEntities.cameraDirection.backCamera;
}
}, {
name: "ScanOrientation",
attrName: "scanOrientationInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return BarcodePluginModel.staticEntities.scanOrientation.adaptive;
}
}, {
name: "ScanButton",
attrName: "scanButtonInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ScanButtonText",
attrName: "scanButtonTextInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "Scan";
}
}, {
name: "ShowCameraSelection",
attrName: "showCameraSelectionInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Hint",
attrName: "hintInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return BarcodePluginModel.staticEntities.format.aLL;
}
}, {
name: "ScannerFPS",
attrName: "scannerFPSInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return -1;
}
}, {
name: "AndroidScanningLibrary",
attrName: "androidScanningLibraryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return BarcodePluginModel.staticEntities.androidScanningLibrary.zXing;
}
}, {
name: "ScannerResult",
attrName: "scannerResultVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new BarcodePluginModel.ScannerResultInternalRec();
},
complexType: BarcodePluginModel.ScannerResultInternalRec
}, {
name: "CorrectedHint",
attrName: "correctedHintVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.ScanBarcode$limitScanButtonTextJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.ScanBarcode$limitScanInstructionsJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.ScanBarcode$correctHintJSResult", [{
name: "CorrectedHint",
attrName: "correctedHintOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.ScanBarcode$runWebScannerJSResult", [{
name: "ScanResult",
attrName: "scanResultOut",
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
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.ScanBarcode$runCodeScannerJSResult", [{
name: "ScanResult",
attrName: "scanResultOut",
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
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
BarcodePluginController.default.constructor.registerVariableGroupType("BarcodePlugin.ScanBarcode$outVars", [{
name: "ScanResult",
attrName: "scanResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new BarcodePluginModel.ScanResultRec();
},
complexType: BarcodePluginModel.ScanResultRec
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
}]);
BarcodePluginController.default.clientActionProxies.scanBarcode$Action = function (scanInstructionsIn, cameraDirectionIn, scanOrientationIn, scanButtonIn, scanButtonTextIn, showCameraSelectionIn, hintIn, scannerFPSIn, androidScanningLibraryIn) {
scanInstructionsIn = (scanInstructionsIn === undefined) ? "Center your code on the frame" : scanInstructionsIn;
cameraDirectionIn = (cameraDirectionIn === undefined) ? BarcodePluginModel.staticEntities.cameraDirection.backCamera : cameraDirectionIn;
scanOrientationIn = (scanOrientationIn === undefined) ? BarcodePluginModel.staticEntities.scanOrientation.adaptive : scanOrientationIn;
scanButtonIn = (scanButtonIn === undefined) ? false : scanButtonIn;
scanButtonTextIn = (scanButtonTextIn === undefined) ? "Scan" : scanButtonTextIn;
showCameraSelectionIn = (showCameraSelectionIn === undefined) ? false : showCameraSelectionIn;
hintIn = (hintIn === undefined) ? BarcodePluginModel.staticEntities.format.aLL : hintIn;
scannerFPSIn = (scannerFPSIn === undefined) ? -1 : scannerFPSIn;
androidScanningLibraryIn = (androidScanningLibraryIn === undefined) ? BarcodePluginModel.staticEntities.androidScanningLibrary.zXing : androidScanningLibraryIn;
return controller.executeActionInsideJSNode(BarcodePluginController.default.scanBarcode$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(scanInstructionsIn, OS.DataTypes.DataTypes.Text), cameraDirectionIn, scanOrientationIn, OS.DataConversion.JSNodeParamConverter.from(scanButtonIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(scanButtonTextIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(showCameraSelectionIn, OS.DataTypes.DataTypes.Boolean), hintIn, OS.DataConversion.JSNodeParamConverter.from(scannerFPSIn, OS.DataTypes.DataTypes.Integer), androidScanningLibraryIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ScanResult: actionResults.scanResultOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("BarcodePlugin.controller$ScanBarcode.LimitScanButtonTextJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const ellipsis = "...";

if ($public.BuiltinFunctions.length($parameters.Text) <= $parameters.MaxLength) {
    $parameters.Result = $parameters.Text;
} else {
    let truncatedString = $public.BuiltinFunctions.substr($parameters.Text,0,$parameters.MaxLength - ellipsis.length)
    const lastSpaceIndex = truncatedString.lastSpaceIndex

    if (lastSpaceIndex !== -1) {
        truncatedString = truncatedString.substr(0, lastSpaceIndex) + ellipsis
    } else {
        truncatedString = truncatedString + ellipsis
    }
    $parameters.Result = truncatedString
}
};
});
define("BarcodePlugin.controller$ScanBarcode.LimitScanInstructionsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const ellipsis = "...";

if ($public.BuiltinFunctions.length($parameters.Text) <= $parameters.MaxLength) {
    $parameters.Result = $parameters.Text;
} else {
    let truncatedString = $public.BuiltinFunctions.substr($parameters.Text,0,$parameters.MaxLength - ellipsis.length)
    const lastSpaceIndex = truncatedString.lastSpaceIndex

    if (lastSpaceIndex !== -1) {
        truncatedString = truncatedString.substr(0, lastSpaceIndex) + ellipsis
    } else {
        truncatedString = truncatedString + ellipsis
    }
    $parameters.Result = truncatedString
}
};
});
define("BarcodePlugin.controller$ScanBarcode.CorrectHintJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CorrectedHint = $parameters.Hint - 1
};
});
define("BarcodePlugin.controller$ScanBarcode.RunWebScannerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var params = {
    facingMode: $parameters.CameraDirection == '2' ? 'user' : 'environment',
    orientation: $parameters.ScanOrientation,
    scanInstructions: $parameters.ScanInstructions,
    hasScannerButton: $parameters.ScanButton,
    buttonText: $parameters.ScanText,
    showCameraSelection: $parameters.ShowCameraSelection,
    typeHint: $parameters.Hint == 17 ? undefined : $parameters.Hint,
    scannerFPS: $parameters.ScannerFPS != -1? $parameters.ScannerFPS : 50
}

function onSuccessScan (result) {
    // OutSystems uses 1-indexed, PWA implementation uses 0-index
    result.format = result.format + 1;
    $parameters.ScanResult = JSON.stringify(result);
    $parameters.Success = true;
    $resolve();
}

function onFailScan (errorCode, errorMessage) {
    $parameters.ErrorCode = errorCode;
    $parameters.ErrorMessage = errorMessage;
    $parameters.Success = false;
    $resolve();
}

async function startScan() {
    var parent = document.getElementById('reactContainer'); 
    await OSBarcodePlugin.openScanner(params, parent, onSuccessScan, onFailScan, $public.FeedbackMessage.showFeedbackMessage);    
}

startScan();
});
};
});
define("BarcodePlugin.controller$ScanBarcode.RunCodeScannerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
let params = {
    scanInstructions: $parameters.ScanInstructions,
    cameraDirection: $parameters.CameraDirection,
    scanOrientation: $parameters.ScanOrientation,
    scanButton: $parameters.ScanButton,
    scanText: $parameters.ScanText,
    hint: $parameters.Hint,
    androidScanningLibrary: $parameters.AndroidScanningLibrary
};

function onSuccessScan (result) {
    $parameters.ScanResult = parseScanResult(result);
    $parameters.Success = true;
    $resolve();
}

function onFailScan (error) {
    $parameters.ErrorCode = error.code;
    $parameters.ErrorMessage = error.message;
    $parameters.Success = false;
    $resolve();
}

function parseScanResult(result) {
    if (typeof result === "string") {
        try {
            const parsed = JSON.parse(result);
            if (parsed && parsed.ScanResult !== undefined && parsed.format !== undefined) {
                result = parsed;
            } else {
                // older plugin versions just returned string with barcode contents
                return JSON.stringify({ 'ScanResult': result, 'format': 0 });
            }
        } catch(e) {
            return JSON.stringify({ 'ScanResult': result, 'format': 0 });
        }
    }
    // OutSystems uses 1-indexed, cordova plugin uses 0-index
    result.format = result.format + 1;
    return JSON.stringify(result);
}

if(!!cordova.plugins.OSBarcode){
    cordova.plugins.OSBarcode.scanBarcode(params, onSuccessScan, onFailScan);
} else {
    let legacyFailScan = function(error) {
        $parameters.ErrorCode = 3;
        $parameters.ErrorMessage = error;
        $parameters.Success = false;
        $resolve();
    }
    cordova.plugins.OSBarcodeScanner.scan(params, onSuccessScan, legacyFailScan);
}
});
};
});

define("BarcodePlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.controller$debugger"], function (exports, OutSystems, BarcodePluginModel, BarcodePlugin_Controller_debugger) {
var OS = OutSystems.Internal;
var BarcodePluginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return BarcodePluginController.default.defaultTimeout;
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
BarcodePluginController.default = new Controller(null, "BarcodePlugin");
});
define("BarcodePlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"hCLaFcWPTUizXXrWiexy7w": {
getter: function (varBag, idService) {
return varBag.vars.value.scannerResultVar;
}
},
"AEf6dn3r7k6JQwEeMrR7Tw": {
getter: function (varBag, idService) {
return varBag.vars.value.correctedHintVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"960t1j9j6UyOHEC5Eala6g": {
getter: function (varBag, idService) {
return varBag.vars.value.scanInstructionsInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QRgW5bytm0Gn82fODrOc8g": {
getter: function (varBag, idService) {
return varBag.vars.value.cameraDirectionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"WVXtVGEJDEe_P3kdMiEC9A": {
getter: function (varBag, idService) {
return varBag.vars.value.scanOrientationInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"98URVGuOAE63Ugfibd41fQ": {
getter: function (varBag, idService) {
return varBag.vars.value.scanButtonInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"iq4c2mA4DEGqL0UmX2mIZQ": {
getter: function (varBag, idService) {
return varBag.vars.value.scanButtonTextInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jVAwsCNmOUeScguC+4rDUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.showCameraSelectionInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cD+tHPmhMUicrJ1QCt506Q": {
getter: function (varBag, idService) {
return varBag.vars.value.hintInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Igufe_a6hECgY8UeU2BVdg": {
getter: function (varBag, idService) {
return varBag.vars.value.scannerFPSInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"gbnPuRwX20GE0aJNx_NNng": {
getter: function (varBag, idService) {
return varBag.vars.value.androidScanningLibraryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LiTtKuEjW0SaQhZFUQ+bQQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.scanResultOut;
}
},
"4bn1cHLM0kO2h5x82tv8Kg": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"7Dd1YZN9DUiC0HBjhIqxYg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"4RgGwli7+UellBRPLj3lDg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"vZ8GL7fcd06TMZzYgN0P2w": {
getter: function (varBag, idService) {
return varBag.checkBarcodePluginVar.value;
}
},
"nouojh3b2UOaYmTdQKiz4w": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeScanResultVar.value;
}
},
"nitkGeFz3kOa7MOpd24T8A": {
getter: function (varBag, idService) {
return varBag.limitScanButtonTextJSResult.value;
}
},
"k5fKby3iI0KJRTRexcxt2w": {
getter: function (varBag, idService) {
return varBag.limitScanInstructionsJSResult.value;
}
},
"dc+jjlFGwE6iJ7yM9prffw": {
getter: function (varBag, idService) {
return varBag.correctHintJSResult.value;
}
},
"rmlnsldNv0KMxsjxUn0z4Q": {
getter: function (varBag, idService) {
return varBag.runWebScannerJSResult.value;
}
},
"GmUu6kHDok6Ns3QAP_F8yg": {
getter: function (varBag, idService) {
return varBag.runCodeScannerJSResult.value;
}
},
"txaF3YomHESErMjPDkkRIw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"34ovv7aZLU+4CXDpXTpHcg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isPWAOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"O6IeRs8WL0SDuIUS79j5GQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"HyVKgjJxLEqWSPc6Hx4dWQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"nU_NA6jDN06P3LCfB+nkQw": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"hRkwHdGMR0OiTXacrReXlw": {
getter: function (varBag, idService) {
return varBag.getWebAPIJSResult.value;
}
},
"ka07d5Z+wUO9P8q2r6Ad6A": {
getter: function (varBag, idService) {
return varBag.isPluginAvailableJSJSResult.value;
}
},
"3GSf3ravMkyakzckghc1EA": {
getter: function (varBag, idService) {
return varBag.addCSSJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
