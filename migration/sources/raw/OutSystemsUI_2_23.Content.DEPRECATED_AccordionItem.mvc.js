define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.controller$IsWebApp", "OutSystemsUI_2_23.controller$IsLayoutNative"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsMultipleItems", "isMultipleItemsVar", "IsMultipleItems", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("AccordionObj", "accordionObjVar", "AccordionObj", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("HasWrapper", "hasWrapperVar", "HasWrapper", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsWebApp", "isWebAppVar", "IsWebApp", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HasContent", "hasContentVar", "HasContent", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("IsExpanded", "isExpandedIn", "IsExpanded", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isExpandedInDataFetchStatus", "_isExpandedInDataFetchStatus", "_isExpandedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("UsePadding", "usePaddingIn", "UsePadding", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_usePaddingInDataFetchStatus", "_usePaddingInDataFetchStatus", "_usePaddingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsDisabled", "isDisabledIn", "IsDisabled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("IsExpanded" in inputs) {
this.variables.isExpandedIn = inputs.IsExpanded;
if("_isExpandedInDataFetchStatus" in inputs) {
this.variables._isExpandedInDataFetchStatus = inputs._isExpandedInDataFetchStatus;
}

}

if("UsePadding" in inputs) {
this.variables.usePaddingIn = inputs.UsePadding;
if("_usePaddingInDataFetchStatus" in inputs) {
this.variables._usePaddingInDataFetchStatus = inputs._usePaddingInDataFetchStatus;
}

}

if("IsDisabled" in inputs) {
this.variables.isDisabledIn = inputs.IsDisabled;
if("_isDisabledInDataFetchStatus" in inputs) {
this.variables._isDisabledInDataFetchStatus = inputs._isDisabledInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Content.DEPRECATED_AccordionItem");
});
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$model", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.controller$IsWebApp", "OutSystemsUI_2_23.controller$IsLayoutNative"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_model, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.DEPRECATED_AccordionItem";
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
                return OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller;
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
"data-expanded": model.getCachedValue(idService.getId("SectionItem.data-expanded"), function () {
return OS.BuiltinFunctions.toLower((model.variables.isExpandedIn ? "True" : "False"));
}, function () {
return model.variables.isExpandedIn;
}),
"aria-expanded": model.getCachedValue(idService.getId("SectionItem.aria-expanded"), function () {
return OS.BuiltinFunctions.toLower((model.variables.isExpandedIn ? "True" : "False"));
}, function () {
return model.variables.isExpandedIn;
}),
"aria-disabled": model.getCachedValue(idService.getId("SectionItem.aria-disabled"), function () {
return ((!(model.variables.isDisabledIn)) ? ("false") : ("true"));
}, function () {
return model.variables.isDisabledIn;
}),
role: "tab"
},
style: model.getCachedValue(idService.getId("SectionItem.Style"), function () {
return (((("osui-deprecated section-expandable " + ((model.variables.isExpandedIn) ? (" open is--open") : ("is--closed"))) + ((model.variables.isDisabledIn) ? (" is--disabled") : (""))) + " ") + model.variables.extendedClassIn);
}, function () {
return model.variables.isExpandedIn;
}, function () {
return model.variables.isDisabledIn;
}, function () {
return model.variables.extendedClassIn;
}),
visible: true,
_idProps: {
service: idService,
name: "SectionItem"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isExpandedInDataFetchStatus, model.variables._isDisabledInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Content/DEPRECATED_AccordionItem/TitleWrapper onclick");
return controller.onClick$Action(idService.getId("SectionItem"), false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
role: "button",
"aria-hidden": model.getCachedValue(idService.getId("TitleWrapper.aria-hidden"), function () {
return OS.BuiltinFunctions.toLower((model.variables.isDisabledIn ? "True" : "False"));
}, function () {
return model.variables.isDisabledIn;
}),
"aria-expanded": model.getCachedValue(idService.getId("TitleWrapper.aria-expanded"), function () {
return OS.BuiltinFunctions.toLower((model.variables.isExpandedIn ? "True" : "False"));
}, function () {
return model.variables.isExpandedIn;
}),
tabIndex: model.getCachedValue(idService.getId("TitleWrapper.tabindex"), function () {
return (((model.variables.isDisabledIn || !(model.variables.hasContentVar))) ? ("-1") : ("0"));
}, function () {
return model.variables.isDisabledIn;
}, function () {
return model.variables.hasContentVar;
}),
"aria-controls": idService.getId("Content")
},
style: "section-expandable-title",
visible: true,
_idProps: {
service: idService,
name: "TitleWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.title,
style: model.getCachedValue(idService.getId("Title.Style"), function () {
return ("dividers full-width" + ((model.variables.isWebAppVar) ? ("") : (" text-ellipsis")));
}, function () {
return model.variables.isWebAppVar;
}),
_idProps: {
service: idService,
name: "Title"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "section-expandable-icon",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
tabIndex: model.getCachedValue(idService.getId("ContentWrapper.tabindex"), function () {
return ((model.variables.hasContentVar) ? ("0") : ("-1"));
}, function () {
return model.variables.hasContentVar;
}),
"aria-hidden": model.getCachedValue(idService.getId("ContentWrapper.aria-hidden"), function () {
return ((model.variables.isExpandedIn) ? ("false") : ("true"));
}, function () {
return model.variables.isExpandedIn;
}),
"aria-labelledby": idService.getId("TitleWrapper")
},
style: model.getCachedValue(idService.getId("ContentWrapper.Style"), function () {
return ("section-expandable-content is--collapsed" + ((model.variables.usePaddingIn) ? ("") : (" no-padding")));
}, function () {
return model.variables.usePaddingIn;
}),
visible: true,
_idProps: {
service: idService,
name: "ContentWrapper"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._usePaddingInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
extendedProperties: {
role: "tabpanel"
},
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$translationsResources", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$debugger", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnClick.ToggleClassJS", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnClick.UpdateAttributeJS", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnClick.CloseAllJS", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.Collapse.CollapseJS", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnReady.InitJS", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnReady.SetGlobalActionsJS", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.SetAriaAttributes.SetAttributesJS", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.Expand.ExpandJS", "OutSystemsUI_2_23.controller$IsWebApp", "OutSystemsUI_2_23.controller$IsLayoutNative"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_TranslationsResources, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_Debugger, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_OnClick_ToggleClassJS, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_OnClick_UpdateAttributeJS, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_OnClick_CloseAllJS, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_Collapse_CollapseJS, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_OnReady_InitJS, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_OnReady_SetGlobalActionsJS, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_SetAriaAttributes_SetAttributesJS, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_Expand_ExpandJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
setAriaAttributes$Action: function (isExpandIn, elemIdIn) {
isExpandIn = (isExpandIn === undefined) ? false : isExpandIn;
elemIdIn = (elemIdIn === undefined) ? "" : elemIdIn;
return controller.executeActionInsideJSNode(controller._setAriaAttributes$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isExpandIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(elemIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "SetAriaAttributes");
},
expand$Action: function (isKeypressIn) {
isKeypressIn = (isKeypressIn === undefined) ? false : isKeypressIn;
return controller.executeActionInsideJSNode(controller._expand$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isKeypressIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Expand");
},
collapse$Action: function (isKeypressIn) {
isKeypressIn = (isKeypressIn === undefined) ? false : isKeypressIn;
return controller.executeActionInsideJSNode(controller._collapse$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isKeypressIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Collapse");
},
onClick$Action: function (elemIdIn, isKeypressIn) {
elemIdIn = (elemIdIn === undefined) ? "" : elemIdIn;
isKeypressIn = (isKeypressIn === undefined) ? false : isKeypressIn;
return controller.executeActionInsideJSNode(controller._onClick$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(elemIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isKeypressIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnClick");
},
onUpdate$Action: function (multipleItemsIn) {
multipleItemsIn = (multipleItemsIn === undefined) ? false : multipleItemsIn;
return controller.executeActionInsideJSNode(controller._onUpdate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(multipleItemsIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnUpdate");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onClick$Action = function (elemIdIn, isKeypressIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.OnClick$vars"))());
vars.value.elemIdInLocal = elemIdIn;
vars.value.isKeypressInLocal = isKeypressIn;
var toggleClassJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.toggleClassJSResult = toggleClassJSResult;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:fheJNdnQhU6Z_w5oPXuQ4Q:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.uKq8oThFUECByYxX7CPfyA/ClientActions.fheJNdnQhU6Z_w5oPXuQ4Q:6osP9rbHTwgHr+bprbybfQ", "OutSystemsUI_2_23", "OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:QHdrwnxzXkaGw9XxkaiX4g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:8VCXJpbgm0y0Bvm2UAirOg", callContext.id) && model.variables.isDisabledIn)) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DqQZU2Nym0SZDaNjQrAHjw", callContext.id);
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:xCRZ58BgK02PXYb64Igneg", callContext.id) && model.variables.hasContentVar)) {
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:0ZtAISbId0mPHt7krlCTfA", callContext.id) && model.variables.hasWrapperVar)) {
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:HqWi7xL750C+hKjLfWZTug", callContext.id) && !(model.variables.isMultipleItemsVar))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:AMILuOoG4ke_79zMQTSmmw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_OnClick_CloseAllJS, "CloseAll", "OnClick", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.elemIdInLocal, OS.DataTypes.DataTypes.Text),
AccordionObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.accordionObjVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
}

}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Wt3n2uLsgUO4w9b95jEYkA", callContext.id) && model.variables.isExpandedIn)) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:wJoxMVRFEkmW5CxzQSepGw", callContext.id);
// Execute Action: Collapse
controller._collapse$Action(vars.value.isKeypressInLocal, callContext);
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:TSFoT8aI+0uvnddGWOxyfw", callContext.id);
// Execute Action: Expand
controller._expand$Action(vars.value.isKeypressInLocal, callContext);
}

OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:M9kuOXF9+0mCjR7oJuMKoQ", callContext.id);
// Trigger Event: OnToggle
return controller.onToggle$Action(model.variables.isExpandedIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:75wVnR84xUGy3atra+QRjQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_OnClick_UpdateAttributeJS, "UpdateAttribute", "OnClick", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.elemIdInLocal, OS.DataTypes.DataTypes.Text),
IsExpanded: OS.DataConversion.JSNodeParamConverter.to(model.variables.isExpandedIn, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DqQZU2Nym0SZDaNjQrAHjw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ITL3dT0myE6Z0AOK+9giLw", callContext.id);
toggleClassJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_OnClick_ToggleClassJS, "ToggleClass", "OnClick", {
IsExpanded: OS.DataConversion.JSNodeParamConverter.to(model.variables.isExpandedIn, OS.DataTypes.DataTypes.Boolean),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("SectionItem"), OS.DataTypes.DataTypes.Text),
IsOpen: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.OnClick$toggleClassJSResult"))();
jsNodeResult.isOpenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsOpen, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:GArUuD2aCEyrxpx99z9mRQ", callContext.id);
// IsExpanded = ToggleClass.IsOpen
model.variables.isExpandedIn = toggleClassJSResult.value.isOpenOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:g_UI3U3h10uWTHlyuOnrvg", callContext.id);
// Trigger Event: OnToggle2
return controller.onToggle$Action(model.variables.isExpandedIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DqQZU2Nym0SZDaNjQrAHjw", callContext.id);
});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:fheJNdnQhU6Z_w5oPXuQ4Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:fheJNdnQhU6Z_w5oPXuQ4Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.OnClick$vars", [{
name: "ElemId",
attrName: "elemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsKeypress",
attrName: "isKeypressInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.OnClick$toggleClassJSResult", [{
name: "IsOpen",
attrName: "isOpenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._collapse$Action = function (isKeypressIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Collapse");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.Collapse$vars"))());
vars.value.isKeypressInLocal = isKeypressIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:EPITNniTeUm+_eXag1RwJQ:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.uKq8oThFUECByYxX7CPfyA/ClientActions.EPITNniTeUm+_eXag1RwJQ:LkrXKJr9vvW7MbKgYordtA", "OutSystemsUI_2_23", "Collapse", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:wCHjVi2LL0OXNZWllMWULg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pkndEhyfXkWdQZjwvnwX7A", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_Collapse_CollapseJS, "Collapse", "Collapse", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("SectionItem"), OS.DataTypes.DataTypes.Text),
IsKeypress: OS.DataConversion.JSNodeParamConverter.to(vars.value.isKeypressInLocal, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
}, {
SetAriaAttributes: controller.clientActionProxies.setAriaAttributes$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:rRt0+hv4XkKk4adjq9wGAw", callContext.id);
// IsExpanded = False
model.variables.isExpandedIn = false;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qiNkJquTgkqG3QG0gaCe7g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:EPITNniTeUm+_eXag1RwJQ", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.Collapse$vars", [{
name: "IsKeypress",
attrName: "isKeypressInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onReady$Action = function (idIn, isParameterChangeIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.OnReady$vars"))());
vars.value.idInLocal = idIn;
vars.value.isParameterChangeInLocal = isParameterChangeIn;
var initJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.initJSResult = initJSResult;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:ZzvWU0ET_kydeK5yPQ8QWA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.uKq8oThFUECByYxX7CPfyA/ClientActions.ZzvWU0ET_kydeK5yPQ8QWA:Ar5ImZZfRuMOAneAKLbj1w", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:UOPmaxsxrU28HvHGLZf2NQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:IQEqTqWI+UW9zNQJRym3ZQ", callContext.id);
initJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_OnReady_InitJS, "Init", "OnReady", {
TitleId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("TitleWrapper"), OS.DataTypes.DataTypes.Text),
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.idInLocal, OS.DataTypes.DataTypes.Text),
IsExpanded: OS.DataConversion.JSNodeParamConverter.to(model.variables.isExpandedIn, OS.DataTypes.DataTypes.Boolean),
IsParameterChange: OS.DataConversion.JSNodeParamConverter.to(vars.value.isParameterChangeInLocal, OS.DataTypes.DataTypes.Boolean),
ContentPlaceholderId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Content"), OS.DataTypes.DataTypes.Text),
ContentId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ContentWrapper"), OS.DataTypes.DataTypes.Text),
IsMultipleItems: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
AccordionObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
HasWrapper: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
HasContent: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.OnReady$initJSResult"))();
jsNodeResult.isMultipleItemsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsMultipleItems, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.accordionObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AccordionObj, OS.DataTypes.DataTypes.Object);
jsNodeResult.hasWrapperOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasWrapper, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.hasContentOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasContent, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {
Expand: controller.clientActionProxies.expand$Action,
Collapse: controller.clientActionProxies.collapse$Action,
OnClick: controller.clientActionProxies.onClick$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PX5NZ81yqEuTE2HDMMYwog", callContext.id);
// IsMultipleItems = Init.IsMultipleItems
model.variables.isMultipleItemsVar = initJSResult.value.isMultipleItemsOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PX5NZ81yqEuTE2HDMMYwog", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AccordionObj = Init.AccordionObj
model.variables.accordionObjVar = initJSResult.value.accordionObjOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PX5NZ81yqEuTE2HDMMYwog", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// HasWrapper = Init.HasWrapper
model.variables.hasWrapperVar = initJSResult.value.hasWrapperOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PX5NZ81yqEuTE2HDMMYwog", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// IsWebApp = IsWebApp() or IsLayoutNative()
model.variables.isWebAppVar = (OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUI_2_23Controller.default.isWebApp$Action(callContext).isWebAppOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id) || OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUI_2_23Controller.default.isLayoutNative$Action(callContext).isNativeOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id));
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PX5NZ81yqEuTE2HDMMYwog", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// HasContent = Init.HasContent
model.variables.hasContentVar = initJSResult.value.hasContentOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Zt_QfjVMyUiu8S02TIDMuQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_OnReady_SetGlobalActionsJS, "SetGlobalActions", "OnReady", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("SectionItem"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
Collapse: controller.clientActionProxies.collapse$Action,
Expand: controller.clientActionProxies.expand$Action,
OnUpdate: controller.clientActionProxies.onUpdate$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:glOMw0542k6pzMm9t4+wlg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:ZzvWU0ET_kydeK5yPQ8QWA", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.OnReady$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsParameterChange",
attrName: "isParameterChangeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.OnReady$initJSResult", [{
name: "IsMultipleItems",
attrName: "isMultipleItemsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AccordionObj",
attrName: "accordionObjOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "HasWrapper",
attrName: "hasWrapperOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "HasContent",
attrName: "hasContentOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._setAriaAttributes$Action = function (isExpandIn, elemIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetAriaAttributes");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.SetAriaAttributes$vars"))());
vars.value.isExpandInLocal = isExpandIn;
vars.value.elemIdInLocal = elemIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:ophif+T6kki_n9kGbgEJDA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.uKq8oThFUECByYxX7CPfyA/ClientActions.ophif+T6kki_n9kGbgEJDA:7DvaEKw+G3udzbkFnJdOlw", "OutSystemsUI_2_23", "SetAriaAttributes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:_tOn7HSIIEuSP6xxD0dcRQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PcZUvp9J9Eib1zkTsr6UmQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_SetAriaAttributes_SetAttributesJS, "SetAttributes", "SetAriaAttributes", {
IsExpand: OS.DataConversion.JSNodeParamConverter.to(vars.value.isExpandInLocal, OS.DataTypes.DataTypes.Boolean),
ElementId: OS.DataConversion.JSNodeParamConverter.to(vars.value.elemIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:uMfOa62zb0KYZS3+nhnVfQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:ophif+T6kki_n9kGbgEJDA", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.SetAriaAttributes$vars", [{
name: "IsExpand",
attrName: "isExpandInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ElemId",
attrName: "elemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onUpdate$Action = function (multipleItemsIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnUpdate");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.OnUpdate$vars"))());
vars.value.multipleItemsInLocal = multipleItemsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:MNW2moNNSESnCUY6UBS6sQ:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.uKq8oThFUECByYxX7CPfyA/ClientActions.MNW2moNNSESnCUY6UBS6sQ:WSC9Ggy30MG7QMbn7T9ZBQ", "OutSystemsUI_2_23", "OnUpdate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pRY0gq3o8Eq9QK+MK2qvOw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DsmV6Wz+M064VmkhkaZnQw", callContext.id);
// IsMultipleItems = MultipleItems
model.variables.isMultipleItemsVar = vars.value.multipleItemsInLocal;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EN6HWwEO3U2lTGNuat2stw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:MNW2moNNSESnCUY6UBS6sQ", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.OnUpdate$vars", [{
name: "MultipleItems",
attrName: "multipleItemsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._expand$Action = function (isKeypressIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Expand");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.Expand$vars"))());
vars.value.isKeypressInLocal = isKeypressIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:ntsN+rKVF0qd5BvGJVWeEA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.uKq8oThFUECByYxX7CPfyA/ClientActions.ntsN+rKVF0qd5BvGJVWeEA:6a8eK24FHPio2pYvlXboTw", "OutSystemsUI_2_23", "Expand", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:woZEFekw1kyx1RKlWyuAjw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:A6IH7sTFG0WZOs8gKMOoIg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller_Expand_ExpandJS, "Expand", "Expand", {
IsKeypress: OS.DataConversion.JSNodeParamConverter.to(vars.value.isKeypressInLocal, OS.DataTypes.DataTypes.Boolean),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("SectionItem"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
SetAriaAttributes: controller.clientActionProxies.setAriaAttributes$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Fvj79VwmZU65dSkj+TzpbA", callContext.id);
// IsExpanded = True
model.variables.isExpandedIn = true;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qAW6hJRB_E6cVjRgnsb65A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:ntsN+rKVF0qd5BvGJVWeEA", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.Expand$vars", [{
name: "IsKeypress",
attrName: "isKeypressInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.onClick$Action = function (elemIdIn, isKeypressIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext, elemIdIn, isKeypressIn);

};
Controller.prototype.collapse$Action = function (isKeypressIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._collapse$Action, callContext, isKeypressIn);

};
Controller.prototype.onReady$Action = function (idIn, isParameterChangeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext, idIn, isParameterChangeIn);

};
Controller.prototype.setAriaAttributes$Action = function (isExpandIn, elemIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setAriaAttributes$Action, callContext, isExpandIn, elemIdIn);

};
Controller.prototype.onUpdate$Action = function (multipleItemsIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onUpdate$Action, callContext, multipleItemsIn);

};
Controller.prototype.expand$Action = function (isKeypressIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._expand$Action, callContext, isKeypressIn);

};
Controller.prototype.onToggle$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:I9m14fELdkiW+b3sqQ+k7Q:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q:AUjgzFQezVYFy+ax1Bu5WA", "OutSystemsUI_2_23", "Content", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:uKq8oThFUECByYxX7CPfyA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.uKq8oThFUECByYxX7CPfyA:mCHXkODpDYz6UC7UMYuN+Q", "OutSystemsUI_2_23", "DEPRECATED_AccordionItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:uKq8oThFUECByYxX7CPfyA", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:I9m14fELdkiW+b3sqQ+k7Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Content/DEPRECATED_AccordionItem On Ready");
return controller.onReady$Action(idService.getId("SectionItem"), false, callContext);

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

OutSystemsDebugger.setThreadStartName(callContext.id, "Content/DEPRECATED_AccordionItem On Parameters Changed");
return controller.onReady$Action(idService.getId("SectionItem"), true, callContext);

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
return OutSystemsUI_2_23Controller.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUI_2_23LanguageResources);
});
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnClick.ToggleClassJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var currentAccordionItem = document.getElementById($parameters.WidgetId);
var currentAccordionItemContent = currentAccordionItem.querySelector('.section-expandable-content');

// Toggle is--closed/is--open class from current accordion item
if($parameters.IsExpanded) {
    currentAccordionItem.classList.add('is--closed');
    currentAccordionItem.classList.remove('is--open');
    $parameters.IsOpen = false;
} else {
    currentAccordionItem.classList.add('is--open');
    currentAccordionItem.classList.remove('is--closed');
    $parameters.IsOpen = true;
}



};
});
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnClick.UpdateAttributeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var accordionItem  = document.getElementById($parameters.WidgetId);

