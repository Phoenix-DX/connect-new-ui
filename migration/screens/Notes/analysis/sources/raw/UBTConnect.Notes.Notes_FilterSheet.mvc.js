define("UBTConnect.Notes.Notes_FilterSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Notes_CS.model", "UBTConnectLibrary.model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$model", "UBTConnect.model$Filter_Common_Control_ListList", "Connect_Notes_CS.model$Notes_FilterRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Notes_CS", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListRec"], function (OutSystems, UBTConnectModel, Connect_Notes_CSModel, UBTConnectLibraryModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Years_Extra_Option_FlatList", "years_Extra_Option_FlatListVar", "Years_Extra_Option_FlatList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ListList());
}, false, UBTConnectModel.Filter_Common_Control_ListList), 
this.attr("FilterByYear_Title", "filterByYear_TitleVar", "FilterByYear_Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Filter by year";
}, false), 
this.attr("In_FilterNotes", "in_FilterNotesIn", "In_FilterNotes", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Notes_CSModel.Notes_FilterRec());
}, false, Connect_Notes_CSModel.Notes_FilterRec), 
this.attr("_in_FilterNotesInDataFetchStatus", "_in_FilterNotesInDataFetchStatus", "_in_FilterNotesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_YearsOptions", "in_YearsOptionsIn", "In_YearsOptions", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, false, OS.DataTypes.TextList), 
this.attr("_in_YearsOptionsInDataFetchStatus", "_in_YearsOptionsInDataFetchStatus", "_in_YearsOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_FilterNotes" in inputs) {
this.variables.in_FilterNotesIn = inputs.In_FilterNotes;
if("_in_FilterNotesInDataFetchStatus" in inputs) {
this.variables._in_FilterNotesInDataFetchStatus = inputs._in_FilterNotesInDataFetchStatus;
}

}

