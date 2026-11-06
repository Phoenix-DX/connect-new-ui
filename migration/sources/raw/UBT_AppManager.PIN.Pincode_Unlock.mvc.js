define("UBT_AppManager.PIN.Pincode_Unlock.mvc$model", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.PIN.PinCode.mvc$model", "UBT_AppManager.PIN.InactivityTimer.mvc$model", "UBT_AppManager.model$Pin_LocalStorage_ItemRec", "UBT_AppManager.controller$AppManager_SetPIN_IsLocked", "UBT_AppManager.controller$PIN_Get", "UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked", "UBT_AppManager.controller$AppManager_GetAppId", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_PIN_PinCode_mvcModel, UBT_AppManager_PIN_InactivityTimer_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("LocalPin", "localPinVar", "LocalPin", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.Pin_LocalStorage_ItemRec());
}, false, UBT_AppManagerModel.Pin_LocalStorage_ItemRec), 
this.attr("LastForceVisible", "lastForceVisibleVar", "LastForceVisible", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_PinLength", "in_PinLengthIn", "In_PinLength", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_PinLengthInDataFetchStatus", "_in_PinLengthInDataFetchStatus", "_in_PinLengthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClasses", "in_ExtendedClassesIn", "In_ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ForceVisible", "in_ForceVisibleIn", "In_ForceVisible", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ForceVisibleInDataFetchStatus", "_in_ForceVisibleInDataFetchStatus", "_in_ForceVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_AllowBackNavigation", "in_AllowBackNavigationIn", "In_AllowBackNavigation", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_AllowBackNavigationInDataFetchStatus", "_in_AllowBackNavigationInDataFetchStatus", "_in_AllowBackNavigationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (UBT_AppManager_PIN_PinCode_mvcModel.hasValidationWidgets || UBT_AppManager_PIN_InactivityTimer_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_PinLength" in inputs) {
this.variables.in_PinLengthIn = inputs.In_PinLength;
if("_in_PinLengthInDataFetchStatus" in inputs) {
this.variables._in_PinLengthInDataFetchStatus = inputs._in_PinLengthInDataFetchStatus;
}

}

if("In_ExtendedClasses" in inputs) {
this.variables.in_ExtendedClassesIn = inputs.In_ExtendedClasses;
if("_in_ExtendedClassesInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClassesInDataFetchStatus = inputs._in_ExtendedClassesInDataFetchStatus;
}

}

if("In_ForceVisible" in inputs) {
this.variables.in_ForceVisibleIn = inputs.In_ForceVisible;
if("_in_ForceVisibleInDataFetchStatus" in inputs) {
this.variables._in_ForceVisibleInDataFetchStatus = inputs._in_ForceVisibleInDataFetchStatus;
}

}

