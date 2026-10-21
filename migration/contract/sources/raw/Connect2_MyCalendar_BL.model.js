define("Connect2_MyCalendar_BL.model$UI_MyCalendarEventCardRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var UI_MyCalendarEventCardRec = (function (_super) {
__extends(UI_MyCalendarEventCardRec, _super);
function UI_MyCalendarEventCardRec(defaults) {
_super.apply(this, arguments);
}
UI_MyCalendarEventCardRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MyCalendarEventSourceId", "myCalendarEventSourceIdAttr", "MyCalendarEventSourceId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventTitle", "eventTitleAttr", "EventTitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Start", "startAttr", "Start", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("End", "endAttr", "End", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsAllDay", "isAllDayAttr", "IsAllDay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NavigationDataJSON", "navigationDataJSONAttr", "NavigationDataJSON", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayInLocalTime", "displayInLocalTimeAttr", "DisplayInLocalTime", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_MyCalendarEventCardRec.init();
return UI_MyCalendarEventCardRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.UI_MyCalendarEventCardRec = UI_MyCalendarEventCardRec;

});
define("Connect2_MyCalendar_BL.model$UI_MyCalendarEventCardList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$UI_MyCalendarEventCardRec"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var UI_MyCalendarEventCardList = (function (_super) {
__extends(UI_MyCalendarEventCardList, _super);
function UI_MyCalendarEventCardList(defaults) {
_super.apply(this, arguments);
}
UI_MyCalendarEventCardList.itemType = Connect2_MyCalendar_BLModel.UI_MyCalendarEventCardRec;
return UI_MyCalendarEventCardList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.UI_MyCalendarEventCardList = UI_MyCalendarEventCardList;

});
define("Connect2_MyCalendar_BL.model$MyCalendarEventSourceRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_CS.model", "Connect2_MyCalendar_BL.model$UI_MyCalendarEventCardList", "Connect2_MyCalendar_CS.model$Type_MyCalendarEventSourceRec", "Connect2_MyCalendar_BL.referencesHealth", "Connect2_MyCalendar_BL.referencesHealth$Connect2_MyCalendar_CS"], function (exports, OutSystems, Connect2_MyCalendar_BLModel, Connect2_MyCalendar_CSModel) {
var OS = OutSystems.Internal;
var MyCalendarEventSourceRec = (function (_super) {
__extends(MyCalendarEventSourceRec, _super);
function MyCalendarEventSourceRec(defaults) {
_super.apply(this, arguments);
}
MyCalendarEventSourceRec.attributesToDeclare = function () {
return [
this.attr("MyCalendarEventList", "myCalendarEventListAttr", "MyCalendarEventList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyCalendar_BLModel.UI_MyCalendarEventCardList());
}, true, Connect2_MyCalendar_BLModel.UI_MyCalendarEventCardList), 
this.attr("MyCalendar_EventSource", "myCalendar_EventSourceAttr", "MyCalendar_EventSource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyCalendar_CSModel.Type_MyCalendarEventSourceRec());
}, true, Connect2_MyCalendar_CSModel.Type_MyCalendarEventSourceRec)
].concat(_super.attributesToDeclare.call(this));
};
MyCalendarEventSourceRec.init();
return MyCalendarEventSourceRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.MyCalendarEventSourceRec = MyCalendarEventSourceRec;

});
define("Connect2_MyCalendar_BL.model$MyCalendarEventSourceList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$MyCalendarEventSourceRec"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var MyCalendarEventSourceList = (function (_super) {
__extends(MyCalendarEventSourceList, _super);
function MyCalendarEventSourceList(defaults) {
_super.apply(this, arguments);
}
MyCalendarEventSourceList.itemType = Connect2_MyCalendar_BLModel.MyCalendarEventSourceRec;
return MyCalendarEventSourceList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.MyCalendarEventSourceList = MyCalendarEventSourceList;

});
define("Connect2_MyCalendar_BL.model$CacheableCalendarEventsSourceRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$MyCalendarEventSourceList"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var CacheableCalendarEventsSourceRec = (function (_super) {
__extends(CacheableCalendarEventsSourceRec, _super);
function CacheableCalendarEventsSourceRec(defaults) {
_super.apply(this, arguments);
}
CacheableCalendarEventsSourceRec.attributesToDeclare = function () {
return [
this.attr("CacheKey", "cacheKeyAttr", "CacheKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyCalendar_BLModel.MyCalendarEventSourceList());
}, true, Connect2_MyCalendar_BLModel.MyCalendarEventSourceList)
].concat(_super.attributesToDeclare.call(this));
};
CacheableCalendarEventsSourceRec.init();
return CacheableCalendarEventsSourceRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.CacheableCalendarEventsSourceRec = CacheableCalendarEventsSourceRec;

});
define("Connect2_MyCalendar_BL.model$CacheableCalendarEventsSourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$CacheableCalendarEventsSourceRec"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var CacheableCalendarEventsSourceRecord = (function (_super) {
__extends(CacheableCalendarEventsSourceRecord, _super);
function CacheableCalendarEventsSourceRecord(defaults) {
_super.apply(this, arguments);
}
CacheableCalendarEventsSourceRecord.attributesToDeclare = function () {
return [
this.attr("CacheableCalendarEventsSource", "cacheableCalendarEventsSourceAttr", "CacheableCalendarEventsSource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyCalendar_BLModel.CacheableCalendarEventsSourceRec());
}, true, Connect2_MyCalendar_BLModel.CacheableCalendarEventsSourceRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableCalendarEventsSourceRecord.fromStructure = function (str) {
return new CacheableCalendarEventsSourceRecord(new CacheableCalendarEventsSourceRecord.RecordClass({
cacheableCalendarEventsSourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableCalendarEventsSourceRecord._isAnonymousRecord = true;
CacheableCalendarEventsSourceRecord.UniqueId = "bf6c6eec-b94e-ce18-be9d-c1dd1a75731d";
CacheableCalendarEventsSourceRecord.init();
return CacheableCalendarEventsSourceRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.CacheableCalendarEventsSourceRecord = CacheableCalendarEventsSourceRecord;

});
define("Connect2_MyCalendar_BL.model$CacheableCalendarEventsSourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$CacheableCalendarEventsSourceRecord"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var CacheableCalendarEventsSourceRecordList = (function (_super) {
__extends(CacheableCalendarEventsSourceRecordList, _super);
function CacheableCalendarEventsSourceRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableCalendarEventsSourceRecordList.itemType = Connect2_MyCalendar_BLModel.CacheableCalendarEventsSourceRecord;
return CacheableCalendarEventsSourceRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.CacheableCalendarEventsSourceRecordList = CacheableCalendarEventsSourceRecordList;

});
define("Connect2_MyCalendar_BL.model$TextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Text.model", "Connect2_MyCalendar_BL.model", "Extension.Text.model$TextRec", "Connect2_MyCalendar_BL.referencesHealth", "Connect2_MyCalendar_BL.referencesHealth$Text"], function (exports, OutSystems, Extension_TextModel, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var TextRecord = (function (_super) {
__extends(TextRecord, _super);
function TextRecord(defaults) {
_super.apply(this, arguments);
}
TextRecord.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_TextModel.TextRec());
}, true, Extension_TextModel.TextRec)
].concat(_super.attributesToDeclare.call(this));
};
TextRecord.fromStructure = function (str) {
return new TextRecord(new TextRecord.RecordClass({
textAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextRecord._isAnonymousRecord = true;
TextRecord.UniqueId = "0d84b59e-ff89-87c4-71ae-b49dfa9f2c39";
TextRecord.init();
return TextRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.TextRecord = TextRecord;

});
define("Connect2_MyCalendar_BL.model$TextList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Text.model", "Connect2_MyCalendar_BL.model", "Extension.Text.model$TextRec", "Connect2_MyCalendar_BL.referencesHealth", "Connect2_MyCalendar_BL.referencesHealth$Text"], function (exports, OutSystems, Extension_TextModel, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = Extension_TextModel.TextRec;
return TextList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.TextList = TextList;

});
define("Connect2_MyCalendar_BL.model$MyCalendarEventNavigationDataRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var MyCalendarEventNavigationDataRec = (function (_super) {
__extends(MyCalendarEventNavigationDataRec, _super);
function MyCalendarEventNavigationDataRec(defaults) {
_super.apply(this, arguments);
}
MyCalendarEventNavigationDataRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParentId", "parentIdAttr", "ParentId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SourceId", "sourceIdAttr", "SourceId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TypeId", "typeIdAttr", "TypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostId", "hostIdAttr", "HostId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TransportHeaderClass", "transportHeaderClassAttr", "TransportHeaderClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Start", "startAttr", "Start", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("End", "endAttr", "End", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MyCalendarEventNavigationDataRec.init();
return MyCalendarEventNavigationDataRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.MyCalendarEventNavigationDataRec = MyCalendarEventNavigationDataRec;

});
define("Connect2_MyCalendar_BL.model$MyCalendarEventNavigationDataList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$MyCalendarEventNavigationDataRec"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var MyCalendarEventNavigationDataList = (function (_super) {
__extends(MyCalendarEventNavigationDataList, _super);
function MyCalendarEventNavigationDataList(defaults) {
_super.apply(this, arguments);
}
MyCalendarEventNavigationDataList.itemType = Connect2_MyCalendar_BLModel.MyCalendarEventNavigationDataRec;
return MyCalendarEventNavigationDataList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.MyCalendarEventNavigationDataList = MyCalendarEventNavigationDataList;

});
define("Connect2_MyCalendar_BL.model$MyCalendarEventSourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$MyCalendarEventSourceRec"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var MyCalendarEventSourceRecord = (function (_super) {
__extends(MyCalendarEventSourceRecord, _super);
function MyCalendarEventSourceRecord(defaults) {
_super.apply(this, arguments);
}
MyCalendarEventSourceRecord.attributesToDeclare = function () {
return [
this.attr("MyCalendarEventSource", "myCalendarEventSourceAttr", "MyCalendarEventSource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyCalendar_BLModel.MyCalendarEventSourceRec());
}, true, Connect2_MyCalendar_BLModel.MyCalendarEventSourceRec)
].concat(_super.attributesToDeclare.call(this));
};
MyCalendarEventSourceRecord.fromStructure = function (str) {
return new MyCalendarEventSourceRecord(new MyCalendarEventSourceRecord.RecordClass({
myCalendarEventSourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MyCalendarEventSourceRecord._isAnonymousRecord = true;
MyCalendarEventSourceRecord.UniqueId = "e822376b-0349-ca24-2111-069f1af7deed";
MyCalendarEventSourceRecord.init();
return MyCalendarEventSourceRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.MyCalendarEventSourceRecord = MyCalendarEventSourceRecord;

});
define("Connect2_MyCalendar_BL.model$MyCalendarEventSourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$MyCalendarEventSourceRecord"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var MyCalendarEventSourceRecordList = (function (_super) {
__extends(MyCalendarEventSourceRecordList, _super);
function MyCalendarEventSourceRecordList(defaults) {
_super.apply(this, arguments);
}
MyCalendarEventSourceRecordList.itemType = Connect2_MyCalendar_BLModel.MyCalendarEventSourceRecord;
return MyCalendarEventSourceRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.MyCalendarEventSourceRecordList = MyCalendarEventSourceRecordList;

});
define("Connect2_MyCalendar_BL.model$UI_MyCalendarEventCardRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$UI_MyCalendarEventCardRec"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var UI_MyCalendarEventCardRecord = (function (_super) {
__extends(UI_MyCalendarEventCardRecord, _super);
function UI_MyCalendarEventCardRecord(defaults) {
_super.apply(this, arguments);
}
UI_MyCalendarEventCardRecord.attributesToDeclare = function () {
return [
this.attr("UI_MyCalendarEventCard", "uI_MyCalendarEventCardAttr", "UI_MyCalendarEventCard", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyCalendar_BLModel.UI_MyCalendarEventCardRec());
}, true, Connect2_MyCalendar_BLModel.UI_MyCalendarEventCardRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_MyCalendarEventCardRecord.fromStructure = function (str) {
return new UI_MyCalendarEventCardRecord(new UI_MyCalendarEventCardRecord.RecordClass({
uI_MyCalendarEventCardAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_MyCalendarEventCardRecord._isAnonymousRecord = true;
UI_MyCalendarEventCardRecord.UniqueId = "c1493c6e-4688-ceea-bea7-861b5b7c6082";
UI_MyCalendarEventCardRecord.init();
return UI_MyCalendarEventCardRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.UI_MyCalendarEventCardRecord = UI_MyCalendarEventCardRecord;

});
define("Connect2_MyCalendar_BL.model$UI_MyCalendarEventCardRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$UI_MyCalendarEventCardRecord"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var UI_MyCalendarEventCardRecordList = (function (_super) {
__extends(UI_MyCalendarEventCardRecordList, _super);
function UI_MyCalendarEventCardRecordList(defaults) {
_super.apply(this, arguments);
}
UI_MyCalendarEventCardRecordList.itemType = Connect2_MyCalendar_BLModel.UI_MyCalendarEventCardRecord;
return UI_MyCalendarEventCardRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.UI_MyCalendarEventCardRecordList = UI_MyCalendarEventCardRecordList;

});
define("Connect2_MyCalendar_BL.model$CalendarEventList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_CS.model", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_CS.model$CalendarEventRec", "Connect2_MyCalendar_BL.referencesHealth", "Connect2_MyCalendar_BL.referencesHealth$Connect2_MyCalendar_CS"], function (exports, OutSystems, Connect2_MyCalendar_CSModel, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var CalendarEventList = (function (_super) {
__extends(CalendarEventList, _super);
function CalendarEventList(defaults) {
_super.apply(this, arguments);
}
CalendarEventList.itemType = Connect2_MyCalendar_CSModel.CalendarEventRec;
return CalendarEventList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.CalendarEventList = CalendarEventList;

});
define("Connect2_MyCalendar_BL.model$Type_MyCalendarEventSourceList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_CS.model", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_CS.model$Type_MyCalendarEventSourceRec", "Connect2_MyCalendar_BL.referencesHealth", "Connect2_MyCalendar_BL.referencesHealth$Connect2_MyCalendar_CS"], function (exports, OutSystems, Connect2_MyCalendar_CSModel, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var Type_MyCalendarEventSourceList = (function (_super) {
__extends(Type_MyCalendarEventSourceList, _super);
function Type_MyCalendarEventSourceList(defaults) {
_super.apply(this, arguments);
}
Type_MyCalendarEventSourceList.itemType = Connect2_MyCalendar_CSModel.Type_MyCalendarEventSourceRec;
return Type_MyCalendarEventSourceList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.Type_MyCalendarEventSourceList = Type_MyCalendarEventSourceList;

});
define("Connect2_MyCalendar_BL.model$MyCalendarEventNavigationDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$MyCalendarEventNavigationDataRec"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var MyCalendarEventNavigationDataRecord = (function (_super) {
__extends(MyCalendarEventNavigationDataRecord, _super);
function MyCalendarEventNavigationDataRecord(defaults) {
_super.apply(this, arguments);
}
MyCalendarEventNavigationDataRecord.attributesToDeclare = function () {
return [
this.attr("MyCalendarEventNavigationData", "myCalendarEventNavigationDataAttr", "MyCalendarEventNavigationData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyCalendar_BLModel.MyCalendarEventNavigationDataRec());
}, true, Connect2_MyCalendar_BLModel.MyCalendarEventNavigationDataRec)
].concat(_super.attributesToDeclare.call(this));
};
MyCalendarEventNavigationDataRecord.fromStructure = function (str) {
return new MyCalendarEventNavigationDataRecord(new MyCalendarEventNavigationDataRecord.RecordClass({
myCalendarEventNavigationDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MyCalendarEventNavigationDataRecord._isAnonymousRecord = true;
MyCalendarEventNavigationDataRecord.UniqueId = "533d3aae-f2aa-30d5-68a2-cba891d76ef7";
MyCalendarEventNavigationDataRecord.init();
return MyCalendarEventNavigationDataRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.MyCalendarEventNavigationDataRecord = MyCalendarEventNavigationDataRecord;

});
define("Connect2_MyCalendar_BL.model$CalendarEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_CS.model", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_CS.model$CalendarEventRec", "Connect2_MyCalendar_BL.referencesHealth", "Connect2_MyCalendar_BL.referencesHealth$Connect2_MyCalendar_CS"], function (exports, OutSystems, Connect2_MyCalendar_CSModel, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var CalendarEventRecord = (function (_super) {
__extends(CalendarEventRecord, _super);
function CalendarEventRecord(defaults) {
_super.apply(this, arguments);
}
CalendarEventRecord.attributesToDeclare = function () {
return [
this.attr("CalendarEvent", "calendarEventAttr", "CalendarEvent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyCalendar_CSModel.CalendarEventRec());
}, true, Connect2_MyCalendar_CSModel.CalendarEventRec)
].concat(_super.attributesToDeclare.call(this));
};
CalendarEventRecord.fromStructure = function (str) {
return new CalendarEventRecord(new CalendarEventRecord.RecordClass({
calendarEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CalendarEventRecord._isAnonymousRecord = true;
CalendarEventRecord.UniqueId = "5d3b1b3e-6fd8-c6ef-7291-c6b4d0607619";
CalendarEventRecord.init();
return CalendarEventRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.CalendarEventRecord = CalendarEventRecord;

});
define("Connect2_MyCalendar_BL.model$TextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$TextRecord"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var TextRecordList = (function (_super) {
__extends(TextRecordList, _super);
function TextRecordList(defaults) {
_super.apply(this, arguments);
}
TextRecordList.itemType = Connect2_MyCalendar_BLModel.TextRecord;
return TextRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.TextRecordList = TextRecordList;

});
define("Connect2_MyCalendar_BL.model$Type_MyCalendarEventSourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_CS.model", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_CS.model$Type_MyCalendarEventSourceRec", "Connect2_MyCalendar_BL.referencesHealth", "Connect2_MyCalendar_BL.referencesHealth$Connect2_MyCalendar_CS"], function (exports, OutSystems, Connect2_MyCalendar_CSModel, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var Type_MyCalendarEventSourceRecord = (function (_super) {
__extends(Type_MyCalendarEventSourceRecord, _super);
function Type_MyCalendarEventSourceRecord(defaults) {
_super.apply(this, arguments);
}
Type_MyCalendarEventSourceRecord.attributesToDeclare = function () {
return [
this.attr("Type_MyCalendarEventSource", "type_MyCalendarEventSourceAttr", "Type_MyCalendarEventSource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyCalendar_CSModel.Type_MyCalendarEventSourceRec());
}, true, Connect2_MyCalendar_CSModel.Type_MyCalendarEventSourceRec)
].concat(_super.attributesToDeclare.call(this));
};
Type_MyCalendarEventSourceRecord.fromStructure = function (str) {
return new Type_MyCalendarEventSourceRecord(new Type_MyCalendarEventSourceRecord.RecordClass({
type_MyCalendarEventSourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Type_MyCalendarEventSourceRecord._isAnonymousRecord = true;
Type_MyCalendarEventSourceRecord.UniqueId = "898d5016-1671-c12a-8d45-89fcb3b9aace";
Type_MyCalendarEventSourceRecord.init();
return Type_MyCalendarEventSourceRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.Type_MyCalendarEventSourceRecord = Type_MyCalendarEventSourceRecord;

});
define("Connect2_MyCalendar_BL.model$AppManager_UserExtendedList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "Connect2_MyCalendar_BL.model", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "Connect2_MyCalendar_BL.referencesHealth", "Connect2_MyCalendar_BL.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedList = (function (_super) {
__extends(AppManager_UserExtendedList, _super);
function AppManager_UserExtendedList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedList.itemType = UBT_AppManager_DBModel.AppManager_UserExtendedRec;
return AppManager_UserExtendedList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.AppManager_UserExtendedList = AppManager_UserExtendedList;

});
define("Connect2_MyCalendar_BL.model$AppManager_UserExtendedRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "Connect2_MyCalendar_BL.model", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "Connect2_MyCalendar_BL.referencesHealth", "Connect2_MyCalendar_BL.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedRecord = (function (_super) {
__extends(AppManager_UserExtendedRecord, _super);
function AppManager_UserExtendedRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_UserExtended", "appManager_UserExtendedAttr", "AppManager_UserExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserExtendedRec());
}, true, UBT_AppManager_DBModel.AppManager_UserExtendedRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserExtendedRecord.fromStructure = function (str) {
return new AppManager_UserExtendedRecord(new AppManager_UserExtendedRecord.RecordClass({
appManager_UserExtendedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_UserExtendedRecord._isAnonymousRecord = true;
AppManager_UserExtendedRecord.UniqueId = "d80ef878-b0c6-75c9-c595-43a61974b82d";
AppManager_UserExtendedRecord.init();
return AppManager_UserExtendedRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.AppManager_UserExtendedRecord = AppManager_UserExtendedRecord;

});
define("Connect2_MyCalendar_BL.model$AppManager_UserExtendedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$AppManager_UserExtendedRecord"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedRecordList = (function (_super) {
__extends(AppManager_UserExtendedRecordList, _super);
function AppManager_UserExtendedRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedRecordList.itemType = Connect2_MyCalendar_BLModel.AppManager_UserExtendedRecord;
return AppManager_UserExtendedRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.AppManager_UserExtendedRecordList = AppManager_UserExtendedRecordList;

});
define("Connect2_MyCalendar_BL.model$CalendarEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$CalendarEventRecord"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var CalendarEventRecordList = (function (_super) {
__extends(CalendarEventRecordList, _super);
function CalendarEventRecordList(defaults) {
_super.apply(this, arguments);
}
CalendarEventRecordList.itemType = Connect2_MyCalendar_BLModel.CalendarEventRecord;
return CalendarEventRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.CalendarEventRecordList = CalendarEventRecordList;

});
define("Connect2_MyCalendar_BL.model$Type_MyCalendarEventSourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$Type_MyCalendarEventSourceRecord"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var Type_MyCalendarEventSourceRecordList = (function (_super) {
__extends(Type_MyCalendarEventSourceRecordList, _super);
function Type_MyCalendarEventSourceRecordList(defaults) {
_super.apply(this, arguments);
}
Type_MyCalendarEventSourceRecordList.itemType = Connect2_MyCalendar_BLModel.Type_MyCalendarEventSourceRecord;
return Type_MyCalendarEventSourceRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.Type_MyCalendarEventSourceRecordList = Type_MyCalendarEventSourceRecordList;

});
define("Connect2_MyCalendar_BL.model$CacheableCalendarEventsSourceList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$CacheableCalendarEventsSourceRec"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var CacheableCalendarEventsSourceList = (function (_super) {
__extends(CacheableCalendarEventsSourceList, _super);
function CacheableCalendarEventsSourceList(defaults) {
_super.apply(this, arguments);
}
CacheableCalendarEventsSourceList.itemType = Connect2_MyCalendar_BLModel.CacheableCalendarEventsSourceRec;
return CacheableCalendarEventsSourceList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.CacheableCalendarEventsSourceList = CacheableCalendarEventsSourceList;

});
define("Connect2_MyCalendar_BL.model$GetEventsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_IS.model", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_IS.model$GetEventsRec", "Connect2_MyCalendar_BL.referencesHealth", "Connect2_MyCalendar_BL.referencesHealth$Connect2_MyCalendar_IS"], function (exports, OutSystems, Connect2_MyCalendar_ISModel, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var GetEventsRecord = (function (_super) {
__extends(GetEventsRecord, _super);
function GetEventsRecord(defaults) {
_super.apply(this, arguments);
}
GetEventsRecord.attributesToDeclare = function () {
return [
this.attr("GetEvents", "getEventsAttr", "GetEvents", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyCalendar_ISModel.GetEventsRec());
}, true, Connect2_MyCalendar_ISModel.GetEventsRec)
].concat(_super.attributesToDeclare.call(this));
};
GetEventsRecord.fromStructure = function (str) {
return new GetEventsRecord(new GetEventsRecord.RecordClass({
getEventsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetEventsRecord._isAnonymousRecord = true;
GetEventsRecord.UniqueId = "fd488ffe-8f68-f009-5c00-2688041fd655";
GetEventsRecord.init();
return GetEventsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyCalendar_BLModel.GetEventsRecord = GetEventsRecord;

});
define("Connect2_MyCalendar_BL.model$GetEventsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$GetEventsRecord"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var GetEventsRecordList = (function (_super) {
__extends(GetEventsRecordList, _super);
function GetEventsRecordList(defaults) {
_super.apply(this, arguments);
}
GetEventsRecordList.itemType = Connect2_MyCalendar_BLModel.GetEventsRecord;
return GetEventsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.GetEventsRecordList = GetEventsRecordList;

});
define("Connect2_MyCalendar_BL.model$GetEventsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_IS.model", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_IS.model$GetEventsRec", "Connect2_MyCalendar_BL.referencesHealth", "Connect2_MyCalendar_BL.referencesHealth$Connect2_MyCalendar_IS"], function (exports, OutSystems, Connect2_MyCalendar_ISModel, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var GetEventsList = (function (_super) {
__extends(GetEventsList, _super);
function GetEventsList(defaults) {
_super.apply(this, arguments);
}
GetEventsList.itemType = Connect2_MyCalendar_ISModel.GetEventsRec;
return GetEventsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.GetEventsList = GetEventsList;

});
define("Connect2_MyCalendar_BL.model$MyCalendarEventNavigationDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyCalendar_BL.model", "Connect2_MyCalendar_BL.model$MyCalendarEventNavigationDataRecord"], function (exports, OutSystems, Connect2_MyCalendar_BLModel) {
var OS = OutSystems.Internal;
var MyCalendarEventNavigationDataRecordList = (function (_super) {
__extends(MyCalendarEventNavigationDataRecordList, _super);
function MyCalendarEventNavigationDataRecordList(defaults) {
_super.apply(this, arguments);
}
MyCalendarEventNavigationDataRecordList.itemType = Connect2_MyCalendar_BLModel.MyCalendarEventNavigationDataRecord;
return MyCalendarEventNavigationDataRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyCalendar_BLModel.MyCalendarEventNavigationDataRecordList = MyCalendarEventNavigationDataRecordList;

});
define("Connect2_MyCalendar_BL.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_MyCalendar_BLModel = exports;
Object.defineProperty(Connect2_MyCalendar_BLModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["04c8f6c4-715e-457b-a4a0-bd2b1b61c08b"];
}
});

Connect2_MyCalendar_BLModel.staticEntities = {};
Connect2_MyCalendar_BLModel.staticEntities.type_MyCalendarEventSource = {};
var getType_MyCalendarEventSourceRecord = function (record) {
return OS.ApplicationInfo.getModules()["dd5b3d75-f29e-40a6-90d0-ac0f4a7447e9"].staticEntities["df7b2b62-9689-4c33-bb3f-b1e221b9f3f3"][record];
};
Object.defineProperty(Connect2_MyCalendar_BLModel.staticEntities.type_MyCalendarEventSource, "userCreated", {
get: function () {
return getType_MyCalendarEventSourceRecord("08c67b27-bab0-432d-a277-b25999a6a9d2");
}
});

Object.defineProperty(Connect2_MyCalendar_BLModel.staticEntities.type_MyCalendarEventSource, "orbit", {
get: function () {
return getType_MyCalendarEventSourceRecord("4dc60cb4-d167-4a38-b4f1-c9e4c237de4a");
}
});

Object.defineProperty(Connect2_MyCalendar_BLModel.staticEntities.type_MyCalendarEventSource, "lDM", {
get: function () {
return getType_MyCalendarEventSourceRecord("61ce360f-014f-4618-8f22-f6fc563c812a");
}
});

Object.defineProperty(Connect2_MyCalendar_BLModel.staticEntities.type_MyCalendarEventSource, "assemble", {
get: function () {
return getType_MyCalendarEventSourceRecord("7d9e58d0-b0ee-4bec-8672-f19ab407a581");
}
});

});
