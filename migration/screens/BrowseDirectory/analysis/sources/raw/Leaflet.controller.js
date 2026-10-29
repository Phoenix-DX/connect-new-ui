define("Leaflet.controller$DecimalListToText", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.decimalListToText$Action = function (decimalListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.DecimalListToText$vars"))());
vars.value.decimalListInLocal = decimalListIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.DecimalListToText$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:nmEVnGUWJ0qlvavm4zAZLw:/ClientActionFlows.nmEVnGUWJ0qlvavm4zAZLw:au_XB327MNXJOql96+EoVQ", "Leaflet", "DecimalListToText", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:gEqolfagH0CQcipE9RRxNQ", callContext.id);
// Foreach DecimalList
callContext.iterationContext.registerIterationStart(vars.value.decimalListInLocal);
try {var decimalListIterator = callContext.iterationContext.getIterator(vars.value.decimalListInLocal);
var decimalListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:i6aEVXoef0WFoyUdhuzNpQ", callContext.id) && (decimalListIndex < vars.value.decimalListInLocal.length))) {
decimalListIterator.currentRowNumber = decimalListIndex;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:IelctIs7L0K5_I0pr8+wHg", callContext.id);
// Text = Text + If + DecimalList.Current
outVars.value.textOut = ((outVars.value.textOut + (((outVars.value.textOut === "")) ? ("") : (", "))) + OS.BuiltinFunctions.decimalToText(vars.value.decimalListInLocal.getItem(decimalListIndex.valueOf())));
decimalListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.decimalListInLocal);
}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:7ewndBq63UiJ8GcYvDATow", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:nmEVnGUWJ0qlvavm4zAZLw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.DecimalListToText$vars", [{
name: "DecimalList",
attrName: "decimalListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.DecimalList();
},
complexType: OS.DataTypes.DecimalList
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.DecimalListToText$outVars", [{
name: "Text",
attrName: "textOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.decimalListToText$Action = function (decimalListIn) {
decimalListIn = (decimalListIn === undefined) ? new OS.DataTypes.DecimalList() : decimalListIn;
return controller.executeActionInsideJSNode(LeafletController.default.decimalListToText$Action.bind(controller, decimalListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Text: OS.DataConversion.JSNodeParamConverter.to(actionResults.textOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$GenerateGUID", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$GenerateGUID.JavaScript1JS"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_GenerateGUID_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.generateGUID$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.GenerateGUID$outVars"))());
varBag.callContext = callContext;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:m5Ej3IIf_U2HKwAPUDaEEQ:/ClientActionFlows.m5Ej3IIf_U2HKwAPUDaEEQ:OpuzCHTnetFA9exO9pHPug", "Leaflet", "GenerateGUID", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:qKHSBEJeC0Cim9fhk0P3nQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ksONVi8pXUSBNX4cxgNmZA", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(Leaflet_controller_GenerateGUID_JavaScript1JS, "JavaScript1", "GenerateGUID", {
GUID: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.GenerateGUID$javaScript1JSResult"))();
jsNodeResult.gUIDOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GUID, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:vk+MBJJvNk+JKGBsO1vAJg", callContext.id);
// GUID = JavaScript1.GUID
outVars.value.gUIDOut = javaScript1JSResult.value.gUIDOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ITzriOUJikafab5I+CsSiQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:m5Ej3IIf_U2HKwAPUDaEEQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GenerateGUID$javaScript1JSResult", [{
name: "GUID",
attrName: "gUIDOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GenerateGUID$outVars", [{
name: "GUID",
attrName: "gUIDOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.generateGUID$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.generateGUID$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
GUID: OS.DataConversion.JSNodeParamConverter.to(actionResults.gUIDOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Leaflet.controller$GenerateGUID.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GUID = crypto.randomUUID();
};
});

define("Leaflet.controller$GeoJSON_Callback_Style", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$GeoJSON_Callback_Style.GetFeatureDataJS", "Leaflet.controller$GeoJSON_Callback_Style.TransformToObjectJS", "Leaflet.model$StyleRec"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_GeoJSON_Callback_Style_GetFeatureDataJS, Leaflet_controller_GeoJSON_Callback_Style_TransformToObjectJS) {
var OS = OutSystems.Internal;
LeafletController.default.geoJSON_Callback_Style$Action = function (featureIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.GeoJSON_Callback_Style$vars"))());
vars.value.featureInLocal = featureIn;
var getFeatureDataJSResult = new OS.DataTypes.VariableHolder();
var transformToObjectJSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.GeoJSON_Callback_Style$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getFeatureDataJSResult = getFeatureDataJSResult;
varBag.transformToObjectJSResult = transformToObjectJSResult;
varBag.jSONSerialize1Var = jSONSerialize1Var;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:mkiRqJWmL0aSiHQnFkrVsg:/ClientActionFlows.mkiRqJWmL0aSiHQnFkrVsg:mZG1pd8bFlNWWWG2SRgJLg", "Leaflet", "GeoJSON_Callback_Style", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:KZioLl082Ees8uzx3CvPxQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:YT59WF_LKk+CP5jKM_Os4w", callContext.id);
getFeatureDataJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_GeoJSON_Callback_Style_GetFeatureDataJS, "GetFeatureData", "GeoJSON_Callback_Style", {
Object: OS.DataConversion.JSNodeParamConverter.to(vars.value.featureInLocal, OS.DataTypes.DataTypes.Object),
Id: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.GeoJSON_Callback_Style$getFeatureDataJSResult"))();
jsNodeResult.idOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Id, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:3Qw6nYcxkEGYJliwR6tJmg", callContext.id) && (getFeatureDataJSResult.value.idOut === "CRI"))) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:EIZBuqxrXkmfCoSrfFmKyg", callContext.id);
// StyleStr.Color = "#ff7800"
vars.value.styleStrVar.colorAttr = "#ff7800";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:EIZBuqxrXkmfCoSrfFmKyg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StyleStr.Weight = 5
vars.value.styleStrVar.weightAttr = OS.BuiltinFunctions.integerToLongInteger(5);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:EIZBuqxrXkmfCoSrfFmKyg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// StyleStr.Opacity = 1
vars.value.styleStrVar.opacityAttr = OS.BuiltinFunctions.integerToDecimal(1);
} else {
if((getFeatureDataJSResult.value.idOut === "NIC")) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:a4_2siMtyES_Z4zQprin5g", callContext.id);
// StyleStr.Color = "#880808"
vars.value.styleStrVar.colorAttr = "#880808";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:a4_2siMtyES_Z4zQprin5g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StyleStr.Weight = 5
vars.value.styleStrVar.weightAttr = OS.BuiltinFunctions.integerToLongInteger(5);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:a4_2siMtyES_Z4zQprin5g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// StyleStr.Opacity = 1
vars.value.styleStrVar.opacityAttr = OS.BuiltinFunctions.integerToDecimal(1);
} else {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:RUjuFbH88UmxNJrFVRgLTg", callContext.id);
return outVars.value;

}

}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:UVe0ylq8I0aKv4uo6OOKOQ", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.styleStrVar, false, false);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:0Ovo4ST9B0ilB_vrGNecbg", callContext.id);
transformToObjectJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_GeoJSON_Callback_Style_TransformToObjectJS, "TransformToObject", "GeoJSON_Callback_Style", {
JSON: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.GeoJSON_Callback_Style$transformToObjectJSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:dNQlTXxyYk6YwntQ4NHy+Q", callContext.id);
// Style = TransformToObject.Object
outVars.value.styleOut = transformToObjectJSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:xXWPfOpgG0OjIOAwePJO1A", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:mkiRqJWmL0aSiHQnFkrVsg", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GeoJSON_Callback_Style$vars", [{
name: "Feature",
attrName: "featureInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "StyleStr",
attrName: "styleStrVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new LeafletModel.StyleRec();
},
complexType: LeafletModel.StyleRec
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GeoJSON_Callback_Style$getFeatureDataJSResult", [{
name: "Id",
attrName: "idOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GeoJSON_Callback_Style$transformToObjectJSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GeoJSON_Callback_Style$outVars", [{
name: "Style",
attrName: "styleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.geoJSON_Callback_Style$Action = function (featureIn) {
featureIn = (featureIn === undefined) ? null : featureIn;
return controller.executeActionInsideJSNode(LeafletController.default.geoJSON_Callback_Style$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(featureIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Style: OS.DataConversion.JSNodeParamConverter.to(actionResults.styleOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Leaflet.controller$GeoJSON_Callback_Style.GetFeatureDataJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Id = $parameters.Object.Id;
};
});
define("Leaflet.controller$GeoJSON_Callback_Style.TransformToObjectJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Object = JSON.parse($parameters.JSON);
};
});

define("Leaflet.controller$GetFromObject_Array", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$GetFromObject_Array.GetObjectJS"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_GetFromObject_Array_GetObjectJS) {
var OS = OutSystems.Internal;
LeafletController.default.getFromObject_Array$Action = function (mainObjectIdIn, arrayKeyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.GetFromObject_Array$vars"))());
vars.value.mainObjectIdInLocal = mainObjectIdIn;
vars.value.arrayKeyInLocal = arrayKeyIn;
var getObjectJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.GetFromObject_Array$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getObjectJSResult = getObjectJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:ONQaRQNZ0Ui4IIlZY1vLpA:/ClientActionFlows.ONQaRQNZ0Ui4IIlZY1vLpA:GMJdRtYXXwrP5JeoIxvLCw", "Leaflet", "GetFromObject_Array", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Bu4A_SapVkyXmj4BHwLEOA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:vw2b9oNqfEmeESpCqCC8yQ", callContext.id);
getObjectJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_GetFromObject_Array_GetObjectJS, "GetObject", "GetFromObject_Array", {
Key: OS.DataConversion.JSNodeParamConverter.to(vars.value.arrayKeyInLocal, OS.DataTypes.DataTypes.Text),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mainObjectIdInLocal, OS.DataTypes.DataTypes.Text),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.GetFromObject_Array$getObjectJSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Vhz49sNmSkKtk6p_diCHFw", callContext.id);
// Object = GetObject.Object
outVars.value.objectOut = getObjectJSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:r+HWMopLiEKMeonWEoQo8Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:ONQaRQNZ0Ui4IIlZY1vLpA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GetFromObject_Array$vars", [{
name: "MainObjectId",
attrName: "mainObjectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ArrayKey",
attrName: "arrayKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GetFromObject_Array$getObjectJSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GetFromObject_Array$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.getFromObject_Array$Action = function (mainObjectIdIn, arrayKeyIn) {
mainObjectIdIn = (mainObjectIdIn === undefined) ? "" : mainObjectIdIn;
arrayKeyIn = (arrayKeyIn === undefined) ? "" : arrayKeyIn;
return controller.executeActionInsideJSNode(LeafletController.default.getFromObject_Array$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mainObjectIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(arrayKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Leaflet.controller$GetFromObject_Array.GetObjectJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const el = document.getElementById($parameters.MapId);
if (el) {
    if(!el[$parameters.Key]) {
        el[$parameters.Key] = []
    }
  $parameters.Object = el[$parameters.Key];
}
};
});

define("Leaflet.controller$GetFromObject_Bool", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$GetFromObject_Bool.JavaScript1JS"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_GetFromObject_Bool_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.getFromObject_Bool$Action = function (mainObjectIdIn, newObjectKeyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.GetFromObject_Bool$vars"))());
vars.value.mainObjectIdInLocal = mainObjectIdIn;
vars.value.newObjectKeyInLocal = newObjectKeyIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.GetFromObject_Bool$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:B7qa3mEsaEWyzvQ2GrQnQQ:/ClientActionFlows.B7qa3mEsaEWyzvQ2GrQnQQ:awatQpBdqlx6SdFV+vZoLw", "Leaflet", "GetFromObject_Bool", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:OpZgrLiElUujQFTyWLNXqQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:P8h4j2XC9Eiz_OEV2IL4hA", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(Leaflet_controller_GetFromObject_Bool_JavaScript1JS, "JavaScript1", "GetFromObject_Bool", {
Key: OS.DataConversion.JSNodeParamConverter.to(vars.value.newObjectKeyInLocal, OS.DataTypes.DataTypes.Text),
MainObjectId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mainObjectIdInLocal, OS.DataTypes.DataTypes.Text),
Value: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.GetFromObject_Bool$javaScript1JSResult"))();
jsNodeResult.valueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Value, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:_jgun2bQU0ewxUxHEoQoBw", callContext.id);
// Bool = JavaScript1.Value
outVars.value.boolOut = javaScript1JSResult.value.valueOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:v+3hAZvb0k6xQTXFeXLzBg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:B7qa3mEsaEWyzvQ2GrQnQQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GetFromObject_Bool$vars", [{
name: "MainObjectId",
attrName: "mainObjectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewObjectKey",
attrName: "newObjectKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GetFromObject_Bool$javaScript1JSResult", [{
name: "Value",
attrName: "valueOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GetFromObject_Bool$outVars", [{
name: "Bool",
attrName: "boolOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
LeafletController.default.clientActionProxies.getFromObject_Bool$Action = function (mainObjectIdIn, newObjectKeyIn) {
mainObjectIdIn = (mainObjectIdIn === undefined) ? "" : mainObjectIdIn;
newObjectKeyIn = (newObjectKeyIn === undefined) ? "" : newObjectKeyIn;
return controller.executeActionInsideJSNode(LeafletController.default.getFromObject_Bool$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mainObjectIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newObjectKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Bool: OS.DataConversion.JSNodeParamConverter.to(actionResults.boolOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("Leaflet.controller$GetFromObject_Bool.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const el = document.getElementById($parameters.MainObjectId);
if (el && el[$parameters.Key]) {
  $parameters.Value = el[$parameters.Key];
}
};
});

define("Leaflet.controller$GetFromObject_Object", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$GetFromObject_Object.JavaScript1JS"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_GetFromObject_Object_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.getFromObject_Object$Action = function (mainObjectIdIn, newObjectKeyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.GetFromObject_Object$vars"))());
vars.value.mainObjectIdInLocal = mainObjectIdIn;
vars.value.newObjectKeyInLocal = newObjectKeyIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.GetFromObject_Object$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:cKwAtcRyEEm1t+KvIDfdZA:/ClientActionFlows.cKwAtcRyEEm1t+KvIDfdZA:dJ3LgtAaaAaWFZ7b33eV2w", "Leaflet", "GetFromObject_Object", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:f+2nqma9WUaCGeFQjn3c1g", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:7RsD2ZejC0CFAruh3qhfBQ", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(Leaflet_controller_GetFromObject_Object_JavaScript1JS, "JavaScript1", "GetFromObject_Object", {
MainObjectId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mainObjectIdInLocal, OS.DataTypes.DataTypes.Text),
Key: OS.DataConversion.JSNodeParamConverter.to(vars.value.newObjectKeyInLocal, OS.DataTypes.DataTypes.Text),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.GetFromObject_Object$javaScript1JSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:BFQtX2+7l0y2Qco1blYOsg", callContext.id);
// Object = JavaScript1.Object
outVars.value.objectOut = javaScript1JSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:KcGhsIN2k0mDnttkUvBzOA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:cKwAtcRyEEm1t+KvIDfdZA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GetFromObject_Object$vars", [{
name: "MainObjectId",
attrName: "mainObjectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewObjectKey",
attrName: "newObjectKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GetFromObject_Object$javaScript1JSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.GetFromObject_Object$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.getFromObject_Object$Action = function (mainObjectIdIn, newObjectKeyIn) {
mainObjectIdIn = (mainObjectIdIn === undefined) ? "" : mainObjectIdIn;
newObjectKeyIn = (newObjectKeyIn === undefined) ? "" : newObjectKeyIn;
return controller.executeActionInsideJSNode(LeafletController.default.getFromObject_Object$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mainObjectIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newObjectKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Leaflet.controller$GetFromObject_Object.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const el = document.getElementById($parameters.MainObjectId);
if (el && el[$parameters.Key]) {
  $parameters.Object = el[$parameters.Key];
}
};
});

define("Leaflet.controller$LL_MapAttr_IsUsingCluster", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.lL_MapAttr_IsUsingCluster$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.LL_MapAttr_IsUsingCluster$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:7pVLwajMKEuH9tb_amdTuw:/ClientActionFlows.7pVLwajMKEuH9tb_amdTuw:tscya9CsDIOsDO_PngsUFw", "Leaflet", "LL_MapAttr_IsUsingCluster", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:l8++HSx+9UOS70ktKv+EYQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:aaU87iHwX0yBqwBnzGZJIw", callContext.id);
// Name = "ll_map_using_cluster"
outVars.value.nameOut = "ll_map_using_cluster";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:bK+5aZuBAk2naJzsX+u+zg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:7pVLwajMKEuH9tb_amdTuw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.LL_MapAttr_IsUsingCluster$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.lL_MapAttr_IsUsingCluster$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.lL_MapAttr_IsUsingCluster$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$LL_MapObject_Attr", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.lL_MapObject_Attr$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.LL_MapObject_Attr$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:RSuxdFqLlEC+GrJT63Rh9w:/ClientActionFlows.RSuxdFqLlEC+GrJT63Rh9w:8_fq9lUlwExlUJ1OZsF+BA", "Leaflet", "LL_MapObject_Attr", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:KoK3kZ0sLEeCUMdsYT5a_A", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:_C7VAl1EeUWcwOKRRlXkVA", callContext.id);
// Name = "ll_map"
outVars.value.nameOut = "ll_map";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:NwGZNIWQL0qGY6gREmtrYw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:RSuxdFqLlEC+GrJT63Rh9w", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.LL_MapObject_Attr$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.lL_MapObject_Attr$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.lL_MapObject_Attr$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$LL_MapObject_Attr_GeoJSON_Callback_Style", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.lL_MapObject_Attr_GeoJSON_Callback_Style$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.LL_MapObject_Attr_GeoJSON_Callback_Style$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:GBHfoipMFkmclIVWDUhKWg:/ClientActionFlows.GBHfoipMFkmclIVWDUhKWg:TYdsanj47P7BQcmdsiBt2A", "Leaflet", "LL_MapObject_Attr_GeoJSON_Callback_Style", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:fNnlL0qQqkOTi6K_JMOejw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:NKqd2QUWx0KtHbJS_59zXA", callContext.id);
// Name = "ll_map_gjson_callback_style"
outVars.value.nameOut = "ll_map_gjson_callback_style";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:R7cypWL01UWqng3trQhEgA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:GBHfoipMFkmclIVWDUhKWg", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.LL_MapObject_Attr_GeoJSON_Callback_Style$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.lL_MapObject_Attr_GeoJSON_Callback_Style$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.lL_MapObject_Attr_GeoJSON_Callback_Style$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$LL_MapObject_Attr_GeoJSON_Layer", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.lL_MapObject_Attr_GeoJSON_Layer$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.LL_MapObject_Attr_GeoJSON_Layer$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:+ai6Rirs00OcyEWx67RfTQ:/ClientActionFlows.+ai6Rirs00OcyEWx67RfTQ:NgrhqAY3vcN3_DnoP_AHyA", "Leaflet", "LL_MapObject_Attr_GeoJSON_Layer", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:nr6udlHp9ESPhBRQTlitKg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:QzxraczmLkqgNZEIOm6H7w", callContext.id);
// Name = "ll_map_gjson_layer"
outVars.value.nameOut = "ll_map_gjson_layer";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:gfmQClsp9Eq5keOgSGqbkg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:+ai6Rirs00OcyEWx67RfTQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.LL_MapObject_Attr_GeoJSON_Layer$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.lL_MapObject_Attr_GeoJSON_Layer$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.lL_MapObject_Attr_GeoJSON_Layer$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$LL_MapObject_Attr_GeoJSON_Registry", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.lL_MapObject_Attr_GeoJSON_Registry$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.LL_MapObject_Attr_GeoJSON_Registry$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:232+UsbDbUijs_eSw3JA0A:/ClientActionFlows.232+UsbDbUijs_eSw3JA0A:ZjPc5NPt7cBXIzSlj_Wz1A", "Leaflet", "LL_MapObject_Attr_GeoJSON_Registry", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:aOV0NjJBLk6rRUD4cxySxg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:56bNcGjIDEi3XSwAloDs+w", callContext.id);
// Name = "ll_map_gjson"
outVars.value.nameOut = "ll_map_gjson";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:bd6Uh8M7uU2N903mVyyxoQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:232+UsbDbUijs_eSw3JA0A", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.LL_MapObject_Attr_GeoJSON_Registry$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.lL_MapObject_Attr_GeoJSON_Registry$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.lL_MapObject_Attr_GeoJSON_Registry$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$LL_MapObject_Attr_Marker_Registry", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.lL_MapObject_Attr_Marker_Registry$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.LL_MapObject_Attr_Marker_Registry$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:c5jUpbH0pEyg9D9iibqgkQ:/ClientActionFlows.c5jUpbH0pEyg9D9iibqgkQ:O8jsmGBKlW7OMsjmZGOuAA", "Leaflet", "LL_MapObject_Attr_Marker_Registry", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:rsum2Xkrrkyur7lshPLDqg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:zP0v06e+CE2DUB8batkz7A", callContext.id);
// Name = "ll_map_markers"
outVars.value.nameOut = "ll_map_markers";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:1p1QQfRl3ESJZlWqNtADdA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:c5jUpbH0pEyg9D9iibqgkQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.LL_MapObject_Attr_Marker_Registry$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.lL_MapObject_Attr_Marker_Registry$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.lL_MapObject_Attr_Marker_Registry$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$LL_MapObject_Attr_OnMarkerClickedCallback", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.lL_MapObject_Attr_OnMarkerClickedCallback$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.LL_MapObject_Attr_OnMarkerClickedCallback$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:cdiWfISt4kSsKKngoL+rPQ:/ClientActionFlows.cdiWfISt4kSsKKngoL+rPQ:+keuAFtDLMYKNJULYbxHsw", "Leaflet", "LL_MapObject_Attr_OnMarkerClickedCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ruqGm0G2LkezMOCTVnORow", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:oiLAU4kYLEmScXkADq7JGA", callContext.id);
// Name = "ll_map_marker_clicked_callback"
outVars.value.nameOut = "ll_map_marker_clicked_callback";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:3HyLtkdMHkCPNP6zSjRK8Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:cdiWfISt4kSsKKngoL+rPQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.LL_MapObject_Attr_OnMarkerClickedCallback$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.lL_MapObject_Attr_OnMarkerClickedCallback$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.lL_MapObject_Attr_OnMarkerClickedCallback$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$LL_MapObject_Attr_PopupBindingCallback", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.lL_MapObject_Attr_PopupBindingCallback$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.LL_MapObject_Attr_PopupBindingCallback$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:NkNlN9qIx0yWQfDU+Ne88w:/ClientActionFlows.NkNlN9qIx0yWQfDU+Ne88w:9Ie3z1MvPqb02UHFdS96Vg", "Leaflet", "LL_MapObject_Attr_PopupBindingCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:sqJhKQ17XUWOunkIMvC+Iw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:xU10rjroKEquOLx8Igz4tg", callContext.id);
// Name = "ll_popupbinding_callback"
outVars.value.nameOut = "ll_popupbinding_callback";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:xiyVmnia_EmZODIGMRrKwg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:NkNlN9qIx0yWQfDU+Ne88w", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.LL_MapObject_Attr_PopupBindingCallback$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.lL_MapObject_Attr_PopupBindingCallback$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.lL_MapObject_Attr_PopupBindingCallback$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$LL_MapObject_Attr_TooltipBindingCallback", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.lL_MapObject_Attr_TooltipBindingCallback$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.LL_MapObject_Attr_TooltipBindingCallback$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:rBBMAPzaiEarnyv2Iel0Qw:/ClientActionFlows.rBBMAPzaiEarnyv2Iel0Qw:egCoQC5an0EFiu3nEtyXtw", "Leaflet", "LL_MapObject_Attr_TooltipBindingCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:nNIAS5ewr0OsXfaEjByxEw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:3mfeUvN8Y0K17Tr8p8C50w", callContext.id);
// Name = "ll_tooltipbinding_callback"
outVars.value.nameOut = "ll_tooltipbinding_callback";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:d8IkBTCaD060bcK3Wc7Shg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:rBBMAPzaiEarnyv2Iel0Qw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.LL_MapObject_Attr_TooltipBindingCallback$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.lL_MapObject_Attr_TooltipBindingCallback$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.lL_MapObject_Attr_TooltipBindingCallback$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$LL_MapObjectAttr_MarkerCluster_Layer", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.lL_MapObjectAttr_MarkerCluster_Layer$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.LL_MapObjectAttr_MarkerCluster_Layer$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:1atNWEr1PES1nA_vvedvbw:/ClientActionFlows.1atNWEr1PES1nA_vvedvbw:qTM_VPsOPAcCntOrbIbTTQ", "Leaflet", "LL_MapObjectAttr_MarkerCluster_Layer", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:LkbuKhbxW0GhWbqsKvfP0g", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:yeWKTAZ21UiscsBBwTecjw", callContext.id);
// Name = "ll_map_marker_cluster_layer"
outVars.value.nameOut = "ll_map_marker_cluster_layer";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:mX8aKflf0EayP7G1wjLoAQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:1atNWEr1PES1nA_vvedvbw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.LL_MapObjectAttr_MarkerCluster_Layer$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.lL_MapObjectAttr_MarkerCluster_Layer$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.lL_MapObjectAttr_MarkerCluster_Layer$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$LL_MapObjectAttr_ZoomControl", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.lL_MapObjectAttr_ZoomControl$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.LL_MapObjectAttr_ZoomControl$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:zS_MjfoMF06XrEcZnnRYyA:/ClientActionFlows.zS_MjfoMF06XrEcZnnRYyA:ag8JdTSwsGukvPrGWKNWvA", "Leaflet", "LL_MapObjectAttr_ZoomControl", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:kbhmMlyKBESU12xXaCFg1w", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:4aKpv_5_d0GfvxRa+Q388A", callContext.id);
// Name = "ll_map_zoomControl"
outVars.value.nameOut = "ll_map_zoomControl";
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:KgcFf22JlkS2Jp6LlwmFog", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:zS_MjfoMF06XrEcZnnRYyA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.LL_MapObjectAttr_ZoomControl$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.lL_MapObjectAttr_ZoomControl$Action = function () {
return controller.executeActionInsideJSNode(LeafletController.default.lL_MapObjectAttr_ZoomControl$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Leaflet.controller$Map_ClearStopgapLayer", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_ClearStopgapLayer.Clear_Stopgap_LayerJS", "Leaflet.controller$Map_Marker_GetRegistry", "Leaflet.controller$Map_GetObject_FromId"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_ClearStopgapLayer_Clear_Stopgap_LayerJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_ClearStopgapLayer$Action = function (mapIdIn, layerKeyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_ClearStopgapLayer$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.layerKeyInLocal = layerKeyIn;
var map_Marker_GetRegistryVar = new OS.DataTypes.VariableHolder();
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_Marker_GetRegistryVar = map_Marker_GetRegistryVar;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:pp8ii0f2fkGbw4HmY9xEAA:/ClientActionFlows.pp8ii0f2fkGbw4HmY9xEAA:YWBb70w30bHlleRPtAfLag", "Leaflet", "Map_ClearStopgapLayer", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:hLHxnsRGXUewBxJsxKUpKQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:9mK_Y8kNgEC4hQkYxbNIWA", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:dTCmUCFjJk+dPtt+YfT3ig", callContext.id);
// Execute Action: Map_Marker_GetRegistry
map_Marker_GetRegistryVar.value = LeafletController.default.map_Marker_GetRegistry$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ZO_XKMP5WECE5rfGS1g_qg", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_ClearStopgapLayer_Clear_Stopgap_LayerJS, "Clear_Stopgap_Layer", "Map_ClearStopgapLayer", {
MarkerRegistry: OS.DataConversion.JSNodeParamConverter.to(map_Marker_GetRegistryVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
LayerKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.layerKeyInLocal, OS.DataTypes.DataTypes.Text),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Wlb1EeLem0CI1PR30hbRbg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:pp8ii0f2fkGbw4HmY9xEAA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_ClearStopgapLayer$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LayerKey",
attrName: "layerKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.map_ClearStopgapLayer$Action = function (mapIdIn, layerKeyIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
layerKeyIn = (layerKeyIn === undefined) ? "" : layerKeyIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_ClearStopgapLayer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(layerKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_ClearStopgapLayer.Clear_Stopgap_LayerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const el = document.getElementById($parameters.MapId);
if (el && el[$parameters.LayerKey]) {
    const clusterLayer = el[$parameters.LayerKey];
    const layers = clusterLayer.getLayers();
    layers.forEach(function (marker) {
        const id = marker.options && marker.options.Id;
        if (id && $parameters.MarkerRegistry.hasOwnProperty(id)) {
            delete $parameters.MarkerRegistry[id];
        }
    });
    if ($parameters.Map) {
        $parameters.Map.removeLayer(clusterLayer);
    }
    delete el[$parameters.LayerKey];
}
};
});

