define("OutSystemsUI_2_23.Interaction.RangeSlider.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model$RangeSlider_InternalConfigRec", "OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRec", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$RangeSliderInitialize", "OutSystemsUI_2_23.controller$RangeSliderCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$RangeSliderDestroy", "OutSystemsUI_2_23.controller$RangeSliderRegisterCallback", "OutSystemsUI_2_23.controller$RangeSliderChangeDecimalProperty", "OutSystemsUI_2_23.controller$RangeSliderChangeBooleanProperty", "OutSystemsUI_2_23.controller$RangeSliderChangeTextProperty"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.RangeSlider_InternalConfigRec());
}, false, OutSystemsUI_2_23Model.RangeSlider_InternalConfigRec), 
this.attr("MinValue", "minValueIn", "MinValue", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, false), 
this.attr("_minValueInDataFetchStatus", "_minValueInDataFetchStatus", "_minValueInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MaxValue", "maxValueIn", "MaxValue", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, false), 
this.attr("_maxValueInDataFetchStatus", "_maxValueInDataFetchStatus", "_maxValueInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("StartingValue", "startingValueIn", "StartingValue", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, false), 
this.attr("_startingValueInDataFetchStatus", "_startingValueInDataFetchStatus", "_startingValueInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Orientation", "orientationIn", "Orientation", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.orientation.horizontal;
}, false), 
this.attr("_orientationInDataFetchStatus", "_orientationInDataFetchStatus", "_orientationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Size", "sizeIn", "Size", true, false, OS.DataTypes.DataTypes.Text, function () {
return "100%";
}, false), 
this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.RangeSliderOptionalConfigsRec());
}, false, OutSystemsUI_2_23Model.RangeSliderOptionalConfigsRec), 
this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("MinValue" in inputs) {
this.variables.minValueIn = inputs.MinValue;
if("_minValueInDataFetchStatus" in inputs) {
this.variables._minValueInDataFetchStatus = inputs._minValueInDataFetchStatus;
}

}

if("MaxValue" in inputs) {
this.variables.maxValueIn = inputs.MaxValue;
if("_maxValueInDataFetchStatus" in inputs) {
this.variables._maxValueInDataFetchStatus = inputs._maxValueInDataFetchStatus;
}

}

if("StartingValue" in inputs) {
this.variables.startingValueIn = inputs.StartingValue;
if("_startingValueInDataFetchStatus" in inputs) {
this.variables._startingValueInDataFetchStatus = inputs._startingValueInDataFetchStatus;
}

}

if("Orientation" in inputs) {
this.variables.orientationIn = inputs.Orientation;
if("_orientationInDataFetchStatus" in inputs) {
this.variables._orientationInDataFetchStatus = inputs._orientationInDataFetchStatus;
}

}

if("Size" in inputs) {
this.variables.sizeIn = inputs.Size;
if("_sizeInDataFetchStatus" in inputs) {
this.variables._sizeInDataFetchStatus = inputs._sizeInDataFetchStatus;
}

}

