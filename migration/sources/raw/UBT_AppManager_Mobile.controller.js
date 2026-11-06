define("UBT_AppManager_Mobile.controller$AppManager_Mobile_OnAfterLogin", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "PrivacyScreenPlugin.controller", "UBT_AppManager_CS.model", "PrivacyScreenPlugin.controller$EnablePrivacyScreen", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$PrivacyScreenPlugin", "UBT_AppManager_Mobile.controller$Firebase_CrashAnalytics_SetUser", "PrivacyScreenPlugin.controller$DisablePrivacyScreen", "PrivacyScreenPlugin.controller$CheckPrivacyScreenPlugin", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, PrivacyScreenPluginController, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.appManager_Mobile_OnAfterLogin$Action = function (appManager_ClientConfigIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.AppManager_Mobile_OnAfterLogin$vars"))());
vars.value.appManager_ClientConfigInLocal = appManager_ClientConfigIn.clone();
var checkPrivacyScreenPluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkPrivacyScreenPluginVar = checkPrivacyScreenPluginVar;
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:7M5gd_G_sE6lpv23mOcfRw:/ClientActionFlows.7M5gd_G_sE6lpv23mOcfRw:hY5NnZ2N5+VTCRm9Jpt_5g", "UBT_AppManager_Mobile", "AppManager_Mobile_OnAfterLogin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:Zn02gFM1uEy6zPcrelt4rA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:U_kwgfDs10eeSH4+Ac80hg", callContext.id);
// Execute Action: Firebase_CrashAnalytics_SetUser
return UBT_AppManager_MobileController.default.firebase_CrashAnalytics_SetUser$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:qWQW15ryW0qh3MYNWxK1iA", callContext.id);
// Execute Action: CheckPrivacyScreenPlugin
checkPrivacyScreenPluginVar.value = PrivacyScreenPluginController.default.checkPrivacyScreenPlugin$Action(callContext);

}).then(function () {
// Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:xGKJUb6UHUOTzSRM6fHhTQ", callContext.id) && checkPrivacyScreenPluginVar.value.isAvailableOut)) {
// Use privacy screen plugin?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:nnpwaCJNUE+4JuBHfwnv2g", callContext.id) && vars.value.appManager_ClientConfigInLocal.appManager_ClientCacheAttr.pluginUse_PrivacyScreenAttr)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:V_2bFOuN5kig3E41Ac_h1A", callContext.id);
// Execute Action: EnablePrivacyScreen
return PrivacyScreenPluginController.default.enablePrivacyScreen$Action(callContext);
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:eEE_xsCw90SgKlrCDsGYiw", callContext.id);
// Execute Action: DisablePrivacyScreen
return PrivacyScreenPluginController.default.disablePrivacyScreen$Action(callContext);
}

}).then(function () {
// <<
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:NSLC3gvt9kOQst6gEMAFWg", callContext.id);
});
}

});
}).then(function () {
// <<
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:1tCReAerW0y++apsowbGtA", callContext.id);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:qn+YVQqX6kmm6Ap51uLmbA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:7M5gd_G_sE6lpv23mOcfRw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:7M5gd_G_sE6lpv23mOcfRw", callContext.id);
throw ex;

});
};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.AppManager_Mobile_OnAfterLogin$vars", [{
name: "AppManager_ClientConfig",
attrName: "appManager_ClientConfigInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_ConfigClientRec();
},
complexType: UBT_AppManager_CSModel.AppManager_ConfigClientRec
}]);
UBT_AppManager_MobileController.default.clientActionProxies.appManager_Mobile_OnAfterLogin$Action = function (appManager_ClientConfigIn) {
appManager_ClientConfigIn = (appManager_ClientConfigIn === undefined) ? new UBT_AppManager_CSModel.AppManager_ConfigClientRec() : appManager_ClientConfigIn;
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.appManager_Mobile_OnAfterLogin$Action.bind(controller, appManager_ClientConfigIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager_Mobile.controller$AppManager_Mobile_OnAppReady", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "UBT_AppManager.controller", "AppInsightsConnector_Mobile.controller", "UBT_AppManager_CS.model", "AppVersionPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "InAppBrowserPlugin.controller", "UBT_AppManager.model", "UBT_AppManager_Mobile.controller$AppManager_Mobile_OnAppReady.Set_MobileOnAfterLoginJS", "UBT_AppManager.controller$AppManager_SetFunction_MobileAfterLogin", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager", "AppInsightsConnector_Mobile.controller$SetupApplicationInsights_Mobile", "UBT_AppManager_Mobile.referencesHealth$AppInsightsConnector_Mobile", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_SynchAppContext", "UBT_AppManager.controller$AppManager_OutSystemsFixes", "UBT_AppManager_Mobile.controller$DeviceInfo_GetStreamlineInfo", "UBT_AppManager_Mobile.controller$DeviceInfo_GetFCMToken", "AppVersionPlugin.controller$GetVersionNumber", "UBT_AppManager_Mobile.referencesHealth$AppVersionPlugin", "CommonPlugin.controller$IsCordovaDefined", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin", "UBT_AppManager.controller$AppManager_SetPIN_FingerprintReaderAvailable", "UBT_AppManager.controller$AppManager_InitializeWebComponents_Priority", "CommonPlugin.model$ErrorRec", "InAppBrowserPlugin.controller$CheckInAppBrowserPlugin", "UBT_AppManager_Mobile.referencesHealth$InAppBrowserPlugin", "UBT_AppManager_Mobile.controller$AppManager_Mobile_OnAfterLogin", "UBT_AppManager.model$PIN_FingerprintAvailableCallback_ResponseRec", "UBT_AppManager_Mobile.controller$Fingerprint_FingerprintAvailable", "UBT_AppManager.controller$AppManager_SetStreamlineTOTPCallback", "UBT_AppManager.controller$AppManager_InitializeWebComponents", "UBT_AppManager_Mobile.controller$FCM_Initialize", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager.controller$AppManager_SetDeviceContext", "UBT_AppManager_Mobile.controller$DeviceInfo_GetUUID", "UBT_AppManager_Mobile.controller$Streamline_GetTOTP"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, UBT_AppManagerController, AppInsightsConnector_MobileController, UBT_AppManager_CSModel, AppVersionPluginController, CommonPluginController, CommonPluginModel, InAppBrowserPluginController, UBT_AppManagerModel, UBT_AppManager_Mobile_controller_AppManager_Mobile_OnAppReady_Set_MobileOnAfterLoginJS) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.appManager_Mobile_OnAppReady$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.AppManager_Mobile_OnAppReady$vars"))());
var appManager_SynchAppContextVar = new OS.DataTypes.VariableHolder();
var deviceInfo_GetStreamlineInfoVar = new OS.DataTypes.VariableHolder();
var deviceInfo_GetFCMTokenVar = new OS.DataTypes.VariableHolder();
var getVersionNumberVar = new OS.DataTypes.VariableHolder();
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var checkInAppBrowserPluginVar = new OS.DataTypes.VariableHolder();
var fingerprint_FingerprintAvailableVar = new OS.DataTypes.VariableHolder();
var deviceInfo_GetUUIDVar = new OS.DataTypes.VariableHolder();
var set_MobileOnAfterLoginJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_SynchAppContextVar = appManager_SynchAppContextVar;
varBag.deviceInfo_GetStreamlineInfoVar = deviceInfo_GetStreamlineInfoVar;
varBag.deviceInfo_GetFCMTokenVar = deviceInfo_GetFCMTokenVar;
varBag.getVersionNumberVar = getVersionNumberVar;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.checkInAppBrowserPluginVar = checkInAppBrowserPluginVar;
varBag.fingerprint_FingerprintAvailableVar = fingerprint_FingerprintAvailableVar;
varBag.deviceInfo_GetUUIDVar = deviceInfo_GetUUIDVar;
varBag.set_MobileOnAfterLoginJSResult = set_MobileOnAfterLoginJSResult;
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:iMOhlyIJE029BItRvhF_Nw:/ClientActionFlows.iMOhlyIJE029BItRvhF_Nw:+Zfx9UHEjY1UMj2dfWkXPA", "UBT_AppManager_Mobile", "AppManager_Mobile_OnAppReady", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:SQfrB+sUAUyAC1L1zN9J7A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:NaI7IDDqE0yxvhX_Ju8nSw", callContext.id);
// Execute Action: AppManager_SynchAppContext
return UBT_AppManagerController.default.appManager_SynchAppContext$Action(callContext).then(function (value) {
appManager_SynchAppContextVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:WE29KBTB0k6vCBOvoMzrkA", callContext.id);
// AppManager_MobileContext.PackageName = AppManager_SynchAppContext.Config.AppManager_ClientCache.PackageName
vars.value.appManager_MobileContextVar.packageNameAttr = appManager_SynchAppContextVar.value.configOut.appManager_ClientCacheAttr.packageNameAttr;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:jnuhZdytCEqasgNc3fu3Lg", callContext.id);
// Execute Action: AppManager_InitializeWebComponents_Priority
UBT_AppManagerController.default.appManager_InitializeWebComponents_Priority$Action(callContext);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:ejPFQ3TpZESXo+wGeNNetg", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:r6iXoMQXgk6iLPQZl4pNxw", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:4cIYsURtRUuMKvW65FmQpw", callContext.id);
set_MobileOnAfterLoginJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_Mobile_controller_AppManager_Mobile_OnAppReady_Set_MobileOnAfterLoginJS, "Set_MobileOnAfterLogin", "AppManager_Mobile_OnAppReady", {
Function_OnAfterLogin: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Function_StreamlineTOTPCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.AppManager_Mobile_OnAppReady$set_MobileOnAfterLoginJSResult"))();
jsNodeResult.function_OnAfterLoginOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Function_OnAfterLogin, OS.DataTypes.DataTypes.Object);
jsNodeResult.function_StreamlineTOTPCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Function_StreamlineTOTPCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
AppManager_Mobile_OnAfterLogin: UBT_AppManager_MobileController.default.getClientActionProxies(controller).appManager_Mobile_OnAfterLogin$Action,
Streamline_GetTOTP: UBT_AppManager_MobileController.default.getClientActionProxies(controller).streamline_GetTOTP$Action
}, {});
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:+LDuAuyRYkqRvOEcd3G+kA", callContext.id);
// Execute Action: AppManager_SetFunction_MobileAfterLogin
UBT_AppManagerController.default.appManager_SetFunction_MobileAfterLogin$Action(set_MobileOnAfterLoginJSResult.value.function_OnAfterLoginOut, callContext);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:tud0wLVFGUqyyfb2QLioCg", callContext.id);
// Execute Action: AppManager_SetStreamlineTOTPCallback
UBT_AppManagerController.default.appManager_SetStreamlineTOTPCallback$Action(set_MobileOnAfterLoginJSResult.value.function_StreamlineTOTPCallbackOut, callContext);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:1dEgcRqnuE2OuXVbd3ITkQ", callContext.id);
// Execute Action: CheckInAppBrowserPlugin
checkInAppBrowserPluginVar.value = InAppBrowserPluginController.default.checkInAppBrowserPlugin$Action(callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:Yer228KmjkevT5byA8EkCQ", callContext.id);
// Execute Action: DeviceInfo_GetUUID
deviceInfo_GetUUIDVar.value = UBT_AppManager_MobileController.default.deviceInfo_GetUUID$Action(callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:SFJHtZf420il95nAYgb+6g", callContext.id);
// AppManager_MobileContext.isNativeDevice = True
vars.value.appManager_MobileContextVar.isNativeDeviceAttr = true;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:SFJHtZf420il95nAYgb+6g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AppManager_MobileContext.UUID = DeviceInfo_GetUUID.UUID
vars.value.appManager_MobileContextVar.uUIDAttr = deviceInfo_GetUUIDVar.value.uUIDOut;
// Use FCM?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:YmVrWKgCskK6QD8jsWjyCQ", callContext.id) && appManager_SynchAppContextVar.value.configOut.firebase_CloudMessage_UseAttr)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:IIqv1uhU0kudBPvuQ0WbGw", callContext.id);
// Execute Action: FCM_Initialize
UBT_AppManager_MobileController.default.fCM_Initialize$Action(callContext);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:T+C2MEI2Mk6yqK0pGTyqZw", callContext.id);
// Execute Action: DeviceInfo_GetFCMToken
return UBT_AppManager_MobileController.default.deviceInfo_GetFCMToken$Action(callContext).then(function (value) {
deviceInfo_GetFCMTokenVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:T0yh5VpZdEOLL6ckikzrRg", callContext.id);
// AppManager_MobileContext.FCMToken = DeviceInfo_GetFCMToken.Token
vars.value.appManager_MobileContextVar.fCMTokenAttr = deviceInfo_GetFCMTokenVar.value.tokenOut;
});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:gZeLLweddk+oTiptDqVPTA", callContext.id);
// Execute Action: DeviceInfo_GetStreamlineInfo
return UBT_AppManager_MobileController.default.deviceInfo_GetStreamlineInfo$Action(callContext).then(function (value) {
deviceInfo_GetStreamlineInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:qLLmb1zqr02hZ5JcStgN+g", callContext.id);
// AppManager_MobileContext.Streamline_IsInstalled = DeviceInfo_GetStreamlineInfo.IsStreamlineInstalled
vars.value.appManager_MobileContextVar.streamline_IsInstalledAttr = deviceInfo_GetStreamlineInfoVar.value.isStreamlineInstalledOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:qLLmb1zqr02hZ5JcStgN+g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AppManager_MobileContext.Streamline_SerialNumber = DeviceInfo_GetStreamlineInfo.SerialNumber
vars.value.appManager_MobileContextVar.streamline_SerialNumberAttr = deviceInfo_GetStreamlineInfoVar.value.serialNumberOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:REhtO6dn2E2bqp9XYR6oAw", callContext.id);
// Execute Action: GetVersionNumber
getVersionNumberVar.value = AppVersionPluginController.default.getVersionNumber$Action(callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:VQrcGKlVjkiTjIQQ98Zf7A", callContext.id);
// AppManager_MobileContext.MobileBuild = GetVersionNumber.Build
vars.value.appManager_MobileContextVar.mobileBuildAttr = getVersionNumberVar.value.buildOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:VQrcGKlVjkiTjIQQ98Zf7A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AppManager_MobileContext.MobileVersion = GetVersionNumber.Version
vars.value.appManager_MobileContextVar.mobileVersionAttr = getVersionNumberVar.value.versionOut;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:yBlDZ7Cic0yTREyyDnpb4A", callContext.id) && appManager_SynchAppContextVar.value.configOut.appManager_ClientCacheAttr.azureInsights_UseAttr)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:7uxMDunxOU675h9k5BiKlA", callContext.id);
// Execute Action: SetupApplicationInsights_Mobile
return AppInsightsConnector_MobileController.default.setupApplicationInsights_Mobile$Action(appManager_SynchAppContextVar.value.configOut.azureInsights_ConnectionStringAttr, callContext);
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:0V_h2fpksUmJ556LuxY4MA", callContext.id);
// Execute Action: AppManager_SetDeviceContext
UBT_AppManagerController.default.appManager_SetDeviceContext$Action(vars.value.appManager_MobileContextVar, callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:p5bm19huv0CsuMgWDJWy1A", callContext.id) && appManager_SynchAppContextVar.value.configOut.appManager_ClientCacheAttr.pIN_EnableFingerprintAttr)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:i+CdcWZJskaQn3bvUkTL1g", callContext.id);
// Execute Action: Fingerprint_FingerprintAvailable
return UBT_AppManager_MobileController.default.fingerprint_FingerprintAvailable$Action(callContext).then(function (value) {
fingerprint_FingerprintAvailableVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:3X1sAsAXOEqeAYKcREUV4Q", callContext.id) && fingerprint_FingerprintAvailableVar.value.pIN_FingerprintAvailableCallback_ResponseOut.isAvailableAttr)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:MhHAS2kp+ky7rBaJuVAcFA", callContext.id);
// Execute Action: AppManager_SetPIN_FingerprintReaderAvailable
UBT_AppManagerController.default.appManager_SetPIN_FingerprintReaderAvailable$Action(true, callContext);
}

// <<
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:awrByllfJE2B_axqbpOzHw", callContext.id);
});
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:3xwncfqQzEyGrZikf_zE7Q", callContext.id);
// Execute Action: AppManager_Mobile_OnAfterLogin
return UBT_AppManager_MobileController.default.appManager_Mobile_OnAfterLogin$Action(appManager_SynchAppContextVar.value.configOut, callContext);
});
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:Y2BKz+2Q60KTLOm6EcexTg", callContext.id);
// Execute Action: AppManager_InitializeWebComponents
return UBT_AppManagerController.default.appManager_InitializeWebComponents$Action(appManager_SynchAppContextVar.value.configOut, callContext);
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:W1pDHUrXBk6cupqljOTDww", callContext.id) && appManager_SynchAppContextVar.value.configOut.appManager_ClientCacheAttr.enableFrameworkExtensionAttr)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:nHLiLvlnG0qUkjRaoiehdQ", callContext.id);
// Execute Action: AppManager_OutSystemsFixes
UBT_AppManagerController.default.appManager_OutSystemsFixes$Action(callContext);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:h1pXBqtezkKdiwbQE++v8g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:h1pXBqtezkKdiwbQE++v8g", callContext.id);
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:iMOhlyIJE029BItRvhF_Nw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:iMOhlyIJE029BItRvhF_Nw", callContext.id);
throw ex;

});
};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.AppManager_Mobile_OnAppReady$vars", [{
name: "AppManager_MobileContext",
attrName: "appManager_MobileContextVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_DeviceContextRec();
},
complexType: UBT_AppManager_CSModel.AppManager_DeviceContextRec
}]);
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.AppManager_Mobile_OnAppReady$set_MobileOnAfterLoginJSResult", [{
name: "Function_OnAfterLogin",
attrName: "function_OnAfterLoginOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Function_StreamlineTOTPCallback",
attrName: "function_StreamlineTOTPCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManager_MobileController.default.clientActionProxies.appManager_Mobile_OnAppReady$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.appManager_Mobile_OnAppReady$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager_Mobile.controller$AppManager_Mobile_OnAppReady.Set_MobileOnAfterLoginJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Function_OnAfterLogin = $actions.AppManager_Mobile_OnAfterLogin;
$parameters.Function_StreamlineTOTPCallback = $actions.Streamline_GetTOTP
};
});

