define("UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_Text", "in_TextIn", "In_Text", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_TextInDataFetchStatus", "_in_TextInDataFetchStatus", "_in_TextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsBounded", "in_IsBoundedIn", "In_IsBounded", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsBoundedInDataFetchStatus", "_in_IsBoundedInDataFetchStatus", "_in_IsBoundedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_Text" in inputs) {
this.variables.in_TextIn = inputs.In_Text;
if("_in_TextInDataFetchStatus" in inputs) {
this.variables._in_TextInDataFetchStatus = inputs._in_TextInDataFetchStatus;
}

}

if("In_IsBounded" in inputs) {
this.variables.in_IsBoundedIn = inputs.In_IsBounded;
if("_in_IsBoundedInDataFetchStatus" in inputs) {
this.variables._in_IsBoundedInDataFetchStatus = inputs._in_IsBoundedInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.DynamicTextArea");
});
define("UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$model", "UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_model, UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "ConnectPatterns.DynamicTextArea";
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
                return UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_controller;
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
style: model.getCachedValue(idService.getId("ekmB1YEf3k61gXwTL5F3Hw.Style"), function () {
return ("resizable-text-area" + ((model.variables.in_IsBoundedIn) ? (" resizable-text-area--bounded") : ("")));
}, function () {
return model.variables.in_IsBoundedIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsBoundedInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_TextArea,
_idProps: {
service: idService,
name: "Placeholder_TextArea"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$debugger", "UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$controller.Action_SetDataReplicatedValue.SetValueJS"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_Debugger, UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_controller_Action_SetDataReplicatedValue_SetValueJS) {
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
Controller.prototype._action_SetDataReplicatedValue$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_SetDataReplicatedValue");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:q1qsRQUl4E6CFxcAbWx5Ew:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.5KbH3Lm+EkiacN1ggMx0fA/ClientActions.q1qsRQUl4E6CFxcAbWx5Ew:kWR+VoKcOZTpBxVgA+GTgA", "UBTConnectLibrary", "Action_SetDataReplicatedValue", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ljDKyq2c4kC0T05ChbLtMg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iFJuNtAy+0S3HdSFDwXVdA", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_controller_Action_SetDataReplicatedValue_SetValueJS, "SetValue", "Action_SetDataReplicatedValue", {
JS_Text: OS.DataConversion.JSNodeParamConverter.to(model.variables.in_TextIn, OS.DataTypes.DataTypes.Text),
JS_PlaceholderId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Placeholder_TextArea"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SQtdRq0Y40SRC0f_HleTfA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:q1qsRQUl4E6CFxcAbWx5Ew", callContext.id);
}

};

Controller.prototype.action_SetDataReplicatedValue$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_SetDataReplicatedValue$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:3o_94888UGa0qaomZFOpnQ", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:5KbH3Lm+EkiacN1ggMx0fA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.5KbH3Lm+EkiacN1ggMx0fA:VvyFVnt0TTpNu9vwgMSN6w", "UBTConnectLibrary", "DynamicTextArea", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:5KbH3Lm+EkiacN1ggMx0fA", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/DynamicTextArea On Ready");
return controller.action_SetDataReplicatedValue$Action(callContext);

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

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/DynamicTextArea On Parameters Changed");
return controller.action_SetDataReplicatedValue$Action(callContext);

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
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});
define("UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$controller.Action_SetDataReplicatedValue.SetValueJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let textArea = document.getElementById($parameters.JS_PlaceholderId).querySelector('textarea');

if (textArea) {
    const textAreaParent = textArea.parentElement;
    textAreaParent.dataset.replicatedValue = $parameters.JS_Text;
}
};
});

define("UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"iFJuNtAy+0S3HdSFDwXVdA": {
getter: function (varBag, idService) {
return varBag.setValueJSResult.value;
}
},
"2Zmq3CV2AEiYc7IdRg0E7Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TextIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rb7pTlbZgU6VYpvdDU+1zg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsBoundedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xD64Y9L3TEKa2zZ9pYB8hw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_TextArea"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