if("OptionalConfigs" in inputs) {
this.variables.optionalConfigsIn = inputs.OptionalConfigs;
if("_optionalConfigsInDataFetchStatus" in inputs) {
this.variables._optionalConfigsInDataFetchStatus = inputs._optionalConfigsInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Interaction.RangeSlider");
});
define("OutSystemsUI_2_23.Interaction.RangeSlider.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Interaction.RangeSlider.mvc$model", "OutSystemsUI_2_23.Interaction.RangeSlider.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$RangeSlider_InternalConfigRec", "OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRec", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$RangeSliderInitialize", "OutSystemsUI_2_23.controller$RangeSliderCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$RangeSliderDestroy", "OutSystemsUI_2_23.controller$RangeSliderRegisterCallback", "OutSystemsUI_2_23.controller$RangeSliderChangeDecimalProperty", "OutSystemsUI_2_23.controller$RangeSliderChangeBooleanProperty", "OutSystemsUI_2_23.controller$RangeSliderChangeTextProperty"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Interaction_RangeSlider_mvc_model, OutSystemsUI_2_23_Interaction_RangeSlider_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.RangeSlider";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.wNumb.js", "scripts/OutSystemsUI_2_23.NoUISlider.js", "scripts/OutSystemsUI_2_23.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_RangeSlider_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_RangeSlider_mvc_controller;
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
name: model.variables.internalConfigsVar.uniqueIdAttr
},
style: "osui-range-slider",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-range-slider__provider",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI_2_23.Interaction.RangeSlider.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Interaction.RangeSlider.mvc$translationsResources", "OutSystemsUI_2_23.Interaction.RangeSlider.mvc$debugger", "OutSystemsUI_2_23.Interaction.RangeSlider.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI_2_23.model$RangeSlider_InternalConfigRec", "OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRec", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$RangeSliderInitialize", "OutSystemsUI_2_23.controller$RangeSliderCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$RangeSliderDestroy", "OutSystemsUI_2_23.controller$RangeSliderRegisterCallback", "OutSystemsUI_2_23.controller$RangeSliderChangeDecimalProperty", "OutSystemsUI_2_23.controller$RangeSliderChangeBooleanProperty", "OutSystemsUI_2_23.controller$RangeSliderChangeTextProperty"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Interaction_RangeSlider_mvc_TranslationsResources, OutSystemsUI_2_23_Interaction_RangeSlider_mvc_Debugger, OutSystemsUI_2_23_Interaction_RangeSlider_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onValueChangeHandler$Action: function (rangeSliderIdIn, intervalStartIn) {
rangeSliderIdIn = (rangeSliderIdIn === undefined) ? "" : rangeSliderIdIn;
intervalStartIn = (intervalStartIn === undefined) ? "" : intervalStartIn;
return controller.executeActionInsideJSNode(controller._onValueChangeHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(rangeSliderIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(intervalStartIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnValueChangeHandler");
},
intializeHandler$Action: function (rangeSliderIdIn) {
rangeSliderIdIn = (rangeSliderIdIn === undefined) ? "" : rangeSliderIdIn;
return controller.executeActionInsideJSNode(controller._intializeHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(rangeSliderIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "IntializeHandler");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_2_23_Interaction_RangeSlider_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onValueChangeHandler$Action = function (rangeSliderIdIn, intervalStartIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnValueChangeHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.RangeSlider.OnValueChangeHandler$vars"))());
vars.value.rangeSliderIdInLocal = rangeSliderIdIn;
vars.value.intervalStartInLocal = intervalStartIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:tqlhE+sbCUS0foPLvSRfug:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.bKePE9Bd7E+ypfCtOjaagQ/ClientActions.tqlhE+sbCUS0foPLvSRfug:F1FkP+yY1lDSJvnco+z3VA", "OutSystemsUI_2_23", "OnValueChangeHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:LRBq6dAdT0qvgaDXOGZRXQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:mEBeJ4TVgEW_ydDFGPxh3w", callContext.id);
// Trigger Event: OnValueChange
return controller.onValueChange$Action(vars.value.rangeSliderIdInLocal, OS.BuiltinFunctions.textToDecimal(vars.value.intervalStartInLocal), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:i2yVPxDgd0GgeFk7UPXYMQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:tqlhE+sbCUS0foPLvSRfug", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:tqlhE+sbCUS0foPLvSRfug", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.RangeSlider.OnValueChangeHandler$vars", [{
name: "RangeSliderId",
attrName: "rangeSliderIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IntervalStart",
attrName: "intervalStartInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._intializeHandler$Action = function (rangeSliderIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("IntializeHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.RangeSlider.IntializeHandler$vars"))());
vars.value.rangeSliderIdInLocal = rangeSliderIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:iCbNY2G7yU220NI3uRtCNg:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.bKePE9Bd7E+ypfCtOjaagQ/ClientActions.iCbNY2G7yU220NI3uRtCNg:Du4J_rNBKyp1s6SXJormCQ", "OutSystemsUI_2_23", "IntializeHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:030vyz8cxU2VWXCCQDKQaA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:vCPXWom5x0OrepS1NL1Olw", callContext.id);
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.rangeSliderIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:r3Um4RP1AU+I458lrNjBTg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:iCbNY2G7yU220NI3uRtCNg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:iCbNY2G7yU220NI3uRtCNg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.RangeSlider.IntializeHandler$vars", [{
name: "RangeSliderId",
attrName: "rangeSliderIdInLocal",
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:JbywtKXG2E26n+Qy9CNE4Q:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.bKePE9Bd7E+ypfCtOjaagQ/ClientActions.JbywtKXG2E26n+Qy9CNE4Q:uKFw76PogRP2HlBBcZfiTg", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:KI2CNP_i6UKf3JHXdCOKiw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:I6dfhQBHGEmrDcwRCZiq1g", callContext.id);
// Execute Action: RangeSliderInitialize
OutSystemsUI_2_23Controller.default.rangeSliderInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pyEXbcsLqUm3whNM+XRxSQ", callContext.id);
// Execute Action: LogEnd
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Rating created", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:dEpUF2ArHkaULaHMSqxKpA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:JbywtKXG2E26n+Qy9CNE4Q", callContext.id);
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
var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.generateUniqueIdVar = generateUniqueIdVar;
varBag.serialize_configsVar = serialize_configsVar;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:Fvpw0mNkLkaPsjRlnbkgyg:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.bKePE9Bd7E+ypfCtOjaagQ/ClientActions.Fvpw0mNkLkaPsjRlnbkgyg:ohx5o6D426GRRIONnivY9Q", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:5O5cpzqAl0SXvs2qknZreA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:O4YsJFpVE06Gt_kfebfEnA", callContext.id);
// Execute Action: LogStart
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Going to create Rating", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:e5bjEq83cU+dkjsP9NWn8A", callContext.id);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUI_2_23Controller.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);

// Set Initial Configs
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id);
// InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// InternalConfigs.MinValue = MinValue
model.variables.internalConfigsVar.minValueAttr = model.variables.minValueIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// InternalConfigs.MaxValue = MaxValue
model.variables.internalConfigsVar.maxValueAttr = model.variables.maxValueIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// InternalConfigs.StartingValueFrom = StartingValue
model.variables.internalConfigsVar.startingValueFromAttr = model.variables.startingValueIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// InternalConfigs.Orientation = Orientation
model.variables.internalConfigsVar.orientationAttr = model.variables.orientationIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// InternalConfigs.Size = Size
model.variables.internalConfigsVar.sizeAttr = model.variables.sizeIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// InternalConfigs.ExtendedClass = ExtendedClass
model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// InternalConfigs.Step = OptionalConfigs.Step
model.variables.internalConfigsVar.stepAttr = model.variables.optionalConfigsIn.stepAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// InternalConfigs.ShowTickMarks = OptionalConfigs.ShowTickMarks
model.variables.internalConfigsVar.showTickMarksAttr = model.variables.optionalConfigsIn.showTickMarksAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// InternalConfigs.TickMarksInterval = OptionalConfigs.TickMarksInterval
model.variables.internalConfigsVar.tickMarksIntervalAttr = model.variables.optionalConfigsIn.tickMarksIntervalAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// InternalConfigs.IsDisabled = OptionalConfigs.IsDisabled
model.variables.internalConfigsVar.isDisabledAttr = model.variables.optionalConfigsIn.isDisabledAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "12");
// InternalConfigs.ShowFloatingLabel = OptionalConfigs.ShowFloatingLabel
model.variables.internalConfigsVar.showFloatingLabelAttr = model.variables.optionalConfigsIn.showFloatingLabelAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "13");
// InternalConfigs.InitialValueFrom = InternalConfigs.StartingValueFrom
model.variables.internalConfigsVar.initialValueFromAttr = model.variables.internalConfigsVar.startingValueFromAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CMqWvNsi1k6EoFdhdL7ajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "14");
// InternalConfigs.InitialValueTo = InternalConfigs.StartingValueTo
model.variables.internalConfigsVar.initialValueToAttr = model.variables.internalConfigsVar.startingValueToAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:I8IipbgAZEmwOhDPQm8Mjw", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar, true, false);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:yJdaBHH5V0esvPH5ceoRPw", callContext.id);
// Execute Action: RangeSliderCreate
OutSystemsUI_2_23Controller.default.rangeSliderCreate$Action(model.variables.internalConfigsVar.uniqueIdAttr, serialize_configsVar.value.jSONOut, OutSystemsUI_2_23Model.staticEntities.rangeSliderType.single, OutSystemsUI_2_23Model.staticEntities.rangeSliderProvider.noUiSlider, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:z01Ow9OTm02D1+29s+aUMw", callContext.id);
// Execute Action: RegisterCallbacks
controller._registerCallbacks$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:bMmhXU7u+U+HAo6ClXowzQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:Fvpw0mNkLkaPsjRlnbkgyg", callContext.id);
}

};
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:1c152KJRQ0iQXGKfuS8w1g:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.bKePE9Bd7E+ypfCtOjaagQ/ClientActions.1c152KJRQ0iQXGKfuS8w1g:Up_TMAgv0UO++MxCjG48fg", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qUhoZbvK3UaqK7E1DC1NnQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qM+K6wWOeEC5ScmgZyk18A", callContext.id);
// Execute Action: RangeSliderDestroy
OutSystemsUI_2_23Controller.default.rangeSliderDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:7ZcdMHa2VUqLjcLeYYRXlw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:1c152KJRQ0iQXGKfuS8w1g", callContext.id);
}

};
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:KXhx3B4d9kaRSf4rCmJIcA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.bKePE9Bd7E+ypfCtOjaagQ/ClientActions.KXhx3B4d9kaRSf4rCmJIcA:WjLTWYx1sV4ttXtG2wj04w", "OutSystemsUI_2_23", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:SlUanW62eEqEYaVx25QJYg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ctE2qlfe3UquBiVx3nvy2w", callContext.id);
getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Interaction_RangeSlider_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
OnValueChange: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
RangeSliderInitializedObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.RangeSlider.RegisterCallbacks$getCallbackHandlersJSResult"))();
jsNodeResult.onValueChangeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnValueChange, OS.DataTypes.DataTypes.Object);
jsNodeResult.rangeSliderInitializedObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RangeSliderInitializedObj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OnValueChangeHandler: controller.clientActionProxies.onValueChangeHandler$Action,
IntializeHandler: controller.clientActionProxies.intializeHandler$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DAip8ud+yEKbsEqkKu497w", callContext.id);
// Execute Action: RegisterValueOnChange
OutSystemsUI_2_23Controller.default.rangeSliderRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.rangeSlider_OnValueChange, getCallbackHandlersJSResult.value.onValueChangeOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:lENKV84Et0uNEm6r8reqlQ", callContext.id);
// Execute Action: RegisterOnRangeSliderInitialize
OutSystemsUI_2_23Controller.default.rangeSliderRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.rangeSliderInitializedObjOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:9WzVe32FQ0+498SYU7WYBA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:KXhx3B4d9kaRSf4rCmJIcA", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.RangeSlider.RegisterCallbacks$getCallbackHandlersJSResult", [{
name: "OnValueChange",
attrName: "onValueChangeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "RangeSliderInitializedObj",
attrName: "rangeSliderInitializedObjOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:JuSf_FBrpU2ZGQ03ISXs5g:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.bKePE9Bd7E+ypfCtOjaagQ/ClientActions.JuSf_FBrpU2ZGQ03ISXs5g:E8seVeUmDNf0NrpIiB3HcQ", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:P5s14lQFQ0iDJdV9AoMaRw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:AeqPL4Fq2U+9Gho1HJ6A8g", callContext.id) && !(model.variables.minValueIn.equals(model.variables.internalConfigsVar.minValueAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:9klsZ3nB8UO4UlJBhQXI3w", callContext.id);
// InternalConfigs.MinValue = MinValue
model.variables.internalConfigsVar.minValueAttr = model.variables.minValueIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:GVIW2YV94k+NJyWMi92B_Q", callContext.id);
// Execute Action: Update_MinValue
OutSystemsUI_2_23Controller.default.rangeSliderChangeDecimalProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "MinValue", model.variables.internalConfigsVar.minValueAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:TZoRu0EKo0yGICJuXNYSMg", callContext.id) && !(model.variables.maxValueIn.equals(model.variables.internalConfigsVar.maxValueAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:XAijfhYDqEmfkJ44moGS_Q", callContext.id);
// InternalConfigs.MaxValue = MaxValue
model.variables.internalConfigsVar.maxValueAttr = model.variables.maxValueIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Dx6zbttsMEiddtPCNuxb3w", callContext.id);
// Execute Action: Update_MaxValue
OutSystemsUI_2_23Controller.default.rangeSliderChangeDecimalProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "MaxValue", model.variables.internalConfigsVar.maxValueAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3VAq1Us3vkeFemfXnDfCaA", callContext.id) && !(model.variables.startingValueIn.equals(model.variables.internalConfigsVar.startingValueFromAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:uehZHsYwz02efbHvbxjcrg", callContext.id);
// InternalConfigs.StartingValueFrom = StartingValue
model.variables.internalConfigsVar.startingValueFromAttr = model.variables.startingValueIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:kLqlMeMR9Eie3tPrmoEtsg", callContext.id);
// Execute Action: Update_StartingValueStart
OutSystemsUI_2_23Controller.default.rangeSliderChangeDecimalProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "StartingValueFrom", model.variables.internalConfigsVar.startingValueFromAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pg+NKt4x+k+6jappaft0eA", callContext.id) && !(model.variables.optionalConfigsIn.stepAttr.equals(model.variables.internalConfigsVar.stepAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:85gMqHK4SESbQ+L7N1uDxw", callContext.id);
// InternalConfigs.Step = OptionalConfigs.Step
model.variables.internalConfigsVar.stepAttr = model.variables.optionalConfigsIn.stepAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Nh9VzCHVlEuOyYMpuZVVzQ", callContext.id);
// Execute Action: Update_Step
OutSystemsUI_2_23Controller.default.rangeSliderChangeDecimalProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Step", model.variables.internalConfigsVar.stepAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:KQCc4x5ITESId2g0wAt1bQ", callContext.id) && ((model.variables.optionalConfigsIn.showTickMarksAttr) !== (model.variables.internalConfigsVar.showTickMarksAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Zx6GSChzME2mVWEb8_QvVg", callContext.id);
// InternalConfigs.ShowTickMarks = OptionalConfigs.ShowTickMarks
model.variables.internalConfigsVar.showTickMarksAttr = model.variables.optionalConfigsIn.showTickMarksAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:B+pUOnYeBU63nf8JfpEDtQ", callContext.id);
// Execute Action: Update_ShowTickMarks
OutSystemsUI_2_23Controller.default.rangeSliderChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ShowTickMarks", model.variables.internalConfigsVar.showTickMarksAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ovNxVotvdEuY7Ri0x7vznw", callContext.id) && ((model.variables.optionalConfigsIn.tickMarksIntervalAttr) !== (model.variables.internalConfigsVar.tickMarksIntervalAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:lN65qKUF7kCZrFkU5iC4WQ", callContext.id);
// InternalConfigs.TickMarksInterval = OptionalConfigs.TickMarksInterval
model.variables.internalConfigsVar.tickMarksIntervalAttr = model.variables.optionalConfigsIn.tickMarksIntervalAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:epb8Tv5stky8bUueqdyPPA", callContext.id);
// Execute Action: Update_TickMarksInterval
OutSystemsUI_2_23Controller.default.rangeSliderChangeDecimalProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "TickMarksInterval", OS.BuiltinFunctions.integerToDecimal(model.variables.internalConfigsVar.tickMarksIntervalAttr), callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:QlXAnZfpRkeRN7LoTYBAvg", callContext.id) && ((model.variables.optionalConfigsIn.isDisabledAttr) !== (model.variables.internalConfigsVar.isDisabledAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ZVtSEjPFVkqZbLNrQabZ_Q", callContext.id);
// InternalConfigs.IsDisabled = OptionalConfigs.IsDisabled
model.variables.internalConfigsVar.isDisabledAttr = model.variables.optionalConfigsIn.isDisabledAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zLC93pztoke09cjGHGSsRA", callContext.id);
// Execute Action: Update_IsDisabled
OutSystemsUI_2_23Controller.default.rangeSliderChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "IsDisabled", model.variables.internalConfigsVar.isDisabledAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:44ws+2AO+0G8Y3dw_jWnfA", callContext.id) && ((model.variables.orientationIn) !== (model.variables.internalConfigsVar.orientationAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:yRsDTZYFtkGwh5qlmliqvQ", callContext.id);
// InternalConfigs.Orientation = Orientation
model.variables.internalConfigsVar.orientationAttr = model.variables.orientationIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:JyLu0mYTVEOdYXbITWYnbw", callContext.id);
// Execute Action: Update_Orientation
OutSystemsUI_2_23Controller.default.rangeSliderChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Orientation", model.variables.internalConfigsVar.orientationAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:aac7syoT0kCX_VDTy41nDA", callContext.id) && ((model.variables.sizeIn) !== (model.variables.internalConfigsVar.sizeAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:WnWgFrkNaEOJ99LSxaSdag", callContext.id);
// InternalConfigs.Size = Size
model.variables.internalConfigsVar.sizeAttr = model.variables.sizeIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:d984pAHE8Eqzm2dDeIU95w", callContext.id);
// Execute Action: Update_Size
OutSystemsUI_2_23Controller.default.rangeSliderChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Size", model.variables.internalConfigsVar.sizeAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:09i35WGmE061vLdUMlgxIQ", callContext.id) && ((model.variables.optionalConfigsIn.showFloatingLabelAttr) !== (model.variables.internalConfigsVar.showFloatingLabelAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CRAKHWb9QEG2P+zmt7DcoA", callContext.id);
// InternalConfigs.ShowFloatingLabel = OptionalConfigs.ShowFloatingLabel
model.variables.internalConfigsVar.showFloatingLabelAttr = model.variables.optionalConfigsIn.showFloatingLabelAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:amW7_J4HOE6xGJSslSARMQ", callContext.id);
// Execute Action: Update_ShowFloatingLabel
OutSystemsUI_2_23Controller.default.rangeSliderChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ShowFloatingLabel", model.variables.optionalConfigsIn.showFloatingLabelAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:wTJMwYj1W02NaQQra0mNIg", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internalConfigsVar.extendedClassAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:MD1K_y2lo0e8Og40KSS1gQ", callContext.id);
// InternalConfigs.ExtendedClass = ExtendedClass
model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Wz09pQjpo0CEo+yM8TlSoA", callContext.id);
// Execute Action: Update_ExtendedClass
OutSystemsUI_2_23Controller.default.rangeSliderChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internalConfigsVar.extendedClassAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:SxKOC1+sWU23OEjC1VRYRA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:SxKOC1+sWU23OEjC1VRYRA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:JuSf_FBrpU2ZGQ03ISXs5g", callContext.id);
}

};

Controller.prototype.onValueChangeHandler$Action = function (rangeSliderIdIn, intervalStartIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onValueChangeHandler$Action, callContext, rangeSliderIdIn, intervalStartIn);

};
Controller.prototype.intializeHandler$Action = function (rangeSliderIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._intializeHandler$Action, callContext, rangeSliderIdIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.registerCallbacks$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.initialized$Action = function () {
return Promise.resolve();
};
Controller.prototype.onValueChange$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:qQS9OZYcu0SRmBsR92a4Og:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og:lqPcl3zEGn9YSs1SWHw12A", "OutSystemsUI_2_23", "Interaction", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:bKePE9Bd7E+ypfCtOjaagQ:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.bKePE9Bd7E+ypfCtOjaagQ:zB_jjzoOPIlnC3kkYEZ7zA", "OutSystemsUI_2_23", "RangeSlider", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:bKePE9Bd7E+ypfCtOjaagQ", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:qQS9OZYcu0SRmBsR92a4Og", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/RangeSlider On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/RangeSlider On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/RangeSlider On Destroy");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/RangeSlider On Parameters Changed");
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
define("OutSystemsUI_2_23.Interaction.RangeSlider.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.OnValueChange = $actions.OnValueChangeHandler;

$parameters.RangeSliderInitializedObj = $actions.IntializeHandler;
};
});

