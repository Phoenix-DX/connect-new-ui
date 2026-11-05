define("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "FullCalendarReactive.model", "FullCalendarReactive.controller", "FullCalendarReactive.FullCalendarReactive.EnhancedFullCalendar.mvc$model", "FullCalendarReactive.model$DurationObjectRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive", "FullCalendarReactive.model$EventRec", "Connect2_LegacyShared.model$EventList", "FullCalendarReactive.model$EventSourceRec", "Connect2_LegacyShared.model$EventSourceList", "FullCalendarReactive.model$ResourceSourceRec", "FullCalendarReactive.model$ResourceRec", "Connect2_LegacyShared.model$ResourceList", "FullCalendarReactive.model$CallbacksRec", "FullCalendarReactive.model$RangeRec", "FullCalendarReactive.controller$AddEvents", "FullCalendarReactive.controller$GoToDate", "FullCalendarReactive.controller$RemoveAllEvents", "FullCalendarReactive.controller$SetDuration"], function (OutSystems, Connect2_LegacySharedModel, FullCalendarReactiveModel, FullCalendarReactiveController, FullCalendarReactive_FullCalendarReactive_EnhancedFullCalendar_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Duration", "durationVar", "Duration", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.DurationObjectRec());
}, false, FullCalendarReactiveModel.DurationObjectRec), 
this.attr("SelectedDate", "selectedDateVar", "SelectedDate", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("Month", "monthIn", "Month", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_monthInDataFetchStatus", "_monthInDataFetchStatus", "_monthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Year", "yearIn", "Year", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_yearInDataFetchStatus", "_yearInDataFetchStatus", "_yearInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Day", "dayIn", "Day", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_dayInDataFetchStatus", "_dayInDataFetchStatus", "_dayInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Events", "eventsIn", "Events", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.EventList());
}, false, Connect2_LegacySharedModel.EventList), 
this.attr("_eventsInDataFetchStatus", "_eventsInDataFetchStatus", "_eventsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = FullCalendarReactive_FullCalendarReactive_EnhancedFullCalendar_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Month" in inputs) {
this.variables.monthIn = inputs.Month;
if("_monthInDataFetchStatus" in inputs) {
this.variables._monthInDataFetchStatus = inputs._monthInDataFetchStatus;
}

}

if("Year" in inputs) {
this.variables.yearIn = inputs.Year;
if("_yearInDataFetchStatus" in inputs) {
this.variables._yearInDataFetchStatus = inputs._yearInDataFetchStatus;
}

}

if("Day" in inputs) {
this.variables.dayIn = inputs.Day;
if("_dayInDataFetchStatus" in inputs) {
this.variables._dayInDataFetchStatus = inputs._dayInDataFetchStatus;
}

}

