define("UBTConnect_Notes_MCS.model$APIM_CommonHeaderList", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "UBTConnect_Notes_MCS.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderList = (function (_super) {
__extends(APIM_CommonHeaderList, _super);
function APIM_CommonHeaderList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderList.itemType = APIUtilitiesLibModel.APIM_CommonHeaderRec;
return APIM_CommonHeaderList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.APIM_CommonHeaderList = APIM_CommonHeaderList;

});
define("UBTConnect_Notes_MCS.model$LocalNoteRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var LocalNoteRec = (function (_super) {
__extends(LocalNoteRec, _super);
function LocalNoteRec(defaults) {
_super.apply(this, arguments);
}
LocalNoteRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("NoteId", "noteIdAttr", "NoteId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NoteCategoryId", "noteCategoryIdAttr", "NoteCategoryId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ItemId", "itemIdAttr", "ItemId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateCreatedUtc", "dateCreatedUtcAttr", "DateCreatedUtc", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateEditedUtc", "dateEditedUtcAttr", "DateEditedUtc", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("NotesTotalCount", "notesTotalCountAttr", "NotesTotalCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalNoteRec.init();
return LocalNoteRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.LocalNoteRec = LocalNoteRec;

});
define("UBTConnect_Notes_MCS.model$APIM_CommonHeaderRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "UBTConnect_Notes_MCS.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderRecord = (function (_super) {
__extends(APIM_CommonHeaderRecord, _super);
function APIM_CommonHeaderRecord(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderRecord.attributesToDeclare = function () {
return [
this.attr("APIM_CommonHeader", "aPIM_CommonHeaderAttr", "APIM_CommonHeader", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIUtilitiesLibModel.APIM_CommonHeaderRec());
}, true, APIUtilitiesLibModel.APIM_CommonHeaderRec)
].concat(_super.attributesToDeclare.call(this));
};
APIM_CommonHeaderRecord.fromStructure = function (str) {
return new APIM_CommonHeaderRecord(new APIM_CommonHeaderRecord.RecordClass({
aPIM_CommonHeaderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
APIM_CommonHeaderRecord._isAnonymousRecord = true;
APIM_CommonHeaderRecord.UniqueId = "5dc44aad-4907-be05-45c7-1d99f5a99386";
APIM_CommonHeaderRecord.init();
return APIM_CommonHeaderRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.APIM_CommonHeaderRecord = APIM_CommonHeaderRecord;

});
define("UBTConnect_Notes_MCS.model$APIM_CommonHeaderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$APIM_CommonHeaderRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderRecordList = (function (_super) {
__extends(APIM_CommonHeaderRecordList, _super);
function APIM_CommonHeaderRecordList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderRecordList.itemType = UBTConnect_Notes_MCSModel.APIM_CommonHeaderRecord;
return APIM_CommonHeaderRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.APIM_CommonHeaderRecordList = APIM_CommonHeaderRecordList;

});
define("UBTConnect_Notes_MCS.model$General_Normailzed_NotesForSyncList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$General_Normailzed_NotesForSyncRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var General_Normailzed_NotesForSyncList = (function (_super) {
__extends(General_Normailzed_NotesForSyncList, _super);
function General_Normailzed_NotesForSyncList(defaults) {
_super.apply(this, arguments);
}
General_Normailzed_NotesForSyncList.itemType = APIDomain_Directory_ISModel.General_Normailzed_NotesForSyncRec;
return General_Normailzed_NotesForSyncList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.General_Normailzed_NotesForSyncList = General_Normailzed_NotesForSyncList;

});
define("UBTConnect_Notes_MCS.model$DynamicPillRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var DynamicPillRec = (function (_super) {
__extends(DynamicPillRec, _super);
function DynamicPillRec(defaults) {
_super.apply(this, arguments);
}
DynamicPillRec.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Identifier", "identifierAttr", "Identifier", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DynamicPillRec.init();
return DynamicPillRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.DynamicPillRec = DynamicPillRec;

});
define("UBTConnect_Notes_MCS.model$DynamicPillRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$DynamicPillRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var DynamicPillRecord = (function (_super) {
__extends(DynamicPillRecord, _super);
function DynamicPillRecord(defaults) {
_super.apply(this, arguments);
}
DynamicPillRecord.attributesToDeclare = function () {
return [
this.attr("DynamicPill", "dynamicPillAttr", "DynamicPill", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_Notes_MCSModel.DynamicPillRec());
}, true, UBTConnect_Notes_MCSModel.DynamicPillRec)
].concat(_super.attributesToDeclare.call(this));
};
DynamicPillRecord.fromStructure = function (str) {
return new DynamicPillRecord(new DynamicPillRecord.RecordClass({
dynamicPillAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DynamicPillRecord._isAnonymousRecord = true;
DynamicPillRecord.UniqueId = "33b042ab-567c-b6a1-e9c7-cb689b0ed3b4";
DynamicPillRecord.init();
return DynamicPillRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.DynamicPillRecord = DynamicPillRecord;

});
define("UBTConnect_Notes_MCS.model$DynamicPillRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$DynamicPillRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var DynamicPillRecordList = (function (_super) {
__extends(DynamicPillRecordList, _super);
function DynamicPillRecordList(defaults) {
_super.apply(this, arguments);
}
DynamicPillRecordList.itemType = UBTConnect_Notes_MCSModel.DynamicPillRecord;
return DynamicPillRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.DynamicPillRecordList = DynamicPillRecordList;

});
define("UBTConnect_Notes_MCS.model$TextTextLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var TextTextLongIntegerRecord = (function (_super) {
__extends(TextTextLongIntegerRecord, _super);
function TextTextLongIntegerRecord(defaults) {
_super.apply(this, arguments);
}
TextTextLongIntegerRecord.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RegionId", "regionIdAttr", "RegionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextLongIntegerRecord._isAnonymousRecord = true;
TextTextLongIntegerRecord.UniqueId = "e0513088-a367-43e6-cebf-843baa3a1a2d";
TextTextLongIntegerRecord.init();
return TextTextLongIntegerRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.TextTextLongIntegerRecord = TextTextLongIntegerRecord;

});
define("UBTConnect_Notes_MCS.model$TextTextLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$TextTextLongIntegerRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var TextTextLongIntegerRecordList = (function (_super) {
__extends(TextTextLongIntegerRecordList, _super);
function TextTextLongIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextLongIntegerRecordList.itemType = UBTConnect_Notes_MCSModel.TextTextLongIntegerRecord;
return TextTextLongIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.TextTextLongIntegerRecordList = TextTextLongIntegerRecordList;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_SubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionRecord = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionRecord, _super);
function Directory_UserCurrent_SubscriptionRecord(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionRecord.attributesToDeclare = function () {
return [
this.attr("Directory_UserCurrent_Subscription", "directory_UserCurrent_SubscriptionAttr", "Directory_UserCurrent_Subscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec());
}, true, APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_UserCurrent_SubscriptionRecord.fromStructure = function (str) {
return new Directory_UserCurrent_SubscriptionRecord(new Directory_UserCurrent_SubscriptionRecord.RecordClass({
directory_UserCurrent_SubscriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_UserCurrent_SubscriptionRecord._isAnonymousRecord = true;
Directory_UserCurrent_SubscriptionRecord.UniqueId = "12fffd2e-e48c-df0d-2451-c4a227301f67";
Directory_UserCurrent_SubscriptionRecord.init();
return Directory_UserCurrent_SubscriptionRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_SubscriptionRecord = Directory_UserCurrent_SubscriptionRecord;

});
define("UBTConnect_Notes_MCS.model$Custom_Address_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemList = (function (_super) {
__extends(Custom_Address_ItemList, _super);
function Custom_Address_ItemList(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemList.itemType = APIDomain_Directory_ISModel.Custom_Address_ItemRec;
return Custom_Address_ItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Custom_Address_ItemList = Custom_Address_ItemList;

});
define("UBTConnect_Notes_MCS.model$Custom_AddressRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Custom_AddressRecord = (function (_super) {
__extends(Custom_AddressRecord, _super);
function Custom_AddressRecord(defaults) {
_super.apply(this, arguments);
}
Custom_AddressRecord.attributesToDeclare = function () {
return [
this.attr("Custom_Address", "custom_AddressAttr", "Custom_Address", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Custom_AddressRec());
}, true, APIDomain_Directory_ISModel.Custom_AddressRec)
].concat(_super.attributesToDeclare.call(this));
};
Custom_AddressRecord.fromStructure = function (str) {
return new Custom_AddressRecord(new Custom_AddressRecord.RecordClass({
custom_AddressAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Custom_AddressRecord._isAnonymousRecord = true;
Custom_AddressRecord.UniqueId = "c7712318-c19f-7cf6-b839-3659abfc25e9";
Custom_AddressRecord.init();
return Custom_AddressRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.Custom_AddressRecord = Custom_AddressRecord;

});
define("UBTConnect_Notes_MCS.model$Custom_AddressRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$Custom_AddressRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Custom_AddressRecordList = (function (_super) {
__extends(Custom_AddressRecordList, _super);
function Custom_AddressRecordList(defaults) {
_super.apply(this, arguments);
}
Custom_AddressRecordList.itemType = UBTConnect_Notes_MCSModel.Custom_AddressRecord;
return Custom_AddressRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Custom_AddressRecordList = Custom_AddressRecordList;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_VisibilityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityRecord = (function (_super) {
__extends(Directory_UserCurrent_VisibilityRecord, _super);
function Directory_UserCurrent_VisibilityRecord(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityRecord.attributesToDeclare = function () {
return [
this.attr("Directory_UserCurrent_Visibility", "directory_UserCurrent_VisibilityAttr", "Directory_UserCurrent_Visibility", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec());
}, true, APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_UserCurrent_VisibilityRecord.fromStructure = function (str) {
return new Directory_UserCurrent_VisibilityRecord(new Directory_UserCurrent_VisibilityRecord.RecordClass({
directory_UserCurrent_VisibilityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_UserCurrent_VisibilityRecord._isAnonymousRecord = true;
Directory_UserCurrent_VisibilityRecord.UniqueId = "7b7e67a5-bdc1-86e0-8fe8-24efe525a0f9";
Directory_UserCurrent_VisibilityRecord.init();
return Directory_UserCurrent_VisibilityRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_VisibilityRecord = Directory_UserCurrent_VisibilityRecord;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_VisibilityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$Directory_UserCurrent_VisibilityRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityRecordList = (function (_super) {
__extends(Directory_UserCurrent_VisibilityRecordList, _super);
function Directory_UserCurrent_VisibilityRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityRecordList.itemType = UBTConnect_Notes_MCSModel.Directory_UserCurrent_VisibilityRecord;
return Directory_UserCurrent_VisibilityRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_VisibilityRecordList = Directory_UserCurrent_VisibilityRecordList;

});
define("UBTConnect_Notes_MCS.model$IntegerLocalNoteRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$LocalNoteRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var IntegerLocalNoteRecord = (function (_super) {
__extends(IntegerLocalNoteRecord, _super);
function IntegerLocalNoteRecord(defaults) {
_super.apply(this, arguments);
}
IntegerLocalNoteRecord.attributesToDeclare = function () {
return [
this.attr("Attribute1", "attribute1Attr", "Attribute1", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LocalNote", "localNoteAttr", "LocalNote", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_Notes_MCSModel.LocalNoteRec());
}, true, UBTConnect_Notes_MCSModel.LocalNoteRec)
].concat(_super.attributesToDeclare.call(this));
};
IntegerLocalNoteRecord._isAnonymousRecord = true;
IntegerLocalNoteRecord.UniqueId = "ba4f4d57-8715-0584-2353-d4ff8a2a87a4";
IntegerLocalNoteRecord.init();
return IntegerLocalNoteRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.IntegerLocalNoteRecord = IntegerLocalNoteRecord;

});
define("UBTConnect_Notes_MCS.model$IntegerLocalNoteRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$IntegerLocalNoteRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var IntegerLocalNoteRecordList = (function (_super) {
__extends(IntegerLocalNoteRecordList, _super);
function IntegerLocalNoteRecordList(defaults) {
_super.apply(this, arguments);
}
IntegerLocalNoteRecordList.itemType = UBTConnect_Notes_MCSModel.IntegerLocalNoteRecord;
return IntegerLocalNoteRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.IntegerLocalNoteRecordList = IntegerLocalNoteRecordList;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_GeographyList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyList = (function (_super) {
__extends(Directory_UserCurrent_GeographyList, _super);
function Directory_UserCurrent_GeographyList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec;
return Directory_UserCurrent_GeographyList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_GeographyList = Directory_UserCurrent_GeographyList;

});
define("UBTConnect_Notes_MCS.model$General_Normailzed_NotesForSyncRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$General_Normailzed_NotesForSyncRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var General_Normailzed_NotesForSyncRecord = (function (_super) {
__extends(General_Normailzed_NotesForSyncRecord, _super);
function General_Normailzed_NotesForSyncRecord(defaults) {
_super.apply(this, arguments);
}
General_Normailzed_NotesForSyncRecord.attributesToDeclare = function () {
return [
this.attr("General_Normailzed_NotesForSync", "general_Normailzed_NotesForSyncAttr", "General_Normailzed_NotesForSync", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.General_Normailzed_NotesForSyncRec());
}, true, APIDomain_Directory_ISModel.General_Normailzed_NotesForSyncRec)
].concat(_super.attributesToDeclare.call(this));
};
General_Normailzed_NotesForSyncRecord.fromStructure = function (str) {
return new General_Normailzed_NotesForSyncRecord(new General_Normailzed_NotesForSyncRecord.RecordClass({
general_Normailzed_NotesForSyncAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
General_Normailzed_NotesForSyncRecord._isAnonymousRecord = true;
General_Normailzed_NotesForSyncRecord.UniqueId = "35a80133-8da7-fdcd-d6fc-01b9dae5e7ef";
General_Normailzed_NotesForSyncRecord.init();
return General_Normailzed_NotesForSyncRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.General_Normailzed_NotesForSyncRecord = General_Normailzed_NotesForSyncRecord;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberList = (function (_super) {
__extends(Directory_UserCurrent_MemberList, _super);
function Directory_UserCurrent_MemberList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec;
return Directory_UserCurrent_MemberList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_MemberList = Directory_UserCurrent_MemberList;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrentList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentList = (function (_super) {
__extends(Directory_UserCurrentList, _super);
function Directory_UserCurrentList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrentRec;
return Directory_UserCurrentList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_UserCurrentList = Directory_UserCurrentList;

});
define("UBTConnect_Notes_MCS.model$LongIntegerNoteCategoryIdentifierRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var LongIntegerNoteCategoryIdentifierRecord = (function (_super) {
__extends(LongIntegerNoteCategoryIdentifierRecord, _super);
function LongIntegerNoteCategoryIdentifierRecord(defaults) {
_super.apply(this, arguments);
}
LongIntegerNoteCategoryIdentifierRecord.attributesToDeclare = function () {
return [
this.attr("NotesTotalCountSum", "notesTotalCountSumAttr", "NotesTotalCountSum", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NoteCategoryId", "noteCategoryIdAttr", "NoteCategoryId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LongIntegerNoteCategoryIdentifierRecord._isAnonymousRecord = true;
LongIntegerNoteCategoryIdentifierRecord.UniqueId = "45a4ee78-1f82-7dce-c916-7a95a0b35338";
LongIntegerNoteCategoryIdentifierRecord.init();
return LongIntegerNoteCategoryIdentifierRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.LongIntegerNoteCategoryIdentifierRecord = LongIntegerNoteCategoryIdentifierRecord;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_GeographyRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyRecord = (function (_super) {
__extends(Directory_UserCurrent_GeographyRecord, _super);
function Directory_UserCurrent_GeographyRecord(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyRecord.attributesToDeclare = function () {
return [
this.attr("Directory_UserCurrent_Geography", "directory_UserCurrent_GeographyAttr", "Directory_UserCurrent_Geography", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec());
}, true, APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_UserCurrent_GeographyRecord.fromStructure = function (str) {
return new Directory_UserCurrent_GeographyRecord(new Directory_UserCurrent_GeographyRecord.RecordClass({
directory_UserCurrent_GeographyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_UserCurrent_GeographyRecord._isAnonymousRecord = true;
Directory_UserCurrent_GeographyRecord.UniqueId = "66b448fa-1897-d2e2-a7fa-cc7c1440b306";
Directory_UserCurrent_GeographyRecord.init();
return Directory_UserCurrent_GeographyRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_GeographyRecord = Directory_UserCurrent_GeographyRecord;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberRecord = (function (_super) {
__extends(Directory_UserCurrent_MemberRecord, _super);
function Directory_UserCurrent_MemberRecord(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberRecord.attributesToDeclare = function () {
return [
this.attr("Directory_UserCurrent_Member", "directory_UserCurrent_MemberAttr", "Directory_UserCurrent_Member", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec());
}, true, APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_UserCurrent_MemberRecord.fromStructure = function (str) {
return new Directory_UserCurrent_MemberRecord(new Directory_UserCurrent_MemberRecord.RecordClass({
directory_UserCurrent_MemberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_UserCurrent_MemberRecord._isAnonymousRecord = true;
Directory_UserCurrent_MemberRecord.UniqueId = "6d54e593-baa9-6db1-7764-3f7f0e4e3daf";
Directory_UserCurrent_MemberRecord.init();
return Directory_UserCurrent_MemberRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_MemberRecord = Directory_UserCurrent_MemberRecord;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$Directory_UserCurrent_MemberRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberRecordList = (function (_super) {
__extends(Directory_UserCurrent_MemberRecordList, _super);
function Directory_UserCurrent_MemberRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberRecordList.itemType = UBTConnect_Notes_MCSModel.Directory_UserCurrent_MemberRecord;
return Directory_UserCurrent_MemberRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_MemberRecordList = Directory_UserCurrent_MemberRecordList;

});
define("UBTConnect_Notes_MCS.model$Directory_PhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_PhotoRecord = (function (_super) {
__extends(Directory_PhotoRecord, _super);
function Directory_PhotoRecord(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoRecord.attributesToDeclare = function () {
return [
this.attr("Directory_Photo", "directory_PhotoAttr", "Directory_Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_PhotoRec());
}, true, APIDomain_Directory_ISModel.Directory_PhotoRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_PhotoRecord.fromStructure = function (str) {
return new Directory_PhotoRecord(new Directory_PhotoRecord.RecordClass({
directory_PhotoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_PhotoRecord._isAnonymousRecord = true;
Directory_PhotoRecord.UniqueId = "e43a19ea-a4bc-4b65-a43c-963635eddccc";
Directory_PhotoRecord.init();
return Directory_PhotoRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.Directory_PhotoRecord = Directory_PhotoRecord;

});
define("UBTConnect_Notes_MCS.model$Directory_PhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$Directory_PhotoRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_PhotoRecordList = (function (_super) {
__extends(Directory_PhotoRecordList, _super);
function Directory_PhotoRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoRecordList.itemType = UBTConnect_Notes_MCSModel.Directory_PhotoRecord;
return Directory_PhotoRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_PhotoRecordList = Directory_PhotoRecordList;

});
define("UBTConnect_Notes_MCS.model$General_Normailzed_NotesForSyncRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$General_Normailzed_NotesForSyncRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var General_Normailzed_NotesForSyncRecordList = (function (_super) {
__extends(General_Normailzed_NotesForSyncRecordList, _super);
function General_Normailzed_NotesForSyncRecordList(defaults) {
_super.apply(this, arguments);
}
General_Normailzed_NotesForSyncRecordList.itemType = UBTConnect_Notes_MCSModel.General_Normailzed_NotesForSyncRecord;
return General_Normailzed_NotesForSyncRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.General_Normailzed_NotesForSyncRecordList = General_Normailzed_NotesForSyncRecordList;

});
define("UBTConnect_Notes_MCS.model$DynamicPillList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$DynamicPillRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var DynamicPillList = (function (_super) {
__extends(DynamicPillList, _super);
function DynamicPillList(defaults) {
_super.apply(this, arguments);
}
DynamicPillList.itemType = UBTConnect_Notes_MCSModel.DynamicPillRec;
return DynamicPillList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.DynamicPillList = DynamicPillList;

});
define("UBTConnect_Notes_MCS.model$NoteCategoryRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var NoteCategoryRec = (function (_super) {
__extends(NoteCategoryRec, _super);
function NoteCategoryRec(defaults) {
_super.apply(this, arguments);
}
NoteCategoryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Initials", "initialsAttr", "Initials", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NoteCategoryRec.init();
return NoteCategoryRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.NoteCategoryRec = NoteCategoryRec;

});
define("UBTConnect_Notes_MCS.model$NoteCategoryList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$NoteCategoryRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var NoteCategoryList = (function (_super) {
__extends(NoteCategoryList, _super);
function NoteCategoryList(defaults) {
_super.apply(this, arguments);
}
NoteCategoryList.itemType = UBTConnect_Notes_MCSModel.NoteCategoryRec;
return NoteCategoryList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.NoteCategoryList = NoteCategoryList;

});
define("UBTConnect_Notes_MCS.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBTConnect_Notes_MCS.model", "ServiceCenter.model$UserRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var UserRecord = (function (_super) {
__extends(UserRecord, _super);
function UserRecord(defaults) {
_super.apply(this, arguments);
}
UserRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
UserRecord.fromStructure = function (str) {
return new UserRecord(new UserRecord.RecordClass({
userAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserRecord._isAnonymousRecord = true;
UserRecord.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
UserRecord.init();
return UserRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.UserRecord = UserRecord;

});
define("UBTConnect_Notes_MCS.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$UserRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = UBTConnect_Notes_MCSModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.UserRecordList = UserRecordList;

});
define("UBTConnect_Notes_MCS.model$Custom_Address_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemRecord = (function (_super) {
__extends(Custom_Address_ItemRecord, _super);
function Custom_Address_ItemRecord(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemRecord.attributesToDeclare = function () {
return [
this.attr("Custom_Address_Item", "custom_Address_ItemAttr", "Custom_Address_Item", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Custom_Address_ItemRec());
}, true, APIDomain_Directory_ISModel.Custom_Address_ItemRec)
].concat(_super.attributesToDeclare.call(this));
};
Custom_Address_ItemRecord.fromStructure = function (str) {
return new Custom_Address_ItemRecord(new Custom_Address_ItemRecord.RecordClass({
custom_Address_ItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Custom_Address_ItemRecord._isAnonymousRecord = true;
Custom_Address_ItemRecord.UniqueId = "90f1c8dc-e620-f415-cba4-5d8b6daf100b";
Custom_Address_ItemRecord.init();
return Custom_Address_ItemRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.Custom_Address_ItemRecord = Custom_Address_ItemRecord;

});
define("UBTConnect_Notes_MCS.model$Custom_AddressList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Custom_AddressList = (function (_super) {
__extends(Custom_AddressList, _super);
function Custom_AddressList(defaults) {
_super.apply(this, arguments);
}
Custom_AddressList.itemType = APIDomain_Directory_ISModel.Custom_AddressRec;
return Custom_AddressList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Custom_AddressList = Custom_AddressList;

});
define("UBTConnect_Notes_MCS.model$Custom_Address_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$Custom_Address_ItemRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemRecordList = (function (_super) {
__extends(Custom_Address_ItemRecordList, _super);
function Custom_Address_ItemRecordList(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemRecordList.itemType = UBTConnect_Notes_MCSModel.Custom_Address_ItemRecord;
return Custom_Address_ItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Custom_Address_ItemRecordList = Custom_Address_ItemRecordList;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrentRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentRecord = (function (_super) {
__extends(Directory_UserCurrentRecord, _super);
function Directory_UserCurrentRecord(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentRecord.attributesToDeclare = function () {
return [
this.attr("Directory_UserCurrent", "directory_UserCurrentAttr", "Directory_UserCurrent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrentRec());
}, true, APIDomain_Directory_ISModel.Directory_UserCurrentRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_UserCurrentRecord.fromStructure = function (str) {
return new Directory_UserCurrentRecord(new Directory_UserCurrentRecord.RecordClass({
directory_UserCurrentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_UserCurrentRecord._isAnonymousRecord = true;
Directory_UserCurrentRecord.UniqueId = "a1153076-039f-7703-4690-22ba35d61b2f";
Directory_UserCurrentRecord.init();
return Directory_UserCurrentRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.Directory_UserCurrentRecord = Directory_UserCurrentRecord;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_VisibilityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityList = (function (_super) {
__extends(Directory_UserCurrent_VisibilityList, _super);
function Directory_UserCurrent_VisibilityList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec;
return Directory_UserCurrent_VisibilityList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_VisibilityList = Directory_UserCurrent_VisibilityList;

});
define("UBTConnect_Notes_MCS.model$LocalNoteRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$LocalNoteRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var LocalNoteRecord = (function (_super) {
__extends(LocalNoteRecord, _super);
function LocalNoteRecord(defaults) {
_super.apply(this, arguments);
}
LocalNoteRecord.attributesToDeclare = function () {
return [
this.attr("LocalNote", "localNoteAttr", "LocalNote", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_Notes_MCSModel.LocalNoteRec());
}, true, UBTConnect_Notes_MCSModel.LocalNoteRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalNoteRecord.fromStructure = function (str) {
return new LocalNoteRecord(new LocalNoteRecord.RecordClass({
localNoteAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalNoteRecord._isAnonymousRecord = true;
LocalNoteRecord.UniqueId = "b7ae0a61-6087-99e5-bfb1-cce4860b102a";
LocalNoteRecord.init();
return LocalNoteRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.LocalNoteRecord = LocalNoteRecord;

});
define("UBTConnect_Notes_MCS.model$NoteCategoryRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$NoteCategoryRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var NoteCategoryRecord = (function (_super) {
__extends(NoteCategoryRecord, _super);
function NoteCategoryRecord(defaults) {
_super.apply(this, arguments);
}
NoteCategoryRecord.attributesToDeclare = function () {
return [
this.attr("NoteCategory", "noteCategoryAttr", "NoteCategory", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_Notes_MCSModel.NoteCategoryRec());
}, true, UBTConnect_Notes_MCSModel.NoteCategoryRec)
].concat(_super.attributesToDeclare.call(this));
};
NoteCategoryRecord.fromStructure = function (str) {
return new NoteCategoryRecord(new NoteCategoryRecord.RecordClass({
noteCategoryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NoteCategoryRecord._isAnonymousRecord = true;
NoteCategoryRecord.UniqueId = "ee169515-5a11-c7c5-e431-c9f43b89fe42";
NoteCategoryRecord.init();
return NoteCategoryRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.NoteCategoryRecord = NoteCategoryRecord;

});
define("UBTConnect_Notes_MCS.model$NoteCategoryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$NoteCategoryRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var NoteCategoryRecordList = (function (_super) {
__extends(NoteCategoryRecordList, _super);
function NoteCategoryRecordList(defaults) {
_super.apply(this, arguments);
}
NoteCategoryRecordList.itemType = UBTConnect_Notes_MCSModel.NoteCategoryRecord;
return NoteCategoryRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.NoteCategoryRecordList = NoteCategoryRecordList;

});
define("UBTConnect_Notes_MCS.model$IntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var IntegerRecord = (function (_super) {
__extends(IntegerRecord, _super);
function IntegerRecord(defaults) {
_super.apply(this, arguments);
}
IntegerRecord.attributesToDeclare = function () {
return [
this.attr("GroupByYear", "groupByYearAttr", "GroupByYear", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IntegerRecord.fromStructure = function (str) {
return new IntegerRecord(new IntegerRecord.RecordClass({
groupByYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IntegerRecord._isAnonymousRecord = true;
IntegerRecord.UniqueId = "c4a96837-aeac-e18f-81ec-74bc6c760f5f";
IntegerRecord.init();
return IntegerRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Notes_MCSModel.IntegerRecord = IntegerRecord;

});
define("UBTConnect_Notes_MCS.model$LocalNoteRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$LocalNoteRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var LocalNoteRecordList = (function (_super) {
__extends(LocalNoteRecordList, _super);
function LocalNoteRecordList(defaults) {
_super.apply(this, arguments);
}
LocalNoteRecordList.itemType = UBTConnect_Notes_MCSModel.LocalNoteRecord;
return LocalNoteRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.LocalNoteRecordList = LocalNoteRecordList;

});
define("UBTConnect_Notes_MCS.model$LocalNoteList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$LocalNoteRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var LocalNoteList = (function (_super) {
__extends(LocalNoteList, _super);
function LocalNoteList(defaults) {
_super.apply(this, arguments);
}
LocalNoteList.itemType = UBTConnect_Notes_MCSModel.LocalNoteRec;
return LocalNoteList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.LocalNoteList = LocalNoteList;

});
define("UBTConnect_Notes_MCS.model$LongIntegerNoteCategoryIdentifierRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$LongIntegerNoteCategoryIdentifierRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var LongIntegerNoteCategoryIdentifierRecordList = (function (_super) {
__extends(LongIntegerNoteCategoryIdentifierRecordList, _super);
function LongIntegerNoteCategoryIdentifierRecordList(defaults) {
_super.apply(this, arguments);
}
LongIntegerNoteCategoryIdentifierRecordList.itemType = UBTConnect_Notes_MCSModel.LongIntegerNoteCategoryIdentifierRecord;
return LongIntegerNoteCategoryIdentifierRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.LongIntegerNoteCategoryIdentifierRecordList = LongIntegerNoteCategoryIdentifierRecordList;

});
define("UBTConnect_Notes_MCS.model$Directory_PhotoList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_PhotoList = (function (_super) {
__extends(Directory_PhotoList, _super);
function Directory_PhotoList(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoList.itemType = APIDomain_Directory_ISModel.Directory_PhotoRec;
return Directory_PhotoList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_PhotoList = Directory_PhotoList;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_SubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$Directory_UserCurrent_SubscriptionRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionRecordList = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionRecordList, _super);
function Directory_UserCurrent_SubscriptionRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionRecordList.itemType = UBTConnect_Notes_MCSModel.Directory_UserCurrent_SubscriptionRecord;
return Directory_UserCurrent_SubscriptionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_SubscriptionRecordList = Directory_UserCurrent_SubscriptionRecordList;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$Directory_UserCurrentRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentRecordList = (function (_super) {
__extends(Directory_UserCurrentRecordList, _super);
function Directory_UserCurrentRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentRecordList.itemType = UBTConnect_Notes_MCSModel.Directory_UserCurrentRecord;
return Directory_UserCurrentRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_UserCurrentRecordList = Directory_UserCurrentRecordList;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_GeographyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$Directory_UserCurrent_GeographyRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyRecordList = (function (_super) {
__extends(Directory_UserCurrent_GeographyRecordList, _super);
function Directory_UserCurrent_GeographyRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyRecordList.itemType = UBTConnect_Notes_MCSModel.Directory_UserCurrent_GeographyRecord;
return Directory_UserCurrent_GeographyRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_GeographyRecordList = Directory_UserCurrent_GeographyRecordList;

});
define("UBTConnect_Notes_MCS.model$IntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$IntegerRecord"], function (exports, OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var IntegerRecordList = (function (_super) {
__extends(IntegerRecordList, _super);
function IntegerRecordList(defaults) {
_super.apply(this, arguments);
}
IntegerRecordList.itemType = UBTConnect_Notes_MCSModel.IntegerRecord;
return IntegerRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.IntegerRecordList = IntegerRecordList;

});
define("UBTConnect_Notes_MCS.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBTConnect_Notes_MCS.model", "ServiceCenter.model$UserRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.UserList = UserList;

});
define("UBTConnect_Notes_MCS.model$Directory_UserCurrent_SubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Notes_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "UBTConnect_Notes_MCS.referencesHealth", "UBTConnect_Notes_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionList = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionList, _super);
function Directory_UserCurrent_SubscriptionList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec;
return Directory_UserCurrent_SubscriptionList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Notes_MCSModel.Directory_UserCurrent_SubscriptionList = Directory_UserCurrent_SubscriptionList;

});
define("UBTConnect_Notes_MCS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UBTConnect_Notes_MCSModel = exports;
Object.defineProperty(UBTConnect_Notes_MCSModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["e3738a74-cdb5-4644-82df-e10898ce0aad"];
}
});

UBTConnect_Notes_MCSModel.staticEntities = {};
UBTConnect_Notes_MCSModel.staticEntities.noteCategory = {};
var getNoteCategoryRecord = function (record) {
return UBTConnect_Notes_MCSModel.module.staticEntities["860cdde9-73e7-4b61-af8a-c7b5e1fbe6cf"][record];
};
Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "supperMeeting", {
get: function () {
return getNoteCategoryRecord("1d387917-d25b-46bb-94c4-7e05c179f36a");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "interchange", {
get: function () {
return getNoteCategoryRecord("203a58b1-fd96-4eef-9051-4df69ec34f8c");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "member", {
get: function () {
return getNoteCategoryRecord("290de723-67cc-4315-9fb7-55e8de76b1d2");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "locality", {
get: function () {
return getNoteCategoryRecord("44874762-08a8-491b-93f8-aaab9b360bf3");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "lDMEvent", {
get: function () {
return getNoteCategoryRecord("44e5be1e-e26c-4094-9f63-b6651a5e8931");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "feedItem", {
get: function () {
return getNoteCategoryRecord("52aa2292-35fd-4eac-a2dc-774ccdcd6998");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "orbitEvent", {
get: function () {
return getNoteCategoryRecord("60453ebe-3eb7-4980-8853-20fad7601716");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "localityContact", {
get: function () {
return getNoteCategoryRecord("67475128-6d79-4e3f-b9ac-49af268ab9cc");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "assembleEvent", {
get: function () {
return getNoteCategoryRecord("89d4be3f-9021-4d80-9cc4-18e2720a8444");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "update", {
get: function () {
return getNoteCategoryRecord("a1337a2e-0b32-4674-a0bc-35debcf24c2d");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "personalEvent", {
get: function () {
return getNoteCategoryRecord("a2dac195-6210-4e40-8f7d-2369e4d17f50");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "household", {
get: function () {
return getNoteCategoryRecord("a68357cd-5e1d-4cc8-b579-a32dfa0976a2");
}
});

Object.defineProperty(UBTConnect_Notes_MCSModel.staticEntities.noteCategory, "oneSchoolGlobal", {
get: function () {
return getNoteCategoryRecord("b835d35f-fbbb-4e59-9421-1b5110af8a5a");
}
});

});
