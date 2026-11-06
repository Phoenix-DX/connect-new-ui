define("UBT_AppManager.PIN.Pincode_Register.mvc$model", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.PIN.PinCode.mvc$model", "UBT_AppManager.model$Pin_LocalStorage_ItemRec", "UBT_AppManager.controller$AppManager_SetPIN_IsRegistering", "UBT_AppManager.controller$PIN_Get", "UBT_AppManager.controller$AppManager_GetAppId", "UBT_AppManager.controller$PIN_Set", "UBT_AppManager.controller$PIN_ValidateRules", "UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked", "UBT_AppManager.controller$PIN_SessionInactivity_Start"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManager_PIN_PinCode_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsFirstUse", "isFirstUseVar", "IsFirstUse", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("NewPinCode", "newPinCodeVar", "NewPinCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SwitchScreen", "switchScreenVar", "SwitchScreen", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("LocalPin", "localPinVar", "LocalPin", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.Pin_LocalStorage_ItemRec());
}, false, UBT_AppManagerModel.Pin_LocalStorage_ItemRec), 
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
Model._hasValidationWidgetsValue = UBT_AppManager_PIN_PinCode_mvcModel.hasValidationWidgets;
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

if("In_AllowBackNavigation" in inputs) {
this.variables.in_AllowBackNavigationIn = inputs.In_AllowBackNavigation;
if("_in_AllowBackNavigationInDataFetchStatus" in inputs) {
this.variables._in_AllowBackNavigationInDataFetchStatus = inputs._in_AllowBackNavigationInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "PIN.Pincode_Register");
});
define("UBT_AppManager.PIN.Pincode_Register.mvc$view", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBT_AppManager.PIN.Pincode_Register.mvc$model", "UBT_AppManager.PIN.Pincode_Register.mvc$controller", "UBT_AppManager.clientVariables", "OutSystems/ReactWidgets/Main", "UBT_AppManager.PIN.PinCode.mvc$view", "UBT_AppManager.model$Pin_LocalStorage_ItemRec", "UBT_AppManager.controller$AppManager_SetPIN_IsRegistering", "UBT_AppManager.controller$PIN_Get", "UBT_AppManager.controller$AppManager_GetAppId", "UBT_AppManager.controller$PIN_Set", "UBT_AppManager.controller$PIN_ValidateRules", "UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked", "UBT_AppManager.controller$PIN_SessionInactivity_Start"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, UBT_AppManager_PIN_Pincode_Register_mvc_model, UBT_AppManager_PIN_Pincode_Register_mvc_controller, UBT_AppManagerClientVariables, OSWidgets, UBT_AppManager_PIN_PinCode_mvc_view) {
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
        View.displayName = "PIN.Pincode_Register";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBT_AppManager_PIN_PinCode_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBT_AppManager_PIN_Pincode_Register_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBT_AppManager_PIN_Pincode_Register_mvc_controller;
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
align: /*Center*/ 2,
animate: false,
style: "pincode-registration",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBT_AppManager_PIN_PinCode_mvc_view, {
inputs: {
In_AllowBackNavigation: model.variables.in_AllowBackNavigationIn,
_in_AllowBackNavigationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AllowBackNavigationInDataFetchStatus),
In_ExtendedClasses: model.variables.in_ExtendedClassesIn,
_in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus),
Length: model.variables.in_PinLengthIn,
_lengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PinLengthInDataFetchStatus)
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerBar,
_idProps: {
service: idService,
name: "HeaderBar"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
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
return [$if(model.variables.isFirstUseVar, false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.registrationText,
_idProps: {
service: idService,
name: "RegistrationText"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.confirmationText,
_idProps: {
service: idService,
name: "ConfirmationText"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}),
option: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.optionPlaceholder,
style: "pincode-button",
_idProps: {
service: idService,
name: "OptionPlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
erasePlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.erasePlaceholder,
_idProps: {
service: idService,
name: "ErasePlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_BottomKeyboard: PlaceholderContent.Empty,
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
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBT_AppManager.PIN.Pincode_Register.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_AppManager.languageResources", "UBT_AppManager.clientVariables", "UBT_AppManager.PIN.Pincode_Register.mvc$debugger", "UBT_AppManager.PIN.Pincode_Register.mvc$controller.OnSetPin.DelayChangeJS", "UBT_AppManager.PIN.Pincode_Register.mvc$controller.OnDestroy.ClearTimeOutsJS", "UBT_AppManager.model$Pin_LocalStorage_ItemRec", "UBT_AppManager.controller$AppManager_SetPIN_IsRegistering", "UBT_AppManager.controller$PIN_Get", "UBT_AppManager.controller$AppManager_GetAppId", "UBT_AppManager.controller$PIN_Set", "UBT_AppManager.controller$PIN_ValidateRules", "UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked", "UBT_AppManager.controller$PIN_SessionInactivity_Start"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, UBT_AppManagerLanguageResources, UBT_AppManagerClientVariables, UBT_AppManager_PIN_Pincode_Register_mvc_Debugger, UBT_AppManager_PIN_Pincode_Register_mvc_controller_OnSetPin_DelayChangeJS, UBT_AppManager_PIN_Pincode_Register_mvc_controller_OnDestroy_ClearTimeOutsJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
showConfirm$Action: function () {
return controller.executeActionInsideJSNode(controller._showConfirm$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "ShowConfirm");
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
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:l06KY77NOECZoCHDu5P0Hg:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Pf8uys6Lq0uTcWk8_yBjfA/ClientActions.l06KY77NOECZoCHDu5P0Hg:HKGaeFBnb74T8QC7k0wCPw", "UBT_AppManager", "PinCodeKeyPressed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:OfOsM_zXq0KrtS8QB0UIJw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:iEw7eMX_5k6TVuinA4JIFA", callContext.id);
// Trigger Event: KeyPressed
return controller.keyPressed$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:6LQc1rVXRU6H+o9tvon8jA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:l06KY77NOECZoCHDu5P0Hg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:l06KY77NOECZoCHDu5P0Hg", callContext.id);
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
var pIN_GetVar = new OS.DataTypes.VariableHolder();
var appManager_GetAppIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.pIN_GetVar = pIN_GetVar;
varBag.appManager_GetAppIdVar = appManager_GetAppIdVar;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:dTRtaJVO4UG6yrNUtLUvOg:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Pf8uys6Lq0uTcWk8_yBjfA/ClientActions.dTRtaJVO4UG6yrNUtLUvOg:Z9Zym0T2h0y34GvIXDna6w", "UBT_AppManager", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ramwl2f_NU2Z0e_vWJUl+Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:HSXluiNx7EiMVUKV47E+Jw", callContext.id);
// Execute Action: AppManager_GetAppId
appManager_GetAppIdVar.value = UBT_AppManagerController.default.appManager_GetAppId$Action(callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Wtme3l5Aq06BzYQM_+sWJA", callContext.id);
// LocalPin.AppId = AppManager_GetAppId.GetAppId
model.variables.localPinVar.appIdAttr = appManager_GetAppIdVar.value.getAppIdOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Wtme3l5Aq06BzYQM_+sWJA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalPin.UserId = GetUserId
model.variables.localPinVar.userIdAttr = OS.BuiltinFunctions.getUserId();
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:NXMJaIDWp0eawokb+ip3Bg", callContext.id);
// Execute Action: PIN_Get
pIN_GetVar.value = UBT_AppManagerController.default.pIN_Get$Action(model.variables.localPinVar.userIdAttr, model.variables.localPinVar.appIdAttr, callContext);

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ioYIlOWkkUCy+o6Qrp+yRw", callContext.id);
// LocalPin.PINCode = PIN_Get.Pin_LocalStorage_Item.PINCode
model.variables.localPinVar.pINCodeAttr = pIN_GetVar.value.pin_LocalStorage_ItemOut.pINCodeAttr;
// Logged In? 
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Ig9Qv0CUFk6Iubthndg+eA", callContext.id) && ((model.variables.localPinVar.userIdAttr) !== (OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:68kZMRqGU0qdHY9nPrbqLg", callContext.id);
// Execute Action: AppManager_SetPIN_IsRegistering
UBT_AppManagerController.default.appManager_SetPIN_IsRegistering$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:3xICUrM6H0+29UByI9EhxQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9gXG_ObHTkWowSxa85W_og", callContext.id);
// Trigger Event: UserNotLoggedIn
return controller.pinRegistrationError$Action("User not logged in.", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:nHxyZwfDPUaJ+cuAVCGXtg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:dTRtaJVO4UG6yrNUtLUvOg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:dTRtaJVO4UG6yrNUtLUvOg", callContext.id);
throw ex;

});
};
Controller.prototype._showConfirm$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ShowConfirm");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:z4aIj774n0yGAZYJZMcbFg:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Pf8uys6Lq0uTcWk8_yBjfA/ClientActions.z4aIj774n0yGAZYJZMcbFg:v9wkA9fDaWcwKeEOROC_Ew", "UBT_AppManager", "ShowConfirm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TF+5k04V_UeLHQvSF6wAMw", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:5d0UKGLvvkOd4vqCjOpzRg", callContext.id);
// IsFirstUse = False
model.variables.isFirstUseVar = false;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:UMYGv2KhFUKjDXiWiPwZHA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:z4aIj774n0yGAZYJZMcbFg", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN.Pincode_Register.OnSetPin$vars"))());
vars.value.pinCodeInLocal = pinCodeIn;
var pIN_ValidateRulesVar = new OS.DataTypes.VariableHolder();
var delayChangeJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.pIN_ValidateRulesVar = pIN_ValidateRulesVar;
varBag.delayChangeJSResult = delayChangeJSResult;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:JupOyhvM8UixgylvVApuMg:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Pf8uys6Lq0uTcWk8_yBjfA/ClientActions.JupOyhvM8UixgylvVApuMg:XEwRMlb+8ig3i9z9vtpCgQ", "UBT_AppManager", "OnSetPin", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ytsvbddEXUitKglR_5Qviw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Register pin?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:PQb2Riv5Y0WVJvrAwcpBEg", callContext.id) && model.variables.isFirstUseVar)) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:1ULTpAqfbkKFQPqrZ4eSWg", callContext.id);
// Execute Action: PIN_ValidateRules
pIN_ValidateRulesVar.value = UBT_AppManagerController.default.pIN_ValidateRules$Action(vars.value.pinCodeInLocal, callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7jiSBrmmo0imah5lgh1baA", callContext.id) && pIN_ValidateRulesVar.value.isValidOut)) {
// Set pincode
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:cU18d1TDskaFiODxSGD1wA", callContext.id);
// NewPinCode = PinCode
model.variables.newPinCodeVar = vars.value.pinCodeInLocal;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:AAU1AliOTkaJJkGplWNlKw", callContext.id);
// 1s delay before changing the title
delayChangeJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_PIN_Pincode_Register_mvc_controller_OnSetPin_DelayChangeJS, "DelayChange", "OnSetPin", {
SwitchScreen: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN.Pincode_Register.OnSetPin$delayChangeJSResult"))();
jsNodeResult.switchScreenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SwitchScreen, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
ShowConfirm: controller.clientActionProxies.showConfirm$Action
}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:l+CboRtqY0Sd6JL2yihJKA", callContext.id);
// SwitchScreen = DelayChange.SwitchScreen
model.variables.switchScreenVar = delayChangeJSResult.value.switchScreenOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mvBkRzWk1UOV9m1gJwkqqA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:izj1eQOnXUui0qIUwltM9A", callContext.id);
// Trigger Event: PinRegistrationError
return controller.pinRegistrationError$Action(pIN_ValidateRulesVar.value.messageOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:MWroNUCguk+i2aGe8WfRVQ", callContext.id);
});
}

});
} else {
// Same pin?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:q56fpU8BoEOGL4oOm+4ANw", callContext.id) && (vars.value.pinCodeInLocal === model.variables.newPinCodeVar))) {
// Set Pincode
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JnbD+FVa2023L198jPjjgw", callContext.id);
// LocalPin.PINCode = PinCode
model.variables.localPinVar.pINCodeAttr = vars.value.pinCodeInLocal;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:uATFLRUeP0mVouOM4BnjAA", callContext.id);
// Execute Action: PIN_Set
UBT_AppManagerController.default.pIN_Set$Action(model.variables.localPinVar, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:8zGF78V1xU6HtA9DCXjq4Q", callContext.id);
// Execute Action: PIN_SessionInactivity_Start
UBT_AppManagerController.default.pIN_SessionInactivity_Start$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:fwQh2oF6hEm+M5ng7I+86A", callContext.id);
// Execute Action: AppManager_SetPIN_HasUnlocked
UBT_AppManagerController.default.appManager_SetPIN_HasUnlocked$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:OuRC4WJiPkm6Z0nunuyG3Q", callContext.id);
// Trigger Event: PinRegistrationSuccess
return controller.pinRegistrationSuccess$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+N3NBl+Rekars50Sq5ZYPw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Ag_7yqiWQkaoK0ZCesfqwA", callContext.id);
// Trigger Event: PinRegistrationError_PinDoesNotMatch
return controller.pinRegistrationError$Action("Confirm PIN does not match Register PIN!", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:sD+naSjnl0yd8J6n_KviYg", callContext.id);
});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:JupOyhvM8UixgylvVApuMg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:JupOyhvM8UixgylvVApuMg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBT_AppManager.PIN.Pincode_Register.OnSetPin$vars", [{
name: "PinCode",
attrName: "pinCodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("UBT_AppManager.PIN.Pincode_Register.OnSetPin$delayChangeJSResult", [{
name: "SwitchScreen",
attrName: "switchScreenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
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
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:va1j3XGXVE2juFI1xsSAZA:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Pf8uys6Lq0uTcWk8_yBjfA/ClientActions.va1j3XGXVE2juFI1xsSAZA:DF44ajJY0PRbyGldrOks2w", "UBT_AppManager", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:VE2NTq5NJEWd7QnCnf+ATA", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:fw8R17GoTUCpPA+lqoDesQ", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_PIN_Pincode_Register_mvc_controller_OnDestroy_ClearTimeOutsJS, "ClearTimeOuts", "OnDestroy", {
SwitchScreen: OS.DataConversion.JSNodeParamConverter.to(model.variables.switchScreenVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:zMZDH0cRmU2fVFccLJ8Rkw", callContext.id);
// Execute Action: AppManager_SetPIN_IsRegistering
UBT_AppManagerController.default.appManager_SetPIN_IsRegistering$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:lDRMrc7IeUu066A52do_Ng", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:va1j3XGXVE2juFI1xsSAZA", callContext.id);
}

};

