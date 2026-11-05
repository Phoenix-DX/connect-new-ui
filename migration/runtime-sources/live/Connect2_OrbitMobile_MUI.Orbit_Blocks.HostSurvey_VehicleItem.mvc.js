define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeList", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Edit_HostSurvey_Vehicle", "edit_HostSurvey_VehicleVar", "Edit_HostSurvey_Vehicle", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec());
}, false, Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec), 
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
this.attr("In_HostSurvey_Vehicle", "in_HostSurvey_VehicleIn", "In_HostSurvey_Vehicle", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec());
}, false, Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec), 
this.attr("_in_HostSurvey_VehicleInDataFetchStatus", "_in_HostSurvey_VehicleInDataFetchStatus", "_in_HostSurvey_VehicleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_OwnerType", "in_OwnerTypeIn", "In_OwnerType", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerList());
}, false, Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerList), 
this.attr("_in_OwnerTypeInDataFetchStatus", "_in_OwnerTypeInDataFetchStatus", "_in_OwnerTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_VehicleType", "in_VehicleTypeIn", "In_VehicleType", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalVehicleTypeList());
}, false, Connect2_OrbitMobile_MUIModel.LocalVehicleTypeList), 
this.attr("_in_VehicleTypeInDataFetchStatus", "_in_VehicleTypeInDataFetchStatus", "_in_VehicleTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Dropdown_OwnerType: OS.Model.ValidationWidgetRecord,
Dropdown_VehicleType: OS.Model.ValidationWidgetRecord,
Input_MakeModel: OS.Model.ValidationWidgetRecord,
Input_VehicleNumber: OS.Model.ValidationWidgetRecord,
Input_TotalSeats: OS.Model.ValidationWidgetRecord
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

if("In_HostSurvey_Vehicle" in inputs) {
this.variables.in_HostSurvey_VehicleIn = inputs.In_HostSurvey_Vehicle;
if("_in_HostSurvey_VehicleInDataFetchStatus" in inputs) {
this.variables._in_HostSurvey_VehicleInDataFetchStatus = inputs._in_HostSurvey_VehicleInDataFetchStatus;
}

}

if("In_OwnerType" in inputs) {
this.variables.in_OwnerTypeIn = inputs.In_OwnerType;
if("_in_OwnerTypeInDataFetchStatus" in inputs) {
this.variables._in_OwnerTypeInDataFetchStatus = inputs._in_OwnerTypeInDataFetchStatus;
}

}

if("In_VehicleType" in inputs) {
this.variables.in_VehicleTypeIn = inputs.In_VehicleType;
if("_in_VehicleTypeInDataFetchStatus" in inputs) {
this.variables._in_VehicleTypeInDataFetchStatus = inputs._in_VehicleTypeInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_VehicleItem");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_Item.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehiclePills.mvc$view", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeList", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehiclePills_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_VehicleItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehiclePills_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_controller;
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
style: "orbit-host-survey-vehicle-item",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, {
inputs: {
In_HasDelete: !(model.variables.in_IsSurveyConfirmedIn),
_in_HasDeleteInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus),
In_Title: ("Vehicle " + ((model.variables.in_CurrentRowNumberIn + 1)).toString()),
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CurrentRowNumberInDataFetchStatus),
In_HasEdit: (!(model.variables.in_StepPropertiesIn.isEditAttr) && !(model.variables.in_IsSurveyConfirmedIn)),
_in_HasEditInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StepPropertiesInDataFetchStatus, model.variables._in_IsSurveyConfirmedInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
return [$if(model.variables.edit_HostSurvey_VehicleVar.isEditAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Dropdown_OwnerType",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Owner Type"), React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService
},
dropdownMode: /*Custom*/ 1,
emptyValue: "Select type",
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem/Dropdown_OwnerType onfocus");
controller.onFocus_Inputs$Action(idService.getId("Dropdown_OwnerType"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
list: model.variables.in_OwnerTypeIn,
mandatory: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem/Dropdown_OwnerType OnChange");
controller.onChange_Inputs$Action(idService.getId("Dropdown_OwnerType"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "dropdown",
values: function (elem) {
return elem.jSON_NameAttr;
},
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_VehicleVar.ownerTypeAttr, function (value) {
model.variables.edit_HostSurvey_VehicleVar.ownerTypeAttr = value;
}),
_idProps: {
service: idService,
name: "Dropdown_OwnerType"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus),
list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OwnerTypeInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.in_OwnerTypeIn.getCurrent(callContext.iterationContext).labelAttr,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OwnerTypeInDataFetchStatus),
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._in_OwnerTypeInDataFetchStatus)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Dropdown_VehicleType",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Vehicle Type"), React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService
},
dropdownMode: /*Custom*/ 1,
emptyValue: "Select vehicle",
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem/Dropdown_VehicleType onfocus");
controller.onFocus_Inputs$Action(idService.getId("Dropdown_VehicleType"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
list: model.variables.in_VehicleTypeIn,
mandatory: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem/Dropdown_VehicleType OnChange");
controller.onChange_Inputs$Action(idService.getId("Dropdown_VehicleType"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "dropdown",
values: function (elem) {
return elem.jSON_NameAttr;
},
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_VehicleVar.vehicleTypeAttr, function (value) {
model.variables.edit_HostSurvey_VehicleVar.vehicleTypeAttr = value;
}),
_idProps: {
service: idService,
name: "Dropdown_VehicleType"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus),
list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_VehicleTypeInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.in_VehicleTypeIn.getCurrent(callContext.iterationContext).labelAttr,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_VehicleTypeInDataFetchStatus),
_dependencies: []
})];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables._in_VehicleTypeInDataFetchStatus)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
mandatory: false,
targetWidget: "Input_MakeModel",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Provide Model (Optional)"), React.createElement(OSWidgets.Input, {
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem/Input_MakeModel onfocus");
controller.onFocus_Inputs$Action(idService.getId("Input_MakeModel"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onKeyUp: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem/Input_MakeModel onkeyup");
controller.onKeyup_Inputs$Action(idService.getId("Input_MakeModel"), controller.callContext(eventHandlerContext));
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
maxLength: 150,
prompt: "Model name",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_VehicleVar.vehicleMakeAndModelAttr, function (value) {
model.variables.edit_HostSurvey_VehicleVar.vehicleMakeAndModelAttr = value;
}),
_idProps: {
service: idService,
name: "Input_MakeModel"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
mandatory: false,
targetWidget: "Input_VehicleNumber",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Vehicle Number"), React.createElement(OSWidgets.Input, {
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem/Input_VehicleNumber onfocus");
controller.onFocus_Inputs$Action(idService.getId("Input_VehicleNumber"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onKeyUp: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem/Input_VehicleNumber onkeyup");
controller.onKeyup_Inputs$Action(idService.getId("Input_VehicleNumber"), controller.callContext(eventHandlerContext));
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
maxLength: 10,
prompt: "E.g. KDJ 976",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_VehicleVar.registrationNumberAttr, function (value) {
model.variables.edit_HostSurvey_VehicleVar.registrationNumberAttr = value;
}),
_idProps: {
service: idService,
name: "Input_VehicleNumber"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_TotalSeats",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Total Seats"), React.createElement(OSWidgets.Input, {
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem/Input_TotalSeats onkeyup");
controller.onKeyup_NumericInput$Action(idService.getId("Input_TotalSeats"), controller.callContext(eventHandlerContext));
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem/Input_TotalSeats onfocus");
controller.onFocus_Inputs$Action(idService.getId("Input_TotalSeats"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
min: "1",
max: "99",
maxLength: "2",
"inputmode": "numeric",
type: "text"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Number*/ 2,
mandatory: true,
maxLength: 0,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem/Input_TotalSeats OnChange");
controller.onChange_Inputs$Action(idService.getId("Input_TotalSeats"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
prompt: "0",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.LongInteger, model.variables.edit_HostSurvey_VehicleVar.totalSeatsAttr, function (value) {
model.variables.edit_HostSurvey_VehicleVar.totalSeatsAttr = value;
}),
_idProps: {
service: idService,
name: "Input_TotalSeats"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus)
}))];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehiclePills_mvc_view, {
inputs: {
In_VehicleOwners: model.variables.in_OwnerTypeIn,
_in_VehicleOwnersInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OwnerTypeInDataFetchStatus),
In_HostSurvey_Vehicle: model.variables.edit_HostSurvey_VehicleVar,
In_VehicleTypes: model.variables.in_VehicleTypeIn,
_in_VehicleTypesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_VehicleTypeInDataFetchStatus)
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_VehicleTypeIn), asPrimitiveValue(model.variables.in_IsSurveyConfirmedIn), asPrimitiveValue(model.variables._in_VehicleTypeInDataFetchStatus), asPrimitiveValue(model.variables._in_IsSurveyConfirmedInDataFetchStatus), asPrimitiveValue(model.variables._in_OwnerTypeInDataFetchStatus), asPrimitiveValue(model.variables.in_OwnerTypeIn), asPrimitiveValue(model.variables.edit_HostSurvey_VehicleVar)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$controller.OnFocus_Inputs.ScrollIntoViewJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$controller.OnKeyup_NumericInput.ValidateInputJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$controller.OnKeyup_Inputs.SetCorrectBoundariesJS", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeList", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_controller_OnFocus_Inputs_ScrollIntoViewJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_controller_OnKeyup_NumericInput_ValidateInputJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_controller_OnKeyup_Inputs_SetCorrectBoundariesJS) {
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Ms7sJOUVEUa2vpxO+i27YA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.xfsCTCQOkECI+DUImtLLTg/ClientActions.Ms7sJOUVEUa2vpxO+i27YA:lQZiMpdgpBFlbSk0GlajdA", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PjkpZzjgdEqkjsD8W4XgNA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Is Survey Confirmed?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:W8oIEaTJ3Eaj1ju+XUVDag", callContext.id) && model.variables.in_IsSurveyConfirmedIn)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2iO6MO9PUUine2PG0XWZOg", callContext.id);
} else {
// Tryin to save?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gaNDUg7dTUWjOGuDPk5RVA", callContext.id) && model.variables.in_StepPropertiesIn.trySaveAttr)) {
// Is in Edit?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:on7zfbnkfkyC58tQ_Jiw7A", callContext.id) && model.variables.edit_HostSurvey_VehicleVar.isEditAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mKtzcM9+p0KZfp3dw0KiJg", callContext.id);
// Execute Action: VehicleForm_Validate
return controller._vehicleForm_Validate$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qNFdxIm8R0qW9nzyDp6r9w", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qNFdxIm8R0qW9nzyDp6r9w", callContext.id);
}

});
} else {
// Is to Edit?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1Kq6aeqwX0m0B1UUIDHS6g", callContext.id) && model.variables.in_HostSurvey_VehicleIn.isEditAttr)) {
// Already editing?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b7Mi3o5AY0e3VfiPumJ1Og", callContext.id) && model.variables.edit_HostSurvey_VehicleVar.isEditAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qNFdxIm8R0qW9nzyDp6r9w", callContext.id);
return OS.Flow.returnAsync();

}

} else {
// Was editing?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s3bqC74cFEyGNc0O0nZVmA", callContext.id) && !(model.variables.edit_HostSurvey_VehicleVar.isEditAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DFmz2XkUpki+aAWXC1GUlQ", callContext.id);
return OS.Flow.returnAsync();

}

}

