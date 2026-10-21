define("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, NavigationHandlerController, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("BookmarkGroup", "bookmarkGroupIn", "BookmarkGroup", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_bookmarkGroupInDataFetchStatus", "_bookmarkGroupInDataFetchStatus", "_bookmarkGroupInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvcModel.hasValidationWidgets || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("BookmarkGroup" in inputs) {
this.variables.bookmarkGroupIn = OS.DataConversion.ServerDataConverter.from(inputs.BookmarkGroup, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_MyBookmarks.BookmarksByGroup");
});
define("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc$model", "UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc$controller", "UBTConnect.clientVariables", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, NavigationHandlerController, React, OSView, UBTConnect_Legacy_MyBookmarks_BookmarksByGroup_mvc_model, UBTConnect_Legacy_MyBookmarks_BookmarksByGroup_mvc_controller, UBTConnectClientVariables, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_view, OSWidgets, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_MyBookmarks.BookmarksByGroup";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_MyBookmarks_BookmarksByGroup_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_MyBookmarks_BookmarksByGroup_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "BookmarksByGroup";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_view, {
inputs: {
BookmarkGroup: model.variables.bookmarkGroupIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_Locality$Action: function (localityIdIn, localityNameIn, initialTabIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup NavigateTo_Locality");
controller.onHandle_NavigateTo_Locality$Action(localityIdIn, localityNameIn, initialTabIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_ShareObject$Action: function (objectIdIn, shareObjectTypeIdIn, isShareToOthersIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup NavigateTo_ShareObject");
return controller.onHandle_NavigateTo_ShareObject$Action(objectIdIn, shareObjectTypeIdIn, isShareToOthersIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
navigateTo_HouseholdCarousel$Action: function (selectedHouseholdIdIn, itemsLengthIn, itemPositionIn, searchStringIn, householdIdListIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup NavigateTo_HouseholdCarousel");
controller.onHandle_NavigateTo_HouseholdCarousel$Action(selectedHouseholdIdIn, itemPositionIn, householdIdListIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
navigateTo_CommunityBusinessCarousel$Action: function (communityBusinessIdIn, itemsLengthIn, itemPositionIn, objectTypeIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup NavigateTo_CommunityBusinessCarousel");
controller.onHandle_NavigateTo_CommunityBusinessCarousel$Action(communityBusinessIdIn, itemPositionIn, objectTypeIn, controller.callContext(eventHandlerContext));
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup NavigateTo_Subdivision");
controller.onHandle_NavigateTo_Subdivision$Action(subdivisionIdIn, controller.callContext(eventHandlerContext));
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
define("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc$debugger", "UBTConnect.Legacy_MyBookmarks.controller", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_MyBookmarks_BookmarksByGroup_mvc_Debugger, _flow_UBTConnect_Legacy_MyBookmarksController) {
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
Controller.prototype._onHandle_NavigateTo_Subdivision$Action = function (subdivisionIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateTo_Subdivision");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.OnHandle_NavigateTo_Subdivision$vars"))());
vars.value.subdivisionIdInLocal = subdivisionIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AX9qGoC5K0CTjGnYqyKAVg:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.8uWWppNjtUGMcWsJp4xuTw/ClientActions.AX9qGoC5K0CTjGnYqyKAVg:TBonwDHNVtz0Uc7PVIVK7g", "UBTConnect", "OnHandle_NavigateTo_Subdivision", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MMzGiG6DEk+1wIKdrF2K7w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4+IPNUhelES+UabGfyW_Vw", callContext.id);
// Destination: /UBTConnect/SupperMeeting_Details
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/SupperMeeting_Details", {
In_SubdivsionId: OS.DataConversion.ServerDataConverter.asString(vars.value.subdivisionIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AX9qGoC5K0CTjGnYqyKAVg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.OnHandle_NavigateTo_Subdivision$vars", [{
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.OnHandle_NavigateTo_CommunityBusinessCarousel$vars"))());
vars.value.in_CommunityBusinessIdInLocal = in_CommunityBusinessIdIn;
vars.value.in_ItemPositionInLocal = in_ItemPositionIn;
vars.value.in_ObjectTypeInLocal = in_ObjectTypeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:mScIHDzqR0G6H7zgoIihVg:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.8uWWppNjtUGMcWsJp4xuTw/ClientActions.mScIHDzqR0G6H7zgoIihVg:uUdyFWEK5Z5ONNL8xGJTTA", "UBTConnect", "OnHandle_NavigateTo_CommunityBusinessCarousel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:p4Qh+FIh9k+oh2xa34XAZQ", callContext.id);
// OneSchoolGlobal
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kPjSJP8EyUKbCOwlFKhnlQ", callContext.id) && (vars.value.in_ObjectTypeInLocal === UBTConnectModel.staticEntities.connect_Entity.oneSchoolGlobal))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:i9b1THmRhUuwpHL_KCvyqQ", callContext.id);
// Destination: /UBTConnect/OneSchoolGlobalDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OneSchoolGlobalDetails", {
In_OneSchoolGlobalId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_CommunityBusinessIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wkEcPQoRmEu_MtBTyIBr0A", callContext.id);
// Destination: /UBTConnect/CommunityBusinessDetails_CoomingSoon
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/CommunityBusinessDetails_CoomingSoon", {
In_CommunityBusinessId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_CommunityBusinessIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:mScIHDzqR0G6H7zgoIihVg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.OnHandle_NavigateTo_CommunityBusinessCarousel$vars", [{
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.OnHandle_NavigateTo_Locality$vars"))());
vars.value.localityIdInLocal = localityIdIn;
vars.value.localityNameInLocal = localityNameIn;
vars.value.initialTabInLocal = initialTabIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:o_CBjOTadE2ajrRdx4kwHw:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.8uWWppNjtUGMcWsJp4xuTw/ClientActions.o_CBjOTadE2ajrRdx4kwHw:72M55F2KKK2nm1AvKwe7MA", "UBTConnect", "OnHandle_NavigateTo_Locality", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gJA+GpOS8UuoGqglJAKqrg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZjlLADq2I0WVOlVWp2bc7g", callContext.id);
// Destination: /UBTConnect/Locality_Details
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Locality_Details", {
LocalityId: OS.DataConversion.ServerDataConverter.asString(vars.value.localityIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:o_CBjOTadE2ajrRdx4kwHw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.OnHandle_NavigateTo_Locality$vars", [{
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
Controller.prototype._onHandle_NavigateTo_ShareObject$Action = function (objectIdIn, shareObjectTypeIdIn, in_IsShareToOthersIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateTo_ShareObject");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.OnHandle_NavigateTo_ShareObject$vars"))());
vars.value.objectIdInLocal = objectIdIn;
vars.value.shareObjectTypeIdInLocal = shareObjectTypeIdIn;
vars.value.in_IsShareToOthersInLocal = in_IsShareToOthersIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:igqD0dfqr06R949R6Iil5Q:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.8uWWppNjtUGMcWsJp4xuTw/ClientActions.igqD0dfqr06R949R6Iil5Q:577SQlfKbcExGv4encjgMg", "UBTConnect", "OnHandle_NavigateTo_ShareObject", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Z6mXf1K3AkWRwQUshtW+4w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QZcKEOKcnEKu_MZHHY_rSg", callContext.id) && vars.value.in_IsShareToOthersInLocal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PBENXsJiBk+SVC+g24mXDg", callContext.id);
// Execute Action: ShareEntity_ByURL
model.flush();
return UBTConnect_UtilsController.default.shareEntity_ByURL$Action(vars.value.shareObjectTypeIdInLocal, OS.BuiltinFunctions.longIntegerToText(vars.value.objectIdInLocal), "", OS.DataTypes.DateTime.defaultValue, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7ksUPOiVl0mpQUE5gB5_dA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CFcrjztn4UKRnmKy6uLKaQ", callContext.id);
// Destination: /UBTConnect/LegacyShareObject
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LegacyShareObject", {
In_ObjectId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.longIntegerToText(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.Text),
In_ShareObjectTypeId: OS.DataConversion.ServerDataConverter.asString(vars.value.shareObjectTypeIdInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:igqD0dfqr06R949R6Iil5Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:igqD0dfqr06R949R6Iil5Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.OnHandle_NavigateTo_ShareObject$vars", [{
name: "ObjectId",
attrName: "objectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "ShareObjectTypeId",
attrName: "shareObjectTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_IsShareToOthers",
attrName: "in_IsShareToOthersInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onHandle_NavigateTo_HouseholdCarousel$Action = function (selectedHouseholdIdIn, itemPositionIn, householdIdListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NavigateTo_HouseholdCarousel");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.OnHandle_NavigateTo_HouseholdCarousel$vars"))());
vars.value.selectedHouseholdIdInLocal = selectedHouseholdIdIn;
vars.value.itemPositionInLocal = itemPositionIn;
vars.value.householdIdListInLocal = householdIdListIn.clone();
var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8HFr8gHfx0q_LwCQqkcXQg:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.8uWWppNjtUGMcWsJp4xuTw/ClientActions.8HFr8gHfx0q_LwCQqkcXQg:aQVCnKNb2BJv3KM9uv4sgw", "UBTConnect", "OnHandle_NavigateTo_HouseholdCarousel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t6BbsFMdsUuSvJIPYowNJA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bNdemEJfdkmfIJ2jcOflJg", callContext.id);
// Execute Action: GetHasCarouselEnabled
getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6+iRbJDsjEWoaeGuR1VZsg", callContext.id) && getHasCarouselEnabledVar.value.hasCarouselEnabledOut)) {
// Foreach HouseholdIdList
callContext.iterationContext.registerIterationStart(vars.value.householdIdListInLocal);
try {var householdIdListIterator = callContext.iterationContext.getIterator(vars.value.householdIdListInLocal);
var householdIdListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BfBWjiU09EG7j58ddzGG2w", callContext.id) && (householdIdListIndex < vars.value.householdIdListInLocal.length))) {
householdIdListIterator.currentRowNumber = householdIdListIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wfaqESpadU2URvj0E3CpPQ", callContext.id);
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

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5w_y4TaMhU6gpmHi6uaz7A", callContext.id);
// Execute Action: SetPreloadObject
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.preloadedHouseholdIdsVar), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZXfJvXOrUEe5ABj6xPg7rg", callContext.id);
// Destination: /UBTConnect/HouseholdCarousel
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.selectedHouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2iOg6IyGw0W6n2UN8J+GXA", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.selectedHouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8HFr8gHfx0q_LwCQqkcXQg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.OnHandle_NavigateTo_HouseholdCarousel$vars", [{
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
Controller.prototype.onHandle_NavigateTo_ShareObject$Action = function (objectIdIn, shareObjectTypeIdIn, in_IsShareToOthersIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateTo_ShareObject$Action, callContext, objectIdIn, shareObjectTypeIdIn, in_IsShareToOthersIn);

};
Controller.prototype.onHandle_NavigateTo_HouseholdCarousel$Action = function (selectedHouseholdIdIn, itemPositionIn, householdIdListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NavigateTo_HouseholdCarousel$Action, callContext, selectedHouseholdIdIn, itemPositionIn, householdIdListIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9AsMlXwKCkyEmRG6cz56bA:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA:jGD3scL258o1xBQUzWE5dA", "UBTConnect", "Legacy_MyBookmarks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8uWWppNjtUGMcWsJp4xuTw:/NRWebFlows.9AsMlXwKCkyEmRG6cz56bA/NodesShownInESpaceTree.8uWWppNjtUGMcWsJp4xuTw:Fmi2Tkd0vGNfUTvcpw+Xdg", "UBTConnect", "BookmarksByGroup", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8uWWppNjtUGMcWsJp4xuTw", callContext.id);
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

define("UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"ZgY+GtAAzkmpp9qVyX4CWQ": {
getter: function (varBag, idService) {
return varBag.vars.value.subdivisionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"g0OosEqBjEeAtAC8bsFUFw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CommunityBusinessIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ZsYxtEK_2UGWMkkSwK176A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ItemPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"RmwgDe8oo0OOG0qahmLQkQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ObjectTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1vGtpEWrp0K9d2jYC1SGVg": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"qPg5MHbH4EGIWg_RW_kwsg": {
getter: function (varBag, idService) {
return varBag.vars.value.localityNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZALve0A1gEmKKmr4a1N1ag": {
getter: function (varBag, idService) {
return varBag.vars.value.initialTabInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"WY6oTomg4EuB7fREoLzJIA": {
getter: function (varBag, idService) {
return varBag.vars.value.objectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"MGXhmntBuk6sEzWyjp7vtw": {
getter: function (varBag, idService) {
return varBag.vars.value.shareObjectTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UD3pKFdKyEKfKcOWNCD0Gg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsShareToOthersInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wCnSmMxHI0ShOJDJJKg2Kw": {
getter: function (varBag, idService) {
return varBag.vars.value.preloadedHouseholdIdsVar;
}
},
"pExMnloMxk6lXA0k4FxgtQ": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedHouseholdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ggZLCvqVIE2pOMSlrk7Mpw": {
getter: function (varBag, idService) {
return varBag.vars.value.itemPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"1cIgRxntGUKbjS4M2pyehQ": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdListInLocal;
}
},
"bNdemEJfdkmfIJ2jcOflJg": {
getter: function (varBag, idService) {
return varBag.getHasCarouselEnabledVar.value;
}
},
"aOgyFMwAS0eeNseVg5wQyg": {
getter: function (varBag, idService) {
return varBag.model.variables.bookmarkGroupIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FwrJs6F+eEWS0TsWTP9Zkg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"hrdD0lVYpkOEHB1hcD7eZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"h8p8YlY+gE6wgaIb_NnD5Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
