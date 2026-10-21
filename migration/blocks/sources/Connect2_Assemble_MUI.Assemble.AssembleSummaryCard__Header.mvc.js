define("Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model"], function (OutSystems, Connect2_Assemble_MUIModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("HeaderLabel", "headerLabelIn", "HeaderLabel", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_headerLabelInDataFetchStatus", "_headerLabelInDataFetchStatus", "_headerLabelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("HeaderLabel" in inputs) {
this.variables.headerLabelIn = inputs.HeaderLabel;
if("_headerLabelInDataFetchStatus" in inputs) {
this.variables._headerLabelInDataFetchStatus = inputs._headerLabelInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Assemble.AssembleSummaryCard__Header");
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, React, OSView, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard__Header_mvc_model, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard__Header_mvc_controller, OSWidgets) {
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
        View.displayName = "Assemble.AssembleSummaryCard__Header";
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
                return Connect2_Assemble_MUI_Assemble_AssembleSummaryCard__Header_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleSummaryCard__Header_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Expression, {
style: "bold font-size-h6 margin-y-s",
value: model.variables.headerLabelIn,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._headerLabelInDataFetchStatus)
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header.mvc$debugger"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard__Header_mvc_Debugger) {
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
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:+Kjw7BdTNUGU98BhVJOzNA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.+Kjw7BdTNUGU98BhVJOzNA:53+1Uk6C0TtKqB7RIJA7uA", "Connect2_Assemble_MUI", "AssembleSummaryCard__Header", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:+Kjw7BdTNUGU98BhVJOzNA", callContext.id);
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

define("Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LOwGo2Eb2kyoGv67wUSTaQ": {
getter: function (varBag, idService) {
return varBag.model.variables.headerLabelIn;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