define("UBT_AppManager_Mobile.controller$DeviceInfo_GetFCMToken", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller", "NetworkDetection.controller", "CommonPlugin.model$ErrorRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin", "FirebaseCloudMessagingPlugin.controller$CheckCloudMessagingPlugin", "UBT_AppManager_Mobile.referencesHealth$FirebaseCloudMessagingPlugin", "FirebaseCloudMessagingPlugin.controller$RegisterDevice", "FirebaseCloudMessagingPlugin.controller$GetToken", "NetworkDetection.controller$CheckNetworkCommunication", "UBT_AppManager_Mobile.referencesHealth$NetworkDetection"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, CommonPluginModel, FirebaseCloudMessagingPluginController, NetworkDetectionController) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.deviceInfo_GetFCMToken$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkCloudMessagingPluginVar = new OS.DataTypes.VariableHolder();
var registerDeviceVar = new OS.DataTypes.VariableHolder();
var getToken2Var = new OS.DataTypes.VariableHolder();
var checkNetworkCommunicationVar = new OS.DataTypes.VariableHolder();
var getTokenVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.DeviceInfo_GetFCMToken$outVars"))());
varBag.callContext = callContext;
varBag.checkCloudMessagingPluginVar = checkCloudMessagingPluginVar;
varBag.registerDeviceVar = registerDeviceVar;
varBag.getToken2Var = getToken2Var;
varBag.checkNetworkCommunicationVar = checkNetworkCommunicationVar;
varBag.getTokenVar = getTokenVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:s+sK8YkwCU+7q++xVxwQ2w:/ClientActionFlows.s+sK8YkwCU+7q++xVxwQ2w:GQW7INFnyngzsnqW9eOfpQ", "UBT_AppManager_Mobile", "DeviceInfo_GetFCMToken", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:DtmoYkEFUkaxfedc8W3Zkg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:laeXSyajlkuXeIvCKfGajA", callContext.id);
// Execute Action: CheckNetworkCommunication
return NetworkDetectionController.default.checkNetworkCommunication$Action(true, callContext).then(function (value) {
checkNetworkCommunicationVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:jBHfsZIv6UK4yRgU+yqvWg", callContext.id) && checkNetworkCommunicationVar.value.isOnlineOut)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:RZ5cO34KpEyyYUZb7LPjRQ", callContext.id);
// Execute Action: CheckCloudMessagingPlugin
checkCloudMessagingPluginVar.value = FirebaseCloudMessagingPluginController.default.checkCloudMessagingPlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:bNzTqxMtYEe3ezG9Z6B2bg", callContext.id) && checkCloudMessagingPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:JfQ1S+ufl0GAuRxvPhLWmg", callContext.id);
// Execute Action: GetToken2
return FirebaseCloudMessagingPluginController.default.getToken$Action(callContext).then(function (value) {
getToken2Var.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:+jj80pvRNUiKV676aiP8JQ", callContext.id) && (getToken2Var.value.successOut && ((getToken2Var.value.tokenOut) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:Zq1d2Pt5xUGP5eV6B5HUfQ", callContext.id);
// Token = GetToken2.Token
outVars.value.tokenOut = getToken2Var.value.tokenOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:QVRS5xrf5U6+f8m5ygNrAw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:hpkuPCI0BEOh5DbdlnZDDg", callContext.id);
// Execute Action: RegisterDevice
return FirebaseCloudMessagingPluginController.default.registerDevice$Action(callContext).then(function (value) {
registerDeviceVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:5jAj0XhLvEiWNFAuaopgyA", callContext.id);
// Execute Action: GetToken
return FirebaseCloudMessagingPluginController.default.getToken$Action(callContext).then(function (value) {
getTokenVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:mliI1gzstEqch6OPom6fWg", callContext.id);
// Token = GetToken.Token
outVars.value.tokenOut = getTokenVar.value.tokenOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:QVRS5xrf5U6+f8m5ygNrAw", callContext.id);
});
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:QVRS5xrf5U6+f8m5ygNrAw", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:upDUIi9K1U+J+Csfklzzzw", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:s+sK8YkwCU+7q++xVxwQ2w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:s+sK8YkwCU+7q++xVxwQ2w", callContext.id);
throw ex;

});
};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.DeviceInfo_GetFCMToken$outVars", [{
name: "Token",
attrName: "tokenOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManager_MobileController.default.clientActionProxies.deviceInfo_GetFCMToken$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.deviceInfo_GetFCMToken$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Token: OS.DataConversion.JSNodeParamConverter.to(actionResults.tokenOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager_Mobile.controller$DeviceInfo_GetStreamlineInfo", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "UBT_AppManager_Mobile.controller$Streamline_GetSerialNumber"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.deviceInfo_GetStreamlineInfo$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var streamline_GetSerialNumberVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.DeviceInfo_GetStreamlineInfo$outVars"))());
varBag.callContext = callContext;
varBag.streamline_GetSerialNumberVar = streamline_GetSerialNumberVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:w5imDZOuMU2VPW613AgSow:/ClientActionFlows.w5imDZOuMU2VPW613AgSow:z0iabceo_YgGg_PKImf5mw", "UBT_AppManager_Mobile", "DeviceInfo_GetStreamlineInfo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:vKk8hLlemUaexMB8k5QhnQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:DhpQtU+RXUCqW2h6PumCxw", callContext.id);
// Execute Action: Streamline_GetSerialNumber
return UBT_AppManager_MobileController.default.streamline_GetSerialNumber$Action(callContext).then(function (value) {
streamline_GetSerialNumberVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:IZjo093rzUu1aRcb2AteRA", callContext.id) && ((streamline_GetSerialNumberVar.value.serialNumberOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:7pdsGLVWnEycSNWbdud_sw", callContext.id);
// IsStreamlineInstalled = True
outVars.value.isStreamlineInstalledOut = true;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:7pdsGLVWnEycSNWbdud_sw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SerialNumber = Streamline_GetSerialNumber.SerialNumber
outVars.value.serialNumberOut = streamline_GetSerialNumberVar.value.serialNumberOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:dJcZDBZOSECgvPt8n4Aj9A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:9xQplUXPJkmJKXHwwl1aNA", callContext.id);
// IsStreamlineInstalled = False
outVars.value.isStreamlineInstalledOut = false;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:IR56RscV+EGaXNkKV6xe2Q", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:w5imDZOuMU2VPW613AgSow", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:w5imDZOuMU2VPW613AgSow", callContext.id);
throw ex;

});
};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.DeviceInfo_GetStreamlineInfo$outVars", [{
name: "IsStreamlineInstalled",
attrName: "isStreamlineInstalledOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SerialNumber",
attrName: "serialNumberOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManager_MobileController.default.clientActionProxies.deviceInfo_GetStreamlineInfo$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.deviceInfo_GetStreamlineInfo$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsStreamlineInstalled: OS.DataConversion.JSNodeParamConverter.to(actionResults.isStreamlineInstalledOut, OS.DataTypes.DataTypes.Boolean),
SerialNumber: OS.DataConversion.JSNodeParamConverter.to(actionResults.serialNumberOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager_Mobile.controller$DeviceInfo_GetUUID", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "CommonPlugin.controller", "CommonPlugin.controller$GetDeviceID", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin", "CommonPlugin.controller$IsCordovaDefined"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, CommonPluginController) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.deviceInfo_GetUUID$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getDeviceIDVar = new OS.DataTypes.VariableHolder();
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.DeviceInfo_GetUUID$outVars"))());
varBag.callContext = callContext;
varBag.getDeviceIDVar = getDeviceIDVar;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:nMBKog67U0W_w6RpUb8ChQ:/ClientActionFlows.nMBKog67U0W_w6RpUb8ChQ:PJ13lwRSuhzP_eNdM_g_xw", "UBT_AppManager_Mobile", "DeviceInfo_GetUUID", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:W3mTLUaT_UuSA7x44Z3B_w", callContext.id);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:XkwL7Z6qlUKhU3XGUZsQSw", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:n2YjksWBjUGSOZpfHoK2Hw", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:OvYcQxmpvkiBYCjmA_9+gQ", callContext.id);
// Execute Action: GetDeviceID
getDeviceIDVar.value = CommonPluginController.default.getDeviceID$Action(callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:qwUPYpOmIUuH7u4HeJh7wQ", callContext.id);
// UUID = GetDeviceID.DeviceHwId
outVars.value.uUIDOut = getDeviceIDVar.value.deviceHwIdOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:YPR8JkHJFUecbupanMS+Uw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:16oStpCvOkO4NUMg9Gkk2w", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:nMBKog67U0W_w6RpUb8ChQ", callContext.id);
}

};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.DeviceInfo_GetUUID$outVars", [{
name: "UUID",
attrName: "uUIDOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManager_MobileController.default.clientActionProxies.deviceInfo_GetUUID$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.deviceInfo_GetUUID$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
UUID: OS.DataConversion.JSNodeParamConverter.to(actionResults.uUIDOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager_Mobile.controller$FCM_HandleEvent", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "FirebaseCloudMessagingPlugin.model", "UBT_AppManager.controller$FCM_DeeplinkCallback_Get", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBT_AppManager_Mobile.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AzureInsights_CreateCustomEvent", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBT_AppManager_Mobile.model$FCM_NotificationRec", "UBT_AppManager_Mobile.controller$FCM_ParseObject", "UBT_AppManager.controller$FCM_NotificationCallback_Get", "FirebaseCloudMessagingPlugin.model$ExtraDataElementRec", "UBT_AppManager_Mobile.referencesHealth$FirebaseCloudMessagingPlugin", "UBT_AppManager_Mobile.model$ExtraDataElementList"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, UBT_AppManagerController, UBTJavaScriptUtilsController, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.fCM_HandleEvent$Action = function (messageIn, appManager_FCM_EventsIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.FCM_HandleEvent$vars"))());
vars.value.messageInLocal = messageIn;
vars.value.appManager_FCM_EventsIdInLocal = appManager_FCM_EventsIdIn;
var fCM_DeeplinkCallback_GetVar = new OS.DataTypes.VariableHolder();
var listFilterVar = new OS.DataTypes.VariableHolder();
var fCM_ParseObjectVar = new OS.DataTypes.VariableHolder();
var fCM_NotificationCallback_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.fCM_DeeplinkCallback_GetVar = fCM_DeeplinkCallback_GetVar;
varBag.listFilterVar = listFilterVar;
varBag.fCM_ParseObjectVar = fCM_ParseObjectVar;
varBag.fCM_NotificationCallback_GetVar = fCM_NotificationCallback_GetVar;
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:kGrNSzQWzUuGw4FOyGk89w:/ClientActionFlows.kGrNSzQWzUuGw4FOyGk89w:PbRRZoynA66+6VDjvYvEMw", "UBT_AppManager_Mobile", "FCM_HandleEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:dmX8VEiB0EO3ibztptRTTA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:WtJhkc3PUE6bYaS4mlsl+g", callContext.id);
// Execute Action: JSUtils_Console_Log2
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("FCM - Handle Event", callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:t3VOFI7s8UCrHsgmJbOAIQ", callContext.id) && (vars.value.appManager_FCM_EventsIdInLocal === UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events.notificationClick))) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:MH974us4UESjYhvaZCFLxg", callContext.id);
// Raise Error: FCM_Exception
throw new OS.Exceptions.Exceptions.UserException("UBT_AppManager_Mobile.FCM_Exception", "Something went wrong in Firebase Cloud Message");
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:sx6aq_pFn0miwyoJM_1FvA", callContext.id);
// Execute Action: FCM_ParseObject
fCM_ParseObjectVar.value = UBT_AppManager_MobileController.default.fCM_ParseObject$Action(vars.value.messageInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:tfttVHKT1UeMmlEI6vUInQ", callContext.id);
// Execute Action: AzureInsightsLog_FCM_PushNotification
return UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action(UBT_AppManager_MobileModel.staticEntities.appManager_AzureInsightsEvents.fCM_ReceivedPushNotification, fCM_ParseObjectVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:HjO+PRVU8kuD8dDES92tOQ", callContext.id);
// Execute Action: JSUtils_Console_Log3
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("FCM - Check for Deeplink", callContext);
}).then(function () {
// HasDeepLink?
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:+BJH5jc+pEiEw9VpKxW8tw", callContext.id) && ((fCM_ParseObjectVar.value.fCM_NotificationOut.screenNameAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:yT+PYzLdIU2EGSEnxnfIiQ", callContext.id);
// DeepLink = FCM_ParseObject.FCM_Notification.ScreenName
vars.value.deepLinkVar = fCM_ParseObjectVar.value.fCM_NotificationOut.screenNameAttr;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:KFVKkq2LqUCAEOdl2FAKXg", callContext.id);
// Execute Action: JSUtils_Console_Log
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action(("Notification Deep Link: " + vars.value.deepLinkVar), callContext);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:IYbaIiFAM0GWacjxPwqFjw", callContext.id);
// Execute Action: FCM_DeeplinkCallback_Get
fCM_DeeplinkCallback_GetVar.value = UBT_AppManagerController.default.fCM_DeeplinkCallback_Get$Action(callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:xr9f5J4Q20y3oyKuyE3LXQ", callContext.id);
// Execute Action: JSUtils_RunFunc
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action(fCM_DeeplinkCallback_GetVar.value.objectOut, vars.value.messageInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:Rhj1L7zRm0imC6kwomZMIA", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:4Pt4cK3Ys0qeJlxAbU5Anw", callContext.id) && (vars.value.appManager_FCM_EventsIdInLocal === UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events.defaultNotification))) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:QO1rhElG7kCPlfBIo1Otew", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(fCM_ParseObjectVar.value.fCM_NotificationOut.extraDataListAttr, function (p) {
return (p.keyAttr === "isShowInApp");
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:EZZPz55kqku+8JXHqDDnLw", callContext.id) && (listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).valueAttr === "True"))) {
// Show Message
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:Y8wpRvsWckaI55KOChb09g", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(fCM_ParseObjectVar.value.fCM_NotificationOut.bodyAttr, /*Info*/ 0);
}

}

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:2ixc9EYvPkKl6728RKGPaA", callContext.id);
// Execute Action: FCM_NotificationCallback_Get
fCM_NotificationCallback_GetVar.value = UBT_AppManagerController.default.fCM_NotificationCallback_Get$Action(callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:meTnfxuJ+EueUBQU5mRWxA", callContext.id);
// Execute Action: JSUtils_RunFunc2
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action(fCM_NotificationCallback_GetVar.value.objectOut, vars.value.messageInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:TWUWcyVKPkWrghRx4KhRVQ", callContext.id);
}

});
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:kGrNSzQWzUuGw4FOyGk89w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:kGrNSzQWzUuGw4FOyGk89w", callContext.id);
throw ex;

});
};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.FCM_HandleEvent$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "AppManager_FCM_EventsId",
attrName: "appManager_FCM_EventsIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DeepLink",
attrName: "deepLinkVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManager_MobileController.default.clientActionProxies.fCM_HandleEvent$Action = function (messageIn, appManager_FCM_EventsIdIn) {
messageIn = (messageIn === undefined) ? null : messageIn;
appManager_FCM_EventsIdIn = (appManager_FCM_EventsIdIn === undefined) ? "" : appManager_FCM_EventsIdIn;
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.fCM_HandleEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Object), appManager_FCM_EventsIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager_Mobile.controller$FCM_Initialize", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager_Mobile.controller$FCM_Initialize.RegisterNotificationListenerJS", "CommonPlugin.model$ErrorRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin", "FirebaseCloudMessagingPlugin.controller$CheckCloudMessagingPlugin", "UBT_AppManager_Mobile.referencesHealth$FirebaseCloudMessagingPlugin", "UBT_AppManager_Mobile.controller$FCM_HandleEvent", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBT_AppManager_Mobile.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, CommonPluginModel, FirebaseCloudMessagingPluginController, UBTJavaScriptUtilsController, UBT_AppManager_Mobile_controller_FCM_Initialize_RegisterNotificationListenerJS) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.fCM_Initialize$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkCloudMessagingPluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkCloudMessagingPluginVar = checkCloudMessagingPluginVar;
try {OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:S7fbePC94ECFwHkJbcfihQ:/ClientActionFlows.S7fbePC94ECFwHkJbcfihQ:jzx64rbz0bjeruW+HVWEbA", "UBT_AppManager_Mobile", "FCM_Initialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:QLL4qmvE702Glm7qexyfPA", callContext.id);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:b3SAZhk6VkSUfX+FYjqAqQ", callContext.id);
// Execute Action: CheckCloudMessagingPlugin
checkCloudMessagingPluginVar.value = FirebaseCloudMessagingPluginController.default.checkCloudMessagingPlugin$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:fjsWTEGOlkOpce_Xu9G4MA", callContext.id) && checkCloudMessagingPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:6YaGj3l5sUiCXJ0dChRHDg", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_Mobile_controller_FCM_Initialize_RegisterNotificationListenerJS, "RegisterNotificationListener", "FCM_Initialize", {
notificationClickId: OS.DataConversion.JSNodeParamConverter.to(UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events.notificationClick, OS.DataTypes.DataTypes.Text),
notificationClickV2Id: OS.DataConversion.JSNodeParamConverter.to(UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events.notificationClickV2, OS.DataTypes.DataTypes.Text),
silentNotificationId: OS.DataConversion.JSNodeParamConverter.to(UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events.silentNotification, OS.DataTypes.DataTypes.Text),
internalRouteActionClickId: OS.DataConversion.JSNodeParamConverter.to(UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events.internalRouteActionClick, OS.DataTypes.DataTypes.Text),
defaultNotificationId: OS.DataConversion.JSNodeParamConverter.to(UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events.defaultNotification, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
FCM_HandleEvent: UBT_AppManager_MobileController.default.getClientActionProxies(controller).fCM_HandleEvent$Action,
JSUtils_Console_Log: UBTJavaScriptUtilsController.default.getClientActionProxies(controller).jSUtils_Console_Log$Action
}, {});
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:PAfA3pOSXEWrGEAp31zQbQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:KOi7AietV0Oecfkry4RJ8w", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:S7fbePC94ECFwHkJbcfihQ", callContext.id);
}

};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.clientActionProxies.fCM_Initialize$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.fCM_Initialize$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager_Mobile.controller$FCM_Initialize.RegisterNotificationListenerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function onDeviceReady(){    
    cordova.plugins.OSFirebaseCloudMessaging.on($parameters.defaultNotificationId, (message) => $actions.FCM_HandleEvent(message,$parameters.defaultNotificationId));
    
    cordova.plugins.OSFirebaseCloudMessaging.on($parameters.silentNotificationId, (message) => $actions.FCM_HandleEvent(message,$parameters.silentNotificationId));
    
    cordova.plugins.OSFirebaseCloudMessaging.on($parameters.internalRouteActionClickId, (message) => $actions.FCM_HandleEvent(message,$parameters.internalRouteActionClickId));
    
    //Avoid double handling of the event
    /*cordova.plugins.OSFirebaseCloudMessaging.on($parameters.notificationClickId, (message) => {
         $actions.FCM_HandleEvent(message,$parameters.notificationClickId)
    });*/
    
    cordova.plugins.OSFirebaseCloudMessaging.on($parameters.notificationClickV2Id, (message) => {
         $actions.FCM_HandleEvent(message,$parameters.notificationClickV2Id)
         $actions.JSUtils_Console_Log('FCM - Click Notification')
    });

    // We can now inform the native side that listeners are set up.
    cordova.plugins.OSFirebaseCloudMessaging.fireQueuedEvents();
    $actions.JSUtils_Console_Log('FCM - Fired Queued')
}

