define("Connect_Search_CS.model$SearchResult_BackupRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Search_CS.model"], function (exports, OutSystems, Connect_Search_CSModel) {
var OS = OutSystems.Internal;
var SearchResult_BackupRec = (function (_super) {
__extends(SearchResult_BackupRec, _super);
function SearchResult_BackupRec(defaults) {
_super.apply(this, arguments);
}
SearchResult_BackupRec.attributesToDeclare = function () {
return [
this.attr("Score", "scoreAttr", "score", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderId", "householderIdAttr", "householderId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdditionalInformation", "additionalInformationAttr", "additionalInformation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "recordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("DisplayHouseholdName", "displayHouseholdNameAttr", "DisplayHouseholdName", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayAddress", "displayAddressAttr", "DisplayAddress", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Event_IsPersonal", "event_IsPersonalAttr", "IsPersonal", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Event_EventTypeTitle", "event_EventTypeTitleAttr", "Event_EventTypeTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Event_HostSubdivisionId", "event_HostSubdivisionIdAttr", "HostSubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Event_HostHouseholderId", "event_HostHouseholderIdAttr", "HostHouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Event_Source", "event_SourceAttr", "Source", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("School_SchoolType", "school_SchoolTypeAttr", "SchoolType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("School_LocalityName", "school_LocalityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("School_CountryName", "school_CountryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("School_AreasServed", "school_AreasServedAttr", "AreasServed", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("School_Email", "school_EmailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("School_Phone", "school_PhoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SearchResult_BackupRec.init();
return SearchResult_BackupRec;
})(OS.DataTypes.GenericRecord);
Connect_Search_CSModel.SearchResult_BackupRec = SearchResult_BackupRec;

});
define("Connect_Search_CS.model$SearchResultRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Search_CS.model"], function (exports, OutSystems, Connect_Search_CSModel) {
var OS = OutSystems.Internal;
var SearchResultRec = (function (_super) {
__extends(SearchResultRec, _super);
function SearchResultRec(defaults) {
_super.apply(this, arguments);
}
SearchResultRec.attributesToDeclare = function () {
return [
this.attr("Score", "scoreAttr", "score", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderId", "householderIdAttr", "householderId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdditionalInformation", "additionalInformationAttr", "additionalInformation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "recordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("DisplayHouseholdName", "displayHouseholdNameAttr", "DisplayHouseholdName", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayAddress", "displayAddressAttr", "DisplayAddress", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Event_IsPersonal", "event_IsPersonalAttr", "IsPersonal", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Event_EventTypeTitle", "event_EventTypeTitleAttr", "Event_EventTypeTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Event_HostSubdivisionId", "event_HostSubdivisionIdAttr", "HostSubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Event_HostHouseholderId", "event_HostHouseholderIdAttr", "HostHouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Event_Source", "event_SourceAttr", "Source", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Event_EventHostId", "event_EventHostIdAttr", "EventHostId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Event_StartDate", "event_StartDateAttr", "Event_StartDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Event_EndDate", "event_EndDateAttr", "Event_EndDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Event_OrbitEventType", "event_OrbitEventTypeAttr", "Event_OrbitEventType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SearchResultRec.init();
return SearchResultRec;
})(OS.DataTypes.GenericRecord);
Connect_Search_CSModel.SearchResultRec = SearchResultRec;

});
define("Connect_Search_CS.model$Type_SearchTargetRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Search_CS.model"], function (exports, OutSystems, Connect_Search_CSModel) {
var OS = OutSystems.Internal;
var Type_SearchTargetRec = (function (_super) {
__extends(Type_SearchTargetRec, _super);
function Type_SearchTargetRec(defaults) {
_super.apply(this, arguments);
}
Type_SearchTargetRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_SearchTargetRec.init();
return Type_SearchTargetRec;
})(OS.DataTypes.GenericRecord);
Connect_Search_CSModel.Type_SearchTargetRec = Type_SearchTargetRec;

});
define("Connect_Search_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Search_CSModel = exports;
});
