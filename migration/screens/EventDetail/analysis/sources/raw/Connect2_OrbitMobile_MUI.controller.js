define("Connect2_OrbitMobile_MUI.controller$AddAuditCalendarEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$EventViewRec", "Connect2_OrbitMobile_MUI.controller$GetEventViewInfo", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditLog_Calendar_EventInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.addAuditCalendarEvent$Action = function (in_AuditEventIdIn, in_CalendarViewIn, in_CalendarDateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.AddAuditCalendarEvent$vars"))());
vars.value.in_AuditEventIdInLocal = in_AuditEventIdIn;
vars.value.in_CalendarViewInLocal = in_CalendarViewIn;
vars.value.in_CalendarDateInLocal = in_CalendarDateIn;
var getEventViewInfoVar = new OS.DataTypes.VariableHolder();
var eventInfoJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getEventViewInfoVar = getEventViewInfoVar;
varBag.eventInfoJSONVar = eventInfoJSONVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:nnhQXjdtykG8tl5L6z5oIw:/ClientActionFlows.nnhQXjdtykG8tl5L6z5oIw:vv9wa1p5LoaZ8jTlnhrAlg", "Connect2_OrbitMobile_MUI", "AddAuditCalendarEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ewcz89lowEOJRkCY1iWBSg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Set Default Values
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OXe1KmzHCkGX7Bslj8Qi0g", callContext.id);
// EventInfo.dateLocalIso = CurrDateTime
vars.value.eventInfoVar.dateLocalIsoAttr = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OXe1KmzHCkGX7Bslj8Qi0g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EventInfo.logLevel = 3
vars.value.eventInfoVar.logLevelAttr = 3;
// Is Change View?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WxKKDlbtCk6xG4OIjRJkHg", callContext.id) && (vars.value.in_AuditEventIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.calendarViewChanged))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5kG0TM7NekK_76PXECdLnQ", callContext.id);
// Execute Action: GetEventViewInfo
return Connect2_OrbitMobile_MUIController.default.getEventViewInfo$Action(vars.value.in_CalendarViewInLocal, callContext).then(function (value) {
getEventViewInfoVar.value = value;
}).then(function () {
// Set Calendar View
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PXsf6ZsdOU2X7wC5nV_jWA", callContext.id);
// EventInfo.CalendarView = GetEventViewInfo.Out_EventView.Label
vars.value.eventInfoVar.calendarViewAttr = getEventViewInfoVar.value.out_EventViewOut.labelAttr;
});
}

}).then(function () {
// Is Date Changed?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3HJrh0mUUkucjSH_b6irHw", callContext.id) && (vars.value.in_AuditEventIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.calendarDateChanged))) {
// Set Date
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dC29TvPlYUqm_IEb_ZU6GQ", callContext.id);
// EventInfo.CalendarDate = In_CalendarDate
vars.value.eventInfoVar.calendarDateAttr = vars.value.in_CalendarDateInLocal;
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3arEk9DAnUKfTeruwR9w6Q", callContext.id);
// JSON Serialize: EventInfoJSON
eventInfoJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.eventInfoVar, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+hg5qXARNki80iQXNGQ0ag", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(vars.value.in_AuditEventIdInLocal, eventInfoJSONVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o6uZjCKGl06++GK1lQW6hw", callContext.id);
});
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:nnhQXjdtykG8tl5L6z5oIw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:nnhQXjdtykG8tl5L6z5oIw", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.AddAuditCalendarEvent$vars", [{
name: "In_AuditEventId",
attrName: "in_AuditEventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_CalendarView",
attrName: "in_CalendarViewInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "In_CalendarDate",
attrName: "in_CalendarDateInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.BuiltinFunctions.nullDate();
}
}, {
name: "EventInfo",
attrName: "eventInfoVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditLog_Calendar_EventInfoRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditLog_Calendar_EventInfoRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.addAuditCalendarEvent$Action = function (in_AuditEventIdIn, in_CalendarViewIn, in_CalendarDateIn) {
in_AuditEventIdIn = (in_AuditEventIdIn === undefined) ? "" : in_AuditEventIdIn;
in_CalendarViewIn = (in_CalendarViewIn === undefined) ? 0 : in_CalendarViewIn;
in_CalendarDateIn = (in_CalendarDateIn === undefined) ? OS.BuiltinFunctions.nullDate() : in_CalendarDateIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.addAuditCalendarEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_AuditEventIdIn, OS.DataTypes.DataTypes.Text), in_CalendarViewIn, OS.DataConversion.JSNodeParamConverter.from(in_CalendarDateIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditLog_EventDetail_EventRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.addAuditClickedEvent$Action = function (in_AuditEventIdIn, in_EventHostIdIn, in_EventNameIn, in_EventDateIn, in_EventLocalityIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.AddAuditClickedEvent$vars"))());
vars.value.in_AuditEventIdInLocal = in_AuditEventIdIn;
vars.value.in_EventHostIdInLocal = in_EventHostIdIn;
vars.value.in_EventNameInLocal = in_EventNameIn;
vars.value.in_EventDateInLocal = in_EventDateIn;
vars.value.in_EventLocalityInLocal = in_EventLocalityIn;
var eventInfoJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.eventInfoJSONVar = eventInfoJSONVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:XtUZE6WxP0Cs8fCuxoiBSA:/ClientActionFlows.XtUZE6WxP0Cs8fCuxoiBSA:Z8ASM967NZovOVRMUgmlCw", "Connect2_OrbitMobile_MUI", "AddAuditClickedEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fnsBVfRJokSMFPnsvggyQg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Set Default Values
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fh8Ac+4g_kuyF6bfUj09jQ", callContext.id);
// EventInfo.dateLocalIso = CurrDateTime
vars.value.eventInfoVar.dateLocalIsoAttr = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fh8Ac+4g_kuyF6bfUj09jQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EventInfo.logLevel = 3
vars.value.eventInfoVar.logLevelAttr = 3;
// Set Event Info
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gk4CU0jUf0maUVEZjlqxpA", callContext.id);
// EventInfo.EventHostId = In_EventHostId
vars.value.eventInfoVar.eventHostIdAttr = OS.BuiltinFunctions.longIntegerToText(vars.value.in_EventHostIdInLocal);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gk4CU0jUf0maUVEZjlqxpA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EventInfo.EventName = In_EventName
vars.value.eventInfoVar.eventNameAttr = vars.value.in_EventNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gk4CU0jUf0maUVEZjlqxpA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// EventInfo.EventDate = In_EventDate
vars.value.eventInfoVar.eventDateAttr = vars.value.in_EventDateInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gk4CU0jUf0maUVEZjlqxpA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// EventInfo.EventLocality = In_EventLocality
vars.value.eventInfoVar.eventLocalityAttr = vars.value.in_EventLocalityInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sClDDDp1ak6USG22QT52Eg", callContext.id);
// JSON Serialize: EventInfoJSON
eventInfoJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.eventInfoVar, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jIq7uNn0UkywRYaGypEWRw", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(vars.value.in_AuditEventIdInLocal, eventInfoJSONVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PPP1qdldKUiwL0g+O1hNdA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:XtUZE6WxP0Cs8fCuxoiBSA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:XtUZE6WxP0Cs8fCuxoiBSA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.AddAuditClickedEvent$vars", [{
name: "In_AuditEventId",
attrName: "in_AuditEventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_EventHostId",
attrName: "in_EventHostIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "In_EventName",
attrName: "in_EventNameInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_EventDate",
attrName: "in_EventDateInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "In_EventLocality",
attrName: "in_EventLocalityInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventInfo",
attrName: "eventInfoVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditLog_EventDetail_EventRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditLog_EventDetail_EventRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.addAuditClickedEvent$Action = function (in_AuditEventIdIn, in_EventHostIdIn, in_EventNameIn, in_EventDateIn, in_EventLocalityIn) {
in_AuditEventIdIn = (in_AuditEventIdIn === undefined) ? "" : in_AuditEventIdIn;
in_EventHostIdIn = (in_EventHostIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_EventHostIdIn;
in_EventNameIn = (in_EventNameIn === undefined) ? "" : in_EventNameIn;
in_EventDateIn = (in_EventDateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_EventDateIn;
in_EventLocalityIn = (in_EventLocalityIn === undefined) ? "" : in_EventLocalityIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.addAuditClickedEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_AuditEventIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_EventHostIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(in_EventNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_EventDateIn, OS.DataTypes.DataTypes.Date), OS.DataConversion.JSNodeParamConverter.from(in_EventLocalityIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditLog_EventDetail_EventRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action = function (eventTypeIdIn, clickedHouseholdIdIn, clickedHouseholdNameIn, eventDateIn, eventLocalityIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.AddAuditEventDetailEvent$vars"))());
vars.value.eventTypeIdInLocal = eventTypeIdIn;
vars.value.clickedHouseholdIdInLocal = clickedHouseholdIdIn;
vars.value.clickedHouseholdNameInLocal = clickedHouseholdNameIn;
vars.value.eventDateInLocal = eventDateIn;
vars.value.eventLocalityInLocal = eventLocalityIn;
var eventInfoJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.eventInfoJSONVar = eventInfoJSONVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:zKgCvXLzQ0yKGr80IIRnAQ:/ClientActionFlows.zKgCvXLzQ0yKGr80IIRnAQ:9RgOXG1uGsMisbX8Dr7RKQ", "Connect2_OrbitMobile_MUI", "AddAuditEventDetailEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Kp9CV8UeGESkZTZJ8CTBGA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Set Default Values
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3dNaAnbmCkCImNuCGLo8gQ", callContext.id);
// EventInfo.dateLocalIso = CurrDateTime
vars.value.eventInfoVar.dateLocalIsoAttr = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3dNaAnbmCkCImNuCGLo8gQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EventInfo.logLevel = 3
vars.value.eventInfoVar.logLevelAttr = 3;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3dNaAnbmCkCImNuCGLo8gQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// EventInfo.EventType = "LDM"
vars.value.eventInfoVar.eventTypeAttr = "LDM";
// EventDetailsEventInfo
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R7qSkPQI+ECGyaSwqkEYGw", callContext.id);
// EventInfo.GuestHouseholdName = ClickedHouseholdName
vars.value.eventInfoVar.guestHouseholdNameAttr = vars.value.clickedHouseholdNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R7qSkPQI+ECGyaSwqkEYGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EventInfo.GuestHouseholdId = ClickedHouseholdId
vars.value.eventInfoVar.guestHouseholdIdAttr = vars.value.clickedHouseholdIdInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R7qSkPQI+ECGyaSwqkEYGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// EventInfo.EventDate = EventDate
vars.value.eventInfoVar.eventDateAttr = vars.value.eventDateInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R7qSkPQI+ECGyaSwqkEYGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// EventInfo.EventLocality = EventLocality
vars.value.eventInfoVar.eventLocalityAttr = vars.value.eventLocalityInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:35p9aNvAQk+FelxksJisqQ", callContext.id);
// JSON Serialize: EventInfoJSON
eventInfoJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.eventInfoVar, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DgfEyqDjcUaT6LSxLyZB0g", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(vars.value.eventTypeIdInLocal, eventInfoJSONVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Q0_Fvs3Zk0aZpgYeyVF6fA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:zKgCvXLzQ0yKGr80IIRnAQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:zKgCvXLzQ0yKGr80IIRnAQ", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.AddAuditEventDetailEvent$vars", [{
name: "EventTypeId",
attrName: "eventTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ClickedHouseholdId",
attrName: "clickedHouseholdIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "ClickedHouseholdName",
attrName: "clickedHouseholdNameInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventDate",
attrName: "eventDateInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "EventLocality",
attrName: "eventLocalityInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventInfo",
attrName: "eventInfoVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditLog_EventDetail_EventRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditLog_EventDetail_EventRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.addAuditEventDetailEvent$Action = function (eventTypeIdIn, clickedHouseholdIdIn, clickedHouseholdNameIn, eventDateIn, eventLocalityIn) {
eventTypeIdIn = (eventTypeIdIn === undefined) ? "" : eventTypeIdIn;
clickedHouseholdIdIn = (clickedHouseholdIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : clickedHouseholdIdIn;
clickedHouseholdNameIn = (clickedHouseholdNameIn === undefined) ? "" : clickedHouseholdNameIn;
eventDateIn = (eventDateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : eventDateIn;
eventLocalityIn = (eventLocalityIn === undefined) ? "" : eventLocalityIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action.bind(controller, eventTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(clickedHouseholdIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(clickedHouseholdNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(eventDateIn, OS.DataTypes.DataTypes.Date), OS.DataConversion.JSNodeParamConverter.from(eventLocalityIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$AddAuditEventFilterEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$AuditLog_MyTimelineFilterEventInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.addAuditEventFilterEvent$Action = function (eventTypeIdIn, filtersIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.AddAuditEventFilterEvent$vars"))());
vars.value.eventTypeIdInLocal = eventTypeIdIn;
vars.value.filtersInLocal = filtersIn.clone();
var eventInfoJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.eventInfoJSONVar = eventInfoJSONVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:mylIUN62bEWhPknZ0xrWxg:/ClientActionFlows.mylIUN62bEWhPknZ0xrWxg:COmes8gOJFbZdUyDJ9+YcA", "Connect2_OrbitMobile_MUI", "AddAuditEventFilterEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JuFju21zJ0WA_0fFIc7q8g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// EventInfo
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2320pvr2n0qxsHFNJZqFEw", callContext.id);
// EventFilterInfo.AppliedFilters = Filters
vars.value.eventFilterInfoVar.appliedFiltersAttr = vars.value.filtersInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RUoFvCVzrEqD6aIpFvH94A", callContext.id);
// JSON Serialize: EventInfoJSON
eventInfoJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.eventFilterInfoVar, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4tM+NSlztkCnrzskj8uSBQ", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(vars.value.eventTypeIdInLocal, eventInfoJSONVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vsOPxD58s0CI4hQOVFINrA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mylIUN62bEWhPknZ0xrWxg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mylIUN62bEWhPknZ0xrWxg", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.AddAuditEventFilterEvent$vars", [{
name: "EventTypeId",
attrName: "eventTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Filters",
attrName: "filtersInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec();
},
complexType: Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec
}, {
name: "EventFilterInfo",
attrName: "eventFilterInfoVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditLog_MyTimelineFilterEventInfoRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditLog_MyTimelineFilterEventInfoRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.addAuditEventFilterEvent$Action = function (eventTypeIdIn, filtersIn) {
eventTypeIdIn = (eventTypeIdIn === undefined) ? "" : eventTypeIdIn;
filtersIn = (filtersIn === undefined) ? new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec() : filtersIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.addAuditEventFilterEvent$Action.bind(controller, eventTypeIdIn, filtersIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditLog_RequestAPIRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.addAuditRequestAPIEvent$Action = function (in_AuditEventIdIn, in_RequestTimeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.AddAuditRequestAPIEvent$vars"))());
vars.value.in_AuditEventIdInLocal = in_AuditEventIdIn;
vars.value.in_RequestTimeInLocal = in_RequestTimeIn;
var eventInfoJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.eventInfoJSONVar = eventInfoJSONVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:urMZ3uDdnkC9nh2SYCGrZA:/ClientActionFlows.urMZ3uDdnkC9nh2SYCGrZA:6Uz+i38kVFxuWlxXzjffdQ", "Connect2_OrbitMobile_MUI", "AddAuditRequestAPIEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tGGg6+iKoEW12uypthC45Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Set Default Values
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VXo8gRPAg0220j+z9c4byg", callContext.id);
// EventInfo.dateLocalIso = CurrDateTime
vars.value.eventInfoVar.dateLocalIsoAttr = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VXo8gRPAg0220j+z9c4byg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EventInfo.logLevel = 3
vars.value.eventInfoVar.logLevelAttr = 3;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VXo8gRPAg0220j+z9c4byg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// EventInfo.TimeInMilliseconds = In_RequestTime
vars.value.eventInfoVar.timeInMillisecondsAttr = vars.value.in_RequestTimeInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zfEQX2C40EmjNh6t9fpdqA", callContext.id);
// JSON Serialize: EventInfoJSON
eventInfoJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.eventInfoVar, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8YAzjvWRwEOuAf_ZfROAJA", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(vars.value.in_AuditEventIdInLocal, eventInfoJSONVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ozv98+1jokyNfSZb90STzQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:urMZ3uDdnkC9nh2SYCGrZA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:urMZ3uDdnkC9nh2SYCGrZA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.AddAuditRequestAPIEvent$vars", [{
name: "In_AuditEventId",
attrName: "in_AuditEventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_RequestTime",
attrName: "in_RequestTimeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "EventInfo",
attrName: "eventInfoVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditLog_RequestAPIRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditLog_RequestAPIRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.addAuditRequestAPIEvent$Action = function (in_AuditEventIdIn, in_RequestTimeIn) {
in_AuditEventIdIn = (in_AuditEventIdIn === undefined) ? "" : in_AuditEventIdIn;
in_RequestTimeIn = (in_RequestTimeIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_RequestTimeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.addAuditRequestAPIEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_AuditEventIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_RequestTimeIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$AddExtensionToFile", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.addExtensionToFile$Action = function (fileNameIn, fileExtensionIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.AddExtensionToFile$vars"))());
vars.value.fileNameInLocal = fileNameIn;
vars.value.fileExtensionIdInLocal = fileExtensionIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.AddExtensionToFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:cwdaatDgPEmj0fLiD1w2Vw:/ClientActionFlows.cwdaatDgPEmj0fLiD1w2Vw:GTJF9PQMJjItCTxwp6JCag", "Connect2_OrbitMobile_MUI", "AddExtensionToFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XGockcBhhU2dcsgL0WaGTw", callContext.id);
// Add dot to extension
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6uYU1lZHJ0O0ocR_Ghf4dg", callContext.id);
// FileWithExtension = "." + FileExtensionId
outVars.value.fileWithExtensionOut = ("." + vars.value.fileExtensionIdInLocal);
// Already has same extension?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uc_dppLoo0uTLuQvRVQvTw", callContext.id) && (OS.BuiltinFunctions.substr(vars.value.fileNameInLocal, (OS.BuiltinFunctions.length(vars.value.fileNameInLocal) - OS.BuiltinFunctions.length(vars.value.fileExtensionIdInLocal)), OS.BuiltinFunctions.length(vars.value.fileExtensionIdInLocal)) === vars.value.fileExtensionIdInLocal))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YZcGl79FCUCQQ++Q3LR_3w", callContext.id);
// FileWithExtension = Trim
outVars.value.fileWithExtensionOut = OS.BuiltinFunctions.trim(vars.value.fileNameInLocal);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MXNpP2GthkqlwMrlFsUKwA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m2CpM7_xJEqUVgrsAJ0uEA", callContext.id);
// FileWithExtension = Trim + FileExtensionId
outVars.value.fileWithExtensionOut = (OS.BuiltinFunctions.trim(vars.value.fileNameInLocal) + vars.value.fileExtensionIdInLocal);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MXNpP2GthkqlwMrlFsUKwA", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cwdaatDgPEmj0fLiD1w2Vw", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.AddExtensionToFile$vars", [{
name: "FileName",
attrName: "fileNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileExtensionId",
attrName: "fileExtensionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.AddExtensionToFile$outVars", [{
name: "FileWithExtension",
attrName: "fileWithExtensionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.addExtensionToFile$Action = function (fileNameIn, fileExtensionIdIn) {
fileNameIn = (fileNameIn === undefined) ? "" : fileNameIn;
fileExtensionIdIn = (fileExtensionIdIn === undefined) ? "" : fileExtensionIdIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.addExtensionToFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fileNameIn, OS.DataTypes.DataTypes.Text), fileExtensionIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
FileWithExtension: OS.DataConversion.JSNodeParamConverter.to(actionResults.fileWithExtensionOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$BlurInput", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$BlurInput.BlurElementJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_BlurInput_BlurElementJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.blurInput$Action = function (in_InputIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.BlurInput$vars"))());
vars.value.in_InputIdInLocal = in_InputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:kY3ETsL+5UuNrPMEt+SEAA:/ClientActionFlows.kY3ETsL+5UuNrPMEt+SEAA:isXSGx53ohq9jSqe5dNKBg", "Connect2_OrbitMobile_MUI", "BlurInput", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XfE9MozCZ0is7c_Hj8jlTg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jd0bl2bHk0SzreWRQdHhLw", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_BlurInput_BlurElementJS, "BlurElement", "BlurInput", {
In_InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_InputIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:owl+XI9JGUaHzSHP+l56DA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:kY3ETsL+5UuNrPMEt+SEAA", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.BlurInput$vars", [{
name: "In_InputId",
attrName: "in_InputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.blurInput$Action = function (in_InputIdIn) {
in_InputIdIn = (in_InputIdIn === undefined) ? "" : in_InputIdIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.blurInput$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_InputIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$BlurInput.BlurElementJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.In_InputId).blur();
};
});

define("Connect2_OrbitMobile_MUI.controller$BoundariesCheck", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$DateControlRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.boundariesCheck$Action = function (in_DateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.BoundariesCheck$vars"))());
vars.value.in_DateInLocal = in_DateIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.BoundariesCheck$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:sL0E7z78HkuCgZTpJ0SwTQ:/ClientActionFlows.sL0E7z78HkuCgZTpJ0SwTQ:_3C8QCf4HIxO7QHpRSbunQ", "Connect2_OrbitMobile_MUI", "BoundariesCheck", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TjDAWnZhPE6dpUsrK6nsXw", callContext.id);
// Broken Boundaries?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lFfnaU7GMUSNjcr5UsYimg", callContext.id) && vars.value.in_DateInLocal.maxDateAttr.lt(vars.value.in_DateInLocal.minDateAttr))) {
// Set Output
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UCXP5LVdkkieJCGyJ9pGTw", callContext.id);
// In_Date.SelectedDate = In_Date.MinDate
vars.value.in_DateInLocal.selectedDateAttr = vars.value.in_DateInLocal.minDateAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UCXP5LVdkkieJCGyJ9pGTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// In_Date.MaxDate = In_Date.MinDate
vars.value.in_DateInLocal.maxDateAttr = vars.value.in_DateInLocal.minDateAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UCXP5LVdkkieJCGyJ9pGTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_FixedDate = In_Date
outVars.value.out_FixedDateOut = vars.value.in_DateInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v_q7LwvHuki1wKVI5OMaFA", callContext.id);
} else {
// Inside Boundaries?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Xihh4H92EUeYoI_Ry45OWQ", callContext.id) && (vars.value.in_DateInLocal.selectedDateAttr.gte(vars.value.in_DateInLocal.minDateAttr) && vars.value.in_DateInLocal.selectedDateAttr.lte(vars.value.in_DateInLocal.maxDateAttr)))) {
// Set Output
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t_1uxS18V0aMD1nWLDkMig", callContext.id);
// Out_FixedDate = In_Date
outVars.value.out_FixedDateOut = vars.value.in_DateInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CVQUr+0ui0uaTbh6mcCm9g", callContext.id);
} else {
// Below minimum?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wbtpic8h306+_LlpKoIu0A", callContext.id) && vars.value.in_DateInLocal.selectedDateAttr.lt(vars.value.in_DateInLocal.minDateAttr))) {
// Set To Minimum
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QVTLHAloIUOLnhwy0FVnNQ", callContext.id);
// In_Date.SelectedDate = In_Date.MinDate
vars.value.in_DateInLocal.selectedDateAttr = vars.value.in_DateInLocal.minDateAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QVTLHAloIUOLnhwy0FVnNQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_FixedDate = In_Date
outVars.value.out_FixedDateOut = vars.value.in_DateInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aVLHKl_Sd02SbRvbHzD+_Q", callContext.id);
} else {
// Above Maximum?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:alprHJIg7EeA7_o5TuyfGg", callContext.id) && vars.value.in_DateInLocal.selectedDateAttr.gt(vars.value.in_DateInLocal.maxDateAttr))) {
// Set To Maximum
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RSA5ltiNJUaNCDGWYF8dyg", callContext.id);
// In_Date.SelectedDate = In_Date.MaxDate
vars.value.in_DateInLocal.selectedDateAttr = vars.value.in_DateInLocal.maxDateAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RSA5ltiNJUaNCDGWYF8dyg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_FixedDate = In_Date
outVars.value.out_FixedDateOut = vars.value.in_DateInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LP_9qhU1q0WXkucMAJNtSg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wfCOrI5+EEK41bJWSOUrgQ", callContext.id);
}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:sL0E7z78HkuCgZTpJ0SwTQ", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.BoundariesCheck$vars", [{
name: "In_Date",
attrName: "in_DateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.DateControlRec();
},
complexType: Connect2_OrbitMobile_MUIModel.DateControlRec
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.BoundariesCheck$outVars", [{
name: "Out_FixedDate",
attrName: "out_FixedDateOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.DateControlRec();
},
complexType: Connect2_OrbitMobile_MUIModel.DateControlRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.boundariesCheck$Action = function (in_DateIn) {
in_DateIn = (in_DateIn === undefined) ? new Connect2_OrbitMobile_MUIModel.DateControlRec() : in_DateIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.boundariesCheck$Action.bind(controller, in_DateIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FixedDate: actionResults.out_FixedDateOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$BuildGuestString", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.buildGuestString$Action = function (in_GuestCountIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.BuildGuestString$vars"))());
vars.value.in_GuestCountInLocal = in_GuestCountIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.BuildGuestString$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uEqj9e9Bn0mN0F6Ed+uAxA:/ClientActionFlows.uEqj9e9Bn0mN0F6Ed+uAxA:9O9okjNRMwCfpVSnWz8DFg", "Connect2_OrbitMobile_MUI", "BuildGuestString", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2UMas2DWU0K6EcR7mZ59DQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qYhzS3niGU6_vvP6aOwnJg", callContext.id);
// Out_GuestCount = In_GuestCount + " Guest" + If
outVars.value.out_GuestCountOut = ((vars.value.in_GuestCountInLocal + " Guest") + (((vars.value.in_GuestCountInLocal === "1")) ? ("") : ("s")));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XCqlJ3UwIEybp+6hpk+EuA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uEqj9e9Bn0mN0F6Ed+uAxA", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.BuildGuestString$vars", [{
name: "In_GuestCount",
attrName: "in_GuestCountInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.BuildGuestString$outVars", [{
name: "Out_GuestCount",
attrName: "out_GuestCountOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.buildGuestString$Action = function (in_GuestCountIn) {
in_GuestCountIn = (in_GuestCountIn === undefined) ? "" : in_GuestCountIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.buildGuestString$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_GuestCountIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_GuestCount: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_GuestCountOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$CanOpenDirectlyViaUrl", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$CanOpenDirectlyViaUrl.IsWebJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_CanOpenDirectlyViaUrl_IsWebJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.canOpenDirectlyViaUrl$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isWebJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.CanOpenDirectlyViaUrl$outVars"))());
varBag.callContext = callContext;
varBag.isWebJSResult = isWebJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:s3IR2TsOw0uvartUar+wsg:/ClientActionFlows.s3IR2TsOw0uvartUar+wsg:g1AMhn+bra2s1bPTiSQLxg", "Connect2_OrbitMobile_MUI", "CanOpenDirectlyViaUrl", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Posp3T79b0uyybdayfk9fg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ucLzVMPTHkS2X9d3aPKEew", callContext.id);
isWebJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_CanOpenDirectlyViaUrl_IsWebJS, "IsWeb", "CanOpenDirectlyViaUrl", {
IsWeb: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.CanOpenDirectlyViaUrl$isWebJSResult"))();
jsNodeResult.isWebOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsWeb, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5R5layobXEqhv+76wh9NZQ", callContext.id);
// CanOpenDirectly = IsWeb.IsWeb
outVars.value.canOpenDirectlyOut = isWebJSResult.value.isWebOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CucYK7BZBUqc2BBa65qpNQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:s3IR2TsOw0uvartUar+wsg", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.CanOpenDirectlyViaUrl$isWebJSResult", [{
name: "IsWeb",
attrName: "isWebOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.CanOpenDirectlyViaUrl$outVars", [{
name: "CanOpenDirectly",
attrName: "canOpenDirectlyOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.canOpenDirectlyViaUrl$Action = function () {
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.canOpenDirectlyViaUrl$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CanOpenDirectly: OS.DataConversion.JSNodeParamConverter.to(actionResults.canOpenDirectlyOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$CanOpenDirectlyViaUrl.IsWebJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsWeb = !window.cordova;
};
});

define("Connect2_OrbitMobile_MUI.controller$CarouselFilteredEventResults", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "NavigationHandler.controller", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_MUI.clientVariables", "NavigationHandler.controller$SetPreloadObject", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemExtList", "Connect2_OrbitMobile_MUI.model$HouseholdCarouselServerItemList", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$HouseholdCarouselPreloadedItemList", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, NavigationHandlerController, Connect2_LegacySharedModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.carouselFilteredEventResults$Action = function (in_GuestsIn, in_IsLimitedSubscriptionIn, in_CurrentListValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.CarouselFilteredEventResults$vars"))());
vars.value.in_GuestsInLocal = in_GuestsIn.clone();
vars.value.in_IsLimitedSubscriptionInLocal = in_IsLimitedSubscriptionIn;
vars.value.in_CurrentListValueInLocal = in_CurrentListValueIn;
var listFilter_NotDisabledVar = new OS.DataTypes.VariableHolder();
var listFilter_DisplayVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.CarouselFilteredEventResults$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_NotDisabledVar = listFilter_NotDisabledVar;
varBag.listFilter_DisplayVar = listFilter_DisplayVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:r7AsHBnSoUOyRd9x96yibQ:/ClientActionFlows.r7AsHBnSoUOyRd9x96yibQ:5LDvPzarp0PYcnTjcpizQw", "Connect2_OrbitMobile_MUI", "CarouselFilteredEventResults", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7xTQq702qESoOyn2kq1hfQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9l2piu1JfkCogXNyE_XRaA", callContext.id);
// Execute Action: ListFilter_Display
listFilter_DisplayVar.value = OS.SystemActions.listFilter(vars.value.in_GuestsInLocal, function (p) {
return p.calendarGuestItemAttr.householdDisplayAttr;
}, callContext);

// Limited Subscription?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IXMYQHDT3kWIVPfVMoI6SQ", callContext.id) && vars.value.in_IsLimitedSubscriptionInLocal)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0QaCJo5LkkWYNXLTwuhzkw", callContext.id);
// Execute Action: ListFilter_NotDisabled
listFilter_NotDisabledVar.value = OS.SystemActions.listFilter(listFilter_DisplayVar.value.filteredListOut, function (p) {
return !(p.calendarGuestItemAttr.recordDisabledAttr);
}, callContext);

// Has Data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kxUfrdp2uEmCobdVh3iUxQ", callContext.id) && !(listFilter_NotDisabledVar.value.filteredListOut.isEmpty))) {
// Foreach In_Guests
callContext.iterationContext.registerIterationStart(vars.value.in_GuestsInLocal);
try {var in_GuestsIterator = callContext.iterationContext.getIterator(vars.value.in_GuestsInLocal);
var in_GuestsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vgYSLBHQUESqdNVy+zgHNg", callContext.id) && (in_GuestsIndex < vars.value.in_GuestsInLocal.length))) {
in_GuestsIterator.currentRowNumber = in_GuestsIndex;
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PKTFgHmLOka+ZCe3XdfCsw", callContext.id) && ((vars.value.in_GuestsInLocal.getCurrentRowNumber(callContext.iterationContext) < vars.value.in_CurrentListValueInLocal) && (!(vars.value.in_GuestsInLocal.getItem(in_GuestsIndex.valueOf()).calendarGuestItemAttr.householdDisplayAttr) || vars.value.in_GuestsInLocal.getCurrent(callContext.iterationContext).calendarGuestItemAttr.recordDisabledAttr)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S+_fkqWRW0GM2eaD8cYYNg", callContext.id);
// NumberFilteredToCurrent = NumberFilteredToCurrent + 1
outVars.value.numberFilteredToCurrentOut = (outVars.value.numberFilteredToCurrentOut + 1);
}

in_GuestsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_GuestsInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zvCLdUlA7kO5i3ytJ0DvRA", callContext.id);
// Out_HouseholdIdList = ListFilter_NotDisabled.FilteredList
outVars.value.out_HouseholdIdListOut = OS.DataConversion.JSConversions.typeConvertRecordList(listFilter_NotDisabledVar.value.filteredListOut, new Connect2_OrbitMobile_MUIModel.HouseholdCarouselServerItemList(), function (source, target) {
target.idAttr = source.calendarGuestItemAttr.householderIdAttr;
target.nameAttr = source.calendarGuestItemAttr.householderNameAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zvCLdUlA7kO5i3ytJ0DvRA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// NumberFiltered = In_Guests.Length - ListFilter_NotDisabled.FilteredList.Length
outVars.value.numberFilteredOut = (vars.value.in_GuestsInLocal.length - listFilter_NotDisabledVar.value.filteredListOut.length);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n3ZievWezUGfyx1uNxydZA", callContext.id);
return outVars.value;

}

} else {
// Foreach In_Guests
callContext.iterationContext.registerIterationStart(vars.value.in_GuestsInLocal);
try {var in_GuestsIterator = callContext.iterationContext.getIterator(vars.value.in_GuestsInLocal);
var in_GuestsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HxagEQTcMku4JfRKcXw5Dg", callContext.id) && (in_GuestsIndex < vars.value.in_GuestsInLocal.length))) {
in_GuestsIterator.currentRowNumber = in_GuestsIndex;
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UjvraYbyZkSw9QTTQ8thvQ", callContext.id) && ((vars.value.in_GuestsInLocal.getCurrentRowNumber(callContext.iterationContext) < vars.value.in_CurrentListValueInLocal) && !(vars.value.in_GuestsInLocal.getItem(in_GuestsIndex.valueOf()).calendarGuestItemAttr.householdDisplayAttr)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YP7BgzCfqEWL4G7GhWraFQ", callContext.id);
// NumberFilteredToCurrent = NumberFilteredToCurrent + 1
outVars.value.numberFilteredToCurrentOut = (outVars.value.numberFilteredToCurrentOut + 1);
}

in_GuestsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_GuestsInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ub25Bw8tzU+UGBevihLflA", callContext.id);
// Out_HouseholdIdList = ListFilter_Display.FilteredList
outVars.value.out_HouseholdIdListOut = OS.DataConversion.JSConversions.typeConvertRecordList(listFilter_DisplayVar.value.filteredListOut, new Connect2_OrbitMobile_MUIModel.HouseholdCarouselServerItemList(), function (source, target) {
target.idAttr = source.calendarGuestItemAttr.householderIdAttr;
target.nameAttr = source.calendarGuestItemAttr.householderNameAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ub25Bw8tzU+UGBevihLflA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// NumberFiltered = In_Guests.Length - ListFilter_Display.FilteredList.Length
outVars.value.numberFilteredOut = (vars.value.in_GuestsInLocal.length - listFilter_DisplayVar.value.filteredListOut.length);
}

// Set Preload Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uNIeeQJyE0itJikS5KRoYw", callContext.id);
// HouseholdCarouselPreloading.IsPreloaded = True
vars.value.householdCarouselPreloadingVar.isPreloadedAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uNIeeQJyE0itJikS5KRoYw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HouseholdCarouselPreloading.PreloadedCarouselItems = Out_HouseholdIdList
vars.value.householdCarouselPreloadingVar.preloadedCarouselItemsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(outVars.value.out_HouseholdIdListOut, new Connect2_OrbitMobile_MUIModel.HouseholdCarouselPreloadedItemList(), function (source, target) {
target.idAttr = source.idAttr;
target.nameAttr = source.nameAttr;
target.bucketAttr = "";
target.pathAttr = "";
target.typeAttr = "";
target.householdListIndexAttr = source.householdListIndexAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LvO5RvYB8E+zqcz7Rcx1ow", callContext.id);
// Execute Action: SetPreloadObject
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.householdCarouselPreloadingVar), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I3SQgiafI0Ca_NglRTnC+A", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:r7AsHBnSoUOyRd9x96yibQ", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.CarouselFilteredEventResults$vars", [{
name: "In_Guests",
attrName: "in_GuestsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.CalendarGuestItemExtList();
},
complexType: Connect2_OrbitMobile_MUIModel.CalendarGuestItemExtList
}, {
name: "In_IsLimitedSubscription",
attrName: "in_IsLimitedSubscriptionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_CurrentListValue",
attrName: "in_CurrentListValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "HouseholdCarouselPreloading",
attrName: "householdCarouselPreloadingVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec();
},
complexType: Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.CarouselFilteredEventResults$outVars", [{
name: "Out_HouseholdIdList",
attrName: "out_HouseholdIdListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.HouseholdCarouselServerItemList();
},
complexType: Connect2_OrbitMobile_MUIModel.HouseholdCarouselServerItemList
}, {
name: "NumberFilteredToCurrent",
attrName: "numberFilteredToCurrentOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "NumberFiltered",
attrName: "numberFilteredOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.carouselFilteredEventResults$Action = function (in_GuestsIn, in_IsLimitedSubscriptionIn, in_CurrentListValueIn) {
in_GuestsIn = (in_GuestsIn === undefined) ? new Connect2_OrbitMobile_MUIModel.CalendarGuestItemExtList() : in_GuestsIn;
in_IsLimitedSubscriptionIn = (in_IsLimitedSubscriptionIn === undefined) ? false : in_IsLimitedSubscriptionIn;
in_CurrentListValueIn = (in_CurrentListValueIn === undefined) ? 0 : in_CurrentListValueIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.carouselFilteredEventResults$Action.bind(controller, in_GuestsIn, OS.DataConversion.JSNodeParamConverter.from(in_IsLimitedSubscriptionIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_CurrentListValueIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_HouseholdIdList: actionResults.out_HouseholdIdListOut,
NumberFilteredToCurrent: OS.DataConversion.JSNodeParamConverter.to(actionResults.numberFilteredToCurrentOut, OS.DataTypes.DataTypes.Integer),
NumberFiltered: OS.DataConversion.JSNodeParamConverter.to(actionResults.numberFilteredOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "APIDomain_Directory_IS.model", "Connect2_OrbitMobile_MUI.clientVariables", "APIDomain_Directory_IS.model$DirectoryAccessRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_OrbitMobile_MUI.controller$ServerAction.GetDirectoryAccess"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, APIDomain_Directory_ISModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.checkDirectoryAccess$Action = function (idIn, typeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.CheckDirectoryAccess$vars"))());
vars.value.idInLocal = idIn;
vars.value.typeInLocal = typeIn;
var getDirectoryAccessVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.CheckDirectoryAccess$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getDirectoryAccessVar = getDirectoryAccessVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:SDyaEdc9cUyH0Yb7tF+Rhw:/ClientActionFlows.SDyaEdc9cUyH0Yb7tF+Rhw:A0IBSDATgAD3ASaOSP7nJg", "Connect2_OrbitMobile_MUI", "CheckDirectoryAccess", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T6FgifiMnESeiJ6HvqtLzQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NzrRCoRibEejyXjNeq9u9g", callContext.id);
// Execute Action: GetDirectoryAccess
return controller.getDirectoryAccess$ServerAction(vars.value.idInLocal, vars.value.typeInLocal, callContext).then(function (value) {
getDirectoryAccessVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Bh6HUr8OwEG9t_ksqibLYA", callContext.id);
// HasAccess = notGetDirectoryAccess.Response.RecordDisabled
outVars.value.hasAccessOut = !(getDirectoryAccessVar.value.responseOut.recordDisabledAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HTPDqDWihECqpqxY5I3uAA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:SDyaEdc9cUyH0Yb7tF+Rhw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:SDyaEdc9cUyH0Yb7tF+Rhw", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.CheckDirectoryAccess$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.CheckDirectoryAccess$outVars", [{
name: "HasAccess",
attrName: "hasAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.checkDirectoryAccess$Action = function (idIn, typeIn) {
idIn = (idIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : idIn;
typeIn = (typeIn === undefined) ? "" : typeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.checkDirectoryAccess$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(idIn, OS.DataTypes.DataTypes.LongInteger), typeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$CheckSelectedDates", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.checkSelectedDates$Action = function (dayFilterListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.CheckSelectedDates$vars"))());
vars.value.dayFilterListInLocal = dayFilterListIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.CheckSelectedDates$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:IGmpHpVUeUafXNQe0U2gxQ:/ClientActionFlows.IGmpHpVUeUafXNQe0U2gxQ:17i_d0hylLvx_973MY88KA", "Connect2_OrbitMobile_MUI", "CheckSelectedDates", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9k4ct7X97keV7XKDn8WZ6w", callContext.id);
// Foreach DayFilterList
callContext.iterationContext.registerIterationStart(vars.value.dayFilterListInLocal);
try {var dayFilterListIterator = callContext.iterationContext.getIterator(vars.value.dayFilterListInLocal);
var dayFilterListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4uXePUSszUC16agvMEj04A", callContext.id) && (dayFilterListIndex < vars.value.dayFilterListInLocal.length))) {
dayFilterListIterator.currentRowNumber = dayFilterListIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s3MrwtBVaU6vESSOk0t4Tg", callContext.id);
// HasSelected = DayFilterList.Current.IsSelected
outVars.value.hasSelectedOut = vars.value.dayFilterListInLocal.getItem(dayFilterListIndex.valueOf()).isSelectedAttr;
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p2E2zI_Uf0WFuNRY0kqbCw", callContext.id) && outVars.value.hasSelectedOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lPMVspF1SUWzoLg+rO_VQg", callContext.id);
return outVars.value;

}

dayFilterListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.dayFilterListInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UN2JbY3XhkSO6vPk9EEjTw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:IGmpHpVUeUafXNQe0U2gxQ", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.CheckSelectedDates$vars", [{
name: "DayFilterList",
attrName: "dayFilterListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.DayFilterList();
},
complexType: Connect2_OrbitMobile_MUIModel.DayFilterList
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.CheckSelectedDates$outVars", [{
name: "HasSelected",
attrName: "hasSelectedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.checkSelectedDates$Action = function (dayFilterListIn) {
dayFilterListIn = (dayFilterListIn === undefined) ? new Connect2_OrbitMobile_MUIModel.DayFilterList() : dayFilterListIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.checkSelectedDates$Action.bind(controller, dayFilterListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasSelected: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasSelectedOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$CreateValidationMessage", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action = function (inputNameIn, isPluralIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.CreateValidationMessage$vars"))());
vars.value.inputNameInLocal = inputNameIn;
vars.value.isPluralInLocal = isPluralIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.CreateValidationMessage$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:i_ALQrwF5Uu781w4p4NhoA:/ClientActionFlows.i_ALQrwF5Uu781w4p4NhoA:k8ZS42yHimgdcuVqOZif4g", "Connect2_OrbitMobile_MUI", "CreateValidationMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5_yaKsxjFEqwxL5+8i6nGw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CHJj1uGGUE26_zD4aYXLgQ", callContext.id);
// ValidationMessage = If
outVars.value.validationMessageOut = ((((vars.value.inputNameInLocal) !== (""))) ? (((vars.value.inputNameInLocal + ((vars.value.isPluralInLocal) ? (" are ") : (" is "))) + "required.")) : ("This field is required."));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+V5RYgcdvUSfV6IrB1qS3Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:i_ALQrwF5Uu781w4p4NhoA", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.CreateValidationMessage$vars", [{
name: "InputName",
attrName: "inputNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsPlural",
attrName: "isPluralInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.CreateValidationMessage$outVars", [{
name: "ValidationMessage",
attrName: "validationMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.createValidationMessage$Action = function (inputNameIn, isPluralIn) {
inputNameIn = (inputNameIn === undefined) ? "" : inputNameIn;
isPluralIn = (isPluralIn === undefined) ? false : isPluralIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(inputNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isPluralIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ValidationMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.validationMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions.ExtractChildrenNamesJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_ExtractChildrenNamesFromCaptions_ExtractChildrenNamesJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.extractChildrenNamesFromCaptions$Action = function (photobookCaptionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ExtractChildrenNamesFromCaptions$vars"))());
vars.value.photobookCaptionInLocal = photobookCaptionIn;
var extractChildrenNamesJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ExtractChildrenNamesFromCaptions$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.extractChildrenNamesJSResult = extractChildrenNamesJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:09vTcXatz0mstmyQbVDJ5w:/ClientActionFlows.09vTcXatz0mstmyQbVDJ5w:JV9_7xK8PlZBHgmmk0Qq+A", "Connect2_OrbitMobile_MUI", "ExtractChildrenNamesFromCaptions", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2QNL6voQD0CuyvgL91eNag", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AAO0eqzO2UyjDY89f6JVbg", callContext.id);
extractChildrenNamesJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_ExtractChildrenNamesFromCaptions_ExtractChildrenNamesJS, "ExtractChildrenNames", "ExtractChildrenNamesFromCaptions", {
Captions: OS.DataConversion.JSNodeParamConverter.to(vars.value.photobookCaptionInLocal, OS.DataTypes.DataTypes.Text),
FinalString: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ExtractChildrenNamesFromCaptions$extractChildrenNamesJSResult"))();
jsNodeResult.finalStringOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FinalString, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
// Has Children?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xr67FHTVWkaANgOVM+35Dw", callContext.id) && ((extractChildrenNamesJSResult.value.finalStringOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YMki0Rtqm0OVyquL7apiqg", callContext.id);
// ChildrenNames = ExtractChildrenNames.FinalString
outVars.value.childrenNamesOut = extractChildrenNamesJSResult.value.finalStringOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3dVADBytcUWdutUq1Py7tA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kUSQeuKN9kOfFvPIkc6cwg", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:09vTcXatz0mstmyQbVDJ5w", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ExtractChildrenNamesFromCaptions$vars", [{
name: "PhotobookCaption",
attrName: "photobookCaptionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ExtractChildrenNamesFromCaptions$extractChildrenNamesJSResult", [{
name: "FinalString",
attrName: "finalStringOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ExtractChildrenNamesFromCaptions$outVars", [{
name: "ChildrenNames",
attrName: "childrenNamesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.extractChildrenNamesFromCaptions$Action = function (photobookCaptionIn) {
photobookCaptionIn = (photobookCaptionIn === undefined) ? "" : photobookCaptionIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.extractChildrenNamesFromCaptions$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(photobookCaptionIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ChildrenNames: OS.DataConversion.JSNodeParamConverter.to(actionResults.childrenNamesOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions.ExtractChildrenNamesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let captions = $parameters.Captions;
if(captions){
    let stIdx = captions.indexOf("<br \/><nobr><strong>");
    let eIdx = captions.indexOf("</div>");
    if(stIdx !== -1 && eIdx !== -1 && eIdx > stIdx){
        let fstCut = captions.slice(stIdx,eIdx);
        let newStIdx = fstCut.indexOf("<nobr><strong>");
        let newEIdx = fstCut.indexOf("<br />",newStIdx);
        if(newStIdx !== -1 && newEIdx !== -1 && newEIdx > newStIdx){
            $parameters.FinalString = fstCut.slice(newStIdx,newEIdx);
        }else if(newStIdx !== -1 && newEIdx == -1){
            $parameters.FinalString = fstCut.slice(newStIdx,fstCut.length);
        }else if(newStIdx == -1 && newEIdx !== -1){
            $parameters.FinalString = fstCut.slice(0,newEIdx);
        }
    }
}
};
});

define("Connect2_OrbitMobile_MUI.controller$FilterMilestonesByDateGroup", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$Milestone_ScreenList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.filterMilestonesByDateGroup$Action = function (in_DateToFilterByIn, in_TimeTypeIdIn, in_MilestonesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.FilterMilestonesByDateGroup$vars"))());
vars.value.in_DateToFilterByInLocal = in_DateToFilterByIn;
vars.value.in_TimeTypeIdInLocal = in_TimeTypeIdIn;
vars.value.in_MilestonesInLocal = in_MilestonesIn.clone();
var listFilter_AfterVar = new OS.DataTypes.VariableHolder();
var listFilter_DayVar = new OS.DataTypes.VariableHolder();
var listFilter_BeforeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.FilterMilestonesByDateGroup$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_AfterVar = listFilter_AfterVar;
varBag.listFilter_DayVar = listFilter_DayVar;
varBag.listFilter_BeforeVar = listFilter_BeforeVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:FphEfW1B30uHc3yL28CWjQ:/ClientActionFlows.FphEfW1B30uHc3yL28CWjQ:mQnP9PwRJA3fhDUcFRfsSA", "Connect2_OrbitMobile_MUI", "FilterMilestonesByDateGroup", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mT6Y87fSsE2fqW6MHYCmUA", callContext.id);
// Has Milestones?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Mekevu4Zfkiw_AwGEg1srQ", callContext.id) && !(vars.value.in_MilestonesInLocal.isEmpty))) {
// TimeTypeId
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1fEq8Nmsy0ahYrs31HR4Iw", callContext.id) && (vars.value.in_TimeTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.bEFORE))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bEPCmAN4lECQWmXAj6VfeA", callContext.id);
// Execute Action: ListFilter_Before
listFilter_BeforeVar.value = OS.SystemActions.listFilter(vars.value.in_MilestonesInLocal, function (p) {
return (p.timeTypeAttr === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.bEFORE);
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pWn9P7Mq7kiHLxfJtCvcmw", callContext.id);
// Execute Action: ListSort_Before
OS.SystemActions.listSort(listFilter_BeforeVar.value.filteredListOut, function (p) {
return p.milestoneDateTimeAttr;
}, true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:e1ge25BZik+C2zROASpPww", callContext.id);
// Out_Milestones = ListFilter_Before.FilteredList
outVars.value.out_MilestonesOut = listFilter_BeforeVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p6afXcsr3UWWo0e4LL2E5A", callContext.id);
} else {
if((vars.value.in_TimeTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.dAY)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4pEoFgaj00WOtd8jH_zqmQ", callContext.id);
// Execute Action: ListFilter_Day
listFilter_DayVar.value = OS.SystemActions.listFilter(vars.value.in_MilestonesInLocal, function (p) {
return ((p.timeTypeAttr === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.dAY) && p.dateForFilterAttr.equals(vars.value.in_DateToFilterByInLocal));
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YlEEmpcTdEW6BXVqpM_d5w", callContext.id);
// Execute Action: ListSort_Day
OS.SystemActions.listSort(listFilter_DayVar.value.filteredListOut, function (p) {
return p.sequenceNoAttr;
}, true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:L_xufDtOBkSNLowzI3FLpA", callContext.id);
// Out_Milestones = ListFilter_Day.FilteredList
outVars.value.out_MilestonesOut = listFilter_DayVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QpCKmUlOE0q9hGK_vNlMfg", callContext.id);
} else {
if((vars.value.in_TimeTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.aFTER)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lOWoEu9vTEacxvCU+8foNw", callContext.id);
// Execute Action: ListFilter_After
listFilter_AfterVar.value = OS.SystemActions.listFilter(vars.value.in_MilestonesInLocal, function (p) {
return (p.timeTypeAttr === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.aFTER);
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OvagHY5L0U2rLTjBLe7Dwg", callContext.id);
// Execute Action: ListSort_After
OS.SystemActions.listSort(listFilter_AfterVar.value.filteredListOut, function (p) {
return p.milestoneDateTimeAttr;
}, true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Rfmjat4BxUqAsQidgVzaJQ", callContext.id);
// Out_Milestones = ListFilter_After.FilteredList
outVars.value.out_MilestonesOut = listFilter_AfterVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t1rgDDSiUEiwuuWOSFUs2w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qNpIaX14UEqXXZDg1ixMlw", callContext.id);
}

}

}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OkAlI8x_kEONaad4tklweg", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:FphEfW1B30uHc3yL28CWjQ", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.FilterMilestonesByDateGroup$vars", [{
name: "In_DateToFilterBy",
attrName: "in_DateToFilterByInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "In_TimeTypeId",
attrName: "in_TimeTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_Milestones",
attrName: "in_MilestonesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.Milestone_ScreenList();
},
complexType: Connect2_OrbitMobile_MUIModel.Milestone_ScreenList
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.FilterMilestonesByDateGroup$outVars", [{
name: "Out_Milestones",
attrName: "out_MilestonesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.Milestone_ScreenList();
},
complexType: Connect2_OrbitMobile_MUIModel.Milestone_ScreenList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.filterMilestonesByDateGroup$Action = function (in_DateToFilterByIn, in_TimeTypeIdIn, in_MilestonesIn) {
in_DateToFilterByIn = (in_DateToFilterByIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateToFilterByIn;
in_TimeTypeIdIn = (in_TimeTypeIdIn === undefined) ? "" : in_TimeTypeIdIn;
in_MilestonesIn = (in_MilestonesIn === undefined) ? new Connect2_OrbitMobile_MUIModel.Milestone_ScreenList() : in_MilestonesIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.filterMilestonesByDateGroup$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateToFilterByIn, OS.DataTypes.DataTypes.Date), in_TimeTypeIdIn, in_MilestonesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Milestones: actionResults.out_MilestonesOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$FocusOnFirstInvalidInput", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$FocusOnFirstInvalidInput.ScrollInvalidInputIntoViewJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_FocusOnFirstInvalidInput_ScrollInvalidInputIntoViewJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.focusOnFirstInvalidInput$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Lr0iGYvmB06rzmmLtOYLyg:/ClientActionFlows.Lr0iGYvmB06rzmmLtOYLyg:Hl+FzVzI16yqKG_gBsCgtQ", "Connect2_OrbitMobile_MUI", "FocusOnFirstInvalidInput", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:B1zT1dP090mDmwTbXywqLQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:C7qxXQ5fJEOxxN5SMA6RZQ", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_FocusOnFirstInvalidInput_ScrollInvalidInputIntoViewJS, "ScrollInvalidInputIntoView", "FocusOnFirstInvalidInput", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OpS0kalX90GWd6sLwPjl+g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Lr0iGYvmB06rzmmLtOYLyg", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.clientActionProxies.focusOnFirstInvalidInput$Action = function () {
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.focusOnFirstInvalidInput$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$FocusOnFirstInvalidInput.ScrollInvalidInputIntoViewJS", [], function () {
return function ($actions, $roles, $public) {
let invalidInput = document.querySelectorAll(".content.orbit-host-survey input.not-valid")[0];
if(invalidInput){
    invalidInput.scrollIntoView();
}
};
});

define("Connect2_OrbitMobile_MUI.controller$FocusOnInput", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$FocusOnInput.FocusOnInputJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_FocusOnInput_FocusOnInputJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.focusOnInput$Action = function (in_InputIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.FocusOnInput$vars"))());
vars.value.in_InputIdInLocal = in_InputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2QpcX2228UqnPBpiIX2NvQ:/ClientActionFlows.2QpcX2228UqnPBpiIX2NvQ:pq6ZEBylVbN6yJEkX5WE0A", "Connect2_OrbitMobile_MUI", "FocusOnInput", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bc4b6gkCU0iJPYGrY+Tx3Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4rO_OCEuuUGkwmy57e8rUg", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_FocusOnInput_FocusOnInputJS, "FocusOnInput", "FocusOnInput", {
InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_InputIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2zvDTDYAW0aVOd2emMGiKQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2QpcX2228UqnPBpiIX2NvQ", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.FocusOnInput$vars", [{
name: "In_InputId",
attrName: "in_InputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.focusOnInput$Action = function (in_InputIdIn) {
in_InputIdIn = (in_InputIdIn === undefined) ? "" : in_InputIdIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.focusOnInput$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_InputIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$FocusOnInput.FocusOnInputJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(()=> {
    let sInput = document.getElementById($parameters.InputId);
    if(sInput){
        sInput.focus();
    }
},150);
};
});

define("Connect2_OrbitMobile_MUI.controller$FormatDateForEventBanner", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.controller$GetOrdinalEnding_Integer"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.formatDateForEventBanner$Action = function (in_DateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.FormatDateForEventBanner$vars"))());
vars.value.in_DateInLocal = in_DateIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.FormatDateForEventBanner$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:nNkVGEh+Q0eeUJQteBZ58g:/ClientActionFlows.nNkVGEh+Q0eeUJQteBZ58g:2lK_z21C8mxlh8FncZNAUg", "Connect2_OrbitMobile_MUI", "FormatDateForEventBanner", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oEOD9phfvUeQRQCH4avZgQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MhvcqGQng0qKhyAxOpW_Kg", callContext.id);
// Out_FormattedDate = FormatDateTime
outVars.value.out_FormattedDateOut = OS.BuiltinFunctions.formatDateTime(vars.value.in_DateInLocal, (("d" + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getOrdinalEnding_Integer$Action(OS.BuiltinFunctions.day(vars.value.in_DateInLocal), true, callContext).out_OrdinalEndingOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + " MMMM yyyy"));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:txrwTllddkejcYZqCE85vw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:nNkVGEh+Q0eeUJQteBZ58g", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.FormatDateForEventBanner$vars", [{
name: "In_Date",
attrName: "in_DateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.FormatDateForEventBanner$outVars", [{
name: "Out_FormattedDate",
attrName: "out_FormattedDateOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.formatDateForEventBanner$Action = function (in_DateIn) {
in_DateIn = (in_DateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.formatDateForEventBanner$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateIn, OS.DataTypes.DataTypes.Date)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedDate: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedDateOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$FormatShortDateForEventBanner", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.controller$GetOrdinalEnding_Integer"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.formatShortDateForEventBanner$Action = function (in_DateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.FormatShortDateForEventBanner$vars"))());
vars.value.in_DateInLocal = in_DateIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.FormatShortDateForEventBanner$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8iKk2zBnPEyn9R+1341lfA:/ClientActionFlows.8iKk2zBnPEyn9R+1341lfA:pqr1CCIurH0GPXl603rtiw", "Connect2_OrbitMobile_MUI", "FormatShortDateForEventBanner", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lZnDxqwoR0CCKL7lPJ20AA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wAtgaMbsD0KuWNBsjYHVSg", callContext.id);
// Out_FormattedDate = FormatDateTime
outVars.value.out_FormattedDateOut = OS.BuiltinFunctions.formatDateTime(vars.value.in_DateInLocal, (("d" + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getOrdinalEnding_Integer$Action(OS.BuiltinFunctions.day(vars.value.in_DateInLocal), true, callContext).out_OrdinalEndingOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + " MMM yyyy"));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sARSyi+YKk+lJ7eBtgqPBw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8iKk2zBnPEyn9R+1341lfA", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.FormatShortDateForEventBanner$vars", [{
name: "In_Date",
attrName: "in_DateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.FormatShortDateForEventBanner$outVars", [{
name: "Out_FormattedDate",
attrName: "out_FormattedDateOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.formatShortDateForEventBanner$Action = function (in_DateIn) {
in_DateIn = (in_DateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.formatShortDateForEventBanner$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateIn, OS.DataTypes.DataTypes.Date)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedDate: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedDateOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetAgendaWeekDay", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getAgendaWeekDay$Action = function (in_WeekStartDayIn, in_DayOfWeekIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetAgendaWeekDay$vars"))());
vars.value.in_WeekStartDayInLocal = in_WeekStartDayIn;
vars.value.in_DayOfWeekInLocal = in_DayOfWeekIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetAgendaWeekDay$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8npP5JOl+U6lkHwLABkPDQ:/ClientActionFlows.8npP5JOl+U6lkHwLABkPDQ:lwnWrgBfZ3Ent9UHlsWgvQ", "Connect2_OrbitMobile_MUI", "GetAgendaWeekDay", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VzvdgJ5ZAEyV9sPtNn8cWg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pq+pl5PbOUGadI6tnDDaAg", callContext.id);
// Out_FormattedText = If + If + If + FormatDateTime
outVars.value.out_FormattedTextOut = (((((OS.BuiltinFunctions.currDate().equals(OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addDays(vars.value.in_WeekStartDayInLocal, vars.value.in_DayOfWeekInLocal)))) ? ((vars.value.textTodayVar + " | ")) : ("")) + ((OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), -1).equals(OS.BuiltinFunctions.addDays(vars.value.in_WeekStartDayInLocal, vars.value.in_DayOfWeekInLocal))) ? ((vars.value.textYesterdayVar + " | ")) : (""))) + ((OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), 1).equals(OS.BuiltinFunctions.addDays(vars.value.in_WeekStartDayInLocal, vars.value.in_DayOfWeekInLocal))) ? ((vars.value.textTomorrowVar + " | ")) : (""))) + OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.addDays(vars.value.in_WeekStartDayInLocal, vars.value.in_DayOfWeekInLocal), "dddd, d MMMM"));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pmJGcCqE90qEFv33tdJA2w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8npP5JOl+U6lkHwLABkPDQ", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetAgendaWeekDay$vars", [{
name: "In_WeekStartDay",
attrName: "in_WeekStartDayInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "In_DayOfWeek",
attrName: "in_DayOfWeekInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "TextYesterday",
attrName: "textYesterdayVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "Yesterday";
}
}, {
name: "TextToday",
attrName: "textTodayVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "Today";
}
}, {
name: "TextTomorrow",
attrName: "textTomorrowVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "Tomorrow";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetAgendaWeekDay$outVars", [{
name: "Out_FormattedText",
attrName: "out_FormattedTextOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getAgendaWeekDay$Action = function (in_WeekStartDayIn, in_DayOfWeekIn) {
in_WeekStartDayIn = (in_WeekStartDayIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_WeekStartDayIn;
in_DayOfWeekIn = (in_DayOfWeekIn === undefined) ? 0 : in_DayOfWeekIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getAgendaWeekDay$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_WeekStartDayIn, OS.DataTypes.DataTypes.Date), OS.DataConversion.JSNodeParamConverter.from(in_DayOfWeekIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedText: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedTextOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetAgendaWeekTitle", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetAgendaWeekTitle.GetWeekNumberJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_GetAgendaWeekTitle_GetWeekNumberJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getAgendaWeekTitle$Action = function (in_CurrentCalendarDayIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetAgendaWeekTitle$vars"))());
vars.value.in_CurrentCalendarDayInLocal = in_CurrentCalendarDayIn;
var getWeekNumberJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetAgendaWeekTitle$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getWeekNumberJSResult = getWeekNumberJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:VA2XIrtCoUKCFoE84T2Qqw:/ClientActionFlows.VA2XIrtCoUKCFoE84T2Qqw:+6a0Fh3WBfKTA9UQjj2Hew", "Connect2_OrbitMobile_MUI", "GetAgendaWeekTitle", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:z16uPZjHGUGlJ9yEXjSL2g", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8POfljLW_0G4Vq06Q6jvhg", callContext.id);
getWeekNumberJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_GetAgendaWeekTitle_GetWeekNumberJS, "GetWeekNumber", "GetAgendaWeekTitle", {
JSIn_CurrentDate: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_CurrentCalendarDayInLocal, OS.DataTypes.DataTypes.Date),
JSOut_WeekNumber: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetAgendaWeekTitle$getWeekNumberJSResult"))();
jsNodeResult.jSOut_WeekNumberOut = OS.DataConversion.JSNodeParamConverter.from($parameters.JSOut_WeekNumber, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
// Set Vars
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LUWOH+K3w0mv5o8zbQKMNQ", callContext.id);
// WeekStartDate = AddDays
vars.value.weekStartDateVar = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addDays(vars.value.in_CurrentCalendarDayInLocal, (0 - OS.BuiltinFunctions.dayOfWeek(vars.value.in_CurrentCalendarDayInLocal))));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LUWOH+K3w0mv5o8zbQKMNQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// WeekEndDate = AddDays
vars.value.weekEndDateVar = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addDays(vars.value.in_CurrentCalendarDayInLocal, (6 - OS.BuiltinFunctions.dayOfWeek(vars.value.in_CurrentCalendarDayInLocal))));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LUWOH+K3w0mv5o8zbQKMNQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// NumberOfWeeks = GetWeekNumber.JSOut_WeekNumber
vars.value.numberOfWeeksVar = getWeekNumberJSResult.value.jSOut_WeekNumberOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:L+S9FphM_UGF2QAJaNlkiw", callContext.id);
// Out_AgendaTitle = "Week " + Round + ": " + FormatDateTime + " - " + FormatDateTime + " " + Year
outVars.value.out_AgendaTitleOut = ((((((("Week " + OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.round(OS.BuiltinFunctions.integerToDecimal(vars.value.numberOfWeeksVar), 0))) + ": ") + OS.BuiltinFunctions.formatDateTime(vars.value.weekStartDateVar, "MMM d")) + " - ") + OS.BuiltinFunctions.formatDateTime(vars.value.weekEndDateVar, "MMM d")) + " ") + (OS.BuiltinFunctions.year(vars.value.in_CurrentCalendarDayInLocal)).toString());
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w26FYdTF30ezs1awPWzGwQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:VA2XIrtCoUKCFoE84T2Qqw", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetAgendaWeekTitle$vars", [{
name: "In_CurrentCalendarDay",
attrName: "in_CurrentCalendarDayInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "WeekStartDate",
attrName: "weekStartDateVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "WeekEndDate",
attrName: "weekEndDateVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "NumberOfWeeks",
attrName: "numberOfWeeksVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetAgendaWeekTitle$getWeekNumberJSResult", [{
name: "JSOut_WeekNumber",
attrName: "jSOut_WeekNumberOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetAgendaWeekTitle$outVars", [{
name: "Out_AgendaTitle",
attrName: "out_AgendaTitleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getAgendaWeekTitle$Action = function (in_CurrentCalendarDayIn) {
in_CurrentCalendarDayIn = (in_CurrentCalendarDayIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_CurrentCalendarDayIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getAgendaWeekTitle$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_CurrentCalendarDayIn, OS.DataTypes.DataTypes.Date)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_AgendaTitle: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_AgendaTitleOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$GetAgendaWeekTitle.GetWeekNumberJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function getWeekNumber(){
    var now = $parameters.JSIn_CurrentDate
    var onejan = new Date(now.getFullYear(), 0, 1);
    $parameters.JSOut_WeekNumber = Math.ceil( (((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7 )
}

getWeekNumber();
};
});

define("Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Event$Action = function (eventNameIn, startDateTimeIn, endDateTimeIn, locationIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Event$vars"))());
vars.value.eventNameInLocal = eventNameIn;
vars.value.startDateTimeInLocal = startDateTimeIn;
vars.value.endDateTimeInLocal = endDateTimeIn;
vars.value.locationInLocal = locationIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Event$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:7ZrfDC5yPUqKbvbKiUw9Wg:/ClientActionFlows.7ZrfDC5yPUqKbvbKiUw9Wg:LL7JDfxIHFW1RPIl2f8EOg", "Connect2_OrbitMobile_MUI", "GetContactHelpdeskSubject_Event", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:D9OryRUTkkO4F7g+8ItpaA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZsQAGNQ5I0C3M3wfZ2ewXA", callContext.id);
// Out_FormattedSubject = If + If + If
outVars.value.out_FormattedSubjectOut = ((((((vars.value.eventNameInLocal) !== (""))) ? ((vars.value.eventNameInLocal + (((((vars.value.locationInLocal) !== ("")) || (!(vars.value.startDateTimeInLocal.equals(OS.BuiltinFunctions.nullDate())) && !(vars.value.endDateTimeInLocal.equals(OS.BuiltinFunctions.nullDate()))))) ? (" - ") : ("")))) : ("")) + ((((vars.value.locationInLocal) !== (""))) ? ((vars.value.locationInLocal + (((!(vars.value.startDateTimeInLocal.equals(OS.BuiltinFunctions.nullDate())) && !(vars.value.endDateTimeInLocal.equals(OS.BuiltinFunctions.nullDate())))) ? (" - ") : ("")))) : (""))) + (((!(vars.value.startDateTimeInLocal.equals(OS.BuiltinFunctions.nullDate())) && !(vars.value.endDateTimeInLocal.equals(OS.BuiltinFunctions.nullDate())))) ? (((OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(vars.value.startDateTimeInLocal, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + " - ") + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(vars.value.endDateTimeInLocal, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id))) : ("")));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7PNaQt4+IUyN4pXU0sDZzg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:7ZrfDC5yPUqKbvbKiUw9Wg", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Event$vars", [{
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StartDateTime",
attrName: "startDateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "EndDateTime",
attrName: "endDateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Location",
attrName: "locationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Event$outVars", [{
name: "Out_FormattedSubject",
attrName: "out_FormattedSubjectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getContactHelpdeskSubject_Event$Action = function (eventNameIn, startDateTimeIn, endDateTimeIn, locationIn) {
eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
startDateTimeIn = (startDateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : startDateTimeIn;
endDateTimeIn = (endDateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : endDateTimeIn;
locationIn = (locationIn === undefined) ? "" : locationIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Event$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(startDateTimeIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(endDateTimeIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(locationIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedSubject: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedSubjectOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Milestone$Action = function (milestoneTypeIdIn, eventNameIn, milestoneNameIn, dateTimeIn, locationIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Milestone$vars"))());
vars.value.milestoneTypeIdInLocal = milestoneTypeIdIn;
vars.value.eventNameInLocal = eventNameIn;
vars.value.milestoneNameInLocal = milestoneNameIn;
vars.value.dateTimeInLocal = dateTimeIn;
vars.value.locationInLocal = locationIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Milestone$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:nJD0WTyGD0iJR5KlJZ6+lw:/ClientActionFlows.nJD0WTyGD0iJR5KlJZ6+lw:cQFjVKlWshDiznr5O_egmA", "Connect2_OrbitMobile_MUI", "GetContactHelpdeskSubject_Milestone", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YBgnp3gNyUCUAbueLqPWow", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3su4glqSTUOuGF76i75t6A", callContext.id);
// Out_FormattedSubject = If + If + If + GetFormattedDateTimeById(MilestoneTypeId, DateTime)
outVars.value.out_FormattedSubjectOut = (((((((vars.value.eventNameInLocal) !== (""))) ? ((vars.value.eventNameInLocal + ((((((vars.value.milestoneNameInLocal) !== ("")) || ((vars.value.locationInLocal) !== (""))) || !(vars.value.dateTimeInLocal.equals(OS.BuiltinFunctions.nullDate())))) ? (" - ") : ("")))) : ("")) + ((((vars.value.milestoneNameInLocal) !== (""))) ? ((vars.value.milestoneNameInLocal + (((((vars.value.locationInLocal) !== ("")) || !(vars.value.dateTimeInLocal.equals(OS.BuiltinFunctions.nullDate())))) ? (" - ") : ("")))) : (""))) + ((((vars.value.locationInLocal) !== (""))) ? ((vars.value.locationInLocal + ((!(vars.value.dateTimeInLocal.equals(OS.BuiltinFunctions.nullDate()))) ? (" - ") : ("")))) : (""))) + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(vars.value.milestoneTypeIdInLocal, vars.value.dateTimeInLocal, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qePoip0cOEWFGzFuzyw84w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:nJD0WTyGD0iJR5KlJZ6+lw", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Milestone$vars", [{
name: "MilestoneTypeId",
attrName: "milestoneTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MilestoneName",
attrName: "milestoneNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DateTime",
attrName: "dateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Location",
attrName: "locationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Milestone$outVars", [{
name: "Out_FormattedSubject",
attrName: "out_FormattedSubjectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getContactHelpdeskSubject_Milestone$Action = function (milestoneTypeIdIn, eventNameIn, milestoneNameIn, dateTimeIn, locationIn) {
milestoneTypeIdIn = (milestoneTypeIdIn === undefined) ? "" : milestoneTypeIdIn;
eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
milestoneNameIn = (milestoneNameIn === undefined) ? "" : milestoneNameIn;
dateTimeIn = (dateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : dateTimeIn;
locationIn = (locationIn === undefined) ? "" : locationIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Milestone$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(milestoneTypeIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(milestoneNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(dateTimeIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(locationIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedSubject: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedSubjectOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Transport", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Transport$Action = function (milestoneTypeIdIn, milestoneNameIn, dateTimeIn, transportNumberIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Transport$vars"))());
vars.value.milestoneTypeIdInLocal = milestoneTypeIdIn;
vars.value.milestoneNameInLocal = milestoneNameIn;
vars.value.dateTimeInLocal = dateTimeIn;
vars.value.transportNumberInLocal = transportNumberIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Transport$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:GzSe+T8ZIECmkN3T441IKg:/ClientActionFlows.GzSe+T8ZIECmkN3T441IKg:1JpxPt6jgjUX_1Q00VvGdw", "Connect2_OrbitMobile_MUI", "GetContactHelpdeskSubject_Transport", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FokUXVH0TE28U0cvNnoNhw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eH9+akq0L0WG+MDofR5y+w", callContext.id);
// Out_FormattedSubject = MilestoneName + " - " + If + GetFormattedDateTimeById(MilestoneTypeId, DateTime)
outVars.value.out_FormattedSubjectOut = (((vars.value.milestoneNameInLocal + " - ") + ((((vars.value.transportNumberInLocal) !== (""))) ? ((vars.value.transportNumberInLocal + " - ")) : (""))) + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(vars.value.milestoneTypeIdInLocal, vars.value.dateTimeInLocal, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:49aQrXzFYEC8VB2lg+_Bpw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:GzSe+T8ZIECmkN3T441IKg", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Transport$vars", [{
name: "MilestoneTypeId",
attrName: "milestoneTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MilestoneName",
attrName: "milestoneNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DateTime",
attrName: "dateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "TransportNumber",
attrName: "transportNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetContactHelpdeskSubject_Transport$outVars", [{
name: "Out_FormattedSubject",
attrName: "out_FormattedSubjectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getContactHelpdeskSubject_Transport$Action = function (milestoneTypeIdIn, milestoneNameIn, dateTimeIn, transportNumberIn) {
milestoneTypeIdIn = (milestoneTypeIdIn === undefined) ? "" : milestoneTypeIdIn;
milestoneNameIn = (milestoneNameIn === undefined) ? "" : milestoneNameIn;
dateTimeIn = (dateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : dateTimeIn;
transportNumberIn = (transportNumberIn === undefined) ? "" : transportNumberIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Transport$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(milestoneTypeIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(milestoneNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(dateTimeIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(transportNumberIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedSubject: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedSubjectOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action = function (in_MainColorIn, in_ShadeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetCSSVarFromMainColor$vars"))());
vars.value.in_MainColorInLocal = in_MainColorIn;
vars.value.in_ShadeInLocal = in_ShadeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetCSSVarFromMainColor$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:XSY+z_m56U2ujeTxgJCTeQ:/ClientActionFlows.XSY+z_m56U2ujeTxgJCTeQ:NVmUXXEi46dbNFkM7BRH1w", "Connect2_OrbitMobile_MUI", "GetCSSVarFromMainColor", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mkdrkJIzb0KDIunFJo_63g", callContext.id);
// Build CSS Var
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2vJC+I6LZUWXBgLUEq4FfA", callContext.id);
// Out_ColorVar = "var(--orbit-" + Trim + "-" + Trim + ")"
outVars.value.out_ColorVarOut = (((("var(--orbit-" + OS.BuiltinFunctions.trim(vars.value.in_MainColorInLocal)) + "-") + OS.BuiltinFunctions.trim(vars.value.in_ShadeInLocal)) + ")");
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5nVCUr+IhkyO3MwwJWISOg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:XSY+z_m56U2ujeTxgJCTeQ", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetCSSVarFromMainColor$vars", [{
name: "In_MainColor",
attrName: "in_MainColorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_Shade",
attrName: "in_ShadeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetCSSVarFromMainColor$outVars", [{
name: "Out_ColorVar",
attrName: "out_ColorVarOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getCSSVarFromMainColor$Action = function (in_MainColorIn, in_ShadeIn) {
in_MainColorIn = (in_MainColorIn === undefined) ? "" : in_MainColorIn;
in_ShadeIn = (in_ShadeIn === undefined) ? "" : in_ShadeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action.bind(controller, in_MainColorIn, in_ShadeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_ColorVar: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ColorVarOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill.GetUnixEpochJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_GetCurrentTimeInMill_GetUnixEpochJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getUnixEpochJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetCurrentTimeInMill$outVars"))());
varBag.callContext = callContext;
varBag.getUnixEpochJSResult = getUnixEpochJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1OYkrkZsn0KC3rvJ96Q5kg:/ClientActionFlows.1OYkrkZsn0KC3rvJ96Q5kg:3R5nCFTa3NjRoaWbtx42yg", "Connect2_OrbitMobile_MUI", "GetCurrentTimeInMill", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K55Y95BSIkOClwfj9c_XGw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b8CqyJtQi0O4JbZ4eY_9bg", callContext.id);
getUnixEpochJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_GetCurrentTimeInMill_GetUnixEpochJS, "GetUnixEpoch", "GetCurrentTimeInMill", {
Out_UnixTimestamp: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.LongInteger.defaultValue, OS.DataTypes.DataTypes.LongInteger)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetCurrentTimeInMill$getUnixEpochJSResult"))();
jsNodeResult.out_UnixTimestampOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_UnixTimestamp, OS.DataTypes.DataTypes.LongInteger);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Chw8RJKA00G_CUoQCsM5PA", callContext.id);
// Out_Timestamp = GetUnixEpoch.Out_UnixTimestamp
outVars.value.out_TimestampOut = getUnixEpochJSResult.value.out_UnixTimestampOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ud88ZIIgXkKLxAvE8yvLrA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1OYkrkZsn0KC3rvJ96Q5kg", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetCurrentTimeInMill$getUnixEpochJSResult", [{
name: "Out_UnixTimestamp",
attrName: "out_UnixTimestampOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetCurrentTimeInMill$outVars", [{
name: "Out_Timestamp",
attrName: "out_TimestampOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getCurrentTimeInMill$Action = function () {
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Timestamp: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_TimestampOut, OS.DataTypes.DataTypes.LongInteger)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill.GetUnixEpochJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Out_UnixTimestamp = Date.now();
};
});

define("Connect2_OrbitMobile_MUI.controller$GetEventViewInfo", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$EventViewRec", "Connect2_OrbitMobile_MUI.controller$ServerAction.GetEventViewInfo"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getEventViewInfo$Action = function (in_EventViewIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetEventViewInfo$vars"))());
vars.value.in_EventViewIdInLocal = in_EventViewIdIn;
var getEventViewInfoVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetEventViewInfo$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getEventViewInfoVar = getEventViewInfoVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:jCf3RKjlrEqVX+qB2dJ8QQ:/ClientActionFlows.jCf3RKjlrEqVX+qB2dJ8QQ:u3f4jZyOm6YQhY0t+RsiOw", "Connect2_OrbitMobile_MUI", "GetEventViewInfo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+n+2VPLNwEqXfXkxrXUrVw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9u2fYoeu8kW0XIkj_tvRVQ", callContext.id);
// Execute Action: GetEventViewInfo
return controller.getEventViewInfo$ServerAction(vars.value.in_EventViewIdInLocal, callContext).then(function (value) {
getEventViewInfoVar.value = value;
}).then(function () {
// Set Output
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7rrbdpzl40mJtExf02eypg", callContext.id);
// Out_EventView = GetEventViewInfo.Out_EventView
outVars.value.out_EventViewOut = getEventViewInfoVar.value.out_EventViewOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K7eCbZ24yUuM2H+lBGiCCQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:jCf3RKjlrEqVX+qB2dJ8QQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:jCf3RKjlrEqVX+qB2dJ8QQ", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetEventViewInfo$vars", [{
name: "In_EventViewId",
attrName: "in_EventViewIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetEventViewInfo$outVars", [{
name: "Out_EventView",
attrName: "out_EventViewOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.EventViewRec();
},
complexType: Connect2_OrbitMobile_MUIModel.EventViewRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getEventViewInfo$Action = function (in_EventViewIdIn) {
in_EventViewIdIn = (in_EventViewIdIn === undefined) ? 0 : in_EventViewIdIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getEventViewInfo$Action.bind(controller, in_EventViewIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_EventView: actionResults.out_EventViewOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Single", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Single.CreateFormattedDateJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_GetFormattedDate_Single_CreateFormattedDateJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getFormattedDate_Single$Action = function (in_DateIn, in_TimeFormatIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Single$vars"))());
vars.value.in_DateInLocal = in_DateIn;
vars.value.in_TimeFormatIdInLocal = in_TimeFormatIdIn;
var createFormattedDateJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Single$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createFormattedDateJSResult = createFormattedDateJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Bi1EHKIDlU+STAgwHHoO0w:/ClientActionFlows.Bi1EHKIDlU+STAgwHHoO0w:4+dCCgnhlN96FhZr0p_OEQ", "Connect2_OrbitMobile_MUI", "GetFormattedDate_Single", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zkdB08EmCkOBIlNhbvkihA", callContext.id);
// Valid date?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ETrliTKNWkiXQciCuzU5YQ", callContext.id) && !(vars.value.in_DateInLocal.equals(OS.BuiltinFunctions.nullDate())))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fAdFOS2c2EywHkTpX8oD3g", callContext.id);
// Construct Weekday - Monday or M
createFormattedDateJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_GetFormattedDate_Single_CreateFormattedDateJS, "CreateFormattedDate", "GetFormattedDate_Single", {
TargetDate: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DateInLocal, OS.DataTypes.DataTypes.Date),
IsDay: OS.DataConversion.JSNodeParamConverter.to(((vars.value.in_TimeFormatIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.timeFormat.day) || (vars.value.in_TimeFormatIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.timeFormat.calendarDate)), OS.DataTypes.DataTypes.Boolean),
IsYear: OS.DataConversion.JSNodeParamConverter.to(((vars.value.in_TimeFormatIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.timeFormat.year) || (vars.value.in_TimeFormatIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.timeFormat.calendarDate)), OS.DataTypes.DataTypes.Boolean),
IsMonth: OS.DataConversion.JSNodeParamConverter.to(((vars.value.in_TimeFormatIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.timeFormat.month) || (vars.value.in_TimeFormatIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.timeFormat.calendarDate)), OS.DataTypes.DataTypes.Boolean),
Out_FormattedDateTime: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Single$createFormattedDateJSResult"))();
jsNodeResult.out_FormattedDateTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_FormattedDateTime, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
// Set Outputs
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zIGTbd5p9EiEgZQV2z7TzA", callContext.id);
// Out_FormattedDate = CreateFormattedDate.Out_FormattedDateTime
outVars.value.out_FormattedDateOut = createFormattedDateJSResult.value.out_FormattedDateTimeOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i18cyMdch02ztbJQgsmvsA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CSKJnbd9e0Gda05Onk26tA", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Bi1EHKIDlU+STAgwHHoO0w", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Single$vars", [{
name: "In_Date",
attrName: "in_DateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "In_TimeFormatId",
attrName: "in_TimeFormatIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Single$createFormattedDateJSResult", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Single$outVars", [{
name: "Out_FormattedDate",
attrName: "out_FormattedDateOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getFormattedDate_Single$Action = function (in_DateIn, in_TimeFormatIdIn) {
in_DateIn = (in_DateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateIn;
in_TimeFormatIdIn = (in_TimeFormatIdIn === undefined) ? 0 : in_TimeFormatIdIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getFormattedDate_Single$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateIn, OS.DataTypes.DataTypes.Date), in_TimeFormatIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedDate: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedDateOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Single.CreateFormattedDateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
//Set Target Date to var

//var originalDate = $parameters.TargetDate;
//var offSet = (originalDate.getTimezoneOffset()) * 60 * 1000;
var finalDate = $parameters.TargetDate;

//Construct Date

var formattedDate = "";
if($parameters.IsDay){ formattedDate = finalDate.getDate();}
if($parameters.IsMonth){ formattedDate = formattedDate + " " + TimeFormat.getMonth(finalDate);} 
if($parameters.IsYear){ formattedDate = formattedDate + " " + TimeFormat.getYear(finalDate);}

//Output value
$parameters.Out_FormattedDateTime = formattedDate;
};
});

define("Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Survey", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Survey.CreateFormattedDate_SurveyJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_GetFormattedDate_Survey_CreateFormattedDate_SurveyJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getFormattedDate_Survey$Action = function (in_DateTimeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Survey$vars"))());
vars.value.in_DateTimeInLocal = in_DateTimeIn;
var createFormattedDate_SurveyJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Survey$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createFormattedDate_SurveyJSResult = createFormattedDate_SurveyJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:e90EgIWgy0S_sLpr4Zcgww:/ClientActionFlows.e90EgIWgy0S_sLpr4Zcgww:zefMRjOvWOoyrAQfecHkjg", "Connect2_OrbitMobile_MUI", "GetFormattedDate_Survey", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ht3Kdr1CwUatHaYSoVlcXQ", callContext.id);
// Valid date time?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Sk1xZdnZVU26WuciGsrXwg", callContext.id) && !(OS.BuiltinFunctions.dateTimeToDate(vars.value.in_DateTimeInLocal).equals(OS.BuiltinFunctions.nullDate())))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:L4XUs8N8gUyEm_naC3ncew", callContext.id);
// Construct Date - 01/01/1900
createFormattedDate_SurveyJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_GetFormattedDate_Survey_CreateFormattedDate_SurveyJS, "CreateFormattedDate_Survey", "GetFormattedDate_Survey", {
TargetDateTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DateTimeInLocal, OS.DataTypes.DataTypes.DateTime),
Out_FormattedDateTime: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Survey$createFormattedDate_SurveyJSResult"))();
jsNodeResult.out_FormattedDateTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_FormattedDateTime, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
// Set Outputs
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K2gtBT5HQ0K5wD8S62PH2Q", callContext.id);
// Out_FormattedDateTime = CreateFormattedDate_Survey.Out_FormattedDateTime
outVars.value.out_FormattedDateTimeOut = createFormattedDate_SurveyJSResult.value.out_FormattedDateTimeOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WDN83B+OMUizOgXuNR8i7A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:r6jMiF9jZ0aJq87Q7x_iow", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:e90EgIWgy0S_sLpr4Zcgww", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Survey$vars", [{
name: "In_DateTime",
attrName: "in_DateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Survey$createFormattedDate_SurveyJSResult", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Survey$outVars", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getFormattedDate_Survey$Action = function (in_DateTimeIn) {
in_DateTimeIn = (in_DateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateTimeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getFormattedDate_Survey$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateTimeIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedDateTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedDateTimeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Survey.CreateFormattedDate_SurveyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
//Set Target Date Time to var
var finalDate = $parameters.TargetDateTime;

//Construct Date Time - 01/01/1900
var formattedDate = finalDate.getUTCDate() + "/" + TimeFormat.getMonth(finalDate) + "/" + TimeFormat.getYear(finalDate);

//Output value
$parameters.Out_FormattedDateTime = formattedDate;
};
});

define("Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Weekday", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Weekday.CreateFormattedWeekdayJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_GetFormattedDate_Weekday_CreateFormattedWeekdayJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getFormattedDate_Weekday$Action = function (in_DateIn, in_IsFirstLetterOnlyIn, in_ReplaceSundayIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Weekday$vars"))());
vars.value.in_DateInLocal = in_DateIn;
vars.value.in_IsFirstLetterOnlyInLocal = in_IsFirstLetterOnlyIn;
vars.value.in_ReplaceSundayInLocal = in_ReplaceSundayIn;
var createFormattedWeekdayJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Weekday$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createFormattedWeekdayJSResult = createFormattedWeekdayJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:yx7kYsJOjUamJKg0pfs1Ww:/ClientActionFlows.yx7kYsJOjUamJKg0pfs1Ww:x4CHJbdrYsnEke3Z+g6GUw", "Connect2_OrbitMobile_MUI", "GetFormattedDate_Weekday", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w6Gygcoo4UGbUeAAsJohCg", callContext.id);
// Valid date?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:laKwZw7uFUOYMjrgAASvDQ", callContext.id) && !(vars.value.in_DateInLocal.equals(OS.BuiltinFunctions.nullDate())))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tua1VTgui0mgnWbqPfutxw", callContext.id);
// Construct Weekday - Sunday, Sun, S or L.
createFormattedWeekdayJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_GetFormattedDate_Weekday_CreateFormattedWeekdayJS, "CreateFormattedWeekday", "GetFormattedDate_Weekday", {
ReplaceSunday: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ReplaceSundayInLocal, OS.DataTypes.DataTypes.Boolean),
TargetDate: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DateInLocal, OS.DataTypes.DataTypes.Date),
WeekDayFirstLetter: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_IsFirstLetterOnlyInLocal, OS.DataTypes.DataTypes.Boolean),
Out_FormattedDateTime: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Weekday$createFormattedWeekdayJSResult"))();
jsNodeResult.out_FormattedDateTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_FormattedDateTime, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SfxIdSSLwE6Al6g52imWnQ", callContext.id);
// Out_Weekday = CreateFormattedWeekday.Out_FormattedDateTime
outVars.value.out_WeekdayOut = createFormattedWeekdayJSResult.value.out_FormattedDateTimeOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xMahN9nybU6b+bfoukK4+A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KyVBparNREGxHob7dCtzIA", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yx7kYsJOjUamJKg0pfs1Ww", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Weekday$vars", [{
name: "In_Date",
attrName: "in_DateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "In_IsFirstLetterOnly",
attrName: "in_IsFirstLetterOnlyInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_ReplaceSunday",
attrName: "in_ReplaceSundayInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Weekday$createFormattedWeekdayJSResult", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDate_Weekday$outVars", [{
name: "Out_Weekday",
attrName: "out_WeekdayOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getFormattedDate_Weekday$Action = function (in_DateIn, in_IsFirstLetterOnlyIn, in_ReplaceSundayIn) {
in_DateIn = (in_DateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateIn;
in_IsFirstLetterOnlyIn = (in_IsFirstLetterOnlyIn === undefined) ? false : in_IsFirstLetterOnlyIn;
in_ReplaceSundayIn = (in_ReplaceSundayIn === undefined) ? false : in_ReplaceSundayIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getFormattedDate_Weekday$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateIn, OS.DataTypes.DataTypes.Date), OS.DataConversion.JSNodeParamConverter.from(in_IsFirstLetterOnlyIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_ReplaceSundayIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Weekday: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_WeekdayOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Weekday.CreateFormattedWeekdayJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
//Set Target Date Time to var

//var originalDate = $parameters.TargetDate;
//var offSet = (originalDate.getTimezoneOffset()) * 60 * 1000;
var finalDate = $parameters.TargetDate;

//Construct Weekday - Sunday , Sun, S or L.

//Get Week day
var weekDay = TimeFormat.getWeekDay(finalDate.getDay(),false,$parameters.WeekDayFirstLetter,false,$parameters.ReplaceSunday);

//Create final String
var formattedDate = weekDay;

//Output value
$parameters.Out_FormattedDateTime = formattedDate;
};
});

define("Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime.CreateFormattedTransportDateTimeJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_GetFormattedDateTime_CreateFormattedTransportDateTimeJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action = function (in_DateTimeIn, in_IncludeTimeIn, in_IncludeWeekDayIn, in_WeekDayFirstLetterIn, in_AbbreviateWeekDayIn, in_SeparateByCommasIn, in_ReplaceSundayIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDateTime$vars"))());
vars.value.in_DateTimeInLocal = in_DateTimeIn;
vars.value.in_IncludeTimeInLocal = in_IncludeTimeIn;
vars.value.in_IncludeWeekDayInLocal = in_IncludeWeekDayIn;
vars.value.in_WeekDayFirstLetterInLocal = in_WeekDayFirstLetterIn;
vars.value.in_AbbreviateWeekDayInLocal = in_AbbreviateWeekDayIn;
vars.value.in_SeparateByCommasInLocal = in_SeparateByCommasIn;
vars.value.in_ReplaceSundayInLocal = in_ReplaceSundayIn;
var createFormattedTransportDateTimeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDateTime$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createFormattedTransportDateTimeJSResult = createFormattedTransportDateTimeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:9HatXeEqTkmLhjXWZps6CA:/ClientActionFlows.9HatXeEqTkmLhjXWZps6CA:uBLYvciM_qRmwfUTSkRYfg", "Connect2_OrbitMobile_MUI", "GetFormattedDateTime", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NxtiRNBb8UGB2FEup41p_Q", callContext.id);
// Valid date time?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BB7MHMDMz0apWX6tTJTm+w", callContext.id) && !(OS.BuiltinFunctions.dateTimeToDate(vars.value.in_DateTimeInLocal).equals(OS.BuiltinFunctions.nullDate())))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MdDdq5D1Z0aLUeYixwYXrQ", callContext.id);
// Construct Date Time - 1 Jan 1900 1:00 AM
createFormattedTransportDateTimeJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_GetFormattedDateTime_CreateFormattedTransportDateTimeJS, "CreateFormattedTransportDateTime", "GetFormattedDateTime", {
IncludeTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_IncludeTimeInLocal, OS.DataTypes.DataTypes.Boolean),
AbbreviateWeekDay: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_AbbreviateWeekDayInLocal, OS.DataTypes.DataTypes.Boolean),
WeekDayFirstLetter: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_WeekDayFirstLetterInLocal, OS.DataTypes.DataTypes.Boolean),
ReplaceSunday: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ReplaceSundayInLocal, OS.DataTypes.DataTypes.Boolean),
IncludeWeekDay: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_IncludeWeekDayInLocal, OS.DataTypes.DataTypes.Boolean),
TargetDateTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DateTimeInLocal, OS.DataTypes.DataTypes.DateTime),
UseCommas: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_SeparateByCommasInLocal, OS.DataTypes.DataTypes.Boolean),
Out_FormattedDateTime: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDateTime$createFormattedTransportDateTimeJSResult"))();
jsNodeResult.out_FormattedDateTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_FormattedDateTime, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
// Set Outputs
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P_FDwgg2WkO3Y3aAm9RzwQ", callContext.id);
// Out_FormattedDateTime = CreateFormattedTransportDateTime.Out_FormattedDateTime
outVars.value.out_FormattedDateTimeOut = createFormattedTransportDateTimeJSResult.value.out_FormattedDateTimeOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:al2ww8rW0U2gKkQxsliQtA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dRM7AjeL8EuxO63aIzznHg", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9HatXeEqTkmLhjXWZps6CA", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDateTime$vars", [{
name: "In_DateTime",
attrName: "in_DateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "In_IncludeTime",
attrName: "in_IncludeTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_IncludeWeekDay",
attrName: "in_IncludeWeekDayInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_WeekDayFirstLetter",
attrName: "in_WeekDayFirstLetterInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_AbbreviateWeekDay",
attrName: "in_AbbreviateWeekDayInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_SeparateByCommas",
attrName: "in_SeparateByCommasInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_ReplaceSunday",
attrName: "in_ReplaceSundayInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDateTime$createFormattedTransportDateTimeJSResult", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDateTime$outVars", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getFormattedDateTime$Action = function (in_DateTimeIn, in_IncludeTimeIn, in_IncludeWeekDayIn, in_WeekDayFirstLetterIn, in_AbbreviateWeekDayIn, in_SeparateByCommasIn, in_ReplaceSundayIn) {
in_DateTimeIn = (in_DateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateTimeIn;
in_IncludeTimeIn = (in_IncludeTimeIn === undefined) ? false : in_IncludeTimeIn;
in_IncludeWeekDayIn = (in_IncludeWeekDayIn === undefined) ? false : in_IncludeWeekDayIn;
in_WeekDayFirstLetterIn = (in_WeekDayFirstLetterIn === undefined) ? false : in_WeekDayFirstLetterIn;
in_AbbreviateWeekDayIn = (in_AbbreviateWeekDayIn === undefined) ? false : in_AbbreviateWeekDayIn;
in_SeparateByCommasIn = (in_SeparateByCommasIn === undefined) ? false : in_SeparateByCommasIn;
in_ReplaceSundayIn = (in_ReplaceSundayIn === undefined) ? false : in_ReplaceSundayIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateTimeIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(in_IncludeTimeIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_IncludeWeekDayIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_WeekDayFirstLetterIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_AbbreviateWeekDayIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_SeparateByCommasIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_ReplaceSundayIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedDateTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedDateTimeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime.CreateFormattedTransportDateTimeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
//Set Target Date Time to var
var finalDate = $parameters.TargetDateTime;

//Construct Date Time - 1 Jan 1900 1:00 AM or Mon 1 Jan 1900 1:00 AM

//Get Week day if needed
var weekDay = $parameters.IncludeWeekDay ? TimeFormat.getWeekDay(finalDate.getUTCDay(),$parameters.AbbreviateWeekDay,$parameters.WeekDayFirstLetter,$parameters.UseCommas,$parameters.ReplaceSunday) + " " : "";

//Get Time if needed
var time = $parameters.IncludeTime ? " " + TimeFormat.convertHour(finalDate.getUTCHours()) + ":" + TimeFormat.fixMinutes(finalDate.getUTCMinutes()) + TimeFormat.getTimeDay(finalDate.getUTCHours()) : "";

//Create final String
var formattedDate = weekDay + finalDate.getUTCDate() + " " + TimeFormat.getMonthName(finalDate.getUTCMonth(),true) + " " + finalDate.getUTCFullYear() + time;

//Output value
$parameters.Out_FormattedDateTime = formattedDate;
};
});

define("Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action = function (in_MilestoneTypeIdIn, in_MilestoneDateTimeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDateTimeById$vars"))());
vars.value.in_MilestoneTypeIdInLocal = in_MilestoneTypeIdIn;
vars.value.in_MilestoneDateTimeInLocal = in_MilestoneDateTimeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDateTimeById$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:rbxSwRi8gEWnZvhDkpME_Q:/ClientActionFlows.rbxSwRi8gEWnZvhDkpME_Q:IKk4VYCfw+gjWNRtPPeTcA", "Connect2_OrbitMobile_MUI", "GetFormattedDateTimeById", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c0n7MBEnNEqONPau_a3JrQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:d1I2OIC2IkeUcusQNdSwJg", callContext.id) && ((((vars.value.in_MilestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.boat) || (vars.value.in_MilestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.flight)) || (vars.value.in_MilestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.train)) || (vars.value.in_MilestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.vehicle)))) {
// Set Output
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kumNUIsbjEKOvB4vCSuTRQ", callContext.id);
// Out_FormattedDateTime = GetFormattedDateTime(In_MilestoneDateTime, True, True, False, True, False, false)
outVars.value.out_FormattedDateTimeOut = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(vars.value.in_MilestoneDateTimeInLocal, true, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CSz_HEj3s0aISX5RhuEMBQ", callContext.id);
} else {
if((((vars.value.in_MilestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationGuest) || (vars.value.in_MilestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHost)) || (vars.value.in_MilestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHelper))) {
// Set Output
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F15BY9KZ10annrg0E8VaJQ", callContext.id);
// Out_FormattedDateTime = GetFormattedDateTime(In_MilestoneDateTime, False, True, False, False, True, false)
outVars.value.out_FormattedDateTimeOut = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(vars.value.in_MilestoneDateTimeInLocal, false, true, false, false, true, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CSz_HEj3s0aISX5RhuEMBQ", callContext.id);
} else {
if((((vars.value.in_MilestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealGuest) || (vars.value.in_MilestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealHost)) || (vars.value.in_MilestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealHelper))) {
// Set Output
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZlZoNv8lRkah8z6MFwCnKA", callContext.id);
// Out_FormattedDateTime = GetFormattedDateTime(In_MilestoneDateTime, True, True, False, False, True, false)
outVars.value.out_FormattedDateTimeOut = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(vars.value.in_MilestoneDateTimeInLocal, true, true, false, false, true, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CSz_HEj3s0aISX5RhuEMBQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DZkoZxfi8kWmFLWxEQk1qg", callContext.id);
}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rbxSwRi8gEWnZvhDkpME_Q", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDateTimeById$vars", [{
name: "In_MilestoneTypeId",
attrName: "in_MilestoneTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_MilestoneDateTime",
attrName: "in_MilestoneDateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedDateTimeById$outVars", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getFormattedDateTimeById$Action = function (in_MilestoneTypeIdIn, in_MilestoneDateTimeIn) {
in_MilestoneTypeIdIn = (in_MilestoneTypeIdIn === undefined) ? "" : in_MilestoneTypeIdIn;
in_MilestoneDateTimeIn = (in_MilestoneDateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_MilestoneDateTimeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_MilestoneTypeIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_MilestoneDateTimeIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedDateTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedDateTimeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetFormattedLocalDateTime", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetFormattedLocalDateTime.CreateFormattedTransportDateTimeJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_GetFormattedLocalDateTime_CreateFormattedTransportDateTimeJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getFormattedLocalDateTime$Action = function (in_DateTimeIn, in_IncludeTimeIn, in_IncludeWeekDayIn, in_AbbreviateWeekDayIn, in_SeparateByCommasIn, in_ReplaceSundayIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedLocalDateTime$vars"))());
vars.value.in_DateTimeInLocal = in_DateTimeIn;
vars.value.in_IncludeTimeInLocal = in_IncludeTimeIn;
vars.value.in_IncludeWeekDayInLocal = in_IncludeWeekDayIn;
vars.value.in_AbbreviateWeekDayInLocal = in_AbbreviateWeekDayIn;
vars.value.in_SeparateByCommasInLocal = in_SeparateByCommasIn;
vars.value.in_ReplaceSundayInLocal = in_ReplaceSundayIn;
var createFormattedTransportDateTimeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedLocalDateTime$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createFormattedTransportDateTimeJSResult = createFormattedTransportDateTimeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:bZQ7MJEiR0WAI35NpTXSMQ:/ClientActionFlows.bZQ7MJEiR0WAI35NpTXSMQ:z25wEWbpz+H4m5PCUpSjMg", "Connect2_OrbitMobile_MUI", "GetFormattedLocalDateTime", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dWd1wy6XNEKEvmutN41b9w", callContext.id);
// Valid date time?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KG+x8_CSwEut+M90SfPWlg", callContext.id) && !(OS.BuiltinFunctions.dateTimeToDate(vars.value.in_DateTimeInLocal).equals(OS.BuiltinFunctions.nullDate())))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a3SClJqiiEy1ZUoA+Jcj5w", callContext.id);
// Construct Date Time - 1 Jan 1900 1:00 AM
createFormattedTransportDateTimeJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_GetFormattedLocalDateTime_CreateFormattedTransportDateTimeJS, "CreateFormattedTransportDateTime", "GetFormattedLocalDateTime", {
ReplaceSunday: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ReplaceSundayInLocal, OS.DataTypes.DataTypes.Boolean),
AbbreviateWeekDay: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_AbbreviateWeekDayInLocal, OS.DataTypes.DataTypes.Boolean),
IncludeTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_IncludeTimeInLocal, OS.DataTypes.DataTypes.Boolean),
TargetDateTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DateTimeInLocal, OS.DataTypes.DataTypes.DateTime),
UseCommas: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_SeparateByCommasInLocal, OS.DataTypes.DataTypes.Boolean),
IncludeWeekDay: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_IncludeWeekDayInLocal, OS.DataTypes.DataTypes.Boolean),
Out_FormattedDateTime: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedLocalDateTime$createFormattedTransportDateTimeJSResult"))();
jsNodeResult.out_FormattedDateTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_FormattedDateTime, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
// Set Outputs
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Xf+HHeDHAkimB259c9iSNw", callContext.id);
// Out_FormattedDateTime = CreateFormattedTransportDateTime.Out_FormattedDateTime
outVars.value.out_FormattedDateTimeOut = createFormattedTransportDateTimeJSResult.value.out_FormattedDateTimeOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E_cTIUNKN0aTR2pvbQoAMw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qHvrrndqFk6EssnnaA80Zg", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:bZQ7MJEiR0WAI35NpTXSMQ", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedLocalDateTime$vars", [{
name: "In_DateTime",
attrName: "in_DateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "In_IncludeTime",
attrName: "in_IncludeTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_IncludeWeekDay",
attrName: "in_IncludeWeekDayInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_AbbreviateWeekDay",
attrName: "in_AbbreviateWeekDayInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_SeparateByCommas",
attrName: "in_SeparateByCommasInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_ReplaceSunday",
attrName: "in_ReplaceSundayInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedLocalDateTime$createFormattedTransportDateTimeJSResult", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedLocalDateTime$outVars", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getFormattedLocalDateTime$Action = function (in_DateTimeIn, in_IncludeTimeIn, in_IncludeWeekDayIn, in_AbbreviateWeekDayIn, in_SeparateByCommasIn, in_ReplaceSundayIn) {
in_DateTimeIn = (in_DateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateTimeIn;
in_IncludeTimeIn = (in_IncludeTimeIn === undefined) ? false : in_IncludeTimeIn;
in_IncludeWeekDayIn = (in_IncludeWeekDayIn === undefined) ? false : in_IncludeWeekDayIn;
in_AbbreviateWeekDayIn = (in_AbbreviateWeekDayIn === undefined) ? false : in_AbbreviateWeekDayIn;
in_SeparateByCommasIn = (in_SeparateByCommasIn === undefined) ? false : in_SeparateByCommasIn;
in_ReplaceSundayIn = (in_ReplaceSundayIn === undefined) ? false : in_ReplaceSundayIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getFormattedLocalDateTime$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateTimeIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(in_IncludeTimeIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_IncludeWeekDayIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_AbbreviateWeekDayIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_SeparateByCommasIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_ReplaceSundayIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedDateTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedDateTimeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$GetFormattedLocalDateTime.CreateFormattedTransportDateTimeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
//Set Target Date Time to var
var finalDate = $parameters.TargetDateTime;

//Construct Date Time - 1 Jan 1900 1:00 AM or Mon 1 Jan 1900 1:00 AM

//Get Week day if needed
var weekDay = $parameters.IncludeWeekDay ? TimeFormat.getWeekDay(finalDate.getDay(),$parameters.AbbreviateWeekDay,false,$parameters.UseCommas,$parameters.ReplaceSunday) + " " : "";

//Get Time if needed
var time = $parameters.IncludeTime ? " " + TimeFormat.convertHour(finalDate.getHours()) + ":" + TimeFormat.fixMinutes(finalDate.getMinutes()) + TimeFormat.getTimeDay(finalDate.getHours()) : "";

//Create final String
var formattedDate = weekDay + finalDate.getDate() + " " + TimeFormat.getMonthName(finalDate.getMonth(),true) + " " + finalDate.getFullYear() + time;

//Output value
$parameters.Out_FormattedDateTime = formattedDate;
};
});

define("Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getFormattedStringFromHelperType$Action = function (in_HelperTypeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedStringFromHelperType$vars"))());
vars.value.in_HelperTypeInLocal = in_HelperTypeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedStringFromHelperType$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KQQe4eOKL0WChPqNhCkrIQ:/ClientActionFlows.KQQe4eOKL0WChPqNhCkrIQ:K_mRcH7vIgobaDSOxBOc9Q", "Connect2_OrbitMobile_MUI", "GetFormattedStringFromHelperType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9RHmmA6EHEqmsb1IxQjkkg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+5+bXa04NU+V+zsn10FisQ", callContext.id);
// Out_FormattedString = Substr + ToLower + "/s"
outVars.value.out_FormattedStringOut = ((OS.BuiltinFunctions.substr(vars.value.in_HelperTypeInLocal, 0, 1) + OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.substr(vars.value.in_HelperTypeInLocal, 1, (OS.BuiltinFunctions.length(vars.value.in_HelperTypeInLocal) - 1)))) + "/s");
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xdX4nILJAUGD4vaijrYLWg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KQQe4eOKL0WChPqNhCkrIQ", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedStringFromHelperType$vars", [{
name: "In_HelperType",
attrName: "in_HelperTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedStringFromHelperType$outVars", [{
name: "Out_FormattedString",
attrName: "out_FormattedStringOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getFormattedStringFromHelperType$Action = function (in_HelperTypeIn) {
in_HelperTypeIn = (in_HelperTypeIn === undefined) ? "" : in_HelperTypeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getFormattedStringFromHelperType$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_HelperTypeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedString: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedStringOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromDateTime", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromDateTime.CreateFormattedTimeJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_GetFormattedTime_FromDateTime_CreateFormattedTimeJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getFormattedTime_FromDateTime$Action = function (in_DateTimeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromDateTime$vars"))());
vars.value.in_DateTimeInLocal = in_DateTimeIn;
var createFormattedTimeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromDateTime$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createFormattedTimeJSResult = createFormattedTimeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:C5EM4c3bp0OajSftQpPl_g:/ClientActionFlows.C5EM4c3bp0OajSftQpPl_g:1Gqz0I4KBOY3oZZS8pFTEA", "Connect2_OrbitMobile_MUI", "GetFormattedTime_FromDateTime", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VZaY3NSankWo3nK1dQsRSw", callContext.id);
// Valid date time?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MObFkVF0FUiDkpKvs2I0bQ", callContext.id) && !(OS.BuiltinFunctions.dateTimeToDate(vars.value.in_DateTimeInLocal).equals(OS.BuiltinFunctions.nullDate())))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FWYsoeeU7EeZwgR7x47k6g", callContext.id);
createFormattedTimeJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_GetFormattedTime_FromDateTime_CreateFormattedTimeJS, "CreateFormattedTime", "GetFormattedTime_FromDateTime", {
In_TargetDateTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DateTimeInLocal, OS.DataTypes.DataTypes.DateTime),
Out_FormattedDateTime: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromDateTime$createFormattedTimeJSResult"))();
jsNodeResult.out_FormattedDateTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_FormattedDateTime, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
// Set Outputs
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:prurMn5OdkSg++9xuCvrxg", callContext.id);
// Out_FormattedDateTime = CreateFormattedTime.Out_FormattedDateTime
outVars.value.out_FormattedDateTimeOut = createFormattedTimeJSResult.value.out_FormattedDateTimeOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iwKymGGT3EmWKvdNFdwJIw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F+CB3Gj6YESGoI5M+nayiw", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:C5EM4c3bp0OajSftQpPl_g", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromDateTime$vars", [{
name: "In_DateTime",
attrName: "in_DateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromDateTime$createFormattedTimeJSResult", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromDateTime$outVars", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getFormattedTime_FromDateTime$Action = function (in_DateTimeIn) {
in_DateTimeIn = (in_DateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateTimeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getFormattedTime_FromDateTime$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateTimeIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedDateTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedDateTimeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromDateTime.CreateFormattedTimeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
//Set Target Date Time to var
var finalDate = $parameters.In_TargetDateTime;

//Construct Time - 1:00 AM
var formattedDate = TimeFormat.convertHour(finalDate.getUTCHours()) + ":" +
TimeFormat.fixMinutes(finalDate.getUTCMinutes()) +
TimeFormat.getTimeDay(finalDate.getUTCHours());

$parameters.Out_FormattedDateTime = formattedDate;
};
});

define("Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromTime", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromTime.CreateFormattedElapsedTimeJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_GetFormattedTime_FromTime_CreateFormattedElapsedTimeJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getFormattedTime_FromTime$Action = function (in_TimeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromTime$vars"))());
vars.value.in_TimeInLocal = in_TimeIn;
var createFormattedElapsedTimeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromTime$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createFormattedElapsedTimeJSResult = createFormattedElapsedTimeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:B2R_9UJ2kE+AMx8fg2DjlA:/ClientActionFlows.B2R_9UJ2kE+AMx8fg2DjlA:0hZwmNFfQFVg_5zi653BfQ", "Connect2_OrbitMobile_MUI", "GetFormattedTime_FromTime", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vLV7ZUi4bUGWp0jrQTcskg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6Wu8DS6CUkOYiXmVyBZ7fg", callContext.id);
createFormattedElapsedTimeJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_GetFormattedTime_FromTime_CreateFormattedElapsedTimeJS, "CreateFormattedElapsedTime", "GetFormattedTime_FromTime", {
In_Time: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.timeToText(vars.value.in_TimeInLocal), OS.DataTypes.DataTypes.Text),
Out_FormattedTime: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromTime$createFormattedElapsedTimeJSResult"))();
jsNodeResult.out_FormattedTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_FormattedTime, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CUs5rYRd2USDGQu4fC7htw", callContext.id);
// Out_FormattedElapsedTime = CreateFormattedElapsedTime.Out_FormattedTime
outVars.value.out_FormattedElapsedTimeOut = createFormattedElapsedTimeJSResult.value.out_FormattedTimeOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JhetWpbzOESH0wn3N5tmQg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:B2R_9UJ2kE+AMx8fg2DjlA", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromTime$vars", [{
name: "In_Time",
attrName: "in_TimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Time,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromTime$createFormattedElapsedTimeJSResult", [{
name: "Out_FormattedTime",
attrName: "out_FormattedTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTime_FromTime$outVars", [{
name: "Out_FormattedElapsedTime",
attrName: "out_FormattedElapsedTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getFormattedTime_FromTime$Action = function (in_TimeIn) {
in_TimeIn = (in_TimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_TimeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getFormattedTime_FromTime$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_TimeIn, OS.DataTypes.DataTypes.Time)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedElapsedTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedElapsedTimeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromTime.CreateFormattedElapsedTimeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Out_FormattedTime = TimeFormat.formatTime($parameters.In_Time);
};
});

define("Connect2_OrbitMobile_MUI.controller$GetFormattedTimeDifference", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetFormattedTimeDifference.CreateFormattedTimeDifferenceJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_GetFormattedTimeDifference_CreateFormattedTimeDifferenceJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getFormattedTimeDifference$Action = function (in_DateTimeDepartureIn, in_DateTimeArrivalIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTimeDifference$vars"))());
vars.value.in_DateTimeDepartureInLocal = in_DateTimeDepartureIn;
vars.value.in_DateTimeArrivalInLocal = in_DateTimeArrivalIn;
var createFormattedTimeDifferenceJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTimeDifference$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createFormattedTimeDifferenceJSResult = createFormattedTimeDifferenceJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:PmwIhTiY90qv2W6we3ln5g:/ClientActionFlows.PmwIhTiY90qv2W6we3ln5g:xHLapQBxzWICEfaKfHyzIg", "Connect2_OrbitMobile_MUI", "GetFormattedTimeDifference", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y80KiZ1T20W92YFs6Ny0Fw", callContext.id);
// Valid date values?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pDe49yu7BUuEUxLo1ii_PA", callContext.id) && (!(OS.BuiltinFunctions.dateTimeToDate(vars.value.in_DateTimeDepartureInLocal).equals(OS.BuiltinFunctions.nullDate())) && !(OS.BuiltinFunctions.dateTimeToDate(vars.value.in_DateTimeArrivalInLocal).equals(OS.BuiltinFunctions.nullDate()))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o3B2IRO0MkaBzo6QMk3yMA", callContext.id);
createFormattedTimeDifferenceJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_GetFormattedTimeDifference_CreateFormattedTimeDifferenceJS, "CreateFormattedTimeDifference", "GetFormattedTimeDifference", {
DateTimeArrival: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DateTimeArrivalInLocal, OS.DataTypes.DataTypes.DateTime),
DateTimeDeparture: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DateTimeDepartureInLocal, OS.DataTypes.DataTypes.DateTime),
FormattedTimeDifference: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTimeDifference$createFormattedTimeDifferenceJSResult"))();
jsNodeResult.formattedTimeDifferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FormattedTimeDifference, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Xmdcn_teG0qmX_8RNO3YEg", callContext.id);
// Out_FormattedTimeDifference = CreateFormattedTimeDifference.FormattedTimeDifference
outVars.value.out_FormattedTimeDifferenceOut = createFormattedTimeDifferenceJSResult.value.formattedTimeDifferenceOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zJIlh1MHPUKNqGZ05RkJQA", callContext.id);
} else {
// Incorrect values
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4jCOAcUCt0iIlaK_sd2n3w", callContext.id);
// Out_FormattedTimeDifference = "Incorrect date values"
outVars.value.out_FormattedTimeDifferenceOut = "Incorrect date values";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:We4lWRLK60i7B7piarNM5w", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:PmwIhTiY90qv2W6we3ln5g", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTimeDifference$vars", [{
name: "In_DateTimeDeparture",
attrName: "in_DateTimeDepartureInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "In_DateTimeArrival",
attrName: "in_DateTimeArrivalInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTimeDifference$createFormattedTimeDifferenceJSResult", [{
name: "FormattedTimeDifference",
attrName: "formattedTimeDifferenceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFormattedTimeDifference$outVars", [{
name: "Out_FormattedTimeDifference",
attrName: "out_FormattedTimeDifferenceOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getFormattedTimeDifference$Action = function (in_DateTimeDepartureIn, in_DateTimeArrivalIn) {
in_DateTimeDepartureIn = (in_DateTimeDepartureIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateTimeDepartureIn;
in_DateTimeArrivalIn = (in_DateTimeArrivalIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateTimeArrivalIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getFormattedTimeDifference$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateTimeDepartureIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(in_DateTimeArrivalIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedTimeDifference: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedTimeDifferenceOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$GetFormattedTimeDifference.CreateFormattedTimeDifferenceJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FormattedTimeDifference = TimeFormat.getTimeDifferenceInHours($parameters.DateTimeDeparture,$parameters.DateTimeArrival);
};
});

define("Connect2_OrbitMobile_MUI.controller$GetFullYear", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetFullYear.GetFullYearJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_GetFullYear_GetFullYearJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getFullYear$Action = function (dateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFullYear$vars"))());
vars.value.dateInLocal = dateIn;
var getFullYearJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFullYear$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getFullYearJSResult = getFullYearJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:VIrdLJZKlEOQwjBRFi54uQ:/ClientActionFlows.VIrdLJZKlEOQwjBRFi54uQ:ILZIHQ7HxCA_YbOfyz61Vg", "Connect2_OrbitMobile_MUI", "GetFullYear", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:obfUjTHCMkC79zAi1d8i5A", callContext.id);
// Has Data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P3Yvam0qIUqGNwr0Ff+MJA", callContext.id) && !(vars.value.dateInLocal.equals(OS.BuiltinFunctions.nullDate())))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TKU2WcLFkUO+FvClRGR+Qg", callContext.id);
getFullYearJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_GetFullYear_GetFullYearJS, "GetFullYear", "GetFullYear", {
Date: OS.DataConversion.JSNodeParamConverter.to(vars.value.dateInLocal, OS.DataTypes.DataTypes.DateTime),
Year: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetFullYear$getFullYearJSResult"))();
jsNodeResult.yearOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Year, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IJrWa5RxmkiB40OIYHiyRw", callContext.id);
// Year = GetFullYear.Year
outVars.value.yearOut = getFullYearJSResult.value.yearOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OnkJfhWWnE+Ex+9s+n9kaQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gnOKvRc_qEKsPw9sFKohsA", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:VIrdLJZKlEOQwjBRFi54uQ", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFullYear$vars", [{
name: "Date",
attrName: "dateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFullYear$getFullYearJSResult", [{
name: "Year",
attrName: "yearOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetFullYear$outVars", [{
name: "Year",
attrName: "yearOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getFullYear$Action = function (dateIn) {
dateIn = (dateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : dateIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getFullYear$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dateIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Year: OS.DataConversion.JSNodeParamConverter.to(actionResults.yearOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$GetFullYear.GetFullYearJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Year = TimeFormat.getYear($parameters.Date);
};
});

define("Connect2_OrbitMobile_MUI.controller$GetGenderPreferenceByJSON_Name", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getGenderPreferenceByJSON_Name$Action = function (in_JSON_NameIn, in_GenderPreferencesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetGenderPreferenceByJSON_Name$vars"))());
vars.value.in_JSON_NameInLocal = in_JSON_NameIn;
vars.value.in_GenderPreferencesInLocal = in_GenderPreferencesIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetGenderPreferenceByJSON_Name$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:CTkNKWkLVEmbUAqV9neZwg:/ClientActionFlows.CTkNKWkLVEmbUAqV9neZwg:ONHD8buL5aXrTu5khOWJ_A", "Connect2_OrbitMobile_MUI", "GetGenderPreferenceByJSON_Name", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EBDoa7GOy0iviljFzmUqyw", callContext.id);
// Foreach In_GenderPreferences
callContext.iterationContext.registerIterationStart(vars.value.in_GenderPreferencesInLocal);
try {var in_GenderPreferencesIterator = callContext.iterationContext.getIterator(vars.value.in_GenderPreferencesInLocal);
var in_GenderPreferencesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Hn7rM9UKeUenYVjtVl6c9Q", callContext.id) && (in_GenderPreferencesIndex < vars.value.in_GenderPreferencesInLocal.length))) {
in_GenderPreferencesIterator.currentRowNumber = in_GenderPreferencesIndex;
// If_Same JSON Name?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4PAqm8FnlEijNMVYQIhIKQ", callContext.id) && (vars.value.in_GenderPreferencesInLocal.getItem(in_GenderPreferencesIndex.valueOf()).jSON_NameAttr === vars.value.in_JSON_NameInLocal))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3tPCof5bVEyflT_s65irQw", callContext.id);
// Out_GenderPreference = In_GenderPreferences.Current
outVars.value.out_GenderPreferenceOut = vars.value.in_GenderPreferencesInLocal.getItem(in_GenderPreferencesIndex.valueOf());
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Kr7AZ0om0yFLBDjcloung", callContext.id);
return outVars.value;

}

in_GenderPreferencesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_GenderPreferencesInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9qOSzrJ+uUmJq6OB55seoQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:CTkNKWkLVEmbUAqV9neZwg", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetGenderPreferenceByJSON_Name$vars", [{
name: "In_JSON_Name",
attrName: "in_JSON_NameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_GenderPreferences",
attrName: "in_GenderPreferencesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceList();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceList
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetGenderPreferenceByJSON_Name$outVars", [{
name: "Out_GenderPreference",
attrName: "out_GenderPreferenceOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceRec();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getGenderPreferenceByJSON_Name$Action = function (in_JSON_NameIn, in_GenderPreferencesIn) {
in_JSON_NameIn = (in_JSON_NameIn === undefined) ? "" : in_JSON_NameIn;
in_GenderPreferencesIn = (in_GenderPreferencesIn === undefined) ? new Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceList() : in_GenderPreferencesIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getGenderPreferenceByJSON_Name$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_JSON_NameIn, OS.DataTypes.DataTypes.Text), in_GenderPreferencesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_GenderPreference: actionResults.out_GenderPreferenceOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetHelperRoleByJSON_Name", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRec", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getHelperRoleByJSON_Name$Action = function (in_JSON_NameIn, in_HelperRolesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetHelperRoleByJSON_Name$vars"))());
vars.value.in_JSON_NameInLocal = in_JSON_NameIn;
vars.value.in_HelperRolesInLocal = in_HelperRolesIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetHelperRoleByJSON_Name$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2H8plPg0CUizsKC_tn5pCQ:/ClientActionFlows.2H8plPg0CUizsKC_tn5pCQ:f+1Gn_Iq4NPRp4V71lLM_Q", "Connect2_OrbitMobile_MUI", "GetHelperRoleByJSON_Name", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:V6Yptw7L7EacnL5A9cylzw", callContext.id);
// Foreach In_HelperRoles
callContext.iterationContext.registerIterationStart(vars.value.in_HelperRolesInLocal);
try {var in_HelperRolesIterator = callContext.iterationContext.getIterator(vars.value.in_HelperRolesInLocal);
var in_HelperRolesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:C7MdwjTsw02Xo_DefM4ebQ", callContext.id) && (in_HelperRolesIndex < vars.value.in_HelperRolesInLocal.length))) {
in_HelperRolesIterator.currentRowNumber = in_HelperRolesIndex;
// If_Same JSON Name?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yBhmLP_QA0euHsUMv+J7Vg", callContext.id) && (vars.value.in_HelperRolesInLocal.getItem(in_HelperRolesIndex.valueOf()).jSON_NameAttr === vars.value.in_JSON_NameInLocal))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+h7ImBzuxk+CgGxxoyiHBQ", callContext.id);
// Out_HelperRoles = In_HelperRoles.Current
outVars.value.out_HelperRolesOut = vars.value.in_HelperRolesInLocal.getItem(in_HelperRolesIndex.valueOf());
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9eB8QZkL3ketQYQi8K0IXQ", callContext.id);
return outVars.value;

}

in_HelperRolesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_HelperRolesInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PCyhgPPcf0q4q2QU7GJJ4w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2H8plPg0CUizsKC_tn5pCQ", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetHelperRoleByJSON_Name$vars", [{
name: "In_JSON_Name",
attrName: "in_JSON_NameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_HelperRoles",
attrName: "in_HelperRolesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalHelperRoleList
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetHelperRoleByJSON_Name$outVars", [{
name: "Out_HelperRoles",
attrName: "out_HelperRolesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalHelperRoleRec();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalHelperRoleRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getHelperRoleByJSON_Name$Action = function (in_JSON_NameIn, in_HelperRolesIn) {
in_JSON_NameIn = (in_JSON_NameIn === undefined) ? "" : in_JSON_NameIn;
in_HelperRolesIn = (in_HelperRolesIn === undefined) ? new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList() : in_HelperRolesIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getHelperRoleByJSON_Name$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_JSON_NameIn, OS.DataTypes.DataTypes.Text), in_HelperRolesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_HelperRoles: actionResults.out_HelperRolesOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetHelperStatusByJSON_Name", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRecord", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRec", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRecordList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getHelperStatusByJSON_Name$Action = function (in_JSON_NameIn, in_HelperStatusIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetHelperStatusByJSON_Name$vars"))());
vars.value.in_JSON_NameInLocal = in_JSON_NameIn;
vars.value.in_HelperStatusInLocal = in_HelperStatusIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetHelperStatusByJSON_Name$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:pJABiTM3nUeq_PaSCyRT6Q:/ClientActionFlows.pJABiTM3nUeq_PaSCyRT6Q:GbD2q+7UevBAoHrTu9eynQ", "Connect2_OrbitMobile_MUI", "GetHelperStatusByJSON_Name", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5ie192v240ibzhyIZ8BXNA", callContext.id);
// Foreach In_HelperStatus
callContext.iterationContext.registerIterationStart(vars.value.in_HelperStatusInLocal);
try {var in_HelperStatusIterator = callContext.iterationContext.getIterator(vars.value.in_HelperStatusInLocal);
var in_HelperStatusIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NV2EOdS_ZkGUMIwRJ9dI6g", callContext.id) && (in_HelperStatusIndex < vars.value.in_HelperStatusInLocal.length))) {
in_HelperStatusIterator.currentRowNumber = in_HelperStatusIndex;
// If_Same JSON Name?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mEb+pxYsikS5bdL0316CnQ", callContext.id) && (vars.value.in_HelperStatusInLocal.getItem(in_HelperStatusIndex.valueOf()).localHelperStatusAttr.jSON_NameAttr === vars.value.in_JSON_NameInLocal))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BnOPHhUD6UuQ0sQ5rWMSqw", callContext.id);
// Out_HelperStatus = In_HelperStatus.Current
outVars.value.out_HelperStatusOut = vars.value.in_HelperStatusInLocal.getItem(in_HelperStatusIndex.valueOf()).localHelperStatusAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GqwhFulaZEipoA7xASecWw", callContext.id);
return outVars.value;

}

in_HelperStatusIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_HelperStatusInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DGtWdfMvBkiD9+lrho_NBw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:pJABiTM3nUeq_PaSCyRT6Q", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetHelperStatusByJSON_Name$vars", [{
name: "In_JSON_Name",
attrName: "in_JSON_NameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_HelperStatus",
attrName: "in_HelperStatusInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecordList();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecordList
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetHelperStatusByJSON_Name$outVars", [{
name: "Out_HelperStatus",
attrName: "out_HelperStatusOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalHelperStatusRec();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalHelperStatusRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getHelperStatusByJSON_Name$Action = function (in_JSON_NameIn, in_HelperStatusIn) {
in_JSON_NameIn = (in_JSON_NameIn === undefined) ? "" : in_JSON_NameIn;
in_HelperStatusIn = (in_HelperStatusIn === undefined) ? new Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecordList() : in_HelperStatusIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getHelperStatusByJSON_Name$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_JSON_NameIn, OS.DataTypes.DataTypes.Text), in_HelperStatusIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_HelperStatus: actionResults.out_HelperStatusOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetHostAllocation", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$Milestone_ScreenList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getHostAllocation$Action = function (in_MilestonesScreenListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetHostAllocation$vars"))());
vars.value.in_MilestonesScreenListInLocal = in_MilestonesScreenListIn.clone();
var listFilter_PossibleMilestonesVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetHostAllocation$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_PossibleMilestonesVar = listFilter_PossibleMilestonesVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:HTUfYGn41Euf5hOXZkFOBg:/ClientActionFlows.HTUfYGn41Euf5hOXZkFOBg:DUHhVptHWnrVJVN4Wa1fqQ", "Connect2_OrbitMobile_MUI", "GetHostAllocation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:syzkqUoNh0G9ycLBBE7bjA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MeQXMxrMdU+9OAoZq3qJLQ", callContext.id);
// Execute Action: ListFilter_PossibleMilestones
listFilter_PossibleMilestonesVar.value = OS.SystemActions.listFilter(vars.value.in_MilestonesScreenListInLocal, function (p) {
return p.orbitMilestoneTypeAttr.canHostAttr;
}, callContext);

// Found Milestones?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OVdk69YDYU2W2sFf3dG58w", callContext.id) && !(listFilter_PossibleMilestonesVar.value.filteredListOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qJJ0VJCJNUiY8IkhqhdMAw", callContext.id);
// Out_MilestonesScreenList = ListFilter_PossibleMilestones.FilteredList
outVars.value.out_MilestonesScreenListOut = listFilter_PossibleMilestonesVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dYjy2EBBDUqIVdzMrd2OLA", callContext.id);
// Execute Action: ListSort
OS.SystemActions.listSort(outVars.value.out_MilestonesScreenListOut, function (p) {
return p.orbitMilestoneTypeAttr.orderAttr;
}, true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xv0fq65kR0e9u7l2UKliZQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:k+KopjCiCEKDbwlKD+_pSg", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:HTUfYGn41Euf5hOXZkFOBg", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetHostAllocation$vars", [{
name: "In_MilestonesScreenList",
attrName: "in_MilestonesScreenListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.Milestone_ScreenList();
},
complexType: Connect2_OrbitMobile_MUIModel.Milestone_ScreenList
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetHostAllocation$outVars", [{
name: "Out_MilestonesScreenList",
attrName: "out_MilestonesScreenListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.Milestone_ScreenList();
},
complexType: Connect2_OrbitMobile_MUIModel.Milestone_ScreenList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getHostAllocation$Action = function (in_MilestonesScreenListIn) {
in_MilestonesScreenListIn = (in_MilestonesScreenListIn === undefined) ? new Connect2_OrbitMobile_MUIModel.Milestone_ScreenList() : in_MilestonesScreenListIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getHostAllocation$Action.bind(controller, in_MilestonesScreenListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_MilestonesScreenList: actionResults.out_MilestonesScreenListOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetHouseFloorByJSON_Name", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRec", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getHouseFloorByJSON_Name$Action = function (in_JSON_NameIn, in_HouseFloorIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetHouseFloorByJSON_Name$vars"))());
vars.value.in_JSON_NameInLocal = in_JSON_NameIn;
vars.value.in_HouseFloorInLocal = in_HouseFloorIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetHouseFloorByJSON_Name$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:7twGu+Q65UOQeBoK1oNabw:/ClientActionFlows.7twGu+Q65UOQeBoK1oNabw:G5hafu3lOSxDyGjfG4TfHA", "Connect2_OrbitMobile_MUI", "GetHouseFloorByJSON_Name", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JbnktPtafUKZI+D2+wGHKw", callContext.id);
// Foreach In_HouseFloor
callContext.iterationContext.registerIterationStart(vars.value.in_HouseFloorInLocal);
try {var in_HouseFloorIterator = callContext.iterationContext.getIterator(vars.value.in_HouseFloorInLocal);
var in_HouseFloorIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KXvq+3EFUE+fzZlrGkj+2g", callContext.id) && (in_HouseFloorIndex < vars.value.in_HouseFloorInLocal.length))) {
in_HouseFloorIterator.currentRowNumber = in_HouseFloorIndex;
// If_Same JSON Name?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_qyl+holI0yJMLLaDmA0TQ", callContext.id) && (vars.value.in_HouseFloorInLocal.getItem(in_HouseFloorIndex.valueOf()).jSON_NameAttr === vars.value.in_JSON_NameInLocal))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NC2+uY0ivkSR7u_ZQuubEw", callContext.id);
// Out_HouseFloor = In_HouseFloor.Current
outVars.value.out_HouseFloorOut = vars.value.in_HouseFloorInLocal.getItem(in_HouseFloorIndex.valueOf());
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jOQyNXcjI0i4jCJz6bOK0w", callContext.id);
return outVars.value;

}

in_HouseFloorIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_HouseFloorInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sKjkFA4ag02jZ_Mmi9XcTQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:7twGu+Q65UOQeBoK1oNabw", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetHouseFloorByJSON_Name$vars", [{
name: "In_JSON_Name",
attrName: "in_JSON_NameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_HouseFloor",
attrName: "in_HouseFloorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalHouseFloorList();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalHouseFloorList
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetHouseFloorByJSON_Name$outVars", [{
name: "Out_HouseFloor",
attrName: "out_HouseFloorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalHouseFloorRec();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalHouseFloorRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getHouseFloorByJSON_Name$Action = function (in_JSON_NameIn, in_HouseFloorIn) {
in_JSON_NameIn = (in_JSON_NameIn === undefined) ? "" : in_JSON_NameIn;
in_HouseFloorIn = (in_HouseFloorIn === undefined) ? new Connect2_OrbitMobile_MUIModel.LocalHouseFloorList() : in_HouseFloorIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getHouseFloorByJSON_Name$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_JSON_NameIn, OS.DataTypes.DataTypes.Text), in_HouseFloorIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_HouseFloor: actionResults.out_HouseFloorOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetLocalOrbitEventTypeById", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalOrbitEventTypeRecord", "Connect2_OrbitMobile_MUI.model$LocalOrbitEventTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getLocalOrbitEventTypeById$Action = function (orbitEventTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetLocalOrbitEventTypeById$vars"))());
vars.value.orbitEventTypeIdInLocal = orbitEventTypeIdIn;
var getLocalOrbitEventTypeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetLocalOrbitEventTypeById$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalOrbitEventTypeVar = getLocalOrbitEventTypeVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:sh6tFWUrRUuSa9i4n2117g:/ClientActionFlows.sh6tFWUrRUuSa9i4n2117g:2zK36soQJl3LwlW3lfdzoA", "Connect2_OrbitMobile_MUI", "GetLocalOrbitEventTypeById", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eTamx3_iOUyYOCXxJtdtbg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WpONU9ojAk2cKhOy+XM0uw", callContext.id);
// Execute Action: GetLocalOrbitEventType
return Connect2_OrbitMobile_MUIModel.entities.LocalOrbitEventType.get(vars.value.orbitEventTypeIdInLocal, callContext).then(function (value) {
getLocalOrbitEventTypeVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o2hrBo+XsUSwoNmKTe0WBg", callContext.id);
// LocalOrbitEventType = GetLocalOrbitEventType.Record.LocalOrbitEventType
outVars.value.localOrbitEventTypeOut = getLocalOrbitEventTypeVar.value.recordOut.localOrbitEventTypeAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6KDohvxcSUeaRyVRgqZhGw", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:sh6tFWUrRUuSa9i4n2117g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:sh6tFWUrRUuSa9i4n2117g", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetLocalOrbitEventTypeById$vars", [{
name: "OrbitEventTypeId",
attrName: "orbitEventTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetLocalOrbitEventTypeById$outVars", [{
name: "LocalOrbitEventType",
attrName: "localOrbitEventTypeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalOrbitEventTypeRec();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalOrbitEventTypeRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getLocalOrbitEventTypeById$Action = function (orbitEventTypeIdIn) {
orbitEventTypeIdIn = (orbitEventTypeIdIn === undefined) ? "" : orbitEventTypeIdIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getLocalOrbitEventTypeById$Action.bind(controller, orbitEventTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalOrbitEventType: actionResults.localOrbitEventTypeOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetLocalOrbitMilestoneTypeById", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRecord", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getLocalOrbitMilestoneTypeById$Action = function (orbitMilestoneTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetLocalOrbitMilestoneTypeById$vars"))());
vars.value.orbitMilestoneTypeIdInLocal = orbitMilestoneTypeIdIn;
var getLocalOrbitMilestoneTypeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetLocalOrbitMilestoneTypeById$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalOrbitMilestoneTypeVar = getLocalOrbitMilestoneTypeVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:pPoFvWsSGEWHLT8sf77YIg:/ClientActionFlows.pPoFvWsSGEWHLT8sf77YIg:IVNTJJedeixXELrRQvKtNw", "Connect2_OrbitMobile_MUI", "GetLocalOrbitMilestoneTypeById", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:W_roLdfsqka2gh8_yrzZZg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZnVbxgPXcUavxQ3etKovVw", callContext.id);
// Execute Action: GetLocalOrbitMilestoneType
return Connect2_OrbitMobile_MUIModel.entities.LocalOrbitMilestoneType.get(vars.value.orbitMilestoneTypeIdInLocal, callContext).then(function (value) {
getLocalOrbitMilestoneTypeVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m8H4MhuiK0WgZrTwpE8yFQ", callContext.id);
// LocalOrbitMilestoneType = GetLocalOrbitMilestoneType.Record.LocalOrbitMilestoneType
outVars.value.localOrbitMilestoneTypeOut = getLocalOrbitMilestoneTypeVar.value.recordOut.localOrbitMilestoneTypeAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oOxgWWmxJkObmTNLmmNLig", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:pPoFvWsSGEWHLT8sf77YIg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:pPoFvWsSGEWHLT8sf77YIg", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetLocalOrbitMilestoneTypeById$vars", [{
name: "OrbitMilestoneTypeId",
attrName: "orbitMilestoneTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetLocalOrbitMilestoneTypeById$outVars", [{
name: "LocalOrbitMilestoneType",
attrName: "localOrbitMilestoneTypeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRec();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getLocalOrbitMilestoneTypeById$Action = function (orbitMilestoneTypeIdIn) {
orbitMilestoneTypeIdIn = (orbitMilestoneTypeIdIn === undefined) ? "" : orbitMilestoneTypeIdIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getLocalOrbitMilestoneTypeById$Action.bind(controller, orbitMilestoneTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalOrbitMilestoneType: actionResults.localOrbitMilestoneTypeOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetMealTypeByJSON_Name", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRec", "Connect2_OrbitMobile_MUI.model$LocalMealTypeList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getMealTypeByJSON_Name$Action = function (in_JSON_NameIn, in_MealTypesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetMealTypeByJSON_Name$vars"))());
vars.value.in_JSON_NameInLocal = in_JSON_NameIn;
vars.value.in_MealTypesInLocal = in_MealTypesIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetMealTypeByJSON_Name$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:fydSWmESJUKUpFYTzwgaAg:/ClientActionFlows.fydSWmESJUKUpFYTzwgaAg:3Fip9HCGnwUQJC+v2eG3LA", "Connect2_OrbitMobile_MUI", "GetMealTypeByJSON_Name", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yhyAJjIB5EmhRKcpNmHwyQ", callContext.id);
// Foreach In_MealTypes
callContext.iterationContext.registerIterationStart(vars.value.in_MealTypesInLocal);
try {var in_MealTypesIterator = callContext.iterationContext.getIterator(vars.value.in_MealTypesInLocal);
var in_MealTypesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R6037mG2VEelrwm00L8W+Q", callContext.id) && (in_MealTypesIndex < vars.value.in_MealTypesInLocal.length))) {
in_MealTypesIterator.currentRowNumber = in_MealTypesIndex;
// If_Same JSON Name?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Aejdo7+eHUSGf1AH1UXEMA", callContext.id) && (vars.value.in_MealTypesInLocal.getItem(in_MealTypesIndex.valueOf()).jSON_NameAttr === vars.value.in_JSON_NameInLocal))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wcQqwxrqmEOPqtOCTfj_zQ", callContext.id);
// Out_MealType = In_MealTypes.Current
outVars.value.out_MealTypeOut = vars.value.in_MealTypesInLocal.getItem(in_MealTypesIndex.valueOf());
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9fImEhaEXE23Sg4Vc57Z1g", callContext.id);
return outVars.value;

}

in_MealTypesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_MealTypesInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cycD87mtQUeANS5HNt8lWQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fydSWmESJUKUpFYTzwgaAg", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetMealTypeByJSON_Name$vars", [{
name: "In_JSON_Name",
attrName: "in_JSON_NameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_MealTypes",
attrName: "in_MealTypesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalMealTypeList();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalMealTypeList
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetMealTypeByJSON_Name$outVars", [{
name: "Out_MealType",
attrName: "out_MealTypeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalMealTypeRec();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalMealTypeRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getMealTypeByJSON_Name$Action = function (in_JSON_NameIn, in_MealTypesIn) {
in_JSON_NameIn = (in_JSON_NameIn === undefined) ? "" : in_JSON_NameIn;
in_MealTypesIn = (in_MealTypesIn === undefined) ? new Connect2_OrbitMobile_MUIModel.LocalMealTypeList() : in_MealTypesIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getMealTypeByJSON_Name$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_JSON_NameIn, OS.DataTypes.DataTypes.Text), in_MealTypesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_MealType: actionResults.out_MealTypeOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetOrdinalEnding_Integer", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getOrdinalEnding_Integer$Action = function (in_NumberIn, in_IsFormattedIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetOrdinalEnding_Integer$vars"))());
vars.value.in_NumberInLocal = in_NumberIn;
vars.value.in_IsFormattedInLocal = in_IsFormattedIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetOrdinalEnding_Integer$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YMk5_sftLU2vdivWeLY5Qw:/ClientActionFlows.YMk5_sftLU2vdivWeLY5Qw:_3fc+fw0zLUov8eszpUEVA", "Connect2_OrbitMobile_MUI", "GetOrdinalEnding_Integer", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WUHB8Esxk02H5YDWGQuTCA", callContext.id);
// Invalid?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lZchjH0GMkWbQQBW7EcjhA", callContext.id) && ((OS.BuiltinFunctions.length((vars.value.in_NumberInLocal).toString()) < 1) || (vars.value.in_NumberInLocal === 0)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pIzyi2m9f02XF6A0kMntzQ", callContext.id);
} else {
// Single digit?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Fi+rGmwDMUivNN5GnCudSQ", callContext.id) && (OS.BuiltinFunctions.length((vars.value.in_NumberInLocal).toString()) === 1))) {
// Set Ending
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Zs_5Ph2DIkC3MPaIbNgnOA", callContext.id);
// Ending = In_Number
vars.value.endingVar = vars.value.in_NumberInLocal;
} else {
// Check for 11th,12th,13th
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zjpA16mxR06UAmBWDlg3rw", callContext.id) && (((OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.substr((vars.value.in_NumberInLocal).toString(), (OS.BuiltinFunctions.length((vars.value.in_NumberInLocal).toString()) - 2), 2)) === 11) || (OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.substr((vars.value.in_NumberInLocal).toString(), (OS.BuiltinFunctions.length((vars.value.in_NumberInLocal).toString()) - 2), 2)) === 12)) || (OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.substr((vars.value.in_NumberInLocal).toString(), (OS.BuiltinFunctions.length((vars.value.in_NumberInLocal).toString()) - 2), 2)) === 13)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WYR2iPtixUKLKc6DWyRtCw", callContext.id);
// Out_OrdinalEnding = If
outVars.value.out_OrdinalEndingOut = ((vars.value.in_IsFormattedInLocal) ? ("\\t\\h") : ("th"));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Zk7YKBKITkyJDpRlKOZeZg", callContext.id);
return outVars.value;

} else {
// Set Substring Ending
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8VGAqs9PUEK2zIzULZSHSg", callContext.id);
// Ending = TextToInteger
vars.value.endingVar = OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.substr((vars.value.in_NumberInLocal).toString(), (OS.BuiltinFunctions.length((vars.value.in_NumberInLocal).toString()) - 1), 1));
}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n31JeMaX10S29ipr49G1jw", callContext.id);
// Out_OrdinalEnding = If
outVars.value.out_OrdinalEndingOut = (((vars.value.endingVar === 1)) ? (((vars.value.in_IsFormattedInLocal) ? ("\\s\\t") : ("st"))) : ((((vars.value.endingVar === 2)) ? (((vars.value.in_IsFormattedInLocal) ? ("n\\d") : ("nd"))) : ((((vars.value.endingVar === 3)) ? (((vars.value.in_IsFormattedInLocal) ? ("r\\d") : ("rd"))) : (((vars.value.in_IsFormattedInLocal) ? ("\\t\\h") : ("th"))))))));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9AFQAEObkU+rz495yP01Sg", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YMk5_sftLU2vdivWeLY5Qw", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetOrdinalEnding_Integer$vars", [{
name: "In_Number",
attrName: "in_NumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "In_IsFormatted",
attrName: "in_IsFormattedInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Ending",
attrName: "endingVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetOrdinalEnding_Integer$outVars", [{
name: "Out_OrdinalEnding",
attrName: "out_OrdinalEndingOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getOrdinalEnding_Integer$Action = function (in_NumberIn, in_IsFormattedIn) {
in_NumberIn = (in_NumberIn === undefined) ? 0 : in_NumberIn;
in_IsFormattedIn = (in_IsFormattedIn === undefined) ? false : in_IsFormattedIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getOrdinalEnding_Integer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_NumberIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(in_IsFormattedIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_OrdinalEnding: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_OrdinalEndingOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetPopUpInfo", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getPopUpInfo$Action = function (in_IsCancelIn, in_IsNoInfoIn, in_IsDeleteIn, in_IsReturnNavigationIn, in_IsReturnBackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetPopUpInfo$vars"))());
vars.value.in_IsCancelInLocal = in_IsCancelIn;
vars.value.in_IsNoInfoInLocal = in_IsNoInfoIn;
vars.value.in_IsDeleteInLocal = in_IsDeleteIn;
vars.value.in_IsReturnNavigationInLocal = in_IsReturnNavigationIn;
vars.value.in_IsReturnBackInLocal = in_IsReturnBackIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetPopUpInfo$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:SBbJ7gU9bU+YLM3jBzYV0Q:/ClientActionFlows.SBbJ7gU9bU+YLM3jBzYV0Q:xLe7Tz9vLO6QvCeXSiumFw", "Connect2_OrbitMobile_MUI", "GetPopUpInfo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H5Plm8PEmk++mh9T9P9jxw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KYKzoyWdjEGe0P6OlRhVeQ", callContext.id) && vars.value.in_IsCancelInLocal)) {
// Set PopUp Info
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KmI4ql6UDEGAa4k0tJ908w", callContext.id);
// Out_Title = "Confirm Discard Changes"
outVars.value.out_TitleOut = "Confirm Discard Changes";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KmI4ql6UDEGAa4k0tJ908w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Message = "Are you sure you want to discard these details?" + NewLine + NewLine + "The Back button will also discard any unsaved details and take you back to the navigation screen."
outVars.value.out_MessageOut = ((("Are you sure you want to discard these details?" + "\r\n") + "\r\n") + "The Back button will also discard any unsaved details and take you back to the navigation screen.");
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IzCtcxURaEme2qon_bu_2Q", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:87HuSE8Fv0KjG8KovXBiYQ", callContext.id) && vars.value.in_IsNoInfoInLocal)) {
// Set PopUp Info
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rnpcMhvSlk+rk4s0T_tvYA", callContext.id);
// Out_Title = "No data added?"
outVars.value.out_TitleOut = "No data added?";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rnpcMhvSlk+rk4s0T_tvYA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Message = "No information has been added to this step, are you sure this is correct?"
outVars.value.out_MessageOut = "No information has been added to this step, are you sure this is correct?";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g8sr7cz_dUadiT4EFQLiJQ", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zu6Cg_F2sUOqEmqW2GGoiA", callContext.id) && vars.value.in_IsDeleteInLocal)) {
// Set PopUpInfo
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mKXlhrkA40+vvXvOokI34Q", callContext.id);
// Out_Title = "Deleting placeholder?"
outVars.value.out_TitleOut = "Deleting placeholder?";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mKXlhrkA40+vvXvOokI34Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Message = "Are you sure you want to delete this placeholder?"
outVars.value.out_MessageOut = "Are you sure you want to delete this placeholder?";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s2HcX5wcQkaL_ww6LQtbxw", callContext.id);
} else {
// Is Return Back?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u8SJrM_J00K7MuU83AQOPw", callContext.id) && vars.value.in_IsReturnBackInLocal)) {
// Set PopUpInfo
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y7Swww9et0OgPmxNWsK9Mw", callContext.id);
// Out_Title = "Return to the previous page?"
outVars.value.out_TitleOut = "Return to the previous page?";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y7Swww9et0OgPmxNWsK9Mw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Message = "Are you sure you want to return to the previous page? This survey will be saved as a draft." + NewLine + NewLine + "Press Discard Survey in order to return to the previous page without saving the changes made."
outVars.value.out_MessageOut = ((("Are you sure you want to return to the previous page? This survey will be saved as a draft." + "\r\n") + "\r\n") + "Press Discard Survey in order to return to the previous page without saving the changes made.");
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lQxiW4qgkEKUD3Y3G5oGFg", callContext.id);
} else {
// Is Return Navigation?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VCgfDIzjg0edjKYeE5tFCw", callContext.id) && vars.value.in_IsReturnNavigationInLocal)) {
// Set PopUpInfo
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R5Vrybz2v0G1xCnZr0tZ8A", callContext.id);
// Out_Title = "Return to the Navigation page?"
outVars.value.out_TitleOut = "Return to the Navigation page?";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R5Vrybz2v0G1xCnZr0tZ8A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Message = "Are you sure you want to return to the Navigation page?" + NewLine + "Any unsaved details will be discarded."
outVars.value.out_MessageOut = (("Are you sure you want to return to the Navigation page?" + "\r\n") + "Any unsaved details will be discarded.");
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uM+6Pi6Of0SyALJd1v6tPw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CpIWTAAAekaKnTKGPw8jtQ", callContext.id);
}

}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:SBbJ7gU9bU+YLM3jBzYV0Q", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetPopUpInfo$vars", [{
name: "In_IsCancel",
attrName: "in_IsCancelInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_IsNoInfo",
attrName: "in_IsNoInfoInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_IsDelete",
attrName: "in_IsDeleteInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_IsReturnNavigation",
attrName: "in_IsReturnNavigationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_IsReturnBack",
attrName: "in_IsReturnBackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetPopUpInfo$outVars", [{
name: "Out_Title",
attrName: "out_TitleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Out_Message",
attrName: "out_MessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getPopUpInfo$Action = function (in_IsCancelIn, in_IsNoInfoIn, in_IsDeleteIn, in_IsReturnNavigationIn, in_IsReturnBackIn) {
in_IsCancelIn = (in_IsCancelIn === undefined) ? false : in_IsCancelIn;
in_IsNoInfoIn = (in_IsNoInfoIn === undefined) ? false : in_IsNoInfoIn;
in_IsDeleteIn = (in_IsDeleteIn === undefined) ? false : in_IsDeleteIn;
in_IsReturnNavigationIn = (in_IsReturnNavigationIn === undefined) ? false : in_IsReturnNavigationIn;
in_IsReturnBackIn = (in_IsReturnBackIn === undefined) ? false : in_IsReturnBackIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getPopUpInfo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_IsCancelIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_IsNoInfoIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_IsDeleteIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_IsReturnNavigationIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_IsReturnBackIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Title: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_TitleOut, OS.DataTypes.DataTypes.Text),
Out_Message: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_MessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getSkeletonLoadingIdFromMilestoneTypeId$Action = function (milestoneTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetSkeletonLoadingIdFromMilestoneTypeId$vars"))());
vars.value.milestoneTypeIdInLocal = milestoneTypeIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetSkeletonLoadingIdFromMilestoneTypeId$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8oaZ7L1JSU62Z6y4AmUdNw:/ClientActionFlows.8oaZ7L1JSU62Z6y4AmUdNw:LNA0JfohXTSgijMGbnqBKg", "Connect2_OrbitMobile_MUI", "GetSkeletonLoadingIdFromMilestoneTypeId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fpPyuVkTwkSud_EhVKn5VA", callContext.id);
// Milestone Host?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bBR8Eyag6UC5OFXx+atbBg", callContext.id) && ((vars.value.milestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationGuest) || (vars.value.milestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealGuest)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qnSZSaGFZU2GRG+5p9MApg", callContext.id);
// SkeletonLoadingId = MilestoneDetailGuest
outVars.value.skeletonLoadingIdOut = Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.milestoneDetailGuest;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Fa7SmYVzkGARDdIgGlduw", callContext.id);
} else {
if((((vars.value.milestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHost) || (vars.value.milestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealHost)) || (vars.value.milestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.helper))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8P71elhhi0GhK5x8Ayts5Q", callContext.id);
// SkeletonLoadingId = MilestoneDetailHost
outVars.value.skeletonLoadingIdOut = Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.milestoneDetailHost;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Fa7SmYVzkGARDdIgGlduw", callContext.id);
} else {
if(((((vars.value.milestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.boat) || (vars.value.milestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.vehicle)) || (vars.value.milestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.train)) || (vars.value.milestoneTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.flight))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y+_8M277jEONcvFSDKPCjQ", callContext.id);
// SkeletonLoadingId = TransportDetail
outVars.value.skeletonLoadingIdOut = Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.transportDetail;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Fa7SmYVzkGARDdIgGlduw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:omtYyGLshk+x_q4VJgR0Mg", callContext.id);
}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8oaZ7L1JSU62Z6y4AmUdNw", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetSkeletonLoadingIdFromMilestoneTypeId$vars", [{
name: "MilestoneTypeId",
attrName: "milestoneTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetSkeletonLoadingIdFromMilestoneTypeId$outVars", [{
name: "SkeletonLoadingId",
attrName: "skeletonLoadingIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getSkeletonLoadingIdFromMilestoneTypeId$Action = function (milestoneTypeIdIn) {
milestoneTypeIdIn = (milestoneTypeIdIn === undefined) ? "" : milestoneTypeIdIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getSkeletonLoadingIdFromMilestoneTypeId$Action.bind(controller, milestoneTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
SkeletonLoadingId: actionResults.skeletonLoadingIdOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetStepProperties", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRec", "Connect2_OrbitMobile_MUI.model$StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getStepProperties$Action = function (in_CurrentStepIn, in_StepPropertiesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetStepProperties$vars"))());
vars.value.in_CurrentStepInLocal = in_CurrentStepIn.clone();
vars.value.in_StepPropertiesInLocal = in_StepPropertiesIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetStepProperties$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:TiQN4z9iHEiyJzU_c754uw:/ClientActionFlows.TiQN4z9iHEiyJzU_c754uw:lrjXWsMb84dsqljDBP2qXQ", "Connect2_OrbitMobile_MUI", "GetStepProperties", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NRjdyp85wUOYEGIDSsf7Iw", callContext.id);
// Current Step
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y6ilukT3kEG5KWXFBX4qPA", callContext.id) && (vars.value.in_CurrentStepInLocal.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2GO+VZ+3akuVXJWvHLffGQ", callContext.id);
// Out_CurrentStepProperties = In_StepProperties.Accommodation
outVars.value.out_CurrentStepPropertiesOut = vars.value.in_StepPropertiesInLocal.accommodationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vv2FQRscn026t7WPVhWOvA", callContext.id);
} else {
if((vars.value.in_CurrentStepInLocal.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BG1BAsXutUWg97USLY2iKQ", callContext.id);
// Out_CurrentStepProperties = In_StepProperties.Meals
outVars.value.out_CurrentStepPropertiesOut = vars.value.in_StepPropertiesInLocal.mealsAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vv2FQRscn026t7WPVhWOvA", callContext.id);
} else {
if((vars.value.in_CurrentStepInLocal.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9ECeluQ0u0SbJ6dA9IbYfg", callContext.id);
// Out_CurrentStepProperties = In_StepProperties.Helpers
outVars.value.out_CurrentStepPropertiesOut = vars.value.in_StepPropertiesInLocal.helpersAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vv2FQRscn026t7WPVhWOvA", callContext.id);
} else {
if((vars.value.in_CurrentStepInLocal.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AaF+b0aAaU6VDnEVjUFXeA", callContext.id);
// Out_CurrentStepProperties = In_StepProperties.Vehicles
outVars.value.out_CurrentStepPropertiesOut = vars.value.in_StepPropertiesInLocal.vehiclesAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vv2FQRscn026t7WPVhWOvA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YwADcLAh5U2+u6HeVI3kLA", callContext.id);
}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TiQN4z9iHEiyJzU_c754uw", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetStepProperties$vars", [{
name: "In_CurrentStep",
attrName: "in_CurrentStepInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRec();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRec
}, {
name: "In_StepProperties",
attrName: "in_StepPropertiesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord();
},
complexType: Connect2_OrbitMobile_MUIModel.StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetStepProperties$outVars", [{
name: "Out_CurrentStepProperties",
attrName: "out_CurrentStepPropertiesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.StepPropertiesRec();
},
complexType: Connect2_OrbitMobile_MUIModel.StepPropertiesRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getStepProperties$Action = function (in_CurrentStepIn, in_StepPropertiesIn) {
in_CurrentStepIn = (in_CurrentStepIn === undefined) ? new Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRec() : in_CurrentStepIn;
in_StepPropertiesIn = (in_StepPropertiesIn === undefined) ? new Connect2_OrbitMobile_MUIModel.StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord() : in_StepPropertiesIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getStepProperties$Action.bind(controller, in_CurrentStepIn, in_StepPropertiesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_CurrentStepProperties: actionResults.out_CurrentStepPropertiesOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetSurveyStatusById", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRec", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRecordList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getSurveyStatusById$Action = function (in_SurveyStatusIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetSurveyStatusById$vars"))());
vars.value.in_SurveyStatusIdInLocal = in_SurveyStatusIdIn;
var getLocalSurveyStatusByIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetSurveyStatusById$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalSurveyStatusByIdVar = getLocalSurveyStatusByIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:5cHpi5IcyEiWcmojNs7FQA:/ClientActionFlows.5cHpi5IcyEiWcmojNs7FQA:uPEcQeE7pLEN+g8gTI0z0Q", "Connect2_OrbitMobile_MUI", "GetSurveyStatusById", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u_l1TRoPy0WPwd6aofit9A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NDuUYGHFekmJv4EH0vt77g", callContext.id);
// Aggregate: GetLocalSurveyStatusById
var getLocalSurveyStatusByIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpinId = vars.value.in_SurveyStatusIdInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalSurveyStatus\".\"Id\" o0, \"ENLocalSurveyStatus\".\"Label\" o1, \"ENLocalSurveyStatus\".\"JSON_Name\" o2";
} else {
selectSql += "\"ENLocalSurveyStatus\".\"Id\" o0, \"ENLocalSurveyStatus\".\"Label\" o1, \"ENLocalSurveyStatus\".\"JSON_Name\" o2";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalSurveyStatus\" \"ENLocalSurveyStatus\"";
fromAndWhereSql += " WHERE ";
if (qpinId != 0) {
fromAndWhereSql += "((\"ENLocalSurveyStatus\".\"Id\" = :qpinId) AND (\"ENLocalSurveyStatus\".\"Id\" IS NOT NULL))";
argsList.add("qpinId", /*INTEGER*/ 3, qpinId);
} else {
fromAndWhereSql += "(\"ENLocalSurveyStatus\".\"Id\" IS NULL)";
}
orderBySql += " ORDER BY \"ENLocalSurveyStatus\".\"Label\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localSurveyStatusAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 1;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeGetSurveyStatusById$ClientAction$getLocalSurveyStatusByIdAggr(vars.value.in_SurveyStatusIdInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalSurveyStatusByIdVar.value;
});
};
return getLocalSurveyStatusByIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NA+ZuPslCEaCSFo8yI_q2A", callContext.id);
// Out_SurveyStatus = GetLocalSurveyStatusById.List.Current.LocalSurveyStatus
outVars.value.out_SurveyStatusOut = getLocalSurveyStatusByIdVar.value.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UC_8hHJ92kCc9gry83LYmg", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:5cHpi5IcyEiWcmojNs7FQA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:5cHpi5IcyEiWcmojNs7FQA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetSurveyStatusById$vars", [{
name: "In_SurveyStatusId",
attrName: "in_SurveyStatusIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetSurveyStatusById$outVars", [{
name: "Out_SurveyStatus",
attrName: "out_SurveyStatusOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRec();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getSurveyStatusById$Action = function (in_SurveyStatusIdIn) {
in_SurveyStatusIdIn = (in_SurveyStatusIdIn === undefined) ? 0 : in_SurveyStatusIdIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getSurveyStatusById$Action.bind(controller, in_SurveyStatusIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_SurveyStatus: actionResults.out_SurveyStatusOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetVehicleOwnerByJSON_Name", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerList", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getVehicleOwnerByJSON_Name$Action = function (in_JSON_NameIn, in_VehicleOwnersIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetVehicleOwnerByJSON_Name$vars"))());
vars.value.in_JSON_NameInLocal = in_JSON_NameIn;
vars.value.in_VehicleOwnersInLocal = in_VehicleOwnersIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetVehicleOwnerByJSON_Name$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:U0Zm5ZGff0W_Hn14vCXN6w:/ClientActionFlows.U0Zm5ZGff0W_Hn14vCXN6w:+IMWfF8TYsxGg25DZRk2lw", "Connect2_OrbitMobile_MUI", "GetVehicleOwnerByJSON_Name", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xIUnj9QpeES4YWkU4CBFQQ", callContext.id);
// Foreach In_VehicleOwners
callContext.iterationContext.registerIterationStart(vars.value.in_VehicleOwnersInLocal);
try {var in_VehicleOwnersIterator = callContext.iterationContext.getIterator(vars.value.in_VehicleOwnersInLocal);
var in_VehicleOwnersIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6wh4JRQz9k6c7TljbdeavQ", callContext.id) && (in_VehicleOwnersIndex < vars.value.in_VehicleOwnersInLocal.length))) {
in_VehicleOwnersIterator.currentRowNumber = in_VehicleOwnersIndex;
// If_Same JSON Name?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tlbBYjx+1kSf8xllXlchkA", callContext.id) && (vars.value.in_VehicleOwnersInLocal.getItem(in_VehicleOwnersIndex.valueOf()).jSON_NameAttr === vars.value.in_JSON_NameInLocal))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yvgen4U4D0CQIhY8485pWg", callContext.id);
// Out_VehicleOwner = In_VehicleOwners.Current
outVars.value.out_VehicleOwnerOut = vars.value.in_VehicleOwnersInLocal.getItem(in_VehicleOwnersIndex.valueOf());
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:swfwy+BcBkGPCdaniht+pw", callContext.id);
return outVars.value;

}

in_VehicleOwnersIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_VehicleOwnersInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oODytQI2SkyVmH3GYF1hWg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:U0Zm5ZGff0W_Hn14vCXN6w", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetVehicleOwnerByJSON_Name$vars", [{
name: "In_JSON_Name",
attrName: "in_JSON_NameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_VehicleOwners",
attrName: "in_VehicleOwnersInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerList();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerList
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetVehicleOwnerByJSON_Name$outVars", [{
name: "Out_VehicleOwner",
attrName: "out_VehicleOwnerOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerRec();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getVehicleOwnerByJSON_Name$Action = function (in_JSON_NameIn, in_VehicleOwnersIn) {
in_JSON_NameIn = (in_JSON_NameIn === undefined) ? "" : in_JSON_NameIn;
in_VehicleOwnersIn = (in_VehicleOwnersIn === undefined) ? new Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerList() : in_VehicleOwnersIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getVehicleOwnerByJSON_Name$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_JSON_NameIn, OS.DataTypes.DataTypes.Text), in_VehicleOwnersIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_VehicleOwner: actionResults.out_VehicleOwnerOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GetVehicleTypeByJSON_Name", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getVehicleTypeByJSON_Name$Action = function (in_JSON_NameIn, in_VehicleTypesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetVehicleTypeByJSON_Name$vars"))());
vars.value.in_JSON_NameInLocal = in_JSON_NameIn;
vars.value.in_VehicleTypesInLocal = in_VehicleTypesIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GetVehicleTypeByJSON_Name$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ss3FMIsm0EOLYCKEIU2efA:/ClientActionFlows.ss3FMIsm0EOLYCKEIU2efA:2M2q3XNwqtTC6LK4nFzDgA", "Connect2_OrbitMobile_MUI", "GetVehicleTypeByJSON_Name", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vNGS7XdME0KsyiWMadhN+w", callContext.id);
// Foreach In_VehicleTypes
callContext.iterationContext.registerIterationStart(vars.value.in_VehicleTypesInLocal);
try {var in_VehicleTypesIterator = callContext.iterationContext.getIterator(vars.value.in_VehicleTypesInLocal);
var in_VehicleTypesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YFaVa9wC+kSQYXDWoL60Jw", callContext.id) && (in_VehicleTypesIndex < vars.value.in_VehicleTypesInLocal.length))) {
in_VehicleTypesIterator.currentRowNumber = in_VehicleTypesIndex;
// If_Same JSON Name?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AhYArJxlakePQq924nKXlg", callContext.id) && (vars.value.in_VehicleTypesInLocal.getItem(in_VehicleTypesIndex.valueOf()).jSON_NameAttr === vars.value.in_JSON_NameInLocal))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v9oYt_+tPU+nmsIHDQPxiA", callContext.id);
// Out_VehicleType = In_VehicleTypes.Current
outVars.value.out_VehicleTypeOut = vars.value.in_VehicleTypesInLocal.getItem(in_VehicleTypesIndex.valueOf());
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nr74TVQU70y6LkpYq4EssQ", callContext.id);
return outVars.value;

}

in_VehicleTypesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_VehicleTypesInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ipdipo5gbUmfbS9dFJXDVA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ss3FMIsm0EOLYCKEIU2efA", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetVehicleTypeByJSON_Name$vars", [{
name: "In_JSON_Name",
attrName: "in_JSON_NameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_VehicleTypes",
attrName: "in_VehicleTypesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalVehicleTypeList();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalVehicleTypeList
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GetVehicleTypeByJSON_Name$outVars", [{
name: "Out_VehicleType",
attrName: "out_VehicleTypeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalVehicleTypeRec();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalVehicleTypeRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.getVehicleTypeByJSON_Name$Action = function (in_JSON_NameIn, in_VehicleTypesIn) {
in_JSON_NameIn = (in_JSON_NameIn === undefined) ? "" : in_JSON_NameIn;
in_VehicleTypesIn = (in_VehicleTypesIn === undefined) ? new Connect2_OrbitMobile_MUIModel.LocalVehicleTypeList() : in_VehicleTypesIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.getVehicleTypeByJSON_Name$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_JSON_NameIn, OS.DataTypes.DataTypes.Text), in_VehicleTypesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_VehicleType: actionResults.out_VehicleTypeOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GroupHelpersByRole", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_IS.model$EventBookletMembersRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventBookletMembersList", "Connect2_OrbitMobile_MUI.model$BookletMembers_ByLocalityList", "Connect2_OrbitMobile_MUI.controller$GroupMembersByCountry", "Connect2_OrbitMobile_MUI.model$BookletMembers_ByRoleList", "Connect2_OrbitMobile_MUI.model$BookletMembers_ByRoleRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.groupHelpersByRole$Action = function (membersListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GroupHelpersByRole$vars"))());
vars.value.membersListInLocal = membersListIn.clone();
var listDuplicate_ToFilterVar = new OS.DataTypes.VariableHolder();
var listDuplicate_ToCycleVar = new OS.DataTypes.VariableHolder();
var groupMembersByCountryVar = new OS.DataTypes.VariableHolder();
var listFilter_ByRoleVar = new OS.DataTypes.VariableHolder();
var listIndexOf_ExistingDataVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GroupHelpersByRole$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listDuplicate_ToFilterVar = listDuplicate_ToFilterVar;
varBag.listDuplicate_ToCycleVar = listDuplicate_ToCycleVar;
varBag.groupMembersByCountryVar = groupMembersByCountryVar;
varBag.listFilter_ByRoleVar = listFilter_ByRoleVar;
varBag.listIndexOf_ExistingDataVar = listIndexOf_ExistingDataVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:OIr5qlBMpUGFwRDw29BmHA:/ClientActionFlows.OIr5qlBMpUGFwRDw29BmHA:Sp3f2ze59sZAufnB8Mufig", "Connect2_OrbitMobile_MUI", "GroupHelpersByRole", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:A2IyMuhZHk6lMoi3Dbzgmg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:luzspsD5Lk+lQQ5QEKQXaw", callContext.id);
// Execute Action: ListSort_ByOrderNo
OS.SystemActions.listSort(vars.value.membersListInLocal, function (p) {
return p.orderNoAttr;
}, true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+PrBJRAO+0edPk78seRNKA", callContext.id);
// Execute Action: ListDuplicate_ToFilter
listDuplicate_ToFilterVar.value = OS.SystemActions.listDuplicate(vars.value.membersListInLocal, callContext);

// Foreach MembersList
callContext.iterationContext.registerIterationStart(vars.value.membersListInLocal);
try {var membersListIterator = callContext.iterationContext.getIterator(vars.value.membersListInLocal);
var membersListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_InslnnOiUu2ZSl+J9bc5A", callContext.id) && (membersListIndex < vars.value.membersListInLocal.length))) {
membersListIterator.currentRowNumber = membersListIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RDhw3Vl_WU+9Wf6aNF+TYw", callContext.id);
// Execute Action: ListIndexOf_ExistingData
listIndexOf_ExistingDataVar.value = OS.SystemActions.listIndexOf(outVars.value.helpersByRoleOut, function (p) {
return (p.roleAttr === vars.value.membersListInLocal.getItem(membersListIndex.valueOf()).roleAttr);
}, callContext);

// Already added?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:93QwJWAFKkGGUNPk0LVuRg", callContext.id) && !(((listIndexOf_ExistingDataVar.value.positionOut) !== (-1))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lYqYh3+ogkKU6TNZSixQjA", callContext.id);
// Execute Action: ListFilter_ByRole
listFilter_ByRoleVar.value = OS.SystemActions.listFilter(listDuplicate_ToFilterVar.value.duplicatedListOut, function (p) {
return (p.roleAttr === vars.value.membersListInLocal.getItem(membersListIndex.valueOf()).roleAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zTFQXNDRIEKYQsioKn9C+A", callContext.id);
// Execute Action: ListDuplicate_ToCycle
listDuplicate_ToCycleVar.value = OS.SystemActions.listDuplicate(listFilter_ByRoleVar.value.filteredListOut, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:myfCYrNUIEuADLRR5QEi7g", callContext.id);
// Execute Action: GroupMembersByCountry
groupMembersByCountryVar.value = Connect2_OrbitMobile_MUIController.default.groupMembersByCountry$Action(listDuplicate_ToCycleVar.value.duplicatedListOut, callContext);

// Set Temp Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Kk5HKEBCxUOrqm21UvbaZg", callContext.id);
// Temp_HelpersByRole.Role = MembersList.Current.Role
vars.value.temp_HelpersByRoleVar.roleAttr = vars.value.membersListInLocal.getItem(membersListIndex.valueOf()).roleAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Kk5HKEBCxUOrqm21UvbaZg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Temp_HelpersByRole.MembersByLocality = GroupMembersByCountry.MembersByLocality
vars.value.temp_HelpersByRoleVar.membersByLocalityAttr = groupMembersByCountryVar.value.membersByLocalityOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DHaTfzlqxEijZAPbBLYTjQ", callContext.id);
// Execute Action: ListAppend_FinalList
OS.SystemActions.listAppend(outVars.value.helpersByRoleOut, vars.value.temp_HelpersByRoleVar, callContext);
}

membersListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.membersListInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5Nz_vXRm20q8om6cN8jJmg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OIr5qlBMpUGFwRDw29BmHA", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GroupHelpersByRole$vars", [{
name: "MembersList",
attrName: "membersListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.EventBookletMembersList();
},
complexType: Connect2_OrbitMobile_MUIModel.EventBookletMembersList
}, {
name: "Temp_HelpersByRole",
attrName: "temp_HelpersByRoleVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.BookletMembers_ByRoleRec();
},
complexType: Connect2_OrbitMobile_MUIModel.BookletMembers_ByRoleRec
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GroupHelpersByRole$outVars", [{
name: "HelpersByRole",
attrName: "helpersByRoleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.BookletMembers_ByRoleList();
},
complexType: Connect2_OrbitMobile_MUIModel.BookletMembers_ByRoleList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.groupHelpersByRole$Action = function (membersListIn) {
membersListIn = (membersListIn === undefined) ? new Connect2_OrbitMobile_MUIModel.EventBookletMembersList() : membersListIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.groupHelpersByRole$Action.bind(controller, membersListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HelpersByRole: actionResults.helpersByRoleOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$GroupMembersByCountry", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_IS.model$EventBookletMembersRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventBookletMembersList", "Connect2_OrbitMobile_MUI.model$BookletMembers_ByLocalityRec", "Connect2_OrbitMobile_MUI.model$BookletMembers_ByLocalityList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.groupMembersByCountry$Action = function (membersListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GroupMembersByCountry$vars"))());
vars.value.membersListInLocal = membersListIn.clone();
var listDuplicate_TempCountry_ToFilterVar = new OS.DataTypes.VariableHolder();
var listFilter_ByCountryVar = new OS.DataTypes.VariableHolder();
var listDuplicate_TempCountry_ToCycleVar = new OS.DataTypes.VariableHolder();
var listFilter_ByLocalityVar = new OS.DataTypes.VariableHolder();
var listIndexOf_ExistingLocalityVar = new OS.DataTypes.VariableHolder();
var listDuplicate_ToFilterVar = new OS.DataTypes.VariableHolder();
var listIndexOf_ExistingDataVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.GroupMembersByCountry$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listDuplicate_TempCountry_ToFilterVar = listDuplicate_TempCountry_ToFilterVar;
varBag.listFilter_ByCountryVar = listFilter_ByCountryVar;
varBag.listDuplicate_TempCountry_ToCycleVar = listDuplicate_TempCountry_ToCycleVar;
varBag.listFilter_ByLocalityVar = listFilter_ByLocalityVar;
varBag.listIndexOf_ExistingLocalityVar = listIndexOf_ExistingLocalityVar;
varBag.listDuplicate_ToFilterVar = listDuplicate_ToFilterVar;
varBag.listIndexOf_ExistingDataVar = listIndexOf_ExistingDataVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:yfSaSIY6d0OSn8uZ7rVmJw:/ClientActionFlows.yfSaSIY6d0OSn8uZ7rVmJw:XTnvGRvEg_GE_edKZKoGPQ", "Connect2_OrbitMobile_MUI", "GroupMembersByCountry", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:j7co8V6U+024ACVOr4E6Yw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SuY3FTeNfUGUjHwe9juvOg", callContext.id);
// Execute Action: ListSort_ByOrderNo
OS.SystemActions.listSort(vars.value.membersListInLocal, function (p) {
return p.orderNoAttr;
}, true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3FBSp8V6gk2UVuBBxBGD8Q", callContext.id);
// Execute Action: ListDuplicate_ToFilter
listDuplicate_ToFilterVar.value = OS.SystemActions.listDuplicate(vars.value.membersListInLocal, callContext);

// Foreach MembersList
callContext.iterationContext.registerIterationStart(vars.value.membersListInLocal);
try {var membersListIterator = callContext.iterationContext.getIterator(vars.value.membersListInLocal);
var membersListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_Odv+Q+mXEe7kv4ucN6YEA", callContext.id) && (membersListIndex < vars.value.membersListInLocal.length))) {
membersListIterator.currentRowNumber = membersListIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:V2_It8R7QkiZnW9xakOLFg", callContext.id);
// Execute Action: ListIndexOf_ExistingData
listIndexOf_ExistingDataVar.value = OS.SystemActions.listIndexOf(outVars.value.membersByLocalityOut, function (p) {
return (p.countryAttr === vars.value.membersListInLocal.getItem(membersListIndex.valueOf()).countryAttr);
}, callContext);

// Already added?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WEoKfSKBlkeNhH5dtl8Bmw", callContext.id) && !(((listIndexOf_ExistingDataVar.value.positionOut) !== (-1))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FyKtT_v6jECrYBc582biKg", callContext.id);
// Execute Action: ListFilter_ByCountry
listFilter_ByCountryVar.value = OS.SystemActions.listFilter(listDuplicate_ToFilterVar.value.duplicatedListOut, function (p) {
return (p.countryAttr === vars.value.membersListInLocal.getItem(membersListIndex.valueOf()).countryAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Lg2BidiWJke1Bwa_l1dkNw", callContext.id);
// Execute Action: ListDuplicate_TempCountry_ToCycle
listDuplicate_TempCountry_ToCycleVar.value = OS.SystemActions.listDuplicate(listFilter_ByCountryVar.value.filteredListOut, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SovHQWBXZU2jrqhc47Sb5A", callContext.id);
// Execute Action: ListDuplicate_TempCountry_ToFilter
listDuplicate_TempCountry_ToFilterVar.value = OS.SystemActions.listDuplicate(listFilter_ByCountryVar.value.filteredListOut, callContext);

// TempCountryList
// Foreach ListDuplicate_TempCountry_ToCycle.DuplicatedList
callContext.iterationContext.registerIterationStart(listDuplicate_TempCountry_ToCycleVar.value.duplicatedListOut);
try {var duplicatedListIterator = callContext.iterationContext.getIterator(listDuplicate_TempCountry_ToCycleVar.value.duplicatedListOut);
var duplicatedListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ur4APH+q4k6uz6orteyEmA", callContext.id) && (duplicatedListIndex < listDuplicate_TempCountry_ToCycleVar.value.duplicatedListOut.length))) {
duplicatedListIterator.currentRowNumber = duplicatedListIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gdDWnS6XVUiQnNcMoIwolQ", callContext.id);
// Execute Action: ListIndexOf_ExistingLocality
listIndexOf_ExistingLocalityVar.value = OS.SystemActions.listIndexOf(vars.value.temp_MembersByCountryVar, function (p) {
return (p.localityAttr === listDuplicate_TempCountry_ToCycleVar.value.duplicatedListOut.getItem(duplicatedListIndex.valueOf()).localityAttr);
}, callContext);

// Already added?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SPDb5QTKaU6LZEkMPTc5WA", callContext.id) && !(((listIndexOf_ExistingLocalityVar.value.positionOut) !== (-1))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:keb8loEkK0a_ft02RnCjCQ", callContext.id);
// Execute Action: ListFilter_ByLocality
listFilter_ByLocalityVar.value = OS.SystemActions.listFilter(listDuplicate_TempCountry_ToFilterVar.value.duplicatedListOut, function (p) {
return (p.localityAttr === listDuplicate_TempCountry_ToCycleVar.value.duplicatedListOut.getItem(duplicatedListIndex.valueOf()).localityAttr);
}, callContext);

// Set Temp Locality Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R1lV5V4fOEuECQru3OwZNg", callContext.id);
// Temp_MembersByLocality.Locality = ListDuplicate_TempCountry_ToCycle.DuplicatedList.Current.Locality
vars.value.temp_MembersByLocalityVar.localityAttr = listDuplicate_TempCountry_ToCycleVar.value.duplicatedListOut.getItem(duplicatedListIndex.valueOf()).localityAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R1lV5V4fOEuECQru3OwZNg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Temp_MembersByLocality.Country = ListDuplicate_TempCountry_ToCycle.DuplicatedList.Current.Country
vars.value.temp_MembersByLocalityVar.countryAttr = listDuplicate_TempCountry_ToCycleVar.value.duplicatedListOut.getItem(duplicatedListIndex.valueOf()).countryAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R1lV5V4fOEuECQru3OwZNg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Temp_MembersByLocality.Members = ListFilter_ByLocality.FilteredList
vars.value.temp_MembersByLocalityVar.membersAttr = listFilter_ByLocalityVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2+3dMTsxLkKk2YqM4L1Jiw", callContext.id);
// Execute Action: ListAppend_TempCountry
OS.SystemActions.listAppend(vars.value.temp_MembersByCountryVar, vars.value.temp_MembersByLocalityVar, callContext);
}

duplicatedListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(listDuplicate_TempCountry_ToCycleVar.value.duplicatedListOut);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GqeO5uL1AE6srNI56Ld6cA", callContext.id);
// Execute Action: ListAppendAll_FinalList
OS.SystemActions.listAppendAll(outVars.value.membersByLocalityOut, vars.value.temp_MembersByCountryVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:32KYWe3eEUyYj9sM+533rw", callContext.id);
// Execute Action: ListClear_TempCountry
OS.SystemActions.listClear(vars.value.temp_MembersByCountryVar, callContext);
}

membersListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.membersListInLocal);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qF0nr8Y7hE6WMDWPjOgC5w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yfSaSIY6d0OSn8uZ7rVmJw", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GroupMembersByCountry$vars", [{
name: "MembersList",
attrName: "membersListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.EventBookletMembersList();
},
complexType: Connect2_OrbitMobile_MUIModel.EventBookletMembersList
}, {
name: "Temp_MembersByLocality",
attrName: "temp_MembersByLocalityVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityRec();
},
complexType: Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityRec
}, {
name: "Temp_MembersByCountry",
attrName: "temp_MembersByCountryVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityList();
},
complexType: Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityList
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.GroupMembersByCountry$outVars", [{
name: "MembersByLocality",
attrName: "membersByLocalityOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityList();
},
complexType: Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.groupMembersByCountry$Action = function (membersListIn) {
membersListIn = (membersListIn === undefined) ? new Connect2_OrbitMobile_MUIModel.EventBookletMembersList() : membersListIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.groupMembersByCountry$Action.bind(controller, membersListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MembersByLocality: actionResults.membersByLocalityOut
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplyFilters", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_ApplyFilterRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ApplyFilters$Action = function (appliedFilterIn, yearFilterIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ApplyFilters$vars"))());
vars.value.appliedFilterInLocal = appliedFilterIn;
vars.value.yearFilterInLocal = yearFilterIn.clone();
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:LvYvQjRj9UGRorQkLamltw:/ClientActionFlows.LvYvQjRj9UGRorQkLamltw:TRu+D46sNFB6xLQERGHlyA", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_ApplyFilters", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kc6xPHO5uUmVICkTL98ozw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Set payload
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9vQdDqdQ5kOR+sWyNGbwfw", callContext.id);
// AuditPayload.AppliedFilter = If
vars.value.auditPayloadVar.appliedFilterAttr = (((vars.value.appliedFilterInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents)) ? ("Past Events") : ((((vars.value.appliedFilterInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents)) ? ("Upcoming Events") : ("Events"))));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9vQdDqdQ5kOR+sWyNGbwfw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AuditPayload.YearFilter = YearFilter
vars.value.auditPayloadVar.yearFilterAttr = vars.value.yearFilterInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hLr3BHnzGkeTv_l65g2Gwg", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadVar, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T+eHDe2xnE2GXf9RHKFL7w", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.applyFilter), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xeSR8E31vE2_JGL6ton1kw", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LvYvQjRj9UGRorQkLamltw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LvYvQjRj9UGRorQkLamltw", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ApplyFilters$vars", [{
name: "AppliedFilter",
attrName: "appliedFilterInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "YearFilter",
attrName: "yearFilterInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.IntegerList();
},
complexType: OS.DataTypes.IntegerList
}, {
name: "AuditPayload",
attrName: "auditPayloadVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_ApplyFilterRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_ApplyFilterRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_ApplyFilters$Action = function (appliedFilterIn, yearFilterIn) {
appliedFilterIn = (appliedFilterIn === undefined) ? 0 : appliedFilterIn;
yearFilterIn = (yearFilterIn === undefined) ? new OS.DataTypes.IntegerList() : yearFilterIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ApplyFilters$Action.bind(controller, appliedFilterIn, yearFilterIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplySortBy", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_ApplySortRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ApplySortBy$Action = function (isASCIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ApplySortBy$vars"))());
vars.value.isASCInLocal = isASCIn;
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:87wqvfVIqEOzEz+3PSCKAg:/ClientActionFlows.87wqvfVIqEOzEz+3PSCKAg:DazdAKTm_mGCJ2CnCx7J_w", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_ApplySortBy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Fq2RKe3dvEynauQzgyaBwg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Set payload
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S3_x0QIW20mMriT8FZlAIQ", callContext.id);
// AuditPayload.AppliedSort = If
vars.value.auditPayloadVar.appliedSortAttr = ((vars.value.isASCInLocal) ? ("Oldest") : ("Newest"));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wd08G_64t0CfNck+YR7Z7A", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadVar, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xed2FLYcskGBZurRYuss1w", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.applySort), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9Qk6rKFcW0WA2o8yJ4SDRg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:87wqvfVIqEOzEz+3PSCKAg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:87wqvfVIqEOzEz+3PSCKAg", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ApplySortBy$vars", [{
name: "IsASC",
attrName: "isASCInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AuditPayload",
attrName: "auditPayloadVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_ApplySortRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_ApplySortRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_ApplySortBy$Action = function (isASCIn) {
isASCIn = (isASCIn === undefined) ? false : isASCIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ApplySortBy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isASCIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_CallMember$Action = function (auditPayloadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_CallMember$vars"))());
vars.value.auditPayloadInLocal = auditPayloadIn.clone();
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gLGBhEcw_Um2QbhmmD6REQ:/ClientActionFlows.gLGBhEcw_Um2QbhmmD6REQ:6081TIjMyXai0D+PkgPZmQ", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_CallMember", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_w1DwpvHEkOFaKpDBmgPCw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0oubmmVe_0Skt4WztrRPdg", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Fsr2PwqN7Ua2wKkheToq_w", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.callMember), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O7gh4ki_8UGrzdIuPF2fHg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gLGBhEcw_Um2QbhmmD6REQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gLGBhEcw_Um2QbhmmD6REQ", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_CallMember$vars", [{
name: "AuditPayload",
attrName: "auditPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_CallMemberRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_CallMemberRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_CallMember$Action = function (auditPayloadIn) {
auditPayloadIn = (auditPayloadIn === undefined) ? new Connect2_OrbitMobile_MUIModel.AuditPayload_CallMemberRec() : auditPayloadIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_CallMember$Action.bind(controller, auditPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickEventRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ClickEvent$Action = function (auditPayloadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ClickEvent$vars"))());
vars.value.auditPayloadInLocal = auditPayloadIn.clone();
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hD9K2QxhTEGQwFCgM3HgaA:/ClientActionFlows.hD9K2QxhTEGQwFCgM3HgaA:xah_ZFRdOfcMcfLjscek7w", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_ClickEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:l0W2wYHkH0moZE5iQ+zXlw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_He+86ZVfEK_pnApmNRTwA", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jn92W5S4Q026gHjUPkVSCA", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.clickEvent), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sCo6mz2ZoUGw600TZvCulw", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hD9K2QxhTEGQwFCgM3HgaA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hD9K2QxhTEGQwFCgM3HgaA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ClickEvent$vars", [{
name: "AuditPayload",
attrName: "auditPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_ClickEventRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_ClickEventRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_ClickEvent$Action = function (auditPayloadIn) {
auditPayloadIn = (auditPayloadIn === undefined) ? new Connect2_OrbitMobile_MUIModel.AuditPayload_ClickEventRec() : auditPayloadIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ClickEvent$Action.bind(controller, auditPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickMilestone", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickMilestoneRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ClickMilestone$Action = function (auditPayloadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ClickMilestone$vars"))());
vars.value.auditPayloadInLocal = auditPayloadIn.clone();
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:_Eu3boZl2kORwpmqkcP6MA:/ClientActionFlows._Eu3boZl2kORwpmqkcP6MA:PqxN31C0zpTqnsDYyE+UrQ", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_ClickMilestone", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5zku0Q8OT0uCsbnHeg7UJA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XFybbBC7WUGop3UmQTzjlg", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q3bfAVafF0aNhBzYKbx7gg", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.clickMilestone), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4mwIHo855kiGFn0o5xq13g", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:_Eu3boZl2kORwpmqkcP6MA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:_Eu3boZl2kORwpmqkcP6MA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ClickMilestone$vars", [{
name: "AuditPayload",
attrName: "auditPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_ClickMilestoneRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_ClickMilestoneRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_ClickMilestone$Action = function (auditPayloadIn) {
auditPayloadIn = (auditPayloadIn === undefined) ? new Connect2_OrbitMobile_MUIModel.AuditPayload_ClickMilestoneRec() : auditPayloadIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ClickMilestone$Action.bind(controller, auditPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ContactHelpdesk", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_ContactHelpdeskRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ContactHelpdesk$Action = function (auditPayloadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ContactHelpdesk$vars"))());
vars.value.auditPayloadInLocal = auditPayloadIn.clone();
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:kRYUl5LOJ0mfx8YW0ake5w:/ClientActionFlows.kRYUl5LOJ0mfx8YW0ake5w:Q9Xrsw5+PusSQmYCpx+T_Q", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_ContactHelpdesk", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EL1ycusakUKTDxUaySYKbw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VzcdHOR2t0mvfo52S6MvAQ", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:59b1Kt93zkuTW6Gwigu13Q", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.contactHelpdesk), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:czF9XczsI0u_VvHE8dRrsQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:kRYUl5LOJ0mfx8YW0ake5w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:kRYUl5LOJ0mfx8YW0ake5w", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ContactHelpdesk$vars", [{
name: "AuditPayload",
attrName: "auditPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_ContactHelpdeskRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_ContactHelpdeskRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_ContactHelpdesk$Action = function (auditPayloadIn) {
auditPayloadIn = (auditPayloadIn === undefined) ? new Connect2_OrbitMobile_MUIModel.AuditPayload_ContactHelpdeskRec() : auditPayloadIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ContactHelpdesk$Action.bind(controller, auditPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_EmailHost", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_EmailHostRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_EmailHost$Action = function (auditPayloadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_EmailHost$vars"))());
vars.value.auditPayloadInLocal = auditPayloadIn.clone();
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:OeQpgsQ_HEm8Dy5EiKfAeA:/ClientActionFlows.OeQpgsQ_HEm8Dy5EiKfAeA:C3SO5bmzcULsfl9oP+Nc_w", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_EmailHost", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EcSYTXpQx0OZmkzJuokaog", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fs6EKUiJ1kOME3sVPdQMIw", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WIkYFAMkaUWDoYFZKVXrOg", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.emailHost), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SGl+RUn5qUaOW1KYpbQTyg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OeQpgsQ_HEm8Dy5EiKfAeA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OeQpgsQ_HEm8Dy5EiKfAeA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_EmailHost$vars", [{
name: "AuditPayload",
attrName: "auditPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_EmailHostRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_EmailHostRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_EmailHost$Action = function (auditPayloadIn) {
auditPayloadIn = (auditPayloadIn === undefined) ? new Connect2_OrbitMobile_MUIModel.AuditPayload_EmailHostRec() : auditPayloadIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_EmailHost$Action.bind(controller, auditPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_GenerateQRCode", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_GenerateQRCodeRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_GenerateQRCode$Action = function (auditPayloadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_GenerateQRCode$vars"))());
vars.value.auditPayloadInLocal = auditPayloadIn.clone();
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:grBToU+LJEmiB98XiurNxA:/ClientActionFlows.grBToU+LJEmiB98XiurNxA:r9CLACw2VCVx1gVlKiHzjw", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_GenerateQRCode", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uSLlmlkee0axCmgO5mSm6w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:U0+Y+ShHJ0CmzlPbQwW0kQ", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KqzhszBbXkq3lldzPUf0dA", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.generateQRCode), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HOn4TOnACE+TJeX7KYLVEA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:grBToU+LJEmiB98XiurNxA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:grBToU+LJEmiB98XiurNxA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_GenerateQRCode$vars", [{
name: "AuditPayload",
attrName: "auditPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_GenerateQRCodeRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_GenerateQRCodeRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_GenerateQRCode$Action = function (auditPayloadIn) {
auditPayloadIn = (auditPayloadIn === undefined) ? new Connect2_OrbitMobile_MUIModel.AuditPayload_GenerateQRCodeRec() : auditPayloadIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_GenerateQRCode$Action.bind(controller, auditPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_LaunchQRCodeScanner", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_LaunchQRCodeScannerRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_LaunchQRCodeScanner$Action = function (auditPayloadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_LaunchQRCodeScanner$vars"))());
vars.value.auditPayloadInLocal = auditPayloadIn.clone();
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Oj8+MhjTbU+J_ntmuIafLQ:/ClientActionFlows.Oj8+MhjTbU+J_ntmuIafLQ:NyMxdQ0HHK5w1IoBLNI5kw", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_LaunchQRCodeScanner", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LJtdb4O8e0+73f7m6WymlA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BOB9e_HZukew28QcOO5bOw", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iQO5tNjRRE+bHelITQI2ew", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.launchQRCodeScanner), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9saTNooaA0aKJxPkfj2FpA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Oj8+MhjTbU+J_ntmuIafLQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Oj8+MhjTbU+J_ntmuIafLQ", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_LaunchQRCodeScanner$vars", [{
name: "AuditPayload",
attrName: "auditPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_LaunchQRCodeScannerRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_LaunchQRCodeScannerRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_LaunchQRCodeScanner$Action = function (auditPayloadIn) {
auditPayloadIn = (auditPayloadIn === undefined) ? new Connect2_OrbitMobile_MUIModel.AuditPayload_LaunchQRCodeScannerRec() : auditPayloadIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_LaunchQRCodeScanner$Action.bind(controller, auditPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_QRCodeScanned", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_QRCodeScannedRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_QRCodeScanned$Action = function (auditPayloadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_QRCodeScanned$vars"))());
vars.value.auditPayloadInLocal = auditPayloadIn.clone();
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:BKwIcksYAEmSduQqNEiXpA:/ClientActionFlows.BKwIcksYAEmSduQqNEiXpA:lfs4meOLD2Ly7n8r7WGVTA", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_QRCodeScanned", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M631XRcCY0uUocpUYigskA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Srk5IeJoLUWdIOiDbGTJWA", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4lywJGblsUmwE_0n+ix40g", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.qRCodeScanned), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Udt8Y2oo9UOw+EP9Ad1f5g", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BKwIcksYAEmSduQqNEiXpA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BKwIcksYAEmSduQqNEiXpA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_QRCodeScanned$vars", [{
name: "AuditPayload",
attrName: "auditPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_QRCodeScannedRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_QRCodeScannedRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_QRCodeScanned$Action = function (auditPayloadIn) {
auditPayloadIn = (auditPayloadIn === undefined) ? new Connect2_OrbitMobile_MUIModel.AuditPayload_QRCodeScannedRec() : auditPayloadIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_QRCodeScanned$Action.bind(controller, auditPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_SwitchMember", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_SwitchMemberRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_SwitchMember$Action = function (auditPayloadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_SwitchMember$vars"))());
vars.value.auditPayloadInLocal = auditPayloadIn.clone();
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:eYKR3lmRl06RQgBJli8zug:/ClientActionFlows.eYKR3lmRl06RQgBJli8zug:cFHlMWtgi3xxJntDnTdO0g", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_SwitchMember", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZuCVuXIUI06BsckP7wggDw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s5+xDPu1tUOY8SRvOC71Mg", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:68f7th8Wf0W0QN_mXVaaCw", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.switchMember), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0CfPutC_SE+eZucoE48zlA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:eYKR3lmRl06RQgBJli8zug", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:eYKR3lmRl06RQgBJli8zug", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_SwitchMember$vars", [{
name: "AuditPayload",
attrName: "auditPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_SwitchMemberRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_SwitchMemberRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_SwitchMember$Action = function (auditPayloadIn) {
auditPayloadIn = (auditPayloadIn === undefined) ? new Connect2_OrbitMobile_MUIModel.AuditPayload_SwitchMemberRec() : auditPayloadIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_SwitchMember$Action.bind(controller, auditPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ViewHousehold$Action = function (auditPayloadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ViewHousehold$vars"))());
vars.value.auditPayloadInLocal = auditPayloadIn.clone();
var jSONSerialize_AuditPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_AuditPayloadVar = jSONSerialize_AuditPayloadVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:rCOdXmarMEO7UJpR1LFIag:/ClientActionFlows.rCOdXmarMEO7UJpR1LFIag:iZF46M6hllC3VRZhfxR1FQ", "Connect2_OrbitMobile_MUI", "OnApplicationEvent_ViewHousehold", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pdjeu0QroUep+T+ZQFP0jQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+zvNQZ3W0EK2WGSEduz9eg", callContext.id);
// JSON Serialize: JSONSerialize_AuditPayload
jSONSerialize_AuditPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditPayloadInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zRpTvEIjoUSLCK0e0XbaCg", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Orbit.viewHousehold), jSONSerialize_AuditPayloadVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VW1zzjjz5E6Hs0Oe2+9WVA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rCOdXmarMEO7UJpR1LFIag", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rCOdXmarMEO7UJpR1LFIag", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OnApplicationEvent_ViewHousehold$vars", [{
name: "AuditPayload",
attrName: "auditPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.AuditPayload_ViewHouseholdRec();
},
complexType: Connect2_OrbitMobile_MUIModel.AuditPayload_ViewHouseholdRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.onApplicationEvent_ViewHousehold$Action = function (auditPayloadIn) {
auditPayloadIn = (auditPayloadIn === undefined) ? new Connect2_OrbitMobile_MUIModel.AuditPayload_ViewHouseholdRec() : auditPayloadIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ViewHousehold$Action.bind(controller, auditPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$OpenDocument", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "CommonPlugin.model", "FileTransferPlugin.controller", "FileViewerPlugin.controller", "FilePlugin.controller", "Connect2_OrbitMobile_MUI.controller$OpenDocument.CheckForCordovaJS", "Connect2_OrbitMobile_MUI.controller$OpenDocument.OpenInNewTabJS", "Connect2_OrbitMobile_MUI.controller$OpenDocument.OpenInSystemBrowserJS", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.controller$OpenDocumentInFileViewer", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "CommonPlugin.model$WarningRec", "FileTransferPlugin.controller$CheckFileTransferPlugin", "Connect2_OrbitMobile_MUI.referencesHealth$FileTransferPlugin", "FileViewerPlugin.controller$CheckFileViewerPlugin", "Connect2_OrbitMobile_MUI.referencesHealth$FileViewerPlugin", "FilePlugin.controller$CheckFilePlugin", "Connect2_OrbitMobile_MUI.referencesHealth$FilePlugin"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, CommonPluginModel, FileTransferPluginController, FileViewerPluginController, FilePluginController, Connect2_OrbitMobile_MUI_controller_OpenDocument_CheckForCordovaJS, Connect2_OrbitMobile_MUI_controller_OpenDocument_OpenInNewTabJS, Connect2_OrbitMobile_MUI_controller_OpenDocument_OpenInSystemBrowserJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.openDocument$Action = function (urlIn, filenameIn, contentTypeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OpenDocument$vars"))());
vars.value.urlInLocal = urlIn;
vars.value.filenameInLocal = filenameIn;
vars.value.contentTypeInLocal = contentTypeIn;
var openDocumentInFileViewerVar = new OS.DataTypes.VariableHolder();
var checkFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var checkFileViewerPluginVar = new OS.DataTypes.VariableHolder();
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var checkForCordovaJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OpenDocument$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.openDocumentInFileViewerVar = openDocumentInFileViewerVar;
varBag.checkFileTransferPluginVar = checkFileTransferPluginVar;
varBag.checkFileViewerPluginVar = checkFileViewerPluginVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.checkForCordovaJSResult = checkForCordovaJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:NKUgzn1okEacdbRP3tn1uA:/ClientActionFlows.NKUgzn1okEacdbRP3tn1uA:S70bZENMUXA14IdQNDfnwA", "Connect2_OrbitMobile_MUI", "OpenDocument", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DNAcPaj1OUyio9zc3Yjg1w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Za6_j2BXNU2p91f4eAZ1dw", callContext.id) && ((vars.value.urlInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4wTODhxc_EeVnbgtjJ1pwQ", callContext.id);
checkForCordovaJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_OpenDocument_CheckForCordovaJS, "CheckForCordova", "OpenDocument", {
HasCordova: OS.DataConversion.JSNodeParamConverter.to(true, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OpenDocument$checkForCordovaJSResult"))();
jsNodeResult.hasCordovaOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasCordova, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Has Cordova?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JorcvVxfNEy7OYv+MmhCcw", callContext.id) && checkForCordovaJSResult.value.hasCordovaOut)) {
// Is PDFs?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:C8aoBKANBEeOY1Ra7a8gKQ", callContext.id) && (vars.value.contentTypeInLocal === "application/pdf"))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1FS5yWVYbk+MVddoWRpwkw", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8YVxpC_V3E+zl3Z4FmBzkA", callContext.id);
// Execute Action: CheckFileTransferPlugin
return FileTransferPluginController.default.checkFileTransferPlugin$Action(callContext).then(function (value) {
checkFileTransferPluginVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pjv5u8GPhUWYDTKkfN2hjw", callContext.id);
// Execute Action: CheckFileViewerPlugin
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkFileViewerPluginVar.value = value;
});
}).then(function () {
// All plugins available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:enR+Kf7yIUWZoDGl9mGe7w", callContext.id) && ((checkFilePluginVar.value.isAvailableOut && checkFileTransferPluginVar.value.isAvailableOut) && checkFileViewerPluginVar.value.isAvailableOut))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KxcrklVhnEqvdeyZ4wY3CA", callContext.id);
// Execute Action: OpenDocumentInFileViewer
return Connect2_OrbitMobile_MUIController.default.openDocumentInFileViewer$Action(vars.value.urlInLocal, vars.value.filenameInLocal, callContext).then(function (value) {
openDocumentInFileViewerVar.value = value;
}).then(function () {
// Set Errors Feedback
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BxELJOjOTEyebybiDn5NnA", callContext.id);
// HasError = OpenDocumentInFileViewer.HasError
outVars.value.hasErrorOut = openDocumentInFileViewerVar.value.hasErrorOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BxELJOjOTEyebybiDn5NnA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = OpenDocumentInFileViewer.ErrorMessage
outVars.value.errorMessageOut = openDocumentInFileViewerVar.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E0gCOyPAA0umLnUQsAUgrg", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

});
});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:A8oTXlq_YUORSms1qXBjLA", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_OpenDocument_OpenInSystemBrowserJS, "OpenInSystemBrowser", "OpenDocument", {
Url: OS.DataConversion.JSNodeParamConverter.to(vars.value.urlInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tijedXv28EiWT+vwMtCbGw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mq+IQUOpOUyzaZGjBbtgfw", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_OpenDocument_OpenInNewTabJS, "OpenInNewTab", "OpenDocument", {
Url: OS.DataConversion.JSNodeParamConverter.to(vars.value.urlInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tijedXv28EiWT+vwMtCbGw", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cs0JS5NlbEKv4VrLHCQYCA", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:NKUgzn1okEacdbRP3tn1uA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:NKUgzn1okEacdbRP3tn1uA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OpenDocument$vars", [{
name: "Url",
attrName: "urlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Filename",
attrName: "filenameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ContentType",
attrName: "contentTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OpenDocument$checkForCordovaJSResult", [{
name: "HasCordova",
attrName: "hasCordovaOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OpenDocument$outVars", [{
name: "HasError",
attrName: "hasErrorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.openDocument$Action = function (urlIn, filenameIn, contentTypeIn) {
urlIn = (urlIn === undefined) ? "" : urlIn;
filenameIn = (filenameIn === undefined) ? "" : filenameIn;
contentTypeIn = (contentTypeIn === undefined) ? "" : contentTypeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.openDocument$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(urlIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(filenameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(contentTypeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasErrorOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$OpenDocument.CheckForCordovaJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (!window.cordova){
    // Open URL directly in a new browser tab
    $parameters.HasCordova = false;
}
};
});
define("Connect2_OrbitMobile_MUI.controller$OpenDocument.OpenInNewTabJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(() => {
    window.open($parameters.Url, "_blank");
},0)
};
});
define("Connect2_OrbitMobile_MUI.controller$OpenDocument.OpenInSystemBrowserJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.cordova.InAppBrowser.open($parameters.Url, "_system");
};
});

define("Connect2_OrbitMobile_MUI.controller$OpenDocumentInFileViewer", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "FileTransferPlugin.model", "CommonPlugin.model", "FileTransferPlugin.controller", "FilePlugin.model", "FilePlugin.controller", "Connect2_OrbitMobile_MUI.clientVariables", "FileTransferPlugin.model$HeaderRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$FileTransferPlugin", "Connect2_OrbitMobile_MUI.model$HeaderList", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "FileTransferPlugin.controller$DownloadFile", "FilePlugin.model$FileInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$FilePlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$GetMetadata", "FilePlugin.controller$CreateDirectory", "Connect2_OrbitMobile_MUI.controller$AddExtensionToFile"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, FileTransferPluginModel, CommonPluginModel, FileTransferPluginController, FilePluginModel, FilePluginController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.openDocumentInFileViewer$Action = function (urlIn, filenameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OpenDocumentInFileViewer$vars"))());
vars.value.urlInLocal = urlIn;
vars.value.filenameInLocal = filenameIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var downloadFileVar = new OS.DataTypes.VariableHolder();
var getMetadataVar = new OS.DataTypes.VariableHolder();
var createDirectoryVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.OpenDocumentInFileViewer$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.downloadFileVar = downloadFileVar;
varBag.getMetadataVar = getMetadataVar;
varBag.createDirectoryVar = createDirectoryVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KLAekHCtcEOICvqB8z8WoQ:/ClientActionFlows.KLAekHCtcEOICvqB8z8WoQ:WjK1BuDOwJowPDToBCD9ZA", "Connect2_OrbitMobile_MUI", "OpenDocumentInFileViewer", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UhO5HUdds0CCJPqbU9T_NA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fQNR0r9VLUuI4Ft8rpMR0A", callContext.id);
// Execute Action: CreateDirectory
return FilePluginController.default.createDirectory$Action("orbit-documents", Connect2_OrbitMobile_MUIModel.staticEntities.pathDirectory.cACHE, true, callContext).then(function (value) {
createDirectoryVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:B7x2j_oYtESjr7wCAbw4Zw", callContext.id);
// Execute Action: GetMetadata
return FilePluginController.default.getMetadata$Action("orbit-documents", Connect2_OrbitMobile_MUIModel.staticEntities.pathDirectory.cACHE, callContext).then(function (value) {
getMetadataVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CG0u23S3jkWmeEs6a3jd3g", callContext.id);
// DownloadFolderURI = GetMetadata.Result.URI
vars.value.downloadFolderURIVar = getMetadataVar.value.resultOut.uRIAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Vp5Lp+NYG06HT9LYuzf4jw", callContext.id);
// FilePath = DownloadFolderURI + "/" + AddExtensionToFile(Filename, PDF)
vars.value.filePathVar = ((vars.value.downloadFolderURIVar + "/") + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.addExtensionToFile$Action(vars.value.filenameInLocal, Connect2_OrbitMobile_MUIModel.staticEntities.fileExtension.pDF, callContext).fileWithExtensionOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BYgrBChIIUK_SWYa+DENlw", callContext.id);
// Execute Action: DownloadFile
return FileTransferPluginController.default.downloadFile$Action(vars.value.urlInLocal, vars.value.filePathVar, new Connect2_OrbitMobile_MUIModel.HeaderList(), callContext).then(function (value) {
downloadFileVar.value = value;
});
}).then(function () {
// HasDownloadError
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wLcqYYUix0yT+4_4Ke9pVA", callContext.id) && ((downloadFileVar.value.errorOut.errorCodeAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set Error
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dJPH5wY6+0GxR25M2DiToQ", callContext.id);
// HasError = True
outVars.value.hasErrorOut = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dJPH5wY6+0GxR25M2DiToQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = "Unfortunately this file could not be opened. Please try again at a later time."
outVars.value.errorMessageOut = "Unfortunately this file could not be opened. Please try again at a later time.";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P+f7Rh7cVEiMn+KCBYIkvw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:geC0hIzaGkyu3yt5oBNEXw", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("OpenDocumentInFileViewer.OpenDocumentInFileViewer", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yEme5ap3Ik6VsoB9uYhqxg", callContext.id);
// Document not found?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fCjaTGndD0yvJ3hbDMll8g", callContext.id) && (allExceptionsVar.value.exceptionMessageAttr === "Document not found"))) {
// Set Error
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DS+VNZWAy0uOVgT0K1k4uA", callContext.id);
// HasError = True
outVars.value.hasErrorOut = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DS+VNZWAy0uOVgT0K1k4uA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = "The file you are trying to open is no longer available and cannot be opened."
outVars.value.errorMessageOut = "The file you are trying to open is no longer available and cannot be opened.";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oOLnqAo3yUm4yQuqIqibJg", callContext.id);
return OS.Flow.returnAsync(outVars.value);

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pGK_FrwDmUiSLD05EOR+3Q", callContext.id);
// Raise Error: UnknownError
throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
}

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KLAekHCtcEOICvqB8z8WoQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KLAekHCtcEOICvqB8z8WoQ", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OpenDocumentInFileViewer$vars", [{
name: "Url",
attrName: "urlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Filename",
attrName: "filenameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DownloadFolderURI",
attrName: "downloadFolderURIVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FilePath",
attrName: "filePathVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.OpenDocumentInFileViewer$outVars", [{
name: "HasError",
attrName: "hasErrorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.openDocumentInFileViewer$Action = function (urlIn, filenameIn) {
urlIn = (urlIn === undefined) ? "" : urlIn;
filenameIn = (filenameIn === undefined) ? "" : filenameIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.openDocumentInFileViewer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(urlIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(filenameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasErrorOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$ScrollContent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$ScrollContent.ScrollContentJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_ScrollContent_ScrollContentJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.scrollContent$Action = function (scrollPixelsIn, timeoutIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ScrollContent$vars"))());
vars.value.scrollPixelsInLocal = scrollPixelsIn;
vars.value.timeoutInLocal = timeoutIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:4dEt5BRI_0KhLkvNhHIoSA:/ClientActionFlows.4dEt5BRI_0KhLkvNhHIoSA:q2PQVHC6aIlCUG1wuR2KeQ", "Connect2_OrbitMobile_MUI", "ScrollContent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9UXU69mxZECID_cNFnRYaQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SSi0LP9B80alBAWuMUnkpw", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_ScrollContent_ScrollContentJS, "ScrollContent", "ScrollContent", {
Timeout: OS.DataConversion.JSNodeParamConverter.to(vars.value.timeoutInLocal, OS.DataTypes.DataTypes.Integer),
PixelsToScroll: OS.DataConversion.JSNodeParamConverter.to(vars.value.scrollPixelsInLocal, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:to2JfCbb1Um3ihsqyGKLgw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:4dEt5BRI_0KhLkvNhHIoSA", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ScrollContent$vars", [{
name: "ScrollPixels",
attrName: "scrollPixelsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 1;
}
}, {
name: "Timeout",
attrName: "timeoutInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.scrollContent$Action = function (scrollPixelsIn, timeoutIn) {
scrollPixelsIn = (scrollPixelsIn === undefined) ? 1 : scrollPixelsIn;
timeoutIn = (timeoutIn === undefined) ? 0 : timeoutIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.scrollContent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(scrollPixelsIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(timeoutIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$ScrollContent.ScrollContentJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function scrollContent(){
    var content = document.querySelector(".content");
    if(content){
        content.scrollTo({
            "top": content.scrollTop = 0 ? "-" + $parameters.PixelsToScroll : $parameters.PixelsToScroll,
            "behavior":"instant"
        });
    }else{
        window.setTimeout(scrollContent,10);
    }
}

if($parameters.Timeout !== 0) {
    window.setTimeout(scrollContent,$parameters.Timeout);
}else{
    scrollContent();
}
};
});

define("Connect2_OrbitMobile_MUI.controller$ScrollContentToTop", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$ScrollContentToTop.ScrollContentToTopJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_ScrollContentToTop_ScrollContentToTopJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.scrollContentToTop$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Z3M1iSSdT0u_HDyVHzt+kw:/ClientActionFlows.Z3M1iSSdT0u_HDyVHzt+kw:hYWp4ky1xkj5cGvoQjzbmA", "Connect2_OrbitMobile_MUI", "ScrollContentToTop", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M_b1XvJgNEKO6kd5eWlPNg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GjwvO0VAMkSKN8g2nEFXbg", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_ScrollContentToTop_ScrollContentToTopJS, "ScrollContentToTop", "ScrollContentToTop", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NEv6HLK1OUmZlrXHeSXgjA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Z3M1iSSdT0u_HDyVHzt+kw", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.clientActionProxies.scrollContentToTop$Action = function () {
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.scrollContentToTop$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$ScrollContentToTop.ScrollContentToTopJS", [], function () {
return function ($actions, $roles, $public) {
function scrollContent(){
    var content = document.querySelector(".content");
    if(content){
        content.scrollTo(
            {
                "top": 0,
                "behavior": "instant"
            }
        );
    }
}

scrollContent();
};
});

define("Connect2_OrbitMobile_MUI.controller$Set_BookletGuestsMaxRows", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.controller$ServerAction.GetBookletGuestsMaxRows"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.set_BookletGuestsMaxRows$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getBookletGuestsMaxRowsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getBookletGuestsMaxRowsVar = getBookletGuestsMaxRowsVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:vMUK7A6Vkk6mLJ+xUkY6zg:/ClientActionFlows.vMUK7A6Vkk6mLJ+xUkY6zg:dmChwATIfVmLsMe20DPOgA", "Connect2_OrbitMobile_MUI", "Set_BookletGuestsMaxRows", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0U7vyy6hrkqs8YiangIz2w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zaLXQVLGEEuzakjXJSn6TA", callContext.id);
// Execute Action: GetBookletGuestsMaxRows
return controller.getBookletGuestsMaxRows$ServerAction(callContext).then(function (value) {
getBookletGuestsMaxRowsVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O2a5XLL1ikCFnlEaba02lw", callContext.id);
// BookletGuestsMaxRows = GetBookletGuestsMaxRows.BookletGuestsMaxRows
Connect2_OrbitMobile_MUIClientVariables.setBookletGuestsMaxRows(getBookletGuestsMaxRowsVar.value.bookletGuestsMaxRowsOut);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WWDkWzriAEq36FhzUWRuqA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vMUK7A6Vkk6mLJ+xUkY6zg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vMUK7A6Vkk6mLJ+xUkY6zg", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.clientActionProxies.set_BookletGuestsMaxRows$Action = function () {
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.set_BookletGuestsMaxRows$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$Set_BookletHelpersMaxRows", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.controller$ServerAction.GetBookletHelpersMaxRows"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.set_BookletHelpersMaxRows$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getBookletHelpersMaxRowsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getBookletHelpersMaxRowsVar = getBookletHelpersMaxRowsVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:w4eHYPqi1EmZbIxpgpjQaQ:/ClientActionFlows.w4eHYPqi1EmZbIxpgpjQaQ:DolQh0FgsClhNBfugKxKLA", "Connect2_OrbitMobile_MUI", "Set_BookletHelpersMaxRows", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Fcyuwx+Qi0G31Ze2vpPUNg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o2lnOZlO9kiCs+Sw2q6gWw", callContext.id);
// Execute Action: GetBookletHelpersMaxRows
return controller.getBookletHelpersMaxRows$ServerAction(callContext).then(function (value) {
getBookletHelpersMaxRowsVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hxNKnm79y0asfuYE+Ljq9g", callContext.id);
// BookletHelpersMaxRows = GetBookletHelpersMaxRows.BookletHelpersMaxRows
Connect2_OrbitMobile_MUIClientVariables.setBookletHelpersMaxRows(getBookletHelpersMaxRowsVar.value.bookletHelpersMaxRowsOut);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qwsKfQfh2kG+Tk0GMigRvA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:w4eHYPqi1EmZbIxpgpjQaQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:w4eHYPqi1EmZbIxpgpjQaQ", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.clientActionProxies.set_BookletHelpersMaxRows$Action = function () {
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.set_BookletHelpersMaxRows$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SetBookletMaxRows", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.controller$Set_BookletGuestsMaxRows", "Connect2_OrbitMobile_MUI.controller$Set_BookletHelpersMaxRows"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.setBookletMaxRows$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:WE9fHcOIf0yYKiAvT9sh5g:/ClientActionFlows.WE9fHcOIf0yYKiAvT9sh5g:Udv8IuhSG9bnTpTUALsV0A", "Connect2_OrbitMobile_MUI", "SetBookletMaxRows", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9SSmCsSc2U2loxIG4SyU8Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fkC7Vr5s5UmCUBh0DNyWXg", callContext.id);
// Execute Action: Set_BookletGuestsMaxRows
return Connect2_OrbitMobile_MUIController.default.set_BookletGuestsMaxRows$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NVpywTiyOE6AQ4hl2Sptqw", callContext.id);
// Execute Action: Set_BookletHelpersMaxRows
return Connect2_OrbitMobile_MUIController.default.set_BookletHelpersMaxRows$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DWv91JUcgkOdH6CoZisjgw", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:WE9fHcOIf0yYKiAvT9sh5g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:WE9fHcOIf0yYKiAvT9sh5g", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.clientActionProxies.setBookletMaxRows$Action = function () {
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.setBookletMaxRows$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncAllOrbitStaticEntities", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_BL.model$SurveyStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$SurveyStatusList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitSurveyStatus", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_MUI.model$OrbitEventTypeList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitEventTypes", "Connect2_OrbitMobile_BL.model$HelperStatusRec", "Connect2_OrbitMobile_MUI.model$HelperStatusList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitHelperStatus", "Connect2_OrbitMobile_BL.model$VehicleOwnerRec", "Connect2_OrbitMobile_MUI.model$VehicleOwnerList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitVehicleOwner", "Connect2_OrbitMobile_BL.model$VehicleTypeRec", "Connect2_OrbitMobile_MUI.model$VehicleTypeList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitVehicleType", "Connect2_OrbitMobile_BL.model$GenderPreferenceRec", "Connect2_OrbitMobile_MUI.model$GenderPreferenceList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitGenderPreference", "Connect2_OrbitMobile_BL.model$MealTypeRec", "Connect2_OrbitMobile_MUI.model$MealTypeList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitMealType", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.model$OrbitMilestoneTypeList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitMilestoneTypes", "Connect2_OrbitMobile_BL.model$BedSizeRec", "Connect2_OrbitMobile_MUI.model$BedSizeList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitBedSize", "UBTConnect_Utils.controller$GetHasOrbitHostSurvey", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$HostSurveyStepList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitSurveyStep", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitHelperRoles", "Connect2_OrbitMobile_BL.model$HouseFloorRec", "Connect2_OrbitMobile_MUI.model$HouseFloorList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitHouseFloor", "Connect2_OrbitMobile_BL.model$HelperRoleRec", "Connect2_OrbitMobile_MUI.model$HelperRoleList", "Connect2_OrbitMobile_MUI.model$StaticEntities_OrbitRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncAllOrbitStaticEntities$Action = function (orbitStaticEntitiesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncAllOrbitStaticEntities$vars"))());
vars.value.orbitStaticEntitiesInLocal = orbitStaticEntitiesIn.clone();
var getHasOrbitHostSurveyVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasOrbitHostSurveyVar = getHasOrbitHostSurveyVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:tq8NorWMBkiTJ41sUlLldw:/ClientActionFlows.tq8NorWMBkiTJ41sUlLldw:Gc2K2LO0GlSYZ7kY5PAs9A", "Connect2_OrbitMobile_MUI", "SyncAllOrbitStaticEntities", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lToalQchJkOcMqQlp5LJgw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Event data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G2MDRRTW_kexzwrAtq+6Tw", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.orbitEventTypesAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HbRGImeTx06OHqFTj0YZ3g", callContext.id);
// Execute Action: SyncOrbitEventTypes
return Connect2_OrbitMobile_MUIController.default.syncOrbitEventTypes$Action(vars.value.orbitStaticEntitiesInLocal.orbitEventTypesAttr, callContext);
}

}).then(function () {
// Has Milestone data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DJFbNLqMbUuNmQ35aYU3_w", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.orbitMilestoneTypesAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nO+Uvr1EU0WTflU_09eplA", callContext.id);
// Execute Action: SyncOrbitMilestoneTypes
return Connect2_OrbitMobile_MUIController.default.syncOrbitMilestoneTypes$Action(vars.value.orbitStaticEntitiesInLocal.orbitMilestoneTypesAttr, callContext);
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iXvK1LBZ9UOTbZEpxCYjcA", callContext.id);
// Execute Action: GetHasOrbitHostSurvey
getHasOrbitHostSurveyVar.value = UBTConnect_UtilsController.default.getHasOrbitHostSurvey$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:naYh0XvMLk6Ta6kpcmsSNQ", callContext.id) && getHasOrbitHostSurveyVar.value.hasOrbitHostSurveyOut)) {
// Has Survey Steps?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SdEP8J0faUiISl8vr3xUUA", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.hostSurveyStepAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jzvd1y0kd0+Wi_vp2mNGnA", callContext.id);
// Execute Action: SyncOrbitSurveyStep
return Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStep$Action(vars.value.orbitStaticEntitiesInLocal.hostSurveyStepAttr, callContext);
}

}).then(function () {
// Has Bed Sizes?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fmq8vFHV9EWWVKvTMRCPwQ", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.orbitBedSizeAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TPLC1N+8jk+7vuGbFvDThA", callContext.id);
// Execute Action: SyncOrbitBedSize
return Connect2_OrbitMobile_MUIController.default.syncOrbitBedSize$Action(vars.value.orbitStaticEntitiesInLocal.orbitBedSizeAttr, callContext);
}

});
}).then(function () {
// Has Gender Preferences?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RfuXiBRF_06grjG5zKBMRg", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.orbitGenderPreferenceAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9XuZd8Ycyk6XAxbkd2tb2w", callContext.id);
// Execute Action: SyncOrbitGenderPreference
return Connect2_OrbitMobile_MUIController.default.syncOrbitGenderPreference$Action(vars.value.orbitStaticEntitiesInLocal.orbitGenderPreferenceAttr, callContext);
}

});
}).then(function () {
// Has Floors?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i1uLGTr27E6MgSOiYppiyw", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.orbitHouseFloorAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a+057j+zBUiH+rNSBNqtwg", callContext.id);
// Execute Action: SyncOrbitHouseFloor
return Connect2_OrbitMobile_MUIController.default.syncOrbitHouseFloor$Action(vars.value.orbitStaticEntitiesInLocal.orbitHouseFloorAttr, callContext);
}

});
}).then(function () {
// Has Vehicle Owners?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yMwMvGgLk02ROnP4xDafFg", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.orbitVehicleOwnerAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tpbiVasotkS4j+u4kB3BtA", callContext.id);
// Execute Action: SyncOrbitVehicleOwner
return Connect2_OrbitMobile_MUIController.default.syncOrbitVehicleOwner$Action(vars.value.orbitStaticEntitiesInLocal.orbitVehicleOwnerAttr, callContext);
}

});
}).then(function () {
// Has Vehicle Types?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hMl6MX0sPUqmnugkT0M9Mg", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.orbitVehicleTypeAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5eO2bj3NQUSlFB1m1ylSYw", callContext.id);
// Execute Action: SyncOrbitVehicleType
return Connect2_OrbitMobile_MUIController.default.syncOrbitVehicleType$Action(vars.value.orbitStaticEntitiesInLocal.orbitVehicleTypeAttr, callContext);
}

});
}).then(function () {
// Has Helper Status?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YCZ4V_tNfk+omlraiPkwYQ", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.helperStatusAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nG_4TZgFjUeh0gkm5zRnyg", callContext.id);
// Execute Action: SyncOrbitHelperStatus
return Connect2_OrbitMobile_MUIController.default.syncOrbitHelperStatus$Action(vars.value.orbitStaticEntitiesInLocal.helperStatusAttr, callContext);
}

});
}).then(function () {
// Has Survey Status?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1TvFhnYFr0S_8AVzGObT_w", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.surveyStatusAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NAJcApJci0+2pCC4ROUuIw", callContext.id);
// Execute Action: SyncOrbitSurveyStatus
return Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStatus$Action(vars.value.orbitStaticEntitiesInLocal.surveyStatusAttr, callContext);
}

});
}).then(function () {
// Has Meal Types?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p5RnrFCwBEq8Dh0XJxR94w", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.mealTypeAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2kaJjd6O0k2VxHAndijjqQ", callContext.id);
// Execute Action: SyncOrbitMealType
return Connect2_OrbitMobile_MUIController.default.syncOrbitMealType$Action(vars.value.orbitStaticEntitiesInLocal.mealTypeAttr, callContext);
}

});
}).then(function () {
// Has Helper Roles?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UUVKGb50eU6_1tseRFyDdQ", callContext.id) && !(vars.value.orbitStaticEntitiesInLocal.helperRolesAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wK4T6E2Cw0Wv5IHB_gkkjQ", callContext.id);
// Execute Action: SyncOrbitHelperRoles
return Connect2_OrbitMobile_MUIController.default.syncOrbitHelperRoles$Action(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.orbitStaticEntitiesInLocal.helperRolesAttr, new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList(), function (source, target) {
target.idAttr = source.idAttr;
target.labelAttr = source.labelAttr;
target.orderAttr = source.orderAttr;
target.jSON_NameAttr = source.jSON_NameAttr;
target.isReadOnlyAttr = source.isReadOnlyAttr;
return target;
}), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:r69MOfw0Okizh36a3NQmeg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:r69MOfw0Okizh36a3NQmeg", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+1+ZN23x9E6kKXVdVzWFBw", callContext.id);
// Execute Action: SyncOrbitSurveyStatus2
return Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStatus$Action(vars.value.orbitStaticEntitiesInLocal.surveyStatusAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ery6E1t2T02IXrYNIpu1Uw", callContext.id);
});
}

});
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tq8NorWMBkiTJ41sUlLldw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tq8NorWMBkiTJ41sUlLldw", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncAllOrbitStaticEntities$vars", [{
name: "OrbitStaticEntities",
attrName: "orbitStaticEntitiesInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.StaticEntities_OrbitRec();
},
complexType: Connect2_OrbitMobile_MUIModel.StaticEntities_OrbitRec
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncAllOrbitStaticEntities$Action = function (orbitStaticEntitiesIn) {
orbitStaticEntitiesIn = (orbitStaticEntitiesIn === undefined) ? new Connect2_OrbitMobile_MUIModel.StaticEntities_OrbitRec() : orbitStaticEntitiesIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncAllOrbitStaticEntities$Action.bind(controller, orbitStaticEntitiesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitBedSize", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalBedSizeRecordList", "Connect2_OrbitMobile_BL.model$BedSizeRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$BedSizeList", "Connect2_OrbitMobile_MUI.model$LocalBedSizeRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitBedSize$Action = function (orbitBedSizeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitBedSize$vars"))());
vars.value.orbitBedSizeInLocal = orbitBedSizeIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gX0Du5H64UuodGMQlzCfUg:/ClientActionFlows.gX0Du5H64UuodGMQlzCfUg:O4WGV65F_eUEncn49Svs9w", "Connect2_OrbitMobile_MUI", "SyncOrbitBedSize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:upPZJ0MWcE2bY4Jzhkebvw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9mxyyN8rlUucgKWjmzbNGw", callContext.id);
// Execute Action: DeleteAllLocalBedSize
return Connect2_OrbitMobile_MUIModel.entities.LocalBedSize.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:d139TtIE40qZw_MxvQomsw", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalBedSize
return Connect2_OrbitMobile_MUIModel.entities.LocalBedSize.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.orbitBedSizeInLocal, new Connect2_OrbitMobile_MUIModel.LocalBedSizeRecordList(), function (source, target) {
target.localBedSizeAttr.idAttr = source.idAttr;
target.localBedSizeAttr.labelAttr = source.labelAttr;
target.localBedSizeAttr.jSON_NameAttr = source.jSON_NameAttr;
target.localBedSizeAttr.orderAttr = source.orderAttr;
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eEPGK0I8rkaLgHGnv4ypVg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gX0Du5H64UuodGMQlzCfUg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gX0Du5H64UuodGMQlzCfUg", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitBedSize$vars", [{
name: "OrbitBedSize",
attrName: "orbitBedSizeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.BedSizeList();
},
complexType: Connect2_OrbitMobile_MUIModel.BedSizeList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitBedSize$Action = function (orbitBedSizeIn) {
orbitBedSizeIn = (orbitBedSizeIn === undefined) ? new Connect2_OrbitMobile_MUIModel.BedSizeList() : orbitBedSizeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitBedSize$Action.bind(controller, orbitBedSizeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitCardTypes", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$OrbitEventTypeList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitEventTypes", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.model$OrbitMilestoneTypeList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitMilestoneTypes", "Connect2_OrbitMobile_MUI.controller$ServerAction.SyncOrbitCardTypes"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitCardTypes$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var syncOrbitCardTypesVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.syncOrbitCardTypesVar = syncOrbitCardTypesVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Fnxt9mdGj0a5G3AEvNd4xA:/ClientActionFlows.Fnxt9mdGj0a5G3AEvNd4xA:wx8cyKxuep+kAp+n1WQ2ew", "Connect2_OrbitMobile_MUI", "SyncOrbitCardTypes", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NW_AA1+bB06dOREauGMN7w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:835z9nh8J0ecFQ6_FF2fNg", callContext.id);
// Execute Action: SyncOrbitCardTypes
return controller.syncOrbitCardTypes$ServerAction(callContext).then(function (value) {
syncOrbitCardTypesVar.value = value;
}).then(function () {
// Has Event data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SbVhlsKqUkCctUmGDRnlpw", callContext.id) && !(syncOrbitCardTypesVar.value.orbitEventTypesOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DKp0HUs22kCDYwfKJjgyOA", callContext.id);
// Execute Action: SyncOrbitEventTypes
return Connect2_OrbitMobile_MUIController.default.syncOrbitEventTypes$Action(syncOrbitCardTypesVar.value.orbitEventTypesOut, callContext);
}

});
}).then(function () {
// Has Milestone data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y1EDAVgKTUqg4Z9x+nGjRw", callContext.id) && !(syncOrbitCardTypesVar.value.orbitMilestoneTypesOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YTLFwKVnAkyFni6GxhRpPg", callContext.id);
// Execute Action: SyncOrbitMilestoneTypes
return Connect2_OrbitMobile_MUIController.default.syncOrbitMilestoneTypes$Action(syncOrbitCardTypesVar.value.orbitMilestoneTypesOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:itjyuo1gdkiJ_BB0vuxngA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:itjyuo1gdkiJ_BB0vuxngA", callContext.id);
}

});
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Fnxt9mdGj0a5G3AEvNd4xA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Fnxt9mdGj0a5G3AEvNd4xA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitCardTypes$Action = function () {
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitCardTypes$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitEventTypes", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalOrbitEventTypeRecordList", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$OrbitEventTypeList", "Connect2_OrbitMobile_MUI.model$LocalOrbitEventTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitEventTypes$Action = function (orbitEventTypesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitEventTypes$vars"))());
vars.value.orbitEventTypesInLocal = orbitEventTypesIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:z0kvRRKVPkGWbz5pmgS4kg:/ClientActionFlows.z0kvRRKVPkGWbz5pmgS4kg:ZCpMfbdifjUB3JF2HaeaeA", "Connect2_OrbitMobile_MUI", "SyncOrbitEventTypes", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3CSTpmJLBk2SwPCz7kpGwA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c3do1dkF9E+7ORttb74ySA", callContext.id);
// Execute Action: DeleteAllLocalOrbitEventType
return Connect2_OrbitMobile_MUIModel.entities.LocalOrbitEventType.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DA8VagUwjkeDVnAid6YdQA", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalOrbitEventType
return Connect2_OrbitMobile_MUIModel.entities.LocalOrbitEventType.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.orbitEventTypesInLocal, new Connect2_OrbitMobile_MUIModel.LocalOrbitEventTypeRecordList(), function (source, target) {
target.localOrbitEventTypeAttr.idAttr = source.idAttr;
target.localOrbitEventTypeAttr.typeAttr = source.typeAttr;
target.localOrbitEventTypeAttr.nameAttr = source.nameAttr;
target.localOrbitEventTypeAttr.mainColorVarAttr = source.mainColorVarAttr;
target.localOrbitEventTypeAttr.mainIconAttr = source.mainIconAttr;
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lCX5VajO90iTESWjz8ceLg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:z0kvRRKVPkGWbz5pmgS4kg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:z0kvRRKVPkGWbz5pmgS4kg", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitEventTypes$vars", [{
name: "OrbitEventTypes",
attrName: "orbitEventTypesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.OrbitEventTypeList();
},
complexType: Connect2_OrbitMobile_MUIModel.OrbitEventTypeList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitEventTypes$Action = function (orbitEventTypesIn) {
orbitEventTypesIn = (orbitEventTypesIn === undefined) ? new Connect2_OrbitMobile_MUIModel.OrbitEventTypeList() : orbitEventTypesIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitEventTypes$Action.bind(controller, orbitEventTypesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitGenderPreference", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRecordList", "Connect2_OrbitMobile_BL.model$GenderPreferenceRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$GenderPreferenceList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitGenderPreference$Action = function (orbitGenderPreferenceIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitGenderPreference$vars"))());
vars.value.orbitGenderPreferenceInLocal = orbitGenderPreferenceIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qp3fS9K2_UqrFnkywRowWw:/ClientActionFlows.Qp3fS9K2_UqrFnkywRowWw:Me4z4WjFb1KRscWLOG363g", "Connect2_OrbitMobile_MUI", "SyncOrbitGenderPreference", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gIX2Rjc6402lACbOUmem2w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dkVccicKo0WZpE9ObMJZwA", callContext.id);
// Execute Action: DeleteAllLocalGenderPreference
return Connect2_OrbitMobile_MUIModel.entities.LocalGenderPreference.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2wyEPsMjSE2zr2F2zAJWWw", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalGenderPreference
return Connect2_OrbitMobile_MUIModel.entities.LocalGenderPreference.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.orbitGenderPreferenceInLocal, new Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceRecordList(), function (source, target) {
target.localGenderPreferenceAttr.idAttr = source.idAttr;
target.localGenderPreferenceAttr.labelAttr = source.labelAttr;
target.localGenderPreferenceAttr.jSON_NameAttr = source.jSON_NameAttr;
target.localGenderPreferenceAttr.orderAttr = source.orderAttr;
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0N0gr2d_MEShpWQdL5ORpw", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qp3fS9K2_UqrFnkywRowWw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qp3fS9K2_UqrFnkywRowWw", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitGenderPreference$vars", [{
name: "OrbitGenderPreference",
attrName: "orbitGenderPreferenceInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.GenderPreferenceList();
},
complexType: Connect2_OrbitMobile_MUIModel.GenderPreferenceList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitGenderPreference$Action = function (orbitGenderPreferenceIn) {
orbitGenderPreferenceIn = (orbitGenderPreferenceIn === undefined) ? new Connect2_OrbitMobile_MUIModel.GenderPreferenceList() : orbitGenderPreferenceIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitGenderPreference$Action.bind(controller, orbitGenderPreferenceIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitHelperRoles", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRecordList", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitHelperRoles$Action = function (helperRolesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitHelperRoles$vars"))());
vars.value.helperRolesInLocal = helperRolesIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:zkT0+l382kW2bJitKjdBHA:/ClientActionFlows.zkT0+l382kW2bJitKjdBHA:N8paAu5Blk96qOLoiMpBcg", "Connect2_OrbitMobile_MUI", "SyncOrbitHelperRoles", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EefS8VPts02+nwEq55EaYA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:r+Ga2puqAUCKyWisySQ4Dw", callContext.id);
// Execute Action: DeleteAllLocalHelperRole
return Connect2_OrbitMobile_MUIModel.entities.LocalHelperRole.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tXfZhZlibUOzwi7aXBp3Kw", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalHelperRole
return Connect2_OrbitMobile_MUIModel.entities.LocalHelperRole.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.helperRolesInLocal, new Connect2_OrbitMobile_MUIModel.LocalHelperRoleRecordList(), function (source, target) {
target = Connect2_OrbitMobile_MUIModel.LocalHelperRoleRecord.fromStructure(source);
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:W25JyQPDDkOqDYjqtu6HWQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:zkT0+l382kW2bJitKjdBHA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:zkT0+l382kW2bJitKjdBHA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitHelperRoles$vars", [{
name: "HelperRoles",
attrName: "helperRolesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList();
},
complexType: Connect2_OrbitMobile_MUIModel.LocalHelperRoleList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitHelperRoles$Action = function (helperRolesIn) {
helperRolesIn = (helperRolesIn === undefined) ? new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList() : helperRolesIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitHelperRoles$Action.bind(controller, helperRolesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitHelperStatus", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRecordList", "Connect2_OrbitMobile_BL.model$HelperStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$HelperStatusList", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitHelperStatus$Action = function (helperStatusIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitHelperStatus$vars"))());
vars.value.helperStatusInLocal = helperStatusIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:SkcVNKD2NkqBUv2KrcI7vQ:/ClientActionFlows.SkcVNKD2NkqBUv2KrcI7vQ:uWxtKtTwNTlfK+HGHBvQ+Q", "Connect2_OrbitMobile_MUI", "SyncOrbitHelperStatus", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z6cnAHqI+kGjXAHYbF94nQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jmCwxWjCEUqp8x4_mvSJmg", callContext.id);
// Execute Action: DeleteAllLocalHelperStatus
return Connect2_OrbitMobile_MUIModel.entities.LocalHelperStatus.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fjYUP2ddsk6QIWgLtZNy0w", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalHelperStatus
return Connect2_OrbitMobile_MUIModel.entities.LocalHelperStatus.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.helperStatusInLocal, new Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecordList(), function (source, target) {
target.localHelperStatusAttr.idAttr = source.idAttr;
target.localHelperStatusAttr.labelAttr = source.labelAttr;
target.localHelperStatusAttr.jSON_NameAttr = source.jSON_NameAttr;
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4LkYxfSyO0+c3vovSTkfyQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:SkcVNKD2NkqBUv2KrcI7vQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:SkcVNKD2NkqBUv2KrcI7vQ", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitHelperStatus$vars", [{
name: "HelperStatus",
attrName: "helperStatusInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.HelperStatusList();
},
complexType: Connect2_OrbitMobile_MUIModel.HelperStatusList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitHelperStatus$Action = function (helperStatusIn) {
helperStatusIn = (helperStatusIn === undefined) ? new Connect2_OrbitMobile_MUIModel.HelperStatusList() : helperStatusIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitHelperStatus$Action.bind(controller, helperStatusIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitHostSurvey", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$HostSurveyStepList", "Connect2_OrbitMobile_BL.model$BedSizeRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$BedSizeList", "Connect2_OrbitMobile_BL.model$GenderPreferenceRec", "Connect2_OrbitMobile_MUI.model$GenderPreferenceList", "Connect2_OrbitMobile_BL.model$HouseFloorRec", "Connect2_OrbitMobile_MUI.model$HouseFloorList", "Connect2_OrbitMobile_BL.model$VehicleOwnerRec", "Connect2_OrbitMobile_MUI.model$VehicleOwnerList", "Connect2_OrbitMobile_BL.model$VehicleTypeRec", "Connect2_OrbitMobile_MUI.model$VehicleTypeList", "Connect2_OrbitMobile_BL.model$HelperStatusRec", "Connect2_OrbitMobile_MUI.model$HelperStatusList", "Connect2_OrbitMobile_BL.model$SurveyStatusRec", "Connect2_OrbitMobile_MUI.model$SurveyStatusList", "Connect2_OrbitMobile_BL.model$MealTypeRec", "Connect2_OrbitMobile_MUI.model$MealTypeList", "Connect2_OrbitMobile_BL.model$HelperRoleRec", "Connect2_OrbitMobile_MUI.model$HelperRoleList", "Connect2_OrbitMobile_MUI.controller$ServerAction.SyncOrbitHostSurvey", "Connect2_OrbitMobile_MUI.controller$SyncOrbitSurveyStep", "Connect2_OrbitMobile_MUI.controller$SyncOrbitVehicleOwner", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.controller$SyncOrbitHelperRoles", "Connect2_OrbitMobile_MUI.controller$SyncOrbitHouseFloor", "Connect2_OrbitMobile_MUI.controller$SyncOrbitGenderPreference", "Connect2_OrbitMobile_MUI.controller$SyncOrbitHelperStatus", "Connect2_OrbitMobile_MUI.controller$SyncOrbitVehicleType", "Connect2_OrbitMobile_MUI.controller$SyncOrbitSurveyStatus", "Connect2_OrbitMobile_MUI.controller$SyncOrbitMealType", "Connect2_OrbitMobile_MUI.controller$SyncOrbitBedSize"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitHostSurvey$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var syncOrbitHostSurveyVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.syncOrbitHostSurveyVar = syncOrbitHostSurveyVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:LuQuoDTlpEq5WNfowre0Qw:/ClientActionFlows.LuQuoDTlpEq5WNfowre0Qw:AGeTV4cw6i7SWUrhyb635A", "Connect2_OrbitMobile_MUI", "SyncOrbitHostSurvey", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hdGGrmJmYUOcuzRbuIfUYA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ngP5AJZ3ZkWHz0X_KnW2QQ", callContext.id);
// Execute Action: SyncOrbitHostSurvey
return controller.syncOrbitHostSurvey$ServerAction(callContext).then(function (value) {
syncOrbitHostSurveyVar.value = value;
}).then(function () {
// Has Survey Steps?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2CBrQZusCE6hIVE0ODMFiw", callContext.id) && !(syncOrbitHostSurveyVar.value.hostSurveyStepOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:slULSHfXiUyWwCy1FM791g", callContext.id);
// Execute Action: SyncOrbitSurveyStep
return Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStep$Action(syncOrbitHostSurveyVar.value.hostSurveyStepOut, callContext);
}

});
}).then(function () {
// Has Bed Sizes?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CEJaHfZBDEGWWdq8TbOQVg", callContext.id) && !(syncOrbitHostSurveyVar.value.orbitBedSizeOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+3FD6hjmJ02hr9beBZOhuw", callContext.id);
// Execute Action: SyncOrbitBedSize
return Connect2_OrbitMobile_MUIController.default.syncOrbitBedSize$Action(syncOrbitHostSurveyVar.value.orbitBedSizeOut, callContext);
}

});
}).then(function () {
// Has Gender Preferences?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qiWxJirvJ0GqI4JjNTuTOg", callContext.id) && !(syncOrbitHostSurveyVar.value.orbitGenderPreferenceOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4MIIlOJIjUOs_dLYMK2vmg", callContext.id);
// Execute Action: SyncOrbitGenderPreference
return Connect2_OrbitMobile_MUIController.default.syncOrbitGenderPreference$Action(syncOrbitHostSurveyVar.value.orbitGenderPreferenceOut, callContext);
}

});
}).then(function () {
// Has Floors?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pQKu6rYcv0qdkPzeDXPqoA", callContext.id) && !(syncOrbitHostSurveyVar.value.orbitHouseFloorOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vex4jULDT06IrF0W38eiBQ", callContext.id);
// Execute Action: SyncOrbitHouseFloor
return Connect2_OrbitMobile_MUIController.default.syncOrbitHouseFloor$Action(syncOrbitHostSurveyVar.value.orbitHouseFloorOut, callContext);
}

});
}).then(function () {
// Has Vehicle Owners?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KIaaMijiakaMswWRKJu7ZA", callContext.id) && !(syncOrbitHostSurveyVar.value.orbitVehicleOwnerOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WL2VTsOaBEuavyQiDDQqOg", callContext.id);
// Execute Action: SyncOrbitVehicleOwner
return Connect2_OrbitMobile_MUIController.default.syncOrbitVehicleOwner$Action(syncOrbitHostSurveyVar.value.orbitVehicleOwnerOut, callContext);
}

});
}).then(function () {
// Has Vehicle Types?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:obR9tcmS+UaLnY4rC0T2hQ", callContext.id) && !(syncOrbitHostSurveyVar.value.orbitVehicleTypeOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qlgMqLk4Y06QmoWySeciPw", callContext.id);
// Execute Action: SyncOrbitVehicleType
return Connect2_OrbitMobile_MUIController.default.syncOrbitVehicleType$Action(syncOrbitHostSurveyVar.value.orbitVehicleTypeOut, callContext);
}

});
}).then(function () {
// Has Helper Status?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NLcWM9ykVEuGbmU9auekew", callContext.id) && !(syncOrbitHostSurveyVar.value.helperStatusOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mO86mbpZ4kSIY+UAwxd1JA", callContext.id);
// Execute Action: SyncOrbitHelperStatus
return Connect2_OrbitMobile_MUIController.default.syncOrbitHelperStatus$Action(syncOrbitHostSurveyVar.value.helperStatusOut, callContext);
}

});
}).then(function () {
// Has Survey Status?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s34xA9NZ606+Lz9_zR00Fg", callContext.id) && !(syncOrbitHostSurveyVar.value.surveyStatusOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XIi5y5Ccy0+8cq8uEwRBNg", callContext.id);
// Execute Action: SyncOrbitSurveyStatus
return Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStatus$Action(syncOrbitHostSurveyVar.value.surveyStatusOut, callContext);
}

});
}).then(function () {
// Has Meal Types?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uYKQk3Zs1kaEwL3klVIZHg", callContext.id) && !(syncOrbitHostSurveyVar.value.mealTypeOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TqMN6WmRbE+06l6ohhCmAA", callContext.id);
// Execute Action: SyncOrbitMealType
return Connect2_OrbitMobile_MUIController.default.syncOrbitMealType$Action(syncOrbitHostSurveyVar.value.mealTypeOut, callContext);
}

});
}).then(function () {
// Has Helper Roles?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2K6qMG6gZEaHzoqXoRVjHw", callContext.id) && !(syncOrbitHostSurveyVar.value.helperRolesOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S0vTd+uCM0SskP7xp+xkwg", callContext.id);
// Execute Action: SyncOrbitHelperRoles
return Connect2_OrbitMobile_MUIController.default.syncOrbitHelperRoles$Action(OS.DataConversion.JSConversions.typeConvertRecordList(syncOrbitHostSurveyVar.value.helperRolesOut, new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList(), function (source, target) {
target.idAttr = source.idAttr;
target.labelAttr = source.labelAttr;
target.orderAttr = source.orderAttr;
target.jSON_NameAttr = source.jSON_NameAttr;
target.isReadOnlyAttr = source.isReadOnlyAttr;
return target;
}), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Q4aU2StQmkedVVpq1H4UmA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Q4aU2StQmkedVVpq1H4UmA", callContext.id);
}

});
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LuQuoDTlpEq5WNfowre0Qw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LuQuoDTlpEq5WNfowre0Qw", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitHostSurvey$Action = function () {
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitHostSurvey$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitHouseFloor", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRecordList", "Connect2_OrbitMobile_BL.model$HouseFloorRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$HouseFloorList", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitHouseFloor$Action = function (orbitHouseFloorIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitHouseFloor$vars"))());
vars.value.orbitHouseFloorInLocal = orbitHouseFloorIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:TO+mfeeU+0K63tlfcMtUDg:/ClientActionFlows.TO+mfeeU+0K63tlfcMtUDg:duL4edRnSkzCC4mmnl+D5A", "Connect2_OrbitMobile_MUI", "SyncOrbitHouseFloor", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EAgrs6K4eEGlWAu6DbmpXg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1fF7mZnE2EWatsGQgo7tOA", callContext.id);
// Execute Action: DeleteAllLocalHouseFloor
return Connect2_OrbitMobile_MUIModel.entities.LocalHouseFloor.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8KQUjARCNE6aiq8EN8E+aQ", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalHouseFloor
return Connect2_OrbitMobile_MUIModel.entities.LocalHouseFloor.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.orbitHouseFloorInLocal, new Connect2_OrbitMobile_MUIModel.LocalHouseFloorRecordList(), function (source, target) {
target.localHouseFloorAttr.idAttr = source.idAttr;
target.localHouseFloorAttr.labelAttr = source.labelAttr;
target.localHouseFloorAttr.jSON_NameAttr = source.jSON_NameAttr;
target.localHouseFloorAttr.orderAttr = source.orderAttr;
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LKAXOTsZ4kuXje8McqB0zA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TO+mfeeU+0K63tlfcMtUDg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TO+mfeeU+0K63tlfcMtUDg", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitHouseFloor$vars", [{
name: "OrbitHouseFloor",
attrName: "orbitHouseFloorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.HouseFloorList();
},
complexType: Connect2_OrbitMobile_MUIModel.HouseFloorList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitHouseFloor$Action = function (orbitHouseFloorIn) {
orbitHouseFloorIn = (orbitHouseFloorIn === undefined) ? new Connect2_OrbitMobile_MUIModel.HouseFloorList() : orbitHouseFloorIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitHouseFloor$Action.bind(controller, orbitHouseFloorIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitMealType", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRecordList", "Connect2_OrbitMobile_BL.model$MealTypeRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$MealTypeList", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitMealType$Action = function (mealTypeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitMealType$vars"))());
vars.value.mealTypeInLocal = mealTypeIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:A9hHeA2v2EaRVDQDUrVQFg:/ClientActionFlows.A9hHeA2v2EaRVDQDUrVQFg:_A+9X9Gb72D0_5OFd4jynw", "Connect2_OrbitMobile_MUI", "SyncOrbitMealType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2HOc+zKnE0eheHrcDeFcKA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CMYvILViZ02ZQXXhyOBWcw", callContext.id);
// Execute Action: DeleteAllLocalMealType
return Connect2_OrbitMobile_MUIModel.entities.LocalMealType.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:h8SM2zxe6kSeLhghco+THw", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalMealType
return Connect2_OrbitMobile_MUIModel.entities.LocalMealType.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.mealTypeInLocal, new Connect2_OrbitMobile_MUIModel.LocalMealTypeRecordList(), function (source, target) {
target.localMealTypeAttr.idAttr = source.idAttr;
target.localMealTypeAttr.labelAttr = source.labelAttr;
target.localMealTypeAttr.jSON_NameAttr = source.jSON_NameAttr;
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IB4o5jpy3Eeo8za5mWIloQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:A9hHeA2v2EaRVDQDUrVQFg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:A9hHeA2v2EaRVDQDUrVQFg", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitMealType$vars", [{
name: "MealType",
attrName: "mealTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.MealTypeList();
},
complexType: Connect2_OrbitMobile_MUIModel.MealTypeList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitMealType$Action = function (mealTypeIn) {
mealTypeIn = (mealTypeIn === undefined) ? new Connect2_OrbitMobile_MUIModel.MealTypeList() : mealTypeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitMealType$Action.bind(controller, mealTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitMilestoneTypes", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRecordList", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$OrbitMilestoneTypeList", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitMilestoneTypes$Action = function (orbitMilestoneTypesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitMilestoneTypes$vars"))());
vars.value.orbitMilestoneTypesInLocal = orbitMilestoneTypesIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1iNiFVYlO0qSHt0+GFbN2w:/ClientActionFlows.1iNiFVYlO0qSHt0+GFbN2w:SmEleGIDslg2CIx0tCMA_g", "Connect2_OrbitMobile_MUI", "SyncOrbitMilestoneTypes", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SiOP1xH2cUeK8+gJfbaQtg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WxJRWTDwmkKBnrWTrSp+nw", callContext.id);
// Execute Action: DeleteAllLocalOrbitMilestoneType
return Connect2_OrbitMobile_MUIModel.entities.LocalOrbitMilestoneType.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8VqVbS56lkm8eqY3ZMijpA", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalOrbitMilestoneType
return Connect2_OrbitMobile_MUIModel.entities.LocalOrbitMilestoneType.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.orbitMilestoneTypesInLocal, new Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRecordList(), function (source, target) {
target.localOrbitMilestoneTypeAttr.idAttr = source.idAttr;
target.localOrbitMilestoneTypeAttr.orderAttr = source.orderAttr;
target.localOrbitMilestoneTypeAttr.typeAttr = source.typeAttr;
target.localOrbitMilestoneTypeAttr.nameAttr = source.typeAttr;
target.localOrbitMilestoneTypeAttr.mainColorVarAttr = source.mainColorVarAttr;
target.localOrbitMilestoneTypeAttr.mainIconAttr = source.mainIconAttr;
target.localOrbitMilestoneTypeAttr.canHostAttr = source.canHostAttr;
target.localOrbitMilestoneTypeAttr.isTransportMilestoneAttr = source.isTransportMilestoneAttr;
target.localOrbitMilestoneTypeAttr.iconTransportDepartureAttr = source.iconTransportDepartureAttr;
target.localOrbitMilestoneTypeAttr.iconTransportArrivalAttr = source.iconTransportArrivalAttr;
target.localOrbitMilestoneTypeAttr.transportHeaderClassAttr = source.transportHeaderClassAttr;
target.localOrbitMilestoneTypeAttr.travelInfoHeaderAttr = source.travelInfoHeaderAttr;
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HaWRoHe2GkqkKYTOaA7IIQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1iNiFVYlO0qSHt0+GFbN2w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1iNiFVYlO0qSHt0+GFbN2w", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitMilestoneTypes$vars", [{
name: "OrbitMilestoneTypes",
attrName: "orbitMilestoneTypesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.OrbitMilestoneTypeList();
},
complexType: Connect2_OrbitMobile_MUIModel.OrbitMilestoneTypeList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitMilestoneTypes$Action = function (orbitMilestoneTypesIn) {
orbitMilestoneTypesIn = (orbitMilestoneTypesIn === undefined) ? new Connect2_OrbitMobile_MUIModel.OrbitMilestoneTypeList() : orbitMilestoneTypesIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitMilestoneTypes$Action.bind(controller, orbitMilestoneTypesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitSurveyStatus", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRecordList", "Connect2_OrbitMobile_BL.model$SurveyStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$SurveyStatusList", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStatus$Action = function (hostSurveyStatusIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitSurveyStatus$vars"))());
vars.value.hostSurveyStatusInLocal = hostSurveyStatusIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:VRS3veCe8kWPMN3cw4Vi8w:/ClientActionFlows.VRS3veCe8kWPMN3cw4Vi8w:G+SKYXljHMv06YU3Sc34Ug", "Connect2_OrbitMobile_MUI", "SyncOrbitSurveyStatus", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Qxc_77W+02LlSjGN_DFOA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iXOqn+i_60qmswwMzrI46g", callContext.id);
// Execute Action: DeleteAllLocalSurveyStatus
return Connect2_OrbitMobile_MUIModel.entities.LocalSurveyStatus.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FyWyI+jsIEy9txhykaLAzA", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalSurveyStatus
return Connect2_OrbitMobile_MUIModel.entities.LocalSurveyStatus.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.hostSurveyStatusInLocal, new Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecordList(), function (source, target) {
target.localSurveyStatusAttr.idAttr = source.idAttr;
target.localSurveyStatusAttr.labelAttr = source.labelAttr;
target.localSurveyStatusAttr.jSON_NameAttr = source.jSON_NameAttr;
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SO0vr+5460Ssgj1WK4Wdtg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:VRS3veCe8kWPMN3cw4Vi8w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:VRS3veCe8kWPMN3cw4Vi8w", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitSurveyStatus$vars", [{
name: "HostSurveyStatus",
attrName: "hostSurveyStatusInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.SurveyStatusList();
},
complexType: Connect2_OrbitMobile_MUIModel.SurveyStatusList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitSurveyStatus$Action = function (hostSurveyStatusIn) {
hostSurveyStatusIn = (hostSurveyStatusIn === undefined) ? new Connect2_OrbitMobile_MUIModel.SurveyStatusList() : hostSurveyStatusIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStatus$Action.bind(controller, hostSurveyStatusIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitSurveyStatus_Wrapper", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_BL.model$SurveyStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$SurveyStatusList", "Connect2_OrbitMobile_MUI.controller$ServerAction.SyncOrbitSurveyStatus", "Connect2_OrbitMobile_MUI.controller$SyncOrbitSurveyStatus"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStatus_Wrapper$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getOrbitSurveyStatusVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getOrbitSurveyStatusVar = getOrbitSurveyStatusVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1mn32TGBckOsAmb5HLzOuA:/ClientActionFlows.1mn32TGBckOsAmb5HLzOuA:xsoOd5Ktgo0le9FRznWI7g", "Connect2_OrbitMobile_MUI", "SyncOrbitSurveyStatus_Wrapper", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zyqTBU1JaE2SnV9oZydf6Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZnqSftn_ZUuRMsoCNzqnpQ", callContext.id);
// Execute Action: GetOrbitSurveyStatus
return controller.syncOrbitSurveyStatus$ServerAction(callContext).then(function (value) {
getOrbitSurveyStatusVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:x0BGsZa_NkC_hM2uUQGzbQ", callContext.id);
// Execute Action: SyncOrbitSurveyStatus
return Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStatus$Action(getOrbitSurveyStatusVar.value.hostSurveyStatusOut, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+ea9z8hm+kC3M6wt9+Lfyg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1mn32TGBckOsAmb5HLzOuA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1mn32TGBckOsAmb5HLzOuA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitSurveyStatus_Wrapper$Action = function () {
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStatus_Wrapper$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitSurveyStep", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRecordList", "Connect2_OrbitMobile_MUI.model$HostSurveyStepList", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStep$Action = function (surveyStepIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitSurveyStep$vars"))());
vars.value.surveyStepInLocal = surveyStepIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:fBi3x_2COkmm12M147eOxA:/ClientActionFlows.fBi3x_2COkmm12M147eOxA:Ms+xOkaj1N2x_Ek3ERut8A", "Connect2_OrbitMobile_MUI", "SyncOrbitSurveyStep", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1peNlfdhY0CnSkXucXSVEw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DEChnO7XWE+EZjPRerS_cQ", callContext.id);
// Execute Action: DeleteAllLocalHostSurveyStep
return Connect2_OrbitMobile_MUIModel.entities.LocalHostSurveyStep.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lwWpWiSiN0u_y+0MJ+jbiQ", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalHostSurveyStep
return Connect2_OrbitMobile_MUIModel.entities.LocalHostSurveyStep.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.surveyStepInLocal, new Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRecordList(), function (source, target) {
target.localHostSurveyStepAttr.idAttr = source.idAttr;
target.localHostSurveyStepAttr.headerLabelAttr = source.headerLabelAttr;
target.localHostSurveyStepAttr.addLabelAttr = source.addLabelAttr;
target.localHostSurveyStepAttr.orderAttr = source.orderAttr;
target.localHostSurveyStepAttr.isDataStepAttr = source.isDataStepAttr;
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yV6phdPG6UOfbGeiCjf3tw", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fBi3x_2COkmm12M147eOxA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fBi3x_2COkmm12M147eOxA", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitSurveyStep$vars", [{
name: "SurveyStep",
attrName: "surveyStepInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.HostSurveyStepList();
},
complexType: Connect2_OrbitMobile_MUIModel.HostSurveyStepList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitSurveyStep$Action = function (surveyStepIn) {
surveyStepIn = (surveyStepIn === undefined) ? new Connect2_OrbitMobile_MUIModel.HostSurveyStepList() : surveyStepIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStep$Action.bind(controller, surveyStepIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitVehicleOwner", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRecordList", "Connect2_OrbitMobile_BL.model$VehicleOwnerRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$VehicleOwnerList", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitVehicleOwner$Action = function (orbitVehicleOwnerIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitVehicleOwner$vars"))());
vars.value.orbitVehicleOwnerInLocal = orbitVehicleOwnerIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:tc_fMjn1uEyiOn0YQ4dFBw:/ClientActionFlows.tc_fMjn1uEyiOn0YQ4dFBw:rl6vd4gE_saSozMVCOivYA", "Connect2_OrbitMobile_MUI", "SyncOrbitVehicleOwner", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oVv_YthWwEW+65y8TFNnXQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PvLZvAU6zEGashVNFQ2RHA", callContext.id);
// Execute Action: DeleteAllLocalVehicleOwner
return Connect2_OrbitMobile_MUIModel.entities.LocalVehicleOwner.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OPIJjB7DcUyFLQ2apr6JIg", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalVehicleOwner
return Connect2_OrbitMobile_MUIModel.entities.LocalVehicleOwner.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.orbitVehicleOwnerInLocal, new Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerRecordList(), function (source, target) {
target.localVehicleOwnerAttr.idAttr = source.idAttr;
target.localVehicleOwnerAttr.labelAttr = source.labelAttr;
target.localVehicleOwnerAttr.orderAttr = source.orderAttr;
target.localVehicleOwnerAttr.jSON_NameAttr = source.jSON_NameAttr;
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bAdk2NykBE6PuSZgkrIqxg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tc_fMjn1uEyiOn0YQ4dFBw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tc_fMjn1uEyiOn0YQ4dFBw", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitVehicleOwner$vars", [{
name: "OrbitVehicleOwner",
attrName: "orbitVehicleOwnerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.VehicleOwnerList();
},
complexType: Connect2_OrbitMobile_MUIModel.VehicleOwnerList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitVehicleOwner$Action = function (orbitVehicleOwnerIn) {
orbitVehicleOwnerIn = (orbitVehicleOwnerIn === undefined) ? new Connect2_OrbitMobile_MUIModel.VehicleOwnerList() : orbitVehicleOwnerIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitVehicleOwner$Action.bind(controller, orbitVehicleOwnerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$SyncOrbitVehicleType", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRecordList", "Connect2_OrbitMobile_BL.model$VehicleTypeRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$VehicleTypeList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitVehicleType$Action = function (orbitVehicleTypeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitVehicleType$vars"))());
vars.value.orbitVehicleTypeInLocal = orbitVehicleTypeIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:cjxvD8E7N0ipk0lWHWZU2A:/ClientActionFlows.cjxvD8E7N0ipk0lWHWZU2A:z86dwZspgehf_gWoDZsvIQ", "Connect2_OrbitMobile_MUI", "SyncOrbitVehicleType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GeZxrOGWDUubJGYDOgGMJw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pl2r8wGcBEKP4+OvVLyyKw", callContext.id);
// Execute Action: DeleteAllLocalVehicleType
return Connect2_OrbitMobile_MUIModel.entities.LocalVehicleType.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rnfyhxtLwUmwdkB5R5v15Q", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalVehicleType
return Connect2_OrbitMobile_MUIModel.entities.LocalVehicleType.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.orbitVehicleTypeInLocal, new Connect2_OrbitMobile_MUIModel.LocalVehicleTypeRecordList(), function (source, target) {
target.localVehicleTypeAttr.idAttr = source.idAttr;
target.localVehicleTypeAttr.labelAttr = source.labelAttr;
target.localVehicleTypeAttr.orderAttr = source.orderAttr;
target.localVehicleTypeAttr.jSON_NameAttr = source.jSON_NameAttr;
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Sj9Czkbcc0+m+zCvKdSbKA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cjxvD8E7N0ipk0lWHWZU2A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cjxvD8E7N0ipk0lWHWZU2A", callContext.id);
throw ex;

});
};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.SyncOrbitVehicleType$vars", [{
name: "OrbitVehicleType",
attrName: "orbitVehicleTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.VehicleTypeList();
},
complexType: Connect2_OrbitMobile_MUIModel.VehicleTypeList
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.syncOrbitVehicleType$Action = function (orbitVehicleTypeIn) {
orbitVehicleTypeIn = (orbitVehicleTypeIn === undefined) ? new Connect2_OrbitMobile_MUIModel.VehicleTypeList() : orbitVehicleTypeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.syncOrbitVehicleType$Action.bind(controller, orbitVehicleTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$TransportDetails_ShowGeneralInformation", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_IS.model$TravelInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.transportDetails_ShowGeneralInformation$Action = function (in_TravelIdentifierIn, in_TravelInfoIn, in_MilestoneTypeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.TransportDetails_ShowGeneralInformation$vars"))());
vars.value.in_TravelIdentifierInLocal = in_TravelIdentifierIn;
vars.value.in_TravelInfoInLocal = in_TravelInfoIn.clone();
vars.value.in_MilestoneTypeInLocal = in_MilestoneTypeIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.TransportDetails_ShowGeneralInformation$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:9mGlwJeIbUSOiVxYbhKpvw:/ClientActionFlows.9mGlwJeIbUSOiVxYbhKpvw:fZ4gQloFXjpJIS0BwYacrw", "Connect2_OrbitMobile_MUI", "TransportDetails_ShowGeneralInformation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YzOvOapMJEmtLI_EwQZhFw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ocNLSXMBGkCY6zEg4EsWUQ", callContext.id) && (((vars.value.in_TravelIdentifierInLocal) !== ("")) || ((vars.value.in_TravelInfoInLocal.bookingReferenceAttr) !== (""))))) {
// HasTransportDetails
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0dxvp1xxNkyiAUqHzIL08w", callContext.id);
// IsShow = True
outVars.value.isShowOut = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0KohMPZVOEuJTaQ3Z+cDRg", callContext.id);
} else {
// Is Flight?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WW0kooghVkCErZMnVzMALQ", callContext.id) && (vars.value.in_MilestoneTypeInLocal.isTransportMilestoneAttr && (vars.value.in_MilestoneTypeInLocal.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.flight)))) {
// HasTransportDetails
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9wzyPGvLgEuwIfFw6lWMqQ", callContext.id);
// IsShow = In_TravelInfo.CodeShareFlight <> "" or In_TravelInfo.CodeShareName <> ""
outVars.value.isShowOut = (((vars.value.in_TravelInfoInLocal.codeShareFlightAttr) !== ("")) || ((vars.value.in_TravelInfoInLocal.codeShareNameAttr) !== ("")));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lshBTaS5FUG3QSHF_1CjQw", callContext.id);
} else {
// Flight, Train or Boat?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jq7eC9ewmkK4hGuD8wG7kw", callContext.id) && (vars.value.in_MilestoneTypeInLocal.isTransportMilestoneAttr && (((vars.value.in_MilestoneTypeInLocal.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.flight) || (vars.value.in_MilestoneTypeInLocal.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.train)) || (vars.value.in_MilestoneTypeInLocal.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.boat))))) {
// HasTransportDetails
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2BmEK_ZaVUyH7JWVuWAGFg", callContext.id);
// IsShow = In_TravelInfo.FareType <> "" or In_TravelInfo.OnboardMeal <> "" or In_TravelInfo.Class <> ""
outVars.value.isShowOut = ((((vars.value.in_TravelInfoInLocal.fareTypeAttr) !== ("")) || ((vars.value.in_TravelInfoInLocal.onboardMealAttr) !== (""))) || ((vars.value.in_TravelInfoInLocal.classAttr) !== ("")));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sE2jV8AcL0aQbUf+CgnSRg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4c0ar7Jj6kyzWDAL_dGRbg", callContext.id);
}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9mGlwJeIbUSOiVxYbhKpvw", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.TransportDetails_ShowGeneralInformation$vars", [{
name: "In_TravelIdentifier",
attrName: "in_TravelIdentifierInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_TravelInfo",
attrName: "in_TravelInfoInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_ISModel.TravelInfoRec();
},
complexType: Connect2_OrbitMobile_ISModel.TravelInfoRec
}, {
name: "In_MilestoneType",
attrName: "in_MilestoneTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec();
},
complexType: Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.TransportDetails_ShowGeneralInformation$outVars", [{
name: "IsShow",
attrName: "isShowOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.transportDetails_ShowGeneralInformation$Action = function (in_TravelIdentifierIn, in_TravelInfoIn, in_MilestoneTypeIn) {
in_TravelIdentifierIn = (in_TravelIdentifierIn === undefined) ? "" : in_TravelIdentifierIn;
in_TravelInfoIn = (in_TravelInfoIn === undefined) ? new Connect2_OrbitMobile_ISModel.TravelInfoRec() : in_TravelInfoIn;
in_MilestoneTypeIn = (in_MilestoneTypeIn === undefined) ? new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec() : in_MilestoneTypeIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.transportDetails_ShowGeneralInformation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_TravelIdentifierIn, OS.DataTypes.DataTypes.Text), in_TravelInfoIn, in_MilestoneTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsShow: OS.DataConversion.JSNodeParamConverter.to(actionResults.isShowOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInput_Single", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInput_Single.ValidateSingleBedInputJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_ValidateBedSizeInput_Single_ValidateSingleBedInputJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.validateBedSizeInput_Single$Action = function (in_InputIdIn, in_DropdownInvalidClassIn, in_ValidationMessageIn, in_ValidationMessageClassIn, in_ValidValueIn, in_ForceEitherValidationIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBedSizeInput_Single$vars"))());
vars.value.in_InputIdInLocal = in_InputIdIn;
vars.value.in_DropdownInvalidClassInLocal = in_DropdownInvalidClassIn;
vars.value.in_ValidationMessageInLocal = in_ValidationMessageIn;
vars.value.in_ValidationMessageClassInLocal = in_ValidationMessageClassIn;
vars.value.in_ValidValueInLocal = in_ValidValueIn;
vars.value.in_ForceEitherValidationInLocal = in_ForceEitherValidationIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:tS0OCavV80m9J0tIm+mlvA:/ClientActionFlows.tS0OCavV80m9J0tIm+mlvA:+qwUIxwTUc_UMHgYfIYYqQ", "Connect2_OrbitMobile_MUI", "ValidateBedSizeInput_Single", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ISiL+k_FCUqAGMYZHRZ3NA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IPRZzfx7EUucbE48gFbs4g", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_ValidateBedSizeInput_Single_ValidateSingleBedInputJS, "ValidateSingleBedInput", "ValidateBedSizeInput_Single", {
DropdownInvalidClass: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DropdownInvalidClassInLocal, OS.DataTypes.DataTypes.Text),
InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_InputIdInLocal, OS.DataTypes.DataTypes.Text),
ValidationMessage: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ValidationMessageInLocal, OS.DataTypes.DataTypes.Text),
ValidValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ValidValueInLocal, OS.DataTypes.DataTypes.Boolean),
ForceEitherValidation: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ForceEitherValidationInLocal, OS.DataTypes.DataTypes.Boolean),
ValidationMessageClass: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ValidationMessageClassInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mpn5cu4370G0Ja_lMMRRkQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tS0OCavV80m9J0tIm+mlvA", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBedSizeInput_Single$vars", [{
name: "In_InputId",
attrName: "in_InputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_DropdownInvalidClass",
attrName: "in_DropdownInvalidClassInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ValidationMessage",
attrName: "in_ValidationMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ValidationMessageClass",
attrName: "in_ValidationMessageClassInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ValidValue",
attrName: "in_ValidValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_ForceEitherValidation",
attrName: "in_ForceEitherValidationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.validateBedSizeInput_Single$Action = function (in_InputIdIn, in_DropdownInvalidClassIn, in_ValidationMessageIn, in_ValidationMessageClassIn, in_ValidValueIn, in_ForceEitherValidationIn) {
in_InputIdIn = (in_InputIdIn === undefined) ? "" : in_InputIdIn;
in_DropdownInvalidClassIn = (in_DropdownInvalidClassIn === undefined) ? "" : in_DropdownInvalidClassIn;
in_ValidationMessageIn = (in_ValidationMessageIn === undefined) ? "" : in_ValidationMessageIn;
in_ValidationMessageClassIn = (in_ValidationMessageClassIn === undefined) ? "" : in_ValidationMessageClassIn;
in_ValidValueIn = (in_ValidValueIn === undefined) ? false : in_ValidValueIn;
in_ForceEitherValidationIn = (in_ForceEitherValidationIn === undefined) ? false : in_ForceEitherValidationIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.validateBedSizeInput_Single$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_InputIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_DropdownInvalidClassIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_ValidationMessageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_ValidationMessageClassIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_ValidValueIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_ForceEitherValidationIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInput_Single.ValidateSingleBedInputJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function createRequiredMessage(ValidationMessage,ValidationMessageClass){
    let requiredMessage = document.createElement('span');
    requiredMessage.innerHTML = ValidationMessage;
    requiredMessage.classList.add(ValidationMessageClass);
    return requiredMessage;
}

function validateBedInput(InputId,DropdownInvalidClass,ValidationMessage,ValidationMessageClass,ValidValue,ForceEitherValidation){
    let currentBedElement = document.getElementById(InputId);
    
    if(currentBedElement.classList.contains(DropdownInvalidClass)){
        if(ForceEitherValidation){
            for(let i=0; i< currentBedElement.children.length; i++){
                if(currentBedElement.children[i].classList.contains(ValidationMessageClass)){
                    currentBedElement.removeChild(currentBedElement.children[i]);
                    currentBedElement.appendChild(createRequiredMessage(ValidationMessage,ValidationMessageClass));
                    break;
                }
            }
        }else if(ValidValue){
            currentBedElement.classList.remove(DropdownInvalidClass);
            for(let i=0; i< currentBedElement.children.length; i++){
                if(currentBedElement.children[i].classList.contains(ValidationMessageClass)){
                    currentBedElement.removeChild(currentBedElement.children[i]);
                    break;
                }
            }
        }else{
            for(let i=0; i< currentBedElement.children.length; i++){
                if(currentBedElement.children[i].classList.contains(ValidationMessageClass)){
                    currentBedElement.removeChild(currentBedElement.children[i]);
                    break;
                }
            }
            currentBedElement.appendChild(createRequiredMessage(ValidationMessage,ValidationMessageClass));
        }
    }else if(ForceEitherValidation){
        currentBedElement.classList.add(DropdownInvalidClass);
        currentBedElement.appendChild(createRequiredMessage(ValidationMessage,ValidationMessageClass));
    }else if(!ValidValue){
        currentBedElement.classList.add(DropdownInvalidClass);
        currentBedElement.appendChild(createRequiredMessage(ValidationMessage,ValidationMessageClass));
    }
}

validateBedInput($parameters.InputId,$parameters.DropdownInvalidClass,$parameters.ValidationMessage,$parameters.ValidationMessageClass,$parameters.ValidValue,$parameters.ForceEitherValidation);
};
});

define("Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInputs", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInputs.ValidateAllBedInputsJS", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUI_controller_ValidateBedSizeInputs_ValidateAllBedInputsJS, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.validateBedSizeInputs$Action = function (in_ParentClassIn, in_DropdownInvalidClassIn, in_ValidationMessageIn, in_ValidationMessageClassIn, in_EmptyStringIn, in_CheckEitherValidationIn, in_InvalidBedSizesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBedSizeInputs$vars"))());
vars.value.in_ParentClassInLocal = in_ParentClassIn;
vars.value.in_DropdownInvalidClassInLocal = in_DropdownInvalidClassIn;
vars.value.in_ValidationMessageInLocal = in_ValidationMessageIn;
vars.value.in_ValidationMessageClassInLocal = in_ValidationMessageClassIn;
vars.value.in_EmptyStringInLocal = in_EmptyStringIn;
vars.value.in_CheckEitherValidationInLocal = in_CheckEitherValidationIn;
vars.value.in_InvalidBedSizesInLocal = in_InvalidBedSizesIn;
var validateAllBedInputsJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBedSizeInputs$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.validateAllBedInputsJSResult = validateAllBedInputsJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:l0v9EFit3UmnFt++r48LVA:/ClientActionFlows.l0v9EFit3UmnFt++r48LVA:jw0Rxizj7FLMzgEPNv27Dg", "Connect2_OrbitMobile_MUI", "ValidateBedSizeInputs", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S0ngspax80O6Bww56Uqlnw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8Q0nSvf9ekqaxmBEI11MHA", callContext.id);
validateAllBedInputsJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_controller_ValidateBedSizeInputs_ValidateAllBedInputsJS, "ValidateAllBedInputs", "ValidateBedSizeInputs", {
ParentClass: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ParentClassInLocal, OS.DataTypes.DataTypes.Text),
CheckEitherValidation: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_CheckEitherValidationInLocal, OS.DataTypes.DataTypes.Boolean),
DropdownInvalidClass: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DropdownInvalidClassInLocal, OS.DataTypes.DataTypes.Text),
ValidationMessage: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ValidationMessageInLocal, OS.DataTypes.DataTypes.Text),
EmptyString: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_EmptyStringInLocal, OS.DataTypes.DataTypes.Text),
InvalidBedSizeList: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_InvalidBedSizesInLocal, OS.DataTypes.DataTypes.Text),
ValidationMessageClass: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ValidationMessageClassInLocal, OS.DataTypes.DataTypes.Text),
HasInvalidInputs: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
InvalidInput: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBedSizeInputs$validateAllBedInputsJSResult"))();
jsNodeResult.hasInvalidInputsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasInvalidInputs, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.invalidInputOut = OS.DataConversion.JSNodeParamConverter.from($parameters.InvalidInput, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DDtm3x5zOkGu9u0XqzTqTg", callContext.id);
// Out_HasInvalidInputs = ValidateAllBedInputs.HasInvalidInputs
outVars.value.out_HasInvalidInputsOut = validateAllBedInputsJSResult.value.hasInvalidInputsOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DDtm3x5zOkGu9u0XqzTqTg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_InvalidInput = ValidateAllBedInputs.InvalidInput
outVars.value.out_InvalidInputOut = validateAllBedInputsJSResult.value.invalidInputOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SMLZdubhfEK4qGJ0WCI_UA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:l0v9EFit3UmnFt++r48LVA", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBedSizeInputs$vars", [{
name: "In_ParentClass",
attrName: "in_ParentClassInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_DropdownInvalidClass",
attrName: "in_DropdownInvalidClassInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ValidationMessage",
attrName: "in_ValidationMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ValidationMessageClass",
attrName: "in_ValidationMessageClassInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_EmptyString",
attrName: "in_EmptyStringInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_CheckEitherValidation",
attrName: "in_CheckEitherValidationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_InvalidBedSizes",
attrName: "in_InvalidBedSizesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBedSizeInputs$validateAllBedInputsJSResult", [{
name: "HasInvalidInputs",
attrName: "hasInvalidInputsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "InvalidInput",
attrName: "invalidInputOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBedSizeInputs$outVars", [{
name: "Out_HasInvalidInputs",
attrName: "out_HasInvalidInputsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Out_InvalidInput",
attrName: "out_InvalidInputOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.validateBedSizeInputs$Action = function (in_ParentClassIn, in_DropdownInvalidClassIn, in_ValidationMessageIn, in_ValidationMessageClassIn, in_EmptyStringIn, in_CheckEitherValidationIn, in_InvalidBedSizesIn) {
in_ParentClassIn = (in_ParentClassIn === undefined) ? "" : in_ParentClassIn;
in_DropdownInvalidClassIn = (in_DropdownInvalidClassIn === undefined) ? "" : in_DropdownInvalidClassIn;
in_ValidationMessageIn = (in_ValidationMessageIn === undefined) ? "" : in_ValidationMessageIn;
in_ValidationMessageClassIn = (in_ValidationMessageClassIn === undefined) ? "" : in_ValidationMessageClassIn;
in_EmptyStringIn = (in_EmptyStringIn === undefined) ? "" : in_EmptyStringIn;
in_CheckEitherValidationIn = (in_CheckEitherValidationIn === undefined) ? false : in_CheckEitherValidationIn;
in_InvalidBedSizesIn = (in_InvalidBedSizesIn === undefined) ? "" : in_InvalidBedSizesIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.validateBedSizeInputs$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_ParentClassIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_DropdownInvalidClassIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_ValidationMessageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_ValidationMessageClassIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_EmptyStringIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_CheckEitherValidationIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_InvalidBedSizesIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_HasInvalidInputs: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_HasInvalidInputsOut, OS.DataTypes.DataTypes.Boolean),
Out_InvalidInput: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_InvalidInputOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInputs.ValidateAllBedInputsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function createRequiredMessage(ValidationMessage,ValidationMessageClass){
    let requiredMessage = document.createElement('span');
    requiredMessage.innerHTML = ValidationMessage;
    requiredMessage.classList.add(ValidationMessageClass);
    return requiredMessage;
}

function validateBedInputs(ParentClass,DropdownInvalidClass,ValidationMessage,ValidationMessageClass,CheckEitherValidation,InvalidBedSizes){
    let invalidInput = "";
    let bedElementList = document.querySelectorAll(ParentClass + " .list .dropdown-container");
    let invalidBedSizes = [];
    if(CheckEitherValidation){
        invalidBedSizes = JSON.parse(InvalidBedSizes);
    }
    
    for(let i = 0; i < bedElementList.length; i++){
        if(bedElementList[i].classList.contains(DropdownInvalidClass)){
            if(bedElementList[i].querySelector(".dropdown-display .dropdown-display-content span").innerText !== $parameters.EmptyString){
                //Remove current invalid message and class (we don't know why it's invalid so we must remove in order to add the correct one)
                bedElementList[i].classList.remove(DropdownInvalidClass);
                for(let j=0; j < bedElementList[i].children.length; j++){
                    if(bedElementList[i].children[j].classList.contains(ValidationMessageClass)){
                        bedElementList[i].removeChild(bedElementList[i].children[j]);
                        break;
                    }
                }
                // Check for invalid bed sizes, exit the loop if found
                if(CheckEitherValidation){
                    for(let k = 0; k < invalidBedSizes.length; k++){
                        if(bedElementList[i].querySelector(".dropdown-display .dropdown-display-content span").innerText == invalidBedSizes[k].Label){
                            // If invalid bed size is found, add new invalid message and class, and exit loop
                            bedElementList[i].classList.add(DropdownInvalidClass);
                            bedElementList[i].appendChild(createRequiredMessage("Either rooms should not have double beds.",ValidationMessageClass));
                            $parameters.HasInvalidInputs = true;
                            invalidInput === "" ?  invalidInput = bedElementList[i].id : invalidInput = invalidInput;
                            break;
                        }
                    }
                }
            }else{
                //Remove current invalid message (we don't know why it's invalid so we must remove in order to add the correct one)
                for(let j=0; j < bedElementList[i].children.length; j++){
                    if(bedElementList[i].children[j].classList.contains(ValidationMessageClass)){
                        bedElementList[i].removeChild(bedElementList[i].children[j]);
                        break;
                    }
                }
                //Add invalid message
                bedElementList[i].appendChild(createRequiredMessage(ValidationMessage,ValidationMessageClass));
                $parameters.HasInvalidInputs = true;
                invalidInput === "" ?  invalidInput = bedElementList[i].id : invalidInput = invalidInput;
            }
        }else if(bedElementList[i].querySelector(".dropdown-display .dropdown-display-content span").innerText !== $parameters.EmptyString){
            // Check for invalid bed sizes, exit the loop if found
            if(CheckEitherValidation){
                for(let k = 0; k < invalidBedSizes.length; k++){
                    if(bedElementList[i].querySelector(".dropdown-display .dropdown-display-content span").innerText == invalidBedSizes[k].Label){
                        // If invalid bed size is found, add new invalid message and class, and exit loop
                        bedElementList[i].classList.add(DropdownInvalidClass);
                        bedElementList[i].appendChild(createRequiredMessage("Either rooms should not have double beds.",ValidationMessageClass));
                        $parameters.HasInvalidInputs = true;
                        invalidInput === "" ?  invalidInput = bedElementList[i].id : invalidInput = invalidInput;
                        break;
                    }
                }
            }
        }else{
            //Add invalid message and classes
            bedElementList[i].classList.add(DropdownInvalidClass);
            bedElementList[i].appendChild(createRequiredMessage(ValidationMessage,ValidationMessageClass));
            $parameters.HasInvalidInputs = true;
            invalidInput === "" ?  invalidInput = bedElementList[i].id : invalidInput = invalidInput;
        }
    }
    if(invalidInput !== ""){
        $parameters.InvalidInput = invalidInput;
    }
}

validateBedInputs($parameters.ParentClass,$parameters.DropdownInvalidClass,$parameters.ValidationMessage,$parameters.ValidationMessageClass,$parameters.CheckEitherValidation,$parameters.InvalidBedSizeList);
};
});

define("Connect2_OrbitMobile_MUI.controller$ValidateBottomBorderOnListItem", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.validateBottomBorderOnListItem$Action = function (in_CurrentRowNumberIn, in_ListLengthIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBottomBorderOnListItem$vars"))());
vars.value.in_CurrentRowNumberInLocal = in_CurrentRowNumberIn;
vars.value.in_ListLengthInLocal = in_ListLengthIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBottomBorderOnListItem$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:p2gjRP_iLkyVJDKeMYDxpg:/ClientActionFlows.p2gjRP_iLkyVJDKeMYDxpg:Md4Atb61zwxhn_rP47cMSg", "Connect2_OrbitMobile_MUI", "ValidateBottomBorderOnListItem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_FZZ8zMI2UGiFa5ZKRThVg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RDg5etlK80CqMpEQ8v9ACw", callContext.id);
// Out_HasBorder = In_CurrentRowNumber < In_ListLength - 1
outVars.value.out_HasBorderOut = (vars.value.in_CurrentRowNumberInLocal < (vars.value.in_ListLengthInLocal - 1));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gdWCyBodGEiNT+vSi112jA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:p2gjRP_iLkyVJDKeMYDxpg", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBottomBorderOnListItem$vars", [{
name: "In_CurrentRowNumber",
attrName: "in_CurrentRowNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "In_ListLength",
attrName: "in_ListLengthInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ValidateBottomBorderOnListItem$outVars", [{
name: "Out_HasBorder",
attrName: "out_HasBorderOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.validateBottomBorderOnListItem$Action = function (in_CurrentRowNumberIn, in_ListLengthIn) {
in_CurrentRowNumberIn = (in_CurrentRowNumberIn === undefined) ? 0 : in_CurrentRowNumberIn;
in_ListLengthIn = (in_ListLengthIn === undefined) ? 0 : in_ListLengthIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.validateBottomBorderOnListItem$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_CurrentRowNumberIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(in_ListLengthIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_HasBorder: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_HasBorderOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$ValidateSameFilters", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_BL.model$EventLocalitiesFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$EventLocalitiesFilterList", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "Connect2_OrbitMobile_IS.model$EventCalendarFiltersRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.validateSameFilters$Action = function (in_SelectedFiltersIn, in_CurrentFiltersIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ValidateSameFilters$vars"))());
vars.value.in_SelectedFiltersInLocal = in_SelectedFiltersIn.clone();
vars.value.in_CurrentFiltersInLocal = in_CurrentFiltersIn.clone();
var listIndexOfVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.ValidateSameFilters$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOfVar = listIndexOfVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:LcQzrBPBZUiTRfS8Fjaa8Q:/ClientActionFlows.LcQzrBPBZUiTRfS8Fjaa8Q:lybR_ZE1oDNeltHpyYfZDw", "Connect2_OrbitMobile_MUI", "ValidateSameFilters", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IoYFUghwMEOZk+sG5d4+Og", callContext.id);
// Validate Fast
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aP00cUFE6ESIBOa8MbMg7g", callContext.id);
// Out_SameFilters = In_SelectedFilters.FromDate = In_CurrentFilters.FromDate and In_SelectedFilters.ToDate = In_CurrentFilters.ToDate and In_SelectedFilters.Localities.Length = In_CurrentFilters.Localities.Length
outVars.value.out_SameFiltersOut = ((vars.value.in_SelectedFiltersInLocal.fromDateAttr.equals(vars.value.in_CurrentFiltersInLocal.fromDateAttr) && vars.value.in_SelectedFiltersInLocal.toDateAttr.equals(vars.value.in_CurrentFiltersInLocal.toDateAttr)) && (vars.value.in_SelectedFiltersInLocal.localitiesAttr.length === vars.value.in_CurrentFiltersInLocal.localitiesAttr.length));
// Same Basic Filters?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:14xqUkD84Ea8oYM3p_cNtQ", callContext.id) && outVars.value.out_SameFiltersOut)) {
// Foreach In_SelectedFilters.Localities
callContext.iterationContext.registerIterationStart(vars.value.in_SelectedFiltersInLocal.localitiesAttr);
try {var localitiesIterator = callContext.iterationContext.getIterator(vars.value.in_SelectedFiltersInLocal.localitiesAttr);
var localitiesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LlRv3qpZaUGfOwRTKJRZPA", callContext.id) && (localitiesIndex < vars.value.in_SelectedFiltersInLocal.localitiesAttr.length))) {
localitiesIterator.currentRowNumber = localitiesIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uMnFTuEn3UWsRPYIPNXtaQ", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(vars.value.in_CurrentFiltersInLocal.localitiesAttr, function (p) {
return p.equals(OS.BuiltinFunctions.textToLongInteger(vars.value.in_SelectedFiltersInLocal.localitiesAttr.getItem(localitiesIndex.valueOf()).idAsTextAttr));
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:C36eazAHeEG5isF0+1ic7A", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lX0fZzuvN06n12vDxfmQxw", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(vars.value.in_CurrentFiltersInLocal.localitiesAttr, listIndexOfVar.value.positionOut, callContext);
} else {
// Set False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:J+AqyE6kOke9ZqGjRn78rw", callContext.id);
// Out_SameFilters = False
outVars.value.out_SameFiltersOut = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mpnpAT_aGkq0gDy9NDMP7A", callContext.id);
return outVars.value;

}

localitiesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_SelectedFiltersInLocal.localitiesAttr);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m+FWNhb11EOmeVKJLBK0vw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yjywZ+OVR0yOKtHyftRPww", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LcQzrBPBZUiTRfS8Fjaa8Q", callContext.id);
}

};
var controller = Connect2_OrbitMobile_MUIController.default;
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ValidateSameFilters$vars", [{
name: "In_SelectedFilters",
attrName: "in_SelectedFiltersInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec();
},
complexType: Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec
}, {
name: "In_CurrentFilters",
attrName: "in_CurrentFiltersInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_ISModel.EventCalendarFiltersRec();
},
complexType: Connect2_OrbitMobile_ISModel.EventCalendarFiltersRec
}]);
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI.ValidateSameFilters$outVars", [{
name: "Out_SameFilters",
attrName: "out_SameFiltersOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_OrbitMobile_MUIController.default.clientActionProxies.validateSameFilters$Action = function (in_SelectedFiltersIn, in_CurrentFiltersIn) {
in_SelectedFiltersIn = (in_SelectedFiltersIn === undefined) ? new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec() : in_SelectedFiltersIn;
in_CurrentFiltersIn = (in_CurrentFiltersIn === undefined) ? new Connect2_OrbitMobile_ISModel.EventCalendarFiltersRec() : in_CurrentFiltersIn;
return controller.executeActionInsideJSNode(Connect2_OrbitMobile_MUIController.default.validateSameFilters$Action.bind(controller, in_SelectedFiltersIn, in_CurrentFiltersIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_SameFilters: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_SameFiltersOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_OrbitMobile_MUI.controller$ServerAction.GetBookletGuestsMaxRows", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getBookletGuestsMaxRows$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("GetBookletGuestsMaxRows", "screenservices/Connect2_OrbitMobile_MUI/ActionGetBookletGuestsMaxRows", "UaIGvolUHu_YZ77m9TYXHQ", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI$rssespaceconnect2_orbitmobile_bl_ActionGetBookletGuestsMaxRows"))();
executeServerActionResult.bookletGuestsMaxRowsOut = OS.DataConversion.ServerDataConverter.from(outputs.BookletGuestsMaxRows, OS.DataTypes.DataTypes.Integer);
return executeServerActionResult;
});
};
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI$rssespaceconnect2_orbitmobile_bl_ActionGetBookletGuestsMaxRows", [{
name: "BookletGuestsMaxRows",
attrName: "bookletGuestsMaxRowsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
});
define("Connect2_OrbitMobile_MUI.controller$ServerAction.GetBookletHelpersMaxRows", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getBookletHelpersMaxRows$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("GetBookletHelpersMaxRows", "screenservices/Connect2_OrbitMobile_MUI/ActionGetBookletHelpersMaxRows", "5Uiu_qSzm9Krt+fTKQn8SA", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI$rssespaceconnect2_orbitmobile_bl_ActionGetBookletHelpersMaxRows"))();
executeServerActionResult.bookletHelpersMaxRowsOut = OS.DataConversion.ServerDataConverter.from(outputs.BookletHelpersMaxRows, OS.DataTypes.DataTypes.Integer);
return executeServerActionResult;
});
};
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI$rssespaceconnect2_orbitmobile_bl_ActionGetBookletHelpersMaxRows", [{
name: "BookletHelpersMaxRows",
attrName: "bookletHelpersMaxRowsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
});
define("Connect2_OrbitMobile_MUI.controller$ServerAction.GetDirectoryAccess", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "APIDomain_Directory_IS.model", "APIDomain_Directory_IS.model$DirectoryAccessRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, APIDomain_Directory_ISModel) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getDirectoryAccess$ServerAction = function (idIn, typeIn, callContext) {
var controller = this.controller;
var inputs = {
Id: OS.DataConversion.ServerDataConverter.to(idIn, OS.DataTypes.DataTypes.LongInteger),
Type: OS.DataConversion.ServerDataConverter.to(typeIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("GetDirectoryAccess", "screenservices/Connect2_OrbitMobile_MUI/ActionGetDirectoryAccess", "xa6f7sgDrIzrxqYUTarQvg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI$rssespaceconnect2_legacyshared_ActionGetDirectoryAccess"))();
executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, APIDomain_Directory_ISModel.DirectoryAccessRec);
return executeServerActionResult;
});
};
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI$rssespaceconnect2_legacyshared_ActionGetDirectoryAccess", [{
name: "Response",
attrName: "responseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.DirectoryAccessRec();
},
complexType: APIDomain_Directory_ISModel.DirectoryAccessRec
}]);
});
define("Connect2_OrbitMobile_MUI.controller$ServerAction.GetEventViewInfo", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.model$EventViewRec"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.getEventViewInfo$ServerAction = function (in_EventViewIdIn, callContext) {
var controller = this.controller;
var inputs = {
In_EventViewId: OS.DataConversion.ServerDataConverter.to(in_EventViewIdIn, OS.DataTypes.DataTypes.Integer)
};
return controller.callServerAction("GetEventViewInfo", "screenservices/Connect2_OrbitMobile_MUI/ActionGetEventViewInfo", "YwylQxYiJPF3fkzxauEvlQ", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI$ActionGetEventViewInfo"))();
executeServerActionResult.out_EventViewOut = OS.DataConversion.ServerDataConverter.from(outputs.Out_EventView, Connect2_OrbitMobile_MUIModel.EventViewRec);
return executeServerActionResult;
});
};
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI$ActionGetEventViewInfo", [{
name: "Out_EventView",
attrName: "out_EventViewOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.EventViewRec();
},
complexType: Connect2_OrbitMobile_MUIModel.EventViewRec
}]);
});
define("Connect2_OrbitMobile_MUI.controller$ServerAction.SyncOrbitCardTypes", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$OrbitEventTypeList", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.model$OrbitMilestoneTypeList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitCardTypes$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("SyncOrbitCardTypes", "screenservices/Connect2_OrbitMobile_MUI/ActionSyncOrbitCardTypes", "0cSAk9XoRnZJuzWUDuU8AQ", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI$ActionSyncOrbitCardTypes"))();
executeServerActionResult.orbitEventTypesOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitEventTypes, Connect2_OrbitMobile_MUIModel.OrbitEventTypeList);
executeServerActionResult.orbitMilestoneTypesOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitMilestoneTypes, Connect2_OrbitMobile_MUIModel.OrbitMilestoneTypeList);
return executeServerActionResult;
});
};
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI$ActionSyncOrbitCardTypes", [{
name: "OrbitEventTypes",
attrName: "orbitEventTypesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.OrbitEventTypeList();
},
complexType: Connect2_OrbitMobile_MUIModel.OrbitEventTypeList
}, {
name: "OrbitMilestoneTypes",
attrName: "orbitMilestoneTypesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.OrbitMilestoneTypeList();
},
complexType: Connect2_OrbitMobile_MUIModel.OrbitMilestoneTypeList
}]);
});
define("Connect2_OrbitMobile_MUI.controller$ServerAction.SyncOrbitHostSurvey", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.model$HostSurveyStepList", "Connect2_OrbitMobile_BL.model$BedSizeRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$BedSizeList", "Connect2_OrbitMobile_BL.model$GenderPreferenceRec", "Connect2_OrbitMobile_MUI.model$GenderPreferenceList", "Connect2_OrbitMobile_BL.model$HouseFloorRec", "Connect2_OrbitMobile_MUI.model$HouseFloorList", "Connect2_OrbitMobile_BL.model$VehicleOwnerRec", "Connect2_OrbitMobile_MUI.model$VehicleOwnerList", "Connect2_OrbitMobile_BL.model$VehicleTypeRec", "Connect2_OrbitMobile_MUI.model$VehicleTypeList", "Connect2_OrbitMobile_BL.model$HelperStatusRec", "Connect2_OrbitMobile_MUI.model$HelperStatusList", "Connect2_OrbitMobile_BL.model$SurveyStatusRec", "Connect2_OrbitMobile_MUI.model$SurveyStatusList", "Connect2_OrbitMobile_BL.model$MealTypeRec", "Connect2_OrbitMobile_MUI.model$MealTypeList", "Connect2_OrbitMobile_BL.model$HelperRoleRec", "Connect2_OrbitMobile_MUI.model$HelperRoleList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitHostSurvey$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("SyncOrbitHostSurvey", "screenservices/Connect2_OrbitMobile_MUI/ActionSyncOrbitHostSurvey", "AZM1R_4D6woiBhOIYxLJ3A", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI$ActionSyncOrbitHostSurvey"))();
executeServerActionResult.hostSurveyStepOut = OS.DataConversion.ServerDataConverter.from(outputs.HostSurveyStep, Connect2_OrbitMobile_MUIModel.HostSurveyStepList);
executeServerActionResult.orbitBedSizeOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitBedSize, Connect2_OrbitMobile_MUIModel.BedSizeList);
executeServerActionResult.orbitGenderPreferenceOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitGenderPreference, Connect2_OrbitMobile_MUIModel.GenderPreferenceList);
executeServerActionResult.orbitHouseFloorOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitHouseFloor, Connect2_OrbitMobile_MUIModel.HouseFloorList);
executeServerActionResult.orbitVehicleOwnerOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitVehicleOwner, Connect2_OrbitMobile_MUIModel.VehicleOwnerList);
executeServerActionResult.orbitVehicleTypeOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitVehicleType, Connect2_OrbitMobile_MUIModel.VehicleTypeList);
executeServerActionResult.helperStatusOut = OS.DataConversion.ServerDataConverter.from(outputs.HelperStatus, Connect2_OrbitMobile_MUIModel.HelperStatusList);
executeServerActionResult.surveyStatusOut = OS.DataConversion.ServerDataConverter.from(outputs.SurveyStatus, Connect2_OrbitMobile_MUIModel.SurveyStatusList);
executeServerActionResult.mealTypeOut = OS.DataConversion.ServerDataConverter.from(outputs.MealType, Connect2_OrbitMobile_MUIModel.MealTypeList);
executeServerActionResult.helperRolesOut = OS.DataConversion.ServerDataConverter.from(outputs.HelperRoles, Connect2_OrbitMobile_MUIModel.HelperRoleList);
return executeServerActionResult;
});
};
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI$ActionSyncOrbitHostSurvey", [{
name: "HostSurveyStep",
attrName: "hostSurveyStepOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.HostSurveyStepList();
},
complexType: Connect2_OrbitMobile_MUIModel.HostSurveyStepList
}, {
name: "OrbitBedSize",
attrName: "orbitBedSizeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.BedSizeList();
},
complexType: Connect2_OrbitMobile_MUIModel.BedSizeList
}, {
name: "OrbitGenderPreference",
attrName: "orbitGenderPreferenceOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.GenderPreferenceList();
},
complexType: Connect2_OrbitMobile_MUIModel.GenderPreferenceList
}, {
name: "OrbitHouseFloor",
attrName: "orbitHouseFloorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.HouseFloorList();
},
complexType: Connect2_OrbitMobile_MUIModel.HouseFloorList
}, {
name: "OrbitVehicleOwner",
attrName: "orbitVehicleOwnerOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.VehicleOwnerList();
},
complexType: Connect2_OrbitMobile_MUIModel.VehicleOwnerList
}, {
name: "OrbitVehicleType",
attrName: "orbitVehicleTypeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.VehicleTypeList();
},
complexType: Connect2_OrbitMobile_MUIModel.VehicleTypeList
}, {
name: "HelperStatus",
attrName: "helperStatusOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.HelperStatusList();
},
complexType: Connect2_OrbitMobile_MUIModel.HelperStatusList
}, {
name: "SurveyStatus",
attrName: "surveyStatusOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.SurveyStatusList();
},
complexType: Connect2_OrbitMobile_MUIModel.SurveyStatusList
}, {
name: "MealType",
attrName: "mealTypeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.MealTypeList();
},
complexType: Connect2_OrbitMobile_MUIModel.MealTypeList
}, {
name: "HelperRoles",
attrName: "helperRolesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.HelperRoleList();
},
complexType: Connect2_OrbitMobile_MUIModel.HelperRoleList
}]);
});
define("Connect2_OrbitMobile_MUI.controller$ServerAction.SyncOrbitSurveyStatus", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_BL.model$SurveyStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$SurveyStatusList"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
Connect2_OrbitMobile_MUIController.default.syncOrbitSurveyStatus$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("SyncOrbitSurveyStatus", "screenservices/Connect2_OrbitMobile_MUI/ActionSyncOrbitSurveyStatus", "LRikOdkfcBkkJ5OA9boR9A", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI$ActionSyncOrbitSurveyStatus"))();
executeServerActionResult.hostSurveyStatusOut = OS.DataConversion.ServerDataConverter.from(outputs.HostSurveyStatus, Connect2_OrbitMobile_MUIModel.SurveyStatusList);
return executeServerActionResult;
});
};
Connect2_OrbitMobile_MUIController.default.constructor.registerVariableGroupType("Connect2_OrbitMobile_MUI$ActionSyncOrbitSurveyStatus", [{
name: "HostSurveyStatus",
attrName: "hostSurveyStatusOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.SurveyStatusList();
},
complexType: Connect2_OrbitMobile_MUIModel.SurveyStatusList
}]);
});
define("Connect2_OrbitMobile_MUI.controller", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller$debugger"], function (exports, OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUI_Controller_debugger) {
var OS = OutSystems.Internal;
var Connect2_OrbitMobile_MUIController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
Controller.prototype.getClientActionProxies = function (controller) {
var _this = this;
var thisController = controller;
return Object.keys(this.clientActionProxies).reduce(function (acc, actionName) {
acc[actionName] = function () {
if(thisController.isActive()) {
return _this.clientActionProxies[actionName].apply(thisController, arguments);
}

return Promise.resolve();
};
return acc;
}, {});
};
return Controller;
})(OS.Controller.BaseModuleController);
Connect2_OrbitMobile_MUIController.default = new Controller(null, "Connect2_OrbitMobile_MUI");
});
define("Connect2_OrbitMobile_MUI.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.clientVariables"], function (exports, Debugger, OutSystems, Connect2_OrbitMobile_MUIClientVariables) {
var OS = OutSystems.Internal;
var metaInfo = {
"Hjk7LdcWxUOvBz+EVZnZmA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_InputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Prmtg7CgCEWyLCpHc_xuxw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DropdownInvalidClassInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SlAgjoK53kW0Xcphvk84pA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ValidationMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+rgb__sC+0KApNizMaRJcg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ValidationMessageClassInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HTubWpRAY0iKXj4JOPWQlA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ValidValueInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Sq846kEXrEuhC6TsOngZDg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ForceEitherValidationInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"IPRZzfx7EUucbE48gFbs4g": {
getter: function (varBag, idService) {
return varBag.validateSingleBedInputJSResult.value;
}
},
"gN_7R8+I0UOafGzaOvr8ng": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2i9Pe0Z05kCrDyAOP1ztRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.startDateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"cEeg5XRpDEOT7uFZwG0N5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.endDateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"qSO7YKEFeEyemhB2Wa0Vww": {
getter: function (varBag, idService) {
return varBag.vars.value.locationInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qZG8VBn41UmhKp7_PMhHyg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedSubjectOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Xj36XaeOg0KTeoJF9Q9Yig": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitVehicleTypeInLocal;
}
},
"ZJOkQjZhfEiBkTbM0KUJpw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ParentClassInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gaLvGaijI0S+MXbTQ8vdag": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DropdownInvalidClassInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4eZnjLjg70mNtCpA3k+ijQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ValidationMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MY2rf1g2rU+3n3gGDxudig": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ValidationMessageClassInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"i1zfj6r1LEKCU1lwMFK2jw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_EmptyStringInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6MsOPzPlxEavhGu6ANa7ag": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CheckEitherValidationInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"QCuIfPgQKUGiQWZEHDo3Yg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_InvalidBedSizesInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"u6xWs3MGsU+8WXKI21Sbqg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_HasInvalidInputsOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"LDimaCwkU0GcgWRA9gtlZA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_InvalidInputOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8Q0nSvf9ekqaxmBEI11MHA": {
getter: function (varBag, idService) {
return varBag.validateAllBedInputsJSResult.value;
}
},
"JR+vAfnjuU2g2+MRclQdzw": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"T2AR6K13R028nQp2Pojz6w": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FvSGUyk7U0CUxI1NkstPRw": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"NzrRCoRibEejyXjNeq9u9g": {
getter: function (varBag, idService) {
return varBag.getDirectoryAccessVar.value;
}
},
"JoBkZoA2DE2rFP+6+HRfQg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventInfoVar;
}
},
"Do9M4Kmd2E6+7IxU5Owoqg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_AuditEventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mds7BJ+WJ0uG7B+j0qsZ9A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_EventHostIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"txmsJzWpZUOPvPsebuoliA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_EventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1TGqQw586Uy55m0ROnZtnA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_EventDateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"JLX3Z9YlT0GVv5v9Jysjyw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_EventLocalityInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sClDDDp1ak6USG22QT52Eg": {
getter: function (varBag, idService) {
return varBag.eventInfoJSONVar.value;
}
},
"MGlEtgbn9USNh_zeXEDKhQ": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitMilestoneTypesInLocal;
}
},
"6RMIG5uHZUS8m671SBNcIw": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitEventTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SmlB7EQioU2vVvjOC+NLBA": {
getter: function (varBag, idService) {
return varBag.outVars.value.localOrbitEventTypeOut;
}
},
"WpONU9ojAk2cKhOy+XM0uw": {
getter: function (varBag, idService) {
return varBag.getLocalOrbitEventTypeVar.value;
}
},
"Hjb_sXxmnU2ZIV7LX7cdVw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"fMBR8B4W7EyERqjTc20nFg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedDateOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"C7qxXQ5fJEOxxN5SMA6RZQ": {
getter: function (varBag, idService) {
return varBag.scrollInvalidInputIntoViewJSResult.value;
}
},
"WRLe3nAoFkWqMyGnSVXAPA": {
getter: function (varBag, idService) {
return varBag.vars.value.householdCarouselPreloadingVar;
}
},
"4_UcQTo4n0Kl0aQ9mneIww": {
getter: function (varBag, idService) {
return varBag.vars.value.in_GuestsInLocal;
}
},
"Kg_QD_hWBEu2Fg0BHuQXuQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsLimitedSubscriptionInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"r02h1zKM2UOujv7L8FsJXg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentListValueInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"0Ug3pS0B80uPqf88BRI8Pw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_HouseholdIdListOut;
}
},
"tn_CiIgYsEChJ6eB2CRAdg": {
getter: function (varBag, idService) {
return varBag.outVars.value.numberFilteredToCurrentOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"SoqrVmQBm06xOsTRBlmRzg": {
getter: function (varBag, idService) {
return varBag.outVars.value.numberFilteredOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"0QaCJo5LkkWYNXLTwuhzkw": {
getter: function (varBag, idService) {
return varBag.listFilter_NotDisabledVar.value;
}
},
"9l2piu1JfkCogXNyE_XRaA": {
getter: function (varBag, idService) {
return varBag.listFilter_DisplayVar.value;
}
},
"7pItZLfMzkqHRvPJuWT_ow": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"Uc3Iluz29EuZtSZ5RXBgfw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TimeFormatIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"qgK9eKaygkq8YNVzVGQ9Bw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedDateOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fAdFOS2c2EywHkTpX8oD3g": {
getter: function (varBag, idService) {
return varBag.createFormattedDateJSResult.value;
}
},
"WxY51oD9E06jhy_VmLdXrQ": {
getter: function (varBag, idService) {
return varBag.vars.value.dayFilterListInLocal;
}
},
"rnErnxwUg0GicmBExQ8rVw": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasSelectedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vZiqS+BVJ0SXa8FwNvYR5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.weekStartDateVar;
},
dataType: OS.DataTypes.DataTypes.Date
},
"TQAwQyuxxkS6b_06QDfuCw": {
getter: function (varBag, idService) {
return varBag.vars.value.weekEndDateVar;
},
dataType: OS.DataTypes.DataTypes.Date
},
"292qCjfLK0ytOz23vaj8Ww": {
getter: function (varBag, idService) {
return varBag.vars.value.numberOfWeeksVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"5C67HkqCu0WDsTyFuzwNIQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentCalendarDayInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"9x6hlRxzQk+ffFbe4BtIRw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_AgendaTitleOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8POfljLW_0G4Vq06Q6jvhg": {
getter: function (varBag, idService) {
return varBag.getWeekNumberJSResult.value;
}
},
"L7OLyRV3HkerorATTr1wsw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_JSON_NameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"d2mtCr6daEWvtTi1CvWV1g": {
getter: function (varBag, idService) {
return varBag.vars.value.in_GenderPreferencesInLocal;
}
},
"rnRXpNuOo0awSQfC0OWZvA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_GenderPreferenceOut;
}
},
"p9aKD7hD7UirIVEOTIaecA": {
getter: function (varBag, idService) {
return varBag.vars.value.dateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"VijGaqzb_UqGKjrdsKJOJQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.yearOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"TKU2WcLFkUO+FvClRGR+Qg": {
getter: function (varBag, idService) {
return varBag.getFullYearJSResult.value;
}
},
"S_liE76tyUeui7STmv_lFg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"r8qoE3R1HEW5H2bsIQ9aVw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IncludeTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"32esEPYgR0mw7cq0PYYecA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IncludeWeekDayInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"UDsDQAErYUOQbSJjBSvfTQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_AbbreviateWeekDayInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"46Jf1KHLrkmZlfZXW1jczQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SeparateByCommasInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Hg53XspMJUyjCWJ6aW2NAg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ReplaceSundayInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ZOs7nNoy7ESXCHf7R8CbCA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedDateTimeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"a3SClJqiiEy1ZUoA+Jcj5w": {
getter: function (varBag, idService) {
return varBag.createFormattedTransportDateTimeJSResult.value;
}
},
"McxeR+EvjUysnzKMnJGKJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_JSON_NameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tRdUf4ZK80uHa6JBtbxWfQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_VehicleTypesInLocal;
}
},
"POxtxj+vZEC+Xh7GEVBCwg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_VehicleTypeOut;
}
},
"QrplBlQ2206Y748TIrzUzQ": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadInLocal;
}
},
"BOB9e_HZukew28QcOO5bOw": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"XmqR_A3s1E+P9ia_7DQ6bA": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitVehicleOwnerInLocal;
}
},
"0Oyd3BkcnUiSQqANBgXkLg": {
getter: function (varBag, idService) {
return varBag.vars.value.helperStatusInLocal;
}
},
"5ay_TeoGg0qU2QbHTn1z7g": {
getter: function (varBag, idService) {
return varBag.vars.value.inputNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"a4QnYjX3GEOJXbsVLtT+1w": {
getter: function (varBag, idService) {
return varBag.vars.value.isPluralInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FYNgBOIT_kWJc5N5ZSxnEw": {
getter: function (varBag, idService) {
return varBag.outVars.value.validationMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OUgKxxEdG0aTCY+9UwMj5w": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadVar;
}
},
"NL22mMZsMEmQeuJDEw+OMw": {
getter: function (varBag, idService) {
return varBag.vars.value.appliedFilterInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"hU6Thu2nA0OAIBBRJLvwaQ": {
getter: function (varBag, idService) {
return varBag.vars.value.yearFilterInLocal;
}
},
"hLr3BHnzGkeTv_l65g2Gwg": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"B0dCUO8TBEqoCZz_59omRw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentRowNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"41El9F7O_0OvLaUxvbfUKw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ListLengthInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"_X0AO5RfyEuX3VrmMGARwg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_HasBorderOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rYh8wvgc10WqadY2hhXZoA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_EventViewIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"_5A1B7ic4UKrxCaPhmSoEQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_EventViewOut;
}
},
"9u2fYoeu8kW0XIkj_tvRVQ": {
getter: function (varBag, idService) {
return varBag.getEventViewInfoVar.value;
}
},
"LKI6ei5mzUisZjEH0skn8g": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitEventTypesInLocal;
}
},
"2s+ouQtr8UC0SKDJlarB2Q": {
getter: function (varBag, idService) {
return varBag.vars.value.temp_MembersByLocalityVar;
}
},
"CPvFZ88XT0ytl7aGfHprkA": {
getter: function (varBag, idService) {
return varBag.vars.value.temp_MembersByCountryVar;
}
},
"VNF2ZOyrRUqcEUuiB9rHDA": {
getter: function (varBag, idService) {
return varBag.vars.value.membersListInLocal;
}
},
"c7unlQT8N0GRWtjhIQ5Vbw": {
getter: function (varBag, idService) {
return varBag.outVars.value.membersByLocalityOut;
}
},
"SovHQWBXZU2jrqhc47Sb5A": {
getter: function (varBag, idService) {
return varBag.listDuplicate_TempCountry_ToFilterVar.value;
}
},
"FyKtT_v6jECrYBc582biKg": {
getter: function (varBag, idService) {
return varBag.listFilter_ByCountryVar.value;
}
},
"Lg2BidiWJke1Bwa_l1dkNw": {
getter: function (varBag, idService) {
return varBag.listDuplicate_TempCountry_ToCycleVar.value;
}
},
"keb8loEkK0a_ft02RnCjCQ": {
getter: function (varBag, idService) {
return varBag.listFilter_ByLocalityVar.value;
}
},
"gdDWnS6XVUiQnNcMoIwolQ": {
getter: function (varBag, idService) {
return varBag.listIndexOf_ExistingLocalityVar.value;
}
},
"3FBSp8V6gk2UVuBBxBGD8Q": {
getter: function (varBag, idService) {
return varBag.listDuplicate_ToFilterVar.value;
}
},
"V2_It8R7QkiZnW9xakOLFg": {
getter: function (varBag, idService) {
return varBag.listIndexOf_ExistingDataVar.value;
}
},
"Wiv6gbEqqku0JOxOJJhmhA": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitGenderPreferenceInLocal;
}
},
"zxRuCpmdPUGYOVKT9mLPGw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_InputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jd0bl2bHk0SzreWRQdHhLw": {
getter: function (varBag, idService) {
return varBag.blurElementJSResult.value;
}
},
"oc2vnh2Gs0WrXx7X418emg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventFilterInfoVar;
}
},
"HpRgEjq7w0OxleMegFOVIA": {
getter: function (varBag, idService) {
return varBag.vars.value.eventTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ky17oLsnE06sRWb1l2blpA": {
getter: function (varBag, idService) {
return varBag.vars.value.filtersInLocal;
}
},
"RUoFvCVzrEqD6aIpFvH94A": {
getter: function (varBag, idService) {
return varBag.eventInfoJSONVar.value;
}
},
"06IV3vYjhEWkMfaMcHBhfg": {
getter: function (varBag, idService) {
return varBag.vars.value.milestoneTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VeX8UQ_fFUW9roQa2v7x1Q": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rIpoDuh7CEC1+Y2RyE+ACA": {
getter: function (varBag, idService) {
return varBag.vars.value.milestoneNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5Bc6iG4dSkS7J8VqoPYIdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.dateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"b_PfAnbBJkuwbqJzdAqBmw": {
getter: function (varBag, idService) {
return varBag.vars.value.locationInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1CRg_wTcok+fXsKBssfhkA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedSubjectOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_s4p11pobEGTTDjmjWEoxQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_JSON_NameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XX3wXuc9tUm4y66LxnOSow": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MealTypesInLocal;
}
},
"4YcOrqKhXU2+IEkBFWbl1w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_MealTypeOut;
}
},
"nldqfVRMbkmYrvXxRiOgsw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"0zZGY9nOaU+0+VHQUeMF2A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IncludeTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BOsGGry740yYnH92UV6ETg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IncludeWeekDayInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xv18AAGrZE290z31q2ciDQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_WeekDayFirstLetterInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SvHL4loolEmllOzD0w842g": {
getter: function (varBag, idService) {
return varBag.vars.value.in_AbbreviateWeekDayInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"7XAEWUxmDkuA_z3Q+vLqJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SeparateByCommasInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tVMTFTSojUSgHUQkh+HDtA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ReplaceSundayInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"j6LwNuUpaE+YTs+cL6x5hQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedDateTimeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MdDdq5D1Z0aLUeYixwYXrQ": {
getter: function (varBag, idService) {
return varBag.createFormattedTransportDateTimeJSResult.value;
}
},
"zFc+1OsQ30u1yrSSlhxIzQ": {
getter: function (varBag, idService) {
return varBag.vars.value.eventInfoVar;
}
},
"9Cs71PlOgEaK+bZW1GsINA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_AuditEventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+TU3WFVdS06MfIo3CHUQqw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CalendarViewInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"kHXyd3QjKkqu8SF5eN5iGQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CalendarDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"5kG0TM7NekK_76PXECdLnQ": {
getter: function (varBag, idService) {
return varBag.getEventViewInfoVar.value;
}
},
"3arEk9DAnUKfTeruwR9w6Q": {
getter: function (varBag, idService) {
return varBag.eventInfoJSONVar.value;
}
},
"nUXKIApWnkuZkHRSmzAwZA": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadInLocal;
}
},
"+zvNQZ3W0EK2WGSEduz9eg": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"k3JGvQX2e0+V6NP4zoJlEg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_InputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4rO_OCEuuUGkwmy57e8rUg": {
getter: function (varBag, idService) {
return varBag.focusOnInputJSResult.value;
}
},
"dDinvSmrIkW4lpnWp1OBNA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MilestonesScreenListInLocal;
}
},
"Bprz4x9uXUeBBnyIKDt8vw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_MilestonesScreenListOut;
}
},
"MeQXMxrMdU+9OAoZq3qJLQ": {
getter: function (varBag, idService) {
return varBag.listFilter_PossibleMilestonesVar.value;
}
},
"o2lnOZlO9kiCs+Sw2q6gWw": {
getter: function (varBag, idService) {
return varBag.getBookletHelpersMaxRowsVar.value;
}
},
"_uZFJGLCxkKYn5ulqnjEZQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"YQA4YHccCUK9DKFS7xpCAQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsFirstLetterOnlyInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jGNhypU+_0i95zZ35mjAcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ReplaceSundayInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"IyJdu3WpUEGhoh90b9_Svg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_WeekdayOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tua1VTgui0mgnWbqPfutxw": {
getter: function (varBag, idService) {
return varBag.createFormattedWeekdayJSResult.value;
}
},
"EjszhvIpX0uDqyzbSNUvDg": {
getter: function (varBag, idService) {
return varBag.vars.value.fileNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kKe7dSIJyEi+8s6QtjEavQ": {
getter: function (varBag, idService) {
return varBag.vars.value.fileExtensionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XNe3bzzs8EC_VzHcuhaZGg": {
getter: function (varBag, idService) {
return varBag.outVars.value.fileWithExtensionOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nuxZMDgDJEmViS04ReXegw": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadInLocal;
}
},
"XFybbBC7WUGop3UmQTzjlg": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"ZDwCN01FgUSH2KMMr2qUaA": {
getter: function (varBag, idService) {
return varBag.vars.value.photobookCaptionInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9Exf+yCcfkCUPAWzPO1fwA": {
getter: function (varBag, idService) {
return varBag.outVars.value.childrenNamesOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AAO0eqzO2UyjDY89f6JVbg": {
getter: function (varBag, idService) {
return varBag.extractChildrenNamesJSResult.value;
}
},
"_d9y2huCDEWoomnkUX3c2A": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadInLocal;
}
},
"Srk5IeJoLUWdIOiDbGTJWA": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"PbcElOVc7Eum8zGGbXNgxA": {
getter: function (varBag, idService) {
return varBag.vars.value.mealTypeInLocal;
}
},
"U80LlkDu702HP3+jNQ3Yqg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateToFilterByInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"n3KcsJSPGUOzdVjuCMpbtQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TimeTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nqs5tA6+aEiboVqA3Mhwpw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MilestonesInLocal;
}
},
"RaJS8E1cLkqDozT8PCDIYw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_MilestonesOut;
}
},
"lOWoEu9vTEacxvCU+8foNw": {
getter: function (varBag, idService) {
return varBag.listFilter_AfterVar.value;
}
},
"4pEoFgaj00WOtd8jH_zqmQ": {
getter: function (varBag, idService) {
return varBag.listFilter_DayVar.value;
}
},
"bEPCmAN4lECQWmXAj6VfeA": {
getter: function (varBag, idService) {
return varBag.listFilter_BeforeVar.value;
}
},
"1_pG6so3k0CftciXUHJGOA": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitHouseFloorInLocal;
}
},
"xfjuQdFpXkylZr39QPA0wA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"H60pjwa5LUWbXxJl8ux9Ew": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedDateTimeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"L4XUs8N8gUyEm_naC3ncew": {
getter: function (varBag, idService) {
return varBag.createFormattedDate_SurveyJSResult.value;
}
},
"qeSq5PwtbU6o04hC7KBnrw": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadInLocal;
}
},
"fs6EKUiJ1kOME3sVPdQMIw": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"sHnPUt2SqkuXFD05qhHrAA": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadInLocal;
}
},
"0oubmmVe_0Skt4WztrRPdg": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"Ap8PIiQ+wkev5kC778WH6w": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateTimeDepartureInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"4TnUHiugwE2ZJeXcq25osw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateTimeArrivalInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"kKecusQLgkiMRMZ4FagE0g": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedTimeDifferenceOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"o3B2IRO0MkaBzo6QMk3yMA": {
getter: function (varBag, idService) {
return varBag.createFormattedTimeDifferenceJSResult.value;
}
},
"EVLxMp2jC0mlprV84rCaww": {
getter: function (varBag, idService) {
return varBag.vars.value.in_JSON_NameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EIiaDN7SZUm6WsJD54DsnA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_HelperStatusInLocal;
}
},
"D6DIam7uNEC9xjKj_8EbrA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_HelperStatusOut;
}
},
"GjwvO0VAMkSKN8g2nEFXbg": {
getter: function (varBag, idService) {
return varBag.scrollContentToTopJSResult.value;
}
},
"HzsWESyBaUGprJyJWENfow": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SurveyStatusIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"5HYSU8A46k2kuK4jDiTnWQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_SurveyStatusOut;
}
},
"NDuUYGHFekmJv4EH0vt77g": {
getter: function (varBag, idService) {
return varBag.getLocalSurveyStatusByIdVar.value;
}
},
"XXfSqhMOOEizOltoDtsUoQ": {
getter: function (varBag, idService) {
return varBag.vars.value.downloadFolderURIVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+noCveSPx0mDFlsqRvcSMg": {
getter: function (varBag, idService) {
return varBag.vars.value.filePathVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XJpWTx+oQkGeL85FFZsgog": {
getter: function (varBag, idService) {
return varBag.vars.value.urlInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fcENYdsqzkymrs33AG25ng": {
getter: function (varBag, idService) {
return varBag.vars.value.filenameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JwC8bl15Gkyom1xnOyDCVA": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasErrorOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ylnlTxZr_0ueW95mnGOeRg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yEme5ap3Ik6VsoB9uYhqxg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"BYgrBChIIUK_SWYa+DENlw": {
getter: function (varBag, idService) {
return varBag.downloadFileVar.value;
}
},
"B7x2j_oYtESjr7wCAbw4Zw": {
getter: function (varBag, idService) {
return varBag.getMetadataVar.value;
}
},
"fQNR0r9VLUuI4Ft8rpMR0A": {
getter: function (varBag, idService) {
return varBag.createDirectoryVar.value;
}
},
"NCBUTRzIzE6IxzOXqJDgiw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_JSON_NameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lHq8m79SREy81GIVgWRxwg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_HelperRolesInLocal;
}
},
"1Tgi8S8Sh0GGmZJbofKVMA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_HelperRolesOut;
}
},
"ee3b1c+JF0y2fnWp24ccIA": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadInLocal;
}
},
"VzcdHOR2t0mvfo52S6MvAQ": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"ngP5AJZ3ZkWHz0X_KnW2QQ": {
getter: function (varBag, idService) {
return varBag.syncOrbitHostSurveyVar.value;
}
},
"Bti5IWBvQkqPeGzbPlGnQQ": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadInLocal;
}
},
"U0+Y+ShHJ0CmzlPbQwW0kQ": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"qV3mDdYx3k+oPnhZixONMQ": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitStaticEntitiesInLocal;
}
},
"iXvK1LBZ9UOTbZEpxCYjcA": {
getter: function (varBag, idService) {
return varBag.getHasOrbitHostSurveyVar.value;
}
},
"hW_gpENFt0WQcM7_oHZ_jQ": {
getter: function (varBag, idService) {
return varBag.vars.value.temp_HelpersByRoleVar;
}
},
"sb1cNH9SYkO1IPRN7PH4mw": {
getter: function (varBag, idService) {
return varBag.vars.value.membersListInLocal;
}
},
"pGDUkntY4Uef5i6WEf0kOw": {
getter: function (varBag, idService) {
return varBag.outVars.value.helpersByRoleOut;
}
},
"+PrBJRAO+0edPk78seRNKA": {
getter: function (varBag, idService) {
return varBag.listDuplicate_ToFilterVar.value;
}
},
"zTFQXNDRIEKYQsioKn9C+A": {
getter: function (varBag, idService) {
return varBag.listDuplicate_ToCycleVar.value;
}
},
"myfCYrNUIEuADLRR5QEi7g": {
getter: function (varBag, idService) {
return varBag.groupMembersByCountryVar.value;
}
},
"lYqYh3+ogkKU6TNZSixQjA": {
getter: function (varBag, idService) {
return varBag.listFilter_ByRoleVar.value;
}
},
"RDhw3Vl_WU+9Wf6aNF+TYw": {
getter: function (varBag, idService) {
return varBag.listIndexOf_ExistingDataVar.value;
}
},
"7zJ1zp74OU2dDpM522R+iw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SelectedFiltersInLocal;
}
},
"eX0ntqSaSkydXRdPhh391A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentFiltersInLocal;
}
},
"buGVS73HyUqPoRB8prpatw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_SameFiltersOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"uMnFTuEn3UWsRPYIPNXtaQ": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"QR7Uk9h4i0iVAsn69X0GxQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_TimestampOut;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"b8CqyJtQi0O4JbZ4eY_9bg": {
getter: function (varBag, idService) {
return varBag.getUnixEpochJSResult.value;
}
},
"WvmSb1z9Fk6RIGvO9NsJGw": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitBedSizeInLocal;
}
},
"cf0_pPXZOkGoHuThPfbj7w": {
getter: function (varBag, idService) {
return varBag.vars.value.in_JSON_NameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"L+or59Cn60i6rdWjOKq+Wg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_HouseFloorInLocal;
}
},
"VRydqwP1O026Zjl9U0A2Yg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_HouseFloorOut;
}
},
"YRa_aAKbBU6iA51guzwzlA": {
getter: function (varBag, idService) {
return varBag.vars.value.eventInfoVar;
}
},
"jgXfjRT20kWYrOAHRsqzaQ": {
getter: function (varBag, idService) {
return varBag.vars.value.eventTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"j07ilc3MCUa1NXueb1si9A": {
getter: function (varBag, idService) {
return varBag.vars.value.clickedHouseholdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"egYvO1ikZ0y3l_xUaiA9ew": {
getter: function (varBag, idService) {
return varBag.vars.value.clickedHouseholdNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0DF2bBBXzU6ZsS2avn0z1w": {
getter: function (varBag, idService) {
return varBag.vars.value.eventDateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"DRxqh7vqo0Sx0weOKQcjaQ": {
getter: function (varBag, idService) {
return varBag.vars.value.eventLocalityInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"35p9aNvAQk+FelxksJisqQ": {
getter: function (varBag, idService) {
return varBag.eventInfoJSONVar.value;
}
},
"nvAdqI9je0uj3gmw+Gl_mA": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitMilestoneTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wh9EbnNnv0OP_lmUllnaTA": {
getter: function (varBag, idService) {
return varBag.outVars.value.localOrbitMilestoneTypeOut;
}
},
"ZnVbxgPXcUavxQ3etKovVw": {
getter: function (varBag, idService) {
return varBag.getLocalOrbitMilestoneTypeVar.value;
}
},
"fv_xvyqpBk23y2MmXPBvmA": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadVar;
}
},
"fgsJEXan2U6Zanf6u4jnNg": {
getter: function (varBag, idService) {
return varBag.vars.value.isASCInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wd08G_64t0CfNck+YR7Z7A": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"YFb86yGAY0CRnWZSz7rRkQ": {
getter: function (varBag, idService) {
return varBag.vars.value.hostSurveyStatusInLocal;
}
},
"K3tS0v3ydkectr_ynPF1bQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TravelIdentifierInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FRbbW2hhpk6aYj7uCmjlag": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TravelInfoInLocal;
}
},
"e7o1SH1U20uKd2OP9uDuKg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MilestoneTypeInLocal;
}
},
"3ZJHJ+kOKki32h2xvUTEPg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isShowOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oxN_6OYOukOmjOhWtLSd3Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MilestoneTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"M2er1coTTES1HUuKZa3S1Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MilestoneDateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"PtbxkwBdVkSDnlaTxUM7iw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedDateTimeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wEvuuyoF40yPjXEbDMBi+A": {
getter: function (varBag, idService) {
return varBag.vars.value.surveyStepInLocal;
}
},
"L_DurUDzpUyGztUvGOUiLA": {
getter: function (varBag, idService) {
return varBag.vars.value.urlInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Tjpwrx6XFE6ixlpcF4lGVw": {
getter: function (varBag, idService) {
return varBag.vars.value.filenameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bF5wSOVGE0ucJnnw1wx0sg": {
getter: function (varBag, idService) {
return varBag.vars.value.contentTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gbNfG0aBxEakr4V3K1ktZA": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasErrorOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"haR0IbCIDkKyhsfk_uG7JQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KxcrklVhnEqvdeyZ4wY3CA": {
getter: function (varBag, idService) {
return varBag.openDocumentInFileViewerVar.value;
}
},
"8YVxpC_V3E+zl3Z4FmBzkA": {
getter: function (varBag, idService) {
return varBag.checkFileTransferPluginVar.value;
}
},
"Pjv5u8GPhUWYDTKkfN2hjw": {
getter: function (varBag, idService) {
return varBag.checkFileViewerPluginVar.value;
}
},
"1FS5yWVYbk+MVddoWRpwkw": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"4wTODhxc_EeVnbgtjJ1pwQ": {
getter: function (varBag, idService) {
return varBag.checkForCordovaJSResult.value;
}
},
"mq+IQUOpOUyzaZGjBbtgfw": {
getter: function (varBag, idService) {
return varBag.openInNewTabJSResult.value;
}
},
"A8oTXlq_YUORSms1qXBjLA": {
getter: function (varBag, idService) {
return varBag.openInSystemBrowserJSResult.value;
}
},
"ciwZvgQiW0Gw8wT+Idecyw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MainColorInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qSGuq4zRYUaDUSws7ZgLAA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ShadeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HNr8MSHZLkqzwWc6WwrrPQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ColorVarOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_RWemORk3US4p4lpwxm+Zw": {
getter: function (varBag, idService) {
return varBag.outVars.value.canOpenDirectlyOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ucLzVMPTHkS2X9d3aPKEew": {
getter: function (varBag, idService) {
return varBag.isWebJSResult.value;
}
},
"jUqvso3AY0y7N8RQvfmQqg": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadInLocal;
}
},
"_He+86ZVfEK_pnApmNRTwA": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"ZnqSftn_ZUuRMsoCNzqnpQ": {
getter: function (varBag, idService) {
return varBag.getOrbitSurveyStatusVar.value;
}
},
"upi98q08V0y0vZgQED_92w": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"mj6vw5Zz+EuDPEDwUWxdpA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedDateOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LGerT4YzKUqSZDtKH6DH7A": {
getter: function (varBag, idService) {
return varBag.vars.value.eventInfoVar;
}
},
"I6+JScz6Y0KWWEMSjJAFoA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_AuditEventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"R5Kw8aGvekeMLokTgQwOdg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_RequestTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"zfEQX2C40EmjNh6t9fpdqA": {
getter: function (varBag, idService) {
return varBag.eventInfoJSONVar.value;
}
},
"Nki_m7BoNUeojsA6VZKzSw": {
getter: function (varBag, idService) {
return varBag.vars.value.auditPayloadInLocal;
}
},
"s5+xDPu1tUOY8SRvOC71Mg": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_AuditPayloadVar.value;
}
},
"nm_dKH0uIEOFdFp3aEqfrg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"XtVwobgE0UKhjOepUld2VA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedDateTimeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FWYsoeeU7EeZwgR7x47k6g": {
getter: function (varBag, idService) {
return varBag.createFormattedTimeJSResult.value;
}
},
"jDp3LHidZkehfhQ_5gESgw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_HelperTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nI_MGrCtbEan8f+tmeRiGw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedStringOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"J+yT7Y11KUi8b2VLD2y5jw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentStepInLocal;
}
},
"hGmzzq5ULkK2p39xmmBGKg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_StepPropertiesInLocal;
}
},
"jHHPwwKTxkuOxeTXjdmNMA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_CurrentStepPropertiesOut;
}
},
"eE2qrc35u0iPoYPDjeeyUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.scrollPixelsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"jhNgpDrmQU+rCR6gUDM0HQ": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"SSi0LP9B80alBAWuMUnkpw": {
getter: function (varBag, idService) {
return varBag.scrollContentJSResult.value;
}
},
"YOBM8zHTTkm71hxUp8s_3A": {
getter: function (varBag, idService) {
return varBag.vars.value.textYesterdayVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Nqcq6muYxUOcHdEKuCZvVw": {
getter: function (varBag, idService) {
return varBag.vars.value.textTodayVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"01xXsrhEBkOVZTVYQ1sISg": {
getter: function (varBag, idService) {
return varBag.vars.value.textTomorrowVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hbZecw_Y70eqW2OJpza1VA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_WeekStartDayInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"B1fo8Yr9mkaAzEOmvvDa4A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DayOfWeekInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"FsAj2NwwWkOoMAPHUBhYAg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedTextOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iVTBI1szH0imERIm7WEnVQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_JSON_NameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NsIecOjJlEKjllH__Y9zIQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_VehicleOwnersInLocal;
}
},
"d72v382Mdk+27DcfF2fiJw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_VehicleOwnerOut;
}
},
"zaLXQVLGEEuzakjXJSn6TA": {
getter: function (varBag, idService) {
return varBag.getBookletGuestsMaxRowsVar.value;
}
},
"PwcaQ6b7tEiboj2dxp7ozA": {
getter: function (varBag, idService) {
return varBag.vars.value.milestoneTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yAWSJJHkqk+C1y8mpxWDJw": {
getter: function (varBag, idService) {
return varBag.outVars.value.skeletonLoadingIdOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"tnfEN_7A6ESoeg9SNZKR6Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsCancelInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1QpkWDUI7EmChLc1xjaY4g": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsNoInfoInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"yAFC_T0njU+vDWxEfDjp0w": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsDeleteInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Ruip2p7x80GNy24RouO0Xg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsReturnNavigationInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cPeUD6VKdUS6Spt3r+7oqA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsReturnBackInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"urKdPDK4tEizQfiBtNqfYw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_TitleOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"i4L8bxarcECyCb+NF2xmiw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_MessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ei9v+Zgo_UeZ9quD0lNTgg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateInLocal;
}
},
"XNc3fhZN_kejTNJaInXN+Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FixedDateOut;
}
},
"4e08JZ0p6EC8FyihchuzNA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TimeInLocal;
},
dataType: OS.DataTypes.DataTypes.Time
},
"IaQEtGCm8U2SvdU5xLLr4Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedElapsedTimeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6Wu8DS6CUkOYiXmVyBZ7fg": {
getter: function (varBag, idService) {
return varBag.createFormattedElapsedTimeJSResult.value;
}
},
"D+gE6d57fUiQXMlMaaE7rQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_GuestCountInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tEAp+5t0X0ihJoREFjdYOw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_GuestCountOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"835z9nh8J0ecFQ6_FF2fNg": {
getter: function (varBag, idService) {
return varBag.syncOrbitCardTypesVar.value;
}
},
"tO2jNjg9X02h+2usft4WFQ": {
getter: function (varBag, idService) {
return varBag.vars.value.milestoneTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6p3v9Eci2Eq++B4zcR+e0w": {
getter: function (varBag, idService) {
return varBag.vars.value.milestoneNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2RGLxvt3rUCqLcgkCPmSYA": {
getter: function (varBag, idService) {
return varBag.vars.value.dateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"+PFVIYZsxU+eqffLSs8irg": {
getter: function (varBag, idService) {
return varBag.vars.value.transportNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"K7S3Kt17t0KeEHoAt5kZSw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedSubjectOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"89rY5uXu1kypPobRHYEU3Q": {
getter: function (varBag, idService) {
return varBag.vars.value.helperRolesInLocal;
}
},
"o4eXfoXYA062DnnRJ8_AAA": {
getter: function (varBag, idService) {
return varBag.vars.value.endingVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"cMQQYGrzik2psI6qTVBHoQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_NumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Wm6oVUolGk+TlMtB9RSk_Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsFormattedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6cm1pNdNWUOEqkZ0d9QLRA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_OrdinalEndingOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jRH2QmB0JkeqJiDDlNmnLQ": {
getter: function (varBag, idService) {
return Connect2_OrbitMobile_MUIClientVariables.getBookletGuestsMaxRows();
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Pis45abMwEeZqutRgGk23A": {
getter: function (varBag, idService) {
return Connect2_OrbitMobile_MUIClientVariables.getBookletHelpersMaxRows();
},
dataType: OS.DataTypes.DataTypes.Integer
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
