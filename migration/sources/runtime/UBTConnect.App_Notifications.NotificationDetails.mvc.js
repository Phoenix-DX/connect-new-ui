define("UBTConnect.App_Notifications.NotificationDetails.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "Comms_CS.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_Notification_CS.model", "UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$model", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "Connect2_LegacyShared.model$HostConfigRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$GetHostConfigByConfigId", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect2_LegacyShared.model$HostConfig_SpacingRec", "Connect2_LegacyShared.model$HostConfig_FontTypeRec", "Connect2_LegacyShared.model$HostConfig_FontRec", "Connect2_LegacyShared.model$HostConfig_FontSizeRec", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "Connect2_LegacyShared.controller$AddFirstSentence", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "Connect2_LegacyShared.controller$DecrementReadMessagesCounter", "Comms_CS.model$MessageParameterRec", "UBTConnect.referencesHealth$Comms_CS", "UBTConnect.model$MessageParameterList", "Connect2_LegacyShared.controller$BuildAssembleNotificationContent", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.controller$DecrementReadWhatsNewsCounter", "UBTConnect.model$MessageParameterRecordList", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnect_Utils.controller$GetHasNewLDM", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord", "UBTConnect.model$Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord"], function (OutSystems, UBTConnectModel, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnectLibraryModel, NavigationHandlerController, UBTJavaScriptUtilsController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, Comms_CSModel, Connect2_OrbitMobile_MUIController, Connect2_Notification_CSModel, UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_CircleButton_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnect_App_Common_Blocks_SectionSeparator_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvcModel, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;
var GetMessageTemplateParametersByMessageTemplateIdAggrRec = (function (_super) {
__extends(GetMessageTemplateParametersByMessageTemplateIdAggrRec, _super);
function GetMessageTemplateParametersByMessageTemplateIdAggrRec(defaults) {
_super.apply(this, arguments);
}
GetMessageTemplateParametersByMessageTemplateIdAggrRec.RecordListType = UBTConnectModel.MessageParameterRecordList;
GetMessageTemplateParametersByMessageTemplateIdAggrRec.init();
return GetMessageTemplateParametersByMessageTemplateIdAggrRec;
})(OS.Model.AggregateRecord);

var FetchMessageInstanceDataActRec = (function (_super) {
__extends(FetchMessageInstanceDataActRec, _super);
function FetchMessageInstanceDataActRec(defaults) {
_super.apply(this, arguments);
}
FetchMessageInstanceDataActRec.attributesToDeclare = function () {
return [
this.attr("UI_NotificationDetail", "uI_NotificationDetailOut", "UI_NotificationDetail", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Notification_CSModel.MessageListItemRec());
}, true, Connect2_Notification_CSModel.MessageListItemRec)
].concat(_super.attributesToDeclare.call(this));
};
FetchMessageInstanceDataActRec.fromStructure = function (str) {
return new FetchMessageInstanceDataActRec(new FetchMessageInstanceDataActRec.RecordClass({
uI_NotificationDetailOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FetchMessageInstanceDataActRec.init();
return FetchMessageInstanceDataActRec;
})(OS.Model.DataSourceRecord);
var GetMessageInstanceDataActRec = (function (_super) {
__extends(GetMessageInstanceDataActRec, _super);
function GetMessageInstanceDataActRec(defaults) {
_super.apply(this, arguments);
}
GetMessageInstanceDataActRec.attributesToDeclare = function () {
return [
this.attr("Message", "messageOut", "Message", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord());
}, true, UBTConnectModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord), 
this.attr("IsRetracted", "isRetractedOut", "IsRetracted", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsCleared", "isClearedOut", "IsCleared", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PlaceholderDelimiters", "placeholderDelimitersOut", "PlaceholderDelimiters", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord());
}, true, UBTConnectModel.Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord)
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
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("ShowAssembleAction", "showAssembleActionVar", "ShowAssembleAction", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("FeedItemId", "feedItemIdVar", "FeedItemId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
this.attr("GetMessageTemplateParametersByMessageTemplateId", "getMessageTemplateParametersByMessageTemplateIdAggr", "getMessageTemplateParametersByMessageTemplateIdAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetMessageTemplateParametersByMessageTemplateIdAggrRec());
}, true, GetMessageTemplateParametersByMessageTemplateIdAggrRec), 
this.attr("FetchMessageInstance", "fetchMessageInstanceDataAct", "fetchMessageInstanceDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FetchMessageInstanceDataActRec());
}, true, FetchMessageInstanceDataActRec), 
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
Model._hasValidationWidgetsValue = ((((((((((UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_CircleButton_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_SectionSeparator_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvcModel.hasValidationWidgets) || ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("MessageInstanceId" in inputs) {
this.variables.messageInstanceIdIn = OS.DataConversion.ServerDataConverter.from(inputs.MessageInstanceId, OS.DataTypes.DataTypes.LongInteger);
}

if("MessageTemplateId" in inputs) {
this.variables.messageTemplateIdIn = OS.DataConversion.ServerDataConverter.from(inputs.MessageTemplateId, OS.DataTypes.DataTypes.LongInteger);
}

if("HardwareId" in inputs) {
this.variables.hardwareIdIn = OS.DataConversion.ServerDataConverter.from(inputs.HardwareId, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Notifications.NotificationDetails");
});
define("UBTConnect.App_Notifications.NotificationDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "Comms_CS.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_Notification_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Notifications.NotificationDetails.mvc$model", "UBTConnect.App_Notifications.NotificationDetails.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$view", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "Connect2_LegacyShared.model$HostConfigRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$GetHostConfigByConfigId", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect2_LegacyShared.model$HostConfig_SpacingRec", "Connect2_LegacyShared.model$HostConfig_FontTypeRec", "Connect2_LegacyShared.model$HostConfig_FontRec", "Connect2_LegacyShared.model$HostConfig_FontSizeRec", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "Connect2_LegacyShared.controller$AddFirstSentence", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "Connect2_LegacyShared.controller$DecrementReadMessagesCounter", "Comms_CS.model$MessageParameterRec", "UBTConnect.referencesHealth$Comms_CS", "UBTConnect.model$MessageParameterList", "Connect2_LegacyShared.controller$BuildAssembleNotificationContent", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.controller$DecrementReadWhatsNewsCounter", "UBTConnect.model$MessageParameterRecordList", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnect_Utils.controller$GetHasNewLDM", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord", "UBTConnect.model$Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnectLibraryModel, NavigationHandlerController, UBTJavaScriptUtilsController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, Comms_CSModel, Connect2_OrbitMobile_MUIController, Connect2_Notification_CSModel, React, OSView, UBTConnect_App_Notifications_NotificationDetails_mvc_model, UBTConnect_App_Notifications_NotificationDetails_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_view, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "App_Notifications.NotificationDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_view, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Notifications_NotificationDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Notifications_NotificationDetails_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "NotificationDetails";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_view, {
inputs: {
isGrayBackground: true
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
placeholder_Header_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("qkrO5r6xhUOw0rxXls1YJw.Value"), function () {
return ((((model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.sentAsAttr) !== (OS.BuiltinFunctions.nullIdentifier()))) ? ((((model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === UBTConnectModel.staticEntities.messageSenderTarget.lordsDayMeal)) ? ("Meal Allocation") : (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.nameAttr))) : (model.variables.getMessageInstanceDataAct.messageOut.userAttr.nameAttr));
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
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr)
})];
}),
placeholder_Header_Right: PlaceholderContent.Empty,
placeholder_Header_Input: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Notification_Title.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
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
name: "Notification_Title",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.titleAttr,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
TextOptions: model.getCachedValue(idService.getId("46S7bjh8yEyrprWHgHO1Wg.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, {
inputs: {
BorderColorId: UBTConnectModel.staticEntities.uBT_Color.neutral6
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.calendarBusy,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.primary
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
badge: PlaceholderContent.Empty
},
_dependencies: []
})];
})
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.titleAttr)]
}), React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
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
uuid: "6",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Notification_Content.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
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
name: "Notification_Content",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.summaryAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr),
In_TextOptions: model.getCachedValue(idService.getId("TSiO11K_Rk2Ujyq3c8J5zg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
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
uuid: "8",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-color: #c6c6c6; border-style: solid; border-width: 2px 0px 0px 0px; margin-right: 10px; margin-top: 10px; padding: 15px 0px 10px 0px;"
},
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageInfoTypeIdAttr === UBTConnectModel.staticEntities.messageInfoType.sharing), false, this, function () {
return [];
}, function () {
return [$if(model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.isAdaptiveCardAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_view, {
inputs: {
In_HostConfig: model.getCachedValue(idService.getId("q9uV+jWaj0G4sR6tCUFcxg.In_HostConfig"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.getHostConfigByConfigId$Action(UBTConnectModel.staticEntities.adaptiveCardsConfig.events, callContext).out_HostConfigOut;
}, OS.DataTypes.DataTypes.Record, callContext.id);
}),
In_AdaptiveCardJson: model.variables.getMessageInstanceDataAct.messageOut.adaptiveCardJSONAttr.adaptiveCardContentAttr,
_in_AdaptiveCardJsonInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onExecuteAction$Action: function (cardPayloadIn, actionIdIn, formPayloadIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Widgets/AdaptiveCardViewer OnExecuteAction");
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
uuid: "11",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "white-space: normal; word-break: break-word;"
},
style: "whitespace-normal notification-detail-content",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view, {
inputs: {
AllowedCssStyles: "text-decoration,font-style,margin-left,padding-left",
ResetWhitelist: true,
AllowedAttributes: "src,style",
AllowedTags: "img,s,i,em,ul,li,ol,u,blockquote,sup,sub",
Value: model.variables.getMessageInstanceDataAct.messageOut.messageContentAttr.messageContentAttr,
_valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr)
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
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})];
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageContentAttr.messageContentAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.adaptiveCardJSONAttr.adaptiveCardContentAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.isAdaptiveCardAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageInfoTypeIdAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.summaryAttr)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Notification_Date.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
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
name: "Notification_Date",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("OX7FqDmeLEW8jLJ0Gblhog.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral5;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
return rec;
}();
}),
In_Text: model.getCachedValue(idService.getId("OX7FqDmeLEW8jLJ0Gblhog.In_Text"), function () {
return OS.BuiltinFunctions.formatDateTime(model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.dateTimeCreatedAttr, "ddd dd/MM/yyyy HH:mm tt");
}, function () {
return model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.dateTimeCreatedAttr;
}),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr)
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
uuid: "15",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.dateTimeCreatedAttr)]
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
inputs: {
ActiveItem: model.getCachedValue(idService.getId("mPVgwzdBg0C5VNI3DXKlVg.ActiveItem"), function () {
return OS.BuiltinFunctions.nullTextIdentifier();
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
uuid: "16",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
uuid: "17",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getMessageInstanceDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.dateTimeCreatedAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageContentAttr.messageContentAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.adaptiveCardJSONAttr.adaptiveCardContentAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.userAttr.nameAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.nameAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.isAdaptiveCardAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageInfoTypeIdAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.summaryAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.titleAttr), asPrimitiveValue(model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.sentAsAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.App_Notifications.NotificationDetails.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "Comms_CS.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_Notification_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Notifications.NotificationDetails.mvc$debugger", "UBTConnect.App_Notifications.controller", "UBTConnect.App_Notifications.NotificationDetails.mvc$controller.Handler_BackNavigationHandlerBackNavigation.CheckIfInvalidLocationJS", "UBTConnect.App_Notifications.NotificationDetails.mvc$controller.GetMessageInstanceByIdOnAfterFetch.WasCurrentViewRestoredFromCacheJS", "Connect2_LegacyShared.model$HostConfigRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$GetHostConfigByConfigId", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect2_LegacyShared.model$HostConfig_SpacingRec", "Connect2_LegacyShared.model$HostConfig_FontTypeRec", "Connect2_LegacyShared.model$HostConfig_FontRec", "Connect2_LegacyShared.model$HostConfig_FontSizeRec", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "Connect2_LegacyShared.controller$AddFirstSentence", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "Connect2_LegacyShared.controller$DecrementReadMessagesCounter", "Comms_CS.model$MessageParameterRec", "UBTConnect.referencesHealth$Comms_CS", "UBTConnect.model$MessageParameterList", "Connect2_LegacyShared.controller$BuildAssembleNotificationContent", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.controller$DecrementReadWhatsNewsCounter", "UBTConnect.model$MessageParameterRecordList", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnect_Utils.controller$GetHasNewLDM", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord", "UBTConnect.model$Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnectLibraryModel, NavigationHandlerController, UBTJavaScriptUtilsController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, Comms_CSModel, Connect2_OrbitMobile_MUIController, Connect2_Notification_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Notifications_NotificationDetails_mvc_Debugger, _flow_UBTConnect_App_NotificationsController, UBTConnect_App_Notifications_NotificationDetails_mvc_controller_Handler_BackNavigationHandlerBackNavigation_CheckIfInvalidLocationJS, UBTConnect_App_Notifications_NotificationDetails_mvc_controller_GetMessageInstanceByIdOnAfterFetch_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getMessageTemplateParametersByMessageTemplateId$AggrRefresh: -1,
fetchMessageInstance$DataActRefresh: -1,
getMessageInstance$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
getMessageTemplateParametersByMessageTemplateId$AggrRefresh: [],
fetchMessageInstance$DataActRefresh: [],
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
return controller.callServerAction("Wrapper_NotificationOpened", "screenservices/UBTConnect/App_Notifications/NotificationDetails/ActionWrapper_NotificationOpened", "SDxL5EuQ29Fe6yRchCY9wA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails$rssespaceconnect2_legacyshared_ActionWrapper_NotificationOpened"))();
executeServerActionResult.isRetractedOut = OS.DataConversion.ServerDataConverter.from(outputs.IsRetracted, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails$rssespaceconnect2_legacyshared_ActionWrapper_NotificationOpened", [{
name: "IsRetracted",
attrName: "isRetractedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

// Aggregates and Data Actions
Controller.prototype.getMessageTemplateParametersByMessageTemplateId$AggrRefresh = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fgYw8gJ1LUCcylxmbWak+Q:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ScreenDataSets.fgYw8gJ1LUCcylxmbWak+Q:YP7Cdz1xC8Z8n8dj568+mw", "UBTConnect", "GetMessageTemplateParametersByMessageTemplateId", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/NotificationDetails/GetMessageTemplateParametersByMessageTemplateId");
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetMessageTemplateParametersByMessageTemplateId", "screenservices/UBTConnect/App_Notifications/NotificationDetails/ScreenDataSetGetMessageTemplateParametersByMessageTemplateId", "HebmiGyWZ0B6CMzX6+xepw", maxRecords, startIndex, function (b) {
model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/NotificationDetails/GetMessageTemplateParametersByMessageTemplateId On After Fetch");
controller._getMessageTemplateParametersOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fgYw8gJ1LUCcylxmbWak+Q", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.fetchMessageInstance$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:f5MrSgYQv0mhdKmLYb2XMw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/DataActions.f5MrSgYQv0mhdKmLYb2XMw:AwDffEbGbe1ipCmg25U7HQ", "UBTConnect", "FetchMessageInstance", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/NotificationDetails/FetchMessageInstance");
return controller.callDataAction("DataActionFetchMessageInstance", "screenservices/UBTConnect/App_Notifications/NotificationDetails/DataActionFetchMessageInstance", "EK1Bof7qmKTNegtIT6L5Ow", function (b) {
model.variables.fetchMessageInstanceDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.fetchMessageInstanceDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.fetchMessageInstanceDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:f5MrSgYQv0mhdKmLYb2XMw", callContext.id);
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

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:5PBaltK54UGUR2kucd6Z7A:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/DataActions.5PBaltK54UGUR2kucd6Z7A:oSivKDIU_lheQWA5DJ3rKw", "UBTConnect", "GetMessageInstance", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/NotificationDetails/GetMessageInstance");
return controller.callDataAction("DataActionGetMessageInstance", "screenservices/UBTConnect/App_Notifications/NotificationDetails/DataActionGetMessageInstance", "IjDVxayiIsiG43Zm6O5vdg", function (b) {
model.variables.getMessageInstanceDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getMessageInstanceDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getMessageInstanceDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/NotificationDetails/GetMessageInstance On After Fetch");
return controller._getMessageInstanceByIdOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5PBaltK54UGUR2kucd6Z7A", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getMessageTemplateParametersByMessageTemplateId$AggrRefresh", "fetchMessageInstance$DataActRefresh", "getMessageInstance$DataActRefresh"];
// Client Actions
Controller.prototype._handler_BackNavigationHandlerBackNavigation$Action = function (backNavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_BackNavigationHandlerBackNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_BackNavigationHandlerBackNavigation$vars"))());
vars.value.backNavigationEventInLocal = backNavigationEventIn;
var checkIfInvalidLocationJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkIfInvalidLocationJSResult = checkIfInvalidLocationJSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9BBqCwxQz0K61KPifoTuzg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.9BBqCwxQz0K61KPifoTuzg:NwWH+lIzOcHOLF0cAO+7Vg", "UBTConnect", "Handler_BackNavigationHandlerBackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:q3xNr5S+u02d_YEoZe8l_Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MZ2qvWeZgUmeWk7SoSnvrg", callContext.id);
checkIfInvalidLocationJSResult.value = controller.safeExecuteJSNode(UBTConnect_App_Notifications_NotificationDetails_mvc_controller_Handler_BackNavigationHandlerBackNavigation_CheckIfInvalidLocationJS, "CheckIfInvalidLocation", "Handler_BackNavigationHandlerBackNavigation", {
BackNavigationEvent: OS.DataConversion.JSNodeParamConverter.to(vars.value.backNavigationEventInLocal, OS.DataTypes.DataTypes.Object),
EspaceName: OS.DataConversion.JSNodeParamConverter.to((("/" + OS.BuiltinFunctions.getEntryEspaceName()) + "/"), OS.DataTypes.DataTypes.Text),
IsEmpty: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_BackNavigationHandlerBackNavigation$checkIfInvalidLocationJSResult"))();
jsNodeResult.isEmptyOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEmpty, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:P3emZJnCzkW+FX5gAzoZ4A", callContext.id) && checkIfInvalidLocationJSResult.value.isEmptyOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:08LD66I5BEOeXtsBpSsHeg", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E0pU813gwU6O2CFeVJldog", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qsHs31ue0EifrNnHSUnHRw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9BBqCwxQz0K61KPifoTuzg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_BackNavigationHandlerBackNavigation$vars", [{
name: "BackNavigationEvent",
attrName: "backNavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_BackNavigationHandlerBackNavigation$checkIfInvalidLocationJSResult", [{
name: "IsEmpty",
attrName: "isEmptyOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_NavigateTo_OrbitHostSurvey$Action = function (eventIdIn, memberIdIn, eventNameIn, eventStartDateIn, eventEndDateIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_OrbitHostSurvey");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_NavigateTo_OrbitHostSurvey$vars"))());
vars.value.eventIdInLocal = eventIdIn;
vars.value.memberIdInLocal = memberIdIn;
vars.value.eventNameInLocal = eventNameIn;
vars.value.eventStartDateInLocal = eventStartDateIn;
vars.value.eventEndDateInLocal = eventEndDateIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ays9P48B206UBWssd4VhwA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.ays9P48B206UBWssd4VhwA:Q0U7r15YvNZHUuWYTArxPg", "UBTConnect", "Handler_NavigateTo_OrbitHostSurvey", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2G5KL8sNg02pRzL0waq8Fw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lIKV9IBbpUytylTlZCjeOQ", callContext.id);
// Destination: /UBTConnect/HostSurvey
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HostSurvey", {
In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_EventStartDate: OS.DataConversion.ServerDataConverter.asString(vars.value.eventStartDateInLocal, OS.DataTypes.DataTypes.DateTime),
In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
In_MemberId: OS.DataConversion.ServerDataConverter.asString(vars.value.memberIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_EventEndDate: OS.DataConversion.ServerDataConverter.asString(vars.value.eventEndDateInLocal, OS.DataTypes.DataTypes.DateTime)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ays9P48B206UBWssd4VhwA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_NavigateTo_OrbitHostSurvey$vars", [{
name: "EventId",
attrName: "eventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "MemberId",
attrName: "memberIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventStartDate",
attrName: "eventStartDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "EventEndDate",
attrName: "eventEndDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
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
var addFirstSentenceVar = new OS.DataTypes.VariableHolder();
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
var buildAssembleNotificationContentVar = new OS.DataTypes.VariableHolder();
var cache_SignedImageURL_GetVar = new OS.DataTypes.VariableHolder();
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.wrapper_NotificationOpenedVar = wrapper_NotificationOpenedVar;
varBag.addFirstSentenceVar = addFirstSentenceVar;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
varBag.buildAssembleNotificationContentVar = buildAssembleNotificationContentVar;
varBag.cache_SignedImageURL_GetVar = cache_SignedImageURL_GetVar;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:PnSKVG69WkObkwnxuYEJIA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.PnSKVG69WkObkwnxuYEJIA:skDSCXq+P+KDLvoiBhQfXA", "UBTConnect", "GetMessageInstanceByIdOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RHqcw26ixUuHGzje8jpCNg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rOzIoTLcc0WsG4hnrh9VjQ", callContext.id);
// MessageInstanceId = GetMessageInstance.Message.MessageInstance.Id
model.variables.messageInstanceIdIn = model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.idAttr;
// IsRetracted?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZNnN0egFK0e65o29mo9BwA", callContext.id) && model.variables.getMessageInstanceDataAct.isRetractedOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9jsPS3M8zkeblZ2XEilK6A", callContext.id);
// Execute Action: MessageRetractedFlow
controller._messageRetractedFlow$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+XjyXZY230W6r5Pa_VblOg", callContext.id);
} else {
// Message instance not found?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_JuoLGCZqUew_F1jNYKmHA", callContext.id) && model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.idAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
// User Logged In ?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cfyW_UQ5tkKKVQjahZ+j6g", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1YYRszmff0OXkJ_hKsq+vw", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "You don\'t have access to that message", UBTConnectModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IzOuojW3+kqnC3m5gh8FWg", callContext.id);
// Execute Action: ReplaceOnUpcomingNavigation2
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lXkTxi2EeUW0OuR3KuH1wA", callContext.id);
// Execute Action: Handler_NavigateTo_MessageList
controller._handler_NavigateTo_MessageList$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PxcmSRQHN0CQFn7J4cCClQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZNBNOBpwg0ea5ZUFO0ufBg", callContext.id);
// Execute Action: Handler_NavigateTo_Login
controller._handler_NavigateTo_Login$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JHyDfW+K+UGfmf_Pt7i8IA", callContext.id);
}

} else {
// Is Private ?
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
// Is Private ?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IQRzEWtZjkGbqAK4VcaY_Q", callContext.id) && (model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageTemplateTypeIdAttr === UBTConnectModel.staticEntities.messageType2.private))) {
// User Logged In ?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6NTEM3DAyEqpzI83ggUyqA", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
// Target User  = user logged in ?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CvDuLeLpa0eCF84pHrKtbw", callContext.id) && !((model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.userIdAttr === OS.BuiltinFunctions.getUserId())))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1s5gFktGckCj1VeFgyIWNQ", callContext.id);
// Execute Action: FeedbackMessage_AutoClose2
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "You don\'t have access to that message", UBTConnectModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
return OS.Flow.breakAsync();
}

} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gVpEtP79KUyJAN0QDMR+RQ", callContext.id);
// Execute Action: Handler_NavigateTo_Login2
controller._handler_NavigateTo_Login$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d5pHNZos1E2+D08iEzicsw", callContext.id);
return OS.Flow.returnAsync();

}

}

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MF7LREThxkeeWC02qQAcng", callContext.id) && model.variables.getMessageInstanceDataAct.isClearedOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bIEGPVr6602vf4yQ78QfNw", callContext.id);
// Execute Action: FeedbackMessage_AutoClose3
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "Sorry, this message is not available anymore.", UBTConnectModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
} else {
var block2 = false;
// Is Notification Read ?
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
block2 = false;
// Is Notification Read ?
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
// Is Notification Read ?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fpgnCmfSEkmdQwSlhmL_uA", callContext.id) && !(model.variables.getMessageInstanceDataAct.messageOut.messageInstanceAttr.isReadAttr))) {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:30i4pbWnskOzs6Q4+EoSrQ", callContext.id) && (model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageInfoTypeIdAttr === UBTConnectModel.staticEntities.messageInfoType.whatsNew))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rgPMwSrnxEi5BWcb8AKBGw", callContext.id);
// Execute Action: DecrementReadWhatsNewsCounter
Connect2_LegacySharedController.default.decrementReadWhatsNewsCounter$Action(callContext);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R9Cnm+ZyQkCPrkxBaAzcaQ", callContext.id);
// Execute Action: DecrementReadMessagesCounter
Connect2_LegacySharedController.default.decrementReadMessagesCounter$Action(callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0cV7QzMNhk6t7J1nhVq4EQ", callContext.id);
// Execute Action: Wrapper_NotificationOpened
model.flush();
return controller.wrapper_NotificationOpened$ServerAction(model.variables.messageInstanceIdIn, callContext).then(function (value) {
wrapper_NotificationOpenedVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hvYHgsiFd02UQSgQAVLLtg", callContext.id) && wrapper_NotificationOpenedVar.value.isRetractedOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oC05ICgDDEqTltL_ng1Tgw", callContext.id);
// Execute Action: MessageRetractedFlow2
controller._messageRetractedFlow$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YmeUKHV5Qk6LFBnVl_SFeQ", callContext.id);
return OS.Flow.returnAsync();

}

});
}

}).then(function () {
// SentAs = NullIdentifier()?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wMAYkfxYG0mqDdM43RWLPw", callContext.id) && (model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.sentAsAttr === OS.BuiltinFunctions.nullIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sHBYvei3GEyTiWOmol261Q", callContext.id);
// Execute Action: Cache_SignedImageURL_Get
model.flush();
return UBTConnect_UtilsController.default.cache_SignedImageURL_Get$Action(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(model.variables.getMessageInstanceDataAct.messageOut.createdByMemberIdAttr)), UBTConnectModel.staticEntities.connect_Entity.member, UBTConnectModel.staticEntities.imageSize.small, callContext).then(function (value) {
cache_SignedImageURL_GetVar.value = value;
}).then(function () {
// Set ProfileIconURL
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oOcLlo2zXUOw3R9qIXf1vg", callContext.id);
// GetMessageInstance.Message.MessageSenderTarget.ProfileIconURL = Cache_SignedImageURL_Get.URL
model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.profileIconURLAttr = cache_SignedImageURL_GetVar.value.uRLOut;
});
}

});
}).then(function () {
// Is Sharing or Orbit?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ukcABvrQiUCLPRzzJZ8bIg", callContext.id) && ((((model.variables.getMessageInstanceDataAct.messageOut.messageTemplateAttr.messageInfoTypeIdAttr === UBTConnectModel.staticEntities.messageInfoType.sharing) || (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === UBTConnectModel.staticEntities.messageSenderTarget.orbit)) || (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === UBTConnectModel.staticEntities.messageSenderTarget.orbitHostSurvey)) || (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === UBTConnectModel.staticEntities.messageSenderTarget.assemble)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gO3TeUAuRkiegmr0VrKG4A", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_App_Notifications_NotificationDetails_mvc_controller_GetMessageInstanceByIdOnAfterFetch_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "GetMessageInstanceByIdOnAfterFetch", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.GetMessageInstanceByIdOnAfterFetch$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oda4c2jbS0W+Nb+QxdFH5Q", callContext.id) && !(wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vxRdUHVkdUCpppck44qqaA", callContext.id);
// Refresh Query: GetMessageTemplateParametersByMessageTemplateId
var result = controller.getMessageTemplateParametersByMessageTemplateId$AggrRefresh(50, 0, callContext);
model.flush();
return result;
}

}).then(function () {
// Is Orbit?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QCgSoZeIh0isY5RY1e3Qtg", callContext.id) && ((model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === UBTConnectModel.staticEntities.messageSenderTarget.orbitHostSurvey) || (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === UBTConnectModel.staticEntities.messageSenderTarget.orbit)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_K9kZF3mK0+msJgwHDQhkw", callContext.id);
// Execute Action: Cache_UserInfo_Get
model.flush();
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m4Z8BhNXhk+qQismLOx70w", callContext.id);
// Execute Action: AddFirstSentence
addFirstSentenceVar.value = Connect2_LegacySharedController.default.addFirstSentence$Action(cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.firstNameAttr, model.variables.getMessageInstanceDataAct.messageOut.messageContentAttr.messageContentAttr, callContext);

// Replace Message
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KJJxWV95uUGbBBoIPy1nog", callContext.id);
// GetMessageInstance.Message.MessageContent.MessageContent = AddFirstSentence.Out_MessageContent
model.variables.getMessageInstanceDataAct.messageOut.messageContentAttr.messageContentAttr = addFirstSentenceVar.value.out_MessageContentOut;
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mqoq_SxHDUaUKj4udQGl8Q", callContext.id) && (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === UBTConnectModel.staticEntities.messageSenderTarget.assemble))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+JvZsWNYe0OfaLf1mt5Jbg", callContext.id);
// Execute Action: BuildAssembleNotificationContent
model.flush();
return Connect2_LegacySharedController.default.buildAssembleNotificationContent$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut, new UBTConnectModel.MessageParameterList(), function (source, target) {
target = source.messageParameterAttr;
return target;
}), model.variables.getMessageInstanceDataAct.messageOut.messageContentAttr.messageContentAttr, model.variables.getMessageInstanceDataAct.placeholderDelimitersOut.delimitersAttr.delimiter_PlaceholderAttr, model.variables.getMessageInstanceDataAct.placeholderDelimitersOut.delimitersAttr.delimiter_FunctionAttr, model.variables.getMessageInstanceDataAct.placeholderDelimitersOut.delimitersAttr.delimiter_ParameterAttr, callContext).then(function (value) {
buildAssembleNotificationContentVar.value = value;
}).then(function () {
// Replace Message
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yxPE9yNauE+UhlGrKorUVg", callContext.id);
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
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:r8hgl4AL40SZDcEdGf4zkw", callContext.id);
// jump to block2
block2 = true;
return OS.Flow.breakAsync();
});
}

});
});
}).then(function () {
if(block2) {
return OS.Flow.breakAsync();
}

}).then(function () {
// <<
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9PcnwHslGUyxtQiHWkk9_w", callContext.id);
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qyR1EaKlyUq7Q7eT1AUpmw", callContext.id);
// IsLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bBL4JLHHb02c1jIxEOxqpw", callContext.id);
return OS.Flow.returnAsync();

});
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MwDXameGyUyVNhDY0_sLWg", callContext.id);
// Execute Action: ReplaceOnUpcomingNavigation
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BUYRq_3nDEmPmaeQrSHdiQ", callContext.id);
// Execute Action: Handler_NavigateTo_MessageList2
controller._handler_NavigateTo_MessageList$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G2FQPotUXEG_hco5gJGjkg", callContext.id);
});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:PnSKVG69WkObkwnxuYEJIA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:PnSKVG69WkObkwnxuYEJIA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.GetMessageInstanceByIdOnAfterFetch$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_NavigateTo_MessageList$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_MessageList");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CGRwX14dnUCCQ2Euef5feg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.CGRwX14dnUCCQ2Euef5feg:BFIrN0gxAfF7Od_zBlPW9Q", "UBTConnect", "Handler_NavigateTo_MessageList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JFZLvGx7vEulEHOqI_JH9A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VJRBQ9XWeE6ll0HLniwsEg", callContext.id);
// Destination: /UBTConnect/Notifications
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Notifications", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CGRwX14dnUCCQ2Euef5feg", callContext.id);
}

};
Controller.prototype._handler_NavigateTo_OrbitMilestone$Action = function (milestoneIdIn, eventIdIn, eventNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_OrbitMilestone");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_NavigateTo_OrbitMilestone$vars"))());
vars.value.milestoneIdInLocal = milestoneIdIn;
vars.value.eventIdInLocal = eventIdIn;
vars.value.eventNameInLocal = eventNameIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OmFxfKjOTEO1wiUl1VzVng:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.OmFxfKjOTEO1wiUl1VzVng:i9ACElLOvzMbZwTAmQ099Q", "UBTConnect", "Handler_NavigateTo_OrbitMilestone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7WOL4xYpFUyitxKH_IJ_cw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BLCIImlo+UKawzML1QdStg", callContext.id);
// Destination: /UBTConnect/MilestoneDetail
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/MilestoneDetail", {
In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_MilestoneId: OS.DataConversion.ServerDataConverter.asString(vars.value.milestoneIdInLocal, OS.DataTypes.DataTypes.Text),
In_FromNotification: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OmFxfKjOTEO1wiUl1VzVng", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_NavigateTo_OrbitMilestone$vars", [{
name: "MilestoneId",
attrName: "milestoneIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventId",
attrName: "eventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dOs4jbTJ_UedoGXGBX5scA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.dOs4jbTJ_UedoGXGBX5scA:tLmeIT+FpvY5wwA_kdUMBg", "UBTConnect", "GetMessageTemplateParametersOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L2ZTvTPqw02NCweUPz5Nzw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yp22vOUM2EmxaJI4txx6QA", callContext.id) && (model.variables.getMessageInstanceDataAct.messageOut.messageSenderTargetAttr.idAttr === UBTConnectModel.staticEntities.messageSenderTarget.assemble))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fQNbBgJNLkWh+7PaVzNrrw", callContext.id);
// Execute Action: ListIndexOf_EventParentId
listIndexOf_EventParentIdVar.value = OS.SystemActions.listIndexOf(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut, function (p) {
return (p.messageParameterAttr.parameterNameIdAttr === UBTConnectModel.staticEntities.parameterName.assembleEventParentId);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:utXeMN+k2Eevx9HbMTpRoA", callContext.id);
// Execute Action: ListIndexOf_EventInstanceId
listIndexOf_EventInstanceIdVar.value = OS.SystemActions.listIndexOf(model.variables.getMessageTemplateParametersByMessageTemplateIdAggr.listOut, function (p) {
return (p.messageParameterAttr.parameterNameIdAttr === UBTConnectModel.staticEntities.parameterName.assembleEventInstanceId);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KnxVDGqeWkurwQiwbs+M9Q", callContext.id);
// ShowAssembleAction = ListIndexOf_EventParentId.Position <> -1 and ListIndexOf_EventInstanceId.Position <> -1
model.variables.showAssembleActionVar = (((listIndexOf_EventParentIdVar.value.positionOut) !== (-1)) && ((listIndexOf_EventInstanceIdVar.value.positionOut) !== (-1)));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_5DaJ8+JpUCyMZjJzveBrg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IKuisZMxl06oDC1KS1rMTA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dOs4jbTJ_UedoGXGBX5scA", callContext.id);
}

};
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:sY2DkinDZkK_vuxa64n3qw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.sY2DkinDZkK_vuxa64n3qw:ZVG6xe09zgqOAmw22uHOww", "UBTConnect", "MessageRetractedFlow", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wDrdh4FegEe_+R+e1lhPZg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YPBIbwc9zUuMQ1rEZE7J2Q", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "Sorry, this message is not available anymore.", UBTConnectModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pffjHC043UWbSXKb15+DPg", callContext.id);
// Execute Action: ReplaceOnUpcomingNavigation
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aU__wKXqgkaWBzjyLxaDtA", callContext.id);
// Execute Action: Handler_NavigateTo_MessageList
controller._handler_NavigateTo_MessageList$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UHx1VdsaKUuvv5znPq_rhg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sY2DkinDZkK_vuxa64n3qw", callContext.id);
}

};
Controller.prototype._handler_NavigateTo_OrbitEventDetails$Action = function (eventIdIn, memberIdIn, eventNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_OrbitEventDetails");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_NavigateTo_OrbitEventDetails$vars"))());
vars.value.eventIdInLocal = eventIdIn;
vars.value.memberIdInLocal = memberIdIn;
vars.value.eventNameInLocal = eventNameIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fxu6nXg+F0y8n6ujoFADBQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.fxu6nXg+F0y8n6ujoFADBQ:eDMg+o2oPH4okLsatf3gng", "UBTConnect", "Handler_NavigateTo_OrbitEventDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2BVLDrbJN0GuCnqoETVQAQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ACuptsHB1EuMhersw3eMpA", callContext.id);
// Destination: /UBTConnect/EventDetail
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/EventDetail", {
In_FromNotification: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean),
In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_MemberId: OS.DataConversion.ServerDataConverter.asString(vars.value.memberIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_EventName: OS.DataConversion.ServerDataConverter.asString(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fxu6nXg+F0y8n6ujoFADBQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_NavigateTo_OrbitEventDetails$vars", [{
name: "EventId",
attrName: "eventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "MemberId",
attrName: "memberIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_NavigateTo_AssembleDetail$Action = function (eventParentIdIn, eventInstanceIdIn, assembleEventTypeTileIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_AssembleDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_NavigateTo_AssembleDetail$vars"))());
vars.value.eventParentIdInLocal = eventParentIdIn;
vars.value.eventInstanceIdInLocal = eventInstanceIdIn;
vars.value.assembleEventTypeTileInLocal = assembleEventTypeTileIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:i9zGsZrmlUybuMSHtCohRw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.i9zGsZrmlUybuMSHtCohRw:I30qsPTPj1Mm5gNgYkf8kA", "UBTConnect", "Handler_NavigateTo_AssembleDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xmvMCxXwGU2D2mhvn4zDFw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DUKqZG2y5Eyt0uEtFYglPw", callContext.id);
// Destination: /UBTConnect/AssembleDetail
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/AssembleDetail", {
AssembleEventTypeTile: OS.DataConversion.ServerDataConverter.asString(vars.value.assembleEventTypeTileInLocal, OS.DataTypes.DataTypes.Text),
SeriesId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventParentIdInLocal, OS.DataTypes.DataTypes.Text),
EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.eventInstanceIdInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:i9zGsZrmlUybuMSHtCohRw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_NavigateTo_AssembleDetail$vars", [{
name: "EventParentId",
attrName: "eventParentIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "EventInstanceId",
attrName: "eventInstanceIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AssembleEventTypeTile",
attrName: "assembleEventTypeTileInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_SetFeedItemId$Action = function (event_FeedItemIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SetFeedItemId");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_SetFeedItemId$vars"))());
vars.value.event_FeedItemIdInLocal = event_FeedItemIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:T2y3t+SCe0eXJS8+8p1bUg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.T2y3t+SCe0eXJS8+8p1bUg:IfQSbHV1XjvF4W54EpDwJw", "UBTConnect", "Handler_SetFeedItemId", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pP2sFReQUUi5P1B5vZZYAg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EubS_eZFk0aoIWztR0cidQ", callContext.id);
// FeedItemId = Event_FeedItemId
model.variables.feedItemIdVar = vars.value.event_FeedItemIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZVMnFhUEr0+0o3v7t_7oJQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:T2y3t+SCe0eXJS8+8p1bUg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_SetFeedItemId$vars", [{
name: "Event_FeedItemId",
attrName: "event_FeedItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_NavigateTo_Login$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_Login");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jGzMz_i+KkO3SIGA3HhBnA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.jGzMz_i+KkO3SIGA3HhBnA:tm6HjNmZmn4fV7M6HvfD2Q", "UBTConnect", "Handler_NavigateTo_Login", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Bmb4zcOZuEysvvj+YZ2IxQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jt+cftVMq0CqURycENH1Bg", callContext.id);
// Destination: /UBTConnect/Login
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jGzMz_i+KkO3SIGA3HhBnA", callContext.id);
}

};
Controller.prototype._handler_NavigateTo_ShareObjectDetail$Action = function (objectIdIn, shareObjectTypeIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NavigateTo_ShareObjectDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_NavigateTo_ShareObjectDetail$vars"))());
vars.value.objectIdInLocal = objectIdIn;
vars.value.shareObjectTypeIdInLocal = shareObjectTypeIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:LpOU0TcGPUua+uFvbFuL6A:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.LpOU0TcGPUua+uFvbFuL6A:aOsDwjMBKYpNJtb137Fjug", "UBTConnect", "Handler_NavigateTo_ShareObjectDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3CAWxbdQxE62N2t57inLoA", callContext.id);
// ObjectShareType
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HVr6XcQ8K0mQWUlUk21aLw", callContext.id) && (((vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.household) || (vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.update)) || (vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.myHousehold)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sWMy1QDll0uoeSPpBeCJRg", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
if((vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.oneSchoolGlobal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uPz7ZYsIxkC17uF19yqaXQ", callContext.id);
// Destination: /UBTConnect/OneSchoolGlobalDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OneSchoolGlobalDetails", {
In_OneSchoolGlobalId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
if((vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.supperMeeting)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CXaFXV0eEUula1kpmOiw9g", callContext.id);
// Destination: /UBTConnect/SupperMeeting_Details
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/SupperMeeting_Details", {
In_SubdivsionId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
if((vars.value.shareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.feed)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UGZtjWFWzUGmKCTw6boGoQ", callContext.id);
// Destination: /UBTConnect/FeedItemDetail
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/FeedItemDetail", {
FeedItemId: OS.DataConversion.ServerDataConverter.asString(vars.value.objectIdInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PtQZUNXBK0qsSYmd+X3x3Q", callContext.id);
}

}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:LpOU0TcGPUua+uFvbFuL6A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_NavigateTo_ShareObjectDetail$vars", [{
name: "ObjectId",
attrName: "objectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShareObjectTypeId",
attrName: "shareObjectTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._adaptiveCardViewerOnExecuteAction$Action = function (cardPayloadIn, actionIdIn, formPayloadIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AdaptiveCardViewerOnExecuteAction");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.AdaptiveCardViewerOnExecuteAction$vars"))());
vars.value.cardPayloadInLocal = cardPayloadIn;
vars.value.actionIdInLocal = actionIdIn;
vars.value.formPayloadInLocal = formPayloadIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.communicationExceptionVar = communicationExceptionVar;
try {try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9SS61mYN6UGv6QeW6RZe5Q:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.9SS61mYN6UGv6QeW6RZe5Q:JgDTzivR3hn0K7w+WMnUoA", "UBTConnect", "AdaptiveCardViewerOnExecuteAction", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zmRE5XZYcUeXPaxj78RYpA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y7u3wrsqN0WK_SEp9MqgIQ", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("NotificationDetails.AdaptiveCardViewerOnExecuteAction", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vYslmPFwPkmUrdb4NZTWfw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kKxNFHrBB0uD2j277WbQ5w", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Please check your internet connection!", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fMmt7Q+v_kKKRCh7aEmqaw", callContext.id);
return ;

}

throw ex;
})();
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9SS61mYN6UGv6QeW6RZe5Q", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.AdaptiveCardViewerOnExecuteAction$vars", [{
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
Controller.prototype._handler_SubscriptionDenied$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SubscriptionDenied");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3zHz4sBq30yOdngOIJSUYg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.3zHz4sBq30yOdngOIJSUYg:2KXXUbhZ4zegvi3rq0Drpw", "UBTConnect", "Handler_SubscriptionDenied", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t8rXAuEyO0Sac85_M4k36g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:67Zw9Fi8m0WT16NgcLu6VQ", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tpekbM699UGFvwZ2kB1IDA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3zHz4sBq30yOdngOIJSUYg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3zHz4sBq30yOdngOIJSUYg", callContext.id);
throw ex;

});
};
Controller.prototype._handler_AddAuditAndNavigateTo_EventEmail$Action = function (in_EventIdIn, in_EventHostIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_AddAuditAndNavigateTo_EventEmail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_AddAuditAndNavigateTo_EventEmail$vars"))());
vars.value.in_EventIdInLocal = in_EventIdIn;
vars.value.in_EventHostIdInLocal = in_EventHostIdIn;
var getHasNewLDMVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasNewLDMVar = getHasNewLDMVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:q07l6XwkJkin4nmNDoPPwg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.q07l6XwkJkin4nmNDoPPwg:LyWgz+3t1u3cMDnAPrCvzg", "UBTConnect", "Handler_AddAuditAndNavigateTo_EventEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h551fKv85EyVIDstbQzjcg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LCg5DXyIPE2Hhift7I3Jaw", callContext.id);
// Execute Action: AddAuditEventDetailEvent2_Contact
model.flush();
return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(UBTConnectModel.staticEntities.applicationEvents_LDM.notificationContactOrganiser, OS.DataTypes.LongInteger.defaultValue, "", OS.DataTypes.DateTime.defaultValue, "", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lFkufg6tSkKLf4MvwkBCCw", callContext.id);
// Execute Action: GetHasNewLDM
getHasNewLDMVar.value = UBTConnect_UtilsController.default.getHasNewLDM$Action(callContext);

}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7rEodXHWjEW6x_34cJIOaA", callContext.id) && getHasNewLDMVar.value.out_HasNewLDMOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GVZvCCu4sEy93Q9iiBgyNw", callContext.id);
// Destination: /UBTConnect/LDM_Email_V2
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LDM_Email_V2", {
EventHostId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventHostIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_IsContactOrganiser: OS.DataConversion.ServerDataConverter.asString(false, OS.DataTypes.DataTypes.Boolean),
In_IsMessageGuest: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean),
In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TKcZCINvfEmCnSCi67wywA", callContext.id);
// Destination: /UBTConnect/LDM_Email
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LDM_Email", {
In_IsContactOrganiser: OS.DataConversion.ServerDataConverter.asString(false, OS.DataTypes.DataTypes.Boolean),
EventHostId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventHostIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventIdInLocal, OS.DataTypes.DataTypes.LongInteger),
In_IsMessageGuest: OS.DataConversion.ServerDataConverter.asString(true, OS.DataTypes.DataTypes.Boolean)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:q07l6XwkJkin4nmNDoPPwg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:q07l6XwkJkin4nmNDoPPwg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_AddAuditAndNavigateTo_EventEmail$vars", [{
name: "In_EventId",
attrName: "in_EventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "In_EventHostId",
attrName: "in_EventHostIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._handler_AddAuditAndNavigateTo_EventDetail$Action = function (in_EventHostIdIn, in_EventIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_AddAuditAndNavigateTo_EventDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_AddAuditAndNavigateTo_EventDetail$vars"))());
vars.value.in_EventHostIdInLocal = in_EventHostIdIn;
vars.value.in_EventIdInLocal = in_EventIdIn;
var getHasNewLDMVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasNewLDMVar = getHasNewLDMVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:taKN+EsR3kipnLKt+HUYOQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw/ClientActions.taKN+EsR3kipnLKt+HUYOQ:Sw9k2NiAvDsz7BLRSXgVSg", "UBTConnect", "Handler_AddAuditAndNavigateTo_EventDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:39MoTl+JiEalpZx4ZE5TNA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wPMzgv0QVEWhom7DScDvKA", callContext.id);
// Execute Action: AddAuditClickedEvent
model.flush();
return Connect2_OrbitMobile_MUIController.default.addAuditClickedEvent$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnectModel.staticEntities.applicationEvents_LDM.notificationViewEvent), (((OS.BuiltinFunctions.longIntegerToText(vars.value.in_EventHostIdInLocal) === OS.BuiltinFunctions.nullTextIdentifier())) ? (vars.value.in_EventIdInLocal) : (vars.value.in_EventHostIdInLocal)), "", OS.DataTypes.DateTime.defaultValue, "", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2TmQcurhykShYzgmvb2MpA", callContext.id);
// Execute Action: GetHasNewLDM
getHasNewLDMVar.value = UBTConnect_UtilsController.default.getHasNewLDM$Action(callContext);

}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WUjFqebaEkOVf8xBPHKpqQ", callContext.id) && getHasNewLDMVar.value.out_HasNewLDMOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ty96PQAFrkGTA9TwBU0lzQ", callContext.id);
// Destination: /UBTConnect/LDM_EventDetail_V2
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LDM_EventDetail_V2", {
EventHostId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventHostIdInLocal, OS.DataTypes.DataTypes.LongInteger),
EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MP+rUqW6w0SoEPIODiQ3Qg", callContext.id);
// Destination: /UBTConnect/LDM_EventDetail
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LDM_EventDetail", {
EventHostId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventHostIdInLocal, OS.DataTypes.DataTypes.LongInteger),
EventId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_EventIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:taKN+EsR3kipnLKt+HUYOQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:taKN+EsR3kipnLKt+HUYOQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Notifications.NotificationDetails.Handler_AddAuditAndNavigateTo_EventDetail$vars", [{
name: "In_EventHostId",
attrName: "in_EventHostIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "In_EventId",
attrName: "in_EventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);

