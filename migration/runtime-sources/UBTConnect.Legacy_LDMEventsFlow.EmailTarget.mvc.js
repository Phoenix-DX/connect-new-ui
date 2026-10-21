define("UBTConnect.Legacy_LDMEventsFlow.EmailTarget.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI"], function (OutSystems, UBTConnectModel, Connect2_OrbitMobile_MUIController, Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_HouseholdFirstName", "in_HouseholdFirstNameIn", "In_HouseholdFirstName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HouseholdFirstNameInDataFetchStatus", "_in_HouseholdFirstNameInDataFetchStatus", "_in_HouseholdFirstNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HouseholdFullName", "in_HouseholdFullNameIn", "In_HouseholdFullName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HouseholdFullNameInDataFetchStatus", "_in_HouseholdFullNameInDataFetchStatus", "_in_HouseholdFullNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EmailTo", "emailToIn", "EmailTo", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, false), 
this.attr("_emailToInDataFetchStatus", "_emailToInDataFetchStatus", "_emailToInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ContactBusinessType", "contactBusinessTypeIn", "ContactBusinessType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_contactBusinessTypeInDataFetchStatus", "_contactBusinessTypeInDataFetchStatus", "_contactBusinessTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("InitialEmailSubject", "initialEmailSubjectIn", "InitialEmailSubject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_initialEmailSubjectInDataFetchStatus", "_initialEmailSubjectInDataFetchStatus", "_initialEmailSubjectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EmailHost", "emailHostIn", "EmailHost", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_emailHostInDataFetchStatus", "_emailHostInDataFetchStatus", "_emailHostInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsFromLDM", "isFromLDMIn", "IsFromLDM", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isFromLDMInDataFetchStatus", "_isFromLDMInDataFetchStatus", "_isFromLDMInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvcModel.hasValidationWidgets || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_HouseholdFirstName" in inputs) {
this.variables.in_HouseholdFirstNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HouseholdFirstName, OS.DataTypes.DataTypes.Text);
}

if("In_HouseholdFullName" in inputs) {
this.variables.in_HouseholdFullNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HouseholdFullName, OS.DataTypes.DataTypes.Text);
}

if("EmailTo" in inputs) {
this.variables.emailToIn = OS.DataConversion.ServerDataConverter.from(inputs.EmailTo, OS.DataTypes.DataTypes.Email);
}

if("ContactBusinessType" in inputs) {
this.variables.contactBusinessTypeIn = OS.DataConversion.ServerDataConverter.from(inputs.ContactBusinessType, OS.DataTypes.DataTypes.Text);
}

if("InitialEmailSubject" in inputs) {
this.variables.initialEmailSubjectIn = OS.DataConversion.ServerDataConverter.from(inputs.InitialEmailSubject, OS.DataTypes.DataTypes.Text);
}

if("EmailHost" in inputs) {
this.variables.emailHostIn = OS.DataConversion.ServerDataConverter.from(inputs.EmailHost, OS.DataTypes.DataTypes.Boolean);
}

