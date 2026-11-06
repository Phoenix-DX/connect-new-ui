define("Connect2_Assemble_MUI.controller$AuditSubscriptionEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$TextLongIntegerLongIntegerRecord"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.auditSubscriptionEvent$Action = function (householdIdIn, localityIdIn, countryCodeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.AuditSubscriptionEvent$vars"))());
vars.value.householdIdInLocal = householdIdIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.countryCodeInLocal = countryCodeIn;
var subscriptionEventSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.subscriptionEventSerializeVar = subscriptionEventSerializeVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:BytC+ElLY02l+TMCvDvq8g:/ClientActionFlows.BytC+ElLY02l+TMCvDvq8g:S4hz5SgQimsfZGww5j9YkA", "Connect2_Assemble_MUI", "AuditSubscriptionEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:71fsk8+_O0eSNVV3cAnMcA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:AeqQmg_IsEKR6QCQazpERw", callContext.id);
// SubscriptionEventInfo.LocalityId = LocalityId
vars.value.subscriptionEventInfoVar.localityIdAttr = vars.value.localityIdInLocal;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:AeqQmg_IsEKR6QCQazpERw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SubscriptionEventInfo.HouseholdId = HouseholdId
vars.value.subscriptionEventInfoVar.householdIdAttr = vars.value.householdIdInLocal;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:AeqQmg_IsEKR6QCQazpERw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// SubscriptionEventInfo.CountryCode = CountryCode
vars.value.subscriptionEventInfoVar.countryCodeAttr = vars.value.countryCodeInLocal;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:AVKNA9w4BUGQULGkHgKdaw", callContext.id);
// JSON Serialize: SubscriptionEventSerialize
subscriptionEventSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.subscriptionEventInfoVar, false, false);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:or_fKCq9skuBuo_mrUOvQA", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper2
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory.subscriptionRequired, subscriptionEventSerializeVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:fzALSEno7UWful3EcNQAQQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:BytC+ElLY02l+TMCvDvq8g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:BytC+ElLY02l+TMCvDvq8g", callContext.id);
throw ex;

});
};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.AuditSubscriptionEvent$vars", [{
name: "HouseholdId",
attrName: "householdIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "CountryCode",
attrName: "countryCodeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SubscriptionEventInfo",
attrName: "subscriptionEventInfoVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_Assemble_MUIModel.TextLongIntegerLongIntegerRecord();
},
complexType: Connect2_Assemble_MUIModel.TextLongIntegerLongIntegerRecord
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.auditSubscriptionEvent$Action = function (householdIdIn, localityIdIn, countryCodeIn) {
householdIdIn = (householdIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : householdIdIn;
localityIdIn = (localityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localityIdIn;
countryCodeIn = (countryCodeIn === undefined) ? "" : countryCodeIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.auditSubscriptionEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(householdIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(localityIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(countryCodeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_Assemble_MUI.controller$CompareAssembleFilters", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleEventFilterRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.compareAssembleFilters$Action = function (assembleMeetingFilterIn, assembleMeetingFilter2In, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.CompareAssembleFilters$vars"))());
vars.value.assembleMeetingFilterInLocal = assembleMeetingFilterIn.clone();
vars.value.assembleMeetingFilter2InLocal = assembleMeetingFilter2In.clone();
var jSONSerialize2Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.CompareAssembleFilters$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize2Var = jSONSerialize2Var;
varBag.jSONSerialize1Var = jSONSerialize1Var;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:V4TRSsQGGEKUHLr5j6Dy+g:/ClientActionFlows.V4TRSsQGGEKUHLr5j6Dy+g:sG3ciBARdnrt2cLwZ1awdA", "Connect2_Assemble_MUI", "CompareAssembleFilters", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Kqg0mjzLF0uPxtwrwEJGxQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:KPKgvglR+Ei_C03VSMlPcw", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.assembleMeetingFilterInLocal, false, false);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:O21YFoFo6Eu0SUTfMdwalQ", callContext.id);
// JSON Serialize: JSONSerialize2
jSONSerialize2Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.assembleMeetingFilter2InLocal, false, false);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ldfYtULyaEugCvWsJDtaJg", callContext.id);
// IsDifferent = JSONSerialize1.JSON <> JSONSerialize2.JSON
outVars.value.isDifferentOut = ((jSONSerialize1Var.value.jSONOut) !== (jSONSerialize2Var.value.jSONOut));
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:uRJZdEaGsEKjuxkNCCeI9Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:V4TRSsQGGEKUHLr5j6Dy+g", callContext.id);
}

};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.CompareAssembleFilters$vars", [{
name: "AssembleMeetingFilter",
attrName: "assembleMeetingFilterInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_Assemble_CSModel.AssembleEventFilterRec();
},
complexType: Connect2_Assemble_CSModel.AssembleEventFilterRec
}, {
name: "AssembleMeetingFilter2",
attrName: "assembleMeetingFilter2InLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_Assemble_CSModel.AssembleEventFilterRec();
},
complexType: Connect2_Assemble_CSModel.AssembleEventFilterRec
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.CompareAssembleFilters$outVars", [{
name: "IsDifferent",
attrName: "isDifferentOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.compareAssembleFilters$Action = function (assembleMeetingFilterIn, assembleMeetingFilter2In) {
assembleMeetingFilterIn = (assembleMeetingFilterIn === undefined) ? new Connect2_Assemble_CSModel.AssembleEventFilterRec() : assembleMeetingFilterIn;
assembleMeetingFilter2In = (assembleMeetingFilter2In === undefined) ? new Connect2_Assemble_CSModel.AssembleEventFilterRec() : assembleMeetingFilter2In;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.compareAssembleFilters$Action.bind(controller, assembleMeetingFilterIn, assembleMeetingFilter2In), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsDifferent: OS.DataConversion.JSNodeParamConverter.to(actionResults.isDifferentOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_Assemble_MUI.controller$GeAssembleSummaryListFilterLabel", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecordList", "Connect2_Assemble_CS.model$AssembleEventFilterRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.geAssembleSummaryListFilterLabel$Action = function (assembleEventFilterIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GeAssembleSummaryListFilterLabel$vars"))());
vars.value.assembleEventFilterInLocal = assembleEventFilterIn.clone();
var listFilter_SelectedAssembleEventTypeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GeAssembleSummaryListFilterLabel$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_SelectedAssembleEventTypeVar = listFilter_SelectedAssembleEventTypeVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:ICuaoiQdSkSBgbRcWyEk0A:/ClientActionFlows.ICuaoiQdSkSBgbRcWyEk0A:HcLbOx4WDql89tJyauLCtQ", "Connect2_Assemble_MUI", "GeAssembleSummaryListFilterLabel", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:hD39FkgYVUiiMWXsnJTq6g", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Ds0giA3Gv0mNbgG74UA1JA", callContext.id);
// Execute Action: ListFilter_SelectedAssembleEventType
listFilter_SelectedAssembleEventTypeVar.value = OS.SystemActions.listFilter(vars.value.assembleEventFilterInLocal.assembleEventTypeAttr, function (p) {
return p.isSelectedAttr;
}, callContext);

// None or all selected
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:YNEEsOE0vkqmE_C8yIKprA", callContext.id) && ((vars.value.assembleEventFilterInLocal.assembleEventTypeAttr.length === listFilter_SelectedAssembleEventTypeVar.value.filteredListOut.length) || listFilter_SelectedAssembleEventTypeVar.value.filteredListOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:so91Fi24Z0O+gR4XMT2lYw", callContext.id);
// Label = Label + "All Meeting Types"
outVars.value.labelOut = (outVars.value.labelOut + "All Meeting Types");
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:aZwM5e7tnkyILbTVEZ9Sxg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Kp06ewujRkiTDU_Qge0+yw", callContext.id);
// Label = Label + "Meeting Types (" + ListFilter_SelectedAssembleEventType.FilteredList.Length + ")"
outVars.value.labelOut = (((outVars.value.labelOut + "Meeting Types (") + (listFilter_SelectedAssembleEventTypeVar.value.filteredListOut.length).toString()) + ")");
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:aZwM5e7tnkyILbTVEZ9Sxg", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ICuaoiQdSkSBgbRcWyEk0A", callContext.id);
}

};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GeAssembleSummaryListFilterLabel$vars", [{
name: "AssembleEventFilter",
attrName: "assembleEventFilterInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_Assemble_CSModel.AssembleEventFilterRec();
},
complexType: Connect2_Assemble_CSModel.AssembleEventFilterRec
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GeAssembleSummaryListFilterLabel$outVars", [{
name: "Label",
attrName: "labelOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.geAssembleSummaryListFilterLabel$Action = function (assembleEventFilterIn) {
assembleEventFilterIn = (assembleEventFilterIn === undefined) ? new Connect2_Assemble_CSModel.AssembleEventFilterRec() : assembleEventFilterIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.geAssembleSummaryListFilterLabel$Action.bind(controller, assembleEventFilterIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Label: OS.DataConversion.JSNodeParamConverter.to(actionResults.labelOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_Assemble_MUI.controller$GetAssembleEventListDateRangeFilter", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_MUI.model$DateTimeDateTimeRecord"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.getAssembleEventListDateRangeFilter$Action = function (assembleFilterTimeOptionIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetAssembleEventListDateRangeFilter$vars"))());
vars.value.assembleFilterTimeOptionIdInLocal = assembleFilterTimeOptionIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetAssembleEventListDateRangeFilter$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:h3nEPXHOAE2PornpZqdh2g:/ClientActionFlows.h3nEPXHOAE2PornpZqdh2g:1qI0pLXTAQO5uni2wVfF_g", "Connect2_Assemble_MUI", "GetAssembleEventListDateRangeFilter", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:uZZ3jr8Y7ka6oibfncYXSg", callContext.id);
// Upcoming meetings?
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:vp97CiXTtkaX5ymbh+ClNw", callContext.id) && (vars.value.assembleFilterTimeOptionIdInLocal === Connect2_Assemble_MUIModel.staticEntities.viewmodeType.upcomingMeetings))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:MD3HtXJdX0iQcBmV9a7g2g", callContext.id);
// DateRange.StartDateTime = CurrDateTime
outVars.value.dateRangeOut.startDateTimeAttr = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:MD3HtXJdX0iQcBmV9a7g2g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// DateRange.EndDateTime = AddSeconds
outVars.value.dateRangeOut.endDateTimeAttr = OS.BuiltinFunctions.addSeconds(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.buildDateTime(OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(outVars.value.dateRangeOut.startDateTimeAttr, 36)), (new OS.DataTypes.DateTime(1900, 1, 1, 0, 0, 0))), 1), -1);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:B3BjQUiSwkWfGz_yvUtcew", callContext.id);
} else {
// Past meetings?
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:m3om74EhoEaRtmtapf8HTQ", callContext.id) && (vars.value.assembleFilterTimeOptionIdInLocal === Connect2_Assemble_MUIModel.staticEntities.viewmodeType.pastMeetings))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Lwf4ccsHUkKKqjk6eLvn8g", callContext.id);
// DateRange.EndDateTime = CurrDateTime
outVars.value.dateRangeOut.endDateTimeAttr = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Lwf4ccsHUkKKqjk6eLvn8g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// DateRange.StartDateTime = BuildDateTime
outVars.value.dateRangeOut.startDateTimeAttr = OS.BuiltinFunctions.buildDateTime(OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(outVars.value.dateRangeOut.endDateTimeAttr, -36)), (new OS.DataTypes.DateTime(1900, 1, 1, 0, 0, 0)));
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:LbUusuzs_kiebyKOaB1b_A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Vpjt6am050iVs6a2GfujiQ", callContext.id);
// DateRange.StartDateTime = BuildDateTime
outVars.value.dateRangeOut.startDateTimeAttr = OS.BuiltinFunctions.buildDateTime(OS.BuiltinFunctions.currDate(), (new OS.DataTypes.DateTime(1900, 1, 1, 0, 0, 0)));
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Vpjt6am050iVs6a2GfujiQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// DateRange.EndDateTime = AddSeconds
outVars.value.dateRangeOut.endDateTimeAttr = OS.BuiltinFunctions.addSeconds(OS.BuiltinFunctions.addHours(outVars.value.dateRangeOut.startDateTimeAttr, 24), -1);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:1g_zdTBHDEyILTZRqLxE+w", callContext.id);
}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:h3nEPXHOAE2PornpZqdh2g", callContext.id);
}

};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetAssembleEventListDateRangeFilter$vars", [{
name: "AssembleFilterTimeOptionId",
attrName: "assembleFilterTimeOptionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetAssembleEventListDateRangeFilter$outVars", [{
name: "DateRange",
attrName: "dateRangeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_Assemble_MUIModel.DateTimeDateTimeRecord();
},
complexType: Connect2_Assemble_MUIModel.DateTimeDateTimeRecord
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.getAssembleEventListDateRangeFilter$Action = function (assembleFilterTimeOptionIdIn) {
assembleFilterTimeOptionIdIn = (assembleFilterTimeOptionIdIn === undefined) ? "" : assembleFilterTimeOptionIdIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.getAssembleEventListDateRangeFilter$Action.bind(controller, assembleFilterTimeOptionIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DateRange: actionResults.dateRangeOut
};
});
};
});

