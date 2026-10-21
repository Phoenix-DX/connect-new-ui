define("UBTConnect.App_Notifications.Notifications_MoreActionSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc$model", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnect_App_CommonBlocks_Filter_MoreActionSheet_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [].concat(_super.attributesToDeclare.call(this));
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
Model._hasValidationWidgetsValue = UBTConnect_App_CommonBlocks_Filter_MoreActionSheet_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "App_Notifications.Notifications_MoreActionSheet");
});
define("UBTConnect.App_Notifications.Notifications_MoreActionSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Notifications.Notifications_MoreActionSheet.mvc$model", "UBTConnect.App_Notifications.Notifications_MoreActionSheet.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_App_Notifications_Notifications_MoreActionSheet_mvc_model, UBTConnect_App_Notifications_Notifications_MoreActionSheet_mvc_controller, UBTConnectClientVariables, UBTConnect_App_CommonBlocks_Filter_MoreActionSheet_mvc_view, OSWidgets) {
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
        View.displayName = "App_Notifications.Notifications_MoreActionSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_CommonBlocks_Filter_MoreActionSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Notifications_Notifications_MoreActionSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Notifications_Notifications_MoreActionSheet_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_CommonBlocks_Filter_MoreActionSheet_mvc_view, {
inputs: {
In_Filter_Common_Options_Choice: model.getCachedValue(idService.getId("I1mepUMUIk6bnw5iNTlY8g.In_Filter_Common_Options_Choice"), function () {
return function () {
var rec = new UBTConnectModel.Filter_Common_OptionsRec();
return rec;
}();
}),
In_StartFilter: model.getCachedValue(idService.getId("I1mepUMUIk6bnw5iNTlY8g.In_StartFilter"), function () {
return function () {
var rec = new UBTConnectModel.Filter_CommonRec();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
markAllAsRead$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/MoreActionSheet MarkAllAsRead");
controller.handler_MarkAllAsRead$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
deleteAllNotification$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/MoreActionSheet DeleteAllNotification");
controller.handler_DeleteAllNotification$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
loaded$Action: function (showSubscriptionOnClickIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/MoreActionSheet Loaded");
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/MoreActionSheet SheetInitialized");
controller.sheetInitialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
applySort$Action: function (sortBy_TitleIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/MoreActionSheet ApplySort");
return controller.filterSheetApplyFilters$Action(controller.callContext(eventHandlerContext));
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
define("UBTConnect.App_Notifications.Notifications_MoreActionSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Notifications.Notifications_MoreActionSheet.mvc$debugger", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Notifications_Notifications_MoreActionSheet_mvc_Debugger) {
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
Controller.prototype._handler_DeleteAllNotification$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_DeleteAllNotification");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:w2q+dvXj9UapLeZK5yPydQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.XYfj+uqdx06idU3WidZ8Wg/ClientActions.w2q+dvXj9UapLeZK5yPydQ:qCwgDG+CENqR2XaWPwPUkw", "UBTConnect", "Handler_DeleteAllNotification", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LA7bpyrDIkWAcB_YMMgn4A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N5JXo59pLUmLdAEs9hG26A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:w2q+dvXj9UapLeZK5yPydQ", callContext.id);
}

};
Controller.prototype._handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetLoaded");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications_MoreActionSheet.Handler_FilterSheetLoaded$vars"))());
vars.value.showSubscriptionOnClickInLocal = showSubscriptionOnClickIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:j6gdlfe8sE6RLq2zNqHWqw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.XYfj+uqdx06idU3WidZ8Wg/ClientActions.j6gdlfe8sE6RLq2zNqHWqw:S4SlzONo63rF7Aq5rVPL0Q", "UBTConnect", "Handler_FilterSheetLoaded", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SEzk_KwDCUaLiYTUqlt7lQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EBs_yjWyl0SYOm6n3GIodQ", callContext.id);
// Trigger Event: Loaded
return controller.loaded$Action(vars.value.showSubscriptionOnClickInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ja_iBF77c0OWu2znMQ2Y0g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:j6gdlfe8sE6RLq2zNqHWqw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:j6gdlfe8sE6RLq2zNqHWqw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications_MoreActionSheet.Handler_FilterSheetLoaded$vars", [{
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7uaKzYtuWE6G812pp7Zg1w:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.XYfj+uqdx06idU3WidZ8Wg/ClientActions.7uaKzYtuWE6G812pp7Zg1w:fJLIy67w3SCMVtNqr4y+PA", "UBTConnect", "FilterSheetApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LwMOZ3h5IUSm3kGtjQzK5w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lDEc3jHQAkKQQqb4+5NxCg", callContext.id);
// Trigger Event: ApplyFilters
return controller.applyFilters$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d94vt9kek0yqCIc7BKedqg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7uaKzYtuWE6G812pp7Zg1w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7uaKzYtuWE6G812pp7Zg1w", callContext.id);
throw ex;

});
};
Controller.prototype._handler_MarkAllAsRead$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_MarkAllAsRead");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:sgYE3G_CKUaZmvA03D5moA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.XYfj+uqdx06idU3WidZ8Wg/ClientActions.sgYE3G_CKUaZmvA03D5moA:v0n9YIK9av++F0hNqXyB8Q", "UBTConnect", "Handler_MarkAllAsRead", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LthvqlHNB0ujS4FQSRGZ1Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Wfm+N3lqTkehcVfbc7WcYg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sgYE3G_CKUaZmvA03D5moA", callContext.id);
}

};

Controller.prototype.handler_DeleteAllNotification$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_DeleteAllNotification$Action, callContext);

};
Controller.prototype.handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetLoaded$Action, callContext, showSubscriptionOnClickIn);

};
Controller.prototype.filterSheetApplyFilters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._filterSheetApplyFilters$Action, callContext);

};
Controller.prototype.handler_MarkAllAsRead$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_MarkAllAsRead$Action, callContext);

};
Controller.prototype.applyFilters$Action = function () {
return Promise.resolve();
};
Controller.prototype.loaded$Action = function () {
return Promise.resolve();
};
Controller.prototype.sheetInitialized$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg:C0dHS3xzkGhxAA9p12FDtg", "UBTConnect", "App_Notifications", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:XYfj+uqdx06idU3WidZ8Wg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.XYfj+uqdx06idU3WidZ8Wg:lPoNO6KWm1DlDJ4vP4FkgA", "UBTConnect", "Notifications_MoreActionSheet", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:XYfj+uqdx06idU3WidZ8Wg", callContext.id);
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

define("UBTConnect.App_Notifications.Notifications_MoreActionSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"ZF_b8ml45UG0nMpb8soHUg": {
getter: function (varBag, idService) {
return varBag.vars.value.showSubscriptionOnClickInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
