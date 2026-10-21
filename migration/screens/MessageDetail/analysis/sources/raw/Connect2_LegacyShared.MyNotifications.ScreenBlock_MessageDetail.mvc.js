define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "Comms_CS.model", "NavigationHandler.controller", "UBT_AppManager_CS.model", "UBT_AppManager.controller", "Connect2_LegacyShared.Layout.Layout.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon_Back.mvc$model", "Connect2_LegacyShared.Reusable.Spinner.mvc$model", "Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$model", "Connect2_LegacyShared.Share_UI.ShareObjectDetail_ExtendedShare.mvc$model", "Connect2_LegacyShared.Share_UI.ShareObjectDetail.mvc$model", "Connect2_LegacyShared.model$HostConfigRec", "Connect2_LegacyShared.controller$GetHostConfigByConfigId", "UBTConnect_Utils.controller$GetHasExtendedShare", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasDeceasedProfileAccess", "UBTConnect_Utils.controller$GetHasAssemble", "Connect2_LegacyShared.model$HostConfig_SpacingRec", "Connect2_LegacyShared.model$HostConfig_FontTypeRec", "Connect2_LegacyShared.model$HostConfig_FontRec", "Connect2_LegacyShared.model$HostConfig_FontSizeRec", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec", "Connect2_LegacyShared.model$MessageParameterRecordList", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_LegacyShared.referencesHealth$UBTJavaScriptUtils", "Connect2_LegacyShared.controller$DecrementReadMessagesCounter", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "Comms_CS.model$MessageParameterRec", "Connect2_LegacyShared.referencesHealth$Comms_CS", "Connect2_LegacyShared.model$MessageParameterList", "Connect2_LegacyShared.controller$BuildAssembleNotificationContent", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.controller$AddFirstSentence", "Connect2_LegacyShared.controller$DecrementReadWhatsNewsCounter", "UBTConnect_Utils.controller$GetHasOrbitHostSurvey", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_GetDeviceContext", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "Connect2_LegacyShared.model$AdaptiveCardActionSubmitDataRec", "Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord", "Connect2_LegacyShared.model$Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnect_UtilsController, UBTJavaScriptUtilsController, UBTConnect_UtilsModel, MemoryClientCacheModel, Comms_CSModel, NavigationHandlerController, UBT_AppManager_CSModel, UBT_AppManagerController, Connect2_LegacyShared_Layout_Layout_mvcModel, Connect2_LegacyShared_Layout_MenuIcon_Back_mvcModel, Connect2_LegacyShared_Reusable_Spinner_mvcModel, Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvcModel, Connect2_LegacyShared_Share_UI_ShareObjectDetail_ExtendedShare_mvcModel, Connect2_LegacyShared_Share_UI_ShareObjectDetail_mvcModel) {
var OS = OutSystems.Internal;
var GetMessageTemplateParametersByMessageTemplateIdAggrRec = (function (_super) {
__extends(GetMessageTemplateParametersByMessageTemplateIdAggrRec, _super);
function GetMessageTemplateParametersByMessageTemplateIdAggrRec(defaults) {
_super.apply(this, arguments);
}
GetMessageTemplateParametersByMessageTemplateIdAggrRec.RecordListType = Connect2_LegacySharedModel.MessageParameterRecordList;
GetMessageTemplateParametersByMessageTemplateIdAggrRec.init();
return GetMessageTemplateParametersByMessageTemplateIdAggrRec;
})(OS.Model.AggregateRecord);

var GetMessageInstanceDataActRec = (function (_super) {
__extends(GetMessageInstanceDataActRec, _super);
function GetMessageInstanceDataActRec(defaults) {
_super.apply(this, arguments);
}
GetMessageInstanceDataActRec.attributesToDeclare = function () {
return [
this.attr("Message", "messageOut", "Message", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord());
}, true, Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord), 
this.attr("IsRetracted", "isRetractedOut", "IsRetracted", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsCleared", "isClearedOut", "IsCleared", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PlaceholderDelimiters", "placeholderDelimitersOut", "PlaceholderDelimiters", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord());
}, true, Connect2_LegacySharedModel.Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord)
].concat(_super.attributesToDeclare.call(this));
};
GetMessageInstanceDataActRec.init();
return GetMessageInstanceDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsEntryScreen", "isEntryScreenVar", "IsEntryScreen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("ShowAssembleAction", "showAssembleActionVar", "ShowAssembleAction", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("MessageInstanceId", "messageInstanceIdIn", "MessageInstanceId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_messageInstanceIdInDataFetchStatus", "_messageInstanceIdInDataFetchStatus", "_messageInstanceIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MessageTemplateId", "messageTemplateIdIn", "MessageTemplateId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_messageTemplateIdInDataFetchStatus", "_messageTemplateIdInDataFetchStatus", "_messageTemplateIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HardwareId", "hardwareIdIn", "HardwareId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_hardwareIdInDataFetchStatus", "_hardwareIdInDataFetchStatus", "_hardwareIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isOriginPushNotification", "isOriginPushNotificationIn", "isOriginPushNotification", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isOriginPushNotificationInDataFetchStatus", "_isOriginPushNotificationInDataFetchStatus", "_isOriginPushNotificationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetMessageTemplateParametersByMessageTemplateId", "getMessageTemplateParametersByMessageTemplateIdAggr", "getMessageTemplateParametersByMessageTemplateIdAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetMessageTemplateParametersByMessageTemplateIdAggrRec());
}, true, GetMessageTemplateParametersByMessageTemplateIdAggrRec), 
this.attr("GetMessageInstance", "getMessageInstanceDataAct", "getMessageInstanceDataAct", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetMessageInstanceDataActRec());
}, true, GetMessageInstanceDataActRec)
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
Model._hasValidationWidgetsValue = (((((Connect2_LegacyShared_Layout_Layout_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon_Back_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Reusable_Spinner_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Share_UI_ShareObjectDetail_ExtendedShare_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Share_UI_ShareObjectDetail_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("MessageInstanceId" in inputs) {
this.variables.messageInstanceIdIn = inputs.MessageInstanceId;
if("_messageInstanceIdInDataFetchStatus" in inputs) {
this.variables._messageInstanceIdInDataFetchStatus = inputs._messageInstanceIdInDataFetchStatus;
}

}

if("MessageTemplateId" in inputs) {
this.variables.messageTemplateIdIn = inputs.MessageTemplateId;
if("_messageTemplateIdInDataFetchStatus" in inputs) {
this.variables._messageTemplateIdInDataFetchStatus = inputs._messageTemplateIdInDataFetchStatus;
}

}

if("HardwareId" in inputs) {
this.variables.hardwareIdIn = inputs.HardwareId;
if("_hardwareIdInDataFetchStatus" in inputs) {
this.variables._hardwareIdInDataFetchStatus = inputs._hardwareIdInDataFetchStatus;
}

}

if("isOriginPushNotification" in inputs) {
this.variables.isOriginPushNotificationIn = inputs.isOriginPushNotification;
if("_isOriginPushNotificationInDataFetchStatus" in inputs) {
this.variables._isOriginPushNotificationInDataFetchStatus = inputs._isOriginPushNotificationInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "MyNotifications.ScreenBlock_MessageDetail");
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "Comms_CS.model", "NavigationHandler.controller", "UBT_AppManager_CS.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$model", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon_Back.mvc$view", "Connect2_LegacyShared.Reusable.Spinner.mvc$view", "Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$view", "Connect2_LegacyShared.Share_UI.ShareObjectDetail_ExtendedShare.mvc$view", "Connect2_LegacyShared.Share_UI.ShareObjectDetail.mvc$view", "Connect2_LegacyShared.model$HostConfigRec", "Connect2_LegacyShared.controller$GetHostConfigByConfigId", "UBTConnect_Utils.controller$GetHasExtendedShare", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasDeceasedProfileAccess", "UBTConnect_Utils.controller$GetHasAssemble", "Connect2_LegacyShared.model$HostConfig_SpacingRec", "Connect2_LegacyShared.model$HostConfig_FontTypeRec", "Connect2_LegacyShared.model$HostConfig_FontRec", "Connect2_LegacyShared.model$HostConfig_FontSizeRec", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec", "Connect2_LegacyShared.model$MessageParameterRecordList", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_LegacyShared.referencesHealth$UBTJavaScriptUtils", "Connect2_LegacyShared.controller$DecrementReadMessagesCounter", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "Comms_CS.model$MessageParameterRec", "Connect2_LegacyShared.referencesHealth$Comms_CS", "Connect2_LegacyShared.model$MessageParameterList", "Connect2_LegacyShared.controller$BuildAssembleNotificationContent", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.controller$AddFirstSentence", "Connect2_LegacyShared.controller$DecrementReadWhatsNewsCounter", "UBTConnect_Utils.controller$GetHasOrbitHostSurvey", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_GetDeviceContext", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "Connect2_LegacyShared.model$AdaptiveCardActionSubmitDataRec", "Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord", "Connect2_LegacyShared.model$Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnect_UtilsController, UBTJavaScriptUtilsController, UBTConnect_UtilsModel, MemoryClientCacheModel, Comms_CSModel, NavigationHandlerController, UBT_AppManager_CSModel, UBT_AppManagerController, React, OSView, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_model, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_controller, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view, Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvc_view, Connect2_LegacyShared_Share_UI_ShareObjectDetail_ExtendedShare_mvc_view, Connect2_LegacyShared_Share_UI_ShareObjectDetail_mvc_view) {
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
        View.displayName = "MyNotifications.ScreenBlock_MessageDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view, Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvc_view, Connect2_LegacyShared_Share_UI_ShareObjectDetail_ExtendedShare_mvc_view, Connect2_LegacyShared_Share_UI_ShareObjectDetail_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_Layout_mvc_view, {
inputs: {},
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
menu: PlaceholderContent.Empty,
headerLeft: new PlaceholderContent(function () {
return [React.createElement(Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_view, {
inputs: {},
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
}),
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "notification-detail-title-overflow",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("DKqJkOKWh02cPaZfY0UAnA.Value"), function () {
return ((((model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.sentAsAttr) !== (OS.BuiltinFunctions.nullIdentifier()))) ? ((((model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.lordsDayMeal)) ? ("Meal Allocation") : (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.nameAttr))) : (model.variables.getMessageInstanceDataAct.messageOut.userAttr.nameAttr));
}, function () {
return model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.sentAsAttr;
}, function () {
return model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr;
}, function () {
return model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.nameAttr;
}, function () {
return model.variables.getMessageInstanceDataAct.messageOut.userAttr.nameAttr;
}),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr)
}))];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [$if(model.variables.isLoadingVar, false, this, function () {
return [React.createElement(Connect2_LegacyShared_Reusable_Spinner_mvc_view, {
inputs: {
ShowLoader: true
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
})];
}, function () {
return [React.createElement(Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvc_view, {
inputs: {
DateTimeCreated: model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.dateTimeCreatedAttr,
_dateTimeCreatedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
ForceNoIconBorder: ((model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.orbit) || (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.orbitHostSurvey)),
_forceNoIconBorderInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
ShowDetailsPlaceholder: (model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageInfoTypeIdAttr === Connect2_LegacySharedModel.staticEntities.messageInfoType.sharing),
_showDetailsPlaceholderInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
MessageContent: model.variables.getMessageInstanceDataAct.messageOut.messageContentAttr.messageContentAttr,
_messageContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
Title: model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.titleAttr,
_titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
Summary: model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.summaryAttr,
_summaryInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
IsUrgent: (model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageTemplatePriorityIdAttr === Connect2_LegacySharedModel.staticEntities.messagePriority.urgent),
_isUrgentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
isAdaptiveCard: model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.isAdaptiveCardAttr,
_isAdaptiveCardInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
AdaptiveCardContent: model.variables.getMessageInstanceDataAct.messageOut.adaptiveCardJSONAttr.adaptiveCardContentAttr,
_adaptiveCardContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
HasActionButton: (((model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.orbit) || (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.orbitHostSurvey)) || (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.assemble)),
_hasActionButtonInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
ProfileIconURL: model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.profileIconURLAttr,
_profileIconURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
HostConfig: model.getCachedValue(idService.getId("NotificationDetailBlock.HostConfig"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.getHostConfigByConfigId$Action(Connect2_LegacySharedModel.staticEntities.adaptiveCardsConfig.events, callContext).out_HostConfigOut;
}, OS.DataTypes.DataTypes.Record, callContext.id);
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
adaptiveCardEventExecuted$Action: function (cardPayloadIn, actionIdIn, formPayloadIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Widgets/NotificationDetailBlock AdaptiveCardEventExecuted");
return controller.adaptiveCardViewerOnExecuteAction$Action(cardPayloadIn, actionIdIn, formPayloadIn, controller.callContext(eventHandlerContext));
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
name: "NotificationDetailBlock",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
messageDetails: new PlaceholderContent(function () {
return [$if((model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageInfoTypeIdAttr === Connect2_LegacySharedModel.staticEntities.messageInfoType.sharing), false, this, function () {
return [$if(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext).hasExtendedShareOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function () {
return [React.createElement(Connect2_LegacyShared_Share_UI_ShareObjectDetail_ExtendedShare_mvc_view, {
inputs: {
ShareId: model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut.getCurrent(callContext.iterationContext).messageParameterAttr.parameterValueAttr,
_shareIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.dataFetchStatusAttr),
HasAccessToDeceasedHousehold: model.getCachedValue(idService.getId("bGhphoJyHkeKxL9utwMtGg.HasAccessToDeceasedHousehold"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getHasDeceasedProfileAccess$Action(callContext).hasDeceasedProfileAccessOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id);
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
setFeedItemId$Action: function (event_FeedItemIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ShareObjectDetail_ExtendedShare SetFeedItemId");
controller.setFeedItemId$Action(event_FeedItemIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
subscriptionDenied$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ShareObjectDetail_ExtendedShare SubscriptionDenied");
controller.subscriptionDenied$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
goToObjectDetail$Action: function (objectIdIn, shareObjectTypeIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ShareObjectDetail_ExtendedShare GoToObjectDetail");
controller.navigateTo_ObjectDetail$Action(objectIdIn, shareObjectTypeIdIn, controller.callContext(eventHandlerContext));
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
uuid: "6",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_FeedItem: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_FeedItem2,
_idProps: {
service: idService,
name: "Placeholder_FeedItem2"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
})];
}, function () {
return [React.createElement(Connect2_LegacyShared_Share_UI_ShareObjectDetail_mvc_view, {
inputs: {
HasAccessToDeceasedHousehold: model.getCachedValue(idService.getId("PgUuK77cOES36+dzW2qGow.HasAccessToDeceasedHousehold"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getHasDeceasedProfileAccess$Action(callContext).hasDeceasedProfileAccessOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id);
}),
ShareId: model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut.getCurrent(callContext.iterationContext).messageParameterAttr.parameterValueAttr,
_shareIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
setFeedItemId$Action: function (event_FeedItemIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ShareObjectDetail SetFeedItemId");
controller.setFeedItemId$Action(event_FeedItemIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
goToObjectDetail$Action: function (objectIdIn, shareObjectTypeIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ShareObjectDetail GoToObjectDetail");
controller.navigateTo_ObjectDetail$Action(OS.BuiltinFunctions.longIntegerToText(objectIdIn), shareObjectTypeIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
subscriptionDenied$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ShareObjectDetail SubscriptionDenied");
controller.subscriptionDenied$Action(controller.callContext(eventHandlerContext));
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
uuid: "8",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_FeedItem: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_FeedItem,
_idProps: {
service: idService,
name: "Placeholder_FeedItem"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
})];
})];
}, function () {
return [];
})];
}),
placeholder_ActionButton: new PlaceholderContent(function () {
return [$if((model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.assemble), false, this, function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail/ViewAssembleEvent OnClick");
return controller.onClick_ViewAssembleEvent$Action(model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn btn-primary full-width ignore-cap",
visible: model.getCachedValue(idService.getId("ViewAssembleEvent.Visible"), function () {
return ((OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getHasAssemble$Action(callContext).hasAssembleOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id) && model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.isDataFetchedAttr) && model.variables.showAssembleActionVar);
}, function () {
return model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.isDataFetchedAttr;
}, function () {
return model.variables.showAssembleActionVar;
}),
_idProps: {
service: idService,
name: "ViewAssembleEvent"
},
_widgetRecordProvider: widgetsRecordProvider
}, "View Meeting")];
}, function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageDetail/ViewOrbitEvent OnClick");
return controller.onClick_ViewOrbitEvent$Action(model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn btn-primary full-width ignore-cap",
visible: (model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.isDataFetchedAttr && !(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut.isEmpty)),
_idProps: {
service: idService,
name: "ViewOrbitEvent"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.dataFetchStatusAttr)
}, $if((model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.orbit), false, this, function () {
return ["View Event"];
}, function () {
return ["Go to Host Survey"];
}))];
})];
})
}
})];
})];
}),
bottomBar: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.bottomBar,
_idProps: {
service: idService,
name: "BottomBar"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
commonUI_Elements: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.commonUI_Elements,
_idProps: {
service: idService,
name: "CommonUI_Elements"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "Comms_CS.model", "NavigationHandler.controller", "UBT_AppManager_CS.model", "UBT_AppManager.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$debugger", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$controller.GetMessageInstanceByIdOnAfterFetch.WasCurrentViewRestoredFromCacheJS", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$controller.AdaptiveCardViewerOnExecuteAction.SubstringJS", "Connect2_LegacyShared.model$HostConfigRec", "Connect2_LegacyShared.controller$GetHostConfigByConfigId", "UBTConnect_Utils.controller$GetHasExtendedShare", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasDeceasedProfileAccess", "UBTConnect_Utils.controller$GetHasAssemble", "Connect2_LegacyShared.model$HostConfig_SpacingRec", "Connect2_LegacyShared.model$HostConfig_FontTypeRec", "Connect2_LegacyShared.model$HostConfig_FontRec", "Connect2_LegacyShared.model$HostConfig_FontSizeRec", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec", "Connect2_LegacyShared.model$MessageParameterRecordList", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_LegacyShared.referencesHealth$UBTJavaScriptUtils", "Connect2_LegacyShared.controller$DecrementReadMessagesCounter", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "Comms_CS.model$MessageParameterRec", "Connect2_LegacyShared.referencesHealth$Comms_CS", "Connect2_LegacyShared.model$MessageParameterList", "Connect2_LegacyShared.controller$BuildAssembleNotificationContent", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.controller$AddFirstSentence", "Connect2_LegacyShared.controller$DecrementReadWhatsNewsCounter", "UBTConnect_Utils.controller$GetHasOrbitHostSurvey", "UBTConnect_Utils.controller$GetHasOrbitAccess", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_GetDeviceContext", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "Connect2_LegacyShared.model$AdaptiveCardActionSubmitDataRec", "Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord", "Connect2_LegacyShared.model$Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnect_UtilsController, UBTJavaScriptUtilsController, UBTConnect_UtilsModel, MemoryClientCacheModel, Comms_CSModel, NavigationHandlerController, UBT_AppManager_CSModel, UBT_AppManagerController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_Debugger, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_controller_GetMessageInstanceByIdOnAfterFetch_WasCurrentViewRestoredFromCacheJS, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_controller_AdaptiveCardViewerOnExecuteAction_SubstringJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getMessageTemplateParametersByMessageTemplateId$AggrRefresh: -1,
getMessageInstance$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getMessageTemplateParametersByMessageTemplateId$AggrRefresh: [],
getMessageInstance$DataActRefresh: ["getMessageTemplateParametersByMessageTemplateId$AggrRefresh"]
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.wrapper_NotificationOpened$ServerAction = function (messageInstanceIdIn, callContext) {
var controller = this.controller;
var inputs = {
MessageInstanceId: OS.DataConversion.ServerDataConverter.to(messageInstanceIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("Wrapper_NotificationOpened", "screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionWrapper_NotificationOpened", "exMDHnnIxV24qT34LZfnKg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail$ActionWrapper_NotificationOpened"))();
executeServerActionResult.isRetractedOut = OS.DataConversion.ServerDataConverter.from(outputs.IsRetracted, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail$ActionWrapper_NotificationOpened", [{
name: "IsRetracted",
attrName: "isRetractedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype.get_OrbitHostSurveyNotificationParameters$ServerAction = function (listOfMessageParametersIn, callContext) {
var controller = this.controller;
var inputs = {
ListOfMessageParameters: OS.DataConversion.ServerDataConverter.to(listOfMessageParametersIn, OS.DataTypes.DataTypes.RecordList)
};
return controller.callServerAction("Get_OrbitHostSurveyNotificationParameters", "screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionGet_OrbitHostSurveyNotificationParameters", "cSycKcULJsBSOlHxaAEQaw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail$ActionGet_OrbitHostSurveyNotificationParameters"))();
executeServerActionResult.orbitEventIdOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitEventId, OS.DataTypes.DataTypes.Text);
executeServerActionResult.orbitEventNameOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitEventName, OS.DataTypes.DataTypes.Text);
executeServerActionResult.orbitStartDateOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitStartDate, OS.DataTypes.DataTypes.DateTime);
executeServerActionResult.orbitEndDateOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitEndDate, OS.DataTypes.DataTypes.DateTime);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail$ActionGet_OrbitHostSurveyNotificationParameters", [{
name: "OrbitEventId",
attrName: "orbitEventIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "OrbitEventName",
attrName: "orbitEventNameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "OrbitStartDate",
attrName: "orbitStartDateOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "OrbitEndDate",
attrName: "orbitEndDateOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Controller.prototype.get_OrbitNotificationParameters$ServerAction = function (listOfMessageParametersIn, callContext) {
var controller = this.controller;
var inputs = {
ListOfMessageParameters: OS.DataConversion.ServerDataConverter.to(listOfMessageParametersIn, OS.DataTypes.DataTypes.RecordList)
};
return controller.callServerAction("Get_OrbitNotificationParameters", "screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionGet_OrbitNotificationParameters", "NutnpbH7smc0MbReWN59AQ", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail$ActionGet_OrbitNotificationParameters"))();
executeServerActionResult.orbitMilestoneIdOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitMilestoneId, OS.DataTypes.DataTypes.Text);
executeServerActionResult.orbitEventIdOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitEventId, OS.DataTypes.DataTypes.Text);
executeServerActionResult.orbitEventNameOut = OS.DataConversion.ServerDataConverter.from(outputs.OrbitEventName, OS.DataTypes.DataTypes.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail$ActionGet_OrbitNotificationParameters", [{
name: "OrbitMilestoneId",
attrName: "orbitMilestoneIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "OrbitEventId",
attrName: "orbitEventIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "OrbitEventName",
attrName: "orbitEventNameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype.storeAdaptiveCardResponses$ServerAction = function (deviceHardwareIdIn, adaptiveCardPayloadJSONIn, actionTakenIn, formDataJSONIn, messageInstanceIdIn, callContext) {
var controller = this.controller;
var inputs = {
DeviceHardwareId: OS.DataConversion.ServerDataConverter.to(deviceHardwareIdIn, OS.DataTypes.DataTypes.Text),
AdaptiveCardPayloadJSON: OS.DataConversion.ServerDataConverter.to(adaptiveCardPayloadJSONIn, OS.DataTypes.DataTypes.Text),
ActionTaken: OS.DataConversion.ServerDataConverter.to(actionTakenIn, OS.DataTypes.DataTypes.Text),
FormDataJSON: OS.DataConversion.ServerDataConverter.to(formDataJSONIn, OS.DataTypes.DataTypes.Text),
MessageInstanceId: OS.DataConversion.ServerDataConverter.to(messageInstanceIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("StoreAdaptiveCardResponses", "screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ActionStoreAdaptiveCardResponses", "XeoNNno7cDIEvC+uUVtcAg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

// Aggregates and Data Actions
Controller.prototype.getMessageTemplateParametersByMessageTemplateId$AggrRefresh = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:FCxGTwFfd0mbYK8w2IAqxQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.I7n1A97iBkCzNZ5K8Tqong/ScreenDataSets.FCxGTwFfd0mbYK8w2IAqxQ:uZ3ZigahCdG01Ho4J_nlow", "Connect2_LegacyShared", "GetMessageTemplateParametersByMessageTemplateId", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageDetail/GetMessageTemplateParametersByMessageTemplateId");
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetMessageTemplateParametersByMessageTemplateId", "screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId", "e+NjG8gACl581zZaBm0AKA", maxRecords, startIndex, function (b) {
model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageDetail/GetMessageTemplateParametersByMessageTemplateId On After Fetch");
controller._getMessageTemplateParametersOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:FCxGTwFfd0mbYK8w2IAqxQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getMessageInstance$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:WQI0ZqKXF0OHs23dVYUm+g:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.I7n1A97iBkCzNZ5K8Tqong/DataActions.WQI0ZqKXF0OHs23dVYUm+g:h4RKHQnln5wfaarI2N7Epg", "Connect2_LegacyShared", "GetMessageInstance", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageDetail/GetMessageInstance");
return controller.callDataAction("DataActionGetMessageInstance", "screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageDetail/DataActionGetMessageInstance", "IjDVxayiIsiG43Zm6O5vdg", function (b) {
model.variables.getMessageInstanceDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getMessageInstanceDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getMessageInstanceDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageDetail/GetMessageInstance On After Fetch");
return controller._getMessageInstanceByIdOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:WQI0ZqKXF0OHs23dVYUm+g", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getMessageTemplateParametersByMessageTemplateId$AggrRefresh", "getMessageInstance$DataActRefresh"];
// Client Actions
Controller.prototype._getMessageTemplateParametersOnAfterFetch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetMessageTemplateParametersOnAfterFetch");
callContext = controller.callContext(callContext);
var listIndexOf_EventParentIdVar = new OS.DataTypes.VariableHolder();
var listIndexOf_EventInstanceIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listIndexOf_EventParentIdVar = listIndexOf_EventParentIdVar;
varBag.listIndexOf_EventInstanceIdVar = listIndexOf_EventInstanceIdVar;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:bFiIBIJKuE+fqXymaxtDPw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.I7n1A97iBkCzNZ5K8Tqong/ClientActions.bFiIBIJKuE+fqXymaxtDPw:WVhfptCXcje+h+0ZYuQNNQ", "Connect2_LegacyShared", "GetMessageTemplateParametersOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:D2wi0CKFxEC8TdzcaR0XqA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:343MyDmgw0m_8bR+0ytxcg", callContext.id) && (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.assemble))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:8tBOWW6ZRUi+hewi+XvV4g", callContext.id);
// Execute Action: ListIndexOf_EventParentId
listIndexOf_EventParentIdVar.value = OS.SystemActions.listIndexOf(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut, function (p) {
return (p.messageParameterAttr.parameterNameIdAttr === Connect2_LegacySharedModel.staticEntities.parameterName.assembleEventParentId);
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HG6+yb90yEGgdF30BSeBnA", callContext.id);
// Execute Action: ListIndexOf_EventInstanceId
listIndexOf_EventInstanceIdVar.value = OS.SystemActions.listIndexOf(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut, function (p) {
return (p.messageParameterAttr.parameterNameIdAttr === Connect2_LegacySharedModel.staticEntities.parameterName.assembleEventInstanceId);
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:pzRL5FbAgkG2mkXF3pkozg", callContext.id);
// ShowAssembleAction = ListIndexOf_EventParentId.Position <> -1 and ListIndexOf_EventInstanceId.Position <> -1
model.variables.showAssembleActionVar = (((listIndexOf_EventParentIdVar.value.positionOut) !== (-1)) && ((listIndexOf_EventInstanceIdVar.value.positionOut) !== (-1)));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:n94d4f1XKUi3HXm7tvtIkA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:owtcIoUGN0ilaLG7wwvKWA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:bFiIBIJKuE+fqXymaxtDPw", callContext.id);
}

};
Controller.prototype._getMessageInstanceByIdOnAfterFetch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetMessageInstanceByIdOnAfterFetch");
callContext = controller.callContext(callContext);
var wrapper_NotificationOpenedVar = new OS.DataTypes.VariableHolder();
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
var buildAssembleNotificationContentVar = new OS.DataTypes.VariableHolder();
var cache_SignedImageURL_GetVar = new OS.DataTypes.VariableHolder();
var addFirstSentenceVar = new OS.DataTypes.VariableHolder();
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.wrapper_NotificationOpenedVar = wrapper_NotificationOpenedVar;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
varBag.buildAssembleNotificationContentVar = buildAssembleNotificationContentVar;
varBag.cache_SignedImageURL_GetVar = cache_SignedImageURL_GetVar;
varBag.addFirstSentenceVar = addFirstSentenceVar;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:MUT_CuQ7r0O_2+SylgE1cw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.I7n1A97iBkCzNZ5K8Tqong/ClientActions.MUT_CuQ7r0O_2+SylgE1cw:YUnuCspMtE9YeXf6nXW_iQ", "Connect2_LegacyShared", "GetMessageInstanceByIdOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:89JMaJbCaEuAATWXL0+Z8A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:N9HjiMJKJEKHGzQe2_3gAA", callContext.id);
// MessageInstanceId = GetMessageInstance.Message.MessageInstance.Id
model.variables.messageInstanceIdIn = model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.idAttr;
// IsRetracted?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iDqm+m7Uf0qV+SfDdgVJiA", callContext.id) && model.variables.getMessageInstanceDataAct.isRetractedOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:8X74TSgIYkenBQLALeERdg", callContext.id);
// Execute Action: MessageRetractedFlow
return controller._messageRetractedFlow$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BbnRQ9GPfUijnNj_3B1H0w", callContext.id);
});
} else {
// Message instance not found?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:cgWCf_RoSUGG9T3K72rQmg", callContext.id) && model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.idAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
// User Logged In ?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:t3rmjlVay0aFKseny6vrxA", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:regfa8Bg0U6bZsXaZKotjQ", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "You don\'t have access to that message", Connect2_LegacySharedModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:msloy6iYDkmAk8PAmnH+Tg", callContext.id);
// Execute Action: ReplaceOnUpcomingNavigation2
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:VTFxGJZJFkSFW3VxnUzWBg", callContext.id);
// Trigger Event: NavigateTo_MessageList2
return controller.navigateTo_MessageList$Action(true, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Rghr9XMoWES5pLvs+P0fTQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Q4E1a574W0KeCuwC6rd8bA", callContext.id);
// Trigger Event: NavigateTo_Login2
return controller.navigateTo_Login$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:SlCaMuCHxk+H5A_fpOZrJA", callContext.id);
});
}

});
} else {
// Is Private ?
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
// Is Private ?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hQ13TbEQ80uNRQd10zkrkQ", callContext.id) && (model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageTemplateTypeIdAttr === Connect2_LegacySharedModel.staticEntities.messageType.private))) {
// User Logged In ?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:07PYtF4_ukSmmNUSDIb6kg", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
// Target User  = user logged in ?
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xZ4tGqAP6EmjkYvy3olW4g", callContext.id) && !((model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.userIdAttr === OS.BuiltinFunctions.getUserId())))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6OYEQfwA3EWrKDd35Qde2g", callContext.id);
// Execute Action: FeedbackMessage_AutoClose2
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "You don\'t have access to that message", Connect2_LegacySharedModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
return OS.Flow.breakAsync();
}

} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Q9kbw7MVkUCqsdLaKv94xg", callContext.id);
// Trigger Event: NavigateTo_Login
return controller.navigateTo_Login$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:g0cdlEckskeFAa1CuUqpGg", callContext.id);
return OS.Flow.returnAsync();

});
}

});
}

}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RxOC+0h0b0OnCHHY+WvQJQ", callContext.id) && model.variables.getMessageInstanceDataAct.isClearedOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CRM7EcDd3EqanTlPFpupcQ", callContext.id);
// Execute Action: FeedbackMessage_AutoClose3
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "Sorry, this message is not available anymore.", Connect2_LegacySharedModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
} else {
var block3 = false;
// Is Notification Read ?
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
block3 = false;
// Is Notification Read ?
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
// Is Notification Read ?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1GQGlxMGhUK1c1udlbsewQ", callContext.id) && !(model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.isReadAttr))) {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XQRjQgAen0mdlnYE5ms6DQ", callContext.id) && (model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageInfoTypeIdAttr === Connect2_LegacySharedModel.staticEntities.messageInfoType.whatsNew))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:j4cz4x8wz0iixBHxn9j66g", callContext.id);
// Execute Action: DecrementReadWhatsNewsCounter
Connect2_LegacySharedController.default.decrementReadWhatsNewsCounter$Action(callContext);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UlbzFgm7HEOHU8OOS+BgiA", callContext.id);
// Execute Action: DecrementReadMessagesCounter
Connect2_LegacySharedController.default.decrementReadMessagesCounter$Action(callContext);
}

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hLTrvZXpIEGYKD8OWmwwUA", callContext.id);
// Execute Action: Wrapper_NotificationOpened
model.flush();
return controller.wrapper_NotificationOpened$ServerAction(model.variables.messageInstanceIdIn, callContext).then(function (value) {
wrapper_NotificationOpenedVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bPwkbvQCakiehIr98KfgXA", callContext.id) && wrapper_NotificationOpenedVar.value.isRetractedOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:N8c2P+_RT022Em+WXQPyBg", callContext.id);
// Execute Action: MessageRetractedFlow2
return controller._messageRetractedFlow$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QWMQ634v2UCv6i7oo8GeGQ", callContext.id);
return OS.Flow.returnAsync();

});
}

});
});
}

}).then(function () {
// SentAs = NullIdentifier()?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:O0yvERX1GkKTwbfjcAgIgg", callContext.id) && (model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.sentAsAttr === OS.BuiltinFunctions.nullIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GHkezfkd5E+uEE9jJkc19Q", callContext.id);
// Execute Action: Cache_SignedImageURL_Get
model.flush();
return UBTConnect_UtilsController.default.cache_SignedImageURL_Get$Action(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(model.variables.getMessageInstanceDataAct.messageOut.createdByMemberIdAttr)), Connect2_LegacySharedModel.staticEntities.connect_Entity.member, Connect2_LegacySharedModel.staticEntities.imageSize.small, callContext).then(function (value) {
cache_SignedImageURL_GetVar.value = value;
}).then(function () {
// Set ProfileIconURL
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zDilN6Ih9USPXkeSo2EpaQ", callContext.id);
// GetMessageInstance.Message.MessageSenderTarget.ProfileIconURL = Cache_SignedImageURL_Get.URL
model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.profileIconURLAttr = cache_SignedImageURL_GetVar.value.uRLOut;
});
}

});
}).then(function () {
// Is Sharing or Orbit?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:aLclnSXBWUOwVRzGxMjFyw", callContext.id) && ((((model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageInfoTypeIdAttr === Connect2_LegacySharedModel.staticEntities.messageInfoType.sharing) || (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.orbit)) || (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.orbitHostSurvey)) || (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.assemble)))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WK4mlKmnl0++izFOS76J1Q", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_controller_GetMessageInstanceByIdOnAfterFetch_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "GetMessageInstanceByIdOnAfterFetch", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.GetMessageInstanceByIdOnAfterFetch$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xC53fZl+JUmIEcCmTK1mHw", callContext.id) && !(wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5oOsS2q5F0umFrdPU0UKXg", callContext.id);
// Refresh Query: GetMessageTemplateParametersByMessageTemplateId
var result = controller.getMessageTemplateParametersByMessageTemplateId$AggrRefresh(50, 0, callContext);
model.flush();
return result;
}

}).then(function () {
// Is Orbit?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:14QjNYdv_UyDAHMAa6eAUQ", callContext.id) && ((model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.orbitHostSurvey) || (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.orbit)))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HoR0a8LT8kWjKvRf0YjyRQ", callContext.id);
// Execute Action: Cache_UserInfo_Get
model.flush();
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Y6Ee3jz34kO1987t2xs1rQ", callContext.id);
// Execute Action: AddFirstSentence
addFirstSentenceVar.value = Connect2_LegacySharedController.default.addFirstSentence$Action(cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.firstNameAttr, model.variables.getMessageInstanceDataAct.messageOut.messageContentAttr.messageContentAttr, callContext);

// Replace Message
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:24iUt4Ef3kGLPIgRl8GOpg", callContext.id);
// GetMessageInstance.Message.MessageContent.MessageContent = AddFirstSentence.Out_MessageContent
model.variables.getMessageInstanceDataAct.messageOut.messageContentAttr.messageContentAttr = addFirstSentenceVar.value.out_MessageContentOut;
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LoaNXYWRd0SxJOV60DvU1A", callContext.id) && (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.assemble))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:TsyJmjgG8kK5HE8eETHuSA", callContext.id);
// Execute Action: BuildAssembleNotificationContent
model.flush();
return Connect2_LegacySharedController.default.buildAssembleNotificationContent$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut, new Connect2_LegacySharedModel.MessageParameterList(), function (source, target) {
target = source.messageParameterAttr;
return target;
}), model.variables.getMessageInstanceDataAct.messageOut.messageContentAttr.messageContentAttr, model.variables.getMessageInstanceDataAct.placeholderDelimitersOut.delimitersAttr.delimiter_PlaceholderAttr, model.variables.getMessageInstanceDataAct.placeholderDelimitersOut.delimitersAttr.delimiter_FunctionAttr, model.variables.getMessageInstanceDataAct.placeholderDelimitersOut.delimitersAttr.delimiter_ParameterAttr, callContext).then(function (value) {
buildAssembleNotificationContentVar.value = value;
}).then(function () {
// Replace Message
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zd5i40b60Eqnr8wOg6OBIw", callContext.id);
// GetMessageInstance.Message.MessageContent.MessageContent = BuildAssembleNotificationContent.Content
model.variables.getMessageInstanceDataAct.messageOut.messageContentAttr.messageContentAttr = buildAssembleNotificationContentVar.value.contentOut;
});
} else {
return OS.Flow.breakAsync();
}

});
}

});
}).then(function () {
// <<
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:D+iDde9yiUy2neRgtkN6jQ", callContext.id);
// jump to block3
block3 = true;
return OS.Flow.breakAsync();
});
}

});
});
}).then(function () {
if(block3) {
return OS.Flow.breakAsync();
}

}).then(function () {
// <<
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RolM4fpgq0eqeu6HdpJdNQ", callContext.id);
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Dt36m8km50CXr19OxFfF2A", callContext.id);
// IsLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1Uqnn0Saukmc1_2jWORjHw", callContext.id);
return OS.Flow.returnAsync();

});
}

});
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Jbgk8zFvpkOzbNMekrPLLQ", callContext.id);
// Execute Action: ReplaceOnUpcomingNavigation
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:IF1JohPFA0iOed3pArrrUA", callContext.id);
// Trigger Event: NavigateTo_MessageList
return controller.navigateTo_MessageList$Action(true, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JGEC6LxQpU6X23UhHykZHQ", callContext.id);
});
});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:MUT_CuQ7r0O_2+SylgE1cw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:MUT_CuQ7r0O_2+SylgE1cw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.GetMessageInstanceByIdOnAfterFetch$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onClick_ViewOrbitEvent$Action = function (messageSenderTargetIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_ViewOrbitEvent");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.OnClick_ViewOrbitEvent$vars"))());
vars.value.messageSenderTargetIdInLocal = messageSenderTargetIdIn;
var get_OrbitHostSurveyNotificationParametersVar = new OS.DataTypes.VariableHolder();
var get_OrbitNotificationParametersVar = new OS.DataTypes.VariableHolder();
var getHasOrbitHostSurveyVar = new OS.DataTypes.VariableHolder();
var cache_UserInfo_Get2Var = new OS.DataTypes.VariableHolder();
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
var getHasOrbitAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.get_OrbitHostSurveyNotificationParametersVar = get_OrbitHostSurveyNotificationParametersVar;
varBag.get_OrbitNotificationParametersVar = get_OrbitNotificationParametersVar;
varBag.getHasOrbitHostSurveyVar = getHasOrbitHostSurveyVar;
varBag.cache_UserInfo_Get2Var = cache_UserInfo_Get2Var;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
varBag.getHasOrbitAccessVar = getHasOrbitAccessVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:yKiGS69DSkGWAtlaRLkADQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.I7n1A97iBkCzNZ5K8Tqong/ClientActions.yKiGS69DSkGWAtlaRLkADQ:bzGq+cdBkOBbDhG2wOqrdw", "Connect2_LegacyShared", "OnClick_ViewOrbitEvent", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MMavULtWjU6VUy7T69HM9A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Parameter Data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7lGlZTIR50GKW5Kwyo+W5A", callContext.id) && !(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bIFa0R1iIkuCHtx3UUGQng", callContext.id);
// Execute Action: GetHasOrbitAccess
getHasOrbitAccessVar.value = UBTConnect_UtilsController.default.getHasOrbitAccess$Action(callContext);

// User has Orbit Access?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bA6abRAj7k6ceF9V_P3GOQ", callContext.id) && getHasOrbitAccessVar.value.hasOrbitAccessOut)) {
// MessageSenderTarget
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:SvfcKtM5uk2qUFcwK2S8ww", callContext.id) && (vars.value.messageSenderTargetIdInLocal === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.orbit))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1YSRYELTkEGHBlXgPHA_ig", callContext.id);
// Execute Action: Get_OrbitNotificationParameters
model.flush();
return controller.get_OrbitNotificationParameters$ServerAction(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut, new Connect2_LegacySharedModel.MessageParameterList(), function (source, target) {
target = source.messageParameterAttr;
return target;
}), callContext).then(function (value) {
get_OrbitNotificationParametersVar.value = value;
}).then(function () {
// Has Milestone info?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_shBAdnj6EGHd8Z5opIi7w", callContext.id) && ((((get_OrbitNotificationParametersVar.value.orbitMilestoneIdOut) !== ("")) && ((get_OrbitNotificationParametersVar.value.orbitEventIdOut) !== (""))) && ((get_OrbitNotificationParametersVar.value.orbitEventNameOut) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:reOnmO6Cf0OzVdC_Pktm0g", callContext.id);
// Trigger Event: NavigateTo_OrbitMilestone
return controller.navigateTo_OrbitMilestone$Action(get_OrbitNotificationParametersVar.value.orbitMilestoneIdOut, OS.BuiltinFunctions.textToLongInteger(get_OrbitNotificationParametersVar.value.orbitEventIdOut), get_OrbitNotificationParametersVar.value.orbitEventNameOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QoskH0gC+kGbkLsX8fdK+g", callContext.id);
});
} else {
// Has Event info?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PWp6EC0GYkiBUr+L4N0BIQ", callContext.id) && (((get_OrbitNotificationParametersVar.value.orbitEventIdOut) !== ("")) && ((get_OrbitNotificationParametersVar.value.orbitEventNameOut) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:nRnnylS+HUiZgLumd89Hbw", callContext.id);
// Execute Action: Cache_UserInfo_Get
model.flush();
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CbmpHTbwlk+QCyIXawG56w", callContext.id);
// Trigger Event: NavigateTo_OrbitEvent
return controller.navigateTo_OrbitEvent$Action(cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.memberIDAttr, OS.BuiltinFunctions.textToLongInteger(get_OrbitNotificationParametersVar.value.orbitEventIdOut), get_OrbitNotificationParametersVar.value.orbitEventNameOut, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bTSG5CZKI0uzZ9c6+rOIcA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Z_YCybstmU2yoIC3UU8v5g", callContext.id);
}

});
}

});
});
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.messageSenderTargetIdInLocal === Connect2_LegacySharedModel.staticEntities.messageSenderTarget.orbitHostSurvey)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kM1dUJO6j0Ks_gsbgM6O6A", callContext.id);
// Execute Action: GetHasOrbitHostSurvey
getHasOrbitHostSurveyVar.value = UBTConnect_UtilsController.default.getHasOrbitHostSurvey$Action(callContext);

