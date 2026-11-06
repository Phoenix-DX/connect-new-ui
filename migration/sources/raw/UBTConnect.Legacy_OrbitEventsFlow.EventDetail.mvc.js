define("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_MemberId", "in_MemberIdIn", "In_MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_FromNotification", "in_FromNotificationIn", "In_FromNotification", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_FromNotificationInDataFetchStatus", "_in_FromNotificationInDataFetchStatus", "_in_FromNotificationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvcModel.hasValidationWidgets || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MemberId" in inputs) {
this.variables.in_MemberIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MemberId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_EventId" in inputs) {
this.variables.in_EventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_EventName" in inputs) {
this.variables.in_EventNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventName, OS.DataTypes.DataTypes.Text);
}

if("In_FromNotification" in inputs) {
this.variables.in_FromNotificationIn = OS.DataConversion.ServerDataConverter.from(inputs.In_FromNotification, OS.DataTypes.DataTypes.Boolean);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_OrbitEventsFlow.EventDetail");
});
define("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc$model", "UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, React, OSView, UBTConnect_Legacy_OrbitEventsFlow_EventDetail_mvc_model, UBTConnect_Legacy_OrbitEventsFlow_EventDetail_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvc_view, OSWidgets, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_OrbitEventsFlow.EventDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_EventDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_EventDetail_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "EventDetail";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvc_view, {
inputs: {
In_MemberId: model.variables.in_MemberIdIn,
In_FromNotification: model.variables.in_FromNotificationIn,
In_EventName: model.variables.in_EventNameIn,
In_EventId: model.variables.in_EventIdIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_TransportDetail$Action: function (event_MilestoneIdIn, event_OrbitMilestoneTypeIdIn, event_MilestoneNameIn, event_HeaderClassIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail NavigateTo_TransportDetail");
controller.onHandle_NavigateToTransportDetail$Action(event_MilestoneIdIn, event_OrbitMilestoneTypeIdIn, event_MilestoneNameIn, event_HeaderClassIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_EventBooklet$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail NavigateTo_EventBooklet");
controller.onHandle_NavigateTo_EventBooklet$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_ContactHelpdesk$Action: function (event_SubjectIn, event_EventNameIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail NavigateTo_ContactHelpdesk");
controller.onHandle_ContactHelpdesk$Action(event_SubjectIn, event_EventNameIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_GenerateQRCode$Action: function (event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail NavigateTo_GenerateQRCode");
controller.onHandle_NavigateToGenerateQRCode$Action(event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_HostSurvey$Action: function (event_HouseholderIdIn, event_EventStartDateIn, event_EventEndDateIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail NavigateTo_HostSurvey");
controller.onHandle_NavigateToHostSurvey$Action(event_HouseholderIdIn, event_EventStartDateIn, event_EventEndDateIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_MilestoneDetail$Action: function (event_MilestoneIdIn, event_EventNameIn, event_MilestoneNameIn, event_OrbitMilestoneTypeIdIn, event_HostIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail NavigateTo_MilestoneDetail");
controller.onHandle_NavigateToMilestoneDetail$Action(event_MilestoneIdIn, event_EventNameIn, event_MilestoneNameIn, event_OrbitMilestoneTypeIdIn, model.variables.in_EventIdIn, event_HostIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_ViewDocuments$Action: function (event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail NavigateTo_ViewDocuments");
controller.onHandle_NavigateToViewDocuments$Action(event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_Helpers$Action: function (event_EventIdIn, event_HostIdIn, event_PreloadEventNameIn, event_PreloadMilestoneNameIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail NavigateTo_Helpers");
controller.onHandle_NavigateToHelpers$Action(event_EventIdIn, event_HostIdIn, event_PreloadEventNameIn, event_PreloadMilestoneNameIn, controller.callContext(eventHandlerContext));
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
placeholders: {
menu: PlaceholderContent.Empty,
commonUI_Elements: PlaceholderContent.Empty
},
_dependencies: []
}), React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc$debugger", "UBTConnect.Legacy_OrbitEventsFlow.controller", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_OrbitEventsFlow_EventDetail_mvc_Debugger, _flow_UBTConnect_Legacy_OrbitEventsFlowController) {
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
Controller.prototype._onHandle_NavigateToGenerateQRCode$Action = function (event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateToGenerateQRCode");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToGenerateQRCode$vars"))());
vars.value.event_EventStartDateInLocal = event_EventStartDateIn;
vars.value.event_EventEndDateInLocal = event_EventEndDateIn;
vars.value.event_EventLocationInLocal = event_EventLocationIn;
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8onsBh05W0mHnE8Wg9ZiYg:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.GqVNMeagt0SUb6kJJlwESA/ClientActions.8onsBh05W0mHnE8Wg9ZiYg:no1YB_goa2u08TtBojytyA", "UBTConnect", "OnHandle_NavigateToGenerateQRCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:THI70O1WEU+HZ9D9o9ZgeQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x103hVZJUkGZQo8E4O2DJw", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// Has Orbit Access?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AKtlj5eQiU+qfaGym5rx9Q", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vxJJZS3ruEeGghQ2srSdSA", callContext.id);
// Destination: /UBTConnect/QRCodeGenerate
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/QRCodeGenerate", {
In_EventId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventIdIn, OS.DataTypes.DataTypes.LongInteger),
In_MemberId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_MemberIdIn, OS.DataTypes.DataTypes.LongInteger),
In_EventName: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventNameIn, OS.DataTypes.DataTypes.Text),
In_EventStartDate: OS.DataConversion.ServerDataConverter.asString(vars.value.event_EventStartDateInLocal, OS.DataTypes.DataTypes.DateTime),
In_EventEndDate: OS.DataConversion.ServerDataConverter.asString(vars.value.event_EventEndDateInLocal, OS.DataTypes.DataTypes.DateTime),
In_EventLocation: OS.DataConversion.ServerDataConverter.asString(vars.value.event_EventLocationInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:87Fkt7GlHESB8PfX4WLkww", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ys8h2IaY50K1sa9bOMcrTw", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8onsBh05W0mHnE8Wg9ZiYg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToGenerateQRCode$vars", [{
name: "Event_EventStartDate",
attrName: "event_EventStartDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Event_EventEndDate",
attrName: "event_EventEndDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Event_EventLocation",
attrName: "event_EventLocationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onHandle_ContactHelpdesk$Action = function (subjectIn, eventNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ContactHelpdesk");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_ContactHelpdesk$vars"))());
vars.value.subjectInLocal = subjectIn;
vars.value.eventNameInLocal = eventNameIn;
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:O19eGJLUq0SuSWkChGdhvQ:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.GqVNMeagt0SUb6kJJlwESA/ClientActions.O19eGJLUq0SuSWkChGdhvQ:teDcVmOp8EVKIHAN0Oh3_Q", "UBTConnect", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:97541WDBzUGi7_kzdDZjpg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LxgqJIAZtU+4G484Xe08Zw", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// Has Orbit Access?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nAi+eXTkcU2sqQwoxlaaxA", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3Vsle3dx8E+8M5PjMlFb4w", callContext.id);
// Destination: /UBTConnect/ContactByEmailOrbitHelpdesk
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailOrbitHelpdesk", {
In_MilestoneId: OS.DataConversion.ServerDataConverter.asString("", OS.DataTypes.DataTypes.Text),
In_EventId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventIdIn, OS.DataTypes.DataTypes.LongInteger),
In_Subject: OS.DataConversion.ServerDataConverter.asString(vars.value.subjectInLocal, OS.DataTypes.DataTypes.Text),
In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dFP0Pqbu00yCkcFiYwLP7w", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Dq4ZVnmrT06XCY8OjKPbHw", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:O19eGJLUq0SuSWkChGdhvQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_ContactHelpdesk$vars", [{
name: "Subject",
attrName: "subjectInLocal",
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
}]);
Controller.prototype._onHandle_NavigateToViewDocuments$Action = function (event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateToViewDocuments");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToViewDocuments$vars"))());
vars.value.event_EventStartDateInLocal = event_EventStartDateIn;
vars.value.event_EventEndDateInLocal = event_EventEndDateIn;
vars.value.event_EventLocationInLocal = event_EventLocationIn;
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2_oTHKA5YkC5D6iQ2CRQTQ:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.GqVNMeagt0SUb6kJJlwESA/ClientActions.2_oTHKA5YkC5D6iQ2CRQTQ:noVfumvTqzW+Aml5W_puNQ", "UBTConnect", "OnHandle_NavigateToViewDocuments", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:79Qf0UH1MESI7ysMWRI8wA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KIruLdgz8UyYiUCCPIlHaQ", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// Has Orbit Access?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iAGanlD740Gp2Fr9G+Z8Bg", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WMxc+d9EUkKcowW9TT6d4w", callContext.id);
// Destination: /UBTConnect/ViewDocuments
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ViewDocuments", {
In_EventEndDate: OS.DataConversion.ServerDataConverter.asString(vars.value.event_EventEndDateInLocal, OS.DataTypes.DataTypes.DateTime),
In_MemberId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_MemberIdIn, OS.DataTypes.DataTypes.LongInteger),
In_EventName: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventNameIn, OS.DataTypes.DataTypes.Text),
In_EventId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventIdIn, OS.DataTypes.DataTypes.LongInteger),
In_EventLocation: OS.DataConversion.ServerDataConverter.asString(vars.value.event_EventLocationInLocal, OS.DataTypes.DataTypes.Text),
In_EventStartDate: OS.DataConversion.ServerDataConverter.asString(vars.value.event_EventStartDateInLocal, OS.DataTypes.DataTypes.DateTime)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9ghoXngPOUObEHxpZDBZ_w", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3ARrjGI6EkeChZLnu0iswQ", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2_oTHKA5YkC5D6iQ2CRQTQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToViewDocuments$vars", [{
name: "Event_EventStartDate",
attrName: "event_EventStartDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Event_EventEndDate",
attrName: "event_EventEndDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Event_EventLocation",
attrName: "event_EventLocationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onHandle_NavigateTo_EventBooklet$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateTo_EventBooklet");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rm60Trw5jky1_OBnKYO+QQ:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.GqVNMeagt0SUb6kJJlwESA/ClientActions.rm60Trw5jky1_OBnKYO+QQ:Rdph4KuQkDG_p0jArtkcvQ", "UBTConnect", "OnHandle_NavigateTo_EventBooklet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_li7wP6SjkyjAPk3lK13iw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_Qb5+n7yykSFqNKHCWIk7g", callContext.id);
// Destination: /UBTConnect/EventBooklet
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/EventBooklet", {
In_EventName: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventNameIn, OS.DataTypes.DataTypes.Text),
In_EventId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventIdIn, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rm60Trw5jky1_OBnKYO+QQ", callContext.id);
}

};
Controller.prototype._onHandle_NavigateToMilestoneDetail$Action = function (milestoneIdIn, eventNameIn, milestoneNameIn, orbitMilestoneTypeIdIn, eventIdIn, hostIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateToMilestoneDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToMilestoneDetail$vars"))());
vars.value.milestoneIdInLocal = milestoneIdIn;
vars.value.eventNameInLocal = eventNameIn;
vars.value.milestoneNameInLocal = milestoneNameIn;
vars.value.orbitMilestoneTypeIdInLocal = orbitMilestoneTypeIdIn;
vars.value.eventIdInLocal = eventIdIn;
vars.value.hostIdInLocal = hostIdIn;
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:DUK6Z654bUC_BpBsjJ2RZA:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.GqVNMeagt0SUb6kJJlwESA/ClientActions.DUK6Z654bUC_BpBsjJ2RZA:zE0bzdBSKxNKYeoR+IKWFg", "UBTConnect", "OnHandle_NavigateToMilestoneDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hWji_OJW9k6AzznjVl3tww", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vDaPv+vHiUm0t6oaWHX6ZQ", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// Has Orbit Access?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GCL4CmFYNECcjrGFVRzORA", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nbYiYQNNv0e1TzDLpGisAg", callContext.id);
// Destination: /UBTConnect/MilestoneDetail
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/MilestoneDetail", {
In_OrbitMilestoneTypeId: OS.DataConversion.ServerDataConverter.asString(vars.value.orbitMilestoneTypeIdInLocal, OS.DataTypes.DataTypes.Text),
In_FromNotification: OS.DataConversion.ServerDataConverter.asString(false, OS.DataTypes.DataTypes.Boolean),
In_HostId: OS.DataConversion.ServerDataConverter.asString(vars.value.hostIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_MilestoneId: OS.DataConversion.ServerDataConverter.asString(vars.value.milestoneIdInLocal, OS.DataTypes.DataTypes.Text),
In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
In_MilestoneName: OS.DataConversion.ServerDataConverter.asString(vars.value.milestoneNameInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OSku7LLLj0KuROzkcwgVdw", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d97E+M0Sd0CyoYU4KmcoPw", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:DUK6Z654bUC_BpBsjJ2RZA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToMilestoneDetail$vars", [{
name: "MilestoneId",
attrName: "milestoneIdInLocal",
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
name: "OrbitMilestoneTypeId",
attrName: "orbitMilestoneTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventId",
attrName: "eventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "HostId",
attrName: "hostIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._onHandle_NavigateToHelpers$Action = function (eventIdIn, hostIdIn, preloadEventNameIn, preloadMilestoneNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateToHelpers");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToHelpers$vars"))());
vars.value.eventIdInLocal = eventIdIn;
vars.value.hostIdInLocal = hostIdIn;
vars.value.preloadEventNameInLocal = preloadEventNameIn;
vars.value.preloadMilestoneNameInLocal = preloadMilestoneNameIn;
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8Z_j0b5VRUydrQZc98UWkg:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.GqVNMeagt0SUb6kJJlwESA/ClientActions.8Z_j0b5VRUydrQZc98UWkg:ClrAjY8ptulLlMDtaoCmiw", "UBTConnect", "OnHandle_NavigateToHelpers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6_jU1vfil0iUa+Qc9uOhuw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y8SFhGVqUUy4rcWWBNssIA", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// Has Orbit Access?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:49uJqVzVpkynyd73i5VSOw", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VeqwK1RbJ0ihkr8UAjAkxg", callContext.id);
// Destination: /UBTConnect/HelpersDetail
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HelpersDetail", {
In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.preloadEventNameInLocal, OS.DataTypes.DataTypes.Text),
In_HostId: OS.DataConversion.ServerDataConverter.asString(vars.value.hostIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_OrbitMilestoneTypeId: OS.DataConversion.ServerDataConverter.asString(UBTConnectModel.staticEntities.orbitMilestoneType.helper, OS.DataTypes.DataTypes.Text),
In_MilestoneName: OS.DataConversion.ServerDataConverter.asString(vars.value.preloadMilestoneNameInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2tyk0jWZSUez_HdX9pf0cw", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2eknOok5wE2gWq7eJrrmZQ", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8Z_j0b5VRUydrQZc98UWkg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToHelpers$vars", [{
name: "EventId",
attrName: "eventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "HostId",
attrName: "hostIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "PreloadEventName",
attrName: "preloadEventNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PreloadMilestoneName",
attrName: "preloadMilestoneNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onHandle_NavigateToTransportDetail$Action = function (milestoneIdIn, orbitMilestoneTypeIdIn, milestoneNameIn, headerClassIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateToTransportDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToTransportDetail$vars"))());
vars.value.milestoneIdInLocal = milestoneIdIn;
vars.value.orbitMilestoneTypeIdInLocal = orbitMilestoneTypeIdIn;
vars.value.milestoneNameInLocal = milestoneNameIn;
vars.value.headerClassInLocal = headerClassIn;
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:p+7c3CqN1EeoVfBQEWphnw:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.GqVNMeagt0SUb6kJJlwESA/ClientActions.p+7c3CqN1EeoVfBQEWphnw:ZDjuHlFiywLjyCe653zhbg", "UBTConnect", "OnHandle_NavigateToTransportDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VH8kjdD6OEir2wh2nZ8QZA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QPBoiF128kyV8rLTlGQG_w", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// Has Orbit Access?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dxs5SJdGMk68FlZW5zrrOA", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rJUm+PRJsEWa9qysNB_cwQ", callContext.id);
// Destination: /UBTConnect/TransportDetail
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/TransportDetail", {
In_HeaderClass: OS.DataConversion.ServerDataConverter.asString(vars.value.headerClassInLocal, OS.DataTypes.DataTypes.Text),
In_MilestoneName: OS.DataConversion.ServerDataConverter.asString(vars.value.milestoneNameInLocal, OS.DataTypes.DataTypes.Text),
In_MilestoneId: OS.DataConversion.ServerDataConverter.asString(vars.value.milestoneIdInLocal, OS.DataTypes.DataTypes.Text),
In_TargetMemberId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_MemberIdIn, OS.DataTypes.DataTypes.LongInteger),
In_OrbitMilestoneTypeId: OS.DataConversion.ServerDataConverter.asString(vars.value.orbitMilestoneTypeIdInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B0LYIwL+ZEW7jMa_bYVoGQ", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:c+fy70mpSkyLSGNdP+YEkw", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:p+7c3CqN1EeoVfBQEWphnw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToTransportDetail$vars", [{
name: "MilestoneId",
attrName: "milestoneIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "OrbitMilestoneTypeId",
attrName: "orbitMilestoneTypeIdInLocal",
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
name: "HeaderClass",
attrName: "headerClassInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onHandle_NavigateToHostSurvey$Action = function (householderIdIn, eventStartDateIn, eventEndDateIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateToHostSurvey");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToHostSurvey$vars"))());
vars.value.householderIdInLocal = householderIdIn;
vars.value.eventStartDateInLocal = eventStartDateIn;
vars.value.eventEndDateInLocal = eventEndDateIn;
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:YGCC96tcLka0AYrrDnn+1Q:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.GqVNMeagt0SUb6kJJlwESA/ClientActions.YGCC96tcLka0AYrrDnn+1Q:+Bt6BboHflco+UqP8yMuKQ", "UBTConnect", "OnHandle_NavigateToHostSurvey", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wpEDE3eymkir9dA0h5Qe1A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hvWkIUI9Ck2LOsmfutkHng", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// Has Orbit Access?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gBCBA4wtBkWyiuEQeY0Aew", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ViNFMAex9UienYWpdbePaQ", callContext.id);
// Destination: /UBTConnect/HostSurvey
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HostSurvey", {
In_MemberId: OS.DataConversion.ServerDataConverter.asString(vars.value.householderIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_EventStartDate: OS.DataConversion.ServerDataConverter.asString(vars.value.eventStartDateInLocal, OS.DataTypes.DataTypes.DateTime),
In_EventId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventIdIn, OS.DataTypes.DataTypes.LongInteger),
In_EventName: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventNameIn, OS.DataTypes.DataTypes.Text),
In_EventEndDate: OS.DataConversion.ServerDataConverter.asString(vars.value.eventEndDateInLocal, OS.DataTypes.DataTypes.DateTime)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:H9qVX1_um0e5c8D1I5Ccbg", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PDy8IDZ+iEyRmRrFZdsWSg", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YGCC96tcLka0AYrrDnn+1Q", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.OnHandle_NavigateToHostSurvey$vars", [{
name: "HouseholderId",
attrName: "householderIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "EventStartDate",
attrName: "eventStartDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "EventEndDate",
attrName: "eventEndDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);

Controller.prototype.onHandle_NavigateToGenerateQRCode$Action = function (event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateToGenerateQRCode$Action, callContext, event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn);

};
Controller.prototype.onHandle_ContactHelpdesk$Action = function (subjectIn, eventNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext, subjectIn, eventNameIn);

};
Controller.prototype.onHandle_NavigateToViewDocuments$Action = function (event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateToViewDocuments$Action, callContext, event_EventStartDateIn, event_EventEndDateIn, event_EventLocationIn);

};
Controller.prototype.onHandle_NavigateTo_EventBooklet$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateTo_EventBooklet$Action, callContext);

};
Controller.prototype.onHandle_NavigateToMilestoneDetail$Action = function (milestoneIdIn, eventNameIn, milestoneNameIn, orbitMilestoneTypeIdIn, eventIdIn, hostIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateToMilestoneDetail$Action, callContext, milestoneIdIn, eventNameIn, milestoneNameIn, orbitMilestoneTypeIdIn, eventIdIn, hostIdIn);

};
Controller.prototype.onHandle_NavigateToHelpers$Action = function (eventIdIn, hostIdIn, preloadEventNameIn, preloadMilestoneNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateToHelpers$Action, callContext, eventIdIn, hostIdIn, preloadEventNameIn, preloadMilestoneNameIn);

};
Controller.prototype.onHandle_NavigateToTransportDetail$Action = function (milestoneIdIn, orbitMilestoneTypeIdIn, milestoneNameIn, headerClassIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateToTransportDetail$Action, callContext, milestoneIdIn, orbitMilestoneTypeIdIn, milestoneNameIn, headerClassIn);

};
Controller.prototype.onHandle_NavigateToHostSurvey$Action = function (householderIdIn, eventStartDateIn, eventEndDateIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateToHostSurvey$Action, callContext, householderIdIn, eventStartDateIn, eventEndDateIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ETX542+jvkKT6PN6V5za9g:/NRWebFlows.ETX542+jvkKT6PN6V5za9g:8pcNe1EZJIP6giTtHUazkQ", "UBTConnect", "Legacy_OrbitEventsFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GqVNMeagt0SUb6kJJlwESA:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.GqVNMeagt0SUb6kJJlwESA:PAJlYo17P3VztZlevmk5fw", "UBTConnect", "EventDetail", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GqVNMeagt0SUb6kJJlwESA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ETX542+jvkKT6PN6V5za9g", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_Legacy_OrbitEventsFlowController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Legacy_OrbitEventsFlow.EventDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"8eoMgzymlkm_+I5uE8lTYg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_EventStartDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"rqj4t_8R_0aeHq4RYuBAgg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_EventEndDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"P5uZFfBmkEaRFo8Dj7JtxA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_EventLocationInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"x103hVZJUkGZQo8E4O2DJw": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"pbq_W_7Uq0upP38ouRF++g": {
getter: function (varBag, idService) {
return varBag.vars.value.subjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NUT2XrDCyEWzX72gEanJHg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LxgqJIAZtU+4G484Xe08Zw": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"JIr678Za5EqBsVusajj5Qg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_EventStartDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"H6Mmc3EcFkm7TlvVZmlDjw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_EventEndDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"o9SKduYgjUKeyi0P88LNog": {
getter: function (varBag, idService) {
return varBag.vars.value.event_EventLocationInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KIruLdgz8UyYiUCCPIlHaQ": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"Gz9yDPdWJ0OA_t1zs5GP1w": {
getter: function (varBag, idService) {
return varBag.vars.value.milestoneIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9D+DfngaKEirJOvyH_l8lg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"c6sEGMwSgkSm9oyo130twQ": {
getter: function (varBag, idService) {
return varBag.vars.value.milestoneNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wXe33nH+nE6PKakv_70zAw": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitMilestoneTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UDfM7gR5UkGe8YsejuN_+Q": {
getter: function (varBag, idService) {
return varBag.vars.value.eventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"j5s+TIwvRUybmC6jQE8Y+Q": {
getter: function (varBag, idService) {
return varBag.vars.value.hostIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"vDaPv+vHiUm0t6oaWHX6ZQ": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"njN1OPJOOkWMlKjuyqfhgA": {
getter: function (varBag, idService) {
return varBag.vars.value.eventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"fGZvEwaFxE+yKE4wMLC1OA": {
getter: function (varBag, idService) {
return varBag.vars.value.hostIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"6K1WY7jMxEuipw5ErrrW1g": {
getter: function (varBag, idService) {
return varBag.vars.value.preloadEventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"l4R9Ry7iVkiUgCxFUm8SXg": {
getter: function (varBag, idService) {
return varBag.vars.value.preloadMilestoneNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"y8SFhGVqUUy4rcWWBNssIA": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"1ijAtQDk1kCUgiiS9elsNg": {
getter: function (varBag, idService) {
return varBag.vars.value.milestoneIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pCWJCKi6cE+ddMF53rFVJg": {
getter: function (varBag, idService) {
return varBag.vars.value.orbitMilestoneTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jjXBisY29kCo7qLm8SN1qw": {
getter: function (varBag, idService) {
return varBag.vars.value.milestoneNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Bl2ZvGenTE+Mz_0wCh_xuA": {
getter: function (varBag, idService) {
return varBag.vars.value.headerClassInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QPBoiF128kyV8rLTlGQG_w": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"Ku8PWhonhUCmkiqxUt4iZg": {
getter: function (varBag, idService) {
return varBag.vars.value.householderIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"6ELttvFTRUSkGcn5OWC65A": {
getter: function (varBag, idService) {
return varBag.vars.value.eventStartDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"6FCRIkGJy0OtxVCR4csEKQ": {
getter: function (varBag, idService) {
return varBag.vars.value.eventEndDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"hvWkIUI9Ck2LOsmfutkHng": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"S95tWNIzi0mwKEn5oS+_uw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"V4JbVsNH3EKRktn_x7RfNg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"smvfOZvE7EGpG5irY1+gqg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FXAE+yKgkkuyyrcsy0riMQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FromNotificationIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"VSNjPecJjUiVv5fsSFv87A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"jblkEcC4I0+i26GKo74kAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
