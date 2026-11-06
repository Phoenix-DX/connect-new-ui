define("UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model"], function (OutSystems, UBTConnectModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("HideActions", "hideActionsIn", "HideActions", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_hideActionsInDataFetchStatus", "_hideActionsInDataFetchStatus", "_hideActionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("HideActions" in inputs) {
this.variables.hideActionsIn = inputs.HideActions;
if("_hideActionsInDataFetchStatus" in inputs) {
this.variables._hideActionsInDataFetchStatus = inputs._hideActionsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "SubLayout.SubLayout_DirectoryDetailScreen");
});
define("UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$model", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_model, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_controller, UBTConnectClientVariables, OSWidgets) {
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
        View.displayName = "SubLayout.SubLayout_DirectoryDetailScreen";
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
                return UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_controller;
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
style: "directory-detail-screen",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_DetailCard,
_idProps: {
service: idService,
name: "Placeholder_DetailCard"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_CallToAction,
style: model.getCachedValue(idService.getId("Placeholder_CallToAction.Style"), function () {
return ((model.variables.hideActionsIn) ? ("display-none") : (""));
}, function () {
return model.variables.hideActionsIn;
}),
_idProps: {
service: idService,
name: "Placeholder_CallToAction"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideActionsInDataFetchStatus)
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Content,
_idProps: {
service: idService,
name: "Placeholder_Content"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$debugger"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_Debugger) {
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:sIcw33E_9EmAXH6RWzjYsw:/NRWebFlows.sIcw33E_9EmAXH6RWzjYsw:IdwdP7GRIJgujDQ9H0SvwQ", "UBTConnect", "SubLayout", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JzYaDu2+PkyCFcGoKySLzw:/NRWebFlows.sIcw33E_9EmAXH6RWzjYsw/NodesShownInESpaceTree.JzYaDu2+PkyCFcGoKySLzw:xE+KZelk1arkCJ0+HZCjLw", "UBTConnect", "SubLayout_DirectoryDetailScreen", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JzYaDu2+PkyCFcGoKySLzw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sIcw33E_9EmAXH6RWzjYsw", callContext.id);
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"f8sJ5wRnrEyMHqhDFNkvNw": {
getter: function (varBag, idService) {
return varBag.model.variables.hideActionsIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cdmVh15qWkais8zWZsWHKg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_DetailCard"));
})(varBag.model, idService);
}
},
"g430LIw1eEaq_TAIv5KdHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CallToAction"));
})(varBag.model, idService);
}
},
"Qk0GvRaEXU60v0uyJhgsxg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