accordionItem.setAttribute('data-expanded', $parameters.IsExpanded);


};
});
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnClick.CloseAllJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var accordion = $parameters.AccordionObj;
var accordionItems = accordion.querySelectorAll(':scope > div > .section-expandable');
var thisElem = document.getElementById($parameters.WidgetId);

var isClosed = function(currentAccordionItem) {
    if(currentAccordionItem.classList.contains('is--closed')) {
        return true;
    }
    
    return false;
};

var currAccordionItem = thisElem;

for(var i = 0; i < accordionItems.length; i++) {
    var accordionItem = accordionItems[i];
    if(accordionItem !== currAccordionItem && !isClosed(accordionItem)) {
        accordionItem.CollapseItem();
    }
}






};
});
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.Collapse.CollapseJS", [], function () {
return function ($parameters, $actions, $roles, $public) {

var currentAccordionItem = document.getElementById($parameters.WidgetId);

var currentAccordionItemContent = currentAccordionItem.querySelector('.section-expandable-content');

currentAccordionItemContent.removeAttribute('style');

// Gets initial height value
var expandedHeight = currentAccordionItemContent.getBoundingClientRect().height;

// Toggle is--closed/is--open class from current accordion item
currentAccordionItem.classList.add('is--closed');
currentAccordionItem.classList.remove('is--open');

// Removes expanded class and adds the collapsed class to obtain the collapsed height value
currentAccordionItemContent.classList.remove('is--expanded');
currentAccordionItemContent.classList.add('is--collapsed');

var collapsedHeight = currentAccordionItemContent.getBoundingClientRect().height;

currentAccordionItemContent.style.height = expandedHeight + 'px';

// Removes collapsed class and adds the expanded class to animate
currentAccordionItemContent.classList.add('is--expanded');
currentAccordionItemContent.classList.remove('is--collapsed');

// This setTimeout (0ms) will ensure that the DOM received the height 0 before actually starts the transition
var waitDomIterateTimeout = setTimeout(function() {
    
    // Adds is--animating class to current accordion item content to obtain the final height value
    currentAccordionItemContent.classList.add('is--animating');
    
    // Removes is--expanded class from current accordion item content
    currentAccordionItemContent.classList.remove('is--expanded');
    
    currentAccordionItemContent.style.height = collapsedHeight + 'px';
    
    // Adds event listener to transition end
    currentAccordionItemContent.addEventListener('transitionend', transitionEndHandler);
    
    // Adds is--collapsed class to current accordion item content
    currentAccordionItemContent.classList.add('is--collapsed');
    
    // Clear timeout
    clearTimeout(waitDomIterateTimeout);
}, 100);

var transitionEndHandler = function() {
    var currentElement = currentAccordionItemContent;
    var currentElementHeader = currentAccordionItem.querySelector('.section-expandable-title');
    
    if(currentElement) {
        // Removes is--animating class
        currentElement.classList.remove('is--animating');
        
        // Remove height and pointer events inline style
        currentElement.style.height = '';
        currentElementHeader.style.pointerEvents = '';
        
        // Verify if the currentElement has inline-styles and remove attribute if are empty
        if(currentElement.style.cssText.length === 0) {
            currentElement.removeAttribute('style');
        }
        
        if($parameters.IsKeypress) {
            // Add focus for Accessibility
            currentElementHeader.focus();
        }
        
        // Set visibility through ARIA states - Accessibility
        $actions.SetAriaAttributes(false, $parameters.WidgetId);
        
        // Removes transitionend event listener
        currentElement.removeEventListener('transitionend', transitionEndHandler, false);   
    }
};


};
});
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnReady.InitJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var sectionItem = document.getElementById($parameters.Id);
var sectionTitle = document.getElementById($parameters.TitleId);
var sectionContent = document.getElementById($parameters.ContentId);
var contentPlaceholder = document.getElementById($parameters.ContentPlaceholderId);
var accordion;
var isExpanded;
$parameters.HasContent = contentPlaceholder.innerHTML !== "";