define("Connect2_Assemble_MUI.controller$GetAssembleEventSummaryHeaderLabel", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleEventSummaryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.getAssembleEventSummaryHeaderLabel$Action = function (assembleEventSummaryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetAssembleEventSummaryHeaderLabel$vars"))());
vars.value.assembleEventSummaryInLocal = assembleEventSummaryIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetAssembleEventSummaryHeaderLabel$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:ssdc6zFFZUC80Unye4DCwg:/ClientActionFlows.ssdc6zFFZUC80Unye4DCwg:VnoHmLRqrr5wQDRVwXKRrg", "Connect2_Assemble_MUI", "GetAssembleEventSummaryHeaderLabel", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:uS4_m_tfREumcFUREk_pmA", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:nDprucgLR0maSy2323o0DA", callContext.id);
// Label = AssembleEventSummary.AssembleEventType.Title + " - " + If
outVars.value.labelOut = ((vars.value.assembleEventSummaryInLocal.assembleEventTypeAttr.titleAttr + " - ") + (((OS.BuiltinFunctions.dayOfWeek(vars.value.assembleEventSummaryInLocal.dateTimeAttr) === 0)) ? ("Lord\'s Day") : (OS.BuiltinFunctions.formatDateTime(vars.value.assembleEventSummaryInLocal.dateTimeAttr, "dddd"))));
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:1TFeBZHscEyRlJBIRF8iPQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ssdc6zFFZUC80Unye4DCwg", callContext.id);
}

};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetAssembleEventSummaryHeaderLabel$vars", [{
name: "AssembleEventSummary",
attrName: "assembleEventSummaryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_Assemble_CSModel.AssembleEventSummaryRec();
},
complexType: Connect2_Assemble_CSModel.AssembleEventSummaryRec
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetAssembleEventSummaryHeaderLabel$outVars", [{
name: "Label",
attrName: "labelOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.getAssembleEventSummaryHeaderLabel$Action = function (assembleEventSummaryIn) {
assembleEventSummaryIn = (assembleEventSummaryIn === undefined) ? new Connect2_Assemble_CSModel.AssembleEventSummaryRec() : assembleEventSummaryIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.getAssembleEventSummaryHeaderLabel$Action.bind(controller, assembleEventSummaryIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Label: OS.DataConversion.JSNodeParamConverter.to(actionResults.labelOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_Assemble_MUI.controller$GetAssembleHeaderDateString", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.getAssembleHeaderDateString$Action = function (headerDateIn, assembleFilterTimeOptionIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetAssembleHeaderDateString$vars"))());
vars.value.headerDateInLocal = headerDateIn;
vars.value.assembleFilterTimeOptionIdInLocal = assembleFilterTimeOptionIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetAssembleHeaderDateString$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:TT8xxIccMU2JUNubjKYH7A:/ClientActionFlows.TT8xxIccMU2JUNubjKYH7A:ALqA+XGa4PFXwphg0j_aHQ", "Connect2_Assemble_MUI", "GetAssembleHeaderDateString", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:LhytkZvR+EezzDnH3WHb6A", callContext.id);
// Null date?
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Ja2pOcRzBEOawnGvee5zAA", callContext.id) && vars.value.headerDateInLocal.equals(OS.BuiltinFunctions.nullDate()))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:lM_GyP5TmUK9QyAcWq5Sjg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:XG06pY60U0qN+5yn0d4Sbg", callContext.id);
// DateTimeString = FormatDateTime
outVars.value.dateTimeStringOut = OS.BuiltinFunctions.formatDateTime(vars.value.headerDateInLocal, "MMMM yyyy");
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:qqp5NZFM_EOtVKkKr7_DJA", callContext.id) && (vars.value.assembleFilterTimeOptionIdInLocal === Connect2_Assemble_MUIModel.staticEntities.viewmodeType.upcomingMeetings))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:OS_nHC3JmU214oypGxgzvA", callContext.id);
// DateTimeString = "From " + DateTimeString
outVars.value.dateTimeStringOut = ("From " + outVars.value.dateTimeStringOut);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:I3H4pgqWdE+WUFk_Rj+QPw", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:0Hd35fdGU0qoRY2UaIz+ZQ", callContext.id) && (vars.value.assembleFilterTimeOptionIdInLocal === Connect2_Assemble_MUIModel.staticEntities.viewmodeType.pastMeetings))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Kzci4llZP0qpC_Ni4wf8Qw", callContext.id);
// DateTimeString = "Since " + DateTimeString
outVars.value.dateTimeStringOut = ("Since " + outVars.value.dateTimeStringOut);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:D65Jp7+5ukWoQiZdndWF5w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:D65Jp7+5ukWoQiZdndWF5w", callContext.id);
}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:TT8xxIccMU2JUNubjKYH7A", callContext.id);
}

};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetAssembleHeaderDateString$vars", [{
name: "HeaderDate",
attrName: "headerDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "AssembleFilterTimeOptionId",
attrName: "assembleFilterTimeOptionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetAssembleHeaderDateString$outVars", [{
name: "DateTimeString",
attrName: "dateTimeStringOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.getAssembleHeaderDateString$Action = function (headerDateIn, assembleFilterTimeOptionIdIn) {
headerDateIn = (headerDateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : headerDateIn;
assembleFilterTimeOptionIdIn = (assembleFilterTimeOptionIdIn === undefined) ? "" : assembleFilterTimeOptionIdIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.getAssembleHeaderDateString$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(headerDateIn, OS.DataTypes.DataTypes.Date), assembleFilterTimeOptionIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DateTimeString: OS.DataConversion.JSNodeParamConverter.to(actionResults.dateTimeStringOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_Assemble_MUI.controller$GetAssembleHostedAtComponents", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_MUI.model$TextTextTextRecord"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.getAssembleHostedAtComponents$Action = function (isVirtualIn, subdivisionNameIn, localityNameIn, countryNameIn, isUnavailableIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetAssembleHostedAtComponents$vars"))());
vars.value.isVirtualInLocal = isVirtualIn;
vars.value.subdivisionNameInLocal = subdivisionNameIn;
vars.value.localityNameInLocal = localityNameIn;
vars.value.countryNameInLocal = countryNameIn;
vars.value.isUnavailableInLocal = isUnavailableIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetAssembleHostedAtComponents$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:IKIbz9nLh0q651IXWrrEZQ:/ClientActionFlows.IKIbz9nLh0q651IXWrrEZQ:QjljTHVgL2owwL1vKScP_A", "Connect2_Assemble_MUI", "GetAssembleHostedAtComponents", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:O8yE1VRyq0O3tpjLbq+ZXw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:W896Xuk_u0qpnrT9w_3Ueg", callContext.id) && vars.value.isUnavailableInLocal)) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:xrKpDaYkaEeld626snqF5w", callContext.id);
// HostedAtComponents.SingleLine = "Hosting details unavailable at the moment"
outVars.value.hostedAtComponentsOut.singleLineAttr = "Hosting details unavailable at the moment";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:xrKpDaYkaEeld626snqF5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HostedAtComponents.FirstRow = HostedAtComponents.SingleLine
outVars.value.hostedAtComponentsOut.firstRowAttr = outVars.value.hostedAtComponentsOut.singleLineAttr;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:xrKpDaYkaEeld626snqF5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// HostedAtComponents.SecondRow = ""
outVars.value.hostedAtComponentsOut.secondRowAttr = "";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:OoY5xVySG0up04JVTrLYmA", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:XU44IXdcw0eU1Hgvb29gOA", callContext.id) && vars.value.isVirtualInLocal)) {
// FirstRow
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Hdj+9qirVk+Sc60RGMm83A", callContext.id);
// HostedAtComponents.FirstRow = "Hosted Virtually by "
outVars.value.hostedAtComponentsOut.firstRowAttr = "Hosted Virtually by ";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Hdj+9qirVk+Sc60RGMm83A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HostedAtComponents.SingleLine = "Online - " + LocalityName + ", " + CountryName
outVars.value.hostedAtComponentsOut.singleLineAttr = ((("Online - " + vars.value.localityNameInLocal) + ", ") + vars.value.countryNameInLocal);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:etDhn2Bh6UefDI0kBUbkPA", callContext.id);
// HostedAtComponents.FirstRow = "Hosted at "
outVars.value.hostedAtComponentsOut.firstRowAttr = "Hosted at ";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:etDhn2Bh6UefDI0kBUbkPA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HostedAtComponents.SingleLine = SubdivisionName + ", " + LocalityName + ", " + CountryName
outVars.value.hostedAtComponentsOut.singleLineAttr = ((((vars.value.subdivisionNameInLocal + ", ") + vars.value.localityNameInLocal) + ", ") + vars.value.countryNameInLocal);
// FirstRow
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:sBPNa7LZKEm637DkgpVKUQ", callContext.id);
// HostedAtComponents.FirstRow = HostedAtComponents.FirstRow + SubdivisionName
outVars.value.hostedAtComponentsOut.firstRowAttr = (outVars.value.hostedAtComponentsOut.firstRowAttr + vars.value.subdivisionNameInLocal);
}