if("Events" in inputs) {
this.variables.eventsIn = inputs.Events;
if("_eventsInDataFetchStatus" in inputs) {
this.variables._eventsInDataFetchStatus = inputs._eventsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Calendars.EventCalendarWeekMonth");
});
define("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "FullCalendarReactive.model", "FullCalendarReactive.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$model", "Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "FullCalendarReactive.FullCalendarReactive.EnhancedFullCalendar.mvc$view", "FullCalendarReactive.model$DurationObjectRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive", "FullCalendarReactive.model$EventRec", "Connect2_LegacyShared.model$EventList", "FullCalendarReactive.model$EventSourceRec", "Connect2_LegacyShared.model$EventSourceList", "FullCalendarReactive.model$ResourceSourceRec", "FullCalendarReactive.model$ResourceRec", "Connect2_LegacyShared.model$ResourceList", "FullCalendarReactive.model$CallbacksRec", "FullCalendarReactive.model$RangeRec", "FullCalendarReactive.controller$AddEvents", "FullCalendarReactive.controller$GoToDate", "FullCalendarReactive.controller$RemoveAllEvents", "FullCalendarReactive.controller$SetDuration"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, FullCalendarReactiveModel, FullCalendarReactiveController, React, OSView, Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_model, Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets, FullCalendarReactive_FullCalendarReactive_EnhancedFullCalendar_mvc_view) {
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
        View.displayName = "Calendars.EventCalendarWeekMonth";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [FullCalendarReactive_FullCalendarReactive_EnhancedFullCalendar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_controller;
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
style: "week-month-calendar-wrapper",
visible: true,
_idProps: {
service: idService,
name: "WeekMonthCalendar"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(FullCalendarReactive_FullCalendarReactive_EnhancedFullCalendar_mvc_view, {
inputs: {
EventDescription: Connect2_LegacySharedModel.staticEntities.eventDescription.neverShow,
AdvancedOptions: "\r\nheader: false,\r\ndefaultView: \'dayGrid\',\r\ncolumnHeader: true,\r\ncolumnHeaderText: function (date) {\r\n    return date.toDateString().charAt(0);\r\n},\r\nduration: { weeks: 1 },\r\ndisplayEventTime: false,\r\nheight: \'auto\',\r\ndayRender: function(dayRenderInfo) {\r\n    if(dayRenderInfo.date.getMonth() == dayRenderInfo.view.calendar.getDate().getMonth()) {\r\n        dayRenderInfo.el.style.backgroundColor = \'#1775ba\';\r\n    }\r\n    else {\r\n        dayRenderInfo.el.style.backgroundColor = \'#186B9F\';\r\n    }\r\n\r\n    dayRenderInfo.el.style.borderStyle = \'none\';\r\n    dayRenderInfo.el.style.textAlign = \'center\';\r\n    dayRenderInfo.el.style.color = \'white\';\r\n\r\n    if(dayRenderInfo.view.viewSpec.duration.days <= 7) {\r\n        dayRenderInfo.el.style.paddingRight = \'3px\';\r\n        dayRenderInfo.el.style.paddingTop = \'1px\';\r\n\r\n        var dayNode = document.createElement(\'span\');\r\n        dayNode.innerText = dayRenderInfo.date.getDate();\r\n        dayNode.classList.add(\'fc-day-number\');\r\n\r\n        dayRenderInfo.el.appendChild(dayNode);\r\n    }\r\n\r\n    var selectedDate = dayRenderInfo.view.context.calendar.persistDate ? dayRenderInfo.view.context.calendar.persistDate : dayRenderInfo.view.context.calendar.getDate();\r\n\r\n    if(selectedDate.toDateString() == dayRenderInfo.date.toDateString()) {\r\n            document.querySelectorAll(\'.selected-date\').forEach(function(e) {\r\n                e.classList.remove(\'selected-date\');\r\n            });\r\n            \r\n            var selectedDateString = selectedDate.getFullYear() + \'-\' + (selectedDate.getMonth() + 1).toString().padStart(2, \'0\') + \'-\' + selectedDate.getDate().toString().padStart(2, \'0\');\r\n    \r\n            document.querySelectorAll(\"[data-date=\'\" + selectedDateString + \"\']\").forEach(function(e) {\r\n                e.classList.add(\'selected-date\');\r\n            });\r\n    }\r\n},\r\ncontentHeight: 130,\r\neventRender: function(info) {\r\n    if(info.event.start.getMonth() == info.view.calendar.getDate().getMonth()) {\r\n        info.el.style.backgroundColor = \'#1775ba\';\r\n    }\r\n    else {\r\n        info.el.style.backgroundColor = \'#186B9F\';\r\n    }\r\n\r\n    info.el.style.color = \'#4494C7\';\r\n    info.el.style.border = \'none\';\r\n    info.el.style.textAlign = \'center\';\r\n    info.el.style.background = \'rgba(0, 0, 0, 0)\'; //transparent so the base date is visible\r\n    info.el.innerText = \'\';\r\n\r\n    var isToday = info.event.start.toDateString() == new Date().toDateString();\r\n\r\n    if(info.view.viewSpec.duration.days <= 7) {\r\n        //First div allows us to shift the dayNode\r\n        var dayNodeWrapper = document.createElement(\'div\');\r\n        dayNodeWrapper.classList.add(\'day-node-wrapper\');\r\n        dayNodeWrapper.style.visibility = \'hidden\';\r\n\r\n        if(isToday) {\r\n            info.el.style.marginTop = \'0px\';\r\n            info.el.classList.add(\'fc-today\');\r\n\r\n            dayNodeWrapper.style.paddingTop = \'1px\';\r\n        }\r\n        \r\n        var dayNode = document.createElement(\'span\');\r\n        dayNode.innerText = info.event.start.getDate();\r\n        dayNode.classList.add(\'fc-day-number\');\r\n        dayNode.style.marginBottom = \'2px\';\r\n\r\n        if(isToday) {\r\n            dayNode.style.lineHeight = \'normal\';\r\n        }\r\n\r\n        dayNodeWrapper.appendChild(dayNode);\r\n        info.el.appendChild(dayNodeWrapper);\r\n    }\r\n\r\n    var dotNode = document.createElement(\'div\');\r\n    dotNode.classList.add(\'dot\');\r\n\r\n    if(info.event.extendedProps.type == 1) {\r\n        dotNode.classList.add(\'ldm\');\r\n    }\r\n    else if(info.event.extendedProps.type == 2) {\r\n        dotNode.classList.add(\'orbit\');\r\n    }\r\n\r\n    info.el.appendChild(dotNode);\r\n}\r\n",
DefaultDate: model.variables.selectedDateVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
loading$Action: function (isLoadingIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "FullCalendarReactive/EnhancedFullCalendar Loading");
return controller.onHandle_IsLoading$Action(isLoadingIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
dateClick$Action: function (rangeIn, allDayIn, resourceIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "FullCalendarReactive/EnhancedFullCalendar DateClick");
return controller.onHandle_DateClicked$Action(rangeIn, controller.callContext(eventHandlerContext));
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
name: "FCWeekMonth",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Calendars/EventCalendarWeekMonth/ToggleWeekMonthBar onclick");
return controller.onHandle_ToggleView$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
style: "height: 14px; text-align: center;"
},
style: "toggle-bar",
visible: true,
_idProps: {
service: idService,
name: "ToggleWeekMonthBar"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 5px;"
},
gridProperties: {
classes: "OSInline",
width: "30px"
},
style: "bar-shape",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "FullCalendarReactive.model", "FullCalendarReactive.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$debugger", "Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$controller.OnReady.RefreshCalendarJS", "FullCalendarReactive.model$DurationObjectRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive", "FullCalendarReactive.model$EventRec", "Connect2_LegacyShared.model$EventList", "FullCalendarReactive.model$EventSourceRec", "Connect2_LegacyShared.model$EventSourceList", "FullCalendarReactive.model$ResourceSourceRec", "FullCalendarReactive.model$ResourceRec", "Connect2_LegacyShared.model$ResourceList", "FullCalendarReactive.model$CallbacksRec", "FullCalendarReactive.model$RangeRec", "FullCalendarReactive.controller$AddEvents", "FullCalendarReactive.controller$GoToDate", "FullCalendarReactive.controller$RemoveAllEvents", "FullCalendarReactive.controller$SetDuration"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, FullCalendarReactiveModel, FullCalendarReactiveController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_Debugger, Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_controller_OnReady_RefreshCalendarJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onParametersChanged$Action: function () {
return controller.executeActionInsideJSNode(controller._onParametersChanged$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnParametersChanged");
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
Controller.prototype._onHandle_DateClicked$Action = function (rangeIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_DateClicked");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.OnHandle_DateClicked$vars"))());
vars.value.rangeInLocal = rangeIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:6_GHOh2fcUaiTiBN3sSQ2w:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.FA7IzT5aa0GUaDtz3WyuFg/ClientActions.6_GHOh2fcUaiTiBN3sSQ2w:ERY36BTMkLuINeJvGZtOjw", "Connect2_LegacyShared", "OnHandle_DateClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KMb6U2faxkSwjLECKHFRAA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// SelectedDate
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GfiNEkmpF0CBBY7+2BaN6Q", callContext.id);
// SelectedDate = Range.start
model.variables.selectedDateVar = OS.BuiltinFunctions.dateTimeToDate(vars.value.rangeInLocal.startAttr);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:n+XG4JADVUqZkmwkihNh_A", callContext.id) && !((model.variables.durationVar.durationAttr === 1)))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:9jJ7xDEY4Uip+YnYPHrCQA", callContext.id);
// Execute Action: OnHandle_ToggleView
return controller._onHandle_ToggleView$Action(callContext);
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:P25WpEMg6EqO_UJc60fo0A", callContext.id);
// Trigger Event: DateClicked
return controller.dateClicked$Action(vars.value.rangeInLocal.startAttr, vars.value.rangeInLocal.endAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:e1AFgDp3ykCqQJNduRyokQ", callContext.id);
});
});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:6_GHOh2fcUaiTiBN3sSQ2w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:6_GHOh2fcUaiTiBN3sSQ2w", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.OnHandle_DateClicked$vars", [{
name: "Range",
attrName: "rangeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FullCalendarReactiveModel.RangeRec();
},
complexType: FullCalendarReactiveModel.RangeRec
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
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:NusgUfFrMUeOiuTcEBgEKA:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.FA7IzT5aa0GUaDtz3WyuFg/ClientActions.NusgUfFrMUeOiuTcEBgEKA:jfC9moAHnQVQmbClPa8S6g", "Connect2_LegacyShared", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Jkoc1exr6EWpuYRKecoGtA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sG8dxwYoEkq5TFy7Ba1FLQ", callContext.id);
// Duration.Unit = "weeks"
model.variables.durationVar.unitAttr = "weeks";
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sG8dxwYoEkq5TFy7Ba1FLQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Duration.Duration = 1
model.variables.durationVar.durationAttr = 1;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PKjQIwpMvEmImZlIhJmtcA", callContext.id);
// SelectedDate = NewDate
model.variables.selectedDateVar = OS.BuiltinFunctions.newDate(model.variables.yearIn, model.variables.monthIn, model.variables.dayIn);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:L8+hClNjdUmqRsn+qOhkGw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:NusgUfFrMUeOiuTcEBgEKA", callContext.id);
}

};
Controller.prototype._onHandle_IsLoading$Action = function (isLoadingIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_IsLoading");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.OnHandle_IsLoading$vars"))());
vars.value.isLoadingInLocal = isLoadingIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:9ZVRa0pusUODTOYoxskrKA:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.FA7IzT5aa0GUaDtz3WyuFg/ClientActions.9ZVRa0pusUODTOYoxskrKA:1klYVE62s2w0xc9dUeTlMQ", "Connect2_LegacyShared", "OnHandle_IsLoading", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:T5H9aeXi0UaFGGWH0vkI1w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ovB_tABEcUekPQ6cvDy9xg", callContext.id);
// Trigger Event: Event_IsLoading
return controller.isLoading$Action(vars.value.isLoadingInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:jorgXzA6cEeM+TXzdsQuig", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:9ZVRa0pusUODTOYoxskrKA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:9ZVRa0pusUODTOYoxskrKA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.OnHandle_IsLoading$vars", [{
name: "isLoading",
attrName: "isLoadingInLocal",
mandatory: true,
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
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:kf6UksDUfkGeLJz5n3h47Q:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.FA7IzT5aa0GUaDtz3WyuFg/ClientActions.kf6UksDUfkGeLJz5n3h47Q:KGbRhY8y+mLUzSm9Q2EtIg", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FbYt7DQrtEamMwJANHO6yw", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:jV3NF6ENj0SYYEO5fkm9qg", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:G+ahqaRtikuzID1FDaeXZQ", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:uEIBpUZcGU+hr6DA6nqD0w", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_controller_OnReady_RefreshCalendarJS, "RefreshCalendar", "OnReady", null, function ($parameters) {
}, {
OnParametersChanged: controller.clientActionProxies.onParametersChanged$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bg7F4SotDE25etl38JNhjA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bg7F4SotDE25etl38JNhjA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:kf6UksDUfkGeLJz5n3h47Q", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:j2u2qFk51kC4xud99O5YIw:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.FA7IzT5aa0GUaDtz3WyuFg/ClientActions.j2u2qFk51kC4xud99O5YIw:o1nhDMqM_JZ4QnOJfL_hmA", "Connect2_LegacyShared", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dcjc2dQ8G0yVZpHWq5l6ug", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:09y3q4SXF0eZLwBYkXGgiw", callContext.id);
// Execute Action: GoToDate
FullCalendarReactiveController.default.goToDate$Action(idService.getId("FCWeekMonth"), model.variables.yearIn, model.variables.monthIn, (((model.variables.durationVar.durationAttr === 1)) ? (OS.BuiltinFunctions.day(model.variables.selectedDateVar)) : (1)), true, callContext);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JwvnxZ2qCUKISce16qJaxA", callContext.id) && model.variables.eventsIn.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Qdbl8Aljf0WkIB5+_3VdGw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ddEh7na4xUCFrXNsNqAN+A", callContext.id);
// Execute Action: RemoveAllEvents
FullCalendarReactiveController.default.removeAllEvents$Action(idService.getId("FCWeekMonth"), callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kUT7IR4N40a9fjVjwEZZag", callContext.id);
// Execute Action: AddEvents
FullCalendarReactiveController.default.addEvents$Action(idService.getId("FCWeekMonth"), model.variables.eventsIn, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Qdbl8Aljf0WkIB5+_3VdGw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:j2u2qFk51kC4xud99O5YIw", callContext.id);
}

};
Controller.prototype._onHandle_ToggleView$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ToggleView");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:EzICyChbcUe4RXSxYes0gg:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.FA7IzT5aa0GUaDtz3WyuFg/ClientActions.EzICyChbcUe4RXSxYes0gg:r+6gkssMhFeKZGY4yBsCuQ", "Connect2_LegacyShared", "OnHandle_ToggleView", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mJgPlFcZYkW1ONOyn1+q6g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2Tedz3y_k0aI_92sgYDw6Q", callContext.id);
// Duration.Duration = If
model.variables.durationVar.durationAttr = (((model.variables.durationVar.durationAttr === 1)) ? (6) : (1));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AYUh8TGH90G8jVNhydT5kA", callContext.id);
// Execute Action: GoToDate
FullCalendarReactiveController.default.goToDate$Action(idService.getId("FCWeekMonth"), model.variables.yearIn, model.variables.monthIn, (((model.variables.durationVar.durationAttr === 1)) ? (OS.BuiltinFunctions.day(model.variables.selectedDateVar)) : (1)), (((model.variables.durationVar.durationAttr === 1)) ? (true) : (false)), callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6ZOXAg1nBE2FgVmkomG1SQ", callContext.id);
// Execute Action: SetDuration
FullCalendarReactiveController.default.setDuration$Action(idService.getId("FCWeekMonth"), model.variables.durationVar.unitAttr, model.variables.durationVar.durationAttr, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ISkUX5LO3ESRLDPsXNVyHg", callContext.id);
// Trigger Event: ExpandToggled
return controller.expandToggled$Action((model.variables.durationVar.durationAttr > 1), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3eIIw6uTAkiiLDai8HY++g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:EzICyChbcUe4RXSxYes0gg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:EzICyChbcUe4RXSxYes0gg", callContext.id);
throw ex;

});
};

Controller.prototype.onHandle_DateClicked$Action = function (rangeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_DateClicked$Action, callContext, rangeIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onHandle_IsLoading$Action = function (isLoadingIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_IsLoading$Action, callContext, isLoadingIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onHandle_ToggleView$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ToggleView$Action, callContext);

};
Controller.prototype.expandToggled$Action = function () {
return Promise.resolve();
};
Controller.prototype.dateClicked$Action = function () {
return Promise.resolve();
};
Controller.prototype.isLoading$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:4t0UveBkOUGkhahvWMTgJg:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg:DidE_GKyhOzR3b1Dyle1SA", "Connect2_LegacyShared", "Calendars", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:FA7IzT5aa0GUaDtz3WyuFg:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.FA7IzT5aa0GUaDtz3WyuFg:QLBVTNt+6m8YcybgN9BqSw", "Connect2_LegacyShared", "EventCalendarWeekMonth", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:FA7IzT5aa0GUaDtz3WyuFg", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:4t0UveBkOUGkhahvWMTgJg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Calendars/EventCalendarWeekMonth On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Calendars/EventCalendarWeekMonth On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Calendars/EventCalendarWeekMonth On Parameters Changed");
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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});
define("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$controller.OnReady.RefreshCalendarJS", [], function () {
return function ($actions, $roles, $public) {
setTimeout($actions.OnParametersChanged,200);
};
});

