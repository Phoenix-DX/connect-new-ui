define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model"], function (OutSystems, Connect2_OrbitMobile_MUIModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_HasSecondaryButton", "in_HasSecondaryButtonIn", "In_HasSecondaryButton", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_HasSecondaryButtonInDataFetchStatus", "_in_HasSecondaryButtonInDataFetchStatus", "_in_HasSecondaryButtonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HasTopShadow", "in_HasTopShadowIn", "In_HasTopShadow", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_in_HasTopShadowInDataFetchStatus", "_in_HasTopShadowInDataFetchStatus", "_in_HasTopShadowInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsSmallButtons", "in_IsSmallButtonsIn", "In_IsSmallButtons", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsSmallButtonsInDataFetchStatus", "_in_IsSmallButtonsInDataFetchStatus", "_in_IsSmallButtonsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedStyle", "in_ExtendedStyleIn", "In_ExtendedStyle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedStyleInDataFetchStatus", "_in_ExtendedStyleInDataFetchStatus", "_in_ExtendedStyleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClass", "in_ExtendedClassIn", "In_ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClass_Primary", "in_ExtendedClass_PrimaryIn", "In_ExtendedClass_Primary", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClass_PrimaryInDataFetchStatus", "_in_ExtendedClass_PrimaryInDataFetchStatus", "_in_ExtendedClass_PrimaryInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClass_Secondary", "in_ExtendedClass_SecondaryIn", "In_ExtendedClass_Secondary", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClass_SecondaryInDataFetchStatus", "_in_ExtendedClass_SecondaryInDataFetchStatus", "_in_ExtendedClass_SecondaryInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_HasSecondaryButton" in inputs) {
this.variables.in_HasSecondaryButtonIn = inputs.In_HasSecondaryButton;
if("_in_HasSecondaryButtonInDataFetchStatus" in inputs) {
this.variables._in_HasSecondaryButtonInDataFetchStatus = inputs._in_HasSecondaryButtonInDataFetchStatus;
}

}

if("In_HasTopShadow" in inputs) {
this.variables.in_HasTopShadowIn = inputs.In_HasTopShadow;
if("_in_HasTopShadowInDataFetchStatus" in inputs) {
this.variables._in_HasTopShadowInDataFetchStatus = inputs._in_HasTopShadowInDataFetchStatus;
}

}

if("In_IsSmallButtons" in inputs) {
this.variables.in_IsSmallButtonsIn = inputs.In_IsSmallButtons;
if("_in_IsSmallButtonsInDataFetchStatus" in inputs) {
this.variables._in_IsSmallButtonsInDataFetchStatus = inputs._in_IsSmallButtonsInDataFetchStatus;
}

}

if("In_ExtendedStyle" in inputs) {
this.variables.in_ExtendedStyleIn = inputs.In_ExtendedStyle;
if("_in_ExtendedStyleInDataFetchStatus" in inputs) {
this.variables._in_ExtendedStyleInDataFetchStatus = inputs._in_ExtendedStyleInDataFetchStatus;
}

}

if("In_ExtendedClass" in inputs) {
this.variables.in_ExtendedClassIn = inputs.In_ExtendedClass;
if("_in_ExtendedClassInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClassInDataFetchStatus = inputs._in_ExtendedClassInDataFetchStatus;
}

}

if("In_ExtendedClass_Primary" in inputs) {
this.variables.in_ExtendedClass_PrimaryIn = inputs.In_ExtendedClass_Primary;
if("_in_ExtendedClass_PrimaryInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClass_PrimaryInDataFetchStatus = inputs._in_ExtendedClass_PrimaryInDataFetchStatus;
}

}

