define("UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, Connect2_LegacySharedController, UBTConnect_UtilsController, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_MilestoneId", "in_MilestoneIdIn", "In_MilestoneId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MemberId", "in_MemberIdIn", "In_MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostId", "in_HostIdIn", "In_HostId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_HostIdInDataFetchStatus", "_in_HostIdInDataFetchStatus", "_in_HostIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_OrbitMilestoneTypeId", "in_OrbitMilestoneTypeIdIn", "In_OrbitMilestoneTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneTitle", "in_MilestoneTitleIn", "In_MilestoneTitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneTitleInDataFetchStatus", "_in_MilestoneTitleInDataFetchStatus", "_in_MilestoneTitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvcModel.hasValidationWidgets || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MilestoneId" in inputs) {
this.variables.in_MilestoneIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MilestoneId, OS.DataTypes.DataTypes.Text);
}

if("In_EventId" in inputs) {
this.variables.in_EventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_MemberId" in inputs) {
this.variables.in_MemberIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MemberId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_HostId" in inputs) {
this.variables.in_HostIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HostId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_OrbitMilestoneTypeId" in inputs) {
this.variables.in_OrbitMilestoneTypeIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_OrbitMilestoneTypeId, OS.DataTypes.DataTypes.Text);
}

if("In_MilestoneTitle" in inputs) {
this.variables.in_MilestoneTitleIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MilestoneTitle, OS.DataTypes.DataTypes.Text);
}

if("In_EventName" in inputs) {
this.variables.in_EventNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventName, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_OrbitEventsFlow.GuestArrangements");
});
define("UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc$model", "UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_LegacySharedController, UBTConnect_UtilsController, React, OSView, UBTConnect_Legacy_OrbitEventsFlow_GuestArrangements_mvc_model, UBTConnect_Legacy_OrbitEventsFlow_GuestArrangements_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvc_view, OSWidgets, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_OrbitEventsFlow.GuestArrangements";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_GuestArrangements_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_GuestArrangements_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "GuestArrangements";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvc_view, {
inputs: {
In_OrbitMilestoneTypeId: model.variables.in_OrbitMilestoneTypeIdIn,
In_PreloadMilestoneName: model.variables.in_MilestoneTitleIn,
In_HostId: model.variables.in_HostIdIn,
In_PreloadEventName: model.variables.in_EventNameIn,
In_MemberId: model.variables.in_MemberIdIn,
In_MilestoneId: model.variables.in_MilestoneIdIn,
In_EventId: model.variables.in_EventIdIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_HouseholdDetail$Action: function (event_HouseholdIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_GuestArrangements NavigateTo_HouseholdDetail");
controller.onHandle_NavigateToHouseholdDetail$Action(event_HouseholdIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
contactHelpdesk$Action: function (event_SubjectIn, event_EventNameIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_GuestArrangements ContactHelpdesk");
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
define("UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc$debugger", "UBTConnect.Legacy_OrbitEventsFlow.controller", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_LegacySharedController, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_OrbitEventsFlow_GuestArrangements_mvc_Debugger, _flow_UBTConnect_Legacy_OrbitEventsFlowController) {
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.OnHandle_ContactHelpdesk$vars"))());
vars.value.subjectInLocal = subjectIn;
vars.value.eventNameInLocal = eventNameIn;
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GPZRpcXhk06ee1ztGtBVOg:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.igMVqkQIVk6KqUlZprB5jA/ClientActions.GPZRpcXhk06ee1ztGtBVOg:03mlppnwl+uDLIz5BbM0uw", "UBTConnect", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1xD4h0dtMEWl8sdi52JrWg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cH0_xyHxVka8o8c4Ro5jNg", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// Has Orbit Access?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BPwCnUB6ykWObICZ6uSPdA", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6Vpc0+LTQEiYanLhLpByUQ", callContext.id);
// Destination: /UBTConnect/ContactByEmailOrbitHelpdesk
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailOrbitHelpdesk", {
In_EventId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_EventIdIn, OS.DataTypes.DataTypes.LongInteger),
In_Subject: OS.DataConversion.ServerDataConverter.asString(vars.value.subjectInLocal, OS.DataTypes.DataTypes.Text),
In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
In_MilestoneId: OS.DataConversion.ServerDataConverter.asString("", OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bqVZRRQKTEKfJXnDfuXIbQ", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QXImOQgDAE65Rc4_NlBYog", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GPZRpcXhk06ee1ztGtBVOg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.OnHandle_ContactHelpdesk$vars", [{
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
Controller.prototype._onHandle_NavigateToHouseholdDetail$Action = function (householdIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateToHouseholdDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.OnHandle_NavigateToHouseholdDetail$vars"))());
vars.value.householdIdInLocal = householdIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HhUx374GM0KLat6qv0buVA:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.igMVqkQIVk6KqUlZprB5jA/ClientActions.HhUx374GM0KLat6qv0buVA:krr5bh6NHWGnPoaiOmzUeA", "UBTConnect", "OnHandle_NavigateToHouseholdDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+a5gTL7Sa0aPXx2iEGGtcA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_X+srUZcOEu0QVsp4L8ufQ", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.householdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HhUx374GM0KLat6qv0buVA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.OnHandle_NavigateToHouseholdDetail$vars", [{
name: "HouseholdId",
attrName: "householdIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);

Controller.prototype.onHandle_ContactHelpdesk$Action = function (subjectIn, eventNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext, subjectIn, eventNameIn);

};
Controller.prototype.onHandle_NavigateToHouseholdDetail$Action = function (householdIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateToHouseholdDetail$Action, callContext, householdIdIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ETX542+jvkKT6PN6V5za9g:/NRWebFlows.ETX542+jvkKT6PN6V5za9g:8pcNe1EZJIP6giTtHUazkQ", "UBTConnect", "Legacy_OrbitEventsFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:igMVqkQIVk6KqUlZprB5jA:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.igMVqkQIVk6KqUlZprB5jA:HzyBGOdx9ku3tAwY8eSxPA", "UBTConnect", "GuestArrangements", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:igMVqkQIVk6KqUlZprB5jA", callContext.id);
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

define("UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"JtXs3muAUUegSLoQDKtHUw": {
getter: function (varBag, idService) {
return varBag.vars.value.subjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"e0vMd2rTW0GB9_EbcLtUrw": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cH0_xyHxVka8o8c4Ro5jNg": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"eniEjpSISk2FXlUwTaZV6Q": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"HvYsBPIF10O6PugvwotQ6Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dCJqJqdEtE6ujjlbTTd+GA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"_rujXNJ7zkqIMCxb20kaCA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"dGEChmx2+0eTOxAyEX454Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"+fXz40FEhEuOtY9dHOoQOQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitMilestoneTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1tY5CyBZd0uAmd+x0sCwmw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneTitleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"12K8iKjLEkOiH0TShVDZTw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZJ75rGNgR06G53ouxPBDOg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"lhoG0QjL1kOT5tRUPv56Tg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
