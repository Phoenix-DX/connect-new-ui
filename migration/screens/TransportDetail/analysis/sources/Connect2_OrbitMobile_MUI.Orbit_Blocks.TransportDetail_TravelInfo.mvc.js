define("Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model$TravelInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.controller$TransportDetails_ShowGeneralInformation"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_TravelIdentifier", "in_TravelIdentifierIn", "In_TravelIdentifier", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_TravelIdentifierInDataFetchStatus", "_in_TravelIdentifierInDataFetchStatus", "_in_TravelIdentifierInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_TravelInfo", "in_TravelInfoIn", "In_TravelInfo", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.TravelInfoRec());
}, false, Connect2_OrbitMobile_ISModel.TravelInfoRec), 
this.attr("_in_TravelInfoInDataFetchStatus", "_in_TravelInfoInDataFetchStatus", "_in_TravelInfoInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneType", "in_MilestoneTypeIn", "In_MilestoneType", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, false, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec), 
this.attr("_in_MilestoneTypeInDataFetchStatus", "_in_MilestoneTypeInDataFetchStatus", "_in_MilestoneTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_TravelIdentifier" in inputs) {
this.variables.in_TravelIdentifierIn = inputs.In_TravelIdentifier;
if("_in_TravelIdentifierInDataFetchStatus" in inputs) {
this.variables._in_TravelIdentifierInDataFetchStatus = inputs._in_TravelIdentifierInDataFetchStatus;
}

}

if("In_TravelInfo" in inputs) {
this.variables.in_TravelInfoIn = inputs.In_TravelInfo;
if("_in_TravelInfoInDataFetchStatus" in inputs) {
this.variables._in_TravelInfoInDataFetchStatus = inputs._in_TravelInfoInDataFetchStatus;
}

}