define("OutSystemsUI_2_23.Interaction.RangeSlider.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LjEG6YTe+0q+uNcWZBdaLg": {
getter: function (varBag, idService) {
return varBag.vars.value.rangeSliderIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6oTjr9o4r0+DUY5h3DhX0A": {
getter: function (varBag, idService) {
return varBag.vars.value.intervalStartInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sGa9foDBmEikXi1DI8BMew": {
getter: function (varBag, idService) {
return varBag.vars.value.rangeSliderIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"e5bjEq83cU+dkjsP9NWn8A": {
getter: function (varBag, idService) {
return varBag.generateUniqueIdVar.value;
}
},
"I8IipbgAZEmwOhDPQm8Mjw": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"ctE2qlfe3UquBiVx3nvy2w": {
getter: function (varBag, idService) {
return varBag.getCallbackHandlersJSResult.value;
}
},
"rEUQOOSC4E6C_OIddc8h0g": {
getter: function (varBag, idService) {
return varBag.model.variables.internalConfigsVar;
}
},
"qCIjKpznPUS6xYOYg8BX5Q": {
getter: function (varBag, idService) {
return varBag.model.variables.minValueIn;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"knOjv0ORs0aRgJ0DpfIzfw": {
getter: function (varBag, idService) {
return varBag.model.variables.maxValueIn;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"M5zLaoFjZk2NshQ4cl0HmQ": {
getter: function (varBag, idService) {
return varBag.model.variables.startingValueIn;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"VKJEc6hESEqtvJKqGVwQuA": {
getter: function (varBag, idService) {
return varBag.model.variables.orientationIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ovL_HO1G8EaZHmafIWqkbA": {
getter: function (varBag, idService) {
return varBag.model.variables.sizeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Bup2as+fgUu2hQhTQgxx0Q": {
getter: function (varBag, idService) {
return varBag.model.variables.optionalConfigsIn;
}
},
"OwLT8wS9RE2t3mEq33diWw": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Interaction.RangeSlider.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
