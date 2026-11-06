define("OutSystemsUI_2_23.Interaction.Carousel.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model$Carousel_InternalConfigRec", "OutSystemsUI_2_23.model$CarouselItemsRec", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "OutSystemsUI_2_23.controller$CarouselDestroy", "OutSystemsUI_2_23.controller$CarouselChangeTextProperty", "OutSystemsUI_2_23.controller$CarouselChangeIntegerProp", "OutSystemsUI_2_23.controller$CarouselChangeBooleanProperty", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$CarouselInitialize", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$CarouselCreate", "OutSystemsUI_2_23.controller$CarouselRegisterCallback", "OutSystemsUI_2_23.controller$CarouselUpdateOnRender"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Carousel_InternalConfigRec());
}, false, OutSystemsUI_2_23Model.Carousel_InternalConfigRec), 
this.attr("Navigation", "navigationIn", "Navigation", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.carouselNavigation.both;
}, false), 
this.attr("_navigationInDataFetchStatus", "_navigationInDataFetchStatus", "_navigationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Height", "heightIn", "Height", true, false, OS.DataTypes.DataTypes.Text, function () {
return "auto";
}, false), 
this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ItemsPerSlide", "itemsPerSlideIn", "ItemsPerSlide", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.CarouselItemsRec());
}, false, OutSystemsUI_2_23Model.CarouselItemsRec), 
this.attr("_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.CarouselOptionalConfigsRec());
}, false, OutSystemsUI_2_23Model.CarouselOptionalConfigsRec), 
this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("Navigation" in inputs) {
this.variables.navigationIn = inputs.Navigation;
if("_navigationInDataFetchStatus" in inputs) {
this.variables._navigationInDataFetchStatus = inputs._navigationInDataFetchStatus;
}

}

if("Height" in inputs) {
this.variables.heightIn = inputs.Height;
if("_heightInDataFetchStatus" in inputs) {
this.variables._heightInDataFetchStatus = inputs._heightInDataFetchStatus;
}

}

if("ItemsPerSlide" in inputs) {
this.variables.itemsPerSlideIn = inputs.ItemsPerSlide;
if("_itemsPerSlideInDataFetchStatus" in inputs) {
this.variables._itemsPerSlideInDataFetchStatus = inputs._itemsPerSlideInDataFetchStatus;
}

}

