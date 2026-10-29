define("UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.controller$SVGHeader_GetPath"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MergeDurationInSeconds", "mergeDurationInSecondsVar", "MergeDurationInSeconds", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, false), 
this.attr("InitialD", "initialDVar", "InitialD", true, false, OS.DataTypes.DataTypes.Text, function () {
return "M 100,50 A 50,50 0 1,0 0,50 A 50,50 0 1,0 100,50";
}, false), 
this.attr("isTriggerAnimation", "isTriggerAnimationIn", "isTriggerAnimation", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isTriggerAnimationInDataFetchStatus", "_isTriggerAnimationInDataFetchStatus", "_isTriggerAnimationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Header_FinalHeightPercentage", "in_Header_FinalHeightPercentageIn", "In_Header_FinalHeightPercentage", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, false), 
this.attr("_in_Header_FinalHeightPercentageInDataFetchStatus", "_in_Header_FinalHeightPercentageInDataFetchStatus", "_in_Header_FinalHeightPercentageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_FinalCurvaturePercentage", "in_FinalCurvaturePercentageIn", "In_FinalCurvaturePercentage", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(100);
}, false), 
this.attr("_in_FinalCurvaturePercentageInDataFetchStatus", "_in_FinalCurvaturePercentageInDataFetchStatus", "_in_FinalCurvaturePercentageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (UBTConnectLibrary_Layouts_SVG_Background_Custom_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("isTriggerAnimation" in inputs) {
this.variables.isTriggerAnimationIn = inputs.isTriggerAnimation;
if("_isTriggerAnimationInDataFetchStatus" in inputs) {
this.variables._isTriggerAnimationInDataFetchStatus = inputs._isTriggerAnimationInDataFetchStatus;
}

}

if("In_Header_FinalHeightPercentage" in inputs) {
this.variables.in_Header_FinalHeightPercentageIn = inputs.In_Header_FinalHeightPercentage;
if("_in_Header_FinalHeightPercentageInDataFetchStatus" in inputs) {
this.variables._in_Header_FinalHeightPercentageInDataFetchStatus = inputs._in_Header_FinalHeightPercentageInDataFetchStatus;
}

}

if("In_FinalCurvaturePercentage" in inputs) {
this.variables.in_FinalCurvaturePercentageIn = inputs.In_FinalCurvaturePercentage;
if("_in_FinalCurvaturePercentageInDataFetchStatus" in inputs) {
this.variables._in_FinalCurvaturePercentageInDataFetchStatus = inputs._in_FinalCurvaturePercentageInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.LoadingDots");
});
define("UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$model", "UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.controller$SVGHeader_GetPath"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_model, UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectPatterns.LoadingDots";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/GSAPSVGAnimations.gsap_min.js", "scripts/GSAPSVGAnimations.MorphSVGPlugin_min.js"];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_view, {
inputs: {
In_Path: model.variables.initialDVar,
In_ExtendedClass: "ubt-loading-svg "
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
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("b9KqLrZR10OmT0exsv9C8Q.Style"), function () {
return ("ubt-loading-dots" + ((model.variables.isTriggerAnimationIn) ? (" ubt-loading-header-animation") : ("")));
}, function () {
return model.variables.isTriggerAnimationIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isTriggerAnimationInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("54GORkJe6USbIMaRj7jocA.style"), function () {
return ((model.variables.isTriggerAnimationIn) ? (((" transition: left " + (model.variables.mergeDurationInSecondsVar).toString()) + "s")) : (""));
}, function () {
return model.variables.isTriggerAnimationIn;
}, function () {
return model.variables.mergeDurationInSecondsVar;
})
},
style: "ubt-loading-dots__dot",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("lvNGh9nHnEq6LRzK7WGJPw.style"), function () {
return ((model.variables.isTriggerAnimationIn) ? (((" transition: left " + (model.variables.mergeDurationInSecondsVar).toString()) + "s")) : (""));
}, function () {
return model.variables.isTriggerAnimationIn;
}, function () {
return model.variables.mergeDurationInSecondsVar;
})
},
style: "ubt-loading-dots__dot",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("HgOXl5Ij6ESZLFOm5ZY2ug.style"), function () {
return ((model.variables.isTriggerAnimationIn) ? (((" transition: left " + (model.variables.mergeDurationInSecondsVar).toString()) + "s")) : (""));
}, function () {
return model.variables.isTriggerAnimationIn;
}, function () {
return model.variables.mergeDurationInSecondsVar;
})
},
style: "ubt-loading-dots__dot",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("bXXKKMnS10ilkfheRYUhTA.style"), function () {
return ((model.variables.isTriggerAnimationIn) ? (((" transition: left " + (model.variables.mergeDurationInSecondsVar).toString()) + "s")) : (""));
}, function () {
return model.variables.isTriggerAnimationIn;
}, function () {
return model.variables.mergeDurationInSecondsVar;
})
},
style: "ubt-loading-dots__dot",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-loading-text",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Loading...",
In_TextOptions: model.getCachedValue(idService.getId("vtbf5G+lgUyQVI23lwe0Yw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.primary;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
})
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
uuid: "7",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$debugger", "UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$controller.OnReady.JavaScript1JS", "UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$controller.Action_HandleMerge.AnimateJS", "UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$controller.Action_HandleMerge.AddBounceJS", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.controller$SVGHeader_GetPath"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_Debugger, UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_controller_OnReady_JavaScript1JS, UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_controller_Action_HandleMerge_AnimateJS, UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_controller_Action_HandleMerge_AddBounceJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
action_AnimationCompleted$Action: function () {
return controller.executeActionInsideJSNode(controller._action_AnimationCompleted$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_AnimationCompleted");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._action_AnimationCompleted$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_AnimationCompleted");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:_dxFOcYoTkaK_c4WSIHExQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.hzQlBmTYW0SHWEyhONFY7Q/ClientActions._dxFOcYoTkaK_c4WSIHExQ:EvP3zbARgEFMh0EZe5Pgnw", "UBTConnectLibrary", "Action_AnimationCompleted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:x_BBaD2+LkazVTCUMXMw3A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:78R402lLy0iPx02VfGFpnQ", callContext.id);
// Trigger Event: AnimationComplete
return controller.animationComplete$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ct6sU62970W5pjcYmmr77Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:_dxFOcYoTkaK_c4WSIHExQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:_dxFOcYoTkaK_c4WSIHExQ", callContext.id);
throw ex;

});
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:shl+iEZsZ0u9bakL0HgCSQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.hzQlBmTYW0SHWEyhONFY7Q/ClientActions.shl+iEZsZ0u9bakL0HgCSQ:xnrQ50s1v2BDAx4boRt+aQ", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:uHCdtbi9RE6BihYDCA7xGg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UnovQ2GEiE+laUgFsa4LpA", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:XR4XdC8Cp0ygHZHvGPTrCQ", callContext.id);
// Execute Action: Action_HandleMerge
controller._action_HandleMerge$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8HGHhFGTXkacJhBzcnnSWA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:shl+iEZsZ0u9bakL0HgCSQ", callContext.id);
}

};
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:rNi1mkj7Dkm18Ju7xcgWQg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.hzQlBmTYW0SHWEyhONFY7Q/ClientActions.rNi1mkj7Dkm18Ju7xcgWQg:mPKXENhiQ+OjaC9cTt8inQ", "UBTConnectLibrary", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cPp2QKIx90CDibYfFa3snw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:p91t3FY_PEuUiHbMO8vOnQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:rNi1mkj7Dkm18Ju7xcgWQg", callContext.id);
}

};
Controller.prototype._action_HandleMerge$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_HandleMerge");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:W2AHrQ3sTky2DFyXihgJnw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.hzQlBmTYW0SHWEyhONFY7Q/ClientActions.W2AHrQ3sTky2DFyXihgJnw:sGgopxuS+sWpoEip4uxprg", "UBTConnectLibrary", "Action_HandleMerge", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:npyE7E3jW0WsJDfMRp733Q", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LBoLk0S6tUKEOZpHlu0Glw", callContext.id) && model.variables.isTriggerAnimationIn)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+0U5QhhnF0a39a9U9qii8w", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_controller_Action_HandleMerge_AnimateJS, "Animate", "Action_HandleMerge", {
FInalHeight: OS.DataConversion.JSNodeParamConverter.to(model.variables.in_Header_FinalHeightPercentageIn, OS.DataTypes.DataTypes.Decimal),
TimeToMergeDots: OS.DataConversion.JSNodeParamConverter.to(model.variables.mergeDurationInSecondsVar, OS.DataTypes.DataTypes.Integer),
FinalCurvaturePercentage: OS.DataConversion.JSNodeParamConverter.to(model.variables.in_FinalCurvaturePercentageIn, OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
}, {
SVGHeader_GetPath: UBTConnectLibraryController.default.getClientActionProxies(controller).sVGHeader_GetPath$Action,
Action_AnimationCompleted: controller.clientActionProxies.action_AnimationCompleted$Action
}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zbkFHQt_ukK2F95oCxLa6Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:R9doUuXgZUG19k533VXoAw", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_LoadingDots_mvc_controller_Action_HandleMerge_AddBounceJS, "AddBounce", "Action_HandleMerge", {
InitialD: OS.DataConversion.JSNodeParamConverter.to(model.variables.initialDVar, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zbkFHQt_ukK2F95oCxLa6Q", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:W2AHrQ3sTky2DFyXihgJnw", callContext.id);
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:pHO__CuXLk6sYbcUkdyxug:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.hzQlBmTYW0SHWEyhONFY7Q/ClientActions.pHO__CuXLk6sYbcUkdyxug:JE4pxJmZOhNo6V_tLj2UYQ", "UBTConnectLibrary", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iHQkXr3TwUKhQau4bxfPrg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FbY2zKJBFE6az8iJnzNBYw", callContext.id);
// Execute Action: Action_HandleMerge
controller._action_HandleMerge$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MxgJKP6AmUqEeBX1_OYTLQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:pHO__CuXLk6sYbcUkdyxug", callContext.id);
}

};

