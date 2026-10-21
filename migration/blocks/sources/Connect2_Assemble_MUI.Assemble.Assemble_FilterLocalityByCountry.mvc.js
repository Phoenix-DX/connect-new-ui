define("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model$LocalityResultItemWithGPSRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$LocalityResultItemWithGPSList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$ScrollToElement", "Connect2_LegacyShared.controller$GetCacheableCountryInfo", "Connect2_Assemble_MUI.controller$HasAccessToRegion", "Connect2_LegacyShared.controller$RemoveDiacritics"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, Connect2_Assemble_MUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("FilteredLocalitiesList", "filteredLocalitiesListVar", "FilteredLocalitiesList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.LocalityResultItemWithGPSList());
}, false, Connect2_Assemble_MUIModel.LocalityResultItemWithGPSList), 
this.attr("FullLocalitiesList", "fullLocalitiesListVar", "FullLocalitiesList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.LocalityResultItemWithGPSList());
}, false, Connect2_Assemble_MUIModel.LocalityResultItemWithGPSList), 
this.attr("IsFetchingLocalities", "isFetchingLocalitiesVar", "IsFetchingLocalities", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("SelectedSubdivisionId", "selectedSubdivisionIdVar", "SelectedSubdivisionId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("SelectedLocalityId", "selectedLocalityIdVar", "SelectedLocalityId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("SearchTerm", "searchTermVar", "SearchTerm", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("UserInformation", "userInformationVar", "UserInformation", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Users_Current_GETResponseRec());
}, false, APIDomain_Directory_ISModel.Users_Current_GETResponseRec), 
this.attr("CountryCode", "countryCodeIn", "CountryCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_countryCodeInDataFetchStatus", "_countryCodeInDataFetchStatus", "_countryCodeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("CountryName", "countryNameIn", "CountryName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_countryNameInDataFetchStatus", "_countryNameInDataFetchStatus", "_countryNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("CountryCode" in inputs) {
this.variables.countryCodeIn = inputs.CountryCode;
if("_countryCodeInDataFetchStatus" in inputs) {
this.variables._countryCodeInDataFetchStatus = inputs._countryCodeInDataFetchStatus;
}

}

if("CountryName" in inputs) {
this.variables.countryNameIn = inputs.CountryName;
if("_countryNameInDataFetchStatus" in inputs) {
this.variables._countryNameInDataFetchStatus = inputs._countryNameInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Assemble.Assemble_FilterLocalityByCountry");
});
define("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$model", "Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$controller", "Connect2_LegacyShared.Reusable.Spinner.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$view", "Connect2_LegacyShared.model$LocalityResultItemWithGPSRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$LocalityResultItemWithGPSList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$ScrollToElement", "Connect2_LegacyShared.controller$GetCacheableCountryInfo", "Connect2_Assemble_MUI.controller$HasAccessToRegion", "Connect2_LegacyShared.controller$RemoveDiacritics"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_model, Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_controller, Connect2_LegacyShared_Reusable_Spinner_mvc_view, OSWidgets, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_view) {
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
        View.displayName = "Assemble.Assemble_FilterLocalityByCountry";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Reusable_Spinner_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isFetchingLocalitiesVar, false, this, function () {
return [React.createElement(Connect2_LegacyShared_Reusable_Spinner_mvc_view, {
inputs: {
ShowLoader: model.variables.isFetchingLocalitiesVar
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-y-s padding-x-base list-sticky-records__sticky-record",
visible: true,
_idProps: {
service: idService,
name: "DIV_Title"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
style: "font-bold",
value: ("View Localities in " + model.variables.countryNameIn),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._countryNameInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "assemble-list-filter margin-x-base",
visible: true,
_idProps: {
service: idService,
name: "DIV_FilterByLocality"
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
uuid: "4",
alias: "2"
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
uuid: "5"
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
autoComplete: "off"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterLocalityByCountry/Input_SearchTerm OnChange");
return controller.onChange_SearchTerm$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
prompt: "Search Locality",
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
})), $if(!(model.variables.filteredLocalitiesListVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.filteredLocalitiesListVar,
style: "list list-group",
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
style: "padding-x-base",
visible: true,
_idProps: {
service: idService,
name: "DIV_ListLocalities"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.selectedSubdivisionIdVar), asPrimitiveValue(model.variables.selectedLocalityIdVar), asPrimitiveValue(model.variables.filteredLocalitiesListVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.filteredLocalitiesListVar.getCurrent(callContext.iterationContext).nameAttr)]
}, React.createElement(OSWidgets.ListItem, {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterLocalityByCountry/ListItem OnClick");
return controller.onClickLocality$Action(model.variables.filteredLocalitiesListVar.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "list-item assemble-list-filter",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "-webkit-box-flex: 1; flex: 2;"
},
gridProperties: {
classes: "OSInline"
},
style: "text-align-left",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.filteredLocalitiesListVar.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 22px; text-align: right;"
},
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; height: 22px;"
},
style: "text-neutral-6 font-size-0-9em text-align-right",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 22px;"
},
gridProperties: {
classes: "OSInline",
width: "20%"
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(!(model.variables.filteredLocalitiesListVar.getCurrent(callContext.iterationContext).idAttr.equals(model.variables.selectedLocalityIdVar)), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "height: 22px; margin-top: 4px; width: 100%;"
},
icon: "chevron-down",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "color: #1776ba; height: 22px; margin-top: 4px; width: 100%;"
},
icon: "chevron-up",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})))))];
}),
rightActions: PlaceholderContent.Empty
}
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "assemble-list-filter margin-bottom-xs margin-top-xs ignore-backwards-compatibility-content",
visible: model.variables.filteredLocalitiesListVar.getCurrent(callContext.iterationContext).idAttr.equals(model.variables.selectedLocalityIdVar),
_idProps: {
service: idService,
name: "DIV_ListSubdivisions"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_view, {
inputs: {
SelectedSubdivisionId: model.variables.selectedSubdivisionIdVar,
LocalityId: model.variables.filteredLocalitiesListVar.getCurrent(callContext.iterationContext).idAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
selectedSubdivision$Action: function (subdivisionIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/Assemble_FilterSubdivisionByLocality SelectedSubdivision");
return controller.handler_LocalitySelectedSubdivision$Action(subdivisionIdIn, controller.callContext(eventHandlerContext));
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
uuid: "19",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.selectedSubdivisionIdVar), asPrimitiveValue(model.variables.selectedLocalityIdVar)]
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-x-base margin-y-base",
visible: true,
_idProps: {
service: idService,
name: "DIV_NoResultsFound"
},
_widgetRecordProvider: widgetsRecordProvider
}, "No results found")];
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$debugger", "Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$controller.OnClickLocality.ExitFullscreenJS", "Connect2_LegacyShared.model$LocalityResultItemWithGPSRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$LocalityResultItemWithGPSList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$ScrollToElement", "Connect2_LegacyShared.controller$GetCacheableCountryInfo", "Connect2_Assemble_MUI.controller$HasAccessToRegion", "Connect2_LegacyShared.controller$RemoveDiacritics"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_Debugger, Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_controller_OnClickLocality_ExitFullscreenJS) {
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
var scrollToElementVar = new OS.DataTypes.VariableHolder();
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCacheableUserInfoVar = getCacheableUserInfoVar;
varBag.scrollToElementVar = scrollToElementVar;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:Ya0_LmDUSEmxRj3oVu+_7Q:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.Sq0nZZliJEGYzDBv+5LNKA/ClientActions.Ya0_LmDUSEmxRj3oVu+_7Q:3thkqWSyzGqGi5yrV+Su8Q", "Connect2_Assemble_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:xX8FeAWIakazNBVgHE4+jw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:wG2ZoVaRCkGJ_HGUVSQPMA", callContext.id);
// Execute Action: ScrollToElement
scrollToElementVar.value = OutSystemsUI_2_23Controller.default.scrollToElement$Action(idService.getId("DIV_Title"), true, 0, "", 0, callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:StLqOfDfw0ivVadDPS8cPw", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if WasCurrentViewRestoredFromCache FromCache
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:RQKllrsB50asv8mRkX0s4w", callContext.id) && (wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut === true))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:mj_EEc3xKkONrGiTGqyVTg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:bwOzjHH0zk64zGPOm6rpsA", callContext.id);
// Execute Action: GetCacheableUserInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableUserInfo$Action(callContext).then(function (value) {
getCacheableUserInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:EgxE9cKqnEeR9yV4EUoVJQ", callContext.id);
// UserInformation = GetCacheableUserInfo.UserInformation
model.variables.userInformationVar = getCacheableUserInfoVar.value.userInformationOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:JNd_p+ZnHk6c7dBKOfiOVg", callContext.id);
// Execute Action: FetchLocalities
return controller._fetchLocalities$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:71sAxGP7Ck6uOYbm+d68rg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:Ya0_LmDUSEmxRj3oVu+_7Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:Ya0_LmDUSEmxRj3oVu+_7Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._fetchLocalities$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("FetchLocalities");
callContext = controller.callContext(callContext);
var getCountryInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCountryInfoVar = getCountryInfoVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:L1z_YcCrXU+Eh6dm5eb_kg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.Sq0nZZliJEGYzDBv+5LNKA/ClientActions.L1z_YcCrXU+Eh6dm5eb_kg:yeK+PUcjLkZg7Jo+uoo_IA", "Connect2_Assemble_MUI", "FetchLocalities", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:tRYRbKpqdkWM6NbTdGhvdg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:d9epKEpqh0ur2BHxGCptkA", callContext.id);
// IsFetchingLocalities = True
model.variables.isFetchingLocalitiesVar = true;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:VKQU1exf8kyK9Pf+LGmlbA", callContext.id);
// Execute Action: GetCountryInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableCountryInfo$Action(model.variables.countryCodeIn, callContext).then(function (value) {
getCountryInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ShX2TL1tx0CXB286quklgw", callContext.id);
// FullLocalitiesList = GetCountryInfo.LocalitiesList
model.variables.fullLocalitiesListVar = getCountryInfoVar.value.localitiesListOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ShX2TL1tx0CXB286quklgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// FilteredLocalitiesList = FullLocalitiesList
model.variables.filteredLocalitiesListVar = model.variables.fullLocalitiesListVar;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Ca1h_Tx6tkunrNO0af3feQ", callContext.id);
// IsFetchingLocalities = False
model.variables.isFetchingLocalitiesVar = false;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:vHgtDzOSVUuLqVIH6BgkRQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:L1z_YcCrXU+Eh6dm5eb_kg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:L1z_YcCrXU+Eh6dm5eb_kg", callContext.id);
throw ex;

});
};
Controller.prototype._handler_LocalitySelectedSubdivision$Action = function (inSelectedSubidivisionIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_LocalitySelectedSubdivision");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.Handler_LocalitySelectedSubdivision$vars"))());
vars.value.inSelectedSubidivisionIdInLocal = inSelectedSubidivisionIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:ypxcZ9fo60mEMPrZhdZXXw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.Sq0nZZliJEGYzDBv+5LNKA/ClientActions.ypxcZ9fo60mEMPrZhdZXXw:eJW_w+ImA7TYCIpmy3SdYQ", "Connect2_Assemble_MUI", "Handler_LocalitySelectedSubdivision", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:vfxTv3c5QEK+GA6FkymtAw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:2xR5l1cO0Ue+sxol1Fwl5g", callContext.id);
// SelectedSubdivisionId = InSelectedSubidivisionId
model.variables.selectedSubdivisionIdVar = vars.value.inSelectedSubidivisionIdInLocal;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:2xR5l1cO0Ue+sxol1Fwl5g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SelectedLocalityId = FilteredLocalitiesList.Current.Id
model.variables.selectedLocalityIdVar = model.variables.filteredLocalitiesListVar.getCurrent(callContext.iterationContext).idAttr;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:dNDfQe_urUCutkX2c7_47Q", callContext.id);
// Trigger Event: SelectedSubdivision
return controller.selectedSubdivision$Action(vars.value.inSelectedSubidivisionIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:I+EcIc9cMUykDi8fWiKlsg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ypxcZ9fo60mEMPrZhdZXXw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ypxcZ9fo60mEMPrZhdZXXw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.Handler_LocalitySelectedSubdivision$vars", [{
name: "InSelectedSubidivisionId",
attrName: "inSelectedSubidivisionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._onClickLocality$Action = function (localityIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClickLocality");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.OnClickLocality$vars"))());
vars.value.localityIdInLocal = localityIdIn;
var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.hasAccessToRegionVar = hasAccessToRegionVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:HYX8qlG7DE6OxN+7qxTiYg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.Sq0nZZliJEGYzDBv+5LNKA/ClientActions.HYX8qlG7DE6OxN+7qxTiYg:UF53TXSTDSyPHwdKgOf69w", "Connect2_Assemble_MUI", "OnClickLocality", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:8oMo5HHEsESrgn1IlpNm8w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:mRGdrrqGnUyo08bhToS9Dw", callContext.id);
// Execute Action: HasAccessToRegion
model.flush();
return Connect2_Assemble_MUIController.default.hasAccessToRegion$Action(model.variables.countryCodeIn, vars.value.localityIdInLocal, callContext).then(function (value) {
hasAccessToRegionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:r7uJCeqR9EmnzddaiSJNyQ", callContext.id) && !(hasAccessToRegionVar.value.hasAccessOut))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:JT8WUHwzgEKxM+TepBNQ7A", callContext.id);
// Trigger Event: FreeSubscriptionAlert
return controller.freeSubscriptionAlert$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:cmyxBnUrsk2u8yFpMbx2ig", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:aWOIe673GUi+yN_xJCz58g", callContext.id);
return controller.safeExecuteAsyncJSNode(Connect2_Assemble_MUI_Assemble_Assemble_FilterLocalityByCountry_mvc_controller_OnClickLocality_ExitFullscreenJS, "ExitFullscreen", "OnClickLocality", null, function ($parameters) {
}, {}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ErCPnM3ac0iqPurnHXRLyQ", callContext.id);
// SelectedSubdivisionId = NullIdentifier
model.variables.selectedSubdivisionIdVar = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:cU4axbasKUaJoT9WXEV8vQ", callContext.id) && model.variables.filteredLocalitiesListVar.getCurrent(callContext.iterationContext).idAttr.equals(model.variables.selectedLocalityIdVar))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:PNto3b1Xrk+Lx32yzBeC7Q", callContext.id);
// SelectedLocalityId = NullIdentifier
model.variables.selectedLocalityIdVar = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:jV2vvYSx5k2twy20XFWmYw", callContext.id);
// SelectedLocalityId = FilteredLocalitiesList.Current.Id
model.variables.selectedLocalityIdVar = model.variables.filteredLocalitiesListVar.getCurrent(callContext.iterationContext).idAttr;
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:mxpsJJ75u0uI9k_JcwQdvw", callContext.id);
// Trigger Event: SelectedSubdivision
return controller.selectedSubdivision$Action(model.variables.selectedSubdivisionIdVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:zhlHWLmXDkypkevP_XjECg", callContext.id);
});
});
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:HYX8qlG7DE6OxN+7qxTiYg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:HYX8qlG7DE6OxN+7qxTiYg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.OnClickLocality$vars", [{
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._onChange_SearchTerm$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_SearchTerm");
callContext = controller.callContext(callContext);
var getCountryInfoVar = new OS.DataTypes.VariableHolder();
var removeDiacriticsVar = new OS.DataTypes.VariableHolder();
var listFilterLocalityVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCountryInfoVar = getCountryInfoVar;
varBag.removeDiacriticsVar = removeDiacriticsVar;
varBag.listFilterLocalityVar = listFilterLocalityVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:9t3K97_pPU6Wchqnxou9Hg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.Sq0nZZliJEGYzDBv+5LNKA/ClientActions.9t3K97_pPU6Wchqnxou9Hg:G2i7VNCroDqW4e4O7OGLSw", "Connect2_Assemble_MUI", "OnChange_SearchTerm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:KbHWbb+KjEqDwxxbgGOQLg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:vBwu93TLskq8MR1nqGoIXA", callContext.id) && (model.variables.searchTermVar === ""))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:QDFgP82M1EevI+rqUczxlg", callContext.id);
// Execute Action: GetCountryInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableCountryInfo$Action(model.variables.countryCodeIn, callContext).then(function (value) {
getCountryInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:vOA4hxP0aU+I2mVMqOCy4g", callContext.id);
// FullLocalitiesList = GetCountryInfo.LocalitiesList
model.variables.fullLocalitiesListVar = getCountryInfoVar.value.localitiesListOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:vOA4hxP0aU+I2mVMqOCy4g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// FilteredLocalitiesList = FullLocalitiesList
model.variables.filteredLocalitiesListVar = model.variables.fullLocalitiesListVar;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:h5QcqLX1s0u9skYDSGcPyQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:9jQPROW1Ekue7xWi0aHmsg", callContext.id);
// Execute Action: RemoveDiacritics
removeDiacriticsVar.value = Connect2_LegacySharedController.default.removeDiacritics$Action(OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.trim(model.variables.searchTermVar)), callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:DV+n_s+NJUCRr8K+mOYoGA", callContext.id);
// RemoveDiacritics.ProcessedText = Trim
removeDiacriticsVar.value.processedTextOut = OS.BuiltinFunctions.trim(OS.BuiltinFunctions.toLower(removeDiacriticsVar.value.processedTextOut));
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:1msZRr7VykyJpKVwRtvS_w", callContext.id);
// Execute Action: ListFilterLocality
listFilterLocalityVar.value = OS.SystemActions.listFilter(model.variables.fullLocalitiesListVar, function (p) {
return ((OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(OS.BuiltinFunctions.toLower(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.removeDiacritics$Action(p.nameAttr, callContext).processedTextOut;
}, OS.DataTypes.DataTypes.Text, callContext.id))), removeDiacriticsVar.value.processedTextOut, 0, false, true)) !== (-1));
}, callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:EyQNsBAUGUiUcL_AYWAI9A", callContext.id);
// FilteredLocalitiesList = ListFilterLocality.FilteredList
model.variables.filteredLocalitiesListVar = listFilterLocalityVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:W3Xbt3NFiUax0ywWDIDUwA", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:9t3K97_pPU6Wchqnxou9Hg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:9t3K97_pPU6Wchqnxou9Hg", callContext.id);
throw ex;

});
};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.fetchLocalities$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._fetchLocalities$Action, callContext);

};
Controller.prototype.handler_LocalitySelectedSubdivision$Action = function (inSelectedSubidivisionIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_LocalitySelectedSubdivision$Action, callContext, inSelectedSubidivisionIdIn);

};
Controller.prototype.onClickLocality$Action = function (localityIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClickLocality$Action, callContext, localityIdIn);

};
Controller.prototype.onChange_SearchTerm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_SearchTerm$Action, callContext);

};
Controller.prototype.selectedSubdivision$Action = function () {
return Promise.resolve();
};
Controller.prototype.cancel$Action = function () {
return Promise.resolve();
};
Controller.prototype.freeSubscriptionAlert$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:Sq0nZZliJEGYzDBv+5LNKA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.Sq0nZZliJEGYzDBv+5LNKA:0j+K0w6XqgLOcL8fxdaXxQ", "Connect2_Assemble_MUI", "Assemble_FilterLocalityByCountry", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:Sq0nZZliJEGYzDBv+5LNKA", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/Assemble_FilterLocalityByCountry On Ready");
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
define("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});
define("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$controller.OnClickLocality.ExitFullscreenJS", [], function () {
return function ($actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
if (document.fullscreenElement) {
    document.exitFullscreen().then($resolve).catch($reject);
} else {
    $resolve();
}
});
};
});