// SecondRow
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:CUwzTvZrOUeu4j45CA39_g", callContext.id);
// HostedAtComponents.SecondRow = LocalityName + ", " + CountryName
outVars.value.hostedAtComponentsOut.secondRowAttr = ((vars.value.localityNameInLocal + ", ") + vars.value.countryNameInLocal);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Gza4JPXQuEyeOkxNhRhsnQ", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:IKIbz9nLh0q651IXWrrEZQ", callContext.id);
}

};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetAssembleHostedAtComponents$vars", [{
name: "IsVirtual",
attrName: "isVirtualInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SubdivisionName",
attrName: "subdivisionNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LocalityName",
attrName: "localityNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CountryName",
attrName: "countryNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsUnavailable",
attrName: "isUnavailableInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetAssembleHostedAtComponents$outVars", [{
name: "HostedAtComponents",
attrName: "hostedAtComponentsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_Assemble_MUIModel.TextTextTextRecord();
},
complexType: Connect2_Assemble_MUIModel.TextTextTextRecord
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.getAssembleHostedAtComponents$Action = function (isVirtualIn, subdivisionNameIn, localityNameIn, countryNameIn, isUnavailableIn) {
isVirtualIn = (isVirtualIn === undefined) ? false : isVirtualIn;
subdivisionNameIn = (subdivisionNameIn === undefined) ? "" : subdivisionNameIn;
localityNameIn = (localityNameIn === undefined) ? "" : localityNameIn;
countryNameIn = (countryNameIn === undefined) ? "" : countryNameIn;
isUnavailableIn = (isUnavailableIn === undefined) ? false : isUnavailableIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.getAssembleHostedAtComponents$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isVirtualIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(subdivisionNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(localityNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(countryNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isUnavailableIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HostedAtComponents: actionResults.hostedAtComponentsOut
};
});
};
});

define("Connect2_Assemble_MUI.controller$GetIANATimezone", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_MUI.controller$GetIANATimezone.GetTimezoneNameJS"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_MUI_controller_GetIANATimezone_GetTimezoneNameJS) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.getIANATimezone$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getTimezoneNameJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetIANATimezone$outVars"))());
varBag.callContext = callContext;
varBag.getTimezoneNameJSResult = getTimezoneNameJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:8LmLtDX0aUa6SuXo9NE_Sg:/ClientActionFlows.8LmLtDX0aUa6SuXo9NE_Sg:45slmbUyvHR6sUpOx3KbVw", "Connect2_Assemble_MUI", "GetIANATimezone", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:AtdY7EkwiEiDBVlKwLNXRA", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ytJPaxfZ_kybrvyNGpe5eg", callContext.id);
getTimezoneNameJSResult.value = controller.safeExecuteJSNode(Connect2_Assemble_MUI_controller_GetIANATimezone_GetTimezoneNameJS, "GetTimezoneName", "GetIANATimezone", {
IANATimezone: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetIANATimezone$getTimezoneNameJSResult"))();
jsNodeResult.iANATimezoneOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IANATimezone, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:iMYsIdLFb02o6OtEdv7e+g", callContext.id);
// IANATimeZone = GetTimezoneName.IANATimezone
outVars.value.iANATimeZoneOut = getTimezoneNameJSResult.value.iANATimezoneOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:VOJs4Q_N40ynyR3syTH6Fg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:8LmLtDX0aUa6SuXo9NE_Sg", callContext.id);
}

};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetIANATimezone$getTimezoneNameJSResult", [{
name: "IANATimezone",
attrName: "iANATimezoneOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetIANATimezone$outVars", [{
name: "IANATimeZone",
attrName: "iANATimeZoneOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.getIANATimezone$Action = function () {
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.getIANATimezone$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IANATimeZone: OS.DataConversion.JSNodeParamConverter.to(actionResults.iANATimeZoneOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_Assemble_MUI.controller$GetIANATimezone.GetTimezoneNameJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IANATimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
};
});

