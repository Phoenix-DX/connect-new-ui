define("EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$model", ["OutSystems/ClientRuntime/Main", "EventfulDeeplinksPlugin.model", "CommonPlugin.model", "EventfulDeeplinksPlugin.controller", "CommonPlugin.model$ErrorRec", "EventfulDeeplinksPlugin.referencesHealth", "EventfulDeeplinksPlugin.referencesHealth$CommonPlugin", "EventfulDeeplinksPlugin.controller$CheckEventfulDeekplinksPlugin"], function (OutSystems, EventfulDeeplinksPluginModel, CommonPluginModel, EventfulDeeplinksPluginController) {
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
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "EventfulDeeplinksPlugin.DeeplinkHandlerCentral");
});
define("EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$view", ["OutSystems/ClientRuntime/Main", "EventfulDeeplinksPlugin.model", "EventfulDeeplinksPlugin.controller", "CommonPlugin.model", "react", "OutSystems/ReactView/Main", "EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$model", "EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller", "CommonPlugin.model$ErrorRec", "EventfulDeeplinksPlugin.referencesHealth", "EventfulDeeplinksPlugin.referencesHealth$CommonPlugin", "EventfulDeeplinksPlugin.controller$CheckEventfulDeekplinksPlugin"], function (OutSystems, EventfulDeeplinksPluginModel, EventfulDeeplinksPluginController, CommonPluginModel, React, OSView, EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_model, EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_controller) {
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
        View.displayName = "EventfulDeeplinksPlugin.DeeplinkHandlerCentral";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return ["scripts/CommonPlugin.PluginManager.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_controller;
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
define("EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller", ["OutSystems/ClientRuntime/Main", "EventfulDeeplinksPlugin.model", "EventfulDeeplinksPlugin.controller", "CommonPlugin.model", "EventfulDeeplinksPlugin.languageResources", "EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$debugger", "EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnDestroy.UnregisterPluginJS", "EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnReady.RegisterPluginJS", "CommonPlugin.model$ErrorRec", "EventfulDeeplinksPlugin.referencesHealth", "EventfulDeeplinksPlugin.referencesHealth$CommonPlugin", "EventfulDeeplinksPlugin.controller$CheckEventfulDeekplinksPlugin"], function (OutSystems, EventfulDeeplinksPluginModel, EventfulDeeplinksPluginController, CommonPluginModel, EventfulDeeplinksPluginLanguageResources, EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_Debugger, EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_controller_OnDestroy_UnregisterPluginJS, EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_controller_OnReady_RegisterPluginJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
handleOpenUrl$Action: function (uRLIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
return controller.executeActionInsideJSNode(controller._handleOpenUrl$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "HandleOpenUrl");
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
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
var checkEventfulDeekplinksPluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkEventfulDeekplinksPluginVar = checkEventfulDeekplinksPluginVar;
OutSystemsDebugger.push("vjEltHeTkECa4288CO703w:foX9VM9cYE+7+LPS8uzQhQ:/NRWebFlows.UKL7NFNWWkKVkoD3VZiNFw/NodesShownInESpaceTree.ZBdmnkALOUKCxog0p_K2eQ/ClientActions.foX9VM9cYE+7+LPS8uzQhQ:vn4EyZBLbqGmQ+k7a78LgQ", "EventfulDeeplinksPlugin", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:0Xt3JmaBdE6qrj_+ABCTEw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:EghI_sls50m63Zjmlfxl9g", callContext.id);
// Execute Action: CheckEventfulDeekplinksPlugin
checkEventfulDeekplinksPluginVar.value = EventfulDeeplinksPluginController.default.checkEventfulDeekplinksPlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:x1G2V50FMUGr+YtzmgMPAQ", callContext.id) && checkEventfulDeekplinksPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:nHVIkL8KmEGkiQiZGW9qmg", callContext.id);
return controller.safeExecuteAsyncJSNode(EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_controller_OnDestroy_UnregisterPluginJS, "UnregisterPlugin", "OnDestroy", null, function ($parameters) {
}, {}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:mwOLF5aJg0yq3tMWWMxswA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:4IHM0ycXkUSnp+23dSulLQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:foX9VM9cYE+7+LPS8uzQhQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:foX9VM9cYE+7+LPS8uzQhQ", callContext.id);
throw ex;

});
};
Controller.prototype._handleOpenUrl$Action = function (uRLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HandleOpenUrl");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.HandleOpenUrl$vars"))());
vars.value.uRLInLocal = uRLIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("vjEltHeTkECa4288CO703w:uY+dV5F8OU29kwTgAOXYMQ:/NRWebFlows.UKL7NFNWWkKVkoD3VZiNFw/NodesShownInESpaceTree.ZBdmnkALOUKCxog0p_K2eQ/ClientActions.uY+dV5F8OU29kwTgAOXYMQ:StU2Q1K_6nfgMLqaO53a8A", "EventfulDeeplinksPlugin", "HandleOpenUrl", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:YCZ1kyeZf0CXnuNuQSq5+A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:62lxmMK2ZkmZpSnO_ZE7+w", callContext.id);
// Trigger Event: OnDeeplinkOpen
return controller.onDeeplinkOpen$Action(vars.value.uRLInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:+YM8TR0FSEyW+Hp4F7UkJQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:uY+dV5F8OU29kwTgAOXYMQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:uY+dV5F8OU29kwTgAOXYMQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.HandleOpenUrl$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
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
var checkEventfulDeekplinksPluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkEventfulDeekplinksPluginVar = checkEventfulDeekplinksPluginVar;
OutSystemsDebugger.push("vjEltHeTkECa4288CO703w:eAs3l5My80aAOsg_xkYDJg:/NRWebFlows.UKL7NFNWWkKVkoD3VZiNFw/NodesShownInESpaceTree.ZBdmnkALOUKCxog0p_K2eQ/ClientActions.eAs3l5My80aAOsg_xkYDJg:SQIcdxBQZkatRrggYFzcgg", "EventfulDeeplinksPlugin", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:ry0aZWZxaUu6r7Xw07GKnA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:Y6tMwQ1sS0ie340ZPWfxWw", callContext.id);
// Execute Action: CheckEventfulDeekplinksPlugin
checkEventfulDeekplinksPluginVar.value = EventfulDeeplinksPluginController.default.checkEventfulDeekplinksPlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:eK8qj9oaEUe2D77lduwBTg", callContext.id) && checkEventfulDeekplinksPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:CqcaawZlIk2R5IIkpYqzTQ", callContext.id);
return controller.safeExecuteAsyncJSNode(EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_controller_OnReady_RegisterPluginJS, "RegisterPlugin", "OnReady", null, function ($parameters) {
}, {
HandleOpenUrl: controller.clientActionProxies.handleOpenUrl$Action
}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:RYL7Qo8FUESveJjaURboMA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:Mgs4PwoSr0WCsN2YsTqgDQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:eAs3l5My80aAOsg_xkYDJg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:eAs3l5My80aAOsg_xkYDJg", callContext.id);
throw ex;

});
};

Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.handleOpenUrl$Action = function (uRLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handleOpenUrl$Action, callContext, uRLIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onDeeplinkOpen$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("vjEltHeTkECa4288CO703w:UKL7NFNWWkKVkoD3VZiNFw:/NRWebFlows.UKL7NFNWWkKVkoD3VZiNFw:b3f7gNcxD2cqwr3MC5IGxA", "EventfulDeeplinksPlugin", "EventfulDeeplinksPlugin", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("vjEltHeTkECa4288CO703w:ZBdmnkALOUKCxog0p_K2eQ:/NRWebFlows.UKL7NFNWWkKVkoD3VZiNFw/NodesShownInESpaceTree.ZBdmnkALOUKCxog0p_K2eQ:H5+ZdPyR84TVBqoR4bXAzw", "EventfulDeeplinksPlugin", "DeeplinkHandlerCentral", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:ZBdmnkALOUKCxog0p_K2eQ", callContext.id);
OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:UKL7NFNWWkKVkoD3VZiNFw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "EventfulDeeplinksPlugin/DeeplinkHandlerCentral On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "EventfulDeeplinksPlugin/DeeplinkHandlerCentral On Destroy");
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
return EventfulDeeplinksPluginController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, EventfulDeeplinksPluginLanguageResources);
});
define("EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnDestroy.UnregisterPluginJS", [], function () {
return function ($actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
require(["PluginManager"], function(module){
    var scope = module.scope("EventfulDeeplinksPlugin");
    if( scope !== undefined) {
        module.destroyScope("EventfulDeeplinksPlugin");
    }
    $resolve();
});
});
};
});
define("EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$controller.OnReady.RegisterPluginJS", [], function () {
return function ($actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
require(["PluginManager"], function(plugManager){
    if(!cordova.channel) {
        cordova.channel = cordova.require("cordova/channel");
    }
    var channel = cordova.channel;
    var onReady = function(scope) {
        scope.handleOpenURLChannelHandler = scope.newCallback(function(url){
            $actions.HandleOpenUrl(url);
        });
        channel.eventfulHandleOpenURLChannel.subscribe(scope.handleOpenURLChannelHandler);
    };
    
    var onDestroy = function(scope) {
        channel.eventfulHandleOpenURLChannel.unsubscribe(scope.handleOpenURLChannelHandler);
    };
    
    plugManager.createScope("EventfulDeeplinksPlugin",  onReady, onDestroy);
    $resolve();
});
});
};
});

define("EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"EghI_sls50m63Zjmlfxl9g": {
getter: function (varBag, idService) {
return varBag.checkEventfulDeekplinksPluginVar.value;
}
},
"nHVIkL8KmEGkiQiZGW9qmg": {
getter: function (varBag, idService) {
return varBag.unregisterPluginJSResult.value;
}
},
"XCo3n21ptESIEkKHcjyudQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Y6tMwQ1sS0ie340ZPWfxWw": {
getter: function (varBag, idService) {
return varBag.checkEventfulDeekplinksPluginVar.value;
}
},
"CqcaawZlIk2R5IIkpYqzTQ": {
getter: function (varBag, idService) {
return varBag.registerPluginJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