document.addEventListener("deviceready", onDeviceReady, false);

};
});

define("UBT_AppManager_Mobile.controller$FCM_ParseObject", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "UBT_AppManager_Mobile.controller$FCM_ParseObject.ParseJS", "UBT_AppManager_Mobile.model$FCM_NotificationRec"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, UBT_AppManager_Mobile_controller_FCM_ParseObject_ParseJS) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.fCM_ParseObject$Action = function (messageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.FCM_ParseObject$vars"))());
vars.value.messageInLocal = messageIn;
var parseJSResult = new OS.DataTypes.VariableHolder();
var deserialize4Var = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManager_MobileModel.FCM_NotificationRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.FCM_ParseObject$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.parseJSResult = parseJSResult;
varBag.deserialize4Var = deserialize4Var;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:Zsh5nxs4fE6s5O1m3VSGWQ:/ClientActionFlows.Zsh5nxs4fE6s5O1m3VSGWQ:_bgvnuL1ntRekkTZDue5Qg", "UBT_AppManager_Mobile", "FCM_ParseObject", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:bCHm1JflTUqv7FwAtCkp8w", callContext.id);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:UUpolg2B30a+vbjn4GHtfg", callContext.id);
parseJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_Mobile_controller_FCM_ParseObject_ParseJS, "Parse", "FCM_ParseObject", {
Object: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Object),
Message: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.FCM_ParseObject$parseJSResult"))();
jsNodeResult.messageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Message, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:ZAGlBgt_xk+zg5kpIfQt7g", callContext.id);
// JSON Deserialize: Deserialize4
deserialize4Var.value.dataOut = OS.JSONUtils.deserializeFromJSON(parseJSResult.value.messageOut, UBT_AppManager_MobileModel.FCM_NotificationRec, false);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:EwIdbj85r02hd2xVKtTrHA", callContext.id);
// FCM_Notification = Deserialize4.Data
outVars.value.fCM_NotificationOut = deserialize4Var.value.dataOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:EwIdbj85r02hd2xVKtTrHA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// JSON = Parse.Message
outVars.value.jSONOut = parseJSResult.value.messageOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:_+uNSTix5Uu6rBc2IwSfEA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:Zsh5nxs4fE6s5O1m3VSGWQ", callContext.id);
}

};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.FCM_ParseObject$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.FCM_ParseObject$parseJSResult", [{
name: "Message",
attrName: "messageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.FCM_ParseObject$outVars", [{
name: "FCM_Notification",
attrName: "fCM_NotificationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_MobileModel.FCM_NotificationRec();
},
complexType: UBT_AppManager_MobileModel.FCM_NotificationRec
}, {
name: "JSON",
attrName: "jSONOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManager_MobileController.default.clientActionProxies.fCM_ParseObject$Action = function (messageIn) {
messageIn = (messageIn === undefined) ? null : messageIn;
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.fCM_ParseObject$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
FCM_Notification: actionResults.fCM_NotificationOut,
JSON: OS.DataConversion.JSNodeParamConverter.to(actionResults.jSONOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBT_AppManager_Mobile.controller$FCM_ParseObject.ParseJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Message = JSON.stringify($parameters.Object);
};
});

