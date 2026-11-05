define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model"], function (OutSystems, UBTConnectModel, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("EventHostId", "eventHostIdIn", "EventHostId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_eventHostIdInDataFetchStatus", "_eventHostIdInDataFetchStatus", "_eventHostIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsMessageGuest", "in_IsMessageGuestIn", "In_IsMessageGuest", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsMessageGuestInDataFetchStatus", "_in_IsMessageGuestInDataFetchStatus", "_in_IsMessageGuestInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsContactOrganiser", "in_IsContactOrganiserIn", "In_IsContactOrganiser", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsContactOrganiserInDataFetchStatus", "_in_IsContactOrganiserInDataFetchStatus", "_in_IsContactOrganiserInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EventDate", "eventDateIn", "EventDate", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_eventDateInDataFetchStatus", "_eventDateInDataFetchStatus", "_eventDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EventLocality", "eventLocalityIn", "EventLocality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_eventLocalityInDataFetchStatus", "_eventLocalityInDataFetchStatus", "_eventLocalityInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvcModel.hasValidationWidgets || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("EventHostId" in inputs) {
this.variables.eventHostIdIn = OS.DataConversion.ServerDataConverter.from(inputs.EventHostId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_EventId" in inputs) {
this.variables.in_EventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_IsMessageGuest" in inputs) {
this.variables.in_IsMessageGuestIn = OS.DataConversion.ServerDataConverter.from(inputs.In_IsMessageGuest, OS.DataTypes.DataTypes.Boolean);
}

if("In_IsContactOrganiser" in inputs) {
this.variables.in_IsContactOrganiserIn = OS.DataConversion.ServerDataConverter.from(inputs.In_IsContactOrganiser, OS.DataTypes.DataTypes.Boolean);
}

if("EventDate" in inputs) {
this.variables.eventDateIn = OS.DataConversion.ServerDataConverter.from(inputs.EventDate, OS.DataTypes.DataTypes.Date);
}

if("EventLocality" in inputs) {
this.variables.eventLocalityIn = OS.DataConversion.ServerDataConverter.from(inputs.EventLocality, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Legacy_LDMEventsFlow_V2.LDM_Email_V2");
});
define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2.mvc$model", "UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2.mvc$controller", "UBTConnect.clientVariables", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view"], function (OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Legacy_LDMEventsFlow_V2_LDM_Email_V2_mvc_model, UBTConnect_Legacy_LDMEventsFlow_V2_LDM_Email_V2_mvc_controller, UBTConnectClientVariables, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_view, OSWidgets, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_LDMEventsFlow_V2.LDM_Email_V2";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_LDMEventsFlow_V2_LDM_Email_V2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_LDMEventsFlow_V2_LDM_Email_V2_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "LDM_Email_V2";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_view, {
inputs: {
EventLocality: model.variables.eventLocalityIn,
In_EventId: model.variables.in_EventIdIn,
In_IsContactOrganiser: model.variables.in_IsContactOrganiserIn,
In_EventHostId: model.variables.eventHostIdIn,
In_IsMessageGuest: model.variables.in_IsMessageGuestIn,
EventDate: model.variables.eventDateIn
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
placeholders: {
menu: PlaceholderContent.Empty,
bottomBar: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
inputs: {},
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
commonUI_Elements: PlaceholderContent.Empty
},
_dependencies: []
}), React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
inputs: {},
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2.mvc$debugger", "UBTConnect.Legacy_LDMEventsFlow_V2.controller"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_LDMEventsFlow_V2_LDM_Email_V2_mvc_Debugger, _flow_UBTConnect_Legacy_LDMEventsFlow_V2Controller) {
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:vp3CfrrlWk2JWh0AlH96Mw:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw:fQlsuSeDqt3ldNC2vcS_Cw", "UBTConnect", "Legacy_LDMEventsFlow_V2", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FISBrUfOdESb8s0g0BKy+A:/NRWebFlows.vp3CfrrlWk2JWh0AlH96Mw/NodesShownInESpaceTree.FISBrUfOdESb8s0g0BKy+A:7YzeTfxfFNYymGfl08ZGkA", "UBTConnect", "LDM_Email_V2", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FISBrUfOdESb8s0g0BKy+A", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vp3CfrrlWk2JWh0AlH96Mw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_Legacy_LDMEventsFlow_V2Controller.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Legacy_LDMEventsFlow_V2.LDM_Email_V2.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"WqCS0+y2gEKPwHvDK6CWEQ": {
getter: function (varBag, idService) {
return varBag.model.variables.eventHostIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"cse7Dr0x60abvFU1u9AtlQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ZLKdZ4g3KUC+RvcHcTpwAg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsMessageGuestIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"aHnKFg93m0KGTe5lF4KJKQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsContactOrganiserIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1hWN3WPk_Eer2PntfYUxzA": {
getter: function (varBag, idService) {
return varBag.model.variables.eventDateIn;
},
dataType: OS.DataTypes.DataTypes.Date
},
"OnWJjM+J10q7twI4V++eJg": {
getter: function (varBag, idService) {
return varBag.model.variables.eventLocalityIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"E9NXc8CCJU+tcHus_1UEPw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"EhexLLu0b024PF23K6yCKw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"1h_CsWMWcEGWHKTEnIeTVg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
