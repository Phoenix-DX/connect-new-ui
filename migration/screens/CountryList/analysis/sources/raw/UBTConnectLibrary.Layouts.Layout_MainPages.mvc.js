define("UBTConnectLibrary.Layouts.Layout_MainPages.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$model", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$SkipToContent", "UBTConnectLibrary.controller$ClearTimeout", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$LayoutReady", "UBTConnectLibrary.controller$SetMainScroll", "UBTConnectLibrary.controller$SetScrollShadow"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, OutSystemsUI_2_23_Private_PullToRefresh_mvcModel) {
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
}, false), 
this.attr("AddHeaderGap", "addHeaderGapIn", "AddHeaderGap", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_addHeaderGapInDataFetchStatus", "_addHeaderGapInDataFetchStatus", "_addHeaderGapInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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

if("AddHeaderGap" in inputs) {
this.variables.addHeaderGapIn = inputs.AddHeaderGap;
if("_addHeaderGapInDataFetchStatus" in inputs) {
this.variables._addHeaderGapInDataFetchStatus = inputs._addHeaderGapInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Layouts.Layout_MainPages");
});
define("UBTConnectLibrary.Layouts.Layout_MainPages.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.Layouts.Layout_MainPages.mvc$model", "UBTConnectLibrary.Layouts.Layout_MainPages.mvc$controller", "UBTConnectLibrary.clientVariables", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$view", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$SkipToContent", "UBTConnectLibrary.controller$ClearTimeout", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$LayoutReady", "UBTConnectLibrary.controller$SetMainScroll", "UBTConnectLibrary.controller$SetScrollShadow"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnectLibrary_Layouts_Layout_MainPages_mvc_model, UBTConnectLibrary_Layouts_Layout_MainPages_mvc_controller, UBTConnectLibraryClientVariables, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view) {
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
        View.displayName = "Layouts.Layout_MainPages";
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
                return UBTConnectLibrary_Layouts_Layout_MainPages_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_Layouts_Layout_MainPages_mvc_controller;
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
return ((("layout layout-side layout-native ios-bounce ubt-layout-main hide-header-on-scroll" + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn)))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features"))) + ((model.variables.isGrayBackgroundIn) ? (" layout-gray-background") : ("")));
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
"data-showskipcontent": model.getCachedValue(idService.getId("hetEVg4adkyljlXNAxl0uw.data-showskipcontent"), function () {
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_MainPages/Link OnClick");
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
style: "header-top",
visible: true,
_idProps: {
service: idService,
uuid: "6"
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
ColumnOptions: model.getCachedValue(idService.getId("GZHHV7OiX0yY5ifO3qEeUQ.ColumnOptions"), function () {
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
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-layout-main__search",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("lBsWNQ6kkk2zEtnAO20Riw.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.spacingSizeAttr = ((model.variables.addHeaderGapIn) ? (UBTConnectLibraryModel.staticEntities.uBT_Size.base) : (UBTConnectLibraryModel.staticEntities.uBT_Size.none));
rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
return rec;
}();
}, function () {
return model.variables.addHeaderGapIn;
}),
_columnOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._addHeaderGapInDataFetchStatus)
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
uuid: "14",
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
style: model.getCachedValue(idService.getId("HeaderContent.Style"), function () {
return ("header-top-content ph" + ((model.variables.isHeaderScrolledVar) ? ((" " + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClass_BackgroundColor$Action(UBTConnectLibraryModel.staticEntities.uBT_Color.primaryGradientRadial, callContext).out_ColorClassOut;
}, OS.DataTypes.DataTypes.Text, callContext.id))) : ("")));
}, function () {
return model.variables.isHeaderScrolledVar;
}),
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
uuid: "18",
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
uuid: "22"
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
uuid: "24"
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
define("UBTConnectLibrary.Layouts.Layout_MainPages.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.Layouts.Layout_MainPages.mvc$debugger", "UBTConnectLibrary.Layouts.Layout_MainPages.mvc$controller.SetScrollEvents.GetCallbackFunctionJS", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$SkipToContent", "UBTConnectLibrary.controller$ClearTimeout", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$LayoutReady", "UBTConnectLibrary.controller$SetMainScroll", "UBTConnectLibrary.controller$SetScrollShadow"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_Layouts_Layout_MainPages_mvc_Debugger, UBTConnectLibrary_Layouts_Layout_MainPages_mvc_controller_SetScrollEvents_GetCallbackFunctionJS) {
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:6QDSQvrBmUC6FBQT3zx2dg:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.1GXwhSTiLEqM6A9m+PwWjw/ClientActions.6QDSQvrBmUC6FBQT3zx2dg:H7ee6ef4Xyy9P7JoDEvxKQ", "UBTConnectLibrary", "SkipToContentOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UM3tBAeyIkOGFKQOUWD_bA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RgGNuvCy_kig9ORQuBCdJA", callContext.id);
// Execute Action: SkipToContent
skipToContentVar.value = OutSystemsUI_2_23Controller.default.skipToContent$Action(idService.getId("MainContentWrapper"), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TBiTlm7FIkORwxPcLk3fIg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:6QDSQvrBmUC6FBQT3zx2dg", callContext.id);
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:uNabmRNSiEWi9pMbzq+V9g:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.1GXwhSTiLEqM6A9m+PwWjw/ClientActions.uNabmRNSiEWi9pMbzq+V9g:SuXYjU6N7YQnspPVC+4w+w", "UBTConnectLibrary", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NsHRDW74hk+6NsvzM0IARw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cVE0iYdVL0ikjYVXpnHaPw", callContext.id);
// Execute Action: RemoveScrollEvents
UBTConnectLibraryController.default.removeScrollEvents$Action(model.variables.scrollElementVar, model.variables.scrollEventVar, model.variables.shadowScrollEventVar, callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:s5f0ZdYeBE6YjrwVyd+aaQ", callContext.id);
// Execute Action: ClearTimeout
UBTConnectLibraryController.default.clearTimeout$Action(model.variables.shadowTimeoutVar, callContext);
// Null Objects
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f1hr+pLUkkuZUBzO_iNqrA", callContext.id);
// ScrollElement = NullObject
model.variables.scrollElementVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f1hr+pLUkkuZUBzO_iNqrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScrollEvent = NullObject
model.variables.scrollEventVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f1hr+pLUkkuZUBzO_iNqrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ShadowScrollEvent = NullObject
model.variables.shadowScrollEventVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f1hr+pLUkkuZUBzO_iNqrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ShadowTimeout = NullObject
model.variables.shadowTimeoutVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zMo15F5ZWkCkF8k6733oLA", callContext.id);
// Execute Action: LayoutDestroy
OutSystemsUI_2_23Controller.default.layoutDestroy$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UZKRhxlAwkaC23ai4c7jjg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:uNabmRNSiEWi9pMbzq+V9g", callContext.id);
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:0BSfq4tAZUetiosEuQziGQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.1GXwhSTiLEqM6A9m+PwWjw/ClientActions.0BSfq4tAZUetiosEuQziGQ:FnMazz+Jjer2IIdrI7VCqg", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:XVLdswsvjUOlMkUkbZaB3Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Bcygv8mJZk2oguJJ00iQmA", callContext.id);
// Execute Action: LayoutReady
OutSystemsUI_2_23Controller.default.layoutReady$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6s0C+tMSAkqOe_BfACskmQ", callContext.id);
// Execute Action: SetScrollEvents
controller._setScrollEvents$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KkVfbp+dPEGyIjSGWhcVyA", callContext.id);
// Execute Action: SetLang
setLangVar.value = OutSystemsUI_2_23Controller.default.setLang$Action("", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pUJhMDT4nEGRWSZWqPMMLw", callContext.id);
// Execute Action: AddFavicon
addFaviconVar.value = OutSystemsUI_2_23Controller.default.addFavicon$Action("favicon.png", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vPpROpveYUiZ66Ct1JWPhw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:0BSfq4tAZUetiosEuQziGQ", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages.OnHandle_OnHeaderScrolledTrigger$vars"))());
vars.value.in_IsHeaderScrolledInLocal = in_IsHeaderScrolledIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:mtLLrnLvIEOOS+uo9NE4hw:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.1GXwhSTiLEqM6A9m+PwWjw/ClientActions.mtLLrnLvIEOOS+uo9NE4hw:QwQryjItshnoByAzN6QudA", "UBTConnectLibrary", "OnHandle_OnHeaderScrolledTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KEDC42gUOkmb7CenR8vpqg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hTbe8AJRV0CsvcIHblYgPQ", callContext.id);
// IsHeaderScrolled = In_IsHeaderScrolled
model.variables.isHeaderScrolledVar = vars.value.in_IsHeaderScrolledInLocal;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hWEaDmLu7UuRDi4wQGZZow", callContext.id);
// Trigger Event: OnHeaderScrolled
return controller.onHeaderScrolled$Action(model.variables.isHeaderScrolledVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HabHeKPOME6zUSCeubyMqw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:mtLLrnLvIEOOS+uo9NE4hw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:mtLLrnLvIEOOS+uo9NE4hw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages.OnHandle_OnHeaderScrolledTrigger$vars", [{
name: "In_IsHeaderScrolled",
attrName: "in_IsHeaderScrolledInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
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
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:kpRc3K7AqUiBh07eZsZpIQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.1GXwhSTiLEqM6A9m+PwWjw/ClientActions.kpRc3K7AqUiBh07eZsZpIQ:C6YDgtRTzBFNQPeZgq+Lrg", "UBTConnectLibrary", "OnHandle_OnPullToRefreshTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:m8pRj3sxO02tkbwbpdImRA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8DQMvyOME0WatHvPArF7Xg", callContext.id);
// Trigger Event: OnPullToRefresh
return controller.onPullToRefresh$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Ii5J5lA3n0KYudEgp0ZJLg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:kpRc3K7AqUiBh07eZsZpIQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:kpRc3K7AqUiBh07eZsZpIQ", callContext.id);
throw ex;

});
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
var setMainScrollVar = new OS.DataTypes.VariableHolder();
var setScrollShadowVar = new OS.DataTypes.VariableHolder();
var getCallbackFunctionJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setMainScrollVar = setMainScrollVar;
varBag.setScrollShadowVar = setScrollShadowVar;
varBag.getCallbackFunctionJSResult = getCallbackFunctionJSResult;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:xger7JsZ_kuSEgHH+60zyw:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.1GXwhSTiLEqM6A9m+PwWjw/ClientActions.xger7JsZ_kuSEgHH+60zyw:Tg9o1OMojsWk02ldHXW_zw", "UBTConnectLibrary", "SetScrollEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UdGIyD0eGUCLfiL+TypcXA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Dasi6P6k_EmEchX_+cmkjQ", callContext.id);
getCallbackFunctionJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_Layouts_Layout_MainPages_mvc_controller_SetScrollEvents_GetCallbackFunctionJS, "GetCallbackFunction", "SetScrollEvents", {
Out_CallbackFunction: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages.SetScrollEvents$getCallbackFunctionJSResult"))();
jsNodeResult.out_CallbackFunctionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_CallbackFunction, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OnHandle_OnHeaderScrolledTrigger: controller.clientActionProxies.onHandle_OnHeaderScrolledTrigger$Action
}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:D0ZhWWXdb0+T1Ej11zdg5g", callContext.id);
// Execute Action: SetMainScroll
setMainScrollVar.value = UBTConnectLibraryController.default.setMainScroll$Action(getCallbackFunctionJSResult.value.out_CallbackFunctionOut, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:w5l8Y8OIhEG5tNNLFBGEFA", callContext.id);
// Execute Action: SetScrollShadow
setScrollShadowVar.value = UBTConnectLibraryController.default.setScrollShadow$Action(callContext);

// Set Destroy Objects
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EeirkwXDTkW7e3omkcd_XA", callContext.id);
// ScrollElement = SetMainScroll.Out_Element
model.variables.scrollElementVar = setMainScrollVar.value.out_ElementOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EeirkwXDTkW7e3omkcd_XA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScrollEvent = SetMainScroll.Out_ScrollEvent
model.variables.scrollEventVar = setMainScrollVar.value.out_ScrollEventOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EeirkwXDTkW7e3omkcd_XA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ShadowScrollEvent = SetScrollShadow.Out_ScrollEvent
model.variables.shadowScrollEventVar = setScrollShadowVar.value.out_ScrollEventOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EeirkwXDTkW7e3omkcd_XA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ShadowTimeout = SetScrollShadow.Out_Timeout
model.variables.shadowTimeoutVar = setScrollShadowVar.value.out_TimeoutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:IfowDOAno0WEWZpA97OEOA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:xger7JsZ_kuSEgHH+60zyw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages.SetScrollEvents$getCallbackFunctionJSResult", [{
name: "Out_CallbackFunction",
attrName: "out_CallbackFunctionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.skipToContentOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._skipToContentOnClick$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onHandle_OnHeaderScrolledTrigger$Action = function (in_IsHeaderScrolledIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_OnHeaderScrolledTrigger$Action, callContext, in_IsHeaderScrolledIn);

};
Controller.prototype.onHandle_OnPullToRefreshTrigger$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_OnPullToRefreshTrigger$Action, callContext);

};
Controller.prototype.setScrollEvents$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setScrollEvents$Action, callContext);

};
Controller.prototype.onHeaderScrolled$Action = function () {
return Promise.resolve();
};
Controller.prototype.onPullToRefresh$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:szBrd5WGsE6bcDfQ68RumQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ:LSOi3iQzjd8avvO2ZKIsMw", "UBTConnectLibrary", "Layouts", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:1GXwhSTiLEqM6A9m+PwWjw:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.1GXwhSTiLEqM6A9m+PwWjw:8p1NDKd7ynMqYeRetBVO2A", "UBTConnectLibrary", "Layout_MainPages", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:1GXwhSTiLEqM6A9m+PwWjw", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Layout_MainPages On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Layout_MainPages On Destroy");
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
define("UBTConnectLibrary.Layouts.Layout_MainPages.mvc$controller.SetScrollEvents.GetCallbackFunctionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Out_CallbackFunction = $actions.OnHandle_OnHeaderScrolledTrigger;
};
});

