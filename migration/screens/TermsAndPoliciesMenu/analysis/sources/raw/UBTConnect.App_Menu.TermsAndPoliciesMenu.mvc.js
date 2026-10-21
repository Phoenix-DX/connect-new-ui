define("UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnect.App_Menu.Menu_List.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc$model", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.model$CacheControl_PoliciesBooleanRecord", "UBTConnect.model$UI_MenuSectionRec", "UBTConnect.model$UI_ListMenuOptionRec", "UBTConnect_Utils.model$PolicyInformationRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$OpenPolicy", "UBTConnect_Utils.model$CacheControl_PoliciesRec"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnect_App_Menu_Menu_List_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_Utils_CacheControl_CacheControl_Policies_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MenuOptionList", "menuOptionListVar", "MenuOptionList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_ListMenuOptionList());
}, false, UBTConnectModel.UI_ListMenuOptionList), 
this.attr("TermsAndConditionsName", "termsAndConditionsNameVar", "TermsAndConditionsName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Terms and Conditions";
}, false), 
this.attr("PrivacyPolicyName", "privacyPolicyNameVar", "PrivacyPolicyName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Privacy Policy";
}, false), 
this.attr("LocalCacheControl_Policies", "localCacheControl_PoliciesVar", "LocalCacheControl_Policies", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CacheControl_PoliciesBooleanRecord());
}, false, UBTConnectModel.CacheControl_PoliciesBooleanRecord)
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
Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnect_App_Menu_Menu_List_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CacheControl_CacheControl_Policies_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Menu.TermsAndPoliciesMenu");
});
define("UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc$model", "UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect.App_Menu.Menu_List.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc$view", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.model$CacheControl_PoliciesBooleanRecord", "UBTConnect.model$UI_MenuSectionRec", "UBTConnect.model$UI_ListMenuOptionRec", "UBTConnect_Utils.model$PolicyInformationRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$OpenPolicy", "UBTConnect_Utils.model$CacheControl_PoliciesRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsModel, UBTConnect_UtilsController, React, OSView, UBTConnect_App_Menu_TermsAndPoliciesMenu_mvc_model, UBTConnect_App_Menu_TermsAndPoliciesMenu_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_App_Menu_Menu_List_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_Policies_mvc_view) {
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
        View.displayName = "App_Menu.TermsAndPoliciesMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_App_Menu_Menu_List_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_Policies_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Menu_TermsAndPoliciesMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Menu_TermsAndPoliciesMenu_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "TermsAndPoliciesMenu";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, {
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
placeholders: {
placeholder_Header_Title: new PlaceholderContent(function () {
return ["Terms & Policies"];
}),
placeholder_Header_Right: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: !(model.variables.localCacheControl_PoliciesVar.isFetchedAttr)
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
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Menu_Menu_List_mvc_view, {
inputs: {
In_MenuSection: model.getCachedValue(idService.getId("8QHpoJvVLUW_wJiFefY4Ow.In_MenuSection"), function () {
return function () {
var rec = new UBTConnectModel.UI_MenuSectionRec();
rec.hasSeparatorAttr = false;
rec.menuOptionsAttr = model.variables.menuOptionListVar;
return rec;
}();
}, function () {
return model.variables.menuOptionListVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick_MenuOption$Action: function (uI_ListMenuOptionIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu/Menu_List OnClick_MenuOption");
return controller.onClick_MenuOption$Action(uI_ListMenuOptionIn, controller.callContext(eventHandlerContext));
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.menuOptionListVar)]
})];
}),
bottom: PlaceholderContent.Empty,
placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.menuOptionListVar), asPrimitiveValue(model.variables.localCacheControl_PoliciesVar.isFetchedAttr)]
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc$debugger", "UBTConnect.App_Menu.controller", "UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.model$CacheControl_PoliciesBooleanRecord", "UBTConnect.model$UI_MenuSectionRec", "UBTConnect.model$UI_ListMenuOptionRec", "UBTConnect_Utils.model$PolicyInformationRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$OpenPolicy", "UBTConnect_Utils.model$CacheControl_PoliciesRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Menu_TermsAndPoliciesMenu_mvc_Debugger, _flow_UBTConnect_App_MenuController, UBTConnect_App_Menu_TermsAndPoliciesMenu_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS) {
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
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:4I6bh6DXkUKJKVi74_tbLg:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.lcN66S8kJkanIPcUE4m_uw/ClientActions.4I6bh6DXkUKJKVi74_tbLg:q2AG5pzm3Zz5ji4tmx8Kdg", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rEbekl1My0mxU_elhVPdkQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YPAeAjapiUauWRuICNq+LQ", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_App_Menu_TermsAndPoliciesMenu_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnInitialize", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.App_Menu.TermsAndPoliciesMenu.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if IsViewRestoredFromCache IsRestoredFromCache
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rZw+iZ4mlUi7qGObC7o3ZQ", callContext.id) && isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lK_I_sft+UG+eO15f02T+Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N7wIv8MJKkKllgGBT1HM+Q", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.menuOptionListVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4uhVDUyW2EyrjErGSolakw", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.menuOptionListVar, function () {
var rec = new UBTConnectModel.UI_ListMenuOptionRec();
rec.iconIdAttr = UBTConnectModel.staticEntities.uBT_Icons2.contacts;
rec.labelAttr = model.variables.termsAndConditionsNameVar;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5lzvlZH5qEy7Tf_lGqGD4Q", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(model.variables.menuOptionListVar, function () {
var rec = new UBTConnectModel.UI_ListMenuOptionRec();
rec.iconIdAttr = UBTConnectModel.staticEntities.uBT_Icons2.bookClosed;
rec.labelAttr = model.variables.privacyPolicyNameVar;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JiOoQq8zPE2aHupP9AjbRQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:4I6bh6DXkUKJKVi74_tbLg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Menu.TermsAndPoliciesMenu.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onClick_MenuOption$Action = function (uI_ListMenuOptionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_MenuOption");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Menu.TermsAndPoliciesMenu.OnClick_MenuOption$vars"))());
vars.value.uI_ListMenuOptionInLocal = uI_ListMenuOptionIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JoNB1CAiHkGcE+sOJ5GBVg:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.lcN66S8kJkanIPcUE4m_uw/ClientActions.JoNB1CAiHkGcE+sOJ5GBVg:9uKh_zMqaiWAxODWdY7HfA", "UBTConnect", "OnClick_MenuOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qH_lYI02ak+a5YimNuYSxA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I78W8sPKYU+jLG8fDRhLUA", callContext.id) && (vars.value.uI_ListMenuOptionInLocal.labelAttr === model.variables.termsAndConditionsNameVar))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LEvFAHb7SU6fnLzcuv6EYQ", callContext.id);
// Execute Action: OpenPolicy
model.flush();
return UBTConnect_UtilsController.default.openPolicy$Action(model.variables.localCacheControl_PoliciesVar.cacheControl_PoliciesAttr.policyInformation_TermsAndConditionsAttr, "This policy couldn\'t be found.", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FTAN3tejxUSzHjRZyROysg", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.uI_ListMenuOptionInLocal.labelAttr === model.variables.privacyPolicyNameVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1NCcCrUd+0mLXXFE3Zcrsw", callContext.id);
// Execute Action: OpenPolicy2
model.flush();
return UBTConnect_UtilsController.default.openPolicy$Action(model.variables.localCacheControl_PoliciesVar.cacheControl_PoliciesAttr.policyInformation_PrivacyPolicyAttr, "This policy couldn\'t be found.", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:75HF4PHAHEW9YqvOvgBGHQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ffxpXqwuhkOUBssAjaP7UA", callContext.id);
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JoNB1CAiHkGcE+sOJ5GBVg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JoNB1CAiHkGcE+sOJ5GBVg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Menu.TermsAndPoliciesMenu.OnClick_MenuOption$vars", [{
name: "UI_ListMenuOption",
attrName: "uI_ListMenuOptionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.UI_ListMenuOptionRec();
},
complexType: UBTConnectModel.UI_ListMenuOptionRec
}]);
Controller.prototype._cacheControl_PoliciesResult$Action = function (cacheControl_ResponseIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CacheControl_PoliciesResult");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Menu.TermsAndPoliciesMenu.CacheControl_PoliciesResult$vars"))());
vars.value.cacheControl_ResponseInLocal = cacheControl_ResponseIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:eV4X3XZix0msV_Kd9fSW5w:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.lcN66S8kJkanIPcUE4m_uw/ClientActions.eV4X3XZix0msV_Kd9fSW5w:EeaBYllkzC2P5e91YTBgrA", "UBTConnect", "CacheControl_PoliciesResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lizIzNjCYEq9tWjkMXFa5A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XedODj39REO07ltG1jffvg", callContext.id);
// LocalCacheControl_Policies.CacheControl_Policies = CacheControl_Response
model.variables.localCacheControl_PoliciesVar.cacheControl_PoliciesAttr = vars.value.cacheControl_ResponseInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XedODj39REO07ltG1jffvg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalCacheControl_Policies.isFetched = True
model.variables.localCacheControl_PoliciesVar.isFetchedAttr = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:unBgJPGW4E2w8AGtGaEZeA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eV4X3XZix0msV_Kd9fSW5w", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Menu.TermsAndPoliciesMenu.CacheControl_PoliciesResult$vars", [{
name: "CacheControl_Response",
attrName: "cacheControl_ResponseInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.CacheControl_PoliciesRec();
},
complexType: UBTConnect_UtilsModel.CacheControl_PoliciesRec
}]);

Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.onClick_MenuOption$Action = function (uI_ListMenuOptionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_MenuOption$Action, callContext, uI_ListMenuOptionIn);

};
Controller.prototype.cacheControl_PoliciesResult$Action = function (cacheControl_ResponseIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cacheControl_PoliciesResult$Action, callContext, cacheControl_ResponseIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MYece3hSIUew7QsUSQXJdw:/NRWebFlows.MYece3hSIUew7QsUSQXJdw:rb6xGIB+BVZXljBZL+G3Tw", "UBTConnect", "App_Menu", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lcN66S8kJkanIPcUE4m_uw:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.lcN66S8kJkanIPcUE4m_uw:RxprU6XLcKpJg7zC4NNdWA", "UBTConnect", "TermsAndPoliciesMenu", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lcN66S8kJkanIPcUE4m_uw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MYece3hSIUew7QsUSQXJdw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_Menu/TermsAndPoliciesMenu On Initialize");
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
return _flow_UBTConnect_App_MenuController.default.handleError(ex, this.callContext());
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
define("UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});

define("UBTConnect.App_Menu.TermsAndPoliciesMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"YPAeAjapiUauWRuICNq+LQ": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"DqvnmqK2tUCXFGqTtMz2Yg": {
getter: function (varBag, idService) {
return varBag.vars.value.uI_ListMenuOptionInLocal;
}
},
"gwdkNbJyhkG5fcn3C0+b5w": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheControl_ResponseInLocal;
}
},
"FsgOBeO09km86r43RaVivw": {
getter: function (varBag, idService) {
return varBag.model.variables.menuOptionListVar;
}
},
"yeX57NDA00iQ_Vus9JeZEQ": {
getter: function (varBag, idService) {
return varBag.model.variables.termsAndConditionsNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pMzZ8D6NNEW4ttdP1rTMAQ": {
getter: function (varBag, idService) {
return varBag.model.variables.privacyPolicyNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7U1IzXJGFE6p9pUzdmRzFA": {
getter: function (varBag, idService) {
return varBag.model.variables.localCacheControl_PoliciesVar;
}
},
"8bD7gWyhF0eKQw1qzUeufA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"TIAKWv2Xm02NjOgWq_h+YQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"3CH9PQlicEqUvhudHT+Khw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"7kE8p+em_kCKzV8coJWzhA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"A0SeCXiFRkyqrSD8gQTdGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"niHyeLsNdEGqsw36cZFnCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"YYvRVU4_JEWVA37seaUv4Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
