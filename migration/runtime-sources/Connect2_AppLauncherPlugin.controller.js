define("Connect2_AppLauncherPlugin.controller$CanLaunch", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "Connect2_AppLauncherPlugin.controller$CanLaunch.CanLaunchJSJS", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, Connect2_AppLauncherPlugin_controller_CanLaunch_CanLaunchJSJS) {
var OS = OutSystems.Internal;
Connect2_AppLauncherPluginController.default.canLaunch$Action = function (jSONIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.CanLaunch$vars"))());
vars.value.jSONInLocal = jSONIn;
var checkAppLauncherPluginVar = new OS.DataTypes.VariableHolder();
var canLaunchJSJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.CanLaunch$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkAppLauncherPluginVar = checkAppLauncherPluginVar;
varBag.canLaunchJSJSResult = canLaunchJSJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("Lz7CihCfDkmyElphyY1Ebw:911SGD3aw0GCjGoLr_qdMg:/ClientActionFlows.911SGD3aw0GCjGoLr_qdMg:G2ms24leRgrXnpYMNiyALA", "Connect2_AppLauncherPlugin", "CanLaunch", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:t46lxOSN1kG3VwxxbDBscQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:HhiNbZ4kJUmf3hrNMR59kg", callContext.id);
// Execute Action: CheckAppLauncherPlugin
checkAppLauncherPluginVar.value = Connect2_AppLauncherPluginController.default.checkAppLauncherPlugin$Action(callContext);

// Is App Launcher Plugin available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:D3XJH3xs6kWOEAxurOJLjw", callContext.id) && checkAppLauncherPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:TbhDKtAX2kaw+zNHORyYrw", callContext.id);
// Use this action to add a contact to the device's address book.
return controller.safeExecuteAsyncJSNode(Connect2_AppLauncherPlugin_controller_CanLaunch_CanLaunchJSJS, "CanLaunchJS", "CanLaunch", {
json: OS.DataConversion.JSNodeParamConverter.to(vars.value.jSONInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.CanLaunch$canLaunchJSJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
canLaunchJSJSResult.value = results;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:igr3nVRmQkWmfl1OWb5FRA", callContext.id) && canLaunchJSJSResult.value.successOut)) {
// Set Values
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:Ru99vGn430+mQ96SFKRA1g", callContext.id);
// Success = True
outVars.value.successOut = true;
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:__u09Cek60aHhSOPPfZT0A", callContext.id);
} else {
// Set error
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:0hpZyH08RUOFvqbMcDqlog", callContext.id);
// Success = False
outVars.value.successOut = false;
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:0hpZyH08RUOFvqbMcDqlog", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = CanLaunchJS.ErrorMessage
outVars.value.errorMessageOut = canLaunchJSJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:xMb05wZK1kqyrfWjfb1dHg", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:E7eVF3sYrEKRuibSQPzu8Q", callContext.id);
// Raise Error: PluginNotAvailable
throw new OS.Exceptions.Exceptions.UserException("Connect2_AppLauncherPlugin.PluginNotAvailable", "App Launcher Plugin is unavailable");
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("Lz7CihCfDkmyElphyY1Ebw:911SGD3aw0GCjGoLr_qdMg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Lz7CihCfDkmyElphyY1Ebw:911SGD3aw0GCjGoLr_qdMg", callContext.id);
throw ex;

});
};
var controller = Connect2_AppLauncherPluginController.default;
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.CanLaunch$vars", [{
name: "JSON",
attrName: "jSONInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.CanLaunch$canLaunchJSJSResult", [{
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
}]);
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.CanLaunch$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_AppLauncherPluginController.default.clientActionProxies.canLaunch$Action = function (jSONIn) {
jSONIn = (jSONIn === undefined) ? "" : jSONIn;
return controller.executeActionInsideJSNode(Connect2_AppLauncherPluginController.default.canLaunch$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(jSONIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_AppLauncherPlugin.controller$CanLaunch.CanLaunchJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
function onSuccess(data) {
    $parameters.Success = true;
    $parameters.ErrorMessage = "";
    $resolve(); 
}

function onError(errorMessage) {
    $parameters.Success = false;
    $parameters.ErrorMessage = errorMessage;
    $resolve();
}

window.plugins.launcher.canLaunch(JSON.parse($parameters.json), onSuccess, onError);
});
};
});

