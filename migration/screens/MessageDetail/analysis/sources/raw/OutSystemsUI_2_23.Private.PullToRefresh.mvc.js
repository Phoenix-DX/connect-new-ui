define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsFirstTimeUsed", "isFirstTimeUsedVar", "IsFirstTimeUsed", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsRefreshing", "isRefreshingVar", "IsRefreshing", true, false, OS.DataTypes.DataTypes.Boolean, function () {
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
return new OS.Model.ModelFactory(Model, "Private.PullToRefresh");
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$model", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Private_PullToRefresh_mvc_model, OutSystemsUI_2_23_Private_PullToRefresh_mvc_controller, OSWidgets) {
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
        View.displayName = "Private.PullToRefresh";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.PullToRefresh.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Private_PullToRefresh_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Private_PullToRefresh_mvc_controller;
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "pull-to-refresh",
visible: true,
_idProps: {
service: idService,
name: "ptr"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "genericon",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "angle-down",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Arrow"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pull-to-refresh-loading",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "spinner",
iconSize: /*FontSize*/ 0,
style: "icon fa-spin",
visible: true,
_idProps: {
service: idService,
name: "Spinner"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
role: "alert",
"aria-live": "assertive",
"aria-hidden": "true"
},
style: "pull-to-refresh-a11y wcag-hide-text",
visible: true,
_idProps: {
service: idService,
name: "ptrA11y"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isFirstTimeUsedVar, false, this, function () {
return [$if(model.variables.isRefreshingVar, false, this, function () {
return [$text(getTranslation("z4uqzQWZuUmv3PvsZHCV3A#Value", "Refreshing content"))];
}, function () {
return [$text(getTranslation("T6pRX5+uykyrtTTEslD4WQ#Value", "Content refreshed"))];
})];
}, function () {
return [];
}))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$debugger", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$controller.OnDestroy.JsDestroyWebPullToRefreshJS", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$controller.OnReady.JsInitWebPullToRefreshJS"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Private_PullToRefresh_mvc_TranslationsResources, OutSystemsUI_2_23_Private_PullToRefresh_mvc_Debugger, OutSystemsUI_2_23_Private_PullToRefresh_mvc_controller_OnDestroy_JsDestroyWebPullToRefreshJS, OutSystemsUI_2_23_Private_PullToRefresh_mvc_controller_OnReady_JsInitWebPullToRefreshJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
triggerOnContentPull$Action: function () {
return controller.executeActionInsideJSNode(controller._triggerOnContentPull$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnContentPull");
},
updateStatus$Action: function (isRefreshingCbIn) {
isRefreshingCbIn = (isRefreshingCbIn === undefined) ? false : isRefreshingCbIn;
return controller.executeActionInsideJSNode(controller._updateStatus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isRefreshingCbIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "UpdateStatus");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_2_23_Private_PullToRefresh_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._triggerOnContentPull$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerOnContentPull");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:_0laDf5__kOJhvI1_424ew:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ/ClientActions._0laDf5__kOJhvI1_424ew:62xX60XwbzUg5vgJQxlB5g", "OutSystemsUI_2_23", "TriggerOnContentPull", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:mWp1Yc50+EGwUCjACJDJqw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:HKmP3qs4C0mcJnkn9rORgg", callContext.id);
// Trigger Event: OnContentPull
return controller.onContentPull$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:TMRCSW785EauzqrECk23lg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:_0laDf5__kOJhvI1_424ew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:_0laDf5__kOJhvI1_424ew", callContext.id);
throw ex;

});
};
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:6nKSMAgHak68wO2Y9y643Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ/ClientActions.6nKSMAgHak68wO2Y9y643Q:hHTlszeFAAjA9eYSqmbqPw", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:KqoO6JGhCU62OAwlzzMyRQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:sUIZe8xHJ0SExQnX3vUkyw", callContext.id);
// Javascript node to destroy the WebPullToRefresh instance.
controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_PullToRefresh_mvc_controller_OnDestroy_JsDestroyWebPullToRefreshJS, "JsDestroyWebPullToRefresh", "OnDestroy", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:6KZmFGBufESndoXJplFdtA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:6nKSMAgHak68wO2Y9y643Q", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:xqjnsZNrekqcLnhh1HpN1w:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ/ClientActions.xqjnsZNrekqcLnhh1HpN1w:abbTDCpo_0SsPv4dIaMl4Q", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Ym7afnt11EeUcgyMBl3Bfw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:r+qiFkF9g0uPjRnDkwAnpA", callContext.id);
// Javascript node to initialize the WebPullToRefresh instance.
controller.safeExecuteJSNode(OutSystemsUI_2_23_Private_PullToRefresh_mvc_controller_OnReady_JsInitWebPullToRefreshJS, "JsInitWebPullToRefresh", "OnReady", {
PullToRefreshContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ptr"), OS.DataTypes.DataTypes.Text),
PullToRefreshA11YContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ptrA11y"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
TriggerOnContentPull: controller.clientActionProxies.triggerOnContentPull$Action,
UpdateStatus: controller.clientActionProxies.updateStatus$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:NnkT8par+UuiklF6LXV4uQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:xqjnsZNrekqcLnhh1HpN1w", callContext.id);
}

};
Controller.prototype._updateStatus$Action = function (isRefreshingCbIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("UpdateStatus");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Private.PullToRefresh.UpdateStatus$vars"))());
vars.value.isRefreshingCbInLocal = isRefreshingCbIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:W9r5ujPWq0qvD4UiyyeG9Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ/ClientActions.W9r5ujPWq0qvD4UiyyeG9Q:gW1rW0wqpTU0Gky3bftN3A", "OutSystemsUI_2_23", "UpdateStatus", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qJFfbfG9d0m5E3Fn++AZtg", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DB2M4wFWYUyemIsE6n2VXw", callContext.id);
// IsFirstTimeUsed = True
model.variables.isFirstTimeUsedVar = true;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DB2M4wFWYUyemIsE6n2VXw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsRefreshing = IsRefreshingCb
model.variables.isRefreshingVar = vars.value.isRefreshingCbInLocal;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2ndMDG1O+k2KWkr8M+PvGg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:W9r5ujPWq0qvD4UiyyeG9Q", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Private.PullToRefresh.UpdateStatus$vars", [{
name: "IsRefreshingCb",
attrName: "isRefreshingCbInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.triggerOnContentPull$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnContentPull$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.updateStatus$Action = function (isRefreshingCbIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._updateStatus$Action, callContext, isRefreshingCbIn);

};
Controller.prototype.onContentPull$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:a5KAUBz0oD+nYy3jX8gKmw", "OutSystemsUI_2_23", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:0CUMdi+WJ0GCaNq7Fn3OEQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ:zTN6jPOC22cEQk3HpOqGcQ", "OutSystemsUI_2_23", "PullToRefresh", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:0CUMdi+WJ0GCaNq7Fn3OEQ", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:IUOdI7QmkEyzLmZAA68__Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/PullToRefresh On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/PullToRefresh On Destroy");
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
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$controller.OnDestroy.JsDestroyWebPullToRefreshJS", [], function () {
return function ($actions, $roles, $public) {
WebPullToRefresh.destroy();
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$controller.OnReady.JsInitWebPullToRefreshJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var loadingFunction = function() {
    return new Promise( function( resolve, reject ) {
        setTimeout(function(){
            $actions.TriggerOnContentPull();
        }, 1000)
        resolve();
    } );
};

WebPullToRefresh.init( {
    // Pointer to function that does the loading and returns a promise
    loadingFunction: loadingFunction,
        
    // Element holding dragable content area
    contentEl: document.querySelector('.content') , 

    // Element holding pull to refresh loading area
    ptrEl: document.getElementById( $parameters.PullToRefreshContainerId ),

    // Element holding pull to refresh a11y area container
    ptrElA11y: document.getElementById( $parameters.PullToRefreshA11YContainerId ),
        
    // Element that contains the scroll bar; leave null if no container with overflow exists
    scrollEl: document.querySelector('.content'),
        
    // Number of pixels of panning until refresh 
    distanceToRefresh: 40,
        
    // Dragging resistance level
    resistance: 2.5,

    // Callback to be used to triger the internal client action that will update the status accordingly
    updateStatusCallback: $actions.UpdateStatus,
});
};
});

