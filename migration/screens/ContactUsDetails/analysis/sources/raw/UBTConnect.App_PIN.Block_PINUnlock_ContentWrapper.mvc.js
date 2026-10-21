define("UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.controller", "UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc$model", "UBTConnect.model$CacheControl_PoliciesBooleanRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnect_Utils.model$CacheControl_PoliciesRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.model$PolicyInformationRec", "UBTConnect_Utils.controller$OpenPolicy"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnect_UtilsModel, UBTJavaScriptUtilsController, UBTConnect_UtilsController, UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnect_Utils_CacheControl_CacheControl_Policies_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("LocalCacheControlPolicies", "localCacheControlPoliciesVar", "LocalCacheControlPolicies", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CacheControl_PoliciesBooleanRecord());
}, false, UBTConnectModel.CacheControl_PoliciesBooleanRecord), 
this.attr("ShowFingerprintReader", "showFingerprintReaderVar", "ShowFingerprintReader", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("UseOverlay", "useOverlayIn", "UseOverlay", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_useOverlayInDataFetchStatus", "_useOverlayInDataFetchStatus", "_useOverlayInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ForceVisible", "in_ForceVisibleIn", "In_ForceVisible", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ForceVisibleInDataFetchStatus", "_in_ForceVisibleInDataFetchStatus", "_in_ForceVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("UnlockText", "unlockTextIn", "UnlockText", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Enter your PIN code";
}, false), 
this.attr("_unlockTextInDataFetchStatus", "_unlockTextInDataFetchStatus", "_unlockTextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowNeedHelp", "showNeedHelpIn", "ShowNeedHelp", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showNeedHelpInDataFetchStatus", "_showNeedHelpInDataFetchStatus", "_showNeedHelpInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isFromMenu", "isFromMenuIn", "isFromMenu", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isFromMenuInDataFetchStatus", "_isFromMenuInDataFetchStatus", "_isFromMenuInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowForgotPIN", "showForgotPINIn", "ShowForgotPIN", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showForgotPINInDataFetchStatus", "_showForgotPINInDataFetchStatus", "_showForgotPINInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowPolicy", "showPolicyIn", "ShowPolicy", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showPolicyInDataFetchStatus", "_showPolicyInDataFetchStatus", "_showPolicyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((((UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CacheControl_CacheControl_Policies_mvcModel.hasValidationWidgets);
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

if("In_ForceVisible" in inputs) {
this.variables.in_ForceVisibleIn = inputs.In_ForceVisible;
if("_in_ForceVisibleInDataFetchStatus" in inputs) {
this.variables._in_ForceVisibleInDataFetchStatus = inputs._in_ForceVisibleInDataFetchStatus;
}

}

if("UnlockText" in inputs) {
this.variables.unlockTextIn = inputs.UnlockText;
if("_unlockTextInDataFetchStatus" in inputs) {
this.variables._unlockTextInDataFetchStatus = inputs._unlockTextInDataFetchStatus;
}

}

if("ShowNeedHelp" in inputs) {
this.variables.showNeedHelpIn = inputs.ShowNeedHelp;
if("_showNeedHelpInDataFetchStatus" in inputs) {
this.variables._showNeedHelpInDataFetchStatus = inputs._showNeedHelpInDataFetchStatus;
}

}

if("isFromMenu" in inputs) {
this.variables.isFromMenuIn = inputs.isFromMenu;
if("_isFromMenuInDataFetchStatus" in inputs) {
this.variables._isFromMenuInDataFetchStatus = inputs._isFromMenuInDataFetchStatus;
}

}

if("ShowForgotPIN" in inputs) {
this.variables.showForgotPINIn = inputs.ShowForgotPIN;
if("_showForgotPINInDataFetchStatus" in inputs) {
this.variables._showForgotPINInDataFetchStatus = inputs._showForgotPINInDataFetchStatus;
}

}

if("ShowPolicy" in inputs) {
this.variables.showPolicyIn = inputs.ShowPolicy;
if("_showPolicyInDataFetchStatus" in inputs) {
this.variables._showPolicyInDataFetchStatus = inputs._showPolicyInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_PIN.Block_PINUnlock_ContentWrapper");
});
define("UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$model", "UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$controller", "UBTConnect.clientVariables", "UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc$view", "UBTConnect.model$CacheControl_PoliciesBooleanRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnect_Utils.model$CacheControl_PoliciesRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.model$PolicyInformationRec", "UBTConnect_Utils.controller$OpenPolicy"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsModel, UBTJavaScriptUtilsController, UBTConnect_UtilsController, React, OSView, UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_model, UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_controller, UBTConnectClientVariables, UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_Policies_mvc_view) {
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
        View.displayName = "App_PIN.Block_PINUnlock_ContentWrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_Policies_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_view, {
inputs: {
In_ExtendedClasses: model.getCachedValue(idService.getId("8z3SfGi9Y0qsxHSmcHv7tQ.In_ExtendedClasses"), function () {
return ("connect-pin-screen" + ((model.variables.useOverlayIn) ? (" ubt-pin-overlay") : ("")));
}, function () {
return model.variables.useOverlayIn;
}),
_in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useOverlayInDataFetchStatus),
In_IsScanFingerprintOnReady: model.variables.showFingerprintReaderVar,
In_ForceVisible: model.variables.in_ForceVisibleIn,
_in_ForceVisibleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ForceVisibleInDataFetchStatus),
In_HideFingerprint: !(model.variables.showFingerprintReaderVar),
In_AllowBackNavigation: model.variables.isFromMenuIn,
_in_AllowBackNavigationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isFromMenuInDataFetchStatus),
In_PinLength: 4
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
pinUnlockError$Action: function (errorMessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Fingerprint/PinUnlock_MobileWrapper PinUnlockError");
return controller.event_Pincode_PinUnlockError$Action(errorMessageIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
pinUnlockSuccess$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Fingerprint/PinUnlock_MobileWrapper PinUnlockSuccess");
return controller.event_Pincode_PinUnlockSuccess$Action(controller.callContext(eventHandlerContext));
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
placeholder_HeaderBar: PlaceholderContent.Empty,
placeholder_TitlePlaceholder: new PlaceholderContent(function () {
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
placeholder_UnlockText: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("sTItBCRgX0K9aehw_leVEw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: model.variables.unlockTextIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._unlockTextInDataFetchStatus)
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
}),
placeholder_FingerprintIcon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.inherit,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.fingerprint
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
placeholder_EraseButton: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.inherit,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.backspace,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.display_36
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
}),
placeholder_BottomKeyboard: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
gridProperties: {
classes: "OSInline"
},
style: "border-bottom-s border-color-neutral-0",
visible: model.variables.showForgotPINIn,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showForgotPINInDataFetchStatus)
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_PIN/Block_PINUnlock_ContentWrapper/Link OnClick");
controller.onClick_ForgotPIN$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
ExtendedClasses: "border-bottom-s border-color-neutral-0",
Options: model.getCachedValue(idService.getId("enguzcRWFUu3zSaLu4jR5w.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
rec.isUnderlinedAttr = false;
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Forgot PIN?",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})))];
}),
placeholder_Content: new PlaceholderContent(function () {
return [$if(model.variables.showNeedHelpIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("c9bDutv9D0eUnyAusuJigw.Options"), function () {
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
uuid: "11",
alias: "6"
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
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Contact Us")];
})
},
_dependencies: []
}))];
}, function () {
return [$if(model.variables.showPolicyIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: !(model.variables.localCacheControlPoliciesVar.isFetchedAttr)
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
uuid: "13",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
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
uuid: "14",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [$if(((model.variables.localCacheControlPoliciesVar.cacheControl_PoliciesAttr.policyInformation_TermsAndConditionsAttr.policy_UrlAttr) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_PIN/Block_PINUnlock_ContentWrapper/Link OnClick");
return controller.onClick_TermsAndCondition$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("OeM9CxPxpk2CVP8Qrs84Tg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.isUnderlinedAttr = true;
return rec;
}();
}),
In_Text: "Terms & Conditions"
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
uuid: "17",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
}, function () {
return [];
})];
}),
right: new PlaceholderContent(function () {
return [$if(((model.variables.localCacheControlPoliciesVar.cacheControl_PoliciesAttr.policyInformation_PrivacyPolicyAttr.policy_UrlAttr) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_PIN/Block_PINUnlock_ContentWrapper/Link OnClick");
return controller.onClick_PrivacyPolicy$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Our Privacy Policy",
In_TextOptions: model.getCachedValue(idService.getId("mCGe3yG2AkyUD629nJ6X2g.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.isUnderlinedAttr = true;
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
uuid: "20",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.localCacheControlPoliciesVar.cacheControl_PoliciesAttr.policyInformation_PrivacyPolicyAttr.policy_UrlAttr), asPrimitiveValue(model.variables.localCacheControlPoliciesVar.cacheControl_PoliciesAttr.policyInformation_TermsAndConditionsAttr.policy_UrlAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.localCacheControlPoliciesVar.cacheControl_PoliciesAttr.policyInformation_PrivacyPolicyAttr.policy_UrlAttr), asPrimitiveValue(model.variables.localCacheControlPoliciesVar.cacheControl_PoliciesAttr.policyInformation_TermsAndConditionsAttr.policy_UrlAttr)]
}), React.createElement(UBTConnect_Utils_CacheControl_CacheControl_Policies_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
result$Action: function (cacheControl_ResponseIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CacheControl/CacheControl_Policies Result");
controller.cacheControl_PoliciesResult$Action(cacheControl_ResponseIn, controller.callContext(eventHandlerContext));
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
uuid: "21",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.localCacheControlPoliciesVar.cacheControl_PoliciesAttr.policyInformation_PrivacyPolicyAttr.policy_UrlAttr), asPrimitiveValue(model.variables.localCacheControlPoliciesVar.cacheControl_PoliciesAttr.policyInformation_TermsAndConditionsAttr.policy_UrlAttr), asPrimitiveValue(model.variables.localCacheControlPoliciesVar.isFetchedAttr), asPrimitiveValue(model.variables.showPolicyIn), asPrimitiveValue(model.variables.showNeedHelpIn), asPrimitiveValue(model.variables.showForgotPINIn), asPrimitiveValue(model.variables.unlockTextIn), asPrimitiveValue(model.variables._showPolicyInDataFetchStatus), asPrimitiveValue(model.variables._showNeedHelpInDataFetchStatus), asPrimitiveValue(model.variables._showForgotPINInDataFetchStatus), asPrimitiveValue(model.variables._unlockTextInDataFetchStatus), asPrimitiveValue(model.variables._useOverlayInDataFetchStatus), asPrimitiveValue(model.variables.useOverlayIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$debugger", "UBTConnect.model$CacheControl_PoliciesBooleanRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnect_Utils.model$CacheControl_PoliciesRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.model$PolicyInformationRec", "UBTConnect_Utils.controller$OpenPolicy"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsModel, UBTJavaScriptUtilsController, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_Debugger) {
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
Controller.prototype._cacheControl_PoliciesResult$Action = function (cacheControl_ResponseIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CacheControl_PoliciesResult");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.CacheControl_PoliciesResult$vars"))());
vars.value.cacheControl_ResponseInLocal = cacheControl_ResponseIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AoftLafAhk6Bnkf5wceP8g:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.aqXGZDlGkkGYZDs0ae4y9g/ClientActions.AoftLafAhk6Bnkf5wceP8g:ScBALE2wvMjHo18pQkXB_A", "UBTConnect", "CacheControl_PoliciesResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PiqSmNcZUkSonUtnagKgkA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GUWtjfgYXE+jdBqTWO0Q1w", callContext.id);
// LocalCacheControlPolicies.CacheControl_Policies = CacheControl_Response
model.variables.localCacheControlPoliciesVar.cacheControl_PoliciesAttr = vars.value.cacheControl_ResponseInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GUWtjfgYXE+jdBqTWO0Q1w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalCacheControlPolicies.isFetched = True
model.variables.localCacheControlPoliciesVar.isFetchedAttr = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:27GSDxk2ukeD7sgQtBSnsQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AoftLafAhk6Bnkf5wceP8g", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.CacheControl_PoliciesResult$vars", [{
name: "CacheControl_Response",
attrName: "cacheControl_ResponseInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.CacheControl_PoliciesRec();
},
complexType: UBTConnect_UtilsModel.CacheControl_PoliciesRec
}]);
Controller.prototype._event_Pincode_PinUnlockError$Action = function (errorMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_Pincode_PinUnlockError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.Event_Pincode_PinUnlockError$vars"))());
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:RzkHOWZ9eEuzhYQgm9cOwQ:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.aqXGZDlGkkGYZDs0ae4y9g/ClientActions.RzkHOWZ9eEuzhYQgm9cOwQ:FA02N3GNXEU8JQBNvSnccA", "UBTConnect", "Event_Pincode_PinUnlockError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hS5_jFs_eEuV7T0SQVlBqw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lUTBHKcCP0ikpuYRCHk7Ew", callContext.id);
// FormattedMessage = ErrorMessage
vars.value.formattedMessageVar = vars.value.errorMessageInLocal;
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lLG3EZvUIUuKiuxvzvgQwQ", callContext.id) && (vars.value.errorMessageInLocal === "Pin does not match"))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oU2M4Ef4f0+7fpeILtp7lg", callContext.id);
// FormattedMessage = "Your current PIN is not correct!"
vars.value.formattedMessageVar = "Your current PIN is not correct!";
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.errorMessageInLocal === "User not found")) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W9GXh8Ypjk2RmMa1vN_grg", callContext.id);
// FormattedMessage = "No matching user. Please Register a PIN"
vars.value.formattedMessageVar = "No matching user. Please Register a PIN";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3_sNjRORYE6K6kA6zmBatw", callContext.id);
// Execute Action: FeedbackMessage_AutoClose2
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", vars.value.formattedMessageVar, UBTConnectModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9XFYReQogUayjZeY2ZFJsw", callContext.id);
// Trigger Event: NavigateTo_PINRegister
return controller.navigateTo_PINRegister$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AHLMTX5T90ydFPYOYSkeqA", callContext.id);
return OS.Flow.returnAsync();

});
}

});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XQivR9ffnUGJhKXhsap87Q", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", vars.value.formattedMessageVar, UBTConnectModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cA1n8TNlxUOgwJO0rPrGgQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RzkHOWZ9eEuzhYQgm9cOwQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RzkHOWZ9eEuzhYQgm9cOwQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.Event_Pincode_PinUnlockError$vars", [{
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FormattedMessage",
attrName: "formattedMessageVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._event_Pincode_PinUnlockSuccess$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_Pincode_PinUnlockSuccess");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:X5OFO1Kk0kyTuhcmLsC1Zw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.aqXGZDlGkkGYZDs0ae4y9g/ClientActions.X5OFO1Kk0kyTuhcmLsC1Zw:wY+CV9EsVGjnHuDTQCPHYg", "UBTConnect", "Event_Pincode_PinUnlockSuccess", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wmHOx4stfEmq4+R4zaAD6A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dSYv2jOg8k+AO9EcULfwtw", callContext.id);
// Trigger Event: Unlock
return controller.unlock$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TfZYTqEq0E6Xb9KUbvVlaw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:X5OFO1Kk0kyTuhcmLsC1Zw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:X5OFO1Kk0kyTuhcmLsC1Zw", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_PrivacyPolicy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_PrivacyPolicy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:XJ34uBSaMEG4S5ygBcfbiw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.aqXGZDlGkkGYZDs0ae4y9g/ClientActions.XJ34uBSaMEG4S5ygBcfbiw:1Y4WDzMmJCalQ0v8ky6OCw", "UBTConnect", "OnClick_PrivacyPolicy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I7pVRaoWJE6Hi9ROe3rJpQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1JBcAnkmcEW0RikCli2Mmg", callContext.id);
// Execute Action: OpenPolicy
model.flush();
return UBTConnect_UtilsController.default.openPolicy$Action(model.variables.localCacheControlPoliciesVar.cacheControl_PoliciesAttr.policyInformation_PrivacyPolicyAttr, "This policy couldn\'t be found.", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D4yTkKIlbUqD+UJYR9EBig", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:XJ34uBSaMEG4S5ygBcfbiw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:XJ34uBSaMEG4S5ygBcfbiw", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_TermsAndCondition$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_TermsAndCondition");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fD3R4F2FLEiQzl+UVMFWgQ:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.aqXGZDlGkkGYZDs0ae4y9g/ClientActions.fD3R4F2FLEiQzl+UVMFWgQ:BYdDUkfaE+h8nDRCbMfhlg", "UBTConnect", "OnClick_TermsAndCondition", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ovc4fI0oSUmG+cH4jayGIw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1SLZi5TbhU6jvhtEYv+WEw", callContext.id);
// Execute Action: OpenPolicy
model.flush();
return UBTConnect_UtilsController.default.openPolicy$Action(model.variables.localCacheControlPoliciesVar.cacheControl_PoliciesAttr.policyInformation_TermsAndConditionsAttr, "This policy couldn\'t be found.", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5HW5yGvgsky0HZq04XFXBw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fD3R4F2FLEiQzl+UVMFWgQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fD3R4F2FLEiQzl+UVMFWgQ", callContext.id);
throw ex;

});
};
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:RN8E45AE4UiDWP+0TpYMUw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.aqXGZDlGkkGYZDs0ae4y9g/ClientActions.RN8E45AE4UiDWP+0TpYMUw:JxFeZeqpmvWxkzY39_Iw7g", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BQGYJUc8_ke7xc_Oyn7y6Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LGYAQuoye0aJP1MvraXDfw", callContext.id);
// ShowFingerprintReader = App_PIN_BiometricEnabled and notisFromMenu
model.variables.showFingerprintReaderVar = (UBTConnectClientVariables.getApp_PIN_BiometricEnabled() && !(model.variables.isFromMenuIn));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0ckc30SeyEOyA19qXAB9wg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RN8E45AE4UiDWP+0TpYMUw", callContext.id);
}

};
Controller.prototype._onClick_ForgotPIN$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_ForgotPIN");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QXjc8c3c10WYjnHr7IggXg:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.aqXGZDlGkkGYZDs0ae4y9g/ClientActions.QXjc8c3c10WYjnHr7IggXg:fm6JG+Nz7G8MU5Cxp++8HA", "UBTConnect", "OnClick_ForgotPIN", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VEt857rYlEaC47lro50GAQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z72Owlp7f0aqGfig65dCtQ", callContext.id);
// Destination: /UBTConnect/Login
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Login", {
In_IsFromResetPIN: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QXjc8c3c10WYjnHr7IggXg", callContext.id);
}

};