Controller.prototype.action_AnimationCompleted$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_AnimationCompleted$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.action_HandleMerge$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_HandleMerge$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.animationComplete$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:hzQlBmTYW0SHWEyhONFY7Q:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.hzQlBmTYW0SHWEyhONFY7Q:8bWgnf2ljJa_Kw6mrowH1g", "UBTConnectLibrary", "LoadingDots", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:hzQlBmTYW0SHWEyhONFY7Q", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/LoadingDots On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/LoadingDots On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/LoadingDots On Parameters Changed");
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
define("UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$controller.OnReady.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
  gsap.registerPlugin(MorphSVGPlugin);
};
});
define("UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$controller.Action_HandleMerge.AnimateJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function runAnimation() {
  var dotContainer = document.querySelector(".ubt-loading-dots");
  var loadingText = document.querySelector(".ubt-loading-text");
  var dots = document.querySelectorAll(".ubt-loading-dots__dot");
  var svg = document.querySelector(".ubt-svg-container:has(.ubt-loading-svg)");
  var svgPath = svg.querySelector("svg path");

  dotContainer.classList.add("ubt-loading-header-animation");

  await wait($parameters.TimeToMergeDots * 1000 + 200);

  dots.forEach(function (element) {
    element.classList.remove("ubt-bounce");
  });

  svg.classList.add("ubt-fall-expand");
  dotContainer.classList.add("ubt-hide");
  loadingText.classList.add("ubt-hide");

  gsap.fromTo(
    svgPath,
    {
      scale: 0,
      transformOrigin: "50% 100%",
    },
    {
      scale: 4,
      transformOrigin: "50% 50%",
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(svgPath, {
          duration: 0.5,
          scale: 4,
          transformOrigin: "50% 25%",
          ease: "power2.inOut",
          morphSVG: {
            shape: `M0,0 H100 V100 H0 Z`,
            type: "rotational",
          },
          onComplete: () => {
            gsap.to(svgPath, {
              scale: 1,
              duration: 1,
              ease: "power2.inOut",
              morphSVG: {
                shape: $actions.SVGHeader_GetPath($parameters.FInalHeight,$parameters.FinalCurvaturePercentage, 0).Out_Path,
                type: "rotational",
              },
              onStart: () => {
                gsap.set(svgPath, { clearProps: "transform, scale" });
              },
              onComplete: () => {
                $actions.Action_AnimationCompleted()
              },
            });
          },
        });
      },
    }
  );

  await wait(2000);

  svg.classList.add("ubt-loading-svg-complete");
  svg.classList.remove("ubt-fall-expand");
}

