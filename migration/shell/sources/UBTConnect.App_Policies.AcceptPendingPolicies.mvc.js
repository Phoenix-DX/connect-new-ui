define("UBTConnect.App_Policies.AcceptPendingPolicies.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnect.controller", "NavigationHandler.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "MemoryClientCache.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.controller$GetSVGMetric", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.controller$ShowCommunicationExceptionMessage", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "MemoryClientCache.controller$PutCacheableObject", "UBTConnect.referencesHealth$MemoryClientCache", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect_Utils.controller$Get_MemoryCacheKey_UniqueKey", "NavigationHandler.controller$AllowUpcomingNavigation"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnectController, NavigationHandlerController, UBT_AppManagerModel, UBT_AppManagerController, MemoryClientCacheController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("useOverlay", "useOverlayVar", "useOverlay", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("UserCountry", "userCountryVar", "UserCountry", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("MainContainer", "mainContainerVar", "MainContainer", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_Layouts_Layout_LoginFlow_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Policies.AcceptPendingPolicies");
});
define("UBTConnect.App_Policies.AcceptPendingPolicies.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "MemoryClientCache.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Policies.AcceptPendingPolicies.mvc$model", "UBTConnect.App_Policies.AcceptPendingPolicies.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.controller$GetSVGMetric", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.controller$ShowCommunicationExceptionMessage", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "MemoryClientCache.controller$PutCacheableObject", "UBTConnect.referencesHealth$MemoryClientCache", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect_Utils.controller$Get_MemoryCacheKey_UniqueKey", "NavigationHandler.controller$AllowUpcomingNavigation"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, NavigationHandlerController, UBT_AppManagerModel, UBT_AppManagerController, MemoryClientCacheController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, React, OSView, UBTConnect_App_Policies_AcceptPendingPolicies_mvc_model, UBTConnect_App_Policies_AcceptPendingPolicies_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "App_Policies.AcceptPendingPolicies";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/UBTConnect.App_Policies.AcceptPendingPolicies.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Policies_AcceptPendingPolicies_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Policies_AcceptPendingPolicies_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "AcceptPendingPolicies";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, {
inputs: {
In_HasOverlay: model.variables.useOverlayVar,
In_ExtendedClass: "ubt-policies"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onPathCalculated$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_LoginFlow OnPathCalculated");
controller.defineHeight$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onReady$Action: function (mainContainerIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_LoginFlow OnReady");
controller.layout_LoginFlowOnReady$Action(mainContainerIdIn, controller.callContext(eventHandlerContext));
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
placeholder_Header: PlaceholderContent.Empty,
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "ubt-policies--content",
visible: true,
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-policies--header",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("BQYjSkaArUWUMeRYea+EyA.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "3",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Welcome to",
In_TextOptions: model.getCachedValue(idService.getId("HVODaBRwREikVm8vGL8uMw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading3;
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
uuid: "4",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnect.ConnectLogoWhite.svg"),
style: "login-screen__connect-logo",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("e5ZjAwyT+0CLcnNjV3FQ9A.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.medium;
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
uuid: "6",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("U628knU2oESdsrZwP80ZSg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: "Connect and Directory"
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("KFa80sxMR06CyXrXUCK4mA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: "Terms and Conditions & Privacy Policy"
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})), React.createElement(UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_view, {
inputs: {
Country: model.variables.userCountryVar,
PolicyApplications: model.getCachedValue(idService.getId("DcWkRmu0m0ywTZ2Q1ZPG1A.PolicyApplications"), function () {
return function () {
var list = new OS.DataTypes.TextList();
list.pushAll([OS.BuiltinFunctions.textToIdentifier(UBTConnectModel.staticEntities.connect_Applications.connect), OS.BuiltinFunctions.textToIdentifier(UBTConnectModel.staticEntities.connect_Applications.directory), OS.BuiltinFunctions.textToIdentifier(UBTConnectModel.staticEntities.connect_Applications.orbit)]);
return list;
}();
}),
ContentBlockId: model.variables.mainContainerVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
acceptedAll$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Policies/Policy_Custom_AcceptPendingPolicies AcceptedAll");
return controller.acceptPendingPoliciesAcceptedAll$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
networkError$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Policies/Policy_Custom_AcceptPendingPolicies NetworkError");
controller.acceptPendingPoliciesNetworkError$Action(controller.callContext(eventHandlerContext));
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
uuid: "9",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigation$Action: function (backNavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
controller.backNavigationHandlerBackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "10",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
inputs: {
In_IgnorePolicy: true
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
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.mainContainerVar), asPrimitiveValue(model.variables.userCountryVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.App_Policies.AcceptPendingPolicies.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "MemoryClientCache.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Policies.AcceptPendingPolicies.mvc$debugger", "UBTConnect.App_Policies.controller", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.controller$GetSVGMetric", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.controller$ShowCommunicationExceptionMessage", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "MemoryClientCache.controller$PutCacheableObject", "UBTConnect.referencesHealth$MemoryClientCache", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect_Utils.controller$Get_MemoryCacheKey_UniqueKey", "NavigationHandler.controller$AllowUpcomingNavigation"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, NavigationHandlerController, UBT_AppManagerModel, UBT_AppManagerController, MemoryClientCacheController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Policies_AcceptPendingPolicies_mvc_Debugger, _flow_UBTConnect_App_PoliciesController) {
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
Controller.prototype._defineHeight$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DefineHeight");
callContext = controller.callContext(callContext);
var getSVGMetricVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getSVGMetricVar = getSVGMetricVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:yZ9LG4mpo0uHc_BlMzVuXg:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.G2vj+aiUrUCYsia8eCA8mg/ClientActions.yZ9LG4mpo0uHc_BlMzVuXg:LmmawVwJNr6mnWdmJrdR3g", "UBTConnect", "DefineHeight", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SzzaRDaFMUW+t8bZctNUBA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Myqo+cahsUW9geIr_v82Og", callContext.id) && ((model.variables.mainContainerVar) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AnI6q8Xyd0KgBNngj7A4+Q", callContext.id);
// Execute Action: GetSVGMetric
getSVGMetricVar.value = UBTConnectController.default.getSVGMetric$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6FPoi5pCpkCci3hdqEYf3w", callContext.id);
// Execute Action: JSUtils_SetStyleProperty
UBTJavaScriptUtilsController.default.jSUtils_SetStyleProperty$Action(model.variables.mainContainerVar, "--current-svg-height", (OS.BuiltinFunctions.decimalToText(getSVGMetricVar.value.heightWithoutCurveOut) + "px"), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1WxYEQKKDU+g5Ny0yY0vww", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X5mxLfyYF0+eiWdKCvNQwg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:yZ9LG4mpo0uHc_BlMzVuXg", callContext.id);
}

};
Controller.prototype._backNavigationHandlerBackNavigation$Action = function (backNavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BackNavigationHandlerBackNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Policies.AcceptPendingPolicies.BackNavigationHandlerBackNavigation$vars"))());
vars.value.backNavigationEventInLocal = backNavigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:sXQDhyTRvkm+fVS6gARBhA:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.G2vj+aiUrUCYsia8eCA8mg/ClientActions.sXQDhyTRvkm+fVS6gARBhA:yJ3jt6gVLYRy90YhoRaJ+Q", "UBTConnect", "BackNavigationHandlerBackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h8bjjzwnCkawoHFHWuKbsQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RE_lobSkHkuSOH5ssI9j3g", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MRPcBfCEj0yY74h4PhEIgA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sXQDhyTRvkm+fVS6gARBhA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Policies.AcceptPendingPolicies.BackNavigationHandlerBackNavigation$vars", [{
name: "BackNavigationEvent",
attrName: "backNavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._acceptPendingPoliciesNetworkError$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AcceptPendingPoliciesNetworkError");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_2IN4bbt60Ox8FBt_rWTqQ:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.G2vj+aiUrUCYsia8eCA8mg/ClientActions._2IN4bbt60Ox8FBt_rWTqQ:9lW+hQP9u3+O3G+AE6LJtw", "UBTConnect", "AcceptPendingPoliciesNetworkError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0Fzxhm0aJEm1fzZRLCp8Iw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pvuFP7wzd02Kf9YMxn3JMw", callContext.id);
// Execute Action: ShowCommunicationExceptionMessage
UBTConnectController.default.showCommunicationExceptionMessage$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UWaTohuIg0Go7giO0utzRg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_2IN4bbt60Ox8FBt_rWTqQ", callContext.id);
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
var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rS+Z5G8HZkiV_HTvZyFlKQ:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.G2vj+aiUrUCYsia8eCA8mg/ClientActions.rS+Z5G8HZkiV_HTvZyFlKQ:1pn0MIf3UnmF6PVmzrjmIg", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aBmi9b1lKEy+zFiNoyIh2g", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5EUpb9kpq0CqtgsLUUaxiA", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FBm2A6fuK0+Vam7RnFsapg", callContext.id);
// UserCountry = AppManager_GetCachedUserInfo.UserInformation.CountryCode
model.variables.userCountryVar = appManager_GetCachedUserInfoVar.value.userInformationOut.countryCodeAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vlKTJ0d3W0+wDjEyx0fgQg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rS+Z5G8HZkiV_HTvZyFlKQ", callContext.id);
}

};
Controller.prototype._acceptPendingPoliciesAcceptedAll$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AcceptPendingPoliciesAcceptedAll");
callContext = controller.callContext(callContext);
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
var get_MemoryCacheKey_UniqueKeyVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
varBag.get_MemoryCacheKey_UniqueKeyVar = get_MemoryCacheKey_UniqueKeyVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CZtT8dufvEq_iAC34FmSYA:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.G2vj+aiUrUCYsia8eCA8mg/ClientActions.CZtT8dufvEq_iAC34FmSYA:mZTzlGKCquFA_kDqdzg4Gw", "UBTConnect", "AcceptPendingPoliciesAcceptedAll", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:72vNXw6Zi0WoZQc5nGbBFQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pRViChtv7EWCGFV+lpUNAQ", callContext.id);
// Execute Action: Cache_UserInfo_Get
model.flush();
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DvADwSxnQkiBYTj2+4fNpQ", callContext.id);
// Cache_UserInfo_Get.UserInformation.HasPoliciesToAccept = False
cache_UserInfo_GetVar.value.userInformationOut.hasPoliciesToAcceptAttr = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wZe5qkcBqUCkS+mZX9TGzg", callContext.id);
// Execute Action: Get_MemoryCacheKey_UniqueKey
get_MemoryCacheKey_UniqueKeyVar.value = UBTConnect_UtilsController.default.get_MemoryCacheKey_UniqueKey$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WCncANOO8U2HrP0E0O2Sug", callContext.id);
// Execute Action: PutCacheableObject
MemoryClientCacheController.default.putCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnectModel.staticEntities.connect_CacheType.directoryUser), get_MemoryCacheKey_UniqueKeyVar.value.keyOut, OS.BuiltinFunctions.toObject(cache_UserInfo_GetVar.value.userInformationOut), 7200, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ih++Ijf+UUW_dB1vV8NUYQ", callContext.id);
// App_Policies_HasPolicyToAccept = False
UBTConnectClientVariables.setApp_Policies_HasPolicyToAccept(false);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nM93JCCF00Cd1OFGHbuBZQ", callContext.id);
// Execute Action: ReplaceOnUpcomingNavigation
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4TVi0YqRQUKsL8_FXX5rtg", callContext.id);
// Execute Action: AllowUpcomingNavigation
NavigationHandlerController.default.allowUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KxXqafNK906jCQRMwCMphg", callContext.id);
// Destination: (PreviousScreen)
return OS.Flow.returnAsync(OS.Navigation.navigateBack(null, callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CZtT8dufvEq_iAC34FmSYA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CZtT8dufvEq_iAC34FmSYA", callContext.id);
throw ex;

});
};
Controller.prototype._layout_LoginFlowOnReady$Action = function (mainContainerIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Layout_LoginFlowOnReady");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Policies.AcceptPendingPolicies.Layout_LoginFlowOnReady$vars"))());
vars.value.mainContainerIdInLocal = mainContainerIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:el_n9DO6NUamBGJ7KqNlog:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.G2vj+aiUrUCYsia8eCA8mg/ClientActions.el_n9DO6NUamBGJ7KqNlog:SAhV9paApmPykTqvJm0auw", "UBTConnect", "Layout_LoginFlowOnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uJSwOS5FNUCIB2NW6dCcmA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J8yzhUVy0kqtFwxLdPTLow", callContext.id);
// MainContainer = MainContainerId
model.variables.mainContainerVar = vars.value.mainContainerIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LO9xhnUvG020Cwv+iHVO7Q", callContext.id);
// Execute Action: DefineHeight
controller._defineHeight$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZponmOqeNEaG+q9r_0QAAg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:el_n9DO6NUamBGJ7KqNlog", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Policies.AcceptPendingPolicies.Layout_LoginFlowOnReady$vars", [{
name: "MainContainerId",
attrName: "mainContainerIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.defineHeight$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._defineHeight$Action, callContext);

};
Controller.prototype.backNavigationHandlerBackNavigation$Action = function (backNavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._backNavigationHandlerBackNavigation$Action, callContext, backNavigationEventIn);

};
Controller.prototype.acceptPendingPoliciesNetworkError$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._acceptPendingPoliciesNetworkError$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.acceptPendingPoliciesAcceptedAll$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._acceptPendingPoliciesAcceptedAll$Action, callContext);

};
Controller.prototype.layout_LoginFlowOnReady$Action = function (mainContainerIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._layout_LoginFlowOnReady$Action, callContext, mainContainerIdIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:I4M8DfSfs021oL6trUlQgw:/NRWebFlows.I4M8DfSfs021oL6trUlQgw:hPDi7KzhB_mQ0CGAgMZG7A", "UBTConnect", "App_Policies", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:G2vj+aiUrUCYsia8eCA8mg:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.G2vj+aiUrUCYsia8eCA8mg:_DnAT7ex07p2nhAgIbTEpg", "UBTConnect", "AcceptPendingPolicies", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:G2vj+aiUrUCYsia8eCA8mg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:I4M8DfSfs021oL6trUlQgw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_Policies/AcceptPendingPolicies On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_App_PoliciesController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Policies.AcceptPendingPolicies.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"AnI6q8Xyd0KgBNngj7A4+Q": {
getter: function (varBag, idService) {
return varBag.getSVGMetricVar.value;
}
},
"MI048SdnH0GnF+d11MJSEg": {
getter: function (varBag, idService) {
return varBag.vars.value.backNavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"5EUpb9kpq0CqtgsLUUaxiA": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"pRViChtv7EWCGFV+lpUNAQ": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"wZe5qkcBqUCkS+mZX9TGzg": {
getter: function (varBag, idService) {
return varBag.get_MemoryCacheKey_UniqueKeyVar.value;
}
},
"u30xMHcmcEe+zFDmNFF5ig": {
getter: function (varBag, idService) {
return varBag.vars.value.mainContainerIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iK_MM+w1gUCCt0xBKzBavQ": {
getter: function (varBag, idService) {
return varBag.model.variables.useOverlayVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"azTHH014sU+6h_0LVFb4PQ": {
getter: function (varBag, idService) {
return varBag.model.variables.userCountryVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AGPwYc_waUOK8fXDH0khNw": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"n60aX_A_1k2qIteysbwCsQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header"));
})(varBag.model, idService);
}
},
"g64CkVT0VUGk2qdCUdFjsQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"xPXct1BmGU+Wki+h9kHgdA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"DmkBld7FrEWIpgvrixxcUA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"o9S4TIeGJUeHwUy94ZGS8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Mnl9CAoFo0e8COAFpJNxNg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
