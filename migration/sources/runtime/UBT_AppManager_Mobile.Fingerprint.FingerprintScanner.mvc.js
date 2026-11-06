define("UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$model", ["OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager.model", "UBT_AppManager_Mobile.controller", "UBTJavaScriptUtils.controller", "UBT_AppManager.controller", "UBT_AppManager.model$PIN_FingerprintReadCallback_InputRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager", "UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRec", "UBT_AppManager_Mobile.controller$Fingerprint_Read", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBT_AppManager_Mobile.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty", "UBT_AppManager_Mobile.controller$Get_Message_FingerprintUnavailable"], function (OutSystems, UBT_AppManager_MobileModel, UBT_AppManagerModel, UBT_AppManager_MobileController, UBTJavaScriptUtilsController, UBT_AppManagerController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_IsScanOnReady", "in_IsScanOnReadyIn", "In_IsScanOnReady", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsScanOnReadyInDataFetchStatus", "_in_IsScanOnReadyInDataFetchStatus", "_in_IsScanOnReadyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClass", "in_ExtendedClassIn", "In_ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Title", "in_TitleIn", "In_Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_TitleInDataFetchStatus", "_in_TitleInDataFetchStatus", "_in_TitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Subtitle", "in_SubtitleIn", "In_Subtitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SubtitleInDataFetchStatus", "_in_SubtitleInDataFetchStatus", "_in_SubtitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_IsScanOnReady" in inputs) {
this.variables.in_IsScanOnReadyIn = inputs.In_IsScanOnReady;
if("_in_IsScanOnReadyInDataFetchStatus" in inputs) {
this.variables._in_IsScanOnReadyInDataFetchStatus = inputs._in_IsScanOnReadyInDataFetchStatus;
}

}

if("In_ExtendedClass" in inputs) {
this.variables.in_ExtendedClassIn = inputs.In_ExtendedClass;
if("_in_ExtendedClassInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClassInDataFetchStatus = inputs._in_ExtendedClassInDataFetchStatus;
}

}

if("In_Title" in inputs) {
this.variables.in_TitleIn = inputs.In_Title;
if("_in_TitleInDataFetchStatus" in inputs) {
this.variables._in_TitleInDataFetchStatus = inputs._in_TitleInDataFetchStatus;
}

}

if("In_Subtitle" in inputs) {
this.variables.in_SubtitleIn = inputs.In_Subtitle;
if("_in_SubtitleInDataFetchStatus" in inputs) {
this.variables._in_SubtitleInDataFetchStatus = inputs._in_SubtitleInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Fingerprint.FingerprintScanner");
});
define("UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$view", ["OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "UBT_AppManager.model", "UBTJavaScriptUtils.controller", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$model", "UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$controller", "OutSystems/ReactWidgets/Main", "UBT_AppManager.model$PIN_FingerprintReadCallback_InputRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager", "UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRec", "UBT_AppManager_Mobile.controller$Fingerprint_Read", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBT_AppManager_Mobile.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty", "UBT_AppManager_Mobile.controller$Get_Message_FingerprintUnavailable"], function (OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, UBT_AppManagerModel, UBTJavaScriptUtilsController, UBT_AppManagerController, React, OSView, UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_model, UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_controller, OSWidgets) {
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
        View.displayName = "Fingerprint.FingerprintScanner";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Fingerprint/FingerprintScanner/Button OnClick");
return controller.readFingerprint$Action(false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: ("btn ubt-pincode__button-fingerprint " + model.variables.in_ExtendedClassIn),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "UBT_AppManager.model", "UBTJavaScriptUtils.controller", "UBT_AppManager.controller", "UBT_AppManager_Mobile.languageResources", "UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$debugger", "UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$controller.OnReady.IsViewRestoredFromCacheJS", "UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$controller.OnReady.ReadFingerprintDelayedJS", "UBT_AppManager.model$PIN_FingerprintReadCallback_InputRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager", "UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRec", "UBT_AppManager_Mobile.controller$Fingerprint_Read", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBT_AppManager_Mobile.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_GetObjProperty", "UBT_AppManager_Mobile.controller$Get_Message_FingerprintUnavailable"], function (OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, UBT_AppManagerModel, UBTJavaScriptUtilsController, UBT_AppManagerController, UBT_AppManager_MobileLanguageResources, UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_Debugger, UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_controller_OnReady_IsViewRestoredFromCacheJS, UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_controller_OnReady_ReadFingerprintDelayedJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
readFingerprint$Action: function (isUserInitiatedIn) {
isUserInitiatedIn = (isUserInitiatedIn === undefined) ? false : isUserInitiatedIn;
return controller.executeActionInsideJSNode(controller._readFingerprint$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isUserInitiatedIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "ReadFingerprint");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._readFingerprint$Action = function (isUserInitiatedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ReadFingerprint");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.ReadFingerprint$vars"))());
vars.value.isUserInitiatedInLocal = isUserInitiatedIn;
var fingerprint_ReadVar = new OS.DataTypes.VariableHolder();
var obj_PinUnlockVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.fingerprint_ReadVar = fingerprint_ReadVar;
varBag.obj_PinUnlockVar = obj_PinUnlockVar;
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:QWTpdwdwd0eBnaM_8OCqdg:/NRWebFlows.WjgzaZ3LMUiT4LWMmZPOIA/NodesShownInESpaceTree.Evgas8RHHkyPry43mV1LXA/ClientActions.QWTpdwdwd0eBnaM_8OCqdg:WrbulJmYKM7MuaCJdgjCzw", "UBT_AppManager_Mobile", "ReadFingerprint", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:E+aN7kUnBkyieBwNSoXRsQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:XUGZZRAXD0mOFhETuEo6Ag", callContext.id);
// Execute Action: Fingerprint_Read
model.flush();
return UBT_AppManager_MobileController.default.fingerprint_Read$Action(function () {
var rec = new UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRec();
rec.isUserInitiatedAttr = vars.value.isUserInitiatedInLocal;
rec.titleAttr = model.variables.in_TitleIn;
rec.messageAttr = model.variables.in_SubtitleIn;
return rec;
}(), callContext).then(function (value) {
fingerprint_ReadVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:RvqFEe_uik+i5S2wIAYFKg", callContext.id) && fingerprint_ReadVar.value.pIN_FingerprintReadCallback_ResponseOut.isUnavailableAttr)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:J3idjs6vgEeuFcMC2tx09A", callContext.id);
// IsUnavailable = True
vars.value.isUnavailableVar = true;
}

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:yzFVfiZUKU2hZ3d5bSGz6w", callContext.id) && fingerprint_ReadVar.value.pIN_FingerprintReadCallback_ResponseOut.isSuccessAttr)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:Eyog+wS860e1iSs6eHHMfA", callContext.id);
// Execute Action: Obj_PinUnlock
obj_PinUnlockVar.value = UBT_AppManagerController.default.appManager_JSUtils_ElementCache_GetObjProperty$Action(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_PinUnlockCallback, callContext);

OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:UY57c3GVhkKv4qPE9nHK9w", callContext.id);
// Execute Action: JSUtils_RunFunc
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action(obj_PinUnlockVar.value.valueOut, null, callContext);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:rAPGdORs_k+Y+8Di+fnsaQ", callContext.id);
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:3ixb8X1gxE6MbEF1Q0yMZg", callContext.id) && vars.value.isUnavailableVar)) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:O8bbrmemsEibU4uWbL9+ZA", callContext.id);
// Trigger Event: UnlockError
return controller.unlockError$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBT_AppManager_MobileController.default.get_Message_FingerprintUnavailable$Action(callContext).messageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:casLrirA20SZT6gpepasDg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:casLrirA20SZT6gpepasDg", callContext.id);
}

});
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:QWTpdwdwd0eBnaM_8OCqdg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:QWTpdwdwd0eBnaM_8OCqdg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.ReadFingerprint$vars", [{
name: "IsUserInitiated",
attrName: "isUserInitiatedInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsUnavailable",
attrName: "isUnavailableVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
try {OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:e53dxgpoe0OcRMtjBhLFmg:/NRWebFlows.WjgzaZ3LMUiT4LWMmZPOIA/NodesShownInESpaceTree.Evgas8RHHkyPry43mV1LXA/ClientActions.e53dxgpoe0OcRMtjBhLFmg:6Qr3vLjxS8WLE0vXkS6jyw", "UBT_AppManager_Mobile", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:8ytYr8qkaEqLnohkpTksyw", callContext.id);
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:VWp6Ev4eRUiONIbHNEip3A", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_controller_OnReady_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "OnReady", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.OnReady$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:BdAmDTNn+0mumkQ_DM06Kg", callContext.id) && (model.variables.in_IsScanOnReadyIn && !(isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)))) {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:gaYKotGte0qg7fIOjQ8Plg", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_controller_OnReady_ReadFingerprintDelayedJS, "ReadFingerprintDelayed", "OnReady", null, function ($parameters) {
}, {
ReadFingerprint: controller.clientActionProxies.readFingerprint$Action
}, {});
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:hPf2f+gZjUGBxTAp7L6NQA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("BY9jlG5exUW_vRtJ8oZ51A:hPf2f+gZjUGBxTAp7L6NQA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:e53dxgpoe0OcRMtjBhLFmg", callContext.id);
}

};
Controller.registerVariableGroupType("UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.OnReady$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.readFingerprint$Action = function (isUserInitiatedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._readFingerprint$Action, callContext, isUserInitiatedIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.unlockError$Action = function () {
return Promise.resolve();
};
Controller.prototype.unlock$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:WjgzaZ3LMUiT4LWMmZPOIA:/NRWebFlows.WjgzaZ3LMUiT4LWMmZPOIA:JX+ehGZDj99M2y+L38c3hw", "UBT_AppManager_Mobile", "Fingerprint", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:Evgas8RHHkyPry43mV1LXA:/NRWebFlows.WjgzaZ3LMUiT4LWMmZPOIA/NodesShownInESpaceTree.Evgas8RHHkyPry43mV1LXA:xN88u6qcO7lNJ26qAaYQDw", "UBT_AppManager_Mobile", "FingerprintScanner", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:Evgas8RHHkyPry43mV1LXA", callContext.id);
OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:WjgzaZ3LMUiT4LWMmZPOIA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Fingerprint/FingerprintScanner On Ready");
return controller.onReady$Action(callContext);

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
return UBT_AppManager_MobileController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBT_AppManager_MobileLanguageResources);
});
define("UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$controller.OnReady.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});
define("UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$controller.OnReady.ReadFingerprintDelayedJS", [], function () {
return function ($actions, $roles, $public) {
window.setTimeout($actions.ReadFingerprint,500)
};
});

define("UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"22u22FbzTECW9oRgZ3TjWA": {
getter: function (varBag, idService) {
return varBag.vars.value.isUnavailableVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"WFmrzeJhZUq1IDOvvFhOew": {
getter: function (varBag, idService) {
return varBag.vars.value.isUserInitiatedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"XUGZZRAXD0mOFhETuEo6Ag": {
getter: function (varBag, idService) {
return varBag.fingerprint_ReadVar.value;
}
},
"Eyog+wS860e1iSs6eHHMfA": {
getter: function (varBag, idService) {
return varBag.obj_PinUnlockVar.value;
}
},
"VWp6Ev4eRUiONIbHNEip3A": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"gaYKotGte0qg7fIOjQ8Plg": {
getter: function (varBag, idService) {
return varBag.readFingerprintDelayedJSResult.value;
}
},
"WjHtEo0CikOvMBtnNNN6Dw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsScanOnReadyIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"7IxXJk9s9UmSuemDxc8gOw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LE+aMKKn9EuRJT_4IQBRKA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TitleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KX4FcInwEU6CtITdLp7dcg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubtitleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hRHxqWUuikCP1Ww4aPy9AQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
