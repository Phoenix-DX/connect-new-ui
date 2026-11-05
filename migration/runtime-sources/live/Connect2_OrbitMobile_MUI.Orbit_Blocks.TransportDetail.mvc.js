define("Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo.mvc$model", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.controller$GetFormattedTimeDifference", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromTime", "Connect2_OrbitMobile_BL.model$GetTransportDetails_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_IS.model$TravelInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$SeatItemRec", "Connect2_OrbitMobile_MUI.model$SeatItemList"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_TravelInfo_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("HasSeatInfo", "hasSeatInfoVar", "HasSeatInfo", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("TransportDetail", "transportDetailIn", "TransportDetail", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetTransportDetails_ScreenRec());
}, false, Connect2_OrbitMobile_BLModel.GetTransportDetails_ScreenRec), 
this.attr("_transportDetailInDataFetchStatus", "_transportDetailInDataFetchStatus", "_transportDetailInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_TravelInfo_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("TransportDetail" in inputs) {
this.variables.transportDetailIn = inputs.TransportDetail;
if("_transportDetailInDataFetchStatus" in inputs) {
this.variables._transportDetailInDataFetchStatus = inputs._transportDetailInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.TransportDetail");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo.mvc$view", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.controller$GetFormattedTimeDifference", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromTime", "Connect2_OrbitMobile_BL.model$GetTransportDetails_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_IS.model$TravelInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$SeatItemRec", "Connect2_OrbitMobile_MUI.model$SeatItemList"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_TravelInfo_mvc_view) {
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
        View.displayName = "Orbit_Blocks.TransportDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_TravelInfo_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_mvc_controller;
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
style: "transport-detail-cont",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item",
visible: ((model.variables.transportDetailIn.transportDetailAttr.operatorAttr) !== ("")),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-operator",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Operator",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.transportDetailIn.transportDetailAttr.operatorAttr,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item",
visible: ((model.variables.transportDetailIn.transportDetailAttr.transportTypeAttr) !== ("")),
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
className: ("icon " + model.variables.transportDetailIn.milestoneTypeAttr.mainIconAttr)
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Type",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.transportDetailIn.transportDetailAttr.transportTypeAttr,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item",
visible: model.getCachedValue(idService.getId("Q5ECerw9S02fnoWfgE9qWA.Visible"), function () {
return ((((model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.locationAttr) !== ("")) || ((model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.terminalAttr) !== (""))) || !(model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr.equals(OS.BuiltinFunctions.nullDate())));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.locationAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.terminalAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
className: ("icon " + model.variables.transportDetailIn.milestoneTypeAttr.iconTransportDepartureAttr)
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Departure Location",
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "margin-bottom-s",
visible: ((model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.locationAttr) !== ("")),
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.locationAttr,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "margin-bottom-s",
visible: ((model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.terminalAttr) !== ("")),
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.terminalAttr,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.getCachedValue(idService.getId("JhyXelecK0CFjt8XhI7mow.Visible"), function () {
return !(model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("nH1NT1LCdkef4nGOZhdCZg.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.transportDetailIn.milestoneTypeAttr.idAttr, model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.transportDetailIn.milestoneTypeAttr.idAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item",
visible: model.getCachedValue(idService.getId("QLTyqqqH7UOsNmlUP1EgSg.Visible"), function () {
return ((((model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.locationAttr) !== ("")) || ((model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.terminalAttr) !== (""))) || !(model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.dateTimeAttr.equals(OS.BuiltinFunctions.nullDate())));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.locationAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.terminalAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
className: ("icon " + model.variables.transportDetailIn.milestoneTypeAttr.iconTransportArrivalAttr)
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Arrival Location",
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "margin-bottom-s",
visible: ((model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.locationAttr) !== ("")),
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.locationAttr,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "margin-bottom-s",
visible: ((model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.terminalAttr) !== ("")),
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.terminalAttr,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.getCachedValue(idService.getId("4WYlTvFU6U6UT3yvd72W2g.Visible"), function () {
return !(model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.dateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("RRFLCdaFBUuYFHImA9tbeA.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.transportDetailIn.milestoneTypeAttr.idAttr, model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.dateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.transportDetailIn.milestoneTypeAttr.idAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item",
visible: (((model.variables.transportDetailIn.transportDetailAttr.baggageAllowanceAttr.carryOnBaggageAttr) !== ("")) && ((model.variables.transportDetailIn.transportDetailAttr.baggageAllowanceAttr.checkedBaggageAttr) !== (""))),
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-baggage",
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Baggage Allowance",
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("vAeJ8hivmEiNkoASllCj8g.Style"), function () {
return ((((model.variables.transportDetailIn.transportDetailAttr.baggageAllowanceAttr.checkedBaggageAttr) !== (""))) ? ("margin-bottom-s") : (""));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.baggageAllowanceAttr.checkedBaggageAttr;
}),
visible: ((model.variables.transportDetailIn.transportDetailAttr.baggageAllowanceAttr.carryOnBaggageAttr) !== ("")),
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus),
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: ("Carry-on: " + model.variables.transportDetailIn.transportDetailAttr.baggageAllowanceAttr.carryOnBaggageAttr),
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.transportDetailIn.transportDetailAttr.baggageAllowanceAttr.checkedBaggageAttr) !== ("")),
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: ("Checked: " + model.variables.transportDetailIn.transportDetailAttr.baggageAllowanceAttr.checkedBaggageAttr),
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})))), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_TravelInfo_mvc_view, {
inputs: {
In_TravelIdentifier: model.variables.transportDetailIn.transportDetailAttr.travelIdentifierAttr,
_in_TravelIdentifierInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus),
In_MilestoneType: model.variables.transportDetailIn.milestoneTypeAttr,
_in_MilestoneTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus),
In_TravelInfo: model.variables.transportDetailIn.transportDetailAttr.travelInfoAttr,
_in_TravelInfoInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
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
uuid: "51",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if((model.variables.transportDetailIn.milestoneTypeAttr.isTransportMilestoneAttr && (model.variables.transportDetailIn.milestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.vehicle)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item",
visible: model.getCachedValue(idService.getId("izWClG+GN0OjxaP1t7GVWQ.Visible"), function () {
return (!(model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr.equals(OS.BuiltinFunctions.nullDate())) || !(model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.dateTimeAttr.equals(OS.BuiltinFunctions.nullDate())));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-timelapse",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Trip Duration",
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("RguJvBKJ3UO1r1CiCVunwQ.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedTimeDifference$Action(model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr, model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.dateTimeAttr, callContext).out_FormattedTimeDifferenceOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.arrivalLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}))))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item",
visible: model.getCachedValue(idService.getId("aOYj9_IqOE6RgHp0oZI2QQ.Visible"), function () {
return (!(model.variables.transportDetailIn.transportDetailAttr.tripDurationAttr.tripDurationHoursAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) || !(model.variables.transportDetailIn.transportDetailAttr.tripDurationAttr.tripDurationMinutesAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.tripDurationAttr.tripDurationHoursAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.tripDurationAttr.tripDurationMinutesAttr;
}),
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-timelapse",
visible: true,
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Trip Duration",
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("srNOBSIRkkOep5w0Fh+KDQ.Value"), function () {
return (((OS.BuiltinFunctions.longIntegerToText(model.variables.transportDetailIn.transportDetailAttr.tripDurationAttr.tripDurationHoursAttr) + "h ") + ((model.variables.transportDetailIn.transportDetailAttr.tripDurationAttr.tripDurationMinutesAttr.equals(OS.BuiltinFunctions.integerToLongInteger(0))) ? ("00") : (OS.BuiltinFunctions.longIntegerToText(model.variables.transportDetailIn.transportDetailAttr.tripDurationAttr.tripDurationMinutesAttr)))) + "m");
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.tripDurationAttr.tripDurationHoursAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.tripDurationAttr.tripDurationMinutesAttr;
}),
_idProps: {
service: idService,
uuid: "67"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}))))];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: !(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.isEmpty),
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.transportDetailIn.transportDetailAttr.stopsAttr,
style: "list list-group transport-detail-list",
tag: "div",
_idProps: {
service: idService,
uuid: "69"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._transportDetailInDataFetchStatus), asPrimitiveValue(model.variables.transportDetailIn.milestoneTypeAttr.idAttr), asPrimitiveValue(model.variables.transportDetailIn.milestoneTypeAttr.isTransportMilestoneAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.terminalAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).stopDurationTimeAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.dateTimeAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.terminalAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.dateTimeAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.terminalAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).titleAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item",
visible: true,
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "72"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-stops",
visible: true,
_idProps: {
service: idService,
uuid: "73"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "74"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "75"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Stops",
_idProps: {
service: idService,
uuid: "76"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "77"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
className: model.getCachedValue(idService.getId("bj9QxJgun0KJ6vVZdSuKUA.class"), function () {
return (((model.variables.transportDetailIn.milestoneTypeAttr.isTransportMilestoneAttr && (model.variables.transportDetailIn.milestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.flight))) ? ("margin-bottom-m") : (""));
}, function () {
return model.variables.transportDetailIn.milestoneTypeAttr.isTransportMilestoneAttr;
}, function () {
return model.variables.transportDetailIn.milestoneTypeAttr.idAttr;
})
},
visible: ((model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).titleAttr) !== ("")),
_idProps: {
service: idService,
uuid: "78"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).titleAttr,
_idProps: {
service: idService,
uuid: "79"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
className: model.getCachedValue(idService.getId("vRt2b9CguUmAlKS7Ztsubg.class"), function () {
return (((((model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.terminalAttr) !== ("")) || !(model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr.equals(OS.BuiltinFunctions.nullDate())))) ? ("margin-bottom-m") : (""));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.terminalAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr;
})
},
visible: model.getCachedValue(idService.getId("vRt2b9CguUmAlKS7Ztsubg.Visible"), function () {
return (((model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.terminalAttr) !== ("")) || !(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.dateTimeAttr.equals(OS.BuiltinFunctions.nullDate())));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.terminalAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "80"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "81"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Stopover Arrival Terminal",
_idProps: {
service: idService,
uuid: "82"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "margin-bottom-s",
visible: ((model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.terminalAttr) !== ("")),
_idProps: {
service: idService,
uuid: "83"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.terminalAttr,
_idProps: {
service: idService,
uuid: "84"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.getCachedValue(idService.getId("J56KWXOq50uH0CWyXKYmjw.Visible"), function () {
return !(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.dateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "85"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("eUzaSsUCukWqXfV7cOd+gg.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.transportDetailIn.milestoneTypeAttr.idAttr, model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.dateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.transportDetailIn.milestoneTypeAttr.idAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).arrivalLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "86"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.getCachedValue(idService.getId("KTLyKoO9HUu38VrtQ60B+w.Visible"), function () {
return (((model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.terminalAttr) !== ("")) || !(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.dateTimeAttr.equals(OS.BuiltinFunctions.nullDate())));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.terminalAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "87"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "88"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Stopover Departure Terminal",
_idProps: {
service: idService,
uuid: "89"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "margin-bottom-s",
visible: ((model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.terminalAttr) !== ("")),
_idProps: {
service: idService,
uuid: "90"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.terminalAttr,
_idProps: {
service: idService,
uuid: "91"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.getCachedValue(idService.getId("yxOAx77MrEyxI3G8vsH4RA.Visible"), function () {
return !(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.dateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "92"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("FRjii3PFt0KC2apQ+SjAAA.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.transportDetailIn.milestoneTypeAttr.idAttr, model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.dateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.transportDetailIn.milestoneTypeAttr.idAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).departureLocationAttr.dateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "93"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item",
visible: ((OS.BuiltinFunctions.timeToText(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).stopDurationTimeAttr)) !== ("")),
_idProps: {
service: idService,
uuid: "94"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "95"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-timelapse",
visible: true,
_idProps: {
service: idService,
uuid: "96"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "97"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "98"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Stop Duration",
_idProps: {
service: idService,
uuid: "99"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).titleAttr) !== ("")),
_idProps: {
service: idService,
uuid: "100"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("o6oOm4r1nECHV26vNl+SZQ.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedTime_FromTime$Action(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).stopDurationTimeAttr, callContext).out_FormattedElapsedTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.stopsAttr.getCurrent(callContext.iterationContext).stopDurationTimeAttr;
}),
_idProps: {
service: idService,
uuid: "101"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})))))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.dateTimeAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.departureLocationAttr.terminalAttr), asPrimitiveValue(model.variables.transportDetailIn.milestoneTypeAttr.idAttr), asPrimitiveValue(model.variables.transportDetailIn.milestoneTypeAttr.isTransportMilestoneAttr), asPrimitiveValue(model.variables._transportDetailInDataFetchStatus)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item",
visible: (model.variables.hasSeatInfoVar && !(model.variables.transportDetailIn.transportDetailAttr.seatsAttr.isEmpty)),
_idProps: {
service: idService,
uuid: "102"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "103"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-flight-seat",
visible: true,
_idProps: {
service: idService,
uuid: "104"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "105"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "106"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Seats",
_idProps: {
service: idService,
uuid: "107"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.transportDetailIn.transportDetailAttr.seatsAttr,
style: "list list-group transport-detail-list",
tag: "div",
_idProps: {
service: idService,
uuid: "108"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.transportDetailIn.transportDetailAttr.seatsAttr.getCurrent(callContext.iterationContext).seatNumberAttr) !== ("")),
_idProps: {
service: idService,
uuid: "109"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus),
_dependencies: [asPrimitiveValue(model.variables._transportDetailInDataFetchStatus), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.seatsAttr.getCurrent(callContext.iterationContext).seatNumberAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.seatsAttr.getCurrent(callContext.iterationContext).arrivalAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.seatsAttr.getCurrent(callContext.iterationContext).departureAttr), asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.isEmpty)]
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("8puGLBOW8Eye8Pg_QfOleg.Value"), function () {
return (((model.variables.transportDetailIn.transportDetailAttr.stopsAttr.isEmpty) ? ("") : ((((model.variables.transportDetailIn.transportDetailAttr.seatsAttr.getCurrent(callContext.iterationContext).departureAttr + " → ") + model.variables.transportDetailIn.transportDetailAttr.seatsAttr.getCurrent(callContext.iterationContext).arrivalAttr) + ": "))) + model.variables.transportDetailIn.transportDetailAttr.seatsAttr.getCurrent(callContext.iterationContext).seatNumberAttr);
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.stopsAttr.isEmpty;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.seatsAttr.getCurrent(callContext.iterationContext).departureAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.seatsAttr.getCurrent(callContext.iterationContext).arrivalAttr;
}, function () {
return model.variables.transportDetailIn.transportDetailAttr.seatsAttr.getCurrent(callContext.iterationContext).seatNumberAttr;
}),
_idProps: {
service: idService,
uuid: "110"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}))];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables.transportDetailIn.transportDetailAttr.stopsAttr.isEmpty), asPrimitiveValue(model.variables._transportDetailInDataFetchStatus)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.transportDetailIn.transportDetailAttr.notesAttr) !== ("")),
_idProps: {
service: idService,
uuid: "111"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s color-orbit-primary-7",
visible: true,
_idProps: {
service: idService,
uuid: "112"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Notes",
_idProps: {
service: idService,
uuid: "113"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "114"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.transportDetailIn.transportDetailAttr.notesAttr,
_idProps: {
service: idService,
uuid: "115"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._transportDetailInDataFetchStatus)
})))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail.mvc$debugger", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.controller$GetFormattedTimeDifference", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromTime", "Connect2_OrbitMobile_BL.model$GetTransportDetails_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_IS.model$TravelInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$SeatItemRec", "Connect2_OrbitMobile_MUI.model$SeatItemList"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_mvc_Debugger) {
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:wtPaFHuWgkaqPiNfDrMNFw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.hO6f55OTi0+ZDjZ2jFBljA/ClientActions.wtPaFHuWgkaqPiNfDrMNFw:wF1nGVFgJ6aTuEP5_NMXow", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vmTdYV1YlEuNynjgSfFBbg", callContext.id);
// Seats
// Foreach TransportDetail.TransportDetail.Seats
callContext.iterationContext.registerIterationStart(model.variables.transportDetailIn.transportDetailAttr.seatsAttr);
try {var seatsIterator = callContext.iterationContext.getIterator(model.variables.transportDetailIn.transportDetailAttr.seatsAttr);
var seatsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n2Upt8b7R0Wm6GO5RK0XYw", callContext.id) && (seatsIndex < model.variables.transportDetailIn.transportDetailAttr.seatsAttr.length))) {
seatsIterator.currentRowNumber = seatsIndex;
// Has seat Number?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HxU3WMgqjka10kXEsMNPEw", callContext.id) && ((model.variables.transportDetailIn.transportDetailAttr.seatsAttr.getItem(seatsIndex.valueOf()).seatNumberAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tTqUXGZFJUOfTHngwb30Bg", callContext.id);
// HasSeatInfo = True
model.variables.hasSeatInfoVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ctZgV6GsbUGEUdISsGMdKA", callContext.id);
return ;

}

seatsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.transportDetailIn.transportDetailAttr.seatsAttr);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EaCZDnpbWUm+Og2aJerodA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wtPaFHuWgkaqPiNfDrMNFw", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hO6f55OTi0+ZDjZ2jFBljA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.hO6f55OTi0+ZDjZ2jFBljA:x93E2XcBMb3cl2W8fr4GQg", "Connect2_OrbitMobile_MUI", "TransportDetail", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hO6f55OTi0+ZDjZ2jFBljA", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/TransportDetail On Ready");
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"IEsH_4DhFkqDEZ5UUoZJSA": {
getter: function (varBag, idService) {
return varBag.model.variables.hasSeatInfoVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"lSjapJeATUSUacstHIxPlQ": {
getter: function (varBag, idService) {
return varBag.model.variables.transportDetailIn;
}
},
"X9b6hz7C50uuuo8V6DZE9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsVehicle"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
