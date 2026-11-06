define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperPills.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$model", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRec", "Connect2_OrbitMobile_MUI.controller$GetHelperRoleByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvcModel) {
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
this.attr("In_HostSurvey_Helper", "in_HostSurvey_HelperIn", "In_HostSurvey_Helper", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec());
}, false, Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec), 
this.attr("_in_HostSurvey_HelperInDataFetchStatus", "_in_HostSurvey_HelperInDataFetchStatus", "_in_HostSurvey_HelperInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HelperRoles", "in_HelperRolesIn", "In_HelperRoles", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList());
}, false, Connect2_OrbitMobile_MUIModel.LocalHelperRoleList), 
this.attr("_in_HelperRolesInDataFetchStatus", "_in_HelperRolesInDataFetchStatus", "_in_HelperRolesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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

if("In_HostSurvey_Helper" in inputs) {
this.variables.in_HostSurvey_HelperIn = inputs.In_HostSurvey_Helper;
if("_in_HostSurvey_HelperInDataFetchStatus" in inputs) {
this.variables._in_HostSurvey_HelperInDataFetchStatus = inputs._in_HostSurvey_HelperInDataFetchStatus;
}

}

if("In_HelperRoles" in inputs) {
this.variables.in_HelperRolesIn = inputs.In_HelperRoles;
if("_in_HelperRolesInDataFetchStatus" in inputs) {
this.variables._in_HelperRolesInDataFetchStatus = inputs._in_HelperRolesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_HelperPills");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperPills.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperPills.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperPills.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$view", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRec", "Connect2_OrbitMobile_MUI.controller$GetHelperRoleByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperPills_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperPills_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_HelperPills";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperPills_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperPills_mvc_controller;
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
}, $if(((((model.variables.in_HostSurvey_HelperIn.firstNameAttr) !== ("")) && ((model.variables.in_HostSurvey_HelperIn.lastNameAttr) !== (""))) && ((model.variables.in_HostSurvey_HelperIn.helperRoleAttr) !== (""))), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IconClass: "orbit-icon-person-wave",
In_PillText: model.getCachedValue(idService.getId("u+NthJM4fEq9ISlt6zeXAA.In_PillText"), function () {
return ((((OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getHelperRoleByJSON_Name$Action(model.variables.in_HostSurvey_HelperIn.helperRoleAttr, model.variables.in_HelperRolesIn, callContext).out_HelperRolesOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).labelAttr + ": ") + model.variables.in_HostSurvey_HelperIn.firstNameAttr) + " ") + model.variables.in_HostSurvey_HelperIn.lastNameAttr);
}, function () {
return model.variables.in_HostSurvey_HelperIn.helperRoleAttr;
}, function () {
return model.variables.in_HelperRolesIn;
}, function () {
return model.variables.in_HostSurvey_HelperIn.firstNameAttr;
}, function () {
return model.variables.in_HostSurvey_HelperIn.lastNameAttr;
}),
_in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_HelperInDataFetchStatus, model.variables._in_HelperRolesInDataFetchStatus),
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
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if((((model.variables.in_HostSurvey_HelperIn.localityNameAttr) !== ("")) || ((model.variables.in_HostSurvey_HelperIn.countryNameAttr) !== (""))), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_PillText: model.getCachedValue(idService.getId("yey3UkDik0C+QXl4hDjhKA.In_PillText"), function () {
return (model.variables.in_HostSurvey_HelperIn.localityNameAttr + ((((model.variables.in_HostSurvey_HelperIn.countryNameAttr) !== (""))) ? (((((model.variables.in_HostSurvey_HelperIn.localityNameAttr) !== (""))) ? (((" (" + model.variables.in_HostSurvey_HelperIn.countryNameAttr) + ")")) : (model.variables.in_HostSurvey_HelperIn.countryNameAttr))) : ("")));
}, function () {
return model.variables.in_HostSurvey_HelperIn.localityNameAttr;
}, function () {
return model.variables.in_HostSurvey_HelperIn.countryNameAttr;
}),
_in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_HelperInDataFetchStatus),
In_IsDisabled: model.variables.in_IsDisabledIn,
_in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus),
In_IconClass: "orbit-icon-location"
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
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperPills.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperPills.mvc$debugger", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRec", "Connect2_OrbitMobile_MUI.controller$GetHelperRoleByJSON_Name", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperPills_mvc_Debugger) {
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:iNGsX15tn0K2xTQxWMl32Q:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.iNGsX15tn0K2xTQxWMl32Q:9Nxp7GEu78evdgXK6Fwbeg", "Connect2_OrbitMobile_MUI", "HostSurvey_HelperPills", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iNGsX15tn0K2xTQxWMl32Q", callContext.id);
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperPills.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"veBxVOshNU2Qm_b0MH8xpw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsDisabledIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"A07ihWQ+lEK3Pkd7mWEWLQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostSurvey_HelperIn;
}
},
"eKI2GhpN60mcxjRzRvSRzw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HelperRolesIn;
}
},
"AY05YGD2tEWh48cwM0I1Rg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasHelper"));
})(varBag.model, idService);
}
},
"VypZkf8PeU+6tYwy1UBXzg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasLocation"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