Controller.prototype.pinCodeKeyPressed$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._pinCodeKeyPressed$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.showConfirm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showConfirm$Action, callContext);

};
Controller.prototype.onSetPin$Action = function (pinCodeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onSetPin$Action, callContext, pinCodeIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.pinRegistrationSuccess$Action = function () {
return Promise.resolve();
};
Controller.prototype.keyPressed$Action = function () {
return Promise.resolve();
};
Controller.prototype.pinRegistrationError$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:EVrBUbYotE+jABIep0Ejew:/NRWebFlows.EVrBUbYotE+jABIep0Ejew:tcKb4E8x2qIhKwyUwFCtgQ", "UBT_AppManager", "PIN", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:Pf8uys6Lq0uTcWk8_yBjfA:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Pf8uys6Lq0uTcWk8_yBjfA:ZJsaNhH9Krr5Xl0HkjWYfw", "UBT_AppManager", "Pincode_Register", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Pf8uys6Lq0uTcWk8_yBjfA", callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:EVrBUbYotE+jABIep0Ejew", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "PIN/Pincode_Register On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "PIN/Pincode_Register On Destroy");
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
return UBT_AppManagerController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBT_AppManagerLanguageResources);
});
define("UBT_AppManager.PIN.Pincode_Register.mvc$controller.OnSetPin.DelayChangeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
//Delay the switch from registration to confirmation
(function() {
    var setTimeoutVar = setTimeout(function(){
        $actions.ShowConfirm();
        clearTimeout(setTimeoutVar);
    }, 0);
    
    $parameters.SwitchScreen = setTimeoutVar;
})();
};
});
define("UBT_AppManager.PIN.Pincode_Register.mvc$controller.OnDestroy.ClearTimeOutsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
(function() {
    clearTimeout($parameters.SwitchScreen);
})();
};
});

