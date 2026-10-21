define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$model", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$OpenExternalURL"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_LegacySharedController, Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Label", "labelIn", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Value", "valueIn", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_valueInDataFetchStatus", "_valueInDataFetchStatus", "_valueInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsURL", "isURLIn", "IsURL", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isURLInDataFetchStatus", "_isURLInDataFetchStatus", "_isURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Label" in inputs) {
this.variables.labelIn = inputs.Label;
if("_labelInDataFetchStatus" in inputs) {
this.variables._labelInDataFetchStatus = inputs._labelInDataFetchStatus;
}

}

if("Value" in inputs) {
this.variables.valueIn = inputs.Value;
if("_valueInDataFetchStatus" in inputs) {
this.variables._valueInDataFetchStatus = inputs._valueInDataFetchStatus;
}

}

if("IsURL" in inputs) {
this.variables.isURLIn = inputs.IsURL;
if("_isURLInDataFetchStatus" in inputs) {
this.variables._isURLInDataFetchStatus = inputs._isURLInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Assemble.AssembleCommon_VirtualMeetingDetails_Entry");
});
define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$controller", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$view", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$OpenExternalURL"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedController, React, OSView, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_model, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_controller, OSWidgets, Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_view) {
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
        View.displayName = "Assemble.AssembleCommon_VirtualMeetingDetails_Entry";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_controller;
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
style: "margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_view, {
inputs: {
AttributeValue: model.variables.valueIn,
_attributeValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._valueInDataFetchStatus)
},
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
placeholder_Label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.labelIn,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._labelInDataFetchStatus)
})];
}),
placeholder_Icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*Twotimes*/ 1,
style: "icon connect-icon-copy font-size-h5 text-neutral-6",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Value: new PlaceholderContent(function () {
return [$if(model.variables.isURLIn, false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleCommon_VirtualMeetingDetails_Entry/Link OnClick");
controller.linkVirtualAddressOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
target: "_blank"
},
style: "font-regular",
value: model.variables.valueIn,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._valueInDataFetchStatus)
}))];
}, function () {
return [React.createElement(OSWidgets.Expression, {
style: "text-neutral-7",
value: model.variables.valueIn,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._valueInDataFetchStatus)
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.valueIn), asPrimitiveValue(model.variables.isURLIn), asPrimitiveValue(model.variables._valueInDataFetchStatus), asPrimitiveValue(model.variables._isURLInDataFetchStatus), asPrimitiveValue(model.variables._labelInDataFetchStatus), asPrimitiveValue(model.variables.labelIn)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$debugger", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$OpenExternalURL"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedController, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_Debugger) {
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
Controller.prototype._linkVirtualAddressOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("LinkVirtualAddressOnClick");
callContext = controller.callContext(callContext);
var checkSupportedBrowserVersionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkSupportedBrowserVersionVar = checkSupportedBrowserVersionVar;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:GszlHvC0YkSkteG28AReYQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.TS9KZh8r10mkpQgHHoKqMQ/ClientActions.GszlHvC0YkSkteG28AReYQ:waf30285e820ndjMlEH94A", "Connect2_Assemble_MUI", "LinkVirtualAddressOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:DTr7VybtHESattTJe7xQcg", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:SohxHAdLo0WCKdG4La0dWw", callContext.id);
// Execute Action: CheckSupportedBrowserVersion
checkSupportedBrowserVersionVar.value = Connect2_LegacySharedController.default.checkSupportedBrowserVersion$Action(callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:gB3+4frUgE2IfOYfEbQrEA", callContext.id);
// Execute Action: OpenExternalURL
Connect2_LegacySharedController.default.openExternalURL$Action(model.variables.valueIn, checkSupportedBrowserVersionVar.value.isAppleOut, callContext);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:aOsYwKaTzU+wGw8iQ0MuOg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:GszlHvC0YkSkteG28AReYQ", callContext.id);
}

};

Controller.prototype.linkVirtualAddressOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._linkVirtualAddressOnClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:TS9KZh8r10mkpQgHHoKqMQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.TS9KZh8r10mkpQgHHoKqMQ:SOwyt2G8f7O9RD7NfrB8RA", "Connect2_Assemble_MUI", "AssembleCommon_VirtualMeetingDetails_Entry", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:TS9KZh8r10mkpQgHHoKqMQ", callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA", callContext.id);
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
return Connect2_Assemble_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_Assemble_MUILanguageResources);
});

define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"SohxHAdLo0WCKdG4La0dWw": {
getter: function (varBag, idService) {
return varBag.checkSupportedBrowserVersionVar.value;
}
},
"URnsZK_3eku56TlBY4bxww": {
getter: function (varBag, idService) {
return varBag.model.variables.labelIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oX51j+KE00qp_5ewKetluQ": {
getter: function (varBag, idService) {
return varBag.model.variables.valueIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SEhN9EUGFk2kgrCHk391MQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isURLIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rzHaxfhxm0uaDUenKnfR0g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Label"));
})(varBag.model, idService);
}
},
"BFMWHZ0NjUmYvSwmHTQQXA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon"));
})(varBag.model, idService);
}
},
"42qQmm_MfUi3p_a9iErWXg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Value"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
