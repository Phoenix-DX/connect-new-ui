define("Connect2_LegacyShared.Calendars.DayCalendar.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "FullCalendarReactive.model", "FullCalendarReactive.controller", "FullCalendarReactive.FullCalendarReactive.EnhancedFullCalendar.mvc$model", "FullCalendarReactive.model$EventRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive", "Connect2_LegacyShared.model$EventList", "FullCalendarReactive.model$EventSourceRec", "Connect2_LegacyShared.model$EventSourceList", "FullCalendarReactive.model$ResourceSourceRec", "FullCalendarReactive.model$ResourceRec", "Connect2_LegacyShared.model$ResourceList", "FullCalendarReactive.model$CallbacksRec", "FullCalendarReactive.controller$AddEvents", "FullCalendarReactive.controller$RemoveAllEvents", "FullCalendarReactive.controller$Refresh", "FullCalendarReactive.controller$GoToDate"], function (OutSystems, Connect2_LegacySharedModel, FullCalendarReactiveModel, FullCalendarReactiveController, FullCalendarReactive_FullCalendarReactive_EnhancedFullCalendar_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_Events", "in_EventsIn", "In_Events", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.EventList());
}, false, Connect2_LegacySharedModel.EventList), 
this.attr("_in_EventsInDataFetchStatus", "_in_EventsInDataFetchStatus", "_in_EventsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SelectedDate", "in_SelectedDateIn", "In_SelectedDate", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_SelectedDateInDataFetchStatus", "_in_SelectedDateInDataFetchStatus", "_in_SelectedDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ScrollTime", "in_ScrollTimeIn", "In_ScrollTime", true, false, OS.DataTypes.DataTypes.Time, function () {
return OS.BuiltinFunctions.currTime();
}, false), 
this.attr("_in_ScrollTimeInDataFetchStatus", "_in_ScrollTimeInDataFetchStatus", "_in_ScrollTimeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsFullHeight", "in_IsFullHeightIn", "In_IsFullHeight", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsFullHeightInDataFetchStatus", "_in_IsFullHeightInDataFetchStatus", "_in_IsFullHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_Events" in inputs) {
this.variables.in_EventsIn = inputs.In_Events;
if("_in_EventsInDataFetchStatus" in inputs) {
this.variables._in_EventsInDataFetchStatus = inputs._in_EventsInDataFetchStatus;
}

}

if("In_SelectedDate" in inputs) {
this.variables.in_SelectedDateIn = inputs.In_SelectedDate;
if("_in_SelectedDateInDataFetchStatus" in inputs) {
this.variables._in_SelectedDateInDataFetchStatus = inputs._in_SelectedDateInDataFetchStatus;
}

}

if("In_ScrollTime" in inputs) {
this.variables.in_ScrollTimeIn = inputs.In_ScrollTime;
if("_in_ScrollTimeInDataFetchStatus" in inputs) {
this.variables._in_ScrollTimeInDataFetchStatus = inputs._in_ScrollTimeInDataFetchStatus;
}

}

