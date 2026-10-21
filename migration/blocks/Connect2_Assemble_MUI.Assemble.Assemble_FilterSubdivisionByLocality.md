# Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality

- Kind: shared; build screens using it: AssembleEvents, Assemble_BrowseByCountry
- Compiled source: `migration/blocks/sources/Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc.js`
- Child blocks: Connect2_LegacyShared.Reusable.RadioButtonListItem, Connect2_LegacyShared.Reusable.Spinner, OutSystemsUI_2_23.Interaction.InputWithIcon, OutSystemsUI_2_23.Utilities.Separator (queue: Connect2_LegacyShared.Reusable.RadioButtonListItem)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$model", "Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc$controller", "Connect2_LegacyShared.Reusable.Spinner.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "OutSystemsUI_2_23.Utilities.Separator.mvc$view", "Connect2_LegacyShared.Reusable.RadioButtonListItem.mvc$view", "Connect2_LegacyShared.model$SubdivisionsItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$SubdivisionsItemList", "Connect2_LegacyShared.controller$RemoveDiacritics", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_Assemble_MUI.controller$GetLocality"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, React, OSView, Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_model, Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_controller, Connect2_LegacyShared_Reusable_Spinner_mvc_view, OSWidgets, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, OutSystemsUI_2_23_Utilities_Separator_mvc_view, Connect2_LegacyShared_Reusable_RadioButtonListItem_mvc_view) {
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
        View.displayName = "Assemble.Assemble_FilterSubdivisionByLocality";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Reusable_Spinner_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, OutSystemsUI_2_23_Utilities_Separator_mvc_view, Connect2_LegacyShared_Reusable_RadioButtonListItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_Assemble_FilterSubdivisionByLocality_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isFetchingSubdivisionsVar, false, this, function () {
return [React.createElement(Connect2_LegacyShared_Reusable_Spinner_mvc_view, {
inputs: {
ShowLoader: model.variables.isFetchingSubdivisionsVar
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
visible: true,
_idProps: {
service: idService,
name: "DIV_SuperMeetings"
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
uuid: "2",
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
uuid: "3"
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
return controller.onChange_SearchTerm$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
prompt: "Search Supper Meetings",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchTermVar, function (value) {
model.variables.searchTermVar = value;
}),
_idProps: {
service: idService,
name: "Input_SearchTearn"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.searchTermVar)]
}), React.createElement(OutSystemsUI_2_23_Utilities_Separator_mvc_view, {
inputs: {
Space: Connect2_Assemble_MUIModel.staticEntities.space.none
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
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(!(model.variables.filteredSubdivisionsListVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.filteredSubdivisionsListVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-y-s padding-x-base",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).isMainHallAttr), asPrimitiveValue(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables._selectedSubdivisionIdInDataFetchStatus), asPrimitiveValue(model.variables.selectedSubdivisionIdIn)]
}, React.createElement(Connect2_LegacyShared_Reusable_RadioButtonListItem_mvc_view, {
inputs: {
SelectedValue: OS.BuiltinFunctions.longIntegerToText(model.variables.selectedSubdivisionIdIn),
_selectedValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedSubdivisionIdInDataFetchStatus),
RadioButtonValue: OS.BuiltinFunctions.longIntegerToText(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).idAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
selected$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
controller.selectedSubdivision$Action(model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
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
uuid: "8",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: model.getCachedValue(idService.getId("PGj9pV0eqkSX_DiGkk0coA.style"), function () {
return (("color: " + ((model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).isMainHallAttr) ? ("var(--color-primary)") : ("var(--color-neutral-10)"))) + ";");
}, function () {
return model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).isMainHallAttr;
})
},
style: "font-regular",
value: model.variables.filteredSubdivisionsListVar.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
```
(… 31 more lines in `migration/blocks/sources/Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality.mvc.js`)