if("In_AllowBackNavigation" in inputs) {
this.variables.in_AllowBackNavigationIn = inputs.In_AllowBackNavigation;
if("_in_AllowBackNavigationInDataFetchStatus" in inputs) {
this.variables._in_AllowBackNavigationInDataFetchStatus = inputs._in_AllowBackNavigationInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "PIN.Pincode_Unlock");
});
define("UBT_AppManager.PIN.Pincode_Unlock.mvc$view", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBT_AppManager.PIN.Pincode_Unlock.mvc$model", "UBT_AppManager.PIN.Pincode_Unlock.mvc$controller", "UBT_AppManager.clientVariables", "OutSystems/ReactWidgets/Main", "UBT_AppManager.PIN.PinCode.mvc$view", "UBT_AppManager.PIN.InactivityTimer.mvc$view", "UBT_AppManager.model$Pin_LocalStorage_ItemRec", "UBT_AppManager.controller$AppManager_SetPIN_IsLocked", "UBT_AppManager.controller$PIN_Get", "UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked", "UBT_AppManager.controller$AppManager_GetAppId", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, UBT_AppManager_PIN_Pincode_Unlock_mvc_model, UBT_AppManager_PIN_Pincode_Unlock_mvc_controller, UBT_AppManagerClientVariables, OSWidgets, UBT_AppManager_PIN_PinCode_mvc_view, UBT_AppManager_PIN_InactivityTimer_mvc_view) {
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
        View.displayName = "PIN.Pincode_Unlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBT_AppManager_PIN_PinCode_mvc_view, UBT_AppManager_PIN_InactivityTimer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBT_AppManager_PIN_Pincode_Unlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBT_AppManager_PIN_Pincode_Unlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.in_ForceVisibleIn || (UBT_AppManagerClientVariables.getPIN_SessionInactivity_Use() && UBT_AppManagerClientVariables.getPIN_IsLocked())), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pincode-unlock",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBT_AppManager_PIN_PinCode_mvc_view, {
inputs: {
Length: model.variables.in_PinLengthIn,
_lengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PinLengthInDataFetchStatus),
In_ExtendedClasses: model.variables.in_ExtendedClassesIn,
_in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus),
In_AllowBackNavigation: model.variables.in_AllowBackNavigationIn,
_in_AllowBackNavigationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AllowBackNavigationInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
keyPressed$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode KeyPressed");
return controller.pinCodeKeyPressed$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
setPin$Action: function (ubtpincodeIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode SetPin");
return controller.onSetPin$Action(ubtpincodeIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
pincodeChange$Action: function (inputLengthIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode PincodeChange");
controller.pincodeChange$Action(inputLengthIn, controller.callContext(eventHandlerContext));
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
headerBar: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerBar,
_idProps: {
service: idService,
name: "HeaderBar"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
titlePlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.titlePlaceholder,
_idProps: {
service: idService,
name: "TitlePlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
message: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.unlockText,
_idProps: {
service: idService,
name: "UnlockText"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
option: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.option,
_idProps: {
service: idService,
name: "Option"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
erasePlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.eraseButton,
_idProps: {
service: idService,
name: "EraseButton"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_BottomKeyboard: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_BottomKeyboard,
_idProps: {
service: idService,
name: "Placeholder_BottomKeyboard"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
contentPlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.contentPlaceholder,
style: "content-placeholder",
_idProps: {
service: idService,
name: "ContentPlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}))];
}, function () {
return [React.createElement(UBT_AppManager_PIN_InactivityTimer_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
timeout$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/InactivityTimer Timeout");
return controller.onTimeout$Action(controller.callContext(eventHandlerContext));
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
uuid: "9",
alias: "2"
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
define("UBT_AppManager.PIN.Pincode_Unlock.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.languageResources", "UBT_AppManager.clientVariables", "UBT_AppManager.PIN.Pincode_Unlock.mvc$debugger", "UBT_AppManager.PIN.Pincode_Unlock.mvc$controller.OnInitialize.GetPinUnlockCallbackJS", "UBT_AppManager.model$Pin_LocalStorage_ItemRec", "UBT_AppManager.controller$AppManager_SetPIN_IsLocked", "UBT_AppManager.controller$PIN_Get", "UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked", "UBT_AppManager.controller$AppManager_GetAppId", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerLanguageResources, UBT_AppManagerClientVariables, UBT_AppManager_PIN_Pincode_Unlock_mvc_Debugger, UBT_AppManager_PIN_Pincode_Unlock_mvc_controller_OnInitialize_GetPinUnlockCallbackJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
onUnlockSuccess$Action: function () {
return controller.executeActionInsideJSNode(controller._onUnlockSuccess$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnUnlockSuccess");
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
Controller.prototype._pinCodeKeyPressed$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("PinCodeKeyPressed");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:4sHPF8LvJ0O5i3XEt3+xzg:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.AggerCEQdU2erkG+i0eBuw/ClientActions.4sHPF8LvJ0O5i3XEt3+xzg:tN_HoMZMc1+4lbJ4vQklLA", "UBT_AppManager", "PinCodeKeyPressed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:l8WC2amgU0yk2IMxTq67wA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9LOsl307sEq+VOgi2P98Xg", callContext.id);
// Trigger Event: KeyPressed
return controller.keyPressed$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:hkx+VASFVUOHGvlvVBjp3A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:4sHPF8LvJ0O5i3XEt3+xzg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:4sHPF8LvJ0O5i3XEt3+xzg", callContext.id);
throw ex;

});
};
Controller.prototype._action_HandleForceVisible$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_HandleForceVisible");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:Y4U3LTY2VUyrW+N7EfuN8Q:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.AggerCEQdU2erkG+i0eBuw/ClientActions.Y4U3LTY2VUyrW+N7EfuN8Q:5bALZ1ik_7vVmFaveKf+6Q", "UBT_AppManager", "Action_HandleForceVisible", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:AwKmYw+fnkSkk6nNO6QpgA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:qH1dKhMUWUiEccRKz5bMYw", callContext.id);
// LastForceVisible = In_ForceVisible
model.variables.lastForceVisibleVar = model.variables.in_ForceVisibleIn;
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7_VI25v8xka5EwkNN+0egQ", callContext.id) && model.variables.lastForceVisibleVar)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:daxHhHbfSkC0VwPZOa4KCQ", callContext.id);
// Execute Action: AppManager_SetPIN_IsLocked
UBT_AppManagerController.default.appManager_SetPIN_IsLocked$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:C68dMhKe+0Obn4g7fxHFMA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:C68dMhKe+0Obn4g7fxHFMA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Y4U3LTY2VUyrW+N7EfuN8Q", callContext.id);
}

};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:2tHBXh4HbEGA3LHeQK5XCA:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.AggerCEQdU2erkG+i0eBuw/ClientActions.2tHBXh4HbEGA3LHeQK5XCA:D0YBUPp7nBmwZTRdwQRdzw", "UBT_AppManager", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PNH5L4+GGkmCra1L0avnBA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wYUlRbKj1UK0N5XNUnOKMw", callContext.id) && ((model.variables.in_ForceVisibleIn) !== (model.variables.lastForceVisibleVar)))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:4L5N5uHCNk21KyDYF4t7zg", callContext.id);
// Execute Action: Action_HandleForceVisible
controller._action_HandleForceVisible$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TZinsGEeDEuCuhyLF2CcTQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TZinsGEeDEuCuhyLF2CcTQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:2tHBXh4HbEGA3LHeQK5XCA", callContext.id);
}

};
Controller.prototype._onSetPin$Action = function (pinCodeIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnSetPin");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN.Pincode_Unlock.OnSetPin$vars"))());
vars.value.pinCodeInLocal = pinCodeIn;
var pIN_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.pIN_GetVar = pIN_GetVar;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:74gDjJiK1ku6C5jxH9QWpg:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.AggerCEQdU2erkG+i0eBuw/ClientActions.74gDjJiK1ku6C5jxH9QWpg:v44JVHhUzIhoncxz6JV5kg", "UBT_AppManager", "OnSetPin", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nzH796i7hk61tCnEJa6DzA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:oakHFKX1k0S1_M8LGbBCDA", callContext.id);
// Execute Action: PIN_Get
pIN_GetVar.value = UBT_AppManagerController.default.pIN_Get$Action(model.variables.localPinVar.userIdAttr, model.variables.localPinVar.appIdAttr, callContext);

// Logged In? 
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:XIvn0+CV9UK+ilO+QHGExQ", callContext.id) && ((model.variables.localPinVar.userIdAttr) !== (OS.BuiltinFunctions.nullIdentifier())))) {
// User Found?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:w9Ir_UeUzUWVb3ZdhsLzDg", callContext.id) && pIN_GetVar.value.hasPinOut)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:sFJnI__L9EWBXjSRM6oDvA", callContext.id);
// ExistingPin = PIN_Get.Pin_LocalStorage_Item.PINCode
vars.value.existingPinVar = pIN_GetVar.value.pin_LocalStorage_ItemOut.pINCodeAttr;
// Pin Exists?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:AtQgE6YJK0uRFt6jHiq7yg", callContext.id) && ((OS.BuiltinFunctions.trim(vars.value.existingPinVar)) !== ("")))) {
// Correct pin?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lzGDOmV88Eq76BcleysAkA", callContext.id) && (vars.value.existingPinVar === vars.value.pinCodeInLocal))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:263raMOLfUSGFfrKv03RuQ", callContext.id);
// Execute Action: OnUnlockSuccess
return controller._onUnlockSuccess$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2aEvnEHE9E+MexQMdfduag", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:LDkwkIypKEKpEjnakgUQpg", callContext.id);
// Trigger Event: PinDoesntMatch
return controller.pinUnlockError$Action("Pin does not match", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:uhk86L3kb0+6U8hEQcigrQ", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:IAxjDurXq06jtrX1FjmWww", callContext.id);
// Trigger Event: PinNotConfigured
return controller.pinUnlockError$Action("PIN not configured", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:RzEvILaXLU+KZemMDQoocA", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:e5mBvzlweku+8w9Ame1DAA", callContext.id);
// Trigger Event: UserNotFound
return controller.pinUnlockError$Action("User not found", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wcwg0Mej9ke1++ZJPyc28Q", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Jo5_D7sonkOlpLsMkDmvFg", callContext.id);
// Trigger Event: UserNotLoggedIn
return controller.pinUnlockError$Action("User not logged in.", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:kTefK2S7eEaXf3FI_HtNZg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:74gDjJiK1ku6C5jxH9QWpg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:74gDjJiK1ku6C5jxH9QWpg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBT_AppManager.PIN.Pincode_Unlock.OnSetPin$vars", [{
name: "PinCode",
attrName: "pinCodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExistingPin",
attrName: "existingPinVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onUnlockSuccess$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnUnlockSuccess");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:yD0hqKBEbkqX68cTfEtnVg:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.AggerCEQdU2erkG+i0eBuw/ClientActions.yD0hqKBEbkqX68cTfEtnVg:yMDEMygV0nos29Ke9jUw4g", "UBT_AppManager", "OnUnlockSuccess", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Nn8k0dfKZEOKR+7apcieXw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:m0m_FrRgpEOga8TRFLmEBg", callContext.id);
// Trigger Event: PinUnlockSuccess
return controller.pinUnlockSuccess$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:LImhZkVIvUSn9nz7Tb_BFw", callContext.id);
// Execute Action: AppManager_SetPIN_HasUnlocked
UBT_AppManagerController.default.appManager_SetPIN_HasUnlocked$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WW+Y4bJqhEG1p6ze6dlm1A", callContext.id);
// Execute Action: AppManager_SetPIN_IsLocked
UBT_AppManagerController.default.appManager_SetPIN_IsLocked$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:pOuAB4jXoEOHumcv57aHkg", callContext.id);
// LastForceVisible = False
model.variables.lastForceVisibleVar = false;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:CPYrIP45BUu_bAKLqR+w_A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:yD0hqKBEbkqX68cTfEtnVg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:yD0hqKBEbkqX68cTfEtnVg", callContext.id);
throw ex;

});
};
Controller.prototype._onTimeout$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnTimeout");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:C7dO4wCS2kihQI5ZEkKP+g:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.AggerCEQdU2erkG+i0eBuw/ClientActions.C7dO4wCS2kihQI5ZEkKP+g:znGHs7orM7v_KJryknytHQ", "UBT_AppManager", "OnTimeout", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:jxIJVji7nkaTcuUtid_TXw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:bVAyN8RgSEWYXsQFqk6LVg", callContext.id);
// Trigger Event: Timeout
return controller.timeout$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:klInVI3QyEaXkuLfxUE3mw", callContext.id);
// Execute Action: AppManager_SetPIN_IsLocked
UBT_AppManagerController.default.appManager_SetPIN_IsLocked$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:tHKXa868G0al3fdPB3aY7Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:C7dO4wCS2kihQI5ZEkKP+g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:C7dO4wCS2kihQI5ZEkKP+g", callContext.id);
throw ex;

});
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
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var appManager_GetAppIdVar = new OS.DataTypes.VariableHolder();
var pIN_GetVar = new OS.DataTypes.VariableHolder();
var getPinUnlockCallbackJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.appManager_GetAppIdVar = appManager_GetAppIdVar;
varBag.pIN_GetVar = pIN_GetVar;
varBag.getPinUnlockCallbackJSResult = getPinUnlockCallbackJSResult;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:mCa79fYm2EGHGjdLIP607Q:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.AggerCEQdU2erkG+i0eBuw/ClientActions.mCa79fYm2EGHGjdLIP607Q:0zq9h9NlL_kWXwG3pDjupw", "UBT_AppManager", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nq4jcTPxS0KsjZKLkpI74w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:DA8jaF4ImEaRzkOrdWRpPQ", callContext.id) && (OS.BuiltinFunctions.getUserId() === OS.BuiltinFunctions.nullIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:2kcQBD7_+kedbDm6XpGiyQ", callContext.id);
// Raise Error: NotRegistered
throw new OS.Exceptions.Exceptions.NotRegisteredException("NotRegistered", "User Not Logged In");
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PZFqVOvhEU+LscByXs9B8w", callContext.id);
// Execute Action: Action_HandleForceVisible
controller._action_HandleForceVisible$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:udHDLUF0REiq1bnX4BsSRA", callContext.id);
// Execute Action: AppManager_GetAppId
appManager_GetAppIdVar.value = UBT_AppManagerController.default.appManager_GetAppId$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KSHYNmu680O1GB8zIybR1A", callContext.id);
// LocalPin.AppId = AppManager_GetAppId.GetAppId
model.variables.localPinVar.appIdAttr = appManager_GetAppIdVar.value.getAppIdOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:KSHYNmu680O1GB8zIybR1A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalPin.UserId = GetUserId
model.variables.localPinVar.userIdAttr = OS.BuiltinFunctions.getUserId();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:j2+PvPfKvkebzRTwAz9B9A", callContext.id);
// Execute Action: PIN_Get
pIN_GetVar.value = UBT_AppManagerController.default.pIN_Get$Action(model.variables.localPinVar.userIdAttr, model.variables.localPinVar.appIdAttr, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:kfxaJpulxki41Q9smBnXmw", callContext.id);
// LocalPin.PINCode = PIN_Get.Pin_LocalStorage_Item.PINCode
model.variables.localPinVar.pINCodeAttr = pIN_GetVar.value.pin_LocalStorage_ItemOut.pINCodeAttr;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:POe6TnAMDUeU+WdfNGFhMA", callContext.id);
getPinUnlockCallbackJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_PIN_Pincode_Unlock_mvc_controller_OnInitialize_GetPinUnlockCallbackJS, "GetPinUnlockCallback", "OnInitialize", {
PinUnlockCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN.Pincode_Unlock.OnInitialize$getPinUnlockCallbackJSResult"))();
jsNodeResult.pinUnlockCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.PinUnlockCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OnUnlockSuccess: controller.clientActionProxies.onUnlockSuccess$Action
}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:0DYor9AhHUy8KcMLcNlWbw", callContext.id);
// Execute Action: AppManager_JSUtils_ElementCache_SetObjProperty
UBT_AppManagerController.default.appManager_JSUtils_ElementCache_SetObjProperty$Action(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property.obj_PinUnlockCallback, getPinUnlockCallbackJSResult.value.pinUnlockCallbackOut, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lLxgp2sKzk+FrqoJUTVQ1w", callContext.id);
}

}).catch(function (ex) {
OS.Logger.trace("Pincode_Unlock.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WvL+MFfL80CtptiPDafQig", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TK0jI+6nj0OpoQ1h396CWQ", callContext.id);
// Trigger Event: UserLoggedOut
return controller.userLoggedOut$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:uqETivzRME+inOE_3Pv3tA", callContext.id);
return OS.Flow.returnAsync();

});
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:mCa79fYm2EGHGjdLIP607Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:mCa79fYm2EGHGjdLIP607Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBT_AppManager.PIN.Pincode_Unlock.OnInitialize$getPinUnlockCallbackJSResult", [{
name: "PinUnlockCallback",
attrName: "pinUnlockCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.pinCodeKeyPressed$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._pinCodeKeyPressed$Action, callContext);

};
Controller.prototype.action_HandleForceVisible$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_HandleForceVisible$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onSetPin$Action = function (pinCodeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onSetPin$Action, callContext, pinCodeIn);

};
Controller.prototype.onUnlockSuccess$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onUnlockSuccess$Action, callContext);

};
Controller.prototype.onTimeout$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onTimeout$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.userLoggedOut$Action = function () {
return Promise.resolve();
};
Controller.prototype.timeout$Action = function () {
return Promise.resolve();
};
Controller.prototype.pincodeChange$Action = function () {
return Promise.resolve();
};
Controller.prototype.pinUnlockError$Action = function () {
return Promise.resolve();
};
Controller.prototype.keyPressed$Action = function () {
return Promise.resolve();
};
Controller.prototype.pinUnlockSuccess$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:EVrBUbYotE+jABIep0Ejew:/NRWebFlows.EVrBUbYotE+jABIep0Ejew:tcKb4E8x2qIhKwyUwFCtgQ", "UBT_AppManager", "PIN", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:AggerCEQdU2erkG+i0eBuw:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.AggerCEQdU2erkG+i0eBuw:7DTfDZEt0AEsIR7235_uCw", "UBT_AppManager", "Pincode_Unlock", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:AggerCEQdU2erkG+i0eBuw", callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:EVrBUbYotE+jABIep0Ejew", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "PIN/Pincode_Unlock On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "PIN/Pincode_Unlock On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return UBT_AppManagerController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBT_AppManagerLanguageResources);
});
define("UBT_AppManager.PIN.Pincode_Unlock.mvc$controller.OnInitialize.GetPinUnlockCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.PinUnlockCallback = $actions.OnUnlockSuccess
};
});

