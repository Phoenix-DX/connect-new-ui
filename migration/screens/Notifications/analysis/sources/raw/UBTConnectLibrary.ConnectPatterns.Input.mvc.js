define("UBTConnectLibrary.ConnectPatterns.Input.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model$SearchInputRec", "UBTJavaScriptUtils.controller$JSUtils_DebounceTimer", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "UBTConnectLibrary.controller$FocusOnInput", "UBTJavaScriptUtils.controller$JSUtilis_Element_Operations_Focus", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_SetAttribute", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnectLibrary.controller$CheckForEnterKeyPress", "UBTConnectLibrary.controller$BlurInput"], function (OutSystems, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnectLibraryController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SearchString", "searchStringVar", "SearchString", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("In_Options", "in_OptionsIn", "In_Options", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SearchInputRec());
}, false, UBTConnectLibraryModel.SearchInputRec), 
this.attr("_in_OptionsInDataFetchStatus", "_in_OptionsInDataFetchStatus", "_in_OptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClasses", "in_ExtendedClassesIn", "In_ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
return {
Input_Search: OS.Model.ValidationWidgetRecord
};
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
return true;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_Options" in inputs) {
this.variables.in_OptionsIn = inputs.In_Options;
if("_in_OptionsInDataFetchStatus" in inputs) {
this.variables._in_OptionsInDataFetchStatus = inputs._in_OptionsInDataFetchStatus;
}

}

