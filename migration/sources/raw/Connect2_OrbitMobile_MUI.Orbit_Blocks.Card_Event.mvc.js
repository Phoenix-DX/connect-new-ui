define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$model", "Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_EventSummary", "in_EventSummaryIn", "In_EventSummary", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.Event_ScreenRec());
}, false, Connect2_OrbitMobile_BLModel.Event_ScreenRec), 
this.attr("_in_EventSummaryInDataFetchStatus", "_in_EventSummaryInDataFetchStatus", "_in_EventSummaryInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_EventSummary" in inputs) {
this.variables.in_EventSummaryIn = inputs.In_EventSummary;
if("_in_EventSummaryInDataFetchStatus" in inputs) {
this.variables._in_EventSummaryInDataFetchStatus = inputs._in_EventSummaryInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.Card_Event");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_view, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.Card_Event";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_view, {
inputs: {
In_MainColorVar: model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr,
_in_MainColorVarInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventSummaryInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Template OnClick");
controller.clickedEvent$Action(model.variables.in_EventSummaryIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
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
placeholder_Icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("OrbitEventCard_IconCont.style"), function () {
return (("background-color: " + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color2, callContext).out_ColorVarOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
}, function () {
return model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr;
})
},
style: "orbit-card-icon-cont",
visible: true,
_idProps: {
service: idService,
name: "OrbitEventCard_IconCont"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
className: ("icon orbit-card-icon " + model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainIconAttr),
style: model.getCachedValue(idService.getId("OrbitEventCard_Icon.style"), function () {
return (("color: " + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color7, callContext).out_ColorVarOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
}, function () {
return model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr;
})
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-icon",
visible: true,
_idProps: {
service: idService,
name: "OrbitEventCard_Icon"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
placeholder_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.in_EventSummaryIn.titleAttr,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventSummaryInDataFetchStatus)
})];
}),
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-card-content-info margin-bottom-m",
visible: true,
_idProps: {
service: idService,
name: "OrbitEventCard_MeetingTime"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-date-time orbit-card-content-info-icon",
visible: true,
_idProps: {
service: idService,
name: "OrbitEventCard_MeetingTimeIcon"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("OrbitEventCard_MeetingTimeText.Value"), function () {
return ((OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.in_EventSummaryIn.eventInfoAttr.startEventDateAttr, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + " - ") + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.in_EventSummaryIn.eventInfoAttr.endEventDateAttr, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
}, function () {
return model.variables.in_EventSummaryIn.eventInfoAttr.startEventDateAttr;
}, function () {
return model.variables.in_EventSummaryIn.eventInfoAttr.endEventDateAttr;
}),
_idProps: {
service: idService,
name: "OrbitEventCard_MeetingTimeText"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventSummaryInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-card-content-info",
visible: true,
_idProps: {
service: idService,
name: "OrbitEventCard_MeetingLocation"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-location orbit-card-content-info-icon",
visible: true,
_idProps: {
service: idService,
name: "OrbitEventCard_MeetingLocationIcon"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.variables.in_EventSummaryIn.eventInfoAttr.eventLocationAttr,
_idProps: {
service: idService,
name: "OrbitEventCard_MeetingLocationText"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventSummaryInDataFetchStatus)
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_EventSummaryInDataFetchStatus), asPrimitiveValue(model.variables.in_EventSummaryIn.eventInfoAttr.eventLocationAttr), asPrimitiveValue(model.variables.in_EventSummaryIn.eventInfoAttr.endEventDateAttr), asPrimitiveValue(model.variables.in_EventSummaryIn.eventInfoAttr.startEventDateAttr), asPrimitiveValue(model.variables.in_EventSummaryIn.titleAttr), asPrimitiveValue(model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainIconAttr), asPrimitiveValue(model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$debugger", "Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_Debugger) {
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

Controller.prototype.clickedEvent$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:AJXrRooy9EOp_pZb7gtDLg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.AJXrRooy9EOp_pZb7gtDLg:EEObUoFfMC6N3I630iip3w", "Connect2_OrbitMobile_MUI", "Card_Event", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:AJXrRooy9EOp_pZb7gtDLg", callContext.id);
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"+6uvqNJN4kGNX1nMCylKbQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventSummaryIn;
}
},
"PcPFyhfwE0+7HP1tnNmqXg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon"));
})(varBag.model, idService);
}
},
"67D74sMShUW_UuwWeCjaeg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_IconCont"));
})(varBag.model, idService);
}
},
"qhYXoMmzo0OZaVO48UmGQA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_Icon"));
})(varBag.model, idService);
}
},
"qjiXTpA_xEGKspIS5EqFxg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Title"));
})(varBag.model, idService);
}
},
"wnwtsiF2mkmDdW39cPb9sQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"tYBMEaywfE+Pq_z5Ka6doA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_MeetingTime"));
})(varBag.model, idService);
}
},
"43sue7didEy_0254AbXgAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_MeetingTimeIcon"));
})(varBag.model, idService);
}
},
"ryLUJK1oQkWp4zUeSDWozQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_MeetingTimeText"));
})(varBag.model, idService);
}
},
"byP1QZz3zkaqwaRTpHSJOA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_MeetingLocation"));
})(varBag.model, idService);
}
},
"085waF_6I0e8vtlEpxcdqA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_MeetingLocationIcon"));
})(varBag.model, idService);
}
},
"A4kLM4Ip8kKQAK0Zu+F91Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OrbitEventCard_MeetingLocationText"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
