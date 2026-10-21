define("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_BL.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.model$PopupFiltersRec", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList", "OutSystemsUI_2_23.model$DropdownOptionRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "Connect2_OrbitMobile_MUI.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$DropdownTogglePopup", "OutSystemsUI_2_23.controller$DropdownClearValidation", "OutSystemsUI_2_23.controller$DropdownClear", "UBTConnect_Utils.controller$DropdownTags_CloseOtherOnClick", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_BLModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SelectedFilters", "selectedFiltersVar", "SelectedFilters", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.PopupFiltersRec());
}, false, Connect2_OrbitMobile_MUIModel.PopupFiltersRec), 
this.attr("DynamicFilters", "dynamicFiltersVar", "DynamicFilters", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.PopupFiltersRec());
}, false, Connect2_OrbitMobile_MUIModel.PopupFiltersRec), 
this.attr("AvailableFilters", "availableFiltersIn", "AvailableFilters", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.PopupFiltersRec());
}, false, Connect2_OrbitMobile_MUIModel.PopupFiltersRec), 
this.attr("_availableFiltersInDataFetchStatus", "_availableFiltersInDataFetchStatus", "_availableFiltersInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("CurrentFilters", "currentFiltersIn", "CurrentFilters", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.PopupFiltersRec());
}, false, Connect2_OrbitMobile_MUIModel.PopupFiltersRec), 
this.attr("_currentFiltersInDataFetchStatus", "_currentFiltersInDataFetchStatus", "_currentFiltersInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Checkbox_Guest: OS.Model.ValidationWidgetRecord,
Checkbox_Helpers: OS.Model.ValidationWidgetRecord
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
if("AvailableFilters" in inputs) {
this.variables.availableFiltersIn = inputs.AvailableFilters;
if("_availableFiltersInDataFetchStatus" in inputs) {
this.variables._availableFiltersInDataFetchStatus = inputs._availableFiltersInDataFetchStatus;
}

}

if("CurrentFilters" in inputs) {
this.variables.currentFiltersIn = inputs.CurrentFilters;
if("_currentFiltersInDataFetchStatus" in inputs) {
this.variables._currentFiltersInDataFetchStatus = inputs._currentFiltersInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.PopUp_OrbitBookletFilters");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$view", "OutSystemsUI_2_23.Interaction.DropdownTags.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$view", "Connect2_OrbitMobile_MUI.model$PopupFiltersRec", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList", "OutSystemsUI_2_23.model$DropdownOptionRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "Connect2_OrbitMobile_MUI.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$DropdownTogglePopup", "OutSystemsUI_2_23.controller$DropdownClearValidation", "OutSystemsUI_2_23.controller$DropdownClear", "UBTConnect_Utils.controller$DropdownTags_CloseOtherOnClick", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_PopUp_OrbitBookletFilters_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_PopUp_OrbitBookletFilters_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_view, OutSystemsUI_2_23_Interaction_DropdownTags_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_view) {
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
        View.displayName = "Orbit_Blocks.PopUp_OrbitBookletFilters";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_view, OutSystemsUI_2_23_Interaction_DropdownTags_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_PopUp_OrbitBookletFilters_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_PopUp_OrbitBookletFilters_mvc_controller;
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
style: "full-width display-flex align-items-center justify-content-space-between bold",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Filters", React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/PopUp_OrbitBookletFilters/Icon onclick");
controller.closePopUp$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
style: "font-weight: bold;"
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-cross",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-booklet-popup-filters-cont",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Guests", React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/PopUp_OrbitBookletFilters/Checkbox_Guest OnChange");
controller.onChange_Checkboxes$Action(true, false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.dynamicFiltersVar.isGuestAttr, function (value) {
model.variables.dynamicFiltersVar.isGuestAttr = value;
}),
_idProps: {
service: idService,
name: "Checkbox_Guest"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center justify-content-space-between margin-top-xs",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Helpers", React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/PopUp_OrbitBookletFilters/Checkbox_Helpers OnChange");
controller.onChange_Checkboxes$Action(false, true, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.dynamicFiltersVar.isHelperAttr, function (value) {
model.variables.dynamicFiltersVar.isHelperAttr = value;
}),
_idProps: {
service: idService,
name: "Checkbox_Helpers"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-s",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Day"), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_view, {
inputs: {
DateList: model.variables.dynamicFiltersVar.dateRangeAttr,
AddWeekdayBelow: true,
ShowInWeekday: false,
ReplaceSunday: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clickedDate$Action: function (event_MilestoneTimeTypeIdIn, event_SelectedDateIn, event_PositionIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/ListOfDaySelectors ClickedDate");
controller.onHandle_ClickedDate$Action(event_PositionIn, controller.callContext(eventHandlerContext));
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
uuid: "10",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Roles"), React.createElement(OutSystemsUI_2_23_Interaction_DropdownTags_mvc_view, {
inputs: {
OptionsList: model.variables.dynamicFiltersVar.helperRolesAttr,
StartingSelection: model.variables.currentFiltersIn.helperRolesAttr,
_startingSelectionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._currentFiltersInDataFetchStatus),
OptionalConfigs: model.getCachedValue(idService.getId("DropdownTags_Roles.OptionalConfigs"), function () {
return function () {
var rec = new OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRec();
rec.isDisabledAttr = model.variables.dynamicFiltersVar.isGuestAttr;
rec.searchPromptAttr = "Select All or Search";
return rec;
}();
}, function () {
return model.variables.dynamicFiltersVar.isGuestAttr;
}),
Prompt: "Select Roles"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onChanged$Action: function (dropdownTagsIdIn, selectedOptionListIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/DropdownTags OnChanged");
controller.onChange_DropdownSearch_Roles$Action(dropdownTagsIdIn, selectedOptionListIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
initialized$Action: function (dropdownTagsIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/DropdownTags Initialized");
controller.onInitialized_Dropdowns$Action(dropdownTagsIdIn, controller.callContext(eventHandlerContext));
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
name: "DropdownTags_Roles",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-s",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Countries"), React.createElement(OutSystemsUI_2_23_Interaction_DropdownTags_mvc_view, {
inputs: {
Prompt: "Select Countries",
OptionsList: model.variables.dynamicFiltersVar.countriesAttr,
StartingSelection: model.variables.currentFiltersIn.countriesAttr,
_startingSelectionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._currentFiltersInDataFetchStatus),
OptionalConfigs: model.getCachedValue(idService.getId("DropdownTags_Countries.OptionalConfigs"), function () {
return function () {
var rec = new OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRec();
rec.searchPromptAttr = "Select All or Search";
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
initialized$Action: function (dropdownTagsIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/DropdownTags Initialized");
controller.onInitialized_Dropdowns$Action(dropdownTagsIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onChanged$Action: function (dropdownTagsIdIn, selectedOptionListIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/DropdownTags OnChanged");
controller.onChange_DropdownSearch_Countries$Action(selectedOptionListIn, controller.callContext(eventHandlerContext));
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
name: "DropdownTags_Countries",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-s",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Localities"), React.createElement(OutSystemsUI_2_23_Interaction_DropdownTags_mvc_view, {
inputs: {
StartingSelection: model.variables.currentFiltersIn.localitiesAttr,
_startingSelectionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._currentFiltersInDataFetchStatus),
OptionalConfigs: model.getCachedValue(idService.getId("DropdownTags_Localities.OptionalConfigs"), function () {
return function () {
var rec = new OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRec();
rec.searchPromptAttr = "Select All or Search";
return rec;
}();
}),
Prompt: "Select Localities",
OptionsList: model.variables.dynamicFiltersVar.localitiesAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onChanged$Action: function (dropdownTagsIdIn, selectedOptionListIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/DropdownTags OnChanged");
controller.onChange_DropdownSearch_Localities$Action(selectedOptionListIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
initialized$Action: function (dropdownTagsIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/DropdownTags Initialized");
controller.onInitialized_Dropdowns$Action(dropdownTagsIdIn, controller.callContext(eventHandlerContext));
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
name: "DropdownTags_Localities",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "sticky-to-bottom",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_view, {
inputs: {
In_IsSmallButtons: true,
In_HasSecondaryButton: true,
In_HasTopShadow: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click_PrimaryButton$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_FooterWithActions Click_PrimaryButton");
controller.applyFilters$Action(model.variables.selectedFiltersVar, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
click_SecondaryButton$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_FooterWithActions Click_SecondaryButton");
controller.onHandle_ResetFilters$Action(controller.callContext(eventHandlerContext));
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
uuid: "22",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Secondary: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Reset",
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Primary: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Apply",
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.mvc$debugger", "Connect2_OrbitMobile_MUI.model$PopupFiltersRec", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList", "OutSystemsUI_2_23.model$DropdownOptionRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "Connect2_OrbitMobile_MUI.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$DropdownTogglePopup", "OutSystemsUI_2_23.controller$DropdownClearValidation", "OutSystemsUI_2_23.controller$DropdownClear", "UBTConnect_Utils.controller$DropdownTags_CloseOtherOnClick", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_PopUp_OrbitBookletFilters_mvc_Debugger) {
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
Controller.prototype._onChange_DropdownSearch_Localities$Action = function (selectedOptionListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_DropdownSearch_Localities");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnChange_DropdownSearch_Localities$vars"))());
vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:CGgPC6xp6k68kHgJ9eHMhA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg/ClientActions.CGgPC6xp6k68kHgJ9eHMhA:I3qjsBdyC5CQblnDZXDIUQ", "Connect2_OrbitMobile_MUI", "OnChange_DropdownSearch_Localities", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Wg6Lawl1UKfRFBR0foEEw", callContext.id);
// Set Selected Localities
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+2y02+pxQkKnBEzCTm9KXQ", callContext.id);
// SelectedFilters.Localities = SelectedOptionList
model.variables.selectedFiltersVar.localitiesAttr = vars.value.selectedOptionListInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rAoOZ6PnUk+mYRzno3TgwA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:CGgPC6xp6k68kHgJ9eHMhA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnChange_DropdownSearch_Localities$vars", [{
name: "SelectedOptionList",
attrName: "selectedOptionListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.DropdownOptionList();
},
complexType: Connect2_OrbitMobile_MUIModel.DropdownOptionList
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:yP_vDm6PWU+0rD1IsWmu6Q:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg/ClientActions.yP_vDm6PWU+0rD1IsWmu6Q:WLBi4_LMxsluCTKemwb7pQ", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_pbPTve7H0W8qKvJxAO79w", callContext.id);
// Set Initial Dynamic Filters
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F1eNMjwzJ0WMOlp8yiQm7A", callContext.id);
// DynamicFilters = AvailableFilters
model.variables.dynamicFiltersVar = model.variables.availableFiltersIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F1eNMjwzJ0WMOlp8yiQm7A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// DynamicFilters.IsGuest = CurrentFilters.IsGuest
model.variables.dynamicFiltersVar.isGuestAttr = model.variables.currentFiltersIn.isGuestAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F1eNMjwzJ0WMOlp8yiQm7A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// DynamicFilters.IsHelper = CurrentFilters.IsHelper
model.variables.dynamicFiltersVar.isHelperAttr = model.variables.currentFiltersIn.isHelperAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F1eNMjwzJ0WMOlp8yiQm7A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// DynamicFilters.DateRange = If
model.variables.dynamicFiltersVar.dateRangeAttr = ((model.variables.currentFiltersIn.dateRangeAttr.isEmpty) ? (model.variables.availableFiltersIn.dateRangeAttr) : (model.variables.currentFiltersIn.dateRangeAttr));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4JBpkNlLRUW9QDd_P+1LQQ", callContext.id);
// Execute Action: FilterLocalitiesFromCountry
controller._filterLocalitiesFromCountry$Action(model.variables.currentFiltersIn.countriesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:luW9iSxgJEKiCVMMlB1ILg", callContext.id);
// SelectedFilters = CurrentFilters
model.variables.selectedFiltersVar = model.variables.currentFiltersIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IhMCrLgnTEOXdZdv7lzmhw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yP_vDm6PWU+0rD1IsWmu6Q", callContext.id);
}

};
Controller.prototype._filterLocalitiesFromCountry$Action = function (selectedOptionListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("FilterLocalitiesFromCountry");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.FilterLocalitiesFromCountry$vars"))());
vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
var listFilter_LocalityListVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_LocalityListVar = listFilter_LocalityListVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:yCdXHETa3Emy69GuQMqOwQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg/ClientActions.yCdXHETa3Emy69GuQMqOwQ:rNkK1z9O281imIRunzsdMA", "Connect2_OrbitMobile_MUI", "FilterLocalitiesFromCountry", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:z0OqPtpRx0+UAWHt435uLQ", callContext.id);
// Has selected countries?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AAF1UUEytEmFP34PasEwGQ", callContext.id) && !(vars.value.selectedOptionListInLocal.isEmpty))) {
// Foreach SelectedOptionList
callContext.iterationContext.registerIterationStart(vars.value.selectedOptionListInLocal);
try {var selectedOptionListIterator = callContext.iterationContext.getIterator(vars.value.selectedOptionListInLocal);
var selectedOptionListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Dq0TQpNiU0i6Vw6P6KphCQ", callContext.id) && (selectedOptionListIndex < vars.value.selectedOptionListInLocal.length))) {
selectedOptionListIterator.currentRowNumber = selectedOptionListIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YqKacqaMiEOsDjoDaT4bUA", callContext.id);
// Execute Action: ListFilter_LocalityList
listFilter_LocalityListVar.value = OS.SystemActions.listFilter(model.variables.availableFiltersIn.localitiesAttr, function (p) {
return (p.groupNameAttr === vars.value.selectedOptionListInLocal.getItem(selectedOptionListIndex.valueOf()).valueAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1bK8BzxsEUm9hxd+v_N6JA", callContext.id);
// Execute Action: ListAppendAll_FilteredLocalities
OS.SystemActions.listAppendAll(vars.value.filteredLocalitiesVar, listFilter_LocalityListVar.value.filteredListOut, callContext);
selectedOptionListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.selectedOptionListInLocal);
}

// Set Filtered Locality List
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Nl5LHx7U3UWVoOF2gi1eNQ", callContext.id);
// DynamicFilters.Localities = FilteredLocalities
model.variables.dynamicFiltersVar.localitiesAttr = vars.value.filteredLocalitiesVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QEaRfAEYJ0OxIgYwrEnbTg", callContext.id);
} else {
// Reset Localities
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2iMbSbGZZkap2fEAT3hOYA", callContext.id);
// DynamicFilters.Localities = AvailableFilters.Localities
model.variables.dynamicFiltersVar.localitiesAttr = model.variables.availableFiltersIn.localitiesAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QEaRfAEYJ0OxIgYwrEnbTg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yCdXHETa3Emy69GuQMqOwQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.FilterLocalitiesFromCountry$vars", [{
name: "SelectedOptionList",
attrName: "selectedOptionListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.DropdownOptionList();
},
complexType: Connect2_OrbitMobile_MUIModel.DropdownOptionList
}, {
name: "FilteredLocalities",
attrName: "filteredLocalitiesVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.DropdownOptionList();
},
complexType: Connect2_OrbitMobile_MUIModel.DropdownOptionList
}]);
Controller.prototype._onInitialized_Dropdowns$Action = function (dropdownWidgetIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialized_Dropdowns");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnInitialized_Dropdowns$vars"))());
vars.value.dropdownWidgetIdInLocal = dropdownWidgetIdIn;
var dropdownTogglePopupVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.dropdownTogglePopupVar = dropdownTogglePopupVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:t9pZHUZ+fUGGFuoCVdiDXA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg/ClientActions.t9pZHUZ+fUGGFuoCVdiDXA:HbHhBEKoNf9T2GtlD7wYKg", "Connect2_OrbitMobile_MUI", "OnInitialized_Dropdowns", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kjIESHau8UeRrSeSwbp+xQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WCmyX0I9ekS4b3OIJqWdlA", callContext.id);
// Execute Action: DropdownTogglePopup
dropdownTogglePopupVar.value = OutSystemsUI_2_23Controller.default.dropdownTogglePopup$Action(vars.value.dropdownWidgetIdInLocal, false, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lwOKnzGlY0i4GHn1PPlO_A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:t9pZHUZ+fUGGFuoCVdiDXA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnInitialized_Dropdowns$vars", [{
name: "DropdownWidgetId",
attrName: "dropdownWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onChange_DropdownSearch_Roles$Action = function (dropdownWidgetIdIn, selectedOptionListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_DropdownSearch_Roles");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnChange_DropdownSearch_Roles$vars"))());
vars.value.dropdownWidgetIdInLocal = dropdownWidgetIdIn;
vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
var dropdownClearValidationVar = new OS.DataTypes.VariableHolder();
var dropdownClearVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.dropdownClearValidationVar = dropdownClearValidationVar;
varBag.dropdownClearVar = dropdownClearVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:4iBJYjnDSEGmVg0ZVU16Kg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg/ClientActions.4iBJYjnDSEGmVg0ZVU16Kg:6fP3OEz4aTf5EFs3KBvpxA", "Connect2_OrbitMobile_MUI", "OnChange_DropdownSearch_Roles", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fx7lcmX9JkK65oj5JCDpjA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nXn+eEp6b0Su7Z00bVstUQ", callContext.id) && model.variables.dynamicFiltersVar.isGuestAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0ns3+f2Kck6WdwBdtzgo9w", callContext.id);
// Execute Action: DropdownClear
dropdownClearVar.value = OutSystemsUI_2_23Controller.default.dropdownClear$Action(vars.value.dropdownWidgetIdInLocal, true, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9AllJdrTVkKrw7CR5NT7ZQ", callContext.id);
// Execute Action: DropdownClearValidation
dropdownClearValidationVar.value = OutSystemsUI_2_23Controller.default.dropdownClearValidation$Action(vars.value.dropdownWidgetIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hhOEypavi0iLJGbSbfdTCg", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.selectedFiltersVar.helperRolesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3fVen8ThYUWO4JjRwoN+tA", callContext.id);
} else {
// Set Selected Roles
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zOV10Vjkfk2NddzmusjB4w", callContext.id);
// SelectedFilters.HelperRoles = SelectedOptionList
model.variables.selectedFiltersVar.helperRolesAttr = vars.value.selectedOptionListInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+40hDjKYb0WMrS8G35fdBQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:4iBJYjnDSEGmVg0ZVU16Kg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnChange_DropdownSearch_Roles$vars", [{
name: "DropdownWidgetId",
attrName: "dropdownWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SelectedOptionList",
attrName: "selectedOptionListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.DropdownOptionList();
},
complexType: Connect2_OrbitMobile_MUIModel.DropdownOptionList
}]);
Controller.prototype._onChange_DropdownSearch_Countries$Action = function (selectedOptionListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_DropdownSearch_Countries");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnChange_DropdownSearch_Countries$vars"))());
vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
var listAnyVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listAnyVar = listAnyVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:PZGhdljVgUux64VaumcBxQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg/ClientActions.PZGhdljVgUux64VaumcBxQ:2cCGvwU+PGLj0AaImRXp0w", "Connect2_OrbitMobile_MUI", "OnChange_DropdownSearch_Countries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OIm3VbnS5UW5ENXOdzAIug", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KHcjUNEmx0OhZeG4A3lYxA", callContext.id);
// Execute Action: FilterLocalitiesFromCountry
controller._filterLocalitiesFromCountry$Action(vars.value.selectedOptionListInLocal, callContext);
// Set Selected Countries
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tBPkuw68D02I1qwo09T2UQ", callContext.id);
// SelectedFilters.Countries = SelectedOptionList
model.variables.selectedFiltersVar.countriesAttr = vars.value.selectedOptionListInLocal;
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HuohPIpaMkOr_nmxpeSqsA", callContext.id) && model.variables.selectedFiltersVar.countriesAttr.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rXAJ6YS5OkGEl79k+aZMDw", callContext.id);
} else {
// Foreach SelectedFilters.Localities
callContext.iterationContext.registerIterationStart(model.variables.selectedFiltersVar.localitiesAttr);
try {var localitiesIterator = callContext.iterationContext.getIterator(model.variables.selectedFiltersVar.localitiesAttr);
var localitiesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CiQkYQ03YUSLk88VgM2r3g", callContext.id) && (localitiesIndex < model.variables.selectedFiltersVar.localitiesAttr.length))) {
localitiesIterator.currentRowNumber = localitiesIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BT87noyacUiaJTAMXRDw8A", callContext.id);
// Execute Action: ListAny
listAnyVar.value = OS.SystemActions.listAny(model.variables.selectedFiltersVar.countriesAttr, function (p) {
return (p.valueAttr === model.variables.selectedFiltersVar.localitiesAttr.getItem(localitiesIndex.valueOf()).groupNameAttr);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oWQpZfplXkCUsi89bJeurQ", callContext.id) && listAnyVar.value.resultOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AsI6ypJLxkqVLFof+lpbCg", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(vars.value.localitiesVar, OS.DataConversion.JSConversions.typeConvertRecord(model.variables.selectedFiltersVar.countriesAttr.getCurrent(callContext.iterationContext), new OutSystemsUI_2_23Model.DropdownOptionRec(), function (source, target) {
target.valueAttr = source.valueAttr;
target.labelAttr = source.labelAttr;
target.imageUrlOrIconClassAttr = source.imageUrlOrIconClassAttr;
target.groupNameAttr = source.groupNameAttr;
target.descriptionAttr = source.descriptionAttr;
return target;
}), callContext);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hYB+Wb4hG0qVb8XzkmV45Q", callContext.id);
// UpdateLocalities = True
vars.value.updateLocalitiesVar = true;
}

localitiesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.selectedFiltersVar.localitiesAttr);
}

if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VBx_sZKd60iSAtJBE6M8og", callContext.id) && vars.value.updateLocalitiesVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_Dw2yOJmYEOWzXQ2iXW9oQ", callContext.id);
// Execute Action: ListClearSelectedLocalities
OS.SystemActions.listClear(model.variables.selectedFiltersVar.localitiesAttr, callContext);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OBIMn1tcoESOcTGTtCIdFg", callContext.id) && !(vars.value.localitiesVar.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eNbr937e8UeLtNKHLpLiEA", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.selectedFiltersVar.localitiesAttr, vars.value.localitiesVar, callContext);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AjNHTBfgJU2Yfz1lBhujvA", callContext.id);
// UpdateLocalities = False
vars.value.updateLocalitiesVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rXAJ6YS5OkGEl79k+aZMDw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rXAJ6YS5OkGEl79k+aZMDw", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:PZGhdljVgUux64VaumcBxQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnChange_DropdownSearch_Countries$vars", [{
name: "SelectedOptionList",
attrName: "selectedOptionListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.DropdownOptionList();
},
complexType: Connect2_OrbitMobile_MUIModel.DropdownOptionList
}, {
name: "UpdateLocalities",
attrName: "updateLocalitiesVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Localities",
attrName: "localitiesVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.DropdownOptionList();
},
complexType: Connect2_OrbitMobile_MUIModel.DropdownOptionList
}]);
Controller.prototype._onHandle_ClickedDate$Action = function (event_PositionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ClickedDate");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnHandle_ClickedDate$vars"))());
vars.value.event_PositionInLocal = event_PositionIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:OxS+rMXgN0y28oInH0W4xA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg/ClientActions.OxS+rMXgN0y28oInH0W4xA:Vk+WpPEhEFDHhKsEobzxFg", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedDate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6TLvIPPOOkG_JIrxGDieew", callContext.id);
// Has value?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:01z2J8WCvU29CBZRlV6Esg", callContext.id) && ((vars.value.event_PositionInLocal) !== (-1)))) {
// Toggle Selection
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oro660VeMUO88qcWeY8rrg", callContext.id);
// DynamicFilters.DateRange[Event_Position].IsSelected = notDynamicFilters.DateRange[Event_Position].IsSelected
model.variables.dynamicFiltersVar.dateRangeAttr.getItem(vars.value.event_PositionInLocal).isSelectedAttr = !(model.variables.dynamicFiltersVar.dateRangeAttr.getItem(vars.value.event_PositionInLocal).isSelectedAttr);
// Set Selected Filters
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3HsOidQlYUiR3XrfrJdfAw", callContext.id);
// SelectedFilters.DateRange = DynamicFilters.DateRange
model.variables.selectedFiltersVar.dateRangeAttr = model.variables.dynamicFiltersVar.dateRangeAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n1hM0x8j5EudMfwLq_hycA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sk3grw4+0ECKjgzkiJFoEA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OxS+rMXgN0y28oInH0W4xA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnHandle_ClickedDate$vars", [{
name: "Event_Position",
attrName: "event_PositionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onHandle_ResetFilters$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ResetFilters");
callContext = controller.callContext(callContext);
var dropdownClearValidation_LocalitiesVar = new OS.DataTypes.VariableHolder();
var dropdownClear_CountriesVar = new OS.DataTypes.VariableHolder();
var dropdownClear_LocalitiesVar = new OS.DataTypes.VariableHolder();
var dropdownClearValidation_CountriesVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.dropdownClearValidation_LocalitiesVar = dropdownClearValidation_LocalitiesVar;
varBag.dropdownClear_CountriesVar = dropdownClear_CountriesVar;
varBag.dropdownClear_LocalitiesVar = dropdownClear_LocalitiesVar;
varBag.dropdownClearValidation_CountriesVar = dropdownClearValidation_CountriesVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:m58Rr8kbB060R67ZHuNrpQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg/ClientActions.m58Rr8kbB060R67ZHuNrpQ:O4YwKi6xERvdUIMHVpldVw", "Connect2_OrbitMobile_MUI", "OnHandle_ResetFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JvZxPMygskmES8TM7MbMHw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4iDNp7ejnUGzNJ0QEazOgw", callContext.id);
// Execute Action: ResetCheckboxes
controller._resetCheckboxes$Action(callContext);
// Foreach DynamicFilters.DateRange
callContext.iterationContext.registerIterationStart(model.variables.dynamicFiltersVar.dateRangeAttr);
try {var dateRangeIterator = callContext.iterationContext.getIterator(model.variables.dynamicFiltersVar.dateRangeAttr);
var dateRangeIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xqfwedXJLkG25ptcdpgH7g", callContext.id) && (dateRangeIndex < model.variables.dynamicFiltersVar.dateRangeAttr.length))) {
dateRangeIterator.currentRowNumber = dateRangeIndex;
// Unselect Date
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RIlb1TjfKkCyiZlJcDjv1A", callContext.id);
// DynamicFilters.DateRange.Current.IsSelected = False
model.variables.dynamicFiltersVar.dateRangeAttr.getItem(dateRangeIndex.valueOf()).isSelectedAttr = false;
dateRangeIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.dynamicFiltersVar.dateRangeAttr);
}