if("OptionalConfigs" in inputs) {
this.variables.optionalConfigsIn = inputs.OptionalConfigs;
if("_optionalConfigsInDataFetchStatus" in inputs) {
this.variables._optionalConfigsInDataFetchStatus = inputs._optionalConfigsInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Interaction.Carousel");
});
define("OutSystemsUI_2_23.Interaction.Carousel.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Interaction.Carousel.mvc$model", "OutSystemsUI_2_23.Interaction.Carousel.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$Carousel_InternalConfigRec", "OutSystemsUI_2_23.model$CarouselItemsRec", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "OutSystemsUI_2_23.controller$CarouselDestroy", "OutSystemsUI_2_23.controller$CarouselChangeTextProperty", "OutSystemsUI_2_23.controller$CarouselChangeIntegerProp", "OutSystemsUI_2_23.controller$CarouselChangeBooleanProperty", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$CarouselInitialize", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$CarouselCreate", "OutSystemsUI_2_23.controller$CarouselRegisterCallback", "OutSystemsUI_2_23.controller$CarouselUpdateOnRender"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Interaction_Carousel_mvc_model, OutSystemsUI_2_23_Interaction_Carousel_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.Carousel";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.Splide.js", "scripts/OutSystemsUI_2_23.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_Carousel_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_Carousel_mvc_controller;
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
name: model.variables.internalConfigsVar.uniqueIdAttr
},
style: "osui-carousel",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-carousel__track",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.carouselItems,
style: "osui-carousel__content",
_idProps: {
service: idService,
name: "CarouselItems"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splide__arrows",
visible: false,
_idProps: {
service: idService,
name: "Arrows"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splide__arrow splide__arrow--prev background-neutral-0",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 18px;"
},
icon: "angle-left",
iconSize: /*FontSize*/ 0,
style: "icon text-neutral-7",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splide__arrow splide__arrow--next background-neutral-0",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "font-size: 18px;"
},
icon: "angle-right",
iconSize: /*FontSize*/ 0,
style: "icon text-neutral-7",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "splide__pagination",
visible: false,
_idProps: {
service: idService,
name: "Pagination"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splide__pagination__page is-active",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splide__pagination__page",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splide__pagination__page",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splide__pagination__page",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splide__pagination__page",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "splide__pagination__page",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI_2_23.Interaction.Carousel.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Interaction.Carousel.mvc$translationsResources", "OutSystemsUI_2_23.Interaction.Carousel.mvc$debugger", "OutSystemsUI_2_23.Interaction.Carousel.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI_2_23.model$Carousel_InternalConfigRec", "OutSystemsUI_2_23.model$CarouselItemsRec", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "OutSystemsUI_2_23.controller$CarouselDestroy", "OutSystemsUI_2_23.controller$CarouselChangeTextProperty", "OutSystemsUI_2_23.controller$CarouselChangeIntegerProp", "OutSystemsUI_2_23.controller$CarouselChangeBooleanProperty", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$CarouselInitialize", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$CarouselCreate", "OutSystemsUI_2_23.controller$CarouselRegisterCallback", "OutSystemsUI_2_23.controller$CarouselUpdateOnRender"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Interaction_Carousel_mvc_TranslationsResources, OutSystemsUI_2_23_Interaction_Carousel_mvc_Debugger, OutSystemsUI_2_23_Interaction_Carousel_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onSlideMovedHandler$Action: function (carouselIdIn, indexIn) {
carouselIdIn = (carouselIdIn === undefined) ? "" : carouselIdIn;
indexIn = (indexIn === undefined) ? 0 : indexIn;
return controller.executeActionInsideJSNode(controller._onSlideMovedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(carouselIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(indexIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnSlideMovedHandler");
},
initializeHandler$Action: function (carouselIdIn) {
carouselIdIn = (carouselIdIn === undefined) ? "" : carouselIdIn;
return controller.executeActionInsideJSNode(controller._initializeHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(carouselIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "InitializeHandler");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_2_23_Interaction_Carousel_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:8dBpHCQ3XEewb7rpZV30iA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.WxQsMo0OLEezlJ_ERiNofw/ClientActions.8dBpHCQ3XEewb7rpZV30iA:cytpSLiROyhhBU7OT7TnKA", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:lrxO8fkSe0KTL8zMYQ_ojA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:7BplGde9wUuxNbagOqkqtA", callContext.id);
// Execute Action: CarouselDestroy
OutSystemsUI_2_23Controller.default.carouselDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:OfDMLu2FxUKhJIquctL2_w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:8dBpHCQ3XEewb7rpZV30iA", callContext.id);
}

};
Controller.prototype._initializeHandler$Action = function (carouselIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InitializeHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.Carousel.InitializeHandler$vars"))());
vars.value.carouselIdInLocal = carouselIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:IPB4KJo0lUCStWSRS9vvxw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.WxQsMo0OLEezlJ_ERiNofw/ClientActions.IPB4KJo0lUCStWSRS9vvxw:9QW+5Ktgym9zyn4ouNYX_g", "OutSystemsUI_2_23", "InitializeHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:VpZg_Bd1SEyX5tsM2H47Vw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pf019Khjy0eQ_i1vcQUXNw", callContext.id);
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.carouselIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:SOfWJSnDjku5gJ9_kkrtvQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:IPB4KJo0lUCStWSRS9vvxw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:IPB4KJo0lUCStWSRS9vvxw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.Carousel.InitializeHandler$vars", [{
name: "CarouselId",
attrName: "carouselIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onSlideMovedHandler$Action = function (carouselIdIn, indexIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnSlideMovedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.Carousel.OnSlideMovedHandler$vars"))());
vars.value.carouselIdInLocal = carouselIdIn;
vars.value.indexInLocal = indexIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:5ZpIK26TJEa2UOM9iPvERg:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.WxQsMo0OLEezlJ_ERiNofw/ClientActions.5ZpIK26TJEa2UOM9iPvERg:OMvFemiJ1VMlaeycsBG_SQ", "OutSystemsUI_2_23", "OnSlideMovedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:5D+ZJfNFX0OE9k3JrswO5Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:dDzSVP2wQEmmN2z_wNqV2A", callContext.id);
// Trigger Event: OnSlideMoved
return controller.onSlideMoved$Action(vars.value.carouselIdInLocal, vars.value.indexInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zm0MU1AwtEaAZymPWRZy6A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:5ZpIK26TJEa2UOM9iPvERg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:5ZpIK26TJEa2UOM9iPvERg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.Carousel.OnSlideMovedHandler$vars", [{
name: "CarouselId",
attrName: "carouselIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Index",
attrName: "indexInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:jxJaTCo_sEyy8wMa70XLLQ:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.WxQsMo0OLEezlJ_ERiNofw/ClientActions.jxJaTCo_sEyy8wMa70XLLQ:804zMsf+rkB4kuu_IPistA", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:UApYEw7qb0OcpGLUeDTEww", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2lKszdmdVkiLC6IsbIgkqg", callContext.id) && ((model.variables.navigationIn) !== (model.variables.internalConfigsVar.navigationAttr)))) {
// Navigation
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:L_eHkNEJYkmhoszAa+1iCQ", callContext.id);
// InternalConfigs.Navigation = Navigation
model.variables.internalConfigsVar.navigationAttr = model.variables.navigationIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:NBuEADPkZUqHJHIaWkTxEw", callContext.id);
// Execute Action: Update_Navigation
OutSystemsUI_2_23Controller.default.carouselChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Navigation", model.variables.internalConfigsVar.navigationAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:_gWWnTQAIEKVdew5HSCSCg", callContext.id) && ((model.variables.itemsPerSlideIn.desktopAttr) !== (model.variables.internalConfigsVar.itemsDesktopAttr)))) {
// ItemsDesktop
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:x88XqjWpckuo1OyQA03JQg", callContext.id);
// InternalConfigs.ItemsDesktop = ItemsPerSlide.Desktop
model.variables.internalConfigsVar.itemsDesktopAttr = model.variables.itemsPerSlideIn.desktopAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Ho1S4vgz2UCaRZ+aZnoXFg", callContext.id);
// Execute Action: Update_ItemsDesktop
OutSystemsUI_2_23Controller.default.carouselChangeIntegerProp$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ItemsDesktop", model.variables.internalConfigsVar.itemsDesktopAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qexnYS_RdEmdy3gM_NWnFQ", callContext.id) && ((model.variables.itemsPerSlideIn.tabletAttr) !== (model.variables.internalConfigsVar.itemsTabletAttr)))) {
// ItemsTablet
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ymAxxCH9Tku7c4i27D8LxQ", callContext.id);
// InternalConfigs.ItemsTablet = ItemsPerSlide.Tablet
model.variables.internalConfigsVar.itemsTabletAttr = model.variables.itemsPerSlideIn.tabletAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:RN73Wlg9IUu+U_29MrDcRg", callContext.id);
// Execute Action: Update_ItemsTablet
OutSystemsUI_2_23Controller.default.carouselChangeIntegerProp$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ItemsTablet", model.variables.internalConfigsVar.itemsTabletAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DeTxjt8FdUGhUKIqppoMoQ", callContext.id) && ((model.variables.itemsPerSlideIn.phoneAttr) !== (model.variables.internalConfigsVar.itemsPhoneAttr)))) {
// ItemsPhone
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:fi70G5L5gUWPsfDOqsH1zg", callContext.id);
// InternalConfigs.ItemsPhone = ItemsPerSlide.Phone
model.variables.internalConfigsVar.itemsPhoneAttr = model.variables.itemsPerSlideIn.phoneAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:iiBk9kwAVkKOHN+hXU7ZCQ", callContext.id);
// Execute Action: Update_ItemsPhone
OutSystemsUI_2_23Controller.default.carouselChangeIntegerProp$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ItemsPhone", model.variables.internalConfigsVar.itemsPhoneAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:4iR23rYCp0i7Oi2i6Rw3yA", callContext.id) && ((model.variables.optionalConfigsIn.autoPlayAttr) !== (model.variables.internalConfigsVar.autoPlayAttr)))) {
// Autoplay
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:kAHCEYAJ6U2WrtkwGhuU_w", callContext.id);
// InternalConfigs.AutoPlay = OptionalConfigs.AutoPlay
model.variables.internalConfigsVar.autoPlayAttr = model.variables.optionalConfigsIn.autoPlayAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:5+mHnpWB5UWNyPNr8dk2XQ", callContext.id);
// Execute Action: Update_AutoPlay
OutSystemsUI_2_23Controller.default.carouselChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "AutoPlay", model.variables.internalConfigsVar.autoPlayAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:IbYbgDth4U2tZBAWTQ2ylg", callContext.id) && ((model.variables.optionalConfigsIn.loopAttr) !== (model.variables.internalConfigsVar.loopAttr)))) {
// Loop
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:FX9tD0_AXEiVaT610puMeQ", callContext.id);
// InternalConfigs.Loop = OptionalConfigs.Loop
model.variables.internalConfigsVar.loopAttr = model.variables.optionalConfigsIn.loopAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:x0BAb74U30mmS6OllW8CcQ", callContext.id);
// Execute Action: Update_Loop
OutSystemsUI_2_23Controller.default.carouselChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Loop", model.variables.internalConfigsVar.loopAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:8gxuXsOMp0qczZxbIq_O3w", callContext.id) && ((model.variables.optionalConfigsIn.paddingAttr) !== (model.variables.internalConfigsVar.paddingAttr)))) {
// Padding
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:P949GhYBKUuL7z+ii0PHow", callContext.id);
// InternalConfigs.Padding = OptionalConfigs.Padding
model.variables.internalConfigsVar.paddingAttr = model.variables.optionalConfigsIn.paddingAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:yrbk1sAcCEaFPeZ2z8eZhQ", callContext.id);
// Execute Action: Update_Padding
OutSystemsUI_2_23Controller.default.carouselChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Padding", model.variables.internalConfigsVar.paddingAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:GWtut0cTGk6ePo6AwBCl+A", callContext.id) && ((model.variables.optionalConfigsIn.itemsGapAttr) !== (model.variables.internalConfigsVar.itemsGapAttr)))) {
// ItemsGap
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Wb8LL57+iUubvfJFm5809g", callContext.id);
// InternalConfigs.ItemsGap = OptionalConfigs.ItemsGap
model.variables.internalConfigsVar.itemsGapAttr = model.variables.optionalConfigsIn.itemsGapAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Sf0FSJqA+ESdBnH4Ha6tFA", callContext.id);
// Execute Action: Update_Gap
OutSystemsUI_2_23Controller.default.carouselChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ItemsGap", model.variables.internalConfigsVar.itemsGapAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:GDRPprxOkkez_RbsgYbVFw", callContext.id) && ((model.variables.optionalConfigsIn.startingPositionAttr) !== (model.variables.internalConfigsVar.startingPositionAttr)))) {
// StartingPosition
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:uteGdc5QmUyTf2nxtsVYww", callContext.id);
// InternalConfigs.StartingPosition = OptionalConfigs.StartingPosition
model.variables.internalConfigsVar.startingPositionAttr = model.variables.optionalConfigsIn.startingPositionAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:q3QaoPx_lEug1FG8A3O5og", callContext.id);
// Execute Action: Update_StartingPosition
OutSystemsUI_2_23Controller.default.carouselChangeIntegerProp$Action(model.variables.internalConfigsVar.uniqueIdAttr, "StartingPosition", model.variables.internalConfigsVar.startingPositionAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ijiYtXcF9ESifTlrm730_A", callContext.id) && ((model.variables.heightIn) !== (model.variables.internalConfigsVar.heightAttr)))) {
// Height
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:hQrw0KYcBE+HDqe9xWIPvQ", callContext.id);
// InternalConfigs.Height = Height
model.variables.internalConfigsVar.heightAttr = model.variables.heightIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:P4rYiszhsEucjd6daKrP5g", callContext.id);
// Execute Action: Update_Height
OutSystemsUI_2_23Controller.default.carouselChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Height", model.variables.internalConfigsVar.heightAttr, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Lo0+9ril1UqcxhnOCigZqg", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internalConfigsVar.extendedClassAttr)))) {
// ExtendedClass
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:g9wWyZWVQkKvXGpgdcs7lA", callContext.id);
// InternalConfigs.ExtendedClass = ExtendedClass
model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:M5E0i8qd10CDGzgCgpmPJA", callContext.id);
// Execute Action: Update_ExtendedClass
OutSystemsUI_2_23Controller.default.carouselChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internalConfigsVar.extendedClassAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:4G4EuF7mbUubeG5NS_k5qA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:4G4EuF7mbUubeG5NS_k5qA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:jxJaTCo_sEyy8wMa70XLLQ", callContext.id);
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:I42oVS75lUGcOhiQGsEK0A:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.WxQsMo0OLEezlJ_ERiNofw/ClientActions.I42oVS75lUGcOhiQGsEK0A:Rv+XpyCiBviMGvOvzyYJNg", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:cxbu5CRe9kWVPuSq6e2rRQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zSWWUpf11UW3dUDmce9cfQ", callContext.id);
// Execute Action: CarouselInitialize
OutSystemsUI_2_23Controller.default.carouselInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3HcMSLQ4hkeqnSIpNGqntg", callContext.id);
// Execute Action: LogEnd
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Carousel created", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:89AzUyjKF0qwDLR420jsxg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:I42oVS75lUGcOhiQGsEK0A", callContext.id);
}

};
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.generateUniqueIdVar = generateUniqueIdVar;
varBag.serialize_configsVar = serialize_configsVar;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:uVP+2pzTlk26oiACs70TtQ:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.WxQsMo0OLEezlJ_ERiNofw/ClientActions.uVP+2pzTlk26oiACs70TtQ:IcoA6smJC9OXlqfHfbfrxA", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:LZ6WuOu5O0SkQNe4DvOjlw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:XRXFFpBAkUGIJaTpHCGv0Q", callContext.id);
// Execute Action: LogStart
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Going to create Carousel", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:xdy+NgCgnkGj8bz_pu+4vg", callContext.id);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUI_2_23Controller.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);

