define("OutSystemsUI_2_23.Interaction.DropdownTags.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model$DropdownTags_InternalConfigsRec", "OutSystemsUI_2_23.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec", "OutSystemsUI_2_23.controller$DropdownCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$DropdownChangeTextProperty", "OutSystemsUI_2_23.controller$DropdownChangeBooleanProperty", "OutSystemsUI_2_23.controller$DropdownDestroy", "OutSystemsUI_2_23.controller$DropdownInitialize", "OutSystemsUI_2_23.controller$DropdownRegisterCallback"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownTags_InternalConfigsRec());
}, false, OutSystemsUI_2_23Model.DropdownTags_InternalConfigsRec), 
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
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRec());
}, false, OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRec), 
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
return new OS.Model.ModelFactory(Model, "Interaction.DropdownTags");
});
define("OutSystemsUI_2_23.Interaction.DropdownTags.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Interaction.DropdownTags.mvc$model", "OutSystemsUI_2_23.Interaction.DropdownTags.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$DropdownTags_InternalConfigsRec", "OutSystemsUI_2_23.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec", "OutSystemsUI_2_23.controller$DropdownCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$DropdownChangeTextProperty", "OutSystemsUI_2_23.controller$DropdownChangeBooleanProperty", "OutSystemsUI_2_23.controller$DropdownDestroy", "OutSystemsUI_2_23.controller$DropdownInitialize", "OutSystemsUI_2_23.controller$DropdownRegisterCallback"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Interaction_DropdownTags_mvc_model, OutSystemsUI_2_23_Interaction_DropdownTags_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.DropdownTags";
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
                return OutSystemsUI_2_23_Interaction_DropdownTags_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_DropdownTags_mvc_controller;
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
style: "osui-dropdown-tags",
visible: true,
_idProps: {
service: idService,
name: "DropdownTags"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI_2_23.Interaction.DropdownTags.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Interaction.DropdownTags.mvc$translationsResources", "OutSystemsUI_2_23.Interaction.DropdownTags.mvc$debugger", "OutSystemsUI_2_23.Interaction.DropdownTags.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI_2_23.model$DropdownTags_InternalConfigsRec", "OutSystemsUI_2_23.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec", "OutSystemsUI_2_23.controller$DropdownCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$DropdownChangeTextProperty", "OutSystemsUI_2_23.controller$DropdownChangeBooleanProperty", "OutSystemsUI_2_23.controller$DropdownDestroy", "OutSystemsUI_2_23.controller$DropdownInitialize", "OutSystemsUI_2_23.controller$DropdownRegisterCallback"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Interaction_DropdownTags_mvc_TranslationsResources, OutSystemsUI_2_23_Interaction_DropdownTags_mvc_Debugger, OutSystemsUI_2_23_Interaction_DropdownTags_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
initializedHandler$Action: function (dropdownTagsIdIn) {
dropdownTagsIdIn = (dropdownTagsIdIn === undefined) ? "" : dropdownTagsIdIn;
return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dropdownTagsIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "InitializedHandler");
},
onSelectHandler$Action: function (dropdownTagsIdIn, selectedOptionsJSONIn) {
dropdownTagsIdIn = (dropdownTagsIdIn === undefined) ? "" : dropdownTagsIdIn;
selectedOptionsJSONIn = (selectedOptionsJSONIn === undefined) ? "" : selectedOptionsJSONIn;
return controller.executeActionInsideJSNode(controller._onSelectHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dropdownTagsIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(selectedOptionsJSONIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
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
Controller.prototype.translationResources = OutSystemsUI_2_23_Interaction_DropdownTags_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onSelectHandler$Action = function (dropdownTagsIdIn, selectedOptionsJSONIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnSelectHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownTags.OnSelectHandler$vars"))());
vars.value.dropdownTagsIdInLocal = dropdownTagsIdIn;
vars.value.selectedOptionsJSONInLocal = selectedOptionsJSONIn;
var jSONDeserializeDropdownOptionVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsUI_2_23Model.DropdownOptionList))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONDeserializeDropdownOptionVar = jSONDeserializeDropdownOptionVar;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:T_qGAlnsjUOG2SbaXlKo0A:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.FpkU836JgkC_F1eF5nLw7A/ClientActions.T_qGAlnsjUOG2SbaXlKo0A:0xXOdIKagr_FMIcJLYleLQ", "OutSystemsUI_2_23", "OnSelectHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:16alPocsnE2aZpcRC3tASg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Y4wIkyMuaUmvRR3O2_g3OA", callContext.id);
// JSON Deserialize: JSONDeserializeDropdownOption
jSONDeserializeDropdownOptionVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.selectedOptionsJSONInLocal, OutSystemsUI_2_23Model.DropdownOptionList, false);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:UeJwuxZrtEKKFU1jJT5ZGA", callContext.id);
// Trigger Event: OnChanged
return controller.onChanged$Action(vars.value.dropdownTagsIdInLocal, jSONDeserializeDropdownOptionVar.value.dataOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:GIRwmeOSaUmT1yge8CGNQQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:T_qGAlnsjUOG2SbaXlKo0A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:T_qGAlnsjUOG2SbaXlKo0A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownTags.OnSelectHandler$vars", [{
name: "DropdownTagsId",
attrName: "dropdownTagsIdInLocal",
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:V26kBBnroEi7B11W8u44bg:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.FpkU836JgkC_F1eF5nLw7A/ClientActions.V26kBBnroEi7B11W8u44bg:PNN+iqwfhGrdbCBs9mZxdQ", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:7n89gYdKLkSlLgC43dmMDA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:cgqB+kvIp0GxAm8H3gvJLA", callContext.id);
// Execute Action: LogStart
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Going to create Dropdown Tags", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:YyPEGlMWAky+TSZyfAPMeA", callContext.id);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUI_2_23Controller.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);