if("In_YearsOptions" in inputs) {
this.variables.in_YearsOptionsIn = inputs.In_YearsOptions;
if("_in_YearsOptionsInDataFetchStatus" in inputs) {
this.variables._in_YearsOptionsInDataFetchStatus = inputs._in_YearsOptionsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Notes.Notes_FilterSheet");
});
define("UBTConnect.Notes.Notes_FilterSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Notes_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Notes.Notes_FilterSheet.mvc$model", "UBTConnect.Notes.Notes_FilterSheet.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.model$Filter_Common_Control_ListList", "Connect_Notes_CS.model$Notes_FilterRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Notes_CS", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Notes_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Notes_Notes_FilterSheet_mvc_model, UBTConnect_Notes_Notes_FilterSheet_mvc_controller, UBTConnectClientVariables, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_view, OSWidgets) {
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
        View.displayName = "Notes.Notes_FilterSheet";
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
                return UBTConnect_Notes_Notes_FilterSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Notes_Notes_FilterSheet_mvc_controller;
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
In_StartFilter: model.getCachedValue(idService.getId("y+EX9_o6f0SqCUqjLH07lw.In_StartFilter"), function () {
return function () {
var rec = new UBTConnectModel.Filter_CommonRec();
return rec;
}();
}),
In_Options: model.getCachedValue(idService.getId("y+EX9_o6f0SqCUqjLH07lw.In_Options"), function () {
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
rec.extra_OptionFlatListsAttr = model.variables.years_Extra_Option_FlatListVar;
return rec;
}();
}, function () {
return model.variables.years_Extra_Option_FlatListVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
sheetInitialized$Action: function (sheetIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet SheetInitialized");
controller.sheetInilialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
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
return controller.handler_FilterSheetApplyFilters$Action(optionChoice_ControlIn, sortBy_TitleIn, hasFitlerAppliedIn, optionFlatList_ControlIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
loaded$Action: function (showSubscriptionOnClickIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet Loaded");
controller.loaded$Action(showSubscriptionOnClickIn, controller.callContext(eventHandlerContext));
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
define("UBTConnect.Notes.Notes_FilterSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Notes_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Notes.Notes_FilterSheet.mvc$debugger", "UBTConnect.model$Filter_Common_Control_ListList", "Connect_Notes_CS.model$Notes_FilterRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Notes_CS", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Notes_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Notes_Notes_FilterSheet_mvc_Debugger) {
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
Controller.prototype._initialize_FilterYearOptions$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Initialize_FilterYearOptions");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Notes.Notes_FilterSheet.Initialize_FilterYearOptions$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:LzuNFjkhGEeSm41pgzIBLQ:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.YN_r6gLKS0uSINGYDZEd_Q/ClientActions.LzuNFjkhGEeSm41pgzIBLQ:PbzShZr3eA0W4kSr2rzxWQ", "UBTConnect", "Initialize_FilterYearOptions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EQ01vJNb3ECaQFhkqAZfIw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8u8zYTS8y0KywB3Qms7CnA", callContext.id);
// Execute Action: ListClearYear_Extra_Option_FlatList
OS.SystemActions.listClear(vars.value.filter_year_listVar.in_OptionsAttr, callContext);
// Foreach In_YearsOptions
callContext.iterationContext.registerIterationStart(model.variables.in_YearsOptionsIn);
try {var in_YearsOptionsIterator = callContext.iterationContext.getIterator(model.variables.in_YearsOptionsIn);
var in_YearsOptionsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qGwld_H7nEG+yeIzgRPAQw", callContext.id) && (in_YearsOptionsIndex < model.variables.in_YearsOptionsIn.length))) {
in_YearsOptionsIterator.currentRowNumber = in_YearsOptionsIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:36LB6bdAHEev3WGokyPMVw", callContext.id);
// Execute Action: ListAppend_YearsOptions
OS.SystemActions.listAppend(vars.value.filter_year_listVar.in_OptionsAttr, function () {
var rec = new UBTConnectLibraryModel.SelectionOption_ItemRec();
rec.idAttr = model.variables.in_YearsOptionsIn.getItem(in_YearsOptionsIndex.valueOf());
rec.displayTextAttr = model.variables.in_YearsOptionsIn.getItem(in_YearsOptionsIndex.valueOf());
rec.isEnabledAttr = true;
return rec;
}(), callContext);
in_YearsOptionsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.in_YearsOptionsIn);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yW9k5uv2kk6bTa7QlW4nzg", callContext.id);
// Filter_year_list.Title = FilterByYear_Title
vars.value.filter_year_listVar.titleAttr = model.variables.filterByYear_TitleVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yW9k5uv2kk6bTa7QlW4nzg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Filter_year_list.Order = 1
vars.value.filter_year_listVar.orderAttr = 1;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mu7bsHdOJEmNXl3flbK45Q", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.years_Extra_Option_FlatListVar, vars.value.filter_year_listVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uxqXdnKk5EaSz1A616wBuA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:LzuNFjkhGEeSm41pgzIBLQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Notes.Notes_FilterSheet.Initialize_FilterYearOptions$vars", [{
name: "Filter_year_list",
attrName: "filter_year_listVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ListRec();
},
complexType: UBTConnectModel.Filter_Common_Control_ListRec
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3w4VxGlYcEyL2l_Bbvg48A:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.YN_r6gLKS0uSINGYDZEd_Q/ClientActions.3w4VxGlYcEyL2l_Bbvg48A:GhOCKlj+N1QOW5AuADz0fA", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uQ3kjjz_PE+MS1BxrM52pA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UgkkG+uBzECgkG29epiRsQ", callContext.id);
// Execute Action: Initialize_FilterYearOptions
controller._initialize_FilterYearOptions$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yQ+nnRzRpECDwKy8xjHCdQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3w4VxGlYcEyL2l_Bbvg48A", callContext.id);
}

};
Controller.prototype._handler_FilterSheetApplyFilters$Action = function (optionChoice_ControlIn, sortBy_TitleIn, hasFitlerAppliedIn, optionFlatList_ControlIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetApplyFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Notes.Notes_FilterSheet.Handler_FilterSheetApplyFilters$vars"))());
vars.value.optionChoice_ControlInLocal = optionChoice_ControlIn.clone();
vars.value.sortBy_TitleInLocal = sortBy_TitleIn;
vars.value.hasFitlerAppliedInLocal = hasFitlerAppliedIn;
vars.value.optionFlatList_ControlInLocal = optionFlatList_ControlIn.clone();
var sortByVar = new OS.DataTypes.VariableHolder();
var yearsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.sortByVar = sortByVar;
varBag.yearsVar = yearsVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jlLD8q9aO0SS7_dwGxZszw:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.YN_r6gLKS0uSINGYDZEd_Q/ClientActions.jlLD8q9aO0SS7_dwGxZszw:t+94gTVrnxZsNQUiiy7y6w", "UBTConnect", "Handler_FilterSheetApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KdlTG3SL4UuaNYQxkh5yww", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OJ_5lmeR7Eaev0ddudnCkg", callContext.id);
// Filter_Notes = In_FilterNotes
vars.value.filter_NotesVar = model.variables.in_FilterNotesIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uJQuWxysXE24Fxc5A9GEqw", callContext.id);
// Execute Action: Years
yearsVar.value = OS.SystemActions.listFilter(vars.value.optionFlatList_ControlInLocal, function (p) {
return (p.titleAttr === model.variables.filterByYear_TitleVar);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ILPMTd0wfEu1yILp5oPdKg", callContext.id);
// Filter_Notes.Years = OptionFlatList_Control.Current.SelectedIds
vars.value.filter_NotesVar.yearsAttr = vars.value.optionFlatList_ControlInLocal.getCurrent(callContext.iterationContext).selectedIdsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FcXkQmZB40qQKdFg4LGhDw", callContext.id);
// Execute Action: SortBy
sortByVar.value = OS.SystemActions.listFilter(vars.value.optionChoice_ControlInLocal, function (p) {
return (p.titleAttr === vars.value.sortBy_TitleInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sGnCBLXZOk2VBXY98Pf2bg", callContext.id);
// Filter_Notes.SortByNewest = TextToIdentifier
vars.value.filter_NotesVar.sortByNewestAttr = OS.BuiltinFunctions.textToIdentifier(sortByVar.value.filteredListOut.getCurrent(callContext.iterationContext).selectedChoiceIdAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HNdjtCunIEuBy7f2JDLHSA", callContext.id);
// Trigger Event: ApplyFilters
return controller.applyFilters$Action(vars.value.filter_NotesVar, vars.value.hasFitlerAppliedInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zZXbe+DPk0G9nGgjoCLhPw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jlLD8q9aO0SS7_dwGxZszw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jlLD8q9aO0SS7_dwGxZszw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Notes.Notes_FilterSheet.Handler_FilterSheetApplyFilters$vars", [{
name: "OptionChoice_Control",
attrName: "optionChoice_ControlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ChoiceList();
},
complexType: UBTConnectModel.Filter_Common_Control_ChoiceList
}, {
name: "SortBy_Title",
attrName: "sortBy_TitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "hasFitlerApplied",
attrName: "hasFitlerAppliedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "OptionFlatList_Control",
attrName: "optionFlatList_ControlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ListList();
},
complexType: UBTConnectModel.Filter_Common_Control_ListList
}, {
name: "Filter_Notes",
attrName: "filter_NotesVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect_Notes_CSModel.Notes_FilterRec();
},
complexType: Connect_Notes_CSModel.Notes_FilterRec
}]);

Controller.prototype.initialize_FilterYearOptions$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._initialize_FilterYearOptions$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.handler_FilterSheetApplyFilters$Action = function (optionChoice_ControlIn, sortBy_TitleIn, hasFitlerAppliedIn, optionFlatList_ControlIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetApplyFilters$Action, callContext, optionChoice_ControlIn, sortBy_TitleIn, hasFitlerAppliedIn, optionFlatList_ControlIn);

};
Controller.prototype.applyFilters$Action = function () {
return Promise.resolve();
};
Controller.prototype.loaded$Action = function () {
return Promise.resolve();
};
Controller.prototype.sheetInilialized$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2DlYrQQBWkK7ftgdGmwqyg:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg:H6BPPYIIY_GDy0FJgaUDiA", "UBTConnect", "Notes", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:YN_r6gLKS0uSINGYDZEd_Q:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.YN_r6gLKS0uSINGYDZEd_Q:Iru1rKH79ImPQr7n3MjDHQ", "UBTConnect", "Notes_FilterSheet", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YN_r6gLKS0uSINGYDZEd_Q", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2DlYrQQBWkK7ftgdGmwqyg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Notes/Notes_FilterSheet On Initialize");
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

define("UBTConnect.Notes.Notes_FilterSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"DGv1EGduDU+XSVMOY9bRNg": {
getter: function (varBag, idService) {
return varBag.vars.value.filter_year_listVar;
}
},
"Z6yd8KUr202Jaz1yoGw6Qw": {
getter: function (varBag, idService) {
return varBag.vars.value.filter_NotesVar;
}
},
"w_cXvVG5cEKC4ii_PChFog": {
getter: function (varBag, idService) {
return varBag.vars.value.optionChoice_ControlInLocal;
}
},
"URdev7wJikmWKzNTFWlUxQ": {
getter: function (varBag, idService) {
return varBag.vars.value.sortBy_TitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kS4TxjH_Ok600lMgRl2Jsw": {
getter: function (varBag, idService) {
return varBag.vars.value.hasFitlerAppliedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tuDwwoUHnEqWRvcQV+n8cQ": {
getter: function (varBag, idService) {
return varBag.vars.value.optionFlatList_ControlInLocal;
}
},
"FcXkQmZB40qQKdFg4LGhDw": {
getter: function (varBag, idService) {
return varBag.sortByVar.value;
}
},
"uJQuWxysXE24Fxc5A9GEqw": {
getter: function (varBag, idService) {
return varBag.yearsVar.value;
}
},
"N364puWIZ0284jN_KXt0Fg": {
getter: function (varBag, idService) {
return varBag.model.variables.years_Extra_Option_FlatListVar;
}
},
"oPtS1fZ2t0aflKXk6S9Jng": {
getter: function (varBag, idService) {
return varBag.model.variables.filterByYear_TitleVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EbL2dywCm0aeVYYHcs8J4A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FilterNotesIn;
}
},
"b6eMaV5OlUqDbKwSIpEYtw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_YearsOptionsIn;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
