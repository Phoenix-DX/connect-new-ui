define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$model", "Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromDateTime", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainColorVar", "mainColorVarVar", "MainColorVar", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("In_MilestoneSummary", "in_MilestoneSummaryIn", "In_MilestoneSummary", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.Milestone_ScreenRec());
}, false, Connect2_OrbitMobile_BLModel.Milestone_ScreenRec), 
this.attr("_in_MilestoneSummaryInDataFetchStatus", "_in_MilestoneSummaryInDataFetchStatus", "_in_MilestoneSummaryInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsOverrideMainColorVar", "isOverrideMainColorVarIn", "IsOverrideMainColorVar", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_isOverrideMainColorVarInDataFetchStatus", "_isOverrideMainColorVarInDataFetchStatus", "_isOverrideMainColorVarInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsSetUpMeals", "isSetUpMealsIn", "IsSetUpMeals", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isSetUpMealsInDataFetchStatus", "_isSetUpMealsInDataFetchStatus", "_isSetUpMealsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
return {};
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MilestoneSummary" in inputs) {
this.variables.in_MilestoneSummaryIn = inputs.In_MilestoneSummary;
if("_in_MilestoneSummaryInDataFetchStatus" in inputs) {
this.variables._in_MilestoneSummaryInDataFetchStatus = inputs._in_MilestoneSummaryInDataFetchStatus;
}

}

if("IsOverrideMainColorVar" in inputs) {
this.variables.isOverrideMainColorVarIn = inputs.IsOverrideMainColorVar;
if("_isOverrideMainColorVarInDataFetchStatus" in inputs) {
this.variables._isOverrideMainColorVarInDataFetchStatus = inputs._isOverrideMainColorVarInDataFetchStatus;
}

}