// Set Initial Configs
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EbaJc9Hv_EiEIlocUavwgA", callContext.id);
// InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EbaJc9Hv_EiEIlocUavwgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// InternalConfigs.OptionsList = OptionsList
model.variables.internalConfigsVar.optionsListAttr = model.variables.optionsListIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EbaJc9Hv_EiEIlocUavwgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// InternalConfigs.StartingSelection = StartingSelection
model.variables.internalConfigsVar.startingSelectionAttr = model.variables.startingSelectionIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EbaJc9Hv_EiEIlocUavwgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// InternalConfigs.Prompt = If
model.variables.internalConfigsVar.promptAttr = (((model.variables.promptIn === "")) ? (model.variables.prompt_DefaultVar) : (model.variables.promptIn));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EbaJc9Hv_EiEIlocUavwgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// InternalConfigs.IsDisabled = OptionalConfigs.IsDisabled
model.variables.internalConfigsVar.isDisabledAttr = model.variables.optionalConfigsIn.isDisabledAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EbaJc9Hv_EiEIlocUavwgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// InternalConfigs.NoResultsText = If
model.variables.internalConfigsVar.noResultsTextAttr = (((model.variables.optionalConfigsIn.noResultsTextAttr === "")) ? (model.variables.noResultsText_DefaultVar) : (model.variables.optionalConfigsIn.noResultsTextAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EbaJc9Hv_EiEIlocUavwgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// InternalConfigs.SearchPrompt = If
model.variables.internalConfigsVar.searchPromptAttr = (((model.variables.optionalConfigsIn.searchPromptAttr === "")) ? (model.variables.searchPrompt_DefaultVar) : (model.variables.optionalConfigsIn.searchPromptAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EbaJc9Hv_EiEIlocUavwgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// InternalConfigs.ExtendedClass = ExtendedClass
model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EbaJc9Hv_EiEIlocUavwgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// InternalConfigs.NoOptionsText = If
model.variables.internalConfigsVar.noOptionsTextAttr = (((model.variables.optionalConfigsIn.noOptionsTextAttr === "")) ? (model.variables.noOptionsText_DefaultVar) : (model.variables.optionalConfigsIn.noOptionsTextAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EbaJc9Hv_EiEIlocUavwgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// InternalConfigs.SanitizeDropdownValues = OptionalConfigs.SanitizeDropdownValues
model.variables.internalConfigsVar.sanitizeDropdownValuesAttr = model.variables.optionalConfigsIn.sanitizeDropdownValuesAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:x7jAqMiLlkSG6g6MEvbOPA", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar, true, false);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:RZzoCuH_Z0mL23IXIh5uQw", callContext.id);
// Execute Action: DropdownCreate
OutSystemsUI_2_23Controller.default.dropdownCreate$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.dropdownType.tags, OutSystemsUI_2_23Model.staticEntities.dropdownProvider.virtualSelect, serialize_configsVar.value.jSONOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:YKilp0AAkUKXrOqUXbG8UQ", callContext.id);
// Execute Action: RegisterCallbacks
controller._registerCallbacks$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:9xgUBw8ov0eE6o62AmYNUA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:V26kBBnroEi7B11W8u44bg", callContext.id);
}

};
Controller.prototype._initializedHandler$Action = function (dropdownTagsIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InitializedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownTags.InitializedHandler$vars"))());
vars.value.dropdownTagsIdInLocal = dropdownTagsIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:3jtVF1oOB02PQcZCItXS3A:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.FpkU836JgkC_F1eF5nLw7A/ClientActions.3jtVF1oOB02PQcZCItXS3A:zNK2uylv3fyH0o0+rx0sSQ", "OutSystemsUI_2_23", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:1JpS4YJ12E+3YkMf4b48ug", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:QeMs3jJ2g0G7if4tdHEVrA", callContext.id);
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.dropdownTagsIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:AqlVGfcOSUmnGX1y9+0AHQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:3jtVF1oOB02PQcZCItXS3A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:3jtVF1oOB02PQcZCItXS3A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownTags.InitializedHandler$vars", [{
name: "DropdownTagsId",
attrName: "dropdownTagsIdInLocal",
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
var internalConfigs_OptionsListJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var optionsListJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var startingSelectionJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var internalConfigs_StartingSelectionJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.internalConfigs_OptionsListJSONVar = internalConfigs_OptionsListJSONVar;
varBag.optionsListJSONVar = optionsListJSONVar;
varBag.startingSelectionJSONVar = startingSelectionJSONVar;
varBag.internalConfigs_StartingSelectionJSONVar = internalConfigs_StartingSelectionJSONVar;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:q_stMBV8vkC5CEWaCJ_i_w:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.FpkU836JgkC_F1eF5nLw7A/ClientActions.q_stMBV8vkC5CEWaCJ_i_w:+5wjZsn+XfYH0L9Yk5rC7A", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:kd2dbXf9YkGw92gjdaM2fA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:YYDCNznjf0WyEcUMt+uQuw", callContext.id);
// JSON Serialize: OptionsListJSON
optionsListJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsListIn, false, false);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:xs3aLxgf+0eZBz3rlo2hEg", callContext.id);
// JSON Serialize: InternalConfigs_OptionsListJSON
internalConfigs_OptionsListJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar.optionsListAttr, false, false);
// OptionsList?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:iVwGmL8ICUe3FVRLxzqbtQ", callContext.id) && ((optionsListJSONVar.value.jSONOut) !== (internalConfigs_OptionsListJSONVar.value.jSONOut)))) {
// Set OptionsList
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:+yDncuH_xU+hiU11bMTxFQ", callContext.id);
// InternalConfigs.OptionsList = OptionsList
model.variables.internalConfigsVar.optionsListAttr = model.variables.optionsListIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zI+WlQ6D8EypXM3KoLDxkA", callContext.id);
// Execute Action: Update_OptionsList
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "OptionsList", optionsListJSONVar.value.jSONOut, callContext);
}

OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Y2Eccd4Liku7GOuo3jYWTA", callContext.id);
// JSON Serialize: StartingSelectionJSON
startingSelectionJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.startingSelectionIn, false, false);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:b5C_ciE0XU2YVa8hl3Yqzg", callContext.id);
// JSON Serialize: InternalConfigs_StartingSelectionJSON
internalConfigs_StartingSelectionJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar.startingSelectionAttr, false, false);
// StartingSelection?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:34qVoixalU6aqKMvdUwwVg", callContext.id) && ((startingSelectionJSONVar.value.jSONOut) !== (internalConfigs_StartingSelectionJSONVar.value.jSONOut)))) {
// Set StartingSelection
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:wJtpBsAQl0iDsnIUH7YFoA", callContext.id);
// InternalConfigs.StartingSelection = StartingSelection
model.variables.internalConfigsVar.startingSelectionAttr = model.variables.startingSelectionIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:uv_RBl4DtUuoLjCZxlnlAA", callContext.id);
// Execute Action: Update_StartingSelection
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "StartingSelection", startingSelectionJSONVar.value.jSONOut, callContext);
}

// Prompt?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Ye0ebB98Rkqw7VMUNe3wBA", callContext.id) && ((model.variables.promptIn) !== (model.variables.internalConfigsVar.promptAttr)))) {
// Set Prompt
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:++TY+SBYekCsSFRZ1Iftlw", callContext.id);
// InternalConfigs.Prompt = If
model.variables.internalConfigsVar.promptAttr = (((model.variables.promptIn === "")) ? (model.variables.prompt_DefaultVar) : (model.variables.promptIn));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:QrLVsMUX_E+fyG121rBs2A", callContext.id);
// Execute Action: Update_Prompt
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Prompt", model.variables.internalConfigsVar.promptAttr, callContext);
}

