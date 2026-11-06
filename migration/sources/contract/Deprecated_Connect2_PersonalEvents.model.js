define("Deprecated_Connect2_PersonalEvents.model$", ["exports", "OutSystems/ClientRuntime/Main", "Deprecated_Connect2_PersonalEvents.model"], function (exports, OutSystems, Deprecated_Connect2_PersonalEventsModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
Deprecated_Connect2_PersonalEventsModel.TextList = TextList;

});
define("Deprecated_Connect2_PersonalEvents.model$EventAddressRec", ["exports", "OutSystems/ClientRuntime/Main", "Deprecated_Connect2_PersonalEvents.model"], function (exports, OutSystems, Deprecated_Connect2_PersonalEventsModel) {
var OS = OutSystems.Internal;
var EventAddressRec = (function (_super) {
__extends(EventAddressRec, _super);
function EventAddressRec(defaults) {
_super.apply(this, arguments);
}
EventAddressRec.attributesToDeclare = function () {
return [
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventAddressRec.fromStructure = function (str) {
return new EventAddressRec(new EventAddressRec.RecordClass({
addressAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventAddressRec.init();
return EventAddressRec;
})(OS.DataTypes.GenericRecord);
Deprecated_Connect2_PersonalEventsModel.EventAddressRec = EventAddressRec;

});
define("Deprecated_Connect2_PersonalEvents.model$UI_PersonalEvent_InviteesRec", ["exports", "OutSystems/ClientRuntime/Main", "Deprecated_Connect2_PersonalEvents.model"], function (exports, OutSystems, Deprecated_Connect2_PersonalEventsModel) {
var OS = OutSystems.Internal;
var UI_PersonalEvent_InviteesRec = (function (_super) {
__extends(UI_PersonalEvent_InviteesRec, _super);
function UI_PersonalEvent_InviteesRec(defaults) {
_super.apply(this, arguments);
}
UI_PersonalEvent_InviteesRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RSVPStatus", "rSVPStatusAttr", "RSVPStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_PersonalEvent_InviteesRec.init();
return UI_PersonalEvent_InviteesRec;
})(OS.DataTypes.GenericRecord);
Deprecated_Connect2_PersonalEventsModel.UI_PersonalEvent_InviteesRec = UI_PersonalEvent_InviteesRec;

});
define("Deprecated_Connect2_PersonalEvents.model$UI_PersonalEvent_InviteesList", ["exports", "OutSystems/ClientRuntime/Main", "Deprecated_Connect2_PersonalEvents.model", "Deprecated_Connect2_PersonalEvents.model$UI_PersonalEvent_InviteesRec"], function (exports, OutSystems, Deprecated_Connect2_PersonalEventsModel) {
var OS = OutSystems.Internal;
var UI_PersonalEvent_InviteesList = (function (_super) {
__extends(UI_PersonalEvent_InviteesList, _super);
function UI_PersonalEvent_InviteesList(defaults) {
_super.apply(this, arguments);
}
UI_PersonalEvent_InviteesList.itemType = Deprecated_Connect2_PersonalEventsModel.UI_PersonalEvent_InviteesRec;
return UI_PersonalEvent_InviteesList;
})(OS.DataTypes.GenericRecordList);
Deprecated_Connect2_PersonalEventsModel.UI_PersonalEvent_InviteesList = UI_PersonalEvent_InviteesList;

});
define("Deprecated_Connect2_PersonalEvents.model$UI_PersonalEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Deprecated_Connect2_PersonalEvents.model", "Connect2_Assemble_CS.model$RecurrenceRec", "Deprecated_Connect2_PersonalEvents.referencesHealth", "Deprecated_Connect2_PersonalEvents.referencesHealth$Connect2_Assemble_CS", "Deprecated_Connect2_PersonalEvents.model$EventAddressRec", "Deprecated_Connect2_PersonalEvents.model$UI_PersonalEvent_InviteesList"], function (exports, OutSystems, Connect2_Assemble_CSModel, Deprecated_Connect2_PersonalEventsModel) {
var OS = OutSystems.Internal;
var UI_PersonalEventRec = (function (_super) {
__extends(UI_PersonalEventRec, _super);
function UI_PersonalEventRec(defaults) {
_super.apply(this, arguments);
}
UI_PersonalEventRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsAllDay", "isAllDayAttr", "IsAllDay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("StartDateTime", "startDateTimeAttr", "StartDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EndDateTime", "endDateTimeAttr", "EndDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Recurrence", "recurrenceAttr", "Recurrence", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.RecurrenceRec());
}, true, Connect2_Assemble_CSModel.RecurrenceRec), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Deprecated_Connect2_PersonalEventsModel.EventAddressRec());
}, true, Deprecated_Connect2_PersonalEventsModel.EventAddressRec), 
this.attr("ReminderId", "reminderIdAttr", "ReminderId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Invitees", "inviteesAttr", "Invitees", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Deprecated_Connect2_PersonalEventsModel.UI_PersonalEvent_InviteesList());
}, true, Deprecated_Connect2_PersonalEventsModel.UI_PersonalEvent_InviteesList), 
this.attr("RSVPStatus", "rSVPStatusAttr", "RSVPStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InviteeCount", "inviteeCountAttr", "InviteeCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Note", "noteAttr", "Note", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HasReminder", "hasReminderAttr", "HasReminder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_PersonalEventRec.init();
return UI_PersonalEventRec;
})(OS.DataTypes.GenericRecord);
Deprecated_Connect2_PersonalEventsModel.UI_PersonalEventRec = UI_PersonalEventRec;

});
define("Deprecated_Connect2_PersonalEvents.model$Type_RSVPStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "Deprecated_Connect2_PersonalEvents.model"], function (exports, OutSystems, Deprecated_Connect2_PersonalEventsModel) {
var OS = OutSystems.Internal;
var Type_RSVPStatusRec = (function (_super) {
__extends(Type_RSVPStatusRec, _super);
function Type_RSVPStatusRec(defaults) {
_super.apply(this, arguments);
}
Type_RSVPStatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_RSVPStatusRec.init();
return Type_RSVPStatusRec;
})(OS.DataTypes.GenericRecord);
Deprecated_Connect2_PersonalEventsModel.Type_RSVPStatusRec = Type_RSVPStatusRec;

});
define("Deprecated_Connect2_PersonalEvents.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Deprecated_Connect2_PersonalEventsModel = exports;
});