// User has Orbit Host Survey Access?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:9+8da2RKsUWp57BH4HE1hQ", callContext.id) && getHasOrbitHostSurveyVar.value.hasOrbitHostSurveyOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:w2IPO9hvU0OzH+w1Hem8iQ", callContext.id);
// Execute Action: Get_OrbitHostSurveyNotificationParameters
model.flush();
return controller.get_OrbitHostSurveyNotificationParameters$ServerAction(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut, new Connect2_LegacySharedModel.MessageParameterList(), function (source, target) {
target = source.messageParameterAttr;
return target;
}), callContext).then(function (value) {
get_OrbitHostSurveyNotificationParametersVar.value = value;
}).then(function () {
// Has info?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Yjb8e4mjAE20PBZ1j++lQw", callContext.id) && (((((get_OrbitHostSurveyNotificationParametersVar.value.orbitEventIdOut) !== ("")) && ((get_OrbitHostSurveyNotificationParametersVar.value.orbitEventNameOut) !== (""))) && !(get_OrbitHostSurveyNotificationParametersVar.value.orbitStartDateOut.equals(OS.BuiltinFunctions.nullDate()))) && !(get_OrbitHostSurveyNotificationParametersVar.value.orbitEndDateOut.equals(OS.BuiltinFunctions.nullDate()))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lWJlVD6FXEeI+HdS9aBS0Q", callContext.id);
// Execute Action: Cache_UserInfo_Get2
model.flush();
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_Get2Var.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:G2WuK3fQm0qa54CvZFJySg", callContext.id);
// Trigger Event: NavigateTo_OrbitHostSurvey
return controller.navigateTo_OrbitHostSurvey$Action(cache_UserInfo_Get2Var.value.userInformationOut.directory_UserCurrentAttr.memberIDAttr, OS.BuiltinFunctions.textToLongInteger(get_OrbitHostSurveyNotificationParametersVar.value.orbitEventIdOut), get_OrbitHostSurveyNotificationParametersVar.value.orbitEventNameOut, get_OrbitHostSurveyNotificationParametersVar.value.orbitStartDateOut, get_OrbitHostSurveyNotificationParametersVar.value.orbitEndDateOut, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zTBulIoghESwnktfRTxSyA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ViK3J8GM40qUTSbl7tDmWw", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:OSX5re5AyEerIHwQW+X_vQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("You don\'t have access to Orbit Host Survey. Please contact the Orbit Helpdesk if you have any questions.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EmI1dhdCoUW_atV48DxCIA", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:9IGm87+8YEuRd7GroekqpA", callContext.id);
}

});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:M57tXcXUkUekQDZY4H6LCA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("You don\'t have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:67bk+lxDDUOUAJ4l7pT9bA", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gB3_y9FWfkCQTHB8iksljg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:yKiGS69DSkGWAtlaRLkADQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:yKiGS69DSkGWAtlaRLkADQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.OnClick_ViewOrbitEvent$vars", [{
name: "MessageSenderTargetId",
attrName: "messageSenderTargetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._messageRetractedFlow$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("MessageRetractedFlow");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:ZprugAjvOEqmlSv1oM9bKw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.I7n1A97iBkCzNZ5K8Tqong/ClientActions.ZprugAjvOEqmlSv1oM9bKw:EzsDCPS3sP_QxMXm1ul2tA", "Connect2_LegacyShared", "MessageRetractedFlow", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Vc34oN9t_Uqs+TtwmeP0PA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rvIYd9MopESUER9CciHYZA", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "Sorry, this message is not available anymore.", Connect2_LegacySharedModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:egYWPgGxZUSRCDBiGRJzFw", callContext.id);
// Execute Action: ReplaceOnUpcomingNavigation
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CYoMSTzXJEOv+VxEZhLgIg", callContext.id);
// Trigger Event: NavigateTo_MessageList2
return controller.navigateTo_MessageList$Action(true, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WVE3irq6_U6KkSs7H0wGIQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:ZprugAjvOEqmlSv1oM9bKw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:ZprugAjvOEqmlSv1oM9bKw", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_ViewAssembleEvent$Action = function (messageSenderTargetIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_ViewAssembleEvent");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.OnClick_ViewAssembleEvent$vars"))());
vars.value.messageSenderTargetIdInLocal = messageSenderTargetIdIn;
var listIndexOf_EventInstanceIdVar = new OS.DataTypes.VariableHolder();
var listIndexOf_EventTypeVar = new OS.DataTypes.VariableHolder();
var listIndexOf_EventParentIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOf_EventInstanceIdVar = listIndexOf_EventInstanceIdVar;
varBag.listIndexOf_EventTypeVar = listIndexOf_EventTypeVar;
varBag.listIndexOf_EventParentIdVar = listIndexOf_EventParentIdVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:phr_i0I8fUCmWCuygT9evA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.I7n1A97iBkCzNZ5K8Tqong/ClientActions.phr_i0I8fUCmWCuygT9evA:iBB5KhFiDQzJ5McbPS9GNw", "Connect2_LegacyShared", "OnClick_ViewAssembleEvent", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:opEr8OTRuUmOLaUsb5H57A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Parameter Data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:i20eGUYF1kqN438f_I9hhg", callContext.id) && !(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut.isEmpty))) {
// Has assemble access?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:z9OVHpwzy0GoY0xqfS3N_w", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getHasAssemble$Action(callContext).hasAssembleOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HF1OrntVSUyeoCGInwkHYw", callContext.id);
// Execute Action: ListIndexOf_EventParentId
listIndexOf_EventParentIdVar.value = OS.SystemActions.listIndexOf(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut, function (p) {
return (p.messageParameterAttr.parameterNameIdAttr === Connect2_LegacySharedModel.staticEntities.parameterName.assembleEventParentId);
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0YCdBvy4AkyIqcUdMoOarg", callContext.id);
// Execute Action: ListIndexOf_EventInstanceId
listIndexOf_EventInstanceIdVar.value = OS.SystemActions.listIndexOf(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut, function (p) {
return (p.messageParameterAttr.parameterNameIdAttr === Connect2_LegacySharedModel.staticEntities.parameterName.assembleEventInstanceId);
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DCtcoFgCxEOdB_1g7T9Dkg", callContext.id);
// Execute Action: ListIndexOf_EventType
listIndexOf_EventTypeVar.value = OS.SystemActions.listIndexOf(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut, function (p) {
return (p.messageParameterAttr.parameterNameIdAttr === Connect2_LegacySharedModel.staticEntities.parameterName.assembleEventType);
}, callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:T2HZwa0F_UemJbR+gaERkA", callContext.id) && (((listIndexOf_EventParentIdVar.value.positionOut) !== (-1)) && ((listIndexOf_EventInstanceIdVar.value.positionOut) !== (-1))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rwNwPc_SMkuz_xGJfm+UYw", callContext.id);
// Trigger Event: NavigateTo_AssembleEvent
return controller.navigateTo_AssembleEvent$Action(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut.getItem(listIndexOf_EventParentIdVar.value.positionOut).messageParameterAttr.parameterValueAttr, model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut.getItem(listIndexOf_EventInstanceIdVar.value.positionOut).messageParameterAttr.parameterValueAttr, model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut.getItem(listIndexOf_EventTypeVar.value.positionOut).messageParameterAttr.parameterValueAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:g59u3jhaT0uG1M6QePSb4A", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lWobqvq2oEqjLewK35_rgQ", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:vSHgTnv3QkCgHuEhtVfX2w", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("You don\'t have access to Assemble.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:E+VF6LDEgEiQr0JgH7BtRw", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:efZ3lEccM06TI+3SjtxQMA", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:phr_i0I8fUCmWCuygT9evA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:phr_i0I8fUCmWCuygT9evA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.OnClick_ViewAssembleEvent$vars", [{
name: "MessageSenderTargetId",
attrName: "messageSenderTargetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:KVGI2Wwg8k6KBne+xGBVAw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.I7n1A97iBkCzNZ5K8Tqong/ClientActions.KVGI2Wwg8k6KBne+xGBVAw:xo31gEjBtOAuw6d0QH6iDw", "Connect2_LegacyShared", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GD+jL_Na5U+Pl_8jCjdg+w", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1KbKJPvlw0+fGU+r+4fsAg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:KVGI2Wwg8k6KBne+xGBVAw", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:DoXH2lIaF0yWB8W7IGJNpw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.I7n1A97iBkCzNZ5K8Tqong/ClientActions.DoXH2lIaF0yWB8W7IGJNpw:BdxGv_KgLPZSQU8lA+8h6A", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:claPu7GHEkKjqMbhWsv9fA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// IsNull
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lJEjMLTmXUqmafMlK3eQPw", callContext.id) && (model.variables.messageInstanceIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())) && model.variables.messageTemplateIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JKcYvEp4002RZGUFWx4KSQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Invalid message detail id.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:04y+CEsVCkaRMVFlCq_aMQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bpBcCEqTq0qeWarEAo5d3Q", callContext.id);
// Refresh Query: GetMessageInstance
var result = controller.getMessageInstance$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:u6AMW8I29EanU1MMkNqG6A", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:DoXH2lIaF0yWB8W7IGJNpw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:DoXH2lIaF0yWB8W7IGJNpw", callContext.id);
throw ex;

});
};
Controller.prototype._adaptiveCardViewerOnExecuteAction$Action = function (cardPayloadIn, actionIdIn, formPayloadIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AdaptiveCardViewerOnExecuteAction");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.AdaptiveCardViewerOnExecuteAction$vars"))());
vars.value.cardPayloadInLocal = cardPayloadIn;
vars.value.actionIdInLocal = actionIdIn;
vars.value.formPayloadInLocal = formPayloadIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var appManager_GetDeviceContextVar = new OS.DataTypes.VariableHolder();
var substringJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeAdaptiveCardActionSubmitDataVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataRec))());
var jSONDeserializeOtherButtonVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.communicationExceptionVar = communicationExceptionVar;
varBag.appManager_GetDeviceContextVar = appManager_GetDeviceContextVar;
varBag.substringJSResult = substringJSResult;
varBag.jSONDeserializeAdaptiveCardActionSubmitDataVar = jSONDeserializeAdaptiveCardActionSubmitDataVar;
varBag.jSONDeserializeOtherButtonVar = jSONDeserializeOtherButtonVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:DQsx_+byo0e6CPtk4Uw8_Q:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.I7n1A97iBkCzNZ5K8Tqong/ClientActions.DQsx_+byo0e6CPtk4Uw8_Q:5VwYR8E06TYkiyjGAL2Y2g", "Connect2_LegacyShared", "AdaptiveCardViewerOnExecuteAction", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QlgzV85bwkWnyjpuBsv27g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2_On1TEq30qmLOXfx1g_jQ", callContext.id);
// Execute Action: AppManager_GetDeviceContext
appManager_GetDeviceContextVar.value = UBT_AppManagerController.default.appManager_GetDeviceContext$Action(callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:i67NYs0dnky+sDnfG18neQ", callContext.id);
// JSON Deserialize: JSONDeserializeAdaptiveCardActionSubmitData
jSONDeserializeAdaptiveCardActionSubmitDataVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.formPayloadInLocal, Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataRec, false);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RDHY1WYj8E65KPjfGtz2wA", callContext.id) && (jSONDeserializeAdaptiveCardActionSubmitDataVar.value.dataOut.submitTypeAttr === "send_email"))) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7GwLSbqX8kunHkLXQTufeg", callContext.id) && jSONDeserializeAdaptiveCardActionSubmitDataVar.value.dataOut.eventIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:nbePJcF0P0SlXsRTQSn7zw", callContext.id);
substringJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageDetail_mvc_controller_AdaptiveCardViewerOnExecuteAction_SubstringJS, "Substring", "AdaptiveCardViewerOnExecuteAction", {
StringStart: OS.DataConversion.JSNodeParamConverter.to("\"title\":\"View Event\",\"data\":", OS.DataTypes.DataTypes.Text),
StringEnd: OS.DataConversion.JSNodeParamConverter.to(",\"style\":\"positive\"}],\"spacing\":\"medium\"}", OS.DataTypes.DataTypes.Text),
MessageToSearch: OS.DataConversion.JSNodeParamConverter.to(model.variables.getMessageInstanceDataAct.messageOut.adaptiveCardJSONAttr.adaptiveCardContentAttr, OS.DataTypes.DataTypes.Text),
String: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.AdaptiveCardViewerOnExecuteAction$substringJSResult"))();
jsNodeResult.stringOut = OS.DataConversion.JSNodeParamConverter.from($parameters.String, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KzPad7m_JEOHC+DhNFGyDw", callContext.id);
// JSON Deserialize: JSONDeserializeOtherButton
jSONDeserializeOtherButtonVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(substringJSResult.value.stringOut, Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataRec, false);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rdvkt8C0KUiMIlJvhQLfeQ", callContext.id);
// Trigger Event: AddAuditAndNavigateTo_EventEmail2
return controller.addAuditAndNavigateTo_EventEmail$Action(jSONDeserializeOtherButtonVar.value.dataOut.eventIdAttr, jSONDeserializeOtherButtonVar.value.dataOut.eventHostIdAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DG3JoZ2u5UCEhrkg9VoBtA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+X7SOrssrEqRYb0eh5lnIA", callContext.id);
// Trigger Event: AddAuditAndNavigateTo_EventEmail
return controller.addAuditAndNavigateTo_EventEmail$Action(jSONDeserializeAdaptiveCardActionSubmitDataVar.value.dataOut.eventIdAttr, jSONDeserializeAdaptiveCardActionSubmitDataVar.value.dataOut.eventHostIdAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:T8+8ZeBorEWe6Pb9+bUEFw", callContext.id);
});
}

});
} else {
return OS.Flow.executeSequence(function () {
if((jSONDeserializeAdaptiveCardActionSubmitDataVar.value.dataOut.submitTypeAttr === "view_event")) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZWVvrD1uiECDHVEAKPrArw", callContext.id) && (jSONDeserializeAdaptiveCardActionSubmitDataVar.value.dataOut.eventIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())) && jSONDeserializeAdaptiveCardActionSubmitDataVar.value.dataOut.eventHostIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:TaielQdwI0qau6YrqUytEg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Event is not accessible", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AVysb1XI9EKJgytOjPbEpg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0DQqCaJTQUqTm_5xlp5lNg", callContext.id);
// Trigger Event: AddAuditAndNavigateTo_EventDetail
return controller.addAuditAndNavigateTo_EventDetail$Action(jSONDeserializeAdaptiveCardActionSubmitDataVar.value.dataOut.eventHostIdAttr, jSONDeserializeAdaptiveCardActionSubmitDataVar.value.dataOut.eventIdAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1+n0Y9iXzECFmQ6kAjdTvQ", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AOVcK7AXekOb_mnsC+8e4Q", callContext.id);
// Execute Action: StoreAdaptiveCardResponses
model.flush();
return controller.storeAdaptiveCardResponses$ServerAction(appManager_GetDeviceContextVar.value.appManager_MobileContextOut.uUIDAttr, vars.value.cardPayloadInLocal, vars.value.actionIdInLocal, vars.value.formPayloadInLocal, model.variables.messageInstanceIdIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FiD70AKvYk2afi7e2MgOow", callContext.id);
// Refresh Query: GetMessageInstance
var result = controller.getMessageInstance$DataActRefresh(callContext);
model.flush();
return result;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:615qCW0J9EO2kIvbziu4DA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Thanks for filling out our form!", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:o06C906lVkGJPzXI5FMAIw", callContext.id);
});
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_MessageDetail.AdaptiveCardViewerOnExecuteAction", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hdy+6eOuGEa9UnQGqpnttQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:R58e5QbKC0+WoQzNkwxEXg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Please check your internet connection!", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5wF93mbJ+0uE0rG6fhAJOA", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:DQsx_+byo0e6CPtk4Uw8_Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:DQsx_+byo0e6CPtk4Uw8_Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.AdaptiveCardViewerOnExecuteAction$vars", [{
name: "CardPayload",
attrName: "cardPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ActionId",
attrName: "actionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FormPayload",
attrName: "formPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.AdaptiveCardViewerOnExecuteAction$substringJSResult", [{
name: "String",
attrName: "stringOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.getMessageTemplateParametersOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getMessageTemplateParametersOnAfterFetch$Action, callContext);

};
Controller.prototype.getMessageInstanceByIdOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getMessageInstanceByIdOnAfterFetch$Action, callContext);

};
Controller.prototype.onClick_ViewOrbitEvent$Action = function (messageSenderTargetIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_ViewOrbitEvent$Action, callContext, messageSenderTargetIdIn);

};
Controller.prototype.messageRetractedFlow$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._messageRetractedFlow$Action, callContext);

};
Controller.prototype.onClick_ViewAssembleEvent$Action = function (messageSenderTargetIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_ViewAssembleEvent$Action, callContext, messageSenderTargetIdIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.adaptiveCardViewerOnExecuteAction$Action = function (cardPayloadIn, actionIdIn, formPayloadIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._adaptiveCardViewerOnExecuteAction$Action, callContext, cardPayloadIn, actionIdIn, formPayloadIn);

};
Controller.prototype.navigateTo_OrbitHostSurvey$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_OrbitMilestone$Action = function () {
return Promise.resolve();
};
Controller.prototype.setFeedItemId$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_MessageList$Action = function () {
return Promise.resolve();
};
Controller.prototype.subscriptionDenied$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_OrbitEvent$Action = function () {
return Promise.resolve();
};
Controller.prototype.addAuditAndNavigateTo_EventEmail$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_Login$Action = function () {
return Promise.resolve();
};
Controller.prototype.addAuditAndNavigateTo_EventDetail$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_AssembleEvent$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_ObjectDetail$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA:JDVFsscJB_uWX_OdVOax1A", "Connect2_LegacyShared", "MyNotifications", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:I7n1A97iBkCzNZ5K8Tqong:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.I7n1A97iBkCzNZ5K8Tqong:dVqcBg9jSW5tT77LknxxQA", "Connect2_LegacyShared", "ScreenBlock_MessageDetail", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:I7n1A97iBkCzNZ5K8Tqong", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageDetail On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageDetail On Ready");
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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$controller.GetMessageInstanceByIdOnAfterFetch.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$controller.AdaptiveCardViewerOnExecuteAction.SubstringJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.String = $parameters.MessageToSearch.substring($parameters.MessageToSearch.search($parameters.StringStart)+$parameters.StringStart.length, $parameters.MessageToSearch.search($parameters.StringEnd))
};
});

