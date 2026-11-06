define("OutSystemsUI_2_23.Content.Tooltip.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model$Tooltip_InternalConfigRec", "OutSystemsUI_2_23.controller$TooltipRegisterCallback", "OutSystemsUI_2_23.controller$TooltipInitialize", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$TooltipChangeTextProperty", "OutSystemsUI_2_23.controller$TooltipChangeBooleanProperty", "OutSystemsUI_2_23.controller$IsPhone", "OutSystemsUI_2_23.controller$TooltipDestroy", "OutSystemsUI_2_23.controller$TooltipCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Tooltip_InternalConfigRec());
}, false, OutSystemsUI_2_23Model.Tooltip_InternalConfigRec), 
this.attr("Position", "positionIn", "Position", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.position.right;
}, false), 
this.attr("_positionInDataFetchStatus", "_positionInDataFetchStatus", "_positionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("StartsOpen", "startsOpenIn", "StartsOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Trigger", "triggerIn", "Trigger", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.trigger.onHover;
}, false), 
this.attr("_triggerInDataFetchStatus", "_triggerInDataFetchStatus", "_triggerInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("Position" in inputs) {
this.variables.positionIn = inputs.Position;
if("_positionInDataFetchStatus" in inputs) {
this.variables._positionInDataFetchStatus = inputs._positionInDataFetchStatus;
}

}

if("StartsOpen" in inputs) {
this.variables.startsOpenIn = inputs.StartsOpen;
if("_startsOpenInDataFetchStatus" in inputs) {
this.variables._startsOpenInDataFetchStatus = inputs._startsOpenInDataFetchStatus;
}

}

