define("UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBT_AppManager.controller", "NavigationHandler.controller", "UBTConnect.App_Common.OfflineDataSyncEvents.mvc$model", "UBTConnect.App_PIN.Block_PINUnlock.mvc$model", "UBTConnect.App_Policies.Policy_Checker.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$model", "UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$model", "Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$model", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBT_AppManager", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler"], function (OutSystems, UBTConnectModel, UBT_AppManagerController, NavigationHandlerController, UBTConnect_App_Common_OfflineDataSyncEvents_mvcModel, UBTConnect_App_PIN_Block_PINUnlock_mvcModel, UBTConnect_App_Policies_Policy_Checker_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvcModel, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvcModel, Connect2_LegacyShared_Utility_HandleImageLoadError_mvcModel, NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("HideLockScreen", "hideLockScreenVar", "HideLockScreen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsNavigateToHomeOnBack", "isNavigateToHomeOnBackVar", "IsNavigateToHomeOnBack", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_ShowLockScreen", "in_ShowLockScreenIn", "In_ShowLockScreen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ShowLockScreenInDataFetchStatus", "_in_ShowLockScreenInDataFetchStatus", "_in_ShowLockScreenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IgnorePolicy", "in_IgnorePolicyIn", "In_IgnorePolicy", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IgnorePolicyInDataFetchStatus", "_in_IgnorePolicyInDataFetchStatus", "_in_IgnorePolicyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IgnoreLockScreen", "in_IgnoreLockScreenIn", "In_IgnoreLockScreen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IgnoreLockScreenInDataFetchStatus", "_in_IgnoreLockScreenInDataFetchStatus", "_in_IgnoreLockScreenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((((UBTConnect_App_Common_OfflineDataSyncEvents_mvcModel.hasValidationWidgets || UBTConnect_App_PIN_Block_PINUnlock_mvcModel.hasValidationWidgets) || UBTConnect_App_Policies_Policy_Checker_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvcModel.hasValidationWidgets) || UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Utility_HandleImageLoadError_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_ShowLockScreen" in inputs) {
this.variables.in_ShowLockScreenIn = inputs.In_ShowLockScreen;
if("_in_ShowLockScreenInDataFetchStatus" in inputs) {
this.variables._in_ShowLockScreenInDataFetchStatus = inputs._in_ShowLockScreenInDataFetchStatus;
}

}

if("In_IgnorePolicy" in inputs) {
this.variables.in_IgnorePolicyIn = inputs.In_IgnorePolicy;
if("_in_IgnorePolicyInDataFetchStatus" in inputs) {
this.variables._in_IgnorePolicyInDataFetchStatus = inputs._in_IgnorePolicyInDataFetchStatus;
}

}

if("In_IgnoreLockScreen" in inputs) {
this.variables.in_IgnoreLockScreenIn = inputs.In_IgnoreLockScreen;
if("_in_IgnoreLockScreenInDataFetchStatus" in inputs) {
this.variables._in_IgnoreLockScreenInDataFetchStatus = inputs._in_IgnoreLockScreenInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Common.CommonUI_InsideLayout");
});
define("UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBT_AppManager.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.OfflineDataSyncEvents.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_PIN.Block_PINUnlock.mvc$view", "UBTConnect.App_Policies.Policy_Checker.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$view", "UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$view", "Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$view", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBT_AppManager", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler"], function (OutSystems, UBTConnectModel, UBTConnectController, UBT_AppManagerController, NavigationHandlerController, React, OSView, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_model, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_OfflineDataSyncEvents_mvc_view, OSWidgets, UBTConnect_App_PIN_Block_PINUnlock_mvc_view, UBTConnect_App_Policies_Policy_Checker_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_view, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_view, Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "App_Common.CommonUI_InsideLayout";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/CommonPlugin.PluginManager.js"];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_OfflineDataSyncEvents_mvc_view, UBTConnect_App_PIN_Block_PINUnlock_mvc_view, UBTConnect_App_Policies_Policy_Checker_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_view, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_view, Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Common_CommonUI_InsideLayout_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Common_CommonUI_InsideLayout_mvc_controller;
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
return [React.createElement(UBTConnect_App_Common_OfflineDataSyncEvents_mvc_view, {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if((model.variables.hideLockScreenVar || model.variables.in_IgnoreLockScreenIn), false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnect_App_PIN_Block_PINUnlock_mvc_view, {
inputs: {
In_ForceVisible: model.variables.in_ShowLockScreenIn,
_in_ForceVisibleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShowLockScreenInDataFetchStatus),
In_IsCommonBlock: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
unlock$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_PIN/Block_PINUnlock Unlock");
controller.onPinUnlock_HideLockScreen$Action(controller.callContext(eventHandlerContext));
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
placeholders: {
placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty
},
_dependencies: []
})];
}), $if((!(model.variables.in_IgnorePolicyIn) && UBTConnectClientVariables.getApp_Policies_HasPolicyToAccept()), false, this, function () {
return [React.createElement(UBTConnect_App_Policies_Policy_Checker_mvc_view, {
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
})];
}, function () {
return [];
}), React.createElement(UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_view, {
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_view, {
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_view, {
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
uuid: "5",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(model.variables.isNavigateToHomeOnBackVar, false, this, function () {
return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigationPrevented$Action: function (backNavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/PreventBackNavigation BackNavigationPrevented");
controller.onBackNavigation_RedirectHome$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "6",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
inputs: {
Priority: -10000
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigation$Action: function (backNavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
controller.onBackNavigation_MaybeRedirectHome$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "7",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBT_AppManager.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$debugger", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.ScreenEvent_OnInitialize.IsRestoredFromCacheJS", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.OnBackNavigation_MaybeRedirectHome.GetIsInitialLocationJS", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.OnBackNavigation_MaybeRedirectHome.JavaScript1JS", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBT_AppManager", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler"], function (OutSystems, UBTConnectModel, UBTConnectController, UBT_AppManagerController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_Debugger, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_controller_ScreenEvent_OnInitialize_IsRestoredFromCacheJS, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_controller_OnBackNavigation_MaybeRedirectHome_GetIsInitialLocationJS, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_controller_OnBackNavigation_MaybeRedirectHome_JavaScript1JS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
action_RedirectHome$Action: function () {
return controller.executeActionInsideJSNode(controller._action_RedirectHome$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_RedirectHome");
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
Controller.prototype._onBackNavigation_RedirectHome$Action = function (backNavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnBackNavigation_RedirectHome");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Common.CommonUI_InsideLayout.OnBackNavigation_RedirectHome$vars"))());
vars.value.backNavigationEventInLocal = backNavigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7p9UK9034EmpbEKa3RZlsA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ebV9Nd9Yr0KEjkkJ61qMEA/ClientActions.7p9UK9034EmpbEKa3RZlsA:svB3MrNLaWFYR7YJ6b4ecQ", "UBTConnect", "OnBackNavigation_RedirectHome", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KqlHsWx1fU+hN8kGVHWDwQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WyH1LSXxIUmPutjalMgo1g", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromLeft), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7p9UK9034EmpbEKa3RZlsA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Common.CommonUI_InsideLayout.OnBackNavigation_RedirectHome$vars", [{
name: "BackNavigationEvent",
attrName: "backNavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._action_RedirectHome$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_RedirectHome");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:6kWeNPdkf0e0IhYr3dV7dw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ebV9Nd9Yr0KEjkkJ61qMEA/ClientActions.6kWeNPdkf0e0IhYr3dV7dw:nMjpaCEO+842+JKtC3EfiA", "UBTConnect", "Action_RedirectHome", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xuSjTFWBmEau6iQCC8tggw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3HtXEEGIDEmtZD4d_Sihgw", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:6kWeNPdkf0e0IhYr3dV7dw", callContext.id);
}

};
Controller.prototype._onPinUnlock_HideLockScreen$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnPinUnlock_HideLockScreen");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kLBSjWFvc0invtkH+0jSOQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ebV9Nd9Yr0KEjkkJ61qMEA/ClientActions.kLBSjWFvc0invtkH+0jSOQ:SXy0ScX7Ypwd05oTLgh0Zw", "UBTConnect", "OnPinUnlock_HideLockScreen", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lkiy7M9BQkueqy8pVO7z_g", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pQ7ZWdM9V06XmGHzSy5LoQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kLBSjWFvc0invtkH+0jSOQ", callContext.id);
}

};
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
var pIN_CheckVar = new OS.DataTypes.VariableHolder();
var isRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.pIN_CheckVar = pIN_CheckVar;
varBag.isRestoredFromCacheJSResult = isRestoredFromCacheJSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ZPdv68wWeEi3RVRxf0iKjw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ebV9Nd9Yr0KEjkkJ61qMEA/ClientActions.ZPdv68wWeEi3RVRxf0iKjw:cnkt06OiYsLSz6f6CGoRqw", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UPk11U0USkuIVNhIjmG4Cg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B3KStve9CES6UMfHyjd_aw", callContext.id);
isRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_controller_ScreenEvent_OnInitialize_IsRestoredFromCacheJS, "IsRestoredFromCache", "ScreenEvent_OnInitialize", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.App_Common.CommonUI_InsideLayout.ScreenEvent_OnInitialize$isRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LDdAPZILX0O_5nJPDeSPgw", callContext.id) && !(isRestoredFromCacheJSResult.value.isRestoredFromCacheOut))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t0dUpW6bAEym90tjwT7dbQ", callContext.id);
// IsNavigateToHomeOnBack = IsNavigateToHomeOnBack
model.variables.isNavigateToHomeOnBackVar = UBTConnectClientVariables.getIsNavigateToHomeOnBack();
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t0dUpW6bAEym90tjwT7dbQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsNavigateToHomeOnBack = False
UBTConnectClientVariables.setIsNavigateToHomeOnBack(false);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W2ou4d1NG0OFtV740r1_XA", callContext.id);
// Execute Action: PIN_Check
pIN_CheckVar.value = UBT_AppManagerController.default.pIN_Check$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:olvewWM4yk+idXRbEPMePg", callContext.id);
// HideLockScreen = GetUserId = NullIdentifier or In_IgnoreLockScreen or PIN_Check.NeedRegister
model.variables.hideLockScreenVar = (((OS.BuiltinFunctions.getUserId() === OS.BuiltinFunctions.nullIdentifier()) || model.variables.in_IgnoreLockScreenIn) || pIN_CheckVar.value.needRegisterOut);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nJ132J0NJka4WLLwX3vREw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ZPdv68wWeEi3RVRxf0iKjw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Common.CommonUI_InsideLayout.ScreenEvent_OnInitialize$isRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onBackNavigation_MaybeRedirectHome$Action = function (backNavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnBackNavigation_MaybeRedirectHome");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Common.CommonUI_InsideLayout.OnBackNavigation_MaybeRedirectHome$vars"))());
vars.value.backNavigationEventInLocal = backNavigationEventIn;
var getIsInitialLocationJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getIsInitialLocationJSResult = getIsInitialLocationJSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Q+Nt+7YaRkiHV19Gvu1gtw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ebV9Nd9Yr0KEjkkJ61qMEA/ClientActions.Q+Nt+7YaRkiHV19Gvu1gtw:p6Ljfx4n1wlSjsbsvGr7ag", "UBTConnect", "OnBackNavigation_MaybeRedirectHome", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GKrfsrYo0EabZvCCJtUwsg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4qdOApEV60qnmvpM9wre2w", callContext.id);
getIsInitialLocationJSResult.value = controller.safeExecuteJSNode(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_controller_OnBackNavigation_MaybeRedirectHome_GetIsInitialLocationJS, "GetIsInitialLocation", "OnBackNavigation_MaybeRedirectHome", {
NavigationObject: OS.DataConversion.JSNodeParamConverter.to(vars.value.backNavigationEventInLocal, OS.DataTypes.DataTypes.Object),
IsInitialLocation: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.App_Common.CommonUI_InsideLayout.OnBackNavigation_MaybeRedirectHome$getIsInitialLocationJSResult"))();
jsNodeResult.isInitialLocationOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsInitialLocation, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tUkr6KiiEUeTu4rTdVF+sw", callContext.id) && getIsInitialLocationJSResult.value.isInitialLocationOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C88199rWC0OXc5p2hGA6qA", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BASum0vhj0GIoeP6C0zLhA", callContext.id);
controller.safeExecuteJSNode(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_controller_OnBackNavigation_MaybeRedirectHome_JavaScript1JS, "JavaScript1", "OnBackNavigation_MaybeRedirectHome", null, function ($parameters) {
}, {
Action_RedirectHome: controller.clientActionProxies.action_RedirectHome$Action
}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QmPJECqQNUikgmTeymxNtw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SDh9a2mgakyz6xPrmGrJOA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Q+Nt+7YaRkiHV19Gvu1gtw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Common.CommonUI_InsideLayout.OnBackNavigation_MaybeRedirectHome$vars", [{
name: "BackNavigationEvent",
attrName: "backNavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.registerVariableGroupType("UBTConnect.App_Common.CommonUI_InsideLayout.OnBackNavigation_MaybeRedirectHome$getIsInitialLocationJSResult", [{
name: "IsInitialLocation",
attrName: "isInitialLocationOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.onBackNavigation_RedirectHome$Action = function (backNavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onBackNavigation_RedirectHome$Action, callContext, backNavigationEventIn);

};
Controller.prototype.action_RedirectHome$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_RedirectHome$Action, callContext);

};
Controller.prototype.onPinUnlock_HideLockScreen$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onPinUnlock_HideLockScreen$Action, callContext);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.onBackNavigation_MaybeRedirectHome$Action = function (backNavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onBackNavigation_MaybeRedirectHome$Action, callContext, backNavigationEventIn);

};
Controller.prototype.event_OnScreenLocked$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_OnScreenUnlocked$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:mJCG955vpb2MtUitKU2aNA", "UBTConnect", "App_Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ebV9Nd9Yr0KEjkkJ61qMEA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ebV9Nd9Yr0KEjkkJ61qMEA:8RS1hbbhhrXaLn8LiS6bOg", "UBTConnect", "CommonUI_InsideLayout", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ebV9Nd9Yr0KEjkkJ61qMEA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_Common/CommonUI_InsideLayout On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.ScreenEvent_OnInitialize.IsRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});
define("UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.OnBackNavigation_MaybeRedirectHome.GetIsInitialLocationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsInitialLocation = $parameters.NavigationObject.detail.isInitialLocation()
};
});
define("UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller.OnBackNavigation_MaybeRedirectHome.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
window.setTimeout($actions.Action_RedirectHome,0)
};
});