define("Leaflet.controller$Map_FitBoundsAuto", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_FitBoundsAuto.JavaScript1JS", "Leaflet.controller$Map_MarkerCluster_UsingCluster_Check", "Leaflet.controller$Map_GetObject_FromId", "Leaflet.controller$Map_MarkerCluster_GetOrCreateLayer"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_FitBoundsAuto_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.map_FitBoundsAuto$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_FitBoundsAuto$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var map_MarkerCluster_UsingCluster_CheckVar = new OS.DataTypes.VariableHolder();
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var map_MarkerCluster_GetOrCreateLayerVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_MarkerCluster_UsingCluster_CheckVar = map_MarkerCluster_UsingCluster_CheckVar;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.map_MarkerCluster_GetOrCreateLayerVar = map_MarkerCluster_GetOrCreateLayerVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:eyE4_9vrFEGSpdV_AFtpTQ:/ClientActionFlows.eyE4_9vrFEGSpdV_AFtpTQ:At8MY6lLJk599_YmneH+hw", "Leaflet", "Map_FitBoundsAuto", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:sCTCqavgo0Kyv6OWMRoclw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:xUChnSt5BUyiSrQvqs9ptA", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:22mALQQj8kK0ugEVc4dyww", callContext.id);
// Execute Action: Map_MarkerCluster_UsingCluster_Check
map_MarkerCluster_UsingCluster_CheckVar.value = LeafletController.default.map_MarkerCluster_UsingCluster_Check$Action(vars.value.mapIdInLocal, callContext);

if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:IDJ0Dlk34kOHhMp4ZoAgkg", callContext.id) && map_MarkerCluster_UsingCluster_CheckVar.value.valueOut)) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:vso8+XMunEKgtBasZEO1Mw", callContext.id);
// Execute Action: Map_MarkerCluster_GetOrCreateLayer
map_MarkerCluster_GetOrCreateLayerVar.value = LeafletController.default.map_MarkerCluster_GetOrCreateLayer$Action(vars.value.mapIdInLocal, "", callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Tz4FdYp1fEeEczbZ79ZzKQ", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_FitBoundsAuto_JavaScript1JS, "JavaScript1", "Map_FitBoundsAuto", {
ClusterLayer: OS.DataConversion.JSNodeParamConverter.to(map_MarkerCluster_GetOrCreateLayerVar.value.objectOut, OS.DataTypes.DataTypes.Object),
MapObject: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:NgfQjsxQZUSufcslDDfjRg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:xAZJCr69JU+YQGl0ngyWJg", callContext.id);
// Raise Error: UserException2
throw new OS.Exceptions.Exceptions.UserException("Leaflet.UserException2", "Not implemented");
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:eyE4_9vrFEGSpdV_AFtpTQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_FitBoundsAuto$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.map_FitBoundsAuto$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_FitBoundsAuto$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_FitBoundsAuto.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var bounds = $parameters.ClusterLayer.getBounds();

if (bounds.isValid()) {

    var northEast = bounds.getNorthEast();
    var southWest = bounds.getSouthWest();

    // check if it's basically a single point
    var isSinglePoint =
        northEast.lat === southWest.lat &&
        northEast.lng === southWest.lng;

    if (isSinglePoint) {
        $parameters.MapObject.setView(northEast, 5);
    } else {
        $parameters.MapObject.fitBounds(bounds, {
            padding: [80, 80],
            animate: true,
            duration: 1
        });
    }
}
};
});

define("Leaflet.controller$Map_FlyTo", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_FlyTo.JavaScript1JS", "Leaflet.controller$Map_GetObject_FromId"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_FlyTo_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.map_FlyTo$Action = function (mapIdIn, latitudeIn, longitudeIn, zoomLevelIn, isAnimateIn, durationIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_FlyTo$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.latitudeInLocal = latitudeIn;
vars.value.longitudeInLocal = longitudeIn;
vars.value.zoomLevelInLocal = zoomLevelIn;
vars.value.isAnimateInLocal = isAnimateIn;
vars.value.durationInLocal = durationIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:mKdirVVV2ESt0DSCf5DwPw:/ClientActionFlows.mKdirVVV2ESt0DSCf5DwPw:QhOOPGJm5+GVR9LeMn8fBg", "Leaflet", "Map_FlyTo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:43xUWXWvskCmKzMp_JLKqQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:cd0pBpYFPkKyCaApjpKZsg", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:CPq896smnUaWvYwDebgV+A", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_FlyTo_JavaScript1JS, "JavaScript1", "Map_FlyTo", {
MapObject: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Duration: OS.DataConversion.JSNodeParamConverter.to(vars.value.durationInLocal, OS.DataTypes.DataTypes.Decimal),
Longitude: OS.DataConversion.JSNodeParamConverter.to(vars.value.longitudeInLocal, OS.DataTypes.DataTypes.Decimal),
isAnimate: OS.DataConversion.JSNodeParamConverter.to(vars.value.isAnimateInLocal, OS.DataTypes.DataTypes.Boolean),
ZoomLevel: OS.DataConversion.JSNodeParamConverter.to(vars.value.zoomLevelInLocal, OS.DataTypes.DataTypes.Integer),
Latitude: OS.DataConversion.JSNodeParamConverter.to(vars.value.latitudeInLocal, OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:5rJarCN15U6hHZU4fv1Dig", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:mKdirVVV2ESt0DSCf5DwPw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_FlyTo$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Latitude",
attrName: "latitudeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Longitude",
attrName: "longitudeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "ZoomLevel",
attrName: "zoomLevelInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "isAnimate",
attrName: "isAnimateInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "Duration",
attrName: "durationInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return (new OS.DataTypes.Decimal("0.25"));
}
}]);
LeafletController.default.clientActionProxies.map_FlyTo$Action = function (mapIdIn, latitudeIn, longitudeIn, zoomLevelIn, isAnimateIn, durationIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
latitudeIn = (latitudeIn === undefined) ? OS.DataTypes.Decimal.defaultValue : latitudeIn;
longitudeIn = (longitudeIn === undefined) ? OS.DataTypes.Decimal.defaultValue : longitudeIn;
zoomLevelIn = (zoomLevelIn === undefined) ? 0 : zoomLevelIn;
isAnimateIn = (isAnimateIn === undefined) ? true : isAnimateIn;
durationIn = (durationIn === undefined) ? (new OS.DataTypes.Decimal("0.25")) : durationIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_FlyTo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(latitudeIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(longitudeIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(zoomLevelIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(isAnimateIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(durationIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_FlyTo.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.MapObject.flyTo(new L.LatLng($parameters.Latitude, $parameters.Longitude), $parameters.ZoomLevel, { animation: $parameters.isAnimate, duration: $parameters.Duration });     
};
});

define("Leaflet.controller$Map_GeoJSON_Callback_GetStyle", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$GetFromObject_Object", "Leaflet.controller$LL_MapObject_Attr_GeoJSON_Callback_Style"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.map_GeoJSON_Callback_GetStyle$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_Callback_GetStyle$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getFromObject_ObjectVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_Callback_GetStyle$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getFromObject_ObjectVar = getFromObject_ObjectVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:E5GqF2UrNUS5_RFWnnPrPg:/ClientActionFlows.E5GqF2UrNUS5_RFWnnPrPg:_KJVTLO7Jai25EWxW+KsaA", "Leaflet", "Map_GeoJSON_Callback_GetStyle", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:YKn4jzaXDUSvHH+hd8Ystw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:RJPgTkwCFk66LgHr+FpfhQ", callContext.id);
// Execute Action: GetFromObject_Object
getFromObject_ObjectVar.value = LeafletController.default.getFromObject_Object$Action(vars.value.mapIdInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr_GeoJSON_Callback_Style$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:n+CQEg83a0CHjblLx8ERpA", callContext.id);
// Function = GetFromObject_Object.Object
outVars.value.functionOut = getFromObject_ObjectVar.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:qr2pwU2XR0yLxlMlaGqjPA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:E5GqF2UrNUS5_RFWnnPrPg", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_Callback_GetStyle$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_Callback_GetStyle$outVars", [{
name: "Function",
attrName: "functionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_GeoJSON_Callback_GetStyle$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GeoJSON_Callback_GetStyle$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Function: OS.DataConversion.JSNodeParamConverter.to(actionResults.functionOut, OS.DataTypes.DataTypes.Object)
};
});
};
});

define("Leaflet.controller$Map_GeoJSON_Callback_SetStyle", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$SetToObject_Object", "Leaflet.controller$LL_MapObject_Attr_GeoJSON_Callback_Style"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.map_GeoJSON_Callback_SetStyle$Action = function (mapIdIn, callbackFunctionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_Callback_SetStyle$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.callbackFunctionInLocal = callbackFunctionIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:hiJh+5SBfE2+_mjyoIRgcQ:/ClientActionFlows.hiJh+5SBfE2+_mjyoIRgcQ:qz2QmHZoEsfbQFU_oFqj9Q", "Leaflet", "Map_GeoJSON_Callback_SetStyle", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:3pey0kaTPUyFA5T23AxQuQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:yFWTaPVHUEi5WheMKFbkoQ", callContext.id);
// Execute Action: SetToObject_Object
LeafletController.default.setToObject_Object$Action(vars.value.mapIdInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr_GeoJSON_Callback_Style$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), vars.value.callbackFunctionInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:WxEn04ZgVE26Cf9anX_htQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:hiJh+5SBfE2+_mjyoIRgcQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_Callback_SetStyle$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CallbackFunction",
attrName: "callbackFunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_GeoJSON_Callback_SetStyle$Action = function (mapIdIn, callbackFunctionIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
callbackFunctionIn = (callbackFunctionIn === undefined) ? null : callbackFunctionIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GeoJSON_Callback_SetStyle$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(callbackFunctionIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Leaflet.controller$Map_GeoJSON_Feature_Add", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_GeoJSON_Feature_Add.Crete_FeatureJS", "Leaflet.model$PathOptionsRec", "Leaflet.controller$Map_Internal_Layer_SetStyle", "Leaflet.controller$GenerateGUID", "Leaflet.controller$Map_GetObject_FromId", "Leaflet.controller$Map_GeoJSON_GetLayer", "Leaflet.controller$Map_GeoJSON_GetRegistry", "Leaflet.model$GeoJSONFeatureRec"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_GeoJSON_Feature_Add_Crete_FeatureJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_GeoJSON_Feature_Add$Action = function (geoJSON_FeatureIn, mapIdIn, onClickFunctionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_Feature_Add$vars"))());
vars.value.geoJSON_FeatureInLocal = geoJSON_FeatureIn.clone();
vars.value.mapIdInLocal = mapIdIn;
vars.value.onClickFunctionInLocal = onClickFunctionIn;
var generateGUIDVar = new OS.DataTypes.VariableHolder();
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var map_GeoJSON_GetLayerVar = new OS.DataTypes.VariableHolder();
var map_GeoJSON_GetRegistryVar = new OS.DataTypes.VariableHolder();
var crete_FeatureJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.generateGUIDVar = generateGUIDVar;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.map_GeoJSON_GetLayerVar = map_GeoJSON_GetLayerVar;
varBag.map_GeoJSON_GetRegistryVar = map_GeoJSON_GetRegistryVar;
varBag.crete_FeatureJSResult = crete_FeatureJSResult;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:7o4RCqeZq0WLQx1foGhUrQ:/ClientActionFlows.7o4RCqeZq0WLQx1foGhUrQ:apIDOQawu3FwDfe59wOUXA", "Leaflet", "Map_GeoJSON_Feature_Add", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ckHUMHnPVU6XdZlzkYAxrw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:6PjE1fUurE6zx_dC6MhFDA", callContext.id) && (vars.value.geoJSON_FeatureInLocal.idAttr === ""))) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:MAEooBxgYkqc356JOtID1Q", callContext.id);
// Execute Action: GenerateGUID
generateGUIDVar.value = LeafletController.default.generateGUID$Action(callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:FI_f4vWIekKU_I3jDgUcvg", callContext.id);
// GeoJSON_Feature.Id = GenerateGUID.GUID
vars.value.geoJSON_FeatureInLocal.idAttr = generateGUIDVar.value.gUIDOut;
}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:klOnq2kPPUmNhngDjTQGvw", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:VdeJ1kHdC0ayfA1owPRNvg", callContext.id);
// Execute Action: Map_GeoJSON_GetLayer
map_GeoJSON_GetLayerVar.value = LeafletController.default.map_GeoJSON_GetLayer$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:azYu_sDmOUOuY8lMz0GxJQ", callContext.id);
// Execute Action: Map_GeoJSON_GetRegistry
map_GeoJSON_GetRegistryVar.value = LeafletController.default.map_GeoJSON_GetRegistry$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:VtPqQThqOEmMhwL2v7st2g", callContext.id);
crete_FeatureJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_GeoJSON_Feature_Add_Crete_FeatureJS, "Crete_Feature", "Map_GeoJSON_Feature_Add", {
Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.geoJSON_FeatureInLocal.typeAttr, OS.DataTypes.DataTypes.Text),
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.geoJSON_FeatureInLocal.idAttr, OS.DataTypes.DataTypes.Text),
FeatureJSON: OS.DataConversion.JSNodeParamConverter.to(vars.value.geoJSON_FeatureInLocal.featureJSONAttr, OS.DataTypes.DataTypes.Text),
GeoJSONRegistry: OS.DataConversion.JSNodeParamConverter.to(map_GeoJSON_GetRegistryVar.value.objectOut, OS.DataTypes.DataTypes.Object),
OnClickFunction: OS.DataConversion.JSNodeParamConverter.to(vars.value.onClickFunctionInLocal, OS.DataTypes.DataTypes.Object),
GeoJSONLayer: OS.DataConversion.JSNodeParamConverter.to(map_GeoJSON_GetLayerVar.value.objectOut, OS.DataTypes.DataTypes.Object),
ExtraData: OS.DataConversion.JSNodeParamConverter.to(vars.value.geoJSON_FeatureInLocal.extraDataAttr, OS.DataTypes.DataTypes.Text),
FeatureObject: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_Feature_Add$crete_FeatureJSResult"))();
jsNodeResult.featureObjectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FeatureObject, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:4xM77HGIRUiMlIZ2l7Fkog", callContext.id) && ((crete_FeatureJSResult.value.featureObjectOut) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:_DHyFToLWkqxB6bZzC7lDQ", callContext.id);
// Execute Action: Map_Internal_Layer_SetStyle
LeafletController.default.map_Internal_Layer_SetStyle$Action(crete_FeatureJSResult.value.featureObjectOut, vars.value.geoJSON_FeatureInLocal.pathOptionsAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:MV0BcLhI8kG7mzvBqCR2WA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:MV0BcLhI8kG7mzvBqCR2WA", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:7o4RCqeZq0WLQx1foGhUrQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_Feature_Add$vars", [{
name: "GeoJSON_Feature",
attrName: "geoJSON_FeatureInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new LeafletModel.GeoJSONFeatureRec();
},
complexType: LeafletModel.GeoJSONFeatureRec
}, {
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "OnClickFunction",
attrName: "onClickFunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_Feature_Add$crete_FeatureJSResult", [{
name: "FeatureObject",
attrName: "featureObjectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_GeoJSON_Feature_Add$Action = function (geoJSON_FeatureIn, mapIdIn, onClickFunctionIn) {
geoJSON_FeatureIn = (geoJSON_FeatureIn === undefined) ? new LeafletModel.GeoJSONFeatureRec() : geoJSON_FeatureIn;
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
onClickFunctionIn = (onClickFunctionIn === undefined) ? null : onClickFunctionIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GeoJSON_Feature_Add$Action.bind(controller, geoJSON_FeatureIn, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(onClickFunctionIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_GeoJSON_Feature_Add.Crete_FeatureJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let geojsonFeature = JSON.parse($parameters.FeatureJSON);

// Leaflet can't build a layer for a feature with no geometry (geometry: null),
// so there's nothing to add, look up, or attach a click handler to — skip it.
if (!geojsonFeature.geometry) {
    $parameters.FeatureObject = $public.BuiltinFunctions.nullObject();
    return;
}

geojsonFeature.Id = $parameters.Id;
geojsonFeature.Type = $parameters.Type;
geojsonFeature.ExtraData = $parameters.ExtraData;

if (!$parameters.GeoJSONRegistry[geojsonFeature.Id]) {
    $parameters.GeoJSONLayer.addData(geojsonFeature);
}

$parameters.GeoJSONRegistry[geojsonFeature.Id] = Object.values($parameters.GeoJSONLayer._layers)
    .find(l => l.feature?.Id === geojsonFeature.Id);

$parameters.FeatureObject = $parameters.GeoJSONRegistry[geojsonFeature.Id];

if ($parameters.OnClickFunction) {
    $parameters.FeatureObject.on({
        click: function (e) {
            $parameters.OnClickFunction(this.feature.Id, this.feature.Type, this.feature.ExtraData);
        }
    });
}
};
});

define("Leaflet.controller$Map_GeoJSON_Feature_Remove", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_GeoJSON_Feature_Remove.Remove_FeatureJS", "Leaflet.controller$Map_GeoJSON_GetLayer", "Leaflet.controller$Map_GeoJSON_GetRegistry"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_GeoJSON_Feature_Remove_Remove_FeatureJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_GeoJSON_Feature_Remove$Action = function (mapIdIn, geoJSONIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_Feature_Remove$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.geoJSONIdInLocal = geoJSONIdIn;
var map_GeoJSON_GetLayerVar = new OS.DataTypes.VariableHolder();
var map_GeoJSON_GetRegistryVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GeoJSON_GetLayerVar = map_GeoJSON_GetLayerVar;
varBag.map_GeoJSON_GetRegistryVar = map_GeoJSON_GetRegistryVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:RA8r6b0ND0WxTcqESjg9uQ:/ClientActionFlows.RA8r6b0ND0WxTcqESjg9uQ:acmCMHHVWvfbR25W4_a0DQ", "Leaflet", "Map_GeoJSON_Feature_Remove", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:vZ3FNSCnsUmC6ARCgio77Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:KBF2A_+DYUSEDBiGf0iiow", callContext.id);
// Execute Action: Map_GeoJSON_GetLayer
map_GeoJSON_GetLayerVar.value = LeafletController.default.map_GeoJSON_GetLayer$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:jJgF_GEMbEKhd_BZMcOLdw", callContext.id);
// Execute Action: Map_GeoJSON_GetRegistry
map_GeoJSON_GetRegistryVar.value = LeafletController.default.map_GeoJSON_GetRegistry$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:aEp+cfKWHEGtg35gGzUkFg", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_GeoJSON_Feature_Remove_Remove_FeatureJS, "Remove_Feature", "Map_GeoJSON_Feature_Remove", {
GeoJSONId: OS.DataConversion.JSNodeParamConverter.to(vars.value.geoJSONIdInLocal, OS.DataTypes.DataTypes.Text),
GeoJSONLayer: OS.DataConversion.JSNodeParamConverter.to(map_GeoJSON_GetLayerVar.value.objectOut, OS.DataTypes.DataTypes.Object),
GeoJSONRegistry: OS.DataConversion.JSNodeParamConverter.to(map_GeoJSON_GetRegistryVar.value.objectOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Cfd4c10byki0xyYYHQdZLw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:RA8r6b0ND0WxTcqESjg9uQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_Feature_Remove$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "GeoJSONId",
attrName: "geoJSONIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.map_GeoJSON_Feature_Remove$Action = function (mapIdIn, geoJSONIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
geoJSONIdIn = (geoJSONIdIn === undefined) ? "" : geoJSONIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GeoJSON_Feature_Remove$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(geoJSONIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_GeoJSON_Feature_Remove.Remove_FeatureJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.GeoJSONRegistry && $parameters.GeoJSONRegistry[$parameters.GeoJSONId])
{
    const featureInstance = $parameters.GeoJSONRegistry[$parameters.GeoJSONId];
    $parameters.GeoJSONLayer.removeLayer(featureInstance);
    delete $parameters.GeoJSONRegistry[$parameters.GeoJSONId];
}
};
});

define("Leaflet.controller$Map_GeoJSON_FitBounds", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_GeoJSON_FitBounds.FitBoundsToFeatureJS", "Leaflet.controller$Map_GeoJSON_GetById", "Leaflet.controller$Map_GetObject_FromId"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_GeoJSON_FitBounds_FitBoundsToFeatureJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_GeoJSON_FitBounds$Action = function (mapIdIn, geoJSONIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_FitBounds$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.geoJSONIdInLocal = geoJSONIdIn;
var map_GeoJSON_GetByIdVar = new OS.DataTypes.VariableHolder();
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GeoJSON_GetByIdVar = map_GeoJSON_GetByIdVar;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:Z_vzICeL9kq1tF5gq8usGA:/ClientActionFlows.Z_vzICeL9kq1tF5gq8usGA:Di4iFqkbA97GXGacKbHbcw", "Leaflet", "Map_GeoJSON_FitBounds", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Ouj9OpTuekKMdpiXjMXVig", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:tJTi85PxAE+11N7mGIcF4g", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:vvf0ZRAcYUWqMrXJZUA4RA", callContext.id);
// Execute Action: Map_GeoJSON_GetById
map_GeoJSON_GetByIdVar.value = LeafletController.default.map_GeoJSON_GetById$Action(vars.value.mapIdInLocal, vars.value.geoJSONIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:CQq4esUapUqshpVs2taUBw", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_GeoJSON_FitBounds_FitBoundsToFeatureJS, "FitBoundsToFeature", "Map_GeoJSON_FitBounds", {
FeatureObject: OS.DataConversion.JSNodeParamConverter.to(map_GeoJSON_GetByIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
MapObject: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:MMc9kLrcDkCandkj1ak+DA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:Z_vzICeL9kq1tF5gq8usGA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_FitBounds$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "GeoJSONId",
attrName: "geoJSONIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.map_GeoJSON_FitBounds$Action = function (mapIdIn, geoJSONIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
geoJSONIdIn = (geoJSONIdIn === undefined) ? "" : geoJSONIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GeoJSON_FitBounds$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(geoJSONIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_GeoJSON_FitBounds.FitBoundsToFeatureJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.FeatureObject) {
    var bounds = $parameters.FeatureObject.getBounds();

    if (bounds.isValid()) {

        var northEast = bounds.getNorthEast();
        var southWest = bounds.getSouthWest();

        // check if it's basically a single point
        var isSinglePoint =
            northEast.lat === southWest.lat &&
            northEast.lng === southWest.lng;

        if (isSinglePoint) {
            $parameters.MapObject.setView(northEast, 5);
        } else {
            $parameters.MapObject.fitBounds(bounds, {
                padding: [20, 20],
                animate: true,
                duration: 1
            });
        }
    }
}
};
});

