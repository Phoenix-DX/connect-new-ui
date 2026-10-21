define("UBT_AppManager.controller$AppManager_AfterInitialize", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$ServerAction.AppManager_AfterInitialize", "UBT_AppManager.controller$AppManager_SetAppCallback_CurrentLocation", "UBTJavaScriptUtils.controller$JSUtils_PageRedirect", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AppManager_GetDeviceContext", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty", "UBT_AppManager.controller$AppManager_GetAppId", "UBTJavaScriptUtils.controller$JSUtils_RunFunc_Sync_WithTextResult", "UBT_AppManager.controller$PIN_Check", "UBTJavaScriptUtils.controller$JSUtils_BuildAbsoluteURL", "UBT_AppManager_CS.model$AppManager_ConfigClientRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_AfterInitialize$Action = function (configIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_AfterInitialize$vars"))());
vars.value.configInLocal = configIn.clone();
var appManager_AfterInitializeVar = new OS.DataTypes.VariableHolder();
var appManager_GetDeviceContextVar = new OS.DataTypes.VariableHolder();
var appManager_JSUtils_ElementCache_GetObjPropertyVar = new OS.DataTypes.VariableHolder();
var appManager_GetAppIdVar = new OS.DataTypes.VariableHolder();
var jSUtils_RunFunc_WithTextResultVar = new OS.DataTypes.VariableHolder();
var pIN_CheckVar = new OS.DataTypes.VariableHolder();
var jSUtils_BuildAbsoluteURLVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_AfterInitializeVar = appManager_AfterInitializeVar;
varBag.appManager_GetDeviceContextVar = appManager_GetDeviceContextVar;
varBag.appManager_JSUtils_ElementCache_GetObjPropertyVar = appManager_JSUtils_ElementCache_GetObjPropertyVar;
varBag.appManager_GetAppIdVar = appManager_GetAppIdVar;
varBag.jSUtils_RunFunc_WithTextResultVar = jSUtils_RunFunc_WithTextResultVar;
varBag.pIN_CheckVar = pIN_CheckVar;
varBag.jSUtils_BuildAbsoluteURLVar = jSUtils_BuildAbsoluteURLVar;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:wocjd7IpE0iXnltN8jmXfg:/ClientActionFlows.wocjd7IpE0iXnltN8jmXfg:HNzGI4bv4I9OYGsYGWU95A", "UBT_AppManager", "AppManager_AfterInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:3KyT3+H5F0WK7lablaaleQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:cZtpKRd5O0q9RjMwRFmvnw", callContext.id) && (vars.value.configInLocal.checkDeviceOnReadyAttr && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Jq+rc6gQF0iQRzJwb6zyQA", callContext.id);
// Execute Action: AppManager_GetDeviceContext
appManager_GetDeviceContextVar.value = UBT_AppManagerController.default.appManager_GetDeviceContext$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:bOA8glFimEK5FtwuhXMuYA", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_GetObjProperty
appManager_JSUtils_ElementCache_GetObjPropertyVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_StreamlineTOTPCallback, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Oz+tlFhPLEKFl1iq7HmtZw", callContext.id);
// Execute Action: JSUtils_RunFunc_WithTextResult
return UBTJavaScriptUtilsController.default.jSUtils_RunFunc_Sync_WithTextResult$Action(appManager_JSUtils_ElementCache_GetObjPropertyVar.value.valueOut, null, callContext).then(function (value) {
jSUtils_RunFunc_WithTextResultVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DMfdAaI5dEC+coCQQ6PoBA", callContext.id);
// Execute Action: AppManager_AfterInitialize
return controller.appManager_AfterInitialize$ServerAction(vars.value.configInLocal.espaceNameAttr, appManager_GetDeviceContextVar.value.appManager_MobileContextOut, jSUtils_RunFunc_WithTextResultVar.value.resultOut, callContext).then(function (value) {
appManager_AfterInitializeVar.value = value;
});
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nzo6jmZem0CoAOreZSxEFw", callContext.id) && appManager_AfterInitializeVar.value.isNotRegisteredOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZDqnqrM4h0eC9ioSFwkb7A", callContext.id);
return OS.Flow.returnAsync();

}

});
}

}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Z6QIAWLXrEqg1SnM3iyo2Q", callContext.id) && UBT_AppManagerClientVariables.getPIN_EnforceOnReady())) {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TjWIY77njEmhX1IKO3DU_g", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iD5F2cQiKUWPUZMLLdROhA", callContext.id);
// Execute Action: PIN_Check
pIN_CheckVar.value = UBT_AppManagerController.default.pIN_Check$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DoPC5Og98EGYPPupGY8I_Q", callContext.id) && pIN_CheckVar.value.needRegisterOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7rdAD0XbxE2ygT1TFuGZeg", callContext.id);
// Page = "PINRegister"
vars.value.pageVar = "PINRegister";
} else {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:gqX6iyWCa0uMILwgn+_w8w", callContext.id) && pIN_CheckVar.value.needUnlockOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:5TfaMtKYlEmqB5OH8SAtlA", callContext.id);
// Page = "PINUnlock"
vars.value.pageVar = "PINUnlock";
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:sjZwJ7WHFE6JkzA3nkr1DA", callContext.id);
// Execute Action: AppManager_SetAppCallback_CurrentLocation
UBT_AppManagerController.default.appManager_SetAppCallback_CurrentLocation$Action(callContext);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lsZk0_8CB0mT0yL6NNa29A", callContext.id);
return OS.Flow.returnAsync();

}

}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:l2ROkNG+REiDOgc3NVsb5A", callContext.id);
// Execute Action: AppManager_GetAppId
appManager_GetAppIdVar.value = UBT_AppManagerController.default.appManager_GetAppId$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:btsV6TDczUy6XPcnabZtVA", callContext.id);
// Execute Action: JSUtils_BuildAbsoluteURL
jSUtils_BuildAbsoluteURLVar.value = UBTJavaScriptUtilsController.default.jSUtils_BuildAbsoluteURL$Action(((("/" + appManager_GetAppIdVar.value.getAppIdOut) + "/") + vars.value.pageVar), callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:l9uscdIIlEe3LtlfWBaE5Q", callContext.id);
// Execute Action: JSUtils_PageRedirect2
UBTJavaScriptUtilsController.default.jSUtils_PageRedirect$Action(jSUtils_BuildAbsoluteURLVar.value.absoluteURLOut, false, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lsZk0_8CB0mT0yL6NNa29A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:OrWasuoc_UuNsdUKc6UqPQ", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:OrWasuoc_UuNsdUKc6UqPQ", callContext.id);
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:wocjd7IpE0iXnltN8jmXfg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:wocjd7IpE0iXnltN8jmXfg", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_AfterInitialize$vars", [{
name: "Config",
attrName: "configInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_ConfigClientRec();
},
complexType: UBT_AppManager_CSModel.AppManager_ConfigClientRec
}, {
name: "Page",
attrName: "pageVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_AfterInitialize$Action = function (configIn) {
configIn = (configIn === undefined) ? new UBT_AppManager_CSModel.AppManager_ConfigClientRec() : configIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_AfterInitialize$Action.bind(controller, configIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_CheckAppContext", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_SetAppId", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_GetConfiguration"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_CheckAppContext$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_CheckAppContext$vars"))());
var appManager_GetConfigurationVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_GetConfigurationVar = appManager_GetConfigurationVar;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:Ld77zoL82EWzfgdg+n4usQ:/ClientActionFlows.Ld77zoL82EWzfgdg+n4usQ:BmNRoBFHzT3mdnFeluB0Jw", "UBT_AppManager", "AppManager_CheckAppContext", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZKiySSATs0addyLgGSATJw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vDwoV2JN8UO4GGgxLuKlhA", callContext.id);
// Espace = GetEntryEspaceName
vars.value.espaceVar = OS.BuiltinFunctions.getEntryEspaceName();
// is App Manager?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:xDv2OECA7Uu3u2Q7zCnzzA", callContext.id) && (vars.value.espaceVar === "UBT_AppManager"))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RI0BsGfUgUSP13an3NasEQ", callContext.id);
} else {
// Same App?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Ho2GjojlcE+1JBp6WBrYGA", callContext.id) && (UBT_AppManagerClientVariables.getAppManager_EspaceName() === vars.value.espaceVar))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RrdOcjNbyEi2n8bt1Zw18A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:VCy1LjGMlkKmkwaeo6runQ", callContext.id);
// Execute Action: AppManager_SetAppId
UBT_AppManagerController.default.appManager_SetAppId$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:EU8ci7CuCEOHS1FaJvRAbQ", callContext.id);
// Execute Action: AppManager_GetConfiguration
return UBT_AppManagerController.default.appManager_GetConfiguration$Action(false, callContext).then(function (value) {
appManager_GetConfigurationVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:3r4b2Zud6ki5+sRMTW3Q5A", callContext.id);
});
}

});
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Ld77zoL82EWzfgdg+n4usQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Ld77zoL82EWzfgdg+n4usQ", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_CheckAppContext$vars", [{
name: "Espace",
attrName: "espaceVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_CheckAppContext$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_CheckAppContext$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_GenerateCodeChallenge", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.controller$AppManager_GenerateCodeChallenge.JavaScript2JS", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManager_controller_AppManager_GenerateCodeChallenge_JavaScript2JS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GenerateCodeChallenge$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var javaScript2JSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.javaScript2JSResult = javaScript2JSResult;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:TsisCVeQlUiXWrshR6qBRw:/ClientActionFlows.TsisCVeQlUiXWrshR6qBRw:SpTfQttl9KTgiJUoeXWZzA", "UBT_AppManager", "AppManager_GenerateCodeChallenge", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:etqJ7jCPQ0uHtfH3o8nd_g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:38W0m965mk+z+X7JELVOHA", callContext.id);
return controller.safeExecuteAsyncJSNode(UBT_AppManager_controller_AppManager_GenerateCodeChallenge_JavaScript2JS, "JavaScript2", "AppManager_GenerateCodeChallenge", {
CodeChallenge: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
CodeVerifier: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GenerateCodeChallenge$javaScript2JSResult"))();
jsNodeResult.codeChallengeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CodeChallenge, OS.DataTypes.DataTypes.Text);
jsNodeResult.codeVerifierOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CodeVerifier, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
JSUtils_Console_Log: UBTJavaScriptUtilsController.default.getClientActionProxies(controller).jSUtils_Console_Log$Action
}, {}).then(function (results) {
javaScript2JSResult.value = results;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9JWr0LRcIEGdO9gD4pGFpw", callContext.id) && (javaScript2JSResult.value.codeChallengeOut === ""))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:okjUFrfrGEicK51QWYppzg", callContext.id);
// Raise Error: CodeChallengeGenerationException
throw new OS.Exceptions.Exceptions.UserException("UBT_AppManager.CodeChallengeGenerationException", "Invalid Code Challenge generate");
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RTpDaNpnu0CKrqT3s4FO0A", callContext.id);
// FrontEgg_CodeVerifier = JavaScript2.CodeVerifier
UBT_AppManagerClientVariables.setFrontEgg_CodeVerifier(javaScript2JSResult.value.codeVerifierOut);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RTpDaNpnu0CKrqT3s4FO0A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// FrontEgg_CodeChallenge = JavaScript2.CodeChallenge
UBT_AppManagerClientVariables.setFrontEgg_CodeChallenge(javaScript2JSResult.value.codeChallengeOut);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2+6qpVZUVEuXtlsCh_KV6g", callContext.id);
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:TsisCVeQlUiXWrshR6qBRw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:TsisCVeQlUiXWrshR6qBRw", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GenerateCodeChallenge$javaScript2JSResult", [{
name: "CodeChallenge",
attrName: "codeChallengeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CodeVerifier",
attrName: "codeVerifierOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GenerateCodeChallenge$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GenerateCodeChallenge$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$AppManager_GenerateCodeChallenge.JavaScript2JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
// GENERATING CODE VERIFIER
function dec2hex(dec) {
  return ("0" + dec.toString(16)).substr(-2);
}

function generateCodeVerifier() {
  var array = new Uint32Array(28);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join("");
}

function sha256(plain) {
  // returns promise ArrayBuffer
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest("SHA-256", data);
}

function base64urlencode(a) {
  var str = "";
  var bytes = new Uint8Array(a);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    str += String.fromCharCode(bytes[i]);
  }
  return btoa(str)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function generateCodeChallengeFromVerifier(v) {
  var hashed = await sha256(v);
  var base64encoded = base64urlencode(hashed);
  return base64encoded;
}

async function generateInfo() {
    $parameters.CodeVerifier = generateCodeVerifier();
    $parameters.CodeChallenge = await generateCodeChallengeFromVerifier($parameters.CodeVerifier);
    $actions.JSUtils_Console_Log("code_verifier: "+ $parameters.CodeVerifier);
    $actions.JSUtils_Console_Log("code_challenge: "+ $parameters.CodeChallenge);
    $resolve();
}

generateInfo();


});
};
});

define("UBT_AppManager.controller$AppManager_GetAppId", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_SetAppId"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetAppId$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetAppId$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:wzr8ZFM030iX7cD3ukrdmw:/ClientActionFlows.wzr8ZFM030iX7cD3ukrdmw:9PxwOL3k4oI2i2BbUU395g", "UBT_AppManager", "AppManager_GetAppId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:rRdNuklAq06oYPM0eACrqA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:dnelRzxnS023RmaG_EcgRQ", callContext.id) && (UBT_AppManagerClientVariables.getAppManager_EspaceName() === ""))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:71LUYQooLkiU3WtEEv5tLg", callContext.id);
// Execute Action: AppManager_SetAppId
UBT_AppManagerController.default.appManager_SetAppId$Action(callContext);
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:c2dGvLrGqEqsogRY5IkZNw", callContext.id);
// GetAppId = AppManager_EspaceName
outVars.value.getAppIdOut = UBT_AppManagerClientVariables.getAppManager_EspaceName();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Dvro0SWG3UWjo1YCc7r3Ww", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:wzr8ZFM030iX7cD3ukrdmw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetAppId$outVars", [{
name: "GetAppId",
attrName: "getAppIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetAppId$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetAppId$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
GetAppId: OS.DataConversion.JSNodeParamConverter.to(actionResults.getAppIdOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetAuthorizeURL", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager_CS.model", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_GetCallbackURL", "UBTJavaScriptUtils.controller$JSUtils_GenerateGuid", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManager_CSModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetAuthorizeURL$Action = function (configIn, forceAskForCredentialsIn, includeOpenIdTokenIn, oAuth2EndpointIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetAuthorizeURL$vars"))());
vars.value.configInLocal = configIn.clone();
vars.value.forceAskForCredentialsInLocal = forceAskForCredentialsIn;
vars.value.includeOpenIdTokenInLocal = includeOpenIdTokenIn;
vars.value.oAuth2EndpointInLocal = oAuth2EndpointIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetAuthorizeURL$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:cexKtJ8Lgk6gfay8U__PWg:/ClientActionFlows.cexKtJ8Lgk6gfay8U__PWg:wh3ExStZLGQN+7BrU3fjZw", "UBT_AppManager", "AppManager_GetAuthorizeURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:rqRjGPSsUkam2MLsV62kdQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:YeVvic62ckiEcgUQS3+iaQ", callContext.id);
// AuthorizeURL = Config.BaseURL + OAuth2Endpoint + "?p=" + EncodeUrl + "&response_type=" + If + "&redirect_uri=" + EncodeUrl + If + "&state=" + EncodeUrl + If + If
outVars.value.authorizeURLOut = ((((((((((((vars.value.configInLocal.baseURLAttr + vars.value.oAuth2EndpointInLocal) + "?p=") + OS.BuiltinFunctions.encodeUrl(vars.value.configInLocal.azureB2C_Policy_LoginAttr)) + "&response_type=") + ((vars.value.includeOpenIdTokenInLocal) ? ("code+id_token") : ("code"))) + "&redirect_uri=") + OS.BuiltinFunctions.encodeUrl(OutSystemsDebugger.handleFunctionCall(function () {
return UBT_AppManagerController.default.appManager_GetCallbackURL$Action(callContext).redirectURIOut;
}, OS.DataTypes.DataTypes.Text, callContext.id))) + ((vars.value.forceAskForCredentialsInLocal) ? ("&prompt=login") : (""))) + "&state=") + OS.BuiltinFunctions.encodeUrl(OutSystemsDebugger.handleFunctionCall(function () {
return UBTJavaScriptUtilsController.default.jSUtils_GenerateGuid$Action(callContext).guidOut;
}, OS.DataTypes.DataTypes.Text, callContext.id))) + (((vars.value.configInLocal.idpProviderIdAttr === UBT_AppManagerModel.staticEntities.appManager_IdpProvider.frontEgg)) ? ((((((("&code_challenge_method=S256" + "&code_challenge=") + OS.BuiltinFunctions.encodeUrl(vars.value.configInLocal.frontEgg_CodeChallengeAttr)) + "&client_id=") + OS.BuiltinFunctions.encodeUrl(vars.value.configInLocal.frontEgg_AppIdAttr)) + "&scope=") + OS.BuiltinFunctions.encodeUrl((vars.value.configInLocal.azureB2C_ClientIdAttr + " openid offline_access email profile")))) : (""))) + (((vars.value.configInLocal.idpProviderIdAttr === UBT_AppManagerModel.staticEntities.appManager_IdpProvider.azureB2C)) ? ((((("&response_mode=fragment" + "&client_id=") + OS.BuiltinFunctions.encodeUrl(vars.value.configInLocal.azureB2C_ClientIdAttr)) + "&scope=") + OS.BuiltinFunctions.encodeUrl((vars.value.configInLocal.azureB2C_ClientIdAttr + " openid offline_access")))) : ("")));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WrXW1SKIXUqlnAzk15N26A", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:cexKtJ8Lgk6gfay8U__PWg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetAuthorizeURL$vars", [{
name: "Config",
attrName: "configInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec();
},
complexType: UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec
}, {
name: "ForceAskForCredentials",
attrName: "forceAskForCredentialsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IncludeOpenIdToken",
attrName: "includeOpenIdTokenInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "OAuth2Endpoint",
attrName: "oAuth2EndpointInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "/oauth2/v2.0/authorize";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetAuthorizeURL$outVars", [{
name: "AuthorizeURL",
attrName: "authorizeURLOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetAuthorizeURL$Action = function (configIn, forceAskForCredentialsIn, includeOpenIdTokenIn, oAuth2EndpointIn) {
configIn = (configIn === undefined) ? new UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec() : configIn;
forceAskForCredentialsIn = (forceAskForCredentialsIn === undefined) ? false : forceAskForCredentialsIn;
includeOpenIdTokenIn = (includeOpenIdTokenIn === undefined) ? false : includeOpenIdTokenIn;
oAuth2EndpointIn = (oAuth2EndpointIn === undefined) ? "/oauth2/v2.0/authorize" : oAuth2EndpointIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetAuthorizeURL$Action.bind(controller, configIn, OS.DataConversion.JSNodeParamConverter.from(forceAskForCredentialsIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(includeOpenIdTokenIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(oAuth2EndpointIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AuthorizeURL: OS.DataConversion.JSNodeParamConverter.to(actionResults.authorizeURLOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetAuthorizeURL_Wrapper", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.clientVariables", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_GetAuthorizeURL", "UBT_AppManager.controller$AppManager_GetConfiguration"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetAuthorizeURL_Wrapper$Action = function (isForResetPassworIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetAuthorizeURL_Wrapper$vars"))());
vars.value.isForResetPassworInLocal = isForResetPassworIn;
var appManager_GetAuthorizeURLVar = new OS.DataTypes.VariableHolder();
var appManager_GetConfigurationVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetAuthorizeURL_Wrapper$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_GetAuthorizeURLVar = appManager_GetAuthorizeURLVar;
varBag.appManager_GetConfigurationVar = appManager_GetConfigurationVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:oosrRtJjcEa+ASu46y7Oow:/ClientActionFlows.oosrRtJjcEa+ASu46y7Oow:__hyL7OTluNei956QzLpeg", "UBT_AppManager", "AppManager_GetAuthorizeURL_Wrapper", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:AAAQEaFQTEy3jlZypcQQMQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:qQvdYsA4IkignYoyq4e5GQ", callContext.id);
// Execute Action: AppManager_GetConfiguration
return UBT_AppManagerController.default.appManager_GetConfiguration$Action(vars.value.isForResetPassworInLocal, callContext).then(function (value) {
appManager_GetConfigurationVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:BiEbWBSLGEOq837w_QaZ0g", callContext.id);
// Execute Action: AppManager_GetAuthorizeURL
appManager_GetAuthorizeURLVar.value = UBT_AppManagerController.default.appManager_GetAuthorizeURL$Action(appManager_GetConfigurationVar.value.configCacheOut, true, true, UBT_AppManagerClientVariables.getAppManager_OAuth_EndPoint(), callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:luo_izJr0EG6vW2Ou7AWxQ", callContext.id);
// URL = AppManager_GetAuthorizeURL.AuthorizeURL
outVars.value.uRLOut = appManager_GetAuthorizeURLVar.value.authorizeURLOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:roOP9VOyJUGdpVo_cj66tA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:oosrRtJjcEa+ASu46y7Oow", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:oosrRtJjcEa+ASu46y7Oow", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetAuthorizeURL_Wrapper$vars", [{
name: "isForResetPasswor",
attrName: "isForResetPassworInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetAuthorizeURL_Wrapper$outVars", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetAuthorizeURL_Wrapper$Action = function (isForResetPassworIn) {
isForResetPassworIn = (isForResetPassworIn === undefined) ? false : isForResetPassworIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetAuthorizeURL_Wrapper$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isForResetPassworIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
URL: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRLOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetCachedUserInfo", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.model$AppManager_CachedUserInfoRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var jSONDeserializeAppManager_UserExtendedVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManagerModel.AppManager_CachedUserInfoRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetCachedUserInfo$outVars"))());
varBag.callContext = callContext;
varBag.jSONDeserializeAppManager_UserExtendedVar = jSONDeserializeAppManager_UserExtendedVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:YPpsTvoeeEG52_1TzxnhHg:/ClientActionFlows.YPpsTvoeeEG52_1TzxnhHg:UnI9CFdtbOlDcQhVGmxytg", "UBT_AppManager", "AppManager_GetCachedUserInfo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wss6y4wpFk+0dYCm5INu1A", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:VN+OY7OnbUS84Zd1RA_52A", callContext.id);
// JSON Deserialize: JSONDeserializeAppManager_UserExtended
jSONDeserializeAppManager_UserExtendedVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(UBT_AppManagerClientVariables.getAppManager_UserExtended(), UBT_AppManagerModel.AppManager_CachedUserInfoRec, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:scoy4sYsRkywYa_GlgHYEg", callContext.id);
// UserInformation = JSONDeserializeAppManager_UserExtended.Data
outVars.value.userInformationOut = jSONDeserializeAppManager_UserExtendedVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lrVR7CVybE2fYziWP7XEbw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:YPpsTvoeeEG52_1TzxnhHg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetCachedUserInfo$outVars", [{
name: "UserInformation",
attrName: "userInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.AppManager_CachedUserInfoRec();
},
complexType: UBT_AppManagerModel.AppManager_CachedUserInfoRec
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetCachedUserInfo$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
UserInformation: actionResults.userInformationOut
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetCallbackURL", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_BuildAbsoluteURL", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetCallbackURL$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetCallbackURL$vars"))());
var jSUtils_BuildAbsoluteURLVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetCallbackURL$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSUtils_BuildAbsoluteURLVar = jSUtils_BuildAbsoluteURLVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:n13Xai+_X0qivMZnjuBe9A:/ClientActionFlows.n13Xai+_X0qivMZnjuBe9A:VIRlzMsmFWMNrA78HuC5LA", "UBT_AppManager", "AppManager_GetCallbackURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:oAYDM3tIRUGEm_eS5Ew_zQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:NDePh+Ow7USDCmbHohYX8g", callContext.id) && !((UBT_AppManagerClientVariables.getAppManager_CustomCallback() === "")))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:8GhH8PSUBEmdtUoRZrZ6BA", callContext.id);
// RedirectPath = AppManager_CustomCallback
vars.value.redirectPathVar = UBT_AppManagerClientVariables.getAppManager_CustomCallback();
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XE7dE8h4SUOiqXh4YVQ9Ag", callContext.id);
// Execute Action: JSUtils_BuildAbsoluteURL
jSUtils_BuildAbsoluteURLVar.value = UBTJavaScriptUtilsController.default.jSUtils_BuildAbsoluteURL$Action(vars.value.redirectPathVar, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:apSm+5ITW0u83QZJmiL7Ng", callContext.id);
// RedirectURI = JSUtils_BuildAbsoluteURL.AbsoluteURL
outVars.value.redirectURIOut = jSUtils_BuildAbsoluteURLVar.value.absoluteURLOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WbYA+wAtCki4xp48+RQY4Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:n13Xai+_X0qivMZnjuBe9A", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetCallbackURL$vars", [{
name: "RedirectPath",
attrName: "redirectPathVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "/UBT_AppManager/Callback";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetCallbackURL$outVars", [{
name: "RedirectURI",
attrName: "redirectURIOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetCallbackURL$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetCallbackURL$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
RedirectURI: OS.DataConversion.JSNodeParamConverter.to(actionResults.redirectURIOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetConfiguration", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_GetAppId", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_SynchAppContext", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetConfiguration$Action = function (isForResetPasswordIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetConfiguration$vars"))());
vars.value.isForResetPasswordInLocal = isForResetPasswordIn;
var appManager_GetAppIdVar = new OS.DataTypes.VariableHolder();
var appManager_SynchAppContextVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetConfiguration$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_GetAppIdVar = appManager_GetAppIdVar;
varBag.appManager_SynchAppContextVar = appManager_SynchAppContextVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:gDtXLEmC5EaKZB7xthLXrg:/ClientActionFlows.gDtXLEmC5EaKZB7xthLXrg:6Ww83uITTnrhoFoD6XTVEA", "UBT_AppManager", "AppManager_GetConfiguration", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mkQ+W40UK0ygTPa5sm7nig", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XbZ135DMIUi+dHxtry6ZNQ", callContext.id);
// Execute Action: AppManager_GetAppId
appManager_GetAppIdVar.value = UBT_AppManagerController.default.appManager_GetAppId$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:qXvMIAbR50KZoTqnBp5q1Q", callContext.id) && (appManager_GetAppIdVar.value.getAppIdOut === ""))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:brLMGwm38ky8GiJldcL+bA", callContext.id);
// Raise Error: InvalidApp
throw new OS.Exceptions.Exceptions.UserException("UBT_AppManager.InvalidApp", "Invalid Login Configuration App");
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PYzT9wwQD02EGkuuZSWxjw", callContext.id) && (UBT_AppManagerClientVariables.getAppManager_AppBaseURL() === ""))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:oMNp5O+zh0+A_rW8Kti3UA", callContext.id);
// Execute Action: AppManager_SynchAppContext
return UBT_AppManagerController.default.appManager_SynchAppContext$Action(callContext).then(function (value) {
appManager_SynchAppContextVar.value = value;
});
}

}).then(function () {
// Config
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Y6YCXujF+E+x3Gx7wtKkCQ", callContext.id);
// ConfigCache.BaseURL = AppManager_AppBaseURL
outVars.value.configCacheOut.baseURLAttr = UBT_AppManagerClientVariables.getAppManager_AppBaseURL();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Y6YCXujF+E+x3Gx7wtKkCQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ConfigCache.AzureB2C_Policy_Login = AzureB2C_LoginPolicy
outVars.value.configCacheOut.azureB2C_Policy_LoginAttr = UBT_AppManagerClientVariables.getAzureB2C_LoginPolicy();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Y6YCXujF+E+x3Gx7wtKkCQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ConfigCache.AzureB2C_Policy_ResetPass = AzureB2C_ResetPassPolicy
outVars.value.configCacheOut.azureB2C_Policy_ResetPassAttr = UBT_AppManagerClientVariables.getAzureB2C_ResetPassPolicy();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Y6YCXujF+E+x3Gx7wtKkCQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ConfigCache.AzureB2C_ClientId = AzureB2C_ClientId
outVars.value.configCacheOut.azureB2C_ClientIdAttr = UBT_AppManagerClientVariables.getAzureB2C_ClientId();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Y6YCXujF+E+x3Gx7wtKkCQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ConfigCache.Environment = OutSystems_Environment
outVars.value.configCacheOut.environmentAttr = UBT_AppManagerClientVariables.getOutSystems_Environment();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Y6YCXujF+E+x3Gx7wtKkCQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ConfigCache.IdpProviderId = AppManager_IdPProviderId
outVars.value.configCacheOut.idpProviderIdAttr = UBT_AppManagerClientVariables.getAppManager_IdPProviderId();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Y6YCXujF+E+x3Gx7wtKkCQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// ConfigCache.FrontEgg_CodeVerifier = FrontEgg_CodeVerifier
outVars.value.configCacheOut.frontEgg_CodeVerifierAttr = UBT_AppManagerClientVariables.getFrontEgg_CodeVerifier();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Y6YCXujF+E+x3Gx7wtKkCQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// ConfigCache.FrontEgg_AppId = FrontEgg_AppId
outVars.value.configCacheOut.frontEgg_AppIdAttr = UBT_AppManagerClientVariables.getFrontEgg_AppId();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Y6YCXujF+E+x3Gx7wtKkCQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// ConfigCache.FrontEgg_CodeChallenge = FrontEgg_CodeChallenge
outVars.value.configCacheOut.frontEgg_CodeChallengeAttr = UBT_AppManagerClientVariables.getFrontEgg_CodeChallenge();
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:M25sP6bQlUeVOzbB6lTw8A", callContext.id) && vars.value.isForResetPasswordInLocal)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:k0boRwO6a0ysJui0G12iHg", callContext.id);
// ConfigCache.AzureB2C_Policy_Login = ConfigCache.AzureB2C_Policy_ResetPass
outVars.value.configCacheOut.azureB2C_Policy_LoginAttr = outVars.value.configCacheOut.azureB2C_Policy_ResetPassAttr;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CPd+bh8nqU2LoNAX1okYyQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CPd+bh8nqU2LoNAX1okYyQ", callContext.id);
}

});
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:gDtXLEmC5EaKZB7xthLXrg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:gDtXLEmC5EaKZB7xthLXrg", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetConfiguration$vars", [{
name: "isForResetPassword",
attrName: "isForResetPasswordInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetConfiguration$outVars", [{
name: "ConfigCache",
attrName: "configCacheOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec();
},
complexType: UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetConfiguration$Action = function (isForResetPasswordIn) {
isForResetPasswordIn = (isForResetPasswordIn === undefined) ? false : isForResetPasswordIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetConfiguration$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isForResetPasswordIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ConfigCache: actionResults.configCacheOut
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetDeviceContext", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.clientVariables", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetDeviceContext$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetDeviceContext$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:ItbckE1ZUEGjBmNOJ496Rw:/ClientActionFlows.ItbckE1ZUEGjBmNOJ496Rw:SARTsaoGNKr05fWlVuMzAQ", "UBT_AppManager", "AppManager_GetDeviceContext", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:82yJsGrb4UaNX0otgqv7pw", callContext.id);
// AppManager_MobileContext
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id);
// AppManager_MobileContext.isNativeDevice = DeviceInfo_IsNative
outVars.value.appManager_MobileContextOut.isNativeDeviceAttr = UBT_AppManagerClientVariables.getDeviceInfo_IsNative();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AppManager_MobileContext.UUID = DeviceInfo_UUID
outVars.value.appManager_MobileContextOut.uUIDAttr = UBT_AppManagerClientVariables.getDeviceInfo_UUID();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// AppManager_MobileContext.FCMToken = Firebase_CloudMessage_Token
outVars.value.appManager_MobileContextOut.fCMTokenAttr = UBT_AppManagerClientVariables.getFirebase_CloudMessage_Token();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// AppManager_MobileContext.Streamline_IsInstalled = Streamline_IsInstalled
outVars.value.appManager_MobileContextOut.streamline_IsInstalledAttr = UBT_AppManagerClientVariables.getStreamline_IsInstalled();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// AppManager_MobileContext.Streamline_SerialNumber = Streamline_SerialNumber
outVars.value.appManager_MobileContextOut.streamline_SerialNumberAttr = UBT_AppManagerClientVariables.getStreamline_SerialNumber();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// AppManager_MobileContext.DevicePlatform = DeviceInfo_Platform
outVars.value.appManager_MobileContextOut.devicePlatformAttr = UBT_AppManagerClientVariables.getDeviceInfo_Platform();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// AppManager_MobileContext.MobileBuild = DeviceInfo_MobileBuild
outVars.value.appManager_MobileContextOut.mobileBuildAttr = UBT_AppManagerClientVariables.getDeviceInfo_MobileBuild();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// AppManager_MobileContext.MobileVersion = DeviceInfo_MobileVersion
outVars.value.appManager_MobileContextOut.mobileVersionAttr = UBT_AppManagerClientVariables.getDeviceInfo_MobileVersion();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// AppManager_MobileContext.iaRunningAsPWA = DeviceInfo_IsRunningAsPWA
outVars.value.appManager_MobileContextOut.iaRunningAsPWAAttr = UBT_AppManagerClientVariables.getDeviceInfo_IsRunningAsPWA();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// AppManager_MobileContext.Browser = DeviceInfo_Browser
outVars.value.appManager_MobileContextOut.browserAttr = UBT_AppManagerClientVariables.getDeviceInfo_Browser();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// AppManager_MobileContext.UserAgent = DeviceInfo_UserAgent
outVars.value.appManager_MobileContextOut.userAgentAttr = UBT_AppManagerClientVariables.getDeviceInfo_UserAgent();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vrVdGgeQXE+cGT7aWG3A6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "12");
// AppManager_MobileContext.PackageName = DeviceInfo_PackageName
outVars.value.appManager_MobileContextOut.packageNameAttr = UBT_AppManagerClientVariables.getDeviceInfo_PackageName();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ikX3wFCMwECrZNclBnSeTg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:ItbckE1ZUEGjBmNOJ496Rw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetDeviceContext$outVars", [{
name: "AppManager_MobileContext",
attrName: "appManager_MobileContextOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_DeviceContextRec();
},
complexType: UBT_AppManager_CSModel.AppManager_DeviceContextRec
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetDeviceContext$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetDeviceContext$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AppManager_MobileContext: actionResults.appManager_MobileContextOut
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetDeviceInfo_IsNative", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetDeviceInfo_IsNative$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetDeviceInfo_IsNative$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:bOSa6uw+XUmWcwdSu0mksA:/ClientActionFlows.bOSa6uw+XUmWcwdSu0mksA:sp5PsGCVlo55PGylwDJ5Eg", "UBT_AppManager", "AppManager_GetDeviceInfo_IsNative", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WlbIqtkK4EOixHLe_+tL2Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:sFxw0RYVQUetY8PTqmsOwg", callContext.id);
// IsNative = DeviceInfo_IsNative
outVars.value.isNativeOut = UBT_AppManagerClientVariables.getDeviceInfo_IsNative();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:uMKlqlik20uW5_SyjZjqaA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:bOSa6uw+XUmWcwdSu0mksA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetDeviceInfo_IsNative$outVars", [{
name: "IsNative",
attrName: "isNativeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetDeviceInfo_IsNative$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetDeviceInfo_IsNative$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsNative: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNativeOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetDeviceInfo_MobileVersion", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetDeviceInfo_MobileVersion$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetDeviceInfo_MobileVersion$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:XUw1hGtYtkqnzw+A4CRjSA:/ClientActionFlows.XUw1hGtYtkqnzw+A4CRjSA:GK2Ld0pxztqNI664QQC3Bg", "UBT_AppManager", "AppManager_GetDeviceInfo_MobileVersion", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Y3RQkdCGtkWojnq7e9TsKQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Od7tz1Bzg0aleeM53MPJAQ", callContext.id);
// VersionNumber = DeviceInfo_MobileVersion
outVars.value.versionNumberOut = UBT_AppManagerClientVariables.getDeviceInfo_MobileVersion();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nkpwHIw+1UOOMpu79djPEg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:XUw1hGtYtkqnzw+A4CRjSA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetDeviceInfo_MobileVersion$outVars", [{
name: "VersionNumber",
attrName: "versionNumberOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetDeviceInfo_MobileVersion$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetDeviceInfo_MobileVersion$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
VersionNumber: OS.DataConversion.JSNodeParamConverter.to(actionResults.versionNumberOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetEnvironment", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetEnvironment$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetEnvironment$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:BkSJmvwAlECdvsI0A8gO+w:/ClientActionFlows.BkSJmvwAlECdvsI0A8gO+w:qpESKsXWg1pbNB2_P8ERhQ", "UBT_AppManager", "AppManager_GetEnvironment", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:fAKo7Ogkukm5K_uHMmiqgQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ubEZblANk0OJ8WmJTOJPbQ", callContext.id);
// Environment = OutSystems_Environment
outVars.value.environmentOut = UBT_AppManagerClientVariables.getOutSystems_Environment();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+dZYXUnhBEiEO8XdvKMbIw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:BkSJmvwAlECdvsI0A8gO+w", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetEnvironment$outVars", [{
name: "Environment",
attrName: "environmentOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetEnvironment$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetEnvironment$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Environment: OS.DataConversion.JSNodeParamConverter.to(actionResults.environmentOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetIsNative", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetIsNative$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetIsNative$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:Dve8LI53_k6rqHoaXM6AyA:/ClientActionFlows.Dve8LI53_k6rqHoaXM6AyA:dQXYpfY8nh9uXkWB3ONLZg", "UBT_AppManager", "AppManager_GetIsNative", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ctmi3Ag1sUmTa1qthbtFsQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:BV4gnF4y_U+BNXvJsVGbKw", callContext.id);
// isNative = DeviceInfo_IsNative
outVars.value.isNativeOut = UBT_AppManagerClientVariables.getDeviceInfo_IsNative();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:SvUlVzcGw0mDsZ+soI+6iw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Dve8LI53_k6rqHoaXM6AyA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetIsNative$outVars", [{
name: "isNative",
attrName: "isNativeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetIsNative$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetIsNative$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
isNative: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNativeOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetIsSupportedNativeVersion", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$AppManager_GetIsSupportedNativeVersion.ParseVersionsJS", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_GetDeviceInfo_IsNative", "UBT_AppManager.controller$AppManager_GetDeviceInfo_MobileVersion"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_AppManager_GetIsSupportedNativeVersion_ParseVersionsJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetIsSupportedNativeVersion$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getDeviceInfo_IsNativeVar = new OS.DataTypes.VariableHolder();
var getVersionNumberVar = new OS.DataTypes.VariableHolder();
var parseVersionsJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedNativeVersion$outVars"))());
varBag.callContext = callContext;
varBag.getDeviceInfo_IsNativeVar = getDeviceInfo_IsNativeVar;
varBag.getVersionNumberVar = getVersionNumberVar;
varBag.parseVersionsJSResult = parseVersionsJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:e_6n_ptd3022nkVFGKtlyA:/ClientActionFlows.e_6n_ptd3022nkVFGKtlyA:YeBFjOCcNSOqRiZCW+TRFA", "UBT_AppManager", "AppManager_GetIsSupportedNativeVersion", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:m3gbT_Z37E+PJqCUGqRBHQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vW1ETLIpGEevNVEUML+hmA", callContext.id);
// Execute Action: GetDeviceInfo_IsNative
getDeviceInfo_IsNativeVar.value = UBT_AppManagerController.default.appManager_GetDeviceInfo_IsNative$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:VcNkyhEKZkuZpeCxnii3Lw", callContext.id) && (getDeviceInfo_IsNativeVar.value.isNativeOut && ((UBT_AppManagerClientVariables.getMinNativeAppVersion()) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZpNv5z75UUuvCFn_nWCF9Q", callContext.id);
// Execute Action: GetVersionNumber
getVersionNumberVar.value = UBT_AppManagerController.default.appManager_GetDeviceInfo_MobileVersion$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ARhiHY_+zkuVaCA0Q3MZ_A", callContext.id) && ((getVersionNumberVar.value.versionNumberOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lcwdKqZiCkukblkH6+1Szw", callContext.id);
parseVersionsJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_GetIsSupportedNativeVersion_ParseVersionsJS, "ParseVersions", "AppManager_GetIsSupportedNativeVersion", {
CurrentVersion: OS.DataConversion.JSNodeParamConverter.to(getVersionNumberVar.value.versionNumberOut, OS.DataTypes.DataTypes.Text),
SupportedVersion: OS.DataConversion.JSNodeParamConverter.to(UBT_AppManagerClientVariables.getMinNativeAppVersion(), OS.DataTypes.DataTypes.Text),
CurrentMajor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
CurrentMinor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
SupportedMajor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
SupportedMinor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedNativeVersion$parseVersionsJSResult"))();
jsNodeResult.currentMajorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CurrentMajor, OS.DataTypes.DataTypes.Integer);
jsNodeResult.currentMinorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CurrentMinor, OS.DataTypes.DataTypes.Integer);
jsNodeResult.supportedMajorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SupportedMajor, OS.DataTypes.DataTypes.Integer);
jsNodeResult.supportedMinorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SupportedMinor, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:B11wXe5ETkOkkcy+Pum2qg", callContext.id) && ((parseVersionsJSResult.value.currentMajorOut > parseVersionsJSResult.value.supportedMajorOut) || ((parseVersionsJSResult.value.currentMajorOut === parseVersionsJSResult.value.supportedMajorOut) && (parseVersionsJSResult.value.currentMinorOut >= parseVersionsJSResult.value.supportedMinorOut))))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:_TfAQLHVnEeL+au8ngi6FQ", callContext.id);
// IsSupportedNativeVersion = True
outVars.value.isSupportedNativeVersionOut = true;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZxrExEhFB0eYul9kB1ZAsw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KXKYln3kLUmdkmsmWWGsMw", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DxhtsPOOyE6tyPqk20M6gQ", callContext.id);
// IsSupportedNativeVersion = True
outVars.value.isSupportedNativeVersionOut = true;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KXKYln3kLUmdkmsmWWGsMw", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:R_Ix6HXnwEKloiboNx0F4A", callContext.id);
// IsSupportedNativeVersion = True
outVars.value.isSupportedNativeVersionOut = true;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9N4CrD2yj0CYs70ZXTW+zA", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:e_6n_ptd3022nkVFGKtlyA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedNativeVersion$parseVersionsJSResult", [{
name: "CurrentMajor",
attrName: "currentMajorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CurrentMinor",
attrName: "currentMinorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "SupportedMajor",
attrName: "supportedMajorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "SupportedMinor",
attrName: "supportedMinorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedNativeVersion$outVars", [{
name: "IsSupportedNativeVersion",
attrName: "isSupportedNativeVersionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetIsSupportedNativeVersion$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetIsSupportedNativeVersion$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSupportedNativeVersion: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSupportedNativeVersionOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBT_AppManager.controller$AppManager_GetIsSupportedNativeVersion.ParseVersionsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Parse the major and minor versions of each version string

var currentMatches = $parameters.CurrentVersion.match(/^(\d+)\.(\d+)/);
var supportedMatches = $parameters.SupportedVersion.match(/^(\d+)\.(\d+)/);

$parameters.CurrentMajor = Number(currentMatches[1]);
$parameters.CurrentMinor = Number(currentMatches[2]);
$parameters.SupportedMajor = Number(supportedMatches[1]);
$parameters.SupportedMinor = Number(supportedMatches[2]);
};
});

define("UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.ChromeVersionJS", "UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.NativeChromeVersionJS", "UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.ChromeIOSJS", "UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.ParseVersions_SafariJS", "UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.SafariVersionJS", "UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.ParseVersions_ChromeJS", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_GetDeviceInfo_IsNative"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_ChromeVersionJS, UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_NativeChromeVersionJS, UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_ChromeIOSJS, UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_ParseVersions_SafariJS, UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_SafariVersionJS, UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_ParseVersions_ChromeJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetIsSupportedWebviewVersion$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$vars"))());
var appManager_GetDeviceInfo_IsNativeVar = new OS.DataTypes.VariableHolder();
var chromeVersionJSResult = new OS.DataTypes.VariableHolder();
var nativeChromeVersionJSResult = new OS.DataTypes.VariableHolder();
var chromeIOSJSResult = new OS.DataTypes.VariableHolder();
var parseVersions_SafariJSResult = new OS.DataTypes.VariableHolder();
var safariVersionJSResult = new OS.DataTypes.VariableHolder();
var parseVersions_ChromeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_GetDeviceInfo_IsNativeVar = appManager_GetDeviceInfo_IsNativeVar;
varBag.chromeVersionJSResult = chromeVersionJSResult;
varBag.nativeChromeVersionJSResult = nativeChromeVersionJSResult;
varBag.chromeIOSJSResult = chromeIOSJSResult;
varBag.parseVersions_SafariJSResult = parseVersions_SafariJSResult;
varBag.safariVersionJSResult = safariVersionJSResult;
varBag.parseVersions_ChromeJSResult = parseVersions_ChromeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:9l1Vaa_P4U61Dd1XfTxRaw:/ClientActionFlows.9l1Vaa_P4U61Dd1XfTxRaw:vbgf_qKWp0YIzXrUJWatbg", "UBT_AppManager", "AppManager_GetIsSupportedWebviewVersion", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:EI0iim+FjUqMyKaOKPSoPQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Puiaq++ck0CzVBGmhFWwGw", callContext.id) && !(((UBT_AppManagerClientVariables.getMinWebViewVersion_Chrome()) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PsBMUgIQPUiLWjcyaqJuuA", callContext.id);
}

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:jgxMnGNmkE61uHF7CarILw", callContext.id) && !(((UBT_AppManagerClientVariables.getMinWebViewVersion_Safari()) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:b_273QHEJ0CRPUnZLGBogQ", callContext.id);
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ya_GNFZ8MUW9C7nGdrB14w", callContext.id);
// Execute Action: AppManager_GetDeviceInfo_IsNative
appManager_GetDeviceInfo_IsNativeVar.value = UBT_AppManagerController.default.appManager_GetDeviceInfo_IsNative$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nYCh_Sq26kCSTASwYbZ7UQ", callContext.id);
parseVersions_ChromeJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_ParseVersions_ChromeJS, "ParseVersions_Chrome", "AppManager_GetIsSupportedWebviewVersion", {
SupportedVersion: OS.DataConversion.JSNodeParamConverter.to(UBT_AppManagerClientVariables.getMinWebViewVersion_Chrome(), OS.DataTypes.DataTypes.Text),
SupportedMajor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
SupportedMinor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$parseVersions_ChromeJSResult"))();
jsNodeResult.supportedMajorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SupportedMajor, OS.DataTypes.DataTypes.Integer);
jsNodeResult.supportedMinorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SupportedMinor, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:y2lgasepUEyawkBAC1I4zw", callContext.id);
// ChromeMajor = ParseVersions_Chrome.SupportedMajor
vars.value.chromeMajorVar = parseVersions_ChromeJSResult.value.supportedMajorOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:y2lgasepUEyawkBAC1I4zw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ChromeMinor = ParseVersions_Chrome.SupportedMinor
vars.value.chromeMinorVar = parseVersions_ChromeJSResult.value.supportedMinorOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:sVqasr7_kECUB4BiRGczSA", callContext.id);
parseVersions_SafariJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_ParseVersions_SafariJS, "ParseVersions_Safari", "AppManager_GetIsSupportedWebviewVersion", {
SupportedVersion: OS.DataConversion.JSNodeParamConverter.to(UBT_AppManagerClientVariables.getMinWebViewVersion_Chrome(), OS.DataTypes.DataTypes.Text),
SupportedMajor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
SupportedMinor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$parseVersions_SafariJSResult"))();
jsNodeResult.supportedMajorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SupportedMajor, OS.DataTypes.DataTypes.Integer);
jsNodeResult.supportedMinorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SupportedMinor, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XFvbp+0lu0uzo6OLlY+3DQ", callContext.id);
// SafariMajor = ParseVersions_Safari.SupportedMajor
vars.value.safariMajorVar = parseVersions_SafariJSResult.value.supportedMajorOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XFvbp+0lu0uzo6OLlY+3DQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SafariMinor = ParseVersions_Safari.SupportedMinor
vars.value.safariMinorVar = parseVersions_SafariJSResult.value.supportedMinorOut;
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:crqd289T60qpRkSi6PIngw", callContext.id) && appManager_GetDeviceInfo_IsNativeVar.value.isNativeOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:s+1aha5+J0iBlgc3Ci8aYw", callContext.id);
nativeChromeVersionJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_NativeChromeVersionJS, "NativeChromeVersion", "AppManager_GetIsSupportedWebviewVersion", {
IsChrome: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Major: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
Minor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$nativeChromeVersionJSResult"))();
jsNodeResult.isChromeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsChrome, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.majorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Major, OS.DataTypes.DataTypes.Integer);
jsNodeResult.minorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Minor, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:t48vrbPbsU+vNRpycF4f2w", callContext.id);
// IsSupported = notNativeChromeVersion.IsChrome or NativeChromeVersion.Major > ChromeMajor or NativeChromeVersion.Major = ChromeMajor and NativeChromeVersion.Minor >= ChromeMinor
outVars.value.isSupportedOut = ((!(nativeChromeVersionJSResult.value.isChromeOut) || (nativeChromeVersionJSResult.value.majorOut > vars.value.chromeMajorVar)) || ((nativeChromeVersionJSResult.value.majorOut === vars.value.chromeMajorVar) && (nativeChromeVersionJSResult.value.minorOut >= vars.value.chromeMinorVar)));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:t48vrbPbsU+vNRpycF4f2w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsAndroid = True
outVars.value.isAndroidOut = true;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:OaKr4AjMyUCKEbUxSkLOFA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iRxMWB9wc0y+CK71iP9BeA", callContext.id);
chromeVersionJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_ChromeVersionJS, "ChromeVersion", "AppManager_GetIsSupportedWebviewVersion", {
IsChrome: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Major: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
Minor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$chromeVersionJSResult"))();
jsNodeResult.isChromeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsChrome, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.majorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Major, OS.DataTypes.DataTypes.Integer);
jsNodeResult.minorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Minor, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:z1APLrq5x0uPIWvcFPB9ZQ", callContext.id) && chromeVersionJSResult.value.isChromeOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:c6G+dEGc4Eu4mnjrk42xJQ", callContext.id);
// IsSupported = ChromeVersion.Major > ChromeMajor or ChromeVersion.Major = ChromeMajor and ChromeVersion.Minor >= ChromeMinor
outVars.value.isSupportedOut = ((chromeVersionJSResult.value.majorOut > vars.value.chromeMajorVar) || ((chromeVersionJSResult.value.majorOut === vars.value.chromeMajorVar) && (chromeVersionJSResult.value.minorOut >= vars.value.chromeMinorVar)));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:3zoNBmvifkq1f8O+FPf23A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:FECZu3eU5ECV1nV36m1ajw", callContext.id);
safariVersionJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_SafariVersionJS, "SafariVersion", "AppManager_GetIsSupportedWebviewVersion", {
IsSafari: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Major: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
Minor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$safariVersionJSResult"))();
jsNodeResult.isSafariOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSafari, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.majorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Major, OS.DataTypes.DataTypes.Integer);
jsNodeResult.minorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Minor, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:B6VAj2Og_EiKr5uQ4SJ_Fg", callContext.id) && safariVersionJSResult.value.isSafariOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XdIjw1ddgEOIN+ekaQSn+g", callContext.id);
// IsSupported = SafariVersion.Major > SafariMajor or SafariVersion.Major = SafariMajor and SafariVersion.Minor >= SafariMinor
outVars.value.isSupportedOut = ((safariVersionJSResult.value.majorOut > vars.value.safariMajorVar) || ((safariVersionJSResult.value.majorOut === vars.value.safariMajorVar) && (safariVersionJSResult.value.minorOut >= vars.value.safariMinorVar)));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XdIjw1ddgEOIN+ekaQSn+g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsApple = True
outVars.value.isAppleOut = true;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:efwYH6i2ZkKkl0RgKN+Tew", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:O9VvsZ53cECDO1gZtBqjDQ", callContext.id);
chromeIOSJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_GetIsSupportedWebviewVersion_ChromeIOSJS, "ChromeIOS", "AppManager_GetIsSupportedWebviewVersion", {
IsIOS: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Major: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
Minor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$chromeIOSJSResult"))();
jsNodeResult.isIOSOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsIOS, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.majorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Major, OS.DataTypes.DataTypes.Integer);
jsNodeResult.minorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Minor, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:yN2qF+4SKEKrQ2W1gevFeA", callContext.id) && chromeIOSJSResult.value.isIOSOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CnWJeUvdUEucUh9J1rYCWA", callContext.id);
// IsSupported = ChromeIOS.Major > SafariMajor or ChromeIOS.Major = SafariMajor and ChromeIOS.Minor >= SafariMinor
outVars.value.isSupportedOut = ((chromeIOSJSResult.value.majorOut > vars.value.safariMajorVar) || ((chromeIOSJSResult.value.majorOut === vars.value.safariMajorVar) && (chromeIOSJSResult.value.minorOut >= vars.value.safariMinorVar)));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CnWJeUvdUEucUh9J1rYCWA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsApple = True
outVars.value.isAppleOut = true;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:cw1b5OQYi0Gtwf7kY0ZYWw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:na+KmxoEjESFokKO4uJMEQ", callContext.id);
}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:9l1Vaa_P4U61Dd1XfTxRaw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$vars", [{
name: "ChromeMajor",
attrName: "chromeMajorVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 96;
}
}, {
name: "ChromeMinor",
attrName: "chromeMinorVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "SafariMajor",
attrName: "safariMajorVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 16;
}
}, {
name: "SafariMinor",
attrName: "safariMinorVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 6;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$chromeVersionJSResult", [{
name: "IsChrome",
attrName: "isChromeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Major",
attrName: "majorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Minor",
attrName: "minorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$nativeChromeVersionJSResult", [{
name: "IsChrome",
attrName: "isChromeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Major",
attrName: "majorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Minor",
attrName: "minorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$chromeIOSJSResult", [{
name: "IsIOS",
attrName: "isIOSOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Major",
attrName: "majorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Minor",
attrName: "minorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$parseVersions_SafariJSResult", [{
name: "SupportedMajor",
attrName: "supportedMajorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "SupportedMinor",
attrName: "supportedMinorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$safariVersionJSResult", [{
name: "IsSafari",
attrName: "isSafariOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Major",
attrName: "majorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Minor",
attrName: "minorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$parseVersions_ChromeJSResult", [{
name: "SupportedMajor",
attrName: "supportedMajorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "SupportedMinor",
attrName: "supportedMinorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetIsSupportedWebviewVersion$outVars", [{
name: "IsSupported",
attrName: "isSupportedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsAndroid",
attrName: "isAndroidOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsApple",
attrName: "isAppleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetIsSupportedWebviewVersion$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetIsSupportedWebviewVersion$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSupported: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSupportedOut, OS.DataTypes.DataTypes.Boolean),
IsAndroid: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAndroidOut, OS.DataTypes.DataTypes.Boolean),
IsApple: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAppleOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.ChromeVersionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Chrome version is exposed in the userAgent string

var userAgent = window.navigator.userAgent;
var matches = userAgent.match(/Chrome\/(\d+)\.(\d+)\.(\d+)\.(\d+)/);

if (matches) {
    $parameters.IsChrome = true;
    $parameters.Major = Number(matches[1]);
    $parameters.Minor = Number(matches[2]);
}
};
});
define("UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.NativeChromeVersionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// WebView version is exposed in the userAgent string

var userAgent = window.navigator.userAgent;
var matches = userAgent.match(/Chrome\/(\d+)\.(\d+)\.(\d+)\.(\d+)/);

if (matches) {
    $parameters.IsChrome = true;
    $parameters.Major = Number(matches[1]);
    $parameters.Minor = Number(matches[2]);
} else {
    // Can happen with other browsers - namely Safari
    $parameters.IsChrome = false;
}
};
});
define("UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.ChromeIOSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Safari version is exposed in the userAgent string

var userAgent = window.navigator.userAgent;
var isChromeIOS = userAgent.match(/CriOS\//);
var matches = null;

if (isChromeIOS) {
    matches = userAgent.match(/OS (\d+)\_(\d+)/);
}

if (matches) {
    $parameters.IsIOS = true;
    $parameters.Major = Number(matches[1]);
    $parameters.Minor = Number(matches[2]);
}
};
});
define("UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.ParseVersions_SafariJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var supportedMatches = ($parameters.SupportedVersion || "").match(/^(\d+)\.(\d+)/);

if (supportedMatches) {
    $parameters.SupportedMajor = Number(supportedMatches[1]);
    $parameters.SupportedMinor = Number(supportedMatches[2]);
} else {
    $parameters.SupportedMajor = 0;
    $parameters.SupportedMinor = 0;
}
};
});
define("UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.SafariVersionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Safari version is exposed in the userAgent string

var userAgent = window.navigator.userAgent;
var matches = userAgent.match(/Version\/(\d+)\.(\d+).* Safari\//);

if (matches) {
    $parameters.IsSafari = true;
    $parameters.Major = Number(matches[1]);
    $parameters.Minor = Number(matches[2]);
}
};
});
define("UBT_AppManager.controller$AppManager_GetIsSupportedWebviewVersion.ParseVersions_ChromeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var supportedMatches = ($parameters.SupportedVersion || "").match(/^(\d+)\.(\d+)/);

if (supportedMatches) {
    $parameters.SupportedMajor = Number(supportedMatches[1]);
    $parameters.SupportedMinor = Number(supportedMatches[2]);
} else {
    $parameters.SupportedMajor = 0;
    $parameters.SupportedMinor = 0;
}
};
});

define("UBT_AppManager.controller$AppManager_GetLastURL", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetLastURL$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetLastURL$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:0br4ptT010+LqDQh6+7+6A:/ClientActionFlows.0br4ptT010+LqDQh6+7+6A:uk519M2nVlkWiWs7VgJRqw", "UBT_AppManager", "AppManager_GetLastURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PqQ16lXGnE2QUVIlCTyD2A", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nqJd5CT+lUeTC1vMEX2vXA", callContext.id);
// URL = OutSystems_LastURL
outVars.value.uRLOut = UBT_AppManagerClientVariables.getOutSystems_LastURL();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CxzcFAVM8kCKtNxNxA3UDw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:0br4ptT010+LqDQh6+7+6A", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetLastURL$outVars", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetLastURL$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetLastURL$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
URL: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRLOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetMemberId", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetMemberId$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetMemberId$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:cXmHvGzn5EWpHace9D5CSw:/ClientActionFlows.cXmHvGzn5EWpHace9D5CSw:Lu4uSMSwz6LxPMZW4DnNvw", "UBT_AppManager", "AppManager_GetMemberId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:W28ruNPHVkepvUQmPYzTwg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:_Oq+4xyD8Eag4umc_Ip4eg", callContext.id);
// MemberId = AppManager_MemberId
outVars.value.memberIdOut = UBT_AppManagerClientVariables.getAppManager_MemberId();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Cl36m8c8M0ePF7WD_yRmSQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:cXmHvGzn5EWpHace9D5CSw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetMemberId$outVars", [{
name: "MemberId",
attrName: "memberIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetMemberId$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetMemberId$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MemberId: OS.DataConversion.JSNodeParamConverter.to(actionResults.memberIdOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetPackageName", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetPackageName$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetPackageName$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:iJD6IdJlTUq1p0zYWyoIuQ:/ClientActionFlows.iJD6IdJlTUq1p0zYWyoIuQ:qLx0WsvDWXwiCaADepQNAg", "UBT_AppManager", "AppManager_GetPackageName", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DD6k6V5SzESCQCQ6m5PMOg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vyYlj+sdjkyTP6JySgL+XA", callContext.id);
// PackageName = DeviceInfo_PackageName
outVars.value.packageNameOut = UBT_AppManagerClientVariables.getDeviceInfo_PackageName();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DhVqI96PrE+QVN419_2OUw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:iJD6IdJlTUq1p0zYWyoIuQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetPackageName$outVars", [{
name: "PackageName",
attrName: "packageNameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetPackageName$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetPackageName$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
PackageName: OS.DataConversion.JSNodeParamConverter.to(actionResults.packageNameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetPIN_EnableFingerprint", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetPIN_EnableFingerprint$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetPIN_EnableFingerprint$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:cmLSresXFkeLfg9UQ2LzVw:/ClientActionFlows.cmLSresXFkeLfg9UQ2LzVw:2cgeRFFpaLYOx744Hxjnyg", "UBT_AppManager", "AppManager_GetPIN_EnableFingerprint", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ALA0eFgCbUOikf2iXAx7fw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:GdUtq_TObU+RU1Hy3DN5PQ", callContext.id);
// Enabled = PIN_EnableFingerprint
outVars.value.enabledOut = UBT_AppManagerClientVariables.getPIN_EnableFingerprint();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:yVC6cW+feUSLPr3UMSAbog", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:cmLSresXFkeLfg9UQ2LzVw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetPIN_EnableFingerprint$outVars", [{
name: "Enabled",
attrName: "enabledOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetPIN_EnableFingerprint$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetPIN_EnableFingerprint$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Enabled: OS.DataConversion.JSNodeParamConverter.to(actionResults.enabledOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetPIN_FingerprintReaderAvailable", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetPIN_FingerprintReaderAvailable$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetPIN_FingerprintReaderAvailable$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:sG2XV3oVmUCRuH9ENuugyg:/ClientActionFlows.sG2XV3oVmUCRuH9ENuugyg:x7riFncEX25C0eso21Cepw", "UBT_AppManager", "AppManager_GetPIN_FingerprintReaderAvailable", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:quyCHjwLr0qPgVngWpN_xA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:xAWPJIgn_EO+prQv2b_0mg", callContext.id);
// Available = PIN_FingerprintReaderAvailable_IsPersistent
outVars.value.availableOut = UBT_AppManagerClientVariables.getPIN_FingerprintReaderAvailable_IsPersistent();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:dBNsS1lRmEaQYHLPVAkybQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:sG2XV3oVmUCRuH9ENuugyg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetPIN_FingerprintReaderAvailable$outVars", [{
name: "Available",
attrName: "availableOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetPIN_FingerprintReaderAvailable$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetPIN_FingerprintReaderAvailable$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Available: OS.DataConversion.JSNodeParamConverter.to(actionResults.availableOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetPIN_HasUnlocked", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetPIN_HasUnlocked$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetPIN_HasUnlocked$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:94HVBDGzrUSQIac4KOywBw:/ClientActionFlows.94HVBDGzrUSQIac4KOywBw:KKKKxTYSNiLtyaktli9O9Q", "UBT_AppManager", "AppManager_GetPIN_HasUnlocked", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:gFv9tHDov0OIQQtrsnaUOQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:fCNH_mTOT0ekWZAQ+osxvA", callContext.id);
// HasUnlocked = PIN_HasUnlocked
outVars.value.hasUnlockedOut = UBT_AppManagerClientVariables.getPIN_HasUnlocked();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:st_6YhgLSUSUp8irZrNVqw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:94HVBDGzrUSQIac4KOywBw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetPIN_HasUnlocked$outVars", [{
name: "HasUnlocked",
attrName: "hasUnlockedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetPIN_HasUnlocked$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetPIN_HasUnlocked$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasUnlocked: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasUnlockedOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetPIN_IsLocked", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetPIN_IsLocked$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetPIN_IsLocked$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:33g6nF_E1ky5jtuHvWv3QA:/ClientActionFlows.33g6nF_E1ky5jtuHvWv3QA:lZqTh5EW7uzPehw9WmPdXA", "UBT_AppManager", "AppManager_GetPIN_IsLocked", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZPu+TSZULEGltnHdoKvElA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:BGWV6MSc3EuInSG1tcDSXQ", callContext.id);
// IsLocked = PIN_IsLocked
outVars.value.isLockedOut = UBT_AppManagerClientVariables.getPIN_IsLocked();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CGIpwk8Z5U2Yg+GzOa27_A", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:33g6nF_E1ky5jtuHvWv3QA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetPIN_IsLocked$outVars", [{
name: "IsLocked",
attrName: "isLockedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetPIN_IsLocked$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetPIN_IsLocked$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsLocked: OS.DataConversion.JSNodeParamConverter.to(actionResults.isLockedOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetPIN_IsRegistering", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetPIN_IsRegistering$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetPIN_IsRegistering$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:OtKtLWgoIEimzgTut_Rrrg:/ClientActionFlows.OtKtLWgoIEimzgTut_Rrrg:T_vKCMc01_L3IosGT0kyTQ", "UBT_AppManager", "AppManager_GetPIN_IsRegistering", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:IdVfiHHV2kSsgDAY+Msbcw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:EpT_uPygXk+I9tpOM2bjiA", callContext.id);
// IsRegistering = PIN_IsRegistering
outVars.value.isRegisteringOut = UBT_AppManagerClientVariables.getPIN_IsRegistering();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:hmMbSkvZq0SR+FdBaWL2Qw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:OtKtLWgoIEimzgTut_Rrrg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetPIN_IsRegistering$outVars", [{
name: "IsRegistering",
attrName: "isRegisteringOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetPIN_IsRegistering$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetPIN_IsRegistering$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsRegistering: OS.DataConversion.JSNodeParamConverter.to(actionResults.isRegisteringOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager.controller$AppManager_GetUserContext", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_GetUserContext$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_GetUserContext$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:BeeI+3uNCEKzI9fyVAoAvg:/ClientActionFlows.BeeI+3uNCEKzI9fyVAoAvg:2kKbu3xMvJL4XhPHCqFwwA", "UBT_AppManager", "AppManager_GetUserContext", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:D5_ngdTcCki_MGTf0j35UA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9GW+SWty90u6CEav+nk2uQ", callContext.id);
// ExternalId = AppManager_UserExternalId
outVars.value.externalIdOut = UBT_AppManagerClientVariables.getAppManager_UserExternalId();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9GW+SWty90u6CEav+nk2uQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// FCMToken = Firebase_CloudMessage_Token
outVars.value.fCMTokenOut = UBT_AppManagerClientVariables.getFirebase_CloudMessage_Token();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9GW+SWty90u6CEav+nk2uQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Username = AppManager_Username
outVars.value.usernameOut = UBT_AppManagerClientVariables.getAppManager_Username();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Hrc1HnbpVUetC14gRexYEw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:BeeI+3uNCEKzI9fyVAoAvg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_GetUserContext$outVars", [{
name: "ExternalId",
attrName: "externalIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Username",
attrName: "usernameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FCMToken",
attrName: "fCMTokenOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_GetUserContext$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_GetUserContext$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ExternalId: OS.DataConversion.JSNodeParamConverter.to(actionResults.externalIdOut, OS.DataTypes.DataTypes.Text),
Username: OS.DataConversion.JSNodeParamConverter.to(actionResults.usernameOut, OS.DataTypes.DataTypes.Text),
FCMToken: OS.DataConversion.JSNodeParamConverter.to(actionResults.fCMTokenOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_HandleAuthorizationResponseURL", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$AppManager_HandleAuthorizationResponseURL.ParseResponseJS", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_IndentifyError", "UBT_AppManager.model$Token_InvalidResponseUrlRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_AppManager_HandleAuthorizationResponseURL_ParseResponseJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_HandleAuthorizationResponseURL$Action = function (responseURLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_HandleAuthorizationResponseURL$vars"))());
vars.value.responseURLInLocal = responseURLIn;
var appManager_IndentifyErrorVar = new OS.DataTypes.VariableHolder();
var parseResponseJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_HandleAuthorizationResponseURL$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_IndentifyErrorVar = appManager_IndentifyErrorVar;
varBag.parseResponseJSResult = parseResponseJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:fJQE6GY1KUKIDTMRDgd1dw:/ClientActionFlows.fJQE6GY1KUKIDTMRDgd1dw:iXD1UbpotNvM8XNmTzzywQ", "UBT_AppManager", "AppManager_HandleAuthorizationResponseURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:FQMuKDCXr0aN5UFH5+AjcA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:UbR8x2KTQ0SsG6TfcEH2Jw", callContext.id);
parseResponseJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_HandleAuthorizationResponseURL_ParseResponseJS, "ParseResponse", "AppManager_HandleAuthorizationResponseURL", {
ResponseURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.responseURLInLocal, OS.DataTypes.DataTypes.Text),
Code: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Error: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorDescription: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
IdToken: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_HandleAuthorizationResponseURL$parseResponseJSResult"))();
jsNodeResult.codeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Code, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Error, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorDescriptionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorDescription, OS.DataTypes.DataTypes.Text);
jsNodeResult.idTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IdToken, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
// AzureB2C_InvalidResponseUrl
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Qt+HxxVXF0eiqWVj31NOdg", callContext.id);
// InvalidResponseUrl.CodeLength = Length
outVars.value.invalidResponseUrlOut.codeLengthAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.length(parseResponseJSResult.value.codeOut));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Qt+HxxVXF0eiqWVj31NOdg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// InvalidResponseUrl.Error = ParseResponse.Error
outVars.value.invalidResponseUrlOut.errorAttr = parseResponseJSResult.value.errorOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Qt+HxxVXF0eiqWVj31NOdg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// InvalidResponseUrl.IdTokenLength = Length
outVars.value.invalidResponseUrlOut.idTokenLengthAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.length(parseResponseJSResult.value.idTokenOut));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Qt+HxxVXF0eiqWVj31NOdg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// InvalidResponseUrl.ErrorDescription = ParseResponse.ErrorDescription
outVars.value.invalidResponseUrlOut.errorDescriptionAttr = parseResponseJSResult.value.errorDescriptionOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Qt+HxxVXF0eiqWVj31NOdg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// IdToken = ParseResponse.IdToken
outVars.value.idTokenOut = parseResponseJSResult.value.idTokenOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Qt+HxxVXF0eiqWVj31NOdg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// AuthorizationCode = ParseResponse.Code
outVars.value.authorizationCodeOut = parseResponseJSResult.value.codeOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Qt+HxxVXF0eiqWVj31NOdg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// InvalidResponseUrl.B2C_ErrorTypesId = Unkown
outVars.value.invalidResponseUrlOut.b2C_ErrorTypesIdAttr = UBT_AppManagerModel.staticEntities.b2C_ErrorType.unkown;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Qt+HxxVXF0eiqWVj31NOdg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// isSuccess = True
outVars.value.isSuccessOut = true;
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:u1SER8ySFUGPnVaKJvm4yw", callContext.id) && ((parseResponseJSResult.value.errorOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:NkK5E439g0am8jFzsnKwbQ", callContext.id);
// Execute Action: AppManager_IndentifyError
appManager_IndentifyErrorVar.value = UBT_AppManagerController.default.appManager_IndentifyError$Action(parseResponseJSResult.value.errorDescriptionOut, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:y8MB0Y+6DkS2bQksZ0QAjA", callContext.id);
// isSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:y8MB0Y+6DkS2bQksZ0QAjA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// InvalidResponseUrl.B2C_ErrorTypesId = AppManager_IndentifyError.B2C_ErrorTypeId
outVars.value.invalidResponseUrlOut.b2C_ErrorTypesIdAttr = appManager_IndentifyErrorVar.value.b2C_ErrorTypeIdOut;
} else {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:I7MVqmH3dUuxilQFeLjE2Q", callContext.id) && ((parseResponseJSResult.value.codeOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:rLKjCQHjZkeu5Y4Zoqmbew", callContext.id);
return outVars.value;

}

}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:K6OktnNry0K_OdcN58fzSA", callContext.id);
// isSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:IPI_7smn30+D4BnUWQdi6Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:fJQE6GY1KUKIDTMRDgd1dw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_HandleAuthorizationResponseURL$vars", [{
name: "ResponseURL",
attrName: "responseURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_HandleAuthorizationResponseURL$parseResponseJSResult", [{
name: "Code",
attrName: "codeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Error",
attrName: "errorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorDescription",
attrName: "errorDescriptionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IdToken",
attrName: "idTokenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_HandleAuthorizationResponseURL$outVars", [{
name: "AuthorizationCode",
attrName: "authorizationCodeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IdToken",
attrName: "idTokenOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "InvalidResponseUrl",
attrName: "invalidResponseUrlOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.Token_InvalidResponseUrlRec();
},
complexType: UBT_AppManagerModel.Token_InvalidResponseUrlRec
}, {
name: "isSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_HandleAuthorizationResponseURL$Action = function (responseURLIn) {
responseURLIn = (responseURLIn === undefined) ? "" : responseURLIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_HandleAuthorizationResponseURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(responseURLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AuthorizationCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.authorizationCodeOut, OS.DataTypes.DataTypes.Text),
IdToken: OS.DataConversion.JSNodeParamConverter.to(actionResults.idTokenOut, OS.DataTypes.DataTypes.Text),
InvalidResponseUrl: actionResults.invalidResponseUrlOut,
isSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBT_AppManager.controller$AppManager_HandleAuthorizationResponseURL.ParseResponseJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
/*var url = new URL($parameters.ResponseURL);
var params = new URLSearchParams(url.hash.substring(1));

$parameters.Code = params.get("code") || "";
$parameters.Error = params.get("error") || "";
$parameters.ErrorDescription = params.get("error_description") || "";
$parameters.IdToken = params.get("id_token") || "";*/

var url = new URL($parameters.ResponseURL);

// Adding support to parse both sources (Hash and parameters), as Front Egg might send the info as parameters
var hashParams = new URLSearchParams(url.hash.substring(1));
var queryParams = new URLSearchParams(url.search);

// Helper: get param from hash, fall back to query
function getParam(key) {
  return hashParams.get(key) || queryParams.get(key) || "";
}

// Assign parameters
$parameters.Code = getParam("code");
$parameters.Error = getParam("error");
$parameters.ErrorDescription = getParam("error_description");
$parameters.IdToken = getParam("id_token");
};
});

define("UBT_AppManager.controller$AppManager_HandleCallback", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBTJavaScriptUtils.controller", "TempC11382.controller", "ApplicationInsightsConnector.controller", "NavigationHandler.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AzureInsights_CreateCustomEvent", "UBT_AppManager_CS.model$AppManager_UserInfoClientRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.controller$AppManager_SetUserContextAfterLogin", "UBT_AppManager.controller$AppManager_GetAppId", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AppManager_GetCallbackURL", "TempC11382.controller$AlertErrorC11382", "UBT_AppManager.referencesHealth$TempC11382", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager.controller$AppManager_GetDeviceContext", "UBT_AppManager.controller$PIN_Check", "ApplicationInsightsConnector.controller$SetupApplicationInsights", "UBT_AppManager.referencesHealth$ApplicationInsightsConnector", "UBT_AppManager.model$Token_InvalidResponseUrlRec", "UBT_AppManager.controller$AppManager_HandleAuthorizationResponseURL", "UBT_AppManager.controller$AppManager_Login", "UBT_AppManager.model$AppManager_CallbackRec", "UBT_AppManager.controller$AppManager_OnCallback", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty", "UBT_AppManager.controller$ServerAction.AppManager_Login", "UBT_AppManager.controller$AppManager_HandleDeviceAwarenessPopUp", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetTextProperty", "UBTJavaScriptUtils.controller$JSUtils_RunFunc_Sync_WithTextResult", "UBT_AppManager.controller$AppManager_TryDeserializeMessageWithTitle", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBT_AppManager.referencesHealth$NavigationHandler"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBTJavaScriptUtilsController, TempC11382Controller, ApplicationInsightsConnectorController, NavigationHandlerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_HandleCallback$Action = function (uRLIn, resetPasswordPopupIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_HandleCallback$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.resetPasswordPopupIdInLocal = resetPasswordPopupIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var appManager_LoginVar = new OS.DataTypes.VariableHolder();
var appManager_GetAppIdVar = new OS.DataTypes.VariableHolder();
var appManager_GetCallbackURLVar = new OS.DataTypes.VariableHolder();
var appManager_GetDeviceContextVar = new OS.DataTypes.VariableHolder();
var pIN_CheckVar = new OS.DataTypes.VariableHolder();
var appManager_HandleAuthorizationResponseURLVar = new OS.DataTypes.VariableHolder();
var appManager_JSUtils_ElementCache_GetObjPropertyVar = new OS.DataTypes.VariableHolder();
var appManager_HandleDeviceAwarenessPopUpVar = new OS.DataTypes.VariableHolder();
var getResetPasswordPopUpIdVar = new OS.DataTypes.VariableHolder();
var jSUtils_RunFunc_WithTextResultVar = new OS.DataTypes.VariableHolder();
var appManager_TryDeserializeMessageWithTitleVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.appManager_LoginVar = appManager_LoginVar;
varBag.appManager_GetAppIdVar = appManager_GetAppIdVar;
varBag.appManager_GetCallbackURLVar = appManager_GetCallbackURLVar;
varBag.appManager_GetDeviceContextVar = appManager_GetDeviceContextVar;
varBag.pIN_CheckVar = pIN_CheckVar;
varBag.appManager_HandleAuthorizationResponseURLVar = appManager_HandleAuthorizationResponseURLVar;
varBag.appManager_JSUtils_ElementCache_GetObjPropertyVar = appManager_JSUtils_ElementCache_GetObjPropertyVar;
varBag.appManager_HandleDeviceAwarenessPopUpVar = appManager_HandleDeviceAwarenessPopUpVar;
varBag.getResetPasswordPopUpIdVar = getResetPasswordPopUpIdVar;
varBag.jSUtils_RunFunc_WithTextResultVar = jSUtils_RunFunc_WithTextResultVar;
varBag.appManager_TryDeserializeMessageWithTitleVar = appManager_TryDeserializeMessageWithTitleVar;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:eZjT8kivBEqHBvt9Th6MeQ:/ClientActionFlows.eZjT8kivBEqHBvt9Th6MeQ:8o3A2B2X_YWEjMsHmvuaOg", "UBT_AppManager", "AppManager_HandleCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:zExN3Oa0fkSnYkgFJKl4YQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
var block2 = false;
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
block2 = false;
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:yBMQ8x3uj0KLlb9RdTzWSw", callContext.id);
// Execute Action: ReplaceOnUpcomingNavigation
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:dwiZgXlu7UOQP5HL6emvtg", callContext.id);
// Execute Action: AppManager_HandleAuthorizationResponseURL
appManager_HandleAuthorizationResponseURLVar.value = UBT_AppManagerController.default.appManager_HandleAuthorizationResponseURL$Action(vars.value.uRLInLocal, callContext);

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:HJm09fFUq0OG7aGArpzCYQ", callContext.id) && (vars.value.resetPasswordPopupIdInLocal === ""))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:IV2w1rMbXE+qt1O6mvKJFA", callContext.id);
// Execute Action: GetResetPasswordPopUpId
getResetPasswordPopUpIdVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetTextProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.id_ResetPasswordPopUp, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mTpt1QQWMEWxEE8j1Gfyyw", callContext.id);
// ResetPasswordPopupId = GetResetPasswordPopUpId.Value
vars.value.resetPasswordPopupIdInLocal = getResetPasswordPopUpIdVar.value.valueOut;
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V9hKCubXcEiwqzupgde3gA", callContext.id);
// AppManager_Callback.isSucess = True
vars.value.appManager_CallbackVar.isSucessAttr = true;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V9hKCubXcEiwqzupgde3gA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AppManager_Callback.CallbackType = IdP_OnLogin
vars.value.appManager_CallbackVar.callbackTypeAttr = UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnLogin;
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:MrXTTxMUuUWjtYLZ4xrUoQ", callContext.id) && appManager_HandleAuthorizationResponseURLVar.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ihteWANNlEGVptrVt0fvog", callContext.id);
// Execute Action: AppManager_GetDeviceContext
appManager_GetDeviceContextVar.value = UBT_AppManagerController.default.appManager_GetDeviceContext$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:A50OIHfeX0mCMJTNTy0iIw", callContext.id);
// Execute Action: AppManager_GetCallbackURL
appManager_GetCallbackURLVar.value = UBT_AppManagerController.default.appManager_GetCallbackURL$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:UUPbElBi80290py+UQnEvQ", callContext.id);
// Execute Action: AppManager_GetAppId
appManager_GetAppIdVar.value = UBT_AppManagerController.default.appManager_GetAppId$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:NzTxF83z8kOx28pcsqZ2yQ", callContext.id);
// Execute Action: JSUtils_Console_Log2
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("Callback Starting Login", callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7DzeuobZjk2oKNSfewue0Q", callContext.id) && UBT_AppManagerClientVariables.getStreamline_TOTPOnLogin())) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Vlm6uvoHxUiacdbc2cD7zA", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_GetObjProperty
appManager_JSUtils_ElementCache_GetObjPropertyVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_StreamlineTOTPCallback, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:VffT3+L9G0uTQDbLoUtiSA", callContext.id);
// Execute Action: JSUtils_RunFunc_WithTextResult
return UBTJavaScriptUtilsController.default.jSUtils_RunFunc_Sync_WithTextResult$Action(appManager_JSUtils_ElementCache_GetObjPropertyVar.value.valueOut, null, callContext).then(function (value) {
jSUtils_RunFunc_WithTextResultVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2M1FLsc81US4m4LLkwxZvQ", callContext.id);
// LoginTOTP = JSUtils_RunFunc_WithTextResult.Result
vars.value.loginTOTPVar = jSUtils_RunFunc_WithTextResultVar.value.resultOut;
});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:O0I3u5ltGEGWohHOiD0BxA", callContext.id);
// Execute Action: AppManager_Login
return controller.appManager_Login$ServerAction(appManager_GetAppIdVar.value.getAppIdOut, appManager_HandleAuthorizationResponseURLVar.value.authorizationCodeOut, appManager_HandleAuthorizationResponseURLVar.value.idTokenOut, appManager_GetDeviceContextVar.value.appManager_MobileContextOut, appManager_GetCallbackURLVar.value.redirectURIOut, UBT_AppManagerClientVariables.getFrontEgg_CodeVerifier(), vars.value.loginTOTPVar, callContext).then(function (value) {
appManager_LoginVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ujRGoiG9GUWA2HKW8ZElHg", callContext.id);
// Execute Action: JSUtils_Console_Log3
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("Callback Ending Login", callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lF1pCQAJpUK8RHWeoxCkvg", callContext.id);
// AppManager_Callback.LoginOperationGUID = AppManager_Login.AppManager_UserInfoClient.LoginOperationGUID
vars.value.appManager_CallbackVar.loginOperationGUIDAttr = appManager_LoginVar.value.appManager_UserInfoClientOut.loginOperationGUIDAttr;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:IgaQBxH2y0OcuVxgS0JzRg", callContext.id) && UBT_AppManagerClientVariables.getAzureInsights_Use())) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KhAdcwR7wESOSELk3NXVKg", callContext.id);
// Execute Action: SetupApplicationInsights
return ApplicationInsightsConnectorController.default.setupApplicationInsights$Action(appManager_LoginVar.value.appManager_ClientConfigOut.azureInsights_ConnectionStringAttr, callContext);
}

});
}).then(function () {
// isValidDevice
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9cKxKxvhf0K2AidNMKIjNA", callContext.id) && appManager_LoginVar.value.isValidDeviceOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JO7VuV4uBUW9+bpBY3+4eQ", callContext.id);
// Execute Action: JSUtils_Console_Log4
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("Callback with Valid Device", callContext);
// UserResettedPassword?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:rPqK4usxgUKOuIAgX888Bg", callContext.id) && appManager_LoginVar.value.isResetPasswordOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:S816GOIZt0m6DxYD02Xcmg", callContext.id);
// AppManager_Callback.CallbackType = IdP_OnResetPassword
vars.value.appManager_CallbackVar.callbackTypeAttr = UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnResetPassword;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:S816GOIZt0m6DxYD02Xcmg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AppManager_Callback.Message = "Your password has been successfully changed. Please log in using your new password."
vars.value.appManager_CallbackVar.messageAttr = "Your password has been successfully changed. Please log in using your new password.";
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:x104CfABmkuXGjBCwba_pw", callContext.id);
// Execute Action: AzureInsightsLog_ResetPass
return UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents.auth_ResetPassword, "", callContext);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:bfsdmypda0KmROIdyKS3FQ", callContext.id);
// Execute Action: AzureInsightsLog_Login
return UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents.auth_Login, "", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:C7PkDp0nF0uK+0isxwpJ8w", callContext.id);
// Execute Action: AppManager_SetUserContextAfterLogin
return UBT_AppManagerController.default.appManager_SetUserContextAfterLogin$Action(appManager_LoginVar.value.appManager_UserInfoClientOut, appManager_LoginVar.value.appManager_ClientConfigOut, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:aWHnabJRckCPi9xRmnl1AA", callContext.id);
// Execute Action: PIN_Check
pIN_CheckVar.value = UBT_AppManagerController.default.pIN_Check$Action(callContext);

}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DoLsyGp5Xk+y1nhgRZArAA", callContext.id) && pIN_CheckVar.value.needRegisterOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:G3Upa5wjZEiX6jVfJVrM3Q", callContext.id);
// AppManager_Callback.CallbackType = PIN_NeedRegistration
vars.value.appManager_CallbackVar.callbackTypeAttr = UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.pIN_NeedRegistration;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:G3Upa5wjZEiX6jVfJVrM3Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AppManager_Callback.Message = "Please register a PIN"
vars.value.appManager_CallbackVar.messageAttr = "Please register a PIN";
}

});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lz2S6rZVU0yRrM9zkcG6TA", callContext.id);
// Execute Action: AzureInsightsLog_InvalidDeviceIdentified
return UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents.invalidDeviceLogin_Identified, "", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:C3FTIMKAhkyJOYoYyWufVg", callContext.id);
// Execute Action: JSUtils_Console_Log5
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("Callback with Invalid Device", callContext);
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:J_4UJe_Za0CTyzTa+2cjpg", callContext.id) && ((vars.value.resetPasswordPopupIdInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:EFCP0ovtAEehYZV52+rByQ", callContext.id);
// Execute Action: AppManager_HandleDeviceAwarenessPopUp
return UBT_AppManagerController.default.appManager_HandleDeviceAwarenessPopUp$Action(vars.value.resetPasswordPopupIdInLocal, appManager_LoginVar.value.appManager_UserInfoClientOut.loginOperationGUIDAttr, callContext).then(function (value) {
appManager_HandleDeviceAwarenessPopUpVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZEm2S1gMKUWJX90Ikhnfpw", callContext.id) && appManager_HandleDeviceAwarenessPopUpVar.value.isCancelledOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:zg5nW9_si0imnunGwIUuxQ", callContext.id);
// AppManager_Callback.CallbackType = IdP_OnCancelled
vars.value.appManager_CallbackVar.callbackTypeAttr = UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnCancelled;
// jump to block2
block2 = true;
return OS.Flow.breakAsync();
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:GV3CLw444EWUFOUT_3cSig", callContext.id);
return OS.Flow.returnAsync();

}

});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:roiF_gPLBkGsz3RVfJHQnQ", callContext.id);
// Execute Action: JSUtils_Console_Log6
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("No password pop up", callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:UkPULI7IUUCPNGDxNInwbw", callContext.id);
// AppManager_Callback.isSucess = False
vars.value.appManager_CallbackVar.isSucessAttr = false;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:UkPULI7IUUCPNGDxNInwbw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AppManager_Callback.Message = "Invalid Device"
vars.value.appManager_CallbackVar.messageAttr = "Invalid Device";
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:UkPULI7IUUCPNGDxNInwbw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// AppManager_Callback.CallbackType = DeviceAwareness_InvalidDevice
vars.value.appManager_CallbackVar.callbackTypeAttr = UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.deviceAwareness_InvalidDevice;
return OS.Flow.breakAsync();
}

});
});
}

});
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:QKVOyil4tUW73yA1xL2AJg", callContext.id) && (appManager_HandleAuthorizationResponseURLVar.value.invalidResponseUrlOut.b2C_ErrorTypesIdAttr === UBT_AppManagerModel.staticEntities.b2C_ErrorType.cancelled))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:5crQDLOsT0KYZWlxQfx9Fw", callContext.id);
// AppManager_Callback.CallbackType = IdP_OnCancelled
vars.value.appManager_CallbackVar.callbackTypeAttr = UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnCancelled;
} else {
return OS.Flow.executeSequence(function () {
if((appManager_HandleAuthorizationResponseURLVar.value.invalidResponseUrlOut.b2C_ErrorTypesIdAttr === UBT_AppManagerModel.staticEntities.b2C_ErrorType.resetPassword)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:spW1jkv8wUKky4dUntyxFw", callContext.id);
// Execute Action: GoToResetPassword2
return UBT_AppManagerController.default.appManager_Login$Action(true, vars.value.resetPasswordPopupIdInLocal, "", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:II8U1qa0DkaKJaAK0WkQcg", callContext.id);
return OS.Flow.returnAsync();

});
} else {
return OS.Flow.executeSequence(function () {
if((appManager_HandleAuthorizationResponseURLVar.value.invalidResponseUrlOut.b2C_ErrorTypesIdAttr === UBT_AppManagerModel.staticEntities.b2C_ErrorType.scriptError)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:tw22Nvz0+U2Xr7zuEZFS3Q", callContext.id);
// Execute Action: AlertErrorC11382
return TempC11382Controller.default.alertErrorC11382$Action(vars.value.uRLInLocal, appManager_HandleAuthorizationResponseURLVar.value.invalidResponseUrlOut.b2C_ErrorTypesIdAttr, appManager_HandleAuthorizationResponseURLVar.value.invalidResponseUrlOut.errorDescriptionAttr, appManager_HandleAuthorizationResponseURLVar.value.invalidResponseUrlOut.errorAttr, callContext);
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:v5VPDeqW60uriHuFWzrVOg", callContext.id);
// AppManager_Callback.isSucess = False
vars.value.appManager_CallbackVar.isSucessAttr = false;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:v5VPDeqW60uriHuFWzrVOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AppManager_Callback.Message = AppManager_HandleAuthorizationResponseURL.InvalidResponseUrl.ErrorDescription
vars.value.appManager_CallbackVar.messageAttr = appManager_HandleAuthorizationResponseURLVar.value.invalidResponseUrlOut.errorDescriptionAttr;
});
}

});
}

}).then(function () {
// Dummy
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RrII3hDtT0KLyldX8cjswQ", callContext.id);
});
}

}).then(function () {
// Dummy
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KFDP1W6c30aVGJFZMiaq_Q", callContext.id);
});
}).then(function () {
if(block2) {
return OS.Flow.breakAsync();
}

}).then(function () {
// Dummy
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:BZv+HB8gz0e05m_Ddf4+_Q", callContext.id);
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nX9zoJhEqkmXTDwNJG871Q", callContext.id);
// Execute Action: AppManager_OnLoginCallback2
UBT_AppManagerController.default.appManager_OnCallback$Action(vars.value.appManager_CallbackVar, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+e1tAi7N406DPXXm62vRWg", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("AppManager_HandleCallback.AppManager_HandleCallback", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:hSmXsG0gVEiXW++B0zpNhg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:oxK844JI8EChNENekk0t0w", callContext.id);
// Execute Action: AppManager_TryDeserializeMessageWithTitle
appManager_TryDeserializeMessageWithTitleVar.value = UBT_AppManagerController.default.appManager_TryDeserializeMessageWithTitle$Action(allExceptionsVar.value.exceptionMessageAttr, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:1h54yK_VRUCSnbDnhixz1Q", callContext.id);
// AppManager_Callback.isSucess = False
vars.value.appManager_CallbackVar.isSucessAttr = false;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:1h54yK_VRUCSnbDnhixz1Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AppManager_Callback.Message = AppManager_TryDeserializeMessageWithTitle.Message
vars.value.appManager_CallbackVar.messageAttr = appManager_TryDeserializeMessageWithTitleVar.value.messageOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:1h54yK_VRUCSnbDnhixz1Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// AppManager_Callback.MessageTitle = AppManager_TryDeserializeMessageWithTitle.MessageTitle
vars.value.appManager_CallbackVar.messageTitleAttr = appManager_TryDeserializeMessageWithTitleVar.value.messageTitleOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:1h54yK_VRUCSnbDnhixz1Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// AppManager_Callback.MessageType = AppManager_TryDeserializeMessageWithTitle.MessageType
vars.value.appManager_CallbackVar.messageTypeAttr = appManager_TryDeserializeMessageWithTitleVar.value.messageTypeOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:utkDu9HbTkS2Ji1Vs_ObLA", callContext.id);
// Execute Action: AppManager_OnLoginCallback3
UBT_AppManagerController.default.appManager_OnCallback$Action(vars.value.appManager_CallbackVar, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wRc12FVtnUOw9cVpeE2R3A", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:eZjT8kivBEqHBvt9Th6MeQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:eZjT8kivBEqHBvt9Th6MeQ", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_HandleCallback$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ResetPasswordPopupId",
attrName: "resetPasswordPopupIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AppManager_Callback",
attrName: "appManager_CallbackVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.AppManager_CallbackRec();
},
complexType: UBT_AppManagerModel.AppManager_CallbackRec
}, {
name: "LoginTOTP",
attrName: "loginTOTPVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_HandleCallback$Action = function (uRLIn, resetPasswordPopupIdIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
resetPasswordPopupIdIn = (resetPasswordPopupIdIn === undefined) ? "" : resetPasswordPopupIdIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_HandleCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(resetPasswordPopupIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_HandleDeviceAwarenessPopUp", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "NavigationHandler.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_Login", "UBT_AppManager.controller$AzureInsights_CreateCustomEvent", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$ServerAction.AppManager_ChangeDevice", "UBT_AppManager.controller$AppManager_GetAppId", "NavigationHandler.controller$ConfirmAction", "UBT_AppManager.referencesHealth$NavigationHandler", "UBT_AppManager.controller$AppManager_GetDeviceContext", "UBT_AppManager.controller$InAppBrowser_Close"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, NavigationHandlerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_HandleDeviceAwarenessPopUp$Action = function (resetPasswordPopupIdIn, loginOperationGUIDIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_HandleDeviceAwarenessPopUp$vars"))());
vars.value.resetPasswordPopupIdInLocal = resetPasswordPopupIdIn;
vars.value.loginOperationGUIDInLocal = loginOperationGUIDIn;
var appManager_GetAppIdVar = new OS.DataTypes.VariableHolder();
var deviceAwarenessConfirmationVar = new OS.DataTypes.VariableHolder();
var appManager_GetDeviceContextVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_HandleDeviceAwarenessPopUp$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_GetAppIdVar = appManager_GetAppIdVar;
varBag.deviceAwarenessConfirmationVar = deviceAwarenessConfirmationVar;
varBag.appManager_GetDeviceContextVar = appManager_GetDeviceContextVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:rMqd3ww5b02AvYgLajc8Mg:/ClientActionFlows.rMqd3ww5b02AvYgLajc8Mg:FNGgYSbv5zs8d1+kdS3OsQ", "UBT_AppManager", "AppManager_HandleDeviceAwarenessPopUp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZFOpkvsuUEuapd2v4mXYUw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PTs7_2m4q0mAHmkq2GQrCg", callContext.id);
// Execute Action: InAppBrowser_Close
UBT_AppManagerController.default.inAppBrowser_Close$Action(false, false, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:luPbxjNsLE+UcxCrpTqrSw", callContext.id);
// Execute Action: DeviceAwarenessConfirmation
return NavigationHandlerController.default.confirmAction$Action(vars.value.resetPasswordPopupIdInLocal, callContext).then(function (value) {
deviceAwarenessConfirmationVar.value = value;
}).then(function () {
// Confirmed Device Awareness
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XjwYnxWrD06COGs+YfHT0w", callContext.id) && deviceAwarenessConfirmationVar.value.isConfirmedOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:oVQ4gJ35aE+RmkkS39Xr3g", callContext.id);
// Execute Action: AzureInsightsLog_InvalidDeviceContinued
return UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents.invalidDeviceLogin_Continued, "", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wpdfs0LFCkmrfNURYejYyg", callContext.id);
// Execute Action: AppManager_GetAppId
appManager_GetAppIdVar.value = UBT_AppManagerController.default.appManager_GetAppId$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PKcvypGSQ0mkOM1zo43Kvg", callContext.id);
// Execute Action: AppManager_GetDeviceContext
appManager_GetDeviceContextVar.value = UBT_AppManagerController.default.appManager_GetDeviceContext$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:SBtoXTXAUkuFhF3JOfoR7g", callContext.id);
// Execute Action: AppManager_ChangeDevice
return controller.appManager_ChangeDevice$ServerAction(appManager_GetAppIdVar.value.getAppIdOut, appManager_GetDeviceContextVar.value.appManager_MobileContextOut, vars.value.loginOperationGUIDInLocal, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:4PamIkMlCE2oq10QBDjGhQ", callContext.id);
// Execute Action: GoToResetPassword
return UBT_AppManagerController.default.appManager_Login$Action(true, vars.value.resetPasswordPopupIdInLocal, "", callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iIcRVr4vkUKUgFB7k6a1Yg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:QgntXJrYJUKt9axVaWTOCg", callContext.id);
// Execute Action: AzureInsightsLog_InvalidDeviceCancelled
return UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents.invalidDeviceLogin_Cancelled, "", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:3+yLAAaQAUGMKDVXCN6_uQ", callContext.id);
// isCancelled = True
outVars.value.isCancelledOut = true;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:O_+EwqzOrEqewIaKipqxKA", callContext.id);
});
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:rMqd3ww5b02AvYgLajc8Mg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:rMqd3ww5b02AvYgLajc8Mg", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_HandleDeviceAwarenessPopUp$vars", [{
name: "ResetPasswordPopupId",
attrName: "resetPasswordPopupIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LoginOperationGUID",
attrName: "loginOperationGUIDInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_HandleDeviceAwarenessPopUp$outVars", [{
name: "isCancelled",
attrName: "isCancelledOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_HandleDeviceAwarenessPopUp$Action = function (resetPasswordPopupIdIn, loginOperationGUIDIn) {
resetPasswordPopupIdIn = (resetPasswordPopupIdIn === undefined) ? "" : resetPasswordPopupIdIn;
loginOperationGUIDIn = (loginOperationGUIDIn === undefined) ? "" : loginOperationGUIDIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_HandleDeviceAwarenessPopUp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(resetPasswordPopupIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(loginOperationGUIDIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
isCancelled: OS.DataConversion.JSNodeParamConverter.to(actionResults.isCancelledOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager.controller$AppManager_IndentifyError", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_IndentifyError$Action = function (errorDescriptionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_IndentifyError$vars"))());
vars.value.errorDescriptionInLocal = errorDescriptionIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_IndentifyError$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:noBAoAFvuUSZNJqoBGAhUQ:/ClientActionFlows.noBAoAFvuUSZNJqoBGAhUQ:o9zS0g7khafwOWJPAvXHxQ", "UBT_AppManager", "AppManager_IndentifyError", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Nu7y8tinEEWVVt0os1L6zg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KoqJ1UAHkUWYxXl5sTu8mg", callContext.id) && (OS.BuiltinFunctions.index(vars.value.errorDescriptionInLocal, UBT_AppManagerModel.staticEntities.b2C_ErrorType.resetPassword, 0, false, false) >= 0))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:3TBT7_FgBk23OpaKYjWshA", callContext.id);
// B2C_ErrorTypeId = ResetPassword
outVars.value.b2C_ErrorTypeIdOut = UBT_AppManagerModel.staticEntities.b2C_ErrorType.resetPassword;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:x3GxLEzNPE6K4E0agh+fIQ", callContext.id);
} else {
if((OS.BuiltinFunctions.index(vars.value.errorDescriptionInLocal, UBT_AppManagerModel.staticEntities.b2C_ErrorType.cancelled, 0, false, false) >= 0)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:sd3fB7tVwEet2z6YgcmMow", callContext.id);
// B2C_ErrorTypeId = Cancelled
outVars.value.b2C_ErrorTypeIdOut = UBT_AppManagerModel.staticEntities.b2C_ErrorType.cancelled;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:arBRVEu5okG+WtwcdGm52g", callContext.id);
} else {
if((OS.BuiltinFunctions.index(vars.value.errorDescriptionInLocal, UBT_AppManagerModel.staticEntities.b2C_ErrorType.scriptError, 0, false, false) >= 0)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:rpPWezqgfUWCOutjlR7Zdw", callContext.id);
// B2C_ErrorTypeId = ScriptError
outVars.value.b2C_ErrorTypeIdOut = UBT_AppManagerModel.staticEntities.b2C_ErrorType.scriptError;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:xGWYLCHzwE+a+t+YPsawMA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:kgPU0nju+EWCwhbUoj5Swg", callContext.id);
// B2C_ErrorTypeId = Unkown
outVars.value.b2C_ErrorTypeIdOut = UBT_AppManagerModel.staticEntities.b2C_ErrorType.unkown;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:6XK3cc0RsUaHYwP59ZzRjQ", callContext.id);
}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:noBAoAFvuUSZNJqoBGAhUQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_IndentifyError$vars", [{
name: "ErrorDescription",
attrName: "errorDescriptionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_IndentifyError$outVars", [{
name: "B2C_ErrorTypeId",
attrName: "b2C_ErrorTypeIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_IndentifyError$Action = function (errorDescriptionIn) {
errorDescriptionIn = (errorDescriptionIn === undefined) ? "" : errorDescriptionIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_IndentifyError$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(errorDescriptionIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
B2C_ErrorTypeId: actionResults.b2C_ErrorTypeIdOut
};
});
};
});

define("UBT_AppManager.controller$AppManager_InitializeWebComponents", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "OutSystemsUI_2_23.controller", "ApplicationInsightsConnector.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager_CS.model", "UBT_AppManager.controller$AppManager_InitializeWebComponents.HasRenderedSplashJS", "UBT_AppManager.clientVariables", "OutSystemsUI_2_23.controller$IsRunningAsPWA", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$OutSystemsUI_2_23", "UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked", "ApplicationInsightsConnector.controller$SetupApplicationInsights", "UBT_AppManager.referencesHealth$ApplicationInsightsConnector", "UBT_AppManager.controller$AppManager_SetPIN_IsLocked", "OutSystemsUI_2_23.controller$GetBrowser", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.controller$GetOS", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_GetDeviceContext", "UBT_AppManager.controller$DelayedMessage_Show", "UBT_AppManager.controller$AppManager_SetDeviceContext", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.controller$AppManager_AfterInitialize", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty", "UBT_AppManager.controller$AzureInsights_UpdateContext", "UBT_AppManager.controller$FRD_Initialize", "UBT_AppManager.controller$AppManager_OnReadyChecker_Set", "UBTJavaScriptUtils.controller$JSUtils_GenerateGuid"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, OutSystemsUI_2_23Controller, ApplicationInsightsConnectorController, UBTJavaScriptUtilsController, UBT_AppManager_CSModel, UBT_AppManager_controller_AppManager_InitializeWebComponents_HasRenderedSplashJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_InitializeWebComponents$Action = function (configIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_InitializeWebComponents$vars"))());
vars.value.configInLocal = configIn.clone();
var isRunningAsPWAVar = new OS.DataTypes.VariableHolder();
var getBrowserVar = new OS.DataTypes.VariableHolder();
var getOSVar = new OS.DataTypes.VariableHolder();
var appManager_GetDeviceContextVar = new OS.DataTypes.VariableHolder();
var get_OnAfterInitializeCallbackVar = new OS.DataTypes.VariableHolder();
var hasRenderedSplashJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.isRunningAsPWAVar = isRunningAsPWAVar;
varBag.getBrowserVar = getBrowserVar;
varBag.getOSVar = getOSVar;
varBag.appManager_GetDeviceContextVar = appManager_GetDeviceContextVar;
varBag.get_OnAfterInitializeCallbackVar = get_OnAfterInitializeCallbackVar;
varBag.hasRenderedSplashJSResult = hasRenderedSplashJSResult;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:F2fTDYqD9U6ZGGPfCCzxFQ:/ClientActionFlows.F2fTDYqD9U6ZGGPfCCzxFQ:nsI122_TTYVnHNR30DLvSQ", "UBT_AppManager", "AppManager_InitializeWebComponents", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XcWmbX2zIkeMvgVidoBfXA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Q9ttdtnYQkm+RnhIGkERug", callContext.id);
// Execute Action: AppManager_GetDeviceContext
appManager_GetDeviceContextVar.value = UBT_AppManagerController.default.appManager_GetDeviceContext$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Bos3cuu5r0mXszC2MOo5oQ", callContext.id);
// Execute Action: GetOS
getOSVar.value = OutSystemsUI_2_23Controller.default.getOS$Action(OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.getUserAgent()), callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:SD_ybl0JOUeh_fzACFTZ+A", callContext.id);
// Execute Action: GetBrowser
getBrowserVar.value = OutSystemsUI_2_23Controller.default.getBrowser$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:geA6KnOnTEWMtd8BORNT9A", callContext.id);
// Execute Action: IsRunningAsPWA
isRunningAsPWAVar.value = OutSystemsUI_2_23Controller.default.isRunningAsPWA$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:SbW0xiciXkKKEgJ2i9fAhg", callContext.id);
// AppManager_GetDeviceContext.AppManager_MobileContext.DevicePlatform = GetOS.OS
appManager_GetDeviceContextVar.value.appManager_MobileContextOut.devicePlatformAttr = getOSVar.value.oSOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:SbW0xiciXkKKEgJ2i9fAhg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AppManager_GetDeviceContext.AppManager_MobileContext.iaRunningAsPWA = IsRunningAsPWA.IsStandalone
appManager_GetDeviceContextVar.value.appManager_MobileContextOut.iaRunningAsPWAAttr = isRunningAsPWAVar.value.isStandaloneOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:SbW0xiciXkKKEgJ2i9fAhg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// AppManager_GetDeviceContext.AppManager_MobileContext.Browser = GetBrowser.Browser
appManager_GetDeviceContextVar.value.appManager_MobileContextOut.browserAttr = getBrowserVar.value.browserOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:SbW0xiciXkKKEgJ2i9fAhg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// AppManager_GetDeviceContext.AppManager_MobileContext.UserAgent = GetUserAgent
appManager_GetDeviceContextVar.value.appManager_MobileContextOut.userAgentAttr = OS.BuiltinFunctions.getUserAgent();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:U+__ViMFrECAECLphpjfIg", callContext.id);
// Execute Action: AppManager_SetPIN_IsLocked
UBT_AppManagerController.default.appManager_SetPIN_IsLocked$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:gSN0A8HBTkyKNOm2cOGioQ", callContext.id);
hasRenderedSplashJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_InitializeWebComponents_HasRenderedSplashJS, "HasRenderedSplash", "AppManager_InitializeWebComponents", {
HasRendered: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_InitializeWebComponents$hasRenderedSplashJSResult"))();
jsNodeResult.hasRenderedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasRendered, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZL7Lt3ZqzUGF6ZjE8ldFgw", callContext.id) && !(hasRenderedSplashJSResult.value.hasRenderedOut))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:oFUtQzx3bke+iuHCrIcXmw", callContext.id);
// Execute Action: AppManager_SetPIN_HasUnlocked
UBT_AppManagerController.default.appManager_SetPIN_HasUnlocked$Action(false, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:HG6saPsMWkaTO4H4K_tSJg", callContext.id) && (!(appManager_GetDeviceContextVar.value.appManager_MobileContextOut.isNativeDeviceAttr) && (appManager_GetDeviceContextVar.value.appManager_MobileContextOut.uUIDAttr === "")))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:54hICcSdt0q99JM_un2otA", callContext.id);
// AppManager_GetDeviceContext.AppManager_MobileContext.UUID = "WEB_" + JSUtils_GenerateGuid()
appManager_GetDeviceContextVar.value.appManager_MobileContextOut.uUIDAttr = ("WEB_" + OutSystemsDebugger.handleFunctionCall(function () {
return UBTJavaScriptUtilsController.default.jSUtils_GenerateGuid$Action(callContext).guidOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:C0Jklh1NkU6qc1yjGbeCPg", callContext.id);
// Execute Action: AppManager_SetDeviceContext
UBT_AppManagerController.default.appManager_SetDeviceContext$Action(appManager_GetDeviceContextVar.value.appManager_MobileContextOut, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7TSK4N0vUEO+3QZTjCoZBQ", callContext.id);
// Execute Action: FRD_Initialize
return UBT_AppManagerController.default.fRD_Initialize$Action(vars.value.configInLocal, callContext).then(function () {
// Is Use App Insights ? 
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DFt+v0sbAEeTL0Cg5+Ipng", callContext.id) && vars.value.configInLocal.appManager_ClientCacheAttr.azureInsights_UseAttr)) {
// Is Native? 
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:B7uCopDHX025GVKFRk3fRQ", callContext.id) && !(UBT_AppManagerClientVariables.getDeviceInfo_IsNative()))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:tNSDTzPN40+2rGJHIw1F3A", callContext.id);
// Execute Action: SetupApplicationInsights
return ApplicationInsightsConnectorController.default.setupApplicationInsights$Action(vars.value.configInLocal.azureInsights_ConnectionStringAttr, callContext);
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wIdUxYxTUE6VSFq6WX5O1A", callContext.id);
// Execute Action: AzureInsights_UpdateContext
return UBT_AppManagerController.default.azureInsights_UpdateContext$Action(callContext);
});
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:gsj1kTbyG0eE3Ho8pSBIrA", callContext.id);
// Execute Action: DelayedMessage_Show
UBT_AppManagerController.default.delayedMessage_Show$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WBlXmlqA6UWOR2gGauXZJA", callContext.id);
// Execute Action: AppManager_AfterInitialize
return UBT_AppManagerController.default.appManager_AfterInitialize$Action(vars.value.configInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WVW5xBNqR02qCVCuthEgPA", callContext.id);
// Execute Action: Get_OnAfterInitializeCallback
get_OnAfterInitializeCallbackVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_OnAfterInitializeCallback, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9HEfb_oggU+SYC4S26245w", callContext.id);
// Execute Action: JSUtils_RunFunc
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action(get_OnAfterInitializeCallbackVar.value.valueOut, null, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+HNy4siPVU6yiqMLJkeq_g", callContext.id);
// Execute Action: AppManager_OnReadyChecker_Set
UBT_AppManagerController.default.appManager_OnReadyChecker_Set$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:BUZYTVF43EmQLIrVBT4rVQ", callContext.id);
});
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:F2fTDYqD9U6ZGGPfCCzxFQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:F2fTDYqD9U6ZGGPfCCzxFQ", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_InitializeWebComponents$vars", [{
name: "Config",
attrName: "configInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_ConfigClientRec();
},
complexType: UBT_AppManager_CSModel.AppManager_ConfigClientRec
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_InitializeWebComponents$hasRenderedSplashJSResult", [{
name: "HasRendered",
attrName: "hasRenderedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_InitializeWebComponents$Action = function (configIn) {
configIn = (configIn === undefined) ? new UBT_AppManager_CSModel.AppManager_ConfigClientRec() : configIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_InitializeWebComponents$Action.bind(controller, configIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$AppManager_InitializeWebComponents.HasRenderedSplashJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var hasRendered = false;

try {
    // This loops through only the current tab's isolated storage sandbox
    for (var i = 0; i < sessionStorage.length; i++) {
        var key = sessionStorage.key(i);
        
        if (key && key.endsWith("HasRenderedSplashInSession")) {
            var value = sessionStorage.getItem(key);
            hasRendered = (value === true || value === "true");
            break; 
        }
    }
} catch (error) {
    hasRendered = false; 
}

$parameters.HasRendered = hasRendered;
};
});

define("UBT_AppManager.controller$AppManager_InitializeWebComponents_Priority", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "NavigationHandler.controller", "UBT_AppManager.clientVariables", "NavigationHandler.controller$OnApplicationReady_NavigationHandler", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$NavigationHandler", "UBT_AppManager.controller$NetworkDetection_Initialize"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, NavigationHandlerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_InitializeWebComponents_Priority$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:ZBgqkavp2kuw_qCw4wFr+Q:/ClientActionFlows.ZBgqkavp2kuw_qCw4wFr+Q:rp02wWm_+PeXYXL7bOlZXA", "UBT_AppManager", "AppManager_InitializeWebComponents_Priority", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:UjbGiSwex0Coj1DB2veyig", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:47j6s_5WrkiVUNQyFco9vg", callContext.id);
// Execute Action: NetworkDetection_Initialize
UBT_AppManagerController.default.networkDetection_Initialize$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:pTP8pgUQO0+VdvJ0QlShsQ", callContext.id);
// Execute Action: OnApplicationReady_NavigationHandler
NavigationHandlerController.default.onApplicationReady_NavigationHandler$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TsImuCRTvke1s2G7fOfBpg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:ZBgqkavp2kuw_qCw4wFr+Q", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.appManager_InitializeWebComponents_Priority$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_InitializeWebComponents_Priority$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_JSUtils_CustomEvent_Dispatch", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_CustomEvent_Dispatch", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_JSUtils_CustomEvent_Dispatch$Action = function (eventNameIn, dataJSONIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_CustomEvent_Dispatch$vars"))());
vars.value.eventNameInLocal = eventNameIn;
vars.value.dataJSONInLocal = dataJSONIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:ddeSVmDhnEWK2fuvuMHzCQ:/ClientActionFlows.ddeSVmDhnEWK2fuvuMHzCQ:1MDyql1zmnnDVQCTeQt6MQ", "UBT_AppManager", "AppManager_JSUtils_CustomEvent_Dispatch", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:77AOZtIpeU6oPGo+F3i40A", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:bSm5xdTCv0iUlE0m6PDJFA", callContext.id);
// Execute Action: JSUtils_CustomEvent_Dispatch
UBTJavaScriptUtilsController.default.jSUtils_CustomEvent_Dispatch$Action(vars.value.eventNameInLocal, vars.value.dataJSONInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:5qp+04V4qUOyN6K8F1E5ZQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:ddeSVmDhnEWK2fuvuMHzCQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_CustomEvent_Dispatch$vars", [{
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DataJSON",
attrName: "dataJSONInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_JSUtils_CustomEvent_Dispatch$Action = function (eventNameIn, dataJSONIn) {
eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
dataJSONIn = (dataJSONIn === undefined) ? "" : dataJSONIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_JSUtils_CustomEvent_Dispatch$Action.bind(controller, eventNameIn, OS.DataConversion.JSNodeParamConverter.from(dataJSONIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_JSUtils_CustomEvents_RegisterHandler", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_CustomEvent_RegisterHandler", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_JSUtils_CustomEvents_RegisterHandler$Action = function (eventIdIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_CustomEvents_RegisterHandler$vars"))());
vars.value.eventIdInLocal = eventIdIn;
vars.value.callbackInLocal = callbackIn;
var jSUtils_CustomEvent_RegisterHandlerVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_CustomEvents_RegisterHandler$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSUtils_CustomEvent_RegisterHandlerVar = jSUtils_CustomEvent_RegisterHandlerVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:IWX5xy6a0UStD2wBVb0IQg:/ClientActionFlows.IWX5xy6a0UStD2wBVb0IQg:+v_VeS_f4bTtz260gmWBPQ", "UBT_AppManager", "AppManager_JSUtils_CustomEvents_RegisterHandler", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:L9T_f8oGDkeWj60Pc3UizA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:1g0nhOKNskWAWoeCZBOu3A", callContext.id);
// Execute Action: JSUtils_CustomEvent_RegisterHandler
jSUtils_CustomEvent_RegisterHandlerVar.value = UBTJavaScriptUtilsController.default.jSUtils_CustomEvent_RegisterHandler$Action(vars.value.eventIdInLocal, vars.value.callbackInLocal, "", callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:au3l_EmH2EiFWsJKgihF1A", callContext.id);
// DestroyCallbackFunction = JSUtils_CustomEvent_RegisterHandler.DestroyCallbackFunction
outVars.value.destroyCallbackFunctionOut = jSUtils_CustomEvent_RegisterHandlerVar.value.destroyCallbackFunctionOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:igDa_p17606dtyKIxU5waQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:IWX5xy6a0UStD2wBVb0IQg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_CustomEvents_RegisterHandler$vars", [{
name: "EventId",
attrName: "eventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_CustomEvents_RegisterHandler$outVars", [{
name: "DestroyCallbackFunction",
attrName: "destroyCallbackFunctionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_JSUtils_CustomEvents_RegisterHandler$Action = function (eventIdIn, callbackIn) {
eventIdIn = (eventIdIn === undefined) ? "" : eventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_JSUtils_CustomEvents_RegisterHandler$Action.bind(controller, eventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DestroyCallbackFunction: OS.DataConversion.JSNodeParamConverter.to(actionResults.destroyCallbackFunctionOut, OS.DataTypes.DataTypes.Object)
};
});
};
});

define("UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_ElementCache_GetObjProperty", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action = function (propertyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_GetObjProperty$vars"))());
vars.value.propertyInLocal = propertyIn;
var jSUtils_ElementCache_GetObjPropertyVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_GetObjProperty$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSUtils_ElementCache_GetObjPropertyVar = jSUtils_ElementCache_GetObjPropertyVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:uCMtIgFU0UySyYmKT5gfow:/ClientActionFlows.uCMtIgFU0UySyYmKT5gfow:1dRQQSdCwndPXP5pAbWEkg", "UBT_AppManager", "AppManager_JSUtils_ElementCache_GetObjProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ivcUQwNaukSC0hDkuBy8MQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lrK3VwnHqEmLBN1BconEuw", callContext.id);
// Execute Action: JSUtils_ElementCache_GetObjProperty
jSUtils_ElementCache_GetObjPropertyVar.value = UBTJavaScriptUtilsController.default.jSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Parent.appManager, vars.value.propertyInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:FEvrJ4BSVEeZlYgVH_SKbg", callContext.id);
// Value = JSUtils_ElementCache_GetObjProperty.Value
outVars.value.valueOut = jSUtils_ElementCache_GetObjPropertyVar.value.valueOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JnMttVGyqkypy2snsBkNhg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:uCMtIgFU0UySyYmKT5gfow", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_GetObjProperty$vars", [{
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_GetObjProperty$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_JSUtils_ElementCache_GetObjProperty$Action = function (propertyIn) {
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action.bind(controller, propertyIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataConversion.JSNodeParamConverter.to(actionResults.valueOut, OS.DataTypes.DataTypes.Object)
};
});
};
});

define("UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetTextProperty", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_ElementCache_GetTextProperty", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetTextProperty$Action = function (propertyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_GetTextProperty$vars"))());
vars.value.propertyInLocal = propertyIn;
var jSUtils_ElementCache_GetTextPropertyVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_GetTextProperty$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSUtils_ElementCache_GetTextPropertyVar = jSUtils_ElementCache_GetTextPropertyVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:GnwNt04C6Ey0rDL6HamPYw:/ClientActionFlows.GnwNt04C6Ey0rDL6HamPYw:W3fEcwQkMt7nOHUR09JMoA", "UBT_AppManager", "AppManager_JSUtils_ElementCache_GetTextProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2P_w6OwIM02IwrK31R0EXg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:NwlYzNqMqk2_Ekh_zd1NaQ", callContext.id);
// Execute Action: JSUtils_ElementCache_GetTextProperty
jSUtils_ElementCache_GetTextPropertyVar.value = UBTJavaScriptUtilsController.default.jSUtils_ElementCache_GetTextProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Parent.appManager, vars.value.propertyInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:E7HpfYHFzk2eAZ2FZgrv8w", callContext.id);
// Value = JSUtils_ElementCache_GetTextProperty.Value
outVars.value.valueOut = jSUtils_ElementCache_GetTextPropertyVar.value.valueOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Q1WCHNcn1Em8yGkpTWWJNQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:GnwNt04C6Ey0rDL6HamPYw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_GetTextProperty$vars", [{
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_GetTextProperty$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_JSUtils_ElementCache_GetTextProperty$Action = function (propertyIn) {
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetTextProperty$Action.bind(controller, propertyIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataConversion.JSNodeParamConverter.to(actionResults.valueOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_ElementCache_SetObjProperty", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action = function (propertyIn, valueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_SetObjProperty$vars"))());
vars.value.propertyInLocal = propertyIn;
vars.value.valueInLocal = valueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:bqK3FC_CA0u1jgMij0mF+A:/ClientActionFlows.bqK3FC_CA0u1jgMij0mF+A:gkXt3yby+Nfy3Y1M5DHZyw", "UBT_AppManager", "AppManager_JSUtils_ElementCache_SetObjProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:11UhOqymCUmK2ih7mF2NEg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:x2bg4PL1ukq9LrTCFQmGig", callContext.id);
// Execute Action: JSUtils_ElementCache_SetObjProperty
UBTJavaScriptUtilsController.default.jSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Parent.appManager, vars.value.propertyInLocal, vars.value.valueInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:x0E7hKgrbEGdGJ32AD3Zag", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:bqK3FC_CA0u1jgMij0mF+A", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_SetObjProperty$vars", [{
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_JSUtils_ElementCache_SetObjProperty$Action = function (propertyIn, valueIn) {
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
valueIn = (valueIn === undefined) ? null : valueIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action.bind(controller, propertyIn, OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetTextProperty", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_ElementCache_SetTextProperty", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetTextProperty$Action = function (propertyIn, valueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_SetTextProperty$vars"))());
vars.value.propertyInLocal = propertyIn;
vars.value.valueInLocal = valueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:1uKOYWmwYEC3KlS2Dms+YQ:/ClientActionFlows.1uKOYWmwYEC3KlS2Dms+YQ:4RzfCaMquVlsmL9T0CebTA", "UBT_AppManager", "AppManager_JSUtils_ElementCache_SetTextProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:hVJutIgMBU+iHgdWdiRxVw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KRnqmKyun0+_h9HG8+EUfA", callContext.id);
// Execute Action: JSUtils_ElementCache_SetTextProperty
UBTJavaScriptUtilsController.default.jSUtils_ElementCache_SetTextProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Parent.appManager, vars.value.propertyInLocal, vars.value.valueInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:MQZpmlaSpkqpARCDkMTIGg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:1uKOYWmwYEC3KlS2Dms+YQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_ElementCache_SetTextProperty$vars", [{
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_JSUtils_ElementCache_SetTextProperty$Action = function (propertyIn, valueIn) {
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
valueIn = (valueIn === undefined) ? "" : valueIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetTextProperty$Action.bind(controller, propertyIn, OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_JSUtils_LocalStorage_GetItem", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_LocalStorage_GetItem", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_JSUtils_LocalStorage_GetItem$Action = function (propertyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_LocalStorage_GetItem$vars"))());
vars.value.propertyInLocal = propertyIn;
var jSUtils_LocalStorage_GetItemVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_LocalStorage_GetItem$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSUtils_LocalStorage_GetItemVar = jSUtils_LocalStorage_GetItemVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:GGZWSf+VjUGpywIwQ6m6zg:/ClientActionFlows.GGZWSf+VjUGpywIwQ6m6zg:OomB3x+8gV_WZS0RLpFNFg", "UBT_AppManager", "AppManager_JSUtils_LocalStorage_GetItem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ssrZ7CiPRkOeT1seeqq4Jg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:aAf1FlpGVEeSEj7NZs+nmw", callContext.id);
// Execute Action: JSUtils_LocalStorage_GetItem
jSUtils_LocalStorage_GetItemVar.value = UBTJavaScriptUtilsController.default.jSUtils_LocalStorage_GetItem$Action(((UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Parent.appManager + "_") + vars.value.propertyInLocal), callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Awa1vTpQW0qCWL3ngj0HVw", callContext.id);
// Value = JSUtils_LocalStorage_GetItem.Value
outVars.value.valueOut = jSUtils_LocalStorage_GetItemVar.value.valueOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wB97h5_NHk6TbDZTUWLCGg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:GGZWSf+VjUGpywIwQ6m6zg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_LocalStorage_GetItem$vars", [{
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_LocalStorage_GetItem$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_JSUtils_LocalStorage_GetItem$Action = function (propertyIn) {
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_JSUtils_LocalStorage_GetItem$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(propertyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataConversion.JSNodeParamConverter.to(actionResults.valueOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$AppManager_JSUtils_LocalStorage_SetItem", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_LocalStorage_SetItem", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_JSUtils_LocalStorage_SetItem$Action = function (propertyIn, valueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_JSUtils_LocalStorage_SetItem$vars"))());
vars.value.propertyInLocal = propertyIn;
vars.value.valueInLocal = valueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:6t310xaCgESFU50LbLvW+g:/ClientActionFlows.6t310xaCgESFU50LbLvW+g:94r4GFMy+wErX_F3eLCAWg", "UBT_AppManager", "AppManager_JSUtils_LocalStorage_SetItem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wKQEjcMxeEax1lNS+HV_Bg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mZgifvpWzU6mbyXifQ7JGQ", callContext.id);
// Execute Action: JSUtils_LocalStorage_SetItem
UBTJavaScriptUtilsController.default.jSUtils_LocalStorage_SetItem$Action(((UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Parent.appManager + "_") + vars.value.propertyInLocal), vars.value.valueInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Od1rcVtGUEaBZYnr72G4Ig", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:6t310xaCgESFU50LbLvW+g", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_JSUtils_LocalStorage_SetItem$vars", [{
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_JSUtils_LocalStorage_SetItem$Action = function (propertyIn, valueIn) {
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
valueIn = (valueIn === undefined) ? "" : valueIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_JSUtils_LocalStorage_SetItem$Action.bind(controller, propertyIn, OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_Login", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "NetworkDetection.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_SetAppCallback", "UBTJavaScriptUtils.controller$JSUtils_PageRedirect", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$InAppBrowser_CanLaunchInApp", "UBT_AppManager.model$AppManager_CallbackRec", "UBT_AppManager.controller$AppManager_OnCallback", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetTextProperty", "UBT_AppManager.controller$AppManager_SetAppCallback_Default", "UBT_AppManager.controller$InAppBrowser_LaunchLoginFlow", "UBT_AppManager.controller$NetworkDetection_Initialize", "UBT_AppManager.controller$AppManager_GetAuthorizeURL_Wrapper", "UBT_AppManager.controller$AppManager_CheckAppContext", "NetworkDetection.controller$NetworkDetection_ShowCommunicationExceptionMessage", "UBT_AppManager.referencesHealth$NetworkDetection", "UBT_AppManager.controller$AppManager_GenerateCodeChallenge", "NetworkDetection.controller$CheckNetworkCommunication"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, NetworkDetectionController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_Login$Action = function (isResetPasswordIn, confirmationDialog_ResetPasswordIdIn, appCallbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_Login$vars"))());
vars.value.isResetPasswordInLocal = isResetPasswordIn;
vars.value.confirmationDialog_ResetPasswordIdInLocal = confirmationDialog_ResetPasswordIdIn;
vars.value.appCallbackInLocal = appCallbackIn;
var inAppBrowser_CanLaunchInAppVar = new OS.DataTypes.VariableHolder();
var appManager_GetAuthorizeURL_WrapperVar = new OS.DataTypes.VariableHolder();
var checkNetworkCommunicationVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.inAppBrowser_CanLaunchInAppVar = inAppBrowser_CanLaunchInAppVar;
varBag.appManager_GetAuthorizeURL_WrapperVar = appManager_GetAuthorizeURL_WrapperVar;
varBag.checkNetworkCommunicationVar = checkNetworkCommunicationVar;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:MOjeXTHl9E6tv0h2zcBAMQ:/ClientActionFlows.MOjeXTHl9E6tv0h2zcBAMQ:4qzCyd7uCVhnuNefcSnxLA", "UBT_AppManager", "AppManager_Login", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iGx7UuWH5EeXXBqcsqSROg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KN5CzAbA5k++JiHzO35XRw", callContext.id);
// Execute Action: AppManager_CheckAppContext
return UBT_AppManagerController.default.appManager_CheckAppContext$Action(callContext).then(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:pjLnBdnkoUKiFr6VU9kEwQ", callContext.id) && ((vars.value.appCallbackInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:1rxOLmTFPEaIj+CeYvyetA", callContext.id);
// Execute Action: AppManager_SetAppCallback
UBT_AppManagerController.default.appManager_SetAppCallback$Action(vars.value.appCallbackInLocal, callContext);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:bIcBieMEYEWjGK1XA8BCZA", callContext.id);
// Execute Action: AppManager_SetAppCallback_Default
UBT_AppManagerController.default.appManager_SetAppCallback_Default$Action(callContext);
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WvXyp8URc0SvTFGG6Jd6IA", callContext.id);
// Execute Action: NetworkDetection_Initialize
UBT_AppManagerController.default.networkDetection_Initialize$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wi0V8cFCLUOBrjZ1+jG+Fw", callContext.id);
// Execute Action: CheckNetworkCommunication
return NetworkDetectionController.default.checkNetworkCommunication$Action(true, callContext).then(function (value) {
checkNetworkCommunicationVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Jyd8KlE8bkegGuMrmV0Klw", callContext.id) && checkNetworkCommunicationVar.value.isOnlineOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:HEQbg8RfVUe3wxg9CsddrA", callContext.id);
// Execute Action: Id_ResetPasswordPopUp
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetTextProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.id_ResetPasswordPopUp, vars.value.confirmationDialog_ResetPasswordIdInLocal, callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:jjhfxqK1n0qWnqZxiBXs7Q", callContext.id) && (UBT_AppManagerClientVariables.getAppManager_IdPProviderId() === UBT_AppManagerModel.staticEntities.appManager_IdpProvider.frontEgg))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Hm7T6rKn00+hY8TY9Tom2g", callContext.id);
// Execute Action: AppManager_GenerateCodeChallenge
return UBT_AppManagerController.default.appManager_GenerateCodeChallenge$Action(callContext);
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:6WI0PbIH6k2p4Ezu1huuPQ", callContext.id);
// Execute Action: InAppBrowser_CanLaunchInApp
inAppBrowser_CanLaunchInAppVar.value = UBT_AppManagerController.default.inAppBrowser_CanLaunchInApp$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:k2YMtt4ZlkGM_Gl1+02gVw", callContext.id);
// Execute Action: AppManager_GetAuthorizeURL_Wrapper
return UBT_AppManagerController.default.appManager_GetAuthorizeURL_Wrapper$Action(vars.value.isResetPasswordInLocal, callContext).then(function (value) {
appManager_GetAuthorizeURL_WrapperVar.value = value;
});
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+d_F1MZ4X065X+BoMDvT6w", callContext.id) && inAppBrowser_CanLaunchInAppVar.value.canLaunchOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DWVjlPfEb0iczLzIxAn9Rg", callContext.id);
// Execute Action: InAppBrowser_LaunchLoginFlow
UBT_AppManagerController.default.inAppBrowser_LaunchLoginFlow$Action(appManager_GetAuthorizeURL_WrapperVar.value.uRLOut, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:_wdFu3j_qEyUXiR6fgz5Jw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:BuaBOvSPgEGVmLVho2vI8g", callContext.id);
// Execute Action: JSUtils_PageRedirect2
UBTJavaScriptUtilsController.default.jSUtils_PageRedirect$Action(appManager_GetAuthorizeURL_WrapperVar.value.uRLOut, true, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:zIQ8XRPQu06mbmvltXHXjQ", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:xsqa07I5hkiWyBYjmQYX5g", callContext.id);
// Execute Action: NetworkDetection_ShowCommunicationExceptionMessage
NetworkDetectionController.default.networkDetection_ShowCommunicationExceptionMessage$Action(false, "", callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:SmE_QJl_KEi1n14JwvUsQg", callContext.id);
// Execute Action: AppManager_OnCallback
UBT_AppManagerController.default.appManager_OnCallback$Action(function () {
var rec = new UBT_AppManagerModel.AppManager_CallbackRec();
rec.isSucessAttr = false;
rec.messageAttr = "No internet connection. Please check your network settings and try again.";
rec.callbackTypeAttr = UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnOffline;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:fcKSbsseL0O5zd3LKHHUEQ", callContext.id);
}

});
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:MOjeXTHl9E6tv0h2zcBAMQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:MOjeXTHl9E6tv0h2zcBAMQ", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_Login$vars", [{
name: "isResetPassword",
attrName: "isResetPasswordInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ConfirmationDialog_ResetPasswordId",
attrName: "confirmationDialog_ResetPasswordIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AppCallback",
attrName: "appCallbackInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_Login$Action = function (isResetPasswordIn, confirmationDialog_ResetPasswordIdIn, appCallbackIn) {
isResetPasswordIn = (isResetPasswordIn === undefined) ? false : isResetPasswordIn;
confirmationDialog_ResetPasswordIdIn = (confirmationDialog_ResetPasswordIdIn === undefined) ? "" : confirmationDialog_ResetPasswordIdIn;
appCallbackIn = (appCallbackIn === undefined) ? "" : appCallbackIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_Login$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isResetPasswordIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(confirmationDialog_ResetPasswordIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appCallbackIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_Logout", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "Firebase.controller", "UBT_AppManager.clientVariables", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$ServerAction.AppManager_Logout", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.controller$AppManager_SynchAppContext", "UBT_AppManager.controller$AzureInsights_CreateCustomEvent", "UBT_AppManager.controller$AppManager_SetDeviceContext", "UBT_AppManager.controller$AppManager_GetAppId", "UBT_AppManager.controller$AppManager_SetAppId", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec", "UBT_AppManager.controller$AppManager_GetConfiguration", "UBT_AppManager.controller$AppManager_GetDeviceContext", "UBT_AppManager.controller$PIN_Delete", "Firebase.controller$FirebaseSignOut", "UBT_AppManager.referencesHealth$Firebase"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, FirebaseController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_Logout$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_Logout$vars"))());
var appManager_SynchAppContextVar = new OS.DataTypes.VariableHolder();
var appManager_GetAppIdVar = new OS.DataTypes.VariableHolder();
var appManager_GetConfigurationVar = new OS.DataTypes.VariableHolder();
var appManager_GetDeviceContextVar = new OS.DataTypes.VariableHolder();
var firebaseSignOutVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_SynchAppContextVar = appManager_SynchAppContextVar;
varBag.appManager_GetAppIdVar = appManager_GetAppIdVar;
varBag.appManager_GetConfigurationVar = appManager_GetConfigurationVar;
varBag.appManager_GetDeviceContextVar = appManager_GetDeviceContextVar;
varBag.firebaseSignOutVar = firebaseSignOutVar;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:G3kmehIXQ0eoqCLI2FNx6A:/ClientActionFlows.G3kmehIXQ0eoqCLI2FNx6A:J7hnc5lTQKsqz93hzes6Ow", "UBT_AppManager", "AppManager_Logout", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:uF5VnG9cp0mlqM_e5MH1mA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JGJInSW0g0K6_1aY828thw", callContext.id);
// Execute Action: AppManager_SetAppId
UBT_AppManagerController.default.appManager_SetAppId$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:z0S4vXqttUu0FTvUllDukw", callContext.id);
// Execute Action: AppManager_GetConfiguration
return UBT_AppManagerController.default.appManager_GetConfiguration$Action(false, callContext).then(function (value) {
appManager_GetConfigurationVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:LJn79UU300yQMSBsiMFdzA", callContext.id);
// Execute Action: AppManager_GetDeviceContext
appManager_GetDeviceContextVar.value = UBT_AppManagerController.default.appManager_GetDeviceContext$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+n7YnIuWsEi1OcM_LCDhjg", callContext.id);
// Execute Action: AppManager_GetAppId
appManager_GetAppIdVar.value = UBT_AppManagerController.default.appManager_GetAppId$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RjOlsl+A7Uyyq_2FAEmn5Q", callContext.id);
// AppName = AppManager_GetAppId.GetAppId
vars.value.appNameVar = appManager_GetAppIdVar.value.getAppIdOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RjOlsl+A7Uyyq_2FAEmn5Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// UserId = GetUserId
vars.value.userIdVar = OS.BuiltinFunctions.getUserId();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Ft8yQBxlTUymayCi8rwUiw", callContext.id);
// Execute Action: AppManager_Logout
return controller.appManager_Logout$ServerAction(vars.value.appNameVar, appManager_GetDeviceContextVar.value.appManager_MobileContextOut, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:QCIc_xV7h0mN37+4vYB7ZQ", callContext.id);
// Execute Action: FirebaseSignOut
return FirebaseController.default.firebaseSignOut$Action(UBT_AppManagerClientVariables.getFirebase_ProjectId(), callContext).then(function (value) {
firebaseSignOutVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Fc39cVKwwkqaUjV8PbWf1g", callContext.id);
// Execute Action: AzureInsightsLog_Logout
return UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents.auth_Logout, "", callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:sac9bBZYFkCG0+PokJgaVg", callContext.id);
// AppManager_EspaceName = AppName
UBT_AppManagerClientVariables.setAppManager_EspaceName(vars.value.appNameVar);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:h8BW9r48XEOtTKKS+PBEaQ", callContext.id);
// Execute Action: PIN_Delete
UBT_AppManagerController.default.pIN_Delete$Action(vars.value.userIdVar, vars.value.appNameVar, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:dsEqdYOsckGzIshO+2FQHQ", callContext.id);
// Execute Action: AppManager_SetDeviceContext
UBT_AppManagerController.default.appManager_SetDeviceContext$Action(appManager_GetDeviceContextVar.value.appManager_MobileContextOut, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:a8L+ZZpS2kOnMw2p0QjsUQ", callContext.id);
// Execute Action: AppManager_SynchAppContext
return UBT_AppManagerController.default.appManager_SynchAppContext$Action(callContext).then(function (value) {
appManager_SynchAppContextVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:4NeIGRXRLUuy0XISrsJksA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:G3kmehIXQ0eoqCLI2FNx6A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:G3kmehIXQ0eoqCLI2FNx6A", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_Logout$vars", [{
name: "AppName",
attrName: "appNameVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "UserId",
attrName: "userIdVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_Logout$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_Logout$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_NavigationHandlerInitializationFallback", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.controller$AppManager_NavigationHandlerInitializationFallback.NavigationHandlerCheckJS", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AppManager_SetOnAfterInitializeCallback"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManager_controller_AppManager_NavigationHandlerInitializationFallback_NavigationHandlerCheckJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_NavigationHandlerInitializationFallback$Action = function (callbackActionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_NavigationHandlerInitializationFallback$vars"))());
vars.value.callbackActionInLocal = callbackActionIn;
var navigationHandlerCheckJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_NavigationHandlerInitializationFallback$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.navigationHandlerCheckJSResult = navigationHandlerCheckJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:PB8K5AOsM0CVEPHKSpDv_g:/ClientActionFlows.PB8K5AOsM0CVEPHKSpDv_g:g4edBN09WdoadcBjXBjGIg", "UBT_AppManager", "AppManager_NavigationHandlerInitializationFallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CQyY7BDEM0uUuo8e+H0XQA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PLFVd7GwTUqQ9Jo58TpIiw", callContext.id);
navigationHandlerCheckJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_NavigationHandlerInitializationFallback_NavigationHandlerCheckJS, "NavigationHandlerCheck", "AppManager_NavigationHandlerInitializationFallback", {
NavigationHandlerInitialized: OS.DataConversion.JSNodeParamConverter.to(true, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_NavigationHandlerInitializationFallback$navigationHandlerCheckJSResult"))();
jsNodeResult.navigationHandlerInitializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.NavigationHandlerInitialized, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZtJM5FLUekSqVGKz1cZh3g", callContext.id);
// CanContinue = NavigationHandlerCheck.NavigationHandlerInitialized
outVars.value.canContinueOut = navigationHandlerCheckJSResult.value.navigationHandlerInitializedOut;
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KW1WHHPg00CJHkk5Sg5Qlw", callContext.id) && outVars.value.canContinueOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:HPVlQ35+hE+WochywsFmgQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ltRT3Ec6Ak2yohNuoIb2cw", callContext.id);
// Execute Action: AppManager_SetOnAfterInitializeCallback
UBT_AppManagerController.default.appManager_SetOnAfterInitializeCallback$Action(vars.value.callbackActionInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RD+lx0THuUukZf9mG0ZB5Q", callContext.id);
// Execute Action: JSUtils_Console_Log
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("Fallback init for Navigation Handler", callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:HPVlQ35+hE+WochywsFmgQ", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:PB8K5AOsM0CVEPHKSpDv_g", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_NavigationHandlerInitializationFallback$vars", [{
name: "CallbackAction",
attrName: "callbackActionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_NavigationHandlerInitializationFallback$navigationHandlerCheckJSResult", [{
name: "NavigationHandlerInitialized",
attrName: "navigationHandlerInitializedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_NavigationHandlerInitializationFallback$outVars", [{
name: "CanContinue",
attrName: "canContinueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_NavigationHandlerInitializationFallback$Action = function (callbackActionIn) {
callbackActionIn = (callbackActionIn === undefined) ? null : callbackActionIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_NavigationHandlerInitializationFallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(callbackActionIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CanContinue: OS.DataConversion.JSNodeParamConverter.to(actionResults.canContinueOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBT_AppManager.controller$AppManager_NavigationHandlerInitializationFallback.NavigationHandlerCheckJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(!window.dx || !window.dx.Navigation) {
    $parameters.NavigationHandlerInitialized = false;
}
};
});

define("UBT_AppManager.controller$AppManager_OnAppReady_Web", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBTJavaScriptUtils.controller", "UBT_AppManager.controller$AppManager_OnAppReady_Web.InterceptExceptionsJS", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_InitializeWebComponents_Priority", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_SynchAppContext", "UBT_AppManager.controller$AppManager_InitializeWebComponents", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AppManager_OutSystemsFixes", "UBT_AppManager.controller$AppManager_OnException"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBTJavaScriptUtilsController, UBT_AppManager_controller_AppManager_OnAppReady_Web_InterceptExceptionsJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_OnAppReady_Web$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var appManager_SynchAppContextVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.appManager_SynchAppContextVar = appManager_SynchAppContextVar;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:OVAQ61f_v0i9iZCCO1ndtg:/ClientActionFlows.OVAQ61f_v0i9iZCCO1ndtg:5IQG6xZ+imCYdvObPIKZFQ", "UBT_AppManager", "AppManager_OnAppReady_Web", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:kaczWbH3t0OIL5kWK8cshA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9g+uWbLmQkyAJLHz95qi7w", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_OnAppReady_Web_InterceptExceptionsJS, "InterceptExceptions", "AppManager_OnAppReady_Web", null, function ($parameters) {
}, {
AppManager_OnException: UBT_AppManagerController.default.getClientActionProxies(controller).appManager_OnException$Action
}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:MnwwdW9flUOQXQHxOfA3kw", callContext.id);
// Execute Action: JSUtils_Console_Log
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("On App Ready - Web - Start", callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:su2s71yCj0m8GVaEFOvq_w", callContext.id);
// Execute Action: AppManager_OutSystemsFixes
UBT_AppManagerController.default.appManager_OutSystemsFixes$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:M5T5Ev+Vz0ehE+FxxZm6qA", callContext.id);
// Execute Action: AppManager_SynchAppContext
return UBT_AppManagerController.default.appManager_SynchAppContext$Action(callContext).then(function (value) {
appManager_SynchAppContextVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:56BHBfeiU0yqLKbVYvXKuA", callContext.id);
// Execute Action: AppManager_InitializeWebComponents_Priority
UBT_AppManagerController.default.appManager_InitializeWebComponents_Priority$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:BajbauYl9E2CF56RPsY1rg", callContext.id);
// Execute Action: AppManager_InitializeWebComponents
return UBT_AppManagerController.default.appManager_InitializeWebComponents$Action(appManager_SynchAppContextVar.value.configOut, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:h2zpeszi8UOuO9ZPwHV6Og", callContext.id);
// Execute Action: JSUtils_Console_Log2
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("On App Ready - Web - Finish", callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ILCIj8bT+Um27sFnuBwaJw", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:OVAQ61f_v0i9iZCCO1ndtg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:OVAQ61f_v0i9iZCCO1ndtg", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.appManager_OnAppReady_Web$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_OnAppReady_Web$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$AppManager_OnAppReady_Web.InterceptExceptionsJS", [], function () {
return function ($actions, $roles, $public) {
var silenceError = function(message) {
        //Silence error messages due to client actions invoked after OnDestroy
        return message == "No role validation found" ||
               message.includes("This is likely due to a platform's client action being used as an event handler or in a setTimeout function.");
};


var Logger = window.require("OutSystems/ClientRuntime/Logger");
var logError = Logger.error;

Logger.error = function(module, messageOrError, error) {
    var message;

    if (messageOrError.message) {
        message = messageOrError.message;
    } else {
        message = messageOrError.toString();
    }

    if (!silenceError(message)) {
        $actions.AppManager_OnException(message);
        logError.call(this, module, messageOrError, error);
    }
};


};
});

define("UBT_AppManager.controller$AppManager_OnCallback", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_CustomEvent_Dispatch", "UBT_AppManager.controller$InAppBrowser_Close", "UBT_AppManager.model$AppManager_CallbackRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_OnCallback$Action = function (appManager_CallbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_OnCallback$vars"))());
vars.value.appManager_CallbackInLocal = appManager_CallbackIn.clone();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize1Var = jSONSerialize1Var;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:FlvNiiC4oUulFRF6KrKMaw:/ClientActionFlows.FlvNiiC4oUulFRF6KrKMaw:httqScJqbSwM9TomforYeA", "UBT_AppManager", "AppManager_OnCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DW7pW_oA6ECOAR13N+nMZw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XMwSIa0S_UmOCYYC2m1Ulw", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.appManager_CallbackInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:P3yWogpPU0Kqpa8DwY+wcg", callContext.id);
// Execute Action: AppManager_JSUtils_CustomEvent_Dispatch
UBT_AppManagerController.default.appManager_JSUtils_CustomEvent_Dispatch$Action(vars.value.appManager_CallbackInLocal.callbackTypeAttr, jSONSerialize1Var.value.jSONOut, callContext);
// isNative
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WszjLgMXbEiLqlchb14iHA", callContext.id) && UBT_AppManagerClientVariables.getDeviceInfo_IsNative())) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+mUWrgv7Qk2WXTK2gN1N+g", callContext.id);
// Execute Action: InAppBrowser_Close
UBT_AppManagerController.default.inAppBrowser_Close$Action(false, false, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2SN1tam8YkSaywwqQ06n2g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2SN1tam8YkSaywwqQ06n2g", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:FlvNiiC4oUulFRF6KrKMaw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_OnCallback$vars", [{
name: "AppManager_Callback",
attrName: "appManager_CallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.AppManager_CallbackRec();
},
complexType: UBT_AppManagerModel.AppManager_CallbackRec
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_OnCallback$Action = function (appManager_CallbackIn) {
appManager_CallbackIn = (appManager_CallbackIn === undefined) ? new UBT_AppManagerModel.AppManager_CallbackRec() : appManager_CallbackIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_OnCallback$Action.bind(controller, appManager_CallbackIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_OnException", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AzureInsights_CreateCustomEvent"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_OnException$Action = function (messageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_OnException$vars"))());
vars.value.messageInLocal = messageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:QG16Ll0N2kOI4JtUg04jmg:/ClientActionFlows.QG16Ll0N2kOI4JtUg04jmg:hoJiZsu4dxjh8xspZ_MCjg", "UBT_AppManager", "AppManager_OnException", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CM_1ku3jTkqEoCiozFqtng", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:HZ7PyzBBDECOC9obQtj8Rw", callContext.id);
// Execute Action: AzureInsights_CreateCustomEvent
return UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action("ClientException", vars.value.messageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:dxEkFZ_BHUCJZmjSJWh5WA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:QG16Ll0N2kOI4JtUg04jmg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:QG16Ll0N2kOI4JtUg04jmg", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_OnException$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_OnException$Action = function (messageIn) {
messageIn = (messageIn === undefined) ? "" : messageIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_OnException$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_OnReadyChecker", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetTextProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_OnReadyChecker$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var appManager_JSUtils_ElementCache_GetTextPropertyVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_OnReadyChecker$outVars"))());
varBag.callContext = callContext;
varBag.appManager_JSUtils_ElementCache_GetTextPropertyVar = appManager_JSUtils_ElementCache_GetTextPropertyVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:0QCLTPv9DUqD0yLHDgNjug:/ClientActionFlows.0QCLTPv9DUqD0yLHDgNjug:7EqJTKj+tCMGsj1bABq_5w", "UBT_AppManager", "AppManager_OnReadyChecker", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:MAKwbVyBOU2hJzZTtjkGWQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:rEklzvuNck+Iykp507HKNA", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_GetTextProperty
appManager_JSUtils_ElementCache_GetTextPropertyVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetTextProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.text_OnReadyChecker, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:od+sAVcWcUWn2ejJT7WU_g", callContext.id);
// isReady = AppManager_JSUtils_ElementCache_GetTextProperty.Value <> ""
outVars.value.isReadyOut = ((appManager_JSUtils_ElementCache_GetTextPropertyVar.value.valueOut) !== (""));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:QOZxYC2AeUSvMX3UwNDsxQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:0QCLTPv9DUqD0yLHDgNjug", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_OnReadyChecker$outVars", [{
name: "isReady",
attrName: "isReadyOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_OnReadyChecker$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_OnReadyChecker$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
isReady: OS.DataConversion.JSNodeParamConverter.to(actionResults.isReadyOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager.controller$AppManager_OnReadyChecker_Set", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetTextProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_OnReadyChecker_Set$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:joJ+yErGnka9IJL5XTe1JQ:/ClientActionFlows.joJ+yErGnka9IJL5XTe1JQ:5gvXvLxTXvVa73IHrauAzQ", "UBT_AppManager", "AppManager_OnReadyChecker_Set", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:VfRXL2_pDE69fIsq7iy+fw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nR9kBv1ick+OTfn6BFKXAg", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetTextProperty
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetTextProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.text_OnReadyChecker, "OK", callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:t2dzjJ9ZBEqFus9C2uLUJA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:joJ+yErGnka9IJL5XTe1JQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.appManager_OnReadyChecker_Set$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_OnReadyChecker_Set$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_OutSystemsFixes", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$AppManager_OutSystemsFixes.PreventRerenderOnClientVarUpdateJS", "UBT_AppManager.controller$AppManager_OutSystemsFixes.PersistSomeClientVariablesAfterLogoutJS", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_AppManager_OutSystemsFixes_PreventRerenderOnClientVarUpdateJS, UBT_AppManager_controller_AppManager_OutSystemsFixes_PersistSomeClientVariablesAfterLogoutJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_OutSystemsFixes$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:hMg6rgb1V0uzb0iMZVXIjA:/ClientActionFlows.hMg6rgb1V0uzb0iMZVXIjA:BllMWqWUPZv_LJiYxjC3Qg", "UBT_AppManager", "AppManager_OutSystemsFixes", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nr06xCb6DU+ZIeM4OkHPgA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V26ogmsWS06DcU1DOwVLZA", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_OutSystemsFixes_PersistSomeClientVariablesAfterLogoutJS, "PersistSomeClientVariablesAfterLogout", "AppManager_OutSystemsFixes", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KnzmcrjDaEGpqYDRX4h1yA", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_OutSystemsFixes_PreventRerenderOnClientVarUpdateJS, "PreventRerenderOnClientVarUpdate", "AppManager_OutSystemsFixes", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+Q1q+aYUsEuypyXRsYGr8g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:hMg6rgb1V0uzb0iMZVXIjA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.appManager_OutSystemsFixes$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_OutSystemsFixes$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$AppManager_OutSystemsFixes.PreventRerenderOnClientVarUpdateJS", [], function () {
return function ($actions, $roles, $public) {
var LocalStorageClientVariablesService = window.require("OutSystems/ClientRuntime/modules/ClientVariables/LocalStorageClientVariablesService");
var LocalStorageSerializer = window.require("OutSystems/ClientRuntime/modules/ClientVariables/LocalStorageSerializer");
var DataTypes = window.require("OutSystems/ClientRuntime/DataTypes");


var setVariable = LocalStorageClientVariablesService.default.prototype.setVariable;
LocalStorageClientVariablesService.default.prototype.setVariable = function(key, module, type, value) {
    this.checkSessionExpires();

    var savedValue = window.localStorage.getItem(this.getFullKey(key, module));
    var serializedValue = LocalStorageSerializer.serialize(value, type);

    if (savedValue != serializedValue) {
        setVariable.call(this, key, module, type, value);
    }
};
};
});
define("UBT_AppManager.controller$AppManager_OutSystemsFixes.PersistSomeClientVariablesAfterLogoutJS", [], function () {
return function ($actions, $roles, $public) {
window.require(['OutSystems/ClientRuntime/modules/ClientVariables/LocalStorageClientVariablesService'], function (LocalStorageClientVariablesService) {

    var removeAllVariables = LocalStorageClientVariablesService.default.prototype.removeAllVariables;
    LocalStorageClientVariablesService.default.prototype.removeAllVariables = function() {
        var fullKeyMatcherTest = this.fullKeyMatcher.test;
        try {
            this.fullKeyMatcher.test = function(key) {
                return fullKeyMatcherTest.call(this, key) && !key.endsWith("_IsPersistent");
            };
            removeAllVariables.call(this);
        } finally {
            this.fullKeyMatcher.test = fullKeyMatcherTest;
        }
    };

});
};
});

define("UBT_AppManager.controller$AppManager_SetAppCallback", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetAppCallback$Action = function (outSystems_OriginalAppCallbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetAppCallback$vars"))());
vars.value.outSystems_OriginalAppCallbackInLocal = outSystems_OriginalAppCallbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:5OkdXDFgakyjteSGlP44NA:/ClientActionFlows.5OkdXDFgakyjteSGlP44NA:uRNJXzDoCICmVHwR4Y+8qg", "UBT_AppManager", "AppManager_SetAppCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:dDDZBp2EOUOZb18cxz8ZPQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vtvk4FSFnEG1kv4Xwhv9rA", callContext.id);
// OutSystems_LastURL = OutSystems_OriginalAppCallback
UBT_AppManagerClientVariables.setOutSystems_LastURL(vars.value.outSystems_OriginalAppCallbackInLocal);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:yvHn8mCfykuAnIUUNQYN3w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:5OkdXDFgakyjteSGlP44NA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetAppCallback$vars", [{
name: "OutSystems_OriginalAppCallback",
attrName: "outSystems_OriginalAppCallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetAppCallback$Action = function (outSystems_OriginalAppCallbackIn) {
outSystems_OriginalAppCallbackIn = (outSystems_OriginalAppCallbackIn === undefined) ? "" : outSystems_OriginalAppCallbackIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetAppCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(outSystems_OriginalAppCallbackIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetAppCallback_CurrentLocation", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$AppManager_SetAppCallback_CurrentLocation.JavaScript1JS", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_AppManager_SetAppCallback_CurrentLocation_JavaScript1JS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetAppCallback_CurrentLocation$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.javaScript1JSResult = javaScript1JSResult;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:P_1a9akkcUiBxL2Tue2_sA:/ClientActionFlows.P_1a9akkcUiBxL2Tue2_sA:PeBSQYs_Anwxv55VH+NdpA", "UBT_AppManager", "AppManager_SetAppCallback_CurrentLocation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iN5B2DS140mpxWUDpSMHRw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:soxA6kk5RUONWqPIbA+94w", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_AppManager_SetAppCallback_CurrentLocation_JavaScript1JS, "JavaScript1", "AppManager_SetAppCallback_CurrentLocation", {
CurrentPath: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetAppCallback_CurrentLocation$javaScript1JSResult"))();
jsNodeResult.currentPathOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CurrentPath, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:6gMkZ0IHc0i4MBEKKPvGdQ", callContext.id);
// OutSystems_LastURL = JavaScript1.CurrentPath
UBT_AppManagerClientVariables.setOutSystems_LastURL(javaScript1JSResult.value.currentPathOut);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:G+c4+1qbL0ynBfdikoq4xg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:P_1a9akkcUiBxL2Tue2_sA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetAppCallback_CurrentLocation$javaScript1JSResult", [{
name: "CurrentPath",
attrName: "currentPathOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetAppCallback_CurrentLocation$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetAppCallback_CurrentLocation$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$AppManager_SetAppCallback_CurrentLocation.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.CurrentPath = window.location.pathname;
};
});

define("UBT_AppManager.controller$AppManager_SetAppCallback_Default", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetAppCallback_Default$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:+vb54w5e+EGs_qvx1KOzHQ:/ClientActionFlows.+vb54w5e+EGs_qvx1KOzHQ:gg_mHNM0D5FNXS9EA+cZ4A", "UBT_AppManager", "AppManager_SetAppCallback_Default", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:kKXriJj7Rk6xwzmen9fseQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mZio3u6tYEessNqsGXOuVA", callContext.id) && (UBT_AppManagerClientVariables.getOutSystems_LastURL() === ""))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WJNCk3QXY023C74JaQlNZQ", callContext.id);
// OutSystems_LastURL = "/" + GetEntryEspaceName
UBT_AppManagerClientVariables.setOutSystems_LastURL(("/" + OS.BuiltinFunctions.getEntryEspaceName()));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Mw_4yTbrPUiow7P5RwyYEg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Mw_4yTbrPUiow7P5RwyYEg", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:+vb54w5e+EGs_qvx1KOzHQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.appManager_SetAppCallback_Default$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetAppCallback_Default$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetAppId", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetAppId$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:nvB1vMBItUqvsPZFfnUTNA:/ClientActionFlows.nvB1vMBItUqvsPZFfnUTNA:b7MmWgJUhmBwotHqf1zkOA", "UBT_AppManager", "AppManager_SetAppId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:jDqVFcaM3E6gdKIwBQb78w", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CJp91UEEJ0S0+0DNcy_4dw", callContext.id);
// AppManager_EspaceName = GetEntryEspaceName
UBT_AppManagerClientVariables.setAppManager_EspaceName(OS.BuiltinFunctions.getEntryEspaceName());
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+FmHz6fcT0apgYlF5odjaw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:nvB1vMBItUqvsPZFfnUTNA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.appManager_SetAppId$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetAppId$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetCachedUserInfo", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.model$AppManager_CachedUserInfoRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetCachedUserInfo$Action = function (userInformationIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetCachedUserInfo$vars"))());
vars.value.userInformationInLocal = userInformationIn.clone();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize1Var = jSONSerialize1Var;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:QqSATdacwEWytcHEReyLwA:/ClientActionFlows.QqSATdacwEWytcHEReyLwA:5LJcIHE3Wv27csNdLQzzHw", "UBT_AppManager", "AppManager_SetCachedUserInfo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:s6WMzlfILkeFL_v_kaauzw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7QpQWlWzv0+3NeZx1+CvQQ", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.userInformationInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wREz6IYaeEavyE4zmj3qdQ", callContext.id);
// AppManager_UserExtended = JSONSerialize1.JSON
UBT_AppManagerClientVariables.setAppManager_UserExtended(jSONSerialize1Var.value.jSONOut);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TpBJqZiknEW6Sm9yWs7wDA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:QqSATdacwEWytcHEReyLwA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetCachedUserInfo$vars", [{
name: "UserInformation",
attrName: "userInformationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.AppManager_CachedUserInfoRec();
},
complexType: UBT_AppManagerModel.AppManager_CachedUserInfoRec
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetCachedUserInfo$Action = function (userInformationIn) {
userInformationIn = (userInformationIn === undefined) ? new UBT_AppManagerModel.AppManager_CachedUserInfoRec() : userInformationIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetCachedUserInfo$Action.bind(controller, userInformationIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetDeviceContext", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.clientVariables", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetDeviceContext$Action = function (appManager_MobileContextIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetDeviceContext$vars"))());
vars.value.appManager_MobileContextInLocal = appManager_MobileContextIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:cm6yyz4i70C6rUt1BOljZQ:/ClientActionFlows.cm6yyz4i70C6rUt1BOljZQ:Mc8VR7Dc2yQDwitvbPT4YQ", "UBT_AppManager", "AppManager_SetDeviceContext", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:yiGS7AwHVUGKI++1ItRtSQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id);
// Firebase_CloudMessage_Token = AppManager_MobileContext.FCMToken
UBT_AppManagerClientVariables.setFirebase_CloudMessage_Token(vars.value.appManager_MobileContextInLocal.fCMTokenAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// DeviceInfo_IsNative = AppManager_MobileContext.isNativeDevice
UBT_AppManagerClientVariables.setDeviceInfo_IsNative(vars.value.appManager_MobileContextInLocal.isNativeDeviceAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Streamline_IsInstalled = AppManager_MobileContext.Streamline_IsInstalled
UBT_AppManagerClientVariables.setStreamline_IsInstalled(vars.value.appManager_MobileContextInLocal.streamline_IsInstalledAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// DeviceInfo_UUID = AppManager_MobileContext.UUID
UBT_AppManagerClientVariables.setDeviceInfo_UUID(vars.value.appManager_MobileContextInLocal.uUIDAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// DeviceInfo_MobileBuild = AppManager_MobileContext.MobileBuild
UBT_AppManagerClientVariables.setDeviceInfo_MobileBuild(vars.value.appManager_MobileContextInLocal.mobileBuildAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// DeviceInfo_MobileVersion = AppManager_MobileContext.MobileVersion
UBT_AppManagerClientVariables.setDeviceInfo_MobileVersion(vars.value.appManager_MobileContextInLocal.mobileVersionAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// DeviceInfo_Platform = AppManager_MobileContext.DevicePlatform
UBT_AppManagerClientVariables.setDeviceInfo_Platform(vars.value.appManager_MobileContextInLocal.devicePlatformAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// Streamline_SerialNumber = AppManager_MobileContext.Streamline_SerialNumber
UBT_AppManagerClientVariables.setStreamline_SerialNumber(vars.value.appManager_MobileContextInLocal.streamline_SerialNumberAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// DeviceInfo_IsRunningAsPWA = AppManager_MobileContext.iaRunningAsPWA
UBT_AppManagerClientVariables.setDeviceInfo_IsRunningAsPWA(vars.value.appManager_MobileContextInLocal.iaRunningAsPWAAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// DeviceInfo_Browser = AppManager_MobileContext.Browser
UBT_AppManagerClientVariables.setDeviceInfo_Browser(vars.value.appManager_MobileContextInLocal.browserAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// DeviceInfo_UserAgent = AppManager_MobileContext.UserAgent
UBT_AppManagerClientVariables.setDeviceInfo_UserAgent(vars.value.appManager_MobileContextInLocal.userAgentAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QYUNZrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "12");
// DeviceInfo_PackageName = AppManager_MobileContext.PackageName
UBT_AppManagerClientVariables.setDeviceInfo_PackageName(vars.value.appManager_MobileContextInLocal.packageNameAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:1YFaFeqqGkaHzK3pZwD79A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:cm6yyz4i70C6rUt1BOljZQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetDeviceContext$vars", [{
name: "AppManager_MobileContext",
attrName: "appManager_MobileContextInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_DeviceContextRec();
},
complexType: UBT_AppManager_CSModel.AppManager_DeviceContextRec
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetDeviceContext$Action = function (appManager_MobileContextIn) {
appManager_MobileContextIn = (appManager_MobileContextIn === undefined) ? new UBT_AppManager_CSModel.AppManager_DeviceContextRec() : appManager_MobileContextIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetDeviceContext$Action.bind(controller, appManager_MobileContextIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetFunction_MobileAfterLogin", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetFunction_MobileAfterLogin$Action = function (functionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetFunction_MobileAfterLogin$vars"))());
vars.value.functionInLocal = functionIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:O229E7XRaE6cg131yXV_mQ:/ClientActionFlows.O229E7XRaE6cg131yXV_mQ:ZvK_0WelLZ4bMncW0a17cA", "UBT_AppManager", "AppManager_SetFunction_MobileAfterLogin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:zgEBroFJE0qWF8Ci9UBszw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:GzKHyHcEUUe2XUJ4Winw6w", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetObjProperty
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_MobileAfterLogin, vars.value.functionInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ocoEiEhetEe50j3wgL3R4Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:O229E7XRaE6cg131yXV_mQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetFunction_MobileAfterLogin$vars", [{
name: "Function",
attrName: "functionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetFunction_MobileAfterLogin$Action = function (functionIn) {
functionIn = (functionIn === undefined) ? null : functionIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetFunction_MobileAfterLogin$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(functionIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetOAuthEndpoint", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetOAuthEndpoint$Action = function (idpProviderIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetOAuthEndpoint$vars"))());
vars.value.idpProviderIdInLocal = idpProviderIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:y0zsViAyS02a_kHv1sCVhw:/ClientActionFlows.y0zsViAyS02a_kHv1sCVhw:3GH8BvgHk61sR9Awh1FMSg", "UBT_AppManager", "AppManager_SetOAuthEndpoint", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Ll+zd3zIrkS1XSrBlTsTaA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XqyOxaDFd02uIYi_nu+4Bg", callContext.id) && (vars.value.idpProviderIdInLocal === UBT_AppManagerModel.staticEntities.appManager_IdpProvider.azureB2C))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:B6NezPCifEGXOcle__r6Og", callContext.id);
// AppManager_OAuth_EndPoint = "/oauth2/v2.0/authorize"
UBT_AppManagerClientVariables.setAppManager_OAuth_EndPoint("/oauth2/v2.0/authorize");
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:hQS7t0PN30yQTuEz0F9xjw", callContext.id);
} else {
if((vars.value.idpProviderIdInLocal === UBT_AppManagerModel.staticEntities.appManager_IdpProvider.frontEgg)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:5murpg5Gg0ar89s3zYlpFg", callContext.id);
// AppManager_OAuth_EndPoint = "/oauth/authorize"
UBT_AppManagerClientVariables.setAppManager_OAuth_EndPoint("/oauth/authorize");
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DwSnVRsh+EqxE8eY+ZqhNg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:W2xQsaLsAEy06eSDLTEUCQ", callContext.id);
}

}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:y0zsViAyS02a_kHv1sCVhw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetOAuthEndpoint$vars", [{
name: "IdpProviderId",
attrName: "idpProviderIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetOAuthEndpoint$Action = function (idpProviderIdIn) {
idpProviderIdIn = (idpProviderIdIn === undefined) ? 0 : idpProviderIdIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetOAuthEndpoint$Action.bind(controller, idpProviderIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetOnAfterInitializeCallback", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetOnAfterInitializeCallback$Action = function (functionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetOnAfterInitializeCallback$vars"))());
vars.value.functionInLocal = functionIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:cwVw0djd1k6RbOjjy5wpQQ:/ClientActionFlows.cwVw0djd1k6RbOjjy5wpQQ:t3pv6SzL9tirx6GCQtpAtg", "UBT_AppManager", "AppManager_SetOnAfterInitializeCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:fLU06QWS5USi8agF4sZkcw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Oqkbj_+bJU+QJmpxswKN2w", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetObjProperty
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_OnAfterInitializeCallback, vars.value.functionInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:cJRlMyFh6k2TfhfzYASGfg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:cwVw0djd1k6RbOjjy5wpQQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetOnAfterInitializeCallback$vars", [{
name: "Function",
attrName: "functionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetOnAfterInitializeCallback$Action = function (functionIn) {
functionIn = (functionIn === undefined) ? null : functionIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetOnAfterInitializeCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(functionIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetPIN_FingerprintReaderAvailable", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetPIN_FingerprintReaderAvailable$Action = function (availableIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetPIN_FingerprintReaderAvailable$vars"))());
vars.value.availableInLocal = availableIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:bZWYY_QcnU6p_8e7tfF1Jg:/ClientActionFlows.bZWYY_QcnU6p_8e7tfF1Jg:F3BIQB5o1xuTxmmNe42QLA", "UBT_AppManager", "AppManager_SetPIN_FingerprintReaderAvailable", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7+J4WWUn7UKwdOUWPt09Rw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Cpx0+c1xk0qsVfYcJjWbmg", callContext.id);
// PIN_FingerprintReaderAvailable_IsPersistent = Available
UBT_AppManagerClientVariables.setPIN_FingerprintReaderAvailable_IsPersistent(vars.value.availableInLocal);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RoASialWIUqJpsw6RzH1cA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:bZWYY_QcnU6p_8e7tfF1Jg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetPIN_FingerprintReaderAvailable$vars", [{
name: "Available",
attrName: "availableInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetPIN_FingerprintReaderAvailable$Action = function (availableIn) {
availableIn = (availableIn === undefined) ? false : availableIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetPIN_FingerprintReaderAvailable$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(availableIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetPIN_HasUnlocked$Action = function (hasUnlockedIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetPIN_HasUnlocked$vars"))());
vars.value.hasUnlockedInLocal = hasUnlockedIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:Fj7_F37Xx0iSOHkeLpVtFA:/ClientActionFlows.Fj7_F37Xx0iSOHkeLpVtFA:IFhUwk1fpBji4ri5W6ceVg", "UBT_AppManager", "AppManager_SetPIN_HasUnlocked", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:gTrv5GhXhE2FVc1dzcAs1g", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:AsrkynNi60Wug9PNNpIjJQ", callContext.id);
// PIN_HasUnlocked = HasUnlocked
UBT_AppManagerClientVariables.setPIN_HasUnlocked(vars.value.hasUnlockedInLocal);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+8irhvBF4kuHtPYfmFQ+bQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Fj7_F37Xx0iSOHkeLpVtFA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetPIN_HasUnlocked$vars", [{
name: "HasUnlocked",
attrName: "hasUnlockedInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetPIN_HasUnlocked$Action = function (hasUnlockedIn) {
hasUnlockedIn = (hasUnlockedIn === undefined) ? false : hasUnlockedIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetPIN_HasUnlocked$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hasUnlockedIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetPIN_IsLocked", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetPIN_IsLocked$Action = function (isLockedIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetPIN_IsLocked$vars"))());
vars.value.isLockedInLocal = isLockedIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:DVzL_JGpekqPL8Ci9HGoag:/ClientActionFlows.DVzL_JGpekqPL8Ci9HGoag:5g8RPThVqx7ICDvCFHGWPw", "UBT_AppManager", "AppManager_SetPIN_IsLocked", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Gr1Coc0BxkqGi9DliSxCPA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Wcn6EZpNuk2BQNRX+OidNw", callContext.id);
// PIN_IsLocked = IsLocked
UBT_AppManagerClientVariables.setPIN_IsLocked(vars.value.isLockedInLocal);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:udXpOg7FHUaNFD8DBKOFMA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:DVzL_JGpekqPL8Ci9HGoag", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetPIN_IsLocked$vars", [{
name: "IsLocked",
attrName: "isLockedInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetPIN_IsLocked$Action = function (isLockedIn) {
isLockedIn = (isLockedIn === undefined) ? false : isLockedIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetPIN_IsLocked$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isLockedIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetPIN_IsRegistering", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetPIN_IsRegistering$Action = function (isRegisteringIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetPIN_IsRegistering$vars"))());
vars.value.isRegisteringInLocal = isRegisteringIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:4HKxuTL2qUG07OLZ44n1hw:/ClientActionFlows.4HKxuTL2qUG07OLZ44n1hw:F5fQRezZpJ73kPBBwS25nQ", "UBT_AppManager", "AppManager_SetPIN_IsRegistering", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mq9DXziUbk2Pxp95vsJzDw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JAAnPGfJm0S062yopb5x1g", callContext.id);
// PIN_IsRegistering = IsRegistering
UBT_AppManagerClientVariables.setPIN_IsRegistering(vars.value.isRegisteringInLocal);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:y1L6imPYM0ayIjlQHwEr0Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:4HKxuTL2qUG07OLZ44n1hw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetPIN_IsRegistering$vars", [{
name: "IsRegistering",
attrName: "isRegisteringInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetPIN_IsRegistering$Action = function (isRegisteringIn) {
isRegisteringIn = (isRegisteringIn === undefined) ? false : isRegisteringIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetPIN_IsRegistering$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isRegisteringIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetStreamlineTOTPCallback", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetStreamlineTOTPCallback$Action = function (functionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetStreamlineTOTPCallback$vars"))());
vars.value.functionInLocal = functionIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:0Tg8dn572E2oX3kJwY_21A:/ClientActionFlows.0Tg8dn572E2oX3kJwY_21A:EXn+WdwoKx5yIL7x7gNupw", "UBT_AppManager", "AppManager_SetStreamlineTOTPCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:a+8tkbp62USiQFk48Ujbyw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:YQHwYnzEXky5jUJuGmJVeQ", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetObjProperty
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_StreamlineTOTPCallback, vars.value.functionInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:EMcg5BhS2Ueiidf2e63zKA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:0Tg8dn572E2oX3kJwY_21A", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetStreamlineTOTPCallback$vars", [{
name: "Function",
attrName: "functionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetStreamlineTOTPCallback$Action = function (functionIn) {
functionIn = (functionIn === undefined) ? null : functionIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetStreamlineTOTPCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(functionIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SetUserContextAfterLogin", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager_CS.model$PermissionListRec", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$Permissions_Set", "UBT_AppManager.controller$AzureInsights_UpdateContext", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBT_AppManager.controller$AppManager_SetCachedUserInfo", "UBT_AppManager_CS.model$LicenseListRec", "UBT_AppManager.controller$Licenses_Set", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.controller$FRD_Initialize", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "UBT_AppManager.referencesHealth$UBT_AppManager_DB", "UBT_AppManager_CS.model$AppManager_UserInfoClientRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManager_CSModel, UBT_AppManager_DBModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SetUserContextAfterLogin$Action = function (appManager_UserInfoClientIn, appManager_ClientConfigIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SetUserContextAfterLogin$vars"))());
vars.value.appManager_UserInfoClientInLocal = appManager_UserInfoClientIn.clone();
vars.value.appManager_ClientConfigInLocal = appManager_ClientConfigIn.clone();
var obj_MobileAfterLoginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.obj_MobileAfterLoginVar = obj_MobileAfterLoginVar;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:s5D4ST9Dfk2q8uyRqsXl2Q:/ClientActionFlows.s5D4ST9Dfk2q8uyRqsXl2Q:z0_rvQ2ch4HQuPjiCVDBTg", "UBT_AppManager", "AppManager_SetUserContextAfterLogin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZhIcGXwOl0GtpOavt6G+pg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:p6WiKcE9pE+5+b2FnDtkeQ", callContext.id);
// AppManager_UserExternalId = AppManager_UserInfoClient.External_Id
UBT_AppManagerClientVariables.setAppManager_UserExternalId(vars.value.appManager_UserInfoClientInLocal.external_IdAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:p6WiKcE9pE+5+b2FnDtkeQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Firebase_RealtimeDatabase_Token = AppManager_UserInfoClient.FirbaseRealTimeDabase_Token
UBT_AppManagerClientVariables.setFirebase_RealtimeDatabase_Token(vars.value.appManager_UserInfoClientInLocal.firbaseRealTimeDabase_TokenAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:p6WiKcE9pE+5+b2FnDtkeQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// AppManager_Username = AppManager_UserInfoClient.Username
UBT_AppManagerClientVariables.setAppManager_Username(vars.value.appManager_UserInfoClientInLocal.usernameAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:p6WiKcE9pE+5+b2FnDtkeQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// AppManager_ContactBaseId = AppManager_UserInfoClient.UserExtended.ContactBaseId
UBT_AppManagerClientVariables.setAppManager_ContactBaseId(vars.value.appManager_UserInfoClientInLocal.userExtendedAttr.contactBaseIdAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:p6WiKcE9pE+5+b2FnDtkeQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// AppManager_MemberId = AppManager_UserInfoClient.UserExtended.MemberId
UBT_AppManagerClientVariables.setAppManager_MemberId(vars.value.appManager_UserInfoClientInLocal.userExtendedAttr.memberIdAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:GytGdgmldEaS5CK_noIvcQ", callContext.id);
// Execute Action: AppManager_SetCachedUserInfo
UBT_AppManagerController.default.appManager_SetCachedUserInfo$Action(OS.DataConversion.JSConversions.typeConvertRecord(vars.value.appManager_UserInfoClientInLocal.userExtendedAttr, new UBT_AppManagerModel.AppManager_CachedUserInfoRec(), function (source, target) {
target.isCommunityMemberAttr = source.isCommunityMemberAttr;
target.contactBaseIdAttr = source.contactBaseIdAttr;
target.memberIdAttr = source.memberIdAttr;
target.firstNameAttr = source.firstNameAttr;
target.lastNameAttr = source.lastNameAttr;
target.localityAttr = source.localityAttr;
target.countryAttr = source.countryAttr;
target.countryCodeAttr = source.countryCodeAttr;
target.userExternalIdAttr = vars.value.appManager_UserInfoClientInLocal.external_IdAttr;
target.usernameAttr = vars.value.appManager_UserInfoClientInLocal.usernameAttr;
target.emailAttr = vars.value.appManager_UserInfoClientInLocal.emailAttr;
target.phoneAttr = vars.value.appManager_UserInfoClientInLocal.mobilePhoneAttr;
return target;
}), callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:4q29sbPv3EqaX9wuucIqZg", callContext.id);
// Execute Action: FRD_Initialize
return UBT_AppManagerController.default.fRD_Initialize$Action(vars.value.appManager_ClientConfigInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:LHiDS0Q+nUew_RhN1OIZdQ", callContext.id);
// Execute Action: AzureInsights_UpdateContext
return UBT_AppManagerController.default.azureInsights_UpdateContext$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JXoplgyUAUC5i0LSkFX7gw", callContext.id);
// Execute Action: Obj_MobileAfterLogin
obj_MobileAfterLoginVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_MobileAfterLogin, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ANSgLdoiHkeWEI9eCgYC4w", callContext.id);
// Execute Action: JSUtils_RunFunc
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action(obj_MobileAfterLoginVar.value.valueOut, OS.BuiltinFunctions.toObject(vars.value.appManager_ClientConfigInLocal), callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mUx3fUiPbU6QldJrdDZ8Aw", callContext.id);
// Execute Action: Licenses_Set
UBT_AppManagerController.default.licenses_Set$Action(vars.value.appManager_UserInfoClientInLocal.licenseListAttr, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:_1ezSQJTVk6UmIhH0CaK4A", callContext.id);
// Execute Action: Permissions_Set
UBT_AppManagerController.default.permissions_Set$Action(vars.value.appManager_UserInfoClientInLocal.permissionListAttr, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:bTcVxiJVI0aFIt702UGtPQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:s5D4ST9Dfk2q8uyRqsXl2Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:s5D4ST9Dfk2q8uyRqsXl2Q", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SetUserContextAfterLogin$vars", [{
name: "AppManager_UserInfoClient",
attrName: "appManager_UserInfoClientInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_UserInfoClientRec();
},
complexType: UBT_AppManager_CSModel.AppManager_UserInfoClientRec
}, {
name: "AppManager_ClientConfig",
attrName: "appManager_ClientConfigInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_ConfigClientRec();
},
complexType: UBT_AppManager_CSModel.AppManager_ConfigClientRec
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SetUserContextAfterLogin$Action = function (appManager_UserInfoClientIn, appManager_ClientConfigIn) {
appManager_UserInfoClientIn = (appManager_UserInfoClientIn === undefined) ? new UBT_AppManager_CSModel.AppManager_UserInfoClientRec() : appManager_UserInfoClientIn;
appManager_ClientConfigIn = (appManager_ClientConfigIn === undefined) ? new UBT_AppManager_CSModel.AppManager_ConfigClientRec() : appManager_ClientConfigIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SetUserContextAfterLogin$Action.bind(controller, appManager_UserInfoClientIn, appManager_ClientConfigIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AppManager_SynchAppContext", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.clientVariables", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_SynchAppContextInternal", "UBT_AppManager.controller$AppManager_SetAppId"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SynchAppContext$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var appManager_SynchAppContextInternalVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SynchAppContext$outVars"))());
varBag.callContext = callContext;
varBag.appManager_SynchAppContextInternalVar = appManager_SynchAppContextInternalVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:c_C+5p60Gk6DONae8UZ6Jg:/ClientActionFlows.c_C+5p60Gk6DONae8UZ6Jg:CJ7orsnECJtKWnlSFpY_Vg", "UBT_AppManager", "AppManager_SynchAppContext", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Xqjcjb9RvU+lzYfeO9e8Ig", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:tiyjxIAek0+LDtw69hLyyQ", callContext.id);
// Execute Action: AppManager_SetAppIdManager_SetAppId
UBT_AppManagerController.default.appManager_SetAppId$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:1UQgoX6OCkiBWo7nKyYu7g", callContext.id);
// Execute Action: AppManager_SynchAppContextInternal
return UBT_AppManagerController.default.appManager_SynchAppContextInternal$Action(callContext).then(function (value) {
appManager_SynchAppContextInternalVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:QE5FGV_2c0WfEpkSDQv5PQ", callContext.id);
// Config = AppManager_SynchAppContextInternal.Config
outVars.value.configOut = appManager_SynchAppContextInternalVar.value.configOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:FD0EKy0xqES2KOIzStawIA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:c_C+5p60Gk6DONae8UZ6Jg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:c_C+5p60Gk6DONae8UZ6Jg", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SynchAppContext$outVars", [{
name: "Config",
attrName: "configOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_ConfigClientRec();
},
complexType: UBT_AppManager_CSModel.AppManager_ConfigClientRec
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SynchAppContext$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SynchAppContext$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Config: actionResults.configOut
};
});
};
});

define("UBT_AppManager.controller$AppManager_SynchAppContextInternal", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_SetOAuthEndpoint", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager_CS.model$PermissionListRec", "UBT_AppManager.controller$ServerAction.AppManager_SynchAppContext", "UBT_AppManager.controller$Permissions_Set"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SynchAppContextInternal$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var appManager_SynchAppContextVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_SynchAppContextInternal$outVars"))());
varBag.callContext = callContext;
varBag.communicationExceptionVar = communicationExceptionVar;
varBag.appManager_SynchAppContextVar = appManager_SynchAppContextVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:rYcv+hQElkWCjg6c2UnL4w:/ClientActionFlows.rYcv+hQElkWCjg6c2UnL4w:u8j3EGHj90qYk4tJjR8lTA", "UBT_AppManager", "AppManager_SynchAppContextInternal", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:FPtk_IWLtkCNx3BJUCnYng", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Dg4lLv+ObEmy9roNQ+d60g", callContext.id);
// Execute Action: AppManager_SynchAppContext
return controller.appManager_SynchAppContext$ServerAction(OS.BuiltinFunctions.getEntryEspaceName(), callContext).then(function (value) {
appManager_SynchAppContextVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:aGxn_qvWG0ylSjQ79exOeQ", callContext.id);
// Config = AppManager_SynchAppContext.AppManager_ClientConfig
outVars.value.configOut = appManager_SynchAppContextVar.value.appManager_ClientConfigOut;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:bNByEkChfUCAsLyw4pnk8A", callContext.id) && appManager_SynchAppContextVar.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id);
// AppManager_AppBaseURL = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.BaseURL
UBT_AppManagerClientVariables.setAppManager_AppBaseURL(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.baseURLAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// FrontEgg_AppId = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.FrontEgg_AppId
UBT_AppManagerClientVariables.setFrontEgg_AppId(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.frontEgg_AppIdAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// AzureB2C_ClientId = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.AzureB2C_ClientId
UBT_AppManagerClientVariables.setAzureB2C_ClientId(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.azureB2C_ClientIdAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// AzureB2C_LoginPolicy = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.AzureB2C_Policy_Login
UBT_AppManagerClientVariables.setAzureB2C_LoginPolicy(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.azureB2C_Policy_LoginAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// AzureB2C_ResetPassPolicy = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.AzureB2C_Policy_ResetPass
UBT_AppManagerClientVariables.setAzureB2C_ResetPassPolicy(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.azureB2C_Policy_ResetPassAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// OutSystems_Environment = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.Environment
UBT_AppManagerClientVariables.setOutSystems_Environment(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.environmentAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// AppManager_IdPProviderId = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.IdpProviderId
UBT_AppManagerClientVariables.setAppManager_IdPProviderId(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.idpProviderIdAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// Firebase_RealtimeDatabase_Use = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.Firebase_RealTimeDatabase_Use
UBT_AppManagerClientVariables.setFirebase_RealtimeDatabase_Use((appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.firebase_RealTimeDatabase_UseAttr ? "True" : "False"));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// AzureInsights_Use = Config.AppManager_ClientCache.AzureInsights_Use
UBT_AppManagerClientVariables.setAzureInsights_Use(outVars.value.configOut.appManager_ClientCacheAttr.azureInsights_UseAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// Firebase_ProjectId = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.Firebase_ProjectId
UBT_AppManagerClientVariables.setFirebase_ProjectId(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.firebase_ProjectIdAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// PIN_Use = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.PIN_Use
UBT_AppManagerClientVariables.setPIN_Use(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.pIN_UseAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "12");
// PIN_SessionInactivity_Use = Config.AppManager_ClientCache.PIN_SessionInactivity_Use
UBT_AppManagerClientVariables.setPIN_SessionInactivity_Use(outVars.value.configOut.appManager_ClientCacheAttr.pIN_SessionInactivity_UseAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "13");
// PIN_SessionInactivity_Seconds = Config.AppManager_ClientCache.PIN_SessionInactivity_Seconds
UBT_AppManagerClientVariables.setPIN_SessionInactivity_Seconds(outVars.value.configOut.appManager_ClientCacheAttr.pIN_SessionInactivity_SecondsAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "14");
// PIN_EnableFingerprint = Config.AppManager_ClientCache.PIN_EnableFingerprint
UBT_AppManagerClientVariables.setPIN_EnableFingerprint(outVars.value.configOut.appManager_ClientCacheAttr.pIN_EnableFingerprintAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "15");
// PIN_EnforceOnReady = Config.AppManager_ClientCache.PIN_EnforceOnReady
UBT_AppManagerClientVariables.setPIN_EnforceOnReady(outVars.value.configOut.appManager_ClientCacheAttr.pIN_EnforceOnReadyAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "16");
// AppManager_CustomCallback = Config.AppManager_ClientCache.CustomCallback
UBT_AppManagerClientVariables.setAppManager_CustomCallback(outVars.value.configOut.appManager_ClientCacheAttr.customCallbackAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "17");
// PIN_SessionInactivity_Navigate = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.PIN_SessionInactivity_Navigate
UBT_AppManagerClientVariables.setPIN_SessionInactivity_Navigate(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.pIN_SessionInactivity_NavigateAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "18");
// MinNativeAppVersion = Config.AppManager_ClientCache.MinNativeAppVersion
UBT_AppManagerClientVariables.setMinNativeAppVersion(outVars.value.configOut.appManager_ClientCacheAttr.minNativeAppVersionAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "19");
// MinWebViewVersion_Chrome = Config.AppManager_ClientCache.MinWebViewVersion_Chrome
UBT_AppManagerClientVariables.setMinWebViewVersion_Chrome(outVars.value.configOut.appManager_ClientCacheAttr.minWebViewVersion_ChromeAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "20");
// MinWebViewVersion_Safari = AppManager_SynchAppContext.AppManager_ClientConfig.AppManager_ClientCache.MinWebViewVersion_Safari
UBT_AppManagerClientVariables.setMinWebViewVersion_Safari(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.minWebViewVersion_SafariAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "21");
// Streamline_TOTPOnLogin = Config.AppManager_ClientCache.Streamline_TOTP_LoginCheck
UBT_AppManagerClientVariables.setStreamline_TOTPOnLogin(outVars.value.configOut.appManager_ClientCacheAttr.streamline_TOTP_LoginCheckAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iLEcFSvGU0ak2wkINnTJLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "22");
// Firebase_RealtimeDatabase_Token = AppManager_SynchAppContext.FirebaseRealTimeDB_Token
UBT_AppManagerClientVariables.setFirebase_RealtimeDatabase_Token(appManager_SynchAppContextVar.value.firebaseRealTimeDB_TokenOut);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZBrhCcWNDUCjdsc37TKGBw", callContext.id);
// Execute Action: AppManager_SetOAuthEndpoint
UBT_AppManagerController.default.appManager_SetOAuthEndpoint$Action(outVars.value.configOut.appManager_ClientCacheAttr.idpProviderIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:EuQZuPsg8kKkUJW1_TpxcQ", callContext.id);
// Execute Action: Permissions_Set
UBT_AppManagerController.default.permissions_Set$Action(appManager_SynchAppContextVar.value.permissionListOut, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:gUFojkMAq0udVY_HAZdCAA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:oJPaqrUErkOruAirKgqU0g", callContext.id);
// Raise Error: InvalidApp
throw new OS.Exceptions.Exceptions.UserException("UBT_AppManager.InvalidApp", "Error defining login information");
}

});
}).catch(function (ex) {
OS.Logger.trace("AppManager_SynchAppContextInternal.AppManager_SynchAppContextInternal", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:csL_3Buo50+UTjYUs6JLow", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Z2d2quYZdkGwSncmBrOaBg", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:rYcv+hQElkWCjg6c2UnL4w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:rYcv+hQElkWCjg6c2UnL4w", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_SynchAppContextInternal$outVars", [{
name: "Config",
attrName: "configOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_ConfigClientRec();
},
complexType: UBT_AppManager_CSModel.AppManager_ConfigClientRec
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_SynchAppContextInternal$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_SynchAppContextInternal$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Config: actionResults.configOut
};
});
};
});

define("UBT_AppManager.controller$AppManager_TryDeserializeMessageWithTitle", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.clientVariables", "UBT_AppManager_CS.model$AppManager_ClientExceptionMessageRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_TryDeserializeMessageWithTitle$Action = function (in_MessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_TryDeserializeMessageWithTitle$vars"))());
vars.value.in_MessageInLocal = in_MessageIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var jSONDeserializeAppManager_ClientExceptionMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AppManager_TryDeserializeMessageWithTitle$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.jSONDeserializeAppManager_ClientExceptionMessageVar = jSONDeserializeAppManager_ClientExceptionMessageVar;
varBag.outVars = outVars;
try {try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:6C8+M7uDT0q_EmXaWUfAWQ:/ClientActionFlows.6C8+M7uDT0q_EmXaWUfAWQ:TtuRLUGPDAxAXp8f+o3mAw", "UBT_AppManager", "AppManager_TryDeserializeMessageWithTitle", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mn1VQnH0RU2tIgpTazT2Mg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DN+rn3KA3kabgpESa+tCbg", callContext.id);
// JSON Deserialize: JSONDeserializeAppManager_ClientExceptionMessage
jSONDeserializeAppManager_ClientExceptionMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.in_MessageInLocal, UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRec, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZDgBh6aqgkCDb+vvTxKJ+Q", callContext.id);
// Message = JSONDeserializeAppManager_ClientExceptionMessage.Data.Message
outVars.value.messageOut = jSONDeserializeAppManager_ClientExceptionMessageVar.value.dataOut.messageAttr;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZDgBh6aqgkCDb+vvTxKJ+Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// MessageTitle = JSONDeserializeAppManager_ClientExceptionMessage.Data.MessageTitle
outVars.value.messageTitleOut = jSONDeserializeAppManager_ClientExceptionMessageVar.value.dataOut.messageTitleAttr;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZDgBh6aqgkCDb+vvTxKJ+Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// MessageType = JSONDeserializeAppManager_ClientExceptionMessage.Data.MessageType
outVars.value.messageTypeOut = jSONDeserializeAppManager_ClientExceptionMessageVar.value.dataOut.messageTypeAttr;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:INKLKq2a5UavovZf5H90mw", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("AppManager_TryDeserializeMessageWithTitle.AppManager_TryDeserializeMessageWithTitle", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:LJkFvGl+30+CW67bfjr5dA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CJp2j4JhWEWBLIf0iB1XYQ", callContext.id);
// Message = In_Message
outVars.value.messageOut = vars.value.in_MessageInLocal;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:3f0w8iH4GUewL6YWpLtRYg", callContext.id);
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
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:6C8+M7uDT0q_EmXaWUfAWQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_TryDeserializeMessageWithTitle$vars", [{
name: "In_Message",
attrName: "in_MessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AppManager_TryDeserializeMessageWithTitle$outVars", [{
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MessageTitle",
attrName: "messageTitleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MessageType",
attrName: "messageTypeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBT_AppManagerController.default.clientActionProxies.appManager_TryDeserializeMessageWithTitle$Action = function (in_MessageIn) {
in_MessageIn = (in_MessageIn === undefined) ? "" : in_MessageIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.appManager_TryDeserializeMessageWithTitle$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_MessageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Message: OS.DataConversion.JSNodeParamConverter.to(actionResults.messageOut, OS.DataTypes.DataTypes.Text),
MessageTitle: OS.DataConversion.JSNodeParamConverter.to(actionResults.messageTitleOut, OS.DataTypes.DataTypes.Text),
MessageType: actionResults.messageTypeOut
};
});
};
});

define("UBT_AppManager.controller$AzureInsights_CreateCustomEvent", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.controller", "UBT_AppManager.clientVariables", "ApplicationInsightsConnector.model$VersionContextRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$ApplicationInsightsConnector", "ApplicationInsightsConnector.controller$Create_InsightsCustomEvent", "UBT_AppManager.controller$AppManager_CheckAppContext"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, ApplicationInsightsConnectorModel, ApplicationInsightsConnectorController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action = function (azureInsights_EventIdIn, jSON_EventInfoIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.AzureInsights_CreateCustomEvent$vars"))());
vars.value.azureInsights_EventIdInLocal = azureInsights_EventIdIn;
vars.value.jSON_EventInfoInLocal = jSON_EventInfoIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:R2AQvzpwyEmGtYWVBwxZhw:/ClientActionFlows.R2AQvzpwyEmGtYWVBwxZhw:yPpPesKg_eE_IA2GlOirgQ", "UBT_AppManager", "AzureInsights_CreateCustomEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:LWjPGOrR7E+98zbjo0FgaA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:NcrRUeSuhEqPlENCzpalZw", callContext.id);
// Execute Action: AppManager_CheckAppContext
return UBT_AppManagerController.default.appManager_CheckAppContext$Action(callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:_yMi7Z3TZ02opwQ_nG45mQ", callContext.id) && UBT_AppManagerClientVariables.getAzureInsights_Use())) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:zhGGJt0LSky6U2Y0k9_gpA", callContext.id);
// Execute Action: Create_InsightsCustomEvent
return ApplicationInsightsConnectorController.default.create_InsightsCustomEvent$Action(vars.value.azureInsights_EventIdInLocal, vars.value.jSON_EventInfoInLocal, "", function () {
var rec = new ApplicationInsightsConnectorModel.VersionContextRec();
rec.environmentAttr = UBT_AppManagerClientVariables.getOutSystems_Environment();
rec.runtimeVersionAttr = UBT_AppManagerClientVariables.getOutSystems_RuntimeVersion();
rec.buildAttr = UBT_AppManagerClientVariables.getDeviceInfo_MobileBuild();
rec.versionAttr = UBT_AppManagerClientVariables.getDeviceInfo_MobileVersion();
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:f55L4ThgFkuYXkAzi1sU6A", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:f55L4ThgFkuYXkAzi1sU6A", callContext.id);
}

});
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:R2AQvzpwyEmGtYWVBwxZhw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:R2AQvzpwyEmGtYWVBwxZhw", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.AzureInsights_CreateCustomEvent$vars", [{
name: "AzureInsights_EventId",
attrName: "azureInsights_EventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "JSON_EventInfo",
attrName: "jSON_EventInfoInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.azureInsights_CreateCustomEvent$Action = function (azureInsights_EventIdIn, jSON_EventInfoIn) {
azureInsights_EventIdIn = (azureInsights_EventIdIn === undefined) ? "" : azureInsights_EventIdIn;
jSON_EventInfoIn = (jSON_EventInfoIn === undefined) ? "" : jSON_EventInfoIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(azureInsights_EventIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(jSON_EventInfoIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$AzureInsights_UpdateContext", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "ApplicationInsightsConnector.controller", "UBT_AppManager.clientVariables", "ApplicationInsightsConnector.controller$UpdateApplicationInsightsContext", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$ApplicationInsightsConnector"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, ApplicationInsightsConnectorController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.azureInsights_UpdateContext$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:SKI4FuWGHUS34dB01ZsfiA:/ClientActionFlows.SKI4FuWGHUS34dB01ZsfiA:nJZ1cOmknb4l2mlNujOa7w", "UBT_AppManager", "AzureInsights_UpdateContext", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:F9jX39pkaESZU+86o3StCQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:B+suVbFneEWKL6FcKlkdhQ", callContext.id);
// Execute Action: UpdateApplicationInsightsContext
return ApplicationInsightsConnectorController.default.updateApplicationInsightsContext$Action(UBT_AppManagerClientVariables.getDeviceInfo_UUID(), UBT_AppManagerClientVariables.getAppManager_UserExternalId(), UBT_AppManagerClientVariables.getAppManager_UserExternalId(), UBT_AppManagerClientVariables.getAppManager_ContactBaseId(), UBT_AppManagerClientVariables.getAppManager_Username(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:LJVj9hEnL0e_4nq2_vyGcA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:SKI4FuWGHUS34dB01ZsfiA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:SKI4FuWGHUS34dB01ZsfiA", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.azureInsights_UpdateContext$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.azureInsights_UpdateContext$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$DelayedMessage_Define", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.model$AppManager_DelayedMessageRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.delayedMessage_Define$Action = function (messageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.DelayedMessage_Define$vars"))());
vars.value.messageInLocal = messageIn.clone();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize1Var = jSONSerialize1Var;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:RbMh9pNhOUyyMwE95oqSyg:/ClientActionFlows.RbMh9pNhOUyyMwE95oqSyg:AkSc_HP9tGvqk7lUXQwFiA", "UBT_AppManager", "DelayedMessage_Define", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:P8WDiHjRYUa51v3ogcnkPQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Dfkq72jY+kuGZf6PLJkMTg", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.messageInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:siXwCD1wS02Uj6IxR_Lpbg", callContext.id);
// AppManager_DelayedMessage = JSONSerialize1.JSON
UBT_AppManagerClientVariables.setAppManager_DelayedMessage(jSONSerialize1Var.value.jSONOut);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:j5qGxEATSU6jtV1L6DrRlQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:RbMh9pNhOUyyMwE95oqSyg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.DelayedMessage_Define$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.AppManager_DelayedMessageRec();
},
complexType: UBT_AppManagerModel.AppManager_DelayedMessageRec
}]);
UBT_AppManagerController.default.clientActionProxies.delayedMessage_Define$Action = function (messageIn) {
messageIn = (messageIn === undefined) ? new UBT_AppManagerModel.AppManager_DelayedMessageRec() : messageIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.delayedMessage_Define$Action.bind(controller, messageIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$DelayedMessage_Show", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.model$AppManager_DelayedMessageRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.delayedMessage_Show$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var jSONDeserializeAppManager_DelayedMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManagerModel.AppManager_DelayedMessageRec))());
varBag.callContext = callContext;
varBag.jSONDeserializeAppManager_DelayedMessageVar = jSONDeserializeAppManager_DelayedMessageVar;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:KfoyCT_myk2nyYngI8Ij_w:/ClientActionFlows.KfoyCT_myk2nyYngI8Ij_w:3yrglt5pnlPGMD9JgVesRg", "UBT_AppManager", "DelayedMessage_Show", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:n7U9MCGA8EygVcpDSYiI8A", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:h94B4B9uhkOe12IU5jzgCQ", callContext.id) && ((UBT_AppManagerClientVariables.getAppManager_DelayedMessage()) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:_jVqZR9R8U2s0pPMuMoExw", callContext.id);
// JSON Deserialize: JSONDeserializeAppManager_DelayedMessage
jSONDeserializeAppManager_DelayedMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(UBT_AppManagerClientVariables.getAppManager_DelayedMessage(), UBT_AppManagerModel.AppManager_DelayedMessageRec, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nuJtOFhNe0iBqZR8VegxjQ", callContext.id);
// AppManager_DelayedMessage = ""
UBT_AppManagerClientVariables.setAppManager_DelayedMessage("");
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:jRxZHs2DrE6g3xVFgo_8Ew", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action(jSONDeserializeAppManager_DelayedMessageVar.value.dataOut.messageTitleAttr, jSONDeserializeAppManager_DelayedMessageVar.value.dataOut.messageAttr, jSONDeserializeAppManager_DelayedMessageVar.value.dataOut.typeAttr, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:onCgfQhPukqQii_iqKiQWg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:onCgfQhPukqQii_iqKiQWg", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:KfoyCT_myk2nyYngI8Ij_w", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.delayedMessage_Show$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.delayedMessage_Show$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$FCM_DeeplinkCallback_Get", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.fCM_DeeplinkCallback_Get$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var appManager_JSUtils_ElementCache_GetObjPropertyVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FCM_DeeplinkCallback_Get$outVars"))());
varBag.callContext = callContext;
varBag.appManager_JSUtils_ElementCache_GetObjPropertyVar = appManager_JSUtils_ElementCache_GetObjPropertyVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:QWUbWJSlAUuCGTtQ6LoqMg:/ClientActionFlows.QWUbWJSlAUuCGTtQ6LoqMg:AVIH+g3mLaQ_F085m_6bQw", "UBT_AppManager", "FCM_DeeplinkCallback_Get", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:6eUBGEpnBkiX+tcjCE2Hgw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ms2Q33A6lEGauhqcEuEFRQ", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_GetObjProperty
appManager_JSUtils_ElementCache_GetObjPropertyVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_FirebaseCloudMessageDeeplinkCallback, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:YFDB2hsG0kizGrXgKi36Yg", callContext.id);
// Object = AppManager_JSUtils_ElementCache_GetObjProperty.Value
outVars.value.objectOut = appManager_JSUtils_ElementCache_GetObjPropertyVar.value.valueOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Ee7cNkQFI0qk1L0lcYBBnQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:QWUbWJSlAUuCGTtQ6LoqMg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FCM_DeeplinkCallback_Get$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.fCM_DeeplinkCallback_Get$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.fCM_DeeplinkCallback_Get$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});

define("UBT_AppManager.controller$FCM_DeeplinkCallback_Set", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.fCM_DeeplinkCallback_Set$Action = function (objectIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FCM_DeeplinkCallback_Set$vars"))());
vars.value.objectInLocal = objectIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:nWBoQD1EbEeTUrzPLyeo+w:/ClientActionFlows.nWBoQD1EbEeTUrzPLyeo+w:ayAEFPEZN7mLuzL77vEVpg", "UBT_AppManager", "FCM_DeeplinkCallback_Set", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:zDPJZYvCFEaALd4UHcMBYw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:gjBpQAGi3E6PqdRkRB5COw", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetObjProperty
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_FirebaseCloudMessageDeeplinkCallback, vars.value.objectInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7lMHVdjgVE61dDHLeuNkZA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:nWBoQD1EbEeTUrzPLyeo+w", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FCM_DeeplinkCallback_Set$vars", [{
name: "Object",
attrName: "objectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.fCM_DeeplinkCallback_Set$Action = function (objectIn) {
objectIn = (objectIn === undefined) ? null : objectIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.fCM_DeeplinkCallback_Set$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(objectIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$FCM_NotificationCallback_Get", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.fCM_NotificationCallback_Get$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var appManager_JSUtils_ElementCache_GetObjPropertyVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FCM_NotificationCallback_Get$outVars"))());
varBag.callContext = callContext;
varBag.appManager_JSUtils_ElementCache_GetObjPropertyVar = appManager_JSUtils_ElementCache_GetObjPropertyVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:ekyFBMy+G0ezkcD38F0kKw:/ClientActionFlows.ekyFBMy+G0ezkcD38F0kKw:EjluhLlNDkrZT5qg0HIyeg", "UBT_AppManager", "FCM_NotificationCallback_Get", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:f0JT1L1cLk6GJtByHmYlQA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:71zYtVWvxEqWkr9+npFRJQ", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_GetObjProperty
appManager_JSUtils_ElementCache_GetObjPropertyVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_FirebaseCloudMessageNotificationCallback, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ejpLnzpAkkatbJiWxQEKjw", callContext.id);
// Object = AppManager_JSUtils_ElementCache_GetObjProperty.Value
outVars.value.objectOut = appManager_JSUtils_ElementCache_GetObjPropertyVar.value.valueOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iar4z_ef+USfMgDAFoSHTA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:ekyFBMy+G0ezkcD38F0kKw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FCM_NotificationCallback_Get$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.fCM_NotificationCallback_Get$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.fCM_NotificationCallback_Get$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});

define("UBT_AppManager.controller$FCM_NotificationCallback_Set", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.fCM_NotificationCallback_Set$Action = function (objectIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FCM_NotificationCallback_Set$vars"))());
vars.value.objectInLocal = objectIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:16NHOnBYf0SUkNlj9iRzsg:/ClientActionFlows.16NHOnBYf0SUkNlj9iRzsg:KIyr5q33q6wt18H0Zm8Eww", "UBT_AppManager", "FCM_NotificationCallback_Set", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:VHJhNljaj0W_CZ92Xe8AXg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iHIhIpOglkG7HxSM2H6q+g", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetObjProperty
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_FirebaseCloudMessageNotificationCallback, vars.value.objectInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:MGGfkheSTEucetGAJjIDyw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:16NHOnBYf0SUkNlj9iRzsg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FCM_NotificationCallback_Set$vars", [{
name: "Object",
attrName: "objectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.fCM_NotificationCallback_Set$Action = function (objectIn) {
objectIn = (objectIn === undefined) ? null : objectIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.fCM_NotificationCallback_Set$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(objectIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$FRD_Date_GetStartedOn", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.fRD_Date_GetStartedOn$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FRD_Date_GetStartedOn$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:QltHZ9St+UeHRoP94mDBhg:/ClientActionFlows.QltHZ9St+UeHRoP94mDBhg:GSolK1n5S_q8lbG5w1Su2g", "UBT_AppManager", "FRD_Date_GetStartedOn", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:8CaZAzQGNEu4OmlgTdKvyQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:zyi8kyjKGEqGwTWkT3Vr8w", callContext.id);
// StartedOn = Firebase_RealtimeDatabase_StartedOn
outVars.value.startedOnOut = UBT_AppManagerClientVariables.getFirebase_RealtimeDatabase_StartedOn();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:33xWgSzxP02qQADGou9MNw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:QltHZ9St+UeHRoP94mDBhg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FRD_Date_GetStartedOn$outVars", [{
name: "StartedOn",
attrName: "startedOnOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
UBT_AppManagerController.default.clientActionProxies.fRD_Date_GetStartedOn$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.fRD_Date_GetStartedOn$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
StartedOn: OS.DataConversion.JSNodeParamConverter.to(actionResults.startedOnOut, OS.DataTypes.DataTypes.DateTime)
};
});
};
});

define("UBT_AppManager.controller$FRD_HandleEvent", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "Firebase.model", "Firebase.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AzureInsights_CreateCustomEvent", "Firebase.model$FirebaseEventRec", "UBT_AppManager.referencesHealth$Firebase", "UBT_AppManager.controller$FRD_HandleEvent_Logout", "Firebase.controller$ParseFirevaseEventValue", "UBT_AppManager.controller$FRD_UserCallback_Get", "UBT_AppManager.controller$FRD_Date_GetStartedOn"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, FirebaseModel, FirebaseController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.fRD_HandleEvent$Action = function (responseIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FRD_HandleEvent$vars"))());
vars.value.responseInLocal = responseIn;
var parseFirevaseEventValueVar = new OS.DataTypes.VariableHolder();
var fRD_UserCallback_GetVar = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.parseFirevaseEventValueVar = parseFirevaseEventValueVar;
varBag.fRD_UserCallback_GetVar = fRD_UserCallback_GetVar;
varBag.jSONSerialize1Var = jSONSerialize1Var;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:iKpeX7XyN0acUH++7_73Bw:/ClientActionFlows.iKpeX7XyN0acUH++7_73Bw:6Oq1jUN5gSgPcQjG_PXqKg", "UBT_AppManager", "FRD_HandleEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+Lg0X9dUW0C79nfLmXoziQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Tyv+tBshBUaO+Sw7r5slvw", callContext.id);
// Execute Action: ParseFirevaseEventValue
parseFirevaseEventValueVar.value = FirebaseController.default.parseFirevaseEventValue$Action(vars.value.responseInLocal, callContext);

// Is New Event 
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:0a0cqBsrukGbHR+3AYDmDw", callContext.id) && parseFirevaseEventValueVar.value.firebaseEventOut.eventDateTimeAttr.gt(OutSystemsDebugger.handleFunctionCall(function () {
return UBT_AppManagerController.default.fRD_Date_GetStartedOn$Action(callContext).startedOnOut;
}, OS.DataTypes.DataTypes.DateTime, callContext.id)))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9PkR3RI_CEesE0z0QKs5XA", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(parseFirevaseEventValueVar.value.firebaseEventOut, false, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:eTYBWdiJm0KVRQmyM6PpRg", callContext.id);
// Execute Action: AzureInsights_CreateCustomEvent
return UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents.fRD_ReceivedSignal, jSONSerialize1Var.value.jSONOut, callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:bXySvbuspk2m3To6rP4qvg", callContext.id) && (parseFirevaseEventValueVar.value.firebaseEventOut.eventTypeAttr === UBT_AppManagerModel.staticEntities.appManager_FRD_Events.logOut))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7fNomkdyk0OdbKHwFAJ9Wg", callContext.id);
// Execute Action: FRD_HandleEvent_Logout
return UBT_AppManagerController.default.fRD_HandleEvent_Logout$Action(parseFirevaseEventValueVar.value.firebaseEventOut, callContext);
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:w+8h4FTg6UeQnQhfxO0yTg", callContext.id);
// Execute Action: FRD_UserCallback_Get
fRD_UserCallback_GetVar.value = UBT_AppManagerController.default.fRD_UserCallback_Get$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:UijPQmc+PEm2A0O5u8auAQ", callContext.id);
// Execute Action: JSUtils_RunFunc
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action(fRD_UserCallback_GetVar.value.objectOut, vars.value.responseInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:YvXie1coEEqnz7laS17Ceg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:kXxlVjsxW0y7nODBeSPnng", callContext.id);
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:iKpeX7XyN0acUH++7_73Bw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:iKpeX7XyN0acUH++7_73Bw", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FRD_HandleEvent$vars", [{
name: "Response",
attrName: "responseInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.fRD_HandleEvent$Action = function (responseIn) {
responseIn = (responseIn === undefined) ? null : responseIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.fRD_HandleEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(responseIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$FRD_HandleEvent_Logout", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "Firebase.model", "UBT_AppManager_CS.model", "UBT_AppManager.controller$FRD_HandleEvent_Logout.ParseAdvancedJSONJS", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_Logout", "UBTJavaScriptUtils.controller$JSUtils_String_Split", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.model$AppManager_DelayedMessageRec", "UBT_AppManager.controller$DelayedMessage_Define", "UBTJavaScriptUtils.controller$JSUtils_PageRefresh", "Firebase.model$FirebaseEventRec", "UBT_AppManager.referencesHealth$Firebase", "UBT_AppManager_CS.model$FirebaseRD_EventJSONRec", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, FirebaseModel, UBT_AppManager_CSModel, UBT_AppManager_controller_FRD_HandleEvent_Logout_ParseAdvancedJSONJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.fRD_HandleEvent_Logout$Action = function (firebaseEventIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FRD_HandleEvent_Logout$vars"))());
vars.value.firebaseEventInLocal = firebaseEventIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var jSUtils_String_SplitVar = new OS.DataTypes.VariableHolder();
var listAnyVar = new OS.DataTypes.VariableHolder();
var parseAdvancedJSONJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeTroveFirebaseEventJSONVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManager_CSModel.FirebaseRD_EventJSONRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.jSUtils_String_SplitVar = jSUtils_String_SplitVar;
varBag.listAnyVar = listAnyVar;
varBag.parseAdvancedJSONJSResult = parseAdvancedJSONJSResult;
varBag.jSONDeserializeTroveFirebaseEventJSONVar = jSONDeserializeTroveFirebaseEventJSONVar;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:NSH1ZgQ7Rk+k1xW0QF7T1Q:/ClientActionFlows.NSH1ZgQ7Rk+k1xW0QF7T1Q:jpSHO28363eQ0tx1mrYJhA", "UBT_AppManager", "FRD_HandleEvent_Logout", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:x3DBJSFmekKYrO3y7t1xqA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:a38aOgJDsUehU_SgkIf6fQ", callContext.id);
// The string received here is in format e.g.:
//
//'"{\\"uuid\\":\\"\\",\\"errorMessage\\":\\"Please make sure you have an active Trove account. For further details please refer to your Regional Administrator.\\"}"'
//
//For this reason we need to invoke parse 2 times on it to remove that extra characters in order for the JSON Deserialize to function well.
parseAdvancedJSONJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_FRD_HandleEvent_Logout_ParseAdvancedJSONJS, "ParseAdvancedJSON", "FRD_HandleEvent_Logout", {
In1: OS.DataConversion.JSNodeParamConverter.to(vars.value.firebaseEventInLocal.advancedJSONAttr, OS.DataTypes.DataTypes.Text),
Out1: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.FRD_HandleEvent_Logout$parseAdvancedJSONJSResult"))();
jsNodeResult.out1Out = OS.DataConversion.JSNodeParamConverter.from($parameters.Out1, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:01BFdSlnIUyZlWJHLdEnpg", callContext.id);
// JSON Deserialize: JSONDeserializeTroveFirebaseEventJSON
jSONDeserializeTroveFirebaseEventJSONVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(parseAdvancedJSONJSResult.value.out1Out, UBT_AppManager_CSModel.FirebaseRD_EventJSONRec, false);
// Has UUIDs?
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:N4Jw9AmQuEyuo8SkRwLKhw", callContext.id) && (((jSONDeserializeTroveFirebaseEventJSONVar.value.dataOut.uUIDAttr) !== ("")) && UBT_AppManagerClientVariables.getDeviceInfo_IsNative()))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:jZWFQTvMLkiXNnx0ue2naw", callContext.id);
// Execute Action: JSUtils_String_Split
jSUtils_String_SplitVar.value = UBTJavaScriptUtilsController.default.jSUtils_String_Split$Action(jSONDeserializeTroveFirebaseEventJSONVar.value.dataOut.uUIDAttr, ";", callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mEJchxF1lECRkZaGnxFKjg", callContext.id);
// Execute Action: ListAny
listAnyVar.value = OS.SystemActions.listAny(jSUtils_String_SplitVar.value.listOut, function (p) {
return (p === UBT_AppManagerClientVariables.getDeviceInfo_UUID());
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:5xEvBakcy0mbm3odF9Ro0w", callContext.id) && listAnyVar.value.resultOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:e_2WukuECU+0RA9_7BkIdg", callContext.id);
return OS.Flow.returnAsync();

}

}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:LEqhC83nmk+q8tsTxCVtjw", callContext.id);
// Execute Action: AppManager_Logout
return UBT_AppManagerController.default.appManager_Logout$Action(callContext).then(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:m5Ll4hl8akOJ4hQQWkLfbQ", callContext.id) && ((jSONDeserializeTroveFirebaseEventJSONVar.value.dataOut.errorMessageAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:SJievpo2Uk22U1p9Gr4qEg", callContext.id);
// Execute Action: DelayedMessage_Define
UBT_AppManagerController.default.delayedMessage_Define$Action(function () {
var rec = new UBT_AppManagerModel.AppManager_DelayedMessageRec();
rec.typeAttr = UBT_AppManagerModel.staticEntities.uBT_MessageType.error;
rec.messageAttr = jSONDeserializeTroveFirebaseEventJSONVar.value.dataOut.errorMessageAttr;
rec.messageTitleAttr = jSONDeserializeTroveFirebaseEventJSONVar.value.dataOut.errorMessageTitleAttr;
return rec;
}(), callContext);
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:GB4W1aDtYkWEw9grsYQ8lw", callContext.id);
// Execute Action: JSUtils_PageRefresh
UBTJavaScriptUtilsController.default.jSUtils_PageRefresh$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:fxYj+ODJbkCiwI8eyDNULw", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("FRD_HandleEvent_Logout.FRD_HandleEvent_Logout", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:q9AmmNPN6EaFPt9Hk9ft3w", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:NpefU5GgPkmGM9IR0apbKw", callContext.id);
// Raise Error: NotRegistered
throw new OS.Exceptions.Exceptions.NotRegisteredException("NotRegistered", "Something2");
});
}

throw ex;
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:NSH1ZgQ7Rk+k1xW0QF7T1Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:NSH1ZgQ7Rk+k1xW0QF7T1Q", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FRD_HandleEvent_Logout$vars", [{
name: "FirebaseEvent",
attrName: "firebaseEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FirebaseModel.FirebaseEventRec();
},
complexType: FirebaseModel.FirebaseEventRec
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FRD_HandleEvent_Logout$parseAdvancedJSONJSResult", [{
name: "Out1",
attrName: "out1Out",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.fRD_HandleEvent_Logout$Action = function (firebaseEventIn) {
firebaseEventIn = (firebaseEventIn === undefined) ? new FirebaseModel.FirebaseEventRec() : firebaseEventIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.fRD_HandleEvent_Logout$Action.bind(controller, firebaseEventIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$FRD_HandleEvent_Logout.ParseAdvancedJSONJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
try {
    $parameters.Out1 = JSON.stringify(JSON.parse(JSON.parse($parameters.In1)));
} catch (exception) {
    console.log("Error parsing JSON at Firebase Receiver");
}

};
});

define("UBT_AppManager.controller$FRD_Initialize", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "Firebase.controller", "UBT_AppManager_CS.model", "UBT_AppManager.controller$FRD_Initialize.GetFRD_CallbackJS", "UBT_AppManager.clientVariables", "Firebase.controller$InitFirebaseListener", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$Firebase", "UBT_AppManager.controller$FRD_IsInitialized", "UBT_AppManager.controller$FRD_HandleEvent", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, FirebaseController, UBT_AppManager_CSModel, UBT_AppManager_controller_FRD_Initialize_GetFRD_CallbackJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.fRD_Initialize$Action = function (appManager_ClientConfigIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FRD_Initialize$vars"))());
vars.value.appManager_ClientConfigInLocal = appManager_ClientConfigIn.clone();
var fRD_IsInitializedVar = new OS.DataTypes.VariableHolder();
var getFRD_CallbackJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.fRD_IsInitializedVar = fRD_IsInitializedVar;
varBag.getFRD_CallbackJSResult = getFRD_CallbackJSResult;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:6Poh7twXcEK1L2U48G7C+A:/ClientActionFlows.6Poh7twXcEK1L2U48G7C+A:ow2kNwS13DoxKnBqERJghA", "UBT_AppManager", "FRD_Initialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WDdk7wVGV0WEpKIGzGX2Ew", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// UserIsLogged
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:tYKxjStu00arsqY17mqFzA", callContext.id) && ((UBT_AppManagerClientVariables.getAppManager_UserExternalId()) !== ("")))) {
// Use Firebase Realtime Database
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9w_JfInqDU2V7zYwV92spg", callContext.id) && vars.value.appManager_ClientConfigInLocal.appManager_ClientCacheAttr.firebase_RealTimeDatabase_UseAttr)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WQnKypuO9EaHpAarzvRRKA", callContext.id);
// Firebase_RealtimeDatabase_StartedOn = AppManager_ClientConfig.CurrentUTCTime
UBT_AppManagerClientVariables.setFirebase_RealtimeDatabase_StartedOn(vars.value.appManager_ClientConfigInLocal.currentUTCTimeAttr);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KEf++JADRUefCMrjMQiY9A", callContext.id);
// Execute Action: FRD_IsInitialized
fRD_IsInitializedVar.value = UBT_AppManagerController.default.fRD_IsInitialized$Action(vars.value.appManager_ClientConfigInLocal.appManager_ClientCacheAttr.firebase_ProjectIdAttr, callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ksabQB7La0evaw07o0Z_CQ", callContext.id) && !(fRD_IsInitializedVar.value.isInitializedOut))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:u9rCLHzdokiZhOmZt1vxDw", callContext.id);
getFRD_CallbackJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_FRD_Initialize_GetFRD_CallbackJS, "GetFRD_Callback", "FRD_Initialize", {
Function: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.FRD_Initialize$getFRD_CallbackJSResult"))();
jsNodeResult.functionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Function, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
FRD_HandleEvent: UBT_AppManagerController.default.getClientActionProxies(controller).fRD_HandleEvent$Action
}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:T9D9BFbYqkWZy5L91ZQ9JA", callContext.id);
// Execute Action: InitFirebaseListener
return FirebaseController.default.initFirebaseListener$Action(OS.BuiltinFunctions.getEntryEspaceName(), UBT_AppManagerClientVariables.getAppManager_UserExternalId(), UBT_AppManagerClientVariables.getFirebase_RealtimeDatabase_Token(), vars.value.appManager_ClientConfigInLocal.appManager_ClientCacheAttr.firebase_ProjectIdAttr, vars.value.appManager_ClientConfigInLocal.firebase_RealTimeDatabase_APIKeyAttr, vars.value.appManager_ClientConfigInLocal.firebase_RealTimeDatabase_URLAttr, getFRD_CallbackJSResult.value.functionOut, callContext);
}

});
}

});
}

}).then(function () {
// Dummy
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:4YmgfzNJxEO7053BqOI_9g", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TV85mAMgVkWA4iPUDUSdjA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:6Poh7twXcEK1L2U48G7C+A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:6Poh7twXcEK1L2U48G7C+A", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FRD_Initialize$vars", [{
name: "AppManager_ClientConfig",
attrName: "appManager_ClientConfigInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_ConfigClientRec();
},
complexType: UBT_AppManager_CSModel.AppManager_ConfigClientRec
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FRD_Initialize$getFRD_CallbackJSResult", [{
name: "Function",
attrName: "functionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.fRD_Initialize$Action = function (appManager_ClientConfigIn) {
appManager_ClientConfigIn = (appManager_ClientConfigIn === undefined) ? new UBT_AppManager_CSModel.AppManager_ConfigClientRec() : appManager_ClientConfigIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.fRD_Initialize$Action.bind(controller, appManager_ClientConfigIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$FRD_Initialize.GetFRD_CallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Function = $actions.FRD_HandleEvent;
};
});

define("UBT_AppManager.controller$FRD_IsInitialized", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$FRD_IsInitialized.JavaScript1JS", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_FRD_IsInitialized_JavaScript1JS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.fRD_IsInitialized$Action = function (projectIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FRD_IsInitialized$vars"))());
vars.value.projectIdInLocal = projectIdIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FRD_IsInitialized$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:TGvotuoa2ka3daEdbMbBOg:/ClientActionFlows.TGvotuoa2ka3daEdbMbBOg:O8MMM6rxYSb98hCDzAibkA", "UBT_AppManager", "FRD_IsInitialized", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:d5r6F40eikSx9AQnaFrWvg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:4yKQOAIHZkSQZMcnQDAX5w", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_FRD_IsInitialized_JavaScript1JS, "JavaScript1", "FRD_IsInitialized", {
ProjectId: OS.DataConversion.JSNodeParamConverter.to(vars.value.projectIdInLocal, OS.DataTypes.DataTypes.Text),
isInitialized: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.FRD_IsInitialized$javaScript1JSResult"))();
jsNodeResult.isInitializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isInitialized, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:yKSvP62aTkukFvmc6tU6Ig", callContext.id);
// isInitialized = JavaScript1.isInitialized
outVars.value.isInitializedOut = javaScript1JSResult.value.isInitializedOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:UOnHnVYjF0qnbQz_0RFJFQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:TGvotuoa2ka3daEdbMbBOg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FRD_IsInitialized$vars", [{
name: "ProjectId",
attrName: "projectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FRD_IsInitialized$javaScript1JSResult", [{
name: "isInitialized",
attrName: "isInitializedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FRD_IsInitialized$outVars", [{
name: "isInitialized",
attrName: "isInitializedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.fRD_IsInitialized$Action = function (projectIdIn) {
projectIdIn = (projectIdIn === undefined) ? "" : projectIdIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.fRD_IsInitialized$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(projectIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
isInitialized: OS.DataConversion.JSNodeParamConverter.to(actionResults.isInitializedOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBT_AppManager.controller$FRD_IsInitialized.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(window.myFirebase && window.myFirebase[$parameters.ProjectId]) {
    $parameters.isInitialized = true;
}
};
});

define("UBT_AppManager.controller$FRD_UserCallback_Get", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.fRD_UserCallback_Get$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var appManager_JSUtils_ElementCache_GetObjPropertyVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FRD_UserCallback_Get$outVars"))());
varBag.callContext = callContext;
varBag.appManager_JSUtils_ElementCache_GetObjPropertyVar = appManager_JSUtils_ElementCache_GetObjPropertyVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:Sp6uNmXHmECr2R8FSGgGTg:/ClientActionFlows.Sp6uNmXHmECr2R8FSGgGTg:ljnpu1TpGjDZegj67BdYbg", "UBT_AppManager", "FRD_UserCallback_Get", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:70kJv0uTAEOoyan74K9Wvg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:SbtVtDddZkWhh13MwnsKQw", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_GetObjProperty
appManager_JSUtils_ElementCache_GetObjPropertyVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_FirebaseUserCallback, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WnoRkxa4bUmK7YSW9g+k5Q", callContext.id);
// Object = AppManager_JSUtils_ElementCache_GetObjProperty.Value
outVars.value.objectOut = appManager_JSUtils_ElementCache_GetObjPropertyVar.value.valueOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:4fiAJnXLmU2bID0oTpY0Uw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Sp6uNmXHmECr2R8FSGgGTg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FRD_UserCallback_Get$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.fRD_UserCallback_Get$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.fRD_UserCallback_Get$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});

define("UBT_AppManager.controller$FRD_UserCallback_Set", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.fRD_UserCallback_Set$Action = function (objectIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.FRD_UserCallback_Set$vars"))());
vars.value.objectInLocal = objectIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:e_7ag464uU6pS8DgTyBw+A:/ClientActionFlows.e_7ag464uU6pS8DgTyBw+A:hIlqxwmyJizb7eAwhHThqA", "UBT_AppManager", "FRD_UserCallback_Set", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:6T706eJisUiIxshkcr+sFA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:au6JvwnQC0SO_RLvdyCXQQ", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetObjProperty
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_FirebaseUserCallback, vars.value.objectInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+WBsAMt56kuybgD5mISdZg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:e_7ag464uU6pS8DgTyBw+A", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.FRD_UserCallback_Set$vars", [{
name: "Object",
attrName: "objectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.fRD_UserCallback_Set$Action = function (objectIn) {
objectIn = (objectIn === undefined) ? null : objectIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.fRD_UserCallback_Set$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(objectIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$InAppBrowser_BeforeLoadCallback", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$InAppBrowser_BeforeLoadCallback.GetEventURLJS", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_GetCallbackURL", "UBT_AppManager.controller$InAppBrowser_LoadAfterBeforeLoad", "UBT_AppManager.controller$InAppBrowser_Hide", "UBT_AppManager.controller$AppManager_HandleCallback"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_InAppBrowser_BeforeLoadCallback_GetEventURLJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.inAppBrowser_BeforeLoadCallback$Action = function (eventAndBrowserIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_BeforeLoadCallback$vars"))());
vars.value.eventAndBrowserInLocal = eventAndBrowserIn;
var appManager_GetCallbackURLVar = new OS.DataTypes.VariableHolder();
var getEventURLJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_GetCallbackURLVar = appManager_GetCallbackURLVar;
varBag.getEventURLJSResult = getEventURLJSResult;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:NpDzC3_EBESBD+ZDK57Nkw:/ClientActionFlows.NpDzC3_EBESBD+ZDK57Nkw:LaJffRPLdQ81V6KILo9_qA", "UBT_AppManager", "InAppBrowser_BeforeLoadCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nAiAkrEyrEq0SBC6Vq1nmA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2TGS8ku41k6ZmSyr2sfBrQ", callContext.id);
getEventURLJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_InAppBrowser_BeforeLoadCallback_GetEventURLJS, "GetEventURL", "InAppBrowser_BeforeLoadCallback", {
EventAndBrowser: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventAndBrowserInLocal, OS.DataTypes.DataTypes.Object),
URL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_BeforeLoadCallback$getEventURLJSResult"))();
jsNodeResult.uRLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URL, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ccHTXAfNOEyVl71Rw_CeOA", callContext.id);
// Execute Action: AppManager_GetCallbackURL
appManager_GetCallbackURLVar.value = UBT_AppManagerController.default.appManager_GetCallbackURL$Action(callContext);

// Is App Callback
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:qZEeiTkOf0uXGuy8HzmUbQ", callContext.id) && (OS.BuiltinFunctions.index(getEventURLJSResult.value.uRLOut, appManager_GetCallbackURLVar.value.redirectURIOut, 0, false, false) > -1))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RBIAhygzJkunaFIsNuoYsw", callContext.id);
// Execute Action: InAppBrowser_Hide
UBT_AppManagerController.default.inAppBrowser_Hide$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9UbIsirW0ku3ANsVf_6HTw", callContext.id);
// Execute Action: AppManager_HandleCallback
return UBT_AppManagerController.default.appManager_HandleCallback$Action(getEventURLJSResult.value.uRLOut, "", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:5ecyYwbLY02LxO5paTpWZw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vDGReV1bB0yMti_G1QwVoQ", callContext.id);
// Execute Action: InAppBrowser_LoadAfterBeforeLoad
UBT_AppManagerController.default.inAppBrowser_LoadAfterBeforeLoad$Action(getEventURLJSResult.value.uRLOut, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:5ecyYwbLY02LxO5paTpWZw", callContext.id);
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:NpDzC3_EBESBD+ZDK57Nkw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:NpDzC3_EBESBD+ZDK57Nkw", callContext.id);
throw ex;

});
};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_BeforeLoadCallback$vars", [{
name: "EventAndBrowser",
attrName: "eventAndBrowserInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_BeforeLoadCallback$getEventURLJSResult", [{
name: "URL",
attrName: "uRLOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.inAppBrowser_BeforeLoadCallback$Action = function (eventAndBrowserIn) {
eventAndBrowserIn = (eventAndBrowserIn === undefined) ? null : eventAndBrowserIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.inAppBrowser_BeforeLoadCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventAndBrowserIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$InAppBrowser_BeforeLoadCallback.GetEventURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.URL = $parameters.EventAndBrowser.event.url;

};
});

define("UBT_AppManager.controller$InAppBrowser_CanLaunchInApp", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$InAppBrowser_CanLaunchInApp.CheckInAppBrowserAvailabilityJS", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_InAppBrowser_CanLaunchInApp_CheckInAppBrowserAvailabilityJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.inAppBrowser_CanLaunchInApp$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkInAppBrowserAvailabilityJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_CanLaunchInApp$outVars"))());
varBag.callContext = callContext;
varBag.checkInAppBrowserAvailabilityJSResult = checkInAppBrowserAvailabilityJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:AWcY4X5BL0qO6h+y2pSd1A:/ClientActionFlows.AWcY4X5BL0qO6h+y2pSd1A:z2_I+LA3HXu2EElJ_3xFTQ", "UBT_AppManager", "InAppBrowser_CanLaunchInApp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:FGbVDOsD80ue1z7nfglPaQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:qdV25KtpkE6+ftQpp6joXw", callContext.id);
checkInAppBrowserAvailabilityJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_InAppBrowser_CanLaunchInApp_CheckInAppBrowserAvailabilityJS, "CheckInAppBrowserAvailability", "InAppBrowser_CanLaunchInApp", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_CanLaunchInApp$checkInAppBrowserAvailabilityJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:pPoCavuTo0agR+AJR6gylw", callContext.id);
// CanLaunch = CheckInAppBrowserAvailability.IsAvailable
outVars.value.canLaunchOut = checkInAppBrowserAvailabilityJSResult.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KVYdXXHqDEq+DUx_TJnUew", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:AWcY4X5BL0qO6h+y2pSd1A", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_CanLaunchInApp$checkInAppBrowserAvailabilityJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_CanLaunchInApp$outVars", [{
name: "CanLaunch",
attrName: "canLaunchOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.inAppBrowser_CanLaunchInApp$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.inAppBrowser_CanLaunchInApp$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CanLaunch: OS.DataConversion.JSNodeParamConverter.to(actionResults.canLaunchOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBT_AppManager.controller$InAppBrowser_CanLaunchInApp.CheckInAppBrowserAvailabilityJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsAvailable = window.cordova && window.cordova.InAppBrowser? true : false;
};
});

define("UBT_AppManager.controller$InAppBrowser_Close", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$InAppBrowser_Close.CloseInAppBrowserJS", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$InAppBrowser_ThrowCloseEvent"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_InAppBrowser_Close_CloseInAppBrowserJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.inAppBrowser_Close$Action = function (throwCloseEventIn, hasFoundNetworkErrorIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_Close$vars"))());
vars.value.throwCloseEventInLocal = throwCloseEventIn;
vars.value.hasFoundNetworkErrorInLocal = hasFoundNetworkErrorIn;
var closeInAppBrowserJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.closeInAppBrowserJSResult = closeInAppBrowserJSResult;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:PGbRBEHbiU+zdegeHVlwSw:/ClientActionFlows.PGbRBEHbiU+zdegeHVlwSw:6RSZQH5gfMJRyc6IHuEADQ", "UBT_AppManager", "InAppBrowser_Close", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:MnpJZniwzEmYGmdjP8zcYA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:21wUS6aPtEG3rNp9KFL1JA", callContext.id);
closeInAppBrowserJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_InAppBrowser_Close_CloseInAppBrowserJS, "CloseInAppBrowser", "InAppBrowser_Close", {
WasClosed: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_Close$closeInAppBrowserJSResult"))();
jsNodeResult.wasClosedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WasClosed, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WcImnisNJ0SdnCcV27xlrQ", callContext.id) && (vars.value.throwCloseEventInLocal && closeInAppBrowserJSResult.value.wasClosedOut))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ghA_YYRJdke_oYlDWAa+tg", callContext.id);
// Execute Action: InAppBrowser_ThrowCloseEvent
UBT_AppManagerController.default.inAppBrowser_ThrowCloseEvent$Action(vars.value.hasFoundNetworkErrorInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:EfSL5ymABUutQVgzxMkllg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:EfSL5ymABUutQVgzxMkllg", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:PGbRBEHbiU+zdegeHVlwSw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_Close$vars", [{
name: "ThrowCloseEvent",
attrName: "throwCloseEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "HasFoundNetworkError",
attrName: "hasFoundNetworkErrorInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_Close$closeInAppBrowserJSResult", [{
name: "WasClosed",
attrName: "wasClosedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.inAppBrowser_Close$Action = function (throwCloseEventIn, hasFoundNetworkErrorIn) {
throwCloseEventIn = (throwCloseEventIn === undefined) ? false : throwCloseEventIn;
hasFoundNetworkErrorIn = (hasFoundNetworkErrorIn === undefined) ? false : hasFoundNetworkErrorIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.inAppBrowser_Close$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(throwCloseEventIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(hasFoundNetworkErrorIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$InAppBrowser_Close.CloseInAppBrowserJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(window.InAppBroswer) {
    window.InAppBroswer.close();
    window.InAppBroswer = null;
    $parameters.WasClosed = true;
}  
};
});

define("UBT_AppManager.controller$InAppBrowser_Hide", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$InAppBrowser_Hide.CloseInAppBrowserJS", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_InAppBrowser_Hide_CloseInAppBrowserJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.inAppBrowser_Hide$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var closeInAppBrowserJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.closeInAppBrowserJSResult = closeInAppBrowserJSResult;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:RDo8GaKyOka2vc98WtIZVg:/ClientActionFlows.RDo8GaKyOka2vc98WtIZVg:V2iToBWC_nI5BDnUoYQCRQ", "UBT_AppManager", "InAppBrowser_Hide", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:aEVOBSeqMUS867eB+CXL1w", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PnP04ZJkc0G8eOQ_7rwhlg", callContext.id);
closeInAppBrowserJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_InAppBrowser_Hide_CloseInAppBrowserJS, "CloseInAppBrowser", "InAppBrowser_Hide", {
WasClosed: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_Hide$closeInAppBrowserJSResult"))();
jsNodeResult.wasClosedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WasClosed, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:LLh+qP54Z0O_fGXxoV47ng", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:RDo8GaKyOka2vc98WtIZVg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_Hide$closeInAppBrowserJSResult", [{
name: "WasClosed",
attrName: "wasClosedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.inAppBrowser_Hide$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.inAppBrowser_Hide$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$InAppBrowser_Hide.CloseInAppBrowserJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(window.InAppBroswer) {
    window.InAppBroswer.hide();
}  
};
});

define("UBT_AppManager.controller$InAppBrowser_LaunchLoginFlow", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$InAppBrowser_LaunchLoginFlow.OpenInAppBrowserAndWaitJS", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$InAppBrowser_Redirect", "UBT_AppManager.controller$InAppBrowser_BeforeLoadCallback", "UBT_AppManager.controller$InAppBrowser_Close", "UBT_AppManager.controller$InAppBrowser_LoadStopCallback", "UBT_AppManager.controller$InAppBrowser_MessageCallback"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_InAppBrowser_LaunchLoginFlow_OpenInAppBrowserAndWaitJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.inAppBrowser_LaunchLoginFlow$Action = function (uRLToOpenIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_LaunchLoginFlow$vars"))());
vars.value.uRLToOpenInLocal = uRLToOpenIn;
var openInAppBrowserAndWaitJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.openInAppBrowserAndWaitJSResult = openInAppBrowserAndWaitJSResult;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:EGuv3CGDuEOiGMQS_AAjPA:/ClientActionFlows.EGuv3CGDuEOiGMQS_AAjPA:FgBeqNdgSAFskgOsRjqQuw", "UBT_AppManager", "InAppBrowser_LaunchLoginFlow", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:gWgAy+oSj0GRi6SS3_dngA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:_+rZB1Fe6kKZod0gQUeyLg", callContext.id);
openInAppBrowserAndWaitJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_InAppBrowser_LaunchLoginFlow_OpenInAppBrowserAndWaitJS, "OpenInAppBrowserAndWait", "InAppBrowser_LaunchLoginFlow", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLToOpenInLocal, OS.DataTypes.DataTypes.Text),
ResponseURL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
HasClosed: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
HasFoundNetworkError: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_LaunchLoginFlow$openInAppBrowserAndWaitJSResult"))();
jsNodeResult.responseURLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseURL, OS.DataTypes.DataTypes.Text);
jsNodeResult.hasClosedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasClosed, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.hasFoundNetworkErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasFoundNetworkError, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {
InAppBrowser_Redirect: UBT_AppManagerController.default.getClientActionProxies(controller).inAppBrowser_Redirect$Action,
InAppBrowser_BeforeLoadCallback: UBT_AppManagerController.default.getClientActionProxies(controller).inAppBrowser_BeforeLoadCallback$Action,
InAppBrowser_Close: UBT_AppManagerController.default.getClientActionProxies(controller).inAppBrowser_Close$Action,
InAppBrowser_LoadStopCallback: UBT_AppManagerController.default.getClientActionProxies(controller).inAppBrowser_LoadStopCallback$Action,
InAppBrowser_MessageCallback: UBT_AppManagerController.default.getClientActionProxies(controller).inAppBrowser_MessageCallback$Action
}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:8mBu08f+4EqJCx61bcfOPw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:EGuv3CGDuEOiGMQS_AAjPA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_LaunchLoginFlow$vars", [{
name: "URLToOpen",
attrName: "uRLToOpenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_LaunchLoginFlow$openInAppBrowserAndWaitJSResult", [{
name: "ResponseURL",
attrName: "responseURLOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "HasClosed",
attrName: "hasClosedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "HasFoundNetworkError",
attrName: "hasFoundNetworkErrorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.inAppBrowser_LaunchLoginFlow$Action = function (uRLToOpenIn) {
uRLToOpenIn = (uRLToOpenIn === undefined) ? "" : uRLToOpenIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.inAppBrowser_LaunchLoginFlow$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLToOpenIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$InAppBrowser_LaunchLoginFlow.OpenInAppBrowserAndWaitJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(window.InAppBroswer) {
    //In case the browser is already being used, we just redirect the user inside the InAppBrowser
    window.InAppBroswer.show();
    $actions.InAppBrowser_Redirect($parameters.URL);
} else {
    // Open browser and show it after 200ms, to avoid any flickering when there is a network error
    window.InAppBroswer = window.cordova.InAppBrowser.open($parameters.URL, "_blank", "location=no,zoom=no,fullscreen=no,clearcache=yes,clearsessioncache=yes,hidden=yes,beforeload=yes");
    window.setTimeout(function() { window.InAppBroswer.show(); }, 200);
    
    var browser =  window.InAppBroswer;

    browser.addEventListener("beforeload", function(evt) {
        $parameters.ResponseURL = evt.url;
        $actions.InAppBrowser_BeforeLoadCallback({event: evt, browser: browser}); 
        //$resolve();
    });

    browser.addEventListener("loaderror", function(evt) {
        $actions.InAppBrowser_Close(true, true);
        $parameters.HasFoundNetworkError = true;
        //$resolve();
    });

    browser.addEventListener("exit", function(evt) {
        $parameters.HasClosed = true; 
        $actions.InAppBrowser_Close(true); 
        //$resolve();
    });

    browser.addEventListener("loadstop", function(evt) {
        $actions.InAppBrowser_LoadStopCallback({event: evt, browser: browser}); 
    });

    browser.addEventListener('message', function(evt) {
        $actions.InAppBrowser_MessageCallback({event: evt, browser: browser});
    });
}


};
});

define("UBT_AppManager.controller$InAppBrowser_LoadAfterBeforeLoad", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$InAppBrowser_LoadAfterBeforeLoad.AllowLoadAfterBeforeLoadJS", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_InAppBrowser_LoadAfterBeforeLoad_AllowLoadAfterBeforeLoadJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.inAppBrowser_LoadAfterBeforeLoad$Action = function (destinationURLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_LoadAfterBeforeLoad$vars"))());
vars.value.destinationURLInLocal = destinationURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:TbvAliR0Sk6DiQVRG3sdQw:/ClientActionFlows.TbvAliR0Sk6DiQVRG3sdQw:sNaz48Vv5aaxknU4nbM8rw", "UBT_AppManager", "InAppBrowser_LoadAfterBeforeLoad", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:A3BU8SOcnEWGjoZI+5HvrQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DLfdLpxVXkS8n8SoCV63Fw", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_controller_InAppBrowser_LoadAfterBeforeLoad_AllowLoadAfterBeforeLoadJS, "AllowLoadAfterBeforeLoad", "InAppBrowser_LoadAfterBeforeLoad", {
DestinationURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.destinationURLInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7+BoyxBq4UauAobNo2CGHw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:TbvAliR0Sk6DiQVRG3sdQw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_LoadAfterBeforeLoad$vars", [{
name: "DestinationURL",
attrName: "destinationURLInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.inAppBrowser_LoadAfterBeforeLoad$Action = function (destinationURLIn) {
destinationURLIn = (destinationURLIn === undefined) ? "" : destinationURLIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.inAppBrowser_LoadAfterBeforeLoad$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(destinationURLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$InAppBrowser_LoadAfterBeforeLoad.AllowLoadAfterBeforeLoadJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(window.InAppBroswer) {
    window.InAppBroswer._loadAfterBeforeload($parameters.DestinationURL)
}
};
});

define("UBT_AppManager.controller$InAppBrowser_LoadStopCallback", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$InAppBrowser_LoadStopCallback.HandleTargetBlankLinksJS", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_InAppBrowser_LoadStopCallback_HandleTargetBlankLinksJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.inAppBrowser_LoadStopCallback$Action = function (eventAndBrowserIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_LoadStopCallback$vars"))());
vars.value.eventAndBrowserInLocal = eventAndBrowserIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:CxogkkZ3WE6IOm0jFuT+oQ:/ClientActionFlows.CxogkkZ3WE6IOm0jFuT+oQ:2L6VdEdcXk3gI+PU3L3qKQ", "UBT_AppManager", "InAppBrowser_LoadStopCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ctkttpqak06X6IVPOuB6ew", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ukh2LHN3EkuNHSMBM82x2w", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_controller_InAppBrowser_LoadStopCallback_HandleTargetBlankLinksJS, "HandleTargetBlankLinks", "InAppBrowser_LoadStopCallback", {
EventAndBrowser: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventAndBrowserInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nILK8PDrfkOV5mFk5bKJxg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:CxogkkZ3WE6IOm0jFuT+oQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_LoadStopCallback$vars", [{
name: "EventAndBrowser",
attrName: "eventAndBrowserInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.inAppBrowser_LoadStopCallback$Action = function (eventAndBrowserIn) {
eventAndBrowserIn = (eventAndBrowserIn === undefined) ? null : eventAndBrowserIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.inAppBrowser_LoadStopCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventAndBrowserIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$InAppBrowser_LoadStopCallback.HandleTargetBlankLinksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.EventAndBrowser.browser.executeScript({code: "window.setInterval(function() { document.querySelectorAll(\"a[href][target='_blank']\").forEach(a => { a.target=''; a.addEventListener('click', function(evt) { window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({ type: 'open-new-tab', href: evt.target.href })); evt.preventDefault(); }); }); }, 100);"});
};
});

define("UBT_AppManager.controller$InAppBrowser_MessageCallback", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$InAppBrowser_MessageCallback.MaybeOpenNewTabJS", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_InAppBrowser_MessageCallback_MaybeOpenNewTabJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.inAppBrowser_MessageCallback$Action = function (eventAndBrowserIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_MessageCallback$vars"))());
vars.value.eventAndBrowserInLocal = eventAndBrowserIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:CM5TrBq3MUiOZ7MMPHPbnQ:/ClientActionFlows.CM5TrBq3MUiOZ7MMPHPbnQ:1CSaAWbYMoCbFNdCfi+efg", "UBT_AppManager", "InAppBrowser_MessageCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:yFL8kVuoYUeOnRGJjJhpEw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:8zRJ48ofVUqG+FtusJhttw", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_controller_InAppBrowser_MessageCallback_MaybeOpenNewTabJS, "MaybeOpenNewTab", "InAppBrowser_MessageCallback", {
EventAndBrowser: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventAndBrowserInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:0IQMfkJF80us4_X0gWxyCw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:CM5TrBq3MUiOZ7MMPHPbnQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_MessageCallback$vars", [{
name: "EventAndBrowser",
attrName: "eventAndBrowserInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.inAppBrowser_MessageCallback$Action = function (eventAndBrowserIn) {
eventAndBrowserIn = (eventAndBrowserIn === undefined) ? null : eventAndBrowserIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.inAppBrowser_MessageCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventAndBrowserIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$InAppBrowser_MessageCallback.MaybeOpenNewTabJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var evt = $parameters.EventAndBrowser.event;
var browser = $parameters.EventAndBrowser.browser;
if (evt.data.type == "open-new-tab") {
        var newBrowser = cordova.InAppBrowser.open(evt.data.href, "_system");
        //Assign handlers to new browser reference
        for(var channel in browser.channels) {
            if (browser.channels[channel].numHandlers > 0) {
                for(var handler in browser.channels[channel].handlers) {
                    newBrowser.addEventListener(channel,browser.channels[channel].handlers[handler]);
                }
            }
        }
}
};
});

define("UBT_AppManager.controller$InAppBrowser_Redirect", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$InAppBrowser_Redirect.RedirectInAppBrowserJS", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_InAppBrowser_Redirect_RedirectInAppBrowserJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.inAppBrowser_Redirect$Action = function (destinationURLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_Redirect$vars"))());
vars.value.destinationURLInLocal = destinationURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:n1gy0wC8CkKLRj7abIZdoQ:/ClientActionFlows.n1gy0wC8CkKLRj7abIZdoQ:sIJzKklfab4scBKnmZiCAQ", "UBT_AppManager", "InAppBrowser_Redirect", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:H4L5kAO1ZUmZgLPT20WlIw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+khuHTbGMESTWPI86PaNPw", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_controller_InAppBrowser_Redirect_RedirectInAppBrowserJS, "RedirectInAppBrowser", "InAppBrowser_Redirect", {
DestinationURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.destinationURLInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:0s4ZDL+XaEWRA0NZWoUpTw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:n1gy0wC8CkKLRj7abIZdoQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_Redirect$vars", [{
name: "DestinationURL",
attrName: "destinationURLInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.inAppBrowser_Redirect$Action = function (destinationURLIn) {
destinationURLIn = (destinationURLIn === undefined) ? "" : destinationURLIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.inAppBrowser_Redirect$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(destinationURLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$InAppBrowser_Redirect.RedirectInAppBrowserJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(window.InAppBroswer) {

    function inAppcallbackForCurrentURL (results) {
        var currentURL = results[0]; 
        if(currentURL != $parameters.DestinationURL) {
            window.InAppBroswer.executeScript({code: "window.location.href = '"+$parameters.DestinationURL+"'"});
        }
    }

    window.InAppBroswer.executeScript({code: "window.location.href"}, inAppcallbackForCurrentURL);

   
}
};
});

define("UBT_AppManager.controller$InAppBrowser_ThrowCloseEvent", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.model$AppManager_CallbackRec", "UBT_AppManager.controller$AppManager_OnCallback"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.inAppBrowser_ThrowCloseEvent$Action = function (hasFoundNetworkErrorIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.InAppBrowser_ThrowCloseEvent$vars"))());
vars.value.hasFoundNetworkErrorInLocal = hasFoundNetworkErrorIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:_vz8Io81zU+xcU0bf_bWZQ:/ClientActionFlows._vz8Io81zU+xcU0bf_bWZQ:+Ge0DJmz0FnOdaqLIlbJeA", "UBT_AppManager", "InAppBrowser_ThrowCloseEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9evxFMgwY02vu8jl6gCyXQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WZsOXcSSpkufuKSO1d_5Dg", callContext.id) && vars.value.hasFoundNetworkErrorInLocal)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:gJOd0CdVGkW54UTrZWMSNg", callContext.id);
// Execute Action: AppManager_IdP_OnOffline
UBT_AppManagerController.default.appManager_OnCallback$Action(function () {
var rec = new UBT_AppManagerModel.AppManager_CallbackRec();
rec.isSucessAttr = false;
rec.messageAttr = "No internet connection. Please check your network settings and try again.";
rec.callbackTypeAttr = UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnOffline;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:3w59nGgST0Wqy0mULS6fuA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:F39xf6_+H02gR8wsYPgEwQ", callContext.id);
// Execute Action: AppManager_IdP_OnClose
UBT_AppManagerController.default.appManager_OnCallback$Action(function () {
var rec = new UBT_AppManagerModel.AppManager_CallbackRec();
rec.isSucessAttr = true;
rec.callbackTypeAttr = UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnClose;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:3w59nGgST0Wqy0mULS6fuA", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:_vz8Io81zU+xcU0bf_bWZQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.InAppBrowser_ThrowCloseEvent$vars", [{
name: "HasFoundNetworkError",
attrName: "hasFoundNetworkErrorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AppManager_Callback",
attrName: "appManager_CallbackVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.AppManager_CallbackRec();
},
complexType: UBT_AppManagerModel.AppManager_CallbackRec
}]);
UBT_AppManagerController.default.clientActionProxies.inAppBrowser_ThrowCloseEvent$Action = function (hasFoundNetworkErrorIn) {
hasFoundNetworkErrorIn = (hasFoundNetworkErrorIn === undefined) ? false : hasFoundNetworkErrorIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.inAppBrowser_ThrowCloseEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hasFoundNetworkErrorIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$Licenses_Check", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.controller$Licenses_Check.JavaScript1JS", "UBT_AppManager.clientVariables", "UBT_AppManager_CS.model$LicenseListRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManager_controller_Licenses_Check_JavaScript1JS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.licenses_Check$Action = function (licenseNameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.Licenses_Check$vars"))());
vars.value.licenseNameInLocal = licenseNameIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var textList2Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializePermissionListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManager_CSModel.LicenseListRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.Licenses_Check$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.textList2Var = textList2Var;
varBag.jSONDeserializePermissionListVar = jSONDeserializePermissionListVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:Xlyq74VSvkuczOxae26Emw:/ClientActionFlows.Xlyq74VSvkuczOxae26Emw:dal9njVp34TYPcnDRpQFVw", "UBT_AppManager", "Licenses_Check", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:FCuyZmX61UKC7Nueva5DXQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2hmkK2za7UeljfUAyeGYYQ", callContext.id);
// JSON Deserialize: JSONDeserializePermissionList
jSONDeserializePermissionListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(UBT_AppManagerClientVariables.getLicenses_List(), UBT_AppManager_CSModel.LicenseListRec, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:pufrEVWSukOF8bGhDyD3QA", callContext.id);
// TextList = JSONDeserializePermissionList.Data.List
vars.value.textListVar = jSONDeserializePermissionListVar.value.dataOut.listAttr;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2woAGn5vX0yanRZQl0iH9A", callContext.id);
// JSON Serialize: TextList2
textList2Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.textListVar, false, false, OS.DataTypes.DataTypes.Text);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:5rXreFWwp0qTMupAyhQQAA", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_Licenses_Check_JavaScript1JS, "JavaScript1", "Licenses_Check", {
PermissionList: OS.DataConversion.JSNodeParamConverter.to(textList2Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
PermissionToCheck: OS.DataConversion.JSNodeParamConverter.to(vars.value.licenseNameInLocal, OS.DataTypes.DataTypes.Text),
hasPermission: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.Licenses_Check$javaScript1JSResult"))();
jsNodeResult.hasPermissionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.hasPermission, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:p2mOE7lY006NcOPvVuz1QA", callContext.id);
// HasPermission = JavaScript1.hasPermission
outVars.value.hasPermissionOut = javaScript1JSResult.value.hasPermissionOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:adfQyRqmmkqZByvWPunWrw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Xlyq74VSvkuczOxae26Emw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.Licenses_Check$vars", [{
name: "LicenseName",
attrName: "licenseNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TextList",
attrName: "textListVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.Licenses_Check$javaScript1JSResult", [{
name: "hasPermission",
attrName: "hasPermissionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.Licenses_Check$outVars", [{
name: "HasPermission",
attrName: "hasPermissionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.licenses_Check$Action = function (licenseNameIn) {
licenseNameIn = (licenseNameIn === undefined) ? "" : licenseNameIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.licenses_Check$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(licenseNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasPermission: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasPermissionOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBT_AppManager.controller$Licenses_Check.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
/**
 * Checks whether a given permission value is matched by any pattern in a list.
 * Wildcards (*) are supported at any level (e.g., "fe.secure.*").
 *
 * @param {string[]} patterns - The list of allowed permissions (e.g., from a token).
 * @param {string} required - The permission being checked.
 * @returns {boolean} - True if matched, false otherwise.
 */
function hasPermissionMatch(patterns, required) {
  const requiredParts = required.split('.');

  var array = JSON.parse(patterns);
  return array.some(pattern => {
    const patternParts = pattern.split('.');

    for (let i = 0; i < patternParts.length; i++) {
      if (i >= requiredParts.length) return false;
      if (patternParts[i] === '*') return true;
      if (patternParts[i] !== requiredParts[i]) return false;
    }

    return patternParts.length === requiredParts.length;
  });
}


$parameters.hasPermission = hasPermissionMatch($parameters.PermissionList,$parameters.PermissionToCheck);
};
});

define("UBT_AppManager.controller$Licenses_Set", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.clientVariables", "UBT_AppManager_CS.model$LicenseListRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.licenses_Set$Action = function (licenseListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.Licenses_Set$vars"))());
vars.value.licenseListInLocal = licenseListIn.clone();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize1Var = jSONSerialize1Var;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:80FXQbIMxk6EN76IKRjvgw:/ClientActionFlows.80FXQbIMxk6EN76IKRjvgw:dodzJKkrrUvXL8Qnoa9D3g", "UBT_AppManager", "Licenses_Set", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9mn5nSbalkGQFYu_RCHViw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:M3Sq_V0NCkmRe77JIYIAiA", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.licenseListInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9GYhTY4dHUyk1USchit+6A", callContext.id);
// Licenses_List = JSONSerialize1.JSON
UBT_AppManagerClientVariables.setLicenses_List(jSONSerialize1Var.value.jSONOut);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WJZOiNptJkuIt3iC3bvmhQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:80FXQbIMxk6EN76IKRjvgw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.Licenses_Set$vars", [{
name: "LicenseList",
attrName: "licenseListInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.LicenseListRec();
},
complexType: UBT_AppManager_CSModel.LicenseListRec
}]);
UBT_AppManagerController.default.clientActionProxies.licenses_Set$Action = function (licenseListIn) {
licenseListIn = (licenseListIn === undefined) ? new UBT_AppManager_CSModel.LicenseListRec() : licenseListIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.licenses_Set$Action.bind(controller, licenseListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$NetworkDetection_Initialize", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "NetworkDetection.controller", "UBT_AppManager.controller$NetworkDetection_Initialize.CallbacksJS", "UBT_AppManager.clientVariables", "NetworkDetection.controller$NetworkDetection_OnApplicationReady", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$NetworkDetection", "UBT_AppManager.controller$NetworkDetection_OnOnline", "UBT_AppManager.controller$NetworkDetection_OnOffiline", "UBT_AppManager.controller$NetworkDetection_OnPendingPing"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, NetworkDetectionController, UBT_AppManager_controller_NetworkDetection_Initialize_CallbacksJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.networkDetection_Initialize$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var callbacksJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.callbacksJSResult = callbacksJSResult;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:0EIoEKHQ8U6S4leMyqnw5Q:/ClientActionFlows.0EIoEKHQ8U6S4leMyqnw5Q:udIGAdLAiwUJ9fMb8A2asw", "UBT_AppManager", "NetworkDetection_Initialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iibvz0UB9k2D0tyJ_SGHkg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PBEOg9_TuUCFuxbU8Ton+g", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_NetworkDetection_Initialize_CallbacksJS, "Callbacks", "NetworkDetection_Initialize", {
OnOnline_Callback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
OnOffline_Callback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
OnPendingPing_Callback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.NetworkDetection_Initialize$callbacksJSResult"))();
jsNodeResult.onOnline_CallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnOnline_Callback, OS.DataTypes.DataTypes.Object);
jsNodeResult.onOffline_CallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnOffline_Callback, OS.DataTypes.DataTypes.Object);
jsNodeResult.onPendingPing_CallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnPendingPing_Callback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
NetworkDetection_OnOnline: UBT_AppManagerController.default.getClientActionProxies(controller).networkDetection_OnOnline$Action,
NetworkDetection_OnOffiline: UBT_AppManagerController.default.getClientActionProxies(controller).networkDetection_OnOffiline$Action,
NetworkDetection_OnPendingPing: UBT_AppManagerController.default.getClientActionProxies(controller).networkDetection_OnPendingPing$Action
}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XRiyqNBb10qFhtB2ONlxAw", callContext.id);
// Execute Action: NetworkDetection_OnApplicationReady
NetworkDetectionController.default.networkDetection_OnApplicationReady$Action(30, 300000, callbacksJSResult.value.onOnline_CallbackOut, callbacksJSResult.value.onOffline_CallbackOut, callbacksJSResult.value.onPendingPing_CallbackOut, false, "No internet connection. Please check your network settings and try again.", "We’re sorry, but an unexpected error occurred while processing your request. Please try again later. If the problem persists, please contact your regional administrator.", callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TK71246DKUetq4kE0xX6qw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:0EIoEKHQ8U6S4leMyqnw5Q", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.NetworkDetection_Initialize$callbacksJSResult", [{
name: "OnOnline_Callback",
attrName: "onOnline_CallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "OnOffline_Callback",
attrName: "onOffline_CallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "OnPendingPing_Callback",
attrName: "onPendingPing_CallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.networkDetection_Initialize$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.networkDetection_Initialize$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$NetworkDetection_Initialize.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.OnOnline_Callback = $actions.NetworkDetection_OnOnline;
$parameters.OnOffline_Callback = $actions.NetworkDetection_OnOffiline;
$parameters.OnPendingPing_Callback = $actions.NetworkDetection_OnPendingPing;
};
});

define("UBT_AppManager.controller$NetworkDetection_OnOffiline", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "ApplicationInsightsConnector.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "ApplicationInsightsConnector.controller$AzureAppInsights_CheckInitialized", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$ApplicationInsightsConnector", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "ApplicationInsightsConnector.controller$OfflineListener_SetOnline", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, ApplicationInsightsConnectorController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.networkDetection_OnOffiline$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var azureAppInsights_CheckInitializedVar = new OS.DataTypes.VariableHolder();
var obj_UserOfflineCallbackVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.azureAppInsights_CheckInitializedVar = azureAppInsights_CheckInitializedVar;
varBag.obj_UserOfflineCallbackVar = obj_UserOfflineCallbackVar;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:mPISYhODW0qKdLcMxmUFoA:/ClientActionFlows.mPISYhODW0qKdLcMxmUFoA:MdGDRVjaV+zAuZ_HQGBoJw", "UBT_AppManager", "NetworkDetection_OnOffiline", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:rI5wXGeww0qJdVC6odsedw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:K9C_0XGmI0ywnbRec7HUNg", callContext.id);
// Execute Action: Obj_UserOfflineCallback
obj_UserOfflineCallbackVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_UserOfflineCallback, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:sRbcKWbMk0GHYoVhlIsQBw", callContext.id);
// Execute Action: JSUtils_RunFunc
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action(obj_UserOfflineCallbackVar.value.valueOut, null, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:FsykEQXFpkG0jjCE+gYuaw", callContext.id);
// Execute Action: AzureAppInsights_CheckInitialized
azureAppInsights_CheckInitializedVar.value = ApplicationInsightsConnectorController.default.azureAppInsights_CheckInitialized$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CWSCeF_DQ06dVT3VDBvRiA", callContext.id) && azureAppInsights_CheckInitializedVar.value.isInitalizedOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:FnAlacHUt0KAnBRHrIrSdw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:UcjxjlX_TkSidZGTckTKfA", callContext.id);
// Execute Action: OfflineListener_SetOnline
ApplicationInsightsConnectorController.default.offlineListener_SetOnline$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:FnAlacHUt0KAnBRHrIrSdw", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:mPISYhODW0qKdLcMxmUFoA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.networkDetection_OnOffiline$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.networkDetection_OnOffiline$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$NetworkDetection_OnOnline", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "ApplicationInsightsConnector.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "ApplicationInsightsConnector.controller$AzureAppInsights_CheckInitialized", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$ApplicationInsightsConnector", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty", "ApplicationInsightsConnector.controller$OfflineListener_SetOnline"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, ApplicationInsightsConnectorController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.networkDetection_OnOnline$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var azureAppInsights_CheckInitializedVar = new OS.DataTypes.VariableHolder();
var obj_UserOnlineCallbackVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.azureAppInsights_CheckInitializedVar = azureAppInsights_CheckInitializedVar;
varBag.obj_UserOnlineCallbackVar = obj_UserOnlineCallbackVar;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:l+QABAnh60WyWdFRVKjzPA:/ClientActionFlows.l+QABAnh60WyWdFRVKjzPA:bT+Ff0Tg0I4Nt63VZeAlYg", "UBT_AppManager", "NetworkDetection_OnOnline", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:igM3smeh2Uq4aRHJrNJi1g", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZjExz7_WIEuFJ3xIwg8BWg", callContext.id);
// Execute Action: Obj_UserOnlineCallback
obj_UserOnlineCallbackVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_UserOnlineCallback, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9ueET2c1fEm35M8G4cinBg", callContext.id);
// Execute Action: JSUtils_RunFunc
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action(obj_UserOnlineCallbackVar.value.valueOut, null, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:STBDFX1g8E+PRGKIcf+0kA", callContext.id);
// Execute Action: AzureAppInsights_CheckInitialized
azureAppInsights_CheckInitializedVar.value = ApplicationInsightsConnectorController.default.azureAppInsights_CheckInitialized$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:pbPeMa6Br0KWORdN6jAsjg", callContext.id) && azureAppInsights_CheckInitializedVar.value.isInitalizedOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:kRdr+myOAUS0sMZshcA3_w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lP3O6ruPHUidpEkLb2o1TQ", callContext.id);
// Execute Action: OfflineListener_SetOnline
ApplicationInsightsConnectorController.default.offlineListener_SetOnline$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:kRdr+myOAUS0sMZshcA3_w", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:l+QABAnh60WyWdFRVKjzPA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.networkDetection_OnOnline$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.networkDetection_OnOnline$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$NetworkDetection_OnPendingPing", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.networkDetection_OnPendingPing$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var obj_UserPendingPingCallbackVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.obj_UserPendingPingCallbackVar = obj_UserPendingPingCallbackVar;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:Dy_HtFgUPkaDD7cvWe9Bmg:/ClientActionFlows.Dy_HtFgUPkaDD7cvWe9Bmg:P0LAnrcVfUEECA4_XoTSrg", "UBT_AppManager", "NetworkDetection_OnPendingPing", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:quYDW+nx70SxeqHbfuj95g", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:j_MFapgII0ybrRuOXClyYQ", callContext.id);
// Execute Action: Obj_UserPendingPingCallback
obj_UserPendingPingCallbackVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_UserPendingPingCallback, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:gxM4XUG7fkCXbGK4Mhc7OQ", callContext.id);
// Execute Action: JSUtils_RunFunc
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action(obj_UserPendingPingCallbackVar.value.valueOut, null, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:GgwUCoGEDEC8lCr9mklRcQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Dy_HtFgUPkaDD7cvWe9Bmg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.networkDetection_OnPendingPing$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.networkDetection_OnPendingPing$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$NetworkDetetion_DefineCallbacks", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.networkDetetion_DefineCallbacks$Action = function (onOnline_CallbackIn, onOffline_CallbackIn, onPendingPing_CallbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.NetworkDetetion_DefineCallbacks$vars"))());
vars.value.onOnline_CallbackInLocal = onOnline_CallbackIn;
vars.value.onOffline_CallbackInLocal = onOffline_CallbackIn;
vars.value.onPendingPing_CallbackInLocal = onPendingPing_CallbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:ERit0Ks9_kun7AVO9VN52Q:/ClientActionFlows.ERit0Ks9_kun7AVO9VN52Q:WF9W9IHanRlqPh_1mmQYNw", "UBT_AppManager", "NetworkDetetion_DefineCallbacks", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:oUwg16n1v0W+MMDfQ0AyTg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XihG9JlDlkqrE_F7SBXiog", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetObjProperty
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_UserOnlineCallback, vars.value.onOnline_CallbackInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Tgsr2VemJ06BoK3G0husng", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetObjProperty2
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_UserOfflineCallback, vars.value.onOffline_CallbackInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Up3bFBAgSE+lFiRe3hOZcQ", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetObjProperty3
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_UserPendingPingCallback, vars.value.onPendingPing_CallbackInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:NMXxYbPbk0mCOLwCzikcFw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:ERit0Ks9_kun7AVO9VN52Q", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.NetworkDetetion_DefineCallbacks$vars", [{
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
}]);
UBT_AppManagerController.default.clientActionProxies.networkDetetion_DefineCallbacks$Action = function (onOnline_CallbackIn, onOffline_CallbackIn, onPendingPing_CallbackIn) {
onOnline_CallbackIn = (onOnline_CallbackIn === undefined) ? null : onOnline_CallbackIn;
onOffline_CallbackIn = (onOffline_CallbackIn === undefined) ? null : onOffline_CallbackIn;
onPendingPing_CallbackIn = (onPendingPing_CallbackIn === undefined) ? null : onPendingPing_CallbackIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.networkDetetion_DefineCallbacks$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(onOnline_CallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(onOffline_CallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(onPendingPing_CallbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$OnApplicationReady", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "NavigationHandler.controller", "NetworkDetection.controller", "UBT_AppManager.clientVariables", "NavigationHandler.controller$OnApplicationReady_NavigationHandler", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$NavigationHandler", "NetworkDetection.controller$NetworkDetection_OnApplicationReady", "UBT_AppManager.referencesHealth$NetworkDetection", "UBT_AppManager.controller$AppManager_OutSystemsFixes"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, NavigationHandlerController, NetworkDetectionController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.onApplicationReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:U+moTowL4Uei+h+0UlGNPQ.#OnApplicationReady:/SystemClientActions.#OnApplicationReady:IFGnULgb10KUFK3244N4GQ", "UBT_AppManager", "OnApplicationReady", "SystemClientActions.OnApplicationReady", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:HpOTVE9UfEGU7Luu79slCQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nqnWMgwlAkGa_H2x3mwCxg", callContext.id);
// Execute Action: OnApplicationReady_NavigationHandler
NavigationHandlerController.default.onApplicationReady_NavigationHandler$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:pz2WmJrK5kWTLThACzG4FA", callContext.id);
// Execute Action: AppManager_OutSystemsFixes
UBT_AppManagerController.default.appManager_OutSystemsFixes$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:VcrqfGsGP06+KTqSWeaRnw", callContext.id);
// Execute Action: NetworkDetection_OnApplicationReady
NetworkDetectionController.default.networkDetection_OnApplicationReady$Action(30, 300000, null, null, null, false, "No internet connection. Please check your network settings and try again.", "We’re sorry, but an unexpected error occurred while processing your request. Please try again later. If the problem persists, please contact your regional administrator.", callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ODMgLLMCwUGfhNv8WTXB4Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:U+moTowL4Uei+h+0UlGNPQ.#OnApplicationReady", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.onApplicationReady$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.onApplicationReady$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$Permissions_Check", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.controller$Permissions_Check.JavaScript1JS", "UBT_AppManager.clientVariables", "UBT_AppManager_CS.model$PermissionListRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManager_controller_Permissions_Check_JavaScript1JS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.permissions_Check$Action = function (permissionNameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.Permissions_Check$vars"))());
vars.value.permissionNameInLocal = permissionNameIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var textList2Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializePermissionListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManager_CSModel.PermissionListRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.Permissions_Check$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.textList2Var = textList2Var;
varBag.jSONDeserializePermissionListVar = jSONDeserializePermissionListVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:j36grrPTDkS+ycZFIPMwZA:/ClientActionFlows.j36grrPTDkS+ycZFIPMwZA:GOLR035oIAtpCxKP8l3fLQ", "UBT_AppManager", "Permissions_Check", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:kX6Pip+l90qwgNhrPFcrBA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:J8h7SG90H0if5XpDpIVN6Q", callContext.id);
// JSON Deserialize: JSONDeserializePermissionList
jSONDeserializePermissionListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(UBT_AppManagerClientVariables.getPermissions_List(), UBT_AppManager_CSModel.PermissionListRec, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DcV622bpYEOewUDqrro6pg", callContext.id);
// TextList = JSONDeserializePermissionList.Data.List
vars.value.textListVar = jSONDeserializePermissionListVar.value.dataOut.listAttr;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PkDwFLn1W0WBUuXKyUOfiQ", callContext.id);
// JSON Serialize: TextList2
textList2Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.textListVar, false, false, OS.DataTypes.DataTypes.Text);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:53T2TRYmnk6Z4YGdwaa5gg", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_Permissions_Check_JavaScript1JS, "JavaScript1", "Permissions_Check", {
PermissionList: OS.DataConversion.JSNodeParamConverter.to(textList2Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
PermissionToCheck: OS.DataConversion.JSNodeParamConverter.to(vars.value.permissionNameInLocal, OS.DataTypes.DataTypes.Text),
hasPermission: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.Permissions_Check$javaScript1JSResult"))();
jsNodeResult.hasPermissionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.hasPermission, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Q0A1d+53ZEmR3UdckJgeXw", callContext.id);
// HasPermission = JavaScript1.hasPermission
outVars.value.hasPermissionOut = javaScript1JSResult.value.hasPermissionOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2I9B76fi00i_LR7IEhQ+1Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:j36grrPTDkS+ycZFIPMwZA", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.Permissions_Check$vars", [{
name: "PermissionName",
attrName: "permissionNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TextList",
attrName: "textListVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.Permissions_Check$javaScript1JSResult", [{
name: "hasPermission",
attrName: "hasPermissionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.Permissions_Check$outVars", [{
name: "HasPermission",
attrName: "hasPermissionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.permissions_Check$Action = function (permissionNameIn) {
permissionNameIn = (permissionNameIn === undefined) ? "" : permissionNameIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.permissions_Check$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(permissionNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasPermission: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasPermissionOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBT_AppManager.controller$Permissions_Check.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
/**
 * Checks whether a given permission value is matched by any pattern in a list.
 * Wildcards (*) are supported at any level (e.g., "fe.secure.*").
 *
 * @param {string[]} patterns - The list of allowed permissions (e.g., from a token).
 * @param {string} required - The permission being checked.
 * @returns {boolean} - True if matched, false otherwise.
 */
function hasPermissionMatch(patterns, required) {
  const requiredParts = required.split('.');

  var array = JSON.parse(patterns);
  return array.some(pattern => {
    const patternParts = pattern.split('.');

    for (let i = 0; i < patternParts.length; i++) {
      if (i >= requiredParts.length) return false;
      if (patternParts[i] === '*') return true;
      if (patternParts[i] !== requiredParts[i]) return false;
    }

    return patternParts.length === requiredParts.length;
  });
}


$parameters.hasPermission = hasPermissionMatch($parameters.PermissionList,$parameters.PermissionToCheck);
};
});

define("UBT_AppManager.controller$Permissions_Set", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager.clientVariables", "UBT_AppManager_CS.model$PermissionListRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.permissions_Set$Action = function (permissionListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.Permissions_Set$vars"))());
vars.value.permissionListInLocal = permissionListIn.clone();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize1Var = jSONSerialize1Var;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:9w+s0cT0_UqexXPyM_jhSg:/ClientActionFlows.9w+s0cT0_UqexXPyM_jhSg:dFhKgBWoDDqzXwsXxA6Vgw", "UBT_AppManager", "Permissions_Set", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:seem5LCPhkCBigbxNF3_5w", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:c_Tof6lzc0mFCMpBFvLlbw", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.permissionListInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:4BNt64lHY06qOBBiaRfOjg", callContext.id);
// Permissions_List = JSONSerialize1.JSON
UBT_AppManagerClientVariables.setPermissions_List(jSONSerialize1Var.value.jSONOut);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:tjRN6cRbmkmc3dy43jINAg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:9w+s0cT0_UqexXPyM_jhSg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.Permissions_Set$vars", [{
name: "PermissionList",
attrName: "permissionListInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.PermissionListRec();
},
complexType: UBT_AppManager_CSModel.PermissionListRec
}]);
UBT_AppManagerController.default.clientActionProxies.permissions_Set$Action = function (permissionListIn) {
permissionListIn = (permissionListIn === undefined) ? new UBT_AppManager_CSModel.PermissionListRec() : permissionListIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.permissions_Set$Action.bind(controller, permissionListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$PIN_Check", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.model$Pin_LocalStorage_ItemRec", "UBT_AppManager.controller$PIN_Get", "UBT_AppManager.controller$AppManager_GetAppId"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.pIN_Check$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var pIN_GetVar = new OS.DataTypes.VariableHolder();
var appManager_GetAppIdVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN_Check$outVars"))());
varBag.callContext = callContext;
varBag.pIN_GetVar = pIN_GetVar;
varBag.appManager_GetAppIdVar = appManager_GetAppIdVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:oMADRzhigkuHN9BRCU+1eg:/ClientActionFlows.oMADRzhigkuHN9BRCU+1eg:jLR10DQ3XPSKFHnzM+KAQg", "UBT_AppManager", "PIN_Check", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:5z1zbxB1qUOp3JypI5huow", callContext.id);
// Use PIN?
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wZ9aMoteBUSlS_4QY9_2tA", callContext.id) && UBT_AppManagerClientVariables.getPIN_Use())) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:bEEuzigSU0qh0+ACZ2c36g", callContext.id);
// Execute Action: AppManager_GetAppId
appManager_GetAppIdVar.value = UBT_AppManagerController.default.appManager_GetAppId$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7XD3QydsnUuXnCT6+asK4g", callContext.id);
// Execute Action: PIN_Get
pIN_GetVar.value = UBT_AppManagerController.default.pIN_Get$Action(OS.BuiltinFunctions.getUserId(), appManager_GetAppIdVar.value.getAppIdOut, callContext);

// HasPin
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mYWRNq23q0eznAwNY4IuJw", callContext.id) && pIN_GetVar.value.hasPinOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2fGdr9vkWECTeRJ8jPDCyg", callContext.id);
// NeedUnlock = True
outVars.value.needUnlockOut = true;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iNy4ALLKvk+w5wt4UVQqMw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:tJVLSY50N0CYZNhmzRDfmA", callContext.id);
// NeedRegister = True
outVars.value.needRegisterOut = true;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:YprLVWFoOUSRGk8ljdUhpQ", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:xxUZol3GE06sA3wLwCntTw", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:oMADRzhigkuHN9BRCU+1eg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.PIN_Check$outVars", [{
name: "NeedRegister",
attrName: "needRegisterOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "NeedUnlock",
attrName: "needUnlockOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.pIN_Check$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.pIN_Check$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
NeedRegister: OS.DataConversion.JSNodeParamConverter.to(actionResults.needRegisterOut, OS.DataTypes.DataTypes.Boolean),
NeedUnlock: OS.DataConversion.JSNodeParamConverter.to(actionResults.needUnlockOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager.controller$PIN_Delete", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_LocalStorage_GetItem", "UBT_AppManager.controller$AppManager_JSUtils_LocalStorage_SetItem", "UBT_AppManager.model$Pin_LocalStorage_ItemList", "UBT_AppManager.model$PIN_LocalStorageRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.pIN_Delete$Action = function (in_UserIdIn, in_AppIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN_Delete$vars"))());
vars.value.in_UserIdInLocal = in_UserIdIn;
vars.value.in_AppIdInLocal = in_AppIdIn;
var appManager_JSUtils_LocalStorage_GetItemVar = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializePIN_LocalStorageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManagerModel.PIN_LocalStorageRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_JSUtils_LocalStorage_GetItemVar = appManager_JSUtils_LocalStorage_GetItemVar;
varBag.jSONSerialize1Var = jSONSerialize1Var;
varBag.jSONDeserializePIN_LocalStorageVar = jSONDeserializePIN_LocalStorageVar;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:EoJGGS2C7UGyvrZsb4v6bQ:/ClientActionFlows.EoJGGS2C7UGyvrZsb4v6bQ:lpqNk9KKcj+JWCRqEmqTsw", "UBT_AppManager", "PIN_Delete", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wBTadFBinkeZmk4TsG1Ddg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:jw8UGfqjxUWMVVEMT_B2SQ", callContext.id);
// Execute Action: AppManager_JSUtils_LocalStorage_GetItem
appManager_JSUtils_LocalStorage_GetItemVar.value = UBT_AppManagerController.default.appManager_JSUtils_LocalStorage_GetItem$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.localStorageKey_Pin, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Ggr9rK3sJ0SuOrnrvA95tQ", callContext.id);
// JSON Deserialize: JSONDeserializePIN_LocalStorage
jSONDeserializePIN_LocalStorageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(appManager_JSUtils_LocalStorage_GetItemVar.value.valueOut, UBT_AppManagerModel.PIN_LocalStorageRec, false);
// Foreach JSONDeserializePIN_LocalStorage.Data.List
callContext.iterationContext.registerIterationStart(jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr);
try {var listIterator = callContext.iterationContext.getIterator(jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr);
var listIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mx7UZ40s50idPapgxfB7Jw", callContext.id) && (listIndex < jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr.length))) {
listIterator.currentRowNumber = listIndex;
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:QyVI1sQm0E6Vx+BjiTjSGg", callContext.id) && ((vars.value.in_AppIdInLocal === jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr.getItem(listIndex.valueOf()).appIdAttr) && (vars.value.in_UserIdInLocal === jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr.getItem(listIndex.valueOf()).userIdAttr)))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:VxNVRd5o9kCaTDSfSWmkeA", callContext.id);
// Index = JSONDeserializePIN_LocalStorage.Data.List.CurrentRowNumber
vars.value.indexVar = jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr.getCurrentRowNumber(callContext.iterationContext);
}

listIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr);
}

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lQ2jCcVFu0ykI2LBxBH4og", callContext.id) && ((vars.value.indexVar) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nGOsQ6OX_0OhHHdRvRMAxQ", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr, vars.value.indexVar, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CB6GiCbhTUCp0W4o2aVTlA", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(jSONDeserializePIN_LocalStorageVar.value.dataOut, false, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:rLymLp6t3US0p0sgPyKm4A", callContext.id);
// Execute Action: AppManager_JSUtils_LocalStorage_SetItem
UBT_AppManagerController.default.appManager_JSUtils_LocalStorage_SetItem$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.localStorageKey_Pin, jSONSerialize1Var.value.jSONOut, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:SkWZrWB_mUWfkbvpHNLThw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:IOKHd1BPkEmYBzxTFWnhRQ", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:EoJGGS2C7UGyvrZsb4v6bQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.PIN_Delete$vars", [{
name: "In_UserId",
attrName: "in_UserIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "In_AppId",
attrName: "in_AppIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Index",
attrName: "indexVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return -1;
}
}]);
UBT_AppManagerController.default.clientActionProxies.pIN_Delete$Action = function (in_UserIdIn, in_AppIdIn) {
in_UserIdIn = (in_UserIdIn === undefined) ? 0 : in_UserIdIn;
in_AppIdIn = (in_AppIdIn === undefined) ? "" : in_AppIdIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.pIN_Delete$Action.bind(controller, in_UserIdIn, OS.DataConversion.JSNodeParamConverter.from(in_AppIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$PIN_Get", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_LocalStorage_GetItem", "UBT_AppManager.model$Pin_LocalStorage_ItemList", "UBT_AppManager.model$Pin_LocalStorage_ItemRec", "UBT_AppManager.model$PIN_LocalStorageRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.pIN_Get$Action = function (in_UserIdIn, in_AppIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN_Get$vars"))());
vars.value.in_UserIdInLocal = in_UserIdIn;
vars.value.in_AppIdInLocal = in_AppIdIn;
var listFilterVar = new OS.DataTypes.VariableHolder();
var appManager_JSUtils_LocalStorage_GetItemVar = new OS.DataTypes.VariableHolder();
var jSONDeserializePIN_LocalStorageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManagerModel.PIN_LocalStorageRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN_Get$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilterVar = listFilterVar;
varBag.appManager_JSUtils_LocalStorage_GetItemVar = appManager_JSUtils_LocalStorage_GetItemVar;
varBag.jSONDeserializePIN_LocalStorageVar = jSONDeserializePIN_LocalStorageVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:wd_oPXb2SEqfN6OMZTxNwQ:/ClientActionFlows.wd_oPXb2SEqfN6OMZTxNwQ:uVoBDbXI_WYK+uRAgPnr4Q", "UBT_AppManager", "PIN_Get", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:dkRjcBes5kqecZlc1WookQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:BTMRvSnwAk6NW4EhfE5H0g", callContext.id);
// Execute Action: AppManager_JSUtils_LocalStorage_GetItem
appManager_JSUtils_LocalStorage_GetItemVar.value = UBT_AppManagerController.default.appManager_JSUtils_LocalStorage_GetItem$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.localStorageKey_Pin, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:VA2Pl8bwGESP2SdvdfrNdA", callContext.id);
// JSON Deserialize: JSONDeserializePIN_LocalStorage
jSONDeserializePIN_LocalStorageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(appManager_JSUtils_LocalStorage_GetItemVar.value.valueOut, UBT_AppManagerModel.PIN_LocalStorageRec, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+qHkE+KutkqZcpoxCDg9xg", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr, function (p) {
return ((p.appIdAttr === vars.value.in_AppIdInLocal) && (p.userIdAttr === vars.value.in_UserIdInLocal));
}, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DXNeXxNej0eFUvHBPLJgUw", callContext.id);
// Pin_LocalStorage_Item = ListFilter.FilteredList.Current
outVars.value.pin_LocalStorage_ItemOut = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DXNeXxNej0eFUvHBPLJgUw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HasPin = notListFilter.FilteredList.Empty
outVars.value.hasPinOut = !(listFilterVar.value.filteredListOut.isEmpty);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:QJsrS5j3D0CqQGS1WSRb1g", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:wd_oPXb2SEqfN6OMZTxNwQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.PIN_Get$vars", [{
name: "In_UserId",
attrName: "in_UserIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "In_AppId",
attrName: "in_AppIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.PIN_Get$outVars", [{
name: "Pin_LocalStorage_Item",
attrName: "pin_LocalStorage_ItemOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.Pin_LocalStorage_ItemRec();
},
complexType: UBT_AppManagerModel.Pin_LocalStorage_ItemRec
}, {
name: "HasPin",
attrName: "hasPinOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.pIN_Get$Action = function (in_UserIdIn, in_AppIdIn) {
in_UserIdIn = (in_UserIdIn === undefined) ? 0 : in_UserIdIn;
in_AppIdIn = (in_AppIdIn === undefined) ? "" : in_AppIdIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.pIN_Get$Action.bind(controller, in_UserIdIn, OS.DataConversion.JSNodeParamConverter.from(in_AppIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Pin_LocalStorage_Item: actionResults.pin_LocalStorage_ItemOut,
HasPin: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasPinOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBT_AppManager.controller$PIN_SessionInactivity_Destroy", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.pIN_SessionInactivity_Destroy$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getDestroyCallbackVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getDestroyCallbackVar = getDestroyCallbackVar;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:vd5YAOKSY0mKeBAdf7aCYQ:/ClientActionFlows.vd5YAOKSY0mKeBAdf7aCYQ:megx03CCJ+mQvBy0cMtU9A", "UBT_AppManager", "PIN_SessionInactivity_Destroy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:dOOWNci89kajKviscex6aA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:eU9Gt52kb0GH6xlbYfyv4g", callContext.id);
// Execute Action: GetDestroyCallback
getDestroyCallbackVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_SessionInactivityDestroyCallback, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:oYISq_zt8k2PE6wP6clg_A", callContext.id);
// Execute Action: JSUtils_RunFunc
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action(getDestroyCallbackVar.value.valueOut, null, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TS2QIUKVfEWooxyj5BOrmQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:vd5YAOKSY0mKeBAdf7aCYQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.clientActionProxies.pIN_SessionInactivity_Destroy$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.pIN_SessionInactivity_Destroy$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$PIN_SessionInactivity_Start", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$PIN_SessionInactivity_Start.SetupTimersJS", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty", "UBT_AppManager.controller$PIN_SessionInactivity_Destroy", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty", "UBT_AppManager.controller$PIN_SessionInactivty_OnTimeout"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_controller_PIN_SessionInactivity_Start_SetupTimersJS, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.pIN_SessionInactivity_Start$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var setupTimersJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setupTimersJSResult = setupTimersJSResult;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:OuByQh3MPEGVRZ2bF2ioSQ:/ClientActionFlows.OuByQh3MPEGVRZ2bF2ioSQ:BlJtN47kDMfkTOxrsG4mfw", "UBT_AppManager", "PIN_SessionInactivity_Start", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JgqBOzotfkeFLIxbl4lDnQ", callContext.id);
// Use Session Inactivity
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:A8UpMgG3xkGzmv8bGcVF+Q", callContext.id) && UBT_AppManagerClientVariables.getPIN_SessionInactivity_Use())) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KBHZkkU3ZUuiSdiLAKLUDw", callContext.id);
// Execute Action: PIN_SessionInactivity_Destroy
UBT_AppManagerController.default.pIN_SessionInactivity_Destroy$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DF5e2b1T5E6dIvqd7P0gDw", callContext.id);
setupTimersJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_controller_PIN_SessionInactivity_Start_SetupTimersJS, "SetupTimers", "PIN_SessionInactivity_Start", {
PrecisionSeconds: OS.DataConversion.JSNodeParamConverter.to(10, OS.DataTypes.DataTypes.Integer),
Date_SessionInactivityLastDate_PropertyId: OS.DataConversion.JSNodeParamConverter.to(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.date_SessionInactivityLastDate, OS.DataTypes.DataTypes.Text),
TimeoutSeconds: OS.DataConversion.JSNodeParamConverter.to(UBT_AppManagerClientVariables.getPIN_SessionInactivity_Seconds(), OS.DataTypes.DataTypes.Integer),
DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN_SessionInactivity_Start$setupTimersJSResult"))();
jsNodeResult.destroyCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DestroyCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
AppManager_JSUtils_ElementCache_GetObjProperty: UBT_AppManagerController.default.getClientActionProxies(controller).appManager_JSUtils_ElementCache_GetObjProperty$Action,
AppManager_JSUtils_ElementCache_SetObjProperty: UBT_AppManagerController.default.getClientActionProxies(controller).appManager_JSUtils_ElementCache_SetObjProperty$Action,
PIN_SessionInactivty_OnTimeout: UBT_AppManagerController.default.getClientActionProxies(controller).pIN_SessionInactivty_OnTimeout$Action
}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:E8CGBltue0KQknkjb4dbWg", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetObjProperty
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_SessionInactivityDestroyCallback, setupTimersJSResult.value.destroyCallbackOut, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:S+pOaxHYUkiAdWbqwDeWBw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:H2BMv0kxukqJw9Cj+wCJyg", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:OuByQh3MPEGVRZ2bF2ioSQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.PIN_SessionInactivity_Start$setupTimersJSResult", [{
name: "DestroyCallback",
attrName: "destroyCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBT_AppManagerController.default.clientActionProxies.pIN_SessionInactivity_Start$Action = function () {
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.pIN_SessionInactivity_Start$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBT_AppManager.controller$PIN_SessionInactivity_Start.SetupTimersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var getLastDetectedActivity = function () {
    return $actions.AppManager_JSUtils_ElementCache_GetObjProperty($parameters.Date_SessionInactivityLastDate_PropertyId).Value;
}

var storeLastDetectedActivityLocal = function (date) {
    $actions.AppManager_JSUtils_ElementCache_SetObjProperty($parameters.Date_SessionInactivityLastDate_PropertyId,date);
}

//start the date
var lastActivity = Date.now();
storeLastDetectedActivityLocal(lastActivity);
var lastStoredActivity = lastActivity;
var interval;

var setupListeners = function() {
    window.addEventListener("mousemove", detectedActivity, false);
    window.addEventListener("mousedown", detectedActivity, false);
    window.addEventListener("keypress", detectedActivity, false);
    window.addEventListener("DOMMouseScroll", detectedActivity, false);
    window.addEventListener("mousewheel", detectedActivity, false);
    window.addEventListener("touchmove", detectedActivity, false);
    window.addEventListener("MSPointerMove", detectedActivity, false);
    window.addEventListener("touchstart", detectedActivity, false);
};

var startTimer = function() {
    interval = window.setInterval(storeLastDetectedActivity, $parameters.PrecisionSeconds * 1000);
};

var detectedActivity = function(e) {
    lastActivity = new Date();
};

var checkTimeout = function() { 
    if (lastActivity != null) {
        var lastActivityOutsideJS = getLastDetectedActivity();
        if (lastActivityOutsideJS > lastActivity)
            lastActivity = lastActivityOutsideJS;
        var threshold = new Date(Date.now() - $parameters.TimeoutSeconds * 1000);
        if (lastActivity < threshold) {
            destroy();
            $actions.PIN_SessionInactivty_OnTimeout();
        }
    }
};

var storeLastDetectedActivity = function() {
    if (lastActivity != lastStoredActivity) {
        storeLastDetectedActivityLocal(lastActivity);
        lastStoredActivity = lastActivity;
    }
    checkTimeout();
};

var destroy = function() {
    window.clearInterval(interval);
    window.removeEventListener("mousemove", detectedActivity, false);
    window.removeEventListener("mousedown", detectedActivity, false);
    window.removeEventListener("keypress", detectedActivity, false);
    window.removeEventListener("DOMMouseScroll", detectedActivity, false);
    window.removeEventListener("mousewheel", detectedActivity, false);
    window.removeEventListener("touchmove", detectedActivity, false);
    window.removeEventListener("MSPointerMove", detectedActivity, false);
    window.removeEventListener("touchstart", detectedActivity, false);

    if (lastActivity != lastStoredActivity) {
        storeLastDetectedActivityLocal(lastActivity);
        lastStoredActivity = lastActivity;
    }
};



setupListeners();
startTimer();
checkTimeout();

$parameters.DestroyCallback = destroy;
};
});

define("UBT_AppManager.controller$PIN_SessionInactivty_OnTimeout", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_PageRedirect", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AppManager_SetAppCallback_CurrentLocation", "UBT_AppManager.controller$AppManager_JSUtils_CustomEvent_Dispatch", "UBTJavaScriptUtils.controller$JSUtils_BuildAbsoluteURL", "UBT_AppManager.controller$AppManager_GetAppId"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBTJavaScriptUtilsController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.pIN_SessionInactivty_OnTimeout$Action = function (in_IsAutoRedirectIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN_SessionInactivty_OnTimeout$vars"))());
vars.value.in_IsAutoRedirectInLocal = in_IsAutoRedirectIn;
var jSUtils_BuildAbsoluteURLVar = new OS.DataTypes.VariableHolder();
var appManager_GetAppIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSUtils_BuildAbsoluteURLVar = jSUtils_BuildAbsoluteURLVar;
varBag.appManager_GetAppIdVar = appManager_GetAppIdVar;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:IFuejjRPn0m7PXdskyLFdQ:/ClientActionFlows.IFuejjRPn0m7PXdskyLFdQ:mXmkad4VRafIJEyqwdbDRA", "UBT_AppManager", "PIN_SessionInactivty_OnTimeout", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+opVuyrDVUakK_FqwOnSqg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:EWaIpY66F02Goz6_pR2nvA", callContext.id);
// Page = "PINUnlock"
vars.value.pageVar = "PINUnlock";
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9Ej5Sl2Gs0WrSpAPMDE7mw", callContext.id);
// Execute Action: AppManager_SetAppCallback_CurrentLocation
UBT_AppManagerController.default.appManager_SetAppCallback_CurrentLocation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vhg18wTTjkOxrXYIZxDrdQ", callContext.id);
// Execute Action: AppManager_GetAppId
appManager_GetAppIdVar.value = UBT_AppManagerController.default.appManager_GetAppId$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:YA2_A3wWjk+BfVb3_P+CoQ", callContext.id) && UBT_AppManagerClientVariables.getPIN_SessionInactivity_Navigate())) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vz3MkE8H5UqvJ12LErJ8TQ", callContext.id);
// Execute Action: JSUtils_BuildAbsoluteURL
jSUtils_BuildAbsoluteURLVar.value = UBTJavaScriptUtilsController.default.jSUtils_BuildAbsoluteURL$Action(((("/" + appManager_GetAppIdVar.value.getAppIdOut) + "/") + vars.value.pageVar), callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RARrFrvWD0ihxZMB5gpTew", callContext.id);
// Execute Action: JSUtils_PageRedirect
UBTJavaScriptUtilsController.default.jSUtils_PageRedirect$Action(jSUtils_BuildAbsoluteURLVar.value.absoluteURLOut, false, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ujJZE3NHFUGVKBWcK3z2GQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:c1VrZ3aAxUeLKlpvw0StKQ", callContext.id);
// Execute Action: AppManager_JSUtils_CustomEvent_Dispatch
UBT_AppManagerController.default.appManager_JSUtils_CustomEvent_Dispatch$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.pIN_OnTimeout, "", callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ujJZE3NHFUGVKBWcK3z2GQ", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:IFuejjRPn0m7PXdskyLFdQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.PIN_SessionInactivty_OnTimeout$vars", [{
name: "In_IsAutoRedirect",
attrName: "in_IsAutoRedirectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Page",
attrName: "pageVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.pIN_SessionInactivty_OnTimeout$Action = function (in_IsAutoRedirectIn) {
in_IsAutoRedirectIn = (in_IsAutoRedirectIn === undefined) ? false : in_IsAutoRedirectIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.pIN_SessionInactivty_OnTimeout$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_IsAutoRedirectIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$PIN_Set", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$AppManager_JSUtils_LocalStorage_SetItem", "UBT_AppManager.controller$AppManager_JSUtils_LocalStorage_GetItem", "UBT_AppManager.model$Pin_LocalStorage_ItemList", "UBT_AppManager.model$Pin_LocalStorage_ItemRec", "UBT_AppManager.model$PIN_LocalStorageRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.pIN_Set$Action = function (pin_LocalStorage_ItemIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN_Set$vars"))());
vars.value.pin_LocalStorage_ItemInLocal = pin_LocalStorage_ItemIn.clone();
var appManager_JSUtils_LocalStorage_GetItemVar = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializePIN_LocalStorageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManagerModel.PIN_LocalStorageRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_JSUtils_LocalStorage_GetItemVar = appManager_JSUtils_LocalStorage_GetItemVar;
varBag.jSONSerialize1Var = jSONSerialize1Var;
varBag.jSONDeserializePIN_LocalStorageVar = jSONDeserializePIN_LocalStorageVar;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:jH55cTrEM0ykWg3R05bMsw:/ClientActionFlows.jH55cTrEM0ykWg3R05bMsw:JT0vmxIHtTz7_0GBunqhXQ", "UBT_AppManager", "PIN_Set", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:5BLR6I1cw0qqH4tK8SxBjw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nqH4iBWICU+24cO7YI2HRw", callContext.id);
// Execute Action: AppManager_JSUtils_LocalStorage_GetItem
appManager_JSUtils_LocalStorage_GetItemVar.value = UBT_AppManagerController.default.appManager_JSUtils_LocalStorage_GetItem$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.localStorageKey_Pin, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iX7RLKY+aE2jJnz+JXAqwA", callContext.id);
// JSON Deserialize: JSONDeserializePIN_LocalStorage
jSONDeserializePIN_LocalStorageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(appManager_JSUtils_LocalStorage_GetItemVar.value.valueOut, UBT_AppManagerModel.PIN_LocalStorageRec, false);
// Foreach JSONDeserializePIN_LocalStorage.Data.List
callContext.iterationContext.registerIterationStart(jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr);
try {var listIterator = callContext.iterationContext.getIterator(jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr);
var listIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:W3Fy_gdyOkWVDPbjJQIRuw", callContext.id) && (listIndex < jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr.length))) {
listIterator.currentRowNumber = listIndex;
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:h4saw_A4_ky0GK27ksI8Dg", callContext.id) && ((vars.value.pin_LocalStorage_ItemInLocal.appIdAttr === jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr.getItem(listIndex.valueOf()).appIdAttr) && (vars.value.pin_LocalStorage_ItemInLocal.userIdAttr === jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr.getItem(listIndex.valueOf()).userIdAttr)))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:McpBqF3cdUKKrHWDKLOteQ", callContext.id);
// JSONDeserializePIN_LocalStorage.Data.List.Current.PINCode = Pin_LocalStorage_Item.PINCode
jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr.getItem(listIndex.valueOf()).pINCodeAttr = vars.value.pin_LocalStorage_ItemInLocal.pINCodeAttr;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:McpBqF3cdUKKrHWDKLOteQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AlreadyExist = True
vars.value.alreadyExistVar = true;
}

listIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr);
}

if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:s3Ri+kVZDEeaeakKD3lWcg", callContext.id) && !(vars.value.alreadyExistVar))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:xkk3qQcexUm30vkvof34dQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(jSONDeserializePIN_LocalStorageVar.value.dataOut.listAttr, vars.value.pin_LocalStorage_ItemInLocal, callContext);
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Tyyn62ayME6aUtT152ZBHQ", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(jSONDeserializePIN_LocalStorageVar.value.dataOut, false, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2dxseqIGUkuDCy06WmHS0A", callContext.id);
// Execute Action: AppManager_JSUtils_LocalStorage_SetItem
UBT_AppManagerController.default.appManager_JSUtils_LocalStorage_SetItem$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.localStorageKey_Pin, jSONSerialize1Var.value.jSONOut, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:k4d1NxseNEKJFqiM4MQqBw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:jH55cTrEM0ykWg3R05bMsw", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.PIN_Set$vars", [{
name: "Pin_LocalStorage_Item",
attrName: "pin_LocalStorage_ItemInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.Pin_LocalStorage_ItemRec();
},
complexType: UBT_AppManagerModel.Pin_LocalStorage_ItemRec
}, {
name: "AlreadyExist",
attrName: "alreadyExistVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.pIN_Set$Action = function (pin_LocalStorage_ItemIn) {
pin_LocalStorage_ItemIn = (pin_LocalStorage_ItemIn === undefined) ? new UBT_AppManagerModel.Pin_LocalStorage_ItemRec() : pin_LocalStorage_ItemIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.pIN_Set$Action.bind(controller, pin_LocalStorage_ItemIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$PIN_ValidateRules", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.pIN_ValidateRules$Action = function (pinCodeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN_ValidateRules$vars"))());
vars.value.pinCodeInLocal = pinCodeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN_ValidateRules$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:Sctzgp3aTEGcGINRNNcUxg:/ClientActionFlows.Sctzgp3aTEGcGINRNNcUxg:nWJZiRi8iUsL+LDXb8CvYg", "UBT_AppManager", "PIN_ValidateRules", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XUz4eJdJWUCf6HesgzkiCA", callContext.id);
// Digits
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2WH4JlhFlkiKEfns3tQKBQ", callContext.id);
// Digit1 = TextToInteger
vars.value.digit1Var = OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.substr(vars.value.pinCodeInLocal, 0, 1));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2WH4JlhFlkiKEfns3tQKBQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Digit2 = TextToInteger
vars.value.digit2Var = OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.substr(vars.value.pinCodeInLocal, 1, 1));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2WH4JlhFlkiKEfns3tQKBQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Digit3 = TextToInteger
vars.value.digit3Var = OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.substr(vars.value.pinCodeInLocal, 2, 1));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2WH4JlhFlkiKEfns3tQKBQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Digit4 = TextToInteger
vars.value.digit4Var = OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.substr(vars.value.pinCodeInLocal, 3, 1));
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:3BtV18l6g0ic+kk6+4KDfQ", callContext.id) && ((OS.BuiltinFunctions.textToInteger(vars.value.pinCodeInLocal) > 1800) && (OS.BuiltinFunctions.textToInteger(vars.value.pinCodeInLocal) < 2099)))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wyjNgB3OVEa_Sq92ojSyVQ", callContext.id);
// IsValid = False
outVars.value.isValidOut = false;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wyjNgB3OVEa_Sq92ojSyVQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Message = "PIN must not contain any calendar year."
outVars.value.messageOut = "PIN must not contain any calendar year.";
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:BlOmZiFPqEieYNFlfbsD3g", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DXv5edemS0qLGfCTeJ_Z0w", callContext.id) && (((((vars.value.digit1Var === vars.value.digit2Var) && (vars.value.digit2Var === vars.value.digit3Var)) || ((vars.value.digit1Var === vars.value.digit2Var) && (vars.value.digit2Var === vars.value.digit4Var))) || ((vars.value.digit1Var === vars.value.digit3Var) && (vars.value.digit3Var === vars.value.digit4Var))) || ((vars.value.digit2Var === vars.value.digit3Var) && (vars.value.digit3Var === vars.value.digit4Var))))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wfkJ30M4RkOkPBjuFEOdYQ", callContext.id);
// IsValid = False
outVars.value.isValidOut = false;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wfkJ30M4RkOkPBjuFEOdYQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Message = "PIN must not contain any 3 repeating numbers."
outVars.value.messageOut = "PIN must not contain any 3 repeating numbers.";
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:07U8KJs4RkiDY9kkTaBAfg", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:OC4Tw3JyTUaA4lNmjT6_1Q", callContext.id) && (((((vars.value.digit1Var === (vars.value.digit2Var + 1)) && (vars.value.digit2Var === (vars.value.digit3Var + 1))) || ((vars.value.digit2Var === (vars.value.digit3Var + 1)) && (vars.value.digit3Var === (vars.value.digit4Var + 1)))) || ((vars.value.digit1Var === (vars.value.digit2Var - 1)) && (vars.value.digit2Var === (vars.value.digit3Var - 1)))) || ((vars.value.digit2Var === (vars.value.digit3Var - 1)) && (vars.value.digit3Var === (vars.value.digit4Var - 1)))))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+yQC6BAwsEayYcIQEN+jcQ", callContext.id);
// IsValid = False
outVars.value.isValidOut = false;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+yQC6BAwsEayYcIQEN+jcQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Message = "PIN must not contain any 3 consecutive numbers."
outVars.value.messageOut = "PIN must not contain any 3 consecutive numbers.";
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:OhFRWDRa4kibv_lIRXuydA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:C8UPvX8WtESJCYr2DFJ0zw", callContext.id);
// IsValid = True
outVars.value.isValidOut = true;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ZHkeM_TpQEiOCuFB3EVRXQ", callContext.id);
}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Sctzgp3aTEGcGINRNNcUxg", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.PIN_ValidateRules$vars", [{
name: "PinCode",
attrName: "pinCodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Digit1",
attrName: "digit1Var",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Digit2",
attrName: "digit2Var",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Digit3",
attrName: "digit3Var",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Digit4",
attrName: "digit4Var",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.PIN_ValidateRules$outVars", [{
name: "IsValid",
attrName: "isValidOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBT_AppManagerController.default.clientActionProxies.pIN_ValidateRules$Action = function (pinCodeIn) {
pinCodeIn = (pinCodeIn === undefined) ? "" : pinCodeIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.pIN_ValidateRules$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(pinCodeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsValid: OS.DataConversion.JSNodeParamConverter.to(actionResults.isValidOut, OS.DataTypes.DataTypes.Boolean),
Message: OS.DataConversion.JSNodeParamConverter.to(actionResults.messageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBT_AppManager.controller$Temp_AlertErrorC11382", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.clientVariables"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.temp_AlertErrorC11382$Action = function (azureURLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.Temp_AlertErrorC11382$vars"))());
vars.value.azureURLInLocal = azureURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:d6THiDaSrEGwhZKrJcwktQ:/ClientActionFlows.d6THiDaSrEGwhZKrJcwktQ:lS7rQ4rZzHIyy293oRXftQ", "UBT_AppManager", "Temp_AlertErrorC11382", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:HOq02wi_ZE+6DOroHJmRkg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:8ihxlmtytEm6JIWCegFMcA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:d6THiDaSrEGwhZKrJcwktQ", callContext.id);
}

};
var controller = UBT_AppManagerController.default;
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager.Temp_AlertErrorC11382$vars", [{
name: "AzureURL",
attrName: "azureURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TriedToClearCache",
attrName: "triedToClearCacheVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBT_AppManagerController.default.clientActionProxies.temp_AlertErrorC11382$Action = function (azureURLIn) {
azureURLIn = (azureURLIn === undefined) ? "" : azureURLIn;
return controller.executeActionInsideJSNode(UBT_AppManagerController.default.temp_AlertErrorC11382$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(azureURLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBT_AppManager.controller$ServerAction.AppManager_AfterInitialize", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_AfterInitialize$ServerAction = function (espaceNameIn, appManager_MobileContextIn, tOTPIn, callContext) {
var controller = this.controller;
var inputs = {
EspaceName: OS.DataConversion.ServerDataConverter.to(espaceNameIn, OS.DataTypes.DataTypes.Text),
AppManager_MobileContext: OS.DataConversion.ServerDataConverter.to(appManager_MobileContextIn, OS.DataTypes.DataTypes.Record),
TOTP: OS.DataConversion.ServerDataConverter.to(tOTPIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("AppManager_AfterInitialize", "screenservices/UBT_AppManager/ActionAppManager_AfterInitialize", "2ddRx81ttheqhI46dGCBpA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBT_AppManager$rssespaceubt_appmanager_cs_ActionAppManager_AfterInitialize"))();
executeServerActionResult.isNotRegisteredOut = OS.DataConversion.ServerDataConverter.from(outputs.isNotRegistered, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager$rssespaceubt_appmanager_cs_ActionAppManager_AfterInitialize", [{
name: "isNotRegistered",
attrName: "isNotRegisteredOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
});
define("UBT_AppManager.controller$ServerAction.AppManager_ChangeDevice", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_ChangeDevice$ServerAction = function (espaceNameIn, appManager_MobileContextIn, loginOperationGUIDIn, callContext) {
var controller = this.controller;
var inputs = {
EspaceName: OS.DataConversion.ServerDataConverter.to(espaceNameIn, OS.DataTypes.DataTypes.Text),
AppManager_MobileContext: OS.DataConversion.ServerDataConverter.to(appManager_MobileContextIn, OS.DataTypes.DataTypes.Record),
LoginOperationGUID: OS.DataConversion.ServerDataConverter.to(loginOperationGUIDIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("AppManager_ChangeDevice", "screenservices/UBT_AppManager/ActionAppManager_ChangeDevice", "C9Hx6+i38wNbCW5xsuwA7A", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};
});
define("UBT_AppManager.controller$ServerAction.AppManager_Login", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserInfoClientRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager_CS.model$AppManager_ConfigClientRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_Login$ServerAction = function (espaceNameIn, authorization_CodeIn, client_IdTokenIn, appManager_MobileContextIn, callbackURLIn, code_VerifierIn, tOTPIn, callContext) {
var controller = this.controller;
var inputs = {
EspaceName: OS.DataConversion.ServerDataConverter.to(espaceNameIn, OS.DataTypes.DataTypes.Text),
Authorization_Code: OS.DataConversion.ServerDataConverter.to(authorization_CodeIn, OS.DataTypes.DataTypes.Text),
Client_IdToken: OS.DataConversion.ServerDataConverter.to(client_IdTokenIn, OS.DataTypes.DataTypes.Text),
AppManager_MobileContext: OS.DataConversion.ServerDataConverter.to(appManager_MobileContextIn, OS.DataTypes.DataTypes.Record),
CallbackURL: OS.DataConversion.ServerDataConverter.to(callbackURLIn, OS.DataTypes.DataTypes.Text),
Code_Verifier: OS.DataConversion.ServerDataConverter.to(code_VerifierIn, OS.DataTypes.DataTypes.Text),
TOTP: OS.DataConversion.ServerDataConverter.to(tOTPIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("AppManager_Login", "screenservices/UBT_AppManager/ActionAppManager_Login", "XxRy6ImtPV4iPJTHS3AGgA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBT_AppManager$rssespaceubt_appmanager_cs_ActionAppManager_Login"))();
executeServerActionResult.appManager_UserInfoClientOut = OS.DataConversion.ServerDataConverter.from(outputs.AppManager_UserInfoClient, UBT_AppManager_CSModel.AppManager_UserInfoClientRec);
executeServerActionResult.appManager_ClientConfigOut = OS.DataConversion.ServerDataConverter.from(outputs.AppManager_ClientConfig, UBT_AppManager_CSModel.AppManager_ConfigClientRec);
executeServerActionResult.isResetPasswordOut = OS.DataConversion.ServerDataConverter.from(outputs.isResetPassword, OS.DataTypes.DataTypes.Boolean);
executeServerActionResult.isValidDeviceOut = OS.DataConversion.ServerDataConverter.from(outputs.isValidDevice, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager$rssespaceubt_appmanager_cs_ActionAppManager_Login", [{
name: "AppManager_UserInfoClient",
attrName: "appManager_UserInfoClientOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_UserInfoClientRec();
},
complexType: UBT_AppManager_CSModel.AppManager_UserInfoClientRec
}, {
name: "AppManager_ClientConfig",
attrName: "appManager_ClientConfigOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_ConfigClientRec();
},
complexType: UBT_AppManager_CSModel.AppManager_ConfigClientRec
}, {
name: "isResetPassword",
attrName: "isResetPasswordOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "isValidDevice",
attrName: "isValidDeviceOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);
});
define("UBT_AppManager.controller$ServerAction.AppManager_Logout", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_Logout$ServerAction = function (espaceNameIn, appManager_MobileContextIn, callContext) {
var controller = this.controller;
var inputs = {
EspaceName: OS.DataConversion.ServerDataConverter.to(espaceNameIn, OS.DataTypes.DataTypes.Text),
AppManager_MobileContext: OS.DataConversion.ServerDataConverter.to(appManager_MobileContextIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("AppManager_Logout", "screenservices/UBT_AppManager/ActionAppManager_Logout", "ddRnLGouHLp5a+pcQHyljA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};
});
define("UBT_AppManager.controller$ServerAction.AppManager_SynchAppContext", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS", "UBT_AppManager_CS.model$PermissionListRec"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
UBT_AppManagerController.default.appManager_SynchAppContext$ServerAction = function (espaceNameIn, callContext) {
var controller = this.controller;
var inputs = {
EspaceName: OS.DataConversion.ServerDataConverter.to(espaceNameIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("AppManager_SynchAppContext", "screenservices/UBT_AppManager/ActionAppManager_SynchAppContext", "JA52uCZNX516ePbPAVfczw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBT_AppManager$rssespaceubt_appmanager_cs_ActionAppManager_SynchAppContext"))();
executeServerActionResult.appManager_ClientConfigOut = OS.DataConversion.ServerDataConverter.from(outputs.AppManager_ClientConfig, UBT_AppManager_CSModel.AppManager_ConfigClientRec);
executeServerActionResult.isSuccessOut = OS.DataConversion.ServerDataConverter.from(outputs.isSuccess, OS.DataTypes.DataTypes.Boolean);
executeServerActionResult.permissionListOut = OS.DataConversion.ServerDataConverter.from(outputs.PermissionList, UBT_AppManager_CSModel.PermissionListRec);
executeServerActionResult.firebaseRealTimeDB_TokenOut = OS.DataConversion.ServerDataConverter.from(outputs.FirebaseRealTimeDB_Token, OS.DataTypes.DataTypes.Text);
return executeServerActionResult;
});
};
UBT_AppManagerController.default.constructor.registerVariableGroupType("UBT_AppManager$rssespaceubt_appmanager_cs_ActionAppManager_SynchAppContext", [{
name: "AppManager_ClientConfig",
attrName: "appManager_ClientConfigOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.AppManager_ConfigClientRec();
},
complexType: UBT_AppManager_CSModel.AppManager_ConfigClientRec
}, {
name: "isSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "PermissionList",
attrName: "permissionListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManager_CSModel.PermissionListRec();
},
complexType: UBT_AppManager_CSModel.PermissionListRec
}, {
name: "FirebaseRealTimeDB_Token",
attrName: "firebaseRealTimeDB_TokenOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
});
define("UBT_AppManager.controller", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller$debugger"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManager_Controller_debugger) {
var OS = OutSystems.Internal;
var UBT_AppManagerController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
this.registerOnApplicationReadyHandler("UBT_AppManager.controller$OnApplicationReady", "onApplicationReady$Action");
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return UBT_AppManagerController.default.defaultTimeout;
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
UBT_AppManagerController.default = new Controller(null, "UBT_AppManager");
});
define("UBT_AppManager.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main", "UBT_AppManager.clientVariables"], function (exports, Debugger, OutSystems, UBT_AppManagerClientVariables) {
var OS = OutSystems.Internal;
var metaInfo = {
"eU9Gt52kb0GH6xlbYfyv4g": {
getter: function (varBag, idService) {
return varBag.getDestroyCallbackVar.value;
}
},
"STBDFX1g8E+PRGKIcf+0kA": {
getter: function (varBag, idService) {
return varBag.azureAppInsights_CheckInitializedVar.value;
}
},
"ZjExz7_WIEuFJ3xIwg8BWg": {
getter: function (varBag, idService) {
return varBag.obj_UserOnlineCallbackVar.value;
}
},
"6TUoRzFlC0evXvX_OAHIcQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"71zYtVWvxEqWkr9+npFRJQ": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_ElementCache_GetObjPropertyVar.value;
}
},
"tE1TEk527kKYuqeMo3tTFA": {
getter: function (varBag, idService) {
return varBag.vars.value.throwCloseEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xBE7ZZqklkuo8Koawrt6lQ": {
getter: function (varBag, idService) {
return varBag.vars.value.hasFoundNetworkErrorInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"21wUS6aPtEG3rNp9KFL1JA": {
getter: function (varBag, idService) {
return varBag.closeInAppBrowserJSResult.value;
}
},
"LgSv6z0XHEeB3ZupfkY_SA": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasUnlockedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"_jVqZR9R8U2s0pPMuMoExw": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeAppManager_DelayedMessageVar.value;
}
},
"38W0m965mk+z+X7JELVOHA": {
getter: function (varBag, idService) {
return varBag.javaScript2JSResult.value;
}
},
"sAz0jtmE6Ui5Tys8ZHGV1Q": {
getter: function (varBag, idService) {
return varBag.vars.value.eventAndBrowserInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"ccHTXAfNOEyVl71Rw_CeOA": {
getter: function (varBag, idService) {
return varBag.appManager_GetCallbackURLVar.value;
}
},
"2TGS8ku41k6ZmSyr2sfBrQ": {
getter: function (varBag, idService) {
return varBag.getEventURLJSResult.value;
}
},
"LdNi3RgfvUyDWMuWK9IURQ": {
getter: function (varBag, idService) {
return varBag.vars.value.configInLocal;
}
},
"geA6KnOnTEWMtd8BORNT9A": {
getter: function (varBag, idService) {
return varBag.isRunningAsPWAVar.value;
}
},
"SD_ybl0JOUeh_fzACFTZ+A": {
getter: function (varBag, idService) {
return varBag.getBrowserVar.value;
}
},
"Bos3cuu5r0mXszC2MOo5oQ": {
getter: function (varBag, idService) {
return varBag.getOSVar.value;
}
},
"Q9ttdtnYQkm+RnhIGkERug": {
getter: function (varBag, idService) {
return varBag.appManager_GetDeviceContextVar.value;
}
},
"WVW5xBNqR02qCVCuthEgPA": {
getter: function (varBag, idService) {
return varBag.get_OnAfterInitializeCallbackVar.value;
}
},
"gSN0A8HBTkyKNOm2cOGioQ": {
getter: function (varBag, idService) {
return varBag.hasRenderedSplashJSResult.value;
}
},
"PBEOg9_TuUCFuxbU8Ton+g": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"O1z43j7CvUCEv6F4cE8jLA": {
getter: function (varBag, idService) {
return varBag.vars.value.functionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"+WAXvwQ9KkeYxZDMBug_pA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VHiVeWwaCUGX2XWzmXEYLA": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"2q4sWT4mCkyDt2+6ftJggQ": {
getter: function (varBag, idService) {
return varBag.vars.value.hasUnlockedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"PnP04ZJkc0G8eOQ_7rwhlg": {
getter: function (varBag, idService) {
return varBag.closeInAppBrowserJSResult.value;
}
},
"yNhCMZVppUieDU6V0WCcmA": {
getter: function (varBag, idService) {
return varBag.vars.value.indexVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"TnTFh5aiNEOQfZryd+c+pQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_UserIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"mmVayXUN7k6FKWKC2PrssQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_AppIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jw8UGfqjxUWMVVEMT_B2SQ": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_LocalStorage_GetItemVar.value;
}
},
"CB6GiCbhTUCp0W4o2aVTlA": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"Ggr9rK3sJ0SuOrnrvA95tQ": {
getter: function (varBag, idService) {
return varBag.jSONDeserializePIN_LocalStorageVar.value;
}
},
"K0oBFxkM+kaOHfDs9EbGFA": {
getter: function (varBag, idService) {
return varBag.outVars.value.packageNameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lahuLqPSKk6qfKOQz8BKVQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OMm0ob_u1EmCq4r3TWeBYQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.valueOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"lrK3VwnHqEmLBN1BconEuw": {
getter: function (varBag, idService) {
return varBag.jSUtils_ElementCache_GetObjPropertyVar.value;
}
},
"VtkhoB9rBkKo_F0MsTOmJw": {
getter: function (varBag, idService) {
return varBag.vars.value.appManager_CallbackVar;
}
},
"wIFlG5remEi3xhSA0EwwUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.hasFoundNetworkErrorInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6hoCbqdPw0WWZ2kJksqkhw": {
getter: function (varBag, idService) {
return varBag.vars.value.isForResetPasswordInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"yzwg3H5180mitzmh06Afsg": {
getter: function (varBag, idService) {
return varBag.outVars.value.configCacheOut;
}
},
"XbZ135DMIUi+dHxtry6ZNQ": {
getter: function (varBag, idService) {
return varBag.appManager_GetAppIdVar.value;
}
},
"oMNp5O+zh0+A_rW8Kti3UA": {
getter: function (varBag, idService) {
return varBag.appManager_SynchAppContextVar.value;
}
},
"fPBZaJz5T0GzsdKwIvJRmg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isNativeOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ebMb_SDYx0SGXbsxk6hd0g": {
getter: function (varBag, idService) {
return varBag.outVars.value.isRegisteringOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"sWmUHBq2WUSIH07qZgMIAQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"n+eeGgODKEir+C+SwQio3w": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kXhChOTA8UylvXuS3pgQFQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.messageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IEZh3MJlZkOAY6XxTyX6Ww": {
getter: function (varBag, idService) {
return varBag.outVars.value.messageTitleOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cx3oJTBphk2sUllUI7mqLw": {
getter: function (varBag, idService) {
return varBag.outVars.value.messageTypeOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"LJkFvGl+30+CW67bfjr5dA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"DN+rn3KA3kabgpESa+tCbg": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeAppManager_ClientExceptionMessageVar.value;
}
},
"+tB+5nkae02QtVADsur1hA": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"SbtVtDddZkWhh13MwnsKQw": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_ElementCache_GetObjPropertyVar.value;
}
},
"uneNT7Yw3E+wUI1RyKGMHg": {
getter: function (varBag, idService) {
return varBag.vars.value.objectInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"+7F2kt9xnEqbqxambIh6Ag": {
getter: function (varBag, idService) {
return varBag.vars.value.in_UserIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"m2p+uVZvM0GL5P6XHqi_hw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_AppIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OnOu1lKKuk2MJjEhPh3xkw": {
getter: function (varBag, idService) {
return varBag.outVars.value.pin_LocalStorage_ItemOut;
}
},
"vzJX8H+n40euFww72AUlJA": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasPinOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+qHkE+KutkqZcpoxCDg9xg": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"BTMRvSnwAk6NW4EhfE5H0g": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_LocalStorage_GetItemVar.value;
}
},
"VA2Pl8bwGESP2SdvdfrNdA": {
getter: function (varBag, idService) {
return varBag.jSONDeserializePIN_LocalStorageVar.value;
}
},
"flU74oviEEaDpdNsaIkKWA": {
getter: function (varBag, idService) {
return varBag.vars.value.objectInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"ixrJlNxWgk+m6Qbv2sNM5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.licenseListInLocal;
}
},
"M3Sq_V0NCkmRe77JIYIAiA": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"DF5e2b1T5E6dIvqd7P0gDw": {
getter: function (varBag, idService) {
return varBag.setupTimersJSResult.value;
}
},
"ua0flUzwV0q17C9nrkJs6Q": {
getter: function (varBag, idService) {
return varBag.vars.value.isForResetPassworInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"WoMlyf90KEukzj4PopAeSw": {
getter: function (varBag, idService) {
return varBag.outVars.value.uRLOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BiEbWBSLGEOq837w_QaZ0g": {
getter: function (varBag, idService) {
return varBag.appManager_GetAuthorizeURLVar.value;
}
},
"qQvdYsA4IkignYoyq4e5GQ": {
getter: function (varBag, idService) {
return varBag.appManager_GetConfigurationVar.value;
}
},
"f8OIvvC7Hk6AmrvJfcVccQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.needRegisterOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HfnR8QRWo0ajQHtA2YrD5Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.needUnlockOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"7XD3QydsnUuXnCT6+asK4g": {
getter: function (varBag, idService) {
return varBag.pIN_GetVar.value;
}
},
"bEEuzigSU0qh0+ACZ2c36g": {
getter: function (varBag, idService) {
return varBag.appManager_GetAppIdVar.value;
}
},
"VIefqW2Yf0eW6KsF9_Ilpg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"x+OamytVQ0GXOLv4rtg5Zw": {
getter: function (varBag, idService) {
return varBag.outVars.value.valueOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aAf1FlpGVEeSEj7NZs+nmw": {
getter: function (varBag, idService) {
return varBag.jSUtils_LocalStorage_GetItemVar.value;
}
},
"UF84NvJMfUOt6Z5EVS38Zg": {
getter: function (varBag, idService) {
return varBag.vars.value.appManager_UserInfoClientInLocal;
}
},
"seLQw_s7K0+_0HUWDk_rog": {
getter: function (varBag, idService) {
return varBag.vars.value.appManager_ClientConfigInLocal;
}
},
"JXoplgyUAUC5i0LSkFX7gw": {
getter: function (varBag, idService) {
return varBag.obj_MobileAfterLoginVar.value;
}
},
"uIexjR3MzES6v3N8VSs2AQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isReadyOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rEklzvuNck+Iykp507HKNA": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_ElementCache_GetTextPropertyVar.value;
}
},
"YLtpCnxAJkWt0DCHBnFs5w": {
getter: function (varBag, idService) {
return varBag.vars.value.userInformationInLocal;
}
},
"7QpQWlWzv0+3NeZx1+CvQQ": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"TeM2qBbmSEaGnSYJjl1WGA": {
getter: function (varBag, idService) {
return varBag.outVars.value.userInformationOut;
}
},
"VN+OY7OnbUS84Zd1RA_52A": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeAppManager_UserExtendedVar.value;
}
},
"kVM2AVr5pUC9z+M5Gem_Cg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"x+yhhKdbV0WuGgoATLrv5g": {
getter: function (varBag, idService) {
return varBag.vars.value.dataJSONInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XxwAYSrHdkaYQTsIzaBf+w": {
getter: function (varBag, idService) {
return varBag.vars.value.idpProviderIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Okp8Q+y+4kK7IlKfLQ5GXA": {
getter: function (varBag, idService) {
return varBag.outVars.value.availableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"yfn734avbEuOdY6Te1gxnA": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"ms2Q33A6lEGauhqcEuEFRQ": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_ElementCache_GetObjPropertyVar.value;
}
},
"Ye4U9QdoXUWib7_ukhlc0Q": {
getter: function (varBag, idService) {
return varBag.vars.value.outSystems_OriginalAppCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"y3ksCKd9d0m90ZT09r7Ejw": {
getter: function (varBag, idService) {
return varBag.vars.value.isResetPasswordInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"sHRTBaIGcU2v97lq06a0Pg": {
getter: function (varBag, idService) {
return varBag.vars.value.confirmationDialog_ResetPasswordIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iOo_GpaDP0SeyR3Rdobrjg": {
getter: function (varBag, idService) {
return varBag.vars.value.appCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6WI0PbIH6k2p4Ezu1huuPQ": {
getter: function (varBag, idService) {
return varBag.inAppBrowser_CanLaunchInAppVar.value;
}
},
"k2YMtt4ZlkGM_Gl1+02gVw": {
getter: function (varBag, idService) {
return varBag.appManager_GetAuthorizeURL_WrapperVar.value;
}
},
"wi0V8cFCLUOBrjZ1+jG+Fw": {
getter: function (varBag, idService) {
return varBag.checkNetworkCommunicationVar.value;
}
},
"VTp26xITbE2II7GuvMSrqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.responseInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Tyv+tBshBUaO+Sw7r5slvw": {
getter: function (varBag, idService) {
return varBag.parseFirevaseEventValueVar.value;
}
},
"w+8h4FTg6UeQnQhfxO0yTg": {
getter: function (varBag, idService) {
return varBag.fRD_UserCallback_GetVar.value;
}
},
"9PkR3RI_CEesE0z0QKs5XA": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"uPj6qh8+6kSrRz7Ry3lSNg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ksUzLDdwOEW0E6YMsakMhQ": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FsykEQXFpkG0jjCE+gYuaw": {
getter: function (varBag, idService) {
return varBag.azureAppInsights_CheckInitializedVar.value;
}
},
"K9C_0XGmI0ywnbRec7HUNg": {
getter: function (varBag, idService) {
return varBag.obj_UserOfflineCallbackVar.value;
}
},
"4raIbWMcNkuTUu8a_P3GXw": {
getter: function (varBag, idService) {
return varBag.vars.value.availableInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"lXak62QXFUWvNEaqYho1eA": {
getter: function (varBag, idService) {
return varBag.outVars.value.getAppIdOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sbpHNrOfS0qil4KSa_nJEA": {
getter: function (varBag, idService) {
return varBag.vars.value.firebaseEventInLocal;
}
},
"q9AmmNPN6EaFPt9Hk9ft3w": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"jZWFQTvMLkiXNnx0ue2naw": {
getter: function (varBag, idService) {
return varBag.jSUtils_String_SplitVar.value;
}
},
"mEJchxF1lECRkZaGnxFKjg": {
getter: function (varBag, idService) {
return varBag.listAnyVar.value;
}
},
"01BFdSlnIUyZlWJHLdEnpg": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeTroveFirebaseEventJSONVar.value;
}
},
"a38aOgJDsUehU_SgkIf6fQ": {
getter: function (varBag, idService) {
return varBag.parseAdvancedJSONJSResult.value;
}
},
"6ahDkuFVREq25JDBfjY+_g": {
getter: function (varBag, idService) {
return varBag.outVars.value.startedOnOut;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"LI7N3m5y+0udodNzA0PDtQ": {
getter: function (varBag, idService) {
return varBag.vars.value.chromeMajorVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"QRg7i_txykiJFd81hrn9qg": {
getter: function (varBag, idService) {
return varBag.vars.value.chromeMinorVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"QKvjhRgq_EKdbGV76HYakA": {
getter: function (varBag, idService) {
return varBag.vars.value.safariMajorVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"fJUlStrsa0mQvo1+oE+MtA": {
getter: function (varBag, idService) {
return varBag.vars.value.safariMinorVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"lL5k1EnlEUKBaSwIX+WchQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSupportedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"lKukwj9omk+Tj8Fj0PdBdw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAndroidOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"uzPChr7tWEKSdtjCiTug7A": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAppleOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ya_GNFZ8MUW9C7nGdrB14w": {
getter: function (varBag, idService) {
return varBag.appManager_GetDeviceInfo_IsNativeVar.value;
}
},
"iRxMWB9wc0y+CK71iP9BeA": {
getter: function (varBag, idService) {
return varBag.chromeVersionJSResult.value;
}
},
"s+1aha5+J0iBlgc3Ci8aYw": {
getter: function (varBag, idService) {
return varBag.nativeChromeVersionJSResult.value;
}
},
"O9VvsZ53cECDO1gZtBqjDQ": {
getter: function (varBag, idService) {
return varBag.chromeIOSJSResult.value;
}
},
"sVqasr7_kECUB4BiRGczSA": {
getter: function (varBag, idService) {
return varBag.parseVersions_SafariJSResult.value;
}
},
"FECZu3eU5ECV1nV36m1ajw": {
getter: function (varBag, idService) {
return varBag.safariVersionJSResult.value;
}
},
"nYCh_Sq26kCSTASwYbZ7UQ": {
getter: function (varBag, idService) {
return varBag.parseVersions_ChromeJSResult.value;
}
},
"f+qLABXVs0+45Z+Tyq+kBQ": {
getter: function (varBag, idService) {
return varBag.vars.value.redirectPathVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7CVcvytws0KdETRdoUpzRA": {
getter: function (varBag, idService) {
return varBag.outVars.value.redirectURIOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XE7dE8h4SUOiqXh4YVQ9Ag": {
getter: function (varBag, idService) {
return varBag.jSUtils_BuildAbsoluteURLVar.value;
}
},
"been9SiCS0KLGVdUXiegfw": {
getter: function (varBag, idService) {
return varBag.vars.value.alreadyExistVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"s0WMdtETI0SGoaY1A02HDA": {
getter: function (varBag, idService) {
return varBag.vars.value.pin_LocalStorage_ItemInLocal;
}
},
"nqH4iBWICU+24cO7YI2HRw": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_LocalStorage_GetItemVar.value;
}
},
"Tyyn62ayME6aUtT152ZBHQ": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"iX7RLKY+aE2jJnz+JXAqwA": {
getter: function (varBag, idService) {
return varBag.jSONDeserializePIN_LocalStorageVar.value;
}
},
"+2HHRrolU0uhp++Dg2BOiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.functionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"VO569XSja02XuNGM2fxaUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.pageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"f0Y3QcHZo0WoTkaKrU9NHQ": {
getter: function (varBag, idService) {
return varBag.vars.value.configInLocal;
}
},
"DMfdAaI5dEC+coCQQ6PoBA": {
getter: function (varBag, idService) {
return varBag.appManager_AfterInitializeVar.value;
}
},
"Jq+rc6gQF0iQRzJwb6zyQA": {
getter: function (varBag, idService) {
return varBag.appManager_GetDeviceContextVar.value;
}
},
"bOA8glFimEK5FtwuhXMuYA": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_ElementCache_GetObjPropertyVar.value;
}
},
"l2ROkNG+REiDOgc3NVsb5A": {
getter: function (varBag, idService) {
return varBag.appManager_GetAppIdVar.value;
}
},
"Oz+tlFhPLEKFl1iq7HmtZw": {
getter: function (varBag, idService) {
return varBag.jSUtils_RunFunc_WithTextResultVar.value;
}
},
"iD5F2cQiKUWPUZMLLdROhA": {
getter: function (varBag, idService) {
return varBag.pIN_CheckVar.value;
}
},
"btsV6TDczUy6XPcnabZtVA": {
getter: function (varBag, idService) {
return varBag.jSUtils_BuildAbsoluteURLVar.value;
}
},
"i2BXfffTn0y3in4KtJ7crA": {
getter: function (varBag, idService) {
return varBag.vars.value.appNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xTRgiDiKC0ezOIkHcSw9wA": {
getter: function (varBag, idService) {
return varBag.vars.value.userIdVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"a8L+ZZpS2kOnMw2p0QjsUQ": {
getter: function (varBag, idService) {
return varBag.appManager_SynchAppContextVar.value;
}
},
"+n7YnIuWsEi1OcM_LCDhjg": {
getter: function (varBag, idService) {
return varBag.appManager_GetAppIdVar.value;
}
},
"z0S4vXqttUu0FTvUllDukw": {
getter: function (varBag, idService) {
return varBag.appManager_GetConfigurationVar.value;
}
},
"LJn79UU300yQMSBsiMFdzA": {
getter: function (varBag, idService) {
return varBag.appManager_GetDeviceContextVar.value;
}
},
"QCIc_xV7h0mN37+4vYB7ZQ": {
getter: function (varBag, idService) {
return varBag.firebaseSignOutVar.value;
}
},
"I75xYC0PLEaGqbg61fqXtQ": {
getter: function (varBag, idService) {
return varBag.vars.value.digit1Var;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"z0EnYfa6akmf_kcH2RwAmQ": {
getter: function (varBag, idService) {
return varBag.vars.value.digit2Var;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"h+dZBQhdRUGo4f2L+1iopA": {
getter: function (varBag, idService) {
return varBag.vars.value.digit3Var;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"1NvF9ttj7kusgutwM5uUFQ": {
getter: function (varBag, idService) {
return varBag.vars.value.digit4Var;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"6_hyTUoSA02S9qRIPSwIbA": {
getter: function (varBag, idService) {
return varBag.vars.value.pinCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iTP0UMfl_kisVcPX_pP82Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.isValidOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HyLBVakjIU+z_6+2KSIEpQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.messageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2idjyog7Q0SLxjCJw2bqgQ": {
getter: function (varBag, idService) {
return varBag.vars.value.objectInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"dzUgBCxvEkSzwKzX4ZEx3w": {
getter: function (varBag, idService) {
return varBag.outVars.value.versionNumberOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4HWotZJaFkyQ5_UOvVMx0A": {
getter: function (varBag, idService) {
return varBag.vars.value.triedToClearCacheVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gJbPNqylO0W_r9XGCEQZAQ": {
getter: function (varBag, idService) {
return varBag.vars.value.azureURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"c+8IqfuyvUWZ0Mk1bTHRSw": {
getter: function (varBag, idService) {
return varBag.vars.value.appManager_CallbackInLocal;
}
},
"XMwSIa0S_UmOCYYC2m1Ulw": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"Op4URf4CqEGLs41ATLhS6Q": {
getter: function (varBag, idService) {
return varBag.vars.value.pageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"su9BPCZ9xEaaQg5mTCB1Ow": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsAutoRedirectInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vz3MkE8H5UqvJ12LErJ8TQ": {
getter: function (varBag, idService) {
return varBag.jSUtils_BuildAbsoluteURLVar.value;
}
},
"vhg18wTTjkOxrXYIZxDrdQ": {
getter: function (varBag, idService) {
return varBag.appManager_GetAppIdVar.value;
}
},
"iEc5AxfH5k+fn5uAPdFeTA": {
getter: function (varBag, idService) {
return varBag.outVars.value.appManager_MobileContextOut;
}
},
"X4IGLj7G1Eaksj7eyMFAmQ": {
getter: function (varBag, idService) {
return varBag.vars.value.eventAndBrowserInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"ukh2LHN3EkuNHSMBM82x2w": {
getter: function (varBag, idService) {
return varBag.handleTargetBlankLinksJSResult.value;
}
},
"u5wbocZb0kOK8zt4HSUsWA": {
getter: function (varBag, idService) {
return varBag.vars.value.destinationURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DLfdLpxVXkS8n8SoCV63Fw": {
getter: function (varBag, idService) {
return varBag.allowLoadAfterBeforeLoadJSResult.value;
}
},
"Kw4ZSKzFdkGjnshAQTLzjg": {
getter: function (varBag, idService) {
return varBag.outVars.value.environmentOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"A0SLZwwPJkGs8zLx9X4IHQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isLockedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"JTOeIznQLEiwknY2MMCwSQ": {
getter: function (varBag, idService) {
return varBag.vars.value.errorDescriptionInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yYDxecPRP0iyxNPXWu8wZA": {
getter: function (varBag, idService) {
return varBag.outVars.value.b2C_ErrorTypeIdOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LZkjUH1D_UWUpO66Bx2KjA": {
getter: function (varBag, idService) {
return varBag.outVars.value.uRLOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QfJU2hjMhk+J8b5cK_t4oQ": {
getter: function (varBag, idService) {
return varBag.vars.value.eventAndBrowserInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"8zRJ48ofVUqG+FtusJhttw": {
getter: function (varBag, idService) {
return varBag.maybeOpenNewTabJSResult.value;
}
},
"osbIlFqF30uAl_4cqiEHKw": {
getter: function (varBag, idService) {
return varBag.outVars.value.enabledOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"KnzmcrjDaEGpqYDRX4h1yA": {
getter: function (varBag, idService) {
return varBag.preventRerenderOnClientVarUpdateJSResult.value;
}
},
"V26ogmsWS06DcU1DOwVLZA": {
getter: function (varBag, idService) {
return varBag.persistSomeClientVariablesAfterLogoutJSResult.value;
}
},
"0Iljm6V_gk2CqNA4b_Wdow": {
getter: function (varBag, idService) {
return varBag.vars.value.textListVar;
}
},
"btzJeVZHAE6n2VBthn7TvA": {
getter: function (varBag, idService) {
return varBag.vars.value.permissionNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"w3MPQ5_5akumc9UE+t4wcQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasPermissionOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"PkDwFLn1W0WBUuXKyUOfiQ": {
getter: function (varBag, idService) {
return varBag.textList2Var.value;
}
},
"J8h7SG90H0if5XpDpIVN6Q": {
getter: function (varBag, idService) {
return varBag.jSONDeserializePermissionListVar.value;
}
},
"53T2TRYmnk6Z4YGdwaa5gg": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"q5VkRPSjl0iYdF3sJRLuSw": {
getter: function (varBag, idService) {
return varBag.vars.value.configInLocal;
}
},
"L3E4GPurnk6j0vkqsVFYnw": {
getter: function (varBag, idService) {
return varBag.vars.value.forceAskForCredentialsInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jmPIjyAxtUm1fMWk6BuehQ": {
getter: function (varBag, idService) {
return varBag.vars.value.includeOpenIdTokenInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1hX7+_jqTEeGf6VxfKYO2g": {
getter: function (varBag, idService) {
return varBag.vars.value.oAuth2EndpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wQ5RscZWmEmtYdUdMMMscw": {
getter: function (varBag, idService) {
return varBag.outVars.value.authorizeURLOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"j_MFapgII0ybrRuOXClyYQ": {
getter: function (varBag, idService) {
return varBag.obj_UserPendingPingCallbackVar.value;
}
},
"hUPgYvnB1ES9qvTRcm3AZg": {
getter: function (varBag, idService) {
return varBag.vars.value.projectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QoqjG+xg2EGAIXu8UO8yXA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isInitializedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4yKQOAIHZkSQZMcnQDAX5w": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"gGLY9OLB3EiForANTKuHXA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WgAEAnXLW0+cW8kN48tonw": {
getter: function (varBag, idService) {
return varBag.outVars.value.valueOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NwlYzNqMqk2_Ekh_zd1NaQ": {
getter: function (varBag, idService) {
return varBag.jSUtils_ElementCache_GetTextPropertyVar.value;
}
},
"fmfeHBJbLUqPlrxXrdYK7A": {
getter: function (varBag, idService) {
return varBag.vars.value.isRegisteringInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cTWSLIaTn0qCBYkQSHwumw": {
getter: function (varBag, idService) {
return varBag.outVars.value.memberIdOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zWY_t3kyJ0evdosfYsq0Zg": {
getter: function (varBag, idService) {
return varBag.vars.value.azureInsights_EventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"G3mAF9faLEipoVXTXudN3g": {
getter: function (varBag, idService) {
return varBag.vars.value.jSON_EventInfoInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_yxQNaoxN0GvGd3wW__o6g": {
getter: function (varBag, idService) {
return varBag.vars.value.eventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fYGkCYWq0Eyi0laTmzeTFw": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"GZoyaIKu6kqD__27vspW7g": {
getter: function (varBag, idService) {
return varBag.outVars.value.destroyCallbackFunctionOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"1g0nhOKNskWAWoeCZBOu3A": {
getter: function (varBag, idService) {
return varBag.jSUtils_CustomEvent_RegisterHandlerVar.value;
}
},
"caFl42mkH0qiKs1K3IfZYA": {
getter: function (varBag, idService) {
return varBag.vars.value.appManager_MobileContextInLocal;
}
},
"ZScRNAMueUu_0tdHGGFbBg": {
getter: function (varBag, idService) {
return varBag.vars.value.espaceVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EU8ci7CuCEOHS1FaJvRAbQ": {
getter: function (varBag, idService) {
return varBag.appManager_GetConfigurationVar.value;
}
},
"QN82PqsU502+IWP3IKMf2A": {
getter: function (varBag, idService) {
return varBag.vars.value.onOnline_CallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"e4Htno6ruESLakWXywPpBw": {
getter: function (varBag, idService) {
return varBag.vars.value.onOffline_CallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"7Hn5LaxQAUi7VJxxAsr6rQ": {
getter: function (varBag, idService) {
return varBag.vars.value.onPendingPing_CallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"uwKj5CVAU02jH91fvnK8gg": {
getter: function (varBag, idService) {
return varBag.vars.value.functionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Ww8bfJS+a0+HFbnkALlvwg": {
getter: function (varBag, idService) {
return varBag.vars.value.permissionListInLocal;
}
},
"c_Tof6lzc0mFCMpBFvLlbw": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"Scm52LGWx0Gub585u0AZgA": {
getter: function (varBag, idService) {
return varBag.vars.value.destinationURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+khuHTbGMESTWPI86PaNPw": {
getter: function (varBag, idService) {
return varBag.redirectInAppBrowserJSResult.value;
}
},
"1lCpwGRkj062pIPC6zpNvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SgPAVKoNN0OCWVJdYLwQFw": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tmvt8Vz3H0m47bUq1K+VOg": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLToOpenInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_+rZB1Fe6kKZod0gQUeyLg": {
getter: function (varBag, idService) {
return varBag.openInAppBrowserAndWaitJSResult.value;
}
},
"ohIBDrygEk6Ij44lHessQA": {
getter: function (varBag, idService) {
return varBag.vars.value.resetPasswordPopupIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"W54iqplCMkaJJXH2oVRrTw": {
getter: function (varBag, idService) {
return varBag.vars.value.loginOperationGUIDInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_4x6y8sX3EyYvlfFf214ug": {
getter: function (varBag, idService) {
return varBag.outVars.value.isCancelledOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wpdfs0LFCkmrfNURYejYyg": {
getter: function (varBag, idService) {
return varBag.appManager_GetAppIdVar.value;
}
},
"luPbxjNsLE+UcxCrpTqrSw": {
getter: function (varBag, idService) {
return varBag.deviceAwarenessConfirmationVar.value;
}
},
"PKcvypGSQ0mkOM1zo43Kvg": {
getter: function (varBag, idService) {
return varBag.appManager_GetDeviceContextVar.value;
}
},
"7J_YW5wpGkO_BXhuIuPtXQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.canLaunchOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"qdV25KtpkE6+ftQpp6joXw": {
getter: function (varBag, idService) {
return varBag.checkInAppBrowserAvailabilityJSResult.value;
}
},
"GYSNNnwh8kunrtZw6yRAUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackActionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"SuRhC7PJe0mgq8ZWeG7Q5w": {
getter: function (varBag, idService) {
return varBag.outVars.value.canContinueOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"PLFVd7GwTUqQ9Jo58TpIiw": {
getter: function (varBag, idService) {
return varBag.navigationHandlerCheckJSResult.value;
}
},
"UrvYBw+y+Eqsc3IPdn04BA": {
getter: function (varBag, idService) {
return varBag.outVars.value.configOut;
}
},
"1UQgoX6OCkiBWo7nKyYu7g": {
getter: function (varBag, idService) {
return varBag.appManager_SynchAppContextInternalVar.value;
}
},
"Im42MqBztEm9qMvyM4RXWQ": {
getter: function (varBag, idService) {
return varBag.vars.value.responseURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wBxgvZ45NUqwkmTCL3qszw": {
getter: function (varBag, idService) {
return varBag.outVars.value.authorizationCodeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RG8mmLuIjEujT0LgguUCVg": {
getter: function (varBag, idService) {
return varBag.outVars.value.idTokenOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+c6PVyHIj0+s9iqI0eQFRQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.invalidResponseUrlOut;
}
},
"N0nb+hP2w0ijLKJl0POpJw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"NkK5E439g0am8jFzsnKwbQ": {
getter: function (varBag, idService) {
return varBag.appManager_IndentifyErrorVar.value;
}
},
"UbR8x2KTQ0SsG6TfcEH2Jw": {
getter: function (varBag, idService) {
return varBag.parseResponseJSResult.value;
}
},
"U23BEfrHJE2CJDCdQUeOyw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isNativeOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"M5T5Ev+Vz0ehE+FxxZm6qA": {
getter: function (varBag, idService) {
return varBag.appManager_SynchAppContextVar.value;
}
},
"9g+uWbLmQkyAJLHz95qi7w": {
getter: function (varBag, idService) {
return varBag.interceptExceptionsJSResult.value;
}
},
"fhQFweER+0mRA9uFZ6075w": {
getter: function (varBag, idService) {
return varBag.vars.value.appManager_ClientConfigInLocal;
}
},
"KEf++JADRUefCMrjMQiY9A": {
getter: function (varBag, idService) {
return varBag.fRD_IsInitializedVar.value;
}
},
"u9rCLHzdokiZhOmZt1vxDw": {
getter: function (varBag, idService) {
return varBag.getFRD_CallbackJSResult.value;
}
},
"+PlxzT26u0Kf1coKKJB1hg": {
getter: function (varBag, idService) {
return varBag.vars.value.textListVar;
}
},
"F9wDNJnHlkOl_swpba4cEw": {
getter: function (varBag, idService) {
return varBag.vars.value.licenseNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fPllU4uIt0GD8XA9ZKM54A": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasPermissionOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2woAGn5vX0yanRZQl0iH9A": {
getter: function (varBag, idService) {
return varBag.textList2Var.value;
}
},
"2hmkK2za7UeljfUAyeGYYQ": {
getter: function (varBag, idService) {
return varBag.jSONDeserializePermissionListVar.value;
}
},
"5rXreFWwp0qTMupAyhQQAA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"8QKI+xed5EW3ysd0_0EB5A": {
getter: function (varBag, idService) {
return varBag.vars.value.appManager_CallbackVar;
}
},
"VBsEIoYvaE2i2uQds5avBQ": {
getter: function (varBag, idService) {
return varBag.vars.value.loginTOTPVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"m5+7zWVl_0W_ld8ogHSLqA": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"H31okvZlG0WhGlC5w7P3jQ": {
getter: function (varBag, idService) {
return varBag.vars.value.resetPasswordPopupIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hSmXsG0gVEiXW++B0zpNhg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"O0I3u5ltGEGWohHOiD0BxA": {
getter: function (varBag, idService) {
return varBag.appManager_LoginVar.value;
}
},
"UUPbElBi80290py+UQnEvQ": {
getter: function (varBag, idService) {
return varBag.appManager_GetAppIdVar.value;
}
},
"A50OIHfeX0mCMJTNTy0iIw": {
getter: function (varBag, idService) {
return varBag.appManager_GetCallbackURLVar.value;
}
},
"ihteWANNlEGVptrVt0fvog": {
getter: function (varBag, idService) {
return varBag.appManager_GetDeviceContextVar.value;
}
},
"aWHnabJRckCPi9xRmnl1AA": {
getter: function (varBag, idService) {
return varBag.pIN_CheckVar.value;
}
},
"dwiZgXlu7UOQP5HL6emvtg": {
getter: function (varBag, idService) {
return varBag.appManager_HandleAuthorizationResponseURLVar.value;
}
},
"Vlm6uvoHxUiacdbc2cD7zA": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_ElementCache_GetObjPropertyVar.value;
}
},
"EFCP0ovtAEehYZV52+rByQ": {
getter: function (varBag, idService) {
return varBag.appManager_HandleDeviceAwarenessPopUpVar.value;
}
},
"IV2w1rMbXE+qt1O6mvKJFA": {
getter: function (varBag, idService) {
return varBag.getResetPasswordPopUpIdVar.value;
}
},
"VffT3+L9G0uTQDbLoUtiSA": {
getter: function (varBag, idService) {
return varBag.jSUtils_RunFunc_WithTextResultVar.value;
}
},
"oxK844JI8EChNENekk0t0w": {
getter: function (varBag, idService) {
return varBag.appManager_TryDeserializeMessageWithTitleVar.value;
}
},
"soxA6kk5RUONWqPIbA+94w": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"7zA3VjxQkUOUmaRLJoIiwQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
}
},
"Dfkq72jY+kuGZf6PLJkMTg": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"+xsId4D6IkqeovU_z6dQdg": {
getter: function (varBag, idService) {
return varBag.outVars.value.configOut;
}
},
"csL_3Buo50+UTjYUs6JLow": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"Dg4lLv+ObEmy9roNQ+d60g": {
getter: function (varBag, idService) {
return varBag.appManager_SynchAppContextVar.value;
}
},
"cmCEsUNTE0KnF7K9YLXP5A": {
getter: function (varBag, idService) {
return varBag.outVars.value.externalIdOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wR8dLcCxF0ORp3jQ0tOz9g": {
getter: function (varBag, idService) {
return varBag.outVars.value.usernameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AbWTi8sArUuCzH4ZP9N1+w": {
getter: function (varBag, idService) {
return varBag.outVars.value.fCMTokenOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4vfveEpAwkCdAYZNC3dmDg": {
getter: function (varBag, idService) {
return varBag.vars.value.isLockedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"p+imwzKAmUaIBTlRFNTucA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSupportedNativeVersionOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vW1ETLIpGEevNVEUML+hmA": {
getter: function (varBag, idService) {
return varBag.getDeviceInfo_IsNativeVar.value;
}
},
"ZpNv5z75UUuvCFn_nWCF9Q": {
getter: function (varBag, idService) {
return varBag.getVersionNumberVar.value;
}
},
"lcwdKqZiCkukblkH6+1Szw": {
getter: function (varBag, idService) {
return varBag.parseVersionsJSResult.value;
}
},
"lqnoAWRL00yhAp3sGg9rxg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getFirebase_ProjectId();
},
dataType: OS.DataTypes.DataTypes.Text
},
"feHlAgsgrkeSwaRxluhV6g": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getOutSystems_Environment();
},
dataType: OS.DataTypes.DataTypes.Text
},
"qJM4Chq7TUyoQfDv7_erIQ": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getDeviceInfo_Platform();
},
dataType: OS.DataTypes.DataTypes.Text
},
"8YF0Df90jk+CKvl4kQve0A": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAppManager_OAuth_EndPoint();
},
dataType: OS.DataTypes.DataTypes.Text
},
"etlqDz90lkyPNh5vToRl_w": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getMinWebViewVersion_Safari();
},
dataType: OS.DataTypes.DataTypes.Text
},
"4BcWEWvHTk2h3psxeZoyng": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getOutSystems_LastURL();
},
dataType: OS.DataTypes.DataTypes.Text
},
"m0EKHZ6SrkmNrlegg1gARw": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAppManager_ContactBaseId();
},
dataType: OS.DataTypes.DataTypes.Text
},
"LZGPHRPj+k2HyDYmxnn8ZA": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getFrontEgg_AppId();
},
dataType: OS.DataTypes.DataTypes.Text
},
"fLa3I0Niv0ykkJkW8w0mzQ": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getLicenses_List();
},
dataType: OS.DataTypes.DataTypes.Text
},
"s68TJNWpEUq7uHS9zeztAg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getDeviceInfo_UserAgent();
},
dataType: OS.DataTypes.DataTypes.Text
},
"X3w2JU4Glk24q96hshQFpA": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAppManager_UserExternalId();
},
dataType: OS.DataTypes.DataTypes.Text
},
"wv8gL7MiVU2kWdG69ExaHg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAzureB2C_ClientId();
},
dataType: OS.DataTypes.DataTypes.Text
},
"c4IlOEWPfkCr1YVI7qbKlA": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getDeviceInfo_MobileVersion();
},
dataType: OS.DataTypes.DataTypes.Text
},
"jo8VPD37UkqBWhs5WhpVDQ": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getPIN_FingerprintReaderAvailable_IsPersistent();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"kAUERh3fq06hCDHQkW9sgQ": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getDeviceInfo_MobileBuild();
},
dataType: OS.DataTypes.DataTypes.Text
},
"I68NRxY3i0uqfw0T3d+oEg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getStreamline_SerialNumber();
},
dataType: OS.DataTypes.DataTypes.Text
},
"hN12TRPkj0CTlHvdNP6zdw": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAppManager_MemberId();
},
dataType: OS.DataTypes.DataTypes.Text
},
"3R37Vc9O_0+xmFRrlCgSwA": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getFirebase_RealtimeDatabase_Token();
},
dataType: OS.DataTypes.DataTypes.Text
},
"2A0gWOyxmEStj8hzhrbxWA": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAppManager_AppBaseURL();
},
dataType: OS.DataTypes.DataTypes.Text
},
"APbTXfzDNU6yFnJMHP549w": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getDeviceInfo_UUID();
},
dataType: OS.DataTypes.DataTypes.Text
},
"PBu2X_Hq4UCXqmdoPnXlzg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getPIN_IsLocked();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"pi6+ZJqS8EaZEiKfuf6xxA": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAppManager_UserExtended();
},
dataType: OS.DataTypes.DataTypes.Text
},
"zbWqZq3Gxkm9jh3BCeaVOA": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getPermissions_List();
},
dataType: OS.DataTypes.DataTypes.Text
},
"xTZzZ2MmcE2Uzj0J0Silpw": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getPIN_IsRegistering();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"RuAUaCgBXUavRZzGNzqkKQ": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getOutSystems_RuntimeVersion();
},
dataType: OS.DataTypes.DataTypes.Text
},
"ivRLcD0BxUG+hBIpE1mmZg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getDeviceInfo_IsRunningAsPWA();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"f88ifXrRN0aXWqECP+ycXg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAppManager_EspaceName();
},
dataType: OS.DataTypes.DataTypes.Text
},
"zkIxfm3lrEe15ahsmrg8zQ": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getFirebase_CloudMessage_Token();
},
dataType: OS.DataTypes.DataTypes.Text
},
"3wJqgEZ3pU6eHcb9L+IRjQ": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getStreamline_TOTPOnLogin();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"abGqkNwfREy4UEMqQMpo8g": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getMinNativeAppVersion();
},
dataType: OS.DataTypes.DataTypes.Text
},
"PBG2lEntK02nGauyX8NrOA": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getPIN_Use();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ECLPlTRU5UGrwVEFL+TNog": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getStreamline_IsInstalled();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ik_tluT24kaeLQm13x_Q9Q": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAzureB2C_ResetPassPolicy();
},
dataType: OS.DataTypes.DataTypes.Text
},
"6+mPmqQl002u5nqB4grFmw": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getDeviceInfo_PackageName();
},
dataType: OS.DataTypes.DataTypes.Text
},
"SgqLpIDQIEWMcJkkrZ8Cbw": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getPIN_EnforceOnReady();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"N1Q8p6vPuU2+qbZym5+yvQ": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAzureB2C_LoginPolicy();
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZiJ9rLt_9EKWObdK7kXSCg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getDeviceInfo_Browser();
},
dataType: OS.DataTypes.DataTypes.Text
},
"czqUrgM3gkSZ5tWzkmIzKQ": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getPIN_SessionInactivity_Seconds();
},
dataType: OS.DataTypes.DataTypes.Integer
},
"eTiur57nF0O97c9mPzq8Vg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getPIN_EnableFingerprint();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"lz0vtTqwi0SNErFVCx6ALg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getDeviceInfo_IsNative();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"zsgtwFN11kqKNPtkNhX1Pw": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getPIN_SessionInactivity_Use();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"G2Q7wnGJZEaCh881OWMNHQ": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getPIN_SessionInactivity_Navigate();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"3OVQybhcM0WYtmd2lZNk1w": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAppManager_CustomCallback();
},
dataType: OS.DataTypes.DataTypes.Text
},
"RQjE0Wpa0ka5t1ORFNeKeg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getFirebase_RealtimeDatabase_Use();
},
dataType: OS.DataTypes.DataTypes.Text
},
"NO3z0v8x10mQr6pNgttSCg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAppManager_Username();
},
dataType: OS.DataTypes.DataTypes.Text
},
"v5oN3PKPNkKu5p3dWW_oCA": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getPIN_HasUnlocked();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rKyW3SXNWUKIx6LQSfG6MQ": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getFirebase_RealtimeDatabase_StartedOn();
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"jUMh4tHFf0ugMV+neS4lvA": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getFrontEgg_CodeVerifier();
},
dataType: OS.DataTypes.DataTypes.Text
},
"H7Ie41lOVku2lQyEWrvSRg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getMinWebViewVersion_Chrome();
},
dataType: OS.DataTypes.DataTypes.Text
},
"hFPm506EJUS03QJnCA6PLg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAzureInsights_Use();
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"hbdQ78LIJ0692v3c5KTUZg": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAppManager_IdPProviderId();
},
dataType: OS.DataTypes.DataTypes.Integer
},
"GLjM9xMygki1iMxq0NrZiA": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getAppManager_DelayedMessage();
},
dataType: OS.DataTypes.DataTypes.Text
},
"4FiF+Ph21ESFbBPufUSR_A": {
getter: function (varBag, idService) {
return UBT_AppManagerClientVariables.getFrontEgg_CodeChallenge();
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
