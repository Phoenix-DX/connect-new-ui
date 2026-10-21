define("Connect2_Notification_CS.model$MessageListItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Notification_CS.model"], function (exports, OutSystems, Connect2_Notification_CSModel) {
var OS = OutSystems.Internal;
var MessageListItemRec = (function (_super) {
__extends(MessageListItemRec, _super);
function MessageListItemRec(defaults) {
_super.apply(this, arguments);
}
MessageListItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MessageTemplateTypeId", "messageTemplateTypeIdAttr", "MessageTemplateTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Title", "titleAttr", "Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Summary", "summaryAttr", "Summary", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateTimeCreated", "dateTimeCreatedAttr", "DateTimeCreated", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MessageTemplatePriorityId", "messageTemplatePriorityIdAttr", "MessageTemplatePriorityId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProfileIconURL", "profileIconURLAttr", "ProfileIconURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsClear", "isClearAttr", "IsClear", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsRead", "isReadAttr", "IsRead", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CreatedByUserId", "createdByUserIdAttr", "CreatedByUserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MessageInfoTypeId", "messageInfoTypeIdAttr", "MessageInfoTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MessageSenderTargetName", "messageSenderTargetNameAttr", "MessageSenderTargetName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageListItemRec.init();
return MessageListItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_Notification_CSModel.MessageListItemRec = MessageListItemRec;

});
define("Connect2_Notification_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_Notification_CSModel = exports;
});
