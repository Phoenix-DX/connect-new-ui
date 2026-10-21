define("UBTConnect.Legacy_OrbitEventsFlow.TransportDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_TransportDetail.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_TransportDetail_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
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
this.attr("In_OrbitMilestoneTypeId", "in_OrbitMilestoneTypeIdIn", "In_OrbitMilestoneTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneName", "in_MilestoneNameIn", "In_MilestoneName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HeaderClass", "in_HeaderClassIn", "In_HeaderClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HeaderClassInDataFetchStatus", "_in_HeaderClassInDataFetchStatus", "_in_HeaderClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_TargetMemberId", "in_TargetMemberIdIn", "In_TargetMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_TargetMemberIdInDataFetchStatus", "_in_TargetMemberIdInDataFetchStatus", "_in_TargetMemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_TransportDetail_mvcModel.hasValidationWidgets || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MilestoneId" in inputs) {
this.variables.in_MilestoneIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MilestoneId, OS.DataTypes.DataTypes.Text);
}

if("In_OrbitMilestoneTypeId" in inputs) {
this.variables.in_OrbitMilestoneTypeIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_OrbitMilestoneTypeId, OS.DataTypes.DataTypes.Text);
}

if("In_MilestoneName" in inputs) {
this.variables.in_MilestoneNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MilestoneName, OS.DataTypes.DataTypes.Text);
}

if("In_HeaderClass" in inputs) {
this.variables.in_HeaderClassIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HeaderClass, OS.DataTypes.DataTypes.Text);
}

if("In_TargetMemberId" in inputs) {
this.variables.in_TargetMemberIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_TargetMemberId, OS.DataTypes.DataTypes.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_OrbitEventsFlow.TransportDetail");
});
define("UBTConnect.Legacy_OrbitEventsFlow.TransportDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_OrbitEventsFlow.TransportDetail.mvc$model", "UBTConnect.Legacy_OrbitEventsFlow.TransportDetail.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_TransportDetail.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, React, OSView, UBTConnect_Legacy_OrbitEventsFlow_TransportDetail_mvc_model, UBTConnect_Legacy_OrbitEventsFlow_TransportDetail_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_TransportDetail_mvc_view, OSWidgets, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_OrbitEventsFlow.TransportDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_TransportDetail_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_TransportDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_TransportDetail_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "TransportDetail";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_TransportDetail_mvc_view, {
inputs: {
In_OrbitMilestoneTypeId: model.variables.in_OrbitMilestoneTypeIdIn,
In_MilestoneId: model.variables.in_MilestoneIdIn,
In_HeaderClass: model.variables.in_HeaderClassIn,
In_PreloadMilestoneName: model.variables.in_MilestoneNameIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_ContactHelpdesk$Action: function (event_SubjectIn, event_EventNameIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_TransportDetail NavigateTo_ContactHelpdesk");
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
define("UBTConnect.Legacy_OrbitEventsFlow.TransportDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_OrbitEventsFlow.TransportDetail.mvc$debugger", "UBTConnect.Legacy_OrbitEventsFlow.controller", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_OrbitEventsFlow_TransportDetail_mvc_Debugger, _flow_UBTConnect_Legacy_OrbitEventsFlowController) {
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.TransportDetail.OnHandle_ContactHelpdesk$vars"))());
vars.value.subjectInLocal = subjectIn;
vars.value.eventNameInLocal = eventNameIn;
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CigyeWCsRE+GoEckUykfVA:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.Ygt_FkINdUG67q4yzyUnlg/ClientActions.CigyeWCsRE+GoEckUykfVA:FrC3Www5y0TZwIgT48hsfg", "UBTConnect", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yZ1IG4hcikeue4O946JS4Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b_1_r8C0h0KD_i51Lf+ebQ", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// Has Orbit Access?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rJF+4aoueEyybo4j6jZbtg", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dPGlGvbiWEaI1Sb4DPifuA", callContext.id);
// Destination: /UBTConnect/ContactByEmailOrbitHelpdesk
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailOrbitHelpdesk", {
In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
In_Subject: OS.DataConversion.ServerDataConverter.asString(vars.value.subjectInLocal, OS.DataTypes.DataTypes.Text),
In_TargetMemberId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_TargetMemberIdIn, OS.DataTypes.DataTypes.LongInteger),
In_EventId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()), OS.DataTypes.DataTypes.LongInteger),
In_MilestoneId: OS.DataConversion.ServerDataConverter.asString(model.variables.in_MilestoneIdIn, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tPfi5oEFpkyL3Z+0YFGBVQ", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", OS.BuiltinFunctions.integerToIdentifier(3), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sXRVsPlkKECVjAsCA5ZxgQ", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CigyeWCsRE+GoEckUykfVA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitEventsFlow.TransportDetail.OnHandle_ContactHelpdesk$vars", [{
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Ygt_FkINdUG67q4yzyUnlg:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.Ygt_FkINdUG67q4yzyUnlg:D0a0tQgMguSA+ek9Vxu7Mg", "UBTConnect", "TransportDetail", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ygt_FkINdUG67q4yzyUnlg", callContext.id);
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

define("UBTConnect.Legacy_OrbitEventsFlow.TransportDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"cjD2YIONVEC8jNnlS+9QNw": {
getter: function (varBag, idService) {
return varBag.vars.value.subjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yzj5GXOVAECI1KLdH96lRA": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b_1_r8C0h0KD_i51Lf+ebQ": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"6mzkUNUX3kSqzqUmUtroPA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"abyOGJyHZkmw4Zb2Zjrfkg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitMilestoneTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GbaMpLGvc0KDjIjAaECoIw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PDPD9EN8w0SbIzFneea9jQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HeaderClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oHISY7EzpkGZLQ5Zv4BOCw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TargetMemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"20C3Q8o7aEGot6DxABqeCg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"1Xl2KArT+0yzR04ev1+JwQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
