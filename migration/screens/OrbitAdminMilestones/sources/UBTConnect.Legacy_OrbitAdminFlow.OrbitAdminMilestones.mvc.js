define("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model"], function (OutSystems, UBTConnectModel, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdIn", "EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvcModel.hasValidationWidgets || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("EventId" in inputs) {
this.variables.eventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.EventId, OS.DataTypes.DataTypes.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_OrbitAdminFlow.OrbitAdminMilestones");
});
define("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones.mvc$model", "UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view"], function (OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Legacy_OrbitAdminFlow_OrbitAdminMilestones_mvc_model, UBTConnect_Legacy_OrbitAdminFlow_OrbitAdminMilestones_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvc_view, OSWidgets, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_OrbitAdminFlow.OrbitAdminMilestones";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitAdminFlow_OrbitAdminMilestones_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitAdminFlow_OrbitAdminMilestones_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "OrbitAdminMilestones";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvc_view, {
inputs: {
EventId: model.variables.eventIdIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_MilestoneDetail$Action: function (event_EventIdIn, event_MilestoneIdIn, event_MilestoneNameIn, event_MilestoneDateIn, event_MilestoneDescriptionIn, event_MilestoneStartDateIn, event_MilestoneEndDateIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestones NavigateTo_MilestoneDetail");
return controller.handler_NavigateToMilestoneDetail$Action(event_EventIdIn, event_MilestoneIdIn, event_MilestoneNameIn, event_MilestoneDateIn, event_MilestoneDescriptionIn, event_MilestoneStartDateIn, event_MilestoneEndDateIn, controller.callContext(eventHandlerContext));
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
define("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones.mvc$debugger", "UBTConnect.Legacy_OrbitAdminFlow.controller"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_OrbitAdminFlow_OrbitAdminMilestones_mvc_Debugger, _flow_UBTConnect_Legacy_OrbitAdminFlowController) {
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
Controller.prototype.getMilestoneScanFF$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("GetMilestoneScanFF", "screenservices/UBTConnect/Legacy_OrbitAdminFlow/OrbitAdminMilestones/ActionGetMilestoneScanFF", "RhHkPTAzICMbFC9uDxQotA", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones$rssespaceconnect2_orbitmobile_bl_ActionGetMilestoneScanFF"))();
executeServerActionResult.isScanPerMilestoneOut = OS.DataConversion.ServerDataConverter.from(outputs.IsScanPerMilestone, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones$rssespaceconnect2_orbitmobile_bl_ActionGetMilestoneScanFF", [{
name: "IsScanPerMilestone",
attrName: "isScanPerMilestoneOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._handler_NavigateToMilestoneDetail$Action = function (event_EventIdIn, event_MilestoneIdIn, event_MilestoneNameIn, event_MilestoneDateIn, event_MilestoneDescriptionIn, event_MilestoneStartDateIn, event_MilestoneEndDateIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateToMilestoneDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones.Handler_NavigateToMilestoneDetail$vars"))());
vars.value.event_EventIdInLocal = event_EventIdIn;
vars.value.event_MilestoneIdInLocal = event_MilestoneIdIn;
vars.value.event_MilestoneNameInLocal = event_MilestoneNameIn;
vars.value.event_MilestoneDateInLocal = event_MilestoneDateIn;
vars.value.event_MilestoneDescriptionInLocal = event_MilestoneDescriptionIn;
vars.value.event_MilestoneStartDateInLocal = event_MilestoneStartDateIn;
vars.value.event_MilestoneEndDateInLocal = event_MilestoneEndDateIn;
var getMilestoneScanFFVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getMilestoneScanFFVar = getMilestoneScanFFVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:tgBXmJTy_EaphQeJN7eSMQ:/NRWebFlows.l2seXCPsqkCFoRS4srVaoA/NodesShownInESpaceTree.3ubom7biM0OkIZPQZL45PQ/ClientActions.tgBXmJTy_EaphQeJN7eSMQ:An1iNKedk23XEuySHP6vCA", "UBTConnect", "Handler_NavigateToMilestoneDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:336LIvowGEagPy8Ot4XN4g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pnQak_fitEKfobF8IpZRDQ", callContext.id);
// Execute Action: GetMilestoneScanFF
model.flush();
return controller.getMilestoneScanFF$ServerAction(callContext).then(function (value) {
getMilestoneScanFFVar.value = value;
}).then(function () {
// Has Scan Milestone?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sFgVrMjw7k+hY6XLtBZmSw", callContext.id) && getMilestoneScanFFVar.value.isScanPerMilestoneOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eCrZZOMs_UGrOHkyJdZANA", callContext.id);
// Destination: /UBTConnect/OrbitAdminMilestoneDetail
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OrbitAdminMilestoneDetail", {
In_MilestoneDate: OS.DataConversion.ServerDataConverter.asString(vars.value.event_MilestoneDateInLocal, OS.DataTypes.DataTypes.DateTime),
In_MilestoneEndDate: OS.DataConversion.ServerDataConverter.asString(vars.value.event_MilestoneEndDateInLocal, OS.DataTypes.DataTypes.DateTime),
In_MilestoneName: OS.DataConversion.ServerDataConverter.asString(vars.value.event_MilestoneNameInLocal, OS.DataTypes.DataTypes.Text),
In_MilestoneId: OS.DataConversion.ServerDataConverter.asString(vars.value.event_MilestoneIdInLocal, OS.DataTypes.DataTypes.Text),
In_MilestoneDescription: OS.DataConversion.ServerDataConverter.asString(vars.value.event_MilestoneDescriptionInLocal, OS.DataTypes.DataTypes.Text),
In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.event_EventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_MilestoneStartDate: OS.DataConversion.ServerDataConverter.asString(vars.value.event_MilestoneStartDateInLocal, OS.DataTypes.DataTypes.DateTime)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+DfyiFfiEES9bytJYOvB5A", callContext.id);
// Destination: /UBTConnect/OrbitAdminLanding
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OrbitAdminLanding", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tgBXmJTy_EaphQeJN7eSMQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tgBXmJTy_EaphQeJN7eSMQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones.Handler_NavigateToMilestoneDetail$vars", [{
name: "Event_EventId",
attrName: "event_EventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Event_MilestoneId",
attrName: "event_MilestoneIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_MilestoneName",
attrName: "event_MilestoneNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_MilestoneDate",
attrName: "event_MilestoneDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Event_MilestoneDescription",
attrName: "event_MilestoneDescriptionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_MilestoneStartDate",
attrName: "event_MilestoneStartDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Event_MilestoneEndDate",
attrName: "event_MilestoneEndDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);

Controller.prototype.handler_NavigateToMilestoneDetail$Action = function (event_EventIdIn, event_MilestoneIdIn, event_MilestoneNameIn, event_MilestoneDateIn, event_MilestoneDescriptionIn, event_MilestoneStartDateIn, event_MilestoneEndDateIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateToMilestoneDetail$Action, callContext, event_EventIdIn, event_MilestoneIdIn, event_MilestoneNameIn, event_MilestoneDateIn, event_MilestoneDescriptionIn, event_MilestoneStartDateIn, event_MilestoneEndDateIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:l2seXCPsqkCFoRS4srVaoA:/NRWebFlows.l2seXCPsqkCFoRS4srVaoA:IJTHxTq2efeIY+cwJMaY5g", "UBTConnect", "Legacy_OrbitAdminFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3ubom7biM0OkIZPQZL45PQ:/NRWebFlows.l2seXCPsqkCFoRS4srVaoA/NodesShownInESpaceTree.3ubom7biM0OkIZPQZL45PQ:dCvXSqBleoPJkoby7Y_uEQ", "UBTConnect", "OrbitAdminMilestones", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3ubom7biM0OkIZPQZL45PQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:l2seXCPsqkCFoRS4srVaoA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_Legacy_OrbitAdminFlowController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"QMWOdWikb02KDXM6DVTOAQ": {
getter: function (varBag, idService) {
return varBag.vars.value.event_EventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"mCWifx36gEaWr6KNvxOLIA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MilestoneIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"M_uoxSX3NE+rl9SziS1N_A": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MilestoneNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BkmdFUma0kqbJHtD5c2mDw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MilestoneDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"2W0uepKgHUSP3qx6nmUPmg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MilestoneDescriptionInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"I3Yd3JrlQEmpXbWLkVH4ng": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MilestoneStartDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"qmhKFSGVPE6We5CRbUhTmg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MilestoneEndDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"pnQak_fitEKfobF8IpZRDQ": {
getter: function (varBag, idService) {
return varBag.getMilestoneScanFFVar.value;
}
},
"u0YKfZ4gN0WyzGMOuhEYnA": {
getter: function (varBag, idService) {
return varBag.model.variables.eventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"1UG9Wzjz1EiQf9gNhKLo_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"JPYLO725p0aF_D1H6yz8mw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"ZUEHzg+7XEW5BRBlJJ_iTQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
