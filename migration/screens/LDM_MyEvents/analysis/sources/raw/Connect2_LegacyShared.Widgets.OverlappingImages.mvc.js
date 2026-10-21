define("Connect2_LegacyShared.Widgets.OverlappingImages.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ImageURLs", "imageURLsVar", "ImageURLs", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, false, OS.DataTypes.TextList), 
this.attr("RemainingCount", "remainingCountVar", "RemainingCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("In_ImageURLs", "in_ImageURLsIn", "In_ImageURLs", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, false, OS.DataTypes.TextList), 
this.attr("_in_ImageURLsInDataFetchStatus", "_in_ImageURLsInDataFetchStatus", "_in_ImageURLsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MaxDisplayImage", "in_MaxDisplayImageIn", "In_MaxDisplayImage", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 5;
}, false), 
this.attr("_in_MaxDisplayImageInDataFetchStatus", "_in_MaxDisplayImageInDataFetchStatus", "_in_MaxDisplayImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Diameter", "in_DiameterIn", "In_Diameter", true, false, OS.DataTypes.DataTypes.Text, function () {
return "30px";
}, false), 
this.attr("_in_DiameterInDataFetchStatus", "_in_DiameterInDataFetchStatus", "_in_DiameterInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_OverlapPercent", "in_OverlapPercentIn", "In_OverlapPercent", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 30;
}, false), 
this.attr("_in_OverlapPercentInDataFetchStatus", "_in_OverlapPercentInDataFetchStatus", "_in_OverlapPercentInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ShowRemainingCount", "in_ShowRemainingCountIn", "In_ShowRemainingCount", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ShowRemainingCountInDataFetchStatus", "_in_ShowRemainingCountInDataFetchStatus", "_in_ShowRemainingCountInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_RemainingCountFontSize", "in_RemainingCountFontSizeIn", "In_RemainingCountFontSize", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 12;
}, false), 
this.attr("_in_RemainingCountFontSizeInDataFetchStatus", "_in_RemainingCountFontSizeInDataFetchStatus", "_in_RemainingCountFontSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsRTL", "in_IsRTLIn", "In_IsRTL", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsRTLInDataFetchStatus", "_in_IsRTLInDataFetchStatus", "_in_IsRTLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_ImageURLs" in inputs) {
this.variables.in_ImageURLsIn = inputs.In_ImageURLs;
if("_in_ImageURLsInDataFetchStatus" in inputs) {
this.variables._in_ImageURLsInDataFetchStatus = inputs._in_ImageURLsInDataFetchStatus;
}

}

if("In_MaxDisplayImage" in inputs) {
this.variables.in_MaxDisplayImageIn = inputs.In_MaxDisplayImage;
if("_in_MaxDisplayImageInDataFetchStatus" in inputs) {
this.variables._in_MaxDisplayImageInDataFetchStatus = inputs._in_MaxDisplayImageInDataFetchStatus;
}

}

if("In_Diameter" in inputs) {
this.variables.in_DiameterIn = inputs.In_Diameter;
if("_in_DiameterInDataFetchStatus" in inputs) {
this.variables._in_DiameterInDataFetchStatus = inputs._in_DiameterInDataFetchStatus;
}

}

if("In_OverlapPercent" in inputs) {
this.variables.in_OverlapPercentIn = inputs.In_OverlapPercent;
if("_in_OverlapPercentInDataFetchStatus" in inputs) {
this.variables._in_OverlapPercentInDataFetchStatus = inputs._in_OverlapPercentInDataFetchStatus;
}

}

if("In_ShowRemainingCount" in inputs) {
this.variables.in_ShowRemainingCountIn = inputs.In_ShowRemainingCount;
if("_in_ShowRemainingCountInDataFetchStatus" in inputs) {
this.variables._in_ShowRemainingCountInDataFetchStatus = inputs._in_ShowRemainingCountInDataFetchStatus;
}

}

if("In_RemainingCountFontSize" in inputs) {
this.variables.in_RemainingCountFontSizeIn = inputs.In_RemainingCountFontSize;
if("_in_RemainingCountFontSizeInDataFetchStatus" in inputs) {
this.variables._in_RemainingCountFontSizeInDataFetchStatus = inputs._in_RemainingCountFontSizeInDataFetchStatus;
}

}

