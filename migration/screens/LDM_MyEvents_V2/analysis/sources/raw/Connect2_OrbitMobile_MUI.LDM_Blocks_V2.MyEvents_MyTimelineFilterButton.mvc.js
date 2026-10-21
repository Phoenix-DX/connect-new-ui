define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.controller", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline_Filters.mvc$model", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$EventLocalitiesFilterRec", "Connect2_OrbitMobile_MUI.model$EventLocalitiesFilterList", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_BLModel, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIController, NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_Filters_mvcModel) {
var OS = OutSystems.Internal;

var GetEventLocalitiesForFilterDataActRec = (function (_super) {
__extends(GetEventLocalitiesForFilterDataActRec, _super);
function GetEventLocalitiesForFilterDataActRec(defaults) {
_super.apply(this, arguments);
}
GetEventLocalitiesForFilterDataActRec.attributesToDeclare = function () {
return [
this.attr("EventLocalities", "eventLocalitiesOut", "EventLocalities", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventLocalitiesFilterList());
}, true, Connect2_OrbitMobile_MUIModel.EventLocalitiesFilterList)
].concat(_super.attributesToDeclare.call(this));
};
GetEventLocalitiesForFilterDataActRec.fromStructure = function (str) {
return new GetEventLocalitiesForFilterDataActRec(new GetEventLocalitiesForFilterDataActRec.RecordClass({
eventLocalitiesOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetEventLocalitiesForFilterDataActRec.init();
return GetEventLocalitiesForFilterDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsShowFilters", "isShowFiltersVar", "IsShowFilters", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HasLocalityData", "hasLocalityDataVar", "HasLocalityData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("SelectedFilters", "selectedFiltersVar", "SelectedFilters", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec());
}, false, Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec), 
this.attr("In_HasLoaded", "in_HasLoadedIn", "In_HasLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_HasLoadedInDataFetchStatus", "_in_HasLoadedInDataFetchStatus", "_in_HasLoadedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_DefaultDateRangeInMonths", "in_DefaultDateRangeInMonthsIn", "In_DefaultDateRangeInMonths", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 24;
}, false), 
this.attr("_in_DefaultDateRangeInMonthsInDataFetchStatus", "_in_DefaultDateRangeInMonthsInDataFetchStatus", "_in_DefaultDateRangeInMonthsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsShowing", "in_IsShowingIn", "In_IsShowing", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsShowingInDataFetchStatus", "_in_IsShowingInDataFetchStatus", "_in_IsShowingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetEventLocalitiesForFilter", "getEventLocalitiesForFilterDataAct", "getEventLocalitiesForFilterDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetEventLocalitiesForFilterDataActRec());
}, true, GetEventLocalitiesForFilterDataActRec)
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
Model._hasValidationWidgetsValue = (NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel.hasValidationWidgets || Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_Filters_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_HasLoaded" in inputs) {
this.variables.in_HasLoadedIn = inputs.In_HasLoaded;
if("_in_HasLoadedInDataFetchStatus" in inputs) {
this.variables._in_HasLoadedInDataFetchStatus = inputs._in_HasLoadedInDataFetchStatus;
}

}

if("In_DefaultDateRangeInMonths" in inputs) {
this.variables.in_DefaultDateRangeInMonthsIn = inputs.In_DefaultDateRangeInMonths;
if("_in_DefaultDateRangeInMonthsInDataFetchStatus" in inputs) {
this.variables._in_DefaultDateRangeInMonthsInDataFetchStatus = inputs._in_DefaultDateRangeInMonthsInDataFetchStatus;
}

}