define("Leaflet.controller$Map_GeoJSON_GetById", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_GeoJSON_GetById.JavaScript1JS", "Leaflet.controller$Map_GeoJSON_GetRegistry"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_GeoJSON_GetById_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.map_GeoJSON_GetById$Action = function (mapIdIn, geoJSONIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_GetById$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.geoJSONIdInLocal = geoJSONIdIn;
var map_GeoJSON_GetRegistryVar = new OS.DataTypes.VariableHolder();
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_GetById$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GeoJSON_GetRegistryVar = map_GeoJSON_GetRegistryVar;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:z7EtBMJ_sESfNjNb6hW43Q:/ClientActionFlows.z7EtBMJ_sESfNjNb6hW43Q:MgSoaXCaLySJxrdNlBbRTA", "Leaflet", "Map_GeoJSON_GetById", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ouM3Ws_W9kS+4Q9DaZXGjQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:2jLKEYhW5UyjBF+Y+pVkCw", callContext.id);
// Execute Action: Map_GeoJSON_GetRegistry
map_GeoJSON_GetRegistryVar.value = LeafletController.default.map_GeoJSON_GetRegistry$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:weM7HNwVGU2fd8keqr1keQ", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_GeoJSON_GetById_JavaScript1JS, "JavaScript1", "Map_GeoJSON_GetById", {
MapObject: OS.DataConversion.JSNodeParamConverter.to(map_GeoJSON_GetRegistryVar.value.objectOut, OS.DataTypes.DataTypes.Object),
GeoJSONId: OS.DataConversion.JSNodeParamConverter.to(vars.value.geoJSONIdInLocal, OS.DataTypes.DataTypes.Text),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_GetById$javaScript1JSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:SjbCHoloN0KiBZtX471uhA", callContext.id);
// Object = JavaScript1.Object
outVars.value.objectOut = javaScript1JSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:MgLIF+VSv0ifLkKa3Wz+EQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:z7EtBMJ_sESfNjNb6hW43Q", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_GetById$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "GeoJSONId",
attrName: "geoJSONIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_GetById$javaScript1JSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_GetById$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_GeoJSON_GetById$Action = function (mapIdIn, geoJSONIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
geoJSONIdIn = (geoJSONIdIn === undefined) ? "" : geoJSONIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GeoJSON_GetById$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(geoJSONIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Leaflet.controller$Map_GeoJSON_GetById.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.MapObject && $parameters.MapObject[$parameters.GeoJSONId]) {
    $parameters.Object = $parameters.MapObject[$parameters.GeoJSONId];
}
};
});

define("Leaflet.controller$Map_GeoJSON_GetFeatureIdsAtPoint", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_GeoJSON_GetFeatureIdsAtPoint.PointInFeatureJS", "Leaflet.model$Map_GeoJSON_PointMatchList", "Leaflet.model$GeoJSONFeatureList", "Leaflet.model$Map_GeoJSON_PointMatchRec"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_GeoJSON_GetFeatureIdsAtPoint_PointInFeatureJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_GeoJSON_GetFeatureIdsAtPoint$Action = function (latitudeIn, longitudeIn, geoJSONFeaturesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_GetFeatureIdsAtPoint$vars"))());
vars.value.latitudeInLocal = latitudeIn;
vars.value.longitudeInLocal = longitudeIn;
vars.value.geoJSONFeaturesInLocal = geoJSONFeaturesIn.clone();
var pointInFeatureJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_GetFeatureIdsAtPoint$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.pointInFeatureJSResult = pointInFeatureJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:8PgwuYu_Pk2GOJSqXsCccA:/ClientActionFlows.8PgwuYu_Pk2GOJSqXsCccA:Icr2v9cjxedTZRKxjvsAcw", "Leaflet", "Map_GeoJSON_GetFeatureIdsAtPoint", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:OphIpnL0xU2BOSCELIA8AA", callContext.id);
// Foreach GeoJSONFeatures
callContext.iterationContext.registerIterationStart(vars.value.geoJSONFeaturesInLocal);
try {var geoJSONFeaturesIterator = callContext.iterationContext.getIterator(vars.value.geoJSONFeaturesInLocal);
var geoJSONFeaturesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:TVbtV0hlE0KP01mRS05agg", callContext.id) && (geoJSONFeaturesIndex < vars.value.geoJSONFeaturesInLocal.length))) {
geoJSONFeaturesIterator.currentRowNumber = geoJSONFeaturesIndex;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:UVE8r+vFfEyvmx_oS6Qozw", callContext.id);
pointInFeatureJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_GeoJSON_GetFeatureIdsAtPoint_PointInFeatureJS, "PointInFeature", "Map_GeoJSON_GetFeatureIdsAtPoint", {
Latitude: OS.DataConversion.JSNodeParamConverter.to(vars.value.latitudeInLocal, OS.DataTypes.DataTypes.Decimal),
Longitude: OS.DataConversion.JSNodeParamConverter.to(vars.value.longitudeInLocal, OS.DataTypes.DataTypes.Decimal),
FeatureJSON: OS.DataConversion.JSNodeParamConverter.to(vars.value.geoJSONFeaturesInLocal.getItem(geoJSONFeaturesIndex.valueOf()).featureJSONAttr, OS.DataTypes.DataTypes.Text),
IsMatch: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_GetFeatureIdsAtPoint$pointInFeatureJSResult"))();
jsNodeResult.isMatchOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsMatch, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:wguu1wpfGkydT5v4RB5ohQ", callContext.id) && pointInFeatureJSResult.value.isMatchOut)) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:D39cxtfQoEeAjE4IdXOUxg", callContext.id);
// Execute Action: ListAppend_Match
OS.SystemActions.listAppend(vars.value.matchedFeaturesVar, function () {
var rec = new LeafletModel.Map_GeoJSON_PointMatchRec();
rec.idAttr = vars.value.geoJSONFeaturesInLocal.getItem(geoJSONFeaturesIndex.valueOf()).idAttr;
rec.typeAttr = vars.value.geoJSONFeaturesInLocal.getItem(geoJSONFeaturesIndex.valueOf()).typeAttr;
return rec;
}(), callContext);
}

geoJSONFeaturesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.geoJSONFeaturesInLocal);
}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:wyJsRgAE10O4qYSI_Eqk4Q", callContext.id);
// Matches = MatchedFeatures
outVars.value.matchesOut = vars.value.matchedFeaturesVar;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Oby4BTx_lEm31nALaeArng", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:8PgwuYu_Pk2GOJSqXsCccA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_GetFeatureIdsAtPoint$vars", [{
name: "Latitude",
attrName: "latitudeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Longitude",
attrName: "longitudeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "GeoJSONFeatures",
attrName: "geoJSONFeaturesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new LeafletModel.GeoJSONFeatureList();
},
complexType: LeafletModel.GeoJSONFeatureList
}, {
name: "MatchedFeatures",
attrName: "matchedFeaturesVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new LeafletModel.Map_GeoJSON_PointMatchList();
},
complexType: LeafletModel.Map_GeoJSON_PointMatchList
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_GetFeatureIdsAtPoint$pointInFeatureJSResult", [{
name: "IsMatch",
attrName: "isMatchOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_GetFeatureIdsAtPoint$outVars", [{
name: "Matches",
attrName: "matchesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new LeafletModel.Map_GeoJSON_PointMatchList();
},
complexType: LeafletModel.Map_GeoJSON_PointMatchList
}]);
LeafletController.default.clientActionProxies.map_GeoJSON_GetFeatureIdsAtPoint$Action = function (latitudeIn, longitudeIn, geoJSONFeaturesIn) {
latitudeIn = (latitudeIn === undefined) ? OS.DataTypes.Decimal.defaultValue : latitudeIn;
longitudeIn = (longitudeIn === undefined) ? OS.DataTypes.Decimal.defaultValue : longitudeIn;
geoJSONFeaturesIn = (geoJSONFeaturesIn === undefined) ? new LeafletModel.GeoJSONFeatureList() : geoJSONFeaturesIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GeoJSON_GetFeatureIdsAtPoint$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(latitudeIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(longitudeIn, OS.DataTypes.DataTypes.Decimal), geoJSONFeaturesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Matches: actionResults.matchesOut
};
});
};
});
define("Leaflet.controller$Map_GeoJSON_GetFeatureIdsAtPoint.PointInFeatureJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function pointInRing(lat, lon, ring) {
    var inside = false;
    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        var xi = ring[i][0], yi = ring[i][1];
        var xj = ring[j][0], yj = ring[j][1];
        var intersect = ((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

function pointInRings(lat, lon, rings) {
    var inside = false;
    for (var r = 0; r < rings.length; r++) {
        if (pointInRing(lat, lon, rings[r])) inside = !inside;
    }
    return inside;
}

function ringBBoxContains(ring, lat, lon) {
    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (var i = 0; i < ring.length; i++) {
        var x = ring[i][0], y = ring[i][1];
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
    }
    return lon >= minX && lon <= maxX && lat >= minY && lat <= maxY;
}

var lat = $parameters.Latitude;
var lon = $parameters.Longitude;
var raw = $parameters.FeatureJSON;
var isMatch = false;

if (raw) {
    var parsed;
    try { parsed = JSON.parse(raw); } catch (e) { parsed = null; }
    var geometry = parsed && parsed.geometry;
    if (geometry) {
        var polygons = null;
        if (geometry.type === "Polygon") {
            polygons = [geometry.coordinates];
        } else if (geometry.type === "MultiPolygon") {
            polygons = geometry.coordinates;
        }
        if (polygons) {
            for (var p = 0; p < polygons.length && !isMatch; p++) {
                var rings = polygons[p];
                if (rings && rings.length && ringBBoxContains(rings[0], lat, lon) && pointInRings(lat, lon, rings)) {
                    isMatch = true;
                }
            }
        }
    }
}

$parameters.IsMatch = isMatch;
};
});

define("Leaflet.controller$Map_GeoJSON_GetLayer", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_GeoJSON_GetLayer.GeoJSONSetLayerJS", "Leaflet.controller$Map_GetObject_FromId", "Leaflet.controller$LL_MapObject_Attr_GeoJSON_Layer", "Leaflet.controller$Map_GeoJSON_Callback_GetStyle"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_GeoJSON_GetLayer_GeoJSONSetLayerJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_GeoJSON_GetLayer$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_GetLayer$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var geoJSONSetLayerJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_GetLayer$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.geoJSONSetLayerJSResult = geoJSONSetLayerJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:O+i+H1H6v0WQhfxqOYJrgA:/ClientActionFlows.O+i+H1H6v0WQhfxqOYJrgA:WyCYl3t3KwQKQ17wfKqCVQ", "Leaflet", "Map_GeoJSON_GetLayer", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:cZa2MysvJUiv1p4Ln0kZHA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:YorcO6xFLUGehtCuP+wfKg", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Km3tQcuYzkCFHVywToTDsw", callContext.id);
geoJSONSetLayerJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_GeoJSON_GetLayer_GeoJSONSetLayerJS, "GeoJSONSetLayer", "Map_GeoJSON_GetLayer", {
LL_MapObject_Attr_GeoJSON_Layer: OS.DataConversion.JSNodeParamConverter.to(OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr_GeoJSON_Layer$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OS.DataTypes.DataTypes.Text),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
MapObject: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_GetLayer$geoJSONSetLayerJSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Map_GeoJSON_Callback_GetStyle: LeafletController.default.getClientActionProxies(controller).map_GeoJSON_Callback_GetStyle$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:_zoYDgJl7U+iQXZTsI27fQ", callContext.id);
// Object = GeoJSONSetLayer.Object
outVars.value.objectOut = geoJSONSetLayerJSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:z0Kuyid6zEehVkerjyzLSQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:O+i+H1H6v0WQhfxqOYJrgA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_GetLayer$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_GetLayer$geoJSONSetLayerJSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_GetLayer$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_GeoJSON_GetLayer$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GeoJSON_GetLayer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Leaflet.controller$Map_GeoJSON_GetLayer.GeoJSONSetLayerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const el = document.getElementById($parameters.MapId);
if (el) {
  if (!el[$parameters.LL_MapObject_Attr_GeoJSON_Layer]) {
    el[$parameters.LL_MapObject_Attr_GeoJSON_Layer] = L.geoJSON(null, {
      style: function (feature) {
        const fn = $actions.Map_GeoJSON_Callback_GetStyle($parameters.MapId).Function;
        if (fn) {
            return fn(feature).Style;
        } else {
            return null;
        }
      },
    });
  }
  $parameters.Object = el[$parameters.LL_MapObject_Attr_GeoJSON_Layer];
  el[$parameters.LL_MapObject_Attr_GeoJSON_Layer].addTo($parameters.MapObject)
}

};
});

define("Leaflet.controller$Map_GeoJSON_GetRegistry", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$GetFromObject_Array", "Leaflet.controller$LL_MapObject_Attr_GeoJSON_Registry"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.map_GeoJSON_GetRegistry$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_GetRegistry$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getFromObject_ArrayVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GeoJSON_GetRegistry$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getFromObject_ArrayVar = getFromObject_ArrayVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:PCBRof2R7k6TwNSuJZgphw:/ClientActionFlows.PCBRof2R7k6TwNSuJZgphw:CzWY28SFSHZQpbgUnjmx3A", "Leaflet", "Map_GeoJSON_GetRegistry", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:eQw063ONWE2cgh3C2Bo87w", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:G8IIOOIwu06ADYh+IKunKw", callContext.id);
// Execute Action: GetFromObject_Array
getFromObject_ArrayVar.value = LeafletController.default.getFromObject_Array$Action(vars.value.mapIdInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr_GeoJSON_Registry$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:KabbdGt4+ECeHZXlTeLiKA", callContext.id);
// Object = GetFromObject_Array.Object
outVars.value.objectOut = getFromObject_ArrayVar.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:fBUaOrLW_0i2kiP8ysl_5g", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:PCBRof2R7k6TwNSuJZgphw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_GetRegistry$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GeoJSON_GetRegistry$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_GeoJSON_GetRegistry$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GeoJSON_GetRegistry$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});

define("Leaflet.controller$Map_GetBoundsByZoomLevel", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_GetBoundsByZoomLevel.GetBoundsByZoomLevelJS", "Leaflet.controller$Map_GetObject_FromId"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_GetBoundsByZoomLevel_GetBoundsByZoomLevelJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_GetBoundsByZoomLevel$Action = function (mapIdIn, zoomLevelIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetBoundsByZoomLevel$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.zoomLevelInLocal = zoomLevelIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var getBoundsByZoomLevelJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetBoundsByZoomLevel$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.getBoundsByZoomLevelJSResult = getBoundsByZoomLevelJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:gmaEwqKPN0OO4kA4jeEv1Q:/ClientActionFlows.gmaEwqKPN0OO4kA4jeEv1Q:fj_AeVGZwqreWPIqe4PC8A", "Leaflet", "Map_GetBoundsByZoomLevel", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:_WXQSSleE0eYbNzAEAaLdg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:jUg7Dv0KDkiIGrZmxzDBig", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:OQdSehP5KEqN8osXTChhyw", callContext.id);
getBoundsByZoomLevelJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_GetBoundsByZoomLevel_GetBoundsByZoomLevelJS, "GetBoundsByZoomLevel", "Map_GetBoundsByZoomLevel", {
ZoomLevel: OS.DataConversion.JSNodeParamConverter.to(vars.value.zoomLevelInLocal, OS.DataTypes.DataTypes.Integer),
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
MinLat: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal),
MaxLat: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal),
MinLong: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal),
MaxLong: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_GetBoundsByZoomLevel$getBoundsByZoomLevelJSResult"))();
jsNodeResult.minLatOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MinLat, OS.DataTypes.DataTypes.Decimal);
jsNodeResult.maxLatOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MaxLat, OS.DataTypes.DataTypes.Decimal);
jsNodeResult.minLongOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MinLong, OS.DataTypes.DataTypes.Decimal);
jsNodeResult.maxLongOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MaxLong, OS.DataTypes.DataTypes.Decimal);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:liCixCg3Mkmz1b3ioGaVfA", callContext.id);
// MinLat = GetBoundsByZoomLevel.MinLat
outVars.value.minLatOut = getBoundsByZoomLevelJSResult.value.minLatOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:liCixCg3Mkmz1b3ioGaVfA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// MaxLat = GetBoundsByZoomLevel.MaxLat
outVars.value.maxLatOut = getBoundsByZoomLevelJSResult.value.maxLatOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:liCixCg3Mkmz1b3ioGaVfA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// MinLong = GetBoundsByZoomLevel.MinLong
outVars.value.minLongOut = getBoundsByZoomLevelJSResult.value.minLongOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:liCixCg3Mkmz1b3ioGaVfA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// MaxLong = GetBoundsByZoomLevel.MaxLong
outVars.value.maxLongOut = getBoundsByZoomLevelJSResult.value.maxLongOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:f9RQT2w6A0y0gpWUi8CtSw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:gmaEwqKPN0OO4kA4jeEv1Q", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetBoundsByZoomLevel$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ZoomLevel",
attrName: "zoomLevelInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetBoundsByZoomLevel$getBoundsByZoomLevelJSResult", [{
name: "MinLat",
attrName: "minLatOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MaxLat",
attrName: "maxLatOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MinLong",
attrName: "minLongOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MaxLong",
attrName: "maxLongOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetBoundsByZoomLevel$outVars", [{
name: "MinLat",
attrName: "minLatOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MaxLat",
attrName: "maxLatOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MinLong",
attrName: "minLongOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MaxLong",
attrName: "maxLongOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
LeafletController.default.clientActionProxies.map_GetBoundsByZoomLevel$Action = function (mapIdIn, zoomLevelIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
zoomLevelIn = (zoomLevelIn === undefined) ? 0 : zoomLevelIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GetBoundsByZoomLevel$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(zoomLevelIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MinLat: OS.DataConversion.JSNodeParamConverter.to(actionResults.minLatOut, OS.DataTypes.DataTypes.Decimal),
MaxLat: OS.DataConversion.JSNodeParamConverter.to(actionResults.maxLatOut, OS.DataTypes.DataTypes.Decimal),
MinLong: OS.DataConversion.JSNodeParamConverter.to(actionResults.minLongOut, OS.DataTypes.DataTypes.Decimal),
MaxLong: OS.DataConversion.JSNodeParamConverter.to(actionResults.maxLongOut, OS.DataTypes.DataTypes.Decimal)
};
});
};
});
define("Leaflet.controller$Map_GetBoundsByZoomLevel.GetBoundsByZoomLevelJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function getBoundsAtZoom(map, zoom) {
  const size = map.getSize(); // viewport size in pixels, unaffected by zoom
  const centerPoint = map.project(map.getCenter(), zoom);

  const topLeft = map.unproject(centerPoint.subtract(size.divideBy(2)), zoom);
  const bottomRight = map.unproject(centerPoint.add(size.divideBy(2)), zoom);
    
    $parameters.MinLat =  bottomRight.lat;
    $parameters.MaxLat = topLeft.lat;
    $parameters.MinLong =  topLeft.lng;
    $parameters.MaxLong =  bottomRight.lng;

}

getBoundsAtZoom($parameters.Map, $parameters.ZoomLevel);
};
});

define("Leaflet.controller$Map_GetCurrentView", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_GetCurrentView.GetCurrentViewJS", "Leaflet.controller$Map_GetObject_FromId"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_GetCurrentView_GetCurrentViewJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_GetCurrentView$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetCurrentView$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var getCurrentViewJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetCurrentView$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.getCurrentViewJSResult = getCurrentViewJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:j86k4ETUxkaYPIF77QT+sQ:/ClientActionFlows.j86k4ETUxkaYPIF77QT+sQ:pwrI2Mdli8VtMFC50fKrJQ", "Leaflet", "Map_GetCurrentView", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:pENm_n5mkEGzOyI2ei3lvA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:nzVxADOUtE2vfRuOp3LdtQ", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:m32yx9M4B0+madP33jJcag", callContext.id);
getCurrentViewJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_GetCurrentView_GetCurrentViewJS, "GetCurrentView", "Map_GetCurrentView", {
MapObject: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Latitude: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal),
Longitude: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal),
CurrentZoomLever: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_GetCurrentView$getCurrentViewJSResult"))();
jsNodeResult.latitudeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Latitude, OS.DataTypes.DataTypes.Decimal);
jsNodeResult.longitudeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Longitude, OS.DataTypes.DataTypes.Decimal);
jsNodeResult.currentZoomLeverOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CurrentZoomLever, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:b1XXPUtpL06oJjxbWWwQWg", callContext.id);
// Latitude = GetCurrentView.Latitude
outVars.value.latitudeOut = getCurrentViewJSResult.value.latitudeOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:b1XXPUtpL06oJjxbWWwQWg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Longitude = GetCurrentView.Longitude
outVars.value.longitudeOut = getCurrentViewJSResult.value.longitudeOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:b1XXPUtpL06oJjxbWWwQWg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ZoomLevel = GetCurrentView.CurrentZoomLever
outVars.value.zoomLevelOut = getCurrentViewJSResult.value.currentZoomLeverOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:jPfUrR1fVU668e9TK4cEHg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:j86k4ETUxkaYPIF77QT+sQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetCurrentView$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetCurrentView$getCurrentViewJSResult", [{
name: "Latitude",
attrName: "latitudeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Longitude",
attrName: "longitudeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "CurrentZoomLever",
attrName: "currentZoomLeverOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetCurrentView$outVars", [{
name: "Latitude",
attrName: "latitudeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Longitude",
attrName: "longitudeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "ZoomLevel",
attrName: "zoomLevelOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
LeafletController.default.clientActionProxies.map_GetCurrentView$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GetCurrentView$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Latitude: OS.DataConversion.JSNodeParamConverter.to(actionResults.latitudeOut, OS.DataTypes.DataTypes.Decimal),
Longitude: OS.DataConversion.JSNodeParamConverter.to(actionResults.longitudeOut, OS.DataTypes.DataTypes.Decimal),
ZoomLevel: OS.DataConversion.JSNodeParamConverter.to(actionResults.zoomLevelOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});
define("Leaflet.controller$Map_GetCurrentView.GetCurrentViewJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.MapObject) {
    const currentCenter = $parameters.MapObject.getCenter();
    $parameters.Latitude = Number(currentCenter.lat.toFixed(16));
    $parameters.Longitude = Number(currentCenter.lng.toFixed(16));
    $parameters.CurrentZoomLever = $parameters.MapObject.getZoom();
}
};
});

define("Leaflet.controller$Map_GetObject_FromId", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_GetObject_FromId.GetObjectJS", "Leaflet.controller$LL_MapObject_Attr"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_GetObject_FromId_GetObjectJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_GetObject_FromId$Action = function (idIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetObject_FromId$vars"))());
vars.value.idInLocal = idIn;
var getObjectJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetObject_FromId$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getObjectJSResult = getObjectJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:tGqBGF7Bn0aNhJvW4T2f7w:/ClientActionFlows.tGqBGF7Bn0aNhJvW4T2f7w:8Y9s6FUH_C6j+43+MY62Ig", "Leaflet", "Map_GetObject_FromId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:IiZPQ2UlVk6ItC3dpQIa5w", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:hve9VzymI0yQWnth2q1kRQ", callContext.id);
getObjectJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_GetObject_FromId_GetObjectJS, "GetObject", "Map_GetObject_FromId", {
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.idInLocal, OS.DataTypes.DataTypes.Text),
LL_MapObject_Attr: OS.DataConversion.JSNodeParamConverter.to(OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OS.DataTypes.DataTypes.Text),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_GetObject_FromId$getObjectJSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:UKtAB2Nt1Euz5auFyk4Wuw", callContext.id);
// Object = GetObject.Object
outVars.value.objectOut = getObjectJSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:KXmx2Yy8bkifILVlg50tkQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:tGqBGF7Bn0aNhJvW4T2f7w", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetObject_FromId$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetObject_FromId$getObjectJSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetObject_FromId$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_GetObject_FromId$Action = function (idIn) {
idIn = (idIn === undefined) ? "" : idIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GetObject_FromId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(idIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Leaflet.controller$Map_GetObject_FromId.GetObjectJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.getElementById($parameters.Id);
if(el && el[$parameters.LL_MapObject_Attr]) {
    $parameters.Object = el[$parameters.LL_MapObject_Attr];
}
};
});

define("Leaflet.controller$Map_GetOnMarkerClickedCallback", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_GetOnMarkerClickedCallback.GetCallbackJS", "Leaflet.controller$LL_MapObject_Attr_OnMarkerClickedCallback"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_GetOnMarkerClickedCallback_GetCallbackJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_GetOnMarkerClickedCallback$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetOnMarkerClickedCallback$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getCallbackJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetOnMarkerClickedCallback$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCallbackJSResult = getCallbackJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:YmBb1o6ZnkGcYH4_by0nxA:/ClientActionFlows.YmBb1o6ZnkGcYH4_by0nxA:tDZHDQ_yGiq9YC2EeJPDaw", "Leaflet", "Map_GetOnMarkerClickedCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:5fYzDb7ScE2QSjuPvWIFUg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:zncbXCkXHEqcornxhlZEPg", callContext.id);
getCallbackJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_GetOnMarkerClickedCallback_GetCallbackJS, "GetCallback", "Map_GetOnMarkerClickedCallback", {
LL_MapObject_Attr_OnMarkerClickedCallback: OS.DataConversion.JSNodeParamConverter.to(OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr_OnMarkerClickedCallback$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OS.DataTypes.DataTypes.Text),
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_GetOnMarkerClickedCallback$getCallbackJSResult"))();
jsNodeResult.callbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Callback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:aYfyGELPXk2Ui7XSirVnZg", callContext.id);
// Callback = GetCallback.Callback
outVars.value.callbackOut = getCallbackJSResult.value.callbackOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:4QINm8pPbE23QcvUH6b+ZQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:YmBb1o6ZnkGcYH4_by0nxA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetOnMarkerClickedCallback$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetOnMarkerClickedCallback$getCallbackJSResult", [{
name: "Callback",
attrName: "callbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetOnMarkerClickedCallback$outVars", [{
name: "Callback",
attrName: "callbackOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_GetOnMarkerClickedCallback$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GetOnMarkerClickedCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Callback: OS.DataConversion.JSNodeParamConverter.to(actionResults.callbackOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Leaflet.controller$Map_GetOnMarkerClickedCallback.GetCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.getElementById($parameters.Id);
if (el && el[$parameters.LL_MapObject_Attr_OnMarkerClickedCallback]) {
    $parameters.Callback = el[$parameters.LL_MapObject_Attr_OnMarkerClickedCallback];
}
};
});

