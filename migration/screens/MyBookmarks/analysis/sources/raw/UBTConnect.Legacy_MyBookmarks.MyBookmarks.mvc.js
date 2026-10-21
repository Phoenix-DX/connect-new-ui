define("UBTConnect.Legacy_MyBookmarks.MyBookmarks.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "NavigationHandler.controller", "UBTConnect_Utils.controller", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function (OutSystems, UBTConnectModel, NavigationHandlerController, UBTConnect_UtilsController, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [].concat(_super.attributesToDeclare.call(this));
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
Model._hasValidationWidgetsValue = ((Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvcModel.hasValidationWidgets || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_MyBookmarks.MyBookmarks");
});
define("UBTConnect.Legacy_MyBookmarks.MyBookmarks.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_MyBookmarks.MyBookmarks.mvc$model", "UBTConnect.Legacy_MyBookmarks.MyBookmarks.mvc$controller", "UBTConnect.clientVariables", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTConnect_UtilsController, React, OSView, UBTConnect_Legacy_MyBookmarks_MyBookmarks_mvc_model, UBTConnect_Legacy_MyBookmarks_MyBookmarks_mvc_controller, UBTConnectClientVariables, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvc_view, OSWidgets, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_MyBookmarks.MyBookmarks";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_MyBookmarks_MyBookmarks_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_MyBookmarks_MyBookmarks_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "MyBookmarks";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_CommunityBusinessCarousel$Action: function (communityBusinessIdIn, objectTypeIn, itemsLengthIn, itemPositionIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_MyBookmarks NavigateTo_CommunityBusinessCarousel");
controller.onHandle_NavigateTo_CommunityBusinessCarousel$Action(communityBusinessIdIn, itemPositionIn, objectTypeIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_Locality$Action: function (localityIdIn, localityNameIn, initialTabIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_MyBookmarks NavigateTo_Locality");
controller.onHandle_NavigateTo_Locality$Action(localityIdIn, localityNameIn, initialTabIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_Subdivision$Action: function (subdivisionIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_MyBookmarks NavigateTo_Subdivision");
controller.onHandle_NavigateTo_Subdivision$Action(subdivisionIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_Households$Action: function (selectedHouseholdIdIn, itemsLengthIn, itemPositionIn, searchStringIn, householdIdListIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_MyBookmarks NavigateTo_Households");
controller.onHandle_NavigateTo_HouseholdCarousel$Action(selectedHouseholdIdIn, itemPositionIn, householdIdListIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_BookmarkGroup$Action: function (bookmarkGroupIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_MyBookmarks NavigateTo_BookmarkGroup");
controller.onHandle_NavigateTo_BookmarkGroup$Action(bookmarkGroupIn, controller.callContext(eventHandlerContext));
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
inputs: {
isRootPage: true,
ActiveItem: UBTConnectModel.staticEntities.connect_BottomBar_Items.bookmarks
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
define("UBTConnect.Legacy_MyBookmarks.MyBookmarks.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_MyBookmarks.MyBookmarks.mvc$debugger", "UBTConnect.Legacy_MyBookmarks.controller", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_MyBookmarks_MyBookmarks_mvc_Debugger, _flow_UBTConnect_Legacy_MyBookmarksController) {
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
Controller.prototype._onHandle_NavigateTo_HouseholdCarousel$Action = function (selectedHouseholdIdIn, itemPositionIn, householdIdListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateTo_HouseholdCarousel");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyBookmarks.MyBookmarks.OnHandle_NavigateTo_HouseholdCarousel$vars"))());
vars.value.selectedHouseholdIdInLocal = selectedHouseholdIdIn;
vars.value.itemPositionInLocal = itemPositionIn;
vars.value.householdIdListInLocal = householdIdListIn.clone();
var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:s3T4ctsWv0makv0HfzMxvg:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.eFr7FkJDREW2UceIwjAHLw/ClientActions.s3T4ctsWv0makv0HfzMxvg:R46e8DmawjCrDX0oI_WZ0g", "UBTConnect", "OnHandle_NavigateTo_HouseholdCarousel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RClwbvJY2kG9b5Xp4La81Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:u+qSNOaiL0u7qHD0Oyzmfg", callContext.id);
// Execute Action: GetHasCarouselEnabled
getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zsRl_YkpkUKjOPIoONBsoQ", callContext.id) && getHasCarouselEnabledVar.value.hasCarouselEnabledOut)) {
// Foreach HouseholdIdList
callContext.iterationContext.registerIterationStart(vars.value.householdIdListInLocal);
try {var householdIdListIterator = callContext.iterationContext.getIterator(vars.value.householdIdListInLocal);
var householdIdListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UYgYLTR+gUi3o6ftEfa2uA", callContext.id) && (householdIdListIndex < vars.value.householdIdListInLocal.length))) {
householdIdListIterator.currentRowNumber = householdIdListIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X3p37XabXEy2BnKM5X7j3g", callContext.id);
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

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9_TBEb8yNkKLSRd_SFdZHA", callContext.id);
// Execute Action: SetPreloadObject
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.preloadedHouseholdIdsVar), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b5Xk0Rp5S0ylKC4sA_XbPA", callContext.id);
// Destination: /UBTConnect/HouseholdCarousel
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.selectedHouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4RC6OXQcH0O0FO_1KMigHw", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.selectedHouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:s3T4ctsWv0makv0HfzMxvg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_MyBookmarks.MyBookmarks.OnHandle_NavigateTo_HouseholdCarousel$vars", [{
name: "SelectedHouseholdId",
attrName: "selectedHouseholdIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "ItemPosition",
attrName: "itemPositionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
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
Controller.prototype._onHandle_NavigateTo_BookmarkGroup$Action = function (bookmarkGroupIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateTo_BookmarkGroup");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyBookmarks.MyBookmarks.OnHandle_NavigateTo_BookmarkGroup$vars"))());
vars.value.bookmarkGroupInLocal = bookmarkGroupIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:4hBokjqtRkuoOpS6z114_A:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.eFr7FkJDREW2UceIwjAHLw/ClientActions.4hBokjqtRkuoOpS6z114_A:RmBGkpl+5Ss8ANL3RdOCIQ", "UBTConnect", "OnHandle_NavigateTo_BookmarkGroup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hXl9jukoOkmeWTk9bzh0fQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MSmyyiPBPEaQJiTZ0Sx_JQ", callContext.id);
// Destination: /UBTConnect/BookmarksByGroup
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/BookmarksByGroup", {
BookmarkGroup: OS.DataConversion.ServerDataConverter.asString(vars.value.bookmarkGroupInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:4hBokjqtRkuoOpS6z114_A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_MyBookmarks.MyBookmarks.OnHandle_NavigateTo_BookmarkGroup$vars", [{
name: "BookmarkGroup",
attrName: "bookmarkGroupInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onHandle_NavigateTo_Subdivision$Action = function (subdivisionIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateTo_Subdivision");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyBookmarks.MyBookmarks.OnHandle_NavigateTo_Subdivision$vars"))());
vars.value.subdivisionIdInLocal = subdivisionIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KsQEm0es_0GRtqqFLcePJQ:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.eFr7FkJDREW2UceIwjAHLw/ClientActions.KsQEm0es_0GRtqqFLcePJQ:LX++KASKAbp5FXac4JH1KQ", "UBTConnect", "OnHandle_NavigateTo_Subdivision", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9zMroR7X0k2u9vPtt_LxfA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xdMz8S5fG06fpeaBD5qbhg", callContext.id);
// Destination: /UBTConnect/SupperMeeting_Details
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/SupperMeeting_Details", {
In_SubdivsionId: OS.DataConversion.ServerDataConverter.asString(vars.value.subdivisionIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KsQEm0es_0GRtqqFLcePJQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_MyBookmarks.MyBookmarks.OnHandle_NavigateTo_Subdivision$vars", [{
name: "SubdivisionId",
attrName: "subdivisionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._onHandle_NavigateTo_CommunityBusinessCarousel$Action = function (in_CommunityBusinessIdIn, in_ItemPositionIn, in_ObjectTypeIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateTo_CommunityBusinessCarousel");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyBookmarks.MyBookmarks.OnHandle_NavigateTo_CommunityBusinessCarousel$vars"))());
vars.value.in_CommunityBusinessIdInLocal = in_CommunityBusinessIdIn;
vars.value.in_ItemPositionInLocal = in_ItemPositionIn;
vars.value.in_ObjectTypeInLocal = in_ObjectTypeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7qyYoUfn2EaYdV4iffk3yg:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.eFr7FkJDREW2UceIwjAHLw/ClientActions.7qyYoUfn2EaYdV4iffk3yg:LKFRloFW4nucjE9YehuhPg", "UBTConnect", "OnHandle_NavigateTo_CommunityBusinessCarousel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ctPbp5kP3k2ZbhJDPvPhSQ", callContext.id);
// OneSchoolGlobal
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:saEgMePGCUWJYMZXTMN7Aw", callContext.id) && (vars.value.in_ObjectTypeInLocal === UBTConnectModel.staticEntities.connect_Entity.oneSchoolGlobal))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ecTb1T5UXkebOxFyjZ6Weg", callContext.id);
// Destination: /UBTConnect/OneSchoolGlobalDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OneSchoolGlobalDetails", {
In_OneSchoolGlobalId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_CommunityBusinessIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:i95M8JHmv0GxTMrTWfBw5w", callContext.id);
// Destination: /UBTConnect/CommunityBusinessDetails_CoomingSoon
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/CommunityBusinessDetails_CoomingSoon", {
In_CommunityBusinessId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_CommunityBusinessIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7qyYoUfn2EaYdV4iffk3yg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_MyBookmarks.MyBookmarks.OnHandle_NavigateTo_CommunityBusinessCarousel$vars", [{
name: "In_CommunityBusinessId",
attrName: "in_CommunityBusinessIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "In_ItemPosition",
attrName: "in_ItemPositionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "In_ObjectType",
attrName: "in_ObjectTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onHandle_NavigateTo_Locality$Action = function (localityIdIn, localityNameIn, initialTabIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateTo_Locality");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyBookmarks.MyBookmarks.OnHandle_NavigateTo_Locality$vars"))());
vars.value.localityIdInLocal = localityIdIn;
vars.value.localityNameInLocal = localityNameIn;
vars.value.initialTabInLocal = initialTabIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:la38rqqX_0CQ2lFPcs_EVQ:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.eFr7FkJDREW2UceIwjAHLw/ClientActions.la38rqqX_0CQ2lFPcs_EVQ:tjI4c8KQ+lkK+RN28cfxnw", "UBTConnect", "OnHandle_NavigateTo_Locality", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+fA4ovzgxUahCO_Yeq_n_w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h_tCpCHfpkqBEmBVbvt0YA", callContext.id);
// Destination: /UBTConnect/Locality_Details
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Locality_Details", {
LocalityId: OS.DataConversion.ServerDataConverter.asString(vars.value.localityIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:la38rqqX_0CQ2lFPcs_EVQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_MyBookmarks.MyBookmarks.OnHandle_NavigateTo_Locality$vars", [{
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "LocalityName",
attrName: "localityNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "InitialTab",
attrName: "initialTabInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);

Controller.prototype.onHandle_NavigateTo_HouseholdCarousel$Action = function (selectedHouseholdIdIn, itemPositionIn, householdIdListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateTo_HouseholdCarousel$Action, callContext, selectedHouseholdIdIn, itemPositionIn, householdIdListIn);

};
Controller.prototype.onHandle_NavigateTo_BookmarkGroup$Action = function (bookmarkGroupIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateTo_BookmarkGroup$Action, callContext, bookmarkGroupIn);

};
Controller.prototype.onHandle_NavigateTo_Subdivision$Action = function (subdivisionIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateTo_Subdivision$Action, callContext, subdivisionIdIn);

};
Controller.prototype.onHandle_NavigateTo_CommunityBusinessCarousel$Action = function (in_CommunityBusinessIdIn, in_ItemPositionIn, in_ObjectTypeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateTo_CommunityBusinessCarousel$Action, callContext, in_CommunityBusinessIdIn, in_ItemPositionIn, in_ObjectTypeIn);

};
Controller.prototype.onHandle_NavigateTo_Locality$Action = function (localityIdIn, localityNameIn, initialTabIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateTo_Locality$Action, callContext, localityIdIn, localityNameIn, initialTabIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9AsMlXwKCkyEmRG6cz56bA:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA:jGD3scL258o1xBQUzWE5dA", "UBTConnect", "Legacy_MyBookmarks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:eFr7FkJDREW2UceIwjAHLw:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.eFr7FkJDREW2UceIwjAHLw:2mQvnP8C1ioigr6X9fH4mA", "UBTConnect", "MyBookmarks", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eFr7FkJDREW2UceIwjAHLw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9AsMlXwKCkyEmRG6cz56bA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_Legacy_MyBookmarksController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Legacy_MyBookmarks.MyBookmarks.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LgYYxI8z+0auIzCy0bcylw": {
getter: function (varBag, idService) {
return varBag.vars.value.preloadedHouseholdIdsVar;
}
},
"z2kPVIC4uUCgMge+5SMeFg": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedHouseholdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"k_PomV0M6UeB3_CnMCf_Og": {
getter: function (varBag, idService) {
return varBag.vars.value.itemPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Sq5yRcelwEq98dqKnqnWqw": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdListInLocal;
}
},
"u+qSNOaiL0u7qHD0Oyzmfg": {
getter: function (varBag, idService) {
return varBag.getHasCarouselEnabledVar.value;
}
},
"mKNh1qRj9EiFJMm32cKjnw": {
getter: function (varBag, idService) {
return varBag.vars.value.bookmarkGroupInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nCrhJ655Ck6_J1pA1r72BA": {
getter: function (varBag, idService) {
return varBag.vars.value.subdivisionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"xPvMIFYBEEO4nbRuvI63Kw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CommunityBusinessIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"eQMXloHWsUu3TKGdAOBqGg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ItemPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"9scvk8vUTk+0Aa3AGWcMHw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ObjectTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BW+yLAWI_kSYA4u60qi7hg": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"YRuQGdEOqUGwEdsfOmbxNQ": {
getter: function (varBag, idService) {
return varBag.vars.value.localityNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"P0TfeyrH5UW6RLoMnNXOnQ": {
getter: function (varBag, idService) {
return varBag.vars.value.initialTabInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Q1PsVsoPw0OXIuDBcjiXww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"0PgLXxznUkmi8KxM0rTFEQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"2xjlkXqQQkWCngYbWPmJVA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