// Set Initial Configs
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id);
// InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// InternalConfigs.ExtendedClass = ExtendedClass
model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// InternalConfigs.Navigation = Navigation
model.variables.internalConfigsVar.navigationAttr = model.variables.navigationIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// InternalConfigs.Height = Height
model.variables.internalConfigsVar.heightAttr = model.variables.heightIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// InternalConfigs.AutoPlay = OptionalConfigs.AutoPlay
model.variables.internalConfigsVar.autoPlayAttr = model.variables.optionalConfigsIn.autoPlayAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// InternalConfigs.Loop = OptionalConfigs.Loop
model.variables.internalConfigsVar.loopAttr = model.variables.optionalConfigsIn.loopAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// InternalConfigs.Padding = OptionalConfigs.Padding
model.variables.internalConfigsVar.paddingAttr = model.variables.optionalConfigsIn.paddingAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// InternalConfigs.ItemsGap = OptionalConfigs.ItemsGap
model.variables.internalConfigsVar.itemsGapAttr = model.variables.optionalConfigsIn.itemsGapAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// InternalConfigs.StartingPosition = OptionalConfigs.StartingPosition
model.variables.internalConfigsVar.startingPositionAttr = model.variables.optionalConfigsIn.startingPositionAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// InternalConfigs.ItemsDesktop = ItemsPerSlide.Desktop
model.variables.internalConfigsVar.itemsDesktopAttr = model.variables.itemsPerSlideIn.desktopAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// InternalConfigs.ItemsTablet = ItemsPerSlide.Tablet
model.variables.internalConfigsVar.itemsTabletAttr = model.variables.itemsPerSlideIn.tabletAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PL4kLtZ+c0WH4arbzJkdUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "12");
// InternalConfigs.ItemsPhone = ItemsPerSlide.Phone
model.variables.internalConfigsVar.itemsPhoneAttr = model.variables.itemsPerSlideIn.phoneAttr;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:4fyojAXEhECWYl3yrQrXrA", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar, true, false);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Gn2G4R38IE2AnPxrdhtnuA", callContext.id);
// Execute Action: CarouselCreate
OutSystemsUI_2_23Controller.default.carouselCreate$Action(model.variables.internalConfigsVar.uniqueIdAttr, serialize_configsVar.value.jSONOut, OutSystemsUI_2_23Model.staticEntities.carouselProvider.splide, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:eyF6Ef6a70GUgD471wVsDw", callContext.id);
// Execute Action: RegisterCallbacks
controller._registerCallbacks$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2pzrEVz87UOyC6CM9iHksQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:uVP+2pzTlk26oiACs70TtQ", callContext.id);
}

};
Controller.prototype._registerCallbacks$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RegisterCallbacks");
callContext = controller.callContext(callContext);
var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCallbackHandlersJSResult = getCallbackHandlersJSResult;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:FrJ95u1Hqk+fGWWY7N57bw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.WxQsMo0OLEezlJ_ERiNofw/ClientActions.FrJ95u1Hqk+fGWWY7N57bw:LTJBiut+wuYMJaFEFKkW5A", "OutSystemsUI_2_23", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:fPFcrJNIy0aiWJa8zeCNbw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:BWsIEo_lzUi91KRJmDog3g", callContext.id);
getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Interaction_Carousel_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
OnSlideMovedObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
OnCarouselInitializedObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.Carousel.RegisterCallbacks$getCallbackHandlersJSResult"))();
jsNodeResult.onSlideMovedObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnSlideMovedObj, OS.DataTypes.DataTypes.Object);
jsNodeResult.onCarouselInitializedObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnCarouselInitializedObj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OnSlideMovedHandler: controller.clientActionProxies.onSlideMovedHandler$Action,
InitializeHandler: controller.clientActionProxies.initializeHandler$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:0O94Wevic0ejYEBiTr0fCg", callContext.id);
// Execute Action: RegisterOnSlideMoved
OutSystemsUI_2_23Controller.default.carouselRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.carousel_OnSlideMoved, getCallbackHandlersJSResult.value.onSlideMovedObjOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:1uP8CAWMs0iGOuIZZxILYw", callContext.id);
// Execute Action: RegisterOnCarouselInitialized
OutSystemsUI_2_23Controller.default.carouselRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.onCarouselInitializedObjOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pqpkc0TbJEibS7+HxXs4AQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:FrJ95u1Hqk+fGWWY7N57bw", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.Carousel.RegisterCallbacks$getCallbackHandlersJSResult", [{
name: "OnSlideMovedObj",
attrName: "onSlideMovedObjOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "OnCarouselInitializedObj",
attrName: "onCarouselInitializedObjOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onRender$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:Jnch_1Q+lkajDYKT1HPhsA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.WxQsMo0OLEezlJ_ERiNofw/ClientActions.Jnch_1Q+lkajDYKT1HPhsA:BJbFjSg9h2jLo43vrLE9Vw", "OutSystemsUI_2_23", "OnRender", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:U9uyddj1Rky0p6ac5pznwA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:U8dCt_EQWEWHfDoWrl6F4g", callContext.id);
// Execute Action: CarouselUpdateOnRender
OutSystemsUI_2_23Controller.default.carouselUpdateOnRender$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Pti2o2aOtkaSNJMX05vfUQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:Jnch_1Q+lkajDYKT1HPhsA", callContext.id);
}

};

Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.initializeHandler$Action = function (carouselIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._initializeHandler$Action, callContext, carouselIdIn);

};
Controller.prototype.onSlideMovedHandler$Action = function (carouselIdIn, indexIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onSlideMovedHandler$Action, callContext, carouselIdIn, indexIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.registerCallbacks$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);

};
Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};
Controller.prototype.onSlideMoved$Action = function () {
return Promise.resolve();
};
Controller.prototype.initialized$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:qQS9OZYcu0SRmBsR92a4Og:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og:lqPcl3zEGn9YSs1SWHw12A", "OutSystemsUI_2_23", "Interaction", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:WxQsMo0OLEezlJ_ERiNofw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.WxQsMo0OLEezlJ_ERiNofw:6xiMhPoRWHgk6SAr6RR0iA", "OutSystemsUI_2_23", "Carousel", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:WxQsMo0OLEezlJ_ERiNofw", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:qQS9OZYcu0SRmBsR92a4Og", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/Carousel On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/Carousel On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/Carousel On Render");
return controller.onRender$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/Carousel On Destroy");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/Carousel On Parameters Changed");
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
return OutSystemsUI_2_23Controller.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUI_2_23LanguageResources);
});
define("OutSystemsUI_2_23.Interaction.Carousel.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.OnSlideMovedObj = $actions.OnSlideMovedHandler;

$parameters.OnCarouselInitializedObj = $actions.InitializeHandler;
};
});