if("In_MilestoneType" in inputs) {
this.variables.in_MilestoneTypeIn = inputs.In_MilestoneType;
if("_in_MilestoneTypeInDataFetchStatus" in inputs) {
this.variables._in_MilestoneTypeInDataFetchStatus = inputs._in_MilestoneTypeInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.TransportDetail_TravelInfo");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_IS.model$TravelInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.controller$TransportDetails_ShowGeneralInformation"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_TravelInfo_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_TravelInfo_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.TransportDetail_TravelInfo";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_TravelInfo_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_TravelInfo_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.transportDetails_ShowGeneralInformation$Action(model.variables.in_TravelIdentifierIn, model.variables.in_TravelInfoIn, model.variables.in_MilestoneTypeIn, callContext).isShowOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon transport-detail-icon orbit-icon-license-plate",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-travel-info",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("6tcVO0aqnk2HvRQN97dIWw.Style"), function () {
return ("transport-detail-item-info" + (((model.variables.in_MilestoneTypeIn.isTransportMilestoneAttr && (model.variables.in_MilestoneTypeIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.vehicle))) ? ("") : (" margin-bottom-m")));
}, function () {
return model.variables.in_MilestoneTypeIn.isTransportMilestoneAttr;
}, function () {
return model.variables.in_MilestoneTypeIn.idAttr;
}),
visible: ((model.variables.in_TravelIdentifierIn) !== ("")),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneTypeInDataFetchStatus),
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelIdentifierInDataFetchStatus)
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
value: model.variables.in_MilestoneTypeIn.travelInfoHeaderAttr,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneTypeInDataFetchStatus)
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
value: model.variables.in_TravelIdentifierIn,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelIdentifierInDataFetchStatus)
}))), $if((model.variables.in_MilestoneTypeIn.isTransportMilestoneAttr && (model.variables.in_MilestoneTypeIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.flight)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "margin-bottom-m transport-detail-item-info",
visible: (((model.variables.in_TravelInfoIn.codeShareFlightAttr) !== ("")) || ((model.variables.in_TravelInfoIn.codeShareNameAttr) !== (""))),
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Codeshare Flight",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-inline-flex flex-direction-row",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.in_TravelInfoIn.codeShareFlightAttr) !== ("")),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_TravelInfoIn.codeShareFlightAttr,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
className: model.getCachedValue(idService.getId("QvFwIQ5+SUCICSWSwf4O0w.class"), function () {
return ((((model.variables.in_TravelInfoIn.codeShareFlightAttr) !== (""))) ? ("margin-left-xxl") : (""));
}, function () {
return model.variables.in_TravelInfoIn.codeShareFlightAttr;
})
},
visible: ((model.variables.in_TravelInfoIn.codeShareNameAttr) !== ("")),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_TravelInfoIn.codeShareNameAttr,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}))))];
}, function () {
return [];
}), $if((model.variables.in_MilestoneTypeIn.isTransportMilestoneAttr && (model.variables.in_MilestoneTypeIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.vehicle)), false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info margin-bottom-m",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "bold margin-bottom-s",
visible: ((model.variables.in_TravelInfoIn.bookingReferenceAttr) !== ("")),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: "Booking Reference",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
className: model.getCachedValue(idService.getId("NIhS3ckAjkyhdZeXxtScaA.class"), function () {
return (((model.variables.in_MilestoneTypeIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.train)) ? ("") : ("margin-bottom-s"));
}, function () {
return model.variables.in_MilestoneTypeIn.idAttr;
})
},
visible: ((model.variables.in_TravelInfoIn.bookingReferenceAttr) !== ("")),
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_TravelInfoIn.bookingReferenceAttr,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
})))];
}), $if((model.variables.in_MilestoneTypeIn.isTransportMilestoneAttr && (((model.variables.in_MilestoneTypeIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.flight) || (model.variables.in_MilestoneTypeIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.train)) || (model.variables.in_MilestoneTypeIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.boat))), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
className: model.getCachedValue(idService.getId("lH8yve9D8kKizBHQpvvN3g.class"), function () {
return ("transport-detail-item-info" + (((((model.variables.in_TravelInfoIn.onboardMealAttr) !== ("")) || ((model.variables.in_TravelInfoIn.classAttr) !== ("")))) ? (" margin-bottom-m") : ("")));
}, function () {
return model.variables.in_TravelInfoIn.onboardMealAttr;
}, function () {
return model.variables.in_TravelInfoIn.classAttr;
})
},
style: "transport-detail-item-info",
visible: ((model.variables.in_TravelInfoIn.fareTypeAttr) !== ("")),
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Fare Type",
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_TravelInfoIn.fareTypeAttr,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
className: model.getCachedValue(idService.getId("hL2OkKSxF0ObjWz5oN8zhA.class"), function () {
return ("transport-detail-item-info" + ((((model.variables.in_TravelInfoIn.classAttr) !== (""))) ? (" margin-bottom-m") : ("")));
}, function () {
return model.variables.in_TravelInfoIn.classAttr;
})
},
style: "transport-detail-item-info",
visible: ((model.variables.in_TravelInfoIn.onboardMealAttr) !== ("")),
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Onboard Meal Type",
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_TravelInfoIn.onboardMealAttr,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item-info",
visible: ((model.variables.in_TravelInfoIn.classAttr) !== ("")),
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
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
value: "Class",
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_TravelInfoIn.classAttr,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
})))];
}, function () {
return [];
})))];
}, function () {
return [];
}), $if((model.variables.in_MilestoneTypeIn.isTransportMilestoneAttr && (model.variables.in_MilestoneTypeIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.vehicle)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item",
visible: ((model.variables.in_TravelInfoIn.vehicleNameAttr) !== ("")),
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon transport-detail-icon orbit-icon-vehicle-name",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-travel-info",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Vehicle Name",
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_TravelInfoIn.vehicleNameAttr,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "transport-detail-item",
visible: ((model.variables.in_TravelInfoIn.driverNameAttr) !== ("")),
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-transport-detail-icon",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon transport-detail-icon orbit-icon-vehicle-seat",
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-travel-info",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "transport-detail-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Driver Name",
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_TravelInfoIn.driverNameAttr,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TravelInfoInDataFetchStatus)
})))))];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo.mvc$debugger", "Connect2_OrbitMobile_IS.model$TravelInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.controller$TransportDetails_ShowGeneralInformation"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_TransportDetail_TravelInfo_mvc_Debugger) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:RG89j86mrmi70dGVhsbfsQ", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:aGBgXrX_0EKY+ETWFN730g:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.aGBgXrX_0EKY+ETWFN730g:V9eNXSNvUR8AjTvQ364kMw", "Connect2_OrbitMobile_MUI", "TransportDetail_TravelInfo", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:aGBgXrX_0EKY+ETWFN730g", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.TransportDetail_TravelInfo.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"lzgGYJrefEiEkk_1_poo1A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TravelIdentifierIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"eILNwRPWFUKREzi1d8L8Tw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TravelInfoIn;
}
},
"uRGbhPHa5Uq5hylzos9ggw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneTypeIn;
}
},
"z5s2cn5HpEqK8RQ0Fhf+Tg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasGeneralDetails"));
})(varBag.model, idService);
}
},
"1O8IHPpRx0uJBSEIENT6tQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsFlight"));
})(varBag.model, idService);
}
},
"u_AGThcg2E6VTY9N5SdaTQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsVehicle"));
})(varBag.model, idService);
}
},
"u1f3flKfM0a90uDzP73cWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsTrainOrFlightOrBoat"));
})(varBag.model, idService);
}
},
"30GsggBWYUy8_YwZw9L1Lw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsVehicle2"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
