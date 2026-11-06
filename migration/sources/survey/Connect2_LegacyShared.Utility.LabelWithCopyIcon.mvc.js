define("Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.Utilities.AlignCenter.mvc$model"], function (OutSystems, Connect2_LegacySharedModel, OutSystemsUI_2_23_Utilities_AlignCenter_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AttributeValue", "attributeValueIn", "AttributeValue", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_attributeValueInDataFetchStatus", "_attributeValueInDataFetchStatus", "_attributeValueInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = OutSystemsUI_2_23_Utilities_AlignCenter_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("AttributeValue" in inputs) {
this.variables.attributeValueIn = inputs.AttributeValue;
if("_attributeValueInDataFetchStatus" in inputs) {
this.variables._attributeValueInDataFetchStatus = inputs._attributeValueInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Utility.LabelWithCopyIcon");
});
define("Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$model", "Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Utilities.AlignCenter.mvc$view"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_model, Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets, OutSystemsUI_2_23_Utilities_AlignCenter_mvc_view) {
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
        View.displayName = "Utility.LabelWithCopyIcon";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Utilities_AlignCenter_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_controller;
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
style: "font-size-s",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_2_23_Utilities_AlignCenter_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Label,
gridProperties: {
classes: "OSInline"
},
style: "font-semi-bold",
_idProps: {
service: idService,
name: "Placeholder_Label"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Icon,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/LabelWithCopyIcon/Placeholder_Icon onclick");
controller.placeholder_IconOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
gridProperties: {
classes: "OSInline"
},
style: "margin-left-s line-height-1",
_idProps: {
service: idService,
name: "Placeholder_Icon"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Value,
_idProps: {
service: idService,
name: "Placeholder_Value"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$debugger", "Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$controller.Placeholder_IconOnClick.CopyAttributeToClipboardJS"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_Debugger, Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_controller_Placeholder_IconOnClick_CopyAttributeToClipboardJS) {
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
Controller.prototype._placeholder_IconOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Placeholder_IconOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:zhcp3weTOUG0SnEmMZcIjQ:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.0Z3yPqnlUkix9H89x7Le7Q/ClientActions.zhcp3weTOUG0SnEmMZcIjQ:CvSOpZb8scbD3CXhEmRUpA", "Connect2_LegacyShared", "Placeholder_IconOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FDOdGF9M_0ycOuspyuP2RA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FYkHVKwaL06CWkrdvLmXsA", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_controller_Placeholder_IconOnClick_CopyAttributeToClipboardJS, "CopyAttributeToClipboard", "Placeholder_IconOnClick", {
Value: OS.DataConversion.JSNodeParamConverter.to(model.variables.attributeValueIn, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:K7q6LfLo2Ei_lQt4HblIUA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:zhcp3weTOUG0SnEmMZcIjQ", callContext.id);
}

};

Controller.prototype.placeholder_IconOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._placeholder_IconOnClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw:y4OEvNt9FV7g_od25DYkmA", "Connect2_LegacyShared", "Utility", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:0Z3yPqnlUkix9H89x7Le7Q:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.0Z3yPqnlUkix9H89x7Le7Q:reNhryJLbc2AuWvYQg2+Iw", "Connect2_LegacyShared", "LabelWithCopyIcon", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:0Z3yPqnlUkix9H89x7Le7Q", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw", callContext.id);
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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$controller.Placeholder_IconOnClick.CopyAttributeToClipboardJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
navigator.clipboard.writeText($parameters.Value);
};
});

define("Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"FYkHVKwaL06CWkrdvLmXsA": {
getter: function (varBag, idService) {
return varBag.copyAttributeToClipboardJSResult.value;
}
},
"CMfzvAx_WEmKHa3WWS8DIg": {
getter: function (varBag, idService) {
return varBag.model.variables.attributeValueIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"w59c+8yWdUylYtmd11aTtA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"g21eFujrzUeUx32gmb+k3g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Label"));
})(varBag.model, idService);
}
},
"0ctJFaV_YkacnsiLe++P6w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon"));
})(varBag.model, idService);
}
},
"pUxW5RKbe0q4BfaKi+KrZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Value"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