define("UBT_AppManager.PIN.Pincode_Register.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"NXMJaIDWp0eawokb+ip3Bg": {
getter: function (varBag, idService) {
return varBag.pIN_GetVar.value;
}
},
"HSXluiNx7EiMVUKV47E+Jw": {
getter: function (varBag, idService) {
return varBag.appManager_GetAppIdVar.value;
}
},
"sJ5cZGOyokas4WOcGHZDMQ": {
getter: function (varBag, idService) {
return varBag.vars.value.pinCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1ULTpAqfbkKFQPqrZ4eSWg": {
getter: function (varBag, idService) {
return varBag.pIN_ValidateRulesVar.value;
}
},
"AAU1AliOTkaJJkGplWNlKw": {
getter: function (varBag, idService) {
return varBag.delayChangeJSResult.value;
}
},
"fw8R17GoTUCpPA+lqoDesQ": {
getter: function (varBag, idService) {
return varBag.clearTimeOutsJSResult.value;
}
},
"8AGr5MhTSkWmHgTTUI0Fkg": {
getter: function (varBag, idService) {
return varBag.model.variables.isFirstUseVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nKSXVNHjG0+zQXzm18iomg": {
getter: function (varBag, idService) {
return varBag.model.variables.newPinCodeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wPASkGN7PkKGrUSCj0BsVQ": {
getter: function (varBag, idService) {
return varBag.model.variables.switchScreenVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"NxI1VgkDL0uejqN3ixUpcA": {
getter: function (varBag, idService) {
return varBag.model.variables.localPinVar;
}
},
"YiFnDVbzuUSkgSJtdoP3PA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PinLengthIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"AoBymfMpf0+AcSdKlp0GBg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0NUVTcwO7E2k+eBv9sw2rA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AllowBackNavigationIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"9vJV6YEdFkyp8XVJhl+avA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderBar"));
})(varBag.model, idService);
}
},
"+url52UVjU2T6sAXIS9z5Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderBar"));
})(varBag.model, idService);
}
},
"ERrQrEHbyUizpMaDkdngFQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitlePlaceholder"));
})(varBag.model, idService);
}
},
"hfXyL9jjM0eJ3MjWKB7H7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitlePlaceholder"));
})(varBag.model, idService);
}
},
"viLbeO6hhUKvlpPLjVjbog": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Message"));
})(varBag.model, idService);
}
},
"BHgY5R2MIke_QW1IaNDpwg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RegisterPin"));
})(varBag.model, idService);
}
},
"jt4BiJ9pQkayZPdDNnbM+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RegistrationText"));
})(varBag.model, idService);
}
},
"gpJIRYlTnU2ifbtRC2BIbA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ConfirmationText"));
})(varBag.model, idService);
}
},
"d0KtUpq3BEeEApLQe_78Rw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Option"));
})(varBag.model, idService);
}
},
"zPXS57cCJ0qryg7tYigf8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("OptionPlaceholder"));
})(varBag.model, idService);
}
},
"0v9LQ97Y_ESM05bJuQ6Vjw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ErasePlaceholder"));
})(varBag.model, idService);
}
},
"U6QoP2qofEu7G27eDt3cFQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ErasePlaceholder"));
})(varBag.model, idService);
}
},
"U1xrXL0GOkuEheQWjPnbyw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BottomKeyboard"));
})(varBag.model, idService);
}
},
"fYn5JLWqnUCrvThzWVxr4Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentPlaceholder"));
})(varBag.model, idService);
}
},
"zZR324BosUm2sERNdIUtfw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentPlaceholder"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
