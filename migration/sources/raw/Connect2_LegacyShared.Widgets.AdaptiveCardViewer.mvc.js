define("Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model$HostConfigRec", "Connect2_LegacyShared.controller$IsJsonValid"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_AdaptiveCardJson", "in_AdaptiveCardJsonIn", "In_AdaptiveCardJson", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_AdaptiveCardJsonInDataFetchStatus", "_in_AdaptiveCardJsonInDataFetchStatus", "_in_AdaptiveCardJsonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostConfig", "in_HostConfigIn", "In_HostConfig", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfigRec());
}, false, Connect2_LegacySharedModel.HostConfigRec), 
this.attr("_in_HostConfigInDataFetchStatus", "_in_HostConfigInDataFetchStatus", "_in_HostConfigInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_AdaptiveCardJson" in inputs) {
this.variables.in_AdaptiveCardJsonIn = inputs.In_AdaptiveCardJson;
if("_in_AdaptiveCardJsonInDataFetchStatus" in inputs) {
this.variables._in_AdaptiveCardJsonInDataFetchStatus = inputs._in_AdaptiveCardJsonInDataFetchStatus;
}

}

if("In_HostConfig" in inputs) {
this.variables.in_HostConfigIn = inputs.In_HostConfig;
if("_in_HostConfigInDataFetchStatus" in inputs) {
this.variables._in_HostConfigInDataFetchStatus = inputs._in_HostConfigInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Widgets.AdaptiveCardViewer");
});
define("Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$model", "Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.model$HostConfigRec", "Connect2_LegacyShared.controller$IsJsonValid"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_model, Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Widgets.AdaptiveCardViewer";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/Connect2_LegacyShared.Widgets.AdaptiveCardViewer.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_LegacyShared.AdaptiveCards.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "AdaptiveCardContainer"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$debugger", "Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$controller.RenderAdaptiveCardAction.RenderAdaptiveCardJS", "Connect2_LegacyShared.model$HostConfigRec", "Connect2_LegacyShared.controller$IsJsonValid"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_Debugger, Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_controller_RenderAdaptiveCardAction_RenderAdaptiveCardJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onExecuteAction_JSBinder$Action: function (actionIdIn, formPayloadIn) {
actionIdIn = (actionIdIn === undefined) ? "" : actionIdIn;
formPayloadIn = (formPayloadIn === undefined) ? "" : formPayloadIn;
return controller.executeActionInsideJSNode(controller._onExecuteAction_JSBinder$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(actionIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(formPayloadIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnExecuteAction_JSBinder");
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
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:7jymH9NpF063b4jfKvcQeA:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.M0dupX_c3keFJuWvkt6Kig/ClientActions.7jymH9NpF063b4jfKvcQeA:Nc+wDwk8B5WuNGWtox+ELg", "Connect2_LegacyShared", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7WX8fVhUC0+8Hi+mm_x+dQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sRIf2i3pQk2dwcaKacneEA", callContext.id);
// Execute Action: RenderAdaptiveCardAction
controller._renderAdaptiveCardAction$Action(idService.getId("AdaptiveCardContainer"), callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:frb9zLJ2U02JU9HHjpFeyQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:7jymH9NpF063b4jfKvcQeA", callContext.id);
}

};
Controller.prototype._renderAdaptiveCardAction$Action = function (containerIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RenderAdaptiveCardAction");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Widgets.AdaptiveCardViewer.RenderAdaptiveCardAction$vars"))());
vars.value.containerIdInLocal = containerIdIn;
var jSONSerialize_HostConfigVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize_HostConfigVar = jSONSerialize_HostConfigVar;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:ENz5Uvub8UCPFIUH+0c9bA:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.M0dupX_c3keFJuWvkt6Kig/ClientActions.ENz5Uvub8UCPFIUH+0c9bA:VWJusYL0uAfVDwtHV7ZRJQ", "Connect2_LegacyShared", "RenderAdaptiveCardAction", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:040DPexRwEChPaCTpTafpA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:08KXEOXMVUWkCGYhr2rh5Q", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.isJsonValid$Action(model.variables.in_AdaptiveCardJsonIn, callContext).isJsonValidOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XvBWQ1X6x0+PeCvYN0Phyw", callContext.id);
// JSON Serialize: JSONSerialize_HostConfig
jSONSerialize_HostConfigVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.in_HostConfigIn, true, false);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:d+ju38F1J0yrblsHMpp2cQ", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_controller_RenderAdaptiveCardAction_RenderAdaptiveCardJS, "RenderAdaptiveCard", "RenderAdaptiveCardAction", {
AdaptiveCardJson: OS.DataConversion.JSNodeParamConverter.to(model.variables.in_AdaptiveCardJsonIn, OS.DataTypes.DataTypes.Text),
HostConfig: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_HostConfigVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ContainerId: OS.DataConversion.JSNodeParamConverter.to(vars.value.containerIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
OnExecuteAction_JSBinder: controller.clientActionProxies.onExecuteAction_JSBinder$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:v_dHaYLCg0KH9AKlqpIJQg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:o79ccbOUbkuiVSjCkBb2Cg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:ENz5Uvub8UCPFIUH+0c9bA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_LegacyShared.Widgets.AdaptiveCardViewer.RenderAdaptiveCardAction$vars", [{
name: "ContainerId",
attrName: "containerIdInLocal",
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:wvqHhYw3gEiaVEq9NDw8nw:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.M0dupX_c3keFJuWvkt6Kig/ClientActions.wvqHhYw3gEiaVEq9NDw8nw:U8ov+2M8KQwaPzd_tO4O6Q", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:O9cHObTLmU6KiwOeQCI2vA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Ex_w5oN_ukKDsXlIF1_W6A", callContext.id);
// Execute Action: RenderAdaptiveCardAction
controller._renderAdaptiveCardAction$Action(idService.getId("AdaptiveCardContainer"), callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_pl6qCr8NUmyFqy0YSvruA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:wvqHhYw3gEiaVEq9NDw8nw", callContext.id);
}

};
Controller.prototype._onExecuteAction_JSBinder$Action = function (actionIdIn, formPayloadIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnExecuteAction_JSBinder");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Widgets.AdaptiveCardViewer.OnExecuteAction_JSBinder$vars"))());
vars.value.actionIdInLocal = actionIdIn;
vars.value.formPayloadInLocal = formPayloadIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:8gaWmngJGECjqRr0iziUwQ:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.M0dupX_c3keFJuWvkt6Kig/ClientActions.8gaWmngJGECjqRr0iziUwQ:K5V1F6iJ2Pkd3TDocpSh1Q", "Connect2_LegacyShared", "OnExecuteAction_JSBinder", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BaU2I6Dtf0eZrt24C1mDBg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:IvpbXE1T9ketLCItXq4ohg", callContext.id);
// Trigger Event: OnExecuteAction
return controller.onExecuteAction$Action(model.variables.in_AdaptiveCardJsonIn, vars.value.actionIdInLocal, vars.value.formPayloadInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zFLFWlHPekmGLI0emGJ4_Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:8gaWmngJGECjqRr0iziUwQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:8gaWmngJGECjqRr0iziUwQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.Widgets.AdaptiveCardViewer.OnExecuteAction_JSBinder$vars", [{
name: "ActionId",
attrName: "actionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FormPayload",
attrName: "formPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.renderAdaptiveCardAction$Action = function (containerIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._renderAdaptiveCardAction$Action, callContext, containerIdIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onExecuteAction_JSBinder$Action = function (actionIdIn, formPayloadIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onExecuteAction_JSBinder$Action, callContext, actionIdIn, formPayloadIn);

};
Controller.prototype.onExecuteAction$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:kPWBbd+opEC3rMN6byDyUQ:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ:hPUCrJAnBlRVqA2UZwyBjg", "Connect2_LegacyShared", "Widgets", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:M0dupX_c3keFJuWvkt6Kig:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.M0dupX_c3keFJuWvkt6Kig:a53lEsyajpEh4ZWVPZsLvQ", "Connect2_LegacyShared", "AdaptiveCardViewer", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:M0dupX_c3keFJuWvkt6Kig", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Widgets/AdaptiveCardViewer On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Widgets/AdaptiveCardViewer On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$controller.RenderAdaptiveCardAction.RenderAdaptiveCardJS", [], function () {
return function ($parameters, $actions, $roles, $public) {

var data = JSON.parse($parameters.AdaptiveCardJson)

// Create an AdaptiveCard instance
var adaptiveCard = new AdaptiveCards.AdaptiveCard();

adaptiveCard.onExecuteAction = function(action) {
    if (action instanceof AdaptiveCards.OpenUrlAction) {
        var target = window.cordova? "_system" : "_blank";
        window.open(action.url, target);
    } else {
        $actions.OnExecuteAction_JSBinder(action.id ? action.id : action.title, JSON.stringify(action.data));
    }
}; 

if ($parameters.HostConfig && $parameters.HostConfig !== "")
    adaptiveCard.hostConfig = new AdaptiveCards.HostConfig(JSON.parse($parameters.HostConfig));


// Parse the card payload
adaptiveCard.parse(data);

// Render the card to an HTML element:
var renderedCard = adaptiveCard.render(); 

var containerDiv = document.getElementById($parameters.ContainerId);
containerDiv.innerHTML = '';
containerDiv.appendChild(renderedCard);

};
});

define("Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"6az9Yowk+EqFQEhPLUSXKw": {
getter: function (varBag, idService) {
return varBag.vars.value.containerIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XvBWQ1X6x0+PeCvYN0Phyw": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_HostConfigVar.value;
}
},
"d+ju38F1J0yrblsHMpp2cQ": {
getter: function (varBag, idService) {
return varBag.renderAdaptiveCardJSResult.value;
}
},
"lVDwho40pkKB94HuGatLkw": {
getter: function (varBag, idService) {
return varBag.vars.value.actionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"da5B87Oy8Ue3_JAFRXJQbw": {
getter: function (varBag, idService) {
return varBag.vars.value.formPayloadInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3rZO8Xg2h0i8HThCgk5u5Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AdaptiveCardJsonIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"frhXZneEc0qWV6Qq_FE8bg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostConfigIn;
}
},
"C_MY+3kWpUKavog68k+AsQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AdaptiveCardContainer"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