define("Leaflet.controller$Map_GetPopupBindingCallback", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$GetFromObject_Object", "Leaflet.controller$LL_MapObject_Attr_PopupBindingCallback"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.map_GetPopupBindingCallback$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetPopupBindingCallback$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getFromObject_ObjectVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetPopupBindingCallback$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getFromObject_ObjectVar = getFromObject_ObjectVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:pYm2PixrgES7w8LoqDwKBQ:/ClientActionFlows.pYm2PixrgES7w8LoqDwKBQ:tjujZfbkksLczBStrV9b1Q", "Leaflet", "Map_GetPopupBindingCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:aGiA6a4dz0iv1KCT36QTRA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:XoM7kqTgIkK8xugXuP98yA", callContext.id);
// Execute Action: GetFromObject_Object
getFromObject_ObjectVar.value = LeafletController.default.getFromObject_Object$Action(vars.value.mapIdInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr_PopupBindingCallback$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:XWDq_iefkkWEokTFi4RmBA", callContext.id);
// Callback = GetFromObject_Object.Object
outVars.value.callbackOut = getFromObject_ObjectVar.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:on2ekhK_z0+_GDDaLzgi4A", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:pYm2PixrgES7w8LoqDwKBQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetPopupBindingCallback$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetPopupBindingCallback$outVars", [{
name: "Callback",
attrName: "callbackOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_GetPopupBindingCallback$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GetPopupBindingCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Callback: OS.DataConversion.JSNodeParamConverter.to(actionResults.callbackOut, OS.DataTypes.DataTypes.Object)
};
});
};
});

define("Leaflet.controller$Map_GetTooltipBindingCallback", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$GetFromObject_Object", "Leaflet.controller$LL_MapObject_Attr_TooltipBindingCallback"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.map_GetTooltipBindingCallback$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetTooltipBindingCallback$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getFromObject_ObjectVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetTooltipBindingCallback$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getFromObject_ObjectVar = getFromObject_ObjectVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:InRHO4VRzUC3EVTLRV2JbA:/ClientActionFlows.InRHO4VRzUC3EVTLRV2JbA:+RnubgRNIBRgX4WOuAlmuQ", "Leaflet", "Map_GetTooltipBindingCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:PSUcDYCE5kiudJTuv5oRhQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:gxnKUyv9D0aVnx9ce7lVJQ", callContext.id);
// Execute Action: GetFromObject_Object
getFromObject_ObjectVar.value = LeafletController.default.getFromObject_Object$Action(vars.value.mapIdInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr_TooltipBindingCallback$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:1wA3hPAbHkyVQvC++e3n2g", callContext.id);
// Callback = GetFromObject_Object.Object
outVars.value.callbackOut = getFromObject_ObjectVar.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:bwQtCI4Sa0aNynONxQWNJw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:InRHO4VRzUC3EVTLRV2JbA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetTooltipBindingCallback$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetTooltipBindingCallback$outVars", [{
name: "Callback",
attrName: "callbackOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_GetTooltipBindingCallback$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GetTooltipBindingCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Callback: OS.DataConversion.JSNodeParamConverter.to(actionResults.callbackOut, OS.DataTypes.DataTypes.Object)
};
});
};
});

define("Leaflet.controller$Map_GetVisibleBoundaries", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_GetVisibleBoundaries.JavaScript1JS", "Leaflet.controller$Map_GetObject_FromId", "Leaflet.model$MapVisibleBoundariesRec"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_GetVisibleBoundaries_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.map_GetVisibleBoundaries$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetVisibleBoundaries$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_GetVisibleBoundaries$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:sUOPdehuCE24c9oIe6xPPg:/ClientActionFlows.sUOPdehuCE24c9oIe6xPPg:b51z8gyfAhBqDHGutTyFyA", "Leaflet", "Map_GetVisibleBoundaries", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:cc6VsfY+AkOopNfzwe6_Zw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:g6NtEA+nhEeXggoTMTCFBA", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:PrtzUwd56US6kval6pIkXA", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_GetVisibleBoundaries_JavaScript1JS, "JavaScript1", "Map_GetVisibleBoundaries", {
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
MaxLat: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal),
MinLat: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal),
MaxLong: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal),
MinLong: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_GetVisibleBoundaries$javaScript1JSResult"))();
jsNodeResult.maxLatOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MaxLat, OS.DataTypes.DataTypes.Decimal);
jsNodeResult.minLatOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MinLat, OS.DataTypes.DataTypes.Decimal);
jsNodeResult.maxLongOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MaxLong, OS.DataTypes.DataTypes.Decimal);
jsNodeResult.minLongOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MinLong, OS.DataTypes.DataTypes.Decimal);
return jsNodeResult;
}, {}, {});
// MapVisibleBoundaries
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:_0vlpmikTU64rbR5HeMqdQ", callContext.id);
// MapVisibleBoundaries.MaxLat = JavaScript1.MaxLat
outVars.value.mapVisibleBoundariesOut.maxLatAttr = javaScript1JSResult.value.maxLatOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:_0vlpmikTU64rbR5HeMqdQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// MapVisibleBoundaries.MinLat = JavaScript1.MinLat
outVars.value.mapVisibleBoundariesOut.minLatAttr = javaScript1JSResult.value.minLatOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:_0vlpmikTU64rbR5HeMqdQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// MapVisibleBoundaries.MaxLong = JavaScript1.MaxLong
outVars.value.mapVisibleBoundariesOut.maxLongAttr = javaScript1JSResult.value.maxLongOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:_0vlpmikTU64rbR5HeMqdQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// MapVisibleBoundaries.MinLong = JavaScript1.MinLong
outVars.value.mapVisibleBoundariesOut.minLongAttr = javaScript1JSResult.value.minLongOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:J1HuIrCyzkabaoAs64qx6w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:sUOPdehuCE24c9oIe6xPPg", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetVisibleBoundaries$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetVisibleBoundaries$javaScript1JSResult", [{
name: "MaxLat",
attrName: "maxLatOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MinLat",
attrName: "minLatOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MaxLong",
attrName: "maxLongOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MinLong",
attrName: "minLongOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_GetVisibleBoundaries$outVars", [{
name: "MapVisibleBoundaries",
attrName: "mapVisibleBoundariesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new LeafletModel.MapVisibleBoundariesRec();
},
complexType: LeafletModel.MapVisibleBoundariesRec
}]);
LeafletController.default.clientActionProxies.map_GetVisibleBoundaries$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_GetVisibleBoundaries$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MapVisibleBoundaries: actionResults.mapVisibleBoundariesOut
};
});
};
});
define("Leaflet.controller$Map_GetVisibleBoundaries.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Map)
{
    const bounds = $parameters.Map.getBounds()
    const northEast = bounds.getNorthEast();
    const southWest = bounds.getSouthWest();

    $parameters.MaxLat = northEast.lat;
    $parameters.MinLat = southWest.lat;
    $parameters.MaxLong = northEast.lng;
    $parameters.MinLong = southWest.lng;

}

};
});

define("Leaflet.controller$Map_Internal_Layer_SetStyle", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Internal_Layer_SetStyle.SetStyleJS", "Leaflet.model$PathOptionsRec"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Internal_Layer_SetStyle_SetStyleJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Internal_Layer_SetStyle$Action = function (objectIn, optionsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Internal_Layer_SetStyle$vars"))());
vars.value.objectInLocal = objectIn;
vars.value.optionsInLocal = optionsIn.clone();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize1Var = jSONSerialize1Var;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:MVMd6F5t5Umtyp_yyYTi6A:/ClientActionFlows.MVMd6F5t5Umtyp_yyYTi6A:oDXyDjdMOXi0ffeMFmLjeg", "Leaflet", "Map_Internal_Layer_SetStyle", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:2bYUyB7wJUi+FqquNqhn7Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Sd2U6LBXHkiQtF0b6pckDg", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.optionsInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:wsgbhr0+GkergF0cPwT_Hg", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_Internal_Layer_SetStyle_SetStyleJS, "SetStyle", "Map_Internal_Layer_SetStyle", {
OptionJSON: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
Object: OS.DataConversion.JSNodeParamConverter.to(vars.value.objectInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:6zDUvi+2oEK9au2z6wE3ng", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:MVMd6F5t5Umtyp_yyYTi6A", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Internal_Layer_SetStyle$vars", [{
name: "Object",
attrName: "objectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Options",
attrName: "optionsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new LeafletModel.PathOptionsRec();
},
complexType: LeafletModel.PathOptionsRec
}]);
LeafletController.default.clientActionProxies.map_Internal_Layer_SetStyle$Action = function (objectIn, optionsIn) {
objectIn = (objectIn === undefined) ? null : objectIn;
optionsIn = (optionsIn === undefined) ? new LeafletModel.PathOptionsRec() : optionsIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Internal_Layer_SetStyle$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(objectIn, OS.DataTypes.DataTypes.Object), optionsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_Internal_Layer_SetStyle.SetStyleJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const options = JSON.parse($parameters.OptionJSON);
$parameters.Object.setStyle(options);
};
});

define("Leaflet.controller$Map_InvalidateSize", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_InvalidateSize.JavaScript1JS", "Leaflet.controller$Map_GetObject_FromId"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_InvalidateSize_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.map_InvalidateSize$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_InvalidateSize$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:TAnlTRBM006zeQ0VBYDC5g:/ClientActionFlows.TAnlTRBM006zeQ0VBYDC5g:gsZaPI6Nmzi2oCTMrovluw", "Leaflet", "Map_InvalidateSize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:pB5fUBh5NUCQKg0vSaQxBQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:deFcbqIH5UKQPeJ+Ge6qGA", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:w_UBlMb4s0mllaen_RHLpA", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_InvalidateSize_JavaScript1JS, "JavaScript1", "Map_InvalidateSize", {
Object: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:p89obLp9IUa2SgQTus5g_A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:TAnlTRBM006zeQ0VBYDC5g", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_InvalidateSize$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.map_InvalidateSize$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_InvalidateSize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_InvalidateSize.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Object.invalidateSize()
};
});

define("Leaflet.controller$Map_IsViewportInsideZoomLevel", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Zoom_GetLevel", "Leaflet.controller$Map_GetBoundsByZoomLevel"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.map_IsViewportInsideZoomLevel$Action = function (mapIdIn, minLatIn, maxLatIn, minLongIn, maxLongIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_IsViewportInsideZoomLevel$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.minLatInLocal = minLatIn;
vars.value.maxLatInLocal = maxLatIn;
vars.value.minLongInLocal = minLongIn;
vars.value.maxLongInLocal = maxLongIn;
var map_Zoom_GetLevelVar = new OS.DataTypes.VariableHolder();
var map_GetBoundsByZoomLevel_CurrentVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_IsViewportInsideZoomLevel$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_Zoom_GetLevelVar = map_Zoom_GetLevelVar;
varBag.map_GetBoundsByZoomLevel_CurrentVar = map_GetBoundsByZoomLevel_CurrentVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:CUBE2eCe9EGGEjHm_SK4dw:/ClientActionFlows.CUBE2eCe9EGGEjHm_SK4dw:CZKD_2gRDTPBOpjnBq7bOQ", "Leaflet", "Map_IsViewportInsideZoomLevel", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Hm8No8NJ_0+7BJ+6K0CImA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ZxdsfKgMmEq+yW3DvdByvQ", callContext.id);
// Execute Action: Map_Zoom_GetLevel
map_Zoom_GetLevelVar.value = LeafletController.default.map_Zoom_GetLevel$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:X0UMp0BEekevpKq57roiyw", callContext.id);
// Execute Action: Map_GetBoundsByZoomLevel_Current
map_GetBoundsByZoomLevel_CurrentVar.value = LeafletController.default.map_GetBoundsByZoomLevel$Action(vars.value.mapIdInLocal, map_Zoom_GetLevelVar.value.zoomLevelOut, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:sZ3d_62iNkGmuGy1zCb8zw", callContext.id);
// IsInsideZoomLevel = Map_GetBoundsByZoomLevel_Current.MinLat >= MinLat and Map_GetBoundsByZoomLevel_Current.MaxLat <= MaxLat and Map_GetBoundsByZoomLevel_Current.MinLong >= MinLong and Map_GetBoundsByZoomLevel_Current.MaxLong <= MaxLong
outVars.value.isInsideZoomLevelOut = (((map_GetBoundsByZoomLevel_CurrentVar.value.minLatOut.gte(vars.value.minLatInLocal) && map_GetBoundsByZoomLevel_CurrentVar.value.maxLatOut.lte(vars.value.maxLatInLocal)) && map_GetBoundsByZoomLevel_CurrentVar.value.minLongOut.gte(vars.value.minLongInLocal)) && map_GetBoundsByZoomLevel_CurrentVar.value.maxLongOut.lte(vars.value.maxLongInLocal));
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:dAv4GFvq6EC844D1lET7Yw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:CUBE2eCe9EGGEjHm_SK4dw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_IsViewportInsideZoomLevel$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MinLat",
attrName: "minLatInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MaxLat",
attrName: "maxLatInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MinLong",
attrName: "minLongInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MaxLong",
attrName: "maxLongInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_IsViewportInsideZoomLevel$outVars", [{
name: "IsInsideZoomLevel",
attrName: "isInsideZoomLevelOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
LeafletController.default.clientActionProxies.map_IsViewportInsideZoomLevel$Action = function (mapIdIn, minLatIn, maxLatIn, minLongIn, maxLongIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
minLatIn = (minLatIn === undefined) ? OS.DataTypes.Decimal.defaultValue : minLatIn;
maxLatIn = (maxLatIn === undefined) ? OS.DataTypes.Decimal.defaultValue : maxLatIn;
minLongIn = (minLongIn === undefined) ? OS.DataTypes.Decimal.defaultValue : minLongIn;
maxLongIn = (maxLongIn === undefined) ? OS.DataTypes.Decimal.defaultValue : maxLongIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_IsViewportInsideZoomLevel$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(minLatIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(maxLatIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(minLongIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(maxLongIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsInsideZoomLevel: OS.DataConversion.JSNodeParamConverter.to(actionResults.isInsideZoomLevelOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Leaflet.controller$Map_Layer_SetStopgapVisible", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Layer_SetStopgapVisible.ToggleStopgapLayerJS", "Leaflet.controller$Map_GetObject_FromId"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Layer_SetStopgapVisible_ToggleStopgapLayerJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Layer_SetStopgapVisible$Action = function (mapIdIn, visibleIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Layer_SetStopgapVisible$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.visibleInLocal = visibleIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:ozJp84JCg0CKCFi7svqgvQ:/ClientActionFlows.ozJp84JCg0CKCFi7svqgvQ:PqU+ggiDUDp_KTo5LnRR4A", "Leaflet", "Map_Layer_SetStopgapVisible", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:aUQbOVAugEitKzIuVwg8qg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:gGjWJ1Nys0WQnVtdXgg6VQ", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:C7TP2VJ1r0GJBgx_uorZbA", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_Layer_SetStopgapVisible_ToggleStopgapLayerJS, "ToggleStopgapLayer", "Map_Layer_SetStopgapVisible", {
Visible: OS.DataConversion.JSNodeParamConverter.to(vars.value.visibleInLocal, OS.DataTypes.DataTypes.Boolean),
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ftSRi8W_y0e0ytc6S1aWsw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:ozJp84JCg0CKCFi7svqgvQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Layer_SetStopgapVisible$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Visible",
attrName: "visibleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
LeafletController.default.clientActionProxies.map_Layer_SetStopgapVisible$Action = function (mapIdIn, visibleIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
visibleIn = (visibleIn === undefined) ? false : visibleIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Layer_SetStopgapVisible$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(visibleIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_Layer_SetStopgapVisible.ToggleStopgapLayerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const el = document.getElementById($parameters.MapId);
const layer = el ? el["ll_map_marker_cluster_layer_stopgap"] : null;
if ($parameters.Map && layer) {
  if ($parameters.Visible) {
    if (!$parameters.Map.hasLayer(layer)) { $parameters.Map.addLayer(layer); }
  } else {
    if ($parameters.Map.hasLayer(layer)) { $parameters.Map.removeLayer(layer); }
  }
}
};
});

define("Leaflet.controller$Map_Layer_SetVisible", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Layer_SetVisible.ToggleLayerJS", "Leaflet.controller$Map_GetObject_FromId", "Leaflet.controller$Map_MarkerCluster_GetOrCreateLayer"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Layer_SetVisible_ToggleLayerJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Layer_SetVisible$Action = function (mapIdIn, typeIn, visibleIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Layer_SetVisible$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.typeInLocal = typeIn;
vars.value.visibleInLocal = visibleIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var map_MarkerCluster_GetOrCreateLayerVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.map_MarkerCluster_GetOrCreateLayerVar = map_MarkerCluster_GetOrCreateLayerVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:Xwz9QypexEqEvKQqHzhc4w:/ClientActionFlows.Xwz9QypexEqEvKQqHzhc4w:OsC+bGXFiaT0hJeyM57RkA", "Leaflet", "Map_Layer_SetVisible", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Igjc4cjS8E+8CL6_lO3V1g", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:XeMXardyOkaqJjV3kGYzUQ", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:PF3jlV02_EqimEqBYpvxZw", callContext.id);
// Execute Action: Map_MarkerCluster_GetOrCreateLayer
map_MarkerCluster_GetOrCreateLayerVar.value = LeafletController.default.map_MarkerCluster_GetOrCreateLayer$Action(vars.value.mapIdInLocal, vars.value.typeInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:icPP7h7cUU+RSXSnwdZ71w", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_Layer_SetVisible_ToggleLayerJS, "ToggleLayer", "Map_Layer_SetVisible", {
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Visible: OS.DataConversion.JSNodeParamConverter.to(vars.value.visibleInLocal, OS.DataTypes.DataTypes.Boolean),
Layer: OS.DataConversion.JSNodeParamConverter.to(map_MarkerCluster_GetOrCreateLayerVar.value.objectOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:JttvgSsEj0mZxcUHpP2dRA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:Xwz9QypexEqEvKQqHzhc4w", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Layer_SetVisible$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Visible",
attrName: "visibleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
LeafletController.default.clientActionProxies.map_Layer_SetVisible$Action = function (mapIdIn, typeIn, visibleIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
typeIn = (typeIn === undefined) ? "" : typeIn;
visibleIn = (visibleIn === undefined) ? false : visibleIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Layer_SetVisible$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(typeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(visibleIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_Layer_SetVisible.ToggleLayerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.Map && $parameters.Layer) {
  if ($parameters.Visible) {
    if (!$parameters.Map.hasLayer($parameters.Layer)) { $parameters.Map.addLayer($parameters.Layer); }
  } else {
    if ($parameters.Map.hasLayer($parameters.Layer)) { $parameters.Map.removeLayer($parameters.Layer); }
  }
}
};
});

define("Leaflet.controller$Map_Marker_Add", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Marker_Add.Create_MarkerJS", "Leaflet.controller$Map_Marker_Add.Marker__Tooltip_BindJS", "Leaflet.controller$Map_MarkerCluster_GetOrCreateLayer", "Leaflet.controller$GenerateGUID", "Leaflet.controller$Map_Marker_GetRegistry", "Leaflet.controller$Map_MarkerCluster_UsingCluster_Check", "Leaflet.controller$Map_GetObject_FromId", "Leaflet.model$MarkerWithWindowRec", "Leaflet.controller$Map_Marker_BindPopUp", "Leaflet.controller$Map_GetTooltipBindingCallback", "Leaflet.model$MarkerRec"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Marker_Add_Create_MarkerJS, Leaflet_controller_Map_Marker_Add_Marker__Tooltip_BindJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Marker_Add$Action = function (mapIdIn, markerWithWindowIn, onClickFunctionIn, useTypeBasedClusteringIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Marker_Add$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.markerWithWindowInLocal = markerWithWindowIn.clone();
vars.value.onClickFunctionInLocal = onClickFunctionIn;
vars.value.useTypeBasedClusteringInLocal = useTypeBasedClusteringIn;
var map_MarkerCluster_GetOrCreateLayerVar = new OS.DataTypes.VariableHolder();
var generateGUIDVar = new OS.DataTypes.VariableHolder();
var map_Marker_GetRegistryVar = new OS.DataTypes.VariableHolder();
var map_MarkerCluster_UsingCluster_CheckVar = new OS.DataTypes.VariableHolder();
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var create_MarkerJSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize_MarkerVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerialize_TooltipVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_MarkerCluster_GetOrCreateLayerVar = map_MarkerCluster_GetOrCreateLayerVar;
varBag.generateGUIDVar = generateGUIDVar;
varBag.map_Marker_GetRegistryVar = map_Marker_GetRegistryVar;
varBag.map_MarkerCluster_UsingCluster_CheckVar = map_MarkerCluster_UsingCluster_CheckVar;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.create_MarkerJSResult = create_MarkerJSResult;
varBag.jSONSerialize_MarkerVar = jSONSerialize_MarkerVar;
varBag.jSONSerialize_TooltipVar = jSONSerialize_TooltipVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:GQE8lSmL6UChSjQ+qh5rpQ:/ClientActionFlows.GQE8lSmL6UChSjQ+qh5rpQ:RSAiJe1CKw7EbuPwiveUSQ", "Leaflet", "Map_Marker_Add", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:JDVnRoWehUSHzrE_UM2qEA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:GwDYLOukw0uMBiXstpBc5w", callContext.id) && (vars.value.markerWithWindowInLocal.markerAttr.idAttr === ""))) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:_YmadCJQc0Sj5ETK+axziQ", callContext.id);
// Execute Action: GenerateGUID
generateGUIDVar.value = LeafletController.default.generateGUID$Action(callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:f6cBSS3R_0C5s9TFgS4HBg", callContext.id);
// MarkerWithWindow.Marker.Id = GenerateGUID.GUID
vars.value.markerWithWindowInLocal.markerAttr.idAttr = generateGUIDVar.value.gUIDOut;
}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Z+nS9S1XxkCjeger51Na7g", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:rDF8h1Aec0Oy+fxJpxAfaQ", callContext.id);
// Execute Action: Map_Marker_GetRegistry
map_Marker_GetRegistryVar.value = LeafletController.default.map_Marker_GetRegistry$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:zeDDKKitnkG2n08E2DPoRw", callContext.id);
// JSON Serialize: JSONSerialize_Marker
jSONSerialize_MarkerVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.markerWithWindowInLocal.markerAttr, false, false);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:OmGD8_uus0W6mPs0bgn0kg", callContext.id);
// Execute Action: Map_MarkerCluster_UsingCluster_Check
map_MarkerCluster_UsingCluster_CheckVar.value = LeafletController.default.map_MarkerCluster_UsingCluster_Check$Action(vars.value.mapIdInLocal, callContext);

if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:7wgjBsfHFU2o_CENHCYiow", callContext.id) && map_MarkerCluster_UsingCluster_CheckVar.value.valueOut)) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:m2rrQF681Ee7r7nuFQYMkQ", callContext.id);
// Execute Action: Map_MarkerCluster_GetOrCreateLayer
map_MarkerCluster_GetOrCreateLayerVar.value = LeafletController.default.map_MarkerCluster_GetOrCreateLayer$Action(vars.value.mapIdInLocal, ((vars.value.useTypeBasedClusteringInLocal) ? (vars.value.markerWithWindowInLocal.markerAttr.typeAttr) : ("")), callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:2oltbY53zUSWo1VRV047RA", callContext.id);
// ClusterLayerObject = Map_MarkerCluster_GetOrCreateLayer.Object
vars.value.clusterLayerObjectVar = map_MarkerCluster_GetOrCreateLayerVar.value.objectOut;
}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Wh1CY0wd2UOx4PMAXYzDew", callContext.id);
create_MarkerJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_Marker_Add_Create_MarkerJS, "Create_Marker", "Map_Marker_Add", {
OnClickFunction: OS.DataConversion.JSNodeParamConverter.to(vars.value.onClickFunctionInLocal, OS.DataTypes.DataTypes.Object),
ClusterLayer: OS.DataConversion.JSNodeParamConverter.to(vars.value.clusterLayerObjectVar, OS.DataTypes.DataTypes.Object),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
MarkerWithWindowObj: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.toObject(vars.value.markerWithWindowInLocal), OS.DataTypes.DataTypes.Object),
MarkerRegistry: OS.DataConversion.JSNodeParamConverter.to(map_Marker_GetRegistryVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Marker_JSON: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_MarkerVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_Marker_Add$create_MarkerJSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Map_Marker_BindPopUp: LeafletController.default.getClientActionProxies(controller).map_Marker_BindPopUp$Action
}, {});
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:r_yg3c93H0KDHc_tH2K64w", callContext.id) && ((vars.value.markerWithWindowInLocal.tooltipAttr.contentAttr) !== ("")))) {
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:OI5bx2sU6UW_qGU9A+36VA", callContext.id) && vars.value.markerWithWindowInLocal.tooltipAttr.optionsAttr.offsetAttr.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:L97kh0UaeUaWlXf0eentjA", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(vars.value.markerWithWindowInLocal.tooltipAttr.optionsAttr.offsetAttr, function () {
var list = new OS.DataTypes.LongIntegerList();
list.pushAll([OS.BuiltinFunctions.integerToLongInteger(0), OS.BuiltinFunctions.integerToLongInteger(0)]);
return list;
}(), callContext);
}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:lOSl7jyBA0mspg2lDfyb8w", callContext.id);
// JSON Serialize: JSONSerialize_Tooltip
jSONSerialize_TooltipVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.markerWithWindowInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:veBa7wCGm0KpD47ultMjQw", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_Marker_Add_Marker__Tooltip_BindJS, "Marker__Tooltip_Bind", "Map_Marker_Add", {
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
MarkerWithTooltip: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_TooltipVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
MarkerWithTooltipObject: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.toObject(vars.value.markerWithWindowInLocal), OS.DataTypes.DataTypes.Object),
Marker: OS.DataConversion.JSNodeParamConverter.to(create_MarkerJSResult.value.objectOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {
Map_GetTooltipBindingCallback: LeafletController.default.getClientActionProxies(controller).map_GetTooltipBindingCallback$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:T8F4gb66vECx+W21ntyAeA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:T8F4gb66vECx+W21ntyAeA", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:GQE8lSmL6UChSjQ+qh5rpQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Marker_Add$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarkerWithWindow",
attrName: "markerWithWindowInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new LeafletModel.MarkerWithWindowRec();
},
complexType: LeafletModel.MarkerWithWindowRec
}, {
name: "OnClickFunction",
attrName: "onClickFunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "UseTypeBasedClustering",
attrName: "useTypeBasedClusteringInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ClusterLayerObject",
attrName: "clusterLayerObjectVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Marker_Add$create_MarkerJSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_Marker_Add$Action = function (mapIdIn, markerWithWindowIn, onClickFunctionIn, useTypeBasedClusteringIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
markerWithWindowIn = (markerWithWindowIn === undefined) ? new LeafletModel.MarkerWithWindowRec() : markerWithWindowIn;
onClickFunctionIn = (onClickFunctionIn === undefined) ? null : onClickFunctionIn;
useTypeBasedClusteringIn = (useTypeBasedClusteringIn === undefined) ? false : useTypeBasedClusteringIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Marker_Add$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), markerWithWindowIn, OS.DataConversion.JSNodeParamConverter.from(onClickFunctionIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(useTypeBasedClusteringIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_Marker_Add.Create_MarkerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let marker = JSON.parse($parameters.Marker_JSON);
marker.options.Id = marker.Id;
marker.options.Type = marker.Type;
marker.options.ExtraData = marker.ExtraData;





if(marker.options.icon.isTextIcon) {
    //If we are using text we will use a transparent image
    marker.options.icon.iconUrl = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    marker.options.icon.className = marker.options.icon.className + " leaflet-text-icon";
    var textIconOptions = {
        className: 'leaflet-text-icon-wrapper',
        html: '<span class="'+marker.options.icon.className+'"></span>'
    };
    if (Array.isArray(marker.options.icon.iconSize) && marker.options.icon.iconSize.length === 2) {
        textIconOptions.iconSize = marker.options.icon.iconSize;
    }
    if (Array.isArray(marker.options.icon.iconAnchor) && marker.options.icon.iconAnchor.length === 2) {
        textIconOptions.iconAnchor = marker.options.icon.iconAnchor;
    }
    marker.options.icon = new L.DivIcon(textIconOptions);
}
else { 
    if(marker.options.icon && marker.options.icon.iconUrl && marker.options.icon.iconUrl != "") {
        // Empty List Decimal fields (IconSize/IconAnchor/PopupAnchor/TooltipAnchor) serialize
        // to [] when unset. Passing [] into L.icon() overrides Leaflet's own anchor defaults
        // with [undefined, undefined], which NaNs the tooltip/popup position math and makes
        // the browser silently reject the resulting transform. Drop empty ones so Leaflet's
        // own defaults apply instead.
        ['iconSize', 'iconAnchor', 'popupAnchor', 'tooltipAnchor', 'shadowSize', 'shadowAnchor'].forEach(function (key) {
            if (Array.isArray(marker.options.icon[key]) && marker.options.icon[key].length === 0) {
                delete marker.options.icon[key];
            }
        });
        marker.options.icon = L.icon(marker.options.icon);
    }
}

if (marker.Type === "-1") {
    document.querySelectorAll('.ubt-map-marker-user-location').forEach(function (span) {
        var iconEl = span.closest('.leaflet-marker-icon');
        if (iconEl && iconEl.parentNode) { iconEl.parentNode.removeChild(iconEl); }
    });
}

$parameters.Object = L.marker(marker.latlng,marker.options); 
$actions.Map_Marker_BindPopUp($parameters.MapId,$parameters.Object,$parameters.MarkerWithWindowObj);

if ($parameters.Map) {
    if($parameters.ClusterLayer && marker.Type !== "-1") {
        /* If using clustering we will not add it to the map, instead we will add it to the cluster layer */
        $parameters.ClusterLayer.addLayer($parameters.Object)
    } else {
        $parameters.Object.addTo($parameters.Map)
    }
}

$parameters.MarkerRegistry[marker.Id] = $parameters.Object;

if($parameters.OnClickFunction) {
    $parameters.Object.on({
        click: function(e) {
            $parameters.OnClickFunction(this.options.Id, this.options.Type, this.options.ExtraData, this._latlng.lat, this._latlng.lng, this);
        }
    })
}
};
});
define("Leaflet.controller$Map_Marker_Add.Marker__Tooltip_BindJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let markerWithTooltip = JSON.parse($parameters.MarkerWithTooltip);
let callback = $actions.Map_GetTooltipBindingCallback($parameters.MapId).Callback;

if (callback) {
  $parameters.Marker.bindTooltip(
    function () {
      const result = callback($parameters.MarkerWithTooltipObject);

      // Defensive check
      if (result && result instanceof HTMLElement) {
        return result;
      }

      // fallback (important)
      return document.createTextNode('Invalid tooltip content');
    },
    markerWithTooltip.Tooltip.options
  );
} else {
  $parameters.Marker.bindTooltip(
    markerWithTooltip.Tooltip.content,
    markerWithTooltip.Tooltip.options
  );
}
};
});