if("In_IsShowing" in inputs) {
this.variables.in_IsShowingIn = inputs.In_IsShowing;
if("_in_IsShowingInDataFetchStatus" in inputs) {
this.variables._in_IsShowingInDataFetchStatus = inputs._in_IsShowingInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "LDM_Blocks_V2.MyEvents_MyTimelineFilterButton");
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline_Filters.mvc$view", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$EventLocalitiesFilterRec", "Connect2_OrbitMobile_MUI.model$EventLocalitiesFilterList", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_LegacySharedController, React, OSView, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyEvents_MyTimelineFilterButton_mvc_model, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyEvents_MyTimelineFilterButton_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_Filters_mvc_view) {
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
        View.displayName = "LDM_Blocks_V2.MyEvents_MyTimelineFilterButton";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_Filters_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyEvents_MyTimelineFilterButton_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyEvents_MyTimelineFilterButton_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.in_IsShowingIn, false, this, function () {
return [$if(model.variables.in_HasLoadedIn, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyEvents_MyTimelineFilterButton/Icon onclick");
controller.toggleEventFilters$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
icon: "filter",
iconSize: /*FontSize*/ 0,
style: "icon font-size-1-5em",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "filter",
iconSize: /*FontSize*/ 0,
style: "icon font-size-1-5em text-neutral-6",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "BlockPlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
"componentDidUpdate": function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyEvents_MyTimelineFilterButton/SearchFiltersRoot componentDidUpdate");
controller.searchFiltersComponentDidUpdate$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "backwards-compatibility",
visible: true,
_idProps: {
service: idService,
name: "SearchFiltersRoot"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(!(model.variables.isShowFiltersVar), false, this, function () {
return [];
}, function () {
return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigationPrevented$Action: function (backNavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/PreventBackNavigation BackNavigationPrevented");
controller.toggleEventFilters$Action(controller.callContext(eventHandlerContext));
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
uuid: "4",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Popup, {
showPopup: model.variables.isShowFiltersVar,
style: "popup-dialog my-events-popup-filters",
_idProps: {
service: idService,
name: "Event_Filters_PopUp"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_Filters_mvc_view, {
inputs: {
In_DefaultDateRangeInMonths: model.variables.in_DefaultDateRangeInMonthsIn,
_in_DefaultDateRangeInMonthsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_DefaultDateRangeInMonthsInDataFetchStatus),
In_SelectedFilters: model.variables.selectedFiltersVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
close$Action: function (event_IsToResetIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline_Filters Close");
return controller.onHandle_Close$Action(event_IsToResetIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
filter$Action: function (event_SelectedFiltersIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline_Filters Filter");
return controller.onHandle_Filter$Action(event_SelectedFiltersIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
resetFilters$Action: function (event_ResetFiltersIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline_Filters ResetFilters");
controller.onHandle_ResetFilters$Action(event_ResetFiltersIn, controller.callContext(eventHandlerContext));
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
uuid: "6",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc$debugger", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$EventLocalitiesFilterRec", "Connect2_OrbitMobile_MUI.model$EventLocalitiesFilterList", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_LegacySharedController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyEvents_MyTimelineFilterButton_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getEventLocalitiesForFilter$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getEventLocalitiesForFilter$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getEventLocalitiesForFilter$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:EdBruVNouE60VabhBrColw:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.b3pL6OhXr0iu7R5zo5s0UQ/DataActions.EdBruVNouE60VabhBrColw:q+WKX0QXso_Jxsi88DOByw", "Connect2_OrbitMobile_MUI", "GetEventLocalitiesForFilter", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks_V2/MyEvents_MyTimelineFilterButton/GetEventLocalitiesForFilter");
return controller.callDataAction("DataActionGetEventLocalitiesForFilter", "screenservices/Connect2_OrbitMobile_MUI/LDM_Blocks_V2/MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter", "2Vmf6wOZML9cJUXM0n_Z0w", function (b) {
model.variables.getEventLocalitiesForFilterDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getEventLocalitiesForFilterDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEventLocalitiesForFilterDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:EdBruVNouE60VabhBrColw", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getEventLocalitiesForFilter$DataActRefresh"];
// Client Actions
Controller.prototype._searchFiltersComponentDidUpdate$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SearchFiltersComponentDidUpdate");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:qjq8FDFh5EmRguz9ex6D3g:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.b3pL6OhXr0iu7R5zo5s0UQ/ClientActions.qjq8FDFh5EmRguz9ex6D3g:0Wve121ceDBspaOmlZOBeg", "Connect2_OrbitMobile_MUI", "SearchFiltersComponentDidUpdate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YsaKmQBRY0yUNAdb+ODFJw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Tbr3GJsIdUe9esM8ia2b2g", callContext.id);
// Execute Action: CopyClassesAcrossPortal
Connect2_LegacySharedController.default.copyClassesAcrossPortal$Action(idService.getId("SearchFiltersRoot"), idService.getId("Event_Filters_PopUp"), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ia8_HktOnkarB0uEG3bPtg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:qjq8FDFh5EmRguz9ex6D3g", callContext.id);
}

};
Controller.prototype._onHandle_ResetFilters$Action = function (in_ResetFiltersIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ResetFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.OnHandle_ResetFilters$vars"))());
vars.value.in_ResetFiltersInLocal = in_ResetFiltersIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:JCFuNPbxBUq0y7NwcaMagQ:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.b3pL6OhXr0iu7R5zo5s0UQ/ClientActions.JCFuNPbxBUq0y7NwcaMagQ:PUo4ewaEGan89WZHcADPxA", "Connect2_OrbitMobile_MUI", "OnHandle_ResetFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1_31NKrK+0OUE4DZauOBMA", callContext.id);
// Reset Filters
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gdQzEwOOJUenaCkMu+3LTA", callContext.id);
// SelectedFilters = In_ResetFilters
model.variables.selectedFiltersVar = vars.value.in_ResetFiltersInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u4inIAzzmU6j53WqHt+1AA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:JCFuNPbxBUq0y7NwcaMagQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.OnHandle_ResetFilters$vars", [{
name: "In_ResetFilters",
attrName: "in_ResetFiltersInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec();
},
complexType: Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec
}]);
Controller.prototype._onHandle_Filter$Action = function (in_SelectedFiltersIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_Filter");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.OnHandle_Filter$vars"))());
vars.value.in_SelectedFiltersInLocal = in_SelectedFiltersIn.clone();
var listFilter_GetSelectedVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_GetSelectedVar = listFilter_GetSelectedVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:yD3WOkpJJE+nmpKZDw7GNA:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.b3pL6OhXr0iu7R5zo5s0UQ/ClientActions.yD3WOkpJJE+nmpKZDw7GNA:6E6V4D0w4KDombHiLtUl1A", "Connect2_OrbitMobile_MUI", "OnHandle_Filter", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mg+5ARvFc0GyfXVUxiPZSQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rxOg5PQJDE2YHA3PbowNZg", callContext.id);
// Execute Action: ToggleEventFilters
controller._toggleEventFilters$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R3WZXCF2MEiOiSKH56EjYQ", callContext.id);
// Execute Action: ListFilter_GetSelected
listFilter_GetSelectedVar.value = OS.SystemActions.listFilter(vars.value.in_SelectedFiltersInLocal.localitiesAttr, function (p) {
return p.isSelectedAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p87U49ER2EejZ7e9KOTwlA", callContext.id);
// Trigger Event: Filter
return controller.filter$Action(function () {
var rec = new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec();
rec.localitiesAttr = listFilter_GetSelectedVar.value.filteredListOut;
rec.fromDateAttr = vars.value.in_SelectedFiltersInLocal.fromDateAttr;
rec.toDateAttr = vars.value.in_SelectedFiltersInLocal.toDateAttr;
return rec;
}(), callContext).then(function () {
// Update Selected Filters
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LccHY93Iwku1DdYGZPgXZA", callContext.id);
// SelectedFilters = In_SelectedFilters
model.variables.selectedFiltersVar = vars.value.in_SelectedFiltersInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:N16CFh4AiUen3oGpJDWBxA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yD3WOkpJJE+nmpKZDw7GNA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yD3WOkpJJE+nmpKZDw7GNA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.OnHandle_Filter$vars", [{
name: "In_SelectedFilters",
attrName: "in_SelectedFiltersInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec();
},
complexType: Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:M72LRvMwyUuGqBNOB8FVUg:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.b3pL6OhXr0iu7R5zo5s0UQ/ClientActions.M72LRvMwyUuGqBNOB8FVUg:XiRaNbTfKRFTcPF990TKIQ", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RHPJt6hBcE6YIh+zKWR19Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aWq5+1nvN0qCEvoIuX5hXw", callContext.id);
// Execute Action: OnParametersChanged
return controller._onParametersChanged$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fkZ4lzUhkUC+On+pdn3HyQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:M72LRvMwyUuGqBNOB8FVUg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:M72LRvMwyUuGqBNOB8FVUg", callContext.id);
throw ex;

});
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:BuJ9f1rPd0SEg_YYeoYnVA:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.b3pL6OhXr0iu7R5zo5s0UQ/ClientActions.BuJ9f1rPd0SEg_YYeoYnVA:JzCVNk45GguOCsVBDvjSuQ", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MrL6rPn9b0CbLV_JlTrQxg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_YCF17VwiUiys_dUtdi9xA", callContext.id) && model.variables.in_HasLoadedIn)) {
// Has Data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ha5AJrABhkCrPA1QkofbZw", callContext.id) && model.variables.hasLocalityDataVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5OlXsClcM0KeF9GDyUCtQw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JCP8QfAxtUi1IJ3XINnrXg", callContext.id);
// Execute Action: GetEventLocalitiesData
return controller._getEventLocalitiesData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5OlXsClcM0KeF9GDyUCtQw", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fBK8+Hm5zUCMmKGUUSQEvg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BuJ9f1rPd0SEg_YYeoYnVA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BuJ9f1rPd0SEg_YYeoYnVA", callContext.id);
throw ex;

});
};
Controller.prototype._toggleEventFilters$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ToggleEventFilters");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:fIFwgDCWsE+ZVa+pQ2KlCg:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.b3pL6OhXr0iu7R5zo5s0UQ/ClientActions.fIFwgDCWsE+ZVa+pQ2KlCg:4rP9WaIyoYLL5DycPb4a9A", "Connect2_OrbitMobile_MUI", "ToggleEventFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:x+Iid7ygGEKtMYWE3i1CbQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CHbA_TGW+kq2MqQg5qczOA", callContext.id) && model.variables.in_IsShowingIn)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qTrFX3yE80an0NcYFR4wLQ", callContext.id);
// IsShowFilters = notIsShowFilters
model.variables.isShowFiltersVar = !(model.variables.isShowFiltersVar);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ScyKBIkfokeZjUfwseBpYg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nR044YvD00mSRgyNbfNe9w", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fIFwgDCWsE+ZVa+pQ2KlCg", callContext.id);
}

};
Controller.prototype._onHandle_Close$Action = function (in_IsToResetIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_Close");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.OnHandle_Close$vars"))());
vars.value.in_IsToResetInLocal = in_IsToResetIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:M4U_umIdfkaK2yJTPnrdsw:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.b3pL6OhXr0iu7R5zo5s0UQ/ClientActions.M4U_umIdfkaK2yJTPnrdsw:ulySacfUVRb0MA9u+ktHXw", "Connect2_OrbitMobile_MUI", "OnHandle_Close", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CsnLoi8pa0mtHbdU8mWMWQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t7PHHelaP0iEfTFxnxmzdw", callContext.id);
// Execute Action: ToggleEventFilters
controller._toggleEventFilters$Action(callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JmJJkabo_kGC+mNKqg5Wyg", callContext.id) && vars.value.in_IsToResetInLocal)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hlNBUdnYiEq9sF4BpE3YEg", callContext.id);
// Trigger Event: ResetFilters
return controller.resetFilters$Action(model.variables.selectedFiltersVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b+p1bvrOaUikr23ZbsZRrg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b+p1bvrOaUikr23ZbsZRrg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:M4U_umIdfkaK2yJTPnrdsw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:M4U_umIdfkaK2yJTPnrdsw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.OnHandle_Close$vars", [{
name: "In_IsToReset",
attrName: "in_IsToResetInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._getEventLocalitiesData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetEventLocalitiesData");
callContext = controller.callContext(callContext);
var getCurrentTimeInMill_StartVar = new OS.DataTypes.VariableHolder();
var getCurrentTimeInMill_EndVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCurrentTimeInMill_StartVar = getCurrentTimeInMill_StartVar;
varBag.getCurrentTimeInMill_EndVar = getCurrentTimeInMill_EndVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:iuUfv0WruU+KV6c+8p1Y3A:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.b3pL6OhXr0iu7R5zo5s0UQ/ClientActions.iuUfv0WruU+KV6c+8p1Y3A:Nyw5izSUUbfV4v+FapKPfA", "Connect2_OrbitMobile_MUI", "GetEventLocalitiesData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VxBHjqxeNEKQpcmfB8p21g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:46Ux5eyXQUCfPwD_DGynxg", callContext.id);
// HasLocalityData = False
model.variables.hasLocalityDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:D5CGmt959k6DE0XL78eP0Q", callContext.id);
// Execute Action: GetCurrentTimeInMill_Start
getCurrentTimeInMill_StartVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VF2n6wMQ0ke3qOl9qP6NZg", callContext.id);
// Refresh Query: GetEventLocalitiesForFilter
var result = controller.getEventLocalitiesForFilter$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:56NEzxbtBUCcfjs6czBGtA", callContext.id);
// Execute Action: GetCurrentTimeInMill_End
getCurrentTimeInMill_EndVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

