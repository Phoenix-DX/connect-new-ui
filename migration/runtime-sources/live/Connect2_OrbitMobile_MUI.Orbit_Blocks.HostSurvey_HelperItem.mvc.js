define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIEntities) {
var OS = OutSystems.Internal;
var GetLocalHelperStatusByJSONNameAggrRec = (function (_super) {
__extends(GetLocalHelperStatusByJSONNameAggrRec, _super);
function GetLocalHelperStatusByJSONNameAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalHelperStatusByJSONNameAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecordList;
GetLocalHelperStatusByJSONNameAggrRec.init();
return GetLocalHelperStatusByJSONNameAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Edit_HostSurvey_Helper", "edit_HostSurvey_HelperVar", "Edit_HostSurvey_Helper", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec());
}, false, Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec), 
this.attr("In_CurrentRowNumber", "in_CurrentRowNumberIn", "In_CurrentRowNumber", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_CurrentRowNumberInDataFetchStatus", "_in_CurrentRowNumberInDataFetchStatus", "_in_CurrentRowNumberInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostSurvey_Helper", "in_HostSurvey_HelperIn", "In_HostSurvey_Helper", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec());
}, false, Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec), 
this.attr("_in_HostSurvey_HelperInDataFetchStatus", "_in_HostSurvey_HelperInDataFetchStatus", "_in_HostSurvey_HelperInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_StepProperties", "in_StepPropertiesIn", "In_StepProperties", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.StepPropertiesRec());
}, false, Connect2_OrbitMobile_MUIModel.StepPropertiesRec), 
this.attr("_in_StepPropertiesInDataFetchStatus", "_in_StepPropertiesInDataFetchStatus", "_in_StepPropertiesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HelperRoles", "in_HelperRolesIn", "In_HelperRoles", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList());
}, false, Connect2_OrbitMobile_MUIModel.LocalHelperRoleList), 
this.attr("_in_HelperRolesInDataFetchStatus", "_in_HelperRolesInDataFetchStatus", "_in_HelperRolesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_FilteredHelperRoles", "in_FilteredHelperRolesIn", "In_FilteredHelperRoles", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList());
}, false, Connect2_OrbitMobile_MUIModel.LocalHelperRoleList), 
this.attr("_in_FilteredHelperRolesInDataFetchStatus", "_in_FilteredHelperRolesInDataFetchStatus", "_in_FilteredHelperRolesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsSurveyConfirmed", "in_IsSurveyConfirmedIn", "In_IsSurveyConfirmed", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsSurveyConfirmedInDataFetchStatus", "_in_IsSurveyConfirmedInDataFetchStatus", "_in_IsSurveyConfirmedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetLocalHelperStatusByJSONName", "getLocalHelperStatusByJSONNameAggr", "getLocalHelperStatusByJSONNameAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalHelperStatusByJSONNameAggrRec());
}, true, GetLocalHelperStatusByJSONNameAggrRec)
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
Dropdown_HelperRoles: OS.Model.ValidationWidgetRecord
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

if("In_HostSurvey_Helper" in inputs) {
this.variables.in_HostSurvey_HelperIn = inputs.In_HostSurvey_Helper;
if("_in_HostSurvey_HelperInDataFetchStatus" in inputs) {
this.variables._in_HostSurvey_HelperInDataFetchStatus = inputs._in_HostSurvey_HelperInDataFetchStatus;
}

}

if("In_StepProperties" in inputs) {
this.variables.in_StepPropertiesIn = inputs.In_StepProperties;
if("_in_StepPropertiesInDataFetchStatus" in inputs) {
this.variables._in_StepPropertiesInDataFetchStatus = inputs._in_StepPropertiesInDataFetchStatus;
}

}

if("In_HelperRoles" in inputs) {
this.variables.in_HelperRolesIn = inputs.In_HelperRoles;
if("_in_HelperRolesInDataFetchStatus" in inputs) {
this.variables._in_HelperRolesInDataFetchStatus = inputs._in_HelperRolesInDataFetchStatus;
}

}

if("In_FilteredHelperRoles" in inputs) {
this.variables.in_FilteredHelperRolesIn = inputs.In_FilteredHelperRoles;
if("_in_FilteredHelperRolesInDataFetchStatus" in inputs) {
this.variables._in_FilteredHelperRolesInDataFetchStatus = inputs._in_FilteredHelperRolesInDataFetchStatus;
}

}

