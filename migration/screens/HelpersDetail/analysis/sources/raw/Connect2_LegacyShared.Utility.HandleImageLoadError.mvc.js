define("Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_LegacyShared.model$ImageErrorEventInfoRec"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
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
return new OS.Model.ModelFactory(Model, "Utility.HandleImageLoadError");
});
define("Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$model", "Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_LegacyShared.model$ImageErrorEventInfoRec"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_model, Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Utility.HandleImageLoadError";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "ImageLoadErrorHandler"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(false, false, this, function () {
return [];
}, function () {
return [];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$debugger", "Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$controller.OnReady.Error_EventListenerJS", "Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_LegacyShared.model$ImageErrorEventInfoRec"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_Debugger, Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_controller_OnReady_Error_EventListenerJS, Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_controller_OnDestroy_ExecuteDestroyCallbackJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
applicationEvent_ImageError$Action: function (elementIdIn, errorURLIn, isOnlineIn) {
elementIdIn = (elementIdIn === undefined) ? "" : elementIdIn;
errorURLIn = (errorURLIn === undefined) ? "" : errorURLIn;
isOnlineIn = (isOnlineIn === undefined) ? false : isOnlineIn;
return controller.executeActionInsideJSNode(controller._applicationEvent_ImageError$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(elementIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(errorURLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isOnlineIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "ApplicationEvent_ImageError");
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
Controller.prototype._applicationEvent_ImageError$Action = function (elementIdIn, errorURLIn, isOnlineIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ApplicationEvent_ImageError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Utility.HandleImageLoadError.ApplicationEvent_ImageError$vars"))());
vars.value.elementIdInLocal = elementIdIn;
vars.value.errorURLInLocal = errorURLIn;
vars.value.isOnlineInLocal = isOnlineIn;
var eventInfoJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.eventInfoJSONVar = eventInfoJSONVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:YcpmlK9FcEeTmdCUKx9xBQ:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.aC8_a_p_cUKcJXg65eyU9w/ClientActions.YcpmlK9FcEeTmdCUKx9xBQ:hCUfxCT0NceIFdVpDG9Jzg", "Connect2_LegacyShared", "ApplicationEvent_ImageError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0cHu7OntAkObhPsZIud4YA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PQ20m+uOnUuJoRVXnBJBIQ", callContext.id);
// EventInfo.Element = ElementId
vars.value.eventInfoVar.elementAttr = vars.value.elementIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PQ20m+uOnUuJoRVXnBJBIQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EventInfo.URL = ErrorURL
vars.value.eventInfoVar.uRLAttr = vars.value.errorURLInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PQ20m+uOnUuJoRVXnBJBIQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// EventInfo.IsOffline = notIsOnline
vars.value.eventInfoVar.isOfflineAttr = !(vars.value.isOnlineInLocal);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:uaBpMcFutEmS+q2ypLOZzw", callContext.id);
// JSON Serialize: EventInfoJSON
eventInfoJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.eventInfoVar, false, false);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zHb6VQE8v0+XUgkaQ_5v9Q", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
model.flush();
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory.errorFromPhotoView, eventInfoJSONVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tc080lC4bEmWyW1LX8DUIg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:YcpmlK9FcEeTmdCUKx9xBQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:YcpmlK9FcEeTmdCUKx9xBQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.Utility.HandleImageLoadError.ApplicationEvent_ImageError$vars", [{
name: "ElementId",
attrName: "elementIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorURL",
attrName: "errorURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsOnline",
attrName: "isOnlineInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "EventInfo",
attrName: "eventInfoVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.ImageErrorEventInfoRec();
},
complexType: Connect2_LegacySharedModel.ImageErrorEventInfoRec
}]);
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var error_EventListenerJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.error_EventListenerJSResult = error_EventListenerJSResult;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:CgGepaiwIkWINkNW+oxYZQ:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.aC8_a_p_cUKcJXg65eyU9w/ClientActions.CgGepaiwIkWINkNW+oxYZQ:P+DYhmsXfwdmDXrK33dCkw", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:K0iek9I+yE6t2PqwInDPhg", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Ci_y05mmTEGyjaVECjLUVA", callContext.id);
error_EventListenerJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_controller_OnReady_Error_EventListenerJS, "Error_EventListener", "OnReady", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ImageLoadErrorHandler"), OS.DataTypes.DataTypes.Text),
Default_Placeholder_URL: OS.DataConversion.JSNodeParamConverter.to(OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png"), OS.DataTypes.DataTypes.Text),
DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Utility.HandleImageLoadError.OnReady$error_EventListenerJSResult"))();
jsNodeResult.destroyCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DestroyCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
ApplicationEvent_ImageError: controller.clientActionProxies.applicationEvent_ImageError$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EZNrZVe_zUCgyzmKsb1dYg", callContext.id);
// DestroyCallback = Error_EventListener.DestroyCallback
model.variables.destroyCallbackVar = error_EventListenerJSResult.value.destroyCallbackOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+XryV7+_A0ih_QTAXwyGYQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:CgGepaiwIkWINkNW+oxYZQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_LegacyShared.Utility.HandleImageLoadError.OnReady$error_EventListenerJSResult", [{
name: "DestroyCallback",
attrName: "destroyCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
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
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Tz1QylzH0Uukug6kussoIQ:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.aC8_a_p_cUKcJXg65eyU9w/ClientActions.Tz1QylzH0Uukug6kussoIQ:BMEYFjjqBrC6c_I0z0vdUA", "Connect2_LegacyShared", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:L0VcDaEF_UmTUIfHlhNJXw", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CUPAs8GnhkKsAqs_4Y1yYg", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_controller_OnDestroy_ExecuteDestroyCallbackJS, "ExecuteDestroyCallback", "OnDestroy", {
DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(model.variables.destroyCallbackVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6X4uXKg_LUO3mlF_bFgl+Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Tz1QylzH0Uukug6kussoIQ", callContext.id);
}

};