define("UBT_AppManager.PIN.Pincode_Unlock.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Sc4QUljNn0CSTeyH+jz1Nw": {
getter: function (varBag, idService) {
return varBag.vars.value.existingPinVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rQprnDbxpk+zvhyRYco4rQ": {
getter: function (varBag, idService) {
return varBag.vars.value.pinCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oakHFKX1k0S1_M8LGbBCDA": {
getter: function (varBag, idService) {
return varBag.pIN_GetVar.value;
}
},
"WvL+MFfL80CtptiPDafQig": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"udHDLUF0REiq1bnX4BsSRA": {
getter: function (varBag, idService) {
return varBag.appManager_GetAppIdVar.value;
}
},
"j2+PvPfKvkebzRTwAz9B9A": {
getter: function (varBag, idService) {
return varBag.pIN_GetVar.value;
}
},
"POe6TnAMDUeU+WdfNGFhMA": {
getter: function (varBag, idService) {
return varBag.getPinUnlockCallbackJSResult.value;
}
},
"E2lV3Z_wrkuVzKrtE5gMCw": {
getter: function (varBag, idService) {
return varBag.model.variables.localPinVar;
}
},
"OydpPNm+vkOkZshfiuDy5Q": {
getter: function (varBag, idService) {
return varBag.model.variables.lastForceVisibleVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"VK5PNpdf3k+Vneggim0Leg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PinLengthIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"BZRIf0KHkkSSaLee_Lb7vg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TbTOlDDQhk2q1iRLKoNWmw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ForceVisibleIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"R66YqAwVv0Cjup0sczh8Fw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AllowBackNavigationIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"eMwJY_BEbk2D1_zsWc2oDA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderBar"));
})(varBag.model, idService);
}
},
"i9d2rhylkkOZyVXAxnuXHA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderBar"));
})(varBag.model, idService);
}
},
"mxDxeBxmXUi7JRZnfHQ9vg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitlePlaceholder"));
})(varBag.model, idService);
}
},
"7224Jq53NUqUrgC9JApT+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitlePlaceholder"));
})(varBag.model, idService);
}
},
"prI6Di5DiEKSnbpshycH1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Message"));
})(varBag.model, idService);
}
},
"wTbiLy9vSEme3Uj3SvGPfw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("UnlockText"));
})(varBag.model, idService);
}
},
"_SE_sQtuk025rJ5ZHQYSAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Option"));
})(varBag.model, idService);
}
},
"vQt70BfRT0S8e6iFCaHFzg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Option"));
})(varBag.model, idService);
}
},
"0+bs9bA5kE+5WEARWvy2fQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ErasePlaceholder"));
})(varBag.model, idService);
}
},
"mHTaRuNMO023yvtK9bBxNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("EraseButton"));
})(varBag.model, idService);
}
},
"gnATyfvJz0yJCTX9cVRfow": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BottomKeyboard"));
})(varBag.model, idService);
}
},
"x0WD+y2exEiOY3wLs95E8g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BottomKeyboard"));
})(varBag.model, idService);
}
},
"gT__lZUYBk6LTXev5V3vlQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentPlaceholder"));
})(varBag.model, idService);
}
},
"ry1rsppR5UCdFgzRO8eRqA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentPlaceholder"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