define("UBT_AppManager_Mobile.controller$Fingerprint_FingerprintAvailable", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "CommonPlugin.model", "TouchIdPlugin.controller", "UBT_AppManager.model", "UBT_AppManager_Mobile.controller$Fingerprint_FingerprintAvailable.GetIsReadingFingerprintJS", "CommonPlugin.model$ErrorRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin", "TouchIdPlugin.controller$CheckTouchIdPlugin", "UBT_AppManager_Mobile.referencesHealth$TouchIdPlugin", "UBT_AppManager.model$PIN_FingerprintAvailableCallback_ResponseRec", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, CommonPluginModel, TouchIdPluginController, UBT_AppManagerModel, UBT_AppManager_Mobile_controller_Fingerprint_FingerprintAvailable_GetIsReadingFingerprintJS) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.fingerprint_FingerprintAvailable$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkTouchIdPluginVar = new OS.DataTypes.VariableHolder();
var getIsReadingFingerprintJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.Fingerprint_FingerprintAvailable$outVars"))());
varBag.callContext = callContext;
varBag.checkTouchIdPluginVar = checkTouchIdPluginVar;
varBag.getIsReadingFingerprintJSResult = getIsReadingFingerprintJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:FG8wfusAZ0K5_DI8N_cWAQ:/ClientActionFlows.FG8wfusAZ0K5_DI8N_cWAQ:b4QJREjlheONT3rniZhWDQ", "UBT_AppManager_Mobile", "Fingerprint_FingerprintAvailable", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:oG9qC_EXj0mQfcBa8Z+sWw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:PNghNDhC1EC463DlTXlq4g", callContext.id);
getIsReadingFingerprintJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_Mobile_controller_Fingerprint_FingerprintAvailable_GetIsReadingFingerprintJS, "GetIsReadingFingerprint", "Fingerprint_FingerprintAvailable", {
JS_IsReadingFingerprint: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.Fingerprint_FingerprintAvailable$getIsReadingFingerprintJSResult"))();
jsNodeResult.jS_IsReadingFingerprintOut = OS.DataConversion.JSNodeParamConverter.from($parameters.JS_IsReadingFingerprint, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:o+5cAJ4za0KSH9aQYFwOPA", callContext.id) && getIsReadingFingerprintJSResult.value.jS_IsReadingFingerprintOut)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:pn2vIMI16Uy0WpjzIeca_w", callContext.id);
// PIN_FingerprintAvailableCallback_Response.IsAvailable = True
outVars.value.pIN_FingerprintAvailableCallback_ResponseOut.isAvailableAttr = true;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:czVInoSc1kGhIWBDBiErBA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:ZF50xy3rzkuVpI8Euj3qOg", callContext.id);
// Execute Action: CheckTouchIdPlugin
return TouchIdPluginController.default.checkTouchIdPlugin$Action(callContext).then(function (value) {
checkTouchIdPluginVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:0k1k4iNDbEiY+xL9z0ngOA", callContext.id);
// PIN_FingerprintAvailableCallback_Response.IsAvailable = CheckTouchIdPlugin.IsAvailable
outVars.value.pIN_FingerprintAvailableCallback_ResponseOut.isAvailableAttr = checkTouchIdPluginVar.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:czVInoSc1kGhIWBDBiErBA", callContext.id);
});
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:FG8wfusAZ0K5_DI8N_cWAQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:FG8wfusAZ0K5_DI8N_cWAQ", callContext.id);
throw ex;

});
};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.Fingerprint_FingerprintAvailable$getIsReadingFingerprintJSResult", [{
name: "JS_IsReadingFingerprint",
attrName: "jS_IsReadingFingerprintOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.Fingerprint_FingerprintAvailable$outVars", [{
name: "PIN_FingerprintAvailableCallback_Response",
attrName: "pIN_FingerprintAvailableCallback_ResponseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRec();
},
complexType: UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRec
}]);
UBT_AppManager_MobileController.default.clientActionProxies.fingerprint_FingerprintAvailable$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.fingerprint_FingerprintAvailable$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
PIN_FingerprintAvailableCallback_Response: actionResults.pIN_FingerprintAvailableCallback_ResponseOut
};
});
};
});
define("UBT_AppManager_Mobile.controller$Fingerprint_FingerprintAvailable.GetIsReadingFingerprintJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.JS_IsReadingFingerprint = !!window.isReadingFingerprint
};
});