define("UBTConnect.App_Common.CommonUI_InsideLayout.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"8j2JKk7xSECbRFdy33I_jA": {
getter: function (varBag, idService) {
return varBag.vars.value.backNavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"W2ou4d1NG0OFtV740r1_XA": {
getter: function (varBag, idService) {
return varBag.pIN_CheckVar.value;
}
},
"B3KStve9CES6UMfHyjd_aw": {
getter: function (varBag, idService) {
return varBag.isRestoredFromCacheJSResult.value;
}
},
"kr1T08OXZEClAw+7b0oBQg": {
getter: function (varBag, idService) {
return varBag.vars.value.backNavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"4qdOApEV60qnmvpM9wre2w": {
getter: function (varBag, idService) {
return varBag.getIsInitialLocationJSResult.value;
}
},
"BASum0vhj0GIoeP6C0zLhA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"8TyEpgGynEyeI1yy8DZ4vg": {
getter: function (varBag, idService) {
return varBag.model.variables.hideLockScreenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"dCjWcP_2kUyQnJ4u8x2NSw": {
getter: function (varBag, idService) {
return varBag.model.variables.isNavigateToHomeOnBackVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"okopXiVCSU+XEX05juesiw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShowLockScreenIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6RFIoJUH8UOVzw1k+m3LqA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IgnorePolicyIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xe0I12eQGUuUmxLTHwR08w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IgnoreLockScreenIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"t8PkFCp+VkmMoLGO4HQsZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideLockScreen2"));
})(varBag.model, idService);
}
},
"TjwU2l4dHEaRnLMWkQ5r9w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
},
"mU_fY1k8Ok+dqwZ1EHnqkA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CheckPolicies"));
})(varBag.model, idService);
}
},
"hlumKuypPUi7i3A09MLbgg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNavigateToHomeOnBack"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
