define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_BL.model$YearItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$YearItemList", "Connect2_OrbitMobile_MUI.model$IntegerIntegerIntegerRecord"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AnySelected", "anySelectedVar", "AnySelected", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_OrbitLandingFilter", "in_OrbitLandingFilterIn", "In_OrbitLandingFilter", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_OrbitLandingFilterInDataFetchStatus", "_in_OrbitLandingFilterInDataFetchStatus", "_in_OrbitLandingFilterInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Years", "in_YearsIn", "In_Years", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.YearItemList());
}, false, Connect2_OrbitMobile_MUIModel.YearItemList), 
this.attr("_in_YearsInDataFetchStatus", "_in_YearsInDataFetchStatus", "_in_YearsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("PopupMeasurements", "popupMeasurementsIn", "PopupMeasurements", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.IntegerIntegerIntegerRecord());
}, false, Connect2_OrbitMobile_MUIModel.IntegerIntegerIntegerRecord), 
this.attr("_popupMeasurementsInDataFetchStatus", "_popupMeasurementsInDataFetchStatus", "_popupMeasurementsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
return {
RadioGroup_Filters: OS.Model.ValidationWidgetRecord,
Checkbox_Year: OS.Model.ValidationWidgetRecord
};
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
return true;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_OrbitLandingFilter" in inputs) {
this.variables.in_OrbitLandingFilterIn = inputs.In_OrbitLandingFilter;
if("_in_OrbitLandingFilterInDataFetchStatus" in inputs) {
this.variables._in_OrbitLandingFilterInDataFetchStatus = inputs._in_OrbitLandingFilterInDataFetchStatus;
}

}

if("In_Years" in inputs) {
this.variables.in_YearsIn = inputs.In_Years;
if("_in_YearsInDataFetchStatus" in inputs) {
this.variables._in_YearsInDataFetchStatus = inputs._in_YearsInDataFetchStatus;
}

}

