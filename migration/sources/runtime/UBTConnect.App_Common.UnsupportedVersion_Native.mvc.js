define("UBTConnect.App_Common.UnsupportedVersion_Native.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBT_AppManager.controller", "UBTConnect.controller", "UBTConnect.App_Common.UnsupportedVersion.mvc$model", "UBT_AppManager.controller$AppManager_GetPackageName", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.controller$Upgrade_UBTConnect"], function (OutSystems, UBTConnectModel, UBT_AppManagerController, UBTConnectController, UBTConnect_App_Common_UnsupportedVersion_mvcModel) {
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
Model._hasValidationWidgetsValue = UBTConnect_App_Common_UnsupportedVersion_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "App_Common.UnsupportedVersion_Native");
});
define("UBTConnect.App_Common.UnsupportedVersion_Native.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common.UnsupportedVersion_Native.mvc$model", "UBTConnect.App_Common.UnsupportedVersion_Native.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.UnsupportedVersion.mvc$view", "OutSystems/ReactWidgets/Main", "UBT_AppManager.controller$AppManager_GetPackageName", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.controller$Upgrade_UBTConnect"], function (OutSystems, UBTConnectModel, UBTConnectController, UBT_AppManagerController, React, OSView, UBTConnect_App_Common_UnsupportedVersion_Native_mvc_model, UBTConnect_App_Common_UnsupportedVersion_Native_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_UnsupportedVersion_mvc_view, OSWidgets) {
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
        View.displayName = "App_Common.UnsupportedVersion_Native";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_UnsupportedVersion_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Common_UnsupportedVersion_Native_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Common_UnsupportedVersion_Native_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_Common_UnsupportedVersion_mvc_view, {
inputs: {
In_HideButton: model.getCachedValue(idService.getId("Y_uoYk_x3k+NmWY9Ulmqcg.In_HideButton"), function () {
return (OutSystemsDebugger.handleFunctionCall(function () {
return UBT_AppManagerController.default.appManager_GetPackageName$Action(callContext).packageNameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) === "");
}),
In_ExtendedClass: "unsupported-card--native"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_NavigateToPlaystore$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common/UnsupportedVersion Event_NavigateToPlaystore");
controller.handler_NavigateToPlaystore$Action(controller.callContext(eventHandlerContext));
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
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("5ThHqySWpES++njvXEkLCg.Value"), function () {
return (((((("We have noticed you are using an old version of Connect." + "\r\n") + "\r\n") + "We recommend you upgrade to the latest version.") + "\r\n") + "\r\n") + "If you have any issues upgrading the Connect app, please uninstall and reinstall it.");
}),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_Common.UnsupportedVersion_Native.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBT_AppManager.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common.UnsupportedVersion_Native.mvc$debugger", "UBT_AppManager.controller$AppManager_GetPackageName", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.controller$Upgrade_UBTConnect"], function (OutSystems, UBTConnectModel, UBTConnectController, UBT_AppManagerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_UnsupportedVersion_Native_mvc_Debugger) {
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
Controller.prototype._handler_NavigateToPlaystore$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateToPlaystore");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:q4LTfsYj_E2Y2tvtWN9V_Q:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.bZIH+d_e4E+L5u74E_ZxEg/ClientActions.q4LTfsYj_E2Y2tvtWN9V_Q:1QSYG3DeWI7gWkIg_VgRjA", "UBTConnect", "Handler_NavigateToPlaystore", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ht8dxNwyeE+J0ZObF5niIw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zb77mj9gPU2L+orda5cJfg", callContext.id);
// Execute Action: Upgrade_UBTConnect
UBTConnectController.default.upgrade_UBTConnect$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YqyparkANECgXSaNx5WUKg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:q4LTfsYj_E2Y2tvtWN9V_Q", callContext.id);
}

};

Controller.prototype.handler_NavigateToPlaystore$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateToPlaystore$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:mJCG955vpb2MtUitKU2aNA", "UBTConnect", "App_Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:bZIH+d_e4E+L5u74E_ZxEg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.bZIH+d_e4E+L5u74E_ZxEg:i5jDdznRnXUnjCzEb8Ld6Q", "UBTConnect", "UnsupportedVersion_Native", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:bZIH+d_e4E+L5u74E_ZxEg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
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

define("UBTConnect.App_Common.UnsupportedVersion_Native.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"K6yeUTyHbEOTG7ZjpNyEbA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
