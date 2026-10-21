define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationPills.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$model", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRec", "Connect2_OrbitMobile_MUI.controller$GetGenderPreferenceByJSON_Name", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorList", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRec", "Connect2_OrbitMobile_MUI.controller$GetHouseFloorByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvcModel) {
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

if("In_GenderPreferences" in inputs) {
this.variables.in_GenderPreferencesIn = inputs.In_GenderPreferences;
if("_in_GenderPreferencesInDataFetchStatus" in inputs) {
this.variables._in_GenderPreferencesInDataFetchStatus = inputs._in_GenderPreferencesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_AccommodationPills");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationPills.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationPills.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationPills.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$view", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRec", "Connect2_OrbitMobile_MUI.controller$GetGenderPreferenceByJSON_Name", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorList", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRec", "Connect2_OrbitMobile_MUI.controller$GetHouseFloorByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationPills_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationPills_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_AccommodationPills";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationPills_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationPills_mvc_controller;
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
style: "margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_HostSurvey_RoomIn.nameAttr,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_RoomInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-pill-cont",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.in_HostSurvey_RoomIn.genderPreferenceAttr) !== ("")), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IconClass: model.getCachedValue(idService.getId("LJiCr7qJmUWyI_NW6LByKA.In_IconClass"), function () {
return (((model.variables.in_HostSurvey_RoomIn.genderPreferenceAttr === "COUPLE")) ? ("orbit-icon-couple") : ("orbit-icon-host-guest"));
}, function () {
return model.variables.in_HostSurvey_RoomIn.genderPreferenceAttr;
}),
_in_IconClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_RoomInDataFetchStatus),
In_PillText: model.getCachedValue(idService.getId("LJiCr7qJmUWyI_NW6LByKA.In_PillText"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getGenderPreferenceByJSON_Name$Action(model.variables.in_HostSurvey_RoomIn.genderPreferenceAttr, model.variables.in_GenderPreferencesIn, callContext).out_GenderPreferenceOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).labelAttr;
}, function () {
return model.variables.in_HostSurvey_RoomIn.genderPreferenceAttr;
}, function () {
return model.variables.in_GenderPreferencesIn;
}),
_in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_RoomInDataFetchStatus, model.variables._in_GenderPreferencesInDataFetchStatus),
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
uuid: "3",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if(!(model.variables.in_HostSurvey_RoomIn.numberOfBedsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IsDisabled: model.variables.in_IsDisabledIn,
_in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus),
In_IconClass: "orbit-icon-accommodation",
In_PillText: model.getCachedValue(idService.getId("0gg8ncnM_06_G5dx9KXklg.In_PillText"), function () {
return OS.BuiltinFunctions.longIntegerToText(model.variables.in_HostSurvey_RoomIn.numberOfBedsAttr);
}, function () {
return model.variables.in_HostSurvey_RoomIn.numberOfBedsAttr;
}),
_in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_RoomInDataFetchStatus)
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if(((model.variables.in_HostSurvey_RoomIn.floorAttr) !== ("")), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IconClass: "orbit-icon-home",
In_PillText: model.getCachedValue(idService.getId("ZBhu2Lfzx0KaioaRh+fPCQ.In_PillText"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getHouseFloorByJSON_Name$Action(model.variables.in_HostSurvey_RoomIn.floorAttr, model.variables.in_HouseFloorsIn, callContext).out_HouseFloorOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).labelAttr;
}, function () {
return model.variables.in_HostSurvey_RoomIn.floorAttr;
}, function () {
return model.variables.in_HouseFloorsIn;
}),
_in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_RoomInDataFetchStatus, model.variables._in_HouseFloorsInDataFetchStatus),
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
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if(model.variables.in_HostSurvey_RoomIn.hasEnsuiteAttr, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IconClass: "orbit-icon-amenity-ensuite",
In_PillText: "Ensuite",
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
uuid: "6",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if(model.variables.in_HostSurvey_RoomIn.hasToiletAttr, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_PillText: "Toilet",
In_IsDisabled: model.variables.in_IsDisabledIn,
_in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus),
In_IconClass: "orbit-icon-amenity-toilet"
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
uuid: "7",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if(model.variables.in_HostSurvey_RoomIn.hasShowerAttr, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IconClass: "orbit-icon-amenity-shower",
In_PillText: "Shower",
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
uuid: "8",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if(model.variables.in_HostSurvey_RoomIn.hasBasinAttr, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IconClass: "orbit-icon-amenity-basin",
In_PillText: "Basin",
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
uuid: "9",
alias: "7"
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
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationPills.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationPills.mvc$debugger", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRec", "Connect2_OrbitMobile_MUI.controller$GetGenderPreferenceByJSON_Name", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorList", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRec", "Connect2_OrbitMobile_MUI.controller$GetHouseFloorByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationPills_mvc_Debugger) {
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:oCIhtdBKk0ic0NPQlmlPww:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.oCIhtdBKk0ic0NPQlmlPww:AB6uIpuhW_EZihZ_1fJOcw", "Connect2_OrbitMobile_MUI", "HostSurvey_AccommodationPills", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:oCIhtdBKk0ic0NPQlmlPww", callContext.id);
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationPills.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"do7ctZN+YU+k1268PTiRkQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsDisabledIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"3aZCN6PZIE+OevOdFsmO7g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostSurvey_RoomIn;
}
},
"84Pfn4OClU6fWvm_J+nIlQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseFloorsIn;
}
},
"xdiqlNaal02Om4OBlcUwuQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_GenderPreferencesIn;
}
},
"hoqlGqA+nk+YJlHQ1OcgBQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasGenderPreference"));
})(varBag.model, idService);
}
},
"DLv_knR130ydgU7WAQV1Lw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasNumberOfBeds"));
})(varBag.model, idService);
}
},
"CwTXL2j0y0WutN43bp6+7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFloor"));
})(varBag.model, idService);
}
},
"Jpjt6nyd8kqNpXx+jc4VPg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasEnsuite"));
})(varBag.model, idService);
}
},
"WHS9UwNVn0SAaB48UjWoOg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasToilet"));
})(varBag.model, idService);
}
},
"VYIiDSVB9E6JdsKZQBmQ_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasShower"));
})(varBag.model, idService);
}
},
"gvyUWrq0IkiLvnffyfPqoA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasBasin"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
