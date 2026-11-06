define("OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model$DropdownSearch_InternalConfigsRec", "OutSystemsUI_2_23.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownOptionalConfigsRec", "OutSystemsUI_2_23.controller$DropdownDestroy", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$DropdownCreate", "OutSystemsUI_2_23.controller$DropdownInitialize", "OutSystemsUI_2_23.controller$DropdownChangeTextProperty", "OutSystemsUI_2_23.controller$DropdownChangeBooleanProperty", "OutSystemsUI_2_23.controller$DropdownRegisterCallback"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownSearch_InternalConfigsRec());
}, false, OutSystemsUI_2_23Model.DropdownSearch_InternalConfigsRec), 
this.attr("NoOptionsText_Default", "noOptionsText_DefaultVar", "NoOptionsText_Default", true, false, OS.DataTypes.DataTypes.Text, function () {
return "There are no options to show.";
}, false), 
this.attr("NoResultsText_Default", "noResultsText_DefaultVar", "NoResultsText_Default", true, false, OS.DataTypes.DataTypes.Text, function () {
return "There are no options to show.";
}, false), 
this.attr("Prompt_Default", "prompt_DefaultVar", "Prompt_Default", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Select...";
}, false), 
this.attr("SearchPrompt_Default", "searchPrompt_DefaultVar", "SearchPrompt_Default", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Search...";
}, false), 
this.attr("OptionsList", "optionsListIn", "OptionsList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownOptionList());
}, false, OutSystemsUI_2_23Model.DropdownOptionList), 
this.attr("_optionsListInDataFetchStatus", "_optionsListInDataFetchStatus", "_optionsListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("StartingSelection", "startingSelectionIn", "StartingSelection", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownOptionList());
}, false, OutSystemsUI_2_23Model.DropdownOptionList), 
this.attr("_startingSelectionInDataFetchStatus", "_startingSelectionInDataFetchStatus", "_startingSelectionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Prompt", "promptIn", "Prompt", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Select...";
}, false), 
this.attr("_promptInDataFetchStatus", "_promptInDataFetchStatus", "_promptInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownOptionalConfigsRec());
}, false, OutSystemsUI_2_23Model.DropdownOptionalConfigsRec), 
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
if("OptionsList" in inputs) {
this.variables.optionsListIn = inputs.OptionsList;
if("_optionsListInDataFetchStatus" in inputs) {
this.variables._optionsListInDataFetchStatus = inputs._optionsListInDataFetchStatus;
}

}

if("StartingSelection" in inputs) {
this.variables.startingSelectionIn = inputs.StartingSelection;
if("_startingSelectionInDataFetchStatus" in inputs) {
this.variables._startingSelectionInDataFetchStatus = inputs._startingSelectionInDataFetchStatus;
}

}

