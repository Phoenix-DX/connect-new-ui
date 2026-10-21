define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.Reusable.NewConnectContent.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$model"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_LegacyShared_Reusable_NewConnectContent_mvcModel, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("VirtualMeetingLink", "virtualMeetingLinkIn", "VirtualMeetingLink", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_virtualMeetingLinkInDataFetchStatus", "_virtualMeetingLinkInDataFetchStatus", "_virtualMeetingLinkInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("VirtualMeetingId", "virtualMeetingIdIn", "VirtualMeetingId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_virtualMeetingIdInDataFetchStatus", "_virtualMeetingIdInDataFetchStatus", "_virtualMeetingIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("VirtualMeetingPassword", "virtualMeetingPasswordIn", "VirtualMeetingPassword", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_virtualMeetingPasswordInDataFetchStatus", "_virtualMeetingPasswordInDataFetchStatus", "_virtualMeetingPasswordInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (Connect2_LegacyShared_Reusable_NewConnectContent_mvcModel.hasValidationWidgets || Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("VirtualMeetingLink" in inputs) {
this.variables.virtualMeetingLinkIn = inputs.VirtualMeetingLink;
if("_virtualMeetingLinkInDataFetchStatus" in inputs) {
this.variables._virtualMeetingLinkInDataFetchStatus = inputs._virtualMeetingLinkInDataFetchStatus;
}

}

if("VirtualMeetingId" in inputs) {
this.variables.virtualMeetingIdIn = inputs.VirtualMeetingId;
if("_virtualMeetingIdInDataFetchStatus" in inputs) {
this.variables._virtualMeetingIdInDataFetchStatus = inputs._virtualMeetingIdInDataFetchStatus;
}

}

if("VirtualMeetingPassword" in inputs) {
this.variables.virtualMeetingPasswordIn = inputs.VirtualMeetingPassword;
if("_virtualMeetingPasswordInDataFetchStatus" in inputs) {
this.variables._virtualMeetingPasswordInDataFetchStatus = inputs._virtualMeetingPasswordInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Assemble.AssembleCommon_VirtualMeetingDetails");
});
define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$controller", "Connect2_LegacyShared.Reusable.NewConnectContent.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$view"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, React, OSView, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_model, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_controller, Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, OSWidgets, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_view) {
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
        View.displayName = "Assemble.AssembleCommon_VirtualMeetingDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "break-word",
visible: ((model.variables.virtualMeetingLinkIn) !== ("")),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingLinkInDataFetchStatus)
}, React.createElement(Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_view, {
inputs: {
Value: model.variables.virtualMeetingLinkIn,
_valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingLinkInDataFetchStatus),
Label: "Meeting Link",
IsURL: true
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.virtualMeetingIdIn) !== ("")),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingIdInDataFetchStatus)
}, React.createElement(Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_view, {
inputs: {
Label: "Meeting Id",
Value: model.variables.virtualMeetingIdIn,
_valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingIdInDataFetchStatus),
IsURL: false
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
uuid: "4",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.virtualMeetingPasswordIn) !== ("")),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingPasswordInDataFetchStatus)
}, React.createElement(Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_view, {
inputs: {
Value: model.variables.virtualMeetingPasswordIn,
_valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingPasswordInDataFetchStatus),
IsURL: false,
Label: "Passcode"
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
uuid: "6",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.virtualMeetingPasswordIn), asPrimitiveValue(model.variables.virtualMeetingIdIn), asPrimitiveValue(model.variables._virtualMeetingPasswordInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingIdInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingLinkInDataFetchStatus), asPrimitiveValue(model.variables.virtualMeetingLinkIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$debugger"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_Debugger) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:rFmiOeb56kenk0DIUJIf+g:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.rFmiOeb56kenk0DIUJIf+g:1k2R1JjZtlCeRG3b3F+uAA", "Connect2_Assemble_MUI", "AssembleCommon_VirtualMeetingDetails", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:rFmiOeb56kenk0DIUJIf+g", callContext.id);
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

define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"3vtIRvRtGUiZu2QTZJJjFQ": {
getter: function (varBag, idService) {
return varBag.model.variables.virtualMeetingLinkIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"K5kea8pCIUuk0kuqDcT3Pg": {
getter: function (varBag, idService) {
return varBag.model.variables.virtualMeetingIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kxvBgggcRUanp5lDAVo2LQ": {
getter: function (varBag, idService) {
return varBag.model.variables.virtualMeetingPasswordIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lvMDfTRAokWTHnT0_yd2Ng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