if("In_IsRTL" in inputs) {
this.variables.in_IsRTLIn = inputs.In_IsRTL;
if("_in_IsRTLInDataFetchStatus" in inputs) {
this.variables._in_IsRTLInDataFetchStatus = inputs._in_IsRTLInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Widgets.OverlappingImages");
});
define("Connect2_LegacyShared.Widgets.OverlappingImages.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Widgets.OverlappingImages.mvc$model", "Connect2_LegacyShared.Widgets.OverlappingImages.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Widgets_OverlappingImages_mvc_model, Connect2_LegacyShared_Widgets_OverlappingImages_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Widgets.OverlappingImages";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/Connect2_LegacyShared.Widgets.OverlappingImages.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Widgets_OverlappingImages_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Widgets_OverlappingImages_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Custom*/ 1,
source: model.variables.imageURLsVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
name: "ImageList"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("mX6Jece7M0OSnt2S2exArA.style"), function () {
return (((((((((("width: " + model.variables.in_DiameterIn) + "; height: ") + model.variables.in_DiameterIn) + ";") + " ") + "background-image: url(\'") + ((((model.variables.imageURLsVar.getCurrent(callContext.iterationContext)) !== (""))) ? (model.variables.imageURLsVar.getCurrent(callContext.iterationContext)) : ("/UBT_CW/img/UBT_CW.User_rectangle.png"))) + "\');") + " ") + ((model.variables.in_IsRTLIn) ? ((("transform: translateX(" + ((((model.variables.imageURLsVar.length - (model.variables.imageURLsVar.getCurrentRowNumber(callContext.iterationContext) + 1)) * 100) - (model.variables.imageURLsVar.getCurrentRowNumber(callContext.iterationContext) * (100 - model.variables.in_OverlapPercentIn)))).toString()) + "%);")) : ((("transform: translateX(" + (((model.variables.imageURLsVar.length - (model.variables.imageURLsVar.getCurrentRowNumber(callContext.iterationContext) + 1)) * model.variables.in_OverlapPercentIn)).toString()) + "%);"))));
}, function () {
return model.variables.in_DiameterIn;
}, function () {
return model.variables.imageURLsVar.getCurrent(callContext.iterationContext);
}, function () {
return model.variables.in_IsRTLIn;
}, function () {
return model.variables.imageURLsVar.length;
}, function () {
return model.variables.imageURLsVar.getCurrentRowNumber(callContext.iterationContext);
}, function () {
return model.variables.in_OverlapPercentIn;
})
},
style: "overlapping-photo-cropper",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.in_RemainingCountFontSizeIn), asPrimitiveValue(model.variables._in_RemainingCountFontSizeInDataFetchStatus), asPrimitiveValue(model.variables._in_MaxDisplayImageInDataFetchStatus), asPrimitiveValue(model.variables._in_ShowRemainingCountInDataFetchStatus), asPrimitiveValue(model.variables.in_MaxDisplayImageIn), asPrimitiveValue(model.variables.imageURLsVar.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.remainingCountVar), asPrimitiveValue(model.variables.in_ShowRemainingCountIn)]
}, $if(((model.variables.in_ShowRemainingCountIn && (model.variables.remainingCountVar > 0)) && (model.variables.imageURLsVar.getCurrentRowNumber(callContext.iterationContext) === (model.variables.in_MaxDisplayImageIn - 1))), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: (("font-size: " + (model.variables.in_RemainingCountFontSizeIn).toString()) + "px;")
},
gridProperties: {
marginLeft: "Adaptive"
},
style: "overlapping-overlay-text",
value: ("+" + (model.variables.remainingCountVar).toString()),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.in_RemainingCountFontSizeIn), asPrimitiveValue(model.variables.in_MaxDisplayImageIn), asPrimitiveValue(model.variables.remainingCountVar), asPrimitiveValue(model.variables.in_ShowRemainingCountIn), asPrimitiveValue(model.variables._in_RemainingCountFontSizeInDataFetchStatus), asPrimitiveValue(model.variables._in_MaxDisplayImageInDataFetchStatus), asPrimitiveValue(model.variables._in_ShowRemainingCountInDataFetchStatus), asPrimitiveValue(model.variables._in_OverlapPercentInDataFetchStatus), asPrimitiveValue(model.variables._in_IsRTLInDataFetchStatus), asPrimitiveValue(model.variables._in_DiameterInDataFetchStatus), asPrimitiveValue(model.variables.in_OverlapPercentIn), asPrimitiveValue(model.variables.in_IsRTLIn), asPrimitiveValue(model.variables.in_DiameterIn)]
}), $if(true, false, this, function () {
return [];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Widgets.OverlappingImages.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Widgets.OverlappingImages.mvc$debugger"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Widgets_OverlappingImages_mvc_Debugger) {
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Um6ywbQRLEWYEP09cWZzFA:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.Bp0d45lkG0qP9Mwofi5v4Q/ClientActions.Um6ywbQRLEWYEP09cWZzFA:7jJSSdSDmZ4hScj3tlSV7w", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:OqZ5dU7AW0+Z9Z7Z_rMmuQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zJkMO7hnBEa5dF6lZEsC6g", callContext.id);
// Execute Action: OnParametersChanged
controller._onParametersChanged$Action(callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AAhy76zFZE+o51jacH2+XQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Um6ywbQRLEWYEP09cWZzFA", callContext.id);
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
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:h7TB3PXDRkedn7NwHOp1BA:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.Bp0d45lkG0qP9Mwofi5v4Q/ClientActions.h7TB3PXDRkedn7NwHOp1BA:fs62zgAWZwr9hN1emPrx9w", "Connect2_LegacyShared", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ShE7vX41mEOHwkFknlOcAw", callContext.id);
// RemainingCount
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qLNOyH05z0a26ZmiOJ8siQ", callContext.id);
// RemainingCount = In_ImageURLs.Length - In_MaxDisplayImage
model.variables.remainingCountVar = (model.variables.in_ImageURLsIn.length - model.variables.in_MaxDisplayImageIn);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:G9+wf+9VGUCpgFBPBRhAUg", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.imageURLsVar, callContext);
// Foreach In_ImageURLs
callContext.iterationContext.registerIterationStart(model.variables.in_ImageURLsIn);
try {var in_ImageURLsIterator = callContext.iterationContext.getIterator(model.variables.in_ImageURLsIn);
var in_ImageURLsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fEWfUB4DVE6NfdkJmiZvNQ", callContext.id) && (in_ImageURLsIndex < model.variables.in_ImageURLsIn.length))) {
in_ImageURLsIterator.currentRowNumber = in_ImageURLsIndex;
// Max to Display?
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:O4xdBr269UuuhXH+kIzq8g", callContext.id) && (model.variables.in_ImageURLsIn.getCurrentRowNumber(callContext.iterationContext) === model.variables.in_MaxDisplayImageIn))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4B5hFtddO0SmBeJFgJnaSQ", callContext.id);
return ;

} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CRZpz+e8tECbiB3gBf7yCw", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.imageURLsVar, model.variables.in_ImageURLsIn.getItem(in_ImageURLsIndex.valueOf()), callContext);
}

