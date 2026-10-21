define("UBT_AppManager.Layouts.AppManager_Events.mvc$model", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.model$AppManager_CallbackRec", "UBT_AppManager.controller$AppManager_JSUtils_CustomEvents_RegisterHandler"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("DestroyCallbackFunction", "destroyCallbackFunctionVar", "DestroyCallbackFunction", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("DestroyCallbackFunction2", "destroyCallbackFunction2Var", "DestroyCallbackFunction2", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("DestroyCallbackFunction3", "destroyCallbackFunction3Var", "DestroyCallbackFunction3", true, false, OS.DataTypes.DataTypes.Object, function () {
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
return new OS.Model.ModelFactory(Model, "Layouts.AppManager_Events");
});
define("UBT_AppManager.Layouts.AppManager_Events.mvc$view", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBT_AppManager.Layouts.AppManager_Events.mvc$model", "UBT_AppManager.Layouts.AppManager_Events.mvc$controller", "UBT_AppManager.clientVariables", "UBT_AppManager.model$AppManager_CallbackRec", "UBT_AppManager.controller$AppManager_JSUtils_CustomEvents_RegisterHandler"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, UBT_AppManager_Layouts_AppManager_Events_mvc_model, UBT_AppManager_Layouts_AppManager_Events_mvc_controller, UBT_AppManagerClientVariables) {
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
        View.displayName = "Layouts.AppManager_Events";
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
                return UBT_AppManager_Layouts_AppManager_Events_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBT_AppManager_Layouts_AppManager_Events_mvc_controller;
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
define("UBT_AppManager.Layouts.AppManager_Events.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.languageResources", "UBT_AppManager.clientVariables", "UBT_AppManager.Layouts.AppManager_Events.mvc$debugger", "UBT_AppManager.Layouts.AppManager_Events.mvc$controller.OnDestroy.RunDestroyCallbacksJS", "UBT_AppManager.Layouts.AppManager_Events.mvc$controller.OnReady.GetHandlersJS", "UBT_AppManager.model$AppManager_CallbackRec", "UBT_AppManager.controller$AppManager_JSUtils_CustomEvents_RegisterHandler"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerLanguageResources, UBT_AppManagerClientVariables, UBT_AppManager_Layouts_AppManager_Events_mvc_Debugger, UBT_AppManager_Layouts_AppManager_Events_mvc_controller_OnDestroy_RunDestroyCallbacksJS, UBT_AppManager_Layouts_AppManager_Events_mvc_controller_OnReady_GetHandlersJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onCallbackAction$Action: function (dataIn) {
dataIn = (dataIn === undefined) ? "" : dataIn;
return controller.executeActionInsideJSNode(controller._onCallbackAction$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dataIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnCallbackAction");
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
Controller.prototype._onCallbackAction$Action = function (dataIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnCallbackAction");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.Layouts.AppManager_Events.OnCallbackAction$vars"))());
vars.value.dataInLocal = dataIn;
var jSONDeserializeAppManager_CallbackVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(UBT_AppManagerModel.AppManager_CallbackRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONDeserializeAppManager_CallbackVar = jSONDeserializeAppManager_CallbackVar;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:MhUcJsMXgUCEorJJ+26E7g:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA/NodesShownInESpaceTree.Zc0nnqHSIkKskvsDI7y_XA/ClientActions.MhUcJsMXgUCEorJJ+26E7g:SL_MzR+MHltAdSndeu3H_Q", "UBT_AppManager", "OnCallbackAction", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:o_ggiMqSXkSSCds0G+G2Gg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:xY0QZ6em1kG57c9eK_NoCQ", callContext.id);
// JSON Deserialize: JSONDeserializeAppManager_Callback
jSONDeserializeAppManager_CallbackVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.dataInLocal, UBT_AppManagerModel.AppManager_CallbackRec, false);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Yw8hRq2FkUmQY19Bv3bPgQ", callContext.id);
// Trigger Event: OnCallback
return controller.onCallback$Action(jSONDeserializeAppManager_CallbackVar.value.dataOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:tjx4OqKkUUiST41O7Ffuqw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:MhUcJsMXgUCEorJJ+26E7g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:MhUcJsMXgUCEorJJ+26E7g", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBT_AppManager.Layouts.AppManager_Events.OnCallbackAction$vars", [{
name: "Data",
attrName: "dataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
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
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:f+S9cSJo8EWYcJk1ngjWnA:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA/NodesShownInESpaceTree.Zc0nnqHSIkKskvsDI7y_XA/ClientActions.f+S9cSJo8EWYcJk1ngjWnA:yFJXsNJm+N+uk3_Ik7d1Eg", "UBT_AppManager", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9TDQjLlh_0u2caCatWscDA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:pmhhhkOF1EqUzXfdOLzmHA", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_Layouts_AppManager_Events_mvc_controller_OnDestroy_RunDestroyCallbacksJS, "RunDestroyCallbacks", "OnDestroy", {
DestroyCallback1: OS.DataConversion.JSNodeParamConverter.to(model.variables.destroyCallbackFunctionVar, OS.DataTypes.DataTypes.Object),
DestroyCallback2: OS.DataConversion.JSNodeParamConverter.to(model.variables.destroyCallbackFunction2Var, OS.DataTypes.DataTypes.Object),
DestroyCallback3: OS.DataConversion.JSNodeParamConverter.to(model.variables.destroyCallbackFunction3Var, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:BKaWPZ9HU067zsDlGzqhEA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:f+S9cSJo8EWYcJk1ngjWnA", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var appManager_JSUtils_CustomEvents_RegisterHandler3Var = new OS.DataTypes.VariableHolder();
var appManager_JSUtils_CustomEvents_RegisterHandler2Var = new OS.DataTypes.VariableHolder();
var appManager_JSUtils_CustomEvents_RegisterHandler4Var = new OS.DataTypes.VariableHolder();
var appManager_JSUtils_CustomEvents_RegisterHandler6Var = new OS.DataTypes.VariableHolder();
var appManager_JSUtils_CustomEvents_RegisterHandler5Var = new OS.DataTypes.VariableHolder();
var appManager_JSUtils_CustomEvents_RegisterHandler7Var = new OS.DataTypes.VariableHolder();
var appManager_JSUtils_CustomEvents_RegisterHandlerVar = new OS.DataTypes.VariableHolder();
var getHandlersJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.appManager_JSUtils_CustomEvents_RegisterHandler3Var = appManager_JSUtils_CustomEvents_RegisterHandler3Var;
varBag.appManager_JSUtils_CustomEvents_RegisterHandler2Var = appManager_JSUtils_CustomEvents_RegisterHandler2Var;
varBag.appManager_JSUtils_CustomEvents_RegisterHandler4Var = appManager_JSUtils_CustomEvents_RegisterHandler4Var;
varBag.appManager_JSUtils_CustomEvents_RegisterHandler6Var = appManager_JSUtils_CustomEvents_RegisterHandler6Var;
varBag.appManager_JSUtils_CustomEvents_RegisterHandler5Var = appManager_JSUtils_CustomEvents_RegisterHandler5Var;
varBag.appManager_JSUtils_CustomEvents_RegisterHandler7Var = appManager_JSUtils_CustomEvents_RegisterHandler7Var;
varBag.appManager_JSUtils_CustomEvents_RegisterHandlerVar = appManager_JSUtils_CustomEvents_RegisterHandlerVar;
varBag.getHandlersJSResult = getHandlersJSResult;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:bFJ358vPr0S8jqaAMYBNEw:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA/NodesShownInESpaceTree.Zc0nnqHSIkKskvsDI7y_XA/ClientActions.bFJ358vPr0S8jqaAMYBNEw:DPe2XP8uT1b6LsJTRZKCBA", "UBT_AppManager", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lvSXp+FULECilmSAP1mG1g", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:T22SZ6DUb0ex1AWEGQLwDg", callContext.id);
getHandlersJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_Layouts_AppManager_Events_mvc_controller_OnReady_GetHandlersJS, "GetHandlers", "OnReady", {
OnCallbackHandler: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.Layouts.AppManager_Events.OnReady$getHandlersJSResult"))();
jsNodeResult.onCallbackHandlerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnCallbackHandler, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OnCallbackAction: controller.clientActionProxies.onCallbackAction$Action
}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:G8H4__X0_E+x6PKpt_ndeA", callContext.id);
// Execute Action: AppManager_JSUtils_CustomEvents_RegisterHandler
appManager_JSUtils_CustomEvents_RegisterHandlerVar.value = UBT_AppManagerController.default.appManager_JSUtils_CustomEvents_RegisterHandler$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnLogin, getHandlersJSResult.value.onCallbackHandlerOut, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:0Pi3J9WMpkSJRBSjhl4JCw", callContext.id);
// Execute Action: AppManager_JSUtils_CustomEvents_RegisterHandler2
appManager_JSUtils_CustomEvents_RegisterHandler2Var.value = UBT_AppManagerController.default.appManager_JSUtils_CustomEvents_RegisterHandler$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnResetPassword, getHandlersJSResult.value.onCallbackHandlerOut, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:LI8ADs1AgEe0m18fIx+FuA", callContext.id);
// Execute Action: AppManager_JSUtils_CustomEvents_RegisterHandler3
appManager_JSUtils_CustomEvents_RegisterHandler3Var.value = UBT_AppManagerController.default.appManager_JSUtils_CustomEvents_RegisterHandler$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnCancelled, getHandlersJSResult.value.onCallbackHandlerOut, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:d1G6OkiJ9U+pz2uoOtCR0g", callContext.id);
// Execute Action: AppManager_JSUtils_CustomEvents_RegisterHandler4
appManager_JSUtils_CustomEvents_RegisterHandler4Var.value = UBT_AppManagerController.default.appManager_JSUtils_CustomEvents_RegisterHandler$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.pIN_NeedRegistration, getHandlersJSResult.value.onCallbackHandlerOut, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:6oB7Zx_nN0O0YvS+7rzbvw", callContext.id);
// Execute Action: AppManager_JSUtils_CustomEvents_RegisterHandler5
appManager_JSUtils_CustomEvents_RegisterHandler5Var.value = UBT_AppManagerController.default.appManager_JSUtils_CustomEvents_RegisterHandler$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnClose, getHandlersJSResult.value.onCallbackHandlerOut, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:qzp1m7FKuk613jppHrYVMg", callContext.id);
// Execute Action: AppManager_JSUtils_CustomEvents_RegisterHandler7
appManager_JSUtils_CustomEvents_RegisterHandler7Var.value = UBT_AppManagerController.default.appManager_JSUtils_CustomEvents_RegisterHandler$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.deviceAwareness_InvalidDevice, getHandlersJSResult.value.onCallbackHandlerOut, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:78_7WtLPG0uTwDaycKmqOg", callContext.id);
// Execute Action: AppManager_JSUtils_CustomEvents_RegisterHandler6
appManager_JSUtils_CustomEvents_RegisterHandler6Var.value = UBT_AppManagerController.default.appManager_JSUtils_CustomEvents_RegisterHandler$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnOffline, getHandlersJSResult.value.onCallbackHandlerOut, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JhO3FDKWPECkd8azFKYKPg", callContext.id);
// DestroyCallbackFunction = AppManager_JSUtils_CustomEvents_RegisterHandler.DestroyCallbackFunction
model.variables.destroyCallbackFunctionVar = appManager_JSUtils_CustomEvents_RegisterHandlerVar.value.destroyCallbackFunctionOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JhO3FDKWPECkd8azFKYKPg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// DestroyCallbackFunction2 = AppManager_JSUtils_CustomEvents_RegisterHandler2.DestroyCallbackFunction
model.variables.destroyCallbackFunction2Var = appManager_JSUtils_CustomEvents_RegisterHandler2Var.value.destroyCallbackFunctionOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JhO3FDKWPECkd8azFKYKPg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// DestroyCallbackFunction3 = AppManager_JSUtils_CustomEvents_RegisterHandler3.DestroyCallbackFunction
model.variables.destroyCallbackFunction3Var = appManager_JSUtils_CustomEvents_RegisterHandler3Var.value.destroyCallbackFunctionOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:W+qquBlI2EWNOZzDBkTKrA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:bFJ358vPr0S8jqaAMYBNEw", callContext.id);
}

};
Controller.registerVariableGroupType("UBT_AppManager.Layouts.AppManager_Events.OnReady$getHandlersJSResult", [{
name: "OnCallbackHandler",
attrName: "onCallbackHandlerOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.onCallbackAction$Action = function (dataIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onCallbackAction$Action, callContext, dataIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onCallback$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:h5vDTMuLX06AWEdKRweFvA:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA:so2fj9w2wVuvSR_QF9mkRw", "UBT_AppManager", "Layouts", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:Zc0nnqHSIkKskvsDI7y_XA:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA/NodesShownInESpaceTree.Zc0nnqHSIkKskvsDI7y_XA:3AB13PYf2a6u2CWaGTwT4Q", "UBT_AppManager", "AppManager_Events", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Zc0nnqHSIkKskvsDI7y_XA", callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:h5vDTMuLX06AWEdKRweFvA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/AppManager_Events On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/AppManager_Events On Destroy");
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
define("UBT_AppManager.Layouts.AppManager_Events.mvc$controller.OnDestroy.RunDestroyCallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.DestroyCallback1();
$parameters.DestroyCallback2();
$parameters.DestroyCallback3();
};
});
define("UBT_AppManager.Layouts.AppManager_Events.mvc$controller.OnReady.GetHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.OnCallbackHandler = $actions.OnCallbackAction;
};
});

define("UBT_AppManager.Layouts.AppManager_Events.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"bKr46LzLiEa42BmS0SBR2w": {
getter: function (varBag, idService) {
return varBag.vars.value.dataInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xY0QZ6em1kG57c9eK_NoCQ": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeAppManager_CallbackVar.value;
}
},
"pmhhhkOF1EqUzXfdOLzmHA": {
getter: function (varBag, idService) {
return varBag.runDestroyCallbacksJSResult.value;
}
},
"LI8ADs1AgEe0m18fIx+FuA": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_CustomEvents_RegisterHandler3Var.value;
}
},
"0Pi3J9WMpkSJRBSjhl4JCw": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_CustomEvents_RegisterHandler2Var.value;
}
},
"d1G6OkiJ9U+pz2uoOtCR0g": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_CustomEvents_RegisterHandler4Var.value;
}
},
"78_7WtLPG0uTwDaycKmqOg": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_CustomEvents_RegisterHandler6Var.value;
}
},
"6oB7Zx_nN0O0YvS+7rzbvw": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_CustomEvents_RegisterHandler5Var.value;
}
},
"qzp1m7FKuk613jppHrYVMg": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_CustomEvents_RegisterHandler7Var.value;
}
},
"G8H4__X0_E+x6PKpt_ndeA": {
getter: function (varBag, idService) {
return varBag.appManager_JSUtils_CustomEvents_RegisterHandlerVar.value;
}
},
"T22SZ6DUb0ex1AWEGQLwDg": {
getter: function (varBag, idService) {
return varBag.getHandlersJSResult.value;
}
},
"NworDwcoYEGWKPQ+4B31mA": {
getter: function (varBag, idService) {
return varBag.model.variables.destroyCallbackFunctionVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"s6RR4__XlkCFTxMA1xjV_A": {
getter: function (varBag, idService) {
return varBag.model.variables.destroyCallbackFunction2Var;
},
dataType: OS.DataTypes.DataTypes.Object
},
"lCI0YTtRe0yX9n5RevJlNA": {
getter: function (varBag, idService) {
return varBag.model.variables.destroyCallbackFunction3Var;
},
dataType: OS.DataTypes.DataTypes.Object
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
