define("UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect.controller", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$model", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$SetPreloadObject", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$GetNameAndSurname_ByFullName"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, NavigationHandlerController, UBTConnectController, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_Utils_CW_Share_ShareSheet_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsEventNotFound", "isEventNotFoundVar", "IsEventNotFound", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsShareOpen", "isShareOpenVar", "IsShareOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShareableObjectId", "shareableObjectIdVar", "ShareableObjectId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("EventId", "eventIdIn", "EventId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("SeriesId", "seriesIdIn", "SeriesId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_seriesIdInDataFetchStatus", "_seriesIdInDataFetchStatus", "_seriesIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Start", "startIn", "Start", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_startInDataFetchStatus", "_startInDataFetchStatus", "_startInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AssembleEventTypeTile", "assembleEventTypeTileIn", "AssembleEventTypeTile", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_assembleEventTypeTileInDataFetchStatus", "_assembleEventTypeTileInDataFetchStatus", "_assembleEventTypeTileInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets || Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareSheet_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("EventId" in inputs) {
this.variables.eventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.EventId, OS.DataTypes.DataTypes.Text);
}

if("SeriesId" in inputs) {
this.variables.seriesIdIn = OS.DataConversion.ServerDataConverter.from(inputs.SeriesId, OS.DataTypes.DataTypes.Text);
}

if("Start" in inputs) {
this.variables.startIn = OS.DataConversion.ServerDataConverter.from(inputs.Start, OS.DataTypes.DataTypes.DateTime);
}

if("AssembleEventTypeTile" in inputs) {
this.variables.assembleEventTypeTileIn = OS.DataConversion.ServerDataConverter.from(inputs.AssembleEventTypeTile, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_AssembleFlow.AssembleDetail");
});
define("UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc$model", "UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$view", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$SetPreloadObject", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$GetNameAndSurname_ByFullName"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, NavigationHandlerController, React, OSView, UBTConnect_Legacy_AssembleFlow_AssembleDetail_mvc_model, UBTConnect_Legacy_AssembleFlow_AssembleDetail_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, OSWidgets, Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view) {
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
        View.displayName = "Legacy_AssembleFlow.AssembleDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_AssembleFlow_AssembleDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_AssembleFlow_AssembleDetail_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "AssembleDetail";
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
}), React.createElement(Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvc_view, {
inputs: {
SeriesId: model.variables.seriesIdIn,
Start: model.variables.startIn,
AssembleEventTypeTile: model.variables.assembleEventTypeTileIn,
EventId: model.variables.eventIdIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_Household$Action: function (householdIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_AssembleDetail NavigateTo_Household");
controller.handler_NavigateToHousehold$Action(householdIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_EmailContact$Action: function (event_AvatarURLIn, event_ContactNameIn, event_ContactSurnameIn, event_ContactLocalityIn, event_ContactCountryIn, event_EmailToIn, event_MemberIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_AssembleDetail NavigateTo_EmailContact");
controller.handler_NavigateTo_EmailContact$Action(event_AvatarURLIn, event_ContactNameIn, event_ContactLocalityIn, event_ContactCountryIn, event_EmailToIn, event_MemberIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
eventNotFound$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_AssembleDetail EventNotFound");
controller.handler_EventNotFound$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_HouseholdCarousel$Action: function (itemPositionIn, selectedHouseholdIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_AssembleDetail NavigateTo_HouseholdCarousel");
controller.handler_NavigateToHouseholdCarousel$Action(selectedHouseholdIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_ShareObject$Action: function (shareObjectTypeIdIn, objectIdIn, in_IsExternalSharingIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_AssembleDetail NavigateTo_ShareObject");
return controller.handler_NavigateTo_ShareObject$Action(shareObjectTypeIdIn, objectIdIn, in_IsExternalSharingIn, controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
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
}), React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, {
inputs: {
In_ShareObjectTypeId: UBTConnectModel.staticEntities.type_ShareObject.household,
In_IsOpen: model.variables.isShareOpenVar,
In_ShareableObjectId: model.variables.shareableObjectIdVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_ClosedShareSheet$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Share/ShareSheet Event_ClosedShareSheet");
controller.handler_CloseShareSheet$Action(controller.callContext(eventHandlerContext));
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_ShareableObject: PlaceholderContent.Empty
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc$debugger", "UBTConnect.Legacy_AssembleFlow.controller", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$SetPreloadObject", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$GetNameAndSurname_ByFullName"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_AssembleFlow_AssembleDetail_mvc_Debugger, _flow_UBTConnect_Legacy_AssembleFlowController) {
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
Controller.prototype._handler_CloseShareSheet$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_CloseShareSheet");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:SxTKHNwok0e25dyJL0X+nQ:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.UhZy6XyctkmbEYZIMPPQng/ClientActions.SxTKHNwok0e25dyJL0X+nQ:JlkTQ00qkHe_g5HGPoR7GQ", "UBTConnect", "Handler_CloseShareSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YVusDfnRHUuxB4vygk2FeA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Emuzn7G+L0mU+usGPdACUw", callContext.id);
// IsShareOpen = False
model.variables.isShareOpenVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JhQuFvwxC02i_IUAASv+jA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:SxTKHNwok0e25dyJL0X+nQ", callContext.id);
}

};
Controller.prototype._handler_NavigateTo_ShareObject$Action = function (shareObjectTypeIdIn, objectIdIn, in_IsExternalSharingIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_ShareObject");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleDetail.Handler_NavigateTo_ShareObject$vars"))());
vars.value.shareObjectTypeIdInLocal = shareObjectTypeIdIn;
vars.value.objectIdInLocal = objectIdIn;
vars.value.in_IsExternalSharingInLocal = in_IsExternalSharingIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fn4OSBz4y0O1Enh9GetAkg:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.UhZy6XyctkmbEYZIMPPQng/ClientActions.fn4OSBz4y0O1Enh9GetAkg:6NRorwyv6hHqEd32nHwXaQ", "UBTConnect", "Handler_NavigateTo_ShareObject", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KWgSP+j9kkeF2Xcri2+9cg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GPEOEo2GE0mpD0XCUlT7Jw", callContext.id) && vars.value.in_IsExternalSharingInLocal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lrBkmFw+SUG9gLEHfPjvkA", callContext.id);
// Execute Action: ShareEntity_ByURL
model.flush();
return UBTConnect_UtilsController.default.shareEntity_ByURL$Action(vars.value.shareObjectTypeIdInLocal, OS.BuiltinFunctions.longIntegerToText(vars.value.objectIdInLocal), "", OS.DataTypes.DateTime.defaultValue, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KGhLmcxVqEqs7O8AjvRvcg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_v8j15+PAESLIiJ4x9Tazg", callContext.id);
// Destination: /UBTConnect/LegacyShareObject
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LegacyShareObject", {
In_ShareObjectTypeId: OS.DataConversion.ServerDataConverter.asString(vars.value.shareObjectTypeIdInLocal, OS.DataTypes.DataTypes.Text),
In_ObjectId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.longIntegerToText(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fn4OSBz4y0O1Enh9GetAkg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fn4OSBz4y0O1Enh9GetAkg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleDetail.Handler_NavigateTo_ShareObject$vars", [{
name: "ShareObjectTypeId",
attrName: "shareObjectTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ObjectId",
attrName: "objectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "In_IsExternalSharing",
attrName: "in_IsExternalSharingInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_NavigateToHouseholdCarousel$Action = function (selectedHouseholdIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateToHouseholdCarousel");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleDetail.Handler_NavigateToHouseholdCarousel$vars"))());
vars.value.selectedHouseholdIdInLocal = selectedHouseholdIdIn;
var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
var getPreloadObjectVar = new OS.DataTypes.VariableHolder();
var listIndexOf_HouseholdIdVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
varBag.getPreloadObjectVar = getPreloadObjectVar;
varBag.listIndexOf_HouseholdIdVar = listIndexOf_HouseholdIdVar;
varBag.assignFromObjectVar = assignFromObjectVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UIvBdjMohEq63_Bt2UVgGw:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.UhZy6XyctkmbEYZIMPPQng/ClientActions.UIvBdjMohEq63_Bt2UVgGw:QNs3oZTueSe3m3tnCiNB1A", "UBTConnect", "Handler_NavigateToHouseholdCarousel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RhBvUqGAvUeaKAqCvyTVDw", callContext.id);
do {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hMDHPVEAfUyf6VLThfJSVg", callContext.id);
// Execute Action: GetHasCarouselEnabled
getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JJHAw1r3RkShHB+h7yk0kg", callContext.id) && getHasCarouselEnabledVar.value.hasCarouselEnabledOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bBAkQ5kovEWgesjS58RDQw", callContext.id);
// Execute Action: GetPreloadObject
getPreloadObjectVar.value = NavigationHandlerController.default.getPreloadObject$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:w5JilFsFNUm5NOnzozf_zg", callContext.id) && ((getPreloadObjectVar.value.preloadOut) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oCugtISSQk+I+X4U8AaWPw", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(vars.value.preloadedHouseholdIdListVar), getPreloadObjectVar.value.preloadOut, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NkORSSm2j0ma9oHVARAAmw", callContext.id);
// Execute Action: ListIndexOf_HouseholdId
listIndexOf_HouseholdIdVar.value = OS.SystemActions.listIndexOf(vars.value.preloadedHouseholdIdListVar, function (p) {
return p.equals(vars.value.selectedHouseholdIdInLocal);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cuD1NJKTPEaXQKrG77FqhA", callContext.id) && ((listIndexOf_HouseholdIdVar.value.positionOut) !== (-1)))) {
// Foreach PreloadedHouseholdIdList
callContext.iterationContext.registerIterationStart(vars.value.preloadedHouseholdIdListVar);
try {var preloadedHouseholdIdListIterator = callContext.iterationContext.getIterator(vars.value.preloadedHouseholdIdListVar);
var preloadedHouseholdIdListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EYlV+Q0vdE+bmL97ixENwA", callContext.id) && (preloadedHouseholdIdListIndex < vars.value.preloadedHouseholdIdListVar.length))) {
preloadedHouseholdIdListIterator.currentRowNumber = preloadedHouseholdIdListIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0t1wWnL4Ak+4CkohFgSevA", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(vars.value.preloadedHouseholdsVar.carouselHouseholdItemAttr, function () {
var rec = new UBTConnectModel.SwipeActionLongIntegerRecord();
rec.householdAttr = vars.value.preloadedHouseholdIdListVar.getItem(preloadedHouseholdIdListIndex.valueOf());
return rec;
}(), callContext);
preloadedHouseholdIdListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.preloadedHouseholdIdListVar);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ah44dh3Z+EWg4c8TZKrSLg", callContext.id);
// Execute Action: SetPreloadObject
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.preloadedHouseholdsVar), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2Q1Sj64HPUyxoJ028jtd+Q", callContext.id);
// Destination: /UBTConnect/HouseholdCarousel
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.selectedHouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
break;
}

}

}

// <<
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XZjYB_YZm0SA8AOPzHMqTg", callContext.id);
} while(false)
;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mp5uQeeYTk29J5tXMWk5yw", callContext.id);
// Execute Action: Handler_NavigateToHousehold
controller._handler_NavigateToHousehold$Action(vars.value.selectedHouseholdIdInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KqQXEvMyDk+W_REkTdrTWQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UIvBdjMohEq63_Bt2UVgGw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleDetail.Handler_NavigateToHouseholdCarousel$vars", [{
name: "SelectedHouseholdId",
attrName: "selectedHouseholdIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "PreloadedHouseholdIdList",
attrName: "preloadedHouseholdIdListVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.LongIntegerList();
},
complexType: OS.DataTypes.LongIntegerList
}, {
name: "PreloadedHouseholds",
attrName: "preloadedHouseholdsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.CarouselPreloadedHouseholdsRec();
},
complexType: UBTConnectModel.CarouselPreloadedHouseholdsRec
}]);
Controller.prototype._handler_NavigateTo_EmailContact$Action = function (event_AvatarURLIn, event_ContactNameIn, event_ContactLocalityIn, event_ContactCountryIn, event_EmailToIn, event_MemberIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_EmailContact");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleDetail.Handler_NavigateTo_EmailContact$vars"))());
vars.value.event_AvatarURLInLocal = event_AvatarURLIn;
vars.value.event_ContactNameInLocal = event_ContactNameIn;
vars.value.event_ContactLocalityInLocal = event_ContactLocalityIn;
vars.value.event_ContactCountryInLocal = event_ContactCountryIn;
vars.value.event_EmailToInLocal = event_EmailToIn;
vars.value.event_MemberIdInLocal = event_MemberIdIn;
var getNameAndSurname_ByFullNameVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getNameAndSurname_ByFullNameVar = getNameAndSurname_ByFullNameVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:X+5hiMWs0ESKo+2IlSxdHQ:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.UhZy6XyctkmbEYZIMPPQng/ClientActions.X+5hiMWs0ESKo+2IlSxdHQ:IgMktmBnqrels9IlF+TIkA", "UBTConnect", "Handler_NavigateTo_EmailContact", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CpY9k_D2AEio8Z3KyAoIiQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DMCtCjieJUGrFzcTYp2qVw", callContext.id);
// Execute Action: GetNameAndSurname_ByFullName
getNameAndSurname_ByFullNameVar.value = UBTConnectController.default.getNameAndSurname_ByFullName$Action(vars.value.event_ContactNameInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rFez2rLfBkOqjMTMKGo27A", callContext.id);
// Destination: /UBTConnect/ContactByEmailMember
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailMember", {
In_EntityId: OS.DataConversion.ServerDataConverter.asString(vars.value.event_MemberIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_EntityType: OS.DataConversion.ServerDataConverter.asString(UBTConnectModel.staticEntities.connect_Entity.member, OS.DataTypes.DataTypes.Text),
In_ContactName: OS.DataConversion.ServerDataConverter.asString(getNameAndSurname_ByFullNameVar.value.out_NameOut, OS.DataTypes.DataTypes.Text),
In_ContactLocality: OS.DataConversion.ServerDataConverter.asString(vars.value.event_ContactLocalityInLocal, OS.DataTypes.DataTypes.Text),
In_AuditEventId: OS.DataConversion.ServerDataConverter.asString(UBTConnectModel.staticEntities.applicationEvents_Directory.emailHousehold, OS.DataTypes.DataTypes.Text),
In_ContactCountry: OS.DataConversion.ServerDataConverter.asString(vars.value.event_ContactCountryInLocal, OS.DataTypes.DataTypes.Text),
In_EmailTo: OS.DataConversion.ServerDataConverter.asString(vars.value.event_EmailToInLocal, OS.DataTypes.DataTypes.Text),
In_ContactSurname: OS.DataConversion.ServerDataConverter.asString(getNameAndSurname_ByFullNameVar.value.out_SurnameOut, OS.DataTypes.DataTypes.Text),
In_AvatarURL: OS.DataConversion.ServerDataConverter.asString(vars.value.event_AvatarURLInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:X+5hiMWs0ESKo+2IlSxdHQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleDetail.Handler_NavigateTo_EmailContact$vars", [{
name: "Event_AvatarURL",
attrName: "event_AvatarURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_ContactName",
attrName: "event_ContactNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_ContactLocality",
attrName: "event_ContactLocalityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_ContactCountry",
attrName: "event_ContactCountryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_EmailTo",
attrName: "event_EmailToInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_MemberId",
attrName: "event_MemberIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._handler_EventNotFound$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_EventNotFound");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8TbYnDt6gUK5xUlp94eQBA:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.UhZy6XyctkmbEYZIMPPQng/ClientActions.8TbYnDt6gUK5xUlp94eQBA:v4VGdpxT_OO7kUJO58Snkg", "UBTConnect", "Handler_EventNotFound", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A6lfDXU3U0m6taEX2PTuOA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gm_WHZ87NE+lenKzWVTe1A", callContext.id);
// IsEventNotFound = True
model.variables.isEventNotFoundVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OAMO2dOuykmO9OAFPVbyVA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8TbYnDt6gUK5xUlp94eQBA", callContext.id);
}

};
Controller.prototype._handler_NavigateToHousehold$Action = function (householdIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateToHousehold");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleDetail.Handler_NavigateToHousehold$vars"))());
vars.value.householdIdInLocal = householdIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QnnXuCVYhEa++BvQArt5yA:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.UhZy6XyctkmbEYZIMPPQng/ClientActions.QnnXuCVYhEa++BvQArt5yA:W40mCm90YvNgAQeh+psOmQ", "UBTConnect", "Handler_NavigateToHousehold", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5eHC_UxcfU6vVDPc0Dgfug", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4aMvfQAnJU2b67GRpa0njw", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.householdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QnnXuCVYhEa++BvQArt5yA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_AssembleFlow.AssembleDetail.Handler_NavigateToHousehold$vars", [{
name: "HouseholdId",
attrName: "householdIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);

Controller.prototype.handler_CloseShareSheet$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_CloseShareSheet$Action, callContext);

};
Controller.prototype.handler_NavigateTo_ShareObject$Action = function (shareObjectTypeIdIn, objectIdIn, in_IsExternalSharingIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_ShareObject$Action, callContext, shareObjectTypeIdIn, objectIdIn, in_IsExternalSharingIn);

};
Controller.prototype.handler_NavigateToHouseholdCarousel$Action = function (selectedHouseholdIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateToHouseholdCarousel$Action, callContext, selectedHouseholdIdIn);

};
Controller.prototype.handler_NavigateTo_EmailContact$Action = function (event_AvatarURLIn, event_ContactNameIn, event_ContactLocalityIn, event_ContactCountryIn, event_EmailToIn, event_MemberIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_EmailContact$Action, callContext, event_AvatarURLIn, event_ContactNameIn, event_ContactLocalityIn, event_ContactCountryIn, event_EmailToIn, event_MemberIdIn);

};
Controller.prototype.handler_EventNotFound$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_EventNotFound$Action, callContext);

};
Controller.prototype.handler_NavigateToHousehold$Action = function (householdIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateToHousehold$Action, callContext, householdIdIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:oopA8UC9ZEGRmQoiLfCXdg:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg:dN024IGxNurNTd_3Az0hHQ", "UBTConnect", "Legacy_AssembleFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UhZy6XyctkmbEYZIMPPQng:/NRWebFlows.oopA8UC9ZEGRmQoiLfCXdg/NodesShownInESpaceTree.UhZy6XyctkmbEYZIMPPQng:IQf76i+pFo_LOGjyQ5syKg", "UBTConnect", "AssembleDetail", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UhZy6XyctkmbEYZIMPPQng", callContext.id);
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