define("Connect2_Assemble_MUI.controller$GetLocalBookmarkedLocalityInformation", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model$LocalBookmarkRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$LocalBookmarkList", "Connect2_LegacyShared.controller$GetLocalBookmarksByObjectType", "Connect2_LegacyShared.model$LocalityHouseholdsItemRec", "Connect2_Assemble_MUI.model$LocalityHouseholdsItemList", "Connect2_LegacyShared.model$InterchangeItemRec", "Connect2_Assemble_MUI.model$InterchangeItemList", "APIDomain_Directory_IS.model$LocalityCommunityBusinessRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_Assemble_MUI.model$LocalityCommunityBusinessList", "Connect2_LegacyShared.model$SubdivisionsItemRec", "Connect2_Assemble_MUI.model$SubdivisionsItemList", "Connect2_LegacyShared.model$CacheableLocalityInformationRec"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.getLocalBookmarkedLocalityInformation$Action = function (in_LocalityIdIn, in_LocalityInformationIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetLocalBookmarkedLocalityInformation$vars"))());
vars.value.in_LocalityIdInLocal = in_LocalityIdIn;
vars.value.in_LocalityInformationInLocal = in_LocalityInformationIn.clone();
var getLocalBookmarksByOneSchoolVar = new OS.DataTypes.VariableHolder();
var getLocalBookmarksBySubdivisionVar = new OS.DataTypes.VariableHolder();
var getLocalBookmarksByCampusCoVar = new OS.DataTypes.VariableHolder();
var listIndexOf_LocalityVar = new OS.DataTypes.VariableHolder();
var getLocalBookmarksByLocalityVar = new OS.DataTypes.VariableHolder();
var listIndexOf_StoresVar = new OS.DataTypes.VariableHolder();
var getLocalBookmarksByContactVar = new OS.DataTypes.VariableHolder();
var listIndexOf_ContactVar = new OS.DataTypes.VariableHolder();
var listIndexOf_InterchangesVar = new OS.DataTypes.VariableHolder();
var listIndexOf_SchoolsVar = new OS.DataTypes.VariableHolder();
var listIndexOf_SubdivisionsVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetLocalBookmarkedLocalityInformation$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalBookmarksByOneSchoolVar = getLocalBookmarksByOneSchoolVar;
varBag.getLocalBookmarksBySubdivisionVar = getLocalBookmarksBySubdivisionVar;
varBag.getLocalBookmarksByCampusCoVar = getLocalBookmarksByCampusCoVar;
varBag.listIndexOf_LocalityVar = listIndexOf_LocalityVar;
varBag.getLocalBookmarksByLocalityVar = getLocalBookmarksByLocalityVar;
varBag.listIndexOf_StoresVar = listIndexOf_StoresVar;
varBag.getLocalBookmarksByContactVar = getLocalBookmarksByContactVar;
varBag.listIndexOf_ContactVar = listIndexOf_ContactVar;
varBag.listIndexOf_InterchangesVar = listIndexOf_InterchangesVar;
varBag.listIndexOf_SchoolsVar = listIndexOf_SchoolsVar;
varBag.listIndexOf_SubdivisionsVar = listIndexOf_SubdivisionsVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:FPmlDT8I20iO+TlJrviI+w:/ClientActionFlows.FPmlDT8I20iO+TlJrviI+w:yPYkNcUnMw55xTEcOIMP1w", "Connect2_Assemble_MUI", "GetLocalBookmarkedLocalityInformation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:iDIJtHAYLkKEnBZO2EYpEA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:_zAWfaHA4kCQe_9y6g5P4w", callContext.id);
// Execute Action: GetLocalBookmarksByLocality
return Connect2_LegacySharedController.default.getLocalBookmarksByObjectType$Action(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType.locality, callContext).then(function (value) {
getLocalBookmarksByLocalityVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:WulNb6jWRU2hxw3OKIeEJQ", callContext.id);
// Execute Action: ListIndexOf_Locality
listIndexOf_LocalityVar.value = OS.SystemActions.listIndexOf(getLocalBookmarksByLocalityVar.value.myBookmarksListOut, function (p) {
return p.objectIdAttr.equals(vars.value.in_LocalityIdInLocal);
}, callContext);

// Set Locality IsBookmarked
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:wbk1CeFyC0CDiHci6q_AIA", callContext.id);
// In_LocalityInformation.IsBookmarked = ListIndexOf_Locality.Position <> -1
vars.value.in_LocalityInformationInLocal.isBookmarkedAttr = ((listIndexOf_LocalityVar.value.positionOut) !== (-1));
// LocalityInterchanges
// Foreach In_LocalityInformation.LocalityInterchanges
callContext.iterationContext.registerIterationStart(vars.value.in_LocalityInformationInLocal.localityInterchangesAttr);
}).then(function () {
try {var localityInterchangesIterator = callContext.iterationContext.getIterator(vars.value.in_LocalityInformationInLocal.localityInterchangesAttr);
var localityInterchangesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Mr2HKYDUdkeALRIm_mhGLQ", callContext.id) && (localityInterchangesIndex < vars.value.in_LocalityInformationInLocal.localityInterchangesAttr.length))) {
localityInterchangesIterator.currentRowNumber = localityInterchangesIndex;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:5_F55PZudkGq5zisbglO4A", callContext.id);
// Execute Action: ListIndexOf_Interchanges
listIndexOf_InterchangesVar.value = OS.SystemActions.listIndexOf(getLocalBookmarksByLocalityVar.value.myBookmarksListOut, function (p) {
return p.objectIdAttr.equals(vars.value.in_LocalityInformationInLocal.localityInterchangesAttr.getItem(localityInterchangesIndex.valueOf()).interchangeLocalityIdAttr);
}, callContext);

// Set Interchanges IsBookmarked
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:RiyNWNXLz0+WqQbOT9AWFQ", callContext.id);
// In_LocalityInformation.LocalityInterchanges.Current.IsBookmarked = ListIndexOf_Interchanges.Position <> -1
vars.value.in_LocalityInformationInLocal.localityInterchangesAttr.getItem(localityInterchangesIndex.valueOf()).isBookmarkedAttr = ((listIndexOf_InterchangesVar.value.positionOut) !== (-1));
localityInterchangesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_LocalityInformationInLocal.localityInterchangesAttr);
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:oZBFk2MoGUOHA5JIBtfCBQ", callContext.id);
// Execute Action: GetLocalBookmarksByContact
return Connect2_LegacySharedController.default.getLocalBookmarksByObjectType$Action(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType.contact, callContext).then(function (value) {
getLocalBookmarksByContactVar.value = value;
}).then(function () {
// LocalityHouseholds
// Foreach In_LocalityInformation.LocalityHouseholdsList
callContext.iterationContext.registerIterationStart(vars.value.in_LocalityInformationInLocal.localityHouseholdsListAttr);
});
}).then(function () {
try {var localityHouseholdsListIterator = callContext.iterationContext.getIterator(vars.value.in_LocalityInformationInLocal.localityHouseholdsListAttr);
var localityHouseholdsListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:h49_Fft8SUGgVJLa5L53jg", callContext.id) && (localityHouseholdsListIndex < vars.value.in_LocalityInformationInLocal.localityHouseholdsListAttr.length))) {
localityHouseholdsListIterator.currentRowNumber = localityHouseholdsListIndex;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:4pbn2crq_EGZHPbknAnHPg", callContext.id);
// Execute Action: ListIndexOf_Contact
listIndexOf_ContactVar.value = OS.SystemActions.listIndexOf(getLocalBookmarksByContactVar.value.myBookmarksListOut, function (p) {
return p.objectIdAttr.equals(vars.value.in_LocalityInformationInLocal.localityHouseholdsListAttr.getItem(localityHouseholdsListIndex.valueOf()).idAttr);
}, callContext);

// Set Households IsBookmarked
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:3TULacD1Sk2xp4nXwrDQyA", callContext.id);
// In_LocalityInformation.LocalityHouseholdsList.Current.IsBookmarked = ListIndexOf_Contact.Position <> -1
vars.value.in_LocalityInformationInLocal.localityHouseholdsListAttr.getItem(localityHouseholdsListIndex.valueOf()).isBookmarkedAttr = ((listIndexOf_ContactVar.value.positionOut) !== (-1));
localityHouseholdsListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_LocalityInformationInLocal.localityHouseholdsListAttr);
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:h87OUdc_u0uv2ZnU+uWt2A", callContext.id);
// Execute Action: GetLocalBookmarksBySubdivision
return Connect2_LegacySharedController.default.getLocalBookmarksByObjectType$Action(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType.subdivision, callContext).then(function (value) {
getLocalBookmarksBySubdivisionVar.value = value;
}).then(function () {
// LocalitySubdivisions
// Foreach In_LocalityInformation.LocalitySubdivisionsList
callContext.iterationContext.registerIterationStart(vars.value.in_LocalityInformationInLocal.localitySubdivisionsListAttr);
});
}).then(function () {
try {var localitySubdivisionsListIterator = callContext.iterationContext.getIterator(vars.value.in_LocalityInformationInLocal.localitySubdivisionsListAttr);
var localitySubdivisionsListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:SHlCY+fx2Ee1sFwNEpXhOA", callContext.id) && (localitySubdivisionsListIndex < vars.value.in_LocalityInformationInLocal.localitySubdivisionsListAttr.length))) {
localitySubdivisionsListIterator.currentRowNumber = localitySubdivisionsListIndex;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:7JsJ6DX_yUSROBMwGaGqfA", callContext.id);
// Execute Action: ListIndexOf_Subdivisions
listIndexOf_SubdivisionsVar.value = OS.SystemActions.listIndexOf(getLocalBookmarksBySubdivisionVar.value.myBookmarksListOut, function (p) {
return p.objectIdAttr.equals(vars.value.in_LocalityInformationInLocal.localitySubdivisionsListAttr.getItem(localitySubdivisionsListIndex.valueOf()).idAttr);
}, callContext);

// Set Subdivisions IsBookmarked
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:MAh_3QfdIkW6LAShqCIOgQ", callContext.id);
// In_LocalityInformation.LocalitySubdivisionsList.Current.IsBookmarked = ListIndexOf_Subdivisions.Position <> -1
vars.value.in_LocalityInformationInLocal.localitySubdivisionsListAttr.getItem(localitySubdivisionsListIndex.valueOf()).isBookmarkedAttr = ((listIndexOf_SubdivisionsVar.value.positionOut) !== (-1));
localitySubdivisionsListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_LocalityInformationInLocal.localitySubdivisionsListAttr);
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:z_CvGOpFvU2Owags4rFahA", callContext.id);
// Execute Action: GetLocalBookmarksByOneSchool
return Connect2_LegacySharedController.default.getLocalBookmarksByObjectType$Action(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType.oneSchoolGlobal, callContext).then(function (value) {
getLocalBookmarksByOneSchoolVar.value = value;
}).then(function () {
// LocalitySchools
// Foreach In_LocalityInformation.LocalitySchools
callContext.iterationContext.registerIterationStart(vars.value.in_LocalityInformationInLocal.localitySchoolsAttr);
});
}).then(function () {
try {var localitySchoolsIterator = callContext.iterationContext.getIterator(vars.value.in_LocalityInformationInLocal.localitySchoolsAttr);
var localitySchoolsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:s3GUOS4gZE60QRtartrD6w", callContext.id) && (localitySchoolsIndex < vars.value.in_LocalityInformationInLocal.localitySchoolsAttr.length))) {
localitySchoolsIterator.currentRowNumber = localitySchoolsIndex;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:UzKG5RQ3IEKaprHFx5gM7w", callContext.id);
// Execute Action: ListIndexOf_Schools
listIndexOf_SchoolsVar.value = OS.SystemActions.listIndexOf(getLocalBookmarksByOneSchoolVar.value.myBookmarksListOut, function (p) {
return p.objectIdAttr.equals(vars.value.in_LocalityInformationInLocal.localitySchoolsAttr.getItem(localitySchoolsIndex.valueOf()).communityBusinessIDAttr);
}, callContext);

// Set Schools IsBookmarked
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:8grieJ4NgUqI+p4HwQEqSg", callContext.id);
// In_LocalityInformation.LocalitySchools.Current.IsBookmarked = ListIndexOf_Schools.Position <> -1
vars.value.in_LocalityInformationInLocal.localitySchoolsAttr.getItem(localitySchoolsIndex.valueOf()).isBookmarkedAttr = ((listIndexOf_SchoolsVar.value.positionOut) !== (-1));
localitySchoolsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_LocalityInformationInLocal.localitySchoolsAttr);
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:VBhYaZmcKUib1vic4clhdA", callContext.id);
// Execute Action: GetLocalBookmarksByCampusCo
return Connect2_LegacySharedController.default.getLocalBookmarksByObjectType$Action(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType.campusCo, callContext).then(function (value) {
getLocalBookmarksByCampusCoVar.value = value;
}).then(function () {
// LocalityStores
// Foreach In_LocalityInformation.LocalityStores
callContext.iterationContext.registerIterationStart(vars.value.in_LocalityInformationInLocal.localityStoresAttr);
});
}).then(function () {
try {var localityStoresIterator = callContext.iterationContext.getIterator(vars.value.in_LocalityInformationInLocal.localityStoresAttr);
var localityStoresIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:090R0zYRtUqhwNlRlO+E0g", callContext.id) && (localityStoresIndex < vars.value.in_LocalityInformationInLocal.localityStoresAttr.length))) {
localityStoresIterator.currentRowNumber = localityStoresIndex;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:inVpiv5NPkWo6myoHq5gGA", callContext.id);
// Execute Action: ListIndexOf_Stores
listIndexOf_StoresVar.value = OS.SystemActions.listIndexOf(getLocalBookmarksByCampusCoVar.value.myBookmarksListOut, function (p) {
return p.objectIdAttr.equals(vars.value.in_LocalityInformationInLocal.localityStoresAttr.getItem(localityStoresIndex.valueOf()).communityBusinessIDAttr);
}, callContext);

// Set Stores IsBookmarked
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:SZA5XCAViUCbPGdPDD6eiA", callContext.id);
// In_LocalityInformation.LocalityStores.Current.IsBookmarked = ListIndexOf_Stores.Position <> -1
vars.value.in_LocalityInformationInLocal.localityStoresAttr.getItem(localityStoresIndex.valueOf()).isBookmarkedAttr = ((listIndexOf_StoresVar.value.positionOut) !== (-1));
localityStoresIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_LocalityInformationInLocal.localityStoresAttr);
}

// Set Ouput
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:5LQcrM3r_UOYTiB9QpLJig", callContext.id);
// Out_LocalityInformation = In_LocalityInformation
outVars.value.out_LocalityInformationOut = vars.value.in_LocalityInformationInLocal;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:pkUIvZa_YEabGZdiknrlzg", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:FPmlDT8I20iO+TlJrviI+w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:FPmlDT8I20iO+TlJrviI+w", callContext.id);
throw ex;

});
};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetLocalBookmarkedLocalityInformation$vars", [{
name: "In_LocalityId",
attrName: "in_LocalityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "In_LocalityInformation",
attrName: "in_LocalityInformationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.CacheableLocalityInformationRec();
},
complexType: Connect2_LegacySharedModel.CacheableLocalityInformationRec
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetLocalBookmarkedLocalityInformation$outVars", [{
name: "Out_LocalityInformation",
attrName: "out_LocalityInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.CacheableLocalityInformationRec();
},
complexType: Connect2_LegacySharedModel.CacheableLocalityInformationRec
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.getLocalBookmarkedLocalityInformation$Action = function (in_LocalityIdIn, in_LocalityInformationIn) {
in_LocalityIdIn = (in_LocalityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_LocalityIdIn;
in_LocalityInformationIn = (in_LocalityInformationIn === undefined) ? new Connect2_LegacySharedModel.CacheableLocalityInformationRec() : in_LocalityInformationIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.getLocalBookmarkedLocalityInformation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_LocalityIdIn, OS.DataTypes.DataTypes.LongInteger), in_LocalityInformationIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_LocalityInformation: actionResults.out_LocalityInformationOut
};
});
};
});