// Clear Date Lists
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EvtoDYQOL06S2RlTsTr0rw", callContext.id);
// CurrentFilters.DateRange = DynamicFilters.DateRange
model.variables.currentFiltersIn.dateRangeAttr = model.variables.dynamicFiltersVar.dateRangeAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:krW0ImqZ+EuLijrsvrKSXA", callContext.id);
// Execute Action: ListClear_SelectedDates
OS.SystemActions.listClear(model.variables.selectedFiltersVar.dateRangeAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Qt9jra09dkqWZMXqE+BkeA", callContext.id);
// Execute Action: ListClear_SelectedLocalities
OS.SystemActions.listClear(model.variables.selectedFiltersVar.localitiesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:svC3NKMWA0md03tSL8KOGA", callContext.id);
// Execute Action: ListClear_CurrentLocalities
OS.SystemActions.listClear(model.variables.currentFiltersIn.localitiesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Xozg5aMm0UmvpKGlLEHjbg", callContext.id);
// Execute Action: ListClear_DynamicLocalities
OS.SystemActions.listClear(model.variables.dynamicFiltersVar.localitiesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g8pabk8X1EalHkULFBkudA", callContext.id);
// DynamicFilters.Localities = AvailableFilters.Localities
model.variables.dynamicFiltersVar.localitiesAttr = model.variables.availableFiltersIn.localitiesAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cFJkvbbzk0qjQiWdpdoOaA", callContext.id);
// Execute Action: DropdownClear_Localities
dropdownClear_LocalitiesVar.value = OutSystemsUI_2_23Controller.default.dropdownClear$Action(idService.getId("DropdownTags_Localities"), true, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ksz+E4yHr0q_SzflZbbwjw", callContext.id);
// Execute Action: DropdownClearValidation_Localities
dropdownClearValidation_LocalitiesVar.value = OutSystemsUI_2_23Controller.default.dropdownClearValidation$Action(idService.getId("DropdownTags_Localities"), callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lH+kMf5XmEOI0mFk67N_cA", callContext.id);
// Execute Action: ListClear_SelectedCountries
OS.SystemActions.listClear(model.variables.selectedFiltersVar.countriesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eobg9nBLB0iuIyO962TYFw", callContext.id);
// Execute Action: ListClear_CurrentCountries
OS.SystemActions.listClear(model.variables.currentFiltersIn.countriesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y5aEZqOCQUqHJWwyBKPAng", callContext.id);
// Execute Action: DropdownClear_Countries
dropdownClear_CountriesVar.value = OutSystemsUI_2_23Controller.default.dropdownClear$Action(idService.getId("DropdownTags_Countries"), true, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Ak77mFV70CVZfbNSiXxfA", callContext.id);
// Execute Action: DropdownClearValidation_Countries
dropdownClearValidation_CountriesVar.value = OutSystemsUI_2_23Controller.default.dropdownClearValidation$Action(idService.getId("DropdownTags_Countries"), callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TxnOhKB9jEmbXHtc7Zvk2A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:m58Rr8kbB060R67ZHuNrpQ", callContext.id);
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KWRevoc+F0GyI0P6mKhKXA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg/ClientActions.KWRevoc+F0GyI0P6mKhKXA:pB3TgUu5EwP518MI2ZpLGQ", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DMsPcwG3q0+pGFkt_Znz_Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jHzuvoxK20iEsEwEOlLxKw", callContext.id);
// Execute Action: DropdownTags_CloseOtherOnClick
UBTConnect_UtilsController.default.dropdownTags_CloseOtherOnClick$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Br8i4JmsVEa3czSjDz5KuA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KWRevoc+F0GyI0P6mKhKXA", callContext.id);
}

};
Controller.prototype._onChange_Checkboxes$Action = function (isGuestCheckboxIn, isHelperCheckboxIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_Checkboxes");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnChange_Checkboxes$vars"))());
vars.value.isGuestCheckboxInLocal = isGuestCheckboxIn;
vars.value.isHelperCheckboxInLocal = isHelperCheckboxIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:OihVw7ahoE2Aa11TNZfHtA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg/ClientActions.OihVw7ahoE2Aa11TNZfHtA:YKJnae5+aOFvz9q3YkZb7w", "Connect2_OrbitMobile_MUI", "OnChange_Checkboxes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7sliCNuSeEuRTJglD+AlGw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7rNOECyExEqdvw30VWjDaQ", callContext.id) && vars.value.isGuestCheckboxInLocal)) {
// Has selected Guest?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VjuMwIG+3UScUOq2o33C6A", callContext.id) && model.variables.dynamicFiltersVar.isGuestAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ey1v79vpnE2KNUGrrU_33Q", callContext.id);
// Execute Action: ResetCheckboxes
controller._resetCheckboxes$Action(callContext);
} else {
// Set Opposite Checkbox
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fyNOCHjKAEC+0JJp9HFR0A", callContext.id);
// DynamicFilters.IsHelper = notDynamicFilters.IsGuest
model.variables.dynamicFiltersVar.isHelperAttr = !(model.variables.dynamicFiltersVar.isGuestAttr);
}

// Set Selected Filters
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AZ19jRilK0+0JNr3YG0gTQ", callContext.id);
// SelectedFilters.IsGuest = DynamicFilters.IsGuest
model.variables.selectedFiltersVar.isGuestAttr = model.variables.dynamicFiltersVar.isGuestAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AZ19jRilK0+0JNr3YG0gTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SelectedFilters.IsHelper = DynamicFilters.IsHelper
model.variables.selectedFiltersVar.isHelperAttr = model.variables.dynamicFiltersVar.isHelperAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XN9njaX3KUSbxQjSoKresw", callContext.id);
} else {
if(vars.value.isHelperCheckboxInLocal) {
// Set Opposite Checkbox
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sUd3fVLHfUSndng6w4Oahg", callContext.id);
// DynamicFilters.IsGuest = notDynamicFilters.IsHelper
model.variables.dynamicFiltersVar.isGuestAttr = !(model.variables.dynamicFiltersVar.isHelperAttr);
// Set Selected Checkboxes
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i_BUh5xapkuWB6rQH4p3uA", callContext.id);
// SelectedFilters.IsGuest = DynamicFilters.IsGuest
model.variables.selectedFiltersVar.isGuestAttr = model.variables.dynamicFiltersVar.isGuestAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i_BUh5xapkuWB6rQH4p3uA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SelectedFilters.IsHelper = DynamicFilters.IsHelper
model.variables.selectedFiltersVar.isHelperAttr = model.variables.dynamicFiltersVar.isHelperAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MtjHHp6SLkW21JDpKVw6ug", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GGbrUJX+bkKzROwt0AdYBw", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OihVw7ahoE2Aa11TNZfHtA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.OnChange_Checkboxes$vars", [{
name: "IsGuestCheckbox",
attrName: "isGuestCheckboxInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsHelperCheckbox",
attrName: "isHelperCheckboxInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._resetCheckboxes$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ResetCheckboxes");
callContext = controller.callContext(callContext);
var dropdownClearValidationVar = new OS.DataTypes.VariableHolder();
var dropdownClearVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.dropdownClearValidationVar = dropdownClearValidationVar;
varBag.dropdownClearVar = dropdownClearVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:N0UP0v02pkuxPOQIfcnqKQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg/ClientActions.N0UP0v02pkuxPOQIfcnqKQ:hGsypI0HO5KPa9qHgr8nTA", "Connect2_OrbitMobile_MUI", "ResetCheckboxes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qaIeJvfh+Eqm8PJbNvaSEA", callContext.id);
// Reset Checkboxes values
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I7JwiQz7Yki2SpYgQJvXzA", callContext.id);
// DynamicFilters.IsGuest = AvailableFilters.IsGuest
model.variables.dynamicFiltersVar.isGuestAttr = model.variables.availableFiltersIn.isGuestAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I7JwiQz7Yki2SpYgQJvXzA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// DynamicFilters.IsHelper = AvailableFilters.IsHelper
model.variables.dynamicFiltersVar.isHelperAttr = model.variables.availableFiltersIn.isHelperAttr;
// Set Selected Checkboxes
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NUS813xsD0e1sfRXw48Afg", callContext.id);
// SelectedFilters.IsGuest = DynamicFilters.IsGuest
model.variables.selectedFiltersVar.isGuestAttr = model.variables.dynamicFiltersVar.isGuestAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NUS813xsD0e1sfRXw48Afg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SelectedFilters.IsHelper = DynamicFilters.IsHelper
model.variables.selectedFiltersVar.isHelperAttr = model.variables.dynamicFiltersVar.isHelperAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p4Bvm4vsU0mVO4_LBl2icg", callContext.id);
// Execute Action: DropdownClear
dropdownClearVar.value = OutSystemsUI_2_23Controller.default.dropdownClear$Action(idService.getId("DropdownTags_Roles"), true, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SmitYy5GFk2okHHr5Gw_5g", callContext.id);
// Execute Action: DropdownClearValidation
dropdownClearValidationVar.value = OutSystemsUI_2_23Controller.default.dropdownClearValidation$Action(idService.getId("DropdownTags_Roles"), callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:N4sUfgVc40OQGuZX_1P1QA", callContext.id);
// Execute Action: ListClear_SelectedRoles
OS.SystemActions.listClear(model.variables.selectedFiltersVar.helperRolesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_+eEPr8srUKAG6fIXjFQbA", callContext.id);
// Execute Action: ListClear_CurrentRoles
OS.SystemActions.listClear(model.variables.currentFiltersIn.helperRolesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g_1cCb+aAU+Zuv6JbG+Emg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:N0UP0v02pkuxPOQIfcnqKQ", callContext.id);
}

};

Controller.prototype.onChange_DropdownSearch_Localities$Action = function (selectedOptionListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_DropdownSearch_Localities$Action, callContext, selectedOptionListIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.filterLocalitiesFromCountry$Action = function (selectedOptionListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._filterLocalitiesFromCountry$Action, callContext, selectedOptionListIn);

};
Controller.prototype.onInitialized_Dropdowns$Action = function (dropdownWidgetIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialized_Dropdowns$Action, callContext, dropdownWidgetIdIn);

};
Controller.prototype.onChange_DropdownSearch_Roles$Action = function (dropdownWidgetIdIn, selectedOptionListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_DropdownSearch_Roles$Action, callContext, dropdownWidgetIdIn, selectedOptionListIn);

};
Controller.prototype.onChange_DropdownSearch_Countries$Action = function (selectedOptionListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_DropdownSearch_Countries$Action, callContext, selectedOptionListIn);

};
Controller.prototype.onHandle_ClickedDate$Action = function (event_PositionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedDate$Action, callContext, event_PositionIn);

};
Controller.prototype.onHandle_ResetFilters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ResetFilters$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onChange_Checkboxes$Action = function (isGuestCheckboxIn, isHelperCheckboxIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_Checkboxes$Action, callContext, isGuestCheckboxIn, isHelperCheckboxIn);

};
Controller.prototype.resetCheckboxes$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._resetCheckboxes$Action, callContext);

};
Controller.prototype.closePopUp$Action = function () {
return Promise.resolve();
};
Controller.prototype.applyFilters$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:k_WX5Fr9GE2q3Z5LDnA6lg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k_WX5Fr9GE2q3Z5LDnA6lg:imAmwO_q5_nOXyRMlOj5XQ", "Connect2_OrbitMobile_MUI", "PopUp_OrbitBookletFilters", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:k_WX5Fr9GE2q3Z5LDnA6lg", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/PopUp_OrbitBookletFilters On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/PopUp_OrbitBookletFilters On Ready");
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"hA9aT830fkKxPDjbih_Lqg": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedOptionListInLocal;
}
},
"LNrq1bkZRk+1xzJ94_jVpw": {
getter: function (varBag, idService) {
return varBag.vars.value.filteredLocalitiesVar;
}
},
"ALMsx2Of10Ku4ndA2+2QzQ": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedOptionListInLocal;
}
},
"YqKacqaMiEOsDjoDaT4bUA": {
getter: function (varBag, idService) {
return varBag.listFilter_LocalityListVar.value;
}
},
"+ZYKJfS8T0eXEdiOSO9OoA": {
getter: function (varBag, idService) {
return varBag.vars.value.dropdownWidgetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WCmyX0I9ekS4b3OIJqWdlA": {
getter: function (varBag, idService) {
return varBag.dropdownTogglePopupVar.value;
}
},
"IhaHYYxHTkK4iSeiY5u0Ig": {
getter: function (varBag, idService) {
return varBag.vars.value.dropdownWidgetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5Q4gg6yYwUOp8Qm_iWLdsg": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedOptionListInLocal;
}
},
"9AllJdrTVkKrw7CR5NT7ZQ": {
getter: function (varBag, idService) {
return varBag.dropdownClearValidationVar.value;
}
},
"0ns3+f2Kck6WdwBdtzgo9w": {
getter: function (varBag, idService) {
return varBag.dropdownClearVar.value;
}
},
"hALkYp_Jo0+HtDq00x12_g": {
getter: function (varBag, idService) {
return varBag.vars.value.updateLocalitiesVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"TMCQRwk29E2WHJ8nC5UVvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.localitiesVar;
}
},
"u30st0WjfUmVraNm+PNHrw": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedOptionListInLocal;
}
},
"BT87noyacUiaJTAMXRDw8A": {
getter: function (varBag, idService) {
return varBag.listAnyVar.value;
}
},
"_p6X7xS7C0KXktE3O8tQvw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_PositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Ksz+E4yHr0q_SzflZbbwjw": {
getter: function (varBag, idService) {
return varBag.dropdownClearValidation_LocalitiesVar.value;
}
},
"y5aEZqOCQUqHJWwyBKPAng": {
getter: function (varBag, idService) {
return varBag.dropdownClear_CountriesVar.value;
}
},
"cFJkvbbzk0qjQiWdpdoOaA": {
getter: function (varBag, idService) {
return varBag.dropdownClear_LocalitiesVar.value;
}
},
"0Ak77mFV70CVZfbNSiXxfA": {
getter: function (varBag, idService) {
return varBag.dropdownClearValidation_CountriesVar.value;
}
},
"djgwm7BwlEWGWW9zLK1apA": {
getter: function (varBag, idService) {
return varBag.vars.value.isGuestCheckboxInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"F7Dz2wDaREuQVMBTowpVaQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isHelperCheckboxInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SmitYy5GFk2okHHr5Gw_5g": {
getter: function (varBag, idService) {
return varBag.dropdownClearValidationVar.value;
}
},
"p4Bvm4vsU0mVO4_LBl2icg": {
getter: function (varBag, idService) {
return varBag.dropdownClearVar.value;
}
},
"LCvb1cVdbEqz4tlkY7SoTw": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedFiltersVar;
}
},
"y44MCj7HcEa5BYgG8MrsiA": {
getter: function (varBag, idService) {
return varBag.model.variables.dynamicFiltersVar;
}
},
"76jIr09_e0KFYxUHkIlO6Q": {
getter: function (varBag, idService) {
return varBag.model.variables.availableFiltersIn;
}
},
"clYT6bByH0WHGYd51YAK8w": {
getter: function (varBag, idService) {
return varBag.model.variables.currentFiltersIn;
}
},
"iiiZONSITU25vG+MqXwlgw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Checkbox_Guest"));
})(varBag.model, idService);
}
},
"d7bBxFnTZEaF8+Ow0TrJ7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Checkbox_Helpers"));
})(varBag.model, idService);
}
},
"5DVKQroMXUCUwxRr1i3b_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DropdownTags_Roles"));
})(varBag.model, idService);
}
},
"LHP86hFwpk+fwWHlBk8bTw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DropdownTags_Countries"));
})(varBag.model, idService);
}
},
"TS+zDpc7dk2GXR8vatL18A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DropdownTags_Localities"));
})(varBag.model, idService);
}
},
"xUI7ij9jVkaRt2lHDkh2+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Secondary"));
})(varBag.model, idService);
}
},
"6HGZcQV1mka9OiSfBRfDmA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Primary"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
