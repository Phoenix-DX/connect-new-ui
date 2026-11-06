define("UBTConnectLibrary.Layouts.Layout_HomePage.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$model", "UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$model", "UBTConnectLibrary.Layouts.SubLayout_HomePageSearch.mvc$model", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.controller$Initialize_SvgScroll", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$SkipToContent", "OutSystemsUI_2_23.controller$LayoutDestroy"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, OutSystemsUI_2_23_Private_PullToRefresh_mvcModel, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvcModel, UBTConnectLibrary_Layouts_SubLayout_HomePageSearch_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsSearchInputScrolled", "isSearchInputScrolledVar", "IsSearchInputScrolled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsSVGScrolled", "isSVGScrolledVar", "IsSVGScrolled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("DestroyCallback", "destroyCallbackVar", "DestroyCallback", true, false, OS.DataTypes.DataTypes.Object, function () {
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
this.attr("ContentBackgroundColor", "contentBackgroundColorIn", "ContentBackgroundColor", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_Color.neutral4;
}, false), 
this.attr("_contentBackgroundColorInDataFetchStatus", "_contentBackgroundColorInDataFetchStatus", "_contentBackgroundColorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AddSearchBar", "addSearchBarIn", "AddSearchBar", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_addSearchBarInDataFetchStatus", "_addSearchBarInDataFetchStatus", "_addSearchBarInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("SVGHeight", "sVGHeightIn", "SVGHeight", true, false, OS.DataTypes.DataTypes.Text, function () {
return "260px";
}, false), 
this.attr("_sVGHeightInDataFetchStatus", "_sVGHeightInDataFetchStatus", "_sVGHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Private_PullToRefresh_mvcModel.hasValidationWidgets) || UBTConnectLibrary_Layouts_SVG_Background_Custom_mvcModel.hasValidationWidgets) || UBTConnectLibrary_Layouts_SubLayout_HomePageSearch_mvcModel.hasValidationWidgets);
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

if("ContentBackgroundColor" in inputs) {
this.variables.contentBackgroundColorIn = inputs.ContentBackgroundColor;
if("_contentBackgroundColorInDataFetchStatus" in inputs) {
this.variables._contentBackgroundColorInDataFetchStatus = inputs._contentBackgroundColorInDataFetchStatus;
}

}

if("AddSearchBar" in inputs) {
this.variables.addSearchBarIn = inputs.AddSearchBar;
if("_addSearchBarInDataFetchStatus" in inputs) {
this.variables._addSearchBarInDataFetchStatus = inputs._addSearchBarInDataFetchStatus;
}

}

if("SVGHeight" in inputs) {
this.variables.sVGHeightIn = inputs.SVGHeight;
if("_sVGHeightInDataFetchStatus" in inputs) {
this.variables._sVGHeightInDataFetchStatus = inputs._sVGHeightInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Layouts.Layout_HomePage");
});
define("UBTConnectLibrary.Layouts.Layout_HomePage.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.Layouts.Layout_HomePage.mvc$model", "UBTConnectLibrary.Layouts.Layout_HomePage.mvc$controller", "UBTConnectLibrary.clientVariables", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$view", "UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$view", "UBTConnectLibrary.Layouts.SubLayout_HomePageSearch.mvc$view", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.controller$Initialize_SvgScroll", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$SkipToContent", "OutSystemsUI_2_23.controller$LayoutDestroy"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnectLibrary_Layouts_Layout_HomePage_mvc_model, UBTConnectLibrary_Layouts_Layout_HomePage_mvc_controller, UBTConnectLibraryClientVariables, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_view, UBTConnectLibrary_Layouts_SubLayout_HomePageSearch_mvc_view) {
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
        View.displayName = "Layouts.Layout_HomePage";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js", "scripts/UBTConnectLibrary.ScrollAnimations.js"];
        };
        View.getBlocks = function() {
            return [NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_view, UBTConnectLibrary_Layouts_SubLayout_HomePageSearch_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_Layouts_Layout_HomePage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_Layouts_Layout_HomePage_mvc_controller;
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
style: model.getCachedValue(idService.getId("LayoutWrapper_Home.Style"), function () {
return (("layout layout-side layout-native ios-bounce ubt-layout-home" + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn)))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features")));
}, function () {
return model.variables.extendedClassIn;
}, function () {
return model.variables.enableAccessibilityFeaturesIn;
}),
visible: true,
_idProps: {
service: idService,
name: "LayoutWrapper_Home"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus)
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"aria-label": "Skip to Content (Press Enter)",
"data-showskipcontent": model.getCachedValue(idService.getId("OZcMFaRXeUmL1dlXu_8QxA.data-showskipcontent"), function () {
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_HomePage/Link OnClick");
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
className: model.getCachedValue(idService.getId("Header.class"), function () {
return ("header" + ((model.variables.isSVGScrolledVar) ? ((" " + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClass_BackgroundColor$Action(UBTConnectLibraryModel.staticEntities.uBT_Color.primaryGradientRadial, callContext).out_ColorClassOut;
}, OS.DataTypes.DataTypes.Text, callContext.id))) : ("")));
}, function () {
return model.variables.isSVGScrolledVar;
})
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
style: "header-content display-flex flex-direction-column justify-content-flex-start",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-layout-home__title",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("4Ocy4iTZVU+aADnSOqcaTA.ColumnOptions"), function () {
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
uuid: "8",
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
uuid: "9"
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-layout-home__header--right",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.addSearchBarIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.inherit,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.search,
In_Visible: model.variables.isSearchInputScrolledVar,
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
controller.onSearchClick$Action(controller.callContext(eventHandlerContext));
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
uuid: "12",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Header_Right,
style: "header-right",
_idProps: {
service: idService,
name: "Placeholder_Header_Right"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
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
uuid: "15",
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
style: model.getCachedValue(idService.getId("ContentWrapper.Style"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action("content", OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClass_BackgroundColor$Action(model.variables.contentBackgroundColorIn, callContext).out_ColorClassOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.contentBackgroundColorIn;
}),
visible: true,
_idProps: {
service: idService,
name: "ContentWrapper"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._contentBackgroundColorInDataFetchStatus)
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
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content-middle",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_view, {
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
name: "SVG",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(model.variables.addSearchBarIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_Layouts_SubLayout_HomePageSearch_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked_Search$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/SubLayout_HomePageSearch Clicked_Search");
controller.onSearchClick$Action(controller.callContext(eventHandlerContext));
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
name: "SearchInput",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "ubt-zindex-2",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.AdvancedHtml, {
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
}))), React.createElement(OSWidgets.Placeholder, {
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
define("UBTConnectLibrary.Layouts.Layout_HomePage.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.Layouts.Layout_HomePage.mvc$debugger", "UBTConnectLibrary.Layouts.Layout_HomePage.mvc$controller.SetScrollEvents.GetCallbackFunctionsJS", "UBTConnectLibrary.Layouts.Layout_HomePage.mvc$controller.OnDestroy.JavaScript1JS", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.controller$Initialize_SvgScroll", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$SkipToContent", "OutSystemsUI_2_23.controller$LayoutDestroy"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_Layouts_Layout_HomePage_mvc_Debugger, UBTConnectLibrary_Layouts_Layout_HomePage_mvc_controller_SetScrollEvents_GetCallbackFunctionsJS, UBTConnectLibrary_Layouts_Layout_HomePage_mvc_controller_OnDestroy_JavaScript1JS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onHandle_OnSearchInputScrolledTrigger$Action: function (in_IsSearchInputScrolledIn) {
in_IsSearchInputScrolledIn = (in_IsSearchInputScrolledIn === undefined) ? false : in_IsSearchInputScrolledIn;
return controller.executeActionInsideJSNode(controller._onHandle_OnSearchInputScrolledTrigger$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_IsSearchInputScrolledIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnHandle_OnSearchInputScrolledTrigger");
},
onHandle_OnSVGScrolledTrigger$Action: function (in_IsSVGScrolledIn) {
in_IsSVGScrolledIn = (in_IsSVGScrolledIn === undefined) ? false : in_IsSVGScrolledIn;
return controller.executeActionInsideJSNode(controller._onHandle_OnSVGScrolledTrigger$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_IsSVGScrolledIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnHandle_OnSVGScrolledTrigger");
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
Controller.prototype._onHandle_OnSVGScrolledTrigger$Action = function (in_IsSVGScrolledIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_OnSVGScrolledTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Layouts.Layout_HomePage.OnHandle_OnSVGScrolledTrigger$vars"))());
vars.value.in_IsSVGScrolledInLocal = in_IsSVGScrolledIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:pHSsF0jcREaXREcb74wRcQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.HAQ3c2gwbEmIAakSMgKuSA/ClientActions.pHSsF0jcREaXREcb74wRcQ:oupeaQCML6imBpsqBuID8g", "UBTConnectLibrary", "OnHandle_OnSVGScrolledTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:31C1MSlYf0Cf6YdX2W99wQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// No change?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4u1DHzq2XEOV9Y1Fs3mUtQ", callContext.id) && (model.variables.isSVGScrolledVar === vars.value.in_IsSVGScrolledInLocal))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zvV3uvWCpUCZjcsASxihIQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:E7SNwA4aTESSW634bVYRpw", callContext.id);
// IsSVGScrolled = In_IsSVGScrolled
model.variables.isSVGScrolledVar = vars.value.in_IsSVGScrolledInLocal;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7nzM45ry7E2808QWMpkFIw", callContext.id);
// Trigger Event: OnSVGScrolled
return controller.onSVGScrolled$Action(model.variables.isSVGScrolledVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9FeWot1pxUWLrNub9Jm9DQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:pHSsF0jcREaXREcb74wRcQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:pHSsF0jcREaXREcb74wRcQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnectLibrary.Layouts.Layout_HomePage.OnHandle_OnSVGScrolledTrigger$vars", [{
name: "In_IsSVGScrolled",
attrName: "in_IsSVGScrolledInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._setScrollEvents$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetScrollEvents");
callContext = controller.callContext(callContext);
var initialize_SvgScrollVar = new OS.DataTypes.VariableHolder();
var getCallbackFunctionsJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.initialize_SvgScrollVar = initialize_SvgScrollVar;
varBag.getCallbackFunctionsJSResult = getCallbackFunctionsJSResult;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:enSALUP_x0K8JzSH9zhVHQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.HAQ3c2gwbEmIAakSMgKuSA/ClientActions.enSALUP_x0K8JzSH9zhVHQ:gnMpOoQ+9tIBaOV+IyjdbA", "UBTConnectLibrary", "SetScrollEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oRPzAtLGeEeJLY5MRMa2ig", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:V9S5YGakYE6Llan2RvwSxQ", callContext.id);
getCallbackFunctionsJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_Layouts_Layout_HomePage_mvc_controller_SetScrollEvents_GetCallbackFunctionsJS, "GetCallbackFunctions", "SetScrollEvents", {
Out_SearchCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Out_SvgCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Layouts.Layout_HomePage.SetScrollEvents$getCallbackFunctionsJSResult"))();
jsNodeResult.out_SearchCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_SearchCallback, OS.DataTypes.DataTypes.Object);
jsNodeResult.out_SvgCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_SvgCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OnHandle_OnSearchInputScrolledTrigger: controller.clientActionProxies.onHandle_OnSearchInputScrolledTrigger$Action,
OnHandle_OnSVGScrolledTrigger: controller.clientActionProxies.onHandle_OnSVGScrolledTrigger$Action
}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2zTed4rWHUqZ2ddX0RAt9g", callContext.id);
// Execute Action: Initialize_SvgScroll
initialize_SvgScrollVar.value = UBTConnectLibraryController.default.initialize_SvgScroll$Action(idService.getId("SearchInput"), getCallbackFunctionsJSResult.value.out_SearchCallbackOut, getCallbackFunctionsJSResult.value.out_SvgCallbackOut, idService.getId("SVG"), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5WZf1V+2cUakdeb4mKdxdA", callContext.id);
// DestroyCallback = Initialize_SvgScroll.Destroy
model.variables.destroyCallbackVar = initialize_SvgScrollVar.value.destroyOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6WS+4_7SPUaooaQtbZBgcA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:enSALUP_x0K8JzSH9zhVHQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnectLibrary.Layouts.Layout_HomePage.SetScrollEvents$getCallbackFunctionsJSResult", [{
name: "Out_SearchCallback",
attrName: "out_SearchCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_SvgCallback",
attrName: "out_SvgCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
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
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:YEmlUTcEHE+zwm7NTmBD6w:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.HAQ3c2gwbEmIAakSMgKuSA/ClientActions.YEmlUTcEHE+zwm7NTmBD6w:wI+6munDYXGXgxjMlgWhZg", "UBTConnectLibrary", "OnHandle_OnPullToRefreshTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4YDBv8vf3UKKe5WOoUkMBQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2RvahqPQk0aSsXnemsvjrQ", callContext.id);
// Trigger Event: OnPullToRefresh
return controller.onPullToRefresh$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9ULKhA02Zk+8F1uRRvDsGA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:YEmlUTcEHE+zwm7NTmBD6w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:YEmlUTcEHE+zwm7NTmBD6w", callContext.id);
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
var addFaviconVar = new OS.DataTypes.VariableHolder();
var setLangVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.addFaviconVar = addFaviconVar;
varBag.setLangVar = setLangVar;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:l1QUXp7tSkqJGb3p9BpEAw:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.HAQ3c2gwbEmIAakSMgKuSA/ClientActions.l1QUXp7tSkqJGb3p9BpEAw:0L2KGrObefyG6Aw9zT52eQ", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+buONNlRDUGOfgwvEyVlXQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hAe3ViCq30uVFkdsuhetMw", callContext.id);
// Execute Action: JSUtils_SetStyleProperty
UBTJavaScriptUtilsController.default.jSUtils_SetStyleProperty$Action(idService.getId("LayoutWrapper_Home"), "--current-svg-height", model.variables.sVGHeightIn, callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zUVJ8QXeEkaso10xNcj0sA", callContext.id);
// Execute Action: LayoutReady
OutSystemsUI_2_23Controller.default.layoutReady$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YrQY4i5yqkqBH9s6lZTuTg", callContext.id);
// Execute Action: SetScrollEvents
controller._setScrollEvents$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5x6xisLZjkqqErQZNYZl3g", callContext.id);
// Execute Action: SetLang
setLangVar.value = OutSystemsUI_2_23Controller.default.setLang$Action("", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UISWYnWzPEaNdozPfvFKpA", callContext.id);
// Execute Action: AddFavicon
addFaviconVar.value = OutSystemsUI_2_23Controller.default.addFavicon$Action("favicon.png", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:66Cp4owLpEaMR6RbhR_8XQ", callContext.id);
// Trigger Event: OnReadyEvent
return controller.onReadyEvent$Action(idService.getId("ContentWrapper"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oApZ5z2FskGsdMCZi0r3gg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:l1QUXp7tSkqJGb3p9BpEAw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:l1QUXp7tSkqJGb3p9BpEAw", callContext.id);
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:KFF0X7+lWk2dnqVJuCbWgg:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.HAQ3c2gwbEmIAakSMgKuSA/ClientActions.KFF0X7+lWk2dnqVJuCbWgg:EJFcjYbpwrtmXSYTyf9zWw", "UBTConnectLibrary", "SkipToContentOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZZ44_6xD2kqb+jMbnT4Maw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eseQYvKE9Ee9_fXk9HLq5Q", callContext.id);
// Execute Action: SkipToContent
skipToContentVar.value = OutSystemsUI_2_23Controller.default.skipToContent$Action(idService.getId("MainContentWrapper"), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1AYpgYXv7k2d1XGZPFbB3g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:KFF0X7+lWk2dnqVJuCbWgg", callContext.id);
}

};
Controller.prototype._onHandle_OnSearchInputScrolledTrigger$Action = function (in_IsSearchInputScrolledIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_OnSearchInputScrolledTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Layouts.Layout_HomePage.OnHandle_OnSearchInputScrolledTrigger$vars"))());
vars.value.in_IsSearchInputScrolledInLocal = in_IsSearchInputScrolledIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:vWmwm9Hj5kyTieHQbNUosQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.HAQ3c2gwbEmIAakSMgKuSA/ClientActions.vWmwm9Hj5kyTieHQbNUosQ:Dedo7vAwsHFadFwCCQ12FA", "UBTConnectLibrary", "OnHandle_OnSearchInputScrolledTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:N8n2Wcwc10WSh3OW9ABjYg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// No change?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yUPtpHJbv02IZR5fNbCBqg", callContext.id) && (model.variables.isSearchInputScrolledVar === vars.value.in_IsSearchInputScrolledInLocal))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0Gfriw74u0ePP2Wud5JrbA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7OtEWCbWiEyfQTYeiAxAGA", callContext.id);
// IsSearchInputScrolled = In_IsSearchInputScrolled
model.variables.isSearchInputScrolledVar = vars.value.in_IsSearchInputScrolledInLocal;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cRWTWVq0uUCgKEDwIh5J8g", callContext.id);
// Trigger Event: OnSearchInputScrolled
return controller.onSearchInputScrolled$Action(model.variables.isSearchInputScrolledVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:fIzxieLj5k6eXxlz6hXh1g", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:vWmwm9Hj5kyTieHQbNUosQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:vWmwm9Hj5kyTieHQbNUosQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnectLibrary.Layouts.Layout_HomePage.OnHandle_OnSearchInputScrolledTrigger$vars", [{
name: "In_IsSearchInputScrolled",
attrName: "in_IsSearchInputScrolledInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:8eh_3jxitUixCTVCIOAYDA:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.HAQ3c2gwbEmIAakSMgKuSA/ClientActions.8eh_3jxitUixCTVCIOAYDA:U6nqncid+9xXv7WMnr0A5A", "UBTConnectLibrary", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:QXGGjo4sgkWW8LRAi8ZKcw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MbApnmu8g0CNDp81lXdwsQ", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_Layouts_Layout_HomePage_mvc_controller_OnDestroy_JavaScript1JS, "JavaScript1", "OnDestroy", {
Destroy: OS.DataConversion.JSNodeParamConverter.to(model.variables.destroyCallbackVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0h9p4yRX6UCYe_ICbZw60A", callContext.id);
// Execute Action: LayoutDestroy
OutSystemsUI_2_23Controller.default.layoutDestroy$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PPpiNy3+3UurydmbFkLzfA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:8eh_3jxitUixCTVCIOAYDA", callContext.id);
}

};

Controller.prototype.onHandle_OnSVGScrolledTrigger$Action = function (in_IsSVGScrolledIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_OnSVGScrolledTrigger$Action, callContext, in_IsSVGScrolledIn);

};
Controller.prototype.setScrollEvents$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setScrollEvents$Action, callContext);

};
Controller.prototype.onHandle_OnPullToRefreshTrigger$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_OnPullToRefreshTrigger$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.skipToContentOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._skipToContentOnClick$Action, callContext);

};
Controller.prototype.onHandle_OnSearchInputScrolledTrigger$Action = function (in_IsSearchInputScrolledIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_OnSearchInputScrolledTrigger$Action, callContext, in_IsSearchInputScrolledIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onSearchInputScrolled$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSVGScrolled$Action = function () {
return Promise.resolve();
};
Controller.prototype.onReadyEvent$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSearchClick$Action = function () {
return Promise.resolve();
};
Controller.prototype.onPullToRefresh$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:szBrd5WGsE6bcDfQ68RumQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ:LSOi3iQzjd8avvO2ZKIsMw", "UBTConnectLibrary", "Layouts", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:HAQ3c2gwbEmIAakSMgKuSA:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.HAQ3c2gwbEmIAakSMgKuSA:CD7qZBoZeqd_OGiLSnhi7g", "UBTConnectLibrary", "Layout_HomePage", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:HAQ3c2gwbEmIAakSMgKuSA", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Layout_HomePage On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Layout_HomePage On Destroy");
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
define("UBTConnectLibrary.Layouts.Layout_HomePage.mvc$controller.SetScrollEvents.GetCallbackFunctionsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Out_SearchCallback = $actions.OnHandle_OnSearchInputScrolledTrigger;
$parameters.Out_SvgCallback = $actions.OnHandle_OnSVGScrolledTrigger;
};
});
define("UBTConnectLibrary.Layouts.Layout_HomePage.mvc$controller.OnDestroy.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Destroy();
};
});

define("UBTConnectLibrary.Layouts.Layout_HomePage.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"U5vBV71fAEmR7QaD1x9qHg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsSVGScrolledInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2zTed4rWHUqZ2ddX0RAt9g": {
getter: function (varBag, idService) {
return varBag.initialize_SvgScrollVar.value;
}
},
"V9S5YGakYE6Llan2RvwSxQ": {
getter: function (varBag, idService) {
return varBag.getCallbackFunctionsJSResult.value;
}
},
"UISWYnWzPEaNdozPfvFKpA": {
getter: function (varBag, idService) {
return varBag.addFaviconVar.value;
}
},
"5x6xisLZjkqqErQZNYZl3g": {
getter: function (varBag, idService) {
return varBag.setLangVar.value;
}
},
"eseQYvKE9Ee9_fXk9HLq5Q": {
getter: function (varBag, idService) {
return varBag.skipToContentVar.value;
}
},
"ymOREb1M+ESLjj8u65l7cQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsSearchInputScrolledInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"MbApnmu8g0CNDp81lXdwsQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"WzicXCBXekSlWaT1jHKDyg": {
getter: function (varBag, idService) {
return varBag.model.variables.isSearchInputScrolledVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"L7snE0wFLU+SejomVaJ1sw": {
getter: function (varBag, idService) {
return varBag.model.variables.isSVGScrolledVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"I9HLSplpnk6D11xMAXsFxQ": {
getter: function (varBag, idService) {
return varBag.model.variables.destroyCallbackVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"KCncqUBd8ka9KZD4FSYNAg": {
getter: function (varBag, idService) {
return varBag.model.variables.usePullToRefreshIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"VqEyg9_FpUquJLlY7qrOqg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"27_zSsZbE02t4GHCG23kbw": {
getter: function (varBag, idService) {
return varBag.model.variables.enableAccessibilityFeaturesIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"hNPjR9pPEE+2ZgwdtxM2dg": {
getter: function (varBag, idService) {
return varBag.model.variables.contentBackgroundColorIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HJo_0x5i_UOHgJZq1EDVvQ": {
getter: function (varBag, idService) {
return varBag.model.variables.addSearchBarIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gV_d9LNaK0eULK+QH8V_5A": {
getter: function (varBag, idService) {
return varBag.model.variables.sVGHeightIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6pm1BU46ykGsdhG6Iofm1Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LayoutWrapper_Home"));
})(varBag.model, idService);
}
},
"+08R9kOjJUWiBtDCg8ZdCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header"));
})(varBag.model, idService);
}
},
"HA9g681rf0W4tvUGsfSmsQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"2lv5dA6_0kuv0Jj5SD2LJg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"uCZnsAo+0ka3Gd_cM+cukA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"SIQCSnqXsECVjj605kiFGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"9K5GfEsUGUuQtlMfIfWITA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"p+kRLh_CU0KJm_wBnb1Z3Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PullToRefresh"));
})(varBag.model, idService);
}
},
"XFYwUtj20E28zo0cxc7ZmA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentWrapper"));
})(varBag.model, idService);
}
},
"T5xHyDeRBkK1I_PaF3Rc6Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MainContentWrapper"));
})(varBag.model, idService);
}
},
"K2ax1JF2tEyZ2kYAvxhezA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG"));
})(varBag.model, idService);
}
},
"8z6V+5zTrUmkCg+NCBBfug": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SearchInput"));
})(varBag.model, idService);
}
},
"I1mhsf+iP0Su5qmNvNTYJA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"fW1rgwna4kaQ_onMMZN67Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"uzdDZqitT0GsyJH_BkoijA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