define("UBT_AppManager_Mobile.controller$Fingerprint_Read", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "CommonPlugin.model", "TouchIdPlugin.controller", "UBT_AppManager.model", "UBT_AppManager_Mobile.controller$Fingerprint_Read.GetResponseEpochJS", "UBT_AppManager_Mobile.controller$Fingerprint_Read.SetIsReadingFingerprintJS", "UBT_AppManager_Mobile.controller$Fingerprint_Read.SetIsReadingFingerprint2JS", "UBT_AppManager_Mobile.controller$Fingerprint_Read.GetRequestEpochJS", "CommonPlugin.model$ErrorRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin", "TouchIdPlugin.controller$TouchID", "UBT_AppManager_Mobile.referencesHealth$TouchIdPlugin", "UBT_AppManager.model$PIN_FingerprintReadCallback_InputRec", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager", "UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRec"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, CommonPluginModel, TouchIdPluginController, UBT_AppManagerModel, UBT_AppManager_Mobile_controller_Fingerprint_Read_GetResponseEpochJS, UBT_AppManager_Mobile_controller_Fingerprint_Read_SetIsReadingFingerprintJS, UBT_AppManager_Mobile_controller_Fingerprint_Read_SetIsReadingFingerprint2JS, UBT_AppManager_Mobile_controller_Fingerprint_Read_GetRequestEpochJS) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.fingerprint_Read$Action = function (pIN_FingerprintReadCallback_InputIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.Fingerprint_Read$vars"))());
vars.value.pIN_FingerprintReadCallback_InputInLocal = pIN_FingerprintReadCallback_InputIn.clone();
var touchIDVar = new OS.DataTypes.VariableHolder();
var getResponseEpochJSResult = new OS.DataTypes.VariableHolder();
var getRequestEpochJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.Fingerprint_Read$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.touchIDVar = touchIDVar;
varBag.getResponseEpochJSResult = getResponseEpochJSResult;
varBag.getRequestEpochJSResult = getRequestEpochJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:fOcIVWompEiCz5JvLMPmRw:/ClientActionFlows.fOcIVWompEiCz5JvLMPmRw:EdRMzUsIFmVKrgRBKjD7pw", "UBT_AppManager_Mobile", "Fingerprint_Read", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:aCk6ZVG84US6AoAAUM5loA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:lyXnZWow70qLW1RSkVqsDQ", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_Mobile_controller_Fingerprint_Read_SetIsReadingFingerprintJS, "SetIsReadingFingerprint", "Fingerprint_Read", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:5g7tvLSa2UOr1d69WKVWYA", callContext.id);
getRequestEpochJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_Mobile_controller_Fingerprint_Read_GetRequestEpochJS, "GetRequestEpoch", "Fingerprint_Read", {
StartEpochInMilliseconds: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.LongInteger.defaultValue, OS.DataTypes.DataTypes.LongInteger)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.Fingerprint_Read$getRequestEpochJSResult"))();
jsNodeResult.startEpochInMillisecondsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.StartEpochInMilliseconds, OS.DataTypes.DataTypes.LongInteger);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:x9mkQqJwGECXfI4LRm4oAg", callContext.id);
// Execute Action: TouchID
return TouchIdPluginController.default.touchID$Action(vars.value.pIN_FingerprintReadCallback_InputInLocal.titleAttr, vars.value.pIN_FingerprintReadCallback_InputInLocal.messageAttr, vars.value.pIN_FingerprintReadCallback_InputInLocal.subtitleAttr, true, 3, callContext).then(function (value) {
touchIDVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:cZT5QWKlZ068Akc9Q4l9tQ", callContext.id);
getResponseEpochJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_Mobile_controller_Fingerprint_Read_GetResponseEpochJS, "GetResponseEpoch", "Fingerprint_Read", {
ResponseEpochInMilliseconds: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.LongInteger.defaultValue, OS.DataTypes.DataTypes.LongInteger)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.Fingerprint_Read$getResponseEpochJSResult"))();
jsNodeResult.responseEpochInMillisecondsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseEpochInMilliseconds, OS.DataTypes.DataTypes.LongInteger);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:h0Azdmnpm0a5tQlm+GStvg", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_Mobile_controller_Fingerprint_Read_SetIsReadingFingerprint2JS, "SetIsReadingFingerprint2", "Fingerprint_Read", null, function ($parameters) {
}, {}, {});
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:Rcv_nq8VW0KSwLedD1CZaA", callContext.id) && (getResponseEpochJSResult.value.responseEpochInMillisecondsOut.sub(getRequestEpochJSResult.value.startEpochInMillisecondsOut).lt(OS.BuiltinFunctions.integerToLongInteger(200)) && vars.value.pIN_FingerprintReadCallback_InputInLocal.isUserInitiatedAttr))) {
// Set IsSuccess
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:2EG3nyuLFUGe5MXkJMMRTw", callContext.id);
// PIN_FingerprintReadCallback_Response.IsUnavailable = True
outVars.value.pIN_FingerprintReadCallback_ResponseOut.isUnavailableAttr = true;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:2EG3nyuLFUGe5MXkJMMRTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PIN_FingerprintReadCallback_Response.ErrorMessage = TouchID.Error.ErrorMessage
outVars.value.pIN_FingerprintReadCallback_ResponseOut.errorMessageAttr = touchIDVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:2EG3nyuLFUGe5MXkJMMRTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PIN_FingerprintReadCallback_Response.ErrorCode = TouchID.Error.ErrorCode
outVars.value.pIN_FingerprintReadCallback_ResponseOut.errorCodeAttr = touchIDVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:I_G7rKrJQ0izmw0R1ew8cg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:jHQ+KcpIYUiFL11GKYANWw", callContext.id);
// PIN_FingerprintReadCallback_Response.IsSuccess = TouchID.Success
outVars.value.pIN_FingerprintReadCallback_ResponseOut.isSuccessAttr = touchIDVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:jHQ+KcpIYUiFL11GKYANWw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PIN_FingerprintReadCallback_Response.ErrorMessage = TouchID.Error.ErrorMessage
outVars.value.pIN_FingerprintReadCallback_ResponseOut.errorMessageAttr = touchIDVar.value.errorOut.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:jHQ+KcpIYUiFL11GKYANWw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PIN_FingerprintReadCallback_Response.ErrorCode = TouchID.Error.ErrorCode
outVars.value.pIN_FingerprintReadCallback_ResponseOut.errorCodeAttr = touchIDVar.value.errorOut.errorCodeAttr;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:d+tNnMW7d0CgdZ3jUevHkQ", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:fOcIVWompEiCz5JvLMPmRw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:fOcIVWompEiCz5JvLMPmRw", callContext.id);
throw ex;

});
};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.Fingerprint_Read$vars", [{
name: "PIN_FingerprintReadCallback_Input",
attrName: "pIN_FingerprintReadCallback_InputInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRec();
},
complexType: UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRec
}]);
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.Fingerprint_Read$getResponseEpochJSResult", [{
name: "ResponseEpochInMilliseconds",
attrName: "responseEpochInMillisecondsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.Fingerprint_Read$getRequestEpochJSResult", [{
name: "StartEpochInMilliseconds",
attrName: "startEpochInMillisecondsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.Fingerprint_Read$outVars", [{
name: "PIN_FingerprintReadCallback_Response",
attrName: "pIN_FingerprintReadCallback_ResponseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRec();
},
complexType: UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRec
}]);
UBT_AppManager_MobileController.default.clientActionProxies.fingerprint_Read$Action = function (pIN_FingerprintReadCallback_InputIn) {
pIN_FingerprintReadCallback_InputIn = (pIN_FingerprintReadCallback_InputIn === undefined) ? new UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRec() : pIN_FingerprintReadCallback_InputIn;
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.fingerprint_Read$Action.bind(controller, pIN_FingerprintReadCallback_InputIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
PIN_FingerprintReadCallback_Response: actionResults.pIN_FingerprintReadCallback_ResponseOut
};
});
};
});
define("UBT_AppManager_Mobile.controller$Fingerprint_Read.GetResponseEpochJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseEpochInMilliseconds =  Date.now();
};
});
define("UBT_AppManager_Mobile.controller$Fingerprint_Read.SetIsReadingFingerprintJS", [], function () {
return function ($actions, $roles, $public) {
window.isReadingFingerprint = true
};
});
define("UBT_AppManager_Mobile.controller$Fingerprint_Read.SetIsReadingFingerprint2JS", [], function () {
return function ($actions, $roles, $public) {
window.isReadingFingerprint = false
};
});
define("UBT_AppManager_Mobile.controller$Fingerprint_Read.GetRequestEpochJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.StartEpochInMilliseconds =  Date.now();
};
});