accordion = sectionItem.closest('.accordion');

// If accordion selector with closest returns null, change to work with parent nodes
if(accordion === null){
    accordion = sectionItem.parentNode.parentNode;
}

var multipleItemsData = accordion.getAttribute('data-multiple-items');

// Check if is inside Accordion
if(accordion.classList.contains('accordion')) {
    $parameters.HasWrapper = true;
} 

// Check if MultipleItems is False
if(multipleItemsData === 'True') {
    $parameters.IsMultipleItems = true;
}

// Add classes if expanded set as true. Doing here, instead of using Platform If on div, to avoid conflict with FLIP animation
if($parameters.IsParameterChange) {
    if($parameters.IsExpanded) {
        $actions.Expand(false);
    } else {
        $actions.Collapse(false);
    }
} else if($parameters.IsExpanded) {
    sectionContent.classList.remove('is--collapsed');
    sectionContent.classList.add('is--expanded');
}


var onKeyDownPress = function(e){
    isExpanded = sectionTitle.getAttribute('aria-expanded');

    //If esc, Close AccordionItem
    if(isExpanded === "true" && e.keyCode == "27") {
        $actions.OnClick($parameters.Id, true);
        e.preventDefault();
        e.stopPropagation();
    }
    
    //If enter or space use the onAccordionClick to validate
    if (e.keyCode == "32" || e.keyCode == "13") {
        $actions.OnClick($parameters.Id, true);
        e.preventDefault();
        e.stopPropagation();
    }
};

