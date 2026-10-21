define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_NavigationItem.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_StepHeader.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AdminNotes.mvc$model", "Connect2_OrbitMobile_MUI.model$TextLocalHostSurveyStepRecordList", "Connect2_OrbitMobile_MUI.model$StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRec", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AdminNotes_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("HostSurveySteps_Data", "hostSurveySteps_DataVar", "HostSurveySteps_Data", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TextLocalHostSurveyStepRecordList());
}, false, Connect2_OrbitMobile_MUIModel.TextLocalHostSurveyStepRecordList), 
this.attr("In_HostSurveySteps", "in_HostSurveyStepsIn", "In_HostSurveySteps", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TextLocalHostSurveyStepRecordList());
}, false, Connect2_OrbitMobile_MUIModel.TextLocalHostSurveyStepRecordList), 
this.attr("_in_HostSurveyStepsInDataFetchStatus", "_in_HostSurveyStepsInDataFetchStatus", "_in_HostSurveyStepsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvcModel.hasValidationWidgets || Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AdminNotes_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_HostSurveySteps" in inputs) {
this.variables.in_HostSurveyStepsIn = inputs.In_HostSurveySteps;
if("_in_HostSurveyStepsInDataFetchStatus" in inputs) {
this.variables._in_HostSurveyStepsInDataFetchStatus = inputs._in_HostSurveyStepsInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_NavigationItem");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_NavigationItem.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_NavigationItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_NavigationItem.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_StepHeader.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AdminNotes.mvc$view", "Connect2_OrbitMobile_MUI.model$TextLocalHostSurveyStepRecordList", "Connect2_OrbitMobile_MUI.model$StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRec", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_NavigationItem_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_NavigationItem_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AdminNotes_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_NavigationItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AdminNotes_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_NavigationItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_NavigationItem_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.hostSurveySteps_DataVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-m margin-top-xs background-neutral-0",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._in_StepPropertiesInDataFetchStatus), asPrimitiveValue(model.variables.in_StepPropertiesIn), asPrimitiveValue(model.variables.hostSurveySteps_DataVar.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.hostSurveySteps_DataVar.length), asPrimitiveValue(model.variables.hostSurveySteps_DataVar.getCurrent(callContext.iterationContext).adminNoteAttr), asPrimitiveValue(model.variables.hostSurveySteps_DataVar.getCurrent(callContext.iterationContext).localHostSurveyStepAttr)]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvc_view, {
inputs: {
In_LocalHostStepSurvey: model.variables.hostSurveySteps_DataVar.getCurrent(callContext.iterationContext).localHostSurveyStepAttr,
In_StepLength: OS.BuiltinFunctions.integerToLongInteger(model.variables.hostSurveySteps_DataVar.length),
In_StepProperties: model.variables.in_StepPropertiesIn,
_in_StepPropertiesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StepPropertiesInDataFetchStatus),
In_CurrentRowNumber: model.variables.hostSurveySteps_DataVar.getCurrentRowNumber(callContext.iterationContext)
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "margin-top-s",
visible: ((model.variables.hostSurveySteps_DataVar.getCurrent(callContext.iterationContext).adminNoteAttr) !== ("")),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AdminNotes_mvc_view, {
inputs: {
In_AdminNotes: model.variables.hostSurveySteps_DataVar.getCurrent(callContext.iterationContext).adminNoteAttr
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
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_NavigationItem/Container onclick");
controller.navigateTo_Step$Action(model.variables.hostSurveySteps_DataVar.getCurrent(callContext.iterationContext).localHostSurveyStepAttr.idAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "margin-top-m text-align-right font-size-s color-neutral-9",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "chevron-right",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-arrow",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._in_StepPropertiesInDataFetchStatus), asPrimitiveValue(model.variables.in_StepPropertiesIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_NavigationItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_NavigationItem.mvc$debugger", "Connect2_OrbitMobile_MUI.model$TextLocalHostSurveyStepRecordList", "Connect2_OrbitMobile_MUI.model$StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRec", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_NavigationItem_mvc_Debugger) {
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
var listFilter_GetDataStepsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilter_GetDataStepsVar = listFilter_GetDataStepsVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:kgpjh4MZsk273xq5qNBXIw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.qypAAA2DHU2EVzOWBs6ARw/ClientActions.kgpjh4MZsk273xq5qNBXIw:lpavZb06gf35w3k_5aG7lA", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R3hgRbuSoUakC1hYMuASTg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2XJ4l_ykgkOapsgW_z8xeA", callContext.id);
// Execute Action: ListFilter_GetDataSteps
listFilter_GetDataStepsVar.value = OS.SystemActions.listFilter(model.variables.in_HostSurveyStepsIn, function (p) {
return p.localHostSurveyStepAttr.isDataStepAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YiIgl7uGGU6NbMJv1L+Vpw", callContext.id);
// HostSurveySteps_Data = ListFilter_GetDataSteps.FilteredList
model.variables.hostSurveySteps_DataVar = listFilter_GetDataStepsVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0fcdMUhOcUy8+e4OkfevEw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:kgpjh4MZsk273xq5qNBXIw", callContext.id);
}

};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.navigateTo_Step$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:qypAAA2DHU2EVzOWBs6ARw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.qypAAA2DHU2EVzOWBs6ARw:A37R0nekAYNwAyNWQ723Sw", "Connect2_OrbitMobile_MUI", "HostSurvey_NavigationItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:qypAAA2DHU2EVzOWBs6ARw", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_NavigationItem On Initialize");
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_NavigationItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"2XJ4l_ykgkOapsgW_z8xeA": {
getter: function (varBag, idService) {
return varBag.listFilter_GetDataStepsVar.value;
}
},
"+4TzJHHsfkqX9ueUTlt7iw": {
getter: function (varBag, idService) {
return varBag.model.variables.hostSurveySteps_DataVar;
}
},
"5mIefPVnCkaTLsYbRwVXSA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostSurveyStepsIn;
}
},
"SIDTmD6kU0+WP2WqFPOmZg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_StepPropertiesIn;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
