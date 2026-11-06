define("UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_AndroidAppLinksPlugin.model", "UBT_AppManager.controller", "Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$model", "EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$model", "UBTConnect.controller$GetURLFromEventDataURL", "Connect2_AndroidAppLinksPlugin.model$EventDataRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_AndroidAppLinksPlugin", "UBTConnect.controller$SetResumeLoginLink", "UBT_AppManager.controller$AppManager_GetPIN_IsLocked", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetPIN_HasUnlocked", "UBT_AppManager.controller$AppManager_GetPIN_IsRegistering", "UBT_AppManager.controller$PIN_Check", "UBT_AppManager.controller$AppManager_OnReadyChecker"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_AndroidAppLinksPluginModel, UBT_AppManagerController, Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvcModel, EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [].concat(_super.attributesToDeclare.call(this));
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
Model._hasValidationWidgetsValue = (Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvcModel.hasValidationWidgets || EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_Share.HandleOnResumeOpenLink");
});
define("UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_AndroidAppLinksPlugin.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$model", "UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$controller", "UBTConnect.clientVariables", "Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$view", "OutSystems/ReactWidgets/Main", "EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$view", "UBTConnect.controller$GetURLFromEventDataURL", "Connect2_AndroidAppLinksPlugin.model$EventDataRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_AndroidAppLinksPlugin", "UBTConnect.controller$SetResumeLoginLink", "UBT_AppManager.controller$AppManager_GetPIN_IsLocked", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetPIN_HasUnlocked", "UBT_AppManager.controller$AppManager_GetPIN_IsRegistering", "UBT_AppManager.controller$PIN_Check", "UBT_AppManager.controller$AppManager_OnReadyChecker"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_AndroidAppLinksPluginModel, UBT_AppManagerController, React, OSView, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_model, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_controller, UBTConnectClientVariables, Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_view, OSWidgets, EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_view) {
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
        View.displayName = "Legacy_Share.HandleOnResumeOpenLink";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_view, EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
resumeNavigation$Action: function (eventDataIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "AndroidAppLinks/AndroidAppLinkOnResumeHandler ResumeNavigation");
controller.androidAppLinkOnResumeHandlerResumeNavigation$Action(eventDataIn, controller.callContext(eventHandlerContext));
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
_dependencies: []
}), React.createElement(EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onDeeplinkOpen$Action: function (uRLIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "EventfulDeeplinksPlugin/DeeplinkHandlerCentral OnDeeplinkOpen");
controller.deeplinkHandlerCentralOnDeeplinkOpen$Action(uRLIn, controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_AndroidAppLinksPlugin.model", "UBT_AppManager.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$debugger", "UBTConnect.controller$GetURLFromEventDataURL", "Connect2_AndroidAppLinksPlugin.model$EventDataRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_AndroidAppLinksPlugin", "UBTConnect.controller$SetResumeLoginLink", "UBT_AppManager.controller$AppManager_GetPIN_IsLocked", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetPIN_HasUnlocked", "UBT_AppManager.controller$AppManager_GetPIN_IsRegistering", "UBT_AppManager.controller$PIN_Check", "UBT_AppManager.controller$AppManager_OnReadyChecker"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_AndroidAppLinksPluginModel, UBT_AppManagerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_Debugger) {
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
Controller.prototype._androidAppLinkOnResumeHandlerResumeNavigation$Action = function (eventDataIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AndroidAppLinkOnResumeHandlerResumeNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_Share.HandleOnResumeOpenLink.AndroidAppLinkOnResumeHandlerResumeNavigation$vars"))());
vars.value.eventDataInLocal = eventDataIn.clone();
var getURLFromEventDataURLVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getURLFromEventDataURLVar = getURLFromEventDataURLVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1nLmdqjdD0uVI_6cJQ_Qfg:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.mn0xEt_gc0CdTzJULj78Sg/ClientActions.1nLmdqjdD0uVI_6cJQ_Qfg:RX5Bp+qqUhGzOSSccuPcJg", "UBTConnect", "AndroidAppLinkOnResumeHandlerResumeNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9Bna3hOtJkGUhXvaGCIpDQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ussu5fECg0yWU4fsVAAJuw", callContext.id);
// Execute Action: GetURLFromEventDataURL
getURLFromEventDataURLVar.value = UBTConnectController.default.getURLFromEventDataURL$Action(vars.value.eventDataInLocal.uRLAttr, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qzDjCOP50EeRvlb5bfC5SA", callContext.id);
// Execute Action: Action_ProcessURL
controller._action_ProcessURL$Action(getURLFromEventDataURLVar.value.uRLOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VO7YKzI4Z0yE1nRfrFaXFA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1nLmdqjdD0uVI_6cJQ_Qfg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_Share.HandleOnResumeOpenLink.AndroidAppLinkOnResumeHandlerResumeNavigation$vars", [{
name: "EventData",
attrName: "eventDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_AndroidAppLinksPluginModel.EventDataRec();
},
complexType: Connect2_AndroidAppLinksPluginModel.EventDataRec
}]);
Controller.prototype._action_ProcessURL$Action = function (in_URLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_ProcessURL");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_Share.HandleOnResumeOpenLink.Action_ProcessURL$vars"))());
vars.value.in_URLInLocal = in_URLIn;
var appManager_GetPIN_IsLockedVar = new OS.DataTypes.VariableHolder();
var appManager_GetPIN_HasUnlockedVar = new OS.DataTypes.VariableHolder();
var appManager_GetPIN_IsRegisteringVar = new OS.DataTypes.VariableHolder();
var pIN_CheckVar = new OS.DataTypes.VariableHolder();
var appManager_OnReadyCheckerVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_GetPIN_IsLockedVar = appManager_GetPIN_IsLockedVar;
varBag.appManager_GetPIN_HasUnlockedVar = appManager_GetPIN_HasUnlockedVar;
varBag.appManager_GetPIN_IsRegisteringVar = appManager_GetPIN_IsRegisteringVar;
varBag.pIN_CheckVar = pIN_CheckVar;
varBag.appManager_OnReadyCheckerVar = appManager_OnReadyCheckerVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HYpL7mf2GkST1J3tmxl9QA:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.mn0xEt_gc0CdTzJULj78Sg/ClientActions.HYpL7mf2GkST1J3tmxl9QA:oOXvJbr3rVy2qgV2cxNixg", "UBTConnect", "Action_ProcessURL", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6f0Is6DMgki9xndZNY_gZQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y8uFrbaeBkSIwZaL0qLz7w", callContext.id);
// Execute Action: PIN_Check
pIN_CheckVar.value = UBT_AppManagerController.default.pIN_Check$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KBymi87nMk2CSmJrig2pfA", callContext.id);
// Execute Action: AppManager_GetPIN_HasUnlocked
appManager_GetPIN_HasUnlockedVar.value = UBT_AppManagerController.default.appManager_GetPIN_HasUnlocked$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VDtXVNbgk0ijZX5hA+zYjQ", callContext.id);
// Execute Action: AppManager_GetPIN_IsLocked
appManager_GetPIN_IsLockedVar.value = UBT_AppManagerController.default.appManager_GetPIN_IsLocked$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E54Pzn4hYEu1nges4H796w", callContext.id);
// Execute Action: AppManager_OnReadyChecker
appManager_OnReadyCheckerVar.value = UBT_AppManagerController.default.appManager_OnReadyChecker$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bZt6l9kWz025k4aZRQGiow", callContext.id);
// Execute Action: AppManager_GetPIN_IsRegistering
appManager_GetPIN_IsRegisteringVar.value = UBT_AppManagerController.default.appManager_GetPIN_IsRegistering$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gLgwmn1LwE65fFe7W7NUsg", callContext.id) && (((OS.BuiltinFunctions.getUserId() === OS.BuiltinFunctions.nullIdentifier()) || (pIN_CheckVar.value.needUnlockOut && ((!(appManager_GetPIN_HasUnlockedVar.value.hasUnlockedOut) || appManager_GetPIN_IsLockedVar.value.isLockedOut) || !(appManager_OnReadyCheckerVar.value.isReadyOut)))) || appManager_GetPIN_IsRegisteringVar.value.isRegisteringOut))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:okWAC1UsU06mZevp8eilag", callContext.id);
// Execute Action: SetResumeLoginLink
UBTConnectController.default.setResumeLoginLink$Action(vars.value.in_URLInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CpXOZtCSi02S_lwmK7lyNA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N2xOwK1Tl0SUYGwfTSrXAQ", callContext.id);
// Destination: /UBTConnect/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.in_URLInLocal, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HYpL7mf2GkST1J3tmxl9QA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_Share.HandleOnResumeOpenLink.Action_ProcessURL$vars", [{
name: "In_URL",
attrName: "in_URLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._deeplinkHandlerCentralOnDeeplinkOpen$Action = function (uRLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DeeplinkHandlerCentralOnDeeplinkOpen");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_Share.HandleOnResumeOpenLink.DeeplinkHandlerCentralOnDeeplinkOpen$vars"))());
vars.value.uRLInLocal = uRLIn;
var getURLFromEventDataURLVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getURLFromEventDataURLVar = getURLFromEventDataURLVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9QTR_IvT+0mNeD3+X9AomA:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.mn0xEt_gc0CdTzJULj78Sg/ClientActions.9QTR_IvT+0mNeD3+X9AomA:ZftnmsG8Ra39lrQQWM+4Ww", "UBTConnect", "DeeplinkHandlerCentralOnDeeplinkOpen", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1xf5jx23QEqpbjz5eBS5eg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9qvvRbBXGE+McWOByNzImw", callContext.id);
// Execute Action: GetURLFromEventDataURL
getURLFromEventDataURLVar.value = UBTConnectController.default.getURLFromEventDataURL$Action(vars.value.uRLInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ScKP9qYxcEO1h9krFKK1aA", callContext.id);
// URL = GetURLFromEventDataURL.URL
vars.value.uRLInLocal = getURLFromEventDataURLVar.value.uRLOut;
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZuiSdReF5keMtFeufe+xgQ", callContext.id) && ((OS.BuiltinFunctions.index(vars.value.uRLInLocal, "MessageDetail", 0, false, false) >= 0) || (OS.BuiltinFunctions.index(vars.value.uRLInLocal, "AssembleDetail", 0, false, false) >= 0)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zGJmLF0gV0yQfSLh24ORKg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Xdp2VlawOEGIpdvlGJ8C2w", callContext.id);
// Execute Action: Action_ProcessURL
controller._action_ProcessURL$Action(vars.value.uRLInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UVF0reA+HkWocwhQQjohdw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9QTR_IvT+0mNeD3+X9AomA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_Share.HandleOnResumeOpenLink.DeeplinkHandlerCentralOnDeeplinkOpen$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.androidAppLinkOnResumeHandlerResumeNavigation$Action = function (eventDataIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._androidAppLinkOnResumeHandlerResumeNavigation$Action, callContext, eventDataIn);

};
Controller.prototype.action_ProcessURL$Action = function (in_URLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_ProcessURL$Action, callContext, in_URLIn);

};
Controller.prototype.deeplinkHandlerCentralOnDeeplinkOpen$Action = function (uRLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._deeplinkHandlerCentralOnDeeplinkOpen$Action, callContext, uRLIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WLHP_h0dxkS_pTvB_M633w:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w:U8s54roxSenXYNTkqHtRYg", "UBTConnect", "Legacy_Share", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:mn0xEt_gc0CdTzJULj78Sg:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.mn0xEt_gc0CdTzJULj78Sg:dnYb5uMx_QpKjF0fe+kfPA", "UBTConnect", "HandleOnResumeOpenLink", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:mn0xEt_gc0CdTzJULj78Sg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WLHP_h0dxkS_pTvB_M633w", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"_M+4bRFjkkW7oRnjHPV6pg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventDataInLocal;
}
},
"ussu5fECg0yWU4fsVAAJuw": {
getter: function (varBag, idService) {
return varBag.getURLFromEventDataURLVar.value;
}
},
"2xkogusjlUWJwY_x7zWTtA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_URLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VDtXVNbgk0ijZX5hA+zYjQ": {
getter: function (varBag, idService) {
return varBag.appManager_GetPIN_IsLockedVar.value;
}
},
"KBymi87nMk2CSmJrig2pfA": {
getter: function (varBag, idService) {
return varBag.appManager_GetPIN_HasUnlockedVar.value;
}
},
"bZt6l9kWz025k4aZRQGiow": {
getter: function (varBag, idService) {
return varBag.appManager_GetPIN_IsRegisteringVar.value;
}
},
"y8uFrbaeBkSIwZaL0qLz7w": {
getter: function (varBag, idService) {
return varBag.pIN_CheckVar.value;
}
},
"E54Pzn4hYEu1nges4H796w": {
getter: function (varBag, idService) {
return varBag.appManager_OnReadyCheckerVar.value;
}
},
"xUNLPST_Y0GoFmRqkvhgnA": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9qvvRbBXGE+McWOByNzImw": {
getter: function (varBag, idService) {
return varBag.getURLFromEventDataURLVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
