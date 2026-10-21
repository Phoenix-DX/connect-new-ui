define("OutSystemsUI_2_23.Utilities.TouchEvents.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsBound", "isBoundVar", "IsBound", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("GestureObj", "gestureObjVar", "GestureObj", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("WidgetId", "widgetIdIn", "WidgetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_widgetIdInDataFetchStatus", "_widgetIdInDataFetchStatus", "_widgetIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("PreventDefaults", "preventDefaultsIn", "PreventDefaults", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_preventDefaultsInDataFetchStatus", "_preventDefaultsInDataFetchStatus", "_preventDefaultsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("WidgetId" in inputs) {
this.variables.widgetIdIn = inputs.WidgetId;
if("_widgetIdInDataFetchStatus" in inputs) {
this.variables._widgetIdInDataFetchStatus = inputs._widgetIdInDataFetchStatus;
}

}

if("PreventDefaults" in inputs) {
this.variables.preventDefaultsIn = inputs.PreventDefaults;
if("_preventDefaultsInDataFetchStatus" in inputs) {
this.variables._preventDefaultsInDataFetchStatus = inputs._preventDefaultsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Utilities.TouchEvents");
});
define("OutSystemsUI_2_23.Utilities.TouchEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$model", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$controller"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_model, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_controller) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
        function View() {
            var thisIsInstanceOfSuper = this instanceof _super;
            if (thisIsInstanceOfSuper == false) {
                return;
            }

            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "Utilities.TouchEvents";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.TouchTrack.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Utilities_TouchEvents_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Utilities_TouchEvents_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI_2_23.Utilities.TouchEvents.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$translationsResources", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$debugger", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$controller.OnDestroy.DestroyJS", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$controller.OnParametersChanged.SetPreventDefaultJS", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$controller.OnReady.BindEventsJS"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_TranslationsResources, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_Debugger, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_controller_OnDestroy_DestroyJS, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_controller_OnParametersChanged_SetPreventDefaultJS, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_controller_OnReady_BindEventsJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onStart$Action: function (xIn, yIn) {
xIn = (xIn === undefined) ? 0 : xIn;
yIn = (yIn === undefined) ? 0 : yIn;
return controller.executeActionInsideJSNode(controller._onStart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(xIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(yIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnStart");
},
onMove$Action: function (evtIn, xIn, yIn, offsetXIn, offsetYIn) {
evtIn = (evtIn === undefined) ? null : evtIn;
xIn = (xIn === undefined) ? 0 : xIn;
yIn = (yIn === undefined) ? 0 : yIn;
offsetXIn = (offsetXIn === undefined) ? 0 : offsetXIn;
offsetYIn = (offsetYIn === undefined) ? 0 : offsetYIn;
return controller.executeActionInsideJSNode(controller._onMove$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(evtIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(xIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(yIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(offsetXIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(offsetYIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnMove");
},
onEnd$Action: function (xIn, yIn, offsetXIn, offsetYIn, timeTakenIn) {
xIn = (xIn === undefined) ? 0 : xIn;
yIn = (yIn === undefined) ? 0 : yIn;
offsetXIn = (offsetXIn === undefined) ? 0 : offsetXIn;
offsetYIn = (offsetYIn === undefined) ? 0 : offsetYIn;
timeTakenIn = (timeTakenIn === undefined) ? 0 : timeTakenIn;
return controller.executeActionInsideJSNode(controller._onEnd$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(xIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(yIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(offsetXIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(offsetYIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(timeTakenIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnEnd");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_2_23_Utilities_TouchEvents_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onStart$Action = function (xIn, yIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnStart");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Utilities.TouchEvents.OnStart$vars"))());
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:hCXUJq1qukK2pq9Ffb3j3A:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.hCXUJq1qukK2pq9Ffb3j3A:eagctfl5VchCb8LyaVK7cw", "OutSystemsUI_2_23", "OnStart", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:+OK8IOTgbEOYuoxuKtBngw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:vQmVSezsQkSrNHKbRZlVDQ", callContext.id);
// Trigger Event: Start
return controller.start$Action(OS.BuiltinFunctions.integerToDecimal(vars.value.xInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.yInLocal), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:m6GVD8XxuECURTDnYVlqUQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:hCXUJq1qukK2pq9Ffb3j3A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:hCXUJq1qukK2pq9Ffb3j3A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Utilities.TouchEvents.OnStart$vars", [{
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:a0r6KRt8Q0uaqyWuFtd+DA:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.a0r6KRt8Q0uaqyWuFtd+DA:wcsr4erh0FIJl_cpV+xUrQ", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:WTlZZuqcb0mygZ6tNQGLZA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:40LPvOZvREeaoaf+TokBMg", callContext.id);
// IsBound = False
model.variables.isBoundVar = false;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:HacsT1m0ykm4_wV4LDzqIw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:a0r6KRt8Q0uaqyWuFtd+DA", callContext.id);
}

};
Controller.prototype._onEnd$Action = function (xIn, yIn, offsetXIn, offsetYIn, timeTakenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnEnd");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Utilities.TouchEvents.OnEnd$vars"))());
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
vars.value.timeTakenInLocal = timeTakenIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:Kys2RYoi7E++QxpdMMgS5w:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.Kys2RYoi7E++QxpdMMgS5w:Stl+Uas9OKpkKY8aMoIvhA", "OutSystemsUI_2_23", "OnEnd", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:BL0FJUqOMUSoQzuuLyLH1g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:VPhEXWQNHEisHevRGQ5kBQ", callContext.id);
// Trigger Event: End
return controller.end$Action(OS.BuiltinFunctions.integerToDecimal(vars.value.xInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.yInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.offsetYInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.timeTakenInLocal), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Rw8jqitCGkm8jMK7t6WrEQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:Kys2RYoi7E++QxpdMMgS5w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:Kys2RYoi7E++QxpdMMgS5w", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Utilities.TouchEvents.OnEnd$vars", [{
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "TimeTaken",
attrName: "timeTakenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:OVPjd802fUybQIYKQIaQtQ:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.OVPjd802fUybQIYKQIaQtQ:cqKQNmZyncq79jRPLT0b5w", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:v6HL2leBKEeh0GnyBmONSA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:F0i4BQTNj0yzHaxDSh3xog", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Utilities_TouchEvents_mvc_controller_OnDestroy_DestroyJS, "Destroy", "OnDestroy", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.gestureObjVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:yniy3So_IEeBQ4Nqecwvfg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:OVPjd802fUybQIYKQIaQtQ", callContext.id);
}

};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:oq8ceCPrtE24ioo6CpUNqg:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.oq8ceCPrtE24ioo6CpUNqg:auc+l44z4rBh1pWgRPmTfg", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:IXBG7KnH4kC47BrSaUR05w", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:VMh381GwykGIVlBLHebwmg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Utilities_TouchEvents_mvc_controller_OnParametersChanged_SetPreventDefaultJS, "SetPreventDefault", "OnParametersChanged", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.gestureObjVar, OS.DataTypes.DataTypes.Object),
Prevent: OS.DataConversion.JSNodeParamConverter.to(model.variables.preventDefaultsIn, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CrIVqbxKcUyDW0CsUrV52w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:oq8ceCPrtE24ioo6CpUNqg", callContext.id);
}

};
Controller.prototype._onMove$Action = function (evtIn, xIn, yIn, offsetXIn, offsetYIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnMove");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Utilities.TouchEvents.OnMove$vars"))());
vars.value.evtInLocal = evtIn;
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:7Fkow985f0Ce5WKoM5U_3Q:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.7Fkow985f0Ce5WKoM5U_3Q:xUTQkUUQHt4bsLC3i_Ah1A", "OutSystemsUI_2_23", "OnMove", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:cIdcNYM5LEu8oO5x31lzCg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:AsAvTfpnc02_plItbAViHw", callContext.id);
// Trigger Event: Move
return controller.move$Action(OS.BuiltinFunctions.integerToDecimal(vars.value.xInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.yInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.offsetYInLocal), vars.value.evtInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:lCdxfDx8fU6fmum1Z2l2tw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:7Fkow985f0Ce5WKoM5U_3Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:7Fkow985f0Ce5WKoM5U_3Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Utilities.TouchEvents.OnMove$vars", [{
name: "Evt",
attrName: "evtInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var bindEventsJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bindEventsJSResult = bindEventsJSResult;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:z0wM4695W0OvoAO8bzL_kg:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.z0wM4695W0OvoAO8bzL_kg:RQQy8wkvIZVjBYrEjFGV4A", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:hfiRRA7q6E2Bu2jQ1tHG4g", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:uO7V719jf0qCTEPy2+Z9uw", callContext.id);
bindEventsJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Utilities_TouchEvents_mvc_controller_OnReady_BindEventsJS, "BindEvents", "OnReady", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(model.variables.widgetIdIn, OS.DataTypes.DataTypes.Text),
isBound: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Obj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Utilities.TouchEvents.OnReady$bindEventsJSResult"))();
jsNodeResult.isBoundOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isBound, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.objOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Obj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OnStart: controller.clientActionProxies.onStart$Action,
OnMove: controller.clientActionProxies.onMove$Action,
OnEnd: controller.clientActionProxies.onEnd$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:UdT1HPBb7EuVBR6S9paVmw", callContext.id);
// IsBound = BindEvents.isBound
model.variables.isBoundVar = bindEventsJSResult.value.isBoundOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:UdT1HPBb7EuVBR6S9paVmw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// GestureObj = BindEvents.Obj
model.variables.gestureObjVar = bindEventsJSResult.value.objOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:kqNluviB20WE0SJdg5GE5A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:z0wM4695W0OvoAO8bzL_kg", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Utilities.TouchEvents.OnReady$bindEventsJSResult", [{
name: "isBound",
attrName: "isBoundOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Obj",
attrName: "objOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.onStart$Action = function (xIn, yIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onStart$Action, callContext, xIn, yIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onEnd$Action = function (xIn, yIn, offsetXIn, offsetYIn, timeTakenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onEnd$Action, callContext, xIn, yIn, offsetXIn, offsetYIn, timeTakenIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onMove$Action = function (evtIn, xIn, yIn, offsetXIn, offsetYIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onMove$Action, callContext, evtIn, xIn, yIn, offsetXIn, offsetYIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.start$Action = function () {
return Promise.resolve();
};
Controller.prototype.move$Action = function () {
return Promise.resolve();
};
Controller.prototype.end$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:_j+WNB+Er0ymD9g1Fl+Pmw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw:_sU6Z6zEdfa0yPg51D1SZg", "OutSystemsUI_2_23", "Utilities", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:XMPs97E4JU2VbUdQjC6zIA:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA:CMMueIUH_DhAwUQsq_vl_A", "OutSystemsUI_2_23", "TouchEvents", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:XMPs97E4JU2VbUdQjC6zIA", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:_j+WNB+Er0ymD9g1Fl+Pmw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/TouchEvents On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/TouchEvents On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/TouchEvents On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/TouchEvents On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return OutSystemsUI_2_23Controller.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUI_2_23LanguageResources);
});
define("OutSystemsUI_2_23.Utilities.TouchEvents.mvc$controller.OnDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.destroy();
};
});
define("OutSystemsUI_2_23.Utilities.TouchEvents.mvc$controller.OnParametersChanged.SetPreventDefaultJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.setPreventDefault($parameters.Prevent);
};
});
define("OutSystemsUI_2_23.Utilities.TouchEvents.mvc$controller.OnReady.BindEventsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var touchTrack = new TouchTrack();
$parameters.isBound = false;

var el = document.getElementById($parameters.WidgetId);

if (el) {
    touchTrack.init(el, $actions.OnStart, $actions.OnMove, $actions.OnEnd);
    $parameters.isBound = true;
}


$parameters.Obj = touchTrack;
};
});