in_ImageURLsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.in_ImageURLsIn);
}

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7KHSasafmUOgdSnIOpXr3w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:h7TB3PXDRkedn7NwHOp1BA", callContext.id);
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

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:kPWBbd+opEC3rMN6byDyUQ:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ:hPUCrJAnBlRVqA2UZwyBjg", "Connect2_LegacyShared", "Widgets", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Bp0d45lkG0qP9Mwofi5v4Q:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.Bp0d45lkG0qP9Mwofi5v4Q:6yUYN_pYQu6yDhAMRlMZsg", "Connect2_LegacyShared", "OverlappingImages", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Bp0d45lkG0qP9Mwofi5v4Q", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:kPWBbd+opEC3rMN6byDyUQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Widgets/OverlappingImages On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Widgets/OverlappingImages On Parameters Changed");
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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.Widgets.OverlappingImages.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"xwjoKBo5n0aCsOf9YJ7f2A": {
getter: function (varBag, idService) {
return varBag.model.variables.imageURLsVar;
}
},
"JSMYDJl+xkS99MMTJzEBUg": {
getter: function (varBag, idService) {
return varBag.model.variables.remainingCountVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"fRTwDVy7Dkqx7hZYSWYJlA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ImageURLsIn;
}
},
"Pooy55jenU2z1k7hs7Fj2w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MaxDisplayImageIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"30u2C3k1ekupMin5I8ssLw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_DiameterIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dyV+ZCQq206eQovjfa+e_A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OverlapPercentIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"7Vqau24Z8kO52rtVQ6Qqtw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShowRemainingCountIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"IJbOL4U6IUWENn3Y5qOkRQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_RemainingCountFontSizeIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"XCsOReVr6kKMtxhPvjuaGQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsRTLIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gCF3DiJfJ0u2br4r05tMBw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ImageList"));
})(varBag.model, idService);
}
},
"ohDIoxzPDEWXyvnG8k7c2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsLast"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
