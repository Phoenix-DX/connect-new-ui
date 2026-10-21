define("UBTConnect.Calendar.MyEntertaining_Embedded.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.controller$OpenInApp_OpenExternalLink", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, UBTJavaScriptUtilsController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("PreloadedSource", "preloadedSourceVar", "PreloadedSource", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("In_InitialEventSouceId", "in_InitialEventSouceIdIn", "In_InitialEventSouceId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_InitialEventSouceIdInDataFetchStatus", "_in_InitialEventSouceIdInDataFetchStatus", "_in_InitialEventSouceIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_InitialEventSouceId" in inputs) {
this.variables.in_InitialEventSouceIdIn = inputs.In_InitialEventSouceId;
if("_in_InitialEventSouceIdInDataFetchStatus" in inputs) {
this.variables._in_InitialEventSouceIdInDataFetchStatus = inputs._in_InitialEventSouceIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Calendar.MyEntertaining_Embedded");
});
define("UBTConnect.Calendar.MyEntertaining_Embedded.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Calendar.MyEntertaining_Embedded.mvc$model", "UBTConnect.Calendar.MyEntertaining_Embedded.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.controller$OpenInApp_OpenExternalLink", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTJavaScriptUtilsController, React, OSView, UBTConnect_Calendar_MyEntertaining_Embedded_mvc_model, UBTConnect_Calendar_MyEntertaining_Embedded_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Calendar.MyEntertaining_Embedded";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Calendar_MyEntertaining_Embedded_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Calendar_MyEntertaining_Embedded_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, {
inputs: {
In_IsPrimaryColor: true
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
placeholder_Header_Title: new PlaceholderContent(function () {
return ["My Entertaining"];
}),
placeholder_Header_Right: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_view, {
inputs: {
B2CTenant: UBTConnectClientVariables.getEmbedd_B2CTenant(),
Sources: model.variables.preloadedSourceVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onError$Action: function (messageIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Blocks2/Embedded_MyEntertaining OnError");
controller.handle_Error$Action(messageIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onOpenMap$Action: function (latIn, lngIn, labelIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Blocks2/Embedded_MyEntertaining OnOpenMap");
controller.handle_OpenMap$Action(latIn, lngIn, labelIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
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
bottom: PlaceholderContent.Empty,
placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.preloadedSourceVar), asPrimitiveValue(UBTConnectClientVariables.getEmbedd_B2CTenant())]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Calendar.MyEntertaining_Embedded.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Calendar.MyEntertaining_Embedded.mvc$debugger", "UBTConnect_Utils.controller$OpenInApp_OpenExternalLink", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTJavaScriptUtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Calendar_MyEntertaining_Embedded_mvc_Debugger) {
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QlTUQYzMG0CMr05DOPxvtw:/NRWebFlows.FzAHH4EQ0kOcszHAaF2leA/NodesShownInESpaceTree.mfdgb9zZD06H67FaALfLeA/ClientActions.QlTUQYzMG0CMr05DOPxvtw:VJF4moOkT8R3FE5YJUd2kg", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZeMynFR_ik6ADzXcOvVNqw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IhrR1lpl+ESAbLtdQ5JpeA", callContext.id) && (model.variables.in_InitialEventSouceIdIn === UBTConnectModel.staticEntities.type_MyCalendarEventSource.orbit))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vZv3CL60skSxO2FnkbUZwg", callContext.id);
// PreloadedSource = "orbit"
model.variables.preloadedSourceVar = "orbit";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4ueURPdzzkK6+p5yUH91vw", callContext.id);
} else {
if((model.variables.in_InitialEventSouceIdIn === UBTConnectModel.staticEntities.type_MyCalendarEventSource.lDM)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZxCwo6cTRk+w3kvgLR32Dw", callContext.id);
// PreloadedSource = "ldm"
model.variables.preloadedSourceVar = "ldm";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4ueURPdzzkK6+p5yUH91vw", callContext.id);
} else {
if((model.variables.in_InitialEventSouceIdIn === UBTConnectModel.staticEntities.type_MyCalendarEventSource.assemble)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rNDcf0ruCkyJCx0uJ8x4wA", callContext.id);
// PreloadedSource = "assemble"
model.variables.preloadedSourceVar = "assemble";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4ueURPdzzkK6+p5yUH91vw", callContext.id);
} else {
if((model.variables.in_InitialEventSouceIdIn === UBTConnectModel.staticEntities.type_MyCalendarEventSource.userCreated)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UUimbd77j06bBaOtgtdG9Q", callContext.id);
// PreloadedSource = "personal"
model.variables.preloadedSourceVar = "personal";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4ueURPdzzkK6+p5yUH91vw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tKCIbCokx0GuLUxzMIReYg", callContext.id);
}

}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QlTUQYzMG0CMr05DOPxvtw", callContext.id);
}

};
Controller.prototype._handle_OpenMap$Action = function (latIn, lngIn, labelIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handle_OpenMap");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Calendar.MyEntertaining_Embedded.Handle_OpenMap$vars"))());
vars.value.latInLocal = latIn;
vars.value.lngInLocal = lngIn;
vars.value.labelInLocal = labelIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OiBQcoM4_0yQin2rZQ_bGA:/NRWebFlows.FzAHH4EQ0kOcszHAaF2leA/NodesShownInESpaceTree.mfdgb9zZD06H67FaALfLeA/ClientActions.OiBQcoM4_0yQin2rZQ_bGA:B9BzpVpxQDV3SZVcnYQ7TQ", "UBTConnect", "Handle_OpenMap", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:35W7OU2fcUmUQoO0fr1v2w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z9xo8+XARUWnO49awbXS3Q", callContext.id);
// Execute Action: OpenInApp_OpenExternalLink
UBTConnect_UtilsController.default.openInApp_OpenExternalLink$Action(((("https://www.google.com/maps/search/?api=1&query=" + vars.value.latInLocal) + ",") + vars.value.lngInLocal), true, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sHnod1A80kKnKBQFOcL9ng", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OiBQcoM4_0yQin2rZQ_bGA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Calendar.MyEntertaining_Embedded.Handle_OpenMap$vars", [{
name: "Lat",
attrName: "latInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Lng",
attrName: "lngInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Label",
attrName: "labelInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handle_Error$Action = function (messageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handle_Error");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Calendar.MyEntertaining_Embedded.Handle_Error$vars"))());
vars.value.messageInLocal = messageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:c+hslrXJqUmN9DOSn83zRg:/NRWebFlows.FzAHH4EQ0kOcszHAaF2leA/NodesShownInESpaceTree.mfdgb9zZD06H67FaALfLeA/ClientActions.c+hslrXJqUmN9DOSn83zRg:oLrCeBz+z++f8RfkJ9yX+w", "UBTConnect", "Handle_Error", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j+h3j18fvkemBUAhhprrHg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oe4htf1gRU2JjaD6FReKdw", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", vars.value.messageInLocal, UBTConnectModel.staticEntities.uBT_MessageType.info, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:daUMVSQ2_kuFxxbSksBPHA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:c+hslrXJqUmN9DOSn83zRg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Calendar.MyEntertaining_Embedded.Handle_Error$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.handle_OpenMap$Action = function (latIn, lngIn, labelIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handle_OpenMap$Action, callContext, latIn, lngIn, labelIn);

};
Controller.prototype.handle_Error$Action = function (messageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handle_Error$Action, callContext, messageIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FzAHH4EQ0kOcszHAaF2leA:/NRWebFlows.FzAHH4EQ0kOcszHAaF2leA:bxsuxVZ1+m7B3f0Wz9IOSw", "UBTConnect", "Calendar", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:mfdgb9zZD06H67FaALfLeA:/NRWebFlows.FzAHH4EQ0kOcszHAaF2leA/NodesShownInESpaceTree.mfdgb9zZD06H67FaALfLeA:rse0bOgpxXJ_9ZRoN4OTlA", "UBTConnect", "MyEntertaining_Embedded", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:mfdgb9zZD06H67FaALfLeA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FzAHH4EQ0kOcszHAaF2leA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Calendar/MyEntertaining_Embedded On Initialize");
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Calendar.MyEntertaining_Embedded.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"dOpwbssFh0eZ0o1s0Syq8g": {
getter: function (varBag, idService) {
return varBag.vars.value.latInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PapVeyJ3eEqF3UtwRtagmw": {
getter: function (varBag, idService) {
return varBag.vars.value.lngInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Zd8uMg1sxkyMUiZB9Dcvdg": {
getter: function (varBag, idService) {
return varBag.vars.value.labelInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8Q3mJ9AsS0eIiUtLN4oi2A": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bDICS+eUh0ST2OGO6Uuljg": {
getter: function (varBag, idService) {
return varBag.model.variables.preloadedSourceVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VfywsVrRHE2PkROk6xSDEg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_InitialEventSouceIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"g8ygBcCKR0miFAAaE80F6w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"4zMtcO4ieES8PwdSwZrQyw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"UuemjWBfJ0m2hFv5iImPOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"e40fSHqiukmFEMnpk5X04w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"_jT4EREJ3kuouHTfc3AAHQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"4zAa3b+jckOR7VEoFT9gzA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