if("IsSetUpMeals" in inputs) {
this.variables.isSetUpMealsIn = inputs.IsSetUpMeals;
if("_isSetUpMealsInDataFetchStatus" in inputs) {
this.variables._isSetUpMealsInDataFetchStatus = inputs._isSetUpMealsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.Card_Milestone");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromDateTime", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_view, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.Card_Milestone";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_view, {
inputs: {
In_MainColorVar: model.variables.mainColorVarVar,
In_MilestoneTypeId: model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr,
_in_MilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Template OnClick");
return controller.onHandle_ClickedMilestone$Action(controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("NNlC5E0l7Uy8XHruqOiteg.style"), function () {
return (("background-color: " + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.mainColorVarVar, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color2, callContext).out_ColorVarOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
}, function () {
return model.variables.mainColorVarVar;
})
},
style: "orbit-card-icon-cont",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
className: ("icon orbit-card-icon " + model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.mainIconAttr),
style: model.getCachedValue(idService.getId("u+JHWFrJ+Ee85zOYpCDmOQ.style"), function () {
return (("color: " + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.mainColorVarVar, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color7, callContext).out_ColorVarOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
}, function () {
return model.variables.mainColorVarVar;
})
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-icon",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
placeholder_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.in_MilestoneSummaryIn.titleAttr,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
})];
}),
placeholder_Content: new PlaceholderContent(function () {
return [$if(model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.isTransportMilestoneAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
className: model.getCachedValue(idService.getId("QYRTPCZqH02kdA4fk4lTPA.class"), function () {
return ("orbit-card-content-info" + ((!(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()))) ? (" margin-bottom-m") : ("")));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr;
})
},
style: "orbit-card-content-info",
visible: model.getCachedValue(idService.getId("QYRTPCZqH02kdA4fk4lTPA.Visible"), function () {
return !(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
className: ("icon orbit-card-content-info-icon " + model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.iconTransportDepartureAttr)
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-card-content-info-text",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "bold margin-bottom-base",
value: model.getCachedValue(idService.getId("gbsk4UekS0yjjsnnNIvDMg.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.in_MilestoneSummaryIn.typeAttr, model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_MilestoneSummaryIn.typeAttr;
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
value: model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.departureLocationAttr,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-card-content-info",
visible: model.getCachedValue(idService.getId("9hPWNIamhEWK_WBpyNRF6Q.Visible"), function () {
return !(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
className: ("icon orbit-card-content-info-icon " + model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.iconTransportArrivalAttr)
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-card-content-info-text",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "bold margin-bottom-base",
value: model.getCachedValue(idService.getId("sb19aButoEyALHnG+I29Fw.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.in_MilestoneSummaryIn.typeAttr, model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_MilestoneSummaryIn.typeAttr;
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
value: model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.arrivalLocationAttr,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
})))];
}, function () {
return [];
}), $if((((model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.meetingGuest) || (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.meetingHost)) || (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealAtHall)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
className: model.getCachedValue(idService.getId("azu1rDKrO0OWu98g78dpew.class"), function () {
return ("orbit-card-content-info" + (((((model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.seatingAttr) !== ("")) || !(model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr.equals(OS.BuiltinFunctions.nullDate())))) ? (" margin-bottom-m") : ("")));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.seatingAttr;
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr;
})
},
style: "orbit-card-content-info",
visible: ((model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.locationAttr) !== ("")),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-location",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.locationAttr,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
className: model.getCachedValue(idService.getId("EDIc1YifTUSDwdMG2JT+5Q.class"), function () {
return ("orbit-card-content-info" + ((!(model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()))) ? (" margin-bottom-m") : ("")));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr;
})
},
style: "orbit-card-content-info",
visible: ((model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.seatingAttr) !== ("")),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-seat",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.seatingAttr,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-card-content-info",
visible: model.getCachedValue(idService.getId("l2_bw8OdIUueUOwd+UEItg.Visible"), function () {
return !(model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-date-time",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("icqBxGJPdEirxtkYBmZ9sQ.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedTime_FromDateTime$Action(model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}))];
}, function () {
return [];
}), $if((((model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealGuest) || (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealHost)) || (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealHelper)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-card-content-info margin-bottom-m",
visible: ((model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneHostAttr) !== ("")),
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-host-guest",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneHostAttr,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
className: model.getCachedValue(idService.getId("rEUKtWLxEkqjB+i2vvchKw.class"), function () {
return ("orbit-card-content-info" + ((!(model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()))) ? (" margin-bottom-m") : ("")));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr;
})
},
style: "orbit-card-content-info",
visible: ((model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.locationAttr) !== ("")),
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-location",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.locationAttr,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-card-content-info margin-bottom-m",
visible: model.getCachedValue(idService.getId("+J7fCGoja062opzPu767Hg.Visible"), function () {
return !(model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-date-time",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("38iBn68bnEqcX_KhtLoNXg.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedTime_FromDateTime$Action(model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-card-content-button-cont",
visible: !(model.variables.isSetUpMealsIn),
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isSetUpMealsInDataFetchStatus)
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: model.getCachedValue(idService.getId("rhJZwCLIYkCKoyjIjKmXoQ.style"), function () {
return (((("color: " + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.mainColorVarVar, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color7, callContext).out_ColorVarOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + "; border: 1px solid ") + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.mainColorVarVar, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color7, callContext).out_ColorVarOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
}, function () {
return model.variables.mainColorVarVar;
})
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Milestone/Button OnClick");
return controller.onClick_Button$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn btn-orbit-card",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, "View Guests"))];
}, function () {
return [];
}), $if((((model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationGuest) || (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHost)) || (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHelper)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-card-content-info margin-bottom-m",
visible: ((model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneHostAttr) !== ("")),
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-host-guest",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneHostAttr,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-card-content-info margin-bottom-m",
visible: ((model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.locationAttr) !== ("")),
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-location",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.locationAttr,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-card-content-button-cont",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: model.getCachedValue(idService.getId("XUUsCw3mzUKEc1GiWyCpUw.style"), function () {
return (((("color: " + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.mainColorVarVar, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color7, callContext).out_ColorVarOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + "; border: 1px solid ") + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.mainColorVarVar, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color7, callContext).out_ColorVarOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
}, function () {
return model.variables.mainColorVarVar;
})
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Milestone/Button OnClick");
return controller.onClick_Button$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn btn-orbit-card",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, "View Guests"))];
}, function () {
return [];
}), $if((model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHotel), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-card-content-info",
visible: ((model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneHostAttr) !== ("")),
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-hotel",
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneHostAttr,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}))];
}, function () {
return [];
}), $if((model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.break), false, this, function () {
return [];
}, function () {
return [];
}), $if(((((((model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.adminMeeting) || (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.adminMeal)) || (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.adminMealAtHall)) || (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.adminAccommodation)) || (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.adminTransportVehicle)) || (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.adminBreak)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-card-content-info",
visible: model.getCachedValue(idService.getId("OyZ8Fmj_cUCGJ5Lkm5x+wA.Visible"), function () {
return ((model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.descriptionAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.descriptionAttr;
}),
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-window",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.descriptionAttr,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-card-content-info",
visible: model.getCachedValue(idService.getId("H0PjS8xRYUeXJHjuAZVbCQ.Visible"), function () {
return !(model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-date-time",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("ovwTlBx5+Eawl5+b56GtmA.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr, false, false, false, false, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("QEwnHng05ECJIW7mV0HW6A.Style"), function () {
return ("orbit-card-content-info" + ((!(model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()))) ? ("margin-top-m") : ("")));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr;
}),
visible: model.getCachedValue(idService.getId("QEwnHng05ECJIW7mV0HW6A.Visible"), function () {
return (!(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr.equals(OS.BuiltinFunctions.nullDate())) && !(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr.equals(OS.BuiltinFunctions.nullDate())));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr;
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus),
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-card-content-info-icon orbit-icon-date-time",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("MTX3GKD5aE2IZiaPWZqnvw.Value"), function () {
return ((OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedTime_FromDateTime$Action(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + " - ") + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedTime_FromDateTime$Action(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr;
}, function () {
return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
}))];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isSetUpMealsIn), asPrimitiveValue(model.variables._isSetUpMealsInDataFetchStatus), asPrimitiveValue(model.variables._in_MilestoneSummaryInDataFetchStatus), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.milestoneDateTimeAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.typeAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.descriptionAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneHostAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.seatingAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.locationAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.arrivalLocationAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.departureLocationAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.titleAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.iconTransportArrivalAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.iconTransportDepartureAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.isTransportMilestoneAttr), asPrimitiveValue(model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.mainIconAttr), asPrimitiveValue(model.variables.mainColorVarVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$debugger", "Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromDateTime", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_Debugger) {
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
Controller.prototype._onHandle_ClickedMilestone$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ClickedMilestone");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:XZOoHqtbd0+kQAnNvXYsfg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dS5TDaQOakWHSY649xcHiw/ClientActions.XZOoHqtbd0+kQAnNvXYsfg:oQtVrxMNUw14VN3w3Qlrdw", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMilestone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YjhCvo4i3kaT_hM6s_mg0w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SRBpl2d2h0CYNhGGUxBuSA", callContext.id) && ((model.variables.in_MilestoneSummaryIn.milestoneIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Accommodation Hotel?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+HfvgjqM_kWSVhx_bGQnWg", callContext.id) && (model.variables.in_MilestoneSummaryIn.milestoneIdAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHotel))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dmYvjKUvVUaHNATY1rQCwA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uT9LPxf72EytfgEnZbtIaQ", callContext.id);
// Trigger Event: ClickedMilestone
return controller.clickedMilestone$Action(model.variables.in_MilestoneSummaryIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y7Cua7mHG02fhypGSHpJiw", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IuTvdNy6l0WsbG5jNPPiWw", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:XZOoHqtbd0+kQAnNvXYsfg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:XZOoHqtbd0+kQAnNvXYsfg", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_Button$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Button");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:yuQDh8Fn+kWqmAE9az4RfQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dS5TDaQOakWHSY649xcHiw/ClientActions.yuQDh8Fn+kWqmAE9az4RfQ:3OpBCmYLbcIgiP8e6l9CnQ", "Connect2_OrbitMobile_MUI", "OnClick_Button", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zzpHi71RJEGYytrCvumzsQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Is Meal Host and SetUpMeals
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HOTvPkqh3EKKrC9VOaaZqA", callContext.id) && ((model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealHost) && model.variables.isSetUpMealsIn))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2w4zXnIPTkKuP4Ekt0MkTQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cgWkQ9XKS06s8S3bnreUzQ", callContext.id);
// Trigger Event: ClickedMilestone
return controller.clickedMilestone$Action(model.variables.in_MilestoneSummaryIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:feXZPC8AYkWMd5y3feXrhA", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yuQDh8Fn+kWqmAE9az4RfQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yuQDh8Fn+kWqmAE9az4RfQ", callContext.id);
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:0EiLz+KOW0yo9YhHbZwy+w:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dS5TDaQOakWHSY649xcHiw/ClientActions.0EiLz+KOW0yo9YhHbZwy+w:GAyDkDDlfP6XKdhY3Imu4Q", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S33hodLWBU+Nf7LKP5c_1Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qU143edmTUuivIbJUrgV8w", callContext.id);
// MainColorVar = If
model.variables.mainColorVarVar = ((((model.variables.isOverrideMainColorVarIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (model.variables.isOverrideMainColorVarIn) : (model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.mainColorVarAttr));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JDFWRwWovUyQ8kGM1iTYbA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:0EiLz+KOW0yo9YhHbZwy+w", callContext.id);
}

};

Controller.prototype.onHandle_ClickedMilestone$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMilestone$Action, callContext);

};
Controller.prototype.onClick_Button$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Button$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.clickedMilestone$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:dS5TDaQOakWHSY649xcHiw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dS5TDaQOakWHSY649xcHiw:1ilQQKdnCkp85ILgvz39Lg", "Connect2_OrbitMobile_MUI", "Card_Milestone", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dS5TDaQOakWHSY649xcHiw", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/Card_Milestone On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"bFv2WPj+iUuUHBUZdgPUaQ": {
getter: function (varBag, idService) {
return varBag.model.variables.mainColorVarVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ez6YjiNkaUu8G2BYYTrxTw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneSummaryIn;
}
},
"f1d03KW+XU22tw3tegoZPw": {
getter: function (varBag, idService) {
return varBag.model.variables.isOverrideMainColorVarIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AriwZoD2SkaGi_82kn+7Ag": {
getter: function (varBag, idService) {
return varBag.model.variables.isSetUpMealsIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"QkiasNgxP0m7WXp8AW+9PA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon"));
})(varBag.model, idService);
}
},
"hosPAb6ck0G8e3Mc7YJOXg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Title"));
})(varBag.model, idService);
}
},
"O1ZWPKiZwUio_r2CZsH51w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"uQIyDAenz0Co3YrBeLxsGg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsTransport"));
})(varBag.model, idService);
}
},
"6kbAX8D32UOeKh74qfE_Ng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsMeetingOrMealAtHall"));
})(varBag.model, idService);
}
},
"cv9XWlEV506q3ihczMTYmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsMeal"));
})(varBag.model, idService);
}
},
"JDfS1dnLX0eJvkQehd1WFQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsAccommodation"));
})(varBag.model, idService);
}
},
"PN2qxmDfvkmnqupbpmvc7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsHotel"));
})(varBag.model, idService);
}
},
"oskTMgDKg0ClyIs1+loJ_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsBreak"));
})(varBag.model, idService);
}
},
"4v6Xki06KEGWDhlFDjI0sQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsAdmin"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