define("Leaflet.controller$Map_Marker_BindPopUp", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Marker_BindPopUp.Marker__Popup_BindJS", "Leaflet.controller$Map_GetPopupBindingCallback", "Leaflet.model$MarkerWithWindowRec"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Marker_BindPopUp_Marker__Popup_BindJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Marker_BindPopUp$Action = function (mapIdIn, markerIn, markerWithWindowIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Marker_BindPopUp$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.markerInLocal = markerIn;
vars.value.markerWithWindowInLocal = markerWithWindowIn.clone();
var jSONSerialize_PopupVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_PopupVar = jSONSerialize_PopupVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:e1P_ypY8UEGw54MjilpqHw:/ClientActionFlows.e1P_ypY8UEGw54MjilpqHw:Xvw1crMiSjrlHhvWx52g3Q", "Leaflet", "Map_Marker_BindPopUp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:d+_994Akv0WEdaO1Wc96PQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ybokp5vFtkGS3JkQ8_TesA", callContext.id) && ((vars.value.markerWithWindowInLocal.popupAttr.contentAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:bQXdCDWvD0qJ4pXLCgw4TQ", callContext.id);
// JSON Serialize: JSONSerialize_Popup
jSONSerialize_PopupVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.markerWithWindowInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:J3ivXCl7tE+nt_JR1sMROg", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_Marker_BindPopUp_Marker__Popup_BindJS, "Marker__Popup_Bind", "Map_Marker_BindPopUp", {
MarkerWithTooltipObject: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.toObject(vars.value.markerWithWindowInLocal), OS.DataTypes.DataTypes.Object),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
MarkerWithTooltip: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_PopupVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
Marker: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {
Map_GetPopupBindingCallback: LeafletController.default.getClientActionProxies(controller).map_GetPopupBindingCallback$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:C5M03bjUPE+jjnUllHsmBA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:C5M03bjUPE+jjnUllHsmBA", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:e1P_ypY8UEGw54MjilpqHw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Marker_BindPopUp$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Marker",
attrName: "markerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "MarkerWithWindow",
attrName: "markerWithWindowInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new LeafletModel.MarkerWithWindowRec();
},
complexType: LeafletModel.MarkerWithWindowRec
}]);
LeafletController.default.clientActionProxies.map_Marker_BindPopUp$Action = function (mapIdIn, markerIn, markerWithWindowIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
markerIn = (markerIn === undefined) ? null : markerIn;
markerWithWindowIn = (markerWithWindowIn === undefined) ? new LeafletModel.MarkerWithWindowRec() : markerWithWindowIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Marker_BindPopUp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(markerIn, OS.DataTypes.DataTypes.Object), markerWithWindowIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_Marker_BindPopUp.Marker__Popup_BindJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let markerWithTooltip = JSON.parse($parameters.MarkerWithTooltip);
let callback = $actions.Map_GetPopupBindingCallback($parameters.MapId).Callback;

let popupOptions = markerWithTooltip.Popup || {};

if (callback) {
  $parameters.Marker.bindPopup(
    function () {
      const result = callback($parameters.MarkerWithTooltipObject);

      // Defensive check
      if (result && result instanceof HTMLElement) {
        return result;
      }

      return document.createTextNode("Invalid popup content");
    },
    popupOptions
  )
} else {
  $parameters.Marker.bindPopup(
    markerWithTooltip.Popup?.content || "",
    popupOptions
  )
}
};
});

define("Leaflet.controller$Map_Marker_Delete", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Marker_Delete.Delete_MarkerJS", "Leaflet.controller$Map_Marker_GetRegistry"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Marker_Delete_Delete_MarkerJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Marker_Delete$Action = function (mapIdIn, markerIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Marker_Delete$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.markerIdInLocal = markerIdIn;
var map_Marker_GetRegistryVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_Marker_GetRegistryVar = map_Marker_GetRegistryVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:UZX6xcjp_0+T_pNINqUKBg:/ClientActionFlows.UZX6xcjp_0+T_pNINqUKBg:7eDXB2MZOB0+TC8HspKxBA", "Leaflet", "Map_Marker_Delete", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:dKyB6VD0H0CF00Ff9DHPWw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:QUJwU_0uiUS6k4orcZ1MwQ", callContext.id);
// Execute Action: Map_Marker_GetRegistry
map_Marker_GetRegistryVar.value = LeafletController.default.map_Marker_GetRegistry$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:qKxLm8GkCkiD7_6ChfzrSQ", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_Marker_Delete_Delete_MarkerJS, "Delete_Marker", "Map_Marker_Delete", {
Registry: OS.DataConversion.JSNodeParamConverter.to(map_Marker_GetRegistryVar.value.objectOut, OS.DataTypes.DataTypes.Object),
MarkerId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:_SVTgwku4EeXcZOd4Noiww", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:UZX6xcjp_0+T_pNINqUKBg", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Marker_Delete$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarkerId",
attrName: "markerIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.map_Marker_Delete$Action = function (mapIdIn, markerIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
markerIdIn = (markerIdIn === undefined) ? "" : markerIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Marker_Delete$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(markerIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_Marker_Delete.Delete_MarkerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Registry && $parameters.Registry[$parameters.MarkerId])
{
    const markerInstance = $parameters.Registry[$parameters.MarkerId];
    markerInstance.remove()
    delete $parameters.Registry[$parameters.MarkerId];
}
};
});

define("Leaflet.controller$Map_Marker_DeleteAll", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Marker_DeleteAll.Map_Marker_DeleteAllJS", "Leaflet.controller$Map_Marker_GetRegistry", "Leaflet.controller$Map_MarkerCluster_GetOrCreateLayer"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Marker_DeleteAll_Map_Marker_DeleteAllJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Marker_DeleteAll$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Marker_DeleteAll$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var map_Marker_GetRegistryVar = new OS.DataTypes.VariableHolder();
var map_MarkerCluster_GetOrCreateLayerVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_Marker_GetRegistryVar = map_Marker_GetRegistryVar;
varBag.map_MarkerCluster_GetOrCreateLayerVar = map_MarkerCluster_GetOrCreateLayerVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:5m6JqGM6_UO1Ul2Gx1GELw:/ClientActionFlows.5m6JqGM6_UO1Ul2Gx1GELw:uYjZ34jidPd8X9XBBtB4Eg", "Leaflet", "Map_Marker_DeleteAll", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:a49Z_i+ATUmzi4H9b1tNkA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:HXVmJdL7oUGmYiYk9EfrYw", callContext.id);
// Execute Action: Map_Marker_GetRegistry
map_Marker_GetRegistryVar.value = LeafletController.default.map_Marker_GetRegistry$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:3wdKVefpekep1LXVD9HaeQ", callContext.id);
// Execute Action: Map_MarkerCluster_GetOrCreateLayer
map_MarkerCluster_GetOrCreateLayerVar.value = LeafletController.default.map_MarkerCluster_GetOrCreateLayer$Action(vars.value.mapIdInLocal, "", callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:AXcCKVfp+UegtmcJAkRsbQ", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_Marker_DeleteAll_Map_Marker_DeleteAllJS, "Map_Marker_DeleteAll", "Map_Marker_DeleteAll", {
MarkerClusterLayer: OS.DataConversion.JSNodeParamConverter.to(map_MarkerCluster_GetOrCreateLayerVar.value.objectOut, OS.DataTypes.DataTypes.Object),
MarkerRegistry: OS.DataConversion.JSNodeParamConverter.to(map_Marker_GetRegistryVar.value.objectOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:fXA2cc8LrkiQLETwuzCKZQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:5m6JqGM6_UO1Ul2Gx1GELw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Marker_DeleteAll$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.map_Marker_DeleteAll$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Marker_DeleteAll$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_Marker_DeleteAll.Map_Marker_DeleteAllJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.MarkerClusterLayer) {
    $parameters.MarkerClusterLayer.remove();
    $parameters.MarkerClusterLayer.clearLayers();
} else {
    Object.values($parameters.MarkerRegistry).forEach(marker => marker.remove());
}

Object.keys($parameters.MarkerRegistry).forEach(id => delete $parameters.MarkerRegistry[id]);
};
});

define("Leaflet.controller$Map_Marker_GetRegistry", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$GetFromObject_Array", "Leaflet.controller$LL_MapObject_Attr_Marker_Registry"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.map_Marker_GetRegistry$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Marker_GetRegistry$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getFromObject_ArrayVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Marker_GetRegistry$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getFromObject_ArrayVar = getFromObject_ArrayVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:UFv_BV3lV0KnGxXvkdSqFg:/ClientActionFlows.UFv_BV3lV0KnGxXvkdSqFg:NVhKCeF8Yx0Rwl9BgwiJVA", "Leaflet", "Map_Marker_GetRegistry", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:d9SHog3rF0W4uNvzhsqpGw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:YE4bv7gNa0qSgJ+7gzQScA", callContext.id);
// Execute Action: GetFromObject_Array
getFromObject_ArrayVar.value = LeafletController.default.getFromObject_Array$Action(vars.value.mapIdInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr_Marker_Registry$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:y3G3+Uy1cU+17EjbKxBIsA", callContext.id);
// Object = GetFromObject_Array.Object
outVars.value.objectOut = getFromObject_ArrayVar.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:79TKVUZPgkCr6BjBlCHhRQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:UFv_BV3lV0KnGxXvkdSqFg", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Marker_GetRegistry$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Marker_GetRegistry$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_Marker_GetRegistry$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Marker_GetRegistry$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});

define("Leaflet.controller$Map_Marker_OpenPopUp", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Marker_OpenPopUp.OpenPopupJS"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Marker_OpenPopUp_OpenPopupJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Marker_OpenPopUp$Action = function (markerObjIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Marker_OpenPopUp$vars"))());
vars.value.markerObjInLocal = markerObjIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:COH42XRdL0mKBvBx7WjlKA:/ClientActionFlows.COH42XRdL0mKBvBx7WjlKA:11H5v+aGWU3J+KnNSCS6wQ", "Leaflet", "Map_Marker_OpenPopUp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:mSW6rwcUBkaujeV9XC0w0w", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Ku3Fub6CmUWstY6ubStLeA", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_Marker_OpenPopUp_OpenPopupJS, "OpenPopup", "Map_Marker_OpenPopUp", {
MarkerObj: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerObjInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ZKekCFul1kCYhuoVvApykQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:COH42XRdL0mKBvBx7WjlKA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Marker_OpenPopUp$vars", [{
name: "MarkerObj",
attrName: "markerObjInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_Marker_OpenPopUp$Action = function (markerObjIn) {
markerObjIn = (markerObjIn === undefined) ? null : markerObjIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Marker_OpenPopUp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerObjIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_Marker_OpenPopUp.OpenPopupJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.MarkerObj.openPopup();
};
});

define("Leaflet.controller$Map_MarkerCluster_AddToMap", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_MarkerCluster_AddToMap.JavaScript1JS", "Leaflet.controller$Map_GetObject_FromId", "Leaflet.controller$Map_MarkerCluster_GetOrCreateLayer"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_MarkerCluster_AddToMap_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.map_MarkerCluster_AddToMap$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_MarkerCluster_AddToMap$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var map_MarkerCluster_GetOrCreateLayerVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.map_MarkerCluster_GetOrCreateLayerVar = map_MarkerCluster_GetOrCreateLayerVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:dZmUE3rlMEGgZho+aoG5rA:/ClientActionFlows.dZmUE3rlMEGgZho+aoG5rA:r0N8C9inCndO98ESdKtRxw", "Leaflet", "Map_MarkerCluster_AddToMap", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:vuGaCeO+v0OPFGyhLFVRGQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:BnQTJgJp7UyMqGV4TXY2rw", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:CgVJ5ZzyzU+bFBUbyPf4hg", callContext.id);
// Execute Action: Map_MarkerCluster_GetOrCreateLayer
map_MarkerCluster_GetOrCreateLayerVar.value = LeafletController.default.map_MarkerCluster_GetOrCreateLayer$Action(vars.value.mapIdInLocal, "", callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:vLrE7AZOpE2nWidVJjv6mw", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_MarkerCluster_AddToMap_JavaScript1JS, "JavaScript1", "Map_MarkerCluster_AddToMap", {
MarkerCluster: OS.DataConversion.JSNodeParamConverter.to(map_MarkerCluster_GetOrCreateLayerVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:KKNbYzPXgUCOJsx4LuYWvA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:dZmUE3rlMEGgZho+aoG5rA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_MarkerCluster_AddToMap$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.map_MarkerCluster_AddToMap$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_MarkerCluster_AddToMap$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_MarkerCluster_AddToMap.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Map.addLayer($parameters.MarkerCluster);
};
});

define("Leaflet.controller$Map_MarkerCluster_GetOrCreateLayer", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_MarkerCluster_GetOrCreateLayer.MarkerCluster_SetLayerJS", "Leaflet.controller$LL_MapObjectAttr_MarkerCluster_Layer"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_MarkerCluster_GetOrCreateLayer_MarkerCluster_SetLayerJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_MarkerCluster_GetOrCreateLayer$Action = function (mapIdIn, typeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_MarkerCluster_GetOrCreateLayer$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.typeInLocal = typeIn;
var markerCluster_SetLayerJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_MarkerCluster_GetOrCreateLayer$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.markerCluster_SetLayerJSResult = markerCluster_SetLayerJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:+AyQ6RoBPUytoLjjZmqy8Q:/ClientActionFlows.+AyQ6RoBPUytoLjjZmqy8Q:S+PonOGhY_rHY2t_oV1E6A", "Leaflet", "Map_MarkerCluster_GetOrCreateLayer", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:tHjbrPylv0uSm+oglwklNg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:3ssrI+ux1U6HChvgJhfQ4Q", callContext.id);
markerCluster_SetLayerJSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_MarkerCluster_GetOrCreateLayer_MarkerCluster_SetLayerJS, "MarkerCluster_SetLayer", "Map_MarkerCluster_GetOrCreateLayer", {
Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.typeInLocal, OS.DataTypes.DataTypes.Text),
LL_MapObjectAttr_MarkerCluster_Layer: OS.DataConversion.JSNodeParamConverter.to(OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObjectAttr_MarkerCluster_Layer$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OS.DataTypes.DataTypes.Text),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_MarkerCluster_GetOrCreateLayer$markerCluster_SetLayerJSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Po4DTnSTkkyv8S4E+ziVig", callContext.id);
// Object = MarkerCluster_SetLayer.Object
outVars.value.objectOut = markerCluster_SetLayerJSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:xtp7mz3iF0Kn0pxBJk3efw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:+AyQ6RoBPUytoLjjZmqy8Q", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_MarkerCluster_GetOrCreateLayer$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_MarkerCluster_GetOrCreateLayer$markerCluster_SetLayerJSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_MarkerCluster_GetOrCreateLayer$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_MarkerCluster_GetOrCreateLayer$Action = function (mapIdIn, typeIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
typeIn = (typeIn === undefined) ? "" : typeIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_MarkerCluster_GetOrCreateLayer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(typeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Leaflet.controller$Map_MarkerCluster_GetOrCreateLayer.MarkerCluster_SetLayerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const el = document.getElementById($parameters.MapId);
if (el) {
  const key = $parameters.Type ? ($parameters.LL_MapObjectAttr_MarkerCluster_Layer + '_' + $parameters.Type) : $parameters.LL_MapObjectAttr_MarkerCluster_Layer;
  if (!el[key]) {
    el[key] = new L.markerClusterGroup({
                                          chunkedLoading: true,
                                          maxClusterRadius: function (mapZoom) {
                                              if (mapZoom < 5) {
                                                  return 20;
                                              } else if (mapZoom < 10){
                                                  return 40;
                                              } else {
                                                  return 80;
                                              }
                                          },
                                      });
  }
  $parameters.Object = el[key];
}

};
});

