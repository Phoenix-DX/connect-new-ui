define("PlaceholderLib.controller$GetLocalDatePlaceholderFunction_Value", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.controller", "PlaceholderLib.model$PlaceholderRec", "PlaceholderLib.model$PlaceholderParametersRec"], function (exports, OutSystems, PlaceholderLibModel, PlaceholderLibController) {
var OS = OutSystems.Internal;
PlaceholderLibController.default.getLocalDatePlaceholderFunction_Value$Action = function (placeholderIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PlaceholderLib.GetLocalDatePlaceholderFunction_Value$vars"))());
vars.value.placeholderInLocal = placeholderIn.clone();
var jSONDeserialize_ParametersVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PlaceholderLibModel.PlaceholderParametersRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PlaceholderLib.GetLocalDatePlaceholderFunction_Value$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONDeserialize_ParametersVar = jSONDeserialize_ParametersVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("50wTP4ZEJ0eGTwD2xNXWHQ:hb5RmsbVH0meEFfdjwsUYg:/ClientActionFlows.hb5RmsbVH0meEFfdjwsUYg:rUANCYHqaTasImh1vQyuAw", "PlaceholderLib", "GetLocalDatePlaceholderFunction_Value", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:KKERwGLoz02SolBvFCrHTw", callContext.id);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:eHRM3l9K+kSQa+XITND3+g", callContext.id);
// JSON Deserialize: JSONDeserialize_Parameters
jSONDeserialize_ParametersVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.placeholderInLocal.parametersAttr, PlaceholderLibModel.PlaceholderParametersRec, false);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:hVZbJEiIRkWfx28XWxyPLw", callContext.id);
// PlaceholderValue = FormatDateTime
outVars.value.placeholderValueOut = OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDateTime(jSONDeserialize_ParametersVar.value.dataOut.parameter1Attr), jSONDeserialize_ParametersVar.value.dataOut.parameter2Attr);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:UPSXuon5E0C7EVxEkADkKQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("50wTP4ZEJ0eGTwD2xNXWHQ:hb5RmsbVH0meEFfdjwsUYg", callContext.id);
}

};
var controller = PlaceholderLibController.default;
PlaceholderLibController.default.constructor.registerVariableGroupType("PlaceholderLib.GetLocalDatePlaceholderFunction_Value$vars", [{
name: "Placeholder",
attrName: "placeholderInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new PlaceholderLibModel.PlaceholderRec();
},
complexType: PlaceholderLibModel.PlaceholderRec
}]);
PlaceholderLibController.default.constructor.registerVariableGroupType("PlaceholderLib.GetLocalDatePlaceholderFunction_Value$outVars", [{
name: "PlaceholderValue",
attrName: "placeholderValueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
PlaceholderLibController.default.clientActionProxies.getLocalDatePlaceholderFunction_Value$Action = function (placeholderIn) {
placeholderIn = (placeholderIn === undefined) ? new PlaceholderLibModel.PlaceholderRec() : placeholderIn;
return controller.executeActionInsideJSNode(PlaceholderLibController.default.getLocalDatePlaceholderFunction_Value$Action.bind(controller, placeholderIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
PlaceholderValue: OS.DataConversion.JSNodeParamConverter.to(actionResults.placeholderValueOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("PlaceholderLib.controller$GetPlaceholderValue", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.controller", "PlaceholderLib.model$PlaceholderRec", "PlaceholderLib.controller$GetLocalDatePlaceholderFunction_Value", "PlaceholderLib.controller$GetTargetNamePlaceholderFunction_Value", "PlaceholderLib.model$PlaceholderParametersRec"], function (exports, OutSystems, PlaceholderLibModel, PlaceholderLibController) {
var OS = OutSystems.Internal;
PlaceholderLibController.default.getPlaceholderValue$Action = function (placeholderIn, fromClientApp_NameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PlaceholderLib.GetPlaceholderValue$vars"))());
vars.value.placeholderInLocal = placeholderIn.clone();
vars.value.fromClientApp_NameInLocal = fromClientApp_NameIn;
var getLocalDatePlaceholderFunction_ValueVar = new OS.DataTypes.VariableHolder();
var getTargetNamePlaceholderFunction_Value2Var = new OS.DataTypes.VariableHolder();
var jSONSerialize_InputParameterVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PlaceholderLib.GetPlaceholderValue$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalDatePlaceholderFunction_ValueVar = getLocalDatePlaceholderFunction_ValueVar;
varBag.getTargetNamePlaceholderFunction_Value2Var = getTargetNamePlaceholderFunction_Value2Var;
varBag.jSONSerialize_InputParameterVar = jSONSerialize_InputParameterVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("50wTP4ZEJ0eGTwD2xNXWHQ:GJqY8dSZfkGh0hSrhlpRbQ:/ClientActionFlows.GJqY8dSZfkGh0hSrhlpRbQ:TR7PKYyHqie4gCM4sF8JPg", "PlaceholderLib", "GetPlaceholderValue", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:wZkebk7qaU+JKOxaXTRJVg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:PSzNTZf6fEu1VIaWd7SSqg", callContext.id) && (vars.value.placeholderInLocal.placeholderFunctionIdAttr === PlaceholderLibModel.staticEntities.placeholderFunction.localDateTime))) {
// <<
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:3izjieTfCEya2L0Lj7RxxQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:ANIsinHQCkGd0i+UI1+Jow", callContext.id);
// Execute Action: GetLocalDatePlaceholderFunction_Value
getLocalDatePlaceholderFunction_ValueVar.value = PlaceholderLibController.default.getLocalDatePlaceholderFunction_Value$Action(vars.value.placeholderInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:fyayCYHM8kCr0kO+cfWSfA", callContext.id);
// Value = GetLocalDatePlaceholderFunction_Value.PlaceholderValue
outVars.value.valueOut = getLocalDatePlaceholderFunction_ValueVar.value.placeholderValueOut;
} else {
if((vars.value.placeholderInLocal.placeholderFunctionIdAttr === PlaceholderLibModel.staticEntities.placeholderFunction.firstName)) {
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:ly5wnhSxyECYPqP36cbUvQ", callContext.id);
// InputPlaceholderParameters.Parameter1 = FromClientApp_Name
vars.value.inputPlaceholderParametersVar.parameter1Attr = vars.value.fromClientApp_NameInLocal;
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:Fx_HlJDGyEqf287foBRgqA", callContext.id);
// JSON Serialize: JSONSerialize_InputParameter
jSONSerialize_InputParameterVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.inputPlaceholderParametersVar, false, false);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:32Jr0MWmg0WWxgmRKjjF_A", callContext.id);
// Execute Action: GetTargetNamePlaceholderFunction_Value2
getTargetNamePlaceholderFunction_Value2Var.value = PlaceholderLibController.default.getTargetNamePlaceholderFunction_Value$Action(function () {
var rec = new PlaceholderLibModel.PlaceholderRec();
rec.placeholderFunctionIdAttr = vars.value.placeholderInLocal.placeholderFunctionIdAttr;
rec.parametersAttr = jSONSerialize_InputParameterVar.value.jSONOut;
return rec;
}(), callContext);

OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:MgDY6pckYk2sM8er1IbNkg", callContext.id);
// Value = GetTargetNamePlaceholderFunction_Value2.PlaceholderValue
outVars.value.valueOut = getTargetNamePlaceholderFunction_Value2Var.value.placeholderValueOut;
} else {
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:E04LAuWhEE6RAnBjTeLMmw", callContext.id);
// Value = ""
outVars.value.valueOut = "";
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:YO_+CE2QGUKPjFzcu+ukiA", callContext.id);
return outVars.value;

}

}

// >>
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:i+ocRKlfuEmV0+sRP1fd2A", callContext.id);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:zuBts1qSukWcvXFmRkXnjg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("50wTP4ZEJ0eGTwD2xNXWHQ:GJqY8dSZfkGh0hSrhlpRbQ", callContext.id);
}

};
var controller = PlaceholderLibController.default;
PlaceholderLibController.default.constructor.registerVariableGroupType("PlaceholderLib.GetPlaceholderValue$vars", [{
name: "Placeholder",
attrName: "placeholderInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new PlaceholderLibModel.PlaceholderRec();
},
complexType: PlaceholderLibModel.PlaceholderRec
}, {
name: "FromClientApp_Name",
attrName: "fromClientApp_NameInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "InputPlaceholderParameters",
attrName: "inputPlaceholderParametersVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new PlaceholderLibModel.PlaceholderParametersRec();
},
complexType: PlaceholderLibModel.PlaceholderParametersRec
}]);
PlaceholderLibController.default.constructor.registerVariableGroupType("PlaceholderLib.GetPlaceholderValue$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
PlaceholderLibController.default.clientActionProxies.getPlaceholderValue$Action = function (placeholderIn, fromClientApp_NameIn) {
placeholderIn = (placeholderIn === undefined) ? new PlaceholderLibModel.PlaceholderRec() : placeholderIn;
fromClientApp_NameIn = (fromClientApp_NameIn === undefined) ? "" : fromClientApp_NameIn;
return controller.executeActionInsideJSNode(PlaceholderLibController.default.getPlaceholderValue$Action.bind(controller, placeholderIn, OS.DataConversion.JSNodeParamConverter.from(fromClientApp_NameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataConversion.JSNodeParamConverter.to(actionResults.valueOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("PlaceholderLib.controller$GetTargetNamePlaceholderFunction_Value", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.controller", "PlaceholderLib.model$PlaceholderRec", "PlaceholderLib.model$PlaceholderParametersRec"], function (exports, OutSystems, PlaceholderLibModel, PlaceholderLibController) {
var OS = OutSystems.Internal;
PlaceholderLibController.default.getTargetNamePlaceholderFunction_Value$Action = function (placeholderIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PlaceholderLib.GetTargetNamePlaceholderFunction_Value$vars"))());
vars.value.placeholderInLocal = placeholderIn.clone();
var jSONDeserialize_ParametersVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(PlaceholderLibModel.PlaceholderParametersRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PlaceholderLib.GetTargetNamePlaceholderFunction_Value$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONDeserialize_ParametersVar = jSONDeserialize_ParametersVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("50wTP4ZEJ0eGTwD2xNXWHQ:sSzgek0IXkOEsuVTRLYyjg:/ClientActionFlows.sSzgek0IXkOEsuVTRLYyjg:Hi6XunEgAkCiua+6WpQTdg", "PlaceholderLib", "GetTargetNamePlaceholderFunction_Value", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:8ALkKrZHwUWjf5e3kzdfvQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:mM0KNFbqy0Gg869jSuBHzA", callContext.id);
// JSON Deserialize: JSONDeserialize_Parameters
jSONDeserialize_ParametersVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.placeholderInLocal.parametersAttr, PlaceholderLibModel.PlaceholderParametersRec, false);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:KS5zTiSRI0S7W3tBFjEgqA", callContext.id);
// PlaceholderValue = JSONDeserialize_Parameters.Data.Parameter1
outVars.value.placeholderValueOut = jSONDeserialize_ParametersVar.value.dataOut.parameter1Attr;
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:tsZ1Gx1rzECberqGWffpCw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("50wTP4ZEJ0eGTwD2xNXWHQ:sSzgek0IXkOEsuVTRLYyjg", callContext.id);
}

};
var controller = PlaceholderLibController.default;
PlaceholderLibController.default.constructor.registerVariableGroupType("PlaceholderLib.GetTargetNamePlaceholderFunction_Value$vars", [{
name: "Placeholder",
attrName: "placeholderInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new PlaceholderLibModel.PlaceholderRec();
},
complexType: PlaceholderLibModel.PlaceholderRec
}]);
PlaceholderLibController.default.constructor.registerVariableGroupType("PlaceholderLib.GetTargetNamePlaceholderFunction_Value$outVars", [{
name: "PlaceholderValue",
attrName: "placeholderValueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
PlaceholderLibController.default.clientActionProxies.getTargetNamePlaceholderFunction_Value$Action = function (placeholderIn) {
placeholderIn = (placeholderIn === undefined) ? new PlaceholderLibModel.PlaceholderRec() : placeholderIn;
return controller.executeActionInsideJSNode(PlaceholderLibController.default.getTargetNamePlaceholderFunction_Value$Action.bind(controller, placeholderIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
PlaceholderValue: OS.DataConversion.JSNodeParamConverter.to(actionResults.placeholderValueOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("PlaceholderLib.controller$Regex_Search", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.controller", "PlaceholderLib.controller$Regex_Search.RegExSearchJS"], function (exports, OutSystems, PlaceholderLibModel, PlaceholderLibController, PlaceholderLib_controller_Regex_Search_RegExSearchJS) {
var OS = OutSystems.Internal;
PlaceholderLibController.default.regex_Search$Action = function (textIn, patternIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PlaceholderLib.Regex_Search$vars"))());
vars.value.textInLocal = textIn;
vars.value.patternInLocal = patternIn;
var regExSearchJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PlaceholderLib.Regex_Search$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.regExSearchJSResult = regExSearchJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("50wTP4ZEJ0eGTwD2xNXWHQ:um6Lu6gch0ygNLe5JsSEeg:/ClientActionFlows.um6Lu6gch0ygNLe5JsSEeg:YdyGKFTSrMnhMqsXUvikxg", "PlaceholderLib", "Regex_Search", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:j1T9ZT1HH0uuJ2JeVN8rdw", callContext.id);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:Avcu6OsECke3scvUGcV86g", callContext.id);
regExSearchJSResult.value = controller.safeExecuteJSNode(PlaceholderLib_controller_Regex_Search_RegExSearchJS, "RegExSearch", "Regex_Search", {
Pattern: OS.DataConversion.JSNodeParamConverter.to(vars.value.patternInLocal, OS.DataTypes.DataTypes.Text),
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.textInLocal, OS.DataTypes.DataTypes.Text),
Found: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
PatternResult: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
FirstIndex: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("PlaceholderLib.Regex_Search$regExSearchJSResult"))();
jsNodeResult.foundOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Found, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.patternResultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.PatternResult, OS.DataTypes.DataTypes.Text);
jsNodeResult.firstIndexOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FirstIndex, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:gI9AR9k7jk+QiDA0RNdSUA", callContext.id);
// Found = RegExSearch.Found
outVars.value.foundOut = regExSearchJSResult.value.foundOut;
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:gI9AR9k7jk+QiDA0RNdSUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PatternResult = RegExSearch.PatternResult
outVars.value.patternResultOut = regExSearchJSResult.value.patternResultOut;
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:gI9AR9k7jk+QiDA0RNdSUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// FirstIndex = RegExSearch.FirstIndex
outVars.value.firstIndexOut = regExSearchJSResult.value.firstIndexOut;
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:UXugBSWdlE2VqrN8Xulb_w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("50wTP4ZEJ0eGTwD2xNXWHQ:um6Lu6gch0ygNLe5JsSEeg", callContext.id);
}

};
var controller = PlaceholderLibController.default;
PlaceholderLibController.default.constructor.registerVariableGroupType("PlaceholderLib.Regex_Search$vars", [{
name: "Text",
attrName: "textInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Pattern",
attrName: "patternInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
PlaceholderLibController.default.constructor.registerVariableGroupType("PlaceholderLib.Regex_Search$regExSearchJSResult", [{
name: "Found",
attrName: "foundOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "PatternResult",
attrName: "patternResultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FirstIndex",
attrName: "firstIndexOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
PlaceholderLibController.default.constructor.registerVariableGroupType("PlaceholderLib.Regex_Search$outVars", [{
name: "Found",
attrName: "foundOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "PatternResult",
attrName: "patternResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FirstIndex",
attrName: "firstIndexOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
PlaceholderLibController.default.clientActionProxies.regex_Search$Action = function (textIn, patternIn) {
textIn = (textIn === undefined) ? "" : textIn;
patternIn = (patternIn === undefined) ? "" : patternIn;
return controller.executeActionInsideJSNode(PlaceholderLibController.default.regex_Search$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(textIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(patternIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Found: OS.DataConversion.JSNodeParamConverter.to(actionResults.foundOut, OS.DataTypes.DataTypes.Boolean),
PatternResult: OS.DataConversion.JSNodeParamConverter.to(actionResults.patternResultOut, OS.DataTypes.DataTypes.Text),
FirstIndex: OS.DataConversion.JSNodeParamConverter.to(actionResults.firstIndexOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});
define("PlaceholderLib.controller$Regex_Search.RegExSearchJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function regexSearch(inputString, pattern) {
    let regex = new RegExp(pattern, 'g');
    let matches = inputString.match(regex);
    let found = matches !== null;
    let firstIndex = found ? inputString.search(regex) : -1;
    return {
        matches: matches,
        found: found,
        firstIndex: firstIndex
    };
}

let result = regexSearch($parameters.Text, $parameters.Pattern);
$parameters.Found = result.found;
$parameters.PatternResult = result.matches !== null ? result.matches[0] : "";
$parameters.FirstIndex = result.firstIndex;


};
});

define("PlaceholderLib.controller$SetTextPlaceholdersValue", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.controller", "PlaceholderLib.model$PlaceholderRec", "PlaceholderLib.controller$GetPlaceholderValue", "PlaceholderLib.controller$Regex_Search", "PlaceholderLib.controller$SetTextPlaceholdersValue"], function (exports, OutSystems, PlaceholderLibModel, PlaceholderLibController) {
var OS = OutSystems.Internal;
PlaceholderLibController.default.setTextPlaceholdersValue$Action = function (textIn, delimiter_PlaceholderIn, delimiter_FunctionIn, delimiter_ParameterIn, fromClientApp_NameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PlaceholderLib.SetTextPlaceholdersValue$vars"))());
vars.value.textInLocal = textIn;
vars.value.delimiter_PlaceholderInLocal = delimiter_PlaceholderIn;
vars.value.delimiter_FunctionInLocal = delimiter_FunctionIn;
vars.value.delimiter_ParameterInLocal = delimiter_ParameterIn;
vars.value.fromClientApp_NameInLocal = fromClientApp_NameIn;
var getPlaceholderValueVar = new OS.DataTypes.VariableHolder();
var regex_Search_ParametersVar = new OS.DataTypes.VariableHolder();
var setTextPlaceholdersValueVar = new OS.DataTypes.VariableHolder();
var regex_Search_FunctionVar = new OS.DataTypes.VariableHolder();
var regex_Search_PlaceholderVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("PlaceholderLib.SetTextPlaceholdersValue$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getPlaceholderValueVar = getPlaceholderValueVar;
varBag.regex_Search_ParametersVar = regex_Search_ParametersVar;
varBag.setTextPlaceholdersValueVar = setTextPlaceholdersValueVar;
varBag.regex_Search_FunctionVar = regex_Search_FunctionVar;
varBag.regex_Search_PlaceholderVar = regex_Search_PlaceholderVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("50wTP4ZEJ0eGTwD2xNXWHQ:j3y00qOd0kO_kut_6j3znw:/ClientActionFlows.j3y00qOd0kO_kut_6j3znw:NLK1EX_P+a0gwBCiWbrlKw", "PlaceholderLib", "SetTextPlaceholdersValue", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:ub8iuQJzAkmBrh5LsTDAIA", callContext.id);
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:1inOI8ALcUKW6TmnH0nXVg", callContext.id);
// ProcessedText = Text
outVars.value.processedTextOut = vars.value.textInLocal;
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:0z5AyXwJJ0qv2dUAYw5NnA", callContext.id);
// Execute Action: Regex_Search_Placeholder
regex_Search_PlaceholderVar.value = PlaceholderLibController.default.regex_Search$Action(outVars.value.processedTextOut, ((vars.value.delimiter_PlaceholderInLocal + "(.*?)") + vars.value.delimiter_PlaceholderInLocal), callContext);

// Found placeholder?
if((OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:fA4XmIm7Sk+ZIHrTi8t7pA", callContext.id) && regex_Search_PlaceholderVar.value.foundOut)) {
do {
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:D__4we+bUEe_XkjX4sf4bg", callContext.id);
// Execute Action: Regex_Search_Function
regex_Search_FunctionVar.value = PlaceholderLibController.default.regex_Search$Action(outVars.value.processedTextOut, ((vars.value.delimiter_FunctionInLocal + "(.*?)") + vars.value.delimiter_FunctionInLocal), callContext);

// Found function?
if((OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:4tE3DOnpu0yHK3Pmxqy1jg", callContext.id) && regex_Search_FunctionVar.value.foundOut)) {
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:DE7_f62Dxk+2ZYFtk4EfAg", callContext.id);
// Regex_Search_Function.PatternResult = Replace
regex_Search_FunctionVar.value.patternResultOut = OS.BuiltinFunctions.replace(regex_Search_FunctionVar.value.patternResultOut, vars.value.delimiter_FunctionInLocal, "");
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:C+xeVCdOEUO9uL2lQZcuMg", callContext.id);
// Execute Action: Regex_Search_Parameters
regex_Search_ParametersVar.value = PlaceholderLibController.default.regex_Search$Action(outVars.value.processedTextOut, ((vars.value.delimiter_ParameterInLocal + "(.*?)") + vars.value.delimiter_ParameterInLocal), callContext);

// Found parameters?
if((OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:Pn9Eg7Cyik+Xb95X1RgCaw", callContext.id) && regex_Search_ParametersVar.value.foundOut)) {
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:3NiDE+bFrUmr7qGvP1QluQ", callContext.id);
// Regex_Search_Parameters.PatternResult = Replace
regex_Search_ParametersVar.value.patternResultOut = OS.BuiltinFunctions.replace(regex_Search_ParametersVar.value.patternResultOut, vars.value.delimiter_ParameterInLocal, "");
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:BWjXN9uMCkCp0PKGA1uDYw", callContext.id);
// Execute Action: GetPlaceholderValue
getPlaceholderValueVar.value = PlaceholderLibController.default.getPlaceholderValue$Action(function () {
var rec = new PlaceholderLibModel.PlaceholderRec();
rec.placeholderFunctionIdAttr = OS.BuiltinFunctions.textToIdentifier(regex_Search_FunctionVar.value.patternResultOut);
rec.parametersAttr = regex_Search_ParametersVar.value.patternResultOut;
return rec;
}(), vars.value.fromClientApp_NameInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:DuuYGyZVnECy0wL0GdU33g", callContext.id);
// ProcessedText = If
outVars.value.processedTextOut = (((getPlaceholderValueVar.value.valueOut === "")) ? (outVars.value.processedTextOut) : (((OS.BuiltinFunctions.substr(outVars.value.processedTextOut, 0, regex_Search_PlaceholderVar.value.firstIndexOut) + getPlaceholderValueVar.value.valueOut) + OS.BuiltinFunctions.substr(outVars.value.processedTextOut, (regex_Search_PlaceholderVar.value.firstIndexOut + OS.BuiltinFunctions.length(regex_Search_PlaceholderVar.value.patternResultOut)), OS.BuiltinFunctions.length(outVars.value.processedTextOut)))));
break;
}

} else {
// >>
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:KOWVXtjV50qKU8iz56jiDA", callContext.id);
}

// >>
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:Hujh1dEvXUusAi3rrK7Lrw", callContext.id);
// <<
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:fVtwBAnsd0iU3wghUBhgUQ", callContext.id);
} while(false)
;
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:Ys2ZiHHkoUG1p1ArCeZ97w", callContext.id);
// Execute Action: SetTextPlaceholdersValue
setTextPlaceholdersValueVar.value = PlaceholderLibController.default.setTextPlaceholdersValue$Action(outVars.value.processedTextOut, vars.value.delimiter_PlaceholderInLocal, vars.value.delimiter_FunctionInLocal, vars.value.delimiter_ParameterInLocal, vars.value.fromClientApp_NameInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:_1LboLvKq0em6t1tMVowYQ", callContext.id);
// ProcessedText = SetTextPlaceholdersValue.ProcessedText
outVars.value.processedTextOut = setTextPlaceholdersValueVar.value.processedTextOut;
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:tCI9HIp7VESsp30KawX36A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("50wTP4ZEJ0eGTwD2xNXWHQ:LViMoVHaJEmBM+s5oHGpbw", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("50wTP4ZEJ0eGTwD2xNXWHQ:j3y00qOd0kO_kut_6j3znw", callContext.id);
}

};
var controller = PlaceholderLibController.default;
PlaceholderLibController.default.constructor.registerVariableGroupType("PlaceholderLib.SetTextPlaceholdersValue$vars", [{
name: "Text",
attrName: "textInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Delimiter_Placeholder",
attrName: "delimiter_PlaceholderInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Delimiter_Function",
attrName: "delimiter_FunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Delimiter_Parameter",
attrName: "delimiter_ParameterInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FromClientApp_Name",
attrName: "fromClientApp_NameInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
PlaceholderLibController.default.constructor.registerVariableGroupType("PlaceholderLib.SetTextPlaceholdersValue$outVars", [{
name: "ProcessedText",
attrName: "processedTextOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
PlaceholderLibController.default.clientActionProxies.setTextPlaceholdersValue$Action = function (textIn, delimiter_PlaceholderIn, delimiter_FunctionIn, delimiter_ParameterIn, fromClientApp_NameIn) {
textIn = (textIn === undefined) ? "" : textIn;
delimiter_PlaceholderIn = (delimiter_PlaceholderIn === undefined) ? "" : delimiter_PlaceholderIn;
delimiter_FunctionIn = (delimiter_FunctionIn === undefined) ? "" : delimiter_FunctionIn;
delimiter_ParameterIn = (delimiter_ParameterIn === undefined) ? "" : delimiter_ParameterIn;
fromClientApp_NameIn = (fromClientApp_NameIn === undefined) ? "" : fromClientApp_NameIn;
return controller.executeActionInsideJSNode(PlaceholderLibController.default.setTextPlaceholdersValue$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(textIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(delimiter_PlaceholderIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(delimiter_FunctionIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(delimiter_ParameterIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fromClientApp_NameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ProcessedText: OS.DataConversion.JSNodeParamConverter.to(actionResults.processedTextOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("PlaceholderLib.controller", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.controller$debugger"], function (exports, OutSystems, PlaceholderLibModel, PlaceholderLib_Controller_debugger) {
var OS = OutSystems.Internal;
var PlaceholderLibController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return PlaceholderLibController.default.defaultTimeout;
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
PlaceholderLibController.default = new Controller(null, "PlaceholderLib");
});
define("PlaceholderLib.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"KRAyt_JZFkWGZWQrXADzvg": {
getter: function (varBag, idService) {
return varBag.vars.value.placeholderInLocal;
}
},
"a3aI4fHlt02+F18Nrv16AQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.placeholderValueOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mM0KNFbqy0Gg869jSuBHzA": {
getter: function (varBag, idService) {
return varBag.jSONDeserialize_ParametersVar.value;
}
},
"xdSXthu34kO5GYKYslJvzw": {
getter: function (varBag, idService) {
return varBag.vars.value.placeholderInLocal;
}
},
"9zxQmaOrCUuwxbGcQtThFg": {
getter: function (varBag, idService) {
return varBag.outVars.value.placeholderValueOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"eHRM3l9K+kSQa+XITND3+g": {
getter: function (varBag, idService) {
return varBag.jSONDeserialize_ParametersVar.value;
}
},
"cDiQPMhrFkmpYuxxxTeDlQ": {
getter: function (varBag, idService) {
return varBag.vars.value.textInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4enMzdeL+kmXiX4NeG8mEQ": {
getter: function (varBag, idService) {
return varBag.vars.value.patternInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1SYKA9mKu0eBOfej+UHL3g": {
getter: function (varBag, idService) {
return varBag.outVars.value.foundOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"erhz7eRK5UO6GFpt5Pu8kA": {
getter: function (varBag, idService) {
return varBag.outVars.value.patternResultOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"V5x9hMS4IEeHiqRCFrIXpQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.firstIndexOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Avcu6OsECke3scvUGcV86g": {
getter: function (varBag, idService) {
return varBag.regExSearchJSResult.value;
}
},
"s5rP2f2O9EO+C+sujdSUGw": {
getter: function (varBag, idService) {
return varBag.vars.value.textInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"j2nqhT0aoUakVKpe1kSkqw": {
getter: function (varBag, idService) {
return varBag.vars.value.delimiter_PlaceholderInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rrpODtWjcU2mKiUBwwIoCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.delimiter_FunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GtCXjQi8ok+GwCtEREhhYQ": {
getter: function (varBag, idService) {
return varBag.vars.value.delimiter_ParameterInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HhycWo0hrUK18KP_8QVvGg": {
getter: function (varBag, idService) {
return varBag.vars.value.fromClientApp_NameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wMZM+rJAkU2OmHRM4ZiyTQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.processedTextOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BWjXN9uMCkCp0PKGA1uDYw": {
getter: function (varBag, idService) {
return varBag.getPlaceholderValueVar.value;
}
},
"C+xeVCdOEUO9uL2lQZcuMg": {
getter: function (varBag, idService) {
return varBag.regex_Search_ParametersVar.value;
}
},
"Ys2ZiHHkoUG1p1ArCeZ97w": {
getter: function (varBag, idService) {
return varBag.setTextPlaceholdersValueVar.value;
}
},
"D__4we+bUEe_XkjX4sf4bg": {
getter: function (varBag, idService) {
return varBag.regex_Search_FunctionVar.value;
}
},
"0z5AyXwJJ0qv2dUAYw5NnA": {
getter: function (varBag, idService) {
return varBag.regex_Search_PlaceholderVar.value;
}
},
"e+SwqaaN8UWf84Xgfsf4XA": {
getter: function (varBag, idService) {
return varBag.vars.value.inputPlaceholderParametersVar;
}
},
"QQafazcmH0SgiccaYssYyg": {
getter: function (varBag, idService) {
return varBag.vars.value.placeholderInLocal;
}
},
"6PybK6a5vUCWlF7p17WaEw": {
getter: function (varBag, idService) {
return varBag.vars.value.fromClientApp_NameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"a8ZflfpAlUiMa+WxEGWx8w": {
getter: function (varBag, idService) {
return varBag.outVars.value.valueOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ANIsinHQCkGd0i+UI1+Jow": {
getter: function (varBag, idService) {
return varBag.getLocalDatePlaceholderFunction_ValueVar.value;
}
},
"32Jr0MWmg0WWxgmRKjjF_A": {
getter: function (varBag, idService) {
return varBag.getTargetNamePlaceholderFunction_Value2Var.value;
}
},
"Fx_HlJDGyEqf287foBRgqA": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_InputParameterVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
