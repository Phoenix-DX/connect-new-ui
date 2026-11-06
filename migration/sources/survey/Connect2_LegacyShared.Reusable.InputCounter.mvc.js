define("Connect2_LegacyShared.Reusable.InputCounter.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MaxLength", "maxLengthVar", "MaxLength", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("CurrLength", "currLengthVar", "CurrLength", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("InputId", "inputIdIn", "InputId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_inputIdInDataFetchStatus", "_inputIdInDataFetchStatus", "_inputIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("NoteInitialLength", "noteInitialLengthIn", "NoteInitialLength", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_noteInitialLengthInDataFetchStatus", "_noteInitialLengthInDataFetchStatus", "_noteInitialLengthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("InputId" in inputs) {
this.variables.inputIdIn = inputs.InputId;
if("_inputIdInDataFetchStatus" in inputs) {
this.variables._inputIdInDataFetchStatus = inputs._inputIdInDataFetchStatus;
}

}

if("NoteInitialLength" in inputs) {
this.variables.noteInitialLengthIn = inputs.NoteInitialLength;
if("_noteInitialLengthInDataFetchStatus" in inputs) {
this.variables._noteInitialLengthInDataFetchStatus = inputs._noteInitialLengthInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Reusable.InputCounter");
});
define("Connect2_LegacyShared.Reusable.InputCounter.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Reusable.InputCounter.mvc$model", "Connect2_LegacyShared.Reusable.InputCounter.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Reusable_InputCounter_mvc_model, Connect2_LegacyShared_Reusable_InputCounter_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Reusable.InputCounter";
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
                return Connect2_LegacyShared_Reusable_InputCounter_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Reusable_InputCounter_mvc_controller;
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
style: "text-align-right",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "text-neutral-6 font-size-0-75em margin-top-s ",
value: (((model.variables.currLengthVar).toString() + "/") + (model.variables.maxLengthVar).toString()),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Reusable.InputCounter.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Reusable.InputCounter.mvc$debugger", "Connect2_LegacyShared.Reusable.InputCounter.mvc$controller.OnReady.LimitMaxLenthJS"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Reusable_InputCounter_mvc_Debugger, Connect2_LegacyShared_Reusable_InputCounter_mvc_controller_OnReady_LimitMaxLenthJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
setCurrLength$Action: function (lengthIn) {
lengthIn = (lengthIn === undefined) ? 0 : lengthIn;
return controller.executeActionInsideJSNode(controller._setCurrLength$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(lengthIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "SetCurrLength");
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
Controller.prototype._setCurrLength$Action = function (lengthIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetCurrLength");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Reusable.InputCounter.SetCurrLength$vars"))());
vars.value.lengthInLocal = lengthIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:dYM7D5xRX0OX5mEtb9W_GA:/NRWebFlows.ETpwt426gkGMinqmYFovCg/NodesShownInESpaceTree.hsXDpbgb7UydtWNz3Ih56g/ClientActions.dYM7D5xRX0OX5mEtb9W_GA:GWQi34vS5ZU5eIbzhiojZA", "Connect2_LegacyShared", "SetCurrLength", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ajCYg8RCyUmJkLTmla053Q", callContext.id);
// CurrLength
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3n6TPDqcsUWb27eFI7jL5g", callContext.id);
// CurrLength = Length
model.variables.currLengthVar = vars.value.lengthInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:uBp8sQlcwUSqJ3a6F_jn1A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:dYM7D5xRX0OX5mEtb9W_GA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_LegacyShared.Reusable.InputCounter.SetCurrLength$vars", [{
name: "Length",
attrName: "lengthInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
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
var limitMaxLenthJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.limitMaxLenthJSResult = limitMaxLenthJSResult;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:anSQGhfsn0qqJCD8u5UmTg:/NRWebFlows.ETpwt426gkGMinqmYFovCg/NodesShownInESpaceTree.hsXDpbgb7UydtWNz3Ih56g/ClientActions.anSQGhfsn0qqJCD8u5UmTg:rWAOsYKSw3mX3bkUR07NTQ", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Vq040W3C5k6oHzbt5wuuzQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:H8y+uXOuI0qEZL5BQoJyjg", callContext.id);
limitMaxLenthJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_Reusable_InputCounter_mvc_controller_OnReady_LimitMaxLenthJS, "LimitMaxLenth", "OnReady", {
InputId: OS.DataConversion.JSNodeParamConverter.to(model.variables.inputIdIn, OS.DataTypes.DataTypes.Text),
MaxLen: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Reusable.InputCounter.OnReady$limitMaxLenthJSResult"))();
jsNodeResult.maxLenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MaxLen, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {
SetCurrLength: controller.clientActionProxies.setCurrLength$Action
}, {});
// MaxValue
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WP76feoaaUqFV2P9guimxQ", callContext.id);
// MaxLength = LimitMaxLenth.MaxLen
model.variables.maxLengthVar = limitMaxLenthJSResult.value.maxLenOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:14KuWzAmaECY7d59URGHzw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:anSQGhfsn0qqJCD8u5UmTg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_LegacyShared.Reusable.InputCounter.OnReady$limitMaxLenthJSResult", [{
name: "MaxLen",
attrName: "maxLenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:dW3M67NvB0uOPGE+Vd7vzQ:/NRWebFlows.ETpwt426gkGMinqmYFovCg/NodesShownInESpaceTree.hsXDpbgb7UydtWNz3Ih56g/ClientActions.dW3M67NvB0uOPGE+Vd7vzQ:LboVMkaz50Zyq7zayKy3kg", "Connect2_LegacyShared", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dF_rUYEKzUKV0rY3hzNaFA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2N9JpJE5ekmaloN4s0lVFg", callContext.id) && ((model.variables.noteInitialLengthIn) !== (0)))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GsKqFTFhQUqvp5iSXcnUzQ", callContext.id);
// Execute Action: SetCurrLength
controller._setCurrLength$Action(model.variables.noteInitialLengthIn, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:IfQ4Tp3EL0CN_Wbrcy9PoQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XjcItcVR4k+pKuko5aaoLQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:dW3M67NvB0uOPGE+Vd7vzQ", callContext.id);
}

};