if("PopupMeasurements" in inputs) {
this.variables.popupMeasurementsIn = inputs.PopupMeasurements;
if("_popupMeasurementsInDataFetchStatus" in inputs) {
this.variables._popupMeasurementsInDataFetchStatus = inputs._popupMeasurementsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.Popup_OrbitLanding_Filters");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_BL.model$YearItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$YearItemList", "Connect2_OrbitMobile_MUI.model$IntegerIntegerIntegerRecord"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.Popup_OrbitLanding_Filters";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvc_controller;
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
extendedProperties: {
className: "orbit-filters-popup-exit padding-bottom-s"
},
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Filters/Icon onclick");
controller.closePopup$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
icon: "times",
iconSize: /*FontSize*/ 0,
style: "icon padding-s",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: (("max-height: calc(100vh - " + ((model.variables.popupMeasurementsIn.bottomAttr + model.variables.popupMeasurementsIn.topAttr)).toString()) + "px);")
},
style: "orbit-filters-popup-cont",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-filters-popup-sub-cont",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.RadioGroup, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Filters/RadioGroup_Filters OnChange");
controller.onChange_RadioGroup_Filter$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "radio-group",
variable: model.createVariable(OS.DataTypes.DataTypes.Integer, model.variables.in_OrbitLandingFilterIn, function (value) {
model.variables.in_OrbitLandingFilterIn = value;
}),
_idProps: {
service: idService,
name: "RadioGroup_Filters"
},
_widgetRecordProvider: widgetsRecordProvider,
variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitLandingFilterInDataFetchStatus)
}, React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents,
visible: true,
_idProps: {
service: idService,
name: "RadioButton_Upcoming"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
className: model.getCachedValue(idService.getId("txo9AmsIWkmdyInoYSEdIA.class"), function () {
return (((model.variables.in_OrbitLandingFilterIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents)) ? ("color-orbit-primary-7 bold") : (""));
}, function () {
return model.variables.in_OrbitLandingFilterIn;
})
},
text: ["Upcoming Events"],
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents,
visible: true,
_idProps: {
service: idService,
name: "RadioButton_Past"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
className: model.getCachedValue(idService.getId("ENYsXrhT+UiXIY1QmqrI_Q.class"), function () {
return (((model.variables.in_OrbitLandingFilterIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents)) ? ("color-orbit-primary-7 bold") : (""));
}, function () {
return model.variables.in_OrbitLandingFilterIn;
})
},
text: ["Past Events"],
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Filters/Container onclick");
controller.onClick_ClearYearFilters$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
style: model.getCachedValue(idService.getId("ds1Xw4FaCkS3PWG94PSi4g.style"), function () {
return ((model.variables.anySelectedVar) ? ("color: var(--color-neutral-10); font-weight: bold;") : (""));
}, function () {
return model.variables.anySelectedVar;
})
},
style: "orbit-filters-popup-clear",
visible: ((model.variables.in_OrbitLandingFilterIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents) && !(model.variables.in_YearsIn.isEmpty)),
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitLandingFilterInDataFetchStatus, model.variables._in_YearsInDataFetchStatus)
}, "Clear all"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "margin-bottom-base font-size-s bold text-neutral-10",
visible: ((model.variables.in_OrbitLandingFilterIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents) && !(model.variables.in_YearsIn.isEmpty)),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitLandingFilterInDataFetchStatus, model.variables._in_YearsInDataFetchStatus)
}, "Filter By"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-filters-popup-list",
visible: ((model.variables.in_OrbitLandingFilterIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents) && !(model.variables.in_YearsIn.isEmpty)),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitLandingFilterInDataFetchStatus, model.variables._in_YearsInDataFetchStatus)
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.in_YearsIn,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_YearsInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-bottom: none;"
},
style: "orbit-filters-popup-option",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._in_YearsInDataFetchStatus), asPrimitiveValue(model.variables.in_YearsIn.getCurrent(callContext.iterationContext).isSelectedAttr), asPrimitiveValue(model.variables.in_YearsIn.getCurrent(callContext.iterationContext).yearAttr)]
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
className: model.getCachedValue(idService.getId("FV1gKO_7Akm+nTnIqzznBA.class"), function () {
return ((model.variables.in_YearsIn.getCurrent(callContext.iterationContext).isSelectedAttr) ? ("color-orbit-primary-7 bold") : (""));
}, function () {
return model.variables.in_YearsIn.getCurrent(callContext.iterationContext).isSelectedAttr;
})
},
value: OS.BuiltinFunctions.longIntegerToText(model.variables.in_YearsIn.getCurrent(callContext.iterationContext).yearAttr),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_YearsInDataFetchStatus)
}), React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Filters/Checkbox_Year OnChange");
controller.onChange_Checkbox_Year$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.in_YearsIn.getCurrent(callContext.iterationContext).isSelectedAttr, function (value) {
model.variables.in_YearsIn.getCurrent(callContext.iterationContext).isSelectedAttr = value;
}),
_idProps: {
service: idService,
name: "Checkbox_Year"
},
_widgetRecordProvider: widgetsRecordProvider,
variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_YearsInDataFetchStatus)
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._in_YearsInDataFetchStatus)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-filters-popup-button",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Filters/Button OnClick");
controller.applyFilters$Action(model.variables.in_OrbitLandingFilterIn, model.variables.in_YearsIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Apply"))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc$debugger", "Connect2_OrbitMobile_BL.model$YearItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$YearItemList", "Connect2_OrbitMobile_MUI.model$IntegerIntegerIntegerRecord"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvc_Debugger) {
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
Controller.prototype._onChange_RadioGroup_Filter$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_RadioGroup_Filter");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:aF+XBrXrNE2liX6pKU6CDQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.x5VTVCFmr0OTocV7IJ0YrA/ClientActions.aF+XBrXrNE2liX6pKU6CDQ:8guNWRXlPXIVaeKGo35aeQ", "Connect2_OrbitMobile_MUI", "OnChange_RadioGroup_Filter", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RQBfZ+Uql0WGUjVPWL9sLw", callContext.id);
// Upcoming?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VUSMTk9hxUSWMsRULWKTTw", callContext.id) && (model.variables.in_OrbitLandingFilterIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QbAoOH3nfkOMOsnTz_yysA", callContext.id);
// Execute Action: OnClick_ClearYearFilters
controller._onClick_ClearYearFilters$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SvwzxgxbWUye1dFSZ+Tvag", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vRBOZus5P0Se4aonZJ5syw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:aF+XBrXrNE2liX6pKU6CDQ", callContext.id);
}

};
Controller.prototype._onClick_ClearYearFilters$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_ClearYearFilters");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:jW+DVXVZiU63Uwi10aO8eA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.x5VTVCFmr0OTocV7IJ0YrA/ClientActions.jW+DVXVZiU63Uwi10aO8eA:0rtEDROQxDsE1m1+VRKJ_w", "Connect2_OrbitMobile_MUI", "OnClick_ClearYearFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:e9+vwG8dB0Cup_SWTDUSkw", callContext.id);
// Foreach In_Years
callContext.iterationContext.registerIterationStart(model.variables.in_YearsIn);
try {var in_YearsIterator = callContext.iterationContext.getIterator(model.variables.in_YearsIn);
var in_YearsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IIT0cXXaYU+W3ICRtivUgw", callContext.id) && (in_YearsIndex < model.variables.in_YearsIn.length))) {
in_YearsIterator.currentRowNumber = in_YearsIndex;
// Clean list
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VbER6FJ+kEeJjl4Ap94CkA", callContext.id);
// In_Years.Current.IsSelected = False
model.variables.in_YearsIn.getItem(in_YearsIndex.valueOf()).isSelectedAttr = false;
in_YearsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.in_YearsIn);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HfumxpeKaU2icc1CLoZiUQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:jW+DVXVZiU63Uwi10aO8eA", callContext.id);
}

};
Controller.prototype._onChange_Checkbox_Year$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_Checkbox_Year");
callContext = controller.callContext(callContext);
var listFilter_IsSelectedVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilter_IsSelectedVar = listFilter_IsSelectedVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:6w0hVubTEUCu7nldbl1O9g:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.x5VTVCFmr0OTocV7IJ0YrA/ClientActions.6w0hVubTEUCu7nldbl1O9g:Y_UPKpcA89e2OK7NtB1uMw", "Connect2_OrbitMobile_MUI", "OnChange_Checkbox_Year", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Xpa1qtN9Lkipoq7SOlMAWA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+521TW8T00i7_nMiWq5eWA", callContext.id);
// Execute Action: ListFilter_IsSelected
listFilter_IsSelectedVar.value = OS.SystemActions.listFilter(model.variables.in_YearsIn, function (p) {
return p.isSelectedAttr;
}, callContext);