// Set Localities
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lW5RduFjhUyIQCqfuDve6w", callContext.id);
// SelectedFilters.Localities = GetEventLocalitiesForFilter.EventLocalities
model.variables.selectedFiltersVar.localitiesAttr = model.variables.getEventLocalitiesForFilterDataAct.eventLocalitiesOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WfMuZb3Fa0WcD+G2istDAw", callContext.id);
// HasLocalityData = True
model.variables.hasLocalityDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qmX37iQ0mEaNmBjNuffdEA", callContext.id);
// Execute Action: AddAuditRequestAPIEvent
model.flush();
return Connect2_OrbitMobile_MUIController.default.addAuditRequestAPIEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.requestAPI_EventLocalities, getCurrentTimeInMill_EndVar.value.out_TimestampOut.sub(getCurrentTimeInMill_StartVar.value.out_TimestampOut), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5BwFPVAPv0W3WkFIe_o2Dw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iuUfv0WruU+KV6c+8p1Y3A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iuUfv0WruU+KV6c+8p1Y3A", callContext.id);
throw ex;

});
};

Controller.prototype.searchFiltersComponentDidUpdate$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._searchFiltersComponentDidUpdate$Action, callContext);

};
Controller.prototype.onHandle_ResetFilters$Action = function (in_ResetFiltersIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ResetFilters$Action, callContext, in_ResetFiltersIn);

};
Controller.prototype.onHandle_Filter$Action = function (in_SelectedFiltersIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_Filter$Action, callContext, in_SelectedFiltersIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.toggleEventFilters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleEventFilters$Action, callContext);

};
Controller.prototype.onHandle_Close$Action = function (in_IsToResetIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_Close$Action, callContext, in_IsToResetIn);

};
Controller.prototype.getEventLocalitiesData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getEventLocalitiesData$Action, callContext);

};
Controller.prototype.filter$Action = function () {
return Promise.resolve();
};
Controller.prototype.resetFilters$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:oOtoNzCVnki0KgXQ86GK9A:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A:T9MqC0UGSbxvJXLBlJ3h9w", "Connect2_OrbitMobile_MUI", "LDM_Blocks_V2", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:b3pL6OhXr0iu7R5zo5s0UQ:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.b3pL6OhXr0iu7R5zo5s0UQ:KvbiP8hpSfrT8IKjz+PdPw", "Connect2_OrbitMobile_MUI", "MyEvents_MyTimelineFilterButton", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:b3pL6OhXr0iu7R5zo5s0UQ", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:oOtoNzCVnki0KgXQ86GK9A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks_V2/MyEvents_MyTimelineFilterButton On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks_V2/MyEvents_MyTimelineFilterButton On Parameters Changed");
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
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});