define("OutSystemsUI_2_23.Utilities.TouchEvents.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"JvxaRML4nUmlXRdUvLQt_Q": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"OHcN4GW1Ukm0Vqa87Ju6gw": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"yB7kdtwtckykOST5H260pQ": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"jJd3Ov69PkGABjVw4lxTNg": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"sBBBUKq_0EyRJuvgCkQ_VA": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"oRxdfy9UR02NXcWOpNS7QQ": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"IN88pqNP4kGorcQtgCObUg": {
getter: function (varBag, idService) {
return varBag.vars.value.timeTakenInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"F0i4BQTNj0yzHaxDSh3xog": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"VMh381GwykGIVlBLHebwmg": {
getter: function (varBag, idService) {
return varBag.setPreventDefaultJSResult.value;
}
},
"v_K1qvzHGUWxiwizNVlj7w": {
getter: function (varBag, idService) {
return varBag.vars.value.evtInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"cMirC5tkWEiUNMQORBFfNg": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"bKF6ZYfYHUCVuY2EyaEiuw": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"sWcfOaAYKU+9xVUgowcraw": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"7PoUbe5l5E+nhgGuImu9xQ": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"uO7V719jf0qCTEPy2+Z9uw": {
getter: function (varBag, idService) {
return varBag.bindEventsJSResult.value;
}
},
"g3XPNRlwqUmGn8igvIwN7Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isBoundVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HODMFqGIxEOSn+OyEVEtvA": {
getter: function (varBag, idService) {
return varBag.model.variables.gestureObjVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"sEjWjg2rqkql9BYBupPwqg": {
getter: function (varBag, idService) {
return varBag.model.variables.widgetIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PmJj1RwC1kaN39+QXMtE4A": {
getter: function (varBag, idService) {
return varBag.model.variables.preventDefaultsIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Utilities.TouchEvents.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
