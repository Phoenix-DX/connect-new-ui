define("UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_IsContactHelpdesk", "in_IsContactHelpdeskIn", "In_IsContactHelpdesk", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsContactHelpdeskInDataFetchStatus", "_in_IsContactHelpdeskInDataFetchStatus", "_in_IsContactHelpdeskInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneId", "in_MilestoneIdIn", "In_MilestoneId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_TargetMemberId", "in_TargetMemberIdIn", "In_TargetMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_TargetMemberIdInDataFetchStatus", "_in_TargetMemberIdInDataFetchStatus", "_in_TargetMemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Subject", "in_SubjectIn", "In_Subject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
}, false), 
this.attr("In_HostName", "in_HostNameIn", "In_HostName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HostNameInDataFetchStatus", "_in_HostNameInDataFetchStatus", "_in_HostNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostEmail", "in_HostEmailIn", "In_HostEmail", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HostEmailInDataFetchStatus", "_in_HostEmailInDataFetchStatus", "_in_HostEmailInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_FormattedDateTime", "in_FormattedDateTimeIn", "In_FormattedDateTime", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_FormattedDateTimeInDataFetchStatus", "_in_FormattedDateTimeInDataFetchStatus", "_in_FormattedDateTimeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvcModel.hasValidationWidgets || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_IsContactHelpdesk" in inputs) {
this.variables.in_IsContactHelpdeskIn = OS.DataConversion.ServerDataConverter.from(inputs.In_IsContactHelpdesk, OS.DataTypes.DataTypes.Boolean);
}

if("In_EventId" in inputs) {
this.variables.in_EventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_MilestoneId" in inputs) {
this.variables.in_MilestoneIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MilestoneId, OS.DataTypes.DataTypes.Text);
}

if("In_TargetMemberId" in inputs) {
this.variables.in_TargetMemberIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_TargetMemberId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_Subject" in inputs) {
this.variables.in_SubjectIn = OS.DataConversion.ServerDataConverter.from(inputs.In_Subject, OS.DataTypes.DataTypes.Text);
}

if("In_MilestoneTitle" in inputs) {
this.variables.in_MilestoneTitleIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MilestoneTitle, OS.DataTypes.DataTypes.Text);
}

if("In_EventName" in inputs) {
this.variables.in_EventNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventName, OS.DataTypes.DataTypes.Text);
}

if("In_HostName" in inputs) {
this.variables.in_HostNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HostName, OS.DataTypes.DataTypes.Text);
}

if("In_HostEmail" in inputs) {
this.variables.in_HostEmailIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HostEmail, OS.DataTypes.DataTypes.Text);
}

if("In_FormattedDateTime" in inputs) {
this.variables.in_FormattedDateTimeIn = OS.DataConversion.ServerDataConverter.from(inputs.In_FormattedDateTime, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_OrbitEventsFlow.EmailContact");
});
define("UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc$model", "UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, React, OSView, UBTConnect_Legacy_OrbitEventsFlow_EmailContact_mvc_model, UBTConnect_Legacy_OrbitEventsFlow_EmailContact_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_view, OSWidgets, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_OrbitEventsFlow.EmailContact";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_EmailContact_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_EmailContact_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "EmailContact";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_view, {
inputs: {
In_MilestoneId: model.variables.in_MilestoneIdIn,
In_Subject: model.variables.in_SubjectIn,
In_TargetMemberId: model.variables.in_TargetMemberIdIn,
In_EventId: model.variables.in_EventIdIn,
In_IsContactHelpdesk: model.variables.in_IsContactHelpdeskIn,
In_MilestoneName: model.variables.in_MilestoneTitleIn,
In_FormattedDateTime: model.variables.in_FormattedDateTimeIn,
In_EventName: model.variables.in_EventNameIn,
In_HostName: model.variables.in_HostNameIn,
In_HostEmail: model.variables.in_HostEmailIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
submitted$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_ContactForm Submitted");
controller.onHandle_Submitted$Action(controller.callContext(eventHandlerContext));
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
bottomBar: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
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
})];
}),
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc$debugger", "UBTConnect.Legacy_OrbitEventsFlow.controller", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_OrbitEventsFlow_EmailContact_mvc_Debugger, _flow_UBTConnect_Legacy_OrbitEventsFlowController) {
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
Controller.prototype._onHandle_Submitted$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_Submitted");
callContext = controller.callContext(callContext);
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:o36dkV9U9E6seG3At1u4cQ:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.eMHvl_qoV0yJRJV2uo1rxw/ClientActions.o36dkV9U9E6seG3At1u4cQ:JPKkVZ7UNj54DgRL8nQ9tA", "UBTConnect", "OnHandle_Submitted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G+VNoLNb4E23fGsb199mtw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0b+Aaqsp5EyQfyHZxJBm+w", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// Has Orbit Access?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sw0z3_SFNEyTRsGa8Ivixw", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L1NXAqszc0WC4q_+HyqsTQ", callContext.id);
// Destination: (PreviousScreen)
return OS.Navigation.navigateBack(null, callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kyqz6+3CDECsvRemrVQUog", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zhJFbjWvYkKhXU3Pi2srMw", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:o36dkV9U9E6seG3At1u4cQ", callContext.id);
}

};

Controller.prototype.onHandle_Submitted$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_Submitted$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ETX542+jvkKT6PN6V5za9g:/NRWebFlows.ETX542+jvkKT6PN6V5za9g:7uwIi+Axms5S9K7q0ZsWPQ", "UBTConnect", "Legacy_OrbitEventsFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:eMHvl_qoV0yJRJV2uo1rxw:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.eMHvl_qoV0yJRJV2uo1rxw:cSOFVtt8QJ0qiXTqIfqToQ", "UBTConnect", "EmailContact", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eMHvl_qoV0yJRJV2uo1rxw", callContext.id);
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

define("UBTConnect.Legacy_OrbitEventsFlow.EmailContact.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"0b+Aaqsp5EyQfyHZxJBm+w": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"d_MatlrkaUq4HlBYvb5rvw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsContactHelpdeskIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"uYKDrWoBh0KvgooGWuDGfA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"BTw4rppxlUCfukGAfKhjfg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"y8kfjKRZE02lq24CU5OMFA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TargetMemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"sMk6G1lox0Cj51dmZG1BrQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubjectIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"n_aX6Y73CkKHSR_ys3af+Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneTitleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_G0BrOKkC02LUVrW0uc_Xg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sK+IuoFqx0CXkjj1HCgbKA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pFDI+XpySEqQMu0zAwTNHw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostEmailIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+bdkao3DDUGNufXTfjEmXw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FormattedDateTimeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NCSQOY4oDkiGqGCKLxze2g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"QAjuLwpdA0u6oQmQvzJODQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"1whVEMzqikSaEnDMN3epQQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
