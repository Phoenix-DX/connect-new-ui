define("Comms_BL.model$", ["exports", "OutSystems/ClientRuntime/Main", "Comms_BL.model"], function (exports, OutSystems, Comms_BLModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
Comms_BLModel.TextList = TextList;

});
define("Comms_BL.model$InvalidPlayerIdErrorsRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_BL.model"], function (exports, OutSystems, Comms_BLModel) {
var OS = OutSystems.Internal;
var InvalidPlayerIdErrorsRec = (function (_super) {
__extends(InvalidPlayerIdErrorsRec, _super);
function InvalidPlayerIdErrorsRec(defaults) {
_super.apply(this, arguments);
}
InvalidPlayerIdErrorsRec.attributesToDeclare = function () {
return [
this.attr("InvalidPlayerId", "invalidPlayerIdAttr", "invalid_player_ids", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList)
].concat(_super.attributesToDeclare.call(this));
};
InvalidPlayerIdErrorsRec.fromStructure = function (str) {
return new InvalidPlayerIdErrorsRec(new InvalidPlayerIdErrorsRec.RecordClass({
invalidPlayerIdAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InvalidPlayerIdErrorsRec.init();
return InvalidPlayerIdErrorsRec;
})(OS.DataTypes.GenericRecord);
Comms_BLModel.InvalidPlayerIdErrorsRec = InvalidPlayerIdErrorsRec;

});
define("Comms_BL.model$BaseNotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_BL.model"], function (exports, OutSystems, Comms_BLModel) {
var OS = OutSystems.Internal;
var BaseNotificationRec = (function (_super) {
__extends(BaseNotificationRec, _super);
function BaseNotificationRec(defaults) {
_super.apply(this, arguments);
}
BaseNotificationRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Summary", "summaryAttr", "Summary", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TargetContactBaseUserId", "targetContactBaseUserIdAttr", "TargetContactBaseUserId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SenderContactBaseUserId", "senderContactBaseUserIdAttr", "SenderContactBaseUserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BaseNotificationRec.init();
return BaseNotificationRec;
})(OS.DataTypes.GenericRecord);
Comms_BLModel.BaseNotificationRec = BaseNotificationRec;

});
define("Comms_BL.model$NotificationsEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_BL.model"], function (exports, OutSystems, Comms_BLModel) {
var OS = OutSystems.Internal;
var NotificationsEventRec = (function (_super) {
__extends(NotificationsEventRec, _super);
function NotificationsEventRec(defaults) {
_super.apply(this, arguments);
}
NotificationsEventRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MessageTemplateId", "messageTemplateIdAttr", "MessageTemplateId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NotificationsEventRec.init();
return NotificationsEventRec;
})(OS.DataTypes.GenericRecord);
Comms_BLModel.NotificationsEventRec = NotificationsEventRec;

});
define("Comms_BL.model$CommunicationEventsRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_BL.model"], function (exports, OutSystems, Comms_BLModel) {
var OS = OutSystems.Internal;
var CommunicationEventsRec = (function (_super) {
__extends(CommunicationEventsRec, _super);
function CommunicationEventsRec(defaults) {
_super.apply(this, arguments);
}
CommunicationEventsRec.attributesToDeclare = function () {
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
CommunicationEventsRec.init();
return CommunicationEventsRec;
})(OS.DataTypes.GenericRecord);
Comms_BLModel.CommunicationEventsRec = CommunicationEventsRec;

});
define("Comms_BL.model$TemplateEventAttributesRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_BL.model"], function (exports, OutSystems, Comms_BLModel) {
var OS = OutSystems.Internal;
var TemplateEventAttributesRec = (function (_super) {
__extends(TemplateEventAttributesRec, _super);
function TemplateEventAttributesRec(defaults) {
_super.apply(this, arguments);
}
TemplateEventAttributesRec.attributesToDeclare = function () {
return [
this.attr("MessageTemplateId", "messageTemplateIdAttr", "MessageTemplateId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TemplateContent", "templateContentAttr", "TemplateContent", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TemplateEventAttributesRec.init();
return TemplateEventAttributesRec;
})(OS.DataTypes.GenericRecord);
Comms_BLModel.TemplateEventAttributesRec = TemplateEventAttributesRec;

});
define("Comms_BL.model$MessageEventAttributesRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_BL.model"], function (exports, OutSystems, Comms_BLModel) {
var OS = OutSystems.Internal;
var MessageEventAttributesRec = (function (_super) {
__extends(MessageEventAttributesRec, _super);
function MessageEventAttributesRec(defaults) {
_super.apply(this, arguments);
}
MessageEventAttributesRec.attributesToDeclare = function () {
return [
this.attr("MessageTemplateId", "messageTemplateIdAttr", "MessageTemplateId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MessageTemplateType", "messageTemplateTypeAttr", "MessageTemplateType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MessageContent", "messageContentAttr", "MessageContent", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TargetGroup", "targetGroupAttr", "TargetGroup", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Sender", "senderAttr", "Sender", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Priority", "priorityAttr", "Priority", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayType", "displayTypeAttr", "DisplayType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TemplateId", "templateIdAttr", "TemplateId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageEventAttributesRec.init();
return MessageEventAttributesRec;
})(OS.DataTypes.GenericRecord);
Comms_BLModel.MessageEventAttributesRec = MessageEventAttributesRec;

});
define("Comms_BL.model$RespondToAdaptiveCardEventAttributesRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_BL.model"], function (exports, OutSystems, Comms_BLModel) {
var OS = OutSystems.Internal;
var RespondToAdaptiveCardEventAttributesRec = (function (_super) {
__extends(RespondToAdaptiveCardEventAttributesRec, _super);
function RespondToAdaptiveCardEventAttributesRec(defaults) {
_super.apply(this, arguments);
}
RespondToAdaptiveCardEventAttributesRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceId", "deviceIdAttr", "DeviceId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MessageId", "messageIdAttr", "MessageId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MessageTemplateId", "messageTemplateIdAttr", "MessageTemplateId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ActionParameters", "actionParametersAttr", "ActionParameters", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RespondToAdaptiveCardEventAttributesRec.init();
return RespondToAdaptiveCardEventAttributesRec;
})(OS.DataTypes.GenericRecord);
Comms_BLModel.RespondToAdaptiveCardEventAttributesRec = RespondToAdaptiveCardEventAttributesRec;

});
define("Comms_BL.model$PostNotifcationInvalidPlayersRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_BL.model", "Comms_BL.model$InvalidPlayerIdErrorsRec"], function (exports, OutSystems, Comms_BLModel) {
var OS = OutSystems.Internal;
var PostNotifcationInvalidPlayersRec = (function (_super) {
__extends(PostNotifcationInvalidPlayersRec, _super);
function PostNotifcationInvalidPlayersRec(defaults) {
_super.apply(this, arguments);
}
PostNotifcationInvalidPlayersRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Recipients", "recipientsAttr", "recipients", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("External_id", "external_idAttr", "external_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InvalidPlayerIdErrors", "invalidPlayerIdErrorsAttr", "errors", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_BLModel.InvalidPlayerIdErrorsRec());
}, true, Comms_BLModel.InvalidPlayerIdErrorsRec)
].concat(_super.attributesToDeclare.call(this));
};
PostNotifcationInvalidPlayersRec.init();
return PostNotifcationInvalidPlayersRec;
})(OS.DataTypes.GenericRecord);
Comms_BLModel.PostNotifcationInvalidPlayersRec = PostNotifcationInvalidPlayersRec;

});
define("Comms_BL.model$BaseNotification_MultipleRecepientsRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_BL.model"], function (exports, OutSystems, Comms_BLModel) {
var OS = OutSystems.Internal;
var BaseNotification_MultipleRecepientsRec = (function (_super) {
__extends(BaseNotification_MultipleRecepientsRec, _super);
function BaseNotification_MultipleRecepientsRec(defaults) {
_super.apply(this, arguments);
}
BaseNotification_MultipleRecepientsRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Summary", "summaryAttr", "Summary", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TargetContactBaseUserIds", "targetContactBaseUserIdsAttr", "TargetContactBaseUserIds", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("SenderContactBaseUserId", "senderContactBaseUserIdAttr", "SenderContactBaseUserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BaseNotification_MultipleRecepientsRec.init();
return BaseNotification_MultipleRecepientsRec;
})(OS.DataTypes.GenericRecord);
Comms_BLModel.BaseNotification_MultipleRecepientsRec = BaseNotification_MultipleRecepientsRec;

});
define("Comms_BL.model$MessageItemDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "Comms_BL.model"], function (exports, OutSystems, Comms_BLModel) {
var OS = OutSystems.Internal;
var MessageItemDetailRec = (function (_super) {
__extends(MessageItemDetailRec, _super);
function MessageItemDetailRec(defaults) {
_super.apply(this, arguments);
}
MessageItemDetailRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Summary", "summaryAttr", "Summary", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SentFromName", "sentFromNameAttr", "SentFromName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsRead", "isReadAttr", "IsRead", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsUrgent", "isUrgentAttr", "IsUrgent", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsPrivate", "isPrivateAttr", "IsPrivate", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DateTimeCreated", "dateTimeCreatedAttr", "DateTimeCreated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ProfileIconURL", "profileIconURLAttr", "ProfileIconURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedByUserId", "createdByUserIdAttr", "CreatedByUserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsSentByAGroup", "isSentByAGroupAttr", "IsSentByAGroup", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageItemDetailRec.init();
return MessageItemDetailRec;
})(OS.DataTypes.GenericRecord);
Comms_BLModel.MessageItemDetailRec = MessageItemDetailRec;

});
define("Comms_BL.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Comms_BLModel = exports;
});
