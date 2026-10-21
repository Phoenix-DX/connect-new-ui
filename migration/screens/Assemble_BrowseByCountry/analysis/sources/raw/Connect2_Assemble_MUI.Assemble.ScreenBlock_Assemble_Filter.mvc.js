define("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model$CountryWithMapPositionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$CountryWithMapPositionList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.controller$RemoveDiacritics", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "Connect2_LegacyShared.controller$GetCacheableRegionSubscribedCountries", "NavigationHandler.controller$PreventNavigation", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_Assemble_MUI.controller$HasAccessToRegion", "NavigationHandler.controller$ConfirmAction", "Connect2_LegacyShared.controller$GetCacheableUserInfo"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, NavigationHandlerController, Connect2_Assemble_MUIController) {
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
Input_SearchTearm: OS.Model.ValidationWidgetRecord
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
return new OS.Model.ModelFactory(Model, "Assemble.ScreenBlock_Assemble_Filter");
});
define("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$model", "Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$controller", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "Connect2_LegacyShared.Directory.LocalityListDetail.mvc$view", "Connect2_LegacyShared.Reusable.Spinner.mvc$view", "Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "Connect2_LegacyShared.model$CountryWithMapPositionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$CountryWithMapPositionList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.controller$RemoveDiacritics", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "Connect2_LegacyShared.controller$GetCacheableRegionSubscribedCountries", "NavigationHandler.controller$PreventNavigation", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_Assemble_MUI.controller$HasAccessToRegion", "NavigationHandler.controller$ConfirmAction", "Connect2_LegacyShared.controller$GetCacheableUserInfo"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, NavigationHandlerController, React, OSView, Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_model, Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_controller, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_LegacyShared_Directory_LocalityListDetail_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view, Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "Assemble.ScreenBlock_Assemble_Filter";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_LegacyShared_Directory_LocalityListDetail_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view, Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_Layout_mvc_view, {
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
name: "Layout",
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
MenuAction: Connect2_Assemble_MUIModel.staticEntities.menuAction.back
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-ellipsis",
visible: true,
_idProps: {
service: idService,
name: "DIV_ScreenTitle"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.screenTitleVar,
_idProps: {
service: idService,
name: "ScreenTitle2"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [$if(!(model.variables.showLocalitiesListVar), false, this, function () {
return [$if(model.variables.isCountriesDataFetchedVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "assemble-list-filter margin-y-base margin-x-base",
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
alias: "3"
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
extendedProperties: {
autoComplete: "off",
style: "border-width: 0px 0px 1px 0px;"
},
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_Assemble_Filter/Input_SearchTearm OnChange");
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
name: "Input_SearchTearm"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.searchTermVar)]
})), $if(!(model.variables.tempCountryDetailListVar.isEmpty), false, this, function () {
return [React.createElement(Connect2_LegacyShared_Directory_LocalityListDetail_mvc_view, {
inputs: {
HideHeader: true,
CountryDetailList: model.variables.tempCountryDetailListVar
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-x-base",
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [React.createElement(Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_view, {
inputs: {
CountryName: model.variables.countryNameVar,
CountryCode: model.variables.countryCodeVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
},
selectedSubdivision$Action: function (subdivisionIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterLocalityByCountry SelectedSubdivision");
controller.assemble_FilterLocalityByCountrySelectedSubdivisio$Action(subdivisionIdIn, controller.callContext(eventHandlerContext));
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
alias: "6"
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigation$Action: function (backNavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
controller.handler_BackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "14",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
bottomBar: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "text-align-center assemble-filter-actions",
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_Assemble_Filter/Button OnClick");
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
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Cancel")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_Assemble_Filter/ButtonApply OnClick");
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
}, "Apply")))];
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
define("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$debugger", "Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$controller.Handler_BackNavigation.ScrollTopJS", "Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_LegacyShared.model$CountryWithMapPositionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$CountryWithMapPositionList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.controller$RemoveDiacritics", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "Connect2_LegacyShared.controller$GetCacheableRegionSubscribedCountries", "NavigationHandler.controller$PreventNavigation", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_Assemble_MUI.controller$HasAccessToRegion", "NavigationHandler.controller$ConfirmAction", "Connect2_LegacyShared.controller$GetCacheableUserInfo"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, NavigationHandlerController, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_Debugger, Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_controller_Handler_BackNavigation_ScrollTopJS, Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
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
Controller.prototype._onChange_SearchTearm$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_SearchTearm");
callContext = controller.callContext(callContext);
var removeDiacriticsVar = new OS.DataTypes.VariableHolder();
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
var getCacheableRegionSubscribedCountriesVar = new OS.DataTypes.VariableHolder();
var listFilterLocalityVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.removeDiacriticsVar = removeDiacriticsVar;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
varBag.getCacheableRegionSubscribedCountriesVar = getCacheableRegionSubscribedCountriesVar;
varBag.listFilterLocalityVar = listFilterLocalityVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:FgonTWGgukeHWuxgYkewzA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.BkzMn91+9U6WVVt9r8OTcQ/ClientActions.FgonTWGgukeHWuxgYkewzA:8C39YPcS76gCTt4Hu6x6qw", "Connect2_Assemble_MUI", "OnChange_SearchTearm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:rxIPclOg90qQvhKiVKRIRA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ltvGJph7E0uTeBonlBABVQ", callContext.id) && (model.variables.searchTermVar === ""))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:RtkrDGVIGUyvCpn968oCHA", callContext.id);
// Execute Action: Cache_UserInfo_Get
model.flush();
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:t4cEEswnPUK+SYHylDOr7g", callContext.id);
// Execute Action: GetCacheableRegionSubscribedCountries
model.flush();
return Connect2_LegacySharedController.default.getCacheableRegionSubscribedCountries$Action(cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionRegionIdAttr, callContext).then(function (value) {
getCacheableRegionSubscribedCountriesVar.value = value;
});
}).then(function () {
// Set Subscribed Countries
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:yvgYtHoEAU6X8+QRJWVcJQ", callContext.id);
// CountryDetailList = GetCacheableRegionSubscribedCountries.CountryWithMapPosition
model.variables.countryDetailListVar = getCacheableRegionSubscribedCountriesVar.value.countryWithMapPositionOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:yvgYtHoEAU6X8+QRJWVcJQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TempCountryDetailList = CountryDetailList
model.variables.tempCountryDetailListVar = model.variables.countryDetailListVar;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:a1bydTGTC0uayilWz_9S5g", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:d1CqBNX+uUikoSOZ8mSLlg", callContext.id);
// Execute Action: RemoveDiacritics
removeDiacriticsVar.value = Connect2_LegacySharedController.default.removeDiacritics$Action(OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.trim(model.variables.searchTermVar)), callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:XJfOGDcJiEm_4hB+SwEfew", callContext.id);
// Execute Action: ListFilterLocality
listFilterLocalityVar.value = OS.SystemActions.listFilter(model.variables.countryDetailListVar, function (p) {
return ((OS.BuiltinFunctions.index(p.nameAttr, removeDiacriticsVar.value.processedTextOut, 0, false, true)) !== (-1));
}, callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Z+F4x8HU70eyu4nBq3zxSw", callContext.id);
// TempCountryDetailList = ListFilterLocality.FilteredList
model.variables.tempCountryDetailListVar = listFilterLocalityVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:gi53SaJigUW4+OGdKYVNSg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:FgonTWGgukeHWuxgYkewzA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:FgonTWGgukeHWuxgYkewzA", callContext.id);
throw ex;

});
};
Controller.prototype._handler_BackNavigation$Action = function (backNavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_BackNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.Handler_BackNavigation$vars"))());
vars.value.backNavigationEventInLocal = backNavigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:Rq4OY+KkFkCf5z7RdUxTUg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.BkzMn91+9U6WVVt9r8OTcQ/ClientActions.Rq4OY+KkFkCf5z7RdUxTUg:BA_fo4zIMHg0D+LmfjhXfQ", "Connect2_Assemble_MUI", "Handler_BackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:VQgXHcWDT0OQ8lPQMtYxPg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ldtIZ0Z6k0+urzdQGb8uMw", callContext.id) && model.variables.showLocalitiesListVar)) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Tej2rQbHakaZosDj7q4vVA", callContext.id);
// ShowLocalitiesList = False
model.variables.showLocalitiesListVar = false;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Tej2rQbHakaZosDj7q4vVA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScreenTitle = "Browse by Country"
model.variables.screenTitleVar = "Browse by Country";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Tej2rQbHakaZosDj7q4vVA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// SubdivisionId = NullIdentifier
model.variables.subdivisionIdVar = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Tej2rQbHakaZosDj7q4vVA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// CountryCode = ""
model.variables.countryCodeVar = "";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:a6r6mOnOtEmy2nZAOHXzPQ", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:BItvhSv+KESDgz0GYilyjg", callContext.id);
controller.safeExecuteJSNode(Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_controller_Handler_BackNavigation_ScrollTopJS, "ScrollTop", "Handler_BackNavigation", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:f7jQsrJ7FUiPcm+03rI5uQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:f7jQsrJ7FUiPcm+03rI5uQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:Rq4OY+KkFkCf5z7RdUxTUg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.Handler_BackNavigation$vars", [{
name: "BackNavigationEvent",
attrName: "backNavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
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
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:7Rcva8Y8+kePjzdftAqoBQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.BkzMn91+9U6WVVt9r8OTcQ/ClientActions.7Rcva8Y8+kePjzdftAqoBQ:OnMdpQyOWMuJqDWt46RLNw", "Connect2_Assemble_MUI", "Handler_FreeSubscriptionAlert", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:rCaiokGook+pfOuQ5iJNew", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:l6K1j8FAbkSOLTiyPokA3A", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:fd_QTAdsck6sd5vUAiMQnw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:7Rcva8Y8+kePjzdftAqoBQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:7Rcva8Y8+kePjzdftAqoBQ", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.Handler_GoToBrowseCountry$vars"))());
vars.value.inCountryCodeInLocal = inCountryCodeIn;
var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
var listFilterCountryVar = new OS.DataTypes.VariableHolder();
var showFreeSubscriptionAlertVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.hasAccessToRegionVar = hasAccessToRegionVar;
varBag.listFilterCountryVar = listFilterCountryVar;
varBag.showFreeSubscriptionAlertVar = showFreeSubscriptionAlertVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:STuNgJXrcUG2vPz8GmuVWQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.BkzMn91+9U6WVVt9r8OTcQ/ClientActions.STuNgJXrcUG2vPz8GmuVWQ:_48QEHRIYYX1NBWQVr8zNA", "Connect2_Assemble_MUI", "Handler_GoToBrowseCountry", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:xOfZIkbPAk6Qayi_beKUEg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:HnOQ89Iz3UeA1Blr+rllKg", callContext.id) && ((vars.value.inCountryCodeInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:fwTaTfElhEyP859Y8r1G9g", callContext.id);
// Execute Action: HasAccessToRegion
model.flush();
return Connect2_Assemble_MUIController.default.hasAccessToRegion$Action(vars.value.inCountryCodeInLocal, OS.DataTypes.LongInteger.defaultValue, callContext).then(function (value) {
hasAccessToRegionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Cyt+j1mOb0yhmR+BhUBgOg", callContext.id) && !(hasAccessToRegionVar.value.hasAccessOut))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:+EiYdjATDkuyMLfqViGcsg", callContext.id);
// Execute Action: ShowFreeSubscriptionAlert
model.flush();
return NavigationHandlerController.default.confirmAction$Action(idService.getId("FreeSubscriptionAlert"), callContext).then(function (value) {
showFreeSubscriptionAlertVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:LdIjXj69U0q432GistEZMA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:nVMGXt+2+kKE2OefJ6Pp9w", callContext.id);
// Execute Action: ListFilterCountry
listFilterCountryVar.value = OS.SystemActions.listFilter(model.variables.tempCountryDetailListVar, function (p) {
return (p.codeAttr === vars.value.inCountryCodeInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:py398n776km6Pq6zo+NnKw", callContext.id);
// CountryCode = InCountryCode
model.variables.countryCodeVar = vars.value.inCountryCodeInLocal;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:py398n776km6Pq6zo+NnKw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CountryName = ListFilterCountry.FilteredList.Current.Name
model.variables.countryNameVar = listFilterCountryVar.value.filteredListOut.getCurrent(callContext.iterationContext).nameAttr;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:lTyPHHLAREe1tOLOTEcqew", callContext.id);
// ScreenTitle = "Filter by Locality"
model.variables.screenTitleVar = "Filter by Locality";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:fgmTwKhD3kCCNGylNI3MIQ", callContext.id);
// ShowLocalitiesList = True
model.variables.showLocalitiesListVar = true;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:DUllW3hcJ0u+pJw0eRDv6A", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:s53wC1xQ3UGky6QqZHBjWw", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:STuNgJXrcUG2vPz8GmuVWQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:STuNgJXrcUG2vPz8GmuVWQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.Handler_GoToBrowseCountry$vars", [{
name: "InCountryCode",
attrName: "inCountryCodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCacheableUserInfoVar = getCacheableUserInfoVar;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:3u9omwjlaEyy8Q7Ajpw_tw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.BkzMn91+9U6WVVt9r8OTcQ/ClientActions.3u9omwjlaEyy8Q7Ajpw_tw:atY7HKSy0H_ASqH07l7lfA", "Connect2_Assemble_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:uOie8MNJs02z8hsUG11n3Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:1_xUdKPjukC7x1YW5vVEpw", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_Assemble_MUI_Assemble_ScreenBlock_Assemble_Filter_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if WasCurrentViewRestoredFromCache FromCache
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:WiaED1e2uEuGDU4AIbeScw", callContext.id) && (wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut === true))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:5d83YuJ1gUqzT3eUvlFssA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:4BOQf_VmAkiw+SM44p1leg", callContext.id);
// Execute Action: GetCacheableUserInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableUserInfo$Action(callContext).then(function (value) {
getCacheableUserInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:BUjiSVy1E0SZC7m+nh7NEA", callContext.id);
// UserInformation = GetCacheableUserInfo.UserInformation
model.variables.userInformationVar = getCacheableUserInfoVar.value.userInformationOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:viS58pvpz0CswYMZ+NV7Gg", callContext.id);
// Execute Action: FetchCountries
return controller._fetchCountries$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:PePx2Opt306HnR8EBS0DDQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:3u9omwjlaEyy8Q7Ajpw_tw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:3u9omwjlaEyy8Q7Ajpw_tw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._assemble_FilterLocalityByCountrySelectedSubdivisio$Action = function (in_SubdivisionIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Assemble_FilterLocalityByCountrySelectedSubdivisio");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.Assemble_FilterLocalityByCountrySelectedSubdivisio$vars"))());
vars.value.in_SubdivisionIdInLocal = in_SubdivisionIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:QjhTrnQGaEaCxy1wkij+Bg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.BkzMn91+9U6WVVt9r8OTcQ/ClientActions.QjhTrnQGaEaCxy1wkij+Bg:vTb7upAOw0SHUvPwUYQP2w", "Connect2_Assemble_MUI", "Assemble_FilterLocalityByCountrySelectedSubdivisio", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:SFeqJxFqkU664B9BHjeS_w", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:X_LSnIKPC0mVdMaZZW+6ew", callContext.id);
// SubdivisionId = In_SubdivisionId
model.variables.subdivisionIdVar = vars.value.in_SubdivisionIdInLocal;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:SkrjGr85_EmK4yFyzApckw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:QjhTrnQGaEaCxy1wkij+Bg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.Assemble_FilterLocalityByCountrySelectedSubdivisio$vars", [{
name: "In_SubdivisionId",
attrName: "in_SubdivisionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._onClickApply$Action = function (navigateToSubdivisionIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClickApply");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.OnClickApply$vars"))());
vars.value.navigateToSubdivisionIdInLocal = navigateToSubdivisionIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:VY9lzXDvl0WqKQpM+ypLhg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.BkzMn91+9U6WVVt9r8OTcQ/ClientActions.VY9lzXDvl0WqKQpM+ypLhg:rj8Z1Xp7+uAkWC37pmKMUg", "Connect2_Assemble_MUI", "OnClickApply", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:wnxBPobgMkatZy4d_8f6gA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:t19oayfzxUaQ35O5z1h8FQ", callContext.id);
// Trigger Event: NavigateToSubdivision
return controller.navigateToSubdivision$Action(vars.value.navigateToSubdivisionIdInLocal, vars.value.navigateToSubdivisionIdInLocal.equals(model.variables.userInformationVar.subdivisionAttr.idAttr), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:LBCbKm4VKkaMi2iJC_SeNQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:VY9lzXDvl0WqKQpM+ypLhg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:VY9lzXDvl0WqKQpM+ypLhg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.OnClickApply$vars", [{
name: "NavigateToSubdivisionId",
attrName: "navigateToSubdivisionIdInLocal",
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
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:7ocD344ZxUq86xJ9YwXCgw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.BkzMn91+9U6WVVt9r8OTcQ/ClientActions.7ocD344ZxUq86xJ9YwXCgw:39kLB4z4DBv2tHG3424XZQ", "Connect2_Assemble_MUI", "FetchCountries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:eCmckwkBBEKJgCMYnnYRQA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:cCbHyFiQkUaF98O5ELyvgA", callContext.id);
// IsCountriesDataFetched = False
model.variables.isCountriesDataFetchedVar = false;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:464q0toMD0KANiLwXX_ZVw", callContext.id);
// Execute Action: Cache_UserInfo_Get
model.flush();
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:83dll+5x_kqI2AGwJTF6Nw", callContext.id);
// Execute Action: GetCacheableRegionSubscribedCountries
model.flush();
return Connect2_LegacySharedController.default.getCacheableRegionSubscribedCountries$Action(cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionRegionIdAttr, callContext).then(function (value) {
getCacheableRegionSubscribedCountriesVar.value = value;
});
}).then(function () {
// Set Subscribed Countries
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:3ciyE8eZV02ml4G7kMt8Ag", callContext.id);
// CountryDetailList = GetCacheableRegionSubscribedCountries.CountryWithMapPosition
model.variables.countryDetailListVar = getCacheableRegionSubscribedCountriesVar.value.countryWithMapPositionOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:3ciyE8eZV02ml4G7kMt8Ag", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TempCountryDetailList = CountryDetailList
model.variables.tempCountryDetailListVar = model.variables.countryDetailListVar;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:oU5zYgV7YkK3TAx27jxJlg", callContext.id);
// IsCountriesDataFetched = True
model.variables.isCountriesDataFetchedVar = true;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:R+WWL2Z0b0u1Q0W6qRBsnA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:7ocD344ZxUq86xJ9YwXCgw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:7ocD344ZxUq86xJ9YwXCgw", callContext.id);
throw ex;

});
};

Controller.prototype.onChange_SearchTearm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_SearchTearm$Action, callContext);

};
Controller.prototype.handler_BackNavigation$Action = function (backNavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_BackNavigation$Action, callContext, backNavigationEventIn);

};
Controller.prototype.handler_FreeSubscriptionAlert$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FreeSubscriptionAlert$Action, callContext);

};
Controller.prototype.handler_GoToBrowseCountry$Action = function (inCountryCodeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_GoToBrowseCountry$Action, callContext, inCountryCodeIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.assemble_FilterLocalityByCountrySelectedSubdivisio$Action = function (in_SubdivisionIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._assemble_FilterLocalityByCountrySelectedSubdivisio$Action, callContext, in_SubdivisionIdIn);

};
Controller.prototype.onClickApply$Action = function (navigateToSubdivisionIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClickApply$Action, callContext, navigateToSubdivisionIdIn);

};
Controller.prototype.fetchCountries$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._fetchCountries$Action, callContext);

};
Controller.prototype.navigateToSubdivision$Action = function () {
return Promise.resolve();
};
Controller.prototype.cancel$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:BkzMn91+9U6WVVt9r8OTcQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.BkzMn91+9U6WVVt9r8OTcQ:JyawrgAcu63nEc4ZRbEdOA", "Connect2_Assemble_MUI", "ScreenBlock_Assemble_Filter", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:BkzMn91+9U6WVVt9r8OTcQ", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/ScreenBlock_Assemble_Filter On Ready");
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
define("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$controller.Handler_BackNavigation.ScrollTopJS", [], function () {
return function ($actions, $roles, $public) {
window.requestAnimationFrame(
    () => {
        let contentEl = document.querySelector(".content");
        if (contentEl) {
            contentEl.scrollTop = 0;
        }
    }
);
};
});
define("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"d1CqBNX+uUikoSOZ8mSLlg": {
getter: function (varBag, idService) {
return varBag.removeDiacriticsVar.value;
}
},
"RtkrDGVIGUyvCpn968oCHA": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"t4cEEswnPUK+SYHylDOr7g": {
getter: function (varBag, idService) {
return varBag.getCacheableRegionSubscribedCountriesVar.value;
}
},
"XJfOGDcJiEm_4hB+SwEfew": {
getter: function (varBag, idService) {
return varBag.listFilterLocalityVar.value;
}
},
"PxAkaeUOVE2z1fCFSU5QnQ": {
getter: function (varBag, idService) {
return varBag.vars.value.backNavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"BItvhSv+KESDgz0GYilyjg": {
getter: function (varBag, idService) {
return varBag.scrollTopJSResult.value;
}
},
"6fcfX1y5rkScv8UfCf5Ijg": {
getter: function (varBag, idService) {
return varBag.vars.value.inCountryCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fwTaTfElhEyP859Y8r1G9g": {
getter: function (varBag, idService) {
return varBag.hasAccessToRegionVar.value;
}
},
"nVMGXt+2+kKE2OefJ6Pp9w": {
getter: function (varBag, idService) {
return varBag.listFilterCountryVar.value;
}
},
"+EiYdjATDkuyMLfqViGcsg": {
getter: function (varBag, idService) {
return varBag.showFreeSubscriptionAlertVar.value;
}
},
"4BOQf_VmAkiw+SM44p1leg": {
getter: function (varBag, idService) {
return varBag.getCacheableUserInfoVar.value;
}
},
"1_xUdKPjukC7x1YW5vVEpw": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"LfSL0x7FPUC0X_dLNfxomA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SubdivisionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ceReLtHRDUae_nUYq_r+ZA": {
getter: function (varBag, idService) {
return varBag.vars.value.navigateToSubdivisionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"83dll+5x_kqI2AGwJTF6Nw": {
getter: function (varBag, idService) {
return varBag.getCacheableRegionSubscribedCountriesVar.value;
}
},
"464q0toMD0KANiLwXX_ZVw": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"pbttf5CDBU6LrljpFvldSg": {
getter: function (varBag, idService) {
return varBag.model.variables.screenTitleVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"enNW8yyBa0O_FGkdClNwfA": {
getter: function (varBag, idService) {
return varBag.model.variables.countryDetailListVar;
}
},
"xKUGwfQvPEyK9YbAEdURkw": {
getter: function (varBag, idService) {
return varBag.model.variables.tempCountryDetailListVar;
}
},
"LPcUkbUSDEOhjcu6A8WQ1A": {
getter: function (varBag, idService) {
return varBag.model.variables.showLocalitiesListVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gDFtsBrbvECNLLW96E9y3w": {
getter: function (varBag, idService) {
return varBag.model.variables.countryCodeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"R6earCivjE6_hPzs1DTpaw": {
getter: function (varBag, idService) {
return varBag.model.variables.countryNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YNLrCvKSwU6beaXdXCWRWA": {
getter: function (varBag, idService) {
return varBag.model.variables.searchTermVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Bi1nxpN8WU20PulExXsuMQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isCountriesDataFetchedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"AfVVojAS+Ea74KoZvrJAGw": {
getter: function (varBag, idService) {
return varBag.model.variables.userInformationVar;
}
},
"yB+IXjKimE+2tMo4EcDOdQ": {
getter: function (varBag, idService) {
return varBag.model.variables.subdivisionIdVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"_CYKnxsAb0GyvnFX5_kQTA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Layout"));
})(varBag.model, idService);
}
},
"5AjhcFTdrkKbl32jqQS7pQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"wa7ryB4FP06KAGvd4SuEcQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"lO8ddn5J_EuWUlb2rBI4_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"yPpfvNwxyUKZkK03pNSQqQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"g24mLhfw+U+TTzmivFmlGA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_ScreenTitle"));
})(varBag.model, idService);
}
},
"qEVGWdFUI0WjHTx_rbfeUg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ScreenTitle2"));
})(varBag.model, idService);
}
},
"pHDOjwY2QUmuksI2G4eQiw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"vN_M7SIP30y42KN5vuXKoA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"8Im61dY4SkScH14Z6KjwUg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"iMwijXRspky07gHaQlNP2w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CountriesDataFetched"));
})(varBag.model, idService);
}
},
"0654oTykkk2Ei58dxqCBJA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_SearchByCountry"));
})(varBag.model, idService);
}
},
"HeR3an0ynEib1qC6WrZVIg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"1wnjjeoGYUKMyLKJ2FzCpg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"8q7lgu4qSk6V0O3ypx1NXw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_SearchTearm"));
})(varBag.model, idService);
}
},
"qbeOP250a0GGSbviNdYfZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_NoResultsFound"));
})(varBag.model, idService);
}
},
"MhA6hwRiTEu6tBzIRIphfQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
})(varBag.model, idService);
}
},
"ockXuGC5jUyd1EngjyHxaA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"tokuLxkjA0WtyhVQQOj+Xw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_StickyBottom"));
})(varBag.model, idService);
}
},
"3mddnpkpf0WslDMTuo7onQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Cancel"));
})(varBag.model, idService);
}
},
"1yOtFpEjuEWdgEpDUVjF2g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Apply"));
})(varBag.model, idService);
}
},
"+kKDkh+0JkGXJvTgOLc8CA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonApply"));
})(varBag.model, idService);
}
},
"iqqojUsCy0+_+oz44EPk2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"3pm94SaAKECmS+36MObTRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