define("Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"bwOzjHH0zk64zGPOm6rpsA": {
getter: function (varBag, idService) {
return varBag.getCacheableUserInfoVar.value;
}
},
"wG2ZoVaRCkGJ_HGUVSQPMA": {
getter: function (varBag, idService) {
return varBag.scrollToElementVar.value;
}
},
"StLqOfDfw0ivVadDPS8cPw": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"VKQU1exf8kyK9Pf+LGmlbA": {
getter: function (varBag, idService) {
return varBag.getCountryInfoVar.value;
}
},
"Sn9laWeUM0qfKgwQVQUFjw": {
getter: function (varBag, idService) {
return varBag.vars.value.inSelectedSubidivisionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"h+jAa2cD9ketbjc9zbRdzg": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"mRGdrrqGnUyo08bhToS9Dw": {
getter: function (varBag, idService) {
return varBag.hasAccessToRegionVar.value;
}
},
"aWOIe673GUi+yN_xJCz58g": {
getter: function (varBag, idService) {
return varBag.exitFullscreenJSResult.value;
}
},
"QDFgP82M1EevI+rqUczxlg": {
getter: function (varBag, idService) {
return varBag.getCountryInfoVar.value;
}
},
"9jQPROW1Ekue7xWi0aHmsg": {
getter: function (varBag, idService) {
return varBag.removeDiacriticsVar.value;
}
},
"1msZRr7VykyJpKVwRtvS_w": {
getter: function (varBag, idService) {
return varBag.listFilterLocalityVar.value;
}
},
"Ebk6_iNSsUWtnhdUuFAglQ": {
getter: function (varBag, idService) {
return varBag.model.variables.filteredLocalitiesListVar;
}
},
"I1OE2gO8iEWSh9kgndkBcg": {
getter: function (varBag, idService) {
return varBag.model.variables.fullLocalitiesListVar;
}
},
"dUXeVwTOgUaNBv2KyDnMBQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingLocalitiesVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cz3WwRWebEylnTZpYjzn8g": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedSubdivisionIdVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"krYyTWmiiE2NrD97hZwegw": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedLocalityIdVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"5MWxmc3SukOEUqi32UImLQ": {
getter: function (varBag, idService) {
return varBag.model.variables.searchTermVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sGMMmpGG3EOTZ2m4_ziSKg": {
getter: function (varBag, idService) {
return varBag.model.variables.userInformationVar;
}
},
"SKTgJSDRLkSluKaDMIbbEg": {
getter: function (varBag, idService) {
return varBag.model.variables.countryCodeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4h5HfQs2f0yfJ+uRMotdIg": {
getter: function (varBag, idService) {
return varBag.model.variables.countryNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"N0eG6QcLrU+E7WBfha2HYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Title"));
})(varBag.model, idService);
}
},
"iXsp4wz2E0ee4QMfmxbPgg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_FilterByLocality"));
})(varBag.model, idService);
}
},
"JZXhl9oqJku5cC1HMtBMbQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"pwB1z0GRzkWiZ0tbMR3K+g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"GDX+xTfGekyIHwh+vVrb2g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_SearchTerm"));
})(varBag.model, idService);
}
},
"UEBUps53o0uPld1lsA_fQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_ListLocalities"));
})(varBag.model, idService);
}
},
"85YNpvCFXEi7tHpdq87FPg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItem"));
})(varBag.model, idService);
}
},
"1KRegxE330yxjhohIPFWYQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_ListSubdivisions"));
})(varBag.model, idService);
}
},
"cMgtH25kmU6+AoozUsJpKg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_NoResultsFound"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
