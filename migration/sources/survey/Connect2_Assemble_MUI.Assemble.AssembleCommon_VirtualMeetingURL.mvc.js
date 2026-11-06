define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "NavigationHandler.controller", "Connect2_LegacyShared.controller", "Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row.mvc$model", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$model", "NavigationHandler.controller$ConfirmAction", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$OpenExternalURL"], function (OutSystems, Connect2_Assemble_MUIModel, NavigationHandlerController, Connect2_LegacySharedController, Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvcModel, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("VirtualMeetingPlatform", "virtualMeetingPlatformIn", "VirtualMeetingPlatform", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_virtualMeetingPlatformInDataFetchStatus", "_virtualMeetingPlatformInDataFetchStatus", "_virtualMeetingPlatformInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("VirtualMeetingURL", "virtualMeetingURLIn", "VirtualMeetingURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_virtualMeetingURLInDataFetchStatus", "_virtualMeetingURLInDataFetchStatus", "_virtualMeetingURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("VirtualMeetingId", "virtualMeetingIdIn", "VirtualMeetingId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_virtualMeetingIdInDataFetchStatus", "_virtualMeetingIdInDataFetchStatus", "_virtualMeetingIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("VirtualMeetingPassword", "virtualMeetingPasswordIn", "VirtualMeetingPassword", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_virtualMeetingPasswordInDataFetchStatus", "_virtualMeetingPasswordInDataFetchStatus", "_virtualMeetingPasswordInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvcModel.hasValidationWidgets || NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel.hasValidationWidgets) || Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("VirtualMeetingPlatform" in inputs) {
this.variables.virtualMeetingPlatformIn = inputs.VirtualMeetingPlatform;
if("_virtualMeetingPlatformInDataFetchStatus" in inputs) {
this.variables._virtualMeetingPlatformInDataFetchStatus = inputs._virtualMeetingPlatformInDataFetchStatus;
}

}

if("VirtualMeetingURL" in inputs) {
this.variables.virtualMeetingURLIn = inputs.VirtualMeetingURL;
if("_virtualMeetingURLInDataFetchStatus" in inputs) {
this.variables._virtualMeetingURLInDataFetchStatus = inputs._virtualMeetingURLInDataFetchStatus;
}

}

if("VirtualMeetingId" in inputs) {
this.variables.virtualMeetingIdIn = inputs.VirtualMeetingId;
if("_virtualMeetingIdInDataFetchStatus" in inputs) {
this.variables._virtualMeetingIdInDataFetchStatus = inputs._virtualMeetingIdInDataFetchStatus;
}

}

if("VirtualMeetingPassword" in inputs) {
this.variables.virtualMeetingPasswordIn = inputs.VirtualMeetingPassword;
if("_virtualMeetingPasswordInDataFetchStatus" in inputs) {
this.variables._virtualMeetingPasswordInDataFetchStatus = inputs._virtualMeetingPasswordInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Assemble.AssembleCommon_VirtualMeetingURL");
});
define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "NavigationHandler.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$controller", "OutSystems/ReactWidgets/Main", "Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row.mvc$view", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$view", "NavigationHandler.controller$ConfirmAction", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$OpenExternalURL"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, NavigationHandlerController, Connect2_LegacySharedController, React, OSView, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_model, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_controller, OSWidgets, Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_view) {
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
        View.displayName = "Assemble.AssembleCommon_VirtualMeetingURL";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_controller;
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
style: "font-regular",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, {
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Icon_Left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon connect-icon-video-camera",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: "display-inline inline",
value: model.getCachedValue(idService.getId("JnkQ6oY7mkaSDatMqo1eGw.Value"), function () {
return (((model.variables.virtualMeetingURLIn === "")) ? ("Link is not available, refer to local signal chat") : ((("Join with " + model.variables.virtualMeetingPlatformIn) + ": ")));
}, function () {
return model.variables.virtualMeetingURLIn;
}, function () {
return model.variables.virtualMeetingPlatformIn;
}),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingURLInDataFetchStatus, model.variables._virtualMeetingPlatformInDataFetchStatus)
}), $if(((model.variables.virtualMeetingURLIn) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
target: "_blank"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleCommon_VirtualMeetingURL/Link_VirtualAddress OnClick");
controller.linkVirtualAddressOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
name: "Link_VirtualAddress"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "break-word font-regular",
value: "[Tap here]",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
}),
placeholder_Icon_Right: new PlaceholderContent(function () {
return [$if(((((model.variables.virtualMeetingURLIn) !== ("")) || ((model.variables.virtualMeetingIdIn) !== (""))) || ((model.variables.virtualMeetingPasswordIn) !== (""))), false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleCommon_VirtualMeetingURL/Link OnClick");
return controller.meetingInfo_Toggle$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "info-circle",
iconSize: /*FontSize*/ 0,
style: "icon connect-icon-info-fill margin-right-none margin-left-auto line-height-1 text-neutral-6 font-size-base",
visible: true,
_idProps: {
service: idService,
name: "Icon_VirtualMeetingInfo"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.virtualMeetingPasswordIn), asPrimitiveValue(model.variables.virtualMeetingIdIn), asPrimitiveValue(model.variables._virtualMeetingPasswordInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingIdInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingPlatformInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingURLInDataFetchStatus), asPrimitiveValue(model.variables.virtualMeetingPlatformIn), asPrimitiveValue(model.variables.virtualMeetingURLIn)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "backwards-compatibility assemble-meeting-info-popup",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, {
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
name: "MeetingInfo",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
dialogHeader: PlaceholderContent.Empty,
dialogBody: new PlaceholderContent(function () {
return [React.createElement(Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_view, {
inputs: {
VirtualMeetingLink: model.variables.virtualMeetingURLIn,
_virtualMeetingLinkInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingURLInDataFetchStatus),
VirtualMeetingId: model.variables.virtualMeetingIdIn,
_virtualMeetingIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingIdInDataFetchStatus),
VirtualMeetingPassword: model.variables.virtualMeetingPasswordIn,
_virtualMeetingPasswordInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingPasswordInDataFetchStatus)
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
uuid: "10",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
buttonLabel_Confirm: PlaceholderContent.Empty,
buttonLabel_Dismiss: new PlaceholderContent(function () {
return ["Close"];
})
},
_dependencies: [asPrimitiveValue(model.variables.virtualMeetingPasswordIn), asPrimitiveValue(model.variables.virtualMeetingIdIn), asPrimitiveValue(model.variables._virtualMeetingPasswordInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingIdInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingURLInDataFetchStatus), asPrimitiveValue(model.variables.virtualMeetingURLIn)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "NavigationHandler.controller", "Connect2_LegacyShared.controller", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$debugger", "NavigationHandler.controller$ConfirmAction", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$OpenExternalURL"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, NavigationHandlerController, Connect2_LegacySharedController, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_Debugger) {
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
Controller.prototype._meetingInfo_Toggle$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("MeetingInfo_Toggle");
callContext = controller.callContext(callContext);
var confirmActionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.confirmActionVar = confirmActionVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:4FiBePUaoUeDZ0vuz8suDg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.C52WXMg9fUWxiqIIp7iPYg/ClientActions.4FiBePUaoUeDZ0vuz8suDg:_q_xu79LXpj6O1rKvr7ptQ", "Connect2_Assemble_MUI", "MeetingInfo_Toggle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:hI8FSLdF3UOL3+E335BO2A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:mC35ifKZJkm6xLzQ2M5Mgg", callContext.id);
// Execute Action: ConfirmAction
model.flush();
return NavigationHandlerController.default.confirmAction$Action(idService.getId("MeetingInfo"), callContext).then(function (value) {
confirmActionVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:D42rDbvRUkG9vByN0M26jQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:4FiBePUaoUeDZ0vuz8suDg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:4FiBePUaoUeDZ0vuz8suDg", callContext.id);
throw ex;

});
};
Controller.prototype._linkVirtualAddressOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("LinkVirtualAddressOnClick");
callContext = controller.callContext(callContext);
var checkSupportedBrowserVersionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkSupportedBrowserVersionVar = checkSupportedBrowserVersionVar;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:1eRR584yLEOimdTp6yKLgw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.C52WXMg9fUWxiqIIp7iPYg/ClientActions.1eRR584yLEOimdTp6yKLgw:ldtlyeGfzuYYWIHPpBY9JQ", "Connect2_Assemble_MUI", "LinkVirtualAddressOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:0VBYAXN2eUaUA6Pdjf_XBg", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:0oIhxum4x0a6QdwWp+DDUg", callContext.id);
// Execute Action: CheckSupportedBrowserVersion
checkSupportedBrowserVersionVar.value = Connect2_LegacySharedController.default.checkSupportedBrowserVersion$Action(callContext);

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Bvk60K8NCkO_CY1KrGb55w", callContext.id);
// Execute Action: OpenExternalURL
Connect2_LegacySharedController.default.openExternalURL$Action(model.variables.virtualMeetingURLIn, checkSupportedBrowserVersionVar.value.isAppleOut, callContext);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:NWCLXecAOUCRfgAaMAJ2QQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:1eRR584yLEOimdTp6yKLgw", callContext.id);
}

};

Controller.prototype.meetingInfo_Toggle$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._meetingInfo_Toggle$Action, callContext);

};
Controller.prototype.linkVirtualAddressOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._linkVirtualAddressOnClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:C52WXMg9fUWxiqIIp7iPYg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.C52WXMg9fUWxiqIIp7iPYg:m0rYxDqq8yYCAbb3ZM7JBw", "Connect2_Assemble_MUI", "AssembleCommon_VirtualMeetingURL", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:C52WXMg9fUWxiqIIp7iPYg", callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA", callContext.id);
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
return Connect2_Assemble_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_Assemble_MUILanguageResources);
});