define("UBTConnect.Legacy_AssembleFlow.AssembleDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Mx5KzuHlKUuz5yeniHBpaA": {
getter: function (varBag, idService) {
return varBag.vars.value.shareObjectTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sidIYe7Py0ashxQTtsiAwg": {
getter: function (varBag, idService) {
return varBag.vars.value.objectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"VomyzaQFn0GJSF3MgcsBAQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsExternalSharingInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+nOS4YvwH0+IueIWHE2Glg": {
getter: function (varBag, idService) {
return varBag.vars.value.preloadedHouseholdIdListVar;
}
},
"8_wuq+PH40S3tgkPzHucpQ": {
getter: function (varBag, idService) {
return varBag.vars.value.preloadedHouseholdsVar;
}
},
"QgPKzJykRkqGLQFek2DbKQ": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedHouseholdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"hMDHPVEAfUyf6VLThfJSVg": {
getter: function (varBag, idService) {
return varBag.getHasCarouselEnabledVar.value;
}
},
"bBAkQ5kovEWgesjS58RDQw": {
getter: function (varBag, idService) {
return varBag.getPreloadObjectVar.value;
}
},
"NkORSSm2j0ma9oHVARAAmw": {
getter: function (varBag, idService) {
return varBag.listIndexOf_HouseholdIdVar.value;
}
},
"oCugtISSQk+I+X4U8AaWPw": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"dIhF3EFZ6UmKWF7N6RbI6A": {
getter: function (varBag, idService) {
return varBag.vars.value.event_AvatarURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8vqCGb5Lmkm9a_62ZmceWw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_ContactNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hIjBZHJ180GdAsS8OGqjjA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_ContactLocalityInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PIijMyokaUeDkjZ09KpD2w": {
getter: function (varBag, idService) {
return varBag.vars.value.event_ContactCountryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"anrp0Cl+bkiZ3ujVMXvpnw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_EmailToInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Xmr73gXSSUGBmU5o6huwNg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MemberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"DMCtCjieJUGrFzcTYp2qVw": {
getter: function (varBag, idService) {
return varBag.getNameAndSurname_ByFullNameVar.value;
}
},
"O_jzxyEznkiEnHe8a9rr6g": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"1KhxPfwC20ybyrMwJ5Giwg": {
getter: function (varBag, idService) {
return varBag.model.variables.isEventNotFoundVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"LaHpntqL+0imibD90dkN1A": {
getter: function (varBag, idService) {
return varBag.model.variables.isShareOpenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2Qb1ufQ5DUqATq6h94idMA": {
getter: function (varBag, idService) {
return varBag.model.variables.shareableObjectIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dzrhv0xJQk6CnHRaH5iQhQ": {
getter: function (varBag, idService) {
return varBag.model.variables.eventIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Oct3N_5l7UKvW50dfwHNRA": {
getter: function (varBag, idService) {
return varBag.model.variables.seriesIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5rBJsmIU8EirGu9NXr5zWA": {
getter: function (varBag, idService) {
return varBag.model.variables.startIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"WrQiiwis3U+nbh2fjJ4ygQ": {
getter: function (varBag, idService) {
return varBag.model.variables.assembleEventTypeTileIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UZEy1HnCi0Cq40c9ELqKjg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"hKs4eXT9UkS3tX6Nsb98uA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"0hccaKffrker12zY2rRBdw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ShareableObject"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
