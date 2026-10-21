define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect.controller", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$GetNameAndSurname_ByFullName"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, NavigationHandlerController, UBTConnectController, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("EventHostId", "eventHostIdIn", "EventHostId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_eventHostIdInDataFetchStatus", "_eventHostIdInDataFetchStatus", "_eventHostIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EventId", "eventIdIn", "EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvcModel.hasValidationWidgets || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("EventHostId" in inputs) {
this.variables.eventHostIdIn = OS.DataConversion.ServerDataConverter.from(inputs.EventHostId, OS.DataTypes.DataTypes.LongInteger);
}

if("EventId" in inputs) {
this.variables.eventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.EventId, OS.DataTypes.DataTypes.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2");
});
define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc$model", "UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$GetNameAndSurname_ByFullName"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, NavigationHandlerController, React, OSView, UBTConnect_Legacy_LDMEventsFlow_V2_LDM_EventDetail_V2_mvc_model, UBTConnect_Legacy_LDMEventsFlow_V2_LDM_EventDetail_V2_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_view, OSWidgets, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_LDMEventsFlow_V2_LDM_EventDetail_V2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_LDMEventsFlow_V2_LDM_EventDetail_V2_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "LDM_EventDetail_V2";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_view, {
inputs: {
EventHostId: model.variables.eventHostIdIn,
EventId: model.variables.eventIdIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_WebMaps$Action: function (apiIn, queryIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2 NavigateTo_WebMaps");
controller.handler_NavigateTo_WebMaps$Action(apiIn, queryIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_HouseholdDetail$Action: function (event_HouseholdIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2 NavigateTo_HouseholdDetail");
controller.handler_EventDetailNavigateTo_HouseholdDetail$Action(event_HouseholdIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_AndroidMaps$Action: function (qIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2 NavigateTo_AndroidMaps");
controller.handler_NavigateTo_AndroidMaps$Action(qIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_ContactByEmail$Action: function (event_AvatarURLIn, event_ContactNameIn, event_ContactSurnameIn, event_ContactLocalityIn, event_ContactCountryIn, event_EmailToIn, event_IsCoordinatorIn, event_SubjectIn, event_DateIn, event_LocalityIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2 NavigateTo_ContactByEmail");
controller.handler_NavigateTo_ContactByEmail$Action(event_AvatarURLIn, event_ContactNameIn, event_ContactSurnameIn, event_ContactLocalityIn, event_ContactCountryIn, event_EmailToIn, event_IsCoordinatorIn, event_SubjectIn, event_DateIn, event_LocalityIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_HouseholdCarousel$Action: function (household_IdIn, householdNavigationTypeIdIn, itemsLengthIn, itemPositionIn, isLimitedLDMHostIn, householdIdListIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2 NavigateTo_HouseholdCarousel");
controller.handler_NavigateTo_HouseholdCarousel$Action(household_IdIn, householdIdListIn, controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
commonUI_Elements: PlaceholderContent.Empty
},
_dependencies: []
}), React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc$debugger", "UBTConnect.Legacy_LDMEventsFlow_V2.controller", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$GetNameAndSurname_ByFullName"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_LDMEventsFlow_V2_LDM_EventDetail_V2_mvc_Debugger, _flow_UBTConnect_Legacy_LDMEventsFlow_V2Controller) {
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
Controller.prototype._handler_NavigateTo_HouseholdCarousel$Action = function (selectedHouseholdIdIn, householdIdListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_HouseholdCarousel");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.Handler_NavigateTo_HouseholdCarousel$vars"))());
vars.value.selectedHouseholdIdInLocal = selectedHouseholdIdIn;
vars.value.householdIdListInLocal = householdIdListIn.clone();
var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:cnK1CXLNaEKJsoGwjdkBSg:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.MinHeaT6QkCa9A_rqmsHdQ/ClientActions.cnK1CXLNaEKJsoGwjdkBSg:l_SP46tC3lTAKpgNG2XOUA", "UBTConnect", "Handler_NavigateTo_HouseholdCarousel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ATqbXlY+tkWbwILZwpjIpA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LgaIWBJYcECvg3Im2AOuFA", callContext.id);
// Execute Action: GetHasCarouselEnabled
getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:25B+a2pnGE+Rg5HlVY9F4Q", callContext.id) && getHasCarouselEnabledVar.value.hasCarouselEnabledOut)) {
// Foreach HouseholdIdList
callContext.iterationContext.registerIterationStart(vars.value.householdIdListInLocal);
try {var householdIdListIterator = callContext.iterationContext.getIterator(vars.value.householdIdListInLocal);
var householdIdListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2J5ZqJ_uFUyoV1+JxjHltQ", callContext.id) && (householdIdListIndex < vars.value.householdIdListInLocal.length))) {
householdIdListIterator.currentRowNumber = householdIdListIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+JF_Yj4WU0u+q4Wg8moiOg", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(vars.value.preloadedHouseholdIdsVar.carouselHouseholdItemAttr, function () {
var rec = new UBTConnectModel.SwipeActionLongIntegerRecord();
rec.householdAttr = vars.value.householdIdListInLocal.getItem(householdIdListIndex.valueOf());
return rec;
}(), callContext);
householdIdListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.householdIdListInLocal);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s3xu0FHYTEyfiePrzykA+w", callContext.id);
// Execute Action: SetPreloadObject
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.preloadedHouseholdIdsVar), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Pi7XxRCMG0K9EWCUbAqwQw", callContext.id);
// Destination: /UBTConnect/HouseholdCarousel
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.selectedHouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tMWOthWONkm67IJXQiYKQA", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.selectedHouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cnK1CXLNaEKJsoGwjdkBSg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.Handler_NavigateTo_HouseholdCarousel$vars", [{
name: "SelectedHouseholdId",
attrName: "selectedHouseholdIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "HouseholdIdList",
attrName: "householdIdListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.LongIntegerList();
},
complexType: OS.DataTypes.LongIntegerList
}, {
name: "PreloadedHouseholdIds",
attrName: "preloadedHouseholdIdsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.CarouselPreloadedHouseholdsRec();
},
complexType: UBTConnectModel.CarouselPreloadedHouseholdsRec
}]);
Controller.prototype._handler_EventDetailNavigateTo_HouseholdDetail$Action = function (event_HouseholdIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_EventDetailNavigateTo_HouseholdDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.Handler_EventDetailNavigateTo_HouseholdDetail$vars"))());
vars.value.event_HouseholdIdInLocal = event_HouseholdIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ZXSxYyyw_029lprm0AXXvA:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.MinHeaT6QkCa9A_rqmsHdQ/ClientActions.ZXSxYyyw_029lprm0AXXvA:wXyJ_fz8ImkwL0XI2ES9xQ", "UBTConnect", "Handler_EventDetailNavigateTo_HouseholdDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uI6SiPFyVEyxR17oj9GMCQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HqCndbCcQ0CD0fQAmD6HgQ", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.event_HouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ZXSxYyyw_029lprm0AXXvA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.Handler_EventDetailNavigateTo_HouseholdDetail$vars", [{
name: "Event_HouseholdId",
attrName: "event_HouseholdIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._handler_NavigateTo_WebMaps$Action = function (apiIn, queryIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_WebMaps");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.Handler_NavigateTo_WebMaps$vars"))());
vars.value.apiInLocal = apiIn;
vars.value.queryInLocal = queryIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:PGKacjzlbU+7SNd99VZn0g:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.MinHeaT6QkCa9A_rqmsHdQ/ClientActions.PGKacjzlbU+7SNd99VZn0g:abAtogMRYPhX3QrPAHJJxA", "UBTConnect", "Handler_NavigateTo_WebMaps", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:klPxWno2xkSIo6nr+1pYtA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:P4vZxCTKaESybL0Dy7TyIA", callContext.id);
// Destination: https://www.google.com/maps/dir/?api=1
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://www.google.com/maps/dir/?api=1", {
api: OS.DataConversion.ServerDataConverter.asString(vars.value.apiInLocal, OS.DataTypes.DataTypes.Integer),
query: OS.DataConversion.ServerDataConverter.asString(vars.value.queryInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:PGKacjzlbU+7SNd99VZn0g", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.Handler_NavigateTo_WebMaps$vars", [{
name: "api",
attrName: "apiInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "query",
attrName: "queryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_NavigateTo_ContactByEmail$Action = function (event_AvatarURLIn, event_ContactNameIn, event_ContactSurnameIn, event_ContactLocalityIn, event_ContactCountryIn, event_EmailToIn, event_IsContactCoordinatorIn, event_SubjectIn, event_DateIn, event_LocalityIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_ContactByEmail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.Handler_NavigateTo_ContactByEmail$vars"))());
vars.value.event_AvatarURLInLocal = event_AvatarURLIn;
vars.value.event_ContactNameInLocal = event_ContactNameIn;
vars.value.event_ContactSurnameInLocal = event_ContactSurnameIn;
vars.value.event_ContactLocalityInLocal = event_ContactLocalityIn;
vars.value.event_ContactCountryInLocal = event_ContactCountryIn;
vars.value.event_EmailToInLocal = event_EmailToIn;
vars.value.event_IsContactCoordinatorInLocal = event_IsContactCoordinatorIn;
vars.value.event_SubjectInLocal = event_SubjectIn;
vars.value.event_DateInLocal = event_DateIn;
vars.value.event_LocalityInLocal = event_LocalityIn;
var getNameAndSurname_ByFullNameVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getNameAndSurname_ByFullNameVar = getNameAndSurname_ByFullNameVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:LF63gZwEXkmZtvRNziFkzg:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.MinHeaT6QkCa9A_rqmsHdQ/ClientActions.LF63gZwEXkmZtvRNziFkzg:H9v7CRDQ8o6zQ1spOBd9Lw", "UBTConnect", "Handler_NavigateTo_ContactByEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+lF2BDO0L0SCn3lzyEQxlA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m7HtNq_HW0es1BSs4Vy57g", callContext.id) && vars.value.event_IsContactCoordinatorInLocal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cwp5oeMAzUCN+UBPasOmiw", callContext.id);
// Destination: /UBTConnect/ContactByEmailLDMCoordinator
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailLDMCoordinator", {
In_EmailTo: OS.DataConversion.ServerDataConverter.asString(vars.value.event_EmailToInLocal, OS.DataTypes.DataTypes.Text),
In_ContactName: OS.DataConversion.ServerDataConverter.asString(vars.value.event_ContactNameInLocal, OS.DataTypes.DataTypes.Text),
In_EventDate: OS.DataConversion.ServerDataConverter.asString(vars.value.event_DateInLocal, OS.DataTypes.DataTypes.Date),
In_AvatarURL: OS.DataConversion.ServerDataConverter.asString(vars.value.event_AvatarURLInLocal, OS.DataTypes.DataTypes.Text),
In_Subject: OS.DataConversion.ServerDataConverter.asString(vars.value.event_SubjectInLocal, OS.DataTypes.DataTypes.Text),
In_EventLocality: OS.DataConversion.ServerDataConverter.asString(vars.value.event_LocalityInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kpG1lPPsCUalgDT1rgtnFw", callContext.id);
// Execute Action: GetNameAndSurname_ByFullName
getNameAndSurname_ByFullNameVar.value = UBTConnectController.default.getNameAndSurname_ByFullName$Action(vars.value.event_ContactNameInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fLVtwgkTGkq5Hkl5oZmPQQ", callContext.id);
// Destination: /UBTConnect/ContactByEmailMember
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailMember", {
In_AvatarURL: OS.DataConversion.ServerDataConverter.asString(vars.value.event_AvatarURLInLocal, OS.DataTypes.DataTypes.Text),
In_EmailTo: OS.DataConversion.ServerDataConverter.asString(vars.value.event_EmailToInLocal, OS.DataTypes.DataTypes.Text),
In_LDMEventLocality: OS.DataConversion.ServerDataConverter.asString(vars.value.event_LocalityInLocal, OS.DataTypes.DataTypes.Text),
In_ContactName: OS.DataConversion.ServerDataConverter.asString(getNameAndSurname_ByFullNameVar.value.out_NameOut, OS.DataTypes.DataTypes.Text),
In_IsHousehold: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean),
In_ContactCountry: OS.DataConversion.ServerDataConverter.asString(vars.value.event_ContactCountryInLocal, OS.DataTypes.DataTypes.Text),
In_ContactLocality: OS.DataConversion.ServerDataConverter.asString(vars.value.event_ContactLocalityInLocal, OS.DataTypes.DataTypes.Text),
In_ContactSurname: OS.DataConversion.ServerDataConverter.asString(getNameAndSurname_ByFullNameVar.value.out_SurnameOut, OS.DataTypes.DataTypes.Text),
In_LDMEventDate: OS.DataConversion.ServerDataConverter.asString(vars.value.event_DateInLocal, OS.DataTypes.DataTypes.Date),
In_HouseholdHeaderName: OS.DataConversion.ServerDataConverter.asString(getNameAndSurname_ByFullNameVar.value.out_SurnameOut, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:LF63gZwEXkmZtvRNziFkzg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.Handler_NavigateTo_ContactByEmail$vars", [{
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
name: "Event_ContactSurname",
attrName: "event_ContactSurnameInLocal",
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
name: "Event_IsContactCoordinator",
attrName: "event_IsContactCoordinatorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Event_Subject",
attrName: "event_SubjectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_Date",
attrName: "event_DateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Event_Locality",
attrName: "event_LocalityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_NavigateTo_AndroidMaps$Action = function (qIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_AndroidMaps");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.Handler_NavigateTo_AndroidMaps$vars"))());
vars.value.qInLocal = qIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QUL2n9R0aUOZVGY+68slcQ:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.MinHeaT6QkCa9A_rqmsHdQ/ClientActions.QUL2n9R0aUOZVGY+68slcQ:ohn3ZM6EI8P5hnF4v_frjQ", "UBTConnect", "Handler_NavigateTo_AndroidMaps", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YUq0Q4hHR0KNY1EbzKfTvQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OhFjGcxnWkOXUewJay4osw", callContext.id);
// Destination: geo:0,0
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("geo:0,0", {
q: OS.DataConversion.ServerDataConverter.asString(vars.value.qInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QUL2n9R0aUOZVGY+68slcQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.Handler_NavigateTo_AndroidMaps$vars", [{
name: "q",
attrName: "qInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.handler_NavigateTo_HouseholdCarousel$Action = function (selectedHouseholdIdIn, householdIdListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_HouseholdCarousel$Action, callContext, selectedHouseholdIdIn, householdIdListIn);

};
Controller.prototype.handler_EventDetailNavigateTo_HouseholdDetail$Action = function (event_HouseholdIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_EventDetailNavigateTo_HouseholdDetail$Action, callContext, event_HouseholdIdIn);

};
Controller.prototype.handler_NavigateTo_WebMaps$Action = function (apiIn, queryIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_WebMaps$Action, callContext, apiIn, queryIn);

};
Controller.prototype.handler_NavigateTo_ContactByEmail$Action = function (event_AvatarURLIn, event_ContactNameIn, event_ContactSurnameIn, event_ContactLocalityIn, event_ContactCountryIn, event_EmailToIn, event_IsContactCoordinatorIn, event_SubjectIn, event_DateIn, event_LocalityIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_ContactByEmail$Action, callContext, event_AvatarURLIn, event_ContactNameIn, event_ContactSurnameIn, event_ContactLocalityIn, event_ContactCountryIn, event_EmailToIn, event_IsContactCoordinatorIn, event_SubjectIn, event_DateIn, event_LocalityIn);

};
Controller.prototype.handler_NavigateTo_AndroidMaps$Action = function (qIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_AndroidMaps$Action, callContext, qIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:vp3CfrrlWk2JWh0AlH96Mw:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw:fQlsuSeDqt3ldNC2vcS_Cw", "UBTConnect", "Legacy_LDMEventsFlow_V2", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MinHeaT6QkCa9A_rqmsHdQ:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.MinHeaT6QkCa9A_rqmsHdQ:XOqelilcjJJLIlTSkTW6dA", "UBTConnect", "LDM_EventDetail_V2", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MinHeaT6QkCa9A_rqmsHdQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vp3CfrrlWk2JWh0AlH96Mw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_Legacy_LDMEventsFlow_V2Controller.default.handleError(ex, this.callContext());
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

define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"HTeSu+t6nkmZG09P2ZGpug": {
getter: function (varBag, idService) {
return varBag.vars.value.preloadedHouseholdIdsVar;
}
},
"ktHCeZh_mEOOK91Uoa3SRg": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedHouseholdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"cEMHYsK5SUyE7tfhGDZmGQ": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdListInLocal;
}
},
"LgaIWBJYcECvg3Im2AOuFA": {
getter: function (varBag, idService) {
return varBag.getHasCarouselEnabledVar.value;
}
},
"nRsSpLcVH0agSDTC8CeRlw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_HouseholdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Fq2xGVlzFUWZDXkBxVEVdw": {
getter: function (varBag, idService) {
return varBag.vars.value.apiInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"UIghw1RmC0+m0teIAnxltA": {
getter: function (varBag, idService) {
return varBag.vars.value.queryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4APQ+tAv20qAjSO+6OV0UQ": {
getter: function (varBag, idService) {
return varBag.vars.value.event_AvatarURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1R+D2phN2U6BIx4z1Lr7tA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_ContactNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xhyDoskoeUqDIeagH64aeQ": {
getter: function (varBag, idService) {
return varBag.vars.value.event_ContactSurnameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mg+ZntnRpk2Ih0nTdajW5w": {
getter: function (varBag, idService) {
return varBag.vars.value.event_ContactLocalityInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NPAJ+3zv2USve+EZ1mIyjQ": {
getter: function (varBag, idService) {
return varBag.vars.value.event_ContactCountryInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zDZa2rDwBEO3_sFm+75OFw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_EmailToInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9FtcGCoMeUaSyDm5j7UX+w": {
getter: function (varBag, idService) {
return varBag.vars.value.event_IsContactCoordinatorInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"d_Fpa1hSQkKwJiwRGBy1uw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_SubjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PQHkh4MNJ0ad1h8ALKMHCw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_DateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"C2vlf5SNvE6EsGkNZo4ocQ": {
getter: function (varBag, idService) {
return varBag.vars.value.event_LocalityInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kpG1lPPsCUalgDT1rgtnFw": {
getter: function (varBag, idService) {
return varBag.getNameAndSurname_ByFullNameVar.value;
}
},
"HbuZy9et70eYPaobNkNVvA": {
getter: function (varBag, idService) {
return varBag.vars.value.qInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"StQJ2x8qIUewqSjZwJi3Kg": {
getter: function (varBag, idService) {
return varBag.model.variables.eventHostIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"N2eqU4SNHUawjlPWZOdJDg": {
getter: function (varBag, idService) {
return varBag.model.variables.eventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"8FdoPuo2BUOnRKbp1gf0fA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"GgcdPOJ7gUGixXU6GYf9dw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"42TCEKAAnkil0nEmPdhKiQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
