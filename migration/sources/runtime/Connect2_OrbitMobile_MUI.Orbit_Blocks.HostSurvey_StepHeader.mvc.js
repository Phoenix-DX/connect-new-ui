define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_StepHeader.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$model", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRec", "Connect2_OrbitMobile_MUI.model$StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("CurrentStepProperties", "currentStepPropertiesVar", "CurrentStepProperties", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.StepPropertiesRec());
}, false, Connect2_OrbitMobile_MUIModel.StepPropertiesRec), 
this.attr("In_CurrentRowNumber", "in_CurrentRowNumberIn", "In_CurrentRowNumber", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_CurrentRowNumberInDataFetchStatus", "_in_CurrentRowNumberInDataFetchStatus", "_in_CurrentRowNumberInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_LocalHostStepSurvey", "in_LocalHostStepSurveyIn", "In_LocalHostStepSurvey", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRec());
}, false, Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRec), 
this.attr("_in_LocalHostStepSurveyInDataFetchStatus", "_in_LocalHostStepSurveyInDataFetchStatus", "_in_LocalHostStepSurveyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_StepLength", "in_StepLengthIn", "In_StepLength", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_StepLengthInDataFetchStatus", "_in_StepLengthInDataFetchStatus", "_in_StepLengthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_StepProperties", "in_StepPropertiesIn", "In_StepProperties", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord());
}, false, Connect2_OrbitMobile_MUIModel.StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord), 
this.attr("_in_StepPropertiesInDataFetchStatus", "_in_StepPropertiesInDataFetchStatus", "_in_StepPropertiesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_CurrentRowNumber" in inputs) {
this.variables.in_CurrentRowNumberIn = inputs.In_CurrentRowNumber;
if("_in_CurrentRowNumberInDataFetchStatus" in inputs) {
this.variables._in_CurrentRowNumberInDataFetchStatus = inputs._in_CurrentRowNumberInDataFetchStatus;
}

}

if("In_LocalHostStepSurvey" in inputs) {
this.variables.in_LocalHostStepSurveyIn = inputs.In_LocalHostStepSurvey;
if("_in_LocalHostStepSurveyInDataFetchStatus" in inputs) {
this.variables._in_LocalHostStepSurveyInDataFetchStatus = inputs._in_LocalHostStepSurveyInDataFetchStatus;
}

}

if("In_StepLength" in inputs) {
this.variables.in_StepLengthIn = inputs.In_StepLength;
if("_in_StepLengthInDataFetchStatus" in inputs) {
this.variables._in_StepLengthInDataFetchStatus = inputs._in_StepLengthInDataFetchStatus;
}

}

if("In_StepProperties" in inputs) {
this.variables.in_StepPropertiesIn = inputs.In_StepProperties;
if("_in_StepPropertiesInDataFetchStatus" in inputs) {
this.variables._in_StepPropertiesInDataFetchStatus = inputs._in_StepPropertiesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_StepHeader");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_StepHeader.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_StepHeader.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_StepHeader.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$view", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRec", "Connect2_OrbitMobile_MUI.model$StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_StepHeader";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvc_controller;
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
style: "orbit-host-survey-header",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-neutral-8 font-size-xs",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "bold",
value: ((("Step " + ((model.variables.in_CurrentRowNumberIn + 1)).toString()) + " of ") + OS.BuiltinFunctions.longIntegerToText(model.variables.in_StepLengthIn)),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CurrentRowNumberInDataFetchStatus, model.variables._in_StepLengthInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-row align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "font-size-base color-orbit-primary-8 bold",
value: model.variables.in_LocalHostStepSurveyIn.headerLabelAttr,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_LocalHostStepSurveyInDataFetchStatus)
})), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IsSmallIcon: true,
In_IconClass: model.getCachedValue(idService.getId("UlRRuuSiNE+MxykDsA65Eg.In_IconClass"), function () {
return ((model.variables.currentStepPropertiesVar.isEditAttr) ? ("orbit-icon-circle-warning color-orbit-orange-8") : ("orbit-icon-circle-check color-orbit-green-6"));
}, function () {
return model.variables.currentStepPropertiesVar.isEditAttr;
}),
In_ExtendedStyle: model.getCachedValue(idService.getId("UlRRuuSiNE+MxykDsA65Eg.In_ExtendedStyle"), function () {
return ((model.variables.currentStepPropertiesVar.isEditAttr) ? ("background-color: var(--orbit-orange-2); color: var(--orbit-orange-8);") : ("background-color: var(--orbit-green-2); color: var(--orbit-green-6);"));
}, function () {
return model.variables.currentStepPropertiesVar.isEditAttr;
}),
In_PillText: model.getCachedValue(idService.getId("UlRRuuSiNE+MxykDsA65Eg.In_PillText"), function () {
return ((model.variables.currentStepPropertiesVar.isEditAttr) ? ("Pending") : ("Completed"));
}, function () {
return model.variables.currentStepPropertiesVar.isEditAttr;
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
uuid: "6",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_StepHeader.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_StepHeader.mvc$debugger", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRec", "Connect2_OrbitMobile_MUI.model$StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvc_Debugger) {
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+DuN4e5jlESDycU7Pan3PQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.uoVH16HsR0mfl85yBbVpcQ/ClientActions.+DuN4e5jlESDycU7Pan3PQ:RWoaTRyr3kL27aVoFhWnPQ", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PbnzcGBQ7USjswNKHFkf+A", callContext.id);
// Set Current Step
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q_x5yPbTc06SPeqEbdFtWQ", callContext.id);
// CurrentStepProperties.IsEdit = If
model.variables.currentStepPropertiesVar.isEditAttr = (((model.variables.in_LocalHostStepSurveyIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation)) ? (model.variables.in_StepPropertiesIn.accommodationAttr.isEditAttr) : ((((model.variables.in_LocalHostStepSurveyIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) ? (model.variables.in_StepPropertiesIn.mealsAttr.isEditAttr) : ((((model.variables.in_LocalHostStepSurveyIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) ? (model.variables.in_StepPropertiesIn.helpersAttr.isEditAttr) : ((((model.variables.in_LocalHostStepSurveyIn.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) ? (model.variables.in_StepPropertiesIn.vehiclesAttr.isEditAttr) : (false))))))));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q_x5yPbTc06SPeqEbdFtWQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CurrentStepProperties.TrySave = False
model.variables.currentStepPropertiesVar.trySaveAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q_x5yPbTc06SPeqEbdFtWQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// CurrentStepProperties.HasData = False
model.variables.currentStepPropertiesVar.hasDataAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ds_KzGiWuEuWDv8NoTRsLA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+DuN4e5jlESDycU7Pan3PQ", callContext.id);
}

};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uoVH16HsR0mfl85yBbVpcQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.uoVH16HsR0mfl85yBbVpcQ:SA6y6TaLUlPth0mnYok+xg", "Connect2_OrbitMobile_MUI", "HostSurvey_StepHeader", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uoVH16HsR0mfl85yBbVpcQ", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_StepHeader On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_StepHeader On Parameters Changed");
return controller.onInitialize$Action(callContext);

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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_StepHeader.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"y+h7sPWpI0OxaCe97j_3ew": {
getter: function (varBag, idService) {
return varBag.model.variables.currentStepPropertiesVar;
}
},
"ZtlxTljs8Eu6WK2zzww4Yg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CurrentRowNumberIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"JFHrlLo9iE67tGUjsQJVxg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_LocalHostStepSurveyIn;
}
},
"3mprQe6Hb0ebQFp0BL4Waw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_StepLengthIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"hnWy_lYgg0O0Ac0KpZxueg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_StepPropertiesIn;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