Controller.prototype.applicationEvent_ImageError$Action = function (elementIdIn, errorURLIn, isOnlineIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._applicationEvent_ImageError$Action, callContext, elementIdIn, errorURLIn, isOnlineIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw:y4OEvNt9FV7g_od25DYkmA", "Connect2_LegacyShared", "Utility", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:aC8_a_p_cUKcJXg65eyU9w:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.aC8_a_p_cUKcJXg65eyU9w:LbsbE98e_ikNsrqD687Zqg", "Connect2_LegacyShared", "HandleImageLoadError", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:aC8_a_p_cUKcJXg65eyU9w", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utility/HandleImageLoadError On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utility/HandleImageLoadError On Destroy");
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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$controller.OnReady.Error_EventListenerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var destroyed = false;

var placeholder = function(img) {
    var placeholderAttribute = img.getAttribute("data-error-placeholder-src");
    return placeholderAttribute || $parameters.Default_Placeholder_URL;
};

var onError = function(evt) {
    if (!destroyed && evt.target.tagName == "IMG") {
        var id =  evt.target.closest("[id]").id;
        var errorURL = evt.target.getAttribute("src");
        var placeholderURL = placeholder(evt.target);

        // Prevent an infinite loop, if the placeholder url itself fails loading
        if (errorURL && errorURL != placeholderURL) {
            evt.target.src = placeholderURL;
            $actions.ApplicationEvent_ImageError(id, errorURL, window.navigator.onLine);
        }
    }
};

var root = document.getElementById($parameters.WidgetId);
var screen = root.closest(".screen");
if (screen) screen.addEventListener("error", onError, true);    




$parameters.DestroyCallback = function() {
    if (screen)  screen.removeEventListener("error", onError, true);
    destroyed = true;
};
};
});
define("Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.DestroyCallback) {
    $parameters.DestroyCallback();
}
};
});

define("Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"laedC4SJoU6sFcC8zoauVg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventInfoVar;
}
},
"lLUGbyK7f0GsClZuxA3AzA": {
getter: function (varBag, idService) {
return varBag.vars.value.elementIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Esj6My+7N0a+sHwqNYsKRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.errorURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"d0DepjjwwEuhnSylR12_FA": {
getter: function (varBag, idService) {
return varBag.vars.value.isOnlineInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"uaBpMcFutEmS+q2ypLOZzw": {
getter: function (varBag, idService) {
return varBag.eventInfoJSONVar.value;
}
},
"Ci_y05mmTEGyjaVECjLUVA": {
getter: function (varBag, idService) {
return varBag.error_EventListenerJSResult.value;
}
},
"CUPAs8GnhkKsAqs_4Y1yYg": {
getter: function (varBag, idService) {
return varBag.executeDestroyCallbackJSResult.value;
}
},
"MGQBPXOli0OgIKC6vrZ1AA": {
getter: function (varBag, idService) {
return varBag.model.variables.destroyCallbackVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"2mQ6CirwM0m5ejdjbWQBNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ImageLoadErrorHandler"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