if("Prompt" in inputs) {
this.variables.promptIn = inputs.Prompt;
if("_promptInDataFetchStatus" in inputs) {
this.variables._promptInDataFetchStatus = inputs._promptInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Interaction.DropdownSearch");
});
define("OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$model", "OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$DropdownSearch_InternalConfigsRec", "OutSystemsUI_2_23.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownOptionalConfigsRec", "OutSystemsUI_2_23.controller$DropdownDestroy", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$DropdownCreate", "OutSystemsUI_2_23.controller$DropdownInitialize", "OutSystemsUI_2_23.controller$DropdownChangeTextProperty", "OutSystemsUI_2_23.controller$DropdownChangeBooleanProperty", "OutSystemsUI_2_23.controller$DropdownRegisterCallback"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_model, OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.DropdownSearch";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.VirtualSelect.js", "scripts/OutSystemsUI_2_23.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_controller;
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
style: "osui-dropdown-search",
visible: true,
_idProps: {
service: idService,
name: "DropdownSearch"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$translationsResources", "OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$debugger", "OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI_2_23.model$DropdownSearch_InternalConfigsRec", "OutSystemsUI_2_23.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownOptionalConfigsRec", "OutSystemsUI_2_23.controller$DropdownDestroy", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$DropdownCreate", "OutSystemsUI_2_23.controller$DropdownInitialize", "OutSystemsUI_2_23.controller$DropdownChangeTextProperty", "OutSystemsUI_2_23.controller$DropdownChangeBooleanProperty", "OutSystemsUI_2_23.controller$DropdownRegisterCallback"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_TranslationsResources, OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_Debugger, OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
initializedHandler$Action: function (dropdownSearchIdIn) {
dropdownSearchIdIn = (dropdownSearchIdIn === undefined) ? "" : dropdownSearchIdIn;
return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dropdownSearchIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "InitializedHandler");
},
onSelectHandler$Action: function (dropdownSearchIdIn, selectedOptionsJSONIn) {
dropdownSearchIdIn = (dropdownSearchIdIn === undefined) ? "" : dropdownSearchIdIn;
selectedOptionsJSONIn = (selectedOptionsJSONIn === undefined) ? "" : selectedOptionsJSONIn;
return controller.executeActionInsideJSNode(controller._onSelectHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dropdownSearchIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(selectedOptionsJSONIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnSelectHandler");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:hJ8VDQvUi0KPz9+KfYegIA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.jEIIuFWjpU2uFmIDR3zTHA/ClientActions.hJ8VDQvUi0KPz9+KfYegIA:5SdtUvaiefYi51GQvhv0Ww", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:gReJcH8jbkin8Q1specnQA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:APs2X2VhrkOIzmRW1EmHYg", callContext.id);
// Execute Action: DropdownDestroy
OutSystemsUI_2_23Controller.default.dropdownDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:NA3c7wV+y0W0W1GlztHMxA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:hJ8VDQvUi0KPz9+KfYegIA", callContext.id);
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:i+IpGCr75E2JfzxVcdLiZw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.jEIIuFWjpU2uFmIDR3zTHA/ClientActions.i+IpGCr75E2JfzxVcdLiZw:auu9ybp3w6fnY_S4uiCPrg", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:6JjPoHyhxUuFCqqk_tDcWg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:B3T8Ugfjg0SD9NE2rNQqnA", callContext.id);
// Execute Action: LogStart
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Going to create Dropdown Search", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:E7zKBt+gNka7LB1ZiYejaQ", callContext.id);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUI_2_23Controller.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);

// Set Initial Configs
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zppO8+OXj0i30h+QDl7+qw", callContext.id);
// InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zppO8+OXj0i30h+QDl7+qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// InternalConfigs.OptionsList = OptionsList
model.variables.internalConfigsVar.optionsListAttr = model.variables.optionsListIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zppO8+OXj0i30h+QDl7+qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// InternalConfigs.StartingSelection = StartingSelection
model.variables.internalConfigsVar.startingSelectionAttr = model.variables.startingSelectionIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zppO8+OXj0i30h+QDl7+qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// InternalConfigs.IsDisabled = OptionalConfigs.IsDisabled
model.variables.internalConfigsVar.isDisabledAttr = model.variables.optionalConfigsIn.isDisabledAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zppO8+OXj0i30h+QDl7+qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// InternalConfigs.Prompt = If
model.variables.internalConfigsVar.promptAttr = (((model.variables.promptIn === "")) ? (model.variables.prompt_DefaultVar) : (model.variables.promptIn));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zppO8+OXj0i30h+QDl7+qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// InternalConfigs.NoResultsText = If
model.variables.internalConfigsVar.noResultsTextAttr = (((model.variables.optionalConfigsIn.noResultsTextAttr === "")) ? (model.variables.noResultsText_DefaultVar) : (model.variables.optionalConfigsIn.noResultsTextAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zppO8+OXj0i30h+QDl7+qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// InternalConfigs.SearchPrompt = If
model.variables.internalConfigsVar.searchPromptAttr = (((model.variables.optionalConfigsIn.searchPromptAttr === "")) ? (model.variables.searchPrompt_DefaultVar) : (model.variables.optionalConfigsIn.searchPromptAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zppO8+OXj0i30h+QDl7+qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// InternalConfigs.AllowMultipleSelection = OptionalConfigs.AllowMultipleSelection
model.variables.internalConfigsVar.allowMultipleSelectionAttr = model.variables.optionalConfigsIn.allowMultipleSelectionAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zppO8+OXj0i30h+QDl7+qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// InternalConfigs.ExtendedClass = ExtendedClass
model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zppO8+OXj0i30h+QDl7+qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// InternalConfigs.NoOptionsText = If
model.variables.internalConfigsVar.noOptionsTextAttr = (((model.variables.optionalConfigsIn.noOptionsTextAttr === "")) ? (model.variables.noOptionsText_DefaultVar) : (model.variables.optionalConfigsIn.noOptionsTextAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zppO8+OXj0i30h+QDl7+qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// InternalConfigs.SanitizeDropdownValues = OptionalConfigs.SanitizeDropdownValues
model.variables.internalConfigsVar.sanitizeDropdownValuesAttr = model.variables.optionalConfigsIn.sanitizeDropdownValuesAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:kHZmz3blEki0Jl3uV8EdkA", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar, true, false);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:iIt1iQug_0aMD86zFYLuRw", callContext.id);
// Execute Action: DropdownCreate
OutSystemsUI_2_23Controller.default.dropdownCreate$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.dropdownType.search, OutSystemsUI_2_23Model.staticEntities.dropdownProvider.virtualSelect, serialize_configsVar.value.jSONOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:xPfgds+OzkSzGZIsyxRU3w", callContext.id);
// Execute Action: RegisterCallbacks
controller._registerCallbacks$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:WApEMnctMkKDhvbde9udIw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:i+IpGCr75E2JfzxVcdLiZw", callContext.id);
}

};
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:b9oMMG281UqQd4A3tuUIKw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.jEIIuFWjpU2uFmIDR3zTHA/ClientActions.b9oMMG281UqQd4A3tuUIKw:xAmW0MazE7+M5tDe5S2wAQ", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:+ELKH5xUOUqDaYRrH+YV2Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:KBPifS+eH0CegzfFG8iY2Q", callContext.id);
// Execute Action: DropdownInitialize
OutSystemsUI_2_23Controller.default.dropdownInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:hSPR0GPVR02XeYODcXp4yg", callContext.id);
// Execute Action: LogEnd
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Dropdown Search created", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:8RM4X8iQe0iDlX8n0oWlow", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:b9oMMG281UqQd4A3tuUIKw", callContext.id);
}

};
Controller.prototype._initializedHandler$Action = function (dropdownSearchIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InitializedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownSearch.InitializedHandler$vars"))());
vars.value.dropdownSearchIdInLocal = dropdownSearchIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:pFCJRA8FeUSTpKiMvqyAJQ:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.jEIIuFWjpU2uFmIDR3zTHA/ClientActions.pFCJRA8FeUSTpKiMvqyAJQ:Mc3pK5z_VVW0+b5Oxh1HHQ", "OutSystemsUI_2_23", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:QZ4wUqaTM0iuiO6rADeq7A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Jgg7loXIaEGf_N1FVZ3Q8g", callContext.id);
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.dropdownSearchIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:0bg50lCMkEO3OYGJ7UusqQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:pFCJRA8FeUSTpKiMvqyAJQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:pFCJRA8FeUSTpKiMvqyAJQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownSearch.InitializedHandler$vars", [{
name: "DropdownSearchId",
attrName: "dropdownSearchIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
var optionsListJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var internalConfigs_StartingSelectionJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var startingSelectionJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var internalConfigs_OptionsListJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.optionsListJSONVar = optionsListJSONVar;
varBag.internalConfigs_StartingSelectionJSONVar = internalConfigs_StartingSelectionJSONVar;
varBag.startingSelectionJSONVar = startingSelectionJSONVar;
varBag.internalConfigs_OptionsListJSONVar = internalConfigs_OptionsListJSONVar;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:lJI+XKqw_E6djzaIfUW8aQ:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.jEIIuFWjpU2uFmIDR3zTHA/ClientActions.lJI+XKqw_E6djzaIfUW8aQ:oO55Bk0Sbz95mFi3PMniFg", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:70BxsjnbZUGNbd4BBoRiVg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Hsy_XDkNpUWNmfzCXx4ISw", callContext.id);
// JSON Serialize: OptionsListJSON
optionsListJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsListIn, false, false);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:G4iK_9HDU0aTUEF3gkKA6g", callContext.id);
// JSON Serialize: InternalConfigs_OptionsListJSON
internalConfigs_OptionsListJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar.optionsListAttr, false, false);
// OptionsList?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:SPnFv6wuekCBncS2bsZBKw", callContext.id) && ((optionsListJSONVar.value.jSONOut) !== (internalConfigs_OptionsListJSONVar.value.jSONOut)))) {
// Set OptionsList
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:jbiY1u4HwUq5eZvo_6Fdvg", callContext.id);
// InternalConfigs.OptionsList = OptionsList
model.variables.internalConfigsVar.optionsListAttr = model.variables.optionsListIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Axj0V3RPvE+BZn6tZ8vBuw", callContext.id);
// Execute Action: Update_OptionsList
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "OptionsList", optionsListJSONVar.value.jSONOut, callContext);
}

OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:C73G2OayMkyuyU_alMFTtg", callContext.id);
// JSON Serialize: StartingSelectionJSON
startingSelectionJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.startingSelectionIn, false, false);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Pw87vR5q2kC8Evl4fYvEoA", callContext.id);
// JSON Serialize: InternalConfigs_StartingSelectionJSON
internalConfigs_StartingSelectionJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar.startingSelectionAttr, false, false);
// StartingSelection?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:LkdksXmTHE+p91_owGut8g", callContext.id) && ((startingSelectionJSONVar.value.jSONOut) !== (internalConfigs_StartingSelectionJSONVar.value.jSONOut)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:vI0cW60Lz0CG_vNzjQmJBg", callContext.id);
// InternalConfigs.StartingSelection = StartingSelection
model.variables.internalConfigsVar.startingSelectionAttr = model.variables.startingSelectionIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:XC921K0MZ0O5uzv35bj2iA", callContext.id);
// Execute Action: Update_StartingSelection
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "StartingSelection", startingSelectionJSONVar.value.jSONOut, callContext);
}

// Prompt?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:jZVG7b19_ESR4xLsgwKkpQ", callContext.id) && ((model.variables.promptIn) !== (model.variables.internalConfigsVar.promptAttr)))) {
// Set Prompt
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:d998w5rgfEaF_wRXpuQedQ", callContext.id);
// InternalConfigs.Prompt = If
model.variables.internalConfigsVar.promptAttr = (((model.variables.promptIn === "")) ? (model.variables.prompt_DefaultVar) : (model.variables.promptIn));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:v7Y+fi4Cg0CDPCoKKwVP2Q", callContext.id);
// Execute Action: Update_Prompt
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Prompt", model.variables.internalConfigsVar.promptAttr, callContext);
}