if($parameters.HasContent) {
    sectionTitle.addEventListener('keydown', onKeyDownPress);
}

$parameters.AccordionObj = accordion;
};
});
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.OnReady.SetGlobalActionsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var element = document.getElementById($parameters.WidgetId);

// Add actions
element.CollapseItem = function() { 
    $actions.Collapse();
};

element.ExpandItem = function() { 
    $actions.Expand();
};

element.updateAccordion = function(i) { 
    $actions.OnUpdate(i);
};
};
});
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.SetAriaAttributes.SetAttributesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var currentAccordionItem = document.getElementById($parameters.ElementId);

// Set visibility through ARIA states - Accessibility
var setAriaExpanded = function(currentAccordionItem, status, ariaHidden) {
    if(currentAccordionItem) {
        currentAccordionItem.setAttribute('aria-expanded', status);
        currentAccordionItem.querySelector('.section-expandable-title').setAttribute('aria-expanded', status);
        currentAccordionItem.querySelector('.section-expandable-content').setAttribute('aria-hidden', ariaHidden);   
    }
};

if($parameters.IsExpand) {
    setAriaExpanded(currentAccordionItem, 'true', 'false');
} else {
    setAriaExpanded(currentAccordionItem, 'false', 'true');
}
};
});
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller.Expand.ExpandJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var currentAccordionItem = document.getElementById($parameters.WidgetId);