if("In_ExtendedClasses" in inputs) {
this.variables.in_ExtendedClassesIn = inputs.In_ExtendedClasses;
if("_in_ExtendedClassesInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClassesInDataFetchStatus = inputs._in_ExtendedClassesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.Input");
});
define("UBTConnectLibrary.ConnectPatterns.Input.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.Input.mvc$model", "UBTConnectLibrary.ConnectPatterns.Input.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.model$SearchInputRec", "UBTJavaScriptUtils.controller$JSUtils_DebounceTimer", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "UBTConnectLibrary.controller$FocusOnInput", "UBTJavaScriptUtils.controller$JSUtilis_Element_Operations_Focus", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_SetAttribute", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnectLibrary.controller$CheckForEnterKeyPress", "UBTConnectLibrary.controller$BlurInput"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, React, OSView, UBTConnectLibrary_ConnectPatterns_Input_mvc_model, UBTConnectLibrary_ConnectPatterns_Input_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "ConnectPatterns.Input";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_Input_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_Input_mvc_controller;
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
style: "ubt-search-input",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
inputs: {
AlignIconRight: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((model.variables.searchStringVar === ""), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.inherit,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.search,
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.medium_20
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
inputs: {
AlignIconRight: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if(((model.variables.searchStringVar) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.cancelFill,
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.inherit,
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.medium_20
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
return controller.onClick_ClearString$Action(true, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "4",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: model.variables.in_OptionsIn.isEnabledAttr,
extendedEvents: {
onKeyUp: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input/Input_Search onkeyup");
return controller.onKeyup$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input/Input_Search onfocus");
controller.event_OnFocus$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
maxLength: (model.variables.in_OptionsIn.maxLengthAttr).toString(),
autoComplete: model.getCachedValue(idService.getId("Input_Search.autocomplete"), function () {
return ((model.variables.in_OptionsIn.enableAutocompleteHTMLAttr) ? ("on") : ("off"));
}, function () {
return model.variables.in_OptionsIn.enableAutocompleteHTMLAttr;
})
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Search*/ 8,
mandatory: model.variables.in_OptionsIn.isMandatoryAttr,
maxLength: 50,
onChange: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input/Input_Search OnChange");
return controller.onChange$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
prompt: model.variables.in_OptionsIn.searchPromptAttr,
style: model.getCachedValue(idService.getId("Input_Search.Style"), function () {
return (("form-control " + model.variables.in_ExtendedClassesIn) + ((((model.variables.in_OptionsIn.borderRadiusAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" border-radius-" + model.variables.in_OptionsIn.borderRadiusAttr)) : ("")));
}, function () {
return model.variables.in_ExtendedClassesIn;
}, function () {
return model.variables.in_OptionsIn.borderRadiusAttr;
}),
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchStringVar, function (value) {
model.variables.searchStringVar = value;
}),
_idProps: {
service: idService,
name: "Input_Search"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OptionsInDataFetchStatus),
mandatory_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OptionsInDataFetchStatus),
prompt_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OptionsInDataFetchStatus),
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus, model.variables._in_OptionsInDataFetchStatus)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ExtendedClassesIn), asPrimitiveValue(model.variables._in_ExtendedClassesInDataFetchStatus), asPrimitiveValue(model.variables._in_OptionsInDataFetchStatus), asPrimitiveValue(model.variables.in_OptionsIn.maxLengthAttr), asPrimitiveValue(model.variables.in_OptionsIn.borderRadiusAttr), asPrimitiveValue(model.variables.in_OptionsIn.isEnabledAttr), asPrimitiveValue(model.variables.in_OptionsIn.isMandatoryAttr), asPrimitiveValue(model.variables.in_OptionsIn.searchPromptAttr), asPrimitiveValue(model.variables.searchStringVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ExtendedClassesIn), asPrimitiveValue(model.variables._in_ExtendedClassesInDataFetchStatus), asPrimitiveValue(model.variables._in_OptionsInDataFetchStatus), asPrimitiveValue(model.variables.in_OptionsIn.maxLengthAttr), asPrimitiveValue(model.variables.in_OptionsIn.borderRadiusAttr), asPrimitiveValue(model.variables.in_OptionsIn.isEnabledAttr), asPrimitiveValue(model.variables.in_OptionsIn.isMandatoryAttr), asPrimitiveValue(model.variables.in_OptionsIn.searchPromptAttr), asPrimitiveValue(model.variables.searchStringVar)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.Input.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.Input.mvc$debugger", "UBTConnectLibrary.ConnectPatterns.Input.mvc$controller.OnChange.JavaScript1JS", "UBTConnectLibrary.ConnectPatterns.Input.mvc$controller.OnReady.GetFunctionJS", "UBTConnectLibrary.model$SearchInputRec", "UBTJavaScriptUtils.controller$JSUtils_DebounceTimer", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "UBTConnectLibrary.controller$FocusOnInput", "UBTJavaScriptUtils.controller$JSUtilis_Element_Operations_Focus", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_SetAttribute", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnectLibrary.controller$CheckForEnterKeyPress", "UBTConnectLibrary.controller$BlurInput"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_Input_mvc_Debugger, UBTConnectLibrary_ConnectPatterns_Input_mvc_controller_OnChange_JavaScript1JS, UBTConnectLibrary_ConnectPatterns_Input_mvc_controller_OnReady_GetFunctionJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
event_OnChange2$Action: function () {
return controller.executeActionInsideJSNode(controller._event_OnChange2$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Event_OnChange2");
},
onClick_ClearString$Action: function (focusIn) {
focusIn = (focusIn === undefined) ? false : focusIn;
return controller.executeActionInsideJSNode(controller._onClick_ClearString$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(focusIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnClick_ClearString");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._event_OnChange2$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_OnChange2");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:ET4nP7ZEVUybZvKm0vlUfw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._MpweN4tNkWriTkPFxlVbA/ClientActions.ET4nP7ZEVUybZvKm0vlUfw:uy_BX6FuIh5H5UnYrxsr+g", "UBTConnectLibrary", "Event_OnChange2", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tX7lh9N57EqLE_R80dYb0w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jF97KvtNO0OYhrrccxYBoA", callContext.id);
// Trigger Event: Event_OnChange
return controller.event_OnChange$Action(model.variables.searchStringVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:OzSNEFfzW06HY6WxFv8gHw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:ET4nP7ZEVUybZvKm0vlUfw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:ET4nP7ZEVUybZvKm0vlUfw", callContext.id);
throw ex;

});
};
Controller.prototype._onChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange");
callContext = controller.callContext(callContext);
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.javaScript1JSResult = javaScript1JSResult;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GSP9QW+tMEyyt0yMVaLkIA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._MpweN4tNkWriTkPFxlVbA/ClientActions.GSP9QW+tMEyyt0yMVaLkIA:LkwbseaVeuh1J5AKOBI9KQ", "UBTConnectLibrary", "OnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pdU2QgXrS0Gsk4JXRM7JGQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Is Mandatory?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zOBrCXR5NkyZN4Pyxdp1Fw", callContext.id) && model.variables.in_OptionsIn.isMandatoryAttr)) {
// Set Input Valid status
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6pspo8uFpEGshT3Ms2hQgA", callContext.id);
// Input_Search.Valid = SearchString <> ""
model.widgets.get(idService.getId("Input_Search")).validAttr = ((model.variables.searchStringVar) !== (""));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6pspo8uFpEGshT3Ms2hQgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Search.ValidationMessage = If
model.widgets.get(idService.getId("Input_Search")).validationMessageAttr = ((((model.variables.searchStringVar) !== (""))) ? ("") : (model.variables.in_OptionsIn.validationMessageAttr));
}

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:abC3AMWtTE+LeR_mb6+AJw", callContext.id) && ((model.variables.in_OptionsIn.debounce_DelayMSAttr) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ps4tsaw4A02lJikOenICAA", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_Input_mvc_controller_OnChange_JavaScript1JS, "JavaScript1", "OnChange", {
Action: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.Input.OnChange$javaScript1JSResult"))();
jsNodeResult.actionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Action, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Event_OnChange2: controller.clientActionProxies.event_OnChange2$Action
}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lw_ycqkuDkmWfpx6QC90OQ", callContext.id);
// Execute Action: JSUtils_DebounceTimer
UBTJavaScriptUtilsController.default.jSUtils_DebounceTimer$Action(idService.getId("Input_Search"), model.variables.in_OptionsIn.debounce_DelayMSAttr, javaScript1JSResult.value.actionOut, null, callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eo78uPE+A0uBcGBC2dJ99A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Sd+3sLcyOkyiuiXt8NigHQ", callContext.id);
// Execute Action: Event_OnChange2
return controller._event_OnChange2$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:b8sprTVYb0+eGqocMlZLSA", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GSP9QW+tMEyyt0yMVaLkIA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GSP9QW+tMEyyt0yMVaLkIA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.Input.OnChange$javaScript1JSResult", [{
name: "Action",
attrName: "actionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onClick_ClearString$Action = function (focusIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_ClearString");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.Input.OnClick_ClearString$vars"))());
vars.value.focusInLocal = focusIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:TVn8hsNEO0KMtkr0wSllgg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._MpweN4tNkWriTkPFxlVbA/ClientActions.TVn8hsNEO0KMtkr0wSllgg:QVl782iB5A5thNmX_I3Cow", "UBTConnectLibrary", "OnClick_ClearString", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:w5fdBlIuWUam0Gwdbh_P_w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:fZbfCi4_qUCOOQtIcg_awA", callContext.id);
// SearchString = ""
model.variables.searchStringVar = "";
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lNOzm4XDTEWjnf5V3yqr0Q", callContext.id) && vars.value.focusInLocal)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7XH8h5DvTU2sXU7cX+8UKw", callContext.id);
// Execute Action: FocusOnInput
UBTConnectLibraryController.default.focusOnInput$Action(idService.getId("Input_Search"), callContext);
}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:p3MkhXGI30CTkkkcrFZNew", callContext.id);
// Trigger Event: Event_ClearString
return controller.event_ClearString$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LgRH9gGnY0G0ldaXagZ_cA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:TVn8hsNEO0KMtkr0wSllgg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:TVn8hsNEO0KMtkr0wSllgg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.Input.OnClick_ClearString$vars", [{
name: "Focus",
attrName: "focusInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
var jSUtils_Element_Operations_GetElementByIdVar = new OS.DataTypes.VariableHolder();
var getFunctionJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.jSUtils_Element_Operations_GetElementByIdVar = jSUtils_Element_Operations_GetElementByIdVar;
varBag.getFunctionJSResult = getFunctionJSResult;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:A0zAk0l7ZU6252LB5fcIlg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._MpweN4tNkWriTkPFxlVbA/ClientActions.A0zAk0l7ZU6252LB5fcIlg:VNsS1OVx8lZ6nncK7SZyOA", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vrh_pRkfAU6F6Klur+I9sg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:DZW3T_a1Ckm7qcZDFROf4A", callContext.id);
// Execute Action: JSUtils_Element_Operations_GetElementById
jSUtils_Element_Operations_GetElementByIdVar.value = UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_GetElementById$Action(idService.getId("Input_Search"), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:04q_DsfARUOxksAnU80U6A", callContext.id);
getFunctionJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_Input_mvc_controller_OnReady_GetFunctionJS, "GetFunction", "OnReady", {
ClearString: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.Input.OnReady$getFunctionJSResult"))();
jsNodeResult.clearStringOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ClearString, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OnClick_ClearString: controller.clientActionProxies.onClick_ClearString$Action
}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:u_aLSRyuzEmcLvdtTLr8IA", callContext.id);
// Execute Action: JSUtils_Element_Operations_SetAttribute
UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_SetAttribute$Action(jSUtils_Element_Operations_GetElementByIdVar.value.elementOut, "clearStringAction", getFunctionJSResult.value.clearStringOut, callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5ie4bGCKHEyLZKSHVa+ibA", callContext.id);
// SearchString = In_Options.InitalString
model.variables.searchStringVar = model.variables.in_OptionsIn.initalStringAttr;
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xD+AGK4bSEi2_uacYshSvw", callContext.id) && model.variables.in_OptionsIn.focusOnReadyAttr)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:44okNNGJ6kqnmAH52gFwew", callContext.id);
// Execute Action: JSUtilis_Element_Operations_Focus
UBTJavaScriptUtilsController.default.jSUtilis_Element_Operations_Focus$Action(idService.getId("Input_Search"), callContext);
}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RB_kvorWnUaa+OAvZLZHXw", callContext.id);
// Trigger Event: Event_OnReady
return controller.event_OnReady$Action(idService.getId("Input_Search"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BzmfkPbqcUyRnfN57iOniw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:A0zAk0l7ZU6252LB5fcIlg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:A0zAk0l7ZU6252LB5fcIlg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.Input.OnReady$getFunctionJSResult", [{
name: "ClearString",
attrName: "clearStringOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:PameoCoVhEq_q5ejvdLeKg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._MpweN4tNkWriTkPFxlVbA/ClientActions.PameoCoVhEq_q5ejvdLeKg:OBca8DCBqtoiQ1pEfwXWZw", "UBTConnectLibrary", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ButMUzRlgky+Ql+6YHcqwA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lmufh+oFc0aSPf7jomSfPw", callContext.id);
// Execute Action: JSUtils_DebounceTimer
UBTJavaScriptUtilsController.default.jSUtils_DebounceTimer$Action(idService.getId("Input_Search"), -1, OS.BuiltinFunctions.nullObject(), null, callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YIW4iB3OpU2uvlf_OXO4GA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:PameoCoVhEq_q5ejvdLeKg", callContext.id);
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:zwocql7kQ0aukfwwULwmBw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._MpweN4tNkWriTkPFxlVbA/ClientActions.zwocql7kQ0aukfwwULwmBw:TDGLuUqfbJqhwLDoLRjEOQ", "UBTConnectLibrary", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4LDOm7kIrk+CXAuhoONmoA", callContext.id);
// Needs to replace 
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:IWTswWNs+E+DTxa93FE8Tg", callContext.id) && ((((model.variables.in_OptionsIn.initalStringAttr) !== ("")) && ((model.variables.in_OptionsIn.initalStringAttr) !== (model.variables.searchStringVar))) || model.variables.in_OptionsIn.isSyncValueWithInputAttr))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cSUFj4kYR0aQUH1iclDGLw", callContext.id);
// SearchString = In_Options.InitalString
model.variables.searchStringVar = model.variables.in_OptionsIn.initalStringAttr;
}

// Set Input Valid status
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sncr5URNDkegvuIpu8Vw2w", callContext.id);
// Input_Search.Valid = If
model.widgets.get(idService.getId("Input_Search")).validAttr = ((model.variables.in_OptionsIn.isForceInvalidAttr) ? (false) : (((model.variables.in_OptionsIn.isMandatoryAttr) ? (((model.variables.searchStringVar) !== (""))) : (true))));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sncr5URNDkegvuIpu8Vw2w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Search.ValidationMessage = If
model.widgets.get(idService.getId("Input_Search")).validationMessageAttr = ((model.variables.in_OptionsIn.isForceInvalidAttr) ? (model.variables.in_OptionsIn.validationMessageAttr) : ((((model.variables.in_OptionsIn.isMandatoryAttr && (model.variables.searchStringVar === ""))) ? (model.variables.in_OptionsIn.validationMessageAttr) : (""))));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bYl_4stpBEmA_v4Ohoqtig", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:zwocql7kQ0aukfwwULwmBw", callContext.id);
}

};
Controller.prototype._onKeyup$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnKeyup");
callContext = controller.callContext(callContext);
var checkForEnterKeyPressVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkForEnterKeyPressVar = checkForEnterKeyPressVar;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:T7jju6MPz0mpJ4A7Nuck9w:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._MpweN4tNkWriTkPFxlVbA/ClientActions.T7jju6MPz0mpJ4A7Nuck9w:t843xWab+siXGAPSo2WWgA", "UBTConnectLibrary", "OnKeyup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SqCnbgXapUqP_BuE3xbKfw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NEfDbik7Ykah8JjSNkZZmg", callContext.id);
// Execute Action: CheckForEnterKeyPress
checkForEnterKeyPressVar.value = UBTConnectLibraryController.default.checkForEnterKeyPress$Action(callContext);

