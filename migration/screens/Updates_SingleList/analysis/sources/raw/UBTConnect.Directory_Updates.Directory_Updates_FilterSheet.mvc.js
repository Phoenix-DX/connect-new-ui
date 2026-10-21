define("UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Updates_CS.model", "UBTConnectLibrary.model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$model", "UBTConnect.model$Filter_Common_Control_ChoiceList", "Connect_Updates_CS.model$Filter_UpdatesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceRec"], function (OutSystems, UBTConnectModel, Connect_Updates_CSModel, UBTConnectLibraryModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Extra_OptionChoices", "extra_OptionChoicesVar", "Extra_OptionChoices", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ChoiceList());
}, false, UBTConnectModel.Filter_Common_Control_ChoiceList), 
this.attr("FilterByStatus_Title", "filterByStatus_TitleVar", "FilterByStatus_Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Filter by status";
}, false), 
this.attr("In_FilterUpdates", "in_FilterUpdatesIn", "In_FilterUpdates", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Updates_CSModel.Filter_UpdatesRec());
}, false, Connect_Updates_CSModel.Filter_UpdatesRec), 
this.attr("_in_FilterUpdatesInDataFetchStatus", "_in_FilterUpdatesInDataFetchStatus", "_in_FilterUpdatesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_FilterUpdates" in inputs) {
this.variables.in_FilterUpdatesIn = inputs.In_FilterUpdates;
if("_in_FilterUpdatesInDataFetchStatus" in inputs) {
this.variables._in_FilterUpdatesInDataFetchStatus = inputs._in_FilterUpdatesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Updates.Directory_Updates_FilterSheet");
});
define("UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Updates_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.mvc$model", "UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.model$Filter_Common_Control_ChoiceList", "Connect_Updates_CS.model$Filter_UpdatesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Updates_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Updates_Directory_Updates_FilterSheet_mvc_model, UBTConnect_Directory_Updates_Directory_Updates_FilterSheet_mvc_controller, UBTConnectClientVariables, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_view, OSWidgets) {
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
        View.displayName = "Directory_Updates.Directory_Updates_FilterSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Updates_Directory_Updates_FilterSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Updates_Directory_Updates_FilterSheet_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_view, {
inputs: {
In_StartFilter: model.getCachedValue(idService.getId("ePRgSnPPN0CC9KAGKEe3nQ.In_StartFilter"), function () {
return function () {
var rec = new UBTConnectModel.Filter_CommonRec();
return rec;
}();
}),
In_Options: model.getCachedValue(idService.getId("ePRgSnPPN0CC9KAGKEe3nQ.In_Options"), function () {
return function () {
var rec = new UBTConnectModel.Filter_Common_OptionsRec();
rec.hasSortingAttr = function () {
var rec = new UBTConnectModel.Filter_Common_Options_ChoiceRec();
rec.enableAttr = true;
rec.yesLabelAttr = "Newest to Oldest";
rec.noLabelAttr = "Oldest to Newest";
rec.orderAttr = 1;
return rec;
}();
rec.hasCountriesAttr = function () {
var rec = new UBTConnectModel.Filter_Common_Options_ListRec();
rec.enableAttr = true;
rec.orderAttr = 1;
return rec;
}();
rec.hasLocalitiesAttr = function () {
var rec = new UBTConnectModel.Filter_Common_Options_ListRec();
rec.enableAttr = true;
rec.orderAttr = 2;
return rec;
}();
rec.extra_OptionChoicesAttr = model.variables.extra_OptionChoicesVar;
return rec;
}();
}, function () {
return model.variables.extra_OptionChoicesVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
loaded$Action: function (showSubscriptionOnClickIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet Loaded");
return controller.handler_FilterSheetLoaded$Action(showSubscriptionOnClickIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
sheetInitialized$Action: function (sheetIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet SheetInitialized");
controller.sheetInitialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
applyFilters$Action: function (optionList_ControlIn, optionChoice_ControlIn, optionFlatList_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFitlerAppliedIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet ApplyFilters");
return controller.filterSheetApplyFilters$Action(optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFitlerAppliedIn, controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Updates_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.mvc$debugger", "UBTConnect.model$Filter_Common_Control_ChoiceList", "Connect_Updates_CS.model$Filter_UpdatesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Updates_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Updates_Directory_Updates_FilterSheet_mvc_Debugger) {
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
Controller.prototype._filterSheetApplyFilters$Action = function (optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFiltersAppliedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("FilterSheetApplyFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.FilterSheetApplyFilters$vars"))());
vars.value.optionList_ControlInLocal = optionList_ControlIn.clone();
vars.value.optionChoice_ControlInLocal = optionChoice_ControlIn.clone();
vars.value.subState_LocalitiesInLocal = subState_LocalitiesIn;
vars.value.subState_CountriesInLocal = subState_CountriesIn;
vars.value.sortBy_TitleInLocal = sortBy_TitleIn;
vars.value.hasFiltersAppliedInLocal = hasFiltersAppliedIn;
var localitiesVar = new OS.DataTypes.VariableHolder();
var sortByVar = new OS.DataTypes.VariableHolder();
var countriesVar = new OS.DataTypes.VariableHolder();
var filterByStatusVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.localitiesVar = localitiesVar;
varBag.sortByVar = sortByVar;
varBag.countriesVar = countriesVar;
varBag.filterByStatusVar = filterByStatusVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:x2JGCePBIk2lsziBQCemVA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.9bim0EaWc06OnISfdNWmxQ/ClientActions.x2JGCePBIk2lsziBQCemVA:ELaePNYK7DMmbVuHFP+0ow", "UBTConnect", "FilterSheetApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b26hF4HzV0yeEPBKuslEvw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6l_FL6pAu0+htCci0+Qtrg", callContext.id);
// Filter_Updates = In_FilterUpdates
vars.value.filter_UpdatesVar = model.variables.in_FilterUpdatesIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cE5W4PuHm0OnS8xBDSKWWw", callContext.id);
// Execute Action: Countries
countriesVar.value = OS.SystemActions.listFilter(vars.value.optionList_ControlInLocal, function (p) {
return (p.titleAttr === vars.value.subState_CountriesInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sblD4yAoCkugdgpoEhbYZQ", callContext.id);
// Filter_Updates.CountryIds = Countries.FilteredList.Current.SelectedIds
vars.value.filter_UpdatesVar.countryIdsAttr = countriesVar.value.filteredListOut.getCurrent(callContext.iterationContext).selectedIdsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:coxIRwQ0BEyfZAUTBcxKcA", callContext.id);
// Execute Action: Localities
localitiesVar.value = OS.SystemActions.listFilter(vars.value.optionList_ControlInLocal, function (p) {
return (p.titleAttr === vars.value.subState_LocalitiesInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:O2MHi2m0KUuVOyxfjel9rA", callContext.id);
// Filter_Updates.LocalitiesIds = Localities.FilteredList.Current.SelectedIds
vars.value.filter_UpdatesVar.localitiesIdsAttr = localitiesVar.value.filteredListOut.getCurrent(callContext.iterationContext).selectedIdsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FtpWrsIgaEeH7_+javD_2A", callContext.id);
// Execute Action: SortBy
sortByVar.value = OS.SystemActions.listFilter(vars.value.optionChoice_ControlInLocal, function (p) {
return (p.titleAttr === vars.value.sortBy_TitleInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XNJXbpASfEWC+i6tOjc0rQ", callContext.id);
// Filter_Updates.Sort_ByNewest = TextToIdentifier
vars.value.filter_UpdatesVar.sort_ByNewestAttr = OS.BuiltinFunctions.textToIdentifier(sortByVar.value.filteredListOut.getCurrent(callContext.iterationContext).selectedChoiceIdAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:esY8_wdOpECTqfudUwOjtw", callContext.id);
// Execute Action: FilterByStatus
filterByStatusVar.value = OS.SystemActions.listFilter(vars.value.optionChoice_ControlInLocal, function (p) {
return (p.titleAttr === model.variables.filterByStatus_TitleVar);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5vDQ6DznS0KbuwncggEAQw", callContext.id);
// Filter_Updates.Filter_ReadOnly = TextToIdentifier
vars.value.filter_UpdatesVar.filter_ReadOnlyAttr = OS.BuiltinFunctions.textToIdentifier(filterByStatusVar.value.filteredListOut.getCurrent(callContext.iterationContext).selectedChoiceIdAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:w7xdvzCmE0+U6itw_y0hRg", callContext.id);
// Trigger Event: ApplyFilters
return controller.applyFilters$Action(vars.value.filter_UpdatesVar, vars.value.hasFiltersAppliedInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Fl+U9XKI50uuRswvcdonYQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:x2JGCePBIk2lsziBQCemVA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:x2JGCePBIk2lsziBQCemVA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.FilterSheetApplyFilters$vars", [{
name: "OptionList_Control",
attrName: "optionList_ControlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ListList();
},
complexType: UBTConnectModel.Filter_Common_Control_ListList
}, {
name: "OptionChoice_Control",
attrName: "optionChoice_ControlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ChoiceList();
},
complexType: UBTConnectModel.Filter_Common_Control_ChoiceList
}, {
name: "SubState_Localities",
attrName: "subState_LocalitiesInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SubState_Countries",
attrName: "subState_CountriesInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SortBy_Title",
attrName: "sortBy_TitleInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "HasFiltersApplied",
attrName: "hasFiltersAppliedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Filter_Updates",
attrName: "filter_UpdatesVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect_Updates_CSModel.Filter_UpdatesRec();
},
complexType: Connect_Updates_CSModel.Filter_UpdatesRec
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.OnInitialize$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:k_OpGVoqt0q8DQ2L5umG_A:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.9bim0EaWc06OnISfdNWmxQ/ClientActions.k_OpGVoqt0q8DQ2L5umG_A:yF4sp0NtJbyCd+mj9pVbUg", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W4aThIvWr02Jns+jjorKHg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PHh5hJftHUutS4uO6ymMsQ", callContext.id);
// Execute Action: ListClear_ExtraOptions
OS.SystemActions.listClear(model.variables.extra_OptionChoicesVar, callContext);
// Set Extra Options
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MzEW9C0EgUGA5__q4zyoyQ", callContext.id);
// ReadOnly_OptionChoice.Title = FilterByStatus_Title
vars.value.readOnly_OptionChoiceVar.titleAttr = model.variables.filterByStatus_TitleVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MzEW9C0EgUGA5__q4zyoyQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ReadOnly_OptionChoice.SelectedChoiceId = None
vars.value.readOnly_OptionChoiceVar.selectedChoiceIdAttr = UBTConnectModel.staticEntities.choice.none;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MzEW9C0EgUGA5__q4zyoyQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ReadOnly_OptionChoice.YesLabel = "Read Only"
vars.value.readOnly_OptionChoiceVar.yesLabelAttr = "Read Only";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MzEW9C0EgUGA5__q4zyoyQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ReadOnly_OptionChoice.NoLabel = "Unread Only"
vars.value.readOnly_OptionChoiceVar.noLabelAttr = "Unread Only";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MzEW9C0EgUGA5__q4zyoyQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ReadOnly_OptionChoice.NoneLabel = "All Updates"
vars.value.readOnly_OptionChoiceVar.noneLabelAttr = "All Updates";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MzEW9C0EgUGA5__q4zyoyQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ReadOnly_OptionChoice.Order = 2
vars.value.readOnly_OptionChoiceVar.orderAttr = 2;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TExb57i9fk+6qEYMTE6yQQ", callContext.id);
// Execute Action: ListAppend_ExtraOptions
OS.SystemActions.listAppend(model.variables.extra_OptionChoicesVar, vars.value.readOnly_OptionChoiceVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Z63gwLU8fki0xlTm0TU4QA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:k_OpGVoqt0q8DQ2L5umG_A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.OnInitialize$vars", [{
name: "ReadOnly_OptionChoice",
attrName: "readOnly_OptionChoiceVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ChoiceRec();
},
complexType: UBTConnectModel.Filter_Common_Control_ChoiceRec
}]);
Controller.prototype._handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetLoaded");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.Handler_FilterSheetLoaded$vars"))());
vars.value.showSubscriptionOnClickInLocal = showSubscriptionOnClickIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:qkKwhkP2DkuGrhj9sR0ivQ:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.9bim0EaWc06OnISfdNWmxQ/ClientActions.qkKwhkP2DkuGrhj9sR0ivQ:q+MBA5Vzmhf8xprABneBTw", "UBTConnect", "Handler_FilterSheetLoaded", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gAFrIAthH0a8RGyzqnSndQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pXBbqWdqPUC1IL0qkEL0_Q", callContext.id);
// Trigger Event: Loaded
return controller.loaded$Action(vars.value.showSubscriptionOnClickInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9vgI6uAg_0SFtbnQCKV8ag", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qkKwhkP2DkuGrhj9sR0ivQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qkKwhkP2DkuGrhj9sR0ivQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.Handler_FilterSheetLoaded$vars", [{
name: "ShowSubscriptionOnClick",
attrName: "showSubscriptionOnClickInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.filterSheetApplyFilters$Action = function (optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFiltersAppliedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._filterSheetApplyFilters$Action, callContext, optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFiltersAppliedIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetLoaded$Action, callContext, showSubscriptionOnClickIn);

};
Controller.prototype.loaded$Action = function () {
return Promise.resolve();
};
Controller.prototype.applyFilters$Action = function () {
return Promise.resolve();
};
Controller.prototype.sheetInitialized$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lBBSjop9vkeTAxiPAbypRg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg:C9xuQgCNB04qKzk88z0W5Q", "UBTConnect", "Directory_Updates", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9bim0EaWc06OnISfdNWmxQ:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.9bim0EaWc06OnISfdNWmxQ:ZALvLq6CyrYBKaqT7MMcgA", "UBTConnect", "Directory_Updates_FilterSheet", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9bim0EaWc06OnISfdNWmxQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lBBSjop9vkeTAxiPAbypRg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Updates/Directory_Updates_FilterSheet On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"BE86fuQSfk+HiTels3GPcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.filter_UpdatesVar;
}
},
"HBkwjEiFy0ap8w4KbH9c2w": {
getter: function (varBag, idService) {
return varBag.vars.value.optionList_ControlInLocal;
}
},
"h_sqbAVTdEKJ0XnREt438Q": {
getter: function (varBag, idService) {
return varBag.vars.value.optionChoice_ControlInLocal;
}
},
"ijXD8tP8HkGXnnfBQW6wcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.subState_LocalitiesInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hO0nGYsJrUur0DN7Gd1+gQ": {
getter: function (varBag, idService) {
return varBag.vars.value.subState_CountriesInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JOHX3ccZ50ukm+jfA39QaA": {
getter: function (varBag, idService) {
return varBag.vars.value.sortBy_TitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rF_44R6FwEysDNS9MbEp4Q": {
getter: function (varBag, idService) {
return varBag.vars.value.hasFiltersAppliedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"coxIRwQ0BEyfZAUTBcxKcA": {
getter: function (varBag, idService) {
return varBag.localitiesVar.value;
}
},
"FtpWrsIgaEeH7_+javD_2A": {
getter: function (varBag, idService) {
return varBag.sortByVar.value;
}
},
"cE5W4PuHm0OnS8xBDSKWWw": {
getter: function (varBag, idService) {
return varBag.countriesVar.value;
}
},
"esY8_wdOpECTqfudUwOjtw": {
getter: function (varBag, idService) {
return varBag.filterByStatusVar.value;
}
},
"XVr1BEW4C06X8ncPqersSw": {
getter: function (varBag, idService) {
return varBag.vars.value.readOnly_OptionChoiceVar;
}
},
"gpwvFHiwa0u90yL8bw+qPQ": {
getter: function (varBag, idService) {
return varBag.vars.value.showSubscriptionOnClickInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"3iDdRqoVhkay4oj6PFaZYg": {
getter: function (varBag, idService) {
return varBag.model.variables.extra_OptionChoicesVar;
}
},
"MDaDbCF0r0yS98yKsVLdXw": {
getter: function (varBag, idService) {
return varBag.model.variables.filterByStatus_TitleVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"C3c2GoFrGUK6wizKsj0GLw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FilterUpdatesIn;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
