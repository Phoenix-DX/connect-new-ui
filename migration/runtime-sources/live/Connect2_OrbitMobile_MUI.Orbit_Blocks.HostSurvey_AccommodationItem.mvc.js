define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_IS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$LocalBedSizeList", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceList", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$TooltipClose", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage", "Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInputs", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRec", "Connect2_OrbitMobile_MUI.controller$GetGenderPreferenceByJSON_Name", "OutSystemsUI_2_23.controller$TooltipOpen", "Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInput_Single"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_ISModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, Connect2_OrbitMobile_MUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Edit_HostSurvey_Room", "edit_HostSurvey_RoomVar", "Edit_HostSurvey_Room", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec());
}, false, Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec), 
this.attr("NumberOfBeds", "numberOfBedsVar", "NumberOfBeds", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, false, OS.DataTypes.LongIntegerList), 
this.attr("TimeoutObject", "timeoutObjectVar", "TimeoutObject", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("Edit_BedSizes", "edit_BedSizesVar", "Edit_BedSizes", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalBedSizeList());
}, false, Connect2_OrbitMobile_MUIModel.LocalBedSizeList), 
this.attr("In_CurrentRowNumber", "in_CurrentRowNumberIn", "In_CurrentRowNumber", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_CurrentRowNumberInDataFetchStatus", "_in_CurrentRowNumberInDataFetchStatus", "_in_CurrentRowNumberInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsSurveyConfirmed", "in_IsSurveyConfirmedIn", "In_IsSurveyConfirmed", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsSurveyConfirmedInDataFetchStatus", "_in_IsSurveyConfirmedInDataFetchStatus", "_in_IsSurveyConfirmedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_StepProperties", "in_StepPropertiesIn", "In_StepProperties", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.StepPropertiesRec());
}, false, Connect2_OrbitMobile_MUIModel.StepPropertiesRec), 
this.attr("_in_StepPropertiesInDataFetchStatus", "_in_StepPropertiesInDataFetchStatus", "_in_StepPropertiesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_RoomNames", "in_RoomNamesIn", "In_RoomNames", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, false, OS.DataTypes.TextList), 
this.attr("_in_RoomNamesInDataFetchStatus", "_in_RoomNamesInDataFetchStatus", "_in_RoomNamesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostSurvey_Room", "in_HostSurvey_RoomIn", "In_HostSurvey_Room", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec());
}, false, Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec), 
this.attr("_in_HostSurvey_RoomInDataFetchStatus", "_in_HostSurvey_RoomInDataFetchStatus", "_in_HostSurvey_RoomInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HouseFloors", "in_HouseFloorsIn", "In_HouseFloors", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalHouseFloorList());
}, false, Connect2_OrbitMobile_MUIModel.LocalHouseFloorList), 
this.attr("_in_HouseFloorsInDataFetchStatus", "_in_HouseFloorsInDataFetchStatus", "_in_HouseFloorsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_BedSize", "in_BedSizeIn", "In_BedSize", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalBedSizeList());
}, false, Connect2_OrbitMobile_MUIModel.LocalBedSizeList), 
this.attr("_in_BedSizeInDataFetchStatus", "_in_BedSizeInDataFetchStatus", "_in_BedSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_GenderPreferences", "in_GenderPreferencesIn", "In_GenderPreferences", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceList());
}, false, Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceList), 
this.attr("_in_GenderPreferencesInDataFetchStatus", "_in_GenderPreferencesInDataFetchStatus", "_in_GenderPreferencesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Input_RoomName: OS.Model.ValidationWidgetRecord,
ButtonGroup_Arrangements: OS.Model.ValidationWidgetRecord,
Dropdown_BedsNumber: OS.Model.ValidationWidgetRecord,
Dropdown_BedSize: OS.Model.ValidationWidgetRecord,
Dropdown_Floor: OS.Model.ValidationWidgetRecord,
Checkbox_Ensuite: OS.Model.ValidationWidgetRecord,
Checkbox_Toilet: OS.Model.ValidationWidgetRecord,
Checkbox_Shower: OS.Model.ValidationWidgetRecord,
Checkbox_Basin: OS.Model.ValidationWidgetRecord,
Input_Notes: OS.Model.ValidationWidgetRecord
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
if("In_CurrentRowNumber" in inputs) {
this.variables.in_CurrentRowNumberIn = inputs.In_CurrentRowNumber;
if("_in_CurrentRowNumberInDataFetchStatus" in inputs) {
this.variables._in_CurrentRowNumberInDataFetchStatus = inputs._in_CurrentRowNumberInDataFetchStatus;
}

}

if("In_IsSurveyConfirmed" in inputs) {
this.variables.in_IsSurveyConfirmedIn = inputs.In_IsSurveyConfirmed;
if("_in_IsSurveyConfirmedInDataFetchStatus" in inputs) {
this.variables._in_IsSurveyConfirmedInDataFetchStatus = inputs._in_IsSurveyConfirmedInDataFetchStatus;
}

}

if("In_StepProperties" in inputs) {
this.variables.in_StepPropertiesIn = inputs.In_StepProperties;
if("_in_StepPropertiesInDataFetchStatus" in inputs) {
this.variables._in_StepPropertiesInDataFetchStatus = inputs._in_StepPropertiesInDataFetchStatus;
}

}

if("In_RoomNames" in inputs) {
this.variables.in_RoomNamesIn = inputs.In_RoomNames;
if("_in_RoomNamesInDataFetchStatus" in inputs) {
this.variables._in_RoomNamesInDataFetchStatus = inputs._in_RoomNamesInDataFetchStatus;
}

}

if("In_HostSurvey_Room" in inputs) {
this.variables.in_HostSurvey_RoomIn = inputs.In_HostSurvey_Room;
if("_in_HostSurvey_RoomInDataFetchStatus" in inputs) {
this.variables._in_HostSurvey_RoomInDataFetchStatus = inputs._in_HostSurvey_RoomInDataFetchStatus;
}

}

if("In_HouseFloors" in inputs) {
this.variables.in_HouseFloorsIn = inputs.In_HouseFloors;
if("_in_HouseFloorsInDataFetchStatus" in inputs) {
this.variables._in_HouseFloorsInDataFetchStatus = inputs._in_HouseFloorsInDataFetchStatus;
}

}

if("In_BedSize" in inputs) {
this.variables.in_BedSizeIn = inputs.In_BedSize;
if("_in_BedSizeInDataFetchStatus" in inputs) {
this.variables._in_BedSizeInDataFetchStatus = inputs._in_BedSizeInDataFetchStatus;
}

}

if("In_GenderPreferences" in inputs) {
this.variables.in_GenderPreferencesIn = inputs.In_GenderPreferences;
if("_in_GenderPreferencesInDataFetchStatus" in inputs) {
this.variables._in_GenderPreferencesInDataFetchStatus = inputs._in_GenderPreferencesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_AccommodationItem");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_Item.mvc$view", "OutSystemsUI_2_23.Content.Tooltip.mvc$view", "Connect2_LegacyShared.Reusable.InputCounter.mvc$view", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$view", "OutSystemsUI_2_23.Adaptive.Columns4.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationPills.mvc$view", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$LocalBedSizeList", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceList", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$TooltipClose", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage", "Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInputs", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRec", "Connect2_OrbitMobile_MUI.controller$GetGenderPreferenceByJSON_Name", "OutSystemsUI_2_23.controller$TooltipOpen", "Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInput_Single"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, OutSystemsUI_2_23_Content_Tooltip_mvc_view, Connect2_LegacyShared_Reusable_InputCounter_mvc_view, OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, OutSystemsUI_2_23_Adaptive_Columns4_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationPills_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_AccommodationItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, OutSystemsUI_2_23_Content_Tooltip_mvc_view, Connect2_LegacyShared_Reusable_InputCounter_mvc_view, OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, OutSystemsUI_2_23_Adaptive_Columns4_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationPills_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller;
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
style: "orbit-host-survey-accommodation-item",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, {
inputs: {
In_Title: ("Room " + ((model.variables.in_CurrentRowNumberIn + 1)).toString()),
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CurrentRowNumberInDataFetchStatus),
In_HasDelete: !(model.variables.in_IsSurveyConfirmedIn),
_in_HasDeleteInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus),
In_HasEdit: (!(model.variables.in_StepPropertiesIn.isEditAttr) && !(model.variables.in_IsSurveyConfirmedIn)),
_in_HasEditInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StepPropertiesInDataFetchStatus, model.variables._in_IsSurveyConfirmedInDataFetchStatus)
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
},
click_Delete$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_Item Click_Delete");
controller.click_Delete$Action(controller.callContext(eventHandlerContext));
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
return [$if(model.variables.edit_HostSurvey_RoomVar.isEditAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-label-with-icon",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
mandatory: true,
targetWidget: "Input_RoomName",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Room Name"), React.createElement(OutSystemsUI_2_23_Content_Tooltip_mvc_view, {
inputs: {
Trigger: Connect2_OrbitMobile_MUIModel.staticEntities.trigger.onClick,
Position: Connect2_OrbitMobile_MUIModel.staticEntities.position.top,
StartsOpen: false
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
name: "Tooltip_UniqueName",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-circle-warning",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
tooltip: new PlaceholderContent(function () {
return ["Room name must be unique."];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Input_RoomName onfocus");
controller.onFocus_Inputs$Action(idService.getId("Input_RoomName"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 250,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Input_RoomName OnChange");
controller.onChange_Inputs$Action(idService.getId("Input_RoomName"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
prompt: "Provide a room name",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_RoomVar.nameAttr, function (value) {
model.variables.edit_HostSurvey_RoomVar.nameAttr = value;
}),
_idProps: {
service: idService,
name: "Input_RoomName"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
}), React.createElement(Connect2_LegacyShared_Reusable_InputCounter_mvc_view, {
inputs: {
InputId: idService.getId("Input_RoomName")
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
uuid: "8",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "ButtonGroup_Arrangements",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Sleeping Arrangements"), React.createElement(OSWidgets.ButtonGroup, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/ButtonGroup_Arrangements onfocus");
controller.onFocus_Inputs$Action(idService.getId("ButtonGroup_Arrangements"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
mandatory: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/ButtonGroup_Arrangements OnChange");
controller.onChange_SleepingArrengements$Action(idService.getId("ButtonGroup_Arrangements"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "button-group",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_RoomVar.genderPreferenceAttr, function (value) {
model.variables.edit_HostSurvey_RoomVar.genderPreferenceAttr = value;
}),
_idProps: {
service: idService,
name: "ButtonGroup_Arrangements"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
}, React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "button-group-item",
value: model.variables.in_GenderPreferencesIn.getItem(0).jSON_NameAttr,
visible: true,
_idProps: {
service: idService,
name: "ButtonGroupItem_Males"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GenderPreferencesInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_GenderPreferencesIn.getItem(0).labelAttr,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GenderPreferencesInDataFetchStatus)
})), React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "button-group-item",
value: model.variables.in_GenderPreferencesIn.getItem(1).jSON_NameAttr,
visible: true,
_idProps: {
service: idService,
name: "ButtonGroupItem_Females"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GenderPreferencesInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_GenderPreferencesIn.getItem(1).labelAttr,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GenderPreferencesInDataFetchStatus)
})), React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "button-group-item",
value: model.variables.in_GenderPreferencesIn.getItem(2).jSON_NameAttr,
visible: true,
_idProps: {
service: idService,
name: "ButtonGroupItem_Couples"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GenderPreferencesInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_GenderPreferencesIn.getItem(2).labelAttr,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GenderPreferencesInDataFetchStatus)
})), React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "button-group-item",
value: model.variables.in_GenderPreferencesIn.getItem(3).jSON_NameAttr,
visible: true,
_idProps: {
service: idService,
name: "ButtonGroupItem_Either"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GenderPreferencesInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_GenderPreferencesIn.getItem(3).labelAttr,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GenderPreferencesInDataFetchStatus)
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Dropdown_BedsNumber",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Number of Beds in Room"), React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService
},
dropdownMode: /*Custom*/ 1,
emptyValue: "Select number of beds",
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Dropdown_BedsNumber onfocus");
controller.onFocus_Inputs$Action(idService.getId("Dropdown_BedsNumber"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
list: model.variables.numberOfBedsVar,
mandatory: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Dropdown_BedsNumber OnChange");
controller.onChange_NoOfBeds$Action(idService.getId("Dropdown_BedsNumber"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "dropdown",
values: function (elem) {
return elem;
},
variable: model.createVariable(OS.DataTypes.DataTypes.LongInteger, model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr, function (value) {
model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr = value;
}),
_idProps: {
service: idService,
name: "Dropdown_BedsNumber"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: OS.BuiltinFunctions.longIntegerToText(model.variables.numberOfBedsVar.getCurrent(callContext.iterationContext)),
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: []
})), $if(!(model.variables.edit_HostSurvey_RoomVar.bedsAttr.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-beds",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, {
inputs: {
RowItemsDesktop: model.getCachedValue(idService.getId("kl6KQLe4ZEWlXf5jHHCZ4Q.RowItemsDesktop"), function () {
return ((((model.variables.edit_HostSurvey_RoomVar.bedsAttr.length) !== (1))) ? (2) : (1));
}, function () {
return model.variables.edit_HostSurvey_RoomVar.bedsAttr.length;
}),
RowItemsTablet: model.getCachedValue(idService.getId("kl6KQLe4ZEWlXf5jHHCZ4Q.RowItemsTablet"), function () {
return ((((model.variables.edit_HostSurvey_RoomVar.bedsAttr.length) !== (1))) ? (2) : (1));
}, function () {
return model.variables.edit_HostSurvey_RoomVar.bedsAttr.length;
}),
ItemsGap: Connect2_OrbitMobile_MUIModel.staticEntities.space.base,
RowItemsPhone: model.getCachedValue(idService.getId("kl6KQLe4ZEWlXf5jHHCZ4Q.RowItemsPhone"), function () {
return ((((model.variables.edit_HostSurvey_RoomVar.bedsAttr.length) !== (1))) ? (2) : (1));
}, function () {
return model.variables.edit_HostSurvey_RoomVar.bedsAttr.length;
})
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
uuid: "25",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.edit_HostSurvey_RoomVar.bedsAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._in_IsSurveyConfirmedInDataFetchStatus), asPrimitiveValue(model.variables.in_IsSurveyConfirmedIn), asPrimitiveValue(model.variables.edit_BedSizesVar), asPrimitiveValue(model.variables.edit_HostSurvey_RoomVar.bedsAttr.getCurrent(callContext.iterationContext))]
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Dropdown_BedSize",
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Bed Type",
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService
},
dropdownMode: /*Custom*/ 1,
emptyValue: "Select bed type",
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Dropdown_BedSize onfocus");
controller.onFocus_Inputs$Action(idService.getId("Dropdown_BedSize"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
list: model.variables.edit_BedSizesVar,
mandatory: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Dropdown_BedSize OnChange");
controller.onChange_BedSize$Action(idService.getId("Dropdown_BedSize"), model.variables.edit_HostSurvey_RoomVar.bedsAttr.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "dropdown",
values: function (elem) {
return elem.jSON_NameAttr;
},
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_RoomVar.bedsAttr.getCurrent(callContext.iterationContext), function (value) {
model.variables.edit_HostSurvey_RoomVar.bedsAttr.setCurrent(callContext.iterationContext, value);
}),
_idProps: {
service: idService,
name: "Dropdown_BedSize"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.edit_BedSizesVar.getCurrent(callContext.iterationContext).labelAttr,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "3")
},
_dependencies: []
}))];
}, callContext, idService, "3")
},
_dependencies: [asPrimitiveValue(model.variables._in_IsSurveyConfirmedInDataFetchStatus), asPrimitiveValue(model.variables.in_IsSurveyConfirmedIn), asPrimitiveValue(model.variables.edit_BedSizesVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_IsSurveyConfirmedInDataFetchStatus), asPrimitiveValue(model.variables.in_IsSurveyConfirmedIn), asPrimitiveValue(model.variables.edit_BedSizesVar), asPrimitiveValue(model.variables.edit_HostSurvey_RoomVar.bedsAttr)]
}))];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Dropdown_Floor",
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Floor"), React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService
},
dropdownMode: /*Custom*/ 1,
emptyValue: "Select floor",
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Dropdown_Floor onfocus");
controller.onFocus_Inputs$Action(idService.getId("Dropdown_Floor"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
list: model.variables.in_HouseFloorsIn,
mandatory: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Dropdown_Floor OnChange");
controller.onChange_Inputs$Action(idService.getId("Dropdown_Floor"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "dropdown",
values: function (elem) {
return elem.jSON_NameAttr;
},
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_RoomVar.floorAttr, function (value) {
model.variables.edit_HostSurvey_RoomVar.floorAttr = value;
}),
_idProps: {
service: idService,
name: "Dropdown_Floor"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus),
list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseFloorsInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.in_HouseFloorsIn.getCurrent(callContext.iterationContext).labelAttr,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseFloorsInDataFetchStatus),
_dependencies: []
})];
}, callContext, idService, "4")
},
_dependencies: [asPrimitiveValue(model.variables._in_HouseFloorsInDataFetchStatus)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Room Amenities"), React.createElement(OutSystemsUI_2_23_Adaptive_Columns4_mvc_view, {
inputs: {
TabletBehavior: Connect2_OrbitMobile_MUIModel.staticEntities.breakColumns.none,
GutterSize: Connect2_OrbitMobile_MUIModel.staticEntities.gutterSize.base,
PhoneBehavior: Connect2_OrbitMobile_MUIModel.staticEntities.breakColumns.none
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
name: "Columns_Amenities",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
column1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-row align-items-center justify-content-center",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Checkbox_Ensuite onfocus");
controller.onFocus_Inputs$Action(idService.getId("Columns_Amenities"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.edit_HostSurvey_RoomVar.hasEnsuiteAttr, function (value) {
model.variables.edit_HostSurvey_RoomVar.hasEnsuiteAttr = value;
}),
_idProps: {
service: idService,
name: "Checkbox_Ensuite"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base line-height-1 font-size-s white-space-nowrap",
value: "Ensuite",
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
column2: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-row align-items-center justify-content-center",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Checkbox_Toilet onfocus");
controller.onFocus_Inputs$Action(idService.getId("Columns_Amenities"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.edit_HostSurvey_RoomVar.hasToiletAttr, function (value) {
model.variables.edit_HostSurvey_RoomVar.hasToiletAttr = value;
}),
_idProps: {
service: idService,
name: "Checkbox_Toilet"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base line-height-1 font-size-s white-space-nowrap",
value: "Toilet",
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
column3: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-row align-items-center justify-content-center",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Checkbox_Shower onfocus");
controller.onFocus_Inputs$Action(idService.getId("Columns_Amenities"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.edit_HostSurvey_RoomVar.hasShowerAttr, function (value) {
model.variables.edit_HostSurvey_RoomVar.hasShowerAttr = value;
}),
_idProps: {
service: idService,
name: "Checkbox_Shower"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base line-height-1 font-size-s white-space-nowrap",
value: "Shower",
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
column4: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-row align-items-center justify-content-center",
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Checkbox_Basin onfocus");
controller.onFocus_Inputs$Action(idService.getId("Columns_Amenities"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.edit_HostSurvey_RoomVar.hasBasinAttr, function (value) {
model.variables.edit_HostSurvey_RoomVar.hasBasinAttr = value;
}),
_idProps: {
service: idService,
name: "Checkbox_Basin"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base line-height-1 font-size-s white-space-nowrap",
value: "Basin",
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_IsSurveyConfirmedInDataFetchStatus), asPrimitiveValue(model.variables.in_IsSurveyConfirmedIn), asPrimitiveValue(model.variables.edit_HostSurvey_RoomVar.hasBasinAttr), asPrimitiveValue(model.variables.edit_HostSurvey_RoomVar.hasShowerAttr), asPrimitiveValue(model.variables.edit_HostSurvey_RoomVar.hasToiletAttr), asPrimitiveValue(model.variables.edit_HostSurvey_RoomVar.hasEnsuiteAttr)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
targetWidget: "Input_Notes",
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Room Notes (Optional)"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem/Input_Notes onfocus");
controller.onFocus_Inputs$Action(idService.getId("Input_Notes"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 500,
prompt: "Any addtional details",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_RoomVar.roomNoteAttr, function (value) {
model.variables.edit_HostSurvey_RoomVar.roomNoteAttr = value;
}),
_idProps: {
service: idService,
name: "Input_Notes"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
}))];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationPills_mvc_view, {
inputs: {
In_GenderPreferences: model.variables.in_GenderPreferencesIn,
_in_GenderPreferencesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GenderPreferencesInDataFetchStatus),
In_HostSurvey_Room: model.variables.edit_HostSurvey_RoomVar,
In_HouseFloors: model.variables.in_HouseFloorsIn,
_in_HouseFloorsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseFloorsInDataFetchStatus)
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
uuid: "54",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_HouseFloorsIn), asPrimitiveValue(model.variables.edit_BedSizesVar), asPrimitiveValue(model.variables.numberOfBedsVar), asPrimitiveValue(model.variables.in_GenderPreferencesIn), asPrimitiveValue(model.variables._in_HouseFloorsInDataFetchStatus), asPrimitiveValue(model.variables._in_GenderPreferencesInDataFetchStatus), asPrimitiveValue(model.variables._in_IsSurveyConfirmedInDataFetchStatus), asPrimitiveValue(model.variables.in_IsSurveyConfirmedIn), asPrimitiveValue(model.variables.edit_HostSurvey_RoomVar)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.OnChange_SleepingArrengements.DelayValidationJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.PopulateNoOfBeds.GetMaxElementsJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.AccommodationForm_Validate.InvalidateFieldJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.DelayTootlip.DelayTooltipJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.OnDestroy.DestroyJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.OnFocus_Inputs.ScrollIntoViewJS", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$LocalBedSizeList", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceList", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$TooltipClose", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage", "Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInputs", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRec", "Connect2_OrbitMobile_MUI.controller$GetGenderPreferenceByJSON_Name", "OutSystemsUI_2_23.controller$TooltipOpen", "Connect2_OrbitMobile_MUI.controller$ValidateBedSizeInput_Single"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_OnChange_SleepingArrengements_DelayValidationJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_PopulateNoOfBeds_GetMaxElementsJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_AccommodationForm_Validate_InvalidateFieldJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_DelayTootlip_DelayTooltipJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_OnDestroy_DestroyJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_OnFocus_Inputs_ScrollIntoViewJS) {
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
Controller.prototype._onChange_Inputs$Action = function (inputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_Inputs");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.OnChange_Inputs$vars"))());
vars.value.inputIdInLocal = inputIdIn;
var tooltipCloseVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.tooltipCloseVar = tooltipCloseVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:U33jDVJ3nUerGCz_TFqSBQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.U33jDVJ3nUerGCz_TFqSBQ:0MzAR4wYAOmeROF4bnjdGg", "Connect2_OrbitMobile_MUI", "OnChange_Inputs", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OZBoRhMWAkeVWz7SD+t+Ew", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JFWHktP1SkKf0MMbk_NSPg", callContext.id) && (vars.value.inputIdInLocal === idService.getId("Input_RoomName")))) {
// Check Room Name
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9aYdoseu8UGhzxdI8sADrw", callContext.id);
// Input_RoomName.Valid = Edit_HostSurvey_Room.Name <> ""
model.widgets.get(idService.getId("Input_RoomName")).validAttr = ((model.variables.edit_HostSurvey_RoomVar.nameAttr) !== (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9aYdoseu8UGhzxdI8sADrw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_RoomName.ValidationMessage = If
model.widgets.get(idService.getId("Input_RoomName")).validationMessageAttr = (((model.variables.edit_HostSurvey_RoomVar.nameAttr === "")) ? (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Room name", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) : (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jK3ozERWiUukAQQG0XH5ig", callContext.id);
// Execute Action: TooltipClose
tooltipCloseVar.value = OutSystemsUI_2_23Controller.default.tooltipClose$Action(idService.getId("Tooltip_UniqueName"), callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3_kN2Dn8tE2yMx9EZj3mYw", callContext.id);
} else {
if((vars.value.inputIdInLocal === idService.getId("ButtonGroup_Arrangements"))) {
// Check Sleeping Arrangements
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vYKUCeImu0WbKfiuf7q14A", callContext.id);
// ButtonGroup_Arrangements.Valid = Edit_HostSurvey_Room.GenderPreference <> ""
model.widgets.get(idService.getId("ButtonGroup_Arrangements")).validAttr = ((model.variables.edit_HostSurvey_RoomVar.genderPreferenceAttr) !== (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vYKUCeImu0WbKfiuf7q14A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ButtonGroup_Arrangements.ValidationMessage = If
model.widgets.get(idService.getId("ButtonGroup_Arrangements")).validationMessageAttr = (((model.variables.edit_HostSurvey_RoomVar.genderPreferenceAttr === "")) ? (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Sleeping Arrangements", true, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) : (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3_kN2Dn8tE2yMx9EZj3mYw", callContext.id);
} else {
if((vars.value.inputIdInLocal === idService.getId("Dropdown_BedsNumber"))) {
// Check No of Beds
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TifDicLZOUKtzsf+Vd2jDQ", callContext.id);
// Dropdown_BedsNumber.Valid = Edit_HostSurvey_Room.NumberOfBeds <> NullIdentifier
model.widgets.get(idService.getId("Dropdown_BedsNumber")).validAttr = !(model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TifDicLZOUKtzsf+Vd2jDQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_BedsNumber.ValidationMessage = If
model.widgets.get(idService.getId("Dropdown_BedsNumber")).validationMessageAttr = ((!(model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) ? ("") : (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Number of beds", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3_kN2Dn8tE2yMx9EZj3mYw", callContext.id);
} else {
if((vars.value.inputIdInLocal === idService.getId("Dropdown_Floor"))) {
// Check Floor
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9wjLNJR1ZUOJ+O0KXPgGeg", callContext.id);
// Dropdown_Floor.Valid = Edit_HostSurvey_Room.Floor <> ""
model.widgets.get(idService.getId("Dropdown_Floor")).validAttr = ((model.variables.edit_HostSurvey_RoomVar.floorAttr) !== (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9wjLNJR1ZUOJ+O0KXPgGeg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_Floor.ValidationMessage = If
model.widgets.get(idService.getId("Dropdown_Floor")).validationMessageAttr = ((((model.variables.edit_HostSurvey_RoomVar.floorAttr) !== (""))) ? ("") : (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Floor", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3_kN2Dn8tE2yMx9EZj3mYw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9w6vkhNX5Eaq6C+wc03cGw", callContext.id);
}

}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:U33jDVJ3nUerGCz_TFqSBQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.OnChange_Inputs$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._cleanSelectedBeds$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CleanSelectedBeds");
callContext = controller.callContext(callContext);
var listAnyVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listAnyVar = listAnyVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:5T3DDn4OdkCVQV2UPGxLoA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.5T3DDn4OdkCVQV2UPGxLoA:ewh1xkSfz_HHR4S4dOmKhA", "Connect2_OrbitMobile_MUI", "CleanSelectedBeds", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:svmlnNYACEC_HAfyjDe2Xw", callContext.id);
// Foreach Edit_HostSurvey_Room.Beds
callContext.iterationContext.registerIterationStart(model.variables.edit_HostSurvey_RoomVar.bedsAttr);
try {var bedsIterator = callContext.iterationContext.getIterator(model.variables.edit_HostSurvey_RoomVar.bedsAttr);
var bedsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tlOKDrLJU0aiWf80g0f1mg", callContext.id) && (bedsIndex < model.variables.edit_HostSurvey_RoomVar.bedsAttr.length))) {
bedsIterator.currentRowNumber = bedsIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QlkkhDV9MEeX9uz6N3VM4A", callContext.id);
// Execute Action: ListAny
listAnyVar.value = OS.SystemActions.listAny(model.variables.edit_BedSizesVar, function (p) {
return (p.jSON_NameAttr === model.variables.edit_HostSurvey_RoomVar.bedsAttr.getItem(bedsIndex.valueOf()));
}, callContext);

// Found Any?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uYd36AkfKEao1lQ4OlTbaQ", callContext.id) && !(listAnyVar.value.resultOut))) {
// Empty Value
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XFDwTlAYF0OBAxg5aqk8AA", callContext.id);
// Edit_HostSurvey_Room.Beds.Current = ""
model.variables.edit_HostSurvey_RoomVar.bedsAttr.setItem(bedsIndex.valueOf(),"");
}

bedsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.edit_HostSurvey_RoomVar.bedsAttr);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5pROBnH4UE227pjxeNzl8Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:5T3DDn4OdkCVQV2UPGxLoA", callContext.id);
}

};
Controller.prototype._onChange_SleepingArrengements$Action = function (inputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_SleepingArrengements");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.OnChange_SleepingArrengements$vars"))());
vars.value.inputIdInLocal = inputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:PX7VFUwPsEKVi5patV1csg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.PX7VFUwPsEKVi5patV1csg:Ryv9+WM_oKb_Gmy3diHC_A", "Connect2_OrbitMobile_MUI", "OnChange_SleepingArrengements", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NJuIeXxK+U2wnlOcCwDh3A", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rAI9SDOrYUueh3QAjAErBA", callContext.id);
// Execute Action: OnChange_Inputs
controller._onChange_Inputs$Action(vars.value.inputIdInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H_pgUvOVBEebfmD_qKtIvQ", callContext.id);
// Execute Action: FilterBedSizes
controller._filterBedSizes$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yHFRRLptuUyF6LwshDJn9g", callContext.id);
// Execute Action: PopulateNoOfBeds
controller._populateNoOfBeds$Action(callContext);
// Has No of beds?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cmHhyAHxmki5H3VBGHUkgQ", callContext.id) && !(model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))))) {
// Has Default Value?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wSQh8kgGxkSGid4RAcKBaw", callContext.id) && model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(0)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QcLUnGoX_U6PUOZdh52kig", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pGLBuTM2Ek6qdudTPzhP1Q", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_OnChange_SleepingArrengements_DelayValidationJS, "DelayValidation", "OnChange_SleepingArrengements", {
In_DropdownInvalidClass: OS.DataConversion.JSNodeParamConverter.to("not-valid", OS.DataTypes.DataTypes.Text),
In_ValidationMessageClass: OS.DataConversion.JSNodeParamConverter.to("validation-message", OS.DataTypes.DataTypes.Text),
In_ParentClass: OS.DataConversion.JSNodeParamConverter.to(".orbit-host-survey-beds", OS.DataTypes.DataTypes.Text),
In_ValidationMessage: OS.DataConversion.JSNodeParamConverter.to(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Bed type", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OS.DataTypes.DataTypes.Text),
In_CheckEitherValidation: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
In_EmptyString: OS.DataConversion.JSNodeParamConverter.to("Select bed type", OS.DataTypes.DataTypes.Text),
In_InvalidBedSizes: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
ValidateBedSizeInputs: Connect2_OrbitMobile_MUIController.default.getClientActionProxies(controller).validateBedSizeInputs$Action
}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yk5e+1pcEE2BCJ1Pi4tn_w", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QcLUnGoX_U6PUOZdh52kig", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:PX7VFUwPsEKVi5patV1csg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.OnChange_SleepingArrengements$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._populateNoOfBeds$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("PopulateNoOfBeds");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.PopulateNoOfBeds$vars"))());
var listFilter_NumberOfBedsVar = new OS.DataTypes.VariableHolder();
var getMaxElementsJSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize_BedsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserialize_BedsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_NumberOfBedsVar = listFilter_NumberOfBedsVar;
varBag.getMaxElementsJSResult = getMaxElementsJSResult;
varBag.jSONSerialize_BedsVar = jSONSerialize_BedsVar;
varBag.jSONDeserialize_BedsVar = jSONDeserialize_BedsVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1cf0Q1mfYkeDgBip3SCCAw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.1cf0Q1mfYkeDgBip3SCCAw:rm30ncCuRxoPv1EcFpzIwg", "Connect2_OrbitMobile_MUI", "PopulateNoOfBeds", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jKIb8ED45ECgSM+ddWiXDg", callContext.id);
// Get Max Length
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XUYiA6MDiUaoh_y+wTxDxg", callContext.id);
// MaxLength = If
vars.value.maxLengthVar = (((OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getGenderPreferenceByJSON_Name$Action(model.variables.edit_HostSurvey_RoomVar.genderPreferenceAttr, model.variables.in_GenderPreferencesIn, callContext).out_GenderPreferenceOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.genderPreference.couples)) ? (2) : (10));
// Has Beds?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9SQSNuuJN0qlRrtmf3RGlA", callContext.id) && !(model.variables.numberOfBedsVar.isEmpty))) {
// Different Lengths?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vUiOioh3ekW0sc6cSV8Fog", callContext.id) && ((model.variables.numberOfBedsVar.length) !== (vars.value.maxLengthVar)))) {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bPvZ75d3dEihuxLw_jPsMw", callContext.id) && (model.variables.numberOfBedsVar.length < vars.value.maxLengthVar))) {
// Set base BedNo
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mkG0ATFF_kWwdl+iQwxolA", callContext.id);
// BedNo = NumberOfBeds.Length + 1
vars.value.bedNoVar = OS.BuiltinFunctions.integerToLongInteger((model.variables.numberOfBedsVar.length + 1));
} else {
if((model.variables.numberOfBedsVar.length > vars.value.maxLengthVar)) {
// Has chosen beds?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8xkn_3Z4D02sxoJWAN2TKg", callContext.id) && !(model.variables.edit_HostSurvey_RoomVar.bedsAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sDMANBqNVEC8gxtSTuXwAQ", callContext.id);
// JSON Serialize: JSONSerialize_Beds
jSONSerialize_BedsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.edit_HostSurvey_RoomVar.bedsAttr, false, false, OS.DataTypes.DataTypes.Text);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZAFyLXYN8kCjZ3raugK_5w", callContext.id);
getMaxElementsJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_PopulateNoOfBeds_GetMaxElementsJS, "GetMaxElements", "PopulateNoOfBeds", {
In_MaxElements: OS.DataConversion.JSNodeParamConverter.to(vars.value.maxLengthVar, OS.DataTypes.DataTypes.Integer),
In_ListAsJSON: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_BedsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
Out_ListAsJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.PopulateNoOfBeds$getMaxElementsJSResult"))();
jsNodeResult.out_ListAsJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_ListAsJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NYhcidSRBEiqf23XLak43g", callContext.id);
// JSON Deserialize: JSONDeserialize_Beds
jSONDeserialize_BedsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getMaxElementsJSResult.value.out_ListAsJSONOut, OS.DataTypes.TextList, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9ez31FoQXUS+HZxQQnqVJw", callContext.id);
// Execute Action: ListClear_Beds
OS.SystemActions.listClear(model.variables.edit_HostSurvey_RoomVar.bedsAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MWaTSv+5LEWfpr3GjRIlpw", callContext.id);
// Execute Action: ListAppendAll_Beds
OS.SystemActions.listAppendAll(model.variables.edit_HostSurvey_RoomVar.bedsAttr, jSONDeserialize_BedsVar.value.dataOut, callContext);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iOCOCJtFHkmB_mFh4TC+Nw", callContext.id);
// Execute Action: ListFilter_NumberOfBeds
listFilter_NumberOfBedsVar.value = OS.SystemActions.listFilter(model.variables.numberOfBedsVar, function (p) {
return p.lte(OS.BuiltinFunctions.integerToLongInteger(vars.value.maxLengthVar));
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_3bEVJGAEUSBEfBV8c35zg", callContext.id);
// Execute Action: ListClear_NumberOfBeds
OS.SystemActions.listClear(model.variables.numberOfBedsVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Y7PGTSWCjEmz8XWZ9Nm2Sg", callContext.id);
// Execute Action: ListAppendAll_NumberOfBeds
OS.SystemActions.listAppendAll(model.variables.numberOfBedsVar, listFilter_NumberOfBedsVar.value.filteredListOut, callContext);
// Set new Number Of Beds
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8LPaHxOU8UaUjYJLpPRqCQ", callContext.id);
// Edit_HostSurvey_Room.NumberOfBeds = Edit_HostSurvey_Room.Beds.Length
model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr = OS.BuiltinFunctions.integerToLongInteger(model.variables.edit_HostSurvey_RoomVar.bedsAttr.length);
// Has chosen beds?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TyoEryZaM0q1nIZTU_nNNA", callContext.id) && !(model.variables.edit_HostSurvey_RoomVar.bedsAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:C8YmHXSS70i0nFAkzBMg9g", callContext.id);
// Execute Action: CleanSelectedBeds
controller._cleanSelectedBeds$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Rw6kAXdbFk2GXPq_Zocclg", callContext.id);
return ;

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Rw6kAXdbFk2GXPq_Zocclg", callContext.id);
return ;

}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:D5gLsC46BkCxiPL1su3n8g", callContext.id);
return ;

}

}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ulwWE_o3t0uxzfS1J0FAIw", callContext.id);
return ;

}

}

// Set Length Threshold
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c_O+PpOfxk6EfxsWF57RLQ", callContext.id) && (model.variables.numberOfBedsVar.length < vars.value.maxLengthVar))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FTkYPxHiv0Ch0TF0o_2Uug", callContext.id);
// Execute Action: ListAppend_BedNo
OS.SystemActions.listAppend(model.variables.numberOfBedsVar, vars.value.bedNoVar, callContext);
// Increment
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bgTX34hhvUeKhGAdeAjcRw", callContext.id);
// BedNo = BedNo + 1
vars.value.bedNoVar = vars.value.bedNoVar.add(OS.BuiltinFunctions.integerToLongInteger(1));
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eSXaLuEQ00eJJtHxMD5erg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1cf0Q1mfYkeDgBip3SCCAw", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.PopulateNoOfBeds$vars", [{
name: "BedNo",
attrName: "bedNoVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.BuiltinFunctions.integerToLongInteger(1);
}
}, {
name: "MaxLength",
attrName: "maxLengthVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.PopulateNoOfBeds$getMaxElementsJSResult", [{
name: "Out_ListAsJSON",
attrName: "out_ListAsJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onChange_NoOfBeds$Action = function (inputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_NoOfBeds");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.OnChange_NoOfBeds$vars"))());
vars.value.inputIdInLocal = inputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KCiERwkhX0yUX4h74cicTA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.KCiERwkhX0yUX4h74cicTA:xnCamEMCBvKsOWVRzryBuw", "Connect2_OrbitMobile_MUI", "OnChange_NoOfBeds", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YdPM_iI6tkCc8B_Y5KD7rA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z_M9hzz6MUKp6HOky+143w", callContext.id);
// Execute Action: OnChange_Inputs
controller._onChange_Inputs$Action(vars.value.inputIdInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jX_ImHS0pEymTfIczi2Ugg", callContext.id);
// Execute Action: FilterBedSizes
controller._filterBedSizes$Action(callContext);
// Has Number of Beds?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0gr6PEQ+GUWb_+6zfXxMeQ", callContext.id) && !(model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wecHgnHR7kOamgTXRJbBVw", callContext.id);
// Delta = Abs
vars.value.deltaVar = OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.abs(OS.BuiltinFunctions.longIntegerToDecimal(model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.sub(OS.BuiltinFunctions.integerToLongInteger(model.variables.edit_HostSurvey_RoomVar.bedsAttr.length))))));
// Needs more beds?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DMdUYx867kKgoIKt7i+cNQ", callContext.id) && model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.gt(OS.BuiltinFunctions.integerToLongInteger(model.variables.edit_HostSurvey_RoomVar.bedsAttr.length)))) {
// Needs more?
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Kj_tKSlsbki21zI4lMARaQ", callContext.id) && (vars.value.currentPositionVar <= vars.value.deltaVar))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:say0kYLXH0CNqYGyklo_sQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.edit_HostSurvey_RoomVar.bedsAttr, vars.value.bedItemVar, callContext);
// Increment
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PsKOA3ScnkSbMOMFjOkyPQ", callContext.id);
// CurrentPosition = CurrentPosition + 1
vars.value.currentPositionVar = (vars.value.currentPositionVar + 1);
}

} else {
// Needs less beds?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nI6f9v4CIUetpf4KFeP7fQ", callContext.id) && model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.lt(OS.BuiltinFunctions.integerToLongInteger(model.variables.edit_HostSurvey_RoomVar.bedsAttr.length)))) {
// Needs less?
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:01nJD1ZB5UqdcNCaI2p0qQ", callContext.id) && (vars.value.currentPositionVar <= vars.value.deltaVar))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ObsrnYeYiEi8bB12pZCJOQ", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.edit_HostSurvey_RoomVar.bedsAttr, (model.variables.edit_HostSurvey_RoomVar.bedsAttr.length - 1), callContext);
// Increment
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qlyRU+OAE0arFnwnO5q21A", callContext.id);
// CurrentPosition = CurrentPosition + 1
vars.value.currentPositionVar = (vars.value.currentPositionVar + 1);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eSYcGC6GJk+s2569RvJ6mQ", callContext.id);
return ;

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wHH2ADcDB0GbW9l5pJq1Bg", callContext.id);
// Execute Action: CleanSelectedBeds
controller._cleanSelectedBeds$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oCsfQjCbuES9rfE0HWZvvQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WmZkpUnthkitQarsXAJXIw", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.edit_HostSurvey_RoomVar.bedsAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nwgkjeqY50WqTZ+kEn_cVA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KCiERwkhX0yUX4h74cicTA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.OnChange_NoOfBeds$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "BedItem",
attrName: "bedItemVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Delta",
attrName: "deltaVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CurrentPosition",
attrName: "currentPositionVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 1;
}
}]);
Controller.prototype._accommodationForm_Validate$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AccommodationForm_Validate");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.AccommodationForm_Validate$vars"))());
var validateBedSizeInputs_NoCheckVar = new OS.DataTypes.VariableHolder();
var listIndexOf_SameNameVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.validateBedSizeInputs_NoCheckVar = validateBedSizeInputs_NoCheckVar;
varBag.listIndexOf_SameNameVar = listIndexOf_SameNameVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:syRCXdMk_0eEAiqsfkf+eA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.syRCXdMk_0eEAiqsfkf+eA:Z193K5i+gh9Cdy2YWAyn1g", "Connect2_OrbitMobile_MUI", "AccommodationForm_Validate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:h7h+PEVXCk6xbO55DrK+kA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
do {
// Missing Room name?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DaY6GS2Ckk6nTN5KBN_9BQ", callContext.id) && (model.variables.edit_HostSurvey_RoomVar.nameAttr === ""))) {
// Invalidate field
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5EHMqXUbkUOZlkKgQZF1Gg", callContext.id);
// Input_RoomName.Valid = False
model.widgets.get(idService.getId("Input_RoomName")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5EHMqXUbkUOZlkKgQZF1Gg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_RoomName.ValidationMessage = CreateValidationMessage("Room name", false)
model.widgets.get(idService.getId("Input_RoomName")).validationMessageAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Room name", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qEbBEyGBE0mWwVERD+mNuA", callContext.id);
// Execute Action: ListAppend_RoomName
OS.SystemActions.listAppend(vars.value.invalidInputsVar, idService.getId("Input_RoomName"), callContext);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:esd7+MGGYkGe2sxKSU5MbA", callContext.id);
// Execute Action: ListIndexOf_SameName
listIndexOf_SameNameVar.value = OS.SystemActions.listIndexOf(model.variables.in_RoomNamesIn, function (p) {
return (OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.trim(p)) === OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.trim(model.variables.edit_HostSurvey_RoomVar.nameAttr)));
}, callContext);

