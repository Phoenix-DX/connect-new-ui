define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("HaveFiltersApplied", "haveFiltersAppliedIn", "HaveFiltersApplied", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_haveFiltersAppliedInDataFetchStatus", "_haveFiltersAppliedInDataFetchStatus", "_haveFiltersAppliedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("BottomSheetId", "bottomSheetIdIn", "BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_bottomSheetIdInDataFetchStatus", "_bottomSheetIdInDataFetchStatus", "_bottomSheetIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isLoaded", "isLoadedIn", "isLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isLoadedInDataFetchStatus", "_isLoadedInDataFetchStatus", "_isLoadedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowSubscriptionOnClick", "showSubscriptionOnClickIn", "ShowSubscriptionOnClick", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showSubscriptionOnClickInDataFetchStatus", "_showSubscriptionOnClickInDataFetchStatus", "_showSubscriptionOnClickInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("HaveFiltersApplied" in inputs) {
this.variables.haveFiltersAppliedIn = inputs.HaveFiltersApplied;
if("_haveFiltersAppliedInDataFetchStatus" in inputs) {
this.variables._haveFiltersAppliedInDataFetchStatus = inputs._haveFiltersAppliedInDataFetchStatus;
}

}

if("BottomSheetId" in inputs) {
this.variables.bottomSheetIdIn = inputs.BottomSheetId;
if("_bottomSheetIdInDataFetchStatus" in inputs) {
this.variables._bottomSheetIdInDataFetchStatus = inputs._bottomSheetIdInDataFetchStatus;
}

}

if("isLoaded" in inputs) {
this.variables.isLoadedIn = inputs.isLoaded;
if("_isLoadedInDataFetchStatus" in inputs) {
this.variables._isLoadedInDataFetchStatus = inputs._isLoadedInDataFetchStatus;
}

}

if("ShowSubscriptionOnClick" in inputs) {
this.variables.showSubscriptionOnClickIn = inputs.ShowSubscriptionOnClick;
if("_showSubscriptionOnClickInDataFetchStatus" in inputs) {
this.variables._showSubscriptionOnClickInDataFetchStatus = inputs._showSubscriptionOnClickInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_CommonBlocks_Filter.FilterSheet_Icon");
});
define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController, React, OSView, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_model, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "App_CommonBlocks_Filter.FilterSheet_Icon";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: !(model.variables.isLoadedIn),
_in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadedInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [$if(model.variables.haveFiltersAppliedIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.errorFill,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_14,
In_ExtendedClasses: "header-filter-enabled",
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.red
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.tune,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
return controller.iconClick$Action(controller.callContext(eventHandlerContext));
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._haveFiltersAppliedInDataFetchStatus), asPrimitiveValue(model.variables.haveFiltersAppliedIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$debugger", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_Debugger) {
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
Controller.prototype._iconClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("IconClick");
callContext = controller.callContext(callContext);
var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bottomSheetOpenVar = bottomSheetOpenVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:VuP8UwlQGky6VC8Dz3lfFw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.Aie+SebGbECAd7RkLoRyJA/ClientActions.VuP8UwlQGky6VC8Dz3lfFw:Ub2x+v928uYsptt6Ha8YEQ", "UBTConnect", "IconClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N_HMctSjtkqBdt4+zxm0fw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SCAkNG_+REWRTHFfEIRFgA", callContext.id) && model.variables.isLoadedIn)) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WIOTb2hhYkyq8c+kQ5pKFw", callContext.id) && model.variables.showSubscriptionOnClickIn)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WZOXyz5OSUGZDB5j3xg_rw", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L3r8d8cKdUuAHh3YsKMmEg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kVduQ9fe8Uy8+++uL7uMdA", callContext.id);
// Execute Action: BottomSheetOpen
bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.bottomSheetIdIn, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Gb2tdm_U6k6qc4HJ0vHKkQ", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8FLH4KLSdUSGk2s0RGOIPQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VuP8UwlQGky6VC8Dz3lfFw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VuP8UwlQGky6VC8Dz3lfFw", callContext.id);
throw ex;

});
};

Controller.prototype.iconClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._iconClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A:aO+UykmPPS6VEpIYdNjDCA", "UBTConnect", "App_CommonBlocks_Filter", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Aie+SebGbECAd7RkLoRyJA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.Aie+SebGbECAd7RkLoRyJA:ulnyWLuQmotyXS9wS2OE5Q", "UBTConnect", "FilterSheet_Icon", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Aie+SebGbECAd7RkLoRyJA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A", callContext.id);
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"kVduQ9fe8Uy8+++uL7uMdA": {
getter: function (varBag, idService) {
return varBag.bottomSheetOpenVar.value;
}
},
"0i7BQEkJJUKXmwhRZMKXuw": {
getter: function (varBag, idService) {
return varBag.model.variables.haveFiltersAppliedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"WWeWTxAz30a8gcgJrz5veA": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IaY+LZJFF0ObA8EBQfavjg": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ecH7YEDW10KbdirFPIzjWw": {
getter: function (varBag, idService) {
return varBag.model.variables.showSubscriptionOnClickIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5+nkCx_E4Uaa25LmsZKlag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"rSLaVleSNE6amviZhqBWEQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HaveFiltersApplied"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
