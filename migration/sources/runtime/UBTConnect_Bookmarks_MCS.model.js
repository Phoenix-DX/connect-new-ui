define("UBTConnect_Bookmarks_MCS.model$APIM_CommonHeaderList", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "UBTConnect_Bookmarks_MCS.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderList = (function (_super) {
__extends(APIM_CommonHeaderList, _super);
function APIM_CommonHeaderList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderList.itemType = APIUtilitiesLibModel.APIM_CommonHeaderRec;
return APIM_CommonHeaderList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.APIM_CommonHeaderList = APIM_CommonHeaderList;

});
define("UBTConnect_Bookmarks_MCS.model$BookmarkItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$BookmarkItemRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var BookmarkItemList = (function (_super) {
__extends(BookmarkItemList, _super);
function BookmarkItemList(defaults) {
_super.apply(this, arguments);
}
BookmarkItemList.itemType = APIDomain_Directory_ISModel.BookmarkItemRec;
return BookmarkItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.BookmarkItemList = BookmarkItemList;

});
define("UBTConnect_Bookmarks_MCS.model$DynamicBookmark_PillRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var DynamicBookmark_PillRec = (function (_super) {
__extends(DynamicBookmark_PillRec, _super);
function DynamicBookmark_PillRec(defaults) {
_super.apply(this, arguments);
}
DynamicBookmark_PillRec.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Identifier", "identifierAttr", "Identifier", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DynamicBookmark_PillRec.init();
return DynamicBookmark_PillRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillRec = DynamicBookmark_PillRec;

});
define("UBTConnect_Bookmarks_MCS.model$LongIntegerBookmarkCategoryIdentifierRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var LongIntegerBookmarkCategoryIdentifierRecord = (function (_super) {
__extends(LongIntegerBookmarkCategoryIdentifierRecord, _super);
function LongIntegerBookmarkCategoryIdentifierRecord(defaults) {
_super.apply(this, arguments);
}
LongIntegerBookmarkCategoryIdentifierRecord.attributesToDeclare = function () {
return [
this.attr("Count", "countAttr", "Count", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BookmarkCategoryId", "bookmarkCategoryIdAttr", "BookmarkCategoryId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LongIntegerBookmarkCategoryIdentifierRecord._isAnonymousRecord = true;
LongIntegerBookmarkCategoryIdentifierRecord.UniqueId = "085165aa-1df1-c00e-849b-16dbf52bfdce";
LongIntegerBookmarkCategoryIdentifierRecord.init();
return LongIntegerBookmarkCategoryIdentifierRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.LongIntegerBookmarkCategoryIdentifierRecord = LongIntegerBookmarkCategoryIdentifierRecord;

});
define("UBTConnect_Bookmarks_MCS.model$APIM_CommonHeaderRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "UBTConnect_Bookmarks_MCS.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, UBTConnect_Bookmarks_MCSModel) {
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
UBTConnect_Bookmarks_MCSModel.APIM_CommonHeaderRecord = APIM_CommonHeaderRecord;

});
define("UBTConnect_Bookmarks_MCS.model$APIM_CommonHeaderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$APIM_CommonHeaderRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderRecordList = (function (_super) {
__extends(APIM_CommonHeaderRecordList, _super);
function APIM_CommonHeaderRecordList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderRecordList.itemType = UBTConnect_Bookmarks_MCSModel.APIM_CommonHeaderRecord;
return APIM_CommonHeaderRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.APIM_CommonHeaderRecordList = APIM_CommonHeaderRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$MemberItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$MemberItemRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var MemberItemList = (function (_super) {
__extends(MemberItemList, _super);
function MemberItemList(defaults) {
_super.apply(this, arguments);
}
MemberItemList.itemType = APIDomain_Directory_ISModel.MemberItemRec;
return MemberItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.MemberItemList = MemberItemList;

});
define("UBTConnect_Bookmarks_MCS.model$SourceList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$SourceRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var SourceList = (function (_super) {
__extends(SourceList, _super);
function SourceList(defaults) {
_super.apply(this, arguments);
}
SourceList.itemType = APIDomain_Directory_ISModel.SourceRec;
return SourceList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.SourceList = SourceList;

});
define("UBTConnect_Bookmarks_MCS.model$TextTextLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
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
UBTConnect_Bookmarks_MCSModel.TextTextLongIntegerRecord = TextTextLongIntegerRecord;

});
define("UBTConnect_Bookmarks_MCS.model$TextTextLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$TextTextLongIntegerRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var TextTextLongIntegerRecordList = (function (_super) {
__extends(TextTextLongIntegerRecordList, _super);
function TextTextLongIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextLongIntegerRecordList.itemType = UBTConnect_Bookmarks_MCSModel.TextTextLongIntegerRecord;
return TextTextLongIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.TextTextLongIntegerRecordList = TextTextLongIntegerRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_SubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
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
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_SubscriptionRecord = Directory_UserCurrent_SubscriptionRecord;

});
define("UBTConnect_Bookmarks_MCS.model$Custom_Address_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemList = (function (_super) {
__extends(Custom_Address_ItemList, _super);
function Custom_Address_ItemList(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemList.itemType = APIDomain_Directory_ISModel.Custom_Address_ItemRec;
return Custom_Address_ItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Custom_Address_ItemList = Custom_Address_ItemList;

});
define("UBTConnect_Bookmarks_MCS.model$Enrichment2List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Enrichment2Rec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Enrichment2List = (function (_super) {
__extends(Enrichment2List, _super);
function Enrichment2List(defaults) {
_super.apply(this, arguments);
}
Enrichment2List.itemType = APIDomain_Directory_ISModel.Enrichment2Rec;
return Enrichment2List;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Enrichment2List = Enrichment2List;

});
define("UBTConnect_Bookmarks_MCS.model$Source2Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Source2Rec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Source2Record = (function (_super) {
__extends(Source2Record, _super);
function Source2Record(defaults) {
_super.apply(this, arguments);
}
Source2Record.attributesToDeclare = function () {
return [
this.attr("Source2", "source2Attr", "Source2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Source2Rec());
}, true, APIDomain_Directory_ISModel.Source2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Source2Record.fromStructure = function (str) {
return new Source2Record(new Source2Record.RecordClass({
source2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Source2Record._isAnonymousRecord = true;
Source2Record.UniqueId = "1d0ec838-7a43-b968-a257-29f4ca404fe6";
Source2Record.init();
return Source2Record;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.Source2Record = Source2Record;

});
define("UBTConnect_Bookmarks_MCS.model$Custom_AddressRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
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
UBTConnect_Bookmarks_MCSModel.Custom_AddressRecord = Custom_AddressRecord;

});
define("UBTConnect_Bookmarks_MCS.model$Custom_AddressRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$Custom_AddressRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Custom_AddressRecordList = (function (_super) {
__extends(Custom_AddressRecordList, _super);
function Custom_AddressRecordList(defaults) {
_super.apply(this, arguments);
}
Custom_AddressRecordList.itemType = UBTConnect_Bookmarks_MCSModel.Custom_AddressRecord;
return Custom_AddressRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Custom_AddressRecordList = Custom_AddressRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_VisibilityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
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
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_VisibilityRecord = Directory_UserCurrent_VisibilityRecord;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_VisibilityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_VisibilityRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityRecordList = (function (_super) {
__extends(Directory_UserCurrent_VisibilityRecordList, _super);
function Directory_UserCurrent_VisibilityRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityRecordList.itemType = UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_VisibilityRecord;
return Directory_UserCurrent_VisibilityRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_VisibilityRecordList = Directory_UserCurrent_VisibilityRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Enrichment2Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Enrichment2Rec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Enrichment2Record = (function (_super) {
__extends(Enrichment2Record, _super);
function Enrichment2Record(defaults) {
_super.apply(this, arguments);
}
Enrichment2Record.attributesToDeclare = function () {
return [
this.attr("Enrichment2", "enrichment2Attr", "Enrichment2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Enrichment2Rec());
}, true, APIDomain_Directory_ISModel.Enrichment2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Enrichment2Record.fromStructure = function (str) {
return new Enrichment2Record(new Enrichment2Record.RecordClass({
enrichment2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Enrichment2Record._isAnonymousRecord = true;
Enrichment2Record.UniqueId = "751eb7c0-42e9-0d83-3863-0b0e5d9aaa2b";
Enrichment2Record.init();
return Enrichment2Record;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.Enrichment2Record = Enrichment2Record;

});
define("UBTConnect_Bookmarks_MCS.model$Enrichment2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$Enrichment2Record"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Enrichment2RecordList = (function (_super) {
__extends(Enrichment2RecordList, _super);
function Enrichment2RecordList(defaults) {
_super.apply(this, arguments);
}
Enrichment2RecordList.itemType = UBTConnect_Bookmarks_MCSModel.Enrichment2Record;
return Enrichment2RecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Enrichment2RecordList = Enrichment2RecordList;

});
define("UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var LocalBookmarkRec = (function (_super) {
__extends(LocalBookmarkRec, _super);
function LocalBookmarkRec(defaults) {
_super.apply(this, arguments);
}
LocalBookmarkRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BookmarkId", "bookmarkIdAttr", "BookmarkId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BookmarkCategoryId", "bookmarkCategoryIdAttr", "BookmarkCategoryId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ItemId", "itemIdAttr", "ItemId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedAtDateUtc", "createdAtDateUtcAttr", "CreatedAtDateUtc", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalBookmarkRec.init();
return LocalBookmarkRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec = LocalBookmarkRec;

});
define("UBTConnect_Bookmarks_MCS.model$IntegerLocalBookmarkRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var IntegerLocalBookmarkRecord = (function (_super) {
__extends(IntegerLocalBookmarkRecord, _super);
function IntegerLocalBookmarkRecord(defaults) {
_super.apply(this, arguments);
}
IntegerLocalBookmarkRecord.attributesToDeclare = function () {
return [
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LocalBookmark", "localBookmarkAttr", "LocalBookmark", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec());
}, true, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec)
].concat(_super.attributesToDeclare.call(this));
};
IntegerLocalBookmarkRecord._isAnonymousRecord = true;
IntegerLocalBookmarkRecord.UniqueId = "f5b1490f-c600-f6b7-2596-813a4eec7c6a";
IntegerLocalBookmarkRecord.init();
return IntegerLocalBookmarkRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.IntegerLocalBookmarkRecord = IntegerLocalBookmarkRecord;

});
define("UBTConnect_Bookmarks_MCS.model$IntegerLocalBookmarkRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$IntegerLocalBookmarkRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var IntegerLocalBookmarkRecordList = (function (_super) {
__extends(IntegerLocalBookmarkRecordList, _super);
function IntegerLocalBookmarkRecordList(defaults) {
_super.apply(this, arguments);
}
IntegerLocalBookmarkRecordList.itemType = UBTConnect_Bookmarks_MCSModel.IntegerLocalBookmarkRecord;
return IntegerLocalBookmarkRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.IntegerLocalBookmarkRecordList = IntegerLocalBookmarkRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_GeographyList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyList = (function (_super) {
__extends(Directory_UserCurrent_GeographyList, _super);
function Directory_UserCurrent_GeographyList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec;
return Directory_UserCurrent_GeographyList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_GeographyList = Directory_UserCurrent_GeographyList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberList = (function (_super) {
__extends(Directory_UserCurrent_MemberList, _super);
function Directory_UserCurrent_MemberList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec;
return Directory_UserCurrent_MemberList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_MemberList = Directory_UserCurrent_MemberList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrentList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentList = (function (_super) {
__extends(Directory_UserCurrentList, _super);
function Directory_UserCurrentList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrentRec;
return Directory_UserCurrentList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrentList = Directory_UserCurrentList;

});
define("UBTConnect_Bookmarks_MCS.model$DynamicBookmark_PillRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$DynamicBookmark_PillRec"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var DynamicBookmark_PillRecord = (function (_super) {
__extends(DynamicBookmark_PillRecord, _super);
function DynamicBookmark_PillRecord(defaults) {
_super.apply(this, arguments);
}
DynamicBookmark_PillRecord.attributesToDeclare = function () {
return [
this.attr("DynamicBookmark_Pill", "dynamicBookmark_PillAttr", "DynamicBookmark_Pill", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillRec());
}, true, UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillRec)
].concat(_super.attributesToDeclare.call(this));
};
DynamicBookmark_PillRecord.fromStructure = function (str) {
return new DynamicBookmark_PillRecord(new DynamicBookmark_PillRecord.RecordClass({
dynamicBookmark_PillAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DynamicBookmark_PillRecord._isAnonymousRecord = true;
DynamicBookmark_PillRecord.UniqueId = "4a4d2f57-8498-e2cb-939a-20bffcd8a159";
DynamicBookmark_PillRecord.init();
return DynamicBookmark_PillRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillRecord = DynamicBookmark_PillRecord;

});
define("UBTConnect_Bookmarks_MCS.model$Source2List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Source2Rec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Source2List = (function (_super) {
__extends(Source2List, _super);
function Source2List(defaults) {
_super.apply(this, arguments);
}
Source2List.itemType = APIDomain_Directory_ISModel.Source2Rec;
return Source2List;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Source2List = Source2List;

});
define("UBTConnect_Bookmarks_MCS.model$LongIntegerBookmarkCategoryIdentifierRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$LongIntegerBookmarkCategoryIdentifierRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var LongIntegerBookmarkCategoryIdentifierRecordList = (function (_super) {
__extends(LongIntegerBookmarkCategoryIdentifierRecordList, _super);
function LongIntegerBookmarkCategoryIdentifierRecordList(defaults) {
_super.apply(this, arguments);
}
LongIntegerBookmarkCategoryIdentifierRecordList.itemType = UBTConnect_Bookmarks_MCSModel.LongIntegerBookmarkCategoryIdentifierRecord;
return LongIntegerBookmarkCategoryIdentifierRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.LongIntegerBookmarkCategoryIdentifierRecordList = LongIntegerBookmarkCategoryIdentifierRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$BookmarkItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$BookmarkItemRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var BookmarkItemRecord = (function (_super) {
__extends(BookmarkItemRecord, _super);
function BookmarkItemRecord(defaults) {
_super.apply(this, arguments);
}
BookmarkItemRecord.attributesToDeclare = function () {
return [
this.attr("BookmarkItem", "bookmarkItemAttr", "BookmarkItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.BookmarkItemRec());
}, true, APIDomain_Directory_ISModel.BookmarkItemRec)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkItemRecord.fromStructure = function (str) {
return new BookmarkItemRecord(new BookmarkItemRecord.RecordClass({
bookmarkItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BookmarkItemRecord._isAnonymousRecord = true;
BookmarkItemRecord.UniqueId = "57713998-6cd6-0111-9aa6-492a1f11c9bf";
BookmarkItemRecord.init();
return BookmarkItemRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.BookmarkItemRecord = BookmarkItemRecord;

});
define("UBTConnect_Bookmarks_MCS.model$LocalBookmarkRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var LocalBookmarkRecord = (function (_super) {
__extends(LocalBookmarkRecord, _super);
function LocalBookmarkRecord(defaults) {
_super.apply(this, arguments);
}
LocalBookmarkRecord.attributesToDeclare = function () {
return [
this.attr("LocalBookmark", "localBookmarkAttr", "LocalBookmark", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec());
}, true, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalBookmarkRecord.fromStructure = function (str) {
return new LocalBookmarkRecord(new LocalBookmarkRecord.RecordClass({
localBookmarkAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalBookmarkRecord._isAnonymousRecord = true;
LocalBookmarkRecord.UniqueId = "f98a5352-ed01-22d6-e756-16696ad213af";
LocalBookmarkRecord.init();
return LocalBookmarkRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecord = LocalBookmarkRecord;

});
define("UBTConnect_Bookmarks_MCS.model$LocalBookmarkRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var LocalBookmarkRecordList = (function (_super) {
__extends(LocalBookmarkRecordList, _super);
function LocalBookmarkRecordList(defaults) {
_super.apply(this, arguments);
}
LocalBookmarkRecordList.itemType = UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecord;
return LocalBookmarkRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList = LocalBookmarkRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$General_Normalized_BookmarksForSyncRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$General_Normalized_BookmarksForSyncRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var General_Normalized_BookmarksForSyncRecord = (function (_super) {
__extends(General_Normalized_BookmarksForSyncRecord, _super);
function General_Normalized_BookmarksForSyncRecord(defaults) {
_super.apply(this, arguments);
}
General_Normalized_BookmarksForSyncRecord.attributesToDeclare = function () {
return [
this.attr("General_Normalized_BookmarksForSync", "general_Normalized_BookmarksForSyncAttr", "General_Normalized_BookmarksForSync", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.General_Normalized_BookmarksForSyncRec());
}, true, APIDomain_Directory_ISModel.General_Normalized_BookmarksForSyncRec)
].concat(_super.attributesToDeclare.call(this));
};
General_Normalized_BookmarksForSyncRecord.fromStructure = function (str) {
return new General_Normalized_BookmarksForSyncRecord(new General_Normalized_BookmarksForSyncRecord.RecordClass({
general_Normalized_BookmarksForSyncAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
General_Normalized_BookmarksForSyncRecord._isAnonymousRecord = true;
General_Normalized_BookmarksForSyncRecord.UniqueId = "8a353bff-c32a-b7f5-6c5e-acf3811207e6";
General_Normalized_BookmarksForSyncRecord.init();
return General_Normalized_BookmarksForSyncRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.General_Normalized_BookmarksForSyncRecord = General_Normalized_BookmarksForSyncRecord;

});
define("UBTConnect_Bookmarks_MCS.model$General_Normalized_BookmarksForSyncRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$General_Normalized_BookmarksForSyncRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var General_Normalized_BookmarksForSyncRecordList = (function (_super) {
__extends(General_Normalized_BookmarksForSyncRecordList, _super);
function General_Normalized_BookmarksForSyncRecordList(defaults) {
_super.apply(this, arguments);
}
General_Normalized_BookmarksForSyncRecordList.itemType = UBTConnect_Bookmarks_MCSModel.General_Normalized_BookmarksForSyncRecord;
return General_Normalized_BookmarksForSyncRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.General_Normalized_BookmarksForSyncRecordList = General_Normalized_BookmarksForSyncRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$BookmarkItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$BookmarkItemRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var BookmarkItemRecordList = (function (_super) {
__extends(BookmarkItemRecordList, _super);
function BookmarkItemRecordList(defaults) {
_super.apply(this, arguments);
}
BookmarkItemRecordList.itemType = UBTConnect_Bookmarks_MCSModel.BookmarkItemRecord;
return BookmarkItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.BookmarkItemRecordList = BookmarkItemRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_GeographyRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
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
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_GeographyRecord = Directory_UserCurrent_GeographyRecord;

});
define("UBTConnect_Bookmarks_MCS.model$EnrichmentRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$EnrichmentRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var EnrichmentRecord = (function (_super) {
__extends(EnrichmentRecord, _super);
function EnrichmentRecord(defaults) {
_super.apply(this, arguments);
}
EnrichmentRecord.attributesToDeclare = function () {
return [
this.attr("Enrichment", "enrichmentAttr", "Enrichment", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.EnrichmentRec());
}, true, APIDomain_Directory_ISModel.EnrichmentRec)
].concat(_super.attributesToDeclare.call(this));
};
EnrichmentRecord.fromStructure = function (str) {
return new EnrichmentRecord(new EnrichmentRecord.RecordClass({
enrichmentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EnrichmentRecord._isAnonymousRecord = true;
EnrichmentRecord.UniqueId = "66eba77f-121e-ff03-e304-cfbd3e95e1fb";
EnrichmentRecord.init();
return EnrichmentRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.EnrichmentRecord = EnrichmentRecord;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
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
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_MemberRecord = Directory_UserCurrent_MemberRecord;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_MemberRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberRecordList = (function (_super) {
__extends(Directory_UserCurrent_MemberRecordList, _super);
function Directory_UserCurrent_MemberRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberRecordList.itemType = UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_MemberRecord;
return Directory_UserCurrent_MemberRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_MemberRecordList = Directory_UserCurrent_MemberRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_PhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
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
UBTConnect_Bookmarks_MCSModel.Directory_PhotoRecord = Directory_PhotoRecord;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_PhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$Directory_PhotoRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_PhotoRecordList = (function (_super) {
__extends(Directory_PhotoRecordList, _super);
function Directory_PhotoRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoRecordList.itemType = UBTConnect_Bookmarks_MCSModel.Directory_PhotoRecord;
return Directory_PhotoRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_PhotoRecordList = Directory_PhotoRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$LocalBookmarkList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var LocalBookmarkList = (function (_super) {
__extends(LocalBookmarkList, _super);
function LocalBookmarkList(defaults) {
_super.apply(this, arguments);
}
LocalBookmarkList.itemType = UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec;
return LocalBookmarkList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.LocalBookmarkList = LocalBookmarkList;

});
define("UBTConnect_Bookmarks_MCS.model$DynamicBookmark_PillRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$DynamicBookmark_PillRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var DynamicBookmark_PillRecordList = (function (_super) {
__extends(DynamicBookmark_PillRecordList, _super);
function DynamicBookmark_PillRecordList(defaults) {
_super.apply(this, arguments);
}
DynamicBookmark_PillRecordList.itemType = UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillRecord;
return DynamicBookmark_PillRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillRecordList = DynamicBookmark_PillRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$SourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$SourceRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var SourceRecord = (function (_super) {
__extends(SourceRecord, _super);
function SourceRecord(defaults) {
_super.apply(this, arguments);
}
SourceRecord.attributesToDeclare = function () {
return [
this.attr("Source", "sourceAttr", "Source", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SourceRec());
}, true, APIDomain_Directory_ISModel.SourceRec)
].concat(_super.attributesToDeclare.call(this));
};
SourceRecord.fromStructure = function (str) {
return new SourceRecord(new SourceRecord.RecordClass({
sourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SourceRecord._isAnonymousRecord = true;
SourceRecord.UniqueId = "8c816a8f-0233-04f4-9b04-cc49e17538a9";
SourceRecord.init();
return SourceRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.SourceRecord = SourceRecord;

});
define("UBTConnect_Bookmarks_MCS.model$SourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$SourceRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var SourceRecordList = (function (_super) {
__extends(SourceRecordList, _super);
function SourceRecordList(defaults) {
_super.apply(this, arguments);
}
SourceRecordList.itemType = UBTConnect_Bookmarks_MCSModel.SourceRecord;
return SourceRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.SourceRecordList = SourceRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Custom_Address_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
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
UBTConnect_Bookmarks_MCSModel.Custom_Address_ItemRecord = Custom_Address_ItemRecord;

});
define("UBTConnect_Bookmarks_MCS.model$Custom_AddressList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Custom_AddressList = (function (_super) {
__extends(Custom_AddressList, _super);
function Custom_AddressList(defaults) {
_super.apply(this, arguments);
}
Custom_AddressList.itemType = APIDomain_Directory_ISModel.Custom_AddressRec;
return Custom_AddressList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Custom_AddressList = Custom_AddressList;

});
define("UBTConnect_Bookmarks_MCS.model$BookmarkCategoryRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var BookmarkCategoryRec = (function (_super) {
__extends(BookmarkCategoryRec, _super);
function BookmarkCategoryRec(defaults) {
_super.apply(this, arguments);
}
BookmarkCategoryRec.attributesToDeclare = function () {
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
BookmarkCategoryRec.init();
return BookmarkCategoryRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.BookmarkCategoryRec = BookmarkCategoryRec;

});
define("UBTConnect_Bookmarks_MCS.model$BookmarkCategoryRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$BookmarkCategoryRec"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var BookmarkCategoryRecord = (function (_super) {
__extends(BookmarkCategoryRecord, _super);
function BookmarkCategoryRecord(defaults) {
_super.apply(this, arguments);
}
BookmarkCategoryRecord.attributesToDeclare = function () {
return [
this.attr("BookmarkCategory", "bookmarkCategoryAttr", "BookmarkCategory", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_Bookmarks_MCSModel.BookmarkCategoryRec());
}, true, UBTConnect_Bookmarks_MCSModel.BookmarkCategoryRec)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkCategoryRecord.fromStructure = function (str) {
return new BookmarkCategoryRecord(new BookmarkCategoryRecord.RecordClass({
bookmarkCategoryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BookmarkCategoryRecord._isAnonymousRecord = true;
BookmarkCategoryRecord.UniqueId = "e1d3e578-732f-563e-48ac-b3823f9c1c1f";
BookmarkCategoryRecord.init();
return BookmarkCategoryRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.BookmarkCategoryRecord = BookmarkCategoryRecord;

});
define("UBTConnect_Bookmarks_MCS.model$BookmarkCategoryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$BookmarkCategoryRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var BookmarkCategoryRecordList = (function (_super) {
__extends(BookmarkCategoryRecordList, _super);
function BookmarkCategoryRecordList(defaults) {
_super.apply(this, arguments);
}
BookmarkCategoryRecordList.itemType = UBTConnect_Bookmarks_MCSModel.BookmarkCategoryRecord;
return BookmarkCategoryRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.BookmarkCategoryRecordList = BookmarkCategoryRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$EnrichmentList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$EnrichmentRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var EnrichmentList = (function (_super) {
__extends(EnrichmentList, _super);
function EnrichmentList(defaults) {
_super.apply(this, arguments);
}
EnrichmentList.itemType = APIDomain_Directory_ISModel.EnrichmentRec;
return EnrichmentList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.EnrichmentList = EnrichmentList;

});
define("UBTConnect_Bookmarks_MCS.model$Custom_Address_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$Custom_Address_ItemRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemRecordList = (function (_super) {
__extends(Custom_Address_ItemRecordList, _super);
function Custom_Address_ItemRecordList(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemRecordList.itemType = UBTConnect_Bookmarks_MCSModel.Custom_Address_ItemRecord;
return Custom_Address_ItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Custom_Address_ItemRecordList = Custom_Address_ItemRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrentRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
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
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrentRecord = Directory_UserCurrentRecord;

});
define("UBTConnect_Bookmarks_MCS.model$MemberItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$MemberItemRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var MemberItemRecord = (function (_super) {
__extends(MemberItemRecord, _super);
function MemberItemRecord(defaults) {
_super.apply(this, arguments);
}
MemberItemRecord.attributesToDeclare = function () {
return [
this.attr("MemberItem", "memberItemAttr", "MemberItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.MemberItemRec());
}, true, APIDomain_Directory_ISModel.MemberItemRec)
].concat(_super.attributesToDeclare.call(this));
};
MemberItemRecord.fromStructure = function (str) {
return new MemberItemRecord(new MemberItemRecord.RecordClass({
memberItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemberItemRecord._isAnonymousRecord = true;
MemberItemRecord.UniqueId = "cec4bb7b-f204-f26c-8066-ab28e4a14a02";
MemberItemRecord.init();
return MemberItemRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_Bookmarks_MCSModel.MemberItemRecord = MemberItemRecord;

});
define("UBTConnect_Bookmarks_MCS.model$MemberItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$MemberItemRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var MemberItemRecordList = (function (_super) {
__extends(MemberItemRecordList, _super);
function MemberItemRecordList(defaults) {
_super.apply(this, arguments);
}
MemberItemRecordList.itemType = UBTConnect_Bookmarks_MCSModel.MemberItemRecord;
return MemberItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.MemberItemRecordList = MemberItemRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_VisibilityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityList = (function (_super) {
__extends(Directory_UserCurrent_VisibilityList, _super);
function Directory_UserCurrent_VisibilityList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec;
return Directory_UserCurrent_VisibilityList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_VisibilityList = Directory_UserCurrent_VisibilityList;

});
define("UBTConnect_Bookmarks_MCS.model$EnrichmentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$EnrichmentRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var EnrichmentRecordList = (function (_super) {
__extends(EnrichmentRecordList, _super);
function EnrichmentRecordList(defaults) {
_super.apply(this, arguments);
}
EnrichmentRecordList.itemType = UBTConnect_Bookmarks_MCSModel.EnrichmentRecord;
return EnrichmentRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.EnrichmentRecordList = EnrichmentRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$IntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
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
UBTConnect_Bookmarks_MCSModel.IntegerRecord = IntegerRecord;

});
define("UBTConnect_Bookmarks_MCS.model$General_Normalized_BookmarksForSyncList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$General_Normalized_BookmarksForSyncRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var General_Normalized_BookmarksForSyncList = (function (_super) {
__extends(General_Normalized_BookmarksForSyncList, _super);
function General_Normalized_BookmarksForSyncList(defaults) {
_super.apply(this, arguments);
}
General_Normalized_BookmarksForSyncList.itemType = APIDomain_Directory_ISModel.General_Normalized_BookmarksForSyncRec;
return General_Normalized_BookmarksForSyncList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.General_Normalized_BookmarksForSyncList = General_Normalized_BookmarksForSyncList;

});
define("UBTConnect_Bookmarks_MCS.model$BookmarkCategoryList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$BookmarkCategoryRec"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var BookmarkCategoryList = (function (_super) {
__extends(BookmarkCategoryList, _super);
function BookmarkCategoryList(defaults) {
_super.apply(this, arguments);
}
BookmarkCategoryList.itemType = UBTConnect_Bookmarks_MCSModel.BookmarkCategoryRec;
return BookmarkCategoryList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.BookmarkCategoryList = BookmarkCategoryList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_PhotoList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_PhotoList = (function (_super) {
__extends(Directory_PhotoList, _super);
function Directory_PhotoList(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoList.itemType = APIDomain_Directory_ISModel.Directory_PhotoRec;
return Directory_PhotoList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_PhotoList = Directory_PhotoList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_SubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_SubscriptionRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionRecordList = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionRecordList, _super);
function Directory_UserCurrent_SubscriptionRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionRecordList.itemType = UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_SubscriptionRecord;
return Directory_UserCurrent_SubscriptionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_SubscriptionRecordList = Directory_UserCurrent_SubscriptionRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$Directory_UserCurrentRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentRecordList = (function (_super) {
__extends(Directory_UserCurrentRecordList, _super);
function Directory_UserCurrentRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentRecordList.itemType = UBTConnect_Bookmarks_MCSModel.Directory_UserCurrentRecord;
return Directory_UserCurrentRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrentRecordList = Directory_UserCurrentRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_GeographyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_GeographyRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyRecordList = (function (_super) {
__extends(Directory_UserCurrent_GeographyRecordList, _super);
function Directory_UserCurrent_GeographyRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyRecordList.itemType = UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_GeographyRecord;
return Directory_UserCurrent_GeographyRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_GeographyRecordList = Directory_UserCurrent_GeographyRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$Source2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$Source2Record"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Source2RecordList = (function (_super) {
__extends(Source2RecordList, _super);
function Source2RecordList(defaults) {
_super.apply(this, arguments);
}
Source2RecordList.itemType = UBTConnect_Bookmarks_MCSModel.Source2Record;
return Source2RecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Source2RecordList = Source2RecordList;

});
define("UBTConnect_Bookmarks_MCS.model$IntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$IntegerRecord"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var IntegerRecordList = (function (_super) {
__extends(IntegerRecordList, _super);
function IntegerRecordList(defaults) {
_super.apply(this, arguments);
}
IntegerRecordList.itemType = UBTConnect_Bookmarks_MCSModel.IntegerRecord;
return IntegerRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.IntegerRecordList = IntegerRecordList;

});
define("UBTConnect_Bookmarks_MCS.model$DynamicBookmark_PillList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$DynamicBookmark_PillRec"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var DynamicBookmark_PillList = (function (_super) {
__extends(DynamicBookmark_PillList, _super);
function DynamicBookmark_PillList(defaults) {
_super.apply(this, arguments);
}
DynamicBookmark_PillList.itemType = UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillRec;
return DynamicBookmark_PillList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillList = DynamicBookmark_PillList;

});
define("UBTConnect_Bookmarks_MCS.model$Directory_UserCurrent_SubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Bookmarks_MCS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "UBTConnect_Bookmarks_MCS.referencesHealth", "UBTConnect_Bookmarks_MCS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionList = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionList, _super);
function Directory_UserCurrent_SubscriptionList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec;
return Directory_UserCurrent_SubscriptionList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_Bookmarks_MCSModel.Directory_UserCurrent_SubscriptionList = Directory_UserCurrent_SubscriptionList;

});
define("UBTConnect_Bookmarks_MCS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UBTConnect_Bookmarks_MCSModel = exports;
Object.defineProperty(UBTConnect_Bookmarks_MCSModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["edb98778-90f1-4e97-9def-fc0d37a768a3"];
}
});

UBTConnect_Bookmarks_MCSModel.staticEntities = {};
UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory = {};
var getBookmarkCategoryRecord = function (record) {
return UBTConnect_Bookmarks_MCSModel.module.staticEntities["8eb461ea-41a0-46c2-b1dd-4d8f74a29b3b"][record];
};
Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "localityContact", {
get: function () {
return getBookmarkCategoryRecord("04304879-c111-49f5-aa22-a7a688a6609c");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "assembleEvent", {
get: function () {
return getBookmarkCategoryRecord("119d70ef-ff0c-4456-8866-94f73c053714");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "supperMeeting", {
get: function () {
return getBookmarkCategoryRecord("49355017-2b1c-41e5-a429-3d2219034457");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "feedItem", {
get: function () {
return getBookmarkCategoryRecord("5642d96f-6259-4c64-88ea-bf3c3aee6b39");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "member", {
get: function () {
return getBookmarkCategoryRecord("76d6523e-e548-481b-8c52-8d125dadef86");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "orbitEvent", {
get: function () {
return getBookmarkCategoryRecord("770c6f2d-4343-4368-8ff9-c7c35d960779");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "household", {
get: function () {
return getBookmarkCategoryRecord("80fe68c3-c7ec-4c75-b041-7eeb9416daf8");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "personalEvent", {
get: function () {
return getBookmarkCategoryRecord("889d590c-4fae-41ef-9273-0a1eff8e4dd0");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "oneSchoolGlobal2", {
get: function () {
return getBookmarkCategoryRecord("9d26144a-975b-45a3-9e6d-2c93d53828bd");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "locality", {
get: function () {
return getBookmarkCategoryRecord("a348818a-fa35-4bff-a34e-178519d83bf7");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "lDMEvent", {
get: function () {
return getBookmarkCategoryRecord("c0c23dcd-8b34-4ea0-b850-0f773da376b3");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "update", {
get: function () {
return getBookmarkCategoryRecord("d6e17b52-a77d-48c1-9198-b4eab4db6972");
}
});

Object.defineProperty(UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory, "interchange", {
get: function () {
return getBookmarkCategoryRecord("d824fe40-c000-47ee-8361-5c0a281dd640");
}
});

});
