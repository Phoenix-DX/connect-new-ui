define("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$model", ["OutSystems/ClientRuntime/Main", "OrbitPassportScanC2.model", "OrbitPassportScanC2.controller", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_OrbitBlank.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "OrbitPassportScanC2.controller$Handler_OnRequestCamera", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "OrbitPassportScanC2.referencesHealth", "OrbitPassportScanC2.referencesHealth$UBTJavaScriptUtils", "NavigationHandler.controller$PreventNavigation", "OrbitPassportScanC2.referencesHealth$NavigationHandler"], function (OutSystems, OrbitPassportScanC2Model, OrbitPassportScanC2Controller, UBTJavaScriptUtilsController, NavigationHandlerController, Connect2_LegacyShared_Layout_OrbitTheme_Layout_OrbitBlank_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel) {
var OS = OutSystems.Internal;

var GetConfigsDataActRec = (function (_super) {
__extends(GetConfigsDataActRec, _super);
function GetConfigsDataActRec(defaults) {
_super.apply(this, arguments);
}
GetConfigsDataActRec.attributesToDeclare = function () {
return [
this.attr("Token", "tokenOut", "Token", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseURL", "baseURLOut", "BaseURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("B2CTenant", "b2CTenantOut", "B2CTenant", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("B2CClientId", "b2CClientIdOut", "B2CClientId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("B2CPolicy", "b2CPolicyOut", "B2CPolicy", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TokenType", "tokenTypeOut", "TokenType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetConfigsDataActRec.init();
return GetConfigsDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("TargetMemberId", "targetMemberIdIn", "TargetMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_targetMemberIdInDataFetchStatus", "_targetMemberIdInDataFetchStatus", "_targetMemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("LoginMemberId", "loginMemberIdIn", "LoginMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_loginMemberIdInDataFetchStatus", "_loginMemberIdInDataFetchStatus", "_loginMemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetConfigs", "getConfigsDataAct", "getConfigsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetConfigsDataActRec());
}, true, GetConfigsDataActRec)
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
Model._hasValidationWidgetsValue = (Connect2_LegacyShared_Layout_OrbitTheme_Layout_OrbitBlank_mvcModel.hasValidationWidgets || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("TargetMemberId" in inputs) {
this.variables.targetMemberIdIn = inputs.TargetMemberId;
if("_targetMemberIdInDataFetchStatus" in inputs) {
this.variables._targetMemberIdInDataFetchStatus = inputs._targetMemberIdInDataFetchStatus;
}

}

if("LoginMemberId" in inputs) {
this.variables.loginMemberIdIn = inputs.LoginMemberId;
if("_loginMemberIdInDataFetchStatus" in inputs) {
this.variables._loginMemberIdInDataFetchStatus = inputs._loginMemberIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "PassportScan.ScreenBlock_PassportScan");
});
define("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$view", ["OutSystems/ClientRuntime/Main", "OrbitPassportScanC2.model", "OrbitPassportScanC2.controller", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$model", "OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$controller", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_OrbitBlank.mvc$view", "OutSystems/ReactWidgets/Main", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "OrbitPassportScanC2.controller$Handler_OnRequestCamera", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "OrbitPassportScanC2.referencesHealth", "OrbitPassportScanC2.referencesHealth$UBTJavaScriptUtils", "NavigationHandler.controller$PreventNavigation", "OrbitPassportScanC2.referencesHealth$NavigationHandler"], function (OutSystems, OrbitPassportScanC2Model, OrbitPassportScanC2Controller, UBTJavaScriptUtilsController, NavigationHandlerController, React, OSView, OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_model, OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_controller, Connect2_LegacyShared_Layout_OrbitTheme_Layout_OrbitBlank_mvc_view, OSWidgets, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "PassportScan.ScreenBlock_PassportScan";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OrbitPassportScanC2.PassportScan.js"];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_OrbitBlank_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_OrbitTheme_Layout_OrbitBlank_mvc_view, {
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "position: absolute; top: 0; left: 0; height: 100vh; width: 100vw;"
},
visible: true,
_idProps: {
service: idService,
name: "passportScan"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
commonUI_Elements: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.commonUI_Elements,
_idProps: {
service: idService,
name: "CommonUI_Elements"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}), React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
inputs: {},
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
controller.handler_BackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "3",
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
define("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$controller", ["OutSystems/ClientRuntime/Main", "OrbitPassportScanC2.model", "OrbitPassportScanC2.controller", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "OrbitPassportScanC2.languageResources", "OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$debugger", "OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$controller.OnAfterFetch_GetFeedConfig.InitializePassportScanJS", "OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$controller.Handler_OnClose.DestroyEmbedInstanceJS", "OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$controller.Handler_BackNavigation.CheckIsConfiguredJS", "OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$controller.Handler_BackNavigation.SetupInternalBackNavigationJS", "OrbitPassportScanC2.controller$Handler_OnRequestCamera", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "OrbitPassportScanC2.referencesHealth", "OrbitPassportScanC2.referencesHealth$UBTJavaScriptUtils", "NavigationHandler.controller$PreventNavigation", "OrbitPassportScanC2.referencesHealth$NavigationHandler"], function (OutSystems, OrbitPassportScanC2Model, OrbitPassportScanC2Controller, UBTJavaScriptUtilsController, NavigationHandlerController, OrbitPassportScanC2LanguageResources, OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_Debugger, OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_controller_OnAfterFetch_GetFeedConfig_InitializePassportScanJS, OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_controller_Handler_OnClose_DestroyEmbedInstanceJS, OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_controller_Handler_BackNavigation_CheckIsConfiguredJS, OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_controller_Handler_BackNavigation_SetupInternalBackNavigationJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
handler_OnReady$Action: function () {
return controller.executeActionInsideJSNode(controller._handler_OnReady$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Handler_OnReady");
},
handler_OnSaved$Action: function (idIn) {
idIn = (idIn === undefined) ? "" : idIn;
return controller.executeActionInsideJSNode(controller._handler_OnSaved$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(idIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Handler_OnSaved");
},
handler_OnClose$Action: function () {
return controller.executeActionInsideJSNode(controller._handler_OnClose$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Handler_OnClose");
},
handler_OnAuthExpired$Action: function () {
return controller.executeActionInsideJSNode(controller._handler_OnAuthExpired$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Handler_OnAuthExpired");
},
handler_OnError$Action: function (errorMessageIn) {
errorMessageIn = (errorMessageIn === undefined) ? "" : errorMessageIn;
return controller.executeActionInsideJSNode(controller._handler_OnError$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(errorMessageIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Handler_OnError");
}
};
this.dataFetchDependenciesOriginal = {
getConfigs$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
getConfigs$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getConfigs$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:_q4IGuIQBEOPNQJoFsy01A:/NRWebFlows.8Oei4IvKK0+LtOKf8Vpg_A/NodesShownInESpaceTree.0FW0OkNE8kW1S6OKA9+aYg/DataActions._q4IGuIQBEOPNQJoFsy01A:bAx9B6sFUd_xJr3WAZaTKA", "OrbitPassportScanC2", "GetConfigs", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "PassportScan/ScreenBlock_PassportScan/GetConfigs");
return controller.callDataAction("DataActionGetConfigs", "screenservices/OrbitPassportScanC2/PassportScan/ScreenBlock_PassportScan/DataActionGetConfigs", "V_Th6_WnnFTA68A42BADHA", function (b) {
model.variables.getConfigsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getConfigsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getConfigsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "PassportScan/ScreenBlock_PassportScan/GetConfigs On After Fetch");
controller._onAfterFetch_GetFeedConfig$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:_q4IGuIQBEOPNQJoFsy01A", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getConfigs$DataActRefresh"];
// Client Actions
Controller.prototype._onAfterFetch_GetFeedConfig$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetFeedConfig");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:MqlgOetIm0CyCD++jvVi1g:/NRWebFlows.8Oei4IvKK0+LtOKf8Vpg_A/NodesShownInESpaceTree.0FW0OkNE8kW1S6OKA9+aYg/ClientActions.MqlgOetIm0CyCD++jvVi1g:M1p0yJMMEh3O5iWDHSCglA", "OrbitPassportScanC2", "OnAfterFetch_GetFeedConfig", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:TsJlDiBlFUWSwz+Ar0wrrg", callContext.id);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:Ak+6TlsKkUKyxoVJDSc7vg", callContext.id);
controller.safeExecuteJSNode(OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_controller_OnAfterFetch_GetFeedConfig_InitializePassportScanJS, "InitializePassportScan", "OnAfterFetch_GetFeedConfig", {
ContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("passportScan"), OS.DataTypes.DataTypes.Text),
TokenType: OS.DataConversion.JSNodeParamConverter.to(model.variables.getConfigsDataAct.tokenTypeOut, OS.DataTypes.DataTypes.Text),
B2CClientId: OS.DataConversion.JSNodeParamConverter.to(model.variables.getConfigsDataAct.b2CClientIdOut, OS.DataTypes.DataTypes.Text),
Token: OS.DataConversion.JSNodeParamConverter.to(model.variables.getConfigsDataAct.tokenOut, OS.DataTypes.DataTypes.Text),
LoginMemberId: OS.DataConversion.JSNodeParamConverter.to(model.variables.loginMemberIdIn, OS.DataTypes.DataTypes.LongInteger),
BaseURL: OS.DataConversion.JSNodeParamConverter.to(model.variables.getConfigsDataAct.baseURLOut, OS.DataTypes.DataTypes.Text),
B2CTenant: OS.DataConversion.JSNodeParamConverter.to(model.variables.getConfigsDataAct.b2CTenantOut, OS.DataTypes.DataTypes.Text),
TargetMemberId: OS.DataConversion.JSNodeParamConverter.to(model.variables.targetMemberIdIn, OS.DataTypes.DataTypes.LongInteger),
B2CPolicy: OS.DataConversion.JSNodeParamConverter.to(model.variables.getConfigsDataAct.b2CPolicyOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
Handler_OnReady: controller.clientActionProxies.handler_OnReady$Action,
Handler_OnSaved: controller.clientActionProxies.handler_OnSaved$Action,
Handler_OnClose: controller.clientActionProxies.handler_OnClose$Action,
Handler_OnAuthExpired: controller.clientActionProxies.handler_OnAuthExpired$Action,
Handler_OnError: controller.clientActionProxies.handler_OnError$Action,
Handler_OnRequestCamera: OrbitPassportScanC2Controller.default.getClientActionProxies(controller).handler_OnRequestCamera$Action,
JSUtils_Console_Log: UBTJavaScriptUtilsController.default.getClientActionProxies(controller).jSUtils_Console_Log$Action
}, {});
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:BYAO1Sh+tkSZqvVgOXowzA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:MqlgOetIm0CyCD++jvVi1g", callContext.id);
}

};
Controller.prototype._handler_OnAuthExpired$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnAuthExpired");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:SYqWUsAaCES647x7Yg+1QQ:/NRWebFlows.8Oei4IvKK0+LtOKf8Vpg_A/NodesShownInESpaceTree.0FW0OkNE8kW1S6OKA9+aYg/ClientActions.SYqWUsAaCES647x7Yg+1QQ:ce8PYSXNLhlpEEcuqS85Dg", "OrbitPassportScanC2", "Handler_OnAuthExpired", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:EYetX+RNCkmTwdBGwYby3A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:opFs1Ep1vEC8+79bJHIF7g", callContext.id);
// Execute Action: JSUtils_Console_Log
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("Action (Handler_OnAuthExpired) - Ran Successfuly", callContext);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:0eD30kIi6UWLNftUfynjFQ", callContext.id);
// Refresh Query: GetConfigs
var result = controller.getConfigs$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:z_8PkpCuOU6s4U+Jgu0Fpw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:SYqWUsAaCES647x7Yg+1QQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:SYqWUsAaCES647x7Yg+1QQ", callContext.id);
throw ex;

});
};
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
OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:L8DxZx0KLUKGqlqsjd1Lng:/NRWebFlows.8Oei4IvKK0+LtOKf8Vpg_A/NodesShownInESpaceTree.0FW0OkNE8kW1S6OKA9+aYg/ClientActions.L8DxZx0KLUKGqlqsjd1Lng:hjnGK+5bt5kHG+lYNK72UQ", "OrbitPassportScanC2", "Handler_OnClose", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:BScJ7Hd8+0mh8rVR12xsCA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:uC_iKx5jYECTN6qYfgUpuA", callContext.id);
// Execute Action: JSUtils_Console_Log
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("Action (Handler_OnClose) - Ran Successfuly", callContext);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:sb6Q7nuCXk2cHPnChftX8Q", callContext.id);
controller.safeExecuteJSNode(OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_controller_Handler_OnClose_DestroyEmbedInstanceJS, "DestroyEmbedInstance", "Handler_OnClose", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:_OF+ZMw6_EmXhQ10tCFSKw", callContext.id);
// Trigger Event: Close
return controller.close$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:NQxtoF12ukSvoiQhp0e0Ag", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:L8DxZx0KLUKGqlqsjd1Lng", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:L8DxZx0KLUKGqlqsjd1Lng", callContext.id);
throw ex;

});
};
Controller.prototype._handler_OnError$Action = function (errorMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.Handler_OnError$vars"))());
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:AicbtrBah06X4X7U5LiMtA:/NRWebFlows.8Oei4IvKK0+LtOKf8Vpg_A/NodesShownInESpaceTree.0FW0OkNE8kW1S6OKA9+aYg/ClientActions.AicbtrBah06X4X7U5LiMtA:IpsM8Jeow_gxpQV6PFJBBg", "OrbitPassportScanC2", "Handler_OnError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:nahxi6lgmEWsM3+2_41iag", callContext.id);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:OH7kTt7bT06InKTc2AS2Aw", callContext.id);
// Execute Action: JSUtils_Console_Log
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action(("Action (Handler_OnError) - Ran Successfuly, Message: " + vars.value.errorMessageInLocal), callContext);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:NmUm1HDXsESwtsyw7yXNgg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(vars.value.errorMessageInLocal, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:qhUJiYxhXUKmbc+i_7ysIw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:AicbtrBah06X4X7U5LiMtA", callContext.id);
}

};
Controller.registerVariableGroupType("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.Handler_OnError$vars", [{
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_BackNavigation$Action = function (backNavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_BackNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.Handler_BackNavigation$vars"))());
vars.value.backNavigationEventInLocal = backNavigationEventIn;
var checkIsConfiguredJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkIsConfiguredJSResult = checkIsConfiguredJSResult;
try {OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:oYt4t7e3i029L58IaaPT6A:/NRWebFlows.8Oei4IvKK0+LtOKf8Vpg_A/NodesShownInESpaceTree.0FW0OkNE8kW1S6OKA9+aYg/ClientActions.oYt4t7e3i029L58IaaPT6A:f3qUqysk8pFLTZApSgE7ig", "OrbitPassportScanC2", "Handler_BackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:vGKCUhpm_k2yTHlgUhm7Ew", callContext.id);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:CLE0VYPc10OiuCwKGFyCIw", callContext.id);
checkIsConfiguredJSResult.value = controller.safeExecuteJSNode(OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_controller_Handler_BackNavigation_CheckIsConfiguredJS, "CheckIsConfigured", "Handler_BackNavigation", {
IsConfigured: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.Handler_BackNavigation$checkIsConfiguredJSResult"))();
jsNodeResult.isConfiguredOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsConfigured, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Is Configured?
if((OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:F2LEFgWfV0yzB1o_nDUEaA", callContext.id) && checkIsConfiguredJSResult.value.isConfiguredOut)) {
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:erSXsTolZkyQu5CxWKPpNQ", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:6+vmVrqsE0eQliu7KsbEDQ", callContext.id);
controller.safeExecuteJSNode(OrbitPassportScanC2_PassportScan_ScreenBlock_PassportScan_mvc_controller_Handler_BackNavigation_SetupInternalBackNavigationJS, "SetupInternalBackNavigation", "Handler_BackNavigation", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:U14E91xi7kumFmL6nzEXkg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:9RBEh1abCUKq9WFJ8pocmg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:oYt4t7e3i029L58IaaPT6A", callContext.id);
}

};
Controller.registerVariableGroupType("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.Handler_BackNavigation$vars", [{
name: "BackNavigationEvent",
attrName: "backNavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.registerVariableGroupType("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.Handler_BackNavigation$checkIsConfiguredJSResult", [{
name: "IsConfigured",
attrName: "isConfiguredOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_OnReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:srpqxvmdakyT9tmB_zav2g:/NRWebFlows.8Oei4IvKK0+LtOKf8Vpg_A/NodesShownInESpaceTree.0FW0OkNE8kW1S6OKA9+aYg/ClientActions.srpqxvmdakyT9tmB_zav2g:OJkBWni2ViDE2lducHg7zg", "OrbitPassportScanC2", "Handler_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:JaO4KBKSf0ONwwUi+ZXtcA", callContext.id);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:OM5Fjr0Zek68h_O79SCsCg", callContext.id);
// Execute Action: JSUtils_Console_Log
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action("Action (Handler_OnReady) - Ran Successfuly", callContext);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:hkHthhsssUqhC08mBTej_g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:srpqxvmdakyT9tmB_zav2g", callContext.id);
}

};
Controller.prototype._handler_OnSaved$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnSaved");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.Handler_OnSaved$vars"))());
vars.value.idInLocal = idIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:uY801I_q_UungJeWwD3u4A:/NRWebFlows.8Oei4IvKK0+LtOKf8Vpg_A/NodesShownInESpaceTree.0FW0OkNE8kW1S6OKA9+aYg/ClientActions.uY801I_q_UungJeWwD3u4A:QDHJkuXaatJtUstpmuZUcA", "OrbitPassportScanC2", "Handler_OnSaved", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:bp0Vr29Yu0GFDni2mpVX5w", callContext.id);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:x1wjJfNaN0uEAZmyCvfRqw", callContext.id);
// Execute Action: JSUtils_Console_Log
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action(("Action (Handler_OnSaved) - Ran Successfuly - Id: " + vars.value.idInLocal), callContext);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:g0ZnenUz+Ui2B9QjIsSyfA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Passport successfully saved.", /*Success*/ 1);
OutSystemsDebugger.handleBreakpoint("L9XWvS1q_UCA2Vgspgz3Sg:Wv+_uVD_AUevgROyY_661A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:uY801I_q_UungJeWwD3u4A", callContext.id);
}

};
Controller.registerVariableGroupType("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.Handler_OnSaved$vars", [{
name: "id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.onAfterFetch_GetFeedConfig$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetFeedConfig$Action, callContext);

};
Controller.prototype.handler_OnAuthExpired$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnAuthExpired$Action, callContext);

};
Controller.prototype.handler_OnClose$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnClose$Action, callContext);

};
Controller.prototype.handler_OnError$Action = function (errorMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnError$Action, callContext, errorMessageIn);

};
Controller.prototype.handler_BackNavigation$Action = function (backNavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_BackNavigation$Action, callContext, backNavigationEventIn);

};
Controller.prototype.handler_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnReady$Action, callContext);

};
Controller.prototype.handler_OnSaved$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnSaved$Action, callContext, idIn);

};
Controller.prototype.close$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:8Oei4IvKK0+LtOKf8Vpg_A:/NRWebFlows.8Oei4IvKK0+LtOKf8Vpg_A:Ycc_Vu1xjC3pBBDaUtG41g", "OrbitPassportScanC2", "PassportScan", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("L9XWvS1q_UCA2Vgspgz3Sg:0FW0OkNE8kW1S6OKA9+aYg:/NRWebFlows.8Oei4IvKK0+LtOKf8Vpg_A/NodesShownInESpaceTree.0FW0OkNE8kW1S6OKA9+aYg:H37LLzLpVAnm5ra_QOArxA", "OrbitPassportScanC2", "ScreenBlock_PassportScan", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:0FW0OkNE8kW1S6OKA9+aYg", callContext.id);
OutSystemsDebugger.pop("L9XWvS1q_UCA2Vgspgz3Sg:8Oei4IvKK0+LtOKf8Vpg_A", callContext.id);
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
return OrbitPassportScanC2Controller.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OrbitPassportScanC2LanguageResources);
});
define("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$controller.OnAfterFetch_GetFeedConfig.InitializePassportScanJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
//Check if there's an existing instance of the embed
if(window.OrbitPassport.embed.isConfigured()) {
    // Destroy existing instance
    window.OrbitPassport.embed.destroy();
}

// Initialize a variable with handlers for the PassportScan events
window.passportScanControl = window.passportScanControl || {};

window.passportScanControl.onReady = $actions.Handler_OnReady;
window.passportScanControl.onSaved = $actions.Handler_OnSaved;
window.passportScanControl.onClose = $actions.Handler_OnClose;
window.passportScanControl.onAuthExpired = $actions.Handler_OnAuthExpired;
window.passportScanControl.onError = $actions.Handler_OnError;
window.passportScanControl.onCameraRequest = $actions.Handler_OnRequestCamera;

// Initialize the PassportScan configuration
if(window.OrbitPassport && !window.OrbitPassport.embed.isConfigured()){
    window.OrbitPassport.embed.configure({
        loginMemberId: $parameters.LoginMemberId,
        baseUrl: $parameters.BaseURL,
        containerId: $parameters.ContainerId,
        tokenType: $parameters.TokenType,
        idToken: $parameters.Token,
        b2cTenants: $parameters.B2CTenant,
        b2cClientIds: $parameters.B2CClientId,
        b2cPolicy: $parameters.B2CPolicy,
        onReady: function () {
            $actions.JSUtils_Console_Log("PassportScan Event (OnReady) - Success");
            window.passportScanControl.onReady();
        },
        onSaved: function (id) {
            $actions.JSUtils_Console_Log("PassportScan Event (OnSaved) - Success");
            window.passportScanControl.onSaved(id);
        },
        onClose: function () {
            $actions.JSUtils_Console_Log("PassportScan Event (On Close) - Success");
            window.passportScanControl.onClose();
        },
        onAuthExpired: function () {
            $actions.JSUtils_Console_Log("PassportScan Event (OnAuthExpired) - Trigger new Authentication flow for new token");
            window.passportScanControl.onAuthExpired();
        },
        onError: function (msg) {
            $actions.JSUtils_Console_Log("PassportScan Event (OnError) - Message: " + msg);
            window.passportScanControl.onError(msg);
        },
        onRequestCamera: function () {
            $actions.JSUtils_Console_Log("PassportScan Event (OnCameraRequest) - Success");
            return window.passportScanControl.onCameraRequest();
        }
    });
}

if(window.OrbitPassport.embed.isConfigured()) {
    let targetMemberId = $parameters.TargetMemberId || null;
    window.OrbitPassport.embed.open({ memberId: targetMemberId });
}
};
});
define("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$controller.Handler_OnClose.DestroyEmbedInstanceJS", [], function () {
return function ($actions, $roles, $public) {
//Check if there's an existing instance of the embed
if(window.OrbitPassport.embed.isConfigured()) {
    // Destroy existing instance
    window.OrbitPassport.embed.destroy();
}
};
});
define("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$controller.Handler_BackNavigation.CheckIsConfiguredJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsConfigured = window.OrbitPassport.embed.isConfigured();
};
});
define("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$controller.Handler_BackNavigation.SetupInternalBackNavigationJS", [], function () {
return function ($actions, $roles, $public) {
if(window.OrbitPassport.embed.isConfigured()) {
    // Call internal back navigation
    window.OrbitPassport.embed.back();
}
};
});

