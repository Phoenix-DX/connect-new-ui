define("Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model"], function (OutSystems, Connect2_OrbitMobile_MUIModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Height", "heightVar", "Height", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("In_ErrorMessage", "in_ErrorMessageIn", "In_ErrorMessage", true, false, OS.DataTypes.DataTypes.Text, function () {
return "No information available.";
}, false), 
this.attr("_in_ErrorMessageInDataFetchStatus", "_in_ErrorMessageInDataFetchStatus", "_in_ErrorMessageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MatchMainContentHeight", "in_MatchMainContentHeightIn", "In_MatchMainContentHeight", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_MatchMainContentHeightInDataFetchStatus", "_in_MatchMainContentHeightInDataFetchStatus", "_in_MatchMainContentHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_ErrorMessage" in inputs) {
this.variables.in_ErrorMessageIn = inputs.In_ErrorMessage;
if("_in_ErrorMessageInDataFetchStatus" in inputs) {
this.variables._in_ErrorMessageInDataFetchStatus = inputs._in_ErrorMessageInDataFetchStatus;
}

}

if("In_MatchMainContentHeight" in inputs) {
this.variables.in_MatchMainContentHeightIn = inputs.In_MatchMainContentHeight;
if("_in_MatchMainContentHeightInDataFetchStatus" in inputs) {
this.variables._in_MatchMainContentHeightInDataFetchStatus = inputs._in_MatchMainContentHeightInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "UtilityFlow.ErrorScreen");
});
define("Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$model", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_model, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "UtilityFlow.ErrorScreen";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_controller;
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
extendedProperties: {
style: ("height: 40em; padding-bottom: var(--space-xl); padding-left: var(--space-xl); padding-right: var(--space-xl); padding-top: var(--space-xl);" + ((model.variables.in_MatchMainContentHeightIn) ? ((("height: " + (model.variables.heightVar).toString()) + "px;")) : ("")))
},
visible: true,
_idProps: {
service: idService,
name: "LoadMoreData"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: -27em !important;"
},
gridProperties: {
classes: "OSInline"
},
style: "error-screen-info",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_OrbitMobile_MUI.no_events.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-top-m",
value: model.variables.in_ErrorMessageIn,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ErrorMessageInDataFetchStatus)
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$debugger", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$controller.OnReady.SetHeightJS"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_Debugger, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_controller_OnReady_SetHeightJS) {
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
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var setHeightJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setHeightJSResult = setHeightJSResult;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uSBcB9HpAEaXUYD1FUrdHQ:/NRWebFlows._R8KbzSgEkapSOTkPiEO5Q/NodesShownInESpaceTree.vFs5G_ed506lMyA9sju_lQ/ClientActions.uSBcB9HpAEaXUYD1FUrdHQ:OceE6Z5p_GIHXkpySmnOHA", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:95AtZSuY1kWW25c50LZb9Q", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Lh6p27pJ+U64cMdT_zWKEQ", callContext.id) && model.variables.in_MatchMainContentHeightIn)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O9Y_6zXTkEqPCConCC6zyQ", callContext.id);
setHeightJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_controller_OnReady_SetHeightJS, "SetHeight", "OnReady", {
In_MainContentClass: OS.DataConversion.JSNodeParamConverter.to(".main-content", OS.DataTypes.DataTypes.Text),
Out_Height: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.OnReady$setHeightJSResult"))();
jsNodeResult.out_HeightOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_Height, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RDfpipQdJkiultLpWUwO4A", callContext.id);
// Height = SetHeight.Out_Height
model.variables.heightVar = setHeightJSResult.value.out_HeightOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6MnfRHGnsU2mG4UsWuTpMQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZaXeJekodEybFWn03ai2mQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uSBcB9HpAEaXUYD1FUrdHQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.OnReady$setHeightJSResult", [{
name: "Out_Height",
attrName: "out_HeightOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:_R8KbzSgEkapSOTkPiEO5Q:/NRWebFlows._R8KbzSgEkapSOTkPiEO5Q:9_3d8a+gOnFwNtAMi6YA9g", "Connect2_OrbitMobile_MUI", "UtilityFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:vFs5G_ed506lMyA9sju_lQ:/NRWebFlows._R8KbzSgEkapSOTkPiEO5Q/NodesShownInESpaceTree.vFs5G_ed506lMyA9sju_lQ:mp8RDLq8DETPVS0W_AK_Dw", "Connect2_OrbitMobile_MUI", "ErrorScreen", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vFs5G_ed506lMyA9sju_lQ", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:_R8KbzSgEkapSOTkPiEO5Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "UtilityFlow/ErrorScreen On Ready");
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
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});
define("Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$controller.OnReady.SetHeightJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.In_MainContentClass !== ""){
    $parameters.Out_Height = document.querySelector($parameters.In_MainContentClass).clientHeight;
}
};
});

define("Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"O9Y_6zXTkEqPCConCC6zyQ": {
getter: function (varBag, idService) {
return varBag.setHeightJSResult.value;
}
},
"8hsVlND18k+mrUHwDoyTDQ": {
getter: function (varBag, idService) {
return varBag.model.variables.heightVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"5QUTLubYS02hyBK_EFu5Eg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ErrorMessageIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QxLTSLu_dki6S6ILW9O5qA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MatchMainContentHeightIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"dgWgbK2WPU2FahNF83YLNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LoadMoreData"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
