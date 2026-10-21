define("UBTConnect.App_Notifications.Notifications_SortSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc$model", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnect_App_CommonBlocks_Filter_SortSheet_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Extra_OptionChoices", "extra_OptionChoicesVar", "Extra_OptionChoices", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ChoiceList());
}, false, UBTConnectModel.Filter_Common_Control_ChoiceList)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromStructure = function (str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
extra_OptionChoicesVar: OS.DataTypes.ImmutableBase.getData(str)
}));
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
Model._hasValidationWidgetsValue = UBTConnect_App_CommonBlocks_Filter_SortSheet_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Notifications.Notifications_SortSheet");
});
define("UBTConnect.App_Notifications.Notifications_SortSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Notifications.Notifications_SortSheet.mvc$model", "UBTConnect.App_Notifications.Notifications_SortSheet.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_App_Notifications_Notifications_SortSheet_mvc_model, UBTConnect_App_Notifications_Notifications_SortSheet_mvc_controller, UBTConnectClientVariables, UBTConnect_App_CommonBlocks_Filter_SortSheet_mvc_view, OSWidgets) {
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
        View.displayName = "App_Notifications.Notifications_SortSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_CommonBlocks_Filter_SortSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Notifications_Notifications_SortSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Notifications_Notifications_SortSheet_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_CommonBlocks_Filter_SortSheet_mvc_view, {
inputs: {
In_StartFilter: model.getCachedValue(idService.getId("JHK+lWWfEEy_3woriBNSAA.In_StartFilter"), function () {
return function () {
var rec = new UBTConnectModel.Filter_CommonRec();
return rec;
}();
}),
In_Filter_Common_Options_Choice: model.getCachedValue(idService.getId("JHK+lWWfEEy_3woriBNSAA.In_Filter_Common_Options_Choice"), function () {
return function () {
var rec = new UBTConnectModel.Filter_Common_OptionsRec();
rec.hasSortingAttr = function () {
var rec = new UBTConnectModel.Filter_Common_Options_ChoiceRec();
rec.enableAttr = true;
rec.yesLabelAttr = "Newest to Oldest";
rec.noLabelAttr = "Oldest to Newest";
rec.orderAttr = 1;
return rec;
}();
rec.extra_OptionChoicesAttr = model.variables.extra_OptionChoicesVar;
return rec;
}();
}, function () {
return model.variables.extra_OptionChoicesVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
applySort$Action: function (sortBy_TitleIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/SortSheet ApplySort");
return controller.filterSheetApplyFilters$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
loaded$Action: function (showSubscriptionOnClickIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/SortSheet Loaded");
return controller.handler_FilterSheetLoaded$Action(showSubscriptionOnClickIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
sheetInitialized$Action: function (sheetIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/SortSheet SheetInitialized");
controller.sheetInitialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
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
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_Notifications.Notifications_SortSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Notifications.Notifications_SortSheet.mvc$debugger", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Notifications_Notifications_SortSheet_mvc_Debugger) {
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
Controller.prototype._handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetLoaded");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications_SortSheet.Handler_FilterSheetLoaded$vars"))());
vars.value.showSubscriptionOnClickInLocal = showSubscriptionOnClickIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:93BFBbs_pUGQdl2EUBydLg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.0un_lnjk+k6EbmCEslAI7A/ClientActions.93BFBbs_pUGQdl2EUBydLg:o8beg5mK7HwQ9eqSpq4Hbw", "UBTConnect", "Handler_FilterSheetLoaded", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I16r2_N1IUOS_iX8m11J5Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:H8_pHYqpW069onSyhyJCEA", callContext.id);
// Trigger Event: Loaded
return controller.loaded$Action(vars.value.showSubscriptionOnClickInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lSWbwgx4ok6dvWnxCmtw0A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:93BFBbs_pUGQdl2EUBydLg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:93BFBbs_pUGQdl2EUBydLg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications_SortSheet.Handler_FilterSheetLoaded$vars", [{
name: "ShowSubscriptionOnClick",
attrName: "showSubscriptionOnClickInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._filterSheetApplyFilters$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("FilterSheetApplyFilters");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:m6ysh8+IQ0ib2wuFMu6QpA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.0un_lnjk+k6EbmCEslAI7A/ClientActions.m6ysh8+IQ0ib2wuFMu6QpA:VJ77wChzB8o7LjCBGRk5oA", "UBTConnect", "FilterSheetApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pKv3K65tWEyeAtrj6i+vOw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VxhkhGSsskemRW1dGZCB5A", callContext.id);
// Trigger Event: ApplyFilters
return controller.applyFilters$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q0KLK7zT4UC7CklL6i8TIg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:m6ysh8+IQ0ib2wuFMu6QpA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:m6ysh8+IQ0ib2wuFMu6QpA", callContext.id);
throw ex;

});
};

Controller.prototype.handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetLoaded$Action, callContext, showSubscriptionOnClickIn);

};
Controller.prototype.filterSheetApplyFilters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._filterSheetApplyFilters$Action, callContext);

};
Controller.prototype.sheetInitialized$Action = function () {
return Promise.resolve();
};
Controller.prototype.loaded$Action = function () {
return Promise.resolve();
};
Controller.prototype.applyFilters$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg:C0dHS3xzkGhxAA9p12FDtg", "UBTConnect", "App_Notifications", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0un_lnjk+k6EbmCEslAI7A:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.0un_lnjk+k6EbmCEslAI7A:wX3iK9EWAhl5gRDA2wajQg", "UBTConnect", "Notifications_SortSheet", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0un_lnjk+k6EbmCEslAI7A", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg", callContext.id);
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

define("UBTConnect.App_Notifications.Notifications_SortSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"k2svYUP3m0OTSenzJRacag": {
getter: function (varBag, idService) {
return varBag.vars.value.showSubscriptionOnClickInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"OgY_x_DVCky1knrMGhE0LQ": {
getter: function (varBag, idService) {
return varBag.model.variables.extra_OptionChoicesVar;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