define("OutSystemsUI_2_23.Interaction.Carousel.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"l8a_ErIsG0G_b4UwybnLKw": {
getter: function (varBag, idService) {
return varBag.vars.value.carouselIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tEqz87DfnEqSMJciONF9mA": {
getter: function (varBag, idService) {
return varBag.vars.value.carouselIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rMGkQRHcaE+s_gf1LHgI_g": {
getter: function (varBag, idService) {
return varBag.vars.value.indexInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"xdy+NgCgnkGj8bz_pu+4vg": {
getter: function (varBag, idService) {
return varBag.generateUniqueIdVar.value;
}
},
"4fyojAXEhECWYl3yrQrXrA": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"BWsIEo_lzUi91KRJmDog3g": {
getter: function (varBag, idService) {
return varBag.getCallbackHandlersJSResult.value;
}
},
"G8XWHW1RFUyfP6IPbByfuQ": {
getter: function (varBag, idService) {
return varBag.model.variables.internalConfigsVar;
}
},
"jPK9VbaWYkKFi4Q8QFjiMg": {
getter: function (varBag, idService) {
return varBag.model.variables.navigationIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"m1cDytOiLU+Oo_VjybJRPg": {
getter: function (varBag, idService) {
return varBag.model.variables.heightIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZbG6ceiGz0WuYBDL6xaJYw": {
getter: function (varBag, idService) {
return varBag.model.variables.itemsPerSlideIn;
}
},
"yw8Nb9kuJEi7JHqTkTFdpQ": {
getter: function (varBag, idService) {
return varBag.model.variables.optionalConfigsIn;
}
},
"bjdGJk4SQkyOcsC1v53ARA": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tXZ7O9OWLE6n1TTBaLBrwg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Togglepreview"));
})(varBag.model, idService);
}
},
"LsVVAcQaI0iCjVw1cFAc_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CarouselItems"));
})(varBag.model, idService);
}
},
"LlaSG0kQokKRmVRuj2ZP0g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Arrows"));
})(varBag.model, idService);
}
},
"nK1qsfFZEE6Ls++Gi8TJ4w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Pagination"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Interaction.Carousel.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