define("Connect2_AppLauncherPlugin.controller$CanLaunchWithData", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "Connect2_AppLauncherPlugin.controller$CanLaunch", "Connect2_AppLauncherPlugin.model$LauncherParametersRec"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController) {
var OS = OutSystems.Internal;
Connect2_AppLauncherPluginController.default.canLaunchWithData$Action = function (dataIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.CanLaunchWithData$vars"))());
vars.value.dataInLocal = dataIn.clone();
var canLaunchVar = new OS.DataTypes.VariableHolder();
var jSONSerializeDataVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.CanLaunchWithData$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.canLaunchVar = canLaunchVar;
varBag.jSONSerializeDataVar = jSONSerializeDataVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("Lz7CihCfDkmyElphyY1Ebw:2ryclean9ESk0QG5hcwtcg:/ClientActionFlows.2ryclean9ESk0QG5hcwtcg:NlVNPTyreJP8UjsBmnKssw", "Connect2_AppLauncherPlugin", "CanLaunchWithData", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:7sfUpLdqrEOjOCIQSnTgzg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:3wzRdEImcECaoz01mr4gfA", callContext.id);
// JSON Serialize: JSONSerializeData
jSONSerializeDataVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.dataInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:5Dcz4Bq6w0qz4dqVDzTnag", callContext.id);
// Execute Action: CanLaunch
return Connect2_AppLauncherPluginController.default.canLaunch$Action(jSONSerializeDataVar.value.jSONOut, callContext).then(function (value) {
canLaunchVar.value = value;
}).then(function () {
// Set Values
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:lAEpBwb5CUSjO6H6Fx0m3Q", callContext.id);
// Success = CanLaunch.Success
outVars.value.successOut = canLaunchVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:lAEpBwb5CUSjO6H6Fx0m3Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = CanLaunch.ErrorMessage
outVars.value.errorMessageOut = canLaunchVar.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:P8tKAz5Uf0mEH840n1Sm5g", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("Lz7CihCfDkmyElphyY1Ebw:2ryclean9ESk0QG5hcwtcg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Lz7CihCfDkmyElphyY1Ebw:2ryclean9ESk0QG5hcwtcg", callContext.id);
throw ex;

});
};
var controller = Connect2_AppLauncherPluginController.default;
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.CanLaunchWithData$vars", [{
name: "Data",
attrName: "dataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_AppLauncherPluginModel.LauncherParametersRec();
},
complexType: Connect2_AppLauncherPluginModel.LauncherParametersRec
}]);
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.CanLaunchWithData$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_AppLauncherPluginController.default.clientActionProxies.canLaunchWithData$Action = function (dataIn) {
dataIn = (dataIn === undefined) ? new Connect2_AppLauncherPluginModel.LauncherParametersRec() : dataIn;
return controller.executeActionInsideJSNode(Connect2_AppLauncherPluginController.default.canLaunchWithData$Action.bind(controller, dataIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin.IsPluginAvailableJSJS"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, Connect2_AppLauncherPlugin_controller_CheckAppLauncherPlugin_IsPluginAvailableJSJS) {
var OS = OutSystems.Internal;
Connect2_AppLauncherPluginController.default.checkAppLauncherPlugin$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isPluginAvailableJSJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.CheckAppLauncherPlugin$outVars"))());
varBag.callContext = callContext;
varBag.isPluginAvailableJSJSResult = isPluginAvailableJSJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("Lz7CihCfDkmyElphyY1Ebw:MCsbTgX6VEujG4Nflx_h5w:/ClientActionFlows.MCsbTgX6VEujG4Nflx_h5w:URCu0jQ7JGSDWXCxAyfXog", "Connect2_AppLauncherPlugin", "CheckAppLauncherPlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:EjAwxsboBUCmhRd8ns5GUw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:sxvLxSky3k+KKHzFshEdZg", callContext.id);
// Validates if the plugin is currently available. Useful to verify if the current application has the plugin installed.
isPluginAvailableJSJSResult.value = controller.safeExecuteJSNode(Connect2_AppLauncherPlugin_controller_CheckAppLauncherPlugin_IsPluginAvailableJSJS, "IsPluginAvailableJS", "CheckAppLauncherPlugin", {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.CheckAppLauncherPlugin$isPluginAvailableJSJSResult"))();
jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:j8MqbKj4g0S+NuW7Y4_tkw", callContext.id);
// IsAvailable = IsPluginAvailableJS.IsAvailable
outVars.value.isAvailableOut = isPluginAvailableJSJSResult.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:ZBuORsnoqEKIx8SaOB5o7w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Lz7CihCfDkmyElphyY1Ebw:MCsbTgX6VEujG4Nflx_h5w", callContext.id);
}

};
var controller = Connect2_AppLauncherPluginController.default;
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.CheckAppLauncherPlugin$isPluginAvailableJSJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.CheckAppLauncherPlugin$outVars", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_AppLauncherPluginController.default.clientActionProxies.checkAppLauncherPlugin$Action = function () {
return controller.executeActionInsideJSNode(Connect2_AppLauncherPluginController.default.checkAppLauncherPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin.IsPluginAvailableJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsAvailable = !!window.cordova && !!window.plugins.launcher;
};
});

define("Connect2_AppLauncherPlugin.controller$Launch", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "Connect2_AppLauncherPlugin.controller$Launch.LaunchJSJS", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, Connect2_AppLauncherPlugin_controller_Launch_LaunchJSJS) {
var OS = OutSystems.Internal;
Connect2_AppLauncherPluginController.default.launch$Action = function (jSONIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.Launch$vars"))());
vars.value.jSONInLocal = jSONIn;
var checkAppLauncherPluginVar = new OS.DataTypes.VariableHolder();
var launchJSJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeLauncherReturnVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(Connect2_AppLauncherPluginModel.LauncherReturnRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.Launch$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkAppLauncherPluginVar = checkAppLauncherPluginVar;
varBag.launchJSJSResult = launchJSJSResult;
varBag.jSONDeserializeLauncherReturnVar = jSONDeserializeLauncherReturnVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("Lz7CihCfDkmyElphyY1Ebw:iFGM+KyAY0OpF9zSr7mfVQ:/ClientActionFlows.iFGM+KyAY0OpF9zSr7mfVQ:NLjKq4rG9wDdm3rAQpdRsw", "Connect2_AppLauncherPlugin", "Launch", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:lRBDWGvn20qmsAPluPlWyw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:n1BEBkbcRkaZI5AU8rToXg", callContext.id);
// Execute Action: CheckAppLauncherPlugin
checkAppLauncherPluginVar.value = Connect2_AppLauncherPluginController.default.checkAppLauncherPlugin$Action(callContext);

// Is App Launcher Plugin available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:Vvh0JFeIUU+zaAR6JITm2w", callContext.id) && checkAppLauncherPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:_1lULvBSGUKeA2ubC7zcgQ", callContext.id);
// Use this action to add a contact to the device's address book.
return controller.safeExecuteAsyncJSNode(Connect2_AppLauncherPlugin_controller_Launch_LaunchJSJS, "LaunchJS", "Launch", {
json: OS.DataConversion.JSNodeParamConverter.to(vars.value.jSONInLocal, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Return: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.Launch$launchJSJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.returnOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Return, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
launchJSJSResult.value = results;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:FuFZdJdvLU6uGW7ebWCxbQ", callContext.id) && launchJSJSResult.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:pbqCUzqHLUSaLOkBArNYSQ", callContext.id);
// JSON Deserialize: JSONDeserializeLauncherReturn
jSONDeserializeLauncherReturnVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(launchJSJSResult.value.returnOut, Connect2_AppLauncherPluginModel.LauncherReturnRec, false);
// Set Values
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:6SqrK4RjWUuROi8yqtd4pQ", callContext.id);
// ReturnData = JSONDeserializeLauncherReturn.Data
outVars.value.returnDataOut = jSONDeserializeLauncherReturnVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:u3YkT7XUFU+KiAB99YS6WA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:Je0Kqa7_4ku4ofjEPoRgAA", callContext.id);
// Raise Error: LaunchFailed
throw new OS.Exceptions.Exceptions.UserException("Connect2_AppLauncherPlugin.LaunchFailed", launchJSJSResult.value.errorMessageOut);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:y7B0VXdMF06ic8CiqN3wXw", callContext.id);
// Raise Error: PluginNotAvailable
throw new OS.Exceptions.Exceptions.UserException("Connect2_AppLauncherPlugin.PluginNotAvailable", "App Launcher Plugin is unavailable");
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("Lz7CihCfDkmyElphyY1Ebw:iFGM+KyAY0OpF9zSr7mfVQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Lz7CihCfDkmyElphyY1Ebw:iFGM+KyAY0OpF9zSr7mfVQ", callContext.id);
throw ex;

});
};
var controller = Connect2_AppLauncherPluginController.default;
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.Launch$vars", [{
name: "JSON",
attrName: "jSONInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.Launch$launchJSJSResult", [{
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
name: "Return",
attrName: "returnOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.Launch$outVars", [{
name: "ReturnData",
attrName: "returnDataOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_AppLauncherPluginModel.LauncherReturnRec();
},
complexType: Connect2_AppLauncherPluginModel.LauncherReturnRec
}]);
Connect2_AppLauncherPluginController.default.clientActionProxies.launch$Action = function (jSONIn) {
jSONIn = (jSONIn === undefined) ? "" : jSONIn;
return controller.executeActionInsideJSNode(Connect2_AppLauncherPluginController.default.launch$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(jSONIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ReturnData: actionResults.returnDataOut
};
});
};
});
define("Connect2_AppLauncherPlugin.controller$Launch.LaunchJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var options = JSON.parse($parameters.json);

if (options.extras) {
    options.extras = options.extras.map(function(extra) {
    if (Array.isArray(extra.value) && extra.value.length === 1) {
        extra.value = extra.value[0];
    }
    return extra;
    });
}

function onSuccess(data) {
    if (data.isActivityDone) {
        $parameters.Success = true;
        $parameters.Return = JSON.stringify(data);
        $parameters.ErrorMessage = "";
        $resolve();
    }
}

function onError(errorMessage) {
    $parameters.Success = false;
    $parameters.ErrorMessage = errorMessage;
    $resolve();
}

window.plugins.launcher.launch(options, onSuccess, onError);
});
};
});