define("Connect2_Assemble_MUI.controller$GetLocality", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableLocality", "Connect2_Assemble_MUI.controller$GetLocalBookmarkedLocalityInformation"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedModel, MemoryClientCacheModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.getLocality$Action = function (localityIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetLocality$vars"))());
vars.value.localityIdInLocal = localityIdIn;
var getCacheableLocalityVar = new OS.DataTypes.VariableHolder();
var getLocalBookmarkedLocalityInformationVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetLocality$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableLocalityVar = getCacheableLocalityVar;
varBag.getLocalBookmarkedLocalityInformationVar = getLocalBookmarkedLocalityInformationVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:l+KU8StlTEW9FOpOQEmbtQ:/ClientActionFlows.l+KU8StlTEW9FOpOQEmbtQ:eRDJAc2T1LqM7rb+DgsdZg", "Connect2_Assemble_MUI", "GetLocality", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:DX+3n6Z+MUykpKI31_dJzQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:pcZXvbL4Jk2pxYVpjCsuHA", callContext.id);
// Execute Action: GetCacheableLocality
return Connect2_LegacySharedController.default.getCacheableLocality$Action(vars.value.localityIdInLocal, callContext).then(function (value) {
getCacheableLocalityVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:E2J+3n9cykiL15TGKpHc4Q", callContext.id);
// Execute Action: GetLocalBookmarkedLocalityInformation
return Connect2_Assemble_MUIController.default.getLocalBookmarkedLocalityInformation$Action(vars.value.localityIdInLocal, getCacheableLocalityVar.value.localityInformationOut, callContext).then(function (value) {
getLocalBookmarkedLocalityInformationVar.value = value;
});
}).then(function () {
// Set Bookmarked Ouput
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:G6dIhHaLJ0yF2NudFnjsfw", callContext.id);
// LocalityInformation = GetLocalBookmarkedLocalityInformation.Out_LocalityInformation
outVars.value.localityInformationOut = getLocalBookmarkedLocalityInformationVar.value.out_LocalityInformationOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:G6dIhHaLJ0yF2NudFnjsfw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CacheResult = GetCacheableLocality.CacheResult
outVars.value.cacheResultOut = getCacheableLocalityVar.value.cacheResultOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:488tyzSkR0mM1BC0E6qP8g", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:l+KU8StlTEW9FOpOQEmbtQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:l+KU8StlTEW9FOpOQEmbtQ", callContext.id);
throw ex;

});
};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetLocality$vars", [{
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetLocality$outVars", [{
name: "LocalityInformation",
attrName: "localityInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.CacheableLocalityInformationRec();
},
complexType: Connect2_LegacySharedModel.CacheableLocalityInformationRec
}, {
name: "CacheResult",
attrName: "cacheResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.getLocality$Action = function (localityIdIn) {
localityIdIn = (localityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localityIdIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.getLocality$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(localityIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalityInformation: actionResults.localityInformationOut,
CacheResult: actionResults.cacheResultOut
};
});
};
});

