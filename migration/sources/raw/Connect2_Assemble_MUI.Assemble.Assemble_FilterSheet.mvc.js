define("Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model$CountryWithMapPositionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$CountryWithMapPositionList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "Connect2_LegacyShared.controller$GetCacheableRegionSubscribedCountries", "Connect2_LegacyShared.controller$RemoveDiacritics", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ConfirmAction", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "Connect2_Assemble_MUI.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, UBTConnect_UtilsController, NavigationHandlerController, Connect2_Assemble_MUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ScreenTitle", "screenTitleVar", "ScreenTitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Browse by Country";
}, false), 
this.attr("CountryDetailList", "countryDetailListVar", "CountryDetailList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.CountryWithMapPositionList());
}, false, Connect2_Assemble_MUIModel.CountryWithMapPositionList), 
this.attr("TempCountryDetailList", "tempCountryDetailListVar", "TempCountryDetailList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.CountryWithMapPositionList());
}, false, Connect2_Assemble_MUIModel.CountryWithMapPositionList), 
this.attr("ShowLocalitiesList", "showLocalitiesListVar", "ShowLocalitiesList", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("CountryCode", "countryCodeVar", "CountryCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("CountryName", "countryNameVar", "CountryName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SearchTerm", "searchTermVar", "SearchTerm", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsCountriesDataFetched", "isCountriesDataFetchedVar", "IsCountriesDataFetched", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("UserInformation", "userInformationVar", "UserInformation", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Users_Current_GETResponseRec());
}, false, APIDomain_Directory_ISModel.Users_Current_GETResponseRec), 
this.attr("SubdivisionId", "subdivisionIdVar", "SubdivisionId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
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
return {
Input_SearchTerm: OS.Model.ValidationWidgetRecord
};
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return true;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Assemble.Assemble_FilterSheet");
});
define("Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc$model", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "Connect2_LegacyShared.Directory.LocalityListDetail.mvc$view", "Connect2_LegacyShared.Reusable.Spinner.mvc$view", "Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "Connect2_LegacyShared.model$CountryWithMapPositionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$CountryWithMapPositionList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "Connect2_LegacyShared.controller$GetCacheableRegionSubscribedCountries", "Connect2_LegacyShared.controller$RemoveDiacritics", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ConfirmAction", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "Connect2_Assemble_MUI.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, UBTConnect_UtilsController, NavigationHandlerController, React, OSView, Connect2_Assemble_MUI_Assemble_Assemble_FilterSheet_mvc_model, Connect2_Assemble_MUI_Assemble_Assemble_FilterSheet_mvc_controller, OSWidgets, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_LegacyShared_Directory_LocalityListDetail_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view, Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view) {
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
        View.displayName = "Assemble.Assemble_FilterSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_LegacyShared_Directory_LocalityListDetail_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view, Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_Assemble_FilterSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_Assemble_FilterSheet_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-base padding-y-base",
visible: true,
_idProps: {
service: idService,
name: "DIV_Root"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex margin-bottom-s",
visible: true,
_idProps: {
service: idService,
name: "DIV_HeaderRow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterSheet/Link_Back OnClick");
controller.handler_GoBackToCountries$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: model.variables.showLocalitiesListVar,
_idProps: {
service: idService,
name: "Link_Back"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "chevron-left",
iconSize: /*FontSize*/ 0,
style: "icon margin-right-xs",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "font-bold",
value: model.variables.screenTitleVar,
_idProps: {
service: idService,
name: "Expr_ScreenTitle"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(!(model.variables.showLocalitiesListVar), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "assemble-list-filter margin-y-base",
visible: true,
_idProps: {
service: idService,
name: "DIV_SearchByCountry"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
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
uuid: "6",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "search",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Search*/ 8,
mandatory: false,
maxLength: 50,
onChange: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterSheet/Input_SearchTerm OnChange");
return controller.onChange_SearchTearm$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
prompt: "Search Country",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchTermVar, function (value) {
model.variables.searchTermVar = value;
}),
_idProps: {
service: idService,
name: "Input_SearchTerm"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.searchTermVar)]
})), $if(model.variables.isCountriesDataFetchedVar, false, this, function () {
return [$if(!(model.variables.tempCountryDetailListVar.isEmpty), false, this, function () {
return [React.createElement(Connect2_LegacyShared_Directory_LocalityListDetail_mvc_view, {
inputs: {
CountryDetailList: model.variables.tempCountryDetailListVar,
HideHeader: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick_GoToBrowseCountry$Action: function (countryCodeIn, latitudeIn, longitudeIn, zoomIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory/LocalityListDetail OnClick_GoToBrowseCountry");
return controller.handler_GoToBrowseCountry$Action(countryCodeIn, controller.callContext(eventHandlerContext));
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-y-base",
visible: true,
_idProps: {
service: idService,
name: "DIV_NoResultsFound"
},
_widgetRecordProvider: widgetsRecordProvider
}, "No results found")];
})];
}, function () {
return [React.createElement(Connect2_LegacyShared_Reusable_Spinner_mvc_view, {
inputs: {
ShowLoader: !(model.variables.isCountriesDataFetchedVar)
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [React.createElement(Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_view, {
inputs: {
CountryCode: model.variables.countryCodeVar,
CountryName: model.variables.countryNameVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
selectedSubdivision$Action: function (subdivisionIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterLocalityByCountry SelectedSubdivision");
controller.handler_SelectedSubdivision$Action(subdivisionIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
freeSubscriptionAlert$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterLocalityByCountry FreeSubscriptionAlert");
return controller.handler_FreeSubscriptionAlert$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
cancel$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterLocalityByCountry Cancel");
controller.cancel$Action(controller.callContext(eventHandlerContext));
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
uuid: "12",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, {
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
name: "FreeSubscriptionAlert",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "text-align-center assemble-filter-actions margin-top-base",
visible: ((model.variables.countryCodeVar) !== ("")),
_idProps: {
service: idService,
name: "DIV_StickyBottom"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
name: "DIV_Cancel"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterSheet/Button OnClick");
controller.cancel$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Cancel")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
name: "DIV_Apply"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("ButtonApply.Enabled"), function () {
return !(model.variables.subdivisionIdVar.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())));
}, function () {
return model.variables.subdivisionIdVar;
}),
gridProperties: {
width: "100px"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterSheet/ButtonApply OnClick");
return controller.onClickApply$Action(model.variables.subdivisionIdVar, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
name: "ButtonApply"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Apply")))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc$debugger", "Connect2_LegacyShared.model$CountryWithMapPositionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$CountryWithMapPositionList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "Connect2_LegacyShared.controller$GetCacheableRegionSubscribedCountries", "Connect2_LegacyShared.controller$RemoveDiacritics", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ConfirmAction", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "Connect2_Assemble_MUI.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, UBTConnect_UtilsController, NavigationHandlerController, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_Assemble_FilterSheet_mvc_Debugger) {
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
Controller.prototype._onClickApply$Action = function (navigateToSubdivisionIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClickApply");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.OnClickApply$vars"))());
vars.value.navigateToSubdivisionIdInLocal = navigateToSubdivisionIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:CHWmNbVKbUS3fq6nCojSNg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.jY8gbZhDgEKsKGJLQjwj7g/ClientActions.CHWmNbVKbUS3fq6nCojSNg:aJmGJAqdxBXg+5bEWFnb6w", "Connect2_Assemble_MUI", "OnClickApply", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:K5hmdfxP5UKsNPGwcIRSTg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:aF+290I43U6IE_lCqNcIjA", callContext.id);
// Trigger Event: NavigateToSubdivision
return controller.navigateToSubdivision$Action(vars.value.navigateToSubdivisionIdInLocal, vars.value.navigateToSubdivisionIdInLocal.equals(model.variables.userInformationVar.subdivisionAttr.idAttr), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:F2bCR0P1nkKo2W4Dd3DRvA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:CHWmNbVKbUS3fq6nCojSNg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:CHWmNbVKbUS3fq6nCojSNg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.OnClickApply$vars", [{
name: "NavigateToSubdivisionId",
attrName: "navigateToSubdivisionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
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
var getCacheableUserInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCacheableUserInfoVar = getCacheableUserInfoVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:h_AXQmH8c0uMi775_JHoJQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.jY8gbZhDgEKsKGJLQjwj7g/ClientActions.h_AXQmH8c0uMi775_JHoJQ:7Fqb+dwYJSUt7+NIqJqP8A", "Connect2_Assemble_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:7N3n1r3IAESpL0s7PCXooA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:qQWgrFttsESU0a5Jh974jQ", callContext.id);
// Execute Action: GetCacheableUserInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableUserInfo$Action(callContext).then(function (value) {
getCacheableUserInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:+WrVXdWEVUCS3Zb8BHS7gg", callContext.id);
// UserInformation = GetCacheableUserInfo.UserInformation
model.variables.userInformationVar = getCacheableUserInfoVar.value.userInformationOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:YNKa_CDn00mMGCkFjSSKqQ", callContext.id);
// Execute Action: FetchCountries
return controller._fetchCountries$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Ta0M0zkiZU6WAQ5DBxNTkA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:h_AXQmH8c0uMi775_JHoJQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:h_AXQmH8c0uMi775_JHoJQ", callContext.id);
throw ex;

});
};
Controller.prototype._onChange_SearchTearm$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_SearchTearm");
callContext = controller.callContext(callContext);
var getCacheableRegionSubscribedCountriesVar = new OS.DataTypes.VariableHolder();
var removeDiacriticsVar = new OS.DataTypes.VariableHolder();
var listFilterLocalityVar = new OS.DataTypes.VariableHolder();
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCacheableRegionSubscribedCountriesVar = getCacheableRegionSubscribedCountriesVar;
varBag.removeDiacriticsVar = removeDiacriticsVar;
varBag.listFilterLocalityVar = listFilterLocalityVar;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:tHOXZej5CUSGf2FJKpwLhg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.jY8gbZhDgEKsKGJLQjwj7g/ClientActions.tHOXZej5CUSGf2FJKpwLhg:Pkg3BUKRSr3A9DeO1XXWjw", "Connect2_Assemble_MUI", "OnChange_SearchTearm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ItVCNsQTeUS6HmeBnobaKA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:YiufmcBihEqZNs40MbnlOQ", callContext.id) && (model.variables.searchTermVar === ""))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:LElE5QyYfUWj4JdLBaMVTQ", callContext.id);
// Execute Action: Cache_UserInfo_Get
model.flush();
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:WQ++XUmGh0GeWb+zy4cjow", callContext.id);
// Execute Action: GetCacheableRegionSubscribedCountries
model.flush();
return Connect2_LegacySharedController.default.getCacheableRegionSubscribedCountries$Action(cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionRegionIdAttr, callContext).then(function (value) {
getCacheableRegionSubscribedCountriesVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:3cCW3PFRy0uHv_+aXh8WEQ", callContext.id);
// CountryDetailList = GetCacheableRegionSubscribedCountries.CountryWithMapPosition
model.variables.countryDetailListVar = getCacheableRegionSubscribedCountriesVar.value.countryWithMapPositionOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:3cCW3PFRy0uHv_+aXh8WEQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TempCountryDetailList = CountryDetailList
model.variables.tempCountryDetailListVar = model.variables.countryDetailListVar;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:aAt7zLQ4r0C3iEI_8zUJOg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:LTiqruZ6A0ujGL78DN09wQ", callContext.id);
// Execute Action: RemoveDiacritics
removeDiacriticsVar.value = Connect2_LegacySharedController.default.removeDiacritics$Action(OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.trim(model.variables.searchTermVar)), callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:2N_t4hL6lE+9h9igol0KSA", callContext.id);
// Execute Action: ListFilterLocality
listFilterLocalityVar.value = OS.SystemActions.listFilter(model.variables.countryDetailListVar, function (p) {
return ((OS.BuiltinFunctions.index(p.nameAttr, removeDiacriticsVar.value.processedTextOut, 0, false, true)) !== (-1));
}, callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:2jJWnm1HrkeuSrMrwon4mA", callContext.id);
// TempCountryDetailList = ListFilterLocality.FilteredList
model.variables.tempCountryDetailListVar = listFilterLocalityVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:G0zAfw2DW0Cd5s0AwGAORg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:tHOXZej5CUSGf2FJKpwLhg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:tHOXZej5CUSGf2FJKpwLhg", callContext.id);
throw ex;

});
};
Controller.prototype._handler_GoBackToCountries$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_GoBackToCountries");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:7mjwfiqRiUatsnQM5ety3w:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.jY8gbZhDgEKsKGJLQjwj7g/ClientActions.7mjwfiqRiUatsnQM5ety3w:7LMYrVKO+AY2R0BGNGuj8A", "Connect2_Assemble_MUI", "Handler_GoBackToCountries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:GnbKupqMJ0W+Vs6E+2KA4g", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:dAcvgZe4WUyphYdi_SAAUw", callContext.id);
// ShowLocalitiesList = False
model.variables.showLocalitiesListVar = false;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:dAcvgZe4WUyphYdi_SAAUw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScreenTitle = "Browse by Country"
model.variables.screenTitleVar = "Browse by Country";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:dAcvgZe4WUyphYdi_SAAUw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// SubdivisionId = NullIdentifier
model.variables.subdivisionIdVar = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:dAcvgZe4WUyphYdi_SAAUw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// CountryCode = ""
model.variables.countryCodeVar = "";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:e8CwSIs18kKR9xcpdxBc3g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:7mjwfiqRiUatsnQM5ety3w", callContext.id);
}

};
Controller.prototype._handler_SelectedSubdivision$Action = function (inSelectedSubdivisionIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SelectedSubdivision");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.Handler_SelectedSubdivision$vars"))());
vars.value.inSelectedSubdivisionIdInLocal = inSelectedSubdivisionIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:TKWnirPD30S7mEDFuP3qdg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.jY8gbZhDgEKsKGJLQjwj7g/ClientActions.TKWnirPD30S7mEDFuP3qdg:eKwSuPWZg+NJYAMhGddaGA", "Connect2_Assemble_MUI", "Handler_SelectedSubdivision", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Xp6vqhfv0EuEUvs9d0btoQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:2HUFoxZ8s0qu8H8M8QJ_sg", callContext.id);
// SubdivisionId = InSelectedSubdivisionId
model.variables.subdivisionIdVar = vars.value.inSelectedSubdivisionIdInLocal;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:XMimH1LCOUOrUolo_Lv6Og", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:TKWnirPD30S7mEDFuP3qdg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.Handler_SelectedSubdivision$vars", [{
name: "InSelectedSubdivisionId",
attrName: "inSelectedSubdivisionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._fetchCountries$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("FetchCountries");
callContext = controller.callContext(callContext);
var getCacheableRegionSubscribedCountriesVar = new OS.DataTypes.VariableHolder();
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCacheableRegionSubscribedCountriesVar = getCacheableRegionSubscribedCountriesVar;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:wlRyp1_ma0y8A1zyzojj4w:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.jY8gbZhDgEKsKGJLQjwj7g/ClientActions.wlRyp1_ma0y8A1zyzojj4w:w2kUdCahMmze6LkNNu2iCA", "Connect2_Assemble_MUI", "FetchCountries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:FYMfIi2mv0y1SJLgwLi3RQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:q2qzZlXW90Cjy2ILBeLcnw", callContext.id);
// IsCountriesDataFetched = False
model.variables.isCountriesDataFetchedVar = false;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:WcH277hG70KV2PC8i+oLBQ", callContext.id);
// Execute Action: Cache_UserInfo_Get
model.flush();
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:D8OT0p5jDkeHw72NvUn7Rw", callContext.id);
// Execute Action: GetCacheableRegionSubscribedCountries
model.flush();
return Connect2_LegacySharedController.default.getCacheableRegionSubscribedCountries$Action(cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionRegionIdAttr, callContext).then(function (value) {
getCacheableRegionSubscribedCountriesVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:NIgeoZt2iES7DS+KOT3K7Q", callContext.id);
// CountryDetailList = GetCacheableRegionSubscribedCountries.CountryWithMapPosition
model.variables.countryDetailListVar = getCacheableRegionSubscribedCountriesVar.value.countryWithMapPositionOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:NIgeoZt2iES7DS+KOT3K7Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TempCountryDetailList = CountryDetailList
model.variables.tempCountryDetailListVar = model.variables.countryDetailListVar;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ZXBIHAuErEGY3co0jCTZig", callContext.id);
// IsCountriesDataFetched = True
model.variables.isCountriesDataFetchedVar = true;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:OqR0NL38Z0ma8flWECVdcw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:wlRyp1_ma0y8A1zyzojj4w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:wlRyp1_ma0y8A1zyzojj4w", callContext.id);
throw ex;

});
};
Controller.prototype._handler_GoToBrowseCountry$Action = function (inCountryCodeIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_GoToBrowseCountry");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.Handler_GoToBrowseCountry$vars"))());
vars.value.inCountryCodeInLocal = inCountryCodeIn;
var showFreeSubscriptionAlertVar = new OS.DataTypes.VariableHolder();
var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
var listFilterCountryVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.showFreeSubscriptionAlertVar = showFreeSubscriptionAlertVar;
varBag.hasAccessToRegionVar = hasAccessToRegionVar;
varBag.listFilterCountryVar = listFilterCountryVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:YI_ZubR_yk+Sg+QoRSdoXg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.jY8gbZhDgEKsKGJLQjwj7g/ClientActions.YI_ZubR_yk+Sg+QoRSdoXg:S8cLFK8acfEHzS1oxxLPGg", "Connect2_Assemble_MUI", "Handler_GoToBrowseCountry", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:RSL3saPnmU2RdgGIG6jOOA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:1FfxTnAEVUieJq9bdKYLPw", callContext.id) && ((vars.value.inCountryCodeInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:t+n+bn_Og0+JF_55Awz2RA", callContext.id);
// Execute Action: HasAccessToRegion
model.flush();
return Connect2_Assemble_MUIController.default.hasAccessToRegion$Action(vars.value.inCountryCodeInLocal, OS.DataTypes.LongInteger.defaultValue, callContext).then(function (value) {
hasAccessToRegionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:221jBa3zWE27yHZkZlUFFQ", callContext.id) && !(hasAccessToRegionVar.value.hasAccessOut))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:UM4aaOD1R0upvl9Gn4CQAg", callContext.id);
// Execute Action: ShowFreeSubscriptionAlert
model.flush();
return NavigationHandlerController.default.confirmAction$Action(idService.getId("FreeSubscriptionAlert"), callContext).then(function (value) {
showFreeSubscriptionAlertVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:xivAw6tpEk+Caifga4A7UA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:tKjtrGEhrkO1pAbjleHSXw", callContext.id);
// Execute Action: ListFilterCountry
listFilterCountryVar.value = OS.SystemActions.listFilter(model.variables.tempCountryDetailListVar, function (p) {
return (p.codeAttr === vars.value.inCountryCodeInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Tuu5JNPGg02XasuhnuJbsg", callContext.id);
// CountryCode = InCountryCode
model.variables.countryCodeVar = vars.value.inCountryCodeInLocal;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Tuu5JNPGg02XasuhnuJbsg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CountryName = ListFilterCountry.FilteredList.Current.Name
model.variables.countryNameVar = listFilterCountryVar.value.filteredListOut.getCurrent(callContext.iterationContext).nameAttr;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:s7UDdTEz40qfap7pioBO0g", callContext.id);
// ScreenTitle = "Filter by Locality"
model.variables.screenTitleVar = "Filter by Locality";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:PCbEucB2ykuQ_+5LdbKDVA", callContext.id);
// ShowLocalitiesList = True
model.variables.showLocalitiesListVar = true;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:t0ma9rQ5vEq00+BWdst+7Q", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:STI4YX42QEqcZcp+KknEqw", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:YI_ZubR_yk+Sg+QoRSdoXg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:YI_ZubR_yk+Sg+QoRSdoXg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.Handler_GoToBrowseCountry$vars", [{
name: "InCountryCode",
attrName: "inCountryCodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_FreeSubscriptionAlert$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FreeSubscriptionAlert");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:T3YH685BG0qpbEWdJ9QPPw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.jY8gbZhDgEKsKGJLQjwj7g/ClientActions.T3YH685BG0qpbEWdJ9QPPw:MheOCZri1HrWqPGukp+Ylg", "Connect2_Assemble_MUI", "Handler_FreeSubscriptionAlert", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Nm9PqlraLEqE5TTZXAB6+w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:pANLnxjkZkWQ2aaEVDdivQ", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:uwzanuXKS02TwvKXsvsmJg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:T3YH685BG0qpbEWdJ9QPPw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:T3YH685BG0qpbEWdJ9QPPw", callContext.id);
throw ex;

});
};

Controller.prototype.onClickApply$Action = function (navigateToSubdivisionIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClickApply$Action, callContext, navigateToSubdivisionIdIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onChange_SearchTearm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_SearchTearm$Action, callContext);

};
Controller.prototype.handler_GoBackToCountries$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_GoBackToCountries$Action, callContext);

};
Controller.prototype.handler_SelectedSubdivision$Action = function (inSelectedSubdivisionIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SelectedSubdivision$Action, callContext, inSelectedSubdivisionIdIn);

};
Controller.prototype.fetchCountries$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._fetchCountries$Action, callContext);

};
Controller.prototype.handler_GoToBrowseCountry$Action = function (inCountryCodeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_GoToBrowseCountry$Action, callContext, inCountryCodeIn);

};
Controller.prototype.handler_FreeSubscriptionAlert$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FreeSubscriptionAlert$Action, callContext);

};
Controller.prototype.cancel$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateToSubdivision$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:jY8gbZhDgEKsKGJLQjwj7g:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.jY8gbZhDgEKsKGJLQjwj7g:8AKfyQQdTcNTCDuA3NZTcw", "Connect2_Assemble_MUI", "Assemble_FilterSheet", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:jY8gbZhDgEKsKGJLQjwj7g", callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/Assemble_FilterSheet On Ready");
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
return Connect2_Assemble_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_Assemble_MUILanguageResources);
});

