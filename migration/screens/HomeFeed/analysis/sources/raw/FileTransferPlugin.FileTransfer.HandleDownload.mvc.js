define("FileTransferPlugin.FileTransfer.HandleDownload.mvc$model", ["OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "CommonPlugin.controller", "CommonPlugin.model", "FileTransferPlugin.controller", "CommonPlugin.controller$ConsoleLog", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.controller$DEPRECATED_CheckFileTransferPlugin", "FileTransferPlugin.model$FileTransferErrorRec", "FileTransferPlugin.model$ProgressRec"], function (OutSystems, FileTransferPluginModel, CommonPluginController, CommonPluginModel, FileTransferPluginController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("InstanceToken", "instanceTokenVar", "InstanceToken", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromStructure = function (str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
instanceTokenVar: OS.DataTypes.ImmutableBase.getData(str)
}));
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
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "FileTransfer.HandleDownload");
});
define("FileTransferPlugin.FileTransfer.HandleDownload.mvc$view", ["OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "react", "OutSystems/ReactView/Main", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$model", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller", "CommonPlugin.controller$ConsoleLog", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.controller$DEPRECATED_CheckFileTransferPlugin", "FileTransferPlugin.model$FileTransferErrorRec", "FileTransferPlugin.model$ProgressRec"], function (OutSystems, FileTransferPluginModel, FileTransferPluginController, CommonPluginController, CommonPluginModel, React, OSView, FileTransferPlugin_FileTransfer_HandleDownload_mvc_model, FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller) {
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
        View.displayName = "FileTransfer.HandleDownload";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return ["scripts/CommonPlugin.PluginManager.js", "scripts/FileTransferPlugin.FileTransfer_HandleDownload.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return FileTransferPlugin_FileTransfer_HandleDownload_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller", ["OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "FileTransferPlugin.languageResources", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$debugger", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnInitialize.InitJS", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnReady.RegisterCallBacksJS", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnReady.RegisterWebCallbacksJS", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnDestroy.UnregisterWebCallbacksJS", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnDestroy.UnregisterCallbacksJS", "CommonPlugin.controller$ConsoleLog", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.controller$DEPRECATED_CheckFileTransferPlugin", "FileTransferPlugin.model$FileTransferErrorRec", "FileTransferPlugin.model$ProgressRec"], function (OutSystems, FileTransferPluginModel, FileTransferPluginController, CommonPluginController, CommonPluginModel, FileTransferPluginLanguageResources, FileTransferPlugin_FileTransfer_HandleDownload_mvc_Debugger, FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller_OnInitialize_InitJS, FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller_OnReady_RegisterCallBacksJS, FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller_OnReady_RegisterWebCallbacksJS, FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller_OnDestroy_UnregisterWebCallbacksJS, FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller_OnDestroy_UnregisterCallbacksJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
downloadProgress$Action: function (progressIn) {
progressIn = (progressIn === undefined) ? "" : progressIn;
return controller.executeActionInsideJSNode(controller._downloadProgress$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(progressIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "DownloadProgress");
},
downloadComplete$Action: function (resultIn) {
resultIn = (resultIn === undefined) ? "" : resultIn;
return controller.executeActionInsideJSNode(controller._downloadComplete$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(resultIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "DownloadComplete");
},
downloadError$Action: function (errorIn) {
errorIn = (errorIn === undefined) ? "" : errorIn;
return controller.executeActionInsideJSNode(controller._downloadError$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(errorIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "DownloadError");
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
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var initJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.initJSResult = initJSResult;
try {OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:ViQEJtAyVk+STHVIRT843w:/NRWebFlows.e9sSKtBJD0WsvdFseFkTDg/NodesShownInESpaceTree.526Hsno6_k+lPOK5cXVzvw/ClientActions.ViQEJtAyVk+STHVIRT843w:_mrgsdPeeMjF6Bkwe6MPWw", "FileTransferPlugin", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:1RTqrmRtoEiRSuvkjYbs2w", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:kogHkKD8kE+zVZMJhK21Zw", callContext.id);
initJSResult.value = controller.safeExecuteJSNode(FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller_OnInitialize_InitJS, "Init", "OnInitialize", {
Token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("FileTransferPlugin.FileTransfer.HandleDownload.OnInitialize$initJSResult"))();
jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Token, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
DownloadProgress: controller.clientActionProxies.downloadProgress$Action,
DownloadComplete: controller.clientActionProxies.downloadComplete$Action,
DownloadError: controller.clientActionProxies.downloadError$Action
}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:xag6+luthU2ZHMXNS_9IMg", callContext.id);
// InstanceToken = Init.Token
model.variables.instanceTokenVar = initJSResult.value.tokenOut;
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:cPXqpJKsj0WXB3Pv16fZfg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:ViQEJtAyVk+STHVIRT843w", callContext.id);
}

};
Controller.registerVariableGroupType("FileTransferPlugin.FileTransfer.HandleDownload.OnInitialize$initJSResult", [{
name: "Token",
attrName: "tokenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._downloadComplete$Action = function (resultIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DownloadComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.FileTransfer.HandleDownload.DownloadComplete$vars"))());
vars.value.resultInLocal = resultIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var jSONDeserializeFileDownloadResultVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(FileTransferPluginModel.FileDownloadResultRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.jSONDeserializeFileDownloadResultVar = jSONDeserializeFileDownloadResultVar;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:DjJnTJl6pUGR7D+AsKdW1w:/NRWebFlows.e9sSKtBJD0WsvdFseFkTDg/NodesShownInESpaceTree.526Hsno6_k+lPOK5cXVzvw/ClientActions.DjJnTJl6pUGR7D+AsKdW1w:l1frUYqYO87CH1kaDmiwrw", "FileTransferPlugin", "DownloadComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:g6pWBj4ZJUm9Jj1PimH7bg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:uLFvW5w21Uax2dTTzhgxCQ", callContext.id);
// JSON Deserialize: JSONDeserializeFileDownloadResult
jSONDeserializeFileDownloadResultVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.resultInLocal, FileTransferPluginModel.FileDownloadResultRec, false);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:QFg60vC4+U+VecxNbvB7qw", callContext.id);
// Trigger Event: OnDownloadComplete
return controller.onDownloadComplete$Action(jSONDeserializeFileDownloadResultVar.value.dataOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:a3MhGOCxNEyH4hVrDHEx6w", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("HandleDownload.DownloadComplete", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:594qafXApU6SlWB0vcQYCg", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:GDVzoKIrJUaYt3uvZrtYIA", callContext.id);
// Execute Action: ConsoleLog
CommonPluginController.default.consoleLog$Action("FileTransfer", (("Exception: \'" + allExceptionsVar.value.exceptionMessageAttr) + "\'"), callContext);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:qG8Wn32540CXJbkCi_KD8g", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:DjJnTJl6pUGR7D+AsKdW1w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:DjJnTJl6pUGR7D+AsKdW1w", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("FileTransferPlugin.FileTransfer.HandleDownload.DownloadComplete$vars", [{
name: "Result",
attrName: "resultInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dEPRECATED_CheckFileTransferPluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.dEPRECATED_CheckFileTransferPluginVar = dEPRECATED_CheckFileTransferPluginVar;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:I3w8UWngJEWVelWlRN40mw:/NRWebFlows.e9sSKtBJD0WsvdFseFkTDg/NodesShownInESpaceTree.526Hsno6_k+lPOK5cXVzvw/ClientActions.I3w8UWngJEWVelWlRN40mw:F6g_TKv_7uvd1X0L5KLwCw", "FileTransferPlugin", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:j8tpH48nF0idD6AiusZl5A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:vApCkfnzsUq5pPNGKIIsGA", callContext.id);
// Execute Action: DEPRECATED_CheckFileTransferPlugin
model.flush();
return FileTransferPluginController.default.dEPRECATED_CheckFileTransferPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckFileTransferPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:twJw6j_T+0O59WLBeBhoMw", callContext.id) && dEPRECATED_CheckFileTransferPluginVar.value.isAvailableOut)) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:d3Z3eJqnlEyir4GakbgSGg", callContext.id) && dEPRECATED_CheckFileTransferPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:qUWBto+eN0yCKmQ52h6rpQ", callContext.id);
controller.safeExecuteJSNode(FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller_OnReady_RegisterWebCallbacksJS, "RegisterWebCallbacks", "OnReady", null, function ($parameters) {
}, {
DownloadProgress: controller.clientActionProxies.downloadProgress$Action,
DownloadComplete: controller.clientActionProxies.downloadComplete$Action,
DownloadError: controller.clientActionProxies.downloadError$Action
}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:0zymr+up5UurNGDrOcGZvw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:k9OBBjVc9kyo3SCfrahprA", callContext.id);
return controller.safeExecuteAsyncJSNode(FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller_OnReady_RegisterCallBacksJS, "RegisterCallBacks", "OnReady", {
Token: OS.DataConversion.JSNodeParamConverter.to(model.variables.instanceTokenVar, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:0zymr+up5UurNGDrOcGZvw", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:I72wbA8Yk0WdwvVwwZJsaA", callContext.id);
// Execute Action: ConsoleLog
CommonPluginController.default.consoleLog$Action("FileTransfer", "File Transfer plugin is not available", callContext);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:lhyUbjneZ0633Wk1RaplSQ", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("HandleDownload.OnReady", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:abAEydmuL0GO6yZoEWNsIw", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:aForezLNrk6mHy0fp0GEqg", callContext.id);
// Execute Action: ConsoleLog2
CommonPluginController.default.consoleLog$Action("FileTransfer", (("Exception: \'" + allExceptionsVar.value.exceptionMessageAttr) + "\'"), callContext);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:tQFthCbY8U+N7TxW9H2Ytw", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:I3w8UWngJEWVelWlRN40mw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:I3w8UWngJEWVelWlRN40mw", callContext.id);
throw ex;

});
};
Controller.prototype._downloadError$Action = function (errorIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DownloadError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.FileTransfer.HandleDownload.DownloadError$vars"))());
vars.value.errorInLocal = errorIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var jSONDeserializeFileTransferErrorVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(FileTransferPluginModel.FileTransferErrorRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.jSONDeserializeFileTransferErrorVar = jSONDeserializeFileTransferErrorVar;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:ZNkpVihTFEedv1FFQa+nQg:/NRWebFlows.e9sSKtBJD0WsvdFseFkTDg/NodesShownInESpaceTree.526Hsno6_k+lPOK5cXVzvw/ClientActions.ZNkpVihTFEedv1FFQa+nQg:lzpLHI00b2XqDmIZATVR3A", "FileTransferPlugin", "DownloadError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:PVAsTer1TEG1wf0sP7I6xg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:YcAagX1AVESktY_ka7ec7w", callContext.id);
// JSON Deserialize: JSONDeserializeFileTransferError
jSONDeserializeFileTransferErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.errorInLocal, FileTransferPluginModel.FileTransferErrorRec, false);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:ckRTxYmnzk6yonjhRGv_4Q", callContext.id);
// Trigger Event: OnDownloadError
return controller.onDownloadError$Action(jSONDeserializeFileTransferErrorVar.value.dataOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:P4rv3EHNU02LDWpOKkBNUg", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("HandleDownload.DownloadError", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:Q+yKMa_0q0ecI+GR8hjEZg", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:REuL_2Y1zEyG0Dy7tHRt0A", callContext.id);
// Execute Action: ConsoleLog
CommonPluginController.default.consoleLog$Action("FileTransfer", (("Exception: \'" + allExceptionsVar.value.exceptionMessageAttr) + "\'"), callContext);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:m27VSVFMmUmHw2kxnj1IYw", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:ZNkpVihTFEedv1FFQa+nQg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:ZNkpVihTFEedv1FFQa+nQg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("FileTransferPlugin.FileTransfer.HandleDownload.DownloadError$vars", [{
name: "Error",
attrName: "errorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._downloadProgress$Action = function (progressIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DownloadProgress");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("FileTransferPlugin.FileTransfer.HandleDownload.DownloadProgress$vars"))());
vars.value.progressInLocal = progressIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var jSONDeserializeProgressVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(FileTransferPluginModel.ProgressRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.jSONDeserializeProgressVar = jSONDeserializeProgressVar;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:g9X5st0tuk2yIPFZqEJ7VA:/NRWebFlows.e9sSKtBJD0WsvdFseFkTDg/NodesShownInESpaceTree.526Hsno6_k+lPOK5cXVzvw/ClientActions.g9X5st0tuk2yIPFZqEJ7VA:VAg1h0+zrAsSV40_BkTVOQ", "FileTransferPlugin", "DownloadProgress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:+P8TpZb1u0SAT4Kp10M2Tg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:ZSAhEh2fp0aYrY8MbRfPIg", callContext.id);
// JSON Deserialize: JSONDeserializeProgress
jSONDeserializeProgressVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.progressInLocal, FileTransferPluginModel.ProgressRec, false);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:UqqkPg9O2Uy_U+nI71CT6w", callContext.id);
// Trigger Event: OnDownloadProgress
return controller.onDownloadProgress$Action(jSONDeserializeProgressVar.value.dataOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:muRbyTGhg0afuUDLXmY3iw", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("HandleDownload.DownloadProgress", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:DsCA5ESZSkSYF0lG8pBYww", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:cBSFx1fi1kWHCfacW_Ko7g", callContext.id);
// Execute Action: ConsoleLog
CommonPluginController.default.consoleLog$Action("FileTransfer", (("Exception: \'" + allExceptionsVar.value.exceptionMessageAttr) + "\'"), callContext);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:6C43NRLz8UqsFXVWPXga6A", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:g9X5st0tuk2yIPFZqEJ7VA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:g9X5st0tuk2yIPFZqEJ7VA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("FileTransferPlugin.FileTransfer.HandleDownload.DownloadProgress$vars", [{
name: "Progress",
attrName: "progressInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dEPRECATED_CheckFileTransferPluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.dEPRECATED_CheckFileTransferPluginVar = dEPRECATED_CheckFileTransferPluginVar;
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:SogizeQabEm90zM9g0XI5Q:/NRWebFlows.e9sSKtBJD0WsvdFseFkTDg/NodesShownInESpaceTree.526Hsno6_k+lPOK5cXVzvw/ClientActions.SogizeQabEm90zM9g0XI5Q:rL9Wc6dQqnI6v54KtUpnRA", "FileTransferPlugin", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:33+0_rMyW0Wbgjrrg2wQzA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:jKKgcWEWMEqy_l1C3uC4VQ", callContext.id);
// Execute Action: DEPRECATED_CheckFileTransferPlugin
model.flush();
return FileTransferPluginController.default.dEPRECATED_CheckFileTransferPlugin$Action(callContext).then(function (value) {
dEPRECATED_CheckFileTransferPluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:PencmOdnSEigWqsPVCa0oA", callContext.id) && dEPRECATED_CheckFileTransferPluginVar.value.isAvailableOut)) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:mDJ562fJdkCoqVV1itIimw", callContext.id) && dEPRECATED_CheckFileTransferPluginVar.value.isPWAOut)) {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:xt3OJaqQ30mdm8p_RchU+w", callContext.id);
controller.safeExecuteJSNode(FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller_OnDestroy_UnregisterWebCallbacksJS, "UnregisterWebCallbacks", "OnDestroy", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:HK_7iVzSPkyrU+3G4WOVIw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:RvCYra0c8kOBz62Z6mAzmA", callContext.id);
return controller.safeExecuteAsyncJSNode(FileTransferPlugin_FileTransfer_HandleDownload_mvc_controller_OnDestroy_UnregisterCallbacksJS, "UnregisterCallbacks", "OnDestroy", {
Token: OS.DataConversion.JSNodeParamConverter.to(model.variables.instanceTokenVar, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:HK_7iVzSPkyrU+3G4WOVIw", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:mgbJLDX8PkOEc1lsNYWy6Q", callContext.id);
// Execute Action: ConsoleLog
CommonPluginController.default.consoleLog$Action("FileTransfer", "Upload plugin is not defined", callContext);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:ndJy0bKS7UeKGQ8MDQtJEg", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("HandleDownload.OnDestroy", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:el+vbdVEsU6YD8tIAPHrVg", callContext.id);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:8q5ez7DRdUOXNX+Ot+zBHA", callContext.id);
// Execute Action: ConsoleLog2
CommonPluginController.default.consoleLog$Action("FileTransfer", (("Exception: \'" + allExceptionsVar.value.exceptionMessageAttr) + "\'"), callContext);
OutSystemsDebugger.handleBreakpoint("xvuUdkN8TEmJz7B4XKa4LQ:4AFlr339mkudnKBJ3tUV7A", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:SogizeQabEm90zM9g0XI5Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:SogizeQabEm90zM9g0XI5Q", callContext.id);
throw ex;

});
};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.downloadComplete$Action = function (resultIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._downloadComplete$Action, callContext, resultIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.downloadError$Action = function (errorIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._downloadError$Action, callContext, errorIn);

};
Controller.prototype.downloadProgress$Action = function (progressIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._downloadProgress$Action, callContext, progressIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onDownloadError$Action = function () {
return Promise.resolve();
};
Controller.prototype.onDownloadProgress$Action = function () {
return Promise.resolve();
};
Controller.prototype.onDownloadComplete$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:e9sSKtBJD0WsvdFseFkTDg:/NRWebFlows.e9sSKtBJD0WsvdFseFkTDg:PBPXqpLtMt8eCAbQKpXhEQ", "FileTransferPlugin", "FileTransfer", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("xvuUdkN8TEmJz7B4XKa4LQ:526Hsno6_k+lPOK5cXVzvw:/NRWebFlows.e9sSKtBJD0WsvdFseFkTDg/NodesShownInESpaceTree.526Hsno6_k+lPOK5cXVzvw:d3XmYoduID_ych+Aci_JAQ", "FileTransferPlugin", "HandleDownload", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:526Hsno6_k+lPOK5cXVzvw", callContext.id);
OutSystemsDebugger.pop("xvuUdkN8TEmJz7B4XKa4LQ:e9sSKtBJD0WsvdFseFkTDg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "FileTransfer/HandleDownload On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "FileTransfer/HandleDownload On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "FileTransfer/HandleDownload On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return FileTransferPluginController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, FileTransferPluginLanguageResources);
});
define("FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnInitialize.InitJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Token = window.filetransferDownloadSync.registerCallbacks($actions.DownloadProgress, $actions.DownloadComplete, $actions.DownloadError)
};
});
define("FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnReady.RegisterCallBacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
require(["PluginManager"], function(module){
    let scopeName = "FileTransfer_download_" + $parameters.Token; 
    
    var onReady = function(scope) {
        scope.downloadCallback = {};
        scope.downloadCallback.hasPermission = false;

        scope.downloadCallback.downloadComplete = function(entry) {
            window.filetransferDownloadSync.triggerOnCompletedEvent(entry);
        };

        scope.downloadCallback.downloadError = function(error) {
            window.filetransferDownloadSync.triggerOnErrorEvent(error);   
        };
            
        scope.downloadCallback.downloadProgress = function(progress) {
            window.filetransferDownloadSync.triggerOnProgressEvent(progress);
        };
    };
    
    var onDestroy = function(scope) {
        window.filetransferDownloadSync.dequeue();
    };
    
    module.createScope(scopeName,  onReady, onDestroy);

    window.filetransferDownloadSync.queue(module.scope(scopeName));
    
    $resolve();
});


});
};
});
define("FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnReady.RegisterWebCallbacksJS", [], function () {
return function ($actions, $roles, $public) {
window.donwloadProgressEvent = (e) => {
    $actions.DownloadProgress(JSON.stringify(e.detail.progress));
};
window.addEventListener('downloadprogress', window.donwloadProgressEvent)

window.donwloadCompleteEvent = (e) => {
    $actions.DownloadComplete(JSON.stringify(e.detail.result));
};

window.addEventListener('downloadcomplete', window.donwloadCompleteEvent)

window.fileTransferError = (e) => {
    $actions.DownloadError(JSON.stringify(e.detail.error));
};
window.addEventListener('fileTransferError', window.fileTransferError);

};
});
define("FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnDestroy.UnregisterWebCallbacksJS", [], function () {
return function ($actions, $roles, $public) {
window.removeEventListener('downloadprogress', window.donwloadProgressEvent);

window.removeEventListener('downloadcomplete', window.donwloadCompleteEvent);

window.removeEventListener('fileTransferError', window.fileTransferError);

};
});
define("FileTransferPlugin.FileTransfer.HandleDownload.mvc$controller.OnDestroy.UnregisterCallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
require(["PluginManager"], function(module){
    var scope = module.scope(`FileTransfer_download_${$parameters.Token}`);
    if(scope !== undefined) {
        module.destroyScope(`FileTransfer_download_${$parameters.Token}`);    
        window.filetransferDownloadSync.unregisterCallbacks($parameters.Token);
    }

    $resolve();
});
});
};
});

