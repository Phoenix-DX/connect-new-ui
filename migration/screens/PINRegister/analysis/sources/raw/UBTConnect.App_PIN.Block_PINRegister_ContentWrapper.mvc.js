define("UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "NavigationHandler.controller", "UBTConnect.controller", "UBT_AppManager.PIN.Pincode_Register.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.controller$GetResumeLoginLink"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBT_AppManagerModel, UBT_AppManagerController, NavigationHandlerController, UBTConnectController, UBT_AppManager_PIN_Pincode_Register_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UserName", "userNameVar", "UserName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("UseOverlay", "useOverlayIn", "UseOverlay", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_useOverlayInDataFetchStatus", "_useOverlayInDataFetchStatus", "_useOverlayInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isFromMenu", "isFromMenuIn", "isFromMenu", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isFromMenuInDataFetchStatus", "_isFromMenuInDataFetchStatus", "_isFromMenuInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("RegisterText", "registerTextIn", "RegisterText", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Register a PIN code";
}, false), 
this.attr("_registerTextInDataFetchStatus", "_registerTextInDataFetchStatus", "_registerTextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ConfirmText", "confirmTextIn", "ConfirmText", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Confirm PIN code";
}, false), 
this.attr("_confirmTextInDataFetchStatus", "_confirmTextInDataFetchStatus", "_confirmTextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EnableName", "enableNameIn", "EnableName", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_enableNameInDataFetchStatus", "_enableNameInDataFetchStatus", "_enableNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((UBT_AppManager_PIN_Pincode_Register_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("UseOverlay" in inputs) {
this.variables.useOverlayIn = inputs.UseOverlay;
if("_useOverlayInDataFetchStatus" in inputs) {
this.variables._useOverlayInDataFetchStatus = inputs._useOverlayInDataFetchStatus;
}

}

if("isFromMenu" in inputs) {
this.variables.isFromMenuIn = inputs.isFromMenu;
if("_isFromMenuInDataFetchStatus" in inputs) {
this.variables._isFromMenuInDataFetchStatus = inputs._isFromMenuInDataFetchStatus;
}

}

if("RegisterText" in inputs) {
this.variables.registerTextIn = inputs.RegisterText;
if("_registerTextInDataFetchStatus" in inputs) {
this.variables._registerTextInDataFetchStatus = inputs._registerTextInDataFetchStatus;
}

}

if("ConfirmText" in inputs) {
this.variables.confirmTextIn = inputs.ConfirmText;
if("_confirmTextInDataFetchStatus" in inputs) {
this.variables._confirmTextInDataFetchStatus = inputs._confirmTextInDataFetchStatus;
}

}

if("EnableName" in inputs) {
this.variables.enableNameIn = inputs.EnableName;
if("_enableNameInDataFetchStatus" in inputs) {
this.variables._enableNameInDataFetchStatus = inputs._enableNameInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_PIN.Block_PINRegister_ContentWrapper");
});
define("UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$model", "UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$controller", "UBTConnect.clientVariables", "UBT_AppManager.PIN.Pincode_Register.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.controller$GetResumeLoginLink"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBT_AppManagerModel, UBT_AppManagerController, NavigationHandlerController, React, OSView, UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_model, UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_controller, UBTConnectClientVariables, UBT_AppManager_PIN_Pincode_Register_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "App_PIN.Block_PINRegister_ContentWrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBT_AppManager_PIN_Pincode_Register_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBT_AppManager_PIN_Pincode_Register_mvc_view, {
inputs: {
In_AllowBackNavigation: model.variables.isFromMenuIn,
_in_AllowBackNavigationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isFromMenuInDataFetchStatus),
In_PinLength: 4,
In_ExtendedClasses: model.getCachedValue(idService.getId("KxyvLAoepEylxSEMMP1HXA.In_ExtendedClasses"), function () {
return ("connect-pin-screen" + ((model.variables.useOverlayIn) ? (" ubt-pin-overlay") : ("")));
}, function () {
return model.variables.useOverlayIn;
}),
_in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useOverlayInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
pinRegistrationSuccess$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/Pincode_Register PinRegistrationSuccess");
return controller.event_Pincode_RegisterPinRegistrationSuccess$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
pinRegistrationError$Action: function (errorMessageIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/Pincode_Register PinRegistrationError");
controller.event_Pincode_RegisterPinRegistrationError$Action(errorMessageIn, controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
headerBar: PlaceholderContent.Empty,
titlePlaceholder: new PlaceholderContent(function () {
return [$if(model.variables.useOverlayIn, false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnect.ConnectLogoWhite.svg"),
style: "login-screen__connect-logo",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnect.ConnectLogo.svg"),
style: "login-screen__connect-logo",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}),
registrationText: new PlaceholderContent(function () {
return [$if(model.variables.enableNameIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: ("Welcome " + model.variables.userNameVar),
In_TextOptions: model.getCachedValue(idService.getId("f8IgzUbLlEWiFOz5+R4LLQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
uuid: "3",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("szBrBTvJpkaCSqSjZaiIOA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = ((model.variables.enableNameIn) ? (UBTConnectModel.staticEntities.uBT_FontWeight.regular) : (UBTConnectModel.staticEntities.uBT_FontWeight.semiBold));
return rec;
}();
}, function () {
return model.variables.enableNameIn;
}),
_in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._enableNameInDataFetchStatus),
In_Text: model.variables.registerTextIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._registerTextInDataFetchStatus)
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
uuid: "4",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
confirmationText: new PlaceholderContent(function () {
return [$if(model.variables.enableNameIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("aZcs3TTCrUuVpQHsClTN4g.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: ("Welcome " + model.variables.userNameVar)
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
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("6Yc__p0e9UCg_7oDR0rf0g.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = ((model.variables.enableNameIn) ? (UBTConnectModel.staticEntities.uBT_FontWeight.regular) : (UBTConnectModel.staticEntities.uBT_FontWeight.semiBold));
return rec;
}();
}, function () {
return model.variables.enableNameIn;
}),
_in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._enableNameInDataFetchStatus),
In_Text: model.variables.confirmTextIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._confirmTextInDataFetchStatus)
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
uuid: "6",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
optionPlaceholder: PlaceholderContent.Empty,
erasePlaceholder: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.display_36,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.backspace,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.inherit
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
uuid: "7",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
contentPlaceholder: new PlaceholderContent(function () {
return [$if(model.variables.isFromMenuIn, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("xl+Z0uG_zE21CEatbfW6wg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
return rec;
}();
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return ["Need help? ", React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
marginLeft: "0"
},
style: "font-regular text-underline",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/UBTConnect/ContactUsMenu", {}),
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Contact Us")];
})
},
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isFromMenuIn), asPrimitiveValue(model.variables.confirmTextIn), asPrimitiveValue(model.variables.registerTextIn), asPrimitiveValue(model.variables.userNameVar), asPrimitiveValue(model.variables.enableNameIn), asPrimitiveValue(model.variables._isFromMenuInDataFetchStatus), asPrimitiveValue(model.variables._confirmTextInDataFetchStatus), asPrimitiveValue(model.variables._registerTextInDataFetchStatus), asPrimitiveValue(model.variables._enableNameInDataFetchStatus), asPrimitiveValue(model.variables._useOverlayInDataFetchStatus), asPrimitiveValue(model.variables.useOverlayIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$debugger", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.controller$GetResumeLoginLink"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBT_AppManagerModel, UBT_AppManagerController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_Debugger) {
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
Controller.prototype._event_Pincode_RegisterPinRegistrationError$Action = function (errorMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_Pincode_RegisterPinRegistrationError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.Event_Pincode_RegisterPinRegistrationError$vars"))());
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:czjyNYD5u0aEdard9HuSiw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.uG0rBhf5a0OK5pLRjIaf8w/ClientActions.czjyNYD5u0aEdard9HuSiw:5T0AEzWo__d+BH4cpyWW2A", "UBTConnect", "Event_Pincode_RegisterPinRegistrationError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:achsrCNsb0ab0Rop2Xlkhw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qjHotTdC+0KmMyVQCvWnxw", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", vars.value.errorMessageInLocal, UBTConnectModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EO5VxS+nWE+631Y_gWQC0A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:czjyNYD5u0aEdard9HuSiw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.Event_Pincode_RegisterPinRegistrationError$vars", [{
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BP59TikA20+yNSGPtnlsNQ:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.uG0rBhf5a0OK5pLRjIaf8w/ClientActions.BP59TikA20+yNSGPtnlsNQ:ZBu4dzNULLiY0C_7fLCz2w", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U4L4NXWduU2kwv_Ot5WDbg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xTzVLJ+Ir0q7QGCUJflwyQ", callContext.id) && model.variables.enableNameIn)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y1ayPAqFoE+Fr2ofZ8IovQ", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MdowdA6McU6Ypk_Ah9FmyQ", callContext.id);
// UserName = AppManager_GetCachedUserInfo.UserInformation.FirstName + " " + AppManager_GetCachedUserInfo.UserInformation.LastName
model.variables.userNameVar = ((appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr + " ") + appManager_GetCachedUserInfoVar.value.userInformationOut.lastNameAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6yEXFrxGikK4ND+NJw1eYQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6yEXFrxGikK4ND+NJw1eYQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BP59TikA20+yNSGPtnlsNQ", callContext.id);
}

};
Controller.prototype._event_Pincode_RegisterPinRegistrationSuccess$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_Pincode_RegisterPinRegistrationSuccess");
callContext = controller.callContext(callContext);
var getResumeLoginLinkVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getResumeLoginLinkVar = getResumeLoginLinkVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:RCjlkprPa0S+ULH1agVXMw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.uG0rBhf5a0OK5pLRjIaf8w/ClientActions.RCjlkprPa0S+ULH1agVXMw:b44tXJ5QZvDHFH3HRSGfpg", "UBTConnect", "Event_Pincode_RegisterPinRegistrationSuccess", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KK2V0kurWkS_8Mp5pO04KA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ooHUCFtmD0WleVqoTI++Gw", callContext.id);
// Execute Action: ReplaceOnUpcomingNavigation
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dB5Rph_6C02GuhmYyqxN9A", callContext.id) && model.variables.isFromMenuIn)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lBx7XZWjF0SDHfUXeYXYcA", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "Your PIN has been changed.", UBTConnectModel.staticEntities.uBT_MessageType.success, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:T4OHDfl_CEqFpLXYne2oyQ", callContext.id);
// Destination: /UBTConnect/Menu
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Menu", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromRight), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NTlzPEzBKU2MGDpjTpctag", callContext.id);
// Execute Action: GetResumeLoginLink
getResumeLoginLinkVar.value = UBTConnectController.default.getResumeLoginLink$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Vh6CZxuFBkqI5QSFE00XZQ", callContext.id);
// IsNavigateToHomeOnBack = True
UBTConnectClientVariables.setIsNavigateToHomeOnBack(true);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s3gYmro_I0CPSMiXGU39pA", callContext.id) && ((getResumeLoginLinkVar.value.uRLOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rNb7KtcTkEWCcm3znfnbBw", callContext.id);
// Execute Action: ScreenController_NavigateToPage2
model.flush();
return UBTJavaScriptUtilsController.default.screenController_NavigateToPage$Action(getResumeLoginLinkVar.value.uRLOut, true, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K5lXzDJGX0y6r_jDcJmaqA", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VeAEyQ6CRkS9ug1GReSdIg", callContext.id) && ((UBTConnectClientVariables.getLastURL()) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KjMkZlQ1fUqvSoqtzXxr7A", callContext.id);
// Execute Action: ScreenController_NavigateToPage
model.flush();
return UBTJavaScriptUtilsController.default.screenController_NavigateToPage$Action(UBTConnectClientVariables.getLastURL(), true, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mp_yXdeBhkGyz4PgDZ7K_w", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m04SNsf1YkS0AfuKDKPEsQ", callContext.id);
// IsNavigateToHomeOnBack = False
UBTConnectClientVariables.setIsNavigateToHomeOnBack(false);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A5qVRWB38kyX_qFHs5d2+w", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RCjlkprPa0S+ULH1agVXMw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RCjlkprPa0S+ULH1agVXMw", callContext.id);
throw ex;

});
};

Controller.prototype.event_Pincode_RegisterPinRegistrationError$Action = function (errorMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_Pincode_RegisterPinRegistrationError$Action, callContext, errorMessageIn);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.event_Pincode_RegisterPinRegistrationSuccess$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_Pincode_RegisterPinRegistrationSuccess$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw:bpWaB45r1qkJPgqYmZEd1g", "UBTConnect", "App_PIN", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:uG0rBhf5a0OK5pLRjIaf8w:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.uG0rBhf5a0OK5pLRjIaf8w:Gp3wxdEcmua6nB2jWCZsAw", "UBTConnect", "Block_PINRegister_ContentWrapper", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:uG0rBhf5a0OK5pLRjIaf8w", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_PIN/Block_PINRegister_ContentWrapper On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"c_pzk_7yFkSuJnurK4gKeA": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"y1ayPAqFoE+Fr2ofZ8IovQ": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"NTlzPEzBKU2MGDpjTpctag": {
getter: function (varBag, idService) {
return varBag.getResumeLoginLinkVar.value;
}
},
"T5X9ME00WkOmw62FzSUpgA": {
getter: function (varBag, idService) {
return varBag.model.variables.userNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0In8rDbmJk2qSLpgroxW3g": {
getter: function (varBag, idService) {
return varBag.model.variables.useOverlayIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Wo0I4kcLCkuP38oiVt6X4Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isFromMenuIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0vGa8hoz0Ue+TVWE_gTC0g": {
getter: function (varBag, idService) {
return varBag.model.variables.registerTextIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0fyd9rwBBEmsHR4e0se8NQ": {
getter: function (varBag, idService) {
return varBag.model.variables.confirmTextIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VtmhA7cawEK3XPNzJxiQJA": {
getter: function (varBag, idService) {
return varBag.model.variables.enableNameIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"qHg76QXpcEySrhc1VpzLZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderBar"));
})(varBag.model, idService);
}
},
"DU4953W9v0iOYcC2nLJ9aA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitlePlaceholder"));
})(varBag.model, idService);
}
},
"GuSTv4jAJ0KE3F+NrYNUHw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RegistrationText"));
})(varBag.model, idService);
}
},
"3Za5Y4vhwEymvTz25coYqg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowName"));
})(varBag.model, idService);
}
},
"pFRz801+eU+a02DvLi_sRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ConfirmationText"));
})(varBag.model, idService);
}
},
"oOeqjavwCEa6BhjaSDlfqg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowName2"));
})(varBag.model, idService);
}
},
"QBSn8pu8NkSNxN6TM5r6aw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OptionPlaceholder"));
})(varBag.model, idService);
}
},
"m2J2AgrHP0WxuyQekbyf3A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ErasePlaceholder"));
})(varBag.model, idService);
}
},
"8FGJ4ZIc50uyJtvA3214wg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentPlaceholder"));
})(varBag.model, idService);
}
},
"QPdhIvdvvE+KhqQsPWTlcQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowNeeHelp"));
})(varBag.model, idService);
}
},
"S99U907JAUWhrSsBjmsFEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