define("Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"qjIv62YnlkW+lp2vF5tZ9g": {
getter: function (varBag, idService) {
return varBag.vars.value.navigateToSubdivisionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"qQWgrFttsESU0a5Jh974jQ": {
getter: function (varBag, idService) {
return varBag.getCacheableUserInfoVar.value;
}
},
"WQ++XUmGh0GeWb+zy4cjow": {
getter: function (varBag, idService) {
return varBag.getCacheableRegionSubscribedCountriesVar.value;
}
},
"LTiqruZ6A0ujGL78DN09wQ": {
getter: function (varBag, idService) {
return varBag.removeDiacriticsVar.value;
}
},
"2N_t4hL6lE+9h9igol0KSA": {
getter: function (varBag, idService) {
return varBag.listFilterLocalityVar.value;
}
},
"LElE5QyYfUWj4JdLBaMVTQ": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"70TwkAzjIEib9X5pAIFq1w": {
getter: function (varBag, idService) {
return varBag.vars.value.inSelectedSubdivisionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"D8OT0p5jDkeHw72NvUn7Rw": {
getter: function (varBag, idService) {
return varBag.getCacheableRegionSubscribedCountriesVar.value;
}
},
"WcH277hG70KV2PC8i+oLBQ": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"0iU_jwm+dE60i_9bOSJ7zw": {
getter: function (varBag, idService) {
return varBag.vars.value.inCountryCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UM4aaOD1R0upvl9Gn4CQAg": {
getter: function (varBag, idService) {
return varBag.showFreeSubscriptionAlertVar.value;
}
},
"t+n+bn_Og0+JF_55Awz2RA": {
getter: function (varBag, idService) {
return varBag.hasAccessToRegionVar.value;
}
},
"tKjtrGEhrkO1pAbjleHSXw": {
getter: function (varBag, idService) {
return varBag.listFilterCountryVar.value;
}
},
"3n0I+xeSNUaxlzQn68fcjQ": {
getter: function (varBag, idService) {
return varBag.model.variables.screenTitleVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IdVUbu0zDUiB4VEhCXIyZw": {
getter: function (varBag, idService) {
return varBag.model.variables.countryDetailListVar;
}
},
"d+oKC2vrqEySICGLw2qLmQ": {
getter: function (varBag, idService) {
return varBag.model.variables.tempCountryDetailListVar;
}
},
"DZXYd8XnWk24eyyGjVdNGg": {
getter: function (varBag, idService) {
return varBag.model.variables.showLocalitiesListVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"f4y+9iGJQEa8S7109uqxig": {
getter: function (varBag, idService) {
return varBag.model.variables.countryCodeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"M2Q0dzfODUid8kD7Y5XreA": {
getter: function (varBag, idService) {
return varBag.model.variables.countryNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RbpCM8HWAUqENDQB4xRzHw": {
getter: function (varBag, idService) {
return varBag.model.variables.searchTermVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GUccSB1FtEGjEQvRGt78Uw": {
getter: function (varBag, idService) {
return varBag.model.variables.isCountriesDataFetchedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1BXZoK36EU+Lcq8OQzFMdA": {
getter: function (varBag, idService) {
return varBag.model.variables.userInformationVar;
}
},
"FW2wrsQLVEORo9CFN6Cmuw": {
getter: function (varBag, idService) {
return varBag.model.variables.subdivisionIdVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"+Ld_qwpmGkuDkAFDNJEZNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Root"));
})(varBag.model, idService);
}
},
"BegxoVmD0kGnlIpLaII5zA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_HeaderRow"));
})(varBag.model, idService);
}
},
"V8PvXwPgok2FzHMxA_hZAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Link_Back"));
})(varBag.model, idService);
}
},
"gUjqEMkaFECyJfJm_It5zA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Expr_ScreenTitle"));
})(varBag.model, idService);
}
},
"sBmecyNGVUebddYBr4Tymg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_SearchByCountry"));
})(varBag.model, idService);
}
},
"yqPmEZJhHUODYQdy3N+CYQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"LDdrRO9POUyK_hHV7MwmAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"cT98lVsZVUqzYmPfPBAKtg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_SearchTerm"));
})(varBag.model, idService);
}
},
"4BcQokQWDEG5Wj2k0AE2JA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CountriesDataFetched"));
})(varBag.model, idService);
}
},
"o7Z8desCK0qOvKQKFWHMRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_NoResultsFound"));
})(varBag.model, idService);
}
},
"izYLFUjnnEyHCa+pQy33Lw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
})(varBag.model, idService);
}
},
"djXTjMwnjEyK1WPJVFciOg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_StickyBottom"));
})(varBag.model, idService);
}
},
"qMzkpbi5GEevihc9y3TD2w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Cancel"));
})(varBag.model, idService);
}
},
"Q_nTc9kw1EC4dejZFGnk4Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Apply"));
})(varBag.model, idService);
}
},
"9vJbBV5kr0mGsuG_VAGtZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonApply"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
