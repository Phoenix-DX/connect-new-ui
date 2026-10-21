define("NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$model", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model"], function (OutSystems, NavigationHandlerModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Id", "idIn", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_idInDataFetchStatus", "_idInDataFetchStatus", "_idInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("Id" in inputs) {
this.variables.idIn = inputs.Id;
if("_idInDataFetchStatus" in inputs) {
this.variables._idInDataFetchStatus = inputs._idInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ScrollAnchors.ScrollAnchor");
});
define("NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$model", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_model, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_controller, OSWidgets) {
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
        View.displayName = "ScrollAnchors.ScrollAnchor";
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
                return NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_controller;
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
extendedProperties: {
"data-dx-scroll-anchor-id": model.variables.idIn
},
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(false, false, this, function () {
return [];
}, function () {
return [];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$controller", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.languageResources", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$debugger"], function (OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandlerLanguageResources, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_Debugger) {
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
OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:dvawmcZh2UeW7QDlpK16cg:/NRWebFlows.dvawmcZh2UeW7QDlpK16cg:g_mS2C2ntGaKScoRgzUSeA", "NavigationHandler", "ScrollAnchors", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:bghjMONyiE+7mBZgM3_1nQ:/NRWebFlows.dvawmcZh2UeW7QDlpK16cg/NodesShownInESpaceTree.bghjMONyiE+7mBZgM3_1nQ:sdF3pHUYK9a+a7QwkC58qQ", "NavigationHandler", "ScrollAnchor", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:bghjMONyiE+7mBZgM3_1nQ", callContext.id);
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:dvawmcZh2UeW7QDlpK16cg", callContext.id);
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
return NavigationHandlerController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, NavigationHandlerLanguageResources);
});

define("NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"EaqJ3_AhZUWLWHS10wtGyw": {
getter: function (varBag, idService) {
return varBag.model.variables.idIn;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
