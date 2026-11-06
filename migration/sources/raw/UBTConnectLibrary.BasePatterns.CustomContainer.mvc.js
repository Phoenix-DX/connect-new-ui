define("UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.controller$GetClasses_Container", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetStyle_SizeOptions", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.controller$GetStyle_BackgroundImage", "UBTConnectLibrary.controller$SetStyle", "UBTConnectLibrary.controller$GetStyle_Opacity"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-custom-container";
}, false), 
this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Options", "optionsIn", "Options", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec());
}, false, UBTConnectLibraryModel.ContainerOptionsRec), 
this.attr("_optionsInDataFetchStatus", "_optionsInDataFetchStatus", "_optionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("ExtendedClasses" in inputs) {
this.variables.extendedClassesIn = inputs.ExtendedClasses;
if("_extendedClassesInDataFetchStatus" in inputs) {
this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
}

}

if("Options" in inputs) {
this.variables.optionsIn = inputs.Options;
if("_optionsInDataFetchStatus" in inputs) {
this.variables._optionsInDataFetchStatus = inputs._optionsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "BasePatterns.CustomContainer");
});
define("UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.controller$GetClasses_Container", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetStyle_SizeOptions", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.controller$GetStyle_BackgroundImage", "UBTConnectLibrary.controller$SetStyle", "UBTConnectLibrary.controller$GetStyle_Opacity"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_model, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "BasePatterns.CustomContainer";
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
                return UBTConnectLibrary_BasePatterns_CustomContainer_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_BasePatterns_CustomContainer_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer/Content onclick");
controller.clicked$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: model.getCachedValue(idService.getId("Content.Style"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(model.variables.extendedClassesIn, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClasses_Container$Action(model.variables.optionsIn, callContext).classesOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.extendedClassesIn;
}, function () {
return model.variables.optionsIn;
}),
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus, model.variables._optionsInDataFetchStatus)
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.BasePatterns.CustomContainer.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.controller$GetClasses_Container", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetStyle_SizeOptions", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.controller$GetStyle_BackgroundImage", "UBTConnectLibrary.controller$SetStyle", "UBTConnectLibrary.controller$GetStyle_Opacity"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_Debugger) {
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
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var getStyle_HeightOptionsVar = new OS.DataTypes.VariableHolder();
var getStyle_BackgroundImagemageVar = new OS.DataTypes.VariableHolder();
var setStyle_OpacityVar = new OS.DataTypes.VariableHolder();
var setStyle_HeightVar = new OS.DataTypes.VariableHolder();
var setStyle_BackgroundImageVar = new OS.DataTypes.VariableHolder();
var getStyle_WidthOptionsVar = new OS.DataTypes.VariableHolder();
var setStyle_WidthVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getStyle_HeightOptionsVar = getStyle_HeightOptionsVar;
varBag.getStyle_BackgroundImagemageVar = getStyle_BackgroundImagemageVar;
varBag.setStyle_OpacityVar = setStyle_OpacityVar;
varBag.setStyle_HeightVar = setStyle_HeightVar;
varBag.setStyle_BackgroundImageVar = setStyle_BackgroundImageVar;
varBag.getStyle_WidthOptionsVar = getStyle_WidthOptionsVar;
varBag.setStyle_WidthVar = setStyle_WidthVar;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:AiXX2vQSA0y2waCQvGBMKA:/NRWebFlows.nUarfIVtc0ih3v4IkobvXA/NodesShownInESpaceTree.RVF8_QAQXkCxM04jHOnWFw/ClientActions.AiXX2vQSA0y2waCQvGBMKA:4xcvkrF7KDWZf+P3F1oBKw", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:V17k+rD7akmp+PKCfezN_g", callContext.id);
// Has Height Options?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BauQzOxc+0e41xn2MaSe3g", callContext.id) && ((((model.variables.optionsIn.heightOptionsAttr.minAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())) || ((model.variables.optionsIn.heightOptionsAttr.mainAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))) || ((model.variables.optionsIn.heightOptionsAttr.maxAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cXHtFzI6CkG5gIWF4BovfQ", callContext.id);
// Execute Action: GetStyle_HeightOptions
getStyle_HeightOptionsVar.value = UBTConnectLibraryController.default.getStyle_SizeOptions$Action("height", model.variables.optionsIn.heightOptionsAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FirjtfyywEeg6pV0KZH7JA", callContext.id);
// Execute Action: SetStyle_Height
setStyle_HeightVar.value = UBTConnectLibraryController.default.setStyle$Action(idService.getId("Content"), getStyle_HeightOptionsVar.value.styleOut, callContext);

}

// Has Width Options?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2_JPoDRcyk6fLOSa0Ncsnw", callContext.id) && ((((model.variables.optionsIn.widthOptionsAttr.minAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())) || ((model.variables.optionsIn.widthOptionsAttr.mainAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))) || ((model.variables.optionsIn.widthOptionsAttr.maxAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eguL1OcslEeIk2VU_UIDfA", callContext.id);
// Execute Action: GetStyle_WidthOptions
getStyle_WidthOptionsVar.value = UBTConnectLibraryController.default.getStyle_SizeOptions$Action("width", model.variables.optionsIn.widthOptionsAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:n2YS3xlFh0SMHZtnuMKZnQ", callContext.id);
// Execute Action: SetStyle_Width
setStyle_WidthVar.value = UBTConnectLibraryController.default.setStyle$Action(idService.getId("Content"), getStyle_WidthOptionsVar.value.styleOut, callContext);

}

