define("UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc$model", "UBTConnect_Utils.model$ExternalAppPackageNameRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "UBTConnect_Utils.model$ContactByMessagePopupDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData"], function (OutSystems, UBTConnect_UtilsModel, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsWhatsAppAvailable", "isWhatsAppAvailableVar", "IsWhatsAppAvailable", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsSignalAvailable", "isSignalAvailableVar", "IsSignalAvailable", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("SignalBaseURI", "signalBaseURIVar", "SignalBaseURI", true, false, OS.DataTypes.DataTypes.Text, function () {
return "sgnl://signal.me/#p/";
}, false), 
this.attr("WhatsAppBaseURI", "whatsAppBaseURIVar", "WhatsAppBaseURI", true, false, OS.DataTypes.DataTypes.Text, function () {
return "whatsapp://send?phone=";
}, false), 
this.attr("ExternalAppPackageName", "externalAppPackageNameVar", "ExternalAppPackageName", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ExternalAppPackageNameRec());
}, false, UBTConnect_UtilsModel.ExternalAppPackageNameRec), 
this.attr("In_ContactPopupData", "in_ContactPopupDataIn", "In_ContactPopupData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec());
}, false, UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec), 
this.attr("_in_ContactPopupDataInDataFetchStatus", "_in_ContactPopupDataInDataFetchStatus", "_in_ContactPopupDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_ContactPopupData" in inputs) {
this.variables.in_ContactPopupDataIn = inputs.In_ContactPopupData;
if("_in_ContactPopupDataInDataFetchStatus" in inputs) {
this.variables._in_ContactPopupDataInDataFetchStatus = inputs._in_ContactPopupDataInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "CW_CTA_PopUps.ContactByMessage_Wrapper");
});
define("UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.model$ExternalAppPackageNameRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "UBTConnect_Utils.model$ContactByMessagePopupDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, React, OSView, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_model, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvc_view, OSWidgets) {
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
        View.displayName = "CW_CTA_PopUps.ContactByMessage_Wrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvc_view, {
inputs: {
In_ContactByMessageData: model.getCachedValue(idService.getId("3j53z1qNcEeLmcKXXMvCxQ.In_ContactByMessageData"), function () {
return function () {
var rec = new UBTConnect_UtilsModel.ContactByMessagePopupDataRec();
rec.contactPopupDataAttr = model.variables.in_ContactPopupDataIn.contactPopupDataAttr;
rec.showEmailAttr = ((model.variables.in_ContactPopupDataIn.emailAttr) !== (""));
rec.showWhatsappAttr = ((((model.variables.in_ContactPopupDataIn.phoneAttr) !== ("")) && model.variables.isWhatsAppAvailableVar) && !(model.variables.in_ContactPopupDataIn.isComboEmailAndPhoneAttr));
rec.showSignalAttr = ((((model.variables.in_ContactPopupDataIn.phoneAttr) !== ("")) && model.variables.isSignalAvailableVar) && !(model.variables.in_ContactPopupDataIn.isComboEmailAndPhoneAttr));
rec.showCallAttr = (model.variables.in_ContactPopupDataIn.isComboEmailAndPhoneAttr && ((model.variables.in_ContactPopupDataIn.phoneAttr) !== ("")));
return rec;
}();
}, function () {
return model.variables.in_ContactPopupDataIn.contactPopupDataAttr;
}, function () {
return model.variables.in_ContactPopupDataIn.emailAttr;
}, function () {
return model.variables.in_ContactPopupDataIn.phoneAttr;
}, function () {
return model.variables.isWhatsAppAvailableVar;
}, function () {
return model.variables.in_ContactPopupDataIn.isComboEmailAndPhoneAttr;
}, function () {
return model.variables.isSignalAvailableVar;
}),
_in_ContactByMessageDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_SelectedMessageChannel$Action: function (event_MessageChannelIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup_ByMessage Event_SelectedMessageChannel");
return controller.handler_SelectedMessageChannel$Action(event_MessageChannelIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_Cancel$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup_ByMessage Event_Cancel");
return controller.handler_Cancel$Action(controller.callContext(eventHandlerContext));
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
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$debugger", "UBTConnect_Utils.model$ExternalAppPackageNameRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "UBTConnect_Utils.model$ContactByMessagePopupDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_Debugger) {
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
Controller.prototype._screenEvent_OnReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnReady");
callContext = controller.callContext(callContext);
var canLaunchWithData_WhatsAppVar = new OS.DataTypes.VariableHolder();
var checkAppLauncherPluginVar = new OS.DataTypes.VariableHolder();
var canLaunchWithData_SignalVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.canLaunchWithData_WhatsAppVar = canLaunchWithData_WhatsAppVar;
varBag.checkAppLauncherPluginVar = checkAppLauncherPluginVar;
varBag.canLaunchWithData_SignalVar = canLaunchWithData_SignalVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:TSHCOZe+o0Cyo98NFt3E+w:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.1NfE0J8X8EO9f4A_MCVIRA/ClientActions.TSHCOZe+o0Cyo98NFt3E+w:a49zjnQ_1rtlLSisLG1sww", "UBTConnect_Utils", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:XhYWIk8e30+vtSWWbOM7CQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:v3FsRsElQkWfV2L9H+OljQ", callContext.id);
// Execute Action: CheckAppLauncherPlugin
checkAppLauncherPluginVar.value = Connect2_AppLauncherPluginController.default.checkAppLauncherPlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1D0dww5pMkunRpXnWxb5wg", callContext.id) && checkAppLauncherPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lvV+RBVSnUS9DLWYFsIExQ", callContext.id);
// Execute Action: CanLaunchWithData_WhatsApp
model.flush();
return Connect2_AppLauncherPluginController.default.canLaunchWithData$Action(function () {
var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
rec.packageNameAttr = model.variables.externalAppPackageNameVar.whatsappAttr;
return rec;
}(), callContext).then(function (value) {
canLaunchWithData_WhatsAppVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xQ3BrddkdUql2mqUodILxA", callContext.id);
// Execute Action: CanLaunchWithData_Signal
model.flush();
return Connect2_AppLauncherPluginController.default.canLaunchWithData$Action(function () {
var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
rec.packageNameAttr = model.variables.externalAppPackageNameVar.signalAttr;
return rec;
}(), callContext).then(function (value) {
canLaunchWithData_SignalVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uyuz7FtE_0O5rtvaQI7nnQ", callContext.id);
// IsWhatsAppAvailable = CanLaunchWithData_WhatsApp.Success
model.variables.isWhatsAppAvailableVar = canLaunchWithData_WhatsAppVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uyuz7FtE_0O5rtvaQI7nnQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsSignalAvailable = CanLaunchWithData_Signal.Success
model.variables.isSignalAvailableVar = canLaunchWithData_SignalVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1R63to97HEiD_iiYVXc__w", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1dwhaN8i3Eyrh+gaEqiq3A", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:TSHCOZe+o0Cyo98NFt3E+w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:TSHCOZe+o0Cyo98NFt3E+w", callContext.id);
throw ex;

});
};
Controller.prototype._handler_SelectedMessageChannel$Action = function (event_MessageChannelIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SelectedMessageChannel");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.Handler_SelectedMessageChannel$vars"))());
vars.value.event_MessageChannelIdInLocal = event_MessageChannelIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:8vaulHZZKkCFlE92QHq40w:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.1NfE0J8X8EO9f4A_MCVIRA/ClientActions.8vaulHZZKkCFlE92QHq40w:D0X_E7Mpym7fasG2hMS7Qw", "UBTConnect_Utils", "Handler_SelectedMessageChannel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:SDjaiuZ7okKb8WlyAbUxDw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QBkn4Mfik0y3Xb6AZUW00w", callContext.id) && (vars.value.event_MessageChannelIdInLocal === UBTConnect_UtilsModel.staticEntities.type_MessageChannel.email))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uWWE_R2ynE+abZgCP6APxA", callContext.id);
// Trigger Event: Event_Email
return controller.event_Email$Action(callContext);
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.event_MessageChannelIdInLocal === UBTConnect_UtilsModel.staticEntities.type_MessageChannel.whatsApp)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1NefaYsLKU+c1WFsnPyaJw", callContext.id);
// Execute Action: Action_OpenWhatsApp
return controller._action_OpenMessagingApp$Action(model.variables.externalAppPackageNameVar.whatsappAttr, model.variables.whatsAppBaseURIVar, callContext);
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.event_MessageChannelIdInLocal === UBTConnect_UtilsModel.staticEntities.type_MessageChannel.signal)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:jpc1wzuVvka3soRUzoHbPA", callContext.id);
// Execute Action: Action_OpenSignal
return controller._action_OpenMessagingApp$Action(model.variables.externalAppPackageNameVar.signalAttr, model.variables.signalBaseURIVar, callContext);
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.event_MessageChannelIdInLocal === UBTConnect_UtilsModel.staticEntities.type_MessageChannel.call)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Lbjqst39GkG9ROVLeg2udw", callContext.id);
// Trigger Event: Event_Call
return controller.event_Call$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yPf3iupjK02Kil6wVg0MLQ", callContext.id);
// Destination: /UBTConnect_Utils/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(("tel:" + model.variables.in_ContactPopupDataIn.phoneAttr), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pcFv6BolG0i_0oYSGzcB_A", callContext.id);
return OS.Flow.returnAsync();

}

});
}

});
}

});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:D+0yLCtRMUGW4kVNkSaYOA", callContext.id);
// Trigger Event: Event_MessageChannel
return controller.event_MessageChannel$Action(vars.value.event_MessageChannelIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:jnaaFZCcOEaMFXFlelZ8NQ", callContext.id);
});
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:8vaulHZZKkCFlE92QHq40w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:8vaulHZZKkCFlE92QHq40w", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.Handler_SelectedMessageChannel$vars", [{
name: "Event_MessageChannelId",
attrName: "event_MessageChannelIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_OpenMessagingApp$Action = function (action_PackageNameIn, action_BaseURIIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_OpenMessagingApp");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.Action_OpenMessagingApp$vars"))());
vars.value.action_PackageNameInLocal = action_PackageNameIn;
vars.value.action_BaseURIInLocal = action_BaseURIIn;
var launchWithDataVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.launchWithDataVar = launchWithDataVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:fXC727VC1ESHV0uInjq8Yw:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.1NfE0J8X8EO9f4A_MCVIRA/ClientActions.fXC727VC1ESHV0uInjq8Yw:a4Jg5ZkAGKeKD7c_lRCHLQ", "UBTConnect_Utils", "Action_OpenMessagingApp", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:NTn8UK84Z0SXrypF8CZ3Kw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8SFgKUDwnkeFPUnMQQ+l8A", callContext.id);
// Execute Action: LaunchWithData
model.flush();
return Connect2_AppLauncherPluginController.default.launchWithData$Action(function () {
var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
rec.packageNameAttr = vars.value.action_PackageNameInLocal;
rec.uriAttr = (vars.value.action_BaseURIInLocal + OS.BuiltinFunctions.replace(model.variables.in_ContactPopupDataIn.phoneAttr, " ", ""));
rec.subActivityAttr = false;
return rec;
}(), callContext).then(function (value) {
launchWithDataVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qqEgcg5ocE+41KsZvm1zQQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:fXC727VC1ESHV0uInjq8Yw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:fXC727VC1ESHV0uInjq8Yw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.Action_OpenMessagingApp$vars", [{
name: "Action_PackageName",
attrName: "action_PackageNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Action_BaseURI",
attrName: "action_BaseURIInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_Cancel$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_Cancel");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:b_ch4AHL_k+gb2wICUyLCw:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.1NfE0J8X8EO9f4A_MCVIRA/ClientActions.b_ch4AHL_k+gb2wICUyLCw:VJbGkJdByf5KoyxrmBwB_A", "UBTConnect_Utils", "Handler_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Hcx3hx_jD0mhw3dUppirMg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4EXZ5M9bc0a63Axw9NvJsA", callContext.id);
// Trigger Event: Event_Cancel
return controller.event_Cancel$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qbxWwEcu1UG6oyb+an_ZbA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:b_ch4AHL_k+gb2wICUyLCw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:b_ch4AHL_k+gb2wICUyLCw", callContext.id);
throw ex;

});
};

Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

};
Controller.prototype.handler_SelectedMessageChannel$Action = function (event_MessageChannelIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SelectedMessageChannel$Action, callContext, event_MessageChannelIdIn);

};
Controller.prototype.action_OpenMessagingApp$Action = function (action_PackageNameIn, action_BaseURIIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_OpenMessagingApp$Action, callContext, action_PackageNameIn, action_BaseURIIn);

};
Controller.prototype.handler_Cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_Cancel$Action, callContext);

};
Controller.prototype.event_Email$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_MessageChannel$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_Call$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_Cancel$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg:9C3kcfT08imn_yT0sR8WzQ", "UBTConnect_Utils", "CW_CTA_PopUps", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:1NfE0J8X8EO9f4A_MCVIRA:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.1NfE0J8X8EO9f4A_MCVIRA:1dB4+QYGoOi5zho5YYaDsw", "UBTConnect_Utils", "ContactByMessage_Wrapper", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:1NfE0J8X8EO9f4A_MCVIRA", callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/ContactByMessage_Wrapper On Ready");
return controller.screenEvent_OnReady$Action(callContext);

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
return UBTConnect_UtilsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"lvV+RBVSnUS9DLWYFsIExQ": {
getter: function (varBag, idService) {
return varBag.canLaunchWithData_WhatsAppVar.value;
}
},
"v3FsRsElQkWfV2L9H+OljQ": {
getter: function (varBag, idService) {
return varBag.checkAppLauncherPluginVar.value;
}
},
"xQ3BrddkdUql2mqUodILxA": {
getter: function (varBag, idService) {
return varBag.canLaunchWithData_SignalVar.value;
}
},
"Ny8euGqwUUezdt7NsT4zOg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MessageChannelIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sBuwemLFAUyj0ACGmwUtcA": {
getter: function (varBag, idService) {
return varBag.vars.value.action_PackageNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"trzYmLNbKUC+J0EPL9Jypg": {
getter: function (varBag, idService) {
return varBag.vars.value.action_BaseURIInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8SFgKUDwnkeFPUnMQQ+l8A": {
getter: function (varBag, idService) {
return varBag.launchWithDataVar.value;
}
},
"cennQb+f1EWayz1kUJR6wQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isWhatsAppAvailableVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tAsDeQ9Tlky5f9RT_J0ikw": {
getter: function (varBag, idService) {
return varBag.model.variables.isSignalAvailableVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"3ZesIla_wEuN17CuoN5wFA": {
getter: function (varBag, idService) {
return varBag.model.variables.signalBaseURIVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HLeNhqYH80eoFnjPBOcBLw": {
getter: function (varBag, idService) {
return varBag.model.variables.whatsAppBaseURIVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xhvqdakTv0qgBArKhBLnsw": {
getter: function (varBag, idService) {
return varBag.model.variables.externalAppPackageNameVar;
}
},
"PfEcwm5_0Ee2vfT9_h9zKw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ContactPopupDataIn;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
