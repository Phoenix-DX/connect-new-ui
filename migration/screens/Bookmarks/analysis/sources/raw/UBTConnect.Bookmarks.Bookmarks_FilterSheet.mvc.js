define("UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Bookmarks_CS.model", "UBTConnectLibrary.model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$model", "UBTConnect.model$Filter_Common_Control_ListList", "Connect_Bookmarks_CS.model$Bookmark_FilterRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListRec"], function (OutSystems, UBTConnectModel, Connect_Bookmarks_CSModel, UBTConnectLibraryModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvcModel) {
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
this.attr("In_FilterBookmarks", "in_FilterBookmarksIn", "In_FilterBookmarks", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Bookmarks_CSModel.Bookmark_FilterRec());
}, false, Connect_Bookmarks_CSModel.Bookmark_FilterRec), 
this.attr("_in_FilterBookmarksInDataFetchStatus", "_in_FilterBookmarksInDataFetchStatus", "_in_FilterBookmarksInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_FilterBookmarks" in inputs) {
this.variables.in_FilterBookmarksIn = inputs.In_FilterBookmarks;
if("_in_FilterBookmarksInDataFetchStatus" in inputs) {
this.variables._in_FilterBookmarksInDataFetchStatus = inputs._in_FilterBookmarksInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Bookmarks.Bookmarks_FilterSheet");
});
define("UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Bookmarks_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc$model", "UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.model$Filter_Common_Control_ListList", "Connect_Bookmarks_CS.model$Bookmark_FilterRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Bookmarks_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Bookmarks_Bookmarks_FilterSheet_mvc_model, UBTConnect_Bookmarks_Bookmarks_FilterSheet_mvc_controller, UBTConnectClientVariables, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_view, OSWidgets) {
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
        View.displayName = "Bookmarks.Bookmarks_FilterSheet";
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
                return UBTConnect_Bookmarks_Bookmarks_FilterSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Bookmarks_Bookmarks_FilterSheet_mvc_controller;
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
In_Options: model.getCachedValue(idService.getId("O3jk8y8wz0ySRVXwvturhg.In_Options"), function () {
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
}),
In_StartFilter: model.getCachedValue(idService.getId("O3jk8y8wz0ySRVXwvturhg.In_StartFilter"), function () {
return function () {
var rec = new UBTConnectModel.Filter_CommonRec();
rec.sort_ByNewestAttr = model.variables.in_FilterBookmarksIn.sortByNewestAttr;
return rec;
}();
}, function () {
return model.variables.in_FilterBookmarksIn.sortByNewestAttr;
}),
_in_StartFilterInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FilterBookmarksInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
define("UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Bookmarks_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc$debugger", "UBTConnect.model$Filter_Common_Control_ListList", "Connect_Bookmarks_CS.model$Bookmark_FilterRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Bookmarks_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Bookmarks_Bookmarks_FilterSheet_mvc_Debugger) {
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:yu38E100ukW_JWG9DdJA1A:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.HPxyPA17VE6uWd0Jl5jZHg/ClientActions.yu38E100ukW_JWG9DdJA1A:ql8I6M3zxl76TeCrs2eNog", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nDZ_wnior0SpjuzWjA5gVQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8D1WrUgzwkS8b_bcd86_7w", callContext.id);
// Execute Action: Initialize_FilterYearOptions
controller._initialize_FilterYearOptions$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cwF28Lmun0GN76KGVLarUQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:yu38E100ukW_JWG9DdJA1A", callContext.id);
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:SQfsKjZdK0agaAbOUZCSkA:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.HPxyPA17VE6uWd0Jl5jZHg/ClientActions.SQfsKjZdK0agaAbOUZCSkA:cBt1tBBQ9t15E8eZaynh0A", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VDooS9806UyeKrnEbzpGQg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:H3IC8p2oZkuAJigTGeBYug", callContext.id);
// Execute Action: Initialize_FilterYearOptions
controller._initialize_FilterYearOptions$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eOo4c5OcjkGF6u9thL3s1A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:SQfsKjZdK0agaAbOUZCSkA", callContext.id);
}

};
Controller.prototype._initialize_FilterYearOptions$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Initialize_FilterYearOptions");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks_FilterSheet.Initialize_FilterYearOptions$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:cVPek963MU+f31KP_kx1mA:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.HPxyPA17VE6uWd0Jl5jZHg/ClientActions.cVPek963MU+f31KP_kx1mA:iSxmMZiBpND1VYR_ssEedw", "UBTConnect", "Initialize_FilterYearOptions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AHknHve_qkmqJe1Tv3gRBg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KUrxb764jUSQzORvg6dvFQ", callContext.id);
// SelectedYears = In_FilterBookmarks.Years
vars.value.selectedYearsVar = model.variables.in_FilterBookmarksIn.yearsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jPVxdHsIGkqnsPKy8ACaoQ", callContext.id);
// Execute Action: ListClearYear_Extra_Option_FlatList
OS.SystemActions.listClear(vars.value.filter_year_listVar.in_OptionsAttr, callContext);
// Foreach In_YearsOptions
callContext.iterationContext.registerIterationStart(model.variables.in_YearsOptionsIn);
try {var in_YearsOptionsIterator = callContext.iterationContext.getIterator(model.variables.in_YearsOptionsIn);
var in_YearsOptionsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nhZLGFRECkqsE4zCNBo87A", callContext.id) && (in_YearsOptionsIndex < model.variables.in_YearsOptionsIn.length))) {
in_YearsOptionsIterator.currentRowNumber = in_YearsOptionsIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Rdm_7zA5ukG+Q4d_qzyH3A", callContext.id);
// IsYearSelected = False
vars.value.isYearSelectedVar = false;
// Foreach SelectedYears
callContext.iterationContext.registerIterationStart(vars.value.selectedYearsVar);
try {var selectedYearsIterator = callContext.iterationContext.getIterator(vars.value.selectedYearsVar);
var selectedYearsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tbL+oyXYrUeeWj8IQ1WjJw", callContext.id) && (selectedYearsIndex < vars.value.selectedYearsVar.length))) {
selectedYearsIterator.currentRowNumber = selectedYearsIndex;
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:935_dCk9iE2Ksg+U91h1ww", callContext.id) && (vars.value.selectedYearsVar.getItem(selectedYearsIndex.valueOf()) === model.variables.in_YearsOptionsIn.getItem(in_YearsOptionsIndex.valueOf())))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fBzQun1LuU+9TOKWdVgJjg", callContext.id);
// IsYearSelected = True
vars.value.isYearSelectedVar = true;
}

selectedYearsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.selectedYearsVar);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wXakwkHqg0KAaSRVXH81fg", callContext.id);
// Execute Action: ListAppend_YearsOptions
OS.SystemActions.listAppend(vars.value.filter_year_listVar.in_OptionsAttr, function () {
var rec = new UBTConnectLibraryModel.SelectionOption_ItemRec();
rec.idAttr = model.variables.in_YearsOptionsIn.getItem(in_YearsOptionsIndex.valueOf());
rec.displayTextAttr = model.variables.in_YearsOptionsIn.getItem(in_YearsOptionsIndex.valueOf());
rec.isSelectedAttr = vars.value.isYearSelectedVar;
rec.isEnabledAttr = true;
return rec;
}(), callContext);
in_YearsOptionsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.in_YearsOptionsIn);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eOxIWZ8d00CCnhLAb7AeCA", callContext.id);
// Filter_year_list.Title = FilterByYear_Title
vars.value.filter_year_listVar.titleAttr = model.variables.filterByYear_TitleVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eOxIWZ8d00CCnhLAb7AeCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Filter_year_list.Order = 1
vars.value.filter_year_listVar.orderAttr = 1;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eOxIWZ8d00CCnhLAb7AeCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Filter_year_list.SelectedIds = In_FilterBookmarks.Years
vars.value.filter_year_listVar.selectedIdsAttr = model.variables.in_FilterBookmarksIn.yearsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eOxIWZ8d00CCnhLAb7AeCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Filter_year_list.SelectedNames = In_FilterBookmarks.Years
vars.value.filter_year_listVar.selectedNamesAttr = model.variables.in_FilterBookmarksIn.yearsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6+2QbWPwEkyxsPrUYL1wSg", callContext.id);
// Execute Action: ListClearYears
OS.SystemActions.listClear(model.variables.years_Extra_Option_FlatListVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LCnYRKBmikOYAd1N2uPYcg", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.years_Extra_Option_FlatListVar, vars.value.filter_year_listVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y6yUgyoUZkiBpWUocOTN2Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cVPek963MU+f31KP_kx1mA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks_FilterSheet.Initialize_FilterYearOptions$vars", [{
name: "Filter_year_list",
attrName: "filter_year_listVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ListRec();
},
complexType: UBTConnectModel.Filter_Common_Control_ListRec
}, {
name: "SelectedYears",
attrName: "selectedYearsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}, {
name: "IsYearSelected",
attrName: "isYearSelectedVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_FilterSheetApplyFilters$Action = function (optionChoice_ControlIn, sortBy_TitleIn, hasFitlerAppliedIn, optionFlatList_ControlIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetApplyFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks_FilterSheet.Handler_FilterSheetApplyFilters$vars"))());
vars.value.optionChoice_ControlInLocal = optionChoice_ControlIn.clone();
vars.value.sortBy_TitleInLocal = sortBy_TitleIn;
vars.value.hasFitlerAppliedInLocal = hasFitlerAppliedIn;
vars.value.optionFlatList_ControlInLocal = optionFlatList_ControlIn.clone();
var yearsVar = new OS.DataTypes.VariableHolder();
var sortByVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.yearsVar = yearsVar;
varBag.sortByVar = sortByVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2csTqVRZuUWawJfcL6NSDg:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.HPxyPA17VE6uWd0Jl5jZHg/ClientActions.2csTqVRZuUWawJfcL6NSDg:UcoaSjatL2WKrzi0nT75XQ", "UBTConnect", "Handler_FilterSheetApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MkDUo2PGwUezMTW+6d1+fg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YiewnnveTUq+n1KFeN+c6g", callContext.id);
// Filter_Bookmarks = In_FilterBookmarks
vars.value.filter_BookmarksVar = model.variables.in_FilterBookmarksIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3qxKD+HW_066bjSMhUbWJA", callContext.id);
// Execute Action: Years
yearsVar.value = OS.SystemActions.listFilter(vars.value.optionFlatList_ControlInLocal, function (p) {
return (p.titleAttr === model.variables.filterByYear_TitleVar);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sazRd7XEak21DoX2IrH+ew", callContext.id);
// Filter_Bookmarks.Years = OptionFlatList_Control.Current.SelectedIds
vars.value.filter_BookmarksVar.yearsAttr = vars.value.optionFlatList_ControlInLocal.getCurrent(callContext.iterationContext).selectedIdsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KNL_qgy6LE6ZpmiRxsE48w", callContext.id);
// Execute Action: SortBy
sortByVar.value = OS.SystemActions.listFilter(vars.value.optionChoice_ControlInLocal, function (p) {
return (p.titleAttr === vars.value.sortBy_TitleInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oFUxfaaPSU21AMVL_G11LQ", callContext.id);
// Filter_Bookmarks.SortByNewest = TextToIdentifier
vars.value.filter_BookmarksVar.sortByNewestAttr = OS.BuiltinFunctions.textToIdentifier(sortByVar.value.filteredListOut.getCurrent(callContext.iterationContext).selectedChoiceIdAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JMvzjQJohU6C85gwkNMn6Q", callContext.id);
// Trigger Event: ApplyFilters
return controller.applyFilters$Action(vars.value.filter_BookmarksVar, vars.value.hasFitlerAppliedInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f4rfaMaVE0isNXwENJw5LA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2csTqVRZuUWawJfcL6NSDg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2csTqVRZuUWawJfcL6NSDg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks_FilterSheet.Handler_FilterSheetApplyFilters$vars", [{
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
name: "Filter_Bookmarks",
attrName: "filter_BookmarksVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect_Bookmarks_CSModel.Bookmark_FilterRec();
},
complexType: Connect_Bookmarks_CSModel.Bookmark_FilterRec
}]);

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.initialize_FilterYearOptions$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._initialize_FilterYearOptions$Action, callContext);

};
Controller.prototype.handler_FilterSheetApplyFilters$Action = function (optionChoice_ControlIn, sortBy_TitleIn, hasFitlerAppliedIn, optionFlatList_ControlIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetApplyFilters$Action, callContext, optionChoice_ControlIn, sortBy_TitleIn, hasFitlerAppliedIn, optionFlatList_ControlIn);

};
Controller.prototype.sheetInilialized$Action = function () {
return Promise.resolve();
};
Controller.prototype.applyFilters$Action = function () {
return Promise.resolve();
};
Controller.prototype.loaded$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kStR2ohBzUir2kDhfuOSLg:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg:JSKfj0CjfVbkU+WuEIFgoA", "UBTConnect", "Bookmarks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HPxyPA17VE6uWd0Jl5jZHg:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.HPxyPA17VE6uWd0Jl5jZHg:QSG3MMX4+b1tv09c8eiFPg", "UBTConnect", "Bookmarks_FilterSheet", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HPxyPA17VE6uWd0Jl5jZHg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kStR2ohBzUir2kDhfuOSLg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Bookmarks/Bookmarks_FilterSheet On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Bookmarks/Bookmarks_FilterSheet On Parameters Changed");
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"PygbZW6c3k+2BCWubgvpiw": {
getter: function (varBag, idService) {
return varBag.vars.value.filter_year_listVar;
}
},
"vfaW4G5DHUeqmOkRhiJMaw": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedYearsVar;
}
},
"dPFOx0tUEUOATGdC+J2kPQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isYearSelectedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"fWAlxC0zkk630SlWgnBECg": {
getter: function (varBag, idService) {
return varBag.vars.value.filter_BookmarksVar;
}
},
"a6tpLJZiD0SfeZ758IZLxw": {
getter: function (varBag, idService) {
return varBag.vars.value.optionChoice_ControlInLocal;
}
},
"gXP3p0urs0WwSzeBX450Pg": {
getter: function (varBag, idService) {
return varBag.vars.value.sortBy_TitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IphK+gEoAUitGdv2tZYFQQ": {
getter: function (varBag, idService) {
return varBag.vars.value.hasFitlerAppliedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"MukB5uHFcEitosY3LeTVNw": {
getter: function (varBag, idService) {
return varBag.vars.value.optionFlatList_ControlInLocal;
}
},
"3qxKD+HW_066bjSMhUbWJA": {
getter: function (varBag, idService) {
return varBag.yearsVar.value;
}
},
"KNL_qgy6LE6ZpmiRxsE48w": {
getter: function (varBag, idService) {
return varBag.sortByVar.value;
}
},
"9rngfrT1TEK6o3Ot7s2NvA": {
getter: function (varBag, idService) {
return varBag.model.variables.years_Extra_Option_FlatListVar;
}
},
"Pmuo6iJZJU6qNp8YErUHcg": {
getter: function (varBag, idService) {
return varBag.model.variables.filterByYear_TitleVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"i174fILhOE+80DPwkxOaGA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FilterBookmarksIn;
}
},
"pcjLqSBgykmKktUp9MnQiQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_YearsOptionsIn;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
