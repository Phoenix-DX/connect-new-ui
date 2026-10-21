define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsProcessingData", "isProcessingDataIn", "IsProcessingData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isProcessingDataInDataFetchStatus", "_isProcessingDataInDataFetchStatus", "_isProcessingDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("IsProcessingData" in inputs) {
this.variables.isProcessingDataIn = inputs.IsProcessingData;
if("_isProcessingDataInDataFetchStatus" in inputs) {
this.variables._isProcessingDataInDataFetchStatus = inputs._isProcessingDataInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Generic_Blocks.LoadingSpinner");
});
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_LoadingSpinner_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_LoadingSpinner_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Generic_Blocks.LoadingSpinner";
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
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_LoadingSpinner_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_LoadingSpinner_mvc_controller;
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/LoadingSpinner/Root_LoadingSpinner componentDidUpdate");
controller.componentDidUpdate$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
visible: true,
_idProps: {
service: idService,
name: "Root_LoadingSpinner"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Popup, {
showPopup: model.variables.isProcessingDataIn,
style: "popup-dialog",
_idProps: {
service: idService,
name: "Popup_LoadingSpinner"
},
_widgetRecordProvider: widgetsRecordProvider,
showPopup_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isProcessingDataInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-spinner-cont",
visible: model.variables.isProcessingDataIn,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isProcessingDataInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "spinner",
iconSize: /*Twotimes*/ 1,
style: "icon orbit-spinner-icon",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "bold margin-top-base",
text: ["Loading"],
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner.mvc$debugger", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_LoadingSpinner_mvc_Debugger) {
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
Controller.prototype._componentDidUpdate$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ComponentDidUpdate");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uxrw9gVuDEWzUqfo16Bz8g:/NRWebFlows.2QjgT4U4pUyWrkx7l+Yj_Q/NodesShownInESpaceTree.DWBokbA8m0iFsJTtZP23cQ/ClientActions.uxrw9gVuDEWzUqfo16Bz8g:fARINwubUbWKIdxOVqzIpQ", "Connect2_OrbitMobile_MUI", "ComponentDidUpdate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dy5uy+jMREyJK57+id5geQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SHDoGbtdc0OsxnEyXUQ3uA", callContext.id);
// Execute Action: CopyClassesAcrossPortal
Connect2_LegacySharedController.default.copyClassesAcrossPortal$Action(idService.getId("Root_LoadingSpinner"), idService.getId("Popup_LoadingSpinner"), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vydux5liiE+Ihbzj8BA2jA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uxrw9gVuDEWzUqfo16Bz8g", callContext.id);
}

};

Controller.prototype.componentDidUpdate$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._componentDidUpdate$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2QjgT4U4pUyWrkx7l+Yj_Q:/NRWebFlows.2QjgT4U4pUyWrkx7l+Yj_Q:Zci6jLKRkxspqDpkWiLQxw", "Connect2_OrbitMobile_MUI", "Orbit_Generic_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:DWBokbA8m0iFsJTtZP23cQ:/NRWebFlows.2QjgT4U4pUyWrkx7l+Yj_Q/NodesShownInESpaceTree.DWBokbA8m0iFsJTtZP23cQ:fRfNWtJSGdnoU0w8qMP0oQ", "Connect2_OrbitMobile_MUI", "LoadingSpinner", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:DWBokbA8m0iFsJTtZP23cQ", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2QjgT4U4pUyWrkx7l+Yj_Q", callContext.id);
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
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});

define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"XmsHCLUMBU+6iaDzfKXRkg": {
getter: function (varBag, idService) {
return varBag.model.variables.isProcessingDataIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"84QQZBTAHUOG6ORqnwBYnQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Root_LoadingSpinner"));
})(varBag.model, idService);
}
},
"8eJIdeOxpEeimWko9Hu6ag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Popup_LoadingSpinner"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
