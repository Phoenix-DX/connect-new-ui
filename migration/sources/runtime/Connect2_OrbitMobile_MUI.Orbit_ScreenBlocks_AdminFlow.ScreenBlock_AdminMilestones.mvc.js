define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$Milestone_ScreenList", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$GetAdminOrbitMilestone_ScreenRec", "Connect2_OrbitMobile_MUI.model$GetAdminOrbitMilestone_ScreenList", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo"], function (OutSystems, Connect2_OrbitMobile_MUIModel, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel) {
var OS = OutSystems.Internal;

var Get_AdminMilestoneListDataActRec = (function (_super) {
__extends(Get_AdminMilestoneListDataActRec, _super);
function Get_AdminMilestoneListDataActRec(defaults) {
_super.apply(this, arguments);
}
Get_AdminMilestoneListDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.GetAdminOrbitMilestone_ScreenList());
}, true, Connect2_OrbitMobile_MUIModel.GetAdminOrbitMilestone_ScreenList)
].concat(_super.attributesToDeclare.call(this));
};
Get_AdminMilestoneListDataActRec.fromStructure = function (str) {
return new Get_AdminMilestoneListDataActRec(new Get_AdminMilestoneListDataActRec.RecordClass({
responseOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Get_AdminMilestoneListDataActRec.init();
return Get_AdminMilestoneListDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Milestones", "milestonesVar", "Milestones", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.Milestone_ScreenList());
}, false, Connect2_OrbitMobile_MUIModel.Milestone_ScreenList), 
this.attr("UserFirstName", "userFirstNameVar", "UserFirstName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("UserMemberId", "userMemberIdVar", "UserMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("EventId", "eventIdIn", "EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Get_AdminMilestoneList", "get_AdminMilestoneListDataAct", "get_AdminMilestoneListDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_AdminMilestoneListDataActRec());
}, true, Get_AdminMilestoneListDataActRec)
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
Model._hasValidationWidgetsValue = ((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("EventId" in inputs) {
this.variables.eventIdIn = inputs.EventId;
if("_eventIdInDataFetchStatus" in inputs) {
this.variables._eventIdInDataFetchStatus = inputs._eventIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$Milestone_ScreenList", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$GetAdminOrbitMilestone_ScreenRec", "Connect2_OrbitMobile_MUI.model$GetAdminOrbitMilestone_ScreenList", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, {
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
menu: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.menu,
_idProps: {
service: idService,
name: "Menu"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
headerLeft: new PlaceholderContent(function () {
return [React.createElement(Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, {
inputs: {
MenuAction: Connect2_OrbitMobile_MUIModel.staticEntities.menuAction.menu
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon menu-icon-Orbit",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
headerRight: PlaceholderContent.Empty,
headerContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-admin-header-cont",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-admin-header-text-cont",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "orbit-admin-header-text",
value: model.variables.userFirstNameVar,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
content: new PlaceholderContent(function () {
return [$if(!(model.variables.isFetchingDataVar), false, this, function () {
return [$if((model.variables.get_AdminMilestoneListDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function () {
return [$if(!(model.variables.milestonesVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("g71Nm4C71UmGzZVHkXU6eQ.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.milestonesVar,
style: "list list-group orbit-card-list",
tag: "div",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-card-list-cont",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.milestonesVar.getCurrent(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_view, {
inputs: {
In_MilestoneSummary: model.variables.milestonesVar.getCurrent(callContext.iterationContext)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clickedMilestone$Action: function (event_SelectedMilestoneIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Milestone ClickedMilestone");
return controller.handler_ClickedMilestone$Action(model.variables.milestonesVar.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
uuid: "9",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, callContext, idService, "1")
},
_dependencies: []
})];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
inputs: {
Message: "There are no event milestones available for QR scanning. Only milestones from yesterday, today or tomorrow are shown. If you have any questions, please contact your regional Orbit helpdesk."
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
uuid: "10",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [];
})];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.orbitLanding
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}),
bottomBar: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.bottomBar,
_idProps: {
service: idService,
name: "BottomBar"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
commonUI_Elements: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.commonUI_Elements,
_idProps: {
service: idService,
name: "CommonUI_Elements"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$Milestone_ScreenList", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$GetAdminOrbitMilestone_ScreenRec", "Connect2_OrbitMobile_MUI.model$GetAdminOrbitMilestone_ScreenList", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBT_AppManagerModel, UBT_AppManagerController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
get_AdminMilestoneList$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
get_AdminMilestoneList$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.get_AdminMilestoneList$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:zQzYvJ+KIEOzsvKgRJC12Q:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.ZuCYFps8X0S265k9GtR9cw/DataActions.zQzYvJ+KIEOzsvKgRJC12Q:+GMJhlUY10v0UQD6mSW_Jg", "Connect2_OrbitMobile_MUI", "Get_AdminMilestoneList", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestones/Get_AdminMilestoneList");
return controller.callDataAction("DataActionGet_AdminMilestoneList", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestones/DataActionGet_AdminMilestoneList", "rl0CO3kSJnLFszgB9xhFcg", function (b) {
model.variables.get_AdminMilestoneListDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_AdminMilestoneListDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_AdminMilestoneListDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestones/Get_AdminMilestoneList On After Fetch");
controller._onAfterFetch_Get_AdminMilestoneList$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:zQzYvJ+KIEOzsvKgRJC12Q", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["get_AdminMilestoneList$DataActRefresh"];
// Client Actions
Controller.prototype._refresh_GetMilestonesByEventId$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Refresh_GetMilestonesByEventId");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:TmcxSSpJgUCKJE84L9ykzQ:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.ZuCYFps8X0S265k9GtR9cw/ClientActions.TmcxSSpJgUCKJE84L9ykzQ:LB2TQ9o_memhuJH8LZEbDg", "Connect2_OrbitMobile_MUI", "Refresh_GetMilestonesByEventId", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bumgMfXRzkOp4uWWh1k3cA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7dCHSaebO0amD_s9AgLYLQ", callContext.id);
// Refresh Query: Get_AdminMilestoneList
var result = controller.get_AdminMilestoneList$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bZnTAdm_i0e99Ut4H5LsDA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TmcxSSpJgUCKJE84L9ykzQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TmcxSSpJgUCKJE84L9ykzQ", callContext.id);
throw ex;

});
};
Controller.prototype._onAfterFetch_Get_AdminMilestoneList$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_Get_AdminMilestoneList");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:IrULbX4HI0qQ9zZLjMDJCA:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.ZuCYFps8X0S265k9GtR9cw/ClientActions.IrULbX4HI0qQ9zZLjMDJCA:xeQNI8lKuZ+iHF9K3euMog", "Connect2_OrbitMobile_MUI", "OnAfterFetch_Get_AdminMilestoneList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NDuUTX6d3Uy2FG4vZkXz+w", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:11fyFF8SwkCVXXcZ5KnV8A", callContext.id);
// Milestones = Get_AdminMilestoneList.Response
model.variables.milestonesVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.get_AdminMilestoneListDataAct.responseOut, new Connect2_OrbitMobile_MUIModel.Milestone_ScreenList(), function (source, target) {
target.milestoneIdAttr = source.orbitAdminMilestoneAttr.milestoneRefAttr;
target.typeAttr = source.orbitMilestoneTypeAttr.typeAttr;
target.titleAttr = source.orbitAdminMilestoneAttr.milestoneNameAttr;
target.milestoneDateTimeAttr = source.orbitAdminMilestoneAttr.eventDateAttr;
target.sequenceNoAttr = source.orbitAdminMilestoneAttr.sequenceNoAttr;
target.dateForFilterAttr = OS.BuiltinFunctions.dateTimeToDate(source.orbitAdminMilestoneAttr.eventDateAttr);
target.orbitMilestoneTypeAttr = source.orbitMilestoneTypeAttr;
target.milestoneInfoAttr.milestoneStartDateTimeAttr = source.orbitAdminMilestoneAttr.startDateAttr;
target.milestoneInfoAttr.milestoneEndDateTimeAttr = source.orbitAdminMilestoneAttr.endDateAttr;
target.milestoneInfoAttr.descriptionAttr = source.orbitAdminMilestoneAttr.descriptionAttr;
return target;
});
// Finished Fetching
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6McoQkFKHkW70yPcRuSadQ", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kTkHyVda_EO_npf7UijKAA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:IrULbX4HI0qQ9zZLjMDJCA", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Wz5Pp2_Cb0mFpVsmR6aXvw:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.ZuCYFps8X0S265k9GtR9cw/ClientActions.Wz5Pp2_Cb0mFpVsmR6aXvw:xxFM3A3rKqByOMi2hhvbKQ", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_3SSuKFyG0GxLLKQPWFtEA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6IcaawsQnUKyoyP3ITLT1g", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestones_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I5+dSBlYZkCBANolMi3ksA", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zViQfgD3_0WnEHk0CT3OFQ", callContext.id);
} else {
// Begin fetching
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PKAb97OJqkGQ_zgK_YCZQQ", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_RDeZ0TiG0eF89EgtkeufQ", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

// Set Admin Info
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iqp_ckgKJUqf2iSBTpkeog", callContext.id);
// UserFirstName = AppManager_GetCachedUserInfo.UserInformation.FirstName
model.variables.userFirstNameVar = appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iqp_ckgKJUqf2iSBTpkeog", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// UserMemberId = If
model.variables.userMemberIdVar = ((OS.BuiltinFunctions.textToLongIntegerValidate(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr)) ? (OS.BuiltinFunctions.textToLongInteger(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr)) : (OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aAatQnZEE026QvhKXFvIgw", callContext.id);
// Execute Action: Refresh_GetMilestonesByEventId
return controller._refresh_GetMilestonesByEventId$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dtELOyAVLE+Iw28Q4bqX8Q", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Wz5Pp2_Cb0mFpVsmR6aXvw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Wz5Pp2_Cb0mFpVsmR6aXvw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_ClickedMilestone$Action = function (event_SelectedMilestoneIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ClickedMilestone");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.Handler_ClickedMilestone$vars"))());
vars.value.event_SelectedMilestoneInLocal = event_SelectedMilestoneIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:joV84yZUS0SMVCJlbMjAFg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.ZuCYFps8X0S265k9GtR9cw/ClientActions.joV84yZUS0SMVCJlbMjAFg:TW2QfwiwcJltjr_bfu63jA", "Connect2_OrbitMobile_MUI", "Handler_ClickedMilestone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cxHcNRMeSkCzZH1Iv76gGg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Milestone Id?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AOLT8Sextkq0UGrBO_D3Eg", callContext.id) && !(((vars.value.event_SelectedMilestoneInLocal.milestoneIdAttr) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yrJ_AfcnWkay7QSd_CUQuA", callContext.id);
// ErrorMessage = "Identifier"
vars.value.errorMessageVar = "Identifier";
}

// Has Required Data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ObMnLcoTyUanGVIxGxn4Aw", callContext.id) && (vars.value.errorMessageVar === ""))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DyBLMU5WpkmdxNEyuWdYRw", callContext.id);
// Trigger Event: NavigateTo_MilestoneDetail
return controller.navigateTo_MilestoneDetail$Action(model.variables.eventIdIn, vars.value.event_SelectedMilestoneInLocal.milestoneIdAttr, vars.value.event_SelectedMilestoneInLocal.titleAttr, vars.value.event_SelectedMilestoneInLocal.milestoneDateTimeAttr, vars.value.event_SelectedMilestoneInLocal.milestoneInfoAttr.descriptionAttr, vars.value.event_SelectedMilestoneInLocal.milestoneInfoAttr.milestoneStartDateTimeAttr, vars.value.event_SelectedMilestoneInLocal.milestoneInfoAttr.milestoneEndDateTimeAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:N_l+leCo9kG3TFqo7eW7Jg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KMK6T2Xiz0e2CN3BofSWwA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(((("Cannot proceed to scan because there is missing data." + "\r\n") + "Missing data: ") + vars.value.errorMessageVar), /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NxzSmA6TykOuNukVdVzrdA", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:joV84yZUS0SMVCJlbMjAFg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:joV84yZUS0SMVCJlbMjAFg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.Handler_ClickedMilestone$vars", [{
name: "Event_SelectedMilestone",
attrName: "event_SelectedMilestoneInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_BLModel.Milestone_ScreenRec();
},
complexType: Connect2_OrbitMobile_BLModel.Milestone_ScreenRec
}, {
name: "ErrorMessage",
attrName: "errorMessageVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.refresh_GetMilestonesByEventId$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refresh_GetMilestonesByEventId$Action, callContext);

};
Controller.prototype.onAfterFetch_Get_AdminMilestoneList$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_Get_AdminMilestoneList$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.handler_ClickedMilestone$Action = function (event_SelectedMilestoneIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ClickedMilestone$Action, callContext, event_SelectedMilestoneIn);

};
Controller.prototype.navigateTo_MilestoneDetail$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gsvXRoYDGUKLqTlTbKlOFA:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA:3HoUgFFZNBz79txQ+Fnk_A", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks_AdminFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ZuCYFps8X0S265k9GtR9cw:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.ZuCYFps8X0S265k9GtR9cw:6+EOy+UOhgKR4P5mPQZyVg", "Connect2_OrbitMobile_MUI", "ScreenBlock_AdminMilestones", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ZuCYFps8X0S265k9GtR9cw", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gsvXRoYDGUKLqTlTbKlOFA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestones On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"_RDeZ0TiG0eF89EgtkeufQ": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"6IcaawsQnUKyoyP3ITLT1g": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"uozkWC0CHkG_wx5ZhIkETQ": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fCRl25r_Ik+GPOPTMWS52A": {
getter: function (varBag, idService) {
return varBag.vars.value.event_SelectedMilestoneInLocal;
}
},
"zL2tKJrEqEKMrbfYrtu7Xg": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"MqkhuIgGuU2UwzKE7_fV6w": {
getter: function (varBag, idService) {
return varBag.model.variables.milestonesVar;
}
},
"pbBS86Fil0Wf_UtnN66G0w": {
getter: function (varBag, idService) {
return varBag.model.variables.userFirstNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oy17JOfGpUOuOYLMx9iZvQ": {
getter: function (varBag, idService) {
return varBag.model.variables.userMemberIdVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"aUmEUoKWik6rmGuXm5LBTg": {
getter: function (varBag, idService) {
return varBag.model.variables.eventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"zQzYvJ+KIEOzsvKgRJC12Q": {
getter: function (varBag, idService) {
return varBag.model.variables.get_AdminMilestoneListDataAct;
}
},
"SqT0f4Pd_kONs+UYdalgeQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"9NxDbrMOjku_MC_Ze7sNdQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"BeQuzrb+c0S3jsloldorbA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"sCfg4_ZzoUuhYvpdvyZJoA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"GPGHA9R2f02Ua3aDbthQNA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"IzOaN2k56Uqf1voqG03DBg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"MEcfyFADHkSf+DCES56FUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"vOQ2DV3imkO2DyU9lidp_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"_uHdCu3VJECEVujGnyf_ww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetchedData"));
})(varBag.model, idService);
}
},
"qI1opapg3US8esS54ACrZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasData"));
})(varBag.model, idService);
}
},
"98NefzbYgkWZxLvZsixZnA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"aNEwRlVwe0OKeQTVh6lL2A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"kwgg8Ju4HUmKetIyDi1oDQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"KPebgoeqa0+v8bsLp7dHpQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