// Set Vehicle data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8IwiNB43DEOGvtEqOPv3gw", callContext.id);
// Edit_HostSurvey_Vehicle = In_HostSurvey_Vehicle
model.variables.edit_HostSurvey_VehicleVar = model.variables.in_HostSurvey_VehicleIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SvR76a8dYkWqKANccpragg", callContext.id);
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Ms7sJOUVEUa2vpxO+i27YA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Ms7sJOUVEUa2vpxO+i27YA", callContext.id);
throw ex;

});
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.OnFocus_Inputs$vars"))());
vars.value.inputIdInLocal = inputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:p9OmOhQ5I02MehQWlzY+sg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.xfsCTCQOkECI+DUImtLLTg/ClientActions.p9OmOhQ5I02MehQWlzY+sg:HYvhAcHW0Ksadd9Kvxf1Pw", "Connect2_OrbitMobile_MUI", "OnFocus_Inputs", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w1EpzjpYq0qkdYTOGUZLVA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IHSofV5oYECFj_gphHgpQg", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_controller_OnFocus_Inputs_ScrollIntoViewJS, "ScrollIntoView", "OnFocus_Inputs", {
In_InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.inputIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+5HOlEqzMU+vRegQcOoZLQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:p9OmOhQ5I02MehQWlzY+sg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.OnFocus_Inputs$vars", [{
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:u40BQg0M_kylWgvj3+yljA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.xfsCTCQOkECI+DUImtLLTg/ClientActions.u40BQg0M_kylWgvj3+yljA:P6NyYT6iTEMND_C6JHUlTA", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iSyXHnoacE+wn5KI4OiA+Q", callContext.id);
// Set Vehicle data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xTxtRxvuZkyAKjoU5I9Rbg", callContext.id);
// Edit_HostSurvey_Vehicle = In_HostSurvey_Vehicle
model.variables.edit_HostSurvey_VehicleVar = model.variables.in_HostSurvey_VehicleIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2OLZx8lxCkmFRQMkn7KNhw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:u40BQg0M_kylWgvj3+yljA", callContext.id);
}

};
Controller.prototype._onChange_Inputs$Action = function (inputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_Inputs");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.OnChange_Inputs$vars"))());
vars.value.inputIdInLocal = inputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:dmc_TgEAT0yn+DEjTVZOcA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.xfsCTCQOkECI+DUImtLLTg/ClientActions.dmc_TgEAT0yn+DEjTVZOcA:8djtlSUvKvi+YeB70psC6Q", "Connect2_OrbitMobile_MUI", "OnChange_Inputs", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nRXcOj0x8EalN3D3+j8iAQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:54gHFrzrFEqTO67R6Z7UDQ", callContext.id) && (vars.value.inputIdInLocal === idService.getId("Dropdown_OwnerType")))) {
// Check Owner Type
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FFhqG+vhZ0mHjE32gcL21g", callContext.id);
// Dropdown_OwnerType.Valid = Edit_HostSurvey_Vehicle.OwnerType <> ""
model.widgets.get(idService.getId("Dropdown_OwnerType")).validAttr = ((model.variables.edit_HostSurvey_VehicleVar.ownerTypeAttr) !== (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FFhqG+vhZ0mHjE32gcL21g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_OwnerType.ValidationMessage = If
model.widgets.get(idService.getId("Dropdown_OwnerType")).validationMessageAttr = ((((model.variables.edit_HostSurvey_VehicleVar.ownerTypeAttr) !== (""))) ? ("") : (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Owner type", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PU_qXKiTDEGUmRaOdBAc3A", callContext.id);
} else {
if((vars.value.inputIdInLocal === idService.getId("Dropdown_VehicleType"))) {
// Check Vehicle Type
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xYVYsDuRykKUQ4BjMJmuTw", callContext.id);
// Dropdown_VehicleType.Valid = Edit_HostSurvey_Vehicle.VehicleType <> ""
model.widgets.get(idService.getId("Dropdown_VehicleType")).validAttr = ((model.variables.edit_HostSurvey_VehicleVar.vehicleTypeAttr) !== (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xYVYsDuRykKUQ4BjMJmuTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_VehicleType.ValidationMessage = If
model.widgets.get(idService.getId("Dropdown_VehicleType")).validationMessageAttr = ((((model.variables.edit_HostSurvey_VehicleVar.vehicleTypeAttr) !== (""))) ? ("") : (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Vehicle type", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PU_qXKiTDEGUmRaOdBAc3A", callContext.id);
} else {
if((vars.value.inputIdInLocal === idService.getId("Input_TotalSeats"))) {
// Check Total Seats
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q8CoXhBglU2_bvzbC00z7w", callContext.id);
// Input_TotalSeats.Valid = Edit_HostSurvey_Vehicle.TotalSeats <> NullIdentifier
model.widgets.get(idService.getId("Input_TotalSeats")).validAttr = !(model.variables.edit_HostSurvey_VehicleVar.totalSeatsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q8CoXhBglU2_bvzbC00z7w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_TotalSeats.ValidationMessage = If
model.widgets.get(idService.getId("Input_TotalSeats")).validationMessageAttr = ((!(model.variables.edit_HostSurvey_VehicleVar.totalSeatsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) ? (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Total seats", true, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) : (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PU_qXKiTDEGUmRaOdBAc3A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rqsc145FtUW+97lEAvjFRQ", callContext.id);
}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dmc_TgEAT0yn+DEjTVZOcA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.OnChange_Inputs$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._vehicleForm_Validate$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("VehicleForm_Validate");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.VehicleForm_Validate$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:WTkXW1xrjUi3f7W0OfrSag:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.xfsCTCQOkECI+DUImtLLTg/ClientActions.WTkXW1xrjUi3f7W0OfrSag:jUtKCFG+rBFTlP0lZ1jktA", "Connect2_OrbitMobile_MUI", "VehicleForm_Validate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Qo8beVBRYE2O07h48TvfuQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Owner Type?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:f4cDpRtLSUu3yDdrGChncw", callContext.id) && !(((model.variables.edit_HostSurvey_VehicleVar.ownerTypeAttr) !== (""))))) {
// Invalidate field
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5r42CngOwUOFvIMKbHPFmQ", callContext.id);
// Dropdown_OwnerType.Valid = False
model.widgets.get(idService.getId("Dropdown_OwnerType")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5r42CngOwUOFvIMKbHPFmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_OwnerType.ValidationMessage = CreateValidationMessage("Owner type", false)
model.widgets.get(idService.getId("Dropdown_OwnerType")).validationMessageAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Owner type", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5r42CngOwUOFvIMKbHPFmQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// HasInvalidInputs = True
vars.value.hasInvalidInputsVar = true;
}

// Has Vehicle Type?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:j8kHhJWQ9kiXj+woW4zGcQ", callContext.id) && !(((model.variables.edit_HostSurvey_VehicleVar.vehicleTypeAttr) !== (""))))) {
// Invalidate field
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i5ZWxcU4EEWmOLUzG+79xA", callContext.id);
// Dropdown_VehicleType.Valid = False
model.widgets.get(idService.getId("Dropdown_VehicleType")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i5ZWxcU4EEWmOLUzG+79xA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_VehicleType.ValidationMessage = CreateValidationMessage("Vehicle type", false)
model.widgets.get(idService.getId("Dropdown_VehicleType")).validationMessageAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Vehicle type", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i5ZWxcU4EEWmOLUzG+79xA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// HasInvalidInputs = True
vars.value.hasInvalidInputsVar = true;
}

// Missing Total Seats?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:80qjceBy7ESJvnal9ZD_Fw", callContext.id) && model.variables.edit_HostSurvey_VehicleVar.totalSeatsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
// Invalidate field
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6K0MwX9n9UCIdQqUSdYKQA", callContext.id);
// Input_TotalSeats.Valid = False
model.widgets.get(idService.getId("Input_TotalSeats")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6K0MwX9n9UCIdQqUSdYKQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_TotalSeats.ValidationMessage = CreateValidationMessage("Total seats", false)
model.widgets.get(idService.getId("Input_TotalSeats")).validationMessageAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Total seats", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6K0MwX9n9UCIdQqUSdYKQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// HasInvalidInputs = True
vars.value.hasInvalidInputsVar = true;
}

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9I_hG+0HqkOwMPJNhFGJIA", callContext.id) && vars.value.hasInvalidInputsVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NPraLkhKU0K__BmMo5EyjA", callContext.id);
// Trigger Event: Save_Failed
return controller.save_Failed$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xGpzg74mZEyh4O5qoyUEYA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Mpr2B1W7I0Sv_jqdDQCr8g", callContext.id);
// Trigger Event: Save_Successful
return controller.save_Successful$Action(model.variables.edit_HostSurvey_VehicleVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5UJ61M7KwkGoabBI3qgG8Q", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:WTkXW1xrjUi3f7W0OfrSag", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:WTkXW1xrjUi3f7W0OfrSag", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.VehicleForm_Validate$vars", [{
name: "HasInvalidInputs",
attrName: "hasInvalidInputsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onKeyup_NumericInput$Action = function (inputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnKeyup_NumericInput");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.OnKeyup_NumericInput$vars"))());
vars.value.inputIdInLocal = inputIdIn;
var validateInputJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.validateInputJSResult = validateInputJSResult;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:pIx7bRo5N06WWnrn1ha9WQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.xfsCTCQOkECI+DUImtLLTg/ClientActions.pIx7bRo5N06WWnrn1ha9WQ:4fXjckpDLSnNfggt9UpWig", "Connect2_OrbitMobile_MUI", "OnKeyup_NumericInput", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JaE9a3xHYk2gQTzuEGOhNg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WqO7w24nuEeP6x1E4zUJSA", callContext.id);
validateInputJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_controller_OnKeyup_NumericInput_ValidateInputJS, "ValidateInput", "OnKeyup_NumericInput", {
InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.inputIdInLocal, OS.DataTypes.DataTypes.Text),
CorrectedValue: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.OnKeyup_NumericInput$validateInputJSResult"))();
jsNodeResult.correctedValueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CorrectedValue, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6CtpsglXqkGyzLnzxOH4Uw", callContext.id) && ((validateInputJSResult.value.correctedValueOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:en26yLMFX0GRcCSbPEZGBA", callContext.id);
// Edit_HostSurvey_Vehicle.TotalSeats = TextToLongInteger
model.variables.edit_HostSurvey_VehicleVar.totalSeatsAttr = OS.BuiltinFunctions.textToLongInteger(validateInputJSResult.value.correctedValueOut);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:C49cupu9gUSwXV8oXg+U8A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:C49cupu9gUSwXV8oXg+U8A", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:pIx7bRo5N06WWnrn1ha9WQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.OnKeyup_NumericInput$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.OnKeyup_NumericInput$validateInputJSResult", [{
name: "CorrectedValue",
attrName: "correctedValueOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onKeyup_Inputs$Action = function (inputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnKeyup_Inputs");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.OnKeyup_Inputs$vars"))());
vars.value.inputIdInLocal = inputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:xJQH8AHH_ESr4V3jPAICaQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.xfsCTCQOkECI+DUImtLLTg/ClientActions.xJQH8AHH_ESr4V3jPAICaQ:GeyfJDM_RaNdTP1+uy8YEA", "Connect2_OrbitMobile_MUI", "OnKeyup_Inputs", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SLa28qgbFECPFBR7NhMdxg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AlaEEV8ExkOX1fZeFvq8Mw", callContext.id) && (vars.value.inputIdInLocal === idService.getId("Input_MakeModel")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LltY64uemk6RHmTmxmrLeA", callContext.id);
// MaxChars = 150
vars.value.maxCharsVar = 150;
} else {
if((vars.value.inputIdInLocal === idService.getId("Input_VehicleNumber"))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T3HKvn0s4kGQ1poX_DaoRQ", callContext.id);
// MaxChars = 10
vars.value.maxCharsVar = 10;
} else {
if((vars.value.inputIdInLocal === idService.getId("Input_TotalSeats"))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H0+FsdDCA0uD+u2KJULoLg", callContext.id);
// MaxChars = 2
vars.value.maxCharsVar = 2;
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gMYH+BTP0ESps7ADAUTQGg", callContext.id);
return ;

}

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:siiCh0S3qUGfduqL_68D2w", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_controller_OnKeyup_Inputs_SetCorrectBoundariesJS, "SetCorrectBoundaries", "OnKeyup_Inputs", {
MaxChars: OS.DataConversion.JSNodeParamConverter.to(vars.value.maxCharsVar, OS.DataTypes.DataTypes.Integer),
InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.inputIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y6R5e5_mNkOXCvRTf7Ztqg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:xJQH8AHH_ESr4V3jPAICaQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.OnKeyup_Inputs$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MaxChars",
attrName: "maxCharsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onFocus_Inputs$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onFocus_Inputs$Action, callContext, inputIdIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onChange_Inputs$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_Inputs$Action, callContext, inputIdIn);

};
Controller.prototype.vehicleForm_Validate$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._vehicleForm_Validate$Action, callContext);

};
Controller.prototype.onKeyup_NumericInput$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onKeyup_NumericInput$Action, callContext, inputIdIn);

};
Controller.prototype.onKeyup_Inputs$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onKeyup_Inputs$Action, callContext, inputIdIn);

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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:xfsCTCQOkECI+DUImtLLTg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.xfsCTCQOkECI+DUImtLLTg:Zt0ugA+RnawzKuKGFuj4TQ", "Connect2_OrbitMobile_MUI", "HostSurvey_VehicleItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:xfsCTCQOkECI+DUImtLLTg", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_VehicleItem On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_VehicleItem On Parameters Changed");
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
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$controller.OnFocus_Inputs.ScrollIntoViewJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.In_InputId).scrollIntoView({ behavior: "smooth", block:"center" });
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$controller.OnKeyup_NumericInput.ValidateInputJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let el = document.getElementById($parameters.InputId);
if (!el.value.match(/^[0-9]+$/)) {
    $parameters.CorrectedValue = el.value.replace(/[^0-9]/g, '');
    window.requestAnimationFrame(()=>document.getElementById($parameters.InputId).value=$parameters.CorrectedValue);
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$controller.OnKeyup_Inputs.SetCorrectBoundariesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let inputSeat = document.getElementById($parameters.InputId);
if(inputSeat){
    inputSeat.value = inputSeat.value.slice(0,$parameters.MaxChars);
}
};
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"eOUNAb1hPEOLwuys1ipVoA": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IHSofV5oYECFj_gphHgpQg": {
getter: function (varBag, idService) {
return varBag.scrollIntoViewJSResult.value;
}
},
"erS0sUhIvkSl6yxbHA752g": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WxlsXozqaUWYDQERQlfgFQ": {
getter: function (varBag, idService) {
return varBag.vars.value.hasInvalidInputsVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"YM+3bnoEkkWYp4045CNN8Q": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WqO7w24nuEeP6x1E4zUJSA": {
getter: function (varBag, idService) {
return varBag.validateInputJSResult.value;
}
},
"tgVy0DKUkkSicozp2bP8Vg": {
getter: function (varBag, idService) {
return varBag.vars.value.maxCharsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"iomGqIQ7WkK3hKtoHiT6lQ": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"siiCh0S3qUGfduqL_68D2w": {
getter: function (varBag, idService) {
return varBag.setCorrectBoundariesJSResult.value;
}
},
"3g8oPen74k6gBV8EGZepBA": {
getter: function (varBag, idService) {
return varBag.model.variables.edit_HostSurvey_VehicleVar;
}
},
"6V_Rcgvgc0SrQsM81vM9WA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CurrentRowNumberIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"5H603Zezr0Sf0NVVTN3cEw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsSurveyConfirmedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"EIbQklG2kUOntX6EwbZ0iQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_StepPropertiesIn;
}
},
"nlFg1LYgYUWeAxGpBkJkgg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostSurvey_VehicleIn;
}
},
"dMeUa78aEEq3b_ZrmuTQYQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OwnerTypeIn;
}
},
"U8Bq0+3mQEqmhjKo6KEFLQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_VehicleTypeIn;
}
},
"3Jlff_HgHkSh6bG6RAPYUg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Status"));
})(varBag.model, idService);
}
},
"MA_8+tLkIUyxMGwzl7mP1Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"nNjc2Oldl0WYT91CE7HlSw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsEdit"));
})(varBag.model, idService);
}
},
"90lnBrBhjEKA7YUl5HhwGw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Dropdown_OwnerType"));
})(varBag.model, idService);
}
},
"v4iJCo1uOEetpsrojveshQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Dropdown_VehicleType"));
})(varBag.model, idService);
}
},
"cHJVXMwHSk2ld6C+2SbRQA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_MakeModel"));
})(varBag.model, idService);
}
},
"QdDYjw2rXUi9YE6g2OGehg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_VehicleNumber"));
})(varBag.model, idService);
}
},
"srGBmOwaiEm55jXwTwXzEA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_TotalSeats"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
