define("UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect.App_Common.UnsupportedVersion_Native.mvc$model", "UBTConnect.App_Common.UnsupportedVersion_WebView.mvc$model", "UBTConnect.App_Common.UnsupportedVersion_Browser.mvc$model", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$Get_IsUnsupportedVersion"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_App_Common_UnsupportedVersion_Native_mvcModel, UBTConnect_App_Common_UnsupportedVersion_WebView_mvcModel, UBTConnect_App_Common_UnsupportedVersion_Browser_mvcModel, NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_IsUnsupportedWebViewVersion", "in_IsUnsupportedWebViewVersionVar", "In_IsUnsupportedWebViewVersion", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_IsUnsupportedAppVersion", "in_IsUnsupportedAppVersionVar", "In_IsUnsupportedAppVersion", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_IsUnsupportedBrowserVersion", "in_IsUnsupportedBrowserVersionVar", "In_IsUnsupportedBrowserVersion", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
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
Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnect_App_Common_UnsupportedVersion_Native_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_UnsupportedVersion_WebView_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_UnsupportedVersion_Browser_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Common.UnsupportedVersion_Wrapper");
});
define("UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc$model", "UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.UnsupportedVersion_Native.mvc$view", "UBTConnect.App_Common.UnsupportedVersion_WebView.mvc$view", "UBTConnect.App_Common.UnsupportedVersion_Browser.mvc$view", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$Get_IsUnsupportedVersion"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvc_model, UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnect_App_Common_UnsupportedVersion_Native_mvc_view, UBTConnect_App_Common_UnsupportedVersion_WebView_mvc_view, UBTConnect_App_Common_UnsupportedVersion_Browser_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view) {
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
        View.displayName = "App_Common.UnsupportedVersion_Wrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_App_Common_UnsupportedVersion_Native_mvc_view, UBTConnect_App_Common_UnsupportedVersion_WebView_mvc_view, UBTConnect_App_Common_UnsupportedVersion_Browser_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.in_IsUnsupportedAppVersionVar || model.variables.in_IsUnsupportedBrowserVersionVar), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Dn3ctvLmaUqqZy5fe3bsQw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraLarge;
return rec;
}();
return rec;
}();
})
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
content: new PlaceholderContent(function () {
return [$if(model.variables.in_IsUnsupportedAppVersionVar, false, this, function () {
return [React.createElement(UBTConnect_App_Common_UnsupportedVersion_Native_mvc_view, {
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
}, function () {
return [$if(model.variables.in_IsUnsupportedWebViewVersionVar, false, this, function () {
return [React.createElement(UBTConnect_App_Common_UnsupportedVersion_WebView_mvc_view, {
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
}, function () {
return [React.createElement(UBTConnect_App_Common_UnsupportedVersion_Browser_mvc_view, {
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_IsUnsupportedWebViewVersionVar), asPrimitiveValue(model.variables.in_IsUnsupportedAppVersionVar)]
}), React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$Get_IsUnsupportedVersion"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvc_Debugger) {
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
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
var get_IsUnsupportedVersionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.get_IsUnsupportedVersionVar = get_IsUnsupportedVersionVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9ZxscINnukC0uICUo0ciIA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.iUjRf6a8f0ixwM1LlzaolQ/ClientActions.9ZxscINnukC0uICUo0ciIA:w8Ro1_PuuT5D8PZBMPQ7nA", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EXnx3RarRkqDODcOsU8cEg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Di8vGDV2T02g3_MfkU9AEA", callContext.id);
// Execute Action: Get_IsUnsupportedVersion
get_IsUnsupportedVersionVar.value = UBTConnectController.default.get_IsUnsupportedVersion$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d0T8s7OSHUqU6KisvPNc6Q", callContext.id);
// In_IsUnsupportedWebViewVersion = Get_IsUnsupportedVersion.Out_IsUnsupportedWebViewVersion
model.variables.in_IsUnsupportedWebViewVersionVar = get_IsUnsupportedVersionVar.value.out_IsUnsupportedWebViewVersionOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d0T8s7OSHUqU6KisvPNc6Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// In_IsUnsupportedAppVersion = Get_IsUnsupportedVersion.Out_IsUnsupportedAppVersion
model.variables.in_IsUnsupportedAppVersionVar = get_IsUnsupportedVersionVar.value.out_IsUnsupportedAppVersionOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d0T8s7OSHUqU6KisvPNc6Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// In_IsUnsupportedBrowserVersion = Get_IsUnsupportedVersion.Out_IsUnsupportedBrowserVersion
model.variables.in_IsUnsupportedBrowserVersionVar = get_IsUnsupportedVersionVar.value.out_IsUnsupportedBrowserVersionOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EAbO2AxR9kOVfIe1WD5fnw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9ZxscINnukC0uICUo0ciIA", callContext.id);
}

};

Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:mJCG955vpb2MtUitKU2aNA", "UBTConnect", "App_Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:iUjRf6a8f0ixwM1LlzaolQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.iUjRf6a8f0ixwM1LlzaolQ:d8nACsGAK4VNvBeZ5zMcoQ", "UBTConnect", "UnsupportedVersion_Wrapper", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:iUjRf6a8f0ixwM1LlzaolQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_Common/UnsupportedVersion_Wrapper On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

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

define("UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Di8vGDV2T02g3_MfkU9AEA": {
getter: function (varBag, idService) {
return varBag.get_IsUnsupportedVersionVar.value;
}
},
"ASFztryRqk6OyOJY3RQLOg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsUnsupportedWebViewVersionVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"3gmHZLDvvUKGOGuNvTjaDw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsUnsupportedAppVersionVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Zpjeb9GzIE6AsNnRQUNIow": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsUnsupportedBrowserVersionVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Gv_EJ4MuKESPCDig8UtiQQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsUnsupported"));
})(varBag.model, idService);
}
},
"T7splmjPVUODU2QKDb43Iw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"GMxQ50F4a0yRFPirXZ8+7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsUnsupportedApp"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
