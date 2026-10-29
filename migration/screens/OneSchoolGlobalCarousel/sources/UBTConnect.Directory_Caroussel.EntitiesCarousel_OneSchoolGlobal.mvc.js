define("UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc$model"], function (OutSystems, UBTConnectModel, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("LocalityName", "localityNameVar", "LocalityName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("CountryName", "countryNameVar", "CountryName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("DeceasedOrAncestry_View", "deceasedOrAncestry_ViewVar", "DeceasedOrAncestry_View", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_EntityId", "in_EntityIdIn", "In_EntityId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EntityIdInDataFetchStatus", "_in_EntityIdInDataFetchStatus", "_in_EntityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsSkeletonOnly", "in_IsSkeletonOnlyIn", "In_IsSkeletonOnly", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsSkeletonOnlyInDataFetchStatus", "_in_IsSkeletonOnlyInDataFetchStatus", "_in_IsSkeletonOnlyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_EntityId" in inputs) {
this.variables.in_EntityIdIn = inputs.In_EntityId;
if("_in_EntityIdInDataFetchStatus" in inputs) {
this.variables._in_EntityIdInDataFetchStatus = inputs._in_EntityIdInDataFetchStatus;
}

}

if("In_IsSkeletonOnly" in inputs) {
this.variables.in_IsSkeletonOnlyIn = inputs.In_IsSkeletonOnly;
if("_in_IsSkeletonOnlyInDataFetchStatus" in inputs) {
this.variables._in_IsSkeletonOnlyInDataFetchStatus = inputs._in_IsSkeletonOnlyInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal");
});
define("UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Directory_Caroussel_EntitiesCarousel_OneSchoolGlobal_mvc_model, UBTConnect_Directory_Caroussel_EntitiesCarousel_OneSchoolGlobal_mvc_controller, UBTConnectClientVariables, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvc_view, OSWidgets) {
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
        View.displayName = "Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_OneSchoolGlobal_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_OneSchoolGlobal_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvc_view, {
inputs: {
In_OneSchoolGlobalId: model.variables.in_EntityIdIn,
_in_OneSchoolGlobalIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntityIdInDataFetchStatus),
IsRestoredFromCache: false
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.mvc$debugger"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Caroussel_EntitiesCarousel_OneSchoolGlobal_mvc_Debugger) {
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
Controller.prototype._handler_HouseholdDetails_DataFetched$Action = function (evt_LocalityNameIn, evt_CountryNameIn, evt_DeceasedOrAncestry_ViewIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_HouseholdDetails_DataFetched");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.Handler_HouseholdDetails_DataFetched$vars"))());
vars.value.evt_LocalityNameInLocal = evt_LocalityNameIn;
vars.value.evt_CountryNameInLocal = evt_CountryNameIn;
vars.value.evt_DeceasedOrAncestry_ViewInLocal = evt_DeceasedOrAncestry_ViewIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QBF8RHRZiU+dA8AC517puQ:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.wJR_bTVBxEO1NUohrGBkVw/ClientActions.QBF8RHRZiU+dA8AC517puQ:40i_NmtPPuOhtzmcFDuUFA", "UBTConnect", "Handler_HouseholdDetails_DataFetched", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7MigCI9V9U+Fh5aJH3MF2A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8teNteGdAkiQl5WoX9n3BQ", callContext.id);
// LocalityName = Evt_LocalityName
model.variables.localityNameVar = vars.value.evt_LocalityNameInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8teNteGdAkiQl5WoX9n3BQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CountryName = Evt_CountryName
model.variables.countryNameVar = vars.value.evt_CountryNameInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8teNteGdAkiQl5WoX9n3BQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// DeceasedOrAncestry_View = Evt_DeceasedOrAncestry_View
model.variables.deceasedOrAncestry_ViewVar = vars.value.evt_DeceasedOrAncestry_ViewInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qOdo6BW2Y0uqQBwGCzHrAw", callContext.id);
// Trigger Event: Event_SetHeader
return controller.event_SetHeader$Action(((vars.value.evt_LocalityNameInLocal + ", ") + vars.value.evt_CountryNameInLocal), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G5DxB7n_+UW8gGhU1Jx8iA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QBF8RHRZiU+dA8AC517puQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QBF8RHRZiU+dA8AC517puQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.Handler_HouseholdDetails_DataFetched$vars", [{
name: "Evt_LocalityName",
attrName: "evt_LocalityNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Evt_CountryName",
attrName: "evt_CountryNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Evt_DeceasedOrAncestry_View",
attrName: "evt_DeceasedOrAncestry_ViewInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.handler_HouseholdDetails_DataFetched$Action = function (evt_LocalityNameIn, evt_CountryNameIn, evt_DeceasedOrAncestry_ViewIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_HouseholdDetails_DataFetched$Action, callContext, evt_LocalityNameIn, evt_CountryNameIn, evt_DeceasedOrAncestry_ViewIn);

};
Controller.prototype.event_SetHeader$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A:GUqi42j5JzeF3DYtR7PIbA", "UBTConnect", "Directory_Caroussel", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:wJR_bTVBxEO1NUohrGBkVw:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.wJR_bTVBxEO1NUohrGBkVw:zc2UnIWHTF8UpTJqc9FC_A", "UBTConnect", "EntitiesCarousel_OneSchoolGlobal", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wJR_bTVBxEO1NUohrGBkVw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A", callContext.id);
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"MhuUtOdS9Eu4JIZzMglXEA": {
getter: function (varBag, idService) {
return varBag.vars.value.evt_LocalityNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GpsRbfbDFkaAQAkaxrTMgQ": {
getter: function (varBag, idService) {
return varBag.vars.value.evt_CountryNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iUl3Mr2NEUu_9cvVz3e8cw": {
getter: function (varBag, idService) {
return varBag.vars.value.evt_DeceasedOrAncestry_ViewInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"h7iyI9ghGkifO9iXbFTVUA": {
getter: function (varBag, idService) {
return varBag.model.variables.localityNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KvCv5kf2CEK3OLYL4tBIFw": {
getter: function (varBag, idService) {
return varBag.model.variables.countryNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wK__dO1OLke_GNAkPlOwVw": {
getter: function (varBag, idService) {
return varBag.model.variables.deceasedOrAncestry_ViewVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"pl1afNADsE6mv6xGnNcVsg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EntityIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"m26qDexED0uoC3j1tKr2Hg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsSkeletonOnlyIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