define("Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Ts1JVxiLX0aBs2QtQuPF4Q": {
getter: function (varBag, idService) {
return varBag.vars.value.rangeInLocal;
}
},
"sXLOuXAae0Gqai7ibq7NUw": {
getter: function (varBag, idService) {
return varBag.vars.value.isLoadingInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jV3NF6ENj0SYYEO5fkm9qg": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"uEIBpUZcGU+hr6DA6nqD0w": {
getter: function (varBag, idService) {
return varBag.refreshCalendarJSResult.value;
}
},
"3HlwUPbKekaOxky1UgqBSw": {
getter: function (varBag, idService) {
return varBag.model.variables.durationVar;
}
},
"IItvNgcDPE+TMuSRBjVQgg": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedDateVar;
},
dataType: OS.DataTypes.DataTypes.Date
},
"QxQdETeJ6kCgJZaRCROMDA": {
getter: function (varBag, idService) {
return varBag.model.variables.monthIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"u7B1z2g9x02l9Id+wvxnWA": {
getter: function (varBag, idService) {
return varBag.model.variables.yearIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"sduFeXOcWUaVhajY9VKn6w": {
getter: function (varBag, idService) {
return varBag.model.variables.dayIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"jfGsIiT_S06H_9KGjyma3w": {
getter: function (varBag, idService) {
return varBag.model.variables.eventsIn;
}
},
"v5LZN8_DWUqux2wyWWrNfA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("WeekMonthCalendar"));
})(varBag.model, idService);
}
},
"8q6UUyFiDkaWgdbPylXcxw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FCWeekMonth"));
})(varBag.model, idService);
}
},
"yVOSMPp0iEWnrS21BYsOyg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ToggleWeekMonthBar"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