if("In_IsSurveyConfirmed" in inputs) {
this.variables.in_IsSurveyConfirmedIn = inputs.In_IsSurveyConfirmed;
if("_in_IsSurveyConfirmedInDataFetchStatus" in inputs) {
this.variables._in_IsSurveyConfirmedInDataFetchStatus = inputs._in_IsSurveyConfirmedInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_HelperItem");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.entities", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_Item.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation_Survey.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperPills.mvc$view", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUIEntities, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperItem_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperItem_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_Survey_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperPills_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_HelperItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_Survey_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperPills_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperItem_mvc_controller;
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
style: "orbit-host-survey-helper-item",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, {
inputs: {
In_HasPlaceholder: (!(model.variables.edit_HostSurvey_HelperVar.isEditAttr) && ((model.variables.edit_HostSurvey_HelperVar.helperStatusAttr) !== (""))),
In_HasDelete: !(model.variables.in_IsSurveyConfirmedIn),
_in_HasDeleteInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus),
In_Title: ("Helper " + ((model.variables.in_CurrentRowNumberIn + 1)).toString()),
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CurrentRowNumberInDataFetchStatus),
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
placeholder_Status: new PlaceholderContent(function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_ExtendedStyle: model.getCachedValue(idService.getId("HdRRpX6PLUGrQHshpyaI4w.In_ExtendedStyle"), function () {
return (((model.variables.getLocalHelperStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localHelperStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.helperStatus.approved)) ? ("background-color: var(--orbit-green-2); color: var(--orbit-green-6);") : ("background-color: var(--orbit-orange-2); color: var(--orbit-orange-8);"));
}, function () {
return model.variables.getLocalHelperStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localHelperStatusAttr.idAttr;
}),
_in_ExtendedStyleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHelperStatusByJSONNameAggr.dataFetchStatusAttr),
In_IsSmallIcon: true,
In_IconClass: model.getCachedValue(idService.getId("HdRRpX6PLUGrQHshpyaI4w.In_IconClass"), function () {
return (((model.variables.getLocalHelperStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localHelperStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.helperStatus.approved)) ? ("orbit-icon-circle-check") : ((((model.variables.getLocalHelperStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localHelperStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.helperStatus.pending)) ? ("orbit-icon-circle-warning") : ("orbit-icon-warning"))));
}, function () {
return model.variables.getLocalHelperStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localHelperStatusAttr.idAttr;
}),
_in_IconClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHelperStatusByJSONNameAggr.dataFetchStatusAttr),
In_PillText: model.variables.getLocalHelperStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localHelperStatusAttr.labelAttr,
_in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHelperStatusByJSONNameAggr.dataFetchStatusAttr)
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
placeholder_Content: new PlaceholderContent(function () {
return [$if(model.variables.edit_HostSurvey_HelperVar.isEditAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-helper-member",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_Survey_mvc_view, {
inputs: {
In_MemberInformation: model.getCachedValue(idService.getId("7CQB37JiQEa2fKjLKQCAsw.In_MemberInformation"), function () {
return function () {
var rec = new Connect2_OrbitMobile_ISModel.MemberInformationRec();
rec.memberIdAttr = model.variables.edit_HostSurvey_HelperVar.memberIdAttr;
rec.localityAttr = model.variables.edit_HostSurvey_HelperVar.localityNameAttr;
rec.countryCodeAttr = model.variables.edit_HostSurvey_HelperVar.countryNameAttr;
rec.firstNameAttr = model.variables.edit_HostSurvey_HelperVar.firstNameAttr;
rec.lastNameAttr = model.variables.edit_HostSurvey_HelperVar.lastNameAttr;
return rec;
}();
}, function () {
return model.variables.edit_HostSurvey_HelperVar.memberIdAttr;
}, function () {
return model.variables.edit_HostSurvey_HelperVar.localityNameAttr;
}, function () {
return model.variables.edit_HostSurvey_HelperVar.countryNameAttr;
}, function () {
return model.variables.edit_HostSurvey_HelperVar.firstNameAttr;
}, function () {
return model.variables.edit_HostSurvey_HelperVar.lastNameAttr;
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
uuid: "4",
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
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Dropdown_HelperRoles",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Role")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService
},
dropdownMode: /*Custom*/ 1,
emptyValue: "Select role",
enabled: !(model.variables.in_IsSurveyConfirmedIn),
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_HelperItem/Dropdown_HelperRoles onfocus");
controller.onFocus_Inputs$Action(idService.getId("Dropdown_HelperRoles"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
list: model.variables.in_FilteredHelperRolesIn,
mandatory: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_HelperItem/Dropdown_HelperRoles OnChange");
controller.onChange_HelperRoles$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "dropdown",
values: function (elem) {
return elem.jSON_NameAttr;
},
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edit_HostSurvey_HelperVar.helperRoleAttr, function (value) {
model.variables.edit_HostSurvey_HelperVar.helperRoleAttr = value;
}),
_idProps: {
service: idService,
name: "Dropdown_HelperRoles"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSurveyConfirmedInDataFetchStatus),
list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FilteredHelperRolesInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.in_FilteredHelperRolesIn.getCurrent(callContext.iterationContext).labelAttr,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FilteredHelperRolesInDataFetchStatus),
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._in_FilteredHelperRolesInDataFetchStatus)]
}))];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperPills_mvc_view, {
inputs: {
In_HelperRoles: model.variables.in_HelperRolesIn,
_in_HelperRolesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HelperRolesInDataFetchStatus),
In_HostSurvey_Helper: model.variables.edit_HostSurvey_HelperVar
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
uuid: "10",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_HelperRolesIn), asPrimitiveValue(model.variables.in_IsSurveyConfirmedIn), asPrimitiveValue(model.variables.in_FilteredHelperRolesIn), asPrimitiveValue(model.variables.edit_HostSurvey_HelperVar), asPrimitiveValue(model.variables._in_HelperRolesInDataFetchStatus), asPrimitiveValue(model.variables._in_IsSurveyConfirmedInDataFetchStatus), asPrimitiveValue(model.variables._in_FilteredHelperRolesInDataFetchStatus), asPrimitiveValue(model.variables.getLocalHelperStatusByJSONNameAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localHelperStatusAttr.labelAttr), asPrimitiveValue(model.variables.getLocalHelperStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localHelperStatusAttr.idAttr)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.mvc$controller.OnFocus_Inputs.ScrollIntoViewJS", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperItem_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperItem_mvc_controller_OnFocus_Inputs_ScrollIntoViewJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getLocalHelperStatusByJSONName$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getLocalHelperStatusByJSONName$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getLocalHelperStatusByJSONName$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstJSON_Name = model.variables.edit_HostSurvey_HelperVar.helperStatusAttr;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalHelperStatus\".\"Id\" o0, \"ENLocalHelperStatus\".\"Label\" o1, NULL o2";
} else {
selectSql += "\"ENLocalHelperStatus\".\"Id\" o0, \"ENLocalHelperStatus\".\"Label\" o1, \"ENLocalHelperStatus\".\"JSON_Name\" o2";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalHelperStatus\" \"ENLocalHelperStatus\"";
fromAndWhereSql += " WHERE (\"ENLocalHelperStatus\".\"JSON_Name\" = :qpstJSON_Name)";
argsList.add("qpstJSON_Name", /*TEXT*/ 0, qpstJSON_Name);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localHelperStatusAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 1;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_Blocks_HostSurvey_HelperItem$Block$getLocalHelperStatusByJSONNameAggr(model.variables.edit_HostSurvey_HelperVar.helperStatusAttr, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uzzs7hdQRky+nwmcRiwvAw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k7gqHdTit0O_ieI7cbg+9g/ScreenDataSets.uzzs7hdQRky+nwmcRiwvAw:NM3x+psG3BTVzBxu0Gas4A", "Connect2_OrbitMobile_MUI", "GetLocalHelperStatusByJSONName", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_HelperItem/GetLocalHelperStatusByJSONName");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalHelperStatusByJSONNameAggr;
}, function () {
});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uzzs7hdQRky+nwmcRiwvAw", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getLocalHelperStatusByJSONName$AggrRefresh"];
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:iPIkTmYGHEi4o5gDltQj6g:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k7gqHdTit0O_ieI7cbg+9g/ClientActions.iPIkTmYGHEi4o5gDltQj6g:yw9KbVRcSRd67BNyqFWbmw", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pQ4LMcYrkkGx1jZanYUSHQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Is Survey Confirmed?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GyhFxkm8yEG+FD+nnPhgHQ", callContext.id) && model.variables.in_IsSurveyConfirmedIn)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4VweF3vYbEChfzYv7D3EEQ", callContext.id);
} else {
// Tryin to save?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+bwDKFCQr0u78+HLgLSXpQ", callContext.id) && model.variables.in_StepPropertiesIn.trySaveAttr)) {
// Is in Edit?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rosp4Kxy2Uij1n+338WeWA", callContext.id) && model.variables.edit_HostSurvey_HelperVar.isEditAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qhVzBnByAkCXRaT+3kyMZw", callContext.id);
// Execute Action: HelperForm_Validate
return controller._helperForm_Validate$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o+hD9roFckivtWXjxuVrCA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o+hD9roFckivtWXjxuVrCA", callContext.id);
}

});
} else {
// Is to Edit?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E446Qmd1XkO3Dyc2GcbjsA", callContext.id) && model.variables.in_HostSurvey_HelperIn.isEditAttr)) {
// Already editing?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TcQSpc9Uu0qUqLYtco_wlA", callContext.id) && model.variables.edit_HostSurvey_HelperVar.isEditAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o+hD9roFckivtWXjxuVrCA", callContext.id);
return OS.Flow.returnAsync();

}

} else {
// Was editing?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yP6g9M45hkiCDCBDgjaihg", callContext.id) && !(model.variables.edit_HostSurvey_HelperVar.isEditAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z5V9CRi7FUe+2w2OL9Q07g", callContext.id);
return OS.Flow.returnAsync();

}

}

