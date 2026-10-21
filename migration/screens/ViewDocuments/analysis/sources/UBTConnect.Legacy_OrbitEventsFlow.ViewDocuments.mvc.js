define("UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, Connect2_LegacySharedController, UBTConnect_UtilsController, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
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
this.attr("In_EventStartDate", "in_EventStartDateIn", "In_EventStartDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_EventStartDateInDataFetchStatus", "_in_EventStartDateInDataFetchStatus", "_in_EventStartDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventEndDate", "in_EventEndDateIn", "In_EventEndDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_EventEndDateInDataFetchStatus", "_in_EventEndDateInDataFetchStatus", "_in_EventEndDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventLocation", "in_EventLocationIn", "In_EventLocation", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventLocationInDataFetchStatus", "_in_EventLocationInDataFetchStatus", "_in_EventLocationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvcModel.hasValidationWidgets || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
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

if("In_EventStartDate" in inputs) {
this.variables.in_EventStartDateIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventStartDate, OS.DataTypes.DataTypes.DateTime);
}

if("In_EventEndDate" in inputs) {
this.variables.in_EventEndDateIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventEndDate, OS.DataTypes.DataTypes.DateTime);
}

if("In_EventLocation" in inputs) {
this.variables.in_EventLocationIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventLocation, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_OrbitEventsFlow.ViewDocuments");
});
define("UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments.mvc$model", "UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_LegacySharedController, UBTConnect_UtilsController, React, OSView, UBTConnect_Legacy_OrbitEventsFlow_ViewDocuments_mvc_model, UBTConnect_Legacy_OrbitEventsFlow_ViewDocuments_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvc_view, OSWidgets, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_OrbitEventsFlow.ViewDocuments";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_ViewDocuments_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_ViewDocuments_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "ViewDocuments";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvc_view, {
inputs: {
In_MemberId: model.variables.in_MemberIdIn,
In_EventId: model.variables.in_EventIdIn,
In_EventStartDate: model.variables.in_EventStartDateIn,
In_EventName: model.variables.in_EventNameIn,
In_EventEndDate: model.variables.in_EventEndDateIn,
In_EventLocation: model.variables.in_EventLocationIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
contactHelpdesk$Action: function (event_SubjectIn, event_EventNameIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_Documents/ScreenBlock_ViewDocuments ContactHelpdesk");
controller.onHandle_ContactHelpdesk$Action(event_SubjectIn, event_EventNameIn, controller.callContext(eventHandlerContext));
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
define("UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments.mvc$debugger", "UBTConnect.Legacy_OrbitEventsFlow.controller", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_LegacySharedController, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_OrbitEventsFlow_ViewDocuments_mvc_Debugger, _flow_UBTConnect_Legacy_OrbitEventsFlowController) {
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
Controller.prototype._onHandle_ContactHelpdesk$Action = function (subjectIn, eventNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ContactHelpdesk");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments.OnHandle_ContactHelpdesk$vars"))());
vars.value.subjectInLocal = subjectIn;
vars.value.eventNameInLocal = eventNameIn;
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_f1o+n2RU06w05klpjaAfA:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.6i5mDaeLOUyVLG7lhHp2lQ/ClientActions._f1o+n2RU06w05klpjaAfA:fHFkuyIoSNjMsRNL0hNW1w", "UBTConnect", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0XGCrHXPdUWcv9fiLtIwUg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:876gSuvnxkqt7mqm76R8Ew", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// Has Orbit Access?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TKUp96nlTEOz44fQ8Rggbg", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tcOCplSaCEO1Vd9mdthBCQ", callContext.id);
// Destination: /UBTConnect/ContactByEmailOrbitHelpdesk
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailOrbitHelpdesk", {
In_Subject: OS.DataConversion.ServerDataConverter.asString(vars.value.subjectInLocal, OS.DataTypes.DataTypes.Text),
In_EventId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventIdIn, OS.DataTypes.DataTypes.LongInteger),
In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
In_MilestoneId: OS.DataConversion.ServerDataConverter.asString("", OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sk+xL5dfT0iesAWL0g9lOA", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:c3w3sDixqkqX5_5AWRjO7w", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_f1o+n2RU06w05klpjaAfA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments.OnHandle_ContactHelpdesk$vars", [{
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

Controller.prototype.onHandle_ContactHelpdesk$Action = function (subjectIn, eventNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext, subjectIn, eventNameIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ETX542+jvkKT6PN6V5za9g:/NRWebFlows.ETX542+jvkKT6PN6V5za9g:7uwIi+Axms5S9K7q0ZsWPQ", "UBTConnect", "Legacy_OrbitEventsFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:6i5mDaeLOUyVLG7lhHp2lQ:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.6i5mDaeLOUyVLG7lhHp2lQ:AuVUVHCSYUYe99zz90QIqg", "UBTConnect", "ViewDocuments", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:6i5mDaeLOUyVLG7lhHp2lQ", callContext.id);
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

define("UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"5uFZ7TZN9Ee5vzrD+lSiIQ": {
getter: function (varBag, idService) {
return varBag.vars.value.subjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RSFo6_UexEuKO1PCXXtbxA": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"876gSuvnxkqt7mqm76R8Ew": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"sXl7b01b+0qDlrl5gFjEQw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"QcNXhaYHmkuFH942LuzffQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"R_AFHC_Fo0+OKM5YyJNY4A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TGSp_zBhEUShWWeohZqC0A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventStartDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"cwpxl5Q9REqx14H4bYMCmQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventEndDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"gvNJZQ9VHEGT3uzudaiW3g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventLocationIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rL8AYiTEg0KY4IeIMy2W2A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"6vwqfozdYkia2SEUVbvfWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
