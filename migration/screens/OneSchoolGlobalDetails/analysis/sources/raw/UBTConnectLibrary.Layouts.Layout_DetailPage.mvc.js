define("UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.controller$SetScrollShadow", "UBTConnectLibrary.controller$ClearTimeout", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SkipToContent", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$AddFavicon"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ScrollElement", "scrollElementVar", "ScrollElement", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("ScrollEvent", "scrollEventVar", "ScrollEvent", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("ShadowTimeout", "shadowTimeoutVar", "ShadowTimeout", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("In_AlignTitleLeft", "in_AlignTitleLeftIn", "In_AlignTitleLeft", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_AlignTitleLeftInDataFetchStatus", "_in_AlignTitleLeftInDataFetchStatus", "_in_AlignTitleLeftInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsPrimaryColor", "in_IsPrimaryColorIn", "In_IsPrimaryColor", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_in_IsPrimaryColorInDataFetchStatus", "_in_IsPrimaryColorInDataFetchStatus", "_in_IsPrimaryColorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClass", "in_ExtendedClassIn", "In_ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EnableAccessibilityFeatures", "in_EnableAccessibilityFeaturesIn", "In_EnableAccessibilityFeatures", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_EnableAccessibilityFeaturesInDataFetchStatus", "_in_EnableAccessibilityFeaturesInDataFetchStatus", "_in_EnableAccessibilityFeaturesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_InitializeNavigationHandler", "in_InitializeNavigationHandlerIn", "In_InitializeNavigationHandler", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_in_InitializeNavigationHandlerInDataFetchStatus", "_in_InitializeNavigationHandlerInDataFetchStatus", "_in_InitializeNavigationHandlerInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_AlignTitleLeft" in inputs) {
this.variables.in_AlignTitleLeftIn = inputs.In_AlignTitleLeft;
if("_in_AlignTitleLeftInDataFetchStatus" in inputs) {
this.variables._in_AlignTitleLeftInDataFetchStatus = inputs._in_AlignTitleLeftInDataFetchStatus;
}

}

if("In_IsPrimaryColor" in inputs) {
this.variables.in_IsPrimaryColorIn = inputs.In_IsPrimaryColor;
if("_in_IsPrimaryColorInDataFetchStatus" in inputs) {
this.variables._in_IsPrimaryColorInDataFetchStatus = inputs._in_IsPrimaryColorInDataFetchStatus;
}

}

if("In_ExtendedClass" in inputs) {
this.variables.in_ExtendedClassIn = inputs.In_ExtendedClass;
if("_in_ExtendedClassInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClassInDataFetchStatus = inputs._in_ExtendedClassInDataFetchStatus;
}

}

if("In_EnableAccessibilityFeatures" in inputs) {
this.variables.in_EnableAccessibilityFeaturesIn = inputs.In_EnableAccessibilityFeatures;
if("_in_EnableAccessibilityFeaturesInDataFetchStatus" in inputs) {
this.variables._in_EnableAccessibilityFeaturesInDataFetchStatus = inputs._in_EnableAccessibilityFeaturesInDataFetchStatus;
}

}