define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"sUIZe8xHJ0SExQnX3vUkyw": {
getter: function (varBag, idService) {
return varBag.jsDestroyWebPullToRefreshJSResult.value;
}
},
"r+qiFkF9g0uPjRnDkwAnpA": {
getter: function (varBag, idService) {
return varBag.jsInitWebPullToRefreshJSResult.value;
}
},
"zO2tx+LxVk+dlRfDe4ltOg": {
getter: function (varBag, idService) {
return varBag.vars.value.isRefreshingCbInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tMV5O_tV3E28IbL8Jc7PSQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isFirstTimeUsedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"IiG0ejlEVUeB6VlQc0Kr_A": {
getter: function (varBag, idService) {
return varBag.model.variables.isRefreshingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"qFzzMNJp9UGrqoilCiFPEA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PullToRefresh_Preview"));
})(varBag.model, idService);
}
},
"_38ICwXsa0KJTcoPIIcIkQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ptr"));
})(varBag.model, idService);
}
},
"X7xBlRUizUivZdrWXuBz9w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Arrow"));
})(varBag.model, idService);
}
},
"fmHWAkK9CEG6fwehAe9_JQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Spinner"));
})(varBag.model, idService);
}
},
"ocyFc8guPk+OKHt+K9g4gw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ptrA11y"));
})(varBag.model, idService);
}
},
"Dnerh5DKPUO4d7yoUnDzsg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HaveBeenUsed"));
})(varBag.model, idService);
}
},
"EnsJKI2OMkm97XZ6yi2Odw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShouldTextBeAdded"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources", ["exports", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.ar", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.de", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.de-DE", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.en", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.es", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.fr", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.fr-CA", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.fr-FR", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.hi-IN", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.it-IT", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.ja-JP", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.ko-KR", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.nl", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.pt", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.pt-BR", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.zh-CN", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.zh-Hans", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.zh-Hant"], function (exports, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_ar, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_de, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_deDE, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_en, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_es, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_fr, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_frCA, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_frFR, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_hiIN, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_itIT, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_jaJP, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_koKR, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_nl, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_pt, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_ptBR, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_zhCN, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_zhHans, OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_zhHant) {
return {
"ar": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_ar,
"isRTL": true
},
"de": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_de,
"isRTL": false
},
"de-DE": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_deDE,
"isRTL": false
},
"en": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_en,
"isRTL": false
},
"es": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_es,
"isRTL": false
},
"fr": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_fr,
"isRTL": false
},
"fr-CA": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_frCA,
"isRTL": false
},
"fr-FR": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_frFR,
"isRTL": false
},
"hi-IN": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_hiIN,
"isRTL": false
},
"it-IT": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_itIT,
"isRTL": false
},
"ja-JP": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_jaJP,
"isRTL": false
},
"ko-KR": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_koKR,
"isRTL": false
},
"nl": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_nl,
"isRTL": false
},
"pt": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_pt,
"isRTL": false
},
"pt-BR": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_ptBR,
"isRTL": false
},
"zh-CN": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_zhCN,
"isRTL": false
},
"zh-Hans": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_zhHans,
"isRTL": false
},
"zh-Hant": {
"translations": OutSystemsUI_2_23_Private_PullToRefresh_mvc_translationsResources_zhHant,
"isRTL": false
}
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.ar", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "تم تحديث المحتوى",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "تحديث المحتوى"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.de", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "Inhalt aktualisiert",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "Inhalte werden aktualisiert"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.de-DE", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "Inhalt aktualisiert",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "Inhalte werden aktualisiert"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.en", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "Content refreshed",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "Refreshing content"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.es", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "Contenido actualizado",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "Actualizando contenido"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.fr", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "Contenu actualisé",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "Actualisation du contenu"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.fr-CA", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "Contenu actualisé",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "Actualisation du contenu"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.fr-FR", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "Contenu actualisé",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "Actualisation du contenu"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.hi-IN", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "सामग्री ताज़ा हो गई है",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "सामग्री ताज़ा की जा रही है"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.it-IT", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "Contenuto aggiornato",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "Aggiornamento contenuti"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.ja-JP", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "コンテンツが更新されました",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "コンテンツを更新中"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.ko-KR", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "콘텐츠가 새로고침되었습니다",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "콘텐츠 새로고침 중"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.nl", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "Inhoud ververst",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "Inhoud verversen"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.pt", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "Conteúdo atualizado",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "A atualizar conteúdo"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.pt-BR", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "Conteúdo atualizado",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "Atualizando conteúdo"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.zh-CN", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "内容已刷新",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "正在刷新内容"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.zh-Hans", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "内容已刷新",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "正在刷新内容"
};
});
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$translationsResources.zh-Hant", [], function () {
return {
"T6pRX5+uykyrtTTEslD4WQ#Value": "內容已更新",
"z4uqzQWZuUmv3PvsZHCV3A#Value": "正在更新內容	"
};
});