define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"8tBOWW6ZRUi+hewi+XvV4g": {
getter: function (varBag, idService) {
return varBag.listIndexOf_EventParentIdVar.value;
}
},
"HG6+yb90yEGgdF30BSeBnA": {
getter: function (varBag, idService) {
return varBag.listIndexOf_EventInstanceIdVar.value;
}
},
"hLTrvZXpIEGYKD8OWmwwUA": {
getter: function (varBag, idService) {
return varBag.wrapper_NotificationOpenedVar.value;
}
},
"HoR0a8LT8kWjKvRf0YjyRQ": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"TsyJmjgG8kK5HE8eETHuSA": {
getter: function (varBag, idService) {
return varBag.buildAssembleNotificationContentVar.value;
}
},
"GHkezfkd5E+uEE9jJkc19Q": {
getter: function (varBag, idService) {
return varBag.cache_SignedImageURL_GetVar.value;
}
},
"Y6Ee3jz34kO1987t2xs1rQ": {
getter: function (varBag, idService) {
return varBag.addFirstSentenceVar.value;
}
},
"WK4mlKmnl0++izFOS76J1Q": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"J1tb7yQejU6j1lC1cGAd4Q": {
getter: function (varBag, idService) {
return varBag.vars.value.messageSenderTargetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"w2IPO9hvU0OzH+w1Hem8iQ": {
getter: function (varBag, idService) {
return varBag.get_OrbitHostSurveyNotificationParametersVar.value;
}
},
"1YSRYELTkEGHBlXgPHA_ig": {
getter: function (varBag, idService) {
return varBag.get_OrbitNotificationParametersVar.value;
}
},
"kM1dUJO6j0Ks_gsbgM6O6A": {
getter: function (varBag, idService) {
return varBag.getHasOrbitHostSurveyVar.value;
}
},
"lWJlVD6FXEeI+HdS9aBS0Q": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_Get2Var.value;
}
},
"nRnnylS+HUiZgLumd89Hbw": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"bIFa0R1iIkuCHtx3UUGQng": {
getter: function (varBag, idService) {
return varBag.getHasOrbitAccessVar.value;
}
},
"xQ_EcPkgSkqB7tRaimoLhw": {
getter: function (varBag, idService) {
return varBag.vars.value.messageSenderTargetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"0YCdBvy4AkyIqcUdMoOarg": {
getter: function (varBag, idService) {
return varBag.listIndexOf_EventInstanceIdVar.value;
}
},
"DCtcoFgCxEOdB_1g7T9Dkg": {
getter: function (varBag, idService) {
return varBag.listIndexOf_EventTypeVar.value;
}
},
"HF1OrntVSUyeoCGInwkHYw": {
getter: function (varBag, idService) {
return varBag.listIndexOf_EventParentIdVar.value;
}
},
"jN3bwqdYU0irPGC7GJQDSw": {
getter: function (varBag, idService) {
return varBag.vars.value.cardPayloadInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"r7RkzJVie0+p44B273_q3w": {
getter: function (varBag, idService) {
return varBag.vars.value.actionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LG0Vaq9hOk+8uTnpgLqPAw": {
getter: function (varBag, idService) {
return varBag.vars.value.formPayloadInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hdy+6eOuGEa9UnQGqpnttQ": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"2_On1TEq30qmLOXfx1g_jQ": {
getter: function (varBag, idService) {
return varBag.appManager_GetDeviceContextVar.value;
}
},
"i67NYs0dnky+sDnfG18neQ": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeAdaptiveCardActionSubmitDataVar.value;
}
},
"KzPad7m_JEOHC+DhNFGyDw": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeOtherButtonVar.value;
}
},
"nbePJcF0P0SlXsRTQSn7zw": {
getter: function (varBag, idService) {
return varBag.substringJSResult.value;
}
},
"3VtWP9vswUyz2SusnweCWA": {
getter: function (varBag, idService) {
return varBag.model.variables.isEntryScreenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"UTAf5I0gaEuq29iE19Xp2Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wT7nToz0cUmZsepKkfexsw": {
getter: function (varBag, idService) {
return varBag.model.variables.showAssembleActionVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"hXvoN6iGKkaXwTuyZUtc0g": {
getter: function (varBag, idService) {
return varBag.model.variables.messageInstanceIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"9jJUQaGQTkqYOSotXka3ng": {
getter: function (varBag, idService) {
return varBag.model.variables.messageTemplateIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"sqDzrwUJZEyXlv5eyp2QWg": {
getter: function (varBag, idService) {
return varBag.model.variables.hardwareIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"D9P_Sv6R7UiQmeShepGgmQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isOriginPushNotificationIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"WQI0ZqKXF0OHs23dVYUm+g": {
getter: function (varBag, idService) {
return varBag.model.variables.getMessageInstanceDataAct;
}
},
"FCxGTwFfd0mbYK8w2IAqxQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getMessageTemplateParametersByMessageTemplateIdAggr;
}
},
"enDJQK+kLkKKfxQ+iFmP_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"KzHle1rmz06iHcGOACeojw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"YLd4eyjABkafXqXzSy9THA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"AycVw5EaJ0GWSIiAnu4QHQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"1rHqRAMndEuTU5ecKiyaAA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"5kf9WptASk+Gln2REY86XQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"bPZKuDpieEOcojR1CwkCfA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsLoading"));
})(varBag.model, idService);
}
},
"ndyexxxGwU6Wy8eB4ZMzJA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("NotificationDetailBlock"));
})(varBag.model, idService);
}
},
"qzbwoMPbUk6bMJRXE7caWA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MessageDetails"));
})(varBag.model, idService);
}
},
"AdEzbcZdBUCQ2yF5k26IRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsSharingNotification"));
})(varBag.model, idService);
}
},
"FXyNYzVZ7EOWrt0mkrC9bw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_FeedItem"));
})(varBag.model, idService);
}
},
"Xy0fmI7eGEygELFnleJj9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_FeedItem2"));
})(varBag.model, idService);
}
},
"GwMC+NJ0IEGZf8AdQ3QD9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_FeedItem"));
})(varBag.model, idService);
}
},
"1fwGg0omykWTGTPP2p1A0A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_FeedItem"));
})(varBag.model, idService);
}
},
"RuniVHi5PEaS6v+TGzX0AA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ActionButton"));
})(varBag.model, idService);
}
},
"aT1BeNN3Rk+LAn_EYkblQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ViewAssembleEvent"));
})(varBag.model, idService);
}
},
"XDcC2oWENUy+cYK1a2peww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ViewOrbitEvent"));
})(varBag.model, idService);
}
},
"6Yy7Bb+oPUqfXV5fh5Qcxw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"WEEQD6oGIU+puKvv1vc56w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"BhfBNmkYwkqggkwd6iYPpw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"aUdhAHUqak2tWs7dC9bNuw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
