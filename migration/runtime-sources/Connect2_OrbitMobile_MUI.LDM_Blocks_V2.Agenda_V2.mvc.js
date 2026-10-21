define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.Agenda_V2.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.model", "UBTConnect_Utils.model", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc$model", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$model", "Connect2_OrbitMobile_MUI.model$Agenda_V2List", "Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendar_V2List", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponse_V2Rec", "Connect2_OrbitMobile_MUI.controller$GetAgendaWeekDay", "Connect2_OrbitMobile_MUI.model$AgendaRec", "Connect2_OrbitMobile_IS.model$EventCalendarRec", "Connect2_OrbitMobile_MUI.model$EventCalendarList", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_LegacyShared.model$PhoneCallInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedModel, UBTConnect_UtilsModel, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_V2_mvcModel, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AgendaEvents", "agendaEventsVar", "AgendaEvents", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.Agenda_V2List());
}, false, Connect2_OrbitMobile_MUIModel.Agenda_V2List), 
this.attr("CurrentWeekStartDate", "currentWeekStartDateVar", "CurrentWeekStartDate", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("In_WeekStartDate", "in_WeekStartDateIn", "In_WeekStartDate", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_WeekStartDateInDataFetchStatus", "_in_WeekStartDateInDataFetchStatus", "_in_WeekStartDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Events", "in_EventsIn", "In_Events", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendar_V2List());
}, false, Connect2_OrbitMobile_MUIModel.EventCalendar_V2List), 
this.attr("_in_EventsInDataFetchStatus", "_in_EventsInDataFetchStatus", "_in_EventsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsFetchingData", "in_IsFetchingDataIn", "In_IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsFetchingDataInDataFetchStatus", "_in_IsFetchingDataInDataFetchStatus", "_in_IsFetchingDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_V2_mvcModel.hasValidationWidgets || Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_WeekStartDate" in inputs) {
this.variables.in_WeekStartDateIn = inputs.In_WeekStartDate;
if("_in_WeekStartDateInDataFetchStatus" in inputs) {
this.variables._in_WeekStartDateInDataFetchStatus = inputs._in_WeekStartDateInDataFetchStatus;
}

}

if("In_Events" in inputs) {
this.variables.in_EventsIn = inputs.In_Events;
if("_in_EventsInDataFetchStatus" in inputs) {
this.variables._in_EventsInDataFetchStatus = inputs._in_EventsInDataFetchStatus;
}

}

