define("PanZoom.PanZoom.PanZoom.mvc$model", ["OutSystems/ClientRuntime/Main", "PanZoom.model"], function (OutSystems, PanZoomModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("DoubleClickEnablesZoom", "doubleClickEnablesZoomIn", "DoubleClickEnablesZoom", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_doubleClickEnablesZoomInDataFetchStatus", "_doubleClickEnablesZoomInDataFetchStatus", "_doubleClickEnablesZoomInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

if("DoubleClickEnablesZoom" in inputs) {
this.variables.doubleClickEnablesZoomIn = inputs.DoubleClickEnablesZoom;
if("_doubleClickEnablesZoomInDataFetchStatus" in inputs) {
this.variables._doubleClickEnablesZoomInDataFetchStatus = inputs._doubleClickEnablesZoomInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "PanZoom.PanZoom");
});
define("PanZoom.PanZoom.PanZoom.mvc$view", ["OutSystems/ClientRuntime/Main", "PanZoom.model", "PanZoom.controller", "react", "OutSystems/ReactView/Main", "PanZoom.PanZoom.PanZoom.mvc$model", "PanZoom.PanZoom.PanZoom.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, PanZoomModel, PanZoomController, React, OSView, PanZoom_PanZoom_PanZoom_mvc_model, PanZoom_PanZoom_PanZoom_mvc_controller, OSWidgets) {
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
        View.displayName = "PanZoom.PanZoom";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/PanZoom.anvaka_panzoom_js.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return PanZoom_PanZoom_PanZoom_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return PanZoom_PanZoom_PanZoom_mvc_controller;
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
style: model.variables.extendedClassIn,
visible: true,
_idProps: {
service: idService,
name: "Zoomable"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.image,
_idProps: {
service: idService,
name: "Image"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("PanZoom.PanZoom.PanZoom.mvc$controller", ["OutSystems/ClientRuntime/Main", "PanZoom.model", "PanZoom.controller", "PanZoom.languageResources", "PanZoom.PanZoom.PanZoom.mvc$debugger", "PanZoom.PanZoom.PanZoom.mvc$controller.OnReady.JavaScript1JS"], function (OutSystems, PanZoomModel, PanZoomController, PanZoomLanguageResources, PanZoom_PanZoom_PanZoom_mvc_Debugger, PanZoom_PanZoom_PanZoom_mvc_controller_OnReady_JavaScript1JS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
triggerMinZoomReached$Action: function () {
return controller.executeActionInsideJSNode(controller._triggerMinZoomReached$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerMinZoomReached");
},
triggerZoomIn$Action: function () {
return controller.executeActionInsideJSNode(controller._triggerZoomIn$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerZoomIn");
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
Controller.prototype._triggerZoomIn$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerZoomIn");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("bBDmnxSZf02jxO6zsXmr6A:QuoTSTeenkqhYdW13nGbLA:/NRWebFlows.eHAqFwYUYEi5jzc+NTnLGw/NodesShownInESpaceTree.7Rn87cKoVk2NPRZDNniJxQ/ClientActions.QuoTSTeenkqhYdW13nGbLA:pBRZiVgJe1vByrGHo4RTkw", "PanZoom", "TriggerZoomIn", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("bBDmnxSZf02jxO6zsXmr6A:tXPUjCD_QE+3RWt1MsGM4w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("bBDmnxSZf02jxO6zsXmr6A:LdIvsHL_lU2PJM4BFn4T1A", callContext.id);
// Trigger Event: ZoomIn
return controller.zoomIn$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("bBDmnxSZf02jxO6zsXmr6A:PaIp4WZBwUimBmF4Gnsvbg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("bBDmnxSZf02jxO6zsXmr6A:QuoTSTeenkqhYdW13nGbLA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("bBDmnxSZf02jxO6zsXmr6A:QuoTSTeenkqhYdW13nGbLA", callContext.id);
throw ex;

});
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("bBDmnxSZf02jxO6zsXmr6A:iHFpgg7OokCfMcDA3_q2bg:/NRWebFlows.eHAqFwYUYEi5jzc+NTnLGw/NodesShownInESpaceTree.7Rn87cKoVk2NPRZDNniJxQ/ClientActions.iHFpgg7OokCfMcDA3_q2bg:Kxv6lhuQCMfGc7ZAjhaSfg", "PanZoom", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("bBDmnxSZf02jxO6zsXmr6A:N0qobfhxdESugqWIY5Rjkw", callContext.id);
OutSystemsDebugger.handleBreakpoint("bBDmnxSZf02jxO6zsXmr6A:DeeKAqw4lEa48FMeAkjC7g", callContext.id);
controller.safeExecuteJSNode(PanZoom_PanZoom_PanZoom_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
Id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Zoomable"), OS.DataTypes.DataTypes.Text),
DoubleClickEnablesZoom: OS.DataConversion.JSNodeParamConverter.to(model.variables.doubleClickEnablesZoomIn, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
}, {
TriggerMinZoomReached: controller.clientActionProxies.triggerMinZoomReached$Action,
TriggerZoomIn: controller.clientActionProxies.triggerZoomIn$Action
}, {});
OutSystemsDebugger.handleBreakpoint("bBDmnxSZf02jxO6zsXmr6A:wOgwDbb50Uyaxh1CMmctcg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("bBDmnxSZf02jxO6zsXmr6A:iHFpgg7OokCfMcDA3_q2bg", callContext.id);
}

};
Controller.prototype._triggerMinZoomReached$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerMinZoomReached");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("bBDmnxSZf02jxO6zsXmr6A:TBLNpuyOoE+vdCrMJDV+Eg:/NRWebFlows.eHAqFwYUYEi5jzc+NTnLGw/NodesShownInESpaceTree.7Rn87cKoVk2NPRZDNniJxQ/ClientActions.TBLNpuyOoE+vdCrMJDV+Eg:8A4Yd3W7qLuj1mHz1_Sm7A", "PanZoom", "TriggerMinZoomReached", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("bBDmnxSZf02jxO6zsXmr6A:xgehSYK+fU+rSU1tQlIzyA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("bBDmnxSZf02jxO6zsXmr6A:OEEXzk4150egM2GVsdufuA", callContext.id);
// Trigger Event: MinZoomReachedoomMinReached
return controller.minZoomReached$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("bBDmnxSZf02jxO6zsXmr6A:Sp3vs6geK0O4+kG1cRZeCA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("bBDmnxSZf02jxO6zsXmr6A:TBLNpuyOoE+vdCrMJDV+Eg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("bBDmnxSZf02jxO6zsXmr6A:TBLNpuyOoE+vdCrMJDV+Eg", callContext.id);
throw ex;

});
};

Controller.prototype.triggerZoomIn$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerZoomIn$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.triggerMinZoomReached$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerMinZoomReached$Action, callContext);

};
Controller.prototype.zoomIn$Action = function () {
return Promise.resolve();
};
Controller.prototype.minZoomReached$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("bBDmnxSZf02jxO6zsXmr6A:eHAqFwYUYEi5jzc+NTnLGw:/NRWebFlows.eHAqFwYUYEi5jzc+NTnLGw:UN9PjycsTh5ZP4MSeZ8D0g", "PanZoom", "PanZoom", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("bBDmnxSZf02jxO6zsXmr6A:7Rn87cKoVk2NPRZDNniJxQ:/NRWebFlows.eHAqFwYUYEi5jzc+NTnLGw/NodesShownInESpaceTree.7Rn87cKoVk2NPRZDNniJxQ:5JonWU_TdLSvMJDfhNxPAA", "PanZoom", "PanZoom", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("bBDmnxSZf02jxO6zsXmr6A:7Rn87cKoVk2NPRZDNniJxQ", callContext.id);
OutSystemsDebugger.pop("bBDmnxSZf02jxO6zsXmr6A:eHAqFwYUYEi5jzc+NTnLGw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "PanZoom/PanZoom On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return PanZoomController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, PanZoomLanguageResources);
});
define("PanZoom.PanZoom.PanZoom.mvc$controller.OnReady.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var area = document.getElementById($parameters.Id);

panzoom(area, {
  maxZoom: 3,
  minZoom: 1,
  bounds: true,
  boundsPadding: 1,
  onTouch: function(e) {
    return false; // tells the library to not preventDefault.
  },
  triggerMinZoomReached: function() {$actions.TriggerMinZoomReached()},
  triggerZoomIn: function(){$actions.TriggerZoomIn()},
  doubleClickEnablesZoom: $parameters.DoubleClickEnablesZoom
}) 
};
});

define("PanZoom.PanZoom.PanZoom.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"DeeKAqw4lEa48FMeAkjC7g": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"5jnpk4VvG0GKWiEMTzNkUA": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5UABg4XWeEmMd+lyl72dTA": {
getter: function (varBag, idService) {
return varBag.model.variables.doubleClickEnablesZoomIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"L8ZNu3UI1kmiymxFUi5cWA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Zoomable"));
})(varBag.model, idService);
}
},
"nkyQ5z3960yvmQtKAEmHZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Image"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
