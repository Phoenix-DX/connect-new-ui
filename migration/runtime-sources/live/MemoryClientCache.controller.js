define("MemoryClientCache.controller$CacheHitResult", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.model$MemoryCacheResultRec"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.cacheHitResult$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.CacheHitResult$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:EX8l79yw2UWy1gf2fTnxzA:/ClientActionFlows.EX8l79yw2UWy1gf2fTnxzA:GRPgF1sJaG3IJCnehf1H3g", "MemoryClientCache", "CacheHitResult", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:0+og9ro2+UmMQRS5Fwb+nQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:dLr0SUmV7UGYkEBAGt9Yxg", callContext.id);
// Result.CacheHit = True
outVars.value.resultOut.cacheHitAttr = true;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:SsXFjNhZiEe8A2w5jAKKXQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:EX8l79yw2UWy1gf2fTnxzA", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.CacheHitResult$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
MemoryClientCacheController.default.clientActionProxies.cacheHitResult$Action = function () {
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.cacheHitResult$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: actionResults.resultOut
};
});
};
});

define("MemoryClientCache.controller$CacheKeyPart", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$CacheKeyPart.EncodeCacheKeyPartJS"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController, MemoryClientCache_controller_CacheKeyPart_EncodeCacheKeyPartJS) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.cacheKeyPart$Action = function (keyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.CacheKeyPart$vars"))());
vars.value.keyInLocal = keyIn;
var encodeCacheKeyPartJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.CacheKeyPart$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.encodeCacheKeyPartJSResult = encodeCacheKeyPartJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:dY0GAS6ZhUqEG8lwDwEK9w:/ClientActionFlows.dY0GAS6ZhUqEG8lwDwEK9w:FXpVFgsq7E60fMO4q9VDbA", "MemoryClientCache", "CacheKeyPart", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:ztfpu5lusEyeeLW+4Zkogg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:EgY0aOuUNEeuxEDbrbUiKg", callContext.id);
encodeCacheKeyPartJSResult.value = controller.safeExecuteJSNode(MemoryClientCache_controller_CacheKeyPart_EncodeCacheKeyPartJS, "EncodeCacheKeyPart", "CacheKeyPart", {
Key: OS.DataConversion.JSNodeParamConverter.to(vars.value.keyInLocal, OS.DataTypes.DataTypes.Text),
EncodedKeyPart: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("MemoryClientCache.CacheKeyPart$encodeCacheKeyPartJSResult"))();
jsNodeResult.encodedKeyPartOut = OS.DataConversion.JSNodeParamConverter.from($parameters.EncodedKeyPart, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:gCs4dr_+U0+w4pgV7W75Tg", callContext.id);
// KeyPart = EncodeCacheKeyPart.EncodedKeyPart
outVars.value.keyPartOut = encodeCacheKeyPartJSResult.value.encodedKeyPartOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:qm1yMTjyg02eTVLF8TU_5w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:dY0GAS6ZhUqEG8lwDwEK9w", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.CacheKeyPart$vars", [{
name: "Key",
attrName: "keyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.CacheKeyPart$encodeCacheKeyPartJSResult", [{
name: "EncodedKeyPart",
attrName: "encodedKeyPartOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.CacheKeyPart$outVars", [{
name: "KeyPart",
attrName: "keyPartOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.clientActionProxies.cacheKeyPart$Action = function (keyIn) {
keyIn = (keyIn === undefined) ? "" : keyIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.cacheKeyPart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(keyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
KeyPart: OS.DataConversion.JSNodeParamConverter.to(actionResults.keyPartOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("MemoryClientCache.controller$CacheKeyPart.EncodeCacheKeyPartJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.EncodedKeyPart = "/" + window.encodeURIComponent($parameters.Key);
};
});

define("MemoryClientCache.controller$CacheMissResult", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.model$MemoryCacheResultRec"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.cacheMissResult$Action = function (startedIn, finishedIn, millisecondsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.CacheMissResult$vars"))());
vars.value.startedInLocal = startedIn;
vars.value.finishedInLocal = finishedIn;
vars.value.millisecondsInLocal = millisecondsIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.CacheMissResult$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:U0GDzOCNNEqLUYSHH_XaSw:/ClientActionFlows.U0GDzOCNNEqLUYSHH_XaSw:Lu7KUwCsEXaFlgLLVNW_RQ", "MemoryClientCache", "CacheMissResult", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:DG4jfBJdeUOzTc01rEMFaQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:OeAMd2R4mUSdKjKDnI7rTg", callContext.id);
// Result.Started = Started
outVars.value.resultOut.startedAttr = vars.value.startedInLocal;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:OeAMd2R4mUSdKjKDnI7rTg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Result.Finished = Finished
outVars.value.resultOut.finishedAttr = vars.value.finishedInLocal;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:OeAMd2R4mUSdKjKDnI7rTg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Result.Milliseconds = Milliseconds
outVars.value.resultOut.millisecondsAttr = vars.value.millisecondsInLocal;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:sCo9EqpOrUim4iTypOzHYg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:U0GDzOCNNEqLUYSHH_XaSw", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.CacheMissResult$vars", [{
name: "Started",
attrName: "startedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Finished",
attrName: "finishedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Milliseconds",
attrName: "millisecondsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.CacheMissResult$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
MemoryClientCacheController.default.clientActionProxies.cacheMissResult$Action = function (startedIn, finishedIn, millisecondsIn) {
startedIn = (startedIn === undefined) ? OS.DataTypes.DateTime.defaultValue : startedIn;
finishedIn = (finishedIn === undefined) ? OS.DataTypes.DateTime.defaultValue : finishedIn;
millisecondsIn = (millisecondsIn === undefined) ? 0 : millisecondsIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.cacheMissResult$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(startedIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(finishedIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(millisecondsIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: actionResults.resultOut
};
});
};
});

define("MemoryClientCache.controller$CacheMissResultSimple", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.model$MemoryCacheResultRec"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.cacheMissResultSimple$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.CacheMissResultSimple$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:V4wyjOI2bU2_AovGkDX5nw:/ClientActionFlows.V4wyjOI2bU2_AovGkDX5nw:d1LCHVcuwYVjT9q_8F5sOQ", "MemoryClientCache", "CacheMissResultSimple", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:bT2SBWo39EGVevqhWOUHKQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:24NlYOCCm0iE8drtovGQXw", callContext.id);
// Result.CacheHit = False
outVars.value.resultOut.cacheHitAttr = false;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:90xXtnckTECJkFt3_3cXvQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:V4wyjOI2bU2_AovGkDX5nw", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.CacheMissResultSimple$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
MemoryClientCacheController.default.clientActionProxies.cacheMissResultSimple$Action = function () {
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.cacheMissResultSimple$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: actionResults.resultOut
};
});
};
});

define("MemoryClientCache.controller$GetCacheableObject", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$GetCacheableObject.GetCacheableObjectInternalAsyncJS", "MemoryClientCache.controller$GetCacheableObjectInternal", "MemoryClientCache.model$MemoryCacheResultRec"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController, MemoryClientCache_controller_GetCacheableObject_GetCacheableObjectInternalAsyncJS) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.getCacheableObject$Action = function (memoryCacheTypeIdIn, cacheKeyIn, cacheTimeToLiveSecondsIn, cacheTimeoutSecondsIn, getObjectCallbackIn, cacheMissCallbackIn, queueTresholdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCacheableObject$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
vars.value.cacheKeyInLocal = cacheKeyIn;
vars.value.cacheTimeToLiveSecondsInLocal = cacheTimeToLiveSecondsIn;
vars.value.cacheTimeoutSecondsInLocal = cacheTimeoutSecondsIn;
vars.value.getObjectCallbackInLocal = getObjectCallbackIn;
vars.value.cacheMissCallbackInLocal = cacheMissCallbackIn;
vars.value.queueTresholdInLocal = queueTresholdIn;
var getCacheableObjectInternalAsyncJSResult = new OS.DataTypes.VariableHolder();
var memoryCacheResultFromJSONVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(MemoryClientCacheModel.MemoryCacheResultRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCacheableObject$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectInternalAsyncJSResult = getCacheableObjectInternalAsyncJSResult;
varBag.memoryCacheResultFromJSONVar = memoryCacheResultFromJSONVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:JC+lSjUQQUal93CwPTLI8A:/ClientActionFlows.JC+lSjUQQUal93CwPTLI8A:j2+8bYXQT_kO4bEwWd5I8Q", "MemoryClientCache", "GetCacheableObject", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:cvC7RKi7xUS3ozj6XPU2Ug", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:vjCxx_FhA0C20+sQM78d0w", callContext.id);
return controller.safeExecuteAsyncJSNode(MemoryClientCache_controller_GetCacheableObject_GetCacheableObjectInternalAsyncJS, "GetCacheableObjectInternalAsync", "GetCacheableObject", {
CacheTimeToLiveSeconds: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheTimeToLiveSecondsInLocal, OS.DataTypes.DataTypes.Integer),
CacheKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheKeyInLocal, OS.DataTypes.DataTypes.Text),
QueueTreshold: OS.DataConversion.JSNodeParamConverter.to(vars.value.queueTresholdInLocal, OS.DataTypes.DataTypes.LongInteger),
GetObjectCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.getObjectCallbackInLocal, OS.DataTypes.DataTypes.Object),
CacheTimeoutSeconds: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheTimeoutSecondsInLocal, OS.DataTypes.DataTypes.Integer),
MemoryCacheTypeId: OS.DataConversion.JSNodeParamConverter.to(vars.value.memoryCacheTypeIdInLocal, OS.DataTypes.DataTypes.Text),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
CacheResultJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCacheableObject$getCacheableObjectInternalAsyncJSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
jsNodeResult.cacheResultJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CacheResultJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetCacheableObjectInternal: MemoryClientCacheController.default.getClientActionProxies(controller).getCacheableObjectInternal$Action
}, {}).then(function (results) {
getCacheableObjectInternalAsyncJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:YGVlbFHxPEe6AmHWwdDeSw", callContext.id);
// JSON Deserialize: MemoryCacheResultFromJSON
memoryCacheResultFromJSONVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getCacheableObjectInternalAsyncJSResult.value.cacheResultJSONOut, MemoryClientCacheModel.MemoryCacheResultRec, false);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:PYLS2ctgAkSdYjO52yifng", callContext.id);
// Object = GetCacheableObjectInternalAsync.Object
outVars.value.objectOut = getCacheableObjectInternalAsyncJSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:PYLS2ctgAkSdYjO52yifng", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CacheResult = MemoryCacheResultFromJSON.Data
outVars.value.cacheResultOut = memoryCacheResultFromJSONVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:SG3eeVPP3kmxzlIlTwyyWg", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:JC+lSjUQQUal93CwPTLI8A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:JC+lSjUQQUal93CwPTLI8A", callContext.id);
throw ex;

});
};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCacheableObject$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheTimeToLiveSeconds",
attrName: "cacheTimeToLiveSecondsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CacheTimeoutSeconds",
attrName: "cacheTimeoutSecondsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "GetObjectCallback",
attrName: "getObjectCallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "CacheMissCallback",
attrName: "cacheMissCallbackInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "QueueTreshold",
attrName: "queueTresholdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCacheableObject$getCacheableObjectInternalAsyncJSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "CacheResultJSON",
attrName: "cacheResultJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCacheableObject$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "CacheResult",
attrName: "cacheResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
MemoryClientCacheController.default.clientActionProxies.getCacheableObject$Action = function (memoryCacheTypeIdIn, cacheKeyIn, cacheTimeToLiveSecondsIn, cacheTimeoutSecondsIn, getObjectCallbackIn, cacheMissCallbackIn, queueTresholdIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
cacheTimeToLiveSecondsIn = (cacheTimeToLiveSecondsIn === undefined) ? 0 : cacheTimeToLiveSecondsIn;
cacheTimeoutSecondsIn = (cacheTimeoutSecondsIn === undefined) ? 0 : cacheTimeoutSecondsIn;
getObjectCallbackIn = (getObjectCallbackIn === undefined) ? null : getObjectCallbackIn;
cacheMissCallbackIn = (cacheMissCallbackIn === undefined) ? null : cacheMissCallbackIn;
queueTresholdIn = (queueTresholdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : queueTresholdIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.getCacheableObject$Action.bind(controller, memoryCacheTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(cacheTimeToLiveSecondsIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(cacheTimeoutSecondsIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(getObjectCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(cacheMissCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(queueTresholdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object),
CacheResult: actionResults.cacheResultOut
};
});
};
});
define("MemoryClientCache.controller$GetCacheableObject.GetCacheableObjectInternalAsyncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var JSONUtils = window.require("OutSystems/ClientRuntime/JSONUtils");

var callback = function(object, cacheResult) {
    $parameters.Object = object;
    $parameters.CacheResultJSON = JSONUtils.serializeToJSON(cacheResult, false, false);
    $resolve();
};


$actions.GetCacheableObjectInternal(
    $parameters.MemoryCacheTypeId,
    $parameters.CacheKey,
    $parameters.CacheTimeToLiveSeconds,
    $parameters.CacheTimeoutSeconds,
    callback,
    $reject,
    null,
    $parameters.GetObjectCallback,
    null,
    $parameters.QueueTreshold
);
});
};
});

