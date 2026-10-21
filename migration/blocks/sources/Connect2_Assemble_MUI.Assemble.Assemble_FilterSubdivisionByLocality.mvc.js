define("Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model$SubdivisionsItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$SubdivisionsItemList", "Connect2_LegacyShared.controller$RemoveDiacritics", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_Assemble_MUI.controller$GetLocality"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, Connect2_Assemble_MUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("FullSubdivisionsList", "fullSubdivisionsListVar", "FullSubdivisionsList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.SubdivisionsItemList());
}, false, Connect2_Assemble_MUIModel.SubdivisionsItemList), 
this.attr("FilteredSubdivisionsList", "filteredSubdivisionsListVar", "FilteredSubdivisionsList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.SubdivisionsItemList());
}, false, Connect2_Assemble_MUIModel.SubdivisionsItemList), 
this.attr("SearchTerm", "searchTermVar", "SearchTerm", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsFetchingSubdivisions", "isFetchingSubdivisionsVar", "IsFetchingSubdivisions", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("LocalityId", "localityIdIn", "LocalityId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_localityIdInDataFetchStatus", "_localityIdInDataFetchStatus", "_localityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("SelectedSubdivisionId", "selectedSubdivisionIdIn", "SelectedSubdivisionId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_selectedSubdivisionIdInDataFetchStatus", "_selectedSubdivisionIdInDataFetchStatus", "_selectedSubdivisionIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Input_SearchTearn: OS.Model.ValidationWidgetRecord
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
if("LocalityId" in inputs) {
this.variables.localityIdIn = inputs.LocalityId;
if("_localityIdInDataFetchStatus" in inputs) {
this.variables._localityIdInDataFetchStatus = inputs._localityIdInDataFetchStatus;
}

}

if("SelectedSubdivisionId" in inputs) {
this.variables.selectedSubdivisionIdIn = inputs.SelectedSubdivisionId;
if("_selectedSubdivisionIdInDataFetchStatus" in inputs) {
this.variables._selectedSubdivisionIdInDataFetchStatus = inputs._selectedSubdivisionIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Assemble.Assemble_FilterSubdivisionByLocality");
});
define("Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$model", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$controller", "Connect2_LegacyShared.Reusable.Spinner.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "OutSystemsUI_2_23.Utilities.Separator.mvc$view", "Connect2_LegacyShared.Reusable.RadioButtonListItem.mvc$view", "Connect2_LegacyShared.model$SubdivisionsItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$SubdivisionsItemList", "Connect2_LegacyShared.controller$RemoveDiacritics", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_Assemble_MUI.controller$GetLocality"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, React, OSView, Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_model, Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_controller, Connect2_LegacyShared_Reusable_Spinner_mvc_view, OSWidgets, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, OutSystemsUI_2_23_Utilities_Separator_mvc_view, Connect2_LegacyShared_Reusable_RadioButtonListItem_mvc_view) {
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
        View.displayName = "Assemble.Assemble_FilterSubdivisionByLocality";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Reusable_Spinner_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, OutSystemsUI_2_23_Utilities_Separator_mvc_view, Connect2_LegacyShared_Reusable_RadioButtonListItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isFetchingSubdivisionsVar, false, this, function () {
return [React.createElement(Connect2_LegacyShared_Reusable_Spinner_mvc_view, {
inputs: {
ShowLoader: model.variables.isFetchingSubdivisionsVar
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "DIV_SuperMeetings"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
inputs: {},
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
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "search",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedProperties: {
autoComplete: "off",
style: "border-width: 0px 0px 1px 0px;"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Search*/ 8,
mandatory: false,
maxLength: 50,
onChange: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterSubdivisionByLocality/Input_SearchTearn OnChange");
return controller.onChange_SearchTerm$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
prompt: "Search Supper Meetings",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchTermVar, function (value) {
model.variables.searchTermVar = value;
}),
_idProps: {
service: idService,
name: "Input_SearchTearn"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.searchTermVar)]
}), React.createElement(OutSystemsUI_2_23_Utilities_Separator_mvc_view, {
inputs: {
Space: Connect2_Assemble_MUIModel.staticEntities.space.none
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
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(!(model.variables.filteredSubdivisionsListVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.filteredSubdivisionsListVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-y-s padding-x-base",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).isMainHallAttr), asPrimitiveValue(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables._selectedSubdivisionIdInDataFetchStatus), asPrimitiveValue(model.variables.selectedSubdivisionIdIn)]
}, React.createElement(Connect2_LegacyShared_Reusable_RadioButtonListItem_mvc_view, {
inputs: {
SelectedValue: OS.BuiltinFunctions.longIntegerToText(model.variables.selectedSubdivisionIdIn),
_selectedValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedSubdivisionIdInDataFetchStatus),
RadioButtonValue: OS.BuiltinFunctions.longIntegerToText(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).idAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
selected$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/RadioButtonListItem Selected");
controller.selectedSubdivision$Action(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "8",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: model.getCachedValue(idService.getId("PGj9pV0eqkSX_DiGkk0coA.style"), function () {
return (("color: " + ((model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).isMainHallAttr) ? ("var(--color-primary)") : ("var(--color-neutral-10)"))) + ";");
}, function () {
return model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).isMainHallAttr;
})
},
style: "font-regular",
value: model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).isMainHallAttr), asPrimitiveValue(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).nameAttr)]
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._selectedSubdivisionIdInDataFetchStatus), asPrimitiveValue(model.variables.selectedSubdivisionIdIn)]
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-x-base margin-y-base",
visible: true,
_idProps: {
service: idService,
name: "DIV_NoResultsFound"
},
_widgetRecordProvider: widgetsRecordProvider
}, "No results found")];
}))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$debugger", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_LegacyShared.model$SubdivisionsItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$SubdivisionsItemList", "Connect2_LegacyShared.controller$RemoveDiacritics", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_Assemble_MUI.controller$GetLocality"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_Debugger, Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onChange_SearchTerm$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_SearchTerm");
callContext = controller.callContext(callContext);
var removeDiacriticsVar = new OS.DataTypes.VariableHolder();
var listFilterLocalityVar = new OS.DataTypes.VariableHolder();
var getLocalityVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.removeDiacriticsVar = removeDiacriticsVar;
varBag.listFilterLocalityVar = listFilterLocalityVar;
varBag.getLocalityVar = getLocalityVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:L03xO0d0DUennLlqQUt+Yw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.uSW3aujf2kyGuTzTXkBaaw/ClientActions.L03xO0d0DUennLlqQUt+Yw:8HcJEKRQi87ZwMjtNiN1dQ", "Connect2_Assemble_MUI", "OnChange_SearchTerm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:eMX_Kj5M1EOcZAon3s8Ocg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:+kEC9DzVLUWXs7wK99mriQ", callContext.id) && (model.variables.searchTermVar === ""))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:_WM4vZsxOEi9bpZAlsv+Tw", callContext.id);
// Execute Action: GetLocality
model.flush();
return Connect2_Assemble_MUIController.default.getLocality$Action(model.variables.localityIdIn, callContext).then(function (value) {
getLocalityVar.value = value;
}).then(function () {
// Set Local Data
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:bd7a2rP3DUSZN3+fQZxRHQ", callContext.id);
// FullSubdivisionsList = GetLocality.LocalityInformation.LocalitySubdivisionsList
model.variables.fullSubdivisionsListVar = getLocalityVar.value.localityInformationOut.localitySubdivisionsListAttr;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:bd7a2rP3DUSZN3+fQZxRHQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// FilteredSubdivisionsList = FullSubdivisionsList
model.variables.filteredSubdivisionsListVar = model.variables.fullSubdivisionsListVar;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:gbl2lXQgiUC1l5l46Kg1qg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:uxPWUQOJ+UKEtrfq1jT4CQ", callContext.id);
// Execute Action: RemoveDiacritics
removeDiacriticsVar.value = Connect2_LegacySharedController.default.removeDiacritics$Action(OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.trim(model.variables.searchTermVar)), callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:QDEEHOON0U+3DjzyhmYiJg", callContext.id);
// RemoveDiacritics.ProcessedText = Trim
removeDiacriticsVar.value.processedTextOut = OS.BuiltinFunctions.trim(OS.BuiltinFunctions.toLower(removeDiacriticsVar.value.processedTextOut));
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:NdemuQBjrUiS49EGgu_zRg", callContext.id);
// Execute Action: ListFilterLocality
listFilterLocalityVar.value = OS.SystemActions.listFilter(model.variables.fullSubdivisionsListVar, function (p) {
return ((OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(OS.BuiltinFunctions.toLower(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.removeDiacritics$Action(p.nameAttr, callContext).processedTextOut;
}, OS.DataTypes.DataTypes.Text, callContext.id))), removeDiacriticsVar.value.processedTextOut, 0, false, true)) !== (-1));
}, callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:IH2mh3G6Y0yyDZhyHPNdEw", callContext.id);
// FilteredSubdivisionsList = ListFilterLocality.FilteredList
model.variables.filteredSubdivisionsListVar = listFilterLocalityVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:IJbzScgUoUmjHzWCT7irvA", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:L03xO0d0DUennLlqQUt+Yw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:L03xO0d0DUennLlqQUt+Yw", callContext.id);
throw ex;

});
};
Controller.prototype._fetchSubdivisions$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("FetchSubdivisions");
callContext = controller.callContext(callContext);
var getLocalityVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getLocalityVar = getLocalityVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:yhCujmd5Uk+CZQLQMjjIEA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.uSW3aujf2kyGuTzTXkBaaw/ClientActions.yhCujmd5Uk+CZQLQMjjIEA:fELv5P5dnwn9Ukn9wMoP7g", "Connect2_Assemble_MUI", "FetchSubdivisions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:17g+mciLPU6EKq+6UY4NfQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:+pgIykOl6k+y0k+DmaBW4A", callContext.id);
// IsFetchingSubdivisions = True
model.variables.isFetchingSubdivisionsVar = true;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Wpej_P_3DkmkXfb+bstJAg", callContext.id);
// Execute Action: GetLocality
model.flush();
return Connect2_Assemble_MUIController.default.getLocality$Action(model.variables.localityIdIn, callContext).then(function (value) {
getLocalityVar.value = value;
}).then(function () {
// Set Local Data
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:OkLK8sO0akCAjhBVkD4uhA", callContext.id);
// FullSubdivisionsList = GetLocality.LocalityInformation.LocalitySubdivisionsList
model.variables.fullSubdivisionsListVar = getLocalityVar.value.localityInformationOut.localitySubdivisionsListAttr;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:OkLK8sO0akCAjhBVkD4uhA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// FilteredSubdivisionsList = FullSubdivisionsList
model.variables.filteredSubdivisionsListVar = model.variables.fullSubdivisionsListVar;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:hBBQgKeyZU2Kt9tlva7R0A", callContext.id);
// IsFetchingSubdivisions = False
model.variables.isFetchingSubdivisionsVar = false;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:AoP+Z8ybfEa6WWwLScMUbQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:yhCujmd5Uk+CZQLQMjjIEA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:yhCujmd5Uk+CZQLQMjjIEA", callContext.id);
throw ex;

});
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
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:dqutnkzR2USgElepaNFsqw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.uSW3aujf2kyGuTzTXkBaaw/ClientActions.dqutnkzR2USgElepaNFsqw:qdcR9RCwDyf_ah3LW255Lw", "Connect2_Assemble_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:7L4q4JCzO0iIuXEtvCK_cA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:bbZ0rkTtm0qu+hplQ_Icjg", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if WasCurrentViewRestoredFromCache FromCache
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:9Ex_3cMfQ0+K+vZgy9_pcw", callContext.id) && (wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut === true))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:6ny3GB_aw0OYF3J40k5psw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:fQGoJdDe9E+NhsxCbU6Y0g", callContext.id);
// Execute Action: FetchSubdivisions
return controller._fetchSubdivisions$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:fYmWjNuC20algGcGhEsPiQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:dqutnkzR2USgElepaNFsqw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:dqutnkzR2USgElepaNFsqw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.onChange_SearchTerm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_SearchTerm$Action, callContext);

};
Controller.prototype.fetchSubdivisions$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._fetchSubdivisions$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.selectedSubdivision$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:uSW3aujf2kyGuTzTXkBaaw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.uSW3aujf2kyGuTzTXkBaaw:UJT6GvIAaalbC4gy7NOkKA", "Connect2_Assemble_MUI", "Assemble_FilterSubdivisionByLocality", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:uSW3aujf2kyGuTzTXkBaaw", callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/Assemble_FilterSubdivisionByLocality On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return Connect2_Assemble_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_Assemble_MUILanguageResources);
});
define("Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"uxPWUQOJ+UKEtrfq1jT4CQ": {
getter: function (varBag, idService) {
return varBag.removeDiacriticsVar.value;
}
},
"NdemuQBjrUiS49EGgu_zRg": {
getter: function (varBag, idService) {
return varBag.listFilterLocalityVar.value;
}
},
"_WM4vZsxOEi9bpZAlsv+Tw": {
getter: function (varBag, idService) {
return varBag.getLocalityVar.value;
}
},
"Wpej_P_3DkmkXfb+bstJAg": {
getter: function (varBag, idService) {
return varBag.getLocalityVar.value;
}
},
"bbZ0rkTtm0qu+hplQ_Icjg": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"ackMbJOAPUuYIouRLMdy1Q": {
getter: function (varBag, idService) {
return varBag.model.variables.fullSubdivisionsListVar;
}
},
"+mpL4WhTa0yLiQ_eVVn9uQ": {
getter: function (varBag, idService) {
return varBag.model.variables.filteredSubdivisionsListVar;
}
},
"IQ49VztoEUeCAnl0efzQiA": {
getter: function (varBag, idService) {
return varBag.model.variables.searchTermVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WlQM75xCMUmIAAOKJ07LGQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingSubdivisionsVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1riMlDzh8UarlI0QkzambQ": {
getter: function (varBag, idService) {
return varBag.model.variables.localityIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"HLHts0dJg0C78yHBDPw0Mw": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedSubdivisionIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"tTyT8qtIkkKlvAEFgqjzMg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_SuperMeetings"));
})(varBag.model, idService);
}
},
"pYlDNpZwfEmJi6MgV09iAw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"R7dwKt7DvEefkGlwMYqsaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"W+jHrnSAdE+pjcTztUmkhw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_SearchTearn"));
})(varBag.model, idService);
}
},
"cb61F0oxVkORmaEfENILrQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"QvK6fiA7E0ilJfQK2EYrWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_NoResultsFound"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
