define("UBTConnect.Legacy_AssembleFlow.AssembleEvents.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc$model", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel, Connect2_Assemble_MUI_Assemble_Assemble_FilterSheet_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UseNewFilterSheet", "useNewFilterSheetVar", "UseNewFilterSheet", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("AssembleFilterBottomSheet_Id", "assembleFilterBottomSheet_IdVar", "AssembleFilterBottomSheet_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SubdivisionId", "subdivisionIdIn", "SubdivisionId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_subdivisionIdInDataFetchStatus", "_subdivisionIdInDataFetchStatus", "_subdivisionIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowBackNavigation", "showBackNavigationIn", "ShowBackNavigation", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showBackNavigationInDataFetchStatus", "_showBackNavigationInDataFetchStatus", "_showBackNavigationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsUserSubdivision", "isUserSubdivisionIn", "IsUserSubdivision", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_isUserSubdivisionInDataFetchStatus", "_isUserSubdivisionInDataFetchStatus", "_isUserSubdivisionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets || Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel.hasValidationWidgets) || Connect2_Assemble_MUI_Assemble_Assemble_FilterSheet_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("SubdivisionId" in inputs) {
this.variables.subdivisionIdIn = OS.DataConversion.ServerDataConverter.from(inputs.SubdivisionId, OS.DataTypes.DataTypes.LongInteger);
}

if("ShowBackNavigation" in inputs) {
this.variables.showBackNavigationIn = OS.DataConversion.ServerDataConverter.from(inputs.ShowBackNavigation, OS.DataTypes.DataTypes.Boolean);
}