if("In_ExtendedClass_Secondary" in inputs) {
this.variables.in_ExtendedClass_SecondaryIn = inputs.In_ExtendedClass_Secondary;
if("_in_ExtendedClass_SecondaryInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClass_SecondaryInDataFetchStatus = inputs._in_ExtendedClass_SecondaryInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Generic_Blocks.Orbit_FooterWithActions");
});
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Generic_Blocks.Orbit_FooterWithActions";
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
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_controller;
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
style: model.getCachedValue(idService.getId("ub_FOy6ZUUWbl7eczeOyOw.style"), function () {
return (((((model.variables.in_HasTopShadowIn) ? ("box-shadow: 0px -2px 6px 0px rgba(0,0,0,10%); ") : ("")) + ((!(model.variables.in_HasSecondaryButtonIn)) ? ("justify-content: flex-end; ") : (""))) + " ") + model.variables.in_ExtendedStyleIn);
}, function () {
return model.variables.in_HasTopShadowIn;
}, function () {
return model.variables.in_HasSecondaryButtonIn;
}, function () {
return model.variables.in_ExtendedStyleIn;
})
},
style: ("orbit-footer-with-buttons " + model.variables.in_ExtendedClassIn),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_FooterWithActions/Container onclick");
controller.click_SecondaryButton$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: model.getCachedValue(idService.getId("FlqupBN3+0yUo8QPOvSttQ.Style"), function () {
return (("orbit-footer-with-buttons-btn orbit-footer-with-buttons-btn-left " + ((model.variables.in_IsSmallButtonsIn) ? ("orbit-footer-with-buttons-btn-small ") : (""))) + model.variables.in_ExtendedClass_SecondaryIn);
}, function () {
return model.variables.in_IsSmallButtonsIn;
}, function () {
return model.variables.in_ExtendedClass_SecondaryIn;
}),
visible: model.variables.in_HasSecondaryButtonIn,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSmallButtonsInDataFetchStatus, model.variables._in_ExtendedClass_SecondaryInDataFetchStatus),
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HasSecondaryButtonInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Secondary,
_idProps: {
service: idService,
name: "Placeholder_Secondary"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_FooterWithActions/Container onclick");
controller.click_PrimaryButton$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: model.getCachedValue(idService.getId("EMPUETs4REqUsslXU5iDJg.Style"), function () {
return (("orbit-footer-with-buttons-btn orbit-footer-with-buttons-btn-right " + ((model.variables.in_IsSmallButtonsIn) ? ("orbit-footer-with-buttons-btn-small ") : (""))) + model.variables.in_ExtendedClass_PrimaryIn);
}, function () {
return model.variables.in_IsSmallButtonsIn;
}, function () {
return model.variables.in_ExtendedClass_PrimaryIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSmallButtonsInDataFetchStatus, model.variables._in_ExtendedClass_PrimaryInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Primary,
_idProps: {
service: idService,
name: "Placeholder_Primary"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$debugger"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_Debugger) {
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

Controller.prototype.click_PrimaryButton$Action = function () {
return Promise.resolve();
};
Controller.prototype.click_SecondaryButton$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2QjgT4U4pUyWrkx7l+Yj_Q:/NRWebFlows.2QjgT4U4pUyWrkx7l+Yj_Q:Zci6jLKRkxspqDpkWiLQxw", "Connect2_OrbitMobile_MUI", "Orbit_Generic_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:K5t9ainIJ0WkQj1QN5eUAA:/NRWebFlows.2QjgT4U4pUyWrkx7l+Yj_Q/NodesShownInESpaceTree.K5t9ainIJ0WkQj1QN5eUAA:qk7JY9gqquDRe3pVYjfKXA", "Connect2_OrbitMobile_MUI", "Orbit_FooterWithActions", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:K5t9ainIJ0WkQj1QN5eUAA", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2QjgT4U4pUyWrkx7l+Yj_Q", callContext.id);
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

define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"dq9oeSuhW0+jSOV64WUwzw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HasSecondaryButtonIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"K+mCusBTaU+gWKcBh588kg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HasTopShadowIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"T7KXRuQlY0+6N2ZwQBAIsg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsSmallButtonsIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"_EXBV2Az2U2yHH1qGnChtw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedStyleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"CHru7ZxvqEe4Gy6lZDgHQg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5VplaYj_XEaCICer1kFGOA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClass_PrimaryIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MUhXDEIGR0uq0mvKE_NN_w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClass_SecondaryIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xWmCey1+SUaHKr4G70FYNA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Secondary"));
})(varBag.model, idService);
}
},
"lyTs5EeSB0yuT4uxqiGPCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Primary"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