// Same Name?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yoZkF7fCwkmHtCr58AyRKA", callContext.id) && (((listIndexOf_SameNameVar.value.positionOut) !== (-1)) && ((listIndexOf_SameNameVar.value.positionOut) !== (model.variables.in_CurrentRowNumberIn))))) {
// Invalidate field
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Bd0Ugu3Idky45NlKRRzUog", callContext.id);
// Input_RoomName.Valid = False
model.widgets.get(idService.getId("Input_RoomName")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dsTQnYUoGkeoGSkvI00joQ", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_AccommodationForm_Validate_InvalidateFieldJS, "InvalidateField", "AccommodationForm_Validate", {
In_InputId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_RoomName"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MxF8Mhy680eG2L_khYbWAw", callContext.id);
// Execute Action: ListAppend_SameName
OS.SystemActions.listAppend(vars.value.invalidInputsVar, idService.getId("Input_RoomName"), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BkXs1Nq+TUSsLZ2n0obHEA", callContext.id);
// SameRoomName = True
vars.value.sameRoomNameVar = true;
}

// Missing Gender preference?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eYJYA6E7BkamaWCEXeSgyQ", callContext.id) && (model.variables.edit_HostSurvey_RoomVar.genderPreferenceAttr === ""))) {
// Invalidate field
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cR8JFXf3xEaVUNUFsKv+Uw", callContext.id);
// ButtonGroup_Arrangements.Valid = False
model.widgets.get(idService.getId("ButtonGroup_Arrangements")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cR8JFXf3xEaVUNUFsKv+Uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ButtonGroup_Arrangements.ValidationMessage = CreateValidationMessage("Sleeping Arrangements", True)
model.widgets.get(idService.getId("ButtonGroup_Arrangements")).validationMessageAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Sleeping Arrangements", true, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vetxmOfBQkqo9DGWTCOkVA", callContext.id);
// Execute Action: ListAppend_GenderPreference
OS.SystemActions.listAppend(vars.value.invalidInputsVar, idService.getId("ButtonGroup_Arrangements"), callContext);
}