Controller.prototype.handler_BackNavigationHandlerBackNavigation$Action = function (backNavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_BackNavigationHandlerBackNavigation$Action, callContext, backNavigationEventIn);

};
Controller.prototype.handler_NavigateTo_OrbitHostSurvey$Action = function (eventIdIn, memberIdIn, eventNameIn, eventStartDateIn, eventEndDateIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_OrbitHostSurvey$Action, callContext, eventIdIn, memberIdIn, eventNameIn, eventStartDateIn, eventEndDateIn);

};
Controller.prototype.getMessageInstanceByIdOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getMessageInstanceByIdOnAfterFetch$Action, callContext);

};
Controller.prototype.handler_NavigateTo_MessageList$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_MessageList$Action, callContext);

};
Controller.prototype.handler_NavigateTo_OrbitMilestone$Action = function (milestoneIdIn, eventIdIn, eventNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_OrbitMilestone$Action, callContext, milestoneIdIn, eventIdIn, eventNameIn);

};
Controller.prototype.getMessageTemplateParametersOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getMessageTemplateParametersOnAfterFetch$Action, callContext);

};
Controller.prototype.messageRetractedFlow$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._messageRetractedFlow$Action, callContext);

};
Controller.prototype.handler_NavigateTo_OrbitEventDetails$Action = function (eventIdIn, memberIdIn, eventNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_OrbitEventDetails$Action, callContext, eventIdIn, memberIdIn, eventNameIn);

};
Controller.prototype.handler_NavigateTo_AssembleDetail$Action = function (eventParentIdIn, eventInstanceIdIn, assembleEventTypeTileIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_AssembleDetail$Action, callContext, eventParentIdIn, eventInstanceIdIn, assembleEventTypeTileIn);

};
Controller.prototype.handler_SetFeedItemId$Action = function (event_FeedItemIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SetFeedItemId$Action, callContext, event_FeedItemIdIn);

};
Controller.prototype.handler_NavigateTo_Login$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_Login$Action, callContext);

};
Controller.prototype.handler_NavigateTo_ShareObjectDetail$Action = function (objectIdIn, shareObjectTypeIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NavigateTo_ShareObjectDetail$Action, callContext, objectIdIn, shareObjectTypeIdIn);

};
Controller.prototype.adaptiveCardViewerOnExecuteAction$Action = function (cardPayloadIn, actionIdIn, formPayloadIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._adaptiveCardViewerOnExecuteAction$Action, callContext, cardPayloadIn, actionIdIn, formPayloadIn);

};
Controller.prototype.handler_SubscriptionDenied$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SubscriptionDenied$Action, callContext);

};
Controller.prototype.handler_AddAuditAndNavigateTo_EventEmail$Action = function (in_EventIdIn, in_EventHostIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_AddAuditAndNavigateTo_EventEmail$Action, callContext, in_EventIdIn, in_EventHostIdIn);

};
Controller.prototype.handler_AddAuditAndNavigateTo_EventDetail$Action = function (in_EventHostIdIn, in_EventIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_AddAuditAndNavigateTo_EventDetail$Action, callContext, in_EventHostIdIn, in_EventIdIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg:sMKFKooX6A1nm6D_Lsn4Wg", "UBTConnect", "App_Notifications", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:uurVP+f1gk2QdqQ76o3uJw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.uurVP+f1gk2QdqQ76o3uJw:9CPP0_ahCbiGtHtScHsJ4w", "UBTConnect", "NotificationDetails", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:uurVP+f1gk2QdqQ76o3uJw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_App_NotificationsController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.App_Notifications.NotificationDetails.mvc$controller.Handler_BackNavigationHandlerBackNavigation.CheckIfInvalidLocationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.BackNavigationEvent.detail && $parameters.BackNavigationEvent.detail.location && $parameters.BackNavigationEvent.detail.location.pathname) {
    $parameters.IsEmpty = $parameters.BackNavigationEvent.detail.location.pathname == $parameters.EspaceName;
}
};
});
define("UBTConnect.App_Notifications.NotificationDetails.mvc$controller.GetMessageInstanceByIdOnAfterFetch.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("UBTConnect.App_Notifications.NotificationDetails.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"yg_VwMTk_EqOyyCY78egww": {
getter: function (varBag, idService) {
return varBag.vars.value.backNavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"MZ2qvWeZgUmeWk7SoSnvrg": {
getter: function (varBag, idService) {
return varBag.checkIfInvalidLocationJSResult.value;
}
},
"0cZuq+xMckiEhT65DNznYA": {
getter: function (varBag, idService) {
return varBag.vars.value.eventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"125zQglVakuoQ+8Y1+J5Cg": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Us3nuKBc3ky80Ov7pwHLfg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"orIdqRp3UE+AYMnkQ4DTZQ": {
getter: function (varBag, idService) {
return varBag.vars.value.eventStartDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"KjKvmMGbDUm9js3d_eUIGA": {
getter: function (varBag, idService) {
return varBag.vars.value.eventEndDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"0cV7QzMNhk6t7J1nhVq4EQ": {
getter: function (varBag, idService) {
return varBag.wrapper_NotificationOpenedVar.value;
}
},
"m4Z8BhNXhk+qQismLOx70w": {
getter: function (varBag, idService) {
return varBag.addFirstSentenceVar.value;
}
},
"_K9kZF3mK0+msJgwHDQhkw": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"+JvZsWNYe0OfaLf1mt5Jbg": {
getter: function (varBag, idService) {
return varBag.buildAssembleNotificationContentVar.value;
}
},
"sHBYvei3GEyTiWOmol261Q": {
getter: function (varBag, idService) {
return varBag.cache_SignedImageURL_GetVar.value;
}
},
"gO3TeUAuRkiegmr0VrKG4A": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"mdx8j4+BnEGh+5mg_OGt_g": {
getter: function (varBag, idService) {
return varBag.vars.value.milestoneIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"V2jdpZMCYECntuUYqvISEg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Q8EPyQPLFkmrl4y9ZjFkmg": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fQNbBgJNLkWh+7PaVzNrrw": {
getter: function (varBag, idService) {
return varBag.listIndexOf_EventParentIdVar.value;
}
},
"utXeMN+k2Eevx9HbMTpRoA": {
getter: function (varBag, idService) {
return varBag.listIndexOf_EventInstanceIdVar.value;
}
},
"gCJSb8hWs0SqgZMGV247kw": {
getter: function (varBag, idService) {
return varBag.vars.value.eventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"D8VbItAsKkWrEGNNRWVgyA": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"4b21IyEfXEyFkEnxVbuZyA": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bkDIDD0CaEiN4cZvNDPDUw": {
getter: function (varBag, idService) {
return varBag.vars.value.eventParentIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b0Geh7CFC0GEuP6duItx+Q": {
getter: function (varBag, idService) {
return varBag.vars.value.eventInstanceIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oib44+Mbw0qn+5RsU1rh+Q": {
getter: function (varBag, idService) {
return varBag.vars.value.assembleEventTypeTileInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"57zUkuZ90kaAgH2dJR0+rA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_FeedItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Qln5gGcR3Emt7qzeVytnOQ": {
getter: function (varBag, idService) {
return varBag.vars.value.objectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZYwGW6lvMkG7_Wqappx5Lw": {
getter: function (varBag, idService) {
return varBag.vars.value.shareObjectTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"B9WFAB2n+0qnJpTeRA3MZQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cardPayloadInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bCm9QlZWjkmPmYJi1eLvTw": {
getter: function (varBag, idService) {
return varBag.vars.value.actionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LHVG4WqY3UObVTjWYhEvBA": {
getter: function (varBag, idService) {
return varBag.vars.value.formPayloadInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vYslmPFwPkmUrdb4NZTWfw": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"8lJ+vaCEn0S1VUxkB3n+nQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_EventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"m0_R_fne6EKG+mOIHMg+rw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_EventHostIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"lFkufg6tSkKLf4MvwkBCCw": {
getter: function (varBag, idService) {
return varBag.getHasNewLDMVar.value;
}
},
"Gu_dF5X6dkmprGznsBIlsg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_EventHostIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"dUMtETI6s0aMkNVW5IL51Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_EventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"2TmQcurhykShYzgmvb2MpA": {
getter: function (varBag, idService) {
return varBag.getHasNewLDMVar.value;
}
},
"gI+0xe8r5kGkTcml1LueQQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"L2Xgsn2Likq7jcZMNU261A": {
getter: function (varBag, idService) {
return varBag.model.variables.showAssembleActionVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+f8pHd3V0Ei0I2IP5Xpw8g": {
getter: function (varBag, idService) {
return varBag.model.variables.feedItemIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nl_c11Y8SUW5+aZ1DsR4aw": {
getter: function (varBag, idService) {
return varBag.model.variables.messageInstanceIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"hC8KaINoW0WHoUelYyzXZw": {
getter: function (varBag, idService) {
return varBag.model.variables.messageTemplateIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"kc3_0B8dFEu_plJpNBPFkA": {
getter: function (varBag, idService) {
return varBag.model.variables.hardwareIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"f5MrSgYQv0mhdKmLYb2XMw": {
getter: function (varBag, idService) {
return varBag.model.variables.fetchMessageInstanceDataAct;
}
},
"5PBaltK54UGUR2kucd6Z7A": {
getter: function (varBag, idService) {
return varBag.model.variables.getMessageInstanceDataAct;
}
},
"fgYw8gJ1LUCcylxmbWak+Q": {
getter: function (varBag, idService) {
return varBag.model.variables.getMessageTemplateParametersByMessageTemplateIdAggr;
}
},
"8MpZIkypKU+QmebwuQ1e6A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"a3fZyfvvC0C8nRS+apDEZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"fd46vPibOUOrQcxSPq9rZQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Input"));
})(varBag.model, idService);
}
},
"jNT5gtEagUuVIDPKusJ+aw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"VA4EOXQIBkKpXU7Wx4_BPQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"pQUTw6i3wEaSWJraHCZ2oQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Notification_Title"));
})(varBag.model, idService);
}
},
"+uuJo_zqikC0t5eygKXjFw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"GGMW9EIkW0eEeweaq5PVOQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"PNDXZw2G2UKIeS1egKc7pw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"VzPgTuze0kG_1M_kr2ROZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Badge"));
})(varBag.model, idService);
}
},
"zYnet3E9oESqPMBer2vDhg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Notification_Content"));
})(varBag.model, idService);
}
},
"k7_CqriAjk6vIpUSK_OlhA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"p6sW5k9q2EOc4wRQh3rVZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_ShowDetailsPlaceholder"));
})(varBag.model, idService);
}
},
"bPq8Do9ToE25pVqrytqjGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_isAdaptiveCardCheck"));
})(varBag.model, idService);
}
},
"CEeCSdJIf0iUlO0rJIkl5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Notification_Date"));
})(varBag.model, idService);
}
},
"Wve08ZeJoUSTigvIgub4uw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"KVJCh2HCyE6oRoZdJpx82Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"jUk0EZTCUUaAaFuDepxnHA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