define("OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Ak+6TlsKkUKyxoVJDSc7vg": {
getter: function (varBag, idService) {
return varBag.initializePassportScanJSResult.value;
}
},
"sb6Q7nuCXk2cHPnChftX8Q": {
getter: function (varBag, idService) {
return varBag.destroyEmbedInstanceJSResult.value;
}
},
"tDcKQGtUvE+DL8Twwh3zmg": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QS_FMKmKek2lEnifaWE_ag": {
getter: function (varBag, idService) {
return varBag.vars.value.backNavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"CLE0VYPc10OiuCwKGFyCIw": {
getter: function (varBag, idService) {
return varBag.checkIsConfiguredJSResult.value;
}
},
"6+vmVrqsE0eQliu7KsbEDQ": {
getter: function (varBag, idService) {
return varBag.setupInternalBackNavigationJSResult.value;
}
},
"06RogqKHu0mDLrDT7STAwg": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kGv2oNWVAkecqHWgwjZD_g": {
getter: function (varBag, idService) {
return varBag.model.variables.targetMemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"tzzgl7Rzf0SWRCjBU6YEmQ": {
getter: function (varBag, idService) {
return varBag.model.variables.loginMemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"_q4IGuIQBEOPNQJoFsy01A": {
getter: function (varBag, idService) {
return varBag.model.variables.getConfigsDataAct;
}
},
"E1BmPKsH2UeKrrSRszGGpQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"LTeN4g6PPUyrwpIfJ0_a5w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("passportScan"));
})(varBag.model, idService);
}
},
"DcXA+jawOk2gDh2+vGr06A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"c2K4kJ7q_EyaNoWM9ivSUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