// Has No of beds?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Bp6WdUgonkaZPdVxEqWI0A", callContext.id) && !(model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))))) {
// Has Default Value?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KjXUy1PpRk+M7Lq5y6IaTg", callContext.id) && !(model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(0))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oEBRTc0YhEaiH9MUDXPt0g", callContext.id);
// Execute Action: ValidateBedSizeInputs_NoCheck
validateBedSizeInputs_NoCheckVar.value = Connect2_OrbitMobile_MUIController.default.validateBedSizeInputs$Action(".orbit-host-survey-beds", "not-valid", OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Bed type", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), "validation-message", "Select bed type", false, "", callContext);

// Bed Size Has Invalid Inputs?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MFfFazpp1kepyvtyT4S6nQ", callContext.id) && validateBedSizeInputs_NoCheckVar.value.out_HasInvalidInputsOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:A+VJPmCCB0+YJDqJCsVynQ", callContext.id);
// Execute Action: ListAppend_BedSize
OS.SystemActions.listAppend(vars.value.invalidInputsVar, validateBedSizeInputs_NoCheckVar.value.out_InvalidInputOut, callContext);
break;
} else {
break;
}

}

}

// Invalidate field
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ktZ+AG6nPEiTkz4TOBjq4g", callContext.id);
// Dropdown_BedsNumber.Valid = False
model.widgets.get(idService.getId("Dropdown_BedsNumber")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ktZ+AG6nPEiTkz4TOBjq4g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_BedsNumber.ValidationMessage = CreateValidationMessage("Number of beds", false)
model.widgets.get(idService.getId("Dropdown_BedsNumber")).validationMessageAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Number of beds", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YpmyDQRRqE+nSURcn0LC8Q", callContext.id);
// Execute Action: ListAppend_BedsNumber
OS.SystemActions.listAppend(vars.value.invalidInputsVar, idService.getId("Dropdown_BedsNumber"), callContext);
} while(false)
;
// Missing Floor?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:A3SBLHYJ806loZmmSUP+iQ", callContext.id) && (model.variables.edit_HostSurvey_RoomVar.floorAttr === ""))) {
// Invalidate field
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_7wdPCTVZUm_Cnd0vS3kAg", callContext.id);
// Dropdown_Floor.Valid = False
model.widgets.get(idService.getId("Dropdown_Floor")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_7wdPCTVZUm_Cnd0vS3kAg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_Floor.ValidationMessage = CreateValidationMessage("Floor", false)
model.widgets.get(idService.getId("Dropdown_Floor")).validationMessageAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Floor", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZnHM1t98OkeJqmdh5KIgsA", callContext.id);
// Execute Action: ListAppend_Dropdown_Floor
OS.SystemActions.listAppend(vars.value.invalidInputsVar, idService.getId("Dropdown_Floor"), callContext);
}