if("Trigger" in inputs) {
this.variables.triggerIn = inputs.Trigger;
if("_triggerInDataFetchStatus" in inputs) {
this.variables._triggerInDataFetchStatus = inputs._triggerInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Content.Tooltip");
});
define("OutSystemsUI_2_23.Content.Tooltip.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.Tooltip.mvc$model", "OutSystemsUI_2_23.Content.Tooltip.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$Tooltip_InternalConfigRec", "OutSystemsUI_2_23.controller$TooltipRegisterCallback", "OutSystemsUI_2_23.controller$TooltipInitialize", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$TooltipChangeTextProperty", "OutSystemsUI_2_23.controller$TooltipChangeBooleanProperty", "OutSystemsUI_2_23.controller$IsPhone", "OutSystemsUI_2_23.controller$TooltipDestroy", "OutSystemsUI_2_23.controller$TooltipCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_Tooltip_mvc_model, OutSystemsUI_2_23_Content_Tooltip_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.Tooltip";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js", "scripts/OutSystemsUI_2_23.FloatingUICore.js", "scripts/OutSystemsUI_2_23.FloatingUIDom.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Content_Tooltip_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Content_Tooltip_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
name: model.variables.internal_ConfigsVar.uniqueIdAttr
},
style: "osui-tooltip",
visible: true,
_idProps: {
service: idService,
name: "TooltipWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "osui-tooltip__content",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-uniqueid": model.variables.internal_ConfigsVar.uniqueIdAttr
},
style: "osui-tooltip__balloon-wrapper osui-balloon",
visible: true,
_idProps: {
service: idService,
name: "TooltipBallonWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tooltip,
gridProperties: {
classes: "OSInline"
},
style: "osui-tooltip__balloon-wrapper__balloon",
_idProps: {
service: idService,
name: "Tooltip"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-tooltip__balloon-arrow",
visible: true,
_idProps: {
service: idService,
name: "ArrowElement"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI_2_23.Content.Tooltip.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Content.Tooltip.mvc$translationsResources", "OutSystemsUI_2_23.Content.Tooltip.mvc$debugger", "OutSystemsUI_2_23.Content.Tooltip.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI_2_23.model$Tooltip_InternalConfigRec", "OutSystemsUI_2_23.controller$TooltipRegisterCallback", "OutSystemsUI_2_23.controller$TooltipInitialize", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$TooltipChangeTextProperty", "OutSystemsUI_2_23.controller$TooltipChangeBooleanProperty", "OutSystemsUI_2_23.controller$IsPhone", "OutSystemsUI_2_23.controller$TooltipDestroy", "OutSystemsUI_2_23.controller$TooltipCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Content_Tooltip_mvc_TranslationsResources, OutSystemsUI_2_23_Content_Tooltip_mvc_Debugger, OutSystemsUI_2_23_Content_Tooltip_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
initializedHandler$Action: function (tooltipIdIn) {
tooltipIdIn = (tooltipIdIn === undefined) ? "" : tooltipIdIn;
return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tooltipIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "InitializedHandler");
},
onToggleHandler$Action: function (tooltipIdIn, isOpenedIn) {
tooltipIdIn = (tooltipIdIn === undefined) ? "" : tooltipIdIn;
isOpenedIn = (isOpenedIn === undefined) ? false : isOpenedIn;
return controller.executeActionInsideJSNode(controller._onToggleHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tooltipIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isOpenedIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnToggleHandler");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_2_23_Content_Tooltip_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._registerCallbacks$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RegisterCallbacks");
callContext = controller.callContext(callContext);
var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCallbackHandlersJSResult = getCallbackHandlersJSResult;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:b9toGOe8tEG6r2Ydz92_Ow:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.7kE2KI02okOiDk_Efdhp+w/ClientActions.b9toGOe8tEG6r2Ydz92_Ow:YtD+bBCHNfZpI6gqzHJcuA", "OutSystemsUI_2_23", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:l3aEug5u3k2GsIG2vz5OPg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Q075ZOsRekqbe7jOa5cJ8w", callContext.id);
getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_Tooltip_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
OnToggle: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.Tooltip.RegisterCallbacks$getCallbackHandlersJSResult"))();
jsNodeResult.onToggleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnToggle, OS.DataTypes.DataTypes.Object);
jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
InitializedHandler: controller.clientActionProxies.initializedHandler$Action,
OnToggleHandler: controller.clientActionProxies.onToggleHandler$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:26n3QsAJwk2A08m3YlEDJQ", callContext.id);
// Execute Action: RegisterOnInitialize
OutSystemsUI_2_23Controller.default.tooltipRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Initialized", getCallbackHandlersJSResult.value.initializedOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:OmRd7+iP8k+rVJj1gOdwaA", callContext.id);
// Execute Action: RegisterOnToggle
OutSystemsUI_2_23Controller.default.tooltipRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "OnToggle", getCallbackHandlersJSResult.value.onToggleOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:4XbHW6cPvkqDHN7_gABnnA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:b9toGOe8tEG6r2Ydz92_Ow", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.Tooltip.RegisterCallbacks$getCallbackHandlersJSResult", [{
name: "OnToggle",
attrName: "onToggleOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Initialized",
attrName: "initializedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._initializedHandler$Action = function (tooltipIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InitializedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.Tooltip.InitializedHandler$vars"))());
vars.value.tooltipIdInLocal = tooltipIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:ToiZNAbtwUKpjTU5wJmGew:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.7kE2KI02okOiDk_Efdhp+w/ClientActions.ToiZNAbtwUKpjTU5wJmGew:2D+ezunbzphryi4WcQgikg", "OutSystemsUI_2_23", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:s1AeMu91X0yBW1PaNKkKfQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:nCY44krQh0Wqtg4FtMgshQ", callContext.id);
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.tooltipIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:oa21mD6p10K4Z8CqMhCF4A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:ToiZNAbtwUKpjTU5wJmGew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:ToiZNAbtwUKpjTU5wJmGew", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.Tooltip.InitializedHandler$vars", [{
name: "TooltipId",
attrName: "tooltipIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:7Y8eREcdAkWBAyPrY8DEQQ:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.7kE2KI02okOiDk_Efdhp+w/ClientActions.7Y8eREcdAkWBAyPrY8DEQQ:QR0Yqs2tnR4Nd3OxSE302w", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:G10cH+nR2U+otvRAzEoRLg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DMQTV_JoMkOYMl3yavc3Bw", callContext.id);
// Execute Action: TooltipInitialize
OutSystemsUI_2_23Controller.default.tooltipInitialize$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:6s6ikfg0e0W+9RbWEkn2+g", callContext.id);
// Execute Action: LogEnd
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Tooltip created", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Vb5man9g90WEIZq6P2TJxA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:7Y8eREcdAkWBAyPrY8DEQQ", callContext.id);
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:SL7SURQJiEGrvqqwh7LFiw:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.7kE2KI02okOiDk_Efdhp+w/ClientActions.SL7SURQJiEGrvqqwh7LFiw:EQ7+ZSEVYr9OGPnMVFbfLw", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:RKfiq5e0kEiWtkVIKcaFfg", callContext.id);
// Position?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:fYPos270iUuwCfOxZdXFRg", callContext.id) && ((model.variables.positionIn) !== (model.variables.internal_ConfigsVar.positionAttr)))) {
// Set Position
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:rgkWw18fpEao7VytUleHUw", callContext.id);
// Internal_Configs.Position = Position
model.variables.internal_ConfigsVar.positionAttr = model.variables.positionIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:GLd7uRERmU+lgF_Rs3scFA", callContext.id);
// Execute Action: Update_Position
OutSystemsUI_2_23Controller.default.tooltipChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Position", model.variables.internal_ConfigsVar.positionAttr, callContext);
}

