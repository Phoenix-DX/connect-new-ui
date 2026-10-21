define("Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (OutSystems, Connect2_LegacySharedModel) {
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
return new OS.Model.ModelFactory(Model, "Widgets.MultiResolutionImageLoader");
});
define("Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc$model", "Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Widgets_MultiResolutionImageLoader_mvc_model, Connect2_LegacyShared_Widgets_MultiResolutionImageLoader_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Widgets.MultiResolutionImageLoader";
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
                return Connect2_LegacyShared_Widgets_MultiResolutionImageLoader_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Widgets_MultiResolutionImageLoader_mvc_controller;
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
style: "multi-resolution-image-loader multi-resolution-image-loader-loading",
visible: true,
_idProps: {
service: idService,
name: "Root"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.loading,
_idProps: {
service: idService,
name: "Loading"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.imagesToLoad,
_idProps: {
service: idService,
name: "ImagesToLoad"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc$debugger", "Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc$controller.OnReady.InitializeJS"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Widgets_MultiResolutionImageLoader_mvc_Debugger, Connect2_LegacyShared_Widgets_MultiResolutionImageLoader_mvc_controller_OnReady_InitializeJS) {
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
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:di0ad8deKEqIzSEiq4hAuQ:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.Xe4icLU_jku4NdqcKEVeAw/ClientActions.di0ad8deKEqIzSEiq4hAuQ:cOrBAdVfy0_CcQ+eZRFU9Q", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:m3bRuUssLUmLf1FLYDKcXA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UZf46xn7zkmOJaddu+yv0g", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_Widgets_MultiResolutionImageLoader_mvc_controller_OnReady_InitializeJS, "Initialize", "OnReady", {
RootWidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Root"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:USTDU6b6M0aQqJSaZ3XRmA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:di0ad8deKEqIzSEiq4hAuQ", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:kPWBbd+opEC3rMN6byDyUQ:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ:hPUCrJAnBlRVqA2UZwyBjg", "Connect2_LegacyShared", "Widgets", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Xe4icLU_jku4NdqcKEVeAw:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.Xe4icLU_jku4NdqcKEVeAw:J9ifVBPXcapBVWXj0fSs1A", "Connect2_LegacyShared", "MultiResolutionImageLoader", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Xe4icLU_jku4NdqcKEVeAw", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:kPWBbd+opEC3rMN6byDyUQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Widgets/MultiResolutionImageLoader On Ready");
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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc$controller.OnReady.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var root = document.getElementById($parameters.RootWidgetId);
var container = root.lastChild;

var onload = function(evt) {
    if (!evt.target.getAttribute("src")) {
        // Ignore load events if the image has no src attribute
        return;
    }

    root.classList.remove("multi-resolution-image-loader-loading");
    root.classList.add("multi-resolution-image-loader-loaded");

    var images = container.querySelectorAll("img");
    var lastLoaded = null;
    for (var img of images) {
        img.classList.remove("multi-resolution-image-loader-loaded");
        if (img.complete) {
            lastLoaded = img;
        }
    }
    lastLoaded.classList.add("multi-resolution-image-loader-loaded");
};

container.addEventListener("load", onload, { capture: true });

var images = container.querySelectorAll("img");
for (var img of images) {
    if (img.complete) {
        onload({ target: img });
    }
}
};
});

define("Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"UZf46xn7zkmOJaddu+yv0g": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"DvtEhNBwokSbV+FbMZKztQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Root"));
})(varBag.model, idService);
}
},
"zciWiJJCqEGYkZ_ykdtohQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Loading"));
})(varBag.model, idService);
}
},
"ZNP0IV7WB0updBzGYqw1Tw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ImagesToLoad"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
