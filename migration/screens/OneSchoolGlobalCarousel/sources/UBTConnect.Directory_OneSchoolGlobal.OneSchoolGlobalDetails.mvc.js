define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsRestoredFromCache", "isRestoredFromCacheVar", "IsRestoredFromCache", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_OneSchoolGlobalId", "in_OneSchoolGlobalIdIn", "In_OneSchoolGlobalId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_OneSchoolGlobalIdInDataFetchStatus", "_in_OneSchoolGlobalIdInDataFetchStatus", "_in_OneSchoolGlobalIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_OneSchoolGlobalId" in inputs) {
this.variables.in_OneSchoolGlobalIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_OneSchoolGlobalId, OS.DataTypes.DataTypes.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_OneSchoolGlobal.OneSchoolGlobalDetails");
});
define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$model", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_model, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Directory_OneSchoolGlobal.OneSchoolGlobalDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "OneSchoolGlobalDetails";
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
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "OneSchool Global",
In_TextOptions: model.getCachedValue(idService.getId("rL+rdbyAGU6FddEGT804Lg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Header_Right: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvc_view, {
inputs: {
IsRestoredFromCache: model.variables.isRestoredFromCacheVar,
In_OneSchoolGlobalId: model.variables.in_OneSchoolGlobalIdIn
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
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
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
}),
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_OneSchoolGlobalIdIn), asPrimitiveValue(model.variables.isRestoredFromCacheVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$debugger", "UBTConnect.Directory_OneSchoolGlobal.controller", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_Debugger, _flow_UBTConnect_Directory_OneSchoolGlobalController, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS) {
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:NEZGHoQPWUy3Akie8b2X+A:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.rrwjrufeGE6U9UQAzOfghg/ClientActions.NEZGHoQPWUy3Akie8b2X+A:N4wauO8IB6j6oWoY9htTxA", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QIZwuDLJmk+x7R_S81i7AA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0kKZrY9_NE+WelH7mWQjkA", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnInitialize", {
IsRestoredFromCache2: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCache2Out = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache2, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JDGGIB61x06I0PEM2A1u7w", callContext.id);
// IsRestoredFromCache = IsViewRestoredFromCache.IsRestoredFromCache2
model.variables.isRestoredFromCacheVar = isViewRestoredFromCacheJSResult.value.isRestoredFromCache2Out;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sx01fyctBEisLxTCFPQN5Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:NEZGHoQPWUy3Akie8b2X+A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache2",
attrName: "isRestoredFromCache2Out",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3J4QFNDNrkSZEJPtQ2GNEQ:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ:61tRPbddoF5C2aoWKab8HA", "UBTConnect", "Directory_OneSchoolGlobal", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rrwjrufeGE6U9UQAzOfghg:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.rrwjrufeGE6U9UQAzOfghg:2rvVOm7E9mb4hXjeo3J12w", "UBTConnect", "OneSchoolGlobalDetails", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rrwjrufeGE6U9UQAzOfghg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3J4QFNDNrkSZEJPtQ2GNEQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_OneSchoolGlobal/OneSchoolGlobalDetails On Initialize");
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
return _flow_UBTConnect_Directory_OneSchoolGlobalController.default.handleError(ex, this.callContext());
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
define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});

define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"0kKZrY9_NE+WelH7mWQjkA": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"s_TFC4t3BEOLMendMSetvQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isRestoredFromCacheVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vjfUqIwA60GIn2Uz22McZQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OneSchoolGlobalIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"u6M5R9CRm0mQgLYm_CZiNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"YoCmUHKaR0ybvezmNPu9MQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"xIw9Iodwc0yvx0MzNzqFkg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"KF3RSnWMRUiy2FSCMmtswQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"VTEvJMjwPUqcuZIAj5uJZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"bB3Q9Ro2iU6jgv2nsBYdmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