// IsDisabled?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Ey4y47o2wEW7oJFfnoxzog", callContext.id) && ((model.variables.optionalConfigsIn.isDisabledAttr) !== (model.variables.internalConfigsVar.isDisabledAttr)))) {
// Set IsDisabled
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:C0AvfK6hJkqak4O2XzgUog", callContext.id);
// InternalConfigs.IsDisabled = OptionalConfigs.IsDisabled
model.variables.internalConfigsVar.isDisabledAttr = model.variables.optionalConfigsIn.isDisabledAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2oPvuf1s6EmpL3siCNVVzw", callContext.id);
// Execute Action: Update_IsDisabled
OutSystemsUI_2_23Controller.default.dropdownChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "IsDisabled", model.variables.internalConfigsVar.isDisabledAttr, callContext);
}

// NoResultsText?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ny26xgyvfECCEgH1HEEa7A", callContext.id) && ((model.variables.optionalConfigsIn.noResultsTextAttr) !== (model.variables.internalConfigsVar.noResultsTextAttr)))) {
// Set NoResultsText
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:FIGvtvQAz0WzkBBUO76CbQ", callContext.id);
// InternalConfigs.NoResultsText = If
model.variables.internalConfigsVar.noResultsTextAttr = (((model.variables.optionalConfigsIn.noResultsTextAttr === "")) ? (model.variables.noResultsText_DefaultVar) : (model.variables.optionalConfigsIn.noResultsTextAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Vjh7OkdS+0qO9J7zVIQA4w", callContext.id);
// Execute Action: Update_NoResultsText
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "NoResultsText", model.variables.internalConfigsVar.noResultsTextAttr, callContext);
}

// NoOptionsText?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:h7S9ctrFf0CLBVRTofvBmA", callContext.id) && ((model.variables.optionalConfigsIn.noOptionsTextAttr) !== (model.variables.internalConfigsVar.noOptionsTextAttr)))) {
// Set NoOptionsText
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:dDXc9XsBoUG0zjkYG2cNhw", callContext.id);
// InternalConfigs.NoOptionsText = If
model.variables.internalConfigsVar.noOptionsTextAttr = (((model.variables.optionalConfigsIn.noOptionsTextAttr === "")) ? (model.variables.noOptionsText_DefaultVar) : (model.variables.optionalConfigsIn.noOptionsTextAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:trD603Sxvkuq+wP_rcHm_Q", callContext.id);
// Execute Action: Update_NoOptionsText
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "NoOptionsText", model.variables.internalConfigsVar.noOptionsTextAttr, callContext);
}

// SearchPrompt?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:6ndrMZKWj0qcxEtAo1AN6A", callContext.id) && ((model.variables.optionalConfigsIn.searchPromptAttr) !== (model.variables.internalConfigsVar.searchPromptAttr)))) {
// Set SearchPrompt
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:F7EjI2gSuUG8r6c+Rw2JGA", callContext.id);
// InternalConfigs.SearchPrompt = If
model.variables.internalConfigsVar.searchPromptAttr = (((model.variables.optionalConfigsIn.searchPromptAttr === "")) ? (model.variables.searchPrompt_DefaultVar) : (model.variables.optionalConfigsIn.searchPromptAttr));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:JReZ+zJ2406bQd3ero8uRw", callContext.id);
// Execute Action: Update_SearchPrompt
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "SearchPrompt", model.variables.internalConfigsVar.searchPromptAttr, callContext);
}