runAnimation().then(function () {
  //console.log("finish");
});

};
});
define("UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$controller.Action_HandleMerge.AddBounceJS", [], function () {
return function ($parameters, $actions, $roles, $public) {

var dotContainer = document.querySelector('.ubt-loading-dots');
var dots = document.querySelectorAll('.ubt-loading-dots__dot');
var loadingText = document.querySelector(".ubt-loading-text");
var svg = document.querySelector('.ubt-svg-container');
var svgPath = svg.querySelector('svg path');

dots.forEach(function(element){
        element.classList.add('ubt-bounce');
});

dotContainer.classList.remove('ubt-hide');
loadingText.classList.remove("ubt-hide");
svg.classList.remove('ubt-loading-svg-complete');
svg.classList.remove('ubt-fall-expand')
svgPath?.setAttribute("d", $parameters.InitialD);



};
});

define("UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"UnovQ2GEiE+laUgFsa4LpA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"+0U5QhhnF0a39a9U9qii8w": {
getter: function (varBag, idService) {
return varBag.animateJSResult.value;
}
},
"R9doUuXgZUG19k533VXoAw": {
getter: function (varBag, idService) {
return varBag.addBounceJSResult.value;
}
},
"U9XaDlvYUE6M1jBGZ8KXfQ": {
getter: function (varBag, idService) {
return varBag.model.variables.mergeDurationInSecondsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ueJXlWd+ZUO9FumIdmSJOw": {
getter: function (varBag, idService) {
return varBag.model.variables.initialDVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zvJM+_gT5ESsr0W6QII5yA": {
getter: function (varBag, idService) {
return varBag.model.variables.isTriggerAnimationIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ZBMhWBGoVkqw4N7U6L2lnQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_Header_FinalHeightPercentageIn;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"w5k1LOz1wkOZwCjDS8XFuQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FinalCurvaturePercentageIn;
},
dataType: OS.DataTypes.DataTypes.Decimal
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