define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"mC35ifKZJkm6xLzQ2M5Mgg": {
getter: function (varBag, idService) {
return varBag.confirmActionVar.value;
}
},
"0oIhxum4x0a6QdwWp+DDUg": {
getter: function (varBag, idService) {
return varBag.checkSupportedBrowserVersionVar.value;
}
},
"6dyxd1p1nEqi3DRAYoxyEw": {
getter: function (varBag, idService) {
return varBag.model.variables.virtualMeetingPlatformIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FKreku0vvkuC_GoxKxSyTA": {
getter: function (varBag, idService) {
return varBag.model.variables.virtualMeetingURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rXxSZ4oaC0qc1nLNeTMLKg": {
getter: function (varBag, idService) {
return varBag.model.variables.virtualMeetingIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ly+hpsSMJUGXBT_6TqHzMw": {
getter: function (varBag, idService) {
return varBag.model.variables.virtualMeetingPasswordIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"g+QBqtPvAUm_ebc_2KMVCA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon_Left"));
})(varBag.model, idService);
}
},
"9H9uMkdFWE6RGaXSWrN8Xg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"9BiokZDQwUy_NA2ZhIwKuA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Link_VirtualAddress"));
})(varBag.model, idService);
}
},
"nQyj5JHuH0qji7HJjIE8CA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon_Right"));
})(varBag.model, idService);
}
},
"9yFXPdD6zUqTT1ShYR6mYA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon_VirtualMeetingInfo"));
})(varBag.model, idService);
}
},
"Up2zL4e2Jku7odOaCtX_4Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MeetingInfo"));
})(varBag.model, idService);
}
},
"eaVRGtKm9ka5xUcpuAiu9A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogHeader"));
})(varBag.model, idService);
}
},
"d1c_fQkdl0q1o0MRGlPDag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogBody"));
})(varBag.model, idService);
}
},
"LWliJib8okGloHXuisNz3g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
})(varBag.model, idService);
}
},
"l5U3j0u29k+S2LGbCl631A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