var currentAccordionItemContent = currentAccordionItem.querySelector('.section-expandable-content');
var currentAccordionItemHeader = currentAccordionItem.querySelector('.section-expandable-title');

// Gets initial height value
var collapsedHeight = currentAccordionItemContent.getBoundingClientRect().height;

// Toggle is--closed/is--open class from current accordion item
currentAccordionItem.classList.remove('is--closed');
currentAccordionItem.classList.add('is--open');

// Prevents multiple clicks on Accordion when it's animating
currentAccordionItemHeader.style.pointerEvents = 'none';

// Toggle is--collapsed/is--expanded class from current accordion item
currentAccordionItemContent.classList.remove('is--collapsed');
currentAccordionItemContent.classList.add('is--expanded');

currentAccordionItemContent.removeAttribute('style');

// Gets final height value
var expandedHeight = currentAccordionItemContent.getBoundingClientRect().height;

// Removes is--expanded class from current accordion item content to animate
currentAccordionItemContent.classList.remove('is--expanded');

currentAccordionItemContent.style.height = collapsedHeight + 'px';

// This setTimeout (0ms) will ensure that the DOM received the height 0 before actually starts the transition
var waitDomIterateTimeout = setTimeout(function() {
    
    // Adds is--animating class to current accordion item content to obtain the final height value
    currentAccordionItemContent.classList.add('is--animating');
    
    currentAccordionItemContent.style.height = expandedHeight + 'px';
    
    // Adds event listener to transition end
    currentAccordionItemContent.addEventListener('transitionend', transitionEndHandler);
    
    // Adds is--expanded class to current accordion item content
    currentAccordionItemContent.classList.add('is--expanded');
    
    // Clear timeout
    clearTimeout(waitDomIterateTimeout);
}, 100);

