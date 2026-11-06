define("Connect2_Assemble_CS.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
Connect2_Assemble_CSModel.TextList = TextList;

});
define("Connect2_Assemble_CS.model$PatternRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var PatternRec = (function (_super) {
__extends(PatternRec, _super);
function PatternRec(defaults) {
_super.apply(this, arguments);
}
PatternRec.attributesToDeclare = function () {
return [
this.attr("DayOfMonth", "dayOfMonthAttr", "dayOfMonth", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DaysOfWeek", "daysOfWeekAttr", "daysOfWeek", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("FirstDayOfWeek", "firstDayOfWeekAttr", "firstDayOfWeek", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Index", "indexAttr", "index", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Interval", "intervalAttr", "interval", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Month", "monthAttr", "month", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PatternRec.init();
return PatternRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.PatternRec = PatternRec;

});
define("Connect2_Assemble_CS.model$AssembleEventTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleEventTypeRec = (function (_super) {
__extends(AssembleEventTypeRec, _super);
function AssembleEventTypeRec(defaults) {
_super.apply(this, arguments);
}
AssembleEventTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AssembleEventTypeRec.init();
return AssembleEventTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleEventTypeRec = AssembleEventTypeRec;

});
define("Connect2_Assemble_CS.model$AssembleEventSummaryRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleEventTypeRec"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleEventSummaryRec = (function (_super) {
__extends(AssembleEventSummaryRec, _super);
function AssembleEventSummaryRec(defaults) {
_super.apply(this, arguments);
}
AssembleEventSummaryRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SeriesId", "seriesIdAttr", "SeriesId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateTime", "dateTimeAttr", "DateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("HostingSubdivisionId", "hostingSubdivisionIdAttr", "HostingSubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HostingLocation", "hostingLocationAttr", "HostingLocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostingSubdivisionFormattedAddress", "hostingSubdivisionFormattedAddressAttr", "HostingSubdivisionFormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostingSubdivisionUseCoordinates", "hostingSubdivisionUseCoordinatesAttr", "HostingSubdivisionUseCoordinates", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HostingSubdivisionLatitude", "hostingSubdivisionLatitudeAttr", "HostingSubdivisionLatitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("HostingSubdivisionLongitude", "hostingSubdivisionLongitudeAttr", "HostingSubdivisionLongitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("HostingSubdivisionHallPhotoSignedURL", "hostingSubdivisionHallPhotoSignedURLAttr", "HostingSubdivisionHallPhotoSignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssembleEventType", "assembleEventTypeAttr", "AssembleEventType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventTypeRec());
}, true, Connect2_Assemble_CSModel.AssembleEventTypeRec), 
this.attr("RecurrenceTypeId", "recurrenceTypeIdAttr", "RecurrenceTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecurrenceTypeLabel", "recurrenceTypeLabelAttr", "RecurrenceTypeLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsCustomRecurrence", "isCustomRecurrenceAttr", "IsCustomRecurrence", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RecurrencyFirstDate", "recurrencyFirstDateAttr", "RecurrencyFirstDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsAllDay", "isAllDayAttr", "IsAllDay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("BrothersCount", "brothersCountAttr", "BrothersCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SistersCount", "sistersCountAttr", "SistersCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsVirtual", "isVirtualAttr", "IsVirtual", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Notes", "notesAttr", "Notes", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VirtualMeetingTypeLabel", "virtualMeetingTypeLabelAttr", "VirtualMeetingTypeLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VirtualMeetingLink", "virtualMeetingLinkAttr", "VirtualMeetingLink", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VirtualMeetingId", "virtualMeetingIdAttr", "virtualMeetingId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VirtualMeetingPassword", "virtualMeetingPasswordAttr", "virtualMeetingCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsPBCC", "isPBCCAttr", "IsPBCC", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsUnavailable", "isUnavailableAttr", "IsUnavailable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AssembleEventSummaryRec.init();
return AssembleEventSummaryRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleEventSummaryRec = AssembleEventSummaryRec;

});
define("Connect2_Assemble_CS.model$RecurrenceRangeTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var RecurrenceRangeTypeRec = (function (_super) {
__extends(RecurrenceRangeTypeRec, _super);
function RecurrenceRangeTypeRec(defaults) {
_super.apply(this, arguments);
}
RecurrenceRangeTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
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
RecurrenceRangeTypeRec.init();
return RecurrenceRangeTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.RecurrenceRangeTypeRec = RecurrenceRangeTypeRec;

});
define("Connect2_Assemble_CS.model$RecurrenceTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var RecurrenceTypeRec = (function (_super) {
__extends(RecurrenceTypeRec, _super);
function RecurrenceTypeRec(defaults) {
_super.apply(this, arguments);
}
RecurrenceTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PluralLabel", "pluralLabelAttr", "PluralLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayLabel", "displayLabelAttr", "DisplayLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("APIAbsoluteType", "aPIAbsoluteTypeAttr", "APIAbsoluteType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("APIRelativeType", "aPIRelativeTypeAttr", "APIRelativeType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RecurrenceTypeRec.init();
return RecurrenceTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.RecurrenceTypeRec = RecurrenceTypeRec;

});
define("Connect2_Assemble_CS.model$AssembleAttendeeGuestRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_CS.model", "APIDomain_Directory_IS.model$PhotoURLRec", "Connect2_Assemble_CS.referencesHealth", "Connect2_Assemble_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleAttendeeGuestRec = (function (_super) {
__extends(AssembleAttendeeGuestRec, _super);
function AssembleAttendeeGuestRec(defaults) {
_super.apply(this, arguments);
}
AssembleAttendeeGuestRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyNames", "familyNamesAttr", "FamilyNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AvatarURL", "avatarURLAttr", "AvatarURL", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.PhotoURLRec());
}, true, APIDomain_Directory_ISModel.PhotoURLRec)
].concat(_super.attributesToDeclare.call(this));
};
AssembleAttendeeGuestRec.init();
return AssembleAttendeeGuestRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleAttendeeGuestRec = AssembleAttendeeGuestRec;

});
define("Connect2_Assemble_CS.model$RangeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var RangeRec = (function (_super) {
__extends(RangeRec, _super);
function RangeRec(defaults) {
_super.apply(this, arguments);
}
RangeRec.attributesToDeclare = function () {
return [
this.attr("EndDate", "endDateAttr", "endDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("NumberOfOccurrences", "numberOfOccurrencesAttr", "numberOfOccurrences", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RecurrenceTimeZone", "recurrenceTimeZoneAttr", "recurrenceTimeZone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StartDate", "startDateAttr", "startDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RangeRec.init();
return RangeRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.RangeRec = RangeRec;

});
define("Connect2_Assemble_CS.model$DayOfWeekRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var DayOfWeekRec = (function (_super) {
__extends(DayOfWeekRec, _super);
function DayOfWeekRec(defaults) {
_super.apply(this, arguments);
}
DayOfWeekRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LongLabel", "longLabelAttr", "LongLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Number", "numberAttr", "Number", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DayOfWeekRec.init();
return DayOfWeekRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.DayOfWeekRec = DayOfWeekRec;

});
define("Connect2_Assemble_CS.model$AssembleAttendeeGuestList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleAttendeeGuestList = (function (_super) {
__extends(AssembleAttendeeGuestList, _super);
function AssembleAttendeeGuestList(defaults) {
_super.apply(this, arguments);
}
AssembleAttendeeGuestList.itemType = Connect2_Assemble_CSModel.AssembleAttendeeGuestRec;
return AssembleAttendeeGuestList;
})(OS.DataTypes.GenericRecordList);
Connect2_Assemble_CSModel.AssembleAttendeeGuestList = AssembleAttendeeGuestList;

});
define("Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleAttendeeGuestList"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleAttendeeSubdivisionRec = (function (_super) {
__extends(AssembleAttendeeSubdivisionRec, _super);
function AssembleAttendeeSubdivisionRec(defaults) {
_super.apply(this, arguments);
}
AssembleAttendeeSubdivisionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdCount", "householdCountAttr", "HouseholdCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SubdivisionHouseholdList", "subdivisionHouseholdListAttr", "SubdivisionHouseholdList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleAttendeeGuestList());
}, true, Connect2_Assemble_CSModel.AssembleAttendeeGuestList)
].concat(_super.attributesToDeclare.call(this));
};
AssembleAttendeeSubdivisionRec.init();
return AssembleAttendeeSubdivisionRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleAttendeeSubdivisionRec = AssembleAttendeeSubdivisionRec;

});
define("Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleAttendeeSubdivisionList = (function (_super) {
__extends(AssembleAttendeeSubdivisionList, _super);
function AssembleAttendeeSubdivisionList(defaults) {
_super.apply(this, arguments);
}
AssembleAttendeeSubdivisionList.itemType = Connect2_Assemble_CSModel.AssembleAttendeeSubdivisionRec;
return AssembleAttendeeSubdivisionList;
})(OS.DataTypes.GenericRecordList);
Connect2_Assemble_CSModel.AssembleAttendeeSubdivisionList = AssembleAttendeeSubdivisionList;

});
define("Connect2_Assemble_CS.model$LocalityDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionList"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var LocalityDetailsRec = (function (_super) {
__extends(LocalityDetailsRec, _super);
function LocalityDetailsRec(defaults) {
_super.apply(this, arguments);
}
LocalityDetailsRec.attributesToDeclare = function () {
return [
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssembleAttendeeSubdivisionList", "assembleAttendeeSubdivisionListAttr", "AssembleAttendeeSubdivisionList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleAttendeeSubdivisionList());
}, true, Connect2_Assemble_CSModel.AssembleAttendeeSubdivisionList)
].concat(_super.attributesToDeclare.call(this));
};
LocalityDetailsRec.init();
return LocalityDetailsRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.LocalityDetailsRec = LocalityDetailsRec;

});
define("Connect2_Assemble_CS.model$LocalityDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$LocalityDetailsRec"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var LocalityDetailsList = (function (_super) {
__extends(LocalityDetailsList, _super);
function LocalityDetailsList(defaults) {
_super.apply(this, arguments);
}
LocalityDetailsList.itemType = Connect2_Assemble_CSModel.LocalityDetailsRec;
return LocalityDetailsList;
})(OS.DataTypes.GenericRecordList);
Connect2_Assemble_CSModel.LocalityDetailsList = LocalityDetailsList;

});
define("Connect2_Assemble_CS.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var LongIntegerList = (function (_super) {
__extends(LongIntegerList, _super);
function LongIntegerList(defaults) {
_super.apply(this, arguments);
}
LongIntegerList.itemType = OS.DataTypes.DataTypes.LongInteger;
return LongIntegerList;
})(OS.DataTypes.GenericRecordList);
Connect2_Assemble_CSModel.LongIntegerList = LongIntegerList;

});
define("Connect2_Assemble_CS.model$AssembleEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleEventSummaryRec", "Connect2_Assemble_CS.model$LocalityDetailsList", "Connect2_Assemble_CS.model$AssembleAttendeeGuestList"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleEventRec = (function (_super) {
__extends(AssembleEventRec, _super);
function AssembleEventRec(defaults) {
_super.apply(this, arguments);
}
AssembleEventRec.attributesToDeclare = function () {
return [
this.attr("AssembleEventSummary", "assembleEventSummaryAttr", "AssembleEventSummary", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventSummaryRec());
}, true, Connect2_Assemble_CSModel.AssembleEventSummaryRec), 
this.attr("AssembleAttendeeSubdivisionList", "assembleAttendeeSubdivisionListAttr", "AssembleAttendeeSubdivisionList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.LocalityDetailsList());
}, true, Connect2_Assemble_CSModel.LocalityDetailsList), 
this.attr("AssembleSpecialAttendeeSubdivisionList", "assembleSpecialAttendeeSubdivisionListAttr", "AssembleSpecialAttendeeSubdivisionList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.LocalityDetailsList());
}, true, Connect2_Assemble_CSModel.LocalityDetailsList), 
this.attr("AssembleAttendeeSpecialGuestList", "assembleAttendeeSpecialGuestListAttr", "AssembleAttendeeSpecialGuestList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleAttendeeGuestList());
}, true, Connect2_Assemble_CSModel.AssembleAttendeeGuestList), 
this.attr("GSMContactList", "gSMContactListAttr", "GSMContactList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, true, OS.DataTypes.LongIntegerList)
].concat(_super.attributesToDeclare.call(this));
};
AssembleEventRec.init();
return AssembleEventRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleEventRec = AssembleEventRec;

});
define("Connect2_Assemble_CS.model$RecurrencePatternWeekIndexRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var RecurrencePatternWeekIndexRec = (function (_super) {
__extends(RecurrencePatternWeekIndexRec, _super);
function RecurrencePatternWeekIndexRec(defaults) {
_super.apply(this, arguments);
}
RecurrencePatternWeekIndexRec.attributesToDeclare = function () {
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
}, true), 
this.attr("WeekIndex", "weekIndexAttr", "WeekIndex", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RecurrencePatternWeekIndexRec.init();
return RecurrencePatternWeekIndexRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.RecurrencePatternWeekIndexRec = RecurrencePatternWeekIndexRec;

});
define("Connect2_Assemble_CS.model$TextLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var TextLongIntegerRecord = (function (_super) {
__extends(TextLongIntegerRecord, _super);
function TextLongIntegerRecord(defaults) {
_super.apply(this, arguments);
}
TextLongIntegerRecord.attributesToDeclare = function () {
return [
this.attr("TimezoneLabel", "timezoneLabelAttr", "TimezoneLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OffsetSeconds", "offsetSecondsAttr", "OffsetSeconds", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextLongIntegerRecord._isAnonymousRecord = true;
TextLongIntegerRecord.UniqueId = "24c7dc51-9320-4edd-35bf-d37dfc23bb54";
TextLongIntegerRecord.init();
return TextLongIntegerRecord;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.TextLongIntegerRecord = TextLongIntegerRecord;

});
define("Connect2_Assemble_CS.model$AssembleEventContactRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$TextLongIntegerRecord", "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleEventContactRec = (function (_super) {
__extends(AssembleEventContactRec, _super);
function AssembleEventContactRec(defaults) {
_super.apply(this, arguments);
}
AssembleEventContactRec.attributesToDeclare = function () {
return [
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.TextLongIntegerRecord());
}, true, Connect2_Assemble_CSModel.TextLongIntegerRecord), 
this.attr("ContactDetails", "contactDetailsAttr", "ContactDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleAttendeeGuestRec());
}, true, Connect2_Assemble_CSModel.AssembleAttendeeGuestRec), 
this.attr("MobilePhoneNumber", "mobilePhoneNumberAttr", "MobilePhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhoneNumber", "homePhoneNumberAttr", "HomePhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhoneNumber", "workPhoneNumberAttr", "WorkPhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AssembleEventContactRec.init();
return AssembleEventContactRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleEventContactRec = AssembleEventContactRec;

});
define("Connect2_Assemble_CS.model$ReminderOptionRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var ReminderOptionRec = (function (_super) {
__extends(ReminderOptionRec, _super);
function ReminderOptionRec(defaults) {
_super.apply(this, arguments);
}
ReminderOptionRec.attributesToDeclare = function () {
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
}, true), 
this.attr("API_Value", "aPI_ValueAttr", "API_Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsAllDay", "isAllDayAttr", "IsAllDay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ReminderOptionRec.init();
return ReminderOptionRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.ReminderOptionRec = ReminderOptionRec;

});
define("Connect2_Assemble_CS.model$ViewmodeTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var ViewmodeTypeRec = (function (_super) {
__extends(ViewmodeTypeRec, _super);
function ViewmodeTypeRec(defaults) {
_super.apply(this, arguments);
}
ViewmodeTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CalendarViewMode", "calendarViewModeAttr", "CalendarViewMode", false, false, OS.DataTypes.DataTypes.Text, function () {
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
ViewmodeTypeRec.init();
return ViewmodeTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.ViewmodeTypeRec = ViewmodeTypeRec;

});
define("Connect2_Assemble_CS.model$VirtualMeetingTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var VirtualMeetingTypeRec = (function (_super) {
__extends(VirtualMeetingTypeRec, _super);
function VirtualMeetingTypeRec(defaults) {
_super.apply(this, arguments);
}
VirtualMeetingTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SecondaryLabel", "secondaryLabelAttr", "SecondaryLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
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
VirtualMeetingTypeRec.init();
return VirtualMeetingTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.VirtualMeetingTypeRec = VirtualMeetingTypeRec;

});
define("Connect2_Assemble_CS.model$AssembleEventTypeBooleanRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleEventTypeRec"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleEventTypeBooleanRecord = (function (_super) {
__extends(AssembleEventTypeBooleanRecord, _super);
function AssembleEventTypeBooleanRecord(defaults) {
_super.apply(this, arguments);
}
AssembleEventTypeBooleanRecord.attributesToDeclare = function () {
return [
this.attr("AssembleEventType", "assembleEventTypeAttr", "AssembleEventType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventTypeRec());
}, true, Connect2_Assemble_CSModel.AssembleEventTypeRec), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AssembleEventTypeBooleanRecord._isAnonymousRecord = true;
AssembleEventTypeBooleanRecord.UniqueId = "40c6abc9-bd04-62c0-7466-b3f07df92ada";
AssembleEventTypeBooleanRecord.init();
return AssembleEventTypeBooleanRecord;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleEventTypeBooleanRecord = AssembleEventTypeBooleanRecord;

});
define("Connect2_Assemble_CS.model$AssembleEventTypeBooleanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleEventTypeBooleanRecord"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleEventTypeBooleanRecordList = (function (_super) {
__extends(AssembleEventTypeBooleanRecordList, _super);
function AssembleEventTypeBooleanRecordList(defaults) {
_super.apply(this, arguments);
}
AssembleEventTypeBooleanRecordList.itemType = Connect2_Assemble_CSModel.AssembleEventTypeBooleanRecord;
return AssembleEventTypeBooleanRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_Assemble_CSModel.AssembleEventTypeBooleanRecordList = AssembleEventTypeBooleanRecordList;

});
define("Connect2_Assemble_CS.model$AssembleEventFilterRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleEventTypeBooleanRecordList"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleEventFilterRec = (function (_super) {
__extends(AssembleEventFilterRec, _super);
function AssembleEventFilterRec(defaults) {
_super.apply(this, arguments);
}
AssembleEventFilterRec.attributesToDeclare = function () {
return [
this.attr("AssembleFilterTimeOptionId", "assembleFilterTimeOptionIdAttr", "AssembleFilterTimeOptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssembleEventType", "assembleEventTypeAttr", "AssembleEventType", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventTypeBooleanRecordList());
}, true, Connect2_Assemble_CSModel.AssembleEventTypeBooleanRecordList)
].concat(_super.attributesToDeclare.call(this));
};
AssembleEventFilterRec.init();
return AssembleEventFilterRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleEventFilterRec = AssembleEventFilterRec;

});
define("Connect2_Assemble_CS.model$AssembleReportActionRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleReportActionRec = (function (_super) {
__extends(AssembleReportActionRec, _super);
function AssembleReportActionRec(defaults) {
_super.apply(this, arguments);
}
AssembleReportActionRec.attributesToDeclare = function () {
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
AssembleReportActionRec.init();
return AssembleReportActionRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleReportActionRec = AssembleReportActionRec;

});
define("Connect2_Assemble_CS.model$AssembleReporSortRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleReporSortRec = (function (_super) {
__extends(AssembleReporSortRec, _super);
function AssembleReporSortRec(defaults) {
_super.apply(this, arguments);
}
AssembleReporSortRec.attributesToDeclare = function () {
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
}, true), 
this.attr("API_key", "aPI_keyAttr", "API_key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AssembleReporSortRec.init();
return AssembleReporSortRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleReporSortRec = AssembleReporSortRec;

});
define("Connect2_Assemble_CS.model$AssembleDetailsPreloadingRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleEventSummaryRec"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleDetailsPreloadingRec = (function (_super) {
__extends(AssembleDetailsPreloadingRec, _super);
function AssembleDetailsPreloadingRec(defaults) {
_super.apply(this, arguments);
}
AssembleDetailsPreloadingRec.attributesToDeclare = function () {
return [
this.attr("AssembleEventSummary", "assembleEventSummaryAttr", "AssembleEventSummary", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventSummaryRec());
}, true, Connect2_Assemble_CSModel.AssembleEventSummaryRec), 
this.attr("PreloadedFromListIndex", "preloadedFromListIndexAttr", "PreloadedFromListIndex", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AssembleDetailsPreloadingRec.init();
return AssembleDetailsPreloadingRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleDetailsPreloadingRec = AssembleDetailsPreloadingRec;

});
define("Connect2_Assemble_CS.model$RecurrenceRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$PatternRec", "Connect2_Assemble_CS.model$RangeRec"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var RecurrenceRec = (function (_super) {
__extends(RecurrenceRec, _super);
function RecurrenceRec(defaults) {
_super.apply(this, arguments);
}
RecurrenceRec.attributesToDeclare = function () {
return [
this.attr("Pattern", "patternAttr", "pattern", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.PatternRec());
}, true, Connect2_Assemble_CSModel.PatternRec), 
this.attr("Range", "rangeAttr", "range", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.RangeRec());
}, true, Connect2_Assemble_CSModel.RangeRec)
].concat(_super.attributesToDeclare.call(this));
};
RecurrenceRec.init();
return RecurrenceRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.RecurrenceRec = RecurrenceRec;

});
define("Connect2_Assemble_CS.model$AssembleCarouselPreloadedItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleCarouselPreloadedItemRec = (function (_super) {
__extends(AssembleCarouselPreloadedItemRec, _super);
function AssembleCarouselPreloadedItemRec(defaults) {
_super.apply(this, arguments);
}
AssembleCarouselPreloadedItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateTime", "dateTimeAttr", "DateTime", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostingLocation", "hostingLocationAttr", "HostingLocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssembleType", "assembleTypeAttr", "AssembleType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attendees", "attendeesAttr", "Attendees", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Bucket", "bucketAttr", "Bucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Image", "imageAttr", "Image", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssembleListIndex", "assembleListIndexAttr", "AssembleListIndex", false, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AssembleCarouselPreloadedItemRec.init();
return AssembleCarouselPreloadedItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleCarouselPreloadedItemRec = AssembleCarouselPreloadedItemRec;

});
define("Connect2_Assemble_CS.model$AssembleCarouselPreloadedItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleCarouselPreloadedItemRec"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleCarouselPreloadedItemList = (function (_super) {
__extends(AssembleCarouselPreloadedItemList, _super);
function AssembleCarouselPreloadedItemList(defaults) {
_super.apply(this, arguments);
}
AssembleCarouselPreloadedItemList.itemType = Connect2_Assemble_CSModel.AssembleCarouselPreloadedItemRec;
return AssembleCarouselPreloadedItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_Assemble_CSModel.AssembleCarouselPreloadedItemList = AssembleCarouselPreloadedItemList;

});
define("Connect2_Assemble_CS.model$AssembleCarouselPreloadingRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_CS.model$AssembleCarouselPreloadedItemList"], function (exports, OutSystems, Connect2_Assemble_CSModel) {
var OS = OutSystems.Internal;
var AssembleCarouselPreloadingRec = (function (_super) {
__extends(AssembleCarouselPreloadingRec, _super);
function AssembleCarouselPreloadingRec(defaults) {
_super.apply(this, arguments);
}
AssembleCarouselPreloadingRec.attributesToDeclare = function () {
return [
this.attr("IsPreloaded", "isPreloadedAttr", "IsPreloaded", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PreloadedCarouselItems", "preloadedCarouselItemsAttr", "PreloadedCarouselItems", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleCarouselPreloadedItemList());
}, true, Connect2_Assemble_CSModel.AssembleCarouselPreloadedItemList), 
this.attr("IsFromMyUpdateFeed", "isFromMyUpdateFeedAttr", "IsFromMyUpdateFeed", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AssembleCarouselPreloadingRec.init();
return AssembleCarouselPreloadingRec;
})(OS.DataTypes.GenericRecord);
Connect2_Assemble_CSModel.AssembleCarouselPreloadingRec = AssembleCarouselPreloadingRec;

});
define("Connect2_Assemble_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_Assemble_CSModel = exports;
});
