define("UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, OutSystemsUI_2_23_Utilities_InlineSVG_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-avatar-image";
}, false), 
this.attr("In_AvatarImage", "in_AvatarImageIn", "In_AvatarImage", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageRec());
}, false, UBTConnectLibraryModel.AvatarImageRec), 
this.attr("_in_AvatarImageInDataFetchStatus", "_in_AvatarImageInDataFetchStatus", "_in_AvatarImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SizeId", "in_SizeIdIn", "In_SizeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SizeIdInDataFetchStatus", "_in_SizeIdInDataFetchStatus", "_in_SizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_BorderRadius", "in_BorderRadiusIn", "In_BorderRadius", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_Shape.circle;
}, false), 
this.attr("_in_BorderRadiusInDataFetchStatus", "_in_BorderRadiusInDataFetchStatus", "_in_BorderRadiusInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || OutSystemsUI_2_23_Utilities_InlineSVG_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_AvatarImage" in inputs) {
this.variables.in_AvatarImageIn = inputs.In_AvatarImage;
if("_in_AvatarImageInDataFetchStatus" in inputs) {
this.variables._in_AvatarImageInDataFetchStatus = inputs._in_AvatarImageInDataFetchStatus;
}

}

if("In_SizeId" in inputs) {
this.variables.in_SizeIdIn = inputs.In_SizeId;
if("_in_SizeIdInDataFetchStatus" in inputs) {
this.variables._in_SizeIdInDataFetchStatus = inputs._in_SizeIdInDataFetchStatus;
}

}

if("In_BorderRadius" in inputs) {
this.variables.in_BorderRadiusIn = inputs.In_BorderRadius;
if("_in_BorderRadiusInDataFetchStatus" in inputs) {
this.variables._in_BorderRadiusInDataFetchStatus = inputs._in_BorderRadiusInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.AvatarImage");
});
define("UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_model, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "ConnectPatterns.AvatarImage";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(((model.variables.in_AvatarImageIn.uRLAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("o9AXUKYz_kKJowXMel5NHg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral5;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = model.variables.in_BorderRadiusIn;
return rec;
}();
return rec;
}();
rec.isSkeletonElementAttr = true;
return rec;
}();
}, function () {
return model.variables.in_BorderRadiusIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BorderRadiusInDataFetchStatus),
ExtendedClasses: model.getCachedValue(idService.getId("o9AXUKYz_kKJowXMel5NHg.ExtendedClasses"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, "inline-block", callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(model.variables.in_SizeIdIn, callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.in_SizeIdIn;
}),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SizeIdInDataFetchStatus)
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
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
type: /*External*/ 1,
url: model.variables.in_AvatarImageIn.uRLAttr,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_AvatarImageInDataFetchStatus), asPrimitiveValue(model.variables.in_AvatarImageIn.uRLAttr)]
})];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
ExtendedClasses: model.getCachedValue(idService.getId("jcIO3a+4HEqHfngJfyro6w.ExtendedClasses"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, "inline-block", callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(model.variables.in_SizeIdIn, callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.in_SizeIdIn;
}),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SizeIdInDataFetchStatus),
Options: model.getCachedValue(idService.getId("jcIO3a+4HEqHfngJfyro6w.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.backgroundColorAttr;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderColorAttr;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderSizeAttr;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = model.variables.in_BorderRadiusIn;
return rec;
}();
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontColorAttr;
rec.fontSizeAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontSizeAttr;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
rec.isSkeletonElementAttr = true;
return rec;
}();
}, function () {
return model.variables.in_AvatarImageIn.fallbackOptionsAttr.backgroundColorAttr;
}, function () {
return model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderColorAttr;
}, function () {
return model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderSizeAttr;
}, function () {
return model.variables.in_BorderRadiusIn;
}, function () {
return model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontColorAttr;
}, function () {
return model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontSizeAttr;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus, model.variables._in_BorderRadiusInDataFetchStatus)
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
content: new PlaceholderContent(function () {
return [$if(((model.variables.in_AvatarImageIn.fallbackOptionsAttr.initialsAttr) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
style: (model.variables.mainContainerClassVar + "__initials"),
value: model.variables.in_AvatarImageIn.fallbackOptionsAttr.initialsAttr,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus)
})];
}, function () {
return [$if(((model.variables.in_AvatarImageIn.fallbackOptionsAttr.sVGAttr) !== ("")), false, this, function () {
return [React.createElement(OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, {
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
uuid: "4",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: model.variables.in_AvatarImageIn.fallbackOptionsAttr.iconIdAttr,
_in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus),
In_ColorId: model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontColorAttr,
_in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus)
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
uuid: "5",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.mainContainerClassVar), asPrimitiveValue(model.variables._in_AvatarImageInDataFetchStatus), asPrimitiveValue(model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontColorAttr), asPrimitiveValue(model.variables.in_AvatarImageIn.fallbackOptionsAttr.iconIdAttr), asPrimitiveValue(model.variables.in_AvatarImageIn.fallbackOptionsAttr.sVGAttr), asPrimitiveValue(model.variables.in_AvatarImageIn.fallbackOptionsAttr.initialsAttr)]
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$debugger", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_Debugger) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:MgdmrUrJrkK0rNu1jt1ifw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.MgdmrUrJrkK0rNu1jt1ifw:Qxdy0oyEHCwszf7o_xrCYQ", "UBTConnectLibrary", "AvatarImage", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:MgdmrUrJrkK0rNu1jt1ifw", callContext.id);
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

define("UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"bqUyim1mwkmt4vdjRwN4YA": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4wS2RIle8EC6McM21OGvlA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AvatarImageIn;
}
},
"uROijAq7HUm7LdTx3XgC_Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SizeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PUfMY+vQCkyZjbCvxzFLyA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BorderRadiusIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lyYakS0vYU2vr_APksWgNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasImageURL"));
})(varBag.model, idService);
}
},
"GBOJy5bGqEaLsJ5ob4+KSA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"qAHUUUvRm02ImE_+aiRtpA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"0KJVuPjHEUO4MZaH9iEYCw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasInitials"));
})(varBag.model, idService);
}
},
"4sk_haWR5k+KLHxGfu9Xaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasSVG"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