define("Connect2_AppLauncherPlugin.controller$LaunchWithData", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$Launch", "Connect2_AppLauncherPlugin.model$LauncherParametersRec"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController) {
var OS = OutSystems.Internal;
Connect2_AppLauncherPluginController.default.launchWithData$Action = function (dataIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.LaunchWithData$vars"))());
vars.value.dataInLocal = dataIn.clone();
var launchVar = new OS.DataTypes.VariableHolder();
var jSONSerializeDataVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_AppLauncherPlugin.LaunchWithData$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.launchVar = launchVar;
varBag.jSONSerializeDataVar = jSONSerializeDataVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("Lz7CihCfDkmyElphyY1Ebw:e+mTvI_OFUGy_B66HvIyQA:/ClientActionFlows.e+mTvI_OFUGy_B66HvIyQA:r0itGG+qSjZ8P+2OJO5lpw", "Connect2_AppLauncherPlugin", "LaunchWithData", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:rVLbU8K_LE+RNDrxZqp8hg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:2olh_I2I+ku1LmE8WhW3OQ", callContext.id);
// JSON Serialize: JSONSerializeData
jSONSerializeDataVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.dataInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:naG82wVD90+u_Jnc2yxubg", callContext.id);
// Execute Action: Launch
return Connect2_AppLauncherPluginController.default.launch$Action(jSONSerializeDataVar.value.jSONOut, callContext).then(function (value) {
launchVar.value = value;
}).then(function () {
// Set Values
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:FymMGTa5OUWmI__3M9njeQ", callContext.id);
// ReturnData = Launch.ReturnData
outVars.value.returnDataOut = launchVar.value.returnDataOut;
OutSystemsDebugger.handleBreakpoint("Lz7CihCfDkmyElphyY1Ebw:FkZIPSMWUkWlNBnJ0Cm4nA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("Lz7CihCfDkmyElphyY1Ebw:e+mTvI_OFUGy_B66HvIyQA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Lz7CihCfDkmyElphyY1Ebw:e+mTvI_OFUGy_B66HvIyQA", callContext.id);
throw ex;

});
};
var controller = Connect2_AppLauncherPluginController.default;
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.LaunchWithData$vars", [{
name: "Data",
attrName: "dataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_AppLauncherPluginModel.LauncherParametersRec();
},
complexType: Connect2_AppLauncherPluginModel.LauncherParametersRec
}]);
Connect2_AppLauncherPluginController.default.constructor.registerVariableGroupType("Connect2_AppLauncherPlugin.LaunchWithData$outVars", [{
name: "ReturnData",
attrName: "returnDataOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_AppLauncherPluginModel.LauncherReturnRec();
},
complexType: Connect2_AppLauncherPluginModel.LauncherReturnRec
}]);
Connect2_AppLauncherPluginController.default.clientActionProxies.launchWithData$Action = function (dataIn) {
dataIn = (dataIn === undefined) ? new Connect2_AppLauncherPluginModel.LauncherParametersRec() : dataIn;
return controller.executeActionInsideJSNode(Connect2_AppLauncherPluginController.default.launchWithData$Action.bind(controller, dataIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ReturnData: actionResults.returnDataOut
};
});
};
});

