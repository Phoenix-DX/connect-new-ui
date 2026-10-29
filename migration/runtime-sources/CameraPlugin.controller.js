define("CameraPlugin.controller$AddDependencies", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CameraPlugin.controller$AddDependencies.LoadCSSJS"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CameraPlugin_controller_AddDependencies_LoadCSSJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.addDependencies$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:1+O+FGQSgUO80D_wI154ug:/ClientActionFlows.1+O+FGQSgUO80D_wI154ug:MBnSnZ+YEEECtv1JFebtFg", "CameraPlugin", "AddDependencies", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:sBVu0ISwIUaCxk+ECTVBOQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:KcqFzopTz0aczCLDQBOzCQ", callContext.id);
controller.safeExecuteJSNode(CameraPlugin_controller_AddDependencies_LoadCSSJS, "LoadCSS", "AddDependencies", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:DhmxHSlRCke3896qY3oViA", callContext.id);
// Execute Action: RequireCamera
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.Camera.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2_ejqeSTCkmGRjZQFqE3yw", callContext.id);
// Execute Action: RequireErrors
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.Errors.js"), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:IJ24+dzrj0uv9mppfFU1og", callContext.id);
// Execute Action: RequireCameraStream
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.CameraStream.js"), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:a9PAEzmaO0iwYecw1dpEfA", callContext.id);
// Execute Action: RequireNativeCamera
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.NativeCamera.js"), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:ejJr9OZ+qUiFILj6ZnR+BA", callContext.id);
// Execute Action: RequireCropper
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.Cropper.js"), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:G8nL6IQjcEu66d6aUo60tQ", callContext.id);
// Execute Action: RequireImageEditor
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.ImageEditor.js"), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6ZPeB3DKdEK6dFOdubSSBQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:1+O+FGQSgUO80D_wI154ug", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:1+O+FGQSgUO80D_wI154ug", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.clientActionProxies.addDependencies$Action = function () {
return controller.executeActionInsideJSNode(CameraPluginController.default.addDependencies$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("CameraPlugin.controller$AddDependencies.LoadCSSJS", [], function () {
return function ($actions, $roles, $public) {
const allcss = [...document.styleSheets]
let hasCss = allcss.filter(item => item.title == "camera-plugin-css").length > 0;
if(!hasCss) {
    let sheet = document.createElement('style');
    sheet.title = 'camera-plugin-css';
    sheet.innerHTML = '.camera-wrapper{height:100%;overflow:hidden;width:100%}.camera-canvas{position:absolute;width:100%;z-index:1}.camera-video{height:auto;position:absolute;width:100%;z-index:4}@media (min-width:992px){.camera-video{height:100%}}.camera-button-wrapper{align-items:flex-end;display:flex;height:100%;justify-content:center;position:absolute;width:100%;z-index:8}.camera-button{align-items:center;backdrop-filter:blur(7px);background:#fff;border:none;border-radius:50%;color:#fff;display:flex;height:70px;margin-bottom:68px;padding:0 16px;width:70px;z-index:8}.camera-button-wrapper-landscape{justify-content:right}.camera-button-landscape{align-self:center;margin-bottom:0;margin-right:28px}.editor-container{background-color:#000;display:flex;flex-direction:column;height:100%}.editor{display:flex;flex-direction:row;margin:auto;max-height:80%;max-width:95%;padding-left:5%;padding-right:5%}.loader-container{align-items:center;background:#000;display:flex;height:100vh;justify-content:center;position:fixed;width:100%;z-index:1}.spinner{animation:spin-anim 1.2s linear infinite;border-color:#fff transparent;border-radius:50%;border-style:solid;border-width:8px;height:64px;width:64px}@keyframes spin-anim{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.image-wrapper{height:100%}.editing-image,.image-wrapper>img{max-height:100%;max-width:100%}.tool-container{align-items:flex-end;flex-direction:column-reverse;padding-bottom:5%;padding-left:5%;padding-right:5%}.row,.tool-container{display:flex;width:100%}.row{flex-direction:row}.tool-button{color:#fff;cursor:pointer;display:flex;flex-grow:6;font-size:16px;justify-content:center}.done-button{width:60px}.cancel-button,.done-button{background:none;border:none;border-radius:3px;color:#fff;cursor:pointer;font-weight:700;height:40px}.cancel-button{align-items:center;padding-left:10px;padding-right:10px}.done-wrapper{justify-content:right}.cancel-wrapper{justify-content:left}@media (min-width:992px){.tool-container{align-items:center;margin:1% auto auto;padding:auto;width:100%}.done-button{background:#fff;color:#000}.cancel-button{background:none;border:1px solid;color:#fff}.row{justify-content:center;margin-bottom:1%;width:20%}.cancel-wrapper{align-items:center}.cancel-wrapper,.done-wrapper{flex-grow:6;justify-content:center}.done-wrapper{padding:1%}}.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #fff;outline-color:rgba(1,1,1,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{left:0;top:0}.cropper-face,.cropper-line{background-color:#fff}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#fff;height:20px;opacity:1;width:20px}.cropper-point.point-e{cursor:ew-resize;margin-top:-5px;right:-5px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-5px;top:-5px}.cropper-point.point-w{cursor:ew-resize;left:-5px;margin-top:-5px;top:50%}.cropper-point.point-s{bottom:-5px;cursor:s-resize;left:50%;margin-left:-5px}.cropper-point.point-ne{cursor:nesw-resize;right:-5px;top:-5px}.cropper-point.point-nw{cursor:nwse-resize;left:-5px;top:-5px}.cropper-point.point-sw{bottom:-5px;cursor:nesw-resize;left:-5px}.cropper-point.point-se{bottom:-5px;cursor:nwse-resize;right:-5px}@media (max-width:992px){.cropper-point.point-se{clip-path:polygon(80% 80%,0 80%,0 100%,100% 100%,100% 0,80% 0)}.cropper-point.point-nw{clip-path:polygon(0 0,0 100%,20% 100%,20% 20%,100% 20%,100% 0)}.cropper-point.point-sw{clip-path:polygon(0 0,0 100%,100% 100%,100% 80%,20% 80%,20% 0)}.cropper-point.point-ne{clip-path:polygon(80% 20%,80% 100%,100% 100%,100% 0,0 0,0 20%)}.cropper-point.point-n,.cropper-point.point-s{height:4px}.cropper-point.point-e,.cropper-point.point-w{width:4px}}@media (min-width:1200px){.cropper-point.point-ne,.cropper-point.point-nw,.cropper-point.point-se,.cropper-point.point-sw{clip-path:none}}.cropper-point:before{background-color:#fff;bottom:-250%;content:" ";display:block;height:600%;opacity:0;position:absolute;right:-150%;width:400%}.cropper-invisible{opacity:0}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}';
    document.getElementsByTagName('head')[0].appendChild(sheet);
}
};
});

define("CameraPlugin.controller$CheckCameraPlugin", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CommonPlugin.controller", "CameraPlugin.controller$CheckCameraPlugin.CheckMediaAPIJS", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$Native_CheckCameraPlugin", "CameraPlugin.controller$AddDependencies", "CommonPlugin.controller$IsCordovaDefined"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel, CommonPluginController, CameraPlugin_controller_CheckCameraPlugin_CheckMediaAPIJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.checkCameraPlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var native_CheckCameraPluginVar = new OS.DataTypes.VariableHolder();
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var checkMediaAPIJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.CheckCameraPlugin$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.native_CheckCameraPluginVar = native_CheckCameraPluginVar;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.checkMediaAPIJSResult = checkMediaAPIJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:bEtBQpercE6r9vEtSN+kwA:/ClientActionFlows.bEtBQpercE6r9vEtSN+kwA:ZoL9YQfsa4XJ1LD1PbdCKQ", "CameraPlugin", "CheckCameraPlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:q2FN_6Wy8kGZcbLQs8wsgQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:oqib7YKFHE6KRDCWSX235Q", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

// Is Native Application?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:RCBCLw6ZDEygfQkokujMEA", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6AKGNCbyZk2FlFwly0LL4A", callContext.id);
// Execute Action: Native_CheckCameraPlugin
native_CheckCameraPluginVar.value = CameraPluginController.default.native_CheckCameraPlugin$Action(callContext);

// Set Result
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:qDpdlHUBQUae2GOofcxqgw", callContext.id);
// IsAvailable = Native_CheckCameraPlugin.IsAvailable
outVars.value.isAvailableOut = native_CheckCameraPluginVar.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:qDpdlHUBQUae2GOofcxqgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Native_CheckCameraPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = native_CheckCameraPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:qDpdlHUBQUae2GOofcxqgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Native_CheckCameraPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = native_CheckCameraPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:qDpdlHUBQUae2GOofcxqgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Warning.WarningCode = Native_CheckCameraPlugin.Warning.WarningCode
outVars.value.warningOut.warningCodeAttr = native_CheckCameraPluginVar.value.warningOut.warningCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:qDpdlHUBQUae2GOofcxqgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Warning.WarningMessage = Native_CheckCameraPlugin.Warning.WarningMessage
outVars.value.warningOut.warningMessageAttr = native_CheckCameraPluginVar.value.warningOut.warningMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:qDpdlHUBQUae2GOofcxqgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// IsPWA = False
outVars.value.isPWAOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:HqCdzxYjxkiwbFJyFSKslA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:CGwfYlT_0U2xnnHLl6VX8w", callContext.id);
checkMediaAPIJSResult.value = controller.safeExecuteJSNode(CameraPlugin_controller_CheckCameraPlugin_CheckMediaAPIJS, "CheckMediaAPI", "CheckCameraPlugin", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CameraPlugin.CheckCameraPlugin$checkMediaAPIJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Browser API Available
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:blEC2854d0q0FmyKa++QFA", callContext.id) && checkMediaAPIJSResult.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:g3QLmFq51Eu08ZoBDwE4Ng", callContext.id);
// Execute Action: AddDependencies
return CameraPluginController.default.addDependencies$Action(callContext).then(function () {
// Set Available
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:zugqyRiYDkmn8PexFoq0yw", callContext.id);
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:zugqyRiYDkmn8PexFoq0yw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:zugqyRiYDkmn8PexFoq0yw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsAvailable = True
outVars.value.isAvailableOut = true;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:zugqyRiYDkmn8PexFoq0yw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// IsPWA = True
outVars.value.isPWAOut = true;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:zugqyRiYDkmn8PexFoq0yw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Warning.WarningCode = 0
outVars.value.warningOut.warningCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:zugqyRiYDkmn8PexFoq0yw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// Warning.WarningMessage = ""
outVars.value.warningOut.warningMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:HqCdzxYjxkiwbFJyFSKslA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:kgm3YtNjxUW7sr2H_ynRxA", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:kgm3YtNjxUW7sr2H_ynRxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsPWA = False
outVars.value.isPWAOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:kgm3YtNjxUW7sr2H_ynRxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = "OS-PLUG-CAMR-0004"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-CAMR-0004";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:kgm3YtNjxUW7sr2H_ynRxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = "The browser doesn’t support the MediaDevices API. Check if the version is up to date and supports the required API"
outVars.value.errorOut.errorMessageAttr = "The browser doesn’t support the MediaDevices API. Check if the version is up to date and supports the required API";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:kgm3YtNjxUW7sr2H_ynRxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Warning.WarningCode = 0
outVars.value.warningOut.warningCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:kgm3YtNjxUW7sr2H_ynRxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// Warning.WarningMessage = ""
outVars.value.warningOut.warningMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:HqCdzxYjxkiwbFJyFSKslA", callContext.id);
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("CheckCameraPlugin.CheckCameraPlugin", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:QAq9BM5WW0K1UYRR0jRs7g", callContext.id);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:lalnAk1s20+V++NPDfcgPg", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:lalnAk1s20+V++NPDfcgPg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:lalnAk1s20+V++NPDfcgPg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:lalnAk1s20+V++NPDfcgPg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Warning.WarningCode = 0
outVars.value.warningOut.warningCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:lalnAk1s20+V++NPDfcgPg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Warning.WarningMessage = ""
outVars.value.warningOut.warningMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:a2s9RlzHVE2gQdl7NraUow", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:bEtBQpercE6r9vEtSN+kwA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:bEtBQpercE6r9vEtSN+kwA", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.CheckCameraPlugin$checkMediaAPIJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.CheckCameraPlugin$outVars", [{
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
CameraPluginController.default.clientActionProxies.checkCameraPlugin$Action = function () {
return controller.executeActionInsideJSNode(CameraPluginController.default.checkCameraPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
IsPWA: OS.DataConversion.JSNodeParamConverter.to(actionResults.isPWAOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("CameraPlugin.controller$CheckCameraPlugin.CheckMediaAPIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsAvailable = !!navigator.mediaDevices
};
});

define("CameraPlugin.controller$ChooseFromGallery", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$CheckCameraPlugin", "CameraPlugin.model$MediaResultList", "CameraPlugin.controller$Web_ChooseFromGallery", "CameraPlugin.controller$Native_ChooseFromGallery"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel) {
var OS = OutSystems.Internal;
CameraPluginController.default.chooseFromGallery$Action = function (mediaTypeIn, allowMultipleSelectionIn, includeMetadataIn, allowEditIn, limitIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.ChooseFromGallery$vars"))());
vars.value.mediaTypeInLocal = mediaTypeIn;
vars.value.allowMultipleSelectionInLocal = allowMultipleSelectionIn;
vars.value.includeMetadataInLocal = includeMetadataIn;
vars.value.allowEditInLocal = allowEditIn;
vars.value.limitInLocal = limitIn;
var checkCameraPluginVar = new OS.DataTypes.VariableHolder();
var web_ChooseFromGalleryVar = new OS.DataTypes.VariableHolder();
var native_ChooseFromGalleryVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.ChooseFromGallery$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkCameraPluginVar = checkCameraPluginVar;
varBag.web_ChooseFromGalleryVar = web_ChooseFromGalleryVar;
varBag.native_ChooseFromGalleryVar = native_ChooseFromGalleryVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:EhjTv7MTQkGQS8qAhd7lUw:/ClientActionFlows.EhjTv7MTQkGQS8qAhd7lUw:rus1IhJKBPQL4E4TSvGLPg", "CameraPlugin", "ChooseFromGallery", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:d6GEQsLIaUuULNg+UpytBA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6OpHKrsmFU+EPrjFJzk95Q", callContext.id);
// Execute Action: CheckCameraPlugin
return CameraPluginController.default.checkCameraPlugin$Action(callContext).then(function (value) {
checkCameraPluginVar.value = value;
}).then(function () {
// Is Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:WHyFJ5M1mUuZjITfOpDOqg", callContext.id) && checkCameraPluginVar.value.isAvailableOut)) {
// Is PWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:R7vwZUnnhE+9MD3YE34+Jg", callContext.id) && checkCameraPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:uQoJvxs1iUKLvWEX9O0FnQ", callContext.id);
// Execute Action: Web_ChooseFromGallery
return CameraPluginController.default.web_ChooseFromGallery$Action(vars.value.allowEditInLocal, callContext).then(function (value) {
web_ChooseFromGalleryVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:yfwW7gr94kODoX3j25pSdQ", callContext.id);
// Success = Web_ChooseFromGallery.Success
outVars.value.successOut = web_ChooseFromGalleryVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:yfwW7gr94kODoX3j25pSdQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error = Web_ChooseFromGallery.Error
outVars.value.errorOut = web_ChooseFromGalleryVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:yfwW7gr94kODoX3j25pSdQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// MediaResult = Web_ChooseFromGallery.MediaResultList
outVars.value.mediaResultOut = web_ChooseFromGalleryVar.value.mediaResultListOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:f7AhiEVUvUSR8XZFXfoteg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:9d6Tv2oddEGwmkLHRv57RQ", callContext.id);
// Execute Action: Native_ChooseFromGallery
return CameraPluginController.default.native_ChooseFromGallery$Action(vars.value.mediaTypeInLocal, vars.value.allowMultipleSelectionInLocal, vars.value.includeMetadataInLocal, vars.value.allowEditInLocal, vars.value.limitInLocal, callContext).then(function (value) {
native_ChooseFromGalleryVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:PxTJbjwSH0GQuirVpuPFgQ", callContext.id);
// MediaResult = Native_ChooseFromGallery.MediaResult
outVars.value.mediaResultOut = native_ChooseFromGalleryVar.value.mediaResultOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:PxTJbjwSH0GQuirVpuPFgQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = Native_ChooseFromGallery.Success
outVars.value.successOut = native_ChooseFromGalleryVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:PxTJbjwSH0GQuirVpuPFgQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = Native_ChooseFromGallery.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = native_ChooseFromGalleryVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:PxTJbjwSH0GQuirVpuPFgQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = Native_ChooseFromGallery.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = native_ChooseFromGalleryVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:4MuDDi0WnEGgU0phA3YP7w", callContext.id);
});
}

});
} else {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Luqxf8nyk0anIe_mBTxjKw", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Luqxf8nyk0anIe_mBTxjKw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = CheckCameraPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkCameraPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Luqxf8nyk0anIe_mBTxjKw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = CheckCameraPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkCameraPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:HSyI39rXc0G5tSWkj7gclw", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:EhjTv7MTQkGQS8qAhd7lUw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:EhjTv7MTQkGQS8qAhd7lUw", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.ChooseFromGallery$vars", [{
name: "MediaType",
attrName: "mediaTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "AllowMultipleSelection",
attrName: "allowMultipleSelectionInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IncludeMetadata",
attrName: "includeMetadataInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AllowEdit",
attrName: "allowEditInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Limit",
attrName: "limitInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.ChooseFromGallery$outVars", [{
name: "MediaResult",
attrName: "mediaResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new CameraPluginModel.MediaResultList();
},
complexType: CameraPluginModel.MediaResultList
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
CameraPluginController.default.clientActionProxies.chooseFromGallery$Action = function (mediaTypeIn, allowMultipleSelectionIn, includeMetadataIn, allowEditIn, limitIn) {
mediaTypeIn = (mediaTypeIn === undefined) ? 0 : mediaTypeIn;
allowMultipleSelectionIn = (allowMultipleSelectionIn === undefined) ? false : allowMultipleSelectionIn;
includeMetadataIn = (includeMetadataIn === undefined) ? false : includeMetadataIn;
allowEditIn = (allowEditIn === undefined) ? false : allowEditIn;
limitIn = (limitIn === undefined) ? 0 : limitIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.chooseFromGallery$Action.bind(controller, mediaTypeIn, OS.DataConversion.JSNodeParamConverter.from(allowMultipleSelectionIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(includeMetadataIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(allowEditIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(limitIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MediaResult: actionResults.mediaResultOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});

define("CameraPlugin.controller$EditPhoto", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CameraPlugin.controller$Native_EditPhoto", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$CheckCameraPlugin", "CameraPlugin.controller$Web_EditPhoto"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel) {
var OS = OutSystems.Internal;
CameraPluginController.default.editPhoto$Action = function (inputImageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.EditPhoto$vars"))());
vars.value.inputImageInLocal = inputImageIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var native_EditPhotoVar = new OS.DataTypes.VariableHolder();
var checkCameraPluginVar = new OS.DataTypes.VariableHolder();
var web_EditPhotoVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.EditPhoto$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.native_EditPhotoVar = native_EditPhotoVar;
varBag.checkCameraPluginVar = checkCameraPluginVar;
varBag.web_EditPhotoVar = web_EditPhotoVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:XZUuNSa+Z0eBURHOqPAHHg:/ClientActionFlows.XZUuNSa+Z0eBURHOqPAHHg:B_duVdtSIpTaShZT8jrIWw", "CameraPlugin", "EditPhoto", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:SUe9P6c2H0+0U9+4I67cUA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:njPeIvzin0ySqp_V44B9TA", callContext.id);
// Execute Action: CheckCameraPlugin
return CameraPluginController.default.checkCameraPlugin$Action(callContext).then(function (value) {
checkCameraPluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:fRouAwgrK02aFO2_C+i55g", callContext.id) && checkCameraPluginVar.value.isAvailableOut)) {
// Is PWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:AbZYxyR_SkqYoSX6reXLqg", callContext.id) && checkCameraPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:TzebYeXWj0uSAFhmg7AjZg", callContext.id);
// Execute Action: Web_EditPhoto
return CameraPluginController.default.web_EditPhoto$Action(vars.value.inputImageInLocal, callContext).then(function (value) {
web_EditPhotoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:sW1fPcFcb0aV+rnfxrq+mA", callContext.id);
// OutputImage = Web_EditPhoto.OutputImage
outVars.value.outputImageOut = web_EditPhotoVar.value.outputImageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:sW1fPcFcb0aV+rnfxrq+mA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = Web_EditPhoto.Success
outVars.value.successOut = web_EditPhotoVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:sW1fPcFcb0aV+rnfxrq+mA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Web_EditPhoto.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = web_EditPhotoVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:sW1fPcFcb0aV+rnfxrq+mA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorCode = Web_EditPhoto.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = web_EditPhotoVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:gp+UIx9Io0GNqnlyrJlhiA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Rs4bBn96QE2pqCaebrgQSQ", callContext.id);
// Execute Action: Native_EditPhoto
return CameraPluginController.default.native_EditPhoto$Action(vars.value.inputImageInLocal, callContext).then(function (value) {
native_EditPhotoVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Z+L2iYRZKECQ9DPF8PI5tQ", callContext.id);
// OutputImage = Native_EditPhoto.OutputImage
outVars.value.outputImageOut = native_EditPhotoVar.value.outputImageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Z+L2iYRZKECQ9DPF8PI5tQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = Native_EditPhoto.Success
outVars.value.successOut = native_EditPhotoVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Z+L2iYRZKECQ9DPF8PI5tQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = Native_EditPhoto.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = native_EditPhotoVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Z+L2iYRZKECQ9DPF8PI5tQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = Native_EditPhoto.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = native_EditPhotoVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JbIrxFWW10CD3n8eNqIJYg", callContext.id);
});
}

});
} else {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:UNlIjZ9+sEWHWIqTMlateg", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:UNlIjZ9+sEWHWIqTMlateg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = CheckCameraPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkCameraPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:UNlIjZ9+sEWHWIqTMlateg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = CheckCameraPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkCameraPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:co1tuRnd2k6uilsVJZxeXA", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("EditPhoto.EditPhoto", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:bQXaWXzpAkKtny1PyhviUQ", callContext.id);
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:UzBRBEJQgUej9gd931EC5w", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:UzBRBEJQgUej9gd931EC5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:UzBRBEJQgUej9gd931EC5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:AIDxs4QWDkqz_OFow9cfHA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:XZUuNSa+Z0eBURHOqPAHHg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:XZUuNSa+Z0eBURHOqPAHHg", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.EditPhoto$vars", [{
name: "InputImage",
attrName: "inputImageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.EditPhoto$outVars", [{
name: "OutputImage",
attrName: "outputImageOut",
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
}]);
CameraPluginController.default.clientActionProxies.editPhoto$Action = function (inputImageIn) {
inputImageIn = (inputImageIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : inputImageIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.editPhoto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(inputImageIn, OS.DataTypes.DataTypes.BinaryData)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
OutputImage: OS.DataConversion.JSNodeParamConverter.to(actionResults.outputImageOut, OS.DataTypes.DataTypes.BinaryData),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});

define("CameraPlugin.controller$EditURIPhoto", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CameraPlugin.model$MediaResultRec", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CameraPlugin.controller$Native_EditURIPhoto", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$CheckCameraPlugin"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel) {
var OS = OutSystems.Internal;
CameraPluginController.default.editURIPhoto$Action = function (uRIIn, saveToGalleryIn, includeMetadataIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.EditURIPhoto$vars"))());
vars.value.uRIInLocal = uRIIn;
vars.value.saveToGalleryInLocal = saveToGalleryIn;
vars.value.includeMetadataInLocal = includeMetadataIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var native_EditURIPhotoVar = new OS.DataTypes.VariableHolder();
var checkCameraPluginVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.EditURIPhoto$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.native_EditURIPhotoVar = native_EditURIPhotoVar;
varBag.checkCameraPluginVar = checkCameraPluginVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:2kDGtftCnEqK0yZvKa8paA:/ClientActionFlows.2kDGtftCnEqK0yZvKa8paA:qPpCRCv0gTvJqCPRVVFj9g", "CameraPlugin", "EditURIPhoto", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:yRgLSyUSF0CMaVgCVIRPKg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:dkAQ2V7iV0e0vWyfP3Fmsw", callContext.id);
// Execute Action: CheckCameraPlugin
return CameraPluginController.default.checkCameraPlugin$Action(callContext).then(function (value) {
checkCameraPluginVar.value = value;
}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:_X5XO6jK5EitACGN3_ydew", callContext.id) && checkCameraPluginVar.value.isAvailableOut)) {
// Is PWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:CvR2J2enO0aJ0vITJX+2dw", callContext.id) && checkCameraPluginVar.value.isPWAOut)) {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6fyy35eyzU+5Zbc5tOu9lg", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6fyy35eyzU+5Zbc5tOu9lg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "EditURIPhoto is only available for Android and iOS."
outVars.value.errorOut.errorMessageAttr = "EditURIPhoto is only available for Android and iOS.";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6fyy35eyzU+5Zbc5tOu9lg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = "OS-PLUG-CAMR-0029"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-CAMR-0029";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JU29YnYXdUSQzFjJ2h7hCw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:DdrVXBfyEkCNFwUIwBckBA", callContext.id);
// Execute Action: Native_EditURIPhoto
return CameraPluginController.default.native_EditURIPhoto$Action(vars.value.uRIInLocal, vars.value.saveToGalleryInLocal, vars.value.includeMetadataInLocal, callContext).then(function (value) {
native_EditURIPhotoVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:xNJ0kBSGO0m3rzRRWSDwtA", callContext.id);
// MediaResult = Native_EditURIPhoto.MediaResult
outVars.value.mediaResultOut = native_EditURIPhotoVar.value.mediaResultOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:xNJ0kBSGO0m3rzRRWSDwtA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = Native_EditURIPhoto.Success
outVars.value.successOut = native_EditURIPhotoVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:xNJ0kBSGO0m3rzRRWSDwtA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = Native_EditURIPhoto.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = native_EditURIPhotoVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:xNJ0kBSGO0m3rzRRWSDwtA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = Native_EditURIPhoto.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = native_EditURIPhotoVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:fEVxTY+0L0aaSG+cSU4IQQ", callContext.id);
});
}

});
} else {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:jrBy9ZgtSkuu3rsYLCXzjA", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:jrBy9ZgtSkuu3rsYLCXzjA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = CheckCameraPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkCameraPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:jrBy9ZgtSkuu3rsYLCXzjA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = CheckCameraPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkCameraPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:NV3s3wR4IE6EfFfnwDzqug", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("EditURIPhoto.EditURIPhoto", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:YXAlGESvZUGEtCx_MieN1g", callContext.id);
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:OfER+qcCWkiRhVXpe5lK5Q", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:OfER+qcCWkiRhVXpe5lK5Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:OfER+qcCWkiRhVXpe5lK5Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:1d8s1DxTd0irCr8mih1NGw", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:2kDGtftCnEqK0yZvKa8paA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:2kDGtftCnEqK0yZvKa8paA", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.EditURIPhoto$vars", [{
name: "URI",
attrName: "uRIInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SaveToGallery",
attrName: "saveToGalleryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IncludeMetadata",
attrName: "includeMetadataInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.EditURIPhoto$outVars", [{
name: "MediaResult",
attrName: "mediaResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CameraPluginModel.MediaResultRec();
},
complexType: CameraPluginModel.MediaResultRec
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
CameraPluginController.default.clientActionProxies.editURIPhoto$Action = function (uRIIn, saveToGalleryIn, includeMetadataIn) {
uRIIn = (uRIIn === undefined) ? "" : uRIIn;
saveToGalleryIn = (saveToGalleryIn === undefined) ? false : saveToGalleryIn;
includeMetadataIn = (includeMetadataIn === undefined) ? false : includeMetadataIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.editURIPhoto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRIIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(saveToGalleryIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(includeMetadataIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MediaResult: actionResults.mediaResultOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});

define("CameraPlugin.controller$Native_CheckCameraPlugin", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "CameraPlugin.controller$Native_CheckCameraPlugin.IsPluginAvailableJSJS", "CommonPlugin.controller$IsCordovaDefined", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec", "CommonPlugin.model$WarningRec"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginController, CommonPluginModel, CameraPlugin_controller_Native_CheckCameraPlugin_IsPluginAvailableJSJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.native_CheckCameraPlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var isPluginAvailableJSJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_CheckCameraPlugin$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.isPluginAvailableJSJSResult = isPluginAvailableJSJSResult;
varBag.outVars = outVars;
try {try {OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:CzLoYzd6HkiGPGNI2nPJUQ:/ClientActionFlows.CzLoYzd6HkiGPGNI2nPJUQ:JjnM7dva9K21xg+zPnYjqA", "CameraPlugin", "Native_CheckCameraPlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JQExAVjb+0il3zS_cNnkIQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:gVdpLnSCKUKxB3WXsk_6WQ", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:ZFDdvBkPLU60yj0upJyIkQ", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:CA63_dtqbU6_VcKNMdAuCQ", callContext.id);
// Validates if the camera plugin is currently available. Useful to verify if the current application has the plugin installed.
isPluginAvailableJSJSResult.value = controller.safeExecuteJSNode(CameraPlugin_controller_Native_CheckCameraPlugin_IsPluginAvailableJSJS, "IsPluginAvailableJS", "Native_CheckCameraPlugin", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
WarningCode: OS.DataConversion.JSNodeParamConverter.to("0", OS.DataTypes.DataTypes.Text),
WarningMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CameraPlugin.Native_CheckCameraPlugin$isPluginAvailableJSJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.warningCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WarningCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.warningMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WarningMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:gPujooOLJkiHl4+dutmEbA", callContext.id) && isPluginAvailableJSJSResult.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:D07XZedhxECWh+FnZzbKkQ", callContext.id);
// IsAvailable = IsPluginAvailableJS.IsAvailable
outVars.value.isAvailableOut = isPluginAvailableJSJSResult.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:D07XZedhxECWh+FnZzbKkQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:D07XZedhxECWh+FnZzbKkQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:D07XZedhxECWh+FnZzbKkQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Warning.WarningCode = IsPluginAvailableJS.WarningCode
outVars.value.warningOut.warningCodeAttr = isPluginAvailableJSJSResult.value.warningCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:D07XZedhxECWh+FnZzbKkQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Warning.WarningMessage = IsPluginAvailableJS.WarningMessage
outVars.value.warningOut.warningMessageAttr = isPluginAvailableJSJSResult.value.warningMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:dyvfx9Nx9kWF8ZSxwpfGXQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:gYR51zzWgEiQrXOhkXrfAw", callContext.id);
// Error.ErrorCode = "OS-PLUG-CAMR-0018"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-CAMR-0018";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:gYR51zzWgEiQrXOhkXrfAw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "The plugin is not available"
outVars.value.errorOut.errorMessageAttr = "The plugin is not available";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:gYR51zzWgEiQrXOhkXrfAw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:gYR51zzWgEiQrXOhkXrfAw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Warning.WarningCode = 0
outVars.value.warningOut.warningCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:gYR51zzWgEiQrXOhkXrfAw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Warning.WarningMessage = ""
outVars.value.warningOut.warningMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:9g+h02ZMakeqMHlXrbhIwA", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z8vqW7+pR0q3+U2w5YZuzg", callContext.id);
// Error.ErrorCode = "OS-PLUG-CAMR-0022"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-CAMR-0022";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z8vqW7+pR0q3+U2w5YZuzg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "Cordova is not available"
outVars.value.errorOut.errorMessageAttr = "Cordova is not available";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z8vqW7+pR0q3+U2w5YZuzg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z8vqW7+pR0q3+U2w5YZuzg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Warning.WarningCode = 0
outVars.value.warningOut.warningCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z8vqW7+pR0q3+U2w5YZuzg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Warning.WarningMessage = ""
outVars.value.warningOut.warningMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Z4sGeaeS9EuqQ1AgLnLFAg", callContext.id);
}

} catch (ex) {
(function () {
OS.Logger.trace("Native_CheckCameraPlugin.Native_CheckCameraPlugin", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:8usVJB6uTkWWRMGT3s2FbQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:izy9ZUOQ4U64DSwT0rfqnA", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:izy9ZUOQ4U64DSwT0rfqnA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:izy9ZUOQ4U64DSwT0rfqnA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:AbrVOeHFVkWOj5HOHA6Mpg", callContext.id);
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
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:CzLoYzd6HkiGPGNI2nPJUQ", callContext.id);
}

};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_CheckCameraPlugin$isPluginAvailableJSJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "WarningCode",
attrName: "warningCodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return (0).toString();
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
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_CheckCameraPlugin$outVars", [{
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
CameraPluginController.default.clientActionProxies.native_CheckCameraPlugin$Action = function () {
return controller.executeActionInsideJSNode(CameraPluginController.default.native_CheckCameraPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
Warning: actionResults.warningOut
};
});
};
});
define("CameraPlugin.controller$Native_CheckCameraPlugin.IsPluginAvailableJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(typeof(cordova.plugins) !== "undefined" && (typeof(cordova.plugins.Camera) !== "undefined")) {
    $parameters.IsAvailable = true;
    return;
}
if(typeof(cordova) !== "undefined" && typeof(navigator.camera)!== "undefined"){
    $parameters.IsAvailable = true;
    $parameters.WarningCode = "OS-PLUG-CAMR-0032";
    $parameters.WarningMessage = "The app is running with an old version of the plugin. Please create a new mobile package.";
    return;
} 

$parameters.IsAvailable = false;
};
});

define("CameraPlugin.controller$Native_ChooseFromGallery", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CameraPlugin.controller$Native_ChooseFromGallery.ChooseFromGalleryJSJS", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$Native_CheckCameraPlugin", "CameraPlugin.model$MediaResultList"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel, CameraPlugin_controller_Native_ChooseFromGallery_ChooseFromGalleryJSJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.native_ChooseFromGallery$Action = function (mediaTypeIn, allowMultipleSelectionIn, includeMetadataIn, allowEditIn, limitIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_ChooseFromGallery$vars"))());
vars.value.mediaTypeInLocal = mediaTypeIn;
vars.value.allowMultipleSelectionInLocal = allowMultipleSelectionIn;
vars.value.includeMetadataInLocal = includeMetadataIn;
vars.value.allowEditInLocal = allowEditIn;
vars.value.limitInLocal = limitIn;
var native_CheckCameraPluginVar = new OS.DataTypes.VariableHolder();
var chooseFromGalleryJSJSResult = new OS.DataTypes.VariableHolder();
var getResultListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(CameraPluginModel.MediaResultList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_ChooseFromGallery$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.native_CheckCameraPluginVar = native_CheckCameraPluginVar;
varBag.chooseFromGalleryJSJSResult = chooseFromGalleryJSJSResult;
varBag.getResultListVar = getResultListVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:C9RzDg93SUa6ExG+5AujKw:/ClientActionFlows.C9RzDg93SUa6ExG+5AujKw:fXdtDM_pcsLmSz30br+LJA", "CameraPlugin", "Native_ChooseFromGallery", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:90UGi4LPFEWkV7zSrLB4Zg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:qmhi_BI8LUKvV0mdMVsf5g", callContext.id);
// Execute Action: Native_CheckCameraPlugin
native_CheckCameraPluginVar.value = CameraPluginController.default.native_CheckCameraPlugin$Action(callContext);

// Is Camera available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:4y7QFaZ+FU2XTwyGYCo8qQ", callContext.id) && native_CheckCameraPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:5FYs7Jw3Ik2c+AIR_Pm0Zw", callContext.id);
// Execute Action: RequireScript
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.wrapper.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:WLZUE8GlNU+s+sHh4ZZDmg", callContext.id);
// Use this action to choose a photo/video from the gallery.
return controller.safeExecuteAsyncJSNode(CameraPlugin_controller_Native_ChooseFromGallery_ChooseFromGalleryJSJS, "ChooseFromGalleryJS", "Native_ChooseFromGallery", {
AllowMultipleSelection: OS.DataConversion.JSNodeParamConverter.to(vars.value.allowMultipleSelectionInLocal, OS.DataTypes.DataTypes.Boolean),
IncludeMetadata: OS.DataConversion.JSNodeParamConverter.to(vars.value.includeMetadataInLocal, OS.DataTypes.DataTypes.Boolean),
AllowEdit: OS.DataConversion.JSNodeParamConverter.to(vars.value.allowEditInLocal, OS.DataTypes.DataTypes.Boolean),
Limit: OS.DataConversion.JSNodeParamConverter.to(vars.value.limitInLocal, OS.DataTypes.DataTypes.Integer),
MediaType: OS.DataConversion.JSNodeParamConverter.to(vars.value.mediaTypeInLocal, OS.DataTypes.DataTypes.Integer),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
MediaResultListJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CameraPlugin.Native_ChooseFromGallery$chooseFromGalleryJSJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.mediaResultListJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MediaResultListJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
chooseFromGalleryJSJSResult.value = results;
});
}).then(function () {
// Success?
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:IHWgWvTl80WlpOr3IMYE9w", callContext.id) && chooseFromGalleryJSJSResult.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:bQ0CB9ICi0SLDSA_VDUWEA", callContext.id);
// JSON Deserialize: GetResultList
getResultListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(chooseFromGalleryJSJSResult.value.mediaResultListJSONOut, CameraPluginModel.MediaResultList, false);
// AssignOutput
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:K1Mnn+2dukyCJPTbX_QZ+A", callContext.id);
// Success = ChooseFromGalleryJS.Success
outVars.value.successOut = chooseFromGalleryJSJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:K1Mnn+2dukyCJPTbX_QZ+A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:K1Mnn+2dukyCJPTbX_QZ+A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:K1Mnn+2dukyCJPTbX_QZ+A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// MediaResult = GetResultList.Data
outVars.value.mediaResultOut = getResultListVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:oRCz9hN2PEy8hNFmmUVLXA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:zM7DFt1V5kK4CSsiLk6+cQ", callContext.id);
// Success = ChooseFromGalleryJS.Success
outVars.value.successOut = chooseFromGalleryJSJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:zM7DFt1V5kK4CSsiLk6+cQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = ChooseFromGalleryJS.ErrorMessage
outVars.value.errorOut.errorMessageAttr = chooseFromGalleryJSJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:zM7DFt1V5kK4CSsiLk6+cQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = ChooseFromGalleryJS.ErrorCode
outVars.value.errorOut.errorCodeAttr = chooseFromGalleryJSJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:4xG3K9w9JkuHksx6qTRQKA", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:mLmHPCOWa0uMhLmmhJeB6A", callContext.id);
// Error.ErrorCode = Native_CheckCameraPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = native_CheckCameraPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:mLmHPCOWa0uMhLmmhJeB6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = Native_CheckCameraPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = native_CheckCameraPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:ukuNvBPVSUGLvXc3_R2q1Q", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:C9RzDg93SUa6ExG+5AujKw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:C9RzDg93SUa6ExG+5AujKw", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_ChooseFromGallery$vars", [{
name: "MediaType",
attrName: "mediaTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "AllowMultipleSelection",
attrName: "allowMultipleSelectionInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IncludeMetadata",
attrName: "includeMetadataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AllowEdit",
attrName: "allowEditInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Limit",
attrName: "limitInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_ChooseFromGallery$chooseFromGalleryJSJSResult", [{
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MediaResultListJSON",
attrName: "mediaResultListJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_ChooseFromGallery$outVars", [{
name: "MediaResult",
attrName: "mediaResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new CameraPluginModel.MediaResultList();
},
complexType: CameraPluginModel.MediaResultList
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
CameraPluginController.default.clientActionProxies.native_ChooseFromGallery$Action = function (mediaTypeIn, allowMultipleSelectionIn, includeMetadataIn, allowEditIn, limitIn) {
mediaTypeIn = (mediaTypeIn === undefined) ? 0 : mediaTypeIn;
allowMultipleSelectionIn = (allowMultipleSelectionIn === undefined) ? false : allowMultipleSelectionIn;
includeMetadataIn = (includeMetadataIn === undefined) ? false : includeMetadataIn;
allowEditIn = (allowEditIn === undefined) ? false : allowEditIn;
limitIn = (limitIn === undefined) ? 0 : limitIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.native_ChooseFromGallery$Action.bind(controller, mediaTypeIn, OS.DataConversion.JSNodeParamConverter.from(allowMultipleSelectionIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(includeMetadataIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(allowEditIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(limitIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MediaResult: actionResults.mediaResultOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("CameraPlugin.controller$Native_ChooseFromGallery.ChooseFromGalleryJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function onSuccess(result){
    $parameters.Success = true;
    $parameters.MediaResultListJSON = result;
    $resolve();
}

function onError(error) {
    $parameters.Success = false;
    $parameters.ErrorCode =  error.code;
    $parameters.ErrorMessage = error.message;
    $resolve();
}

OSCameraPluginWrapper.Instance.chooseFromGallery(onSuccess, onError, 
{
    mediaType: $parameters.MediaType, 
    allowMultipleSelection: $parameters.AllowMultipleSelection,
    includeMetadata: $parameters.IncludeMetadata,
    allowEdit: $parameters.AllowEdit,
    limit: $parameters.Limit
});
});
};
});

define("CameraPlugin.controller$Native_EditPhoto", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CameraPlugin.controller$Native_EditPhoto.EditPhotoJS", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$Native_CheckCameraPlugin"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel, CameraPlugin_controller_Native_EditPhoto_EditPhotoJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.native_EditPhoto$Action = function (inputImageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_EditPhoto$vars"))());
vars.value.inputImageInLocal = inputImageIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var native_CheckCameraPluginVar = new OS.DataTypes.VariableHolder();
var editPhotoJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_EditPhoto$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.native_CheckCameraPluginVar = native_CheckCameraPluginVar;
varBag.editPhotoJSResult = editPhotoJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:cLmjJqD8v0288vSfevmaAQ:/ClientActionFlows.cLmjJqD8v0288vSfevmaAQ:OXVoxFGWER6VZrP+gUy7Rw", "CameraPlugin", "Native_EditPhoto", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:KbMQ+ld2PE+rm66qeiRBYg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:ZocB2Ng3UkOmMT7n8tZHnA", callContext.id);
// Execute Action: Native_CheckCameraPlugin
native_CheckCameraPluginVar.value = CameraPluginController.default.native_CheckCameraPlugin$Action(callContext);

// Is Camera available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Pg3SMIivfUuZtDGiDNA+Dg", callContext.id) && native_CheckCameraPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:WRxyiQfQ8E+NbEA5eSTHbw", callContext.id);
// Execute Action: RequireScript
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.wrapper.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Az51xdqX60aDE4sojzAOjA", callContext.id);
// Use this action to trigger the edit feature.
return controller.safeExecuteAsyncJSNode(CameraPlugin_controller_Native_EditPhoto_EditPhotoJS, "EditPhoto", "Native_EditPhoto", {
InputImage: OS.DataConversion.JSNodeParamConverter.to(vars.value.inputImageInLocal, OS.DataTypes.DataTypes.BinaryData),
OutputImage: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.BinaryData.defaultValue, OS.DataTypes.DataTypes.BinaryData),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CameraPlugin.Native_EditPhoto$editPhotoJSResult"))();
jsNodeResult.outputImageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OutputImage, OS.DataTypes.DataTypes.BinaryData);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
editPhotoJSResult.value = results;
});
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:aU9jdNHkCkmV1WDZKmtpTg", callContext.id) && editPhotoJSResult.value.successOut)) {
// AssignOutput
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:GQPTkK8dB027Fnw6YTgSDA", callContext.id);
// OutputImage = EditPhoto.OutputImage
outVars.value.outputImageOut = editPhotoJSResult.value.outputImageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:GQPTkK8dB027Fnw6YTgSDA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = EditPhoto.Success
outVars.value.successOut = editPhotoJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:GQPTkK8dB027Fnw6YTgSDA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:GQPTkK8dB027Fnw6YTgSDA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:NNjJWbcIXU2RFQ4nuzyqGQ", callContext.id);
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:SIb+mr8sOEq1uyhcKsdXyA", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:SIb+mr8sOEq1uyhcKsdXyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = EditPhoto.ErrorCode
outVars.value.errorOut.errorCodeAttr = editPhotoJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:SIb+mr8sOEq1uyhcKsdXyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = EditPhoto.ErrorMessage
outVars.value.errorOut.errorMessageAttr = editPhotoJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2A4boB212USmaSMqhJ33qw", callContext.id);
}

});
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:bHoNj6mCwESmuq+HbZDYMw", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:bHoNj6mCwESmuq+HbZDYMw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Native_CheckCameraPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = native_CheckCameraPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:bHoNj6mCwESmuq+HbZDYMw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Native_CheckCameraPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = native_CheckCameraPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:nMXfGHx_nESTh+22vWK+YQ", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("Native_EditPhoto.Native_EditPhoto", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:SVbUh4px30a1DYq5x4r7tQ", callContext.id);
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:IZuvpkcdikWo3p7rD2Hkvw", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:IZuvpkcdikWo3p7rD2Hkvw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:IZuvpkcdikWo3p7rD2Hkvw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z5Dvm8IBWkqTx8aaKXd2yg", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:cLmjJqD8v0288vSfevmaAQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:cLmjJqD8v0288vSfevmaAQ", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_EditPhoto$vars", [{
name: "InputImage",
attrName: "inputImageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_EditPhoto$editPhotoJSResult", [{
name: "OutputImage",
attrName: "outputImageOut",
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
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
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
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_EditPhoto$outVars", [{
name: "OutputImage",
attrName: "outputImageOut",
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
}]);
CameraPluginController.default.clientActionProxies.native_EditPhoto$Action = function (inputImageIn) {
inputImageIn = (inputImageIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : inputImageIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.native_EditPhoto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(inputImageIn, OS.DataTypes.DataTypes.BinaryData)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
OutputImage: OS.DataConversion.JSNodeParamConverter.to(actionResults.outputImageOut, OS.DataTypes.DataTypes.BinaryData),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("CameraPlugin.controller$Native_EditPhoto.EditPhotoJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
OSCameraPluginWrapper.Instance.editPhoto(function(imageData) {
    $parameters.Success = true;
    $parameters.OutputImage = imageData;
    $resolve();
}, function (error) {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code;
    $parameters.ErrorMessage = error.message;
    $parameters.OutputImage = "";
    $resolve();
}, {
    image: $parameters.InputImage
    
});
});
};
});

define("CameraPlugin.controller$Native_EditURIPhoto", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CameraPlugin.controller$Native_EditURIPhoto.EditURIPhotoJSJS", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$Native_CheckCameraPlugin", "CameraPlugin.model$MediaResultRec"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel, CameraPlugin_controller_Native_EditURIPhoto_EditURIPhotoJSJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.native_EditURIPhoto$Action = function (uRIIn, saveToGalleryIn, includeMetadataIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_EditURIPhoto$vars"))());
vars.value.uRIInLocal = uRIIn;
vars.value.saveToGalleryInLocal = saveToGalleryIn;
vars.value.includeMetadataInLocal = includeMetadataIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var native_CheckCameraPluginVar = new OS.DataTypes.VariableHolder();
var editURIPhotoJSJSResult = new OS.DataTypes.VariableHolder();
var deserialiseMediaResultVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(CameraPluginModel.MediaResultRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_EditURIPhoto$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.native_CheckCameraPluginVar = native_CheckCameraPluginVar;
varBag.editURIPhotoJSJSResult = editURIPhotoJSJSResult;
varBag.deserialiseMediaResultVar = deserialiseMediaResultVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:Q+YLOUuXaEuSe+pdtTw7Lw:/ClientActionFlows.Q+YLOUuXaEuSe+pdtTw7Lw:BzV1W3VbM88UYajl44_sSA", "CameraPlugin", "Native_EditURIPhoto", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:9pF5pgXAk0y_RmomRTnIhA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:j6irQ6rpCUu+Gxv5Jgv_Vw", callContext.id);
// Execute Action: Native_CheckCameraPlugin
native_CheckCameraPluginVar.value = CameraPluginController.default.native_CheckCameraPlugin$Action(callContext);

// Is Camera available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:qH1yNQ0xu0quBh5P2od+dw", callContext.id) && native_CheckCameraPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Tive40Tqs0OXvMXowclwlQ", callContext.id);
// Execute Action: RequireScript
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.wrapper.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:1QDDwQCfakWpxbLN8MQ5aQ", callContext.id);
// Use this action to trigger the edit feature.
return controller.safeExecuteAsyncJSNode(CameraPlugin_controller_Native_EditURIPhoto_EditURIPhotoJSJS, "EditURIPhotoJS", "Native_EditURIPhoto", {
SaveToGallery: OS.DataConversion.JSNodeParamConverter.to(vars.value.saveToGalleryInLocal, OS.DataTypes.DataTypes.Boolean),
IncludeMetadata: OS.DataConversion.JSNodeParamConverter.to(vars.value.includeMetadataInLocal, OS.DataTypes.DataTypes.Boolean),
URI: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRIInLocal, OS.DataTypes.DataTypes.Text),
MediaResult: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CameraPlugin.Native_EditURIPhoto$editURIPhotoJSJSResult"))();
jsNodeResult.mediaResultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MediaResult, OS.DataTypes.DataTypes.Text);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
editURIPhotoJSJSResult.value = results;
});
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:aG3WNEFrvkmXWsPLZdrldg", callContext.id) && editURIPhotoJSJSResult.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:gXISDJzvI0qkjJvt_UpAQw", callContext.id);
// JSON Deserialize: DeserialiseMediaResult
deserialiseMediaResultVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(editURIPhotoJSJSResult.value.mediaResultOut, CameraPluginModel.MediaResultRec, false);
// AssignOutput
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:AGAMngD8mE6xCmL8Md9uNA", callContext.id);
// MediaResult = DeserialiseMediaResult.Data
outVars.value.mediaResultOut = deserialiseMediaResultVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:AGAMngD8mE6xCmL8Md9uNA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = EditURIPhotoJS.Success
outVars.value.successOut = editURIPhotoJSJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:AGAMngD8mE6xCmL8Md9uNA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:AGAMngD8mE6xCmL8Md9uNA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:if+eYQH6ZUimzChVqCEBlw", callContext.id);
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:UOyjo6Q4y0WYRZOkm15ojg", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:UOyjo6Q4y0WYRZOkm15ojg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = EditURIPhotoJS.ErrorCode
outVars.value.errorOut.errorCodeAttr = editURIPhotoJSJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:UOyjo6Q4y0WYRZOkm15ojg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = EditURIPhotoJS.ErrorMessage
outVars.value.errorOut.errorMessageAttr = editURIPhotoJSJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:iz797eRd4EaTMfnCxYQSUw", callContext.id);
}

});
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:7Mg+xaMIZkO9CRWZ5rZZgg", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:7Mg+xaMIZkO9CRWZ5rZZgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Native_CheckCameraPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = native_CheckCameraPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:7Mg+xaMIZkO9CRWZ5rZZgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Native_CheckCameraPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = native_CheckCameraPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6UXrhmvhnUWYsu4TQ_98SQ", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("Native_EditURIPhoto.Native_EditURIPhoto", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:ir8O2WJhTU2gwNKrtVhs1A", callContext.id);
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:ksZJqQ2R7UGlBEHBzV5VEQ", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:ksZJqQ2R7UGlBEHBzV5VEQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:ksZJqQ2R7UGlBEHBzV5VEQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:cdg4isyaREOo4atpLXpxPw", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:Q+YLOUuXaEuSe+pdtTw7Lw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:Q+YLOUuXaEuSe+pdtTw7Lw", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_EditURIPhoto$vars", [{
name: "URI",
attrName: "uRIInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SaveToGallery",
attrName: "saveToGalleryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IncludeMetadata",
attrName: "includeMetadataInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_EditURIPhoto$editURIPhotoJSJSResult", [{
name: "MediaResult",
attrName: "mediaResultOut",
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
name: "ErrorMessage",
attrName: "errorMessageOut",
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
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_EditURIPhoto$outVars", [{
name: "MediaResult",
attrName: "mediaResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CameraPluginModel.MediaResultRec();
},
complexType: CameraPluginModel.MediaResultRec
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
CameraPluginController.default.clientActionProxies.native_EditURIPhoto$Action = function (uRIIn, saveToGalleryIn, includeMetadataIn) {
uRIIn = (uRIIn === undefined) ? "" : uRIIn;
saveToGalleryIn = (saveToGalleryIn === undefined) ? false : saveToGalleryIn;
includeMetadataIn = (includeMetadataIn === undefined) ? false : includeMetadataIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.native_EditURIPhoto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRIIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(saveToGalleryIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(includeMetadataIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MediaResult: actionResults.mediaResultOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("CameraPlugin.controller$Native_EditURIPhoto.EditURIPhotoJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
OSCameraPluginWrapper.Instance.editURIPhoto(function(result) {
    $parameters.Success = true;
    $parameters.MediaResult = result;
    $resolve();
}, function (error) {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code;
    $parameters.ErrorMessage = error.message;
    $resolve();
}, {
    uri: $parameters.URI,
    saveToGallery: $parameters.SaveToGallery,
    includeMetadata: $parameters.IncludeMetadata
});
});
};
});

define("CameraPlugin.controller$Native_PlayVideo", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CameraPlugin.controller$Native_PlayVideo.PlayVideoJSJS", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$Native_CheckCameraPlugin"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel, CameraPlugin_controller_Native_PlayVideo_PlayVideoJSJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.native_PlayVideo$Action = function (uRIIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_PlayVideo$vars"))());
vars.value.uRIInLocal = uRIIn;
var native_CheckCameraPluginVar = new OS.DataTypes.VariableHolder();
var playVideoJSJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_PlayVideo$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.native_CheckCameraPluginVar = native_CheckCameraPluginVar;
varBag.playVideoJSJSResult = playVideoJSJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:necFhsx6J0GvXbz3IEC27g:/ClientActionFlows.necFhsx6J0GvXbz3IEC27g:1gtfJaOms3UI7pI_6Jc0EA", "CameraPlugin", "Native_PlayVideo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:1NlBcT5Yt0e7gkmt5RVknw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:1FfTl2X+CEyoh4BeZchO+A", callContext.id);
// Execute Action: Native_CheckCameraPlugin
native_CheckCameraPluginVar.value = CameraPluginController.default.native_CheckCameraPlugin$Action(callContext);

// Is Camera Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:ZnY0c_ICAkyvFlvJUlsLgA", callContext.id) && native_CheckCameraPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:1oem_pn7EEeJJbKi8M934Q", callContext.id);
// Execute Action: RequireScript
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.wrapper.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:pOHOr8KJ5kWe9erjj8iK3w", callContext.id);
return controller.safeExecuteAsyncJSNode(CameraPlugin_controller_Native_PlayVideo_PlayVideoJSJS, "PlayVideoJS", "Native_PlayVideo", {
URI: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRIInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CameraPlugin.Native_PlayVideo$playVideoJSJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
playVideoJSJSResult.value = results;
});
}).then(function () {
// Success?
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:YRbUnrs+rkGsrsrP0DgTfw", callContext.id) && playVideoJSJSResult.value.successOut)) {
// Set Result
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:S1_L_VBltk+nkNYHSyNUGw", callContext.id);
// Success = PlayVideoJS.Success
outVars.value.successOut = playVideoJSJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:sT68Ds+0zUKTKYRXXEFHHg", callContext.id);
} else {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:+BizKJ_MrU+rhNFVMJ9lgg", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:+BizKJ_MrU+rhNFVMJ9lgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = PlayVideoJS.ErrorCode
outVars.value.errorOut.errorCodeAttr = playVideoJSJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:+BizKJ_MrU+rhNFVMJ9lgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = PlayVideoJS.ErrorMessage
outVars.value.errorOut.errorMessageAttr = playVideoJSJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:VdJckUIYn0aOiC_D3vJpfA", callContext.id);
}

});
} else {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:TVQtBhElk0mMVKBNQrODyA", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:TVQtBhElk0mMVKBNQrODyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error = Native_CheckCameraPlugin.Error
outVars.value.errorOut = native_CheckCameraPluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:FY7e5w63CEyfBO5SHKpcMg", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:necFhsx6J0GvXbz3IEC27g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:necFhsx6J0GvXbz3IEC27g", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_PlayVideo$vars", [{
name: "URI",
attrName: "uRIInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_PlayVideo$playVideoJSJSResult", [{
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
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_PlayVideo$outVars", [{
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
CameraPluginController.default.clientActionProxies.native_PlayVideo$Action = function (uRIIn) {
uRIIn = (uRIIn === undefined) ? "" : uRIIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.native_PlayVideo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRIIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("CameraPlugin.controller$Native_PlayVideo.PlayVideoJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
OSCameraPluginWrapper.Instance.playVideo(
    function () {
        $parameters.Success = true;        
        $resolve();
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $parameters.Success = false;
        $resolve();
    }, {
        uri: $parameters.URI
    }
);
});
};
});

define("CameraPlugin.controller$Native_RecordVideo", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CameraPlugin.controller$Native_RecordVideo.RecordVideoJSJS", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$Native_CheckCameraPlugin", "CameraPlugin.model$MediaResultRec"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel, CameraPlugin_controller_Native_RecordVideo_RecordVideoJSJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.native_RecordVideo$Action = function (saveToGalleryIn, includeMetadataIn, isPersistentIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_RecordVideo$vars"))());
vars.value.saveToGalleryInLocal = saveToGalleryIn;
vars.value.includeMetadataInLocal = includeMetadataIn;
vars.value.isPersistentInLocal = isPersistentIn;
var native_CheckCameraPluginVar = new OS.DataTypes.VariableHolder();
var recordVideoJSJSResult = new OS.DataTypes.VariableHolder();
var deserialiseMediaResultVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(CameraPluginModel.MediaResultRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_RecordVideo$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.native_CheckCameraPluginVar = native_CheckCameraPluginVar;
varBag.recordVideoJSJSResult = recordVideoJSJSResult;
varBag.deserialiseMediaResultVar = deserialiseMediaResultVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:sN3NUoNagkmgWR6HasUKow:/ClientActionFlows.sN3NUoNagkmgWR6HasUKow:7sgLrE+OX2EcTHaQ8H+lPw", "CameraPlugin", "Native_RecordVideo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:TtgJOOOai0CMMBTqHxnQTQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:3YUvZAC7o0+ku92ScjjZmw", callContext.id);
// Execute Action: Native_CheckCameraPlugin
native_CheckCameraPluginVar.value = CameraPluginController.default.native_CheckCameraPlugin$Action(callContext);

// Is Camera Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:_TLXmImOTE6sEAuxcC+vOw", callContext.id) && native_CheckCameraPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:WdQ_6J+cLEGlzVXgxNoflA", callContext.id);
// Execute Action: RequireScript
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.wrapper.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:vwkdiO1_bUWepKUZ9NU+jw", callContext.id);
return controller.safeExecuteAsyncJSNode(CameraPlugin_controller_Native_RecordVideo_RecordVideoJSJS, "RecordVideoJS", "Native_RecordVideo", {
SaveToGallery: OS.DataConversion.JSNodeParamConverter.to(vars.value.saveToGalleryInLocal, OS.DataTypes.DataTypes.Boolean),
IncludeMetadata: OS.DataConversion.JSNodeParamConverter.to(vars.value.includeMetadataInLocal, OS.DataTypes.DataTypes.Boolean),
IsPersistent: OS.DataConversion.JSNodeParamConverter.to(vars.value.isPersistentInLocal, OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
MediaResult: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CameraPlugin.Native_RecordVideo$recordVideoJSJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.mediaResultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MediaResult, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
recordVideoJSJSResult.value = results;
});
}).then(function () {
// Success?
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JltHSRtS1EqKCpoqEo13Sw", callContext.id) && recordVideoJSJSResult.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Ju9RNtAcMEuNcazaNy4Mpg", callContext.id);
// JSON Deserialize: DeserialiseMediaResult
deserialiseMediaResultVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(recordVideoJSJSResult.value.mediaResultOut, CameraPluginModel.MediaResultRec, false);
// Set Result
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:n+d6dgdMjUySA4+K1n7xmw", callContext.id);
// Success = RecordVideoJS.Success
outVars.value.successOut = recordVideoJSJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:n+d6dgdMjUySA4+K1n7xmw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// MediaResult = DeserialiseMediaResult.Data
outVars.value.mediaResultOut = deserialiseMediaResultVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:DqeMwvknPkuUnJ8+NwYN+A", callContext.id);
} else {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:C7LMR43ecEOhU_7E0XBgmQ", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:C7LMR43ecEOhU_7E0XBgmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = RecordVideoJS.ErrorCode
outVars.value.errorOut.errorCodeAttr = recordVideoJSJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:C7LMR43ecEOhU_7E0XBgmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = RecordVideoJS.ErrorMessage
outVars.value.errorOut.errorMessageAttr = recordVideoJSJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Tjp5SRdy2UuEs6_xhTztuw", callContext.id);
}

});
} else {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:AAN_6Ls1hUW6xZkZmzVOVg", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:AAN_6Ls1hUW6xZkZmzVOVg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error = Native_CheckCameraPlugin.Error
outVars.value.errorOut = native_CheckCameraPluginVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:zKRQ7rQE4EKdDwdIknefaQ", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:sN3NUoNagkmgWR6HasUKow", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:sN3NUoNagkmgWR6HasUKow", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_RecordVideo$vars", [{
name: "SaveToGallery",
attrName: "saveToGalleryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IncludeMetadata",
attrName: "includeMetadataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsPersistent",
attrName: "isPersistentInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_RecordVideo$recordVideoJSJSResult", [{
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
name: "MediaResult",
attrName: "mediaResultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_RecordVideo$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "MediaResult",
attrName: "mediaResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CameraPluginModel.MediaResultRec();
},
complexType: CameraPluginModel.MediaResultRec
}]);
CameraPluginController.default.clientActionProxies.native_RecordVideo$Action = function (saveToGalleryIn, includeMetadataIn, isPersistentIn) {
saveToGalleryIn = (saveToGalleryIn === undefined) ? false : saveToGalleryIn;
includeMetadataIn = (includeMetadataIn === undefined) ? false : includeMetadataIn;
isPersistentIn = (isPersistentIn === undefined) ? true : isPersistentIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.native_RecordVideo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(saveToGalleryIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(includeMetadataIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(isPersistentIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: actionResults.errorOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
MediaResult: actionResults.mediaResultOut
};
});
};
});
define("CameraPlugin.controller$Native_RecordVideo.RecordVideoJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
OSCameraPluginWrapper.Instance.recordVideo(
    function (result) {
        $parameters.Success = true;
        $parameters.MediaResult = result;
        $resolve();
    }, 
    function (error) {
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $parameters.Success = false;
        $resolve();
    }, {
        saveToGallery: $parameters.SaveToGallery,
        includeMetadata: $parameters.IncludeMetadata,
        isPersistent: $parameters.IsPersistent
    }
);
});
};
});

define("CameraPlugin.controller$Native_TakePhoto", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CameraPlugin.controller$Native_TakePhoto.TakePhotoJSJS", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$Native_CheckCameraPlugin", "CameraPlugin.model$MediaResultRec"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel, CameraPlugin_controller_Native_TakePhoto_TakePhotoJSJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.native_TakePhoto$Action = function (qualityIn, widthIn, heightIn, correctOrientationIn, encodingTypeIn, saveToGalleryIn, cameraDirectionIn, allowEditIn, includeMetadataIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_TakePhoto$vars"))());
vars.value.qualityInLocal = qualityIn;
vars.value.widthInLocal = widthIn;
vars.value.heightInLocal = heightIn;
vars.value.correctOrientationInLocal = correctOrientationIn;
vars.value.encodingTypeInLocal = encodingTypeIn;
vars.value.saveToGalleryInLocal = saveToGalleryIn;
vars.value.cameraDirectionInLocal = cameraDirectionIn;
vars.value.allowEditInLocal = allowEditIn;
vars.value.includeMetadataInLocal = includeMetadataIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var native_CheckCameraPluginVar = new OS.DataTypes.VariableHolder();
var takePhotoJSJSResult = new OS.DataTypes.VariableHolder();
var deserialiseMediaResultVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(CameraPluginModel.MediaResultRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Native_TakePhoto$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.native_CheckCameraPluginVar = native_CheckCameraPluginVar;
varBag.takePhotoJSJSResult = takePhotoJSJSResult;
varBag.deserialiseMediaResultVar = deserialiseMediaResultVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:mWYVJKjb8U+Ka7rHv4_Q1Q:/ClientActionFlows.mWYVJKjb8U+Ka7rHv4_Q1Q:AKf_cXIFEA8axeBlFDAhwA", "CameraPlugin", "Native_TakePhoto", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:jCgsf5SR9k2gRjghnBz+VA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:T8cKoyg9_EaQCpf7HMXpbw", callContext.id);
// Execute Action: Native_CheckCameraPlugin
native_CheckCameraPluginVar.value = CameraPluginController.default.native_CheckCameraPlugin$Action(callContext);

// Is Camera available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:lWQHgi7_ikiYgQXV1_yDBw", callContext.id) && native_CheckCameraPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:MD1RfU1gXECyiVspCMLQQQ", callContext.id);
// Execute Action: RequireScript
return OS.SystemActions.requireScript(OS.Navigation.VersionedURL.getVersionedUrl("scripts/CameraPlugin.wrapper.js"), callContext).then(function () {
// Which Camera?
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:jPopHNerVUuH5DzfWTOOpw", callContext.id) && ((vars.value.cameraDirectionInLocal === OS.BuiltinFunctions.nullIdentifier()) || (vars.value.cameraDirectionInLocal === CameraPluginModel.staticEntities.cameraDirection.backCamera)))) {
// Back Camera
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:RQMs6vy07UunLRhyivy8oQ", callContext.id);
// CameraDirectionInt = 0
vars.value.cameraDirectionIntVar = 0;
} else {
// Front Camera
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:nEurqUivPEGGixuCMvBJdg", callContext.id);
// CameraDirectionInt = 1
vars.value.cameraDirectionIntVar = 1;
}

// Which Encoding?
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:FkHVBMJ2PEOTYDjJILvKNw", callContext.id) && ((vars.value.encodingTypeInLocal === OS.BuiltinFunctions.nullIdentifier()) || (vars.value.encodingTypeInLocal === CameraPluginModel.staticEntities.encodingType.jPEG)))) {
// JPEG Encoding
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:MIZDM0_oGUuCX_7DyiQr5w", callContext.id);
// EncodingTypeInt = 0
vars.value.encodingTypeIntVar = 0;
} else {
// PNG Encoding
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:gtB5FWowT06PjBSoksLBQw", callContext.id);
// EncodingTypeInt = 1
vars.value.encodingTypeIntVar = 1;
}

OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:UpQuRHsbPU+_MWJG2CZIww", callContext.id);
// Use this action to trigger the device's camera.
return controller.safeExecuteAsyncJSNode(CameraPlugin_controller_Native_TakePhoto_TakePhotoJSJS, "TakePhotoJS", "Native_TakePhoto", {
SaveToGallery: OS.DataConversion.JSNodeParamConverter.to(vars.value.saveToGalleryInLocal, OS.DataTypes.DataTypes.Boolean),
Height: OS.DataConversion.JSNodeParamConverter.to(vars.value.heightInLocal, OS.DataTypes.DataTypes.Integer),
Quality: OS.DataConversion.JSNodeParamConverter.to(vars.value.qualityInLocal, OS.DataTypes.DataTypes.Integer),
CameraDirection: OS.DataConversion.JSNodeParamConverter.to(vars.value.cameraDirectionIntVar, OS.DataTypes.DataTypes.Integer),
CorrectOrientation: OS.DataConversion.JSNodeParamConverter.to(vars.value.correctOrientationInLocal, OS.DataTypes.DataTypes.Boolean),
UseCustomWidth: OS.DataConversion.JSNodeParamConverter.to(((vars.value.widthInLocal) !== (OS.BuiltinFunctions.nullIdentifier())), OS.DataTypes.DataTypes.Boolean),
UseCustomHeight: OS.DataConversion.JSNodeParamConverter.to(((vars.value.heightInLocal) !== (OS.BuiltinFunctions.nullIdentifier())), OS.DataTypes.DataTypes.Boolean),
EncodingType: OS.DataConversion.JSNodeParamConverter.to(vars.value.encodingTypeIntVar, OS.DataTypes.DataTypes.Integer),
AllowEdit: OS.DataConversion.JSNodeParamConverter.to(vars.value.allowEditInLocal, OS.DataTypes.DataTypes.Boolean),
Width: OS.DataConversion.JSNodeParamConverter.to(vars.value.widthInLocal, OS.DataTypes.DataTypes.Integer),
IncludeMetadata: OS.DataConversion.JSNodeParamConverter.to(vars.value.includeMetadataInLocal, OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
MediaResult: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CameraPlugin.Native_TakePhoto$takePhotoJSJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.mediaResultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MediaResult, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
takePhotoJSJSResult.value = results;
});
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:1qD989erfkebf550cYiGrA", callContext.id) && takePhotoJSJSResult.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Bw0Wyn3XSkqmgTWrewAiig", callContext.id);
// JSON Deserialize: DeserialiseMediaResult
deserialiseMediaResultVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(takePhotoJSJSResult.value.mediaResultOut, CameraPluginModel.MediaResultRec, false);
// AssignOutput
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6DWNwfXSKkmdyAeWaMCFzg", callContext.id);
// Success = TakePhotoJS.Success
outVars.value.successOut = takePhotoJSJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6DWNwfXSKkmdyAeWaMCFzg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6DWNwfXSKkmdyAeWaMCFzg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6DWNwfXSKkmdyAeWaMCFzg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// MediaResult = DeserialiseMediaResult.Data
outVars.value.mediaResultOut = deserialiseMediaResultVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:9Bx1yleJykadu7Du9HYUvw", callContext.id);
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2Hcbz8yihEShAhCQbcGAJQ", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2Hcbz8yihEShAhCQbcGAJQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = TakePhotoJS.ErrorCode
outVars.value.errorOut.errorCodeAttr = takePhotoJSJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2Hcbz8yihEShAhCQbcGAJQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = TakePhotoJS.ErrorMessage
outVars.value.errorOut.errorMessageAttr = takePhotoJSJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:8_Ypp0LllUmPv9WHyaxGlA", callContext.id);
}

});
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:WpJVCPSBi0uKU_bH2MNXIQ", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:WpJVCPSBi0uKU_bH2MNXIQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Native_CheckCameraPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = native_CheckCameraPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:WpJVCPSBi0uKU_bH2MNXIQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Native_CheckCameraPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = native_CheckCameraPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2LyVfbd2bUa+cmkIll+uIQ", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("Native_TakePhoto.Native_TakePhoto", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JfimlShxkEqO65c8tJFrPw", callContext.id);
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6M7sWCtprUewUCNrLAn6LA", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6M7sWCtprUewUCNrLAn6LA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6M7sWCtprUewUCNrLAn6LA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:vOQIaOcemki9UlND7mut3g", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:mWYVJKjb8U+Ka7rHv4_Q1Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:mWYVJKjb8U+Ka7rHv4_Q1Q", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_TakePhoto$vars", [{
name: "Quality",
attrName: "qualityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Width",
attrName: "widthInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Height",
attrName: "heightInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CorrectOrientation",
attrName: "correctOrientationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "EncodingType",
attrName: "encodingTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "SaveToGallery",
attrName: "saveToGalleryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "CameraDirection",
attrName: "cameraDirectionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "AllowEdit",
attrName: "allowEditInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IncludeMetadata",
attrName: "includeMetadataInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "CameraDirectionInt",
attrName: "cameraDirectionIntVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "EncodingTypeInt",
attrName: "encodingTypeIntVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_TakePhoto$takePhotoJSJSResult", [{
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MediaResult",
attrName: "mediaResultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Native_TakePhoto$outVars", [{
name: "MediaResult",
attrName: "mediaResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CameraPluginModel.MediaResultRec();
},
complexType: CameraPluginModel.MediaResultRec
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
CameraPluginController.default.clientActionProxies.native_TakePhoto$Action = function (qualityIn, widthIn, heightIn, correctOrientationIn, encodingTypeIn, saveToGalleryIn, cameraDirectionIn, allowEditIn, includeMetadataIn) {
qualityIn = (qualityIn === undefined) ? 0 : qualityIn;
widthIn = (widthIn === undefined) ? 0 : widthIn;
heightIn = (heightIn === undefined) ? 0 : heightIn;
correctOrientationIn = (correctOrientationIn === undefined) ? false : correctOrientationIn;
encodingTypeIn = (encodingTypeIn === undefined) ? 0 : encodingTypeIn;
saveToGalleryIn = (saveToGalleryIn === undefined) ? false : saveToGalleryIn;
cameraDirectionIn = (cameraDirectionIn === undefined) ? 0 : cameraDirectionIn;
allowEditIn = (allowEditIn === undefined) ? false : allowEditIn;
includeMetadataIn = (includeMetadataIn === undefined) ? false : includeMetadataIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.native_TakePhoto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(qualityIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(widthIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(heightIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(correctOrientationIn, OS.DataTypes.DataTypes.Boolean), encodingTypeIn, OS.DataConversion.JSNodeParamConverter.from(saveToGalleryIn, OS.DataTypes.DataTypes.Boolean), cameraDirectionIn, OS.DataConversion.JSNodeParamConverter.from(allowEditIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(includeMetadataIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MediaResult: actionResults.mediaResultOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("CameraPlugin.controller$Native_TakePhoto.TakePhotoJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
OSCameraPluginWrapper.Instance.takePhoto(function(result) {
    $parameters.Success = true;
    $parameters.MediaResult = result;
    $resolve();
}, function (error) {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code;
    $parameters.ErrorMessage = error.message;
    $resolve();
}, {
    quality: $parameters.Quality,
    targetWidth: $parameters.UseCustomWidth ? $parameters.Width : null,
    targetHeight: $parameters.UseCustomHeight ? $parameters.Height : null, 
    encodingType: $parameters.EncodingType,
    correctOrientation: $parameters.CorrectOrientation,
    saveToGallery: $parameters.SaveToGallery,
    cameraDirection: $parameters.CameraDirection,
    allowEdit: $parameters.AllowEdit,
    includeMetadata: $parameters.IncludeMetadata
});
});
};
});

define("CameraPlugin.controller$PlayVideo", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CameraPlugin.controller$Native_PlayVideo", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$CheckCameraPlugin"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel) {
var OS = OutSystems.Internal;
CameraPluginController.default.playVideo$Action = function (uRIIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.PlayVideo$vars"))());
vars.value.uRIInLocal = uRIIn;
var native_PlayVideoVar = new OS.DataTypes.VariableHolder();
var checkCameraPluginVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.PlayVideo$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.native_PlayVideoVar = native_PlayVideoVar;
varBag.checkCameraPluginVar = checkCameraPluginVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:nO8P7ZMOZkWmKZGyb3If3w:/ClientActionFlows.nO8P7ZMOZkWmKZGyb3If3w:gv+FPV8aqxv3DNv9T7KFVQ", "CameraPlugin", "PlayVideo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:_aFWR1Js0ki2IJ4SKxI0iw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:D2dkxw4hMk+ze+L+5MUYqw", callContext.id);
// Execute Action: CheckCameraPlugin
return CameraPluginController.default.checkCameraPlugin$Action(callContext).then(function (value) {
checkCameraPluginVar.value = value;
}).then(function () {
// Is Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:qEz7Tfp2IEul3Qa_qfPOVA", callContext.id) && checkCameraPluginVar.value.isAvailableOut)) {
// Is PWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Q3qC6CQr10yBkRorZOfiOQ", callContext.id) && checkCameraPluginVar.value.isPWAOut)) {
// Not available PWA
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:oW8e8M6aYkWKskTDSCUvKw", callContext.id);
// Error.ErrorCode = "OS-PLUG-CAMR-0029"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-CAMR-0029";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:oW8e8M6aYkWKskTDSCUvKw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "PlayVideo is only available for Android and iOS."
outVars.value.errorOut.errorMessageAttr = "PlayVideo is only available for Android and iOS.";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:oW8e8M6aYkWKskTDSCUvKw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:OK9rsu6zNECa_pIumRZobA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:vbWnaFg0gUGm+dHS7jOTfg", callContext.id);
// Execute Action: Native_PlayVideo
return CameraPluginController.default.native_PlayVideo$Action(vars.value.uRIInLocal, callContext).then(function (value) {
native_PlayVideoVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:4bkZRxTdAEqse7yX70P7Mw", callContext.id);
// Success = Native_PlayVideo.Success
outVars.value.successOut = native_PlayVideoVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:4bkZRxTdAEqse7yX70P7Mw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error = Native_PlayVideo.Error
outVars.value.errorOut = native_PlayVideoVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:juoNwxlHnECCR3xFOMQVlA", callContext.id);
});
}

});
} else {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:+Q7JuP9X3kai_iRO6Ijt2w", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:+Q7JuP9X3kai_iRO6Ijt2w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:+Q7JuP9X3kai_iRO6Ijt2w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:wsREI8GzYkyuEN5JpGOTqg", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:nO8P7ZMOZkWmKZGyb3If3w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:nO8P7ZMOZkWmKZGyb3If3w", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.PlayVideo$vars", [{
name: "URI",
attrName: "uRIInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.PlayVideo$outVars", [{
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
CameraPluginController.default.clientActionProxies.playVideo$Action = function (uRIIn) {
uRIIn = (uRIIn === undefined) ? "" : uRIIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.playVideo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRIIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});

define("CameraPlugin.controller$RecordVideo", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$CheckCameraPlugin", "CameraPlugin.model$MediaResultRec", "CameraPlugin.controller$Native_RecordVideo"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel) {
var OS = OutSystems.Internal;
CameraPluginController.default.recordVideo$Action = function (saveToGalleryIn, includeMetadataIn, isPersistentIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.RecordVideo$vars"))());
vars.value.saveToGalleryInLocal = saveToGalleryIn;
vars.value.includeMetadataInLocal = includeMetadataIn;
vars.value.isPersistentInLocal = isPersistentIn;
var checkCameraPluginVar = new OS.DataTypes.VariableHolder();
var native_RecordVideoVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.RecordVideo$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkCameraPluginVar = checkCameraPluginVar;
varBag.native_RecordVideoVar = native_RecordVideoVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:vylq6yLOrk+pHoD3IomoNw:/ClientActionFlows.vylq6yLOrk+pHoD3IomoNw:+ko16S+PsH4VmXDmStNGaQ", "CameraPlugin", "RecordVideo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:u7C6kIz340Cff4agGphhGg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:LKJBCPZl_0mtobe12GQoeg", callContext.id);
// Execute Action: CheckCameraPlugin
return CameraPluginController.default.checkCameraPlugin$Action(callContext).then(function (value) {
checkCameraPluginVar.value = value;
}).then(function () {
// Is Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:RBgwXpM6ak+7jXvQL10lvQ", callContext.id) && checkCameraPluginVar.value.isAvailableOut)) {
// Is PWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JjeusscOikuvVUxOVIHxfw", callContext.id) && checkCameraPluginVar.value.isPWAOut)) {
// Not available PWA
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JkC8LB5UbEWvprlIzmevpQ", callContext.id);
// Error.ErrorCode = "OS-PLUG-CAMR-0029"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-CAMR-0029";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JkC8LB5UbEWvprlIzmevpQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = "RecordVideo is only available for Android and iOS."
outVars.value.errorOut.errorMessageAttr = "RecordVideo is only available for Android and iOS.";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JkC8LB5UbEWvprlIzmevpQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:LV+bMPjQokmHy3yQCvrFXQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:c0+za4S4+0+5fvXJIO2hmg", callContext.id);
// Execute Action: Native_RecordVideo
return CameraPluginController.default.native_RecordVideo$Action(vars.value.saveToGalleryInLocal, vars.value.includeMetadataInLocal, vars.value.isPersistentInLocal, callContext).then(function (value) {
native_RecordVideoVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:bkZspopBXUWrV80uVUoehA", callContext.id);
// Success = Native_RecordVideo.Success
outVars.value.successOut = native_RecordVideoVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:bkZspopBXUWrV80uVUoehA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error = Native_RecordVideo.Error
outVars.value.errorOut = native_RecordVideoVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:bkZspopBXUWrV80uVUoehA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// MediaResult = Native_RecordVideo.MediaResult
outVars.value.mediaResultOut = native_RecordVideoVar.value.mediaResultOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:93OtgACthk6T6z5CJmd1MA", callContext.id);
});
}

});
} else {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:YczW86kAxEWhDwEZSTXmZg", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:YczW86kAxEWhDwEZSTXmZg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:YczW86kAxEWhDwEZSTXmZg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "Plugin not available"
outVars.value.errorOut.errorMessageAttr = "Plugin not available";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:TGU9_BBAf0SgtjJOq9E9+w", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:vylq6yLOrk+pHoD3IomoNw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:vylq6yLOrk+pHoD3IomoNw", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.RecordVideo$vars", [{
name: "SaveToGallery",
attrName: "saveToGalleryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IncludeMetadata",
attrName: "includeMetadataInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsPersistent",
attrName: "isPersistentInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.RecordVideo$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CommonPluginModel.ErrorRec();
},
complexType: CommonPluginModel.ErrorRec
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "MediaResult",
attrName: "mediaResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CameraPluginModel.MediaResultRec();
},
complexType: CameraPluginModel.MediaResultRec
}]);
CameraPluginController.default.clientActionProxies.recordVideo$Action = function (saveToGalleryIn, includeMetadataIn, isPersistentIn) {
saveToGalleryIn = (saveToGalleryIn === undefined) ? false : saveToGalleryIn;
includeMetadataIn = (includeMetadataIn === undefined) ? false : includeMetadataIn;
isPersistentIn = (isPersistentIn === undefined) ? true : isPersistentIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.recordVideo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(saveToGalleryIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(includeMetadataIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(isPersistentIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: actionResults.errorOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
MediaResult: actionResults.mediaResultOut
};
});
};
});

define("CameraPlugin.controller$TakePhoto", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CameraPlugin.controller$Web_TakePhoto", "CommonPlugin.model$WarningRec", "CameraPlugin.controller$CheckCameraPlugin", "CameraPlugin.model$MediaResultRec", "CameraPlugin.controller$Native_TakePhoto"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel) {
var OS = OutSystems.Internal;
CameraPluginController.default.takePhoto$Action = function (qualityIn, widthIn, heightIn, correctOrientationIn, encodingTypeIn, saveToGalleryIn, cameraDirectionIn, allowEditIn, allowMultiplePhotosIn, includeMetadataIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.TakePhoto$vars"))());
vars.value.qualityInLocal = qualityIn;
vars.value.widthInLocal = widthIn;
vars.value.heightInLocal = heightIn;
vars.value.correctOrientationInLocal = correctOrientationIn;
vars.value.encodingTypeInLocal = encodingTypeIn;
vars.value.saveToGalleryInLocal = saveToGalleryIn;
vars.value.cameraDirectionInLocal = cameraDirectionIn;
vars.value.allowEditInLocal = allowEditIn;
vars.value.allowMultiplePhotosInLocal = allowMultiplePhotosIn;
vars.value.includeMetadataInLocal = includeMetadataIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var web_TakePhotohotoVar = new OS.DataTypes.VariableHolder();
var checkCameraPluginVar = new OS.DataTypes.VariableHolder();
var native_TakePhotoVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.TakePhoto$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.web_TakePhotohotoVar = web_TakePhotohotoVar;
varBag.checkCameraPluginVar = checkCameraPluginVar;
varBag.native_TakePhotoVar = native_TakePhotoVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:MU_9unCnLEyA3PKSGFZu9A:/ClientActionFlows.MU_9unCnLEyA3PKSGFZu9A:PIlimTdAAU2qTBGe2Tv9UQ", "CameraPlugin", "TakePhoto", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Cf+MjxLc6UeJqq8LGY2nUA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:sCCKfalBPUe1eaKSG_tl_g", callContext.id);
// Execute Action: CheckCameraPlugin
return CameraPluginController.default.checkCameraPlugin$Action(callContext).then(function (value) {
checkCameraPluginVar.value = value;
}).then(function () {
// Is Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:KBuR51LwvkqahklrsCT5bA", callContext.id) && checkCameraPluginVar.value.isAvailableOut)) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:S+cbG2K+F0ODyb1JrN8Z+A", callContext.id) && ((vars.value.widthInLocal < 0) || (vars.value.heightInLocal < 0)))) {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6rEgXT70akGzEozSiw6nUQ", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6rEgXT70akGzEozSiw6nUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = "OS-PLUG-CAMR-0030"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-CAMR-0030";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:6rEgXT70akGzEozSiw6nUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "Height and width values need to be greater than zero."
outVars.value.errorOut.errorMessageAttr = "Height and width values need to be greater than zero.";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:_O1i_IDPaU6v4Bysc1n4xQ", callContext.id);
} else {
// Is PWA?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:5nqIbXxSYECO2WDRcRq2cQ", callContext.id) && checkCameraPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:PpJPdD1hh06sQlXivMUKOA", callContext.id);
// Execute Action: Web_TakePhotohoto
return CameraPluginController.default.web_TakePhoto$Action(vars.value.qualityInLocal, vars.value.encodingTypeInLocal, vars.value.cameraDirectionInLocal, vars.value.saveToGalleryInLocal, vars.value.allowMultiplePhotosInLocal, vars.value.heightInLocal, vars.value.widthInLocal, vars.value.allowEditInLocal, callContext).then(function (value) {
web_TakePhotohotoVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z3sAqcAQwEODD9lK1ie6mQ", callContext.id);
// Success = Web_TakePhotohoto.Success
outVars.value.successOut = web_TakePhotohotoVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z3sAqcAQwEODD9lK1ie6mQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Web_TakePhotohoto.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = web_TakePhotohotoVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z3sAqcAQwEODD9lK1ie6mQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Web_TakePhotohoto.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = web_TakePhotohotoVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z3sAqcAQwEODD9lK1ie6mQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// MediaResult.Thumbnail = Web_TakePhotohoto.ImageCaptured
outVars.value.mediaResultOut.thumbnailAttr = web_TakePhotohotoVar.value.imageCapturedOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z3sAqcAQwEODD9lK1ie6mQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// MediaResult.Type = Photo
outVars.value.mediaResultOut.typeAttr = CameraPluginModel.staticEntities.mediaType.photo;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:z3sAqcAQwEODD9lK1ie6mQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// MediaResult.URI = ""
outVars.value.mediaResultOut.uRIAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:bf_7K5br1kWu1OIA46MSmg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:w7Xvq5aZ5E+WgUdtWJ8_2A", callContext.id);
// Execute Action: Native_TakePhoto
return CameraPluginController.default.native_TakePhoto$Action(vars.value.qualityInLocal, vars.value.widthInLocal, vars.value.heightInLocal, vars.value.correctOrientationInLocal, vars.value.encodingTypeInLocal, vars.value.saveToGalleryInLocal, vars.value.cameraDirectionInLocal, vars.value.allowEditInLocal, vars.value.includeMetadataInLocal, callContext).then(function (value) {
native_TakePhotoVar.value = value;
}).then(function () {
// Set Result
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2cAlCHn5FEOHl49i92gjVg", callContext.id);
// Success = Native_TakePhoto.Success
outVars.value.successOut = native_TakePhotoVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2cAlCHn5FEOHl49i92gjVg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Native_TakePhoto.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = native_TakePhotoVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2cAlCHn5FEOHl49i92gjVg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Native_TakePhoto.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = native_TakePhotoVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2cAlCHn5FEOHl49i92gjVg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// MediaResult = Native_TakePhoto.MediaResult
outVars.value.mediaResultOut = native_TakePhotoVar.value.mediaResultOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:bf_7K5br1kWu1OIA46MSmg", callContext.id);
});
}

});
}

});
} else {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JldccNXWQ0mNuEo7efXSmQ", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JldccNXWQ0mNuEo7efXSmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = CheckCameraPlugin.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = checkCameraPluginVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:JldccNXWQ0mNuEo7efXSmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = CheckCameraPlugin.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = checkCameraPluginVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:WVDhp6iNk0+KlfQmgFO2GQ", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("TakePhoto.TakePhoto", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:LgtaXh5vnUSCn1752BAqPw", callContext.id);
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:eTG_dPg1aEuHvBAafir8Zw", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:eTG_dPg1aEuHvBAafir8Zw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:eTG_dPg1aEuHvBAafir8Zw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:4AsN89XG6ky_8Mb12sUznw", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:MU_9unCnLEyA3PKSGFZu9A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:MU_9unCnLEyA3PKSGFZu9A", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.TakePhoto$vars", [{
name: "Quality",
attrName: "qualityInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 60;
}
}, {
name: "Width",
attrName: "widthInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Height",
attrName: "heightInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CorrectOrientation",
attrName: "correctOrientationInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "EncodingType",
attrName: "encodingTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return CameraPluginModel.staticEntities.encodingType.jPEG;
}
}, {
name: "SaveToGallery",
attrName: "saveToGalleryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "CameraDirection",
attrName: "cameraDirectionInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return CameraPluginModel.staticEntities.cameraDirection.backCamera;
}
}, {
name: "AllowEdit",
attrName: "allowEditInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AllowMultiplePhotos",
attrName: "allowMultiplePhotosInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IncludeMetadata",
attrName: "includeMetadataInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.TakePhoto$outVars", [{
name: "MediaResult",
attrName: "mediaResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CameraPluginModel.MediaResultRec();
},
complexType: CameraPluginModel.MediaResultRec
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
CameraPluginController.default.clientActionProxies.takePhoto$Action = function (qualityIn, widthIn, heightIn, correctOrientationIn, encodingTypeIn, saveToGalleryIn, cameraDirectionIn, allowEditIn, allowMultiplePhotosIn, includeMetadataIn) {
qualityIn = (qualityIn === undefined) ? 60 : qualityIn;
widthIn = (widthIn === undefined) ? 0 : widthIn;
heightIn = (heightIn === undefined) ? 0 : heightIn;
correctOrientationIn = (correctOrientationIn === undefined) ? true : correctOrientationIn;
encodingTypeIn = (encodingTypeIn === undefined) ? CameraPluginModel.staticEntities.encodingType.jPEG : encodingTypeIn;
saveToGalleryIn = (saveToGalleryIn === undefined) ? false : saveToGalleryIn;
cameraDirectionIn = (cameraDirectionIn === undefined) ? CameraPluginModel.staticEntities.cameraDirection.backCamera : cameraDirectionIn;
allowEditIn = (allowEditIn === undefined) ? false : allowEditIn;
allowMultiplePhotosIn = (allowMultiplePhotosIn === undefined) ? false : allowMultiplePhotosIn;
includeMetadataIn = (includeMetadataIn === undefined) ? false : includeMetadataIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.takePhoto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(qualityIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(widthIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(heightIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(correctOrientationIn, OS.DataTypes.DataTypes.Boolean), encodingTypeIn, OS.DataConversion.JSNodeParamConverter.from(saveToGalleryIn, OS.DataTypes.DataTypes.Boolean), cameraDirectionIn, OS.DataConversion.JSNodeParamConverter.from(allowEditIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(allowMultiplePhotosIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(includeMetadataIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MediaResult: actionResults.mediaResultOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});

define("CameraPlugin.controller$Web_ChooseFromGallery", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CameraPlugin.controller$Web_ChooseFromGallery.ChooseJS", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CameraPlugin.controller$Web_EditPhoto", "CameraPlugin.model$MediaResultRec", "CameraPlugin.model$MediaResultList"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel, CameraPlugin_controller_Web_ChooseFromGallery_ChooseJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.web_ChooseFromGallery$Action = function (allowEditIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Web_ChooseFromGallery$vars"))());
vars.value.allowEditInLocal = allowEditIn;
var web_EditPhotoVar = new OS.DataTypes.VariableHolder();
var chooseJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Web_ChooseFromGallery$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.web_EditPhotoVar = web_EditPhotoVar;
varBag.chooseJSResult = chooseJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:djcIIQNgIUmz5TucXqzblg:/ClientActionFlows.djcIIQNgIUmz5TucXqzblg:c5kVIOO76Ul4Yx06mC1a7A", "CameraPlugin", "Web_ChooseFromGallery", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:0gOm6Oh5ikysTWky_kyjXQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:W9FoQrsckEay0+0Vrlp3Qg", callContext.id);
return controller.safeExecuteAsyncJSNode(CameraPlugin_controller_Web_ChooseFromGallery_ChooseJS, "Choose", "Web_ChooseFromGallery", {
ImageCaptured: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.BinaryData.defaultValue, OS.DataTypes.DataTypes.BinaryData),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CameraPlugin.Web_ChooseFromGallery$chooseJSResult"))();
jsNodeResult.imageCapturedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ImageCaptured, OS.DataTypes.DataTypes.BinaryData);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
chooseJSResult.value = results;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:ekqjiRz+TEiohQZ1dlRZzg", callContext.id) && chooseJSResult.value.successOut)) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:ux439xeWkUqEfVGZ0a7HUA", callContext.id) && vars.value.allowEditInLocal)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Tcz+3B1VkU2+7QsYnw9jCQ", callContext.id);
// Execute Action: Web_EditPhoto
return CameraPluginController.default.web_EditPhoto$Action(chooseJSResult.value.imageCapturedOut, callContext).then(function (value) {
web_EditPhotoVar.value = value;
}).then(function () {
// EditPhoto Success
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:tJS7JzWJU0m3whhNdeuWTA", callContext.id) && (web_EditPhotoVar.value.successOut === true))) {
// Assign SingleMediaResult
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:WbsbHEVEOkymesyHUNT76Q", callContext.id);
// SingleMediaResult.Thumbnail = Web_EditPhoto.OutputImage
vars.value.singleMediaResultVar.thumbnailAttr = web_EditPhotoVar.value.outputImageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:WbsbHEVEOkymesyHUNT76Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SingleMediaResult.URI = ""
vars.value.singleMediaResultVar.uRIAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:WbsbHEVEOkymesyHUNT76Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// SingleMediaResult.Type = Photo
vars.value.singleMediaResultVar.typeAttr = CameraPluginModel.staticEntities.mediaType.photo;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:nEDpEbALrUeLT+CHHSP5VQ", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(outVars.value.mediaResultListOut, vars.value.singleMediaResultVar, callContext);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:tNeC5AVnm0+A1E9LAfrCqw", callContext.id);
// Success = Choose.Success
outVars.value.successOut = chooseJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:tNeC5AVnm0+A1E9LAfrCqw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Choose.ErrorCode
outVars.value.errorOut.errorCodeAttr = chooseJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:tNeC5AVnm0+A1E9LAfrCqw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Choose.ErrorMessage
outVars.value.errorOut.errorMessageAttr = chooseJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:0Kj40wn5m0yeX0C1TApAdQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:_BVOZ275_EG4VSUHlPeW2Q", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:_BVOZ275_EG4VSUHlPeW2Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error = Web_EditPhoto.Error
outVars.value.errorOut = web_EditPhotoVar.value.errorOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:0Kj40wn5m0yeX0C1TApAdQ", callContext.id);
}

});
} else {
// Assign SingleMediaResult
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:aGzr66AKlUCpc+zNBFkFCw", callContext.id);
// SingleMediaResult.Thumbnail = Choose.ImageCaptured
vars.value.singleMediaResultVar.thumbnailAttr = chooseJSResult.value.imageCapturedOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:aGzr66AKlUCpc+zNBFkFCw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SingleMediaResult.URI = ""
vars.value.singleMediaResultVar.uRIAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:aGzr66AKlUCpc+zNBFkFCw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// SingleMediaResult.Type = Photo
vars.value.singleMediaResultVar.typeAttr = CameraPluginModel.staticEntities.mediaType.photo;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:B052UyXEDkmyxOdjWFoxFg", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(outVars.value.mediaResultListOut, vars.value.singleMediaResultVar, callContext);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:QyaV9RKxWEKT_p63wnxn+w", callContext.id);
// Success = Choose.Success
outVars.value.successOut = chooseJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:QyaV9RKxWEKT_p63wnxn+w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Choose.ErrorCode
outVars.value.errorOut.errorCodeAttr = chooseJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:QyaV9RKxWEKT_p63wnxn+w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Choose.ErrorMessage
outVars.value.errorOut.errorMessageAttr = chooseJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:0Kj40wn5m0yeX0C1TApAdQ", callContext.id);
}

});
} else {
// Set Error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:p6xBYk5p20epkv8sNz9Otw", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:p6xBYk5p20epkv8sNz9Otw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Choose.ErrorCode
outVars.value.errorOut.errorCodeAttr = chooseJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:p6xBYk5p20epkv8sNz9Otw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Choose.ErrorMessage
outVars.value.errorOut.errorMessageAttr = chooseJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:aZHAHzBG3kScM3xWzc2Wag", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:djcIIQNgIUmz5TucXqzblg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:djcIIQNgIUmz5TucXqzblg", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Web_ChooseFromGallery$vars", [{
name: "AllowEdit",
attrName: "allowEditInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SingleMediaResult",
attrName: "singleMediaResultVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new CameraPluginModel.MediaResultRec();
},
complexType: CameraPluginModel.MediaResultRec
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Web_ChooseFromGallery$chooseJSResult", [{
name: "ImageCaptured",
attrName: "imageCapturedOut",
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
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Web_ChooseFromGallery$outVars", [{
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
name: "MediaResultList",
attrName: "mediaResultListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new CameraPluginModel.MediaResultList();
},
complexType: CameraPluginModel.MediaResultList
}]);
CameraPluginController.default.clientActionProxies.web_ChooseFromGallery$Action = function (allowEditIn) {
allowEditIn = (allowEditIn === undefined) ? false : allowEditIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.web_ChooseFromGallery$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(allowEditIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut,
MediaResultList: actionResults.mediaResultListOut
};
});
};
});
define("CameraPlugin.controller$Web_ChooseFromGallery.ChooseJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var cont = document.getElementById('reactContainer');

var chooseElement = document.getElementById('choose-input');
if( chooseElement != null ){
    cont.removeChild(chooseElement);
}

// Setup input element
chooseElement = document.createElement('input');
chooseElement.id = 'choose-input';
chooseElement.setAttribute('accepts', 'image/x-png,image/jpeg');
chooseElement.setAttribute('type', 'file');
chooseElement.style.display = 'none';

// Add element to DOM
cont.appendChild(chooseElement);

function onFileInput(e) {
    var file = e.target.files[0];
    if (!file){
        $parameters.ErrorCode = CameraErrors.FILE_ERROR.getErrorCode();
        $parameters.ErrorMessage = CameraErrors.FILE_ERROR.getMessage();
        $parameters.Success = false;
        $resolve();
    } else if (!file.type.includes('image/')) {
        $parameters.ErrorCode = CameraErrors.NOT_SUPPORTED_FILE.getErrorCode();;
        $parameters.ErrorMessage = CameraErrors.NOT_SUPPORTED_FILE.getMessage();
        $parameters.Success = false;
        $resolve();

    } else {
        var reader = new FileReader();
        // Closure to capture the file information
        reader.onload = function () {
            var content = reader.result;
            var base64Index = content.indexOf(";base64,");
            var actualContent = content.substr(base64Index + 8);
            $parameters.ImageCaptured = actualContent;
            $parameters.Success = true;
            $resolve();
        };
        // Read in the image file as a data URL.
        reader.readAsDataURL(file);        
    }
}

chooseElement.onchange = onFileInput;
chooseElement.click();
});
};
});

