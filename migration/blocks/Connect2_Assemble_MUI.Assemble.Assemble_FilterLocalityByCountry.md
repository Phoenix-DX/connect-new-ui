# Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry

- Kind: shared; build screens using it: AssembleEvents, Assemble_BrowseByCountry
- Compiled source: `migration/blocks/sources/Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc.js`
- Child blocks: Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality, Connect2_LegacyShared.Reusable.Spinner, OutSystemsUI_2_23.Interaction.InputWithIcon (queue: Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
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
```
(… 164 more lines in `migration/blocks/sources/Connect2_Assemble_MUI.Assemble.Assemble_FilterLocalityByCountry.mvc.js`)
