define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_MainColorVar", "in_MainColorVarIn", "In_MainColorVar", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MainColorVarInDataFetchStatus", "_in_MainColorVarInDataFetchStatus", "_in_MainColorVarInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneTypeId", "in_MilestoneTypeIdIn", "In_MilestoneTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneTypeIdInDataFetchStatus", "_in_MilestoneTypeIdInDataFetchStatus", "_in_MilestoneTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_MainColorVar" in inputs) {
this.variables.in_MainColorVarIn = inputs.In_MainColorVar;
if("_in_MainColorVarInDataFetchStatus" in inputs) {
this.variables._in_MainColorVarInDataFetchStatus = inputs._in_MainColorVarInDataFetchStatus;
}

}

if("In_MilestoneTypeId" in inputs) {
this.variables.in_MilestoneTypeIdIn = inputs.In_MilestoneTypeId;
if("_in_MilestoneTypeIdInDataFetchStatus" in inputs) {
this.variables._in_MilestoneTypeIdInDataFetchStatus = inputs._in_MilestoneTypeIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.Card_Template");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.Card_Template";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_controller;
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
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Template/OrbitEventCard_Container onclick");
controller.onClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
style: model.getCachedValue(idService.getId("OrbitEventCard_Container.style"), function () {
return (((((("border: 1px solid " + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.in_MainColorVarIn, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color2, callContext).out_ColorVarOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + ";") + " ") + "background-color: ") + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.in_MainColorVarIn, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color1, callContext).out_ColorVarOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
}, function () {
return model.variables.in_MainColorVarIn;
})
},
style: "orbit-card-cont",
visible: true,
_idProps: {
service: idService,
name: "OrbitEventCard_Container"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-card-left-cont",
visible: true,
_idProps: {
service: idService,
name: "OrbitEventCard_LeftContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Icon,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Template/Placeholder_Icon onclick");
controller.onClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_idProps: {
service: idService,
name: "Placeholder_Icon"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("OrbitEventCard_RightContent.style"), function () {
return (("color: " + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.in_MainColorVarIn, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color10, callContext).out_ColorVarOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
}, function () {
return model.variables.in_MainColorVarIn;
})
},
style: "orbit-card-right-cont",
visible: true,
_idProps: {
service: idService,
name: "OrbitEventCard_RightContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("OrbitEventCard_TitleCont.style"), function () {
return (((model.variables.in_MilestoneTypeIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.break)) ? ("margin-bottom: 0px;") : (""));
}, function () {
return model.variables.in_MilestoneTypeIdIn;
})
},
style: "orbit-card-title-cont",
visible: true,
_idProps: {
service: idService,
name: "OrbitEventCard_TitleCont"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Title,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Template/Placeholder_Title onclick");
controller.onClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_idProps: {
service: idService,
name: "Placeholder_Title"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-card-content",
visible: true,
_idProps: {
service: idService,
name: "OrbitEventCard_Content"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Content,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Template/Placeholder_Content onclick");
controller.onClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_idProps: {
service: idService,
name: "Placeholder_Content"
},
_widgetRecordProvider: widgetsRecordProvider
})))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$debugger", "Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_Debugger) {
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

Controller.prototype.onClick$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:kXG9IacUXkK5XrWr8BQB2A:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.kXG9IacUXkK5XrWr8BQB2A:Tbn8EYotLbE8ajhEQD3CYA", "Connect2_OrbitMobile_MUI", "Card_Template", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:kXG9IacUXkK5XrWr8BQB2A", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
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
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"9r6A61E_5UGmdWzIzadxWQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MainColorVarIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SxSSOgo0TUWMFJKqWUzqWA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6TXtsU2y20Chn6pPo6jEQg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_Container"));
})(varBag.model, idService);
}
},
"iUvQFe3WY0uvLqrDhc31Qw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_LeftContent"));
})(varBag.model, idService);
}
},
"z4nxXXb8n0etk_vMK5k34Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon"));
})(varBag.model, idService);
}
},
"3BsTZ8fEN0eWErYrI74Y3Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_RightContent"));
})(varBag.model, idService);
}
},
"h9qUpLQ3uUOakMMh3VJtOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_TitleCont"));
})(varBag.model, idService);
}
},
"+dBny_cUuEKM_FfQglgS0g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Title"));
})(varBag.model, idService);
}
},
"NijC17yGVU2dHrxD9Mjp_A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_Content"));
})(varBag.model, idService);
}
},
"mJrDqNQks0y+Eq0g9qKaww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
