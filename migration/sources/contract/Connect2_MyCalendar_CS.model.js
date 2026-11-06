define("Connect2_MyCalendar_CS.model$Type_MyCalendarEventSourceRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_CS.model"], function (exports, OutSystems, Connect2_MyCalendar_CSModel) {
var OS = OutSystems.Internal;
var Type_MyCalendarEventSourceRec = (function (_super) {
__extends(Type_MyCalendarEventSourceRec, _super);
function Type_MyCalendarEventSourceRec(defaults) {
_super.apply(this, arguments);
}
Type_MyCalendarEventSourceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_MyCalendarEventSourceRec.fromStructure = function (str) {
return new Type_MyCalendarEventSourceRec(new Type_MyCalendarEventSourceRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Type_MyCalendarEventSourceRec.init();
return Type_MyCalendarEventSourceRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_CSModel.Type_MyCalendarEventSourceRec = Type_MyCalendarEventSourceRec;

});
define("Connect2_MyCalendar_CS.model$CalendarEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_CS.model"], function (exports, OutSystems, Connect2_MyCalendar_CSModel) {
var OS = OutSystems.Internal;
var CalendarEventRec = (function (_super) {
__extends(CalendarEventRec, _super);
function CalendarEventRec(defaults) {
_super.apply(this, arguments);
}
CalendarEventRec.attributesToDeclare = function () {
return [
this.attr("SourceId", "sourceIdAttr", "sourceId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TypeId", "typeIdAttr", "type-id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SeriesId", "seriesIdAttr", "SeriesId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsAllDay", "isAllDayAttr", "allDay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Start", "startAttr", "start", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("End", "endAttr", "end", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Location", "locationAttr", "location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostId", "hostIdAttr", "host-id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "member-id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayInLocalTime", "displayInLocalTimeAttr", "DisplayInLocalTime", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsNavigationUnavailable", "isNavigationUnavailableAttr", "IsNavigationUnavailable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CalendarEventRec.init();
return CalendarEventRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_CSModel.CalendarEventRec = CalendarEventRec;

});
define("Connect2_MyCalendar_CS.model$Type_EventReminderRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_CS.model"], function (exports, OutSystems, Connect2_MyCalendar_CSModel) {
var OS = OutSystems.Internal;
var Type_EventReminderRec = (function (_super) {
__extends(Type_EventReminderRec, _super);
function Type_EventReminderRec(defaults) {
_super.apply(this, arguments);
}
Type_EventReminderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsForAllDayEvent", "isForAllDayEventAttr", "IsForAllDayEvent", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsForStartEndEvent", "isForStartEndEventAttr", "IsForStartEndEvent", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_EventReminderRec.init();
return Type_EventReminderRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_CSModel.Type_EventReminderRec = Type_EventReminderRec;

});
define("Connect2_MyCalendar_CS.model$EventInviteeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_CS.model"], function (exports, OutSystems, Connect2_MyCalendar_CSModel) {
var OS = OutSystems.Internal;
var EventInviteeRec = (function (_super) {
__extends(EventInviteeRec, _super);
function EventInviteeRec(defaults) {
_super.apply(this, arguments);
}
EventInviteeRec.attributesToDeclare = function () {
return [
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("InviteeId", "inviteeIdAttr", "InviteeId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("DisplayName", "displayNameAttr", "DisplayName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsHouseholder", "isHouseholderAttr", "IsHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsSpouse", "isSpouseAttr", "IsSpouse", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("BirthDate", "birthDateAttr", "BirthDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventInviteeRec.init();
return EventInviteeRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_CSModel.EventInviteeRec = EventInviteeRec;

});
define("Connect2_MyCalendar_CS.model$EventInviteeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_CS.model", "Connect2_MyCalendar_CS.model$EventInviteeRec"], function (exports, OutSystems, Connect2_MyCalendar_CSModel) {
var OS = OutSystems.Internal;
var EventInviteeList = (function (_super) {
__extends(EventInviteeList, _super);
function EventInviteeList(defaults) {
_super.apply(this, arguments);
}
EventInviteeList.itemType = Connect2_MyCalendar_CSModel.EventInviteeRec;
return EventInviteeList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_CSModel.EventInviteeList = EventInviteeList;

});
define("Connect2_MyCalendar_CS.model$MyCalendarUserEventDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_CS.model", "Connect2_MyCalendar_CS.model$EventInviteeList"], function (exports, OutSystems, Connect2_MyCalendar_CSModel) {
var OS = OutSystems.Internal;
var MyCalendarUserEventDetailsRec = (function (_super) {
__extends(MyCalendarUserEventDetailsRec, _super);
function MyCalendarUserEventDetailsRec(defaults) {
_super.apply(this, arguments);
}
MyCalendarUserEventDetailsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventTitle", "eventTitleAttr", "EventTitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsAllDay", "isAllDayAttr", "IsAllDay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Notes", "notesAttr", "Notes", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedBy", "createdByAttr", "createdBy", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Start", "startAttr", "Start", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("End", "endAttr", "End", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("RecurrenceTypeId", "recurrenceTypeIdAttr", "RecurrenceTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecurrenceEndDate", "recurrenceEndDateAttr", "RecurrenceEndDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EventReminderTypeId", "eventReminderTypeIdAttr", "EventReminderTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventInviteeList", "eventInviteeListAttr", "EventInviteeList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyCalendar_CSModel.EventInviteeList());
}, true, Connect2_MyCalendar_CSModel.EventInviteeList)
].concat(_super.attributesToDeclare.call(this));
};
MyCalendarUserEventDetailsRec.init();
return MyCalendarUserEventDetailsRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_CSModel.MyCalendarUserEventDetailsRec = MyCalendarUserEventDetailsRec;

});
define("Connect2_MyCalendar_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_MyCalendar_CSModel = exports;
});