Controller.prototype.cacheControl_PoliciesResult$Action = function (cacheControl_ResponseIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cacheControl_PoliciesResult$Action, callContext, cacheControl_ResponseIn);

};
Controller.prototype.event_Pincode_PinUnlockError$Action = function (errorMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_Pincode_PinUnlockError$Action, callContext, errorMessageIn);

};
Controller.prototype.event_Pincode_PinUnlockSuccess$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_Pincode_PinUnlockSuccess$Action, callContext);

};
Controller.prototype.onClick_PrivacyPolicy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_PrivacyPolicy$Action, callContext);

};
Controller.prototype.onClick_TermsAndCondition$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_TermsAndCondition$Action, callContext);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.onClick_ForgotPIN$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_ForgotPIN$Action, callContext);

};
Controller.prototype.unlock$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_PINRegister$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw:bpWaB45r1qkJPgqYmZEd1g", "UBTConnect", "App_PIN", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:aqXGZDlGkkGYZDs0ae4y9g:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.aqXGZDlGkkGYZDs0ae4y9g:7fhMVrIVQwFdn_e5TXet4Q", "UBTConnect", "Block_PINUnlock_ContentWrapper", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:aqXGZDlGkkGYZDs0ae4y9g", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_PIN/Block_PINUnlock_ContentWrapper On Initialize");
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