if("In_IsFetchingData" in inputs) {
this.variables.in_IsFetchingDataIn = inputs.In_IsFetchingData;
if("_in_IsFetchingDataInDataFetchStatus" in inputs) {
this.variables._in_IsFetchingDataInDataFetchStatus = inputs._in_IsFetchingDataInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "LDM_Blocks_V2.Agenda_V2");
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.Agenda_V2.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.model", "UBTConnect_Utils.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.Agenda_V2.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.Agenda_V2.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc$view", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$view", "Connect2_OrbitMobile_MUI.model$Agenda_V2List", "Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendar_V2List", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponse_V2Rec", "Connect2_OrbitMobile_MUI.controller$GetAgendaWeekDay", "Connect2_OrbitMobile_MUI.model$AgendaRec", "Connect2_OrbitMobile_IS.model$EventCalendarRec", "Connect2_OrbitMobile_MUI.model$EventCalendarList", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_LegacyShared.model$PhoneCallInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedModel, UBTConnect_UtilsModel, React, OSView, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_Agenda_V2_mvc_model, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_Agenda_V2_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_V2_mvc_view, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view) {
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
        View.displayName = "LDM_Blocks_V2.Agenda_V2";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_V2_mvc_view, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_V2_Agenda_V2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_V2_Agenda_V2_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.agendaEventsVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
name: "List_WeekDay"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "agenda-day",
visible: true,
_idProps: {
service: idService,
name: "ListItem_WeekDay"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._in_IsFetchingDataInDataFetchStatus), asPrimitiveValue(model.variables.in_IsFetchingDataIn), asPrimitiveValue(model.variables.agendaEventsVar.getCurrent(callContext.iterationContext).eventsAttr), asPrimitiveValue(model.variables.agendaEventsVar.getCurrent(callContext.iterationContext).weekDayAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "agenda-day-title",
value: model.variables.agendaEventsVar.getCurrent(callContext.iterationContext).weekDayAttr,
_idProps: {
service: idService,
name: "Title_WeekDay"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(!(model.variables.in_IsFetchingDataIn), false, this, function () {
return [$if(!(model.variables.agendaEventsVar.getCurrent(callContext.iterationContext).eventsAttr.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.agendaEventsVar.getCurrent(callContext.iterationContext).eventsAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
name: "List_WeekDayEvents"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_V2_mvc_view, {
inputs: {
In_Event: model.variables.agendaEventsVar.getCurrent(callContext.iterationContext).eventsAttr.getCurrent(callContext.iterationContext),
In_IsExpandable: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick_PhoneCall$Action: function (event_PhoneCallInfoIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/EventCard_V2 OnClick_PhoneCall");
controller.onClick_PhoneCall$Action(OS.DataConversion.JSConversions.typeConvertRecord(event_PhoneCallInfoIn, new UBTConnect_UtilsModel.ContactPopupDataRec(), function (source, target) {
target = source.contactPopupDataAttr;
return target;
}), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
callPhoneEventCard$Action: function (phoneCallInfoIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/EventCard_V2 CallPhoneEventCard");
controller.callPhone$Action(phoneCallInfoIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onClick_Message$Action: function (event_ContactPopupDataIn, event_CountryNameIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/EventCard_V2 OnClick_Message");
controller.onClick_Message$Action(event_ContactPopupDataIn, event_CountryNameIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
householdClicked$Action: function (event_HouseholdIdIn, event_HouseholdNameIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_EventIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/EventCard_V2 HouseholdClicked");
controller.householdClicked$Action(event_HouseholdIdIn, event_HouseholdNameIn, event_EventIdIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
eventClicked$Action: function (event_EventHostIdIn, event_EventIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/EventCard_V2 EventClicked");
controller.eventClicked$Action(event_EventHostIdIn, event_EventIdIn, controller.callContext(eventHandlerContext));
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
name: "EventCard_V2_WeekDay",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "2")
},
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.Text, {
style: "agenda-day-no-event",
text: ["No event"],
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-placeholder",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}))];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables._in_IsFetchingDataInDataFetchStatus), asPrimitiveValue(model.variables.in_IsFetchingDataIn)]
}), React.createElement(Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view, {
inputs: {
In_ErrorMessage: "No event information."
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
uuid: "8",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.Agenda_V2.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.model", "UBTConnect_Utils.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.Agenda_V2.mvc$debugger", "Connect2_OrbitMobile_MUI.model$Agenda_V2List", "Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendar_V2List", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponse_V2Rec", "Connect2_OrbitMobile_MUI.controller$GetAgendaWeekDay", "Connect2_OrbitMobile_MUI.model$AgendaRec", "Connect2_OrbitMobile_IS.model$EventCalendarRec", "Connect2_OrbitMobile_MUI.model$EventCalendarList", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_LegacyShared.model$PhoneCallInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedModel, UBTConnect_UtilsModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_Agenda_V2_mvc_Debugger) {
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:9fl4d7Is6ky97U7g_hkcGw:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.2gCnGoy_kUiSEPTtb54keg/ClientActions.9fl4d7Is6ky97U7g_hkcGw:RZAL3OABklDbJUEbGN4EGA", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Xyen1B9BbUaVpB9Ocfb5_Q", callContext.id);
// Set CurrentWeekStartDate
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+XB2UgHn4EyQjUl_ukp0BA", callContext.id);
// CurrentWeekStartDate = In_WeekStartDate
model.variables.currentWeekStartDateVar = model.variables.in_WeekStartDateIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ESo3SSIgCkiMr_ImjplhdQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9fl4d7Is6ky97U7g_hkcGw", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.Agenda_V2.OnReady$vars"))());
var listFilter_WeekDayVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_WeekDayVar = listFilter_WeekDayVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:H2I0sW5VPUiRefi6QkCgUA:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.2gCnGoy_kUiSEPTtb54keg/ClientActions.H2I0sW5VPUiRefi6QkCgUA:vn8g7IuStutlw3keTqPERw", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pOQFMCv52EWfliN6JI8+VA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2hOaWYZNyk6fS7F9MFn73A", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.agendaEventsVar, callContext);
// Within week?
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GnHNDcgE90Wt7c0E8k0w5g", callContext.id) && (vars.value.weekDayVar <= 6))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G4Iwee4NOEGP10opTLAQIQ", callContext.id);
// Execute Action: ListFilter_WeekDay
listFilter_WeekDayVar.value = OS.SystemActions.listFilter(model.variables.in_EventsIn, function (p) {
return OS.BuiltinFunctions.textToDate(p.eventDateAttr).equals(OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addDays(model.variables.currentWeekStartDateVar, vars.value.weekDayVar)));
}, callContext);

// Set Week Day data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0XKwc0h6R0GexB78liz8Xg", callContext.id);
// AgendaEvent.WeekDay = GetAgendaWeekDay(CurrentWeekStartDate, WeekDay)
vars.value.agendaEventVar.weekDayAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getAgendaWeekDay$Action(model.variables.currentWeekStartDateVar, vars.value.weekDayVar, callContext).out_FormattedTextOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0XKwc0h6R0GexB78liz8Xg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AgendaEvent.Events = ListFilter_WeekDay.FilteredList
vars.value.agendaEventVar.eventsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(listFilter_WeekDayVar.value.filteredListOut, new Connect2_OrbitMobile_MUIModel.EventCalendarList(), function (source, target) {
target.eventIdAttr = source.eventIdAttr;
target.eventHostIdAttr = source.eventHostIdAttr;
target.eventLocalityIdAttr = source.eventLocalityIdAttr;
target.eventDateAttr = source.eventDateAttr;
target.guestCountAttr = source.guestCountAttr;
target.eventNameAttr = source.eventNameAttr;
target.hostIdAttr = source.hostIdAttr;
target.hostFullNameAttr = source.hostFullNameAttr;
target.hostLocalityAttr = source.hostLocalityAttr;
target.hostingAttr = source.hostingAttr;
target.householdDisplayAttr = source.householdDisplayAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ld+PIpzM6UKY6oQq+LcGjA", callContext.id);
// Execute Action: ListAppend_WeekDay
OS.SystemActions.listAppend(model.variables.agendaEventsVar, OS.DataConversion.JSConversions.typeConvertRecord(vars.value.agendaEventVar, new Connect2_OrbitMobile_MUIModel.Agenda_V2Rec(), function (source, target) {
target.weekDayAttr = source.weekDayAttr;
return target;
}), callContext);
// Increment
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GycRnVE6o0+OKZDa+s+RxA", callContext.id);
// WeekDay = WeekDay + 1
vars.value.weekDayVar = (vars.value.weekDayVar + 1);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hWnXjxtXyEy6svxbIG_+wg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:H2I0sW5VPUiRefi6QkCgUA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.Agenda_V2.OnReady$vars", [{
name: "WeekDay",
attrName: "weekDayVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "AgendaEvent",
attrName: "agendaEventVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AgendaRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AgendaRec
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:npRU31RQj0CaCkVJIikjpQ:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.2gCnGoy_kUiSEPTtb54keg/ClientActions.npRU31RQj0CaCkVJIikjpQ:+BCxlyrkgtUMRgiOMYjjOw", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t3EtrceyMECz1N1CiUXnIA", callContext.id);
// Different week?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ke80mfl2iEONnGBjaFEt9w", callContext.id) && !(!(model.variables.in_WeekStartDateIn.equals(model.variables.currentWeekStartDateVar))))) {
// Has Events?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UhAwJxHwB0Wcrv446YJ3GA", callContext.id) && model.variables.in_EventsIn.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ashbw9VxEU2FTpIm5FR6LQ", callContext.id);
return ;

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LjtUktxOiEeTwBJ2gQTxcQ", callContext.id);
// Execute Action: OnInitialize
controller._onInitialize$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YMbH7wSvvUu6p73nLdVatA", callContext.id);
// Execute Action: OnReady
controller._onReady$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rs2ZjhO+HESMDKU8ftov4A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:npRU31RQj0CaCkVJIikjpQ", callContext.id);
}

};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.callPhone$Action = function () {
return Promise.resolve();
};
Controller.prototype.onClick_PhoneCall$Action = function () {
return Promise.resolve();
};
Controller.prototype.eventClicked$Action = function () {
return Promise.resolve();
};
Controller.prototype.onClick_Message$Action = function () {
return Promise.resolve();
};
Controller.prototype.householdClicked$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:oOtoNzCVnki0KgXQ86GK9A:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A:T9MqC0UGSbxvJXLBlJ3h9w", "Connect2_OrbitMobile_MUI", "LDM_Blocks_V2", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2gCnGoy_kUiSEPTtb54keg:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.2gCnGoy_kUiSEPTtb54keg:jTc2odmv4VhSZWMxgnbupg", "Connect2_OrbitMobile_MUI", "Agenda_V2", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2gCnGoy_kUiSEPTtb54keg", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:oOtoNzCVnki0KgXQ86GK9A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks_V2/Agenda_V2 On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks_V2/Agenda_V2 On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks_V2/Agenda_V2 On Parameters Changed");
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

define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.Agenda_V2.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"4dwSPZNxH0ScYHv85ba3NA": {
getter: function (varBag, idService) {
return varBag.vars.value.weekDayVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"rpIyL0avYEu5vqoUabO4rw": {
getter: function (varBag, idService) {
return varBag.vars.value.agendaEventVar;
}
},
"G4Iwee4NOEGP10opTLAQIQ": {
getter: function (varBag, idService) {
return varBag.listFilter_WeekDayVar.value;
}
},
"Kgsz8Q75AEyC8qWtCS4x_A": {
getter: function (varBag, idService) {
return varBag.model.variables.agendaEventsVar;
}
},
"6eJQ3MxIq0WNrTO1g1zEnA": {
getter: function (varBag, idService) {
return varBag.model.variables.currentWeekStartDateVar;
},
dataType: OS.DataTypes.DataTypes.Date
},
"PH+Ddf0pX0yXktmZeCsk0A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_WeekStartDateIn;
},
dataType: OS.DataTypes.DataTypes.Date
},
"yJmNCNYFqkGdNf7LkIFugQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventsIn;
}
},
"rhCZ9hViSE62TInPZSPcoQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsFetchingDataIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BYj0bTw4wEWYIOgkgtLm1A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_WeekDay"));
})(varBag.model, idService);
}
},
"MWFN2MCt2kmDm8KSTXgEiA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItem_WeekDay"));
})(varBag.model, idService);
}
},
"cHEso6Yf40KjqM+rVyDqzQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title_WeekDay"));
})(varBag.model, idService);
}
},
"qz1LjgEyOUaEl2sQ0YNXQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsNotFetching"));
})(varBag.model, idService);
}
},
"tYA3C9SR_0ubuAupt14bqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasData_WeekDay"));
})(varBag.model, idService);
}
},
"Vcs4kagWJUm+yzhCDFhJ2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_WeekDayEvents"));
})(varBag.model, idService);
}
},
"lcf0UqWaFEOLXScA1JIOJQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("EventCard_V2_WeekDay"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