define("CameraPlugin.controller$Web_EditPhoto", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CameraPlugin.controller$Web_EditPhoto.EditImageJSJS", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel, CameraPlugin_controller_Web_EditPhoto_EditImageJSJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.web_EditPhoto$Action = function (inputImageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Web_EditPhoto$vars"))());
vars.value.inputImageInLocal = inputImageIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var editImageJSJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Web_EditPhoto$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.editImageJSJSResult = editImageJSJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:q9nfmlgyh0SaWbScGXx+cQ:/ClientActionFlows.q9nfmlgyh0SaWbScGXx+cQ:KpvctDQ+YdIB+HpmjlAtCQ", "CameraPlugin", "Web_EditPhoto", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:iBZcyC3QSEiIRWUK4iiI6Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:vJQ7fV8xOEC3+pWA2NTt5A", callContext.id);
return controller.safeExecuteAsyncJSNode(CameraPlugin_controller_Web_EditPhoto_EditImageJSJS, "EditImageJS", "Web_EditPhoto", {
Image: OS.DataConversion.JSNodeParamConverter.to(vars.value.inputImageInLocal, OS.DataTypes.DataTypes.BinaryData),
EditedImage: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.BinaryData.defaultValue, OS.DataTypes.DataTypes.BinaryData),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CameraPlugin.Web_EditPhoto$editImageJSJSResult"))();
jsNodeResult.editedImageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.EditedImage, OS.DataTypes.DataTypes.BinaryData);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
editImageJSJSResult.value = results;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:kWg0tUR8T02mMqYH702nmA", callContext.id) && editImageJSJSResult.value.successOut)) {
// AssignOutput
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:X0fFu8bqjEqbDVaDB0THKA", callContext.id);
// OutputImage = EditImageJS.EditedImage
outVars.value.outputImageOut = editImageJSJSResult.value.editedImageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:X0fFu8bqjEqbDVaDB0THKA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = EditImageJS.Success
outVars.value.successOut = editImageJSJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:X0fFu8bqjEqbDVaDB0THKA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:X0fFu8bqjEqbDVaDB0THKA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:NpMNa1PamU6L5OdaFww6gA", callContext.id);
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:U3VvONnpi0mRHsvmrsb1xw", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:U3VvONnpi0mRHsvmrsb1xw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = EditImageJS.ErrorCode
outVars.value.errorOut.errorCodeAttr = editImageJSJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:U3VvONnpi0mRHsvmrsb1xw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = EditImageJS.ErrorMessage
outVars.value.errorOut.errorMessageAttr = editImageJSJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:4pWGKmN57UyxXLTSZvvp_g", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("Web_EditPhoto.Web_EditPhoto", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:3AsU44B+NkyP__ebrfmm8Q", callContext.id);
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:xtvt23sSOk2qUA3WOEUTXQ", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:xtvt23sSOk2qUA3WOEUTXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:xtvt23sSOk2qUA3WOEUTXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Q+ZsmaZ_L0yCHeEwf+CL4A", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:q9nfmlgyh0SaWbScGXx+cQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:q9nfmlgyh0SaWbScGXx+cQ", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Web_EditPhoto$vars", [{
name: "InputImage",
attrName: "inputImageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Web_EditPhoto$editImageJSJSResult", [{
name: "EditedImage",
attrName: "editedImageOut",
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
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Web_EditPhoto$outVars", [{
name: "OutputImage",
attrName: "outputImageOut",
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
}]);
CameraPluginController.default.clientActionProxies.web_EditPhoto$Action = function (inputImageIn) {
inputImageIn = (inputImageIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : inputImageIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.web_EditPhoto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(inputImageIn, OS.DataTypes.DataTypes.BinaryData)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
OutputImage: OS.DataConversion.JSNodeParamConverter.to(actionResults.outputImageOut, OS.DataTypes.DataTypes.BinaryData),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("CameraPlugin.controller$Web_EditPhoto.EditImageJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function onSuccess(outImage){
    var base64Index = outImage.indexOf(";base64,");
    var actualContent = outImage.substr(base64Index + 8);
    $parameters.EditedImage = actualContent;
    $parameters.Success = true;
    $resolve();
}

function onError(errorCode, errorMessage){
    $parameters.ErrorCode = errorCode;
    $parameters.ErrorMessage = errorMessage;
    $parameters.Success = false;
    $parameters.EditedImage = '';
    $resolve();
}

const editImageOptions = {
    'image': $parameters.Image,
    'quality': 100,
    'fileType': 'JPEG'
}

var parent = document.getElementById('reactContainer'); 
var editor = new ImageEditor(parent, onSuccess, onError, editImageOptions);
editor.start();
});
};
});