// StartVisible?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:xCqll34NuEuNrlObJcVXlA", callContext.id) && ((model.variables.startsOpenIn) !== (model.variables.internal_ConfigsVar.startVisibleAttr)))) {
// Set StartVisible
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:YKrb7YCrdEi7sTJOpxc94w", callContext.id);
// Internal_Configs.StartVisible = StartsOpen
model.variables.internal_ConfigsVar.startVisibleAttr = model.variables.startsOpenIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Wjg+2ycJM0SAignZRhKVfg", callContext.id);
// Execute Action: Update_StartVisible
OutSystemsUI_2_23Controller.default.tooltipChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "StartVisible", model.variables.internal_ConfigsVar.startVisibleAttr, callContext);
}

// IsHover?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Zf2zBpAUPU+wag+JOardtg", callContext.id) && ((((model.variables.triggerIn === OutSystemsUI_2_23Model.staticEntities.trigger.onHover) || (model.variables.triggerIn === OS.BuiltinFunctions.nullTextIdentifier()))) !== (model.variables.internal_ConfigsVar.isHoverAttr)))) {
// Set IsHover
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:+pXb+8z32ESz+I8FnwTCJQ", callContext.id);
// Internal_Configs.IsHover = If
model.variables.internal_ConfigsVar.isHoverAttr = ((OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUI_2_23Controller.default.isPhone$Action(callContext).isPhoneOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id)) ? (false) : (((model.variables.triggerIn === OutSystemsUI_2_23Model.staticEntities.trigger.onHover) || (model.variables.triggerIn === OS.BuiltinFunctions.nullTextIdentifier()))));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3g_QawI9hE2v_fjt_BBK3g", callContext.id);
// Execute Action: Update_IsHover
OutSystemsUI_2_23Controller.default.tooltipChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "IsHover", model.variables.internal_ConfigsVar.isHoverAttr, callContext);
}

// ExtendedClass?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:q2JSwsy_SkuRDK4nJLdA0g", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internal_ConfigsVar.extendedClassAttr)))) {
// Set ExtendedClass
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:S5UqT4lpSkG9TIqhQGqTkA", callContext.id);
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:9cBcJhpLOUagE3St9nXrYg", callContext.id);
// Execute Action: Update_ExtendedClass
OutSystemsUI_2_23Controller.default.tooltipChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internal_ConfigsVar.extendedClassAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Qssfy_g9ukm8ji9LTW3wlw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Qssfy_g9ukm8ji9LTW3wlw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:SL7SURQJiEGrvqqwh7LFiw", callContext.id);
}

};
Controller.prototype._onToggleHandler$Action = function (tooltipIdIn, isOpenedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnToggleHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.Tooltip.OnToggleHandler$vars"))());
vars.value.tooltipIdInLocal = tooltipIdIn;
vars.value.isOpenedInLocal = isOpenedIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:weUjxfbziUmetnZ78bi_mQ:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.7kE2KI02okOiDk_Efdhp+w/ClientActions.weUjxfbziUmetnZ78bi_mQ:ZtpiZp9pxhKH14+GRn8ghw", "OutSystemsUI_2_23", "OnToggleHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2jSjEkgpmk+pSImm9UW+ow", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Y2u9eSFKlEi+Uj5MgOMb1g", callContext.id);
// Trigger Event: OnToggle
return controller.onToggle$Action(vars.value.tooltipIdInLocal, vars.value.isOpenedInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3gf6WwE8a02CfRSOcS_u7w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:weUjxfbziUmetnZ78bi_mQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:weUjxfbziUmetnZ78bi_mQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.Tooltip.OnToggleHandler$vars", [{
name: "TooltipId",
attrName: "tooltipIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsOpened",
attrName: "isOpenedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:YEgO2U3N502xxvZDtyoUfw:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.7kE2KI02okOiDk_Efdhp+w/ClientActions.YEgO2U3N502xxvZDtyoUfw:KSjfganaWrs2_mGDXRF9dg", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:LQfu8wkwz0e+Lo2+K3uj5A", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:jOBtblxT_UGMCB1qE4FhDA", callContext.id);
// Execute Action: TooltipDestroy
OutSystemsUI_2_23Controller.default.tooltipDestroy$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:hlLZFKOJC0W0U2kd6qFq4g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:YEgO2U3N502xxvZDtyoUfw", callContext.id);
}

};
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.generateUniqueIdVar = generateUniqueIdVar;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:cmqM7NcG4ka8UEfDC1QEKw:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.7kE2KI02okOiDk_Efdhp+w/ClientActions.cmqM7NcG4ka8UEfDC1QEKw:+zxlkAZ5OQVIeEpC90k0+w", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:jq3v7OpkrEaWHNN+QyWunA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:MGHz8TJ1t0CnkSA6avedLQ", callContext.id);
// Execute Action: LogStart
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Going to create Tooltip", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:umRIj+GrAk+evDjpp0LSgQ", callContext.id);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUI_2_23Controller.default.generateUniqueId$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);