if("IsUserSubdivision" in inputs) {
this.variables.isUserSubdivisionIn = OS.DataConversion.ServerDataConverter.from(inputs.IsUserSubdivision, OS.DataTypes.DataTypes.Boolean);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_AssembleFlow.AssembleEvents");
});
define("UBTConnect.Legacy_AssembleFlow.AssembleEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_AssembleFlow.AssembleEvents.mvc$model", "UBTConnect.Legacy_AssembleFlow.AssembleEvents.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc$view", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnect_Legacy_AssembleFlow_AssembleEvents_mvc_model, UBTConnect_Legacy_AssembleFlow_AssembleEvents_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, OSWidgets, Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, Connect2_Assemble_MUI_Assemble_Assemble_FilterSheet_mvc_view) {
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
        View.displayName = "Legacy_AssembleFlow.AssembleEvents";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, Connect2_Assemble_MUI_Assemble_Assemble_FilterSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_AssembleFlow_AssembleEvents_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_AssembleFlow_AssembleEvents_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "AssembleEvents";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
_dependencies: []
}), React.createElement(Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvc_view, {
inputs: {
SubdivisionId: model.variables.subdivisionIdIn,
IsUserSubdivision: model.variables.isUserSubdivisionIn,
ShowBackNavigation: model.variables.showBackNavigationIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_AssembleLocationFilters$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_AssembleEvents NavigateTo_AssembleLocationFilters");
controller.handler_NavigateTo_AssembleLocationFilters$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_AssembleDetail$Action: function (assembleParentEventIdIn, assembleEventIdIn, startIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_AssembleEvents NavigateTo_AssembleDetail");
controller.handler_NavigateTo_AssembleDetail$Action(assembleParentEventIdIn, assembleEventIdIn, startIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_MyCalendarAssemble$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_AssembleEvents NavigateTo_MyCalendarAssemble");
controller.handler_NavigateTo_MyCalendar$Action(controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
menu: PlaceholderContent.Empty,
bottomBar: new PlaceholderContent(function () {
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
commonUI_Elements: PlaceholderContent.Empty
},
_dependencies: []
}), React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
inputs: {
Title: "Test",
CloseOnClickOutsite: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
initialized$Action: function (idIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet Initialized");
controller.handler_AssembleFilterSheetInitialized$Action(idIn, controller.callContext(eventHandlerContext));
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
name: "BottomSheet_AssembleFilter",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(Connect2_Assemble_MUI_Assemble_Assemble_FilterSheet_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
cancel$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterSheet Cancel");
controller.handler_AssembleFilterSheetOnCancel$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateToSubdivision$Action: function (subdivisionIdIn, isUserSubdivisionIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterSheet NavigateToSubdivision");
controller.handler_AssembleFilterSheetOnSelectSubdivision$Action(subdivisionIdIn, isUserSubdivisionIn, controller.callContext(eventHandlerContext));
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
name: "Assemble_FilterSheet_Instance",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
footer: PlaceholderContent.Empty
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Legacy_AssembleFlow.AssembleEvents.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_AssembleFlow.AssembleEvents.mvc$debugger", "UBTConnect.Legacy_AssembleFlow.controller", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_AssembleFlow_AssembleEvents_mvc_Debugger, _flow_UBTConnect_Legacy_AssembleFlowController) {
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
Controller.prototype._handler_NavigateTo_AssembleLocationFilters$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_AssembleLocationFilters");
callContext = controller.callContext(callContext);
var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bottomSheetOpenVar = bottomSheetOpenVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OGyoAHol8ECzAJ2g9ciaAg:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.C_k3zmFcVUK53KzFV7d0dA/ClientActions.OGyoAHol8ECzAJ2g9ciaAg:D0klX87M6fs4dSPpXs6EMQ", "UBTConnect", "Handler_NavigateTo_AssembleLocationFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KwiLwoQ0Z0ypY8O4GDkMcg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IG1NxM4fOECY_xafYBvveA", callContext.id) && model.variables.useNewFilterSheetVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gsC6DuCceEWTTMp7Zu8Nhg", callContext.id);
// Execute Action: BottomSheetOpen
bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.assembleFilterBottomSheet_IdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OCHI3MFiz0OyivUWiTFU6w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:if7E9akM50eDS+GRUUKCCg", callContext.id);
// Destination: /UBTConnect/Assemble_BrowseByCountry
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Assemble_BrowseByCountry", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OGyoAHol8ECzAJ2g9ciaAg", callContext.id);
}

};
Controller.prototype._handler_AssembleFilterSheetOnCancel$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_AssembleFilterSheetOnCancel");
callContext = controller.callContext(callContext);
var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bottomSheetCloseVar = bottomSheetCloseVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:YuywLVJ4q0ul9Glhcg6eUg:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.C_k3zmFcVUK53KzFV7d0dA/ClientActions.YuywLVJ4q0ul9Glhcg6eUg:v7QxIaPe+Diy5Ax6krMg3g", "UBTConnect", "Handler_AssembleFilterSheetOnCancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zHU_686VN0G9OevACPEBew", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sNFt2C86YEehZt0g3NJNGw", callContext.id);
// Execute Action: BottomSheetClose
bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.assembleFilterBottomSheet_IdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+oE0YyuzPk+2OOcsgaxFiQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YuywLVJ4q0ul9Glhcg6eUg", callContext.id);
}

};
Controller.prototype._handler_NavigateTo_MyCalendar$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_MyCalendar");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JICgOymfckitvfJj0FzHEA:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.C_k3zmFcVUK53KzFV7d0dA/ClientActions.JICgOymfckitvfJj0FzHEA:bpHp_YAeD2JLxDovlMCXsQ", "UBTConnect", "Handler_NavigateTo_MyCalendar", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ES4OZIHwMUSSbsac5MxyTA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lxxHsNRYckCRl7G2KKBAkA", callContext.id);
// Destination: /UBTConnect/MyEntertaining
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/MyEntertaining", {
MyCalendarEventSourceId: OS.DataConversion.ServerDataConverter.asString(UBTConnectModel.staticEntities.type_MyCalendarEventSource.assemble, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JICgOymfckitvfJj0FzHEA", callContext.id);
}

};
Controller.prototype._handler_AssembleFilterSheetInitialized$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_AssembleFilterSheetInitialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleEvents.Handler_AssembleFilterSheetInitialized$vars"))());
vars.value.idInLocal = idIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+4gyQ0o2kE2yxoijOpI7Og:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.C_k3zmFcVUK53KzFV7d0dA/ClientActions.+4gyQ0o2kE2yxoijOpI7Og:cbp4RJSiCANHeXCGxeF0jw", "UBTConnect", "Handler_AssembleFilterSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:evXOdk2r_UyCAJx2iOqnBQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FRseMDFPj0mdikZrC+Pn0g", callContext.id);
// AssembleFilterBottomSheet_Id = Id
model.variables.assembleFilterBottomSheet_IdVar = vars.value.idInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ajqZQ0sKoUqVps3ddBgqGg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+4gyQ0o2kE2yxoijOpI7Og", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleEvents.Handler_AssembleFilterSheetInitialized$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_AssembleFilterSheetOnSelectSubdivision$Action = function (newSubdivisionIdIn, newIsUserSubdivisionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_AssembleFilterSheetOnSelectSubdivision");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleEvents.Handler_AssembleFilterSheetOnSelectSubdivision$vars"))());
vars.value.newSubdivisionIdInLocal = newSubdivisionIdIn;
vars.value.newIsUserSubdivisionInLocal = newIsUserSubdivisionIn;
var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.bottomSheetCloseVar = bottomSheetCloseVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WlnRV2X2tUWryKlkTr60Cw:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.C_k3zmFcVUK53KzFV7d0dA/ClientActions.WlnRV2X2tUWryKlkTr60Cw:eaDD4m35zUXMT6exYtt7Rg", "UBTConnect", "Handler_AssembleFilterSheetOnSelectSubdivision", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:do+b0VZeXU+Qtdt7K8WpJg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RdAio4mxIUicNaR0mkwXpg", callContext.id);
// SubdivisionId = NewSubdivisionId
model.variables.subdivisionIdIn = vars.value.newSubdivisionIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RdAio4mxIUicNaR0mkwXpg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsUserSubdivision = NewIsUserSubdivision
model.variables.isUserSubdivisionIn = vars.value.newIsUserSubdivisionInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fQiTkKpHc0CDpybZvdDBig", callContext.id);
// Execute Action: BottomSheetClose
bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.assembleFilterBottomSheet_IdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bnUB5RlJXUOO0IFI7oYFvQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WlnRV2X2tUWryKlkTr60Cw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleEvents.Handler_AssembleFilterSheetOnSelectSubdivision$vars", [{
name: "NewSubdivisionId",
attrName: "newSubdivisionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "NewIsUserSubdivision",
attrName: "newIsUserSubdivisionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_NavigateTo_AssembleDetail$Action = function (assembleParentEventIdIn, assembleEventIdIn, startIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_AssembleDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleEvents.Handler_NavigateTo_AssembleDetail$vars"))());
vars.value.assembleParentEventIdInLocal = assembleParentEventIdIn;
vars.value.assembleEventIdInLocal = assembleEventIdIn;
vars.value.startInLocal = startIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8tzehcE68k2uo6oKSyJ8ZQ:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.C_k3zmFcVUK53KzFV7d0dA/ClientActions.8tzehcE68k2uo6oKSyJ8ZQ:jwwjrLUMsu9XD1L0JpzJ5A", "UBTConnect", "Handler_NavigateTo_AssembleDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0lHXPBNySkKh19NEE7QQOA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W8Po7t8VeU2LFbJWu_nmCA", callContext.id);
// Destination: /UBTConnect/AssembleDetail
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/AssembleDetail", {
Start: OS.DataConversion.ServerDataConverter.asString(vars.value.startInLocal, OS.DataTypes.DataTypes.DateTime),
EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.assembleEventIdInLocal, OS.DataTypes.DataTypes.Text),
SeriesId: OS.DataConversion.ServerDataConverter.asString(vars.value.assembleParentEventIdInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8tzehcE68k2uo6oKSyJ8ZQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleEvents.Handler_NavigateTo_AssembleDetail$vars", [{
name: "AssembleParentEventId",
attrName: "assembleParentEventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AssembleEventId",
attrName: "assembleEventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Start",
attrName: "startInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);

Controller.prototype.handler_NavigateTo_AssembleLocationFilters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_AssembleLocationFilters$Action, callContext);

};
Controller.prototype.handler_AssembleFilterSheetOnCancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_AssembleFilterSheetOnCancel$Action, callContext);

};
Controller.prototype.handler_NavigateTo_MyCalendar$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_MyCalendar$Action, callContext);

};
Controller.prototype.handler_AssembleFilterSheetInitialized$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_AssembleFilterSheetInitialized$Action, callContext, idIn);

};
Controller.prototype.handler_AssembleFilterSheetOnSelectSubdivision$Action = function (newSubdivisionIdIn, newIsUserSubdivisionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_AssembleFilterSheetOnSelectSubdivision$Action, callContext, newSubdivisionIdIn, newIsUserSubdivisionIn);

};
Controller.prototype.handler_NavigateTo_AssembleDetail$Action = function (assembleParentEventIdIn, assembleEventIdIn, startIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_AssembleDetail$Action, callContext, assembleParentEventIdIn, assembleEventIdIn, startIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:oopA8UC9ZEGRmQoiLfCXdg:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg:dN024IGxNurNTd_3Az0hHQ", "UBTConnect", "Legacy_AssembleFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:C_k3zmFcVUK53KzFV7d0dA:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.C_k3zmFcVUK53KzFV7d0dA:enIjTroq2c1BWK7yts_oRw", "UBTConnect", "AssembleEvents", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:C_k3zmFcVUK53KzFV7d0dA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:oopA8UC9ZEGRmQoiLfCXdg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_Legacy_AssembleFlowController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Legacy_AssembleFlow.AssembleEvents.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"gsC6DuCceEWTTMp7Zu8Nhg": {
getter: function (varBag, idService) {
return varBag.bottomSheetOpenVar.value;
}
},
"sNFt2C86YEehZt0g3NJNGw": {
getter: function (varBag, idService) {
return varBag.bottomSheetCloseVar.value;
}
},
"auE0WWMyLEuSyfAlxgVgWA": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"CQ8Gamtxh02JjALIoEw3LA": {
getter: function (varBag, idService) {
return varBag.vars.value.newSubdivisionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"NQfQwwoFPUWk_pcfrSqsNw": {
getter: function (varBag, idService) {
return varBag.vars.value.newIsUserSubdivisionInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"fQiTkKpHc0CDpybZvdDBig": {
getter: function (varBag, idService) {
return varBag.bottomSheetCloseVar.value;
}
},
"3yyOEcSshUGhpnA2ZfvCsQ": {
getter: function (varBag, idService) {
return varBag.vars.value.assembleParentEventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"l7IlETCa5U20RxScB0lzCg": {
getter: function (varBag, idService) {
return varBag.vars.value.assembleEventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ddkvEucXE0SxltX7hVySuw": {
getter: function (varBag, idService) {
return varBag.vars.value.startInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"aFqUHv2rG0yy8s9L6SH0RQ": {
getter: function (varBag, idService) {
return varBag.model.variables.useNewFilterSheetVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0cvRgoVP1EOMIUYfB6MsdQ": {
getter: function (varBag, idService) {
return varBag.model.variables.assembleFilterBottomSheet_IdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EMuqlIlZB0qO9i4JmR08xg": {
getter: function (varBag, idService) {
return varBag.model.variables.subdivisionIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"TWDqyOicQ0eCK0rm933aQA": {
getter: function (varBag, idService) {
return varBag.model.variables.showBackNavigationIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"T9KuvxCO2U6fHZ2_4C_YUg": {
getter: function (varBag, idService) {
return varBag.model.variables.isUserSubdivisionIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"_HDpxDjEfUSEqeXTUqw8wQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"nzAduu0LREOunwozKjnS9A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"blgdp2bFg0Sx2cNFJ9EZLw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"CvHK_+ulH0qRvxiT9YDwgA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomSheet_AssembleFilter"));
})(varBag.model, idService);
}
},
"IQz3rpAwIUu7A7eCl_bZgQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"SrmjheEuW0OJB2H5mARu7w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Assemble_FilterSheet_Instance"));
})(varBag.model, idService);
}
},
"BHs85VVHZEuZPzLqcMbcCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Footer"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