define("MemoryClientCache.controller$GetCacheableObjectInBulk", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$GetCacheableObjectInBulk.GetCacheableObjectInternalAsyncJS", "MemoryClientCache.controller$GetCacheableObjectInternal", "MemoryClientCache.model$MemoryCacheResultRec"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController, MemoryClientCache_controller_GetCacheableObjectInBulk_GetCacheableObjectInternalAsyncJS) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.getCacheableObjectInBulk$Action = function (memoryCacheTypeIdIn, cacheKeyIn, cacheTimeToLiveSecondsIn, cacheTimeoutSecondsIn, getObjectBulkCallbackIn, queueTresholdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCacheableObjectInBulk$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
vars.value.cacheKeyInLocal = cacheKeyIn;
vars.value.cacheTimeToLiveSecondsInLocal = cacheTimeToLiveSecondsIn;
vars.value.cacheTimeoutSecondsInLocal = cacheTimeoutSecondsIn;
vars.value.getObjectBulkCallbackInLocal = getObjectBulkCallbackIn;
vars.value.queueTresholdInLocal = queueTresholdIn;
var getCacheableObjectInternalAsyncJSResult = new OS.DataTypes.VariableHolder();
var memoryCacheResultFromJSONVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(MemoryClientCacheModel.MemoryCacheResultRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCacheableObjectInBulk$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectInternalAsyncJSResult = getCacheableObjectInternalAsyncJSResult;
varBag.memoryCacheResultFromJSONVar = memoryCacheResultFromJSONVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:LeIdDVsgU0WRuEMyjsSLqA:/ClientActionFlows.LeIdDVsgU0WRuEMyjsSLqA:zuTgfZeyyUnikRFuAxBhuQ", "MemoryClientCache", "GetCacheableObjectInBulk", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:liwEfVI8O0O4FxsaRVhK9Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:2JDXqMkCUkiSwrQ_aLtrdQ", callContext.id);
return controller.safeExecuteAsyncJSNode(MemoryClientCache_controller_GetCacheableObjectInBulk_GetCacheableObjectInternalAsyncJS, "GetCacheableObjectInternalAsync", "GetCacheableObjectInBulk", {
GetObjectBulkCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.getObjectBulkCallbackInLocal, OS.DataTypes.DataTypes.Object),
CacheTimeToLiveSeconds: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheTimeToLiveSecondsInLocal, OS.DataTypes.DataTypes.Integer),
CacheKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheKeyInLocal, OS.DataTypes.DataTypes.Text),
MemoryCacheTypeId: OS.DataConversion.JSNodeParamConverter.to(vars.value.memoryCacheTypeIdInLocal, OS.DataTypes.DataTypes.Text),
CacheTimeoutSeconds: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheTimeoutSecondsInLocal, OS.DataTypes.DataTypes.Integer),
QueueTreshold: OS.DataConversion.JSNodeParamConverter.to(vars.value.queueTresholdInLocal, OS.DataTypes.DataTypes.LongInteger),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
CacheResultJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCacheableObjectInBulk$getCacheableObjectInternalAsyncJSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
jsNodeResult.cacheResultJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CacheResultJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
GetCacheableObjectInternal: MemoryClientCacheController.default.getClientActionProxies(controller).getCacheableObjectInternal$Action
}, {}).then(function (results) {
getCacheableObjectInternalAsyncJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:CQjtRn1EHEymaQ7F3qGjcQ", callContext.id);
// JSON Deserialize: MemoryCacheResultFromJSON
memoryCacheResultFromJSONVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getCacheableObjectInternalAsyncJSResult.value.cacheResultJSONOut, MemoryClientCacheModel.MemoryCacheResultRec, false);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:_ZCsD6c4ukidrloUBHzCKg", callContext.id);
// Object = GetCacheableObjectInternalAsync.Object
outVars.value.objectOut = getCacheableObjectInternalAsyncJSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:_ZCsD6c4ukidrloUBHzCKg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CacheResult = MemoryCacheResultFromJSON.Data
outVars.value.cacheResultOut = memoryCacheResultFromJSONVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:dvoVUyyjN0+XetvNMkm4XA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:LeIdDVsgU0WRuEMyjsSLqA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:LeIdDVsgU0WRuEMyjsSLqA", callContext.id);
throw ex;

});
};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCacheableObjectInBulk$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheTimeToLiveSeconds",
attrName: "cacheTimeToLiveSecondsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CacheTimeoutSeconds",
attrName: "cacheTimeoutSecondsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "GetObjectBulkCallback",
attrName: "getObjectBulkCallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "QueueTreshold",
attrName: "queueTresholdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCacheableObjectInBulk$getCacheableObjectInternalAsyncJSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "CacheResultJSON",
attrName: "cacheResultJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCacheableObjectInBulk$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "CacheResult",
attrName: "cacheResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
MemoryClientCacheController.default.clientActionProxies.getCacheableObjectInBulk$Action = function (memoryCacheTypeIdIn, cacheKeyIn, cacheTimeToLiveSecondsIn, cacheTimeoutSecondsIn, getObjectBulkCallbackIn, queueTresholdIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
cacheTimeToLiveSecondsIn = (cacheTimeToLiveSecondsIn === undefined) ? 0 : cacheTimeToLiveSecondsIn;
cacheTimeoutSecondsIn = (cacheTimeoutSecondsIn === undefined) ? 0 : cacheTimeoutSecondsIn;
getObjectBulkCallbackIn = (getObjectBulkCallbackIn === undefined) ? null : getObjectBulkCallbackIn;
queueTresholdIn = (queueTresholdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : queueTresholdIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.getCacheableObjectInBulk$Action.bind(controller, memoryCacheTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(cacheTimeToLiveSecondsIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(cacheTimeoutSecondsIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(getObjectBulkCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(queueTresholdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object),
CacheResult: actionResults.cacheResultOut
};
});
};
});
define("MemoryClientCache.controller$GetCacheableObjectInBulk.GetCacheableObjectInternalAsyncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var JSONUtils = window.require("OutSystems/ClientRuntime/JSONUtils");

var callback = function(object, cacheResult) {
    $parameters.Object = object;
    $parameters.CacheResultJSON = JSONUtils.serializeToJSON(cacheResult, false, false);
    $resolve();
};
 

$actions.GetCacheableObjectInternal(
    $parameters.MemoryCacheTypeId,
    $parameters.CacheKey,
    $parameters.CacheTimeToLiveSeconds,
    $parameters.CacheTimeoutSeconds,
    callback,
    $resolve,
    null,
    null,
    $parameters.GetObjectBulkCallback,
    $parameters.QueueTreshold
);

});
};
});

