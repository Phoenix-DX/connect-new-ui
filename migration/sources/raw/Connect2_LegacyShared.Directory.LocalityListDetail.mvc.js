define("Connect2_LegacyShared.Directory.LocalityListDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CountryWithMapPositionList"], function (OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("CountryDetailList", "countryDetailListIn", "CountryDetailList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CountryWithMapPositionList());
}, false, Connect2_LegacySharedModel.CountryWithMapPositionList), 
this.attr("_countryDetailListInDataFetchStatus", "_countryDetailListInDataFetchStatus", "_countryDetailListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HideHeader", "hideHeaderIn", "HideHeader", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_hideHeaderInDataFetchStatus", "_hideHeaderInDataFetchStatus", "_hideHeaderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("CountryDetailList" in inputs) {
this.variables.countryDetailListIn = inputs.CountryDetailList;
if("_countryDetailListInDataFetchStatus" in inputs) {
this.variables._countryDetailListInDataFetchStatus = inputs._countryDetailListInDataFetchStatus;
}

}

if("HideHeader" in inputs) {
this.variables.hideHeaderIn = inputs.HideHeader;
if("_hideHeaderInDataFetchStatus" in inputs) {
this.variables._hideHeaderInDataFetchStatus = inputs._hideHeaderInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory.LocalityListDetail");
});
define("Connect2_LegacyShared.Directory.LocalityListDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Directory.LocalityListDetail.mvc$model", "Connect2_LegacyShared.Directory.LocalityListDetail.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.model$CountryWithMapPositionList"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Directory_LocalityListDetail_mvc_model, Connect2_LegacyShared_Directory_LocalityListDetail_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Directory.LocalityListDetail";
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
                return Connect2_LegacyShared_Directory_LocalityListDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Directory_LocalityListDetail_mvc_controller;
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
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "text-neutral-6 padding-y-s border-bottom-neutral-5",
visible: !(model.variables.hideHeaderIn),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideHeaderInDataFetchStatus)
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "margin-left: 10px;"
},
text: ["Browse by Country"],
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.countryDetailListIn,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._countryDetailListInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory/LocalityListDetail/ListItem1 OnClick");
controller.onClick_GoToBrowseCountry$Action(model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).codeAttr, model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).initialLatitudeAttr, model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).initialLongitudeAttr, model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).initialZoomAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "list-item",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "landing-country-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "width30 padding-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._countryDetailListInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "locality-details-container width55",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "locality-info-container width37-5",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("pt5LHIMRakq6zQWUGssw1w.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.longIntegerToDecimal(model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).membersCountAttr), "", 0, "", ",");
}, function () {
return model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).membersCountAttr;
}),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._countryDetailListInDataFetchStatus)
}), React.createElement(OSWidgets.Icon, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon icon-directory-members font-size-0-8em",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "locality-info-container width37-5",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("tvK66hQT0UGkOUgimsuWLw.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.longIntegerToDecimal(model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).householdersCountAttr), "", 0, "", ",");
}, function () {
return model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).householdersCountAttr;
}),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._countryDetailListInDataFetchStatus)
}), React.createElement(OSWidgets.Icon, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon icon-directory-Hosuehold font-size-0-8em",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "locality-info-container width25",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("bA5gsPvVUkWIjMdl8sm8jQ.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.longIntegerToDecimal(model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).localitiesCountAttr), "", 0, "", ",");
}, function () {
return model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).localitiesCountAttr;
}),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._countryDetailListInDataFetchStatus)
}), React.createElement(OSWidgets.Icon, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon icon-directory-Locality font-size-0-8em",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "width5 text-align-right",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "chevron-right",
iconSize: /*FontSize*/ 0,
style: "icon text-neutral-6 font-size-0-9em",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._countryDetailListInDataFetchStatus), asPrimitiveValue(model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).localitiesCountAttr), asPrimitiveValue(model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).householdersCountAttr), asPrimitiveValue(model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).membersCountAttr), asPrimitiveValue(model.variables.countryDetailListIn.getCurrent(callContext.iterationContext).nameAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._countryDetailListInDataFetchStatus)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Directory.LocalityListDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Directory.LocalityListDetail.mvc$debugger", "Connect2_LegacyShared.model$CountryWithMapPositionList"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Directory_LocalityListDetail_mvc_Debugger) {
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

Controller.prototype.onClick_GoToBrowseCountry$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:1d3sM7CHf0Wwgjg7N1WecQ:/NRWebFlows.1d3sM7CHf0Wwgjg7N1WecQ:vP+hlK7oystlEn_ximUhgQ", "Connect2_LegacyShared", "Directory", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:NN3_NuFHr0a9cEOgES6NdQ:/NRWebFlows.1d3sM7CHf0Wwgjg7N1WecQ/NodesShownInESpaceTree.NN3_NuFHr0a9cEOgES6NdQ:DqFFAqZMbfH3iv7cy6khjg", "Connect2_LegacyShared", "LocalityListDetail", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:NN3_NuFHr0a9cEOgES6NdQ", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:1d3sM7CHf0Wwgjg7N1WecQ", callContext.id);
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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.Directory.LocalityListDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LkNdRDOVh0CjViT5n_MS+w": {
getter: function (varBag, idService) {
return varBag.model.variables.countryDetailListIn;
}
},
"GBX15AtPvkurTP3GL3oWBg": {
getter: function (varBag, idService) {
return varBag.model.variables.hideHeaderIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HKMQKIZrfUCZW93YPfST5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItem1"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
