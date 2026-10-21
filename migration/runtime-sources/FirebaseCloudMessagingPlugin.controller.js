define("FirebaseCloudMessagingPlugin.controller$BuildInternalDeepLink", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "FirebaseCloudMessagingPlugin.model$ExtraDataElementList"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.buildInternalDeepLink$Action = function (screenNameIn, parameterListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.BuildInternalDeepLink$vars"))());
vars.value.screenNameInLocal = screenNameIn;
vars.value.parameterListInLocal = parameterListIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.BuildInternalDeepLink$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:Ox2xjanE4kuTRMMKuKqotA:/ClientActionFlows.Ox2xjanE4kuTRMMKuKqotA:PlAytT_p1wdspklznpEIaA", "FirebaseCloudMessagingPlugin", "BuildInternalDeepLink", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:BiyAALlfF0e5pqSIZwrXHQ", callContext.id);
// Foreach ParameterList
callContext.iterationContext.registerIterationStart(vars.value.parameterListInLocal);
try {var parameterListIterator = callContext.iterationContext.getIterator(vars.value.parameterListInLocal);
var parameterListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:pvCyHWnx902SDUaNJ70wvQ", callContext.id) && (parameterListIndex < vars.value.parameterListInLocal.length))) {
parameterListIterator.currentRowNumber = parameterListIndex;
// AppendDeepLinkParams
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:ruzbSuMYCEyW+rtKoZaClQ", callContext.id);
// DeepLinkParams = DeepLinkParams + If + ParameterList.Current.Key + "=" + ParameterList.Current.Value
vars.value.deepLinkParamsVar = ((((vars.value.deepLinkParamsVar + (((vars.value.parameterListInLocal.getCurrentRowNumber(callContext.iterationContext) === 0)) ? ("?") : ("&"))) + vars.value.parameterListInLocal.getItem(parameterListIndex.valueOf()).keyAttr) + "=") + vars.value.parameterListInLocal.getItem(parameterListIndex.valueOf()).valueAttr);
parameterListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.parameterListInLocal);
}

OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:mRZRJJNN_UauxhT3GwigcA", callContext.id);
// DeepLink = ScreenName + DeepLinkParams
outVars.value.deepLinkOut = (vars.value.screenNameInLocal + vars.value.deepLinkParamsVar);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:m5g3H+AVCkKpbz56RX5D6Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:Ox2xjanE4kuTRMMKuKqotA", callContext.id);
}

};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.BuildInternalDeepLink$vars", [{
name: "ScreenName",
attrName: "screenNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ParameterList",
attrName: "parameterListInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new FirebaseCloudMessagingPluginModel.ExtraDataElementList();
},
complexType: FirebaseCloudMessagingPluginModel.ExtraDataElementList
}, {
name: "DeepLinkParams",
attrName: "deepLinkParamsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.BuildInternalDeepLink$outVars", [{
name: "DeepLink",
attrName: "deepLinkOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FirebaseCloudMessagingPluginController.default.clientActionProxies.buildInternalDeepLink$Action = function (screenNameIn, parameterListIn) {
screenNameIn = (screenNameIn === undefined) ? "" : screenNameIn;
parameterListIn = (parameterListIn === undefined) ? new FirebaseCloudMessagingPluginModel.ExtraDataElementList() : parameterListIn;
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.buildInternalDeepLink$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(screenNameIn, OS.DataTypes.DataTypes.Text), parameterListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DeepLink: OS.DataConversion.JSNodeParamConverter.to(actionResults.deepLinkOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("FirebaseCloudMessagingPlugin.controller$CheckCloudMessagingPlugin", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$CheckCloudMessagingPlugin.PluginIsLoadedJS", "CommonPlugin.controller$IsCordovaDefined", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_CheckCloudMessagingPlugin_PluginIsLoadedJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.checkCloudMessagingPlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var pluginIsLoadedJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.CheckCloudMessagingPlugin$outVars"))());
varBag.callContext = callContext;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.pluginIsLoadedJSResult = pluginIsLoadedJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:c7WJ7GA2qkaZyY8kw+y63Q:/ClientActionFlows.c7WJ7GA2qkaZyY8kw+y63Q:HIPwpxIwxVLPauj2q2AVmQ", "FirebaseCloudMessagingPlugin", "CheckCloudMessagingPlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:Ih+BZUeX2EiAlqSSVM1Nuw", callContext.id);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:vt5Yglaa4UmyFyx3ZXzZwg", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:uq_cn17VYkCfpHnj3aH6Ug", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:i6gCk+AILUOEOfpeYbkj7g", callContext.id);
// A plugin that integrates with the Firebase Analytics service and enables logging of custom events and user properties. Version 1.0.0
pluginIsLoadedJSResult.value = controller.safeExecuteJSNode(FirebaseCloudMessagingPlugin_controller_CheckCloudMessagingPlugin_PluginIsLoadedJS, "PluginIsLoaded", "CheckCloudMessagingPlugin", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.CheckCloudMessagingPlugin$pluginIsLoadedJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:ysqfhwamyUeGjAuBaf3QDg", callContext.id) && pluginIsLoadedJSResult.value.isAvailableOut)) {
// Set Result
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:w9xELnjbEES8sUu2SvT0oQ", callContext.id);
// IsAvailable = True
outVars.value.isAvailableOut = true;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:mdS1D76fBECl4tKXaV_O7A", callContext.id);
} else {
// Set Output
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:MFK70G9y9UaZ2c8Uvnz2nw", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:MFK70G9y9UaZ2c8Uvnz2nw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = 2
outVars.value.errorOut.errorCodeAttr = "2";
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:MFK70G9y9UaZ2c8Uvnz2nw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "Plugin is not loaded."
outVars.value.errorOut.errorMessageAttr = "Plugin is not loaded.";
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:KOEapyOT+UuocOIpgqDObw", callContext.id);
}

} else {
// Set Output
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:BGQGbTFi3UyVLZQic5ZIwg", callContext.id);
// IsAvailable = False
outVars.value.isAvailableOut = false;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:BGQGbTFi3UyVLZQic5ZIwg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = 1
outVars.value.errorOut.errorCodeAttr = "1";
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:BGQGbTFi3UyVLZQic5ZIwg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "cordova is not defined"
outVars.value.errorOut.errorMessageAttr = "cordova is not defined";
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:ZKCQ3FKcN069fgUxtbkYXw", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:c7WJ7GA2qkaZyY8kw+y63Q", callContext.id);
}

};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.CheckCloudMessagingPlugin$pluginIsLoadedJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.CheckCloudMessagingPlugin$outVars", [{
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
}]);
FirebaseCloudMessagingPluginController.default.clientActionProxies.checkCloudMessagingPlugin$Action = function () {
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.checkCloudMessagingPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$CheckCloudMessagingPlugin.PluginIsLoadedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsAvailable = !!cordova.plugins && !!cordova.plugins.OSFirebaseCloudMessaging;
};
});

