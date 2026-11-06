define("Connect2_LegacyShared.Widgets.NetworkWarning.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.Interaction.Animate.mvc$model"], function (OutSystems, Connect2_LegacySharedModel, OutSystemsUI_2_23_Interaction_Animate_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [].concat(_super.attributesToDeclare.call(this));
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
Model._hasValidationWidgetsValue = OutSystemsUI_2_23_Interaction_Animate_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "Widgets.NetworkWarning");
});
define("Connect2_LegacyShared.Widgets.NetworkWarning.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$model", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystemsUI_2_23.Interaction.Animate.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_model, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_controller, Connect2_LegacySharedClientVariables, OutSystemsUI_2_23_Interaction_Animate_mvc_view, OSWidgets) {
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
        View.displayName = "Widgets.NetworkWarning";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Interaction_Animate_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Widgets_NetworkWarning_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Widgets_NetworkWarning_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_2_23_Interaction_Animate_mvc_view, {
inputs: {
AnimationType: Connect2_LegacySharedModel.staticEntities.animationType.topToBottom,
Speed: Connect2_LegacySharedModel.staticEntities.speed.normal
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "card background-orange-dark",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
gridProperties: {
marginLeft: "Adaptive"
},
icon: "wifi",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, "We are experiencing some network problems and could not display this information."), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Please check your network connection and try again."))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
marginLeft: "Adaptive"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Widgets/NetworkWarning/Button OnClick");
controller.tryAgain$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Try again")))];
})
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Widgets.NetworkWarning.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$debugger"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_Debugger) {
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

Controller.prototype.tryAgain$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:kPWBbd+opEC3rMN6byDyUQ:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ:hPUCrJAnBlRVqA2UZwyBjg", "Connect2_LegacyShared", "Widgets", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:mJuLT6w2Q0yiSelW+vRahA:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.mJuLT6w2Q0yiSelW+vRahA:QzUqtP5DmtMTKK9HtmhF1g", "Connect2_LegacyShared", "NetworkWarning", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:mJuLT6w2Q0yiSelW+vRahA", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:kPWBbd+opEC3rMN6byDyUQ", callContext.id);
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

define("Connect2_LegacyShared.Widgets.NetworkWarning.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"61aag7TmT0G68CB72NHCGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