if("In_IsFullHeight" in inputs) {
this.variables.in_IsFullHeightIn = inputs.In_IsFullHeight;
if("_in_IsFullHeightInDataFetchStatus" in inputs) {
this.variables._in_IsFullHeightInDataFetchStatus = inputs._in_IsFullHeightInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Calendars.DayCalendar");
});
define("Connect2_LegacyShared.Calendars.DayCalendar.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "FullCalendarReactive.model", "FullCalendarReactive.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Calendars.DayCalendar.mvc$model", "Connect2_LegacyShared.Calendars.DayCalendar.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "FullCalendarReactive.FullCalendarReactive.EnhancedFullCalendar.mvc$view", "FullCalendarReactive.model$EventRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive", "Connect2_LegacyShared.model$EventList", "FullCalendarReactive.model$EventSourceRec", "Connect2_LegacyShared.model$EventSourceList", "FullCalendarReactive.model$ResourceSourceRec", "FullCalendarReactive.model$ResourceRec", "Connect2_LegacyShared.model$ResourceList", "FullCalendarReactive.model$CallbacksRec", "FullCalendarReactive.controller$AddEvents", "FullCalendarReactive.controller$RemoveAllEvents", "FullCalendarReactive.controller$Refresh", "FullCalendarReactive.controller$GoToDate"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, FullCalendarReactiveModel, FullCalendarReactiveController, React, OSView, Connect2_LegacyShared_Calendars_DayCalendar_mvc_model, Connect2_LegacyShared_Calendars_DayCalendar_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets, FullCalendarReactive_FullCalendarReactive_EnhancedFullCalendar_mvc_view) {
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
        View.displayName = "Calendars.DayCalendar";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/Connect2_LegacyShared.Calendars.DayCalendar.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [FullCalendarReactive_FullCalendarReactive_EnhancedFullCalendar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Calendars_DayCalendar_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Calendars_DayCalendar_mvc_controller;
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
extendedProperties: {
style: "height: 100%;"
},
style: model.getCachedValue(idService.getId("DayCalendarWrapper.Style"), function () {
return ((model.variables.in_IsFullHeightIn) ? ("full-height") : (""));
}, function () {
return model.variables.in_IsFullHeightIn;
}),
visible: true,
_idProps: {
service: idService,
name: "DayCalendarWrapper"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsFullHeightInDataFetchStatus)
}, React.createElement(FullCalendarReactive_FullCalendarReactive_EnhancedFullCalendar_mvc_view, {
inputs: {
IsFullHeight: model.variables.in_IsFullHeightIn,
_isFullHeightInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsFullHeightInDataFetchStatus),
AdvancedOptions: (((("\r\nheader: false,\r\ncolumnHeader: false,\r\ndefaultView: \'timeGridDay\',\r\nduration: { days: 1 },\r\nnowIndicator: true,\r\nallDaySlot: false,\r\nscrollTime: \'" + OS.BuiltinFunctions.timeToText(model.variables.in_ScrollTimeIn)) + "\',\r\nheight: \'parent\',\r\neventRender: function(info) {\r\n    info.el.innerText = \'\';\r\n    info.el.style.backgroundColor = \'#00A492\';\r\n    info.el.style.padding = \'5px\';\r\n    info.el.classList.add(\'event-container\');\r\n\r\n    var eventTitleNode = document.createElement(\'div\');\r\n    eventTitleNode.classList.add(\'event-title\');\r\n\r\n    var logo = document.createElement(\'img\');\r\n    logo.src = \'") + OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.LDM.svg")) + "\';\r\n    logo.style.width = \'25px\';\r\n    logo.style.height = \'25px\';\r\n\r\n    var title = document.createElement(\'span\');\r\n    title.innerText = info.event.title;\r\n\r\n    eventTitleNode.appendChild(logo);\r\n    eventTitleNode.appendChild(title);\r\n\r\n    var eventSubNode = document.createElement(\'div\');\r\n    eventSubNode.innerText = info.event.extendedProps.description;\r\n    eventSubNode.classList.add(\'event-sub\');\r\n    \r\n    info.el.appendChild(eventTitleNode);\r\n    info.el.appendChild(eventSubNode);\r\n},\r\nslotLabelFormat: function (date) {\r\n    var hours = date.date.hour;\r\n    var AMPM = hours >= 12 ? \'PM\' : \'AM\';\r\n    hours = hours > 12 ? hours - 12 : hours;\r\n    hours = hours == 0 ? 12 : hours;\r\n    \r\n    return hours + \' \' + AMPM;\r\n}\r\n"),
_advancedOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ScrollTimeInDataFetchStatus),
EventDescription: Connect2_LegacySharedModel.staticEntities.eventDescription.neverShow,
DefaultDate: model.variables.in_SelectedDateIn,
_defaultDateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SelectedDateInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
eventClick$Action: function (eventIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "FullCalendarReactive/EnhancedFullCalendar EventClick");
return controller.onClick_Event$Action(eventIn, controller.callContext(eventHandlerContext));
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
name: "FCDay",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Calendars.DayCalendar.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "FullCalendarReactive.model", "FullCalendarReactive.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Calendars.DayCalendar.mvc$debugger", "Connect2_LegacyShared.Calendars.DayCalendar.mvc$controller.OnReady.SetEvents2JS", "Connect2_LegacyShared.Calendars.DayCalendar.mvc$controller.OnReady.SetEventsJS", "Connect2_LegacyShared.Calendars.DayCalendar.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "FullCalendarReactive.model$EventRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive", "Connect2_LegacyShared.model$EventList", "FullCalendarReactive.model$EventSourceRec", "Connect2_LegacyShared.model$EventSourceList", "FullCalendarReactive.model$ResourceSourceRec", "FullCalendarReactive.model$ResourceRec", "Connect2_LegacyShared.model$ResourceList", "FullCalendarReactive.model$CallbacksRec", "FullCalendarReactive.controller$AddEvents", "FullCalendarReactive.controller$RemoveAllEvents", "FullCalendarReactive.controller$Refresh", "FullCalendarReactive.controller$GoToDate"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, FullCalendarReactiveModel, FullCalendarReactiveController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Calendars_DayCalendar_mvc_Debugger, Connect2_LegacyShared_Calendars_DayCalendar_mvc_controller_OnReady_SetEvents2JS, Connect2_LegacyShared_Calendars_DayCalendar_mvc_controller_OnReady_SetEventsJS, Connect2_LegacyShared_Calendars_DayCalendar_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
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
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:9GUgDPNkiUOj5uCMgXtyNQ:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.r0Ad_aQZiU6TuTsWvQCAFw/ClientActions.9GUgDPNkiUOj5uCMgXtyNQ:V+epiB8Q74DXRRQ+crrBAA", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tEj2uwusuUa5mDZMdGSpzw", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RSBrmrMUD0Wu1mAYihlCLg", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_Calendars_DayCalendar_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Calendars.DayCalendar.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HAqUpwzLyUuuYI_jQ2BTFQ", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YJNPNWvZ7kaU8v36uta69Q", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_Calendars_DayCalendar_mvc_controller_OnReady_SetEvents2JS, "SetEvents2", "OnReady", null, function ($parameters) {
}, {
OnParametersChanged: controller.clientActionProxies.onParametersChanged$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:pinfZ+LYPkCZyGs+bSBu7w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EZ5vbw5XEUSzNdFgCFMYwA", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_Calendars_DayCalendar_mvc_controller_OnReady_SetEventsJS, "SetEvents", "OnReady", null, function ($parameters) {
}, {
OnParametersChanged: controller.clientActionProxies.onParametersChanged$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:pinfZ+LYPkCZyGs+bSBu7w", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:9GUgDPNkiUOj5uCMgXtyNQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_LegacyShared.Calendars.DayCalendar.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onClick_Event$Action = function (eventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Event");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Calendars.DayCalendar.OnClick_Event$vars"))());
vars.value.eventInLocal = eventIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:rdctK0_vwEa5DX7sXcG6Xg:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.r0Ad_aQZiU6TuTsWvQCAFw/ClientActions.rdctK0_vwEa5DX7sXcG6Xg:zJNjE7dHtrtETqlTsRr64Q", "Connect2_LegacyShared", "OnClick_Event", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JTjXI1pZvEChKdqrFzPYZQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3F0npaST8EmnOZu3bT+zaQ", callContext.id);
// Trigger Event: EventClicked
return controller.eventClicked$Action(vars.value.eventInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:njSCY59onUWTcqqjVuYwtg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:rdctK0_vwEa5DX7sXcG6Xg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:rdctK0_vwEa5DX7sXcG6Xg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.Calendars.DayCalendar.OnClick_Event$vars", [{
name: "Event",
attrName: "eventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FullCalendarReactiveModel.EventRec();
},
complexType: FullCalendarReactiveModel.EventRec
}]);
Controller.prototype._setEvents$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetEvents");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:4vCXQ_SIAU2KCTA+HGglWQ:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.r0Ad_aQZiU6TuTsWvQCAFw/ClientActions.4vCXQ_SIAU2KCTA+HGglWQ:s1XPtmftTWvMpmX0oBXpgA", "Connect2_LegacyShared", "SetEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:8iQLHLok+UGRfKQQxV0puA", callContext.id);
// Has Event Data?
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ObbFXlpwikiq+mLknesLdg", callContext.id) && !(model.variables.in_EventsIn.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+AqcPJonH0SYu9krFEe3hw", callContext.id);
// Execute Action: RemoveAllEvents
FullCalendarReactiveController.default.removeAllEvents$Action(idService.getId("FCDay"), callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:IJ8dEa2TV0+v0fNNO9ZpSQ", callContext.id);
// Execute Action: AddEvents
FullCalendarReactiveController.default.addEvents$Action(idService.getId("FCDay"), model.variables.in_EventsIn, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:wFy82VTd9Ue1oauwp9UNlA", callContext.id);
// Execute Action: Refresh
FullCalendarReactiveController.default.refresh$Action(idService.getId("FCDay"), callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YJ20RV8KvE6U_c5z0fm6uw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zYrGZHx95UG8g8ss4xkUlA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:4vCXQ_SIAU2KCTA+HGglWQ", callContext.id);
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
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:XEvjgGiiXUa3RAwyWyKTZw:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.r0Ad_aQZiU6TuTsWvQCAFw/ClientActions.XEvjgGiiXUa3RAwyWyKTZw:uB74sDmGji0NKX4ZTBgx9A", "Connect2_LegacyShared", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hsaGvstKfU+EnztrJUpjfQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:pK8fLVOemkqE2hWdTZw0og", callContext.id);
// Execute Action: SetEvents
controller._setEvents$Action(callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kjOkLqegh0mOPtLh0syssA", callContext.id);
// Execute Action: GoToDate
FullCalendarReactiveController.default.goToDate$Action(idService.getId("FCDay"), OS.BuiltinFunctions.year(model.variables.in_SelectedDateIn), OS.BuiltinFunctions.month(model.variables.in_SelectedDateIn), OS.BuiltinFunctions.day(model.variables.in_SelectedDateIn), false, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DwUugsKkbUu4VepqoAZN+g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:XEvjgGiiXUa3RAwyWyKTZw", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onClick_Event$Action = function (eventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Event$Action, callContext, eventIn);

};
Controller.prototype.setEvents$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setEvents$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.eventClicked$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:4t0UveBkOUGkhahvWMTgJg:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg:DidE_GKyhOzR3b1Dyle1SA", "Connect2_LegacyShared", "Calendars", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:r0Ad_aQZiU6TuTsWvQCAFw:/NRWebFlows.4t0UveBkOUGkhahvWMTgJg/NodesShownInESpaceTree.r0Ad_aQZiU6TuTsWvQCAFw:IYOEhzpxldl_NAuv_6aO_A", "Connect2_LegacyShared", "DayCalendar", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:r0Ad_aQZiU6TuTsWvQCAFw", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:4t0UveBkOUGkhahvWMTgJg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Calendars/DayCalendar On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Calendars/DayCalendar On Parameters Changed");
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
define("Connect2_LegacyShared.Calendars.DayCalendar.mvc$controller.OnReady.SetEvents2JS", [], function () {
return function ($actions, $roles, $public) {
setTimeout($actions.OnParametersChanged,300);
};
});
define("Connect2_LegacyShared.Calendars.DayCalendar.mvc$controller.OnReady.SetEventsJS", [], function () {
return function ($actions, $roles, $public) {
setTimeout($actions.OnParametersChanged,200);
};
});
define("Connect2_LegacyShared.Calendars.DayCalendar.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_LegacyShared.Calendars.DayCalendar.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"YJNPNWvZ7kaU8v36uta69Q": {
getter: function (varBag, idService) {
return varBag.setEvents2JSResult.value;
}
},
"EZ5vbw5XEUSzNdFgCFMYwA": {
getter: function (varBag, idService) {
return varBag.setEventsJSResult.value;
}
},
"RSBrmrMUD0Wu1mAYihlCLg": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"oh8a_15RNU6erAvnBORv4Q": {
getter: function (varBag, idService) {
return varBag.vars.value.eventInLocal;
}
},
"ecsU+c5x6kq0wna+8BwYtw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventsIn;
}
},
"yd8FfnWtBkKzZh1tE27m8Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SelectedDateIn;
},
dataType: OS.DataTypes.DataTypes.Date
},
"zZscfOvzZEyJoW0BZFCXtg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ScrollTimeIn;
},
dataType: OS.DataTypes.DataTypes.Time
},
"0EnT6MZHJEix3J+mOi5WRw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsFullHeightIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cetHfFvYHk24A2YB_5M2VA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DayCalendarWrapper"));
})(varBag.model, idService);
}
},
"tX0G9HrPN062WiI9E7du7w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FCDay"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