if("In_InitializeNavigationHandler" in inputs) {
this.variables.in_InitializeNavigationHandlerIn = inputs.In_InitializeNavigationHandler;
if("_in_InitializeNavigationHandlerInDataFetchStatus" in inputs) {
this.variables._in_InitializeNavigationHandlerInDataFetchStatus = inputs._in_InitializeNavigationHandlerInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Layouts.Layout_DetailPage");
});
define("UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$controller", "UBTConnectLibrary.clientVariables", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.controller$SetScrollShadow", "UBTConnectLibrary.controller$ClearTimeout", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SkipToContent", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$AddFavicon"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, React, OSView, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_model, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_controller, UBTConnectLibraryClientVariables, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "Layouts.Layout_DetailPage";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js", "scripts/UBTConnectLibrary.ScrollAnimations.js"];
        };
        View.getBlocks = function() {
            return [NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.in_InitializeNavigationHandlerIn, false, this, function () {
return [React.createElement(NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, {
inputs: {},
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
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("LayoutWrapper_Detail.Style"), function () {
return ((("layout layout-side layout-native ios-bounce ubt-layout-detail" + ((model.variables.in_IsPrimaryColorIn) ? (" ubt-layout-detail--primary") : (""))) + (((model.variables.in_ExtendedClassIn === "")) ? ("") : ((" " + model.variables.in_ExtendedClassIn)))) + ((!(model.variables.in_EnableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features")));
}, function () {
return model.variables.in_IsPrimaryColorIn;
}, function () {
return model.variables.in_ExtendedClassIn;
}, function () {
return model.variables.in_EnableAccessibilityFeaturesIn;
}),
visible: true,
_idProps: {
service: idService,
name: "LayoutWrapper_Detail"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsPrimaryColorInDataFetchStatus, model.variables._in_ExtendedClassInDataFetchStatus, model.variables._in_EnableAccessibilityFeaturesInDataFetchStatus)
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"aria-label": "Skip to Content (Press Enter)",
"data-showskipcontent": model.getCachedValue(idService.getId("V5YakSJM8kiHOfCzAiNSpg.data-showskipcontent"), function () {
return ((model.variables.in_EnableAccessibilityFeaturesIn) ? ("true") : ("false"));
}, function () {
return model.variables.in_EnableAccessibilityFeaturesIn;
})
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_DetailPage/Link OnClick");
controller.skipToContentOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "skip-nav",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Skip to Content (Press Enter)"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "main",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "banner",
className: "header"
},
tag: "header",
_idProps: {
service: idService,
name: "Header"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-top",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-content",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-layout-detail__left",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.arrowLeftAlt,
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.inherit,
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.base_24
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
controller.onClick_BackNavigation$Action(controller.callContext(eventHandlerContext));
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
uuid: "8",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Header_Title,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("Placeholder_Header_Title.Style"), function () {
return ("header-title" + ((model.variables.in_AlignTitleLeftIn) ? (" text-align-left") : (" text-align-center")));
}, function () {
return model.variables.in_AlignTitleLeftIn;
}),
_idProps: {
service: idService,
name: "Placeholder_Header_Title"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AlignTitleLeftInDataFetchStatus)
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Header_Right,
style: "header-right",
_idProps: {
service: idService,
name: "Placeholder_Header_Right"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerContent,
style: "header-top-content ph",
_idProps: {
service: idService,
name: "HeaderContent"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content",
visible: true,
_idProps: {
service: idService,
name: "ContentWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
role: "main"
},
style: "main-content ThemeGrid_Container",
visible: true,
_idProps: {
service: idService,
name: "MainContentWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "content-middle",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "contentinfo",
className: "content-bottom"
},
tag: "footer",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.bottom,
style: "footer ph",
_idProps: {
service: idService,
name: "Bottom"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_CommonUI_Inside_Layout,
_idProps: {
service: idService,
name: "Placeholder_CommonUI_Inside_Layout"
},
_widgetRecordProvider: widgetsRecordProvider
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$debugger", "UBTConnectLibrary.controller$SetScrollShadow", "UBTConnectLibrary.controller$ClearTimeout", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SkipToContent", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$AddFavicon"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_Debugger) {
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
Controller.prototype._onClick_BackNavigation$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_BackNavigation");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:iFDYYPC0IE6jaLqzEymn4A:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.rZtkhfag2kOPgRW3ZluqUw/ClientActions.iFDYYPC0IE6jaLqzEymn4A:DBQc7S3HLI41MIKO0jEq4g", "UBTConnectLibrary", "OnClick_BackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kuKZCr0C1EqWPqcpLvnwtg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:m2mKoHN7m0yMa8LOnzQpQg", callContext.id);
// Destination: (PreviousScreen)
return OS.Navigation.navigateBack(null, callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:iFDYYPC0IE6jaLqzEymn4A", callContext.id);
}

};
Controller.prototype._setScrollEvents$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetScrollEvents");
callContext = controller.callContext(callContext);
var setScrollShadowVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setScrollShadowVar = setScrollShadowVar;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:DWY6dV7+x0Kd4xV8n2M_MQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.rZtkhfag2kOPgRW3ZluqUw/ClientActions.DWY6dV7+x0Kd4xV8n2M_MQ:tqNxkGR7NzQI+QFrlpmBcw", "UBTConnectLibrary", "SetScrollEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oU7sd0B88kS2db+pI31ZaA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:OZYTasye6UGc++XI_0K29w", callContext.id);
// Execute Action: SetScrollShadow
setScrollShadowVar.value = UBTConnectLibraryController.default.setScrollShadow$Action(callContext);

// Set Destroy Objects
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RZeKH5cZ1Eunqnaui7rouA", callContext.id);
// ScrollElement = SetScrollShadow.Out_Element
model.variables.scrollElementVar = setScrollShadowVar.value.out_ElementOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RZeKH5cZ1Eunqnaui7rouA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScrollEvent = SetScrollShadow.Out_ScrollEvent
model.variables.scrollEventVar = setScrollShadowVar.value.out_ScrollEventOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RZeKH5cZ1Eunqnaui7rouA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ShadowTimeout = SetScrollShadow.Out_Timeout
model.variables.shadowTimeoutVar = setScrollShadowVar.value.out_TimeoutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8kMqx6eUmUCwK0JluBnbHA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:DWY6dV7+x0Kd4xV8n2M_MQ", callContext.id);
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:SSE1zPSGi028XZfn02KOrw:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.rZtkhfag2kOPgRW3ZluqUw/ClientActions.SSE1zPSGi028XZfn02KOrw:eOQI2raykkHkB8t8sz+iYA", "UBTConnectLibrary", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:aSGDVlo3GEGXX95TvWf_Ow", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:mt8jIjCwHU2kqS3BIME1EA", callContext.id);
// Execute Action: RemoveScrollEvents
UBTConnectLibraryController.default.removeScrollEvents$Action(model.variables.scrollElementVar, model.variables.scrollEventVar, null, callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KZ6JGYco_0iWiHF4BIlYJQ", callContext.id);
// Execute Action: ClearTimeout
UBTConnectLibraryController.default.clearTimeout$Action(model.variables.shadowTimeoutVar, callContext);
// Null Objects
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Y2pclnJLMUGrmShpBsGkhQ", callContext.id);
// ScrollElement = NullObject
model.variables.scrollElementVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Y2pclnJLMUGrmShpBsGkhQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScrollEvent = NullObject
model.variables.scrollEventVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Y2pclnJLMUGrmShpBsGkhQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ShadowTimeout = NullObject
model.variables.shadowTimeoutVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7JOhVpQ4KEGHMdLtT4aEvA", callContext.id);
// Execute Action: LayoutDestroy
OutSystemsUI_2_23Controller.default.layoutDestroy$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tQvI_I7Ock2YT4UzJnmAQA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:SSE1zPSGi028XZfn02KOrw", callContext.id);
}

};
Controller.prototype._skipToContentOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SkipToContentOnClick");
callContext = controller.callContext(callContext);
var skipToContentVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.skipToContentVar = skipToContentVar;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:DCi_837yokuJtOxDUp9dRw:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.rZtkhfag2kOPgRW3ZluqUw/ClientActions.DCi_837yokuJtOxDUp9dRw:cqxtmxCSecZlMxAUNgPU7A", "UBTConnectLibrary", "SkipToContentOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bOCqnpDOgEODWZazEWuGUQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:m16CsiNwgkahJTxMmCLWfA", callContext.id);
// Execute Action: SkipToContent
skipToContentVar.value = OutSystemsUI_2_23Controller.default.skipToContent$Action(idService.getId("MainContentWrapper"), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3KMCB8FLmk+I5oWokFm8Rw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:DCi_837yokuJtOxDUp9dRw", callContext.id);
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
var setLangVar = new OS.DataTypes.VariableHolder();
var addFaviconVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setLangVar = setLangVar;
varBag.addFaviconVar = addFaviconVar;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:jk9j_N7KEUyGm1EBBSmVEg:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.rZtkhfag2kOPgRW3ZluqUw/ClientActions.jk9j_N7KEUyGm1EBBSmVEg:KtGaHuuSr7iY7mdicK2VOg", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:h9bjhyWBZ0K734IdUIqm2A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PGJ3SIxiP0yP72WGBa1lAw", callContext.id);
// Execute Action: LayoutReady
OutSystemsUI_2_23Controller.default.layoutReady$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rZdgx8FHVEaBK6L5KKR8Xw", callContext.id);
// Execute Action: SetScrollEvents
controller._setScrollEvents$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JcADjNEujEOB1F0x0c1sMw", callContext.id);
// Execute Action: SetLang
setLangVar.value = OutSystemsUI_2_23Controller.default.setLang$Action("", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2kRc3JxOIkaR0U9A0bBqTA", callContext.id);
// Execute Action: AddFavicon
addFaviconVar.value = OutSystemsUI_2_23Controller.default.addFavicon$Action("favicon.png", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ERsNqUK6f0KJr+jy4dwADA", callContext.id);
// Trigger Event: OnReadyEvent
return controller.onReadyEvent$Action(idService.getId("LayoutWrapper_Detail"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xRkQbmjFHkSZ6ja5LGSF1g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:jk9j_N7KEUyGm1EBBSmVEg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:jk9j_N7KEUyGm1EBBSmVEg", callContext.id);
throw ex;

});
};

Controller.prototype.onClick_BackNavigation$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_BackNavigation$Action, callContext);

};
Controller.prototype.setScrollEvents$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setScrollEvents$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.skipToContentOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._skipToContentOnClick$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onReadyEvent$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:szBrd5WGsE6bcDfQ68RumQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ:LSOi3iQzjd8avvO2ZKIsMw", "UBTConnectLibrary", "Layouts", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:rZtkhfag2kOPgRW3ZluqUw:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.rZtkhfag2kOPgRW3ZluqUw:vClcaUXy0JnE4k2GJzn77Q", "UBTConnectLibrary", "Layout_DetailPage", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:rZtkhfag2kOPgRW3ZluqUw", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:szBrd5WGsE6bcDfQ68RumQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Layout_DetailPage On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Layout_DetailPage On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = null;
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

define("UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"OZYTasye6UGc++XI_0K29w": {
getter: function (varBag, idService) {
return varBag.setScrollShadowVar.value;
}
},
"m16CsiNwgkahJTxMmCLWfA": {
getter: function (varBag, idService) {
return varBag.skipToContentVar.value;
}
},
"JcADjNEujEOB1F0x0c1sMw": {
getter: function (varBag, idService) {
return varBag.setLangVar.value;
}
},
"2kRc3JxOIkaR0U9A0bBqTA": {
getter: function (varBag, idService) {
return varBag.addFaviconVar.value;
}
},
"XbsGvsQ2rkaOlCGkM48+Qw": {
getter: function (varBag, idService) {
return varBag.model.variables.scrollElementVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"v5xgrZjwX0ybNBucUUVK3g": {
getter: function (varBag, idService) {
return varBag.model.variables.scrollEventVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"2snymCgYVEeXPbfZems1KA": {
getter: function (varBag, idService) {
return varBag.model.variables.shadowTimeoutVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"danIPl3YfU+Q6eKzAiavvA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AlignTitleLeftIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4K6G+OapCUmeu1PmHg6BOg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsPrimaryColorIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1du9eRQ6dkSX44aZG48ptQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tM7kYxKP50y8Esua8L1c6A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EnableAccessibilityFeaturesIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"M1yrmdNhrEixJFZkN07lqw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_InitializeNavigationHandlerIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ZTAjDCz2jkuL_x5f7r4qyg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LayoutWrapper_Detail"));
})(varBag.model, idService);
}
},
"jFQvRtLCtEi6DvfpHz7H2A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header"));
})(varBag.model, idService);
}
},
"mDUKWaxQBU6V2a3eI3xcYA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"luhcpFL7dUWZyKCTj8UbNw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"eFNvWsKH5EW_0tV80AuYwA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"wQmS5_bRlEys2S9Y336M+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentWrapper"));
})(varBag.model, idService);
}
},
"l9GxuocmQ0OTUzALGT_8qQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MainContentWrapper"));
})(varBag.model, idService);
}
},
"1l_zFoe1Tky0meweprI9+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"H463dpNivk2WNTxki_YS1w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"2lsp+lB2QU6ANpeV9ZmbiQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