define("UBT_AppManager_Mobile.controller$Firebase_CrashAnalytics_SetUser", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "UBT_AppManager.controller", "CommonPlugin.model", "FirebaseCrashlyticsPlugin.controller", "UBT_AppManager.controller$AppManager_GetUserContext", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager", "CommonPlugin.model$ErrorRec", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin", "FirebaseCrashlyticsPlugin.controller$CheckCrashlyticsPlugin", "UBT_AppManager_Mobile.referencesHealth$FirebaseCrashlyticsPlugin", "FirebaseCrashlyticsPlugin.controller$SetUserId"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, UBT_AppManagerController, CommonPluginModel, FirebaseCrashlyticsPluginController) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.firebase_CrashAnalytics_SetUser$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var appManager_GetUserContextVar = new OS.DataTypes.VariableHolder();
var checkCrashlyticsPluginVar = new OS.DataTypes.VariableHolder();
var crashlytics_SetUserIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.appManager_GetUserContextVar = appManager_GetUserContextVar;
varBag.checkCrashlyticsPluginVar = checkCrashlyticsPluginVar;
varBag.crashlytics_SetUserIdVar = crashlytics_SetUserIdVar;
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:qyb8u_guBkORWPeBu5iSnQ:/ClientActionFlows.qyb8u_guBkORWPeBu5iSnQ:73vfoAb73JLKtVR0bpDaAQ", "UBT_AppManager_Mobile", "Firebase_CrashAnalytics_SetUser", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:t2L3QZKzXE260aHeEiuG8Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:aco3V7GvA0iFqSo+5agBvw", callContext.id);
// Execute Action: CheckCrashlyticsPlugin
checkCrashlyticsPluginVar.value = FirebaseCrashlyticsPluginController.default.checkCrashlyticsPlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:hTDLVuxc3UWBK5wCIlSffg", callContext.id) && checkCrashlyticsPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:QsJzIOIChUiz+IKtf_V2Yw", callContext.id);
// Execute Action: AppManager_GetUserContext
appManager_GetUserContextVar.value = UBT_AppManagerController.default.appManager_GetUserContext$Action(callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:GLcKu5ku00evh0mVmErY1A", callContext.id);
// Execute Action: Crashlytics_SetUserId
return FirebaseCrashlyticsPluginController.default.setUserId$Action((((OS.BuiltinFunctions.getUserId()).toString() + "-") + appManager_GetUserContextVar.value.usernameOut), callContext).then(function (value) {
crashlytics_SetUserIdVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:MBYe0+uF1EKUtLY1jc_0Iw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:MBYe0+uF1EKUtLY1jc_0Iw", callContext.id);
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:qyb8u_guBkORWPeBu5iSnQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:qyb8u_guBkORWPeBu5iSnQ", callContext.id);
throw ex;

});
};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.clientActionProxies.firebase_CrashAnalytics_SetUser$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.firebase_CrashAnalytics_SetUser$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager_Mobile.controller$Get_Message_FingerprintUnavailable", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.get_Message_FingerprintUnavailable$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.Get_Message_FingerprintUnavailable$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:U64zg1v1KUyA0wjKrZ14Jg:/ClientActionFlows.U64zg1v1KUyA0wjKrZ14Jg:DQ1MIacOC8FFAy1UY1LZVQ", "UBT_AppManager_Mobile", "Get_Message_FingerprintUnavailable", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:LJ7nyoS+HEehUB9zIALRuA", callContext.id);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:Tjr0YHl5Sk6B8rYfICqGGQ", callContext.id);
// Message = "Could not read fingerprint. Please try again later."
outVars.value.messageOut = "Could not read fingerprint. Please try again later.";
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:F9x+J9ipEUaqX_dU6ZDurQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:U64zg1v1KUyA0wjKrZ14Jg", callContext.id);
}

};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.Get_Message_FingerprintUnavailable$outVars", [{
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManager_MobileController.default.clientActionProxies.get_Message_FingerprintUnavailable$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.get_Message_FingerprintUnavailable$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Message: OS.DataConversion.JSNodeParamConverter.to(actionResults.messageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager_Mobile.controller$GetDeviceId_CommonWrapper", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "CommonPlugin.controller", "CommonPlugin.controller$GetDeviceID", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, CommonPluginController) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.getDeviceId_CommonWrapper$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getDeviceIDVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.GetDeviceId_CommonWrapper$outVars"))());
varBag.callContext = callContext;
varBag.getDeviceIDVar = getDeviceIDVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:YkFDz7RjWUmYOfh4BFfm0w:/ClientActionFlows.YkFDz7RjWUmYOfh4BFfm0w:IOtgisMrKeH5p+YySW+Zgg", "UBT_AppManager_Mobile", "GetDeviceId_CommonWrapper", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:OizI2G6JmEuZt6BBAVJCAg", callContext.id);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:PT5PoaFvd0S8MyCBj_CqfA", callContext.id);
// Execute Action: GetDeviceID
getDeviceIDVar.value = CommonPluginController.default.getDeviceID$Action(callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:H7n7pbKfqk6UAtWKeYtSag", callContext.id);
// DeviceHwId = GetDeviceID.DeviceHwId
outVars.value.deviceHwIdOut = getDeviceIDVar.value.deviceHwIdOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:7L+uONV+EEGLfH9lbTLGrA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:YkFDz7RjWUmYOfh4BFfm0w", callContext.id);
}

};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.GetDeviceId_CommonWrapper$outVars", [{
name: "DeviceHwId",
attrName: "deviceHwIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManager_MobileController.default.clientActionProxies.getDeviceId_CommonWrapper$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.getDeviceId_CommonWrapper$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DeviceHwId: OS.DataConversion.JSNodeParamConverter.to(actionResults.deviceHwIdOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager_Mobile.controller$IsCordovaDefined_CommonWrapper", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "CommonPlugin.controller", "CommonPlugin.controller$IsCordovaDefined", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, CommonPluginController) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.isCordovaDefined_CommonWrapper$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.IsCordovaDefined_CommonWrapper$outVars"))());
varBag.callContext = callContext;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:MZvrVRikA0GNXaDiPs2NkA:/ClientActionFlows.MZvrVRikA0GNXaDiPs2NkA:cPn9sQPZVrlPyfmTNcEgHw", "UBT_AppManager_Mobile", "IsCordovaDefined_CommonWrapper", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:Q99vbiKbnUK0gB4vccDKEg", callContext.id);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:oBBjnYbid0KuTWRgIwFD0A", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:ZPaOtQpl9ki4vYsqNXDvPw", callContext.id);
// IsLoaded = IsCordovaDefined.IsLoaded
outVars.value.isLoadedOut = isCordovaDefinedVar.value.isLoadedOut;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:kQCm4nVIVUC7uPYEwzUbag", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:MZvrVRikA0GNXaDiPs2NkA", callContext.id);
}

};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.IsCordovaDefined_CommonWrapper$outVars", [{
name: "IsLoaded",
attrName: "isLoadedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManager_MobileController.default.clientActionProxies.isCordovaDefined_CommonWrapper$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.isCordovaDefined_CommonWrapper$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsLoaded: OS.DataConversion.JSNodeParamConverter.to(actionResults.isLoadedOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager_Mobile.controller$Streamline_GetSerialNumber", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "CommonPlugin.controller", "ContentProviderPlugin.controller", "CommonPlugin.controller$GetDeviceID", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin", "ContentProviderPlugin.controller$QueryJSONFromContentProvider", "UBT_AppManager_Mobile.referencesHealth$ContentProviderPlugin", "ContentProviderPlugin.controller$CheckContentProviderPlugin", "UBT_AppManager_Mobile.model$Streamline_ContentProviderList"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, CommonPluginController, ContentProviderPluginController) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.streamline_GetSerialNumber$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getDeviceIDVar = new OS.DataTypes.VariableHolder();
var queryJSONFromContentProviderVar = new OS.DataTypes.VariableHolder();
var checkContentProviderPluginVar = new OS.DataTypes.VariableHolder();
var jSONDeserializeStreamline_ContentProviderListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManager_MobileModel.Streamline_ContentProviderList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.Streamline_GetSerialNumber$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getDeviceIDVar = getDeviceIDVar;
varBag.queryJSONFromContentProviderVar = queryJSONFromContentProviderVar;
varBag.checkContentProviderPluginVar = checkContentProviderPluginVar;
varBag.jSONDeserializeStreamline_ContentProviderListVar = jSONDeserializeStreamline_ContentProviderListVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:fB83HZwV+Ey9mDuuzYfZIQ:/ClientActionFlows.fB83HZwV+Ey9mDuuzYfZIQ:4J2Uk1jwYQ1PrQVAOq4ywQ", "UBT_AppManager_Mobile", "Streamline_GetSerialNumber", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:22yL6ei5H0ijHFSdkN5HDQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:eqCQeQE3J0yhFCKeI+W6zg", callContext.id);
// Execute Action: CheckContentProviderPlugin
checkContentProviderPluginVar.value = ContentProviderPluginController.default.checkContentProviderPlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:WrXzJ23nM0uwxLNshjSCRg", callContext.id) && checkContentProviderPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:DS73I4zFFUqfjqmQFIAxeQ", callContext.id);
// Execute Action: GetDeviceID
getDeviceIDVar.value = CommonPluginController.default.getDeviceID$Action(callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:DaVlVd39BUinPVw9wx+wdg", callContext.id);
// Execute Action: QueryJSONFromContentProvider
return ContentProviderPluginController.default.queryJSONFromContentProvider$Action("content://com.ubtsupport.androidforwork.ConnectAppContentProvider/serialNumber", callContext).then(function (value) {
queryJSONFromContentProviderVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:tkgDHZDrSUal1AGNE_HOpg", callContext.id) && queryJSONFromContentProviderVar.value.foundOut)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:VbrQfhw5RU+37aiA01wPcw", callContext.id);
// JSON Deserialize: JSONDeserializeStreamline_ContentProviderList
jSONDeserializeStreamline_ContentProviderListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(queryJSONFromContentProviderVar.value.jSONOut, UBT_AppManager_MobileModel.Streamline_ContentProviderList, false);
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:WlAqAqXqmE6k_umvFRvM6A", callContext.id) && ((OS.BuiltinFunctions.toLower(jSONDeserializeStreamline_ContentProviderListVar.value.dataOut.getCurrent(callContext.iterationContext).serialNumberAttr)) !== ("unknown")))) {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:smqpgzLx2Ey+eQ+rgENodw", callContext.id) && ((jSONDeserializeStreamline_ContentProviderListVar.value.dataOut.getCurrent(callContext.iterationContext).serialNumberAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:pQJp_rkLa0WjqiuNj6EhfQ", callContext.id);
// SerialNumber = JSONDeserializeStreamline_ContentProviderList.Data.Current.SerialNumber
outVars.value.serialNumberOut = jSONDeserializeStreamline_ContentProviderListVar.value.dataOut.getCurrent(callContext.iterationContext).serialNumberAttr;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:EUr25WymFkieTIWzDdUcCw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:CBgV_9na6U+XDPL_e4MBSA", callContext.id);
// Raise Error: StreamlineCheckFailed
throw new OS.Exceptions.Exceptions.UserException("UBT_AppManager_Mobile.StreamlineCheckFailed", ("Streamline query failed: (Empty serial number) " + queryJSONFromContentProviderVar.value.jSONOut));
}

} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:D6JDMMtBhUmacocNCIy65A", callContext.id);
// Raise Error: StreamlineCheckFailed
throw new OS.Exceptions.Exceptions.UserException("UBT_AppManager_Mobile.StreamlineCheckFailed", ("Streamline query failed: " + queryJSONFromContentProviderVar.value.jSONOut));
}

} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:vu5vEvbBeES8_pp0bZzWAQ", callContext.id);
// Raise Error: StreamlineCheckFailed
throw new OS.Exceptions.Exceptions.UserException("UBT_AppManager_Mobile.StreamlineCheckFailed", ("Streamline query failed: " + queryJSONFromContentProviderVar.value.jSONOut));
}

});
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:zHQ6C7OHZk+UAFxxSWuBvg", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("Streamline_GetSerialNumber.Streamline_GetSerialNumber", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:eyIskCykF0CxUQLmL2+HFw", callContext.id);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:4+RYecsDQECMjHeWbnG+Lw", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:fB83HZwV+Ey9mDuuzYfZIQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:fB83HZwV+Ey9mDuuzYfZIQ", callContext.id);
throw ex;

});
};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.Streamline_GetSerialNumber$outVars", [{
name: "SerialNumber",
attrName: "serialNumberOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManager_MobileController.default.clientActionProxies.streamline_GetSerialNumber$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.streamline_GetSerialNumber$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
SerialNumber: OS.DataConversion.JSNodeParamConverter.to(actionResults.serialNumberOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager_Mobile.controller$Streamline_GetTOTP", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "ContentProviderPlugin.controller", "ContentProviderPlugin.controller$CheckContentProviderPlugin", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$ContentProviderPlugin", "ContentProviderPlugin.controller$QueryJSONFromContentProvider", "UBT_AppManager_Mobile.model$Streamline_ContentProviderList"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, ContentProviderPluginController) {
var OS = OutSystems.Internal;
UBT_AppManager_MobileController.default.streamline_GetTOTP$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkContentProviderPluginVar = new OS.DataTypes.VariableHolder();
var queryJSONFromContentProviderVar = new OS.DataTypes.VariableHolder();
var jSONDeserializeStreamlineSerialNumberListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManager_MobileModel.Streamline_ContentProviderList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.Streamline_GetTOTP$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.checkContentProviderPluginVar = checkContentProviderPluginVar;
varBag.queryJSONFromContentProviderVar = queryJSONFromContentProviderVar;
varBag.jSONDeserializeStreamlineSerialNumberListVar = jSONDeserializeStreamlineSerialNumberListVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:I7sHtFx2VEmP5A4XDOe8+Q:/ClientActionFlows.I7sHtFx2VEmP5A4XDOe8+Q:jAjD2K57UPMujJkZH9Zqwg", "UBT_AppManager_Mobile", "Streamline_GetTOTP", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:O992clBnD0aH4nO7UKp2UQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:zjXekWrQi0KkqzYPz+BCTw", callContext.id);
// Execute Action: CheckContentProviderPlugin
checkContentProviderPluginVar.value = ContentProviderPluginController.default.checkContentProviderPlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:QRV5JHzpi0+oxdrJLkxEGw", callContext.id) && checkContentProviderPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:hBwynGVNA0iJs3ciEYFp3g", callContext.id);
// Execute Action: QueryJSONFromContentProvider
return ContentProviderPluginController.default.queryJSONFromContentProvider$Action("content://com.ubtsupport.androidforwork.ConnectAppContentProvider/totp", callContext).then(function (value) {
queryJSONFromContentProviderVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:DR0qPUwSxkOyHcNgnyX6BA", callContext.id) && queryJSONFromContentProviderVar.value.foundOut)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:8PL7asR5m0aNmviNEM6MMg", callContext.id);
// JSON Deserialize: JSONDeserializeStreamlineSerialNumberList
jSONDeserializeStreamlineSerialNumberListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(queryJSONFromContentProviderVar.value.jSONOut, UBT_AppManager_MobileModel.Streamline_ContentProviderList, false);
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:fH_9Mv4knkWdRRrW+sZjHg", callContext.id) && ((OS.BuiltinFunctions.toLower(jSONDeserializeStreamlineSerialNumberListVar.value.dataOut.getCurrent(callContext.iterationContext).tOTPAttr)) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:yF2nOiRx9k6y7p26TcEfgA", callContext.id);
// Result = JSONDeserializeStreamlineSerialNumberList.Data.Current.TOTP
outVars.value.resultOut = jSONDeserializeStreamlineSerialNumberListVar.value.dataOut.getCurrent(callContext.iterationContext).tOTPAttr;
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:gK03uknFpU6kBwidz9f9ZA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:rpWFuQElXECwm2Y64zCnuA", callContext.id);
// Raise Error: StreamlineCheckFailed
throw new OS.Exceptions.Exceptions.UserException("UBT_AppManager_Mobile.StreamlineCheckFailed", ("Streamline TOTP query failed: " + queryJSONFromContentProviderVar.value.jSONOut));
}

} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:SIjIOfWdGEmCVGcXAHCq6g", callContext.id);
// Raise Error: StreamlineCheckFailed
throw new OS.Exceptions.Exceptions.UserException("UBT_AppManager_Mobile.StreamlineCheckFailed", ("Streamline TOTP query failed: " + queryJSONFromContentProviderVar.value.jSONOut));
}

});
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:dec+18IYjEmy5SnAxmAobA", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("Streamline_GetTOTP.Streamline_GetTOTP", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:wVHhiIj2UkCVTk2j5_YemQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:u9J1AXqe9kGK_TM7Q3kQBQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:I7sHtFx2VEmP5A4XDOe8+Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:I7sHtFx2VEmP5A4XDOe8+Q", callContext.id);
throw ex;

});
};
var controller = UBT_AppManager_MobileController.default;
UBT_AppManager_MobileController.default.constructor.registerVariableGroupType("UBT_AppManager_Mobile.Streamline_GetTOTP$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManager_MobileController.default.clientActionProxies.streamline_GetTOTP$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManager_MobileController.default.streamline_GetTOTP$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: OS.DataConversion.JSNodeParamConverter.to(actionResults.resultOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager_Mobile.controller", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller$debugger"], function (exports, OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_Mobile_Controller_debugger) {
var OS = OutSystems.Internal;
var UBT_AppManager_MobileController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return UBT_AppManager_MobileController.default.defaultTimeout;
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
UBT_AppManager_MobileController.default = new Controller(null, "UBT_AppManager_Mobile");
});
define("UBT_AppManager_Mobile.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"vRUmBV0wQkSX5ps0sXfeYA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isStreamlineInstalledOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FmfwA2qrUUOstcrfyBtPMQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.serialNumberOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DhpQtU+RXUCqW2h6PumCxw": {
getter: function (varBag, idService) {
return varBag.streamline_GetSerialNumberVar.value;
}
},
"R6QIkuRO2ESlXiYoLiWSxQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.serialNumberOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"eyIskCykF0CxUQLmL2+HFw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"DS73I4zFFUqfjqmQFIAxeQ": {
getter: function (varBag, idService) {
return varBag.getDeviceIDVar.value;
}
},
"DaVlVd39BUinPVw9wx+wdg": {
getter: function (varBag, idService) {
return varBag.queryJSONFromContentProviderVar.value;
}
},
"eqCQeQE3J0yhFCKeI+W6zg": {
getter: function (varBag, idService) {
return varBag.checkContentProviderPluginVar.value;
}
},
"VbrQfhw5RU+37aiA01wPcw": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeStreamline_ContentProviderListVar.value;
}
},
"yqM3t9NT9UqY98zcw_YoUw": {
getter: function (varBag, idService) {
return varBag.vars.value.deepLinkVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ys1+QAW+M0GMQ2EHsvxeSQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"daaPqlodKkOpbNsPWKtFng": {
getter: function (varBag, idService) {
return varBag.vars.value.appManager_FCM_EventsIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IYbaIiFAM0GWacjxPwqFjw": {
getter: function (varBag, idService) {
return varBag.fCM_DeeplinkCallback_GetVar.value;
}
},
"QO1rhElG7kCPlfBIo1Otew": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"sx6aq_pFn0miwyoJM_1FvA": {
getter: function (varBag, idService) {
return varBag.fCM_ParseObjectVar.value;
}
},
"2ixc9EYvPkKl6728RKGPaA": {
getter: function (varBag, idService) {
return varBag.fCM_NotificationCallback_GetVar.value;
}
},
"Iha+YJmkNUeScMSCkXjq0w": {
getter: function (varBag, idService) {
return varBag.vars.value.pIN_FingerprintReadCallback_InputInLocal;
}
},
"LeH0wbkPokC4YTkrXvFFbg": {
getter: function (varBag, idService) {
return varBag.outVars.value.pIN_FingerprintReadCallback_ResponseOut;
}
},
"x9mkQqJwGECXfI4LRm4oAg": {
getter: function (varBag, idService) {
return varBag.touchIDVar.value;
}
},
"cZT5QWKlZ068Akc9Q4l9tQ": {
getter: function (varBag, idService) {
return varBag.getResponseEpochJSResult.value;
}
},
"lyXnZWow70qLW1RSkVqsDQ": {
getter: function (varBag, idService) {
return varBag.setIsReadingFingerprintJSResult.value;
}
},
"h0Azdmnpm0a5tQlm+GStvg": {
getter: function (varBag, idService) {
return varBag.setIsReadingFingerprint2JSResult.value;
}
},
"5g7tvLSa2UOr1d69WKVWYA": {
getter: function (varBag, idService) {
return varBag.getRequestEpochJSResult.value;
}
},
"H9QA10vmBkyuBPCUbAyS3g": {
getter: function (varBag, idService) {
return varBag.outVars.value.isLoadedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oBBjnYbid0KuTWRgIwFD0A": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"zBBfLfcit0K+viQlexONTw": {
getter: function (varBag, idService) {
return varBag.vars.value.appManager_ClientConfigInLocal;
}
},
"qWQW15ryW0qh3MYNWxK1iA": {
getter: function (varBag, idService) {
return varBag.checkPrivacyScreenPluginVar.value;
}
},
"b3SAZhk6VkSUfX+FYjqAqQ": {
getter: function (varBag, idService) {
return varBag.checkCloudMessagingPluginVar.value;
}
},
"6YaGj3l5sUiCXJ0dChRHDg": {
getter: function (varBag, idService) {
return varBag.registerNotificationListenerJSResult.value;
}
},
"JZO79mEE8kelIBCxqCQIEw": {
getter: function (varBag, idService) {
return varBag.outVars.value.pIN_FingerprintAvailableCallback_ResponseOut;
}
},
"ZF50xy3rzkuVpI8Euj3qOg": {
getter: function (varBag, idService) {
return varBag.checkTouchIdPluginVar.value;
}
},
"PNghNDhC1EC463DlTXlq4g": {
getter: function (varBag, idService) {
return varBag.getIsReadingFingerprintJSResult.value;
}
},
"F06QjhPgOkK_Hzw83SM4rA": {
getter: function (varBag, idService) {
return varBag.outVars.value.messageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OGFnKPGcLkmN5BAGkb2DVg": {
getter: function (varBag, idService) {
return varBag.vars.value.appManager_MobileContextVar;
}
},
"NaI7IDDqE0yxvhX_Ju8nSw": {
getter: function (varBag, idService) {
return varBag.appManager_SynchAppContextVar.value;
}
},
"gZeLLweddk+oTiptDqVPTA": {
getter: function (varBag, idService) {
return varBag.deviceInfo_GetStreamlineInfoVar.value;
}
},
"T+C2MEI2Mk6yqK0pGTyqZw": {
getter: function (varBag, idService) {
return varBag.deviceInfo_GetFCMTokenVar.value;
}
},
"REhtO6dn2E2bqp9XYR6oAw": {
getter: function (varBag, idService) {
return varBag.getVersionNumberVar.value;
}
},
"ejPFQ3TpZESXo+wGeNNetg": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"1dEgcRqnuE2OuXVbd3ITkQ": {
getter: function (varBag, idService) {
return varBag.checkInAppBrowserPluginVar.value;
}
},
"i+CdcWZJskaQn3bvUkTL1g": {
getter: function (varBag, idService) {
return varBag.fingerprint_FingerprintAvailableVar.value;
}
},
"Yer228KmjkevT5byA8EkCQ": {
getter: function (varBag, idService) {
return varBag.deviceInfo_GetUUIDVar.value;
}
},
"4cIYsURtRUuMKvW65FmQpw": {
getter: function (varBag, idService) {
return varBag.set_MobileOnAfterLoginJSResult.value;
}
},
"n3QgVxhIuEGo5PDSSSTgmA": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"OH01vLegv0mxAY4OBm_SLA": {
getter: function (varBag, idService) {
return varBag.outVars.value.fCM_NotificationOut;
}
},
"svUjZrXtPkK79iiavKO_XA": {
getter: function (varBag, idService) {
return varBag.outVars.value.jSONOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZAGlBgt_xk+zg5kpIfQt7g": {
getter: function (varBag, idService) {
return varBag.deserialize4Var.value;
}
},
"UUpolg2B30a+vbjn4GHtfg": {
getter: function (varBag, idService) {
return varBag.parseJSResult.value;
}
},
"9dRvKO00xk2Ejt8bYUHY1g": {
getter: function (varBag, idService) {
return varBag.outVars.value.uUIDOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OvYcQxmpvkiBYCjmA_9+gQ": {
getter: function (varBag, idService) {
return varBag.getDeviceIDVar.value;
}
},
"XkwL7Z6qlUKhU3XGUZsQSw": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"PR9rap7DXkOx8oNMZuJksg": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wVHhiIj2UkCVTk2j5_YemQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"zjXekWrQi0KkqzYPz+BCTw": {
getter: function (varBag, idService) {
return varBag.checkContentProviderPluginVar.value;
}
},
"hBwynGVNA0iJs3ciEYFp3g": {
getter: function (varBag, idService) {
return varBag.queryJSONFromContentProviderVar.value;
}
},
"8PL7asR5m0aNmviNEM6MMg": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeStreamlineSerialNumberListVar.value;
}
},
"QsJzIOIChUiz+IKtf_V2Yw": {
getter: function (varBag, idService) {
return varBag.appManager_GetUserContextVar.value;
}
},
"aco3V7GvA0iFqSo+5agBvw": {
getter: function (varBag, idService) {
return varBag.checkCrashlyticsPluginVar.value;
}
},
"GLcKu5ku00evh0mVmErY1A": {
getter: function (varBag, idService) {
return varBag.crashlytics_SetUserIdVar.value;
}
},
"C2ZTzK+6+ECemgo53BqVyQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.deviceHwIdOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PT5PoaFvd0S8MyCBj_CqfA": {
getter: function (varBag, idService) {
return varBag.getDeviceIDVar.value;
}
},
"1mjxjTdB_0GiBxZlEIBJJQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.tokenOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RZ5cO34KpEyyYUZb7LPjRQ": {
getter: function (varBag, idService) {
return varBag.checkCloudMessagingPluginVar.value;
}
},
"hpkuPCI0BEOh5DbdlnZDDg": {
getter: function (varBag, idService) {
return varBag.registerDeviceVar.value;
}
},
"JfQ1S+ufl0GAuRxvPhLWmg": {
getter: function (varBag, idService) {
return varBag.getToken2Var.value;
}
},
"laeXSyajlkuXeIvCKfGajA": {
getter: function (varBag, idService) {
return varBag.checkNetworkCommunicationVar.value;
}
},
"5jAj0XhLvEiWNFAuaopgyA": {
getter: function (varBag, idService) {
return varBag.getTokenVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