if("IsFromLDM" in inputs) {
this.variables.isFromLDMIn = OS.DataConversion.ServerDataConverter.from(inputs.IsFromLDM, OS.DataTypes.DataTypes.Boolean);
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
return new OS.Model.ModelFactory(Model, "Legacy_LDMEventsFlow.EmailTarget");
});
define("UBTConnect.Legacy_LDMEventsFlow.EmailTarget.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_LDMEventsFlow.EmailTarget.mvc$model", "UBTConnect.Legacy_LDMEventsFlow.EmailTarget.mvc$controller", "UBTConnect.clientVariables", "Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_OrbitMobile_MUIController, React, OSView, UBTConnect_Legacy_LDMEventsFlow_EmailTarget_mvc_model, UBTConnect_Legacy_LDMEventsFlow_EmailTarget_mvc_controller, UBTConnectClientVariables, Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_view, OSWidgets, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Legacy_LDMEventsFlow.EmailTarget";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Legacy_LDMEventsFlow_EmailTarget_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Legacy_LDMEventsFlow_EmailTarget_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "EmailTarget";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_view, {
inputs: {
InitialEmailSubject: model.variables.initialEmailSubjectIn,
In_HouseholdFullName: model.variables.in_HouseholdFullNameIn,
EmailTo: model.variables.emailToIn,
In_HouseholdFirstName: model.variables.in_HouseholdFirstNameIn,
ContactBusinessType: model.variables.contactBusinessTypeIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
emailSubmitted$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Email/ScreenBlock_Household_Email EmailSubmitted");
return controller.onEmailLDMEventParticipant_Handler$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
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
define("UBTConnect.Legacy_LDMEventsFlow.EmailTarget.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_OrbitMobile_MUI.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_LDMEventsFlow.EmailTarget.mvc$debugger", "UBTConnect.Legacy_LDMEventsFlow.controller", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_OrbitMobile_MUIController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_LDMEventsFlow_EmailTarget_mvc_Debugger, _flow_UBTConnect_Legacy_LDMEventsFlowController) {
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
Controller.prototype._onEmailLDMEventParticipant_Handler$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnEmailLDMEventParticipant_Handler");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2Nsyr4juRkSSpugz1hpj+A:/NRWebFlows.bf0ADFYlXEiap2+dS8MihQ/NodesShownInESpaceTree.HubI1zegfEGtKspViEktdA/ClientActions.2Nsyr4juRkSSpugz1hpj+A:sMpVUGuj6LLLJk0qR3xIaw", "UBTConnect", "OnEmailLDMEventParticipant_Handler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KWJ1Kqd12UCxpJ2MuiPe_A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TUz8F5DG90u+3oGrS8qvcw", callContext.id) && model.variables.isFromLDMIn)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3psHshtX+UmsAmP2RtIUlA", callContext.id);
// Execute Action: AddAuditEventDetailEvent
model.flush();
return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(((model.variables.emailHostIn) ? (UBTConnectModel.staticEntities.applicationEvents_LDM.myTimelineHostEmailed) : (UBTConnectModel.staticEntities.applicationEvents_LDM.myTimelineGuessEmailed)), OS.DataTypes.LongInteger.defaultValue, "", model.variables.eventDateIn, model.variables.eventLocalityIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rsz3ClhFokibigG10_6OaQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rsz3ClhFokibigG10_6OaQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2Nsyr4juRkSSpugz1hpj+A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2Nsyr4juRkSSpugz1hpj+A", callContext.id);
throw ex;

});
};

Controller.prototype.onEmailLDMEventParticipant_Handler$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onEmailLDMEventParticipant_Handler$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:bf0ADFYlXEiap2+dS8MihQ:/NRWebFlows.bf0ADFYlXEiap2+dS8MihQ:UReJ9zKsyyvf_9ZmiPZUbQ", "UBTConnect", "Legacy_LDMEventsFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HubI1zegfEGtKspViEktdA:/NRWebFlows.bf0ADFYlXEiap2+dS8MihQ/NodesShownInESpaceTree.HubI1zegfEGtKspViEktdA:ehcMVldaItStND9zl6Qclw", "UBTConnect", "EmailTarget", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HubI1zegfEGtKspViEktdA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:bf0ADFYlXEiap2+dS8MihQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_Legacy_LDMEventsFlowController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Legacy_LDMEventsFlow.EmailTarget.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"lRGuLJ_lK0Wi5e2XjqjjLQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdFirstNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1o4S8rZD5kaiXBA8HkXg1Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdFullNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"F2Abniaa5ESNE3H429+FsA": {
getter: function (varBag, idService) {
return varBag.model.variables.emailToIn;
},
dataType: OS.DataTypes.DataTypes.Email
},
"fd_UKN71y0iBHeIO5vblWw": {
getter: function (varBag, idService) {
return varBag.model.variables.contactBusinessTypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EXugioM+70aVc1y5in47Tg": {
getter: function (varBag, idService) {
return varBag.model.variables.initialEmailSubjectIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OrIMoRRbTE2+EZgCuq9MtQ": {
getter: function (varBag, idService) {
return varBag.model.variables.emailHostIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SRp_u4VgB0q3w6YqOWwloQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isFromLDMIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ARM9lNjnRkKwjr93Ykv6HA": {
getter: function (varBag, idService) {
return varBag.model.variables.eventDateIn;
},
dataType: OS.DataTypes.DataTypes.Date
},
"oXBw53l7z0STirMGZNNllA": {
getter: function (varBag, idService) {
return varBag.model.variables.eventLocalityIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LSFyGDDqVEiPmEW5kbDMjw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"Ex7PFYwXZUCky3yJBzSmCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"tT+vl1GeGk6e1yqe4N8mgw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