// Has Invalid Inputs?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RMGvNQfCfEOdSz0RmUFX2g", callContext.id) && !(vars.value.invalidInputsVar.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QN0fmwTt00+wftf9GmIiHg", callContext.id);
// Trigger Event: Save_Failed
return controller.save_Failed$Action((((vars.value.invalidInputsVar.length === 1) && (vars.value.invalidInputsVar.getCurrent(callContext.iterationContext) === idService.getId("Input_RoomName"))) && vars.value.sameRoomNameVar), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:alWViE0uHU2HvMKP9HhSfg", callContext.id);
// Execute Action: OnFocus_Inputs
controller._onFocus_Inputs$Action(vars.value.invalidInputsVar.getItem(0), callContext);
}).then(function () {
// Same Room Name?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Gzc+N1IKwE6+lvrj3MuPfA", callContext.id) && vars.value.sameRoomNameVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YviJ_FYnoUyFeL20qFJ1IQ", callContext.id);
// Execute Action: DelayTootlip
controller._delayTootlip$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oU4XyI_+bkC8Gv3bbgT4+w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oG7so5fBDkWJzXGmlzFzbg", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jTBxeXAPxkKpEt3DbGL+Nw", callContext.id);
// Trigger Event: Save_Successful
return controller.save_Successful$Action(model.variables.edit_HostSurvey_RoomVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AeQyQp1G0Um6_IwUX3cviA", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:syRCXdMk_0eEAiqsfkf+eA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:syRCXdMk_0eEAiqsfkf+eA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.AccommodationForm_Validate$vars", [{
name: "InvalidInputs",
attrName: "invalidInputsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}, {
name: "SameRoomName",
attrName: "sameRoomNameVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._delayTootlip$Action = function (isOpenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DelayTootlip");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.DelayTootlip$vars"))());
vars.value.isOpenInLocal = isOpenIn;
var delayTooltipJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.delayTooltipJSResult = delayTooltipJSResult;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:mUF9jK3OB0G6qUEOzznFvg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.mUF9jK3OB0G6qUEOzznFvg:qdQT8Vyi+eWSg0f5b1a0nQ", "Connect2_OrbitMobile_MUI", "DelayTootlip", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vWFx8fIVZUuImKvYGiuIIQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5ezHfVvM2ECtFUdq8suE1g", callContext.id);
delayTooltipJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_DelayTootlip_DelayTooltipJS, "DelayTooltip", "DelayTootlip", {
IsOpen: OS.DataConversion.JSNodeParamConverter.to(vars.value.isOpenInLocal, OS.DataTypes.DataTypes.Boolean),
TooltipId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Tooltip_UniqueName"), OS.DataTypes.DataTypes.Text),
Out_TimeoutObject: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.DelayTootlip$delayTooltipJSResult"))();
jsNodeResult.out_TimeoutObjectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_TimeoutObject, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
TooltipOpen: OutSystemsUI_2_23Controller.default.getClientActionProxies(controller).tooltipOpen$Action,
TooltipClose: OutSystemsUI_2_23Controller.default.getClientActionProxies(controller).tooltipClose$Action
}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nDvFFWq7uUG5g4XDIg8MUg", callContext.id);
// TimeoutObject = DelayTooltip.Out_TimeoutObject
model.variables.timeoutObjectVar = delayTooltipJSResult.value.out_TimeoutObjectOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HJiIB+n4C0inAY6jLCDciQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mUF9jK3OB0G6qUEOzznFvg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.DelayTootlip$vars", [{
name: "IsOpen",
attrName: "isOpenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.DelayTootlip$delayTooltipJSResult", [{
name: "Out_TimeoutObject",
attrName: "out_TimeoutObjectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:P9XcpVrrn02ZrvlHdMVd1w:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.P9XcpVrrn02ZrvlHdMVd1w:lctH4reQ8YTqjJb0w1WivQ", "Connect2_OrbitMobile_MUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YXS76pvNlkeB2tnSz6DDiQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p3m7AOJDkUW1cSLQr8pocQ", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_OnDestroy_DestroyJS, "Destroy", "OnDestroy", {
In_TimeoutObject: OS.DataConversion.JSNodeParamConverter.to(model.variables.timeoutObjectVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jo4uRLPDrUmCekp1ZsNfMg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:P9XcpVrrn02ZrvlHdMVd1w", callContext.id);
}

};
Controller.prototype._onFocus_Inputs$Action = function (inputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnFocus_Inputs");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.OnFocus_Inputs$vars"))());
vars.value.inputIdInLocal = inputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ewCErOw3PEGJ6KRBtKIF+g:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.ewCErOw3PEGJ6KRBtKIF+g:Jj5xUmU95bknb4TGP7zDEg", "Connect2_OrbitMobile_MUI", "OnFocus_Inputs", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NoYEZZq3Nk6SLk3sxrluiA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pqLx8CQBPkK0E82yHZw4Iw", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_controller_OnFocus_Inputs_ScrollIntoViewJS, "ScrollIntoView", "OnFocus_Inputs", {
In_InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.inputIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:l8ajB8fSnUyNufGa1T1NGQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ewCErOw3PEGJ6KRBtKIF+g", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.OnFocus_Inputs$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onChange_BedSize$Action = function (inputIdIn, positionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_BedSize");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.OnChange_BedSize$vars"))());
vars.value.inputIdInLocal = inputIdIn;
vars.value.positionInLocal = positionIn;
var listFilter_CurrentValueVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_CurrentValueVar = listFilter_CurrentValueVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:GUIVseXJZUieZjLouNzjVg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.GUIVseXJZUieZjLouNzjVg:QlrkWQ9fTWzZqvto8kCCoA", "Connect2_OrbitMobile_MUI", "OnChange_BedSize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g0M2DVNBeU+qgzzGT0T7OA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ElBzLZtVXEm+5Pvz9ap6jA", callContext.id);
// Execute Action: ListFilter_CurrentValue
listFilter_CurrentValueVar.value = OS.SystemActions.listFilter(model.variables.in_BedSizeIn, function (p) {
return (p.jSON_NameAttr === model.variables.edit_HostSurvey_RoomVar.bedsAttr.getItem(vars.value.positionInLocal));
}, callContext);

// Set Either Validation to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7mBWmjRJ00Cymb+KwB58wg", callContext.id);
// ForceEitherValidation = False
vars.value.forceEitherValidationVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dg0QIjIki0GYk81zuVpJag", callContext.id);
// Execute Action: ValidateBedSizeInput_Single
Connect2_OrbitMobile_MUIController.default.validateBedSizeInput_Single$Action(vars.value.inputIdInLocal, "not-valid", ((vars.value.forceEitherValidationVar) ? ("Either rooms should not have double beds.") : (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Bed type", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id))), "validation-message", !(listFilter_CurrentValueVar.value.filteredListOut.isEmpty), vars.value.forceEitherValidationVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Li2LXN01I0CNPjuXo4I72Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:GUIVseXJZUieZjLouNzjVg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.OnChange_BedSize$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Position",
attrName: "positionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "ForceEitherValidation",
attrName: "forceEitherValidationVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._initializeVars$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InitializeVars");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:PQO107TEe0epe5wXJLa45w:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.PQO107TEe0epe5wXJLa45w:UZUoQmojhkDLfoBwrL99rg", "Connect2_OrbitMobile_MUI", "InitializeVars", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IJVfcJBtAEe7RlaHBK+BkA", callContext.id);
// IsEdit?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3IV2vyKw6k61jTnM7AZlkQ", callContext.id) && model.variables.edit_HostSurvey_RoomVar.isEditAttr)) {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:77+GqhUlSEywKONo9r7pIQ", callContext.id) && model.variables.numberOfBedsVar.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QU_sJzPD9EmW9RmFddrDXw", callContext.id);
// Execute Action: FilterBedSizes
controller._filterBedSizes$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LASaQ0khYUeeupGLVUHfqQ", callContext.id);
// Execute Action: PopulateNoOfBeds
controller._populateNoOfBeds$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2mZrNdtlJkavqHznZr22xw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:z785qoG2gEaXR3+kqdTQHQ", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WrBxpYljjESN6FGsGH533w", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:PQO107TEe0epe5wXJLa45w", callContext.id);
}

};
Controller.prototype._filterBedSizes$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("FilterBedSizes");
callContext = controller.callContext(callContext);
var listFilter_SinglesVar = new OS.DataTypes.VariableHolder();
var listFilter_DoublesVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilter_SinglesVar = listFilter_SinglesVar;
varBag.listFilter_DoublesVar = listFilter_DoublesVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Irk22rl5D02w7jE9A_jn+A:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.Irk22rl5D02w7jE9A_jn+A:zohoBVBkSkrwYMZ3tsCG2g", "Connect2_OrbitMobile_MUI", "FilterBedSizes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:APU0yM0xt0uBLcnLWHyV8w", callContext.id);
// Is Couple?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wUYwGGR68Uenmkjrnpk0EQ", callContext.id) && (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getGenderPreferenceByJSON_Name$Action(model.variables.edit_HostSurvey_RoomVar.genderPreferenceAttr, model.variables.in_GenderPreferencesIn, callContext).out_GenderPreferenceOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.genderPreference.couples))) {
// No Of Beds
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QtK65O3P8USigZeEgFin7g", callContext.id) && model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(1)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Yr2zqQ7IEEmmIrKIJCnBnw", callContext.id);
// Execute Action: ListFilter_Doubles
listFilter_DoublesVar.value = OS.SystemActions.listFilter(model.variables.in_BedSizeIn, function (p) {
return ((p.idAttr.equals(Connect2_OrbitMobile_MUIModel.staticEntities.bedSize.double) || p.idAttr.equals(Connect2_OrbitMobile_MUIModel.staticEntities.bedSize.doubleQueen)) || p.idAttr.equals(Connect2_OrbitMobile_MUIModel.staticEntities.bedSize.doubleKing));
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yKE1XO3jlkaLiNMQJ7emxA", callContext.id);
// Edit_BedSizes = ListFilter_Doubles.FilteredList
model.variables.edit_BedSizesVar = listFilter_DoublesVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cJXPsjVG_E6UJ3VUiRUKjw", callContext.id);
return ;

} else {
if(model.variables.edit_HostSurvey_RoomVar.numberOfBedsAttr.gte(OS.BuiltinFunctions.integerToLongInteger(2))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lqEwIpfiyU2K5pZErE1ccQ", callContext.id);
// Execute Action: ListFilter_Singles
listFilter_SinglesVar.value = OS.SystemActions.listFilter(model.variables.in_BedSizeIn, function (p) {
return (p.idAttr.equals(Connect2_OrbitMobile_MUIModel.staticEntities.bedSize.single) || p.idAttr.equals(Connect2_OrbitMobile_MUIModel.staticEntities.bedSize.singleKing));
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xzQiIgn6D0yJJr6qvzjU3Q", callContext.id);
// Edit_BedSizes = ListFilter_Singles.FilteredList
model.variables.edit_BedSizesVar = listFilter_SinglesVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cJXPsjVG_E6UJ3VUiRUKjw", callContext.id);
return ;

}

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Tsc4_jaWjUWdG5suAqXkCA", callContext.id);
// Edit_BedSizes = In_BedSize
model.variables.edit_BedSizesVar = model.variables.in_BedSizeIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3MmI5P4RCEmJGi6SlGwE8Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Irk22rl5D02w7jE9A_jn+A", callContext.id);
}

};
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:6qQ09aDCdEC4+MBmVqhC_A:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.6qQ09aDCdEC4+MBmVqhC_A:70SUnHiR2ExNPjrvEQ31Mw", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LHaY6KKQQkGMMqaYldgHxA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Is Survey Confirmed?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:drpWrSp4kka_CEr0mIK2pg", callContext.id) && model.variables.in_IsSurveyConfirmedIn)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HEetU+k5QU6Kdhp37l+mEw", callContext.id);
} else {
// Tryin to save?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5u_sAkhLD0uCHE+xQgnhLA", callContext.id) && model.variables.in_StepPropertiesIn.trySaveAttr)) {
// Is in Edit?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E7JwU56myU6ZEoLxcS5vdQ", callContext.id) && model.variables.edit_HostSurvey_RoomVar.isEditAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3XrdrpHN9kWQFFF9Z3X7ag", callContext.id);
// Execute Action: AccommodationForm_Validate
return controller._accommodationForm_Validate$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:47BbMK2xc0yj4ejPGWfeJw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:47BbMK2xc0yj4ejPGWfeJw", callContext.id);
}

});
} else {
// Is to Edit?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O5vWJTq6pEq7gbBdK83kFw", callContext.id) && model.variables.in_HostSurvey_RoomIn.isEditAttr)) {
// Already editing?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q1VDLqzni0qhlYzMuSW2TQ", callContext.id) && model.variables.edit_HostSurvey_RoomVar.isEditAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:47BbMK2xc0yj4ejPGWfeJw", callContext.id);
} else {
// Set Room data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YzpNbaWXdU2oPOsXAWdijA", callContext.id);
// Edit_HostSurvey_Room = In_HostSurvey_Room
model.variables.edit_HostSurvey_RoomVar = model.variables.in_HostSurvey_RoomIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NhHiG7aJ2USLShts_p6q3Q", callContext.id);
// Execute Action: InitializeVars
controller._initializeVars$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S2ZpwFTKzUyQkHzbOTPs9g", callContext.id);
}

} else {
// Was editing?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wsLTdzYYNE+HHTH95354dg", callContext.id) && model.variables.edit_HostSurvey_RoomVar.isEditAttr)) {
// Set Room data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZjXDJkfRe0aj3lEbixfaTA", callContext.id);
// Edit_HostSurvey_Room = In_HostSurvey_Room
model.variables.edit_HostSurvey_RoomVar = model.variables.in_HostSurvey_RoomIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QYk2Ujj8SUef26Id+7GegA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yxyYfo6TeEmNbgBXciN71g", callContext.id);
}

}

}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:6qQ09aDCdEC4+MBmVqhC_A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:6qQ09aDCdEC4+MBmVqhC_A", callContext.id);
throw ex;

});
};
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+xL5_8ZnaEW8V3RA8_FV4w:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw/ClientActions.+xL5_8ZnaEW8V3RA8_FV4w:lmQdeXRW90Umgc1qmZx09w", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RBhcsH+aTEGgF9gdCnAESg", callContext.id);
// Set Room data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lqPVqFBF+EGQK4VT_xblpA", callContext.id);
// Edit_HostSurvey_Room = In_HostSurvey_Room
model.variables.edit_HostSurvey_RoomVar = model.variables.in_HostSurvey_RoomIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JW4EySuQXUmUCjhzrMUV_Q", callContext.id);
// Execute Action: InitializeVars
controller._initializeVars$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YIveiiFIB02+9qMQ5PuQRw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+xL5_8ZnaEW8V3RA8_FV4w", callContext.id);
}

};

