define("NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$model", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "NavigationHandler.NavigationHandler.NavigationHandler.mvc$model", "NavigationHandler.controller$ResumeNavigation", "NavigationHandler.controller$WasNavigationPrevented", "NavigationHandler.controller$CopyClassesAcrossPortal"], function (OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel, NavigationHandler_NavigationHandler_NavigationHandler_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ShowDialog", "showDialogVar", "ShowDialog", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Event", "eventVar", "Event", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
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
Model._hasValidationWidgetsValue = (NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel.hasValidationWidgets || NavigationHandler_NavigationHandler_NavigationHandler_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConfirmationDialogs.NavigationConfirmationDialog");
});
define("NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$model", "NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$controller", "OutSystems/ReactWidgets/Main", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "NavigationHandler.NavigationHandler.NavigationHandler.mvc$view", "NavigationHandler.controller$ResumeNavigation", "NavigationHandler.controller$WasNavigationPrevented", "NavigationHandler.controller$CopyClassesAcrossPortal"], function (OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_model, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_controller, OSWidgets, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, NavigationHandler_NavigationHandler_NavigationHandler_mvc_view) {
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
        View.displayName = "ConfirmationDialogs.NavigationConfirmationDialog";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, NavigationHandler_NavigationHandler_NavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_controller;
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
extendedEvents: {
"componentDidUpdate": function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/NavigationConfirmationDialog/Root componentDidUpdate");
controller.onRootComponentDidUpdate$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "dx-confirmation-dialog",
visible: true,
_idProps: {
service: idService,
name: "Root"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Popup, {
showPopup: model.variables.showDialogVar,
style: "popup-dialog",
_idProps: {
service: idService,
name: "Popup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.dialogHeader,
style: "dx-dialog-header",
_idProps: {
service: idService,
name: "DialogHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.dialogBody,
style: "dx-dialog-body",
_idProps: {
service: idService,
name: "DialogBody"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "dx-dialog-footer",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/NavigationConfirmationDialog/Button OnClick");
controller.yes$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.buttonLabel_Confirm,
_idProps: {
service: idService,
name: "ButtonLabel_Confirm"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/NavigationConfirmationDialog/Button OnClick");
controller.no$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.buttonLabel_Dismiss,
_idProps: {
service: idService,
name: "ButtonLabel_Dismiss"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), $if(false, false, this, function () {
return [];
}, function () {
return [$if(model.variables.showDialogVar, false, this, function () {
return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigationPrevented$Action: function (backNavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/PreventBackNavigation BackNavigationPrevented");
controller.no$Action(controller.callContext(eventHandlerContext));
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
uuid: "10",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(NavigationHandler_NavigationHandler_NavigationHandler_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigation$Action: function (navigationEventIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/NavigationHandler Navigation");
return controller.onNavigation$Action(navigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "11",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$controller", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.languageResources", "NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$debugger", "NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$controller.No.NavigationCancelledByUserJS", "NavigationHandler.controller$ResumeNavigation", "NavigationHandler.controller$WasNavigationPrevented", "NavigationHandler.controller$CopyClassesAcrossPortal"], function (OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandlerLanguageResources, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_Debugger, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_controller_No_NavigationCancelledByUserJS) {
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
Controller.prototype._yes$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Yes");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:s_szUbkEKkKD157lNgkcnQ:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.3Z59ct1gg0ysThhhng+8YQ/ClientActions.s_szUbkEKkKD157lNgkcnQ:cSUGPcftQwGuLDByc+efDg", "NavigationHandler", "Yes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:46GZiG5KsUeo+ew0DBPH1Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:r5Oe6IUH1UemhOqvtNwskg", callContext.id);
// ShowDialog = False
model.variables.showDialogVar = false;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:hqgKkvq14kypjONeVbSE3w", callContext.id);
// Execute Action: ResumeNavigation
NavigationHandlerController.default.resumeNavigation$Action(model.variables.eventVar, callContext);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:ahXLiIROQ066Wi8aDGZOQg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:s_szUbkEKkKD157lNgkcnQ", callContext.id);
}

};
Controller.prototype._onNavigation$Action = function (navigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.OnNavigation$vars"))());
vars.value.navigationEventInLocal = navigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:H1JLWj3NWEmgMOf3pCz_uA:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.3Z59ct1gg0ysThhhng+8YQ/ClientActions.H1JLWj3NWEmgMOf3pCz_uA:s4LU3CHcZhp2pLwtiqVMYw", "NavigationHandler", "OnNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:_5_17rIgw0uKmva7T8BnOA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:mgSGodySZkqoj2WL_tw0ag", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return NavigationHandlerController.default.wasNavigationPrevented$Action(vars.value.navigationEventInLocal, callContext).wasPreventedOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:zpQfbcue50S6CoFs4jtM1Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Nd8dXQxM_0epFJ+657DLbA", callContext.id);
// Trigger Event: Navigation
return controller.navigation$Action(vars.value.navigationEventInLocal, callContext).then(function () {
if((OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:YLtQn8wU70Co7LWYMN02SA", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return NavigationHandlerController.default.wasNavigationPrevented$Action(vars.value.navigationEventInLocal, callContext).wasPreventedOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:sBaQ2QmIi0yKSJWtuAvLHQ", callContext.id);
// ShowDialog = True
model.variables.showDialogVar = true;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:sBaQ2QmIi0yKSJWtuAvLHQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Event = NavigationEvent
model.variables.eventVar = vars.value.navigationEventInLocal;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:zpQfbcue50S6CoFs4jtM1Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:zpQfbcue50S6CoFs4jtM1Q", callContext.id);
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:H1JLWj3NWEmgMOf3pCz_uA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:H1JLWj3NWEmgMOf3pCz_uA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.OnNavigation$vars", [{
name: "NavigationEvent",
attrName: "navigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._no$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("No");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:2V+RYgFNU0KY0aQ1wpQJLw:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.3Z59ct1gg0ysThhhng+8YQ/ClientActions.2V+RYgFNU0KY0aQ1wpQJLw:TMSJul25YGKFUvoLEuRk5g", "NavigationHandler", "No", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:bJodhefPWEmJmTUB97pkCA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:0y+6MZJ1HEGvryfrjMBJxA", callContext.id);
// ShowDialog = False
model.variables.showDialogVar = false;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:0y+6MZJ1HEGvryfrjMBJxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Event = NullObject
model.variables.eventVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:srzf8iIaTEO8y6jK0bmZcQ", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_controller_No_NavigationCancelledByUserJS, "NavigationCancelledByUser", "No", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:_rFVj3qwl0CIsPOWCarUiA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:2V+RYgFNU0KY0aQ1wpQJLw", callContext.id);
}

};
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
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:sQArbl_s+0Gh6ZNCBhrLNg:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.3Z59ct1gg0ysThhhng+8YQ/ClientActions.sQArbl_s+0Gh6ZNCBhrLNg:HmImTJEUVXumGXhKB6Texw", "NavigationHandler", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:El9+ou3T4kGuFk7zzCh45g", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:MKviBlYCmEWygHJLV9RssQ", callContext.id);
// ShowDialog = False
model.variables.showDialogVar = false;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:MKviBlYCmEWygHJLV9RssQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Event = NullObject
model.variables.eventVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Tv80+cm8XkSqbQVcTFHnaw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:sQArbl_s+0Gh6ZNCBhrLNg", callContext.id);
}

};
Controller.prototype._onRootComponentDidUpdate$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnRootComponentDidUpdate");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:nQtQ7T4dZUSne6xuhTi5PQ:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.3Z59ct1gg0ysThhhng+8YQ/ClientActions.nQtQ7T4dZUSne6xuhTi5PQ:YW2g7VOIPHInysQC+c_Qww", "NavigationHandler", "OnRootComponentDidUpdate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:tWtV7A+X_UqF3qJli8KbFA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:FJ2EKmbYGECFEMaSUAaF8A", callContext.id);
// Execute Action: CopyClassesAcrossPortal
NavigationHandlerController.default.copyClassesAcrossPortal$Action(idService.getId("Root"), idService.getId("Popup"), callContext);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:IFxkfJPhbUSL_+y20UsB7Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:nQtQ7T4dZUSne6xuhTi5PQ", callContext.id);
}

};

Controller.prototype.yes$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._yes$Action, callContext);

};
Controller.prototype.onNavigation$Action = function (navigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onNavigation$Action, callContext, navigationEventIn);

};
Controller.prototype.no$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._no$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onRootComponentDidUpdate$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRootComponentDidUpdate$Action, callContext);

};
Controller.prototype.navigation$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:pyNnvFMhr0mjQR26hR5vUg:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg:WKV33Qdm+EcHl2F3R1PHZg", "NavigationHandler", "ConfirmationDialogs", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:3Z59ct1gg0ysThhhng+8YQ:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.3Z59ct1gg0ysThhhng+8YQ:wtiMMQBFEXib0wYwkbsL_g", "NavigationHandler", "NavigationConfirmationDialog", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:3Z59ct1gg0ysThhhng+8YQ", callContext.id);
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:pyNnvFMhr0mjQR26hR5vUg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ConfirmationDialogs/NavigationConfirmationDialog On Initialize");
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
return NavigationHandlerController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, NavigationHandlerLanguageResources);
});
define("NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$controller.No.NavigationCancelledByUserJS", [], function () {
return function ($actions, $roles, $public) {
var evt = new CustomEvent("dx-navigation-cancelled-by-user");
window.dispatchEvent(evt);
};
});

define("NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Ty8tNz6Qz0uyJN43YKx75Q": {
getter: function (varBag, idService) {
return varBag.vars.value.navigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"srzf8iIaTEO8y6jK0bmZcQ": {
getter: function (varBag, idService) {
return varBag.navigationCancelledByUserJSResult.value;
}
},
"HPCBldNjh0+8DIgcClbnow": {
getter: function (varBag, idService) {
return varBag.model.variables.showDialogVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wMMQrNJ+tUmx4QjgDQRoOw": {
getter: function (varBag, idService) {
return varBag.model.variables.eventVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"GH7qRqLS7ky2+eOiJ5KI7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Root"));
})(varBag.model, idService);
}
},
"202e7DUEIE2aHLXgmOgDkw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Popup"));
})(varBag.model, idService);
}
},
"4WSKjCVUukmy9UBqmpVStQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogHeader"));
})(varBag.model, idService);
}
},
"evj4bF+ilUesSl2nosrYYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogBody"));
})(varBag.model, idService);
}
},
"NhA7FfWCjU+yjJiEjk8D0w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
})(varBag.model, idService);
}
},
"I6Vmd9xjPEOf9kv+mxST5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
