define("OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$model"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23_Utilities_TouchEvents_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Threshold", "thresholdVar", "Threshold", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 10;
}, false), 
this.attr("Velocity", "velocityVar", "Velocity", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return (new OS.DataTypes.Decimal("0.3"));
}, false), 
this.attr("WidgetId", "widgetIdIn", "WidgetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_widgetIdInDataFetchStatus", "_widgetIdInDataFetchStatus", "_widgetIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = OutSystemsUI_2_23_Utilities_TouchEvents_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("WidgetId" in inputs) {
this.variables.widgetIdIn = inputs.WidgetId;
if("_widgetIdInDataFetchStatus" in inputs) {
this.variables._widgetIdInDataFetchStatus = inputs._widgetIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Utilities.SwipeEvents");
});
define("OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$model", "OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$controller", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_model, OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_controller, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_view, OSWidgets) {
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
        View.displayName = "Utilities.SwipeEvents";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Utilities_TouchEvents_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_controller;
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
return [React.createElement(OutSystemsUI_2_23_Utilities_TouchEvents_mvc_view, {
inputs: {
WidgetId: model.variables.widgetIdIn,
_widgetIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._widgetIdInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
end$Action: function (xIn, yIn, offsetXIn, offsetYIn, timeTakenIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/TouchEvents End");
return controller.onGestureEnd$Action(offsetXIn, offsetYIn, timeTakenIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
move$Action: function (xIn, yIn, offsetXIn, offsetYIn, evtIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/TouchEvents Move");
controller.onGestureMove$Action(evtIn, controller.callContext(eventHandlerContext));
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
define("OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$translationsResources", "OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$debugger", "OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$controller.OnGestureMove.PreventDefautJS"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_TranslationsResources, OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_Debugger, OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_controller_OnGestureMove_PreventDefautJS) {
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
Controller.prototype.translationResources = OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onGestureMove$Action = function (evtIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnGestureMove");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Utilities.SwipeEvents.OnGestureMove$vars"))());
vars.value.evtInLocal = evtIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:xkf4YxAoU0CrP_H779DoLw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.qdpguMpOu0KFOWJcobb9bw/ClientActions.xkf4YxAoU0CrP_H779DoLw:k8tqKeA3pJseUBDMg5Gwtw", "OutSystemsUI_2_23", "OnGestureMove", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:HzkiahziZ0iNzG_lTgGtTQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qvndR24bMECKDVneGXzvLQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_controller_OnGestureMove_PreventDefautJS, "PreventDefaut", "OnGestureMove", {
Evt: OS.DataConversion.JSNodeParamConverter.to(vars.value.evtInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:RWXSeJIW1UOhLVM7lfeDAA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:xkf4YxAoU0CrP_H779DoLw", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Utilities.SwipeEvents.OnGestureMove$vars", [{
name: "Evt",
attrName: "evtInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onGestureEnd$Action = function (offsetXIn, offsetYIn, timeTakenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnGestureEnd");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Utilities.SwipeEvents.OnGestureEnd$vars"))());
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
vars.value.timeTakenInLocal = timeTakenIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:lDPzezgrakWBJgFd1AFeFw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.qdpguMpOu0KFOWJcobb9bw/ClientActions.lDPzezgrakWBJgFd1AFeFw:NxTE5IQFQgLAghbeGHYjCA", "OutSystemsUI_2_23", "OnGestureEnd", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ldO6b8JW_k+mqSuYpcT3FA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Swype Detected?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:mZYoUfmruEmA9Jx2VbNm+Q", callContext.id) && ((OS.BuiltinFunctions.abs(vars.value.offsetXInLocal).gt(OS.BuiltinFunctions.integerToDecimal(model.variables.thresholdVar)) || OS.BuiltinFunctions.abs(vars.value.offsetYInLocal).gt(OS.BuiltinFunctions.integerToDecimal(model.variables.thresholdVar))) && (OS.BuiltinFunctions.abs(vars.value.offsetXInLocal).div(vars.value.timeTakenInLocal).gt(model.variables.velocityVar) || OS.BuiltinFunctions.abs(vars.value.offsetYInLocal).div(vars.value.timeTakenInLocal).gt(model.variables.velocityVar))))) {
// Horizontal?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:eYOIoN540kioK_vFPKCyhg", callContext.id) && OS.BuiltinFunctions.abs(vars.value.offsetXInLocal).gt(OS.BuiltinFunctions.abs(vars.value.offsetYInLocal)))) {
// Right?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:JSgZckJC00iNdX1v5HxplA", callContext.id) && vars.value.offsetXInLocal.gt(OS.BuiltinFunctions.integerToDecimal(0)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:13OA1gBXREaEa68P7NCkCg", callContext.id);
// Trigger Event: SwipeRight
return controller.swipeRight$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:aDT0LhB7VEmTjXcD4xoLKA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:sPIzdGWP2USWMyj4SMuolA", callContext.id);
// Trigger Event: SwipeLeft
return controller.swipeLeft$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:aDT0LhB7VEmTjXcD4xoLKA", callContext.id);
});
}

});
} else {
// Down?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:R64agy032k2hGDespsQxXw", callContext.id) && vars.value.offsetYInLocal.gt(OS.BuiltinFunctions.integerToDecimal(0)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:XqWdEUClXkeU7Q5f_O5CaQ", callContext.id);
// Trigger Event: SwipeDown
return controller.swipeDown$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zSpC327tukafzDNjp0CzUw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:kGhbagDVKEe4so7OwTE_Yg", callContext.id);
// Trigger Event: SwipeUp
return controller.swipeUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zSpC327tukafzDNjp0CzUw", callContext.id);
});
}

});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:amnmdn1lYUSmznMHd78OqQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:lDPzezgrakWBJgFd1AFeFw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:lDPzezgrakWBJgFd1AFeFw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Utilities.SwipeEvents.OnGestureEnd$vars", [{
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "TimeTaken",
attrName: "timeTakenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);

