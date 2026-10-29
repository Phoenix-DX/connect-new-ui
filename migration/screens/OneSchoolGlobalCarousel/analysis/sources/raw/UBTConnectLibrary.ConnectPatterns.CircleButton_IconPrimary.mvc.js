define("UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IconId", "iconIdIn", "IconId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_iconIdInDataFetchStatus", "_iconIdInDataFetchStatus", "_iconIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Text", "textIn", "Text", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_textInDataFetchStatus", "_textInDataFetchStatus", "_textInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isEnabled", "isEnabledIn", "isEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IconBackgroundColorId", "iconBackgroundColorIdIn", "IconBackgroundColorId", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_Color.cyanLightest;
}, false), 
this.attr("_iconBackgroundColorIdInDataFetchStatus", "_iconBackgroundColorIdInDataFetchStatus", "_iconBackgroundColorIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IconColorId", "iconColorIdIn", "IconColorId", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_Color.cyanDarker;
}, false), 
this.attr("_iconColorIdInDataFetchStatus", "_iconColorIdInDataFetchStatus", "_iconColorIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ExtendedClasses" in inputs) {
this.variables.extendedClassesIn = inputs.ExtendedClasses;
if("_extendedClassesInDataFetchStatus" in inputs) {
this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
}

}

if("IconId" in inputs) {
this.variables.iconIdIn = inputs.IconId;
if("_iconIdInDataFetchStatus" in inputs) {
this.variables._iconIdInDataFetchStatus = inputs._iconIdInDataFetchStatus;
}

}

if("Text" in inputs) {
this.variables.textIn = inputs.Text;
if("_textInDataFetchStatus" in inputs) {
this.variables._textInDataFetchStatus = inputs._textInDataFetchStatus;
}

}

if("isEnabled" in inputs) {
this.variables.isEnabledIn = inputs.isEnabled;
if("_isEnabledInDataFetchStatus" in inputs) {
this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
}

}

if("IconBackgroundColorId" in inputs) {
this.variables.iconBackgroundColorIdIn = inputs.IconBackgroundColorId;
if("_iconBackgroundColorIdInDataFetchStatus" in inputs) {
this.variables._iconBackgroundColorIdInDataFetchStatus = inputs._iconBackgroundColorIdInDataFetchStatus;
}

}

if("IconColorId" in inputs) {
this.variables.iconColorIdIn = inputs.IconColorId;
if("_iconColorIdInDataFetchStatus" in inputs) {
this.variables._iconColorIdInDataFetchStatus = inputs._iconColorIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.CircleButton_IconPrimary");
});
define("UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_model, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectPatterns.CircleButton_IconPrimary";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, {
inputs: {
BackgroundColorId: model.getCachedValue(idService.getId("UIMrCvrwO0y6hmfHJJR4ig.BackgroundColorId"), function () {
return ((model.variables.isEnabledIn) ? (model.variables.iconBackgroundColorIdIn) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3));
}, function () {
return model.variables.isEnabledIn;
}, function () {
return model.variables.iconBackgroundColorIdIn;
}),
_backgroundColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._iconBackgroundColorIdInDataFetchStatus),
SizeId: UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.small_40,
ExtendedClasses: model.variables.extendedClassesIn,
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_WithLabel OnClick");
return controller.circleButton_WithLabelOnClick$Action(controller.callContext(eventHandlerContext));
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
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: model.variables.iconIdIn,
_in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconIdInDataFetchStatus),
In_ColorId: model.getCachedValue(idService.getId("J0YT1Q1GKkmDJNJggGODDA.In_ColorId"), function () {
return ((model.variables.isEnabledIn) ? (model.variables.iconColorIdIn) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7));
}, function () {
return model.variables.isEnabledIn;
}, function () {
return model.variables.iconColorIdIn;
}),
_in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._iconColorIdInDataFetchStatus)
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
badge: PlaceholderContent.Empty,
text: new PlaceholderContent(function () {
return [$if(((model.variables.textIn) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.variables.textIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._textInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("JNLA90XA70unyq2L2hSbdw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.textIn), asPrimitiveValue(model.variables.iconColorIdIn), asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._textInDataFetchStatus), asPrimitiveValue(model.variables._iconColorIdInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._iconIdInDataFetchStatus), asPrimitiveValue(model.variables.iconIdIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$debugger", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_Debugger) {
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
Controller.prototype._circleButton_WithLabelOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CircleButton_WithLabelOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:oeuxI02ApUS2XS5DV5TJMg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.BAoWgyIVHUKOEpU3SptoTA/ClientActions.oeuxI02ApUS2XS5DV5TJMg:jVo447HeKPmmyKz7aRiiNQ", "UBTConnectLibrary", "CircleButton_WithLabelOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6zPi5yBI1EiQUOwE3qs0BQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xIcdpvzLOUqACqcnfn0CuA", callContext.id) && model.variables.isEnabledIn)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ekFcIR4YXUWa0Dw8uPvt6g", callContext.id);
// Trigger Event: OnClick
return controller.onClick$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:m+VDOuYnG0miMkq2Pkpk1A", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:m+VDOuYnG0miMkq2Pkpk1A", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:oeuxI02ApUS2XS5DV5TJMg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:oeuxI02ApUS2XS5DV5TJMg", callContext.id);
throw ex;

});
};

Controller.prototype.circleButton_WithLabelOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._circleButton_WithLabelOnClick$Action, callContext);

};
Controller.prototype.onClick$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:BAoWgyIVHUKOEpU3SptoTA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.BAoWgyIVHUKOEpU3SptoTA:AiQw+F8GUd2gt_ghkep4TA", "UBTConnectLibrary", "CircleButton_IconPrimary", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:BAoWgyIVHUKOEpU3SptoTA", callContext.id);
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

define("UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"jBhVwJbuC0yj5OUBpDki5Q": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PsH1qMX7_0qi1r4MN512wg": {
getter: function (varBag, idService) {
return varBag.model.variables.iconIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DeJcd4z8VkyT+s9_3HBA_A": {
getter: function (varBag, idService) {
return varBag.model.variables.textIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2B6yNPwT9UOX4B263bcIvQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isEnabledIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"e7N_RPtXoUK4kGjhAIlkAA": {
getter: function (varBag, idService) {
return varBag.model.variables.iconBackgroundColorIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rB3byoLPW0aOTfaouDr0cg": {
getter: function (varBag, idService) {
return varBag.model.variables.iconColorIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"De6bC9VGukeuB0rivdtc2w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"zmcrpiV5C0Olfy6oQiGeow": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Badge"));
})(varBag.model, idService);
}
},
"syJkpRRxHkWce8y5lGTnAA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Text"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