define("MemoryClientCache.controller$GetCacheableObjectInternal", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$GetCacheableObjectInternal.ExecuteResultCallbackJS", "MemoryClientCache.controller$GetCacheableObjectInternal.ExecuteCacheMissCallbackJS", "MemoryClientCache.controller$GetCacheableObjectInternal.ExecuteMissResultCallbackJS", "MemoryClientCache.controller$MemoryCache_QueueResolution", "MemoryClientCache.controller$MemoryCache_Get", "MemoryClientCache.model$MemoryCacheResultRec", "MemoryClientCache.controller$CacheHitResult", "MemoryClientCache.controller$CacheMissResultSimple"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController, MemoryClientCache_controller_GetCacheableObjectInternal_ExecuteResultCallbackJS, MemoryClientCache_controller_GetCacheableObjectInternal_ExecuteCacheMissCallbackJS, MemoryClientCache_controller_GetCacheableObjectInternal_ExecuteMissResultCallbackJS) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.getCacheableObjectInternal$Action = function (memoryCacheTypeIdIn, cacheKeyIn, cacheTimeToLiveSecondsIn, cacheTimeoutSecondsIn, resultCallbackIn, failureCallbackIn, cacheMissCallbackIn, getObjectCallbackIn, getObjectBulkCallbackIn, queueTresholdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCacheableObjectInternal$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
vars.value.cacheKeyInLocal = cacheKeyIn;
vars.value.cacheTimeToLiveSecondsInLocal = cacheTimeToLiveSecondsIn;
vars.value.cacheTimeoutSecondsInLocal = cacheTimeoutSecondsIn;
vars.value.resultCallbackInLocal = resultCallbackIn;
vars.value.failureCallbackInLocal = failureCallbackIn;
vars.value.cacheMissCallbackInLocal = cacheMissCallbackIn;
vars.value.getObjectCallbackInLocal = getObjectCallbackIn;
vars.value.getObjectBulkCallbackInLocal = getObjectBulkCallbackIn;
vars.value.queueTresholdInLocal = queueTresholdIn;
var memoryCache_QueueResolutionVar = new OS.DataTypes.VariableHolder();
var memoryCache_GetVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCacheableObjectInternal$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.memoryCache_QueueResolutionVar = memoryCache_QueueResolutionVar;
varBag.memoryCache_GetVar = memoryCache_GetVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:5lE_XwFfHkmXPG8rDoHfWA:/ClientActionFlows.5lE_XwFfHkmXPG8rDoHfWA:wa_3WlqR4yE0bMHHJUs9WQ", "MemoryClientCache", "GetCacheableObjectInternal", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:m78BpeFJok6JFryCWYXL5w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:+arCeCGw_EK9xKvvBrdPpA", callContext.id);
// Execute Action: MemoryCache_Get
memoryCache_GetVar.value = MemoryClientCacheController.default.memoryCache_Get$Action(vars.value.memoryCacheTypeIdInLocal, vars.value.cacheKeyInLocal, callContext);

