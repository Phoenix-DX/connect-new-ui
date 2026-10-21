define("UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "MemoryClientCache.controller", "NavigationHandler.controller", "UBTConnect_Utils.CacheControl.CacheControl.mvc$model", "MemoryClientCache.controller$PutCacheableObject", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.model$CacheControl_AllCountriesRec", "NavigationHandler.controller$AssignFromObject", "UBTConnect_Utils.referencesHealth$NavigationHandler"], function (OutSystems, UBTConnect_UtilsModel, MemoryClientCacheController, NavigationHandlerController, UBTConnect_Utils_CacheControl_CacheControl_mvcModel) {
var OS = OutSystems.Internal;

var GetCacheInfoDataActRec = (function (_super) {
__extends(GetCacheInfoDataActRec, _super);
function GetCacheInfoDataActRec(defaults) {
_super.apply(this, arguments);
}
GetCacheInfoDataActRec.attributesToDeclare = function () {
return [
this.attr("CacheControl_Response", "cacheControl_ResponseOut", "CacheControl_Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.CacheControl_AllCountriesRec());
}, true, UBTConnect_UtilsModel.CacheControl_AllCountriesRec)
].concat(_super.attributesToDeclare.call(this));
};
GetCacheInfoDataActRec.fromStructure = function (str) {
return new GetCacheInfoDataActRec(new GetCacheInfoDataActRec.RecordClass({
cacheControl_ResponseOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetCacheInfoDataActRec.init();
return GetCacheInfoDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("CacheTypeId", "cacheTypeIdVar", "CacheTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnect_UtilsModel.staticEntities.connect_CacheType.allCountries;
}, false), 
this.attr("CacheKey", "cacheKeyIn", "CacheKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_cacheKeyInDataFetchStatus", "_cacheKeyInDataFetchStatus", "_cacheKeyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("TimeToLiveSeconds", "timeToLiveSecondsIn", "TimeToLiveSeconds", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 7200;
}, false), 
this.attr("_timeToLiveSecondsInDataFetchStatus", "_timeToLiveSecondsInDataFetchStatus", "_timeToLiveSecondsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetCacheInfo", "getCacheInfoDataAct", "getCacheInfoDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCacheInfoDataActRec());
}, true, GetCacheInfoDataActRec)
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
Model._hasValidationWidgetsValue = UBTConnect_Utils_CacheControl_CacheControl_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("CacheKey" in inputs) {
this.variables.cacheKeyIn = inputs.CacheKey;
if("_cacheKeyInDataFetchStatus" in inputs) {
this.variables._cacheKeyInDataFetchStatus = inputs._cacheKeyInDataFetchStatus;
}

}

if("TimeToLiveSeconds" in inputs) {
this.variables.timeToLiveSecondsIn = inputs.TimeToLiveSeconds;
if("_timeToLiveSecondsInDataFetchStatus" in inputs) {
this.variables._timeToLiveSecondsInDataFetchStatus = inputs._timeToLiveSecondsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "CacheControl.CacheControl_AllCountries");
});
define("UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc$model", "UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CacheControl.CacheControl.mvc$view", "OutSystems/ReactWidgets/Main", "MemoryClientCache.controller$PutCacheableObject", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.model$CacheControl_AllCountriesRec", "NavigationHandler.controller$AssignFromObject", "UBTConnect_Utils.referencesHealth$NavigationHandler"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheController, NavigationHandlerController, React, OSView, UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvc_model, UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CacheControl_CacheControl_mvc_view, OSWidgets) {
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
        View.displayName = "CacheControl.CacheControl_AllCountries";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Utils_CacheControl_CacheControl_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Utils_CacheControl_CacheControl_mvc_view, {
inputs: {
TimeToLiveSeconds: model.variables.timeToLiveSecondsIn,
_timeToLiveSecondsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._timeToLiveSecondsInDataFetchStatus),
CacheTypeId: model.variables.cacheTypeIdVar,
CacheKey: model.variables.cacheKeyIn,
_cacheKeyInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cacheKeyInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onNonCacheHit$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CacheControl/CacheControl OnNonCacheHit");
return controller.cacheControlOnNonCacheHit$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onCacheHit$Action: function (objectIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CacheControl/CacheControl OnCacheHit");
return controller.cacheControlOnCacheHit$Action(objectIn, controller.callContext(eventHandlerContext));
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
define("UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.controller", "NavigationHandler.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc$debugger", "MemoryClientCache.controller$PutCacheableObject", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.model$CacheControl_AllCountriesRec", "NavigationHandler.controller$AssignFromObject", "UBTConnect_Utils.referencesHealth$NavigationHandler"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheController, NavigationHandlerController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getCacheInfo$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getCacheInfo$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getCacheInfo$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:mWH_4Fy3qkifiQ+SdOBUKw:/NRWebFlows.+IAQu1iBIk+vg5Uun_aR_Q/NodesShownInESpaceTree.ESUuRDN8c0S59Fvpkw78Gg/DataActions.mWH_4Fy3qkifiQ+SdOBUKw:rA5bWTjXfTs08SdurTL4ow", "UBTConnect_Utils", "GetCacheInfo", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "CacheControl/CacheControl_AllCountries/GetCacheInfo");
return controller.callDataAction("DataActionGetCacheInfo", "screenservices/UBTConnect_Utils/CacheControl/CacheControl_AllCountries/DataActionGetCacheInfo", "7LQdgvPE46kVqJmoX7aMIA", function (b) {
model.variables.getCacheInfoDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCacheInfoDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCacheInfoDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "CacheControl/CacheControl_AllCountries/GetCacheInfo On After Fetch");
return controller._onAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:mWH_4Fy3qkifiQ+SdOBUKw", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getCacheInfo$DataActRefresh"];
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
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:dfNwIOJNKEWl6EM97GRi8A:/NRWebFlows.+IAQu1iBIk+vg5Uun_aR_Q/NodesShownInESpaceTree.ESUuRDN8c0S59Fvpkw78Gg/ClientActions.dfNwIOJNKEWl6EM97GRi8A:uguwsUwc1ax8W9Vh9XzGsw", "UBTConnect_Utils", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YZx6rqmmFUi9YPHskRJZ4g", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:spRYO5t+LkC6mmV8_62pQA", callContext.id) && (model.variables.cacheKeyIn === ""))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1LVAQOY70UqUtfr4he36MQ", callContext.id);
// CacheKey = UniqueCacheKey
model.variables.cacheKeyIn = UBTConnect_UtilsClientVariables.getUniqueCacheKey();
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pIv5AAKKjESUuPaxvVVhgw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pIv5AAKKjESUuPaxvVVhgw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:dfNwIOJNKEWl6EM97GRi8A", callContext.id);
}

};
Controller.prototype._cacheControlOnNonCacheHit$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CacheControlOnNonCacheHit");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:O1jbT2IwWE+tJRBfKCHsHA:/NRWebFlows.+IAQu1iBIk+vg5Uun_aR_Q/NodesShownInESpaceTree.ESUuRDN8c0S59Fvpkw78Gg/ClientActions.O1jbT2IwWE+tJRBfKCHsHA:sF91Y6phnSWLGYzhZjtzXg", "UBTConnect_Utils", "CacheControlOnNonCacheHit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:++OejDs56UCxPHKXtCAJlw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vwZ0q9XRJka3cxghNsARmg", callContext.id);
// Refresh Query: GetCacheInfo
var result = controller.getCacheInfo$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:N_rXL2h89E2nHXXbrYP5Jw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:O1jbT2IwWE+tJRBfKCHsHA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:O1jbT2IwWE+tJRBfKCHsHA", callContext.id);
throw ex;

});
};
Controller.prototype._onAfterFetch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:N1DCdZMy3ESFxoRZ4h1xjw:/NRWebFlows.+IAQu1iBIk+vg5Uun_aR_Q/NodesShownInESpaceTree.ESUuRDN8c0S59Fvpkw78Gg/ClientActions.N1DCdZMy3ESFxoRZ4h1xjw:DfuyJxXqi2FTS8dzaSEheg", "UBTConnect_Utils", "OnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wNo9Rn4EeE+diWj_syzc9g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:i0v6rMaAkkGeFv4AFL0W6g", callContext.id);
// Execute Action: PutCacheableObject
MemoryClientCacheController.default.putCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(model.variables.cacheTypeIdVar), model.variables.cacheKeyIn, OS.BuiltinFunctions.toObject(model.variables.getCacheInfoDataAct.cacheControl_ResponseOut), model.variables.timeToLiveSecondsIn, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1uVwgyjJdkiwBn6MQ5zhDw", callContext.id);
// Trigger Event: Result
return controller.result$Action(model.variables.getCacheInfoDataAct.cacheControl_ResponseOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:JlrwO3d3A0WoRbNyf_z0ag", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:N1DCdZMy3ESFxoRZ4h1xjw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:N1DCdZMy3ESFxoRZ4h1xjw", callContext.id);
throw ex;

});
};
Controller.prototype._cacheControlOnCacheHit$Action = function (objectIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CacheControlOnCacheHit");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CacheControl.CacheControl_AllCountries.CacheControlOnCacheHit$vars"))());
vars.value.objectInLocal = objectIn;
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.assignFromObjectVar = assignFromObjectVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:Y0Oegk8R6EWHTV4dSpDnuw:/NRWebFlows.+IAQu1iBIk+vg5Uun_aR_Q/NodesShownInESpaceTree.ESUuRDN8c0S59Fvpkw78Gg/ClientActions.Y0Oegk8R6EWHTV4dSpDnuw:PvdAdCr23QuPMbLD72Cyfg", "UBTConnect_Utils", "CacheControlOnCacheHit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:OrgLc+GGvki_ks4q79yuSw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Ktavx8F6CkONDPSIhjlMTg", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(model.variables.getCacheInfoDataAct.cacheControl_ResponseOut), vars.value.objectInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sqW12cjkvk2CqqYUJkgWTg", callContext.id);
// Trigger Event: Result
return controller.result$Action(model.variables.getCacheInfoDataAct.cacheControl_ResponseOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sa3FJ+j7A0CxavcCWtYd6A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Y0Oegk8R6EWHTV4dSpDnuw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Y0Oegk8R6EWHTV4dSpDnuw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CacheControl.CacheControl_AllCountries.CacheControlOnCacheHit$vars", [{
name: "Object",
attrName: "objectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.cacheControlOnNonCacheHit$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cacheControlOnNonCacheHit$Action, callContext);

};
Controller.prototype.onAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch$Action, callContext);

};
Controller.prototype.cacheControlOnCacheHit$Action = function (objectIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cacheControlOnCacheHit$Action, callContext, objectIn);

};
Controller.prototype.result$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:+IAQu1iBIk+vg5Uun_aR_Q:/NRWebFlows.+IAQu1iBIk+vg5Uun_aR_Q:uEIoJ3whQP9DL3PVmvCYLA", "UBTConnect_Utils", "CacheControl", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:ESUuRDN8c0S59Fvpkw78Gg:/NRWebFlows.+IAQu1iBIk+vg5Uun_aR_Q/NodesShownInESpaceTree.ESUuRDN8c0S59Fvpkw78Gg:84IAFFgBYcDNvuNqKWDgZA", "UBTConnect_Utils", "CacheControl_AllCountries", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:ESUuRDN8c0S59Fvpkw78Gg", callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:+IAQu1iBIk+vg5Uun_aR_Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "CacheControl/CacheControl_AllCountries On Initialize");
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
return UBTConnect_UtilsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"DFSZ1KCdyEu1178MpcyDbw": {
getter: function (varBag, idService) {
return varBag.vars.value.objectInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Ktavx8F6CkONDPSIhjlMTg": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"xm18bnO7S0CA6mRJj3lzSg": {
getter: function (varBag, idService) {
return varBag.model.variables.cacheTypeIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DrGHqsnEW02kDszqBh71oA": {
getter: function (varBag, idService) {
return varBag.model.variables.cacheKeyIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"T3clwk_WAEyXdsqeZUb9Ug": {
getter: function (varBag, idService) {
return varBag.model.variables.timeToLiveSecondsIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"mWH_4Fy3qkifiQ+SdOBUKw": {
getter: function (varBag, idService) {
return varBag.model.variables.getCacheInfoDataAct;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
