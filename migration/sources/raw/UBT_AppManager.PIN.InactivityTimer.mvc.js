define("UBT_AppManager.PIN.InactivityTimer.mvc$model", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.controller$PIN_SessionInactivity_Start", "UBT_AppManager.controller$AppManager_JSUtils_CustomEvents_RegisterHandler"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("DestroyCallback", "destroyCallbackVar", "DestroyCallback", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromStructure = function (str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
destroyCallbackVar: OS.DataTypes.ImmutableBase.getData(str)
}));
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "PIN.InactivityTimer");
});
define("UBT_AppManager.PIN.InactivityTimer.mvc$view", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBT_AppManager.PIN.InactivityTimer.mvc$model", "UBT_AppManager.PIN.InactivityTimer.mvc$controller", "UBT_AppManager.clientVariables", "UBT_AppManager.controller$PIN_SessionInactivity_Start", "UBT_AppManager.controller$AppManager_JSUtils_CustomEvents_RegisterHandler"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, UBT_AppManager_PIN_InactivityTimer_mvc_model, UBT_AppManager_PIN_InactivityTimer_mvc_controller, UBT_AppManagerClientVariables) {
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
        View.displayName = "PIN.InactivityTimer";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBT_AppManager_PIN_InactivityTimer_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBT_AppManager_PIN_InactivityTimer_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties());
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBT_AppManager.PIN.InactivityTimer.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.languageResources", "UBT_AppManager.clientVariables", "UBT_AppManager.PIN.InactivityTimer.mvc$debugger", "UBT_AppManager.PIN.InactivityTimer.mvc$controller.OnInitialize.GetTimeoutHandlerJS", "UBT_AppManager.PIN.InactivityTimer.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS", "UBT_AppManager.controller$PIN_SessionInactivity_Start", "UBT_AppManager.controller$AppManager_JSUtils_CustomEvents_RegisterHandler"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerLanguageResources, UBT_AppManagerClientVariables, UBT_AppManager_PIN_InactivityTimer_mvc_Debugger, UBT_AppManager_PIN_InactivityTimer_mvc_controller_OnInitialize_GetTimeoutHandlerJS, UBT_AppManager_PIN_InactivityTimer_mvc_controller_OnDestroy_ExecuteDestroyCallbackJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onTimeout$Action: function () {
return controller.executeActionInsideJSNode(controller._onTimeout$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnTimeout");
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
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var appManager_JSUtils_CustomEvents_RegisterHandlerVar = new OS.DataTypes.VariableHolder();
var getTimeoutHandlerJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.appManager_JSUtils_CustomEvents_RegisterHandlerVar = appManager_JSUtils_CustomEvents_RegisterHandlerVar;
varBag.getTimeoutHandlerJSResult = getTimeoutHandlerJSResult;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:MCGfHK8vF0inhIwG3Nelkw:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.KFRmlIPgGk+i7YFVGblL8g/ClientActions.MCGfHK8vF0inhIwG3Nelkw:BbHRdJikYcTwvaeN5G2I3Q", "UBT_AppManager", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:hbE5j2joh065iSXBhtGQ4g", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:jTvLbyShs0izgRA8XE9JsQ", callContext.id);
getTimeoutHandlerJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_PIN_InactivityTimer_mvc_controller_OnInitialize_GetTimeoutHandlerJS, "GetTimeoutHandler", "OnInitialize", {
TimeoutHandler: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN.InactivityTimer.OnInitialize$getTimeoutHandlerJSResult"))();
jsNodeResult.timeoutHandlerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.TimeoutHandler, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OnTimeout: controller.clientActionProxies.onTimeout$Action
}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PnXm+LmMAUCmRHRDoHU+CQ", callContext.id);
// Execute Action: AppManager_JSUtils_CustomEvents_RegisterHandler
appManager_JSUtils_CustomEvents_RegisterHandlerVar.value = UBT_AppManagerController.default.appManager_JSUtils_CustomEvents_RegisterHandler$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.pIN_OnTimeout, getTimeoutHandlerJSResult.value.timeoutHandlerOut, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PceIwN5Ah06SLzW89aSKSg", callContext.id);
// DestroyCallback = AppManager_JSUtils_CustomEvents_RegisterHandler.DestroyCallbackFunction
model.variables.destroyCallbackVar = appManager_JSUtils_CustomEvents_RegisterHandlerVar.value.destroyCallbackFunctionOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:AAgoC++Zvke3_L_2QcgIIw", callContext.id);
// Execute Action: PIN_SessionInactivity_Start
UBT_AppManagerController.default.pIN_SessionInactivity_Start$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KTv3hDUnHUGVynPGRBZBKg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:MCGfHK8vF0inhIwG3Nelkw", callContext.id);
}

};
Controller.registerVariableGroupType("UBT_AppManager.PIN.InactivityTimer.OnInitialize$getTimeoutHandlerJSResult", [{
name: "TimeoutHandler",
attrName: "timeoutHandlerOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onTimeout$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnTimeout");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:zVldzLRoM0Ks_roW0RQUOQ:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.KFRmlIPgGk+i7YFVGblL8g/ClientActions.zVldzLRoM0Ks_roW0RQUOQ:JMx1qo5gWd+zWAD2zPX3oA", "UBT_AppManager", "OnTimeout", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:b_2o+Yz870KuujnhZUbK2w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:_KgEneVdOUOBs46a35czTw", callContext.id);
// Trigger Event: Timeout
return controller.timeout$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:fy9yU_Vap02cPb4JSRebwA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:zVldzLRoM0Ks_roW0RQUOQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:zVldzLRoM0Ks_roW0RQUOQ", callContext.id);
throw ex;

});
};
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:vYd95RxxSk2bClKOVGEyvg:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.KFRmlIPgGk+i7YFVGblL8g/ClientActions.vYd95RxxSk2bClKOVGEyvg:+it3SDg3+rLNukc6Z0_zBw", "UBT_AppManager", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:N9LCjVkdME2L7S81X4ySMw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2sJW3eI220KOAF_gh37YDA", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_PIN_InactivityTimer_mvc_controller_OnDestroy_ExecuteDestroyCallbackJS, "ExecuteDestroyCallback", "OnDestroy", {
DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(model.variables.destroyCallbackVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Jw6eh7ih502r7y43oR67Aw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:vYd95RxxSk2bClKOVGEyvg", callContext.id);
}

};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onTimeout$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onTimeout$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.timeout$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:EVrBUbYotE+jABIep0Ejew:/NRWebFlows.EVrBUbYotE+jABIep0Ejew:tcKb4E8x2qIhKwyUwFCtgQ", "UBT_AppManager", "PIN", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:KFRmlIPgGk+i7YFVGblL8g:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.KFRmlIPgGk+i7YFVGblL8g:PBF_L2ghKF2N4ibT_3YaDw", "UBT_AppManager", "InactivityTimer", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:KFRmlIPgGk+i7YFVGblL8g", callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:EVrBUbYotE+jABIep0Ejew", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "PIN/InactivityTimer On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "PIN/InactivityTimer On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return UBT_AppManagerController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBT_AppManagerLanguageResources);
});
define("UBT_AppManager.PIN.InactivityTimer.mvc$controller.OnInitialize.GetTimeoutHandlerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.TimeoutHandler = $actions.OnTimeout
};
});
define("UBT_AppManager.PIN.InactivityTimer.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.DestroyCallback()
};
});

define("UBT_AppManager.PIN.InactivityTimer.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"PnXm+LmMAUCmRHRDoHU+CQ": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_CustomEvents_RegisterHandlerVar.value;
}
},
"jTvLbyShs0izgRA8XE9JsQ": {
getter: function (varBag, idService) {
return varBag.getTimeoutHandlerJSResult.value;
}
},
"2sJW3eI220KOAF_gh37YDA": {
getter: function (varBag, idService) {
return varBag.executeDestroyCallbackJSResult.value;
}
},
"4ayyqF7sg0Gh+I5Z_X6LqA": {
getter: function (varBag, idService) {
return varBag.model.variables.destroyCallbackVar;
},
dataType: OS.DataTypes.DataTypes.Object
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
