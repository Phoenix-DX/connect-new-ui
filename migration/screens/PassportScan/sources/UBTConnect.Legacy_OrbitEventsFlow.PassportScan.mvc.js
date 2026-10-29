define("UBTConnect.Legacy_OrbitEventsFlow.PassportScan.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model"], function (OutSystems, UBTConnectModel, OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("TargetId", "targetIdIn", "TargetId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_targetIdInDataFetchStatus", "_targetIdInDataFetchStatus", "_targetIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("LoginMemberId", "loginMemberIdIn", "LoginMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_loginMemberIdInDataFetchStatus", "_loginMemberIdInDataFetchStatus", "_loginMemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvcModel.hasValidationWidgets || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("TargetId" in inputs) {
this.variables.targetIdIn = OS.DataConversion.ServerDataConverter.from(inputs.TargetId, OS.DataTypes.DataTypes.LongInteger);
}

if("LoginMemberId" in inputs) {
this.variables.loginMemberIdIn = OS.DataConversion.ServerDataConverter.from(inputs.LoginMemberId, OS.DataTypes.DataTypes.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_OrbitEventsFlow.PassportScan");
});
define("UBTConnect.Legacy_OrbitEventsFlow.PassportScan.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_OrbitEventsFlow.PassportScan.mvc$model", "UBTConnect.Legacy_OrbitEventsFlow.PassportScan.mvc$controller", "UBTConnect.clientVariables", "OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view"], function (OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Legacy_OrbitEventsFlow_PassportScan_mvc_model, UBTConnect_Legacy_OrbitEventsFlow_PassportScan_mvc_controller, UBTConnectClientVariables, OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_view, OSWidgets, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_OrbitEventsFlow.PassportScan";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_PassportScan_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_OrbitEventsFlow_PassportScan_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "PassportScan";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_view, {
inputs: {
TargetMemberId: model.variables.targetIdIn,
LoginMemberId: model.variables.loginMemberIdIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
close$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PassportScan/ScreenBlock_PassportScan Close");
controller.handler_OnClose$Action(controller.callContext(eventHandlerContext));
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
commonUI_Elements: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
})
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Legacy_OrbitEventsFlow.PassportScan.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_OrbitEventsFlow.PassportScan.mvc$debugger", "UBTConnect.Legacy_OrbitEventsFlow.controller"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_OrbitEventsFlow_PassportScan_mvc_Debugger, _flow_UBTConnect_Legacy_OrbitEventsFlowController) {
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
Controller.prototype._handler_OnClose$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnClose");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:azjk8Wz2j0iT4LWaMaZcyw:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.87jR0w_0wE66_nNYgiAdxA/ClientActions.azjk8Wz2j0iT4LWaMaZcyw:b9vv8ybSMfBYvYd2n6d6lg", "UBTConnect", "Handler_OnClose", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1h4nXtR+xE299WT8sXGC1g", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IfOh_Lkh4Eyunq5QIqxPEw", callContext.id);
// Destination: (PreviousScreen)
return OS.Navigation.navigateBack(null, callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:azjk8Wz2j0iT4LWaMaZcyw", callContext.id);
}

};

Controller.prototype.handler_OnClose$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnClose$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ETX542+jvkKT6PN6V5za9g:/NRWebFlows.ETX542+jvkKT6PN6V5za9g:8pcNe1EZJIP6giTtHUazkQ", "UBTConnect", "Legacy_OrbitEventsFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:87jR0w_0wE66_nNYgiAdxA:/NRWebFlows.ETX542+jvkKT6PN6V5za9g/NodesShownInESpaceTree.87jR0w_0wE66_nNYgiAdxA:Corl3UKINN+7Gu1_7W907g", "UBTConnect", "PassportScan", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:87jR0w_0wE66_nNYgiAdxA", callContext.id);
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

define("UBTConnect.Legacy_OrbitEventsFlow.PassportScan.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LyQSjZxJsUKBM_fdp1azUA": {
getter: function (varBag, idService) {
return varBag.model.variables.targetIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"HiZyH2bZhkqthPwir2BKsA": {
getter: function (varBag, idService) {
return varBag.model.variables.loginMemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"kugx1r5gO0O5BPY_Ifsnfg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