if((OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:FSo5vdAn+kavCPh60sFaRg", callContext.id) && (memoryCache_GetVar.value.cacheHitOut && memoryCache_GetVar.value.expireDateTimeOut.gte(OS.BuiltinFunctions.currDateTime())))) {
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:0KhODgsSfEiL_13xloI8aw", callContext.id);
controller.safeExecuteJSNode(MemoryClientCache_controller_GetCacheableObjectInternal_ExecuteResultCallbackJS, "ExecuteResultCallback", "GetCacheableObjectInternal", {
Object: OS.DataConversion.JSNodeParamConverter.to(memoryCache_GetVar.value.objectOut, OS.DataTypes.DataTypes.Object),
ResultCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.resultCallbackInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {
CacheHitResult: MemoryClientCacheController.default.getClientActionProxies(controller).cacheHitResult$Action
}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:w8CKwo7yQ0OZas8uNmIfjw", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:EX2dbXa6IU+gE3lHtd44Ow", callContext.id) && (((vars.value.getObjectCallbackInLocal) !== (OS.BuiltinFunctions.nullObject())) || ((vars.value.getObjectBulkCallbackInLocal) !== (OS.BuiltinFunctions.nullObject()))))) {
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:rhQtHfXpXUuvmBnalh8svQ", callContext.id);
// Execute Action: MemoryCache_QueueResolution
memoryCache_QueueResolutionVar.value = MemoryClientCacheController.default.memoryCache_QueueResolution$Action(vars.value.memoryCacheTypeIdInLocal, vars.value.cacheKeyInLocal, vars.value.cacheTimeToLiveSecondsInLocal, vars.value.cacheTimeoutSecondsInLocal, vars.value.getObjectCallbackInLocal, vars.value.getObjectBulkCallbackInLocal, vars.value.resultCallbackInLocal, vars.value.failureCallbackInLocal, vars.value.queueTresholdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:LzWNiKj_LkSWj4BlYAvdbw", callContext.id);
controller.safeExecuteJSNode(MemoryClientCache_controller_GetCacheableObjectInternal_ExecuteCacheMissCallbackJS, "ExecuteCacheMissCallback", "GetCacheableObjectInternal", {
CacheMissCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheMissCallbackInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:JHi34TfNq0C4HR1wkLbuPQ", callContext.id);
// DestroyCallback = MemoryCache_QueueResolution.DestroyCallback
outVars.value.destroyCallbackOut = memoryCache_QueueResolutionVar.value.destroyCallbackOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:CWyhyF9aVkCcZ2pJVSRq4Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:nQsTo+6nCU2t5NA9cg2ehA", callContext.id);
controller.safeExecuteJSNode(MemoryClientCache_controller_GetCacheableObjectInternal_ExecuteMissResultCallbackJS, "ExecuteMissResultCallback", "GetCacheableObjectInternal", {
Object: OS.DataConversion.JSNodeParamConverter.to(memoryCache_GetVar.value.objectOut, OS.DataTypes.DataTypes.Object),
ResultCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.resultCallbackInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {
CacheMissResultSimple: MemoryClientCacheController.default.getClientActionProxies(controller).cacheMissResultSimple$Action
}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:8NFyJvV2rUeo5EuPeR6YWQ", callContext.id);
}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:5lE_XwFfHkmXPG8rDoHfWA", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCacheableObjectInternal$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheTimeToLiveSeconds",
attrName: "cacheTimeToLiveSecondsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CacheTimeoutSeconds",
attrName: "cacheTimeoutSecondsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "ResultCallback",
attrName: "resultCallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "FailureCallback",
attrName: "failureCallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "CacheMissCallback",
attrName: "cacheMissCallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "GetObjectCallback",
attrName: "getObjectCallbackInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "GetObjectBulkCallback",
attrName: "getObjectBulkCallbackInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "QueueTreshold",
attrName: "queueTresholdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCacheableObjectInternal$outVars", [{
name: "DestroyCallback",
attrName: "destroyCallbackOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
MemoryClientCacheController.default.clientActionProxies.getCacheableObjectInternal$Action = function (memoryCacheTypeIdIn, cacheKeyIn, cacheTimeToLiveSecondsIn, cacheTimeoutSecondsIn, resultCallbackIn, failureCallbackIn, cacheMissCallbackIn, getObjectCallbackIn, getObjectBulkCallbackIn, queueTresholdIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
cacheTimeToLiveSecondsIn = (cacheTimeToLiveSecondsIn === undefined) ? 0 : cacheTimeToLiveSecondsIn;
cacheTimeoutSecondsIn = (cacheTimeoutSecondsIn === undefined) ? 0 : cacheTimeoutSecondsIn;
resultCallbackIn = (resultCallbackIn === undefined) ? null : resultCallbackIn;
failureCallbackIn = (failureCallbackIn === undefined) ? null : failureCallbackIn;
cacheMissCallbackIn = (cacheMissCallbackIn === undefined) ? null : cacheMissCallbackIn;
getObjectCallbackIn = (getObjectCallbackIn === undefined) ? null : getObjectCallbackIn;
getObjectBulkCallbackIn = (getObjectBulkCallbackIn === undefined) ? null : getObjectBulkCallbackIn;
queueTresholdIn = (queueTresholdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : queueTresholdIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.getCacheableObjectInternal$Action.bind(controller, memoryCacheTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(cacheTimeToLiveSecondsIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(cacheTimeoutSecondsIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(resultCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(failureCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(cacheMissCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(getObjectCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(getObjectBulkCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(queueTresholdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(actionResults.destroyCallbackOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("MemoryClientCache.controller$GetCacheableObjectInternal.ExecuteResultCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var cacheResult = $actions.CacheHitResult().Result;
$parameters.ResultCallback($parameters.Object, cacheResult);
};
});
define("MemoryClientCache.controller$GetCacheableObjectInternal.ExecuteCacheMissCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.CacheMissCallback) {
    $parameters.CacheMissCallback();
}
};
});
define("MemoryClientCache.controller$GetCacheableObjectInternal.ExecuteMissResultCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var cacheResult = $actions.CacheMissResultSimple().Result;
$parameters.ResultCallback($parameters.Object, cacheResult);
};
});

define("MemoryClientCache.controller$GetCachedObject", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$MemoryCache_Get"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.getCachedObject$Action = function (memoryCacheTypeIdIn, cacheKeyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCachedObject$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
vars.value.cacheKeyInLocal = cacheKeyIn;
var memoryCache_GetVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCachedObject$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.memoryCache_GetVar = memoryCache_GetVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:+J5CWW2U+UOcsOaxqrGHzw:/ClientActionFlows.+J5CWW2U+UOcsOaxqrGHzw:8PbibNePr6kprQRogxaIIw", "MemoryClientCache", "GetCachedObject", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:tMSTTpWCCEu2Hw5bxBfK4w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:4tq4ygPXtEyn2uWxVU309Q", callContext.id);
// Execute Action: MemoryCache_Get
memoryCache_GetVar.value = MemoryClientCacheController.default.memoryCache_Get$Action(vars.value.memoryCacheTypeIdInLocal, vars.value.cacheKeyInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:2IwBByopw06ylVhwkTiIAQ", callContext.id);
// Object = MemoryCache_Get.Object
outVars.value.objectOut = memoryCache_GetVar.value.objectOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:2IwBByopw06ylVhwkTiIAQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CacheHit = MemoryCache_Get.CacheHit
outVars.value.cacheHitOut = memoryCache_GetVar.value.cacheHitOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:akHirhfMgkOux4L3gwNtJg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:+J5CWW2U+UOcsOaxqrGHzw", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCachedObject$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCachedObject$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "CacheHit",
attrName: "cacheHitOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
MemoryClientCacheController.default.clientActionProxies.getCachedObject$Action = function (memoryCacheTypeIdIn, cacheKeyIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.getCachedObject$Action.bind(controller, memoryCacheTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object),
CacheHit: OS.DataConversion.JSNodeParamConverter.to(actionResults.cacheHitOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("MemoryClientCache.controller$GetCacheKeyParts", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$GetCacheKeyParts.DecodeCacheKeyPartsJS"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController, MemoryClientCache_controller_GetCacheKeyParts_DecodeCacheKeyPartsJS) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.getCacheKeyParts$Action = function (cacheKeyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCacheKeyParts$vars"))());
vars.value.cacheKeyInLocal = cacheKeyIn;
var decodeCacheKeyPartsJSResult = new OS.DataTypes.VariableHolder();
var keyPartsFromJSONVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCacheKeyParts$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.decodeCacheKeyPartsJSResult = decodeCacheKeyPartsJSResult;
varBag.keyPartsFromJSONVar = keyPartsFromJSONVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:HAgT32AqjEe6fQsNUCf_3A:/ClientActionFlows.HAgT32AqjEe6fQsNUCf_3A:aAlwEbmKS62ZjwekI2z0Zg", "MemoryClientCache", "GetCacheKeyParts", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:yJlNXrgtQ0uUg5afHI81EQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:ZPw96dUsk0ikx6y2qHXilA", callContext.id);
decodeCacheKeyPartsJSResult.value = controller.safeExecuteJSNode(MemoryClientCache_controller_GetCacheKeyParts_DecodeCacheKeyPartsJS, "DecodeCacheKeyParts", "GetCacheKeyParts", {
CacheKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheKeyInLocal, OS.DataTypes.DataTypes.Text),
KeyPartsJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("MemoryClientCache.GetCacheKeyParts$decodeCacheKeyPartsJSResult"))();
jsNodeResult.keyPartsJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.KeyPartsJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:N6UQCxnR7kW2muF8GwC_4g", callContext.id);
// JSON Deserialize: KeyPartsFromJSON
keyPartsFromJSONVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(decodeCacheKeyPartsJSResult.value.keyPartsJSONOut, OS.DataTypes.TextList, false);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:eyuBTbNefkWoW7fXnTDlwQ", callContext.id);
// KeyParts = KeyPartsFromJSON.Data
outVars.value.keyPartsOut = keyPartsFromJSONVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:kC6D11G_Mk6OTUc_17E3rA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:HAgT32AqjEe6fQsNUCf_3A", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCacheKeyParts$vars", [{
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCacheKeyParts$decodeCacheKeyPartsJSResult", [{
name: "KeyPartsJSON",
attrName: "keyPartsJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.GetCacheKeyParts$outVars", [{
name: "KeyParts",
attrName: "keyPartsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
MemoryClientCacheController.default.clientActionProxies.getCacheKeyParts$Action = function (cacheKeyIn) {
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.getCacheKeyParts$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
KeyParts: actionResults.keyPartsOut
};
});
};
});
define("MemoryClientCache.controller$GetCacheKeyParts.DecodeCacheKeyPartsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var parts = $parameters.CacheKey.substring(1).split("/");
for (var i = 0; i < parts.length; i++) {
    parts[i] = window.decodeURIComponent(parts[i]);
}

$parameters.KeyPartsJSON = JSON.stringify(parts);
};
});

define("MemoryClientCache.controller$MemoryCache_Get", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$MemoryCache_Get.GetFromCacheJS", "MemoryClientCache.controller$MemoryCache_Get.GetFromCache2JS", "MemoryClientCache.controller$MemoryCache_Initialize"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController, MemoryClientCache_controller_MemoryCache_Get_GetFromCacheJS, MemoryClientCache_controller_MemoryCache_Get_GetFromCache2JS) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.memoryCache_Get$Action = function (memoryCacheTypeIdIn, cacheKeyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.MemoryCache_Get$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
vars.value.cacheKeyInLocal = cacheKeyIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getFromCacheJSResult = new OS.DataTypes.VariableHolder();
var getFromCache2JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.MemoryCache_Get$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getFromCacheJSResult = getFromCacheJSResult;
varBag.getFromCache2JSResult = getFromCache2JSResult;
varBag.outVars = outVars;
try {try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:0aYXgq3CEUat1E_MxAaJLQ:/ClientActionFlows.0aYXgq3CEUat1E_MxAaJLQ:wdRZUuX59F+nET8J8vgyrw", "MemoryClientCache", "MemoryCache_Get", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:Q7fhVsVBxkCoV8ULWwu7Qg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:qn_HQA4YBUSi_bfnHVNy2A", callContext.id);
// Execute Action: MemoryCache_Initialize
MemoryClientCacheController.default.memoryCache_Initialize$Action(vars.value.memoryCacheTypeIdInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:nXOKre7TvUmncvWNmC9Jkg", callContext.id);
getFromCacheJSResult.value = controller.safeExecuteJSNode(MemoryClientCache_controller_MemoryCache_Get_GetFromCacheJS, "GetFromCache", "MemoryCache_Get", {
CacheKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheKeyInLocal, OS.DataTypes.DataTypes.Text),
Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.memoryCacheTypeIdInLocal, OS.DataTypes.DataTypes.Text),
CacheHit: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
ExpireDateTime: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.DateTime.defaultValue, OS.DataTypes.DataTypes.DateTime)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("MemoryClientCache.MemoryCache_Get$getFromCacheJSResult"))();
jsNodeResult.cacheHitOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CacheHit, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
jsNodeResult.expireDateTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ExpireDateTime, OS.DataTypes.DataTypes.DateTime);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:SFuHvghs_UCy_IYqa+C1lg", callContext.id);
// CacheHit = GetFromCache.CacheHit
outVars.value.cacheHitOut = getFromCacheJSResult.value.cacheHitOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:SFuHvghs_UCy_IYqa+C1lg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Object = GetFromCache.Object
outVars.value.objectOut = getFromCacheJSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:SFuHvghs_UCy_IYqa+C1lg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ExpireDateTime = GetFromCache.ExpireDateTime
outVars.value.expireDateTimeOut = getFromCacheJSResult.value.expireDateTimeOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:1oFKRt6qcU62s0Bfhpvubw", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("MemoryCache_Get.MemoryCache_Get", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:kPNS0Sl+ZUGS7TK+Q86S7g", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:SuRM6C7XiU2m4lkvn1AwBw", callContext.id);
getFromCache2JSResult.value = controller.safeExecuteJSNode(MemoryClientCache_controller_MemoryCache_Get_GetFromCache2JS, "GetFromCache2", "MemoryCache_Get", {
Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.memoryCacheTypeIdInLocal, OS.DataTypes.DataTypes.Text),
CacheKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheKeyInLocal, OS.DataTypes.DataTypes.Text),
CachedObjectJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("MemoryClientCache.MemoryCache_Get$getFromCache2JSResult"))();
jsNodeResult.cachedObjectJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CachedObjectJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:nEghrQdk8UuXQoWqHDPChw", callContext.id);
// Execute Action: LogMessage
OS.SystemActions.logMessage(((((((((allExceptionsVar.value.exceptionMessageAttr + ";\r\nUserId:") + (OS.BuiltinFunctions.getUserId()).toString()) + "; MemoryCacheTypeId: ") + vars.value.memoryCacheTypeIdInLocal) + "; CacheKey: ") + vars.value.cacheKeyInLocal) + ";\r\nCachedJSON: ") + getFromCache2JSResult.value.cachedObjectJSONOut), "E201 MemoryCache_Get", callContext);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:9L2g8Is4bEigpRsBlzfj2A", callContext.id);
// CacheHit = False
outVars.value.cacheHitOut = false;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:1kkoCVbp6EGWuqU6cEgGQQ", callContext.id);
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
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:0aYXgq3CEUat1E_MxAaJLQ", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.MemoryCache_Get$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.MemoryCache_Get$getFromCacheJSResult", [{
name: "CacheHit",
attrName: "cacheHitOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "ExpireDateTime",
attrName: "expireDateTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.MemoryCache_Get$getFromCache2JSResult", [{
name: "CachedObjectJSON",
attrName: "cachedObjectJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.MemoryCache_Get$outVars", [{
name: "CacheHit",
attrName: "cacheHitOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "ExpireDateTime",
attrName: "expireDateTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
MemoryClientCacheController.default.clientActionProxies.memoryCache_Get$Action = function (memoryCacheTypeIdIn, cacheKeyIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.memoryCache_Get$Action.bind(controller, memoryCacheTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CacheHit: OS.DataConversion.JSNodeParamConverter.to(actionResults.cacheHitOut, OS.DataTypes.DataTypes.Boolean),
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object),
ExpireDateTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.expireDateTimeOut, OS.DataTypes.DataTypes.DateTime)
};
});
};
});
define("MemoryClientCache.controller$MemoryCache_Get.GetFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var MULTIPLE_CACHE_SEPARATOR = "_";
var cacheResultsName = $parameters.Type;

if(cacheResultsName.includes(MULTIPLE_CACHE_SEPARATOR)) {
    var baseName = cacheResultsName.split(MULTIPLE_CACHE_SEPARATOR)[0];
    cacheResultsName = baseName + MULTIPLE_CACHE_SEPARATOR + 0;
}

var cached = window.memoryCache[cacheResultsName].get($parameters.CacheKey);

if (cached) {
    $parameters.CacheHit = true;
    $parameters.Object = cached.value;
    $parameters.ExpireDateTime = cached.expires;
}
};
});
define("MemoryClientCache.controller$MemoryCache_Get.GetFromCache2JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var cached = window.memoryCache[$parameters.Type].get($parameters.CacheKey);

if(cached) {
    $parameters.CachedObjectJSON = JSON.stringify(cached);
}
};
});

define("MemoryClientCache.controller$MemoryCache_Initialize", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$MemoryCache_Initialize.InitializeJS"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController, MemoryClientCache_controller_MemoryCache_Initialize_InitializeJS) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.memoryCache_Initialize$Action = function (memoryCacheTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.MemoryCache_Initialize$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:lPWgFxxstEWZ20ow0Si71w:/ClientActionFlows.lPWgFxxstEWZ20ow0Si71w:KnCo1L2Aeul2x9wbqzrMJA", "MemoryClientCache", "MemoryCache_Initialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:8ZCEncnlOkm5Ut_7Km3j2w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:TbWO2YPWgkSnvCOavJ3L7g", callContext.id);
controller.safeExecuteJSNode(MemoryClientCache_controller_MemoryCache_Initialize_InitializeJS, "Initialize", "MemoryCache_Initialize", {
Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.memoryCacheTypeIdInLocal, OS.DataTypes.DataTypes.Text),
UserId: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.getUserId()), OS.DataTypes.DataTypes.LongInteger)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:CR4Pzyo7QkGmHEc2NctOeQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:lPWgFxxstEWZ20ow0Si71w", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.MemoryCache_Initialize$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.clientActionProxies.memoryCache_Initialize$Action = function (memoryCacheTypeIdIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.memoryCache_Initialize$Action.bind(controller, memoryCacheTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("MemoryClientCache.controller$MemoryCache_Initialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var USER_ID = "__USERID__";

if (!window.memoryCache) {
    var memoryCache = {};
    memoryCache[USER_ID] = $parameters.UserId;

    window.memoryCache = memoryCache;

    var expiry = function() {
        var now = new Date();
        var caches = Object.entries(memoryCache);
        
        for (var i = 0; i < caches.length; i++) {
            if (caches[i][0] != USER_ID) {
                var cache = caches[i][1];
                var entries = cache.entries();
                
                for (var iter = entries.next(); !iter.done; iter = entries.next()) {
                    var entry = iter.value[1];
                    if (entry.expires < now) {
                        cache.delete(iter.value[0]);
                    }
                }
            }
        }

    };
    
    // Collect expired cache entries
    window.setInterval(expiry, 60*1000);
}


if (window.memoryCache[USER_ID] != $parameters.UserId) {
    var memoryCache = window.memoryCache;

    // Empty the cache
    var caches = Object.entries(memoryCache);
    for (var i = 0; i < caches.length; i++) {
        if (caches[i][0] != USER_ID) {
            delete memoryCache[caches[i][0]];
        }
    }

    memoryCache[USER_ID] = $parameters.UserId;
}


if (!window.memoryCache[$parameters.Type]) {
    var cache = new Map();
    cache.queue = new Map();

    window.memoryCache[$parameters.Type] = cache;
}
};
});

