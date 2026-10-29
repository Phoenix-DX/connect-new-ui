define("UBTConnect.App_Common.Splash.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.controller", "UBTConnect.controller", "UBTConnect.App_Common.LayoutBlank.mvc$model", "UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$model", "OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$model", "UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$model", "NavigationHandler.NavigationHandler.NavigationHandler.mvc$model", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.controller$Set_InitialClientVariables", "UBTConnect.controller$GetColdStartLinkURL", "UBTConnect.controller$SetResumeLoginLink"], function (OutSystems, UBTConnectModel, NavigationHandlerController, UBTJavaScriptUtilsController, UBT_AppManagerController, UBTConnectController, UBTConnect_App_Common_LayoutBlank_mvcModel, UBTConnectLibrary_ConnectPatterns_LoadingDots_mvcModel, OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvcModel, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvcModel, NavigationHandler_NavigationHandler_NavigationHandler_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Percentage", "percentageVar", "Percentage", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("TriggerAnimation", "triggerAnimationVar", "TriggerAnimation", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("NavigationObject", "navigationObjectVar", "NavigationObject", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
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
Model._hasValidationWidgetsValue = ((((UBTConnect_App_Common_LayoutBlank_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_LoadingDots_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvcModel.hasValidationWidgets) || UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_NavigationHandler_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Common.Splash");
});
define("UBTConnect.App_Common.Splash.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common.Splash.mvc$model", "UBTConnect.App_Common.Splash.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.LayoutBlank.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$view", "OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc$view", "UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$view", "NavigationHandler.NavigationHandler.NavigationHandler.mvc$view", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.controller$Set_InitialClientVariables", "UBTConnect.controller$GetColdStartLinkURL", "UBTConnect.controller$SetResumeLoginLink"], function (OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTJavaScriptUtilsController, UBT_AppManagerController, React, OSView, UBTConnect_App_Common_Splash_mvc_model, UBTConnect_App_Common_Splash_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_LayoutBlank_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_view, OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_view, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_view, NavigationHandler_NavigationHandler_NavigationHandler_mvc_view) {
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
        View.displayName = "App_Common.Splash";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_LayoutBlank_mvc_view, UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_view, OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_view, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_view, NavigationHandler_NavigationHandler_NavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Common_Splash_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Common_Splash_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Splash";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_Common_LayoutBlank_mvc_view, {
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
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_view, {
inputs: {
isTriggerAnimation: model.variables.triggerAnimationVar,
In_FinalCurvaturePercentage: UBTConnectClientVariables.getApp_PIN_Header_FinalHeightPercentage(),
In_Header_FinalHeightPercentage: UBTConnectClientVariables.getApp_PIN_Header_FinalHeightPercentage()
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
animationComplete$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/LoadingDots AnimationComplete");
return controller.loadingDotsAnimationComplete$Action(controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(false, false, this, function () {
return [];
}, function () {
return [];
}), React.createElement(OutSystemsUI_2_23_Private_ApplicationLoadEvents_mvc_view, {
inputs: {
MinimumDisplayTimeMs: 1500
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onUpgradeProgress$Action: function (completedIn, totalIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/ApplicationLoadEvents OnUpgradeProgress");
controller.onUpgradeProgress$Action(completedIn, totalIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onLoadComplete$Action: function (redirectURLIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/ApplicationLoadEvents OnLoadComplete");
controller.onLoadComplete$Action(redirectURLIn, controller.callContext(eventHandlerContext));
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_view, {
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
})];
})];
})
},
_dependencies: [asPrimitiveValue(UBTConnectClientVariables.getApp_PIN_Header_FinalHeightPercentage()), asPrimitiveValue(model.variables.triggerAnimationVar)]
}), React.createElement(NavigationHandler_NavigationHandler_NavigationHandler_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigation$Action: function (navigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/NavigationHandler Navigation");
controller.handler_OnNavigation$Action(navigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.App_Common.Splash.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common.Splash.mvc$debugger", "UBTConnect.App_Common.controller", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.controller$Set_InitialClientVariables", "UBTConnect.controller$GetColdStartLinkURL", "UBTConnect.controller$SetResumeLoginLink"], function (OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTJavaScriptUtilsController, UBT_AppManagerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_Splash_mvc_Debugger, _flow_UBTConnect_App_CommonController) {
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
Controller.prototype._handler_OnNavigation$Action = function (navigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Common.Splash.Handler_OnNavigation$vars"))());
vars.value.navigationEventInLocal = navigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:aoUgMwVlE0KwGBU2oEVnlg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ipnUTjveqEuny0Bjz5FzMA/ClientActions.aoUgMwVlE0KwGBU2oEVnlg:Z0Hjx2GnoYQuRgw7CsvD2Q", "UBTConnect", "Handler_OnNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UC7fLsKHkkKC3N1OU017kw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:65i+1+E670+A9+xSCU8yNw", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.navigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NPKtKgsOYUK1d1zAbu1P7A", callContext.id);
// NavigationObject = NavigationEvent
model.variables.navigationObjectVar = vars.value.navigationEventInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TVCb1o8m3EK2Qd6DNH7cQw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:aoUgMwVlE0KwGBU2oEVnlg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Common.Splash.Handler_OnNavigation$vars", [{
name: "NavigationEvent",
attrName: "navigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onUpgradeProgress$Action = function (completedIn, totalIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnUpgradeProgress");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Common.Splash.OnUpgradeProgress$vars"))());
vars.value.completedInLocal = completedIn;
vars.value.totalInLocal = totalIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rR2ENs7Pg0GLpTei0fwhcA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ipnUTjveqEuny0Bjz5FzMA/ClientActions.rR2ENs7Pg0GLpTei0fwhcA:nks4wwT+UaVALgYY+_vyyw", "UBTConnect", "OnUpgradeProgress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0oDk3NNBnECd1uLh8G5eyg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AHsYrAg7ZUiNAqg_UH0eVw", callContext.id);
// Percentage = Completed / Total * 150
model.variables.percentageVar = OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(vars.value.completedInLocal).div(OS.BuiltinFunctions.integerToDecimal(vars.value.totalInLocal)).times(OS.BuiltinFunctions.integerToDecimal(150))));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vmEjnVwmqEuaVsYGtt1z5w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rR2ENs7Pg0GLpTei0fwhcA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Common.Splash.OnUpgradeProgress$vars", [{
name: "Completed",
attrName: "completedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Total",
attrName: "totalInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onLoadComplete$Action = function (in_RedirectURLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnLoadComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Common.Splash.OnLoadComplete$vars"))());
vars.value.in_RedirectURLInLocal = in_RedirectURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Ug+mhQ43QkqZdhcDp0AxDA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ipnUTjveqEuny0Bjz5FzMA/ClientActions.Ug+mhQ43QkqZdhcDp0AxDA:lYKglelhnV+GXxC1zu1CQw", "UBTConnect", "OnLoadComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dd56lYn0Y0SdP39aUcSt0A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pocAMmEaiE6ZrZFKfiXGDg", callContext.id);
// TriggerAnimation = True
model.variables.triggerAnimationVar = true;
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X7XFtcmqV0OsMimNp2qIUw", callContext.id) && (((model.variables.navigationObjectVar) !== (OS.BuiltinFunctions.nullObject())) && ((UBTConnectClientVariables.getLastURL()) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VNh1T36Rp0avT2Wf2OdsuQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qeE_6Tv+EkSoz1yAmMVn9w", callContext.id);
// LastURL = In_RedirectURL
UBTConnectClientVariables.setLastURL(vars.value.in_RedirectURLInLocal);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9gAHcPIsGEK5nvBYPk69eg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ug+mhQ43QkqZdhcDp0AxDA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Common.Splash.OnLoadComplete$vars", [{
name: "In_RedirectURL",
attrName: "in_RedirectURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._loadingDotsAnimationComplete$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("LoadingDotsAnimationComplete");
callContext = controller.callContext(callContext);
var pIN_CheckVar = new OS.DataTypes.VariableHolder();
var getColdStartLinkURLVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.pIN_CheckVar = pIN_CheckVar;
varBag.getColdStartLinkURLVar = getColdStartLinkURLVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:I6Bor5HFW0ai1u8gsWS2xw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ipnUTjveqEuny0Bjz5FzMA/ClientActions.I6Bor5HFW0ai1u8gsWS2xw:2+9lp7dG6gdELG5kLN_q4g", "UBTConnect", "LoadingDotsAnimationComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mQfCKrKZoEW41wf09ii3+Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ejB9bspvckWc_nwX7GyYaw", callContext.id);
// Execute Action: Set_InitialClientVariables
UBTConnectController.default.set_InitialClientVariables$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:omMLZtgFlEe_5LMW3rZy9w", callContext.id);
// Execute Action: PIN_Check
pIN_CheckVar.value = UBT_AppManagerController.default.pIN_Check$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:c8gJkcdkykqtNRgMDXlEAg", callContext.id);
// Execute Action: GetColdStartLinkURL
getColdStartLinkURLVar.value = UBTConnectController.default.getColdStartLinkURL$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D1aXHGliZUmhqfdiRXpgwQ", callContext.id);
// Execute Action: AllowUpcomingNavigation
NavigationHandlerController.default.allowUpcomingNavigation$Action(callContext);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WKe9d7yJZE6ZzQ0S_PANFw", callContext.id) && (((getColdStartLinkURLVar.value.uRLOut) !== ("")) && ((pIN_CheckVar.value.needRegisterOut || pIN_CheckVar.value.needUnlockOut) || (OS.BuiltinFunctions.getUserId() === OS.BuiltinFunctions.nullIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pPtasoUMlk2R8gfMKW6BOg", callContext.id);
// Execute Action: SetResumeLoginLink
UBTConnectController.default.setResumeLoginLink$Action(getColdStartLinkURLVar.value.uRLOut, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s5DosvvkQE2EedJX_j91Eg", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aozxQhphPkmzcPIwlKOaLQ", callContext.id) && pIN_CheckVar.value.needRegisterOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4fKNqvBia0mofh4sIJlkGw", callContext.id);
// Destination: /UBTConnect/PINRegister
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/PINRegister", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wuPPeRMLlEC6S9QSIGtqdg", callContext.id) && pIN_CheckVar.value.needUnlockOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kKg091fUKEqAwUw4j6N35Q", callContext.id);
// Destination: /UBTConnect/PINUnlock
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/PINUnlock", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

}

}

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sgG8px0jo0u8XSQISo4khg", callContext.id) && ((getColdStartLinkURLVar.value.uRLOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:i27+Yei0P0aWV5YlJiRvtQ", callContext.id);
// Execute Action: ScreenController_NavigateToPage_LastURL2
model.flush();
return UBTJavaScriptUtilsController.default.screenController_NavigateToPage$Action(getColdStartLinkURLVar.value.uRLOut, true, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UlFABnipiE+gjxFLmJmN2A", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tmgyqSaDBkSoxG4hb9ZpEQ", callContext.id);
// Execute Action: ScreenController_NavigateToPage_LastURL
model.flush();
return UBTJavaScriptUtilsController.default.screenController_NavigateToPage$Action(UBTConnectClientVariables.getLastURL(), true, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UlFABnipiE+gjxFLmJmN2A", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:I6Bor5HFW0ai1u8gsWS2xw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:I6Bor5HFW0ai1u8gsWS2xw", callContext.id);
throw ex;

});
};

