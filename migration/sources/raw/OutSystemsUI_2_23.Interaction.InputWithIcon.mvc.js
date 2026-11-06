define("OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AlignIconRight", "alignIconRightIn", "AlignIconRight", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_alignIconRightInDataFetchStatus", "_alignIconRightInDataFetchStatus", "_alignIconRightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("AlignIconRight" in inputs) {
this.variables.alignIconRightIn = inputs.AlignIconRight;
if("_alignIconRightInDataFetchStatus" in inputs) {
this.variables._alignIconRightInDataFetchStatus = inputs._alignIconRightInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Interaction.InputWithIcon");
});
define("OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$model", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_model, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.InputWithIcon";
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
                return OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_controller;
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
style: model.getCachedValue(idService.getId("InputWithIconWrapper.Style"), function () {
return ((("input-with-icon" + ((!(model.variables.alignIconRightIn)) ? ("") : (" input-with-icon-right"))) + " ") + model.variables.extendedClassIn);
}, function () {
return model.variables.alignIconRightIn;
}, function () {
return model.variables.extendedClassIn;
}),
visible: true,
_idProps: {
service: idService,
name: "InputWithIconWrapper"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._alignIconRightInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.icon,
style: "input-with-icon-content-icon center placeholder-empty",
_idProps: {
service: idService,
name: "Icon"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.input,
style: "input-with-icon-input",
_idProps: {
service: idService,
name: "Input"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$translationsResources", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$debugger"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_TranslationsResources, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_Debugger) {
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
Controller.prototype.translationResources = OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:qQS9OZYcu0SRmBsR92a4Og:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og:lqPcl3zEGn9YSs1SWHw12A", "OutSystemsUI_2_23", "Interaction", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:3_2QEbDVLUqNIzVfCGkH_Q:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.3_2QEbDVLUqNIzVfCGkH_Q:XVpI0cJDW+s4rh167AEojA", "OutSystemsUI_2_23", "InputWithIcon", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:3_2QEbDVLUqNIzVfCGkH_Q", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:qQS9OZYcu0SRmBsR92a4Og", callContext.id);
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
return OutSystemsUI_2_23Controller.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUI_2_23LanguageResources);
});

define("OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"VvpJCcbzMEqYcHeT5TJ2ow": {
getter: function (varBag, idService) {
return varBag.model.variables.alignIconRightIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"s8XTj1koIkCZsuH1v1MU3Q": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JjSkraMPNkCnf3AtzDokhQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("InputWithIconWrapper"));
})(varBag.model, idService);
}
},
"wY79SJkfTk+mMHDuh+rVuw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"4M4oOALV2kGEkx+Lu6T+dQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
