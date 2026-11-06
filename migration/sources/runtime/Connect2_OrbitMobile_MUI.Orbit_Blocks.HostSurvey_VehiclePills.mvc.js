define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehiclePills.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$model", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerList", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRec", "Connect2_OrbitMobile_MUI.controller$GetVehicleOwnerByJSON_Name", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRec", "Connect2_OrbitMobile_MUI.controller$GetVehicleTypeByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_IsDisabled", "in_IsDisabledIn", "In_IsDisabled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsDisabledInDataFetchStatus", "_in_IsDisabledInDataFetchStatus", "_in_IsDisabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostSurvey_Vehicle", "in_HostSurvey_VehicleIn", "In_HostSurvey_Vehicle", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec());
}, false, Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec), 
this.attr("_in_HostSurvey_VehicleInDataFetchStatus", "_in_HostSurvey_VehicleInDataFetchStatus", "_in_HostSurvey_VehicleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_VehicleOwners", "in_VehicleOwnersIn", "In_VehicleOwners", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerList());
}, false, Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerList), 
this.attr("_in_VehicleOwnersInDataFetchStatus", "_in_VehicleOwnersInDataFetchStatus", "_in_VehicleOwnersInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_VehicleTypes", "in_VehicleTypesIn", "In_VehicleTypes", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalVehicleTypeList());
}, false, Connect2_OrbitMobile_MUIModel.LocalVehicleTypeList), 
this.attr("_in_VehicleTypesInDataFetchStatus", "_in_VehicleTypesInDataFetchStatus", "_in_VehicleTypesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_IsDisabled" in inputs) {
this.variables.in_IsDisabledIn = inputs.In_IsDisabled;
if("_in_IsDisabledInDataFetchStatus" in inputs) {
this.variables._in_IsDisabledInDataFetchStatus = inputs._in_IsDisabledInDataFetchStatus;
}

}

if("In_HostSurvey_Vehicle" in inputs) {
this.variables.in_HostSurvey_VehicleIn = inputs.In_HostSurvey_Vehicle;
if("_in_HostSurvey_VehicleInDataFetchStatus" in inputs) {
this.variables._in_HostSurvey_VehicleInDataFetchStatus = inputs._in_HostSurvey_VehicleInDataFetchStatus;
}

}

if("In_VehicleOwners" in inputs) {
this.variables.in_VehicleOwnersIn = inputs.In_VehicleOwners;
if("_in_VehicleOwnersInDataFetchStatus" in inputs) {
this.variables._in_VehicleOwnersInDataFetchStatus = inputs._in_VehicleOwnersInDataFetchStatus;
}

}

if("In_VehicleTypes" in inputs) {
this.variables.in_VehicleTypesIn = inputs.In_VehicleTypes;
if("_in_VehicleTypesInDataFetchStatus" in inputs) {
this.variables._in_VehicleTypesInDataFetchStatus = inputs._in_VehicleTypesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_VehiclePills");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehiclePills.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehiclePills.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehiclePills.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$view", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerList", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRec", "Connect2_OrbitMobile_MUI.controller$GetVehicleOwnerByJSON_Name", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRec", "Connect2_OrbitMobile_MUI.controller$GetVehicleTypeByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehiclePills_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehiclePills_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_VehiclePills";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehiclePills_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehiclePills_mvc_controller;
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
style: "orbit-host-survey-pill-cont",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.in_HostSurvey_VehicleIn.ownerTypeAttr) !== ("")), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IconClass: "orbit-icon-host-guest",
In_IsDisabled: model.variables.in_IsDisabledIn,
_in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus),
In_PillText: model.getCachedValue(idService.getId("zIReM80KMUStqC23pF8Xcg.In_PillText"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getVehicleOwnerByJSON_Name$Action(model.variables.in_HostSurvey_VehicleIn.ownerTypeAttr, model.variables.in_VehicleOwnersIn, callContext).out_VehicleOwnerOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).labelAttr;
}, function () {
return model.variables.in_HostSurvey_VehicleIn.ownerTypeAttr;
}, function () {
return model.variables.in_VehicleOwnersIn;
}),
_in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_VehicleInDataFetchStatus, model.variables._in_VehicleOwnersInDataFetchStatus)
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
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if(((model.variables.in_HostSurvey_VehicleIn.vehicleTypeAttr) !== ("")), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IconClass: "orbit-icon-transportation-vehicle",
In_PillText: model.getCachedValue(idService.getId("UsBXrW3tQk2R8OYX5hFUPg.In_PillText"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getVehicleTypeByJSON_Name$Action(model.variables.in_HostSurvey_VehicleIn.vehicleTypeAttr, model.variables.in_VehicleTypesIn, callContext).out_VehicleTypeOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).labelAttr;
}, function () {
return model.variables.in_HostSurvey_VehicleIn.vehicleTypeAttr;
}, function () {
return model.variables.in_VehicleTypesIn;
}),
_in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_VehicleInDataFetchStatus, model.variables._in_VehicleTypesInDataFetchStatus),
In_IsDisabled: model.variables.in_IsDisabledIn,
_in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus)
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
}, function () {
return [];
}), $if(((model.variables.in_HostSurvey_VehicleIn.registrationNumberAttr) !== ("")), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IconClass: "orbit-icon-license-plate",
In_IsDisabled: model.variables.in_IsDisabledIn,
_in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus),
In_PillText: model.variables.in_HostSurvey_VehicleIn.registrationNumberAttr,
_in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_VehicleInDataFetchStatus)
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if(!(model.variables.in_HostSurvey_VehicleIn.totalSeatsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_PillText: model.getCachedValue(idService.getId("G4oDVxA_ekW2UNYJW8gd5A.In_PillText"), function () {
return OS.BuiltinFunctions.longIntegerToText(model.variables.in_HostSurvey_VehicleIn.totalSeatsAttr);
}, function () {
return model.variables.in_HostSurvey_VehicleIn.totalSeatsAttr;
}),
_in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_VehicleInDataFetchStatus),
In_IsDisabled: model.variables.in_IsDisabledIn,
_in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus),
In_IconClass: "orbit-icon-seat"
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehiclePills.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehiclePills.mvc$debugger", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerList", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRec", "Connect2_OrbitMobile_MUI.controller$GetVehicleOwnerByJSON_Name", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRec", "Connect2_OrbitMobile_MUI.controller$GetVehicleTypeByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehiclePills_mvc_Debugger) {
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YmzHvedApE+RVR541dDcCQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.YmzHvedApE+RVR541dDcCQ:+Sc9khABu+ybQeGhOCosLQ", "Connect2_OrbitMobile_MUI", "HostSurvey_VehiclePills", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YmzHvedApE+RVR541dDcCQ", callContext.id);
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehiclePills.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"jFGceaVbc0Cy2B+WbvdIpQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsDisabledIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5kMauTm6H0GDl9nuUUXPFw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostSurvey_VehicleIn;
}
},
"Cm7yp8np5kuZayYS5FeM0A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_VehicleOwnersIn;
}
},
"u17oWvDSIkuZ7oQACnoFig": {
getter: function (varBag, idService) {
return varBag.model.variables.in_VehicleTypesIn;
}
},
"A8YU27OUOEOhQj2Zqyu5ew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasOwnerType"));
})(varBag.model, idService);
}
},
"LC3upCD8lU+qMWkO0zEW1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasVehicleType"));
})(varBag.model, idService);
}
},
"63r3nFFpAkiUylSkZFMdIA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasVehicleNumber"));
})(varBag.model, idService);
}
},
"BMXmnPX4O0KPVc2kRy4VRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasTotalSeats"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
