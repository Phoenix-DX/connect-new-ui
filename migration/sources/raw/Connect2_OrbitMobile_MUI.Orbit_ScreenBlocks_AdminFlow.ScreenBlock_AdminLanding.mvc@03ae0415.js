define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Sort.mvc$model", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_BL.model$GetAdminOrbitEvents_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$GetAdminOrbitEvents_ScreenList", "Connect2_OrbitMobile_BL.model$YearItemRec", "Connect2_OrbitMobile_MUI.model$YearItemList", "Connect2_OrbitMobile_MUI.model$IntegerIntegerIntegerRecord", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_IS.model$EventInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplyFilters", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_MUI.controller$GetFullYear", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplySortBy", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickEventRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickEvent", "Connect2_OrbitMobile_MUI.controller$ScrollContentToTop"], function (OutSystems, Connect2_OrbitMobile_MUIModel, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, Connect2_OrbitMobile_MUIController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Sort_mvcModel) {
var OS = OutSystems.Internal;

var Get_AdminEventsListDataActRec = (function (_super) {
__extends(Get_AdminEventsListDataActRec, _super);
function Get_AdminEventsListDataActRec(defaults) {
_super.apply(this, arguments);
}
Get_AdminEventsListDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.GetAdminOrbitEvents_ScreenList());
}, true, Connect2_OrbitMobile_MUIModel.GetAdminOrbitEvents_ScreenList), 
this.attr("YearFilter", "yearFilterOut", "YearFilter", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.YearItemList());
}, true, Connect2_OrbitMobile_MUIModel.YearItemList)
].concat(_super.attributesToDeclare.call(this));
};
Get_AdminEventsListDataActRec.init();
return Get_AdminEventsListDataActRec;
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
this.attr("EventsSummary", "eventsSummaryVar", "EventsSummary", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.GetAdminOrbitEvents_ScreenList());
}, false, Connect2_OrbitMobile_MUIModel.GetAdminOrbitEvents_ScreenList), 
this.attr("UserFirstName", "userFirstNameVar", "UserFirstName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("UserMemberId", "userMemberIdVar", "UserMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("EventFilter", "eventFilterVar", "EventFilter", true, false, OS.DataTypes.DataTypes.Integer, function () {
return OS.BuiltinFunctions.nullIdentifier();
}, false), 
this.attr("SortEventsASC", "sortEventsASCVar", "SortEventsASC", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("YearsSelection", "yearsSelectionVar", "YearsSelection", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.YearItemList());
}, false, Connect2_OrbitMobile_MUIModel.YearItemList), 
this.attr("Popup_SortByOpened", "popup_SortByOpenedVar", "Popup_SortByOpened", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Popup_FiltersOpened", "popup_FiltersOpenedVar", "Popup_FiltersOpened", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("PopupMeasurements", "popupMeasurementsVar", "PopupMeasurements", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.IntegerIntegerIntegerRecord());
}, false, Connect2_OrbitMobile_MUIModel.IntegerIntegerIntegerRecord), 
this.attr("Get_AdminEventsList", "get_AdminEventsListDataAct", "get_AdminEventsListDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_AdminEventsListDataActRec());
}, true, Get_AdminEventsListDataActRec)
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
Model._hasValidationWidgetsValue = ((((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Sort_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Sort.mvc$view", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_BL.model$GetAdminOrbitEvents_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$GetAdminOrbitEvents_ScreenList", "Connect2_OrbitMobile_BL.model$YearItemRec", "Connect2_OrbitMobile_MUI.model$YearItemList", "Connect2_OrbitMobile_MUI.model$IntegerIntegerIntegerRecord", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_IS.model$EventInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplyFilters", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_MUI.controller$GetFullYear", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplySortBy", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickEventRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickEvent", "Connect2_OrbitMobile_MUI.controller$ScrollContentToTop"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Sort_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Sort_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_controller;
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
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-landing-filters-cont",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/Container onclick");
controller.onToggle_FilterPopup$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "orbit-landing-filters justify-content-flex-start",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "bold color-orbit-primary-7 text-no-wrap margin-right-s",
value: model.getCachedValue(idService.getId("2vEEAkaN+UaVcME_2_bn3w.Value"), function () {
return (((model.variables.eventFilterVar === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents)) ? ("Past Events") : ((((model.variables.eventFilterVar === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents)) ? ("Upcoming Events") : ("Upcoming Events"))));
}, function () {
return model.variables.eventFilterVar;
}),
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.popup_FiltersOpenedVar, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "caret-up",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "caret-down",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/Container onclick");
controller.onToggle_SortPopup$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "orbit-landing-filters justify-content-flex-end",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "bold color-orbit-primary-7 text-no-wrap margin-right-s",
text: ["Sort By"],
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.popup_SortByOpenedVar, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "caret-up",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "caret-down",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})))];
}),
content: new PlaceholderContent(function () {
return [$if(!(model.variables.isFetchingDataVar), false, this, function () {
return [$if((model.variables.get_AdminEventsListDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function () {
return [$if(!(model.variables.eventsSummaryVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("AoVSdlqhNk+GZ0q2X1i25g.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.eventsSummaryVar,
style: "list list-group orbit-card-list",
tag: "div",
_idProps: {
service: idService,
uuid: "16"
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
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_view, {
inputs: {
In_EventSummary: model.getCachedValue(idService.getId("e66GZJqzCkO22wZNl_41uA.In_EventSummary"), function () {
return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext), new Connect2_OrbitMobile_BLModel.Event_ScreenRec(), function (source, target) {
target.eventIdAttr = source.orbitSummaryItemAttr.eventIdAttr;
target.typeAttr = source.orbitSummaryItemAttr.typeAttr;
target.titleAttr = source.orbitSummaryItemAttr.titleAttr;
target.orbitEventTypeAttr = source.orbitEventTypeAttr;
target.eventInfoAttr = source.orbitSummaryItemAttr.eventInfoAttr;
return target;
});
}, function () {
return model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext);
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clickedEvent$Action: function (event_SelectedEventIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Event ClickedEvent");
return controller.onHandle_EventCardClicked$Action(event_SelectedEventIn, model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext).orbitSummaryItemAttr.typeFriendlyAttr, controller.callContext(eventHandlerContext));
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
uuid: "18",
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
Message: "There are no events currently where QR scanning is required. If you have any questions, please contact your regional Orbit helpdesk."
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
uuid: "19",
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
uuid: "20",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "RootPlaceholder_Filters"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
"componentDidUpdate": function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/Root_Filters componentDidUpdate");
controller.componentDidUpdate_Filters$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "backwards-compatibility orbit-landing-filters__popup-backdrop",
visible: true,
_idProps: {
service: idService,
name: "Root_Filters"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Popup, {
extendedProperties: {
style: (("top: " + (model.variables.popupMeasurementsVar.topAttr).toString()) + "px;")
},
showPopup: model.variables.popup_FiltersOpenedVar,
style: "popup-dialog orbit-filters-popup",
_idProps: {
service: idService,
name: "Popup_Filters"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvc_view, {
inputs: {
In_Years: model.variables.yearsSelectionVar,
PopupMeasurements: model.variables.popupMeasurementsVar,
In_OrbitLandingFilter: model.variables.eventFilterVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
applyFilters$Action: function (event_SelectedFilterIn, event_SelectedYearsIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Filters ApplyFilters");
return controller.onHandle_ApplyFilters$Action(event_SelectedFilterIn, event_SelectedYearsIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
closePopup$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Filters ClosePopup");
controller.onToggle_FilterPopup$Action(controller.callContext(eventHandlerContext));
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
uuid: "24",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "RootPlaceholder_Sort"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
"componentDidUpdate": function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/Root_Sort componentDidUpdate");
controller.componentDidUpdate_Sort$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "backwards-compatibility orbit-landing-filters__popup-backdrop",
visible: true,
_idProps: {
service: idService,
name: "Root_Sort"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Popup, {
extendedProperties: {
style: (((("top: " + (model.variables.popupMeasurementsVar.topAttr).toString()) + "px; left: ") + (model.variables.popupMeasurementsVar.leftAttr).toString()) + "px;")
},
showPopup: model.variables.popup_SortByOpenedVar,
style: "popup-dialog orbit-filters-popup",
_idProps: {
service: idService,
name: "Popup_Sort"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Sort_mvc_view, {
inputs: {
In_IsSortASC: model.variables.sortEventsASCVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
closePopup$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Sort ClosePopup");
controller.onToggle_SortPopup$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
applySort$Action: function (event_IsSortASCIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Sort ApplySort");
return controller.onHandle_ApplySort$Action(event_IsSortASCIn, controller.callContext(eventHandlerContext));
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
uuid: "28",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$controller.GetPopupMeasurements.GetMeasurementsJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_BL.model$GetAdminOrbitEvents_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$GetAdminOrbitEvents_ScreenList", "Connect2_OrbitMobile_BL.model$YearItemRec", "Connect2_OrbitMobile_MUI.model$YearItemList", "Connect2_OrbitMobile_MUI.model$IntegerIntegerIntegerRecord", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_IS.model$EventInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplyFilters", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_MUI.controller$GetFullYear", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplySortBy", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickEventRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickEvent", "Connect2_OrbitMobile_MUI.controller$ScrollContentToTop"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_controller_GetPopupMeasurements_GetMeasurementsJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
get_AdminEventsList$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
get_AdminEventsList$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.get_AdminEventsList$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gxQUB9EQzEeMI1j4g1ymZg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/DataActions.gxQUB9EQzEeMI1j4g1ymZg:onC9wuwzrywhIe5+mClb_w", "Connect2_OrbitMobile_MUI", "Get_AdminEventsList", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/Get_AdminEventsList");
return controller.callDataAction("DataActionGet_AdminEventsList", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/DataActionGet_AdminEventsList", "+C7JTd6+6Y03UA5dv9Wt6w", function (b) {
model.variables.get_AdminEventsListDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_AdminEventsListDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_AdminEventsListDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/Get_AdminEventsList On After Fetch");
controller._onAfterFetch_Get_AdminEventsList$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gxQUB9EQzEeMI1j4g1ymZg", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["get_AdminEventsList$DataActRefresh"];
// Client Actions
Controller.prototype._resetFiltersAndSort$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ResetFiltersAndSort");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.ResetFiltersAndSort$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:fKOMASewFEKjivVk5V_gNQ:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.fKOMASewFEKjivVk5V_gNQ:VE1bba2t46Ne+2g+iPydNA", "Connect2_OrbitMobile_MUI", "ResetFiltersAndSort", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2QkZ8Ghp_0WYlx8CUWVH3A", callContext.id);
// Set all options
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dHniPQI0CU2wetgMCBe8Ug", callContext.id);
// SortEventsASC = True
model.variables.sortEventsASCVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dHniPQI0CU2wetgMCBe8Ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EventFilter = UpcomingEvents
model.variables.eventFilterVar = Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dHniPQI0CU2wetgMCBe8Ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// YearsSelection = Default_Years
model.variables.yearsSelectionVar = vars.value.default_YearsVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oem1uqChXUu_F+v8BGdCQg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fKOMASewFEKjivVk5V_gNQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.ResetFiltersAndSort$vars", [{
name: "Default_Years",
attrName: "default_YearsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.YearItemList();
},
complexType: Connect2_OrbitMobile_MUIModel.YearItemList
}]);
Controller.prototype._componentDidUpdate_Sort$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ComponentDidUpdate_Sort");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:w7JUHm00vU2IFdCM9UfCjA:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.w7JUHm00vU2IFdCM9UfCjA:HF5UywNWpRFJVzgCO+ySNA", "Connect2_OrbitMobile_MUI", "ComponentDidUpdate_Sort", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HOC_Fz1fukyhheifkEX8mw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5ds0HQLZlUy_xEA9bs5xjg", callContext.id);
// Execute Action: CopyClassesAcrossPortal
Connect2_LegacySharedController.default.copyClassesAcrossPortal$Action(idService.getId("Root_Sort"), idService.getId("Popup_Sort"), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lcral2hvikW_ZchC8SG1XA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:w7JUHm00vU2IFdCM9UfCjA", callContext.id);
}

};
Controller.prototype._componentDidUpdate_Filters$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ComponentDidUpdate_Filters");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:A+vUN5OCZkC9OrinvEhwcg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.A+vUN5OCZkC9OrinvEhwcg:bfeXhE3xxYH3VkYHZc_D6g", "Connect2_OrbitMobile_MUI", "ComponentDidUpdate_Filters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1sAAI_BvCk2lJ9uBFdDhLg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R52SXE5GZ0+DzncLrw8MKA", callContext.id);
// Execute Action: CopyClassesAcrossPortal
Connect2_LegacySharedController.default.copyClassesAcrossPortal$Action(idService.getId("Root_Filters"), idService.getId("Popup_Filters"), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UxmilDswaUqfV3a054VtTg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:A+vUN5OCZkC9OrinvEhwcg", callContext.id);
}

};
Controller.prototype._onHandle_ApplyFilters$Action = function (in_SelectedFilterIn, in_SelectedYearsIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ApplyFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnHandle_ApplyFilters$vars"))());
vars.value.in_SelectedFilterInLocal = in_SelectedFilterIn;
vars.value.in_SelectedYearsInLocal = in_SelectedYearsIn.clone();
var listFilter_SelectedYearsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_SelectedYearsVar = listFilter_SelectedYearsVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KnafgiVNz0CAXm8J6VusYg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.KnafgiVNz0CAXm8J6VusYg:SVOBX5++ze76b3fW4+h4Xg", "Connect2_OrbitMobile_MUI", "OnHandle_ApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bVCMx_FU8k2a7INE4SLQlQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YcBv5OGReEq+N_HjQ0O9cQ", callContext.id);
// Execute Action: OnToggle_FilterPopup
controller._onToggle_FilterPopup$Action(callContext);
// Set Filter Selection
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7LQnSODFb06jnCZGTTj0BA", callContext.id);
// EventFilter = In_SelectedFilter
model.variables.eventFilterVar = vars.value.in_SelectedFilterInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7LQnSODFb06jnCZGTTj0BA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// YearsSelection = In_SelectedYears
model.variables.yearsSelectionVar = vars.value.in_SelectedYearsInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iSFuYN3v8EaTAOwWcJa8VQ", callContext.id);
// Execute Action: FilterEvents
controller._filterEvents$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5bRik5jflkaPAh6oWm2AHw", callContext.id);
// Execute Action: SetAndSortEvents
controller._setAndSortEvents$Action(((model.variables.eventFilterVar === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents) && ((model.variables.eventFilterVar) !== (Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents))), true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CRLPKKnGrUSBASaGcTn4XA", callContext.id);
// Execute Action: ListFilter_SelectedYears
listFilter_SelectedYearsVar.value = OS.SystemActions.listFilter(vars.value.in_SelectedYearsInLocal, function (p) {
return p.isSelectedAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dzDNtx_gXU+Jv50N976PyA", callContext.id);
// Execute Action: OnApplicationEvent_ApplyFilters
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ApplyFilters$Action(vars.value.in_SelectedFilterInLocal, OS.DataConversion.JSConversions.typeConvertRecordList(listFilter_SelectedYearsVar.value.filteredListOut, new OS.DataTypes.IntegerList(), function (source, target) {
target = OS.BuiltinFunctions.longIntegerToInteger(source.yearAttr);
return target;
}), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uZdR75_3Y0CYV4wsukhLgQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KnafgiVNz0CAXm8J6VusYg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KnafgiVNz0CAXm8J6VusYg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnHandle_ApplyFilters$vars", [{
name: "In_SelectedFilter",
attrName: "in_SelectedFilterInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "In_SelectedYears",
attrName: "in_SelectedYearsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.YearItemList();
},
complexType: Connect2_OrbitMobile_MUIModel.YearItemList
}]);
Controller.prototype._onToggle_SortPopup$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnToggle_SortPopup");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:OlhXhxJCQ0ehRUi+9zyizg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.OlhXhxJCQ0ehRUi+9zyizg:mWDbq+s8nG4otPJ4iNq_Ow", "Connect2_OrbitMobile_MUI", "OnToggle_SortPopup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JwJNsxs5JUKN1A4VQxVT8w", callContext.id);
// Has data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:obb5Z5bxs0+Kah1Fa4lRQQ", callContext.id) && !(model.variables.isFetchingDataVar))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eaI2BGcuckyUYAuRC+v3DQ", callContext.id);
// Popup_SortByOpened = notPopup_SortByOpened
model.variables.popup_SortByOpenedVar = !(model.variables.popup_SortByOpenedVar);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rzwvVtIb+EqRs7bfEuD54w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AAzNhgh480+lAW12yUFbyA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OlhXhxJCQ0ehRUi+9zyizg", callContext.id);
}

};
Controller.prototype._setAndSortEvents$Action = function (isSortASCIn, isForceSortIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetAndSortEvents");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.SetAndSortEvents$vars"))());
vars.value.isSortASCInLocal = isSortASCIn;
vars.value.isForceSortInLocal = isForceSortIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1__wwp88l0iJ7tm2FOZ9zg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.1__wwp88l0iJ7tm2FOZ9zg:+oWEoF8Z7hTSfeopvLoYrQ", "Connect2_OrbitMobile_MUI", "SetAndSortEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F+QnYDzsZEOEP0EwW2d2BQ", callContext.id);
// New Sort Order?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YJJK6aC0q0iUvbIB+s_zkg", callContext.id) && !(((vars.value.isSortASCInLocal) !== (model.variables.sortEventsASCVar))))) {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w1YeBwR+u0iLG1vasah_IQ", callContext.id) && !(vars.value.isForceSortInLocal))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9zCoh8GuL067Ui39tLo_TQ", callContext.id);
return ;

}

}

// Switch Var
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lfm02HwNvEuR+Dj0YCjOaw", callContext.id);
// SortEventsASC = IsSortASC
model.variables.sortEventsASCVar = vars.value.isSortASCInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7m26wE+nP0yRAIFFxjT0_A", callContext.id);
// Execute Action: SortEvents
controller._sortEvents$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8HEpsNK8xUOPbBmYPAghFQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1__wwp88l0iJ7tm2FOZ9zg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.SetAndSortEvents$vars", [{
name: "IsSortASC",
attrName: "isSortASCInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsForceSort",
attrName: "isForceSortInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._refresh_GetEventsByMemberId$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Refresh_GetEventsByMemberId");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:O35UxpY9HE25aY3zBVo6wg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.O35UxpY9HE25aY3zBVo6wg:U+OLHkoxJuRgGbirgCib5w", "Connect2_OrbitMobile_MUI", "Refresh_GetEventsByMemberId", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wiZjLLkmxkGCdB6Qh+HZWQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TMYcfrm8cUyi3+dfDaOlEQ", callContext.id);
// Execute Action: ResetFiltersAndSort
controller._resetFiltersAndSort$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z02JKKbdLEe36AeCq4PA2g", callContext.id);
// Refresh Query: Get_AdminEventsList
var result = controller.get_AdminEventsList$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JKMGiOKs002_UAEfC2srig", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:O35UxpY9HE25aY3zBVo6wg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:O35UxpY9HE25aY3zBVo6wg", callContext.id);
throw ex;

});
};
Controller.prototype._getPopupMeasurements$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetPopupMeasurements");
callContext = controller.callContext(callContext);
var getMeasurementsJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getMeasurementsJSResult = getMeasurementsJSResult;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2WqtzbXPzkuRxnDiLsmWmg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.2WqtzbXPzkuRxnDiLsmWmg:E0m2DgPRwA+OipFxLvOniQ", "Connect2_OrbitMobile_MUI", "GetPopupMeasurements", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vnb5gI7L90WH5oga08KfPA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:caBdi6A9M0SlZrz+2ZFBRw", callContext.id);
getMeasurementsJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_controller_GetPopupMeasurements_GetMeasurementsJS, "GetMeasurements", "GetPopupMeasurements", {
Top: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
Left: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
Bottom: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.GetPopupMeasurements$getMeasurementsJSResult"))();
jsNodeResult.topOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Top, OS.DataTypes.DataTypes.Integer);
jsNodeResult.leftOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Left, OS.DataTypes.DataTypes.Integer);
jsNodeResult.bottomOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Bottom, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
// Set Measurements
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tvSqHIPM2EqNUnxdXkHE9g", callContext.id);
// PopupMeasurements.Top = GetMeasurements.Top
model.variables.popupMeasurementsVar.topAttr = getMeasurementsJSResult.value.topOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tvSqHIPM2EqNUnxdXkHE9g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PopupMeasurements.Left = GetMeasurements.Left
model.variables.popupMeasurementsVar.leftAttr = getMeasurementsJSResult.value.leftOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tvSqHIPM2EqNUnxdXkHE9g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PopupMeasurements.Bottom = GetMeasurements.Bottom
model.variables.popupMeasurementsVar.bottomAttr = getMeasurementsJSResult.value.bottomOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gEksmUxu_0mX5rEdjjly0Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2WqtzbXPzkuRxnDiLsmWmg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.GetPopupMeasurements$getMeasurementsJSResult", [{
name: "Top",
attrName: "topOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Left",
attrName: "leftOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Bottom",
attrName: "bottomOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:baROz_QxokmqKzLYWJKsNQ:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.baROz_QxokmqKzLYWJKsNQ:wO8qH2jERXCaDuTUhE3rEA", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JZGzwISzpkq+iRl_TZP81w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i+J7YPTMwEiNjSW8SpMRkw", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v8c8N3yBG0ivU3llkCIb0A", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:91dC+BZIm0CG5CS8yc_aMg", callContext.id);
} else {
// Begin fetching
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S93ogUlbUUaMLN1ht0YVGw", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZPUf0LXudU+6UdAiPENZQQ", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

// Set Admin Info
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rA+fK9My1UeS3Tb2OFo1ZA", callContext.id);
// UserFirstName = AppManager_GetCachedUserInfo.UserInformation.FirstName
model.variables.userFirstNameVar = appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rA+fK9My1UeS3Tb2OFo1ZA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// UserMemberId = If
model.variables.userMemberIdVar = ((OS.BuiltinFunctions.textToLongIntegerValidate(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr)) ? (OS.BuiltinFunctions.textToLongInteger(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr)) : (OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eHjq8XB7gU+YGAmtyb80kg", callContext.id);
// Execute Action: GetPopupMeasurements
controller._getPopupMeasurements$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c4m71xLIg02L5shDxoWjjQ", callContext.id);
// Execute Action: Refresh_GetEventsByMemberId
return controller._refresh_GetEventsByMemberId$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yNY+cz0fFUOf0JiROjtqTw", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:baROz_QxokmqKzLYWJKsNQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:baROz_QxokmqKzLYWJKsNQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._filterEvents$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("FilterEvents");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.FilterEvents$vars"))());
var listFilter_MoreThan8DaysAgoVar = new OS.DataTypes.VariableHolder();
var listFilter_Last8DaysAndFutureVar = new OS.DataTypes.VariableHolder();
var listFilter_YearVar = new OS.DataTypes.VariableHolder();
var listFilter_YearFiltersVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_MoreThan8DaysAgoVar = listFilter_MoreThan8DaysAgoVar;
varBag.listFilter_Last8DaysAndFutureVar = listFilter_Last8DaysAndFutureVar;
varBag.listFilter_YearVar = listFilter_YearVar;
varBag.listFilter_YearFiltersVar = listFilter_YearFiltersVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:mEYh14v6SE28CTVzDVhElw:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.mEYh14v6SE28CTVzDVhElw:s7YbhyP3BmoQ_uHBjyLNRw", "Connect2_OrbitMobile_MUI", "FilterEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OobYPsnPTU6CM7LAY9cllg", callContext.id);
// Has data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P+jQjMFtEEyEMf9VHOtNmw", callContext.id) && !(model.variables.get_AdminEventsListDataAct.responseOut.isEmpty))) {
// Filter Option
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PtGAVPKkZESpOfZUnkqTCA", callContext.id) && (model.variables.eventFilterVar === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:igf+UEZxB0KRyxjsAezvJQ", callContext.id);
// Execute Action: ListFilter_Last8DaysAndFuture
listFilter_Last8DaysAndFutureVar.value = OS.SystemActions.listFilter(model.variables.get_AdminEventsListDataAct.responseOut, function (p) {
return p.orbitSummaryItemAttr.eventInfoAttr.endEventDateAttr.gte(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), -22));
}, callContext);

// Set Filtered List
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:unoFITTzWkGZbe6NSl0i6Q", callContext.id);
// EventsSummary = ListFilter_Last8DaysAndFuture.FilteredList
model.variables.eventsSummaryVar = listFilter_Last8DaysAndFutureVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Nk6_FwYiGEebCXZsvVgAMQ", callContext.id);
} else {
if((model.variables.eventFilterVar === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P7XXB_cQPkWUSajfAi6pqw", callContext.id);
// Execute Action: ListFilter_MoreThan8DaysAgo
listFilter_MoreThan8DaysAgoVar.value = OS.SystemActions.listFilter(model.variables.get_AdminEventsListDataAct.responseOut, function (p) {
return p.orbitSummaryItemAttr.eventInfoAttr.endEventDateAttr.lt(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), -22));
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zmBjq44rO0O1wnBPqvFq8Q", callContext.id);
// Execute Action: ListFilter_YearFilters
listFilter_YearFiltersVar.value = OS.SystemActions.listFilter(model.variables.yearsSelectionVar, function (p) {
return p.isSelectedAttr;
}, callContext);

// Filtering by year?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mK8fEdL7MUCzt3DwXAL8_g", callContext.id) && !(listFilter_YearFiltersVar.value.filteredListOut.isEmpty))) {
// Foreach ListFilter_YearFilters.FilteredList
callContext.iterationContext.registerIterationStart(listFilter_YearFiltersVar.value.filteredListOut);
try {var filteredListIterator = callContext.iterationContext.getIterator(listFilter_YearFiltersVar.value.filteredListOut);
var filteredListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fx8ms467WEimXcKDtsh6xA", callContext.id) && (filteredListIndex < listFilter_YearFiltersVar.value.filteredListOut.length))) {
filteredListIterator.currentRowNumber = filteredListIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bl6rgL6Z7kCM6K3wGfl4HQ", callContext.id);
// Execute Action: ListFilter_Year
listFilter_YearVar.value = OS.SystemActions.listFilter(listFilter_MoreThan8DaysAgoVar.value.filteredListOut, function (p) {
return OutSystemsDebugger.handleFunctionCall(function () {
return OS.BuiltinFunctions.integerToLongInteger(Connect2_OrbitMobile_MUIController.default.getFullYear$Action(p.orbitSummaryItemAttr.eventInfoAttr.startEventDateAttr, callContext).yearOut);
}, OS.DataTypes.DataTypes.LongInteger, callContext.id).equals(listFilter_YearFiltersVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).yearAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:228Cx_ptV0aa0THzpnv7Yg", callContext.id);
// Execute Action: ListAppendAll_FilteredYears
OS.SystemActions.listAppendAll(vars.value.yearFilteredListVar, listFilter_YearVar.value.filteredListOut, callContext);
filteredListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(listFilter_YearFiltersVar.value.filteredListOut);
}

// Set Filtered List
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t_OO2poGqUCrvPw_TfuOyg", callContext.id);
// EventsSummary = YearFilteredList
model.variables.eventsSummaryVar = vars.value.yearFilteredListVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ClDINlOitU2AX2g0KE+gSg", callContext.id);
} else {
// Set Filtered List
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:k4ezMcLKa0OPkBlAogq4qQ", callContext.id);
// EventsSummary = ListFilter_MoreThan8DaysAgo.FilteredList
model.variables.eventsSummaryVar = listFilter_MoreThan8DaysAgoVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ClDINlOitU2AX2g0KE+gSg", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3YbB+jggHkeSpiijOQQ7mw", callContext.id);
}

}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:A5y0uS53KEaajg6wqsSJGQ", callContext.id);
// EventsSummary = Get_AdminEventsList.Response
model.variables.eventsSummaryVar = model.variables.get_AdminEventsListDataAct.responseOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v4CDsXtPQ0SP6JFUvxTH9Q", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mEYh14v6SE28CTVzDVhElw", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.FilterEvents$vars", [{
name: "YearFilteredList",
attrName: "yearFilteredListVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.GetAdminOrbitEvents_ScreenList();
},
complexType: Connect2_OrbitMobile_MUIModel.GetAdminOrbitEvents_ScreenList
}]);
Controller.prototype._onHandle_ApplySort$Action = function (in_IsSortASCIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ApplySort");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnHandle_ApplySort$vars"))());
vars.value.in_IsSortASCInLocal = in_IsSortASCIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:BzsJ3jthAE+2MMjV9TxN0g:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.BzsJ3jthAE+2MMjV9TxN0g:0WsDVZ1BOnYqJq9Zvf0Tyg", "Connect2_OrbitMobile_MUI", "OnHandle_ApplySort", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8zPbhfMud0uT1KF3sBJ_wA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1sOGcFOrYkib3p56E4uGjw", callContext.id);
// Execute Action: OnToggle_SortPopup
controller._onToggle_SortPopup$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:V5NCFYTdcEaCDB43fxBwkA", callContext.id);
// Execute Action: SetAndSortEvents
controller._setAndSortEvents$Action(vars.value.in_IsSortASCInLocal, false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H_z7N1YffEKFqMT3TY6W9g", callContext.id);
// Execute Action: OnApplicationEvent_ApplySortBy
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ApplySortBy$Action(vars.value.in_IsSortASCInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+kLw3p1+i02rD6_S6WjzqA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BzsJ3jthAE+2MMjV9TxN0g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BzsJ3jthAE+2MMjV9TxN0g", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnHandle_ApplySort$vars", [{
name: "In_IsSortASC",
attrName: "in_IsSortASCInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onHandle_EventCardClicked$Action = function (eventSummaryIn, in_EventFriendlyTypeIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_EventCardClicked");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnHandle_EventCardClicked$vars"))());
vars.value.eventSummaryInLocal = eventSummaryIn.clone();
vars.value.in_EventFriendlyTypeInLocal = in_EventFriendlyTypeIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hqtP4K1gKk+UguphphFHhg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.hqtP4K1gKk+UguphphFHhg:Z0VNBacwzT3Gsm3GaBhK7g", "Connect2_OrbitMobile_MUI", "OnHandle_EventCardClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+glh9tMsYkmDbXsLqcaxzQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TqNcade+j0mSUrXlU9R8YQ", callContext.id);
// Trigger Event: NavigateTo_EventDetail
return controller.navigateTo_EventDetail$Action(vars.value.eventSummaryInLocal.eventIdAttr, vars.value.eventSummaryInLocal.titleAttr, vars.value.eventSummaryInLocal.eventInfoAttr.startEventDateAttr, vars.value.eventSummaryInLocal.eventInfoAttr.endEventDateAttr, vars.value.eventSummaryInLocal.eventInfoAttr.eventLocationAttr, vars.value.in_EventFriendlyTypeInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Awf3HHrVSU+DAh+MJpCtEg", callContext.id);
// Execute Action: OnApplicationEvent_ClickEvent
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ClickEvent$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_ClickEventRec();
rec.eventIdAttr = vars.value.eventSummaryInLocal.eventIdAttr;
rec.eventTitleAttr = vars.value.eventSummaryInLocal.titleAttr;
rec.eventLocationAttr = vars.value.eventSummaryInLocal.eventInfoAttr.eventLocationAttr;
rec.eventStartDateAttr = vars.value.eventSummaryInLocal.eventInfoAttr.startEventDateAttr;
rec.eventEndDateAttr = vars.value.eventSummaryInLocal.eventInfoAttr.endEventDateAttr;
return rec;
}(), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3keZxI5ugUaqMjEQMoB2_g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hqtP4K1gKk+UguphphFHhg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hqtP4K1gKk+UguphphFHhg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnHandle_EventCardClicked$vars", [{
name: "EventSummary",
attrName: "eventSummaryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_BLModel.Event_ScreenRec();
},
complexType: Connect2_OrbitMobile_BLModel.Event_ScreenRec
}, {
name: "In_EventFriendlyType",
attrName: "in_EventFriendlyTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._sortEvents$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SortEvents");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uJpP5FxUHU+znT9arjDsWg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.uJpP5FxUHU+znT9arjDsWg:NWkDGpFZ+e0xcLk7K4R3lA", "Connect2_OrbitMobile_MUI", "SortEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c7bzy0Qd20yokiHzKo70eg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FBmcs0PPvEejZzISDxOPGg", callContext.id);
// Execute Action: ListSort
OS.SystemActions.listSort(model.variables.eventsSummaryVar, function (p) {
return p.orbitSummaryItemAttr.dateTimeAttr;
}, model.variables.sortEventsASCVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BL3PirY630+2pVuIe1+w0Q", callContext.id);
// Execute Action: ScrollContentToTop
Connect2_OrbitMobile_MUIController.default.scrollContentToTop$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pR5NU6Johk6j4pUtNxtuGA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uJpP5FxUHU+znT9arjDsWg", callContext.id);
}

};
Controller.prototype._onToggle_FilterPopup$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnToggle_FilterPopup");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:k5w0+xWNXEWYsHb5dOgXjw:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.k5w0+xWNXEWYsHb5dOgXjw:fHjifJB628GsiJZUXNu9EQ", "Connect2_OrbitMobile_MUI", "OnToggle_FilterPopup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jPDTJWqoJEyaTZf8LqXBAw", callContext.id);
// Has data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vwg8oFa2Z0q8etNmN6IAeQ", callContext.id) && !(model.variables.isFetchingDataVar))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w38mHdBeg06u31EiNofMZQ", callContext.id);
// Popup_FiltersOpened = notPopup_FiltersOpened
model.variables.popup_FiltersOpenedVar = !(model.variables.popup_FiltersOpenedVar);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0m8A9MWjeEKbKlTHv7nuSg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XSETMbLc3ES5gjSXB5IC9Q", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:k5w0+xWNXEWYsHb5dOgXjw", callContext.id);
}

};
Controller.prototype._onAfterFetch_Get_AdminEventsList$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_Get_AdminEventsList");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:o3pI_CvbZEmzzxDQMWBFkw:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.o3pI_CvbZEmzzxDQMWBFkw:Wy_WEtI0WdLG1M4R2kzThw", "Connect2_OrbitMobile_MUI", "OnAfterFetch_Get_AdminEventsList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JWikoRlnG0GRlAjQmWHTGA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8eJ7TDzL_E6TLvuDjpQbGQ", callContext.id);
// Execute Action: FilterEvents
controller._filterEvents$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wE9oUIvX5UuND72HU4G9jA", callContext.id);
// Execute Action: SetAndSortEvents
controller._setAndSortEvents$Action(true, false, callContext);
// Set Year Filters
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KMTFZ3EbiEudXc7qqmkBGQ", callContext.id);
// YearsSelection = Get_AdminEventsList.YearFilter
model.variables.yearsSelectionVar = model.variables.get_AdminEventsListDataAct.yearFilterOut;
// Finished Fetching
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FAIjbBIdoU26SrQrInnY9Q", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uZyWQIYoUEuciz2c6SkARQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:o3pI_CvbZEmzzxDQMWBFkw", callContext.id);
}

};

