define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.controller$GetFormattedLocalDateTime", "Connect2_OrbitMobile_IS.model$QRCodeStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$ScannedUserRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ScanResult", "scanResultIn", "ScanResult", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.QRCodeStatusRec());
}, false, Connect2_OrbitMobile_ISModel.QRCodeStatusRec), 
this.attr("_scanResultInDataFetchStatus", "_scanResultInDataFetchStatus", "_scanResultInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EventName", "eventNameIn", "EventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_eventNameInDataFetchStatus", "_eventNameInDataFetchStatus", "_eventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ScannedUser", "scannedUserIn", "ScannedUser", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.ScannedUserRec());
}, false, Connect2_OrbitMobile_BLModel.ScannedUserRec), 
this.attr("_scannedUserInDataFetchStatus", "_scannedUserInDataFetchStatus", "_scannedUserInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("ScanResult" in inputs) {
this.variables.scanResultIn = inputs.ScanResult;
if("_scanResultInDataFetchStatus" in inputs) {
this.variables._scanResultInDataFetchStatus = inputs._scanResultInDataFetchStatus;
}

}

if("EventName" in inputs) {
this.variables.eventNameIn = inputs.EventName;
if("_eventNameInDataFetchStatus" in inputs) {
this.variables._eventNameInDataFetchStatus = inputs._eventNameInDataFetchStatus;
}

}

if("ScannedUser" in inputs) {
this.variables.scannedUserIn = inputs.ScannedUser;
if("_scannedUserInDataFetchStatus" in inputs) {
this.variables._scannedUserInDataFetchStatus = inputs._scannedUserInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.Popup_QRCodeScan");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.controller$GetFormattedLocalDateTime", "Connect2_OrbitMobile_IS.model$QRCodeStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$ScannedUserRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.Popup_QRCodeScan";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_mvc_controller;
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
style: "orbit-qrcode-scan-cont",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-qrcode-scan-title",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("mlvK+JHLV0+lOscT+d2weA.Value"), function () {
return (((((model.variables.scannedUserIn.memberAttr.firstNameAttr) !== ("")) && ((model.variables.scannedUserIn.memberAttr.lastnameAttr) !== ("")))) ? (((model.variables.scannedUserIn.memberAttr.firstNameAttr + " ") + model.variables.scannedUserIn.memberAttr.lastnameAttr)) : ("Participant"));
}, function () {
return model.variables.scannedUserIn.memberAttr.firstNameAttr;
}, function () {
return model.variables.scannedUserIn.memberAttr.lastnameAttr;
}),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-member-photo-cont margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.scannedUserIn.signedURLAttr) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-error-placeholder-src": OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User.png")
},
style: "orbit-member-photo",
type: /*External*/ 1,
url: model.variables.scannedUserIn.signedURLAttr,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus)
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User.png"),
style: "orbit-member-photo",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "font-weight: bold;"
},
style: "margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "bold",
visible: (model.variables.scanResultIn.successAttr && ((model.variables.eventNameIn) !== (""))),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scanResultInDataFetchStatus, model.variables._eventNameInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.eventNameIn,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._eventNameInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.variables.scanResultIn.successAttr,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scanResultInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("qbS1eJ6940unYws27r9rng.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedLocalDateTime$Action(OS.BuiltinFunctions.currDateTime(), false, true, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.scannedUserIn.memberAttr.localityNameAttr) !== ("")),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: ("Locality: " + model.variables.scannedUserIn.memberAttr.localityNameAttr),
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.scannedUserIn.memberAttr.countryNameAttr) !== ("")),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: ("Country: " + model.variables.scannedUserIn.memberAttr.countryNameAttr),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.scannedUserIn.userRoleAttr) !== ("")),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "white-space-nowrap",
value: ("Role: " + model.variables.scannedUserIn.userRoleAttr),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width display-flex",
visible: !(model.variables.scannedUserIn.seatsAttr.isEmpty),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus)
}, React.createElement(OSWidgets.Text, {
style: "white-space-nowrap",
text: ["Row:"],
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.scannedUserIn.seatsAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("MMW7Sy9_rUyTyX3elKD2eg.Value"), function () {
return (((((model.variables.scannedUserIn.seatsAttr.getCurrentRowNumber(callContext.iterationContext)) !== (0))) ? (" & ") : (" ")) + model.variables.scannedUserIn.seatsAttr.getCurrent(callContext.iterationContext).seatAllocationAttr);
}, function () {
return model.variables.scannedUserIn.seatsAttr.getCurrentRowNumber(callContext.iterationContext);
}, function () {
return model.variables.scannedUserIn.seatsAttr.getCurrent(callContext.iterationContext).seatAllocationAttr;
}),
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus),
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._scannedUserInDataFetchStatus)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.scannedUserIn.tagAttr) !== ("")),
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "white-space-nowrap",
value: ("GMP Tag: " + model.variables.scannedUserIn.tagAttr),
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scannedUserInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.scanResultIn.successAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Has Checked in",
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-qrcode-scan-ckeck-cont",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon font-size-3-5em",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.scanResultIn.errorMessageAttr,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._scanResultInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-qrcode-scan-cross-cont",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "times",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-circle-cross font-size-3-5em",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-qrcode-scan-button-cont",
visible: true,
_idProps: {
service: idService,
uuid: "32"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_QRCodeScan/Button OnClick");
controller.event_Done$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-primary orbit-qrcode-scan-button",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Done"))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan.mvc$debugger", "Connect2_OrbitMobile_MUI.controller$GetFormattedLocalDateTime", "Connect2_OrbitMobile_IS.model$QRCodeStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$ScannedUserRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_mvc_Debugger) {
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

Controller.prototype.event_Done$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:77gmXjBhWUu0_vIMXyZv0A:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.77gmXjBhWUu0_vIMXyZv0A:Yt52axUxiT+cz8LKsVJDQQ", "Connect2_OrbitMobile_MUI", "Popup_QRCodeScan", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:77gmXjBhWUu0_vIMXyZv0A", callContext.id);
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"zQ0jCRLuDUyb092YCWa+4g": {
getter: function (varBag, idService) {
return varBag.model.variables.scanResultIn;
}
},
"nKE5uaMfN0KcJ_UZncMfGw": {
getter: function (varBag, idService) {
return varBag.model.variables.eventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hsyhNhAgJkW8eiiR4RJX9Q": {
getter: function (varBag, idService) {
return varBag.model.variables.scannedUserIn;
}
},
"MmtsH1ucQ0WcInXH4k0MJw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasSignedURLData"));
})(varBag.model, idService);
}
},
"6PrY6JvDwUm4ccrQBQh7FQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsSuccess_Icon"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
