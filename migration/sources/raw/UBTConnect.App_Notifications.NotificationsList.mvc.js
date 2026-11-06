define("UBTConnect.App_Notifications.NotificationsList.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_Notification_CS.model", "UBTConnectLibrary.model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$model", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$model", "UBTConnect.App_Notifications.Notifications_ConfirmDialog.mvc$model", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectModel, Connect2_Notification_CSModel, UBTConnectLibraryModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvcModel, NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel, UBTConnect_App_Notifications_Notifications_ConfirmDialog_mvcModel) {
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
this.attr("ShowDeleteNotificationPopup", "showDeleteNotificationPopupVar", "ShowDeleteNotificationPopup", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("SelectedNotification", "selectedNotificationVar", "SelectedNotification", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("SelectedMessageListItem", "selectedMessageListItemVar", "SelectedMessageListItem", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Notification_CSModel.MessageListItemRec());
}, false, Connect2_Notification_CSModel.MessageListItemRec), 
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
Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvcModel.hasValidationWidgets) || NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel.hasValidationWidgets) || UBTConnect_App_Notifications_Notifications_ConfirmDialog_mvcModel.hasValidationWidgets);
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
define("UBTConnect.App_Notifications.NotificationsList.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_Notification_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Notifications.NotificationsList.mvc$model", "UBTConnect.App_Notifications.NotificationsList.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$view", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$view", "UBTConnect.App_Notifications.Notifications_ConfirmDialog.mvc$view", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_Notification_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_App_Notifications_NotificationsList_mvc_model, UBTConnect_App_Notifications_NotificationsList_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, UBTConnect_App_Notifications_Notifications_ConfirmDialog_mvc_view) {
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
            return ["css/OutSystemsReactWidgets.css", "css/UBTConnect.App_Notifications.NotificationsList.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, UBTConnect_App_Notifications_Notifications_ConfirmDialog_mvc_view];
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ListItemContainer",
visible: true,
_idProps: {
service: idService,
name: "ListItemContainer"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).profileIconURLAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).dateTimeCreatedAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).isReadAttr)]
}, React.createElement(OSWidgets.ListItem, {
style: "list-item list-itemNotifications-action-primary",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItemNotification"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ListItemAction, {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/NotificationsList/List Action OnClick");
return controller.handler_ToggleRead$Action(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "list-item-action list-itemNotifications-Read-action-primary",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.mail,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.cyanDarkest,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.medium_20
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
uuid: "5",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.getCachedValue(idService.getId("p8qwBDG840W5CByBfsd8Hw.In_Text"), function () {
return ((model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).isReadAttr) ? ("Mark as unread") : ("Mark as read"));
}, function () {
return model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).isReadAttr;
}),
In_TextOptions: model.getCachedValue(idService.getId("p8qwBDG840W5CByBfsd8Hw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.cyanDarkest;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.doubleExtraSmall;
return rec;
}();
})
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
uuid: "6",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
}),
content: new PlaceholderContent(function () {
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
uuid: "7",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/NotificationsList/Container onclick");
return controller.onClick_NotificationDetail$Action(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).idAttr, model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).isReadAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
"data-plus-date": OS.BuiltinFunctions.dateTimeToText(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).dateTimeCreatedAttr)
},
style: "updates-list__list-item",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_view, {
inputs: {
In_IsRead: model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).isReadAttr,
In_Description: model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).titleAttr,
In_NotificationDate: model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).dateTimeCreatedAttr,
In_AvatarImage_Left: model.getCachedValue(idService.getId("NotificationItem.In_AvatarImage_Left"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageRec();
rec.uRLAttr = model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).profileIconURLAttr;
return rec;
}();
}, function () {
return model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).profileIconURLAttr;
}),
In_IsDoubleAvatar: false
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
alias: "4"
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
uuid: "10",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).profileIconURLAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).isReadAttr), asPrimitiveValue(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext).dateTimeCreatedAttr)]
})];
}),
rightActions: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ListItemAction, {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/NotificationsList/List Action OnClick");
controller.toggleDeleteNotification$Action(model.variables.uI_NotificationItemListVar.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "list-item-action list-itemNotifications-Delete-action-primary",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.medium_20,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.delete
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
uuid: "13",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Delete",
In_TextOptions: model.getCachedValue(idService.getId("MdVnjkKE_0KXq1yPSz7rzA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.doubleExtraSmall;
return rec;
}();
})
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
uuid: "14",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
})
}
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn)]
}), React.createElement(OSWidgets.Popup, {
showPopup: model.variables.showDeleteNotificationPopupVar,
style: "popup-dialog",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_App_Notifications_Notifications_ConfirmDialog_mvc_view, {
inputs: {
IsSingle: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
confirm$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/Notifications_ConfirmDialog Confirm");
return controller.handler_DeleteNotification$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
cancel$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/Notifications_ConfirmDialog Cancel");
controller.toggleDeleteNotification$Action(model.variables.selectedMessageListItemVar, controller.callContext(eventHandlerContext));
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
uuid: "16",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_Notifications.NotificationsList.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_Notification_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Notifications.NotificationsList.mvc$debugger", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_Notification_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Notifications_NotificationsList_mvc_Debugger) {
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
Controller.prototype.toggleRead$ServerAction = function (messageInstanceIdIn, isReadIn, callContext) {
var controller = this.controller;
var inputs = {
MessageInstanceId: OS.DataConversion.ServerDataConverter.to(messageInstanceIdIn, OS.DataTypes.DataTypes.LongInteger),
IsRead: OS.DataConversion.ServerDataConverter.to(isReadIn, OS.DataTypes.DataTypes.Boolean)
};
return controller.callServerAction("ToggleRead", "screenservices/UBTConnect/App_Notifications/NotificationsList/ActionToggleRead", "AtFoy0BCbfM4i9yOW9_gqw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};
Controller.prototype.delete_Notifications$ServerAction = function (messagesIn, callContext) {
var controller = this.controller;
var inputs = {
Messages: OS.DataConversion.ServerDataConverter.to(messagesIn, OS.DataTypes.DataTypes.RecordList)
};
return controller.callServerAction("Delete_Notifications", "screenservices/UBTConnect/App_Notifications/NotificationsList/ServiceAPIDelete_Notifications", "SvVK+IMeHLKks+MyVbNeRw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._handler_ToggleRead$Action = function (iN_SelectedNotificationIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ToggleRead");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationsList.Handler_ToggleRead$vars"))());
vars.value.iN_SelectedNotificationInLocal = iN_SelectedNotificationIn;
var listFilterVar = new OS.DataTypes.VariableHolder();
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilterVar = listFilterVar;
varBag.listIndexOfVar = listIndexOfVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:duENlAY0ME211aFoDBy32A:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.rDlE3e1unUOpvstX4ce4bw/ClientActions.duENlAY0ME211aFoDBy32A:eKS+t_8KhGErSJ+M0ZGRdA", "UBTConnect", "Handler_ToggleRead", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Z_8PplQ7EESYJutyibd2Lw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:USA0BPrXr0iJznMhF0TvQg", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.uI_NotificationItemListVar, function (p) {
return p.idAttr.equals(vars.value.iN_SelectedNotificationInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2PWjkM89PEaZnG4LtIek3A", callContext.id);
// Execute Action: ToggleRead
model.flush();
return controller.toggleRead$ServerAction(vars.value.iN_SelectedNotificationInLocal, !(listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).isReadAttr), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fevpb9R8W0uciUU+rq4Mzw", callContext.id);
// Local_MessageListItem = ListFilter.FilteredList.Current
vars.value.local_MessageListItemVar = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gwQavDJp5kOwe5nUIYCiYg", callContext.id);
// Local_MessageListItem.IsRead = notLocal_MessageListItem.IsRead
vars.value.local_MessageListItemVar.isReadAttr = !(vars.value.local_MessageListItemVar.isReadAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tDPShIxSIEejLp97qM5_HQ", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.uI_NotificationItemListVar, function (p) {
return p.idAttr.equals(vars.value.iN_SelectedNotificationInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MRY3ygUwBke3Nr8JGuvPDA", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.uI_NotificationItemListVar, listIndexOfVar.value.positionOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:up7ndIN9DE2fqgnedtf8rA", callContext.id);
// Execute Action: ListInsert
OS.SystemActions.listInsert(model.variables.uI_NotificationItemListVar, vars.value.local_MessageListItemVar, listIndexOfVar.value.positionOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:69eG3cbUX0uHBa1gPik74Q", callContext.id);
// Trigger Event: UpdateReadCount
return controller.updateReadCount$Action(!(vars.value.local_MessageListItemVar.isReadAttr), model.variables.currentBreakpointIn.sectionNameAttr, vars.value.iN_SelectedNotificationInLocal, false, listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).isReadAttr, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hIFGYr6yXUyhxEkzhB6XEg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:duENlAY0ME211aFoDBy32A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:duENlAY0ME211aFoDBy32A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationsList.Handler_ToggleRead$vars", [{
name: "IN_SelectedNotification",
attrName: "iN_SelectedNotificationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Local_MessageListItem",
attrName: "local_MessageListItemVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_Notification_CSModel.MessageListItemRec();
},
complexType: Connect2_Notification_CSModel.MessageListItemRec
}]);
Controller.prototype._handler_DeleteNotification$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_DeleteNotification");
callContext = controller.callContext(callContext);
var listFilterVar = new OS.DataTypes.VariableHolder();
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilterVar = listFilterVar;
varBag.listIndexOfVar = listIndexOfVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:TOIfqsw3z0GLdNqcBMfpGg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.rDlE3e1unUOpvstX4ce4bw/ClientActions.TOIfqsw3z0GLdNqcBMfpGg:ocrW_GpBeNM3HkvZwdr33A", "UBTConnect", "Handler_DeleteNotification", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:a1ytoLzGCU6YnlFZyCd3Uw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F7PNgYhTsUCw8eRPxEJ9ow", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.uI_NotificationItemListVar, function (p) {
return p.idAttr.equals(model.variables.selectedMessageListItemVar.idAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b_dwffYjzk2AwsFmyMaWWw", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.uI_NotificationItemListVar, function (p) {
return p.idAttr.equals(model.variables.selectedMessageListItemVar.idAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DzmE8Ia4TkeiHcUUJWfwUQ", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.uI_NotificationItemListVar, listIndexOfVar.value.positionOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5pmDHZNt1Ua5yfw8tnUUsg", callContext.id);
// Execute Action: Delete_Notifications
model.flush();
return controller.delete_Notifications$ServerAction(function () {
var list = new UBTConnectModel.MessageListItemList();
list.pushAll([listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext)]);
return list;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nF5Zz41KakSFe7Tdi8BiZQ", callContext.id);
// Execute Action: ToggleDeleteNotification
controller._toggleDeleteNotification$Action(model.variables.selectedMessageListItemVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:THD+qgyUf0yDPRmd6DT5+Q", callContext.id);
// Trigger Event: UpdateReadCount
return controller.updateReadCount$Action(false, model.variables.currentBreakpointIn.sectionNameAttr, model.variables.selectedMessageListItemVar.idAttr, true, model.variables.selectedMessageListItemVar.isReadAttr, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5WP5Bjl4jU+64wxoxcjW6A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:TOIfqsw3z0GLdNqcBMfpGg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:TOIfqsw3z0GLdNqcBMfpGg", callContext.id);
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
Controller.prototype._toggleDeleteNotification$Action = function (messageListItemIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ToggleDeleteNotification");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationsList.ToggleDeleteNotification$vars"))());
vars.value.messageListItemInLocal = messageListItemIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nbtuyryRokW07jkbE0+EtA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.rDlE3e1unUOpvstX4ce4bw/ClientActions.nbtuyryRokW07jkbE0+EtA:U_OBEwm6TanwNgoUoI5hZA", "UBTConnect", "ToggleDeleteNotification", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_zJiDtZzh02Fp0GQcokocQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d+Flu32lFk67If6ZUjne3w", callContext.id);
// SelectedNotification = MessageListItem.Id
model.variables.selectedNotificationVar = vars.value.messageListItemInLocal.idAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d+Flu32lFk67If6ZUjne3w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SelectedMessageListItem = MessageListItem
model.variables.selectedMessageListItemVar = vars.value.messageListItemInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eewZ8Ay9hE2UhA2z+UVzsg", callContext.id);
// ShowDeleteNotificationPopup = notShowDeleteNotificationPopup
model.variables.showDeleteNotificationPopupVar = !(model.variables.showDeleteNotificationPopupVar);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y_YXAF_1J0CeFB2gEf1ilQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nbtuyryRokW07jkbE0+EtA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationsList.ToggleDeleteNotification$vars", [{
name: "MessageListItem",
attrName: "messageListItemInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_Notification_CSModel.MessageListItemRec();
},
complexType: Connect2_Notification_CSModel.MessageListItemRec
}]);
Controller.prototype._onClick_NotificationDetail$Action = function (messageInstanceIdIn, isReadIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_NotificationDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationsList.OnClick_NotificationDetail$vars"))());
vars.value.messageInstanceIdInLocal = messageInstanceIdIn;
vars.value.isReadInLocal = isReadIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Or612Sb5BE+Swt3UticHsQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.rDlE3e1unUOpvstX4ce4bw/ClientActions.Or612Sb5BE+Swt3UticHsQ:33oLjkPDzIfYNftd+0rsnw", "UBTConnect", "OnClick_NotificationDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DTa3aUBmDkeitvoqRgEsNA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cSidvBu2PEGuYLNBOZ0dww", callContext.id);
// Trigger Event: NotificationDetail
return controller.notificationDetail$Action(vars.value.messageInstanceIdInLocal, vars.value.isReadInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ln3csrRr3UGAed53lTyTjg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Or612Sb5BE+Swt3UticHsQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Or612Sb5BE+Swt3UticHsQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationsList.OnClick_NotificationDetail$vars", [{
name: "MessageInstanceId",
attrName: "messageInstanceIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "IsRead",
attrName: "isReadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var listFilter_GetRangeVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilter_GetRangeVar = listFilter_GetRangeVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nrSs64WN+0GKaYqMdI_2VA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.rDlE3e1unUOpvstX4ce4bw/ClientActions.nrSs64WN+0GKaYqMdI_2VA:pZzkCR1gF0zpAKNhD3NI3A", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TEtw1eRr+kuh1FXB8tJY1A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Yodafut6KUa4HpbAzdprAg", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.uI_NotificationItemListVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EhrqyupW40Svt74yL+RHBA", callContext.id);
// Execute Action: ListFilter_GetRange
listFilter_GetRangeVar.value = OS.SystemActions.listFilter(model.variables.iN_NotificationItemListIn, function (p) {
return (OS.BuiltinFunctions.dateTimeToDate(p.dateTimeCreatedAttr).gte(model.variables.currentBreakpointIn.dateRangeAttr.fromAttr) && OS.BuiltinFunctions.dateTimeToDate(p.dateTimeCreatedAttr).lte(model.variables.currentBreakpointIn.dateRangeAttr.toAttr));
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sv_gC8EiAUK0T6kcdwr8rg", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.uI_NotificationItemListVar, listFilter_GetRangeVar.value.filteredListOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FOt7lltRaEavLQ5nbddwbA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nrSs64WN+0GKaYqMdI_2VA", callContext.id);
}

};

Controller.prototype.handler_ToggleRead$Action = function (iN_SelectedNotificationIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ToggleRead$Action, callContext, iN_SelectedNotificationIn);

};
Controller.prototype.handler_DeleteNotification$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_DeleteNotification$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.toggleDeleteNotification$Action = function (messageListItemIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleDeleteNotification$Action, callContext, messageListItemIn);

};
Controller.prototype.onClick_NotificationDetail$Action = function (messageInstanceIdIn, isReadIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_NotificationDetail$Action, callContext, messageInstanceIdIn, isReadIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.notificationDetail$Action = function () {
return Promise.resolve();
};
Controller.prototype.updateReadCount$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg:sMKFKooX6A1nm6D_Lsn4Wg", "UBTConnect", "App_Notifications", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rDlE3e1unUOpvstX4ce4bw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.rDlE3e1unUOpvstX4ce4bw:RVzTrbGXmp8xZCqaxOtTiQ", "UBTConnect", "NotificationsList", "NRNodes.WebBlock", callContext.id, varBag);
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
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/NotificationsList On Parameters Changed");
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Notifications.NotificationsList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"u2ssG1OxBk2o6H1jgcu2Uw": {
getter: function (varBag, idService) {
return varBag.vars.value.local_MessageListItemVar;
}
},
"p4kjcSAO5E6NphxPuAHNyQ": {
getter: function (varBag, idService) {
return varBag.vars.value.iN_SelectedNotificationInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"USA0BPrXr0iJznMhF0TvQg": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"tDPShIxSIEejLp97qM5_HQ": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"b_dwffYjzk2AwsFmyMaWWw": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"F7PNgYhTsUCw8eRPxEJ9ow": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"gydAJgn5Rke9Lq5mdT1gKQ": {
getter: function (varBag, idService) {
return varBag.listFilter_GetRangeVar.value;
}
},
"7vCiOLXNtUGBsiQFg2dm6Q": {
getter: function (varBag, idService) {
return varBag.vars.value.messageListItemInLocal;
}
},
"FooAoaxB2kyENZ4hzmWn7Q": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInstanceIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"XH9BQVbmDkKglo29ElE+UA": {
getter: function (varBag, idService) {
return varBag.vars.value.isReadInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"EhrqyupW40Svt74yL+RHBA": {
getter: function (varBag, idService) {
return varBag.listFilter_GetRangeVar.value;
}
},
"Ar96bhgYo0S+nJ69vxYF1g": {
getter: function (varBag, idService) {
return varBag.model.variables.uI_NotificationItemListVar;
}
},
"8HJilrE8vkWywrFeKYJLQA": {
getter: function (varBag, idService) {
return varBag.model.variables.showDeleteNotificationPopupVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5dxXDu2J7k+1YtyRYMXcBw": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedNotificationVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"QpODXfjcbUikydsnPAC_1Q": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedMessageListItemVar;
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
"a62YVpUvM0qeG_77KC0Gtw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItemContainer"));
})(varBag.model, idService);
}
},
"71wr+nvgWUGW5fwHbdnniQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListItemNotification"));
})(varBag.model, idService);
}
},
"LVlwGjaozkW+c5xtuHvKvA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"oumV1ZrlXUun0uHXRjHkBA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("NotificationItem"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