// SanitizeDropdownValues?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:BwBb83APXEuYTbtl+sccag", callContext.id) && ((model.variables.optionalConfigsIn.sanitizeDropdownValuesAttr) !== (model.variables.internalConfigsVar.sanitizeDropdownValuesAttr)))) {
// Set SanitizeDropdownValues
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:mUKggbyFPkyMxBDQl4zfnA", callContext.id);
// InternalConfigs.SanitizeDropdownValues = OptionalConfigs.SanitizeDropdownValues
model.variables.internalConfigsVar.sanitizeDropdownValuesAttr = model.variables.optionalConfigsIn.sanitizeDropdownValuesAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:BRLFTZ7m6EyZ5qGQDjl_ZQ", callContext.id);
// Execute Action: Update_SanitizeDropdownValues
OutSystemsUI_2_23Controller.default.dropdownChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "SanitizeDropdownValues", model.variables.internalConfigsVar.sanitizeDropdownValuesAttr, callContext);
}

// ExtendedClass?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PF0fRjaAEkiTdyvOwAXdEg", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internalConfigsVar.extendedClassAttr)))) {
// Set ExtendedClass
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:VbQRz2W8ik63okaCjPnLAA", callContext.id);
// InternalConfigs.ExtendedClass = ExtendedClass
model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Ml8ZAyK4P0mvJgC65toY+w", callContext.id);
// Execute Action: Update_ExtendedClass
OutSystemsUI_2_23Controller.default.dropdownChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internalConfigsVar.extendedClassAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:i4Y3AZZ1+Uq04QuUDgd7Ug", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:i4Y3AZZ1+Uq04QuUDgd7Ug", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:q_stMBV8vkC5CEWaCJ_i_w", callContext.id);
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:F6PfRYgSJ0aXa7eCajyNCA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.FpkU836JgkC_F1eF5nLw7A/ClientActions.F6PfRYgSJ0aXa7eCajyNCA:pnnuwUjJtEcOLLEJvrgukw", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:cf3bm+9uz0SKYeETNXUgzg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:kCCjrK75REaw31GD+tSslw", callContext.id);
// Execute Action: DropdownDestroy
OutSystemsUI_2_23Controller.default.dropdownDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:TIl5PTKD+UaSfzT_HKnqWw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:F6PfRYgSJ0aXa7eCajyNCA", callContext.id);
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:YuN3mOfslkuMay2T+392Rw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.FpkU836JgkC_F1eF5nLw7A/ClientActions.YuN3mOfslkuMay2T+392Rw:_iR4AZ8DXNzSX9yD4nBoqQ", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:FdYXeKPMUk+pFFupP1BP+Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:BK9Ere0uvEqH1yNhb_JifQ", callContext.id);
// Execute Action: DropdownInitialize
OutSystemsUI_2_23Controller.default.dropdownInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:LlVSuvToCEyfH5x_MWuRwQ", callContext.id);
// Execute Action: LogEnd
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Dropdown Tags created", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:53_h7Xmx7kKAvAipJrLF8g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:YuN3mOfslkuMay2T+392Rw", callContext.id);
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:2RZawDcLvkGoSRN+4aJZgg:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.FpkU836JgkC_F1eF5nLw7A/ClientActions.2RZawDcLvkGoSRN+4aJZgg:lSJL_7IBKKcRuEwznt15Pw", "OutSystemsUI_2_23", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Soq+O3_rCUGI8YVemCP_Gw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Qh4zkVHE00SZaFQjqDGtvA", callContext.id);
getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Interaction_DropdownTags_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
OnSelected: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownTags.RegisterCallbacks$getCallbackHandlersJSResult"))();
jsNodeResult.onSelectedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnSelected, OS.DataTypes.DataTypes.Object);
jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
InitializedHandler: controller.clientActionProxies.initializedHandler$Action,
OnSelectHandler: controller.clientActionProxies.onSelectHandler$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:gSNRr7mk6kiqFtETSYdwXA", callContext.id);
// Execute Action: RegisterOnSelected
OutSystemsUI_2_23Controller.default.dropdownRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.onSelected, getCallbackHandlersJSResult.value.onSelectedOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:7dhJ7nHYCkCe81j_KIsIIw", callContext.id);
// Execute Action: RegisterOnInitialize
OutSystemsUI_2_23Controller.default.dropdownRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:D7Mym_3q40eAZ0+NZVmS_A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:2RZawDcLvkGoSRN+4aJZgg", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.DropdownTags.RegisterCallbacks$getCallbackHandlersJSResult", [{
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

Controller.prototype.onSelectHandler$Action = function (dropdownTagsIdIn, selectedOptionsJSONIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onSelectHandler$Action, callContext, dropdownTagsIdIn, selectedOptionsJSONIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.initializedHandler$Action = function (dropdownTagsIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, dropdownTagsIdIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

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
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:FpkU836JgkC_F1eF5nLw7A:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.FpkU836JgkC_F1eF5nLw7A:dtcQLFtUudIOIE1XFZbXwQ", "OutSystemsUI_2_23", "DropdownTags", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:FpkU836JgkC_F1eF5nLw7A", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:qQS9OZYcu0SRmBsR92a4Og", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/DropdownTags On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/DropdownTags On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/DropdownTags On Destroy");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/DropdownTags On Parameters Changed");
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
define("OutSystemsUI_2_23.Interaction.DropdownTags.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Initialized = $actions.InitializedHandler;
$parameters.OnSelected = $actions.OnSelectHandler;
};
});

define("OutSystemsUI_2_23.Interaction.DropdownTags.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"tVz1oiPOPkSuRa12N0UucA": {
getter: function (varBag, idService) {
return varBag.vars.value.dropdownTagsIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NgSMEy7YmUOVOKCsjqVt2g": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedOptionsJSONInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Y4wIkyMuaUmvRR3O2_g3OA": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeDropdownOptionVar.value;
}
},
"YyPEGlMWAky+TSZyfAPMeA": {
getter: function (varBag, idService) {
return varBag.generateUniqueIdVar.value;
}
},
"x7jAqMiLlkSG6g6MEvbOPA": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"BqwljEzFbEOqVXEL7XeG4w": {
getter: function (varBag, idService) {
return varBag.vars.value.dropdownTagsIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xs3aLxgf+0eZBz3rlo2hEg": {
getter: function (varBag, idService) {
return varBag.internalConfigs_OptionsListJSONVar.value;
}
},
"YYDCNznjf0WyEcUMt+uQuw": {
getter: function (varBag, idService) {
return varBag.optionsListJSONVar.value;
}
},
"Y2Eccd4Liku7GOuo3jYWTA": {
getter: function (varBag, idService) {
return varBag.startingSelectionJSONVar.value;
}
},
"b5C_ciE0XU2YVa8hl3Yqzg": {
getter: function (varBag, idService) {
return varBag.internalConfigs_StartingSelectionJSONVar.value;
}
},
"Qh4zkVHE00SZaFQjqDGtvA": {
getter: function (varBag, idService) {
return varBag.getCallbackHandlersJSResult.value;
}
},
"r8zj9ugyt0Sec4exNxVuFQ": {
getter: function (varBag, idService) {
return varBag.model.variables.internalConfigsVar;
}
},
"qWjICYuwokuuHAM6JrAjGg": {
getter: function (varBag, idService) {
return varBag.model.variables.noOptionsText_DefaultVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"D98+XnaOjEu3Xi2BdYDULA": {
getter: function (varBag, idService) {
return varBag.model.variables.noResultsText_DefaultVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Buwfrpe7A0S1HygY_XBBjg": {
getter: function (varBag, idService) {
return varBag.model.variables.prompt_DefaultVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NrVwcCZlK0qr3CN743Nv6Q": {
getter: function (varBag, idService) {
return varBag.model.variables.searchPrompt_DefaultVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"eaMoXYokk0i9TfFuruDAqg": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsListIn;
}
},
"tk5DOKRHS0WRKPL+payWIw": {
getter: function (varBag, idService) {
return varBag.model.variables.startingSelectionIn;
}
},
"MFmjjsSqekGmMCrnmItUnA": {
getter: function (varBag, idService) {
return varBag.model.variables.promptIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Rg9yGl2ewUaV0PSeOjFDLQ": {
getter: function (varBag, idService) {
return varBag.model.variables.optionalConfigsIn;
}
},
"pKpfw_WdREe4NTIYJfl9vQ": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TPnp2uUJeEu47CSU9kGhlw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideInPreview"));
})(varBag.model, idService);
}
},
"5Kt69sCUgE6nbiwhRyL5Jw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DropdownTags"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Interaction.DropdownTags.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
