define("UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$model", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.controller$SetScrollShadow", "UBTConnectLibrary.controller$SetMainFixedScroll", "UBTConnectLibrary.controller$ClearTimeout", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$SkipToContent"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, OutSystemsUI_2_23_Private_PullToRefresh_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsHeaderScrolled", "isHeaderScrolledVar", "IsHeaderScrolled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ScrollElement", "scrollElementVar", "ScrollElement", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("ScrollEvent", "scrollEventVar", "ScrollEvent", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("ShadowScrollEvent", "shadowScrollEventVar", "ShadowScrollEvent", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("ShadowTimeout", "shadowTimeoutVar", "ShadowTimeout", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("UsePullToRefresh", "usePullToRefreshIn", "UsePullToRefresh", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isGrayBackground", "isGrayBackgroundIn", "isGrayBackground", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isGrayBackgroundInDataFetchStatus", "_isGrayBackgroundInDataFetchStatus", "_isGrayBackgroundInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Private_PullToRefresh_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("UsePullToRefresh" in inputs) {
this.variables.usePullToRefreshIn = inputs.UsePullToRefresh;
if("_usePullToRefreshInDataFetchStatus" in inputs) {
this.variables._usePullToRefreshInDataFetchStatus = inputs._usePullToRefreshInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

if("EnableAccessibilityFeatures" in inputs) {
this.variables.enableAccessibilityFeaturesIn = inputs.EnableAccessibilityFeatures;
if("_enableAccessibilityFeaturesInDataFetchStatus" in inputs) {
this.variables._enableAccessibilityFeaturesInDataFetchStatus = inputs._enableAccessibilityFeaturesInDataFetchStatus;
}

}

if("isGrayBackground" in inputs) {
this.variables.isGrayBackgroundIn = inputs.isGrayBackground;
if("_isGrayBackgroundInDataFetchStatus" in inputs) {
this.variables._isGrayBackgroundInDataFetchStatus = inputs._isGrayBackgroundInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Layouts.Layout_MainPages_FixedTitle");
});
define("UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$model", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$controller", "UBTConnectLibrary.clientVariables", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$view", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.controller$SetScrollShadow", "UBTConnectLibrary.controller$SetMainFixedScroll", "UBTConnectLibrary.controller$ClearTimeout", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$SkipToContent"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, React, OSView, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_model, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_controller, UBTConnectLibraryClientVariables, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view) {
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
        View.displayName = "Layouts.Layout_MainPages_FixedTitle";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js", "scripts/UBTConnectLibrary.ScrollAnimations.js"];
        };
        View.getBlocks = function() {
            return [NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, {
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
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("LayoutWrapper_Main.Style"), function () {
return ((("layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title hide-header-on-scroll" + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn)))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features"))) + ((model.variables.isGrayBackgroundIn) ? (" layout-gray-background") : ("")));
}, function () {
return model.variables.extendedClassIn;
}, function () {
return model.variables.enableAccessibilityFeaturesIn;
}, function () {
return model.variables.isGrayBackgroundIn;
}),
visible: true,
_idProps: {
service: idService,
name: "LayoutWrapper_Main"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus, model.variables._isGrayBackgroundInDataFetchStatus)
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"aria-label": "Skip to Content (Press Enter)",
"data-showskipcontent": model.getCachedValue(idService.getId("xcFeEOKllkG2lWZVg8Cq4g.data-showskipcontent"), function () {
return ((model.variables.enableAccessibilityFeaturesIn) ? ("true") : ("false"));
}, function () {
return model.variables.enableAccessibilityFeaturesIn;
})
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_MainPages_FixedTitle/Link OnClick");
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
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "sticky-observer",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
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
style: "header-top-title",
visible: true,
_idProps: {
service: idService,
name: "HeaderTitle"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-content display-flex flex-direction-column justify-content-flex-start",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-layout-main__title",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("MyNzxrOIx0yEuPd6X5hUAQ.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
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
uuid: "9",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "header-title"
},
tag: "h2",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Header_Title,
gridProperties: {
classes: "OSInline"
},
_idProps: {
service: idService,
name: "Placeholder_Header_Title"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
right: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Header_Right,
style: "header-right",
_idProps: {
service: idService,
name: "Placeholder_Header_Right"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-top-search",
visible: true,
_idProps: {
service: idService,
name: "HeaderSearch"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-content display-flex flex-direction-column justify-content-flex-start",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-layout-main__search",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("lCooUhTpNkaQ8Rgxz6r0JQ.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
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
uuid: "16",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Header_Input,
_idProps: {
service: idService,
name: "Placeholder_Header_Input"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Header_Input_Icon,
style: "header-right",
_idProps: {
service: idService,
name: "Placeholder_Header_Input_Icon"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
})))), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerContent,
style: "header-top-content ph",
_idProps: {
service: idService,
name: "HeaderContent"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(model.variables.usePullToRefreshIn, false, this, function () {
return [React.createElement(OutSystemsUI_2_23_Private_PullToRefresh_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onContentPull$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/PullToRefresh OnContentPull");
return controller.onHandle_OnPullToRefreshTrigger$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "20",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
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
uuid: "24"
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
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "offline-data-sync",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_CommonUI_Inside_Layout,
_idProps: {
service: idService,
name: "Placeholder_CommonUI_Inside_Layout"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$debugger", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$controller.SetScrollEvents.GetCallbackFunctionJS", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.controller$SetScrollShadow", "UBTConnectLibrary.controller$SetMainFixedScroll", "UBTConnectLibrary.controller$ClearTimeout", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$SkipToContent"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_Debugger, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_controller_SetScrollEvents_GetCallbackFunctionJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onHandle_OnHeaderScrolledTrigger$Action: function (in_IsHeaderScrolledIn) {
in_IsHeaderScrolledIn = (in_IsHeaderScrolledIn === undefined) ? false : in_IsHeaderScrolledIn;
return controller.executeActionInsideJSNode(controller._onHandle_OnHeaderScrolledTrigger$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_IsHeaderScrolledIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnHandle_OnHeaderScrolledTrigger");
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
var setMainFixedScrollVar = new OS.DataTypes.VariableHolder();
var getCallbackFunctionJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setScrollShadowVar = setScrollShadowVar;
varBag.setMainFixedScrollVar = setMainFixedScrollVar;
varBag.getCallbackFunctionJSResult = getCallbackFunctionJSResult;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:IrH_AbpibEKZTuL76XccWw:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.IXXnjeNWMkuaIB8f3zyNyQ/ClientActions.IrH_AbpibEKZTuL76XccWw:U0UPInxcFSCyoYRDoRkuOw", "UBTConnectLibrary", "SetScrollEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:GS29DGBO40q2_xeaeIfA1A", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yeVRPqXlIkG8aSvwcY5izg", callContext.id);
getCallbackFunctionJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_controller_SetScrollEvents_GetCallbackFunctionJS, "GetCallbackFunction", "SetScrollEvents", {
Out_CallbackFunction: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.SetScrollEvents$getCallbackFunctionJSResult"))();
jsNodeResult.out_CallbackFunctionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_CallbackFunction, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OnHandle_OnHeaderScrolledTrigger: controller.clientActionProxies.onHandle_OnHeaderScrolledTrigger$Action
}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:IewWoKwxE0GDPA_iCkePQA", callContext.id);
// Execute Action: SetMainFixedScroll
setMainFixedScrollVar.value = UBTConnectLibraryController.default.setMainFixedScroll$Action(getCallbackFunctionJSResult.value.out_CallbackFunctionOut, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8lJREUELK0unLM4TbH_Kxw", callContext.id);
// Execute Action: SetScrollShadow
setScrollShadowVar.value = UBTConnectLibraryController.default.setScrollShadow$Action(callContext);

// Set Destroy Objects
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Yk7c8Nj3k0ez7vsdyZv4pQ", callContext.id);
// ScrollElement = SetMainFixedScroll.Out_Element
model.variables.scrollElementVar = setMainFixedScrollVar.value.out_ElementOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Yk7c8Nj3k0ez7vsdyZv4pQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScrollEvent = SetMainFixedScroll.Out_ScrollEvent
model.variables.scrollEventVar = setMainFixedScrollVar.value.out_ScrollEventOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Yk7c8Nj3k0ez7vsdyZv4pQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ShadowScrollEvent = SetScrollShadow.Out_ScrollEvent
model.variables.shadowScrollEventVar = setScrollShadowVar.value.out_ScrollEventOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Yk7c8Nj3k0ez7vsdyZv4pQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ShadowTimeout = SetScrollShadow.Out_Timeout
model.variables.shadowTimeoutVar = setScrollShadowVar.value.out_TimeoutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:l_TO35VKFUWSS0noMccpEA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:IrH_AbpibEKZTuL76XccWw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.SetScrollEvents$getCallbackFunctionJSResult", [{
name: "Out_CallbackFunction",
attrName: "out_CallbackFunctionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:0ct3LZCSgEegU_wTmW5CNA:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.IXXnjeNWMkuaIB8f3zyNyQ/ClientActions.0ct3LZCSgEegU_wTmW5CNA:_hXrhYywwcMZlaPz7os70w", "UBTConnectLibrary", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:p_tern4qqE2jBmBuE_1p3w", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9A_a17B900i3Venfv01jHw", callContext.id);
// Execute Action: RemoveScrollEvents
UBTConnectLibraryController.default.removeScrollEvents$Action(model.variables.scrollElementVar, model.variables.scrollEventVar, model.variables.shadowScrollEventVar, callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Ar5VVBxwEk+NP5lR9upy+g", callContext.id);
// Execute Action: ClearTimeout
UBTConnectLibraryController.default.clearTimeout$Action(model.variables.shadowTimeoutVar, callContext);
// Null Objects
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ObM+87B6aEaE1oFdfOozuw", callContext.id);
// ScrollElement = NullObject
model.variables.scrollElementVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ObM+87B6aEaE1oFdfOozuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScrollEvent = NullObject
model.variables.scrollEventVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ObM+87B6aEaE1oFdfOozuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ShadowScrollEvent = NullObject
model.variables.shadowScrollEventVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ObM+87B6aEaE1oFdfOozuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ShadowTimeout = NullObject
model.variables.shadowTimeoutVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WTm56bZAkEqLzZQadIlvBA", callContext.id);
// Execute Action: LayoutDestroy
OutSystemsUI_2_23Controller.default.layoutDestroy$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ArSa9eTxmEu_2JtgutCThQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:0ct3LZCSgEegU_wTmW5CNA", callContext.id);
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
var addFaviconVar = new OS.DataTypes.VariableHolder();
var setLangVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.addFaviconVar = addFaviconVar;
varBag.setLangVar = setLangVar;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:VoGWPJLZkk2gdS+_g+p_IQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.IXXnjeNWMkuaIB8f3zyNyQ/ClientActions.VoGWPJLZkk2gdS+_g+p_IQ:fub23J0Q+z6RARXJKmS5sA", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JR73WMnlPkWjTjBHQaIocQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:DoEvldAWbkKPrViNQK2Mjg", callContext.id);
// Execute Action: LayoutReady
OutSystemsUI_2_23Controller.default.layoutReady$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_1bG1qsY20q8aQAQA4imLA", callContext.id);
// Execute Action: SetScrollEvents
controller._setScrollEvents$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vrnDw2S9gEmL2aYxK5FANQ", callContext.id);
// Execute Action: SetLang
setLangVar.value = OutSystemsUI_2_23Controller.default.setLang$Action("", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KRSJWe3pTEuJchpfjLYkqA", callContext.id);
// Execute Action: AddFavicon
addFaviconVar.value = OutSystemsUI_2_23Controller.default.addFavicon$Action("favicon.png", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_IvhXpvAgU6iBSV31iNYAw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:VoGWPJLZkk2gdS+_g+p_IQ", callContext.id);
}

};
Controller.prototype._onHandle_OnPullToRefreshTrigger$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_OnPullToRefreshTrigger");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:+RruV6YLokGpJgE4TNhcEw:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.IXXnjeNWMkuaIB8f3zyNyQ/ClientActions.+RruV6YLokGpJgE4TNhcEw:gXzrsF5XdmqG03EVDFF6_Q", "UBTConnectLibrary", "OnHandle_OnPullToRefreshTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:VNHKPEjnFEGgnCQlPL3eRA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CVcuOMxoEEOzCAEQoclZOw", callContext.id);
// Trigger Event: OnPullToRefresh
return controller.onPullToRefresh$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:94xQPFc7XkOt6MbGMCfD4Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:+RruV6YLokGpJgE4TNhcEw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:+RruV6YLokGpJgE4TNhcEw", callContext.id);
throw ex;

});
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:NVq_XGJlh0OXtKeaWlmZCg:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.IXXnjeNWMkuaIB8f3zyNyQ/ClientActions.NVq_XGJlh0OXtKeaWlmZCg:Ye6IhiAqmJCznY7Me6nxJw", "UBTConnectLibrary", "SkipToContentOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:XLu3S_LfrU61CHGhMgVrVA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cF0uZXS4DEeIeYBsNQs3WA", callContext.id);
// Execute Action: SkipToContent
skipToContentVar.value = OutSystemsUI_2_23Controller.default.skipToContent$Action(idService.getId("MainContentWrapper"), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:gdsCa6sWQkqdtyo6X_rZVA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:NVq_XGJlh0OXtKeaWlmZCg", callContext.id);
}

};
Controller.prototype._onHandle_OnHeaderScrolledTrigger$Action = function (in_IsHeaderScrolledIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_OnHeaderScrolledTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.OnHandle_OnHeaderScrolledTrigger$vars"))());
vars.value.in_IsHeaderScrolledInLocal = in_IsHeaderScrolledIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:gMrc6AgSn0m6fVedClZ52Q:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.IXXnjeNWMkuaIB8f3zyNyQ/ClientActions.gMrc6AgSn0m6fVedClZ52Q:QQHFvizoZsJWDCDVeSIyYg", "UBTConnectLibrary", "OnHandle_OnHeaderScrolledTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:VPG7hR4LIUSdWlG1Map88Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Z3d6VqreyE2oNmzM0KfgwQ", callContext.id);
// IsHeaderScrolled = In_IsHeaderScrolled
model.variables.isHeaderScrolledVar = vars.value.in_IsHeaderScrolledInLocal;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3DCeQSAjRke6+UtHmBmBIw", callContext.id);
// Trigger Event: OnHeaderScrolled
return controller.onHeaderScrolled$Action(model.variables.isHeaderScrolledVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NNA9J+CYVkqf_G6gJHXi6A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:gMrc6AgSn0m6fVedClZ52Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:gMrc6AgSn0m6fVedClZ52Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.OnHandle_OnHeaderScrolledTrigger$vars", [{
name: "In_IsHeaderScrolled",
attrName: "in_IsHeaderScrolledInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.setScrollEvents$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setScrollEvents$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onHandle_OnPullToRefreshTrigger$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_OnPullToRefreshTrigger$Action, callContext);

};
Controller.prototype.skipToContentOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._skipToContentOnClick$Action, callContext);

};
Controller.prototype.onHandle_OnHeaderScrolledTrigger$Action = function (in_IsHeaderScrolledIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_OnHeaderScrolledTrigger$Action, callContext, in_IsHeaderScrolledIn);

};
Controller.prototype.onPullToRefresh$Action = function () {
return Promise.resolve();
};
Controller.prototype.onHeaderScrolled$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:szBrd5WGsE6bcDfQ68RumQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ:LSOi3iQzjd8avvO2ZKIsMw", "UBTConnectLibrary", "Layouts", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:IXXnjeNWMkuaIB8f3zyNyQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.IXXnjeNWMkuaIB8f3zyNyQ:KOT4dpPg0on7VkX5Le71tw", "UBTConnectLibrary", "Layout_MainPages_FixedTitle", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:IXXnjeNWMkuaIB8f3zyNyQ", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Layout_MainPages_FixedTitle On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Layout_MainPages_FixedTitle On Destroy");
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
define("UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$controller.SetScrollEvents.GetCallbackFunctionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Out_CallbackFunction = $actions.OnHandle_OnHeaderScrolledTrigger;
};
});

define("UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"8lJREUELK0unLM4TbH_Kxw": {
getter: function (varBag, idService) {
return varBag.setScrollShadowVar.value;
}
},
"IewWoKwxE0GDPA_iCkePQA": {
getter: function (varBag, idService) {
return varBag.setMainFixedScrollVar.value;
}
},
"yeVRPqXlIkG8aSvwcY5izg": {
getter: function (varBag, idService) {
return varBag.getCallbackFunctionJSResult.value;
}
},
"KRSJWe3pTEuJchpfjLYkqA": {
getter: function (varBag, idService) {
return varBag.addFaviconVar.value;
}
},
"vrnDw2S9gEmL2aYxK5FANQ": {
getter: function (varBag, idService) {
return varBag.setLangVar.value;
}
},
"cF0uZXS4DEeIeYBsNQs3WA": {
getter: function (varBag, idService) {
return varBag.skipToContentVar.value;
}
},
"uQV1OHjFc0Wi+TPrNMQVQw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsHeaderScrolledInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"GICbhuID2k2VA36mKCOcEA": {
getter: function (varBag, idService) {
return varBag.model.variables.isHeaderScrolledVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"XetKVdiM1USkYQPVhFwAdw": {
getter: function (varBag, idService) {
return varBag.model.variables.scrollElementVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"NsiQhGa4eUy39v2eGkBlgQ": {
getter: function (varBag, idService) {
return varBag.model.variables.scrollEventVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"ILrUHJDNYk6q14+LUNCoOA": {
getter: function (varBag, idService) {
return varBag.model.variables.shadowScrollEventVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"rU72EYRCC0iHYRmFNgrPjQ": {
getter: function (varBag, idService) {
return varBag.model.variables.shadowTimeoutVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"5vLj0nrTDEuGUQWDmPxu6Q": {
getter: function (varBag, idService) {
return varBag.model.variables.usePullToRefreshIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"k8wxkhNlHkGAyMansPE5ug": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+m1c7CIZbE+SXD9KIOj3nA": {
getter: function (varBag, idService) {
return varBag.model.variables.enableAccessibilityFeaturesIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Z_dR7AgsgkyPlulc+YoYXg": {
getter: function (varBag, idService) {
return varBag.model.variables.isGrayBackgroundIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ySiHfp7l60mXNuvIFHjKcQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LayoutWrapper_Main"));
})(varBag.model, idService);
}
},
"u1AQPo0CLEixEyLYhRadQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header"));
})(varBag.model, idService);
}
},
"bq9ZJyAHJkGxvpeOzSJK4A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderTitle"));
})(varBag.model, idService);
}
},
"9DlQO9I7OkygzJ+Xr0lGog": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"+r00PGv4k0SgomxndDA6tg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"AHKc75B_RU+lZKK4st6cyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"KvE_1ecja0mH4SsvmONKDQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"WVtG7dfIa0m+DG3Et+2qqQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderSearch"));
})(varBag.model, idService);
}
},
"4LUoEZC6mkCSheeTeKnBwA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"uKKR6mTAeUu14PgTlfqnJw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Input"));
})(varBag.model, idService);
}
},
"3Qy18N8hRUG201P+fJ6UxA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"RMvh78aDqkmlQ2VNGM7P2g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Input_Icon"));
})(varBag.model, idService);
}
},
"ZDPyvZmIQU6I2sfslFVG+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"+Ws3hxOVvk2gepcqX8HJ7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PullToRefresh"));
})(varBag.model, idService);
}
},
"Xpd79+SXkEm+Z3dv_E5pmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentWrapper"));
})(varBag.model, idService);
}
},
"wzxrnSaa7keJW7bnN3pP0g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MainContentWrapper"));
})(varBag.model, idService);
}
},
"xq79NKqs0kO1olM1LjBlXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"CpWe6JLFiEuOx0nO8LyVNg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"7QXOtf_prEaIO2aVXxn3Mg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