// Is Enter Key?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6EZk+By2y0Kswmw5a6EtHg", callContext.id) && checkForEnterKeyPressVar.value.isEnterKeyOut)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HMhutXZmUkq3fd_th2a5RQ", callContext.id);
// Execute Action: BlurInput
UBTConnectLibraryController.default.blurInput$Action(idService.getId("Input_Search"), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4BlNkRY2D0u6fCdh6VpGUg", callContext.id);
// Trigger Event: Event_Submit
return controller.event_Submit$Action(model.variables.searchStringVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rojQQcmHfUa7PzjhRq+XoQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qSSw6kIFt0mLdmqGZ2Swgw", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:T7jju6MPz0mpJ4A7Nuck9w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:T7jju6MPz0mpJ4A7Nuck9w", callContext.id);
throw ex;

});
};

Controller.prototype.event_OnChange2$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_OnChange2$Action, callContext);

};
Controller.prototype.onChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange$Action, callContext);

};
Controller.prototype.onClick_ClearString$Action = function (focusIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_ClearString$Action, callContext, focusIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onKeyup$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onKeyup$Action, callContext);

};
Controller.prototype.event_OnChange$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_ClearString$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_Submit$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_OnReady$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_OnFocus$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:3o_94888UGa0qaomZFOpnQ", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:_MpweN4tNkWriTkPFxlVbA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._MpweN4tNkWriTkPFxlVbA:B1WJp77AJv5OC9LWvc4YfQ", "UBTConnectLibrary", "Input", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:_MpweN4tNkWriTkPFxlVbA", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/Input On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/Input On Destroy");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/Input On Parameters Changed");
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
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});
define("UBTConnectLibrary.ConnectPatterns.Input.mvc$controller.OnChange.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Action = $actions.Event_OnChange2;
};
});
define("UBTConnectLibrary.ConnectPatterns.Input.mvc$controller.OnReady.GetFunctionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ClearString = $actions.OnClick_ClearString
};
});

