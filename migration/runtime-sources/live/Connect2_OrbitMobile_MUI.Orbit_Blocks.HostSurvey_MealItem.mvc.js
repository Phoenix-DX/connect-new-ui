define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Survey", "Connect2_OrbitMobile_MUI.model$LocalMealTypeList", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRec", "Connect2_OrbitMobile_MUI.controller$GetMealTypeByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Edit_HostSurvey_Meal", "edit_HostSurvey_MealVar", "Edit_HostSurvey_Meal", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec());
}, false, Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec), 
this.attr("In_IsSurveyConfirmed", "in_IsSurveyConfirmedIn", "In_IsSurveyConfirmed", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsSurveyConfirmedInDataFetchStatus", "_in_IsSurveyConfirmedInDataFetchStatus", "_in_IsSurveyConfirmedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostSurvey_Meal", "in_HostSurvey_MealIn", "In_HostSurvey_Meal", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec());
}, false, Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec), 
this.attr("_in_HostSurvey_MealInDataFetchStatus", "_in_HostSurvey_MealInDataFetchStatus", "_in_HostSurvey_MealInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MealTypes", "in_MealTypesIn", "In_MealTypes", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalMealTypeList());
}, false, Connect2_OrbitMobile_MUIModel.LocalMealTypeList), 
this.attr("_in_MealTypesInDataFetchStatus", "_in_MealTypesInDataFetchStatus", "_in_MealTypesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_StepProperties", "in_StepPropertiesIn", "In_StepProperties", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.StepPropertiesRec());
}, false, Connect2_OrbitMobile_MUIModel.StepPropertiesRec), 
this.attr("_in_StepPropertiesInDataFetchStatus", "_in_StepPropertiesInDataFetchStatus", "_in_StepPropertiesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Checkbox_HostPreference: OS.Model.ValidationWidgetRecord,
Input_ConfortableCapacity: OS.Model.ValidationWidgetRecord,
Input_StretchCapacity: OS.Model.ValidationWidgetRecord
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
if("In_IsSurveyConfirmed" in inputs) {
this.variables.in_IsSurveyConfirmedIn = inputs.In_IsSurveyConfirmed;
if("_in_IsSurveyConfirmedInDataFetchStatus" in inputs) {
this.variables._in_IsSurveyConfirmedInDataFetchStatus = inputs._in_IsSurveyConfirmedInDataFetchStatus;
}

}

if("In_HostSurvey_Meal" in inputs) {
this.variables.in_HostSurvey_MealIn = inputs.In_HostSurvey_Meal;
if("_in_HostSurvey_MealInDataFetchStatus" in inputs) {
this.variables._in_HostSurvey_MealInDataFetchStatus = inputs._in_HostSurvey_MealInDataFetchStatus;
}

}

if("In_MealTypes" in inputs) {
this.variables.in_MealTypesIn = inputs.In_MealTypes;
if("_in_MealTypesInDataFetchStatus" in inputs) {
this.variables._in_MealTypesInDataFetchStatus = inputs._in_MealTypesInDataFetchStatus;
}

}

if("In_StepProperties" in inputs) {
this.variables.in_StepPropertiesIn = inputs.In_StepProperties;
if("_in_StepPropertiesInDataFetchStatus" in inputs) {
this.variables._in_StepPropertiesInDataFetchStatus = inputs._in_StepPropertiesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_MealItem");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_Item.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealPills.mvc$view", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Survey", "Connect2_OrbitMobile_MUI.model$LocalMealTypeList", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRec", "Connect2_OrbitMobile_MUI.controller$GetMealTypeByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealPills_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_MealItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealPills_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_controller;
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
style: "orbit-host-survey-meal-item",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, {
inputs: {
In_HasDelete: false,
In_HasEdit: (!(model.variables.in_StepPropertiesIn.isEditAttr) && !(model.variables.in_IsSurveyConfirmedIn)),
_in_HasEditInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StepPropertiesInDataFetchStatus, model.variables._in_IsSurveyConfirmedInDataFetchStatus),
In_Title: model.variables.in_HostSurvey_MealIn.milestoneDescriptionAttr,
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_MealInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click_Edit$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_Item Click_Edit");
controller.click_Edit$Action(controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Status: PlaceholderContent.Empty,
placeholder_Content: new PlaceholderContent(function () {
return [$if(model.variables.edit_HostSurvey_MealVar.isEditAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width font-size-s display-flex flex-direction-row align-items-baseline justify-content-flex-start",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-meeting",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-s",
value: model.getCachedValue(idService.getId("pirTbAGWp0+X8kzf75hI9w.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDate_Survey$Action(model.variables.edit_HostSurvey_MealVar.eventDateAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.edit_HostSurvey_MealVar.eventDateAttr;
}),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width display-flex flex-direction-row align-items-center justify-content-flex-start margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.in_IsSurveyConfirmedIn),
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.edit_HostSurvey_MealVar.isPreferredAttr, function (value) {
model.variables.edit_HostSurvey_MealVar.isPreferredAttr = value;
}),
_idProps: {
service: idService,
name: "Checkbox_HostPreference"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "font-size-s margin-left-s",
value: model.getCachedValue(idService.getId("qofgMMVZIkCnvpvIyuxQhg.Value"), function () {
return (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getMealTypeByJSON_Name$Action(model.variables.edit_HostSurvey_MealVar.nameAttr, model.variables.in_MealTypesIn, callContext).out_MealTypeOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).labelAttr + " (Preferred Meal)");
}, function () {
return model.variables.edit_HostSurvey_MealVar.nameAttr;
}, function () {
return model.variables.in_MealTypesIn;
}),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MealTypesInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "grid-split-input-cont",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "grid-split-input-1",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_ConfortableCapacity",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Comfortable Capacity"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onKeyUp: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_MealItem/Input_ConfortableCapacity onkeyup");
controller.onKeyup_CapacityInputs$Action(idService.getId("Input_ConfortableCapacity"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_MealItem/Input_ConfortableCapacity onfocus");
controller.onFocus_Inputs$Action(idService.getId("Input_ConfortableCapacity"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
min: "0",
max: "9999",
"inputmode": "numeric",
pattern: "[0-9]*",
maxLength: "4"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 0,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_MealItem/Input_ConfortableCapacity OnChange");
controller.onChange_Inputs$Action(idService.getId("Input_ConfortableCapacity"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
prompt: "0",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_MealVar.comfortableCapacityAttr, function (value) {
model.variables.edit_HostSurvey_MealVar.comfortableCapacityAttr = value;
}),
_idProps: {
service: idService,
name: "Input_ConfortableCapacity"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "grid-split-input-2",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_StretchCapacity",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Stretch Capacity"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onKeyUp: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_MealItem/Input_StretchCapacity onkeyup");
controller.onKeyup_CapacityInputs$Action(idService.getId("Input_StretchCapacity"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_MealItem/Input_StretchCapacity onfocus");
controller.onFocus_Inputs$Action(idService.getId("Input_StretchCapacity"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
min: "0",
max: "9999",
"inputmode": "numeric",
pattern: "[0-9]*",
maxLength: "4"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 0,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_MealItem/Input_StretchCapacity OnChange");
controller.onChange_Inputs$Action(idService.getId("Input_StretchCapacity"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
prompt: "0",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_MealVar.stretchCapacityAttr, function (value) {
model.variables.edit_HostSurvey_MealVar.stretchCapacityAttr = value;
}),
_idProps: {
service: idService,
name: "Input_StretchCapacity"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
}))))];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealPills_mvc_view, {
inputs: {
In_HostSurvey_Meal: model.variables.edit_HostSurvey_MealVar
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
uuid: "16",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_MealTypesIn), asPrimitiveValue(model.variables._in_MealTypesInDataFetchStatus), asPrimitiveValue(model.variables._in_IsSurveyConfirmedInDataFetchStatus), asPrimitiveValue(model.variables.in_IsSurveyConfirmedIn), asPrimitiveValue(model.variables.edit_HostSurvey_MealVar)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$controller.OnKeyup_CapacityInputs.ValidateInputJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$controller.MealForm_Validate.GetInputValuesJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$controller.OnFocus_Inputs.ScrollIntoViewJS", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Survey", "Connect2_OrbitMobile_MUI.model$LocalMealTypeList", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRec", "Connect2_OrbitMobile_MUI.controller$GetMealTypeByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_controller_OnKeyup_CapacityInputs_ValidateInputJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_controller_MealForm_Validate_GetInputValuesJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_controller_OnFocus_Inputs_ScrollIntoViewJS) {
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
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:iLIgEaCtBkmcCWv1aPmwZA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.jI8lOrjrrUausfno0Mjw4g/ClientActions.iLIgEaCtBkmcCWv1aPmwZA:DZiJRlHn4EFZgA65IeZ8vQ", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K_4v6v1O90+4UcSV4ljphg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Is Survey Confirmed?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:spn43QBgCUe0TB_eRkGhpQ", callContext.id) && model.variables.in_IsSurveyConfirmedIn)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vewFMU6NIEWFSOAR6XKz4w", callContext.id);
} else {
// Tryin to save?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zb83NGXYqEWe3TgJ_mj6yA", callContext.id) && model.variables.in_StepPropertiesIn.trySaveAttr)) {
// Is in Edit?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mhbzq+6L4kKHwILrmywlHA", callContext.id) && model.variables.edit_HostSurvey_MealVar.isEditAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VCsfwyszPkOQZYM7pDp6YA", callContext.id);
// Execute Action: MealForm_Validate
return controller._mealForm_Validate$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ysJe5gMiBUeC9gOkWdjc_Q", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ysJe5gMiBUeC9gOkWdjc_Q", callContext.id);
}

});
} else {
// Is to Edit?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Grg8lTw0uUSIQdesGRE_yQ", callContext.id) && model.variables.in_HostSurvey_MealIn.isEditAttr)) {
// Already editing?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZR4auuqL50+1AuL4vt0+bQ", callContext.id) && model.variables.edit_HostSurvey_MealVar.isEditAttr)) {
// Is ResetMealData?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lkSYH3EcKE6G60SWOG++4w", callContext.id) && !(model.variables.in_HostSurvey_MealIn.resetMealDataAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ebRDrbb3L0GR+gn3cv4qfw", callContext.id);
return OS.Flow.returnAsync();

}

}

} else {
// Was editing?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cqH7EHtISEiP5TmTdkkgng", callContext.id) && !(model.variables.edit_HostSurvey_MealVar.isEditAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jK68LQaB+0qw6jsCSJR7sw", callContext.id);
return OS.Flow.returnAsync();

}

}

// Set Meal data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qm0Z1KMObkefj3I0IQ+8ZA", callContext.id);
// Edit_HostSurvey_Meal = In_HostSurvey_Meal
model.variables.edit_HostSurvey_MealVar = model.variables.in_HostSurvey_MealIn;
// Is ResetMealData?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AwDCRd5ZHkSkgry+Mr33yg", callContext.id) && model.variables.in_HostSurvey_MealIn.resetMealDataAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VEhAbp70W0ab4ZEZjciLHg", callContext.id);
// Trigger Event: MealDataReset
return controller.mealDataReset$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ytc2F4_+8kiFL_fmwSbmYA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jK68LQaB+0qw6jsCSJR7sw", callContext.id);
}

});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iLIgEaCtBkmcCWv1aPmwZA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iLIgEaCtBkmcCWv1aPmwZA", callContext.id);
throw ex;

});
};
Controller.prototype._onKeyup_CapacityInputs$Action = function (inputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnKeyup_CapacityInputs");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.OnKeyup_CapacityInputs$vars"))());
vars.value.inputIdInLocal = inputIdIn;
var validateInputJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.validateInputJSResult = validateInputJSResult;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:aVq9FELaJkOwcNYKX9H2Cg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.jI8lOrjrrUausfno0Mjw4g/ClientActions.aVq9FELaJkOwcNYKX9H2Cg:YZF6rzvXejyZUuLRppom_A", "Connect2_OrbitMobile_MUI", "OnKeyup_CapacityInputs", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uLtxoW2t4kOCluRkpytWUg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JvWOOG0IOEmgrdy5mpP6rw", callContext.id);
validateInputJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_controller_OnKeyup_CapacityInputs_ValidateInputJS, "ValidateInput", "OnKeyup_CapacityInputs", {
InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.inputIdInLocal, OS.DataTypes.DataTypes.Text),
CorrectedValue: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.OnKeyup_CapacityInputs$validateInputJSResult"))();
jsNodeResult.correctedValueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CorrectedValue, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OtzhgfQUrkuDWyJ+XbqcTQ", callContext.id) && ((validateInputJSResult.value.correctedValueOut) !== ("")))) {
// InputMaxCapacity
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tL8CBORNKk2YYV_+Go9TUQ", callContext.id) && (vars.value.inputIdInLocal === idService.getId("Input_StretchCapacity")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZYaQxm7QSE6jHuhROnY0Hw", callContext.id);
// Edit_HostSurvey_Meal.StretchCapacity = ValidateInput.CorrectedValue
model.variables.edit_HostSurvey_MealVar.stretchCapacityAttr = validateInputJSResult.value.correctedValueOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ISBXRabtU0SXHg8wmpC4Yw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WoBgmwGwmE6IalYAxcfOXA", callContext.id);
// Edit_HostSurvey_Meal.ComfortableCapacity = ValidateInput.CorrectedValue
model.variables.edit_HostSurvey_MealVar.comfortableCapacityAttr = validateInputJSResult.value.correctedValueOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ISBXRabtU0SXHg8wmpC4Yw", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9pQfpLrw4EW1EKCLh0y2cA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:aVq9FELaJkOwcNYKX9H2Cg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.OnKeyup_CapacityInputs$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.OnKeyup_CapacityInputs$validateInputJSResult", [{
name: "CorrectedValue",
attrName: "correctedValueOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onChange_Inputs$Action = function (inputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_Inputs");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.OnChange_Inputs$vars"))());
vars.value.inputIdInLocal = inputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ODHFbNsf6U+4TcQkNdEajw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.jI8lOrjrrUausfno0Mjw4g/ClientActions.ODHFbNsf6U+4TcQkNdEajw:gqWGhNznZs9D8p8qW9uavQ", "Connect2_OrbitMobile_MUI", "OnChange_Inputs", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7LKE+7DbDUuAmsAU_X+gSw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:h7F64U790kmS_7umoXDDew", callContext.id) && (vars.value.inputIdInLocal === idService.getId("Input_ConfortableCapacity")))) {
// Set Min Capacity
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:19ONfVVz0U+if5_xVaYh2Q", callContext.id);
// Input_ConfortableCapacity.Valid = Edit_HostSurvey_Meal.ComfortableCapacity <> ""
model.widgets.get(idService.getId("Input_ConfortableCapacity")).validAttr = ((model.variables.edit_HostSurvey_MealVar.comfortableCapacityAttr) !== (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:19ONfVVz0U+if5_xVaYh2Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_ConfortableCapacity.ValidationMessage = If
model.widgets.get(idService.getId("Input_ConfortableCapacity")).validationMessageAttr = (((model.variables.edit_HostSurvey_MealVar.comfortableCapacityAttr === "")) ? (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Comfortable Capacity", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) : (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0j0w+u9bok6aVDcKmPQOQQ", callContext.id);
} else {
if((vars.value.inputIdInLocal === idService.getId("Input_StretchCapacity"))) {
// Set Max Capacity
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eMNMKJ78FEGCrvDycmCtCw", callContext.id);
// Input_StretchCapacity.Valid = Edit_HostSurvey_Meal.StretchCapacity <> ""
model.widgets.get(idService.getId("Input_StretchCapacity")).validAttr = ((model.variables.edit_HostSurvey_MealVar.stretchCapacityAttr) !== (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eMNMKJ78FEGCrvDycmCtCw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_StretchCapacity.ValidationMessage = If
model.widgets.get(idService.getId("Input_StretchCapacity")).validationMessageAttr = (((model.variables.edit_HostSurvey_MealVar.stretchCapacityAttr === "")) ? (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Stretch Capacity", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) : (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0j0w+u9bok6aVDcKmPQOQQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0j0w+u9bok6aVDcKmPQOQQ", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ODHFbNsf6U+4TcQkNdEajw", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.OnChange_Inputs$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:vyZPdaZb2Uy4DF3UK8ZZwg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.jI8lOrjrrUausfno0Mjw4g/ClientActions.vyZPdaZb2Uy4DF3UK8ZZwg:PgBsySuZip1EWzF5q6_oUw", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lPlRCF1Rkkq+S8qM6ejKXQ", callContext.id);
// Set Meal data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S3aBoUaU802f7vHtmtxH7g", callContext.id);
// Edit_HostSurvey_Meal = In_HostSurvey_Meal
model.variables.edit_HostSurvey_MealVar = model.variables.in_HostSurvey_MealIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_o2U7ZMmuk26UAArqiH+kw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vyZPdaZb2Uy4DF3UK8ZZwg", callContext.id);
}

};
Controller.prototype._mealForm_Validate$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("MealForm_Validate");
callContext = controller.callContext(callContext);
var getInputValuesJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getInputValuesJSResult = getInputValuesJSResult;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:z7_7uAEMjU26LHhD51ZsYA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.jI8lOrjrrUausfno0Mjw4g/ClientActions.z7_7uAEMjU26LHhD51ZsYA:cymXbutkjb35EKE4T9sm7g", "Connect2_OrbitMobile_MUI", "MealForm_Validate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:l8kWzoWWR0aVMoZIIiPd1A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DMKC13j7tkWXodRwbET5Zw", callContext.id);
getInputValuesJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_controller_MealForm_Validate_GetInputValuesJS, "GetInputValues", "MealForm_Validate", {
ConfortableCapacityInputId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_ConfortableCapacity"), OS.DataTypes.DataTypes.Text),
StretchCapacityInputId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_StretchCapacity"), OS.DataTypes.DataTypes.Text),
HasConfortableCapacityValue: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
HasStretchCapacityValue: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ConfortableCapacityValue: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
StretchCapacityValue: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.MealForm_Validate$getInputValuesJSResult"))();
jsNodeResult.hasConfortableCapacityValueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasConfortableCapacityValue, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.hasStretchCapacityValueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasStretchCapacityValue, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.confortableCapacityValueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ConfortableCapacityValue, OS.DataTypes.DataTypes.Text);
jsNodeResult.stretchCapacityValueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.StretchCapacityValue, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
// Missing Confortable Capacity?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:saSLjmNh9kSd0UHKyt9KBg", callContext.id) && !(getInputValuesJSResult.value.hasConfortableCapacityValueOut))) {
// Set Invalid Confortable Capicity
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9PfN6FyCFEu63OqKpt7p5g", callContext.id);
// Input_ConfortableCapacity.Valid = False
model.widgets.get(idService.getId("Input_ConfortableCapacity")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9PfN6FyCFEu63OqKpt7p5g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_ConfortableCapacity.ValidationMessage = CreateValidationMessage("Comfortable Capacity", false)
model.widgets.get(idService.getId("Input_ConfortableCapacity")).validationMessageAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Comfortable Capacity", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

// Missing Stretch Capacity?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vt1EJemNP02M7NN0Q8iz7w", callContext.id) && !(getInputValuesJSResult.value.hasStretchCapacityValueOut))) {
// Set Invalid Stretch Capicity
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lkZ1qHbhsEGoNbqdkdWupw", callContext.id);
// Input_StretchCapacity.Valid = False
model.widgets.get(idService.getId("Input_StretchCapacity")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lkZ1qHbhsEGoNbqdkdWupw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_StretchCapacity.ValidationMessage = CreateValidationMessage("Stretch Capacity", false)
model.widgets.get(idService.getId("Input_StretchCapacity")).validationMessageAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Stretch Capacity", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

// Has more Stretch?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZvCLs8H0x0Wn1fsuGd+RvA", callContext.id) && (OS.BuiltinFunctions.textToInteger(getInputValuesJSResult.value.stretchCapacityValueOut) < OS.BuiltinFunctions.textToInteger(getInputValuesJSResult.value.confortableCapacityValueOut)))) {
// Set Invalid Stretch Capicity
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2A2+PeiGfEa3ONzVwhJVcA", callContext.id);
// Input_StretchCapacity.Valid = False
model.widgets.get(idService.getId("Input_StretchCapacity")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2A2+PeiGfEa3ONzVwhJVcA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_StretchCapacity.ValidationMessage = "Stretch Capacity must be greater than Confortable Capacity"
model.widgets.get(idService.getId("Input_StretchCapacity")).validationMessageAttr = "Stretch Capacity must be greater than Confortable Capacity";
}

// Has Invalid Fields?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4nz25cB3YEKGVqgAZrsmtA", callContext.id) && (!(model.widgets.get(idService.getId("Input_StretchCapacity")).validAttr) || !(model.widgets.get(idService.getId("Input_ConfortableCapacity")).validAttr)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ER6XqbZ+cUGkw3QtE3JCdQ", callContext.id);
// Trigger Event: Save_Failed
return controller.save_Failed$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MTI5gB4b6kS4Wvdv4zWIug", callContext.id);
});
} else {
// StretchCapacity
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BIuuqDqCo0CoqjO75FzClQ", callContext.id) && (OS.BuiltinFunctions.length(model.variables.edit_HostSurvey_MealVar.stretchCapacityAttr) > 1))) {
// Remove Leading 0s
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:in6dw4zYaUadYyesx3P2wA", callContext.id);
// Edit_HostSurvey_Meal.StretchCapacity = IntegerToText
model.variables.edit_HostSurvey_MealVar.stretchCapacityAttr = OS.BuiltinFunctions.integerToText(OS.BuiltinFunctions.textToInteger(model.variables.edit_HostSurvey_MealVar.stretchCapacityAttr));
}

// Meal Comfortable Capacity
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8hx2pA77tEmKFKmBGfK_XQ", callContext.id) && (OS.BuiltinFunctions.length(model.variables.edit_HostSurvey_MealVar.comfortableCapacityAttr) > 1))) {
// Remove Leading 0s
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:d_b4GwKgSkO7riKiXDAPLw", callContext.id);
// Edit_HostSurvey_Meal.ComfortableCapacity = IntegerToText
model.variables.edit_HostSurvey_MealVar.comfortableCapacityAttr = OS.BuiltinFunctions.integerToText(OS.BuiltinFunctions.textToInteger(model.variables.edit_HostSurvey_MealVar.comfortableCapacityAttr));
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9MWf8Tn+Wk+VwKCbVGQylQ", callContext.id);
// Trigger Event: Save_Successful
return controller.save_Successful$Action(model.variables.edit_HostSurvey_MealVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:naUnKfHlnk6fb6tNqHJ7Sg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:z7_7uAEMjU26LHhD51ZsYA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:z7_7uAEMjU26LHhD51ZsYA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.MealForm_Validate$getInputValuesJSResult", [{
name: "HasConfortableCapacityValue",
attrName: "hasConfortableCapacityValueOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "HasStretchCapacityValue",
attrName: "hasStretchCapacityValueOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ConfortableCapacityValue",
attrName: "confortableCapacityValueOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StretchCapacityValue",
attrName: "stretchCapacityValueOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onFocus_Inputs$Action = function (inputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnFocus_Inputs");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.OnFocus_Inputs$vars"))());
vars.value.inputIdInLocal = inputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YzJf_Ro28kepBuajYCesZg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.jI8lOrjrrUausfno0Mjw4g/ClientActions.YzJf_Ro28kepBuajYCesZg:fL+3H2+7r3G_LoBht1tiGw", "Connect2_OrbitMobile_MUI", "OnFocus_Inputs", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TCCwkZhSHUi_qjU8l8m6jQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vQBL_Ke46kKxiwgQOBTOzA", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_controller_OnFocus_Inputs_ScrollIntoViewJS, "ScrollIntoView", "OnFocus_Inputs", {
In_InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.inputIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jt_mj7bibECZQTIv5goGgg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YzJf_Ro28kepBuajYCesZg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.OnFocus_Inputs$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onKeyup_CapacityInputs$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onKeyup_CapacityInputs$Action, callContext, inputIdIn);

};
Controller.prototype.onChange_Inputs$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_Inputs$Action, callContext, inputIdIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.mealForm_Validate$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._mealForm_Validate$Action, callContext);

};
Controller.prototype.onFocus_Inputs$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onFocus_Inputs$Action, callContext, inputIdIn);

};
Controller.prototype.save_Failed$Action = function () {
return Promise.resolve();
};
Controller.prototype.mealDataReset$Action = function () {
return Promise.resolve();
};
Controller.prototype.click_Edit$Action = function () {
return Promise.resolve();
};
Controller.prototype.save_Successful$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:jI8lOrjrrUausfno0Mjw4g:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.jI8lOrjrrUausfno0Mjw4g:kifHrOMrdlmT4fSDTE3JqQ", "Connect2_OrbitMobile_MUI", "HostSurvey_MealItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:jI8lOrjrrUausfno0Mjw4g", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_MealItem On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_MealItem On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$controller.OnKeyup_CapacityInputs.ValidateInputJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let el = document.getElementById($parameters.InputId);
if (!el.value.match(/^[0-9]+$/)) {
    $parameters.CorrectedValue = el.value.replace(/[^0-9]/g, '');
    window.requestAnimationFrame(()=>document.getElementById($parameters.InputId).value=$parameters.CorrectedValue);
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$controller.MealForm_Validate.GetInputValuesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let minCap = document.getElementById($parameters.ConfortableCapacityInputId);
let maxCap = document.getElementById($parameters.StretchCapacityInputId);
if(minCap){
    $parameters.HasConfortableCapacityValue = minCap.value !== '';
    $parameters.ConfortableCapacityValue = minCap.value;
}
if(maxCap){
    $parameters.HasStretchCapacityValue = maxCap.value !== '';
    $parameters.StretchCapacityValue = maxCap.value;
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$controller.OnFocus_Inputs.ScrollIntoViewJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.In_InputId).scrollIntoView({ behavior: "smooth", block:"center" });
};
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"6PK9nngKbEiZ_S1pCHQ22g": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JvWOOG0IOEmgrdy5mpP6rw": {
getter: function (varBag, idService) {
return varBag.validateInputJSResult.value;
}
},
"yCV2_1c++UmS+IflF99VAQ": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DMKC13j7tkWXodRwbET5Zw": {
getter: function (varBag, idService) {
return varBag.getInputValuesJSResult.value;
}
},
"rbpXugrjLkqlK87UPkUQ2A": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vQBL_Ke46kKxiwgQOBTOzA": {
getter: function (varBag, idService) {
return varBag.scrollIntoViewJSResult.value;
}
},
"San5FEDpVkKVV5vDMGVLVg": {
getter: function (varBag, idService) {
return varBag.model.variables.edit_HostSurvey_MealVar;
}
},
"SQb07HfcyEO3mzpdsB6ESQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsSurveyConfirmedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"9p79wmsgEEyTK_JvhCgzgQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostSurvey_MealIn;
}
},
"9FP9474ANUad_BBAiFo4TA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MealTypesIn;
}
},
"BjPd5VEPZEm13lA9mq+f6A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_StepPropertiesIn;
}
},
"a7ZBcTIJqUOfhiLNIFAEyg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Status"));
})(varBag.model, idService);
}
},
"Qdh8PaWPe0qk9V8Buyr_sA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"y4wkg+jwY0u88uhL2jrRiw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsEdit"));
})(varBag.model, idService);
}
},
"QxdgWBTE2U2QgFVkWshrEg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Checkbox_HostPreference"));
})(varBag.model, idService);
}
},
"kzJvuwWwOkKmx8qpW+6UOQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_ConfortableCapacity"));
})(varBag.model, idService);
}
},
"H4kY7rVu00KrMdSzNfsoSw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_StretchCapacity"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