define("Leaflet.controller$Map_MarkerCluster_UsingCluster_Check", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$GetFromObject_Bool", "Leaflet.controller$LL_MapAttr_IsUsingCluster"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.map_MarkerCluster_UsingCluster_Check$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_MarkerCluster_UsingCluster_Check$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getFromObject_BoolVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_MarkerCluster_UsingCluster_Check$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getFromObject_BoolVar = getFromObject_BoolVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:eSvK6E_Lh0qA4ZgHDoSTnQ:/ClientActionFlows.eSvK6E_Lh0qA4ZgHDoSTnQ:ECfU3xt5t_gAdgj1WTtsDA", "Leaflet", "Map_MarkerCluster_UsingCluster_Check", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:av1V+LO6nkikyvhB0BMhIQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Hfr8+UtEjUaYHP399KpATA", callContext.id);
// Execute Action: GetFromObject_Bool
getFromObject_BoolVar.value = LeafletController.default.getFromObject_Bool$Action(vars.value.mapIdInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapAttr_IsUsingCluster$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:+jKJYxOGGkqIHUanLoVteg", callContext.id);
// Value = GetFromObject_Bool.Bool
outVars.value.valueOut = getFromObject_BoolVar.value.boolOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:wFUs7BNnAEqyT5QCGGrAfw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:eSvK6E_Lh0qA4ZgHDoSTnQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_MarkerCluster_UsingCluster_Check$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_MarkerCluster_UsingCluster_Check$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
LeafletController.default.clientActionProxies.map_MarkerCluster_UsingCluster_Check$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_MarkerCluster_UsingCluster_Check$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataConversion.JSNodeParamConverter.to(actionResults.valueOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Leaflet.controller$Map_MarkerCluster_UsingCluster_Set", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$SetToObject_Bool", "Leaflet.controller$LL_MapAttr_IsUsingCluster"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.map_MarkerCluster_UsingCluster_Set$Action = function (mapIdIn, valueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_MarkerCluster_UsingCluster_Set$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.valueInLocal = valueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:uUW79gkfXUa0ZSN5goKqiw:/ClientActionFlows.uUW79gkfXUa0ZSN5goKqiw:HP5T0J8f327xXR4PdNhEEQ", "Leaflet", "Map_MarkerCluster_UsingCluster_Set", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:7KaiShT+OkS1PqzCMFTrag", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:eUdZ6sRlg0+uSz2L7C39QA", callContext.id);
// Execute Action: SetToObject_Bool
LeafletController.default.setToObject_Bool$Action(vars.value.mapIdInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapAttr_IsUsingCluster$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), vars.value.valueInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:PHToS6PEjEqdUoaXF1Lxkw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:uUW79gkfXUa0ZSN5goKqiw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_MarkerCluster_UsingCluster_Set$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
LeafletController.default.clientActionProxies.map_MarkerCluster_UsingCluster_Set$Action = function (mapIdIn, valueIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
valueIn = (valueIn === undefined) ? false : valueIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_MarkerCluster_UsingCluster_Set$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Leaflet.controller$Map_Markers_BulkAdd", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Markers_BulkAdd.BulkCreate_MarkersJS", "Leaflet.controller$Map_GetTooltipBindingCallback", "Leaflet.controller$Map_GetObject_FromId", "Leaflet.controller$Map_GetPopupBindingCallback", "Leaflet.controller$Map_Marker_GetRegistry", "Leaflet.model$MarkerWithWindowList"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Markers_BulkAdd_BulkCreate_MarkersJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Markers_BulkAdd$Action = function (mapIdIn, markersWithWindowIn, onClickFunctionIn, useTypeBasedClusteringIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Markers_BulkAdd$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.markersWithWindowInLocal = markersWithWindowIn.clone();
vars.value.onClickFunctionInLocal = onClickFunctionIn;
vars.value.useTypeBasedClusteringInLocal = useTypeBasedClusteringIn;
var map_GetTooltipBindingCallbackVar = new OS.DataTypes.VariableHolder();
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var map_GetPopupBindingCallbackVar = new OS.DataTypes.VariableHolder();
var map_Marker_GetRegistryVar = new OS.DataTypes.VariableHolder();
var jSONSerialize_MarkersVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetTooltipBindingCallbackVar = map_GetTooltipBindingCallbackVar;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.map_GetPopupBindingCallbackVar = map_GetPopupBindingCallbackVar;
varBag.map_Marker_GetRegistryVar = map_Marker_GetRegistryVar;
varBag.jSONSerialize_MarkersVar = jSONSerialize_MarkersVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:FainrT+8TE6srqbt0mL6PQ:/ClientActionFlows.FainrT+8TE6srqbt0mL6PQ:oYn_Qi+i53gxhnTKnj+uoA", "Leaflet", "Map_Markers_BulkAdd", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:L_24nqlUHkKSMDsXwbEUjA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:OhAhSNwihkSZ23wdd1wtEA", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:FqjupQuKJkGzqnl6NFvD9g", callContext.id);
// Execute Action: Map_Marker_GetRegistry
map_Marker_GetRegistryVar.value = LeafletController.default.map_Marker_GetRegistry$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:7pwsN8vTEUCkq_wZXqDeBg", callContext.id);
// Execute Action: Map_GetTooltipBindingCallback
map_GetTooltipBindingCallbackVar.value = LeafletController.default.map_GetTooltipBindingCallback$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:TEVzfn8uEE+pvXhXvBbJyg", callContext.id);
// Execute Action: Map_GetPopupBindingCallback
map_GetPopupBindingCallbackVar.value = LeafletController.default.map_GetPopupBindingCallback$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:seekXyteqki6BW_0zY3gqQ", callContext.id);
// JSON Serialize: JSONSerialize_Markers
jSONSerialize_MarkersVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.markersWithWindowInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:xb3hiO0vSkeAuLUxrfGtCw", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_Markers_BulkAdd_BulkCreate_MarkersJS, "BulkCreate_Markers", "Map_Markers_BulkAdd", {
UseTypeBasedClustering: OS.DataConversion.JSNodeParamConverter.to(vars.value.useTypeBasedClusteringInLocal, OS.DataTypes.DataTypes.Boolean),
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
TooltipCallback: OS.DataConversion.JSNodeParamConverter.to(map_GetTooltipBindingCallbackVar.value.callbackOut, OS.DataTypes.DataTypes.Object),
MarkerRegistry: OS.DataConversion.JSNodeParamConverter.to(map_Marker_GetRegistryVar.value.objectOut, OS.DataTypes.DataTypes.Object),
PopupCallback: OS.DataConversion.JSNodeParamConverter.to(map_GetPopupBindingCallbackVar.value.callbackOut, OS.DataTypes.DataTypes.Object),
OnClickFunction: OS.DataConversion.JSNodeParamConverter.to(vars.value.onClickFunctionInLocal, OS.DataTypes.DataTypes.Object),
MarkersJSON: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_MarkersVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:07KdsFgtBESuU0DiYW7+Xw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:FainrT+8TE6srqbt0mL6PQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Markers_BulkAdd$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarkersWithWindow",
attrName: "markersWithWindowInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new LeafletModel.MarkerWithWindowList();
},
complexType: LeafletModel.MarkerWithWindowList
}, {
name: "OnClickFunction",
attrName: "onClickFunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "UseTypeBasedClustering",
attrName: "useTypeBasedClusteringInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
LeafletController.default.clientActionProxies.map_Markers_BulkAdd$Action = function (mapIdIn, markersWithWindowIn, onClickFunctionIn, useTypeBasedClusteringIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
markersWithWindowIn = (markersWithWindowIn === undefined) ? new LeafletModel.MarkerWithWindowList() : markersWithWindowIn;
onClickFunctionIn = (onClickFunctionIn === undefined) ? null : onClickFunctionIn;
useTypeBasedClusteringIn = (useTypeBasedClusteringIn === undefined) ? false : useTypeBasedClusteringIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Markers_BulkAdd$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), markersWithWindowIn, OS.DataConversion.JSNodeParamConverter.from(onClickFunctionIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(useTypeBasedClusteringIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_Markers_BulkAdd.BulkCreate_MarkersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const markers = JSON.parse($parameters.MarkersJSON);
const clusterLayers = {};
const pendingClusterAdds = {};
console.log('[BulkAdd] start', { count: markers.length, hasMap: !!$parameters.Map, useClustering: $parameters.UseTypeBasedClustering, firstIcon: markers[0] && markers[0].Marker && markers[0].Marker.options && markers[0].Marker.options.icon });

for (const item of markers) {
  try {
    const marker = item.Marker || {};
    marker.options = marker.options || {};
    if (marker.options.icon && !marker.options.icon.isTextIcon && !marker.options.icon.iconUrl) {
        delete marker.options.icon;
    }
    if (!marker.Id) {
        marker.Id = crypto.randomUUID();
    }

    const isTextIconFlag = marker.options.icon && (marker.options.icon.isTextIcon === true || marker.options.icon.isTextIcon === "True" || marker.options.icon.isTextIcon === "true");
    if (isTextIconFlag) {
        marker.options.icon.iconUrl = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        marker.options.icon.className = marker.options.icon.className + " leaflet-text-icon";
        var textIconOptions = {
            className: 'leaflet-text-icon-wrapper',
            html: '<span class="' + marker.options.icon.className + '"></span>'
        };
        if (Array.isArray(marker.options.icon.iconSize) && marker.options.icon.iconSize.length === 2) {
            textIconOptions.iconSize = marker.options.icon.iconSize;
        }
        if (Array.isArray(marker.options.icon.iconAnchor) && marker.options.icon.iconAnchor.length === 2) {
            textIconOptions.iconAnchor = marker.options.icon.iconAnchor;
        }
        marker.options.icon = new L.DivIcon(textIconOptions);
    } else {
        if (marker.options.icon && marker.options.icon.iconUrl && marker.options.icon.iconUrl != "") {
            ['iconSize', 'iconAnchor', 'popupAnchor', 'tooltipAnchor', 'shadowSize', 'shadowAnchor'].forEach(function (key) {
                if (Array.isArray(marker.options.icon[key]) && marker.options.icon[key].length === 0) {
                    delete marker.options.icon[key];
                }
            });
            marker.options.icon = L.icon(marker.options.icon);
        }
    }

    if (marker.Type === "-1") {
        document.querySelectorAll('.ubt-map-marker-user-location').forEach(function (span) {
            var iconEl = span.closest('.leaflet-marker-icon');
            if (iconEl && iconEl.parentNode) { iconEl.parentNode.removeChild(iconEl); }
        });
    }

    marker.options.Id = marker.Id;
    marker.options.Type = marker.Type;
    marker.options.ExtraData = marker.ExtraData;

    const leafletMarker = L.marker(marker.latlng, marker.options);

    if ($parameters.Map) {
        const clusterType = $parameters.UseTypeBasedClustering ? marker.Type : "";
        const cacheKey = clusterType || "__default__";
        let clusterLayer = clusterLayers[cacheKey];
        if (clusterLayer === undefined) {
            const el = document.getElementById($parameters.MapId);
            if (el) {
                const key = clusterType ? ("ll_map_marker_cluster_layer_" + clusterType) : "ll_map_marker_cluster_layer";
                if (!el[key]) {
                    el[key] = new L.markerClusterGroup({
                        chunkedLoading: true,
                        maxClusterRadius: function (mapZoom) {
                            if (mapZoom < 5) { return 20; }
                            else if (mapZoom < 10) { return 40; }
                            else { return 80; }
                        },
                    });
                }
                clusterLayer = el[key];
            }
            clusterLayers[cacheKey] = clusterLayer;
            console.log('[BulkAdd] resolved cluster layer', { clusterType, cacheKey, resolved: !!clusterLayer });
        }
        if (clusterLayer && marker.Type !== "-1") {
            if (!pendingClusterAdds[cacheKey]) { pendingClusterAdds[cacheKey] = []; }
            pendingClusterAdds[cacheKey].push(leafletMarker);
        } else {
            leafletMarker.addTo($parameters.Map);
        }
    }

    $parameters.MarkerRegistry[marker.Id] = leafletMarker;

    if ($parameters.OnClickFunction) {
        leafletMarker.on({
            click: function (e) {
                $parameters.OnClickFunction(this.options.Id, this.options.Type, this.options.ExtraData, this._latlng.lat, this._latlng.lng, this);
            }
        });
    }

    if (item.Tooltip && item.Tooltip.content && item.Tooltip.content !== "") {
        let tooltipOptions = item.Tooltip.options || {};
        if (!Array.isArray(tooltipOptions.offset) || tooltipOptions.offset.length !== 2) {
            tooltipOptions.offset = [0, 0];
        }
        if ($parameters.TooltipCallback) {
            leafletMarker.bindTooltip(
                function () {
                    const result = $parameters.TooltipCallback(item);
                    if (result && result instanceof HTMLElement) {
                        return result;
                    }
                    return document.createTextNode('Invalid tooltip content');
                },
                tooltipOptions
            );
        } else {
            leafletMarker.bindTooltip(item.Tooltip.content, tooltipOptions);
        }
    }

    if (item.Popup && item.Popup.content && item.Popup.content !== "") {
        let popupOptions = item.Popup || {};
        if ($parameters.PopupCallback) {
            leafletMarker.bindPopup(
                function () {
                    const result = $parameters.PopupCallback(item);
                    if (result && result instanceof HTMLElement) {
                        return result;
                    }
                    return document.createTextNode('Invalid popup content');
                },
                popupOptions
            );
        } else {
            leafletMarker.bindPopup(item.Popup.content || "", popupOptions);
        }
    }
  } catch (e) {
    console.error('Map_Markers_BulkAdd: failed to add marker, skipping', item, e);
  }
}
for (const key in pendingClusterAdds) {
    const layer = clusterLayers[key];
    if (layer && pendingClusterAdds[key].length) {
        layer.addLayers(pendingClusterAdds[key]);
        pendingClusterAdds[key].forEach(function (m) { if (m.setOpacity) { m.setOpacity(1); } });
    }
}
console.log('[BulkAdd] done', { registrySize: Object.keys($parameters.MarkerRegistry).length, clusterLayerKeys: Object.keys(clusterLayers) });
};
});

define("Leaflet.controller$Map_Markers_BulkAddChunked", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Markers_BulkAddChunked.BulkCreate_Markers_ChunkedJS", "Leaflet.controller$Map_Marker_GetRegistry", "Leaflet.controller$Map_GetPopupBindingCallback", "Leaflet.controller$Map_GetTooltipBindingCallback", "Leaflet.controller$Map_GetObject_FromId", "Leaflet.model$MarkerWithWindowList"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Markers_BulkAddChunked_BulkCreate_Markers_ChunkedJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Markers_BulkAddChunked$Action = function (mapIdIn, markersWithWindowIn, onClickFunctionIn, useTypeBasedClusteringIn, priorityMinLatIn, priorityMaxLatIn, priorityMinLongIn, priorityMaxLongIn, useStopgapLayerIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Markers_BulkAddChunked$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.markersWithWindowInLocal = markersWithWindowIn.clone();
vars.value.onClickFunctionInLocal = onClickFunctionIn;
vars.value.useTypeBasedClusteringInLocal = useTypeBasedClusteringIn;
vars.value.priorityMinLatInLocal = priorityMinLatIn;
vars.value.priorityMaxLatInLocal = priorityMaxLatIn;
vars.value.priorityMinLongInLocal = priorityMinLongIn;
vars.value.priorityMaxLongInLocal = priorityMaxLongIn;
vars.value.useStopgapLayerInLocal = useStopgapLayerIn;
var map_Marker_GetRegistryVar = new OS.DataTypes.VariableHolder();
var map_GetPopupBindingCallbackVar = new OS.DataTypes.VariableHolder();
var map_GetTooltipBindingCallbackVar = new OS.DataTypes.VariableHolder();
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var jSONSerialize_MarkersVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_Marker_GetRegistryVar = map_Marker_GetRegistryVar;
varBag.map_GetPopupBindingCallbackVar = map_GetPopupBindingCallbackVar;
varBag.map_GetTooltipBindingCallbackVar = map_GetTooltipBindingCallbackVar;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.jSONSerialize_MarkersVar = jSONSerialize_MarkersVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:3Rw6e2CdOE+1gYCGYyLjGg:/ClientActionFlows.3Rw6e2CdOE+1gYCGYyLjGg:mfMyq1NoXALO4kfIBpS8sQ", "Leaflet", "Map_Markers_BulkAddChunked", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ZtevdVkrokKmvPwQh5QjnQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:x1JWnRA94EidcSAHLOLkxg", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:hEsXA_L1BkSAb5Gs98C6bw", callContext.id);
// Execute Action: Map_Marker_GetRegistry
map_Marker_GetRegistryVar.value = LeafletController.default.map_Marker_GetRegistry$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:cgAYcLX6qkOY7qRVo7qQow", callContext.id);
// Execute Action: Map_GetTooltipBindingCallback
map_GetTooltipBindingCallbackVar.value = LeafletController.default.map_GetTooltipBindingCallback$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:zUgrUrql_EamoWHFu2lmyw", callContext.id);
// Execute Action: Map_GetPopupBindingCallback
map_GetPopupBindingCallbackVar.value = LeafletController.default.map_GetPopupBindingCallback$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:fjVsLOopYEmk8nZXFuEXBg", callContext.id);
// JSON Serialize: JSONSerialize_Markers
jSONSerialize_MarkersVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.markersWithWindowInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:71r1DEEKy0yYFGXSTG7kZA", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_Markers_BulkAddChunked_BulkCreate_Markers_ChunkedJS, "BulkCreate_Markers_Chunked", "Map_Markers_BulkAddChunked", {
MarkerRegistry: OS.DataConversion.JSNodeParamConverter.to(map_Marker_GetRegistryVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
PriorityMinLong: OS.DataConversion.JSNodeParamConverter.to(vars.value.priorityMinLongInLocal, OS.DataTypes.DataTypes.Decimal),
TooltipCallback: OS.DataConversion.JSNodeParamConverter.to(map_GetTooltipBindingCallbackVar.value.callbackOut, OS.DataTypes.DataTypes.Object),
PopupCallback: OS.DataConversion.JSNodeParamConverter.to(map_GetPopupBindingCallbackVar.value.callbackOut, OS.DataTypes.DataTypes.Object),
PriorityMaxLat: OS.DataConversion.JSNodeParamConverter.to(vars.value.priorityMaxLatInLocal, OS.DataTypes.DataTypes.Decimal),
UseTypeBasedClustering: OS.DataConversion.JSNodeParamConverter.to(vars.value.useTypeBasedClusteringInLocal, OS.DataTypes.DataTypes.Boolean),
PriorityMaxLong: OS.DataConversion.JSNodeParamConverter.to(vars.value.priorityMaxLongInLocal, OS.DataTypes.DataTypes.Decimal),
UseStopgapLayer: OS.DataConversion.JSNodeParamConverter.to(vars.value.useStopgapLayerInLocal, OS.DataTypes.DataTypes.Boolean),
MarkersJSON: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_MarkersVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
PriorityMinLat: OS.DataConversion.JSNodeParamConverter.to(vars.value.priorityMinLatInLocal, OS.DataTypes.DataTypes.Decimal),
OnClickFunction: OS.DataConversion.JSNodeParamConverter.to(vars.value.onClickFunctionInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:mWuLa5Tix0Ceucii0WYLQQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:3Rw6e2CdOE+1gYCGYyLjGg", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Markers_BulkAddChunked$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarkersWithWindow",
attrName: "markersWithWindowInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new LeafletModel.MarkerWithWindowList();
},
complexType: LeafletModel.MarkerWithWindowList
}, {
name: "OnClickFunction",
attrName: "onClickFunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "UseTypeBasedClustering",
attrName: "useTypeBasedClusteringInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "PriorityMinLat",
attrName: "priorityMinLatInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}
}, {
name: "PriorityMaxLat",
attrName: "priorityMaxLatInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}
}, {
name: "PriorityMinLong",
attrName: "priorityMinLongInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}
}, {
name: "PriorityMaxLong",
attrName: "priorityMaxLongInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}
}, {
name: "UseStopgapLayer",
attrName: "useStopgapLayerInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
LeafletController.default.clientActionProxies.map_Markers_BulkAddChunked$Action = function (mapIdIn, markersWithWindowIn, onClickFunctionIn, useTypeBasedClusteringIn, priorityMinLatIn, priorityMaxLatIn, priorityMinLongIn, priorityMaxLongIn, useStopgapLayerIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
markersWithWindowIn = (markersWithWindowIn === undefined) ? new LeafletModel.MarkerWithWindowList() : markersWithWindowIn;
onClickFunctionIn = (onClickFunctionIn === undefined) ? null : onClickFunctionIn;
useTypeBasedClusteringIn = (useTypeBasedClusteringIn === undefined) ? false : useTypeBasedClusteringIn;
priorityMinLatIn = (priorityMinLatIn === undefined) ? 0 : priorityMinLatIn;
priorityMaxLatIn = (priorityMaxLatIn === undefined) ? 0 : priorityMaxLatIn;
priorityMinLongIn = (priorityMinLongIn === undefined) ? 0 : priorityMinLongIn;
priorityMaxLongIn = (priorityMaxLongIn === undefined) ? 0 : priorityMaxLongIn;
useStopgapLayerIn = (useStopgapLayerIn === undefined) ? false : useStopgapLayerIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Markers_BulkAddChunked$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), markersWithWindowIn, OS.DataConversion.JSNodeParamConverter.from(onClickFunctionIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(useTypeBasedClusteringIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(priorityMinLatIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(priorityMaxLatIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(priorityMinLongIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(priorityMaxLongIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(useStopgapLayerIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_Markers_BulkAddChunked.BulkCreate_Markers_ChunkedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const markers = JSON.parse($parameters.MarkersJSON);

const priMinLat = $parameters.PriorityMinLat;
const priMaxLat = $parameters.PriorityMaxLat;
const priMinLong = $parameters.PriorityMinLong;
const priMaxLong = $parameters.PriorityMaxLong;
const hasPriorityBounds = priMinLat !== 0 || priMaxLat !== 0 || priMinLong !== 0 || priMaxLong !== 0;
let firstChunkSize = 0;
if (hasPriorityBounds) {
    const isInsidePriorityBounds = function (item) {
        const latlng = item.Marker && item.Marker.latlng;
        if (!latlng || latlng.length < 2) { return false; }
        const lat = latlng[0];
        const lng = latlng[1];
        return lat >= priMinLat && lat <= priMaxLat && lng >= priMinLong && lng <= priMaxLong;
    };
    markers.sort(function (a, b) {
        return (isInsidePriorityBounds(a) ? 0 : 1) - (isInsidePriorityBounds(b) ? 0 : 1);
    });
    let inBoundsCount = 0;
    for (let i = 0; i < markers.length; i++) {
        if (isInsidePriorityBounds(markers[i])) { inBoundsCount++; } else { break; }
    }
    firstChunkSize = inBoundsCount;
}

const clusterLayers = {};
const iconCache = {};
function sharedMarkerClickHandler(e) {
    $parameters.OnClickFunction(this.options.Id, this.options.Type, this.options.ExtraData, this._latlng.lat, this._latlng.lng, this);
}
const CHUNK_SIZE = 500;
let index = 0;

function processChunk() {
    const pendingClusterAdds = {};
    const effectiveChunkSize = (index === 0 && firstChunkSize > CHUNK_SIZE) ? firstChunkSize : CHUNK_SIZE;
    const end = Math.min(index + effectiveChunkSize, markers.length);
    for (; index < end; index++) {
      const item = markers[index];
      try {
        const marker = item.Marker || {};
        marker.options = marker.options || {};
        if (!marker.Id) {
            marker.Id = crypto.randomUUID();
        }

        let resolvedIcon;
        const iconKey = marker.Type + "|" + (marker.options.icon ? (marker.options.icon.iconUrl || marker.options.icon.className || "") : "");
        if (iconCache.hasOwnProperty(iconKey)) {
            resolvedIcon = iconCache[iconKey];
        } else {
            resolvedIcon = null;
            const isTextIconFlag = marker.options.icon && (marker.options.icon.isTextIcon === true || marker.options.icon.isTextIcon === "True" || marker.options.icon.isTextIcon === "true");
            if (isTextIconFlag) {
                marker.options.icon.iconUrl = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                marker.options.icon.className = marker.options.icon.className + " leaflet-text-icon";
                var textIconOptions = {
                    className: 'leaflet-text-icon-wrapper',
                    html: '<span class="' + marker.options.icon.className + '"></span>'
                };
                if (Array.isArray(marker.options.icon.iconSize) && marker.options.icon.iconSize.length === 2) {
                    textIconOptions.iconSize = marker.options.icon.iconSize;
                }
                if (Array.isArray(marker.options.icon.iconAnchor) && marker.options.icon.iconAnchor.length === 2) {
                    textIconOptions.iconAnchor = marker.options.icon.iconAnchor;
                }
                resolvedIcon = new L.DivIcon(textIconOptions);
            } else if (marker.options.icon && marker.options.icon.iconUrl && marker.options.icon.iconUrl != "") {
                ['iconSize', 'iconAnchor', 'popupAnchor', 'tooltipAnchor', 'shadowSize', 'shadowAnchor'].forEach(function (key) {
                    if (Array.isArray(marker.options.icon[key]) && marker.options.icon[key].length === 0) {
                        delete marker.options.icon[key];
                    }
                });
                resolvedIcon = L.icon(marker.options.icon);
            }
            iconCache[iconKey] = resolvedIcon;
        }
        if (resolvedIcon) {
            marker.options.icon = resolvedIcon;
        } else {
            delete marker.options.icon;
        }

        if (marker.Type === "-1") {
            document.querySelectorAll('.ubt-map-marker-user-location').forEach(function (span) {
                var iconEl = span.closest('.leaflet-marker-icon');
                if (iconEl && iconEl.parentNode) { iconEl.parentNode.removeChild(iconEl); }
            });
        }

        marker.options.Id = marker.Id;
        marker.options.Type = marker.Type;
        marker.options.ExtraData = marker.ExtraData;

        const leafletMarker = L.marker(marker.latlng, marker.options);

        if ($parameters.Map) {
            const clusterType = $parameters.UseTypeBasedClustering ? marker.Type : "";
            const cacheKey = clusterType || "__default__";
            let clusterLayer = clusterLayers[cacheKey];
            if (clusterLayer === undefined) {
                const el = document.getElementById($parameters.MapId);
                if (el) {
                    const key = $parameters.UseStopgapLayer ? "ll_map_marker_cluster_layer_stopgap" : (clusterType ? ("ll_map_marker_cluster_layer_" + clusterType) : "ll_map_marker_cluster_layer");
                    if (!el[key]) {
                        el[key] = new L.markerClusterGroup({
                            chunkedLoading: true,
                            maxClusterRadius: function (mapZoom) {
                                if (mapZoom < 5) { return 20; }
                                else if (mapZoom < 10) { return 40; }
                                else { return 80; }
                            },
                        });
                        el[key].addTo($parameters.Map);
                    }
                    clusterLayer = el[key];
                }
                clusterLayers[cacheKey] = clusterLayer;
            }
            if (clusterLayer && marker.Type !== "-1") {
                if (!pendingClusterAdds[cacheKey]) { pendingClusterAdds[cacheKey] = []; }
                pendingClusterAdds[cacheKey].push(leafletMarker);
            } else {
                leafletMarker.addTo($parameters.Map);
            }
        }

        $parameters.MarkerRegistry[marker.Id] = leafletMarker;

        if ($parameters.OnClickFunction) {
            leafletMarker.on({ click: sharedMarkerClickHandler });
        }

        if (item.Tooltip && item.Tooltip.content && item.Tooltip.content !== "") {
            let tooltipOptions = item.Tooltip.options || {};
            if (!Array.isArray(tooltipOptions.offset) || tooltipOptions.offset.length !== 2) {
                tooltipOptions.offset = [0, 0];
            }
            if ($parameters.TooltipCallback) {
                leafletMarker.bindTooltip(
                    function () {
                        const result = $parameters.TooltipCallback(item);
                        if (result && result instanceof HTMLElement) {
                            return result;
                        }
                        return document.createTextNode('Invalid tooltip content');
                    },
                    tooltipOptions
                );
            } else {
                leafletMarker.bindTooltip(item.Tooltip.content, tooltipOptions);
            }
        }

        if (item.Popup && item.Popup.content && item.Popup.content !== "") {
            let popupOptions = item.Popup || {};
            if ($parameters.PopupCallback) {
                leafletMarker.bindPopup(
                    function () {
                        const result = $parameters.PopupCallback(item);
                        if (result && result instanceof HTMLElement) {
                            return result;
                        }
                        return document.createTextNode('Invalid popup content');
                    },
                    popupOptions
                );
            } else {
                leafletMarker.bindPopup(item.Popup.content || "", popupOptions);
            }
        }
      } catch (e) {
        console.error('Map_Markers_BulkAdd_Chunked: failed to add marker, skipping', item, e);
      }
    }

    for (const key in pendingClusterAdds) {
        const layer = clusterLayers[key];
        if (layer && pendingClusterAdds[key].length) {
            try {
                layer.addLayers(pendingClusterAdds[key]);
                pendingClusterAdds[key].forEach(function (m) { if (m.setOpacity) { m.setOpacity(1); } });
            } catch (e) {
                console.error('Map_Markers_BulkAdd_Chunked: failed to add layer batch, likely stale/removed layer', key, e);
            }
        }
    }

    if (index < markers.length) {
        setTimeout(processChunk, 0);
    } else {
    }
}

processChunk();
};
});

define("Leaflet.controller$Map_SetCurrentLocation", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_SetCurrentLocation.JavaScript1JS", "Leaflet.controller$Map_GetObject_FromId"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_SetCurrentLocation_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.map_SetCurrentLocation$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_SetCurrentLocation$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:agxFh6u1WkCIwQ5E1GuxXA:/ClientActionFlows.agxFh6u1WkCIwQ5E1GuxXA:5ir0MWXyeCwK5AjwuJL38w", "Leaflet", "Map_SetCurrentLocation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:VzF_NRZTjkONKtfTgEtzxw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Dx_gbQz9SUijp8wePyfR3w", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:cYZ6oGofDUyqbBUIaR+Gtw", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_SetCurrentLocation_JavaScript1JS, "JavaScript1", "Map_SetCurrentLocation", {
MapObject: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:kGKwB+FAyEK2tYagvejxNw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:agxFh6u1WkCIwQ5E1GuxXA", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_SetCurrentLocation$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.map_SetCurrentLocation$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_SetCurrentLocation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_SetCurrentLocation.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.MapObject) {
    $parameters.MapObject.locate({setView: true});
}
};
});

define("Leaflet.controller$Map_SetPopupBindingCallback", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$SetToObject_Object", "Leaflet.controller$LL_MapObject_Attr_PopupBindingCallback"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.map_SetPopupBindingCallback$Action = function (mapIdIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_SetPopupBindingCallback$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.callbackInLocal = callbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:W5qpgK2zqEOm3ez3vhkFNw:/ClientActionFlows.W5qpgK2zqEOm3ez3vhkFNw:Dk5wEg3xY1XBuv2ERW8mgg", "Leaflet", "Map_SetPopupBindingCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:eHIdtwErd0ugYtXjL9GdNg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:vx4tt4GcfUugUTw3qp7RsQ", callContext.id);
// Execute Action: SetToObject_Object
LeafletController.default.setToObject_Object$Action(vars.value.mapIdInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr_PopupBindingCallback$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), vars.value.callbackInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:XyIBQOn43k6t0PR7g98Fpw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:W5qpgK2zqEOm3ez3vhkFNw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_SetPopupBindingCallback$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
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
LeafletController.default.clientActionProxies.map_SetPopupBindingCallback$Action = function (mapIdIn, callbackIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_SetPopupBindingCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Leaflet.controller$Map_SetTileLayer", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_SetTileLayer.Set_TileLayerJS", "Leaflet.controller$Map_GetObject_FromId", "Leaflet.model$TileLayerRec"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_SetTileLayer_Set_TileLayerJS) {
var OS = OutSystems.Internal;
LeafletController.default.map_SetTileLayer$Action = function (tileLayerIn, mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_SetTileLayer$vars"))());
vars.value.tileLayerInLocal = tileLayerIn.clone();
vars.value.mapIdInLocal = mapIdIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var jSONSerialize_TileLayerVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.jSONSerialize_TileLayerVar = jSONSerialize_TileLayerVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:W26xfI2_VEWKCb1w25NrAw:/ClientActionFlows.W26xfI2_VEWKCb1w25NrAw:l2O54tva+dpUgLwS1o5VsA", "Leaflet", "Map_SetTileLayer", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:R8oCrseqG0mWrJ6ID7rDQg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:QAIs4YS_m0+SM49TW6ls2Q", callContext.id);
// JSON Serialize: JSONSerialize_TileLayer
jSONSerialize_TileLayerVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.tileLayerInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:7Yym4alLbEy7a9sayI83lA", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:LbOVEFw8FUGAnseR3ozuUw", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_SetTileLayer_Set_TileLayerJS, "Set_TileLayer", "Map_SetTileLayer", {
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
TileLayer_Json: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_TileLayerVar.value.jSONOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:PLRFBp8vVkCROKTyjZ4WuA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:W26xfI2_VEWKCb1w25NrAw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_SetTileLayer$vars", [{
name: "TileLayer",
attrName: "tileLayerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new LeafletModel.TileLayerRec();
},
complexType: LeafletModel.TileLayerRec
}, {
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.clientActionProxies.map_SetTileLayer$Action = function (tileLayerIn, mapIdIn) {
tileLayerIn = (tileLayerIn === undefined) ? new LeafletModel.TileLayerRec() : tileLayerIn;
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_SetTileLayer$Action.bind(controller, tileLayerIn, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_SetTileLayer.Set_TileLayerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Map) {
let tileLayer = JSON.parse($parameters.TileLayer_Json);
if (!tileLayer.options) { tileLayer.options = {}; }
tileLayer.options.minNativeZoom = 2;
if (!L.TileLayer.WithParentFallback) {
    L.TileLayer.WithParentFallback = L.TileLayer.extend({
        createTile: function (coords, done) {
            var tileSize = this.getTileSize();
            var tile = document.createElement('div');
            tile.style.position = 'absolute';
            tile.style.width = tileSize.x + 'px';
            tile.style.height = tileSize.y + 'px';

            try {
                var parentZ = coords.z - 1;
                if (parentZ >= this.options.minZoom) {
                    var parentX = Math.floor(coords.x / 2);
                    var parentY = Math.floor(coords.y / 2);
                    var quadX = ((coords.x % 2) + 2) % 2;
                    var quadY = ((coords.y % 2) + 2) % 2;
                    var parentData = { r: L.Browser.retina ? '@2x' : '', s: this._getSubdomain({ x: parentX, y: parentY }), x: parentX, y: parentY, z: parentZ };
                    var parentUrl = L.Util.template(this._url, L.extend({}, parentData, this.options));
                    tile.style.backgroundImage = 'url(' + parentUrl + ')';
                    tile.style.backgroundSize = '200% 200%';
                    tile.style.backgroundPosition = (quadX * 100) + '% ' + (quadY * 100) + '%';
                }
            } catch (parentFallbackError) {
                console.warn('Parent tile fallback failed, continuing without preview:', parentFallbackError);
            }

            var img = document.createElement('img');
            img.style.position = 'absolute';
            img.style.top = '0';
            img.style.left = '0';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.2s';
            img.onload = function () {
                img.style.opacity = '1';
                done(null, tile);
            };
            img.onerror = function (e) {
                done(e, tile);
            };
            img.src = this.getTileUrl(coords);
            tile.appendChild(img);

            return tile;
        }
    });
}
if (tileLayer.options && tileLayer.options.EnableParentTileFallback) {
    new L.TileLayer.WithParentFallback(tileLayer.url, tileLayer.options).addTo($parameters.Map);
} else {
    L.tileLayer(tileLayer.url, tileLayer.options).addTo($parameters.Map);
}
}
};
});

define("Leaflet.controller$Map_SetTooltipBindingCallback", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$SetToObject_Object", "Leaflet.controller$LL_MapObject_Attr_TooltipBindingCallback"], function (exports, OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;
LeafletController.default.map_SetTooltipBindingCallback$Action = function (mapIdIn, callbackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_SetTooltipBindingCallback$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.callbackInLocal = callbackIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:iH+VJ9olOEmcnWoHKyKhZg:/ClientActionFlows.iH+VJ9olOEmcnWoHKyKhZg:9wuOR0phV2sf2FwgfHx0UA", "Leaflet", "Map_SetTooltipBindingCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:SSMggIf5mEGNRGpH6Hd79Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:JgCyMxz88ESeyki4S+PDkA", callContext.id);
// Execute Action: SetToObject_Object
LeafletController.default.setToObject_Object$Action(vars.value.mapIdInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr_TooltipBindingCallback$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), vars.value.callbackInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:NEAdGK7JJ0WPYE6E+LWSvQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:iH+VJ9olOEmcnWoHKyKhZg", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_SetTooltipBindingCallback$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
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
LeafletController.default.clientActionProxies.map_SetTooltipBindingCallback$Action = function (mapIdIn, callbackIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_SetTooltipBindingCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Leaflet.controller$Map_SetView", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_SetView.JavaScript1JS", "Leaflet.controller$Map_GetObject_FromId"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_SetView_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.map_SetView$Action = function (mapIdIn, latitudeIn, longitudeIn, zoomLevelIn, isAnimateIn, durationIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_SetView$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.latitudeInLocal = latitudeIn;
vars.value.longitudeInLocal = longitudeIn;
vars.value.zoomLevelInLocal = zoomLevelIn;
vars.value.isAnimateInLocal = isAnimateIn;
vars.value.durationInLocal = durationIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:qsbczGuCyk+v8RltiB95ww:/ClientActionFlows.qsbczGuCyk+v8RltiB95ww:exqa4jCn8ZkPT654EsGPLQ", "Leaflet", "Map_SetView", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:3s5yw99U9Ui+EjttUbV15g", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:0iLu9sCxH0CNDFweBAjV6g", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:LkLGJfbOv0+Jx0f0qd_0GA", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_SetView_JavaScript1JS, "JavaScript1", "Map_SetView", {
ZoomLevel: OS.DataConversion.JSNodeParamConverter.to(vars.value.zoomLevelInLocal, OS.DataTypes.DataTypes.Integer),
Duration: OS.DataConversion.JSNodeParamConverter.to(vars.value.durationInLocal, OS.DataTypes.DataTypes.Decimal),
Longitude: OS.DataConversion.JSNodeParamConverter.to(vars.value.longitudeInLocal, OS.DataTypes.DataTypes.Decimal),
isAnimate: OS.DataConversion.JSNodeParamConverter.to(vars.value.isAnimateInLocal, OS.DataTypes.DataTypes.Boolean),
MapObject: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Latitude: OS.DataConversion.JSNodeParamConverter.to(vars.value.latitudeInLocal, OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:2eSOr5No90Sv8ZsAlDE6JA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:qsbczGuCyk+v8RltiB95ww", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_SetView$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Latitude",
attrName: "latitudeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Longitude",
attrName: "longitudeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "ZoomLevel",
attrName: "zoomLevelInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "isAnimate",
attrName: "isAnimateInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "Duration",
attrName: "durationInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return (new OS.DataTypes.Decimal("0.25"));
}
}]);
LeafletController.default.clientActionProxies.map_SetView$Action = function (mapIdIn, latitudeIn, longitudeIn, zoomLevelIn, isAnimateIn, durationIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
latitudeIn = (latitudeIn === undefined) ? OS.DataTypes.Decimal.defaultValue : latitudeIn;
longitudeIn = (longitudeIn === undefined) ? OS.DataTypes.Decimal.defaultValue : longitudeIn;
zoomLevelIn = (zoomLevelIn === undefined) ? 0 : zoomLevelIn;
isAnimateIn = (isAnimateIn === undefined) ? true : isAnimateIn;
durationIn = (durationIn === undefined) ? (new OS.DataTypes.Decimal("0.25")) : durationIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_SetView$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(latitudeIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(longitudeIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(zoomLevelIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(isAnimateIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(durationIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_SetView.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.MapObject.setView(new L.LatLng($parameters.Latitude, $parameters.Longitude), $parameters.ZoomLevel, { animation: $parameters.isAnimate, duration: $parameters.Duration });     
};
});

define("Leaflet.controller$Map_Zoom_Control", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Zoom_Control.JavaScript1JS", "Leaflet.controller$Map_GetObject_FromId", "Leaflet.controller$LL_MapObjectAttr_ZoomControl", "Leaflet.model$ZoomControlOptionsRec"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Zoom_Control_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Zoom_Control$Action = function (zoomControlOptionsIn, mapIdIn, onLocationClickedFunctionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Zoom_Control$vars"))());
vars.value.zoomControlOptionsInLocal = zoomControlOptionsIn.clone();
vars.value.mapIdInLocal = mapIdIn;
vars.value.onLocationClickedFunctionInLocal = onLocationClickedFunctionIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.jSONSerialize1Var = jSONSerialize1Var;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:xvYO8_Asck6ns0UxbSPCiw:/ClientActionFlows.xvYO8_Asck6ns0UxbSPCiw:DW1NDA7F3HGI8Tny_sSOSQ", "Leaflet", "Map_Zoom_Control", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Vly6CnLLP0WjsiK+PiBjPg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:kHAWiG1SOUqtA2vL4YeUww", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:PTVZz67jqkWnVLf6yTChbQ", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.zoomControlOptionsInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:idn449u8k0ik_YHxIsEa+A", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_Map_Zoom_Control_JavaScript1JS, "JavaScript1", "Map_Zoom_Control", {
LL_MapObjectAttr_ZoomControl: OS.DataConversion.JSNodeParamConverter.to(OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObjectAttr_ZoomControl$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OS.DataTypes.DataTypes.Text),
OptionsJSON: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
OnLocationClickedFunction: OS.DataConversion.JSNodeParamConverter.to(vars.value.onLocationClickedFunctionInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:hIe5scOnG0GX6KGp0p7IVw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:xvYO8_Asck6ns0UxbSPCiw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Zoom_Control$vars", [{
name: "ZoomControlOptions",
attrName: "zoomControlOptionsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new LeafletModel.ZoomControlOptionsRec();
},
complexType: LeafletModel.ZoomControlOptionsRec
}, {
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "OnLocationClickedFunction",
attrName: "onLocationClickedFunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.map_Zoom_Control$Action = function (zoomControlOptionsIn, mapIdIn, onLocationClickedFunctionIn) {
zoomControlOptionsIn = (zoomControlOptionsIn === undefined) ? new LeafletModel.ZoomControlOptionsRec() : zoomControlOptionsIn;
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
onLocationClickedFunctionIn = (onLocationClickedFunctionIn === undefined) ? null : onLocationClickedFunctionIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Zoom_Control$Action.bind(controller, zoomControlOptionsIn, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(onLocationClickedFunctionIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$Map_Zoom_Control.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Map) {
    if($parameters.Map.zoomControl) {
        //Remove default zoom control
        $parameters.Map.removeControl($parameters.Map.zoomControl)
    }
    if($parameters.Map[$parameters.LL_MapObjectAttr_ZoomControl]) {
        $parameters.Map.removeControl($parameters.Map[$parameters.LL_MapObjectAttr_ZoomControl])
    }
    const options = JSON.parse($parameters.OptionsJSON);

    const ZoomCustomControl = L.Control.Zoom.extend({
        onAdd: function (map) {
            // Get the existing zoom control container
            const container = L.Control.Zoom.prototype.onAdd.call(this, map);
            container.classList.add("leaflet-custom-controls");

            if(options.zoomInClass != "") {
                const zoomIn = container.getElementsByClassName('leaflet-control-zoom-in');
                if(zoomIn && zoomIn.length>0) {
                    zoomIn[0].classList.add(...options.zoomInClass.split(" "))
                }
            }

            if(options.zoomOutClass != "") {
                const zoomOut = container.getElementsByClassName('leaflet-control-zoom-out');
                if(zoomOut && zoomOut.length>0) {
                    zoomOut[0].classList.add(...options.zoomOutClass.split(" "))
                }
            }

            if(options.isAddGoToMyLocationButton) {
                // Create custom button
                const locateBtn = L.DomUtil.create('a', '', container);
                locateBtn.classList.add("leaflet-custom-location-btn");
                if(options.MyLocationButtonClass != "") {
                    locateBtn.classList.add(...options.MyLocationButtonClass.split(" "));
                }
                locateBtn.innerHTML = options.MyLocationButtonText;
                locateBtn.href = '#';
                locateBtn.title = options.MyLocationButtonTitle;

                L.DomEvent.on(locateBtn, 'click', (e) => {
                    e.preventDefault();
                    $parameters.OnLocationClickedFunction()
                });
            }
            return container;
        }
    });

    const control =  new ZoomCustomControl(options);
    $parameters.Map[$parameters.LL_MapObjectAttr_ZoomControl] = control
    $parameters.Map.addControl(control);

}

};
});

define("Leaflet.controller$Map_Zoom_GetLevel", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$Map_Zoom_GetLevel.JavaScript1JS", "Leaflet.controller$Map_GetObject_FromId"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_Map_Zoom_GetLevel_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.map_Zoom_GetLevel$Action = function (mapIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Zoom_GetLevel$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var map_GetObject_FromIdVar = new OS.DataTypes.VariableHolder();
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Map_Zoom_GetLevel$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.map_GetObject_FromIdVar = map_GetObject_FromIdVar;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:yQJQjsqtB0CwC_45SwMHAQ:/ClientActionFlows.yQJQjsqtB0CwC_45SwMHAQ:rtEyRltLdW9rzRdTUvTa+Q", "Leaflet", "Map_Zoom_GetLevel", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:wjmYMCtTZkKz+c0sBGS8Ag", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:k6UEhpzFLUeq3QDqM_C8TA", callContext.id);
// Execute Action: Map_GetObject_FromId
map_GetObject_FromIdVar.value = LeafletController.default.map_GetObject_FromId$Action(vars.value.mapIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:St7Igof_HkSYkCtId+TzSA", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(Leaflet_controller_Map_Zoom_GetLevel_JavaScript1JS, "JavaScript1", "Map_Zoom_GetLevel", {
Map: OS.DataConversion.JSNodeParamConverter.to(map_GetObject_FromIdVar.value.objectOut, OS.DataTypes.DataTypes.Object),
ZoomInteger: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Map_Zoom_GetLevel$javaScript1JSResult"))();
jsNodeResult.zoomIntegerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ZoomInteger, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:SqdyQigi9UGIKGpZzlEqaw", callContext.id);
// ZoomLevel = JavaScript1.ZoomInteger
outVars.value.zoomLevelOut = javaScript1JSResult.value.zoomIntegerOut;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:70CpqCrX5UCy5waGu8tcsQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:yQJQjsqtB0CwC_45SwMHAQ", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Zoom_GetLevel$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Zoom_GetLevel$javaScript1JSResult", [{
name: "ZoomInteger",
attrName: "zoomIntegerOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
LeafletController.default.constructor.registerVariableGroupType("Leaflet.Map_Zoom_GetLevel$outVars", [{
name: "ZoomLevel",
attrName: "zoomLevelOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
LeafletController.default.clientActionProxies.map_Zoom_GetLevel$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(LeafletController.default.map_Zoom_GetLevel$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ZoomLevel: OS.DataConversion.JSNodeParamConverter.to(actionResults.zoomLevelOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});
define("Leaflet.controller$Map_Zoom_GetLevel.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Map) {
    $parameters.ZoomInteger = $parameters.Map.getZoom();
}
};
});

define("Leaflet.controller$SetToObject_Bool", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$SetToObject_Bool.JavaScript1JS"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_SetToObject_Bool_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.setToObject_Bool$Action = function (mainObjectIdIn, newObjectKeyIn, newBooleanIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.SetToObject_Bool$vars"))());
vars.value.mainObjectIdInLocal = mainObjectIdIn;
vars.value.newObjectKeyInLocal = newObjectKeyIn;
vars.value.newBooleanInLocal = newBooleanIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:R4wgDg2D00WcBVEXuxqm9w:/ClientActionFlows.R4wgDg2D00WcBVEXuxqm9w:_RdzZHxhF5NIdtZn8XpEww", "Leaflet", "SetToObject_Bool", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:HF_cTZdca0CGwJcUgqoMAw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:BhQ4KH4kVEiQjRhX3VaXJA", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_SetToObject_Bool_JavaScript1JS, "JavaScript1", "SetToObject_Bool", {
MainObjectId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mainObjectIdInLocal, OS.DataTypes.DataTypes.Text),
NewValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.newBooleanInLocal, OS.DataTypes.DataTypes.Boolean),
Key: OS.DataConversion.JSNodeParamConverter.to(vars.value.newObjectKeyInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:qN1JJpY1YEW+3bSp0YS_uA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:R4wgDg2D00WcBVEXuxqm9w", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.SetToObject_Bool$vars", [{
name: "MainObjectId",
attrName: "mainObjectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewObjectKey",
attrName: "newObjectKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewBoolean",
attrName: "newBooleanInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
LeafletController.default.clientActionProxies.setToObject_Bool$Action = function (mainObjectIdIn, newObjectKeyIn, newBooleanIn) {
mainObjectIdIn = (mainObjectIdIn === undefined) ? "" : mainObjectIdIn;
newObjectKeyIn = (newObjectKeyIn === undefined) ? "" : newObjectKeyIn;
newBooleanIn = (newBooleanIn === undefined) ? false : newBooleanIn;
return controller.executeActionInsideJSNode(LeafletController.default.setToObject_Bool$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mainObjectIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newObjectKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newBooleanIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$SetToObject_Bool.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const el = document.getElementById($parameters.MainObjectId);
if (el) {
  el[$parameters.Key] = $parameters.NewValue;
}
};
});

define("Leaflet.controller$SetToObject_Object", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.controller$SetToObject_Object.JavaScript1JS"], function (exports, OutSystems, LeafletModel, LeafletController, Leaflet_controller_SetToObject_Object_JavaScript1JS) {
var OS = OutSystems.Internal;
LeafletController.default.setToObject_Object$Action = function (mainObjectIdIn, newObjectKeyIn, newObjectIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.SetToObject_Object$vars"))());
vars.value.mainObjectIdInLocal = mainObjectIdIn;
vars.value.newObjectKeyInLocal = newObjectKeyIn;
vars.value.newObjectInLocal = newObjectIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:nZK7EOhrWU2cy5hbLat9hw:/ClientActionFlows.nZK7EOhrWU2cy5hbLat9hw:NQ9Ybp0Sjuiiq+16imVGVQ", "Leaflet", "SetToObject_Object", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:8ernrbemAkWOAWRDK0njeQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:EsHlqwop5UunPaKL91bp0Q", callContext.id);
controller.safeExecuteJSNode(Leaflet_controller_SetToObject_Object_JavaScript1JS, "JavaScript1", "SetToObject_Object", {
Key: OS.DataConversion.JSNodeParamConverter.to(vars.value.newObjectKeyInLocal, OS.DataTypes.DataTypes.Text),
NewObject: OS.DataConversion.JSNodeParamConverter.to(vars.value.newObjectInLocal, OS.DataTypes.DataTypes.Object),
MainObjectId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mainObjectIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Y_JEkbX13Um5oMzm8jLM7w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:nZK7EOhrWU2cy5hbLat9hw", callContext.id);
}

};
var controller = LeafletController.default;
LeafletController.default.constructor.registerVariableGroupType("Leaflet.SetToObject_Object$vars", [{
name: "MainObjectId",
attrName: "mainObjectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewObjectKey",
attrName: "newObjectKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewObject",
attrName: "newObjectInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
LeafletController.default.clientActionProxies.setToObject_Object$Action = function (mainObjectIdIn, newObjectKeyIn, newObjectIn) {
mainObjectIdIn = (mainObjectIdIn === undefined) ? "" : mainObjectIdIn;
newObjectKeyIn = (newObjectKeyIn === undefined) ? "" : newObjectKeyIn;
newObjectIn = (newObjectIn === undefined) ? null : newObjectIn;
return controller.executeActionInsideJSNode(LeafletController.default.setToObject_Object$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mainObjectIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newObjectKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newObjectIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Leaflet.controller$SetToObject_Object.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const el = document.getElementById($parameters.MainObjectId);
if (el) {
  el[$parameters.Key] = $parameters.NewObject;
}
};
});

define("Leaflet.controller", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller$debugger"], function (exports, OutSystems, LeafletModel, Leaflet_Controller_debugger) {
var OS = OutSystems.Internal;
var LeafletController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return LeafletController.default.defaultTimeout;
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
LeafletController.default = new Controller(null, "Leaflet");
});
define("Leaflet.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"7d3dNQCU_0KM59UWolcdLg": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"i5tXIgaPtkGwYtTt9V6QmQ": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IToUalpDVECRxHvm9+sdFg": {
getter: function (varBag, idService) {
return varBag.vars.value.geoJSONIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"023AqBlesU6WEQAPzMfrSA": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"2jLKEYhW5UyjBF+Y+pVkCw": {
getter: function (varBag, idService) {
return varBag.map_GeoJSON_GetRegistryVar.value;
}
},
"weM7HNwVGU2fd8keqr1keQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"qM3qv1TjB0yRZ8Kwrr5xDg": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QEd6sUQjpUWyJRYsKSSvCA": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"YE4bv7gNa0qSgJ+7gzQScA": {
getter: function (varBag, idService) {
return varBag.getFromObject_ArrayVar.value;
}
},
"XKTwWwMUwkinViNAz5wNYg": {
getter: function (varBag, idService) {
return varBag.vars.value.geoJSON_FeatureInLocal;
}
},
"ijU_a5AF6ku+BhUWwSvQtw": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bcQp7Obu9kauHCUK1G36eA": {
getter: function (varBag, idService) {
return varBag.vars.value.onClickFunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"MAEooBxgYkqc356JOtID1Q": {
getter: function (varBag, idService) {
return varBag.generateGUIDVar.value;
}
},
"klOnq2kPPUmNhngDjTQGvw": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"VdeJ1kHdC0ayfA1owPRNvg": {
getter: function (varBag, idService) {
return varBag.map_GeoJSON_GetLayerVar.value;
}
},
"azYu_sDmOUOuY8lMz0GxJQ": {
getter: function (varBag, idService) {
return varBag.map_GeoJSON_GetRegistryVar.value;
}
},
"VtPqQThqOEmMhwL2v7st2g": {
getter: function (varBag, idService) {
return varBag.crete_FeatureJSResult.value;
}
},
"8IARhYZLXUCMQcOsO2LJWQ": {
getter: function (varBag, idService) {
return varBag.vars.value.mainObjectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2l42rgkQ70G5Qocd_fB7Fg": {
getter: function (varBag, idService) {
return varBag.vars.value.newObjectKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ODL4qSO98UytmY5b0a4y4A": {
getter: function (varBag, idService) {
return varBag.vars.value.newBooleanInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BhQ4KH4kVEiQjRhX3VaXJA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"l7nvl2V8L0GDvIJBGXyMFw": {
getter: function (varBag, idService) {
return varBag.vars.value.mainObjectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EB8W_QzysEuLWs4NNAgORQ": {
getter: function (varBag, idService) {
return varBag.vars.value.newObjectKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"f5V_f+1oF0a5X4JMtIkXyA": {
getter: function (varBag, idService) {
return varBag.vars.value.newObjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"EsHlqwop5UunPaKL91bp0Q": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"V2Z+A+BlwkCbPry4YzFmfw": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BnQTJgJp7UyMqGV4TXY2rw": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"CgVJ5ZzyzU+bFBUbyPf4hg": {
getter: function (varBag, idService) {
return varBag.map_MarkerCluster_GetOrCreateLayerVar.value;
}
},
"vLrE7AZOpE2nWidVJjv6mw": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"tfurpVnG50WURNoNNgeNbg": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gaF+q4AVCkqrXsAOG+3nQA": {
getter: function (varBag, idService) {
return varBag.outVars.value.functionOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"RJPgTkwCFk66LgHr+FpfhQ": {
getter: function (varBag, idService) {
return varBag.getFromObject_ObjectVar.value;
}
},
"c1wQe8L+RES2mSx9il6CfA": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BY_cbwQNIkCSjMUpSJPKUg": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"hve9VzymI0yQWnth2q1kRQ": {
getter: function (varBag, idService) {
return varBag.getObjectJSResult.value;
}
},
"JYc3w7gwDkqi1Nr7iAt_Dg": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wQNLZrg5YkSz1UaaM1NPkA": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"YorcO6xFLUGehtCuP+wfKg": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"Km3tQcuYzkCFHVywToTDsw": {
getter: function (varBag, idService) {
return varBag.geoJSONSetLayerJSResult.value;
}
},
"tyDgPuxc9k+gCkUzFMtjhA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5nDnMdco7kSKr+tCGPJPiw": {
getter: function (varBag, idService) {
return varBag.vars.value.geoJSONIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vvf0ZRAcYUWqMrXJZUA4RA": {
getter: function (varBag, idService) {
return varBag.map_GeoJSON_GetByIdVar.value;
}
},
"tJTi85PxAE+11N7mGIcF4g": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"CQq4esUapUqshpVs2taUBw": {
getter: function (varBag, idService) {
return varBag.fitBoundsToFeatureJSResult.value;
}
},
"3_QyA4n9E0+7fmSwWULjEw": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"v4r1ePweCUK3o+KO4nId5w": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"3xKQnd7wQUaEDxBkGws2Ag": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"X_fCQ3pKjEieZX0r0H3AMg": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"V4NZEJX6k02kdrmYBl3s1Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.callbackOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"gxnKUyv9D0aVnx9ce7lVJQ": {
getter: function (varBag, idService) {
return varBag.getFromObject_ObjectVar.value;
}
},
"QuebzKG8O0SFE209VOq_eg": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AMzG9nS7CkuzRkdePRLDVQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.callbackOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"XoM7kqTgIkK8xugXuP98yA": {
getter: function (varBag, idService) {
return varBag.getFromObject_ObjectVar.value;
}
},
"HwUtKt6xO0WfwHAisOgRhA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fE6S64I5Y0y1e3IeWmlZXg": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DWRUGfphVE+AxsWcu5otWg": {
getter: function (varBag, idService) {
return varBag.vars.value.visibleInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"XeMXardyOkaqJjV3kGYzUQ": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"PF3jlV02_EqimEqBYpvxZw": {
getter: function (varBag, idService) {
return varBag.map_MarkerCluster_GetOrCreateLayerVar.value;
}
},
"icPP7h7cUU+RSXSnwdZ71w": {
getter: function (varBag, idService) {
return varBag.toggleLayerJSResult.value;
}
},
"zuIkwDfmLkCAilaTCdZf7g": {
getter: function (varBag, idService) {
return varBag.vars.value.mainObjectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BH5IQcdg1E6OLCgu5RYQrQ": {
getter: function (varBag, idService) {
return varBag.vars.value.arrayKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Af_b6PoZUEmyyW47QtNGPg": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"vw2b9oNqfEmeESpCqCC8yQ": {
getter: function (varBag, idService) {
return varBag.getObjectJSResult.value;
}
},
"e0bE3PxAyEe9usEARlDPZw": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0ZE9+Kle20aLAQuTA1jFIA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"deFcbqIH5UKQPeJ+Ge6qGA": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"w_UBlMb4s0mllaen_RHLpA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"VAoJVq2+kkewOcn+STarBA": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"duPTxeA46EGPkLTLzSsquw": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"85xnJZS720aMkxmlflhMIA": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_3eG0QnlMkeviqpac0RuEA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vIB2KB+P2kK1aCkGnWrR0Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.mapVisibleBoundariesOut;
}
},
"g6NtEA+nhEeXggoTMTCFBA": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"PrtzUwd56US6kval6pIkXA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"VYpv6BKDjkGYcD4ljEfAvw": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"M1ge40Du7kyoyM9NF0Z9HA": {
getter: function (varBag, idService) {
return varBag.vars.value.markersWithWindowInLocal;
}
},
"DVf1hgTKFUuI04v0sJUMOQ": {
getter: function (varBag, idService) {
return varBag.vars.value.onClickFunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"hM2bdfu820i1QFb7e_NSHA": {
getter: function (varBag, idService) {
return varBag.vars.value.useTypeBasedClusteringInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"i8GhaMdaDEWZ82AzZrnbbw": {
getter: function (varBag, idService) {
return varBag.vars.value.priorityMinLatInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"pDgm0PbUZEilmVXbgNh4XA": {
getter: function (varBag, idService) {
return varBag.vars.value.priorityMaxLatInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"2ZHbk17cdUGKO1sIjnbeGg": {
getter: function (varBag, idService) {
return varBag.vars.value.priorityMinLongInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"JfQ+DtrA_Ey1p3zpItTTyg": {
getter: function (varBag, idService) {
return varBag.vars.value.priorityMaxLongInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"bjAXhQBQx02A3w1mKrWdrg": {
getter: function (varBag, idService) {
return varBag.vars.value.useStopgapLayerInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"hEsXA_L1BkSAb5Gs98C6bw": {
getter: function (varBag, idService) {
return varBag.map_Marker_GetRegistryVar.value;
}
},
"zUgrUrql_EamoWHFu2lmyw": {
getter: function (varBag, idService) {
return varBag.map_GetPopupBindingCallbackVar.value;
}
},
"cgAYcLX6qkOY7qRVo7qQow": {
getter: function (varBag, idService) {
return varBag.map_GetTooltipBindingCallbackVar.value;
}
},
"x1JWnRA94EidcSAHLOLkxg": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"fjVsLOopYEmk8nZXFuEXBg": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_MarkersVar.value;
}
},
"71r1DEEKy0yYFGXSTG7kZA": {
getter: function (varBag, idService) {
return varBag.bulkCreate_Markers_ChunkedJSResult.value;
}
},
"6M_7+fWv3UiMq32xrgSiIw": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Zwh6VZvgpUKBVGnVq416DA": {
getter: function (varBag, idService) {
return varBag.vars.value.tileLayerInLocal;
}
},
"Tak5RLf72UCgIFxGqp4JLg": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7Yym4alLbEy7a9sayI83lA": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"QAIs4YS_m0+SM49TW6ls2Q": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_TileLayerVar.value;
}
},
"LbOVEFw8FUGAnseR3ozuUw": {
getter: function (varBag, idService) {
return varBag.set_TileLayerJSResult.value;
}
},
"s7zH68kVJ06hpnWn6D1Ujw": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GHEBwdFrTk2l0bEXHNn2Ig": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"ohdgyOo860qfbGqL7lTVXQ": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Dx_gbQz9SUijp8wePyfR3w": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"cYZ6oGofDUyqbBUIaR+Gtw": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"tETSmwkOXUanpbaey1BsWw": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Kb52vqH2yE6SSevrGiTbTw": {
getter: function (varBag, idService) {
return varBag.vars.value.layerKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dTCmUCFjJk+dPtt+YfT3ig": {
getter: function (varBag, idService) {
return varBag.map_Marker_GetRegistryVar.value;
}
},
"9mK_Y8kNgEC4hQkYxbNIWA": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"ZO_XKMP5WECE5rfGS1g_qg": {
getter: function (varBag, idService) {
return varBag.clear_Stopgap_LayerJSResult.value;
}
},
"fL27O_imYUuprzJV1P0zJw": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3i7R+9tMAUeC5qMzX9K4RQ": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EGP7XIYiv06EZl_d0cHwFA": {
getter: function (varBag, idService) {
return varBag.outVars.value.zoomLevelOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"k6UEhpzFLUeq3QDqM_C8TA": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"St7Igof_HkSYkCtId+TzSA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"iJk3hlqza0qtz86L6AoJ8A": {
getter: function (varBag, idService) {
return varBag.vars.value.clusterLayerObjectVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"AD+kr77wqUOLiDKOKbF_OQ": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GZc+PrEQk0iGrsxuaBid7A": {
getter: function (varBag, idService) {
return varBag.vars.value.markerWithWindowInLocal;
}
},
"WWIQF2igAECtRNiRE4L2cg": {
getter: function (varBag, idService) {
return varBag.vars.value.onClickFunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"DsB7dwIa3UCVmVHKf0gBlg": {
getter: function (varBag, idService) {
return varBag.vars.value.useTypeBasedClusteringInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"m2rrQF681Ee7r7nuFQYMkQ": {
getter: function (varBag, idService) {
return varBag.map_MarkerCluster_GetOrCreateLayerVar.value;
}
},
"_YmadCJQc0Sj5ETK+axziQ": {
getter: function (varBag, idService) {
return varBag.generateGUIDVar.value;
}
},
"rDF8h1Aec0Oy+fxJpxAfaQ": {
getter: function (varBag, idService) {
return varBag.map_Marker_GetRegistryVar.value;
}
},
"OmGD8_uus0W6mPs0bgn0kg": {
getter: function (varBag, idService) {
return varBag.map_MarkerCluster_UsingCluster_CheckVar.value;
}
},
"Z+nS9S1XxkCjeger51Na7g": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"zeDDKKitnkG2n08E2DPoRw": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_MarkerVar.value;
}
},
"lOSl7jyBA0mspg2lDfyb8w": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_TooltipVar.value;
}
},
"Wh1CY0wd2UOx4PMAXYzDew": {
getter: function (varBag, idService) {
return varBag.create_MarkerJSResult.value;
}
},
"veBa7wCGm0KpD47ultMjQw": {
getter: function (varBag, idService) {
return varBag.marker__Tooltip_BindJSResult.value;
}
},
"HjGTBc0yLEypfZk4Qyiwqg": {
getter: function (varBag, idService) {
return varBag.vars.value.decimalListInLocal;
}
},
"Q6ASkG+1DUu9Xz6602gIpg": {
getter: function (varBag, idService) {
return varBag.outVars.value.textOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4cRjuBSNY0mADqDV_inICA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"t7otRGXVB06YlYMBumIQ7w": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"G8IIOOIwu06ADYh+IKunKw": {
getter: function (varBag, idService) {
return varBag.getFromObject_ArrayVar.value;
}
},
"GjsBE7pNOUiBVsFGYhnGCg": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Uxo673FPx0OtIqEV6CjqWw": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RG83jLPt2EWPEPKga4Fq+w": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HXVmJdL7oUGmYiYk9EfrYw": {
getter: function (varBag, idService) {
return varBag.map_Marker_GetRegistryVar.value;
}
},
"3wdKVefpekep1LXVD9HaeQ": {
getter: function (varBag, idService) {
return varBag.map_MarkerCluster_GetOrCreateLayerVar.value;
}
},
"AXcCKVfp+UegtmcJAkRsbQ": {
getter: function (varBag, idService) {
return varBag.map_Marker_DeleteAllJSResult.value;
}
},
"mRD31Es+eUKS2znT6usYFQ": {
getter: function (varBag, idService) {
return varBag.vars.value.styleStrVar;
}
},
"jzfidvWr10K8dfxRSA243w": {
getter: function (varBag, idService) {
return varBag.vars.value.featureInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"LG1ZDcbdi0io9YNvDNo4iA": {
getter: function (varBag, idService) {
return varBag.outVars.value.styleOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"UVe0ylq8I0aKv4uo6OOKOQ": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"YT59WF_LKk+CP5jKM_Os4w": {
getter: function (varBag, idService) {
return varBag.getFeatureDataJSResult.value;
}
},
"0Ovo4ST9B0ilB_vrGNecbg": {
getter: function (varBag, idService) {
return varBag.transformToObjectJSResult.value;
}
},
"T2pKzlymZUeJ2M129A0yKA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uzTvMYyJCEWncKtylq9gyA": {
getter: function (varBag, idService) {
return varBag.vars.value.latitudeInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"4OZGN2Huw0qY94VAEjLoGg": {
getter: function (varBag, idService) {
return varBag.vars.value.longitudeInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"BHjFuv_BG0iza8FlNQi6Sg": {
getter: function (varBag, idService) {
return varBag.vars.value.zoomLevelInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"53Hv1ZR1rkeOUzSblAajqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isAnimateInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+Yxw4Too4kuRO8r_3rnMeg": {
getter: function (varBag, idService) {
return varBag.vars.value.durationInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"cd0pBpYFPkKyCaApjpKZsg": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"CPq896smnUaWvYwDebgV+A": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"yexsyLYi20y3iPxM6EErmA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qHkFtk7KxUyGWXGfRoliLA": {
getter: function (varBag, idService) {
return varBag.vars.value.markersWithWindowInLocal;
}
},
"LwqYhk7jekKHKhnRQEJWeA": {
getter: function (varBag, idService) {
return varBag.vars.value.onClickFunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"8I4yifiSg0GI1qb3yctcQQ": {
getter: function (varBag, idService) {
return varBag.vars.value.useTypeBasedClusteringInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"7pwsN8vTEUCkq_wZXqDeBg": {
getter: function (varBag, idService) {
return varBag.map_GetTooltipBindingCallbackVar.value;
}
},
"OhAhSNwihkSZ23wdd1wtEA": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"TEVzfn8uEE+pvXhXvBbJyg": {
getter: function (varBag, idService) {
return varBag.map_GetPopupBindingCallbackVar.value;
}
},
"FqjupQuKJkGzqnl6NFvD9g": {
getter: function (varBag, idService) {
return varBag.map_Marker_GetRegistryVar.value;
}
},
"seekXyteqki6BW_0zY3gqQ": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_MarkersVar.value;
}
},
"xb3hiO0vSkeAuLUxrfGtCw": {
getter: function (varBag, idService) {
return varBag.bulkCreate_MarkersJSResult.value;
}
},
"541URl21wU6GRY6nUWZcDg": {
getter: function (varBag, idService) {
return varBag.vars.value.mainObjectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rzz2S0HDEU2D3COsmHCXxw": {
getter: function (varBag, idService) {
return varBag.vars.value.newObjectKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FvGwoBV34UORVCLTAWGZZw": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"7RsD2ZejC0CFAruh3qhfBQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"MMBePtGBb0uP71Jb2oITvw": {
getter: function (varBag, idService) {
return varBag.vars.value.matchedFeaturesVar;
}
},
"n0SEPGC1K0mmYrQMKKKKqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.latitudeInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"udkl54auikWjHMgqa3J8hA": {
getter: function (varBag, idService) {
return varBag.vars.value.longitudeInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"GoZmpfBPcEGIdiuHBAYPaA": {
getter: function (varBag, idService) {
return varBag.vars.value.geoJSONFeaturesInLocal;
}
},
"myI3UYUpDESjct0_zHtrvA": {
getter: function (varBag, idService) {
return varBag.outVars.value.matchesOut;
}
},
"UVE8r+vFfEyvmx_oS6Qozw": {
getter: function (varBag, idService) {
return varBag.pointInFeatureJSResult.value;
}
},
"M+zFz9JbZEyZ9Z5DjH6vSg": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4+ncHDLlqUGr5JdOj8rnMw": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2XINSyGjAE6vEz5+Vf4WNA": {
getter: function (varBag, idService) {
return varBag.vars.value.zoomLevelInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"tf_oMJdXxU6leqapR9YiNA": {
getter: function (varBag, idService) {
return varBag.outVars.value.minLatOut;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"PwbC8fLwCUCpIWV2zB5Isw": {
getter: function (varBag, idService) {
return varBag.outVars.value.maxLatOut;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"13ytpcV8I0O2rnE2j+630g": {
getter: function (varBag, idService) {
return varBag.outVars.value.minLongOut;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"4ham+Do070G90fRpqDMLuQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.maxLongOut;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"jUg7Dv0KDkiIGrZmxzDBig": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"OQdSehP5KEqN8osXTChhyw": {
getter: function (varBag, idService) {
return varBag.getBoundsByZoomLevelJSResult.value;
}
},
"OGRS8T99Y0ueLzmp_MPd7g": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_0y1zNOtkkK3FMtGI0TzSA": {
getter: function (varBag, idService) {
return varBag.vars.value.markerIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QUJwU_0uiUS6k4orcZ1MwQ": {
getter: function (varBag, idService) {
return varBag.map_Marker_GetRegistryVar.value;
}
},
"qKxLm8GkCkiD7_6ChfzrSQ": {
getter: function (varBag, idService) {
return varBag.delete_MarkerJSResult.value;
}
},
"7VURCe8RFEiXHrDVeLBLhQ": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LEMmvBe4Y0WSA1YBy2GeWQ": {
getter: function (varBag, idService) {
return varBag.vars.value.markerInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"motOw9XADkORl86XpHkIlQ": {
getter: function (varBag, idService) {
return varBag.vars.value.markerWithWindowInLocal;
}
},
"bQXdCDWvD0qJ4pXLCgw4TQ": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_PopupVar.value;
}
},
"J3ivXCl7tE+nt_JR1sMROg": {
getter: function (varBag, idService) {
return varBag.marker__Popup_BindJSResult.value;
}
},
"vToV2pd3HkWAO_RhgU2RKQ": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b0bQZBcizUWDv1PIBQCl0w": {
getter: function (varBag, idService) {
return varBag.vars.value.latitudeInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"F72MAi+9P0uVWgsWeUDqhA": {
getter: function (varBag, idService) {
return varBag.vars.value.longitudeInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"xSALOnAOLUGhqIU4pzI5WQ": {
getter: function (varBag, idService) {
return varBag.vars.value.zoomLevelInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"0c1cQyJs4EW5YnYd02FhvA": {
getter: function (varBag, idService) {
return varBag.vars.value.isAnimateInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"WDqD2WIboEu_DQ0igydRMQ": {
getter: function (varBag, idService) {
return varBag.vars.value.durationInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"0iLu9sCxH0CNDFweBAjV6g": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"LkLGJfbOv0+Jx0f0qd_0GA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"nZENWhLh8EysE08ax8v+IA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iNYOzvWJhEapZxWiFcY11Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.callbackOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"zncbXCkXHEqcornxhlZEPg": {
getter: function (varBag, idService) {
return varBag.getCallbackJSResult.value;
}
},
"3M5etdkEIECv8YnEr23yzA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jwCh0g1+zkal0UvPtanBrg": {
getter: function (varBag, idService) {
return varBag.vars.value.minLatInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"4y9DR8fFPUqvWCQSDKMBUg": {
getter: function (varBag, idService) {
return varBag.vars.value.maxLatInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"Y2WxHjZqK0SZRvkriaVH0g": {
getter: function (varBag, idService) {
return varBag.vars.value.minLongInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"+LFcXV70Gk6DJbLBR4SMKg": {
getter: function (varBag, idService) {
return varBag.vars.value.maxLongInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"XJDgsg5GD0mBJaFYQVqayg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isInsideZoomLevelOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ZxdsfKgMmEq+yW3DvdByvQ": {
getter: function (varBag, idService) {
return varBag.map_Zoom_GetLevelVar.value;
}
},
"X0UMp0BEekevpKq57roiyw": {
getter: function (varBag, idService) {
return varBag.map_GetBoundsByZoomLevel_CurrentVar.value;
}
},
"GV3nbbNP+ESrurnCkPoTOQ": {
getter: function (varBag, idService) {
return varBag.vars.value.markerObjInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Ku3Fub6CmUWstY6ubStLeA": {
getter: function (varBag, idService) {
return varBag.openPopupJSResult.value;
}
},
"VIZT7qbx0Eil8GAG0vEz4g": {
getter: function (varBag, idService) {
return varBag.outVars.value.gUIDOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ksONVi8pXUSBNX4cxgNmZA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"lyRgfT0lzEiixAAu12tPeA": {
getter: function (varBag, idService) {
return varBag.vars.value.mainObjectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6VrzoYXZoEa7ljgn4GFZrg": {
getter: function (varBag, idService) {
return varBag.vars.value.newObjectKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tQKv7xfoHE+rUT_WavuyJA": {
getter: function (varBag, idService) {
return varBag.outVars.value.boolOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"P8h4j2XC9Eiz_OEV2IL4hA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"+YCIQTU_W06zjmA+4C137Q": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"B4NNenBbIkCLA2R0KHyYrw": {
getter: function (varBag, idService) {
return varBag.outVars.value.latitudeOut;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"nKKVQsWxokiIJHiQYP7KUQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.longitudeOut;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"yjVBBB0lFEyLEvIq6DVAgA": {
getter: function (varBag, idService) {
return varBag.outVars.value.zoomLevelOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"nzVxADOUtE2vfRuOp3LdtQ": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"m32yx9M4B0+madP33jJcag": {
getter: function (varBag, idService) {
return varBag.getCurrentViewJSResult.value;
}
},
"ukf5zNuCT06HweoTbVoNOA": {
getter: function (varBag, idService) {
return varBag.vars.value.objectInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"_MEX51CEqEK4MNUvWJCIaQ": {
getter: function (varBag, idService) {
return varBag.vars.value.optionsInLocal;
}
},
"Sd2U6LBXHkiQtF0b6pckDg": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"wsgbhr0+GkergF0cPwT_Hg": {
getter: function (varBag, idService) {
return varBag.setStyleJSResult.value;
}
},
"Xmnep6nnJEGQL6x0TE02VA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pj0WB4n+DkqSIZNoW4Bh7w": {
getter: function (varBag, idService) {
return varBag.outVars.value.valueOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Hfr8+UtEjUaYHP399KpATA": {
getter: function (varBag, idService) {
return varBag.getFromObject_BoolVar.value;
}
},
"mwylBd03oUGL3Zu9HA0QOQ": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vjlYq794HkS7+oyJcP90gA": {
getter: function (varBag, idService) {
return varBag.vars.value.geoJSONIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KBF2A_+DYUSEDBiGf0iiow": {
getter: function (varBag, idService) {
return varBag.map_GeoJSON_GetLayerVar.value;
}
},
"jJgF_GEMbEKhd_BZMcOLdw": {
getter: function (varBag, idService) {
return varBag.map_GeoJSON_GetRegistryVar.value;
}
},
"aEp+cfKWHEGtg35gGzUkFg": {
getter: function (varBag, idService) {
return varBag.remove_FeatureJSResult.value;
}
},
"l4Y+QYwjuEC8GPkdNv+SEw": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nn_liegOHEWdYuLVBxaPZg": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Zc_qpqk7s0OkZEVAqBFq2w": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"3ssrI+ux1U6HChvgJhfQ4Q": {
getter: function (varBag, idService) {
return varBag.markerCluster_SetLayerJSResult.value;
}
},
"V8L+K_E+B02e4rbl_e1lsQ": {
getter: function (varBag, idService) {
return varBag.vars.value.zoomControlOptionsInLocal;
}
},
"FTWVlGZBlEyJNBUMhJNgqw": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_QO+kIT9jEWe+yawCxtGmQ": {
getter: function (varBag, idService) {
return varBag.vars.value.onLocationClickedFunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"kHAWiG1SOUqtA2vL4YeUww": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"PTVZz67jqkWnVLf6yTChbQ": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"idn449u8k0ik_YHxIsEa+A": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"6NFXpWzFNU2hmmrdjBbUug": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YT3fcrzI8U+hJ7uMDcwEuA": {
getter: function (varBag, idService) {
return varBag.vars.value.visibleInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gGjWJ1Nys0WQnVtdXgg6VQ": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"C7TP2VJ1r0GJBgx_uorZbA": {
getter: function (varBag, idService) {
return varBag.toggleStopgapLayerJSResult.value;
}
},
"FZWNlzfLvUKC5IDsfk4Z0A": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KM4VL7tBMEmGelZtYh4FZg": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oe1C3YDChkWJ+hfQPfcAEg": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7U2tHvda60GtARpGaMp4Gg": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackFunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"OMBk_sD_cUiOHraRRZ8YtA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"22mALQQj8kK0ugEVc4dyww": {
getter: function (varBag, idService) {
return varBag.map_MarkerCluster_UsingCluster_CheckVar.value;
}
},
"xUChnSt5BUyiSrQvqs9ptA": {
getter: function (varBag, idService) {
return varBag.map_GetObject_FromIdVar.value;
}
},
"vso8+XMunEKgtBasZEO1Mw": {
getter: function (varBag, idService) {
return varBag.map_MarkerCluster_GetOrCreateLayerVar.value;
}
},
"Tz4FdYp1fEeEczbZ79ZzKQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