define("FirebaseCloudMessagingPlugin.controller$ClearNotifications", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$ClearNotifications.ClearAllNotificationsJS", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_ClearNotifications_ClearAllNotificationsJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.clearNotifications$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var clearAllNotificationsJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.ClearNotifications$outVars"))());
varBag.callContext = callContext;
varBag.clearAllNotificationsJSResult = clearAllNotificationsJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:TqFmvNqNskC76AwGPmkGrw:/ClientActionFlows.TqFmvNqNskC76AwGPmkGrw:TJM3K8iZfXGDVOJDgBUi5g", "FirebaseCloudMessagingPlugin", "ClearNotifications", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:Eh06D+FOJky9pEO+Wx+dog", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:zTQrGZ7+20COucS9C4f1UQ", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_ClearNotifications_ClearAllNotificationsJS, "ClearAllNotifications", "ClearNotifications", {
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.ClearNotifications$clearAllNotificationsJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
clearAllNotificationsJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:2XG6whJHw0aWYuZNlGU02Q", callContext.id);
// Success = ClearAllNotifications.Success
outVars.value.successOut = clearAllNotificationsJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:2XG6whJHw0aWYuZNlGU02Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = ClearAllNotifications.ErrorCode
outVars.value.errorOut.errorCodeAttr = clearAllNotificationsJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:2XG6whJHw0aWYuZNlGU02Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = ClearAllNotifications.ErrorMessage
outVars.value.errorOut.errorMessageAttr = clearAllNotificationsJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:jqAkSySkhkmTcpSXDOpSzg", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:TqFmvNqNskC76AwGPmkGrw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:TqFmvNqNskC76AwGPmkGrw", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.ClearNotifications$clearAllNotificationsJSResult", [{
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
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.ClearNotifications$outVars", [{
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
FirebaseCloudMessagingPluginController.default.clientActionProxies.clearNotifications$Action = function () {
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.clearNotifications$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$ClearNotifications.ClearAllNotificationsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFirebaseCloudMessaging.clearNotifications(
    function () {
        $parameters.Success = true;
        $resolve();
    }, 
    function (error) {
        $parameters.Success = false;
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $resolve();
    }
);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$DeliveryMetricsExportToBigQueryEnabled", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$DeliveryMetricsExportToBigQueryEnabled.CallCordovaAPIJS", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_DeliveryMetricsExportToBigQueryEnabled_CallCordovaAPIJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.deliveryMetricsExportToBigQueryEnabled$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var callCordovaAPIJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.DeliveryMetricsExportToBigQueryEnabled$outVars"))());
varBag.callContext = callContext;
varBag.callCordovaAPIJSResult = callCordovaAPIJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:VKriNjGl4UmqvwDFocHL9Q:/ClientActionFlows.VKriNjGl4UmqvwDFocHL9Q:0BwGVLYMyuDBAacjGlwEAA", "FirebaseCloudMessagingPlugin", "DeliveryMetricsExportToBigQueryEnabled", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:ASNcUNs_MkGvyVjYrI59bQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:zGjn2Uy_ckuOOIfCHd9wXA", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_DeliveryMetricsExportToBigQueryEnabled_CallCordovaAPIJS, "CallCordovaAPI", "DeliveryMetricsExportToBigQueryEnabled", {
Enable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.DeliveryMetricsExportToBigQueryEnabled$callCordovaAPIJSResult"))();
jsNodeResult.enableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Enable, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
callCordovaAPIJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:43ptMgmnNkiIgO9Q62ND0g", callContext.id);
// Enable = CallCordovaAPI.Enable
outVars.value.enableOut = callCordovaAPIJSResult.value.enableOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:43ptMgmnNkiIgO9Q62ND0g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Success = CallCordovaAPI.Success
outVars.value.successOut = callCordovaAPIJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:43ptMgmnNkiIgO9Q62ND0g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = CallCordovaAPI.ErrorCode
outVars.value.errorOut.errorCodeAttr = callCordovaAPIJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:43ptMgmnNkiIgO9Q62ND0g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = CallCordovaAPI.ErrorMessage
outVars.value.errorOut.errorMessageAttr = callCordovaAPIJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:6lw22sbnQkGZrDu+OGU0Xg", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:VKriNjGl4UmqvwDFocHL9Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:VKriNjGl4UmqvwDFocHL9Q", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.DeliveryMetricsExportToBigQueryEnabled$callCordovaAPIJSResult", [{
name: "Enable",
attrName: "enableOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.DeliveryMetricsExportToBigQueryEnabled$outVars", [{
name: "Enable",
attrName: "enableOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
FirebaseCloudMessagingPluginController.default.clientActionProxies.deliveryMetricsExportToBigQueryEnabled$Action = function () {
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.deliveryMetricsExportToBigQueryEnabled$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Enable: OS.DataConversion.JSNodeParamConverter.to(actionResults.enableOut, OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$DeliveryMetricsExportToBigQueryEnabled.CallCordovaAPIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function onSuccess(result) {
    $parameters.Enable = result.toLowerCase() == "true";
    $parameters.Success = true;
    $resolve();
}
function onError(error) {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code;
    $parameters.ErrorMessage = error.message;
    $resolve();
}
cordova.plugins.OSFirebaseCloudMessaging.deliveryMetricsExportToBigQueryEnabled(onSuccess, onError);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$GetAPNsToken", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$GetAPNsToken.GetAPNsTokenJS", "CommonPlugin.controller$GetOperatingSystem", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_GetAPNsToken_GetAPNsTokenJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.getAPNsToken$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getOperatingSystemVar = new OS.DataTypes.VariableHolder();
var getAPNsTokenJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.GetAPNsToken$outVars"))());
varBag.callContext = callContext;
varBag.getOperatingSystemVar = getOperatingSystemVar;
varBag.getAPNsTokenJSResult = getAPNsTokenJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:s+Z7zYt3_Eq_d39g2sxDgA:/ClientActionFlows.s+Z7zYt3_Eq_d39g2sxDgA:RzTB7iMooF8vY0T1LibX1Q", "FirebaseCloudMessagingPlugin", "GetAPNsToken", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:jCLY+umdckCE+SkQoGzI9Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:vtCsf9BHnUC7a7fcYCZCZg", callContext.id);
// Execute Action: GetOperatingSystem
getOperatingSystemVar.value = CommonPluginController.default.getOperatingSystem$Action(callContext);

// Check if its iOS
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:Gro+pwA1K0q_XljkmparMw", callContext.id) && (getOperatingSystemVar.value.operatingSystemsIdOut === FirebaseCloudMessagingPluginModel.staticEntities.mobile_OperatingSystem.iOS))) {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:PwlmlcchMEywG6lyXuP2yw", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_GetAPNsToken_GetAPNsTokenJS, "GetAPNsToken", "GetAPNsToken", {
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.GetAPNsToken$getAPNsTokenJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
getAPNsTokenJSResult.value = results;
}).then(function () {
// Set Results
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:dR5ReJo48ESy3jODtfpeDw", callContext.id);
// Success = GetAPNsToken.Success
outVars.value.successOut = getAPNsTokenJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:dR5ReJo48ESy3jODtfpeDw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Token = GetAPNsToken.Result
outVars.value.tokenOut = getAPNsTokenJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:dR5ReJo48ESy3jODtfpeDw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = GetAPNsToken.ErrorCode
outVars.value.errorOut.errorCodeAttr = getAPNsTokenJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:dR5ReJo48ESy3jODtfpeDw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = GetAPNsToken.ErrorMessage
outVars.value.errorOut.errorMessageAttr = getAPNsTokenJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:tN42uunf5E6GVdrRPnd1XQ", callContext.id);
});
} else {
// Set Output
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:qv9nwEciHU6auosFonUM+w", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:qv9nwEciHU6auosFonUM+w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = "OS-PLUG-FCMS-0021"
outVars.value.errorOut.errorCodeAttr = "OS-PLUG-FCMS-0021";
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:qv9nwEciHU6auosFonUM+w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = "This method is only available on iOS."
outVars.value.errorOut.errorMessageAttr = "This method is only available on iOS.";
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:qv9nwEciHU6auosFonUM+w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Token = ""
outVars.value.tokenOut = "";
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:x7_bZCPeZ0KTAirRAtPlPQ", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:s+Z7zYt3_Eq_d39g2sxDgA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:s+Z7zYt3_Eq_d39g2sxDgA", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.GetAPNsToken$getAPNsTokenJSResult", [{
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
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.GetAPNsToken$outVars", [{
name: "Token",
attrName: "tokenOut",
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
}]);
FirebaseCloudMessagingPluginController.default.clientActionProxies.getAPNsToken$Action = function () {
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.getAPNsToken$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Token: OS.DataConversion.JSNodeParamConverter.to(actionResults.tokenOut, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$GetAPNsToken.GetAPNsTokenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFirebaseCloudMessaging.getAPNsToken(
    function (result) {
        $parameters.Success = true;
        $parameters.Result = result;
        $resolve();
    }, 
    function (error) {
        $parameters.Success = false;
        $parameters.Result = "";
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $resolve();
    }
);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$GetBadgeNumber", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$GetBadgeNumber.GetBadgeJS", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_GetBadgeNumber_GetBadgeJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.getBadgeNumber$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getBadgeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.GetBadgeNumber$outVars"))());
varBag.callContext = callContext;
varBag.getBadgeJSResult = getBadgeJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:UukxzRN3lUWfJDjHEhu35Q:/ClientActionFlows.UukxzRN3lUWfJDjHEhu35Q:6G9GQw1RC0m1iVADZt5Yig", "FirebaseCloudMessagingPlugin", "GetBadgeNumber", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:Q4pUZSO9cEe8ucybU+3sdQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:aUNQR+nzeUi2RE5qa0FKeA", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_GetBadgeNumber_GetBadgeJS, "GetBadge", "GetBadgeNumber", {
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.GetBadgeNumber$getBadgeJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
getBadgeJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:lMDdjHIrrESrYGvf3Zx76Q", callContext.id);
// Success = GetBadge.Success
outVars.value.successOut = getBadgeJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:lMDdjHIrrESrYGvf3Zx76Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = GetBadge.ErrorCode
outVars.value.errorOut.errorCodeAttr = getBadgeJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:lMDdjHIrrESrYGvf3Zx76Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = GetBadge.ErrorMessage
outVars.value.errorOut.errorMessageAttr = getBadgeJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:lMDdjHIrrESrYGvf3Zx76Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// BadgeNumber = GetBadge.Result
outVars.value.badgeNumberOut = getBadgeJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:sipx0Lazn0mlDOOBN3RjsA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:UukxzRN3lUWfJDjHEhu35Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:UukxzRN3lUWfJDjHEhu35Q", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.GetBadgeNumber$getBadgeJSResult", [{
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
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.GetBadgeNumber$outVars", [{
name: "BadgeNumber",
attrName: "badgeNumberOut",
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
}]);
FirebaseCloudMessagingPluginController.default.clientActionProxies.getBadgeNumber$Action = function () {
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.getBadgeNumber$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
BadgeNumber: OS.DataConversion.JSNodeParamConverter.to(actionResults.badgeNumberOut, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$GetBadgeNumber.GetBadgeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFirebaseCloudMessaging.getBadge(
    function (result) {
        $parameters.Success = true;
        $parameters.Result = result;
        $resolve();
    }, 
    function (error) {
        $parameters.Success = false;
        $parameters.Result = "";
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $resolve();
    }
);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$GetPendingNotifications", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$GetPendingNotifications.GetPendingNotificationsJS", "FirebaseCloudMessagingPlugin.model$SilentNotificationTempList", "FirebaseCloudMessagingPlugin.model$SilentNotificationList", "FirebaseCloudMessagingPlugin.model$ExtraDataElementList", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_GetPendingNotifications_GetPendingNotificationsJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.getPendingNotifications$Action = function (clearFromDatabaseIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.GetPendingNotifications$vars"))());
vars.value.clearFromDatabaseInLocal = clearFromDatabaseIn;
var getPendingNotificationsJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeSilentNotificationVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(FirebaseCloudMessagingPluginModel.SilentNotificationTempList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.GetPendingNotifications$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getPendingNotificationsJSResult = getPendingNotificationsJSResult;
varBag.jSONDeserializeSilentNotificationVar = jSONDeserializeSilentNotificationVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:rzGXHa0+_UmWbS1pKUMNbg:/ClientActionFlows.rzGXHa0+_UmWbS1pKUMNbg:o8I_7aalbYvgt5uoYsxDhw", "FirebaseCloudMessagingPlugin", "GetPendingNotifications", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:X1Gl7YtmpkmCeXDkJb+idQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:52IPvHR810KRWgy2QdsoEg", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_GetPendingNotifications_GetPendingNotificationsJS, "GetPendingNotifications", "GetPendingNotifications", {
ClearFromDatabase: OS.DataConversion.JSNodeParamConverter.to(vars.value.clearFromDatabaseInLocal, OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.GetPendingNotifications$getPendingNotificationsJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
getPendingNotificationsJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:n9HnmYWUKkOBobgfEaUzWw", callContext.id);
// JSON Deserialize: JSONDeserializeSilentNotification
jSONDeserializeSilentNotificationVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getPendingNotificationsJSResult.value.resultOut, FirebaseCloudMessagingPluginModel.SilentNotificationTempList, false);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:N1PPSfmPxEWagzFMZVW6HQ", callContext.id);
// Success = GetPendingNotifications.Success
outVars.value.successOut = getPendingNotificationsJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:N1PPSfmPxEWagzFMZVW6HQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = GetPendingNotifications.ErrorCode
outVars.value.errorOut.errorCodeAttr = getPendingNotificationsJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:N1PPSfmPxEWagzFMZVW6HQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = GetPendingNotifications.ErrorMessage
outVars.value.errorOut.errorMessageAttr = getPendingNotificationsJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:N1PPSfmPxEWagzFMZVW6HQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Result = JSONDeserializeSilentNotification.Data
outVars.value.resultOut = OS.DataConversion.JSConversions.typeConvertRecordList(jSONDeserializeSilentNotificationVar.value.dataOut, new FirebaseCloudMessagingPluginModel.SilentNotificationList(), function (source, target) {
target.messageIDAttr = source.messageIDAttr;
target.timeToLiveAttr = OS.BuiltinFunctions.addSeconds(OS.BuiltinFunctions.newDateTime(1970, 1, 1, 0, 0, 0), OS.BuiltinFunctions.textToInteger(source.timeToLiveAttr));
target.extraDataListAttr = source.extraDataListAttr;
target.timestampAttr = OS.BuiltinFunctions.addSeconds(OS.BuiltinFunctions.newDateTime(1970, 1, 1, 0, 0, 0), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.longIntegerToDecimal(OS.BuiltinFunctions.textToLongInteger(source.timestampAttr)).div(OS.BuiltinFunctions.integerToDecimal(1000)))));
return target;
});
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:UI1JXknoo0C9n2uqNUgiog", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:rzGXHa0+_UmWbS1pKUMNbg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:rzGXHa0+_UmWbS1pKUMNbg", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.GetPendingNotifications$vars", [{
name: "ClearFromDatabase",
attrName: "clearFromDatabaseInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.GetPendingNotifications$getPendingNotificationsJSResult", [{
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
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.GetPendingNotifications$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new FirebaseCloudMessagingPluginModel.SilentNotificationList();
},
complexType: FirebaseCloudMessagingPluginModel.SilentNotificationList
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
FirebaseCloudMessagingPluginController.default.clientActionProxies.getPendingNotifications$Action = function (clearFromDatabaseIn) {
clearFromDatabaseIn = (clearFromDatabaseIn === undefined) ? false : clearFromDatabaseIn;
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.getPendingNotifications$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(clearFromDatabaseIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: actionResults.resultOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$GetPendingNotifications.GetPendingNotificationsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFirebaseCloudMessaging.getPendingNotifications($parameters.ClearFromDatabase,
    function (result) {
        $parameters.Success = true;
        if (result != null) {
            $parameters.Result = result;
        }
        $resolve();
    }, 
    function (error) {
        $parameters.Success = false;
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $parameters.Result = "";
        $resolve();
    }
);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$GetToken", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$GetToken.GetTokenJS", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_GetToken_GetTokenJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.getToken$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getTokenJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.GetToken$outVars"))());
varBag.callContext = callContext;
varBag.getTokenJSResult = getTokenJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:a3TZA6VIkEGFRCAEc1p+ww:/ClientActionFlows.a3TZA6VIkEGFRCAEc1p+ww:ha0d5zjUzW8fzVXl0fx9RQ", "FirebaseCloudMessagingPlugin", "GetToken", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:J_aMSwAePkO56UZ05+zidg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:rRt8zirP+EaUlzVvohHdnw", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_GetToken_GetTokenJS, "GetToken", "GetToken", {
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.GetToken$getTokenJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
getTokenJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:XmAFxMAlmkqTQYonV8AhpQ", callContext.id);
// Success = GetToken.Success
outVars.value.successOut = getTokenJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:XmAFxMAlmkqTQYonV8AhpQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Token = GetToken.Result
outVars.value.tokenOut = getTokenJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:XmAFxMAlmkqTQYonV8AhpQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorCode = GetToken.ErrorCode
outVars.value.errorOut.errorCodeAttr = getTokenJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:XmAFxMAlmkqTQYonV8AhpQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Error.ErrorMessage = GetToken.ErrorMessage
outVars.value.errorOut.errorMessageAttr = getTokenJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:Mtyq3J_c9E+1scs2kgqB1w", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:a3TZA6VIkEGFRCAEc1p+ww", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:a3TZA6VIkEGFRCAEc1p+ww", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.GetToken$getTokenJSResult", [{
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
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.GetToken$outVars", [{
name: "Token",
attrName: "tokenOut",
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
}]);
FirebaseCloudMessagingPluginController.default.clientActionProxies.getToken$Action = function () {
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.getToken$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Token: OS.DataConversion.JSNodeParamConverter.to(actionResults.tokenOut, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$GetToken.GetTokenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFirebaseCloudMessaging.getToken(
    function (result) {
        $parameters.Success = true;
        $parameters.Result = result;
        $resolve();
    }, 
    function (error) {
        $parameters.Success = false;
        $parameters.Result = "";
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $resolve();
    }
);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$RegisterDevice", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$RegisterDevice.RegisterDeviceJS", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_RegisterDevice_RegisterDeviceJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.registerDevice$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var registerDeviceJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.RegisterDevice$outVars"))());
varBag.callContext = callContext;
varBag.registerDeviceJSResult = registerDeviceJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:erfnzrjm9E+RljGZwt_1bA:/ClientActionFlows.erfnzrjm9E+RljGZwt_1bA:BS9_ftLXk4x9Q2gZXDWvbA", "FirebaseCloudMessagingPlugin", "RegisterDevice", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:wijQfXdHvEGFuGm88i3Gjw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:rBiiFHcoVUaFwTKihTAShg", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_RegisterDevice_RegisterDeviceJS, "RegisterDevice", "RegisterDevice", {
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.RegisterDevice$registerDeviceJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
registerDeviceJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:oknx++ty6Uqarm_ul44DLg", callContext.id);
// Success = RegisterDevice.Success
outVars.value.successOut = registerDeviceJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:oknx++ty6Uqarm_ul44DLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = RegisterDevice.ErrorCode
outVars.value.errorOut.errorCodeAttr = registerDeviceJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:oknx++ty6Uqarm_ul44DLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = RegisterDevice.ErrorMessage
outVars.value.errorOut.errorMessageAttr = registerDeviceJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:x9axNBO4bE2HSRrVnDJr+w", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:erfnzrjm9E+RljGZwt_1bA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:erfnzrjm9E+RljGZwt_1bA", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.RegisterDevice$registerDeviceJSResult", [{
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
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.RegisterDevice$outVars", [{
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
FirebaseCloudMessagingPluginController.default.clientActionProxies.registerDevice$Action = function () {
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.registerDevice$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$RegisterDevice.RegisterDeviceJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFirebaseCloudMessaging.registerDevice(
    function () {
        $parameters.Success = true;
        $resolve();
    }, 
    function (error) {
        $parameters.Success = false;
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $resolve();
    }
);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$SendLocalNotification", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$SendLocalNotification.SendLocalNotificationJS", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_SendLocalNotification_SendLocalNotificationJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.sendLocalNotification$Action = function (notificationTitleIn, notificationBodyIn, badgeNumberIn, channelNameIn, channelDescriptionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.SendLocalNotification$vars"))());
vars.value.notificationTitleInLocal = notificationTitleIn;
vars.value.notificationBodyInLocal = notificationBodyIn;
vars.value.badgeNumberInLocal = badgeNumberIn;
vars.value.channelNameInLocal = channelNameIn;
vars.value.channelDescriptionInLocal = channelDescriptionIn;
var sendLocalNotificationJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.SendLocalNotification$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.sendLocalNotificationJSResult = sendLocalNotificationJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:x1l6lIGQKkKoEh5hALRoHQ:/ClientActionFlows.x1l6lIGQKkKoEh5hALRoHQ:EkPfD6drHsGOTs6HvOc0aw", "FirebaseCloudMessagingPlugin", "SendLocalNotification", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:SVlI3YqS1EauDev3ZVAhWA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:BGAtYl3tm0KH_juJqWw9Yg", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_SendLocalNotification_SendLocalNotificationJS, "SendLocalNotification", "SendLocalNotification", {
ChannelName: OS.DataConversion.JSNodeParamConverter.to(vars.value.channelNameInLocal, OS.DataTypes.DataTypes.Text),
BadgeNumber: OS.DataConversion.JSNodeParamConverter.to(vars.value.badgeNumberInLocal, OS.DataTypes.DataTypes.Integer),
Title: OS.DataConversion.JSNodeParamConverter.to(vars.value.notificationTitleInLocal, OS.DataTypes.DataTypes.Text),
Body: OS.DataConversion.JSNodeParamConverter.to(vars.value.notificationBodyInLocal, OS.DataTypes.DataTypes.Text),
ChannelDescription: OS.DataConversion.JSNodeParamConverter.to(vars.value.channelDescriptionInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.SendLocalNotification$sendLocalNotificationJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
sendLocalNotificationJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:d5A8V++GWEOrUASot0Usiw", callContext.id);
// Success = SendLocalNotification.Success
outVars.value.successOut = sendLocalNotificationJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:d5A8V++GWEOrUASot0Usiw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = SendLocalNotification.ErrorCode
outVars.value.errorOut.errorCodeAttr = sendLocalNotificationJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:d5A8V++GWEOrUASot0Usiw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = SendLocalNotification.ErrorMessage
outVars.value.errorOut.errorMessageAttr = sendLocalNotificationJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:BHOd59uwUUuxrwnKXnM9ZQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:x1l6lIGQKkKoEh5hALRoHQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:x1l6lIGQKkKoEh5hALRoHQ", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.SendLocalNotification$vars", [{
name: "NotificationTitle",
attrName: "notificationTitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NotificationBody",
attrName: "notificationBodyInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "BadgeNumber",
attrName: "badgeNumberInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return -1;
}
}, {
name: "ChannelName",
attrName: "channelNameInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ChannelDescription",
attrName: "channelDescriptionInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.SendLocalNotification$sendLocalNotificationJSResult", [{
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
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.SendLocalNotification$outVars", [{
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
FirebaseCloudMessagingPluginController.default.clientActionProxies.sendLocalNotification$Action = function (notificationTitleIn, notificationBodyIn, badgeNumberIn, channelNameIn, channelDescriptionIn) {
notificationTitleIn = (notificationTitleIn === undefined) ? "" : notificationTitleIn;
notificationBodyIn = (notificationBodyIn === undefined) ? "" : notificationBodyIn;
badgeNumberIn = (badgeNumberIn === undefined) ? -1 : badgeNumberIn;
channelNameIn = (channelNameIn === undefined) ? "" : channelNameIn;
channelDescriptionIn = (channelDescriptionIn === undefined) ? "" : channelDescriptionIn;
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.sendLocalNotification$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(notificationTitleIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(notificationBodyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(badgeNumberIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(channelNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(channelDescriptionIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$SendLocalNotification.SendLocalNotificationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFirebaseCloudMessaging.sendLocalNotification(
    $parameters.BadgeNumber,
    $parameters.Title, 
    $parameters.Body,
    $parameters.ChannelName,
    $parameters.ChannelDescription, 
    function () {
        $parameters.Success = true;
        $resolve();
    }, 
    function (error) {
        $parameters.Success = false;
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $resolve();
    }
);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$SetBadgeNumber", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$SetBadgeNumber.SetBadgeJS", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_SetBadgeNumber_SetBadgeJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.setBadgeNumber$Action = function (badgeNumberIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.SetBadgeNumber$vars"))());
vars.value.badgeNumberInLocal = badgeNumberIn;
var setBadgeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.SetBadgeNumber$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.setBadgeJSResult = setBadgeJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:WIezhEA2GUqbDXO3qL_xSg:/ClientActionFlows.WIezhEA2GUqbDXO3qL_xSg:QWnrkMMICN1LqPjty2H7qA", "FirebaseCloudMessagingPlugin", "SetBadgeNumber", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:2CxrWg+Ac0CcEJ6g1DXB1A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:P7fOLjtelkeQtEye8KB1lA", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_SetBadgeNumber_SetBadgeJS, "SetBadge", "SetBadgeNumber", {
BadgeNumber: OS.DataConversion.JSNodeParamConverter.to(vars.value.badgeNumberInLocal, OS.DataTypes.DataTypes.Integer),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.SetBadgeNumber$setBadgeJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
setBadgeJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:248UKgy8z0SaLuO_CkZehQ", callContext.id);
// Success = SetBadge.Success
outVars.value.successOut = setBadgeJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:248UKgy8z0SaLuO_CkZehQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = SetBadge.ErrorCode
outVars.value.errorOut.errorCodeAttr = setBadgeJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:248UKgy8z0SaLuO_CkZehQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = SetBadge.ErrorMessage
outVars.value.errorOut.errorMessageAttr = setBadgeJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:rjMQPhzV806RxgAfHAw3ag", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:WIezhEA2GUqbDXO3qL_xSg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:WIezhEA2GUqbDXO3qL_xSg", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.SetBadgeNumber$vars", [{
name: "BadgeNumber",
attrName: "badgeNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.SetBadgeNumber$setBadgeJSResult", [{
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
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.SetBadgeNumber$outVars", [{
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
FirebaseCloudMessagingPluginController.default.clientActionProxies.setBadgeNumber$Action = function (badgeNumberIn) {
badgeNumberIn = (badgeNumberIn === undefined) ? 0 : badgeNumberIn;
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.setBadgeNumber$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(badgeNumberIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$SetBadgeNumber.SetBadgeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFirebaseCloudMessaging.setBadge($parameters.BadgeNumber,
    function () {
        $parameters.Success = true;
        $resolve();
    }, 
    function (error) {
        $parameters.Success = false;
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $resolve();
    }
);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$SetDeliveryMetricsExportToBigQuery", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$SetDeliveryMetricsExportToBigQuery.CallCordovaAPIJS", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_SetDeliveryMetricsExportToBigQuery_CallCordovaAPIJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.setDeliveryMetricsExportToBigQuery$Action = function (enableIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.SetDeliveryMetricsExportToBigQuery$vars"))());
vars.value.enableInLocal = enableIn;
var callCordovaAPIJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.SetDeliveryMetricsExportToBigQuery$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.callCordovaAPIJSResult = callCordovaAPIJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:jeIQJvMoLUOk3vs0bkCqxg:/ClientActionFlows.jeIQJvMoLUOk3vs0bkCqxg:If+GJqa+OxtEPTPRwTBPFQ", "FirebaseCloudMessagingPlugin", "SetDeliveryMetricsExportToBigQuery", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:WElgFAHZTUOR9zQhWwC5NA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:qwewmjqRukCa+kjUFmfSNw", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_SetDeliveryMetricsExportToBigQuery_CallCordovaAPIJS, "CallCordovaAPI", "SetDeliveryMetricsExportToBigQuery", {
Enable: OS.DataConversion.JSNodeParamConverter.to(vars.value.enableInLocal, OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.SetDeliveryMetricsExportToBigQuery$callCordovaAPIJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
callCordovaAPIJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:NJCL0HgvmU2uTHRRdsvH2Q", callContext.id);
// Success = CallCordovaAPI.Success
outVars.value.successOut = callCordovaAPIJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:NJCL0HgvmU2uTHRRdsvH2Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = CallCordovaAPI.ErrorCode
outVars.value.errorOut.errorCodeAttr = callCordovaAPIJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:NJCL0HgvmU2uTHRRdsvH2Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = CallCordovaAPI.ErrorMessage
outVars.value.errorOut.errorMessageAttr = callCordovaAPIJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:l0VHgeyPHkWosJnJUoymmQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:jeIQJvMoLUOk3vs0bkCqxg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:jeIQJvMoLUOk3vs0bkCqxg", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.SetDeliveryMetricsExportToBigQuery$vars", [{
name: "Enable",
attrName: "enableInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.SetDeliveryMetricsExportToBigQuery$callCordovaAPIJSResult", [{
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
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.SetDeliveryMetricsExportToBigQuery$outVars", [{
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
FirebaseCloudMessagingPluginController.default.clientActionProxies.setDeliveryMetricsExportToBigQuery$Action = function (enableIn) {
enableIn = (enableIn === undefined) ? false : enableIn;
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.setDeliveryMetricsExportToBigQuery$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(enableIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$SetDeliveryMetricsExportToBigQuery.CallCordovaAPIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function onSuccess() {
    $parameters.Success = true;
    $resolve();
}
function onError(error) {
    $parameters.Success = false;
    $parameters.ErrorCode = error.code;
    $parameters.ErrorMessage = error.message;
    $resolve();
}
cordova.plugins.OSFirebaseCloudMessaging.setDeliveryMetricsExportToBigQuery($parameters.Enable, onSuccess, onError);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$Subscribe", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$Subscribe.SubscribeJS", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_Subscribe_SubscribeJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.subscribe$Action = function (topicIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.Subscribe$vars"))());
vars.value.topicInLocal = topicIn;
var subscribeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.Subscribe$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.subscribeJSResult = subscribeJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:zpb8ul_O3kOXlnNesM76CQ:/ClientActionFlows.zpb8ul_O3kOXlnNesM76CQ:IWZ2tEXRS5muy1vQm79ipg", "FirebaseCloudMessagingPlugin", "Subscribe", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:VbdrDPLUzU+wYJFp9ZLLSQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:FlP8T8cirECpxDSlQXn08Q", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_Subscribe_SubscribeJS, "Subscribe", "Subscribe", {
Topic: OS.DataConversion.JSNodeParamConverter.to(vars.value.topicInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.Subscribe$subscribeJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
subscribeJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:+9bOt1iml0y2hAuNMN8n0g", callContext.id);
// Success = Subscribe.Success
outVars.value.successOut = subscribeJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:+9bOt1iml0y2hAuNMN8n0g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Subscribe.ErrorCode
outVars.value.errorOut.errorCodeAttr = subscribeJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:+9bOt1iml0y2hAuNMN8n0g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Subscribe.ErrorMessage
outVars.value.errorOut.errorMessageAttr = subscribeJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:8RrdvH0yI0eQHVfmgYEyIA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:zpb8ul_O3kOXlnNesM76CQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:zpb8ul_O3kOXlnNesM76CQ", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.Subscribe$vars", [{
name: "Topic",
attrName: "topicInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.Subscribe$subscribeJSResult", [{
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
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.Subscribe$outVars", [{
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
FirebaseCloudMessagingPluginController.default.clientActionProxies.subscribe$Action = function (topicIn) {
topicIn = (topicIn === undefined) ? "" : topicIn;
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.subscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(topicIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$Subscribe.SubscribeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFirebaseCloudMessaging.subscribe(
    $parameters.Topic,
    function (result) {
        $parameters.Success = true;
        $parameters.Result = (result === null) ? "" : result
        $resolve();
    }, 
    function (error) {
        $parameters.Success = false;
        $parameters.Result = "";
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $resolve();
    }
);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$UnregisterDevice", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$UnregisterDevice.UnregisterDeviceJS", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_UnregisterDevice_UnregisterDeviceJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.unregisterDevice$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var unregisterDeviceJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.UnregisterDevice$outVars"))());
varBag.callContext = callContext;
varBag.unregisterDeviceJSResult = unregisterDeviceJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:jaRiP01+IEGnrhWX7Wj1vQ:/ClientActionFlows.jaRiP01+IEGnrhWX7Wj1vQ:NQs6DU5OPS1tpQVLk8tLng", "FirebaseCloudMessagingPlugin", "UnregisterDevice", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:DZzWWJ+uek2AhIakBnuIQg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:ZrU1kWWdAkG9mO++qcWRvA", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_UnregisterDevice_UnregisterDeviceJS, "UnregisterDevice", "UnregisterDevice", {
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.UnregisterDevice$unregisterDeviceJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
unregisterDeviceJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:TUGNy5y4sEClcIYDa0Qz9g", callContext.id);
// Success = UnregisterDevice.Success
outVars.value.successOut = unregisterDeviceJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:TUGNy5y4sEClcIYDa0Qz9g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = UnregisterDevice.ErrorCode
outVars.value.errorOut.errorCodeAttr = unregisterDeviceJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:TUGNy5y4sEClcIYDa0Qz9g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = UnregisterDevice.ErrorMessage
outVars.value.errorOut.errorMessageAttr = unregisterDeviceJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:hfmLxJVtOke+mYYGIQwQIQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:jaRiP01+IEGnrhWX7Wj1vQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:jaRiP01+IEGnrhWX7Wj1vQ", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.UnregisterDevice$unregisterDeviceJSResult", [{
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
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.UnregisterDevice$outVars", [{
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
FirebaseCloudMessagingPluginController.default.clientActionProxies.unregisterDevice$Action = function () {
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.unregisterDevice$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$UnregisterDevice.UnregisterDeviceJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFirebaseCloudMessaging.unregisterDevice(
    function () {
        $parameters.Success = true;
        $resolve();
    }, 
    function (error) {
        $parameters.Success = false;
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $resolve();
    }
);
});
};
});

define("FirebaseCloudMessagingPlugin.controller$Unsubscribe", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller$Unsubscribe.UnsubscribeJS", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPluginController, CommonPluginModel, FirebaseCloudMessagingPlugin_controller_Unsubscribe_UnsubscribeJS) {
var OS = OutSystems.Internal;
FirebaseCloudMessagingPluginController.default.unsubscribe$Action = function (topicIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.Unsubscribe$vars"))());
vars.value.topicInLocal = topicIn;
var unsubscribeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.Unsubscribe$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.unsubscribeJSResult = unsubscribeJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("1zmEKTJmKUKWKYxHO2mMow:7iqexFkLiE2HH8pIEzmOmA:/ClientActionFlows.7iqexFkLiE2HH8pIEzmOmA:bJMdnxvTIYXJUKyVKijhoQ", "FirebaseCloudMessagingPlugin", "Unsubscribe", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:_sG5Mp3qDEmVmdpk_kqItg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:C9OBiA2vKkyjJ6hYJegbdQ", callContext.id);
return controller.safeExecuteAsyncJSNode(FirebaseCloudMessagingPlugin_controller_Unsubscribe_UnsubscribeJS, "Unsubscribe", "Unsubscribe", {
Topic: OS.DataConversion.JSNodeParamConverter.to(vars.value.topicInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FirebaseCloudMessagingPlugin.Unsubscribe$unsubscribeJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
unsubscribeJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:gdqB5gAeUEqblWclEVOw+A", callContext.id);
// Success = Unsubscribe.Success
outVars.value.successOut = unsubscribeJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:gdqB5gAeUEqblWclEVOw+A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Error.ErrorCode = Unsubscribe.ErrorCode
outVars.value.errorOut.errorCodeAttr = unsubscribeJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:gdqB5gAeUEqblWclEVOw+A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Error.ErrorMessage = Unsubscribe.ErrorMessage
outVars.value.errorOut.errorMessageAttr = unsubscribeJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("1zmEKTJmKUKWKYxHO2mMow:2F9kiW2KT0CCjpp+bdRB+w", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:7iqexFkLiE2HH8pIEzmOmA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1zmEKTJmKUKWKYxHO2mMow:7iqexFkLiE2HH8pIEzmOmA", callContext.id);
throw ex;

});
};
var controller = FirebaseCloudMessagingPluginController.default;
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.Unsubscribe$vars", [{
name: "Topic",
attrName: "topicInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.Unsubscribe$unsubscribeJSResult", [{
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
FirebaseCloudMessagingPluginController.default.constructor.registerVariableGroupType("FirebaseCloudMessagingPlugin.Unsubscribe$outVars", [{
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
FirebaseCloudMessagingPluginController.default.clientActionProxies.unsubscribe$Action = function (topicIn) {
topicIn = (topicIn === undefined) ? "" : topicIn;
return controller.executeActionInsideJSNode(FirebaseCloudMessagingPluginController.default.unsubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(topicIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
Error: actionResults.errorOut
};
});
};
});
define("FirebaseCloudMessagingPlugin.controller$Unsubscribe.UnsubscribeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
cordova.plugins.OSFirebaseCloudMessaging.unsubscribe(
    $parameters.Topic,
    function () {
        $parameters.Success = true;
        $resolve();
    }, 
    function (error) {
        $parameters.Success = false;
        $parameters.ErrorCode = error.code;
        $parameters.ErrorMessage =  error.message;
        $resolve();
    }
);
});
};
});

define("FirebaseCloudMessagingPlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.controller$debugger"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, FirebaseCloudMessagingPlugin_Controller_debugger) {
var OS = OutSystems.Internal;
var FirebaseCloudMessagingPluginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return FirebaseCloudMessagingPluginController.default.defaultTimeout;
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
FirebaseCloudMessagingPluginController.default = new Controller(null, "FirebaseCloudMessagingPlugin");
});
define("FirebaseCloudMessagingPlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"8r4Ep+EmJ0KMGy6nnmO+ZQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.tokenOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FoDvJdw63ECxmBNOCAlpLw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gftQUMIRr0+sibNdrN9Zew": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"rRt8zirP+EaUlzVvohHdnw": {
getter: function (varBag, idService) {
return varBag.getTokenJSResult.value;
}
},
"35moarBkhkqd2QBiP2dDYw": {
getter: function (varBag, idService) {
return varBag.vars.value.clearFromDatabaseInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"yOJdPGpJ90G_AV9jJVZeMw": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
}
},
"fsz1es7ZaUSY8JTYO53mAg": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SBZdUkFWoEuCmo1mvVuh1A": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"n9HnmYWUKkOBobgfEaUzWw": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeSilentNotificationVar.value;
}
},
"52IPvHR810KRWgy2QdsoEg": {
getter: function (varBag, idService) {
return varBag.getPendingNotificationsJSResult.value;
}
},
"eFH8fUGVO0OSYGwIsmnUPA": {
getter: function (varBag, idService) {
return varBag.vars.value.enableInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"v4X8CqCoAkWPF5uVE_J7Mw": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FYLnvXQIgUSQ8TBVIwOqVw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"qwewmjqRukCa+kjUFmfSNw": {
getter: function (varBag, idService) {
return varBag.callCordovaAPIJSResult.value;
}
},
"82wkD9jClEiSe5WYciiFDA": {
getter: function (varBag, idService) {
return varBag.outVars.value.enableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FquKEcgF9kWb+v7i1HvGFg": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"OmNgxKQ27k2sQKyvXz80gQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"zGjn2Uy_ckuOOIfCHd9wXA": {
getter: function (varBag, idService) {
return varBag.callCordovaAPIJSResult.value;
}
},
"VMTq5BBuBkCPXmbiLyg8zg": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"9nuxSgielkWCaY66SFs5qg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"ZrU1kWWdAkG9mO++qcWRvA": {
getter: function (varBag, idService) {
return varBag.unregisterDeviceJSResult.value;
}
},
"j_G+5mVDd0iHkR4bvRrQdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.badgeNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"LoaQnwUrK06ijK+0Cz2J1g": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"z2SbZ_69k0Gk0mvQ_MB+2Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"P7fOLjtelkeQtEye8KB1lA": {
getter: function (varBag, idService) {
return varBag.setBadgeJSResult.value;
}
},
"B3bRSXLhrU2b7i5AQy2_GA": {
getter: function (varBag, idService) {
return varBag.vars.value.deepLinkParamsVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0Kpzcra+ZEqTaVXuDrBY0g": {
getter: function (varBag, idService) {
return varBag.vars.value.screenNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"C0xSpA+CfEK61lh67rHBVQ": {
getter: function (varBag, idService) {
return varBag.vars.value.parameterListInLocal;
}
},
"mk3R9+q9GU+qqCwmZULlOA": {
getter: function (varBag, idService) {
return varBag.outVars.value.deepLinkOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aXdZxBigCEKyOnW2oIIv0g": {
getter: function (varBag, idService) {
return varBag.vars.value.notificationTitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"h5U3uajjdEylEx80ZQHZWg": {
getter: function (varBag, idService) {
return varBag.vars.value.notificationBodyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cnOXFzewP0mJDoIeBrBaSw": {
getter: function (varBag, idService) {
return varBag.vars.value.badgeNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"AEzY+E5MAEmV3V+FAxJutw": {
getter: function (varBag, idService) {
return varBag.vars.value.channelNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1Oca5ggruku5wmIclntv2Q": {
getter: function (varBag, idService) {
return varBag.vars.value.channelDescriptionInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YbvX9uTyR0S5WlqyhVRuXA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"sCHOM2iup0KpGD6RphWb+A": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"BGAtYl3tm0KH_juJqWw9Yg": {
getter: function (varBag, idService) {
return varBag.sendLocalNotificationJSResult.value;
}
},
"FNmLv2ZS80CUijo1YABiQA": {
getter: function (varBag, idService) {
return varBag.vars.value.topicInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"smYk8gqFZEa5RI1s7bX3SQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Y+xZdl3kwk2WhVt4P+3QGw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"FlP8T8cirECpxDSlQXn08Q": {
getter: function (varBag, idService) {
return varBag.subscribeJSResult.value;
}
},
"tYd2sGaCeU6GafzoAS5eKA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BcVP5Z_KiUC4AamOdGIStg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"zTQrGZ7+20COucS9C4f1UQ": {
getter: function (varBag, idService) {
return varBag.clearAllNotificationsJSResult.value;
}
},
"P7lYB_++wkOb77AXf+M1PA": {
getter: function (varBag, idService) {
return varBag.vars.value.topicInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Dvz6e+2dJUGDWesjbOKTpQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"uHaLr6ZKVUe8j8F630BeDw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"C9OBiA2vKkyjJ6hYJegbdQ": {
getter: function (varBag, idService) {
return varBag.unsubscribeJSResult.value;
}
},
"7zs3PIJkTEWN7MvC8aASqg": {
getter: function (varBag, idService) {
return varBag.outVars.value.badgeNumberOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nb9Aov9sM0W2J9muDegU_w": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"VNDXqnFri02x3B39JrrgaQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"aUNQR+nzeUi2RE5qa0FKeA": {
getter: function (varBag, idService) {
return varBag.getBadgeJSResult.value;
}
},
"NuEqQ4OTiky1NbndgxC1Ng": {
getter: function (varBag, idService) {
return varBag.outVars.value.tokenOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"i1FNJltKWE6HSk+yDAJZSQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ooTj+eT8I0SgwIo_D2upkA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"vtCsf9BHnUC7a7fcYCZCZg": {
getter: function (varBag, idService) {
return varBag.getOperatingSystemVar.value;
}
},
"PwlmlcchMEywG6lyXuP2yw": {
getter: function (varBag, idService) {
return varBag.getAPNsTokenJSResult.value;
}
},
"ufexKw7vpkiEuZFcCyd8pA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+5LEX2uKLUKQ8knRliFlww": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"rBiiFHcoVUaFwTKihTAShg": {
getter: function (varBag, idService) {
return varBag.registerDeviceJSResult.value;
}
},
"ufDuuoCzCEmy0r_SJCOjSA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vFOQCH6ZBkG08uAgQNz19Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorOut;
}
},
"vt5Yglaa4UmyFyx3ZXzZwg": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"i6gCk+AILUOEOfpeYbkj7g": {
getter: function (varBag, idService) {
return varBag.pluginIsLoadedJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