define("Connect2_Assemble_MUI.controller$GetUnavailableEventErrorMessage", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.getUnavailableEventErrorMessage$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.GetUnavailableEventErrorMessage$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:+PscJf+uJE2forGWNTKn0g:/ClientActionFlows.+PscJf+uJE2forGWNTKn0g:MLFDJ_74VGOQhzQw5MwABA", "Connect2_Assemble_MUI", "GetUnavailableEventErrorMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:WSYqbxrR+kW2xbDEJ9ga8g", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ZQpSA6sN3kCFv75k+O9lhA", callContext.id);
// Message = "This subdivision no longer exists. Please reach out to your Regional Administrator for further assistance."
outVars.value.messageOut = "This subdivision no longer exists. Please reach out to your Regional Administrator for further assistance.";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:txi_Lod++EO+05MmFW4QUg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:+PscJf+uJE2forGWNTKn0g", callContext.id);
}

};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.GetUnavailableEventErrorMessage$outVars", [{
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.getUnavailableEventErrorMessage$Action = function () {
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.getUnavailableEventErrorMessage$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Message: OS.DataConversion.JSNodeParamConverter.to(actionResults.messageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_Assemble_MUI.controller$HasAccessToRegion", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "UBTConnect_Utils.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller$IsRegionalSubscriptionPlan", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils", "Connect2_Assemble_MUI.controller$AuditSubscriptionEvent", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "UBTConnect_Utils.controller$IsFreeSubscriptionPlan", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "APIDomain_Directory_IS.model$CountryRec", "Connect2_Assemble_MUI.model$CountryList"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, UBTConnect_UtilsController, UBTConnect_UtilsModel, MemoryClientCacheModel, APIDomain_Directory_ISModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.hasAccessToRegion$Action = function (countryCodeIn, localityIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.HasAccessToRegion$vars"))());
vars.value.countryCodeInLocal = countryCodeIn;
vars.value.localityIdInLocal = localityIdIn;
var isRegionalSubscriptionPlanVar = new OS.DataTypes.VariableHolder();
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
var searchCountryCodeToUserCountrySubscriptionVar = new OS.DataTypes.VariableHolder();
var isFreeSubscriptionPlanVar = new OS.DataTypes.VariableHolder();
var getCacheableUserInfoVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.HasAccessToRegion$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.isRegionalSubscriptionPlanVar = isRegionalSubscriptionPlanVar;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
varBag.searchCountryCodeToUserCountrySubscriptionVar = searchCountryCodeToUserCountrySubscriptionVar;
varBag.isFreeSubscriptionPlanVar = isFreeSubscriptionPlanVar;
varBag.getCacheableUserInfoVar = getCacheableUserInfoVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:aFYI4NKCdUKI1tJTNR8HRQ:/ClientActionFlows.aFYI4NKCdUKI1tJTNR8HRQ:GOPRHHh8PJVIiDt8b5bwnA", "Connect2_Assemble_MUI", "HasAccessToRegion", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:nFKmA32XQU6AQO3wGC5GVg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:8zdcura9y0ahKP1toA8iiw", callContext.id);
// Execute Action: Cache_UserInfo_Get
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:noGp9pU_tkO6Z9oXUx9X6A", callContext.id);
// Execute Action: IsFreeSubscriptionPlan
return UBTConnect_UtilsController.default.isFreeSubscriptionPlan$Action(callContext).then(function (value) {
isFreeSubscriptionPlanVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:PPQEeVT3SU2UUGnG4Hwovw", callContext.id);
// Execute Action: IsRegionalSubscriptionPlan
return UBTConnect_UtilsController.default.isRegionalSubscriptionPlan$Action(callContext).then(function (value) {
isRegionalSubscriptionPlanVar.value = value;
});
}).then(function () {
// IsGlobalSubscription?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:xsSOZAwkokikW2tFbUmG8g", callContext.id) && (!(isRegionalSubscriptionPlanVar.value.isRegionalSubscriptionPlanOut) && !(isFreeSubscriptionPlanVar.value.isFreeSubscriptionPlanOut)))) {
// HasAccess
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:_z6dejxOokS+A5BAXNStKQ", callContext.id);
// HasAccess = True
outVars.value.hasAccessOut = true;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:TeqG3B1gFkuCXoQ1_614gQ", callContext.id);
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:H5z1oLPMZ0SCZo482qIvig", callContext.id) && isRegionalSubscriptionPlanVar.value.isRegionalSubscriptionPlanOut)) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:vPAM_TJBd02YNqj9WFsmwA", callContext.id);
// Execute Action: GetCacheableUserInfo
return Connect2_LegacySharedController.default.getCacheableUserInfo$Action(callContext).then(function (value) {
getCacheableUserInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:VYwqu3sS3EGFQJYlhBm_cQ", callContext.id);
// Execute Action: SearchCountryCodeToUserCountrySubscription
searchCountryCodeToUserCountrySubscriptionVar.value = OS.SystemActions.listAny(getCacheableUserInfoVar.value.userInformationOut.subscriptionAttr.subscribedCountriesAttr, function (p) {
return (p.codeAttr === vars.value.countryCodeInLocal);
}, callContext);

}).then(function () {
// Is Subscribed?
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:qOz86tBHnEG2XL2A12T16g", callContext.id) && searchCountryCodeToUserCountrySubscriptionVar.value.resultOut)) {
// HasAccess
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:D32X2IqQ8kOB9YpAKCWKHQ", callContext.id);
// HasAccess = True
outVars.value.hasAccessOut = true;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:hAZV06RZXEugd8k5jfbM6g", callContext.id);
return OS.Flow.returnAsync(outVars.value);

}

});
}

}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:drnJ369Tzk68JV5D8wC+hg", callContext.id) && isFreeSubscriptionPlanVar.value.isFreeSubscriptionPlanOut)) {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:n3uE_Yt9HkCHPdzQ+ccYyQ", callContext.id) && ((vars.value.countryCodeInLocal === cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_CodeAttr) && (vars.value.localityIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(0)) || vars.value.localityIdInLocal.equals(cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_IdAttr))))) {
// HasAccess
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:UL2VZu4kd0K9ucbGGpZ7TA", callContext.id);
// HasAccess = True
outVars.value.hasAccessOut = true;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:zz6djIRAs0K0jZMZKFoTaQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

}

}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:xfxLnbLK_0qETzToTzwlXQ", callContext.id);
// Execute Action: AuditSubscriptionEvent
return Connect2_Assemble_MUIController.default.auditSubscriptionEvent$Action(OS.DataTypes.LongInteger.defaultValue, vars.value.localityIdInLocal, vars.value.countryCodeInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:drmIs_nsLkumZ00dPFxZQw", callContext.id);
});
});
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:aFYI4NKCdUKI1tJTNR8HRQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:aFYI4NKCdUKI1tJTNR8HRQ", callContext.id);
throw ex;

});
};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.HasAccessToRegion$vars", [{
name: "CountryCode",
attrName: "countryCodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.HasAccessToRegion$outVars", [{
name: "HasAccess",
attrName: "hasAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.hasAccessToRegion$Action = function (countryCodeIn, localityIdIn) {
countryCodeIn = (countryCodeIn === undefined) ? "" : countryCodeIn;
localityIdIn = (localityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localityIdIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.hasAccessToRegion$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(countryCodeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(localityIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_Assemble_MUI.controller$MaybeDisplaySubscriptionPopup", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "UBTConnect_Utils.controller", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils", "Connect2_Assemble_MUI.controller$HasAccessToRegion"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, UBTConnect_UtilsController) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.maybeDisplaySubscriptionPopup$Action = function (countryCodeIn, localityIdIn, subscriptionPopupIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.MaybeDisplaySubscriptionPopup$vars"))());
vars.value.countryCodeInLocal = countryCodeIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.subscriptionPopupIdInLocal = subscriptionPopupIdIn;
var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.MaybeDisplaySubscriptionPopup$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.hasAccessToRegionVar = hasAccessToRegionVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:qnrXFRTfxUKXCJvCj_9wbA:/ClientActionFlows.qnrXFRTfxUKXCJvCj_9wbA:eT8EcQ5tCyT5OjFzPA7+eQ", "Connect2_Assemble_MUI", "MaybeDisplaySubscriptionPopup", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:QN_EwDdIx0S4k3GltKzNNQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:P78AHiruVkKJ_zHFkoyq+w", callContext.id);
// Execute Action: HasAccessToRegion
return Connect2_Assemble_MUIController.default.hasAccessToRegion$Action(vars.value.countryCodeInLocal, vars.value.localityIdInLocal, callContext).then(function (value) {
hasAccessToRegionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:IoGrq+1KIkCJ4_8g77Svmw", callContext.id) && hasAccessToRegionVar.value.hasAccessOut)) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:0Fa+M+h+YEaKx6UPas0ulw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:w641JKhm+U+QeYQ300kP2g", callContext.id);
// IsDisplayedPopup = True
outVars.value.isDisplayedPopupOut = true;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:63GeCNLJj068tNPHFtVYAA", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:7dlPfJGsfEKdZX+OwrsnwA", callContext.id);
});
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:qnrXFRTfxUKXCJvCj_9wbA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:qnrXFRTfxUKXCJvCj_9wbA", callContext.id);
throw ex;

});
};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.MaybeDisplaySubscriptionPopup$vars", [{
name: "CountryCode",
attrName: "countryCodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "SubscriptionPopupId",
attrName: "subscriptionPopupIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.MaybeDisplaySubscriptionPopup$outVars", [{
name: "IsDisplayedPopup",
attrName: "isDisplayedPopupOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.maybeDisplaySubscriptionPopup$Action = function (countryCodeIn, localityIdIn, subscriptionPopupIdIn) {
countryCodeIn = (countryCodeIn === undefined) ? "" : countryCodeIn;
localityIdIn = (localityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localityIdIn;
subscriptionPopupIdIn = (subscriptionPopupIdIn === undefined) ? "" : subscriptionPopupIdIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.maybeDisplaySubscriptionPopup$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(countryCodeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(localityIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(subscriptionPopupIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsDisplayedPopup: OS.DataConversion.JSNodeParamConverter.to(actionResults.isDisplayedPopupOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_Assemble_MUI.controller$OffsetDateTimeByUserUTCOffset", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_MUI.controller$OffsetDateTimeByUserUTCOffset.MapStartDateTimeJS"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_MUI_controller_OffsetDateTimeByUserUTCOffset_MapStartDateTimeJS) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.offsetDateTimeByUserUTCOffset$Action = function (dateTimeIn, isForServerIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.OffsetDateTimeByUserUTCOffset$vars"))());
vars.value.dateTimeInLocal = dateTimeIn;
vars.value.isForServerInLocal = isForServerIn;
var mapStartDateTimeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.OffsetDateTimeByUserUTCOffset$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.mapStartDateTimeJSResult = mapStartDateTimeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:X5991EdoSkqYsbiSDC_Yxg:/ClientActionFlows.X5991EdoSkqYsbiSDC_Yxg:xV94iP01Gi5eaLta9GLkvA", "Connect2_Assemble_MUI", "OffsetDateTimeByUserUTCOffset", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:tlAFgbriQE+JWAtLR30hRA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:nfT3UPlNDk22vKPTmoo0Ng", callContext.id) && vars.value.dateTimeInLocal.equals(OS.BuiltinFunctions.nullDate()))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:WslqTOJtLk+Z8GJc+RugRw", callContext.id);
// ConvertedDateTime = DateTime
outVars.value.convertedDateTimeOut = vars.value.dateTimeInLocal;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:wrZZPZiMhEOUNg_RLCf+ow", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ZLAZ9qM6nEqSJVg235RStQ", callContext.id);
mapStartDateTimeJSResult.value = controller.safeExecuteJSNode(Connect2_Assemble_MUI_controller_OffsetDateTimeByUserUTCOffset_MapStartDateTimeJS, "MapStartDateTime", "OffsetDateTimeByUserUTCOffset", {
IsForServer: OS.DataConversion.JSNodeParamConverter.to(vars.value.isForServerInLocal, OS.DataTypes.DataTypes.Boolean),
DateTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.dateTimeInLocal, OS.DataTypes.DataTypes.DateTime),
ConvertedDateTime: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.DateTime.defaultValue, OS.DataTypes.DataTypes.DateTime)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.OffsetDateTimeByUserUTCOffset$mapStartDateTimeJSResult"))();
jsNodeResult.convertedDateTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ConvertedDateTime, OS.DataTypes.DataTypes.DateTime);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:urfaA6ZhoUW4ucQAn8fZrw", callContext.id);
// ConvertedDateTime = MapStartDateTime.ConvertedDateTime
outVars.value.convertedDateTimeOut = mapStartDateTimeJSResult.value.convertedDateTimeOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:8eB4aaATNUyN61y7DqdKMA", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:X5991EdoSkqYsbiSDC_Yxg", callContext.id);
}

};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.OffsetDateTimeByUserUTCOffset$vars", [{
name: "DateTime",
attrName: "dateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "IsForServer",
attrName: "isForServerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.OffsetDateTimeByUserUTCOffset$mapStartDateTimeJSResult", [{
name: "ConvertedDateTime",
attrName: "convertedDateTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.OffsetDateTimeByUserUTCOffset$outVars", [{
name: "ConvertedDateTime",
attrName: "convertedDateTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.offsetDateTimeByUserUTCOffset$Action = function (dateTimeIn, isForServerIn) {
dateTimeIn = (dateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : dateTimeIn;
isForServerIn = (isForServerIn === undefined) ? false : isForServerIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.offsetDateTimeByUserUTCOffset$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dateTimeIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(isForServerIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ConvertedDateTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.convertedDateTimeOut, OS.DataTypes.DataTypes.DateTime)
};
});
};
});
define("Connect2_Assemble_MUI.controller$OffsetDateTimeByUserUTCOffset.MapStartDateTimeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
//If sending to the server, we need to add subtract the offset because the platform will add the offset
let offsetDirection = $parameters.IsForServer ? -1 : 1;
$parameters.ConvertedDateTime = new Date($parameters.DateTime.getTime() + (offsetDirection * ($parameters.DateTime.getTimezoneOffset() * 60 * 1000)));
};
});

