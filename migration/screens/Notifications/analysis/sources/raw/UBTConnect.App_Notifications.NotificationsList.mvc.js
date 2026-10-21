define("UBTConnect.App_Notifications.NotificationsList.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_Notification_CS.model", "UBTConnectLibrary.model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$model", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$model", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectModel, Connect2_Notification_CSModel, UBTConnectLibraryModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvcModel, NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UI_NotificationItemList", "uI_NotificationItemListVar", "UI_NotificationItemList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.MessageListItemList());
}, false, UBTConnectModel.MessageListItemList), 
this.attr("CurrentBreakpoint", "currentBreakpointIn", "CurrentBreakpoint", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItem_BreakpointRec());
}, false, UBTConnectModel.UI_UpdateItem_BreakpointRec), 
this.attr("_currentBreakpointInDataFetchStatus", "_currentBreakpointInDataFetchStatus", "_currentBreakpointInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IN_NotificationItemList", "iN_NotificationItemListIn", "IN_NotificationItemList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.MessageListItemList());
}, false, UBTConnectModel.MessageListItemList), 
this.attr("_iN_NotificationItemListInDataFetchStatus", "_iN_NotificationItemListInDataFetchStatus", "_iN_NotificationItemListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvcModel.hasValidationWidgets) || NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("CurrentBreakpoint" in inputs) {
this.variables.currentBreakpointIn = inputs.CurrentBreakpoint;
if("_currentBreakpointInDataFetchStatus" in inputs) {
this.variables._currentBreakpointInDataFetchStatus = inputs._currentBreakpointInDataFetchStatus;
}

}

if("IN_NotificationItemList" in inputs) {
this.variables.iN_NotificationItemListIn = inputs.IN_NotificationItemList;
if("_iN_NotificationItemListInDataFetchStatus" in inputs) {
this.variables._iN_NotificationItemListInDataFetchStatus = inputs._iN_NotificationItemListInDataFetchStatus;
}

}

if("IsLoading" in inputs) {
this.variables.isLoadingIn = inputs.IsLoading;
if("_isLoadingInDataFetchStatus" in inputs) {
this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Notifications.NotificationsList");
});
define("UBTConnect.App_Notifications.NotificationsList.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_Notification_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Notifications.NotificationsList.mvc$model", "UBTConnect.App_Notifications.NotificationsList.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$view", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$view", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_Notification_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_App_Notifications_NotificationsList_mvc_model, UBTConnect_App_Notifications_NotificationsList_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view) {
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
        View.displayName = "App_Notifications.NotificationsList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Notifications_NotificationsList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Notifications_NotificationsList_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "False"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.uI_NotificationItemListVar,
style: "list list-group background-neutral-0 updates-list",
tag: "div",
_idProps: {
service: idService,
name: "List_Notifications"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: model.variables.isLoadingIn,
_in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus)
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-plus-date": OS.BuiltinFunctions.dateTimeToText(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).dateTimeCreatedAttr)
},
style: "updates-list__list-item",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_view, {
inputs: {
In_IsDoubleAvatar: false,
In_Description: model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).titleAttr,
In_AvatarImage_Left: model.getCachedValue(idService.getId("NotificationItem.In_AvatarImage_Left"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageRec();
rec.uRLAttr = model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).profileIconURLAttr;
return rec;
}();
}, function () {
return model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).profileIconURLAttr;
}),
In_IsRead: model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).isReadAttr,
In_NotificationDate: model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).dateTimeCreatedAttr
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
name: "NotificationItem",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, {
inputs: {
Id: OS.BuiltinFunctions.longIntegerToText(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).idAttr)
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
uuid: "4",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).isReadAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).profileIconURLAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).dateTimeCreatedAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_Notifications.NotificationsList.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_Notification_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Notifications.NotificationsList.mvc$debugger", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_Notification_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Notifications_NotificationsList_mvc_Debugger) {
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
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var listFilter_GetRangeVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilter_GetRangeVar = listFilter_GetRangeVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FqrAwNyFyECPEfdknND_tQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.rDlE3e1unUOpvstX4ce4bw/ClientActions.FqrAwNyFyECPEfdknND_tQ:SFnevWZmDJ7K0thcgwVdAA", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nhZsYiBoS0qyDWA_PYFg3w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gydAJgn5Rke9Lq5mdT1gKQ", callContext.id);
// Execute Action: ListFilter_GetRange
listFilter_GetRangeVar.value = OS.SystemActions.listFilter(model.variables.iN_NotificationItemListIn, function (p) {
return (OS.BuiltinFunctions.dateTimeToDate(p.dateTimeCreatedAttr).gte(model.variables.currentBreakpointIn.dateRangeAttr.fromAttr) && OS.BuiltinFunctions.dateTimeToDate(p.dateTimeCreatedAttr).lte(model.variables.currentBreakpointIn.dateRangeAttr.toAttr));
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zo0EC2_l7EC+8CyyjZE3HQ", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.uI_NotificationItemListVar, listFilter_GetRangeVar.value.filteredListOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ov0_ZKb91EarjZGCW6mHog", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FqrAwNyFyECPEfdknND_tQ", callContext.id);
}

};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg:C0dHS3xzkGhxAA9p12FDtg", "UBTConnect", "App_Notifications", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rDlE3e1unUOpvstX4ce4bw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.rDlE3e1unUOpvstX4ce4bw:5ZYXg4wmKL+XOlABVKi9Zw", "UBTConnect", "NotificationsList", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rDlE3e1unUOpvstX4ce4bw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/NotificationsList On Initialize");
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Notifications.NotificationsList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"gydAJgn5Rke9Lq5mdT1gKQ": {
getter: function (varBag, idService) {
return varBag.listFilter_GetRangeVar.value;
}
},
"Ar96bhgYo0S+nJ69vxYF1g": {
getter: function (varBag, idService) {
return varBag.model.variables.uI_NotificationItemListVar;
}
},
"KIfTFks2NkupS2FY7Cpolg": {
getter: function (varBag, idService) {
return varBag.model.variables.currentBreakpointIn;
}
},
"sW0CzbvRckGLtQqykUQAMQ": {
getter: function (varBag, idService) {
return varBag.model.variables.iN_NotificationItemListIn;
}
},
"6mdO9Uc8XkW2KlUHGi7i2A": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Vk58bgF11U2FIjI5Y9abcQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_Notifications"));
})(varBag.model, idService);
}
},
"Cmi2praoXE2NhZ9DMITAjw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"+GtDp41FmkGOj0kfNviQOQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("NotificationItem"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