define("UBTConnectLibrary.Layouts.Layout_MainPages.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"RgGNuvCy_kig9ORQuBCdJA": {
getter: function (varBag, idService) {
return varBag.skipToContentVar.value;
}
},
"pUJhMDT4nEGRWSZWqPMMLw": {
getter: function (varBag, idService) {
return varBag.addFaviconVar.value;
}
},
"KkVfbp+dPEGyIjSGWhcVyA": {
getter: function (varBag, idService) {
return varBag.setLangVar.value;
}
},
"zJnGMPg54k2Iq2o0tZ1lCg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsHeaderScrolledInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"D0ZhWWXdb0+T1Ej11zdg5g": {
getter: function (varBag, idService) {
return varBag.setMainScrollVar.value;
}
},
"w5l8Y8OIhEG5tNNLFBGEFA": {
getter: function (varBag, idService) {
return varBag.setScrollShadowVar.value;
}
},
"Dasi6P6k_EmEchX_+cmkjQ": {
getter: function (varBag, idService) {
return varBag.getCallbackFunctionJSResult.value;
}
},
"WKqAWi_vbUyWAPfj_8ktnA": {
getter: function (varBag, idService) {
return varBag.model.variables.isHeaderScrolledVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"8lsA5eJmGk29iwoj0ScGVQ": {
getter: function (varBag, idService) {
return varBag.model.variables.scrollElementVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"lA7tZBTWfEKo1vZPGsLHww": {
getter: function (varBag, idService) {
return varBag.model.variables.scrollEventVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"zWOrc8rAikaQ2MVixFv65g": {
getter: function (varBag, idService) {
return varBag.model.variables.shadowScrollEventVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"1uY1zvqG2Eugm96QbaZIYA": {
getter: function (varBag, idService) {
return varBag.model.variables.shadowTimeoutVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"6pTnx5GSGUSZgdFWN3Wisw": {
getter: function (varBag, idService) {
return varBag.model.variables.usePullToRefreshIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"q6bzCb9P6EyRFzQ4rRCPPg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"le4A9QzjlUGEY1jaY1uKJg": {
getter: function (varBag, idService) {
return varBag.model.variables.enableAccessibilityFeaturesIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"89m8giuyD0Cpg5Sv58Jvzw": {
getter: function (varBag, idService) {
return varBag.model.variables.isGrayBackgroundIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Vx1j4mQu60SKIEfcntJE3A": {
getter: function (varBag, idService) {
return varBag.model.variables.addHeaderGapIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"VVPKqeaVjEu3OxKmP5z_ug": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LayoutWrapper_Main"));
})(varBag.model, idService);
}
},
"ZSwnjIH7iEuDwRqEjKhqLQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header"));
})(varBag.model, idService);
}
},
"9FX_7Y+ynkGu_L5n+mCACQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"XDWSJhKsLU6bZRp0Y+X7gQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"as+HYuiwA0Wga6_+YJ0u_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"UpE_yW++z0mopCfCmZDRMw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"8W+OoGFexkKC3O2DSX7LNg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"jFoWpBu1RUSvdf1Ia3NWqg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Input"));
})(varBag.model, idService);
}
},
"S7OajUwbM0uuQnMtj0jFLA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"pDJlKjEjNUmuUVvQY3SVIQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Input_Icon"));
})(varBag.model, idService);
}
},
"QzxPf3SW2kySc26ywckylQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"VIHXEQ_M9kaxuiVaCCU5Ig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PullToRefresh"));
})(varBag.model, idService);
}
},
"P4Xi4DyM8UGLWQNIuxgRTQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentWrapper"));
})(varBag.model, idService);
}
},
"55T4jPasHEyVGmsde8TRvw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MainContentWrapper"));
})(varBag.model, idService);
}
},
"wngmd4DEiEigSu1ZhrpMKg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"JPNhLoU3KU27sXnsj8E0Xg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"IKvLsa8Ft069Qv1Ea19ubw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