define("Connect2_Assemble_MUI.controller$ToggleBookmarkItem", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller$RemoveBookmarkFromCache", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$Create_LocalBookmark", "Connect2_LegacyShared.controller$SendBookmarkedFeedbackMessage", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_Assemble_MUI.controller$ServerAction.AddBookmark", "Connect2_Assemble_MUI.controller$ServerAction.DeleteBookmarkByBookmarkId", "Connect2_LegacyShared.controller$AddBookmarkToCache", "Connect2_LegacyShared.controller$Delete_LocalBookmarkByBookmarkId", "Connect2_LegacyShared.model$LocalBookmarkRec", "Connect2_LegacyShared.controller$Get_LocalBookmarkByObjectId"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedController, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.toggleBookmarkItem$Action = function (in_IsBookmarkedIn, in_ObjectTypeIn, in_ObjectIdIn, in_GroupIn, in_NoteIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.ToggleBookmarkItem$vars"))());
vars.value.in_IsBookmarkedInLocal = in_IsBookmarkedIn;
vars.value.in_ObjectTypeInLocal = in_ObjectTypeIn;
vars.value.in_ObjectIdInLocal = in_ObjectIdIn;
vars.value.in_GroupInLocal = in_GroupIn;
vars.value.in_NoteInLocal = in_NoteIn;
var addBookmarkVar = new OS.DataTypes.VariableHolder();
var deleteBookmarkByObjectIdVar = new OS.DataTypes.VariableHolder();
var removeBookmarkFromCacheVar = new OS.DataTypes.VariableHolder();
var create_LocalBookmarkVar = new OS.DataTypes.VariableHolder();
var addBookmarkToCacheVar = new OS.DataTypes.VariableHolder();
var get_LocalBookmarkByObjectIdVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.ToggleBookmarkItem$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.addBookmarkVar = addBookmarkVar;
varBag.deleteBookmarkByObjectIdVar = deleteBookmarkByObjectIdVar;
varBag.removeBookmarkFromCacheVar = removeBookmarkFromCacheVar;
varBag.create_LocalBookmarkVar = create_LocalBookmarkVar;
varBag.addBookmarkToCacheVar = addBookmarkToCacheVar;
varBag.get_LocalBookmarkByObjectIdVar = get_LocalBookmarkByObjectIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:kh7q1GFrlEOstAwGRRfXAA:/ClientActionFlows.kh7q1GFrlEOstAwGRRfXAA:JmGg+tCCWRQ84IBkn0hjdA", "Connect2_Assemble_MUI", "ToggleBookmarkItem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:+1ezPDZ4vk2+NIpTLma5QQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:s0PiIEveQEKmyJYSQEligQ", callContext.id) && vars.value.in_IsBookmarkedInLocal)) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:_AFl6Jyfok+o4xlXuIJWXg", callContext.id);
// Execute Action: Get_LocalBookmarkByObjectId
return Connect2_LegacySharedController.default.get_LocalBookmarkByObjectId$Action(vars.value.in_ObjectTypeInLocal, vars.value.in_ObjectIdInLocal, callContext).then(function (value) {
get_LocalBookmarkByObjectIdVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:9TseyAY+7EeRhmBc7FFFVA", callContext.id);
// Execute Action: DeleteBookmarkByObjectId
return controller.deleteBookmarkByBookmarkId$ServerAction(get_LocalBookmarkByObjectIdVar.value.localBookmarkOut.bookmarkIdAttr, callContext).then(function (value) {
deleteBookmarkByObjectIdVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:FIEGU0qEUEC1VSQrojGv6Q", callContext.id) && deleteBookmarkByObjectIdVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:AiumC24FxEiRHcaf9ixdGg", callContext.id);
// Execute Action: RemoveBookmarkFromCache
removeBookmarkFromCacheVar.value = Connect2_LegacySharedController.default.removeBookmarkFromCache$Action(vars.value.in_GroupInLocal, get_LocalBookmarkByObjectIdVar.value.localBookmarkOut.bookmarkIdAttr, callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:7BLp1YW6cUe2n0oUL9L4uA", callContext.id);
// Execute Action: Delete_LocalBookmarkByBookmarkId
return Connect2_LegacySharedController.default.delete_LocalBookmarkByBookmarkId$Action(get_LocalBookmarkByObjectIdVar.value.localBookmarkOut.bookmarkIdAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:b7NpM_3PuEGmViGR1+zR_A", callContext.id);
// Execute Action: BookmarkFeedbackMessage_Delete
Connect2_LegacySharedController.default.sendBookmarkedFeedbackMessage$Action(false, callContext);
// Set Output
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:aNs0lS92eU2E5Y+ULnqJRQ", callContext.id);
// Out_LocalBookmarkId = NullIdentifier
outVars.value.out_LocalBookmarkIdOut = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Djy1krabRUOTs2uiNbAZEQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:LS2G+OdgnE+K91N1b4OCyw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Bookmark could not be removed. Please try again later.", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:IECEKjTX5Eu2rdV4EKpohg", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:sp6PwShkyEKVT0i6WXPj8A", callContext.id);
// Execute Action: AddBookmark
return controller.addBookmark$ServerAction(vars.value.in_ObjectTypeInLocal, OS.BuiltinFunctions.longIntegerToText(vars.value.in_ObjectIdInLocal), vars.value.in_GroupInLocal, vars.value.in_NoteInLocal, callContext).then(function (value) {
addBookmarkVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:uH6iTAg7ZU+EPgykDjQm0Q", callContext.id) && addBookmarkVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:gP0HDw3yTEu9quJe4jKifw", callContext.id);
// Execute Action: Create_LocalBookmark
return Connect2_LegacySharedController.default.create_LocalBookmark$Action(vars.value.in_ObjectTypeInLocal, vars.value.in_ObjectIdInLocal, vars.value.in_GroupInLocal, addBookmarkVar.value.createdBookmarkResponseOut.idAttr, vars.value.in_NoteInLocal, callContext).then(function (value) {
create_LocalBookmarkVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ul0hyR9D_EWn7gJhaUP7Lw", callContext.id);
// Execute Action: AddBookmarkToCache
addBookmarkToCacheVar.value = Connect2_LegacySharedController.default.addBookmarkToCache$Action(addBookmarkVar.value.createdBookmarkResponseOut, callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:n3HAb3uD9kuIGEhD6CXJrA", callContext.id);
// Execute Action: BookmarkFeedbackMessage_Create
Connect2_LegacySharedController.default.sendBookmarkedFeedbackMessage$Action(true, callContext);
// Set Output
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:dji4UyF9YECSLwvP07xxhg", callContext.id);
// Out_LocalBookmarkId = Create_LocalBookmark.LocalBookmarkId
outVars.value.out_LocalBookmarkIdOut = create_LocalBookmarkVar.value.localBookmarkIdOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:dji4UyF9YECSLwvP07xxhg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_CreatedBookmarkId = AddBookmark.CreatedBookmarkResponse.Id
outVars.value.out_CreatedBookmarkIdOut = addBookmarkVar.value.createdBookmarkResponseOut.idAttr;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:AoiHpg1IoEurGJJSzovmiw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:3YBL_T7SmEOTPkByzvH_pA", callContext.id);
}

});
});
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:kh7q1GFrlEOstAwGRRfXAA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:kh7q1GFrlEOstAwGRRfXAA", callContext.id);
throw ex;

});
};
var controller = Connect2_Assemble_MUIController.default;
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.ToggleBookmarkItem$vars", [{
name: "In_IsBookmarked",
attrName: "in_IsBookmarkedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_ObjectType",
attrName: "in_ObjectTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ObjectId",
attrName: "in_ObjectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "In_Group",
attrName: "in_GroupInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_Note",
attrName: "in_NoteInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI.ToggleBookmarkItem$outVars", [{
name: "Out_LocalBookmarkId",
attrName: "out_LocalBookmarkIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Out_CreatedBookmarkId",
attrName: "out_CreatedBookmarkIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_Assemble_MUIController.default.clientActionProxies.toggleBookmarkItem$Action = function (in_IsBookmarkedIn, in_ObjectTypeIn, in_ObjectIdIn, in_GroupIn, in_NoteIn) {
in_IsBookmarkedIn = (in_IsBookmarkedIn === undefined) ? false : in_IsBookmarkedIn;
in_ObjectTypeIn = (in_ObjectTypeIn === undefined) ? "" : in_ObjectTypeIn;
in_ObjectIdIn = (in_ObjectIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_ObjectIdIn;
in_GroupIn = (in_GroupIn === undefined) ? "" : in_GroupIn;
in_NoteIn = (in_NoteIn === undefined) ? "" : in_NoteIn;
return controller.executeActionInsideJSNode(Connect2_Assemble_MUIController.default.toggleBookmarkItem$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_IsBookmarkedIn, OS.DataTypes.DataTypes.Boolean), in_ObjectTypeIn, OS.DataConversion.JSNodeParamConverter.from(in_ObjectIdIn, OS.DataTypes.DataTypes.LongInteger), in_GroupIn, OS.DataConversion.JSNodeParamConverter.from(in_NoteIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_LocalBookmarkId: actionResults.out_LocalBookmarkIdOut,
Out_CreatedBookmarkId: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_CreatedBookmarkIdOut, OS.DataTypes.DataTypes.LongInteger)
};
});
};
});