var transitionEndHandler = function() {
    var currentElement = currentAccordionItemContent;
    var currentElementHeader = currentAccordionItemHeader;
    
    if(currentElement) {
        // Removes is--animating class
        currentElement.classList.remove('is--animating');
        
        // Remove height and pointer events inline style
        currentElement.style.height = '';
        currentElementHeader.style.pointerEvents = '';
        
        // Verify if the currentElement has inline-styles and remove attribute if are empty
        if(currentElement.style.cssText.length === 0) {
            currentElement.removeAttribute('style');
        }
        
        if($parameters.IsKeypress) {
            // Add focus for Accessibility
            currentElement.focus();
        }
        
        // Set visibility through ARIA states - Accessibility
        $actions.SetAriaAttributes(true, $parameters.WidgetId);
        
        // Removes transitionend event listener
        currentElement.removeEventListener('transitionend', transitionEndHandler, false);   
    }
};
};
});

define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"uH474EG98UWu66fjJnRMEw": {
getter: function (varBag, idService) {
return varBag.vars.value.elemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"H6_URj9QlE6gsA7Ww0znVg": {
getter: function (varBag, idService) {
return varBag.vars.value.isKeypressInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ITL3dT0myE6Z0AOK+9giLw": {
getter: function (varBag, idService) {
return varBag.toggleClassJSResult.value;
}
},
"75wVnR84xUGy3atra+QRjQ": {
getter: function (varBag, idService) {
return varBag.updateAttributeJSResult.value;
}
},
"AMILuOoG4ke_79zMQTSmmw": {
getter: function (varBag, idService) {
return varBag.closeAllJSResult.value;
}
},
"FJ3PDvRw7U+kUJrrizzXng": {
getter: function (varBag, idService) {
return varBag.vars.value.isKeypressInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"pkndEhyfXkWdQZjwvnwX7A": {
getter: function (varBag, idService) {
return varBag.collapseJSResult.value;
}
},
"h4EtQEnEL0KOoUKhh0xu1A": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ywBvXBmgVE2hhxgY7CeXvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isParameterChangeInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"IQEqTqWI+UW9zNQJRym3ZQ": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"Zt_QfjVMyUiu8S02TIDMuQ": {
getter: function (varBag, idService) {
return varBag.setGlobalActionsJSResult.value;
}
},
"oAOOqAxUR0KNg+VvPaZzFA": {
getter: function (varBag, idService) {
return varBag.vars.value.isExpandInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"NeI3808ps02UKM0dvc7AQQ": {
getter: function (varBag, idService) {
return varBag.vars.value.elemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PcZUvp9J9Eib1zkTsr6UmQ": {
getter: function (varBag, idService) {
return varBag.setAttributesJSResult.value;
}
},
"xZXkIeQbVUW+h2byYyyXwQ": {
getter: function (varBag, idService) {
return varBag.vars.value.multipleItemsInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"IyiK7dLzmE6BscJm8teq8Q": {
getter: function (varBag, idService) {
return varBag.vars.value.isKeypressInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"A6IH7sTFG0WZOs8gKMOoIg": {
getter: function (varBag, idService) {
return varBag.expandJSResult.value;
}
},
"c_q+1+4U2UiH4O2XebuQPg": {
getter: function (varBag, idService) {
return varBag.model.variables.isMultipleItemsVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BA6UoaFbdkSsn+S5pTuw8g": {
getter: function (varBag, idService) {
return varBag.model.variables.accordionObjVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"gWp43QIaSUGQpC9yEoGb7g": {
getter: function (varBag, idService) {
return varBag.model.variables.hasWrapperVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"9uItrg2+7EmD4xaUdkTnBQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isWebAppVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"y1ZMHLTIgU62JcNEuenj4w": {
getter: function (varBag, idService) {
return varBag.model.variables.hasContentVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Xo1P2eklLUqAefrosisBig": {
getter: function (varBag, idService) {
return varBag.model.variables.isExpandedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ZrXZuG0950WHRlUGM_DdLw": {
getter: function (varBag, idService) {
return varBag.model.variables.usePaddingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vNcLB2Dv2EeEL01xyfRDSg": {
getter: function (varBag, idService) {
return varBag.model.variables.isDisabledIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ETQumq6BdU+oGgBGTvgU6Q": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4cz+1P_Q_0qlYWsNvGwlew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SectionItem"));
})(varBag.model, idService);
}
},
"aO_dqlhwa0WLP78NnlmsxA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitleWrapper"));
})(varBag.model, idService);
}
},
"BqyuiTNF2kOC3mCvF_Zwaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"moSnioHaO02Fl8kiHGVnaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentWrapper"));
})(varBag.model, idService);
}
},
"Sy31Ig_TnkmtjRme1PoiPw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
