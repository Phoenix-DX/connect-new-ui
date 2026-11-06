define("Comms_CS.model$EmailTargetRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailTargetRec = (function (_super) {
__extends(EmailTargetRec, _super);
function EmailTargetRec(defaults) {
_super.apply(this, arguments);
}
EmailTargetRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EmailInstanceId", "emailInstanceIdAttr", "EmailInstanceId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EmailSendToTypeId", "emailSendToTypeIdAttr", "EmailSendToTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TargetName", "targetNameAttr", "TargetName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TargetValue", "targetValueAttr", "TargetValue", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EmailTargetRec.init();
return EmailTargetRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.EmailTargetRec = EmailTargetRec;

});
define("Comms_CS.model$MessageTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageTypeRec = (function (_super) {
__extends(MessageTypeRec, _super);
function MessageTypeRec(defaults) {
_super.apply(this, arguments);
}
MessageTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageTypeRec.init();
return MessageTypeRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageTypeRec = MessageTypeRec;

});
define("Comms_CS.model$EmailOrganizeRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailOrganizeRec = (function (_super) {
__extends(EmailOrganizeRec, _super);
function EmailOrganizeRec(defaults) {
_super.apply(this, arguments);
}
EmailOrganizeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EmailOrganizeRec.init();
return EmailOrganizeRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.EmailOrganizeRec = EmailOrganizeRec;

});
define("Comms_CS.model$SavedTemplatesRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var SavedTemplatesRec = (function (_super) {
__extends(SavedTemplatesRec, _super);
function SavedTemplatesRec(defaults) {
_super.apply(this, arguments);
}
SavedTemplatesRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Template", "templateAttr", "Template", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UsersCanEdit", "usersCanEditAttr", "UsersCanEdit", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("TemplateName", "templateNameAttr", "TemplateName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UsersCanView", "usersCanViewAttr", "UsersCanView", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SavedTemplatesRec.init();
return SavedTemplatesRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.SavedTemplatesRec = SavedTemplatesRec;

});
define("Comms_CS.model$EmailStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailStatusRec = (function (_super) {
__extends(EmailStatusRec, _super);
function EmailStatusRec(defaults) {
_super.apply(this, arguments);
}
EmailStatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EmailStatusRec.init();
return EmailStatusRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.EmailStatusRec = EmailStatusRec;

});
define("Comms_CS.model$MessageEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageEventRec = (function (_super) {
__extends(MessageEventRec, _super);
function MessageEventRec(defaults) {
_super.apply(this, arguments);
}
MessageEventRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MessageTemplateId", "messageTemplateIdAttr", "MessageTemplateId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CreateDate", "createDateAttr", "CreateDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UpdateDate", "updateDateAttr", "UpdateDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageEventRec.init();
return MessageEventRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageEventRec = MessageEventRec;

});
define("Comms_CS.model$EmailTarget_StuctureRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailTarget_StuctureRec = (function (_super) {
__extends(EmailTarget_StuctureRec, _super);
function EmailTarget_StuctureRec(defaults) {
_super.apply(this, arguments);
}
EmailTarget_StuctureRec.attributesToDeclare = function () {
return [
this.attr("TargetName", "targetNameAttr", "TargetName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TargetValue", "targetValueAttr", "TargetValue", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EmailTarget_StuctureRec.init();
return EmailTarget_StuctureRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.EmailTarget_StuctureRec = EmailTarget_StuctureRec;

});
define("Comms_CS.model$SendProcessRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var SendProcessRec = (function (_super) {
__extends(SendProcessRec, _super);
function SendProcessRec(defaults) {
_super.apply(this, arguments);
}
SendProcessRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MessageTemplateId", "messageTemplateIdAttr", "MessageTemplateId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CreatedAt", "createdAtAttr", "CreatedAt", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ScheduledFor", "scheduledForAttr", "ScheduledFor", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SendProcessRec.init();
return SendProcessRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.SendProcessRec = SendProcessRec;

});
define("Comms_CS.model$MessageInstanceRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageInstanceRec = (function (_super) {
__extends(MessageInstanceRec, _super);
function MessageInstanceRec(defaults) {
_super.apply(this, arguments);
}
MessageInstanceRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MessageTemplateId", "messageTemplateIdAttr", "MessageTemplateId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DeviceHardwareId", "deviceHardwareIdAttr", "DeviceHardwareId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsSent", "isSentAttr", "IsSent", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsReceived", "isReceivedAttr", "IsReceived", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsRead", "isReadAttr", "IsRead", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsReplied", "isRepliedAttr", "IsReplied", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsClear", "isClearAttr", "IsClear", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DateTimeCreated", "dateTimeCreatedAttr", "DateTimeCreated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("NotificationUUID", "notificationUUIDAttr", "NotificationUUID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SendAttemptCount", "sendAttemptCountAttr", "SendAttemptCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastSendAttemptDateTime", "lastSendAttemptDateTimeAttr", "LastSendAttemptDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("NextSendAttemptDateTime", "nextSendAttemptDateTimeAttr", "NextSendAttemptDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CheckForReceiptCount", "checkForReceiptCountAttr", "CheckForReceiptCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastCheckForReceiptDateTime", "lastCheckForReceiptDateTimeAttr", "LastCheckForReceiptDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("NextCheckForReceiptDateTime", "nextCheckForReceiptDateTimeAttr", "NextCheckForReceiptDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("SentToWebDevice", "sentToWebDeviceAttr", "SentToWebDevice", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MessageError", "messageErrorAttr", "MessageError", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageInstanceRec.init();
return MessageInstanceRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageInstanceRec = MessageInstanceRec;

});
define("Comms_CS.model$MessageTargetsRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageTargetsRec = (function (_super) {
__extends(MessageTargetsRec, _super);
function MessageTargetsRec(defaults) {
_super.apply(this, arguments);
}
MessageTargetsRec.attributesToDeclare = function () {
return [
this.attr("KindId", "kindIdAttr", "KindId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageTargetsRec.init();
return MessageTargetsRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageTargetsRec = MessageTargetsRec;

});
define("Comms_CS.model$EmailContentsRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailContentsRec = (function (_super) {
__extends(EmailContentsRec, _super);
function EmailContentsRec(defaults) {
_super.apply(this, arguments);
}
EmailContentsRec.attributesToDeclare = function () {
return [
this.attr("EmailContentId", "emailContentIdAttr", "EmailContentId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EmailContentsRec.init();
return EmailContentsRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.EmailContentsRec = EmailContentsRec;

});
define("Comms_CS.model$PlaceholderStructureRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var PlaceholderStructureRec = (function (_super) {
__extends(PlaceholderStructureRec, _super);
function PlaceholderStructureRec(defaults) {
_super.apply(this, arguments);
}
PlaceholderStructureRec.attributesToDeclare = function () {
return [
this.attr("IsClientSide", "isClientSideAttr", "IsClientSide", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MessagePlaceholderFunctionId", "messagePlaceholderFunctionIdAttr", "MessagePlaceholderFunctionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Parameters", "parametersAttr", "Parameters", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Index", "indexAttr", "Index", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Length", "lengthAttr", "Length", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PlaceholderStructureRec.init();
return PlaceholderStructureRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.PlaceholderStructureRec = PlaceholderStructureRec;

});
define("Comms_CS.model$MessageParameterRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageParameterRec = (function (_super) {
__extends(MessageParameterRec, _super);
function MessageParameterRec(defaults) {
_super.apply(this, arguments);
}
MessageParameterRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ParameterNameId", "parameterNameIdAttr", "ParameterNameId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ParameterValue", "parameterValueAttr", "ParameterValue", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MessageTemplateId", "messageTemplateIdAttr", "MessageTemplateId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageParameterRec.init();
return MessageParameterRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageParameterRec = MessageParameterRec;

});
define("Comms_CS.model$EmailTargetList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Comms_CS.model$EmailTargetRec"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailTargetList = (function (_super) {
__extends(EmailTargetList, _super);
function EmailTargetList(defaults) {
_super.apply(this, arguments);
}
EmailTargetList.itemType = Comms_CSModel.EmailTargetRec;
return EmailTargetList;
})(OS.DataTypes.GenericRecordList);
Comms_CSModel.EmailTargetList = EmailTargetList;

});
define("Comms_CS.model$EmailTargetListRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Comms_CS.model$EmailTargetList"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailTargetListRec = (function (_super) {
__extends(EmailTargetListRec, _super);
function EmailTargetListRec(defaults) {
_super.apply(this, arguments);
}
EmailTargetListRec.attributesToDeclare = function () {
return [
this.attr("EmailTargets", "emailTargetsAttr", "EmailTargets", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.EmailTargetList());
}, true, Comms_CSModel.EmailTargetList)
].concat(_super.attributesToDeclare.call(this));
};
EmailTargetListRec.fromStructure = function (str) {
return new EmailTargetListRec(new EmailTargetListRec.RecordClass({
emailTargetsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EmailTargetListRec.init();
return EmailTargetListRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.EmailTargetListRec = EmailTargetListRec;

});
define("Comms_CS.model$MessageSenderTargetRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageSenderTargetRec = (function (_super) {
__extends(MessageSenderTargetRec, _super);
function MessageSenderTargetRec(defaults) {
_super.apply(this, arguments);
}
MessageSenderTargetRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProfileIconURL", "profileIconURLAttr", "ProfileIconURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("NotificationIcon", "notificationIconAttr", "NotificationIcon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NotificationHeading", "notificationHeadingAttr", "NotificationHeading", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageSenderTargetRec.init();
return MessageSenderTargetRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageSenderTargetRec = MessageSenderTargetRec;

});
define("Comms_CS.model$RegisteredWebDeviceRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var RegisteredWebDeviceRec = (function (_super) {
__extends(RegisteredWebDeviceRec, _super);
function RegisteredWebDeviceRec(defaults) {
_super.apply(this, arguments);
}
RegisteredWebDeviceRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UUID", "uUIDAttr", "UUID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneSignalAppId", "oneSignalAppIdAttr", "OneSignalAppId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RegisterDateTime", "registerDateTimeAttr", "RegisterDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RegisteredWebDeviceRec.init();
return RegisteredWebDeviceRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.RegisteredWebDeviceRec = RegisteredWebDeviceRec;

});
define("Comms_CS.model$MessageStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageStatusRec = (function (_super) {
__extends(MessageStatusRec, _super);
function MessageStatusRec(defaults) {
_super.apply(this, arguments);
}
MessageStatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageStatusRec.init();
return MessageStatusRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageStatusRec = MessageStatusRec;

});
define("Comms_CS.model$MessageInfoTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageInfoTypeRec = (function (_super) {
__extends(MessageInfoTypeRec, _super);
function MessageInfoTypeRec(defaults) {
_super.apply(this, arguments);
}
MessageInfoTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageInfoTypeRec.init();
return MessageInfoTypeRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageInfoTypeRec = MessageInfoTypeRec;

});
define("Comms_CS.model$RetractProcessRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var RetractProcessRec = (function (_super) {
__extends(RetractProcessRec, _super);
function RetractProcessRec(defaults) {
_super.apply(this, arguments);
}
RetractProcessRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MessageTemplateId", "messageTemplateIdAttr", "MessageTemplateId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RetractProcessRec.init();
return RetractProcessRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.RetractProcessRec = RetractProcessRec;

});
define("Comms_CS.model$NotificationDeepLinkParameterRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var NotificationDeepLinkParameterRec = (function (_super) {
__extends(NotificationDeepLinkParameterRec, _super);
function NotificationDeepLinkParameterRec(defaults) {
_super.apply(this, arguments);
}
NotificationDeepLinkParameterRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NotificationDeepLinkParameterRec.init();
return NotificationDeepLinkParameterRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.NotificationDeepLinkParameterRec = NotificationDeepLinkParameterRec;

});
define("Comms_CS.model$PlaceholderParametersRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var PlaceholderParametersRec = (function (_super) {
__extends(PlaceholderParametersRec, _super);
function PlaceholderParametersRec(defaults) {
_super.apply(this, arguments);
}
PlaceholderParametersRec.attributesToDeclare = function () {
return [
this.attr("DateTime", "dateTimeAttr", "DateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateTimeFormat", "dateTimeFormatAttr", "DateTimeFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PlaceholderParametersRec.init();
return PlaceholderParametersRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.PlaceholderParametersRec = PlaceholderParametersRec;

});
define("Comms_CS.model$MessageTemplateRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageTemplateRec = (function (_super) {
__extends(MessageTemplateRec, _super);
function MessageTemplateRec(defaults) {
_super.apply(this, arguments);
}
MessageTemplateRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsAdaptiveCard", "isAdaptiveCardAttr", "IsAdaptiveCard", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Summary", "summaryAttr", "Summary", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MessageContentId", "messageContentIdAttr", "MessageContentId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CreatedByUser", "createdByUserAttr", "CreatedByUser", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MessageTemplateStatusId", "messageTemplateStatusIdAttr", "MessageTemplateStatusId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MessageTemplateTypeId", "messageTemplateTypeIdAttr", "MessageTemplateTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MessageTemplatePriorityId", "messageTemplatePriorityIdAttr", "MessageTemplatePriorityId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MessageInfoTypeId", "messageInfoTypeIdAttr", "MessageInfoTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdaptiveCardJSONId", "adaptiveCardJSONIdAttr", "AdaptiveCardJSONId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SentAs", "sentAsAttr", "SentAs", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SavedTemplateId", "savedTemplateIdAttr", "SavedTemplateId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MessageSendToTypeId", "messageSendToTypeIdAttr", "MessageSendToTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MessageApplicationTargetId", "messageApplicationTargetIdAttr", "MessageApplicationTargetId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RecalledBy", "recalledByAttr", "RecalledBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsPushNotificationOnly", "isPushNotificationOnlyAttr", "IsPushNotificationOnly", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HideTitleOnPushNotification", "hideTitleOnPushNotificationAttr", "HideTitleOnPushNotification", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HideBodyOnPushNotification", "hideBodyOnPushNotificationAttr", "HideBodyOnPushNotification", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageTemplateRec.init();
return MessageTemplateRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageTemplateRec = MessageTemplateRec;

});
define("Comms_CS.model$MessageContentRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageContentRec = (function (_super) {
__extends(MessageContentRec, _super);
function MessageContentRec(defaults) {
_super.apply(this, arguments);
}
MessageContentRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MessageContent", "messageContentAttr", "MessageContent", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageContentRec.init();
return MessageContentRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageContentRec = MessageContentRec;

});
define("Comms_CS.model$MessagePriorityRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessagePriorityRec = (function (_super) {
__extends(MessagePriorityRec, _super);
function MessagePriorityRec(defaults) {
_super.apply(this, arguments);
}
MessagePriorityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessagePriorityRec.init();
return MessagePriorityRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessagePriorityRec = MessagePriorityRec;

});
define("Comms_CS.model$EmailDataRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailDataRec = (function (_super) {
__extends(EmailDataRec, _super);
function EmailDataRec(defaults) {
_super.apply(this, arguments);
}
EmailDataRec.attributesToDeclare = function () {
return [
this.attr("EmailInstanceId", "emailInstanceIdAttr", "EmailInstanceId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Subject", "subjectAttr", "Subject", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailTargetListTo", "emailTargetListToAttr", "EmailTargetListTo", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailTargetListCC", "emailTargetListCCAttr", "EmailTargetListCC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateTimeCreated", "dateTimeCreatedAttr", "DateTimeCreated", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateTimeUpdated", "dateTimeUpdatedAttr", "DateTimeUpdated", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateTimeSent", "dateTimeSentAttr", "DateTimeSent", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateTimeArchived", "dateTimeArchivedAttr", "DateTimeArchived", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedById", "createdByIdAttr", "CreatedById", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SentById", "sentByIdAttr", "SentById", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UpdatedById", "updatedByIdAttr", "UpdatedById", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CreatedByName", "createdByNameAttr", "CreatedByName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SentByName", "sentByNameAttr", "SentByName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UpdatedByName", "updatedByNameAttr", "UpdatedByName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailStatusId", "emailStatusIdAttr", "EmailStatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EmailDateCategoryHeader", "emailDateCategoryHeaderAttr", "EmailDateCategoryHeader", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailDateTimeCategoryDetail", "emailDateTimeCategoryDetailAttr", "EmailDateTimeCategoryDetail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailDateTimeCategoryForSorting", "emailDateTimeCategoryForSortingAttr", "EmailDateTimeCategoryForSorting", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EmailDataRec.init();
return EmailDataRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.EmailDataRec = EmailDataRec;

});
define("Comms_CS.model$EmailInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Comms_CS.model$EmailContentsRec", "Comms_CS.model$EmailDataRec"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailInformationRec = (function (_super) {
__extends(EmailInformationRec, _super);
function EmailInformationRec(defaults) {
_super.apply(this, arguments);
}
EmailInformationRec.attributesToDeclare = function () {
return [
this.attr("EmailRecordContent", "emailRecordContentAttr", "EmailRecordContent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.EmailContentsRec());
}, true, Comms_CSModel.EmailContentsRec), 
this.attr("EmailRecordDetails", "emailRecordDetailsAttr", "EmailRecordDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.EmailDataRec());
}, true, Comms_CSModel.EmailDataRec)
].concat(_super.attributesToDeclare.call(this));
};
EmailInformationRec.init();
return EmailInformationRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.EmailInformationRec = EmailInformationRec;

});
define("Comms_CS.model$EmailContentRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailContentRec = (function (_super) {
__extends(EmailContentRec, _super);
function EmailContentRec(defaults) {
_super.apply(this, arguments);
}
EmailContentRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Content", "contentAttr", "Content", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("EmailInstanceId", "emailInstanceIdAttr", "EmailInstanceId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EmailContentRec.init();
return EmailContentRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.EmailContentRec = EmailContentRec;

});
define("Comms_CS.model$MessageTargetKindRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageTargetKindRec = (function (_super) {
__extends(MessageTargetKindRec, _super);
function MessageTargetKindRec(defaults) {
_super.apply(this, arguments);
}
MessageTargetKindRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageTargetKindRec.init();
return MessageTargetKindRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageTargetKindRec = MessageTargetKindRec;

});
define("Comms_CS.model$EmailDateCategoryRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailDateCategoryRec = (function (_super) {
__extends(EmailDateCategoryRec, _super);
function EmailDateCategoryRec(defaults) {
_super.apply(this, arguments);
}
EmailDateCategoryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EmailDateCategoryRec.init();
return EmailDateCategoryRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.EmailDateCategoryRec = EmailDateCategoryRec;

});
define("Comms_CS.model$MessageSendToTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageSendToTypeRec = (function (_super) {
__extends(MessageSendToTypeRec, _super);
function MessageSendToTypeRec(defaults) {
_super.apply(this, arguments);
}
MessageSendToTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageSendToTypeRec.init();
return MessageSendToTypeRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageSendToTypeRec = MessageSendToTypeRec;

});
define("Comms_CS.model$EmailInstanceRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var EmailInstanceRec = (function (_super) {
__extends(EmailInstanceRec, _super);
function EmailInstanceRec(defaults) {
_super.apply(this, arguments);
}
EmailInstanceRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Subject", "subjectAttr", "Subject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateTimeCreated", "dateTimeCreatedAttr", "DateTimeCreated", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateTimeSent", "dateTimeSentAttr", "DateTimeSent", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateTimeUpdated", "dateTimeUpdatedAttr", "DateTimeUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateTimeArchived", "dateTimeArchivedAttr", "DateTimeArchived", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SentBy", "sentByAttr", "SentBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EmailStatusId", "emailStatusIdAttr", "EmailStatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EmailInstanceRec.init();
return EmailInstanceRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.EmailInstanceRec = EmailInstanceRec;

});
define("Comms_CS.model$MessagePlaceholderFunctionRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessagePlaceholderFunctionRec = (function (_super) {
__extends(MessagePlaceholderFunctionRec, _super);
function MessagePlaceholderFunctionRec(defaults) {
_super.apply(this, arguments);
}
MessagePlaceholderFunctionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NumberOfParameters", "numberOfParametersAttr", "NumberOfParameters", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsClientSide", "isClientSideAttr", "IsClientSide", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessagePlaceholderFunctionRec.init();
return MessagePlaceholderFunctionRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessagePlaceholderFunctionRec = MessagePlaceholderFunctionRec;

});
define("Comms_CS.model$MessageTargetRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageTargetRec = (function (_super) {
__extends(MessageTargetRec, _super);
function MessageTargetRec(defaults) {
_super.apply(this, arguments);
}
MessageTargetRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MessageTemplateId", "messageTemplateIdAttr", "MessageTemplateId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MessageTargetKindId", "messageTargetKindIdAttr", "MessageTargetKindId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TargetName", "targetNameAttr", "TargetName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TargetValue", "targetValueAttr", "TargetValue", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageTargetRec.init();
return MessageTargetRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageTargetRec = MessageTargetRec;

});
define("Comms_CS.model$ParameterNameRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var ParameterNameRec = (function (_super) {
__extends(ParameterNameRec, _super);
function ParameterNameRec(defaults) {
_super.apply(this, arguments);
}
ParameterNameRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DeepLinkParameterId", "deepLinkParameterIdAttr", "DeepLinkParameterId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ParameterNameRec.init();
return ParameterNameRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.ParameterNameRec = ParameterNameRec;

});
define("Comms_CS.model$AdaptiveCardJSONRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var AdaptiveCardJSONRec = (function (_super) {
__extends(AdaptiveCardJSONRec, _super);
function AdaptiveCardJSONRec(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardJSONRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdaptiveCardContent", "adaptiveCardContentAttr", "AdaptiveCardContent", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdaptiveCardJSONRec.init();
return AdaptiveCardJSONRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.AdaptiveCardJSONRec = AdaptiveCardJSONRec;

});
define("Comms_CS.model$MessageApplicationTargetRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model"], function (exports, OutSystems, Comms_CSModel) {
var OS = OutSystems.Internal;
var MessageApplicationTargetRec = (function (_super) {
__extends(MessageApplicationTargetRec, _super);
function MessageApplicationTargetRec(defaults) {
_super.apply(this, arguments);
}
MessageApplicationTargetRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageApplicationTargetRec.init();
return MessageApplicationTargetRec;
})(OS.DataTypes.GenericRecord);
Comms_CSModel.MessageApplicationTargetRec = MessageApplicationTargetRec;

});
define("Comms_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Comms_CSModel = exports;
});