define("Connect2_Assemble_MUI.controller$ServerAction.AddBookmark", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.addBookmark$ServerAction = function (objectTypeIn, objectIdIn, groupIn, noteIn, callContext) {
var controller = this.controller;
var inputs = {
ObjectType: OS.DataConversion.ServerDataConverter.to(objectTypeIn, OS.DataTypes.DataTypes.Text),
ObjectId: OS.DataConversion.ServerDataConverter.to(objectIdIn, OS.DataTypes.DataTypes.Text),
Group: OS.DataConversion.ServerDataConverter.to(groupIn, OS.DataTypes.DataTypes.Text),
Note: OS.DataConversion.ServerDataConverter.to(noteIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("AddBookmark", "screenservices/Connect2_Assemble_MUI/ActionAddBookmark", "DvG7WkrArpWUX7xh7_i_AA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI$rssespaceconnect2_mybookmarks_bl_ActionAddBookmark"))();
executeServerActionResult.successOut = OS.DataConversion.ServerDataConverter.from(outputs.Success, OS.DataTypes.DataTypes.Boolean);
executeServerActionResult.createdBookmarkResponseOut = OS.DataConversion.ServerDataConverter.from(outputs.CreatedBookmarkResponse, Connect2_MyBookmarks_ISModel.BookmarkItemRec);
return executeServerActionResult;
});
};
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI$rssespaceconnect2_mybookmarks_bl_ActionAddBookmark", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "CreatedBookmarkResponse",
attrName: "createdBookmarkResponseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_MyBookmarks_ISModel.BookmarkItemRec();
},
complexType: Connect2_MyBookmarks_ISModel.BookmarkItemRec
}]);
});
define("Connect2_Assemble_MUI.controller$ServerAction.DeleteBookmarkByBookmarkId", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController) {
var OS = OutSystems.Internal;
Connect2_Assemble_MUIController.default.deleteBookmarkByBookmarkId$ServerAction = function (bookmarkIdIn, callContext) {
var controller = this.controller;
var inputs = {
BookmarkId: OS.DataConversion.ServerDataConverter.to(bookmarkIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("DeleteBookmarkByBookmarkId", "screenservices/Connect2_Assemble_MUI/ActionDeleteBookmarkByBookmarkId", "3Ib_7A4fr_Qg+58dJT0Hgw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI$rssespaceconnect2_mybookmarks_bl_ActionDeleteBookmarkByBookmarkId"))();
executeServerActionResult.successOut = OS.DataConversion.ServerDataConverter.from(outputs.Success, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Connect2_Assemble_MUIController.default.constructor.registerVariableGroupType("Connect2_Assemble_MUI$rssespaceconnect2_mybookmarks_bl_ActionDeleteBookmarkByBookmarkId", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
});
define("Connect2_Assemble_MUI.controller", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller$debugger"], function (exports, OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUI_Controller_debugger) {
var OS = OutSystems.Internal;
var Connect2_Assemble_MUIController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return Connect2_Assemble_MUIController.default.defaultTimeout;
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
Connect2_Assemble_MUIController.default = new Controller(null, "Connect2_Assemble_MUI");
});
define("Connect2_Assemble_MUI.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"aQ_P7lGjlkqIbmPc8k3vMA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_LocalityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"qj2Q6XgICkmy7rb0ZTUOIQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_LocalityInformationInLocal;
}
},
"_0_f_uJuRkqlxUJbeU5x6g": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_LocalityInformationOut;
}
},
"z_CvGOpFvU2Owags4rFahA": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarksByOneSchoolVar.value;
}
},
"h87OUdc_u0uv2ZnU+uWt2A": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarksBySubdivisionVar.value;
}
},
"VBhYaZmcKUib1vic4clhdA": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarksByCampusCoVar.value;
}
},
"WulNb6jWRU2hxw3OKIeEJQ": {
getter: function (varBag, idService) {
return varBag.listIndexOf_LocalityVar.value;
}
},
"_zAWfaHA4kCQe_9y6g5P4w": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarksByLocalityVar.value;
}
},
"inVpiv5NPkWo6myoHq5gGA": {
getter: function (varBag, idService) {
return varBag.listIndexOf_StoresVar.value;
}
},
"oZBFk2MoGUOHA5JIBtfCBQ": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarksByContactVar.value;
}
},
"4pbn2crq_EGZHPbknAnHPg": {
getter: function (varBag, idService) {
return varBag.listIndexOf_ContactVar.value;
}
},
"5_F55PZudkGq5zisbglO4A": {
getter: function (varBag, idService) {
return varBag.listIndexOf_InterchangesVar.value;
}
},
"UzKG5RQ3IEKaprHFx5gM7w": {
getter: function (varBag, idService) {
return varBag.listIndexOf_SchoolsVar.value;
}
},
"7JsJ6DX_yUSROBMwGaGqfA": {
getter: function (varBag, idService) {
return varBag.listIndexOf_SubdivisionsVar.value;
}
},
"glvJjw6BeECjZieBpyF24Q": {
getter: function (varBag, idService) {
return varBag.vars.value.countryCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_F9+pwNgVECusD32X1C2WQ": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"_3nLvMOHdUOJEarHWTRsCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.subscriptionPopupIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8I+43YLILUuKLOWrDdKtcg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isDisplayedPopupOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"P78AHiruVkKJ_zHFkoyq+w": {
getter: function (varBag, idService) {
return varBag.hasAccessToRegionVar.value;
}
},
"kAQs25td9UqZX5OEsDwSsQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.messageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JfBYmusdCU+V3au1YLmwnQ": {
getter: function (varBag, idService) {
return varBag.vars.value.assembleFilterTimeOptionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JtIDjIqMbEqWyf2rqw_hDw": {
getter: function (varBag, idService) {
return varBag.outVars.value.dateRangeOut;
}
},
"WLGDo7t6X0qqiv5XCigpiw": {
getter: function (varBag, idService) {
return varBag.vars.value.assembleMeetingFilterInLocal;
}
},
"b1hglnTfk0uJJr3smF7B+A": {
getter: function (varBag, idService) {
return varBag.vars.value.assembleMeetingFilter2InLocal;
}
},
"QaUvr2m8LESRZv3el0ZYwQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isDifferentOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"O21YFoFo6Eu0SUTfMdwalQ": {
getter: function (varBag, idService) {
return varBag.jSONSerialize2Var.value;
}
},
"KPKgvglR+Ei_C03VSMlPcw": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"W1FsI7pEVketI9Rm5JP7jg": {
getter: function (varBag, idService) {
return varBag.vars.value.assembleEventFilterInLocal;
}
},
"HpbpU3OjGU2qSxBF_z4qeQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.labelOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ds0giA3Gv0mNbgG74UA1JA": {
getter: function (varBag, idService) {
return varBag.listFilter_SelectedAssembleEventTypeVar.value;
}
},
"ChrPc6TLr0G_qRdTi39TXQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.iANATimeZoneOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ytJPaxfZ_kybrvyNGpe5eg": {
getter: function (varBag, idService) {
return varBag.getTimezoneNameJSResult.value;
}
},
"c4GM4kr_B02i9RyfuUQrWQ": {
getter: function (varBag, idService) {
return varBag.vars.value.headerDateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"r5cJQK840kGE6zCgChO9Cg": {
getter: function (varBag, idService) {
return varBag.vars.value.assembleFilterTimeOptionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"55NUIX1Q2UmpJXSkP8WfkQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.dateTimeStringOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pHtxQxGdkkSqiRxE7j5UYQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isVirtualInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"z43Opb9AdE+Lrct6XJUyZg": {
getter: function (varBag, idService) {
return varBag.vars.value.subdivisionNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ID5_2VhP7kmd3Eq3O0T4lg": {
getter: function (varBag, idService) {
return varBag.vars.value.localityNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YKElF4eRoEu0W3tG6jKQqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.countryNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TxIJlEo3Jk224z7jHwWZnA": {
getter: function (varBag, idService) {
return varBag.vars.value.isUnavailableInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"LBib3tRBMkagNErf5VNWdQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.hostedAtComponentsOut;
}
},
"YEdmUS6oS0aJckWY5TAcAA": {
getter: function (varBag, idService) {
return varBag.vars.value.dateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"AG259dZSkEOMoFAsoRA1zg": {
getter: function (varBag, idService) {
return varBag.vars.value.isForServerInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"YKg7EaMqYk+Ezws3zy5giA": {
getter: function (varBag, idService) {
return varBag.outVars.value.convertedDateTimeOut;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"ZLAZ9qM6nEqSJVg235RStQ": {
getter: function (varBag, idService) {
return varBag.mapStartDateTimeJSResult.value;
}
},
"Nbqas3ILMUiykRgLW8QQKg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsBookmarkedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"szEzh21fcU6iAra5zTgkww": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ObjectTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hysHbgDWgESYSJsJmbSZzg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ObjectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ZIyR2wAFzk6JyJnyeKlo7w": {
getter: function (varBag, idService) {
return varBag.vars.value.in_GroupInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"I5wd2sW7d02GVI6LmwEwWA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_NoteInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"56BXVqCK3E+2CBCUMlc+9w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_LocalBookmarkIdOut;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"UXUa00pENkKq3pPBjDEK+w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_CreatedBookmarkIdOut;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"sp6PwShkyEKVT0i6WXPj8A": {
getter: function (varBag, idService) {
return varBag.addBookmarkVar.value;
}
},
"9TseyAY+7EeRhmBc7FFFVA": {
getter: function (varBag, idService) {
return varBag.deleteBookmarkByObjectIdVar.value;
}
},
"AiumC24FxEiRHcaf9ixdGg": {
getter: function (varBag, idService) {
return varBag.removeBookmarkFromCacheVar.value;
}
},
"gP0HDw3yTEu9quJe4jKifw": {
getter: function (varBag, idService) {
return varBag.create_LocalBookmarkVar.value;
}
},
"ul0hyR9D_EWn7gJhaUP7Lw": {
getter: function (varBag, idService) {
return varBag.addBookmarkToCacheVar.value;
}
},
"_AFl6Jyfok+o4xlXuIJWXg": {
getter: function (varBag, idService) {
return varBag.get_LocalBookmarkByObjectIdVar.value;
}
},
"pG7jcg2FSkOo5DSLGQvPEw": {
getter: function (varBag, idService) {
return varBag.vars.value.countryCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dZrSpREClEW1A9IsxIhSGA": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"qMuM3GGkxECQ3sNGjV05kg": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"PPQEeVT3SU2UUGnG4Hwovw": {
getter: function (varBag, idService) {
return varBag.isRegionalSubscriptionPlanVar.value;
}
},
"8zdcura9y0ahKP1toA8iiw": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"VYwqu3sS3EGFQJYlhBm_cQ": {
getter: function (varBag, idService) {
return varBag.searchCountryCodeToUserCountrySubscriptionVar.value;
}
},
"noGp9pU_tkO6Z9oXUx9X6A": {
getter: function (varBag, idService) {
return varBag.isFreeSubscriptionPlanVar.value;
}
},
"vPAM_TJBd02YNqj9WFsmwA": {
getter: function (varBag, idService) {
return varBag.getCacheableUserInfoVar.value;
}
},
"R+H_YIYW_0CFIMF0cZH80Q": {
getter: function (varBag, idService) {
return varBag.vars.value.assembleEventSummaryInLocal;
}
},
"vocm9k76Z02gaDKo7XtSFw": {
getter: function (varBag, idService) {
return varBag.outVars.value.labelOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fj1Q0ngwKEO9mXWOHKtExw": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"w56dnGUm00O7lxf2MwvbmA": {
getter: function (varBag, idService) {
return varBag.outVars.value.localityInformationOut;
}
},
"pqdZihonJU6nIk7DesHC8g": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheResultOut;
}
},
"pcZXvbL4Jk2pxYVpjCsuHA": {
getter: function (varBag, idService) {
return varBag.getCacheableLocalityVar.value;
}
},
"E2J+3n9cykiL15TGKpHc4Q": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarkedLocalityInformationVar.value;
}
},
"FzRhZrARG0+qKpM_jMFPlQ": {
getter: function (varBag, idService) {
return varBag.vars.value.subscriptionEventInfoVar;
}
},
"VqXhO2bX00CNKSQUwqduVQ": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"5LcynNnZJ0KHKcWlgzC0Dw": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"TDE6cicgt0y4VXaWSvYEpA": {
getter: function (varBag, idService) {
return varBag.vars.value.countryCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AVKNA9w4BUGQULGkHgKdaw": {
getter: function (varBag, idService) {
return varBag.subscriptionEventSerializeVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
