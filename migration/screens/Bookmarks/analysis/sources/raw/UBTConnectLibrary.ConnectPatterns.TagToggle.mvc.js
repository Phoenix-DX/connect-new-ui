define("UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$TagRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-tag-toggle";
}, false), 
this.attr("Tag", "tagIn", "Tag", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TagRec());
}, false, UBTConnectLibraryModel.TagRec), 
this.attr("_tagInDataFetchStatus", "_tagInDataFetchStatus", "_tagInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isEnabled", "isEnabledIn", "isEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Tag" in inputs) {
this.variables.tagIn = inputs.Tag;
if("_tagInDataFetchStatus" in inputs) {
this.variables._tagInDataFetchStatus = inputs._tagInDataFetchStatus;
}

}

if("ExtendedClasses" in inputs) {
this.variables.extendedClassesIn = inputs.ExtendedClasses;
if("_extendedClassesInDataFetchStatus" in inputs) {
this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
}

}

if("isEnabled" in inputs) {
this.variables.isEnabledIn = inputs.isEnabled;
if("_isEnabledInDataFetchStatus" in inputs) {
this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.TagToggle");
});
define("UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$model", "UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$TagRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_model, UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "ConnectPatterns.TagToggle";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("jys+MWNAN0aUP1Osw2vwyw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = ((model.variables.isEnabledIn) ? (((model.variables.tagIn.isSelectedAttr) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.primary) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0))) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3));
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
rec.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = ((model.variables.isEnabledIn) ? (((model.variables.tagIn.isSelectedAttr) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.primary) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral5))) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3));
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.rounded;
return rec;
}();
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = ((model.variables.isEnabledIn) ? (((model.variables.tagIn.isSelectedAttr) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7))) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral6));
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
return rec;
}();
}, function () {
return model.variables.isEnabledIn;
}, function () {
return model.variables.tagIn.isSelectedAttr;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._tagInDataFetchStatus),
ExtendedClasses: model.getCachedValue(idService.getId("jys+MWNAN0aUP1Osw2vwyw.ExtendedClasses"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, "inline-block", callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.extendedClassesIn, callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), "ubt-skeleton-section__element", callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.extendedClassesIn;
}),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
return controller.customContainerClicked$Action(controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if((model.variables.tagIn.iconIdAttr === OS.BuiltinFunctions.nullTextIdentifier()), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.tagIn.textAttr,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tagInDataFetchStatus)
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
SpacingSize: UBTConnectLibraryModel.staticEntities.uBT_Size.small,
Text: model.variables.tagIn.textAttr,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tagInDataFetchStatus),
TextOptions: model.getCachedValue(idService.getId("KuiwBLyj80207UPOU1mXdg.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.small;
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: model.getCachedValue(idService.getId("WjwAPtapwUC1ZOQN0Jr0jw.In_ColorId"), function () {
return ((model.variables.isEnabledIn) ? (((model.variables.tagIn.isSelectedAttr) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7))) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral6));
}, function () {
return model.variables.isEnabledIn;
}, function () {
return model.variables.tagIn.isSelectedAttr;
}),
_in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._tagInDataFetchStatus),
In_IconId: model.variables.tagIn.iconIdAttr,
_in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tagInDataFetchStatus),
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.nonStandard_16
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._tagInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables.tagIn.iconIdAttr), asPrimitiveValue(model.variables.tagIn.isSelectedAttr), asPrimitiveValue(model.variables.isEnabledIn)]
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._tagInDataFetchStatus), asPrimitiveValue(model.variables.tagIn.isSelectedAttr), asPrimitiveValue(model.variables.tagIn.textAttr), asPrimitiveValue(model.variables.tagIn.iconIdAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$debugger", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$TagRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_Debugger) {
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
Controller.prototype._customContainerClicked$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CustomContainerClicked");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:t5DtR+1IE02dtau2D7a30w:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.xVJLVH_ArkK39DiB4igKfQ/ClientActions.t5DtR+1IE02dtau2D7a30w:ih2eBiX2bkBYijYjjvA_Nw", "UBTConnectLibrary", "CustomContainerClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Yg8yZUnMVkC2LFgoakVlWA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yfc5cYiGc02eemUdawy70g", callContext.id) && model.variables.isEnabledIn)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_+0ROmz6Q02ffi2GR3BD3g", callContext.id);
// Trigger Event: Event_Click
return controller.event_Click$Action(model.variables.tagIn.isSelectedAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:p27dGjqUrkqgpWZRud0X0Q", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:p27dGjqUrkqgpWZRud0X0Q", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:t5DtR+1IE02dtau2D7a30w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:t5DtR+1IE02dtau2D7a30w", callContext.id);
throw ex;

});
};

Controller.prototype.customContainerClicked$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._customContainerClicked$Action, callContext);

};
Controller.prototype.event_Click$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:xVJLVH_ArkK39DiB4igKfQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.xVJLVH_ArkK39DiB4igKfQ:6WtmIenUoAFtGGTHQ_IIkQ", "UBTConnectLibrary", "TagToggle", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:xVJLVH_ArkK39DiB4igKfQ", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
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

define("UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"QmhxJd+50UabJ4OqVB0nvg": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7TygdoUTV06p6CZOrXZZVg": {
getter: function (varBag, idService) {
return varBag.model.variables.tagIn;
}
},
"FDfFaFRfjU+SWbrrc7Y5yA": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LRokkod0yE+kJB9h28Ue8Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isEnabledIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"V2b0gS+OVUGkyuiXl_VM6g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"GCiglh+0d0+j30u0iLBt1A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