define("UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"brhqk33YvkOUhJ62coG1xA": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheControl_ResponseInLocal;
}
},
"iWoQbkOjEkK+ISbr0fpEIQ": {
getter: function (varBag, idService) {
return varBag.vars.value.formattedMessageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yNs2NlFhck2cH8RYuGZikA": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"u6UO_JOZgE+cDPjCzIgBUA": {
getter: function (varBag, idService) {
return varBag.model.variables.localCacheControlPoliciesVar;
}
},
"46wLThbZ50+xnR71l9fX3w": {
getter: function (varBag, idService) {
return varBag.model.variables.showFingerprintReaderVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"lU4CJENon0OR44f6GaOtcQ": {
getter: function (varBag, idService) {
return varBag.model.variables.useOverlayIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"egFti89yP0WpR5PVypg+3w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ForceVisibleIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"UDyFxyOMeU+go_hbmvT4yg": {
getter: function (varBag, idService) {
return varBag.model.variables.unlockTextIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wkebtKFtwkS3FRcaJbsL0g": {
getter: function (varBag, idService) {
return varBag.model.variables.showNeedHelpIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Gb8yCiWmmUuCZ8l7tveCjg": {
getter: function (varBag, idService) {
return varBag.model.variables.isFromMenuIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"c4NamqFP8Eibaaf37W8zsA": {
getter: function (varBag, idService) {
return varBag.model.variables.showForgotPINIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oOz1jCNOvEyBhdg3wwQKAA": {
getter: function (varBag, idService) {
return varBag.model.variables.showPolicyIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"J2JAf_AzD0SBZAzgyJ1T4A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_HeaderBar"));
})(varBag.model, idService);
}
},
"TvZESwXnXEekI88+cc+ZJg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_TitlePlaceholder"));
})(varBag.model, idService);
}
},
"CB+O8ao_1kWnn_Dehidpog": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_UnlockText"));
})(varBag.model, idService);
}
},
"cEExpNcOLkGZAxDa4Z4usw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_FingerprintIcon"));
})(varBag.model, idService);
}
},
"aT6pkl6ffEiZf7A_OVC+hw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_EraseButton"));
})(varBag.model, idService);
}
},
"3TEnD936KUWLB4sbhPgi6A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BottomKeyboard"));
})(varBag.model, idService);
}
},
"wj+MPNDQtE+zh0zt2pm5RQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"An4HF90WxkO_DXqdUWqWaQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"SiVRKDP+RUuqD_MKEigFaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"OPSpy+2IiEi8RXh8dOsPkA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"LTHnXrAtG06SnkINvg32uA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"6kf8KgWpokqYo5XBDxzUvQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