Controller.prototype.resetFiltersAndSort$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._resetFiltersAndSort$Action, callContext);

};
Controller.prototype.componentDidUpdate_Sort$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._componentDidUpdate_Sort$Action, callContext);

};
Controller.prototype.componentDidUpdate_Filters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._componentDidUpdate_Filters$Action, callContext);

};
Controller.prototype.onHandle_ApplyFilters$Action = function (in_SelectedFilterIn, in_SelectedYearsIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ApplyFilters$Action, callContext, in_SelectedFilterIn, in_SelectedYearsIn);

};
Controller.prototype.onToggle_SortPopup$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onToggle_SortPopup$Action, callContext);

};
Controller.prototype.setAndSortEvents$Action = function (isSortASCIn, isForceSortIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setAndSortEvents$Action, callContext, isSortASCIn, isForceSortIn);

};
Controller.prototype.refresh_GetEventsByMemberId$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refresh_GetEventsByMemberId$Action, callContext);

};
Controller.prototype.getPopupMeasurements$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getPopupMeasurements$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.filterEvents$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._filterEvents$Action, callContext);

};
Controller.prototype.onHandle_ApplySort$Action = function (in_IsSortASCIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ApplySort$Action, callContext, in_IsSortASCIn);

};
Controller.prototype.onHandle_EventCardClicked$Action = function (eventSummaryIn, in_EventFriendlyTypeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_EventCardClicked$Action, callContext, eventSummaryIn, in_EventFriendlyTypeIn);

};
Controller.prototype.sortEvents$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._sortEvents$Action, callContext);

};
Controller.prototype.onToggle_FilterPopup$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onToggle_FilterPopup$Action, callContext);

};
Controller.prototype.onAfterFetch_Get_AdminEventsList$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_Get_AdminEventsList$Action, callContext);

};
Controller.prototype.navigateTo_EventDetail$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gsvXRoYDGUKLqTlTbKlOFA:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA:3HoUgFFZNBz79txQ+Fnk_A", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks_AdminFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Fihq8GAG4EWOA0SZ_Adj7w:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w:KM61uojbL+RL37pWhT_I6Q", "Connect2_OrbitMobile_MUI", "ScreenBlock_AdminLanding", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Fihq8GAG4EWOA0SZ_Adj7w", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$controller.GetPopupMeasurements.GetMeasurementsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let hH = document.querySelector(".header");
if(hH){
    $parameters.Top = hH.offsetHeight;
    $parameters.Left = (hH.offsetWidth / 2) - 10;
}
let fT = document.querySelector(".footer");
if(fT){
    $parameters.Bottom = fT.offsetHeight;
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"kILAxUG5ikOUTHnPwZmRCg": {
getter: function (varBag, idService) {
return varBag.vars.value.default_YearsVar;
}
},
"tA1zurPxqUqBZBPZV1IIlw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SelectedFilterInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"7CW+p4acWES0ybUfnchP_Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SelectedYearsInLocal;
}
},
"CRLPKKnGrUSBASaGcTn4XA": {
getter: function (varBag, idService) {
return varBag.listFilter_SelectedYearsVar.value;
}
},
"qS+DI1iLPEKeo6qz8CgAiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isSortASCInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tqbp64KetUuX9J1SSOYodA": {
getter: function (varBag, idService) {
return varBag.vars.value.isForceSortInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"caBdi6A9M0SlZrz+2ZFBRw": {
getter: function (varBag, idService) {
return varBag.getMeasurementsJSResult.value;
}
},
"ZPUf0LXudU+6UdAiPENZQQ": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"i+J7YPTMwEiNjSW8SpMRkw": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"Rc4iHGLUmk6CXHsuGxnWLA": {
getter: function (varBag, idService) {
return varBag.vars.value.yearFilteredListVar;
}
},
"P7XXB_cQPkWUSajfAi6pqw": {
getter: function (varBag, idService) {
return varBag.listFilter_MoreThan8DaysAgoVar.value;
}
},
"igf+UEZxB0KRyxjsAezvJQ": {
getter: function (varBag, idService) {
return varBag.listFilter_Last8DaysAndFutureVar.value;
}
},
"bl6rgL6Z7kCM6K3wGfl4HQ": {
getter: function (varBag, idService) {
return varBag.listFilter_YearVar.value;
}
},
"zmBjq44rO0O1wnBPqvFq8Q": {
getter: function (varBag, idService) {
return varBag.listFilter_YearFiltersVar.value;
}
},
"dS5RPQKIB0yj9MvUwmju4A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsSortASCInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"LhUQEqWk_EGCrBHCVUB63w": {
getter: function (varBag, idService) {
return varBag.vars.value.eventSummaryInLocal;
}
},
"E3ALXqo3XUSij8pmtqJ7tg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_EventFriendlyTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rI7KeG7UdE2G+wcsoZ_fow": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"fi8wiB3T8Uau4SZ2eB4uNQ": {
getter: function (varBag, idService) {
return varBag.model.variables.eventsSummaryVar;
}
},
"ngHz_Oz3vkqfWqF21QPQ+w": {
getter: function (varBag, idService) {
return varBag.model.variables.userFirstNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2pBtCm7dAU6qiVhHcPaFTw": {
getter: function (varBag, idService) {
return varBag.model.variables.userMemberIdVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"znUQ0D3A_kKo5ETEmGH9Hg": {
getter: function (varBag, idService) {
return varBag.model.variables.eventFilterVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"eW0a5MW65UiZ5o8CdQF1mg": {
getter: function (varBag, idService) {
return varBag.model.variables.sortEventsASCVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FltUEYmPvkiYHyAK1AdteA": {
getter: function (varBag, idService) {
return varBag.model.variables.yearsSelectionVar;
}
},
"UBXOQEEci0CiAxBRaL5Wcw": {
getter: function (varBag, idService) {
return varBag.model.variables.popup_SortByOpenedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"iw_pTnPhOU6I8RMRgN_bvQ": {
getter: function (varBag, idService) {
return varBag.model.variables.popup_FiltersOpenedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nHUG4LCUh0u0pePdBsgKjg": {
getter: function (varBag, idService) {
return varBag.model.variables.popupMeasurementsVar;
}
},
"gxQUB9EQzEeMI1j4g1ymZg": {
getter: function (varBag, idService) {
return varBag.model.variables.get_AdminEventsListDataAct;
}
},
"duio8H53oE6SoFM4BsY79g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"3WCvBx8N_0yNwMVRGP_5MQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"MjBDGzzGlUa65kRvyl2Qyw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"LNLqDtF7pUOrxtAPvthP_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"YKGGxd1UjECAJsF3cLpQiw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"31hqh+tVN0GSS+iqMyP8fw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"SN5fSmLsu0acdPX4HCKtFQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_FiltersOpened"));
})(varBag.model, idService);
}
},
"XN3xrHx6TEKWy50LneNGKQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_SortFiltersOpened"));
})(varBag.model, idService);
}
},
"jNLg97Mkmk6lSXbtdhs5yQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"gmmqGnfMZU6B7oraCBR6Ww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"CfEZVO+ng0ikSAwCNTStnw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetchedData"));
})(varBag.model, idService);
}
},
"YPueI+YJo0e2AY+6jNdJXA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasData"));
})(varBag.model, idService);
}
},
"7u9yM6bkKEqN2gmThG0JEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RootPlaceholder_Filters"));
})(varBag.model, idService);
}
},
"hw1QLpfjLkqZR_psxhnvuQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Root_Filters"));
})(varBag.model, idService);
}
},
"bzvjPX91NEeVM14HK_t3VQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Popup_Filters"));
})(varBag.model, idService);
}
},
"BK5e_iEbgkGgOZmNEM4QzA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RootPlaceholder_Sort"));
})(varBag.model, idService);
}
},
"G_FW0_khFE+gkHPHZtP_Sg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Root_Sort"));
})(varBag.model, idService);
}
},
"LZdqkS7NHUGYYzbwI6gzcw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Popup_Sort"));
})(varBag.model, idService);
}
},
"ChCYCtH5kUuDwYpEAl0kxw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"2_dTT6QwSkqm9PyDOwLyTw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"okYlTsvpaka63XAzcMjU3g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"D3ycszJ2nkGwGw+xBK_b9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
