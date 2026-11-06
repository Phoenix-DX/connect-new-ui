define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$model", "OutSystemsUI_2_23.controller$StartOfflineDataSync", "OutSystemsUI_2_23.controller$EndOfflineDataSync", "OutSystemsUI_2_23.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23_Private_NetworkStatusChanged_mvcModel) {
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = OutSystemsUI_2_23_Private_NetworkStatusChanged_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Private.OfflineDataSyncCore");
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$model", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller", "OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.controller$StartOfflineDataSync", "OutSystemsUI_2_23.controller$EndOfflineDataSync", "OutSystemsUI_2_23.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_model, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller, OutSystemsUI_2_23_Private_NetworkStatusChanged_mvc_view, OSWidgets) {
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
        View.displayName = "Private.OfflineDataSyncCore";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OfflineDataSync.js"];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Private_NetworkStatusChanged_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller;
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
return [React.createElement(OutSystemsUI_2_23_Private_NetworkStatusChanged_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
networkStatusChanged$Action: function (isOnlineIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/NetworkStatusChanged NetworkStatusChanged");
controller.onNetworkStatusChanged$Action(isOnlineIn, controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$debugger", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnDestroy.UnregisterAPIJS", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.Init.RegisterAPIJS", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncStartEventJS", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncErrorEventOfflineJS", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.SuspendSyncJS", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnNetworkStatusChanged.GetSyncOnOnlineJS", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnInitialize.InitJS", "OutSystemsUI_2_23.controller$StartOfflineDataSync", "OutSystemsUI_2_23.controller$EndOfflineDataSync", "OutSystemsUI_2_23.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_TranslationsResources, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_Debugger, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_OnResume_GetSyncOnResumeJS, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_OnDestroy_UnregisterAPIJS, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_Init_RegisterAPIJS, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncStartEventJS, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncErrorEventOfflineJS, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_SuspendSyncJS, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_OnNetworkStatusChanged_GetSyncOnOnlineJS, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_OnInitialize_InitJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
syncWrapper$Action: function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(controller._syncWrapper$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "SyncWrapper");
},
onResume$Action: function () {
return controller.executeActionInsideJSNode(controller._onResume$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnResume");
},
triggerOnSyncStart$Action: function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(controller._triggerOnSyncStart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnSyncStart");
},
triggerOnSyncComplete$Action: function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(controller._triggerOnSyncComplete$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnSyncComplete");
},
triggerOnSyncError$Action: function (syncUnitIn, errorMessageIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
errorMessageIn = (errorMessageIn === undefined) ? "" : errorMessageIn;
return controller.executeActionInsideJSNode(controller._triggerOnSyncError$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(errorMessageIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnSyncError");
},
init$Action: function () {
return controller.executeActionInsideJSNode(controller._init$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Init");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onResume$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnResume");
callContext = controller.callContext(callContext);
var getSyncOnResumeJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getSyncOnResumeJSResult = getSyncOnResumeJSResult;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:ljgpFByHWECqPa9R9yql0w:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.ljgpFByHWECqPa9R9yql0w:77fliDt7OlRHriTcREGFAg", "OutSystemsUI_2_23", "OnResume", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qbvmMcNyB0WqI551Qzj+yg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pNqidDqDcUOD1FKsjDtBzA", callContext.id);
getSyncOnResumeJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_OnResume_GetSyncOnResumeJS, "GetSyncOnResume", "OnResume", {
SyncOnResume: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.OnResume$getSyncOnResumeJSResult"))();
jsNodeResult.syncOnResumeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SyncOnResume, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// SyncOnResume?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:z+7gvvh69EaZV3wCcM4FAg", callContext.id) && getSyncOnResumeJSResult.value.syncOnResumeOut)) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:iUPPGk7dgUqwZLFuobIXdg", callContext.id);
// Execute Action: StartOfflineDataSync
OutSystemsUI_2_23Controller.default.startOfflineDataSync$Action("", false, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:L8XSZCR4UEaYUXgjmOcpOw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:L8XSZCR4UEaYUXgjmOcpOw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:ljgpFByHWECqPa9R9yql0w", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.OnResume$getSyncOnResumeJSResult", [{
name: "SyncOnResume",
attrName: "syncOnResumeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._triggerOnSyncComplete$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerOnSyncComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.TriggerOnSyncComplete$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:yRN8KzK4XEqBnkM+5MLnwg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.yRN8KzK4XEqBnkM+5MLnwg:3ugJcdYsIiyGvXTTT06k0Q", "OutSystemsUI_2_23", "TriggerOnSyncComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:0J2kh2tYf0KhazdRWlvFJQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:fgGs9UHBPk+BhtJ2QNvKHQ", callContext.id);
// Trigger Event: OnSyncComplete
return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ghkHnVF1KUmi62pA4zx76w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:yRN8KzK4XEqBnkM+5MLnwg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:yRN8KzK4XEqBnkM+5MLnwg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.TriggerOnSyncComplete$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:LldIZ7q7OE2fcJhXA0cHEA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.LldIZ7q7OE2fcJhXA0cHEA:_Zs8eg0E6UptfL1XQUDt5w", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:WdXaUSZmeEmt4V1qVRSXtA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:iqwLbSzl40aQOxA4jncutw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_OnDestroy_UnregisterAPIJS, "UnregisterAPI", "OnDestroy", {
Token: OS.DataConversion.JSNodeParamConverter.to(model.variables.instanceTokenVar, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:v+OAzsz38kyYfMUH9yKtyQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:LldIZ7q7OE2fcJhXA0cHEA", callContext.id);
}

};
Controller.prototype._init$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Init");
callContext = controller.callContext(callContext);
var registerAPIJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.registerAPIJSResult = registerAPIJSResult;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:YQeNisDMZkCYXmveaPDjNw:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.YQeNisDMZkCYXmveaPDjNw:q5JmWi9G_GI_5aoG37zIqg", "OutSystemsUI_2_23", "Init", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:I7EhrR9vYk+lhuhC8Xk5Og", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:NnpaUkoy60OK58LSxM+fvA", callContext.id);
registerAPIJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_Init_RegisterAPIJS, "RegisterAPI", "Init", {
Token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.Init$registerAPIJSResult"))();
jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Token, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
SyncWrapper: controller.clientActionProxies.syncWrapper$Action,
OnResume: controller.clientActionProxies.onResume$Action,
TriggerOnSyncStart: controller.clientActionProxies.triggerOnSyncStart$Action,
TriggerOnSyncComplete: controller.clientActionProxies.triggerOnSyncComplete$Action,
TriggerOnSyncError: controller.clientActionProxies.triggerOnSyncError$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:si3bn5IIjUOyjpjLABqtQg", callContext.id);
// InstanceToken = RegisterAPI.Token
model.variables.instanceTokenVar = registerAPIJSResult.value.tokenOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zLGZWa5qI0yXj1Y3OmiOMg", callContext.id);
// Trigger Event: OnConfigure
return controller.onConfigure$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:aAdzLFmad0ykuG_eSF9kSQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:YQeNisDMZkCYXmveaPDjNw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:YQeNisDMZkCYXmveaPDjNw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.Init$registerAPIJSResult", [{
name: "Token",
attrName: "tokenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._syncWrapper$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SyncWrapper");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.SyncWrapper$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.securityExceptionVar = securityExceptionVar;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getNetworkStatusVar = getNetworkStatusVar;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:61JtyqdE4kyQ3ouMgX1hkA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.61JtyqdE4kyQ3ouMgX1hkA:Jh6VwtdR0rOAndPch+vb2g", "OutSystemsUI_2_23", "SyncWrapper", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:t9gFCoSUGE+kI82pQA3a1w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2H7JMqJDYky09Bv7b+e+pg", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncStartEventJS, "TriggerSyncStartEvent", "SyncWrapper", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:_rNVoy5gskirfHpTddoezQ", callContext.id);
// Execute Action: GetNetworkStatus
getNetworkStatusVar.value = OutSystemsUI_2_23Controller.default.getNetworkStatus$Action(callContext);

// IsOnline?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:nfaFmKlDNUOiez88ImzkUQ", callContext.id) && getNetworkStatusVar.value.isOnlineOut)) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:SqlfaOn5fEqwSDNw0ZoocA", callContext.id);
// Trigger Event: OnSync
return controller.onSync$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:in5nlSJO8kic5NE1kxH2ig", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:9_Iu1tkm8kOEr1KilaACFA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_SuspendSyncJS, "SuspendSync", "SyncWrapper", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ovxxnK25wkediVRyRJvj3w", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncErrorEventOfflineJS, "TriggerSyncErrorEventOffline", "SyncWrapper", {
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1", "Unable to synchronize data. Device has no network connectivity."), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:8fTvrtG1Qkiw2cukaFn55w", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("OfflineDataSyncCore.SyncWrapper", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: SecurityException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
OS.Logger.error(null, ex);
securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(securityExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:gi4+NVQjv0ea3taNkarbzQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3Pg96F62hUWzkzd_qrSukA", callContext.id);
// Execute Action: EndWithSecurityError
OutSystemsUI_2_23Controller.default.endOfflineDataSync$Action(true, securityExceptionVar.value.exceptionMessageAttr, false, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qn7NXJ1M2UO36Qd1pnFv1w", callContext.id);
return OS.Flow.returnAsync();

});
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:WvYZNuhra0+E8QcHd7mSgg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:vqdjnHVFc0OqxgTooRemBQ", callContext.id);
// Execute Action: EndWithError
OutSystemsUI_2_23Controller.default.endOfflineDataSync$Action(true, allExceptionsVar.value.exceptionMessageAttr, true, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:nByB_hpE20u22c4ZnnEYBA", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:61JtyqdE4kyQ3ouMgX1hkA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:61JtyqdE4kyQ3ouMgX1hkA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.SyncWrapper$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._triggerOnSyncStart$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerOnSyncStart");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.TriggerOnSyncStart$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:FlCNyxoo3kOfKJMpvkOKJA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.FlCNyxoo3kOfKJMpvkOKJA:eGm5xHKweOh6XrRtNRbzSA", "OutSystemsUI_2_23", "TriggerOnSyncStart", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:FbpO1AzUzE66zg9L23vrvg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:S6IxnFTX4k6_xSaB1SWLYA", callContext.id);
// Trigger Event: OnSyncStart
return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:NVr+d_l7L0Ku37FS4mw_bw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:FlCNyxoo3kOfKJMpvkOKJA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:FlCNyxoo3kOfKJMpvkOKJA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.TriggerOnSyncStart$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._triggerOnSyncError$Action = function (syncUnitIn, errorMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerOnSyncError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.TriggerOnSyncError$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:7ttB2m5dm0WJJXYKe4r3wQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.7ttB2m5dm0WJJXYKe4r3wQ:2fOfZ3Ade+yizJ2k3PXDfg", "OutSystemsUI_2_23", "TriggerOnSyncError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:cYfVxQKmekO5KtHq4bCdbg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zc4widPCeESJmW_hUhOjtw", callContext.id);
// Trigger Event: OnSyncError
return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:bU08AO+g6k6Q3TKAYDt9wA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:7ttB2m5dm0WJJXYKe4r3wQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:7ttB2m5dm0WJJXYKe4r3wQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.TriggerOnSyncError$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onNetworkStatusChanged$Action = function (isOnlineIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnNetworkStatusChanged");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.OnNetworkStatusChanged$vars"))());
vars.value.isOnlineInLocal = isOnlineIn;
var getSyncOnOnlineJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getSyncOnOnlineJSResult = getSyncOnOnlineJSResult;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:p0vI44c1Ek24KkSPAsM_gg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.p0vI44c1Ek24KkSPAsM_gg:rV9+Bm0grWmdIaqLtKAj7A", "OutSystemsUI_2_23", "OnNetworkStatusChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:76JVsJw_ME+cWCl_ZQRUEg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:awv5UMOrb0yskStkJUM9jg", callContext.id);
getSyncOnOnlineJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_OnNetworkStatusChanged_GetSyncOnOnlineJS, "GetSyncOnOnline", "OnNetworkStatusChanged", {
SyncOnOnline: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.OnNetworkStatusChanged$getSyncOnOnlineJSResult"))();
jsNodeResult.syncOnOnlineOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SyncOnOnline, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:G8IwyMOhgEOJ6Qnf6+yN6A", callContext.id) && (vars.value.isOnlineInLocal && getSyncOnOnlineJSResult.value.syncOnOnlineOut))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:lPVnhBGiWU+eTil6P3jOTw", callContext.id);
// Execute Action: StartOfflineDataSync
OutSystemsUI_2_23Controller.default.startOfflineDataSync$Action("", false, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:F6nymmbXyEWpcAWFS4wEnw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:F6nymmbXyEWpcAWFS4wEnw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:p0vI44c1Ek24KkSPAsM_gg", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.OnNetworkStatusChanged$vars", [{
name: "IsOnline",
attrName: "isOnlineInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.OfflineDataSyncCore.OnNetworkStatusChanged$getSyncOnOnlineJSResult", [{
name: "SyncOnOnline",
attrName: "syncOnOnlineOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:2Bv35GDB1U2_P_QdWhVryA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.2Bv35GDB1U2_P_QdWhVryA:3lPEqYg+VeRvaYqPewZucg", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Eii40DOziEe_8dritvMK+w", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:0aDDvP4lLUyNDZvZBMisrw", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller_OnInitialize_InitJS, "Init", "OnInitialize", null, function ($parameters) {
}, {
Init: controller.clientActionProxies.init$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:GjSRPETX60ayqASlB2qVJw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:2Bv35GDB1U2_P_QdWhVryA", callContext.id);
}

};

Controller.prototype.onResume$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onResume$Action, callContext);

};
Controller.prototype.triggerOnSyncComplete$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnSyncComplete$Action, callContext, syncUnitIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.init$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._init$Action, callContext);

};
Controller.prototype.syncWrapper$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._syncWrapper$Action, callContext, syncUnitIn);

};
Controller.prototype.triggerOnSyncStart$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnSyncStart$Action, callContext, syncUnitIn);

};
Controller.prototype.triggerOnSyncError$Action = function (syncUnitIn, errorMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnSyncError$Action, callContext, syncUnitIn, errorMessageIn);

};
Controller.prototype.onNetworkStatusChanged$Action = function (isOnlineIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onNetworkStatusChanged$Action, callContext, isOnlineIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onSyncError$Action = function () {
return Promise.resolve();
};
Controller.prototype.onConfigure$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncComplete$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSync$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncStart$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:a5KAUBz0oD+nYy3jX8gKmw", "OutSystemsUI_2_23", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:7LQm+WCaHEi7DaA92pfz3w:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w:hIr0s5HU2q0M_sdN+kCDHg", "OutSystemsUI_2_23", "OfflineDataSyncCore", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:7LQm+WCaHEi7DaA92pfz3w", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:IUOdI7QmkEyzLmZAA68__Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/OfflineDataSyncCore On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/OfflineDataSyncCore On Destroy");
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
return OutSystemsUI_2_23Controller.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUI_2_23LanguageResources);
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.SyncOnResume = window.offlineDataSync.getSyncOnResume();
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnDestroy.UnregisterAPIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.offlineDataSync.unregisterAPI($parameters.Token);
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.Init.RegisterAPIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Token = window.offlineDataSync.registerAPI($actions.SyncWrapper, $actions.OnResume, $actions.TriggerOnSyncStart, $actions.TriggerOnSyncComplete, $actions.TriggerOnSyncError);
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncStartEventJS", [], function () {
return function ($actions, $roles, $public) {
window.offlineDataSync.triggerSyncStartEvent();
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncErrorEventOfflineJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.offlineDataSync.triggerSyncErrorEvent($parameters.ErrorMessage);
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.SuspendSyncJS", [], function () {
return function ($actions, $roles, $public) {
window.offlineDataSync.suspendSync();
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnNetworkStatusChanged.GetSyncOnOnlineJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.SyncOnOnline = window.offlineDataSync.getSyncOnOnline();
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller.OnInitialize.InitJS", [], function () {
return function ($actions, $roles, $public) {
$actions.Init();
};
});

define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"pNqidDqDcUOD1FKsjDtBzA": {
getter: function (varBag, idService) {
return varBag.getSyncOnResumeJSResult.value;
}
},
"idJdKRvsQk6pvXB+ubw_oA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iqwLbSzl40aQOxA4jncutw": {
getter: function (varBag, idService) {
return varBag.unregisterAPIJSResult.value;
}
},
"NnpaUkoy60OK58LSxM+fvA": {
getter: function (varBag, idService) {
return varBag.registerAPIJSResult.value;
}
},
"nxyJm5jw90aBg8itfNfXvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gi4+NVQjv0ea3taNkarbzQ": {
getter: function (varBag, idService) {
return varBag.securityExceptionVar.value;
}
},
"WvYZNuhra0+E8QcHd7mSgg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"_rNVoy5gskirfHpTddoezQ": {
getter: function (varBag, idService) {
return varBag.getNetworkStatusVar.value;
}
},
"2H7JMqJDYky09Bv7b+e+pg": {
getter: function (varBag, idService) {
return varBag.triggerSyncStartEventJSResult.value;
}
},
"ovxxnK25wkediVRyRJvj3w": {
getter: function (varBag, idService) {
return varBag.triggerSyncErrorEventOfflineJSResult.value;
}
},
"9_Iu1tkm8kOEr1KilaACFA": {
getter: function (varBag, idService) {
return varBag.suspendSyncJSResult.value;
}
},
"zUPlcLxU4Umwm46cWFnhPw": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wo9aZpbvgUuaG_Lff5Rxcw": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gC0MuawEY0qHJMEUZEd2iA": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mD3miAXxckKq1xqDdgLx1w": {
getter: function (varBag, idService) {
return varBag.vars.value.isOnlineInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"awv5UMOrb0yskStkJUM9jg": {
getter: function (varBag, idService) {
return varBag.getSyncOnOnlineJSResult.value;
}
},
"0aDDvP4lLUyNDZvZBMisrw": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"ytHCSkv2FESDz5DyIaUDMg": {
getter: function (varBag, idService) {
return varBag.model.variables.instanceTokenVar;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources", ["exports", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.ar", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.de", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.de-DE", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.en", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.es", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.fr", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.fr-CA", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.fr-FR", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.hi-IN", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.it-IT", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.ja-JP", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.ko-KR", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.nl", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.pt", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.pt-BR", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.zh-CN", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.zh-Hans", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.zh-Hant"], function (exports, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_ar, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_de, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_deDE, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_en, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_es, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_fr, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_frCA, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_frFR, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_hiIN, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_itIT, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_jaJP, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_koKR, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_nl, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_pt, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_ptBR, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_zhCN, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_zhHans, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_zhHant) {
return {
"ar": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_ar,
"isRTL": true
},
"de": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_de,
"isRTL": false
},
"de-DE": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_deDE,
"isRTL": false
},
"en": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_en,
"isRTL": false
},
"es": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_es,
"isRTL": false
},
"fr": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_fr,
"isRTL": false
},
"fr-CA": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_frCA,
"isRTL": false
},
"fr-FR": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_frFR,
"isRTL": false
},
"hi-IN": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_hiIN,
"isRTL": false
},
"it-IT": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_itIT,
"isRTL": false
},
"ja-JP": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_jaJP,
"isRTL": false
},
"ko-KR": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_koKR,
"isRTL": false
},
"nl": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_nl,
"isRTL": false
},
"pt": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_pt,
"isRTL": false
},
"pt-BR": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_ptBR,
"isRTL": false
},
"zh-CN": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_zhCN,
"isRTL": false
},
"zh-Hans": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_zhHans,
"isRTL": false
},
"zh-Hant": {
"translations": OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_translationsResources_zhHant,
"isRTL": false
}
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.ar", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "غير قادر على مزامنة البيانات. الجهاز ليس لديه اتصال بالشبكة."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.de", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Daten können nicht synchronisiert werden. Das Gerät hat keine Netzwerkverbindung."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.de-DE", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Daten können nicht synchronisiert werden. Das Gerät hat keine Netzwerkverbindung."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.en", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Unable to synchronize data. Device has no network connectivity."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.es", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "No se pueden sincronizar los datos. El dispositivo no tiene conectividad de red."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.fr", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Impossible de synchroniser les données. L\'appareil n\'a pas de connectivité réseau."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.fr-CA", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Impossible de synchroniser les données. L\'appareil n\'a pas de connectivité réseau."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.fr-FR", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Impossible de synchroniser les données. L\'appareil n\'a pas de connectivité réseau."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.hi-IN", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "डेटा को सिंक्रनाइज़ करने में असमर्थ। डिवाइस नेटवर्क से कनेक्टेड नहीं है।"
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.it-IT", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Impossibile sincronizzare i dati. Il dispositivo non ha connettività di rete."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.ja-JP", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "データを同期できません。 デバイスにはネットワーク接続がありません。"
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.ko-KR", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "데이터를 동기화할 수 없습니다. 장치에 네트워크 연결이 없습니다."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.nl", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Kan gegevens niet synchroniseren. Het apparaat heeft geen netwerkverbinding."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.pt", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Não é possivel a sincronização de dados pois o dispositivo não está conectado a nenhuma rede móvel ou Wi Fi."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.pt-BR", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Não é possivel a sincronização de dados pois o dispositivo não está conectado a nenhuma rede móvel ou Wi Fi."
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.zh-CN", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "无法同步数据。设备没有网络连接。"
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.zh-Hans", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "无法同步数据。设备没有网络连接。"
};
});
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$translationsResources.zh-Hant", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "無法同步數據。設備沒有網絡連接。"
};
});