// IsDisabled?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:+9aqIn61qEqulyb7Nxg2kQ", callContext.id) && ((model.variables.optionalConfigsIn.isDisabledAttr) !== (model.variables.internalConfigsVar.isDisabledAttr)))) {
// Set IsDisabled
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:RqJeu8fUFkapRkrOMb2YmQ", callContext.id);
// InternalConfigs.IsDisabled = OptionalConfigs.IsDisabled
model.variables.internalConfigsVar.isDisabledAttr = model.variables.optionalConfigsIn.isDisabledAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:B22H42imaUydWMB+vaTTqQ", callContext.id);
// Execute Action: Update_IsDisabled
OutSystemsUI_2_23Controller.default.dropdownChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "IsDisabled", model.variables.internalConfigsVar.isDisabledAttr, callContext);
}

// NoResultsText?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DfEnYFst40+w44399FJBxg", callContext.id) && ((model.variables.optionalConfigsIn.noResultsTextAttr) !== (model.variables.internalConfigsVar.noResultsTextAttr)))) {
// Set NoResultsText
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:WEzx895+LUaLwAGz_Q4KNw", callContext.id);
// InternalConfigs.NoResultsText = If
model.variables.internalConfigsVar.noResultsTextAttr = (((model.variables.optionalConfigsIn.noResultsTextAttr === "")) ? (model.variables.noResultsText_DefaultVar) : (model.variables.optionalConfigsIn.noResultsTextAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:NvJPNRdrkE2DjfdmHHxM3A", callContext.id);
// Execute Action: Update_NoResultsText
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "NoResultsText", model.variables.internalConfigsVar.noResultsTextAttr, callContext);
}

