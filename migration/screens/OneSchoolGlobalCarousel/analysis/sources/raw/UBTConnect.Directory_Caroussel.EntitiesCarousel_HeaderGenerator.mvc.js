define("UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.model$HeaderListList", "UBTConnect.controller$Get_CurrentEntityHeader"], function (OutSystems, UBTConnectModel, UBTConnectController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_HouseholdCarouselHeaderList", "in_HouseholdCarouselHeaderListIn", "In_HouseholdCarouselHeaderList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.HeaderListList());
}, false, UBTConnectModel.HeaderListList), 
this.attr("_in_HouseholdCarouselHeaderListInDataFetchStatus", "_in_HouseholdCarouselHeaderListInDataFetchStatus", "_in_HouseholdCarouselHeaderListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_CurrentIndex", "in_CurrentIndexIn", "In_CurrentIndex", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_CurrentIndexInDataFetchStatus", "_in_CurrentIndexInDataFetchStatus", "_in_CurrentIndexInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_HouseholdCarouselHeaderList" in inputs) {
this.variables.in_HouseholdCarouselHeaderListIn = inputs.In_HouseholdCarouselHeaderList;
if("_in_HouseholdCarouselHeaderListInDataFetchStatus" in inputs) {
this.variables._in_HouseholdCarouselHeaderListInDataFetchStatus = inputs._in_HouseholdCarouselHeaderListInDataFetchStatus;
}

}

if("In_CurrentIndex" in inputs) {
this.variables.in_CurrentIndexIn = inputs.In_CurrentIndex;
if("_in_CurrentIndexInDataFetchStatus" in inputs) {
this.variables._in_CurrentIndexInDataFetchStatus = inputs._in_CurrentIndexInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Caroussel.EntitiesCarousel_HeaderGenerator");
});
define("UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.model$HeaderListList", "UBTConnect.controller$Get_CurrentEntityHeader"], function (OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_model, UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_controller, UBTConnectClientVariables) {
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
        View.displayName = "Directory_Caroussel.EntitiesCarousel_HeaderGenerator";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties());
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$debugger", "UBTConnect.model$HeaderListList", "UBTConnect.controller$Get_CurrentEntityHeader"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_Debugger) {
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
Controller.prototype._screenEvent_OnParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnParametersChanged");
callContext = controller.callContext(callContext);
var get_CurrentEntityHeaderVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.get_CurrentEntityHeaderVar = get_CurrentEntityHeaderVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JQ0AqmrGeUSGnHaTyM2ekQ:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.0XK_9bcvkE22GyJFEiZ7Qg/ClientActions.JQ0AqmrGeUSGnHaTyM2ekQ:CcWURh8dVCpU3M8Dy2OlvQ", "UBTConnect", "ScreenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vMAT2f4Dx0ay0oV1UhGctQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:O1Q3U3Kl6ESFP_Zb5p9sJg", callContext.id);
// Execute Action: Get_CurrentEntityHeader
get_CurrentEntityHeaderVar.value = UBTConnectController.default.get_CurrentEntityHeader$Action(model.variables.in_CurrentIndexIn, model.variables.in_HouseholdCarouselHeaderListIn, false, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Dwe1FYOUkU69dBuMOQRukg", callContext.id);
// Trigger Event: Event_SetHeader
return controller.event_SetHeader$Action(get_CurrentEntityHeaderVar.value.out_HouseholdHeaderOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IHVl5L99TESrov7jPW4dsg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JQ0AqmrGeUSGnHaTyM2ekQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JQ0AqmrGeUSGnHaTyM2ekQ", callContext.id);
throw ex;

});
};

Controller.prototype.screenEvent_OnParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnParametersChanged$Action, callContext);

};
Controller.prototype.event_SetHeader$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A:GUqi42j5JzeF3DYtR7PIbA", "UBTConnect", "Directory_Caroussel", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0XK_9bcvkE22GyJFEiZ7Qg:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.0XK_9bcvkE22GyJFEiZ7Qg:vs82_9hCTlPnHpRqSmmb2w", "UBTConnect", "EntitiesCarousel_HeaderGenerator", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0XK_9bcvkE22GyJFEiZ7Qg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Caroussel/EntitiesCarousel_HeaderGenerator On Parameters Changed");
return controller.screenEvent_OnParametersChanged$Action(callContext);

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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"O1Q3U3Kl6ESFP_Zb5p9sJg": {
getter: function (varBag, idService) {
return varBag.get_CurrentEntityHeaderVar.value;
}
},
"_EqZ6bJvS0ebzpoF5NMakA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdCarouselHeaderListIn;
}
},
"IinWg6FMgEWcFow7_f8zCg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CurrentIndexIn;
},
dataType: OS.DataTypes.DataTypes.Integer
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
