define("NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "NavigationHandler.controller$LockScreenBackNavigationPriority", "NavigationHandler.controller$PreventNavigation"], function (OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [].concat(_super.attributesToDeclare.call(this));
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
Model._hasValidationWidgetsValue = NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "NavigationHandler.PreventBackNavigation");
});
define("NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$controller", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "OutSystems/ReactWidgets/Main", "NavigationHandler.controller$LockScreenBackNavigationPriority", "NavigationHandler.controller$PreventNavigation"], function (OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_model, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_controller, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, OSWidgets) {
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
        View.displayName = "NavigationHandler.PreventBackNavigation";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_controller;
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
return [React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
inputs: {
Priority: model.getCachedValue(idService.getId("UPZIfhEq0kWQ9snIMfysUw.Priority"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return NavigationHandlerController.default.lockScreenBackNavigationPriority$Action(callContext).priorityOut;
}, OS.DataTypes.DataTypes.Integer, callContext.id);
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigation$Action: function (backNavigationEventIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
return controller.preventBackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$controller", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.languageResources", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$debugger", "NavigationHandler.controller$LockScreenBackNavigationPriority", "NavigationHandler.controller$PreventNavigation"], function (OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandlerLanguageResources, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_Debugger) {
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
Controller.prototype._preventBackNavigation$Action = function (backNavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("PreventBackNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.NavigationHandler.PreventBackNavigation.PreventBackNavigation$vars"))());
vars.value.backNavigationEventInLocal = backNavigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:QkK5xf78QkStqe0sKEMpag:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw/NodesShownInESpaceTree.KwSqERLj50u+C6paFOzz2g/ClientActions.QkK5xf78QkStqe0sKEMpag:0H1KMBlQmfQyxdbM4FbHWQ", "NavigationHandler", "PreventBackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:pLwDFO30zEOXm5_7wnq9Hw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:+4Ln2qPJwESZf98hwt7jdA", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:IbHPjWr0KEyrjo1Atr8P4Q", callContext.id);
// Trigger Event: BackNavigationPrevented
return controller.backNavigationPrevented$Action(vars.value.backNavigationEventInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:wGPDYEBcekuHoMtKbfjn8A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:QkK5xf78QkStqe0sKEMpag", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:QkK5xf78QkStqe0sKEMpag", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("NavigationHandler.NavigationHandler.PreventBackNavigation.PreventBackNavigation$vars", [{
name: "BackNavigationEvent",
attrName: "backNavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.preventBackNavigation$Action = function (backNavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._preventBackNavigation$Action, callContext, backNavigationEventIn);

};
Controller.prototype.backNavigationPrevented$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:n9J+NH9oRk2hM6l4rZAcfw:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw:6z7_12WLeKELuwUmIrOJuQ", "NavigationHandler", "NavigationHandler", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:KwSqERLj50u+C6paFOzz2g:/NRWebFlows.n9J+NH9oRk2hM6l4rZAcfw/NodesShownInESpaceTree.KwSqERLj50u+C6paFOzz2g:FV8rCz_pWOdn2Jgv3zDAXw", "NavigationHandler", "PreventBackNavigation", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:KwSqERLj50u+C6paFOzz2g", callContext.id);
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:n9J+NH9oRk2hM6l4rZAcfw", callContext.id);
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
return NavigationHandlerController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, NavigationHandlerLanguageResources);
});

define("NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"9+1xMgQ30kWPmexP_r5ivA": {
getter: function (varBag, idService) {
return varBag.vars.value.backNavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