// NoOptionsText?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:jQEyDHkLzkSxDOxaAEYUFA", callContext.id) && ((model.variables.optionalConfigsIn.noOptionsTextAttr) !== (model.variables.internalConfigsVar.noOptionsTextAttr)))) {
// Set NoOptionsText
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:NQm71TaoUUaUSWsjjOGQZg", callContext.id);
// InternalConfigs.NoOptionsText = If
model.variables.internalConfigsVar.noOptionsTextAttr = (((model.variables.optionalConfigsIn.noOptionsTextAttr === "")) ? (model.variables.noOptionsText_DefaultVar) : (model.variables.optionalConfigsIn.noOptionsTextAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:7nd2h5UnS0WWuaV0RQEYFg", callContext.id);
// Execute Action: Update_NoOptionsText
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "NoOptionsText", model.variables.internalConfigsVar.noOptionsTextAttr, callContext);
}

// SearchPrompt?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:sozUaPp8mkmCSwh7fkUijw", callContext.id) && ((model.variables.optionalConfigsIn.searchPromptAttr) !== (model.variables.internalConfigsVar.searchPromptAttr)))) {
// Set SearchPrompt
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:F5CMO1GnAEOgigl67aiddg", callContext.id);
// InternalConfigs.SearchPrompt = If
model.variables.internalConfigsVar.searchPromptAttr = (((model.variables.optionalConfigsIn.searchPromptAttr === "")) ? (model.variables.searchPrompt_DefaultVar) : (model.variables.optionalConfigsIn.searchPromptAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:BNcX4BmBlEmeIpIavonEVg", callContext.id);
// Execute Action: Update_SearchPrompt
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "SearchPrompt", model.variables.internalConfigsVar.searchPromptAttr, callContext);
}

// AllowMultipleSelection?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:44GozDkHHEOqo0jRmC7A3g", callContext.id) && ((model.variables.optionalConfigsIn.allowMultipleSelectionAttr) !== (model.variables.internalConfigsVar.allowMultipleSelectionAttr)))) {
// Set AllowMultipleSelection
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:eYJavCsmpEq3vNTji8kfSg", callContext.id);
// InternalConfigs.AllowMultipleSelection = OptionalConfigs.AllowMultipleSelection
model.variables.internalConfigsVar.allowMultipleSelectionAttr = model.variables.optionalConfigsIn.allowMultipleSelectionAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:wuSsOqMPlEyrMbmvwT1D5g", callContext.id);
// Execute Action: Update_AllowMultipleSelection
OutSystemsUI_2_23Controller.default.dropdownChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "AllowMultipleSelection", model.variables.internalConfigsVar.allowMultipleSelectionAttr, callContext);
}

// SanitizeDropdownValues?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:SaakemCJlE6fA6LBQVEREQ", callContext.id) && ((model.variables.optionalConfigsIn.sanitizeDropdownValuesAttr) !== (model.variables.internalConfigsVar.sanitizeDropdownValuesAttr)))) {
// Set SanitizeDropdownValues
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:cZq2+4lNCE644O3gJA0tYA", callContext.id);
// InternalConfigs.SanitizeDropdownValues = OptionalConfigs.SanitizeDropdownValues
model.variables.internalConfigsVar.sanitizeDropdownValuesAttr = model.variables.optionalConfigsIn.sanitizeDropdownValuesAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:VFWS6T+rjUiVaM8mB0h+MA", callContext.id);
// Execute Action: Update_SanitizeDropdownValues
OutSystemsUI_2_23Controller.default.dropdownChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "SanitizeDropdownValues", model.variables.internalConfigsVar.sanitizeDropdownValuesAttr, callContext);
}