define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Crk0vEUIbEOn9GkT8A+tSQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ResetFiltersInLocal;
}
},
"dILAdfQey0OXxEntUJtH1Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SelectedFiltersInLocal;
}
},
"R3WZXCF2MEiOiSKH56EjYQ": {
getter: function (varBag, idService) {
return varBag.listFilter_GetSelectedVar.value;
}
},
"cDHkaB_A+0m3WQ4+_Z2P8A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsToResetInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"D5CGmt959k6DE0XL78eP0Q": {
getter: function (varBag, idService) {
return varBag.getCurrentTimeInMill_StartVar.value;
}
},
"56NEzxbtBUCcfjs6czBGtA": {
getter: function (varBag, idService) {
return varBag.getCurrentTimeInMill_EndVar.value;
}
},
"HoQ1ueYn5EK5bIkyy8hm8w": {
getter: function (varBag, idService) {
return varBag.model.variables.isShowFiltersVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"sagNrUPll0yLU5TqG7j9ZA": {
getter: function (varBag, idService) {
return varBag.model.variables.hasLocalityDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xMKtNgzAFkWWf_v0M5H9ag": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedFiltersVar;
}
},
"u97kazGG+kqOPt4uLqtTMw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HasLoadedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tTpMFyDUiUu_Vt1agSrClQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_DefaultDateRangeInMonthsIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"R3hv9XSjT0evn1pOM1Cdug": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsShowingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"EdBruVNouE60VabhBrColw": {
getter: function (varBag, idService) {
return varBag.model.variables.getEventLocalitiesForFilterDataAct;
}
},
"hUaBjyNhNUybr_Yav8DJpA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsShowing"));
})(varBag.model, idService);
}
},
"uQpBKTvF+UWkggGvuxwsWw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("EnableFiltering"));
})(varBag.model, idService);
}
},
"BJxyXWl+pU+blasg4vVqfA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BlockPlaceholder"));
})(varBag.model, idService);
}
},
"cazxbh1mi0+q9utRrLSndQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SearchFiltersRoot"));
})(varBag.model, idService);
}
},
"1Yc+TUl_Y0emDvRyC+pE8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Event_Filters_PopUp"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