// No selection?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RfYiAfJlc02ZseznlkDUvw", callContext.id) && listFilter_IsSelectedVar.value.filteredListOut.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LPrlH1W1UEGmnPHVcagl7w", callContext.id);
// AnySelected = False
model.variables.anySelectedVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XWDsFzYv0kajDDJ2vcy02Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YlzzuoArUE6Cr++ggrxpGA", callContext.id);
// AnySelected = True
model.variables.anySelectedVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XWDsFzYv0kajDDJ2vcy02Q", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:6w0hVubTEUCu7nldbl1O9g", callContext.id);
}

};

Controller.prototype.onChange_RadioGroup_Filter$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_RadioGroup_Filter$Action, callContext);

};
Controller.prototype.onClick_ClearYearFilters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_ClearYearFilters$Action, callContext);

};
Controller.prototype.onChange_Checkbox_Year$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_Checkbox_Year$Action, callContext);

};
Controller.prototype.applyFilters$Action = function () {
return Promise.resolve();
};
Controller.prototype.closePopup$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:x5VTVCFmr0OTocV7IJ0YrA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.x5VTVCFmr0OTocV7IJ0YrA:ruedw9OIn7PEaR5_2HWRzw", "Connect2_OrbitMobile_MUI", "Popup_OrbitLanding_Filters", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:x5VTVCFmr0OTocV7IJ0YrA", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/Popup_OrbitLanding_Filters On Ready");
return controller.onChange_Checkbox_Year$Action(callContext);

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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"+521TW8T00i7_nMiWq5eWA": {
getter: function (varBag, idService) {
return varBag.listFilter_IsSelectedVar.value;
}
},
"xbdc6En1ykeGWy12Wj0jsA": {
getter: function (varBag, idService) {
return varBag.model.variables.anySelectedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2lX_rEm9DUa92THvMdpjwQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitLandingFilterIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"TpTNUVgRSECl8dEf9syisA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_YearsIn;
}
},
"fkUB8SeCG0mrJlrFPgrJ6w": {
getter: function (varBag, idService) {
return varBag.model.variables.popupMeasurementsIn;
}
},
"5s2zge7eFUeOZrkBulpESw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RadioGroup_Filters"));
})(varBag.model, idService);
}
},
"gsRL1v0i4EOHb2u5PS309Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RadioButton_Upcoming"));
})(varBag.model, idService);
}
},
"W53X5usLy0KO5qDpoEj1TQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RadioButton_Past"));
})(varBag.model, idService);
}
},
"IWiIfC9pm0SVRu_0_aGREA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Checkbox_Year"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