Controller.prototype.handler_OnNavigation$Action = function (navigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnNavigation$Action, callContext, navigationEventIn);

};
Controller.prototype.onUpgradeProgress$Action = function (completedIn, totalIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onUpgradeProgress$Action, callContext, completedIn, totalIn);

};
Controller.prototype.onLoadComplete$Action = function (in_RedirectURLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onLoadComplete$Action, callContext, in_RedirectURLIn);

};
Controller.prototype.loadingDotsAnimationComplete$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._loadingDotsAnimationComplete$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:mJCG955vpb2MtUitKU2aNA", "UBTConnect", "App_Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ipnUTjveqEuny0Bjz5FzMA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ipnUTjveqEuny0Bjz5FzMA:SxpQSZ_DirnbJiv5kxoXSg", "UBTConnect", "Splash", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ipnUTjveqEuny0Bjz5FzMA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_App_CommonController.default.handleError(ex, this.callContext());
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

define("UBTConnect.App_Common.Splash.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"KdYPV+FlUUGjhc4RmSzzxQ": {
getter: function (varBag, idService) {
return varBag.vars.value.navigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"JZ7+KfE+mUujF7HDd+gyfg": {
getter: function (varBag, idService) {
return varBag.vars.value.completedInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"5n4ExuaQfU+HkpLhKS+dig": {
getter: function (varBag, idService) {
return varBag.vars.value.totalInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"_DoUNW2vbkO0pvK0QnFdXw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_RedirectURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"omMLZtgFlEe_5LMW3rZy9w": {
getter: function (varBag, idService) {
return varBag.pIN_CheckVar.value;
}
},
"c8gJkcdkykqtNRgMDXlEAg": {
getter: function (varBag, idService) {
return varBag.getColdStartLinkURLVar.value;
}
},
"7oHlsMajaky6MBEZq3v6lQ": {
getter: function (varBag, idService) {
return varBag.model.variables.percentageVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"TkwR59PL9EqACEhzErsJvg": {
getter: function (varBag, idService) {
return varBag.model.variables.triggerAnimationVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"clDCmauCikSHOrTAHPHc4w": {
getter: function (varBag, idService) {
return varBag.model.variables.navigationObjectVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"PK3bas26mkW8Qw_TcC3_kA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
