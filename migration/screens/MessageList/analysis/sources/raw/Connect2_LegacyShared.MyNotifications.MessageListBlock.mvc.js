define("Connect2_LegacyShared.MyNotifications.MessageListBlock.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.MyNotifications.MessageListItem.mvc$model", "Connect2_LegacyShared.model$LongIntegerBooleanMessageListItemListRecord"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacyShared_MyNotifications_MessageListItem_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsShowLoading", "isShowLoadingIn", "IsShowLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isShowLoadingInDataFetchStatus", "_isShowLoadingInDataFetchStatus", "_isShowLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MessagesList", "messagesListIn", "MessagesList", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LongIntegerBooleanMessageListItemListRecord());
}, false, Connect2_LegacySharedModel.LongIntegerBooleanMessageListItemListRecord), 
this.attr("_messagesListInDataFetchStatus", "_messagesListInDataFetchStatus", "_messagesListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = Connect2_LegacyShared_MyNotifications_MessageListItem_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("IsShowLoading" in inputs) {
this.variables.isShowLoadingIn = inputs.IsShowLoading;
if("_isShowLoadingInDataFetchStatus" in inputs) {
this.variables._isShowLoadingInDataFetchStatus = inputs._isShowLoadingInDataFetchStatus;
}

}

if("MessagesList" in inputs) {
this.variables.messagesListIn = inputs.MessagesList;
if("_messagesListInDataFetchStatus" in inputs) {
this.variables._messagesListInDataFetchStatus = inputs._messagesListInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "MyNotifications.MessageListBlock");
});
define("Connect2_LegacyShared.MyNotifications.MessageListBlock.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.MyNotifications.MessageListBlock.mvc$model", "Connect2_LegacyShared.MyNotifications.MessageListBlock.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.MyNotifications.MessageListItem.mvc$view", "Connect2_LegacyShared.model$LongIntegerBooleanMessageListItemListRecord"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_MyNotifications_MessageListBlock_mvc_model, Connect2_LegacyShared_MyNotifications_MessageListBlock_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets, Connect2_LegacyShared_MyNotifications_MessageListItem_mvc_view) {
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
        View.displayName = "MyNotifications.MessageListBlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_MyNotifications_MessageListItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_MyNotifications_MessageListBlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_MyNotifications_MessageListBlock_mvc_controller;
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
animate: true,
extendedProperties: {
style: "background-color: var(--color-neutral-0); border-bottom: 1px solid var(--color-neutral-3); font-size: 0.9em; height: 46px; position: sticky; top: 0; z-index: 2;"
},
gridProperties: {
classes: "OSInline",
width: "100%"
},
visible: (!(model.variables.isShowLoadingIn) && model.variables.messagesListIn.hasUnreadMessagesAttr),
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isShowLoadingInDataFetchStatus, model.variables._messagesListInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageListBlock/Container onclick");
controller.markAllRead$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
style: "height: 22px; position: absolute; right: var(--space-xl); transform: translateY(50%);"
},
style: "justify-content-flex-end text-primary-color bold",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Mark All as Read",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: !(model.variables.isShowLoadingIn),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isShowLoadingInDataFetchStatus)
}, React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"virtualization-threshold-before": "1000",
"virtualization-threshold-after": "1000"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
onScrollEnding: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageListBlock/Messages_List OnScrollEnding");
controller.onScrollEnding$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
source: model.variables.messagesListIn.itemsAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
name: "Messages_List"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messagesListInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: !(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).isClearAttr),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messagesListInDataFetchStatus),
_dependencies: [asPrimitiveValue(model.variables._messagesListInDataFetchStatus), asPrimitiveValue(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).createdByMemberIdAttr), asPrimitiveValue(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).messageTemplatePriorityIdAttr), asPrimitiveValue(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).dateTimeCreatedAttr), asPrimitiveValue(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).profileIconURLAttr), asPrimitiveValue(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).createdByUserIdAttr), asPrimitiveValue(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).isReadAttr)]
}, React.createElement(OSWidgets.ListItem, {
extendedProperties: {
className: model.getCachedValue(idService.getId("Messages_List_Item.class"), function () {
return ("list-item" + ((model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).isReadAttr) ? ("") : (" background-blue-lightest")));
}, function () {
return model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).isReadAttr;
})
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageListBlock/Messages_List_Item OnClick");
controller.onClick_GoToMessageDetail$Action(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).idAttr, model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).isReadAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "list-item",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "Messages_List_Item"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ListItemAction, {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageListBlock/List Action OnClick");
controller.swipeEventsClear$Action(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "list-item-action",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Clear")];
}),
content: new PlaceholderContent(function () {
return [React.createElement(Connect2_LegacyShared_MyNotifications_MessageListItem_mvc_view, {
inputs: {
SentFromName: "",
UserId: model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).createdByUserIdAttr,
_userIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messagesListInDataFetchStatus),
IconURL: model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).profileIconURLAttr,
_iconURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messagesListInDataFetchStatus),
Title: model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).titleAttr,
_titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messagesListInDataFetchStatus),
MessageDateTime: model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).dateTimeCreatedAttr,
_messageDateTimeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messagesListInDataFetchStatus),
IsUrgent: (model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).messageTemplatePriorityIdAttr === Connect2_LegacySharedModel.staticEntities.messagePriority.urgent),
_isUrgentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messagesListInDataFetchStatus),
MemberId: model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).createdByMemberIdAttr,
_memberIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messagesListInDataFetchStatus)
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
name: "Messages_List_Item_Private",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
rightActions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ListItemAction, {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageListBlock/List Action OnClick");
controller.swipeEventsRead$Action(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "list-item-action",
visible: !(model.variables.messagesListIn.itemsAttr.getCurrent(callContext.iterationContext).isReadAttr),
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messagesListInDataFetchStatus)
}, "Mark as Read")];
})
}
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._messagesListInDataFetchStatus)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.MyNotifications.MessageListBlock.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.MyNotifications.MessageListBlock.mvc$debugger", "Connect2_LegacyShared.model$LongIntegerBooleanMessageListItemListRecord"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_MyNotifications_MessageListBlock_mvc_Debugger) {
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

Controller.prototype.onScrollEnding$Action = function () {
return Promise.resolve();
};
Controller.prototype.swipeEventsRead$Action = function () {
return Promise.resolve();
};
Controller.prototype.markAllRead$Action = function () {
return Promise.resolve();
};
Controller.prototype.onClick_GoToMessageDetail$Action = function () {
return Promise.resolve();
};
Controller.prototype.swipeEventsClear$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA:JDVFsscJB_uWX_OdVOax1A", "Connect2_LegacyShared", "MyNotifications", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:310qmb3cVUKHuQMizqlOnA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.310qmb3cVUKHuQMizqlOnA:6dK7SB4MTV+3nj_SJP_rYw", "Connect2_LegacyShared", "MessageListBlock", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:310qmb3cVUKHuQMizqlOnA", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA", callContext.id);
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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.MyNotifications.MessageListBlock.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LU7FYpwSI0aKh8wBjK+m7Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isShowLoadingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cUAz4KuIAkekNLpP9RBLfw": {
getter: function (varBag, idService) {
return varBag.model.variables.messagesListIn;
}
},
"JGrJhO3pnEa+bxDfRNgBUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Messages_List"));
})(varBag.model, idService);
}
},
"FdZdnMHyUkaNyllyR8ZUzA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Messages_List_Item"));
})(varBag.model, idService);
}
},
"+lfQJcKu8UC46lKZdBZAUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Messages_List_Item_Private"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