// Has Background Image?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ew_GKbuB+UCwDnTmLET46A", callContext.id) && ((model.variables.optionsIn.backgroundAttr.backgroundImageAttr.imageAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2olGGD+GMUKZiUZbD41HhQ", callContext.id);
// Execute Action: GetStyle_BackgroundImagemage
getStyle_BackgroundImagemageVar.value = UBTConnectLibraryController.default.getStyle_BackgroundImage$Action(model.variables.optionsIn.backgroundAttr.backgroundImageAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WKPHxkey_UOGA9l_lf8O6w", callContext.id);
// Execute Action: SetStyle_BackgroundImage
setStyle_BackgroundImageVar.value = UBTConnectLibraryController.default.setStyle$Action(idService.getId("Content"), getStyle_BackgroundImagemageVar.value.styleOut, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:x+SCwZKy7kSbeL53M2iYdQ", callContext.id);
} else {
// Has Background Color?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5maesdPy_kmyKZMFEiLbgw", callContext.id) && ((model.variables.optionsIn.backgroundAttr.backgroundColorAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Valid opacity?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vmh7ebHL6kK4MGGhhNah5w", callContext.id) && (model.variables.optionsIn.backgroundAttr.opacityAttr.gt(OS.BuiltinFunctions.integerToDecimal(0)) && model.variables.optionsIn.backgroundAttr.opacityAttr.lt(OS.BuiltinFunctions.integerToDecimal(1))))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4QIeVg2EQEqEubc3du7VYw", callContext.id);
// Execute Action: SetStyle_Opacity
setStyle_OpacityVar.value = UBTConnectLibraryController.default.setStyle$Action(idService.getId("Content"), OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getStyle_Opacity$Action("background-color", model.variables.optionsIn.backgroundAttr.opacityAttr, model.variables.optionsIn.backgroundAttr.backgroundColorAttr, callContext).styleOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:982eWFNGTkyCJojRotTjmQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1mE6BGRZY0S5luA86n1lkw", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1mE6BGRZY0S5luA86n1lkw", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:AiXX2vQSA0y2waCQvGBMKA", callContext.id);
}

};
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:OkE47ZyFi0eqH+mzJNRcaQ:/NRWebFlows.nUarfIVtc0ih3v4IkobvXA/NodesShownInESpaceTree.RVF8_QAQXkCxM04jHOnWFw/ClientActions.OkE47ZyFi0eqH+mzJNRcaQ:40YiXe18vdjHScFyIhKxkA", "UBTConnectLibrary", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0QUufmhjJUiqQ8S6GiPy7A", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7hUI1qlpmEmJcd2oLhd7XQ", callContext.id);
// Execute Action: OnReady
controller._onReady$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tiACWmYkLE2i0Qg20em7Qw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:OkE47ZyFi0eqH+mzJNRcaQ", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.clicked$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:nUarfIVtc0ih3v4IkobvXA:/NRWebFlows.nUarfIVtc0ih3v4IkobvXA:vOjDm7VDpdsBscQEPpIuaQ", "UBTConnectLibrary", "BasePatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:RVF8_QAQXkCxM04jHOnWFw:/NRWebFlows.nUarfIVtc0ih3v4IkobvXA/NodesShownInESpaceTree.RVF8_QAQXkCxM04jHOnWFw:0SxXca2qiizRvgpvi36jWg", "UBTConnectLibrary", "CustomContainer", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:RVF8_QAQXkCxM04jHOnWFw", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:nUarfIVtc0ih3v4IkobvXA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "BasePatterns/CustomContainer On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "BasePatterns/CustomContainer On Parameters Changed");
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
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.BasePatterns.CustomContainer.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"cXHtFzI6CkG5gIWF4BovfQ": {
getter: function (varBag, idService) {
return varBag.getStyle_HeightOptionsVar.value;
}
},
"2olGGD+GMUKZiUZbD41HhQ": {
getter: function (varBag, idService) {
return varBag.getStyle_BackgroundImagemageVar.value;
}
},
"4QIeVg2EQEqEubc3du7VYw": {
getter: function (varBag, idService) {
return varBag.setStyle_OpacityVar.value;
}
},
"FirjtfyywEeg6pV0KZH7JA": {
getter: function (varBag, idService) {
return varBag.setStyle_HeightVar.value;
}
},
"WKPHxkey_UOGA9l_lf8O6w": {
getter: function (varBag, idService) {
return varBag.setStyle_BackgroundImageVar.value;
}
},
"eguL1OcslEeIk2VU_UIDfA": {
getter: function (varBag, idService) {
return varBag.getStyle_WidthOptionsVar.value;
}
},
"n2YS3xlFh0SMHZtnuMKZnQ": {
getter: function (varBag, idService) {
return varBag.setStyle_WidthVar.value;
}
},
"hoGwfxPbyU2yjcCvncJEqw": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MI+Mq9FOOkiWLKsDplmn_w": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Eu1DzkcKM02WjV0eTipxJg": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsIn;
}
},
"TlfSMHOZLkGSvOBFbsK4og": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
