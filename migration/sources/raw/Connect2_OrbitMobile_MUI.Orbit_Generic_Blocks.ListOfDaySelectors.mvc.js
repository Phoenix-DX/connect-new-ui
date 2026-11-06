define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.mvc$model", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Weekday", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Single", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("DateList", "dateListIn", "DateList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.DayFilterList());
}, false, Connect2_OrbitMobile_MUIModel.DayFilterList), 
this.attr("_dateListInDataFetchStatus", "_dateListInDataFetchStatus", "_dateListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowInWeekday", "showInWeekdayIn", "ShowInWeekday", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showInWeekdayInDataFetchStatus", "_showInWeekdayInDataFetchStatus", "_showInWeekdayInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ReplaceSunday", "replaceSundayIn", "ReplaceSunday", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_replaceSundayInDataFetchStatus", "_replaceSundayInDataFetchStatus", "_replaceSundayInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AddWeekdayBelow", "addWeekdayBelowIn", "AddWeekdayBelow", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_addWeekdayBelowInDataFetchStatus", "_addWeekdayBelowInDataFetchStatus", "_addWeekdayBelowInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("DateList" in inputs) {
this.variables.dateListIn = inputs.DateList;
if("_dateListInDataFetchStatus" in inputs) {
this.variables._dateListInDataFetchStatus = inputs._dateListInDataFetchStatus;
}

}

if("ShowInWeekday" in inputs) {
this.variables.showInWeekdayIn = inputs.ShowInWeekday;
if("_showInWeekdayInDataFetchStatus" in inputs) {
this.variables._showInWeekdayInDataFetchStatus = inputs._showInWeekdayInDataFetchStatus;
}

}

if("ReplaceSunday" in inputs) {
this.variables.replaceSundayIn = inputs.ReplaceSunday;
if("_replaceSundayInDataFetchStatus" in inputs) {
this.variables._replaceSundayInDataFetchStatus = inputs._replaceSundayInDataFetchStatus;
}

}

if("AddWeekdayBelow" in inputs) {
this.variables.addWeekdayBelowIn = inputs.AddWeekdayBelow;
if("_addWeekdayBelowInDataFetchStatus" in inputs) {
this.variables._addWeekdayBelowInDataFetchStatus = inputs._addWeekdayBelowInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Generic_Blocks.ListOfDaySelectors");
});
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.mvc$view", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Weekday", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Single", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvc_view) {
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
        View.displayName = "Orbit_Generic_Blocks.ListOfDaySelectors";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_controller;
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
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.dateListIn,
style: "list list-group event-date-selector-list",
tag: "div",
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dateListInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/ListOfDaySelectors/Container onclick");
controller.clickedDate$Action(Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.dAY, model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr, model.variables.dateListIn.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "event-date-selector-cont",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.addWeekdayBelowIn), asPrimitiveValue(model.variables.replaceSundayIn), asPrimitiveValue(model.variables.showInWeekdayIn), asPrimitiveValue(model.variables._addWeekdayBelowInDataFetchStatus), asPrimitiveValue(model.variables._replaceSundayInDataFetchStatus), asPrimitiveValue(model.variables._showInWeekdayInDataFetchStatus), asPrimitiveValue(model.variables._dateListInDataFetchStatus), asPrimitiveValue(model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr), asPrimitiveValue(model.variables.dateListIn.getCurrent(callContext.iterationContext).isSelectedAttr)]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvc_view, {
inputs: {
IsSelected: model.variables.dateListIn.getCurrent(callContext.iterationContext).isSelectedAttr,
_isSelectedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dateListInDataFetchStatus)
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
placeholders: {
placeholder_Digit: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("C1Pz8726jk6Pc7Yj4rhvEw.Value"), function () {
return ((model.variables.showInWeekdayIn) ? (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDate_Weekday$Action(model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr, true, model.variables.replaceSundayIn, callContext).out_WeekdayOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) : (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDate_Single$Action(model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr, Connect2_OrbitMobile_MUIModel.staticEntities.timeFormat.day, callContext).out_FormattedDateOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)));
}, function () {
return model.variables.showInWeekdayIn;
}, function () {
return model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr;
}, function () {
return model.variables.replaceSundayIn;
}),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showInWeekdayInDataFetchStatus, model.variables._dateListInDataFetchStatus, model.variables._replaceSundayInDataFetchStatus)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._replaceSundayInDataFetchStatus), asPrimitiveValue(model.variables._dateListInDataFetchStatus), asPrimitiveValue(model.variables._showInWeekdayInDataFetchStatus), asPrimitiveValue(model.variables.replaceSundayIn), asPrimitiveValue(model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr), asPrimitiveValue(model.variables.showInWeekdayIn)]
}), $if(model.variables.addWeekdayBelowIn, false, this, function () {
return [React.createElement(OSWidgets.Expression, {
style: "event-date-selector-weekday",
value: model.getCachedValue(idService.getId("jpbIInK26EixazXN_OFk0A.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDate_Weekday$Action(model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr, true, model.variables.replaceSundayIn, callContext).out_WeekdayOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr;
}, function () {
return model.variables.replaceSundayIn;
}),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dateListInDataFetchStatus, model.variables._replaceSundayInDataFetchStatus)
})];
}, function () {
return [];
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.addWeekdayBelowIn), asPrimitiveValue(model.variables.replaceSundayIn), asPrimitiveValue(model.variables.showInWeekdayIn), asPrimitiveValue(model.variables._addWeekdayBelowInDataFetchStatus), asPrimitiveValue(model.variables._replaceSundayInDataFetchStatus), asPrimitiveValue(model.variables._showInWeekdayInDataFetchStatus), asPrimitiveValue(model.variables._dateListInDataFetchStatus)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$debugger", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Weekday", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Single", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_Debugger) {
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

Controller.prototype.clickedDate$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2QjgT4U4pUyWrkx7l+Yj_Q:/NRWebFlows.2QjgT4U4pUyWrkx7l+Yj_Q:Zci6jLKRkxspqDpkWiLQxw", "Connect2_OrbitMobile_MUI", "Orbit_Generic_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Gx1AlYzDyUCM4NLrk07whQ:/NRWebFlows.2QjgT4U4pUyWrkx7l+Yj_Q/NodesShownInESpaceTree.Gx1AlYzDyUCM4NLrk07whQ:82lqzSiOYlqtCOoYOa+HIQ", "Connect2_OrbitMobile_MUI", "ListOfDaySelectors", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Gx1AlYzDyUCM4NLrk07whQ", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2QjgT4U4pUyWrkx7l+Yj_Q", callContext.id);
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

define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"5tMrqQWkoEGiG6F7+LMmdw": {
getter: function (varBag, idService) {
return varBag.model.variables.dateListIn;
}
},
"8OEFVntXEEahSKnfSFpD5Q": {
getter: function (varBag, idService) {
return varBag.model.variables.showInWeekdayIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"zg_koNa3EUylfTxuoLljMA": {
getter: function (varBag, idService) {
return varBag.model.variables.replaceSundayIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"bDV4BnCUP0OtFOpMSU2+Yw": {
getter: function (varBag, idService) {
return varBag.model.variables.addWeekdayBelowIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"AsOlVZKqCkCPGH7PytXVBA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Digit"));
})(varBag.model, idService);
}
},
"RlROOPyfRESehWkIzAQrLQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IncludeWeekday"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