Controller.prototype.setCurrLength$Action = function (lengthIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setCurrLength$Action, callContext, lengthIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:ETpwt426gkGMinqmYFovCg:/NRWebFlows.ETpwt426gkGMinqmYFovCg:+3SGrhAl8EdnlQpf6QG84w", "Connect2_LegacyShared", "Reusable", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:hsXDpbgb7UydtWNz3Ih56g:/NRWebFlows.ETpwt426gkGMinqmYFovCg/NodesShownInESpaceTree.hsXDpbgb7UydtWNz3Ih56g:o7f96GWA_30IXwtvk3Fw8w", "Connect2_LegacyShared", "InputCounter", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:hsXDpbgb7UydtWNz3Ih56g", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:ETpwt426gkGMinqmYFovCg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Reusable/InputCounter On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Reusable/InputCounter On Ready");
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
define("Connect2_LegacyShared.Reusable.InputCounter.mvc$controller.OnReady.LimitMaxLenthJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var limitField = function(evt) {
    var maxlength = evt.target.getAttribute("maxlength");
    if (evt.target.value.length > maxlength) {
        evt.target.value = evt.target.value.substr(0, maxlength);
    }   
    $actions.SetCurrLength(parseInt(evt.target.value.length));
}
document.getElementById($parameters.InputId).addEventListener('input', limitField);
$parameters.MaxLen = parseInt(document.getElementById($parameters.InputId).getAttribute("maxlength"));

};
});

define("Connect2_LegacyShared.Reusable.InputCounter.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"J72PmR1DlE2YMUhuFa36mQ": {
getter: function (varBag, idService) {
return varBag.vars.value.lengthInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"H8y+uXOuI0qEZL5BQoJyjg": {
getter: function (varBag, idService) {
return varBag.limitMaxLenthJSResult.value;
}
},
"NGsBJ49NzkGVxsmT08SA+g": {
getter: function (varBag, idService) {
return varBag.model.variables.maxLengthVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Aonq6bgBXkGSx3N4b3PnFA": {
getter: function (varBag, idService) {
return varBag.model.variables.currLengthVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"oV5q4ra0e0mGUXuqnb8ieg": {
getter: function (varBag, idService) {
return varBag.model.variables.inputIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VQzta84VQ0iFjBKtzgqKzA": {
getter: function (varBag, idService) {
return varBag.model.variables.noteInitialLengthIn;
},
dataType: OS.DataTypes.DataTypes.Integer
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