// ExtendedClass?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:KCxabO4xsEWjbdBFmuAYLA", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internalConfigsVar.extendedClassAttr)))) {
// Set ExtendedClass
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:uGoOVcAnYkayvQMv73MBgA", callContext.id);
// InternalConfigs.ExtendedClass = ExtendedClass
model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:BjGc55d+GEOy4J_SzvPVOQ", callContext.id);
// Execute Action: Update_ExtendedClass
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internalConfigsVar.extendedClassAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:YWqVvAuRS02v6f4lKvSLQA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:YWqVvAuRS02v6f4lKvSLQA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:lJI+XKqw_E6djzaIfUW8aQ", callContext.id);
}

};
Controller.prototype._onSelectHandler$Action = function (dropdownSearchIdIn, selectedOptionsJSONIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnSelectHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownSearch.OnSelectHandler$vars"))());
vars.value.dropdownSearchIdInLocal = dropdownSearchIdIn;
vars.value.selectedOptionsJSONInLocal = selectedOptionsJSONIn;
var jSONDeserializeDropdownOptionVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsUI_2_23Model.DropdownOptionList))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONDeserializeDropdownOptionVar = jSONDeserializeDropdownOptionVar;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:8Ux8fFbx+E6Sy4Tyn1VqHw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.jEIIuFWjpU2uFmIDR3zTHA/ClientActions.8Ux8fFbx+E6Sy4Tyn1VqHw:J6IWUqiTFmCHi32GvPNBhA", "OutSystemsUI_2_23", "OnSelectHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:g9jyYQjs2Uy2CssLKAeJ_A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2ta639FLH0OsUsGQSsr6eQ", callContext.id);
// JSON Deserialize: JSONDeserializeDropdownOption
jSONDeserializeDropdownOptionVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.selectedOptionsJSONInLocal, OutSystemsUI_2_23Model.DropdownOptionList, false);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zWepic8noUmslOe9DZfqpg", callContext.id);
// Trigger Event: OnChanged
return controller.onChanged$Action(vars.value.dropdownSearchIdInLocal, jSONDeserializeDropdownOptionVar.value.dataOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:aN1vwUIetkizfSkY5WMqTQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:8Ux8fFbx+E6Sy4Tyn1VqHw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:8Ux8fFbx+E6Sy4Tyn1VqHw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownSearch.OnSelectHandler$vars", [{
name: "DropdownSearchId",
attrName: "dropdownSearchIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SelectedOptionsJSON",
attrName: "selectedOptionsJSONInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:iyjjs_ivsUWR2DXQO4cXAg:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.jEIIuFWjpU2uFmIDR3zTHA/ClientActions.iyjjs_ivsUWR2DXQO4cXAg:v9JT0OVvbs74OeCWgZQwtg", "OutSystemsUI_2_23", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:D1TcwoZzVUKRc_nb3eVwYQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:fIRC4LB0rEm3axpsLB5VIg", callContext.id);
getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
OnSelected: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult"))();
jsNodeResult.onSelectedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnSelected, OS.DataTypes.DataTypes.Object);
jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
InitializedHandler: controller.clientActionProxies.initializedHandler$Action,
OnSelectHandler: controller.clientActionProxies.onSelectHandler$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:nDPZSuCOI0OrszdLIFKj+g", callContext.id);
// Execute Action: RegisterOnSelected
OutSystemsUI_2_23Controller.default.dropdownRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.onSelected, getCallbackHandlersJSResult.value.onSelectedOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:8DJ5vamTq0e+mZny7OaXZw", callContext.id);
// Execute Action: RegisterOnInitialize
OutSystemsUI_2_23Controller.default.dropdownRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:XtKw543mFUWMR+5xf3uqmw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:iyjjs_ivsUWR2DXQO4cXAg", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult", [{
name: "OnSelected",
attrName: "onSelectedOut",
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

Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.initializedHandler$Action = function (dropdownSearchIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, dropdownSearchIdIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onSelectHandler$Action = function (dropdownSearchIdIn, selectedOptionsJSONIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onSelectHandler$Action, callContext, dropdownSearchIdIn, selectedOptionsJSONIn);

};
Controller.prototype.registerCallbacks$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);

};
Controller.prototype.initialized$Action = function () {
return Promise.resolve();
};
Controller.prototype.onChanged$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:qQS9OZYcu0SRmBsR92a4Og:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og:lqPcl3zEGn9YSs1SWHw12A", "OutSystemsUI_2_23", "Interaction", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:jEIIuFWjpU2uFmIDR3zTHA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.jEIIuFWjpU2uFmIDR3zTHA:E5SBmakOps+ObMZsGY5DuA", "OutSystemsUI_2_23", "DropdownSearch", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:jEIIuFWjpU2uFmIDR3zTHA", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:qQS9OZYcu0SRmBsR92a4Og", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/DropdownSearch On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/DropdownSearch On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/DropdownSearch On Destroy");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/DropdownSearch On Parameters Changed");
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
define("OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Initialized = $actions.InitializedHandler;
$parameters.OnSelected = $actions.OnSelectHandler;
};
});

