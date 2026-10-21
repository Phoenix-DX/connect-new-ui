define("UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$model", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-avatar-double";
}, false), 
this.attr("In_FirstAvatarImage", "in_FirstAvatarImageIn", "In_FirstAvatarImage", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageRec());
}, false, UBTConnectLibraryModel.AvatarImageRec), 
this.attr("_in_FirstAvatarImageInDataFetchStatus", "_in_FirstAvatarImageInDataFetchStatus", "_in_FirstAvatarImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SecondAvatarImage", "in_SecondAvatarImageIn", "In_SecondAvatarImage", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageRec());
}, false, UBTConnectLibraryModel.AvatarImageRec), 
this.attr("_in_SecondAvatarImageInDataFetchStatus", "_in_SecondAvatarImageInDataFetchStatus", "_in_SecondAvatarImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SizeId", "in_SizeIdIn", "In_SizeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SizeIdInDataFetchStatus", "_in_SizeIdInDataFetchStatus", "_in_SizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_FirstAvatarImage" in inputs) {
this.variables.in_FirstAvatarImageIn = inputs.In_FirstAvatarImage;
if("_in_FirstAvatarImageInDataFetchStatus" in inputs) {
this.variables._in_FirstAvatarImageInDataFetchStatus = inputs._in_FirstAvatarImageInDataFetchStatus;
}

}

if("In_SecondAvatarImage" in inputs) {
this.variables.in_SecondAvatarImageIn = inputs.In_SecondAvatarImage;
if("_in_SecondAvatarImageInDataFetchStatus" in inputs) {
this.variables._in_SecondAvatarImageInDataFetchStatus = inputs._in_SecondAvatarImageInDataFetchStatus;
}

}

if("In_SizeId" in inputs) {
this.variables.in_SizeIdIn = inputs.In_SizeId;
if("_in_SizeIdInDataFetchStatus" in inputs) {
this.variables._in_SizeIdInDataFetchStatus = inputs._in_SizeIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.AvatarDouble");
});
define("UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$model", "UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$view", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_model, UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view) {
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
        View.displayName = "ConnectPatterns.AvatarDouble";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_controller;
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
ExtendedClasses: model.getCachedValue(idService.getId("TDbYcgUij0S8Oc7HbsVI7w.ExtendedClasses"), function () {
return (((model.variables.mainContainerClassVar + " ") + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(model.variables.in_SizeIdIn, callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + " inline-block");
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-avatar-double__wrapper",
visible: true,
_idProps: {
service: idService,
name: "Wrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-left",
visible: true,
_idProps: {
service: idService,
name: "FirstAvatar"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, {
inputs: {
In_AvatarImage: model.variables.in_FirstAvatarImageIn,
_in_AvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FirstAvatarImageInDataFetchStatus),
In_SizeId: model.variables.in_SizeIdIn,
_in_SizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SizeIdInDataFetchStatus)
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-avatar-double__wrapper__last-avatar",
visible: true,
_idProps: {
service: idService,
name: "LastAvatar"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, {
inputs: {
In_SizeId: model.variables.in_SizeIdIn,
_in_SizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SizeIdInDataFetchStatus),
In_AvatarImage: model.variables.in_SecondAvatarImageIn,
_in_AvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SecondAvatarImageInDataFetchStatus)
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_SecondAvatarImageIn), asPrimitiveValue(model.variables.in_SizeIdIn), asPrimitiveValue(model.variables._in_SecondAvatarImageInDataFetchStatus), asPrimitiveValue(model.variables._in_SizeIdInDataFetchStatus), asPrimitiveValue(model.variables._in_FirstAvatarImageInDataFetchStatus), asPrimitiveValue(model.variables.in_FirstAvatarImageIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$debugger", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_Debugger) {
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
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:3o_94888UGa0qaomZFOpnQ", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:fdNM0olxx0uuXjouAThNhw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.fdNM0olxx0uuXjouAThNhw:8UDI6khnWuwUCz4s86XNsw", "UBTConnectLibrary", "AvatarDouble", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:fdNM0olxx0uuXjouAThNhw", callContext.id);
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

define("UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"hHaR+3UC5EGk4f0I3SSCAg": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"M9f2iOB3BE2mUdfkG0h_GQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FirstAvatarImageIn;
}
},
"woP2ZVQGcUSZWaIAZSxDyw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SecondAvatarImageIn;
}
},
"e0iVazXKL0OSVL5w6zqOsw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SizeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZwMIzjwQGkq3XsEQV9miKA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"PZdbtjN63k2ef8PuonZYSw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Wrapper"));
})(varBag.model, idService);
}
},
"bJbRJvdX2ESM86aI4ue3jw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FirstAvatar"));
})(varBag.model, idService);
}
},
"Ls+FdybuI0GyFqQSjdmQ1Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LastAvatar"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