Controller.prototype.onChange_Inputs$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_Inputs$Action, callContext, inputIdIn);

};
Controller.prototype.cleanSelectedBeds$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cleanSelectedBeds$Action, callContext);

};
Controller.prototype.onChange_SleepingArrengements$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_SleepingArrengements$Action, callContext, inputIdIn);

};
Controller.prototype.populateNoOfBeds$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._populateNoOfBeds$Action, callContext);

};
Controller.prototype.onChange_NoOfBeds$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_NoOfBeds$Action, callContext, inputIdIn);

};
Controller.prototype.accommodationForm_Validate$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._accommodationForm_Validate$Action, callContext);

};
Controller.prototype.delayTootlip$Action = function (isOpenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._delayTootlip$Action, callContext, isOpenIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onFocus_Inputs$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onFocus_Inputs$Action, callContext, inputIdIn);

};
Controller.prototype.onChange_BedSize$Action = function (inputIdIn, positionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_BedSize$Action, callContext, inputIdIn, positionIn);

};
Controller.prototype.initializeVars$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._initializeVars$Action, callContext);

};
Controller.prototype.filterBedSizes$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._filterBedSizes$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.save_Failed$Action = function () {
return Promise.resolve();
};
Controller.prototype.save_Successful$Action = function () {
return Promise.resolve();
};
Controller.prototype.click_Delete$Action = function () {
return Promise.resolve();
};
Controller.prototype.click_Edit$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:4WVdjIS5h0G_JWVnEs3ECw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.4WVdjIS5h0G_JWVnEs3ECw:0bDxMZFM+Uw7SdbcF9gDLw", "Connect2_OrbitMobile_MUI", "HostSurvey_AccommodationItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:4WVdjIS5h0G_JWVnEs3ECw", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem On Parameters Changed");
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
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.OnChange_SleepingArrengements.DelayValidationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(() => {
    $actions.ValidateBedSizeInputs($parameters.In_ParentClass,$parameters.In_DropdownInvalidClass,$parameters.In_ValidationMessage,$parameters.In_ValidationMessageClass,$parameters.In_EmptyString,$parameters.In_CheckEitherValidation,$parameters.In_InvalidBedSizes);
},100)
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.PopulateNoOfBeds.GetMaxElementsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let lt = JSON.parse($parameters.In_ListAsJSON);
let slt = lt.slice(0,$parameters.In_MaxElements);
$parameters.Out_ListAsJSON = JSON.stringify(slt);
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.AccommodationForm_Validate.InvalidateFieldJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.In_InputId){
    let roomNameInput = document.getElementById($parameters.In_InputId);
    if(!roomNameInput.classList.contains("not-valid")){
        roomNameInput.classList.add("not-valid");
    }
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.DelayTootlip.DelayTooltipJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function toggleTooltip(isOpen,id){
    if(isOpen){
        $actions.TooltipOpen(id);
    }else{
        $actions.TooltipClose(id);
    }
}

$parameters.Out_TimeoutObject = setTimeout(toggleTooltip,500,$parameters.IsOpen,$parameters.TooltipId);
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.OnDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.In_TimeoutObject){
    clearTimeout($parameters.In_TimeoutObject);
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$controller.OnFocus_Inputs.ScrollIntoViewJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.In_InputId).scrollIntoView({ behavior: "smooth", block:"center" });
};
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"8f5GhFLdzEeO0VR5SPO13w": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jK3ozERWiUukAQQG0XH5ig": {
getter: function (varBag, idService) {
return varBag.tooltipCloseVar.value;
}
},
"QlkkhDV9MEeX9uz6N3VM4A": {
getter: function (varBag, idService) {
return varBag.listAnyVar.value;
}
},
"e_sGdG4GBEW4svfUxBwcxw": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pGLBuTM2Ek6qdudTPzhP1Q": {
getter: function (varBag, idService) {
return varBag.delayValidationJSResult.value;
}
},
"2TqPuR7djEujPNPd59534w": {
getter: function (varBag, idService) {
return varBag.vars.value.bedNoVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"J88sOm3ZX0OtFFt8I+VE2Q": {
getter: function (varBag, idService) {
return varBag.vars.value.maxLengthVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"iOCOCJtFHkmB_mFh4TC+Nw": {
getter: function (varBag, idService) {
return varBag.listFilter_NumberOfBedsVar.value;
}
},
"sDMANBqNVEC8gxtSTuXwAQ": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_BedsVar.value;
}
},
"NYhcidSRBEiqf23XLak43g": {
getter: function (varBag, idService) {
return varBag.jSONDeserialize_BedsVar.value;
}
},
"ZAFyLXYN8kCjZ3raugK_5w": {
getter: function (varBag, idService) {
return varBag.getMaxElementsJSResult.value;
}
},
"Zv2JS1aAP0iDPA4E2ZesSg": {
getter: function (varBag, idService) {
return varBag.vars.value.bedItemVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uq01hiGGvU2ZaU_UrAuP4g": {
getter: function (varBag, idService) {
return varBag.vars.value.deltaVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"RUkkHR5Sf0qLOsaoiC6BsQ": {
getter: function (varBag, idService) {
return varBag.vars.value.currentPositionVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"c9wQVePqp0KqYee4XBVaGQ": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1Uj2up5ExkaSWwW92+fpPA": {
getter: function (varBag, idService) {
return varBag.vars.value.invalidInputsVar;
}
},
"XpOuqvO+aEiWA+sEc797Fg": {
getter: function (varBag, idService) {
return varBag.vars.value.sameRoomNameVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oEBRTc0YhEaiH9MUDXPt0g": {
getter: function (varBag, idService) {
return varBag.validateBedSizeInputs_NoCheckVar.value;
}
},
"esd7+MGGYkGe2sxKSU5MbA": {
getter: function (varBag, idService) {
return varBag.listIndexOf_SameNameVar.value;
}
},
"dsTQnYUoGkeoGSkvI00joQ": {
getter: function (varBag, idService) {
return varBag.invalidateFieldJSResult.value;
}
},
"NawvNnXyKUCNctxjoWbj7Q": {
getter: function (varBag, idService) {
return varBag.vars.value.isOpenInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5ezHfVvM2ECtFUdq8suE1g": {
getter: function (varBag, idService) {
return varBag.delayTooltipJSResult.value;
}
},
"p3m7AOJDkUW1cSLQr8pocQ": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"1euL1VVaVkaKOfVFr3Ulmg": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pqLx8CQBPkK0E82yHZw4Iw": {
getter: function (varBag, idService) {
return varBag.scrollIntoViewJSResult.value;
}
},
"H4O6wznZ8EKsMIlrQ3ioUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.forceEitherValidationVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"EwUk1hwW+EukgJXhgcWqdw": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Nk9yavi3rkCTjTm0G8K_8g": {
getter: function (varBag, idService) {
return varBag.vars.value.positionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ElBzLZtVXEm+5Pvz9ap6jA": {
getter: function (varBag, idService) {
return varBag.listFilter_CurrentValueVar.value;
}
},
"lqEwIpfiyU2K5pZErE1ccQ": {
getter: function (varBag, idService) {
return varBag.listFilter_SinglesVar.value;
}
},
"Yr2zqQ7IEEmmIrKIJCnBnw": {
getter: function (varBag, idService) {
return varBag.listFilter_DoublesVar.value;
}
},
"6UepXJmiKUmfL8AvyosVKw": {
getter: function (varBag, idService) {
return varBag.model.variables.edit_HostSurvey_RoomVar;
}
},
"F5DF7dGCdU2S717cRAU5sQ": {
getter: function (varBag, idService) {
return varBag.model.variables.numberOfBedsVar;
}
},
"1W5Naihkg0mE0Tudj7Frtg": {
getter: function (varBag, idService) {
return varBag.model.variables.timeoutObjectVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Y9WBNltqYEmsr67AFQ77zw": {
getter: function (varBag, idService) {
return varBag.model.variables.edit_BedSizesVar;
}
},
"pPCc0IA9PUe3WCuZwJPNzQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CurrentRowNumberIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"9NbubVpnA0ewkHKzeabcjg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsSurveyConfirmedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"IsCkdQOvJU+nFlY+5A4Ivw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_StepPropertiesIn;
}
},
"5LSAXT9fJ0uo3SDFzOJLZw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_RoomNamesIn;
}
},
"J7td8cmTdESa3vINReb5JQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostSurvey_RoomIn;
}
},
"jdDFq7Ykb0e+7GxH7sp5Ow": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseFloorsIn;
}
},
"LC2fHJAdcU+1KdjLapHG1w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BedSizeIn;
}
},
"GH7ArLPXkUO0b9ZdRLLCyA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_GenderPreferencesIn;
}
},
"lZ6mmFgcGUGptGCe+eR7kQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Status"));
})(varBag.model, idService);
}
},
"sQYzNpB+ak6ORrkXhgK37w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"tVHMXET0_keKW7iWNFtc+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsEdit"));
})(varBag.model, idService);
}
},
"2f5XWFH6TUKJYbDevJbWkw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tooltip_UniqueName"));
})(varBag.model, idService);
}
},
"GGgqANBMjkavQQTBQn7LUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"LJMjfXG7h0qRSpS3glQ9SA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tooltip"));
})(varBag.model, idService);
}
},
"UIRIYjLtgEGVOaHuT0WsaA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_RoomName"));
})(varBag.model, idService);
}
},
"Pw_FqyN5zkSRPCxvgPoDCg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroup_Arrangements"));
})(varBag.model, idService);
}
},
"hP4xu5LmsUG+YZnhROA0Qg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroupItem_Males"));
})(varBag.model, idService);
}
},
"boDOXW4_TkKo7zS+67CImA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroupItem_Females"));
})(varBag.model, idService);
}
},
"GVVpPpLx_U2EUMMy3upBoQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroupItem_Couples"));
})(varBag.model, idService);
}
},
"jdUYLhdiYU2T2kecsyNkkQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroupItem_Either"));
})(varBag.model, idService);
}
},
"389P9+ipeE2hZEI3WLNSQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Dropdown_BedsNumber"));
})(varBag.model, idService);
}
},
"MFjL3+zyKE2yG7AS_Y8VbA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasBeds"));
})(varBag.model, idService);
}
},
"2EUhB0Z8OUioq1Tszzc4Zw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"FJ0OeEg5U0uucDkFN53T6w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Dropdown_BedSize"));
})(varBag.model, idService);
}
},
"+alAM5vFcU6BqswVql0TsA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Dropdown_Floor"));
})(varBag.model, idService);
}
},
"Ustc6D6hk02ZMq2hlcH1PQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Columns_Amenities"));
})(varBag.model, idService);
}
},
"IFoi6ySO+k2Nw7aTkBTvoQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column1"));
})(varBag.model, idService);
}
},
"B10Vh7FMlUuXfWHCrePLTQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Checkbox_Ensuite"));
})(varBag.model, idService);
}
},
"6SbMuYAVIEeDBrcODWHkSg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column2"));
})(varBag.model, idService);
}
},
"S6kkDTCL70i7aGuhPX83Cg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Checkbox_Toilet"));
})(varBag.model, idService);
}
},
"a9CK6h4tI06CqFp6_tGH7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column3"));
})(varBag.model, idService);
}
},
"JXVTVItpkE+odE9ivfnu1Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Checkbox_Shower"));
})(varBag.model, idService);
}
},
"4KeoTNYu90uqn8Vb+MOveA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column4"));
})(varBag.model, idService);
}
},
"RkEq0LTu4Ui8U_HqeCpDTw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Checkbox_Basin"));
})(varBag.model, idService);
}
},
"OjTjJhvg_UyZsmPQRstlVA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Notes"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