// Set Internal Configs
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:axgG2iLtlkSPbunW+KYXrQ", callContext.id);
// Internal_Configs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internal_ConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:axgG2iLtlkSPbunW+KYXrQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Internal_Configs.Position = Position
model.variables.internal_ConfigsVar.positionAttr = model.variables.positionIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:axgG2iLtlkSPbunW+KYXrQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Internal_Configs.StartVisible = StartsOpen
model.variables.internal_ConfigsVar.startVisibleAttr = model.variables.startsOpenIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:axgG2iLtlkSPbunW+KYXrQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Internal_Configs.IsHover = If
model.variables.internal_ConfigsVar.isHoverAttr = ((OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUI_2_23Controller.default.isPhone$Action(callContext).isPhoneOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id)) ? (false) : (((model.variables.triggerIn === OutSystemsUI_2_23Model.staticEntities.trigger.onHover) || (model.variables.triggerIn === OS.BuiltinFunctions.nullTextIdentifier()))));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:axgG2iLtlkSPbunW+KYXrQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:+2hMHDXzeEmN6IBnTB9eKg", callContext.id);
// Execute Action: TooltipCreate
OutSystemsUI_2_23Controller.default.tooltipCreate$Action(model.variables.internal_ConfigsVar, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:oaRVmozN8kOlnUrwUuDszw", callContext.id);
// Execute Action: RegisterCallbacks
controller._registerCallbacks$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:aFpWGmBfvUG+jUP_tdfbkg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:cmqM7NcG4ka8UEfDC1QEKw", callContext.id);
}

};

Controller.prototype.registerCallbacks$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);

};
Controller.prototype.initializedHandler$Action = function (tooltipIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, tooltipIdIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onToggleHandler$Action = function (tooltipIdIn, isOpenedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onToggleHandler$Action, callContext, tooltipIdIn, isOpenedIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onToggle$Action = function () {
return Promise.resolve();
};
Controller.prototype.initialized$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:I9m14fELdkiW+b3sqQ+k7Q:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q:AUjgzFQezVYFy+ax1Bu5WA", "OutSystemsUI_2_23", "Content", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:7kE2KI02okOiDk_Efdhp+w:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.7kE2KI02okOiDk_Efdhp+w:Rf2dAnMXRw4OGv2GFEA_eg", "OutSystemsUI_2_23", "Tooltip", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:7kE2KI02okOiDk_Efdhp+w", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:I9m14fELdkiW+b3sqQ+k7Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Tooltip On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Tooltip On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Tooltip On Destroy");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Tooltip On Parameters Changed");
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
define("OutSystemsUI_2_23.Content.Tooltip.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Initialized = $actions.InitializedHandler;
$parameters.OnToggle = $actions.OnToggleHandler;
};
});

define("OutSystemsUI_2_23.Content.Tooltip.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Q075ZOsRekqbe7jOa5cJ8w": {
getter: function (varBag, idService) {
return varBag.getCallbackHandlersJSResult.value;
}
},
"A7UP41du2EGar615lIKv5A": {
getter: function (varBag, idService) {
return varBag.vars.value.tooltipIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"y_B2WxhjFUGtVzCgyaqsUg": {
getter: function (varBag, idService) {
return varBag.vars.value.tooltipIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"J5itVfRg2kCVk0gHUT0Kng": {
getter: function (varBag, idService) {
return varBag.vars.value.isOpenedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"umRIj+GrAk+evDjpp0LSgQ": {
getter: function (varBag, idService) {
return varBag.generateUniqueIdVar.value;
}
},
"SZBdN6MHJkOHgPkaadtRaA": {
getter: function (varBag, idService) {
return varBag.model.variables.internal_ConfigsVar;
}
},
"YBSXPTxrF02mQhNpzoginw": {
getter: function (varBag, idService) {
return varBag.model.variables.positionIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GXeW74B3P06tcyRB+MZ7Hw": {
getter: function (varBag, idService) {
return varBag.model.variables.startsOpenIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0rwWApE7x0qR4OAgE1bfcA": {
getter: function (varBag, idService) {
return varBag.model.variables.triggerIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZfCwi+UgqUegg2R10wsxdg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FwDdiNqWT0OwkqIIcUnzqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TooltipWrapper"));
})(varBag.model, idService);
}
},
"s+6Wz9Irc0qghrUY4zX4ew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"8Y1jHq5owUG6MksH8aAdjw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TooltipBallonWrapper"));
})(varBag.model, idService);
}
},
"V_SVs8RFbEyHajer+l91oA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tooltip"));
})(varBag.model, idService);
}
},
"7hoQ2YUCB0+GxpT_ixZNwg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ArrowElement"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Content.Tooltip.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