define("Connect2_AppLauncherPlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller$debugger"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPlugin_Controller_debugger) {
var OS = OutSystems.Internal;
var Connect2_AppLauncherPluginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return Connect2_AppLauncherPluginController.default.defaultTimeout;
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
Connect2_AppLauncherPluginController.default = new Controller(null, "Connect2_AppLauncherPlugin");
});
define("Connect2_AppLauncherPlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"2qw__4qBrke00OO4NGd2Xw": {
getter: function (varBag, idService) {
return varBag.vars.value.jSONInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FhYe2Eg9d0iSyNdZMO99Ig": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ypsqL9BT902LAFEm_1RFjQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HhiNbZ4kJUmf3hrNMR59kg": {
getter: function (varBag, idService) {
return varBag.checkAppLauncherPluginVar.value;
}
},
"TbhDKtAX2kaw+zNHORyYrw": {
getter: function (varBag, idService) {
return varBag.canLaunchJSJSResult.value;
}
},
"hqW3rPhfZUaQYl534v4tUA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAvailableOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"sxvLxSky3k+KKHzFshEdZg": {
getter: function (varBag, idService) {
return varBag.isPluginAvailableJSJSResult.value;
}
},
"5Vnru3DplkWqHykWPiFegQ": {
getter: function (varBag, idService) {
return varBag.vars.value.dataInLocal;
}
},
"Pq9W3srcfEqmG+gIBRmR0w": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"757IAHoyIEeFKh0YnfDFow": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5Dcz4Bq6w0qz4dqVDzTnag": {
getter: function (varBag, idService) {
return varBag.canLaunchVar.value;
}
},
"3wzRdEImcECaoz01mr4gfA": {
getter: function (varBag, idService) {
return varBag.jSONSerializeDataVar.value;
}
},
"qITqFp9gH0OuNo6vlPXKqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.dataInLocal;
}
},
"RUnKnCIpNUCBQBYU+YQqjQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.returnDataOut;
}
},
"naG82wVD90+u_Jnc2yxubg": {
getter: function (varBag, idService) {
return varBag.launchVar.value;
}
},
"2olh_I2I+ku1LmE8WhW3OQ": {
getter: function (varBag, idService) {
return varBag.jSONSerializeDataVar.value;
}
},
"E4SgxoUHM0a+TW4Zjt7fuQ": {
getter: function (varBag, idService) {
return varBag.vars.value.jSONInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"le2WU3FWLkeJptoClkloew": {
getter: function (varBag, idService) {
return varBag.outVars.value.returnDataOut;
}
},
"n1BEBkbcRkaZI5AU8rToXg": {
getter: function (varBag, idService) {
return varBag.checkAppLauncherPluginVar.value;
}
},
"pbqCUzqHLUSaLOkBArNYSQ": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeLauncherReturnVar.value;
}
},
"_1lULvBSGUKeA2ubC7zcgQ": {
getter: function (varBag, idService) {
return varBag.launchJSJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