define("UBTConnectLibrary.ConnectPatterns.Input.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"ps4tsaw4A02lJikOenICAA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"jm_9lOBvqUKFP9csGP3N6g": {
getter: function (varBag, idService) {
return varBag.vars.value.focusInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"DZW3T_a1Ckm7qcZDFROf4A": {
getter: function (varBag, idService) {
return varBag.jSUtils_Element_Operations_GetElementByIdVar.value;
}
},
"04q_DsfARUOxksAnU80U6A": {
getter: function (varBag, idService) {
return varBag.getFunctionJSResult.value;
}
},
"NEfDbik7Ykah8JjSNkZZmg": {
getter: function (varBag, idService) {
return varBag.checkForEnterKeyPressVar.value;
}
},
"ex8PH+XdvUOIJXsBu9IOEQ": {
getter: function (varBag, idService) {
return varBag.model.variables.searchStringVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WAq45Lx8Y0Wo6ZPWRUw3_A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OptionsIn;
}
},
"PHIaiaU4Lk2TpOT4EHjqtg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vJZoeXKvMU+6rhVF8+QvlA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"_AvqhrBz5UeqB+_YBm8x_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasNoSearchString"));
})(varBag.model, idService);
}
},
"dwfGsMblYk2j6EPCyNBrmw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"ws6CbI4ObUKaZ9RXf0lEcA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"6Md3s9Sh7UaP3eljfbjWKw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasSearchString"));
})(varBag.model, idService);
}
},
"hprlDobF6k6khIVK9XdAdw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"w0RelgdKEUyD72nhh+nh8A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Search"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
