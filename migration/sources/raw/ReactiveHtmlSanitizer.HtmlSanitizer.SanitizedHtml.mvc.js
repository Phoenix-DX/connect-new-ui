define("ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$model", ["OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller", "ReactiveHtmlSanitizer.controller$AllowTags", "ReactiveHtmlSanitizer.controller$DisallowAttributes", "ReactiveHtmlSanitizer.controller$DisallowCssStyles", "ReactiveHtmlSanitizer.controller$DisallowTags", "ReactiveHtmlSanitizer.controller$AllowCssStyles", "ReactiveHtmlSanitizer.controller$SanitizeHtml", "ReactiveHtmlSanitizer.controller$AllowAttributes"], function (OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizerController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Value", "valueIn", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_valueInDataFetchStatus", "_valueInDataFetchStatus", "_valueInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ResetWhitelist", "resetWhitelistIn", "ResetWhitelist", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_resetWhitelistInDataFetchStatus", "_resetWhitelistInDataFetchStatus", "_resetWhitelistInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AllowedAttributes", "allowedAttributesIn", "AllowedAttributes", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_allowedAttributesInDataFetchStatus", "_allowedAttributesInDataFetchStatus", "_allowedAttributesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("DisallowedAttributes", "disallowedAttributesIn", "DisallowedAttributes", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_disallowedAttributesInDataFetchStatus", "_disallowedAttributesInDataFetchStatus", "_disallowedAttributesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AllowedTags", "allowedTagsIn", "AllowedTags", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_allowedTagsInDataFetchStatus", "_allowedTagsInDataFetchStatus", "_allowedTagsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("DisallowedTags", "disallowedTagsIn", "DisallowedTags", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_disallowedTagsInDataFetchStatus", "_disallowedTagsInDataFetchStatus", "_disallowedTagsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AllowedCssStyles", "allowedCssStylesIn", "AllowedCssStyles", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_allowedCssStylesInDataFetchStatus", "_allowedCssStylesInDataFetchStatus", "_allowedCssStylesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("DisallowedCssStyles", "disallowedCssStylesIn", "DisallowedCssStyles", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_disallowedCssStylesInDataFetchStatus", "_disallowedCssStylesInDataFetchStatus", "_disallowedCssStylesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("Value" in inputs) {
this.variables.valueIn = inputs.Value;
if("_valueInDataFetchStatus" in inputs) {
this.variables._valueInDataFetchStatus = inputs._valueInDataFetchStatus;
}

}

if("ResetWhitelist" in inputs) {
this.variables.resetWhitelistIn = inputs.ResetWhitelist;
if("_resetWhitelistInDataFetchStatus" in inputs) {
this.variables._resetWhitelistInDataFetchStatus = inputs._resetWhitelistInDataFetchStatus;
}

}

if("AllowedAttributes" in inputs) {
this.variables.allowedAttributesIn = inputs.AllowedAttributes;
if("_allowedAttributesInDataFetchStatus" in inputs) {
this.variables._allowedAttributesInDataFetchStatus = inputs._allowedAttributesInDataFetchStatus;
}

}

if("DisallowedAttributes" in inputs) {
this.variables.disallowedAttributesIn = inputs.DisallowedAttributes;
if("_disallowedAttributesInDataFetchStatus" in inputs) {
this.variables._disallowedAttributesInDataFetchStatus = inputs._disallowedAttributesInDataFetchStatus;
}

}

if("AllowedTags" in inputs) {
this.variables.allowedTagsIn = inputs.AllowedTags;
if("_allowedTagsInDataFetchStatus" in inputs) {
this.variables._allowedTagsInDataFetchStatus = inputs._allowedTagsInDataFetchStatus;
}

}

if("DisallowedTags" in inputs) {
this.variables.disallowedTagsIn = inputs.DisallowedTags;
if("_disallowedTagsInDataFetchStatus" in inputs) {
this.variables._disallowedTagsInDataFetchStatus = inputs._disallowedTagsInDataFetchStatus;
}

}

if("AllowedCssStyles" in inputs) {
this.variables.allowedCssStylesIn = inputs.AllowedCssStyles;
if("_allowedCssStylesInDataFetchStatus" in inputs) {
this.variables._allowedCssStylesInDataFetchStatus = inputs._allowedCssStylesInDataFetchStatus;
}

}

if("DisallowedCssStyles" in inputs) {
this.variables.disallowedCssStylesIn = inputs.DisallowedCssStyles;
if("_disallowedCssStylesInDataFetchStatus" in inputs) {
this.variables._disallowedCssStylesInDataFetchStatus = inputs._disallowedCssStylesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "HtmlSanitizer.SanitizedHtml");
});
define("ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$view", ["OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller", "react", "OutSystems/ReactView/Main", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$model", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$controller", "OutSystems/ReactWidgets/Main", "ReactiveHtmlSanitizer.controller$AllowTags", "ReactiveHtmlSanitizer.controller$DisallowAttributes", "ReactiveHtmlSanitizer.controller$DisallowCssStyles", "ReactiveHtmlSanitizer.controller$DisallowTags", "ReactiveHtmlSanitizer.controller$AllowCssStyles", "ReactiveHtmlSanitizer.controller$SanitizeHtml", "ReactiveHtmlSanitizer.controller$AllowAttributes"], function (OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizerController, React, OSView, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_model, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_controller, OSWidgets) {
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
        View.displayName = "HtmlSanitizer.SanitizedHtml";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/ReactiveHtmlSanitizer.HtmlSanitizer.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_controller;
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
gridProperties: {
classes: "OSFillParent",
marginLeft: "0"
},
value: "",
_idProps: {
service: idService,
name: "SanitizedHtml"
},
_widgetRecordProvider: widgetsRecordProvider
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$controller", ["OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller", "ReactiveHtmlSanitizer.languageResources", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$debugger", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$controller.OnReady.PutHtmlInDomJS", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$controller.OnReady.HtmlSanitizer_setDefaultsJS", "ReactiveHtmlSanitizer.controller$AllowTags", "ReactiveHtmlSanitizer.controller$DisallowAttributes", "ReactiveHtmlSanitizer.controller$DisallowCssStyles", "ReactiveHtmlSanitizer.controller$DisallowTags", "ReactiveHtmlSanitizer.controller$AllowCssStyles", "ReactiveHtmlSanitizer.controller$SanitizeHtml", "ReactiveHtmlSanitizer.controller$AllowAttributes"], function (OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizerController, ReactiveHtmlSanitizerLanguageResources, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_Debugger, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_controller_OnReady_PutHtmlInDomJS, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_controller_OnReady_HtmlSanitizer_setDefaultsJS) {
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
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("EgHmWg54NUKS+T6qi1DAig:bD0mED3gw0mzVvcwnWCtyg:/NRWebFlows.zWgjSH9O0UanyDs+JLssww/NodesShownInESpaceTree.x5H0vZW0nkmrZCc4ch5zeQ/ClientActions.bD0mED3gw0mzVvcwnWCtyg:NIq8Z_kbEucKoiV1jzAD0Q", "ReactiveHtmlSanitizer", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:tlmh88apUEOP4WelFrdTbg", callContext.id);
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:2wqecW3_MUilKLKlhJuOpg", callContext.id);
// Execute Action: OnReady
controller._onReady$Action(callContext);
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:xQfD4o64y0iaQxilnWGGLw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("EgHmWg54NUKS+T6qi1DAig:bD0mED3gw0mzVvcwnWCtyg", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var sanitizeHtmlVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.sanitizeHtmlVar = sanitizeHtmlVar;
try {OutSystemsDebugger.push("EgHmWg54NUKS+T6qi1DAig:L5F4UpxAAUeF+7pF4zrJOg:/NRWebFlows.zWgjSH9O0UanyDs+JLssww/NodesShownInESpaceTree.x5H0vZW0nkmrZCc4ch5zeQ/ClientActions.L5F4UpxAAUeF+7pF4zrJOg:lmwiuuoevSQBaaRY6Z9nPA", "ReactiveHtmlSanitizer", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:uQjyRnDdY0ySkVkrjkH_kw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:dR6DXJ8qZUSprXIV4sAJtg", callContext.id) && model.variables.resetWhitelistIn)) {
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:vkSR29BAF0OdHTUus2lOSw", callContext.id);
controller.safeExecuteJSNode(ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_controller_OnReady_HtmlSanitizer_setDefaultsJS, "HtmlSanitizer_setDefaults", "OnReady", null, function ($parameters) {
}, {}, {});
}

OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:WI2JoeFS0EWsAB1e+Lba4Q", callContext.id);
// Execute Action: AllowAttributes
ReactiveHtmlSanitizerController.default.allowAttributes$Action(model.variables.allowedAttributesIn, callContext);
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:cbBqRCxFf065NLhfR01DdQ", callContext.id);
// Execute Action: DisallowAttributes
ReactiveHtmlSanitizerController.default.disallowAttributes$Action(model.variables.disallowedAttributesIn, callContext);
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:5fz3LPyz_UKb7+Reb6SKDg", callContext.id);
// Execute Action: AllowTags
ReactiveHtmlSanitizerController.default.allowTags$Action(model.variables.allowedTagsIn, callContext);
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:taF5WR022ESrySLLo6B3lw", callContext.id);
// Execute Action: DisallowTags
ReactiveHtmlSanitizerController.default.disallowTags$Action(model.variables.disallowedTagsIn, callContext);
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:acYwflpZDEiQ_kXOUbnDyw", callContext.id);
// Execute Action: AllowCssStyles
ReactiveHtmlSanitizerController.default.allowCssStyles$Action(model.variables.allowedCssStylesIn, callContext);
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:dVn4WFStF0qgQFrAG01GMg", callContext.id);
// Execute Action: DisallowCssStyles
ReactiveHtmlSanitizerController.default.disallowCssStyles$Action(model.variables.disallowedCssStylesIn, callContext);
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:qZ5ufgtwjU2k+UkuU4MpWA", callContext.id);
// Execute Action: SanitizeHtml
sanitizeHtmlVar.value = ReactiveHtmlSanitizerController.default.sanitizeHtml$Action(model.variables.valueIn, callContext);

OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:WMMyUAGGZkyCZZt0boc9vg", callContext.id);
controller.safeExecuteJSNode(ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_controller_OnReady_PutHtmlInDomJS, "PutHtmlInDom", "OnReady", {
ElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("SanitizedHtml"), OS.DataTypes.DataTypes.Text),
SanitizedHtml: OS.DataConversion.JSNodeParamConverter.to(sanitizeHtmlVar.value.sanitizedHTMLOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:8j0uqSCea0+ggU9KwhSCdA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("EgHmWg54NUKS+T6qi1DAig:L5F4UpxAAUeF+7pF4zrJOg", callContext.id);
}

};

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("EgHmWg54NUKS+T6qi1DAig:zWgjSH9O0UanyDs+JLssww:/NRWebFlows.zWgjSH9O0UanyDs+JLssww:iSml3Pf4ZVfPDx_XZmtQkQ", "ReactiveHtmlSanitizer", "HtmlSanitizer", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("EgHmWg54NUKS+T6qi1DAig:x5H0vZW0nkmrZCc4ch5zeQ:/NRWebFlows.zWgjSH9O0UanyDs+JLssww/NodesShownInESpaceTree.x5H0vZW0nkmrZCc4ch5zeQ:SV3mPqUuhZU3+d6ff0opcg", "ReactiveHtmlSanitizer", "SanitizedHtml", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("EgHmWg54NUKS+T6qi1DAig:x5H0vZW0nkmrZCc4ch5zeQ", callContext.id);
OutSystemsDebugger.pop("EgHmWg54NUKS+T6qi1DAig:zWgjSH9O0UanyDs+JLssww", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "HtmlSanitizer/SanitizedHtml On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "HtmlSanitizer/SanitizedHtml On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return ReactiveHtmlSanitizerController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, ReactiveHtmlSanitizerLanguageResources);
});
define("ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$controller.OnReady.PutHtmlInDomJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.ElementId).innerHTML = $parameters.SanitizedHtml;
};
});
define("ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$controller.OnReady.HtmlSanitizer_setDefaultsJS", [], function () {
return function ($actions, $roles, $public) {
 HtmlSanitizer.setDefaults();
};
});

define("ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"qZ5ufgtwjU2k+UkuU4MpWA": {
getter: function (varBag, idService) {
return varBag.sanitizeHtmlVar.value;
}
},
"WMMyUAGGZkyCZZt0boc9vg": {
getter: function (varBag, idService) {
return varBag.putHtmlInDomJSResult.value;
}
},
"vkSR29BAF0OdHTUus2lOSw": {
getter: function (varBag, idService) {
return varBag.htmlSanitizer_setDefaultsJSResult.value;
}
},
"05Z31jZwZ0CP07iLMTdRrg": {
getter: function (varBag, idService) {
return varBag.model.variables.valueIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7CTdW8WjVE2BVRq9XNPXlg": {
getter: function (varBag, idService) {
return varBag.model.variables.resetWhitelistIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"QNvHL7O+nUm4lQxLKnt+jg": {
getter: function (varBag, idService) {
return varBag.model.variables.allowedAttributesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vaL6Xh8O60uoPpSOJpq1Bw": {
getter: function (varBag, idService) {
return varBag.model.variables.disallowedAttributesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bt25_OJzx0mdTqDqDIkXjA": {
getter: function (varBag, idService) {
return varBag.model.variables.allowedTagsIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RzV2mXBW4kGivwbaEQNfpQ": {
getter: function (varBag, idService) {
return varBag.model.variables.disallowedTagsIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"s5gdYx_BZUC_MuyNCBaS4A": {
getter: function (varBag, idService) {
return varBag.model.variables.allowedCssStylesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fa0JzQ+L30CoWd8fc62eEw": {
getter: function (varBag, idService) {
return varBag.model.variables.disallowedCssStylesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"r4+kuysyy0aEqB0LS17cgw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SanitizedHtml"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