define("OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"E7zKBt+gNka7LB1ZiYejaQ": {
getter: function (varBag, idService) {
return varBag.generateUniqueIdVar.value;
}
},
"kHZmz3blEki0Jl3uV8EdkA": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"CckGPg5FGUCTOL8_eTibpw": {
getter: function (varBag, idService) {
return varBag.vars.value.dropdownSearchIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Hsy_XDkNpUWNmfzCXx4ISw": {
getter: function (varBag, idService) {
return varBag.optionsListJSONVar.value;
}
},
"Pw87vR5q2kC8Evl4fYvEoA": {
getter: function (varBag, idService) {
return varBag.internalConfigs_StartingSelectionJSONVar.value;
}
},
"C73G2OayMkyuyU_alMFTtg": {
getter: function (varBag, idService) {
return varBag.startingSelectionJSONVar.value;
}
},
"G4iK_9HDU0aTUEF3gkKA6g": {
getter: function (varBag, idService) {
return varBag.internalConfigs_OptionsListJSONVar.value;
}
},
"ncuBFLQkR0iKOiM1cUqJiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.dropdownSearchIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Gz0kkIXPAUSPPVa_vrFfWw": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedOptionsJSONInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2ta639FLH0OsUsGQSsr6eQ": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeDropdownOptionVar.value;
}
},
"fIRC4LB0rEm3axpsLB5VIg": {
getter: function (varBag, idService) {
return varBag.getCallbackHandlersJSResult.value;
}
},
"WqezNOHq306bfOeiPJ6M2A": {
getter: function (varBag, idService) {
return varBag.model.variables.internalConfigsVar;
}
},
"7nMPzn4Zx0SIh+9gKSa7bw": {
getter: function (varBag, idService) {
return varBag.model.variables.noOptionsText_DefaultVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"onnb004wVk6gzR8fapk_EQ": {
getter: function (varBag, idService) {
return varBag.model.variables.noResultsText_DefaultVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"m2M1FVYB0E6x4mdq2ZaSWg": {
getter: function (varBag, idService) {
return varBag.model.variables.prompt_DefaultVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NbddsQEV_U2ZVsTvEkYH9w": {
getter: function (varBag, idService) {
return varBag.model.variables.searchPrompt_DefaultVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7E9qBaVS90G6d6ZeaLaDkw": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsListIn;
}
},
"FGYxLTJVXUqCopxQOCRzHQ": {
getter: function (varBag, idService) {
return varBag.model.variables.startingSelectionIn;
}
},
"3OZMzCH4XUe_ByLWXwS8Ew": {
getter: function (varBag, idService) {
return varBag.model.variables.promptIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vifTxQM3oUiRa4F5XQW6ig": {
getter: function (varBag, idService) {
return varBag.model.variables.optionalConfigsIn;
}
},
"KWQ0EftGJEOpYBtRJlDLhg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"08L7qcuMPUOxwIRmrOIOMw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideInPreview"));
})(varBag.model, idService);
}
},
"CxyODX_VYEuxKs_yWgNN6g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DropdownSearch"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