define("MemoryClientCache.controller$MemoryCache_Put", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$MemoryCache_Put.PutIntoCacheJS", "MemoryClientCache.controller$MemoryCache_Initialize"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController, MemoryClientCache_controller_MemoryCache_Put_PutIntoCacheJS) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.memoryCache_Put$Action = function (memoryCacheTypeIdIn, cacheKeyIn, objectIn, expireDateTimeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.MemoryCache_Put$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
vars.value.cacheKeyInLocal = cacheKeyIn;
vars.value.objectInLocal = objectIn;
vars.value.expireDateTimeInLocal = expireDateTimeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:TVFurzM960u4OjyF1VJ8Gg:/ClientActionFlows.TVFurzM960u4OjyF1VJ8Gg:Y7Z+0gjHeLNbYpwwJpLnGA", "MemoryClientCache", "MemoryCache_Put", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:DPQcevjaMUCzT5q94tGq3g", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:1zY3JHRPyU+AkfKvZcxx1w", callContext.id);
// Execute Action: MemoryCache_Initialize
MemoryClientCacheController.default.memoryCache_Initialize$Action(vars.value.memoryCacheTypeIdInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:hCmvv0rok0Gj7f5TntbZig", callContext.id);
controller.safeExecuteJSNode(MemoryClientCache_controller_MemoryCache_Put_PutIntoCacheJS, "PutIntoCache", "MemoryCache_Put", {
CacheKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheKeyInLocal, OS.DataTypes.DataTypes.Text),
ExpireDateTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.expireDateTimeInLocal, OS.DataTypes.DataTypes.DateTime),
Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.memoryCacheTypeIdInLocal, OS.DataTypes.DataTypes.Text),
Object: OS.DataConversion.JSNodeParamConverter.to(vars.value.objectInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:3bbIfz0BZkycHhCjKXP9UA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:TVFurzM960u4OjyF1VJ8Gg", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.MemoryCache_Put$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Object",
attrName: "objectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "ExpireDateTime",
attrName: "expireDateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
MemoryClientCacheController.default.clientActionProxies.memoryCache_Put$Action = function (memoryCacheTypeIdIn, cacheKeyIn, objectIn, expireDateTimeIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
objectIn = (objectIn === undefined) ? null : objectIn;
expireDateTimeIn = (expireDateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : expireDateTimeIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.memoryCache_Put$Action.bind(controller, memoryCacheTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(objectIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(expireDateTimeIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("MemoryClientCache.controller$MemoryCache_Put.PutIntoCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var MULTIPLE_CACHE_SEPARATOR = "_";
var cacheResultsName = $parameters.Type;

if(cacheResultsName.includes(MULTIPLE_CACHE_SEPARATOR)) {
    var baseName = cacheResultsName.split(MULTIPLE_CACHE_SEPARATOR)[0];
    cacheResultsName = baseName + MULTIPLE_CACHE_SEPARATOR + 0;
}

window.memoryCache[cacheResultsName].set(
    $parameters.CacheKey,
    {
        key: $parameters.CacheKey,
        value: $parameters.Object,
        expires: $parameters.ExpireDateTime
    }
);
};
});

define("MemoryClientCache.controller$MemoryCache_QueueResolution", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$MemoryCache_QueueResolution.QueueJS", "MemoryClientCache.model$MemoryCacheResultRec", "MemoryClientCache.controller$CacheMissResult", "MemoryClientCache.controller$MemoryCache_Put", "MemoryClientCache.controller$NewCacheKeysArray"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController, MemoryClientCache_controller_MemoryCache_QueueResolution_QueueJS) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.memoryCache_QueueResolution$Action = function (memoryCacheTypeIdIn, cacheKeyIn, cacheTimeToLiveSecondsIn, cacheTimeoutSecondsIn, getObjectCallbackIn, getObjectBulkCallbackIn, resultCallbackIn, failureCallbackIn, queueTresholdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.MemoryCache_QueueResolution$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
vars.value.cacheKeyInLocal = cacheKeyIn;
vars.value.cacheTimeToLiveSecondsInLocal = cacheTimeToLiveSecondsIn;
vars.value.cacheTimeoutSecondsInLocal = cacheTimeoutSecondsIn;
vars.value.getObjectCallbackInLocal = getObjectCallbackIn;
vars.value.getObjectBulkCallbackInLocal = getObjectBulkCallbackIn;
vars.value.resultCallbackInLocal = resultCallbackIn;
vars.value.failureCallbackInLocal = failureCallbackIn;
vars.value.queueTresholdInLocal = queueTresholdIn;
var queueJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.MemoryCache_QueueResolution$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.queueJSResult = queueJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:93LkSyGePkWbDCMLdxzVBA:/ClientActionFlows.93LkSyGePkWbDCMLdxzVBA:kFZCpnGTQhmmeFuAp_NLgA", "MemoryClientCache", "MemoryCache_QueueResolution", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:spWAjUwm_0mGUxTw5Evbrg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:6n_240KxqEWKQ1Z9gfgdog", callContext.id);
queueJSResult.value = controller.safeExecuteJSNode(MemoryClientCache_controller_MemoryCache_QueueResolution_QueueJS, "Queue", "MemoryCache_QueueResolution", {
FailureCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.failureCallbackInLocal, OS.DataTypes.DataTypes.Object),
CacheTimeoutSeconds: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheTimeoutSecondsInLocal, OS.DataTypes.DataTypes.Integer),
GetObjectCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.getObjectCallbackInLocal, OS.DataTypes.DataTypes.Object),
QueueTreshold: OS.DataConversion.JSNodeParamConverter.to(vars.value.queueTresholdInLocal, OS.DataTypes.DataTypes.LongInteger),
Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.memoryCacheTypeIdInLocal, OS.DataTypes.DataTypes.Text),
ResultCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.resultCallbackInLocal, OS.DataTypes.DataTypes.Object),
CacheTimeToLiveSeconds: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheTimeToLiveSecondsInLocal, OS.DataTypes.DataTypes.Integer),
GetObjectBulkCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.getObjectBulkCallbackInLocal, OS.DataTypes.DataTypes.Object),
CacheKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheKeyInLocal, OS.DataTypes.DataTypes.Text),
DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("MemoryClientCache.MemoryCache_QueueResolution$queueJSResult"))();
jsNodeResult.destroyCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DestroyCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
CacheMissResult: MemoryClientCacheController.default.getClientActionProxies(controller).cacheMissResult$Action,
MemoryCache_Put: MemoryClientCacheController.default.getClientActionProxies(controller).memoryCache_Put$Action,
NewCacheKeysArray: MemoryClientCacheController.default.getClientActionProxies(controller).newCacheKeysArray$Action
}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:Bq_PJEnZvUqrBMt3_RzgIQ", callContext.id);
// DestroyCallback = Queue.DestroyCallback
outVars.value.destroyCallbackOut = queueJSResult.value.destroyCallbackOut;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:mar7VuMzBU+q+6LCKUYZPQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:93LkSyGePkWbDCMLdxzVBA", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.MemoryCache_QueueResolution$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheTimeToLiveSeconds",
attrName: "cacheTimeToLiveSecondsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CacheTimeoutSeconds",
attrName: "cacheTimeoutSecondsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "GetObjectCallback",
attrName: "getObjectCallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "GetObjectBulkCallback",
attrName: "getObjectBulkCallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "ResultCallback",
attrName: "resultCallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "FailureCallback",
attrName: "failureCallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "QueueTreshold",
attrName: "queueTresholdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.MemoryCache_QueueResolution$queueJSResult", [{
name: "DestroyCallback",
attrName: "destroyCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.MemoryCache_QueueResolution$outVars", [{
name: "DestroyCallback",
attrName: "destroyCallbackOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
MemoryClientCacheController.default.clientActionProxies.memoryCache_QueueResolution$Action = function (memoryCacheTypeIdIn, cacheKeyIn, cacheTimeToLiveSecondsIn, cacheTimeoutSecondsIn, getObjectCallbackIn, getObjectBulkCallbackIn, resultCallbackIn, failureCallbackIn, queueTresholdIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
cacheTimeToLiveSecondsIn = (cacheTimeToLiveSecondsIn === undefined) ? 0 : cacheTimeToLiveSecondsIn;
cacheTimeoutSecondsIn = (cacheTimeoutSecondsIn === undefined) ? 0 : cacheTimeoutSecondsIn;
getObjectCallbackIn = (getObjectCallbackIn === undefined) ? null : getObjectCallbackIn;
getObjectBulkCallbackIn = (getObjectBulkCallbackIn === undefined) ? null : getObjectBulkCallbackIn;
resultCallbackIn = (resultCallbackIn === undefined) ? null : resultCallbackIn;
failureCallbackIn = (failureCallbackIn === undefined) ? null : failureCallbackIn;
queueTresholdIn = (queueTresholdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : queueTresholdIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.memoryCache_QueueResolution$Action.bind(controller, memoryCacheTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(cacheTimeToLiveSecondsIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(cacheTimeoutSecondsIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(getObjectCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(getObjectBulkCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(resultCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(failureCallbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(queueTresholdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(actionResults.destroyCallbackOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("MemoryClientCache.controller$MemoryCache_QueueResolution.QueueJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var destroyed = false;

var onResolve = function(object, cacheResult) {
    if (!destroyed) {
        $parameters.ResultCallback(object, cacheResult);
    }
};

var onFailure = function(error) {
    if (!destroyed && $parameters.FailureCallback) {
        $parameters.FailureCallback(error, error.message);
    }
};


// Check if the CacheKey is already present in the cache
var queue = window.memoryCache[$parameters.Type].queue;
var queued = queue.get($parameters.CacheKey);

if (queued) {
    // Resolution of this CacheKey was already queued, so we simply
    // add more callbacks which will be executed once the resolution completes.
    queued.onResolve.push(onResolve);
    queued.onFailure.push(onFailure);
} else {
    // Add the new CacheKey to the queue with the current callbacks
    queued = {
        key: $parameters.CacheKey,
        timeToLive: $parameters.CacheTimeToLiveSeconds,
        onResolve: [onResolve],
        onFailure: [onFailure]
    };
    
    queue.set(queued.key, queued);
}


// Check if the queued item has just been queued, or has timed out already
// without being resolved.
// In case a timeout has happened, then don't trust that the request
// will be fulfilled and start a new one with a new timeout.
var now = new Date();
if (!queued.timeout || queued.timeout < now) {
    queued.timeout = new Date();
    queued.timeout.setSeconds(queued.timeout.getSeconds() + $parameters.CacheTimeoutSeconds);



    // Populates the cache and invokes the callbacks when an object is resolved
    var resolved = function(queued, object, finished, finishedms) {
        queue.delete(queued.key);

        var cacheResult = $actions.CacheMissResult(queued.started, finished, finishedms - queued.startedms).Result;

        if (object) {
            var expiry = new Date();
            expiry.setSeconds(expiry.getSeconds() + queued.timeToLive);
            $actions.MemoryCache_Put($parameters.Type, queued.key, object, expiry);
        }

        var exception;
        for (var i = 0; i < queued.onResolve.length; i++) {
            try {
                queued.onResolve[i](object, cacheResult);
            } catch (ex) {
                exception = exception || ex;
            }
        }
        
        // Prevents resolving twice the same item
        queued.onResolve = [];
        queued.onFailure = [];
        
        if (exception) {
            // If any exception happens in a callback, throw it
            throw exception;
        }
    };
    
    // Invokes failure callbacks if an object resolution failed
    var failure = function(queued, error) {
        queue.delete(queued.key);

        var exception;
        for (var i = 0; i < queued.onFailure.length; i++) {
            try {
                queued.onFailure[i](error);
            } catch (ex) {
                exception = exception || ex;
            }
        }
        
        // Prevents resolving twice the same item
        queued.onResolve = [];
        queued.onFailure = [];
        
        if (exception) {
            // If any exception happens in a callback, throw it
            throw exception;
        }
    };
    
    
    


    // Resolves a single item.
    // In this mode, the callback receives a single CacheKey and returns
    // an object, or fails with an exception.
    var resolveSingle = function() {
        queued.started = new Date();
        queued.startedms = window.performance.now();

        // Promise success callback
        var finish = function(object) {
            if (object) {
                var entries = Object.entries(object);
                if (entries.length != 1) {
                    throw new Error("GetObjectCallback must return a single output parameter");
                }

                resolved(queued, entries[0][1], new Date(), window.performance.now());
            } else {
                resolved(queued, null, new Date(), window.performance.now());
            }
            
        };
        
        // Promise failure callback
        var fail = function(error) {
            failure(queued, error);
        };


        // This is a sensitive code that needs error handling all around it
        // to make sure that the queued item is deleted in any possible case.
        // If a queued item is left in the queue indefinitely,
        // then every future request for that same cache key will think that
        // a request is still in progress, and will wait for it indefinitely.

        try {

            var result = $parameters.GetObjectCallback(queued.key);
            if (result && result.then) {

                // Invoke finish() or fail() after GetObjectCallback() completes
                result.then(finish, fail)
                
                // In case the finish() success callback itself fails
                .catch(fail);

            } else {
                finish(result);
            }

        } catch (ex) {

            // In case creating the promise itself fails in GetObjectCallback()
            fail(ex);

        }
    };
    
    


    // Resolves all queued items in bulk.
    // In this mode, the callback receives a list of CacheKeys, and must
    // return a list containing a tuple CacheKey, Value, Error.
    var resolveBulk = function() {
        var toResolveKeys = $actions.NewCacheKeysArray().Result;

        // Data structure to limit at most 2 concurrent requests
        queue.pool = queue.pool || {
            promises: [Promise.resolve(), Promise.resolve()],
            available: [true, true],
            start: function(work) {
                var pool = this;

                // Check if there is any available slot in the pool
                var i = pool.available.indexOf(true);
                if (i >= 0) {

                    // Save a promise in the same slot
                    pool.available[i] = false;
                    pool.promises[i] = work().finally(function() {
                        // Free up the slot once the promise finishes
                        pool.available[i] = true;
                    });

                } else {

                    // Wait for the first of the promises to finish, and retry
                    Promise.race(pool.promises).finally(function() {
                        pool.start(work);
                    });

                }
            }
        };



        // Promise success callback
        var finish = function(result) {
            var finished = new Date();
            var finishedms = window.performance.now();

            if (!result) {
                // The callback can return undefined during an upgrade,
                // although we don't know how to reproduce it
                throw new Error("GetObjectBulkCallback did not return");
            }

            var entries = Object.entries(result);
            if (entries.length != 1) {
                throw new Error("GetObjectBulkCallback must return a single output parameter");
            }
            
            var resolvedItems = entries[0][1];
            if (!resolvedItems.getItem) {
                throw new Error("GetObjectBulkCallback must return a list");
            }


            var exception;
            for (var i = 0; i < resolvedItems.length; i++) {
                var item = resolvedItems.getItem(i);
                if (!item.cacheKeyAttr) {
                    throw new Error("GetObjectBulkCallback must return a list containing a CacheKey property, and optionally a Value and an Error properties");
                }
                
                var queued = queue.get(item.cacheKeyAttr);
                if (queued) {
                    if (!!item.errorAttr) {
                        try {
                            failure(queued, new Error(item.errorAttr));
                        } catch (ex) {
                            exception = exception || ex;
                        } 
                    } else {
                        try {
                            resolved(queued, item.valueAttr, finished, finishedms);
                        } catch (ex) {
                            exception = exception || ex;
                        }
                       
                    }
                }
            }


            // Double-check that every item in toResolveKeys was actually resolved
            for (var j = 0; j < toResolveKeys.length; j++) {
                var key = toResolveKeys.getItem(j);
                if (queue.has(key)) {
                    try {
                        failure(queue.get(key), new Error("Object " + key + " not resolved"));
                    } catch (ex) {
                        exception = exception || ex;
                    }
                }
            }
            
            if (exception) {
                // If any exception happens in a callback, throw it
                throw exception;
            }
        };
            
        // Promise failure callback
        var fail = function(error) {
            var exception;
            for (var j = 0; j < toResolveKeys.length; j++) {
                var key = toResolveKeys.getItem(j);
                try {
                    var queued = queue.get(key);
                    if (queued) {
                        failure(queued, error);
                    }
                } catch (ex) {
                    exception = exception || ex;
                }
            }
            
            if (exception) {
                // If any exception happens in a callback, throw it
                throw exception;
            }
        };


        // This is a sensitive code that needs error handling all around it
        // to make sure that the queued item is deleted in any possible case.
        // If a queued item is left in the queue indefinitely,
        // then every future request for that same cache key will think that
        // a request is still in progress, and will wait for it indefinitely.

        try {

            queue.pool.start(function() {
                var started = new Date();
                var startedms = window.performance.now();

                // Collect all items that are queued and the resolution hasn't started
                var entries = queue.entries();
                for (var iter = entries.next(); !iter.done; iter = entries.next()) {
                    var queued = iter.value[1];
                    var isWithinThreshold = $parameters.QueueTreshold <= 0 || toResolveKeys.length < $parameters.QueueTreshold;
                    if (!queued.started && isWithinThreshold) {
                        queued.started = started;
                        queued.startedms = startedms;
                        toResolveKeys.append(queued.key);
                    }
                }
        
                if (!toResolveKeys.length) {
                    // If there's nothing to resolve, that means that everything in
                    // the queue has started being resolved already
                    return Promise.resolve();
                }

                // Start the resolution of all collected items
                return $parameters.GetObjectBulkCallback(toResolveKeys)
                
                    // Invoke finish() or fail() after GetObjectCallback() completes
                    .then(finish, fail)
                    
                    // In case the finish() success callback itself fails
                    .catch(fail);

            });
            
        } catch (ex) {

            // In case creating the promise itself fails in GetObjectCallback()
            return Promise.reject(ex).catch(fail);

        }
    };



    // Decide which resolution method to use
    if ($parameters.GetObjectBulkCallback) {
        Promise.resolve().then(resolveBulk);
    } else {
        resolveSingle();
    }

}


$parameters.DestroyCallback = function() {
    destroyed = true;
};
};
});

define("MemoryClientCache.controller$MemoryCache_Remove", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$MemoryCache_Remove.RemoveFromCacheJS", "MemoryClientCache.controller$MemoryCache_Initialize"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController, MemoryClientCache_controller_MemoryCache_Remove_RemoveFromCacheJS) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.memoryCache_Remove$Action = function (memoryCacheTypeIdIn, cacheKeyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.MemoryCache_Remove$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
vars.value.cacheKeyInLocal = cacheKeyIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:6V+j5Q9iPEaxmW291kNpBQ:/ClientActionFlows.6V+j5Q9iPEaxmW291kNpBQ:K0DKWg7W_YeouQ62CNZ6Cg", "MemoryClientCache", "MemoryCache_Remove", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:dEmGwKeyAkSt46kGKqYsyQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:57aLIB88aky3aCCUGW24ag", callContext.id);
// Execute Action: MemoryCache_Initialize
MemoryClientCacheController.default.memoryCache_Initialize$Action(vars.value.memoryCacheTypeIdInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:HMzv7e8GI0mpB30ogJSImQ", callContext.id);
controller.safeExecuteJSNode(MemoryClientCache_controller_MemoryCache_Remove_RemoveFromCacheJS, "RemoveFromCache", "MemoryCache_Remove", {
Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.memoryCacheTypeIdInLocal, OS.DataTypes.DataTypes.Text),
CacheKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.cacheKeyInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:gjTFwsLOhUClGseVGhakgw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:6V+j5Q9iPEaxmW291kNpBQ", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.MemoryCache_Remove$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.clientActionProxies.memoryCache_Remove$Action = function (memoryCacheTypeIdIn, cacheKeyIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.memoryCache_Remove$Action.bind(controller, memoryCacheTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("MemoryClientCache.controller$MemoryCache_Remove.RemoveFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.memoryCache[$parameters.Type].delete($parameters.CacheKey);
};
});

define("MemoryClientCache.controller$MemoryCache_Remove_ByType", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$MemoryCache_Remove_ByType.RemoveFromCacheJS", "MemoryClientCache.controller$MemoryCache_Initialize"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController, MemoryClientCache_controller_MemoryCache_Remove_ByType_RemoveFromCacheJS) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.memoryCache_Remove_ByType$Action = function (memoryCacheTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.MemoryCache_Remove_ByType$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:Mem2as3TbU2Cox0ZDEvu5Q:/ClientActionFlows.Mem2as3TbU2Cox0ZDEvu5Q:kYQmSXPVLZOllJBeBBa2Ng", "MemoryClientCache", "MemoryCache_Remove_ByType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:O2Ujut6hi0eyjZB3_RhMzQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:PHwlyaxGu0e4X9d9Ozvj+A", callContext.id);
// Execute Action: MemoryCache_Initialize
MemoryClientCacheController.default.memoryCache_Initialize$Action(vars.value.memoryCacheTypeIdInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:T7cCsE+_mUuJtms9OH3GWw", callContext.id);
controller.safeExecuteJSNode(MemoryClientCache_controller_MemoryCache_Remove_ByType_RemoveFromCacheJS, "RemoveFromCache", "MemoryCache_Remove_ByType", {
Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.memoryCacheTypeIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:dc8VvYa0Q0eqitvTuHLuhg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:Mem2as3TbU2Cox0ZDEvu5Q", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.MemoryCache_Remove_ByType$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.clientActionProxies.memoryCache_Remove_ByType$Action = function (memoryCacheTypeIdIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.memoryCache_Remove_ByType$Action.bind(controller, memoryCacheTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("MemoryClientCache.controller$MemoryCache_Remove_ByType.RemoveFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.memoryCache[$parameters.Type].clear();
};
});

define("MemoryClientCache.controller$NewCacheKeysArray", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.newCacheKeysArray$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.NewCacheKeysArray$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:BHfToz1mGk6W9m6UrNAoTQ:/ClientActionFlows.BHfToz1mGk6W9m6UrNAoTQ:S97RG1+U4GHd282CVrI5Yg", "MemoryClientCache", "NewCacheKeysArray", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:nlUh_dGLbUeuNaouPec5WA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:mVwYHiKHRkuk4iJ5mc4z7g", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:BHfToz1mGk6W9m6UrNAoTQ", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.NewCacheKeysArray$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
MemoryClientCacheController.default.clientActionProxies.newCacheKeysArray$Action = function () {
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.newCacheKeysArray$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: actionResults.resultOut
};
});
};
});

define("MemoryClientCache.controller$PutCacheableObject", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$MemoryCache_Put"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.putCacheableObject$Action = function (memoryCacheTypeIdIn, cacheKeyIn, objectIn, cacheTimeToLiveSecondsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.PutCacheableObject$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
vars.value.cacheKeyInLocal = cacheKeyIn;
vars.value.objectInLocal = objectIn;
vars.value.cacheTimeToLiveSecondsInLocal = cacheTimeToLiveSecondsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:u7zApdvDXEqduae+hsawAw:/ClientActionFlows.u7zApdvDXEqduae+hsawAw:3jM4u64Ytt5tRA0n1toX3w", "MemoryClientCache", "PutCacheableObject", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:LQbLlrd2FkGdEJm_Hluivg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:44fPr73k0ka5c1qNCM2gwQ", callContext.id);
// Execute Action: MemoryCache_Put
MemoryClientCacheController.default.memoryCache_Put$Action(vars.value.memoryCacheTypeIdInLocal, vars.value.cacheKeyInLocal, vars.value.objectInLocal, OS.BuiltinFunctions.addSeconds(OS.BuiltinFunctions.currDateTime(), vars.value.cacheTimeToLiveSecondsInLocal), callContext);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:GsAHofQfNE+OCBpsqmkqNg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:u7zApdvDXEqduae+hsawAw", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.PutCacheableObject$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Object",
attrName: "objectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "CacheTimeToLiveSeconds",
attrName: "cacheTimeToLiveSecondsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
MemoryClientCacheController.default.clientActionProxies.putCacheableObject$Action = function (memoryCacheTypeIdIn, cacheKeyIn, objectIn, cacheTimeToLiveSecondsIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
objectIn = (objectIn === undefined) ? null : objectIn;
cacheTimeToLiveSecondsIn = (cacheTimeToLiveSecondsIn === undefined) ? 0 : cacheTimeToLiveSecondsIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.putCacheableObject$Action.bind(controller, memoryCacheTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(objectIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(cacheTimeToLiveSecondsIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("MemoryClientCache.controller$RemoveCacheableObject", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$MemoryCache_Remove"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.removeCacheableObject$Action = function (memoryCacheTypeIdIn, cacheKeyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.RemoveCacheableObject$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
vars.value.cacheKeyInLocal = cacheKeyIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:RWIg7InUpEKFyK6_U6ZYng:/ClientActionFlows.RWIg7InUpEKFyK6_U6ZYng:njKcDiXbZVQgAcWCZWKQpg", "MemoryClientCache", "RemoveCacheableObject", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:36nNkhZPhkijF0+_gODtwQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:+NkNv+ug50WVBhExoCMw6g", callContext.id);
// Execute Action: MemoryCache_Remove
MemoryClientCacheController.default.memoryCache_Remove$Action(vars.value.memoryCacheTypeIdInLocal, vars.value.cacheKeyInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:47yp3x4SPU2J0lqG0b0L9g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:RWIg7InUpEKFyK6_U6ZYng", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.RemoveCacheableObject$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.clientActionProxies.removeCacheableObject$Action = function (memoryCacheTypeIdIn, cacheKeyIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.removeCacheableObject$Action.bind(controller, memoryCacheTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("MemoryClientCache.controller$RemoveCacheableObject_ByType", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.controller$MemoryCache_Remove_ByType"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.removeCacheableObject_ByType$Action = function (memoryCacheTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.RemoveCacheableObject_ByType$vars"))());
vars.value.memoryCacheTypeIdInLocal = memoryCacheTypeIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:atPm0Zs7+U+hmJovkco0wQ:/ClientActionFlows.atPm0Zs7+U+hmJovkco0wQ:8MlXNzTeryy8kcpDK3+0xg", "MemoryClientCache", "RemoveCacheableObject_ByType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:Y7CdMxrgCECgLFYv9h5eDA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:VXdX7Bru9Um++k9rFvUtKA", callContext.id);
// Execute Action: MemoryCache_Remove_ByType
MemoryClientCacheController.default.memoryCache_Remove_ByType$Action(vars.value.memoryCacheTypeIdInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:83z02J7E0ECW_rMn+CMbuw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:atPm0Zs7+U+hmJovkco0wQ", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.RemoveCacheableObject_ByType$vars", [{
name: "MemoryCacheTypeId",
attrName: "memoryCacheTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
MemoryClientCacheController.default.clientActionProxies.removeCacheableObject_ByType$Action = function (memoryCacheTypeIdIn) {
memoryCacheTypeIdIn = (memoryCacheTypeIdIn === undefined) ? "" : memoryCacheTypeIdIn;
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.removeCacheableObject_ByType$Action.bind(controller, memoryCacheTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("MemoryClientCache.controller$UnlimitedTimeToLiveSeconds", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCacheController) {
var OS = OutSystems.Internal;
MemoryClientCacheController.default.unlimitedTimeToLiveSeconds$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemoryClientCache.UnlimitedTimeToLiveSeconds$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("ApIEtxBl80GCCfJCVzf1aA:9WO4s5HZyUe37XD+dWxvDg:/ClientActionFlows.9WO4s5HZyUe37XD+dWxvDg:n8ACLhvyawnTDYm8d9oEMg", "MemoryClientCache", "UnlimitedTimeToLiveSeconds", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:rAGri7bGPkOk1K13zEJoTQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:n2tuEV_SSUORi6X7KnO5ww", callContext.id);
// TimeToLiveSeconds = 604800
outVars.value.timeToLiveSecondsOut = 604800;
OutSystemsDebugger.handleBreakpoint("ApIEtxBl80GCCfJCVzf1aA:Sztb73nRWUS5VzeY76sOWg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ApIEtxBl80GCCfJCVzf1aA:9WO4s5HZyUe37XD+dWxvDg", callContext.id);
}

};
var controller = MemoryClientCacheController.default;
MemoryClientCacheController.default.constructor.registerVariableGroupType("MemoryClientCache.UnlimitedTimeToLiveSeconds$outVars", [{
name: "TimeToLiveSeconds",
attrName: "timeToLiveSecondsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
MemoryClientCacheController.default.clientActionProxies.unlimitedTimeToLiveSeconds$Action = function () {
return controller.executeActionInsideJSNode(MemoryClientCacheController.default.unlimitedTimeToLiveSeconds$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
TimeToLiveSeconds: OS.DataConversion.JSNodeParamConverter.to(actionResults.timeToLiveSecondsOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});

define("MemoryClientCache.controller", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.controller$debugger"], function (exports, OutSystems, MemoryClientCacheModel, MemoryClientCache_Controller_debugger) {
var OS = OutSystems.Internal;
var MemoryClientCacheController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return MemoryClientCacheController.default.defaultTimeout;
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
MemoryClientCacheController.default = new Controller(null, "MemoryClientCache");
});
define("MemoryClientCache.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"VMFMNxUdKE62IDk85Zma4g": {
getter: function (varBag, idService) {
return varBag.vars.value.keyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"D5jB_J4W3UuNuIfOz3uhSQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.keyPartOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EgY0aOuUNEeuxEDbrbUiKg": {
getter: function (varBag, idService) {
return varBag.encodeCacheKeyPartJSResult.value;
}
},
"0urh0HxDHE2OV9XZBtgwNg": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"M0gI+XWpt0yhl5nvLEbdag": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9hqzqGr24k6s5p7VhkoRxg": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheTimeToLiveSecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"_IuHQorNh06Z_ByNx7e+wQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheTimeoutSecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"pX08jjLK2UWwHUajnr770g": {
getter: function (varBag, idService) {
return varBag.vars.value.getObjectBulkCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"pzGI52dQl0KuvWAzVY2SIg": {
getter: function (varBag, idService) {
return varBag.vars.value.queueTresholdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"oP8eY3kYtEmi0782Dh8qCQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"x3Db30nGjEyqj_taTO0KPg": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheResultOut;
}
},
"CQjtRn1EHEymaQ7F3qGjcQ": {
getter: function (varBag, idService) {
return varBag.memoryCacheResultFromJSONVar.value;
}
},
"2JDXqMkCUkiSwrQ_aLtrdQ": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectInternalAsyncJSResult.value;
}
},
"zFAYWDVmXk2P1GTN1r9W5g": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TbWO2YPWgkSnvCOavJ3L7g": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"+quJrGmLD06_QR93+YquRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jGAZhGOzWkClbitj1oC5nQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"suRMwXYuI02V1g5S9cC7jA": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheTimeToLiveSecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"vp7YZRQ53UyaapgS64o5gA": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheTimeoutSecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"vO9EwdM1Zk6rElxfXIHBdg": {
getter: function (varBag, idService) {
return varBag.vars.value.getObjectCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"VoFGli1huk67FqO5FF8WUA": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheMissCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"b0KWZiB3VEWahP+rXFuIyw": {
getter: function (varBag, idService) {
return varBag.vars.value.queueTresholdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"u_XdX2kBe0m97qMqTv4f7g": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"ZepXNcACekOcNNTSYRugbQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheResultOut;
}
},
"YGVlbFHxPEe6AmHWwdDeSw": {
getter: function (varBag, idService) {
return varBag.memoryCacheResultFromJSONVar.value;
}
},
"vjCxx_FhA0C20+sQM78d0w": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectInternalAsyncJSResult.value;
}
},
"zNwAYC0yUEmOGtPA7RL5hw": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"66v8SZA4yEqzRBZebCxQuA": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"24cx8ODfe0WFMBzzHWpI_g": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheTimeToLiveSecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"xD4JnOEEvUea_HIhGF0bAw": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheTimeoutSecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"IhyTR1hB4UqlTrSEGJwI9Q": {
getter: function (varBag, idService) {
return varBag.vars.value.getObjectCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"VM9dKporLUqSI9Fapo42PQ": {
getter: function (varBag, idService) {
return varBag.vars.value.getObjectBulkCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"3JuXlmWjbEqCuu3+m5cMpw": {
getter: function (varBag, idService) {
return varBag.vars.value.resultCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"FfPGxJnAfEuoqleozgvFgA": {
getter: function (varBag, idService) {
return varBag.vars.value.failureCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"iAeor0dDP0y_MCBn8Jq_og": {
getter: function (varBag, idService) {
return varBag.vars.value.queueTresholdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Ae0hBCQ_U06F_qXg1sBLkw": {
getter: function (varBag, idService) {
return varBag.outVars.value.destroyCallbackOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"6n_240KxqEWKQ1Z9gfgdog": {
getter: function (varBag, idService) {
return varBag.queueJSResult.value;
}
},
"Rt5l8IU3OUO78NMR7+ILaA": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NedTkQkDP0K0HEWI1d4SIA": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Mc6p0cCcg0SHEnN+2kgBWw": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"+YnETxv0SUGYdTnY6w8Y0g": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheHitOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4tq4ygPXtEyn2uWxVU309Q": {
getter: function (varBag, idService) {
return varBag.memoryCache_GetVar.value;
}
},
"MVqnOMCaoEmd5EgfnsaiMA": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qYl8993sfUmYsJGbBKplTQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jPHTAUMYME+8ajU3IyyqdA": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheTimeToLiveSecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"XIbdRDszwUqWpjXzVF0E+Q": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheTimeoutSecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"P3cA5wHBIUCwLYtpHg26lQ": {
getter: function (varBag, idService) {
return varBag.vars.value.resultCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"bfd1cflLkkySejE2oBdlNQ": {
getter: function (varBag, idService) {
return varBag.vars.value.failureCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"JBIOBok7nECSPer3IQ1vBw": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheMissCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"iaMLNoA_9kyvSIv4Ttv0pg": {
getter: function (varBag, idService) {
return varBag.vars.value.getObjectCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Ss0o0VPAEkWCnclFY6k84w": {
getter: function (varBag, idService) {
return varBag.vars.value.getObjectBulkCallbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"eRpqtuSi5U6wmzDZwqXmlw": {
getter: function (varBag, idService) {
return varBag.vars.value.queueTresholdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"0UaJ8GGadkSUbKuq_lUm5Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.destroyCallbackOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"rhQtHfXpXUuvmBnalh8svQ": {
getter: function (varBag, idService) {
return varBag.memoryCache_QueueResolutionVar.value;
}
},
"+arCeCGw_EK9xKvvBrdPpA": {
getter: function (varBag, idService) {
return varBag.memoryCache_GetVar.value;
}
},
"0KhODgsSfEiL_13xloI8aw": {
getter: function (varBag, idService) {
return varBag.executeResultCallbackJSResult.value;
}
},
"LzWNiKj_LkSWj4BlYAvdbw": {
getter: function (varBag, idService) {
return varBag.executeCacheMissCallbackJSResult.value;
}
},
"nQsTo+6nCU2t5NA9cg2ehA": {
getter: function (varBag, idService) {
return varBag.executeMissResultCallbackJSResult.value;
}
},
"BGEKVDYvYUCb9EcFHB3fGg": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"T7cCsE+_mUuJtms9OH3GWw": {
getter: function (varBag, idService) {
return varBag.removeFromCacheJSResult.value;
}
},
"wnj5OYmeCkqQDgia0_Lztg": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6IcYW_R08UaC4dsXbKRCvw": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fyb4wHnmzkCnTUMqr3bWcg": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheHitOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"YFovWa6BaEWTiHY3_njY7A": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"OFBz7HC3kkWwi5FWsClgyQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.expireDateTimeOut;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"kPNS0Sl+ZUGS7TK+Q86S7g": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"nXOKre7TvUmncvWNmC9Jkg": {
getter: function (varBag, idService) {
return varBag.getFromCacheJSResult.value;
}
},
"SuRM6C7XiU2m4lkvn1AwBw": {
getter: function (varBag, idService) {
return varBag.getFromCache2JSResult.value;
}
},
"m7yMk000K0On9QaEaN9BjA": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
}
},
"wfJtdiH7ykmp+Gy3VLtqWg": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
}
},
"y1ejIo90nkykRukSBJsLLQ": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EyPHoubJkU2A1KwSYlPX+w": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aJh+y5499U21dHSmt6CpIg": {
getter: function (varBag, idService) {
return varBag.vars.value.objectInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"aH0qiG445UG61DNL0gWSLw": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheTimeToLiveSecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"+hMTa6f8rESqMuLOBtCE4g": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JWHP4Ci0X0avsFtxs1OqtQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ox4ogCKzxkqTBYRuo2rowg": {
getter: function (varBag, idService) {
return varBag.vars.value.objectInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"bhc7TqoG8Ue9kiSVmpkcCA": {
getter: function (varBag, idService) {
return varBag.vars.value.expireDateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"hCmvv0rok0Gj7f5TntbZig": {
getter: function (varBag, idService) {
return varBag.putIntoCacheJSResult.value;
}
},
"JTnS2giaEkWFhFc395_K5g": {
getter: function (varBag, idService) {
return varBag.outVars.value.timeToLiveSecondsOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"uQaI8HiMYEGEVsqWAQrIQA": {
getter: function (varBag, idService) {
return varBag.vars.value.startedInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"uZWWG8NbwE+Uy7_vw4tQlg": {
getter: function (varBag, idService) {
return varBag.vars.value.finishedInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"ZRW6gLIqP0iCU+mb6DvrQw": {
getter: function (varBag, idService) {
return varBag.vars.value.millisecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"UHLXV1yZZk+SP+rNCFHXzw": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
}
},
"K84MT3zDU0CW97cZVl7bUA": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Hu0I2kW0a0adlQCF7vXynQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"frmE+OpPnUmVY8qYAQskQw": {
getter: function (varBag, idService) {
return varBag.outVars.value.keyPartsOut;
}
},
"N6UQCxnR7kW2muF8GwC_4g": {
getter: function (varBag, idService) {
return varBag.keyPartsFromJSONVar.value;
}
},
"ZPw96dUsk0ikx6y2qHXilA": {
getter: function (varBag, idService) {
return varBag.decodeCacheKeyPartsJSResult.value;
}
},
"+S9e5uKWDEOpmy4KkwcI+A": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JBKsOLipMkyZIVOYqgcMTA": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HMzv7e8GI0mpB30ogJSImQ": {
getter: function (varBag, idService) {
return varBag.removeFromCacheJSResult.value;
}
},
"52Q69VZjeE6kS4lALf1+JA": {
getter: function (varBag, idService) {
return varBag.vars.value.memoryCacheTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vrb2xVsEdU291ObgHsz+fQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_x5yPzHmuEusuodIln_oRw": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