Controller.prototype.onGestureMove$Action = function (evtIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onGestureMove$Action, callContext, evtIn);

};
Controller.prototype.onGestureEnd$Action = function (offsetXIn, offsetYIn, timeTakenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onGestureEnd$Action, callContext, offsetXIn, offsetYIn, timeTakenIn);

};
Controller.prototype.swipeUp$Action = function () {
return Promise.resolve();
};
Controller.prototype.swipeLeft$Action = function () {
return Promise.resolve();
};
Controller.prototype.swipeRight$Action = function () {
return Promise.resolve();
};
Controller.prototype.swipeDown$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:_j+WNB+Er0ymD9g1Fl+Pmw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw:_sU6Z6zEdfa0yPg51D1SZg", "OutSystemsUI_2_23", "Utilities", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:qdpguMpOu0KFOWJcobb9bw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.qdpguMpOu0KFOWJcobb9bw:QOT079rjuqCqoCklP7OrXg", "OutSystemsUI_2_23", "SwipeEvents", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:qdpguMpOu0KFOWJcobb9bw", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:_j+WNB+Er0ymD9g1Fl+Pmw", callContext.id);
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
return OutSystemsUI_2_23Controller.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUI_2_23LanguageResources);
});
define("OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$controller.OnGestureMove.PreventDefautJS", [], function () {
return function ($parameters, $actions, $roles, $public) {

$parameters.Evt.preventDefault();
};
});

define("OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LVQbPCuBtUa4UIgfLhCmJw": {
getter: function (varBag, idService) {
return varBag.vars.value.evtInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"qvndR24bMECKDVneGXzvLQ": {
getter: function (varBag, idService) {
return varBag.preventDefautJSResult.value;
}
},
"oS+F3HN4AkezqLIuqJ4eKA": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"QTL2Ddqxakm05h3lnLopcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"RldcYrv+pEy6Gq_Z0D2jyQ": {
getter: function (varBag, idService) {
return varBag.vars.value.timeTakenInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"PNnjGAmaEEGBScED2kTnXg": {
getter: function (varBag, idService) {
return varBag.model.variables.thresholdVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ziRbgmMNUUSGSldvukSApQ": {
getter: function (varBag, idService) {
return varBag.model.variables.velocityVar;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"6Ykcn30Tw0+M8Dnml8CcwA": {
getter: function (varBag, idService) {
return varBag.model.variables.widgetIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