define("FileTransferPlugin.FileTransfer.HandleDownload.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"kogHkKD8kE+zVZMJhK21Zw": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"jUMuQ4VmLUKV5tgy383XpA": {
getter: function (varBag, idService) {
return varBag.vars.value.resultInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"594qafXApU6SlWB0vcQYCg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"uLFvW5w21Uax2dTTzhgxCQ": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeFileDownloadResultVar.value;
}
},
"abAEydmuL0GO6yZoEWNsIw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"vApCkfnzsUq5pPNGKIIsGA": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFileTransferPluginVar.value;
}
},
"k9OBBjVc9kyo3SCfrahprA": {
getter: function (varBag, idService) {
return varBag.registerCallBacksJSResult.value;
}
},
"qUWBto+eN0yCKmQ52h6rpQ": {
getter: function (varBag, idService) {
return varBag.registerWebCallbacksJSResult.value;
}
},
"v6dIBQ0xNk20WMj3vHuE1w": {
getter: function (varBag, idService) {
return varBag.vars.value.errorInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Q+yKMa_0q0ecI+GR8hjEZg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"YcAagX1AVESktY_ka7ec7w": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeFileTransferErrorVar.value;
}
},
"dIC4DBkajUyiU7NVrJQzRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.progressInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DsCA5ESZSkSYF0lG8pBYww": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"ZSAhEh2fp0aYrY8MbRfPIg": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeProgressVar.value;
}
},
"el+vbdVEsU6YD8tIAPHrVg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"jKKgcWEWMEqy_l1C3uC4VQ": {
getter: function (varBag, idService) {
return varBag.dEPRECATED_CheckFileTransferPluginVar.value;
}
},
"xt3OJaqQ30mdm8p_RchU+w": {
getter: function (varBag, idService) {
return varBag.unregisterWebCallbacksJSResult.value;
}
},
"RvCYra0c8kOBz62Z6mAzmA": {
getter: function (varBag, idService) {
return varBag.unregisterCallbacksJSResult.value;
}
},
"JF7LoBPsiEGnhG+sGyW72w": {
getter: function (varBag, idService) {
return varBag.model.variables.instanceTokenVar;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