// Set Helper data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ic_BbqhN_k67VX3Mw0Fpfg", callContext.id);
// Edit_HostSurvey_Helper = In_HostSurvey_Helper
model.variables.edit_HostSurvey_HelperVar = model.variables.in_HostSurvey_HelperIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DYBGiNfjf0qOAgM2aXojOA", callContext.id);
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iPIkTmYGHEi4o5gDltQj6g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iPIkTmYGHEi4o5gDltQj6g", callContext.id);
throw ex;

});
};
Controller.prototype._onChange_HelperRoles$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_HelperRoles");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:5sUEc03a6UC29hBOeMWaIw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k7gqHdTit0O_ieI7cbg+9g/ClientActions.5sUEc03a6UC29hBOeMWaIw:iYJkJ1XGCF1hRExr+Js+nQ", "Connect2_OrbitMobile_MUI", "OnChange_HelperRoles", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o0MMsOnp7EmUDgAYpxWvjQ", callContext.id);
// Validate Helper Role
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VfjgMZRapEGZmv9_DyL6jQ", callContext.id);
// Dropdown_HelperRoles.Valid = Edit_HostSurvey_Helper.HelperRole <> ""
model.widgets.get(idService.getId("Dropdown_HelperRoles")).validAttr = ((model.variables.edit_HostSurvey_HelperVar.helperRoleAttr) !== (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VfjgMZRapEGZmv9_DyL6jQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_HelperRoles.ValidationMessage = If
model.widgets.get(idService.getId("Dropdown_HelperRoles")).validationMessageAttr = ((((model.variables.edit_HostSurvey_HelperVar.helperRoleAttr) !== (""))) ? ("") : (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Helper role", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pYCm63mzrkG3ZUuOsTSZMw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:5sUEc03a6UC29hBOeMWaIw", callContext.id);
}

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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:GlgBuAZfyU6k2LED98A_PA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k7gqHdTit0O_ieI7cbg+9g/ClientActions.GlgBuAZfyU6k2LED98A_PA:cRCUVKgdHNJOlQytGZKVGQ", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rmXM69Qn0kSdpcjiSSvUVw", callContext.id);
// Set Helper data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w6sGwvzJFEi3zA+lXqBLfw", callContext.id);
// Edit_HostSurvey_Helper = In_HostSurvey_Helper
model.variables.edit_HostSurvey_HelperVar = model.variables.in_HostSurvey_HelperIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3hGnPli9lECvSdTF2GGzOQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:GlgBuAZfyU6k2LED98A_PA", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.OnFocus_Inputs$vars"))());
vars.value.inputIdInLocal = inputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:TEjZuWEBN0SWASh8DugSoA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k7gqHdTit0O_ieI7cbg+9g/ClientActions.TEjZuWEBN0SWASh8DugSoA:Y+v_pNVyKhIE2pOraC3FdQ", "Connect2_OrbitMobile_MUI", "OnFocus_Inputs", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IUYZK+NJ90WmxD06WVFyYw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Dh7rqJMCC0+ydNLfANQwpg", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperItem_mvc_controller_OnFocus_Inputs_ScrollIntoViewJS, "ScrollIntoView", "OnFocus_Inputs", {
In_InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.inputIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eYLSL1R1gk6mQUSYVZ8uJg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TEjZuWEBN0SWASh8DugSoA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.OnFocus_Inputs$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._helperForm_Validate$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HelperForm_Validate");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ESMIvREMWUiNk4Le4zIvtg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k7gqHdTit0O_ieI7cbg+9g/ClientActions.ESMIvREMWUiNk4Le4zIvtg:EXFKj3puWKLojwnOZ+HESQ", "Connect2_OrbitMobile_MUI", "HelperForm_Validate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CryRFSX4FEWKPhTx99yyYw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Role?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:idknnGFk7k2HkYPMBa0y8Q", callContext.id) && ((model.variables.edit_HostSurvey_HelperVar.helperRoleAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PSdMzk3U+kWqrOAwNIZqQg", callContext.id);
// Trigger Event: Save_Successful
return controller.save_Successful$Action(model.variables.edit_HostSurvey_HelperVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JmmVqjt+mE2gMsWsNL0huQ", callContext.id);
});
} else {
// Set Invalid Helper Role
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YvEunF+Yck2wtNU3rSY3+g", callContext.id);
// Dropdown_HelperRoles.Valid = False
model.widgets.get(idService.getId("Dropdown_HelperRoles")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YvEunF+Yck2wtNU3rSY3+g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_HelperRoles.ValidationMessage = CreateValidationMessage("Helper role", false)
model.widgets.get(idService.getId("Dropdown_HelperRoles")).validationMessageAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Helper role", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5Moj2CHJz0iWzUN4Teuxzw", callContext.id);
// Trigger Event: Save_Failed
return controller.save_Failed$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:h2v0KlKM+0+42YXchCCIkg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ESMIvREMWUiNk4Le4zIvtg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ESMIvREMWUiNk4Le4zIvtg", callContext.id);
throw ex;

});
};

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onChange_HelperRoles$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_HelperRoles$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onFocus_Inputs$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onFocus_Inputs$Action, callContext, inputIdIn);

};
Controller.prototype.helperForm_Validate$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._helperForm_Validate$Action, callContext);

};
Controller.prototype.click_Edit$Action = function () {
return Promise.resolve();
};
Controller.prototype.save_Successful$Action = function () {
return Promise.resolve();
};
Controller.prototype.save_Failed$Action = function () {
return Promise.resolve();
};
Controller.prototype.click_Delete$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:k7gqHdTit0O_ieI7cbg+9g:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.k7gqHdTit0O_ieI7cbg+9g:b1BhwTClQBXNOLLRTem54g", "Connect2_OrbitMobile_MUI", "HostSurvey_HelperItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:k7gqHdTit0O_ieI7cbg+9g", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_HelperItem On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_HelperItem On Parameters Changed");
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
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.mvc$controller.OnFocus_Inputs.ScrollIntoViewJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.In_InputId).scrollIntoView({ behavior: "smooth", block:"center" });
};
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"r5ydmSTFbEmJnL0BUwDs_A": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Dh7rqJMCC0+ydNLfANQwpg": {
getter: function (varBag, idService) {
return varBag.scrollIntoViewJSResult.value;
}
},
"w7IWnouROUeto3sR2Ql+vw": {
getter: function (varBag, idService) {
return varBag.model.variables.edit_HostSurvey_HelperVar;
}
},
"bSbhPjR2dUO+KYWlckvGOA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CurrentRowNumberIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"1_FMqSEBEk6UH+V0FTw8_A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostSurvey_HelperIn;
}
},
"vB5cE2p0gEiprC1qINoiYA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_StepPropertiesIn;
}
},
"2SDuZS4+a0KQ73PL09TixQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HelperRolesIn;
}
},
"O2vAPnPpuky3k8MtEMyWFg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FilteredHelperRolesIn;
}
},
"WAwFe7R_X0eFlbU9CSztnQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsSurveyConfirmedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"uzzs7hdQRky+nwmcRiwvAw": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalHelperStatusByJSONNameAggr;
}
},
"AD7z93kwYEy348sI9P477A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Status"));
})(varBag.model, idService);
}
},
"ThVP6ljvEEuM81g3Di3XeQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"Dsnf8Y4P9EeS8cGoKQMB0w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsEdit"));
})(varBag.model, idService);
}
},
"TDZiNOXzsE6nE_X7ovYTzg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Dropdown_HelperRoles"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