define("CameraPlugin.controller$Web_TakePhoto", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller", "CommonPlugin.model", "CameraPlugin.controller$Web_TakePhoto.TakePhotoJSJS", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin", "CameraPlugin.controller$Web_EditPhoto"], function (exports, OutSystems, CameraPluginModel, CameraPluginController, CommonPluginModel, CameraPlugin_controller_Web_TakePhoto_TakePhotoJSJS) {
var OS = OutSystems.Internal;
CameraPluginController.default.web_TakePhoto$Action = function (qualityIn, encodingTypeIn, cameraDirectionIn, saveToGalleryIn, allowMultiplePhotosIn, heightIn, widthIn, allowEditIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Web_TakePhoto$vars"))());
vars.value.qualityInLocal = qualityIn;
vars.value.encodingTypeInLocal = encodingTypeIn;
vars.value.cameraDirectionInLocal = cameraDirectionIn;
vars.value.saveToGalleryInLocal = saveToGalleryIn;
vars.value.allowMultiplePhotosInLocal = allowMultiplePhotosIn;
vars.value.heightInLocal = heightIn;
vars.value.widthInLocal = widthIn;
vars.value.allowEditInLocal = allowEditIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var web_EditPhotoVar = new OS.DataTypes.VariableHolder();
var takePhotoJSJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("CameraPlugin.Web_TakePhoto$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.web_EditPhotoVar = web_EditPhotoVar;
varBag.takePhotoJSJSResult = takePhotoJSJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("V9Wy+OX3LkWhNT1FxwsQTQ:ZqjAppz3dECkoon2fsSOuA:/ClientActionFlows.ZqjAppz3dECkoon2fsSOuA:xvE1hyK4dV6tUHxcPhvv6A", "CameraPlugin", "Web_TakePhoto", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Fr30sVppukGS1VX7Slv6tQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:YGgCmFBEqk6_sG588GK27Q", callContext.id);
// Use this action to trigger the device's camera.
return controller.safeExecuteAsyncJSNode(CameraPlugin_controller_Web_TakePhoto_TakePhotoJSJS, "TakePhotoJS", "Web_TakePhoto", {
Height: OS.DataConversion.JSNodeParamConverter.to(vars.value.heightInLocal, OS.DataTypes.DataTypes.Integer),
Width: OS.DataConversion.JSNodeParamConverter.to(vars.value.widthInLocal, OS.DataTypes.DataTypes.Integer),
EncondingType: OS.DataConversion.JSNodeParamConverter.to((vars.value.encodingTypeInLocal).toString(), OS.DataTypes.DataTypes.Text),
CameraDirection: OS.DataConversion.JSNodeParamConverter.to(vars.value.cameraDirectionInLocal, OS.DataTypes.DataTypes.Integer),
SaveToGallery: OS.DataConversion.JSNodeParamConverter.to(vars.value.saveToGalleryInLocal, OS.DataTypes.DataTypes.Boolean),
IsMultiple: OS.DataConversion.JSNodeParamConverter.to(vars.value.allowMultiplePhotosInLocal, OS.DataTypes.DataTypes.Boolean),
Quality: OS.DataConversion.JSNodeParamConverter.to((vars.value.qualityInLocal).toString(), OS.DataTypes.DataTypes.Text),
ImageCaptured: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.BinaryData.defaultValue, OS.DataTypes.DataTypes.BinaryData),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("CameraPlugin.Web_TakePhoto$takePhotoJSJSResult"))();
jsNodeResult.imageCapturedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ImageCaptured, OS.DataTypes.DataTypes.BinaryData);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
takePhotoJSJSResult.value = results;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:cq7zDR8PbEexlKRv3Cgn6A", callContext.id) && takePhotoJSJSResult.value.successOut)) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:xOGMkreqR0mxiIkajvTBdQ", callContext.id) && vars.value.allowEditInLocal)) {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:yH6lg3iRik+XYJRr7wnvtA", callContext.id);
// Execute Action: Web_EditPhoto
return CameraPluginController.default.web_EditPhoto$Action(takePhotoJSJSResult.value.imageCapturedOut, callContext).then(function (value) {
web_EditPhotoVar.value = value;
}).then(function () {
// Editing Success?
if((OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:7kv2veWqGkqKfg35iHHIug", callContext.id) && web_EditPhotoVar.value.successOut)) {
// Image Output
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:A0fgwr9+YUCh_+a0tn+Hfg", callContext.id);
// ImageCaptured = Web_EditPhoto.OutputImage
outVars.value.imageCapturedOut = web_EditPhotoVar.value.outputImageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:A0fgwr9+YUCh_+a0tn+Hfg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = True
outVars.value.successOut = true;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:A0fgwr9+YUCh_+a0tn+Hfg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:A0fgwr9+YUCh_+a0tn+Hfg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:lW0dbNuO4kamQ70OOAyLVw", callContext.id);
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:e3smZUdhrE2fsJte283oCw", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:e3smZUdhrE2fsJte283oCw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Web_EditPhoto.Error.ErrorCode
outVars.value.errorOut.errorCodeAttr = web_EditPhotoVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:e3smZUdhrE2fsJte283oCw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Web_EditPhoto.Error.ErrorMessage
outVars.value.errorOut.errorMessageAttr = web_EditPhotoVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Y6jDUvB3fkWpPATuzfBO8A", callContext.id);
}

});
} else {
// AssignOutput
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Rcxw3GCoWUiAJOKYxnx4tA", callContext.id);
// ImageCaptured = TakePhotoJS.ImageCaptured
outVars.value.imageCapturedOut = takePhotoJSJSResult.value.imageCapturedOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Rcxw3GCoWUiAJOKYxnx4tA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = TakePhotoJS.Success
outVars.value.successOut = takePhotoJSJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Rcxw3GCoWUiAJOKYxnx4tA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = ""
outVars.value.errorOut.errorMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:Rcxw3GCoWUiAJOKYxnx4tA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorCode = 0
outVars.value.errorOut.errorCodeAttr = "0";
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:lW0dbNuO4kamQ70OOAyLVw", callContext.id);
}

});
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:CTiAGBMIEE2y1FBcZN3VBw", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:CTiAGBMIEE2y1FBcZN3VBw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = TakePhotoJS.ErrorCode
outVars.value.errorOut.errorCodeAttr = takePhotoJSJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:CTiAGBMIEE2y1FBcZN3VBw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = TakePhotoJS.ErrorMessage
outVars.value.errorOut.errorMessageAttr = takePhotoJSJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2ns4t2XDEEGMQzgZN9w1qg", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("Web_TakePhoto.Web_TakePhoto", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:5EMXjygE2ECo9jWNZPeLXg", callContext.id);
// Set error
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:viZu6CY_akadmq5D1BSyjg", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:viZu6CY_akadmq5D1BSyjg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorOut.errorMessageAttr = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:viZu6CY_akadmq5D1BSyjg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = -1
outVars.value.errorOut.errorCodeAttr = (-1).toString();
OutSystemsDebugger.handleBreakpoint("V9Wy+OX3LkWhNT1FxwsQTQ:2B4VJUFvSU+hgqycD_DE1w", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:ZqjAppz3dECkoon2fsSOuA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("V9Wy+OX3LkWhNT1FxwsQTQ:ZqjAppz3dECkoon2fsSOuA", callContext.id);
throw ex;

});
};
var controller = CameraPluginController.default;
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Web_TakePhoto$vars", [{
name: "Quality",
attrName: "qualityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "EncodingType",
attrName: "encodingTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CameraDirection",
attrName: "cameraDirectionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "SaveToGallery",
attrName: "saveToGalleryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AllowMultiplePhotos",
attrName: "allowMultiplePhotosInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Height",
attrName: "heightInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Width",
attrName: "widthInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "AllowEdit",
attrName: "allowEditInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Web_TakePhoto$takePhotoJSJSResult", [{
name: "ImageCaptured",
attrName: "imageCapturedOut",
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
CameraPluginController.default.constructor.registerVariableGroupType("CameraPlugin.Web_TakePhoto$outVars", [{
name: "ImageCaptured",
attrName: "imageCapturedOut",
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
}]);
CameraPluginController.default.clientActionProxies.web_TakePhoto$Action = function (qualityIn, encodingTypeIn, cameraDirectionIn, saveToGalleryIn, allowMultiplePhotosIn, heightIn, widthIn, allowEditIn) {
qualityIn = (qualityIn === undefined) ? 0 : qualityIn;
encodingTypeIn = (encodingTypeIn === undefined) ? 0 : encodingTypeIn;
cameraDirectionIn = (cameraDirectionIn === undefined) ? 0 : cameraDirectionIn;
saveToGalleryIn = (saveToGalleryIn === undefined) ? false : saveToGalleryIn;
allowMultiplePhotosIn = (allowMultiplePhotosIn === undefined) ? false : allowMultiplePhotosIn;
heightIn = (heightIn === undefined) ? 0 : heightIn;
widthIn = (widthIn === undefined) ? 0 : widthIn;
allowEditIn = (allowEditIn === undefined) ? false : allowEditIn;
return controller.executeActionInsideJSNode(CameraPluginController.default.web_TakePhoto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(qualityIn, OS.DataTypes.DataTypes.Integer), encodingTypeIn, cameraDirectionIn, OS.DataConversion.JSNodeParamConverter.from(saveToGalleryIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(allowMultiplePhotosIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(heightIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(widthIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(allowEditIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ImageCaptured: OS.DataConversion.JSNodeParamConverter.to(actionResults.imageCapturedOut, OS.DataTypes.DataTypes.BinaryData),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("CameraPlugin.controller$Web_TakePhoto.TakePhotoJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var params = {
    'facingMode': $parameters.CameraDirection == '2' ? 'user' : 'environment',
    'fileType': $parameters.EncondingType == '2' ? 'png' : 'jpeg',
    'quality': $parameters.Quality,
    'save': $parameters.SaveToGallery,
    'height': $parameters.Height,
    'width': $parameters.Width,
    'inBatch': $parameters.IsMultiple
}


function onSuccess (data) {
    var base64Index = data.indexOf(";base64,");
    var actualContent = data.substr(base64Index + 8);
    $parameters.ImageCaptured = actualContent;
    $parameters.Success = true;
    $resolve();
}

function onError (errorCode, errorMessage) {
    $parameters.ErrorCode = errorCode;
    $parameters.ErrorMessage = errorMessage;
    $parameters.Success = false;
    $parameters.ImageCaptured = '';
    $resolve();
}

async function startCamera() {
    var parent = document.getElementById('reactContainer'); 
    var camera = new WebCamera(params, parent, onSuccess, onError);
    await camera.open();
}

startCamera();
});
};
});

define("CameraPlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.controller$debugger"], function (exports, OutSystems, CameraPluginModel, CameraPlugin_Controller_debugger) {
var OS = OutSystems.Internal;
var CameraPluginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return CameraPluginController.default.defaultTimeout;
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
CameraPluginController.default = new Controller(null, "CameraPlugin");
});
define("CameraPlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"AnJtqFddMk2ix4LKYqWkWg": {
getter: function (varBag, idService) {
return varBag.vars.value.mediaTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ZhF2YWrWeUefzL7pevr8Jg": {
getter: function (varBag, idService) {
return varBag.vars.value.allowMultipleSelectionInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"s8VzaEEitkOhkRwaydZRhQ": {
getter: function (varBag, idService) {
return varBag.vars.value.includeMetadataInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6BszmS2BCEOeVdr+zhz7mA": {
getter: function (varBag, idService) {
return varBag.vars.value.allowEditInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"aU8xtEvC+kqyoFNMliokJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.limitInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"HWmiMAvGlkavfqNYU6Gulg": {
getter: function (varBag, idService) {
return varBag.outVars.value.mediaResultOut;
}
},
"SDWKFzxiOEqChmoRjPB6UA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"g9gDJTSM_kWYRb7h4qE5fg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"qmhi_BI8LUKvV0mdMVsf5g": {
getter: function (varBag, idService) {
return varBag.native_CheckCameraPluginVar.value;
}
},
"bQ0CB9ICi0SLDSA_VDUWEA": {
getter: function (varBag, idService) {
return varBag.getResultListVar.value;
}
},
"WLZUE8GlNU+s+sHh4ZZDmg": {
getter: function (varBag, idService) {
return varBag.chooseFromGalleryJSJSResult.value;
}
},
"KcqFzopTz0aczCLDQBOzCQ": {
getter: function (varBag, idService) {
return varBag.loadCSSJSResult.value;
}
},
"RBJlB+eib0SBotMa_cuXHw": {
getter: function (varBag, idService) {
return varBag.vars.value.singleMediaResultVar;
}
},
"mc7wi4aCMU+msaNVK6Abqw": {
getter: function (varBag, idService) {
return varBag.vars.value.allowEditInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"yc3vak6DFUSOYVvpw4TUJQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gJgDXtk4pkqG2RVqcCkP7Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"nMFsRZ10zkSF1g_eMx9pMQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.mediaResultListOut;
}
},
"Tcz+3B1VkU2+7QsYnw9jCQ": {
getter: function (varBag, idService) {
return varBag.web_EditPhotoVar.value;
}
},
"W9FoQrsckEay0+0Vrlp3Qg": {
getter: function (varBag, idService) {
return varBag.chooseJSResult.value;
}
},
"7+t8MoRYUkmyUJIX5znecg": {
getter: function (varBag, idService) {
return varBag.vars.value.cameraDirectionIntVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"K8jGOtbqZU6aVuLpNma3hg": {
getter: function (varBag, idService) {
return varBag.vars.value.encodingTypeIntVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"plAL8xYTxE+xvJ48BfsWvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.qualityInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"hZOF6oaOBEyvI0LvLHPUqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.widthInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Vqaf8dgEpkiyTM7yR+10IQ": {
getter: function (varBag, idService) {
return varBag.vars.value.heightInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"g3zpDMfvIUemtYhLeR2F1g": {
getter: function (varBag, idService) {
return varBag.vars.value.correctOrientationInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"PHwqjjGKPEOluSf3Tq8jUA": {
getter: function (varBag, idService) {
return varBag.vars.value.encodingTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Nxo31jANRECWME5zfcwEzQ": {
getter: function (varBag, idService) {
return varBag.vars.value.saveToGalleryInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"__B17+MSpU2iwayXUBFozw": {
getter: function (varBag, idService) {
return varBag.vars.value.cameraDirectionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"rtru7vOmoUy_WsFGG+n8tA": {
getter: function (varBag, idService) {
return varBag.vars.value.allowEditInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"VfIdxAcLt0W5+urGei4vIQ": {
getter: function (varBag, idService) {
return varBag.vars.value.includeMetadataInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"50Di69urmUSGONkYLDp1ZA": {
getter: function (varBag, idService) {
return varBag.outVars.value.mediaResultOut;
}
},
"Lgk2C98h6k2SXINSUp7Otg": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nX0DdwTF9ECKpCW4mUFIrQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"JfimlShxkEqO65c8tJFrPw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"T8cKoyg9_EaQCpf7HMXpbw": {
getter: function (varBag, idService) {
return varBag.native_CheckCameraPluginVar.value;
}
},
"Bw0Wyn3XSkqmgTWrewAiig": {
getter: function (varBag, idService) {
return varBag.deserialiseMediaResultVar.value;
}
},
"UpQuRHsbPU+_MWJG2CZIww": {
getter: function (varBag, idService) {
return varBag.takePhotoJSJSResult.value;
}
},
"dBV3V5acoEGl1feiL5ObdA": {
getter: function (varBag, idService) {
return varBag.vars.value.inputImageInLocal;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"XN1ijrl9nUW9_tih8dTy9g": {
getter: function (varBag, idService) {
return varBag.outVars.value.outputImageOut;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"5kTLXfIObU6eeqj9DqIL4g": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xwncZKsY8UmvesZ5vXGDxQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"SVbUh4px30a1DYq5x4r7tQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"ZocB2Ng3UkOmMT7n8tZHnA": {
getter: function (varBag, idService) {
return varBag.native_CheckCameraPluginVar.value;
}
},
"Az51xdqX60aDE4sojzAOjA": {
getter: function (varBag, idService) {
return varBag.editPhotoJSResult.value;
}
},
"8R+ffo3kgk+RTcBuALfiWA": {
getter: function (varBag, idService) {
return varBag.vars.value.inputImageInLocal;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"JN1fhJl4YEWvDVZmjWJfJQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.outputImageOut;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"7+0B5l0w3EalsQECR1fdlA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"u4F18wie6EaCx+u5aXQfYA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"bQXaWXzpAkKtny1PyhviUQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"Rs4bBn96QE2pqCaebrgQSQ": {
getter: function (varBag, idService) {
return varBag.native_EditPhotoVar.value;
}
},
"njPeIvzin0ySqp_V44B9TA": {
getter: function (varBag, idService) {
return varBag.checkCameraPluginVar.value;
}
},
"TzebYeXWj0uSAFhmg7AjZg": {
getter: function (varBag, idService) {
return varBag.web_EditPhotoVar.value;
}
},
"EoWT+6_oAEqcDDfmkTnoGg": {
getter: function (varBag, idService) {
return varBag.vars.value.uRIInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"l0mscABR3k+DrUSOSYCqvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.saveToGalleryInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"uPB_exzO9kmvavGIjTF3xQ": {
getter: function (varBag, idService) {
return varBag.vars.value.includeMetadataInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"C+ExtttM5UG74jJt+C1XHQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.mediaResultOut;
}
},
"64j1ghr2XkKO7uvd_dlj8w": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xXZRaU4YBkmmC984mEOdQg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"ir8O2WJhTU2gwNKrtVhs1A": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"j6irQ6rpCUu+Gxv5Jgv_Vw": {
getter: function (varBag, idService) {
return varBag.native_CheckCameraPluginVar.value;
}
},
"gXISDJzvI0qkjJvt_UpAQw": {
getter: function (varBag, idService) {
return varBag.deserialiseMediaResultVar.value;
}
},
"1QDDwQCfakWpxbLN8MQ5aQ": {
getter: function (varBag, idService) {
return varBag.editURIPhotoJSJSResult.value;
}
},
"ppPjEWQub0aypAQUoFkxHw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"CGZOweFsfkqYa1aGfMNQ_w": {
getter: function (varBag, idService) {
return varBag.outVars.value.isPWAOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0VutjKlVSEOs6NcRDUsECg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"c3mbrE6Xb0+SjaIHKeOZRA": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"QAq9BM5WW0K1UYRR0jRs7g": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"6AKGNCbyZk2FlFwly0LL4A": {
getter: function (varBag, idService) {
return varBag.native_CheckCameraPluginVar.value;
}
},
"oqib7YKFHE6KRDCWSX235Q": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"CGwfYlT_0U2xnnHLl6VX8w": {
getter: function (varBag, idService) {
return varBag.checkMediaAPIJSResult.value;
}
},
"wiFG+wRFpkafR1A46XDfBw": {
getter: function (varBag, idService) {
return varBag.vars.value.saveToGalleryInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"KozVR2khhECgNYdC7CNGOA": {
getter: function (varBag, idService) {
return varBag.vars.value.includeMetadataInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0XnRICU+PEOp6FnQDBVGuQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isPersistentInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2Q8GWkh1GECbZ1yyrNKQqQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"F+aQkFAzz0+Us1ejdJqDfQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FbYbuATgb0iIwKq2kC0mLg": {
getter: function (varBag, idService) {
return varBag.outVars.value.mediaResultOut;
}
},
"3YUvZAC7o0+ku92ScjjZmw": {
getter: function (varBag, idService) {
return varBag.native_CheckCameraPluginVar.value;
}
},
"Ju9RNtAcMEuNcazaNy4Mpg": {
getter: function (varBag, idService) {
return varBag.deserialiseMediaResultVar.value;
}
},
"vwkdiO1_bUWepKUZ9NU+jw": {
getter: function (varBag, idService) {
return varBag.recordVideoJSJSResult.value;
}
},
"c2KsC+FWg0+qcuE7QAk1tA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5YJZo0mk2EOuPyJRSWH+fQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"gSm5E9kN70WhzizCgSZ0xQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.warningOut;
}
},
"8usVJB6uTkWWRMGT3s2FbQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"gVdpLnSCKUKxB3WXsk_6WQ": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"CA63_dtqbU6_VcKNMdAuCQ": {
getter: function (varBag, idService) {
return varBag.isPluginAvailableJSJSResult.value;
}
},
"+YWHlVmi2EmM7mmAuzLyvw": {
getter: function (varBag, idService) {
return varBag.vars.value.uRIInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"akOE+qV0GkOv8Gw_yG3N5Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"sPOiybjkNUySSh8SzMog3w": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"1FfTl2X+CEyoh4BeZchO+A": {
getter: function (varBag, idService) {
return varBag.native_CheckCameraPluginVar.value;
}
},
"pOHOr8KJ5kWe9erjj8iK3w": {
getter: function (varBag, idService) {
return varBag.playVideoJSJSResult.value;
}
},
"V2Z2fwaHXU2cXtEVQfNBog": {
getter: function (varBag, idService) {
return varBag.vars.value.inputImageInLocal;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"ItO00BYYikGJGAH+3oFGRA": {
getter: function (varBag, idService) {
return varBag.outVars.value.outputImageOut;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"z2uUAbgBhE+G5O77uSzzvQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"u5XL67l6n0WV8qibjei7hg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"3AsU44B+NkyP__ebrfmm8Q": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"vJQ7fV8xOEC3+pWA2NTt5A": {
getter: function (varBag, idService) {
return varBag.editImageJSJSResult.value;
}
},
"79WqgA6uvUK_HgQ1ZWcP6A": {
getter: function (varBag, idService) {
return varBag.vars.value.qualityInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ZKoWCbJtw0iyajHHb7uBjQ": {
getter: function (varBag, idService) {
return varBag.vars.value.encodingTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"0T5BWv3P5Em9N3oCaMSF6w": {
getter: function (varBag, idService) {
return varBag.vars.value.cameraDirectionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"7_Wlf0Qe1022kKN7bjAiTA": {
getter: function (varBag, idService) {
return varBag.vars.value.saveToGalleryInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gTvAKxrA6UOHT+7AYplGfg": {
getter: function (varBag, idService) {
return varBag.vars.value.allowMultiplePhotosInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"N2SE3aPYG0uMXuM7qAXRtQ": {
getter: function (varBag, idService) {
return varBag.vars.value.heightInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"m+GDYWDaBEmPuBIQ8b4sow": {
getter: function (varBag, idService) {
return varBag.vars.value.widthInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"mUvEW4VP+UK1RiwF6MMdaw": {
getter: function (varBag, idService) {
return varBag.vars.value.allowEditInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"x50A7x7JgESh82duKSxy2w": {
getter: function (varBag, idService) {
return varBag.outVars.value.imageCapturedOut;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"cMMdz29agUe+U7L7T1Ex1A": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"h3FDiR+XfUGL588hJG51Iw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"5EMXjygE2ECo9jWNZPeLXg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"yH6lg3iRik+XYJRr7wnvtA": {
getter: function (varBag, idService) {
return varBag.web_EditPhotoVar.value;
}
},
"YGgCmFBEqk6_sG588GK27Q": {
getter: function (varBag, idService) {
return varBag.takePhotoJSJSResult.value;
}
},
"1uIyrXXmcky4qKD0c7Rx7g": {
getter: function (varBag, idService) {
return varBag.vars.value.uRIInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Q5y8qw04ykC03TtjTu47Vg": {
getter: function (varBag, idService) {
return varBag.vars.value.saveToGalleryInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"I2Ry3TwcJE6i4Zr9vjSP3A": {
getter: function (varBag, idService) {
return varBag.vars.value.includeMetadataInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5mibXO49dEC60nFAw6gD5A": {
getter: function (varBag, idService) {
return varBag.outVars.value.mediaResultOut;
}
},
"UsvJO_YLTkWCk3pztfhuEg": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"eUY9+DZu40qLyBzJw7Frog": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"YXAlGESvZUGEtCx_MieN1g": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"DdrVXBfyEkCNFwUIwBckBA": {
getter: function (varBag, idService) {
return varBag.native_EditURIPhotoVar.value;
}
},
"dkAQ2V7iV0e0vWyfP3Fmsw": {
getter: function (varBag, idService) {
return varBag.checkCameraPluginVar.value;
}
},
"bmbaXHX_BU6SYO7WozeXEw": {
getter: function (varBag, idService) {
return varBag.vars.value.qualityInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"CLXm6eq2okKh2KkKO44JjQ": {
getter: function (varBag, idService) {
return varBag.vars.value.widthInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"BPOMW8pkw0Okn9bBmcMLUw": {
getter: function (varBag, idService) {
return varBag.vars.value.heightInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"KKd4NA6p20ye2kXHBwW+_A": {
getter: function (varBag, idService) {
return varBag.vars.value.correctOrientationInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"g64PUNmSkEm6Ad7taC5S7g": {
getter: function (varBag, idService) {
return varBag.vars.value.encodingTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"r9GdHlpAnUSE0wRxea+WkQ": {
getter: function (varBag, idService) {
return varBag.vars.value.saveToGalleryInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ED6qQj1UNkuwlgEWY+xExg": {
getter: function (varBag, idService) {
return varBag.vars.value.cameraDirectionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"t24TO3uSKkGxVTHLh3iQGQ": {
getter: function (varBag, idService) {
return varBag.vars.value.allowEditInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BPg15e8G80O2BYGVI0giAA": {
getter: function (varBag, idService) {
return varBag.vars.value.allowMultiplePhotosInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2K4UTtCJQ0Wc3gxTF+cb6w": {
getter: function (varBag, idService) {
return varBag.vars.value.includeMetadataInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"B8iE8Ll2nEKOvLNxplZFiw": {
getter: function (varBag, idService) {
return varBag.outVars.value.mediaResultOut;
}
},
"ERRUBstpKkKtas0LrCmJOw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ZxFO+ltQaUmOjKdxzmCgrQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"LgtaXh5vnUSCn1752BAqPw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"PpJPdD1hh06sQlXivMUKOA": {
getter: function (varBag, idService) {
return varBag.web_TakePhotohotoVar.value;
}
},
"sCCKfalBPUe1eaKSG_tl_g": {
getter: function (varBag, idService) {
return varBag.checkCameraPluginVar.value;
}
},
"w7Xvq5aZ5E+WgUdtWJ8_2A": {
getter: function (varBag, idService) {
return varBag.native_TakePhotoVar.value;
}
},
"Ykb_WSnVZUuKz_3BJi0MnQ": {
getter: function (varBag, idService) {
return varBag.vars.value.mediaTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"4YSt1TVrBESfOA2nQunU_A": {
getter: function (varBag, idService) {
return varBag.vars.value.allowMultipleSelectionInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"JD5CpnBQv0KpCV3H9g5p_w": {
getter: function (varBag, idService) {
return varBag.vars.value.includeMetadataInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"18z3tfHnRkabyFD4YveW1Q": {
getter: function (varBag, idService) {
return varBag.vars.value.allowEditInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Rnn6kRUL+0amdWvbcV2VMg": {
getter: function (varBag, idService) {
return varBag.vars.value.limitInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"7qJsDY_MF0S9OpdZQsuRxQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.mediaResultOut;
}
},
"eO54z7AYv0WMIpusVeXTyQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"OjxtEf3SZEa5VgtR+uHLow": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"6OpHKrsmFU+EPrjFJzk95Q": {
getter: function (varBag, idService) {
return varBag.checkCameraPluginVar.value;
}
},
"uQoJvxs1iUKLvWEX9O0FnQ": {
getter: function (varBag, idService) {
return varBag.web_ChooseFromGalleryVar.value;
}
},
"9d6Tv2oddEGwmkLHRv57RQ": {
getter: function (varBag, idService) {
return varBag.native_ChooseFromGalleryVar.value;
}
},
"T6o70uM7xkWouQ8mU69w3w": {
getter: function (varBag, idService) {
return varBag.vars.value.saveToGalleryInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"qz1WXEdPnkuhXFj8UEm_gw": {
getter: function (varBag, idService) {
return varBag.vars.value.includeMetadataInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FgY9ApxJPkCFoGr4sNStwA": {
getter: function (varBag, idService) {
return varBag.vars.value.isPersistentInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nnh7tkS5CkCw07pnrouQnQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"3zK+7yLyt0SVwL7GLDW3_g": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"uTkW76bdxU2sqD78EpT6Og": {
getter: function (varBag, idService) {
return varBag.outVars.value.mediaResultOut;
}
},
"LKJBCPZl_0mtobe12GQoeg": {
getter: function (varBag, idService) {
return varBag.checkCameraPluginVar.value;
}
},
"c0+za4S4+0+5fvXJIO2hmg": {
getter: function (varBag, idService) {
return varBag.native_RecordVideoVar.value;
}
},
"forPmde70UCJ2ZfhHEEcBw": {
getter: function (varBag, idService) {
return varBag.vars.value.uRIInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Qg1xY30Av0yJ7DwaXv5RyQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"AnJxwm9EYECEO4m6A3DnNw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"vbWnaFg0gUGm+dHS7jOTfg": {
getter: function (varBag, idService) {
return varBag.native_PlayVideoVar.value;
}
},
"D2dkxw4hMk+ze+L+5MUYqw": {
getter: function (varBag, idService) {
return varBag.checkCameraPluginVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
